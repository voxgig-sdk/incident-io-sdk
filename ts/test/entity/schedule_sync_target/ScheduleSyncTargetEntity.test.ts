

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IncidentIoSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ScheduleSyncTargetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleSyncTarget()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('schedule_sync_target hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).ScheduleSyncTarget().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).ScheduleSyncTarget()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.ScheduleSyncTarget().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().ScheduleSyncTarget().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.ScheduleSyncTarget().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.ScheduleSyncTarget().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleSyncTarget().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_sync_target.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"add_bot_to_group":{"a":true,"h":"Add Bot To Group","n":"add_bot_to_group","r":true,"sh":"Whether the incident.io bot should be added to the group as a member.","t":"`$BOOLEAN`","key$":"add_bot_to_group","index$":0},"annotations":{"a":true,"h":"Annotations","n":"annotations","r":false,"sh":"Annotations that track metadata about this resource","t":"`$OBJECT`","key$":"annotations","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the sync target","t":"`$STRING`","key$":"id","index$":3},"linked_schedules":{"a":true,"h":"Linked Schedules","n":"linked_schedules","r":true,"sh":"Schedules with an active sync rule pointing at this target","t":"`$ARRAY`","key$":"linked_schedules","index$":4},"new_slack_user_group":{"a":true,"h":"New Slack User Group","n":"new_slack_user_group","r":true,"t":"`$OBJECT`","key$":"new_slack_user_group","index$":5},"slack_team_id":{"a":true,"h":"Slack Team Id","n":"slack_team_id","r":true,"sh":"Slack team (workspace) ID the user group lives in.","t":"`$STRING`","key$":"slack_team_id","index$":6},"slack_user_group_id":{"a":true,"h":"Slack User Group Id","n":"slack_user_group_id","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Slack ID of the user group whose membership is kept in sync.","t":"`$STRING`","key$":"slack_user_group_id","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"schedule_sync_target","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["add_bot_to_group","annotations","new_slack_user_group","slack_user_group_id"],"co":{"id":"POST /v2/schedule_sync_targets","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/schedule_sync_targets","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_sync_targets"}],"t":{"req":{"schedule_sync_target":"`reqdata`"},"res":"`body.schedule_sync_target`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/schedule_sync_targets","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v2/schedule_sync_targets","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_sync_targets"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_targets`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/schedule_sync_targets/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abc123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/schedule_sync_targets/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_sync_targets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_target`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/schedule_sync_targets/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abc123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/schedule_sync_targets/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"schedule_sync_targets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["add_bot_to_group","annotations"],"co":{"id":"PUT /v2/schedule_sync_targets/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abc123","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/schedule_sync_targets/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_sync_targets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_target`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"schedule_sync_target","name__orig":"schedule_sync_target","Name":"ScheduleSyncTarget","name_":"schedule_sync_target","name-":"schedule-sync-target","NAME":"SCHEDULE_SYNC_TARGET","index$":89}, {"active":true,"entity":"schedule_sync_target","key$":"BasicScheduleSyncTargetFlow","kind":"basic","name":"BasicScheduleSyncTargetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"schedule_sync_target_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"schedule_sync_target_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"schedule_sync_target_ref01","srcdatavar":"schedule_sync_target_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_sync_target_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"schedule_sync_target_ref01","srcdatavar":"schedule_sync_target_ref01_data","suffix":"_dt0"},"m":{"id":"schedule_sync_target01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_sync_target_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"schedule_sync_target_ref01","suffix":"_rm0"},"m":{"id":"schedule_sync_target01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"schedule_sync_target_ref01"}}],"index$":5}]}, 'ScheduleSyncTarget', {"POST /v2/schedule_sync_targets":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"schedule_sync_target":{"add_bot_to_group":true,"annotations":{"incident.io/terraform/version":"3.0.0"},"new_slack_user_group":{"description":"The team responsible for Project A","handle":"project-team-a","name":"Project Team A","slack_team_id":"T01234567"},"slack_user_group_id":"S06MNNU5BMK"}},"schema":{"example":{"schedule_sync_target":{"add_bot_to_group":true,"annotations":{"incident.io/terraform/version":"3.0.0"},"new_slack_user_group":{"description":"The team responsible for Project A","handle":"project-team-a","name":"Project Team A","slack_team_id":"T01234567"},"slack_user_group_id":"S06MNNU5BMK"}},"properties":{"schedule_sync_target":{"example":{"add_bot_to_group":true,"annotations":{"incident.io/terraform/version":"3.0.0"},"new_slack_user_group":{"description":"The team responsible for Project A","handle":"project-team-a","name":"Project Team A","slack_team_id":"T01234567"},"slack_user_group_id":"S06MNNU5BMK"},"properties":{"add_bot_to_group":{"description":"Whether the incident.io bot should be added to the group","example":true,"type":"boolean","key$":"add_bot_to_group"},"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that track metadata about this resource","example":{"incident.io/terraform/version":"3.0.0"},"type":"object","key$":"annotations"},"new_slack_user_group":{"example":{"description":"The team responsible for Project A","handle":"project-team-a","name":"Project Team A","slack_team_id":"T01234567"},"properties":{"description":{},"handle":{},"name":{},"slack_team_id":{}},"required":["name","handle","description"],"type":"object","x-ref":"#/components/schemas/NewSlackUserGroupPayloadV2","key$":"new_slack_user_group"},"slack_user_group_id":{"description":"Slack ID of an existing user group to sync to. Mutually exclusive with new_slack_user_group; exactly one must be set.","example":"S06MNNU5BMK","type":"string","key$":"slack_user_group_id"}},"required":["add_bot_to_group"],"type":"object","x-ref":"#/components/schemas/ScheduleSyncTargetCreatePayloadV2","index$":1}},"required":["schedule_sync_target"],"type":"object","x-ref":"#/components/schemas/ScheduleSyncTargetsCreatePayloadV2"}}},"required":true},"parameters":[]},"GET /v2/schedule_sync_targets":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A sync target's ID. This endpoint will return a list of sync targets after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FDAG4SAP5TYPT98WGR2N7W91"}},"in":"query","name":"after","schema":{"description":"A sync target's ID. This endpoint will return a list of sync targets after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1}]},"GET /v2/schedule_sync_targets/{id}":{"protocol":"http","parameters":[{"description":"The sync target ID","example":"abc123","in":"path","name":"id","required":true,"schema":{"description":"The sync target ID","example":"abc123","type":"string"},"index$":0}]},"DELETE /v2/schedule_sync_targets/{id}":{"protocol":"http","parameters":[{"description":"The sync target ID to archive","example":"abc123","in":"path","name":"id","required":true,"schema":{"description":"The sync target ID to archive","example":"abc123","type":"string"},"index$":0}]},"PUT /v2/schedule_sync_targets/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"add_bot_to_group":true,"annotations":{"incident.io/terraform/version":"3.0.0"}},"schema":{"example":{"add_bot_to_group":true,"annotations":{"incident.io/terraform/version":"3.0.0"}},"properties":{"add_bot_to_group":{"description":"Whether the incident.io bot should be added to the group","example":true,"type":"boolean","key$":"add_bot_to_group"},"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that track metadata about this resource","example":{"incident.io/terraform/version":"3.0.0"},"type":"object","key$":"annotations"}},"required":["add_bot_to_group"],"type":"object","x-ref":"#/components/schemas/ScheduleSyncTargetsUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The sync target ID","example":"abc123","in":"path","name":"id","required":true,"schema":{"description":"The sync target ID","example":"abc123","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_sync_target_ref01_ent = client.ScheduleSyncTarget()
    let schedule_sync_target_ref01_data = setup.data.new.schedule_sync_target['schedule_sync_target_ref01']

    schedule_sync_target_ref01_data = (await schedule_sync_target_ref01_ent.create(schedule_sync_target_ref01_data)).data()
    assert(null != schedule_sync_target_ref01_data.id)


    // LIST
    const schedule_sync_target_ref01_match: any = {}

    const schedule_sync_target_ref01_list = (await schedule_sync_target_ref01_ent.list(schedule_sync_target_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(schedule_sync_target_ref01_list, { id: schedule_sync_target_ref01_data.id })))


    // UPDATE
    const schedule_sync_target_ref01_data_up0: any = {}
    schedule_sync_target_ref01_data_up0.id = schedule_sync_target_ref01_data.id

    const schedule_sync_target_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_sync_target_ref01_' + setup.now }
    ;(schedule_sync_target_ref01_data_up0 as any)[schedule_sync_target_ref01_markdef_up0.name] = schedule_sync_target_ref01_markdef_up0.value

    const schedule_sync_target_ref01_resdata_up0 = (await schedule_sync_target_ref01_ent.update(schedule_sync_target_ref01_data_up0)).data()
    assert(schedule_sync_target_ref01_resdata_up0.id === schedule_sync_target_ref01_data_up0.id)

    assert((schedule_sync_target_ref01_resdata_up0 as any)[schedule_sync_target_ref01_markdef_up0.name] === schedule_sync_target_ref01_markdef_up0.value)


    // LOAD
    const schedule_sync_target_ref01_match_dt0: any = {}
    schedule_sync_target_ref01_match_dt0.id = schedule_sync_target_ref01_data.id
    const schedule_sync_target_ref01_data_dt0 = (await schedule_sync_target_ref01_ent.load(schedule_sync_target_ref01_match_dt0)).data()
    assert(schedule_sync_target_ref01_data_dt0.id === schedule_sync_target_ref01_data.id)


    // REMOVE
    const schedule_sync_target_ref01_match_rm0: any = { id: schedule_sync_target_ref01_data.id }
    await schedule_sync_target_ref01_ent.remove(schedule_sync_target_ref01_match_rm0)
  

    // LIST
    const schedule_sync_target_ref01_match_rt0: any = {}

    const schedule_sync_target_ref01_list_rt0 = (await schedule_sync_target_ref01_ent.list(schedule_sync_target_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(schedule_sync_target_ref01_list_rt0, { id: schedule_sync_target_ref01_data.id })))


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/schedule_sync_target/ScheduleSyncTargetTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = IncidentIoSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['schedule_sync_target01','schedule_sync_target02','schedule_sync_target03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_SYNC_TARGET_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_SYNC_TARGET_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_SYNC_TARGET_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IncidentIoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INCIDENT_IO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.INCIDENT_IO_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

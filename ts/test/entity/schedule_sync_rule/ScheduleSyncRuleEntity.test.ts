

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


describe('ScheduleSyncRuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleSyncRule()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleSyncRule().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['update', 'load', 'remove', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_sync_rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"annotations":{"a":true,"h":"Annotations","n":"annotations","r":false,"sh":"Annotations that track metadata about this resource","t":"`$OBJECT`","key$":"annotations","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the sync rule","t":"`$STRING`","key$":"id","index$":2},"permanent_member_user_ids":{"a":true,"h":"Permanent Member User Ids","n":"permanent_member_user_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"IDs of users always kept in the Slack user group, regardless of who is on call.","t":"`$ARRAY`","key$":"permanent_member_user_ids","index$":3},"rotation_id":{"a":true,"h":"Rotation Id","n":"rotation_id","r":false,"sh":"If set, only members of this rotation sync to the user group.","t":"`$STRING`","key$":"rotation_id","index$":4},"schedule_id":{"a":true,"h":"Schedule Id","n":"schedule_id","r":true,"sh":"The schedule this rule belongs to","t":"`$STRING`","key$":"schedule_id","index$":5},"schedule_sync_target":{"a":true,"h":"Schedule Sync Target","n":"schedule_sync_target","r":true,"sh":"A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call.","t":"`$OBJECT`","key$":"schedule_sync_target","index$":6},"schedule_sync_target_id":{"a":true,"h":"Schedule Sync Target Id","n":"schedule_sync_target_id","r":true,"sh":"The sync target ID this rule links to","t":"`$STRING`","key$":"schedule_sync_target_id","index$":7},"sync_type":{"a":true,"h":"Sync Type","n":"sync_type","r":true,"sh":"Which schedule members sync to the user group","t":"`$STRING`","key$":"sync_type","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"schedule_sync_rule","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["annotations","permanent_member_user_ids","rotation_id","schedule_sync_target_id","sync_type"],"co":{"id":"POST /v2/schedules/{schedule_id}/sync_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"schedule_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/schedules/{schedule_id}/sync_rules","q":{"exist":["id"]},"r":{"param":{"schedule_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"id"},{"lit":"sync_rules"}],"t":{"req":{"schedule_sync_rule":"`reqdata`"},"res":"`body.schedule_sync_rule`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/schedules/{schedule_id}/sync_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"schedule_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"01JXYZ000000000000000000CD","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v2/schedules/{schedule_id}/sync_rules","q":{"exist":["id"]},"r":{"param":{"schedule_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"id"},{"lit":"sync_rules"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_rules`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/schedules/{schedule_id}/sync_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01JXYZ000000000000000000CD","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"schedule_id","or":"schedule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/schedules/{schedule_id}/sync_rules/{id}","q":{"exist":["id","schedule_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"schedule_id"},{"lit":"sync_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_rule`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/schedules/{schedule_id}/sync_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01JXYZ000000000000000000CD","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"schedule_id","or":"schedule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v2/schedules/{schedule_id}/sync_rules/{id}","q":{"exist":["id","schedule_id"]},"r":{},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"schedule_id"},{"lit":"sync_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["annotations","permanent_member_user_ids","sync_type"],"co":{"id":"PUT /v2/schedules/{schedule_id}/sync_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01JXYZ000000000000000000CD","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"schedule_id","or":"schedule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/v2/schedules/{schedule_id}/sync_rules/{id}","q":{"exist":["id","schedule_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"schedule_id"},{"lit":"sync_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.schedule_sync_rule`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.schedule"]]},"key$":"schedule_sync_rule","name__orig":"schedule_sync_rule","Name":"ScheduleSyncRule","name_":"schedule_sync_rule","name-":"schedule-sync-rule","NAME":"SCHEDULE_SYNC_RULE","index$":76}, {"active":true,"entity":"schedule_sync_rule","key$":"BasicScheduleSyncRuleFlow","kind":"basic","name":"BasicScheduleSyncRuleFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"schedule_sync_rule_ref01"},"m":{"schedule_id":"schedule01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"schedule_id":"schedule01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"schedule_sync_rule_ref01"}}],"unreachable":true},{"a":true,"d":{"schedule_id":"schedule01"},"i":{"ref":"schedule_sync_rule_ref01","srcdatavar":"schedule_sync_rule_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_sync_rule_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"schedule_sync_rule_ref01","srcdatavar":"schedule_sync_rule_ref01_data","suffix":"_dt0"},"m":{"id":"schedule_sync_rule01","schedule_id":"schedule01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_sync_rule_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"schedule_sync_rule_ref01","suffix":"_rm0"},"m":{"id":"schedule_sync_rule01","schedule_id":"schedule01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"schedule_id":"schedule01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"schedule_sync_rule_ref01"}}],"index$":3}]}, 'ScheduleSyncRule', {"POST /v2/schedules/{schedule_id}/sync_rules":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"schedule_sync_rule":{"annotations":{"incident.io/terraform/version":"3.0.0"},"permanent_member_user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"rotation_id":"01JXYZ000000000000000000RT","schedule_sync_target_id":"01JXYZ000000000000000000AB","sync_type":"on_call"}},"schema":{"example":{"schedule_sync_rule":{"annotations":{"incident.io/terraform/version":"3.0.0"},"permanent_member_user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"rotation_id":"01JXYZ000000000000000000RT","schedule_sync_target_id":"01JXYZ000000000000000000AB","sync_type":"on_call"}},"properties":{"schedule_sync_rule":{"example":{"annotations":{"incident.io/terraform/version":"3.0.0"},"permanent_member_user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"rotation_id":"01JXYZ000000000000000000RT","schedule_sync_target_id":"01JXYZ000000000000000000AB","sync_type":"on_call"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that track metadata about this resource","example":{"incident.io/terraform/version":"3.0.0"},"type":"object","key$":"annotations"},"permanent_member_user_ids":{"description":"IDs of users to always keep in the Slack user group, regardless of who is on call. Each must be an active user in your organisation. Defaults to none.","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"permanent_member_user_ids"},"rotation_id":{"description":"If set, scopes the rule to a single rotation on the schedule. When unset, all rotations are synced.","example":"01JXYZ000000000000000000RT","type":"string","key$":"rotation_id"},"schedule_sync_target_id":{"description":"The sync target to link to","example":"01JXYZ000000000000000000AB","type":"string","key$":"schedule_sync_target_id"},"sync_type":{"description":"Which schedule members sync to the user group","enum":["on_call","all_users","next_on_call"],"example":"on_call","type":"string","key$":"sync_type"}},"required":["schedule_sync_target_id","sync_type"],"type":"object","x-ref":"#/components/schemas/ScheduleSyncRuleCreatePayloadV2","index$":1}},"required":["schedule_sync_rule"],"type":"object","x-ref":"#/components/schemas/SchedulesCreateScheduleSyncRulePayloadV2"}}},"required":true},"parameters":[{"description":"The schedule to create a sync rule for","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The schedule to create a sync rule for","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"GET /v2/schedules/{schedule_id}/sync_rules":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A sync rule's ID. This endpoint will return a list of sync rules after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01JXYZ000000000000000000CD"}},"in":"query","name":"after","schema":{"description":"A sync rule's ID. This endpoint will return a list of sync rules after this ID in relation to the API response order.","example":"01JXYZ000000000000000000CD","type":"string"},"index$":1},{"description":"The schedule to list sync rules for","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The schedule to list sync rules for","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":2}]},"GET /v2/schedules/{schedule_id}/sync_rules/{id}":{"protocol":"http","parameters":[{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0},{"description":"The sync rule ID","example":"01JXYZ000000000000000000CD","in":"path","name":"id","required":true,"schema":{"description":"The sync rule ID","example":"01JXYZ000000000000000000CD","type":"string"},"index$":1}]},"DELETE /v2/schedules/{schedule_id}/sync_rules/{id}":{"protocol":"http","parameters":[{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0},{"description":"The sync rule ID to archive","example":"01JXYZ000000000000000000CD","in":"path","name":"id","required":true,"schema":{"description":"The sync rule ID to archive","example":"01JXYZ000000000000000000CD","type":"string"},"index$":1}]},"PUT /v2/schedules/{schedule_id}/sync_rules/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/terraform/version":"3.0.0"},"permanent_member_user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"sync_type":"on_call"},"schema":{"example":{"annotations":{"incident.io/terraform/version":"3.0.0"},"permanent_member_user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"sync_type":"on_call"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that track metadata about this resource","example":{"incident.io/terraform/version":"3.0.0"},"type":"object","key$":"annotations"},"permanent_member_user_ids":{"description":"IDs of users to always keep in the Slack user group, regardless of who is on call. Each must be an active user in your organisation. Replaces the rule's current permanent members: pass an empty array to remove them all, or omit the field to leave them unchanged.","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"permanent_member_user_ids"},"sync_type":{"description":"Which schedule members sync to the user group","enum":["on_call","all_users","next_on_call"],"example":"on_call","type":"string","key$":"sync_type"}},"required":["sync_type"],"type":"object","x-ref":"#/components/schemas/SchedulesUpdateScheduleSyncRulePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0},{"description":"The sync rule ID","example":"01JXYZ000000000000000000CD","in":"path","name":"id","required":true,"schema":{"description":"The sync rule ID","example":"01JXYZ000000000000000000CD","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let schedule_sync_rule_ref01_data = Object.values(setup.data.existing.schedule_sync_rule)[0] as any

    // UPDATE
    const schedule_sync_rule_ref01_ent = client.ScheduleSyncRule()
    const schedule_sync_rule_ref01_data_up0: any = {}
    schedule_sync_rule_ref01_data_up0.id = schedule_sync_rule_ref01_data.id
    schedule_sync_rule_ref01_data_up0['schedule_id'] = setup.idmap['schedule_id'] ?? setup.idmap['schedule01']

    const schedule_sync_rule_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_sync_rule_ref01_' + setup.now }
    ;(schedule_sync_rule_ref01_data_up0 as any)[schedule_sync_rule_ref01_markdef_up0.name] = schedule_sync_rule_ref01_markdef_up0.value

    const schedule_sync_rule_ref01_resdata_up0 = (await schedule_sync_rule_ref01_ent.update(schedule_sync_rule_ref01_data_up0)).data()
    assert(schedule_sync_rule_ref01_resdata_up0.id === schedule_sync_rule_ref01_data_up0.id)

    assert((schedule_sync_rule_ref01_resdata_up0 as any)[schedule_sync_rule_ref01_markdef_up0.name] === schedule_sync_rule_ref01_markdef_up0.value)


    // LOAD
    const schedule_sync_rule_ref01_match_dt0: any = {}
    schedule_sync_rule_ref01_match_dt0.id = schedule_sync_rule_ref01_data.id
    schedule_sync_rule_ref01_match_dt0['schedule_id'] = setup.idmap['schedule_id'] ?? setup.idmap['schedule01']
    const schedule_sync_rule_ref01_data_dt0 = (await schedule_sync_rule_ref01_ent.load(schedule_sync_rule_ref01_match_dt0)).data()
    assert(schedule_sync_rule_ref01_data_dt0.id === schedule_sync_rule_ref01_data.id)


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
      '../../../../.sdk/test/entity/schedule_sync_rule/ScheduleSyncRuleTestData.json')

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
    ['schedule_sync_rule01','schedule_sync_rule02','schedule_sync_rule03','schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID']
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
  

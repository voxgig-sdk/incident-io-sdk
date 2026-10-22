

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


describe('ScheduleOverrideEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleOverride()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('schedule_override hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).ScheduleOverride().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).ScheduleOverride()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.ScheduleOverride().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().ScheduleOverride().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.ScheduleOverride().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.ScheduleOverride().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleOverride().list({"after":1,"schedule_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_override.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"end_at":{"a":true,"fo":"date-time","h":"End At","n":"end_at","r":true,"sh":"End of the override","t":"`$STRING`","key$":"end_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique internal ID of the schedule override","t":"`$STRING`","key$":"id","index$":2},"layer_id":{"a":true,"h":"Layer Id","n":"layer_id","r":true,"sh":"The layer on the rotation on the schedule that this override applies to","t":"`$STRING`","key$":"layer_id","index$":3},"rotation_id":{"a":true,"h":"Rotation Id","n":"rotation_id","r":true,"sh":"The rotation on the schedule that this override applies to","t":"`$STRING`","key$":"rotation_id","index$":4},"schedule_id":{"a":true,"h":"Schedule Id","n":"schedule_id","r":true,"sh":"The schedule that this override applies to","t":"`$STRING`","key$":"schedule_id","index$":5},"start_at":{"a":true,"fo":"date-time","h":"Start At","n":"start_at","r":true,"sh":"Start of the override","t":"`$STRING`","key$":"start_at","index$":6},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":7},"user":{"a":true,"h":"User","n":"user","r":true,"t":"`$OBJECT`","key$":"user","index$":8}},"id":{"field":"id","name":"id"},"name":"schedule_override","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["end_at","layer_id","rotation_id","schedule_id","start_at","user"],"co":{"id":"POST /v2/schedule_overrides","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/schedule_overrides","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_overrides"}],"t":{"req":"`reqdata`","res":"`body.override`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/schedule_overrides","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"layer_id","or":"layer_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"rotation_id","or":"rotation_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"schedule_id","or":"schedule_id","r":true,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v2/schedule_overrides","q":{"exist":["schedule_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_overrides"}],"t":{"req":"`reqdata`","res":"`body.overrides`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/schedule_overrides/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/schedule_overrides/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_overrides"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.override`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/schedule_overrides/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/schedule_overrides/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"schedule_overrides"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["end_at","layer_id","rotation_id","start_at","user"],"co":{"id":"PUT /v2/schedule_overrides/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/schedule_overrides/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedule_overrides"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.override`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"schedule_override","name__orig":"schedule_override","Name":"ScheduleOverride","name_":"schedule_override","name-":"schedule-override","NAME":"SCHEDULE_OVERRIDE","index$":83}, {"active":true,"entity":"schedule_override","key$":"BasicScheduleOverrideFlow","kind":"basic","name":"BasicScheduleOverrideFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"schedule_override_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"schedule_override_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"schedule_override_ref01","srcdatavar":"schedule_override_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_override_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"schedule_override_ref01","srcdatavar":"schedule_override_ref01_data","suffix":"_dt0"},"m":{"id":"schedule_override01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_override_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"schedule_override_ref01","suffix":"_rm0"},"m":{"id":"schedule_override01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"schedule_override_ref01"}}],"index$":5}]}, 'ScheduleOverride', {"POST /v2/schedule_overrides":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"end_at":"2021-08-17T14:00:00.000000Z","layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH","schedule_id":"01G0J1EXE7AXZ2C93K61WBPYEH","start_at":"2021-08-17T13:00:00.000000Z","user":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"}},"schema":{"example":{"end_at":"2021-08-17T14:00:00.000000Z","layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH","schedule_id":"01G0J1EXE7AXZ2C93K61WBPYEH","start_at":"2021-08-17T13:00:00.000000Z","user":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"}},"properties":{"end_at":{"description":"End time of the override","example":"2021-08-17T14:00:00.000000Z","format":"date-time","type":"string","key$":"end_at"},"layer_id":{"description":"The layer this override applies to","example":"01G0J1EXE7AXZ2C93K61WBPYNH","type":"string","key$":"layer_id"},"rotation_id":{"description":"The rotation this override applies to","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"rotation_id"},"schedule_id":{"description":"The schedule this override applies to","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"schedule_id"},"start_at":{"description":"Start time of the override","example":"2021-08-17T13:00:00.000000Z","format":"date-time","type":"string","key$":"start_at"},"user":{"example":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"properties":{"email":{"description":"The user's email address, matching the email on their Slack account","example":"bob@example.com","type":"string"},"id":{"description":"The incident.io ID of a user","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"slack_user_id":{"description":"The ID of the user's Slack account.","example":"USER123","type":"string"}},"type":"object","x-ref":"#/components/schemas/UserReferencePayloadV2","key$":"user"}},"required":["start_at","end_at","schedule_id","rotation_id","layer_id","user"],"type":"object","x-ref":"#/components/schemas/SchedulesCreateOverridePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/schedule_overrides":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"The ID of the schedule to get overrides for.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"schedule_id","required":true,"schema":{"description":"The ID of the schedule to get overrides for.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"If set, only return overrides on this rotation.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"rotation_id","schema":{"description":"If set, only return overrides on this rotation.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"If set, only return overrides on this layer.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"layer_id","schema":{"description":"If set, only return overrides on this layer.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":2},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":3},{"allowEmptyValue":true,"description":"An override's ID. This endpoint will return a list of overrides after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FDAG4SAP5TYPT98WGR2N7W91"}},"in":"query","name":"after","schema":{"description":"An override's ID. This endpoint will return a list of overrides after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":4}]},"GET /v2/schedule_overrides/{id}":{"protocol":"http","parameters":[{"description":"The override ID to get","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"The override ID to get","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"DELETE /v2/schedule_overrides/{id}":{"protocol":"http","parameters":[{"description":"The override ID to delete","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"The override ID to delete","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"PUT /v2/schedule_overrides/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"end_at":"2021-08-17T14:00:00.000000Z","layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH","start_at":"2021-08-17T13:00:00.000000Z","user":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"}},"schema":{"example":{"end_at":"2021-08-17T14:00:00.000000Z","layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH","start_at":"2021-08-17T13:00:00.000000Z","user":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"}},"properties":{"end_at":{"description":"End time of the override","example":"2021-08-17T14:00:00.000000Z","format":"date-time","type":"string","key$":"end_at"},"layer_id":{"description":"The layer this override applies to","example":"01G0J1EXE7AXZ2C93K61WBPYNH","type":"string","key$":"layer_id"},"rotation_id":{"description":"The rotation this override applies to","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"rotation_id"},"start_at":{"description":"Start time of the override","example":"2021-08-17T13:00:00.000000Z","format":"date-time","type":"string","key$":"start_at"},"user":{"example":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"properties":{"email":{"description":"The user's email address, matching the email on their Slack account","example":"bob@example.com","type":"string"},"id":{"description":"The incident.io ID of a user","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"slack_user_id":{"description":"The ID of the user's Slack account.","example":"USER123","type":"string"}},"type":"object","x-ref":"#/components/schemas/UserReferencePayloadV2","key$":"user"}},"required":["start_at","end_at","rotation_id","layer_id","user"],"type":"object","x-ref":"#/components/schemas/SchedulesUpdateOverridePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The override ID to update","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"The override ID to update","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_override_ref01_ent = client.ScheduleOverride()
    let schedule_override_ref01_data = setup.data.new.schedule_override['schedule_override_ref01']

    schedule_override_ref01_data = (await schedule_override_ref01_ent.create(schedule_override_ref01_data)).data()
    assert(null != schedule_override_ref01_data.id)


    // LIST
    const schedule_override_ref01_match: any = {}

    const schedule_override_ref01_list = (await schedule_override_ref01_ent.list(schedule_override_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(schedule_override_ref01_list, { id: schedule_override_ref01_data.id })))


    // UPDATE
    const schedule_override_ref01_data_up0: any = {}
    schedule_override_ref01_data_up0.id = schedule_override_ref01_data.id

    const schedule_override_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_override_ref01_' + setup.now }
    ;(schedule_override_ref01_data_up0 as any)[schedule_override_ref01_markdef_up0.name] = schedule_override_ref01_markdef_up0.value

    const schedule_override_ref01_resdata_up0 = (await schedule_override_ref01_ent.update(schedule_override_ref01_data_up0)).data()
    assert(schedule_override_ref01_resdata_up0.id === schedule_override_ref01_data_up0.id)

    assert((schedule_override_ref01_resdata_up0 as any)[schedule_override_ref01_markdef_up0.name] === schedule_override_ref01_markdef_up0.value)


    // LOAD
    const schedule_override_ref01_match_dt0: any = {}
    schedule_override_ref01_match_dt0.id = schedule_override_ref01_data.id
    const schedule_override_ref01_data_dt0 = (await schedule_override_ref01_ent.load(schedule_override_ref01_match_dt0)).data()
    assert(schedule_override_ref01_data_dt0.id === schedule_override_ref01_data.id)


    // REMOVE
    const schedule_override_ref01_match_rm0: any = { id: schedule_override_ref01_data.id }
    await schedule_override_ref01_ent.remove(schedule_override_ref01_match_rm0)
  

    // LIST
    const schedule_override_ref01_match_rt0: any = {}

    const schedule_override_ref01_list_rt0 = (await schedule_override_ref01_ent.list(schedule_override_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(schedule_override_ref01_list_rt0, { id: schedule_override_ref01_data.id })))


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
      '../../../../.sdk/test/entity/schedule_override/ScheduleOverrideTestData.json')

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
    ['schedule_override01','schedule_override02','schedule_override03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_OVERRIDE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_OVERRIDE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_OVERRIDE_ENTID']
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
  



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


describe('IncidentUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentUpdate()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_update hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentUpdate().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentUpdate()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentUpdate().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentUpdate().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentUpdate().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentUpdate().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentUpdate().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the update was created","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this incident update","t":"`$STRING`","key$":"id","index$":1},"idempotency_key":{"a":true,"h":"Idempotency Key","n":"idempotency_key","r":true,"sh":"Unique string used to de-duplicate incident update requests.","t":"`$STRING`","key$":"idempotency_key","index$":2},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"The incident you want to update","t":"`$STRING`","key$":"incident_id","index$":3},"merged_into_incident_id":{"a":true,"h":"Merged Into Incident Id","n":"merged_into_incident_id","r":false,"sh":"The ID of the incident this incident was merged into, if the to state of this update is 'merged'.","t":"`$STRING`","key$":"merged_into_incident_id","index$":4},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"Message that explains the context behind the update, in markdown","t":"`$STRING`","key$":"message","index$":5},"new_incident_status":{"a":true,"h":"New Incident Status","n":"new_incident_status","r":true,"t":"`$OBJECT`","key$":"new_incident_status","index$":6},"new_severity":{"a":true,"h":"New Severity","n":"new_severity","r":true,"t":"`$OBJECT`","key$":"new_severity","index$":7},"to_incident_status_id":{"a":true,"h":"To Incident Status Id","n":"to_incident_status_id","r":false,"sh":"Move the incident to this status","t":"`$STRING`","key$":"to_incident_status_id","index$":8},"to_severity_id":{"a":true,"h":"To Severity Id","n":"to_severity_id","r":false,"sh":"Move the incident to this severity","t":"`$STRING`","key$":"to_severity_id","index$":9},"updater":{"a":true,"h":"Updater","n":"updater","r":true,"t":"`$OBJECT`","key$":"updater","index$":10}},"id":{"field":"id","name":"id"},"name":"incident_update","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["idempotency_key","incident_id","message","to_incident_status_id","to_severity_id"],"co":{"id":"POST /v2/incident_updates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/incident_updates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_updates"}],"t":{"req":"`reqdata`","res":"`body.incident_update`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/incident_updates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/v2/incident_updates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_updates"}],"t":{"req":"`reqdata`","res":"`body.incident_updates`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"incident_update","name__orig":"incident_update","Name":"IncidentUpdate","name_":"incident_update","name-":"incident-update","NAME":"INCIDENT_UPDATE","index$":51}, {"active":true,"entity":"incident_update","key$":"BasicIncidentUpdateFlow","kind":"basic","name":"BasicIncidentUpdateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_update_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_update_ref01"}}],"index$":1}]}, 'IncidentUpdate', {"POST /v2/incident_updates":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"idempotency_key":"alert-uuid","incident_id":"01G0J1EXE7AXZ2C93K61WBPYEH","message":"We're working on a fix, hoping to ship in the next 30 minutes","to_incident_status_id":"01G0J1EXE7AXZ2C93K61WBPYEH","to_severity_id":"01FH5TZRWMNAFB0DZ23FD1TV96"},"schema":{"example":{"idempotency_key":"alert-uuid","incident_id":"01G0J1EXE7AXZ2C93K61WBPYEH","message":"We're working on a fix, hoping to ship in the next 30 minutes","to_incident_status_id":"01G0J1EXE7AXZ2C93K61WBPYEH","to_severity_id":"01FH5TZRWMNAFB0DZ23FD1TV96"},"properties":{"idempotency_key":{"description":"Unique string used to de-duplicate incident update requests. Retrying with the same key returns the update the first request created, rather than sharing a second one.","example":"alert-uuid","type":"string","key$":"idempotency_key"},"incident_id":{"description":"The incident you want to update","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"incident_id"},"message":{"description":"Message that explains the context behind the update, in markdown","example":"We're working on a fix, hoping to ship in the next 30 minutes","type":"string","key$":"message"},"to_incident_status_id":{"description":"Move the incident to this status","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"to_incident_status_id"},"to_severity_id":{"description":"Move the incident to this severity","example":"01FH5TZRWMNAFB0DZ23FD1TV96","type":"string","key$":"to_severity_id"}},"required":["incident_id","idempotency_key"],"type":"object","x-ref":"#/components/schemas/IncidentUpdatesCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/incident_updates":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Incident whose updates you want to list","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"query","name":"incident_id","schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":1},{"allowEmptyValue":true,"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"after","schema":{"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_update_ref01_ent = client.IncidentUpdate()
    let incident_update_ref01_data = setup.data.new.incident_update['incident_update_ref01']

    incident_update_ref01_data = (await incident_update_ref01_ent.create(incident_update_ref01_data)).data()
    assert(null != incident_update_ref01_data.id)


    // LIST
    const incident_update_ref01_match: any = {}

    const incident_update_ref01_list = (await incident_update_ref01_ent.list(incident_update_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(incident_update_ref01_list, { id: incident_update_ref01_data.id })))


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
      '../../../../.sdk/test/entity/incident_update/IncidentUpdateTestData.json')

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
    ['incident_update01','incident_update02','incident_update03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_UPDATE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_UPDATE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_UPDATE_ENTID']
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
  

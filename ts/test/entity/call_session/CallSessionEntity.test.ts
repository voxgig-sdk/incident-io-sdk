

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


describe('CallSessionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CallSession()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('call_session hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).CallSession().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).CallSession()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CallSession().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().CallSession().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CallSession().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CallSession().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CallSession().list({"after":1,"incident_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'call_session.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ended_at":{"a":true,"fo":"date-time","h":"Ended At","n":"ended_at","r":false,"sh":"When the call session ended.","t":"`$STRING`","key$":"ended_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this call session","t":"`$STRING`","key$":"id","index$":1},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"The incident this call session belongs to","t":"`$STRING`","key$":"incident_id","index$":2},"started_at":{"a":true,"fo":"date-time","h":"Started At","n":"started_at","r":true,"sh":"When the call session started","t":"`$STRING`","key$":"started_at","index$":3}},"id":{"field":"id","name":"id"},"name":"call_session","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/call_sessions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"query","n":"incident_id","or":"incident_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/v2/call_sessions","q":{"exist":["incident_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"call_sessions"}],"t":{"req":"`reqdata`","res":"`body.call_sessions`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"call_session","name__orig":"call_session","Name":"CallSession","name_":"call_session","name-":"call-session","NAME":"CALL_SESSION","index$":25}, {"active":true,"entity":"call_session","key$":"BasicCallSessionFlow","kind":"basic","name":"BasicCallSessionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"call_session_ref01"}}],"index$":0}]}, 'CallSession', {"GET /v2/call_sessions":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A call session's ID. This endpoint will return a list of call sessions after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"A call session's ID. This endpoint will return a list of call sessions after this ID in relation to the API response order.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Incident whose call sessions you want to list","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"query","name":"incident_id","required":true,"schema":{"description":"Incident whose call sessions you want to list","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let call_session_ref01_data = Object.values(setup.data.existing.call_session)[0] as any

    // LIST
    const call_session_ref01_ent = client.CallSession()
    const call_session_ref01_match: any = {}

    const call_session_ref01_list = (await call_session_ref01_ent.list(call_session_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/call_session/CallSessionTestData.json')

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
    ['call_session01','call_session02','call_session03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CALL_SESSION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CALL_SESSION_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CALL_SESSION_ENTID']
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
  

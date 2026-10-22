

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


describe('IncidentTimestampEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTimestamp()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_timestamp hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentTimestamp().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentTimestamp()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentTimestamp().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentTimestamp().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentTimestamp().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentTimestamp().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTimestamp().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_timestamp.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique ID of this incident timestamp","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Unique name of this timestamp","t":"`$STRING`","key$":"name","index$":1},"rank":{"a":true,"fo":"int64","h":"Rank","n":"rank","r":true,"sh":"Order in which this timestamp should be shown","t":"`$INTEGER`","key$":"rank","index$":2}},"id":{"field":"id","name":"id"},"name":"incident_timestamp","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/incident_timestamps","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/incident_timestamps","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_timestamps"}],"t":{"req":"`reqdata`","res":"`body.incident_timestamps`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/incident_timestamps/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYD5H","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/incident_timestamps/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_timestamps"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_timestamp`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"incident_timestamp","name__orig":"incident_timestamp","Name":"IncidentTimestamp","name_":"incident_timestamp","name-":"incident-timestamp","NAME":"INCIDENT_TIMESTAMP","index$":54}, {"active":true,"entity":"incident_timestamp","key$":"BasicIncidentTimestampFlow","kind":"basic","name":"BasicIncidentTimestampFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_timestamp_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"incident_timestamp_ref01","srcdatavar":"incident_timestamp_ref01_data","suffix":"_dt0"},"m":{"id":"incident_timestamp01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_timestamp_ref01"}}],"index$":1}]}, 'IncidentTimestamp', {"GET /v2/incident_timestamps":{"protocol":"http","parameters":[]},"GET /v2/incident_timestamps/{id}":{"protocol":"http","parameters":[{"description":"Unique ID of this incident timestamp","example":"01FCNDV6P870EA6S7TK1DSYD5H","in":"path","name":"id","required":true,"schema":{"description":"Unique ID of this incident timestamp","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let incident_timestamp_ref01_data = Object.values(setup.data.existing.incident_timestamp)[0] as any

    // LIST
    const incident_timestamp_ref01_ent = client.IncidentTimestamp()
    const incident_timestamp_ref01_match: any = {}

    const incident_timestamp_ref01_list = (await incident_timestamp_ref01_ent.list(incident_timestamp_ref01_match)).map((e: any) => e.data())


    // LOAD
    const incident_timestamp_ref01_match_dt0: any = {}
    incident_timestamp_ref01_match_dt0.id = incident_timestamp_ref01_data.id
    const incident_timestamp_ref01_data_dt0 = (await incident_timestamp_ref01_ent.load(incident_timestamp_ref01_match_dt0)).data()
    assert(incident_timestamp_ref01_data_dt0.id === incident_timestamp_ref01_data.id)


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
      '../../../../.sdk/test/entity/incident_timestamp/IncidentTimestampTestData.json')

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
    ['incident_timestamp01','incident_timestamp02','incident_timestamp03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TIMESTAMP_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TIMESTAMP_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TIMESTAMP_ENTID']
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
  

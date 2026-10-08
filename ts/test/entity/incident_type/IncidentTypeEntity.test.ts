

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


describe('IncidentTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentType()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_type hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentType().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentType()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentType().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentType().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentType().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentType().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentType().list({"create_in_triage":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"create_in_triage":{"a":true,"h":"Create In Triage","n":"create_in_triage","r":true,"sh":"Whether incidents of this must always, or can optionally, be created in triage","t":"`$STRING`","key$":"create_in_triage","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this resource was created","t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"What is this incident type for?","t":"`$STRING`","key$":"description","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this Incident Type","t":"`$STRING`","key$":"id","index$":3},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":true,"sh":"The default Incident Type is used when no other type is explicitly specified","t":"`$BOOLEAN`","key$":"is_default","index$":4},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of this Incident Type","t":"`$STRING`","key$":"name","index$":5},"owning_team_ids":{"a":true,"h":"Owning Team Ids","n":"owning_team_ids","r":false,"sh":"IDs of the teams that own this incident type","t":"`$ARRAY`","key$":"owning_team_ids","index$":6},"private_incidents_only":{"a":true,"h":"Private Incidents Only","n":"private_incidents_only","r":true,"sh":"Should all incidents created with this Incident Type be private?","t":"`$BOOLEAN`","key$":"private_incidents_only","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this resource was last updated","t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"incident_type","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/incident_types","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/incident_types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_types"}],"t":{"req":"`reqdata`","res":"`body.incident_types`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/incident_types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/incident_types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_type`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"incident_type","name__orig":"incident_type","Name":"IncidentType","name_":"incident_type","name-":"incident-type","NAME":"INCIDENT_TYPE","index$":57}, {"active":true,"entity":"incident_type","key$":"BasicIncidentTypeFlow","kind":"basic","name":"BasicIncidentTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_type_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"incident_type_ref01","srcdatavar":"incident_type_ref01_data","suffix":"_dt0"},"m":{"id":"incident_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_type_ref01"}}],"index$":1}]}, 'IncidentType', {"GET /v1/incident_types":{"protocol":"http","parameters":[]},"GET /v1/incident_types/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this Incident Type","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this Incident Type","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let incident_type_ref01_data = Object.values(setup.data.existing.incident_type)[0] as any

    // LIST
    const incident_type_ref01_ent = client.IncidentType()
    const incident_type_ref01_match: any = {}

    const incident_type_ref01_list = (await incident_type_ref01_ent.list(incident_type_ref01_match)).map((e: any) => e.data())


    // LOAD
    const incident_type_ref01_match_dt0: any = {}
    incident_type_ref01_match_dt0.id = incident_type_ref01_data.id
    const incident_type_ref01_data_dt0 = (await incident_type_ref01_ent.load(incident_type_ref01_match_dt0)).data()
    assert(incident_type_ref01_data_dt0.id === incident_type_ref01_data.id)


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
      '../../../../.sdk/test/entity/incident_type/IncidentTypeTestData.json')

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
    ['incident_type01','incident_type02','incident_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TYPE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TYPE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TYPE_ENTID']
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
  

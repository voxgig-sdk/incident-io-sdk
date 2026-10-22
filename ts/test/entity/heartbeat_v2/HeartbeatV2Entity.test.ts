

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


describe('HeartbeatV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.HeartbeatV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.HeartbeatV2().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'heartbeat_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"heartbeat_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/heartbeat/{alert_source_config_id}/ping","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"Bearer some-random-string","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"param","n":"id","or":"alert_source_config_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"some-random-string","k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/heartbeat/{alert_source_config_id}/ping","q":{"$action":"ping","exist":["id"]},"r":{"param":{"alert_source_config_id":"id"}},"s":[{"lit":"v2"},{"lit":"heartbeat"},{"var":"id"},{"lit":"ping"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/heartbeat/{alert_source_config_id}/ping","source":"openapi3","version":2},"g":{"header":[{"a":true,"ex":"Bearer some-random-string","k":"header","n":"authorization","or":"authorization","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"param","n":"id","or":"alert_source_config_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"some-random-string","k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/heartbeat/{alert_source_config_id}/ping","q":{"$action":"ping","exist":["id"]},"r":{"param":{"alert_source_config_id":"id"}},"s":[{"lit":"v2"},{"lit":"heartbeat"},{"var":"id"},{"lit":"ping"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"heartbeat_v2","name__orig":"heartbeat_v2","Name":"HeartbeatV2","name_":"heartbeat_v2","name-":"heartbeat-v2","NAME":"HEARTBEAT_V2","index$":36}, {"active":true,"entity":"heartbeat_v2","key$":"BasicHeartbeatV2Flow","kind":"basic","name":"BasicHeartbeatV2Flow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"heartbeat_v2_ref01"},"m":{"alert_source_config_id":"alert_source_config01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"heartbeat_v2_ref01","srcdatavar":"heartbeat_v2_ref01_data","suffix":"_dt0"},"m":{"id":"heartbeat_v201"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-heartbeat_v2_ref01"}}],"index$":0}]}, 'HeartbeatV2', {"POST /v2/heartbeat/{alert_source_config_id}/ping":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Token provided via the token query parameter","example":"some-random-string","in":"query","name":"token","schema":{"description":"Token provided via the token query parameter","example":"some-random-string","type":"string"},"index$":0},{"description":"The alert source config this heartbeat ping is for","example":"01GW2G3V0S59R238FAHPDS1R66","in":"path","name":"alert_source_config_id","required":true,"schema":{"description":"The alert source config this heartbeat ping is for","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Bearer token provided via the Authorization header","example":"Bearer some-random-string","in":"header","name":"authorization","schema":{"description":"Bearer token provided via the Authorization header","example":"Bearer some-random-string","type":"string"},"index$":2}]},"GET /v2/heartbeat/{alert_source_config_id}/ping":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Token provided via the token query parameter","example":"some-random-string","in":"query","name":"token","schema":{"description":"Token provided via the token query parameter","example":"some-random-string","type":"string"},"index$":0},{"description":"The alert source config this heartbeat ping is for","example":"01GW2G3V0S59R238FAHPDS1R66","in":"path","name":"alert_source_config_id","required":true,"schema":{"description":"The alert source config this heartbeat ping is for","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Bearer token provided via the Authorization header","example":"Bearer some-random-string","in":"header","name":"authorization","schema":{"description":"Bearer token provided via the Authorization header","example":"Bearer some-random-string","type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let heartbeat_v2_ref01_data = Object.values(setup.data.existing.heartbeat_v2)[0] as any

    // LOAD
    const heartbeat_v2_ref01_ent = client.HeartbeatV2()
    const heartbeat_v2_ref01_match_dt0: any = {}
    heartbeat_v2_ref01_match_dt0.id = heartbeat_v2_ref01_data.id
    const heartbeat_v2_ref01_data_dt0 = (await heartbeat_v2_ref01_ent.load(heartbeat_v2_ref01_match_dt0)).data()
    assert(heartbeat_v2_ref01_data_dt0.id === heartbeat_v2_ref01_data.id)


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
      '../../../../.sdk/test/entity/heartbeat_v2/HeartbeatV2TestData.json')

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
    ['heartbeat_v201','heartbeat_v202','heartbeat_v203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_HEARTBEAT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_HEARTBEAT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_HEARTBEAT_V2_ENTID']
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
  

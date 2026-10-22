

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


describe('UtilitiesV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.UtilitiesV1()
    assert(null != ent)
  })




  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'utilities_v1.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"utilities_v1","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/openapiV3.json","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/openapiV3.json","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"openapiV3.json"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"utilities_v1","name__orig":"utilities_v1","Name":"UtilitiesV1","name_":"utilities_v1","name-":"utilities-v1","NAME":"UTILITIES_V1","index$":102}, {"active":true,"entity":"utilities_v1","key$":"BasicUtilitiesV1Flow","kind":"basic","name":"BasicUtilitiesV1Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"utilities_v1_ref01","srcdatavar":"utilities_v1_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-utilities_v1_ref01"}}],"index$":0}]}, 'UtilitiesV1', {"GET /v1/openapiV3.json":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let utilities_v1_ref01_data = Object.values(setup.data.existing.utilities_v1)[0] as any

    // LOAD
    const utilities_v1_ref01_ent = client.UtilitiesV1()
    const utilities_v1_ref01_match_dt0: any = {}
    const utilities_v1_ref01_data_dt0 = (await utilities_v1_ref01_ent.load(utilities_v1_ref01_match_dt0)).data()
    assert(null != utilities_v1_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/utilities_v1/UtilitiesV1TestData.json')

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
    ['utilities_v101','utilities_v102','utilities_v103'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_UTILITIES_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_UTILITIES_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_UTILITIES_V1_ENTID']
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
  



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


describe('CallRoutesCreateAllowedCallerResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CallRoutesCreateAllowedCallerResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CallRoutesCreateAllowedCallerResultV2().create({"call_route_id":1,"phone_number":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'call_routes_create_allowed_caller_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Label for whose number this is","t":"`$STRING`","key$":"name","index$":0},"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":true,"sh":"The number to allow, in international format","t":"`$STRING`","key$":"phone_number","index$":1}},"name":"call_routes_create_allowed_caller_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["name","phone_number"],"co":{"id":"POST /v2/call_routes/{call_route_id}/allowed_callers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"call_route_id","or":"call_route_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/call_routes/{call_route_id}/allowed_callers","q":{"exist":["call_route_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"call_routes"},{"var":"call_route_id"},{"lit":"allowed_callers"}],"t":{"req":"`reqdata`","res":"`body.allowed_caller`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.call_route"]]},"key$":"call_routes_create_allowed_caller_result_v2","name__orig":"call_routes_create_allowed_caller_result_v2","Name":"CallRoutesCreateAllowedCallerResultV2","name_":"call_routes_create_allowed_caller_result_v2","name-":"call-routes-create-allowed-caller-result-v2","NAME":"CALL_ROUTES_CREATE_ALLOWED_CALLER_RESULT_V2","index$":16}, {"active":true,"entity":"call_routes_create_allowed_caller_result_v2","key$":"BasicCallRoutesCreateAllowedCallerResultV2Flow","kind":"basic","name":"BasicCallRoutesCreateAllowedCallerResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"call_routes_create_allowed_caller_result_v2_ref01"},"m":{"call_route_id":"call_route01"},"o":"create","s":[],"v":[],"index$":0}]}, 'CallRoutesCreateAllowedCallerResultV2', {"POST /v2/call_routes/{call_route_id}/allowed_callers":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"name":"Regulator duty desk","phone_number":"+15551234567"},"schema":{"example":{"name":"Regulator duty desk","phone_number":"+15551234567"},"properties":{"name":{"description":"Label for whose number this is","example":"Regulator duty desk","type":"string","key$":"name"},"phone_number":{"description":"The number to allow, in international format","example":"+15551234567","type":"string","key$":"phone_number"}},"required":["phone_number"],"type":"object","x-ref":"#/components/schemas/CallRoutesCreateAllowedCallerPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The call route to allow this number to call","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"call_route_id","required":true,"schema":{"description":"The call route to allow this number to call","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const call_routes_create_allowed_caller_result_v2_ref01_ent = client.CallRoutesCreateAllowedCallerResultV2()
    let call_routes_create_allowed_caller_result_v2_ref01_data = setup.data.new.call_routes_create_allowed_caller_result_v2['call_routes_create_allowed_caller_result_v2_ref01']
    call_routes_create_allowed_caller_result_v2_ref01_data['call_route_id'] = setup.idmap['call_route01']

    call_routes_create_allowed_caller_result_v2_ref01_data = (await call_routes_create_allowed_caller_result_v2_ref01_ent.create(call_routes_create_allowed_caller_result_v2_ref01_data)).data()
    assert(null != call_routes_create_allowed_caller_result_v2_ref01_data)


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
      '../../../../.sdk/test/entity/call_routes_create_allowed_caller_result_v2/CallRoutesCreateAllowedCallerResultV2TestData.json')

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
    ['call_routes_create_allowed_caller_result_v201','call_routes_create_allowed_caller_result_v202','call_routes_create_allowed_caller_result_v203','call_route01','call_route02','call_route03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CALL_ROUTES_CREATE_ALLOWED_CALLER_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CALL_ROUTES_CREATE_ALLOWED_CALLER_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CALL_ROUTES_CREATE_ALLOWED_CALLER_RESULT_V2_ENTID']
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
  

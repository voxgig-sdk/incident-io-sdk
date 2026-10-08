

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


describe('CallRoutesUpdateOptionResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CallRoutesUpdateOptionResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CallRoutesUpdateOptionResultV2().update({"call_route_id":1,"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'call_routes_update_option_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"digit":{"a":true,"h":"Digit","n":"digit","r":true,"sh":"The keypad digit a caller presses to choose this option","t":"`$STRING`","key$":"digit","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this option","t":"`$STRING`","key$":"id","index$":1},"path":{"a":true,"h":"Path","n":"path","r":true,"sh":"Who we page when a caller chooses this option","t":"`$ARRAY`","key$":"path","index$":2},"prompt":{"a":true,"h":"Prompt","n":"prompt","r":true,"sh":"What we read out to offer this option, via text-to-speech in the route's language, exactly as written","t":"`$STRING`","key$":"prompt","index$":3}},"id":{"field":"id","name":"id"},"name":"call_routes_update_option_result_v2","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["digit","path","prompt"],"co":{"id":"PUT /v2/call_routes/{call_route_id}/options/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"call_route_id","or":"call_route_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/v2/call_routes/{call_route_id}/options/{id}","q":{"exist":["call_route_id","id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"call_routes"},{"var":"call_route_id"},{"lit":"options"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.option`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.call_route"]]},"key$":"call_routes_update_option_result_v2","name__orig":"call_routes_update_option_result_v2","Name":"CallRoutesUpdateOptionResultV2","name_":"call_routes_update_option_result_v2","name-":"call-routes-update-option-result-v2","NAME":"CALL_ROUTES_UPDATE_OPTION_RESULT_V2","index$":23}, {"active":true,"entity":"call_routes_update_option_result_v2","key$":"BasicCallRoutesUpdateOptionResultV2Flow","kind":"basic","name":"BasicCallRoutesUpdateOptionResultV2Flow","param":{},"step":[{"a":true,"d":{"call_route_id":"call_route01"},"i":{"ref":"call_routes_update_option_result_v2_ref01","srcdatavar":"call_routes_update_option_result_v2_ref01_data","suffix":"_up0","textfield":"digit"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-call_routes_update_option_result_v2_ref01"}}],"v":[],"index$":0}]}, 'CallRoutesUpdateOptionResultV2', {"PUT /v2/call_routes/{call_route_id}/options/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"digit":"1","path":[{"id":"01FCNDV6P870EA6S7TK1DSYDG0","level":{"targets":[{"id":"lawrencejones","schedule_mode":"currently_on_call","selected_rota_id":"01FCNDV6P870EA6S7TK1DSYDG0","type":"schedule","urgency":"high"}]},"type":"level","voicemail":{"greeting_text":"Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."}}],"prompt":"For an urgent production outage, press 1"},"schema":{"example":{"digit":"1","path":[{"id":"01FCNDV6P870EA6S7TK1DSYDG0","level":{"targets":[{}]},"type":"level","voicemail":{"greeting_text":"Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."}}],"prompt":"For an urgent production outage, press 1"},"properties":{"digit":{"description":"The keypad digit a caller presses to choose this option","enum":["1","2","3","4","5","6","7","8","9"],"example":"1","type":"string","key$":"digit"},"path":{"description":"Who to page when a caller chooses this option","example":[{"id":"01FCNDV6P870EA6S7TK1DSYDG0","level":{"targets":[]},"type":"level","voicemail":{"greeting_text":"Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."}}],"items":{"example":{"id":"01FCNDV6P870EA6S7TK1DSYDG0","level":{"targets":[]},"type":"level","voicemail":{"greeting_text":"Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."}},"properties":{"id":{"description":"Unique identifier for this node. Omit it and we'll generate one.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"level":{"description":"The targets a level pages.\n\nWe call each target for 30 seconds, rotating to the next after 60 seconds, and\nmove to the next node if nobody acknowledges within 5 minutes. Those timings are\nfixed for call routes.","example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/CallRoutePathNodeLevelV2"},"type":{"description":"The type of this node. Available types are:\n* level: page a set of targets, rotating between them\n* voicemail: record a message from the caller","enum":[],"example":"level","type":"string"},"voicemail":{"description":"Records a message from the caller, and enriches the resulting alert with the transcript.","example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/CallRoutePathNodeVoicemailV2"}},"required":["type"],"type":"object","x-ref":"#/components/schemas/CallRoutePathNodePayloadV2"},"type":"array","key$":"path"},"prompt":{"description":"What we read out to offer this option, via text-to-speech in the route's language, exactly as written","example":"For an urgent production outage, press 1","maxLength":250,"type":"string","key$":"prompt"}},"required":["digit","prompt","path"],"type":"object","x-ref":"#/components/schemas/CallRoutesUpdateOptionPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The call route's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"call_route_id","required":true,"schema":{"description":"The call route's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0},{"description":"The option's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The option's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let call_routes_update_option_result_v2_ref01_data = Object.values(setup.data.existing.call_routes_update_option_result_v2)[0] as any

    // UPDATE
    const call_routes_update_option_result_v2_ref01_ent = client.CallRoutesUpdateOptionResultV2()
    const call_routes_update_option_result_v2_ref01_data_up0: any = {}
    call_routes_update_option_result_v2_ref01_data_up0.id = call_routes_update_option_result_v2_ref01_data.id
    call_routes_update_option_result_v2_ref01_data_up0 ['call_route_id'] = setup.idmap['call_route_id']

    const call_routes_update_option_result_v2_ref01_markdef_up0 = { name: 'digit', value: 'Mark01-call_routes_update_option_result_v2_ref01_' + setup.now }
    ;(call_routes_update_option_result_v2_ref01_data_up0 as any)[call_routes_update_option_result_v2_ref01_markdef_up0.name] = call_routes_update_option_result_v2_ref01_markdef_up0.value

    const call_routes_update_option_result_v2_ref01_resdata_up0 = (await call_routes_update_option_result_v2_ref01_ent.update(call_routes_update_option_result_v2_ref01_data_up0)).data()
    assert(call_routes_update_option_result_v2_ref01_resdata_up0.id === call_routes_update_option_result_v2_ref01_data_up0.id)

    assert((call_routes_update_option_result_v2_ref01_resdata_up0 as any)[call_routes_update_option_result_v2_ref01_markdef_up0.name] === call_routes_update_option_result_v2_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/call_routes_update_option_result_v2/CallRoutesUpdateOptionResultV2TestData.json')

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
    ['call_routes_update_option_result_v201','call_routes_update_option_result_v202','call_routes_update_option_result_v203','call_route01','call_route02','call_route03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_OPTION_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_OPTION_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_OPTION_RESULT_V2_ENTID']
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
  

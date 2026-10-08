
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IncidentIoSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('CallRoutesUpdateAllowedCallerResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CallRoutesUpdateAllowedCallerResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CallRoutesUpdateAllowedCallerResultV2().update({"call_route_id":1,"id":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this allowed caller","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Label for whose number this is","t":"`$STRING`","key$":"name","index$":1},"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":true,"sh":"The number allowed to call this route, in international format","t":"`$STRING`","key$":"phone_number","index$":2}},"id":{"field":"id","name":"id"},"name":"call_routes_update_allowed_caller_result_v2","op":{"update":{"input":"data","name":"update","points":[{"a":true,"bf":["name","phone_number"],"co":{"id":"PUT /v2/call_routes/{call_route_id}/allowed_callers/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"call_route_id","or":"call_route_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/v2/call_routes/{call_route_id}/allowed_callers/{id}","q":{"exist":["call_route_id","id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"call_routes"},{"var":"call_route_id"},{"lit":"allowed_callers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.allowed_caller`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.call_route"]]},"key$":"call_routes_update_allowed_caller_result_v2","name__orig":"call_routes_update_allowed_caller_result_v2","Name":"CallRoutesUpdateAllowedCallerResultV2","name_":"call_routes_update_allowed_caller_result_v2","name-":"call-routes-update-allowed-caller-result-v2","NAME":"CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2","index$":22}, {"active":true,"entity":"call_routes_update_allowed_caller_result_v2","key$":"BasicCallRoutesUpdateAllowedCallerResultV2Flow","kind":"basic","name":"BasicCallRoutesUpdateAllowedCallerResultV2Flow","param":{},"step":[{"a":true,"d":{"call_route_id":"call_route01"},"i":{"ref":"call_routes_update_allowed_caller_result_v2_ref01","srcdatavar":"call_routes_update_allowed_caller_result_v2_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-call_routes_update_allowed_caller_result_v2_ref01"}}],"v":[],"index$":0}]}, 'CallRoutesUpdateAllowedCallerResultV2', {"PUT /v2/call_routes/{call_route_id}/allowed_callers/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"name":"Regulator duty desk","phone_number":"+15551234567"},"schema":{"example":{"name":"Regulator duty desk","phone_number":"+15551234567"},"properties":{"name":{"description":"Label for whose number this is","example":"Regulator duty desk","type":"string","key$":"name"},"phone_number":{"description":"The number to allow, in international format","example":"+15551234567","type":"string","key$":"phone_number"}},"required":["phone_number"],"type":"object","x-ref":"#/components/schemas/CallRoutesUpdateAllowedCallerPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The call route's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"call_route_id","required":true,"schema":{"description":"The call route's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0},{"description":"The allowed caller's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The allowed caller's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let call_routes_update_allowed_caller_result_v2_ref01_data = Object.values(setup.data.existing.call_routes_update_allowed_caller_result_v2)[0]

    // UPDATE
    const call_routes_update_allowed_caller_result_v2_ref01_ent = client.CallRoutesUpdateAllowedCallerResultV2()
    const call_routes_update_allowed_caller_result_v2_ref01_data_up0 = {}
    call_routes_update_allowed_caller_result_v2_ref01_data_up0.id = call_routes_update_allowed_caller_result_v2_ref01_data.id
    call_routes_update_allowed_caller_result_v2_ref01_data_up0 ['call_route_id'] = setup.idmap['call_route_id']

    const call_routes_update_allowed_caller_result_v2_ref01_markdef_up0 = { name: 'name', value: 'Mark01-call_routes_update_allowed_caller_result_v2_ref01_' + setup.now }
    call_routes_update_allowed_caller_result_v2_ref01_data_up0 [call_routes_update_allowed_caller_result_v2_ref01_markdef_up0.name] = call_routes_update_allowed_caller_result_v2_ref01_markdef_up0.value

    const call_routes_update_allowed_caller_result_v2_ref01_resdata_up0 = (await call_routes_update_allowed_caller_result_v2_ref01_ent.update(call_routes_update_allowed_caller_result_v2_ref01_data_up0)).data()
    assert(call_routes_update_allowed_caller_result_v2_ref01_resdata_up0.id === call_routes_update_allowed_caller_result_v2_ref01_data_up0.id)

    assert(call_routes_update_allowed_caller_result_v2_ref01_resdata_up0[call_routes_update_allowed_caller_result_v2_ref01_markdef_up0.name] === call_routes_update_allowed_caller_result_v2_ref01_markdef_up0.value)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/call_routes_update_allowed_caller_result_v2/CallRoutesUpdateAllowedCallerResultV2TestData.json')

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
    ['call_routes_update_allowed_caller_result_v201','call_routes_update_allowed_caller_result_v202','call_routes_update_allowed_caller_result_v203','call_route01','call_route02','call_route03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  

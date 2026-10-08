

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


describe('CustomFieldOptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CustomFieldOption()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('custom_field_option hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).CustomFieldOption().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).CustomFieldOption()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CustomFieldOption().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().CustomFieldOption().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CustomFieldOption().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CustomFieldOption().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CustomFieldOption().list({"after":1,"custom_field_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_field_option.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"custom_field_id":{"a":true,"h":"Custom Field Id","n":"custom_field_id","r":true,"sh":"ID of the custom field this option belongs to","t":"`$STRING`","key$":"custom_field_id","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the custom field option","t":"`$STRING`","key$":"id","index$":1},"sort_key":{"a":true,"fo":"int64","h":"Sort Key","n":"sort_key","op":{"create":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"Sort key used to order the custom field options correctly","t":"`$INTEGER`","key$":"sort_key","index$":2},"value":{"a":true,"h":"Value","n":"value","r":true,"sh":"Human readable name for the custom field option.","t":"`$STRING`","key$":"value","index$":3}},"id":{"field":"id","name":"id"},"name":"custom_field_option","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["custom_field_id","sort_key","value"],"co":{"id":"POST /v1/custom_field_options","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/custom_field_options","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"custom_field_options"}],"t":{"req":"`reqdata`","res":"`body.custom_field_option`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/custom_field_options","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYD5H","k":"query","n":"custom_field_id","or":"custom_field_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/v1/custom_field_options","q":{"exist":["custom_field_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"custom_field_options"}],"t":{"req":"`reqdata`","res":"`body.custom_field_options`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/custom_field_options/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/custom_field_options/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"custom_field_options"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.custom_field_option`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/custom_field_options/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/custom_field_options/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"custom_field_options"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["sort_key","value"],"co":{"id":"PUT /v1/custom_field_options/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/custom_field_options/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"custom_field_options"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.custom_field_option`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"custom_field_option","name__orig":"custom_field_option","Name":"CustomFieldOption","name_":"custom_field_option","name-":"custom-field-option","NAME":"CUSTOM_FIELD_OPTION","index$":32}, {"active":true,"entity":"custom_field_option","key$":"BasicCustomFieldOptionFlow","kind":"basic","name":"BasicCustomFieldOptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_field_option_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_field_option_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_field_option_ref01","srcdatavar":"custom_field_option_ref01_data","suffix":"_up0","textfield":"custom_field_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_option_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"custom_field_option_ref01","srcdatavar":"custom_field_option_ref01_data","suffix":"_dt0"},"m":{"id":"custom_field_option01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_option_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"custom_field_option_ref01","suffix":"_rm0"},"m":{"id":"custom_field_option01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"custom_field_option_ref01"}}],"index$":5}]}, 'CustomFieldOption', {"POST /v1/custom_field_options":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","sort_key":10,"value":"Product"},"schema":{"example":{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","sort_key":10,"value":"Product"},"properties":{"custom_field_id":{"description":"ID of the custom field this option belongs to","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"custom_field_id"},"sort_key":{"default":1000,"description":"Sort key used to order the custom field options correctly","example":10,"format":"int64","type":"integer","key$":"sort_key"},"value":{"description":"Human readable name for the custom field option. Values must not start or end with whitespace, or contain tabs or newlines.","example":"Product","type":"string","key$":"value"}},"required":["custom_field_id","value"],"type":"object","x-ref":"#/components/schemas/CustomFieldOptionsCreatePayloadV1","index$":1}}},"required":true},"parameters":[]},"GET /v1/custom_field_options":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A custom field option's ID. This endpoint will return a list of custom field options created after this option.","examples":{"default":{"summary":"default","value":"01G0J1EXE7AXZ2C93K61WBPYEH"}},"in":"query","name":"after","schema":{"description":"A custom field option's ID. This endpoint will return a list of custom field options created after this option.","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"The custom field to list options for.","example":"01FCNDV6P870EA6S7TK1DSYD5H","in":"query","name":"custom_field_id","required":true,"schema":{"description":"The custom field to list options for.","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":2}]},"GET /v1/custom_field_options/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v1/custom_field_options/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v1/custom_field_options/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"sort_key":10,"value":"Product"},"schema":{"example":{"sort_key":10,"value":"Product"},"properties":{"sort_key":{"default":1000,"description":"Sort key used to order the custom field options correctly","example":10,"format":"int64","type":"integer","key$":"sort_key"},"value":{"description":"Human readable name for the custom field option. Values must not start or end with whitespace, or contain tabs or newlines.","example":"Product","type":"string","key$":"value"}},"required":["value","sort_key"],"type":"object","x-ref":"#/components/schemas/CustomFieldOptionsUpdatePayloadV1","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the custom field option","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_field_option_ref01_ent = client.CustomFieldOption()
    let custom_field_option_ref01_data = setup.data.new.custom_field_option['custom_field_option_ref01']

    custom_field_option_ref01_data = (await custom_field_option_ref01_ent.create(custom_field_option_ref01_data)).data()
    assert(null != custom_field_option_ref01_data.id)


    // LIST
    const custom_field_option_ref01_match: any = {}

    const custom_field_option_ref01_list = (await custom_field_option_ref01_ent.list(custom_field_option_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(custom_field_option_ref01_list, { id: custom_field_option_ref01_data.id })))


    // UPDATE
    const custom_field_option_ref01_data_up0: any = {}
    custom_field_option_ref01_data_up0.id = custom_field_option_ref01_data.id

    const custom_field_option_ref01_markdef_up0 = { name: 'custom_field_id', value: 'Mark01-custom_field_option_ref01_' + setup.now }
    ;(custom_field_option_ref01_data_up0 as any)[custom_field_option_ref01_markdef_up0.name] = custom_field_option_ref01_markdef_up0.value

    const custom_field_option_ref01_resdata_up0 = (await custom_field_option_ref01_ent.update(custom_field_option_ref01_data_up0)).data()
    assert(custom_field_option_ref01_resdata_up0.id === custom_field_option_ref01_data_up0.id)

    assert((custom_field_option_ref01_resdata_up0 as any)[custom_field_option_ref01_markdef_up0.name] === custom_field_option_ref01_markdef_up0.value)


    // LOAD
    const custom_field_option_ref01_match_dt0: any = {}
    custom_field_option_ref01_match_dt0.id = custom_field_option_ref01_data.id
    const custom_field_option_ref01_data_dt0 = (await custom_field_option_ref01_ent.load(custom_field_option_ref01_match_dt0)).data()
    assert(custom_field_option_ref01_data_dt0.id === custom_field_option_ref01_data.id)


    // REMOVE
    const custom_field_option_ref01_match_rm0: any = { id: custom_field_option_ref01_data.id }
    await custom_field_option_ref01_ent.remove(custom_field_option_ref01_match_rm0)
  

    // LIST
    const custom_field_option_ref01_match_rt0: any = {}

    const custom_field_option_ref01_list_rt0 = (await custom_field_option_ref01_ent.list(custom_field_option_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(custom_field_option_ref01_list_rt0, { id: custom_field_option_ref01_data.id })))


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
      '../../../../.sdk/test/entity/custom_field_option/CustomFieldOptionTestData.json')

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
    ['custom_field_option01','custom_field_option02','custom_field_option03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CUSTOM_FIELD_OPTION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CUSTOM_FIELD_OPTION_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CUSTOM_FIELD_OPTION_ENTID']
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
  

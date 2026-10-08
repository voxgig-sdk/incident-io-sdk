
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


describe('AlertAttributeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertAttribute()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    constructor() {
      super()
      this.name = 'failhook'
      this.version = '0.0.1'
      this.active = true
      this.unexpected = 0
    }
    init() { }
    PreSpec() { throw new Error('alert_attribute hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).AlertAttribute().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).AlertAttribute()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AlertAttribute().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().AlertAttribute().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AlertAttribute().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AlertAttribute().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AlertAttribute().list({"array":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"array":{"a":true,"h":"Array","n":"array","r":true,"sh":"Whether this attribute is an array","t":"`$BOOLEAN`","key$":"array","index$":0},"emoji":{"a":true,"h":"Emoji","n":"emoji","r":false,"sh":"The emoji to display alongside this attribute in chat messages, stored without colons","t":"`$STRING`","key$":"emoji","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of this attribute","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Unique name of this attribute","t":"`$STRING`","key$":"name","index$":3},"required":{"a":true,"h":"Required","n":"required","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether this attribute is required.","t":"`$BOOLEAN`","key$":"required","index$":4},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Engine resource name for this attribute","t":"`$STRING`","key$":"type","index$":5}},"id":{"field":"id","name":"id"},"name":"alert_attribute","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["array","emoji","name","required","type"],"co":{"id":"POST /v2/alert_attributes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/alert_attributes","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alert_attributes"}],"t":{"req":"`reqdata`","res":"`body.alert_attribute`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/alert_attributes","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/alert_attributes","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alert_attributes"}],"t":{"req":"`reqdata`","res":"`body.alert_attributes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/alert_attributes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/alert_attributes/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alert_attributes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.alert_attribute`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/alert_attributes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/alert_attributes/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"alert_attributes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["array","emoji","name","required","type"],"co":{"id":"PUT /v2/alert_attributes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/alert_attributes/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alert_attributes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.alert_attribute`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"alert_attribute","name__orig":"alert_attribute","Name":"AlertAttribute","name_":"alert_attribute","name-":"alert-attribute","NAME":"ALERT_ATTRIBUTE","index$":2}, {"active":true,"entity":"alert_attribute","key$":"BasicAlertAttributeFlow","kind":"basic","name":"BasicAlertAttributeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alert_attribute_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alert_attribute_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"alert_attribute_ref01","srcdatavar":"alert_attribute_ref01_data","suffix":"_up0","textfield":"emoji"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_attribute_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"alert_attribute_ref01","srcdatavar":"alert_attribute_ref01_data","suffix":"_dt0"},"m":{"id":"alert_attribute01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_attribute_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"alert_attribute_ref01","suffix":"_rm0"},"m":{"id":"alert_attribute01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"alert_attribute_ref01"}}],"index$":5}]}, 'AlertAttribute', {"POST /v2/alert_attributes":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"array":false,"emoji":"fire","name":"service","required":false,"type":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"},"schema":{"example":{"array":false,"emoji":"fire","name":"service","required":false,"type":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"},"properties":{"array":{"description":"Whether this attribute is an array","example":false,"type":"boolean","key$":"array"},"emoji":{"description":"The emoji to display alongside this attribute in chat messages, stored without colons","example":"fire","type":"string","key$":"emoji"},"name":{"description":"Unique name of this attribute","example":"service","type":"string","key$":"name"},"required":{"description":"Whether this attribute is required. If this field is not set, the existing setting will be preserved.","example":false,"type":"boolean","key$":"required"},"type":{"description":"Engine resource name for this attribute","example":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]","type":"string","key$":"type"}},"required":["name","type","array"],"type":"object","x-ref":"#/components/schemas/AlertAttributesCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/alert_attributes":{"protocol":"http","parameters":[]},"GET /v2/alert_attributes/{id}":{"protocol":"http","parameters":[{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","in":"path","name":"id","required":true,"schema":{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":0}]},"DELETE /v2/alert_attributes/{id}":{"protocol":"http","parameters":[{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","in":"path","name":"id","required":true,"schema":{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":0}]},"PUT /v2/alert_attributes/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"array":false,"emoji":"fire","name":"service","required":false,"type":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"},"schema":{"example":{"array":false,"emoji":"fire","name":"service","required":false,"type":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"},"properties":{"array":{"description":"Whether this attribute is an array","example":false,"type":"boolean","key$":"array"},"emoji":{"description":"The emoji to display alongside this attribute in chat messages, stored without colons","example":"fire","type":"string","key$":"emoji"},"name":{"description":"Unique name of this attribute","example":"service","type":"string","key$":"name"},"required":{"description":"Whether this attribute is required. If this field is not set, the existing setting will be preserved.","example":false,"type":"boolean","key$":"required"},"type":{"description":"Engine resource name for this attribute","example":"CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]","type":"string","key$":"type"}},"required":["name","type","array"],"type":"object","x-ref":"#/components/schemas/AlertAttributesUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","in":"path","name":"id","required":true,"schema":{"description":"The ID of this attribute","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_attribute_ref01_ent = client.AlertAttribute()
    let alert_attribute_ref01_data = setup.data.new.alert_attribute['alert_attribute_ref01']

    alert_attribute_ref01_data = (await alert_attribute_ref01_ent.create(alert_attribute_ref01_data)).data()
    assert(null != alert_attribute_ref01_data.id)


    // LIST
    const alert_attribute_ref01_match = {}

    const alert_attribute_ref01_list = (await alert_attribute_ref01_ent.list(alert_attribute_ref01_match)).map((e) => e.data())

    assert(!isempty(select(alert_attribute_ref01_list, { id: alert_attribute_ref01_data.id })))


    // UPDATE
    const alert_attribute_ref01_data_up0 = {}
    alert_attribute_ref01_data_up0.id = alert_attribute_ref01_data.id

    const alert_attribute_ref01_markdef_up0 = { name: 'emoji', value: 'Mark01-alert_attribute_ref01_' + setup.now }
    alert_attribute_ref01_data_up0 [alert_attribute_ref01_markdef_up0.name] = alert_attribute_ref01_markdef_up0.value

    const alert_attribute_ref01_resdata_up0 = (await alert_attribute_ref01_ent.update(alert_attribute_ref01_data_up0)).data()
    assert(alert_attribute_ref01_resdata_up0.id === alert_attribute_ref01_data_up0.id)

    assert(alert_attribute_ref01_resdata_up0[alert_attribute_ref01_markdef_up0.name] === alert_attribute_ref01_markdef_up0.value)


    // LOAD
    const alert_attribute_ref01_match_dt0 = {}
    alert_attribute_ref01_match_dt0.id = alert_attribute_ref01_data.id
    const alert_attribute_ref01_data_dt0 = (await alert_attribute_ref01_ent.load(alert_attribute_ref01_match_dt0)).data()
    assert(alert_attribute_ref01_data_dt0.id === alert_attribute_ref01_data.id)


    // REMOVE
    const alert_attribute_ref01_match_rm0 = {}
    alert_attribute_ref01_match_rm0.id = alert_attribute_ref01_data.id
    await alert_attribute_ref01_ent.remove(alert_attribute_ref01_match_rm0)
  

    // LIST
    const alert_attribute_ref01_match_rt0 = {}

    const alert_attribute_ref01_list_rt0 = (await alert_attribute_ref01_ent.list(alert_attribute_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(alert_attribute_ref01_list_rt0, { id: alert_attribute_ref01_data.id })))


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
      '../../../../.sdk/test/entity/alert_attribute/AlertAttributeTestData.json')

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
    ['alert_attribute01','alert_attribute02','alert_attribute03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERT_ATTRIBUTE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERT_ATTRIBUTE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERT_ATTRIBUTE_ENTID']
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
  

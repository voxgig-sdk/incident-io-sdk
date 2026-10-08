
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


describe('PayConfigEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PayConfig()
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
    PreSpec() { throw new Error('pay_config hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).PayConfig().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).PayConfig()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.PayConfig().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().PayConfig().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.PayConfig().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.PayConfig().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PayConfig().list({"after":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"base_rate_cents":{"a":true,"fo":"int64","h":"Base Rate Cents","n":"base_rate_cents","r":true,"sh":"Rate paid for any time no rule covers, in the lowest denomination of the currency","t":"`$INTEGER`","key$":"base_rate_cents","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":1},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"Currency this config pays in, in ISO 4217 format","t":"`$STRING`","key$":"currency","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this pay config","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name for this pay config","t":"`$STRING`","key$":"name","index$":4},"one_off_rules":{"a":true,"h":"One Off Rules","n":"one_off_rules","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Rules that apply over a single window of time, such as a public holiday","t":"`$ARRAY`","key$":"one_off_rules","index$":5},"published_at":{"a":true,"fo":"date-time","h":"Published At","n":"published_at","r":false,"sh":"When a published report first priced against this config.","t":"`$STRING`","key$":"published_at","index$":6},"rate_time_unit":{"a":true,"h":"Rate Time Unit","n":"rate_time_unit","r":true,"sh":"The unit of time every rate on this config is quoted per.","t":"`$STRING`","key$":"rate_time_unit","index$":7},"timezone":{"a":true,"h":"Timezone","n":"timezone","r":true,"sh":"IANA timezone this config's rules are interpreted in","t":"`$STRING`","key$":"timezone","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":9},"weekly_rules":{"a":true,"h":"Weekly Rules","n":"weekly_rules","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Rules that apply every week, by day of week and time of day, in evaluation order","t":"`$ARRAY`","key$":"weekly_rules","index$":10}},"id":{"field":"id","name":"id"},"name":"pay_config","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["base_rate_cents","currency","name","one_off_rules","rate_time_unit","timezone","weekly_rules"],"co":{"id":"POST /v2/pay_configs","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/pay_configs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"}],"t":{"req":"`reqdata`","res":"`body.pay_config`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/pay_configs","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v2/pay_configs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"}],"t":{"req":"`reqdata`","res":"`body.pay_configs`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/pay_configs/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/pay_configs/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.pay_config`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/pay_configs/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/pay_configs/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["base_rate_cents","currency","name","rate_time_unit","timezone"],"co":{"id":"PUT /v2/pay_configs/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/pay_configs/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.pay_config`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"pay_config","name__orig":"pay_config","Name":"PayConfig","name_":"pay_config","name-":"pay-config","NAME":"PAY_CONFIG","index$":64}, {"active":true,"entity":"pay_config","key$":"BasicPayConfigFlow","kind":"basic","name":"BasicPayConfigFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pay_config_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pay_config_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"pay_config_ref01","srcdatavar":"pay_config_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pay_config_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"pay_config_ref01","srcdatavar":"pay_config_ref01_data","suffix":"_dt0"},"m":{"id":"pay_config01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pay_config_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"pay_config_ref01","suffix":"_rm0"},"m":{"id":"pay_config01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"pay_config_ref01"}}],"index$":5}]}, 'PayConfig', {"POST /v2/pay_configs":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"base_rate_cents":1200,"currency":"GBP","name":"Engineering on-call","one_off_rules":[{"end_at":"2021-08-17T13:28:57.801578Z","id":"01G0J1EXE7AXZ2C93K61WBPYEH","name":"Christmas day","rate_cents":4800,"start_at":"2021-08-17T13:28:57.801578Z"}],"rate_time_unit":"hour","timezone":"Europe/London","weekly_rules":[{"end_time":"17:00","id":"01G0J1EXE7AXZ2C93K61WBPYEH","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]}]},"schema":{"example":{"base_rate_cents":1200,"currency":"GBP","name":"Engineering on-call","one_off_rules":[{"end_at":"2021-08-17T13:28:57.801578Z","id":"01G0J1EXE7AXZ2C93K61WBPYEH","name":"Christmas day","rate_cents":4800,"start_at":"2021-08-17T13:28:57.801578Z"}],"rate_time_unit":"hour","timezone":"Europe/London","weekly_rules":[{"end_time":"17:00","id":"01G0J1EXE7AXZ2C93K61WBPYEH","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]}]},"properties":{"base_rate_cents":{"description":"Rate paid for any time no rule covers, in the lowest denomination of the currency","example":1200,"format":"int64","type":"integer","key$":"base_rate_cents"},"currency":{"description":"Currency this config pays in, in ISO 4217 format","example":"GBP","type":"string","key$":"currency"},"name":{"description":"Human readable name for this pay config","example":"Engineering on-call","type":"string","key$":"name"},"one_off_rules":{"description":"Rules that apply over a single window of time","example":[{"end_at":"2021-08-17T13:28:57.801578Z","id":"01G0J1EXE7AXZ2C93K61WBPYEH","name":"Christmas day","rate_cents":4800,"start_at":"2021-08-17T13:28:57.801578Z"}],"items":{"description":"A one-off rule to write. Send an existing rule's ID to keep it stable, and omit it for a rule you are adding.","example":{"end_at":"2021-08-17T13:28:57.801578Z","id":"01G0J1EXE7AXZ2C93K61WBPYEH","name":"Christmas day","rate_cents":4800,"start_at":"2021-08-17T13:28:57.801578Z"},"properties":{"end_at":{"description":"When this rule stops applying","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string"},"id":{"description":"An existing rule's ID, to keep it stable. Omit for a new rule.","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"name":{"description":"Human readable name for this rule","example":"Christmas day","type":"string"},"rate_cents":{"description":"Rate paid while this rule applies, in the lowest denomination of the config's currency","example":4800,"format":"int64","type":"integer"},"start_at":{"description":"When this rule starts applying","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string"}},"required":["name","start_at","end_at","rate_cents"],"type":"object","x-ref":"#/components/schemas/PayConfigOneOffRulePayloadV2"},"type":"array","key$":"one_off_rules"},"rate_time_unit":{"description":"The unit of time every rate on this config is quoted per","enum":["hour","day"],"example":"hour","type":"string","key$":"rate_time_unit"},"timezone":{"description":"IANA timezone this config's rules are interpreted in","example":"Europe/London","type":"string","key$":"timezone"},"weekly_rules":{"description":"Rules that apply every week, in the order they should be evaluated","example":[{"end_time":"17:00","id":"01G0J1EXE7AXZ2C93K61WBPYEH","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]}],"items":{"description":"A weekly rule to write. Send an existing rule's ID to keep it stable, and omit it for a rule you are adding.","example":{"end_time":"17:00","id":"01G0J1EXE7AXZ2C93K61WBPYEH","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]},"properties":{"end_time":{"description":"Time of day this rule ends, in 24 hour format. Equal to start_time means it runs for the whole day.","example":"17:00","type":"string"},"id":{"description":"An existing rule's ID, to keep it stable. Omit for a new rule.","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"rate_cents":{"description":"Rate paid while this rule applies, in the lowest denomination of the config's currency","example":2400,"format":"int64","type":"integer"},"start_time":{"description":"Time of day this rule starts, in 24 hour format","example":"09:00","type":"string"},"weekdays":{"description":"Days of the week this rule applies on","example":[],"items":{},"type":"array"}},"required":["weekdays","start_time","end_time","rate_cents"],"type":"object","x-ref":"#/components/schemas/PayConfigWeeklyRulePayloadV2"},"type":"array","key$":"weekly_rules"}},"required":["name","timezone","currency","base_rate_cents","rate_time_unit"],"type":"object","x-ref":"#/components/schemas/PayConfigsCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/pay_configs":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A pay config's ID. This endpoint will return a list of pay configs after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01G0J1EXE7AXZ2C93K61WBPYEH"}},"in":"query","name":"after","schema":{"description":"A pay config's ID. This endpoint will return a list of pay configs after this ID in relation to the API response order.","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1}]},"GET /v2/pay_configs/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"DELETE /v2/pay_configs/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"PUT /v2/pay_configs/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"base_rate_cents":1200,"currency":"GBP","name":"Engineering on-call","rate_time_unit":"hour","timezone":"Europe/London"},"schema":{"example":{"base_rate_cents":1200,"currency":"GBP","name":"Engineering on-call","rate_time_unit":"hour","timezone":"Europe/London"},"properties":{"base_rate_cents":{"description":"Rate paid for any time no rule covers, in the lowest denomination of the currency","example":1200,"format":"int64","type":"integer","key$":"base_rate_cents"},"currency":{"description":"Currency this config pays in, in ISO 4217 format","example":"GBP","type":"string","key$":"currency"},"name":{"description":"Human readable name for this pay config","example":"Engineering on-call","type":"string","key$":"name"},"rate_time_unit":{"description":"The unit of time every rate on this config is quoted per. Pay is pro-rated by the second either way.","enum":["hour","day"],"example":"hour","type":"string","key$":"rate_time_unit"},"timezone":{"description":"IANA timezone this config's rules are interpreted in","example":"Europe/London","type":"string","key$":"timezone"}},"required":["name","timezone","currency","base_rate_cents","rate_time_unit"],"type":"object","x-ref":"#/components/schemas/PayConfigsUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this pay config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pay_config_ref01_ent = client.PayConfig()
    let pay_config_ref01_data = setup.data.new.pay_config['pay_config_ref01']

    pay_config_ref01_data = (await pay_config_ref01_ent.create(pay_config_ref01_data)).data()
    assert(null != pay_config_ref01_data.id)


    // LIST
    const pay_config_ref01_match = {}

    const pay_config_ref01_list = (await pay_config_ref01_ent.list(pay_config_ref01_match)).map((e) => e.data())

    assert(!isempty(select(pay_config_ref01_list, { id: pay_config_ref01_data.id })))


    // UPDATE
    const pay_config_ref01_data_up0 = {}
    pay_config_ref01_data_up0.id = pay_config_ref01_data.id

    const pay_config_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-pay_config_ref01_' + setup.now }
    pay_config_ref01_data_up0 [pay_config_ref01_markdef_up0.name] = pay_config_ref01_markdef_up0.value

    const pay_config_ref01_resdata_up0 = (await pay_config_ref01_ent.update(pay_config_ref01_data_up0)).data()
    assert(pay_config_ref01_resdata_up0.id === pay_config_ref01_data_up0.id)

    assert(pay_config_ref01_resdata_up0[pay_config_ref01_markdef_up0.name] === pay_config_ref01_markdef_up0.value)


    // LOAD
    const pay_config_ref01_match_dt0 = {}
    pay_config_ref01_match_dt0.id = pay_config_ref01_data.id
    const pay_config_ref01_data_dt0 = (await pay_config_ref01_ent.load(pay_config_ref01_match_dt0)).data()
    assert(pay_config_ref01_data_dt0.id === pay_config_ref01_data.id)


    // REMOVE
    const pay_config_ref01_match_rm0 = {}
    pay_config_ref01_match_rm0.id = pay_config_ref01_data.id
    await pay_config_ref01_ent.remove(pay_config_ref01_match_rm0)
  

    // LIST
    const pay_config_ref01_match_rt0 = {}

    const pay_config_ref01_list_rt0 = (await pay_config_ref01_ent.list(pay_config_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(pay_config_ref01_list_rt0, { id: pay_config_ref01_data.id })))


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
      '../../../../.sdk/test/entity/pay_config/PayConfigTestData.json')

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
    ['pay_config01','pay_config02','pay_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_PAY_CONFIG_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_PAY_CONFIG_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIG_ENTID']
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
  


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


describe('PayConfigsListOneOffRulesResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PayConfigsListOneOffRulesResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PayConfigsListOneOffRulesResultV2().list({"pay_config_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"end_at":{"a":true,"fo":"date-time","h":"End At","n":"end_at","r":true,"sh":"When this rule stops applying","t":"`$STRING`","key$":"end_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this rule, stable across edits to the config","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name for this rule","t":"`$STRING`","key$":"name","index$":2},"rate_cents":{"a":true,"fo":"int64","h":"Rate Cents","n":"rate_cents","r":true,"sh":"Rate paid while this rule applies, in the lowest denomination of the config's currency","t":"`$INTEGER`","key$":"rate_cents","index$":3},"start_at":{"a":true,"fo":"date-time","h":"Start At","n":"start_at","r":true,"sh":"When this rule starts applying","t":"`$STRING`","key$":"start_at","index$":4}},"id":{"field":"id","name":"id"},"name":"pay_configs_list_one_off_rules_result_v2","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/pay_configs/{pay_config_id}/one_off_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_config_id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/pay_configs/{pay_config_id}/one_off_rules","q":{"exist":["pay_config_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"pay_config_id"},{"lit":"one_off_rules"}],"t":{"req":"`reqdata`","res":"`body.one_off_rules`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.pay_config"]]},"key$":"pay_configs_list_one_off_rules_result_v2","name__orig":"pay_configs_list_one_off_rules_result_v2","Name":"PayConfigsListOneOffRulesResultV2","name_":"pay_configs_list_one_off_rules_result_v2","name-":"pay-configs-list-one-off-rules-result-v2","NAME":"PAY_CONFIGS_LIST_ONE_OFF_RULES_RESULT_V2","index$":67}, {"active":true,"entity":"pay_configs_list_one_off_rules_result_v2","key$":"BasicPayConfigsListOneOffRulesResultV2Flow","kind":"basic","name":"BasicPayConfigsListOneOffRulesResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"pay_config_id":"pay_config01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pay_configs_list_one_off_rules_result_v2_ref01"}}],"index$":0}]}, 'PayConfigsListOneOffRulesResultV2', {"GET /v2/pay_configs/{pay_config_id}/one_off_rules":{"protocol":"http","parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pay_configs_list_one_off_rules_result_v2_ref01_data = Object.values(setup.data.existing.pay_configs_list_one_off_rules_result_v2)[0]

    // LIST
    const pay_configs_list_one_off_rules_result_v2_ref01_ent = client.PayConfigsListOneOffRulesResultV2()
    const pay_configs_list_one_off_rules_result_v2_ref01_match = {}
    pay_configs_list_one_off_rules_result_v2_ref01_match['pay_config_id'] = setup.idmap['pay_config01']

    const pay_configs_list_one_off_rules_result_v2_ref01_list = (await pay_configs_list_one_off_rules_result_v2_ref01_ent.list(pay_configs_list_one_off_rules_result_v2_ref01_match)).map((e) => e.data())


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
      '../../../../.sdk/test/entity/pay_configs_list_one_off_rules_result_v2/PayConfigsListOneOffRulesResultV2TestData.json')

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
    ['pay_configs_list_one_off_rules_result_v201','pay_configs_list_one_off_rules_result_v202','pay_configs_list_one_off_rules_result_v203','pay_config01','pay_config02','pay_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_PAY_CONFIGS_LIST_ONE_OFF_RULES_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_PAY_CONFIGS_LIST_ONE_OFF_RULES_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIGS_LIST_ONE_OFF_RULES_RESULT_V2_ENTID']
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
  

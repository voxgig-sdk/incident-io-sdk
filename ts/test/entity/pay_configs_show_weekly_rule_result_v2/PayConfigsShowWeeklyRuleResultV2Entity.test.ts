

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


describe('PayConfigsShowWeeklyRuleResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PayConfigsShowWeeklyRuleResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PayConfigsShowWeeklyRuleResultV2().load({"id":1,"pay_config_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pay_configs_show_weekly_rule_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"end_time":{"a":true,"h":"End Time","n":"end_time","r":true,"sh":"Time of day this rule ends, in 24 hour format.","t":"`$STRING`","key$":"end_time","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this rule, stable across edits to the config","t":"`$STRING`","key$":"id","index$":1},"rate_cents":{"a":true,"fo":"int64","h":"Rate Cents","n":"rate_cents","r":true,"sh":"Rate paid while this rule applies, in the lowest denomination of the config's currency","t":"`$INTEGER`","key$":"rate_cents","index$":2},"start_time":{"a":true,"h":"Start Time","n":"start_time","r":true,"sh":"Time of day this rule starts, in 24 hour format","t":"`$STRING`","key$":"start_time","index$":3},"weekdays":{"a":true,"h":"Weekdays","n":"weekdays","r":true,"sh":"Days of the week this rule applies on","t":"`$ARRAY`","key$":"weekdays","index$":4}},"id":{"field":"id","name":"id"},"name":"pay_configs_show_weekly_rule_result_v2","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/pay_configs/{pay_config_id}/weekly_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_config_id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/pay_configs/{pay_config_id}/weekly_rules/{id}","q":{"exist":["id","pay_config_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"pay_config_id"},{"lit":"weekly_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.weekly_rule`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.pay_config"]]},"key$":"pay_configs_show_weekly_rule_result_v2","name__orig":"pay_configs_show_weekly_rule_result_v2","Name":"PayConfigsShowWeeklyRuleResultV2","name_":"pay_configs_show_weekly_rule_result_v2","name-":"pay-configs-show-weekly-rule-result-v2","NAME":"PAY_CONFIGS_SHOW_WEEKLY_RULE_RESULT_V2","index$":70}, {"active":true,"entity":"pay_configs_show_weekly_rule_result_v2","key$":"BasicPayConfigsShowWeeklyRuleResultV2Flow","kind":"basic","name":"BasicPayConfigsShowWeeklyRuleResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pay_configs_show_weekly_rule_result_v2_ref01","srcdatavar":"pay_configs_show_weekly_rule_result_v2_ref01_data","suffix":"_dt0"},"m":{"id":"pay_configs_show_weekly_rule_result_v201","pay_config_id":"pay_config01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pay_configs_show_weekly_rule_result_v2_ref01"}}],"index$":0}]}, 'PayConfigsShowWeeklyRuleResultV2', {"GET /v2/pay_configs/{pay_config_id}/weekly_rules/{id}":{"protocol":"http","parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0},{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pay_configs_show_weekly_rule_result_v2_ref01_data = Object.values(setup.data.existing.pay_configs_show_weekly_rule_result_v2)[0] as any

    // LOAD
    const pay_configs_show_weekly_rule_result_v2_ref01_ent = client.PayConfigsShowWeeklyRuleResultV2()
    const pay_configs_show_weekly_rule_result_v2_ref01_match_dt0: any = {}
    pay_configs_show_weekly_rule_result_v2_ref01_match_dt0.id = pay_configs_show_weekly_rule_result_v2_ref01_data.id
    pay_configs_show_weekly_rule_result_v2_ref01_match_dt0['pay_config_id'] = setup.idmap['pay_config_id'] ?? setup.idmap['pay_config01']
    const pay_configs_show_weekly_rule_result_v2_ref01_data_dt0 = (await pay_configs_show_weekly_rule_result_v2_ref01_ent.load(pay_configs_show_weekly_rule_result_v2_ref01_match_dt0)).data()
    assert(pay_configs_show_weekly_rule_result_v2_ref01_data_dt0.id === pay_configs_show_weekly_rule_result_v2_ref01_data.id)


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
      '../../../../.sdk/test/entity/pay_configs_show_weekly_rule_result_v2/PayConfigsShowWeeklyRuleResultV2TestData.json')

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
    ['pay_configs_show_weekly_rule_result_v201','pay_configs_show_weekly_rule_result_v202','pay_configs_show_weekly_rule_result_v203','pay_config01','pay_config02','pay_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_PAY_CONFIGS_SHOW_WEEKLY_RULE_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_PAY_CONFIGS_SHOW_WEEKLY_RULE_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIGS_SHOW_WEEKLY_RULE_RESULT_V2_ENTID']
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
  

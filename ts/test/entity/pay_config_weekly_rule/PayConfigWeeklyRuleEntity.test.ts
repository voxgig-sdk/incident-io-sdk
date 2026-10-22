

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


describe('PayConfigWeeklyRuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PayConfigWeeklyRule()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PayConfigWeeklyRule().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['update', 'load', 'remove', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pay_config_weekly_rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"end_time":{"a":true,"h":"End Time","n":"end_time","r":true,"sh":"Time of day this rule ends, in 24 hour format.","t":"`$STRING`","key$":"end_time","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this rule, stable across edits to the config","t":"`$STRING`","key$":"id","index$":1},"rate_cents":{"a":true,"fo":"int64","h":"Rate Cents","n":"rate_cents","r":true,"sh":"Rate paid while this rule applies, in the lowest denomination of the config's currency","t":"`$INTEGER`","key$":"rate_cents","index$":2},"start_time":{"a":true,"h":"Start Time","n":"start_time","r":true,"sh":"Time of day this rule starts, in 24 hour format","t":"`$STRING`","key$":"start_time","index$":3},"weekdays":{"a":true,"h":"Weekdays","n":"weekdays","r":true,"sh":"Days of the week this rule applies on","t":"`$ARRAY`","key$":"weekdays","index$":4}},"id":{"field":"id","name":"id"},"name":"pay_config_weekly_rule","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["end_time","rate_cents","start_time","weekdays"],"co":{"id":"POST /v2/pay_configs/{pay_config_id}/weekly_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/pay_configs/{pay_config_id}/weekly_rules","q":{"exist":["id"]},"r":{"param":{"pay_config_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"id"},{"lit":"weekly_rules"}],"t":{"req":"`reqdata`","res":"`body.weekly_rule`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/pay_configs/{pay_config_id}/weekly_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/pay_configs/{pay_config_id}/weekly_rules","q":{"exist":["id"]},"r":{"param":{"pay_config_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"id"},{"lit":"weekly_rules"}],"t":{"req":"`reqdata`","res":"`body.weekly_rules`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/pay_configs/{pay_config_id}/weekly_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_config_id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/pay_configs/{pay_config_id}/weekly_rules/{id}","q":{"exist":["id","pay_config_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"pay_config_id"},{"lit":"weekly_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.weekly_rule`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/pay_configs/{pay_config_id}/weekly_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_config_id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/v2/pay_configs/{pay_config_id}/weekly_rules/{id}","q":{"exist":["id","pay_config_id"]},"r":{},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"pay_config_id"},{"lit":"weekly_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["end_time","rate_cents","start_time","weekdays"],"co":{"id":"PUT /v2/pay_configs/{pay_config_id}/weekly_rules/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_config_id","or":"pay_config_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/v2/pay_configs/{pay_config_id}/weekly_rules/{id}","q":{"exist":["id","pay_config_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_configs"},{"var":"pay_config_id"},{"lit":"weekly_rules"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.weekly_rule`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.pay_config"]]},"key$":"pay_config_weekly_rule","name__orig":"pay_config_weekly_rule","Name":"PayConfigWeeklyRule","name_":"pay_config_weekly_rule","name-":"pay-config-weekly-rule","NAME":"PAY_CONFIG_WEEKLY_RULE","index$":68}, {"active":true,"entity":"pay_config_weekly_rule","key$":"BasicPayConfigWeeklyRuleFlow","kind":"basic","name":"BasicPayConfigWeeklyRuleFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"pay_config_weekly_rule_ref01"},"m":{"pay_config_id":"pay_config01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"pay_config_id":"pay_config01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pay_config_weekly_rule_ref01"}}],"unreachable":true},{"a":true,"d":{"pay_config_id":"pay_config01"},"i":{"ref":"pay_config_weekly_rule_ref01","srcdatavar":"pay_config_weekly_rule_ref01_data","suffix":"_up0","textfield":"end_time"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pay_config_weekly_rule_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"pay_config_weekly_rule_ref01","srcdatavar":"pay_config_weekly_rule_ref01_data","suffix":"_dt0"},"m":{"id":"pay_config_weekly_rule01","pay_config_id":"pay_config01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pay_config_weekly_rule_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"pay_config_weekly_rule_ref01","suffix":"_rm0"},"m":{"id":"pay_config_weekly_rule01","pay_config_id":"pay_config01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"pay_config_id":"pay_config01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"pay_config_weekly_rule_ref01"}}],"index$":3}]}, 'PayConfigWeeklyRule', {"POST /v2/pay_configs/{pay_config_id}/weekly_rules":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"end_time":"17:00","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]},"schema":{"example":{"end_time":"17:00","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]},"properties":{"end_time":{"description":"Time of day this rule ends, in 24 hour format. Equal to start_time means it runs for the whole day.","example":"17:00","type":"string","key$":"end_time"},"rate_cents":{"description":"Rate paid while this rule applies, in the lowest denomination of the config's currency","example":2400,"format":"int64","type":"integer","key$":"rate_cents"},"start_time":{"description":"Time of day this rule starts, in 24 hour format","example":"09:00","type":"string","key$":"start_time"},"weekdays":{"description":"Days of the week this rule applies on","example":["monday"],"items":{"enum":["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],"example":"monday","type":"string"},"type":"array","key$":"weekdays"}},"required":["weekdays","start_time","end_time","rate_cents"],"type":"object","x-ref":"#/components/schemas/PayConfigsCreateWeeklyRulePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"GET /v2/pay_configs/{pay_config_id}/weekly_rules":{"protocol":"http","parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"GET /v2/pay_configs/{pay_config_id}/weekly_rules/{id}":{"protocol":"http","parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0},{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1}]},"DELETE /v2/pay_configs/{pay_config_id}/weekly_rules/{id}":{"protocol":"http","parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0},{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1}]},"PUT /v2/pay_configs/{pay_config_id}/weekly_rules/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"end_time":"17:00","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]},"schema":{"example":{"end_time":"17:00","rate_cents":2400,"start_time":"09:00","weekdays":["monday"]},"properties":{"end_time":{"description":"Time of day this rule ends, in 24 hour format. Equal to start_time means it runs for the whole day.","example":"17:00","type":"string","key$":"end_time"},"rate_cents":{"description":"Rate paid while this rule applies, in the lowest denomination of the config's currency","example":2400,"format":"int64","type":"integer","key$":"rate_cents"},"start_time":{"description":"Time of day this rule starts, in 24 hour format","example":"09:00","type":"string","key$":"start_time"},"weekdays":{"description":"Days of the week this rule applies on","example":["monday"],"items":{"enum":["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],"example":"monday","type":"string"},"type":"array","key$":"weekdays"}},"required":["weekdays","start_time","end_time","rate_cents"],"type":"object","x-ref":"#/components/schemas/PayConfigsUpdateWeeklyRulePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"pay_config_id","required":true,"schema":{"description":"The pay config's ID","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0},{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this rule, stable across edits to the config","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pay_config_weekly_rule_ref01_data = Object.values(setup.data.existing.pay_config_weekly_rule)[0] as any

    // UPDATE
    const pay_config_weekly_rule_ref01_ent = client.PayConfigWeeklyRule()
    const pay_config_weekly_rule_ref01_data_up0: any = {}
    pay_config_weekly_rule_ref01_data_up0.id = pay_config_weekly_rule_ref01_data.id
    pay_config_weekly_rule_ref01_data_up0['pay_config_id'] = setup.idmap['pay_config_id'] ?? setup.idmap['pay_config01']

    const pay_config_weekly_rule_ref01_markdef_up0 = { name: 'end_time', value: 'Mark01-pay_config_weekly_rule_ref01_' + setup.now }
    ;(pay_config_weekly_rule_ref01_data_up0 as any)[pay_config_weekly_rule_ref01_markdef_up0.name] = pay_config_weekly_rule_ref01_markdef_up0.value

    const pay_config_weekly_rule_ref01_resdata_up0 = (await pay_config_weekly_rule_ref01_ent.update(pay_config_weekly_rule_ref01_data_up0)).data()
    assert(pay_config_weekly_rule_ref01_resdata_up0.id === pay_config_weekly_rule_ref01_data_up0.id)

    assert((pay_config_weekly_rule_ref01_resdata_up0 as any)[pay_config_weekly_rule_ref01_markdef_up0.name] === pay_config_weekly_rule_ref01_markdef_up0.value)


    // LOAD
    const pay_config_weekly_rule_ref01_match_dt0: any = {}
    pay_config_weekly_rule_ref01_match_dt0.id = pay_config_weekly_rule_ref01_data.id
    pay_config_weekly_rule_ref01_match_dt0['pay_config_id'] = setup.idmap['pay_config_id'] ?? setup.idmap['pay_config01']
    const pay_config_weekly_rule_ref01_data_dt0 = (await pay_config_weekly_rule_ref01_ent.load(pay_config_weekly_rule_ref01_match_dt0)).data()
    assert(pay_config_weekly_rule_ref01_data_dt0.id === pay_config_weekly_rule_ref01_data.id)


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
      '../../../../.sdk/test/entity/pay_config_weekly_rule/PayConfigWeeklyRuleTestData.json')

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
    ['pay_config_weekly_rule01','pay_config_weekly_rule02','pay_config_weekly_rule03','pay_config01','pay_config02','pay_config03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_PAY_CONFIG_WEEKLY_RULE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_PAY_CONFIG_WEEKLY_RULE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIG_WEEKLY_RULE_ENTID']
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
  

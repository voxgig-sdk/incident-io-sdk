

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


describe('PayReportsPublishResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PayReportsPublishResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PayReportsPublishResultV2().create({"pay_report_id":1,"cc_emails":"x","send_user_breakdowns":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pay_reports_publish_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cc_emails":{"a":true,"h":"Cc Emails","n":"cc_emails","r":true,"sh":"Email addresses to send a copy of the report to","t":"`$ARRAY`","key$":"cc_emails","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this report was created","t":"`$STRING`","key$":"created_at","index$":1},"creator":{"a":true,"h":"Creator","n":"creator","r":false,"t":"`$OBJECT`","key$":"creator","index$":2},"end_date":{"a":true,"h":"End Date","n":"end_date","r":true,"sh":"Last date (YYYY-MM-DD) this report includes shifts from, inclusive","t":"`$STRING`","key$":"end_date","index$":3},"error_code":{"a":true,"h":"Error Code","n":"error_code","r":false,"sh":"Why a report could not be generated","t":"`$STRING`","key$":"error_code","index$":4},"error_message":{"a":true,"h":"Error Message","n":"error_message","r":false,"sh":"What went wrong, written for whoever asked for the report.","t":"`$STRING`","key$":"error_message","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this pay report","t":"`$STRING`","key$":"id","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name for this report","t":"`$STRING`","key$":"name","index$":7},"overlapping_shifts":{"a":true,"h":"Overlapping Shifts","n":"overlapping_shifts","r":true,"sh":"How time spent on more than one schedule at once was paid","t":"`$STRING`","key$":"overlapping_shifts","index$":8},"published_at":{"a":true,"fo":"date-time","h":"Published At","n":"published_at","r":false,"sh":"When this report was published.","t":"`$STRING`","key$":"published_at","index$":9},"schedule_ids":{"a":true,"h":"Schedule Ids","n":"schedule_ids","r":true,"sh":"The schedules this report covers","t":"`$ARRAY`","key$":"schedule_ids","index$":10},"send_user_breakdowns":{"a":true,"h":"Send User Breakdowns","n":"send_user_breakdowns","r":true,"sh":"Whether each user in the report is emailed their own pay breakdown","t":"`$STRING`","key$":"send_user_breakdowns","index$":11},"start_date":{"a":true,"h":"Start Date","n":"start_date","r":true,"sh":"First date (YYYY-MM-DD) this report includes shifts from, inclusive","t":"`$STRING`","key$":"start_date","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"How far a report has got through being generated","t":"`$STRING`","key$":"status","index$":13},"total_duration_seconds":{"a":true,"fo":"int64","h":"Total Duration Seconds","n":"total_duration_seconds","r":false,"sh":"Total time spent on-call across every shift in this report, in seconds.","t":"`$INTEGER`","key$":"total_duration_seconds","index$":14},"total_pay_by_currency":{"a":true,"h":"Total Pay By Currency","n":"total_pay_by_currency","r":false,"sh":"Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency.","t":"`$OBJECT`","key$":"total_pay_by_currency","index$":15},"unpaid_shifts":{"a":true,"h":"Unpaid Shifts","n":"unpaid_shifts","r":true,"sh":"Whether shifts that priced to zero are part of the report","t":"`$STRING`","key$":"unpaid_shifts","index$":16},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this report was last updated","t":"`$STRING`","key$":"updated_at","index$":17}},"id":{"field":"id","name":"id"},"name":"pay_reports_publish_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["cc_emails","send_user_breakdowns"],"co":{"id":"POST /v2/pay_reports/{id}/actions/publish","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"pay_report_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/pay_reports/{id}/actions/publish","q":{"exist":["pay_report_id"]},"r":{"param":{"id":"pay_report_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"pay_reports"},{"var":"pay_report_id"},{"lit":"actions"},{"lit":"publish"}],"t":{"req":"`reqdata`","res":"`body.pay_report`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.pay_report"]]},"key$":"pay_reports_publish_result_v2","name__orig":"pay_reports_publish_result_v2","Name":"PayReportsPublishResultV2","name_":"pay_reports_publish_result_v2","name-":"pay-reports-publish-result-v2","NAME":"PAY_REPORTS_PUBLISH_RESULT_V2","index$":70}, {"active":true,"entity":"pay_reports_publish_result_v2","key$":"BasicPayReportsPublishResultV2Flow","kind":"basic","name":"BasicPayReportsPublishResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pay_reports_publish_result_v2_ref01"},"m":{"pay_report_id":"pay_report01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PayReportsPublishResultV2', {"POST /v2/pay_reports/{id}/actions/publish":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"cc_emails":["finance@example.com"],"send_user_breakdowns":"skip"},"schema":{"example":{"cc_emails":["finance@example.com"],"send_user_breakdowns":"skip"},"properties":{"cc_emails":{"description":"Email addresses to send a copy of the report to","example":["finance@example.com"],"items":{"example":"finance@example.com","type":"string"},"type":"array","key$":"cc_emails"},"send_user_breakdowns":{"description":"Whether each user in the report is emailed their own pay breakdown","enum":["send","skip"],"example":"skip","type":"string","key$":"send_user_breakdowns"}},"required":["cc_emails","send_user_breakdowns"],"type":"object","x-ref":"#/components/schemas/PayReportsPublishPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for this pay report","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this pay report","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pay_reports_publish_result_v2_ref01_ent = client.PayReportsPublishResultV2()
    let pay_reports_publish_result_v2_ref01_data = setup.data.new.pay_reports_publish_result_v2['pay_reports_publish_result_v2_ref01']
    pay_reports_publish_result_v2_ref01_data['pay_report_id'] = setup.idmap['pay_report01']

    pay_reports_publish_result_v2_ref01_data = (await pay_reports_publish_result_v2_ref01_ent.create(pay_reports_publish_result_v2_ref01_data)).data()
    assert(null != pay_reports_publish_result_v2_ref01_data.id)


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
      '../../../../.sdk/test/entity/pay_reports_publish_result_v2/PayReportsPublishResultV2TestData.json')

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
    ['pay_reports_publish_result_v201','pay_reports_publish_result_v202','pay_reports_publish_result_v203','pay_report01','pay_report02','pay_report03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_PAY_REPORTS_PUBLISH_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_PAY_REPORTS_PUBLISH_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_PAY_REPORTS_PUBLISH_RESULT_V2_ENTID']
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
  

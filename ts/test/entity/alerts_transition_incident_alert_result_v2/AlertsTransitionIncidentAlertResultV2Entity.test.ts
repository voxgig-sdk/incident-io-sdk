

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


describe('AlertsTransitionIncidentAlertResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertsTransitionIncidentAlertResultV2()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('alerts_transition_incident_alert_result_v2 hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).AlertsTransitionIncidentAlertResultV2().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).AlertsTransitionIncidentAlertResultV2()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AlertsTransitionIncidentAlertResultV2().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().AlertsTransitionIncidentAlertResultV2().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AlertsTransitionIncidentAlertResultV2().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AlertsTransitionIncidentAlertResultV2().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AlertsTransitionIncidentAlertResultV2().list({"after":1,"page_size":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'alerts_transition_incident_alert_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert":{"a":true,"h":"Alert","n":"alert","r":true,"t":"`$OBJECT`","key$":"alert","index$":0},"alert_id":{"a":true,"h":"Alert Id","n":"alert_id","r":true,"sh":"Alert to attach to the incident","t":"`$STRING`","key$":"alert_id","index$":1},"alert_route_id":{"a":true,"h":"Alert Route Id","n":"alert_route_id","r":false,"sh":"The ID of the alert route that created this incident alert","t":"`$STRING`","key$":"alert_route_id","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of this alert","t":"`$STRING`","key$":"id","index$":3},"incident":{"a":true,"h":"Incident","n":"incident","r":true,"sh":"Incident slim is a subset of the full incident object, listing key fields.","t":"`$OBJECT`","key$":"incident","index$":4},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"Incident to attach the alert to","t":"`$STRING`","key$":"incident_id","index$":5},"re_relate":{"a":true,"h":"Re Relate","n":"re_relate","r":false,"sh":"Relate the alert again even though someone previously marked it unrelated to this incident.","t":"`$BOOLEAN`","key$":"re_relate","index$":6},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"What state to move the connection to","t":"`$STRING`","key$":"state","index$":7}},"id":{"field":"id","name":"id"},"name":"alerts_transition_incident_alert_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["state"],"co":{"id":"POST /v2/incident_alerts/{id}/actions/transition","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"incident_alert_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/incident_alerts/{id}/actions/transition","q":{"exist":["incident_alert_id"]},"r":{"param":{"id":"incident_alert_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_alerts"},{"var":"incident_alert_id"},{"lit":"actions"},{"lit":"transition"}],"t":{"req":"`reqdata`","res":"`body.incident_alert`"},"index$":0},{"a":true,"bf":["alert_id","incident_id","re_relate"],"co":{"id":"POST /v2/incident_alerts","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/incident_alerts","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_alerts"}],"t":{"req":"`reqdata`","res":"`body.incident_alert`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/incident_alerts","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG1","k":"query","n":"alert_id","or":"alert_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":true,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/v2/incident_alerts","q":{"exist":["page_size"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_alerts"}],"t":{"req":"`reqdata`","res":"`body.incident_alerts`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"alerts_transition_incident_alert_result_v2","name__orig":"alerts_transition_incident_alert_result_v2","Name":"AlertsTransitionIncidentAlertResultV2","name_":"alerts_transition_incident_alert_result_v2","name-":"alerts-transition-incident-alert-result-v2","NAME":"ALERTS_TRANSITION_INCIDENT_ALERT_RESULT_V2","index$":10}, {"active":true,"entity":"alerts_transition_incident_alert_result_v2","key$":"BasicAlertsTransitionIncidentAlertResultV2Flow","kind":"basic","name":"BasicAlertsTransitionIncidentAlertResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alerts_transition_incident_alert_result_v2_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alerts_transition_incident_alert_result_v2_ref01"}}],"index$":1}]}, 'AlertsTransitionIncidentAlertResultV2', {"POST /v2/incident_alerts/{id}/actions/transition":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"state":"related"},"schema":{"example":{"state":"related"},"properties":{"state":{"description":"What state to move the connection to","enum":["related","unrelated"],"example":"related","type":"string","key$":"state"}},"required":["state"],"type":"object","x-ref":"#/components/schemas/AlertsTransitionIncidentAlertPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the incident alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the incident alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"POST /v2/incident_alerts":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"alert_id":"01FCNDV6P870EA6S7TK1DSYDG1","incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","re_relate":false},"schema":{"example":{"alert_id":"01FCNDV6P870EA6S7TK1DSYDG1","incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","re_relate":false},"properties":{"alert_id":{"description":"Alert to attach to the incident","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string","key$":"alert_id"},"incident_id":{"description":"Incident to attach the alert to","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"incident_id"},"re_relate":{"default":false,"description":"Relate the alert again even though someone previously marked it unrelated to this incident. Defaults to false, which preserves that decision and returns a 422","example":false,"type":"boolean","key$":"re_relate"}},"required":["alert_id","incident_id"],"type":"object","x-ref":"#/components/schemas/AlertsCreateIncidentAlertPayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/incident_alerts":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Number of incident alerts to return per page","example":25,"in":"query","name":"page_size","required":true,"schema":{"default":25,"description":"Number of incident alerts to return per page","example":25,"format":"int64","maximum":50,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"If provided, pass this as the 'after' param to load the next page","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"after","schema":{"description":"If provided, pass this as the 'after' param to load the next page","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Alert that this incident alert refers to","example":"01FCNDV6P870EA6S7TK1DSYDG1","in":"query","name":"alert_id","schema":{"description":"Alert that this incident alert refers to","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string"},"index$":2},{"allowEmptyValue":true,"description":"Incident that this incident alert is attached to","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"incident_id","schema":{"description":"Incident that this incident alert is attached to","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alerts_transition_incident_alert_result_v2_ref01_ent = client.AlertsTransitionIncidentAlertResultV2()
    let alerts_transition_incident_alert_result_v2_ref01_data = setup.data.new.alerts_transition_incident_alert_result_v2['alerts_transition_incident_alert_result_v2_ref01']

    alerts_transition_incident_alert_result_v2_ref01_data = (await alerts_transition_incident_alert_result_v2_ref01_ent.create(alerts_transition_incident_alert_result_v2_ref01_data)).data()
    assert(null != alerts_transition_incident_alert_result_v2_ref01_data.id)


    // LIST
    const alerts_transition_incident_alert_result_v2_ref01_match: any = {}

    const alerts_transition_incident_alert_result_v2_ref01_list = (await alerts_transition_incident_alert_result_v2_ref01_ent.list(alerts_transition_incident_alert_result_v2_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(alerts_transition_incident_alert_result_v2_ref01_list, { id: alerts_transition_incident_alert_result_v2_ref01_data.id })))


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
      '../../../../.sdk/test/entity/alerts_transition_incident_alert_result_v2/AlertsTransitionIncidentAlertResultV2TestData.json')

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
    ['alerts_transition_incident_alert_result_v201','alerts_transition_incident_alert_result_v202','alerts_transition_incident_alert_result_v203'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERTS_TRANSITION_INCIDENT_ALERT_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERTS_TRANSITION_INCIDENT_ALERT_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERTS_TRANSITION_INCIDENT_ALERT_RESULT_V2_ENTID']
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
  

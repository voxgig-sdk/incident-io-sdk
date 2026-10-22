

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


describe('StatusPageIncidentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.StatusPageIncident()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('status_page_incident hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).StatusPageIncident().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).StatusPageIncident()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.StatusPageIncident().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().StatusPageIncident().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.StatusPageIncident().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.StatusPageIncident().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatusPageIncident().list({"after":1,"status_page_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'status_page_incident.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"component_impacts":{"a":true,"h":"Component Impacts","n":"component_impacts","r":true,"sh":"A list of time periods that this status page incident had an impact on a component","t":"`$ARRAY`","key$":"component_impacts","index$":0},"component_statuses":{"a":true,"h":"Component Statuses","n":"component_statuses","r":false,"sh":"An array of mappings from component ID to current component status","t":"`$ARRAY`","key$":"component_statuses","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"A unique ID for this status page incident","t":"`$STRING`","key$":"id","index$":2},"idempotency_key":{"a":true,"h":"Idempotency Key","n":"idempotency_key","r":true,"sh":"A unique key to de-duplicate requests.","t":"`$STRING`","key$":"idempotency_key","index$":3},"incident_status":{"a":true,"h":"Incident Status","n":"incident_status","r":true,"sh":"Current status for this incident","t":"`$STRING`","key$":"incident_status","index$":4},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"Markdown initial update on this status page incident","t":"`$STRING`","key$":"message","index$":5},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"A title for the incident","t":"`$STRING`","key$":"name","index$":6},"notify_subscribers":{"a":true,"h":"Notify Subscribers","n":"notify_subscribers","r":true,"sh":"Whether to notify subscribers about this status page incident.","t":"`$BOOLEAN`","key$":"notify_subscribers","index$":7},"published_at":{"a":true,"fo":"date-time","h":"Published At","n":"published_at","r":true,"sh":"When this status page incident was published to the status page","t":"`$STRING`","key$":"published_at","index$":8},"status_page_id":{"a":true,"h":"Status Page Id","n":"status_page_id","r":true,"sh":"The ID of the corresponding status page","t":"`$STRING`","key$":"status_page_id","index$":9},"updates":{"a":true,"h":"Updates","n":"updates","r":true,"sh":"A list of updates posted to this status page incident","t":"`$ARRAY`","key$":"updates","index$":10}},"id":{"field":"id","name":"id"},"name":"status_page_incident","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["component_statuses","idempotency_key","incident_status","message","name","notify_subscribers","status_page_id"],"co":{"id":"POST /v2/status_page_incidents","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/status_page_incidents","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_page_incidents"}],"t":{"req":"`reqdata`","res":"`body.status_page_incident`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/status_page_incidents","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG1","k":"query","n":"component_id","or":"component_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"2021-08-17T13:28:57.801578Z","k":"query","n":"end_at","or":"end_at","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG2","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":"2021-08-17T13:28:57.801578Z","k":"query","n":"start_at","or":"start_at","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"status_page_id","or":"status_page_id","r":true,"t":"`$STRING`","index$":6},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG3","k":"query","n":"sub_page_id","or":"sub_page_id","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/v2/status_page_incidents","q":{"exist":["status_page_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_page_incidents"}],"t":{"req":"`reqdata`","res":"`body.status_page_incidents`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/status_page_incidents/{status_page_incident_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG1","k":"param","n":"id","or":"status_page_incident_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/status_page_incidents/{status_page_incident_id}","q":{"exist":["id"]},"r":{"param":{"status_page_incident_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_page_incidents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.status_page_incident`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["name"],"co":{"id":"PUT /v2/status_page_incidents/{status_page_incident_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG1","k":"param","n":"id","or":"status_page_incident_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/status_page_incidents/{status_page_incident_id}","q":{"exist":["id"]},"r":{"param":{"status_page_incident_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_page_incidents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.status_page_incident`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"status_page_incident","name__orig":"status_page_incident","Name":"StatusPageIncident","name_":"status_page_incident","name-":"status-page-incident","NAME":"STATUS_PAGE_INCIDENT","index$":92}, {"active":true,"entity":"status_page_incident","key$":"BasicStatusPageIncidentFlow","kind":"basic","name":"BasicStatusPageIncidentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"status_page_incident_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"status_page_incident_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"status_page_incident_ref01","srcdatavar":"status_page_incident_ref01_data","suffix":"_up0","textfield":"idempotency_key"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-status_page_incident_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"status_page_incident_ref01","srcdatavar":"status_page_incident_ref01_data","suffix":"_dt0"},"m":{"id":"status_page_incident01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-status_page_incident_ref01"}}],"index$":3}]}, 'StatusPageIncident', {"POST /v2/status_page_incidents":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"component_statuses":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"idempotency_key":"alert-12345-abcde","incident_status":"investigating","message":"We are currently investigating reports of elevated error rates affecting our API.","name":"Elevated API latency","notify_subscribers":true,"status_page_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"schema":{"example":{"component_statuses":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"idempotency_key":"alert-12345-abcde","incident_status":"investigating","message":"We are currently investigating reports of elevated error rates affecting our API.","name":"Elevated API latency","notify_subscribers":true,"status_page_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"properties":{"component_statuses":{"description":"An array of mappings from component ID to current component status","example":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"items":{"example":{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"},"properties":{"component_id":{"description":"The ID of the affected component. This may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG2","type":"string"},"component_status":{"description":"The status of the relevant component in a status page incident","enum":[],"example":"operational","type":"string","x-public-api-version":"v2"}},"required":["component_id","component_status"],"type":"object","x-ref":"#/components/schemas/StatusPageIncidentAffectedComponentV2"},"type":"array","key$":"component_statuses"},"idempotency_key":{"description":"A unique key to de-duplicate requests. If you send a request with an idempotency_key that was already used, the original response will be returned.","example":"alert-12345-abcde","type":"string","key$":"idempotency_key"},"incident_status":{"description":"Current status for this status page incident","enum":["investigating","identified","monitoring","resolved"],"example":"investigating","type":"string","key$":"incident_status"},"message":{"description":"Markdown initial update on this status page incident","example":"We are currently investigating reports of elevated error rates affecting our API.","maxLength":4096,"type":"string","key$":"message"},"name":{"description":"A title for the incident","example":"Elevated API latency","maxLength":200,"type":"string","key$":"name"},"notify_subscribers":{"description":"Whether to notify subscribers about this status page incident. If your status page has more than 1000 subscribers, requests that set this to true are rejected. This limit applies only to the public API: publishing from the incident.io dashboard or Slack always notifies every subscriber.","example":true,"type":"boolean","key$":"notify_subscribers"},"status_page_id":{"description":"ID of the status page. You can find this by calling the ListStatusPages endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"status_page_id"}},"required":["status_page_id","name","incident_status","idempotency_key","message","notify_subscribers"],"type":"object","x-ref":"#/components/schemas/StatusPagesCreateStatusPageIncidentPayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/status_page_incidents":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"ID of the status page. You can find this by calling the ListStatusPages endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"status_page_id","required":true,"schema":{"description":"ID of the status page. You can find this by calling the ListStatusPages endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Filter status page incidents to only those that impacted the specified component. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG1","in":"query","name":"component_id","schema":{"description":"Filter status page incidents to only those that impacted the specified component. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter status page incidents to only those that impacted components in the specified group. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG2","in":"query","name":"group_id","schema":{"description":"Filter status page incidents to only those that impacted components in the specified group. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG2","type":"string"},"index$":2},{"allowEmptyValue":true,"description":"Filter status page incidents to only those that impacted the specified sub-page. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG3","in":"query","name":"sub_page_id","schema":{"description":"Filter status page incidents to only those that impacted the specified sub-page. This ID may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG3","type":"string"},"index$":3},{"allowEmptyValue":true,"description":"Filter status page incidents to only those that had impacts during or after this time.","example":"2021-08-17T13:28:57.801578Z","in":"query","name":"start_at","schema":{"description":"Filter status page incidents to only those that had impacts during or after this time.","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string"},"index$":4},{"allowEmptyValue":true,"description":"Filter status page incidents to only those that had impacts during or before this time.","example":"2021-08-17T13:28:57.801578Z","in":"query","name":"end_at","schema":{"description":"Filter status page incidents to only those that had impacts during or before this time.","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string"},"index$":5},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":6},{"allowEmptyValue":true,"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"after","schema":{"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":7}]},"GET /v2/status_page_incidents/{status_page_incident_id}":{"protocol":"http","parameters":[{"description":"ID of the status page incident","example":"01FCNDV6P870EA6S7TK1DSYDG1","in":"path","name":"status_page_incident_id","required":true,"schema":{"description":"ID of the status page incident","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string"},"index$":0}]},"PUT /v2/status_page_incidents/{status_page_incident_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"name":"Elevated API latency"},"schema":{"example":{"name":"Elevated API latency"},"properties":{"name":{"description":"A title for the incident","example":"Elevated API latency","maxLength":200,"type":"string","key$":"name"}},"required":["name"],"type":"object","x-ref":"#/components/schemas/StatusPagesUpdateStatusPageIncidentPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"ID of the status page incident","example":"01FCNDV6P870EA6S7TK1DSYDG1","in":"path","name":"status_page_incident_id","required":true,"schema":{"description":"ID of the status page incident","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const status_page_incident_ref01_ent = client.StatusPageIncident()
    let status_page_incident_ref01_data = setup.data.new.status_page_incident['status_page_incident_ref01']

    status_page_incident_ref01_data = (await status_page_incident_ref01_ent.create(status_page_incident_ref01_data)).data()
    assert(null != status_page_incident_ref01_data.id)


    // LIST
    const status_page_incident_ref01_match: any = {}

    const status_page_incident_ref01_list = (await status_page_incident_ref01_ent.list(status_page_incident_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(status_page_incident_ref01_list, { id: status_page_incident_ref01_data.id })))


    // UPDATE
    const status_page_incident_ref01_data_up0: any = {}
    status_page_incident_ref01_data_up0.id = status_page_incident_ref01_data.id

    const status_page_incident_ref01_markdef_up0 = { name: 'idempotency_key', value: 'Mark01-status_page_incident_ref01_' + setup.now }
    ;(status_page_incident_ref01_data_up0 as any)[status_page_incident_ref01_markdef_up0.name] = status_page_incident_ref01_markdef_up0.value

    const status_page_incident_ref01_resdata_up0 = (await status_page_incident_ref01_ent.update(status_page_incident_ref01_data_up0)).data()
    assert(status_page_incident_ref01_resdata_up0.id === status_page_incident_ref01_data_up0.id)

    assert((status_page_incident_ref01_resdata_up0 as any)[status_page_incident_ref01_markdef_up0.name] === status_page_incident_ref01_markdef_up0.value)


    // LOAD
    const status_page_incident_ref01_match_dt0: any = {}
    status_page_incident_ref01_match_dt0.id = status_page_incident_ref01_data.id
    const status_page_incident_ref01_data_dt0 = (await status_page_incident_ref01_ent.load(status_page_incident_ref01_match_dt0)).data()
    assert(status_page_incident_ref01_data_dt0.id === status_page_incident_ref01_data.id)


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
      '../../../../.sdk/test/entity/status_page_incident/StatusPageIncidentTestData.json')

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
    ['status_page_incident01','status_page_incident02','status_page_incident03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_ENTID']
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
  

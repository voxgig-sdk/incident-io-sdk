

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


describe('EscalationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Escalation()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('escalation hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).Escalation().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).Escalation()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Escalation().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().Escalation().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Escalation().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Escalation().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Escalation().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'escalation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this escalation was created","t":"`$STRING`","key$":"created_at","index$":0},"creator":{"a":true,"h":"Creator","n":"creator","r":true,"sh":"The creator of this escalation.","t":"`$OBJECT`","key$":"creator","index$":1},"description":{"a":true,"h":"Description","n":"description","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Additional detail provided with this escalation.","t":"`$STRING`","key$":"description","index$":2},"escalation_path_id":{"a":true,"h":"Escalation Path Id","n":"escalation_path_id","r":false,"sh":"Unique identifier of the escalation path that the escalation was created from","t":"`$STRING`","key$":"escalation_path_id","index$":3},"events":{"a":true,"h":"Events","n":"events","r":true,"sh":"Events which describe the history of this escalation.","t":"`$ARRAY`","key$":"events","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique ID of the escalation","t":"`$STRING`","key$":"id","index$":5},"idempotency_key":{"a":true,"h":"Idempotency Key","n":"idempotency_key","r":true,"sh":"Unique key to prevent duplicate escalations.","t":"`$STRING`","key$":"idempotency_key","index$":6},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":false,"sh":"ID of an incident to associate with this escalation.","t":"`$STRING`","key$":"incident_id","index$":7},"priority":{"a":true,"h":"Priority","n":"priority","r":true,"sh":"The priority associated with this escalation.","t":"`$OBJECT`","key$":"priority","index$":8},"related_alerts":{"a":true,"h":"Related Alerts","n":"related_alerts","r":true,"sh":"Alerts related to this escalation","t":"`$ARRAY`","key$":"related_alerts","index$":9},"related_incidents":{"a":true,"h":"Related Incidents","n":"related_incidents","r":true,"sh":"Incidents related to this escalation","t":"`$ARRAY`","key$":"related_incidents","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the escalation","t":"`$STRING`","key$":"status","index$":11},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The title of this escalation","t":"`$STRING`","key$":"title","index$":12},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this escalation was last updated","t":"`$STRING`","key$":"updated_at","index$":13},"user_ids":{"a":true,"h":"User Ids","n":"user_ids","r":false,"sh":"IDs of users to escalate directly to","t":"`$ARRAY`","key$":"user_ids","index$":14}},"id":{"field":"id","name":"id"},"name":"escalation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/escalations/{id}/actions/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/escalations/{id}/actions/cancel","q":{"$action":"cancel","exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"escalations"},{"var":"id"},{"lit":"actions"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["response","snooze_details"],"co":{"id":"POST /v2/escalations/{escalation_id}/actions/respond","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"escalation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/escalations/{escalation_id}/actions/respond","q":{"$action":"respond","exist":["id"]},"r":{"param":{"escalation_id":"id"}},"s":[{"lit":"v2"},{"lit":"escalations"},{"var":"id"},{"lit":"actions"},{"lit":"respond"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"bf":["description","escalation_path_id","idempotency_key","incident_id","title","user_ids"],"co":{"id":"POST /v2/escalations","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/escalations","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalations"}],"t":{"req":"`reqdata`","res":"`body.escalation`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/escalations","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"k":"query","n":"alert","or":"alert","r":false,"t":"`$OBJECT`","index$":1},{"a":true,"ex":{"gte":["2021-08-17"]},"k":"query","n":"created_at","or":"created_at","r":false,"t":"`$OBJECT`","index$":2},{"a":true,"ex":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"k":"query","n":"escalation_path","or":"escalation_path","r":false,"t":"`$OBJECT`","index$":3},{"a":true,"ex":{"starts_with":["team-a:"]},"k":"query","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$OBJECT`","index$":4},{"a":true,"ex":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"k":"query","n":"incident","or":"incident","r":false,"t":"`$OBJECT`","index$":5},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":{"one_of":["triggered"]},"k":"query","n":"status","or":"status","r":false,"t":"`$OBJECT`","index$":7},{"a":true,"ex":{"gte":["2021-08-17"]},"k":"query","n":"updated_at","or":"updated_at","r":false,"t":"`$OBJECT`","index$":8}]},"k":"http","m":"GET","o":"/v2/escalations","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalations"}],"t":{"req":"`reqdata`","res":"`body.escalations`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/escalations/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/escalations/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.escalation`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"escalation","name__orig":"escalation","Name":"Escalation","name_":"escalation","name-":"escalation","NAME":"ESCALATION","index$":27}, {"active":true,"entity":"escalation","key$":"BasicEscalationFlow","kind":"basic","name":"BasicEscalationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"escalation_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"escalation_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"escalation_ref01","srcdatavar":"escalation_ref01_data","suffix":"_dt0"},"m":{"id":"escalation01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-escalation_ref01"}}],"index$":2}]}, 'Escalation', {"POST /v2/escalations/{id}/actions/cancel":{"protocol":"http","parameters":[{"description":"Unique ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"POST /v2/escalations/{escalation_id}/actions/respond":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"response":"ack","snooze_details":{"reason":"Waiting for deployment to complete","snooze_until":"2025-01-01T12:00:00Z"}},"schema":{"example":{"response":"ack","snooze_details":{"reason":"Waiting for deployment to complete","snooze_until":"2025-01-01T12:00:00Z"}},"properties":{"response":{"description":"Whether to acknowledge, decline or snooze the escalation","enum":["ack","nack","snooze"],"example":"ack","type":"string"},"snooze_details":{"example":{"reason":"Waiting for deployment to complete","snooze_until":"2025-01-01T12:00:00Z"},"properties":{"reason":{"description":"Optional reason for snoozing the escalation","example":"Waiting for deployment to complete","type":"string"},"snooze_until":{"description":"The time at which the snooze should end","example":"2025-01-01T12:00:00Z","format":"date-time","type":"string"}},"required":["snooze_until"],"type":"object","x-ref":"#/components/schemas/EscalationRespondSnoozeDetailsPayloadV2"}},"required":["response"],"type":"object","x-ref":"#/components/schemas/EscalationsRespondEscalationPayloadV2"}}},"required":true},"parameters":[{"description":"The ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"escalation_id","required":true,"schema":{"description":"The ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]},"POST /v2/escalations":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"Database CPU has been above 90% for 5 minutes","escalation_path_id":"01H0J1EXE7AXZ2C93K61WBPYEH","idempotency_key":"2024-01-15-abc123","incident_id":"01H0J1EXE7AXZ2C93K61WBPYEH","title":"Production database experiencing high CPU","user_ids":["01H0J1EXE7AXZ2C93K61WBPYEH","01H0J1EXE7AXZ2C93K61WBPYEI"]},"schema":{"example":{"description":"Database CPU has been above 90% for 5 minutes","escalation_path_id":"01H0J1EXE7AXZ2C93K61WBPYEH","idempotency_key":"2024-01-15-abc123","incident_id":"01H0J1EXE7AXZ2C93K61WBPYEH","title":"Production database experiencing high CPU","user_ids":["01H0J1EXE7AXZ2C93K61WBPYEH","01H0J1EXE7AXZ2C93K61WBPYEI"]},"properties":{"description":{"description":"Additional details about the escalation","example":"Database CPU has been above 90% for 5 minutes","type":"string","key$":"description"},"escalation_path_id":{"description":"ID of the escalation path to follow","example":"01H0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"escalation_path_id"},"idempotency_key":{"description":"Unique key to prevent duplicate escalations. If this key has already been used, the existing escalation will be returned.","example":"2024-01-15-abc123","type":"string","key$":"idempotency_key"},"incident_id":{"description":"ID of an incident to associate with this escalation. The linked incident will appear in the escalation's related_incidents field.","example":"01H0J1EXE7AXZ2C93K61WBPYEH","type":"string","key$":"incident_id"},"title":{"description":"The title of the escalation. This message will be included in all notifications about this escalation.","example":"Production database experiencing high CPU","type":"string","key$":"title"},"user_ids":{"description":"IDs of users to escalate directly to","example":["01H0J1EXE7AXZ2C93K61WBPYEH","01H0J1EXE7AXZ2C93K61WBPYEI"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"user_ids"}},"required":["idempotency_key","title"],"type":"object","x-ref":"#/components/schemas/EscalationsCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/escalations":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Number of escalations to return per page","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Number of escalations to return per page","example":25,"format":"int64","maximum":50,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"An escalation's ID. This endpoint will return a list of escalations after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"after","schema":{"description":"An escalation's ID. This endpoint will return a list of escalations after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter on the escalation path for which the escalation was triggered. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"explode":true,"in":"query","name":"escalation_path","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the escalation path for which the escalation was triggered. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"type":"object"},"style":"deepObject","index$":2},{"allowEmptyValue":true,"description":"Filter on the status of the escalation. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["triggered"]},"explode":true,"in":"query","name":"status","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the status of the escalation. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["triggered"]},"type":"object"},"style":"deepObject","index$":3},{"allowEmptyValue":true,"description":"Filter on the alert that created an escalation. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"explode":true,"in":"query","name":"alert","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the alert that created an escalation. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"type":"object"},"style":"deepObject","index$":4},{"allowEmptyValue":true,"description":"Filter on the incident that the escalation is connected to. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"explode":true,"in":"query","name":"incident","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the incident that the escalation is connected to. Accepted operators are 'one_of' and 'not_in'.","example":{"one_of":["01J479052SSQAA4531ASFPR3BF"]},"type":"object"},"style":"deepObject","index$":5},{"allowEmptyValue":true,"description":"Filter on the created_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2021-08-17"]},"explode":true,"in":"query","name":"created_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the created_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2021-08-17"]},"type":"object"},"style":"deepObject","index$":6},{"allowEmptyValue":true,"description":"Filter on the updated_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2021-08-17"]},"explode":true,"in":"query","name":"updated_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the updated_at timestamp of the escalation. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2021-08-17"]},"type":"object"},"style":"deepObject","index$":7},{"allowEmptyValue":true,"description":"Filter on the idempotency key of the escalation. This is the key set when creating escalations via the API, and is distinct from alert deduplication keys. Accepted operators are 'is' for exact matches and 'starts_with' for prefix matching.","example":{"starts_with":["team-a:"]},"explode":true,"in":"query","name":"idempotency_key","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the idempotency key of the escalation. This is the key set when creating escalations via the API, and is distinct from alert deduplication keys. Accepted operators are 'is' for exact matches and 'starts_with' for prefix matching.","example":{"starts_with":["team-a:"]},"type":"object"},"style":"deepObject","index$":8}]},"GET /v2/escalations/{id}":{"protocol":"http","parameters":[{"description":"Unique ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"id","required":true,"schema":{"description":"Unique ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const escalation_ref01_ent = client.Escalation()
    let escalation_ref01_data = setup.data.new.escalation['escalation_ref01']

    escalation_ref01_data = (await escalation_ref01_ent.create(escalation_ref01_data)).data()
    assert(null != escalation_ref01_data.id)


    // LIST
    const escalation_ref01_match: any = {}

    const escalation_ref01_list = (await escalation_ref01_ent.list(escalation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(escalation_ref01_list, { id: escalation_ref01_data.id })))


    // LOAD
    const escalation_ref01_match_dt0: any = {}
    escalation_ref01_match_dt0.id = escalation_ref01_data.id
    const escalation_ref01_data_dt0 = (await escalation_ref01_ent.load(escalation_ref01_match_dt0)).data()
    assert(escalation_ref01_data_dt0.id === escalation_ref01_data.id)


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
      '../../../../.sdk/test/entity/escalation/EscalationTestData.json')

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
    ['escalation01','escalation02','escalation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ESCALATION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ESCALATION_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ESCALATION_ENTID']
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
  

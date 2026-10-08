
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


describe('ActionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Action()
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
    PreSpec() { throw new Error('action hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).Action().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).Action()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Action().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().Action().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Action().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Action().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Action().list({"incident_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"assignee":{"a":true,"h":"Assignee","n":"assignee","r":true,"t":"`$OBJECT`","key$":"assignee","index$":0},"assignee_id":{"a":true,"h":"Assignee Id","n":"assignee_id","r":false,"sh":"ID of the user this action is assigned to","t":"`$STRING`","key$":"assignee_id","index$":1},"completed_at":{"a":true,"fo":"date-time","h":"Completed At","n":"completed_at","r":false,"sh":"When the action was completed","t":"`$STRING`","key$":"completed_at","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the action was created","t":"`$STRING`","key$":"created_at","index$":3},"creator":{"a":true,"h":"Creator","n":"creator","r":true,"t":"`$OBJECT`","key$":"creator","index$":4},"description":{"a":true,"h":"Description","n":"description","op":{"create":{"req":true,"type":"`$STRING`"},"list":{"req":true,"type":"`$STRING`"},"load":{"req":true,"type":"`$STRING`"},"update":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"Description of the action","t":"`$STRING`","key$":"description","index$":5},"external_issue_reference":{"a":true,"h":"External Issue Reference","n":"external_issue_reference","r":false,"t":"`$OBJECT`","key$":"external_issue_reference","index$":6},"follow_up":{"a":true,"h":"Follow Up","n":"follow_up","r":true,"sh":"Whether an action is marked as follow-up","t":"`$BOOLEAN`","key$":"follow_up","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the action","t":"`$STRING`","key$":"id","index$":8},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"Unique identifier of the incident the action belongs to","t":"`$STRING`","key$":"incident_id","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Status of the action","t":"`$STRING`","key$":"status","index$":10},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When the action was last updated","t":"`$STRING`","key$":"updated_at","index$":11}},"id":{"field":"id","name":"id"},"name":"action","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["assignee_id","description","incident_id"],"co":{"id":"POST /v2/actions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/actions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":0},{"a":true,"bf":["assignee_id","description","incident_id"],"co":{"id":"POST /v3/actions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v3/actions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/actions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"real","k":"query","n":"incident_mode","or":"incident_mode","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":true,"k":"query","n":"is_follow_up","or":"is_follow_up","r":false,"t":"`$BOOLEAN`","index$":2}]},"k":"http","m":"GET","o":"/v1/actions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body.actions`"},"index$":0},{"a":true,"co":{"id":"GET /v2/actions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"standard","k":"query","n":"incident_mode","or":"incident_mode","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/actions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body.actions`"},"index$":1},{"a":true,"co":{"id":"GET /v3/actions","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":{"gte":["2025-01-01"]},"k":"query","n":"created_at","or":"created_at","r":false,"t":"`$OBJECT`","index$":1},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"standard","k":"query","n":"incident_mode","or":"incident_mode","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":{"gte":["2025-01-01"]},"k":"query","n":"updated_at","or":"updated_at","r":false,"t":"`$OBJECT`","index$":5}]},"k":"http","m":"GET","o":"/v3/actions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body.actions`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/actions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":0},{"a":true,"co":{"id":"GET /v2/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/actions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":1},{"a":true,"co":{"id":"GET /v3/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v3/actions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/actions/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v3/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v3/actions/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v3"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["assignee_id","description","status"],"co":{"id":"PUT /v2/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/actions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":0},{"a":true,"bf":["assignee_id","description","status"],"co":{"id":"PUT /v3/actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v3/actions/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.action`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"action","name__orig":"action","Name":"Action","name_":"action","name-":"action","NAME":"ACTION","index$":0}, {"active":true,"entity":"action","key$":"BasicActionFlow","kind":"basic","name":"BasicActionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"action_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"action_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"action_ref01","srcdatavar":"action_ref01_data","suffix":"_up0","textfield":"assignee_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-action_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"action_ref01","srcdatavar":"action_ref01_data","suffix":"_dt0"},"m":{"id":"action01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-action_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"action_ref01","suffix":"_rm0"},"m":{"id":"action01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"action_ref01"}}],"index$":5}]}, 'Action', {"POST /v2/actions":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H"},"schema":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H"},"properties":{"assignee_id":{"description":"ID of the user this action is assigned to","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"assignee_id"},"description":{"description":"Description of the action. Supports Markdown.","example":"Call the fire brigade","type":"string","key$":"description"},"incident_id":{"description":"Unique identifier of the incident the action belongs to","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"}},"required":["incident_id","description"],"type":"object","x-ref":"#/components/schemas/ActionsCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"POST /v3/actions":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H"},"schema":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H"},"properties":{"assignee_id":{"description":"ID of the user this action is assigned to","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"assignee_id"},"description":{"description":"Description of the action. Supports Markdown.","example":"Call the fire brigade","type":"string","key$":"description"},"incident_id":{"description":"Unique identifier of the incident the action belongs to","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"}},"required":["incident_id","description"],"type":"object","x-ref":"#/components/schemas/ActionsCreatePayloadV3","index$":1}}},"required":true},"parameters":[]},"GET /v1/actions":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Find actions related to this incident","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"incident_id","schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Filter to actions marked as being follow up actions","example":true,"in":"query","name":"is_follow_up","schema":{"description":"Filter to actions marked as being follow up actions","example":true,"type":"boolean"},"index$":1},{"allowEmptyValue":true,"description":"Filter to actions from incidents of the given mode. If not set, only actions from `real` incidents are returned","examples":{"default":{"summary":"default","value":"real"}},"in":"query","name":"incident_mode","schema":{"description":"Filter to actions from incidents of the given mode. If not set, only actions from `real` incidents are returned","enum":["real","test","tutorial"],"example":"real","type":"string"},"index$":2}]},"GET /v2/actions":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Find actions related to this incident","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"incident_id","schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Filter to actions from incidents of the given mode. If not set, only actions from `standard` and `retrospective` incidents are returned","examples":{"default":{"summary":"default","value":"standard"}},"in":"query","name":"incident_mode","schema":{"description":"Filter to actions from incidents of the given mode. If not set, only actions from `standard` and `retrospective` incidents are returned","enum":["standard","retrospective","test","tutorial","stream"],"example":"standard","type":"string"},"index$":1}]},"GET /v3/actions":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"An action's ID. This endpoint will return a list of actions after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FDAG4SAP5TYPT98WGR2N7W91"}},"in":"query","name":"after","schema":{"description":"An action's ID. This endpoint will return a list of actions after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Find actions related to this incident","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"incident_id","schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":2},{"allowEmptyValue":true,"description":"Filter to actions from incidents of the given mode. If not set, only actions from `standard` and `retrospective` incidents are returned","example":"standard","in":"query","name":"incident_mode","schema":{"description":"Filter to actions from incidents of the given mode. If not set, only actions from `standard` and `retrospective` incidents are returned","enum":["standard","retrospective","test","tutorial","stream"],"example":"standard","type":"string"},"index$":3},{"allowEmptyValue":true,"description":"Filter on action created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"explode":true,"in":"query","name":"created_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on action created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"type":"object"},"style":"deepObject","index$":4},{"allowEmptyValue":true,"description":"Filter on action updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"explode":true,"in":"query","name":"updated_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on action updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"type":"object"},"style":"deepObject","index$":5}]},"GET /v1/actions/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"GET /v2/actions/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"GET /v3/actions/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"DELETE /v2/actions/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"DELETE /v3/actions/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"PUT /v2/actions/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","status":"outstanding"},"schema":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","status":"outstanding"},"properties":{"assignee_id":{"description":"ID of the user this action is assigned to. Set to null to unassign.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"assignee_id"},"description":{"description":"Description of the action. Supports Markdown.","example":"Call the fire brigade","type":"string","key$":"description"},"status":{"description":"Status of the action. Setting this to `deleted` is not allowed; use the delete endpoint instead.","enum":["outstanding","completed","deleted","not_doing"],"example":"outstanding","type":"string","key$":"status"}},"required":["description","status"],"type":"object","x-ref":"#/components/schemas/ActionsUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]},"PUT /v3/actions/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","status":"outstanding"},"schema":{"example":{"assignee_id":"01FCNDV6P870EA6S7TK1DSYDG0","description":"Call the fire brigade","status":"outstanding"},"properties":{"assignee_id":{"description":"ID of the user this action is assigned to. Set to null to unassign.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"assignee_id"},"description":{"description":"Description of the action. Supports Markdown.","example":"Call the fire brigade","type":"string","key$":"description"},"status":{"description":"Status of the action. Setting this to `deleted` is not allowed; use the delete endpoint instead.","enum":["outstanding","completed","deleted","not_doing"],"example":"outstanding","type":"string","key$":"status"}},"required":["description","status"],"type":"object","x-ref":"#/components/schemas/ActionsUpdatePayloadV3","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the action","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const action_ref01_ent = client.Action()
    let action_ref01_data = setup.data.new.action['action_ref01']

    action_ref01_data = (await action_ref01_ent.create(action_ref01_data)).data()
    assert(null != action_ref01_data.id)


    // LIST
    const action_ref01_match = {}

    const action_ref01_list = (await action_ref01_ent.list(action_ref01_match)).map((e) => e.data())

    assert(!isempty(select(action_ref01_list, { id: action_ref01_data.id })))


    // UPDATE
    const action_ref01_data_up0 = {}
    action_ref01_data_up0.id = action_ref01_data.id

    const action_ref01_markdef_up0 = { name: 'assignee_id', value: 'Mark01-action_ref01_' + setup.now }
    action_ref01_data_up0 [action_ref01_markdef_up0.name] = action_ref01_markdef_up0.value

    const action_ref01_resdata_up0 = (await action_ref01_ent.update(action_ref01_data_up0)).data()
    assert(action_ref01_resdata_up0.id === action_ref01_data_up0.id)

    assert(action_ref01_resdata_up0[action_ref01_markdef_up0.name] === action_ref01_markdef_up0.value)


    // LOAD
    const action_ref01_match_dt0 = {}
    action_ref01_match_dt0.id = action_ref01_data.id
    const action_ref01_data_dt0 = (await action_ref01_ent.load(action_ref01_match_dt0)).data()
    assert(action_ref01_data_dt0.id === action_ref01_data.id)


    // REMOVE
    const action_ref01_match_rm0 = {}
    action_ref01_match_rm0.id = action_ref01_data.id
    await action_ref01_ent.remove(action_ref01_match_rm0)
  

    // LIST
    const action_ref01_match_rt0 = {}

    const action_ref01_list_rt0 = (await action_ref01_ent.list(action_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(action_ref01_list_rt0, { id: action_ref01_data.id })))


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
      '../../../../.sdk/test/entity/action/ActionTestData.json')

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
    ['action01','action02','action03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ACTION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ACTION_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ACTION_ENTID']
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
  

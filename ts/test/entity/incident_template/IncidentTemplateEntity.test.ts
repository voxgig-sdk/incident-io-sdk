

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


describe('IncidentTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTemplate()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_template hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentTemplate().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentTemplate()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentTemplate().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentTemplate().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentTemplate().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentTemplate().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTemplate().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this incident template was created","t":"`$STRING`","key$":"created_at","index$":0},"expressions":{"a":true,"h":"Expressions","n":"expressions","r":false,"sh":"The expressions used by bindings in this template","t":"`$ARRAY`","key$":"expressions","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this incident template","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of this incident template, for the user's reference","t":"`$STRING`","key$":"name","index$":3},"template":{"a":true,"h":"Template","n":"template","r":true,"sh":"The values an incident template applies to the incidents it creates.","t":"`$OBJECT`","key$":"template","index$":4},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this incident template was last updated","t":"`$STRING`","key$":"updated_at","index$":5}},"id":{"field":"id","name":"id"},"name":"incident_template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["expressions","name","template"],"co":{"id":"POST /v1/incident_templates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/incident_templates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_templates"}],"t":{"req":"`reqdata`","res":"`body.incident_template`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/incident_templates","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v1/incident_templates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_templates"}],"t":{"req":"`reqdata`","res":"`body.incident_templates`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/incident_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/incident_templates/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_template`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/incident_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/incident_templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"incident_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["expressions","name","template"],"co":{"id":"PUT /v1/incident_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/incident_templates/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_template`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"incident_template","name__orig":"incident_template","Name":"IncidentTemplate","name_":"incident_template","name-":"incident-template","NAME":"INCIDENT_TEMPLATE","index$":46}, {"active":true,"entity":"incident_template","key$":"BasicIncidentTemplateFlow","kind":"basic","name":"BasicIncidentTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_template_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"incident_template_ref01","srcdatavar":"incident_template_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_template_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"incident_template_ref01","srcdatavar":"incident_template_ref01_data","suffix":"_dt0"},"m":{"id":"incident_template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_template_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"incident_template_ref01","suffix":"_rm0"},"m":{"id":"incident_template01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"incident_template_ref01"}}],"index$":5}]}, 'IncidentTemplate', {"POST /v1/incident_templates":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"label":"Team Slack channel","operations":[{"branches":{"branches":[],"returns":{}},"cast":{"returns":{}},"concatenate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"filter":{"condition_groups":[]},"navigate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"operation_type":"navigate","parse":{"returns":{},"source":"metadata.annotations[\"github.com/repo\"]"}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"schema":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[],"value":{}}},"label":"Team Slack channel","operations":[{"branches":{},"cast":{},"concatenate":{},"filter":{},"navigate":{},"operation_type":"navigate","parse":{}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[],"value":{}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"properties":{"expressions":{"description":"The expressions used by bindings in this template","example":[{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"}],"items":{"example":{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"},"properties":{"else_branch":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/ExpressionElseBranchPayloadV3"},"label":{"description":"The human readable label of the expression","example":"Team Slack channel","type":"string"},"operations":{"example":[],"items":{},"type":"array"},"reference":{"description":"A short ID that can be used to reference the expression","example":"abc123","type":"string"},"root_reference":{"description":"The root reference for this expression (i.e. where the expression starts)","example":"incident.status","type":"string"}},"required":["label","reference","root_reference","operations"],"type":"object","x-ref":"#/components/schemas/ExpressionPayloadV3"},"type":"array","key$":"expressions"},"name":{"description":"The name of this incident template, for the user's reference","example":"Payments incidents","type":"string","key$":"name"},"template":{"description":"The values an incident template applies to the incidents it creates.","example":{"custom_fields":[{"binding":{},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[],"value":{}}},"incident_type":{"binding":{"array_value":[],"value":{}}},"name":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"severity":{"binding":{"array_value":[],"value":{}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[],"value":{}}},"summary":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"workspace":{"binding":{"array_value":[],"value":{}}}},"properties":{"custom_fields":{"description":"Custom fields configuration","example":[{}],"items":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/IncidentTemplateCustomFieldBindingPayloadV1"},"type":"array"},"incident_mode":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"incident_type":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"name":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"severity":{"example":{"binding":{},"merge_strategy":"first-wins"},"properties":{"binding":{},"merge_strategy":{}},"required":["merge_strategy"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateSeverityBindingPayloadV1"},"start_in_triage":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"summary":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"workspace":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"}},"required":["name"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateConfigPayloadV1","key$":"template"}},"required":["name","template"],"type":"object","x-ref":"#/components/schemas/IncidentTemplatesCreatePayloadV1","index$":1}}},"required":true},"parameters":[]},"GET /v1/incident_templates":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"An incident template's ID. This endpoint returns a list of templates after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"An incident template's ID. This endpoint returns a list of templates after this ID in relation to the API response order.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1}]},"GET /v1/incident_templates/{id}":{"protocol":"http","parameters":[{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v1/incident_templates/{id}":{"protocol":"http","parameters":[{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v1/incident_templates/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"label":"Team Slack channel","operations":[{"branches":{"branches":[],"returns":{}},"cast":{"returns":{}},"concatenate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"filter":{"condition_groups":[]},"navigate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"operation_type":"navigate","parse":{"returns":{},"source":"metadata.annotations[\"github.com/repo\"]"}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"schema":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[],"value":{}}},"label":"Team Slack channel","operations":[{"branches":{},"cast":{},"concatenate":{},"filter":{},"navigate":{},"operation_type":"navigate","parse":{}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[],"value":{}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"properties":{"expressions":{"description":"The expressions used by bindings in this template","example":[{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"}],"items":{"example":{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"},"properties":{"else_branch":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/ExpressionElseBranchPayloadV3"},"label":{"description":"The human readable label of the expression","example":"Team Slack channel","type":"string"},"operations":{"example":[],"items":{},"type":"array"},"reference":{"description":"A short ID that can be used to reference the expression","example":"abc123","type":"string"},"root_reference":{"description":"The root reference for this expression (i.e. where the expression starts)","example":"incident.status","type":"string"}},"required":["label","reference","root_reference","operations"],"type":"object","x-ref":"#/components/schemas/ExpressionPayloadV3"},"type":"array","key$":"expressions"},"name":{"description":"The name of this incident template, for the user's reference","example":"Payments incidents","type":"string","key$":"name"},"template":{"description":"The values an incident template applies to the incidents it creates.","example":{"custom_fields":[{"binding":{},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[],"value":{}}},"incident_type":{"binding":{"array_value":[],"value":{}}},"name":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"severity":{"binding":{"array_value":[],"value":{}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[],"value":{}}},"summary":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"workspace":{"binding":{"array_value":[],"value":{}}}},"properties":{"custom_fields":{"description":"Custom fields configuration","example":[{}],"items":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/IncidentTemplateCustomFieldBindingPayloadV1"},"type":"array"},"incident_mode":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"incident_type":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"name":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"severity":{"example":{"binding":{},"merge_strategy":"first-wins"},"properties":{"binding":{},"merge_strategy":{}},"required":["merge_strategy"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateSeverityBindingPayloadV1"},"start_in_triage":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"summary":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"workspace":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"}},"required":["name"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateConfigPayloadV1","key$":"template"}},"required":["name","template"],"type":"object","x-ref":"#/components/schemas/IncidentTemplatesUpdatePayloadV1","index$":1}}},"required":true},"parameters":[{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The incident template's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_template_ref01_ent = client.IncidentTemplate()
    let incident_template_ref01_data = setup.data.new.incident_template['incident_template_ref01']

    incident_template_ref01_data = (await incident_template_ref01_ent.create(incident_template_ref01_data)).data()
    assert(null != incident_template_ref01_data.id)


    // LIST
    const incident_template_ref01_match: any = {}

    const incident_template_ref01_list = (await incident_template_ref01_ent.list(incident_template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(incident_template_ref01_list, { id: incident_template_ref01_data.id })))


    // UPDATE
    const incident_template_ref01_data_up0: any = {}
    incident_template_ref01_data_up0.id = incident_template_ref01_data.id

    const incident_template_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-incident_template_ref01_' + setup.now }
    ;(incident_template_ref01_data_up0 as any)[incident_template_ref01_markdef_up0.name] = incident_template_ref01_markdef_up0.value

    const incident_template_ref01_resdata_up0 = (await incident_template_ref01_ent.update(incident_template_ref01_data_up0)).data()
    assert(incident_template_ref01_resdata_up0.id === incident_template_ref01_data_up0.id)

    assert((incident_template_ref01_resdata_up0 as any)[incident_template_ref01_markdef_up0.name] === incident_template_ref01_markdef_up0.value)


    // LOAD
    const incident_template_ref01_match_dt0: any = {}
    incident_template_ref01_match_dt0.id = incident_template_ref01_data.id
    const incident_template_ref01_data_dt0 = (await incident_template_ref01_ent.load(incident_template_ref01_match_dt0)).data()
    assert(incident_template_ref01_data_dt0.id === incident_template_ref01_data.id)


    // REMOVE
    const incident_template_ref01_match_rm0: any = { id: incident_template_ref01_data.id }
    await incident_template_ref01_ent.remove(incident_template_ref01_match_rm0)
  

    // LIST
    const incident_template_ref01_match_rt0: any = {}

    const incident_template_ref01_list_rt0 = (await incident_template_ref01_ent.list(incident_template_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(incident_template_ref01_list_rt0, { id: incident_template_ref01_data.id })))


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
      '../../../../.sdk/test/entity/incident_template/IncidentTemplateTestData.json')

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
    ['incident_template01','incident_template02','incident_template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TEMPLATE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TEMPLATE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TEMPLATE_ENTID']
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
  

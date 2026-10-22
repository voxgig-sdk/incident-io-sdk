

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


describe('IncidentTemplatesValidateResultV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTemplatesValidateResultV1()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTemplatesValidateResultV1().create({"name":1,"template":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_templates_validate_result_v1.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"expressions":{"a":true,"h":"Expressions","n":"expressions","r":false,"sh":"The expressions used by bindings in this template","t":"`$ARRAY`","key$":"expressions","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of this incident template, for the user's reference","t":"`$STRING`","key$":"name","index$":1},"template":{"a":true,"h":"Template","n":"template","r":true,"sh":"The values an incident template applies to the incidents it creates.","t":"`$OBJECT`","key$":"template","index$":2},"warnings":{"a":true,"h":"Warnings","n":"warnings","r":true,"sh":"Anything suspect about this config that isn't severe enough to reject it.","t":"`$ARRAY`","key$":"warnings","index$":3}},"name":"incident_templates_validate_result_v1","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["expressions","name","template"],"co":{"id":"POST /v1/incident_templates/actions/validate","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/incident_templates/actions/validate","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_templates"},{"lit":"actions"},{"lit":"validate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"incident_templates_validate_result_v1","name__orig":"incident_templates_validate_result_v1","Name":"IncidentTemplatesValidateResultV1","name_":"incident_templates_validate_result_v1","name-":"incident-templates-validate-result-v1","NAME":"INCIDENT_TEMPLATES_VALIDATE_RESULT_V1","index$":47}, {"active":true,"entity":"incident_templates_validate_result_v1","key$":"BasicIncidentTemplatesValidateResultV1Flow","kind":"basic","name":"BasicIncidentTemplatesValidateResultV1Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_templates_validate_result_v1_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'IncidentTemplatesValidateResultV1', {"POST /v1/incident_templates/actions/validate":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"label":"Team Slack channel","operations":[{"branches":{"branches":[],"returns":{}},"cast":{"returns":{}},"concatenate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"filter":{"condition_groups":[]},"navigate":{"reference":"catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]"},"operation_type":"navigate","parse":{"returns":{},"source":"metadata.annotations[\"github.com/repo\"]"}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"schema":{"example":{"expressions":[{"else_branch":{"result":{"array_value":[],"value":{}}},"label":"Team Slack channel","operations":[{"branches":{},"cast":{},"concatenate":{},"filter":{},"navigate":{},"operation_type":"navigate","parse":{}}],"reference":"abc123","root_reference":"incident.status"}],"name":"Payments incidents","template":{"custom_fields":[{"binding":{"array_value":[],"value":{}},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"incident_type":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"name":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"severity":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"summary":{"autogenerated":false,"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"workspace":{"binding":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}}}},"properties":{"expressions":{"description":"The expressions used by bindings in this template","example":[{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"}],"items":{"example":{"else_branch":{"result":{}},"label":"Team Slack channel","operations":[{}],"reference":"abc123","root_reference":"incident.status"},"properties":{"else_branch":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/ExpressionElseBranchPayloadV3"},"label":{"description":"The human readable label of the expression","example":"Team Slack channel","type":"string"},"operations":{"example":[],"items":{},"type":"array"},"reference":{"description":"A short ID that can be used to reference the expression","example":"abc123","type":"string"},"root_reference":{"description":"The root reference for this expression (i.e. where the expression starts)","example":"incident.status","type":"string"}},"required":["label","reference","root_reference","operations"],"type":"object","x-ref":"#/components/schemas/ExpressionPayloadV3"},"type":"array","key$":"expressions"},"name":{"description":"The name of this incident template, for the user's reference","example":"Payments incidents","type":"string","key$":"name"},"template":{"description":"The values an incident template applies to the incidents it creates.","example":{"custom_fields":[{"binding":{},"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","merge_strategy":"first-wins"}],"incident_mode":{"binding":{"array_value":[],"value":{}}},"incident_type":{"binding":{"array_value":[],"value":{}}},"name":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"severity":{"binding":{"array_value":[],"value":{}},"merge_strategy":"first-wins"},"start_in_triage":{"binding":{"array_value":[],"value":{}}},"summary":{"autogenerated":false,"binding":{"array_value":[],"value":{}}},"workspace":{"binding":{"array_value":[],"value":{}}}},"properties":{"custom_fields":{"description":"Custom fields configuration","example":[{}],"items":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/IncidentTemplateCustomFieldBindingPayloadV1"},"type":"array"},"incident_mode":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"incident_type":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"name":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"severity":{"example":{"binding":{},"merge_strategy":"first-wins"},"properties":{"binding":{},"merge_strategy":{}},"required":["merge_strategy"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateSeverityBindingPayloadV1"},"start_in_triage":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"},"summary":{"example":{"autogenerated":false,"binding":{}},"properties":{"autogenerated":{},"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateAutoGeneratedBindingPayloadV1"},"workspace":{"example":{"binding":{}},"properties":{"binding":{}},"type":"object","x-ref":"#/components/schemas/IncidentTemplateBindingPayloadV1"}},"required":["name"],"type":"object","x-ref":"#/components/schemas/IncidentTemplateConfigPayloadV1","key$":"template"}},"required":["name","template"],"type":"object","x-ref":"#/components/schemas/IncidentTemplatesValidatePayloadV1","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_templates_validate_result_v1_ref01_ent = client.IncidentTemplatesValidateResultV1()
    let incident_templates_validate_result_v1_ref01_data = setup.data.new.incident_templates_validate_result_v1['incident_templates_validate_result_v1_ref01']

    incident_templates_validate_result_v1_ref01_data = (await incident_templates_validate_result_v1_ref01_ent.create(incident_templates_validate_result_v1_ref01_data)).data()
    assert(null != incident_templates_validate_result_v1_ref01_data)


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
      '../../../../.sdk/test/entity/incident_templates_validate_result_v1/IncidentTemplatesValidateResultV1TestData.json')

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
    ['incident_templates_validate_result_v101','incident_templates_validate_result_v102','incident_templates_validate_result_v103'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TEMPLATES_VALIDATE_RESULT_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TEMPLATES_VALIDATE_RESULT_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TEMPLATES_VALIDATE_RESULT_V1_ENTID']
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
  

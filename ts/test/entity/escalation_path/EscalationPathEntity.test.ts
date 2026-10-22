

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


describe('EscalationPathEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.EscalationPath()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('escalation_path hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).EscalationPath().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).EscalationPath()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.EscalationPath().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().EscalationPath().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.EscalationPath().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.EscalationPath().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EscalationPath().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'escalation_path.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"current_responders":{"a":true,"h":"Current Responders","n":"current_responders","r":false,"sh":"Users who are currently on-call for this escalation path","t":"`$ARRAY`","key$":"current_responders","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this escalation path.","t":"`$STRING`","key$":"id","index$":1},"kind":{"a":true,"h":"Kind","n":"kind","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Whether this path carries its own nodes, or is built from an escalation path template.","t":"`$STRING`","key$":"kind","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of this escalation path, for the user's reference.","t":"`$STRING`","key$":"name","index$":3},"param_bindings":{"a":true,"h":"Param Bindings","n":"param_bindings","r":false,"sh":"For a templated path, the values bound to the template's declared parameters, keyed by parameter name.","t":"`$OBJECT`","key$":"param_bindings","index$":4},"path":{"a":true,"h":"Path","n":"path","r":true,"sh":"The nodes that form the levels and branches of this escalation path.","t":"`$ARRAY`","key$":"path","index$":5},"repeat_config":{"a":true,"h":"Repeat Config","n":"repeat_config","r":true,"t":"`$OBJECT`","key$":"repeat_config","index$":6},"team_ids":{"a":true,"h":"Team Ids","n":"team_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"IDs of the teams that own this escalation path.","t":"`$ARRAY`","key$":"team_ids","index$":7},"template_id":{"a":true,"h":"Template Id","n":"template_id","r":false,"sh":"For a templated path, the template it is built from.","t":"`$STRING`","key$":"template_id","index$":8},"working_hours":{"a":true,"h":"Working Hours","n":"working_hours","r":false,"sh":"The working hours for this escalation path.","t":"`$ARRAY`","key$":"working_hours","index$":9}},"id":{"field":"id","name":"id"},"name":"escalation_path","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["kind","name","param_bindings","path","repeat_config","team_ids","template_id","working_hours"],"co":{"id":"POST /v2/escalation_paths","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/escalation_paths","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalation_paths"}],"t":{"req":"`reqdata`","res":"`body.escalation_path`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/escalation_paths","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/v2/escalation_paths","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalation_paths"}],"t":{"req":"`reqdata`","res":"`body.escalation_paths`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/escalation_paths/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/escalation_paths/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalation_paths"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.escalation_path`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/escalation_paths/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/escalation_paths/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"escalation_paths"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["kind","name","param_bindings","path","repeat_config","team_ids","template_id","working_hours"],"co":{"id":"PUT /v2/escalation_paths/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/escalation_paths/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalation_paths"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.escalation_path`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"escalation_path","name__orig":"escalation_path","Name":"EscalationPath","name_":"escalation_path","name-":"escalation-path","NAME":"ESCALATION_PATH","index$":28}, {"active":true,"entity":"escalation_path","key$":"BasicEscalationPathFlow","kind":"basic","name":"BasicEscalationPathFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"escalation_path_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"escalation_path_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"escalation_path_ref01","srcdatavar":"escalation_path_ref01_data","suffix":"_up0","textfield":"kind"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-escalation_path_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"escalation_path_ref01","srcdatavar":"escalation_path_ref01_data","suffix":"_dt0"},"m":{"id":"escalation_path01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-escalation_path_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"escalation_path_ref01","suffix":"_rm0"},"m":{"id":"escalation_path01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"escalation_path_ref01"}}],"index$":5}]}, 'EscalationPath', {"POST /v2/escalation_paths":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"kind":"templated","name":"Urgent Support","param_bindings":{"abc123":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"path":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[{"operation":"one_of","param_bindings":[],"subject":"incident.severity"}],"else_path":[{}],"then_path":[{}]},"level":{"ack_mode":"all","retry_config":{"attempts":3,"interval_seconds":300},"round_robin_config":{"enabled":false,"rotate_after_seconds":120},"targets":[{"id":"lawrencejones","schedule_mode":"currently_on_call","selected_rota_id":"01FCNDV6P870EA6S7TK1DSYDG0","type":"schedule","urgency":"high"}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[{"id":"lawrencejones","schedule_mode":"currently_on_call","selected_rota_id":"01FCNDV6P870EA6S7TK1DSYDG0","type":"schedule","urgency":"high"}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"repeat_config":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"team_ids":["01JPQA75EPNEES4479P16P4XAB"],"template_id":"01FCNDV6P870EA6S7TK1DSYDG0","working_hours":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{"end_time":"17:00","start_time":"09:00","weekday":"monday"}]}]},"schema":{"example":{"kind":"templated","name":"Urgent Support","param_bindings":{"abc123":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"path":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[{}],"else_path":[{}],"then_path":[{}]},"level":{"ack_mode":"all","retry_config":{"attempts":3,"interval_seconds":300},"round_robin_config":{"enabled":false,"rotate_after_seconds":120},"targets":[{}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[{}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"repeat_config":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"team_ids":["01JPQA75EPNEES4479P16P4XAB"],"template_id":"01FCNDV6P870EA6S7TK1DSYDG0","working_hours":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{"end_time":"17:00","start_time":"09:00","weekday":"monday"}]}]},"properties":{"kind":{"description":"Whether this path carries its own nodes, or is built from an escalation path template.","enum":["standalone","templated"],"example":"templated","type":"string","key$":"kind"},"name":{"description":"The name of this escalation path, for the user's reference.","example":"Urgent Support","type":"string","key$":"name"},"param_bindings":{"additionalProperties":{"example":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"properties":{"array_value":{"description":"If set, this is the array value of the step parameter","example":[],"items":{},"type":"array"},"value":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingValuePayloadV2"}},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"},"description":"For a templated path, the values to bind to the template's declared parameters, keyed by parameter name.","example":{"abc123":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"type":"object","key$":"param_bindings"},"path":{"description":"The nodes that form the levels and branches of this escalation path.","example":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[],"else_path":[],"then_path":[]},"level":{"ack_mode":"all","retry_config":{},"round_robin_config":{},"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"items":{"example":{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[],"else_path":[],"then_path":[]},"level":{"ack_mode":"all","retry_config":{},"round_robin_config":{},"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"},"properties":{"delay":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EscalationPathNodeDelayV2"},"escalation_path":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeEscalationPathV2"},"id":{"description":"An ID for this node, unique within the escalation path.\n\nThis allows you to reference the node in other nodes, such as when configuring a 'repeat' node.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"if_else":{"example":{},"properties":"[Circular *components.schemas.EscalationPathNodeIfElsePayloadV2.properties]","required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeIfElsePayloadV2"},"level":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeLevelV2"},"notify_channel":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeNotifyChannelV2"},"repeat":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeRepeatV2"},"type":{"description":"The type of this node. Available types are:\n* level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.\n* notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.\n* if_else: Branch the escalation based on a set of conditions.\n* repeat: Go back to a previous node and repeat the logic from there.\n* delay: Pause the escalation for a configured duration before advancing to the next node.\n* escalation_path: Reassign the escalation to another escalation path, continuing from that path's first node.\n* voicemail: Send an inbound caller to voicemail. Only valid inside a call route's path.","enum":[],"example":"if_else","type":"string"}},"required":["id","type"],"type":"object","x-ref":"#/components/schemas/EscalationPathNodePayloadV2"},"type":"array","key$":"path"},"repeat_config":{"example":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"properties":{"delay_repeat_on_activity":{"default":false,"description":"When true, incident activity resets the repeat timer.","example":false,"type":"boolean"},"repeat_after_seconds":{"description":"Number of seconds we'll wait before repeating an escalation.","example":1800,"format":"int32","maximum":345600,"minimum":300,"type":"integer"}},"required":["repeat_after_seconds","delay_repeat_on_activity"],"type":"object","x-ref":"#/components/schemas/EscalationPathRepeatConfigV2","key$":"repeat_config"},"team_ids":{"description":"IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.","example":["01JPQA75EPNEES4479P16P4XAB"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"team_ids"},"template_id":{"description":"For a templated path, the template to build it from. Required when kind is templated.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"template_id"},"working_hours":{"description":"The working hours for this escalation path.","example":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{}]}],"items":{"example":{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{}]},"properties":{"id":{"description":"The unique identifier for this set of working intervals","example":"abc123","type":"string"},"name":{"description":"A human readable label for this set of working intervals","example":"abc123","type":"string"},"timezone":{"description":"How to interpret all the intervals","example":"abc123","type":"string"},"weekday_intervals":{"example":[],"items":{},"type":"array"}},"required":["id","name","timezone","weekday_intervals"],"type":"object","x-ref":"#/components/schemas/WeekdayIntervalConfigV2"},"type":"array","key$":"working_hours"}},"required":["name","path"],"type":"object","x-ref":"#/components/schemas/EscalationsCreatePathPayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/escalation_paths":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":25,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"after","schema":{"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1}]},"GET /v2/escalation_paths/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v2/escalation_paths/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v2/escalation_paths/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"kind":"templated","name":"Urgent Support","param_bindings":{"abc123":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"path":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[{"operation":"one_of","param_bindings":[],"subject":"incident.severity"}],"else_path":[{}],"then_path":[{}]},"level":{"ack_mode":"all","retry_config":{"attempts":3,"interval_seconds":300},"round_robin_config":{"enabled":false,"rotate_after_seconds":120},"targets":[{"id":"lawrencejones","schedule_mode":"currently_on_call","selected_rota_id":"01FCNDV6P870EA6S7TK1DSYDG0","type":"schedule","urgency":"high"}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[{"id":"lawrencejones","schedule_mode":"currently_on_call","selected_rota_id":"01FCNDV6P870EA6S7TK1DSYDG0","type":"schedule","urgency":"high"}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"repeat_config":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"team_ids":["01JPQA75EPNEES4479P16P4XAB"],"template_id":"01FCNDV6P870EA6S7TK1DSYDG0","working_hours":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{"end_time":"17:00","start_time":"09:00","weekday":"monday"}]}]},"schema":{"example":{"kind":"templated","name":"Urgent Support","param_bindings":{"abc123":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"path":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[{}],"else_path":[{}],"then_path":[{}]},"level":{"ack_mode":"all","retry_config":{"attempts":3,"interval_seconds":300},"round_robin_config":{"enabled":false,"rotate_after_seconds":120},"targets":[{}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[{}],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"repeat_config":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"team_ids":["01JPQA75EPNEES4479P16P4XAB"],"template_id":"01FCNDV6P870EA6S7TK1DSYDG0","working_hours":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{"end_time":"17:00","start_time":"09:00","weekday":"monday"}]}]},"properties":{"kind":{"description":"Whether this path carries its own nodes, or is built from an escalation path template.","enum":["standalone","templated"],"example":"templated","type":"string","key$":"kind"},"name":{"description":"The name of this escalation path, for the user's reference.","example":"Urgent Support","type":"string","key$":"name"},"param_bindings":{"additionalProperties":{"example":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"properties":{"array_value":{"description":"If set, this is the array value of the step parameter","example":[],"items":{},"type":"array"},"value":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingValuePayloadV2"}},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"},"description":"For a templated path, the values to bind to the template's declared parameters, keyed by parameter name.","example":{"abc123":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}},"type":"object","key$":"param_bindings"},"path":{"description":"The nodes that form the levels and branches of this escalation path.","example":[{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[],"else_path":[],"then_path":[]},"level":{"ack_mode":"all","retry_config":{},"round_robin_config":{},"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"}],"items":{"example":{"delay":{"delay_interval_condition":"active","delay_seconds":300,"delay_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"escalation_path":{"escalation_path_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"id":"01FCNDV6P870EA6S7TK1DSYDG0","if_else":{"conditions":[],"else_path":[],"then_path":[]},"level":{"ack_mode":"all","retry_config":{},"round_robin_config":{},"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"notify_channel":{"targets":[],"time_to_ack_interval_condition":"active","time_to_ack_seconds":1800,"time_to_ack_weekday_interval_config_id":"01FCNDV6P870EA6S7TK1DSYDG0"},"repeat":{"repeat_times":3,"to_node":"01FCNDV6P870EA6S7TK1DSYDG0"},"type":"if_else"},"properties":{"delay":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EscalationPathNodeDelayV2"},"escalation_path":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeEscalationPathV2"},"id":{"description":"An ID for this node, unique within the escalation path.\n\nThis allows you to reference the node in other nodes, such as when configuring a 'repeat' node.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"if_else":{"example":{},"properties":"[Circular *components.schemas.EscalationPathNodeIfElsePayloadV2.properties]","required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeIfElsePayloadV2"},"level":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeLevelV2"},"notify_channel":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeNotifyChannelV2"},"repeat":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/EscalationPathNodeRepeatV2"},"type":{"description":"The type of this node. Available types are:\n* level: A set of targets (users or schedules) that should be paged, either all at once, or with a round-robin configuration.\n* notify_channel: Send the escalation to a Slack channel, where it can be acked by anyone in the channel.\n* if_else: Branch the escalation based on a set of conditions.\n* repeat: Go back to a previous node and repeat the logic from there.\n* delay: Pause the escalation for a configured duration before advancing to the next node.\n* escalation_path: Reassign the escalation to another escalation path, continuing from that path's first node.\n* voicemail: Send an inbound caller to voicemail. Only valid inside a call route's path.","enum":[],"example":"if_else","type":"string"}},"required":["id","type"],"type":"object","x-ref":"#/components/schemas/EscalationPathNodePayloadV2"},"type":"array","key$":"path"},"repeat_config":{"example":{"delay_repeat_on_activity":false,"repeat_after_seconds":1800},"properties":{"delay_repeat_on_activity":{"default":false,"description":"When true, incident activity resets the repeat timer.","example":false,"type":"boolean"},"repeat_after_seconds":{"description":"Number of seconds we'll wait before repeating an escalation.","example":1800,"format":"int32","maximum":345600,"minimum":300,"type":"integer"}},"required":["repeat_after_seconds","delay_repeat_on_activity"],"type":"object","x-ref":"#/components/schemas/EscalationPathRepeatConfigV2","key$":"repeat_config"},"team_ids":{"description":"IDs of the teams that own this escalation path. This will automatically sync escalation paths with the right teams in Catalog. If you have an escalation paths attribute on your Teams, this attribute is required.","example":["01JPQA75EPNEES4479P16P4XAB"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"team_ids"},"template_id":{"description":"For a templated path, the template to build it from. Required when kind is templated.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"template_id"},"working_hours":{"description":"The working hours for this escalation path.","example":[{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{}]}],"items":{"example":{"id":"abc123","name":"abc123","timezone":"abc123","weekday_intervals":[{}]},"properties":{"id":{"description":"The unique identifier for this set of working intervals","example":"abc123","type":"string"},"name":{"description":"A human readable label for this set of working intervals","example":"abc123","type":"string"},"timezone":{"description":"How to interpret all the intervals","example":"abc123","type":"string"},"weekday_intervals":{"example":[],"items":{},"type":"array"}},"required":["id","name","timezone","weekday_intervals"],"type":"object","x-ref":"#/components/schemas/WeekdayIntervalConfigV2"},"type":"array","key$":"working_hours"}},"required":["name","path"],"type":"object","x-ref":"#/components/schemas/EscalationsUpdatePathPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this escalation path.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const escalation_path_ref01_ent = client.EscalationPath()
    let escalation_path_ref01_data = setup.data.new.escalation_path['escalation_path_ref01']

    escalation_path_ref01_data = (await escalation_path_ref01_ent.create(escalation_path_ref01_data)).data()
    assert(null != escalation_path_ref01_data.id)


    // LIST
    const escalation_path_ref01_match: any = {}

    const escalation_path_ref01_list = (await escalation_path_ref01_ent.list(escalation_path_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(escalation_path_ref01_list, { id: escalation_path_ref01_data.id })))


    // UPDATE
    const escalation_path_ref01_data_up0: any = {}
    escalation_path_ref01_data_up0.id = escalation_path_ref01_data.id

    const escalation_path_ref01_markdef_up0 = { name: 'kind', value: 'Mark01-escalation_path_ref01_' + setup.now }
    ;(escalation_path_ref01_data_up0 as any)[escalation_path_ref01_markdef_up0.name] = escalation_path_ref01_markdef_up0.value

    const escalation_path_ref01_resdata_up0 = (await escalation_path_ref01_ent.update(escalation_path_ref01_data_up0)).data()
    assert(escalation_path_ref01_resdata_up0.id === escalation_path_ref01_data_up0.id)

    assert((escalation_path_ref01_resdata_up0 as any)[escalation_path_ref01_markdef_up0.name] === escalation_path_ref01_markdef_up0.value)


    // LOAD
    const escalation_path_ref01_match_dt0: any = {}
    escalation_path_ref01_match_dt0.id = escalation_path_ref01_data.id
    const escalation_path_ref01_data_dt0 = (await escalation_path_ref01_ent.load(escalation_path_ref01_match_dt0)).data()
    assert(escalation_path_ref01_data_dt0.id === escalation_path_ref01_data.id)


    // REMOVE
    const escalation_path_ref01_match_rm0: any = { id: escalation_path_ref01_data.id }
    await escalation_path_ref01_ent.remove(escalation_path_ref01_match_rm0)
  

    // LIST
    const escalation_path_ref01_match_rt0: any = {}

    const escalation_path_ref01_list_rt0 = (await escalation_path_ref01_ent.list(escalation_path_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(escalation_path_ref01_list_rt0, { id: escalation_path_ref01_data.id })))


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
      '../../../../.sdk/test/entity/escalation_path/EscalationPathTestData.json')

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
    ['escalation_path01','escalation_path02','escalation_path03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ESCALATION_PATH_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ESCALATION_PATH_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ESCALATION_PATH_ENTID']
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
  

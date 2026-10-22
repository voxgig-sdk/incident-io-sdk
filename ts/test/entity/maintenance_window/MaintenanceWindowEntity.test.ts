

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


describe('MaintenanceWindowEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.MaintenanceWindow()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('maintenance_window hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).MaintenanceWindow().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).MaintenanceWindow()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.MaintenanceWindow().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().MaintenanceWindow().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.MaintenanceWindow().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.MaintenanceWindow().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.MaintenanceWindow().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'maintenance_window.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_condition_groups":{"a":true,"h":"Alert Condition Groups","n":"alert_condition_groups","r":true,"sh":"Condition groups that determine which alerts this maintenance window applies to","t":"`$ARRAY`","key$":"alert_condition_groups","index$":0},"archived_at":{"a":true,"fo":"date-time","h":"Archived At","n":"archived_at","r":false,"sh":"When this maintenance window was archived, if it has been","t":"`$STRING`","key$":"archived_at","index$":1},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this maintenance window was created","t":"`$STRING`","key$":"created_at","index$":2},"end_at":{"a":true,"fo":"date-time","h":"End At","n":"end_at","r":true,"sh":"When the maintenance window ends","t":"`$STRING`","key$":"end_at","index$":3},"escalation_targets":{"a":true,"h":"Escalation Targets","n":"escalation_targets","r":false,"sh":"If set, alerts matching this window will be escalated to these targets","t":"`$ARRAY`","key$":"escalation_targets","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this maintenance window","t":"`$STRING`","key$":"id","index$":5},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":false,"sh":"If set, alerts matching this window will be automatically attached to this incident","t":"`$STRING`","key$":"incident_id","index$":6},"lead":{"a":true,"h":"Lead","n":"lead","r":true,"t":"`$OBJECT`","key$":"lead","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name for the maintenance window","t":"`$STRING`","key$":"name","index$":8},"notification_message":{"a":true,"h":"Notification Message","n":"notification_message","r":false,"sh":"Custom message included in notifications about this maintenance window","t":"`$STRING`","key$":"notification_message","index$":9},"notify_channels":{"a":true,"h":"Notify Channels","n":"notify_channels","r":false,"sh":"Channels to notify about the maintenance window starting and ending","t":"`$ARRAY`","key$":"notify_channels","index$":10},"notify_end_minutes_before":{"a":true,"fo":"int64","h":"Notify End Minutes Before","n":"notify_end_minutes_before","r":false,"sh":"Minutes before the end to send a notification to the configured channels","t":"`$INTEGER`","key$":"notify_end_minutes_before","index$":11},"notify_start_minutes_before":{"a":true,"fo":"int64","h":"Notify Start Minutes Before","n":"notify_start_minutes_before","r":false,"sh":"Minutes before the start to send a notification to the configured channels","t":"`$INTEGER`","key$":"notify_start_minutes_before","index$":12},"owning_team_ids":{"a":true,"h":"Owning Team Ids","n":"owning_team_ids","r":false,"sh":"IDs of teams that own this maintenance window.","t":"`$ARRAY`","key$":"owning_team_ids","index$":13},"reroute_on_end":{"a":true,"h":"Reroute On End","n":"reroute_on_end","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to retrigger firing alerts through alert routing when the window ends","t":"`$BOOLEAN`","key$":"reroute_on_end","index$":14},"resolve_on_end":{"a":true,"h":"Resolve On End","n":"resolve_on_end","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"Whether to automatically resolve all firing alerts that matched this window when it ends","t":"`$BOOLEAN`","key$":"resolve_on_end","index$":15},"show_in_sidebar":{"a":true,"h":"Show In Sidebar","n":"show_in_sidebar","r":true,"sh":"Whether to show this maintenance window in the dashboard sidebar when active","t":"`$BOOLEAN`","key$":"show_in_sidebar","index$":16},"start_at":{"a":true,"fo":"date-time","h":"Start At","n":"start_at","r":true,"sh":"When the maintenance window starts","t":"`$STRING`","key$":"start_at","index$":17},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this maintenance window was last updated","t":"`$STRING`","key$":"updated_at","index$":18}},"id":{"field":"id","name":"id"},"name":"maintenance_window","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["alert_condition_groups","end_at","escalation_targets","incident_id","lead","name","notification_message","notify_channels","notify_end_minutes_before","notify_start_minutes_before","owning_team_ids","reroute_on_end","resolve_on_end","show_in_sidebar","start_at"],"co":{"id":"POST /v1/maintenance_windows","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/maintenance_windows","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"maintenance_windows"}],"t":{"req":"`reqdata`","res":"`body.maintenance_window`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/maintenance_windows","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"active","k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v1/maintenance_windows","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"maintenance_windows"}],"t":{"req":"`reqdata`","res":"`body.maintenance_windows`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/maintenance_windows/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/maintenance_windows/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"maintenance_windows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.maintenance_window`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/maintenance_windows/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"force","or":"force","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/maintenance_windows/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"maintenance_windows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["alert_condition_groups","end_at","escalation_targets","incident_id","lead","name","notification_message","notify_channels","notify_end_minutes_before","notify_start_minutes_before","owning_team_ids","reroute_on_end","resolve_on_end","show_in_sidebar","start_at"],"co":{"id":"PUT /v1/maintenance_windows/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/maintenance_windows/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"maintenance_windows"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.maintenance_window`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"maintenance_window","name__orig":"maintenance_window","Name":"MaintenanceWindow","name_":"maintenance_window","name-":"maintenance-window","NAME":"MAINTENANCE_WINDOW","index$":61}, {"active":true,"entity":"maintenance_window","key$":"BasicMaintenanceWindowFlow","kind":"basic","name":"BasicMaintenanceWindowFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"maintenance_window_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"maintenance_window_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"maintenance_window_ref01","srcdatavar":"maintenance_window_ref01_data","suffix":"_up0","textfield":"archived_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-maintenance_window_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"maintenance_window_ref01","srcdatavar":"maintenance_window_ref01_data","suffix":"_dt0"},"m":{"id":"maintenance_window01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-maintenance_window_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"maintenance_window_ref01","suffix":"_rm0"},"m":{"id":"maintenance_window01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"maintenance_window_ref01"}}],"index$":5}]}, 'MaintenanceWindow', {"POST /v1/maintenance_windows":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"alert_condition_groups":[{"conditions":[{"operation":"one_of","param_bindings":[{}],"subject":"incident.severity"}]}],"end_at":"2021-08-17T14:28:57.801578Z","escalation_targets":[{"escalation_paths":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}},"users":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}}],"incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","lead":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"name":"Planned database migration","notification_message":"Scheduled downtime for database migration","notify_channels":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"notify_end_minutes_before":5,"notify_start_minutes_before":15,"owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"reroute_on_end":false,"resolve_on_end":false,"show_in_sidebar":true,"start_at":"2021-08-17T13:28:57.801578Z"},"schema":{"example":{"alert_condition_groups":[{"conditions":[{"operation":"one_of","param_bindings":[],"subject":"incident.severity"}]}],"end_at":"2021-08-17T14:28:57.801578Z","escalation_targets":[{"escalation_paths":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"users":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}}],"incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","lead":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"name":"Planned database migration","notification_message":"Scheduled downtime for database migration","notify_channels":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"notify_end_minutes_before":5,"notify_start_minutes_before":15,"owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"reroute_on_end":false,"resolve_on_end":false,"show_in_sidebar":true,"start_at":"2021-08-17T13:28:57.801578Z"},"properties":{"alert_condition_groups":{"description":"Condition groups that determine which alerts this maintenance window applies to","example":[{"conditions":[{}]}],"items":{"example":{"conditions":[{}]},"properties":{"conditions":{"description":"All conditions in this list must be satisfied for the group to be satisfied","example":[],"items":{},"type":"array"}},"required":["conditions"],"type":"object","x-ref":"#/components/schemas/ConditionGroupPayloadV2"},"type":"array","key$":"alert_condition_groups"},"end_at":{"description":"When the maintenance window should end","example":"2021-08-17T14:28:57.801578Z","format":"date-time","type":"string","key$":"end_at"},"escalation_targets":{"description":"If set, alerts matching this window will be escalated to these targets","example":[{"escalation_paths":{"array_value":[],"value":{}},"users":{"array_value":[],"value":{}}}],"items":{"example":{"escalation_paths":{"array_value":[],"value":{}},"users":{"array_value":[],"value":{}}},"properties":{"escalation_paths":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"},"users":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"}},"type":"object","x-ref":"#/components/schemas/MaintenanceWindowEscalationTargetPayloadV1"},"type":"array","key$":"escalation_targets"},"incident_id":{"description":"If set, alerts matching this window will be automatically attached to this incident","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"incident_id"},"lead":{"example":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"properties":{"email":{"description":"The user's email address, matching the email on their Slack account","example":"bob@example.com","type":"string"},"id":{"description":"The incident.io ID of a user","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"slack_user_id":{"description":"The ID of the user's Slack account.","example":"USER123","type":"string"}},"type":"object","x-ref":"#/components/schemas/UserReferencePayloadV2","key$":"lead"},"name":{"description":"Human readable name for the maintenance window","example":"Planned database migration","type":"string","key$":"name"},"notification_message":{"description":"Custom message included in notifications about this maintenance window","example":"Scheduled downtime for database migration","type":"string","key$":"notification_message"},"notify_channels":{"description":"Channels to notify about the maintenance window starting and ending","example":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"items":{"description":"A channel to receive notifications about this maintenance window","example":{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"},"properties":{"channel_id":{"description":"The external provider channel ID (e.g. Slack channel ID)","example":"C0ACTHQMHS8","type":"string"},"channel_name":{"description":"Human readable name of the channel","example":"general","type":"string"},"channel_type":{"description":"The type of channel (e.g. public, private)","example":"public","type":"string"}},"required":["channel_id","channel_type"],"type":"object","x-ref":"#/components/schemas/MaintenanceWindowNotifyChannelPayloadV1"},"type":"array","key$":"notify_channels"},"notify_end_minutes_before":{"description":"Minutes before the end to send a notification to the configured channels","example":5,"format":"int64","type":"integer","key$":"notify_end_minutes_before"},"notify_start_minutes_before":{"description":"Minutes before the start to send a notification to the configured channels","example":15,"format":"int64","type":"integer","key$":"notify_start_minutes_before"},"owning_team_ids":{"description":"IDs of teams that own this maintenance window. Omit to leave ownership unchanged, or pass an empty list to clear it.","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"},"reroute_on_end":{"description":"Whether to retrigger firing alerts through alert routing when the window ends","example":false,"type":"boolean","key$":"reroute_on_end"},"resolve_on_end":{"description":"Whether to automatically resolve all firing alerts that matched this window when it ends","example":false,"type":"boolean","key$":"resolve_on_end"},"show_in_sidebar":{"description":"Whether to show this maintenance window in the dashboard sidebar when active","example":true,"type":"boolean","key$":"show_in_sidebar"},"start_at":{"description":"When the maintenance window should start","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string","key$":"start_at"}},"required":["name","lead","start_at","end_at","alert_condition_groups","show_in_sidebar"],"type":"object","x-ref":"#/components/schemas/MaintenanceWindowsCreatePayloadV1","index$":1}}},"required":true},"parameters":[]},"GET /v1/maintenance_windows":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Number of maintenance windows to return per page","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Number of maintenance windows to return per page","example":25,"format":"int64","maximum":50,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"The ID of the last maintenance window on the previous page","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"The ID of the last maintenance window on the previous page","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter by window status: active (start_at <= now < end_at), upcoming (now < start_at), or past (end_at <= now)","example":"active","in":"query","name":"status","schema":{"description":"Filter by window status: active (start_at <= now < end_at), upcoming (now < start_at), or past (end_at <= now)","enum":["active","upcoming","past"],"example":"active","type":"string"},"index$":2}]},"GET /v1/maintenance_windows/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier of the maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier of the maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v1/maintenance_windows/{id}":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Archives the window even if it is active. This ends the window immediately. Its resolve_on_end and reroute_on_end actions do not run, so the alerts it is holding stay as they are. To run those actions, use Update to set end_at, then delete the window once it has ended.","example":true,"in":"query","name":"force","schema":{"default":false,"description":"Archives the window even if it is active. This ends the window immediately. Its resolve_on_end and reroute_on_end actions do not run, so the alerts it is holding stay as they are. To run those actions, use Update to set end_at, then delete the window once it has ended.","example":true,"type":"boolean"},"index$":0},{"description":"Unique identifier of the maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier of the maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1}]},"PUT /v1/maintenance_windows/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"alert_condition_groups":[{"conditions":[{"operation":"one_of","param_bindings":[{}],"subject":"incident.severity"}]}],"end_at":"2021-08-17T14:28:57.801578Z","escalation_targets":[{"escalation_paths":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}},"users":{"array_value":[{"literal":"SEV123","reference":"incident.severity"}],"value":{"literal":"SEV123","reference":"incident.severity"}}}],"incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","lead":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"name":"Planned database migration","notification_message":"Scheduled downtime for database migration","notify_channels":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"notify_end_minutes_before":5,"notify_start_minutes_before":15,"owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"reroute_on_end":false,"resolve_on_end":false,"show_in_sidebar":true,"start_at":"2021-08-17T13:28:57.801578Z"},"schema":{"example":{"alert_condition_groups":[{"conditions":[{"operation":"one_of","param_bindings":[],"subject":"incident.severity"}]}],"end_at":"2021-08-17T14:28:57.801578Z","escalation_targets":[{"escalation_paths":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}},"users":{"array_value":[{}],"value":{"literal":"SEV123","reference":"incident.severity"}}}],"incident_id":"01FCNDV6P870EA6S7TK1DSYDG0","lead":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"name":"Planned database migration","notification_message":"Scheduled downtime for database migration","notify_channels":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"notify_end_minutes_before":5,"notify_start_minutes_before":15,"owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"reroute_on_end":false,"resolve_on_end":false,"show_in_sidebar":true,"start_at":"2021-08-17T13:28:57.801578Z"},"properties":{"alert_condition_groups":{"description":"Condition groups that determine which alerts this maintenance window applies to","example":[{"conditions":[{}]}],"items":{"example":{"conditions":[{}]},"properties":{"conditions":{"description":"All conditions in this list must be satisfied for the group to be satisfied","example":[],"items":{},"type":"array"}},"required":["conditions"],"type":"object","x-ref":"#/components/schemas/ConditionGroupPayloadV2"},"type":"array","key$":"alert_condition_groups"},"end_at":{"description":"When the maintenance window should end","example":"2021-08-17T14:28:57.801578Z","format":"date-time","type":"string","key$":"end_at"},"escalation_targets":{"description":"If set, alerts matching this window will be escalated to these targets","example":[{"escalation_paths":{"array_value":[],"value":{}},"users":{"array_value":[],"value":{}}}],"items":{"example":{"escalation_paths":{"array_value":[],"value":{}},"users":{"array_value":[],"value":{}}},"properties":{"escalation_paths":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"},"users":{"example":{},"properties":{},"type":"object","x-ref":"#/components/schemas/EngineParamBindingPayloadV2"}},"type":"object","x-ref":"#/components/schemas/MaintenanceWindowEscalationTargetPayloadV1"},"type":"array","key$":"escalation_targets"},"incident_id":{"description":"If set, alerts matching this window will be automatically attached to this incident","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"incident_id"},"lead":{"example":{"email":"bob@example.com","id":"01G0J1EXE7AXZ2C93K61WBPYEH","slack_user_id":"USER123"},"properties":{"email":{"description":"The user's email address, matching the email on their Slack account","example":"bob@example.com","type":"string"},"id":{"description":"The incident.io ID of a user","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"slack_user_id":{"description":"The ID of the user's Slack account.","example":"USER123","type":"string"}},"type":"object","x-ref":"#/components/schemas/UserReferencePayloadV2","key$":"lead"},"name":{"description":"Human readable name for the maintenance window","example":"Planned database migration","type":"string","key$":"name"},"notification_message":{"description":"Custom message included in notifications about this maintenance window","example":"Scheduled downtime for database migration","type":"string","key$":"notification_message"},"notify_channels":{"description":"Channels to notify about the maintenance window starting and ending","example":[{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"}],"items":{"description":"A channel to receive notifications about this maintenance window","example":{"channel_id":"C0ACTHQMHS8","channel_name":"general","channel_type":"public"},"properties":{"channel_id":{"description":"The external provider channel ID (e.g. Slack channel ID)","example":"C0ACTHQMHS8","type":"string"},"channel_name":{"description":"Human readable name of the channel","example":"general","type":"string"},"channel_type":{"description":"The type of channel (e.g. public, private)","example":"public","type":"string"}},"required":["channel_id","channel_type"],"type":"object","x-ref":"#/components/schemas/MaintenanceWindowNotifyChannelPayloadV1"},"type":"array","key$":"notify_channels"},"notify_end_minutes_before":{"description":"Minutes before the end to send a notification to the configured channels","example":5,"format":"int64","type":"integer","key$":"notify_end_minutes_before"},"notify_start_minutes_before":{"description":"Minutes before the start to send a notification to the configured channels","example":15,"format":"int64","type":"integer","key$":"notify_start_minutes_before"},"owning_team_ids":{"description":"IDs of teams that own this maintenance window. Omit to leave ownership unchanged, or pass an empty list to clear it.","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"},"reroute_on_end":{"description":"Whether to retrigger firing alerts through alert routing when the window ends","example":false,"type":"boolean","key$":"reroute_on_end"},"resolve_on_end":{"description":"Whether to automatically resolve all firing alerts that matched this window when it ends","example":false,"type":"boolean","key$":"resolve_on_end"},"show_in_sidebar":{"description":"Whether to show this maintenance window in the dashboard sidebar when active","example":true,"type":"boolean","key$":"show_in_sidebar"},"start_at":{"description":"When the maintenance window should start","example":"2021-08-17T13:28:57.801578Z","format":"date-time","type":"string","key$":"start_at"}},"required":["name","lead","start_at","end_at","alert_condition_groups","show_in_sidebar"],"type":"object","x-ref":"#/components/schemas/MaintenanceWindowsUpdatePayloadV1","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier of the maintenance window","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"path","name":"id","required":true,"schema":{"description":"Unique identifier of the maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const maintenance_window_ref01_ent = client.MaintenanceWindow()
    let maintenance_window_ref01_data = setup.data.new.maintenance_window['maintenance_window_ref01']

    maintenance_window_ref01_data = (await maintenance_window_ref01_ent.create(maintenance_window_ref01_data)).data()
    assert(null != maintenance_window_ref01_data.id)


    // LIST
    const maintenance_window_ref01_match: any = {}

    const maintenance_window_ref01_list = (await maintenance_window_ref01_ent.list(maintenance_window_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(maintenance_window_ref01_list, { id: maintenance_window_ref01_data.id })))


    // UPDATE
    const maintenance_window_ref01_data_up0: any = {}
    maintenance_window_ref01_data_up0.id = maintenance_window_ref01_data.id

    const maintenance_window_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-maintenance_window_ref01_' + setup.now }
    ;(maintenance_window_ref01_data_up0 as any)[maintenance_window_ref01_markdef_up0.name] = maintenance_window_ref01_markdef_up0.value

    const maintenance_window_ref01_resdata_up0 = (await maintenance_window_ref01_ent.update(maintenance_window_ref01_data_up0)).data()
    assert(maintenance_window_ref01_resdata_up0.id === maintenance_window_ref01_data_up0.id)

    assert((maintenance_window_ref01_resdata_up0 as any)[maintenance_window_ref01_markdef_up0.name] === maintenance_window_ref01_markdef_up0.value)


    // LOAD
    const maintenance_window_ref01_match_dt0: any = {}
    maintenance_window_ref01_match_dt0.id = maintenance_window_ref01_data.id
    const maintenance_window_ref01_data_dt0 = (await maintenance_window_ref01_ent.load(maintenance_window_ref01_match_dt0)).data()
    assert(maintenance_window_ref01_data_dt0.id === maintenance_window_ref01_data.id)


    // REMOVE
    const maintenance_window_ref01_match_rm0: any = { id: maintenance_window_ref01_data.id }
    await maintenance_window_ref01_ent.remove(maintenance_window_ref01_match_rm0)
  

    // LIST
    const maintenance_window_ref01_match_rt0: any = {}

    const maintenance_window_ref01_list_rt0 = (await maintenance_window_ref01_ent.list(maintenance_window_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(maintenance_window_ref01_list_rt0, { id: maintenance_window_ref01_data.id })))


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
      '../../../../.sdk/test/entity/maintenance_window/MaintenanceWindowTestData.json')

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
    ['maintenance_window01','maintenance_window02','maintenance_window03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_MAINTENANCE_WINDOW_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_MAINTENANCE_WINDOW_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_MAINTENANCE_WINDOW_ENTID']
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
  

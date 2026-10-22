

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


describe('StatusPageMaintenanceUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.StatusPageMaintenanceUpdate()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatusPageMaintenanceUpdate().create({"maintenance_status":1,"message":"x","notify_subscribers":true,"status_page_maintenance_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'status_page_maintenance_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"component_statuses":{"a":true,"h":"Component Statuses","n":"component_statuses","r":false,"sh":"An array of mappings from component ID to component status.","t":"`$ARRAY`","key$":"component_statuses","index$":0},"maintenance_status":{"a":true,"h":"Maintenance Status","n":"maintenance_status","r":false,"sh":"Optional new status for this status page maintenance window.","t":"`$STRING`","key$":"maintenance_status","index$":1},"message":{"a":true,"h":"Message","n":"message","r":true,"sh":"Markdown update on what's changed about this status page maintenance window","t":"`$STRING`","key$":"message","index$":2},"notify_subscribers":{"a":true,"h":"Notify Subscribers","n":"notify_subscribers","r":true,"sh":"Whether to notify subscribers about this status page maintenance update.","t":"`$BOOLEAN`","key$":"notify_subscribers","index$":3},"status_page_maintenance_id":{"a":true,"h":"Status Page Maintenance Id","n":"status_page_maintenance_id","r":true,"sh":"ID of the status page maintenance window","t":"`$STRING`","key$":"status_page_maintenance_id","index$":4}},"name":"status_page_maintenance_update","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["component_statuses","maintenance_status","message","notify_subscribers","status_page_maintenance_id"],"co":{"id":"POST /v2/status_page_maintenance_updates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/status_page_maintenance_updates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_page_maintenance_updates"}],"t":{"req":"`reqdata`","res":"`body.status_page_maintenance_update`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"status_page_maintenance_update","name__orig":"status_page_maintenance_update","Name":"StatusPageMaintenanceUpdate","name_":"status_page_maintenance_update","name-":"status-page-maintenance-update","NAME":"STATUS_PAGE_MAINTENANCE_UPDATE","index$":95}, {"active":true,"entity":"status_page_maintenance_update","key$":"BasicStatusPageMaintenanceUpdateFlow","kind":"basic","name":"BasicStatusPageMaintenanceUpdateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"status_page_maintenance_update_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'StatusPageMaintenanceUpdate', {"POST /v2/status_page_maintenance_updates":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"component_statuses":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"maintenance_status":"maintenance_scheduled","message":"Scheduled maintenance is underway for our database infrastructure. Some services may experience brief interruptions during this window.","notify_subscribers":true,"status_page_maintenance_id":"01FCNDV6P870EA6S7TK1DSYDG1"},"schema":{"example":{"component_statuses":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"maintenance_status":"maintenance_scheduled","message":"Scheduled maintenance is underway for our database infrastructure. Some services may experience brief interruptions during this window.","notify_subscribers":true,"status_page_maintenance_id":"01FCNDV6P870EA6S7TK1DSYDG1"},"properties":{"component_statuses":{"description":"An array of mappings from component ID to component status. This must not be set if the status page maintenance window status is being set to \"maintenance_complete\", as all components statuses will update to \"operational\".","example":[{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"}],"items":{"example":{"component_id":"01FCNDV6P870EA6S7TK1DSYDG2","component_status":"operational"},"properties":{"component_id":{"description":"The ID of the affected component. This may be found by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG2","type":"string"},"component_status":{"description":"The status of the relevant component in a status page maintenance window","enum":[],"example":"operational","type":"string","x-public-api-version":"v2"}},"required":["component_id","component_status"],"type":"object","x-ref":"#/components/schemas/StatusPageMaintenanceAffectedComponentV2"},"type":"array","key$":"component_statuses"},"maintenance_status":{"description":"Optional new status for this status page maintenance window. If not provided, the status will remain unchanged. Setting to \"maintenance_complete\" will end the maintenance window and all component statuses will update to \"operational\".","enum":["maintenance_scheduled","maintenance_in_progress","maintenance_complete"],"example":"maintenance_scheduled","type":"string","key$":"maintenance_status"},"message":{"description":"Markdown update on what's changed about this status page maintenance window","example":"Scheduled maintenance is underway for our database infrastructure. Some services may experience brief interruptions during this window.","maxLength":4096,"type":"string","key$":"message"},"notify_subscribers":{"description":"Whether to notify subscribers about this status page maintenance update. If your status page has more than 1000 subscribers, requests that set this to true are rejected. This limit applies only to the public API: publishing from the incident.io dashboard or Slack always notifies every subscriber.","example":true,"type":"boolean","key$":"notify_subscribers"},"status_page_maintenance_id":{"description":"ID of the status page maintenance window","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string","key$":"status_page_maintenance_id"}},"required":["status_page_maintenance_id","message","notify_subscribers"],"type":"object","x-ref":"#/components/schemas/StatusPagesCreateStatusPageMaintenanceUpdatePayloadV2","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const status_page_maintenance_update_ref01_ent = client.StatusPageMaintenanceUpdate()
    let status_page_maintenance_update_ref01_data = setup.data.new.status_page_maintenance_update['status_page_maintenance_update_ref01']

    status_page_maintenance_update_ref01_data = (await status_page_maintenance_update_ref01_ent.create(status_page_maintenance_update_ref01_data)).data()
    assert(null != status_page_maintenance_update_ref01_data)


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
      '../../../../.sdk/test/entity/status_page_maintenance_update/StatusPageMaintenanceUpdateTestData.json')

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
    ['status_page_maintenance_update01','status_page_maintenance_update02','status_page_maintenance_update03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_UPDATE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_UPDATE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_UPDATE_ENTID']
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
  

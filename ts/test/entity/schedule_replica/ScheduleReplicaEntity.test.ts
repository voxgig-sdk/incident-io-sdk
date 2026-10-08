

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


describe('ScheduleReplicaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleReplica()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleReplica().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_replica.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this schedule replica was first created","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the schedule replica","t":"`$STRING`","key$":"id","index$":1},"last_sync_error":{"a":true,"h":"Last Sync Error","n":"last_sync_error","r":false,"sh":"The most recent error encountered while syncing this replica to the external provider, if any.","t":"`$STRING`","key$":"last_sync_error","index$":2},"last_synced_at":{"a":true,"fo":"date-time","h":"Last Synced At","n":"last_synced_at","r":false,"sh":"When the replica was last successfully synced to the external provider.","t":"`$STRING`","key$":"last_synced_at","index$":3},"mirror_window_days":{"a":true,"fo":"int64","h":"Mirror Window Days","n":"mirror_window_days","r":false,"sh":"How many days ahead to mirror this schedule into the external provider.","t":"`$INTEGER`","key$":"mirror_window_days","index$":4},"replica_fallback_user_id":{"a":true,"h":"Replica Fallback User Id","n":"replica_fallback_user_id","r":true,"sh":"The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule.","t":"`$STRING`","key$":"replica_fallback_user_id","index$":5},"replica_provider":{"a":true,"h":"Replica Provider","n":"replica_provider","r":true,"sh":"The external provider where this schedule is replicated to","t":"`$STRING`","key$":"replica_provider","index$":6},"replica_provider_id":{"a":true,"h":"Replica Provider Id","n":"replica_provider_id","r":true,"sh":"The ID of the schedule in the external provider that this replica syncs to.","t":"`$STRING`","key$":"replica_provider_id","index$":7},"schedule_id":{"a":true,"h":"Schedule Id","n":"schedule_id","r":true,"sh":"The ID of the incident.io schedule that this replica is syncing from","t":"`$STRING`","key$":"schedule_id","index$":8},"sources":{"a":true,"h":"Sources","n":"sources","r":true,"sh":"The specific rotation and layer combinations from the schedule that are being replicated.","t":"`$ARRAY`","key$":"sources","index$":9},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this schedule replica was last updated","t":"`$STRING`","key$":"updated_at","index$":10},"user_statuses":{"a":true,"h":"User Statuses","n":"user_statuses","r":true,"sh":"The mapping status of each incident.io user in the schedule to their corresponding user in the external provider.","t":"`$ARRAY`","key$":"user_statuses","index$":11}},"id":{"field":"id","name":"id"},"name":"schedule_replica","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["mirror_window_days","replica_fallback_user_id","replica_provider","replica_provider_id","sources"],"co":{"id":"POST /v2/schedules/{schedule_id}/replicas","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"schedule_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/schedules/{schedule_id}/replicas","q":{"exist":["id"]},"r":{"param":{"schedule_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"id"},{"lit":"replicas"}],"t":{"req":{"schedule_replica":"`reqdata`"},"res":"`body.schedule_replica`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/schedules/{schedule_id}/replicas","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"schedule_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/schedules/{schedule_id}/replicas","q":{"exist":["id"]},"r":{"param":{"schedule_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"id"},{"lit":"replicas"}],"t":{"req":"`reqdata`","res":"`body.schedule_replicas`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/schedules/{schedule_id}/replicas/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"schedule_id","or":"schedule_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/schedules/{schedule_id}/replicas/{id}","q":{"exist":["id","schedule_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"schedule_id"},{"lit":"replicas"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.schedule_replica`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.schedule"]]},"key$":"schedule_replica","name__orig":"schedule_replica","Name":"ScheduleReplica","name_":"schedule_replica","name-":"schedule-replica","NAME":"SCHEDULE_REPLICA","index$":87}, {"active":true,"entity":"schedule_replica","key$":"BasicScheduleReplicaFlow","kind":"basic","name":"BasicScheduleReplicaFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"schedule_replica_ref01"},"m":{"schedule_id":"schedule01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":false,"d":{},"i":{},"m":{"schedule_id":"schedule01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"schedule_replica_ref01"}}],"unreachable":true},{"a":true,"d":{},"i":{"ref":"schedule_replica_ref01","srcdatavar":"schedule_replica_ref01_data","suffix":"_dt0"},"m":{"id":"schedule_replica01","schedule_id":"schedule01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-schedule_replica_ref01"}}],"index$":0}]}, 'ScheduleReplica', {"POST /v2/schedules/{schedule_id}/replicas":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"schedule_replica":{"mirror_window_days":14,"replica_fallback_user_id":"PA7AXXN","replica_provider":"pagerduty","replica_provider_id":"PO8107X","sources":[{"layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH"}]}},"schema":{"example":{"schedule_replica":{"mirror_window_days":14,"replica_fallback_user_id":"PA7AXXN","replica_provider":"pagerduty","replica_provider_id":"PO8107X","sources":[{"layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH"}]}},"properties":{"schedule_replica":{"example":{"mirror_window_days":14,"replica_fallback_user_id":"PA7AXXN","replica_provider":"pagerduty","replica_provider_id":"PO8107X","sources":[{"layer_id":"01G0J1EXE7AXZ2C93K61WBPYNH","rotation_id":"01G0J1EXE7AXZ2C93K61WBPYEH"}]},"properties":{"mirror_window_days":{"description":"How many days ahead to mirror this schedule into the external provider. Defaults to 14 if not set; maximum 90.","example":14,"format":"int64","maximum":90,"minimum":1,"type":"integer","key$":"mirror_window_days"},"replica_fallback_user_id":{"description":"The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. External providers typically require someone to always be on-call, so this user fills gaps where incident.io has no one scheduled.","example":"PA7AXXN","type":"string","key$":"replica_fallback_user_id"},"replica_provider":{"description":"The external provider where this schedule is replicated to","enum":["native","pagerduty","opsgenie","jsm"],"example":"pagerduty","type":"string","key$":"replica_provider"},"replica_provider_id":{"description":"The ID of the schedule in the external provider that this replica syncs to. For PagerDuty this is the schedule ID (e.g. PO8107X), for Opsgenie the schedule ID, and for Jira Service Management the schedule ID.","example":"PO8107X","type":"string","key$":"replica_provider_id"},"sources":{"description":"The specific rotation and layer combinations from the schedule to replicate. Each source identifies a single layer within a rotation to sync to the external provider.","example":[{}],"items":{"example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/ScheduleReplicaSourceV2"},"type":"array","key$":"sources"}},"required":["sources","replica_provider","replica_provider_id","replica_fallback_user_id"],"type":"object","x-ref":"#/components/schemas/ScheduleReplicaCreatePayloadV2","index$":1}},"required":["schedule_replica"],"type":"object","x-ref":"#/components/schemas/SchedulesCreateScheduleReplicaPayloadV2"}}},"required":true},"parameters":[{"description":"The schedule to create a replica for","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The schedule to create a replica for","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"GET /v2/schedules/{schedule_id}/replicas":{"protocol":"http","parameters":[{"description":"The schedule to list replicas for","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The schedule to list replicas for","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"GET /v2/schedules/{schedule_id}/replicas/{id}":{"protocol":"http","parameters":[{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"schedule_id","required":true,"schema":{"description":"The parent schedule ID","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0},{"description":"The replica ID to show","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"The replica ID to show","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let schedule_replica_ref01_data = Object.values(setup.data.existing.schedule_replica)[0] as any

    // LOAD
    const schedule_replica_ref01_ent = client.ScheduleReplica()
    const schedule_replica_ref01_match_dt0: any = {}
    schedule_replica_ref01_match_dt0.id = schedule_replica_ref01_data.id
    const schedule_replica_ref01_data_dt0 = (await schedule_replica_ref01_ent.load(schedule_replica_ref01_match_dt0)).data()
    assert(schedule_replica_ref01_data_dt0.id === schedule_replica_ref01_data.id)


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
      '../../../../.sdk/test/entity/schedule_replica/ScheduleReplicaTestData.json')

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
    ['schedule_replica01','schedule_replica02','schedule_replica03','schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_REPLICA_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_REPLICA_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_REPLICA_ENTID']
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
  

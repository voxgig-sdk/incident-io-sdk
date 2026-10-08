

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


describe('ScheduleEntriesListPayloadV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleEntriesListPayloadV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ScheduleEntriesListPayloadV2().create({"schedule_id":1,"final":"x","overrides":"x","schedule":"x","scheduled":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'schedule_entries_list_payload_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"entry_window_end":{"a":true,"fo":"date-time","h":"Entry Window End","n":"entry_window_end","r":false,"sh":"The end of the window to preview entries for.","t":"`$STRING`","key$":"entry_window_end","index$":0},"entry_window_start":{"a":true,"fo":"date-time","h":"Entry Window Start","n":"entry_window_start","r":false,"sh":"The start of the window to preview entries for.","t":"`$STRING`","key$":"entry_window_start","index$":1},"final":{"a":true,"h":"Final","n":"final","r":true,"sh":"The effective schedule after overrides have been merged in","t":"`$ARRAY`","key$":"final","index$":2},"overrides":{"a":true,"h":"Overrides","n":"overrides","r":true,"sh":"Overrides that apply within the requested window","t":"`$ARRAY`","key$":"overrides","index$":3},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":true,"t":"`$OBJECT`","key$":"schedule","index$":4},"scheduled":{"a":true,"h":"Scheduled","n":"scheduled","r":true,"sh":"Entries from the schedule's rotation rules, before overrides are applied","t":"`$ARRAY`","key$":"scheduled","index$":5}},"name":"schedule_entries_list_payload_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["entry_window_end","entry_window_start","schedule"],"co":{"id":"POST /v2/schedules/{id}/actions/preview_entries","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"schedule_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/schedules/{id}/actions/preview_entries","q":{"exist":["schedule_id"]},"r":{"param":{"id":"schedule_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"schedules"},{"var":"schedule_id"},{"lit":"actions"},{"lit":"preview_entries"}],"t":{"req":"`reqdata`","res":"`body.schedule_entries`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.schedule"]]},"key$":"schedule_entries_list_payload_v2","name__orig":"schedule_entries_list_payload_v2","Name":"ScheduleEntriesListPayloadV2","name_":"schedule_entries_list_payload_v2","name-":"schedule-entries-list-payload-v2","NAME":"SCHEDULE_ENTRIES_LIST_PAYLOAD_V2","index$":85}, {"active":true,"entity":"schedule_entries_list_payload_v2","key$":"BasicScheduleEntriesListPayloadV2Flow","kind":"basic","name":"BasicScheduleEntriesListPayloadV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"schedule_entries_list_payload_v2_ref01"},"m":{"schedule_id":"schedule01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ScheduleEntriesListPayloadV2', {"POST /v2/schedules/{id}/actions/preview_entries":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"entry_window_end":"2021-01-08T00:00:00Z","entry_window_start":"2021-01-01T00:00:00Z","schedule":{"annotations":{"incident.io/terraform/version":"version-of-terraform"},"config":{"rotations":[{"effective_from":"2021-08-17T13:28:57.801578Z","handover_start_at":"2021-08-17T13:28:57.801578Z","handovers":[{}],"id":"01G0J1EXE7AXZ2C93K61WBPYEH","layers":[{}],"name":"My Rotation","scheduling_mode":"fair","users":[{}],"working_interval":[{}],"working_intervals":[{}]}]},"holidays_public_config":{"country_codes":["abc123"]},"name":"Primary On-call Schedule","team_ids":["01JPQA75EPNEES4479P16P4XAB"],"timezone":"America/Los_Angeles"}},"schema":{"example":{"entry_window_end":"2021-01-08T00:00:00Z","entry_window_start":"2021-01-01T00:00:00Z","schedule":{"annotations":{"incident.io/terraform/version":"version-of-terraform"},"config":{"rotations":[{"effective_from":"2021-08-17T13:28:57.801578Z","handover_start_at":"2021-08-17T13:28:57.801578Z","handovers":[],"id":"01G0J1EXE7AXZ2C93K61WBPYEH","layers":[],"name":"My Rotation","scheduling_mode":"fair","users":[],"working_interval":[],"working_intervals":[]}]},"holidays_public_config":{"country_codes":["abc123"]},"name":"Primary On-call Schedule","team_ids":["01JPQA75EPNEES4479P16P4XAB"],"timezone":"America/Los_Angeles"}},"properties":{"entry_window_end":{"description":"The end of the window to preview entries for. Defaults to four weeks after entry_window_start.","example":"2021-01-08T00:00:00Z","format":"date-time","type":"string","key$":"entry_window_end"},"entry_window_start":{"description":"The start of the window to preview entries for. Defaults to now.","example":"2021-01-01T00:00:00Z","format":"date-time","type":"string","key$":"entry_window_start"},"schedule":{"example":{"annotations":{"incident.io/terraform/version":"version-of-terraform"},"config":{"rotations":[{}]},"holidays_public_config":{"country_codes":["abc123"]},"name":"Primary On-call Schedule","team_ids":["01JPQA75EPNEES4479P16P4XAB"],"timezone":"America/Los_Angeles"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that can track metadata about the schedule","example":{"incident.io/terraform/version":"version-of-terraform"},"type":"object","key$":"annotations"},"config":{"example":{"rotations":[]},"properties":{"rotations":{}},"type":"object","x-ref":"#/components/schemas/ScheduleConfigUpdatePayloadV2","key$":"config"},"holidays_public_config":{"example":{"country_codes":[]},"properties":{"country_codes":{}},"required":["country_codes"],"type":"object","x-ref":"#/components/schemas/ScheduleHolidaysPublicConfigPayloadV2","key$":"holidays_public_config"},"name":{"description":"Name of the schedule","example":"Primary On-call Schedule","type":"string","key$":"name"},"team_ids":{"description":"IDs of teams that own this schedule","example":["01JPQA75EPNEES4479P16P4XAB"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"team_ids"},"timezone":{"description":"Timezone of the schedule","example":"America/Los_Angeles","type":"string","key$":"timezone"}},"type":"object","x-ref":"#/components/schemas/ScheduleUpdatePayloadV2","key$":"schedule"}},"required":["schedule"],"type":"object","x-ref":"#/components/schemas/SchedulesPreviewScheduleEntriesPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The ID of the schedule to preview entries for.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"The ID of the schedule to preview entries for.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_entries_list_payload_v2_ref01_ent = client.ScheduleEntriesListPayloadV2()
    let schedule_entries_list_payload_v2_ref01_data = setup.data.new.schedule_entries_list_payload_v2['schedule_entries_list_payload_v2_ref01']
    schedule_entries_list_payload_v2_ref01_data['schedule_id'] = setup.idmap['schedule01']

    schedule_entries_list_payload_v2_ref01_data = (await schedule_entries_list_payload_v2_ref01_ent.create(schedule_entries_list_payload_v2_ref01_data)).data()
    assert(null != schedule_entries_list_payload_v2_ref01_data)


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
      '../../../../.sdk/test/entity/schedule_entries_list_payload_v2/ScheduleEntriesListPayloadV2TestData.json')

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
    ['schedule_entries_list_payload_v201','schedule_entries_list_payload_v202','schedule_entries_list_payload_v203','schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID']
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
  

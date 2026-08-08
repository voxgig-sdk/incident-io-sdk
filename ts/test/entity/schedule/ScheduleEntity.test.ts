
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { IncidentIoSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('ScheduleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENTIO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENTIO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Schedule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'schedule.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set INCIDENT_IO_TEST_SCHEDULE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_ref01_ent = client.Schedule()
    let schedule_ref01_data = setup.data.new.schedule['schedule_ref01']

    schedule_ref01_data = await schedule_ref01_ent.create(schedule_ref01_data)
    assert(null != schedule_ref01_data.id)


    // LIST
    const schedule_ref01_match: any = {}

    const schedule_ref01_list = await schedule_ref01_ent.list(schedule_ref01_match)

    assert(!isempty(select(schedule_ref01_list, { id: schedule_ref01_data.id })))


    // UPDATE
    const schedule_ref01_data_up0: any = {}
    schedule_ref01_data_up0.id = schedule_ref01_data.id

    const schedule_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_ref01_' + setup.now }
    ;(schedule_ref01_data_up0 as any)[schedule_ref01_markdef_up0.name] = schedule_ref01_markdef_up0.value

    const schedule_ref01_resdata_up0 = await schedule_ref01_ent.update(schedule_ref01_data_up0)
    assert(schedule_ref01_resdata_up0.id === schedule_ref01_data_up0.id)

    assert((schedule_ref01_resdata_up0 as any)[schedule_ref01_markdef_up0.name] === schedule_ref01_markdef_up0.value)


    // LOAD
    const schedule_ref01_match_dt0: any = {}
    schedule_ref01_match_dt0.id = schedule_ref01_data.id
    const schedule_ref01_data_dt0 = await schedule_ref01_ent.load(schedule_ref01_match_dt0)
    assert(schedule_ref01_data_dt0.id === schedule_ref01_data.id)


    // REMOVE
    const schedule_ref01_match_rm0: any = { id: schedule_ref01_data.id }
    await schedule_ref01_ent.remove(schedule_ref01_match_rm0)
  

    // LIST
    const schedule_ref01_match_rt0: any = {}

    const schedule_ref01_list_rt0 = await schedule_ref01_ent.list(schedule_ref01_match_rt0)

    assert(isempty(select(schedule_ref01_list_rt0, { id: schedule_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/schedule/ScheduleTestData.json')

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
    ['schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['INCIDENT_IO_TEST_SCHEDULE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  if (live) {
    client = new IncidentIoSDK(merge([
      {
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  

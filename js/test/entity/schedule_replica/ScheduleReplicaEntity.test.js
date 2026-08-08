
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { IncidentIoSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ScheduleReplicaEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleReplica()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_replica_ref01_ent = client.ScheduleReplica()
    let schedule_replica_ref01_data = setup.data.new.schedule_replica['schedule_replica_ref01']
    schedule_replica_ref01_data['schedule_id'] = setup.idmap['schedule01']

    schedule_replica_ref01_data = await schedule_replica_ref01_ent.create(schedule_replica_ref01_data)
    assert(null != schedule_replica_ref01_data.id)


    // LIST
    const schedule_replica_ref01_match = {}
    schedule_replica_ref01_match['schedule_id'] = setup.idmap['schedule01']

    const schedule_replica_ref01_list = await schedule_replica_ref01_ent.list(schedule_replica_ref01_match)

    assert(!isempty(select(schedule_replica_ref01_list, { id: schedule_replica_ref01_data.id })))


    // LOAD
    const schedule_replica_ref01_match_dt0 = {}
    schedule_replica_ref01_match_dt0.id = schedule_replica_ref01_data.id
    const schedule_replica_ref01_data_dt0 = await schedule_replica_ref01_ent.load(schedule_replica_ref01_match_dt0)
    assert(schedule_replica_ref01_data_dt0.id === schedule_replica_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_REPLICA_ENTID']

  if ('TRUE' === env.INCIDENT_IO_TEST_LIVE) {
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
    now: Date.now(),
  }

  return setup
}
  

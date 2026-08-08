
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


describe('ScheduleEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Schedule()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const schedule_ref01_match = {}

    const schedule_ref01_list = await schedule_ref01_ent.list(schedule_ref01_match)

    assert(!isempty(select(schedule_ref01_list, { id: schedule_ref01_data.id })))


    // UPDATE
    const schedule_ref01_data_up0 = {}
    schedule_ref01_data_up0.id = schedule_ref01_data.id

    const schedule_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_ref01_' + setup.now }
    schedule_ref01_data_up0 [schedule_ref01_markdef_up0.name] = schedule_ref01_markdef_up0.value

    const schedule_ref01_resdata_up0 = await schedule_ref01_ent.update(schedule_ref01_data_up0)
    assert(schedule_ref01_resdata_up0.id === schedule_ref01_data_up0.id)

    assert(schedule_ref01_resdata_up0[schedule_ref01_markdef_up0.name] === schedule_ref01_markdef_up0.value)


    // LOAD
    const schedule_ref01_match_dt0 = {}
    schedule_ref01_match_dt0.id = schedule_ref01_data.id
    const schedule_ref01_data_dt0 = await schedule_ref01_ent.load(schedule_ref01_match_dt0)
    assert(schedule_ref01_data_dt0.id === schedule_ref01_data.id)


    // REMOVE
    const schedule_ref01_match_rm0 = {}
    schedule_ref01_match_rm0.id = schedule_ref01_data.id
    await schedule_ref01_ent.remove(schedule_ref01_match_rm0)
  

    // LIST
    const schedule_ref01_match_rt0 = {}

    const schedule_ref01_list_rt0 = await schedule_ref01_ent.list(schedule_ref01_match_rt0)

    assert(isempty(select(schedule_ref01_list_rt0, { id: schedule_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_ENTID']

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
  

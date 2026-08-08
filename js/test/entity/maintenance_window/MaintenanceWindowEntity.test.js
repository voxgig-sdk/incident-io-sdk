
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


describe('MaintenanceWindowEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.MaintenanceWindow()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const maintenance_window_ref01_ent = client.MaintenanceWindow()
    let maintenance_window_ref01_data = setup.data.new.maintenance_window['maintenance_window_ref01']

    maintenance_window_ref01_data = await maintenance_window_ref01_ent.create(maintenance_window_ref01_data)
    assert(null != maintenance_window_ref01_data.id)


    // LIST
    const maintenance_window_ref01_match = {}

    const maintenance_window_ref01_list = await maintenance_window_ref01_ent.list(maintenance_window_ref01_match)

    assert(!isempty(select(maintenance_window_ref01_list, { id: maintenance_window_ref01_data.id })))


    // UPDATE
    const maintenance_window_ref01_data_up0 = {}
    maintenance_window_ref01_data_up0.id = maintenance_window_ref01_data.id

    const maintenance_window_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-maintenance_window_ref01_' + setup.now }
    maintenance_window_ref01_data_up0 [maintenance_window_ref01_markdef_up0.name] = maintenance_window_ref01_markdef_up0.value

    const maintenance_window_ref01_resdata_up0 = await maintenance_window_ref01_ent.update(maintenance_window_ref01_data_up0)
    assert(maintenance_window_ref01_resdata_up0.id === maintenance_window_ref01_data_up0.id)

    assert(maintenance_window_ref01_resdata_up0[maintenance_window_ref01_markdef_up0.name] === maintenance_window_ref01_markdef_up0.value)


    // LOAD
    const maintenance_window_ref01_match_dt0 = {}
    maintenance_window_ref01_match_dt0.id = maintenance_window_ref01_data.id
    const maintenance_window_ref01_data_dt0 = await maintenance_window_ref01_ent.load(maintenance_window_ref01_match_dt0)
    assert(maintenance_window_ref01_data_dt0.id === maintenance_window_ref01_data.id)


    // REMOVE
    const maintenance_window_ref01_match_rm0 = {}
    maintenance_window_ref01_match_rm0.id = maintenance_window_ref01_data.id
    await maintenance_window_ref01_ent.remove(maintenance_window_ref01_match_rm0)
  

    // LIST
    const maintenance_window_ref01_match_rt0 = {}

    const maintenance_window_ref01_list_rt0 = await maintenance_window_ref01_ent.list(maintenance_window_ref01_match_rt0)

    assert(isempty(select(maintenance_window_ref01_list_rt0, { id: maintenance_window_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
  })

  idmap = env['INCIDENT_IO_TEST_MAINTENANCE_WINDOW_ENTID']

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
  

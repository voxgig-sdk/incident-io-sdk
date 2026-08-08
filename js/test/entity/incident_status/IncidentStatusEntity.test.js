
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


describe('IncidentStatusEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentStatus()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_status_ref01_ent = client.IncidentStatus()
    let incident_status_ref01_data = setup.data.new.incident_status['incident_status_ref01']

    incident_status_ref01_data = await incident_status_ref01_ent.create(incident_status_ref01_data)
    assert(null != incident_status_ref01_data.id)


    // LIST
    const incident_status_ref01_match = {}

    const incident_status_ref01_list = await incident_status_ref01_ent.list(incident_status_ref01_match)

    assert(!isempty(select(incident_status_ref01_list, { id: incident_status_ref01_data.id })))


    // UPDATE
    const incident_status_ref01_data_up0 = {}
    incident_status_ref01_data_up0.id = incident_status_ref01_data.id

    const incident_status_ref01_markdef_up0 = { name: 'category', value: 'Mark01-incident_status_ref01_' + setup.now }
    incident_status_ref01_data_up0 [incident_status_ref01_markdef_up0.name] = incident_status_ref01_markdef_up0.value

    const incident_status_ref01_resdata_up0 = await incident_status_ref01_ent.update(incident_status_ref01_data_up0)
    assert(incident_status_ref01_resdata_up0.id === incident_status_ref01_data_up0.id)

    assert(incident_status_ref01_resdata_up0[incident_status_ref01_markdef_up0.name] === incident_status_ref01_markdef_up0.value)


    // LOAD
    const incident_status_ref01_match_dt0 = {}
    incident_status_ref01_match_dt0.id = incident_status_ref01_data.id
    const incident_status_ref01_data_dt0 = await incident_status_ref01_ent.load(incident_status_ref01_match_dt0)
    assert(incident_status_ref01_data_dt0.id === incident_status_ref01_data.id)


    // REMOVE
    const incident_status_ref01_match_rm0 = {}
    incident_status_ref01_match_rm0.id = incident_status_ref01_data.id
    await incident_status_ref01_ent.remove(incident_status_ref01_match_rm0)
  

    // LIST
    const incident_status_ref01_match_rt0 = {}

    const incident_status_ref01_list_rt0 = await incident_status_ref01_ent.list(incident_status_ref01_match_rt0)

    assert(isempty(select(incident_status_ref01_list_rt0, { id: incident_status_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/incident_status/IncidentStatusTestData.json')

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
    ['incident_status01','incident_status02','incident_status03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_STATUS_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_STATUS_ENTID']

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
  

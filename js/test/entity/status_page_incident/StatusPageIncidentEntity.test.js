
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


describe('StatusPageIncidentEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.StatusPageIncident()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const status_page_incident_ref01_ent = client.StatusPageIncident()
    let status_page_incident_ref01_data = setup.data.new.status_page_incident['status_page_incident_ref01']

    status_page_incident_ref01_data = await status_page_incident_ref01_ent.create(status_page_incident_ref01_data)
    assert(null != status_page_incident_ref01_data.id)


    // LIST
    const status_page_incident_ref01_match = {}

    const status_page_incident_ref01_list = await status_page_incident_ref01_ent.list(status_page_incident_ref01_match)

    assert(!isempty(select(status_page_incident_ref01_list, { id: status_page_incident_ref01_data.id })))


    // UPDATE
    const status_page_incident_ref01_data_up0 = {}
    status_page_incident_ref01_data_up0.id = status_page_incident_ref01_data.id

    const status_page_incident_ref01_markdef_up0 = { name: 'idempotency_key', value: 'Mark01-status_page_incident_ref01_' + setup.now }
    status_page_incident_ref01_data_up0 [status_page_incident_ref01_markdef_up0.name] = status_page_incident_ref01_markdef_up0.value

    const status_page_incident_ref01_resdata_up0 = await status_page_incident_ref01_ent.update(status_page_incident_ref01_data_up0)
    assert(status_page_incident_ref01_resdata_up0.id === status_page_incident_ref01_data_up0.id)

    assert(status_page_incident_ref01_resdata_up0[status_page_incident_ref01_markdef_up0.name] === status_page_incident_ref01_markdef_up0.value)


    // LOAD
    const status_page_incident_ref01_match_dt0 = {}
    status_page_incident_ref01_match_dt0.id = status_page_incident_ref01_data.id
    const status_page_incident_ref01_data_dt0 = await status_page_incident_ref01_ent.load(status_page_incident_ref01_match_dt0)
    assert(status_page_incident_ref01_data_dt0.id === status_page_incident_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/status_page_incident/StatusPageIncidentTestData.json')

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
    ['status_page_incident01','status_page_incident02','status_page_incident03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_ENTID']

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
  

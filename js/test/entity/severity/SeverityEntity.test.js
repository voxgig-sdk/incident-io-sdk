
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


describe('SeverityEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Severity()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const severity_ref01_ent = client.Severity()
    let severity_ref01_data = setup.data.new.severity['severity_ref01']

    severity_ref01_data = await severity_ref01_ent.create(severity_ref01_data)
    assert(null != severity_ref01_data.id)


    // LIST
    const severity_ref01_match = {}

    const severity_ref01_list = await severity_ref01_ent.list(severity_ref01_match)

    assert(!isempty(select(severity_ref01_list, { id: severity_ref01_data.id })))


    // UPDATE
    const severity_ref01_data_up0 = {}
    severity_ref01_data_up0.id = severity_ref01_data.id

    const severity_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-severity_ref01_' + setup.now }
    severity_ref01_data_up0 [severity_ref01_markdef_up0.name] = severity_ref01_markdef_up0.value

    const severity_ref01_resdata_up0 = await severity_ref01_ent.update(severity_ref01_data_up0)
    assert(severity_ref01_resdata_up0.id === severity_ref01_data_up0.id)

    assert(severity_ref01_resdata_up0[severity_ref01_markdef_up0.name] === severity_ref01_markdef_up0.value)


    // LOAD
    const severity_ref01_match_dt0 = {}
    severity_ref01_match_dt0.id = severity_ref01_data.id
    const severity_ref01_data_dt0 = await severity_ref01_ent.load(severity_ref01_match_dt0)
    assert(severity_ref01_data_dt0.id === severity_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/severity/SeverityTestData.json')

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
    ['severity01','severity02','severity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SEVERITY_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_SEVERITY_ENTID']

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
  

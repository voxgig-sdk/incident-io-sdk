
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


describe('TelemetryDataSourceEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.TelemetryDataSource()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let telemetry_data_source_ref01_data = Object.values(setup.data.existing.telemetry_data_source)[0]

    // UPDATE
    const telemetry_data_source_ref01_ent = client.TelemetryDataSource()
    const telemetry_data_source_ref01_data_up0 = {}
    telemetry_data_source_ref01_data_up0.id = telemetry_data_source_ref01_data.id

    const telemetry_data_source_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-telemetry_data_source_ref01_' + setup.now }
    telemetry_data_source_ref01_data_up0 [telemetry_data_source_ref01_markdef_up0.name] = telemetry_data_source_ref01_markdef_up0.value

    const telemetry_data_source_ref01_resdata_up0 = await telemetry_data_source_ref01_ent.update(telemetry_data_source_ref01_data_up0)
    assert(telemetry_data_source_ref01_resdata_up0.id === telemetry_data_source_ref01_data_up0.id)

    assert(telemetry_data_source_ref01_resdata_up0[telemetry_data_source_ref01_markdef_up0.name] === telemetry_data_source_ref01_markdef_up0.value)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/telemetry_data_source/TelemetryDataSourceTestData.json')

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
    ['telemetry_data_source01','telemetry_data_source02','telemetry_data_source03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID']

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
  


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


describe('IpAllowlistEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IpAllowlist()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ip_allowlist_ref01_data = Object.values(setup.data.existing.ip_allowlist)[0]

    // UPDATE
    const ip_allowlist_ref01_ent = client.IpAllowlist()
    const ip_allowlist_ref01_data_up0 = {}

    const ip_allowlist_ref01_markdef_up0 = { name: 'updated_at', value: 'Mark01-ip_allowlist_ref01_' + setup.now }
    ip_allowlist_ref01_data_up0 [ip_allowlist_ref01_markdef_up0.name] = ip_allowlist_ref01_markdef_up0.value

    const ip_allowlist_ref01_resdata_up0 = await ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0)
    assert(null != ip_allowlist_ref01_resdata_up0)

    assert(ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0.name] === ip_allowlist_ref01_markdef_up0.value)


    // LOAD
    const ip_allowlist_ref01_match_dt0 = {}
    const ip_allowlist_ref01_data_dt0 = await ip_allowlist_ref01_ent.load(ip_allowlist_ref01_match_dt0)
    assert(null != ip_allowlist_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json')

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
    ['ip_allowlist01','ip_allowlist02','ip_allowlist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID']

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
  

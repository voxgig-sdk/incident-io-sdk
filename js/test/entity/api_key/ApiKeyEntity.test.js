
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


describe('ApiKeyEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ApiKey()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_key_ref01_ent = client.ApiKey()
    let api_key_ref01_data = setup.data.new.api_key['api_key_ref01']

    api_key_ref01_data = await api_key_ref01_ent.create(api_key_ref01_data)
    assert(null != api_key_ref01_data.id)


    // LIST
    const api_key_ref01_match = {}

    const api_key_ref01_list = await api_key_ref01_ent.list(api_key_ref01_match)

    assert(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))


    // UPDATE
    const api_key_ref01_data_up0 = {}
    api_key_ref01_data_up0.id = api_key_ref01_data.id

    const api_key_ref01_markdef_up0 = { name: 'comment', value: 'Mark01-api_key_ref01_' + setup.now }
    api_key_ref01_data_up0 [api_key_ref01_markdef_up0.name] = api_key_ref01_markdef_up0.value

    const api_key_ref01_resdata_up0 = await api_key_ref01_ent.update(api_key_ref01_data_up0)
    assert(api_key_ref01_resdata_up0.id === api_key_ref01_data_up0.id)

    assert(api_key_ref01_resdata_up0[api_key_ref01_markdef_up0.name] === api_key_ref01_markdef_up0.value)


    // LOAD
    const api_key_ref01_match_dt0 = {}
    api_key_ref01_match_dt0.id = api_key_ref01_data.id
    const api_key_ref01_data_dt0 = await api_key_ref01_ent.load(api_key_ref01_match_dt0)
    assert(api_key_ref01_data_dt0.id === api_key_ref01_data.id)


    // REMOVE
    const api_key_ref01_match_rm0 = {}
    api_key_ref01_match_rm0.id = api_key_ref01_data.id
    await api_key_ref01_ent.remove(api_key_ref01_match_rm0)
  

    // LIST
    const api_key_ref01_match_rt0 = {}

    const api_key_ref01_list_rt0 = await api_key_ref01_ent.list(api_key_ref01_match_rt0)

    assert(isempty(select(api_key_ref01_list_rt0, { id: api_key_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json')

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
    ['api_key01','api_key02','api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_API_KEY_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_API_KEY_ENTID']

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
  

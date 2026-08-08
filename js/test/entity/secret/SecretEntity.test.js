
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


describe('SecretEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Secret()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const secret_ref01_ent = client.Secret()
    let secret_ref01_data = setup.data.new.secret['secret_ref01']

    secret_ref01_data = await secret_ref01_ent.create(secret_ref01_data)
    assert(null != secret_ref01_data.id)


    // LIST
    const secret_ref01_match = {}

    const secret_ref01_list = await secret_ref01_ent.list(secret_ref01_match)

    assert(!isempty(select(secret_ref01_list, { id: secret_ref01_data.id })))


    // UPDATE
    const secret_ref01_data_up0 = {}
    secret_ref01_data_up0.id = secret_ref01_data.id

    const secret_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-secret_ref01_' + setup.now }
    secret_ref01_data_up0 [secret_ref01_markdef_up0.name] = secret_ref01_markdef_up0.value

    const secret_ref01_resdata_up0 = await secret_ref01_ent.update(secret_ref01_data_up0)
    assert(secret_ref01_resdata_up0.id === secret_ref01_data_up0.id)

    assert(secret_ref01_resdata_up0[secret_ref01_markdef_up0.name] === secret_ref01_markdef_up0.value)


    // LOAD
    const secret_ref01_match_dt0 = {}
    secret_ref01_match_dt0.id = secret_ref01_data.id
    const secret_ref01_data_dt0 = await secret_ref01_ent.load(secret_ref01_match_dt0)
    assert(secret_ref01_data_dt0.id === secret_ref01_data.id)


    // REMOVE
    const secret_ref01_match_rm0 = {}
    secret_ref01_match_rm0.id = secret_ref01_data.id
    await secret_ref01_ent.remove(secret_ref01_match_rm0)
  

    // LIST
    const secret_ref01_match_rt0 = {}

    const secret_ref01_list_rt0 = await secret_ref01_ent.list(secret_ref01_match_rt0)

    assert(isempty(select(secret_ref01_list_rt0, { id: secret_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/secret/SecretTestData.json')

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
    ['secret01','secret02','secret03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SECRET_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_SECRET_ENTID']

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
  


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


describe('CatalogTypeEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CatalogType()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const catalog_type_ref01_ent = client.CatalogType()
    let catalog_type_ref01_data = setup.data.new.catalog_type['catalog_type_ref01']

    catalog_type_ref01_data = await catalog_type_ref01_ent.create(catalog_type_ref01_data)
    assert(null != catalog_type_ref01_data.id)


    // LIST
    const catalog_type_ref01_match = {}

    const catalog_type_ref01_list = await catalog_type_ref01_ent.list(catalog_type_ref01_match)

    assert(!isempty(select(catalog_type_ref01_list, { id: catalog_type_ref01_data.id })))


    // UPDATE
    const catalog_type_ref01_data_up0 = {}
    catalog_type_ref01_data_up0.id = catalog_type_ref01_data.id

    const catalog_type_ref01_markdef_up0 = { name: 'color', value: 'Mark01-catalog_type_ref01_' + setup.now }
    catalog_type_ref01_data_up0 [catalog_type_ref01_markdef_up0.name] = catalog_type_ref01_markdef_up0.value

    const catalog_type_ref01_resdata_up0 = await catalog_type_ref01_ent.update(catalog_type_ref01_data_up0)
    assert(catalog_type_ref01_resdata_up0.id === catalog_type_ref01_data_up0.id)

    assert(catalog_type_ref01_resdata_up0[catalog_type_ref01_markdef_up0.name] === catalog_type_ref01_markdef_up0.value)


    // LOAD
    const catalog_type_ref01_match_dt0 = {}
    catalog_type_ref01_match_dt0.id = catalog_type_ref01_data.id
    const catalog_type_ref01_data_dt0 = await catalog_type_ref01_ent.load(catalog_type_ref01_match_dt0)
    assert(catalog_type_ref01_data_dt0.id === catalog_type_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/catalog_type/CatalogTypeTestData.json')

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
    ['catalog_type01','catalog_type02','catalog_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CATALOG_TYPE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_CATALOG_TYPE_ENTID']

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
  

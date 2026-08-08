
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


describe('CustomFieldOptionEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CustomFieldOption()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_field_option_ref01_ent = client.CustomFieldOption()
    let custom_field_option_ref01_data = setup.data.new.custom_field_option['custom_field_option_ref01']

    custom_field_option_ref01_data = await custom_field_option_ref01_ent.create(custom_field_option_ref01_data)
    assert(null != custom_field_option_ref01_data.id)


    // LIST
    const custom_field_option_ref01_match = {}

    const custom_field_option_ref01_list = await custom_field_option_ref01_ent.list(custom_field_option_ref01_match)

    assert(!isempty(select(custom_field_option_ref01_list, { id: custom_field_option_ref01_data.id })))


    // UPDATE
    const custom_field_option_ref01_data_up0 = {}
    custom_field_option_ref01_data_up0.id = custom_field_option_ref01_data.id

    const custom_field_option_ref01_markdef_up0 = { name: 'custom_field_id', value: 'Mark01-custom_field_option_ref01_' + setup.now }
    custom_field_option_ref01_data_up0 [custom_field_option_ref01_markdef_up0.name] = custom_field_option_ref01_markdef_up0.value

    const custom_field_option_ref01_resdata_up0 = await custom_field_option_ref01_ent.update(custom_field_option_ref01_data_up0)
    assert(custom_field_option_ref01_resdata_up0.id === custom_field_option_ref01_data_up0.id)

    assert(custom_field_option_ref01_resdata_up0[custom_field_option_ref01_markdef_up0.name] === custom_field_option_ref01_markdef_up0.value)


    // LOAD
    const custom_field_option_ref01_match_dt0 = {}
    custom_field_option_ref01_match_dt0.id = custom_field_option_ref01_data.id
    const custom_field_option_ref01_data_dt0 = await custom_field_option_ref01_ent.load(custom_field_option_ref01_match_dt0)
    assert(custom_field_option_ref01_data_dt0.id === custom_field_option_ref01_data.id)


    // REMOVE
    const custom_field_option_ref01_match_rm0 = {}
    custom_field_option_ref01_match_rm0.id = custom_field_option_ref01_data.id
    await custom_field_option_ref01_ent.remove(custom_field_option_ref01_match_rm0)
  

    // LIST
    const custom_field_option_ref01_match_rt0 = {}

    const custom_field_option_ref01_list_rt0 = await custom_field_option_ref01_ent.list(custom_field_option_ref01_match_rt0)

    assert(isempty(select(custom_field_option_ref01_list_rt0, { id: custom_field_option_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_field_option/CustomFieldOptionTestData.json')

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
    ['custom_field_option01','custom_field_option02','custom_field_option03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CUSTOM_FIELD_OPTION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_CUSTOM_FIELD_OPTION_ENTID']

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
  

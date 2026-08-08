
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


describe('ActionEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Action()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const action_ref01_ent = client.Action()
    let action_ref01_data = setup.data.new.action['action_ref01']

    action_ref01_data = await action_ref01_ent.create(action_ref01_data)
    assert(null != action_ref01_data.id)


    // LIST
    const action_ref01_match = {}

    const action_ref01_list = await action_ref01_ent.list(action_ref01_match)

    assert(!isempty(select(action_ref01_list, { id: action_ref01_data.id })))


    // UPDATE
    const action_ref01_data_up0 = {}
    action_ref01_data_up0.id = action_ref01_data.id

    const action_ref01_markdef_up0 = { name: 'assignee_id', value: 'Mark01-action_ref01_' + setup.now }
    action_ref01_data_up0 [action_ref01_markdef_up0.name] = action_ref01_markdef_up0.value

    const action_ref01_resdata_up0 = await action_ref01_ent.update(action_ref01_data_up0)
    assert(action_ref01_resdata_up0.id === action_ref01_data_up0.id)

    assert(action_ref01_resdata_up0[action_ref01_markdef_up0.name] === action_ref01_markdef_up0.value)


    // LOAD
    const action_ref01_match_dt0 = {}
    action_ref01_match_dt0.id = action_ref01_data.id
    const action_ref01_data_dt0 = await action_ref01_ent.load(action_ref01_match_dt0)
    assert(action_ref01_data_dt0.id === action_ref01_data.id)


    // REMOVE
    const action_ref01_match_rm0 = {}
    action_ref01_match_rm0.id = action_ref01_data.id
    await action_ref01_ent.remove(action_ref01_match_rm0)
  

    // LIST
    const action_ref01_match_rt0 = {}

    const action_ref01_list_rt0 = await action_ref01_ent.list(action_ref01_match_rt0)

    assert(isempty(select(action_ref01_list_rt0, { id: action_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/action/ActionTestData.json')

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
    ['action01','action02','action03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ACTION_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_ACTION_ENTID']

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
  


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


describe('FollowUpEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.FollowUp()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const follow_up_ref01_ent = client.FollowUp()
    let follow_up_ref01_data = setup.data.new.follow_up['follow_up_ref01']

    follow_up_ref01_data = await follow_up_ref01_ent.create(follow_up_ref01_data)
    assert(null != follow_up_ref01_data.id)


    // LIST
    const follow_up_ref01_match = {}

    const follow_up_ref01_list = await follow_up_ref01_ent.list(follow_up_ref01_match)

    assert(!isempty(select(follow_up_ref01_list, { id: follow_up_ref01_data.id })))


    // UPDATE
    const follow_up_ref01_data_up0 = {}
    follow_up_ref01_data_up0.id = follow_up_ref01_data.id

    const follow_up_ref01_markdef_up0 = { name: 'assignee_id', value: 'Mark01-follow_up_ref01_' + setup.now }
    follow_up_ref01_data_up0 [follow_up_ref01_markdef_up0.name] = follow_up_ref01_markdef_up0.value

    const follow_up_ref01_resdata_up0 = await follow_up_ref01_ent.update(follow_up_ref01_data_up0)
    assert(follow_up_ref01_resdata_up0.id === follow_up_ref01_data_up0.id)

    assert(follow_up_ref01_resdata_up0[follow_up_ref01_markdef_up0.name] === follow_up_ref01_markdef_up0.value)


    // LOAD
    const follow_up_ref01_match_dt0 = {}
    follow_up_ref01_match_dt0.id = follow_up_ref01_data.id
    const follow_up_ref01_data_dt0 = await follow_up_ref01_ent.load(follow_up_ref01_match_dt0)
    assert(follow_up_ref01_data_dt0.id === follow_up_ref01_data.id)


    // REMOVE
    const follow_up_ref01_match_rm0 = {}
    follow_up_ref01_match_rm0.id = follow_up_ref01_data.id
    await follow_up_ref01_ent.remove(follow_up_ref01_match_rm0)
  

    // LIST
    const follow_up_ref01_match_rt0 = {}

    const follow_up_ref01_list_rt0 = await follow_up_ref01_ent.list(follow_up_ref01_match_rt0)

    assert(isempty(select(follow_up_ref01_list_rt0, { id: follow_up_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/follow_up/FollowUpTestData.json')

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
    ['follow_up01','follow_up02','follow_up03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_FOLLOW_UP_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_FOLLOW_UP_ENTID']

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
  

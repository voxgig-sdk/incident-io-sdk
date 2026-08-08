
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


describe('ScheduleSyncRuleEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ScheduleSyncRule()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const schedule_sync_rule_ref01_ent = client.ScheduleSyncRule()
    let schedule_sync_rule_ref01_data = setup.data.new.schedule_sync_rule['schedule_sync_rule_ref01']
    schedule_sync_rule_ref01_data['schedule_id'] = setup.idmap['schedule01']

    schedule_sync_rule_ref01_data = await schedule_sync_rule_ref01_ent.create(schedule_sync_rule_ref01_data)
    assert(null != schedule_sync_rule_ref01_data.id)


    // LIST
    const schedule_sync_rule_ref01_match = {}
    schedule_sync_rule_ref01_match['schedule_id'] = setup.idmap['schedule01']

    const schedule_sync_rule_ref01_list = await schedule_sync_rule_ref01_ent.list(schedule_sync_rule_ref01_match)

    assert(!isempty(select(schedule_sync_rule_ref01_list, { id: schedule_sync_rule_ref01_data.id })))


    // UPDATE
    const schedule_sync_rule_ref01_data_up0 = {}
    schedule_sync_rule_ref01_data_up0.id = schedule_sync_rule_ref01_data.id
    schedule_sync_rule_ref01_data_up0 ['schedule_id'] = setup.idmap['schedule_id']

    const schedule_sync_rule_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_sync_rule_ref01_' + setup.now }
    schedule_sync_rule_ref01_data_up0 [schedule_sync_rule_ref01_markdef_up0.name] = schedule_sync_rule_ref01_markdef_up0.value

    const schedule_sync_rule_ref01_resdata_up0 = await schedule_sync_rule_ref01_ent.update(schedule_sync_rule_ref01_data_up0)
    assert(schedule_sync_rule_ref01_resdata_up0.id === schedule_sync_rule_ref01_data_up0.id)

    assert(schedule_sync_rule_ref01_resdata_up0[schedule_sync_rule_ref01_markdef_up0.name] === schedule_sync_rule_ref01_markdef_up0.value)


    // LOAD
    const schedule_sync_rule_ref01_match_dt0 = {}
    schedule_sync_rule_ref01_match_dt0.id = schedule_sync_rule_ref01_data.id
    const schedule_sync_rule_ref01_data_dt0 = await schedule_sync_rule_ref01_ent.load(schedule_sync_rule_ref01_match_dt0)
    assert(schedule_sync_rule_ref01_data_dt0.id === schedule_sync_rule_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/schedule_sync_rule/ScheduleSyncRuleTestData.json')

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
    ['schedule_sync_rule01','schedule_sync_rule02','schedule_sync_rule03','schedule01','schedule02','schedule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID']

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
  

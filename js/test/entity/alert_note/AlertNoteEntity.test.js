
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


describe('AlertNoteEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertNote()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_note_ref01_ent = client.AlertNote()
    let alert_note_ref01_data = setup.data.new.alert_note['alert_note_ref01']

    alert_note_ref01_data = await alert_note_ref01_ent.create(alert_note_ref01_data)
    assert(null != alert_note_ref01_data.id)


    // LIST
    const alert_note_ref01_match = {}

    const alert_note_ref01_list = await alert_note_ref01_ent.list(alert_note_ref01_match)

    assert(!isempty(select(alert_note_ref01_list, { id: alert_note_ref01_data.id })))


    // UPDATE
    const alert_note_ref01_data_up0 = {}
    alert_note_ref01_data_up0.id = alert_note_ref01_data.id

    const alert_note_ref01_markdef_up0 = { name: 'alert_group_id', value: 'Mark01-alert_note_ref01_' + setup.now }
    alert_note_ref01_data_up0 [alert_note_ref01_markdef_up0.name] = alert_note_ref01_markdef_up0.value

    const alert_note_ref01_resdata_up0 = await alert_note_ref01_ent.update(alert_note_ref01_data_up0)
    assert(alert_note_ref01_resdata_up0.id === alert_note_ref01_data_up0.id)

    assert(alert_note_ref01_resdata_up0[alert_note_ref01_markdef_up0.name] === alert_note_ref01_markdef_up0.value)


    // LOAD
    const alert_note_ref01_match_dt0 = {}
    alert_note_ref01_match_dt0.id = alert_note_ref01_data.id
    const alert_note_ref01_data_dt0 = await alert_note_ref01_ent.load(alert_note_ref01_match_dt0)
    assert(alert_note_ref01_data_dt0.id === alert_note_ref01_data.id)


    // REMOVE
    const alert_note_ref01_match_rm0 = {}
    alert_note_ref01_match_rm0.id = alert_note_ref01_data.id
    await alert_note_ref01_ent.remove(alert_note_ref01_match_rm0)
  

    // LIST
    const alert_note_ref01_match_rt0 = {}

    const alert_note_ref01_list_rt0 = await alert_note_ref01_ent.list(alert_note_ref01_match_rt0)

    assert(isempty(select(alert_note_ref01_list_rt0, { id: alert_note_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/alert_note/AlertNoteTestData.json')

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
    ['alert_note01','alert_note02','alert_note03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERT_NOTE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_ALERT_NOTE_ENTID']

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
  

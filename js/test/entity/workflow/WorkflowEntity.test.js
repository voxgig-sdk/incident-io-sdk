
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


describe('WorkflowEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Workflow()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const workflow_ref01_ent = client.Workflow()
    let workflow_ref01_data = setup.data.new.workflow['workflow_ref01']

    workflow_ref01_data = await workflow_ref01_ent.create(workflow_ref01_data)
    assert(null != workflow_ref01_data.id)


    // LIST
    const workflow_ref01_match = {}

    const workflow_ref01_list = await workflow_ref01_ent.list(workflow_ref01_match)

    assert(!isempty(select(workflow_ref01_list, { id: workflow_ref01_data.id })))


    // UPDATE
    const workflow_ref01_data_up0 = {}
    workflow_ref01_data_up0.id = workflow_ref01_data.id

    const workflow_ref01_markdef_up0 = { name: 'folder', value: 'Mark01-workflow_ref01_' + setup.now }
    workflow_ref01_data_up0 [workflow_ref01_markdef_up0.name] = workflow_ref01_markdef_up0.value

    const workflow_ref01_resdata_up0 = await workflow_ref01_ent.update(workflow_ref01_data_up0)
    assert(workflow_ref01_resdata_up0.id === workflow_ref01_data_up0.id)

    assert(workflow_ref01_resdata_up0[workflow_ref01_markdef_up0.name] === workflow_ref01_markdef_up0.value)


    // LOAD
    const workflow_ref01_match_dt0 = {}
    workflow_ref01_match_dt0.id = workflow_ref01_data.id
    const workflow_ref01_data_dt0 = await workflow_ref01_ent.load(workflow_ref01_match_dt0)
    assert(workflow_ref01_data_dt0.id === workflow_ref01_data.id)


    // REMOVE
    const workflow_ref01_match_rm0 = {}
    workflow_ref01_match_rm0.id = workflow_ref01_data.id
    await workflow_ref01_ent.remove(workflow_ref01_match_rm0)
  

    // LIST
    const workflow_ref01_match_rt0 = {}

    const workflow_ref01_list_rt0 = await workflow_ref01_ent.list(workflow_ref01_match_rt0)

    assert(isempty(select(workflow_ref01_list_rt0, { id: workflow_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/workflow/WorkflowTestData.json')

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
    ['workflow01','workflow02','workflow03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_WORKFLOW_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_WORKFLOW_ENTID']

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
  

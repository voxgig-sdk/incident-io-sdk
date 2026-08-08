
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


describe('PostmortemDocumentEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PostmortemDocument()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let postmortem_document_ref01_data = Object.values(setup.data.existing.postmortem_document)[0]

    // LIST
    const postmortem_document_ref01_ent = client.PostmortemDocument()
    const postmortem_document_ref01_match = {}

    const postmortem_document_ref01_list = await postmortem_document_ref01_ent.list(postmortem_document_ref01_match)


    // UPDATE
    const postmortem_document_ref01_data_up0 = {}
    postmortem_document_ref01_data_up0.id = postmortem_document_ref01_data.id

    const postmortem_document_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-postmortem_document_ref01_' + setup.now }
    postmortem_document_ref01_data_up0 [postmortem_document_ref01_markdef_up0.name] = postmortem_document_ref01_markdef_up0.value

    const postmortem_document_ref01_resdata_up0 = await postmortem_document_ref01_ent.update(postmortem_document_ref01_data_up0)
    assert(postmortem_document_ref01_resdata_up0.id === postmortem_document_ref01_data_up0.id)

    assert(postmortem_document_ref01_resdata_up0[postmortem_document_ref01_markdef_up0.name] === postmortem_document_ref01_markdef_up0.value)


    // LOAD
    const postmortem_document_ref01_match_dt0 = {}
    postmortem_document_ref01_match_dt0.id = postmortem_document_ref01_data.id
    const postmortem_document_ref01_data_dt0 = await postmortem_document_ref01_ent.load(postmortem_document_ref01_match_dt0)
    assert(postmortem_document_ref01_data_dt0.id === postmortem_document_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/postmortem_document/PostmortemDocumentTestData.json')

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
    ['postmortem_document01','postmortem_document02','postmortem_document03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_POSTMORTEM_DOCUMENT_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENT_ENTID']

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
  

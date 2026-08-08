
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


describe('IncidentAttachmentEntity', async () => {

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentAttachment()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_attachment_ref01_ent = client.IncidentAttachment()
    let incident_attachment_ref01_data = setup.data.new.incident_attachment['incident_attachment_ref01']

    incident_attachment_ref01_data = await incident_attachment_ref01_ent.create(incident_attachment_ref01_data)
    assert(null != incident_attachment_ref01_data.id)


    // LIST
    const incident_attachment_ref01_match = {}

    const incident_attachment_ref01_list = await incident_attachment_ref01_ent.list(incident_attachment_ref01_match)

    assert(!isempty(select(incident_attachment_ref01_list, { id: incident_attachment_ref01_data.id })))


    // REMOVE
    const incident_attachment_ref01_match_rm0 = {}
    incident_attachment_ref01_match_rm0.id = incident_attachment_ref01_data.id
    await incident_attachment_ref01_ent.remove(incident_attachment_ref01_match_rm0)
  

    // LIST
    const incident_attachment_ref01_match_rt0 = {}

    const incident_attachment_ref01_list_rt0 = await incident_attachment_ref01_ent.list(incident_attachment_ref01_match_rt0)

    assert(isempty(select(incident_attachment_ref01_list_rt0, { id: incident_attachment_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/incident_attachment/IncidentAttachmentTestData.json')

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
    ['incident_attachment01','incident_attachment02','incident_attachment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID']

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
  



import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { IncidentIoSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('IncidentsImportPostmortemDocumentResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentsImportPostmortemDocumentResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentsImportPostmortemDocumentResultV2().create({"incident_id":1,"content":"x","title":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incidents_import_postmortem_document_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content":{"a":true,"h":"Content","n":"content","r":true,"sh":"The document content as GitHub-Flavored Markdown","t":"`$STRING`","key$":"content","index$":0},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"Title of the postmortem document","t":"`$STRING`","key$":"title","index$":1}},"name":"incidents_import_postmortem_document_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["content","title"],"co":{"id":"POST /v2/incidents/{id}/actions/import_postmortem_document","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01GBA8J19SMXQWPJMX3P2ESCVG","k":"param","n":"incident_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/incidents/{id}/actions/import_postmortem_document","q":{"exist":["incident_id"]},"r":{"param":{"id":"incident_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incidents"},{"var":"incident_id"},{"lit":"actions"},{"lit":"import_postmortem_document"}],"t":{"req":"`reqdata`","res":"`body.postmortem_document`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.incident"]]},"key$":"incidents_import_postmortem_document_result_v2","name__orig":"incidents_import_postmortem_document_result_v2","Name":"IncidentsImportPostmortemDocumentResultV2","name_":"incidents_import_postmortem_document_result_v2","name-":"incidents-import-postmortem-document-result-v2","NAME":"INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2","index$":58}, {"active":true,"entity":"incidents_import_postmortem_document_result_v2","key$":"BasicIncidentsImportPostmortemDocumentResultV2Flow","kind":"basic","name":"BasicIncidentsImportPostmortemDocumentResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incidents_import_postmortem_document_result_v2_ref01"},"m":{"incident_id":"incident01"},"o":"create","s":[],"v":[],"index$":0}]}, 'IncidentsImportPostmortemDocumentResultV2', {"POST /v2/incidents/{id}/actions/import_postmortem_document":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"content":"## Summary\n\nA database migration caused increased latency...","title":"INC-123: Post-incident review"},"schema":{"example":{"content":"## Summary\n\nA database migration caused increased latency...","title":"INC-123: Post-incident review"},"properties":{"content":{"description":"The document content as GitHub-Flavored Markdown","example":"## Summary\n\nA database migration caused increased latency...","type":"string","key$":"content"},"title":{"description":"Title of the postmortem document","example":"INC-123: Post-incident review","type":"string","key$":"title"}},"required":["title","content"],"type":"object","x-ref":"#/components/schemas/IncidentsImportPostmortemDocumentPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The unique identifier of the incident","example":"01GBA8J19SMXQWPJMX3P2ESCVG","in":"path","name":"id","required":true,"schema":{"description":"The unique identifier of the incident","example":"01GBA8J19SMXQWPJMX3P2ESCVG","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incidents_import_postmortem_document_result_v2_ref01_ent = client.IncidentsImportPostmortemDocumentResultV2()
    let incidents_import_postmortem_document_result_v2_ref01_data = setup.data.new.incidents_import_postmortem_document_result_v2['incidents_import_postmortem_document_result_v2_ref01']
    incidents_import_postmortem_document_result_v2_ref01_data['incident_id'] = setup.idmap['incident01']

    incidents_import_postmortem_document_result_v2_ref01_data = (await incidents_import_postmortem_document_result_v2_ref01_ent.create(incidents_import_postmortem_document_result_v2_ref01_data)).data()
    assert(null != incidents_import_postmortem_document_result_v2_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/incidents_import_postmortem_document_result_v2/IncidentsImportPostmortemDocumentResultV2TestData.json')

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
    ['incidents_import_postmortem_document_result_v201','incidents_import_postmortem_document_result_v202','incidents_import_postmortem_document_result_v203','incident01','incident02','incident03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new IncidentIoSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.INCIDENT_IO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  

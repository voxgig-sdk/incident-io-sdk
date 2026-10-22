

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


describe('PostmortemDocumentsAttachResultV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PostmortemDocumentsAttachResultV1()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PostmortemDocumentsAttachResultV1().create({"document_provider":1,"incident_id":"x","permalink":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'postmortem_documents_attach_result_v1.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"document_provider":{"a":true,"h":"Document Provider","n":"document_provider","r":false,"sh":"The provider hosting the document.","t":"`$STRING`","key$":"document_provider","index$":0},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"The unique identifier of the incident to attach the post-mortem document to","t":"`$STRING`","key$":"incident_id","index$":1},"permalink":{"a":true,"h":"Permalink","n":"permalink","r":true,"sh":"A URL pointing to the externally-hosted post-mortem document","t":"`$STRING`","key$":"permalink","index$":2}},"name":"postmortem_documents_attach_result_v1","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["document_provider","incident_id","permalink"],"co":{"id":"POST /v1/postmortem_documents/actions/attach","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/postmortem_documents/actions/attach","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"postmortem_documents"},{"lit":"actions"},{"lit":"attach"}],"t":{"req":"`reqdata`","res":"`body.postmortem_document`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"postmortem_documents_attach_result_v1","name__orig":"postmortem_documents_attach_result_v1","Name":"PostmortemDocumentsAttachResultV1","name_":"postmortem_documents_attach_result_v1","name-":"postmortem-documents-attach-result-v1","NAME":"POSTMORTEM_DOCUMENTS_ATTACH_RESULT_V1","index$":78}, {"active":true,"entity":"postmortem_documents_attach_result_v1","key$":"BasicPostmortemDocumentsAttachResultV1Flow","kind":"basic","name":"BasicPostmortemDocumentsAttachResultV1Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"postmortem_documents_attach_result_v1_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'PostmortemDocumentsAttachResultV1', {"POST /v1/postmortem_documents/actions/attach":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"document_provider":"notion","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","permalink":"https://www.notion.so/INC-123-database-is-sad"},"schema":{"example":{"document_provider":"notion","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","permalink":"https://www.notion.so/INC-123-database-is-sad"},"properties":{"document_provider":{"description":"The provider hosting the document. This is informational only: the document is always stored as a link to the permalink.","enum":["","confluence","google_docs","notion","sharepoint","incident_io","copy_paste_basecamp","copy_paste_confluence","copy_paste_github_wiki","copy_paste_google_docs","copy_paste_notion","copy_paste_quip"],"example":"notion","type":"string","key$":"document_provider"},"incident_id":{"description":"The unique identifier of the incident to attach the post-mortem document to","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"},"permalink":{"description":"A URL pointing to the externally-hosted post-mortem document","example":"https://www.notion.so/INC-123-database-is-sad","type":"string","key$":"permalink"}},"required":["incident_id","permalink"],"type":"object","x-ref":"#/components/schemas/PostmortemDocumentsAttachPayloadV1","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const postmortem_documents_attach_result_v1_ref01_ent = client.PostmortemDocumentsAttachResultV1()
    let postmortem_documents_attach_result_v1_ref01_data = setup.data.new.postmortem_documents_attach_result_v1['postmortem_documents_attach_result_v1_ref01']

    postmortem_documents_attach_result_v1_ref01_data = (await postmortem_documents_attach_result_v1_ref01_ent.create(postmortem_documents_attach_result_v1_ref01_data)).data()
    assert(null != postmortem_documents_attach_result_v1_ref01_data)


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
      '../../../../.sdk/test/entity/postmortem_documents_attach_result_v1/PostmortemDocumentsAttachResultV1TestData.json')

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
    ['postmortem_documents_attach_result_v101','postmortem_documents_attach_result_v102','postmortem_documents_attach_result_v103'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_ATTACH_RESULT_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_ATTACH_RESULT_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_ATTACH_RESULT_V1_ENTID']
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
  

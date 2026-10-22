

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


describe('PostmortemDocumentsShowContentResultV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PostmortemDocumentsShowContentResultV1()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PostmortemDocumentsShowContentResultV1().load({"postmortem_document_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'postmortem_documents_show_content_result_v1.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"markdown":{"a":true,"h":"Markdown","n":"markdown","r":true,"sh":"The full content of the post-mortem document, rendered as markdown.","t":"`$STRING`","key$":"markdown","index$":0}},"name":"postmortem_documents_show_content_result_v1","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/postmortem_documents/{id}/content","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01GDZEW57FDA1K4S63MGMQ5DS9","k":"param","n":"postmortem_document_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/postmortem_documents/{id}/content","q":{"exist":["postmortem_document_id"]},"r":{"param":{"id":"postmortem_document_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"postmortem_documents"},{"var":"postmortem_document_id"},{"lit":"content"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.postmortem_document"]]},"key$":"postmortem_documents_show_content_result_v1","name__orig":"postmortem_documents_show_content_result_v1","Name":"PostmortemDocumentsShowContentResultV1","name_":"postmortem_documents_show_content_result_v1","name-":"postmortem-documents-show-content-result-v1","NAME":"POSTMORTEM_DOCUMENTS_SHOW_CONTENT_RESULT_V1","index$":79}, {"active":true,"entity":"postmortem_documents_show_content_result_v1","key$":"BasicPostmortemDocumentsShowContentResultV1Flow","kind":"basic","name":"BasicPostmortemDocumentsShowContentResultV1Flow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"postmortem_documents_show_content_result_v1_ref01","srcdatavar":"postmortem_documents_show_content_result_v1_ref01_data","suffix":"_dt0"},"m":{"id":"postmortem_documents_show_content_result_v101"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-postmortem_documents_show_content_result_v1_ref01"}}],"unreachable":true}]}, 'PostmortemDocumentsShowContentResultV1', {"GET /v1/postmortem_documents/{id}/content":{"protocol":"http","parameters":[{"description":"Unique identifier for the post-mortem document","example":"01GDZEW57FDA1K4S63MGMQ5DS9","in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let postmortem_documents_show_content_result_v1_ref01_data = Object.values(setup.data.existing.postmortem_documents_show_content_result_v1)[0] as any

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
      '../../../../.sdk/test/entity/postmortem_documents_show_content_result_v1/PostmortemDocumentsShowContentResultV1TestData.json')

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
    ['postmortem_documents_show_content_result_v101','postmortem_documents_show_content_result_v102','postmortem_documents_show_content_result_v103','postmortem_document01','postmortem_document02','postmortem_document03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_SHOW_CONTENT_RESULT_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_SHOW_CONTENT_RESULT_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENTS_SHOW_CONTENT_RESULT_V1_ENTID']
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
  

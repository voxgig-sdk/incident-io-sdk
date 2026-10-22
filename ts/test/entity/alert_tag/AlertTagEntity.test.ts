

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


describe('AlertTagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertTag()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('alert_tag hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).AlertTag().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).AlertTag()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AlertTag().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().AlertTag().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AlertTag().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AlertTag().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AlertTag().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'alert_tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_group_ids":{"a":true,"h":"Alert Group Ids","n":"alert_group_ids","r":false,"sh":"The IDs of every alert group this alert belongs to.","t":"`$ARRAY`","key$":"alert_group_ids","index$":0},"alert_source_id":{"a":true,"h":"Alert Source Id","n":"alert_source_id","r":true,"sh":"The ID of the alert source this alert fired on","t":"`$STRING`","key$":"alert_source_id","index$":1},"attributes":{"a":true,"h":"Attributes","n":"attributes","r":true,"sh":"Attribute values parsed from the alerts payload","t":"`$ARRAY`","key$":"attributes","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this entry was created","t":"`$STRING`","key$":"created_at","index$":3},"deduplication_key":{"a":true,"h":"Deduplication Key","n":"deduplication_key","r":true,"sh":"A deduplication key which uniquely references this alert from your alert source.","t":"`$STRING`","key$":"deduplication_key","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the alert","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of this alert","t":"`$STRING`","key$":"id","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The tag name","t":"`$STRING`","key$":"name","index$":7},"resolved_at":{"a":true,"fo":"date-time","h":"Resolved At","n":"resolved_at","r":false,"sh":"When this alert was resolved","t":"`$STRING`","key$":"resolved_at","index$":8},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"sh":"If applicable, a link to the alert in the upstream system","t":"`$STRING`","key$":"source_url","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Statuses of an alert","t":"`$STRING`","key$":"status","index$":10},"tags":{"a":true,"h":"Tags","n":"tags","op":{"create":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"Tags someone has applied to this alert","t":"`$ARRAY`","key$":"tags","index$":11},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The title of the alert, parsed from the alert payload according to the alert source configuration","t":"`$STRING`","key$":"title","index$":12},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this alert was last updated","t":"`$STRING`","key$":"updated_at","index$":13}},"id":{"field":"id","name":"id"},"name":"alert_tag","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["tags"],"co":{"id":"POST /v2/alerts/{id}/actions/remove_tags","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"alert_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/alerts/{id}/actions/remove_tags","q":{"exist":["alert_id"]},"r":{"param":{"id":"alert_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alerts"},{"var":"alert_id"},{"lit":"actions"},{"lit":"remove_tags"}],"t":{"req":"`reqdata`","res":"`body.alert`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/alert_tags","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01GW2G3V0S59R238FAHPDS1R66","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"noisy","k":"query","n":"search","or":"search","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v2/alert_tags","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alert_tags"}],"t":{"req":"`reqdata`","res":"`body.alert_tags`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.alert"]]},"key$":"alert_tag","name__orig":"alert_tag","Name":"AlertTag","name_":"alert_tag","name-":"alert-tag","NAME":"ALERT_TAG","index$":7}, {"active":true,"entity":"alert_tag","key$":"BasicAlertTagFlow","kind":"basic","name":"BasicAlertTagFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alert_tag_ref01"},"m":{"alert_id":"alert01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alert_tag_ref01"}}],"index$":1}]}, 'AlertTag', {"POST /v2/alerts/{id}/actions/remove_tags":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"tags":["known issue","customer impacting"]},"schema":{"example":{"tags":["known issue","customer impacting"]},"properties":{"tags":{"description":"Tag names to remove from this alert","example":["known issue","customer impacting"],"items":{"example":"abc123","type":"string"},"maxItems":25,"type":"array","key$":"tags"}},"required":["tags"],"type":"object","x-ref":"#/components/schemas/AlertsRemoveTagsPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"GET /v2/alert_tags":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"A tag's ID. This endpoint will return a list of tags after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01GW2G3V0S59R238FAHPDS1R66"}},"in":"query","name":"after","schema":{"description":"A tag's ID. This endpoint will return a list of tags after this ID in relation to the API response order.","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter to tags whose name contains this value (case-insensitive)","example":"noisy","in":"query","name":"search","schema":{"description":"Filter to tags whose name contains this value (case-insensitive)","example":"noisy","type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_tag_ref01_ent = client.AlertTag()
    let alert_tag_ref01_data = setup.data.new.alert_tag['alert_tag_ref01']
    alert_tag_ref01_data['alert_id'] = setup.idmap['alert01']

    alert_tag_ref01_data = (await alert_tag_ref01_ent.create(alert_tag_ref01_data)).data()
    assert(null != alert_tag_ref01_data.id)


    // LIST
    const alert_tag_ref01_match: any = {}

    const alert_tag_ref01_list = (await alert_tag_ref01_ent.list(alert_tag_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(alert_tag_ref01_list, { id: alert_tag_ref01_data.id })))


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
      '../../../../.sdk/test/entity/alert_tag/AlertTagTestData.json')

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
    ['alert_tag01','alert_tag02','alert_tag03','alert01','alert02','alert03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERT_TAG_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERT_TAG_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERT_TAG_ENTID']
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
  

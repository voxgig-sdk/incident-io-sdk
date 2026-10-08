
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IncidentIoSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('AlertsRemoveTagsResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertsRemoveTagsResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AlertsRemoveTagsResultV2().create({"alert_id":1,"alert_source_id":"x","attributes":"x","created_at":"x","deduplication_key":"x","id":"x","status":"x","title":"x","updated_at":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_group_ids":{"a":true,"h":"Alert Group Ids","n":"alert_group_ids","r":false,"sh":"The IDs of every alert group this alert belongs to.","t":"`$ARRAY`","key$":"alert_group_ids","index$":0},"alert_source_id":{"a":true,"h":"Alert Source Id","n":"alert_source_id","r":true,"sh":"The ID of the alert source this alert fired on","t":"`$STRING`","key$":"alert_source_id","index$":1},"attributes":{"a":true,"h":"Attributes","n":"attributes","r":true,"sh":"Attribute values parsed from the alerts payload","t":"`$ARRAY`","key$":"attributes","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this entry was created","t":"`$STRING`","key$":"created_at","index$":3},"deduplication_key":{"a":true,"h":"Deduplication Key","n":"deduplication_key","r":true,"sh":"A deduplication key which uniquely references this alert from your alert source.","t":"`$STRING`","key$":"deduplication_key","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the alert","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of this alert","t":"`$STRING`","key$":"id","index$":6},"resolved_at":{"a":true,"fo":"date-time","h":"Resolved At","n":"resolved_at","r":false,"sh":"When this alert was resolved","t":"`$STRING`","key$":"resolved_at","index$":7},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"sh":"If applicable, a link to the alert in the upstream system","t":"`$STRING`","key$":"source_url","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Statuses of an alert","t":"`$STRING`","key$":"status","index$":9},"tags":{"a":true,"h":"Tags","n":"tags","op":{"create":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"Tags someone has applied to this alert","t":"`$ARRAY`","key$":"tags","index$":10},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The title of the alert, parsed from the alert payload according to the alert source configuration","t":"`$STRING`","key$":"title","index$":11},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this alert was last updated","t":"`$STRING`","key$":"updated_at","index$":12}},"id":{"field":"id","name":"id"},"name":"alerts_remove_tags_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["tags"],"co":{"id":"POST /v2/alerts/{id}/actions/remove_tags","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"alert_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/alerts/{id}/actions/remove_tags","q":{"exist":["alert_id"]},"r":{"param":{"id":"alert_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alerts"},{"var":"alert_id"},{"lit":"actions"},{"lit":"remove_tags"}],"t":{"req":"`reqdata`","res":"`body.alert`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.alert"]]},"key$":"alerts_remove_tags_result_v2","name__orig":"alerts_remove_tags_result_v2","Name":"AlertsRemoveTagsResultV2","name_":"alerts_remove_tags_result_v2","name-":"alerts-remove-tags-result-v2","NAME":"ALERTS_REMOVE_TAGS_RESULT_V2","index$":9}, {"active":true,"entity":"alerts_remove_tags_result_v2","key$":"BasicAlertsRemoveTagsResultV2Flow","kind":"basic","name":"BasicAlertsRemoveTagsResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alerts_remove_tags_result_v2_ref01"},"m":{"alert_id":"alert01"},"o":"create","s":[],"v":[],"index$":0}]}, 'AlertsRemoveTagsResultV2', {"POST /v2/alerts/{id}/actions/remove_tags":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"tags":["known issue","customer impacting"]},"schema":{"example":{"tags":["known issue","customer impacting"]},"properties":{"tags":{"description":"Tag names to remove from this alert","example":["known issue","customer impacting"],"items":{"example":"abc123","type":"string"},"maxItems":25,"type":"array","key$":"tags"}},"required":["tags"],"type":"object","x-ref":"#/components/schemas/AlertsRemoveTagsPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alerts_remove_tags_result_v2_ref01_ent = client.AlertsRemoveTagsResultV2()
    let alerts_remove_tags_result_v2_ref01_data = setup.data.new.alerts_remove_tags_result_v2['alerts_remove_tags_result_v2_ref01']
    alerts_remove_tags_result_v2_ref01_data['alert_id'] = setup.idmap['alert01']

    alerts_remove_tags_result_v2_ref01_data = (await alerts_remove_tags_result_v2_ref01_ent.create(alerts_remove_tags_result_v2_ref01_data)).data()
    assert(null != alerts_remove_tags_result_v2_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/alerts_remove_tags_result_v2/AlertsRemoveTagsResultV2TestData.json')

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
    ['alerts_remove_tags_result_v201','alerts_remove_tags_result_v202','alerts_remove_tags_result_v203','alert01','alert02','alert03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERTS_REMOVE_TAGS_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERTS_REMOVE_TAGS_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERTS_REMOVE_TAGS_RESULT_V2_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  

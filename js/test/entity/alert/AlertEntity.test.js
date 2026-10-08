
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


describe('AlertEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Alert()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    constructor() {
      super()
      this.name = 'failhook'
      this.version = '0.0.1'
      this.active = true
      this.unexpected = 0
    }
    init() { }
    PreSpec() { throw new Error('alert hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).Alert().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).Alert()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Alert().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().Alert().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Alert().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Alert().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Alert().list({"after":1,"page_size":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_group_ids":{"a":true,"h":"Alert Group Ids","n":"alert_group_ids","r":false,"sh":"The IDs of every alert group this alert belongs to.","t":"`$ARRAY`","key$":"alert_group_ids","index$":0},"alert_source_id":{"a":true,"h":"Alert Source Id","n":"alert_source_id","r":true,"sh":"The ID of the alert source this alert fired on","t":"`$STRING`","key$":"alert_source_id","index$":1},"attributes":{"a":true,"h":"Attributes","n":"attributes","r":true,"sh":"Attribute values parsed from the alerts payload","t":"`$ARRAY`","key$":"attributes","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this entry was created","t":"`$STRING`","key$":"created_at","index$":3},"deduplication_key":{"a":true,"h":"Deduplication Key","n":"deduplication_key","r":true,"sh":"A deduplication key which uniquely references this alert from your alert source.","t":"`$STRING`","key$":"deduplication_key","index$":4},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the alert","t":"`$STRING`","key$":"description","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The ID of this alert","t":"`$STRING`","key$":"id","index$":6},"resolved_at":{"a":true,"fo":"date-time","h":"Resolved At","n":"resolved_at","r":false,"sh":"When this alert was resolved","t":"`$STRING`","key$":"resolved_at","index$":7},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"sh":"If applicable, a link to the alert in the upstream system","t":"`$STRING`","key$":"source_url","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Statuses of an alert","t":"`$STRING`","key$":"status","index$":9},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"sh":"Tags someone has applied to this alert","t":"`$ARRAY`","key$":"tags","index$":10},"title":{"a":true,"h":"Title","n":"title","r":true,"sh":"The title of the alert, parsed from the alert payload according to the alert source configuration","t":"`$STRING`","key$":"title","index$":11},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this alert was last updated","t":"`$STRING`","key$":"updated_at","index$":12}},"id":{"field":"id","name":"id"},"name":"alert","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /v2/alerts/{id}/actions/resolve","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/alerts/{id}/actions/resolve","q":{"$action":"action_resolve","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alerts"},{"var":"id"},{"lit":"actions"},{"lit":"resolve"}],"t":{"req":"`reqdata`","res":"`body.alert`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/alerts","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"k":"query","n":"alert_group_id","or":"alert_group_id","r":false,"t":"`$OBJECT`","index$":1},{"a":true,"ex":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"k":"query","n":"alert_source","or":"alert_source","r":false,"t":"`$OBJECT`","index$":2},{"a":true,"ex":{"01GBSQF3FHF7FWZQNWGHAVQ804":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804","01ET65M7ZARSFZ6TFDFVQDN9AA"]}},"k":"query","n":"attribute","or":"attributes","r":false,"t":"`$OBJECT`","index$":3},{"a":true,"ex":{"gte":["2025-01-01"]},"k":"query","n":"created_at","or":"created_at","r":false,"t":"`$OBJECT`","index$":4},{"a":true,"ex":{"is":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"k":"query","n":"deduplication_key","or":"deduplication_key","r":false,"t":"`$OBJECT`","index$":5},{"a":true,"ex":{"is":["true"]},"k":"query","n":"has_note","or":"has_notes","r":false,"t":"`$OBJECT`","index$":6},{"a":true,"ex":{"is":["true"]},"k":"query","n":"include_maintenance_window","or":"include_maintenance_window","r":false,"t":"`$OBJECT`","index$":7},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":true,"t":"`$INTEGER`","index$":8},{"a":true,"ex":{"one_of":["firing"]},"k":"query","n":"status","or":"status","r":false,"t":"`$OBJECT`","index$":9},{"a":true,"ex":{"one_of":["known issue"]},"k":"query","n":"tag","or":"tags","r":false,"t":"`$OBJECT`","index$":10},{"a":true,"ex":{"gte":["2025-01-01"]},"k":"query","n":"updated_at","or":"updated_at","r":false,"t":"`$OBJECT`","index$":11}]},"k":"http","m":"GET","o":"/v2/alerts","q":{"exist":["page_size"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alerts"}],"t":{"req":"`reqdata`","res":"`body.alerts`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/alerts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/alerts/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"alerts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.alert`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"alert","name__orig":"alert","Name":"Alert","name_":"alert","name-":"alert","NAME":"ALERT","index$":1}, {"active":true,"entity":"alert","key$":"BasicAlertFlow","kind":"basic","name":"BasicAlertFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"alert_ref01"},"m":{},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alert_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"alert_ref01","srcdatavar":"alert_ref01_data","suffix":"_dt0"},"m":{"id":"alert01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_ref01"}}],"index$":1}]}, 'Alert', {"POST /v2/alerts/{id}/actions/resolve":{"protocol":"http","parameters":[{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]},"GET /v2/alerts":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Number of alerts to return per page","example":25,"in":"query","name":"page_size","required":true,"schema":{"default":25,"description":"Number of alerts to return per page","example":25,"format":"int64","maximum":50,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"If provided, pass this as the 'after' param to load the next page","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"after","schema":{"description":"If provided, pass this as the 'after' param to load the next page","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter on alert deduplication key. The accepted operator is 'is'.","example":{"is":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"explode":true,"in":"query","name":"deduplication_key","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert deduplication key. The accepted operator is 'is'.","example":{"is":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"type":"object"},"style":"deepObject","index$":2},{"allowEmptyValue":true,"description":"Filter on alert status. The accepted operators are 'one_of', or 'not_in'.","example":{"one_of":["firing"]},"explode":true,"in":"query","name":"status","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert status. The accepted operators are 'one_of', or 'not_in'.","example":{"one_of":["firing"]},"type":"object"},"style":"deepObject","index$":3},{"allowEmptyValue":true,"description":"Filter on alert source by ID. The accepted operators are 'one_of', or 'not_in'.","example":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"explode":true,"in":"query","name":"alert_source","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert source by ID. The accepted operators are 'one_of', or 'not_in'.","example":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"type":"object"},"style":"deepObject","index$":4},{"allowEmptyValue":true,"description":"Filter on alert group ID. Returns alerts that belong to any of the specified groups. The accepted operator is 'one_of'.","example":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"explode":true,"in":"query","name":"alert_group_id","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert group ID. Returns alerts that belong to any of the specified groups. The accepted operator is 'one_of'.","example":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804"]},"type":"object"},"style":"deepObject","index$":5},{"allowEmptyValue":true,"description":"Filter on alert created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"explode":true,"in":"query","name":"created_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"type":"object"},"style":"deepObject","index$":6},{"allowEmptyValue":true,"description":"Filter on alert updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"explode":true,"in":"query","name":"updated_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on alert updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.","example":{"gte":["2025-01-01"]},"type":"object"},"style":"deepObject","index$":7},{"allowEmptyValue":true,"description":"Filter on an alerts attributes. Alert attribute ID should be sent, followed by the operator and values. Accepted operator will depend on the attribute type.","example":{"01GBSQF3FHF7FWZQNWGHAVQ804":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804","01ET65M7ZARSFZ6TFDFVQDN9AA"]}},"explode":true,"in":"query","name":"attributes","schema":{"additionalProperties":{"additionalProperties":{"example":["value"],"items":{"example":"value","type":"string"},"type":"array"},"example":{"abc123":["value"]},"type":"object"},"description":"Filter on an alerts attributes. Alert attribute ID should be sent, followed by the operator and values. Accepted operator will depend on the attribute type.","example":{"01GBSQF3FHF7FWZQNWGHAVQ804":{"one_of":["01GBSQF3FHF7FWZQNWGHAVQ804","01ET65M7ZARSFZ6TFDFVQDN9AA"]}},"type":"object"},"style":"deepObject","index$":8},{"allowEmptyValue":true,"description":"Filter on whether an alert has notes. The accepted operator is 'is'.","example":{"is":["true"]},"explode":true,"in":"query","name":"has_notes","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on whether an alert has notes. The accepted operator is 'is'.","example":{"is":["true"]},"type":"object"},"style":"deepObject","index$":9},{"allowEmptyValue":true,"description":"Filter on the tags applied to an alert, by tag name. The accepted operators are 'one_of', 'all_of' and 'not_in'.","example":{"one_of":["known issue"]},"explode":true,"in":"query","name":"tags","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on the tags applied to an alert, by tag name. The accepted operators are 'one_of', 'all_of' and 'not_in'.","example":{"one_of":["known issue"]},"type":"object"},"style":"deepObject","index$":10},{"allowEmptyValue":true,"description":"Filter on whether to include maintenance window alerts. The accepted operator is 'is'.","example":{"is":["true"]},"explode":true,"in":"query","name":"include_maintenance_window","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on whether to include maintenance window alerts. The accepted operator is 'is'.","example":{"is":["true"]},"type":"object"},"style":"deepObject","index$":11}]},"GET /v2/alerts/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let alert_ref01_data = Object.values(setup.data.existing.alert)[0]

    // LIST
    const alert_ref01_ent = client.Alert()
    const alert_ref01_match = {}

    const alert_ref01_list = (await alert_ref01_ent.list(alert_ref01_match)).map((e) => e.data())


    // LOAD
    const alert_ref01_match_dt0 = {}
    alert_ref01_match_dt0.id = alert_ref01_data.id
    const alert_ref01_data_dt0 = (await alert_ref01_ent.load(alert_ref01_match_dt0)).data()
    assert(alert_ref01_data_dt0.id === alert_ref01_data.id)


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
      '../../../../.sdk/test/entity/alert/AlertTestData.json')

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
    ['alert01','alert02','alert03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ALERT_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERT_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERT_ENTID']
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
  

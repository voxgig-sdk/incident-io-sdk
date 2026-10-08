
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


describe('AlertNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AlertNote()
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
    PreSpec() { throw new Error('alert_note hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).AlertNote().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).AlertNote()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AlertNote().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().AlertNote().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AlertNote().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AlertNote().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AlertNote().list({"after":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_group_id":{"a":true,"h":"Alert Group Id","n":"alert_group_id","r":false,"sh":"ID of the alert group this note is attached to.","t":"`$STRING`","key$":"alert_group_id","index$":0},"alert_id":{"a":true,"h":"Alert Id","n":"alert_id","r":false,"sh":"ID of the alert this note is attached to.","t":"`$STRING`","key$":"alert_id","index$":1},"content":{"a":true,"h":"Content","n":"content","r":true,"sh":"Markdown body of the note","t":"`$STRING`","key$":"content","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this note was first created","t":"`$STRING`","key$":"created_at","index$":3},"creator":{"a":true,"h":"Creator","n":"creator","r":true,"t":"`$OBJECT`","key$":"creator","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the alert note","t":"`$STRING`","key$":"id","index$":5},"images":{"a":true,"h":"Images","n":"images","r":true,"sh":"Images attached to the current version of the note, with signed URLs valid for 10 minutes","t":"`$ARRAY`","key$":"images","index$":6},"last_edited_at":{"a":true,"fo":"date-time","h":"Last Edited At","n":"last_edited_at","r":false,"sh":"When this note was last edited, only set if it has been edited at least once since creation","t":"`$STRING`","key$":"last_edited_at","index$":7},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this note was last updated","t":"`$STRING`","key$":"updated_at","index$":8}},"id":{"field":"id","name":"id"},"name":"alert_note","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["alert_group_id","alert_id","content"],"co":{"id":"POST /v1/alert_notes","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/alert_notes","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"alert_notes"}],"t":{"req":"`reqdata`","res":"`body.alert_note`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/alert_notes","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01HB9Z8WANK6P870EA6S7TK1DS","k":"query","n":"alert_group_id","or":"alert_group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"alert_id","or":"alert_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/v1/alert_notes","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"alert_notes"}],"t":{"req":"`reqdata`","res":"`body.alert_notes`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/alert_notes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01J1X9J85C7Y12G8P8W8K55Q5Y","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/alert_notes/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"alert_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.alert_note`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/alert_notes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01J1X9J85C7Y12G8P8W8K55Q5Y","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/alert_notes/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"alert_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["content"],"co":{"id":"PUT /v1/alert_notes/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01J1X9J85C7Y12G8P8W8K55Q5Y","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/alert_notes/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"alert_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.alert_note`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"alert_note","name__orig":"alert_note","Name":"AlertNote","name_":"alert_note","name-":"alert-note","NAME":"ALERT_NOTE","index$":3}, {"active":true,"entity":"alert_note","key$":"BasicAlertNoteFlow","kind":"basic","name":"BasicAlertNoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"alert_note_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"alert_note_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"alert_note_ref01","srcdatavar":"alert_note_ref01_data","suffix":"_up0","textfield":"alert_group_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_note_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"alert_note_ref01","srcdatavar":"alert_note_ref01_data","suffix":"_dt0"},"m":{"id":"alert_note01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-alert_note_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"alert_note_ref01","suffix":"_rm0"},"m":{"id":"alert_note01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"alert_note_ref01"}}],"index$":5}]}, 'AlertNote', {"POST /v1/alert_notes":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"alert_group_id":"01HB9Z8WANK6P870EA6S7TK1DS","alert_id":"01FCNDV6P870EA6S7TK1DSYDG0","content":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n"},"schema":{"example":{"alert_group_id":"01HB9Z8WANK6P870EA6S7TK1DS","alert_id":"01FCNDV6P870EA6S7TK1DSYDG0","content":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n"},"properties":{"alert_group_id":{"description":"ID of the alert group to add the note to. Provide exactly one of alert_id or alert_group_id.","example":"01HB9Z8WANK6P870EA6S7TK1DS","type":"string","key$":"alert_group_id"},"alert_id":{"description":"ID of the alert to add the note to. Provide exactly one of alert_id or alert_group_id.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string","key$":"alert_id"},"content":{"description":"Markdown body of the note","example":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n","type":"string","key$":"content"}},"required":["content"],"type":"object","x-ref":"#/components/schemas/AlertNotesCreatePayloadV1","index$":1}}},"required":true},"parameters":[]},"GET /v1/alert_notes":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"ID of the alert to list notes for. Provide exactly one of alert_id or alert_group_id.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"alert_id","schema":{"description":"ID of the alert to list notes for. Provide exactly one of alert_id or alert_group_id.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"ID of the alert group to list notes for. Provide exactly one of alert_id or alert_group_id.","example":"01HB9Z8WANK6P870EA6S7TK1DS","in":"query","name":"alert_group_id","schema":{"description":"ID of the alert group to list notes for. Provide exactly one of alert_id or alert_group_id.","example":"01HB9Z8WANK6P870EA6S7TK1DS","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":2},{"allowEmptyValue":true,"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"after","schema":{"description":"An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":3}]},"GET /v1/alert_notes/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","type":"string"},"index$":0}]},"DELETE /v1/alert_notes/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","type":"string"},"index$":0}]},"PUT /v1/alert_notes/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"content":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n"},"schema":{"example":{"content":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n"},"properties":{"content":{"description":"Markdown body of the note","example":"Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n","type":"string","key$":"content"}},"required":["content"],"type":"object","x-ref":"#/components/schemas/AlertNotesUpdatePayloadV1","index$":1}}},"required":true},"parameters":[{"description":"ID of the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","in":"path","name":"id","required":true,"schema":{"description":"ID of the alert note","example":"01J1X9J85C7Y12G8P8W8K55Q5Y","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const alert_note_ref01_ent = client.AlertNote()
    let alert_note_ref01_data = setup.data.new.alert_note['alert_note_ref01']

    alert_note_ref01_data = (await alert_note_ref01_ent.create(alert_note_ref01_data)).data()
    assert(null != alert_note_ref01_data.id)


    // LIST
    const alert_note_ref01_match = {}

    const alert_note_ref01_list = (await alert_note_ref01_ent.list(alert_note_ref01_match)).map((e) => e.data())

    assert(!isempty(select(alert_note_ref01_list, { id: alert_note_ref01_data.id })))


    // UPDATE
    const alert_note_ref01_data_up0 = {}
    alert_note_ref01_data_up0.id = alert_note_ref01_data.id

    const alert_note_ref01_markdef_up0 = { name: 'alert_group_id', value: 'Mark01-alert_note_ref01_' + setup.now }
    alert_note_ref01_data_up0 [alert_note_ref01_markdef_up0.name] = alert_note_ref01_markdef_up0.value

    const alert_note_ref01_resdata_up0 = (await alert_note_ref01_ent.update(alert_note_ref01_data_up0)).data()
    assert(alert_note_ref01_resdata_up0.id === alert_note_ref01_data_up0.id)

    assert(alert_note_ref01_resdata_up0[alert_note_ref01_markdef_up0.name] === alert_note_ref01_markdef_up0.value)


    // LOAD
    const alert_note_ref01_match_dt0 = {}
    alert_note_ref01_match_dt0.id = alert_note_ref01_data.id
    const alert_note_ref01_data_dt0 = (await alert_note_ref01_ent.load(alert_note_ref01_match_dt0)).data()
    assert(alert_note_ref01_data_dt0.id === alert_note_ref01_data.id)


    // REMOVE
    const alert_note_ref01_match_rm0 = {}
    alert_note_ref01_match_rm0.id = alert_note_ref01_data.id
    await alert_note_ref01_ent.remove(alert_note_ref01_match_rm0)
  

    // LIST
    const alert_note_ref01_match_rt0 = {}

    const alert_note_ref01_list_rt0 = (await alert_note_ref01_ent.list(alert_note_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(alert_note_ref01_list_rt0, { id: alert_note_ref01_data.id })))


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
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ALERT_NOTE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ALERT_NOTE_ENTID']
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
  

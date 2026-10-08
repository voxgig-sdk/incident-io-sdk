
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


describe('SeverityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Severity()
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
    PreSpec() { throw new Error('severity hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).Severity().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).Severity()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Severity().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of IncidentIoSDK.test().Severity().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Severity().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Severity().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Severity().list({"created_at":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the action was created","t":"`$STRING`","key$":"created_at","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Description of the severity","t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the severity","t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name of the severity","t":"`$STRING`","key$":"name","index$":3},"rank":{"a":true,"fo":"int64","h":"Rank","n":"rank","op":{"create":{"req":false,"type":"`$INTEGER`"},"update":{"req":false,"type":"`$INTEGER`"}},"r":true,"sh":"Rank to help sort severities (lower numbers are less severe)","t":"`$INTEGER`","key$":"rank","index$":4},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When the action was last updated","t":"`$STRING`","key$":"updated_at","index$":5}},"id":{"field":"id","name":"id"},"name":"severity","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["description","name","rank"],"co":{"id":"POST /v1/severities","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/severities","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"severities"}],"t":{"req":"`reqdata`","res":"`body.severity`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/severities","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/severities","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"severities"}],"t":{"req":"`reqdata`","res":"`body.severities`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/severities/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/severities/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"severities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.severity`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["description","name","rank"],"co":{"id":"PUT /v1/severities/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/severities/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"severities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.severity`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"severity","name__orig":"severity","Name":"Severity","name_":"severity","name-":"severity","NAME":"SEVERITY","index$":93}, {"active":true,"entity":"severity","key$":"BasicSeverityFlow","kind":"basic","name":"BasicSeverityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"severity_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"severity_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"severity_ref01","srcdatavar":"severity_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-severity_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"severity_ref01","srcdatavar":"severity_ref01_data","suffix":"_dt0"},"m":{"id":"severity01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-severity_ref01"}}],"index$":3}]}, 'Severity', {"POST /v1/severities":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"Issues with **low impact**.","name":"Minor","rank":1},"schema":{"example":{"description":"Issues with **low impact**.","name":"Minor","rank":1},"properties":{"description":{"description":"Description of the severity","example":"Issues with **low impact**.","type":"string","key$":"description"},"name":{"description":"Human readable name of the severity","example":"Minor","maxLength":50,"type":"string","key$":"name"},"rank":{"description":"Rank to help sort severities (lower numbers are less severe)","example":1,"format":"int64","type":"integer","key$":"rank"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/SeveritiesCreatePayloadV1","index$":1}}},"required":true},"parameters":[]},"GET /v1/severities":{"protocol":"http","parameters":[]},"GET /v1/severities/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier of the severity","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier of the severity","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v1/severities/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"Issues with **low impact**.","name":"Minor","rank":1},"schema":{"example":{"description":"Issues with **low impact**.","name":"Minor","rank":1},"properties":{"description":{"description":"Description of the severity","example":"Issues with **low impact**.","type":"string","key$":"description"},"name":{"description":"Human readable name of the severity","example":"Minor","maxLength":50,"type":"string","key$":"name"},"rank":{"description":"Rank to help sort severities (lower numbers are less severe)","example":1,"format":"int64","type":"integer","key$":"rank"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/SeveritiesUpdatePayloadV1","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier of the severity","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier of the severity","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const severity_ref01_ent = client.Severity()
    let severity_ref01_data = setup.data.new.severity['severity_ref01']

    severity_ref01_data = (await severity_ref01_ent.create(severity_ref01_data)).data()
    assert(null != severity_ref01_data.id)


    // LIST
    const severity_ref01_match = {}

    const severity_ref01_list = (await severity_ref01_ent.list(severity_ref01_match)).map((e) => e.data())

    assert(!isempty(select(severity_ref01_list, { id: severity_ref01_data.id })))


    // UPDATE
    const severity_ref01_data_up0 = {}
    severity_ref01_data_up0.id = severity_ref01_data.id

    const severity_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-severity_ref01_' + setup.now }
    severity_ref01_data_up0 [severity_ref01_markdef_up0.name] = severity_ref01_markdef_up0.value

    const severity_ref01_resdata_up0 = (await severity_ref01_ent.update(severity_ref01_data_up0)).data()
    assert(severity_ref01_resdata_up0.id === severity_ref01_data_up0.id)

    assert(severity_ref01_resdata_up0[severity_ref01_markdef_up0.name] === severity_ref01_markdef_up0.value)


    // LOAD
    const severity_ref01_match_dt0 = {}
    severity_ref01_match_dt0.id = severity_ref01_data.id
    const severity_ref01_data_dt0 = (await severity_ref01_ent.load(severity_ref01_match_dt0)).data()
    assert(severity_ref01_data_dt0.id === severity_ref01_data.id)


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
      '../../../../.sdk/test/entity/severity/SeverityTestData.json')

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
    ['severity01','severity02','severity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_SEVERITY_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_SEVERITY_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_SEVERITY_ENTID']
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
  

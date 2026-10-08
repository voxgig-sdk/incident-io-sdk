
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


describe('IdentityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.Identity()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Identity().load({"dashboard_url":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dashboard_url":{"a":true,"h":"Dashboard Url","n":"dashboard_url","r":true,"sh":"The dashboard URL for this organisation","t":"`$STRING`","key$":"dashboard_url","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name assigned to the current API Key","t":"`$STRING`","key$":"name","index$":1},"roles":{"a":true,"h":"Roles","n":"roles","r":true,"sh":"Which roles have been enabled for this key","t":"`$ARRAY`","key$":"roles","index$":2},"team_roles":{"a":true,"h":"Team Roles","n":"team_roles","r":true,"sh":"If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array.","t":"`$ARRAY`","key$":"team_roles","index$":3},"teams":{"a":true,"h":"Teams","n":"teams","r":true,"sh":"Teams that this API key is scoped to.","t":"`$ARRAY`","key$":"teams","index$":4}},"name":"identity","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/identity","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/identity","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"identity"}],"t":{"req":"`reqdata`","res":"`body.identity`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"identity","name__orig":"identity","Name":"Identity","name_":"identity","name-":"identity","NAME":"IDENTITY","index$":40}, {"active":true,"entity":"identity","key$":"BasicIdentityFlow","kind":"basic","name":"BasicIdentityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"identity_ref01","srcdatavar":"identity_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-identity_ref01"}}],"index$":0}]}, 'Identity', {"GET /v1/identity":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let identity_ref01_data = Object.values(setup.data.existing.identity)[0]

    // LOAD
    const identity_ref01_ent = client.Identity()
    const identity_ref01_match_dt0 = {}
    const identity_ref01_data_dt0 = (await identity_ref01_ent.load(identity_ref01_match_dt0)).data()
    assert(null != identity_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/identity/IdentityTestData.json')

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
    ['identity01','identity02','identity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_IDENTITY_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_IDENTITY_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_IDENTITY_ENTID']
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
  


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


describe('IpAllowlistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IpAllowlist()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IpAllowlist().load({"enabled":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allowlist":{"a":true,"h":"Allowlist","n":"allowlist","r":true,"sh":"A list of IP addresses or CIDR prefixes to allow","t":"`$ARRAY`","key$":"allowlist","index$":0},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":true,"sh":"Whether this IP allowlist is enabled or not","t":"`$BOOLEAN`","key$":"enabled","index$":1},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"sh":"The time this allowlist was last updated","t":"`$STRING`","key$":"updated_at","index$":2},"version":{"a":true,"fo":"int64","h":"Version","n":"version","r":true,"sh":"The version of this IP allowlist","t":"`$INTEGER`","key$":"version","index$":3}},"name":"ip_allowlist","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/ip_allowlists","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/ip_allowlists","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"ip_allowlists"}],"t":{"req":"`reqdata`","res":"`body.ip_allowlist`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["allowlist","enabled","version"],"co":{"id":"PUT /v1/ip_allowlists","source":"openapi3","version":2},"g":{},"k":"http","m":"PUT","o":"/v1/ip_allowlists","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"ip_allowlists"}],"t":{"req":"`reqdata`","res":"`body.ip_allowlist`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"ip_allowlist","name__orig":"ip_allowlist","Name":"IpAllowlist","name_":"ip_allowlist","name-":"ip-allowlist","NAME":"IP_ALLOWLIST","index$":59}, {"active":true,"entity":"ip_allowlist","key$":"BasicIpAllowlistFlow","kind":"basic","name":"BasicIpAllowlistFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ip_allowlist_ref01","srcdatavar":"ip_allowlist_ref01_data","suffix":"_up0","textfield":"updated_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ip_allowlist_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ip_allowlist_ref01","srcdatavar":"ip_allowlist_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ip_allowlist_ref01"}}],"index$":1}]}, 'IpAllowlist', {"GET /v1/ip_allowlists":{"protocol":"http","parameters":[]},"PUT /v1/ip_allowlists":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"allowlist":[{"label":"London HQ","value":"192.0.2.0"}],"enabled":true,"version":1},"schema":{"example":{"allowlist":[{"label":"London HQ","value":"192.0.2.0"}],"enabled":true,"version":1},"properties":{"allowlist":{"description":"A list of IP addresses or CIDR prefixes to allow","example":[{"label":"London HQ","value":"192.0.2.0"}],"items":{"example":{"label":"London HQ","value":"192.0.2.0"},"properties":{"label":{"description":"A label to help identify this IP or prefix","example":"London HQ","type":"string"},"value":{"description":"An IP address or a CIDR IP prefix to allow","example":"192.0.2.0","type":"string"}},"required":["value"],"type":"object","x-ref":"#/components/schemas/IPAllowlistItemV1"},"type":"array","key$":"allowlist"},"enabled":{"description":"Whether this IP allowlist is enabled or not","example":true,"type":"boolean","key$":"enabled"},"version":{"description":"The version of this IP allowlist","example":1,"format":"int64","type":"integer","key$":"version"}},"required":["version","enabled","allowlist"],"type":"object","x-ref":"#/components/schemas/IPAllowlistsUpdateIPAllowlistPayloadV1","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ip_allowlist_ref01_data = Object.values(setup.data.existing.ip_allowlist)[0]

    // UPDATE
    const ip_allowlist_ref01_ent = client.IpAllowlist()
    const ip_allowlist_ref01_data_up0 = {}

    const ip_allowlist_ref01_markdef_up0 = { name: 'updated_at', value: 'Mark01-ip_allowlist_ref01_' + setup.now }
    ip_allowlist_ref01_data_up0 [ip_allowlist_ref01_markdef_up0.name] = ip_allowlist_ref01_markdef_up0.value

    const ip_allowlist_ref01_resdata_up0 = (await ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0)).data()
    assert(null != ip_allowlist_ref01_resdata_up0)

    assert(ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0.name] === ip_allowlist_ref01_markdef_up0.value)


    // LOAD
    const ip_allowlist_ref01_match_dt0 = {}
    const ip_allowlist_ref01_data_dt0 = (await ip_allowlist_ref01_ent.load(ip_allowlist_ref01_match_dt0)).data()
    assert(null != ip_allowlist_ref01_data_dt0)


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
      '../../../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json')

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
    ['ip_allowlist01','ip_allowlist02','ip_allowlist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID']
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
  

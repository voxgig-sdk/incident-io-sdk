
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


describe('IncidentTeamMembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTeamMembership()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTeamMembership().create({"incident_id":1,"team_id":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"t":"`$STRING`","key$":"incident_id","index$":0},"team_id":{"a":true,"h":"Team Id","n":"team_id","r":true,"t":"`$STRING`","key$":"team_id","index$":1}},"name":"incident_team_membership","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["incident_id","team_id"],"co":{"id":"POST /v1/incident_team_memberships","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/incident_team_memberships","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_team_memberships"}],"t":{"req":"`reqdata`","res":"`body.incident_team_membership`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"incident_team_membership","name__orig":"incident_team_membership","Name":"IncidentTeamMembership","name_":"incident_team_membership","name-":"incident-team-membership","NAME":"INCIDENT_TEAM_MEMBERSHIP","index$":51}, {"active":true,"entity":"incident_team_membership","key$":"BasicIncidentTeamMembershipFlow","kind":"basic","name":"BasicIncidentTeamMembershipFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_team_membership_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'IncidentTeamMembership', {"POST /v1/incident_team_memberships":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","team_id":"01FCQSP07Z74QMMYPDDGQB9FTG"},"schema":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","team_id":"01FCQSP07Z74QMMYPDDGQB9FTG"},"properties":{"incident_id":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"},"team_id":{"example":"01FCQSP07Z74QMMYPDDGQB9FTG","type":"string","key$":"team_id"}},"required":["team_id","incident_id"],"type":"object","x-ref":"#/components/schemas/IncidentTeamMembershipsCreatePayloadV1","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_team_membership_ref01_ent = client.IncidentTeamMembership()
    let incident_team_membership_ref01_data = setup.data.new.incident_team_membership['incident_team_membership_ref01']

    incident_team_membership_ref01_data = (await incident_team_membership_ref01_ent.create(incident_team_membership_ref01_data)).data()
    assert(null != incident_team_membership_ref01_data)


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
      '../../../../.sdk/test/entity/incident_team_membership/IncidentTeamMembershipTestData.json')

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
    ['incident_team_membership01','incident_team_membership02','incident_team_membership03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIP_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIP_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIP_ENTID']
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
  

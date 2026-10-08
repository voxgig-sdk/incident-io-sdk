

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


describe('IncidentTeamMembershipsV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTeamMembershipsV1()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTeamMembershipsV1().create({"incident_id":1,"team_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_team_memberships_v1.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"Revoke team access to this incident","t":"`$STRING`","key$":"incident_id","index$":0},"team_id":{"a":true,"h":"Team Id","n":"team_id","r":true,"t":"`$STRING`","key$":"team_id","index$":1}},"name":"incident_team_memberships_v1","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["incident_id","team_id"],"co":{"id":"POST /v1/incident_team_memberships/actions/revoke","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/incident_team_memberships/actions/revoke","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"incident_team_memberships"},{"lit":"actions"},{"lit":"revoke"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"incident_team_memberships_v1","name__orig":"incident_team_memberships_v1","Name":"IncidentTeamMembershipsV1","name_":"incident_team_memberships_v1","name-":"incident-team-memberships-v1","NAME":"INCIDENT_TEAM_MEMBERSHIPS_V1","index$":52}, {"active":true,"entity":"incident_team_memberships_v1","key$":"BasicIncidentTeamMembershipsV1Flow","kind":"basic","name":"BasicIncidentTeamMembershipsV1Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_team_memberships_v1_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'IncidentTeamMembershipsV1', {"POST /v1/incident_team_memberships/actions/revoke":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","team_id":"01FCQSP07Z74QMMYPDDGQB9FTG"},"schema":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","team_id":"01FCQSP07Z74QMMYPDDGQB9FTG"},"properties":{"incident_id":{"description":"Revoke team access to this incident","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"},"team_id":{"example":"01FCQSP07Z74QMMYPDDGQB9FTG","type":"string","key$":"team_id"}},"required":["team_id","incident_id"],"type":"object","x-ref":"#/components/schemas/IncidentTeamMembershipsRevokePayloadV1","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_team_memberships_v1_ref01_ent = client.IncidentTeamMembershipsV1()
    let incident_team_memberships_v1_ref01_data = setup.data.new.incident_team_memberships_v1['incident_team_memberships_v1_ref01']

    incident_team_memberships_v1_ref01_data = (await incident_team_memberships_v1_ref01_ent.create(incident_team_memberships_v1_ref01_data)).data()
    assert(null != incident_team_memberships_v1_ref01_data)


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
      '../../../../.sdk/test/entity/incident_team_memberships_v1/IncidentTeamMembershipsV1TestData.json')

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
    ['incident_team_memberships_v101','incident_team_memberships_v102','incident_team_memberships_v103'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIPS_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIPS_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TEAM_MEMBERSHIPS_V1_ENTID']
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
  

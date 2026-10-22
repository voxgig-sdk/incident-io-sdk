

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


describe('FollowUpsCreateFromLinkResultV3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.FollowUpsCreateFromLinkResultV3()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.FollowUpsCreateFromLinkResultV3().create({"incident_id":1,"url":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'follow_ups_create_from_link_result_v3.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"Unique identifier of the incident the follow-up belongs to","t":"`$STRING`","key$":"incident_id","index$":0},"url":{"a":true,"h":"Url","n":"url","r":true,"sh":"URL of the issue in the external provider","t":"`$STRING`","key$":"url","index$":1}},"name":"follow_ups_create_from_link_result_v3","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["incident_id","url"],"co":{"id":"POST /v3/follow_ups/actions/create_from_link","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v3/follow_ups/actions/create_from_link","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"follow_ups"},{"lit":"actions"},{"lit":"create_from_link"}],"t":{"req":"`reqdata`","res":"`body.follow_up`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"follow_ups_create_from_link_result_v3","name__orig":"follow_ups_create_from_link_result_v3","Name":"FollowUpsCreateFromLinkResultV3","name_":"follow_ups_create_from_link_result_v3","name-":"follow-ups-create-from-link-result-v3","NAME":"FOLLOW_UPS_CREATE_FROM_LINK_RESULT_V3","index$":36}, {"active":true,"entity":"follow_ups_create_from_link_result_v3","key$":"BasicFollowUpsCreateFromLinkResultV3Flow","kind":"basic","name":"BasicFollowUpsCreateFromLinkResultV3Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"follow_ups_create_from_link_result_v3_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'FollowUpsCreateFromLinkResultV3', {"POST /v3/follow_ups/actions/create_from_link":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","url":"https://linear.app/incident/issue/INC-123"},"schema":{"example":{"incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","url":"https://linear.app/incident/issue/INC-123"},"properties":{"incident_id":{"description":"Unique identifier of the incident the follow-up belongs to","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"},"url":{"description":"URL of the issue in the external provider","example":"https://linear.app/incident/issue/INC-123","type":"string","key$":"url"}},"required":["incident_id","url"],"type":"object","x-ref":"#/components/schemas/FollowUpsCreateFromLinkPayloadV3","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const follow_ups_create_from_link_result_v3_ref01_ent = client.FollowUpsCreateFromLinkResultV3()
    let follow_ups_create_from_link_result_v3_ref01_data = setup.data.new.follow_ups_create_from_link_result_v3['follow_ups_create_from_link_result_v3_ref01']

    follow_ups_create_from_link_result_v3_ref01_data = (await follow_ups_create_from_link_result_v3_ref01_ent.create(follow_ups_create_from_link_result_v3_ref01_data)).data()
    assert(null != follow_ups_create_from_link_result_v3_ref01_data)


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
      '../../../../.sdk/test/entity/follow_ups_create_from_link_result_v3/FollowUpsCreateFromLinkResultV3TestData.json')

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
    ['follow_ups_create_from_link_result_v301','follow_ups_create_from_link_result_v302','follow_ups_create_from_link_result_v303'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_FOLLOW_UPS_CREATE_FROM_LINK_RESULT_V3_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_FOLLOW_UPS_CREATE_FROM_LINK_RESULT_V3_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_FOLLOW_UPS_CREATE_FROM_LINK_RESULT_V3_ENTID']
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
  

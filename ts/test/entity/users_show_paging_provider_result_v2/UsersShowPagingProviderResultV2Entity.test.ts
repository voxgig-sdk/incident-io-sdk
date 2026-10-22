

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


describe('UsersShowPagingProviderResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.UsersShowPagingProviderResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.UsersShowPagingProviderResultV2().load({"user_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'users_show_paging_provider_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"preferred_escalation_provider":{"a":true,"h":"Preferred Escalation Provider","n":"preferred_escalation_provider","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The user's effective escalation provider.","t":"`$STRING`","key$":"preferred_escalation_provider","index$":0}},"name":"users_show_paging_provider_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["preferred_escalation_provider"],"co":{"id":"POST /v2/users/{user_id}/paging_provider","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/users/{user_id}/paging_provider","q":{"exist":["user_id"]},"r":{},"s":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"paging_provider"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/users/{user_id}/paging_provider","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/users/{user_id}/paging_provider","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"paging_provider"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"users_show_paging_provider_result_v2","name__orig":"users_show_paging_provider_result_v2","Name":"UsersShowPagingProviderResultV2","name_":"users_show_paging_provider_result_v2","name-":"users-show-paging-provider-result-v2","NAME":"USERS_SHOW_PAGING_PROVIDER_RESULT_V2","index$":102}, {"active":true,"entity":"users_show_paging_provider_result_v2","key$":"BasicUsersShowPagingProviderResultV2Flow","kind":"basic","name":"BasicUsersShowPagingProviderResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"users_show_paging_provider_result_v2_ref01"},"m":{"user_id":"user01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"users_show_paging_provider_result_v2_ref01","srcdatavar":"users_show_paging_provider_result_v2_ref01_data","suffix":"_dt0"},"m":{"id":"users_show_paging_provider_result_v201"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-users_show_paging_provider_result_v2_ref01"}}],"index$":1}]}, 'UsersShowPagingProviderResultV2', {"POST /v2/users/{user_id}/paging_provider":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"preferred_escalation_provider":"native"},"schema":{"example":{"preferred_escalation_provider":"native"},"properties":{"preferred_escalation_provider":{"description":"The preferred escalation provider for the user.","enum":["native","opsgenie","pagerduty","splunk_on_call"],"example":"native","type":"string","key$":"preferred_escalation_provider"}},"required":["preferred_escalation_provider"],"type":"object","x-ref":"#/components/schemas/UsersUpdatePagingProviderPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The ID of the user to update.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"user_id","required":true,"schema":{"description":"The ID of the user to update.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"GET /v2/users/{user_id}/paging_provider":{"protocol":"http","parameters":[{"description":"The ID of the user.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"user_id","required":true,"schema":{"description":"The ID of the user.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const users_show_paging_provider_result_v2_ref01_ent = client.UsersShowPagingProviderResultV2()
    let users_show_paging_provider_result_v2_ref01_data = setup.data.new.users_show_paging_provider_result_v2['users_show_paging_provider_result_v2_ref01']
    users_show_paging_provider_result_v2_ref01_data['user_id'] = setup.idmap['user01']

    users_show_paging_provider_result_v2_ref01_data = (await users_show_paging_provider_result_v2_ref01_ent.create(users_show_paging_provider_result_v2_ref01_data)).data()
    assert(null != users_show_paging_provider_result_v2_ref01_data)



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
      '../../../../.sdk/test/entity/users_show_paging_provider_result_v2/UsersShowPagingProviderResultV2TestData.json')

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
    ['users_show_paging_provider_result_v201','users_show_paging_provider_result_v202','users_show_paging_provider_result_v203','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_USERS_SHOW_PAGING_PROVIDER_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_USERS_SHOW_PAGING_PROVIDER_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_USERS_SHOW_PAGING_PROVIDER_RESULT_V2_ENTID']
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
  

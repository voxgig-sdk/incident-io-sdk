

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


describe('EscalationsCheckEscalationPermissionsResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.EscalationsCheckEscalationPermissionsResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EscalationsCheckEscalationPermissionsResultV2().create({"escalation_id":1,"user_ids":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'escalations_check_escalation_permissions_result_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"response_options":{"a":true,"h":"Response Options","n":"response_options","r":true,"sh":"The response options available to each requested user, in the same order as the request.","t":"`$ARRAY`","key$":"response_options","index$":0},"user_ids":{"a":true,"h":"User Ids","n":"user_ids","r":true,"sh":"The IDs of the users to check response options for","t":"`$ARRAY`","key$":"user_ids","index$":1}},"name":"escalations_check_escalation_permissions_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["user_ids"],"co":{"id":"POST /v2/escalations/{escalation_id}/actions/check_permissions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"param","n":"escalation_id","or":"escalation_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/escalations/{escalation_id}/actions/check_permissions","q":{"exist":["escalation_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"escalations"},{"var":"escalation_id"},{"lit":"actions"},{"lit":"check_permissions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.escalation"]]},"key$":"escalations_check_escalation_permissions_result_v2","name__orig":"escalations_check_escalation_permissions_result_v2","Name":"EscalationsCheckEscalationPermissionsResultV2","name_":"escalations_check_escalation_permissions_result_v2","name-":"escalations-check-escalation-permissions-result-v2","NAME":"ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2","index$":28}, {"active":true,"entity":"escalations_check_escalation_permissions_result_v2","key$":"BasicEscalationsCheckEscalationPermissionsResultV2Flow","kind":"basic","name":"BasicEscalationsCheckEscalationPermissionsResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"escalations_check_escalation_permissions_result_v2_ref01"},"m":{"escalation_id":"escalation01"},"o":"create","s":[],"v":[],"index$":0}]}, 'EscalationsCheckEscalationPermissionsResultV2', {"POST /v2/escalations/{escalation_id}/actions/check_permissions":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"schema":{"example":{"user_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"properties":{"user_ids":{"description":"The IDs of the users to check response options for","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"user_ids"}},"required":["user_ids"],"type":"object","x-ref":"#/components/schemas/EscalationsCheckEscalationPermissionsPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"The ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"path","name":"escalation_id","required":true,"schema":{"description":"The ID of the escalation","example":"01G0J1EXE7AXZ2C93K61WBPYEH","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const escalations_check_escalation_permissions_result_v2_ref01_ent = client.EscalationsCheckEscalationPermissionsResultV2()
    let escalations_check_escalation_permissions_result_v2_ref01_data = setup.data.new.escalations_check_escalation_permissions_result_v2['escalations_check_escalation_permissions_result_v2_ref01']
    escalations_check_escalation_permissions_result_v2_ref01_data['escalation_id'] = setup.idmap['escalation01']

    escalations_check_escalation_permissions_result_v2_ref01_data = (await escalations_check_escalation_permissions_result_v2_ref01_ent.create(escalations_check_escalation_permissions_result_v2_ref01_data)).data()
    assert(null != escalations_check_escalation_permissions_result_v2_ref01_data)


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
      '../../../../.sdk/test/entity/escalations_check_escalation_permissions_result_v2/EscalationsCheckEscalationPermissionsResultV2TestData.json')

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
    ['escalations_check_escalation_permissions_result_v201','escalations_check_escalation_permissions_result_v202','escalations_check_escalation_permissions_result_v203','escalation01','escalation02','escalation03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID']
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
  

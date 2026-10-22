

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


describe('PolicyFindingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PolicyFinding()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('policy_finding hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).PolicyFinding().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).PolicyFinding()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.PolicyFinding().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().PolicyFinding().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.PolicyFinding().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.PolicyFinding().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PolicyFinding().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'policy_finding.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"days":{"a":true,"fo":"int64","h":"Days","n":"days","r":false,"sh":"Days outside the policy's due date","t":"`$INTEGER`","key$":"days","index$":1},"debrief":{"a":true,"h":"Debrief","n":"debrief","r":true,"sh":"Set when policy_type is debrief.","t":"`$OBJECT`","key$":"debrief","index$":2},"dismissal":{"a":true,"h":"Dismissal","n":"dismissal","r":true,"t":"`$OBJECT`","key$":"dismissal","index$":3},"due_at":{"a":true,"fo":"date-time","h":"Due At","n":"due_at","r":false,"sh":"When this finding becomes overdue","t":"`$STRING`","key$":"due_at","index$":4},"follow_up":{"a":true,"h":"Follow Up","n":"follow_up","r":true,"sh":"Set when policy_type is follow_up.","t":"`$OBJECT`","key$":"follow_up","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique ID of the finding","t":"`$STRING`","key$":"id","index$":6},"last_checked_at":{"a":true,"fo":"date-time","h":"Last Checked At","n":"last_checked_at","r":true,"sh":"When this finding was last re-evaluated","t":"`$STRING`","key$":"last_checked_at","index$":7},"on_call_readiness":{"a":true,"h":"On Call Readiness","n":"on_call_readiness","r":true,"sh":"Set when policy_type is on_call_readiness.","t":"`$OBJECT`","key$":"on_call_readiness","index$":8},"policy_id":{"a":true,"h":"Policy Id","n":"policy_id","r":true,"sh":"The policy this finding was raised against","t":"`$STRING`","key$":"policy_id","index$":9},"policy_type":{"a":true,"h":"Policy Type","n":"policy_type","r":true,"sh":"Type of the policy this finding was raised against","t":"`$STRING`","key$":"policy_type","index$":10},"post_mortem":{"a":true,"h":"Post Mortem","n":"post_mortem","r":true,"sh":"Set when policy_type is post_mortem.","t":"`$OBJECT`","key$":"post_mortem","index$":11},"responsible_users":{"a":true,"h":"Responsible Users","n":"responsible_users","r":true,"sh":"Who is expected to resolve this finding","t":"`$ARRAY`","key$":"responsible_users","index$":12},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":true,"sh":"Set when policy_type is schedule.","t":"`$OBJECT`","key$":"schedule","index$":13},"shift_conflict":{"a":true,"h":"Shift Conflict","n":"shift_conflict","r":true,"sh":"Set when policy_type is shift_conflict.","t":"`$OBJECT`","key$":"shift_conflict","index$":14},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"Where this finding is in its lifecycle","t":"`$STRING`","key$":"state","index$":15},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":16},"vacation_conflict":{"a":true,"h":"Vacation Conflict","n":"vacation_conflict","r":true,"sh":"Set when policy_type is vacation_conflict.","t":"`$OBJECT`","key$":"vacation_conflict","index$":17}},"id":{"field":"id","name":"id"},"name":"policy_finding","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/policy_findings","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"01FDAG4SAP5TYPT98WGR2N7W91","k":"query","n":"policy_id","or":"policy_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/v2/policy_findings","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"policy_findings"}],"t":{"req":"`reqdata`","res":"`body.policy_findings`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/policy_findings/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/policy_findings/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"policy_findings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.policy_finding`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"policy_finding","name__orig":"policy_finding","Name":"PolicyFinding","name_":"policy_finding","name-":"policy-finding","NAME":"POLICY_FINDING","index$":73}, {"active":true,"entity":"policy_finding","key$":"BasicPolicyFindingFlow","kind":"basic","name":"BasicPolicyFindingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"policy_finding_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"policy_finding_ref01","srcdatavar":"policy_finding_ref01_data","suffix":"_dt0"},"m":{"id":"policy_finding01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-policy_finding_ref01"}}],"index$":1}]}, 'PolicyFinding', {"GET /v2/policy_findings":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Number of findings to return per page","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Number of findings to return per page","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":0},{"allowEmptyValue":true,"description":"The ID of the last finding on the previous page","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"The ID of the last finding on the previous page","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Only findings raised by this policy","example":"01FDAG4SAP5TYPT98WGR2N7W91","in":"query","name":"policy_id","schema":{"description":"Only findings raised by this policy","example":"01FDAG4SAP5TYPT98WGR2N7W91","type":"string"},"index$":2}]},"GET /v2/policy_findings/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the finding","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the finding","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let policy_finding_ref01_data = Object.values(setup.data.existing.policy_finding)[0] as any

    // LIST
    const policy_finding_ref01_ent = client.PolicyFinding()
    const policy_finding_ref01_match: any = {}

    const policy_finding_ref01_list = (await policy_finding_ref01_ent.list(policy_finding_ref01_match)).map((e: any) => e.data())


    // LOAD
    const policy_finding_ref01_match_dt0: any = {}
    policy_finding_ref01_match_dt0.id = policy_finding_ref01_data.id
    const policy_finding_ref01_data_dt0 = (await policy_finding_ref01_ent.load(policy_finding_ref01_match_dt0)).data()
    assert(policy_finding_ref01_data_dt0.id === policy_finding_ref01_data.id)


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
      '../../../../.sdk/test/entity/policy_finding/PolicyFindingTestData.json')

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
    ['policy_finding01','policy_finding02','policy_finding03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_POLICY_FINDING_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_POLICY_FINDING_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_POLICY_FINDING_ENTID']
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
  


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


describe('PolicyFindingsDismissResultV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.PolicyFindingsDismissResultV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PolicyFindingsDismissResultV2().create({"policy_finding_id":1,"created_at":"x","debrief":"x","dismissal":"x","follow_up":"x","id":"x","last_checked_at":"x","on_call_readiness":"x","policy_id":"x","policy_type":"x","post_mortem":"x","reason":"x","responsible_users":"x","schedule":"x","shift_conflict":"x","state":"x","updated_at":"x","vacation_conflict":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"days":{"a":true,"fo":"int64","h":"Days","n":"days","r":false,"sh":"Days outside the policy's due date","t":"`$INTEGER`","key$":"days","index$":1},"debrief":{"a":true,"h":"Debrief","n":"debrief","r":true,"sh":"Set when policy_type is debrief.","t":"`$OBJECT`","key$":"debrief","index$":2},"dismissal":{"a":true,"h":"Dismissal","n":"dismissal","r":true,"t":"`$OBJECT`","key$":"dismissal","index$":3},"due_at":{"a":true,"fo":"date-time","h":"Due At","n":"due_at","r":false,"sh":"When this finding becomes overdue","t":"`$STRING`","key$":"due_at","index$":4},"follow_up":{"a":true,"h":"Follow Up","n":"follow_up","r":true,"sh":"Set when policy_type is follow_up.","t":"`$OBJECT`","key$":"follow_up","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique ID of the finding","t":"`$STRING`","key$":"id","index$":6},"last_checked_at":{"a":true,"fo":"date-time","h":"Last Checked At","n":"last_checked_at","r":true,"sh":"When this finding was last re-evaluated","t":"`$STRING`","key$":"last_checked_at","index$":7},"on_call_readiness":{"a":true,"h":"On Call Readiness","n":"on_call_readiness","r":true,"sh":"Set when policy_type is on_call_readiness.","t":"`$OBJECT`","key$":"on_call_readiness","index$":8},"policy_id":{"a":true,"h":"Policy Id","n":"policy_id","r":true,"sh":"The policy this finding was raised against","t":"`$STRING`","key$":"policy_id","index$":9},"policy_type":{"a":true,"h":"Policy Type","n":"policy_type","r":true,"sh":"Type of the policy this finding was raised against","t":"`$STRING`","key$":"policy_type","index$":10},"post_mortem":{"a":true,"h":"Post Mortem","n":"post_mortem","r":true,"sh":"Set when policy_type is post_mortem.","t":"`$OBJECT`","key$":"post_mortem","index$":11},"reason":{"a":true,"h":"Reason","n":"reason","r":true,"sh":"Why this finding is being dismissed","t":"`$STRING`","key$":"reason","index$":12},"responsible_users":{"a":true,"h":"Responsible Users","n":"responsible_users","r":true,"sh":"Who is expected to resolve this finding","t":"`$ARRAY`","key$":"responsible_users","index$":13},"schedule":{"a":true,"h":"Schedule","n":"schedule","r":true,"sh":"Set when policy_type is schedule.","t":"`$OBJECT`","key$":"schedule","index$":14},"shift_conflict":{"a":true,"h":"Shift Conflict","n":"shift_conflict","r":true,"sh":"Set when policy_type is shift_conflict.","t":"`$OBJECT`","key$":"shift_conflict","index$":15},"state":{"a":true,"h":"State","n":"state","r":true,"sh":"Where this finding is in its lifecycle","t":"`$STRING`","key$":"state","index$":16},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":17},"vacation_conflict":{"a":true,"h":"Vacation Conflict","n":"vacation_conflict","r":true,"sh":"Set when policy_type is vacation_conflict.","t":"`$OBJECT`","key$":"vacation_conflict","index$":18}},"id":{"field":"id","name":"id"},"name":"policy_findings_dismiss_result_v2","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["reason"],"co":{"id":"POST /v2/policy_findings/{id}/actions/dismiss","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"policy_finding_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/v2/policy_findings/{id}/actions/dismiss","q":{"exist":["policy_finding_id"]},"r":{"param":{"id":"policy_finding_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"policy_findings"},{"var":"policy_finding_id"},{"lit":"actions"},{"lit":"dismiss"}],"t":{"req":"`reqdata`","res":"`body.policy_finding`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.policy_finding"]]},"key$":"policy_findings_dismiss_result_v2","name__orig":"policy_findings_dismiss_result_v2","Name":"PolicyFindingsDismissResultV2","name_":"policy_findings_dismiss_result_v2","name-":"policy-findings-dismiss-result-v2","NAME":"POLICY_FINDINGS_DISMISS_RESULT_V2","index$":81}, {"active":true,"entity":"policy_findings_dismiss_result_v2","key$":"BasicPolicyFindingsDismissResultV2Flow","kind":"basic","name":"BasicPolicyFindingsDismissResultV2Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"policy_findings_dismiss_result_v2_ref01"},"m":{"policy_finding_id":"policy_finding01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PolicyFindingsDismissResultV2', {"POST /v2/policy_findings/{id}/actions/dismiss":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"reason":"This incident is special."},"schema":{"example":{"reason":"This incident is special."},"properties":{"reason":{"description":"Why this finding is being dismissed","example":"This incident is special.","maxLength":1000,"type":"string","key$":"reason"}},"required":["reason"],"type":"object","x-ref":"#/components/schemas/PolicyFindingsDismissPayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the finding","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the finding","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const policy_findings_dismiss_result_v2_ref01_ent = client.PolicyFindingsDismissResultV2()
    let policy_findings_dismiss_result_v2_ref01_data = setup.data.new.policy_findings_dismiss_result_v2['policy_findings_dismiss_result_v2_ref01']
    policy_findings_dismiss_result_v2_ref01_data['policy_finding_id'] = setup.idmap['policy_finding01']

    policy_findings_dismiss_result_v2_ref01_data = (await policy_findings_dismiss_result_v2_ref01_ent.create(policy_findings_dismiss_result_v2_ref01_data)).data()
    assert(null != policy_findings_dismiss_result_v2_ref01_data.id)


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
      '../../../../.sdk/test/entity/policy_findings_dismiss_result_v2/PolicyFindingsDismissResultV2TestData.json')

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
    ['policy_findings_dismiss_result_v201','policy_findings_dismiss_result_v202','policy_findings_dismiss_result_v203','policy_finding01','policy_finding02','policy_finding03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID']
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
  



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


describe('OnCallNotificationRulePublicV2Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.OnCallNotificationRulePublicV2()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.OnCallNotificationRulePublicV2().list({"user_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'on_call_notification_rule_public_v2.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"app":{"a":true,"h":"App","n":"app","r":true,"t":"`$OBJECT`","key$":"app","index$":0},"delay_seconds":{"a":true,"fo":"int64","h":"Delay Seconds","n":"delay_seconds","r":false,"sh":"Delay in seconds before this rule activates.","t":"`$INTEGER`","key$":"delay_seconds","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this notification rule","t":"`$STRING`","key$":"id","index$":2},"method_target":{"a":true,"h":"Method Target","n":"method_target","r":true,"t":"`$OBJECT`","key$":"method_target","index$":3},"method_type":{"a":true,"h":"Method Type","n":"method_type","r":true,"sh":"The high-level type of notification method.","t":"`$STRING`","key$":"method_type","index$":4},"phone":{"a":true,"h":"Phone","n":"phone","r":true,"t":"`$OBJECT`","key$":"phone","index$":5},"rule_type":{"a":true,"h":"Rule Type","n":"rule_type","r":true,"sh":"The urgency level this rule applies to","t":"`$STRING`","key$":"rule_type","index$":6}},"id":{"field":"id","name":"id"},"name":"on_call_notification_rule_public_v2","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/users/{user_id}/notification_rules","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/users/{user_id}/notification_rules","q":{"exist":["user_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"users"},{"var":"user_id"},{"lit":"notification_rules"}],"t":{"req":"`reqdata`","res":"`body.notification_rules`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.user"]]},"key$":"on_call_notification_rule_public_v2","name__orig":"on_call_notification_rule_public_v2","Name":"OnCallNotificationRulePublicV2","name_":"on_call_notification_rule_public_v2","name-":"on-call-notification-rule-public-v2","NAME":"ON_CALL_NOTIFICATION_RULE_PUBLIC_V2","index$":63}, {"active":true,"entity":"on_call_notification_rule_public_v2","key$":"BasicOnCallNotificationRulePublicV2Flow","kind":"basic","name":"BasicOnCallNotificationRulePublicV2Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"user_id":"user01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"on_call_notification_rule_public_v2_ref01"}}],"index$":0}]}, 'OnCallNotificationRulePublicV2', {"GET /v2/users/{user_id}/notification_rules":{"protocol":"http","parameters":[{"description":"The ID of the user whose notification rules you want to list.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"user_id","required":true,"schema":{"description":"The ID of the user whose notification rules you want to list.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let on_call_notification_rule_public_v2_ref01_data = Object.values(setup.data.existing.on_call_notification_rule_public_v2)[0] as any

    // LIST
    const on_call_notification_rule_public_v2_ref01_ent = client.OnCallNotificationRulePublicV2()
    const on_call_notification_rule_public_v2_ref01_match: any = {}
    on_call_notification_rule_public_v2_ref01_match['user_id'] = setup.idmap['user01']

    const on_call_notification_rule_public_v2_ref01_list = (await on_call_notification_rule_public_v2_ref01_ent.list(on_call_notification_rule_public_v2_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/on_call_notification_rule_public_v2/OnCallNotificationRulePublicV2TestData.json')

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
    ['on_call_notification_rule_public_v201','on_call_notification_rule_public_v202','on_call_notification_rule_public_v203','user01','user02','user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID']
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
  

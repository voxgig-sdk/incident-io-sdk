

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


describe('OnCallNotificationPauseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.OnCallNotificationPause()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('on_call_notification_pause hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).OnCallNotificationPause().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).OnCallNotificationPause()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.OnCallNotificationPause().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().OnCallNotificationPause().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.OnCallNotificationPause().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.OnCallNotificationPause().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.OnCallNotificationPause().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'on_call_notification_pause.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"t":"`$STRING`","key$":"created_at","index$":0},"ends_at":{"a":true,"fo":"date-time","h":"Ends At","n":"ends_at","r":true,"sh":"When notifications resume","t":"`$STRING`","key$":"ends_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this notification pause","t":"`$STRING`","key$":"id","index$":2},"reason":{"a":true,"h":"Reason","n":"reason","r":false,"sh":"Free text reason for why notifications are paused, shown to teammates","t":"`$STRING`","key$":"reason","index$":3},"starts_at":{"a":true,"fo":"date-time","h":"Starts At","n":"starts_at","r":true,"sh":"When notifications stop being sent to the user","t":"`$STRING`","key$":"starts_at","index$":4},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"t":"`$STRING`","key$":"updated_at","index$":5},"user_id":{"a":true,"h":"User Id","n":"user_id","r":true,"sh":"The user whose on-call notifications are paused in this time window","t":"`$STRING`","key$":"user_id","index$":6}},"id":{"field":"id","name":"id"},"name":"on_call_notification_pause","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/on_call_notification_pauses","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"2021-08-17T00:00:00Z","k":"query","n":"from","or":"from","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"2021-08-24T00:00:00Z","k":"query","n":"to","or":"to","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/v2/on_call_notification_pauses","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"on_call_notification_pauses"}],"t":{"req":"`reqdata`","res":"`body.on_call_notification_pauses`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/on_call_notification_pauses/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/on_call_notification_pauses/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"on_call_notification_pauses"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.on_call_notification_pause`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"on_call_notification_pause","name__orig":"on_call_notification_pause","Name":"OnCallNotificationPause","name_":"on_call_notification_pause","name-":"on-call-notification-pause","NAME":"ON_CALL_NOTIFICATION_PAUSE","index$":57}, {"active":true,"entity":"on_call_notification_pause","key$":"BasicOnCallNotificationPauseFlow","kind":"basic","name":"BasicOnCallNotificationPauseFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"on_call_notification_pause_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"on_call_notification_pause_ref01","srcdatavar":"on_call_notification_pause_ref01_data","suffix":"_dt0"},"m":{"id":"on_call_notification_pause01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-on_call_notification_pause_ref01"}}],"index$":1}]}, 'OnCallNotificationPause', {"GET /v2/on_call_notification_pauses":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Only return pauses that end after this time. Defaults to now, so by default only active and upcoming pauses are returned.","example":"2021-08-17T00:00:00Z","in":"query","name":"from","schema":{"description":"Only return pauses that end after this time. Defaults to now, so by default only active and upcoming pauses are returned.","example":"2021-08-17T00:00:00Z","format":"date-time","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Only return pauses that start before this time","example":"2021-08-24T00:00:00Z","in":"query","name":"to","schema":{"description":"Only return pauses that start before this time","example":"2021-08-24T00:00:00Z","format":"date-time","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":2},{"allowEmptyValue":true,"description":"A pause's ID. This endpoint will return a list of pauses after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"A pause's ID. This endpoint will return a list of pauses after this ID in relation to the API response order.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":3}]},"GET /v2/on_call_notification_pauses/{id}":{"protocol":"http","parameters":[{"description":"The pause's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"The pause's ID","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let on_call_notification_pause_ref01_data = Object.values(setup.data.existing.on_call_notification_pause)[0] as any

    // LIST
    const on_call_notification_pause_ref01_ent = client.OnCallNotificationPause()
    const on_call_notification_pause_ref01_match: any = {}

    const on_call_notification_pause_ref01_list = (await on_call_notification_pause_ref01_ent.list(on_call_notification_pause_ref01_match)).map((e: any) => e.data())


    // LOAD
    const on_call_notification_pause_ref01_match_dt0: any = {}
    on_call_notification_pause_ref01_match_dt0.id = on_call_notification_pause_ref01_data.id
    const on_call_notification_pause_ref01_data_dt0 = (await on_call_notification_pause_ref01_ent.load(on_call_notification_pause_ref01_match_dt0)).data()
    assert(on_call_notification_pause_ref01_data_dt0.id === on_call_notification_pause_ref01_data.id)


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
      '../../../../.sdk/test/entity/on_call_notification_pause/OnCallNotificationPauseTestData.json')

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
    ['on_call_notification_pause01','on_call_notification_pause02','on_call_notification_pause03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_PAUSE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_PAUSE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_PAUSE_ENTID']
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
  

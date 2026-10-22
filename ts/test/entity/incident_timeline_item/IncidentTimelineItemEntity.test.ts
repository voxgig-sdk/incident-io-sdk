

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


describe('IncidentTimelineItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentTimelineItem()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_timeline_item hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentTimelineItem().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentTimelineItem()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentTimelineItem().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentTimelineItem().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentTimelineItem().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentTimelineItem().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentTimelineItem().list({"after":1,"incident_id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_timeline_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"activity_log_id":{"a":true,"h":"Activity Log Id","n":"activity_log_id","r":false,"sh":"ID of the activity log entry this item was promoted from.","t":"`$STRING`","key$":"activity_log_id","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this item was added to the timeline","t":"`$STRING`","key$":"created_at","index$":1},"creator":{"a":true,"h":"Creator","n":"creator","r":true,"t":"`$OBJECT`","key$":"creator","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Description of the timeline item, in markdown","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier of the timeline item","t":"`$STRING`","key$":"id","index$":4},"idempotency_key":{"a":true,"h":"Idempotency Key","n":"idempotency_key","r":true,"sh":"Unique string used to de-duplicate timeline item requests.","t":"`$STRING`","key$":"idempotency_key","index$":5},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":true,"sh":"Incident to add this item to","t":"`$STRING`","key$":"incident_id","index$":6},"timestamp":{"a":true,"fo":"date-time","h":"Timestamp","n":"timestamp","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"When the thing this item describes happened.","t":"`$STRING`","key$":"timestamp","index$":7},"title":{"a":true,"h":"Title","n":"title","op":{"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Title of the timeline item","t":"`$STRING`","key$":"title","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this item was last edited","t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"incident_timeline_item","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["description","idempotency_key","incident_id","timestamp","title"],"co":{"id":"POST /v2/incident_timeline_items","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/incident_timeline_items","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_timeline_items"}],"t":{"req":"`reqdata`","res":"`body.incident_timeline_item`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/incident_timeline_items","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"01G0J1EXE7AXZ2C93K61WBPYEH","k":"query","n":"incident_id","or":"incident_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/v2/incident_timeline_items","q":{"exist":["incident_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_timeline_items"}],"t":{"req":"`reqdata`","res":"`body.incident_timeline_items`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["description","timestamp","title"],"co":{"id":"PATCH /v2/incident_timeline_items/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/v2/incident_timeline_items/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_timeline_items"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_timeline_item`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"incident_timeline_item","name__orig":"incident_timeline_item","Name":"IncidentTimelineItem","name_":"incident_timeline_item","name-":"incident-timeline-item","NAME":"INCIDENT_TIMELINE_ITEM","index$":54}, {"active":true,"entity":"incident_timeline_item","key$":"BasicIncidentTimelineItemFlow","kind":"basic","name":"BasicIncidentTimelineItemFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_timeline_item_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_timeline_item_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"incident_timeline_item_ref01","srcdatavar":"incident_timeline_item_ref01_data","suffix":"_up0","textfield":"activity_log_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_timeline_item_ref01"}}],"v":[],"index$":2}]}, 'IncidentTimelineItem', {"POST /v2/incident_timeline_items":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"Rolled back **payments-api** to v411 after error rate hit 12%.","idempotency_key":"deploy-4f2c1b90","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","timestamp":"2026-09-01T15:30:00Z","title":"Rolled back payments-api"},"schema":{"example":{"description":"Rolled back **payments-api** to v411 after error rate hit 12%.","idempotency_key":"deploy-4f2c1b90","incident_id":"01FCNDV6P870EA6S7TK1DSYD5H","timestamp":"2026-09-01T15:30:00Z","title":"Rolled back payments-api"},"properties":{"description":{"description":"Description of the timeline item, in markdown","example":"Rolled back **payments-api** to v411 after error rate hit 12%.","type":"string","key$":"description"},"idempotency_key":{"description":"Unique string used to de-duplicate timeline item requests. Retrying with the same key returns the item the first request created, rather than adding a second one.","example":"deploy-4f2c1b90","minLength":1,"type":"string","key$":"idempotency_key"},"incident_id":{"description":"Incident to add this item to","example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string","key$":"incident_id"},"timestamp":{"description":"When the thing this item describes happened. This is where the item sits on the timeline, and can be in the past.","example":"2026-09-01T15:30:00Z","format":"date-time","type":"string","key$":"timestamp"},"title":{"description":"Title of the timeline item","example":"Rolled back payments-api","minLength":1,"type":"string","key$":"title"}},"required":["incident_id","timestamp","title","idempotency_key"],"type":"object","x-ref":"#/components/schemas/IncidentTimelineItemsCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/incident_timeline_items":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Incident whose timeline you want to list","example":"01G0J1EXE7AXZ2C93K61WBPYEH","in":"query","name":"incident_id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Integer number of records to return","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Integer number of records to return","example":25,"format":"int64","maximum":250,"minimum":1,"type":"integer"},"index$":1},{"allowEmptyValue":true,"description":"A timeline item's ID. This endpoint returns the items that follow it.","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"A timeline item's ID. This endpoint returns the items that follow it.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":2}]},"PATCH /v2/incident_timeline_items/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"Rolled back **payments-api** to v411 after error rate hit 12%.","timestamp":"2026-09-01T15:30:00Z","title":"Rolled back payments-api"},"schema":{"example":{"description":"Rolled back **payments-api** to v411 after error rate hit 12%.","timestamp":"2026-09-01T15:30:00Z","title":"Rolled back payments-api"},"properties":{"description":{"description":"Description of the timeline item, in markdown. Send an empty string to remove it.","example":"Rolled back **payments-api** to v411 after error rate hit 12%.","type":"string","key$":"description"},"timestamp":{"description":"When the thing this item describes happened. Only editable on a custom item.","example":"2026-09-01T15:30:00Z","format":"date-time","type":"string","key$":"timestamp"},"title":{"description":"Title of the timeline item","example":"Rolled back payments-api","minLength":1,"type":"string","key$":"title"}},"type":"object","x-ref":"#/components/schemas/IncidentTimelineItemsUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Timeline item to edit","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"example":"01FCNDV6P870EA6S7TK1DSYD5H","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_timeline_item_ref01_ent = client.IncidentTimelineItem()
    let incident_timeline_item_ref01_data = setup.data.new.incident_timeline_item['incident_timeline_item_ref01']

    incident_timeline_item_ref01_data = (await incident_timeline_item_ref01_ent.create(incident_timeline_item_ref01_data)).data()
    assert(null != incident_timeline_item_ref01_data.id)


    // LIST
    const incident_timeline_item_ref01_match: any = {}

    const incident_timeline_item_ref01_list = (await incident_timeline_item_ref01_ent.list(incident_timeline_item_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(incident_timeline_item_ref01_list, { id: incident_timeline_item_ref01_data.id })))


    // UPDATE
    const incident_timeline_item_ref01_data_up0: any = {}
    incident_timeline_item_ref01_data_up0.id = incident_timeline_item_ref01_data.id

    const incident_timeline_item_ref01_markdef_up0 = { name: 'activity_log_id', value: 'Mark01-incident_timeline_item_ref01_' + setup.now }
    ;(incident_timeline_item_ref01_data_up0 as any)[incident_timeline_item_ref01_markdef_up0.name] = incident_timeline_item_ref01_markdef_up0.value

    const incident_timeline_item_ref01_resdata_up0 = (await incident_timeline_item_ref01_ent.update(incident_timeline_item_ref01_data_up0)).data()
    assert(incident_timeline_item_ref01_resdata_up0.id === incident_timeline_item_ref01_data_up0.id)

    assert((incident_timeline_item_ref01_resdata_up0 as any)[incident_timeline_item_ref01_markdef_up0.name] === incident_timeline_item_ref01_markdef_up0.value)


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
      '../../../../.sdk/test/entity/incident_timeline_item/IncidentTimelineItemTestData.json')

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
    ['incident_timeline_item01','incident_timeline_item02','incident_timeline_item03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_TIMELINE_ITEM_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_TIMELINE_ITEM_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_TIMELINE_ITEM_ENTID']
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
  

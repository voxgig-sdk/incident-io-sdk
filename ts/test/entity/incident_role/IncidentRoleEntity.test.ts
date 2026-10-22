

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


describe('IncidentRoleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.IncidentRole()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('incident_role hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).IncidentRole().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).IncidentRole()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.IncidentRole().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().IncidentRole().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.IncidentRole().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.IncidentRole().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.IncidentRole().list({"created_at":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'incident_role.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the role was created","t":"`$STRING`","key$":"created_at","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Describes the purpose of the role","t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the role","t":"`$STRING`","key$":"id","index$":2},"instructions":{"a":true,"h":"Instructions","n":"instructions","r":true,"sh":"Provided to whoever is nominated for the role.","t":"`$STRING`","key$":"instructions","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human readable name of the incident role","t":"`$STRING`","key$":"name","index$":4},"role_type":{"a":true,"h":"Role Type","n":"role_type","r":true,"sh":"Type of incident role","t":"`$STRING`","key$":"role_type","index$":5},"shortform":{"a":true,"h":"Shortform","n":"shortform","r":true,"sh":"Short human readable name for Slack.","t":"`$STRING`","key$":"shortform","index$":6},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When the role was last updated","t":"`$STRING`","key$":"updated_at","index$":7}},"id":{"field":"id","name":"id"},"name":"incident_role","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["description","instructions","name","required","shortform"],"co":{"id":"POST /v1/incident_roles","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v1/incident_roles","q":{"$action":"v1"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_roles"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":0},{"a":true,"bf":["description","instructions","name","shortform"],"co":{"id":"POST /v2/incident_roles","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/incident_roles","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_roles"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/incident_roles","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/incident_roles","q":{"$action":"v1"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_roles"}],"t":{"req":"`reqdata`","res":"`body.incident_roles`"},"index$":0},{"a":true,"co":{"id":"GET /v2/incident_roles","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/incident_roles","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_roles"}],"t":{"req":"`reqdata`","res":"`body.incident_roles`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v1/incident_roles/{id}","q":{"$action":"v1","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":0},{"a":true,"co":{"id":"GET /v2/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/incident_roles/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v1/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v1/incident_roles/{id}","q":{"$action":"v1","exist":["id"]},"r":{},"s":[{"lit":"v1"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /v2/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/incident_roles/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["description","instructions","name","required","shortform"],"co":{"id":"PUT /v1/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v1/incident_roles/{id}","q":{"$action":"v1","exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":0},{"a":true,"bf":["description","instructions","name","shortform"],"co":{"id":"PUT /v2/incident_roles/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/incident_roles/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"incident_roles"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.incident_role`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"incident_role","name__orig":"incident_role","Name":"IncidentRole","name_":"incident_role","name-":"incident-role","NAME":"INCIDENT_ROLE","index$":47}, {"active":true,"entity":"incident_role","key$":"BasicIncidentRoleFlow","kind":"basic","name":"BasicIncidentRoleFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"incident_role_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"incident_role_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"incident_role_ref01","srcdatavar":"incident_role_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_role_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"incident_role_ref01","srcdatavar":"incident_role_ref01_data","suffix":"_dt0"},"m":{"id":"incident_role01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-incident_role_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"incident_role_ref01","suffix":"_rm0"},"m":{"id":"incident_role01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"incident_role_ref01"}}],"index$":5}]}, 'IncidentRole', {"POST /v1/incident_roles":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","required":false,"shortform":"lead"},"schema":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","required":false,"shortform":"lead"},"properties":{"description":{"description":"Describes the purpose of the role","example":"The person currently coordinating the incident","minLength":1,"type":"string"},"instructions":{"description":"Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.","example":"Take point on the incident; Make sure people are clear on responsibilities","type":"string"},"name":{"description":"Human readable name of the incident role","example":"Incident Lead","minLength":1,"type":"string"},"required":{"description":"DEPRECATED: this will always be false.","example":false,"type":"boolean"},"shortform":{"description":"Short human readable name for Slack. Note that this will be empty for the 'reporter' role.","example":"lead","type":"string"}},"required":["name","shortform","description","instructions","required"],"type":"object","x-ref":"#/components/schemas/IncidentRolesCreatePayloadV1"}}},"required":true},"parameters":[]},"POST /v2/incident_roles":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","shortform":"lead"},"schema":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","shortform":"lead"},"properties":{"description":{"description":"Describes the purpose of the role","example":"The person currently coordinating the incident","minLength":1,"type":"string","key$":"description"},"instructions":{"description":"Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.","example":"Take point on the incident; Make sure people are clear on responsibilities","type":"string","key$":"instructions"},"name":{"description":"Human readable name of the incident role","example":"Incident Lead","minLength":1,"type":"string","key$":"name"},"shortform":{"description":"Short human readable name for Slack. Note that this will be empty for the 'reporter' role.","example":"lead","type":"string","key$":"shortform"}},"required":["name","shortform","description","instructions"],"type":"object","x-ref":"#/components/schemas/IncidentRolesCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v1/incident_roles":{"protocol":"http","parameters":[]},"GET /v2/incident_roles":{"protocol":"http","parameters":[]},"GET /v1/incident_roles/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"GET /v2/incident_roles/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v1/incident_roles/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v2/incident_roles/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v1/incident_roles/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","required":false,"shortform":"lead"},"schema":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","required":false,"shortform":"lead"},"properties":{"description":{"description":"Describes the purpose of the role","example":"The person currently coordinating the incident","minLength":1,"type":"string"},"instructions":{"description":"Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.","example":"Take point on the incident; Make sure people are clear on responsibilities","type":"string"},"name":{"description":"Human readable name of the incident role","example":"Incident Lead","minLength":1,"type":"string"},"required":{"description":"DEPRECATED: this will always be false.","example":false,"type":"boolean"},"shortform":{"description":"Short human readable name for Slack. Note that this will be empty for the 'reporter' role.","example":"lead","type":"string"}},"required":["name","shortform","description","instructions"],"type":"object","x-ref":"#/components/schemas/IncidentRolesUpdatePayloadV1"}}},"required":true},"parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v2/incident_roles/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","shortform":"lead"},"schema":{"example":{"description":"The person currently coordinating the incident","instructions":"Take point on the incident; Make sure people are clear on responsibilities","name":"Incident Lead","shortform":"lead"},"properties":{"description":{"description":"Describes the purpose of the role","example":"The person currently coordinating the incident","minLength":1,"type":"string","key$":"description"},"instructions":{"description":"Provided to whoever is nominated for the role. Note that this will be empty for the 'reporter' role.","example":"Take point on the incident; Make sure people are clear on responsibilities","type":"string","key$":"instructions"},"name":{"description":"Human readable name of the incident role","example":"Incident Lead","minLength":1,"type":"string","key$":"name"},"shortform":{"description":"Short human readable name for Slack. Note that this will be empty for the 'reporter' role.","example":"lead","type":"string","key$":"shortform"}},"required":["name","shortform","description","instructions"],"type":"object","x-ref":"#/components/schemas/IncidentRolesUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the role","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const incident_role_ref01_ent = client.IncidentRole()
    let incident_role_ref01_data = setup.data.new.incident_role['incident_role_ref01']

    incident_role_ref01_data = (await incident_role_ref01_ent.create(incident_role_ref01_data)).data()
    assert(null != incident_role_ref01_data.id)


    // LIST
    const incident_role_ref01_match: any = {}

    const incident_role_ref01_list = (await incident_role_ref01_ent.list(incident_role_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(incident_role_ref01_list, { id: incident_role_ref01_data.id })))


    // UPDATE
    const incident_role_ref01_data_up0: any = {}
    incident_role_ref01_data_up0.id = incident_role_ref01_data.id

    const incident_role_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-incident_role_ref01_' + setup.now }
    ;(incident_role_ref01_data_up0 as any)[incident_role_ref01_markdef_up0.name] = incident_role_ref01_markdef_up0.value

    const incident_role_ref01_resdata_up0 = (await incident_role_ref01_ent.update(incident_role_ref01_data_up0)).data()
    assert(incident_role_ref01_resdata_up0.id === incident_role_ref01_data_up0.id)

    assert((incident_role_ref01_resdata_up0 as any)[incident_role_ref01_markdef_up0.name] === incident_role_ref01_markdef_up0.value)


    // LOAD
    const incident_role_ref01_match_dt0: any = {}
    incident_role_ref01_match_dt0.id = incident_role_ref01_data.id
    const incident_role_ref01_data_dt0 = (await incident_role_ref01_ent.load(incident_role_ref01_match_dt0)).data()
    assert(incident_role_ref01_data_dt0.id === incident_role_ref01_data.id)


    // REMOVE
    const incident_role_ref01_match_rm0: any = { id: incident_role_ref01_data.id }
    await incident_role_ref01_ent.remove(incident_role_ref01_match_rm0)
  

    // LIST
    const incident_role_ref01_match_rt0: any = {}

    const incident_role_ref01_list_rt0 = (await incident_role_ref01_ent.list(incident_role_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(incident_role_ref01_list_rt0, { id: incident_role_ref01_data.id })))


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
      '../../../../.sdk/test/entity/incident_role/IncidentRoleTestData.json')

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
    ['incident_role01','incident_role02','incident_role03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_INCIDENT_ROLE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_INCIDENT_ROLE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_ROLE_ENTID']
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
  

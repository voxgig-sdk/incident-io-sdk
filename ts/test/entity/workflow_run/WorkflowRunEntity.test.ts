

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


describe('WorkflowRunEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.WorkflowRun()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('workflow_run hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).WorkflowRun().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).WorkflowRun()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.WorkflowRun().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().WorkflowRun().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.WorkflowRun().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.WorkflowRun().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WorkflowRun().list({"after":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'workflow_run.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancelled_at":{"a":true,"fo":"date-time","h":"Cancelled At","n":"cancelled_at","r":false,"sh":"If the run was cancelled, this is when","t":"`$STRING`","key$":"cancelled_at","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When the resource was created","t":"`$STRING`","key$":"created_at","index$":1},"enqueued_at":{"a":true,"fo":"date-time","h":"Enqueued At","n":"enqueued_at","r":false,"sh":"When the run was enqueued for execution","t":"`$STRING`","key$":"enqueued_at","index$":2},"error":{"a":true,"h":"Error","n":"error","r":false,"sh":"Error produced by the workflow, if it failed","t":"`$STRING`","key$":"error","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the workflow run","t":"`$STRING`","key$":"id","index$":4},"incident_id":{"a":true,"h":"Incident Id","n":"incident_id","r":false,"sh":"If this run was against a specific incident, this is the ID of that incident","t":"`$STRING`","key$":"incident_id","index$":5},"incident_reference":{"a":true,"h":"Incident Reference","n":"incident_reference","r":false,"sh":"If this run was against a specific incident, this is the reference of that incident","t":"`$STRING`","key$":"incident_reference","index$":6},"progress":{"a":true,"h":"Progress","n":"progress","r":true,"sh":"Status of each step as it is worked","t":"`$ARRAY`","key$":"progress","index$":7},"scheduled_at":{"a":true,"fo":"date-time","h":"Scheduled At","n":"scheduled_at","r":true,"sh":"When the run was scheduled for","t":"`$STRING`","key$":"scheduled_at","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When the resource was last updated","t":"`$STRING`","key$":"updated_at","index$":9},"workflow_id":{"a":true,"h":"Workflow Id","n":"workflow_id","r":true,"sh":"Unique identifier for the underlying workflow","t":"`$STRING`","key$":"workflow_id","index$":10},"workflow_name":{"a":true,"h":"Workflow Name","n":"workflow_name","r":false,"sh":"Name of the underlying workflow","t":"`$STRING`","key$":"workflow_name","index$":11},"workflow_version_id":{"a":true,"h":"Workflow Version Id","n":"workflow_version_id","r":true,"sh":"Unique identifier of the workflow version","t":"`$STRING`","key$":"workflow_version_id","index$":12},"workflow_version_number":{"a":true,"fo":"int64","h":"Workflow Version Number","n":"workflow_version_number","r":true,"sh":"Monotonically incrementing version number for the version that ran","t":"`$INTEGER`","key$":"workflow_version_number","index$":13}},"id":{"field":"id","name":"id"},"name":"workflow_run","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/workflow_runs","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":{"date_range":["2026-07-01~2026-07-31"]},"k":"query","n":"created_at","or":"created_at","r":false,"t":"`$OBJECT`","index$":1},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"incident_id","or":"incident_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":25,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"query","n":"workflow_id","or":"workflow_id","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/v2/workflow_runs","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"workflow_runs"}],"t":{"req":"`reqdata`","res":"`body.workflow_runs`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/workflow_runs/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/workflow_runs/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"workflow_runs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.workflow_run`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"workflow_run","name__orig":"workflow_run","Name":"WorkflowRun","name_":"workflow_run","name-":"workflow-run","NAME":"WORKFLOW_RUN","index$":105}, {"active":true,"entity":"workflow_run","key$":"BasicWorkflowRunFlow","kind":"basic","name":"BasicWorkflowRunFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"workflow_run_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"workflow_run_ref01","srcdatavar":"workflow_run_ref01_data","suffix":"_dt0"},"m":{"id":"workflow_run01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-workflow_run_ref01"}}],"index$":1}]}, 'WorkflowRun', {"GET /v2/workflow_runs":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Unique identifier for the workflow to filter by","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"workflow_id","schema":{"description":"Unique identifier for the workflow to filter by","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"Unique identifier for the incident to filter by","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"query","name":"incident_id","schema":{"description":"Unique identifier for the incident to filter by","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":1},{"allowEmptyValue":true,"description":"Filter on workflow run created at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.","example":{"date_range":["2026-07-01~2026-07-31"]},"explode":true,"in":"query","name":"created_at","schema":{"additionalProperties":{"example":["some_value"],"items":{"example":"some_value","type":"string"},"type":"array"},"description":"Filter on workflow run created at timestamp. The accepted operators are 'gte', 'lte' and 'date_range'.","example":{"date_range":["2026-07-01~2026-07-31"]},"type":"object"},"style":"deepObject","index$":2},{"allowEmptyValue":true,"description":"Number of workflow runs to return per page","example":25,"in":"query","name":"page_size","schema":{"default":25,"description":"Number of workflow runs to return per page","example":25,"format":"int64","maximum":50,"minimum":1,"type":"integer"},"index$":3},{"allowEmptyValue":true,"description":"A workflow run's ID. This endpoint will return a list of workflow runs after this ID in relation to the API response order.","examples":{"default":{"summary":"default","value":"01FCNDV6P870EA6S7TK1DSYDG0"}},"in":"query","name":"after","schema":{"description":"A workflow run's ID. This endpoint will return a list of workflow runs after this ID in relation to the API response order.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":4}]},"GET /v2/workflow_runs/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for the workflow run","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for the workflow run","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let workflow_run_ref01_data = Object.values(setup.data.existing.workflow_run)[0] as any

    // LIST
    const workflow_run_ref01_ent = client.WorkflowRun()
    const workflow_run_ref01_match: any = {}

    const workflow_run_ref01_list = (await workflow_run_ref01_ent.list(workflow_run_ref01_match)).map((e: any) => e.data())


    // LOAD
    const workflow_run_ref01_match_dt0: any = {}
    workflow_run_ref01_match_dt0.id = workflow_run_ref01_data.id
    const workflow_run_ref01_data_dt0 = (await workflow_run_ref01_ent.load(workflow_run_ref01_match_dt0)).data()
    assert(workflow_run_ref01_data_dt0.id === workflow_run_ref01_data.id)


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
      '../../../../.sdk/test/entity/workflow_run/WorkflowRunTestData.json')

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
    ['workflow_run01','workflow_run02','workflow_run03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_WORKFLOW_RUN_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_WORKFLOW_RUN_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_WORKFLOW_RUN_ENTID']
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
  

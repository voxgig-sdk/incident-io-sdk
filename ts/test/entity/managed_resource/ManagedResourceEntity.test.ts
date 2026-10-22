

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


describe('ManagedResourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.ManagedResource()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ManagedResource().create({"annotations":"x","resource_id":1,"resource_type":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'managed_resource.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"annotations":{"a":true,"h":"Annotations","n":"annotations","r":true,"sh":"Annotations that track metadata about this resource","t":"`$OBJECT`","key$":"annotations","index$":0},"managed_by":{"a":true,"h":"Managed By","n":"managed_by","r":true,"sh":"How is this resource managed","t":"`$STRING`","key$":"managed_by","index$":1},"resource_id":{"a":true,"h":"Resource Id","n":"resource_id","r":true,"sh":"The ID of the resource that this relates to","t":"`$STRING`","key$":"resource_id","index$":2},"resource_type":{"a":true,"h":"Resource Type","n":"resource_type","r":true,"sh":"The type of the related resource","t":"`$STRING`","key$":"resource_type","index$":3},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"sh":"The url of the external repository where this resource is managed (if there is one)","t":"`$STRING`","key$":"source_url","index$":4}},"name":"managed_resource","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["annotations","resource_id","resource_type"],"co":{"id":"POST /v2/managed_resources","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/managed_resources","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"managed_resources"}],"t":{"req":"`reqdata`","res":"`body.managed_resource`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"managed_resource","name__orig":"managed_resource","Name":"ManagedResource","name_":"managed_resource","name-":"managed-resource","NAME":"MANAGED_RESOURCE","index$":55}, {"active":true,"entity":"managed_resource","key$":"BasicManagedResourceFlow","kind":"basic","name":"BasicManagedResourceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"managed_resource_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ManagedResource', {"POST /v2/managed_resources":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/terraform/version":"3.0.0"},"resource_id":"abc123","resource_type":"alert_route"},"schema":{"example":{"annotations":{"incident.io/terraform/version":"3.0.0"},"resource_id":"abc123","resource_type":"alert_route"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that track metadata about this resource","example":{"incident.io/terraform/version":"3.0.0"},"type":"object","key$":"annotations"},"resource_id":{"description":"The ID of the resource that this relates to","example":"abc123","type":"string","key$":"resource_id"},"resource_type":{"description":"The type of the related resource","enum":["alert_route","alert_source","api_key","incident_form","incident_template","escalation_path","escalation_path_template","policy","schedule","schedule_sync_target","schedule_sync_rule","secret","status_page_component","status_page_structure","team_grouping_preference","workflow"],"example":"alert_route","type":"string","key$":"resource_type"}},"required":["annotations","resource_type","resource_id"],"type":"object","x-ref":"#/components/schemas/ManagedResourcesCreateManagedResourcePayloadV2","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const managed_resource_ref01_ent = client.ManagedResource()
    let managed_resource_ref01_data = setup.data.new.managed_resource['managed_resource_ref01']

    managed_resource_ref01_data = (await managed_resource_ref01_ent.create(managed_resource_ref01_data)).data()
    assert(null != managed_resource_ref01_data)


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
      '../../../../.sdk/test/entity/managed_resource/ManagedResourceTestData.json')

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
    ['managed_resource01','managed_resource02','managed_resource03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID']
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
  

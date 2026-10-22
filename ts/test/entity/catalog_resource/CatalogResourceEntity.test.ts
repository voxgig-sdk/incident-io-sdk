

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


describe('CatalogResourceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CatalogResource()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('catalog_resource hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).CatalogResource().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).CatalogResource()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CatalogResource().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().CatalogResource().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CatalogResource().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CatalogResource().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CatalogResource().list({"category":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'catalog_resource.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":true,"sh":"Which category of resource","t":"`$STRING`","key$":"category","index$":0},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Human readable description for this resource","t":"`$STRING`","key$":"description","index$":1},"engine_resource_type":{"a":true,"h":"Engine Resource Type","n":"engine_resource_type","r":true,"sh":"The way this resource type is referenced in the engine, as used when setting the type of an alert attribute","t":"`$STRING`","key$":"engine_resource_type","index$":2},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"Label for this catalog resource type","t":"`$STRING`","key$":"label","index$":3},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Catalog type name for this resource, as used when setting the type of a catalog type attribute","t":"`$STRING`","key$":"type","index$":4},"value_docstring":{"a":true,"h":"Value Docstring","n":"value_docstring","r":true,"sh":"Documentation for the literal string value of this resource","t":"`$STRING`","key$":"value_docstring","index$":5}},"name":"catalog_resource","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/catalog_resources","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/catalog_resources","q":{"$action":"v2"},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"catalog_resources"}],"t":{"req":"`reqdata`","res":"`body.resources`"},"index$":0},{"a":true,"co":{"id":"GET /v3/catalog_resources","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v3/catalog_resources","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"catalog_resources"}],"t":{"req":"`reqdata`","res":"`body.resources`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"catalog_resource","name__orig":"catalog_resource","Name":"CatalogResource","name_":"catalog_resource","name-":"catalog-resource","NAME":"CATALOG_RESOURCE","index$":21}, {"active":true,"entity":"catalog_resource","key$":"BasicCatalogResourceFlow","kind":"basic","name":"BasicCatalogResourceFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"catalog_resource_ref01"}}],"index$":0}]}, 'CatalogResource', {"GET /v2/catalog_resources":{"protocol":"http","parameters":[]},"GET /v3/catalog_resources":{"protocol":"http","parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let catalog_resource_ref01_data = Object.values(setup.data.existing.catalog_resource)[0] as any

    // LIST
    const catalog_resource_ref01_ent = client.CatalogResource()
    const catalog_resource_ref01_match: any = {}

    const catalog_resource_ref01_list = (await catalog_resource_ref01_ent.list(catalog_resource_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/catalog_resource/CatalogResourceTestData.json')

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
    ['catalog_resource01','catalog_resource02','catalog_resource03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CATALOG_RESOURCE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CATALOG_RESOURCE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CATALOG_RESOURCE_ENTID']
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
  

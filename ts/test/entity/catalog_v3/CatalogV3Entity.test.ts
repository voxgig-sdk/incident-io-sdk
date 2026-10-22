

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


describe('CatalogV3Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CatalogV3()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CatalogV3().create({"catalog_type_id":1,"entries":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'catalog_v3.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"catalog_type_id":{"a":true,"h":"Catalog Type Id","n":"catalog_type_id","r":true,"sh":"The unique identifier of the catalog type containing the entries","t":"`$STRING`","key$":"catalog_type_id","index$":0},"entries":{"a":true,"h":"Entries","n":"entries","r":true,"sh":"A list of entries to update with their new values.","t":"`$ARRAY`","key$":"entries","index$":1},"update_attributes":{"a":true,"h":"Update Attributes","n":"update_attributes","r":false,"sh":"Optional list of specific attribute IDs to update across all entries.","t":"`$ARRAY`","key$":"update_attributes","index$":2}},"name":"catalog_v3","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["catalog_type_id","entries","update_attributes"],"co":{"id":"POST /v3/catalog_entries/actions/bulk_update","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v3/catalog_entries/actions/bulk_update","q":{},"r":{},"s":[{"lit":"v3"},{"lit":"catalog_entries"},{"lit":"actions"},{"lit":"bulk_update"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"catalog_v3","name__orig":"catalog_v3","Name":"CatalogV3","name_":"catalog_v3","name-":"catalog-v3","NAME":"CATALOG_V3","index$":24}, {"active":true,"entity":"catalog_v3","key$":"BasicCatalogV3Flow","kind":"basic","name":"BasicCatalogV3Flow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"catalog_v3_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CatalogV3', {"POST /v3/catalog_entries/actions/bulk_update":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"catalog_type_id":"01GW2G3V0S59R238FAHPDS1R66","entries":[{"aliases":["abc123"],"attribute_values":{"abc123":{"array_value":[{}],"value":{"literal":"SEV123"}}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1},{"aliases":["abc123"],"attribute_values":{"abc123":{"array_value":[{}],"value":{"literal":"SEV123"}}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1}],"update_attributes":["01GW2G3V0S59R238FAHPDS1R66","01GW2G3V0S59R238FAHPDS1R67"]},"schema":{"example":{"catalog_type_id":"01GW2G3V0S59R238FAHPDS1R66","entries":[{"aliases":["abc123"],"attribute_values":{"abc123":{"array_value":[],"value":{}}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1},{"aliases":["abc123"],"attribute_values":{"abc123":{"array_value":[],"value":{}}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1}],"update_attributes":["01GW2G3V0S59R238FAHPDS1R66","01GW2G3V0S59R238FAHPDS1R67"]},"properties":{"catalog_type_id":{"description":"The unique identifier of the catalog type containing the entries","example":"01GW2G3V0S59R238FAHPDS1R66","type":"string","key$":"catalog_type_id"},"entries":{"description":"A list of entries to update with their new values. Maximum 250 entries per request.","example":[{"aliases":["abc123"],"attribute_values":{"abc123":{}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1},{"aliases":["abc123"],"attribute_values":{"abc123":{}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1}],"items":{"description":"Represents a partial entry update, allowing selective field updates","example":{"aliases":["abc123"],"attribute_values":{"abc123":{}},"entry_id":"abc123","external_id":"abc123","name":"abc123","rank":1},"properties":{"aliases":{"description":"If specified, will update the aliases of the entry. When omitted, preserves the existing aliases.","example":[],"items":{},"type":"array"},"attribute_values":{"additionalProperties":{},"description":"The attribute values to apply to this entry","example":{},"type":"object"},"entry_id":{"description":"ID of the relevant catalog entry","example":"abc123","type":"string"},"external_id":{"description":"If specified, will update the external ID of the entry. When omitted, preserves the existing external ID.","example":"abc123","type":"string"},"name":{"description":"If specified, will update the name of the entry. When omitted, preserves the existing name.","example":"abc123","type":"string"},"rank":{"description":"If specified, will update the rank of the entry. When omitted, rank will be set to null (allowing rank removal).","example":1,"format":"int32","type":"integer"}},"required":["entry_id","attribute_values"],"type":"object","x-ref":"#/components/schemas/PartialEntryPayloadV3"},"maxItems":250,"minItems":1,"type":"array","key$":"entries"},"update_attributes":{"description":"Optional list of specific attribute IDs to update across all entries. When provided, only these attributes in attribute_values will be updated and all other attributes will be preserved. This parameter only affects attribute_values - it does not affect core entry fields like name, rank, aliases, or external_id, which follow their individual omission rules.","example":["01GW2G3V0S59R238FAHPDS1R66","01GW2G3V0S59R238FAHPDS1R67"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"update_attributes"}},"required":["catalog_type_id","entries"],"type":"object","x-ref":"#/components/schemas/CatalogBulkUpdateEntriesPayloadV3","index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const catalog_v3_ref01_ent = client.CatalogV3()
    let catalog_v3_ref01_data = setup.data.new.catalog_v3['catalog_v3_ref01']

    catalog_v3_ref01_data = (await catalog_v3_ref01_ent.create(catalog_v3_ref01_data)).data()
    assert(null != catalog_v3_ref01_data)


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
      '../../../../.sdk/test/entity/catalog_v3/CatalogV3TestData.json')

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
    ['catalog_v301','catalog_v302','catalog_v303'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CATALOG_V3_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CATALOG_V3_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CATALOG_V3_ENTID']
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
  

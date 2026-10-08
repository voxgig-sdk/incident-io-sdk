

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


describe('CatalogTypeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.CatalogType()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('catalog_type hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).CatalogType().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).CatalogType()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.CatalogType().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().CatalogType().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.CatalogType().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.CatalogType().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CatalogType().list({"color":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'catalog_type.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"annotations":{"a":true,"h":"Annotations","n":"annotations","op":{"create":{"req":false,"type":"`$OBJECT`"},"update":{"req":false,"type":"`$OBJECT`"}},"r":true,"sh":"Annotations that can track metadata about this type","t":"`$OBJECT`","key$":"annotations","index$":0},"categories":{"a":true,"h":"Categories","n":"categories","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"What categories is this type considered part of","t":"`$ARRAY`","key$":"categories","index$":1},"color":{"a":true,"h":"Color","n":"color","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Sets the display color of this type in the dashboard","t":"`$STRING`","key$":"color","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"When this type was created","t":"`$STRING`","key$":"created_at","index$":3},"description":{"a":true,"h":"Description","n":"description","r":true,"sh":"Human readble description of this type","t":"`$STRING`","key$":"description","index$":4},"dynamic_resource_parameter":{"a":true,"h":"Dynamic Resource Parameter","n":"dynamic_resource_parameter","r":false,"sh":"If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally.","t":"`$STRING`","key$":"dynamic_resource_parameter","index$":5},"engine_resource_type":{"a":true,"h":"Engine Resource Type","n":"engine_resource_type","r":true,"sh":"The way this resource type is referenced in the engine, as used when setting the type of an alert attribute","t":"`$STRING`","key$":"engine_resource_type","index$":6},"estimated_count":{"a":true,"fo":"int64","h":"Estimated Count","n":"estimated_count","r":false,"sh":"If populated, gives an estimated count of entries for this type","t":"`$INTEGER`","key$":"estimated_count","index$":7},"icon":{"a":true,"h":"Icon","n":"icon","op":{"create":{"req":false,"type":"`$STRING`"},"update":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"Sets the display icon of this type in the dashboard","t":"`$STRING`","key$":"icon","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"ID of this catalog type","t":"`$STRING`","key$":"id","index$":9},"is_editable":{"a":true,"h":"Is Editable","n":"is_editable","r":true,"sh":"Catalog types that are synced with external resources can't be edited","t":"`$BOOLEAN`","key$":"is_editable","index$":10},"is_team_type":{"a":true,"h":"Is Team Type","n":"is_team_type","r":false,"sh":"Whether this catalog type is the designated team type in team settings","t":"`$BOOLEAN`","key$":"is_team_type","index$":11},"last_synced_at":{"a":true,"fo":"date-time","h":"Last Synced At","n":"last_synced_at","r":false,"sh":"When this type was last synced (if it's ever been sync'd)","t":"`$STRING`","key$":"last_synced_at","index$":12},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name is the human readable name of this type","t":"`$STRING`","key$":"name","index$":13},"owning_team_ids":{"a":true,"h":"Owning Team Ids","n":"owning_team_ids","r":false,"sh":"IDs of the teams that own this catalog type","t":"`$ARRAY`","key$":"owning_team_ids","index$":14},"ranked":{"a":true,"h":"Ranked","n":"ranked","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"If this type should be ranked","t":"`$BOOLEAN`","key$":"ranked","index$":15},"registry_type":{"a":true,"h":"Registry Type","n":"registry_type","r":false,"sh":"The registry resource this type is synced from, if any","t":"`$STRING`","key$":"registry_type","index$":16},"required_integrations":{"a":true,"h":"Required Integrations","n":"required_integrations","r":false,"sh":"If populated, the integrations required for this type","t":"`$ARRAY`","key$":"required_integrations","index$":17},"schema":{"a":true,"h":"Schema","n":"schema","r":true,"t":"`$OBJECT`","key$":"schema","index$":18},"semantic_type":{"a":true,"h":"Semantic Type","n":"semantic_type","r":true,"sh":"This type has been deprecated, and will always be empty.","t":"`$STRING`","key$":"semantic_type","index$":19},"source_repo_url":{"a":true,"h":"Source Repo Url","n":"source_repo_url","r":false,"sh":"The url of the external repository where this type is managed","t":"`$STRING`","key$":"source_repo_url","index$":20},"type_name":{"a":true,"h":"Type Name","n":"type_name","op":{"create":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type name of this catalog type, to be used when defining attributes.","t":"`$STRING`","key$":"type_name","index$":21},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":true,"sh":"When this type was last updated","t":"`$STRING`","key$":"updated_at","index$":22},"use_name_as_identifier":{"a":true,"h":"Use Name As Identifier","n":"use_name_as_identifier","op":{"create":{"req":false,"type":"`$BOOLEAN`"},"update":{"req":false,"type":"`$BOOLEAN`"}},"r":true,"sh":"If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.","t":"`$BOOLEAN`","key$":"use_name_as_identifier","index$":23}},"id":{"field":"id","name":"id"},"name":"catalog_type","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["annotations","categories","color","description","icon","name","ranked","source_repo_url","type_name"],"co":{"id":"POST /v2/catalog_types","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/catalog_types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"catalog_types"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":0},{"a":true,"bf":["annotations","categories","color","description","icon","name","owning_team_ids","ranked","source_repo_url","type_name","use_name_as_identifier"],"co":{"id":"POST /v3/catalog_types","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v3/catalog_types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"catalog_types"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/catalog_types","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/catalog_types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"catalog_types"}],"t":{"req":"`reqdata`","res":"`body.catalog_types`"},"index$":0},{"a":true,"co":{"id":"GET /v3/catalog_types","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v3/catalog_types","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"catalog_types"}],"t":{"req":"`reqdata`","res":"`body.catalog_types`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/catalog_types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/catalog_types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"catalog_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":0},{"a":true,"co":{"id":"GET /v3/catalog_types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v3/catalog_types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"catalog_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["annotations","categories","color","description","icon","name","ranked","source_repo_url"],"co":{"id":"PUT /v2/catalog_types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/catalog_types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"catalog_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":0},{"a":true,"bf":["annotations","categories","color","description","icon","name","owning_team_ids","ranked","source_repo_url","use_name_as_identifier"],"co":{"id":"PUT /v3/catalog_types/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v3/catalog_types/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v3"},{"lit":"catalog_types"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.catalog_type`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"catalog_type","name__orig":"catalog_type","Name":"CatalogType","name_":"catalog_type","name-":"catalog-type","NAME":"CATALOG_TYPE","index$":29}, {"active":true,"entity":"catalog_type","key$":"BasicCatalogTypeFlow","kind":"basic","name":"BasicCatalogTypeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"catalog_type_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"catalog_type_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"catalog_type_ref01","srcdatavar":"catalog_type_ref01_data","suffix":"_up0","textfield":"color"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-catalog_type_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"catalog_type_ref01","srcdatavar":"catalog_type_ref01_data","suffix":"_dt0"},"m":{"id":"catalog_type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-catalog_type_ref01"}}],"index$":3}]}, 'CatalogType', {"POST /v2/catalog_types":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","type_name":"Custom[\"BackstageGroup\"]"},"schema":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","type_name":"Custom[\"BackstageGroup\"]"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that can track metadata about this type","example":{"incident.io/catalog-importer/id":"id-of-config"},"type":"object","key$":"annotations"},"categories":{"description":"What categories is this type considered part of","example":["customer"],"items":{"enum":["customer","issue-tracker","product-feature","service","on-call","team","user"],"example":"customer","type":"string"},"type":"array","key$":"categories"},"color":{"description":"Sets the display color of this type in the dashboard","enum":["yellow","green","blue","violet","pink","cyan","orange"],"example":"yellow","type":"string","key$":"color"},"description":{"description":"Human readble description of this type","example":"Represents Kubernetes clusters that we run inside of GKE.","type":"string","key$":"description"},"icon":{"description":"Sets the display icon of this type in the dashboard","enum":["alert","bolt","box","briefcase","browser","bulb","calendar","clock","cog","components","database","doc","email","escalation-path","files","flag","folder","globe","incident-template","money","server","severity","status-page","store","star","tag","user","users"],"example":"alert","type":"string","key$":"icon"},"name":{"description":"Name is the human readable name of this type","example":"Kubernetes Cluster","type":"string","key$":"name"},"ranked":{"description":"If this type should be ranked","example":true,"type":"boolean","key$":"ranked"},"source_repo_url":{"description":"The url of the external repository where this type is managed","example":"https://github.com/my-company/incident-io-catalog","type":"string","key$":"source_repo_url"},"type_name":{"description":"The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom[\"SomeName\"]","example":"Custom[\"BackstageGroup\"]","type":"string","key$":"type_name"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/CatalogCreateTypePayloadV2","index$":1}}},"required":true},"parameters":[]},"POST /v3/catalog_types":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","type_name":"Custom[\"BackstageGroup\"]","use_name_as_identifier":true},"schema":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","type_name":"Custom[\"BackstageGroup\"]","use_name_as_identifier":true},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that can track metadata about this type","example":{"incident.io/catalog-importer/id":"id-of-config"},"type":"object","key$":"annotations"},"categories":{"description":"What categories is this type considered part of","example":["customer"],"items":{"enum":["customer","issue-tracker","product-feature","service","on-call","team","user"],"example":"customer","type":"string"},"type":"array","key$":"categories"},"color":{"description":"Sets the display color of this type in the dashboard","enum":["yellow","green","blue","violet","pink","cyan","orange"],"example":"yellow","type":"string","key$":"color"},"description":{"description":"Human readble description of this type","example":"Represents Kubernetes clusters that we run inside of GKE.","type":"string","key$":"description"},"icon":{"description":"Sets the display icon of this type in the dashboard","enum":["alert","bolt","box","briefcase","browser","bulb","calendar","clock","cog","components","database","doc","email","escalation-path","files","flag","folder","globe","incident-template","money","server","severity","status-page","store","star","tag","user","users"],"example":"alert","type":"string","key$":"icon"},"name":{"description":"Name is the human readable name of this type","example":"Kubernetes Cluster","type":"string","key$":"name"},"owning_team_ids":{"description":"IDs of the teams that own this catalog type","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"},"ranked":{"description":"If this type should be ranked","example":true,"type":"boolean","key$":"ranked"},"source_repo_url":{"description":"The url of the external repository where this type is managed","example":"https://github.com/my-company/incident-io-catalog","type":"string","key$":"source_repo_url"},"type_name":{"description":"The type name of this catalog type, to be used when defining attributes. This is immutable once a CatalogType has been created. For non-externally sync types, it must follow the pattern Custom[\"SomeName\"]","example":"Custom[\"BackstageGroup\"]","type":"string","key$":"type_name"},"use_name_as_identifier":{"description":"If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.","example":true,"type":"boolean","key$":"use_name_as_identifier"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/CatalogCreateTypePayloadV3","index$":1}}},"required":true},"parameters":[]},"GET /v2/catalog_types":{"protocol":"http","parameters":[]},"GET /v3/catalog_types":{"protocol":"http","parameters":[]},"GET /v2/catalog_types/{id}":{"protocol":"http","parameters":[{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"GET /v3/catalog_types/{id}":{"protocol":"http","parameters":[{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v2/catalog_types/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog"},"schema":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog"},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that can track metadata about this type","example":{"incident.io/catalog-importer/id":"id-of-config"},"type":"object","key$":"annotations"},"categories":{"description":"What categories is this type considered part of","example":["customer"],"items":{"enum":["customer","issue-tracker","product-feature","service","on-call","team","user"],"example":"customer","type":"string"},"type":"array","key$":"categories"},"color":{"description":"Sets the display color of this type in the dashboard","enum":["yellow","green","blue","violet","pink","cyan","orange"],"example":"yellow","type":"string","key$":"color"},"description":{"description":"Human readble description of this type","example":"Represents Kubernetes clusters that we run inside of GKE.","type":"string","key$":"description"},"icon":{"description":"Sets the display icon of this type in the dashboard","enum":["alert","bolt","box","briefcase","browser","bulb","calendar","clock","cog","components","database","doc","email","escalation-path","files","flag","folder","globe","incident-template","money","server","severity","status-page","store","star","tag","user","users"],"example":"alert","type":"string","key$":"icon"},"name":{"description":"Name is the human readable name of this type","example":"Kubernetes Cluster","type":"string","key$":"name"},"ranked":{"description":"If this type should be ranked","example":true,"type":"boolean","key$":"ranked"},"source_repo_url":{"description":"The url of the external repository where this type is managed","example":"https://github.com/my-company/incident-io-catalog","type":"string","key$":"source_repo_url"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/CatalogUpdateTypePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v3/catalog_types/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","use_name_as_identifier":true},"schema":{"example":{"annotations":{"incident.io/catalog-importer/id":"id-of-config"},"categories":["customer"],"color":"yellow","description":"Represents Kubernetes clusters that we run inside of GKE.","icon":"alert","name":"Kubernetes Cluster","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"],"ranked":true,"source_repo_url":"https://github.com/my-company/incident-io-catalog","use_name_as_identifier":true},"properties":{"annotations":{"additionalProperties":{"example":"abc123","type":"string"},"description":"Annotations that can track metadata about this type","example":{"incident.io/catalog-importer/id":"id-of-config"},"type":"object","key$":"annotations"},"categories":{"description":"What categories is this type considered part of","example":["customer"],"items":{"enum":["customer","issue-tracker","product-feature","service","on-call","team","user"],"example":"customer","type":"string"},"type":"array","key$":"categories"},"color":{"description":"Sets the display color of this type in the dashboard","enum":["yellow","green","blue","violet","pink","cyan","orange"],"example":"yellow","type":"string","key$":"color"},"description":{"description":"Human readble description of this type","example":"Represents Kubernetes clusters that we run inside of GKE.","type":"string","key$":"description"},"icon":{"description":"Sets the display icon of this type in the dashboard","enum":["alert","bolt","box","briefcase","browser","bulb","calendar","clock","cog","components","database","doc","email","escalation-path","files","flag","folder","globe","incident-template","money","server","severity","status-page","store","star","tag","user","users"],"example":"alert","type":"string","key$":"icon"},"name":{"description":"Name is the human readable name of this type","example":"Kubernetes Cluster","type":"string","key$":"name"},"owning_team_ids":{"description":"IDs of the teams that own this catalog type","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"},"ranked":{"description":"If this type should be ranked","example":true,"type":"boolean","key$":"ranked"},"source_repo_url":{"description":"The url of the external repository where this type is managed","example":"https://github.com/my-company/incident-io-catalog","type":"string","key$":"source_repo_url"},"use_name_as_identifier":{"description":"If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.","example":true,"type":"boolean","key$":"use_name_as_identifier"}},"required":["name","description"],"type":"object","x-ref":"#/components/schemas/CatalogUpdateTypePayloadV3","index$":1}}},"required":true},"parameters":[{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"ID of this catalog type","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const catalog_type_ref01_ent = client.CatalogType()
    let catalog_type_ref01_data = setup.data.new.catalog_type['catalog_type_ref01']

    catalog_type_ref01_data = (await catalog_type_ref01_ent.create(catalog_type_ref01_data)).data()
    assert(null != catalog_type_ref01_data.id)


    // LIST
    const catalog_type_ref01_match: any = {}

    const catalog_type_ref01_list = (await catalog_type_ref01_ent.list(catalog_type_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(catalog_type_ref01_list, { id: catalog_type_ref01_data.id })))


    // UPDATE
    const catalog_type_ref01_data_up0: any = {}
    catalog_type_ref01_data_up0.id = catalog_type_ref01_data.id

    const catalog_type_ref01_markdef_up0 = { name: 'color', value: 'Mark01-catalog_type_ref01_' + setup.now }
    ;(catalog_type_ref01_data_up0 as any)[catalog_type_ref01_markdef_up0.name] = catalog_type_ref01_markdef_up0.value

    const catalog_type_ref01_resdata_up0 = (await catalog_type_ref01_ent.update(catalog_type_ref01_data_up0)).data()
    assert(catalog_type_ref01_resdata_up0.id === catalog_type_ref01_data_up0.id)

    assert((catalog_type_ref01_resdata_up0 as any)[catalog_type_ref01_markdef_up0.name] === catalog_type_ref01_markdef_up0.value)


    // LOAD
    const catalog_type_ref01_match_dt0: any = {}
    catalog_type_ref01_match_dt0.id = catalog_type_ref01_data.id
    const catalog_type_ref01_data_dt0 = (await catalog_type_ref01_ent.load(catalog_type_ref01_match_dt0)).data()
    assert(catalog_type_ref01_data_dt0.id === catalog_type_ref01_data.id)


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
      '../../../../.sdk/test/entity/catalog_type/CatalogTypeTestData.json')

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
    ['catalog_type01','catalog_type02','catalog_type03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_CATALOG_TYPE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_CATALOG_TYPE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_CATALOG_TYPE_ENTID']
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
  

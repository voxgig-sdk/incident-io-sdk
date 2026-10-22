

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


describe('AnnouncementTemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.AnnouncementTemplate()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('announcement_template hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of IncidentIoSDK.test(offline).AnnouncementTemplate().stream('list')) { }
    }, /offline/)

    for await (const _item of IncidentIoSDK.test(offline).AnnouncementTemplate()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.AnnouncementTemplate().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of IncidentIoSDK.test().AnnouncementTemplate().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.AnnouncementTemplate().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.AnnouncementTemplate().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AnnouncementTemplate().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'announcement_template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"actions":{"a":true,"h":"Actions","n":"actions","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Actions shown on the announcement post, in rank order","t":"`$ARRAY`","key$":"actions","index$":0},"fields":{"a":true,"h":"Fields","n":"fields","op":{"create":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"Fields shown on the announcement post, in rank order","t":"`$ARRAY`","key$":"fields","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for this announcement template","t":"`$STRING`","key$":"id","index$":2},"is_default":{"a":true,"h":"Is Default","n":"is_default","r":true,"sh":"Whether this is the organisation's default template, used by rules that don't choose one","t":"`$BOOLEAN`","key$":"is_default","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Name of this announcement template","t":"`$STRING`","key$":"name","index$":4},"owning_team_ids":{"a":true,"h":"Owning Team Ids","n":"owning_team_ids","op":{"create":{"req":false,"type":"`$ARRAY`"},"update":{"req":false,"type":"`$ARRAY`"}},"r":true,"sh":"IDs of the teams that own this template","t":"`$ARRAY`","key$":"owning_team_ids","index$":5}},"id":{"field":"id","name":"id"},"name":"announcement_template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["actions","fields","name","owning_team_ids"],"co":{"id":"POST /v2/announcement_templates","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/v2/announcement_templates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"announcement_templates"}],"t":{"req":"`reqdata`","res":"`body.announcement_template`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v2/announcement_templates","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v2/announcement_templates","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"announcement_templates"}],"t":{"req":"`reqdata`","res":"`body.announcement_templates`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/announcement_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/v2/announcement_templates/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"announcement_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.announcement_template`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /v2/announcement_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/v2/announcement_templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"v2"},{"lit":"announcement_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["actions","fields","name","owning_team_ids"],"co":{"id":"PUT /v2/announcement_templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/v2/announcement_templates/{id}","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"announcement_templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.announcement_template`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"announcement_template","name__orig":"announcement_template","Name":"AnnouncementTemplate","name_":"announcement_template","name-":"announcement-template","NAME":"ANNOUNCEMENT_TEMPLATE","index$":12}, {"active":true,"entity":"announcement_template","key$":"BasicAnnouncementTemplateFlow","kind":"basic","name":"BasicAnnouncementTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"announcement_template_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"announcement_template_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"announcement_template_ref01","srcdatavar":"announcement_template_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-announcement_template_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"announcement_template_ref01","srcdatavar":"announcement_template_ref01_data","suffix":"_dt0"},"m":{"id":"announcement_template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-announcement_template_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"announcement_template_ref01","suffix":"_rm0"},"m":{"id":"announcement_template01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"announcement_template_ref01"}}],"index$":5}]}, 'AnnouncementTemplate', {"POST /v2/announcement_templates":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"actions":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"fields":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"name":"Major incidents","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"schema":{"example":{"actions":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"fields":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"name":"Major incidents","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"properties":{"actions":{"description":"Actions shown on the announcement post","example":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"items":{"example":{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1},"properties":{"action_type":{"description":"Type of this action","enum":[],"example":"announcement_post_actions_homepage","type":"string"},"emoji":{"description":"Emoji shown on this action's button, as a Slack emoji name","example":"slack","type":"string"},"rank":{"description":"Position of this action on the post, lowest first","example":1,"format":"int64","type":"integer"}},"required":["action_type","rank"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateActionPayloadV2"},"type":"array","key$":"actions"},"fields":{"description":"Fields shown on the announcement post","example":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"items":{"example":{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}},"properties":{"custom_field_id":{"description":"ID of the custom field to show. Required for custom field fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"emoji":{"description":"Emoji shown next to this field, as a Slack emoji name","example":"fire","type":"string"},"field_type":{"description":"Type of this field","enum":[],"example":"announcement_post_fields_status","type":"string"},"incident_role_id":{"description":"ID of the incident role to show. Required for incident role fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"incident_timestamp_id":{"description":"ID of the incident timestamp to show. Required for incident timestamp fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"rank":{"description":"Position of this field on the post, lowest first","example":1,"format":"int64","type":"integer"},"rich_text":{"description":"Content of a rich text field. The type says how contents is written.","example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateRichTextV2"}},"required":["field_type","rank"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateFieldPayloadV2"},"type":"array","key$":"fields"},"name":{"description":"Name of this announcement template, unique within the organisation","example":"Major incidents","type":"string","key$":"name"},"owning_team_ids":{"description":"IDs of the teams that own this template","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"}},"required":["name"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplatesCreatePayloadV2","index$":1}}},"required":true},"parameters":[]},"GET /v2/announcement_templates":{"protocol":"http","parameters":[]},"GET /v2/announcement_templates/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"DELETE /v2/announcement_templates/{id}":{"protocol":"http","parameters":[{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]},"PUT /v2/announcement_templates/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"example":{"actions":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"fields":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"name":"Major incidents","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"schema":{"example":{"actions":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"fields":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"name":"Major incidents","owning_team_ids":["01G0J1EXE7AXZ2C93K61WBPYEH"]},"properties":{"actions":{"description":"Actions shown on the announcement post. Send an empty array to remove them all.","example":[{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1}],"items":{"example":{"action_type":"announcement_post_actions_homepage","emoji":"slack","rank":1},"properties":{"action_type":{"description":"Type of this action","enum":[],"example":"announcement_post_actions_homepage","type":"string"},"emoji":{"description":"Emoji shown on this action's button, as a Slack emoji name","example":"slack","type":"string"},"rank":{"description":"Position of this action on the post, lowest first","example":1,"format":"int64","type":"integer"}},"required":["action_type","rank"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateActionPayloadV2"},"type":"array","key$":"actions"},"fields":{"description":"Fields shown on the announcement post. Send an empty array to remove them all.","example":[{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}}],"items":{"example":{"custom_field_id":"01FCNDV6P870EA6S7TK1DSYDG0","emoji":"fire","field_type":"announcement_post_fields_status","incident_role_id":"01FCNDV6P870EA6S7TK1DSYDG0","incident_timestamp_id":"01FCNDV6P870EA6S7TK1DSYDG0","rank":1,"rich_text":{"contents":"If you work on **payments**, please join {{incident.reference}}","type":"markdown"}},"properties":{"custom_field_id":{"description":"ID of the custom field to show. Required for custom field fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"emoji":{"description":"Emoji shown next to this field, as a Slack emoji name","example":"fire","type":"string"},"field_type":{"description":"Type of this field","enum":[],"example":"announcement_post_fields_status","type":"string"},"incident_role_id":{"description":"ID of the incident role to show. Required for incident role fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"incident_timestamp_id":{"description":"ID of the incident timestamp to show. Required for incident timestamp fields.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"rank":{"description":"Position of this field on the post, lowest first","example":1,"format":"int64","type":"integer"},"rich_text":{"description":"Content of a rich text field. The type says how contents is written.","example":{},"properties":{},"required":[],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateRichTextV2"}},"required":["field_type","rank"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplateFieldPayloadV2"},"type":"array","key$":"fields"},"name":{"description":"Name of this announcement template, unique within the organisation","example":"Major incidents","type":"string","key$":"name"},"owning_team_ids":{"description":"IDs of the teams that own this template. The existing owning teams are kept when omitted.","example":["01G0J1EXE7AXZ2C93K61WBPYEH"],"items":{"example":"abc123","type":"string"},"type":"array","key$":"owning_team_ids"}},"required":["name","fields","actions"],"type":"object","x-ref":"#/components/schemas/AnnouncementTemplatesUpdatePayloadV2","index$":1}}},"required":true},"parameters":[{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"id","required":true,"schema":{"description":"Unique identifier for this announcement template","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const announcement_template_ref01_ent = client.AnnouncementTemplate()
    let announcement_template_ref01_data = setup.data.new.announcement_template['announcement_template_ref01']

    announcement_template_ref01_data = (await announcement_template_ref01_ent.create(announcement_template_ref01_data)).data()
    assert(null != announcement_template_ref01_data.id)


    // LIST
    const announcement_template_ref01_match: any = {}

    const announcement_template_ref01_list = (await announcement_template_ref01_ent.list(announcement_template_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(announcement_template_ref01_list, { id: announcement_template_ref01_data.id })))


    // UPDATE
    const announcement_template_ref01_data_up0: any = {}
    announcement_template_ref01_data_up0.id = announcement_template_ref01_data.id

    const announcement_template_ref01_markdef_up0 = { name: 'name', value: 'Mark01-announcement_template_ref01_' + setup.now }
    ;(announcement_template_ref01_data_up0 as any)[announcement_template_ref01_markdef_up0.name] = announcement_template_ref01_markdef_up0.value

    const announcement_template_ref01_resdata_up0 = (await announcement_template_ref01_ent.update(announcement_template_ref01_data_up0)).data()
    assert(announcement_template_ref01_resdata_up0.id === announcement_template_ref01_data_up0.id)

    assert((announcement_template_ref01_resdata_up0 as any)[announcement_template_ref01_markdef_up0.name] === announcement_template_ref01_markdef_up0.value)


    // LOAD
    const announcement_template_ref01_match_dt0: any = {}
    announcement_template_ref01_match_dt0.id = announcement_template_ref01_data.id
    const announcement_template_ref01_data_dt0 = (await announcement_template_ref01_ent.load(announcement_template_ref01_match_dt0)).data()
    assert(announcement_template_ref01_data_dt0.id === announcement_template_ref01_data.id)


    // REMOVE
    const announcement_template_ref01_match_rm0: any = { id: announcement_template_ref01_data.id }
    await announcement_template_ref01_ent.remove(announcement_template_ref01_match_rm0)
  

    // LIST
    const announcement_template_ref01_match_rt0: any = {}

    const announcement_template_ref01_list_rt0 = (await announcement_template_ref01_ent.list(announcement_template_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(announcement_template_ref01_list_rt0, { id: announcement_template_ref01_data.id })))


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
      '../../../../.sdk/test/entity/announcement_template/AnnouncementTemplateTestData.json')

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
    ['announcement_template01','announcement_template02','announcement_template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_ANNOUNCEMENT_TEMPLATE_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_ANNOUNCEMENT_TEMPLATE_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_ANNOUNCEMENT_TEMPLATE_ENTID']
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
  

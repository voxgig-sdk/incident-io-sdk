

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


describe('StatusPageComponentAvailabilityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.StatusPageComponentAvailability()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatusPageComponentAvailability().load({"component_id":1,"status_page_id":"x","end_at":"x","start_at":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'status_page_component_availability.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"availability_percent":{"a":true,"h":"Availability Percent","n":"availability_percent","r":false,"sh":"Availability over the window as a percentage, floored (for example \"99.94\").","t":"`$STRING`","key$":"availability_percent","index$":0},"component_id":{"a":true,"h":"Component Id","n":"component_id","r":true,"sh":"ID of the component.","t":"`$STRING`","key$":"component_id","index$":1},"data_available_since":{"a":true,"fo":"date-time","h":"Data Available Since","n":"data_available_since","r":true,"sh":"Earliest time we have status data for this component.","t":"`$STRING`","key$":"data_available_since","index$":2},"end_at":{"a":true,"fo":"date-time","h":"End At","n":"end_at","r":true,"sh":"End of the requested availability window","t":"`$STRING`","key$":"end_at","index$":3},"start_at":{"a":true,"fo":"date-time","h":"Start At","n":"start_at","r":true,"sh":"Start of the requested availability window","t":"`$STRING`","key$":"start_at","index$":4},"status_page_id":{"a":true,"h":"Status Page Id","n":"status_page_id","r":true,"sh":"ID of the status page","t":"`$STRING`","key$":"status_page_id","index$":5}},"name":"status_page_component_availability","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v2/status_pages/{status_page_id}/components/{component_id}/availability","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG1","k":"param","n":"component_id","or":"component_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"01FCNDV6P870EA6S7TK1DSYDG0","k":"param","n":"status_page_id","or":"status_page_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"2026-02-01T00:00:00Z","k":"query","n":"end_at","or":"end_at","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"2026-01-01T00:00:00Z","k":"query","n":"start_at","or":"start_at","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v2/status_pages/{status_page_id}/components/{component_id}/availability","q":{"exist":["component_id","end_at","start_at","status_page_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v2"},{"lit":"status_pages"},{"var":"status_page_id"},{"lit":"components"},{"var":"component_id"},{"lit":"availability"}],"t":{"req":"`reqdata`","res":"`body.availability`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.status_page"]]},"key$":"status_page_component_availability","name__orig":"status_page_component_availability","Name":"StatusPageComponentAvailability","name_":"status_page_component_availability","name-":"status-page-component-availability","NAME":"STATUS_PAGE_COMPONENT_AVAILABILITY","index$":91}, {"active":true,"entity":"status_page_component_availability","key$":"BasicStatusPageComponentAvailabilityFlow","kind":"basic","name":"BasicStatusPageComponentAvailabilityFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"status_page_component_availability_ref01","srcdatavar":"status_page_component_availability_ref01_data","suffix":"_dt0"},"m":{"id":"status_page_component_availability01","status_page_id":"status_page01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-status_page_component_availability_ref01"}}],"unreachable":true}]}, 'StatusPageComponentAvailability', {"GET /v2/status_pages/{status_page_id}/components/{component_id}/availability":{"protocol":"http","parameters":[{"allowEmptyValue":true,"description":"Start of the availability window","example":"2026-01-01T00:00:00Z","in":"query","name":"start_at","required":true,"schema":{"description":"Start of the availability window","example":"2026-01-01T00:00:00Z","format":"date-time","type":"string"},"index$":0},{"allowEmptyValue":true,"description":"End of the availability window","example":"2026-02-01T00:00:00Z","in":"query","name":"end_at","required":true,"schema":{"description":"End of the availability window","example":"2026-02-01T00:00:00Z","format":"date-time","type":"string"},"index$":1},{"description":"ID of the status page. You can find this by calling the ListStatusPages endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG0","in":"path","name":"status_page_id","required":true,"schema":{"description":"ID of the status page. You can find this by calling the ListStatusPages endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG0","type":"string"},"index$":2},{"description":"ID of the component. You can find this by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG1","in":"path","name":"component_id","required":true,"schema":{"description":"ID of the component. You can find this by calling the ShowStatusPageStructure endpoint.","example":"01FCNDV6P870EA6S7TK1DSYDG1","type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let status_page_component_availability_ref01_data = Object.values(setup.data.existing.status_page_component_availability)[0] as any

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
      '../../../../.sdk/test/entity/status_page_component_availability/StatusPageComponentAvailabilityTestData.json')

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
    ['status_page_component_availability01','status_page_component_availability02','status_page_component_availability03','status_page01','status_page02','status_page03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_AVAILABILITY_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_AVAILABILITY_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_AVAILABILITY_ENTID']
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
  

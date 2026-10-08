
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { IncidentIoSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('StatusPageLinkedResponseIncidentV1Entity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = IncidentIoSDK.test()
    const ent = testsdk.StatusPageLinkedResponseIncidentV1()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.StatusPageLinkedResponseIncidentV1().list({"incident_id":1,"status_page_id":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"ID of the Response incident","t":"`$STRING`","key$":"id","index$":0},"linked_at":{"a":true,"fo":"date-time","h":"Linked At","n":"linked_at","r":true,"sh":"When the Response incident was linked to the status page incident","t":"`$STRING`","key$":"linked_at","index$":1}},"id":{"field":"id","name":"id"},"name":"status_page_linked_response_incident_v1","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /v1/status-pages/{id}/incidents/{incident_id}/response-incidents","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"abc123","k":"param","n":"incident_id","or":"incident_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"abc123","k":"param","n":"status_page_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/v1/status-pages/{id}/incidents/{incident_id}/response-incidents","q":{"exist":["incident_id","status_page_id"]},"r":{"param":{"id":"status_page_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"v1"},{"lit":"status-pages"},{"var":"status_page_id"},{"lit":"incidents"},{"var":"incident_id"},{"lit":"response-incidents"}],"t":{"req":"`reqdata`","res":"`body.incidents`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.status_page","$.main.kit.entity.incident"]]},"key$":"status_page_linked_response_incident_v1","name__orig":"status_page_linked_response_incident_v1","Name":"StatusPageLinkedResponseIncidentV1","name_":"status_page_linked_response_incident_v1","name-":"status-page-linked-response-incident-v1","NAME":"STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1","index$":99}, {"active":true,"entity":"status_page_linked_response_incident_v1","key$":"BasicStatusPageLinkedResponseIncidentV1Flow","kind":"basic","name":"BasicStatusPageLinkedResponseIncidentV1Flow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"incident_id":"incident01","status_page_id":"status_page01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"status_page_linked_response_incident_v1_ref01"}}],"index$":0}]}, 'StatusPageLinkedResponseIncidentV1', {"GET /v1/status-pages/{id}/incidents/{incident_id}/response-incidents":{"protocol":"http","parameters":[{"description":"ID of the status page","example":"abc123","in":"path","name":"id","required":true,"schema":{"description":"ID of the status page","example":"abc123","type":"string"},"index$":0},{"description":"ID of the status page incident","example":"abc123","in":"path","name":"incident_id","required":true,"schema":{"description":"ID of the status page incident","example":"abc123","type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let status_page_linked_response_incident_v1_ref01_data = Object.values(setup.data.existing.status_page_linked_response_incident_v1)[0]

    // LIST
    const status_page_linked_response_incident_v1_ref01_ent = client.StatusPageLinkedResponseIncidentV1()
    const status_page_linked_response_incident_v1_ref01_match = {}
    status_page_linked_response_incident_v1_ref01_match['incident_id'] = setup.idmap['incident01']
    status_page_linked_response_incident_v1_ref01_match['status_page_id'] = setup.idmap['status_page01']

    const status_page_linked_response_incident_v1_ref01_list = (await status_page_linked_response_incident_v1_ref01_ent.list(status_page_linked_response_incident_v1_ref01_match)).map((e) => e.data())


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/status_page_linked_response_incident_v1/StatusPageLinkedResponseIncidentV1TestData.json')

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
    ['status_page_linked_response_incident_v101','status_page_linked_response_incident_v102','status_page_linked_response_incident_v103','status_page01','status_page02','status_page03','incident01','incident02','incident03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID': idmap,
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID']

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  

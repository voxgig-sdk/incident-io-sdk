
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


const { IncidentIoSDK } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  skipIfMissingIds,
  liveMiss,
  liveEmpty,
  describeLive,
} = require('../../utility')


describe('StatusPageLinkedResponseIncidentV1Direct', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
  afterEach(liveDelay('INCIDENT_IO_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new IncidentIoSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-status_page_linked_response_incident_v1', async (t) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    if (skipIfMissingIds(t, setup, ["incident01","status_page01"], LIVE_STRICT)) return
    const { client, calls } = setup

    const params = {}
    if (setup.live) {
      params.incident_id = setup.idmap['incident01']
      params.status_page_id = setup.idmap['status_page01']
    } else {
      params.incident_id = 'direct01'
      params.status_page_id = 'direct02'
    }

    const result = await client.direct({
      path: 'v1/status-pages/{status_page_id}/incidents/{incident_id}/response-incidents',
      method: 'GET',
      params,
    })

    if (setup.live) {
      if (!result.ok || result.status < 200 || result.status >= 300) {
        return void liveMiss(t, LIVE_STRICT, 'Live list failed: ' + describeLive(result))
      }
      if (!(Array.isArray(result.data))) {
        return void liveMiss(t, LIVE_STRICT, 'Live list returned no list: ' + describeLive(result))
      }
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(Array.isArray(result.data))
      assert(result.data.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
    }
  })

})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function liveScenariosActive() { return false && process.env.INCIDENT_IO_TEST_LIVE === 'TRUE' }
function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID': {},
    'INCIDENT_IO_TEST_LIVE': 'FALSE',
    'INCIDENT_IO_APIKEY': '',
  })

  const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE

  if (live) {
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new IncidentIoSDK(
      Object.assign({}, liveClientOptions(), {
      apikey: env.INCIDENT_IO_APIKEY,
      }))

    let idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new IncidentIoSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  

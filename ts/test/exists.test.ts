
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IncidentIoSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IncidentIoSDK.test()
    equal(null !== testsdk, true)
  })

})

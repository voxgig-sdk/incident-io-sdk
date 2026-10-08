
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { IncidentIoSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = IncidentIoSDK.test()
    equal(testsdk instanceof IncidentIoSDK, true,
      'IncidentIoSDK.test() must return a client synchronously')
  })

})

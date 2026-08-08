
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { IncidentIoSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await IncidentIoSDK.test()
    equal(null !== testsdk, true)
  })

})

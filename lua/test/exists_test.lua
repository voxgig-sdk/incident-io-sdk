-- IncidentIo SDK exists test

local sdk = require("incident-io_sdk")

describe("IncidentIoSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)

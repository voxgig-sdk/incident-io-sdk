# IncidentIo SDK exists test

require "minitest/autorun"
require_relative "../IncidentIo_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = IncidentIoSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end

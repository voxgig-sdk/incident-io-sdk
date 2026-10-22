# CallRoutesUpdateAllowedCallerResultV2 entity test

require "minitest/autorun"
require "json"
require_relative "../IncidentIo_sdk"
require_relative "runner"

class CallRoutesUpdateAllowedCallerResultV2EntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = IncidentIoSDK.test(nil, nil)
    ent = testsdk.CallRoutesUpdateAllowedCallerResultV2(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = IncidentIoConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = IncidentIoSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.CallRoutesUpdateAllowedCallerResultV2(nil).update({ "call_route_id" => 1, "id" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = call_routes_update_allowed_caller_result_v2_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "call_routes_update_allowed_caller_result_v2." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["call_route01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID")
        end
      end
    end
    if setup[:live]
      Runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a call_routes_update_allowed_caller_result_v2 record it did not create")
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    call_routes_update_allowed_caller_result_v2_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.call_routes_update_allowed_caller_result_v2")))
    call_routes_update_allowed_caller_result_v2_ref01_data = nil
    if call_routes_update_allowed_caller_result_v2_ref01_data_raw.length > 0
      call_routes_update_allowed_caller_result_v2_ref01_data = Helpers.to_map(call_routes_update_allowed_caller_result_v2_ref01_data_raw[0][1])
    end

    # UPDATE
    call_routes_update_allowed_caller_result_v2_ref01_ent = client.CallRoutesUpdateAllowedCallerResultV2(nil)
    call_routes_update_allowed_caller_result_v2_ref01_data_up0_up = {
      "id" => call_routes_update_allowed_caller_result_v2_ref01_data["id"],
      "call_route_id" => setup[:idmap]["call_route_id"],
    }

    call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_name = "name"
    call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_value = "Mark01-call_routes_update_allowed_caller_result_v2_ref01_#{setup[:now]}"
    call_routes_update_allowed_caller_result_v2_ref01_data_up0_up[call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_name] = call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_value

    call_routes_update_allowed_caller_result_v2_ref01_resdata_up0_result = call_routes_update_allowed_caller_result_v2_ref01_ent.update(call_routes_update_allowed_caller_result_v2_ref01_data_up0_up, nil)
    call_routes_update_allowed_caller_result_v2_ref01_resdata_up0 = Helpers.to_map(call_routes_update_allowed_caller_result_v2_ref01_resdata_up0_result.respond_to?(:data_get) ? call_routes_update_allowed_caller_result_v2_ref01_resdata_up0_result.data_get : call_routes_update_allowed_caller_result_v2_ref01_resdata_up0_result)
    assert !call_routes_update_allowed_caller_result_v2_ref01_resdata_up0.nil?
    assert_equal call_routes_update_allowed_caller_result_v2_ref01_resdata_up0["id"], call_routes_update_allowed_caller_result_v2_ref01_data_up0_up["id"]
    assert_equal call_routes_update_allowed_caller_result_v2_ref01_resdata_up0[call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_name], call_routes_update_allowed_caller_result_v2_ref01_markdef_up0_value

  end
end

def call_routes_update_allowed_caller_result_v2_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "call_routes_update_allowed_caller_result_v2", "CallRoutesUpdateAllowedCallerResultV2TestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IncidentIoSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["call_routes_update_allowed_caller_result_v201", "call_routes_update_allowed_caller_result_v202", "call_routes_update_allowed_caller_result_v203", "call_route01", "call_route02", "call_route03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID" => idmap,
    "INCIDENT_IO_TEST_LIVE" => "FALSE",
    "INCIDENT_IO_TEST_EXPLAIN" => "FALSE",
    "INCIDENT_IO_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end
  if idmap_resolved["call_route_id"].nil?
    idmap_resolved["call_route_id"] = idmap_resolved["call_route01"]
  end

  if env["INCIDENT_IO_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      # FIRST, so the generated fields below win: sdk-test-control.json's
      # test.client.options adds to the live client, it does not redirect it.
      Runner.live_client_options,
      {
        "apikey" => env["INCIDENT_IO_APIKEY"],
      },
      extra || {},
    ])
    client = IncidentIoSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["INCIDENT_IO_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["INCIDENT_IO_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end

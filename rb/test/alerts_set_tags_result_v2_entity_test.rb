# AlertsSetTagsResultV2 entity test

require "minitest/autorun"
require "json"
require_relative "../IncidentIo_sdk"
require_relative "runner"

class AlertsSetTagsResultV2EntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = IncidentIoSDK.test(nil, nil)
    ent = testsdk.AlertsSetTagsResultV2(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = IncidentIoConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = IncidentIoSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.AlertsSetTagsResultV2(nil).create({ "alert_id" => 1, "tags" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = alerts_set_tags_result_v2_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "alerts_set_tags_result_v2." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    if setup[:live]
      ["alert01"].each do |_live_key|
        if setup[:synthetic_only] || setup[:idmap][_live_key].nil?
          Runner.live_miss(LIVE_STRICT, "Live entity test blocked: needs #{_live_key} via INCIDENT_IO_TEST_ALERTS_SET_TAGS_RESULT_V2_ENTID")
        end
      end
    end
    client = setup[:client]

    # CREATE
    alerts_set_tags_result_v2_ref01_ent = client.AlertsSetTagsResultV2(nil)
    alerts_set_tags_result_v2_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.alerts_set_tags_result_v2"), "alerts_set_tags_result_v2_ref01"))
    alerts_set_tags_result_v2_ref01_data["alert_id"] = setup[:idmap]["alert01"]

    alerts_set_tags_result_v2_ref01_data_result = alerts_set_tags_result_v2_ref01_ent.create(alerts_set_tags_result_v2_ref01_data, nil)
    alerts_set_tags_result_v2_ref01_data = Helpers.to_map(alerts_set_tags_result_v2_ref01_data_result.respond_to?(:data_get) ? alerts_set_tags_result_v2_ref01_data_result.data_get : alerts_set_tags_result_v2_ref01_data_result)
    assert !alerts_set_tags_result_v2_ref01_data.nil?
    assert !alerts_set_tags_result_v2_ref01_data["id"].nil?

  end
end

def alerts_set_tags_result_v2_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "alerts_set_tags_result_v2", "AlertsSetTagsResultV2TestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IncidentIoSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["alerts_set_tags_result_v201", "alerts_set_tags_result_v202", "alerts_set_tags_result_v203", "alert01", "alert02", "alert03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["INCIDENT_IO_TEST_ALERTS_SET_TAGS_RESULT_V2_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "INCIDENT_IO_TEST_ALERTS_SET_TAGS_RESULT_V2_ENTID" => idmap,
    "INCIDENT_IO_TEST_LIVE" => "FALSE",
    "INCIDENT_IO_TEST_EXPLAIN" => "FALSE",
    "INCIDENT_IO_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["INCIDENT_IO_TEST_ALERTS_SET_TAGS_RESULT_V2_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
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

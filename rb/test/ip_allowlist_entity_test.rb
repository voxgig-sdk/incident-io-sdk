# IpAllowlist entity test

require "minitest/autorun"
require "json"
require_relative "../IncidentIo_sdk"
require_relative "runner"

class IpAllowlistEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = IncidentIoSDK.test(nil, nil)
    ent = testsdk.IpAllowlist(nil)
    assert !ent.nil?
  end

  def test_validate
    cfg = IncidentIoConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = IncidentIoSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.IpAllowlist(nil).load({ "enabled" => "x" }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = ip_allowlist_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["update", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "ip_allowlist." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    ip_allowlist_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.ip_allowlist")))
    ip_allowlist_ref01_data = nil
    if ip_allowlist_ref01_data_raw.length > 0
      ip_allowlist_ref01_data = Helpers.to_map(ip_allowlist_ref01_data_raw[0][1])
    end

    # UPDATE
    ip_allowlist_ref01_ent = client.IpAllowlist(nil)
    ip_allowlist_ref01_data_up0_up = {
    }

    ip_allowlist_ref01_markdef_up0_name = "updated_at"
    ip_allowlist_ref01_markdef_up0_value = "Mark01-ip_allowlist_ref01_#{setup[:now]}"
    ip_allowlist_ref01_data_up0_up[ip_allowlist_ref01_markdef_up0_name] = ip_allowlist_ref01_markdef_up0_value

    ip_allowlist_ref01_resdata_up0_result = ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0_up, nil)
    ip_allowlist_ref01_resdata_up0 = Helpers.to_map(ip_allowlist_ref01_resdata_up0_result.respond_to?(:data_get) ? ip_allowlist_ref01_resdata_up0_result.data_get : ip_allowlist_ref01_resdata_up0_result)
    assert !ip_allowlist_ref01_resdata_up0.nil?
    assert_equal ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0_name], ip_allowlist_ref01_markdef_up0_value

    # LOAD
    ip_allowlist_ref01_match_dt0 = {}
    ip_allowlist_ref01_data_dt0_loaded = ip_allowlist_ref01_ent.load(ip_allowlist_ref01_match_dt0, nil)
    assert !ip_allowlist_ref01_data_dt0_loaded.nil?

  end
end

def ip_allowlist_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "ip_allowlist", "IpAllowlistTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IncidentIoSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["ip_allowlist01", "ip_allowlist02", "ip_allowlist03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID" => idmap,
    "INCIDENT_IO_TEST_LIVE" => "FALSE",
    "INCIDENT_IO_TEST_EXPLAIN" => "FALSE",
    "INCIDENT_IO_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID"])
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

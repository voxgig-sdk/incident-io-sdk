# CustomField entity test

require "minitest/autorun"
require "json"
require_relative "../IncidentIo_sdk"
require_relative "runner"

class CustomFieldEntityTest < Minitest::Test
  # main.kit.test.live.strict is true (the default is true): a live
  # request that fails, or a live test missing an input it needs,
  # fails the test.
  # An account with no record for a test to read skips it either way.
  LIVE_STRICT = true

  def test_create_instance
    testsdk = IncidentIoSDK.test(nil, nil)
    ent = testsdk.CustomField(nil)
    assert !ent.nil?
  end

  def test_list_entities
    seed = {
      "entity" => {
        "custom_field" => {
          "l1" => { "id" => "l1" },
          "l2" => { "id" => "l2" },
        },
      },
    }
    items = IncidentIoSDK.test(seed, nil).CustomField(nil).list(nil, nil)
    # list resolves to one entity per record; data_get reads the record.
    assert_equal 2, items.length
    items.each do |item|
      assert item.respond_to?(:data_get)
      assert item.data_get.is_a?(Hash)
    end
  end

  # Feature #4: the entity stream(action, ...) method runs the op pipeline and
  # returns an Enumerator over result items. With the streaming feature active
  # it yields the feature's incremental output; otherwise it falls back to the
  # materialised list so stream always yields.
  def test_stream
    seed = {
      "entity" => {
        "custom_field" => {
          "s1" => { "id" => "s1" },
          "s2" => { "id" => "s2" },
          "s3" => { "id" => "s3" },
        },
      },
    }

    # Fallback: streaming inactive -> yields the materialised list items.
    base = IncidentIoSDK.test(seed, nil)
    seen = base.CustomField(nil).stream("list", nil, nil).to_a
    assert_equal 3, seen.length

    # Inbound: streaming active -> yields each item from the feature.
    cfg = IncidentIoConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("streaming")
      sdk = IncidentIoSDK.test(seed, { "feature" => { "streaming" => { "active" => true } } })
      got = []
      sdk.CustomField(nil).stream("list", nil, nil).each do |item|
        if item.is_a?(Array)
          got.concat(item)
        else
          got << item
        end
      end
      assert_equal 3, got.length
    end
  end

  class FailHook < IncidentIoBaseFeature
    attr_reader :unexpected

    def initialize
      super()
      @name = "failhook"
      @unexpected = 0
    end

    def PreSpec(ctx)
      raise "custom_field hook failed"
    end

    def PreUnexpected(ctx)
      @unexpected += 1
    end
  end

  def test_stream_error
    offline = { "net" => { "offline" => true } }
    err = assert_raises(StandardError) do
      IncidentIoSDK.test(offline, nil).CustomField(nil).stream("list", nil, nil).to_a
    end
    assert_match(/offline/, err.message)

    IncidentIoSDK.test(offline, nil).CustomField(nil)
      .stream("list", nil, { "ctrl" => { "throw" => false } }).to_a

    cfg = IncidentIoConfig.shared_config
    if cfg["feature"].is_a?(Hash) && cfg["feature"].key?("rbac")
      denied = IncidentIoSDK.test(nil, { "feature" => { "rbac" => { "active" => true, "deny" => true } } })
      err = assert_raises(StandardError) do
        denied.CustomField(nil).stream("list", nil, nil).to_a
      end
      assert_equal "rbac_denied", err.code
    end
  end

  def test_stream_ctrl
    explain = {}
    ctrl = { "explain" => explain }
    IncidentIoSDK.test(nil, nil).CustomField(nil).stream("list", nil, { "ctrl" => ctrl }).to_a
    assert_equal ["explain"], ctrl.keys
    assert_same explain, ctrl["explain"]
    refute_empty explain
  end

  def test_unexpected
    hook = FailHook.new
    client = IncidentIoSDK.new({ "feature" => { "test" => { "active" => true } }, "extend" => [hook] })

    err = assert_raises(StandardError) do
      client.CustomField(nil).list(nil, nil)
    end
    assert_match(/hook failed/, err.message)
    assert_operator hook.unexpected, :>, 0

    fired = hook.unexpected
    assert_nil client.CustomField(nil).list(nil, { "throw" => false })
    assert_operator hook.unexpected, :>, fired
  end

  def test_validate
    cfg = IncidentIoConfig.shared_config
    unless cfg["feature"].is_a?(Hash) && cfg["feature"].key?("validate")
      skip("feature not present in this SDK: validate")
    end
    client = IncidentIoSDK.test(nil, { "feature" => { "validate" => { "active" => true } } })
    err = assert_raises(StandardError) do
      client.CustomField(nil).list({ "catalog_type_id" => 1 }, nil)
    end
    assert_equal "validate_failed", err.code
  end

  def test_basic_flow
    setup = custom_field_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create", "list", "update", "load", "remove"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "custom_field." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    client = setup[:client]

    # CREATE
    custom_field_ref01_ent = client.CustomField(nil)
    custom_field_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.custom_field"), "custom_field_ref01"))

    custom_field_ref01_data_result = custom_field_ref01_ent.create(custom_field_ref01_data, nil)
    custom_field_ref01_data = Helpers.to_map(custom_field_ref01_data_result.respond_to?(:data_get) ? custom_field_ref01_data_result.data_get : custom_field_ref01_data_result)
    assert !custom_field_ref01_data.nil?
    assert !custom_field_ref01_data["id"].nil?

    # LIST
    custom_field_ref01_match = {}

    custom_field_ref01_list_result = custom_field_ref01_ent.list(custom_field_ref01_match, nil)
    assert custom_field_ref01_list_result.is_a?(Array)

    found_item = Vs.select(
      Runner.entity_list_to_data(custom_field_ref01_list_result),
      { "id" => custom_field_ref01_data["id"] })
    assert !Vs.isempty(found_item)

    # UPDATE
    custom_field_ref01_data_up0_up = {
      "id" => custom_field_ref01_data["id"],
    }

    custom_field_ref01_markdef_up0_name = "catalog_type_id"
    custom_field_ref01_markdef_up0_value = "Mark01-custom_field_ref01_#{setup[:now]}"
    custom_field_ref01_data_up0_up[custom_field_ref01_markdef_up0_name] = custom_field_ref01_markdef_up0_value

    custom_field_ref01_resdata_up0_result = custom_field_ref01_ent.update(custom_field_ref01_data_up0_up, nil)
    custom_field_ref01_resdata_up0 = Helpers.to_map(custom_field_ref01_resdata_up0_result.respond_to?(:data_get) ? custom_field_ref01_resdata_up0_result.data_get : custom_field_ref01_resdata_up0_result)
    assert !custom_field_ref01_resdata_up0.nil?
    assert_equal custom_field_ref01_resdata_up0["id"], custom_field_ref01_data_up0_up["id"]
    assert_equal custom_field_ref01_resdata_up0[custom_field_ref01_markdef_up0_name], custom_field_ref01_markdef_up0_value

    # LOAD
    custom_field_ref01_match_dt0 = {
      "id" => custom_field_ref01_data["id"],
    }
    custom_field_ref01_data_dt0_loaded = custom_field_ref01_ent.load(custom_field_ref01_match_dt0, nil)
    custom_field_ref01_data_dt0_load_result = Helpers.to_map(custom_field_ref01_data_dt0_loaded.respond_to?(:data_get) ? custom_field_ref01_data_dt0_loaded.data_get : custom_field_ref01_data_dt0_loaded)
    assert !custom_field_ref01_data_dt0_load_result.nil?
    assert_equal custom_field_ref01_data_dt0_load_result["id"], custom_field_ref01_data["id"]

    # REMOVE
    custom_field_ref01_match_rm0 = {
      "id" => custom_field_ref01_data["id"],
    }
    custom_field_ref01_ent.remove(custom_field_ref01_match_rm0, nil)

    # LIST
    custom_field_ref01_match_rt0 = {}

    custom_field_ref01_list_rt0_result = custom_field_ref01_ent.list(custom_field_ref01_match_rt0, nil)
    assert custom_field_ref01_list_rt0_result.is_a?(Array)

    not_found_item = Vs.select(
      Runner.entity_list_to_data(custom_field_ref01_list_rt0_result),
      { "id" => custom_field_ref01_data["id"] })
    assert Vs.isempty(not_found_item)

  end
end

def custom_field_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "custom_field", "CustomFieldTestData.json")
  entity_data_source = File.read(entity_data_file, encoding: "UTF-8")
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = IncidentIoSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["custom_field01", "custom_field02", "custom_field03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Whether *_ENTID supplied the idmap, read before env_override consumes
  # it: without it, the ids a live flow binds are the fixture's synthetic ones.
  entid_env_raw = ENV["INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID" => idmap,
    "INCIDENT_IO_TEST_LIVE" => "FALSE",
    "INCIDENT_IO_TEST_EXPLAIN" => "FALSE",
    "INCIDENT_IO_APIKEY" => "",
  })

  idmap_resolved = Helpers.to_map(
    env["INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID"])
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

-- ScheduleEntriesListPayloadV2 entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("incident-io_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

-- main.kit.test.live.strict is true (the default is true): a live
-- request that fails, or a live test missing an input it needs,
-- fails the test.
-- An account with no record for a test to read skips it either way.
local LIVE_STRICT = true


describe("ScheduleEntriesListPayloadV2Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ScheduleEntriesListPayloadV2(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:ScheduleEntriesListPayloadV2(nil):create({ ["schedule_id"] = 1, ["final"] = "x", ["overrides"] = "x", ["schedule"] = "x", ["scheduled"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = schedule_entries_list_payload_v2_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "schedule_entries_list_payload_v2." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"schedule01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local schedule_entries_list_payload_v2_ref01_ent = client:ScheduleEntriesListPayloadV2(nil)
    local schedule_entries_list_payload_v2_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.schedule_entries_list_payload_v2"), "schedule_entries_list_payload_v2_ref01"))
    schedule_entries_list_payload_v2_ref01_data["schedule_id"] = setup.idmap["schedule01"]

    local schedule_entries_list_payload_v2_ref01_data_result, err = schedule_entries_list_payload_v2_ref01_ent:create(schedule_entries_list_payload_v2_ref01_data, nil)
    assert.is_nil(err)
    schedule_entries_list_payload_v2_ref01_data = helpers.to_map(type(schedule_entries_list_payload_v2_ref01_data_result) == 'table' and schedule_entries_list_payload_v2_ref01_data_result.data_get and schedule_entries_list_payload_v2_ref01_data_result:data_get() or schedule_entries_list_payload_v2_ref01_data_result)
    assert.is_not_nil(schedule_entries_list_payload_v2_ref01_data)

  end)
end)

function schedule_entries_list_payload_v2_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/schedule_entries_list_payload_v2/ScheduleEntriesListPayloadV2TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read schedule_entries_list_payload_v2 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "schedule_entries_list_payload_v201", "schedule_entries_list_payload_v202", "schedule_entries_list_payload_v203", "schedule01", "schedule02", "schedule03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_SCHEDULE_ENTRIES_LIST_PAYLOAD_V2_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["INCIDENT_IO_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      -- FIRST, so the generated fields below win: sdk-test-control.json's
      -- test.client.options adds to the live client, it does not redirect it.
      runner.live_client_options(),
      {
        apikey = env["INCIDENT_IO_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["INCIDENT_IO_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["INCIDENT_IO_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end

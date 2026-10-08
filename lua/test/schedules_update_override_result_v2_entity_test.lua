-- SchedulesUpdateOverrideResultV2 entity test

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


describe("SchedulesUpdateOverrideResultV2Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SchedulesUpdateOverrideResultV2(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:SchedulesUpdateOverrideResultV2(nil):update({ ["id"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = schedules_update_override_result_v2_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "schedules_update_override_result_v2." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: " .. "the flow updates a schedules_update_override_result_v2 record it did not create")
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local schedules_update_override_result_v2_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.schedules_update_override_result_v2")))
    local schedules_update_override_result_v2_ref01_data = nil
    if #schedules_update_override_result_v2_ref01_data_raw > 0 then
      schedules_update_override_result_v2_ref01_data = helpers.to_map(schedules_update_override_result_v2_ref01_data_raw[1][2])
    end

    -- UPDATE
    local schedules_update_override_result_v2_ref01_ent = client:SchedulesUpdateOverrideResultV2(nil)
    local schedules_update_override_result_v2_ref01_data_up0_up = {
      id = schedules_update_override_result_v2_ref01_data["id"],
    }

    local schedules_update_override_result_v2_ref01_markdef_up0_name = "created_at"
    local schedules_update_override_result_v2_ref01_markdef_up0_value = "Mark01-schedules_update_override_result_v2_ref01_" .. tostring(setup.now)
    schedules_update_override_result_v2_ref01_data_up0_up[schedules_update_override_result_v2_ref01_markdef_up0_name] = schedules_update_override_result_v2_ref01_markdef_up0_value

    local schedules_update_override_result_v2_ref01_resdata_up0_result, err = schedules_update_override_result_v2_ref01_ent:update(schedules_update_override_result_v2_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local schedules_update_override_result_v2_ref01_resdata_up0 = helpers.to_map(type(schedules_update_override_result_v2_ref01_resdata_up0_result) == 'table' and schedules_update_override_result_v2_ref01_resdata_up0_result.data_get and schedules_update_override_result_v2_ref01_resdata_up0_result:data_get() or schedules_update_override_result_v2_ref01_resdata_up0_result)
    assert.is_not_nil(schedules_update_override_result_v2_ref01_resdata_up0)
    assert.are.equal(schedules_update_override_result_v2_ref01_resdata_up0["id"], schedules_update_override_result_v2_ref01_data_up0_up["id"])
    assert.are.equal(schedules_update_override_result_v2_ref01_resdata_up0[schedules_update_override_result_v2_ref01_markdef_up0_name], schedules_update_override_result_v2_ref01_markdef_up0_value)

  end)
end)

function schedules_update_override_result_v2_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/schedules_update_override_result_v2/SchedulesUpdateOverrideResultV2TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read schedules_update_override_result_v2 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "schedules_update_override_result_v201", "schedules_update_override_result_v202", "schedules_update_override_result_v203" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID"])
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

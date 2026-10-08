-- ScheduleSyncRule entity test

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


describe("ScheduleSyncRuleEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:ScheduleSyncRule(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:ScheduleSyncRule(nil):list({ ["id"] = 1 }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = schedule_sync_rule_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "schedule_sync_rule." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"schedule01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID")
        end
      end
    end
    if setup.live then
      runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: " .. "the flow updates a schedule_sync_rule record it did not create")
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local schedule_sync_rule_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.schedule_sync_rule")))
    local schedule_sync_rule_ref01_data = nil
    if #schedule_sync_rule_ref01_data_raw > 0 then
      schedule_sync_rule_ref01_data = helpers.to_map(schedule_sync_rule_ref01_data_raw[1][2])
    end

    -- UPDATE
    local schedule_sync_rule_ref01_ent = client:ScheduleSyncRule(nil)
    local schedule_sync_rule_ref01_data_up0_up = {
      id = schedule_sync_rule_ref01_data["id"],
      ["schedule_id"] = setup.idmap["schedule_id"],
    }

    local schedule_sync_rule_ref01_markdef_up0_name = "created_at"
    local schedule_sync_rule_ref01_markdef_up0_value = "Mark01-schedule_sync_rule_ref01_" .. tostring(setup.now)
    schedule_sync_rule_ref01_data_up0_up[schedule_sync_rule_ref01_markdef_up0_name] = schedule_sync_rule_ref01_markdef_up0_value

    local schedule_sync_rule_ref01_resdata_up0_result, err = schedule_sync_rule_ref01_ent:update(schedule_sync_rule_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local schedule_sync_rule_ref01_resdata_up0 = helpers.to_map(type(schedule_sync_rule_ref01_resdata_up0_result) == 'table' and schedule_sync_rule_ref01_resdata_up0_result.data_get and schedule_sync_rule_ref01_resdata_up0_result:data_get() or schedule_sync_rule_ref01_resdata_up0_result)
    assert.is_not_nil(schedule_sync_rule_ref01_resdata_up0)
    assert.are.equal(schedule_sync_rule_ref01_resdata_up0["id"], schedule_sync_rule_ref01_data_up0_up["id"])
    assert.are.equal(schedule_sync_rule_ref01_resdata_up0[schedule_sync_rule_ref01_markdef_up0_name], schedule_sync_rule_ref01_markdef_up0_value)

    -- LOAD
    local schedule_sync_rule_ref01_match_dt0 = {
      id = schedule_sync_rule_ref01_data["id"],
    }
    local schedule_sync_rule_ref01_data_dt0_loaded, err = schedule_sync_rule_ref01_ent:load(schedule_sync_rule_ref01_match_dt0, nil)
    assert.is_nil(err)
    local schedule_sync_rule_ref01_data_dt0_load_result = helpers.to_map(type(schedule_sync_rule_ref01_data_dt0_loaded) == 'table' and schedule_sync_rule_ref01_data_dt0_loaded.data_get and schedule_sync_rule_ref01_data_dt0_loaded:data_get() or schedule_sync_rule_ref01_data_dt0_loaded)
    assert.is_not_nil(schedule_sync_rule_ref01_data_dt0_load_result)
    assert.are.equal(schedule_sync_rule_ref01_data_dt0_load_result["id"], schedule_sync_rule_ref01_data["id"])

  end)
end)

function schedule_sync_rule_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/schedule_sync_rule/ScheduleSyncRuleTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read schedule_sync_rule test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "schedule_sync_rule01", "schedule_sync_rule02", "schedule_sync_rule03", "schedule01", "schedule02", "schedule03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["schedule_id"] == nil then
    idmap_resolved["schedule_id"] = idmap_resolved["schedule01"]
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

-- PayConfigsUpdateOneOffRuleResultV2 entity test

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


describe("PayConfigsUpdateOneOffRuleResultV2Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PayConfigsUpdateOneOffRuleResultV2(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:PayConfigsUpdateOneOffRuleResultV2(nil):update({ ["id"] = 1, ["pay_config_id"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = pay_configs_update_one_off_rule_result_v2_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "pay_configs_update_one_off_rule_result_v2." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"pay_config01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_ONE_OFF_RULE_RESULT_V2_ENTID")
        end
      end
    end
    if setup.live then
      runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: " .. "the flow updates a pay_configs_update_one_off_rule_result_v2 record it did not create")
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local pay_configs_update_one_off_rule_result_v2_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.pay_configs_update_one_off_rule_result_v2")))
    local pay_configs_update_one_off_rule_result_v2_ref01_data = nil
    if #pay_configs_update_one_off_rule_result_v2_ref01_data_raw > 0 then
      pay_configs_update_one_off_rule_result_v2_ref01_data = helpers.to_map(pay_configs_update_one_off_rule_result_v2_ref01_data_raw[1][2])
    end

    -- UPDATE
    local pay_configs_update_one_off_rule_result_v2_ref01_ent = client:PayConfigsUpdateOneOffRuleResultV2(nil)
    local pay_configs_update_one_off_rule_result_v2_ref01_data_up0_up = {
      id = pay_configs_update_one_off_rule_result_v2_ref01_data["id"],
      ["pay_config_id"] = setup.idmap["pay_config_id"],
    }

    local pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_name = "end_at"
    local pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_value = "Mark01-pay_configs_update_one_off_rule_result_v2_ref01_" .. tostring(setup.now)
    pay_configs_update_one_off_rule_result_v2_ref01_data_up0_up[pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_name] = pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_value

    local pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0_result, err = pay_configs_update_one_off_rule_result_v2_ref01_ent:update(pay_configs_update_one_off_rule_result_v2_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0 = helpers.to_map(type(pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0_result) == 'table' and pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0_result.data_get and pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0_result:data_get() or pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0_result)
    assert.is_not_nil(pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0)
    assert.are.equal(pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0["id"], pay_configs_update_one_off_rule_result_v2_ref01_data_up0_up["id"])
    assert.are.equal(pay_configs_update_one_off_rule_result_v2_ref01_resdata_up0[pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_name], pay_configs_update_one_off_rule_result_v2_ref01_markdef_up0_value)

  end)
end)

function pay_configs_update_one_off_rule_result_v2_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/pay_configs_update_one_off_rule_result_v2/PayConfigsUpdateOneOffRuleResultV2TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read pay_configs_update_one_off_rule_result_v2 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "pay_configs_update_one_off_rule_result_v201", "pay_configs_update_one_off_rule_result_v202", "pay_configs_update_one_off_rule_result_v203", "pay_config01", "pay_config02", "pay_config03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_ONE_OFF_RULE_RESULT_V2_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_ONE_OFF_RULE_RESULT_V2_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_ONE_OFF_RULE_RESULT_V2_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["pay_config_id"] == nil then
    idmap_resolved["pay_config_id"] = idmap_resolved["pay_config01"]
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

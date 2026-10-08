-- EscalationsCheckEscalationPermissionsResultV2 entity test

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


describe("EscalationsCheckEscalationPermissionsResultV2Entity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:EscalationsCheckEscalationPermissionsResultV2(nil)
    assert.is_not_nil(ent)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:EscalationsCheckEscalationPermissionsResultV2(nil):create({ ["escalation_id"] = 1, ["response_options"] = "x", ["user_ids"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = escalations_check_escalation_permissions_result_v2_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "escalations_check_escalation_permissions_result_v2." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    if setup.live then
      for _, _live_key in ipairs({"escalation01"}) do
        if setup.synthetic_only or setup.idmap[_live_key] == nil then
          runner.live_miss(pending, LIVE_STRICT, "Live entity test blocked: needs " .. _live_key .. " via INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID")
        end
      end
    end
    local client = setup.client

    -- CREATE
    local escalations_check_escalation_permissions_result_v2_ref01_ent = client:EscalationsCheckEscalationPermissionsResultV2(nil)
    local escalations_check_escalation_permissions_result_v2_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.escalations_check_escalation_permissions_result_v2"), "escalations_check_escalation_permissions_result_v2_ref01"))
    escalations_check_escalation_permissions_result_v2_ref01_data["escalation_id"] = setup.idmap["escalation01"]

    local escalations_check_escalation_permissions_result_v2_ref01_data_result, err = escalations_check_escalation_permissions_result_v2_ref01_ent:create(escalations_check_escalation_permissions_result_v2_ref01_data, nil)
    assert.is_nil(err)
    escalations_check_escalation_permissions_result_v2_ref01_data = helpers.to_map(type(escalations_check_escalation_permissions_result_v2_ref01_data_result) == 'table' and escalations_check_escalation_permissions_result_v2_ref01_data_result.data_get and escalations_check_escalation_permissions_result_v2_ref01_data_result:data_get() or escalations_check_escalation_permissions_result_v2_ref01_data_result)
    assert.is_not_nil(escalations_check_escalation_permissions_result_v2_ref01_data)

  end)
end)

function escalations_check_escalation_permissions_result_v2_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/escalations_check_escalation_permissions_result_v2/EscalationsCheckEscalationPermissionsResultV2TestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read escalations_check_escalation_permissions_result_v2 test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "escalations_check_escalation_permissions_result_v201", "escalations_check_escalation_permissions_result_v202", "escalations_check_escalation_permissions_result_v203", "escalation01", "escalation02", "escalation03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_ESCALATIONS_CHECK_ESCALATION_PERMISSIONS_RESULT_V2_ENTID"])
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

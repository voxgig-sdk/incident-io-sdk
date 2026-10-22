-- StatusPageMaintenance entity test

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


local BaseFeature = require("feature.base_feature")

local FailHook = {}
FailHook.__index = FailHook
setmetatable(FailHook, { __index = BaseFeature })

function FailHook.new()
  local self = setmetatable(BaseFeature.new(), FailHook)
  self.name = "failhook"
  self.unexpected = 0
  return self
end

function FailHook:init(_ctx, _options) end
function FailHook:PreSpec(_ctx) error("status_page_maintenance hook failed") end
function FailHook:PreUnexpected(_ctx) self.unexpected = self.unexpected + 1 end

local function errtext(err)
  if type(err) == "table" then
    return tostring(err.msg or err.message or "")
  end
  return tostring(err)
end

describe("StatusPageMaintenanceEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:StatusPageMaintenance(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["status_page_maintenance"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:StatusPageMaintenance(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:StatusPageMaintenance(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should report a failed stream", function()
    local offline = { net = { offline = true } }
    local ok, err = pcall(function()
      for _ in sdk.test(offline, nil):StatusPageMaintenance(nil):stream("list", nil, nil) do end
    end)
    assert.is_false(ok)
    assert.truthy(string.find(errtext(err), "offline", 1, true))

    for _ in sdk.test(offline, nil):StatusPageMaintenance(nil):stream("list", nil, { ctrl = { throw = false } }) do end

    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.rbac ~= nil then
      local denied = sdk.test(nil, { feature = { rbac = { active = true, deny = true } } })
      local dok, derr = pcall(function()
        for _ in denied:StatusPageMaintenance(nil):stream("list", nil, nil) do end
      end)
      assert.is_false(dok)
      assert.are.equal("rbac_denied", type(derr) == "table" and derr.code or nil)
    end
  end)

  it("should leave the caller's ctrl", function()
    local explain = {}
    local ctrl = { explain = explain }
    for _ in sdk.test(nil, nil):StatusPageMaintenance(nil):stream("list", nil, { ctrl = ctrl }) do end
    assert.is_nil(ctrl.stream)
    assert.are.equal(explain, ctrl.explain)
    assert.is_not_nil(next(explain))
  end)

  it("should fire PreUnexpected", function()
    local hook = FailHook.new()
    local client = sdk.new({ feature = { test = { active = true } }, extend = { hook } })

    local out, err = client:StatusPageMaintenance(nil):list(nil, nil)
    assert.is_nil(out)
    assert.truthy(string.find(errtext(err), "hook failed", 1, true))
    assert.is_true(hook.unexpected > 0)

    local fired = hook.unexpected
    out, err = client:StatusPageMaintenance(nil):list(nil, { throw = false })
    assert.is_nil(err)
    assert.is_true(hook.unexpected > fired)
  end)

  it("should refuse an invalid request", function()
    local config = require("config_shared")()
    if type(config.feature) ~= "table" or config.feature.validate == nil then
      pending("feature not present in this SDK: validate")
      return
    end
    local client = sdk.test(nil, { feature = { validate = { active = true } } })
    local _, err = client:StatusPageMaintenance(nil):list({ ["after"] = 1, ["status_page_id"] = "x" }, nil)
    assert.are.equal("validate_failed", type(err) == "table" and err.code or nil)
  end)

  it("should run basic flow", function()
    local setup = status_page_maintenance_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "status_page_maintenance." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    local client = setup.client

    -- CREATE
    local status_page_maintenance_ref01_ent = client:StatusPageMaintenance(nil)
    local status_page_maintenance_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.status_page_maintenance"), "status_page_maintenance_ref01"))

    local status_page_maintenance_ref01_data_result, err = status_page_maintenance_ref01_ent:create(status_page_maintenance_ref01_data, nil)
    assert.is_nil(err)
    status_page_maintenance_ref01_data = helpers.to_map(type(status_page_maintenance_ref01_data_result) == 'table' and status_page_maintenance_ref01_data_result.data_get and status_page_maintenance_ref01_data_result:data_get() or status_page_maintenance_ref01_data_result)
    assert.is_not_nil(status_page_maintenance_ref01_data)
    assert.is_not_nil(status_page_maintenance_ref01_data["id"])

    -- LIST
    local status_page_maintenance_ref01_match = {}

    local status_page_maintenance_ref01_list_result, err = status_page_maintenance_ref01_ent:list(status_page_maintenance_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(status_page_maintenance_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(status_page_maintenance_ref01_list_result),
      { id = status_page_maintenance_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local status_page_maintenance_ref01_data_up0_up = {
      id = status_page_maintenance_ref01_data["id"],
    }

    local status_page_maintenance_ref01_markdef_up0_name = "end_at"
    local status_page_maintenance_ref01_markdef_up0_value = "Mark01-status_page_maintenance_ref01_" .. tostring(setup.now)
    status_page_maintenance_ref01_data_up0_up[status_page_maintenance_ref01_markdef_up0_name] = status_page_maintenance_ref01_markdef_up0_value

    local status_page_maintenance_ref01_resdata_up0_result, err = status_page_maintenance_ref01_ent:update(status_page_maintenance_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local status_page_maintenance_ref01_resdata_up0 = helpers.to_map(type(status_page_maintenance_ref01_resdata_up0_result) == 'table' and status_page_maintenance_ref01_resdata_up0_result.data_get and status_page_maintenance_ref01_resdata_up0_result:data_get() or status_page_maintenance_ref01_resdata_up0_result)
    assert.is_not_nil(status_page_maintenance_ref01_resdata_up0)
    assert.are.equal(status_page_maintenance_ref01_resdata_up0["id"], status_page_maintenance_ref01_data_up0_up["id"])
    assert.are.equal(status_page_maintenance_ref01_resdata_up0[status_page_maintenance_ref01_markdef_up0_name], status_page_maintenance_ref01_markdef_up0_value)

    -- LOAD
    local status_page_maintenance_ref01_match_dt0 = {
      id = status_page_maintenance_ref01_data["id"],
    }
    local status_page_maintenance_ref01_data_dt0_loaded, err = status_page_maintenance_ref01_ent:load(status_page_maintenance_ref01_match_dt0, nil)
    assert.is_nil(err)
    local status_page_maintenance_ref01_data_dt0_load_result = helpers.to_map(type(status_page_maintenance_ref01_data_dt0_loaded) == 'table' and status_page_maintenance_ref01_data_dt0_loaded.data_get and status_page_maintenance_ref01_data_dt0_loaded:data_get() or status_page_maintenance_ref01_data_dt0_loaded)
    assert.is_not_nil(status_page_maintenance_ref01_data_dt0_load_result)
    assert.are.equal(status_page_maintenance_ref01_data_dt0_load_result["id"], status_page_maintenance_ref01_data["id"])

    -- REMOVE
    local status_page_maintenance_ref01_match_rm0 = {
      id = status_page_maintenance_ref01_data["id"],
    }
    local _, err = status_page_maintenance_ref01_ent:remove(status_page_maintenance_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local status_page_maintenance_ref01_match_rt0 = {}

    local status_page_maintenance_ref01_list_rt0_result, err = status_page_maintenance_ref01_ent:list(status_page_maintenance_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(status_page_maintenance_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(status_page_maintenance_ref01_list_rt0_result),
      { id = status_page_maintenance_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function status_page_maintenance_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/status_page_maintenance/StatusPageMaintenanceTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read status_page_maintenance test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "status_page_maintenance01", "status_page_maintenance02", "status_page_maintenance03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Whether *_ENTID supplied the idmap, read before env_override consumes
  -- it: without it, the ids a live flow binds are the fixture's synthetic ones.
  local entid_env_raw = os.getenv("INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_ENTID"] = idmap,
    ["INCIDENT_IO_TEST_LIVE"] = "FALSE",
    ["INCIDENT_IO_TEST_EXPLAIN"] = "FALSE",
    ["INCIDENT_IO_APIKEY"] = "",
  })

  local idmap_resolved = helpers.to_map(
    env["INCIDENT_IO_TEST_STATUS_PAGE_MAINTENANCE_ENTID"])
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

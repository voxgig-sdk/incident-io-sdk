-- IncidentIo SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("incident-io_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local IncidentIoSDK = {}
IncidentIoSDK.__index = IncidentIoSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

IncidentIoSDK._make_feature = _make_feature


function IncidentIoSDK.new(options)
  local self = setmetatable({}, IncidentIoSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function IncidentIoSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function IncidentIoSDK:get_utility()
  return Utility.copy(self._utility)
end


function IncidentIoSDK:get_root_ctx()
  return self._rootctx
end


function IncidentIoSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


function IncidentIoSDK:direct(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end



-- Idiomatic facade: client:Action():list() / client:Action():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Action(data)
  local EntityMod = require("entity.action_entity")
  if data == nil then
    if self._action == nil then
      self._action = EntityMod.new(self, nil)
    end
    return self._action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Alert():list() / client:Alert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Alert(data)
  local EntityMod = require("entity.alert_entity")
  if data == nil then
    if self._alert == nil then
      self._alert = EntityMod.new(self, nil)
    end
    return self._alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertAttribute():list() / client:AlertAttribute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertAttribute(data)
  local EntityMod = require("entity.alert_attribute_entity")
  if data == nil then
    if self._alert_attribute == nil then
      self._alert_attribute = EntityMod.new(self, nil)
    end
    return self._alert_attribute
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertNote():list() / client:AlertNote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertNote(data)
  local EntityMod = require("entity.alert_note_entity")
  if data == nil then
    if self._alert_note == nil then
      self._alert_note = EntityMod.new(self, nil)
    end
    return self._alert_note
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertRoute():list() / client:AlertRoute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertRoute(data)
  local EntityMod = require("entity.alert_route_entity")
  if data == nil then
    if self._alert_route == nil then
      self._alert_route = EntityMod.new(self, nil)
    end
    return self._alert_route
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertSource():list() / client:AlertSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertSource(data)
  local EntityMod = require("entity.alert_source_entity")
  if data == nil then
    if self._alert_source == nil then
      self._alert_source = EntityMod.new(self, nil)
    end
    return self._alert_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApiKey():list() / client:ApiKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ApiKey(data)
  local EntityMod = require("entity.api_key_entity")
  if data == nil then
    if self._api_key == nil then
      self._api_key = EntityMod.new(self, nil)
    end
    return self._api_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CatalogEntry():list() / client:CatalogEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CatalogEntry(data)
  local EntityMod = require("entity.catalog_entry_entity")
  if data == nil then
    if self._catalog_entry == nil then
      self._catalog_entry = EntityMod.new(self, nil)
    end
    return self._catalog_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CatalogResource():list() / client:CatalogResource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CatalogResource(data)
  local EntityMod = require("entity.catalog_resource_entity")
  if data == nil then
    if self._catalog_resource == nil then
      self._catalog_resource = EntityMod.new(self, nil)
    end
    return self._catalog_resource
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CatalogType():list() / client:CatalogType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CatalogType(data)
  local EntityMod = require("entity.catalog_type_entity")
  if data == nil then
    if self._catalog_type == nil then
      self._catalog_type = EntityMod.new(self, nil)
    end
    return self._catalog_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CatalogTypeSchema():list() / client:CatalogTypeSchema():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CatalogTypeSchema(data)
  local EntityMod = require("entity.catalog_type_schema_entity")
  if data == nil then
    if self._catalog_type_schema == nil then
      self._catalog_type_schema = EntityMod.new(self, nil)
    end
    return self._catalog_type_schema
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomField():list() / client:CustomField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CustomField(data)
  local EntityMod = require("entity.custom_field_entity")
  if data == nil then
    if self._custom_field == nil then
      self._custom_field = EntityMod.new(self, nil)
    end
    return self._custom_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomFieldOption():list() / client:CustomFieldOption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CustomFieldOption(data)
  local EntityMod = require("entity.custom_field_option_entity")
  if data == nil then
    if self._custom_field_option == nil then
      self._custom_field_option = EntityMod.new(self, nil)
    end
    return self._custom_field_option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Escalation():list() / client:Escalation():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Escalation(data)
  local EntityMod = require("entity.escalation_entity")
  if data == nil then
    if self._escalation == nil then
      self._escalation = EntityMod.new(self, nil)
    end
    return self._escalation
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FollowUp():list() / client:FollowUp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:FollowUp(data)
  local EntityMod = require("entity.follow_up_entity")
  if data == nil then
    if self._follow_up == nil then
      self._follow_up = EntityMod.new(self, nil)
    end
    return self._follow_up
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Incident():list() / client:Incident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Incident(data)
  local EntityMod = require("entity.incident_entity")
  if data == nil then
    if self._incident == nil then
      self._incident = EntityMod.new(self, nil)
    end
    return self._incident
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentAlert():list() / client:IncidentAlert():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentAlert(data)
  local EntityMod = require("entity.incident_alert_entity")
  if data == nil then
    if self._incident_alert == nil then
      self._incident_alert = EntityMod.new(self, nil)
    end
    return self._incident_alert
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentAttachment():list() / client:IncidentAttachment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentAttachment(data)
  local EntityMod = require("entity.incident_attachment_entity")
  if data == nil then
    if self._incident_attachment == nil then
      self._incident_attachment = EntityMod.new(self, nil)
    end
    return self._incident_attachment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentMembership():list() / client:IncidentMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentMembership(data)
  local EntityMod = require("entity.incident_membership_entity")
  if data == nil then
    if self._incident_membership == nil then
      self._incident_membership = EntityMod.new(self, nil)
    end
    return self._incident_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentParticipant():list() / client:IncidentParticipant():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentParticipant(data)
  local EntityMod = require("entity.incident_participant_entity")
  if data == nil then
    if self._incident_participant == nil then
      self._incident_participant = EntityMod.new(self, nil)
    end
    return self._incident_participant
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentParticipantWorkload():list() / client:IncidentParticipantWorkload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentParticipantWorkload(data)
  local EntityMod = require("entity.incident_participant_workload_entity")
  if data == nil then
    if self._incident_participant_workload == nil then
      self._incident_participant_workload = EntityMod.new(self, nil)
    end
    return self._incident_participant_workload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentRelationship():list() / client:IncidentRelationship():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentRelationship(data)
  local EntityMod = require("entity.incident_relationship_entity")
  if data == nil then
    if self._incident_relationship == nil then
      self._incident_relationship = EntityMod.new(self, nil)
    end
    return self._incident_relationship
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentRole():list() / client:IncidentRole():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentRole(data)
  local EntityMod = require("entity.incident_role_entity")
  if data == nil then
    if self._incident_role == nil then
      self._incident_role = EntityMod.new(self, nil)
    end
    return self._incident_role
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentStatus():list() / client:IncidentStatus():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentStatus(data)
  local EntityMod = require("entity.incident_status_entity")
  if data == nil then
    if self._incident_status == nil then
      self._incident_status = EntityMod.new(self, nil)
    end
    return self._incident_status
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentTimestamp():list() / client:IncidentTimestamp():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTimestamp(data)
  local EntityMod = require("entity.incident_timestamp_entity")
  if data == nil then
    if self._incident_timestamp == nil then
      self._incident_timestamp = EntityMod.new(self, nil)
    end
    return self._incident_timestamp
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentType():list() / client:IncidentType():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentType(data)
  local EntityMod = require("entity.incident_type_entity")
  if data == nil then
    if self._incident_type == nil then
      self._incident_type = EntityMod.new(self, nil)
    end
    return self._incident_type
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentUpdate():list() / client:IncidentUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentUpdate(data)
  local EntityMod = require("entity.incident_update_entity")
  if data == nil then
    if self._incident_update == nil then
      self._incident_update = EntityMod.new(self, nil)
    end
    return self._incident_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IpAllowlist():list() / client:IpAllowlist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IpAllowlist(data)
  local EntityMod = require("entity.ip_allowlist_entity")
  if data == nil then
    if self._ip_allowlist == nil then
      self._ip_allowlist = EntityMod.new(self, nil)
    end
    return self._ip_allowlist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MaintenanceWindow():list() / client:MaintenanceWindow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:MaintenanceWindow(data)
  local EntityMod = require("entity.maintenance_window_entity")
  if data == nil then
    if self._maintenance_window == nil then
      self._maintenance_window = EntityMod.new(self, nil)
    end
    return self._maintenance_window
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostmortemDocument():list() / client:PostmortemDocument():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PostmortemDocument(data)
  local EntityMod = require("entity.postmortem_document_entity")
  if data == nil then
    if self._postmortem_document == nil then
      self._postmortem_document = EntityMod.new(self, nil)
    end
    return self._postmortem_document
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Schedule():list() / client:Schedule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Schedule(data)
  local EntityMod = require("entity.schedule_entity")
  if data == nil then
    if self._schedule == nil then
      self._schedule = EntityMod.new(self, nil)
    end
    return self._schedule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduleEntry():list() / client:ScheduleEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleEntry(data)
  local EntityMod = require("entity.schedule_entry_entity")
  if data == nil then
    if self._schedule_entry == nil then
      self._schedule_entry = EntityMod.new(self, nil)
    end
    return self._schedule_entry
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduleReplica():list() / client:ScheduleReplica():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleReplica(data)
  local EntityMod = require("entity.schedule_replica_entity")
  if data == nil then
    if self._schedule_replica == nil then
      self._schedule_replica = EntityMod.new(self, nil)
    end
    return self._schedule_replica
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduleSyncRule():list() / client:ScheduleSyncRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleSyncRule(data)
  local EntityMod = require("entity.schedule_sync_rule_entity")
  if data == nil then
    if self._schedule_sync_rule == nil then
      self._schedule_sync_rule = EntityMod.new(self, nil)
    end
    return self._schedule_sync_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ScheduleSyncTarget():list() / client:ScheduleSyncTarget():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleSyncTarget(data)
  local EntityMod = require("entity.schedule_sync_target_entity")
  if data == nil then
    if self._schedule_sync_target == nil then
      self._schedule_sync_target = EntityMod.new(self, nil)
    end
    return self._schedule_sync_target
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Secret():list() / client:Secret():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Secret(data)
  local EntityMod = require("entity.secret_entity")
  if data == nil then
    if self._secret == nil then
      self._secret = EntityMod.new(self, nil)
    end
    return self._secret
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Severity():list() / client:Severity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Severity(data)
  local EntityMod = require("entity.severity_entity")
  if data == nil then
    if self._severity == nil then
      self._severity = EntityMod.new(self, nil)
    end
    return self._severity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPage():list() / client:StatusPage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPage(data)
  local EntityMod = require("entity.status_page_entity")
  if data == nil then
    if self._status_page == nil then
      self._status_page = EntityMod.new(self, nil)
    end
    return self._status_page
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageIncident():list() / client:StatusPageIncident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageIncident(data)
  local EntityMod = require("entity.status_page_incident_entity")
  if data == nil then
    if self._status_page_incident == nil then
      self._status_page_incident = EntityMod.new(self, nil)
    end
    return self._status_page_incident
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageIncidentUpdate():list() / client:StatusPageIncidentUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageIncidentUpdate(data)
  local EntityMod = require("entity.status_page_incident_update_entity")
  if data == nil then
    if self._status_page_incident_update == nil then
      self._status_page_incident_update = EntityMod.new(self, nil)
    end
    return self._status_page_incident_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageMaintenance():list() / client:StatusPageMaintenance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageMaintenance(data)
  local EntityMod = require("entity.status_page_maintenance_entity")
  if data == nil then
    if self._status_page_maintenance == nil then
      self._status_page_maintenance = EntityMod.new(self, nil)
    end
    return self._status_page_maintenance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageMaintenanceUpdate():list() / client:StatusPageMaintenanceUpdate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageMaintenanceUpdate(data)
  local EntityMod = require("entity.status_page_maintenance_update_entity")
  if data == nil then
    if self._status_page_maintenance_update == nil then
      self._status_page_maintenance_update = EntityMod.new(self, nil)
    end
    return self._status_page_maintenance_update
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageStructure():list() / client:StatusPageStructure():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageStructure(data)
  local EntityMod = require("entity.status_page_structure_entity")
  if data == nil then
    if self._status_page_structure == nil then
      self._status_page_structure = EntityMod.new(self, nil)
    end
    return self._status_page_structure
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Team():list() / client:Team():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Team(data)
  local EntityMod = require("entity.team_entity")
  if data == nil then
    if self._team == nil then
      self._team = EntityMod.new(self, nil)
    end
    return self._team
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TelemetryDataSource():list() / client:TelemetryDataSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:TelemetryDataSource(data)
  local EntityMod = require("entity.telemetry_data_source_entity")
  if data == nil then
    if self._telemetry_data_source == nil then
      self._telemetry_data_source = EntityMod.new(self, nil)
    end
    return self._telemetry_data_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:User():list() / client:User():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:User(data)
  local EntityMod = require("entity.user_entity")
  if data == nil then
    if self._user == nil then
      self._user = EntityMod.new(self, nil)
    end
    return self._user
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Workflow():list() / client:Workflow():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Workflow(data)
  local EntityMod = require("entity.workflow_entity")
  if data == nil then
    if self._workflow == nil then
      self._workflow = EntityMod.new(self, nil)
    end
    return self._workflow
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WorkflowRun():list() / client:WorkflowRun():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:WorkflowRun(data)
  local EntityMod = require("entity.workflow_run_entity")
  if data == nil then
    if self._workflow_run == nil then
      self._workflow_run = EntityMod.new(self, nil)
    end
    return self._workflow_run
  end
  return EntityMod.new(self, data)
end




function IncidentIoSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = IncidentIoSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return IncidentIoSDK

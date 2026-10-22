-- IncidentIo SDK

local json = require("dkjson")
local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")
local unreadable_body = require("utility.unreadable_body")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("incident-io_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local IncidentIoSDK = {}

-- The options and the root context both hold the credential. They live in
-- a side table rather than in the client, so a dump or an encoder walking
-- the client's fields never reaches them; `sdk.options` still reads and
-- writes through the metamethods, and options_map() is the documented way
-- to read the credential back.
local HIDDEN = { options = true, _rootctx = true }
local SLOTS = setmetatable({}, { __mode = "k" })

IncidentIoSDK.__index = function(self, key)
  local member = rawget(IncidentIoSDK, key)
  if member ~= nil then
    return member
  end
  if HIDDEN[key] then
    local slots = SLOTS[self]
    return slots ~= nil and slots[key] or nil
  end
  return nil
end

IncidentIoSDK.__newindex = function(self, key, val)
  if HIDDEN[key] then
    local slots = SLOTS[self]
    if slots == nil then
      slots = {}
      SLOTS[self] = slots
    end
    slots[key] = val
  else
    rawset(self, key, val)
  end
end

-- The client's own record: what a serialiser or clean's snapshot sees in
-- place of the client, so neither reaches the options through it.
function IncidentIoSDK:to_record()
  return { sdk = "IncidentIo", mode = self.mode }
end

IncidentIoSDK.__tostring = function(self)
  return "IncidentIoSDK mode=" .. tostring(self.mode)
end

IncidentIoSDK.__tojson = function(self)
  return json.encode(self:to_record())
end


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

  local config = require("config_shared")()

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

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: secrets
  -- feature: test
  -- feature: timeout


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
  if type(method) ~= "string" or method == "" then method = "GET" end
  method = string.upper(method)

  local allow_method = vs.getpath(options, "allow.method")
  if not helpers.allowed(allow_method, method) then
    return nil, ctx:make_error("spec_method_allow",
      'Method "' .. method ..
      '" not allowed by SDK option allow.method value: "' .. tostring(allow_method or "") .. '"')
  end

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


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function IncidentIoSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function IncidentIoSDK:_op_allowed(op)
  return helpers.allowed(vs.getpath(self.options, "allow.op"), op)
end


function IncidentIoSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "IncidentIoSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function IncidentIoSDK:_raw_request(fetchargs)
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
    return { ok = false, err = utility.clean(ctx, fetch_err) }, nil
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
    local body_err = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
      if vs.getprop(fetched, "unreadable") == true then
        local failed = nil
        if status < 200 or status >= 300 then
          failed = ctx:make_error("request_status",
            "request: " .. tostring(status) .. ": " .. tostring(vs.getprop(fetched, "statusText")))
        end
        body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
          fetchdef["headers"], failed)
      end
    end

    local out = {
      ok = body_err == nil and status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }
    if body_err ~= nil then
      out.err = utility.clean(ctx, body_err)
    end
    return out, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function IncidentIoSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "IncidentIoSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
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


-- Idiomatic facade: client:AlertEventsV2():list() / client:AlertEventsV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertEventsV2(data)
  local EntityMod = require("entity.alert_events_v2_entity")
  if data == nil then
    if self._alert_events_v2 == nil then
      self._alert_events_v2 = EntityMod.new(self, nil)
    end
    return self._alert_events_v2
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


-- Idiomatic facade: client:AlertSourcesV2():list() / client:AlertSourcesV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertSourcesV2(data)
  local EntityMod = require("entity.alert_sources_v2_entity")
  if data == nil then
    if self._alert_sources_v2 == nil then
      self._alert_sources_v2 = EntityMod.new(self, nil)
    end
    return self._alert_sources_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertTag():list() / client:AlertTag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertTag(data)
  local EntityMod = require("entity.alert_tag_entity")
  if data == nil then
    if self._alert_tag == nil then
      self._alert_tag = EntityMod.new(self, nil)
    end
    return self._alert_tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertsAddTagsResultV2():list() / client:AlertsAddTagsResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertsAddTagsResultV2(data)
  local EntityMod = require("entity.alerts_add_tags_result_v2_entity")
  if data == nil then
    if self._alerts_add_tags_result_v2 == nil then
      self._alerts_add_tags_result_v2 = EntityMod.new(self, nil)
    end
    return self._alerts_add_tags_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertsSetTagsResultV2():list() / client:AlertsSetTagsResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertsSetTagsResultV2(data)
  local EntityMod = require("entity.alerts_set_tags_result_v2_entity")
  if data == nil then
    if self._alerts_set_tags_result_v2 == nil then
      self._alerts_set_tags_result_v2 = EntityMod.new(self, nil)
    end
    return self._alerts_set_tags_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AlertsTransitionIncidentAlertResultV2():list() / client:AlertsTransitionIncidentAlertResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AlertsTransitionIncidentAlertResultV2(data)
  local EntityMod = require("entity.alerts_transition_incident_alert_result_v2_entity")
  if data == nil then
    if self._alerts_transition_incident_alert_result_v2 == nil then
      self._alerts_transition_incident_alert_result_v2 = EntityMod.new(self, nil)
    end
    return self._alerts_transition_incident_alert_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnnouncementRule():list() / client:AnnouncementRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AnnouncementRule(data)
  local EntityMod = require("entity.announcement_rule_entity")
  if data == nil then
    if self._announcement_rule == nil then
      self._announcement_rule = EntityMod.new(self, nil)
    end
    return self._announcement_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AnnouncementTemplate():list() / client:AnnouncementTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:AnnouncementTemplate(data)
  local EntityMod = require("entity.announcement_template_entity")
  if data == nil then
    if self._announcement_template == nil then
      self._announcement_template = EntityMod.new(self, nil)
    end
    return self._announcement_template
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


-- Idiomatic facade: client:CallRoute():list() / client:CallRoute():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CallRoute(data)
  local EntityMod = require("entity.call_route_entity")
  if data == nil then
    if self._call_route == nil then
      self._call_route = EntityMod.new(self, nil)
    end
    return self._call_route
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CallRouteAllowedCaller():list() / client:CallRouteAllowedCaller():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CallRouteAllowedCaller(data)
  local EntityMod = require("entity.call_route_allowed_caller_entity")
  if data == nil then
    if self._call_route_allowed_caller == nil then
      self._call_route_allowed_caller = EntityMod.new(self, nil)
    end
    return self._call_route_allowed_caller
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CallRouteOption():list() / client:CallRouteOption():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CallRouteOption(data)
  local EntityMod = require("entity.call_route_option_entity")
  if data == nil then
    if self._call_route_option == nil then
      self._call_route_option = EntityMod.new(self, nil)
    end
    return self._call_route_option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CallSession():list() / client:CallSession():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CallSession(data)
  local EntityMod = require("entity.call_session_entity")
  if data == nil then
    if self._call_session == nil then
      self._call_session = EntityMod.new(self, nil)
    end
    return self._call_session
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CallTranscriptEntry():list() / client:CallTranscriptEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CallTranscriptEntry(data)
  local EntityMod = require("entity.call_transcript_entry_entity")
  if data == nil then
    if self._call_transcript_entry == nil then
      self._call_transcript_entry = EntityMod.new(self, nil)
    end
    return self._call_transcript_entry
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


-- Idiomatic facade: client:CatalogV3():list() / client:CatalogV3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:CatalogV3(data)
  local EntityMod = require("entity.catalog_v3_entity")
  if data == nil then
    if self._catalog_v3 == nil then
      self._catalog_v3 = EntityMod.new(self, nil)
    end
    return self._catalog_v3
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


-- Idiomatic facade: client:EscalationPath():list() / client:EscalationPath():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:EscalationPath(data)
  local EntityMod = require("entity.escalation_path_entity")
  if data == nil then
    if self._escalation_path == nil then
      self._escalation_path = EntityMod.new(self, nil)
    end
    return self._escalation_path
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EscalationPathTemplate():list() / client:EscalationPathTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:EscalationPathTemplate(data)
  local EntityMod = require("entity.escalation_path_template_entity")
  if data == nil then
    if self._escalation_path_template == nil then
      self._escalation_path_template = EntityMod.new(self, nil)
    end
    return self._escalation_path_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EscalationsCheckEscalationPermissionsResultV2():list() / client:EscalationsCheckEscalationPermissionsResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:EscalationsCheckEscalationPermissionsResultV2(data)
  local EntityMod = require("entity.escalations_check_escalation_permissions_result_v2_entity")
  if data == nil then
    if self._escalations_check_escalation_permissions_result_v2 == nil then
      self._escalations_check_escalation_permissions_result_v2 = EntityMod.new(self, nil)
    end
    return self._escalations_check_escalation_permissions_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EscalationsReassignEscalationResultV2():list() / client:EscalationsReassignEscalationResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:EscalationsReassignEscalationResultV2(data)
  local EntityMod = require("entity.escalations_reassign_escalation_result_v2_entity")
  if data == nil then
    if self._escalations_reassign_escalation_result_v2 == nil then
      self._escalations_reassign_escalation_result_v2 = EntityMod.new(self, nil)
    end
    return self._escalations_reassign_escalation_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EscalationsV2():list() / client:EscalationsV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:EscalationsV2(data)
  local EntityMod = require("entity.escalations_v2_entity")
  if data == nil then
    if self._escalations_v2 == nil then
      self._escalations_v2 = EntityMod.new(self, nil)
    end
    return self._escalations_v2
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


-- Idiomatic facade: client:FollowUpsConnectExternalIssueResultV2():list() / client:FollowUpsConnectExternalIssueResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:FollowUpsConnectExternalIssueResultV2(data)
  local EntityMod = require("entity.follow_ups_connect_external_issue_result_v2_entity")
  if data == nil then
    if self._follow_ups_connect_external_issue_result_v2 == nil then
      self._follow_ups_connect_external_issue_result_v2 = EntityMod.new(self, nil)
    end
    return self._follow_ups_connect_external_issue_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FollowUpsConnectExternalIssueResultV3():list() / client:FollowUpsConnectExternalIssueResultV3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:FollowUpsConnectExternalIssueResultV3(data)
  local EntityMod = require("entity.follow_ups_connect_external_issue_result_v3_entity")
  if data == nil then
    if self._follow_ups_connect_external_issue_result_v3 == nil then
      self._follow_ups_connect_external_issue_result_v3 = EntityMod.new(self, nil)
    end
    return self._follow_ups_connect_external_issue_result_v3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:FollowUpsCreateFromLinkResultV3():list() / client:FollowUpsCreateFromLinkResultV3():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:FollowUpsCreateFromLinkResultV3(data)
  local EntityMod = require("entity.follow_ups_create_from_link_result_v3_entity")
  if data == nil then
    if self._follow_ups_create_from_link_result_v3 == nil then
      self._follow_ups_create_from_link_result_v3 = EntityMod.new(self, nil)
    end
    return self._follow_ups_create_from_link_result_v3
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:HeartbeatV2():list() / client:HeartbeatV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:HeartbeatV2(data)
  local EntityMod = require("entity.heartbeat_v2_entity")
  if data == nil then
    if self._heartbeat_v2 == nil then
      self._heartbeat_v2 = EntityMod.new(self, nil)
    end
    return self._heartbeat_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Identity():list() / client:Identity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Identity(data)
  local EntityMod = require("entity.identity_entity")
  if data == nil then
    if self._identity == nil then
      self._identity = EntityMod.new(self, nil)
    end
    return self._identity
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


-- Idiomatic facade: client:IncidentActivityLogEntry():list() / client:IncidentActivityLogEntry():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentActivityLogEntry(data)
  local EntityMod = require("entity.incident_activity_log_entry_entity")
  if data == nil then
    if self._incident_activity_log_entry == nil then
      self._incident_activity_log_entry = EntityMod.new(self, nil)
    end
    return self._incident_activity_log_entry
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


-- Idiomatic facade: client:IncidentForm():list() / client:IncidentForm():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentForm(data)
  local EntityMod = require("entity.incident_form_entity")
  if data == nil then
    if self._incident_form == nil then
      self._incident_form = EntityMod.new(self, nil)
    end
    return self._incident_form
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


-- Idiomatic facade: client:IncidentMembershipsV1():list() / client:IncidentMembershipsV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentMembershipsV1(data)
  local EntityMod = require("entity.incident_memberships_v1_entity")
  if data == nil then
    if self._incident_memberships_v1 == nil then
      self._incident_memberships_v1 = EntityMod.new(self, nil)
    end
    return self._incident_memberships_v1
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


-- Idiomatic facade: client:IncidentTeamMembership():list() / client:IncidentTeamMembership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTeamMembership(data)
  local EntityMod = require("entity.incident_team_membership_entity")
  if data == nil then
    if self._incident_team_membership == nil then
      self._incident_team_membership = EntityMod.new(self, nil)
    end
    return self._incident_team_membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentTeamMembershipsV1():list() / client:IncidentTeamMembershipsV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTeamMembershipsV1(data)
  local EntityMod = require("entity.incident_team_memberships_v1_entity")
  if data == nil then
    if self._incident_team_memberships_v1 == nil then
      self._incident_team_memberships_v1 = EntityMod.new(self, nil)
    end
    return self._incident_team_memberships_v1
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentTemplate():list() / client:IncidentTemplate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTemplate(data)
  local EntityMod = require("entity.incident_template_entity")
  if data == nil then
    if self._incident_template == nil then
      self._incident_template = EntityMod.new(self, nil)
    end
    return self._incident_template
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentTemplatesValidateResultV1():list() / client:IncidentTemplatesValidateResultV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTemplatesValidateResultV1(data)
  local EntityMod = require("entity.incident_templates_validate_result_v1_entity")
  if data == nil then
    if self._incident_templates_validate_result_v1 == nil then
      self._incident_templates_validate_result_v1 = EntityMod.new(self, nil)
    end
    return self._incident_templates_validate_result_v1
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IncidentTimelineItem():list() / client:IncidentTimelineItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentTimelineItem(data)
  local EntityMod = require("entity.incident_timeline_item_entity")
  if data == nil then
    if self._incident_timeline_item == nil then
      self._incident_timeline_item = EntityMod.new(self, nil)
    end
    return self._incident_timeline_item
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


-- Idiomatic facade: client:IncidentsImportPostmortemDocumentResultV2():list() / client:IncidentsImportPostmortemDocumentResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IncidentsImportPostmortemDocumentResultV2(data)
  local EntityMod = require("entity.incidents_import_postmortem_document_result_v2_entity")
  if data == nil then
    if self._incidents_import_postmortem_document_result_v2 == nil then
      self._incidents_import_postmortem_document_result_v2 = EntityMod.new(self, nil)
    end
    return self._incidents_import_postmortem_document_result_v2
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


-- Idiomatic facade: client:IpRange():list() / client:IpRange():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:IpRange(data)
  local EntityMod = require("entity.ip_range_entity")
  if data == nil then
    if self._ip_range == nil then
      self._ip_range = EntityMod.new(self, nil)
    end
    return self._ip_range
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


-- Idiomatic facade: client:ManagedResource():list() / client:ManagedResource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ManagedResource(data)
  local EntityMod = require("entity.managed_resource_entity")
  if data == nil then
    if self._managed_resource == nil then
      self._managed_resource = EntityMod.new(self, nil)
    end
    return self._managed_resource
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnCallNotificationMethodPublicV2():list() / client:OnCallNotificationMethodPublicV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:OnCallNotificationMethodPublicV2(data)
  local EntityMod = require("entity.on_call_notification_method_public_v2_entity")
  if data == nil then
    if self._on_call_notification_method_public_v2 == nil then
      self._on_call_notification_method_public_v2 = EntityMod.new(self, nil)
    end
    return self._on_call_notification_method_public_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnCallNotificationPause():list() / client:OnCallNotificationPause():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:OnCallNotificationPause(data)
  local EntityMod = require("entity.on_call_notification_pause_entity")
  if data == nil then
    if self._on_call_notification_pause == nil then
      self._on_call_notification_pause = EntityMod.new(self, nil)
    end
    return self._on_call_notification_pause
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OnCallNotificationRulePublicV2():list() / client:OnCallNotificationRulePublicV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:OnCallNotificationRulePublicV2(data)
  local EntityMod = require("entity.on_call_notification_rule_public_v2_entity")
  if data == nil then
    if self._on_call_notification_rule_public_v2 == nil then
      self._on_call_notification_rule_public_v2 = EntityMod.new(self, nil)
    end
    return self._on_call_notification_rule_public_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayConfig():list() / client:PayConfig():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayConfig(data)
  local EntityMod = require("entity.pay_config_entity")
  if data == nil then
    if self._pay_config == nil then
      self._pay_config = EntityMod.new(self, nil)
    end
    return self._pay_config
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayConfigOneOffRule():list() / client:PayConfigOneOffRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayConfigOneOffRule(data)
  local EntityMod = require("entity.pay_config_one_off_rule_entity")
  if data == nil then
    if self._pay_config_one_off_rule == nil then
      self._pay_config_one_off_rule = EntityMod.new(self, nil)
    end
    return self._pay_config_one_off_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayConfigWeeklyRule():list() / client:PayConfigWeeklyRule():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayConfigWeeklyRule(data)
  local EntityMod = require("entity.pay_config_weekly_rule_entity")
  if data == nil then
    if self._pay_config_weekly_rule == nil then
      self._pay_config_weekly_rule = EntityMod.new(self, nil)
    end
    return self._pay_config_weekly_rule
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayReport():list() / client:PayReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayReport(data)
  local EntityMod = require("entity.pay_report_entity")
  if data == nil then
    if self._pay_report == nil then
      self._pay_report = EntityMod.new(self, nil)
    end
    return self._pay_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayReportsPublishResultV2():list() / client:PayReportsPublishResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayReportsPublishResultV2(data)
  local EntityMod = require("entity.pay_reports_publish_result_v2_entity")
  if data == nil then
    if self._pay_reports_publish_result_v2 == nil then
      self._pay_reports_publish_result_v2 = EntityMod.new(self, nil)
    end
    return self._pay_reports_publish_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayReportsUnpublishResultV2():list() / client:PayReportsUnpublishResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayReportsUnpublishResultV2(data)
  local EntityMod = require("entity.pay_reports_unpublish_result_v2_entity")
  if data == nil then
    if self._pay_reports_unpublish_result_v2 == nil then
      self._pay_reports_unpublish_result_v2 = EntityMod.new(self, nil)
    end
    return self._pay_reports_unpublish_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PayReportsV2():list() / client:PayReportsV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PayReportsV2(data)
  local EntityMod = require("entity.pay_reports_v2_entity")
  if data == nil then
    if self._pay_reports_v2 == nil then
      self._pay_reports_v2 = EntityMod.new(self, nil)
    end
    return self._pay_reports_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Policy():list() / client:Policy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:Policy(data)
  local EntityMod = require("entity.policy_entity")
  if data == nil then
    if self._policy == nil then
      self._policy = EntityMod.new(self, nil)
    end
    return self._policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PolicyFinding():list() / client:PolicyFinding():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PolicyFinding(data)
  local EntityMod = require("entity.policy_finding_entity")
  if data == nil then
    if self._policy_finding == nil then
      self._policy_finding = EntityMod.new(self, nil)
    end
    return self._policy_finding
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PolicyFindingsDismissResultV2():list() / client:PolicyFindingsDismissResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PolicyFindingsDismissResultV2(data)
  local EntityMod = require("entity.policy_findings_dismiss_result_v2_entity")
  if data == nil then
    if self._policy_findings_dismiss_result_v2 == nil then
      self._policy_findings_dismiss_result_v2 = EntityMod.new(self, nil)
    end
    return self._policy_findings_dismiss_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PolicyFindingsRestoreResultV2():list() / client:PolicyFindingsRestoreResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PolicyFindingsRestoreResultV2(data)
  local EntityMod = require("entity.policy_findings_restore_result_v2_entity")
  if data == nil then
    if self._policy_findings_restore_result_v2 == nil then
      self._policy_findings_restore_result_v2 = EntityMod.new(self, nil)
    end
    return self._policy_findings_restore_result_v2
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


-- Idiomatic facade: client:PostmortemDocumentsAttachResultV1():list() / client:PostmortemDocumentsAttachResultV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PostmortemDocumentsAttachResultV1(data)
  local EntityMod = require("entity.postmortem_documents_attach_result_v1_entity")
  if data == nil then
    if self._postmortem_documents_attach_result_v1 == nil then
      self._postmortem_documents_attach_result_v1 = EntityMod.new(self, nil)
    end
    return self._postmortem_documents_attach_result_v1
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PostmortemDocumentsShowContentResultV1():list() / client:PostmortemDocumentsShowContentResultV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:PostmortemDocumentsShowContentResultV1(data)
  local EntityMod = require("entity.postmortem_documents_show_content_result_v1_entity")
  if data == nil then
    if self._postmortem_documents_show_content_result_v1 == nil then
      self._postmortem_documents_show_content_result_v1 = EntityMod.new(self, nil)
    end
    return self._postmortem_documents_show_content_result_v1
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


-- Idiomatic facade: client:ScheduleEntriesListPayloadV2():list() / client:ScheduleEntriesListPayloadV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleEntriesListPayloadV2(data)
  local EntityMod = require("entity.schedule_entries_list_payload_v2_entity")
  if data == nil then
    if self._schedule_entries_list_payload_v2 == nil then
      self._schedule_entries_list_payload_v2 = EntityMod.new(self, nil)
    end
    return self._schedule_entries_list_payload_v2
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


-- Idiomatic facade: client:ScheduleOverride():list() / client:ScheduleOverride():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:ScheduleOverride(data)
  local EntityMod = require("entity.schedule_override_entity")
  if data == nil then
    if self._schedule_override == nil then
      self._schedule_override = EntityMod.new(self, nil)
    end
    return self._schedule_override
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


-- Idiomatic facade: client:StatusPageComponent():list() / client:StatusPageComponent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageComponent(data)
  local EntityMod = require("entity.status_page_component_entity")
  if data == nil then
    if self._status_page_component == nil then
      self._status_page_component = EntityMod.new(self, nil)
    end
    return self._status_page_component
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:StatusPageComponentAvailability():list() / client:StatusPageComponentAvailability():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageComponentAvailability(data)
  local EntityMod = require("entity.status_page_component_availability_entity")
  if data == nil then
    if self._status_page_component_availability == nil then
      self._status_page_component_availability = EntityMod.new(self, nil)
    end
    return self._status_page_component_availability
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


-- Idiomatic facade: client:StatusPageLinkedResponseIncident():list() / client:StatusPageLinkedResponseIncident():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPageLinkedResponseIncident(data)
  local EntityMod = require("entity.status_page_linked_response_incident_entity")
  if data == nil then
    if self._status_page_linked_response_incident == nil then
      self._status_page_linked_response_incident = EntityMod.new(self, nil)
    end
    return self._status_page_linked_response_incident
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


-- Idiomatic facade: client:StatusPagesCreateStatusPageRetrospectiveIncidentResultV2():list() / client:StatusPagesCreateStatusPageRetrospectiveIncidentResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(data)
  local EntityMod = require("entity.status_pages_create_status_page_retrospective_incident_result_v2_entity")
  if data == nil then
    if self._status_pages_create_status_page_retrospective_incident_result_v2 == nil then
      self._status_pages_create_status_page_retrospective_incident_result_v2 = EntityMod.new(self, nil)
    end
    return self._status_pages_create_status_page_retrospective_incident_result_v2
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


-- Idiomatic facade: client:UsersShowPagingProviderResultV2():list() / client:UsersShowPagingProviderResultV2():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:UsersShowPagingProviderResultV2(data)
  local EntityMod = require("entity.users_show_paging_provider_result_v2_entity")
  if data == nil then
    if self._users_show_paging_provider_result_v2 == nil then
      self._users_show_paging_provider_result_v2 = EntityMod.new(self, nil)
    end
    return self._users_show_paging_provider_result_v2
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:UtilitiesV1():list() / client:UtilitiesV1():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function IncidentIoSDK:UtilitiesV1(data)
  local EntityMod = require("entity.utilities_v1_entity")
  if data == nil then
    if self._utilities_v1 == nil then
      self._utilities_v1 = EntityMod.new(self, nil)
    end
    return self._utilities_v1
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

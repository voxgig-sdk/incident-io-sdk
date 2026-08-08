# IncidentIo Lua SDK Reference

Complete API reference for the IncidentIo Lua SDK.


## IncidentIoSDK

### Constructor

```lua
local sdk = require("incident-io_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Action(data)`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `Alert(data)`

Create a new `Alert` entity instance. Pass `nil` for no initial data.

#### `AlertAttribute(data)`

Create a new `AlertAttribute` entity instance. Pass `nil` for no initial data.

#### `AlertNote(data)`

Create a new `AlertNote` entity instance. Pass `nil` for no initial data.

#### `AlertRoute(data)`

Create a new `AlertRoute` entity instance. Pass `nil` for no initial data.

#### `AlertSource(data)`

Create a new `AlertSource` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `CatalogEntry(data)`

Create a new `CatalogEntry` entity instance. Pass `nil` for no initial data.

#### `CatalogResource(data)`

Create a new `CatalogResource` entity instance. Pass `nil` for no initial data.

#### `CatalogType(data)`

Create a new `CatalogType` entity instance. Pass `nil` for no initial data.

#### `CatalogTypeSchema(data)`

Create a new `CatalogTypeSchema` entity instance. Pass `nil` for no initial data.

#### `CustomField(data)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldOption(data)`

Create a new `CustomFieldOption` entity instance. Pass `nil` for no initial data.

#### `Escalation(data)`

Create a new `Escalation` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data)`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `Incident(data)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `IncidentAlert(data)`

Create a new `IncidentAlert` entity instance. Pass `nil` for no initial data.

#### `IncidentAttachment(data)`

Create a new `IncidentAttachment` entity instance. Pass `nil` for no initial data.

#### `IncidentMembership(data)`

Create a new `IncidentMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipant(data)`

Create a new `IncidentParticipant` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipantWorkload(data)`

Create a new `IncidentParticipantWorkload` entity instance. Pass `nil` for no initial data.

#### `IncidentRelationship(data)`

Create a new `IncidentRelationship` entity instance. Pass `nil` for no initial data.

#### `IncidentRole(data)`

Create a new `IncidentRole` entity instance. Pass `nil` for no initial data.

#### `IncidentStatus(data)`

Create a new `IncidentStatus` entity instance. Pass `nil` for no initial data.

#### `IncidentTimestamp(data)`

Create a new `IncidentTimestamp` entity instance. Pass `nil` for no initial data.

#### `IncidentType(data)`

Create a new `IncidentType` entity instance. Pass `nil` for no initial data.

#### `IncidentUpdate(data)`

Create a new `IncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data)`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `MaintenanceWindow(data)`

Create a new `MaintenanceWindow` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocument(data)`

Create a new `PostmortemDocument` entity instance. Pass `nil` for no initial data.

#### `Schedule(data)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntry(data)`

Create a new `ScheduleEntry` entity instance. Pass `nil` for no initial data.

#### `ScheduleReplica(data)`

Create a new `ScheduleReplica` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncRule(data)`

Create a new `ScheduleSyncRule` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncTarget(data)`

Create a new `ScheduleSyncTarget` entity instance. Pass `nil` for no initial data.

#### `Secret(data)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Severity(data)`

Create a new `Severity` entity instance. Pass `nil` for no initial data.

#### `StatusPage(data)`

Create a new `StatusPage` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncident(data)`

Create a new `StatusPageIncident` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncidentUpdate(data)`

Create a new `StatusPageIncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenance(data)`

Create a new `StatusPageMaintenance` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenanceUpdate(data)`

Create a new `StatusPageMaintenanceUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageStructure(data)`

Create a new `StatusPageStructure` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TelemetryDataSource(data)`

Create a new `TelemetryDataSource` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Workflow(data)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowRun(data)`

Create a new `WorkflowRun` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActionEntity

```lua
local action = client:Action(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | Yes |  |
| `assignee_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `table` | No |  |
| `follow_up` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignee` | - | - | - | - | - |
| `assignee_id` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `description` | Yes | Yes | Yes | Yes | - |
| `external_issue_reference` | - | - | - | - | - |
| `follow_up` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Action():create({
  assignee = --[[ table ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  follow_up = --[[ boolean ]],
  id = --[[ string ]],
  incident_id = --[[ string ]],
  status = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Action():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Action():load({ id = "action_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Action():remove({ id = "action_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Action():update({
  id = "action_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertEntity

```lua
local alert = client:Alert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `table` | No |  |
| `alert_source_id` | `string` | Yes |  |
| `attribute` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deduplication_key` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `resolved_at` | `string` | No |  |
| `source_url` | `string` | No |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Alert():create({
  id = --[[ string ]],
  alert_source_id = --[[ string ]],
  attribute = --[[ table ]],
  created_at = --[[ string ]],
  deduplication_key = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Alert():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Alert():load({ id = "alert_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertAttributeEntity

```lua
local alert_attribute = client:AlertAttribute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `boolean` | Yes |  |
| `emoji` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `required` | `boolean` | Yes |  |
| `type` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `array` | - | - | - | - | - |
| `emoji` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | Yes | - |
| `type` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AlertAttribute():create({
  array = --[[ boolean ]],
  id = --[[ string ]],
  name = --[[ string ]],
  required = --[[ boolean ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AlertAttribute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AlertAttribute():load({ id = "alert_attribute_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AlertAttribute():remove({ id = "alert_attribute_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AlertAttribute():update({
  id = "alert_attribute_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertNoteEntity

```lua
local alert_note = client:AlertNote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No |  |
| `alert_id` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `image` | `table` | Yes |  |
| `last_edited_at` | `string` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AlertNote():create({
  content = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  id = --[[ string ]],
  image = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AlertNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AlertNote():load({ id = "alert_note_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AlertNote():remove({ id = "alert_note_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AlertNote():update({
  id = "alert_note_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertRouteEntity

```lua
local alert_route = client:AlertRoute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_source` | `table` | Yes |  |
| `channel_config` | `table` | Yes |  |
| `condition_group` | `table` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `escalation_config` | `table` | Yes |  |
| `expression` | `table` | Yes |  |
| `grouping_config` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `table` | Yes |  |
| `incident_template` | `table` | Yes |  |
| `is_private` | `boolean` | Yes |  |
| `message_config` | `table` | Yes |  |
| `message_template` | `table` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AlertRoute():create({
  alert_source = --[[ table ]],
  channel_config = --[[ table ]],
  condition_group = --[[ table ]],
  enabled = --[[ boolean ]],
  escalation_config = --[[ table ]],
  expression = --[[ table ]],
  grouping_config = --[[ table ]],
  id = --[[ string ]],
  incident_config = --[[ table ]],
  incident_template = --[[ table ]],
  is_private = --[[ boolean ]],
  message_config = --[[ table ]],
  name = --[[ string ]],
  version = --[[ number ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AlertRoute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AlertRoute():load({ id = "alert_route_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AlertRoute():remove({ id = "alert_route_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AlertRoute():update({
  id = "alert_route_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertSourceEntity

```lua
local alert_source = client:AlertSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No |  |
| `auto_resolve_incident_alert` | `boolean` | No |  |
| `auto_resolve_timeout_minute` | `number` | No |  |
| `disabled` | `boolean` | No |  |
| `email_option` | `table` | Yes |  |
| `heartbeat_option` | `table` | Yes |  |
| `http_custom_option` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `jira_option` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `secret_token` | `string` | No |  |
| `source_type` | `string` | Yes |  |
| `template` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AlertSource():create({
  email_option = --[[ table ]],
  heartbeat_option = --[[ table ]],
  http_custom_option = --[[ table ]],
  id = --[[ string ]],
  jira_option = --[[ table ]],
  name = --[[ string ]],
  source_type = --[[ string ]],
  template = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AlertSource():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AlertSource():load({ id = "alert_source_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AlertSource():remove({ id = "alert_source_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AlertSource():update({
  id = "alert_source_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApiKeyEntity

```lua
local api_key = client:ApiKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `grace_period_minute` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `table` | Yes |  |
| `role_name` | `table` | Yes |  |
| `team_id` | `table` | Yes |  |
| `team_role` | `table` | Yes |  |
| `team_role_name` | `table` | Yes |  |
| `token_last_issued_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ApiKey():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  grace_period_minute = --[[ number ]],
  id = --[[ string ]],
  name = --[[ string ]],
  role = --[[ table ]],
  role_name = --[[ table ]],
  team_id = --[[ table ]],
  team_role = --[[ table ]],
  team_role_name = --[[ table ]],
  token_last_issued_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ApiKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApiKey():load({ id = "api_key_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ApiKey():remove({ id = "api_key_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ApiKey():update({
  id = "api_key_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogEntryEntity

```lua
local catalog_entry = client:CatalogEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `table` | No |  |
| `archived_at` | `string` | No |  |
| `attribute_value` | `table` | Yes |  |
| `catalog_entry` | `table` | Yes |  |
| `catalog_type` | `table` | Yes |  |
| `catalog_type_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | No |  |
| `update_attribute` | `table` | No |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `alias` | - | Yes | - | - |
| `archived_at` | - | - | - | - |
| `attribute_value` | - | - | - | - |
| `catalog_entry` | - | - | - | - |
| `catalog_type` | - | - | - | - |
| `catalog_type_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `external_id` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | Yes | - | - |
| `update_attribute` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CatalogEntry():create({
  attribute_value = --[[ table ]],
  catalog_entry = --[[ table ]],
  catalog_type = --[[ table ]],
  catalog_type_id = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CatalogEntry():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CatalogEntry():load({ id = "catalog_entry_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CatalogEntry():update({
  id = "catalog_entry_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogResourceEntity

```lua
local catalog_resource = client:CatalogResource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `engine_resource_type` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `value_docstring` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CatalogResource():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogTypeEntity

```lua
local catalog_type = client:CatalogType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | Yes |  |
| `category` | `table` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dynamic_resource_parameter` | `string` | No |  |
| `engine_resource_type` | `string` | Yes |  |
| `estimated_count` | `number` | No |  |
| `icon` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_editable` | `boolean` | Yes |  |
| `is_team_type` | `boolean` | No |  |
| `last_synced_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `ranked` | `boolean` | Yes |  |
| `registry_type` | `string` | No |  |
| `required_integration` | `table` | No |  |
| `schema` | `table` | Yes |  |
| `semantic_type` | `string` | Yes |  |
| `source_repo_url` | `string` | No |  |
| `type_name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `use_name_as_identifier` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotation` | - | - | Yes | Yes |
| `category` | - | - | Yes | Yes |
| `color` | - | - | Yes | Yes |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `dynamic_resource_parameter` | - | - | - | - |
| `engine_resource_type` | - | - | - | - |
| `estimated_count` | - | - | - | - |
| `icon` | - | - | Yes | Yes |
| `id` | - | - | - | - |
| `is_editable` | - | - | - | - |
| `is_team_type` | - | - | - | - |
| `last_synced_at` | - | - | - | - |
| `name` | - | - | - | - |
| `owning_team_id` | - | - | - | - |
| `ranked` | - | - | Yes | Yes |
| `registry_type` | - | - | - | - |
| `required_integration` | - | - | - | - |
| `schema` | - | - | - | - |
| `semantic_type` | - | - | - | - |
| `source_repo_url` | - | - | - | - |
| `type_name` | - | - | Yes | - |
| `updated_at` | - | - | - | - |
| `use_name_as_identifier` | - | - | Yes | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CatalogType():create({
  annotation = --[[ table ]],
  category = --[[ table ]],
  color = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  engine_resource_type = --[[ string ]],
  icon = --[[ string ]],
  id = --[[ string ]],
  is_editable = --[[ boolean ]],
  name = --[[ string ]],
  ranked = --[[ boolean ]],
  schema = --[[ table ]],
  semantic_type = --[[ string ]],
  type_name = --[[ string ]],
  updated_at = --[[ string ]],
  use_name_as_identifier = --[[ boolean ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CatalogType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CatalogType():load({ id = "catalog_type_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CatalogType():update({
  id = "catalog_type_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CatalogTypeSchemaEntity

```lua
local catalog_type_schema = client:CatalogTypeSchema(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | Yes |  |
| `attribute` | `table` | Yes |  |
| `category` | `table` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dynamic_resource_parameter` | `string` | No |  |
| `engine_resource_type` | `string` | Yes |  |
| `estimated_count` | `number` | No |  |
| `icon` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_editable` | `boolean` | Yes |  |
| `is_team_type` | `boolean` | No |  |
| `last_synced_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `ranked` | `boolean` | Yes |  |
| `registry_type` | `string` | No |  |
| `required_integration` | `table` | No |  |
| `schema` | `table` | Yes |  |
| `semantic_type` | `string` | Yes |  |
| `source_repo_url` | `string` | No |  |
| `type_name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `use_name_as_identifier` | `boolean` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CatalogTypeSchema():create({
  catalog_type_id = --[[ string ]],
  annotation = --[[ table ]],
  attribute = --[[ table ]],
  category = --[[ table ]],
  color = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  engine_resource_type = --[[ string ]],
  icon = --[[ string ]],
  id = --[[ string ]],
  is_editable = --[[ boolean ]],
  name = --[[ string ]],
  ranked = --[[ boolean ]],
  schema = --[[ table ]],
  semantic_type = --[[ string ]],
  type_name = --[[ string ]],
  updated_at = --[[ string ]],
  use_name_as_identifier = --[[ boolean ]],
  version = --[[ number ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldEntity

```lua
local custom_field = client:CustomField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `filter_by` | `table` | Yes |  |
| `fixed_filter` | `table` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No |  |
| `helptext_catalog_attribute_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `option` | `table` | Yes |  |
| `required` | `string` | No |  |
| `required_v2` | `string` | No |  |
| `show_before_closure` | `boolean` | Yes |  |
| `show_before_creation` | `boolean` | Yes |  |
| `show_before_update` | `boolean` | Yes |  |
| `show_in_announcement_post` | `boolean` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomField():create({
  created_at = --[[ string ]],
  description = --[[ string ]],
  field_type = --[[ string ]],
  filter_by = --[[ table ]],
  fixed_filter = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  option = --[[ table ]],
  show_before_closure = --[[ boolean ]],
  show_before_creation = --[[ boolean ]],
  show_before_update = --[[ boolean ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomField():load({ id = "custom_field_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomField():remove({ id = "custom_field_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomField():update({
  id = "custom_field_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldOptionEntity

```lua
local custom_field_option = client:CustomFieldOption(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `sort_key` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomFieldOption():create({
  custom_field_id = --[[ string ]],
  id = --[[ string ]],
  sort_key = --[[ number ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomFieldOption():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomFieldOption():load({ id = "custom_field_option_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomFieldOption():remove({ id = "custom_field_option_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomFieldOption():update({
  id = "custom_field_option_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EscalationEntity

```lua
local escalation = client:Escalation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `description` | `string` | No |  |
| `escalation_path_id` | `string` | No |  |
| `event` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `priority` | `table` | Yes |  |
| `related_alert` | `table` | Yes |  |
| `related_incident` | `table` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `user_id` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Escalation():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  event = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  priority = --[[ table ]],
  related_alert = --[[ table ]],
  related_incident = --[[ table ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Escalation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Escalation():load({ id = "escalation_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EscalationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FollowUpEntity

```lua
local follow_up = client:FollowUp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | Yes |  |
| `assignee_id` | `string` | No |  |
| `assignee_team` | `table` | Yes |  |
| `assignee_team_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `table` | Yes |  |
| `external_issue_reference_id` | `string` | No |  |
| `follow_up_category_id` | `string` | No |  |
| `follow_up_priority_option_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `label` | `table` | Yes |  |
| `priority` | `table` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignee` | - | - | - | - | - |
| `assignee_id` | - | - | - | - | - |
| `assignee_team` | - | - | - | - | - |
| `assignee_team_id` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `external_issue_reference` | - | - | - | - | - |
| `external_issue_reference_id` | - | - | - | - | - |
| `follow_up_category_id` | - | - | - | - | - |
| `follow_up_priority_option_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `label` | - | - | Yes | Yes | - |
| `priority` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:FollowUp():create({
  assignee = --[[ table ]],
  assignee_team = --[[ table ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  external_issue_reference = --[[ table ]],
  id = --[[ string ]],
  incident_id = --[[ string ]],
  label = --[[ table ]],
  priority = --[[ table ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:FollowUp():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:FollowUp():load({ id = "follow_up_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:FollowUp():remove({ id = "follow_up_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:FollowUp():update({
  id = "follow_up_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentEntity

```lua
local incident = client:Incident(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `table` | Yes |  |
| `custom_field_entry` | `table` | Yes |  |
| `duration_metric` | `table` | No |  |
| `external_issue_reference` | `table` | Yes |  |
| `has_debrief` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident` | `table` | Yes |  |
| `incident_role_assignment` | `table` | Yes |  |
| `incident_status` | `table` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `table` | No |  |
| `incident_type` | `table` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_incident_channel` | `boolean` | Yes |  |
| `permalink` | `string` | No |  |
| `postmortem_document_id` | `table` | No |  |
| `postmortem_document_url` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `retrospective_incident_option` | `table` | No |  |
| `severity` | `table` | Yes |  |
| `severity_id` | `string` | No |  |
| `slack_channel_id` | `string` | Yes |  |
| `slack_channel_name` | `string` | No |  |
| `slack_channel_name_override` | `string` | No |  |
| `slack_team_id` | `string` | Yes |  |
| `source_message_channel_id` | `string` | No |  |
| `source_message_timestamp` | `string` | No |  |
| `status` | `string` | Yes |  |
| `summary` | `string` | No |  |
| `timestamp` | `table` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `workload_minutes_late` | `number` | No |  |
| `workload_minutes_sleeping` | `number` | No |  |
| `workload_minutes_total` | `number` | No |  |
| `workload_minutes_working` | `number` | No |  |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `call_url` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `custom_field_entry` | - | - | Yes |
| `duration_metric` | - | - | - |
| `external_issue_reference` | - | - | - |
| `has_debrief` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident` | - | - | - |
| `incident_role_assignment` | - | - | Yes |
| `incident_status` | - | - | - |
| `incident_status_id` | - | - | - |
| `incident_timestamp_value` | - | - | - |
| `incident_type` | - | - | - |
| `incident_type_id` | - | - | - |
| `mode` | - | - | Yes |
| `name` | - | - | Yes |
| `notify_incident_channel` | - | - | - |
| `permalink` | - | - | - |
| `postmortem_document_id` | - | - | - |
| `postmortem_document_url` | - | - | - |
| `reference` | - | - | - |
| `retrospective_incident_option` | - | - | - |
| `severity` | - | - | - |
| `severity_id` | - | - | - |
| `slack_channel_id` | - | - | - |
| `slack_channel_name` | - | - | - |
| `slack_channel_name_override` | - | - | - |
| `slack_team_id` | - | - | Yes |
| `source_message_channel_id` | - | - | - |
| `source_message_timestamp` | - | - | - |
| `status` | - | - | Yes |
| `summary` | - | - | - |
| `timestamp` | - | - | - |
| `updated_at` | - | - | - |
| `visibility` | - | - | - |
| `workload_minutes_late` | - | - | - |
| `workload_minutes_sleeping` | - | - | - |
| `workload_minutes_total` | - | - | - |
| `workload_minutes_working` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Incident():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  custom_field_entry = --[[ table ]],
  external_issue_reference = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident = --[[ table ]],
  incident_role_assignment = --[[ table ]],
  incident_status = --[[ table ]],
  incident_type = --[[ table ]],
  mode = --[[ string ]],
  name = --[[ string ]],
  notify_incident_channel = --[[ boolean ]],
  reference = --[[ string ]],
  severity = --[[ table ]],
  slack_channel_id = --[[ string ]],
  slack_team_id = --[[ string ]],
  status = --[[ string ]],
  updated_at = --[[ string ]],
  visibility = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Incident():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Incident():load({ id = "incident_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentAlertEntity

```lua
local incident_alert = client:IncidentAlert(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `table` | Yes |  |
| `alert_route_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentAlert():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentAlertEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentAttachmentEntity

```lua
local incident_attachment = client:IncidentAttachment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `resource` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IncidentAttachment():create({
  id = --[[ string ]],
  incident_id = --[[ string ]],
  resource = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentAttachment():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IncidentAttachment():remove({ id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentMembershipEntity

```lua
local incident_membership = client:IncidentMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IncidentMembership():create({
  incident_id = --[[ string ]],
  user_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentParticipantEntity

```lua
local incident_participant = client:IncidentParticipant(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `table` | Yes |  |
| `passive` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IncidentParticipant():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```lua
local incident_participant_workload = client:IncidentParticipantWorkload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `participant_type` | `string` | No |  |
| `user` | `table` | Yes |  |
| `workload` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentParticipantWorkload():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentRelationshipEntity

```lua
local incident_relationship = client:IncidentRelationship(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentRelationship():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentRoleEntity

```lua
local incident_role = client:IncidentRole(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `instruction` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `required` | `boolean` | No |  |
| `role_type` | `string` | Yes |  |
| `shortform` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `instruction` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | - | - |
| `role_type` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IncidentRole():create({
  created_at = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  instruction = --[[ string ]],
  name = --[[ string ]],
  role_type = --[[ string ]],
  shortform = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentRole():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IncidentRole():load({ id = "incident_role_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IncidentRole():remove({ id = "incident_role_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IncidentRole():update({
  id = "incident_role_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentStatusEntity

```lua
local incident_status = client:IncidentStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:IncidentStatus():create({
  category = --[[ string ]],
  created_at = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  rank = --[[ number ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentStatus():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IncidentStatus():load({ id = "incident_status_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IncidentStatus():remove({ id = "incident_status_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IncidentStatus():update({
  id = "incident_status_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTimestampEntity

```lua
local incident_timestamp = client:IncidentTimestamp(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentTimestamp():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IncidentTimestamp():load({ id = "incident_timestamp_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTypeEntity

```lua
local incident_type = client:IncidentType(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_default` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `private_incidents_only` | `boolean` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IncidentType():load({ id = "incident_type_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentUpdateEntity

```lua
local incident_update = client:IncidentUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `merged_into_incident_id` | `string` | No |  |
| `message` | `string` | No |  |
| `new_incident_status` | `table` | Yes |  |
| `new_severity` | `table` | Yes |  |
| `updater` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:IncidentUpdate():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IpAllowlistEntity

```lua
local ip_allowlist = client:IpAllowlist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `table` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `updated_at` | `string` | No |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:IpAllowlist():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IpAllowlist():update({
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MaintenanceWindowEntity

```lua
local maintenance_window = client:MaintenanceWindow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_group` | `table` | Yes |  |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes |  |
| `escalation_target` | `table` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `lead` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `notification_message` | `string` | No |  |
| `notify_channel` | `table` | No |  |
| `notify_end_minutes_before` | `number` | No |  |
| `notify_start_minutes_before` | `number` | No |  |
| `reroute_on_end` | `boolean` | Yes |  |
| `resolve_on_end` | `boolean` | Yes |  |
| `show_in_sidebar` | `boolean` | Yes |  |
| `start_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `alert_condition_group` | - | - | - | - | - |
| `archived_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `end_at` | - | - | - | - | - |
| `escalation_target` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `lead` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notification_message` | - | - | - | - | - |
| `notify_channel` | - | - | - | - | - |
| `notify_end_minutes_before` | - | - | - | - | - |
| `notify_start_minutes_before` | - | - | - | - | - |
| `reroute_on_end` | - | - | Yes | Yes | - |
| `resolve_on_end` | - | - | Yes | Yes | - |
| `show_in_sidebar` | - | - | - | - | - |
| `start_at` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MaintenanceWindow():create({
  alert_condition_group = --[[ table ]],
  created_at = --[[ string ]],
  end_at = --[[ string ]],
  id = --[[ string ]],
  lead = --[[ table ]],
  name = --[[ string ]],
  reroute_on_end = --[[ boolean ]],
  resolve_on_end = --[[ boolean ]],
  show_in_sidebar = --[[ boolean ]],
  start_at = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:MaintenanceWindow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MaintenanceWindow():load({ id = "maintenance_window_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:MaintenanceWindow():remove({ id = "maintenance_window_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:MaintenanceWindow():update({
  id = "maintenance_window_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PostmortemDocumentEntity

```lua
local postmortem_document = client:PostmortemDocument(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `document_url` | `string` | Yes |  |
| `editor` | `table` | Yes |  |
| `exported_url` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PostmortemDocument():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PostmortemDocument():load({ id = "postmortem_document_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PostmortemDocument():update({
  id = "postmortem_document_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleEntity

```lua
local schedule = client:Schedule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | Yes |  |
| `config` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shift` | `table` | No |  |
| `holidays_public_config` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `next_shift` | `table` | No |  |
| `permalink` | `string` | Yes |  |
| `schedule` | `table` | Yes |  |
| `team_id` | `table` | Yes |  |
| `timezone` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Schedule():create({
  annotation = --[[ table ]],
  config = --[[ table ]],
  created_at = --[[ string ]],
  holidays_public_config = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  permalink = --[[ string ]],
  schedule = --[[ table ]],
  team_id = --[[ table ]],
  timezone = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Schedule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Schedule():load({ id = "schedule_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Schedule():remove({ id = "schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Schedule():update({
  id = "schedule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleEntryEntity

```lua
local schedule_entry = client:ScheduleEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `table` | Yes |  |
| `schedule_entry` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScheduleEntry():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleReplicaEntity

```lua
local schedule_replica = client:ScheduleReplica(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_sync_error` | `string` | No |  |
| `last_synced_at` | `string` | No |  |
| `mirror_window_day` | `number` | No |  |
| `replica_fallback_user_id` | `string` | Yes |  |
| `replica_provider` | `string` | Yes |  |
| `replica_provider_id` | `string` | Yes |  |
| `schedule_id` | `string` | Yes |  |
| `schedule_replica` | `table` | Yes |  |
| `source` | `table` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `user_status` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ScheduleReplica():create({
  id = --[[ string ]],
  created_at = --[[ string ]],
  replica_fallback_user_id = --[[ string ]],
  replica_provider = --[[ string ]],
  replica_provider_id = --[[ string ]],
  schedule_id = --[[ string ]],
  schedule_replica = --[[ table ]],
  source = --[[ table ]],
  updated_at = --[[ string ]],
  user_status = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ScheduleReplica():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScheduleReplica():load({ id = "schedule_replica_id", schedule_id = "schedule_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleSyncRuleEntity

```lua
local schedule_sync_rule = client:ScheduleSyncRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `permanent_member_user_id` | `table` | Yes |  |
| `rotation_id` | `string` | No |  |
| `schedule_id` | `string` | Yes |  |
| `schedule_sync_rule` | `table` | Yes |  |
| `schedule_sync_target` | `table` | Yes |  |
| `schedule_sync_target_id` | `string` | Yes |  |
| `sync_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotation` | - | - | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `permanent_member_user_id` | - | - | - | Yes |
| `rotation_id` | - | - | - | - |
| `schedule_id` | - | - | - | - |
| `schedule_sync_rule` | - | - | - | - |
| `schedule_sync_target` | - | - | - | - |
| `schedule_sync_target_id` | - | - | - | - |
| `sync_type` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ScheduleSyncRule():create({
  id = --[[ string ]],
  created_at = --[[ string ]],
  permanent_member_user_id = --[[ table ]],
  schedule_id = --[[ string ]],
  schedule_sync_rule = --[[ table ]],
  schedule_sync_target = --[[ table ]],
  schedule_sync_target_id = --[[ string ]],
  sync_type = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ScheduleSyncRule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScheduleSyncRule():load({ id = "schedule_sync_rule_id", schedule_id = "schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ScheduleSyncRule():update({
  id = "schedule_sync_rule_id",
  schedule_id = "schedule_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScheduleSyncTargetEntity

```lua
local schedule_sync_target = client:ScheduleSyncTarget(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `boolean` | Yes |  |
| `annotation` | `table` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `linked_schedule` | `table` | Yes |  |
| `schedule_sync_target` | `table` | Yes |  |
| `slack_team_id` | `string` | Yes |  |
| `slack_user_group_id` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ScheduleSyncTarget():create({
  add_bot_to_group = --[[ boolean ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  linked_schedule = --[[ table ]],
  schedule_sync_target = --[[ table ]],
  slack_team_id = --[[ string ]],
  slack_user_group_id = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ScheduleSyncTarget():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ScheduleSyncTarget():load({ id = "schedule_sync_target_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:ScheduleSyncTarget():remove({ id = "schedule_sync_target_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ScheduleSyncTarget():update({
  id = "schedule_sync_target_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SecretEntity

```lua
local secret = client:Secret(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_four_char` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `table` | Yes |  |
| `secret` | `table` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_four_char` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_id` | - | - | Yes | Yes | - |
| `secret` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `value` | - | - | - | - | - |
| `version` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Secret():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  owning_team_id = --[[ table ]],
  secret = --[[ table ]],
  updated_at = --[[ string ]],
  value = --[[ string ]],
  version = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Secret():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Secret():load({ id = "secret_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Secret():remove({ id = "secret_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Secret():update({
  id = "secret_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SeverityEntity

```lua
local severity = client:Severity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | - | Yes | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Severity():create({
  created_at = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  rank = --[[ number ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Severity():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Severity():load({ id = "severity_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Severity():update({
  id = "severity_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeverityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageEntity

```lua
local status_page = client:StatusPage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `public_url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StatusPage():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageIncidentEntity

```lua
local status_page_incident = client:StatusPageIncident(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impact` | `table` | Yes |  |
| `component_status` | `table` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_status` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `published_at` | `string` | Yes |  |
| `status_page_id` | `string` | Yes |  |
| `update` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StatusPageIncident():create({
  component_impact = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident_status = --[[ string ]],
  message = --[[ string ]],
  name = --[[ string ]],
  notify_subscriber = --[[ boolean ]],
  published_at = --[[ string ]],
  status_page_id = --[[ string ]],
  update = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StatusPageIncident():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StatusPageIncident():load({ id = "status_page_incident_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:StatusPageIncident():update({
  id = "status_page_incident_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageIncidentUpdateEntity

```lua
local status_page_incident_update = client:StatusPageIncidentUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_status` | `table` | No |  |
| `incident_status` | `string` | No |  |
| `message` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `status_page_incident_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StatusPageIncidentUpdate():create({
  message = --[[ string ]],
  notify_subscriber = --[[ boolean ]],
  status_page_incident_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageMaintenanceEntity

```lua
local status_page_maintenance = client:StatusPageMaintenance(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_id` | `table` | Yes |  |
| `component_maintenance_period` | `table` | Yes |  |
| `end_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `maintenance_status` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `published_at` | `string` | Yes |  |
| `start_at` | `string` | Yes |  |
| `status_page_id` | `string` | Yes |  |
| `update` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StatusPageMaintenance():create({
  affected_component_id = --[[ table ]],
  component_maintenance_period = --[[ table ]],
  end_at = --[[ string ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  maintenance_status = --[[ string ]],
  message = --[[ string ]],
  name = --[[ string ]],
  notify_subscriber = --[[ boolean ]],
  published_at = --[[ string ]],
  start_at = --[[ string ]],
  status_page_id = --[[ string ]],
  update = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StatusPageMaintenance():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StatusPageMaintenance():load({ id = "status_page_maintenance_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageMaintenanceUpdateEntity

```lua
local status_page_maintenance_update = client:StatusPageMaintenanceUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_status` | `table` | No |  |
| `maintenance_status` | `string` | No |  |
| `message` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `status_page_maintenance_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:StatusPageMaintenanceUpdate():create({
  message = --[[ string ]],
  notify_subscriber = --[[ boolean ]],
  status_page_maintenance_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageStructureEntity

```lua
local status_page_structure = client:StatusPageStructure(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StatusPageStructure():load({ id = "status_page_structure_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `member` | `table` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Team():load({ id = "team_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TelemetryDataSourceEntity

```lua
local telemetry_data_source = client:TelemetryDataSource(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `datadog_config` | `table` | No |  |
| `enabled` | `boolean` | Yes |  |
| `grafana_config` | `table` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `provider` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `string` | No |  |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `created_at` | - |
| `datadog_config` | - |
| `enabled` | - |
| `grafana_config` | - |
| `id` | - |
| `name` | Yes |
| `provider` | - |
| `source_type` | - |
| `updated_at` | - |
| `version` | - |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:TelemetryDataSource():update({
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TelemetryDataSourceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `table` | Yes |  |
| `custom_role` | `table` | Yes |  |
| `email` | `string` | No |  |
| `id` | `string` | Yes |  |
| `is_active` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `seat` | `table` | Yes |  |
| `slack_user_id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:User():load({ id = "user_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowEntity

```lua
local workflow = client:Workflow(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `table` | No |  |
| `condition_group` | `table` | Yes |  |
| `continue_on_step_error` | `boolean` | Yes |  |
| `delay` | `table` | Yes |  |
| `expression` | `table` | Yes |  |
| `folder` | `string` | No |  |
| `form_field` | `table` | No |  |
| `id` | `string` | Yes |  |
| `include_private_escalation` | `boolean` | No |  |
| `include_private_incident` | `boolean` | No |  |
| `management_meta` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `once_for` | `table` | Yes |  |
| `owning_team_id` | `table` | No |  |
| `private_incident_scope` | `string` | No |  |
| `runs_from` | `string` | No |  |
| `runs_on_incident` | `string` | Yes |  |
| `runs_on_incident_mode` | `table` | Yes |  |
| `shortform` | `string` | No |  |
| `skip_step_upgrade` | `boolean` | No |  |
| `state` | `string` | No |  |
| `step` | `table` | Yes |  |
| `trigger` | `string` | Yes |  |
| `version` | `number` | Yes |  |
| `workflow` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotation` | - | - | - | - | - |
| `condition_group` | - | - | - | - | - |
| `continue_on_step_error` | - | - | - | - | - |
| `delay` | - | - | - | - | - |
| `expression` | - | - | - | - | - |
| `folder` | - | - | - | - | - |
| `form_field` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_private_escalation` | - | Yes | - | - | - |
| `include_private_incident` | - | Yes | - | - | - |
| `management_meta` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `once_for` | - | - | - | - | - |
| `owning_team_id` | - | - | - | - | - |
| `private_incident_scope` | - | Yes | - | - | - |
| `runs_from` | - | - | - | - | - |
| `runs_on_incident` | - | - | - | - | - |
| `runs_on_incident_mode` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `skip_step_upgrade` | - | - | - | - | - |
| `state` | - | Yes | - | - | - |
| `step` | - | - | - | - | - |
| `trigger` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `workflow` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Workflow():create({
  condition_group = --[[ table ]],
  continue_on_step_error = --[[ boolean ]],
  delay = --[[ table ]],
  expression = --[[ table ]],
  id = --[[ string ]],
  management_meta = --[[ table ]],
  name = --[[ string ]],
  once_for = --[[ table ]],
  runs_on_incident = --[[ string ]],
  runs_on_incident_mode = --[[ table ]],
  step = --[[ table ]],
  trigger = --[[ string ]],
  version = --[[ number ]],
  workflow = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Workflow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Workflow():load({ id = "workflow_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Workflow():remove({ id = "workflow_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Workflow():update({
  id = "workflow_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WorkflowRunEntity

```lua
local workflow_run = client:WorkflowRun(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancelled_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enqueued_at` | `string` | No |  |
| `error` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `incident_reference` | `string` | No |  |
| `progress` | `table` | Yes |  |
| `scheduled_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `string` | Yes |  |
| `workflow_name` | `string` | No |  |
| `workflow_version_id` | `string` | Yes |  |
| `workflow_version_number` | `number` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WorkflowRun():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WorkflowRun():load({ id = "workflow_run_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```


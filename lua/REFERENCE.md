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

#### `CustomField(data)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldOption(data)`

Create a new `CustomFieldOption` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data)`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `Incident(data)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

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

#### `Secret(data)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

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
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Action():create({
  assignee = --[[ table ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  description = --[[ string ]],
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
| `condition_group` | `table` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `escalation_config` | `table` | Yes |  |
| `expression` | `table` | Yes |  |
| `grouping_config` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `table` | Yes |  |
| `is_private` | `boolean` | Yes |  |
| `message_config` | `table` | Yes |  |
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
  condition_group = --[[ table ]],
  enabled = --[[ boolean ]],
  escalation_config = --[[ table ]],
  expression = --[[ table ]],
  grouping_config = --[[ table ]],
  id = --[[ string ]],
  incident_config = --[[ table ]],
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
| `incident_role_assignment` | `table` | Yes |  |
| `incident_status` | `table` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `table` | No |  |
| `incident_type` | `table` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
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
| `summary` | `string` | No |  |
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
| `incident_role_assignment` | - | - | Yes |
| `incident_status` | - | - | - |
| `incident_status_id` | - | - | - |
| `incident_timestamp_value` | - | - | - |
| `incident_type` | - | - | - |
| `incident_type_id` | - | - | - |
| `mode` | - | - | Yes |
| `name` | - | - | Yes |
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
| `summary` | - | - | - |
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
  incident_role_assignment = --[[ table ]],
  incident_status = --[[ table ]],
  incident_type = --[[ table ]],
  mode = --[[ string ]],
  name = --[[ string ]],
  reference = --[[ string ]],
  severity = --[[ table ]],
  slack_channel_id = --[[ string ]],
  slack_team_id = --[[ string ]],
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
| `role_type` | `string` | Yes |  |
| `shortform` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `owning_team_id` | `table` | No |  |
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
| `owning_team_id` | - | Yes | - | Yes | - |
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


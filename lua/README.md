# IncidentIo Lua SDK



The Lua SDK for the IncidentIo API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Action()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/incident-io-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("incident-io_sdk")

local client = sdk.new()
```

### 2. List action records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local actions, err = client:Action():list()
if err then error(err) end

for _, item in ipairs(actions) do
  print(item["id"], item["assignee_id"])
end
```

### 3. Load an action

```lua
local action, err = client:Action():load({ id = "example_id" })
if err then error(err) end
print(action)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Action():create({ assignee = {}, created_at = "example_created_at", creator = {}, description = "example_description", id = "example_id", incident_id = "example_incident_id", status = "example_status", updated_at = "example_updated_at" })
if err then error(err) end

-- Update
client:Action():update({ id = created["id"], assignee = {}, assignee_id = "example_assignee_id" })

-- Remove
client:Action():remove({ id = created["id"] })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local incidenttypes, err = client:IncidentType():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:IncidentType():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
INCIDENT_IO_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### IncidentIoSDK

```lua
local sdk = require("incident-io_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IncidentIoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Action` | `(data) -> ActionEntity` | Create an Action entity instance. |
| `Alert` | `(data) -> AlertEntity` | Create an Alert entity instance. |
| `AlertAttribute` | `(data) -> AlertAttributeEntity` | Create an AlertAttribute entity instance. |
| `AlertNote` | `(data) -> AlertNoteEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `(data) -> AlertRouteEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `(data) -> AlertSourceEntity` | Create an AlertSource entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data) -> CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `FollowUp` | `(data) -> FollowUpEntity` | Create a FollowUp entity instance. |
| `Incident` | `(data) -> IncidentEntity` | Create an Incident entity instance. |
| `IncidentAttachment` | `(data) -> IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentMembership` | `(data) -> IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
| `IncidentParticipant` | `(data) -> IncidentParticipantEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload` | `(data) -> IncidentParticipantWorkloadEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship` | `(data) -> IncidentRelationshipEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole` | `(data) -> IncidentRoleEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus` | `(data) -> IncidentStatusEntity` | Create an IncidentStatus entity instance. |
| `IncidentTimestamp` | `(data) -> IncidentTimestampEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType` | `(data) -> IncidentTypeEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate` | `(data) -> IncidentUpdateEntity` | Create an IncidentUpdate entity instance. |
| `IpAllowlist` | `(data) -> IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `MaintenanceWindow` | `(data) -> MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `PostmortemDocument` | `(data) -> PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data) -> WorkflowRunEntity` | Create a WorkflowRun entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local action, err = client:Action():load({ id = "example_id" })
    if err then error(err) end
    -- action is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_id` |  |
| `completed_at` |  |
| `created_at` |  |
| `creator` |  |
| `description` |  |
| `id` |  |
| `incident_id` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/actions`

#### Alert

| Field | Description |
| --- | --- |
| `alert_group_id` |  |
| `alert_source_id` |  |
| `attribute` |  |
| `created_at` |  |
| `deduplication_key` |  |
| `description` |  |
| `id` |  |
| `resolved_at` |  |
| `source_url` |  |
| `status` |  |
| `title` |  |
| `updated_at` |  |

Operations: List, Load.

API path: `/v2/alerts`

#### AlertAttribute

| Field | Description |
| --- | --- |
| `array` |  |
| `emoji` |  |
| `id` |  |
| `name` |  |
| `required` |  |
| `type` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_attributes`

#### AlertNote

| Field | Description |
| --- | --- |
| `alert_group_id` |  |
| `alert_id` |  |
| `content` |  |
| `created_at` |  |
| `creator` |  |
| `id` |  |
| `image` |  |
| `last_edited_at` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/alert_notes`

#### AlertRoute

| Field | Description |
| --- | --- |
| `alert_source` |  |
| `condition_group` |  |
| `created_at` |  |
| `enabled` |  |
| `escalation_config` |  |
| `expression` |  |
| `grouping_config` |  |
| `id` |  |
| `incident_config` |  |
| `is_private` |  |
| `message_config` |  |
| `name` |  |
| `owning_team_id` |  |
| `updated_at` |  |
| `version` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v3/alert_routes`

#### AlertSource

| Field | Description |
| --- | --- |
| `alert_events_url` |  |
| `auto_resolve_incident_alert` |  |
| `auto_resolve_timeout_minute` |  |
| `disabled` |  |
| `email_option` |  |
| `heartbeat_option` |  |
| `http_custom_option` |  |
| `id` |  |
| `jira_option` |  |
| `name` |  |
| `owning_team_id` |  |
| `secret_token` |  |
| `source_type` |  |
| `template` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_sources`

#### ApiKey

| Field | Description |
| --- | --- |
| `comment` |  |
| `created_at` |  |
| `creator` |  |
| `id` |  |
| `last_used_at` |  |
| `name` |  |
| `role` |  |
| `role_name` |  |
| `team_id` |  |
| `team_role` |  |
| `team_role_name` |  |
| `token_last_issued_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/api_keys`

#### CustomField

| Field | Description |
| --- | --- |
| `catalog_type_id` |  |
| `created_at` |  |
| `description` |  |
| `field_type` |  |
| `filter_by` |  |
| `fixed_filter` |  |
| `group_by_catalog_attribute_id` |  |
| `helptext_catalog_attribute_id` |  |
| `id` |  |
| `name` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` |  |
| `id` |  |
| `sort_key` |  |
| `value` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

#### FollowUp

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_id` |  |
| `assignee_team` |  |
| `assignee_team_id` |  |
| `completed_at` |  |
| `created_at` |  |
| `creator` |  |
| `description` |  |
| `external_issue_reference` |  |
| `external_issue_reference_id` |  |
| `follow_up_category_id` |  |
| `follow_up_priority_option_id` |  |
| `id` |  |
| `incident_id` |  |
| `label` |  |
| `priority` |  |
| `status` |  |
| `title` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/follow_ups`

#### Incident

| Field | Description |
| --- | --- |
| `call_url` |  |
| `created_at` |  |
| `creator` |  |
| `custom_field_entry` |  |
| `duration_metric` |  |
| `external_issue_reference` |  |
| `has_debrief` |  |
| `id` |  |
| `idempotency_key` |  |
| `incident_role_assignment` |  |
| `incident_status` |  |
| `incident_status_id` |  |
| `incident_timestamp_value` |  |
| `incident_type` |  |
| `incident_type_id` |  |
| `mode` |  |
| `name` |  |
| `permalink` |  |
| `postmortem_document_id` |  |
| `postmortem_document_url` |  |
| `reference` |  |
| `retrospective_incident_option` |  |
| `severity` |  |
| `severity_id` |  |
| `slack_channel_id` |  |
| `slack_channel_name` |  |
| `slack_channel_name_override` |  |
| `slack_team_id` |  |
| `summary` |  |
| `updated_at` |  |
| `visibility` |  |
| `workload_minutes_late` |  |
| `workload_minutes_sleeping` |  |
| `workload_minutes_total` |  |
| `workload_minutes_working` |  |

Operations: Create, List, Load.

API path: `/v2/incidents`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `id` |  |
| `incident_id` |  |
| `resource` |  |

Operations: Create, List, Remove.

API path: `/v1/incident_attachments`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `incident_id` |  |
| `user_id` |  |

Operations: Create.

API path: `/v1/incident_memberships`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `active` |  |
| `passive` |  |

Operations: Load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `participant_type` |  |
| `user` |  |
| `workload` |  |

Operations: List.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `id` |  |
| `incident` |  |

Operations: List.

API path: `/v1/incident_relationships`

#### IncidentRole

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `instruction` |  |
| `name` |  |
| `role_type` |  |
| `shortform` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/incident_roles`

#### IncidentStatus

| Field | Description |
| --- | --- |
| `category` |  |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `rank` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_statuses`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `rank` |  |

Operations: List, Load.

API path: `/v2/incident_timestamps`

#### IncidentType

| Field | Description |
| --- | --- |
| `create_in_triage` |  |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `is_default` |  |
| `name` |  |
| `owning_team_id` |  |
| `private_incidents_only` |  |
| `updated_at` |  |

Operations: List, Load.

API path: `/v1/incident_types`

#### IncidentUpdate

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `incident_id` |  |
| `merged_into_incident_id` |  |
| `message` |  |
| `new_incident_status` |  |
| `new_severity` |  |
| `updater` |  |

Operations: List.

API path: `/v2/incident_updates`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `allowlist` |  |
| `enabled` |  |
| `updated_at` |  |
| `version` |  |

Operations: Load, Update.

API path: `/v1/ip_allowlists`

#### MaintenanceWindow

| Field | Description |
| --- | --- |
| `alert_condition_group` |  |
| `archived_at` |  |
| `created_at` |  |
| `end_at` |  |
| `escalation_target` |  |
| `id` |  |
| `incident_id` |  |
| `lead` |  |
| `name` |  |
| `notification_message` |  |
| `notify_channel` |  |
| `notify_end_minutes_before` |  |
| `notify_start_minutes_before` |  |
| `reroute_on_end` |  |
| `resolve_on_end` |  |
| `show_in_sidebar` |  |
| `start_at` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/maintenance_windows`

#### PostmortemDocument

| Field | Description |
| --- | --- |
| `created_at` |  |
| `document_url` |  |
| `editor` |  |
| `exported_url` |  |
| `id` |  |
| `incident_id` |  |
| `status` |  |
| `title` |  |
| `type` |  |
| `updated_at` |  |

Operations: List, Load, Update.

API path: `/v1/postmortem_documents`

#### Secret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `last_four_char` |  |
| `name` |  |
| `owning_team_id` |  |
| `secret` |  |
| `updated_at` |  |
| `value` |  |
| `version` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/secrets`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` |  |
| `member` |  |
| `name` |  |

Operations: List, Load.

API path: `/v3/teams`

#### User

| Field | Description |
| --- | --- |
| `base_role` |  |
| `custom_role` |  |
| `email` |  |
| `id` |  |
| `is_active` |  |
| `name` |  |
| `role` |  |
| `seat` |  |
| `slack_user_id` |  |

Operations: List, Load.

API path: `/v2/users`

#### Workflow

| Field | Description |
| --- | --- |
| `annotation` |  |
| `condition_group` |  |
| `continue_on_step_error` |  |
| `delay` |  |
| `expression` |  |
| `folder` |  |
| `form_field` |  |
| `id` |  |
| `include_private_escalation` |  |
| `include_private_incident` |  |
| `management_meta` |  |
| `name` |  |
| `once_for` |  |
| `owning_team_id` |  |
| `private_incident_scope` |  |
| `runs_from` |  |
| `runs_on_incident` |  |
| `runs_on_incident_mode` |  |
| `shortform` |  |
| `skip_step_upgrade` |  |
| `state` |  |
| `step` |  |
| `trigger` |  |
| `version` |  |
| `workflow` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/workflows`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `cancelled_at` |  |
| `created_at` |  |
| `enqueued_at` |  |
| `error` |  |
| `id` |  |
| `incident_id` |  |
| `incident_reference` |  |
| `progress` |  |
| `scheduled_at` |  |
| `updated_at` |  |
| `workflow_id` |  |
| `workflow_name` |  |
| `workflow_version_id` |  |
| `workflow_version_number` |  |

Operations: List, Load.

API path: `/v2/workflow_runs`



## Entities


### Action

Create an instance: `local action = client:Action(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `assignee_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `table` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local action, err = client:Action():load({ id = "action_id" })
```

#### Example: List

```lua
local actions, err = client:Action():list()
```

#### Example: Create

```lua
local action, err = client:Action():create({
  assignee = {}, -- table
  created_at = "example_created_at", -- string
  creator = {}, -- table
  description = "example_description", -- string
  id = "example_id", -- string
  incident_id = "example_incident_id", -- string
  status = "example_status", -- string
  updated_at = "example_updated_at", -- string
})
```


### Alert

Create an instance: `local alert = client:Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `table` |  |
| `alert_source_id` | `string` |  |
| `attribute` | `table` |  |
| `created_at` | `string` |  |
| `deduplication_key` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `resolved_at` | `string` |  |
| `source_url` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local alert, err = client:Alert():load({ id = "alert_id" })
```

#### Example: List

```lua
local alerts, err = client:Alert():list()
```


### AlertAttribute

Create an instance: `local alert_attribute = client:AlertAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `array` | `boolean` |  |
| `emoji` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `required` | `boolean` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local alert_attribute, err = client:AlertAttribute():load({ id = "alert_attribute_id" })
```

#### Example: List

```lua
local alert_attributes, err = client:AlertAttribute():list()
```

#### Example: Create

```lua
local alert_attribute, err = client:AlertAttribute():create({
  array = true, -- boolean
  id = "example_id", -- string
  name = "example_name", -- string
  required = true, -- boolean
  type = "example_type", -- string
})
```


### AlertNote

Create an instance: `local alert_note = client:AlertNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `string` |  |
| `alert_id` | `string` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `table` |  |
| `id` | `string` |  |
| `image` | `table` |  |
| `last_edited_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local alert_note, err = client:AlertNote():load({ id = "alert_note_id" })
```

#### Example: List

```lua
local alert_notes, err = client:AlertNote():list()
```

#### Example: Create

```lua
local alert_note, err = client:AlertNote():create({
  content = "example_content", -- string
  created_at = "example_created_at", -- string
  creator = {}, -- table
  id = "example_id", -- string
  image = {}, -- table
  updated_at = "example_updated_at", -- string
})
```


### AlertRoute

Create an instance: `local alert_route = client:AlertRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_source` | `table` |  |
| `condition_group` | `table` |  |
| `created_at` | `string` |  |
| `enabled` | `boolean` |  |
| `escalation_config` | `table` |  |
| `expression` | `table` |  |
| `grouping_config` | `table` |  |
| `id` | `string` |  |
| `incident_config` | `table` |  |
| `is_private` | `boolean` |  |
| `message_config` | `table` |  |
| `name` | `string` |  |
| `owning_team_id` | `table` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```lua
local alert_route, err = client:AlertRoute():load({ id = "alert_route_id" })
```

#### Example: List

```lua
local alert_routes, err = client:AlertRoute():list()
```

#### Example: Create

```lua
local alert_route, err = client:AlertRoute():create({
  alert_source = {}, -- table
  condition_group = {}, -- table
  enabled = true, -- boolean
  escalation_config = {}, -- table
  expression = {}, -- table
  grouping_config = {}, -- table
  id = "example_id", -- string
  incident_config = {}, -- table
  is_private = true, -- boolean
  message_config = {}, -- table
  name = "example_name", -- string
  version = 1, -- number
})
```


### AlertSource

Create an instance: `local alert_source = client:AlertSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_events_url` | `string` |  |
| `auto_resolve_incident_alert` | `boolean` |  |
| `auto_resolve_timeout_minute` | `number` |  |
| `disabled` | `boolean` |  |
| `email_option` | `table` |  |
| `heartbeat_option` | `table` |  |
| `http_custom_option` | `table` |  |
| `id` | `string` |  |
| `jira_option` | `table` |  |
| `name` | `string` |  |
| `owning_team_id` | `table` |  |
| `secret_token` | `string` |  |
| `source_type` | `string` |  |
| `template` | `table` |  |

#### Example: Load

```lua
local alert_source, err = client:AlertSource():load({ id = "alert_source_id" })
```

#### Example: List

```lua
local alert_sources, err = client:AlertSource():list()
```

#### Example: Create

```lua
local alert_source, err = client:AlertSource():create({
  email_option = {}, -- table
  heartbeat_option = {}, -- table
  http_custom_option = {}, -- table
  id = "example_id", -- string
  jira_option = {}, -- table
  name = "example_name", -- string
  source_type = "example_source_type", -- string
  template = {}, -- table
})
```


### ApiKey

Create an instance: `local api_key = client:ApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `table` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `role` | `table` |  |
| `role_name` | `table` |  |
| `team_id` | `table` |  |
| `team_role` | `table` |  |
| `team_role_name` | `table` |  |
| `token_last_issued_at` | `string` |  |

#### Example: Load

```lua
local api_key, err = client:ApiKey():load({ id = "api_key_id" })
```

#### Example: List

```lua
local api_keys, err = client:ApiKey():list()
```

#### Example: Create

```lua
local api_key, err = client:ApiKey():create({
  created_at = "example_created_at", -- string
  creator = {}, -- table
  id = "example_id", -- string
  name = "example_name", -- string
  role = {}, -- table
  role_name = {}, -- table
  team_id = {}, -- table
  team_role = {}, -- table
  team_role_name = {}, -- table
  token_last_issued_at = "example_token_last_issued_at", -- string
})
```


### CustomField

Create an instance: `local custom_field = client:CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `field_type` | `string` |  |
| `filter_by` | `table` |  |
| `fixed_filter` | `table` |  |
| `group_by_catalog_attribute_id` | `string` |  |
| `helptext_catalog_attribute_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local custom_field, err = client:CustomField():load({ id = "custom_field_id" })
```

#### Example: List

```lua
local custom_fields, err = client:CustomField():list()
```

#### Example: Create

```lua
local custom_field, err = client:CustomField():create({
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  field_type = "example_field_type", -- string
  filter_by = {}, -- table
  fixed_filter = {}, -- table
  id = "example_id", -- string
  name = "example_name", -- string
  updated_at = "example_updated_at", -- string
})
```


### CustomFieldOption

Create an instance: `local custom_field_option = client:CustomFieldOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_field_id` | `string` |  |
| `id` | `string` |  |
| `sort_key` | `number` |  |
| `value` | `string` |  |

#### Example: Load

```lua
local custom_field_option, err = client:CustomFieldOption():load({ id = "custom_field_option_id" })
```

#### Example: List

```lua
local custom_field_options, err = client:CustomFieldOption():list()
```

#### Example: Create

```lua
local custom_field_option, err = client:CustomFieldOption():create({
  custom_field_id = "example_custom_field_id", -- string
  id = "example_id", -- string
  sort_key = 1, -- number
  value = "example_value", -- string
})
```


### FollowUp

Create an instance: `local follow_up = client:FollowUp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `assignee_id` | `string` |  |
| `assignee_team` | `table` |  |
| `assignee_team_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `table` |  |
| `description` | `string` |  |
| `external_issue_reference` | `table` |  |
| `external_issue_reference_id` | `string` |  |
| `follow_up_category_id` | `string` |  |
| `follow_up_priority_option_id` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `label` | `table` |  |
| `priority` | `table` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local follow_up, err = client:FollowUp():load({ id = "follow_up_id" })
```

#### Example: List

```lua
local follow_ups, err = client:FollowUp():list()
```

#### Example: Create

```lua
local follow_up, err = client:FollowUp():create({
  assignee = {}, -- table
  assignee_team = {}, -- table
  created_at = "example_created_at", -- string
  creator = {}, -- table
  external_issue_reference = {}, -- table
  id = "example_id", -- string
  incident_id = "example_incident_id", -- string
  label = {}, -- table
  priority = {}, -- table
  status = "example_status", -- string
  title = "example_title", -- string
  updated_at = "example_updated_at", -- string
})
```


### Incident

Create an instance: `local incident = client:Incident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `call_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `table` |  |
| `custom_field_entry` | `table` |  |
| `duration_metric` | `table` |  |
| `external_issue_reference` | `table` |  |
| `has_debrief` | `boolean` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_role_assignment` | `table` |  |
| `incident_status` | `table` |  |
| `incident_status_id` | `string` |  |
| `incident_timestamp_value` | `table` |  |
| `incident_type` | `table` |  |
| `incident_type_id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `permalink` | `string` |  |
| `postmortem_document_id` | `table` |  |
| `postmortem_document_url` | `string` |  |
| `reference` | `string` |  |
| `retrospective_incident_option` | `table` |  |
| `severity` | `table` |  |
| `severity_id` | `string` |  |
| `slack_channel_id` | `string` |  |
| `slack_channel_name` | `string` |  |
| `slack_channel_name_override` | `string` |  |
| `slack_team_id` | `string` |  |
| `summary` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `workload_minutes_late` | `number` |  |
| `workload_minutes_sleeping` | `number` |  |
| `workload_minutes_total` | `number` |  |
| `workload_minutes_working` | `number` |  |

#### Example: Load

```lua
local incident, err = client:Incident():load({ id = "incident_id" })
```

#### Example: List

```lua
local incidents, err = client:Incident():list()
```

#### Example: Create

```lua
local incident, err = client:Incident():create({
  created_at = "example_created_at", -- string
  creator = {}, -- table
  custom_field_entry = {}, -- table
  external_issue_reference = {}, -- table
  id = "example_id", -- string
  idempotency_key = "example_idempotency_key", -- string
  incident_role_assignment = {}, -- table
  incident_status = {}, -- table
  incident_type = {}, -- table
  mode = "example_mode", -- string
  name = "example_name", -- string
  reference = "example_reference", -- string
  severity = {}, -- table
  slack_channel_id = "example_slack_channel_id", -- string
  slack_team_id = "example_slack_team_id", -- string
  updated_at = "example_updated_at", -- string
  visibility = "example_visibility", -- string
})
```


### IncidentAttachment

Create an instance: `local incident_attachment = client:IncidentAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `resource` | `table` |  |

#### Example: List

```lua
local incident_attachments, err = client:IncidentAttachment():list()
```

#### Example: Create

```lua
local incident_attachment, err = client:IncidentAttachment():create({
  id = "example_id", -- string
  incident_id = "example_incident_id", -- string
  resource = {}, -- table
})
```


### IncidentMembership

Create an instance: `local incident_membership = client:IncidentMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` |  |
| `user_id` | `string` |  |

#### Example: Create

```lua
local incident_membership, err = client:IncidentMembership():create({
  incident_id = "example_incident_id", -- string
  user_id = "example_user_id", -- string
})
```


### IncidentParticipant

Create an instance: `local incident_participant = client:IncidentParticipant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `table` |  |
| `passive` | `table` |  |

#### Example: Load

```lua
local incident_participant, err = client:IncidentParticipant():load()
```


### IncidentParticipantWorkload

Create an instance: `local incident_participant_workload = client:IncidentParticipantWorkload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `participant_type` | `string` |  |
| `user` | `table` |  |
| `workload` | `table` |  |

#### Example: List

```lua
local incident_participant_workloads, err = client:IncidentParticipantWorkload():list()
```


### IncidentRelationship

Create an instance: `local incident_relationship = client:IncidentRelationship(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `incident` | `table` |  |

#### Example: List

```lua
local incident_relationships, err = client:IncidentRelationship():list()
```


### IncidentRole

Create an instance: `local incident_role = client:IncidentRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `instruction` | `string` |  |
| `name` | `string` |  |
| `role_type` | `string` |  |
| `shortform` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local incident_role, err = client:IncidentRole():load({ id = "incident_role_id" })
```

#### Example: List

```lua
local incident_roles, err = client:IncidentRole():list()
```

#### Example: Create

```lua
local incident_role, err = client:IncidentRole():create({
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  id = "example_id", -- string
  instruction = "example_instruction", -- string
  name = "example_name", -- string
  role_type = "example_role_type", -- string
  shortform = "example_shortform", -- string
  updated_at = "example_updated_at", -- string
})
```


### IncidentStatus

Create an instance: `local incident_status = client:IncidentStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local incident_status, err = client:IncidentStatus():load({ id = "incident_status_id" })
```

#### Example: List

```lua
local incident_statuss, err = client:IncidentStatus():list()
```

#### Example: Create

```lua
local incident_status, err = client:IncidentStatus():create({
  category = "example_category", -- string
  created_at = "example_created_at", -- string
  description = "example_description", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  rank = 1, -- number
  updated_at = "example_updated_at", -- string
})
```


### IncidentTimestamp

Create an instance: `local incident_timestamp = client:IncidentTimestamp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `number` |  |

#### Example: Load

```lua
local incident_timestamp, err = client:IncidentTimestamp():load({ id = "incident_timestamp_id" })
```

#### Example: List

```lua
local incident_timestamps, err = client:IncidentTimestamp():list()
```


### IncidentType

Create an instance: `local incident_type = client:IncidentType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_in_triage` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `is_default` | `boolean` |  |
| `name` | `string` |  |
| `owning_team_id` | `table` |  |
| `private_incidents_only` | `boolean` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local incident_type, err = client:IncidentType():load({ id = "incident_type_id" })
```

#### Example: List

```lua
local incident_types, err = client:IncidentType():list()
```


### IncidentUpdate

Create an instance: `local incident_update = client:IncidentUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `merged_into_incident_id` | `string` |  |
| `message` | `string` |  |
| `new_incident_status` | `table` |  |
| `new_severity` | `table` |  |
| `updater` | `table` |  |

#### Example: List

```lua
local incident_updates, err = client:IncidentUpdate():list()
```


### IpAllowlist

Create an instance: `local ip_allowlist = client:IpAllowlist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `table` |  |
| `enabled` | `boolean` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```lua
local ip_allowlist, err = client:IpAllowlist():load()
```


### MaintenanceWindow

Create an instance: `local maintenance_window = client:MaintenanceWindow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_condition_group` | `table` |  |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `end_at` | `string` |  |
| `escalation_target` | `table` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `lead` | `table` |  |
| `name` | `string` |  |
| `notification_message` | `string` |  |
| `notify_channel` | `table` |  |
| `notify_end_minutes_before` | `number` |  |
| `notify_start_minutes_before` | `number` |  |
| `reroute_on_end` | `boolean` |  |
| `resolve_on_end` | `boolean` |  |
| `show_in_sidebar` | `boolean` |  |
| `start_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local maintenance_window, err = client:MaintenanceWindow():load({ id = "maintenance_window_id" })
```

#### Example: List

```lua
local maintenance_windows, err = client:MaintenanceWindow():list()
```

#### Example: Create

```lua
local maintenance_window, err = client:MaintenanceWindow():create({
  alert_condition_group = {}, -- table
  created_at = "example_created_at", -- string
  end_at = "example_end_at", -- string
  id = "example_id", -- string
  lead = {}, -- table
  name = "example_name", -- string
  reroute_on_end = true, -- boolean
  resolve_on_end = true, -- boolean
  show_in_sidebar = true, -- boolean
  start_at = "example_start_at", -- string
  updated_at = "example_updated_at", -- string
})
```


### PostmortemDocument

Create an instance: `local postmortem_document = client:PostmortemDocument(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `document_url` | `string` |  |
| `editor` | `table` |  |
| `exported_url` | `table` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local postmortem_document, err = client:PostmortemDocument():load({ id = "postmortem_document_id" })
```

#### Example: List

```lua
local postmortem_documents, err = client:PostmortemDocument():list()
```


### Secret

Create an instance: `local secret = client:Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `last_four_char` | `string` |  |
| `name` | `string` |  |
| `owning_team_id` | `table` |  |
| `secret` | `table` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |
| `version` | `table` |  |

#### Example: Load

```lua
local secret, err = client:Secret():load({ id = "secret_id" })
```

#### Example: List

```lua
local secrets, err = client:Secret():list()
```

#### Example: Create

```lua
local secret, err = client:Secret():create({
  created_at = "example_created_at", -- string
  id = "example_id", -- string
  name = "example_name", -- string
  secret = {}, -- table
  updated_at = "example_updated_at", -- string
  value = "example_value", -- string
  version = {}, -- table
})
```


### Team

Create an instance: `local team = client:Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `table` |  |
| `id` | `string` |  |
| `member` | `table` |  |
| `name` | `string` |  |

#### Example: Load

```lua
local team, err = client:Team():load({ id = "team_id" })
```

#### Example: List

```lua
local teams, err = client:Team():list()
```


### User

Create an instance: `local user = client:User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `table` |  |
| `custom_role` | `table` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_active` | `boolean` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `seat` | `table` |  |
| `slack_user_id` | `string` |  |

#### Example: Load

```lua
local user, err = client:User():load({ id = "user_id" })
```

#### Example: List

```lua
local users, err = client:User():list()
```


### Workflow

Create an instance: `local workflow = client:Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `table` |  |
| `condition_group` | `table` |  |
| `continue_on_step_error` | `boolean` |  |
| `delay` | `table` |  |
| `expression` | `table` |  |
| `folder` | `string` |  |
| `form_field` | `table` |  |
| `id` | `string` |  |
| `include_private_escalation` | `boolean` |  |
| `include_private_incident` | `boolean` |  |
| `management_meta` | `table` |  |
| `name` | `string` |  |
| `once_for` | `table` |  |
| `owning_team_id` | `table` |  |
| `private_incident_scope` | `string` |  |
| `runs_from` | `string` |  |
| `runs_on_incident` | `string` |  |
| `runs_on_incident_mode` | `table` |  |
| `shortform` | `string` |  |
| `skip_step_upgrade` | `boolean` |  |
| `state` | `string` |  |
| `step` | `table` |  |
| `trigger` | `string` |  |
| `version` | `number` |  |
| `workflow` | `table` |  |

#### Example: Load

```lua
local workflow, err = client:Workflow():load({ id = "workflow_id" })
```

#### Example: List

```lua
local workflows, err = client:Workflow():list()
```

#### Example: Create

```lua
local workflow, err = client:Workflow():create({
  condition_group = {}, -- table
  continue_on_step_error = true, -- boolean
  delay = {}, -- table
  expression = {}, -- table
  id = "example_id", -- string
  management_meta = {}, -- table
  name = "example_name", -- string
  once_for = {}, -- table
  runs_on_incident = "example_runs_on_incident", -- string
  runs_on_incident_mode = {}, -- table
  step = {}, -- table
  trigger = "example_trigger", -- string
  version = 1, -- number
  workflow = {}, -- table
})
```


### WorkflowRun

Create an instance: `local workflow_run = client:WorkflowRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancelled_at` | `string` |  |
| `created_at` | `string` |  |
| `enqueued_at` | `string` |  |
| `error` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `incident_reference` | `string` |  |
| `progress` | `table` |  |
| `scheduled_at` | `string` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `string` |  |
| `workflow_name` | `string` |  |
| `workflow_version_id` | `string` |  |
| `workflow_version_number` | `number` |  |

#### Example: Load

```lua
local workflow_run, err = client:WorkflowRun():load({ id = "workflow_run_id" })
```

#### Example: List

```lua
local workflow_runs, err = client:WorkflowRun():list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── incident-io_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`incident-io_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local incidenttype = client:IncidentType()
incidenttype:list()

-- incidenttype:data_get() now returns the incidenttype data from the last list
-- incidenttype:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

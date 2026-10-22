# IncidentIo Lua SDK



The Lua SDK for the IncidentIo API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Action()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/incident-io-sdk/tags)),
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

local client = sdk.new({
  apikey = os.getenv("INCIDENT_IO_APIKEY"),
})
```

### 2. List action records

Entity operations return `(value, err)`. For `list`, `value` is an
array of entities, one per record — iterate it directly (there is no
wrapper), and read each record with `data_get()`.

```lua
local actions, err = client:Action():list()
if err then error(err) end

for _, item in ipairs(actions) do
  local rec = item:data_get()
  print(rec["id"])
end
```

### 3. Load a callrouteallowedcaller

CallRouteAllowedCaller is nested under call_route, so provide the `call_route_id`.

`load` returns the entity; `data_get()` reads its record.

```lua
local callrouteallowedcaller, err = client:CallRouteAllowedCaller():load({ call_route_id = "example_call_route_id", id = "example_id" })
if err then error(err) end
local rec = callrouteallowedcaller:data_get()
print(rec["id"])
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Action():create({ description = "example_description", incident_id = "example_incident_id" })
if err then error(err) end

-- Update
client:Action():update({ id = created:data_get()["id"], assignee_id = "example_assignee_id", description = "example_description" })

-- Remove
client:Action():remove({ id = created:data_get()["id"] })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local incidentstatuss, err = client:IncidentStatus():list()
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

local result, err = client:IncidentStatus():list()
-- result is an array of entities, one per mock record; err is set on failure
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
INCIDENT_IO_APIKEY=<your-key>
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
| `apikey` | `string` | API key for authentication. |
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
| `AlertEventsV2` | `(data) -> AlertEventsV2Entity` | Create an AlertEventsV2 entity instance. |
| `AlertNote` | `(data) -> AlertNoteEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `(data) -> AlertRouteEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `(data) -> AlertSourceEntity` | Create an AlertSource entity instance. |
| `AlertSourcesV2` | `(data) -> AlertSourcesV2Entity` | Create an AlertSourcesV2 entity instance. |
| `AlertTag` | `(data) -> AlertTagEntity` | Create an AlertTag entity instance. |
| `AlertsAddTagsResultV2` | `(data) -> AlertsAddTagsResultV2Entity` | Create an AlertsAddTagsResultV2 entity instance. |
| `AlertsSetTagsResultV2` | `(data) -> AlertsSetTagsResultV2Entity` | Create an AlertsSetTagsResultV2 entity instance. |
| `AlertsTransitionIncidentAlertResultV2` | `(data) -> AlertsTransitionIncidentAlertResultV2Entity` | Create an AlertsTransitionIncidentAlertResultV2 entity instance. |
| `AnnouncementRule` | `(data) -> AnnouncementRuleEntity` | Create an AnnouncementRule entity instance. |
| `AnnouncementTemplate` | `(data) -> AnnouncementTemplateEntity` | Create an AnnouncementTemplate entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `CallRoute` | `(data) -> CallRouteEntity` | Create a CallRoute entity instance. |
| `CallRouteAllowedCaller` | `(data) -> CallRouteAllowedCallerEntity` | Create a CallRouteAllowedCaller entity instance. |
| `CallRouteOption` | `(data) -> CallRouteOptionEntity` | Create a CallRouteOption entity instance. |
| `CallSession` | `(data) -> CallSessionEntity` | Create a CallSession entity instance. |
| `CallTranscriptEntry` | `(data) -> CallTranscriptEntryEntity` | Create a CallTranscriptEntry entity instance. |
| `CatalogEntry` | `(data) -> CatalogEntryEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource` | `(data) -> CatalogResourceEntity` | Create a CatalogResource entity instance. |
| `CatalogType` | `(data) -> CatalogTypeEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema` | `(data) -> CatalogTypeSchemaEntity` | Create a CatalogTypeSchema entity instance. |
| `CatalogV3` | `(data) -> CatalogV3Entity` | Create a CatalogV3 entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data) -> CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `Escalation` | `(data) -> EscalationEntity` | Create an Escalation entity instance. |
| `EscalationPath` | `(data) -> EscalationPathEntity` | Create an EscalationPath entity instance. |
| `EscalationPathTemplate` | `(data) -> EscalationPathTemplateEntity` | Create an EscalationPathTemplate entity instance. |
| `EscalationsCheckEscalationPermissionsResultV2` | `(data) -> EscalationsCheckEscalationPermissionsResultV2Entity` | Create an EscalationsCheckEscalationPermissionsResultV2 entity instance. |
| `EscalationsReassignEscalationResultV2` | `(data) -> EscalationsReassignEscalationResultV2Entity` | Create an EscalationsReassignEscalationResultV2 entity instance. |
| `EscalationsV2` | `(data) -> EscalationsV2Entity` | Create an EscalationsV2 entity instance. |
| `FollowUp` | `(data) -> FollowUpEntity` | Create a FollowUp entity instance. |
| `FollowUpsConnectExternalIssueResultV2` | `(data) -> FollowUpsConnectExternalIssueResultV2Entity` | Create a FollowUpsConnectExternalIssueResultV2 entity instance. |
| `FollowUpsConnectExternalIssueResultV3` | `(data) -> FollowUpsConnectExternalIssueResultV3Entity` | Create a FollowUpsConnectExternalIssueResultV3 entity instance. |
| `FollowUpsCreateFromLinkResultV3` | `(data) -> FollowUpsCreateFromLinkResultV3Entity` | Create a FollowUpsCreateFromLinkResultV3 entity instance. |
| `HeartbeatV2` | `(data) -> HeartbeatV2Entity` | Create a HeartbeatV2 entity instance. |
| `Identity` | `(data) -> IdentityEntity` | Create an Identity entity instance. |
| `Incident` | `(data) -> IncidentEntity` | Create an Incident entity instance. |
| `IncidentActivityLogEntry` | `(data) -> IncidentActivityLogEntryEntity` | Create an IncidentActivityLogEntry entity instance. |
| `IncidentAttachment` | `(data) -> IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentForm` | `(data) -> IncidentFormEntity` | Create an IncidentForm entity instance. |
| `IncidentMembership` | `(data) -> IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
| `IncidentMembershipsV1` | `(data) -> IncidentMembershipsV1Entity` | Create an IncidentMembershipsV1 entity instance. |
| `IncidentParticipant` | `(data) -> IncidentParticipantEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload` | `(data) -> IncidentParticipantWorkloadEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship` | `(data) -> IncidentRelationshipEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole` | `(data) -> IncidentRoleEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus` | `(data) -> IncidentStatusEntity` | Create an IncidentStatus entity instance. |
| `IncidentTeamMembership` | `(data) -> IncidentTeamMembershipEntity` | Create an IncidentTeamMembership entity instance. |
| `IncidentTeamMembershipsV1` | `(data) -> IncidentTeamMembershipsV1Entity` | Create an IncidentTeamMembershipsV1 entity instance. |
| `IncidentTemplate` | `(data) -> IncidentTemplateEntity` | Create an IncidentTemplate entity instance. |
| `IncidentTemplatesValidateResultV1` | `(data) -> IncidentTemplatesValidateResultV1Entity` | Create an IncidentTemplatesValidateResultV1 entity instance. |
| `IncidentTimelineItem` | `(data) -> IncidentTimelineItemEntity` | Create an IncidentTimelineItem entity instance. |
| `IncidentTimestamp` | `(data) -> IncidentTimestampEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType` | `(data) -> IncidentTypeEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate` | `(data) -> IncidentUpdateEntity` | Create an IncidentUpdate entity instance. |
| `IncidentsImportPostmortemDocumentResultV2` | `(data) -> IncidentsImportPostmortemDocumentResultV2Entity` | Create an IncidentsImportPostmortemDocumentResultV2 entity instance. |
| `IpAllowlist` | `(data) -> IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `IpRange` | `(data) -> IpRangeEntity` | Create an IpRange entity instance. |
| `MaintenanceWindow` | `(data) -> MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `ManagedResource` | `(data) -> ManagedResourceEntity` | Create a ManagedResource entity instance. |
| `OnCallNotificationMethodPublicV2` | `(data) -> OnCallNotificationMethodPublicV2Entity` | Create an OnCallNotificationMethodPublicV2 entity instance. |
| `OnCallNotificationPause` | `(data) -> OnCallNotificationPauseEntity` | Create an OnCallNotificationPause entity instance. |
| `OnCallNotificationRulePublicV2` | `(data) -> OnCallNotificationRulePublicV2Entity` | Create an OnCallNotificationRulePublicV2 entity instance. |
| `PayConfig` | `(data) -> PayConfigEntity` | Create a PayConfig entity instance. |
| `PayConfigOneOffRule` | `(data) -> PayConfigOneOffRuleEntity` | Create a PayConfigOneOffRule entity instance. |
| `PayConfigWeeklyRule` | `(data) -> PayConfigWeeklyRuleEntity` | Create a PayConfigWeeklyRule entity instance. |
| `PayReport` | `(data) -> PayReportEntity` | Create a PayReport entity instance. |
| `PayReportsPublishResultV2` | `(data) -> PayReportsPublishResultV2Entity` | Create a PayReportsPublishResultV2 entity instance. |
| `PayReportsUnpublishResultV2` | `(data) -> PayReportsUnpublishResultV2Entity` | Create a PayReportsUnpublishResultV2 entity instance. |
| `PayReportsV2` | `(data) -> PayReportsV2Entity` | Create a PayReportsV2 entity instance. |
| `Policy` | `(data) -> PolicyEntity` | Create a Policy entity instance. |
| `PolicyFinding` | `(data) -> PolicyFindingEntity` | Create a PolicyFinding entity instance. |
| `PolicyFindingsDismissResultV2` | `(data) -> PolicyFindingsDismissResultV2Entity` | Create a PolicyFindingsDismissResultV2 entity instance. |
| `PolicyFindingsRestoreResultV2` | `(data) -> PolicyFindingsRestoreResultV2Entity` | Create a PolicyFindingsRestoreResultV2 entity instance. |
| `PostmortemDocument` | `(data) -> PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `PostmortemDocumentsAttachResultV1` | `(data) -> PostmortemDocumentsAttachResultV1Entity` | Create a PostmortemDocumentsAttachResultV1 entity instance. |
| `PostmortemDocumentsShowContentResultV1` | `(data) -> PostmortemDocumentsShowContentResultV1Entity` | Create a PostmortemDocumentsShowContentResultV1 entity instance. |
| `Schedule` | `(data) -> ScheduleEntity` | Create a Schedule entity instance. |
| `ScheduleEntriesListPayloadV2` | `(data) -> ScheduleEntriesListPayloadV2Entity` | Create a ScheduleEntriesListPayloadV2 entity instance. |
| `ScheduleEntry` | `(data) -> ScheduleEntryEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleOverride` | `(data) -> ScheduleOverrideEntity` | Create a ScheduleOverride entity instance. |
| `ScheduleReplica` | `(data) -> ScheduleReplicaEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule` | `(data) -> ScheduleSyncRuleEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget` | `(data) -> ScheduleSyncTargetEntity` | Create a ScheduleSyncTarget entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `Severity` | `(data) -> SeverityEntity` | Create a Severity entity instance. |
| `StatusPage` | `(data) -> StatusPageEntity` | Create a StatusPage entity instance. |
| `StatusPageComponent` | `(data) -> StatusPageComponentEntity` | Create a StatusPageComponent entity instance. |
| `StatusPageComponentAvailability` | `(data) -> StatusPageComponentAvailabilityEntity` | Create a StatusPageComponentAvailability entity instance. |
| `StatusPageIncident` | `(data) -> StatusPageIncidentEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate` | `(data) -> StatusPageIncidentUpdateEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageLinkedResponseIncident` | `(data) -> StatusPageLinkedResponseIncidentEntity` | Create a StatusPageLinkedResponseIncident entity instance. |
| `StatusPageMaintenance` | `(data) -> StatusPageMaintenanceEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate` | `(data) -> StatusPageMaintenanceUpdateEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure` | `(data) -> StatusPageStructureEntity` | Create a StatusPageStructure entity instance. |
| `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2` | `(data) -> StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity` | Create a StatusPagesCreateStatusPageRetrospectiveIncidentResultV2 entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TelemetryDataSource` | `(data) -> TelemetryDataSourceEntity` | Create a TelemetryDataSource entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UsersShowPagingProviderResultV2` | `(data) -> UsersShowPagingProviderResultV2Entity` | Create an UsersShowPagingProviderResultV2 entity instance. |
| `UtilitiesV1` | `(data) -> UtilitiesV1Entity` | Create an UtilitiesV1 entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data) -> WorkflowRunEntity` | Create a WorkflowRun entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria, and return it. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria, one per record. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity, and return it. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity, and return it. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity, and return it marked as deleted. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity, whose `data_get()` reads its record (a `table`) |
| `list` | an array (`table`) of entities, one per record |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local action, err = client:Action():load({ id = "example_id" })
    if err then error(err) end
    -- action is the loaded entity

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_id` | ID of the user this action is assigned to |
| `completed_at` | When the action was completed |
| `created_at` | When the action was created |
| `creator` |  |
| `description` | Description of the action |
| `id` | Unique identifier for the action |
| `incident_id` | Unique identifier of the incident the action belongs to |
| `status` | Status of the action |
| `updated_at` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/actions`

#### Alert

| Field | Description |
| --- | --- |
| `alert_group_ids` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | The ID of the alert source this alert fired on |
| `attributes` | Attribute values parsed from the alerts payload |
| `created_at` | When this entry was created |
| `deduplication_key` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | The description of the alert |
| `id` | The ID of this alert |
| `resolved_at` | When this alert was resolved |
| `source_url` | If applicable, a link to the alert in the upstream system |
| `status` | Statuses of an alert |
| `tags` | Tags someone has applied to this alert |
| `title` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | When this alert was last updated |

Operations: Create, List, Load.

API path: `/v2/alerts/{id}/actions/resolve`

#### AlertAttribute

| Field | Description |
| --- | --- |
| `array` | Whether this attribute is an array |
| `emoji` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | The ID of this attribute |
| `name` | Unique name of this attribute |
| `required` | Whether this attribute is required. |
| `type` | Engine resource name for this attribute |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_attributes`

#### AlertEventsV2

| Field | Description |
| --- | --- |
| `deduplication_key` | The deduplication key that the event has been processed with |
| `description` | Description that optionally adds more detail to title. |
| `message` | Human readable message giving detail about the event |
| `metadata` | Any additional metadata that you've configured your alert source to parse |
| `source_url` | If applicable, a link to the alert in the upstream system |
| `status` | Status of the event |
| `title` | The title of the alert, parsed from the alert payload according to the alert source configuration |

Operations: Create.

API path: `/v2/alert_events/http/{alert_source_config_id}`

#### AlertNote

| Field | Description |
| --- | --- |
| `alert_group_id` | ID of the alert group this note is attached to. |
| `alert_id` | ID of the alert this note is attached to. |
| `content` | Markdown body of the note |
| `created_at` | When this note was first created |
| `creator` |  |
| `id` | Unique identifier for the alert note |
| `images` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | When this note was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/alert_notes`

#### AlertRoute

| Field | Description |
| --- | --- |
| `alert_sources` | Which alert sources this route matches |
| `condition_groups` | Filter: the condition groups that must be true for this route to fire |
| `created_at` | When this alert route was created |
| `enabled` | Whether this alert route is enabled |
| `escalation_config` |  |
| `expressions` | The expressions used by bindings in this route |
| `grouping_config` |  |
| `id` | Unique identifier for this alert route |
| `incident_config` |  |
| `is_private` | Whether this alert route is private. |
| `message_config` |  |
| `name` | The name of this alert route, for the user's reference |
| `owning_team_ids` | IDs of teams that own this alert route |
| `updated_at` | When this alert route was last updated |
| `version` | The version of this alert route |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_routes`

#### AlertSource

| Field | Description |
| --- | --- |
| `alert_events_url` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` |  |
| `disabled` | For heartbeat sources, set to true to disable monitoring |
| `email_options` |  |
| `filter_condition_groups` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` |  |
| `http_custom_options` |  |
| `id` | The ID of this alert source |
| `jira_options` |  |
| `name` | Unique name of the alert source |
| `owning_team_ids` | IDs of teams that own this alert source |
| `rate_limit_sharding` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | Secret token used to authenticate this source, if applicable. |
| `source_type` | Type of alert source |
| `template` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_sources`

#### AlertSourcesV2

| Field | Description |
| --- | --- |
| `owning_team_ids` | IDs of teams that own this alert source |
| `source_type` | Type of alert source |
| `template` |  |

Operations: Create.

API path: `/v2/alert_sources/actions/validate`

#### AlertTag

| Field | Description |
| --- | --- |
| `alert_group_ids` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | The ID of the alert source this alert fired on |
| `attributes` | Attribute values parsed from the alerts payload |
| `created_at` | When this entry was created |
| `deduplication_key` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | The description of the alert |
| `id` | The ID of this alert |
| `name` | The tag name |
| `resolved_at` | When this alert was resolved |
| `source_url` | If applicable, a link to the alert in the upstream system |
| `status` | Statuses of an alert |
| `tags` | Tags someone has applied to this alert |
| `title` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | When this alert was last updated |

Operations: Create, List.

API path: `/v2/alerts/{id}/actions/remove_tags`

#### AlertsAddTagsResultV2

| Field | Description |
| --- | --- |
| `alert_group_ids` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | The ID of the alert source this alert fired on |
| `attributes` | Attribute values parsed from the alerts payload |
| `created_at` | When this entry was created |
| `deduplication_key` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | The description of the alert |
| `id` | The ID of this alert |
| `resolved_at` | When this alert was resolved |
| `source_url` | If applicable, a link to the alert in the upstream system |
| `status` | Statuses of an alert |
| `tags` | Tags someone has applied to this alert |
| `title` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | When this alert was last updated |

Operations: Create.

API path: `/v2/alerts/{id}/actions/add_tags`

#### AlertsSetTagsResultV2

| Field | Description |
| --- | --- |
| `alert_group_ids` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | The ID of the alert source this alert fired on |
| `attributes` | Attribute values parsed from the alerts payload |
| `created_at` | When this entry was created |
| `deduplication_key` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | The description of the alert |
| `id` | The ID of this alert |
| `resolved_at` | When this alert was resolved |
| `source_url` | If applicable, a link to the alert in the upstream system |
| `status` | Statuses of an alert |
| `tags` | Tags someone has applied to this alert |
| `title` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | When this alert was last updated |

Operations: Create.

API path: `/v2/alerts/{id}/actions/set_tags`

#### AlertsTransitionIncidentAlertResultV2

| Field | Description |
| --- | --- |
| `alert` |  |
| `alert_id` | Alert to attach to the incident |
| `alert_route_id` | The ID of the alert route that created this incident alert |
| `id` | The ID of this alert |
| `incident` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | Incident to attach the alert to |
| `re_relate` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | What state to move the connection to |

Operations: Create, List.

API path: `/v2/incident_alerts/{id}/actions/transition`

#### AnnouncementRule

| Field | Description |
| --- | --- |
| `condition_groups` | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | When the rule was created |
| `id` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | Human readable name for the rule |
| `owning_team_ids` | IDs of the teams that own this rule |
| `private_incident_scope` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | Where incident updates are shared once the incident is announced |
| `updated_at` | When the rule was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/announcement_rules`

#### AnnouncementTemplate

| Field | Description |
| --- | --- |
| `actions` | Actions shown on the announcement post, in rank order |
| `fields` | Fields shown on the announcement post, in rank order |
| `id` | Unique identifier for this announcement template |
| `is_default` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | Name of this announcement template |
| `owning_team_ids` | IDs of the teams that own this template |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/announcement_templates`

#### ApiKey

| Field | Description |
| --- | --- |
| `comments` | Freeform notes about this API key |
| `created_at` | When the API key was created |
| `creator` |  |
| `id` | Unique identifier for this API key |
| `last_used_at` | When the key was last used to authenticate a request |
| `name` | The name of the API key, for the user's reference |
| `role_names` | Account-level roles to assign to the API key. |
| `roles` | The account-level roles assigned to this API key |
| `team_ids` | IDs of teams that this API key is scoped to |
| `team_role_names` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | The team-level roles assigned to this API key |
| `token_last_issued_at` | When the current token for this API was last issued. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/api_keys/{id}/actions/rotate`

#### CallRoute

| Field | Description |
| --- | --- |
| `allowed_callers` | The numbers allowed to call this route. |
| `country_code` | The country this route's number belongs to |
| `created_at` |  |
| `current_state` | Where this route is in provisioning. |
| `custom_language` | The language we speak voice prompts in, via text-to-speech |
| `id` | Unique identifier for this call route |
| `name` | Name for this call route |
| `options` | The phone-tree menu this route presents. |
| `path` | Who we page when a call comes in. |
| `phone_number` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` |  |
| `use_caller_allowlist` | Whether this route only answers calls from its allowed callers |

Operations: List, Load, Update.

API path: `/v2/call_routes`

#### CallRouteAllowedCaller

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRouteOption

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallSession

| Field | Description |
| --- | --- |
| `ended_at` | When the call session ended. |
| `id` | Unique identifier for this call session |
| `incident_id` | The incident this call session belongs to |
| `started_at` | When the call session started |

Operations: List.

API path: `/v2/call_sessions`

#### CallTranscriptEntry

| Field | Description |
| --- | --- |
| `content` | What was said |
| `id` | Unique identifier for this transcript entry |
| `medium` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | When the participant started speaking |

Operations: List.

API path: `/v2/call_transcript_entries`

#### CatalogEntry

| Field | Description |
| --- | --- |
| `aliases` | Optional aliases that can be used to reference this entry |
| `archived_at` | When this entry was archived |
| `attribute_values` | Values of this entry |
| `catalog_entry` |  |
| `catalog_type` |  |
| `catalog_type_id` | ID of this catalog type |
| `created_at` | When this entry was created |
| `external_id` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | ID of this catalog entry |
| `name` | Name is the human readable name of this entry |
| `rank` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | If provided, only update these attribute_values keys. |
| `updated_at` | When this entry was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/catalog_entries`

#### CatalogResource

| Field | Description |
| --- | --- |
| `category` | Which category of resource |
| `description` | Human readable description for this resource |
| `engine_resource_type` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | Label for this catalog resource type |
| `type` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | Documentation for the literal string value of this resource |

Operations: List.

API path: `/v2/catalog_resources`

#### CatalogType

| Field | Description |
| --- | --- |
| `annotations` | Annotations that can track metadata about this type |
| `categories` | What categories is this type considered part of |
| `color` | Sets the display color of this type in the dashboard |
| `created_at` | When this type was created |
| `description` | Human readble description of this type |
| `dynamic_resource_parameter` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | If populated, gives an estimated count of entries for this type |
| `icon` | Sets the display icon of this type in the dashboard |
| `id` | ID of this catalog type |
| `is_editable` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | When this type was last synced (if it's ever been sync'd) |
| `name` | Name is the human readable name of this type |
| `owning_team_ids` | IDs of the teams that own this catalog type |
| `ranked` | If this type should be ranked |
| `registry_type` | The registry resource this type is synced from, if any |
| `required_integrations` | If populated, the integrations required for this type |
| `schema` |  |
| `source_repo_url` | The url of the external repository where this type is managed |
| `type_name` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | When this type was last updated |
| `use_name_as_identifier` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/catalog_types`

#### CatalogTypeSchema

| Field | Description |
| --- | --- |
| `annotations` | Annotations that can track metadata about this type |
| `attributes` |  |
| `categories` | What categories is this type considered part of |
| `color` | Sets the display color of this type in the dashboard |
| `created_at` | When this type was created |
| `description` | Human readble description of this type |
| `dynamic_resource_parameter` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | If populated, gives an estimated count of entries for this type |
| `icon` | Sets the display icon of this type in the dashboard |
| `id` | ID of this catalog type |
| `is_editable` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | When this type was last synced (if it's ever been sync'd) |
| `name` | Name is the human readable name of this type |
| `owning_team_ids` | IDs of the teams that own this catalog type |
| `ranked` | If this type should be ranked |
| `registry_type` | The registry resource this type is synced from, if any |
| `required_integrations` | If populated, the integrations required for this type |
| `schema` |  |
| `source_repo_url` | The url of the external repository where this type is managed |
| `type_name` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | When this type was last updated |
| `use_name_as_identifier` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` |  |

Operations: Create.

API path: `/v2/catalog_types/{id}/actions/update_schema`

#### CatalogV3

| Field | Description |
| --- | --- |
| `catalog_type_id` | The unique identifier of the catalog type containing the entries |
| `entries` | A list of entries to update with their new values. |
| `update_attributes` | Optional list of specific attribute IDs to update across all entries. |

Operations: Create.

API path: `/v3/catalog_entries/actions/bulk_update`

#### CustomField

| Field | Description |
| --- | --- |
| `catalog_type_id` | For catalog fields, the ID of the associated catalog type |
| `created_at` | When the action was created |
| `description` | Description of the custom field |
| `field_type` | Type of custom field |
| `filter_by` |  |
| `fixed_filter` |  |
| `group_by_catalog_attribute_id` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | Which catalog attribute provides helptext for the options |
| `id` | Unique identifier for the custom field |
| `name` | Human readable name for the custom field |
| `updated_at` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` | ID of the custom field this option belongs to |
| `id` | Unique identifier for the custom field option |
| `sort_key` | Sort key used to order the custom field options correctly |
| `value` | Human readable name for the custom field option. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

#### Escalation

| Field | Description |
| --- | --- |
| `created_at` | When this escalation was created |
| `creator` | The creator of this escalation. |
| `description` | Additional detail provided with this escalation. |
| `escalation_path_id` | Unique identifier of the escalation path that the escalation was created from |
| `events` | Events which describe the history of this escalation. |
| `id` | Unique ID of the escalation |
| `idempotency_key` | Unique key to prevent duplicate escalations. |
| `incident_id` | ID of an incident to associate with this escalation. |
| `priority` | The priority associated with this escalation. |
| `related_alerts` | Alerts related to this escalation |
| `related_incidents` | Incidents related to this escalation |
| `status` | Status of the escalation |
| `title` | The title of this escalation |
| `updated_at` | When this escalation was last updated |
| `user_ids` | IDs of users to escalate directly to |

Operations: Create, List, Load.

API path: `/v2/escalations`

#### EscalationPath

| Field | Description |
| --- | --- |
| `current_responders` | Users who are currently on-call for this escalation path |
| `id` | Unique identifier for this escalation path. |
| `kind` | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | The name of this escalation path, for the user's reference. |
| `param_bindings` | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` |  |
| `team_ids` | IDs of the teams that own this escalation path. |
| `template_id` | For a templated path, the template it is built from. |
| `working_hours` | The working hours for this escalation path. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/escalation_paths`

#### EscalationPathTemplate

| Field | Description |
| --- | --- |
| `description` | A description of what this template is for. |
| `expressions` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | Whether a previous escalation path version uses this template. |
| `id` | Unique identifier for this template. |
| `name` | The name of this template. |
| `params` | The parameters declared by this template. |
| `path` | The nodes that form the levels and branches of this template. |
| `repeat_config` |  |
| `working_hours` | The working hours for this template. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/escalation_path_templates`

#### EscalationsCheckEscalationPermissionsResultV2

| Field | Description |
| --- | --- |
| `response_options` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | The IDs of the users to check response options for |

Operations: Create.

API path: `/v2/escalations/{escalation_id}/actions/check_permissions`

#### EscalationsReassignEscalationResultV2

| Field | Description |
| --- | --- |
| `description` | Additional details about the new escalation. |
| `escalation_path_id` | ID of the escalation path to reassign to |
| `resolve_original` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | The title of the new escalation. |
| `user_ids` | IDs of users to reassign directly to |

Operations: Create.

API path: `/v2/escalations/{escalation_id}/actions/reassign`

#### EscalationsV2

| Field | Description |
| --- | --- |
| `response` | Whether to acknowledge, decline or snooze the escalation |
| `snooze_details` |  |

Operations: Create.

API path: `/v2/escalations/{escalation_id}/actions/respond`

#### FollowUp

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_id` | ID of the user this follow-up is assigned to |
| `assignee_team` |  |
| `assignee_team_id` | ID of the team this follow-up is assigned to |
| `category` |  |
| `completed_at` | When the follow-up was completed |
| `created_at` | When the follow-up was created |
| `creator` |  |
| `description` | Description of the follow-up |
| `external_issue_reference` |  |
| `external_issue_reference_id` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | ID of the priority for this follow-up |
| `id` | Unique identifier for the follow-up |
| `incident_id` | Unique identifier of the incident the follow-up belongs to |
| `labels` | Labels associated with this follow-up |
| `priority` |  |
| `status` | Status of the follow-up |
| `title` | Title of the follow-up |
| `updated_at` | When the follow-up was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/follow_ups`

#### FollowUpsConnectExternalIssueResultV2

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_team` |  |
| `completed_at` | When the follow-up was completed |
| `created_at` | When the follow-up was created |
| `creator` |  |
| `description` | Description of the follow-up |
| `external_issue_reference` |  |
| `id` | Unique identifier for the follow-up |
| `incident_id` | Unique identifier of the incident the follow-up belongs to |
| `labels` | Labels associated with this follow-up |
| `priority` |  |
| `provider` | The issue tracker provider the issue belongs to |
| `status` | Status of the follow-up |
| `title` | Title of the follow-up |
| `updated_at` | When the follow-up was last updated |
| `url` | URL of the issue in the external provider |

Operations: Create.

API path: `/v2/follow_ups/{id}/actions/connect_external_issue`

#### FollowUpsConnectExternalIssueResultV3

| Field | Description |
| --- | --- |
| `assignee` |  |
| `assignee_team` |  |
| `category` |  |
| `completed_at` | When the follow-up was completed |
| `created_at` | When the follow-up was created |
| `creator` |  |
| `description` | Description of the follow-up |
| `external_issue_reference` |  |
| `id` | Unique identifier for the follow-up |
| `incident_id` | Unique identifier of the incident the follow-up belongs to |
| `labels` | Labels associated with this follow-up |
| `priority` |  |
| `provider` | The issue tracker provider the issue belongs to |
| `status` | Status of the follow-up |
| `title` | Title of the follow-up |
| `updated_at` | When the follow-up was last updated |
| `url` | URL of the issue in the external provider |

Operations: Create.

API path: `/v3/follow_ups/{id}/actions/connect_external_issue`

#### FollowUpsCreateFromLinkResultV3

| Field | Description |
| --- | --- |
| `incident_id` | Unique identifier of the incident the follow-up belongs to |
| `url` | URL of the issue in the external provider |

Operations: Create.

API path: `/v3/follow_ups/actions/create_from_link`

#### HeartbeatV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load.

API path: `/v2/heartbeat/{alert_source_config_id}/ping`

#### Identity

| Field | Description |
| --- | --- |
| `dashboard_url` | The dashboard URL for this organisation |
| `name` | The name assigned to the current API Key |
| `roles` | Which roles have been enabled for this key |
| `team_roles` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | Teams that this API key is scoped to. |

Operations: Load.

API path: `/v1/identity`

#### Incident

| Field | Description |
| --- | --- |
| `call_url` | The call URL attached to this incident |
| `created_at` | When the incident was created |
| `creator` |  |
| `custom_field_entries` | Custom field entries for this incident |
| `debriefs` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` |  |
| `has_debrief` | If this incident has a debrief attached |
| `id` | Unique identifier for the incident |
| `idempotency_key` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | A list of who is assigned to each role for this incident |
| `incident_status` |  |
| `incident_status_id` | Incident status to assign to the incident |
| `incident_timestamp_values` | Incident lifecycle events and when they occurred |
| `incident_type` |  |
| `incident_type_id` | Incident type to create this incident as |
| `last_activity_at` | When the incident last recorded 'activity' |
| `mode` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | URL to link to the Microsoft Teams channel |
| `name` | Explanation of the incident |
| `permalink` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | The URL of the incident post-mortem document |
| `reference` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` |  |
| `severity` |  |
| `severity_id` | Severity to create incident as |
| `slack_channel_id` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | Name of the slack channel |
| `slack_channel_name_override` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | URL to link to the slack channel |
| `slack_team_id` | ID of the Slack team / workspace. |
| `summary` | Detailed description of the incident |
| `team_ids` | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | When the incident was last updated |
| `visibility` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | Amount of time spent on the incident in total |
| `workload_minutes_working` | Amount of time spent on the incident in working hours |

Operations: Create, List, Load.

API path: `/v2/incidents/{id}/actions/edit`

#### IncidentActivityLogEntry

| Field | Description |
| --- | --- |
| `content` | Details of an activity log entry. |
| `created_at` | When we recorded the activity |
| `id` | Unique identifier of the activity log entry |
| `incident_id` | ID of the incident this happened on. |
| `occurred_at` | When the activity happened. |
| `title` | Human-readable summary of what happened |
| `type` | What kind of activity this is. |

Operations: List.

API path: `/v2/incident_activity_log_entries`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `id` | Unique identifier of this incident membership |
| `incident_id` | ID of the incident to add an attachment to |
| `resource` |  |

Operations: Create, List, Remove.

API path: `/v1/incident_attachments`

#### IncidentForm

| Field | Description |
| --- | --- |
| `created_at` | When this incident form was created |
| `expressions` | Expressions available to every element's conditions and defaults. |
| `form_type` | Which form this is. |
| `id` | Unique identifier for this incident form |
| `incident_type_id` | The incident type this form belongs to. |
| `lifecycle_elements` | Elements on this form, in display order. |
| `updated_at` | When this incident form was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v3/incident_forms`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `incident_id` | The incident to make the user a member of |
| `user_id` |  |

Operations: Create.

API path: `/v1/incident_memberships`

#### IncidentMembershipsV1

| Field | Description |
| --- | --- |
| `incident_id` | Revoke memberships to incident |
| `user_id` |  |

Operations: Create.

API path: `/v1/incident_memberships/actions/revoke`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `active` | Participants who are actively helping with the incident |
| `passive` | Participants who are just observing the incident |

Operations: Load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `archived_at` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | The role they had in the incident |
| `user` |  |
| `workload` |  |

Operations: List.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `id` | Unique identifier of this incident relationship |
| `incident` |  |

Operations: List.

API path: `/v1/incident_relationships`

#### IncidentRole

| Field | Description |
| --- | --- |
| `created_at` | When the role was created |
| `description` | Describes the purpose of the role |
| `id` | Unique identifier for the role |
| `instructions` | Provided to whoever is nominated for the role. |
| `name` | Human readable name of the incident role |
| `role_type` | Type of incident role |
| `shortform` | Short human readable name for Slack. |
| `updated_at` | When the role was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_roles`

#### IncidentStatus

| Field | Description |
| --- | --- |
| `category` | What category of status it is. |
| `created_at` |  |
| `description` | Rich text description of the incident status |
| `id` | Unique ID of this incident status |
| `name` | Unique name of this status |
| `rank` | Order of this incident status |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_statuses`

#### IncidentTeamMembership

| Field | Description |
| --- | --- |
| `incident_id` |  |
| `team_id` |  |

Operations: Create.

API path: `/v1/incident_team_memberships`

#### IncidentTeamMembershipsV1

| Field | Description |
| --- | --- |
| `incident_id` | Revoke team access to this incident |
| `team_id` |  |

Operations: Create.

API path: `/v1/incident_team_memberships/actions/revoke`

#### IncidentTemplate

| Field | Description |
| --- | --- |
| `created_at` | When this incident template was created |
| `expressions` | The expressions used by bindings in this template |
| `id` | Unique identifier for this incident template |
| `name` | The name of this incident template, for the user's reference |
| `template` | The values an incident template applies to the incidents it creates. |
| `updated_at` | When this incident template was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_templates`

#### IncidentTemplatesValidateResultV1

| Field | Description |
| --- | --- |
| `expressions` | The expressions used by bindings in this template |
| `name` | The name of this incident template, for the user's reference |
| `template` | The values an incident template applies to the incidents it creates. |
| `warnings` | Anything suspect about this config that isn't severe enough to reject it. |

Operations: Create.

API path: `/v1/incident_templates/actions/validate`

#### IncidentTimelineItem

| Field | Description |
| --- | --- |
| `activity_log_id` | ID of the activity log entry this item was promoted from. |
| `created_at` | When this item was added to the timeline |
| `creator` |  |
| `description` | Description of the timeline item, in markdown |
| `id` | Unique identifier of the timeline item |
| `idempotency_key` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | Incident to add this item to |
| `timestamp` | When the thing this item describes happened. |
| `title` | Title of the timeline item |
| `updated_at` | When this item was last edited |

Operations: Create, List, Update.

API path: `/v2/incident_timeline_items`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `id` | Unique ID of this incident timestamp |
| `name` | Unique name of this timestamp |
| `rank` | Order in which this timestamp should be shown |

Operations: List, Load.

API path: `/v2/incident_timestamps`

#### IncidentType

| Field | Description |
| --- | --- |
| `create_in_triage` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | When this resource was created |
| `description` | What is this incident type for? |
| `id` | Unique identifier for this Incident Type |
| `is_default` | The default Incident Type is used when no other type is explicitly specified |
| `name` | The name of this Incident Type |
| `owning_team_ids` | IDs of the teams that own this incident type |
| `private_incidents_only` | Should all incidents created with this Incident Type be private? |
| `updated_at` | When this resource was last updated |

Operations: List, Load.

API path: `/v1/incident_types`

#### IncidentUpdate

| Field | Description |
| --- | --- |
| `created_at` | When the update was created |
| `id` | Unique identifier for this incident update |
| `idempotency_key` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | The incident you want to update |
| `merged_into_incident_id` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | Message that explains the context behind the update, in markdown |
| `new_incident_status` |  |
| `new_severity` |  |
| `to_incident_status_id` | Move the incident to this status |
| `to_severity_id` | Move the incident to this severity |
| `updater` |  |

Operations: Create, List.

API path: `/v2/incident_updates`

#### IncidentsImportPostmortemDocumentResultV2

| Field | Description |
| --- | --- |
| `content` | The document content as GitHub-Flavored Markdown |
| `title` | Title of the postmortem document |

Operations: Create.

API path: `/v2/incidents/{id}/actions/import_postmortem_document`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `allowlist` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | Whether this IP allowlist is enabled or not |
| `updated_at` | The time this allowlist was last updated |
| `version` | The version of this IP allowlist |

Operations: Load, Update.

API path: `/v1/ip_allowlists`

#### IpRange

| Field | Description |
| --- | --- |
| `cidr` | The address in CIDR notation. |
| `description` | Which of our traffic reaches you from this address |

Operations: List.

API path: `/v1/ip_ranges`

#### MaintenanceWindow

| Field | Description |
| --- | --- |
| `alert_condition_groups` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | When this maintenance window was archived, if it has been |
| `created_at` | When this maintenance window was created |
| `end_at` | When the maintenance window ends |
| `escalation_targets` | If set, alerts matching this window will be escalated to these targets |
| `id` | Unique identifier for this maintenance window |
| `incident_id` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` |  |
| `name` | Human readable name for the maintenance window |
| `notification_message` | Custom message included in notifications about this maintenance window |
| `notify_channels` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | When the maintenance window starts |
| `updated_at` | When this maintenance window was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/maintenance_windows`

#### ManagedResource

| Field | Description |
| --- | --- |
| `annotations` | Annotations that track metadata about this resource |
| `managed_by` | How is this resource managed |
| `resource_id` | The ID of the resource that this relates to |
| `resource_type` | The type of the related resource |
| `source_url` | The url of the external repository where this resource is managed (if there is one) |

Operations: Create.

API path: `/v2/managed_resources`

#### OnCallNotificationMethodPublicV2

| Field | Description |
| --- | --- |
| `address` | The address of this method (e.g. |
| `id` | Unique identifier for this notification method |
| `is_usable` | Whether this method is ready to receive notifications. |
| `method_type` | The high-level type of notification method. |
| `phone_details` |  |

Operations: List.

API path: `/v2/users/{user_id}/notification_methods`

#### OnCallNotificationPause

| Field | Description |
| --- | --- |
| `created_at` |  |
| `ends_at` | When notifications resume |
| `id` | Unique identifier for this notification pause |
| `reason` | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | When notifications stop being sent to the user |
| `updated_at` |  |
| `user_id` | The user whose on-call notifications are paused in this time window |

Operations: List, Load.

API path: `/v2/on_call_notification_pauses`

#### OnCallNotificationRulePublicV2

| Field | Description |
| --- | --- |
| `app` |  |
| `delay_seconds` | Delay in seconds before this rule activates. |
| `id` | Unique identifier for this notification rule |
| `method_target` |  |
| `method_type` | The high-level type of notification method. |
| `phone` |  |
| `rule_type` | The urgency level this rule applies to |

Operations: List.

API path: `/v2/users/{user_id}/notification_rules`

#### PayConfig

| Field | Description |
| --- | --- |
| `base_rate_cents` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` |  |
| `currency` | Currency this config pays in, in ISO 4217 format |
| `id` | Unique identifier for this pay config |
| `name` | Human readable name for this pay config |
| `one_off_rules` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | When a published report first priced against this config. |
| `rate_time_unit` | The unit of time every rate on this config is quoted per. |
| `timezone` | IANA timezone this config's rules are interpreted in |
| `updated_at` |  |
| `weekly_rules` | Rules that apply every week, by day of week and time of day, in evaluation order |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs`

#### PayConfigOneOffRule

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigWeeklyRule

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayReport

| Field | Description |
| --- | --- |
| `created_at` | When this report was created |
| `creator` |  |
| `end_date` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | Why a report could not be generated |
| `error_message` | What went wrong, written for whoever asked for the report. |
| `id` | Unique identifier for this pay report |
| `name` | Human readable name for this report |
| `overlapping_shifts` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` |  |
| `pay_config_id` | The pay config to price every shift with. |
| `published_at` | When this report was published. |
| `rotation_filters` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | The schedules this report covers |
| `start_date` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | How far a report has got through being generated |
| `total_duration_seconds` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | Whether shifts that priced to zero are part of the report |
| `updated_at` | When this report was last updated |

Operations: Create, List, Load, Remove.

API path: `/v2/pay_reports`

#### PayReportsPublishResultV2

| Field | Description |
| --- | --- |
| `cc_emails` | Email addresses to send a copy of the report to |
| `created_at` | When this report was created |
| `creator` |  |
| `end_date` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | Why a report could not be generated |
| `error_message` | What went wrong, written for whoever asked for the report. |
| `id` | Unique identifier for this pay report |
| `name` | Human readable name for this report |
| `overlapping_shifts` | How time spent on more than one schedule at once was paid |
| `published_at` | When this report was published. |
| `schedule_ids` | The schedules this report covers |
| `send_user_breakdowns` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | How far a report has got through being generated |
| `total_duration_seconds` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | Whether shifts that priced to zero are part of the report |
| `updated_at` | When this report was last updated |

Operations: Create.

API path: `/v2/pay_reports/{id}/actions/publish`

#### PayReportsUnpublishResultV2

| Field | Description |
| --- | --- |
| `created_at` | When this report was created |
| `creator` |  |
| `end_date` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | Why a report could not be generated |
| `error_message` | What went wrong, written for whoever asked for the report. |
| `id` | Unique identifier for this pay report |
| `name` | Human readable name for this report |
| `overlapping_shifts` | How time spent on more than one schedule at once was paid |
| `published_at` | When this report was published. |
| `schedule_ids` | The schedules this report covers |
| `start_date` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | How far a report has got through being generated |
| `total_duration_seconds` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | Why this report is being unpublished |
| `updated_at` | When this report was last updated |

Operations: Create.

API path: `/v2/pay_reports/{id}/actions/unpublish`

#### PayReportsV2

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v2/pay_reports/{id}/download`

#### Policy

| Field | Description |
| --- | --- |
| `assignment_rules` |  |
| `conditions` | Conditions which determine which resources are in scope for this policy |
| `created_at` |  |
| `debrief` | Set when policy_type is debrief. |
| `description` | Human readable description of the policy |
| `expressions` | The expressions relating to this policy |
| `follow_up` | Set when policy_type is follow_up. |
| `id` | Unique ID of the policy |
| `name` | Human readable name of the policy |
| `on_call_readiness` | Set when policy_type is on_call_readiness. |
| `policy_type` | Type of the policy, specifying what this applies to |
| `post_mortem` | Set when policy_type is post_mortem. |
| `schedule` | Detects gaps in on-call coverage. |
| `status` | Disabled policies stop evaluating but keep their config |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/policies`

#### PolicyFinding

| Field | Description |
| --- | --- |
| `created_at` |  |
| `days` | Days outside the policy's due date |
| `debrief` | Set when policy_type is debrief. |
| `dismissal` |  |
| `due_at` | When this finding becomes overdue |
| `follow_up` | Set when policy_type is follow_up. |
| `id` | Unique ID of the finding |
| `last_checked_at` | When this finding was last re-evaluated |
| `on_call_readiness` | Set when policy_type is on_call_readiness. |
| `policy_id` | The policy this finding was raised against |
| `policy_type` | Type of the policy this finding was raised against |
| `post_mortem` | Set when policy_type is post_mortem. |
| `responsible_users` | Who is expected to resolve this finding |
| `schedule` | Set when policy_type is schedule. |
| `shift_conflict` | Set when policy_type is shift_conflict. |
| `state` | Where this finding is in its lifecycle |
| `updated_at` |  |
| `vacation_conflict` | Set when policy_type is vacation_conflict. |

Operations: List, Load.

API path: `/v2/policy_findings`

#### PolicyFindingsDismissResultV2

| Field | Description |
| --- | --- |
| `created_at` |  |
| `days` | Days outside the policy's due date |
| `debrief` | Set when policy_type is debrief. |
| `dismissal` |  |
| `due_at` | When this finding becomes overdue |
| `follow_up` | Set when policy_type is follow_up. |
| `id` | Unique ID of the finding |
| `last_checked_at` | When this finding was last re-evaluated |
| `on_call_readiness` | Set when policy_type is on_call_readiness. |
| `policy_id` | The policy this finding was raised against |
| `policy_type` | Type of the policy this finding was raised against |
| `post_mortem` | Set when policy_type is post_mortem. |
| `reason` | Why this finding is being dismissed |
| `responsible_users` | Who is expected to resolve this finding |
| `schedule` | Set when policy_type is schedule. |
| `shift_conflict` | Set when policy_type is shift_conflict. |
| `state` | Where this finding is in its lifecycle |
| `updated_at` |  |
| `vacation_conflict` | Set when policy_type is vacation_conflict. |

Operations: Create.

API path: `/v2/policy_findings/{id}/actions/dismiss`

#### PolicyFindingsRestoreResultV2

| Field | Description |
| --- | --- |
| `created_at` |  |
| `days` | Days outside the policy's due date |
| `debrief` | Set when policy_type is debrief. |
| `dismissal` |  |
| `due_at` | When this finding becomes overdue |
| `follow_up` | Set when policy_type is follow_up. |
| `id` | Unique ID of the finding |
| `last_checked_at` | When this finding was last re-evaluated |
| `on_call_readiness` | Set when policy_type is on_call_readiness. |
| `policy_id` | The policy this finding was raised against |
| `policy_type` | Type of the policy this finding was raised against |
| `post_mortem` | Set when policy_type is post_mortem. |
| `responsible_users` | Who is expected to resolve this finding |
| `schedule` | Set when policy_type is schedule. |
| `shift_conflict` | Set when policy_type is shift_conflict. |
| `state` | Where this finding is in its lifecycle |
| `updated_at` |  |
| `vacation_conflict` | Set when policy_type is vacation_conflict. |

Operations: Create.

API path: `/v2/policy_findings/{id}/actions/restore`

#### PostmortemDocument

| Field | Description |
| --- | --- |
| `created_at` | Timestamp for when the document was created |
| `document_url` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | The list of users who have edited this post-mortem document |
| `exported_urls` | URLs of any external locations this document has been exported to |
| `id` | Unique identifier for the post-mortem document |
| `incident_id` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | The current status of this post-mortem document |
| `title` | The display title of the post-mortem document |
| `type` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | Timestamp for when the document was last updated |

Operations: List, Load, Update.

API path: `/v1/postmortem_documents`

#### PostmortemDocumentsAttachResultV1

| Field | Description |
| --- | --- |
| `document_provider` | The provider hosting the document. |
| `incident_id` | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | A URL pointing to the externally-hosted post-mortem document |

Operations: Create.

API path: `/v1/postmortem_documents/actions/attach`

#### PostmortemDocumentsShowContentResultV1

| Field | Description |
| --- | --- |
| `markdown` | The full content of the post-mortem document, rendered as markdown. |

Operations: Load.

API path: `/v1/postmortem_documents/{id}/content`

#### Schedule

| Field | Description |
| --- | --- |
| `annotations` | Annotations that track metadata about this resource |
| `config` |  |
| `created_at` |  |
| `current_shifts` | Shifts that are ongoing for this schedule |
| `holidays_public_config` |  |
| `id` | Unique internal ID of the schedule |
| `name` | Human readable name synced from external provider |
| `next_shifts` | The shifts after the next changeover. |
| `permalink` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | IDs of teams that own this schedule |
| `timezone` | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedules`

#### ScheduleEntriesListPayloadV2

| Field | Description |
| --- | --- |
| `entry_window_end` | The end of the window to preview entries for. |
| `entry_window_start` | The start of the window to preview entries for. |
| `final` | The effective schedule after overrides have been merged in |
| `overrides` | Overrides that apply within the requested window |
| `schedule` |  |
| `scheduled` | Entries from the schedule's rotation rules, before overrides are applied |

Operations: Create.

API path: `/v2/schedules/{id}/actions/preview_entries`

#### ScheduleEntry

| Field | Description |
| --- | --- |
| `pagination_meta` |  |
| `schedule_entries` | The schedule entries for a window of time, grouped by where they come from. |

Operations: Load.

API path: `/v2/schedule_entries`

#### ScheduleOverride

| Field | Description |
| --- | --- |
| `created_at` |  |
| `end_at` | End of the override |
| `id` | Unique internal ID of the schedule override |
| `layer_id` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | The rotation on the schedule that this override applies to |
| `schedule_id` | The schedule that this override applies to |
| `start_at` | Start of the override |
| `updated_at` |  |
| `user` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedule_overrides`

#### ScheduleReplica

| Field | Description |
| --- | --- |
| `created_at` | When this schedule replica was first created |
| `id` | Unique identifier of the schedule replica |
| `last_sync_error` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | The external provider where this schedule is replicated to |
| `replica_provider_id` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | When this schedule replica was last updated |
| `user_statuses` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

Operations: Create, List, Load, Remove.

API path: `/v2/schedules/{schedule_id}/replicas`

#### ScheduleSyncRule

| Field | Description |
| --- | --- |
| `annotations` | Annotations that track metadata about this resource |
| `created_at` |  |
| `id` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | The schedule this rule belongs to |
| `schedule_sync_target` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | The sync target ID this rule links to |
| `sync_type` | Which schedule members sync to the user group |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedules/{schedule_id}/sync_rules`

#### ScheduleSyncTarget

| Field | Description |
| --- | --- |
| `add_bot_to_group` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | Annotations that track metadata about this resource |
| `created_at` |  |
| `id` | Unique identifier of the sync target |
| `linked_schedules` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` |  |
| `slack_team_id` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedule_sync_targets`

#### Secret

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` | Optional description of what this secret is for |
| `id` | Unique identifier for this secret |
| `last_four_chars` | The last four characters of the current value, for masked display. |
| `name` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | IDs of the teams that own this secret. |
| `secret` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` |  |
| `value` | The secret's plaintext value. |
| `version` | The current version number, incremented on each rotation |
| `versions` | The secret's versions, newest first |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/secrets/{id}/actions/rotate`

#### Severity

| Field | Description |
| --- | --- |
| `created_at` | When the action was created |
| `description` | Description of the severity |
| `id` | Unique identifier of the severity |
| `name` | Human readable name of the severity |
| `rank` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/severities`

#### StatusPage

| Field | Description |
| --- | --- |
| `description` | The description of this status page |
| `id` | Unique ID of this status page |
| `name` | The title of this status page |
| `public_url` | The public URL of this status page |

Operations: List, Load.

API path: `/v2/status_pages`

#### StatusPageComponent

| Field | Description |
| --- | --- |
| `description` | Optional short description of this component |
| `id` | Unique identifier for this component |
| `management_meta` |  |
| `name` | Human-readable name for the component |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/status_page_components`

#### StatusPageComponentAvailability

| Field | Description |
| --- | --- |
| `availability_percent` | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | ID of the component. |
| `data_available_since` | Earliest time we have status data for this component. |
| `end_at` | End of the requested availability window |
| `start_at` | Start of the requested availability window |
| `status_page_id` | ID of the status page |

Operations: Load.

API path: `/v2/status_pages/{status_page_id}/components/{component_id}/availability`

#### StatusPageIncident

| Field | Description |
| --- | --- |
| `component_impacts` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | An array of mappings from component ID to current component status |
| `id` | A unique ID for this status page incident |
| `idempotency_key` | A unique key to de-duplicate requests. |
| `incident_status` | Current status for this incident |
| `message` | Markdown initial update on this status page incident |
| `name` | A title for the incident |
| `notify_subscribers` | Whether to notify subscribers about this status page incident. |
| `published_at` | When this status page incident was published to the status page |
| `status_page_id` | The ID of the corresponding status page |
| `updates` | A list of updates posted to this status page incident |

Operations: Create, List, Load, Update.

API path: `/v2/status_page_incidents`

#### StatusPageIncidentUpdate

| Field | Description |
| --- | --- |
| `component_statuses` | An array of mappings from component ID to component status. |
| `incident_status` | Optional new status for this status page incident. |
| `message` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | ID of the status page incident |

Operations: Create.

API path: `/v2/status_page_incident_updates`

#### StatusPageLinkedResponseIncident

| Field | Description |
| --- | --- |
| `id` | ID of the Response incident |
| `linked_at` | When the Response incident was linked to the status page incident |

Operations: List.

API path: `/v1/status-pages/{id}/incidents/{incident_id}/response-incidents`

#### StatusPageMaintenance

| Field | Description |
| --- | --- |
| `affected_component_ids` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | The time the maintenance window ends |
| `id` | A unique ID for this status page maintenance window |
| `idempotency_key` | A unique key to de-duplicate requests. |
| `maintenance_status` | Current status for this maintenance window |
| `message` | Markdown initial update on this status page maintenance window |
| `name` | A title for the maintenance window |
| `notify_subscribers` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | When this status page maintenance window was published to the status page |
| `start_at` | The time the maintenance window starts |
| `status_page_id` | The ID of the corresponding status page |
| `updates` | A list of updates posted to this status page maintenance window |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/status_page_maintenances`

#### StatusPageMaintenanceUpdate

| Field | Description |
| --- | --- |
| `component_statuses` | An array of mappings from component ID to component status. |
| `maintenance_status` | Optional new status for this status page maintenance window. |
| `message` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | ID of the status page maintenance window |

Operations: Create.

API path: `/v2/status_page_maintenance_updates`

#### StatusPageStructure

| Field | Description |
| --- | --- |
| `current_structure` |  |
| `display_uptime_mode` | How the page shows uptime against its components |
| `id` |  |
| `management_meta` |  |

Operations: Load.

API path: `/v2/status_page_structures/{status_page_id}`

#### StatusPagesCreateStatusPageRetrospectiveIncidentResultV2

| Field | Description |
| --- | --- |
| `idempotency_key` | A unique key to de-duplicate requests. |
| `name` | A title for the incident |
| `status_page_id` | ID of the status page. |
| `updates` | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

Operations: Create.

API path: `/v2/status_page_retrospective_incidents`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` | Unique ID of the team |
| `members` | Members of the team |
| `name` | Name of the team |

Operations: List, Load.

API path: `/v3/teams`

#### TelemetryDataSource

| Field | Description |
| --- | --- |
| `created_at` | When this data source was created |
| `datadog_config` | Datadog-specific credential updates |
| `enabled` | Whether this data source is enabled |
| `grafana_config` | Grafana-specific credential and endpoint updates |
| `id` | Unique identifier for this data source |
| `name` | Human-readable name of the data source |
| `provider` | Provider that hosts this data source |
| `source_type` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | When this data source was last updated |
| `version` | Upstream tool version captured at probe time (e.g. |

Operations: Update.

API path: `/v2/telemetry/data_sources/{id}`

#### User

| Field | Description |
| --- | --- |
| `base_role` |  |
| `custom_roles` |  |
| `email` | Email address of the user. |
| `id` | Unique identifier of the user |
| `is_active` | Whether the user is active. |
| `name` | Name of the user |
| `role` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` |  |
| `slack_user_id` | Slack ID of the user |

Operations: List, Load.

API path: `/v2/users`

#### UsersShowPagingProviderResultV2

| Field | Description |
| --- | --- |
| `preferred_escalation_provider` | The user's effective escalation provider. |

Operations: Create, Load.

API path: `/v2/users/{user_id}/paging_provider`

#### UtilitiesV1

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v1/openapiV3.json`

#### Workflow

| Field | Description |
| --- | --- |
| `annotations` | Annotations that track metadata about this resource |
| `auto_run_mode` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | Whether to continue executing the workflow if a step fails |
| `delay` |  |
| `expressions` | The expressions to use in the workflow |
| `folder` | Folder to display the workflow in |
| `form_fields` | User-configured form fields available in the workflow scope. |
| `id` | Unique identifier for the workflow |
| `include_private_escalations` | Whether to include private escalations |
| `include_private_incidents` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` |  |
| `name` | Name provided by the user when creating the workflow |
| `once_for` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | IDs of the teams that own this workflow |
| `private_incident_scope` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | Which incidents should the workflow be applied to? |
| `shortform` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | What state this workflow is in |
| `steps` | Steps that are executed as part of the workflow |
| `trigger` | Trigger to set on the workflow |
| `version` | Revision of the workflow, uniquely identifying it's version |
| `workflow` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/workflows`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `cancelled_at` | If the run was cancelled, this is when |
| `created_at` | When the resource was created |
| `enqueued_at` | When the run was enqueued for execution |
| `error` | Error produced by the workflow, if it failed |
| `id` | Unique identifier for the workflow run |
| `incident_id` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | Status of each step as it is worked |
| `scheduled_at` | When the run was scheduled for |
| `updated_at` | When the resource was last updated |
| `workflow_id` | Unique identifier for the underlying workflow |
| `workflow_name` | Name of the underlying workflow |
| `workflow_version_id` | Unique identifier of the workflow version |
| `workflow_version_number` | Monotonically incrementing version number for the version that ran |

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
| `assignee_id` | `string` | ID of the user this action is assigned to |
| `completed_at` | `string` | When the action was completed |
| `created_at` | `string` | When the action was created |
| `creator` | `table` |  |
| `description` | `string` | Description of the action |
| `id` | `string` | Unique identifier for the action |
| `incident_id` | `string` | Unique identifier of the incident the action belongs to |
| `status` | `string` | Status of the action |
| `updated_at` | `string` | When the action was last updated |

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
  description = "example_description", -- string
  incident_id = "example_incident_id", -- string
})
```


### Alert

Create an instance: `local alert = client:Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `table` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `table` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `table` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Load

```lua
local alert, err = client:Alert():load({ id = "alert_id" })
```

#### Example: List

```lua
local alerts, err = client:Alert():list({ page_size = 1 })
```

#### Example: Create

```lua
local alert, err = client:Alert():create({
  id = "example_id", -- string
  alert_source_id = "example_alert_source_id", -- string
  attributes = {}, -- table
  created_at = "example_created_at", -- string
  deduplication_key = "example_deduplication_key", -- string
  status = "example_status", -- string
  title = "example_title", -- string
  updated_at = "example_updated_at", -- string
})
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
| `array` | `boolean` | Whether this attribute is an array |
| `emoji` | `string` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | The ID of this attribute |
| `name` | `string` | Unique name of this attribute |
| `required` | `boolean` | Whether this attribute is required. |
| `type` | `string` | Engine resource name for this attribute |

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
  name = "example_name", -- string
  type = "example_type", -- string
})
```


### AlertEventsV2

Create an instance: `local alert_events_v2 = client:AlertEventsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deduplication_key` | `string` | The deduplication key that the event has been processed with |
| `description` | `string` | Description that optionally adds more detail to title. |
| `message` | `string` | Human readable message giving detail about the event |
| `metadata` | `table` | Any additional metadata that you've configured your alert source to parse |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Status of the event |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |

#### Example: Create

```lua
local alert_events_v2, err = client:AlertEventsV2():create({
  alert_source_config_id = "example_alert_source_config_id", -- string
  status = "example_status", -- string
  title = "example_title", -- string
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
| `alert_group_id` | `string` | ID of the alert group this note is attached to. |
| `alert_id` | `string` | ID of the alert this note is attached to. |
| `content` | `string` | Markdown body of the note |
| `created_at` | `string` | When this note was first created |
| `creator` | `table` |  |
| `id` | `string` | Unique identifier for the alert note |
| `images` | `table` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | When this note was last updated |

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
| `alert_sources` | `table` | Which alert sources this route matches |
| `condition_groups` | `table` | Filter: the condition groups that must be true for this route to fire |
| `created_at` | `string` | When this alert route was created |
| `enabled` | `boolean` | Whether this alert route is enabled |
| `escalation_config` | `table` |  |
| `expressions` | `table` | The expressions used by bindings in this route |
| `grouping_config` | `table` |  |
| `id` | `string` | Unique identifier for this alert route |
| `incident_config` | `table` |  |
| `is_private` | `boolean` | Whether this alert route is private. |
| `message_config` | `table` |  |
| `name` | `string` | The name of this alert route, for the user's reference |
| `owning_team_ids` | `table` | IDs of teams that own this alert route |
| `updated_at` | `string` | When this alert route was last updated |
| `version` | `number` | The version of this alert route |

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
  alert_sources = {}, -- table
  condition_groups = {}, -- table
  enabled = true, -- boolean
  escalation_config = {}, -- table
  expressions = {}, -- table
  grouping_config = {}, -- table
  incident_config = {}, -- table
  is_private = true, -- boolean
  message_config = {}, -- table
  name = "example_name", -- string
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
| `alert_events_url` | `string` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `boolean` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `number` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `table` |  |
| `disabled` | `boolean` | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `table` |  |
| `filter_condition_groups` | `table` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `table` |  |
| `http_custom_options` | `table` |  |
| `id` | `string` | The ID of this alert source |
| `jira_options` | `table` |  |
| `name` | `string` | Unique name of the alert source |
| `owning_team_ids` | `table` | IDs of teams that own this alert source |
| `rate_limit_sharding` | `table` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Type of alert source |
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
  azure_devops_options = {}, -- table
  email_options = {}, -- table
  heartbeat_options = {}, -- table
  http_custom_options = {}, -- table
  jira_options = {}, -- table
  name = "example_name", -- string
  rate_limit_sharding = {}, -- table
  source_type = "example_source_type", -- string
  template = {}, -- table
})
```


### AlertSourcesV2

Create an instance: `local alert_sources_v2 = client:AlertSourcesV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `owning_team_ids` | `table` | IDs of teams that own this alert source |
| `source_type` | `string` | Type of alert source |
| `template` | `table` |  |

#### Example: Create

```lua
local alert_sources_v2, err = client:AlertSourcesV2():create({
  source_type = "example_source_type", -- string
  template = {}, -- table
})
```


### AlertTag

Create an instance: `local alert_tag = client:AlertTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `table` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `table` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `name` | `string` | The tag name |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `table` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: List

```lua
local alert_tags, err = client:AlertTag():list()
```

#### Example: Create

```lua
local alert_tag, err = client:AlertTag():create({
  alert_id = "example_alert_id", -- string
  tags = {}, -- table
})
```


### AlertsAddTagsResultV2

Create an instance: `local alerts_add_tags_result_v2 = client:AlertsAddTagsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `table` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `table` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `table` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```lua
local alerts_add_tags_result_v2, err = client:AlertsAddTagsResultV2():create({
  alert_id = "example_alert_id", -- string
  tags = {}, -- table
})
```


### AlertsSetTagsResultV2

Create an instance: `local alerts_set_tags_result_v2 = client:AlertsSetTagsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `table` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `table` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `table` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```lua
local alerts_set_tags_result_v2, err = client:AlertsSetTagsResultV2():create({
  alert_id = "example_alert_id", -- string
  tags = {}, -- table
})
```


### AlertsTransitionIncidentAlertResultV2

Create an instance: `local alerts_transition_incident_alert_result_v2 = client:AlertsTransitionIncidentAlertResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `table` |  |
| `alert_id` | `string` | Alert to attach to the incident |
| `alert_route_id` | `string` | The ID of the alert route that created this incident alert |
| `id` | `string` | The ID of this alert |
| `incident` | `table` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Incident to attach the alert to |
| `re_relate` | `boolean` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | What state to move the connection to |

#### Example: List

```lua
local alerts_transition_incident_alert_result_v2s, err = client:AlertsTransitionIncidentAlertResultV2():list({ page_size = 1 })
```

#### Example: Create

```lua
local alerts_transition_incident_alert_result_v2, err = client:AlertsTransitionIncidentAlertResultV2():create({
  alert_id = "example_alert_id", -- string
  incident_id = "example_incident_id", -- string
  state = "example_state", -- string
})
```


### AnnouncementRule

Create an instance: `local announcement_rule = client:AnnouncementRule(nil)`

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
| `condition_groups` | `table` | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | When the rule was created |
| `id` | `string` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `table` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Human readable name for the rule |
| `owning_team_ids` | `table` | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `table` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `string` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `string` | Where incident updates are shared once the incident is announced |
| `updated_at` | `string` | When the rule was last updated |

#### Example: Load

```lua
local announcement_rule, err = client:AnnouncementRule():load({ id = "announcement_rule_id" })
```

#### Example: List

```lua
local announcement_rules, err = client:AnnouncementRule():list()
```

#### Example: Create

```lua
local announcement_rule, err = client:AnnouncementRule():create({
  condition_groups = {}, -- table
  mode = "example_mode", -- string
  name = "example_name", -- string
  update_sharing_mode = "example_update_sharing_mode", -- string
})
```


### AnnouncementTemplate

Create an instance: `local announcement_template = client:AnnouncementTemplate(nil)`

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
| `actions` | `table` | Actions shown on the announcement post, in rank order |
| `fields` | `table` | Fields shown on the announcement post, in rank order |
| `id` | `string` | Unique identifier for this announcement template |
| `is_default` | `boolean` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Name of this announcement template |
| `owning_team_ids` | `table` | IDs of the teams that own this template |

#### Example: Load

```lua
local announcement_template, err = client:AnnouncementTemplate():load({ id = "announcement_template_id" })
```

#### Example: List

```lua
local announcement_templates, err = client:AnnouncementTemplate():list()
```

#### Example: Create

```lua
local announcement_template, err = client:AnnouncementTemplate():create({
  name = "example_name", -- string
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
| `comments` | `string` | Freeform notes about this API key |
| `created_at` | `string` | When the API key was created |
| `creator` | `table` |  |
| `id` | `string` | Unique identifier for this API key |
| `last_used_at` | `string` | When the key was last used to authenticate a request |
| `name` | `string` | The name of the API key, for the user's reference |
| `role_names` | `table` | Account-level roles to assign to the API key. |
| `roles` | `table` | The account-level roles assigned to this API key |
| `team_ids` | `table` | IDs of teams that this API key is scoped to |
| `team_role_names` | `table` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `table` | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | When the current token for this API was last issued. |

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
  name = "example_name", -- string
  role_names = {}, -- table
  team_ids = {}, -- table
  team_role_names = {}, -- table
})
```


### CallRoute

Create an instance: `local call_route = client:CallRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_callers` | `table` | The numbers allowed to call this route. |
| `country_code` | `string` | The country this route's number belongs to |
| `created_at` | `string` |  |
| `current_state` | `string` | Where this route is in provisioning. |
| `custom_language` | `string` | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Unique identifier for this call route |
| `name` | `string` | Name for this call route |
| `options` | `table` | The phone-tree menu this route presents. |
| `path` | `table` | Who we page when a call comes in. |
| `phone_number` | `string` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` |  |
| `use_caller_allowlist` | `boolean` | Whether this route only answers calls from its allowed callers |

#### Example: Load

```lua
local call_route, err = client:CallRoute():load({ id = "call_route_id" })
```

#### Example: List

```lua
local call_routes, err = client:CallRoute():list()
```


### CallRouteAllowedCaller

Create an instance: `local call_route_allowed_caller = client:CallRouteAllowedCaller(nil)`

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
| `id` | `string` | Unique identifier for this allowed caller |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number allowed to call this route, in international format |

#### Example: Load

```lua
local call_route_allowed_caller, err = client:CallRouteAllowedCaller():load({ id = "call_route_allowed_caller_id", call_route_id = "call_route_id" })
```

#### Example: List

```lua
local call_route_allowed_callers, err = client:CallRouteAllowedCaller():list({ id = "example" })
```

#### Example: Create

```lua
local call_route_allowed_caller, err = client:CallRouteAllowedCaller():create({
  id = "example_id", -- string
  phone_number = "example_phone_number", -- string
})
```


### CallRouteOption

Create an instance: `local call_route_option = client:CallRouteOption(nil)`

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
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `id` | `string` | Unique identifier for this option |
| `path` | `table` | Who we page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Load

```lua
local call_route_option, err = client:CallRouteOption():load({ id = "call_route_option_id", call_route_id = "call_route_id" })
```

#### Example: List

```lua
local call_route_options, err = client:CallRouteOption():list({ id = "example" })
```

#### Example: Create

```lua
local call_route_option, err = client:CallRouteOption():create({
  id = "example_id", -- string
  digit = "example_digit", -- string
  path = {}, -- table
  prompt = "example_prompt", -- string
})
```


### CallSession

Create an instance: `local call_session = client:CallSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_at` | `string` | When the call session ended. |
| `id` | `string` | Unique identifier for this call session |
| `incident_id` | `string` | The incident this call session belongs to |
| `started_at` | `string` | When the call session started |

#### Example: List

```lua
local call_sessions, err = client:CallSession():list({ incident_id = "example" })
```


### CallTranscriptEntry

Create an instance: `local call_transcript_entry = client:CallTranscriptEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | What was said |
| `id` | `string` | Unique identifier for this transcript entry |
| `medium` | `string` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `string` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `string` | When the participant started speaking |

#### Example: List

```lua
local call_transcript_entrys, err = client:CallTranscriptEntry():list({ call_session_id = "example" })
```


### CatalogEntry

Create an instance: `local catalog_entry = client:CatalogEntry(nil)`

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
| `aliases` | `table` | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | When this entry was archived |
| `attribute_values` | `table` | Values of this entry |
| `catalog_entry` | `table` |  |
| `catalog_type` | `table` |  |
| `catalog_type_id` | `string` | ID of this catalog type |
| `created_at` | `string` | When this entry was created |
| `external_id` | `string` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | ID of this catalog entry |
| `name` | `string` | Name is the human readable name of this entry |
| `rank` | `number` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `table` | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | When this entry was last updated |

#### Example: Load

```lua
local catalog_entry, err = client:CatalogEntry():load({ id = "catalog_entry_id" })
```

#### Example: List

```lua
local catalog_entrys, err = client:CatalogEntry():list({ catalog_type_id = "example", page_size = 1 })
```

#### Example: Create

```lua
local catalog_entry, err = client:CatalogEntry():create({
  attribute_values = {}, -- table
  catalog_type_id = "example_catalog_type_id", -- string
  name = "example_name", -- string
})
```


### CatalogResource

Create an instance: `local catalog_resource = client:CatalogResource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | Which category of resource |
| `description` | `string` | Human readable description for this resource |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `string` | Label for this catalog resource type |
| `type` | `string` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `string` | Documentation for the literal string value of this resource |

#### Example: List

```lua
local catalog_resources, err = client:CatalogResource():list()
```


### CatalogType

Create an instance: `local catalog_type = client:CatalogType(nil)`

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
| `annotations` | `table` | Annotations that can track metadata about this type |
| `categories` | `table` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `table` | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `table` | If populated, the integrations required for this type |
| `schema` | `table` |  |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

#### Example: Load

```lua
local catalog_type, err = client:CatalogType():load({ id = "catalog_type_id" })
```

#### Example: List

```lua
local catalog_types, err = client:CatalogType():list()
```

#### Example: Create

```lua
local catalog_type, err = client:CatalogType():create({
  description = "example_description", -- string
  name = "example_name", -- string
})
```


### CatalogTypeSchema

Create an instance: `local catalog_type_schema = client:CatalogTypeSchema(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `table` | Annotations that can track metadata about this type |
| `attributes` | `table` |  |
| `categories` | `table` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `table` | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `table` | If populated, the integrations required for this type |
| `schema` | `table` |  |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `number` |  |

#### Example: Create

```lua
local catalog_type_schema, err = client:CatalogTypeSchema():create({
  catalog_type_id = "example_catalog_type_id", -- string
  attributes = {}, -- table
  version = 1, -- number
})
```


### CatalogV3

Create an instance: `local catalog_v3 = client:CatalogV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `string` | The unique identifier of the catalog type containing the entries |
| `entries` | `table` | A list of entries to update with their new values. |
| `update_attributes` | `table` | Optional list of specific attribute IDs to update across all entries. |

#### Example: Create

```lua
local catalog_v3, err = client:CatalogV3():create({
  catalog_type_id = "example_catalog_type_id", -- string
  entries = {}, -- table
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
| `catalog_type_id` | `string` | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the custom field |
| `field_type` | `string` | Type of custom field |
| `filter_by` | `table` |  |
| `fixed_filter` | `table` |  |
| `group_by_catalog_attribute_id` | `string` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | Which catalog attribute provides helptext for the options |
| `id` | `string` | Unique identifier for the custom field |
| `name` | `string` | Human readable name for the custom field |
| `updated_at` | `string` | When the action was last updated |

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
  description = "example_description", -- string
  field_type = "example_field_type", -- string
  filter_by = {}, -- table
  fixed_filter = {}, -- table
  name = "example_name", -- string
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
| `custom_field_id` | `string` | ID of the custom field this option belongs to |
| `id` | `string` | Unique identifier for the custom field option |
| `sort_key` | `number` | Sort key used to order the custom field options correctly |
| `value` | `string` | Human readable name for the custom field option. |

#### Example: Load

```lua
local custom_field_option, err = client:CustomFieldOption():load({ id = "custom_field_option_id" })
```

#### Example: List

```lua
local custom_field_options, err = client:CustomFieldOption():list({ custom_field_id = "example" })
```

#### Example: Create

```lua
local custom_field_option, err = client:CustomFieldOption():create({
  custom_field_id = "example_custom_field_id", -- string
  value = "example_value", -- string
})
```


### Escalation

Create an instance: `local escalation = client:Escalation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this escalation was created |
| `creator` | `table` | The creator of this escalation. |
| `description` | `string` | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | Unique identifier of the escalation path that the escalation was created from |
| `events` | `table` | Events which describe the history of this escalation. |
| `id` | `string` | Unique ID of the escalation |
| `idempotency_key` | `string` | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | ID of an incident to associate with this escalation. |
| `priority` | `table` | The priority associated with this escalation. |
| `related_alerts` | `table` | Alerts related to this escalation |
| `related_incidents` | `table` | Incidents related to this escalation |
| `status` | `string` | Status of the escalation |
| `title` | `string` | The title of this escalation |
| `updated_at` | `string` | When this escalation was last updated |
| `user_ids` | `table` | IDs of users to escalate directly to |

#### Example: Load

```lua
local escalation, err = client:Escalation():load({ id = "escalation_id" })
```

#### Example: List

```lua
local escalations, err = client:Escalation():list()
```

#### Example: Create

```lua
local escalation, err = client:Escalation():create({
  idempotency_key = "example_idempotency_key", -- string
  title = "example_title", -- string
})
```


### EscalationPath

Create an instance: `local escalation_path = client:EscalationPath(nil)`

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
| `current_responders` | `table` | Users who are currently on-call for this escalation path |
| `id` | `string` | Unique identifier for this escalation path. |
| `kind` | `string` | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | `string` | The name of this escalation path, for the user's reference. |
| `param_bindings` | `table` | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | `table` | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` | `table` |  |
| `team_ids` | `table` | IDs of the teams that own this escalation path. |
| `template_id` | `string` | For a templated path, the template it is built from. |
| `working_hours` | `table` | The working hours for this escalation path. |

#### Example: Load

```lua
local escalation_path, err = client:EscalationPath():load({ id = "escalation_path_id" })
```

#### Example: List

```lua
local escalation_paths, err = client:EscalationPath():list()
```

#### Example: Create

```lua
local escalation_path, err = client:EscalationPath():create({
  name = "example_name", -- string
  path = {}, -- table
  repeat_config = {}, -- table
})
```


### EscalationPathTemplate

Create an instance: `local escalation_path_template = client:EscalationPathTemplate(nil)`

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
| `description` | `string` | A description of what this template is for. |
| `expressions` | `table` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `boolean` | Whether a previous escalation path version uses this template. |
| `id` | `string` | Unique identifier for this template. |
| `name` | `string` | The name of this template. |
| `params` | `table` | The parameters declared by this template. |
| `path` | `table` | The nodes that form the levels and branches of this template. |
| `repeat_config` | `table` |  |
| `working_hours` | `table` | The working hours for this template. |

#### Example: Load

```lua
local escalation_path_template, err = client:EscalationPathTemplate():load({ id = "escalation_path_template_id" })
```

#### Example: List

```lua
local escalation_path_templates, err = client:EscalationPathTemplate():list()
```

#### Example: Create

```lua
local escalation_path_template, err = client:EscalationPathTemplate():create({
  name = "example_name", -- string
  path = {}, -- table
  repeat_config = {}, -- table
})
```


### EscalationsCheckEscalationPermissionsResultV2

Create an instance: `local escalations_check_escalation_permissions_result_v2 = client:EscalationsCheckEscalationPermissionsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `response_options` | `table` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `table` | The IDs of the users to check response options for |

#### Example: Create

```lua
local escalations_check_escalation_permissions_result_v2, err = client:EscalationsCheckEscalationPermissionsResultV2():create({
  escalation_id = "example_escalation_id", -- string
  user_ids = {}, -- table
})
```


### EscalationsReassignEscalationResultV2

Create an instance: `local escalations_reassign_escalation_result_v2 = client:EscalationsReassignEscalationResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Additional details about the new escalation. |
| `escalation_path_id` | `string` | ID of the escalation path to reassign to |
| `resolve_original` | `boolean` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | The title of the new escalation. |
| `user_ids` | `table` | IDs of users to reassign directly to |

#### Example: Create

```lua
local escalations_reassign_escalation_result_v2, err = client:EscalationsReassignEscalationResultV2():create({
  escalation_id = "example_escalation_id", -- string
})
```


### EscalationsV2

Create an instance: `local escalations_v2 = client:EscalationsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `response` | `string` | Whether to acknowledge, decline or snooze the escalation |
| `snooze_details` | `table` |  |

#### Example: Create

```lua
local escalations_v2, err = client:EscalationsV2():create({
  escalation_id = "example_escalation_id", -- string
  response = "example_response", -- string
  snooze_details = {}, -- table
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
| `assignee_id` | `string` | ID of the user this follow-up is assigned to |
| `assignee_team` | `table` |  |
| `assignee_team_id` | `string` | ID of the team this follow-up is assigned to |
| `category` | `table` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `table` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `table` |  |
| `external_issue_reference_id` | `string` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | ID of the priority for this follow-up |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `table` | Labels associated with this follow-up |
| `priority` | `table` |  |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |

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
  incident_id = "example_incident_id", -- string
  title = "example_title", -- string
})
```


### FollowUpsConnectExternalIssueResultV2

Create an instance: `local follow_ups_connect_external_issue_result_v2 = client:FollowUpsConnectExternalIssueResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `assignee_team` | `table` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `table` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `table` |  |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `table` | Labels associated with this follow-up |
| `priority` | `table` |  |
| `provider` | `string` | The issue tracker provider the issue belongs to |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```lua
local follow_ups_connect_external_issue_result_v2, err = client:FollowUpsConnectExternalIssueResultV2():create({
  follow_up_id = "example_follow_up_id", -- string
  provider = "example_provider", -- string
  url = "example_url", -- string
})
```


### FollowUpsConnectExternalIssueResultV3

Create an instance: `local follow_ups_connect_external_issue_result_v3 = client:FollowUpsConnectExternalIssueResultV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `table` |  |
| `assignee_team` | `table` |  |
| `category` | `table` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `table` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `table` |  |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `table` | Labels associated with this follow-up |
| `priority` | `table` |  |
| `provider` | `string` | The issue tracker provider the issue belongs to |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```lua
local follow_ups_connect_external_issue_result_v3, err = client:FollowUpsConnectExternalIssueResultV3():create({
  follow_up_id = "example_follow_up_id", -- string
  provider = "example_provider", -- string
  url = "example_url", -- string
})
```


### FollowUpsCreateFromLinkResultV3

Create an instance: `local follow_ups_create_from_link_result_v3 = client:FollowUpsCreateFromLinkResultV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```lua
local follow_ups_create_from_link_result_v3, err = client:FollowUpsCreateFromLinkResultV3():create({
  incident_id = "example_incident_id", -- string
  url = "example_url", -- string
})
```


### HeartbeatV2

Create an instance: `local heartbeat_v2 = client:HeartbeatV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local heartbeat_v2, err = client:HeartbeatV2():load({ id = "heartbeat_v2_id" })
```

#### Example: Create

```lua
local heartbeat_v2, err = client:HeartbeatV2():create({
  id = "example_id", -- string
})
```


### Identity

Create an instance: `local identity = client:Identity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dashboard_url` | `string` | The dashboard URL for this organisation |
| `name` | `string` | The name assigned to the current API Key |
| `roles` | `table` | Which roles have been enabled for this key |
| `team_roles` | `table` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `table` | Teams that this API key is scoped to. |

#### Example: Load

```lua
local identity, err = client:Identity():load()
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
| `call_url` | `string` | The call URL attached to this incident |
| `created_at` | `string` | When the incident was created |
| `creator` | `table` |  |
| `custom_field_entries` | `table` | Custom field entries for this incident |
| `debriefs` | `table` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `table` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `table` |  |
| `has_debrief` | `boolean` | If this incident has a debrief attached |
| `id` | `string` | Unique identifier for the incident |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `table` | A list of who is assigned to each role for this incident |
| `incident_status` | `table` |  |
| `incident_status_id` | `string` | Incident status to assign to the incident |
| `incident_timestamp_values` | `table` | Incident lifecycle events and when they occurred |
| `incident_type` | `table` |  |
| `incident_type_id` | `string` | Incident type to create this incident as |
| `last_activity_at` | `string` | When the incident last recorded 'activity' |
| `mode` | `string` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | URL to link to the Microsoft Teams channel |
| `name` | `string` | Explanation of the incident |
| `permalink` | `string` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `table` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | The URL of the incident post-mortem document |
| `reference` | `string` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `table` |  |
| `severity` | `table` |  |
| `severity_id` | `string` | Severity to create incident as |
| `slack_channel_id` | `string` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | Name of the slack channel |
| `slack_channel_name_override` | `string` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | URL to link to the slack channel |
| `slack_team_id` | `string` | ID of the Slack team / workspace. |
| `summary` | `string` | Detailed description of the incident |
| `team_ids` | `table` | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | `string` | When the incident was last updated |
| `visibility` | `string` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `number` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `number` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `number` | Amount of time spent on the incident in total |
| `workload_minutes_working` | `number` | Amount of time spent on the incident in working hours |

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
  idempotency_key = "example_idempotency_key", -- string
  visibility = "example_visibility", -- string
})
```


### IncidentActivityLogEntry

Create an instance: `local incident_activity_log_entry = client:IncidentActivityLogEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `table` | Details of an activity log entry. |
| `created_at` | `string` | When we recorded the activity |
| `id` | `string` | Unique identifier of the activity log entry |
| `incident_id` | `string` | ID of the incident this happened on. |
| `occurred_at` | `string` | When the activity happened. |
| `title` | `string` | Human-readable summary of what happened |
| `type` | `string` | What kind of activity this is. |

#### Example: List

```lua
local incident_activity_log_entrys, err = client:IncidentActivityLogEntry():list({ incident_id = "example" })
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
| `id` | `string` | Unique identifier of this incident membership |
| `incident_id` | `string` | ID of the incident to add an attachment to |
| `resource` | `table` |  |

#### Example: List

```lua
local incident_attachments, err = client:IncidentAttachment():list()
```

#### Example: Create

```lua
local incident_attachment, err = client:IncidentAttachment():create({
  incident_id = "example_incident_id", -- string
  resource = {}, -- table
})
```


### IncidentForm

Create an instance: `local incident_form = client:IncidentForm(nil)`

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
| `created_at` | `string` | When this incident form was created |
| `expressions` | `table` | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Which form this is. |
| `id` | `string` | Unique identifier for this incident form |
| `incident_type_id` | `string` | The incident type this form belongs to. |
| `lifecycle_elements` | `table` | Elements on this form, in display order. |
| `updated_at` | `string` | When this incident form was last updated |

#### Example: Load

```lua
local incident_form, err = client:IncidentForm():load({ id = "incident_form_id" })
```

#### Example: List

```lua
local incident_forms, err = client:IncidentForm():list()
```

#### Example: Create

```lua
local incident_form, err = client:IncidentForm():create({
  expressions = {}, -- table
  form_type = "example_form_type", -- string
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
| `incident_id` | `string` | The incident to make the user a member of |
| `user_id` | `string` |  |

#### Example: Create

```lua
local incident_membership, err = client:IncidentMembership():create({
  incident_id = "example_incident_id", -- string
  user_id = "example_user_id", -- string
})
```


### IncidentMembershipsV1

Create an instance: `local incident_memberships_v1 = client:IncidentMembershipsV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Revoke memberships to incident |
| `user_id` | `string` |  |

#### Example: Create

```lua
local incident_memberships_v1, err = client:IncidentMembershipsV1():create({
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
| `active` | `table` | Participants who are actively helping with the incident |
| `passive` | `table` | Participants who are just observing the incident |

#### Example: Load

```lua
local incident_participant, err = client:IncidentParticipant():load({ incident_id = "incident_id" })
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
| `archived_at` | `string` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | The role they had in the incident |
| `user` | `table` |  |
| `workload` | `table` |  |

#### Example: List

```lua
local incident_participant_workloads, err = client:IncidentParticipantWorkload():list({ incident_id = "example" })
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
| `id` | `string` | Unique identifier of this incident relationship |
| `incident` | `table` |  |

#### Example: List

```lua
local incident_relationships, err = client:IncidentRelationship():list({ incident_id = "example" })
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
| `created_at` | `string` | When the role was created |
| `description` | `string` | Describes the purpose of the role |
| `id` | `string` | Unique identifier for the role |
| `instructions` | `string` | Provided to whoever is nominated for the role. |
| `name` | `string` | Human readable name of the incident role |
| `role_type` | `string` | Type of incident role |
| `shortform` | `string` | Short human readable name for Slack. |
| `updated_at` | `string` | When the role was last updated |

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
  description = "example_description", -- string
  instructions = "example_instructions", -- string
  name = "example_name", -- string
  shortform = "example_shortform", -- string
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
| `category` | `string` | What category of status it is. |
| `created_at` | `string` |  |
| `description` | `string` | Rich text description of the incident status |
| `id` | `string` | Unique ID of this incident status |
| `name` | `string` | Unique name of this status |
| `rank` | `number` | Order of this incident status |
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
  description = "example_description", -- string
  name = "example_name", -- string
})
```


### IncidentTeamMembership

Create an instance: `local incident_team_membership = client:IncidentTeamMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` |  |
| `team_id` | `string` |  |

#### Example: Create

```lua
local incident_team_membership, err = client:IncidentTeamMembership():create({
  incident_id = "example_incident_id", -- string
  team_id = "example_team_id", -- string
})
```


### IncidentTeamMembershipsV1

Create an instance: `local incident_team_memberships_v1 = client:IncidentTeamMembershipsV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Revoke team access to this incident |
| `team_id` | `string` |  |

#### Example: Create

```lua
local incident_team_memberships_v1, err = client:IncidentTeamMembershipsV1():create({
  incident_id = "example_incident_id", -- string
  team_id = "example_team_id", -- string
})
```


### IncidentTemplate

Create an instance: `local incident_template = client:IncidentTemplate(nil)`

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
| `created_at` | `string` | When this incident template was created |
| `expressions` | `table` | The expressions used by bindings in this template |
| `id` | `string` | Unique identifier for this incident template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `table` | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | When this incident template was last updated |

#### Example: Load

```lua
local incident_template, err = client:IncidentTemplate():load({ id = "incident_template_id" })
```

#### Example: List

```lua
local incident_templates, err = client:IncidentTemplate():list()
```

#### Example: Create

```lua
local incident_template, err = client:IncidentTemplate():create({
  name = "example_name", -- string
  template = {}, -- table
})
```


### IncidentTemplatesValidateResultV1

Create an instance: `local incident_templates_validate_result_v1 = client:IncidentTemplatesValidateResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expressions` | `table` | The expressions used by bindings in this template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `table` | The values an incident template applies to the incidents it creates. |
| `warnings` | `table` | Anything suspect about this config that isn't severe enough to reject it. |

#### Example: Create

```lua
local incident_templates_validate_result_v1, err = client:IncidentTemplatesValidateResultV1():create({
  name = "example_name", -- string
  template = {}, -- table
})
```


### IncidentTimelineItem

Create an instance: `local incident_timeline_item = client:IncidentTimelineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_log_id` | `string` | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | When this item was added to the timeline |
| `creator` | `table` |  |
| `description` | `string` | Description of the timeline item, in markdown |
| `id` | `string` | Unique identifier of the timeline item |
| `idempotency_key` | `string` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `string` | Incident to add this item to |
| `timestamp` | `string` | When the thing this item describes happened. |
| `title` | `string` | Title of the timeline item |
| `updated_at` | `string` | When this item was last edited |

#### Example: List

```lua
local incident_timeline_items, err = client:IncidentTimelineItem():list({ incident_id = "example" })
```

#### Example: Create

```lua
local incident_timeline_item, err = client:IncidentTimelineItem():create({
  idempotency_key = "example_idempotency_key", -- string
  incident_id = "example_incident_id", -- string
  timestamp = "example_timestamp", -- string
  title = "example_title", -- string
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
| `id` | `string` | Unique ID of this incident timestamp |
| `name` | `string` | Unique name of this timestamp |
| `rank` | `number` | Order in which this timestamp should be shown |

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
| `create_in_triage` | `string` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | When this resource was created |
| `description` | `string` | What is this incident type for? |
| `id` | `string` | Unique identifier for this Incident Type |
| `is_default` | `boolean` | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | The name of this Incident Type |
| `owning_team_ids` | `table` | IDs of the teams that own this incident type |
| `private_incidents_only` | `boolean` | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | When this resource was last updated |

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
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When the update was created |
| `id` | `string` | Unique identifier for this incident update |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `string` | The incident you want to update |
| `merged_into_incident_id` | `string` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `string` | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `table` |  |
| `new_severity` | `table` |  |
| `to_incident_status_id` | `string` | Move the incident to this status |
| `to_severity_id` | `string` | Move the incident to this severity |
| `updater` | `table` |  |

#### Example: List

```lua
local incident_updates, err = client:IncidentUpdate():list()
```

#### Example: Create

```lua
local incident_update, err = client:IncidentUpdate():create({
  idempotency_key = "example_idempotency_key", -- string
  incident_id = "example_incident_id", -- string
})
```


### IncidentsImportPostmortemDocumentResultV2

Create an instance: `local incidents_import_postmortem_document_result_v2 = client:IncidentsImportPostmortemDocumentResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | The document content as GitHub-Flavored Markdown |
| `title` | `string` | Title of the postmortem document |

#### Example: Create

```lua
local incidents_import_postmortem_document_result_v2, err = client:IncidentsImportPostmortemDocumentResultV2():create({
  incident_id = "example_incident_id", -- string
  content = "example_content", -- string
  title = "example_title", -- string
})
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
| `allowlist` | `table` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `boolean` | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | The time this allowlist was last updated |
| `version` | `number` | The version of this IP allowlist |

#### Example: Load

```lua
local ip_allowlist, err = client:IpAllowlist():load()
```


### IpRange

Create an instance: `local ip_range = client:IpRange(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `string` | The address in CIDR notation. |
| `description` | `string` | Which of our traffic reaches you from this address |

#### Example: List

```lua
local ip_ranges, err = client:IpRange():list()
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
| `alert_condition_groups` | `table` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | When this maintenance window was archived, if it has been |
| `created_at` | `string` | When this maintenance window was created |
| `end_at` | `string` | When the maintenance window ends |
| `escalation_targets` | `table` | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Unique identifier for this maintenance window |
| `incident_id` | `string` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `table` |  |
| `name` | `string` | Human readable name for the maintenance window |
| `notification_message` | `string` | Custom message included in notifications about this maintenance window |
| `notify_channels` | `table` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `number` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `number` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `table` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `boolean` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `boolean` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `boolean` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `string` | When the maintenance window starts |
| `updated_at` | `string` | When this maintenance window was last updated |

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
  alert_condition_groups = {}, -- table
  end_at = "example_end_at", -- string
  lead = {}, -- table
  name = "example_name", -- string
  show_in_sidebar = true, -- boolean
  start_at = "example_start_at", -- string
})
```


### ManagedResource

Create an instance: `local managed_resource = client:ManagedResource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `table` | Annotations that track metadata about this resource |
| `managed_by` | `string` | How is this resource managed |
| `resource_id` | `string` | The ID of the resource that this relates to |
| `resource_type` | `string` | The type of the related resource |
| `source_url` | `string` | The url of the external repository where this resource is managed (if there is one) |

#### Example: Create

```lua
local managed_resource, err = client:ManagedResource():create({
  annotations = {}, -- table
  resource_id = "example_resource_id", -- string
  resource_type = "example_resource_type", -- string
})
```


### OnCallNotificationMethodPublicV2

Create an instance: `local on_call_notification_method_public_v2 = client:OnCallNotificationMethodPublicV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The address of this method (e.g. |
| `id` | `string` | Unique identifier for this notification method |
| `is_usable` | `boolean` | Whether this method is ready to receive notifications. |
| `method_type` | `string` | The high-level type of notification method. |
| `phone_details` | `table` |  |

#### Example: List

```lua
local on_call_notification_method_public_v2s, err = client:OnCallNotificationMethodPublicV2():list({ user_id = "example" })
```


### OnCallNotificationPause

Create an instance: `local on_call_notification_pause = client:OnCallNotificationPause(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `ends_at` | `string` | When notifications resume |
| `id` | `string` | Unique identifier for this notification pause |
| `reason` | `string` | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | `string` | When notifications stop being sent to the user |
| `updated_at` | `string` |  |
| `user_id` | `string` | The user whose on-call notifications are paused in this time window |

#### Example: Load

```lua
local on_call_notification_pause, err = client:OnCallNotificationPause():load({ id = "on_call_notification_pause_id" })
```

#### Example: List

```lua
local on_call_notification_pauses, err = client:OnCallNotificationPause():list()
```


### OnCallNotificationRulePublicV2

Create an instance: `local on_call_notification_rule_public_v2 = client:OnCallNotificationRulePublicV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `table` |  |
| `delay_seconds` | `number` | Delay in seconds before this rule activates. |
| `id` | `string` | Unique identifier for this notification rule |
| `method_target` | `table` |  |
| `method_type` | `string` | The high-level type of notification method. |
| `phone` | `table` |  |
| `rule_type` | `string` | The urgency level this rule applies to |

#### Example: List

```lua
local on_call_notification_rule_public_v2s, err = client:OnCallNotificationRulePublicV2():list({ user_id = "example" })
```


### PayConfig

Create an instance: `local pay_config = client:PayConfig(nil)`

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
| `base_rate_cents` | `number` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` |  |
| `currency` | `string` | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Unique identifier for this pay config |
| `name` | `string` | Human readable name for this pay config |
| `one_off_rules` | `table` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | When a published report first priced against this config. |
| `rate_time_unit` | `string` | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` |  |
| `weekly_rules` | `table` | Rules that apply every week, by day of week and time of day, in evaluation order |

#### Example: Load

```lua
local pay_config, err = client:PayConfig():load({ id = "pay_config_id" })
```

#### Example: List

```lua
local pay_configs, err = client:PayConfig():list()
```

#### Example: Create

```lua
local pay_config, err = client:PayConfig():create({
  base_rate_cents = 1, -- number
  currency = "example_currency", -- string
  name = "example_name", -- string
  rate_time_unit = "example_rate_time_unit", -- string
  timezone = "example_timezone", -- string
})
```


### PayConfigOneOffRule

Create an instance: `local pay_config_one_off_rule = client:PayConfigOneOffRule(nil)`

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
| `end_at` | `string` | When this rule stops applying |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |

#### Example: Load

```lua
local pay_config_one_off_rule, err = client:PayConfigOneOffRule():load({ id = "pay_config_one_off_rule_id", pay_config_id = "pay_config_id" })
```

#### Example: List

```lua
local pay_config_one_off_rules, err = client:PayConfigOneOffRule():list({ id = "example" })
```

#### Example: Create

```lua
local pay_config_one_off_rule, err = client:PayConfigOneOffRule():create({
  id = "example_id", -- string
  end_at = "example_end_at", -- string
  name = "example_name", -- string
  rate_cents = 1, -- number
  start_at = "example_start_at", -- string
})
```


### PayConfigWeeklyRule

Create an instance: `local pay_config_weekly_rule = client:PayConfigWeeklyRule(nil)`

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
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `table` | Days of the week this rule applies on |

#### Example: Load

```lua
local pay_config_weekly_rule, err = client:PayConfigWeeklyRule():load({ id = "pay_config_weekly_rule_id", pay_config_id = "pay_config_id" })
```

#### Example: List

```lua
local pay_config_weekly_rules, err = client:PayConfigWeeklyRule():list({ id = "example" })
```

#### Example: Create

```lua
local pay_config_weekly_rule, err = client:PayConfigWeeklyRule():create({
  id = "example_id", -- string
  end_time = "example_end_time", -- string
  rate_cents = 1, -- number
  start_time = "example_start_time", -- string
  weekdays = {}, -- table
})
```


### PayReport

Create an instance: `local pay_report = client:PayReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this report was created |
| `creator` | `table` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `table` |  |
| `pay_config_id` | `string` | The pay config to price every shift with. |
| `published_at` | `string` | When this report was published. |
| `rotation_filters` | `table` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `table` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Load

```lua
local pay_report, err = client:PayReport():load({ id = "pay_report_id" })
```

#### Example: List

```lua
local pay_reports, err = client:PayReport():list()
```

#### Example: Create

```lua
local pay_report, err = client:PayReport():create({
  end_date = "example_end_date", -- string
  name = "example_name", -- string
  pay_config_expression = {}, -- table
  schedule_ids = {}, -- table
  start_date = "example_start_date", -- string
})
```


### PayReportsPublishResultV2

Create an instance: `local pay_reports_publish_result_v2 = client:PayReportsPublishResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cc_emails` | `table` | Email addresses to send a copy of the report to |
| `created_at` | `string` | When this report was created |
| `creator` | `table` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `table` | The schedules this report covers |
| `send_user_breakdowns` | `string` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```lua
local pay_reports_publish_result_v2, err = client:PayReportsPublishResultV2():create({
  pay_report_id = "example_pay_report_id", -- string
  cc_emails = {}, -- table
  send_user_breakdowns = "example_send_user_breakdowns", -- string
})
```


### PayReportsUnpublishResultV2

Create an instance: `local pay_reports_unpublish_result_v2 = client:PayReportsUnpublishResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this report was created |
| `creator` | `table` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `table` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Why this report is being unpublished |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```lua
local pay_reports_unpublish_result_v2, err = client:PayReportsUnpublishResultV2():create({
  pay_report_id = "example_pay_report_id", -- string
  unpublish_reason = "example_unpublish_reason", -- string
})
```


### PayReportsV2

Create an instance: `local pay_reports_v2 = client:PayReportsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local pay_reports_v2, err = client:PayReportsV2():load({ pay_report_id = "pay_report_id" })
```


### Policy

Create an instance: `local policy = client:Policy(nil)`

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
| `assignment_rules` | `table` |  |
| `conditions` | `table` | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` |  |
| `debrief` | `table` | Set when policy_type is debrief. |
| `description` | `string` | Human readable description of the policy |
| `expressions` | `table` | The expressions relating to this policy |
| `follow_up` | `table` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the policy |
| `name` | `string` | Human readable name of the policy |
| `on_call_readiness` | `table` | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Type of the policy, specifying what this applies to |
| `post_mortem` | `table` | Set when policy_type is post_mortem. |
| `schedule` | `table` | Detects gaps in on-call coverage. |
| `status` | `string` | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local policy, err = client:Policy():load({ id = "policy_id" })
```

#### Example: List

```lua
local policys, err = client:Policy():list()
```

#### Example: Create

```lua
local policy, err = client:Policy():create({
  assignment_rules = {}, -- table
  conditions = {}, -- table
  debrief = {}, -- table
  description = "example_description", -- string
  follow_up = {}, -- table
  name = "example_name", -- string
  policy_type = "example_policy_type", -- string
  post_mortem = {}, -- table
  schedule = {}, -- table
})
```


### PolicyFinding

Create an instance: `local policy_finding = client:PolicyFinding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `table` | Set when policy_type is debrief. |
| `dismissal` | `table` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `table` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Set when policy_type is post_mortem. |
| `responsible_users` | `table` | Who is expected to resolve this finding |
| `schedule` | `table` | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `table` | Set when policy_type is vacation_conflict. |

#### Example: Load

```lua
local policy_finding, err = client:PolicyFinding():load({ id = "policy_finding_id" })
```

#### Example: List

```lua
local policy_findings, err = client:PolicyFinding():list()
```


### PolicyFindingsDismissResultV2

Create an instance: `local policy_findings_dismiss_result_v2 = client:PolicyFindingsDismissResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `table` | Set when policy_type is debrief. |
| `dismissal` | `table` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `table` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Set when policy_type is post_mortem. |
| `reason` | `string` | Why this finding is being dismissed |
| `responsible_users` | `table` | Who is expected to resolve this finding |
| `schedule` | `table` | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `table` | Set when policy_type is vacation_conflict. |

#### Example: Create

```lua
local policy_findings_dismiss_result_v2, err = client:PolicyFindingsDismissResultV2():create({
  policy_finding_id = "example_policy_finding_id", -- string
  reason = "example_reason", -- string
})
```


### PolicyFindingsRestoreResultV2

Create an instance: `local policy_findings_restore_result_v2 = client:PolicyFindingsRestoreResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `table` | Set when policy_type is debrief. |
| `dismissal` | `table` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `table` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Set when policy_type is post_mortem. |
| `responsible_users` | `table` | Who is expected to resolve this finding |
| `schedule` | `table` | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `table` | Set when policy_type is vacation_conflict. |

#### Example: Create

```lua
local policy_findings_restore_result_v2, err = client:PolicyFindingsRestoreResultV2():create({
  policy_finding_id = "example_policy_finding_id", -- string
  created_at = "example_created_at", -- string
  debrief = {}, -- table
  dismissal = {}, -- table
  follow_up = {}, -- table
  id = "example_id", -- string
  last_checked_at = "example_last_checked_at", -- string
  on_call_readiness = {}, -- table
  policy_id = "example_policy_id", -- string
  policy_type = "example_policy_type", -- string
  post_mortem = {}, -- table
  responsible_users = {}, -- table
  schedule = {}, -- table
  shift_conflict = {}, -- table
  state = "example_state", -- string
  updated_at = "example_updated_at", -- string
  vacation_conflict = {}, -- table
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
| `created_at` | `string` | Timestamp for when the document was created |
| `document_url` | `string` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `table` | The list of users who have edited this post-mortem document |
| `exported_urls` | `table` | URLs of any external locations this document has been exported to |
| `id` | `string` | Unique identifier for the post-mortem document |
| `incident_id` | `string` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | The current status of this post-mortem document |
| `title` | `string` | The display title of the post-mortem document |
| `type` | `string` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Timestamp for when the document was last updated |

#### Example: Load

```lua
local postmortem_document, err = client:PostmortemDocument():load({ id = "postmortem_document_id" })
```

#### Example: List

```lua
local postmortem_documents, err = client:PostmortemDocument():list()
```


### PostmortemDocumentsAttachResultV1

Create an instance: `local postmortem_documents_attach_result_v1 = client:PostmortemDocumentsAttachResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `document_provider` | `string` | The provider hosting the document. |
| `incident_id` | `string` | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | `string` | A URL pointing to the externally-hosted post-mortem document |

#### Example: Create

```lua
local postmortem_documents_attach_result_v1, err = client:PostmortemDocumentsAttachResultV1():create({
  incident_id = "example_incident_id", -- string
  permalink = "example_permalink", -- string
})
```


### PostmortemDocumentsShowContentResultV1

Create an instance: `local postmortem_documents_show_content_result_v1 = client:PostmortemDocumentsShowContentResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markdown` | `string` | The full content of the post-mortem document, rendered as markdown. |

#### Example: Load

```lua
local postmortem_documents_show_content_result_v1, err = client:PostmortemDocumentsShowContentResultV1():load({ postmortem_document_id = "postmortem_document_id" })
```


### Schedule

Create an instance: `local schedule = client:Schedule(nil)`

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
| `annotations` | `table` | Annotations that track metadata about this resource |
| `config` | `table` |  |
| `created_at` | `string` |  |
| `current_shifts` | `table` | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `table` |  |
| `id` | `string` | Unique internal ID of the schedule |
| `name` | `string` | Human readable name synced from external provider |
| `next_shifts` | `table` | The shifts after the next changeover. |
| `permalink` | `string` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `table` | IDs of teams that own this schedule |
| `timezone` | `string` | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local schedule, err = client:Schedule():load({ id = "schedule_id" })
```

#### Example: List

```lua
local schedules, err = client:Schedule():list()
```

#### Example: Create

```lua
local schedule, err = client:Schedule():create({
  holidays_public_config = {}, -- table
})
```


### ScheduleEntriesListPayloadV2

Create an instance: `local schedule_entries_list_payload_v2 = client:ScheduleEntriesListPayloadV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entry_window_end` | `string` | The end of the window to preview entries for. |
| `entry_window_start` | `string` | The start of the window to preview entries for. |
| `final` | `table` | The effective schedule after overrides have been merged in |
| `overrides` | `table` | Overrides that apply within the requested window |
| `schedule` | `table` |  |
| `scheduled` | `table` | Entries from the schedule's rotation rules, before overrides are applied |

#### Example: Create

```lua
local schedule_entries_list_payload_v2, err = client:ScheduleEntriesListPayloadV2():create({
  schedule_id = "example_schedule_id", -- string
  schedule = {}, -- table
})
```


### ScheduleEntry

Create an instance: `local schedule_entry = client:ScheduleEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pagination_meta` | `table` |  |
| `schedule_entries` | `table` | The schedule entries for a window of time, grouped by where they come from. |

#### Example: Load

```lua
local schedule_entry, err = client:ScheduleEntry():load({ schedule_id = "schedule_id" })
```


### ScheduleOverride

Create an instance: `local schedule_override = client:ScheduleOverride(nil)`

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
| `end_at` | `string` | End of the override |
| `id` | `string` | Unique internal ID of the schedule override |
| `layer_id` | `string` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | The schedule that this override applies to |
| `start_at` | `string` | Start of the override |
| `updated_at` | `string` |  |
| `user` | `table` |  |

#### Example: Load

```lua
local schedule_override, err = client:ScheduleOverride():load({ id = "schedule_override_id" })
```

#### Example: List

```lua
local schedule_overrides, err = client:ScheduleOverride():list({ schedule_id = "example" })
```

#### Example: Create

```lua
local schedule_override, err = client:ScheduleOverride():create({
  end_at = "example_end_at", -- string
  layer_id = "example_layer_id", -- string
  rotation_id = "example_rotation_id", -- string
  schedule_id = "example_schedule_id", -- string
  start_at = "example_start_at", -- string
  user = {}, -- table
})
```


### ScheduleReplica

Create an instance: `local schedule_replica = client:ScheduleReplica(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this schedule replica was first created |
| `id` | `string` | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `number` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `table` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | When this schedule replica was last updated |
| `user_statuses` | `table` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

#### Example: Load

```lua
local schedule_replica, err = client:ScheduleReplica():load({ id = "schedule_replica_id", schedule_id = "schedule_id" })
```

#### Example: List

```lua
local schedule_replicas, err = client:ScheduleReplica():list({ id = "example" })
```

#### Example: Create

```lua
local schedule_replica, err = client:ScheduleReplica():create({
  id = "example_id", -- string
  replica_fallback_user_id = "example_replica_fallback_user_id", -- string
  replica_provider = "example_replica_provider", -- string
  replica_provider_id = "example_replica_provider_id", -- string
  sources = {}, -- table
})
```


### ScheduleSyncRule

Create an instance: `local schedule_sync_rule = client:ScheduleSyncRule(nil)`

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
| `annotations` | `table` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `table` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | The schedule this rule belongs to |
| `schedule_sync_target` | `table` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | The sync target ID this rule links to |
| `sync_type` | `string` | Which schedule members sync to the user group |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local schedule_sync_rule, err = client:ScheduleSyncRule():load({ id = "schedule_sync_rule_id", schedule_id = "schedule_id" })
```

#### Example: List

```lua
local schedule_sync_rules, err = client:ScheduleSyncRule():list({ id = "example" })
```

#### Example: Create

```lua
local schedule_sync_rule, err = client:ScheduleSyncRule():create({
  id = "example_id", -- string
  schedule_sync_target_id = "example_schedule_sync_target_id", -- string
  sync_type = "example_sync_type", -- string
})
```


### ScheduleSyncTarget

Create an instance: `local schedule_sync_target = client:ScheduleSyncTarget(nil)`

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
| `add_bot_to_group` | `boolean` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `table` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync target |
| `linked_schedules` | `table` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `table` |  |
| `slack_team_id` | `string` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `string` | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local schedule_sync_target, err = client:ScheduleSyncTarget():load({ id = "schedule_sync_target_id" })
```

#### Example: List

```lua
local schedule_sync_targets, err = client:ScheduleSyncTarget():list()
```

#### Example: Create

```lua
local schedule_sync_target, err = client:ScheduleSyncTarget():create({
  add_bot_to_group = true, -- boolean
  new_slack_user_group = {}, -- table
})
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
| `description` | `string` | Optional description of what this secret is for |
| `id` | `string` | Unique identifier for this secret |
| `last_four_chars` | `string` | The last four characters of the current value, for masked display. |
| `name` | `string` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `table` | IDs of the teams that own this secret. |
| `secret` | `table` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` |  |
| `value` | `string` | The secret's plaintext value. |
| `version` | `number` | The current version number, incremented on each rotation |
| `versions` | `table` | The secret's versions, newest first |

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
  name = "example_name", -- string
  value = "example_value", -- string
})
```


### Severity

Create an instance: `local severity = client:Severity(nil)`

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
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the severity |
| `id` | `string` | Unique identifier of the severity |
| `name` | `string` | Human readable name of the severity |
| `rank` | `number` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | When the action was last updated |

#### Example: Load

```lua
local severity, err = client:Severity():load({ id = "severity_id" })
```

#### Example: List

```lua
local severitys, err = client:Severity():list()
```

#### Example: Create

```lua
local severity, err = client:Severity():create({
  description = "example_description", -- string
  name = "example_name", -- string
})
```


### StatusPage

Create an instance: `local status_page = client:StatusPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of this status page |
| `id` | `string` | Unique ID of this status page |
| `name` | `string` | The title of this status page |
| `public_url` | `string` | The public URL of this status page |

#### Example: Load

```lua
local status_page, err = client:StatusPage():load({ id = "status_page_id" })
```

#### Example: List

```lua
local status_pages, err = client:StatusPage():list()
```


### StatusPageComponent

Create an instance: `local status_page_component = client:StatusPageComponent(nil)`

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
| `description` | `string` | Optional short description of this component |
| `id` | `string` | Unique identifier for this component |
| `management_meta` | `table` |  |
| `name` | `string` | Human-readable name for the component |

#### Example: Load

```lua
local status_page_component, err = client:StatusPageComponent():load({ id = "status_page_component_id" })
```

#### Example: List

```lua
local status_page_components, err = client:StatusPageComponent():list()
```

#### Example: Create

```lua
local status_page_component, err = client:StatusPageComponent():create({
  name = "example_name", -- string
})
```


### StatusPageComponentAvailability

Create an instance: `local status_page_component_availability = client:StatusPageComponentAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `availability_percent` | `string` | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `string` | ID of the component. |
| `data_available_since` | `string` | Earliest time we have status data for this component. |
| `end_at` | `string` | End of the requested availability window |
| `start_at` | `string` | Start of the requested availability window |
| `status_page_id` | `string` | ID of the status page |

#### Example: Load

```lua
local status_page_component_availability, err = client:StatusPageComponentAvailability():load({ component_id = "component_id", status_page_id = "status_page_id", end_at = "end_at", start_at = "start_at" })
```


### StatusPageIncident

Create an instance: `local status_page_incident = client:StatusPageIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_impacts` | `table` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `table` | An array of mappings from component ID to current component status |
| `id` | `string` | A unique ID for this status page incident |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Current status for this incident |
| `message` | `string` | Markdown initial update on this status page incident |
| `name` | `string` | A title for the incident |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | When this status page incident was published to the status page |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `table` | A list of updates posted to this status page incident |

#### Example: Load

```lua
local status_page_incident, err = client:StatusPageIncident():load({ id = "status_page_incident_id" })
```

#### Example: List

```lua
local status_page_incidents, err = client:StatusPageIncident():list({ status_page_id = "example" })
```

#### Example: Create

```lua
local status_page_incident, err = client:StatusPageIncident():create({
  idempotency_key = "example_idempotency_key", -- string
  incident_status = "example_incident_status", -- string
  message = "example_message", -- string
  name = "example_name", -- string
  notify_subscribers = true, -- boolean
  status_page_id = "example_status_page_id", -- string
})
```


### StatusPageIncidentUpdate

Create an instance: `local status_page_incident_update = client:StatusPageIncidentUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `table` | An array of mappings from component ID to component status. |
| `incident_status` | `string` | Optional new status for this status page incident. |
| `message` | `string` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | ID of the status page incident |

#### Example: Create

```lua
local status_page_incident_update, err = client:StatusPageIncidentUpdate():create({
  message = "example_message", -- string
  notify_subscribers = true, -- boolean
  status_page_incident_id = "example_status_page_incident_id", -- string
})
```


### StatusPageLinkedResponseIncident

Create an instance: `local status_page_linked_response_incident = client:StatusPageLinkedResponseIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the Response incident |
| `linked_at` | `string` | When the Response incident was linked to the status page incident |

#### Example: List

```lua
local status_page_linked_response_incidents, err = client:StatusPageLinkedResponseIncident():list({ incident_id = "example", status_page_id = "example" })
```


### StatusPageMaintenance

Create an instance: `local status_page_maintenance = client:StatusPageMaintenance(nil)`

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
| `affected_component_ids` | `table` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `boolean` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `table` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | The time the maintenance window ends |
| `id` | `string` | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Current status for this maintenance window |
| `message` | `string` | Markdown initial update on this status page maintenance window |
| `name` | `string` | A title for the maintenance window |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | When this status page maintenance window was published to the status page |
| `start_at` | `string` | The time the maintenance window starts |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `table` | A list of updates posted to this status page maintenance window |

#### Example: Load

```lua
local status_page_maintenance, err = client:StatusPageMaintenance():load({ id = "status_page_maintenance_id" })
```

#### Example: List

```lua
local status_page_maintenances, err = client:StatusPageMaintenance():list({ status_page_id = "example" })
```

#### Example: Create

```lua
local status_page_maintenance, err = client:StatusPageMaintenance():create({
  affected_component_ids = {}, -- table
  end_at = "example_end_at", -- string
  idempotency_key = "example_idempotency_key", -- string
  maintenance_status = "example_maintenance_status", -- string
  message = "example_message", -- string
  name = "example_name", -- string
  notify_subscribers = true, -- boolean
  start_at = "example_start_at", -- string
  status_page_id = "example_status_page_id", -- string
})
```


### StatusPageMaintenanceUpdate

Create an instance: `local status_page_maintenance_update = client:StatusPageMaintenanceUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `table` | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | Optional new status for this status page maintenance window. |
| `message` | `string` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | ID of the status page maintenance window |

#### Example: Create

```lua
local status_page_maintenance_update, err = client:StatusPageMaintenanceUpdate():create({
  message = "example_message", -- string
  notify_subscribers = true, -- boolean
  status_page_maintenance_id = "example_status_page_maintenance_id", -- string
})
```


### StatusPageStructure

Create an instance: `local status_page_structure = client:StatusPageStructure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_structure` | `table` |  |
| `display_uptime_mode` | `string` | How the page shows uptime against its components |
| `id` | `string` |  |
| `management_meta` | `table` |  |

#### Example: Load

```lua
local status_page_structure, err = client:StatusPageStructure():load({ id = "status_page_structure_id" })
```


### StatusPagesCreateStatusPageRetrospectiveIncidentResultV2

Create an instance: `local status_pages_create_status_page_retrospective_incident_result_v2 = client:StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `name` | `string` | A title for the incident |
| `status_page_id` | `string` | ID of the status page. |
| `updates` | `table` | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

#### Example: Create

```lua
local status_pages_create_status_page_retrospective_incident_result_v2, err = client:StatusPagesCreateStatusPageRetrospectiveIncidentResultV2():create({
  idempotency_key = "example_idempotency_key", -- string
  name = "example_name", -- string
  status_page_id = "example_status_page_id", -- string
  updates = {}, -- table
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
| `id` | `string` | Unique ID of the team |
| `members` | `table` | Members of the team |
| `name` | `string` | Name of the team |

#### Example: Load

```lua
local team, err = client:Team():load({ id = "team_id" })
```

#### Example: List

```lua
local teams, err = client:Team():list()
```


### TelemetryDataSource

Create an instance: `local telemetry_data_source = client:TelemetryDataSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this data source was created |
| `datadog_config` | `table` | Datadog-specific credential updates |
| `enabled` | `boolean` | Whether this data source is enabled |
| `grafana_config` | `table` | Grafana-specific credential and endpoint updates |
| `id` | `string` | Unique identifier for this data source |
| `name` | `string` | Human-readable name of the data source |
| `provider` | `string` | Provider that hosts this data source |
| `source_type` | `string` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `string` | When this data source was last updated |
| `version` | `string` | Upstream tool version captured at probe time (e.g. |


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
| `custom_roles` | `table` |  |
| `email` | `string` | Email address of the user. |
| `id` | `string` | Unique identifier of the user |
| `is_active` | `boolean` | Whether the user is active. |
| `name` | `string` | Name of the user |
| `role` | `string` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `table` |  |
| `slack_user_id` | `string` | Slack ID of the user |

#### Example: Load

```lua
local user, err = client:User():load({ id = "user_id" })
```

#### Example: List

```lua
local users, err = client:User():list()
```


### UsersShowPagingProviderResultV2

Create an instance: `local users_show_paging_provider_result_v2 = client:UsersShowPagingProviderResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `preferred_escalation_provider` | `string` | The user's effective escalation provider. |

#### Example: Load

```lua
local users_show_paging_provider_result_v2, err = client:UsersShowPagingProviderResultV2():load({ user_id = "user_id" })
```

#### Example: Create

```lua
local users_show_paging_provider_result_v2, err = client:UsersShowPagingProviderResultV2():create({
  user_id = "example_user_id", -- string
  preferred_escalation_provider = "example_preferred_escalation_provider", -- string
})
```


### UtilitiesV1

Create an instance: `local utilities_v1 = client:UtilitiesV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local utilities_v1, err = client:UtilitiesV1():load()
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
| `annotations` | `table` | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `table` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `boolean` | Whether to continue executing the workflow if a step fails |
| `delay` | `table` |  |
| `expressions` | `table` | The expressions to use in the workflow |
| `folder` | `string` | Folder to display the workflow in |
| `form_fields` | `table` | User-configured form fields available in the workflow scope. |
| `id` | `string` | Unique identifier for the workflow |
| `include_private_escalations` | `boolean` | Whether to include private escalations |
| `include_private_incidents` | `boolean` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `table` |  |
| `name` | `string` | Name provided by the user when creating the workflow |
| `once_for` | `table` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `table` | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `table` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Which incidents should the workflow be applied to? |
| `shortform` | `string` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `boolean` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | What state this workflow is in |
| `steps` | `table` | Steps that are executed as part of the workflow |
| `trigger` | `string` | Trigger to set on the workflow |
| `version` | `number` | Revision of the workflow, uniquely identifying it's version |
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
  condition_groups = {}, -- table
  continue_on_step_error = true, -- boolean
  delay = {}, -- table
  expressions = {}, -- table
  name = "example_name", -- string
  once_for = {}, -- table
  runs_on_incident_modes = {}, -- table
  runs_on_incidents = "example_runs_on_incidents", -- string
  steps = {}, -- table
  trigger = "example_trigger", -- string
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
| `cancelled_at` | `string` | If the run was cancelled, this is when |
| `created_at` | `string` | When the resource was created |
| `enqueued_at` | `string` | When the run was enqueued for execution |
| `error` | `string` | Error produced by the workflow, if it failed |
| `id` | `string` | Unique identifier for the workflow run |
| `incident_id` | `string` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `string` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `table` | Status of each step as it is worked |
| `scheduled_at` | `string` | When the run was scheduled for |
| `updated_at` | `string` | When the resource was last updated |
| `workflow_id` | `string` | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | Name of the underlying workflow |
| `workflow_version_id` | `string` | Unique identifier of the workflow version |
| `workflow_version_number` | `number` | Monotonically incrementing version number for the version that ran |

#### Example: Load

```lua
local workflow_run, err = client:WorkflowRun():load({ id = "workflow_run_id" })
```

#### Example: List

```lua
local workflow_runs, err = client:WorkflowRun():list()
```

## Features

This SDK ships 9 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`secrets`](#secrets) | Secrets |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `secrets`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### secrets

Secrets.

| Option | Default |
|---|---|
| `active` | `false` |
| `cache` | `true` |
| `exchange` | `{active: false, method: 'POST', path: 'auth/token', refresh: '', request: 'refresh_token', response: 'access_token', retries: 1, statuses: [401]}` |
| `name` | `'apikey'` |
| `providers` | `[]` |

Set `feature.secrets.active` to enable it, then override any of the options above.

`secrets` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **SecretsFeature**: Secrets
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
├── schema.lua               -- Generated option + entity specs
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
local incidentstatus = client:IncidentStatus()
incidentstatus:list()

-- incidentstatus:data_get() now returns the incidentstatus data from the last list
-- incidentstatus:match_get() returns the last match criteria
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

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
| `options.apikey` | `string` | API key for authentication. |
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

#### `AlertSourcesV2(data)`

Create a new `AlertSourcesV2` entity instance. Pass `nil` for no initial data.

#### `AlertTag(data)`

Create a new `AlertTag` entity instance. Pass `nil` for no initial data.

#### `AlertsAddTagsResultV2(data)`

Create a new `AlertsAddTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsRemoveTagsResultV2(data)`

Create a new `AlertsRemoveTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsSetTagsResultV2(data)`

Create a new `AlertsSetTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsTransitionIncidentAlertResultV2(data)`

Create a new `AlertsTransitionIncidentAlertResultV2` entity instance. Pass `nil` for no initial data.

#### `AnnouncementRule(data)`

Create a new `AnnouncementRule` entity instance. Pass `nil` for no initial data.

#### `AnnouncementTemplate(data)`

Create a new `AnnouncementTemplate` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `CallRoute(data)`

Create a new `CallRoute` entity instance. Pass `nil` for no initial data.

#### `CallRoutesCreateAllowedCallerResultV2(data)`

Create a new `CallRoutesCreateAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesCreateOptionResultV2(data)`

Create a new `CallRoutesCreateOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesListAllowedCallersResultV2(data)`

Create a new `CallRoutesListAllowedCallersResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesListOptionsResultV2(data)`

Create a new `CallRoutesListOptionsResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesShowAllowedCallerResultV2(data)`

Create a new `CallRoutesShowAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesShowOptionResultV2(data)`

Create a new `CallRoutesShowOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesUpdateAllowedCallerResultV2(data)`

Create a new `CallRoutesUpdateAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesUpdateOptionResultV2(data)`

Create a new `CallRoutesUpdateOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesV2(data)`

Create a new `CallRoutesV2` entity instance. Pass `nil` for no initial data.

#### `CallSession(data)`

Create a new `CallSession` entity instance. Pass `nil` for no initial data.

#### `CallTranscriptEntry(data)`

Create a new `CallTranscriptEntry` entity instance. Pass `nil` for no initial data.

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

#### `EscalationPathTemplate(data)`

Create a new `EscalationPathTemplate` entity instance. Pass `nil` for no initial data.

#### `EscalationsCheckEscalationPermissionsResultV2(data)`

Create a new `EscalationsCheckEscalationPermissionsResultV2` entity instance. Pass `nil` for no initial data.

#### `EscalationsReassignEscalationResultV2(data)`

Create a new `EscalationsReassignEscalationResultV2` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data)`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `FollowUpsConnectExternalIssueResultV3(data)`

Create a new `FollowUpsConnectExternalIssueResultV3` entity instance. Pass `nil` for no initial data.

#### `FollowUpsCreateFromLinkResultV3(data)`

Create a new `FollowUpsCreateFromLinkResultV3` entity instance. Pass `nil` for no initial data.

#### `Identity(data)`

Create a new `Identity` entity instance. Pass `nil` for no initial data.

#### `Incident(data)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `IncidentActivityLogEntry(data)`

Create a new `IncidentActivityLogEntry` entity instance. Pass `nil` for no initial data.

#### `IncidentAttachment(data)`

Create a new `IncidentAttachment` entity instance. Pass `nil` for no initial data.

#### `IncidentForm(data)`

Create a new `IncidentForm` entity instance. Pass `nil` for no initial data.

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

#### `IncidentTeamMembership(data)`

Create a new `IncidentTeamMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentTeamMembershipsV1(data)`

Create a new `IncidentTeamMembershipsV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplate(data)`

Create a new `IncidentTemplate` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplatesValidateResultV1(data)`

Create a new `IncidentTemplatesValidateResultV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTimelineItem(data)`

Create a new `IncidentTimelineItem` entity instance. Pass `nil` for no initial data.

#### `IncidentTimestamp(data)`

Create a new `IncidentTimestamp` entity instance. Pass `nil` for no initial data.

#### `IncidentType(data)`

Create a new `IncidentType` entity instance. Pass `nil` for no initial data.

#### `IncidentUpdate(data)`

Create a new `IncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data)`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `IpRange(data)`

Create a new `IpRange` entity instance. Pass `nil` for no initial data.

#### `MaintenanceWindow(data)`

Create a new `MaintenanceWindow` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationMethodPublicV2(data)`

Create a new `OnCallNotificationMethodPublicV2` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationRulePublicV2(data)`

Create a new `OnCallNotificationRulePublicV2` entity instance. Pass `nil` for no initial data.

#### `PayConfig(data)`

Create a new `PayConfig` entity instance. Pass `nil` for no initial data.

#### `PayConfigsCreateOneOffRuleResultV2(data)`

Create a new `PayConfigsCreateOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsCreateWeeklyRuleResultV2(data)`

Create a new `PayConfigsCreateWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsListOneOffRulesResultV2(data)`

Create a new `PayConfigsListOneOffRulesResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsListWeeklyRulesResultV2(data)`

Create a new `PayConfigsListWeeklyRulesResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsShowOneOffRuleResultV2(data)`

Create a new `PayConfigsShowOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsShowWeeklyRuleResultV2(data)`

Create a new `PayConfigsShowWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsUpdateOneOffRuleResultV2(data)`

Create a new `PayConfigsUpdateOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsUpdateWeeklyRuleResultV2(data)`

Create a new `PayConfigsUpdateWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsV2(data)`

Create a new `PayConfigsV2` entity instance. Pass `nil` for no initial data.

#### `PayReport(data)`

Create a new `PayReport` entity instance. Pass `nil` for no initial data.

#### `PayReportsPublishResultV2(data)`

Create a new `PayReportsPublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsUnpublishResultV2(data)`

Create a new `PayReportsUnpublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsV2(data)`

Create a new `PayReportsV2` entity instance. Pass `nil` for no initial data.

#### `PoliciesV2(data)`

Create a new `PoliciesV2` entity instance. Pass `nil` for no initial data.

#### `Policy(data)`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PolicyFinding(data)`

Create a new `PolicyFinding` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsDismissResultV2(data)`

Create a new `PolicyFindingsDismissResultV2` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsRestoreResultV2(data)`

Create a new `PolicyFindingsRestoreResultV2` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocument(data)`

Create a new `PostmortemDocument` entity instance. Pass `nil` for no initial data.

#### `Schedule(data)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntriesListPayloadV2(data)`

Create a new `ScheduleEntriesListPayloadV2` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntry(data)`

Create a new `ScheduleEntry` entity instance. Pass `nil` for no initial data.

#### `ScheduleReplica(data)`

Create a new `ScheduleReplica` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncRule(data)`

Create a new `ScheduleSyncRule` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncTarget(data)`

Create a new `ScheduleSyncTarget` entity instance. Pass `nil` for no initial data.

#### `SchedulesShowOverrideResultV2(data)`

Create a new `SchedulesShowOverrideResultV2` entity instance. Pass `nil` for no initial data.

#### `SchedulesUpdateOverrideResultV2(data)`

Create a new `SchedulesUpdateOverrideResultV2` entity instance. Pass `nil` for no initial data.

#### `Secret(data)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Severity(data)`

Create a new `Severity` entity instance. Pass `nil` for no initial data.

#### `StatusPage(data)`

Create a new `StatusPage` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponent(data)`

Create a new `StatusPageComponent` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponentAvailabilityV2(data)`

Create a new `StatusPageComponentAvailabilityV2` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncident(data)`

Create a new `StatusPageIncident` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncidentUpdate(data)`

Create a new `StatusPageIncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageLinkedResponseIncidentV1(data)`

Create a new `StatusPageLinkedResponseIncidentV1` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenance(data)`

Create a new `StatusPageMaintenance` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenanceUpdate(data)`

Create a new `StatusPageMaintenanceUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageStructure(data)`

Create a new `StatusPageStructure` entity instance. Pass `nil` for no initial data.

#### `StatusPagesV2(data)`

Create a new `StatusPagesV2` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TelemetryDataSourceV2(data)`

Create a new `TelemetryDataSourceV2` entity instance. Pass `nil` for no initial data.

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
| `assignee_id` | `string` | No | ID of the user this action is assigned to |
| `completed_at` | `string` | No | When the action was completed |
| `created_at` | `string` | Yes | When the action was created |
| `creator` | `table` | Yes |  |
| `description` | `string` | No | Description of the action |
| `external_issue_reference` | `table` | No |  |
| `follow_up` | `boolean` | Yes | Whether an action is marked as follow-up |
| `id` | `string` | Yes | Unique identifier for the action |
| `incident_id` | `string` | Yes | Unique identifier of the incident the action belongs to |
| `status` | `string` | Yes | Status of the action |
| `updated_at` | `string` | Yes | When the action was last updated |

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

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Action():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Action():load({ id = "action_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Action():remove({ id = "action_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `alert_group_ids` | `table` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `table` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `table` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Alert():create({
  id = --[[ string ]],
  alert_source_id = --[[ string ]],
  attributes = --[[ table ]],
  created_at = --[[ string ]],
  deduplication_key = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Alert():list({ page_size = 1 })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `array` | `boolean` | Yes | Whether this attribute is an array |
| `emoji` | `string` | No | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | Yes | The ID of this attribute |
| `name` | `string` | Yes | Unique name of this attribute |
| `required` | `boolean` | Yes | Whether this attribute is required. |
| `type` | `string` | Yes | Engine resource name for this attribute |

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

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertAttribute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AlertAttribute():load({ id = "alert_attribute_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AlertAttribute():remove({ id = "alert_attribute_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `alert_group_id` | `string` | No | ID of the alert group this note is attached to. |
| `alert_id` | `string` | No | ID of the alert this note is attached to. |
| `content` | `string` | Yes | Markdown body of the note |
| `created_at` | `string` | Yes | When this note was first created |
| `creator` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the alert note |
| `images` | `table` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | Yes | When this note was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertNote():create({
  content = --[[ string ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  id = --[[ string ]],
  images = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertNote():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AlertNote():load({ id = "alert_note_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AlertNote():remove({ id = "alert_note_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `alert_sources` | `table` | Yes | Which alert sources should this alert route match? |
| `channel_config` | `table` | Yes | The channel configuration for this alert route |
| `condition_groups` | `table` | Yes | What condition groups must be true for this alert route to fire? |
| `created_at` | `string` | No | The time of creation of this alert route |
| `enabled` | `boolean` | Yes | Whether this alert route is enabled or not |
| `escalation_config` | `table` | Yes |  |
| `expressions` | `table` | Yes | The expressions used in this template |
| `grouping_config` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this alert route config |
| `incident_config` | `table` | Yes |  |
| `incident_template` | `table` | Yes |  |
| `is_private` | `boolean` | Yes | Whether this alert route is private. |
| `message_config` | `table` | Yes |  |
| `message_template` | `table` | No |  |
| `name` | `string` | Yes | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `table` | No | IDs of teams that own this alert route |
| `updated_at` | `string` | No | The time of last update of this alert route |
| `version` | `number` | Yes | The version of this alert route config |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertRoute():create({
  alert_sources = --[[ table ]],
  channel_config = --[[ table ]],
  condition_groups = --[[ table ]],
  enabled = --[[ boolean ]],
  escalation_config = --[[ table ]],
  expressions = --[[ table ]],
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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertRoute():list({ page_size = 1 })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AlertRoute():load({ id = "alert_route_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AlertRoute():remove({ id = "alert_route_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `alert_events_url` | `string` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `boolean` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `number` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `table` | Yes |  |
| `disabled` | `boolean` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `table` | Yes |  |
| `filter_condition_groups` | `table` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `table` | Yes |  |
| `http_custom_options` | `table` | Yes |  |
| `id` | `string` | Yes | The ID of this alert source |
| `jira_options` | `table` | Yes |  |
| `name` | `string` | Yes | Unique name of the alert source |
| `owning_team_ids` | `table` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `table` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertSource():create({
  azure_devops_options = --[[ table ]],
  email_options = --[[ table ]],
  heartbeat_options = --[[ table ]],
  http_custom_options = --[[ table ]],
  id = --[[ string ]],
  jira_options = --[[ table ]],
  name = --[[ string ]],
  rate_limit_sharding = --[[ table ]],
  source_type = --[[ string ]],
  template = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertSource():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AlertSource():load({ id = "alert_source_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AlertSource():remove({ id = "alert_source_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## AlertSourcesV2Entity

```lua
local alert_sources_v2 = client:AlertSourcesV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `table` | No | IDs of teams that own this alert source |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertSourcesV2():create({
  source_type = --[[ string ]],
  template = --[[ table ]],
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

Create a new `AlertSourcesV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertTagEntity

```lua
local alert_tag = client:AlertTag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the tag |
| `name` | `string` | Yes | The tag name |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertTag():list()
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

Create a new `AlertTagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertsAddTagsResultV2Entity

```lua
local alerts_add_tags_result_v2 = client:AlertsAddTagsResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `table` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `table` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `table` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertsAddTagsResultV2():create({
  alert_id = --[[ string ]],
  alert_source_id = --[[ string ]],
  attributes = --[[ table ]],
  created_at = --[[ string ]],
  deduplication_key = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
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

Create a new `AlertsAddTagsResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertsRemoveTagsResultV2Entity

```lua
local alerts_remove_tags_result_v2 = client:AlertsRemoveTagsResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `table` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `table` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `table` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertsRemoveTagsResultV2():create({
  alert_id = --[[ string ]],
  alert_source_id = --[[ string ]],
  attributes = --[[ table ]],
  created_at = --[[ string ]],
  deduplication_key = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
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

Create a new `AlertsRemoveTagsResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertsSetTagsResultV2Entity

```lua
local alerts_set_tags_result_v2 = client:AlertsSetTagsResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `table` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `table` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `table` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertsSetTagsResultV2():create({
  alert_id = --[[ string ]],
  alert_source_id = --[[ string ]],
  attributes = --[[ table ]],
  created_at = --[[ string ]],
  deduplication_key = --[[ string ]],
  id = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
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

Create a new `AlertsSetTagsResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlertsTransitionIncidentAlertResultV2Entity

```lua
local alerts_transition_incident_alert_result_v2 = client:AlertsTransitionIncidentAlertResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `table` | Yes |  |
| `alert_id` | `string` | Yes | Alert to attach to the incident |
| `alert_route_id` | `string` | No | The ID of the alert route that created this incident alert |
| `id` | `string` | Yes | The ID of this alert |
| `incident` | `table` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Yes | Incident to attach the alert to |
| `re_relate` | `boolean` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | Yes | What state to move the connection to |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AlertsTransitionIncidentAlertResultV2():create({
  alert = --[[ table ]],
  alert_id = --[[ string ]],
  id = --[[ string ]],
  incident = --[[ table ]],
  incident_id = --[[ string ]],
  state = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AlertsTransitionIncidentAlertResultV2():list({ page_size = 1 })
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

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnnouncementRuleEntity

```lua
local announcement_rule = client:AnnouncementRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `table` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | Yes | When the rule was created |
| `id` | `string` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `table` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Yes | Human readable name for the rule |
| `owning_team_ids` | `table` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `table` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `string` | No | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `string` | Yes | Where incident updates are shared once the incident is announced |
| `updated_at` | `string` | Yes | When the rule was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `condition_groups` | - | - | - | - | - |
| `conditions_no_longer_apply_behaviour` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `microsoft_teams_channel_ids` | - | - | Yes | Yes | - |
| `mode` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | - | Yes | Yes | - |
| `private_incident_scope` | - | - | - | - | - |
| `slack_channel_ids` | - | - | Yes | Yes | - |
| `template_id` | - | - | - | - | - |
| `update_sharing_mode` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementRule():create({
  condition_groups = --[[ table ]],
  conditions_no_longer_apply_behaviour = --[[ string ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  microsoft_teams_channel_ids = --[[ table ]],
  mode = --[[ string ]],
  name = --[[ string ]],
  owning_team_ids = --[[ table ]],
  slack_channel_ids = --[[ table ]],
  update_sharing_mode = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AnnouncementRule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementRule():load({ id = "announcement_rule_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementRule():remove({ id = "announcement_rule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementRule():update({
  id = "announcement_rule_id",
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

Create a new `AnnouncementRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AnnouncementTemplateEntity

```lua
local announcement_template = client:AnnouncementTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `table` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `table` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `string` | Yes | Unique identifier for this announcement template |
| `is_default` | `boolean` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Yes | Name of this announcement template |
| `owning_team_ids` | `table` | Yes | IDs of the teams that own this template |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `actions` | - | - | Yes | - | - |
| `fields` | - | - | Yes | - | - |
| `id` | - | - | - | - | - |
| `is_default` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | - | Yes | Yes | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementTemplate():create({
  actions = --[[ table ]],
  fields = --[[ table ]],
  id = --[[ string ]],
  is_default = --[[ boolean ]],
  name = --[[ string ]],
  owning_team_ids = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:AnnouncementTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementTemplate():load({ id = "announcement_template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementTemplate():remove({ id = "announcement_template_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:AnnouncementTemplate():update({
  id = "announcement_template_id",
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

Create a new `AnnouncementTemplateEntity` instance with the same client and
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
| `comments` | `string` | No | Freeform notes about this API key |
| `created_at` | `string` | Yes | When the API key was created |
| `creator` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this API key |
| `last_used_at` | `string` | No | When the key was last used to authenticate a request |
| `name` | `string` | Yes | The name of the API key, for the user's reference |
| `role_names` | `table` | Yes | Account-level roles to assign to the API key. |
| `roles` | `table` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `table` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `table` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `table` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | Yes | When the current token for this API was last issued. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ApiKey():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  role_names = --[[ table ]],
  roles = --[[ table ]],
  team_ids = --[[ table ]],
  team_role_names = --[[ table ]],
  team_roles = --[[ table ]],
  token_last_issued_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ApiKey():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ApiKey():load({ id = "api_key_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:ApiKey():remove({ id = "api_key_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## CallRouteEntity

```lua
local call_route = client:CallRoute(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `table` | Yes | The numbers allowed to call this route. |
| `country_code` | `string` | No | The country this route's number belongs to |
| `created_at` | `string` | Yes |  |
| `current_state` | `string` | Yes | Where this route is in provisioning. |
| `custom_language` | `string` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Yes | Unique identifier for this call route |
| `name` | `string` | Yes | Name for this call route |
| `options` | `table` | Yes | The phone-tree menu this route presents. |
| `path` | `table` | Yes | Who we page when a call comes in. |
| `phone_number` | `string` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` | Yes |  |
| `use_caller_allowlist` | `boolean` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CallRoute():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CallRoute():load({ id = "call_route_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:CallRoute():update({
  id = "call_route_id",
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

Create a new `CallRouteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesCreateAllowedCallerResultV2Entity

```lua
local call_routes_create_allowed_caller_result_v2 = client:CallRoutesCreateAllowedCallerResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number to allow, in international format |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesCreateAllowedCallerResultV2():create({
  call_route_id = --[[ string ]],
  phone_number = --[[ string ]],
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

Create a new `CallRoutesCreateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesCreateOptionResultV2Entity

```lua
local call_routes_create_option_result_v2 = client:CallRoutesCreateOptionResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `path` | `table` | Yes | Who to page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesCreateOptionResultV2():create({
  call_route_id = --[[ string ]],
  digit = --[[ string ]],
  path = --[[ table ]],
  prompt = --[[ string ]],
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

Create a new `CallRoutesCreateOptionResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesListAllowedCallersResultV2Entity

```lua
local call_routes_list_allowed_callers_result_v2 = client:CallRoutesListAllowedCallersResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CallRoutesListAllowedCallersResultV2():list({ call_route_id = "example" })
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

Create a new `CallRoutesListAllowedCallersResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesListOptionsResultV2Entity

```lua
local call_routes_list_options_result_v2 = client:CallRoutesListOptionsResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `table` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CallRoutesListOptionsResultV2():list({ call_route_id = "example" })
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

Create a new `CallRoutesListOptionsResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesShowAllowedCallerResultV2Entity

```lua
local call_routes_show_allowed_caller_result_v2 = client:CallRoutesShowAllowedCallerResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesShowAllowedCallerResultV2():load({ id = "call_routes_show_allowed_caller_result_v2_id", call_route_id = "call_route_id" })
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

Create a new `CallRoutesShowAllowedCallerResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesShowOptionResultV2Entity

```lua
local call_routes_show_option_result_v2 = client:CallRoutesShowOptionResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `table` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesShowOptionResultV2():load({ id = "call_routes_show_option_result_v2_id", call_route_id = "call_route_id" })
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

Create a new `CallRoutesShowOptionResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesUpdateAllowedCallerResultV2Entity

```lua
local call_routes_update_allowed_caller_result_v2 = client:CallRoutesUpdateAllowedCallerResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesUpdateAllowedCallerResultV2():update({
  call_route_id = "call_route_id",
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

Create a new `CallRoutesUpdateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesUpdateOptionResultV2Entity

```lua
local call_routes_update_option_result_v2 = client:CallRoutesUpdateOptionResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `table` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesUpdateOptionResultV2():update({
  call_route_id = "call_route_id",
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

Create a new `CallRoutesUpdateOptionResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallRoutesV2Entity

```lua
local call_routes_v2 = client:CallRoutesV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:CallRoutesV2():remove({ id = "call_routes_v2_id", call_route_id = "call_route_id" })
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

Create a new `CallRoutesV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallSessionEntity

```lua
local call_session = client:CallSession(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `string` | No | When the call session ended. |
| `id` | `string` | Yes | Unique identifier for this call session |
| `incident_id` | `string` | Yes | The incident this call session belongs to |
| `started_at` | `string` | Yes | When the call session started |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CallSession():list({ incident_id = "example" })
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

Create a new `CallSessionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CallTranscriptEntryEntity

```lua
local call_transcript_entry = client:CallTranscriptEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | What was said |
| `id` | `string` | Yes | Unique identifier for this transcript entry |
| `medium` | `string` | Yes | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `string` | Yes | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `string` | Yes | When the participant started speaking |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CallTranscriptEntry():list({ call_session_id = "example" })
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

Create a new `CallTranscriptEntryEntity` instance with the same client and
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
| `aliases` | `table` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | No | When this entry was archived |
| `attribute_values` | `table` | Yes | Values of this entry |
| `catalog_entry` | `table` | Yes |  |
| `catalog_type` | `table` | Yes |  |
| `catalog_type_id` | `string` | Yes | ID of this catalog type |
| `created_at` | `string` | Yes | When this entry was created |
| `external_id` | `string` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | Yes | ID of this catalog entry |
| `name` | `string` | Yes | Name is the human readable name of this entry |
| `rank` | `number` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `table` | No | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | Yes | When this entry was last updated |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `aliases` | - | Yes | - | - |
| `archived_at` | - | - | - | - |
| `attribute_values` | - | - | - | - |
| `catalog_entry` | - | - | - | - |
| `catalog_type` | - | - | - | - |
| `catalog_type_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `external_id` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | Yes | - | - |
| `update_attributes` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CatalogEntry():create({
  attribute_values = --[[ table ]],
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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CatalogEntry():list({ catalog_type_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CatalogEntry():load({ id = "catalog_entry_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `category` | `string` | Yes | Which category of resource |
| `description` | `string` | Yes | Human readable description for this resource |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `string` | Yes | Label for this catalog resource type |
| `type` | `string` | Yes | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `string` | Yes | Documentation for the literal string value of this resource |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

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
| `annotations` | `table` | Yes | Annotations that can track metadata about this type |
| `categories` | `table` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `table` | No | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `table` | No | If populated, the integrations required for this type |
| `schema` | `table` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotations` | - | - | Yes | Yes |
| `categories` | - | - | Yes | Yes |
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
| `owning_team_ids` | - | - | - | - |
| `ranked` | - | - | Yes | Yes |
| `registry_type` | - | - | - | - |
| `required_integrations` | - | - | - | - |
| `schema` | - | - | - | - |
| `semantic_type` | - | - | - | - |
| `source_repo_url` | - | - | - | - |
| `type_name` | - | - | Yes | - |
| `updated_at` | - | - | - | - |
| `use_name_as_identifier` | - | - | Yes | Yes |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CatalogType():create({
  annotations = --[[ table ]],
  categories = --[[ table ]],
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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CatalogType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CatalogType():load({ id = "catalog_type_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `annotations` | `table` | Yes | Annotations that can track metadata about this type |
| `attributes` | `table` | Yes |  |
| `categories` | `table` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `table` | No | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `table` | No | If populated, the integrations required for this type |
| `schema` | `table` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `number` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CatalogTypeSchema():create({
  catalog_type_id = --[[ string ]],
  annotations = --[[ table ]],
  attributes = --[[ table ]],
  categories = --[[ table ]],
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
| `catalog_type_id` | `string` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the custom field |
| `field_type` | `string` | Yes | Type of custom field |
| `filter_by` | `table` | Yes |  |
| `fixed_filter` | `table` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | No | Which catalog attribute provides helptext for the options |
| `id` | `string` | Yes | Unique identifier for the custom field |
| `name` | `string` | Yes | Human readable name for the custom field |
| `options` | `table` | Yes | What options are available for this custom field, if this field has options |
| `required` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `boolean` | Yes | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `boolean` | Yes | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `boolean` | Yes | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `boolean` | No | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `string` | Yes | When the action was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CustomField():create({
  created_at = --[[ string ]],
  description = --[[ string ]],
  field_type = --[[ string ]],
  filter_by = --[[ table ]],
  fixed_filter = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  options = --[[ table ]],
  show_before_closure = --[[ boolean ]],
  show_before_creation = --[[ boolean ]],
  show_before_update = --[[ boolean ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CustomField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CustomField():load({ id = "custom_field_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:CustomField():remove({ id = "custom_field_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `custom_field_id` | `string` | Yes | ID of the custom field this option belongs to |
| `id` | `string` | Yes | Unique identifier for the custom field option |
| `sort_key` | `number` | Yes | Sort key used to order the custom field options correctly |
| `value` | `string` | Yes | Human readable name for the custom field option. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:CustomFieldOption():create({
  custom_field_id = --[[ string ]],
  id = --[[ string ]],
  sort_key = --[[ number ]],
  value = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:CustomFieldOption():list({ custom_field_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:CustomFieldOption():load({ id = "custom_field_option_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:CustomFieldOption():remove({ id = "custom_field_option_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `created_at` | `string` | Yes | When this escalation was created |
| `creator` | `table` | Yes | The creator of this escalation. |
| `description` | `string` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `table` | Yes | Events which describe the history of this escalation. |
| `id` | `string` | Yes | Unique ID of the escalation |
| `idempotency_key` | `string` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | No | ID of an incident to associate with this escalation. |
| `priority` | `table` | Yes | The priority associated with this escalation. |
| `related_alerts` | `table` | Yes | Alerts related to this escalation |
| `related_incidents` | `table` | Yes | Incidents related to this escalation |
| `status` | `string` | Yes | Status of the escalation |
| `title` | `string` | Yes | The title of this escalation |
| `updated_at` | `string` | Yes | When this escalation was last updated |
| `user_ids` | `table` | No | IDs of users to escalate directly to |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `description` | - | - | Yes |
| `escalation_path_id` | - | - | - |
| `events` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_id` | - | - | - |
| `priority` | - | - | - |
| `related_alerts` | - | - | - |
| `related_incidents` | - | - | - |
| `status` | - | - | - |
| `title` | - | - | - |
| `updated_at` | - | - | - |
| `user_ids` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Escalation():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  description = --[[ string ]],
  events = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  priority = --[[ table ]],
  related_alerts = --[[ table ]],
  related_incidents = --[[ table ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Escalation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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

## EscalationPathTemplateEntity

```lua
local escalation_path_template = client:EscalationPathTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of what this template is for. |
| `expressions` | `table` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `boolean` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `string` | Yes | Unique identifier for this template. |
| `name` | `string` | Yes | The name of this template. |
| `params` | `table` | Yes | The parameters declared by this template. |
| `path` | `table` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `table` | Yes |  |
| `working_hours` | `table` | No | The working hours for this template. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `expressions` | - | - | Yes | Yes | - |
| `has_historical_escalation_path_versions` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `params` | - | - | Yes | Yes | - |
| `path` | - | - | - | - | - |
| `repeat_config` | - | - | - | - | - |
| `working_hours` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:EscalationPathTemplate():create({
  expressions = --[[ table ]],
  has_historical_escalation_path_versions = --[[ boolean ]],
  id = --[[ string ]],
  name = --[[ string ]],
  params = --[[ table ]],
  path = --[[ table ]],
  repeat_config = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:EscalationPathTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:EscalationPathTemplate():load({ id = "escalation_path_template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:EscalationPathTemplate():remove({ id = "escalation_path_template_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:EscalationPathTemplate():update({
  id = "escalation_path_template_id",
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

Create a new `EscalationPathTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```lua
local escalations_check_escalation_permissions_result_v2 = client:EscalationsCheckEscalationPermissionsResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `table` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `table` | Yes | The IDs of the users to check response options for |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:EscalationsCheckEscalationPermissionsResultV2():create({
  escalation_id = --[[ string ]],
  response_options = --[[ table ]],
  user_ids = --[[ table ]],
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

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EscalationsReassignEscalationResultV2Entity

```lua
local escalations_reassign_escalation_result_v2 = client:EscalationsReassignEscalationResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Additional details about the new escalation. |
| `escalation_path_id` | `string` | No | ID of the escalation path to reassign to |
| `resolve_original` | `boolean` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | No | The title of the new escalation. |
| `user_ids` | `table` | No | IDs of users to reassign directly to |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:EscalationsReassignEscalationResultV2():create({
  escalation_id = --[[ string ]],
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

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same client and
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
| `assignee_id` | `string` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `table` | Yes |  |
| `assignee_team_id` | `string` | No | ID of the team this follow-up is assigned to |
| `category` | `table` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `table` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `table` | Yes |  |
| `external_issue_reference_id` | `string` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | No | ID of the priority for this follow-up |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `table` | Yes | Labels associated with this follow-up |
| `priority` | `table` | Yes |  |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignee` | - | - | - | - | - |
| `assignee_id` | - | - | - | - | - |
| `assignee_team` | - | - | - | - | - |
| `assignee_team_id` | - | - | - | - | - |
| `category` | - | - | - | - | - |
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
| `labels` | - | - | Yes | Yes | - |
| `priority` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:FollowUp():create({
  assignee = --[[ table ]],
  assignee_team = --[[ table ]],
  category = --[[ table ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  external_issue_reference = --[[ table ]],
  id = --[[ string ]],
  incident_id = --[[ string ]],
  labels = --[[ table ]],
  priority = --[[ table ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:FollowUp():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:FollowUp():load({ id = "follow_up_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:FollowUp():remove({ id = "follow_up_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## FollowUpsConnectExternalIssueResultV3Entity

```lua
local follow_ups_connect_external_issue_result_v3 = client:FollowUpsConnectExternalIssueResultV3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `table` | Yes |  |
| `assignee_team` | `table` | Yes |  |
| `category` | `table` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `table` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `table` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `table` | Yes | Labels associated with this follow-up |
| `priority` | `table` | Yes |  |
| `provider` | `string` | Yes | The issue tracker provider the issue belongs to |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:FollowUpsConnectExternalIssueResultV3():create({
  follow_up_id = --[[ string ]],
  assignee = --[[ table ]],
  assignee_team = --[[ table ]],
  category = --[[ table ]],
  created_at = --[[ string ]],
  creator = --[[ table ]],
  external_issue_reference = --[[ table ]],
  id = --[[ string ]],
  incident_id = --[[ string ]],
  labels = --[[ table ]],
  priority = --[[ table ]],
  provider = --[[ string ]],
  status = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
  url = --[[ string ]],
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

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FollowUpsCreateFromLinkResultV3Entity

```lua
local follow_ups_create_from_link_result_v3 = client:FollowUpsCreateFromLinkResultV3(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:FollowUpsCreateFromLinkResultV3():create({
  incident_id = --[[ string ]],
  url = --[[ string ]],
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

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdentityEntity

```lua
local identity = client:Identity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `string` | Yes | The dashboard URL for this organisation |
| `name` | `string` | Yes | The name assigned to the current API Key |
| `roles` | `table` | Yes | Which roles have been enabled for this key |
| `team_roles` | `table` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `table` | Yes | Teams that this API key is scoped to. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Identity():load()
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

Create a new `IdentityEntity` instance with the same client and
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
| `call_url` | `string` | No | The call URL attached to this incident |
| `created_at` | `string` | Yes | When the incident was created |
| `creator` | `table` | Yes |  |
| `custom_field_entries` | `table` | Yes | Custom field entries for this incident |
| `debriefs` | `table` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `table` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `table` | Yes |  |
| `has_debrief` | `boolean` | No | If this incident has a debrief attached |
| `id` | `string` | Yes | Unique identifier for the incident |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `table` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `table` | Yes |  |
| `incident_status_id` | `string` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `table` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `table` | Yes |  |
| `incident_type_id` | `string` | No | Incident type to create this incident as |
| `last_activity_at` | `string` | Yes | When the incident last recorded 'activity' |
| `mode` | `string` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | No | URL to link to the Microsoft Teams channel |
| `name` | `string` | Yes | Explanation of the incident |
| `permalink` | `string` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `table` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | No | The URL of the incident post-mortem document |
| `reference` | `string` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `table` | No |  |
| `severity` | `table` | Yes |  |
| `severity_id` | `string` | No | Severity to create incident as |
| `slack_channel_id` | `string` | Yes | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | No | Name of the slack channel |
| `slack_channel_name_override` | `string` | No | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | No | URL to link to the slack channel |
| `slack_team_id` | `string` | Yes | ID of the Slack team / workspace. |
| `source_message_channel_id` | `string` | No | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | `string` | No | Timestamp of the source message, if this incident was created from one |
| `status` | `string` | Yes | Current status of the incident |
| `summary` | `string` | No | Detailed description of the incident |
| `team_ids` | `table` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `table` | No | Incident lifecycle events and when they last occurred |
| `updated_at` | `string` | Yes | When the incident was last updated |
| `visibility` | `string` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `number` | No | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `number` | No | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `number` | No | Amount of time spent on the incident in total |
| `workload_minutes_working` | `number` | No | Amount of time spent on the incident in working hours |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `call_url` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `custom_field_entries` | - | - | Yes |
| `debriefs` | - | - | - |
| `duration_metrics` | - | - | - |
| `external_issue_reference` | - | - | - |
| `has_debrief` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_role_assignments` | - | - | Yes |
| `incident_status` | - | - | - |
| `incident_status_id` | - | - | - |
| `incident_timestamp_values` | - | - | - |
| `incident_type` | - | - | - |
| `incident_type_id` | - | - | - |
| `last_activity_at` | - | - | - |
| `mode` | - | - | Yes |
| `ms_teams_channel_url` | - | - | - |
| `name` | - | - | Yes |
| `permalink` | - | - | - |
| `postmortem_document_ids` | - | - | - |
| `postmortem_document_url` | - | - | - |
| `reference` | - | - | - |
| `retrospective_incident_options` | - | - | - |
| `severity` | - | - | - |
| `severity_id` | - | - | - |
| `slack_channel_id` | - | - | - |
| `slack_channel_name` | - | - | - |
| `slack_channel_name_override` | - | - | - |
| `slack_channel_url` | - | - | - |
| `slack_team_id` | - | - | Yes |
| `source_message_channel_id` | - | - | - |
| `source_message_timestamp` | - | - | - |
| `status` | - | - | Yes |
| `summary` | - | - | - |
| `team_ids` | - | - | - |
| `timestamps` | - | - | - |
| `updated_at` | - | - | - |
| `visibility` | - | - | - |
| `workload_minutes_late` | - | - | - |
| `workload_minutes_sleeping` | - | - | - |
| `workload_minutes_total` | - | - | - |
| `workload_minutes_working` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Incident():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  custom_field_entries = --[[ table ]],
  external_issue_reference = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident_role_assignments = --[[ table ]],
  incident_status = --[[ table ]],
  incident_type = --[[ table ]],
  last_activity_at = --[[ string ]],
  mode = --[[ string ]],
  name = --[[ string ]],
  reference = --[[ string ]],
  severity = --[[ table ]],
  slack_channel_id = --[[ string ]],
  slack_team_id = --[[ string ]],
  status = --[[ string ]],
  team_ids = --[[ table ]],
  updated_at = --[[ string ]],
  visibility = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Incident():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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

## IncidentActivityLogEntryEntity

```lua
local incident_activity_log_entry = client:IncidentActivityLogEntry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `table` | No | Details of an activity log entry. |
| `created_at` | `string` | Yes | When we recorded the activity |
| `id` | `string` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `string` | Yes | ID of the incident this happened on. |
| `occurred_at` | `string` | Yes | When the activity happened. |
| `title` | `string` | Yes | Human-readable summary of what happened |
| `type` | `string` | Yes | What kind of activity this is. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentActivityLogEntry():list({ incident_id = "example" })
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

Create a new `IncidentActivityLogEntryEntity` instance with the same client and
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
| `id` | `string` | Yes | Unique identifier of this incident membership |
| `incident_id` | `string` | Yes | ID of the incident to add an attachment to |
| `resource` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentAttachment():create({
  id = --[[ string ]],
  incident_id = --[[ string ]],
  resource = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentAttachment():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:IncidentAttachment():remove({ id = "incident_attachment_id" })
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

## IncidentFormEntity

```lua
local incident_form = client:IncidentForm(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident form was created |
| `expressions` | `table` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Yes | Which form this is. |
| `id` | `string` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `string` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `table` | No | Elements on this form, in display order. |
| `updated_at` | `string` | Yes | When this incident form was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentForm():create({
  created_at = --[[ string ]],
  expressions = --[[ table ]],
  form_type = --[[ string ]],
  id = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentForm():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IncidentForm():load({ id = "incident_form_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:IncidentForm():remove({ id = "incident_form_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentForm():update({
  id = "incident_form_id",
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

Create a new `IncidentFormEntity` instance with the same client and
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
| `incident_id` | `string` | Yes | The incident to make the user a member of |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

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
| `active` | `table` | Yes | Participants who are actively helping with the incident |
| `passive` | `table` | Yes | Participants who are just observing the incident |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IncidentParticipant():load({ incident_id = "incident_id" })
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
| `archived_at` | `string` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | No | The role they had in the incident |
| `user` | `table` | Yes |  |
| `workload` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentParticipantWorkload():list({ incident_id = "example" })
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
| `id` | `string` | Yes | Unique identifier of this incident relationship |
| `incident` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentRelationship():list({ incident_id = "example" })
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
| `created_at` | `string` | Yes | When the role was created |
| `description` | `string` | Yes | Describes the purpose of the role |
| `id` | `string` | Yes | Unique identifier for the role |
| `instructions` | `string` | Yes | Provided to whoever is nominated for the role. |
| `name` | `string` | Yes | Human readable name of the incident role |
| `required` | `boolean` | No | DEPRECATED: this will always be false. |
| `role_type` | `string` | Yes | Type of incident role |
| `shortform` | `string` | Yes | Short human readable name for Slack. |
| `updated_at` | `string` | Yes | When the role was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `instructions` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | - | - |
| `role_type` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentRole():create({
  created_at = --[[ string ]],
  description = --[[ string ]],
  id = --[[ string ]],
  instructions = --[[ string ]],
  name = --[[ string ]],
  role_type = --[[ string ]],
  shortform = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentRole():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IncidentRole():load({ id = "incident_role_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:IncidentRole():remove({ id = "incident_role_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `category` | `string` | Yes | What category of status it is. |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes | Rich text description of the incident status |
| `id` | `string` | Yes | Unique ID of this incident status |
| `name` | `string` | Yes | Unique name of this status |
| `rank` | `number` | Yes | Order of this incident status |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `category` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `rank` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentStatus():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IncidentStatus():load({ id = "incident_status_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:IncidentStatus():remove({ id = "incident_status_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## IncidentTeamMembershipEntity

```lua
local incident_team_membership = client:IncidentTeamMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTeamMembership():create({
  incident_id = --[[ string ]],
  team_id = --[[ string ]],
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

Create a new `IncidentTeamMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTeamMembershipsV1Entity

```lua
local incident_team_memberships_v1 = client:IncidentTeamMembershipsV1(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Revoke team access to this incident |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTeamMembershipsV1():create({
  incident_id = --[[ string ]],
  team_id = --[[ string ]],
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

Create a new `IncidentTeamMembershipsV1Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTemplateEntity

```lua
local incident_template = client:IncidentTemplate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident template was created |
| `expressions` | `table` | No | The expressions used by bindings in this template |
| `id` | `string` | Yes | Unique identifier for this incident template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `table` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | Yes | When this incident template was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTemplate():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  template = --[[ table ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentTemplate():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTemplate():load({ id = "incident_template_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTemplate():remove({ id = "incident_template_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTemplate():update({
  id = "incident_template_id",
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

Create a new `IncidentTemplateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTemplatesValidateResultV1Entity

```lua
local incident_templates_validate_result_v1 = client:IncidentTemplatesValidateResultV1(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `table` | No | The expressions used by bindings in this template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `table` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `table` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTemplatesValidateResultV1():create({
  name = --[[ string ]],
  template = --[[ table ]],
  warnings = --[[ table ]],
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

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IncidentTimelineItemEntity

```lua
local incident_timeline_item = client:IncidentTimelineItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `string` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | Yes | When this item was added to the timeline |
| `creator` | `table` | Yes |  |
| `description` | `string` | No | Description of the timeline item, in markdown |
| `id` | `string` | Yes | Unique identifier of the timeline item |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `string` | Yes | Incident to add this item to |
| `timestamp` | `string` | Yes | When the thing this item describes happened. |
| `title` | `string` | Yes | Title of the timeline item |
| `updated_at` | `string` | Yes | When this item was last edited |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `activity_log_id` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_id` | - | - | - |
| `timestamp` | - | - | Yes |
| `title` | - | - | Yes |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTimelineItem():create({
  created_at = --[[ string ]],
  creator = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident_id = --[[ string ]],
  timestamp = --[[ string ]],
  title = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentTimelineItem():list({ incident_id = "example" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentTimelineItem():update({
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

Create a new `IncidentTimelineItemEntity` instance with the same client and
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
| `id` | `string` | Yes | Unique ID of this incident timestamp |
| `name` | `string` | Yes | Unique name of this timestamp |
| `rank` | `number` | Yes | Order in which this timestamp should be shown |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentTimestamp():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `create_in_triage` | `string` | Yes | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | Yes | When this resource was created |
| `description` | `string` | Yes | What is this incident type for? |
| `id` | `string` | Yes | Unique identifier for this Incident Type |
| `is_default` | `boolean` | Yes | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | Yes | The name of this Incident Type |
| `owning_team_ids` | `table` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `boolean` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | Yes | When this resource was last updated |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IncidentType():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `created_at` | `string` | Yes | When the update was created |
| `id` | `string` | Yes | Unique identifier for this incident update |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `string` | Yes | The incident you want to update |
| `merged_into_incident_id` | `string` | No | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `string` | No | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `table` | Yes |  |
| `new_severity` | `table` | Yes |  |
| `to_incident_status_id` | `string` | No | Move the incident to this status |
| `to_severity_id` | `string` | No | Move the incident to this severity |
| `updater` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:IncidentUpdate():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident_id = --[[ string ]],
  new_incident_status = --[[ table ]],
  new_severity = --[[ table ]],
  updater = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

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
| `allowlist` | `table` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `boolean` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | No | The time this allowlist was last updated |
| `version` | `number` | Yes | The version of this IP allowlist |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:IpAllowlist():load()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## IpRangeEntity

```lua
local ip_range = client:IpRange(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `string` | Yes | The address in CIDR notation. |
| `description` | `string` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:IpRange():list()
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

Create a new `IpRangeEntity` instance with the same client and
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
| `alert_condition_groups` | `table` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | No | When this maintenance window was archived, if it has been |
| `created_at` | `string` | Yes | When this maintenance window was created |
| `end_at` | `string` | Yes | When the maintenance window ends |
| `escalation_targets` | `table` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `string` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `table` | Yes |  |
| `name` | `string` | Yes | Human readable name for the maintenance window |
| `notification_message` | `string` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `table` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `number` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `number` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `table` | No | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `boolean` | Yes | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `boolean` | Yes | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `boolean` | Yes | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `string` | Yes | When the maintenance window starts |
| `updated_at` | `string` | Yes | When this maintenance window was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `alert_condition_groups` | - | - | - | - | - |
| `archived_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `end_at` | - | - | - | - | - |
| `escalation_targets` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `lead` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notification_message` | - | - | - | - | - |
| `notify_channels` | - | - | - | - | - |
| `notify_end_minutes_before` | - | - | - | - | - |
| `notify_start_minutes_before` | - | - | - | - | - |
| `owning_team_ids` | - | - | - | - | - |
| `reroute_on_end` | - | - | Yes | Yes | - |
| `resolve_on_end` | - | - | Yes | Yes | - |
| `show_in_sidebar` | - | - | - | - | - |
| `start_at` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:MaintenanceWindow():create({
  alert_condition_groups = --[[ table ]],
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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:MaintenanceWindow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:MaintenanceWindow():load({ id = "maintenance_window_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:MaintenanceWindow():remove({ id = "maintenance_window_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## OnCallNotificationMethodPublicV2Entity

```lua
local on_call_notification_method_public_v2 = client:OnCallNotificationMethodPublicV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The address of this method (e.g. |
| `id` | `string` | Yes | Unique identifier for this notification method |
| `is_usable` | `boolean` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone_details` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:OnCallNotificationMethodPublicV2():list({ user_id = "example" })
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

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OnCallNotificationRulePublicV2Entity

```lua
local on_call_notification_rule_public_v2 = client:OnCallNotificationRulePublicV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `table` | Yes |  |
| `delay_seconds` | `number` | No | Delay in seconds before this rule activates. |
| `id` | `string` | Yes | Unique identifier for this notification rule |
| `method_target` | `table` | Yes |  |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone` | `table` | Yes |  |
| `rule_type` | `string` | Yes | The urgency level this rule applies to |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:OnCallNotificationRulePublicV2():list({ user_id = "example" })
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

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigEntity

```lua
local pay_config = client:PayConfig(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `number` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` | Yes |  |
| `currency` | `string` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Yes | Unique identifier for this pay config |
| `name` | `string` | Yes | Human readable name for this pay config |
| `one_off_rules` | `table` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | No | When a published report first priced against this config. |
| `rate_time_unit` | `string` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` | Yes |  |
| `weekly_rules` | `table` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `base_rate_cents` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `currency` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `one_off_rules` | - | - | Yes | - | - |
| `published_at` | - | - | - | - | - |
| `rate_time_unit` | - | - | - | - | - |
| `timezone` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `weekly_rules` | - | - | Yes | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfig():create({
  base_rate_cents = --[[ number ]],
  created_at = --[[ string ]],
  currency = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  one_off_rules = --[[ table ]],
  rate_time_unit = --[[ string ]],
  timezone = --[[ string ]],
  updated_at = --[[ string ]],
  weekly_rules = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PayConfig():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PayConfig():load({ id = "pay_config_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:PayConfig():remove({ id = "pay_config_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfig():update({
  id = "pay_config_id",
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

Create a new `PayConfigEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsCreateOneOffRuleResultV2Entity

```lua
local pay_configs_create_one_off_rule_result_v2 = client:PayConfigsCreateOneOffRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsCreateOneOffRuleResultV2():create({
  pay_config_id = --[[ string ]],
  end_at = --[[ string ]],
  name = --[[ string ]],
  rate_cents = --[[ number ]],
  start_at = --[[ string ]],
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

Create a new `PayConfigsCreateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsCreateWeeklyRuleResultV2Entity

```lua
local pay_configs_create_weekly_rule_result_v2 = client:PayConfigsCreateWeeklyRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `table` | Yes | Days of the week this rule applies on |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsCreateWeeklyRuleResultV2():create({
  pay_config_id = --[[ string ]],
  end_time = --[[ string ]],
  rate_cents = --[[ number ]],
  start_time = --[[ string ]],
  weekdays = --[[ table ]],
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

Create a new `PayConfigsCreateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsListOneOffRulesResultV2Entity

```lua
local pay_configs_list_one_off_rules_result_v2 = client:PayConfigsListOneOffRulesResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PayConfigsListOneOffRulesResultV2():list({ pay_config_id = "example" })
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

Create a new `PayConfigsListOneOffRulesResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsListWeeklyRulesResultV2Entity

```lua
local pay_configs_list_weekly_rules_result_v2 = client:PayConfigsListWeeklyRulesResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `table` | Yes | Days of the week this rule applies on |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PayConfigsListWeeklyRulesResultV2():list({ pay_config_id = "example" })
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

Create a new `PayConfigsListWeeklyRulesResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsShowOneOffRuleResultV2Entity

```lua
local pay_configs_show_one_off_rule_result_v2 = client:PayConfigsShowOneOffRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsShowOneOffRuleResultV2():load({ id = "pay_configs_show_one_off_rule_result_v2_id", pay_config_id = "pay_config_id" })
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

Create a new `PayConfigsShowOneOffRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsShowWeeklyRuleResultV2Entity

```lua
local pay_configs_show_weekly_rule_result_v2 = client:PayConfigsShowWeeklyRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `table` | Yes | Days of the week this rule applies on |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsShowWeeklyRuleResultV2():load({ id = "pay_configs_show_weekly_rule_result_v2_id", pay_config_id = "pay_config_id" })
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

Create a new `PayConfigsShowWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsUpdateOneOffRuleResultV2Entity

```lua
local pay_configs_update_one_off_rule_result_v2 = client:PayConfigsUpdateOneOffRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsUpdateOneOffRuleResultV2():update({
  id = "id",
  pay_config_id = "pay_config_id",
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

Create a new `PayConfigsUpdateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsUpdateWeeklyRuleResultV2Entity

```lua
local pay_configs_update_weekly_rule_result_v2 = client:PayConfigsUpdateWeeklyRuleResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `table` | Yes | Days of the week this rule applies on |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsUpdateWeeklyRuleResultV2():update({
  id = "id",
  pay_config_id = "pay_config_id",
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

Create a new `PayConfigsUpdateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayConfigsV2Entity

```lua
local pay_configs_v2 = client:PayConfigsV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:PayConfigsV2():remove({ id = "pay_configs_v2_id", pay_config_id = "pay_config_id" })
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

Create a new `PayConfigsV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayReportEntity

```lua
local pay_report = client:PayReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `table` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `table` | Yes |  |
| `pay_config_id` | `string` | No | The pay config to price every shift with. |
| `published_at` | `string` | No | When this report was published. |
| `rotation_filters` | `table` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `table` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `creator` | - | - | - | - |
| `end_date` | - | - | - | - |
| `error_code` | - | - | - | - |
| `error_message` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `overlapping_shifts` | - | - | Yes | - |
| `pay_config_expression` | - | - | - | - |
| `pay_config_id` | - | - | - | - |
| `published_at` | - | - | - | - |
| `rotation_filters` | - | - | - | - |
| `schedule_ids` | - | - | - | - |
| `start_date` | - | - | - | - |
| `status` | - | - | - | - |
| `total_duration_seconds` | - | - | - | - |
| `total_pay_by_currency` | - | - | - | - |
| `unpaid_shifts` | - | - | Yes | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayReport():create({
  created_at = --[[ string ]],
  end_date = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  overlapping_shifts = --[[ string ]],
  pay_config_expression = --[[ table ]],
  schedule_ids = --[[ table ]],
  start_date = --[[ string ]],
  status = --[[ string ]],
  unpaid_shifts = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PayReport():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PayReport():load({ id = "pay_report_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:PayReport():remove({ id = "pay_report_id" })
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

Create a new `PayReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayReportsPublishResultV2Entity

```lua
local pay_reports_publish_result_v2 = client:PayReportsPublishResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `table` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `table` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `table` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `string` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayReportsPublishResultV2():create({
  pay_report_id = --[[ string ]],
  cc_emails = --[[ table ]],
  created_at = --[[ string ]],
  end_date = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  overlapping_shifts = --[[ string ]],
  schedule_ids = --[[ table ]],
  send_user_breakdowns = --[[ string ]],
  start_date = --[[ string ]],
  status = --[[ string ]],
  unpaid_shifts = --[[ string ]],
  updated_at = --[[ string ]],
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

Create a new `PayReportsPublishResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayReportsUnpublishResultV2Entity

```lua
local pay_reports_unpublish_result_v2 = client:PayReportsUnpublishResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `table` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `table` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `table` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Yes | Why this report is being unpublished |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PayReportsUnpublishResultV2():create({
  pay_report_id = --[[ string ]],
  created_at = --[[ string ]],
  end_date = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  overlapping_shifts = --[[ string ]],
  schedule_ids = --[[ table ]],
  start_date = --[[ string ]],
  status = --[[ string ]],
  unpaid_shifts = --[[ string ]],
  unpublish_reason = --[[ string ]],
  updated_at = --[[ string ]],
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

Create a new `PayReportsUnpublishResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PayReportsV2Entity

```lua
local pay_reports_v2 = client:PayReportsV2(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PayReportsV2():load({ pay_report_id = "pay_report_id" })
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

Create a new `PayReportsV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PoliciesV2Entity

```lua
local policies_v2 = client:PoliciesV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:PoliciesV2():remove({ id = "policies_v2_id" })
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

Create a new `PoliciesV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyEntity

```lua
local policy = client:Policy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `table` | Yes |  |
| `conditions` | `table` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` | Yes |  |
| `debrief` | `table` | Yes | Set when policy_type is debrief. |
| `description` | `string` | No | Human readable description of the policy |
| `expressions` | `table` | No | The expressions relating to this policy |
| `follow_up` | `table` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the policy |
| `name` | `string` | Yes | Human readable name of the policy |
| `on_call_readiness` | `table` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `table` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `table` | Yes | Detects gaps in on-call coverage. |
| `status` | `string` | Yes | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `assignment_rules` | - | - | - | - |
| `conditions` | - | - | - | - |
| `created_at` | - | - | - | - |
| `debrief` | - | - | - | - |
| `description` | - | - | Yes | Yes |
| `expressions` | - | - | - | - |
| `follow_up` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `on_call_readiness` | - | - | - | - |
| `policy_type` | - | - | - | - |
| `post_mortem` | - | - | - | - |
| `schedule` | - | - | - | - |
| `status` | - | - | Yes | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Policy():create({
  assignment_rules = --[[ table ]],
  conditions = --[[ table ]],
  created_at = --[[ string ]],
  debrief = --[[ table ]],
  follow_up = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  policy_type = --[[ string ]],
  post_mortem = --[[ table ]],
  schedule = --[[ table ]],
  status = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Policy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Policy():load({ id = "policy_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:Policy():update({
  id = "policy_id",
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

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyFindingEntity

```lua
local policy_finding = client:PolicyFinding(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `table` | Yes | Set when policy_type is debrief. |
| `dismissal` | `table` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `table` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `table` | Yes | Who is expected to resolve this finding |
| `schedule` | `table` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `table` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PolicyFinding():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PolicyFinding():load({ id = "policy_finding_id" })
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

Create a new `PolicyFindingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyFindingsDismissResultV2Entity

```lua
local policy_findings_dismiss_result_v2 = client:PolicyFindingsDismissResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `table` | Yes | Set when policy_type is debrief. |
| `dismissal` | `table` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `table` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Yes | Set when policy_type is post_mortem. |
| `reason` | `string` | Yes | Why this finding is being dismissed |
| `responsible_users` | `table` | Yes | Who is expected to resolve this finding |
| `schedule` | `table` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `table` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PolicyFindingsDismissResultV2():create({
  policy_finding_id = --[[ string ]],
  created_at = --[[ string ]],
  debrief = --[[ table ]],
  dismissal = --[[ table ]],
  follow_up = --[[ table ]],
  id = --[[ string ]],
  last_checked_at = --[[ string ]],
  on_call_readiness = --[[ table ]],
  policy_id = --[[ string ]],
  policy_type = --[[ string ]],
  post_mortem = --[[ table ]],
  reason = --[[ string ]],
  responsible_users = --[[ table ]],
  schedule = --[[ table ]],
  shift_conflict = --[[ table ]],
  state = --[[ string ]],
  updated_at = --[[ string ]],
  vacation_conflict = --[[ table ]],
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

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyFindingsRestoreResultV2Entity

```lua
local policy_findings_restore_result_v2 = client:PolicyFindingsRestoreResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `table` | Yes | Set when policy_type is debrief. |
| `dismissal` | `table` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `table` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `table` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `table` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `table` | Yes | Who is expected to resolve this finding |
| `schedule` | `table` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `table` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `table` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:PolicyFindingsRestoreResultV2():create({
  policy_finding_id = --[[ string ]],
  created_at = --[[ string ]],
  debrief = --[[ table ]],
  dismissal = --[[ table ]],
  follow_up = --[[ table ]],
  id = --[[ string ]],
  last_checked_at = --[[ string ]],
  on_call_readiness = --[[ table ]],
  policy_id = --[[ string ]],
  policy_type = --[[ string ]],
  post_mortem = --[[ table ]],
  responsible_users = --[[ table ]],
  schedule = --[[ table ]],
  shift_conflict = --[[ table ]],
  state = --[[ string ]],
  updated_at = --[[ string ]],
  vacation_conflict = --[[ table ]],
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

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same client and
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
| `created_at` | `string` | Yes | Timestamp for when the document was created |
| `document_url` | `string` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `table` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `table` | Yes | URLs of any external locations this document has been exported to |
| `id` | `string` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `string` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | Yes | The current status of this post-mortem document |
| `title` | `string` | Yes | The display title of the post-mortem document |
| `type` | `string` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Yes | Timestamp for when the document was last updated |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:PostmortemDocument():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:PostmortemDocument():load({ id = "postmortem_document_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `annotations` | `table` | Yes | Annotations that track metadata about this resource |
| `config` | `table` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shifts` | `table` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `table` | Yes |  |
| `id` | `string` | Yes | Unique internal ID of the schedule |
| `name` | `string` | Yes | Human readable name synced from external provider |
| `next_shifts` | `table` | No | The shifts after the next changeover. |
| `permalink` | `string` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `table` | Yes | IDs of teams that own this schedule |
| `timezone` | `string` | Yes | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | Yes | Yes | - |
| `config` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `current_shifts` | - | - | - | - | - |
| `holidays_public_config` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `next_shifts` | - | - | - | - | - |
| `permalink` | - | - | - | - | - |
| `team_ids` | - | - | Yes | Yes | - |
| `timezone` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Schedule():create({
  annotations = --[[ table ]],
  config = --[[ table ]],
  created_at = --[[ string ]],
  holidays_public_config = --[[ table ]],
  id = --[[ string ]],
  name = --[[ string ]],
  permalink = --[[ string ]],
  team_ids = --[[ table ]],
  timezone = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Schedule():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Schedule():load({ id = "schedule_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Schedule():remove({ id = "schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## ScheduleEntriesListPayloadV2Entity

```lua
local schedule_entries_list_payload_v2 = client:ScheduleEntriesListPayloadV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `string` | No | The end of the window to preview entries for. |
| `entry_window_start` | `string` | No | The start of the window to preview entries for. |
| `final` | `table` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `table` | Yes | Overrides that apply within the requested window |
| `schedule` | `table` | Yes |  |
| `scheduled` | `table` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleEntriesListPayloadV2():create({
  schedule_id = --[[ string ]],
  final = --[[ table ]],
  overrides = --[[ table ]],
  schedule = --[[ table ]],
  scheduled = --[[ table ]],
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

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same client and
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
| `schedule_entries` | `table` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleEntry():load({ schedule_id = "schedule_id" })
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
| `created_at` | `string` | Yes | When this schedule replica was first created |
| `id` | `string` | Yes | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | No | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | No | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `number` | No | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | Yes | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | Yes | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | Yes | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | Yes | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `table` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | Yes | When this schedule replica was last updated |
| `user_statuses` | `table` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleReplica():create({
  id = --[[ string ]],
  created_at = --[[ string ]],
  replica_fallback_user_id = --[[ string ]],
  replica_provider = --[[ string ]],
  replica_provider_id = --[[ string ]],
  schedule_id = --[[ string ]],
  sources = --[[ table ]],
  updated_at = --[[ string ]],
  user_statuses = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ScheduleReplica():list({ id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `annotations` | `table` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `table` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `table` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | Yes | The sync target ID this rule links to |
| `sync_type` | `string` | Yes | Which schedule members sync to the user group |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotations` | - | - | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `permanent_member_user_ids` | - | - | Yes | Yes |
| `rotation_id` | - | - | - | - |
| `schedule_id` | - | - | - | - |
| `schedule_sync_target` | - | - | - | - |
| `schedule_sync_target_id` | - | - | - | - |
| `sync_type` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleSyncRule():create({
  id = --[[ string ]],
  created_at = --[[ string ]],
  permanent_member_user_ids = --[[ table ]],
  schedule_id = --[[ string ]],
  schedule_sync_target = --[[ table ]],
  schedule_sync_target_id = --[[ string ]],
  sync_type = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ScheduleSyncRule():list({ id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleSyncRule():load({ id = "schedule_sync_rule_id", schedule_id = "schedule_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `add_bot_to_group` | `boolean` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `table` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `table` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `table` | Yes |  |
| `slack_team_id` | `string` | Yes | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `string` | Yes | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `add_bot_to_group` | - | - | - | - | - |
| `annotations` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `linked_schedules` | - | - | - | - | - |
| `new_slack_user_group` | - | - | - | - | - |
| `slack_team_id` | - | - | - | - | - |
| `slack_user_group_id` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleSyncTarget():create({
  add_bot_to_group = --[[ boolean ]],
  created_at = --[[ string ]],
  id = --[[ string ]],
  linked_schedules = --[[ table ]],
  new_slack_user_group = --[[ table ]],
  slack_team_id = --[[ string ]],
  slack_user_group_id = --[[ string ]],
  updated_at = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:ScheduleSyncTarget():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleSyncTarget():load({ id = "schedule_sync_target_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:ScheduleSyncTarget():remove({ id = "schedule_sync_target_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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

## SchedulesShowOverrideResultV2Entity

```lua
local schedules_show_override_result_v2 = client:SchedulesShowOverrideResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes | End of the override |
| `id` | `string` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `string` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | Yes | The schedule that this override applies to |
| `start_at` | `string` | Yes | Start of the override |
| `updated_at` | `string` | Yes |  |
| `user` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:SchedulesShowOverrideResultV2():create({
  created_at = --[[ string ]],
  end_at = --[[ string ]],
  id = --[[ string ]],
  layer_id = --[[ string ]],
  rotation_id = --[[ string ]],
  schedule_id = --[[ string ]],
  start_at = --[[ string ]],
  updated_at = --[[ string ]],
  user = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:SchedulesShowOverrideResultV2():list({ schedule_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:SchedulesShowOverrideResultV2():load({ id = "schedules_show_override_result_v2_id" })
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

Create a new `SchedulesShowOverrideResultV2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SchedulesUpdateOverrideResultV2Entity

```lua
local schedules_update_override_result_v2 = client:SchedulesUpdateOverrideResultV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes | End of the override |
| `id` | `string` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `string` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | Yes | The schedule that this override applies to |
| `start_at` | `string` | Yes | Start of the override |
| `updated_at` | `string` | Yes |  |
| `user` | `table` | Yes |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:SchedulesUpdateOverrideResultV2():update({
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

Create a new `SchedulesUpdateOverrideResultV2Entity` instance with the same client and
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
| `description` | `string` | No | Optional description of what this secret is for |
| `id` | `string` | Yes | Unique identifier for this secret |
| `last_four_chars` | `string` | No | The last four characters of the current value, for masked display. |
| `name` | `string` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `table` | No | IDs of the teams that own this secret. |
| `secret` | `table` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes | The secret's plaintext value. |
| `version` | `number` | Yes | The current version number, incremented on each rotation |
| `versions` | `table` | Yes | The secret's versions, newest first |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_four_chars` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | Yes | - | Yes | - |
| `secret` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `value` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `versions` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Secret():create({
  created_at = --[[ string ]],
  id = --[[ string ]],
  name = --[[ string ]],
  secret = --[[ table ]],
  updated_at = --[[ string ]],
  value = --[[ string ]],
  version = --[[ number ]],
  versions = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Secret():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Secret():load({ id = "secret_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Secret():remove({ id = "secret_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the severity |
| `id` | `string` | Yes | Unique identifier of the severity |
| `name` | `string` | Yes | Human readable name of the severity |
| `rank` | `number` | Yes | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | Yes | When the action was last updated |

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

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

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

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Severity():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Severity():load({ id = "severity_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `description` | `string` | No | The description of this status page |
| `id` | `string` | Yes | Unique ID of this status page |
| `name` | `string` | Yes | The title of this status page |
| `public_url` | `string` | No | The public URL of this status page |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatusPage():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:StatusPage():load({ id = "status_page_id" })
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

## StatusPageComponentEntity

```lua
local status_page_component = client:StatusPageComponent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Optional short description of this component |
| `id` | `string` | Yes | Unique identifier for this component |
| `management_meta` | `table` | Yes |  |
| `name` | `string` | Yes | Human-readable name for the component |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageComponent():create({
  id = --[[ string ]],
  management_meta = --[[ table ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatusPageComponent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageComponent():load({ id = "status_page_component_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageComponent():remove({ id = "status_page_component_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageComponent():update({
  id = "status_page_component_id",
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

Create a new `StatusPageComponentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusPageComponentAvailabilityV2Entity

```lua
local status_page_component_availability_v2 = client:StatusPageComponentAvailabilityV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `availability_percent` | `string` | No | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `string` | Yes | ID of the component. |
| `data_available_since` | `string` | Yes | Earliest time we have status data for this component. |
| `end_at` | `string` | Yes | End of the requested availability window |
| `start_at` | `string` | Yes | Start of the requested availability window |
| `status_page_id` | `string` | Yes | ID of the status page |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageComponentAvailabilityV2():load({ component_id = "component_id", status_page_id = "status_page_id", end_at = "end_at", start_at = "start_at" })
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

Create a new `StatusPageComponentAvailabilityV2Entity` instance with the same client and
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
| `component_impacts` | `table` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `table` | No | An array of mappings from component ID to current component status |
| `id` | `string` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Yes | Current status for this incident |
| `message` | `string` | Yes | Markdown initial update on this status page incident |
| `name` | `string` | Yes | A title for the incident |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `table` | Yes | A list of updates posted to this status page incident |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageIncident():create({
  component_impacts = --[[ table ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  incident_status = --[[ string ]],
  message = --[[ string ]],
  name = --[[ string ]],
  notify_subscribers = --[[ boolean ]],
  published_at = --[[ string ]],
  status_page_id = --[[ string ]],
  updates = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatusPageIncident():list({ status_page_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageIncident():load({ id = "status_page_incident_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `component_statuses` | `table` | No | An array of mappings from component ID to component status. |
| `incident_status` | `string` | No | Optional new status for this status page incident. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | Yes | ID of the status page incident |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageIncidentUpdate():create({
  message = --[[ string ]],
  notify_subscribers = --[[ boolean ]],
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

## StatusPageLinkedResponseIncidentV1Entity

```lua
local status_page_linked_response_incident_v1 = client:StatusPageLinkedResponseIncidentV1(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the Response incident |
| `linked_at` | `string` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatusPageLinkedResponseIncidentV1():list({ incident_id = "example", status_page_id = "example" })
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

Create a new `StatusPageLinkedResponseIncidentV1Entity` instance with the same client and
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
| `affected_component_ids` | `table` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `boolean` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `table` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | Yes | The time the maintenance window ends |
| `id` | `string` | Yes | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Yes | Current status for this maintenance window |
| `message` | `string` | Yes | Markdown initial update on this status page maintenance window |
| `name` | `string` | Yes | A title for the maintenance window |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | Yes | When this status page maintenance window was published to the status page |
| `start_at` | `string` | Yes | The time the maintenance window starts |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `table` | Yes | A list of updates posted to this status page maintenance window |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `affected_component_ids` | - | - | - | - |
| `automate_maintenance_status` | - | - | Yes | - |
| `component_maintenance_periods` | - | - | - | - |
| `end_at` | - | - | - | - |
| `id` | - | - | - | - |
| `idempotency_key` | - | - | - | - |
| `maintenance_status` | - | - | - | - |
| `message` | - | - | - | - |
| `name` | - | - | - | - |
| `notify_subscribers` | - | - | - | - |
| `published_at` | - | - | - | - |
| `start_at` | - | - | - | - |
| `status_page_id` | - | - | - | - |
| `updates` | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageMaintenance():create({
  affected_component_ids = --[[ table ]],
  automate_maintenance_status = --[[ boolean ]],
  component_maintenance_periods = --[[ table ]],
  end_at = --[[ string ]],
  id = --[[ string ]],
  idempotency_key = --[[ string ]],
  maintenance_status = --[[ string ]],
  message = --[[ string ]],
  name = --[[ string ]],
  notify_subscribers = --[[ boolean ]],
  published_at = --[[ string ]],
  start_at = --[[ string ]],
  status_page_id = --[[ string ]],
  updates = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:StatusPageMaintenance():list({ status_page_id = "example" })
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageMaintenance():load({ id = "status_page_maintenance_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageMaintenance():update({
  id = "status_page_maintenance_id",
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
| `component_statuses` | `table` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | No | Optional new status for this status page maintenance window. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | Yes | ID of the status page maintenance window |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:StatusPageMaintenanceUpdate():create({
  message = --[[ string ]],
  notify_subscribers = --[[ boolean ]],
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
| `current_structure` | `table` | Yes |  |
| `display_uptime_mode` | `string` | Yes | How the page shows uptime against its components |
| `id` | `string` | No |  |
| `management_meta` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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

## StatusPagesV2Entity

```lua
local status_pages_v2 = client:StatusPagesV2(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:StatusPagesV2():remove({ status_page_maintenance_id = "status_page_maintenance_id" })
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

Create a new `StatusPagesV2Entity` instance with the same client and
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
| `id` | `string` | Yes | Unique ID of the team |
| `members` | `table` | Yes | Members of the team |
| `name` | `string` | Yes | Name of the team |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Team():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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

## TelemetryDataSourceV2Entity

```lua
local telemetry_data_source_v2 = client:TelemetryDataSourceV2(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this data source was created |
| `datadog_config` | `table` | No | Datadog-specific credential updates |
| `enabled` | `boolean` | Yes | Whether this data source is enabled |
| `grafana_config` | `table` | No | Grafana-specific credential and endpoint updates |
| `id` | `string` | Yes | Unique identifier for this data source |
| `name` | `string` | Yes | Human-readable name of the data source |
| `provider` | `string` | Yes | Provider that hosts this data source |
| `source_type` | `string` | Yes | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `string` | Yes | When this data source was last updated |
| `version` | `string` | No | Upstream tool version captured at probe time (e.g. |

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

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

```lua
local result, err = client:TelemetryDataSourceV2():update({
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

Create a new `TelemetryDataSourceV2Entity` instance with the same client and
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
| `custom_roles` | `table` | Yes |  |
| `email` | `string` | No | Email address of the user. |
| `id` | `string` | Yes | Unique identifier of the user |
| `is_active` | `boolean` | Yes | Whether the user is active. |
| `name` | `string` | Yes | Name of the user |
| `role` | `string` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `table` | Yes |  |
| `slack_user_id` | `string` | No | Slack ID of the user |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:User():create({
  id = --[[ string ]],
  base_role = --[[ table ]],
  custom_roles = --[[ table ]],
  is_active = --[[ boolean ]],
  name = --[[ string ]],
  role = --[[ string ]],
  seats = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:User():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `annotations` | `table` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `table` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `boolean` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `table` | Yes |  |
| `expressions` | `table` | Yes | The expressions to use in the workflow |
| `folder` | `string` | No | Folder to display the workflow in |
| `form_fields` | `table` | No | User-configured form fields available in the workflow scope. |
| `id` | `string` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `boolean` | No | Whether to include private escalations |
| `include_private_incidents` | `boolean` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `table` | Yes |  |
| `name` | `string` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `table` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `table` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `table` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `string` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `boolean` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | No | What state this workflow is in |
| `steps` | `table` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `string` | Yes | Trigger to set on the workflow |
| `version` | `number` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `table` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | - | - | - |
| `auto_run_mode` | - | Yes | - | - | - |
| `condition_groups` | - | - | - | - | - |
| `continue_on_step_error` | - | - | - | - | - |
| `delay` | - | - | - | - | - |
| `expressions` | - | - | - | - | - |
| `folder` | - | - | - | - | - |
| `form_fields` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_private_escalations` | - | Yes | - | - | - |
| `include_private_incidents` | - | Yes | - | - | - |
| `management_meta` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `once_for` | - | - | - | - | - |
| `owning_team_ids` | - | - | - | - | - |
| `private_incident_scope` | - | Yes | - | - | - |
| `runs_from` | - | - | - | - | - |
| `runs_on_incident_modes` | - | - | - | - | - |
| `runs_on_incidents` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `skip_step_upgrades` | - | - | - | - | - |
| `state` | - | Yes | - | - | - |
| `steps` | - | - | - | - | - |
| `trigger` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `workflow` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data. Returns the created entity, or `nil` and an error on failure.

```lua
local result, err = client:Workflow():create({
  condition_groups = --[[ table ]],
  continue_on_step_error = --[[ boolean ]],
  delay = --[[ table ]],
  expressions = --[[ table ]],
  id = --[[ string ]],
  management_meta = --[[ table ]],
  name = --[[ string ]],
  once_for = --[[ table ]],
  runs_on_incident_modes = --[[ table ]],
  runs_on_incidents = --[[ string ]],
  steps = --[[ table ]],
  trigger = --[[ string ]],
  version = --[[ number ]],
  workflow = --[[ table ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:Workflow():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

```lua
local result, err = client:Workflow():load({ id = "workflow_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, or `nil` and an error on failure.

```lua
local result, err = client:Workflow():remove({ id = "workflow_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`. Returns the updated entity, or `nil` and an error on failure.

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
| `cancelled_at` | `string` | No | If the run was cancelled, this is when |
| `created_at` | `string` | Yes | When the resource was created |
| `enqueued_at` | `string` | No | When the run was enqueued for execution |
| `error` | `string` | No | Error produced by the workflow, if it failed |
| `id` | `string` | Yes | Unique identifier for the workflow run |
| `incident_id` | `string` | No | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `string` | No | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `table` | Yes | Status of each step as it is worked |
| `scheduled_at` | `string` | Yes | When the run was scheduled for |
| `updated_at` | `string` | Yes | When the resource was last updated |
| `workflow_id` | `string` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | No | Name of the underlying workflow |
| `workflow_version_id` | `string` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `number` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array of entities, one per record, or `nil` and an error on failure.

```lua
local results, err = client:WorkflowRun():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, or `nil` and an error on failure.

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
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.


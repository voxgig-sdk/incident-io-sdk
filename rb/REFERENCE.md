# IncidentIo Ruby SDK Reference

Complete API reference for the IncidentIo Ruby SDK.


## IncidentIoSDK

### Constructor

```ruby
require_relative 'IncidentIo_sdk'

client = IncidentIoSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = IncidentIoSDK.test
```


### Instance Methods

#### `Action(data = nil)`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `Alert(data = nil)`

Create a new `Alert` entity instance. Pass `nil` for no initial data.

#### `AlertAttribute(data = nil)`

Create a new `AlertAttribute` entity instance. Pass `nil` for no initial data.

#### `AlertEventsV2(data = nil)`

Create a new `AlertEventsV2` entity instance. Pass `nil` for no initial data.

#### `AlertNote(data = nil)`

Create a new `AlertNote` entity instance. Pass `nil` for no initial data.

#### `AlertRoute(data = nil)`

Create a new `AlertRoute` entity instance. Pass `nil` for no initial data.

#### `AlertSource(data = nil)`

Create a new `AlertSource` entity instance. Pass `nil` for no initial data.

#### `AlertSourcesV2(data = nil)`

Create a new `AlertSourcesV2` entity instance. Pass `nil` for no initial data.

#### `AlertTag(data = nil)`

Create a new `AlertTag` entity instance. Pass `nil` for no initial data.

#### `AlertsAddTagsResultV2(data = nil)`

Create a new `AlertsAddTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsSetTagsResultV2(data = nil)`

Create a new `AlertsSetTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsTransitionIncidentAlertResultV2(data = nil)`

Create a new `AlertsTransitionIncidentAlertResultV2` entity instance. Pass `nil` for no initial data.

#### `AnnouncementRule(data = nil)`

Create a new `AnnouncementRule` entity instance. Pass `nil` for no initial data.

#### `AnnouncementTemplate(data = nil)`

Create a new `AnnouncementTemplate` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data = nil)`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `CallRoute(data = nil)`

Create a new `CallRoute` entity instance. Pass `nil` for no initial data.

#### `CallRouteAllowedCaller(data = nil)`

Create a new `CallRouteAllowedCaller` entity instance. Pass `nil` for no initial data.

#### `CallRouteOption(data = nil)`

Create a new `CallRouteOption` entity instance. Pass `nil` for no initial data.

#### `CallSession(data = nil)`

Create a new `CallSession` entity instance. Pass `nil` for no initial data.

#### `CallTranscriptEntry(data = nil)`

Create a new `CallTranscriptEntry` entity instance. Pass `nil` for no initial data.

#### `CatalogEntry(data = nil)`

Create a new `CatalogEntry` entity instance. Pass `nil` for no initial data.

#### `CatalogResource(data = nil)`

Create a new `CatalogResource` entity instance. Pass `nil` for no initial data.

#### `CatalogType(data = nil)`

Create a new `CatalogType` entity instance. Pass `nil` for no initial data.

#### `CatalogTypeSchema(data = nil)`

Create a new `CatalogTypeSchema` entity instance. Pass `nil` for no initial data.

#### `CatalogV3(data = nil)`

Create a new `CatalogV3` entity instance. Pass `nil` for no initial data.

#### `CustomField(data = nil)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldOption(data = nil)`

Create a new `CustomFieldOption` entity instance. Pass `nil` for no initial data.

#### `Escalation(data = nil)`

Create a new `Escalation` entity instance. Pass `nil` for no initial data.

#### `EscalationPath(data = nil)`

Create a new `EscalationPath` entity instance. Pass `nil` for no initial data.

#### `EscalationPathTemplate(data = nil)`

Create a new `EscalationPathTemplate` entity instance. Pass `nil` for no initial data.

#### `EscalationsCheckEscalationPermissionsResultV2(data = nil)`

Create a new `EscalationsCheckEscalationPermissionsResultV2` entity instance. Pass `nil` for no initial data.

#### `EscalationsReassignEscalationResultV2(data = nil)`

Create a new `EscalationsReassignEscalationResultV2` entity instance. Pass `nil` for no initial data.

#### `EscalationsV2(data = nil)`

Create a new `EscalationsV2` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data = nil)`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `FollowUpsConnectExternalIssueResultV2(data = nil)`

Create a new `FollowUpsConnectExternalIssueResultV2` entity instance. Pass `nil` for no initial data.

#### `FollowUpsConnectExternalIssueResultV3(data = nil)`

Create a new `FollowUpsConnectExternalIssueResultV3` entity instance. Pass `nil` for no initial data.

#### `FollowUpsCreateFromLinkResultV3(data = nil)`

Create a new `FollowUpsCreateFromLinkResultV3` entity instance. Pass `nil` for no initial data.

#### `HeartbeatV2(data = nil)`

Create a new `HeartbeatV2` entity instance. Pass `nil` for no initial data.

#### `Identity(data = nil)`

Create a new `Identity` entity instance. Pass `nil` for no initial data.

#### `Incident(data = nil)`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `IncidentActivityLogEntry(data = nil)`

Create a new `IncidentActivityLogEntry` entity instance. Pass `nil` for no initial data.

#### `IncidentAttachment(data = nil)`

Create a new `IncidentAttachment` entity instance. Pass `nil` for no initial data.

#### `IncidentForm(data = nil)`

Create a new `IncidentForm` entity instance. Pass `nil` for no initial data.

#### `IncidentMembership(data = nil)`

Create a new `IncidentMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentMembershipsV1(data = nil)`

Create a new `IncidentMembershipsV1` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipant(data = nil)`

Create a new `IncidentParticipant` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipantWorkload(data = nil)`

Create a new `IncidentParticipantWorkload` entity instance. Pass `nil` for no initial data.

#### `IncidentRelationship(data = nil)`

Create a new `IncidentRelationship` entity instance. Pass `nil` for no initial data.

#### `IncidentRole(data = nil)`

Create a new `IncidentRole` entity instance. Pass `nil` for no initial data.

#### `IncidentStatus(data = nil)`

Create a new `IncidentStatus` entity instance. Pass `nil` for no initial data.

#### `IncidentTeamMembership(data = nil)`

Create a new `IncidentTeamMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentTeamMembershipsV1(data = nil)`

Create a new `IncidentTeamMembershipsV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplate(data = nil)`

Create a new `IncidentTemplate` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplatesValidateResultV1(data = nil)`

Create a new `IncidentTemplatesValidateResultV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTimelineItem(data = nil)`

Create a new `IncidentTimelineItem` entity instance. Pass `nil` for no initial data.

#### `IncidentTimestamp(data = nil)`

Create a new `IncidentTimestamp` entity instance. Pass `nil` for no initial data.

#### `IncidentType(data = nil)`

Create a new `IncidentType` entity instance. Pass `nil` for no initial data.

#### `IncidentUpdate(data = nil)`

Create a new `IncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `IncidentsImportPostmortemDocumentResultV2(data = nil)`

Create a new `IncidentsImportPostmortemDocumentResultV2` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data = nil)`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `IpRange(data = nil)`

Create a new `IpRange` entity instance. Pass `nil` for no initial data.

#### `MaintenanceWindow(data = nil)`

Create a new `MaintenanceWindow` entity instance. Pass `nil` for no initial data.

#### `ManagedResource(data = nil)`

Create a new `ManagedResource` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationMethodPublicV2(data = nil)`

Create a new `OnCallNotificationMethodPublicV2` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationPause(data = nil)`

Create a new `OnCallNotificationPause` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationRulePublicV2(data = nil)`

Create a new `OnCallNotificationRulePublicV2` entity instance. Pass `nil` for no initial data.

#### `PayConfig(data = nil)`

Create a new `PayConfig` entity instance. Pass `nil` for no initial data.

#### `PayConfigOneOffRule(data = nil)`

Create a new `PayConfigOneOffRule` entity instance. Pass `nil` for no initial data.

#### `PayConfigWeeklyRule(data = nil)`

Create a new `PayConfigWeeklyRule` entity instance. Pass `nil` for no initial data.

#### `PayReport(data = nil)`

Create a new `PayReport` entity instance. Pass `nil` for no initial data.

#### `PayReportsPublishResultV2(data = nil)`

Create a new `PayReportsPublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsUnpublishResultV2(data = nil)`

Create a new `PayReportsUnpublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsV2(data = nil)`

Create a new `PayReportsV2` entity instance. Pass `nil` for no initial data.

#### `Policy(data = nil)`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PolicyFinding(data = nil)`

Create a new `PolicyFinding` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsDismissResultV2(data = nil)`

Create a new `PolicyFindingsDismissResultV2` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsRestoreResultV2(data = nil)`

Create a new `PolicyFindingsRestoreResultV2` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocument(data = nil)`

Create a new `PostmortemDocument` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocumentsAttachResultV1(data = nil)`

Create a new `PostmortemDocumentsAttachResultV1` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocumentsShowContentResultV1(data = nil)`

Create a new `PostmortemDocumentsShowContentResultV1` entity instance. Pass `nil` for no initial data.

#### `Schedule(data = nil)`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntriesListPayloadV2(data = nil)`

Create a new `ScheduleEntriesListPayloadV2` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntry(data = nil)`

Create a new `ScheduleEntry` entity instance. Pass `nil` for no initial data.

#### `ScheduleOverride(data = nil)`

Create a new `ScheduleOverride` entity instance. Pass `nil` for no initial data.

#### `ScheduleReplica(data = nil)`

Create a new `ScheduleReplica` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncRule(data = nil)`

Create a new `ScheduleSyncRule` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncTarget(data = nil)`

Create a new `ScheduleSyncTarget` entity instance. Pass `nil` for no initial data.

#### `Secret(data = nil)`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Severity(data = nil)`

Create a new `Severity` entity instance. Pass `nil` for no initial data.

#### `StatusPage(data = nil)`

Create a new `StatusPage` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponent(data = nil)`

Create a new `StatusPageComponent` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponentAvailability(data = nil)`

Create a new `StatusPageComponentAvailability` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncident(data = nil)`

Create a new `StatusPageIncident` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncidentUpdate(data = nil)`

Create a new `StatusPageIncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageLinkedResponseIncident(data = nil)`

Create a new `StatusPageLinkedResponseIncident` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenance(data = nil)`

Create a new `StatusPageMaintenance` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenanceUpdate(data = nil)`

Create a new `StatusPageMaintenanceUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageStructure(data = nil)`

Create a new `StatusPageStructure` entity instance. Pass `nil` for no initial data.

#### `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(data = nil)`

Create a new `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2` entity instance. Pass `nil` for no initial data.

#### `Team(data = nil)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TelemetryDataSource(data = nil)`

Create a new `TelemetryDataSource` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UsersShowPagingProviderResultV2(data = nil)`

Create a new `UsersShowPagingProviderResultV2` entity instance. Pass `nil` for no initial data.

#### `UtilitiesV1(data = nil)`

Create a new `UtilitiesV1` entity instance. Pass `nil` for no initial data.

#### `Workflow(data = nil)`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowRun(data = nil)`

Create a new `WorkflowRun` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ActionEntity

```ruby
action = client.Action
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | Yes |  |
| `assignee_id` | `String` | No | ID of the user this action is assigned to |
| `completed_at` | `String` | No | When the action was completed |
| `created_at` | `String` | Yes | When the action was created |
| `creator` | `Hash` | Yes |  |
| `description` | `String` | Yes | Description of the action |
| `id` | `String` | Yes | Unique identifier for the action |
| `incident_id` | `String` | Yes | Unique identifier of the incident the action belongs to |
| `status` | `String` | Yes | Status of the action |
| `updated_at` | `String` | Yes | When the action was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Action.create({
  "description" => "example_description", # String
  "incident_id" => "example_incident_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Action.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Action.load({ "id" => "action_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Action.remove({ "id" => "action_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Action.update({
  "id" => "action_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertEntity

```ruby
alert = client.Alert
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `String` | Yes | When this entry was created |
| `deduplication_key` | `String` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | No | The description of the alert |
| `id` | `String` | Yes | The ID of this alert |
| `resolved_at` | `String` | No | When this alert was resolved |
| `source_url` | `String` | No | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `String` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | Yes | When this alert was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Alert.create({
  "id" => "example_id", # String
  "alert_source_id" => "example_alert_source_id", # String
  "attributes" => [], # Array
  "created_at" => "example_created_at", # String
  "deduplication_key" => "example_deduplication_key", # String
  "status" => "example_status", # String
  "title" => "example_title", # String
  "updated_at" => "example_updated_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Alert.list({ "page_size" => 1 })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Alert.load({ "id" => "alert_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertAttributeEntity

```ruby
alert_attribute = client.AlertAttribute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `Boolean` | Yes | Whether this attribute is an array |
| `emoji` | `String` | No | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `String` | Yes | The ID of this attribute |
| `name` | `String` | Yes | Unique name of this attribute |
| `required` | `Boolean` | Yes | Whether this attribute is required. |
| `type` | `String` | Yes | Engine resource name for this attribute |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertAttribute.create({
  "array" => true, # Boolean
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertAttribute.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AlertAttribute.load({ "id" => "alert_attribute_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AlertAttribute.remove({ "id" => "alert_attribute_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AlertAttribute.update({
  "id" => "alert_attribute_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertEventsV2Entity

```ruby
alert_events_v2 = client.AlertEventsV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deduplication_key` | `String` | Yes | The deduplication key that the event has been processed with |
| `description` | `String` | No | Description that optionally adds more detail to title. |
| `message` | `String` | Yes | Human readable message giving detail about the event |
| `metadata` | `Hash` | No | Any additional metadata that you've configured your alert source to parse |
| `source_url` | `String` | No | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Yes | Status of the event |
| `title` | `String` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `deduplication_key` | Yes |
| `description` | - |
| `message` | - |
| `metadata` | - |
| `source_url` | - |
| `status` | - |
| `title` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertEventsV2.create({
  "alert_source_config_id" => "example_alert_source_config_id", # String
  "status" => "example_status", # String
  "title" => "example_title", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertEventsV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertNoteEntity

```ruby
alert_note = client.AlertNote
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `String` | No | ID of the alert group this note is attached to. |
| `alert_id` | `String` | No | ID of the alert this note is attached to. |
| `content` | `String` | Yes | Markdown body of the note |
| `created_at` | `String` | Yes | When this note was first created |
| `creator` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier for the alert note |
| `images` | `Array` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `String` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `String` | Yes | When this note was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertNote.create({
  "content" => "example_content", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertNote.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AlertNote.load({ "id" => "alert_note_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AlertNote.remove({ "id" => "alert_note_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AlertNote.update({
  "id" => "alert_note_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertRouteEntity

```ruby
alert_route = client.AlertRoute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_sources` | `Array` | Yes | Which alert sources this route matches |
| `condition_groups` | `Array` | Yes | Filter: the condition groups that must be true for this route to fire |
| `created_at` | `String` | No | When this alert route was created |
| `enabled` | `Boolean` | Yes | Whether this alert route is enabled |
| `escalation_config` | `Hash` | Yes |  |
| `expressions` | `Array` | Yes | The expressions used by bindings in this route |
| `grouping_config` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier for this alert route |
| `incident_config` | `Hash` | Yes |  |
| `is_private` | `Boolean` | Yes | Whether this alert route is private. |
| `message_config` | `Hash` | Yes |  |
| `name` | `String` | Yes | The name of this alert route, for the user's reference |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert route |
| `updated_at` | `String` | No | When this alert route was last updated |
| `version` | `Integer` | Yes | The version of this alert route |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertRoute.create({
  "alert_sources" => [], # Array
  "condition_groups" => [], # Array
  "enabled" => true, # Boolean
  "escalation_config" => {}, # Hash
  "expressions" => [], # Array
  "grouping_config" => {}, # Hash
  "incident_config" => {}, # Hash
  "is_private" => true, # Boolean
  "message_config" => {}, # Hash
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertRoute.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AlertRoute.load({ "id" => "alert_route_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AlertRoute.remove({ "id" => "alert_route_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AlertRoute.update({
  "id" => "alert_route_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertSourceEntity

```ruby
alert_source = client.AlertSource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `String` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `Boolean` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `Integer` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `Hash` | Yes |  |
| `disabled` | `Boolean` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `Hash` | Yes |  |
| `filter_condition_groups` | `Array` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `String` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `Hash` | Yes |  |
| `http_custom_options` | `Hash` | Yes |  |
| `id` | `String` | Yes | The ID of this alert source |
| `jira_options` | `Hash` | Yes |  |
| `name` | `String` | Yes | Unique name of the alert source |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `Hash` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `String` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `String` | Yes | Type of alert source |
| `template` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertSource.create({
  "azure_devops_options" => {}, # Hash
  "email_options" => {}, # Hash
  "heartbeat_options" => {}, # Hash
  "http_custom_options" => {}, # Hash
  "jira_options" => {}, # Hash
  "name" => "example_name", # String
  "rate_limit_sharding" => {}, # Hash
  "source_type" => "example_source_type", # String
  "template" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertSource.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AlertSource.load({ "id" => "alert_source_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AlertSource.remove({ "id" => "alert_source_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AlertSource.update({
  "id" => "alert_source_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertSourcesV2Entity

```ruby
alert_sources_v2 = client.AlertSourcesV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert source |
| `source_type` | `String` | Yes | Type of alert source |
| `template` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertSourcesV2.create({
  "source_type" => "example_source_type", # String
  "template" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertSourcesV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertTagEntity

```ruby
alert_tag = client.AlertTag
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `String` | Yes | When this entry was created |
| `deduplication_key` | `String` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | No | The description of the alert |
| `id` | `String` | Yes | The ID of this alert |
| `name` | `String` | Yes | The tag name |
| `resolved_at` | `String` | No | When this alert was resolved |
| `source_url` | `String` | No | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `String` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | list | create |
| --- | --- | --- |
| `alert_group_ids` | - | - |
| `alert_source_id` | - | - |
| `attributes` | - | - |
| `created_at` | - | - |
| `deduplication_key` | - | - |
| `description` | - | - |
| `id` | - | - |
| `name` | - | - |
| `resolved_at` | - | - |
| `source_url` | - | - |
| `status` | - | - |
| `tags` | - | Yes |
| `title` | - | - |
| `updated_at` | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertTag.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertTag.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertTagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertsAddTagsResultV2Entity

```ruby
alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `String` | Yes | When this entry was created |
| `deduplication_key` | `String` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | No | The description of the alert |
| `id` | `String` | Yes | The ID of this alert |
| `resolved_at` | `String` | No | When this alert was resolved |
| `source_url` | `String` | No | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `String` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | Yes | When this alert was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertsAddTagsResultV2.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertsAddTagsResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertsSetTagsResultV2Entity

```ruby
alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `String` | Yes | When this entry was created |
| `deduplication_key` | `String` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | No | The description of the alert |
| `id` | `String` | Yes | The ID of this alert |
| `resolved_at` | `String` | No | When this alert was resolved |
| `source_url` | `String` | No | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `String` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | Yes | When this alert was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertsSetTagsResultV2.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertsSetTagsResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlertsTransitionIncidentAlertResultV2Entity

```ruby
alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `Hash` | Yes |  |
| `alert_id` | `String` | Yes | Alert to attach to the incident |
| `alert_route_id` | `String` | No | The ID of the alert route that created this incident alert |
| `id` | `String` | Yes | The ID of this alert |
| `incident` | `Hash` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `String` | Yes | Incident to attach the alert to |
| `re_relate` | `Boolean` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `String` | Yes | What state to move the connection to |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AlertsTransitionIncidentAlertResultV2.create({
  "alert_id" => "example_alert_id", # String
  "incident_id" => "example_incident_id", # String
  "state" => "example_state", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AlertsTransitionIncidentAlertResultV2.list({ "page_size" => 1 })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnnouncementRuleEntity

```ruby
announcement_rule = client.AnnouncementRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `Array` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `String` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `String` | Yes | When the rule was created |
| `id` | `String` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `Array` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `String` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `String` | Yes | Human readable name for the rule |
| `owning_team_ids` | `Array` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `String` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `Array` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `String` | No | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `String` | Yes | Where incident updates are shared once the incident is announced |
| `updated_at` | `String` | Yes | When the rule was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AnnouncementRule.create({
  "condition_groups" => [], # Array
  "mode" => "example_mode", # String
  "name" => "example_name", # String
  "update_sharing_mode" => "example_update_sharing_mode", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AnnouncementRule.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AnnouncementRule.load({ "id" => "announcement_rule_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AnnouncementRule.remove({ "id" => "announcement_rule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AnnouncementRule.update({
  "id" => "announcement_rule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnnouncementRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AnnouncementTemplateEntity

```ruby
announcement_template = client.AnnouncementTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `Array` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `String` | Yes | Unique identifier for this announcement template |
| `is_default` | `Boolean` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `String` | Yes | Name of this announcement template |
| `owning_team_ids` | `Array` | Yes | IDs of the teams that own this template |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.AnnouncementTemplate.create({
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.AnnouncementTemplate.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.AnnouncementTemplate.load({ "id" => "announcement_template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.AnnouncementTemplate.remove({ "id" => "announcement_template_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.AnnouncementTemplate.update({
  "id" => "announcement_template_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AnnouncementTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ApiKeyEntity

```ruby
api_key = client.ApiKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `String` | No | Freeform notes about this API key |
| `created_at` | `String` | Yes | When the API key was created |
| `creator` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier for this API key |
| `last_used_at` | `String` | No | When the key was last used to authenticate a request |
| `name` | `String` | Yes | The name of the API key, for the user's reference |
| `role_names` | `Array` | Yes | Account-level roles to assign to the API key. |
| `roles` | `Array` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `Array` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `Array` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `Array` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `String` | Yes | When the current token for this API was last issued. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ApiKey.create({
  "name" => "example_name", # String
  "role_names" => [], # Array
  "team_ids" => [], # Array
  "team_role_names" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ApiKey.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ApiKey.load({ "id" => "api_key_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ApiKey.remove({ "id" => "api_key_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ApiKey.update({
  "id" => "api_key_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallRouteEntity

```ruby
call_route = client.CallRoute
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `Array` | Yes | The numbers allowed to call this route. |
| `country_code` | `String` | No | The country this route's number belongs to |
| `created_at` | `String` | Yes |  |
| `current_state` | `String` | Yes | Where this route is in provisioning. |
| `custom_language` | `String` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `String` | Yes | Unique identifier for this call route |
| `name` | `String` | Yes | Name for this call route |
| `options` | `Array` | Yes | The phone-tree menu this route presents. |
| `path` | `Array` | Yes | Who we page when a call comes in. |
| `phone_number` | `String` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `String` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `String` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `String` | Yes |  |
| `use_caller_allowlist` | `Boolean` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CallRoute.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CallRoute.load({ "id" => "call_route_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CallRoute.update({
  "id" => "call_route_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallRouteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallRouteAllowedCallerEntity

```ruby
call_route_allowed_caller = client.CallRouteAllowedCaller
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique identifier for this allowed caller |
| `name` | `String` | No | Label for whose number this is |
| `phone_number` | `String` | Yes | The number allowed to call this route, in international format |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CallRouteAllowedCaller.create({
  "id" => "example_id", # String
  "phone_number" => "example_phone_number", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CallRouteAllowedCaller.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CallRouteAllowedCaller.load({ "id" => "call_route_allowed_caller_id", "call_route_id" => "call_route_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CallRouteAllowedCaller.remove({ "id" => "call_route_allowed_caller_id", "call_route_id" => "call_route_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CallRouteAllowedCaller.update({
  "id" => "call_route_allowed_caller_id",
  "call_route_id" => "call_route_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallRouteAllowedCallerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallRouteOptionEntity

```ruby
call_route_option = client.CallRouteOption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `String` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `String` | Yes | Unique identifier for this option |
| `path` | `Array` | Yes | Who we page when a caller chooses this option |
| `prompt` | `String` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CallRouteOption.create({
  "id" => "example_id", # String
  "digit" => "example_digit", # String
  "path" => [], # Array
  "prompt" => "example_prompt", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CallRouteOption.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CallRouteOption.load({ "id" => "call_route_option_id", "call_route_id" => "call_route_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CallRouteOption.remove({ "id" => "call_route_option_id", "call_route_id" => "call_route_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CallRouteOption.update({
  "id" => "call_route_option_id",
  "call_route_id" => "call_route_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallRouteOptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallSessionEntity

```ruby
call_session = client.CallSession
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `String` | No | When the call session ended. |
| `id` | `String` | Yes | Unique identifier for this call session |
| `incident_id` | `String` | Yes | The incident this call session belongs to |
| `started_at` | `String` | Yes | When the call session started |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CallSession.list({ "incident_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallSessionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CallTranscriptEntryEntity

```ruby
call_transcript_entry = client.CallTranscriptEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | Yes | What was said |
| `id` | `String` | Yes | Unique identifier for this transcript entry |
| `medium` | `String` | Yes | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `String` | Yes | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `String` | Yes | When the participant started speaking |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CallTranscriptEntry.list({ "call_session_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CallTranscriptEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogEntryEntity

```ruby
catalog_entry = client.CatalogEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `Array` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `String` | No | When this entry was archived |
| `attribute_values` | `Hash` | Yes | Values of this entry |
| `catalog_entry` | `Hash` | Yes |  |
| `catalog_type` | `Hash` | Yes |  |
| `catalog_type_id` | `String` | Yes | ID of this catalog type |
| `created_at` | `String` | Yes | When this entry was created |
| `external_id` | `String` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `String` | Yes | ID of this catalog entry |
| `name` | `String` | Yes | Name is the human readable name of this entry |
| `rank` | `Integer` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `Array` | No | If provided, only update these attribute_values keys. |
| `updated_at` | `String` | Yes | When this entry was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `aliases` | - | Yes | - | - | - |
| `archived_at` | - | - | - | - | - |
| `attribute_values` | - | - | - | - | - |
| `catalog_entry` | - | - | - | - | - |
| `catalog_type` | - | - | - | - | - |
| `catalog_type_id` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `external_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `rank` | - | Yes | - | - | - |
| `update_attributes` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CatalogEntry.create({
  "attribute_values" => {}, # Hash
  "catalog_type_id" => "example_catalog_type_id", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CatalogEntry.list({ "catalog_type_id" => "example", "page_size" => 1 })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CatalogEntry.load({ "id" => "catalog_entry_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CatalogEntry.remove({ "id" => "catalog_entry_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CatalogEntry.update({
  "id" => "catalog_entry_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogResourceEntity

```ruby
catalog_resource = client.CatalogResource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | Yes | Which category of resource |
| `description` | `String` | Yes | Human readable description for this resource |
| `engine_resource_type` | `String` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `String` | Yes | Label for this catalog resource type |
| `type` | `String` | Yes | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `String` | Yes | Documentation for the literal string value of this resource |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CatalogResource.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogTypeEntity

```ruby
catalog_type = client.CatalogType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | Yes | Annotations that can track metadata about this type |
| `categories` | `Array` | Yes | What categories is this type considered part of |
| `color` | `String` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `String` | Yes | When this type was created |
| `description` | `String` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `String` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `String` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `Integer` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `String` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `String` | Yes | ID of this catalog type |
| `is_editable` | `Boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `Boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `String` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `String` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this catalog type |
| `ranked` | `Boolean` | Yes | If this type should be ranked |
| `registry_type` | `String` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | No | If populated, the integrations required for this type |
| `schema` | `Hash` | Yes |  |
| `source_repo_url` | `String` | No | The url of the external repository where this type is managed |
| `type_name` | `String` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `String` | Yes | When this type was last updated |
| `use_name_as_identifier` | `Boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | Yes | Yes | - |
| `categories` | - | - | Yes | Yes | - |
| `color` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `dynamic_resource_parameter` | - | - | - | - | - |
| `engine_resource_type` | - | - | - | - | - |
| `estimated_count` | - | - | - | - | - |
| `icon` | - | - | Yes | Yes | - |
| `id` | - | - | - | - | - |
| `is_editable` | - | - | - | - | - |
| `is_team_type` | - | - | - | - | - |
| `last_synced_at` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | - | - | - | - |
| `ranked` | - | - | Yes | Yes | - |
| `registry_type` | - | - | - | - | - |
| `required_integrations` | - | - | - | - | - |
| `schema` | - | - | - | - | - |
| `source_repo_url` | - | - | - | - | - |
| `type_name` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |
| `use_name_as_identifier` | - | - | Yes | Yes | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CatalogType.create({
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CatalogType.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CatalogType.load({ "id" => "catalog_type_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CatalogType.remove({ "id" => "catalog_type_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CatalogType.update({
  "id" => "catalog_type_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogTypeSchemaEntity

```ruby
catalog_type_schema = client.CatalogTypeSchema
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | Yes | Annotations that can track metadata about this type |
| `attributes` | `Array` | Yes |  |
| `categories` | `Array` | Yes | What categories is this type considered part of |
| `color` | `String` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `String` | Yes | When this type was created |
| `description` | `String` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `String` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `String` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `Integer` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `String` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `String` | Yes | ID of this catalog type |
| `is_editable` | `Boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `Boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `String` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `String` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this catalog type |
| `ranked` | `Boolean` | Yes | If this type should be ranked |
| `registry_type` | `String` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | No | If populated, the integrations required for this type |
| `schema` | `Hash` | Yes |  |
| `source_repo_url` | `String` | No | The url of the external repository where this type is managed |
| `type_name` | `String` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `String` | Yes | When this type was last updated |
| `use_name_as_identifier` | `Boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `Integer` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CatalogTypeSchema.create({
  "catalog_type_id" => "example_catalog_type_id", # String
  "attributes" => [], # Array
  "version" => 1, # Integer
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CatalogV3Entity

```ruby
catalog_v3 = client.CatalogV3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `String` | Yes | The unique identifier of the catalog type containing the entries |
| `entries` | `Array` | Yes | A list of entries to update with their new values. |
| `update_attributes` | `Array` | No | Optional list of specific attribute IDs to update across all entries. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CatalogV3.create({
  "catalog_type_id" => "example_catalog_type_id", # String
  "entries" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CatalogV3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomFieldEntity

```ruby
custom_field = client.CustomField
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `String` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `String` | Yes | When the action was created |
| `description` | `String` | Yes | Description of the custom field |
| `field_type` | `String` | Yes | Type of custom field |
| `filter_by` | `Hash` | Yes |  |
| `fixed_filter` | `Hash` | Yes |  |
| `group_by_catalog_attribute_id` | `String` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `String` | No | Which catalog attribute provides helptext for the options |
| `id` | `String` | Yes | Unique identifier for the custom field |
| `name` | `String` | Yes | Human readable name for the custom field |
| `updated_at` | `String` | Yes | When the action was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CustomField.create({
  "description" => "example_description", # String
  "field_type" => "example_field_type", # String
  "filter_by" => {}, # Hash
  "fixed_filter" => {}, # Hash
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CustomField.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CustomField.load({ "id" => "custom_field_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CustomField.remove({ "id" => "custom_field_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CustomField.update({
  "id" => "custom_field_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CustomFieldOptionEntity

```ruby
custom_field_option = client.CustomFieldOption
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `String` | Yes | ID of the custom field this option belongs to |
| `id` | `String` | Yes | Unique identifier for the custom field option |
| `sort_key` | `Integer` | Yes | Sort key used to order the custom field options correctly |
| `value` | `String` | Yes | Human readable name for the custom field option. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.CustomFieldOption.create({
  "custom_field_id" => "example_custom_field_id", # String
  "value" => "example_value", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.CustomFieldOption.list({ "custom_field_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.CustomFieldOption.load({ "id" => "custom_field_option_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.CustomFieldOption.remove({ "id" => "custom_field_option_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.CustomFieldOption.update({
  "id" => "custom_field_option_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationEntity

```ruby
escalation = client.Escalation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this escalation was created |
| `creator` | `Hash` | Yes | The creator of this escalation. |
| `description` | `String` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `String` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `Array` | Yes | Events which describe the history of this escalation. |
| `id` | `String` | Yes | Unique ID of the escalation |
| `idempotency_key` | `String` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `String` | No | ID of an incident to associate with this escalation. |
| `priority` | `Hash` | Yes | The priority associated with this escalation. |
| `related_alerts` | `Array` | Yes | Alerts related to this escalation |
| `related_incidents` | `Array` | Yes | Incidents related to this escalation |
| `status` | `String` | Yes | Status of the escalation |
| `title` | `String` | Yes | The title of this escalation |
| `updated_at` | `String` | Yes | When this escalation was last updated |
| `user_ids` | `Array` | No | IDs of users to escalate directly to |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Escalation.create({
  "idempotency_key" => "example_idempotency_key", # String
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Escalation.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Escalation.load({ "id" => "escalation_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationPathEntity

```ruby
escalation_path = client.EscalationPath
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_responders` | `Array` | No | Users who are currently on-call for this escalation path |
| `id` | `String` | Yes | Unique identifier for this escalation path. |
| `kind` | `String` | Yes | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | `String` | Yes | The name of this escalation path, for the user's reference. |
| `param_bindings` | `Hash` | No | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | `Array` | Yes | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` | `Hash` | Yes |  |
| `team_ids` | `Array` | Yes | IDs of the teams that own this escalation path. |
| `template_id` | `String` | No | For a templated path, the template it is built from. |
| `working_hours` | `Array` | No | The working hours for this escalation path. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `current_responders` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `kind` | - | - | Yes | Yes | - |
| `name` | - | - | - | - | - |
| `param_bindings` | - | - | - | - | - |
| `path` | - | - | - | - | - |
| `repeat_config` | - | - | - | - | - |
| `team_ids` | - | - | Yes | Yes | - |
| `template_id` | - | - | - | - | - |
| `working_hours` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.EscalationPath.create({
  "name" => "example_name", # String
  "path" => [], # Array
  "repeat_config" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.EscalationPath.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.EscalationPath.load({ "id" => "escalation_path_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.EscalationPath.remove({ "id" => "escalation_path_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.EscalationPath.update({
  "id" => "escalation_path_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationPathEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationPathTemplateEntity

```ruby
escalation_path_template = client.EscalationPathTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | A description of what this template is for. |
| `expressions` | `Array` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `Boolean` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `String` | Yes | Unique identifier for this template. |
| `name` | `String` | Yes | The name of this template. |
| `params` | `Array` | Yes | The parameters declared by this template. |
| `path` | `Array` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `Hash` | Yes |  |
| `working_hours` | `Array` | No | The working hours for this template. |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.EscalationPathTemplate.create({
  "name" => "example_name", # String
  "path" => [], # Array
  "repeat_config" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.EscalationPathTemplate.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.EscalationPathTemplate.load({ "id" => "escalation_path_template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.EscalationPathTemplate.remove({ "id" => "escalation_path_template_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.EscalationPathTemplate.update({
  "id" => "escalation_path_template_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationPathTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```ruby
escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `Array` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `Array` | Yes | The IDs of the users to check response options for |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.EscalationsCheckEscalationPermissionsResultV2.create({
  "escalation_id" => "example_escalation_id", # String
  "user_ids" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationsReassignEscalationResultV2Entity

```ruby
escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | Additional details about the new escalation. |
| `escalation_path_id` | `String` | No | ID of the escalation path to reassign to |
| `resolve_original` | `Boolean` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `String` | No | The title of the new escalation. |
| `user_ids` | `Array` | No | IDs of users to reassign directly to |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.EscalationsReassignEscalationResultV2.create({
  "escalation_id" => "example_escalation_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EscalationsV2Entity

```ruby
escalations_v2 = client.EscalationsV2
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EscalationsV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FollowUpEntity

```ruby
follow_up = client.FollowUp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | Yes |  |
| `assignee_id` | `String` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `Hash` | Yes |  |
| `assignee_team_id` | `String` | No | ID of the team this follow-up is assigned to |
| `category` | `Hash` | Yes |  |
| `completed_at` | `String` | No | When the follow-up was completed |
| `created_at` | `String` | Yes | When the follow-up was created |
| `creator` | `Hash` | Yes |  |
| `description` | `String` | No | Description of the follow-up |
| `external_issue_reference` | `Hash` | Yes |  |
| `external_issue_reference_id` | `String` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `String` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `String` | No | ID of the priority for this follow-up |
| `id` | `String` | Yes | Unique identifier for the follow-up |
| `incident_id` | `String` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Yes | Labels associated with this follow-up |
| `priority` | `Hash` | Yes |  |
| `status` | `String` | Yes | Status of the follow-up |
| `title` | `String` | Yes | Title of the follow-up |
| `updated_at` | `String` | Yes | When the follow-up was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.FollowUp.create({
  "incident_id" => "example_incident_id", # String
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.FollowUp.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.FollowUp.load({ "id" => "follow_up_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.FollowUp.remove({ "id" => "follow_up_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.FollowUp.update({
  "id" => "follow_up_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV2Entity

```ruby
follow_ups_connect_external_issue_result_v2 = client.FollowUpsConnectExternalIssueResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | Yes |  |
| `assignee_team` | `Hash` | Yes |  |
| `completed_at` | `String` | No | When the follow-up was completed |
| `created_at` | `String` | Yes | When the follow-up was created |
| `creator` | `Hash` | Yes |  |
| `description` | `String` | No | Description of the follow-up |
| `external_issue_reference` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier for the follow-up |
| `incident_id` | `String` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Yes | Labels associated with this follow-up |
| `priority` | `Hash` | Yes |  |
| `provider` | `String` | Yes | The issue tracker provider the issue belongs to |
| `status` | `String` | Yes | Status of the follow-up |
| `title` | `String` | Yes | Title of the follow-up |
| `updated_at` | `String` | Yes | When the follow-up was last updated |
| `url` | `String` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.FollowUpsConnectExternalIssueResultV2.create({
  "follow_up_id" => "example_follow_up_id", # String
  "provider" => "example_provider", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FollowUpsConnectExternalIssueResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV3Entity

```ruby
follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Hash` | Yes |  |
| `assignee_team` | `Hash` | Yes |  |
| `category` | `Hash` | Yes |  |
| `completed_at` | `String` | No | When the follow-up was completed |
| `created_at` | `String` | Yes | When the follow-up was created |
| `creator` | `Hash` | Yes |  |
| `description` | `String` | No | Description of the follow-up |
| `external_issue_reference` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique identifier for the follow-up |
| `incident_id` | `String` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Yes | Labels associated with this follow-up |
| `priority` | `Hash` | Yes |  |
| `provider` | `String` | Yes | The issue tracker provider the issue belongs to |
| `status` | `String` | Yes | Status of the follow-up |
| `title` | `String` | Yes | Title of the follow-up |
| `updated_at` | `String` | Yes | When the follow-up was last updated |
| `url` | `String` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.FollowUpsConnectExternalIssueResultV3.create({
  "follow_up_id" => "example_follow_up_id", # String
  "provider" => "example_provider", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FollowUpsCreateFromLinkResultV3Entity

```ruby
follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `String` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `String` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.FollowUpsCreateFromLinkResultV3.create({
  "incident_id" => "example_incident_id", # String
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HeartbeatV2Entity

```ruby
heartbeat_v2 = client.HeartbeatV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.HeartbeatV2.create({
  "id" => "example_id", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.HeartbeatV2.load({ "id" => "heartbeat_v2_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HeartbeatV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IdentityEntity

```ruby
identity = client.Identity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `String` | Yes | The dashboard URL for this organisation |
| `name` | `String` | Yes | The name assigned to the current API Key |
| `roles` | `Array` | Yes | Which roles have been enabled for this key |
| `team_roles` | `Array` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `Array` | Yes | Teams that this API key is scoped to. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Identity.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IdentityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentEntity

```ruby
incident = client.Incident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `String` | No | The call URL attached to this incident |
| `created_at` | `String` | Yes | When the incident was created |
| `creator` | `Hash` | Yes |  |
| `custom_field_entries` | `Array` | Yes | Custom field entries for this incident |
| `debriefs` | `Array` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `Array` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `Hash` | Yes |  |
| `has_debrief` | `Boolean` | No | If this incident has a debrief attached |
| `id` | `String` | Yes | Unique identifier for the incident |
| `idempotency_key` | `String` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `Array` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `Hash` | Yes |  |
| `incident_status_id` | `String` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `Array` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `Hash` | Yes |  |
| `incident_type_id` | `String` | No | Incident type to create this incident as |
| `last_activity_at` | `String` | Yes | When the incident last recorded 'activity' |
| `mode` | `String` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `String` | No | URL to link to the Microsoft Teams channel |
| `name` | `String` | Yes | Explanation of the incident |
| `permalink` | `String` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `Array` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `String` | No | The URL of the incident post-mortem document |
| `reference` | `String` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `Hash` | No |  |
| `severity` | `Hash` | Yes |  |
| `severity_id` | `String` | No | Severity to create incident as |
| `slack_channel_id` | `String` | Yes | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `String` | No | Name of the slack channel |
| `slack_channel_name_override` | `String` | No | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `String` | No | URL to link to the slack channel |
| `slack_team_id` | `String` | Yes | ID of the Slack team / workspace. |
| `summary` | `String` | No | Detailed description of the incident |
| `team_ids` | `Array` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | `String` | Yes | When the incident was last updated |
| `visibility` | `String` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `Float` | No | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `Float` | No | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `Float` | No | Amount of time spent on the incident in total |
| `workload_minutes_working` | `Float` | No | Amount of time spent on the incident in working hours |

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
| `summary` | - | - | - |
| `team_ids` | - | - | - |
| `updated_at` | - | - | - |
| `visibility` | - | - | - |
| `workload_minutes_late` | - | - | - |
| `workload_minutes_sleeping` | - | - | - |
| `workload_minutes_total` | - | - | - |
| `workload_minutes_working` | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Incident.create({
  "idempotency_key" => "example_idempotency_key", # String
  "visibility" => "example_visibility", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Incident.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Incident.load({ "id" => "incident_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentActivityLogEntryEntity

```ruby
incident_activity_log_entry = client.IncidentActivityLogEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Hash` | No | Details of an activity log entry. |
| `created_at` | `String` | Yes | When we recorded the activity |
| `id` | `String` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `String` | Yes | ID of the incident this happened on. |
| `occurred_at` | `String` | Yes | When the activity happened. |
| `title` | `String` | Yes | Human-readable summary of what happened |
| `type` | `String` | Yes | What kind of activity this is. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentActivityLogEntry.list({ "incident_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentActivityLogEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentAttachmentEntity

```ruby
incident_attachment = client.IncidentAttachment
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique identifier of this incident membership |
| `incident_id` | `String` | Yes | ID of the incident to add an attachment to |
| `resource` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentAttachment.create({
  "incident_id" => "example_incident_id", # String
  "resource" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentAttachment.list
results.each { |item| puts item.data_get }
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.IncidentAttachment.remove({ "id" => "incident_attachment_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentFormEntity

```ruby
incident_form = client.IncidentForm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this incident form was created |
| `expressions` | `Array` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `String` | Yes | Which form this is. |
| `id` | `String` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `String` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `Array` | No | Elements on this form, in display order. |
| `updated_at` | `String` | Yes | When this incident form was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentForm.create({
  "expressions" => [], # Array
  "form_type" => "example_form_type", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentForm.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentForm.load({ "id" => "incident_form_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.IncidentForm.remove({ "id" => "incident_form_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IncidentForm.update({
  "id" => "incident_form_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentFormEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentMembershipEntity

```ruby
incident_membership = client.IncidentMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `String` | Yes | The incident to make the user a member of |
| `user_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentMembership.create({
  "incident_id" => "example_incident_id", # String
  "user_id" => "example_user_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentMembershipsV1Entity

```ruby
incident_memberships_v1 = client.IncidentMembershipsV1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `String` | Yes | Revoke memberships to incident |
| `user_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentMembershipsV1.create({
  "incident_id" => "example_incident_id", # String
  "user_id" => "example_user_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentMembershipsV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentParticipantEntity

```ruby
incident_participant = client.IncidentParticipant
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Array` | Yes | Participants who are actively helping with the incident |
| `passive` | `Array` | Yes | Participants who are just observing the incident |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentParticipant.load({ "incident_id" => "incident_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```ruby
incident_participant_workload = client.IncidentParticipantWorkload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `String` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `String` | No | The role they had in the incident |
| `user` | `Hash` | Yes |  |
| `workload` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentParticipantWorkload.list({ "incident_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentRelationshipEntity

```ruby
incident_relationship = client.IncidentRelationship
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique identifier of this incident relationship |
| `incident` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentRelationship.list({ "incident_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentRoleEntity

```ruby
incident_role = client.IncidentRole
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When the role was created |
| `description` | `String` | Yes | Describes the purpose of the role |
| `id` | `String` | Yes | Unique identifier for the role |
| `instructions` | `String` | Yes | Provided to whoever is nominated for the role. |
| `name` | `String` | Yes | Human readable name of the incident role |
| `role_type` | `String` | Yes | Type of incident role |
| `shortform` | `String` | Yes | Short human readable name for Slack. |
| `updated_at` | `String` | Yes | When the role was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentRole.create({
  "description" => "example_description", # String
  "instructions" => "example_instructions", # String
  "name" => "example_name", # String
  "shortform" => "example_shortform", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentRole.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentRole.load({ "id" => "incident_role_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.IncidentRole.remove({ "id" => "incident_role_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IncidentRole.update({
  "id" => "incident_role_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentStatusEntity

```ruby
incident_status = client.IncidentStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `String` | Yes | What category of status it is. |
| `created_at` | `String` | Yes |  |
| `description` | `String` | Yes | Rich text description of the incident status |
| `id` | `String` | Yes | Unique ID of this incident status |
| `name` | `String` | Yes | Unique name of this status |
| `rank` | `Integer` | Yes | Order of this incident status |
| `updated_at` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentStatus.create({
  "category" => "example_category", # String
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentStatus.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentStatus.load({ "id" => "incident_status_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.IncidentStatus.remove({ "id" => "incident_status_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IncidentStatus.update({
  "id" => "incident_status_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTeamMembershipEntity

```ruby
incident_team_membership = client.IncidentTeamMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `String` | Yes |  |
| `team_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentTeamMembership.create({
  "incident_id" => "example_incident_id", # String
  "team_id" => "example_team_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTeamMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTeamMembershipsV1Entity

```ruby
incident_team_memberships_v1 = client.IncidentTeamMembershipsV1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `String` | Yes | Revoke team access to this incident |
| `team_id` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentTeamMembershipsV1.create({
  "incident_id" => "example_incident_id", # String
  "team_id" => "example_team_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTeamMembershipsV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTemplateEntity

```ruby
incident_template = client.IncidentTemplate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this incident template was created |
| `expressions` | `Array` | No | The expressions used by bindings in this template |
| `id` | `String` | Yes | Unique identifier for this incident template |
| `name` | `String` | Yes | The name of this incident template, for the user's reference |
| `template` | `Hash` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `String` | Yes | When this incident template was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentTemplate.create({
  "name" => "example_name", # String
  "template" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentTemplate.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentTemplate.load({ "id" => "incident_template_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.IncidentTemplate.remove({ "id" => "incident_template_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IncidentTemplate.update({
  "id" => "incident_template_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTemplateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTemplatesValidateResultV1Entity

```ruby
incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `Array` | No | The expressions used by bindings in this template |
| `name` | `String` | Yes | The name of this incident template, for the user's reference |
| `template` | `Hash` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `Array` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentTemplatesValidateResultV1.create({
  "name" => "example_name", # String
  "template" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTimelineItemEntity

```ruby
incident_timeline_item = client.IncidentTimelineItem
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `String` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `String` | Yes | When this item was added to the timeline |
| `creator` | `Hash` | Yes |  |
| `description` | `String` | No | Description of the timeline item, in markdown |
| `id` | `String` | Yes | Unique identifier of the timeline item |
| `idempotency_key` | `String` | Yes | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `String` | Yes | Incident to add this item to |
| `timestamp` | `String` | Yes | When the thing this item describes happened. |
| `title` | `String` | Yes | Title of the timeline item |
| `updated_at` | `String` | Yes | When this item was last edited |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentTimelineItem.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_id" => "example_incident_id", # String
  "timestamp" => "example_timestamp", # String
  "title" => "example_title", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentTimelineItem.list({ "incident_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IncidentTimelineItem.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTimelineItemEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTimestampEntity

```ruby
incident_timestamp = client.IncidentTimestamp
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | Unique ID of this incident timestamp |
| `name` | `String` | Yes | Unique name of this timestamp |
| `rank` | `Integer` | Yes | Order in which this timestamp should be shown |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentTimestamp.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentTimestamp.load({ "id" => "incident_timestamp_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentTypeEntity

```ruby
incident_type = client.IncidentType
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `String` | Yes | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `String` | Yes | When this resource was created |
| `description` | `String` | Yes | What is this incident type for? |
| `id` | `String` | Yes | Unique identifier for this Incident Type |
| `is_default` | `Boolean` | Yes | The default Incident Type is used when no other type is explicitly specified |
| `name` | `String` | Yes | The name of this Incident Type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `Boolean` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `String` | Yes | When this resource was last updated |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentType.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IncidentType.load({ "id" => "incident_type_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentUpdateEntity

```ruby
incident_update = client.IncidentUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When the update was created |
| `id` | `String` | Yes | Unique identifier for this incident update |
| `idempotency_key` | `String` | Yes | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `String` | Yes | The incident you want to update |
| `merged_into_incident_id` | `String` | No | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `String` | No | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `Hash` | Yes |  |
| `new_severity` | `Hash` | Yes |  |
| `to_incident_status_id` | `String` | No | Move the incident to this status |
| `to_severity_id` | `String` | No | Move the incident to this severity |
| `updater` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentUpdate.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_id" => "example_incident_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IncidentUpdate.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IncidentsImportPostmortemDocumentResultV2Entity

```ruby
incidents_import_postmortem_document_result_v2 = client.IncidentsImportPostmortemDocumentResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `String` | Yes | The document content as GitHub-Flavored Markdown |
| `title` | `String` | Yes | Title of the postmortem document |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.IncidentsImportPostmortemDocumentResultV2.create({
  "incident_id" => "example_incident_id", # String
  "content" => "example_content", # String
  "title" => "example_title", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IncidentsImportPostmortemDocumentResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpAllowlistEntity

```ruby
ip_allowlist = client.IpAllowlist
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `Array` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `Boolean` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `String` | No | The time this allowlist was last updated |
| `version` | `Integer` | Yes | The version of this IP allowlist |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.IpAllowlist.load()
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.IpAllowlist.update({
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## IpRangeEntity

```ruby
ip_range = client.IpRange
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `String` | Yes | The address in CIDR notation. |
| `description` | `String` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.IpRange.list
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `IpRangeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MaintenanceWindowEntity

```ruby
maintenance_window = client.MaintenanceWindow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_groups` | `Array` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `String` | No | When this maintenance window was archived, if it has been |
| `created_at` | `String` | Yes | When this maintenance window was created |
| `end_at` | `String` | Yes | When the maintenance window ends |
| `escalation_targets` | `Array` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `String` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `String` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `Hash` | Yes |  |
| `name` | `String` | Yes | Human readable name for the maintenance window |
| `notification_message` | `String` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `Array` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `Integer` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `Integer` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `Array` | No | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `Boolean` | Yes | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `Boolean` | Yes | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `Boolean` | Yes | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `String` | Yes | When the maintenance window starts |
| `updated_at` | `String` | Yes | When this maintenance window was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.MaintenanceWindow.create({
  "alert_condition_groups" => [], # Array
  "end_at" => "example_end_at", # String
  "lead" => {}, # Hash
  "name" => "example_name", # String
  "show_in_sidebar" => true, # Boolean
  "start_at" => "example_start_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.MaintenanceWindow.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.MaintenanceWindow.load({ "id" => "maintenance_window_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.MaintenanceWindow.remove({ "id" => "maintenance_window_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.MaintenanceWindow.update({
  "id" => "maintenance_window_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ManagedResourceEntity

```ruby
managed_resource = client.ManagedResource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | Yes | Annotations that track metadata about this resource |
| `managed_by` | `String` | Yes | How is this resource managed |
| `resource_id` | `String` | Yes | The ID of the resource that this relates to |
| `resource_type` | `String` | Yes | The type of the related resource |
| `source_url` | `String` | No | The url of the external repository where this resource is managed (if there is one) |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ManagedResource.create({
  "annotations" => {}, # Hash
  "resource_id" => "example_resource_id", # String
  "resource_type" => "example_resource_type", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ManagedResourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OnCallNotificationMethodPublicV2Entity

```ruby
on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `String` | Yes | The address of this method (e.g. |
| `id` | `String` | Yes | Unique identifier for this notification method |
| `is_usable` | `Boolean` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `String` | Yes | The high-level type of notification method. |
| `phone_details` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.OnCallNotificationMethodPublicV2.list({ "user_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OnCallNotificationPauseEntity

```ruby
on_call_notification_pause = client.OnCallNotificationPause
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `ends_at` | `String` | Yes | When notifications resume |
| `id` | `String` | Yes | Unique identifier for this notification pause |
| `reason` | `String` | No | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | `String` | Yes | When notifications stop being sent to the user |
| `updated_at` | `String` | Yes |  |
| `user_id` | `String` | Yes | The user whose on-call notifications are paused in this time window |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.OnCallNotificationPause.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.OnCallNotificationPause.load({ "id" => "on_call_notification_pause_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OnCallNotificationPauseEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OnCallNotificationRulePublicV2Entity

```ruby
on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Hash` | Yes |  |
| `delay_seconds` | `Integer` | No | Delay in seconds before this rule activates. |
| `id` | `String` | Yes | Unique identifier for this notification rule |
| `method_target` | `Hash` | Yes |  |
| `method_type` | `String` | Yes | The high-level type of notification method. |
| `phone` | `Hash` | Yes |  |
| `rule_type` | `String` | Yes | The urgency level this rule applies to |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.OnCallNotificationRulePublicV2.list({ "user_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayConfigEntity

```ruby
pay_config = client.PayConfig
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `Integer` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `String` | Yes |  |
| `currency` | `String` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `String` | Yes | Unique identifier for this pay config |
| `name` | `String` | Yes | Human readable name for this pay config |
| `one_off_rules` | `Array` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `String` | No | When a published report first priced against this config. |
| `rate_time_unit` | `String` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `String` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `String` | Yes |  |
| `weekly_rules` | `Array` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayConfig.create({
  "base_rate_cents" => 1, # Integer
  "currency" => "example_currency", # String
  "name" => "example_name", # String
  "rate_time_unit" => "example_rate_time_unit", # String
  "timezone" => "example_timezone", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PayConfig.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PayConfig.load({ "id" => "pay_config_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.PayConfig.remove({ "id" => "pay_config_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.PayConfig.update({
  "id" => "pay_config_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayConfigEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayConfigOneOffRuleEntity

```ruby
pay_config_one_off_rule = client.PayConfigOneOffRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `String` | Yes | When this rule stops applying |
| `id` | `String` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `String` | Yes | Human readable name for this rule |
| `rate_cents` | `Integer` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `String` | Yes | When this rule starts applying |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayConfigOneOffRule.create({
  "id" => "example_id", # String
  "end_at" => "example_end_at", # String
  "name" => "example_name", # String
  "rate_cents" => 1, # Integer
  "start_at" => "example_start_at", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PayConfigOneOffRule.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PayConfigOneOffRule.load({ "id" => "pay_config_one_off_rule_id", "pay_config_id" => "pay_config_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.PayConfigOneOffRule.remove({ "id" => "pay_config_one_off_rule_id", "pay_config_id" => "pay_config_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.PayConfigOneOffRule.update({
  "id" => "pay_config_one_off_rule_id",
  "pay_config_id" => "pay_config_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayConfigOneOffRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayConfigWeeklyRuleEntity

```ruby
pay_config_weekly_rule = client.PayConfigWeeklyRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `String` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `String` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `Integer` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `String` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Yes | Days of the week this rule applies on |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayConfigWeeklyRule.create({
  "id" => "example_id", # String
  "end_time" => "example_end_time", # String
  "rate_cents" => 1, # Integer
  "start_time" => "example_start_time", # String
  "weekdays" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PayConfigWeeklyRule.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PayConfigWeeklyRule.load({ "id" => "pay_config_weekly_rule_id", "pay_config_id" => "pay_config_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.PayConfigWeeklyRule.remove({ "id" => "pay_config_weekly_rule_id", "pay_config_id" => "pay_config_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.PayConfigWeeklyRule.update({
  "id" => "pay_config_weekly_rule_id",
  "pay_config_id" => "pay_config_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayConfigWeeklyRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayReportEntity

```ruby
pay_report = client.PayReport
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this report was created |
| `creator` | `Hash` | No |  |
| `end_date` | `String` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | No | Why a report could not be generated |
| `error_message` | `String` | No | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Yes | Unique identifier for this pay report |
| `name` | `String` | Yes | Human readable name for this report |
| `overlapping_shifts` | `String` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `Hash` | Yes |  |
| `pay_config_id` | `String` | No | The pay config to price every shift with. |
| `published_at` | `String` | No | When this report was published. |
| `rotation_filters` | `Array` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `start_date` | `String` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `String` | Yes | When this report was last updated |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayReport.create({
  "end_date" => "example_end_date", # String
  "name" => "example_name", # String
  "pay_config_expression" => {}, # Hash
  "schedule_ids" => [], # Array
  "start_date" => "example_start_date", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PayReport.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PayReport.load({ "id" => "pay_report_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.PayReport.remove({ "id" => "pay_report_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayReportEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayReportsPublishResultV2Entity

```ruby
pay_reports_publish_result_v2 = client.PayReportsPublishResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `Array` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `String` | Yes | When this report was created |
| `creator` | `Hash` | No |  |
| `end_date` | `String` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | No | Why a report could not be generated |
| `error_message` | `String` | No | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Yes | Unique identifier for this pay report |
| `name` | `String` | Yes | Human readable name for this report |
| `overlapping_shifts` | `String` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `String` | No | When this report was published. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `String` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `String` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `String` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayReportsPublishResultV2.create({
  "pay_report_id" => "example_pay_report_id", # String
  "cc_emails" => [], # Array
  "send_user_breakdowns" => "example_send_user_breakdowns", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayReportsPublishResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayReportsUnpublishResultV2Entity

```ruby
pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this report was created |
| `creator` | `Hash` | No |  |
| `end_date` | `String` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | No | Why a report could not be generated |
| `error_message` | `String` | No | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Yes | Unique identifier for this pay report |
| `name` | `String` | Yes | Human readable name for this report |
| `overlapping_shifts` | `String` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `String` | No | When this report was published. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `start_date` | `String` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `String` | Yes | Why this report is being unpublished |
| `updated_at` | `String` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PayReportsUnpublishResultV2.create({
  "pay_report_id" => "example_pay_report_id", # String
  "unpublish_reason" => "example_unpublish_reason", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayReportsUnpublishResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PayReportsV2Entity

```ruby
pay_reports_v2 = client.PayReportsV2
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PayReportsV2.load({ "pay_report_id" => "pay_report_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PayReportsV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PolicyEntity

```ruby
policy = client.Policy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `Hash` | Yes |  |
| `conditions` | `Array` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `String` | Yes |  |
| `debrief` | `Hash` | Yes | Set when policy_type is debrief. |
| `description` | `String` | No | Human readable description of the policy |
| `expressions` | `Array` | No | The expressions relating to this policy |
| `follow_up` | `Hash` | Yes | Set when policy_type is follow_up. |
| `id` | `String` | Yes | Unique ID of the policy |
| `name` | `String` | Yes | Human readable name of the policy |
| `on_call_readiness` | `Hash` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `String` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `Hash` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `Hash` | Yes | Detects gaps in on-call coverage. |
| `status` | `String` | Yes | Disabled policies stop evaluating but keep their config |
| `updated_at` | `String` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignment_rules` | - | - | - | - | - |
| `conditions` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `debrief` | - | - | - | - | - |
| `description` | - | - | Yes | Yes | - |
| `expressions` | - | - | - | - | - |
| `follow_up` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `on_call_readiness` | - | - | - | - | - |
| `policy_type` | - | - | - | - | - |
| `post_mortem` | - | - | - | - | - |
| `schedule` | - | - | - | - | - |
| `status` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Policy.create({
  "assignment_rules" => {}, # Hash
  "conditions" => [], # Array
  "debrief" => {}, # Hash
  "description" => "example_description", # String
  "follow_up" => {}, # Hash
  "name" => "example_name", # String
  "policy_type" => "example_policy_type", # String
  "post_mortem" => {}, # Hash
  "schedule" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Policy.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Policy.load({ "id" => "policy_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Policy.remove({ "id" => "policy_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Policy.update({
  "id" => "policy_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PolicyFindingEntity

```ruby
policy_finding = client.PolicyFinding
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `days` | `Integer` | No | Days outside the policy's due date |
| `debrief` | `Hash` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Hash` | Yes |  |
| `due_at` | `String` | No | When this finding becomes overdue |
| `follow_up` | `Hash` | Yes | Set when policy_type is follow_up. |
| `id` | `String` | Yes | Unique ID of the finding |
| `last_checked_at` | `String` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | Yes | The policy this finding was raised against |
| `policy_type` | `String` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Hash` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Yes | Set when policy_type is shift_conflict. |
| `state` | `String` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `String` | Yes |  |
| `vacation_conflict` | `Hash` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PolicyFinding.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PolicyFinding.load({ "id" => "policy_finding_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PolicyFindingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PolicyFindingsDismissResultV2Entity

```ruby
policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `days` | `Integer` | No | Days outside the policy's due date |
| `debrief` | `Hash` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Hash` | Yes |  |
| `due_at` | `String` | No | When this finding becomes overdue |
| `follow_up` | `Hash` | Yes | Set when policy_type is follow_up. |
| `id` | `String` | Yes | Unique ID of the finding |
| `last_checked_at` | `String` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | Yes | The policy this finding was raised against |
| `policy_type` | `String` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Yes | Set when policy_type is post_mortem. |
| `reason` | `String` | Yes | Why this finding is being dismissed |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Hash` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Yes | Set when policy_type is shift_conflict. |
| `state` | `String` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `String` | Yes |  |
| `vacation_conflict` | `Hash` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PolicyFindingsDismissResultV2.create({
  "policy_finding_id" => "example_policy_finding_id", # String
  "reason" => "example_reason", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PolicyFindingsRestoreResultV2Entity

```ruby
policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `days` | `Integer` | No | Days outside the policy's due date |
| `debrief` | `Hash` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Hash` | Yes |  |
| `due_at` | `String` | No | When this finding becomes overdue |
| `follow_up` | `Hash` | Yes | Set when policy_type is follow_up. |
| `id` | `String` | Yes | Unique ID of the finding |
| `last_checked_at` | `String` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | Yes | The policy this finding was raised against |
| `policy_type` | `String` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Hash` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Yes | Set when policy_type is shift_conflict. |
| `state` | `String` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `String` | Yes |  |
| `vacation_conflict` | `Hash` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PolicyFindingsRestoreResultV2.create({
  "policy_finding_id" => "example_policy_finding_id", # String
  "created_at" => "example_created_at", # String
  "debrief" => {}, # Hash
  "dismissal" => {}, # Hash
  "follow_up" => {}, # Hash
  "id" => "example_id", # String
  "last_checked_at" => "example_last_checked_at", # String
  "on_call_readiness" => {}, # Hash
  "policy_id" => "example_policy_id", # String
  "policy_type" => "example_policy_type", # String
  "post_mortem" => {}, # Hash
  "responsible_users" => [], # Array
  "schedule" => {}, # Hash
  "shift_conflict" => {}, # Hash
  "state" => "example_state", # String
  "updated_at" => "example_updated_at", # String
  "vacation_conflict" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostmortemDocumentEntity

```ruby
postmortem_document = client.PostmortemDocument
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | Timestamp for when the document was created |
| `document_url` | `String` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `Array` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `Array` | Yes | URLs of any external locations this document has been exported to |
| `id` | `String` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `String` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `String` | Yes | The current status of this post-mortem document |
| `title` | `String` | Yes | The display title of the post-mortem document |
| `type` | `String` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `String` | Yes | Timestamp for when the document was last updated |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.PostmortemDocument.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PostmortemDocument.load({ "id" => "postmortem_document_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.PostmortemDocument.update({
  "id" => "postmortem_document_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostmortemDocumentsAttachResultV1Entity

```ruby
postmortem_documents_attach_result_v1 = client.PostmortemDocumentsAttachResultV1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document_provider` | `String` | No | The provider hosting the document. |
| `incident_id` | `String` | Yes | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | `String` | Yes | A URL pointing to the externally-hosted post-mortem document |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.PostmortemDocumentsAttachResultV1.create({
  "incident_id" => "example_incident_id", # String
  "permalink" => "example_permalink", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostmortemDocumentsAttachResultV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PostmortemDocumentsShowContentResultV1Entity

```ruby
postmortem_documents_show_content_result_v1 = client.PostmortemDocumentsShowContentResultV1
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markdown` | `String` | Yes | The full content of the post-mortem document, rendered as markdown. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.PostmortemDocumentsShowContentResultV1.load({ "postmortem_document_id" => "postmortem_document_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostmortemDocumentsShowContentResultV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleEntity

```ruby
schedule = client.Schedule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | Yes | Annotations that track metadata about this resource |
| `config` | `Hash` | Yes |  |
| `created_at` | `String` | Yes |  |
| `current_shifts` | `Array` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique internal ID of the schedule |
| `name` | `String` | Yes | Human readable name synced from external provider |
| `next_shifts` | `Array` | No | The shifts after the next changeover. |
| `permalink` | `String` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `Array` | Yes | IDs of teams that own this schedule |
| `timezone` | `String` | Yes | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Schedule.create({
  "holidays_public_config" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Schedule.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Schedule.load({ "id" => "schedule_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Schedule.remove({ "id" => "schedule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Schedule.update({
  "id" => "schedule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleEntriesListPayloadV2Entity

```ruby
schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `String` | No | The end of the window to preview entries for. |
| `entry_window_start` | `String` | No | The start of the window to preview entries for. |
| `final` | `Array` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `Array` | Yes | Overrides that apply within the requested window |
| `schedule` | `Hash` | Yes |  |
| `scheduled` | `Array` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleEntriesListPayloadV2.create({
  "schedule_id" => "example_schedule_id", # String
  "schedule" => {}, # Hash
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleEntryEntity

```ruby
schedule_entry = client.ScheduleEntry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `Hash` | Yes |  |
| `schedule_entries` | `Hash` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleEntry.load({ "schedule_id" => "schedule_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleOverrideEntity

```ruby
schedule_override = client.ScheduleOverride
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `end_at` | `String` | Yes | End of the override |
| `id` | `String` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `String` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `String` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `String` | Yes | The schedule that this override applies to |
| `start_at` | `String` | Yes | Start of the override |
| `updated_at` | `String` | Yes |  |
| `user` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleOverride.create({
  "end_at" => "example_end_at", # String
  "layer_id" => "example_layer_id", # String
  "rotation_id" => "example_rotation_id", # String
  "schedule_id" => "example_schedule_id", # String
  "start_at" => "example_start_at", # String
  "user" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ScheduleOverride.list({ "schedule_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleOverride.load({ "id" => "schedule_override_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ScheduleOverride.remove({ "id" => "schedule_override_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ScheduleOverride.update({
  "id" => "schedule_override_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleOverrideEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleReplicaEntity

```ruby
schedule_replica = client.ScheduleReplica
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this schedule replica was first created |
| `id` | `String` | Yes | Unique identifier of the schedule replica |
| `last_sync_error` | `String` | No | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `String` | No | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `Integer` | No | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `String` | Yes | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `String` | Yes | The external provider where this schedule is replicated to |
| `replica_provider_id` | `String` | Yes | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `String` | Yes | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `Array` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `String` | Yes | When this schedule replica was last updated |
| `user_statuses` | `Array` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleReplica.create({
  "id" => "example_id", # String
  "replica_fallback_user_id" => "example_replica_fallback_user_id", # String
  "replica_provider" => "example_replica_provider", # String
  "replica_provider_id" => "example_replica_provider_id", # String
  "sources" => [], # Array
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ScheduleReplica.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleReplica.load({ "id" => "schedule_replica_id", "schedule_id" => "schedule_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ScheduleReplica.remove({ "id" => "schedule_replica_id", "schedule_id" => "schedule_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleSyncRuleEntity

```ruby
schedule_sync_rule = client.ScheduleSyncRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | No | Annotations that track metadata about this resource |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `Array` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `String` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `String` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `Hash` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `String` | Yes | The sync target ID this rule links to |
| `sync_type` | `String` | Yes | Which schedule members sync to the user group |
| `updated_at` | `String` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `permanent_member_user_ids` | - | - | Yes | Yes | - |
| `rotation_id` | - | - | - | - | - |
| `schedule_id` | - | - | - | - | - |
| `schedule_sync_target` | - | - | - | - | - |
| `schedule_sync_target_id` | - | - | - | - | - |
| `sync_type` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleSyncRule.create({
  "id" => "example_id", # String
  "schedule_sync_target_id" => "example_schedule_sync_target_id", # String
  "sync_type" => "example_sync_type", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ScheduleSyncRule.list({ "id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleSyncRule.load({ "id" => "schedule_sync_rule_id", "schedule_id" => "schedule_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ScheduleSyncRule.remove({ "id" => "schedule_sync_rule_id", "schedule_id" => "schedule_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ScheduleSyncRule.update({
  "id" => "schedule_sync_rule_id",
  "schedule_id" => "schedule_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScheduleSyncTargetEntity

```ruby
schedule_sync_target = client.ScheduleSyncTarget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `Boolean` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `Hash` | No | Annotations that track metadata about this resource |
| `created_at` | `String` | Yes |  |
| `id` | `String` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `Array` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `Hash` | Yes |  |
| `slack_team_id` | `String` | Yes | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `String` | Yes | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `String` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.ScheduleSyncTarget.create({
  "add_bot_to_group" => true, # Boolean
  "new_slack_user_group" => {}, # Hash
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.ScheduleSyncTarget.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.ScheduleSyncTarget.load({ "id" => "schedule_sync_target_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.ScheduleSyncTarget.remove({ "id" => "schedule_sync_target_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.ScheduleSyncTarget.update({
  "id" => "schedule_sync_target_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SecretEntity

```ruby
secret = client.Secret
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes |  |
| `description` | `String` | No | Optional description of what this secret is for |
| `id` | `String` | Yes | Unique identifier for this secret |
| `last_four_chars` | `String` | No | The last four characters of the current value, for masked display. |
| `name` | `String` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this secret. |
| `secret` | `Hash` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `String` | Yes |  |
| `value` | `String` | Yes | The secret's plaintext value. |
| `version` | `Integer` | Yes | The current version number, incremented on each rotation |
| `versions` | `Array` | Yes | The secret's versions, newest first |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Secret.create({
  "name" => "example_name", # String
  "value" => "example_value", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Secret.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Secret.load({ "id" => "secret_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Secret.remove({ "id" => "secret_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Secret.update({
  "id" => "secret_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SeverityEntity

```ruby
severity = client.Severity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When the action was created |
| `description` | `String` | Yes | Description of the severity |
| `id` | `String` | Yes | Unique identifier of the severity |
| `name` | `String` | Yes | Human readable name of the severity |
| `rank` | `Integer` | Yes | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `String` | Yes | When the action was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `rank` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Severity.create({
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Severity.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Severity.load({ "id" => "severity_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Severity.remove({ "id" => "severity_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Severity.update({
  "id" => "severity_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SeverityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageEntity

```ruby
status_page = client.StatusPage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | The description of this status page |
| `id` | `String` | Yes | Unique ID of this status page |
| `name` | `String` | Yes | The title of this status page |
| `public_url` | `String` | No | The public URL of this status page |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatusPage.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPage.load({ "id" => "status_page_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageComponentEntity

```ruby
status_page_component = client.StatusPageComponent
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No | Optional short description of this component |
| `id` | `String` | Yes | Unique identifier for this component |
| `management_meta` | `Hash` | Yes |  |
| `name` | `String` | Yes | Human-readable name for the component |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPageComponent.create({
  "name" => "example_name", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatusPageComponent.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPageComponent.load({ "id" => "status_page_component_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.StatusPageComponent.remove({ "id" => "status_page_component_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.StatusPageComponent.update({
  "id" => "status_page_component_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageComponentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageComponentAvailabilityEntity

```ruby
status_page_component_availability = client.StatusPageComponentAvailability
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `availability_percent` | `String` | No | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `String` | Yes | ID of the component. |
| `data_available_since` | `String` | Yes | Earliest time we have status data for this component. |
| `end_at` | `String` | Yes | End of the requested availability window |
| `start_at` | `String` | Yes | Start of the requested availability window |
| `status_page_id` | `String` | Yes | ID of the status page |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPageComponentAvailability.load({ "component_id" => "component_id", "status_page_id" => "status_page_id", "end_at" => "end_at", "start_at" => "start_at" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageComponentAvailabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageIncidentEntity

```ruby
status_page_incident = client.StatusPageIncident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impacts` | `Array` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `Array` | No | An array of mappings from component ID to current component status |
| `id` | `String` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `String` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `String` | Yes | Current status for this incident |
| `message` | `String` | Yes | Markdown initial update on this status page incident |
| `name` | `String` | Yes | A title for the incident |
| `notify_subscribers` | `Boolean` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `String` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `String` | Yes | The ID of the corresponding status page |
| `updates` | `Array` | Yes | A list of updates posted to this status page incident |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPageIncident.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_status" => "example_incident_status", # String
  "message" => "example_message", # String
  "name" => "example_name", # String
  "notify_subscribers" => true, # Boolean
  "status_page_id" => "example_status_page_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatusPageIncident.list({ "status_page_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPageIncident.load({ "id" => "status_page_incident_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.StatusPageIncident.update({
  "id" => "status_page_incident_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageIncidentUpdateEntity

```ruby
status_page_incident_update = client.StatusPageIncidentUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `Array` | No | An array of mappings from component ID to component status. |
| `incident_status` | `String` | No | Optional new status for this status page incident. |
| `message` | `String` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `Boolean` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `String` | Yes | ID of the status page incident |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPageIncidentUpdate.create({
  "message" => "example_message", # String
  "notify_subscribers" => true, # Boolean
  "status_page_incident_id" => "example_status_page_incident_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageLinkedResponseIncidentEntity

```ruby
status_page_linked_response_incident = client.StatusPageLinkedResponseIncident
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `String` | Yes | ID of the Response incident |
| `linked_at` | `String` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatusPageLinkedResponseIncident.list({ "incident_id" => "example", "status_page_id" => "example" })
results.each { |item| puts item.data_get }
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageLinkedResponseIncidentEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageMaintenanceEntity

```ruby
status_page_maintenance = client.StatusPageMaintenance
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_ids` | `Array` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `Boolean` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `Array` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `String` | Yes | The time the maintenance window ends |
| `id` | `String` | Yes | A unique ID for this status page maintenance window |
| `idempotency_key` | `String` | Yes | A unique key to de-duplicate requests. |
| `maintenance_status` | `String` | Yes | Current status for this maintenance window |
| `message` | `String` | Yes | Markdown initial update on this status page maintenance window |
| `name` | `String` | Yes | A title for the maintenance window |
| `notify_subscribers` | `Boolean` | Yes | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `String` | Yes | When this status page maintenance window was published to the status page |
| `start_at` | `String` | Yes | The time the maintenance window starts |
| `status_page_id` | `String` | Yes | The ID of the corresponding status page |
| `updates` | `Array` | Yes | A list of updates posted to this status page maintenance window |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `affected_component_ids` | - | - | - | - | - |
| `automate_maintenance_status` | - | - | Yes | - | - |
| `component_maintenance_periods` | - | - | - | - | - |
| `end_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `idempotency_key` | - | - | - | - | - |
| `maintenance_status` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notify_subscribers` | - | - | - | - | - |
| `published_at` | - | - | - | - | - |
| `start_at` | - | - | - | - | - |
| `status_page_id` | - | - | - | - | - |
| `updates` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPageMaintenance.create({
  "affected_component_ids" => [], # Array
  "end_at" => "example_end_at", # String
  "idempotency_key" => "example_idempotency_key", # String
  "maintenance_status" => "example_maintenance_status", # String
  "message" => "example_message", # String
  "name" => "example_name", # String
  "notify_subscribers" => true, # Boolean
  "start_at" => "example_start_at", # String
  "status_page_id" => "example_status_page_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.StatusPageMaintenance.list({ "status_page_id" => "example" })
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPageMaintenance.load({ "id" => "status_page_maintenance_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.StatusPageMaintenance.remove({ "id" => "status_page_maintenance_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.StatusPageMaintenance.update({
  "id" => "status_page_maintenance_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageMaintenanceUpdateEntity

```ruby
status_page_maintenance_update = client.StatusPageMaintenanceUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `Array` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `String` | No | Optional new status for this status page maintenance window. |
| `message` | `String` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `Boolean` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `String` | Yes | ID of the status page maintenance window |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPageMaintenanceUpdate.create({
  "message" => "example_message", # String
  "notify_subscribers" => true, # Boolean
  "status_page_maintenance_id" => "example_status_page_maintenance_id", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPageStructureEntity

```ruby
status_page_structure = client.StatusPageStructure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_structure` | `Hash` | Yes |  |
| `display_uptime_mode` | `String` | Yes | How the page shows uptime against its components |
| `id` | `String` | No |  |
| `management_meta` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.StatusPageStructure.load({ "id" => "status_page_structure_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity

```ruby
status_pages_create_status_page_retrospective_incident_result_v2 = client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotency_key` | `String` | Yes | A unique key to de-duplicate requests. |
| `name` | `String` | Yes | A title for the incident |
| `status_page_id` | `String` | Yes | ID of the status page. |
| `updates` | `Array` | Yes | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2.create({
  "idempotency_key" => "example_idempotency_key", # String
  "name" => "example_name", # String
  "status_page_id" => "example_status_page_id", # String
  "updates" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamEntity

```ruby
team = client.Team
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `Hash` | Yes |  |
| `id` | `String` | Yes | Unique ID of the team |
| `members` | `Array` | Yes | Members of the team |
| `name` | `String` | Yes | Name of the team |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Team.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Team.load({ "id" => "team_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TelemetryDataSourceEntity

```ruby
telemetry_data_source = client.TelemetryDataSource
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | Yes | When this data source was created |
| `datadog_config` | `Hash` | No | Datadog-specific credential updates |
| `enabled` | `Boolean` | Yes | Whether this data source is enabled |
| `grafana_config` | `Hash` | No | Grafana-specific credential and endpoint updates |
| `id` | `String` | Yes | Unique identifier for this data source |
| `name` | `String` | Yes | Human-readable name of the data source |
| `provider` | `String` | Yes | Provider that hosts this data source |
| `source_type` | `String` | Yes | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `String` | Yes | When this data source was last updated |
| `version` | `String` | No | Upstream tool version captured at probe time (e.g. |

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

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.TelemetryDataSource.update({
  "id" => "id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TelemetryDataSourceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `Hash` | Yes |  |
| `custom_roles` | `Array` | Yes |  |
| `email` | `String` | No | Email address of the user. |
| `id` | `String` | Yes | Unique identifier of the user |
| `is_active` | `Boolean` | Yes | Whether the user is active. |
| `name` | `String` | Yes | Name of the user |
| `role` | `String` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `Hash` | Yes |  |
| `slack_user_id` | `String` | No | Slack ID of the user |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.User.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.User.load({ "id" => "user_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsersShowPagingProviderResultV2Entity

```ruby
users_show_paging_provider_result_v2 = client.UsersShowPagingProviderResultV2
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `preferred_escalation_provider` | `String` | No | The user's effective escalation provider. |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `preferred_escalation_provider` | - | Yes |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.UsersShowPagingProviderResultV2.create({
  "user_id" => "example_user_id", # String
  "preferred_escalation_provider" => "example_preferred_escalation_provider", # String
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.UsersShowPagingProviderResultV2.load({ "user_id" => "user_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsersShowPagingProviderResultV2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UtilitiesV1Entity

```ruby
utilities_v1 = client.UtilitiesV1
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.UtilitiesV1.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UtilitiesV1Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowEntity

```ruby
workflow = client.Workflow
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Hash` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `String` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `Array` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `Boolean` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `Hash` | Yes |  |
| `expressions` | `Array` | Yes | The expressions to use in the workflow |
| `folder` | `String` | No | Folder to display the workflow in |
| `form_fields` | `Array` | No | User-configured form fields available in the workflow scope. |
| `id` | `String` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `Boolean` | No | Whether to include private escalations |
| `include_private_incidents` | `Boolean` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `Hash` | Yes |  |
| `name` | `String` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `Array` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `String` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `String` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `Array` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `String` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `String` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `Boolean` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `String` | No | What state this workflow is in |
| `steps` | `Array` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `String` | Yes | Trigger to set on the workflow |
| `version` | `Integer` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `Hash` | Yes |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Returns the created entity and raises on error.

```ruby
result = client.Workflow.create({
  "condition_groups" => [], # Array
  "continue_on_step_error" => true, # Boolean
  "delay" => {}, # Hash
  "expressions" => [], # Array
  "name" => "example_name", # String
  "once_for" => [], # Array
  "runs_on_incident_modes" => [], # Array
  "runs_on_incidents" => "example_runs_on_incidents", # String
  "steps" => [], # Array
  "trigger" => "example_trigger", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.Workflow.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.Workflow.load({ "id" => "workflow_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```ruby
result = client.Workflow.remove({ "id" => "workflow_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```ruby
result = client.Workflow.update({
  "id" => "workflow_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WorkflowRunEntity

```ruby
workflow_run = client.WorkflowRun
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancelled_at` | `String` | No | If the run was cancelled, this is when |
| `created_at` | `String` | Yes | When the resource was created |
| `enqueued_at` | `String` | No | When the run was enqueued for execution |
| `error` | `String` | No | Error produced by the workflow, if it failed |
| `id` | `String` | Yes | Unique identifier for the workflow run |
| `incident_id` | `String` | No | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `String` | No | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `Array` | Yes | Status of each step as it is worked |
| `scheduled_at` | `String` | Yes | When the run was scheduled for |
| `updated_at` | `String` | Yes | When the resource was last updated |
| `workflow_id` | `String` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `String` | No | Name of the underlying workflow |
| `workflow_version_id` | `String` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `Integer` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record; `data_get` reads each record. Raises on error.

```ruby
results = client.WorkflowRun.list
results.each { |item| puts item.data_get }
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get` reads, and raises on error.

```ruby
result = client.WorkflowRun.load({ "id" => "workflow_run_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name -> String`

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
| `secrets` | 0.1.0 | Secrets |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ruby
client = IncidentIoSDK.new({
  "feature" => {
    "debug" => { "active" => true },
    "idempotency" => { "active" => true },
    "metrics" => { "active" => true },
    "paging" => { "active" => true },
    "ratelimit" => { "active" => true },
    "retry" => { "active" => true },
    "secrets" => { "active" => true },
    "test" => { "active" => true },
    "timeout" => { "active" => true },
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

`ratelimit`, `retry`, `secrets`, `timeout` wrap the transport. Each
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

#### `secrets`

Secrets.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `cache` | `true` |
| `exchange` | `{active: false, method: 'POST', path: 'auth/token', refresh: '', request: 'refresh_token', response: 'access_token', retries: 1, statuses: [401]}` |
| `name` | `'apikey'` |
| `providers` | `[]` |

**Usage**

Set `feature.secrets.active` to true in the client options, and override any option above in the same entry. Every option keeps
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


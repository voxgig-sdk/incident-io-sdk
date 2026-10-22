# IncidentIo PHP SDK Reference

Complete API reference for the IncidentIo PHP SDK.


## IncidentIoSDK

### Constructor

```php
require_once __DIR__ . '/incidentio_sdk.php';

$client = new IncidentIoSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = IncidentIoSDK::test();
```


### Instance Methods

#### `Action($data = null)`

Create a new `ActionEntity` instance. Pass `null` for no initial data.

#### `Alert($data = null)`

Create a new `AlertEntity` instance. Pass `null` for no initial data.

#### `AlertAttribute($data = null)`

Create a new `AlertAttributeEntity` instance. Pass `null` for no initial data.

#### `AlertEventsV2($data = null)`

Create a new `AlertEventsV2Entity` instance. Pass `null` for no initial data.

#### `AlertNote($data = null)`

Create a new `AlertNoteEntity` instance. Pass `null` for no initial data.

#### `AlertRoute($data = null)`

Create a new `AlertRouteEntity` instance. Pass `null` for no initial data.

#### `AlertSource($data = null)`

Create a new `AlertSourceEntity` instance. Pass `null` for no initial data.

#### `AlertSourcesV2($data = null)`

Create a new `AlertSourcesV2Entity` instance. Pass `null` for no initial data.

#### `AlertTag($data = null)`

Create a new `AlertTagEntity` instance. Pass `null` for no initial data.

#### `AlertsAddTagsResultV2($data = null)`

Create a new `AlertsAddTagsResultV2Entity` instance. Pass `null` for no initial data.

#### `AlertsSetTagsResultV2($data = null)`

Create a new `AlertsSetTagsResultV2Entity` instance. Pass `null` for no initial data.

#### `AlertsTransitionIncidentAlertResultV2($data = null)`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance. Pass `null` for no initial data.

#### `AnnouncementRule($data = null)`

Create a new `AnnouncementRuleEntity` instance. Pass `null` for no initial data.

#### `AnnouncementTemplate($data = null)`

Create a new `AnnouncementTemplateEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `CallRoute($data = null)`

Create a new `CallRouteEntity` instance. Pass `null` for no initial data.

#### `CallRouteAllowedCaller($data = null)`

Create a new `CallRouteAllowedCallerEntity` instance. Pass `null` for no initial data.

#### `CallRouteOption($data = null)`

Create a new `CallRouteOptionEntity` instance. Pass `null` for no initial data.

#### `CallSession($data = null)`

Create a new `CallSessionEntity` instance. Pass `null` for no initial data.

#### `CallTranscriptEntry($data = null)`

Create a new `CallTranscriptEntryEntity` instance. Pass `null` for no initial data.

#### `CatalogEntry($data = null)`

Create a new `CatalogEntryEntity` instance. Pass `null` for no initial data.

#### `CatalogResource($data = null)`

Create a new `CatalogResourceEntity` instance. Pass `null` for no initial data.

#### `CatalogType($data = null)`

Create a new `CatalogTypeEntity` instance. Pass `null` for no initial data.

#### `CatalogTypeSchema($data = null)`

Create a new `CatalogTypeSchemaEntity` instance. Pass `null` for no initial data.

#### `CatalogV3($data = null)`

Create a new `CatalogV3Entity` instance. Pass `null` for no initial data.

#### `CustomField($data = null)`

Create a new `CustomFieldEntity` instance. Pass `null` for no initial data.

#### `CustomFieldOption($data = null)`

Create a new `CustomFieldOptionEntity` instance. Pass `null` for no initial data.

#### `Escalation($data = null)`

Create a new `EscalationEntity` instance. Pass `null` for no initial data.

#### `EscalationPath($data = null)`

Create a new `EscalationPathEntity` instance. Pass `null` for no initial data.

#### `EscalationPathTemplate($data = null)`

Create a new `EscalationPathTemplateEntity` instance. Pass `null` for no initial data.

#### `EscalationsCheckEscalationPermissionsResultV2($data = null)`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance. Pass `null` for no initial data.

#### `EscalationsReassignEscalationResultV2($data = null)`

Create a new `EscalationsReassignEscalationResultV2Entity` instance. Pass `null` for no initial data.

#### `EscalationsV2($data = null)`

Create a new `EscalationsV2Entity` instance. Pass `null` for no initial data.

#### `FollowUp($data = null)`

Create a new `FollowUpEntity` instance. Pass `null` for no initial data.

#### `FollowUpsConnectExternalIssueResultV2($data = null)`

Create a new `FollowUpsConnectExternalIssueResultV2Entity` instance. Pass `null` for no initial data.

#### `FollowUpsConnectExternalIssueResultV3($data = null)`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance. Pass `null` for no initial data.

#### `FollowUpsCreateFromLinkResultV3($data = null)`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance. Pass `null` for no initial data.

#### `HeartbeatV2($data = null)`

Create a new `HeartbeatV2Entity` instance. Pass `null` for no initial data.

#### `Identity($data = null)`

Create a new `IdentityEntity` instance. Pass `null` for no initial data.

#### `Incident($data = null)`

Create a new `IncidentEntity` instance. Pass `null` for no initial data.

#### `IncidentActivityLogEntry($data = null)`

Create a new `IncidentActivityLogEntryEntity` instance. Pass `null` for no initial data.

#### `IncidentAttachment($data = null)`

Create a new `IncidentAttachmentEntity` instance. Pass `null` for no initial data.

#### `IncidentForm($data = null)`

Create a new `IncidentFormEntity` instance. Pass `null` for no initial data.

#### `IncidentMembership($data = null)`

Create a new `IncidentMembershipEntity` instance. Pass `null` for no initial data.

#### `IncidentMembershipsV1($data = null)`

Create a new `IncidentMembershipsV1Entity` instance. Pass `null` for no initial data.

#### `IncidentParticipant($data = null)`

Create a new `IncidentParticipantEntity` instance. Pass `null` for no initial data.

#### `IncidentParticipantWorkload($data = null)`

Create a new `IncidentParticipantWorkloadEntity` instance. Pass `null` for no initial data.

#### `IncidentRelationship($data = null)`

Create a new `IncidentRelationshipEntity` instance. Pass `null` for no initial data.

#### `IncidentRole($data = null)`

Create a new `IncidentRoleEntity` instance. Pass `null` for no initial data.

#### `IncidentStatus($data = null)`

Create a new `IncidentStatusEntity` instance. Pass `null` for no initial data.

#### `IncidentTeamMembership($data = null)`

Create a new `IncidentTeamMembershipEntity` instance. Pass `null` for no initial data.

#### `IncidentTeamMembershipsV1($data = null)`

Create a new `IncidentTeamMembershipsV1Entity` instance. Pass `null` for no initial data.

#### `IncidentTemplate($data = null)`

Create a new `IncidentTemplateEntity` instance. Pass `null` for no initial data.

#### `IncidentTemplatesValidateResultV1($data = null)`

Create a new `IncidentTemplatesValidateResultV1Entity` instance. Pass `null` for no initial data.

#### `IncidentTimelineItem($data = null)`

Create a new `IncidentTimelineItemEntity` instance. Pass `null` for no initial data.

#### `IncidentTimestamp($data = null)`

Create a new `IncidentTimestampEntity` instance. Pass `null` for no initial data.

#### `IncidentType($data = null)`

Create a new `IncidentTypeEntity` instance. Pass `null` for no initial data.

#### `IncidentUpdate($data = null)`

Create a new `IncidentUpdateEntity` instance. Pass `null` for no initial data.

#### `IncidentsImportPostmortemDocumentResultV2($data = null)`

Create a new `IncidentsImportPostmortemDocumentResultV2Entity` instance. Pass `null` for no initial data.

#### `IpAllowlist($data = null)`

Create a new `IpAllowlistEntity` instance. Pass `null` for no initial data.

#### `IpRange($data = null)`

Create a new `IpRangeEntity` instance. Pass `null` for no initial data.

#### `MaintenanceWindow($data = null)`

Create a new `MaintenanceWindowEntity` instance. Pass `null` for no initial data.

#### `ManagedResource($data = null)`

Create a new `ManagedResourceEntity` instance. Pass `null` for no initial data.

#### `OnCallNotificationMethodPublicV2($data = null)`

Create a new `OnCallNotificationMethodPublicV2Entity` instance. Pass `null` for no initial data.

#### `OnCallNotificationPause($data = null)`

Create a new `OnCallNotificationPauseEntity` instance. Pass `null` for no initial data.

#### `OnCallNotificationRulePublicV2($data = null)`

Create a new `OnCallNotificationRulePublicV2Entity` instance. Pass `null` for no initial data.

#### `PayConfig($data = null)`

Create a new `PayConfigEntity` instance. Pass `null` for no initial data.

#### `PayConfigOneOffRule($data = null)`

Create a new `PayConfigOneOffRuleEntity` instance. Pass `null` for no initial data.

#### `PayConfigWeeklyRule($data = null)`

Create a new `PayConfigWeeklyRuleEntity` instance. Pass `null` for no initial data.

#### `PayReport($data = null)`

Create a new `PayReportEntity` instance. Pass `null` for no initial data.

#### `PayReportsPublishResultV2($data = null)`

Create a new `PayReportsPublishResultV2Entity` instance. Pass `null` for no initial data.

#### `PayReportsUnpublishResultV2($data = null)`

Create a new `PayReportsUnpublishResultV2Entity` instance. Pass `null` for no initial data.

#### `PayReportsV2($data = null)`

Create a new `PayReportsV2Entity` instance. Pass `null` for no initial data.

#### `Policy($data = null)`

Create a new `PolicyEntity` instance. Pass `null` for no initial data.

#### `PolicyFinding($data = null)`

Create a new `PolicyFindingEntity` instance. Pass `null` for no initial data.

#### `PolicyFindingsDismissResultV2($data = null)`

Create a new `PolicyFindingsDismissResultV2Entity` instance. Pass `null` for no initial data.

#### `PolicyFindingsRestoreResultV2($data = null)`

Create a new `PolicyFindingsRestoreResultV2Entity` instance. Pass `null` for no initial data.

#### `PostmortemDocument($data = null)`

Create a new `PostmortemDocumentEntity` instance. Pass `null` for no initial data.

#### `PostmortemDocumentsAttachResultV1($data = null)`

Create a new `PostmortemDocumentsAttachResultV1Entity` instance. Pass `null` for no initial data.

#### `PostmortemDocumentsShowContentResultV1($data = null)`

Create a new `PostmortemDocumentsShowContentResultV1Entity` instance. Pass `null` for no initial data.

#### `Schedule($data = null)`

Create a new `ScheduleEntity` instance. Pass `null` for no initial data.

#### `ScheduleEntriesListPayloadV2($data = null)`

Create a new `ScheduleEntriesListPayloadV2Entity` instance. Pass `null` for no initial data.

#### `ScheduleEntry($data = null)`

Create a new `ScheduleEntryEntity` instance. Pass `null` for no initial data.

#### `ScheduleOverride($data = null)`

Create a new `ScheduleOverrideEntity` instance. Pass `null` for no initial data.

#### `ScheduleReplica($data = null)`

Create a new `ScheduleReplicaEntity` instance. Pass `null` for no initial data.

#### `ScheduleSyncRule($data = null)`

Create a new `ScheduleSyncRuleEntity` instance. Pass `null` for no initial data.

#### `ScheduleSyncTarget($data = null)`

Create a new `ScheduleSyncTargetEntity` instance. Pass `null` for no initial data.

#### `Secret($data = null)`

Create a new `SecretEntity` instance. Pass `null` for no initial data.

#### `Severity($data = null)`

Create a new `SeverityEntity` instance. Pass `null` for no initial data.

#### `StatusPage($data = null)`

Create a new `StatusPageEntity` instance. Pass `null` for no initial data.

#### `StatusPageComponent($data = null)`

Create a new `StatusPageComponentEntity` instance. Pass `null` for no initial data.

#### `StatusPageComponentAvailability($data = null)`

Create a new `StatusPageComponentAvailabilityEntity` instance. Pass `null` for no initial data.

#### `StatusPageIncident($data = null)`

Create a new `StatusPageIncidentEntity` instance. Pass `null` for no initial data.

#### `StatusPageIncidentUpdate($data = null)`

Create a new `StatusPageIncidentUpdateEntity` instance. Pass `null` for no initial data.

#### `StatusPageLinkedResponseIncident($data = null)`

Create a new `StatusPageLinkedResponseIncidentEntity` instance. Pass `null` for no initial data.

#### `StatusPageMaintenance($data = null)`

Create a new `StatusPageMaintenanceEntity` instance. Pass `null` for no initial data.

#### `StatusPageMaintenanceUpdate($data = null)`

Create a new `StatusPageMaintenanceUpdateEntity` instance. Pass `null` for no initial data.

#### `StatusPageStructure($data = null)`

Create a new `StatusPageStructureEntity` instance. Pass `null` for no initial data.

#### `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2($data = null)`

Create a new `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `TelemetryDataSource($data = null)`

Create a new `TelemetryDataSourceEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UsersShowPagingProviderResultV2($data = null)`

Create a new `UsersShowPagingProviderResultV2Entity` instance. Pass `null` for no initial data.

#### `UtilitiesV1($data = null)`

Create a new `UtilitiesV1Entity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `WorkflowRun($data = null)`

Create a new `WorkflowRunEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): IncidentIoUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActionEntity

```php
$action = $client->Action();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this action is assigned to |
| `completed_at` | `string` | No | When the action was completed |
| `created_at` | `string` | Yes | When the action was created |
| `creator` | `array` | Yes |  |
| `description` | `string` | Yes | Description of the action |
| `id` | `string` | Yes | Unique identifier for the action |
| `incident_id` | `string` | Yes | Unique identifier of the incident the action belongs to |
| `status` | `string` | Yes | Status of the action |
| `updated_at` | `string` | Yes | When the action was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Action()->create([
  "description" => null, // string
  "incident_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Action()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Action()->load(["id" => "action_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Action()->remove(["id" => "action_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Action()->update([
  "id" => "action_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionEntity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertEntity

```php
$alert = $client->Alert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Alert()->create([
  "id" => null, // string
  "alert_source_id" => null, // string
  "attributes" => null, // array
  "created_at" => null, // string
  "deduplication_key" => null, // string
  "status" => null, // string
  "title" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Alert()->list(["page_size" => 1]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Alert()->load(["id" => "alert_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertEntity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertAttributeEntity

```php
$alert_attribute = $client->AlertAttribute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `bool` | Yes | Whether this attribute is an array |
| `emoji` | `string` | No | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | Yes | The ID of this attribute |
| `name` | `string` | Yes | Unique name of this attribute |
| `required` | `bool` | Yes | Whether this attribute is required. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertAttribute()->create([
  "array" => null, // bool
  "name" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertAttribute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AlertAttribute()->load(["id" => "alert_attribute_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AlertAttribute()->remove(["id" => "alert_attribute_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AlertAttribute()->update([
  "id" => "alert_attribute_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertAttributeEntity`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertEventsV2Entity

```php
$alert_events_v2 = $client->AlertEventsV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deduplication_key` | `string` | Yes | The deduplication key that the event has been processed with |
| `description` | `string` | No | Description that optionally adds more detail to title. |
| `message` | `string` | Yes | Human readable message giving detail about the event |
| `metadata` | `array` | No | Any additional metadata that you've configured your alert source to parse |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Status of the event |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertEventsV2()->create([
  "alert_source_config_id" => null, // string
  "status" => null, // string
  "title" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertEventsV2Entity`

Create a new `AlertEventsV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertNoteEntity

```php
$alert_note = $client->AlertNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No | ID of the alert group this note is attached to. |
| `alert_id` | `string` | No | ID of the alert this note is attached to. |
| `content` | `string` | Yes | Markdown body of the note |
| `created_at` | `string` | Yes | When this note was first created |
| `creator` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the alert note |
| `images` | `array` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | Yes | When this note was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertNote()->create([
  "content" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AlertNote()->load(["id" => "alert_note_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AlertNote()->remove(["id" => "alert_note_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AlertNote()->update([
  "id" => "alert_note_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertNoteEntity`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertRouteEntity

```php
$alert_route = $client->AlertRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_sources` | `array` | Yes | Which alert sources this route matches |
| `condition_groups` | `array` | Yes | Filter: the condition groups that must be true for this route to fire |
| `created_at` | `string` | No | When this alert route was created |
| `enabled` | `bool` | Yes | Whether this alert route is enabled |
| `escalation_config` | `array` | Yes |  |
| `expressions` | `array` | Yes | The expressions used by bindings in this route |
| `grouping_config` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this alert route |
| `incident_config` | `array` | Yes |  |
| `is_private` | `bool` | Yes | Whether this alert route is private. |
| `message_config` | `array` | Yes |  |
| `name` | `string` | Yes | The name of this alert route, for the user's reference |
| `owning_team_ids` | `array` | No | IDs of teams that own this alert route |
| `updated_at` | `string` | No | When this alert route was last updated |
| `version` | `int` | Yes | The version of this alert route |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertRoute()->create([
  "alert_sources" => null, // array
  "condition_groups" => null, // array
  "enabled" => null, // bool
  "escalation_config" => null, // array
  "expressions" => null, // array
  "grouping_config" => null, // array
  "incident_config" => null, // array
  "is_private" => null, // bool
  "message_config" => null, // array
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertRoute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AlertRoute()->load(["id" => "alert_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AlertRoute()->remove(["id" => "alert_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AlertRoute()->update([
  "id" => "alert_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertRouteEntity`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertSourceEntity

```php
$alert_source = $client->AlertSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `bool` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `int` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `array` | Yes |  |
| `disabled` | `bool` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `array` | Yes |  |
| `filter_condition_groups` | `array` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `array` | Yes |  |
| `http_custom_options` | `array` | Yes |  |
| `id` | `string` | Yes | The ID of this alert source |
| `jira_options` | `array` | Yes |  |
| `name` | `string` | Yes | Unique name of the alert source |
| `owning_team_ids` | `array` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `array` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertSource()->create([
  "azure_devops_options" => null, // array
  "email_options" => null, // array
  "heartbeat_options" => null, // array
  "http_custom_options" => null, // array
  "jira_options" => null, // array
  "name" => null, // string
  "rate_limit_sharding" => null, // array
  "source_type" => null, // string
  "template" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertSource()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AlertSource()->load(["id" => "alert_source_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AlertSource()->remove(["id" => "alert_source_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AlertSource()->update([
  "id" => "alert_source_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertSourceEntity`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertSourcesV2Entity

```php
$alert_sources_v2 = $client->AlertSourcesV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `array` | No | IDs of teams that own this alert source |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertSourcesV2()->create([
  "source_type" => null, // string
  "template" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertSourcesV2Entity`

Create a new `AlertSourcesV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertTagEntity

```php
$alert_tag = $client->AlertTag();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `name` | `string` | Yes | The tag name |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertTag()->create([
  "alert_id" => null, // string
  "tags" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertTag()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertTagEntity`

Create a new `AlertTagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertsAddTagsResultV2Entity

```php
$alerts_add_tags_result_v2 = $client->AlertsAddTagsResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `array` | No | Tags someone has applied to this alert |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertsAddTagsResultV2()->create([
  "alert_id" => null, // string
  "tags" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertsAddTagsResultV2Entity`

Create a new `AlertsAddTagsResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertsSetTagsResultV2Entity

```php
$alerts_set_tags_result_v2 = $client->AlertsSetTagsResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `array` | No | Tags someone has applied to this alert |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertsSetTagsResultV2()->create([
  "alert_id" => null, // string
  "tags" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertsSetTagsResultV2Entity`

Create a new `AlertsSetTagsResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertsTransitionIncidentAlertResultV2Entity

```php
$alerts_transition_incident_alert_result_v2 = $client->AlertsTransitionIncidentAlertResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `array` | Yes |  |
| `alert_id` | `string` | Yes | Alert to attach to the incident |
| `alert_route_id` | `string` | No | The ID of the alert route that created this incident alert |
| `id` | `string` | Yes | The ID of this alert |
| `incident` | `array` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Yes | Incident to attach the alert to |
| `re_relate` | `bool` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | Yes | What state to move the connection to |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AlertsTransitionIncidentAlertResultV2()->create([
  "alert_id" => null, // string
  "incident_id" => null, // string
  "state" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AlertsTransitionIncidentAlertResultV2()->list(["page_size" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertsTransitionIncidentAlertResultV2Entity`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnnouncementRuleEntity

```php
$announcement_rule = $client->AnnouncementRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `array` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | Yes | When the rule was created |
| `id` | `string` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `array` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Yes | Human readable name for the rule |
| `owning_team_ids` | `array` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `array` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AnnouncementRule()->create([
  "condition_groups" => null, // array
  "mode" => null, // string
  "name" => null, // string
  "update_sharing_mode" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AnnouncementRule()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AnnouncementRule()->load(["id" => "announcement_rule_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AnnouncementRule()->remove(["id" => "announcement_rule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AnnouncementRule()->update([
  "id" => "announcement_rule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnnouncementRuleEntity`

Create a new `AnnouncementRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AnnouncementTemplateEntity

```php
$announcement_template = $client->AnnouncementTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `array` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `array` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `string` | Yes | Unique identifier for this announcement template |
| `is_default` | `bool` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Yes | Name of this announcement template |
| `owning_team_ids` | `array` | Yes | IDs of the teams that own this template |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->AnnouncementTemplate()->create([
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->AnnouncementTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->AnnouncementTemplate()->load(["id" => "announcement_template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->AnnouncementTemplate()->remove(["id" => "announcement_template_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->AnnouncementTemplate()->update([
  "id" => "announcement_template_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AnnouncementTemplateEntity`

Create a new `AnnouncementTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `string` | No | Freeform notes about this API key |
| `created_at` | `string` | Yes | When the API key was created |
| `creator` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this API key |
| `last_used_at` | `string` | No | When the key was last used to authenticate a request |
| `name` | `string` | Yes | The name of the API key, for the user's reference |
| `role_names` | `array` | Yes | Account-level roles to assign to the API key. |
| `roles` | `array` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `array` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `array` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `array` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | Yes | When the current token for this API was last issued. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ApiKey()->create([
  "name" => null, // string
  "role_names" => null, // array
  "team_ids" => null, // array
  "team_role_names" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ApiKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ApiKey()->load(["id" => "api_key_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ApiKey()->remove(["id" => "api_key_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ApiKey()->update([
  "id" => "api_key_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallRouteEntity

```php
$call_route = $client->CallRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `array` | Yes | The numbers allowed to call this route. |
| `country_code` | `string` | No | The country this route's number belongs to |
| `created_at` | `string` | Yes |  |
| `current_state` | `string` | Yes | Where this route is in provisioning. |
| `custom_language` | `string` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Yes | Unique identifier for this call route |
| `name` | `string` | Yes | Name for this call route |
| `options` | `array` | Yes | The phone-tree menu this route presents. |
| `path` | `array` | Yes | Who we page when a call comes in. |
| `phone_number` | `string` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` | Yes |  |
| `use_caller_allowlist` | `bool` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CallRoute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CallRoute()->load(["id" => "call_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CallRoute()->update([
  "id" => "call_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallRouteEntity`

Create a new `CallRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallRouteAllowedCallerEntity

```php
$call_route_allowed_caller = $client->CallRouteAllowedCaller();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CallRouteAllowedCaller()->create([
  "id" => null, // string
  "phone_number" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CallRouteAllowedCaller()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CallRouteAllowedCaller()->load(["id" => "call_route_allowed_caller_id", "call_route_id" => "call_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CallRouteAllowedCaller()->remove(["id" => "call_route_allowed_caller_id", "call_route_id" => "call_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CallRouteAllowedCaller()->update([
  "id" => "call_route_allowed_caller_id",
  "call_route_id" => "call_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallRouteAllowedCallerEntity`

Create a new `CallRouteAllowedCallerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallRouteOptionEntity

```php
$call_route_option = $client->CallRouteOption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `array` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CallRouteOption()->create([
  "id" => null, // string
  "digit" => null, // string
  "path" => null, // array
  "prompt" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CallRouteOption()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CallRouteOption()->load(["id" => "call_route_option_id", "call_route_id" => "call_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CallRouteOption()->remove(["id" => "call_route_option_id", "call_route_id" => "call_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CallRouteOption()->update([
  "id" => "call_route_option_id",
  "call_route_id" => "call_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallRouteOptionEntity`

Create a new `CallRouteOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallSessionEntity

```php
$call_session = $client->CallSession();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `string` | No | When the call session ended. |
| `id` | `string` | Yes | Unique identifier for this call session |
| `incident_id` | `string` | Yes | The incident this call session belongs to |
| `started_at` | `string` | Yes | When the call session started |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CallSession()->list(["incident_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallSessionEntity`

Create a new `CallSessionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CallTranscriptEntryEntity

```php
$call_transcript_entry = $client->CallTranscriptEntry();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CallTranscriptEntry()->list(["call_session_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CallTranscriptEntryEntity`

Create a new `CallTranscriptEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogEntryEntity

```php
$catalog_entry = $client->CatalogEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `array` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | No | When this entry was archived |
| `attribute_values` | `array` | Yes | Values of this entry |
| `catalog_entry` | `array` | Yes |  |
| `catalog_type` | `array` | Yes |  |
| `catalog_type_id` | `string` | Yes | ID of this catalog type |
| `created_at` | `string` | Yes | When this entry was created |
| `external_id` | `string` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | Yes | ID of this catalog entry |
| `name` | `string` | Yes | Name is the human readable name of this entry |
| `rank` | `int` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `array` | No | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | Yes | When this entry was last updated |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CatalogEntry()->create([
  "attribute_values" => null, // array
  "catalog_type_id" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CatalogEntry()->list(["catalog_type_id" => "example", "page_size" => 1]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CatalogEntry()->load(["id" => "catalog_entry_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CatalogEntry()->remove(["id" => "catalog_entry_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CatalogEntry()->update([
  "id" => "catalog_entry_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogEntryEntity`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogResourceEntity

```php
$catalog_resource = $client->CatalogResource();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CatalogResource()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogResourceEntity`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogTypeEntity

```php
$catalog_type = $client->CatalogType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | Yes | Annotations that can track metadata about this type |
| `categories` | `array` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `bool` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `array` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `array` | No | If populated, the integrations required for this type |
| `schema` | `array` | Yes |  |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `bool` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CatalogType()->create([
  "description" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CatalogType()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CatalogType()->load(["id" => "catalog_type_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CatalogType()->remove(["id" => "catalog_type_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CatalogType()->update([
  "id" => "catalog_type_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogTypeEntity`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogTypeSchemaEntity

```php
$catalog_type_schema = $client->CatalogTypeSchema();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | Yes | Annotations that can track metadata about this type |
| `attributes` | `array` | Yes |  |
| `categories` | `array` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `bool` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `array` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `array` | No | If populated, the integrations required for this type |
| `schema` | `array` | Yes |  |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `bool` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CatalogTypeSchema()->create([
  "catalog_type_id" => null, // string
  "attributes" => null, // array
  "version" => null, // int
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogTypeSchemaEntity`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CatalogV3Entity

```php
$catalog_v3 = $client->CatalogV3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | Yes | The unique identifier of the catalog type containing the entries |
| `entries` | `array` | Yes | A list of entries to update with their new values. |
| `update_attributes` | `array` | No | Optional list of specific attribute IDs to update across all entries. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CatalogV3()->create([
  "catalog_type_id" => null, // string
  "entries" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CatalogV3Entity`

Create a new `CatalogV3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldEntity

```php
$custom_field = $client->CustomField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the custom field |
| `field_type` | `string` | Yes | Type of custom field |
| `filter_by` | `array` | Yes |  |
| `fixed_filter` | `array` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | No | Which catalog attribute provides helptext for the options |
| `id` | `string` | Yes | Unique identifier for the custom field |
| `name` | `string` | Yes | Human readable name for the custom field |
| `updated_at` | `string` | Yes | When the action was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CustomField()->create([
  "description" => null, // string
  "field_type" => null, // string
  "filter_by" => null, // array
  "fixed_filter" => null, // array
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CustomField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CustomField()->remove(["id" => "custom_field_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CustomField()->update([
  "id" => "custom_field_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldEntity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldOptionEntity

```php
$custom_field_option = $client->CustomFieldOption();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `string` | Yes | ID of the custom field this option belongs to |
| `id` | `string` | Yes | Unique identifier for the custom field option |
| `sort_key` | `int` | Yes | Sort key used to order the custom field options correctly |
| `value` | `string` | Yes | Human readable name for the custom field option. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->CustomFieldOption()->create([
  "custom_field_id" => null, // string
  "value" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->CustomFieldOption()->list(["custom_field_id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->CustomFieldOption()->load(["id" => "custom_field_option_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->CustomFieldOption()->remove(["id" => "custom_field_option_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->CustomFieldOption()->update([
  "id" => "custom_field_option_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldOptionEntity`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationEntity

```php
$escalation = $client->Escalation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this escalation was created |
| `creator` | `array` | Yes | The creator of this escalation. |
| `description` | `string` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `array` | Yes | Events which describe the history of this escalation. |
| `id` | `string` | Yes | Unique ID of the escalation |
| `idempotency_key` | `string` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | No | ID of an incident to associate with this escalation. |
| `priority` | `array` | Yes | The priority associated with this escalation. |
| `related_alerts` | `array` | Yes | Alerts related to this escalation |
| `related_incidents` | `array` | Yes | Incidents related to this escalation |
| `status` | `string` | Yes | Status of the escalation |
| `title` | `string` | Yes | The title of this escalation |
| `updated_at` | `string` | Yes | When this escalation was last updated |
| `user_ids` | `array` | No | IDs of users to escalate directly to |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Escalation()->create([
  "idempotency_key" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Escalation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Escalation()->load(["id" => "escalation_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationEntity`

Create a new `EscalationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationPathEntity

```php
$escalation_path = $client->EscalationPath();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_responders` | `array` | No | Users who are currently on-call for this escalation path |
| `id` | `string` | Yes | Unique identifier for this escalation path. |
| `kind` | `string` | Yes | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | `string` | Yes | The name of this escalation path, for the user's reference. |
| `param_bindings` | `array` | No | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | `array` | Yes | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` | `array` | Yes |  |
| `team_ids` | `array` | Yes | IDs of the teams that own this escalation path. |
| `template_id` | `string` | No | For a templated path, the template it is built from. |
| `working_hours` | `array` | No | The working hours for this escalation path. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EscalationPath()->create([
  "name" => null, // string
  "path" => null, // array
  "repeat_config" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->EscalationPath()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->EscalationPath()->load(["id" => "escalation_path_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->EscalationPath()->remove(["id" => "escalation_path_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->EscalationPath()->update([
  "id" => "escalation_path_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationPathEntity`

Create a new `EscalationPathEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationPathTemplateEntity

```php
$escalation_path_template = $client->EscalationPathTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of what this template is for. |
| `expressions` | `array` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `bool` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `string` | Yes | Unique identifier for this template. |
| `name` | `string` | Yes | The name of this template. |
| `params` | `array` | Yes | The parameters declared by this template. |
| `path` | `array` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `array` | Yes |  |
| `working_hours` | `array` | No | The working hours for this template. |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EscalationPathTemplate()->create([
  "name" => null, // string
  "path" => null, // array
  "repeat_config" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->EscalationPathTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->EscalationPathTemplate()->load(["id" => "escalation_path_template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->EscalationPathTemplate()->remove(["id" => "escalation_path_template_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->EscalationPathTemplate()->update([
  "id" => "escalation_path_template_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationPathTemplateEntity`

Create a new `EscalationPathTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```php
$escalations_check_escalation_permissions_result_v2 = $client->EscalationsCheckEscalationPermissionsResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `array` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `array` | Yes | The IDs of the users to check response options for |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EscalationsCheckEscalationPermissionsResultV2()->create([
  "escalation_id" => null, // string
  "user_ids" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationsCheckEscalationPermissionsResultV2Entity`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationsReassignEscalationResultV2Entity

```php
$escalations_reassign_escalation_result_v2 = $client->EscalationsReassignEscalationResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Additional details about the new escalation. |
| `escalation_path_id` | `string` | No | ID of the escalation path to reassign to |
| `resolve_original` | `bool` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | No | The title of the new escalation. |
| `user_ids` | `array` | No | IDs of users to reassign directly to |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EscalationsReassignEscalationResultV2()->create([
  "escalation_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationsReassignEscalationResultV2Entity`

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EscalationsV2Entity

```php
$escalations_v2 = $client->EscalationsV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response` | `string` | Yes | Whether to acknowledge, decline or snooze the escalation |
| `snooze_details` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->EscalationsV2()->create([
  "escalation_id" => null, // string
  "response" => null, // string
  "snooze_details" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EscalationsV2Entity`

Create a new `EscalationsV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowUpEntity

```php
$follow_up = $client->FollowUp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `array` | Yes |  |
| `assignee_team_id` | `string` | No | ID of the team this follow-up is assigned to |
| `category` | `array` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `array` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `array` | Yes |  |
| `external_issue_reference_id` | `string` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | No | ID of the priority for this follow-up |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `array` | Yes | Labels associated with this follow-up |
| `priority` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->FollowUp()->create([
  "incident_id" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->FollowUp()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->FollowUp()->load(["id" => "follow_up_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->FollowUp()->remove(["id" => "follow_up_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->FollowUp()->update([
  "id" => "follow_up_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowUpEntity`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV2Entity

```php
$follow_ups_connect_external_issue_result_v2 = $client->FollowUpsConnectExternalIssueResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_team` | `array` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `array` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `array` | Yes | Labels associated with this follow-up |
| `priority` | `array` | Yes |  |
| `provider` | `string` | Yes | The issue tracker provider the issue belongs to |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->FollowUpsConnectExternalIssueResultV2()->create([
  "follow_up_id" => null, // string
  "provider" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowUpsConnectExternalIssueResultV2Entity`

Create a new `FollowUpsConnectExternalIssueResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV3Entity

```php
$follow_ups_connect_external_issue_result_v3 = $client->FollowUpsConnectExternalIssueResultV3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_team` | `array` | Yes |  |
| `category` | `array` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `array` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `array` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `array` | Yes | Labels associated with this follow-up |
| `priority` | `array` | Yes |  |
| `provider` | `string` | Yes | The issue tracker provider the issue belongs to |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->FollowUpsConnectExternalIssueResultV3()->create([
  "follow_up_id" => null, // string
  "provider" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowUpsConnectExternalIssueResultV3Entity`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowUpsCreateFromLinkResultV3Entity

```php
$follow_ups_create_from_link_result_v3 = $client->FollowUpsCreateFromLinkResultV3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->FollowUpsCreateFromLinkResultV3()->create([
  "incident_id" => null, // string
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowUpsCreateFromLinkResultV3Entity`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HeartbeatV2Entity

```php
$heartbeat_v2 = $client->HeartbeatV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->HeartbeatV2()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->HeartbeatV2()->load(["id" => "heartbeat_v2_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HeartbeatV2Entity`

Create a new `HeartbeatV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IdentityEntity

```php
$identity = $client->Identity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `string` | Yes | The dashboard URL for this organisation |
| `name` | `string` | Yes | The name assigned to the current API Key |
| `roles` | `array` | Yes | Which roles have been enabled for this key |
| `team_roles` | `array` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `array` | Yes | Teams that this API key is scoped to. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Identity()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IdentityEntity`

Create a new `IdentityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentEntity

```php
$incident = $client->Incident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No | The call URL attached to this incident |
| `created_at` | `string` | Yes | When the incident was created |
| `creator` | `array` | Yes |  |
| `custom_field_entries` | `array` | Yes | Custom field entries for this incident |
| `debriefs` | `array` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `array` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `array` | Yes |  |
| `has_debrief` | `bool` | No | If this incident has a debrief attached |
| `id` | `string` | Yes | Unique identifier for the incident |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `array` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `array` | Yes |  |
| `incident_status_id` | `string` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `array` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `array` | Yes |  |
| `incident_type_id` | `string` | No | Incident type to create this incident as |
| `last_activity_at` | `string` | Yes | When the incident last recorded 'activity' |
| `mode` | `string` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | No | URL to link to the Microsoft Teams channel |
| `name` | `string` | Yes | Explanation of the incident |
| `permalink` | `string` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `array` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | No | The URL of the incident post-mortem document |
| `reference` | `string` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `array` | No |  |
| `severity` | `array` | Yes |  |
| `severity_id` | `string` | No | Severity to create incident as |
| `slack_channel_id` | `string` | Yes | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | No | Name of the slack channel |
| `slack_channel_name_override` | `string` | No | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | No | URL to link to the slack channel |
| `slack_team_id` | `string` | Yes | ID of the Slack team / workspace. |
| `summary` | `string` | No | Detailed description of the incident |
| `team_ids` | `array` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | `string` | Yes | When the incident was last updated |
| `visibility` | `string` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `float` | No | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `float` | No | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `float` | No | Amount of time spent on the incident in total |
| `workload_minutes_working` | `float` | No | Amount of time spent on the incident in working hours |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Incident()->create([
  "idempotency_key" => null, // string
  "visibility" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Incident()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Incident()->load(["id" => "incident_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentEntity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentActivityLogEntryEntity

```php
$incident_activity_log_entry = $client->IncidentActivityLogEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `array` | No | Details of an activity log entry. |
| `created_at` | `string` | Yes | When we recorded the activity |
| `id` | `string` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `string` | Yes | ID of the incident this happened on. |
| `occurred_at` | `string` | Yes | When the activity happened. |
| `title` | `string` | Yes | Human-readable summary of what happened |
| `type` | `string` | Yes | What kind of activity this is. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentActivityLogEntry()->list(["incident_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentActivityLogEntryEntity`

Create a new `IncidentActivityLogEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentAttachmentEntity

```php
$incident_attachment = $client->IncidentAttachment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident membership |
| `incident_id` | `string` | Yes | ID of the incident to add an attachment to |
| `resource` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentAttachment()->create([
  "incident_id" => null, // string
  "resource" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentAttachment()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->IncidentAttachment()->remove(["id" => "incident_attachment_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentAttachmentEntity`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentFormEntity

```php
$incident_form = $client->IncidentForm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident form was created |
| `expressions` | `array` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Yes | Which form this is. |
| `id` | `string` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `string` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `array` | No | Elements on this form, in display order. |
| `updated_at` | `string` | Yes | When this incident form was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentForm()->create([
  "expressions" => null, // array
  "form_type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentForm()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentForm()->load(["id" => "incident_form_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->IncidentForm()->remove(["id" => "incident_form_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IncidentForm()->update([
  "id" => "incident_form_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentFormEntity`

Create a new `IncidentFormEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentMembershipEntity

```php
$incident_membership = $client->IncidentMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | The incident to make the user a member of |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentMembership()->create([
  "incident_id" => null, // string
  "user_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentMembershipEntity`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentMembershipsV1Entity

```php
$incident_memberships_v1 = $client->IncidentMembershipsV1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Revoke memberships to incident |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentMembershipsV1()->create([
  "incident_id" => null, // string
  "user_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentMembershipsV1Entity`

Create a new `IncidentMembershipsV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentParticipantEntity

```php
$incident_participant = $client->IncidentParticipant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `array` | Yes | Participants who are actively helping with the incident |
| `passive` | `array` | Yes | Participants who are just observing the incident |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentParticipant()->load(["incident_id" => "incident_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentParticipantEntity`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```php
$incident_participant_workload = $client->IncidentParticipantWorkload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | No | The role they had in the incident |
| `user` | `array` | Yes |  |
| `workload` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentParticipantWorkload()->list(["incident_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentParticipantWorkloadEntity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentRelationshipEntity

```php
$incident_relationship = $client->IncidentRelationship();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident relationship |
| `incident` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentRelationship()->list(["incident_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentRelationshipEntity`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentRoleEntity

```php
$incident_role = $client->IncidentRole();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the role was created |
| `description` | `string` | Yes | Describes the purpose of the role |
| `id` | `string` | Yes | Unique identifier for the role |
| `instructions` | `string` | Yes | Provided to whoever is nominated for the role. |
| `name` | `string` | Yes | Human readable name of the incident role |
| `role_type` | `string` | Yes | Type of incident role |
| `shortform` | `string` | Yes | Short human readable name for Slack. |
| `updated_at` | `string` | Yes | When the role was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentRole()->create([
  "description" => null, // string
  "instructions" => null, // string
  "name" => null, // string
  "shortform" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentRole()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentRole()->load(["id" => "incident_role_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->IncidentRole()->remove(["id" => "incident_role_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IncidentRole()->update([
  "id" => "incident_role_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentRoleEntity`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentStatusEntity

```php
$incident_status = $client->IncidentStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | What category of status it is. |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes | Rich text description of the incident status |
| `id` | `string` | Yes | Unique ID of this incident status |
| `name` | `string` | Yes | Unique name of this status |
| `rank` | `int` | Yes | Order of this incident status |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentStatus()->create([
  "category" => null, // string
  "description" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentStatus()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentStatus()->load(["id" => "incident_status_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->IncidentStatus()->remove(["id" => "incident_status_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IncidentStatus()->update([
  "id" => "incident_status_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentStatusEntity`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTeamMembershipEntity

```php
$incident_team_membership = $client->IncidentTeamMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentTeamMembership()->create([
  "incident_id" => null, // string
  "team_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTeamMembershipEntity`

Create a new `IncidentTeamMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTeamMembershipsV1Entity

```php
$incident_team_memberships_v1 = $client->IncidentTeamMembershipsV1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Revoke team access to this incident |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentTeamMembershipsV1()->create([
  "incident_id" => null, // string
  "team_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTeamMembershipsV1Entity`

Create a new `IncidentTeamMembershipsV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTemplateEntity

```php
$incident_template = $client->IncidentTemplate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident template was created |
| `expressions` | `array` | No | The expressions used by bindings in this template |
| `id` | `string` | Yes | Unique identifier for this incident template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `array` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | Yes | When this incident template was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentTemplate()->create([
  "name" => null, // string
  "template" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentTemplate()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentTemplate()->load(["id" => "incident_template_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->IncidentTemplate()->remove(["id" => "incident_template_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IncidentTemplate()->update([
  "id" => "incident_template_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTemplateEntity`

Create a new `IncidentTemplateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTemplatesValidateResultV1Entity

```php
$incident_templates_validate_result_v1 = $client->IncidentTemplatesValidateResultV1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `array` | No | The expressions used by bindings in this template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `array` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `array` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentTemplatesValidateResultV1()->create([
  "name" => null, // string
  "template" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTemplatesValidateResultV1Entity`

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTimelineItemEntity

```php
$incident_timeline_item = $client->IncidentTimelineItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `string` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | Yes | When this item was added to the timeline |
| `creator` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentTimelineItem()->create([
  "idempotency_key" => null, // string
  "incident_id" => null, // string
  "timestamp" => null, // string
  "title" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentTimelineItem()->list(["incident_id" => "example"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IncidentTimelineItem()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTimelineItemEntity`

Create a new `IncidentTimelineItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTimestampEntity

```php
$incident_timestamp = $client->IncidentTimestamp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique ID of this incident timestamp |
| `name` | `string` | Yes | Unique name of this timestamp |
| `rank` | `int` | Yes | Order in which this timestamp should be shown |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentTimestamp()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentTimestamp()->load(["id" => "incident_timestamp_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTimestampEntity`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTypeEntity

```php
$incident_type = $client->IncidentType();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `string` | Yes | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | Yes | When this resource was created |
| `description` | `string` | Yes | What is this incident type for? |
| `id` | `string` | Yes | Unique identifier for this Incident Type |
| `is_default` | `bool` | Yes | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | Yes | The name of this Incident Type |
| `owning_team_ids` | `array` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `bool` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | Yes | When this resource was last updated |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentType()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IncidentType()->load(["id" => "incident_type_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTypeEntity`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentUpdateEntity

```php
$incident_update = $client->IncidentUpdate();
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
| `new_incident_status` | `array` | Yes |  |
| `new_severity` | `array` | Yes |  |
| `to_incident_status_id` | `string` | No | Move the incident to this status |
| `to_severity_id` | `string` | No | Move the incident to this severity |
| `updater` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentUpdate()->create([
  "idempotency_key" => null, // string
  "incident_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IncidentUpdate()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentUpdateEntity`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentsImportPostmortemDocumentResultV2Entity

```php
$incidents_import_postmortem_document_result_v2 = $client->IncidentsImportPostmortemDocumentResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | The document content as GitHub-Flavored Markdown |
| `title` | `string` | Yes | Title of the postmortem document |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->IncidentsImportPostmortemDocumentResultV2()->create([
  "incident_id" => null, // string
  "content" => null, // string
  "title" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentsImportPostmortemDocumentResultV2Entity`

Create a new `IncidentsImportPostmortemDocumentResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpAllowlistEntity

```php
$ip_allowlist = $client->IpAllowlist();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `array` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `bool` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | No | The time this allowlist was last updated |
| `version` | `int` | Yes | The version of this IP allowlist |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->IpAllowlist()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->IpAllowlist()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpAllowlistEntity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpRangeEntity

```php
$ip_range = $client->IpRange();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `string` | Yes | The address in CIDR notation. |
| `description` | `string` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->IpRange()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpRangeEntity`

Create a new `IpRangeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MaintenanceWindowEntity

```php
$maintenance_window = $client->MaintenanceWindow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_groups` | `array` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | No | When this maintenance window was archived, if it has been |
| `created_at` | `string` | Yes | When this maintenance window was created |
| `end_at` | `string` | Yes | When the maintenance window ends |
| `escalation_targets` | `array` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `string` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `array` | Yes |  |
| `name` | `string` | Yes | Human readable name for the maintenance window |
| `notification_message` | `string` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `array` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `int` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `int` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `array` | No | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `bool` | Yes | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `bool` | Yes | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `bool` | Yes | Whether to show this maintenance window in the dashboard sidebar when active |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->MaintenanceWindow()->create([
  "alert_condition_groups" => null, // array
  "end_at" => null, // string
  "lead" => null, // array
  "name" => null, // string
  "show_in_sidebar" => null, // bool
  "start_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->MaintenanceWindow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->MaintenanceWindow()->load(["id" => "maintenance_window_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->MaintenanceWindow()->remove(["id" => "maintenance_window_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->MaintenanceWindow()->update([
  "id" => "maintenance_window_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MaintenanceWindowEntity`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ManagedResourceEntity

```php
$managed_resource = $client->ManagedResource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | Yes | Annotations that track metadata about this resource |
| `managed_by` | `string` | Yes | How is this resource managed |
| `resource_id` | `string` | Yes | The ID of the resource that this relates to |
| `resource_type` | `string` | Yes | The type of the related resource |
| `source_url` | `string` | No | The url of the external repository where this resource is managed (if there is one) |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ManagedResource()->create([
  "annotations" => null, // array
  "resource_id" => null, // string
  "resource_type" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ManagedResourceEntity`

Create a new `ManagedResourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnCallNotificationMethodPublicV2Entity

```php
$on_call_notification_method_public_v2 = $client->OnCallNotificationMethodPublicV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The address of this method (e.g. |
| `id` | `string` | Yes | Unique identifier for this notification method |
| `is_usable` | `bool` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone_details` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->OnCallNotificationMethodPublicV2()->list(["user_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnCallNotificationMethodPublicV2Entity`

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnCallNotificationPauseEntity

```php
$on_call_notification_pause = $client->OnCallNotificationPause();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `ends_at` | `string` | Yes | When notifications resume |
| `id` | `string` | Yes | Unique identifier for this notification pause |
| `reason` | `string` | No | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | `string` | Yes | When notifications stop being sent to the user |
| `updated_at` | `string` | Yes |  |
| `user_id` | `string` | Yes | The user whose on-call notifications are paused in this time window |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->OnCallNotificationPause()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->OnCallNotificationPause()->load(["id" => "on_call_notification_pause_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnCallNotificationPauseEntity`

Create a new `OnCallNotificationPauseEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OnCallNotificationRulePublicV2Entity

```php
$on_call_notification_rule_public_v2 = $client->OnCallNotificationRulePublicV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `array` | Yes |  |
| `delay_seconds` | `int` | No | Delay in seconds before this rule activates. |
| `id` | `string` | Yes | Unique identifier for this notification rule |
| `method_target` | `array` | Yes |  |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone` | `array` | Yes |  |
| `rule_type` | `string` | Yes | The urgency level this rule applies to |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->OnCallNotificationRulePublicV2()->list(["user_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OnCallNotificationRulePublicV2Entity`

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayConfigEntity

```php
$pay_config = $client->PayConfig();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `int` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` | Yes |  |
| `currency` | `string` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Yes | Unique identifier for this pay config |
| `name` | `string` | Yes | Human readable name for this pay config |
| `one_off_rules` | `array` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | No | When a published report first priced against this config. |
| `rate_time_unit` | `string` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` | Yes |  |
| `weekly_rules` | `array` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayConfig()->create([
  "base_rate_cents" => null, // int
  "currency" => null, // string
  "name" => null, // string
  "rate_time_unit" => null, // string
  "timezone" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PayConfig()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PayConfig()->load(["id" => "pay_config_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->PayConfig()->remove(["id" => "pay_config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->PayConfig()->update([
  "id" => "pay_config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayConfigEntity`

Create a new `PayConfigEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayConfigOneOffRuleEntity

```php
$pay_config_one_off_rule = $client->PayConfigOneOffRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayConfigOneOffRule()->create([
  "id" => null, // string
  "end_at" => null, // string
  "name" => null, // string
  "rate_cents" => null, // int
  "start_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PayConfigOneOffRule()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PayConfigOneOffRule()->load(["id" => "pay_config_one_off_rule_id", "pay_config_id" => "pay_config_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->PayConfigOneOffRule()->remove(["id" => "pay_config_one_off_rule_id", "pay_config_id" => "pay_config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->PayConfigOneOffRule()->update([
  "id" => "pay_config_one_off_rule_id",
  "pay_config_id" => "pay_config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayConfigOneOffRuleEntity`

Create a new `PayConfigOneOffRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayConfigWeeklyRuleEntity

```php
$pay_config_weekly_rule = $client->PayConfigWeeklyRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `array` | Yes | Days of the week this rule applies on |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayConfigWeeklyRule()->create([
  "id" => null, // string
  "end_time" => null, // string
  "rate_cents" => null, // int
  "start_time" => null, // string
  "weekdays" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PayConfigWeeklyRule()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PayConfigWeeklyRule()->load(["id" => "pay_config_weekly_rule_id", "pay_config_id" => "pay_config_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->PayConfigWeeklyRule()->remove(["id" => "pay_config_weekly_rule_id", "pay_config_id" => "pay_config_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->PayConfigWeeklyRule()->update([
  "id" => "pay_config_weekly_rule_id",
  "pay_config_id" => "pay_config_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayConfigWeeklyRuleEntity`

Create a new `PayConfigWeeklyRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayReportEntity

```php
$pay_report = $client->PayReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `array` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `array` | Yes |  |
| `pay_config_id` | `string` | No | The pay config to price every shift with. |
| `published_at` | `string` | No | When this report was published. |
| `rotation_filters` | `array` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `array` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `array` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayReport()->create([
  "end_date" => null, // string
  "name" => null, // string
  "pay_config_expression" => null, // array
  "schedule_ids" => null, // array
  "start_date" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PayReport()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PayReport()->load(["id" => "pay_report_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->PayReport()->remove(["id" => "pay_report_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayReportEntity`

Create a new `PayReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayReportsPublishResultV2Entity

```php
$pay_reports_publish_result_v2 = $client->PayReportsPublishResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `array` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `array` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `array` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `string` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `array` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayReportsPublishResultV2()->create([
  "pay_report_id" => null, // string
  "cc_emails" => null, // array
  "send_user_breakdowns" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayReportsPublishResultV2Entity`

Create a new `PayReportsPublishResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayReportsUnpublishResultV2Entity

```php
$pay_reports_unpublish_result_v2 = $client->PayReportsUnpublishResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `array` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `array` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `array` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Yes | Why this report is being unpublished |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PayReportsUnpublishResultV2()->create([
  "pay_report_id" => null, // string
  "unpublish_reason" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayReportsUnpublishResultV2Entity`

Create a new `PayReportsUnpublishResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PayReportsV2Entity

```php
$pay_reports_v2 = $client->PayReportsV2();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PayReportsV2()->load(["pay_report_id" => "pay_report_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PayReportsV2Entity`

Create a new `PayReportsV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyEntity

```php
$policy = $client->Policy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `array` | Yes |  |
| `conditions` | `array` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` | Yes |  |
| `debrief` | `array` | Yes | Set when policy_type is debrief. |
| `description` | `string` | No | Human readable description of the policy |
| `expressions` | `array` | No | The expressions relating to this policy |
| `follow_up` | `array` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the policy |
| `name` | `string` | Yes | Human readable name of the policy |
| `on_call_readiness` | `array` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `array` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `array` | Yes | Detects gaps in on-call coverage. |
| `status` | `string` | Yes | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Policy()->create([
  "assignment_rules" => null, // array
  "conditions" => null, // array
  "debrief" => null, // array
  "description" => null, // string
  "follow_up" => null, // array
  "name" => null, // string
  "policy_type" => null, // string
  "post_mortem" => null, // array
  "schedule" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Policy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Policy()->load(["id" => "policy_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Policy()->remove(["id" => "policy_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Policy()->update([
  "id" => "policy_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyEntity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyFindingEntity

```php
$policy_finding = $client->PolicyFinding();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `array` | Yes | Set when policy_type is debrief. |
| `dismissal` | `array` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `array` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `array` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `array` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `array` | Yes | Who is expected to resolve this finding |
| `schedule` | `array` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `array` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `array` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PolicyFinding()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PolicyFinding()->load(["id" => "policy_finding_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyFindingEntity`

Create a new `PolicyFindingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyFindingsDismissResultV2Entity

```php
$policy_findings_dismiss_result_v2 = $client->PolicyFindingsDismissResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `array` | Yes | Set when policy_type is debrief. |
| `dismissal` | `array` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `array` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `array` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `array` | Yes | Set when policy_type is post_mortem. |
| `reason` | `string` | Yes | Why this finding is being dismissed |
| `responsible_users` | `array` | Yes | Who is expected to resolve this finding |
| `schedule` | `array` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `array` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `array` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PolicyFindingsDismissResultV2()->create([
  "policy_finding_id" => null, // string
  "reason" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyFindingsDismissResultV2Entity`

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyFindingsRestoreResultV2Entity

```php
$policy_findings_restore_result_v2 = $client->PolicyFindingsRestoreResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `array` | Yes | Set when policy_type is debrief. |
| `dismissal` | `array` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `array` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `array` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `array` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `array` | Yes | Who is expected to resolve this finding |
| `schedule` | `array` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `array` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `array` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PolicyFindingsRestoreResultV2()->create([
  "policy_finding_id" => null, // string
  "created_at" => null, // string
  "debrief" => null, // array
  "dismissal" => null, // array
  "follow_up" => null, // array
  "id" => null, // string
  "last_checked_at" => null, // string
  "on_call_readiness" => null, // array
  "policy_id" => null, // string
  "policy_type" => null, // string
  "post_mortem" => null, // array
  "responsible_users" => null, // array
  "schedule" => null, // array
  "shift_conflict" => null, // array
  "state" => null, // string
  "updated_at" => null, // string
  "vacation_conflict" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyFindingsRestoreResultV2Entity`

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostmortemDocumentEntity

```php
$postmortem_document = $client->PostmortemDocument();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Timestamp for when the document was created |
| `document_url` | `string` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `array` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `array` | Yes | URLs of any external locations this document has been exported to |
| `id` | `string` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `string` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | Yes | The current status of this post-mortem document |
| `title` | `string` | Yes | The display title of the post-mortem document |
| `type` | `string` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Yes | Timestamp for when the document was last updated |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->PostmortemDocument()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PostmortemDocument()->load(["id" => "postmortem_document_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->PostmortemDocument()->update([
  "id" => "postmortem_document_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostmortemDocumentEntity`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostmortemDocumentsAttachResultV1Entity

```php
$postmortem_documents_attach_result_v1 = $client->PostmortemDocumentsAttachResultV1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `document_provider` | `string` | No | The provider hosting the document. |
| `incident_id` | `string` | Yes | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | `string` | Yes | A URL pointing to the externally-hosted post-mortem document |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->PostmortemDocumentsAttachResultV1()->create([
  "incident_id" => null, // string
  "permalink" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostmortemDocumentsAttachResultV1Entity`

Create a new `PostmortemDocumentsAttachResultV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostmortemDocumentsShowContentResultV1Entity

```php
$postmortem_documents_show_content_result_v1 = $client->PostmortemDocumentsShowContentResultV1();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `markdown` | `string` | Yes | The full content of the post-mortem document, rendered as markdown. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->PostmortemDocumentsShowContentResultV1()->load(["postmortem_document_id" => "postmortem_document_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostmortemDocumentsShowContentResultV1Entity`

Create a new `PostmortemDocumentsShowContentResultV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleEntity

```php
$schedule = $client->Schedule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | Yes | Annotations that track metadata about this resource |
| `config` | `array` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shifts` | `array` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `array` | Yes |  |
| `id` | `string` | Yes | Unique internal ID of the schedule |
| `name` | `string` | Yes | Human readable name synced from external provider |
| `next_shifts` | `array` | No | The shifts after the next changeover. |
| `permalink` | `string` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `array` | Yes | IDs of teams that own this schedule |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Schedule()->create([
  "holidays_public_config" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Schedule()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Schedule()->load(["id" => "schedule_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Schedule()->remove(["id" => "schedule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Schedule()->update([
  "id" => "schedule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleEntity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleEntriesListPayloadV2Entity

```php
$schedule_entries_list_payload_v2 = $client->ScheduleEntriesListPayloadV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `string` | No | The end of the window to preview entries for. |
| `entry_window_start` | `string` | No | The start of the window to preview entries for. |
| `final` | `array` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `array` | Yes | Overrides that apply within the requested window |
| `schedule` | `array` | Yes |  |
| `scheduled` | `array` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleEntriesListPayloadV2()->create([
  "schedule_id" => null, // string
  "schedule" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleEntriesListPayloadV2Entity`

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleEntryEntity

```php
$schedule_entry = $client->ScheduleEntry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `array` | Yes |  |
| `schedule_entries` | `array` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleEntry()->load(["schedule_id" => "schedule_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleEntryEntity`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleOverrideEntity

```php
$schedule_override = $client->ScheduleOverride();
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
| `user` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleOverride()->create([
  "end_at" => null, // string
  "layer_id" => null, // string
  "rotation_id" => null, // string
  "schedule_id" => null, // string
  "start_at" => null, // string
  "user" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ScheduleOverride()->list(["schedule_id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleOverride()->load(["id" => "schedule_override_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ScheduleOverride()->remove(["id" => "schedule_override_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ScheduleOverride()->update([
  "id" => "schedule_override_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleOverrideEntity`

Create a new `ScheduleOverrideEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleReplicaEntity

```php
$schedule_replica = $client->ScheduleReplica();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this schedule replica was first created |
| `id` | `string` | Yes | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | No | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | No | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `int` | No | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | Yes | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | Yes | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | Yes | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | Yes | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `array` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | Yes | When this schedule replica was last updated |
| `user_statuses` | `array` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleReplica()->create([
  "id" => null, // string
  "replica_fallback_user_id" => null, // string
  "replica_provider" => null, // string
  "replica_provider_id" => null, // string
  "sources" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ScheduleReplica()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleReplica()->load(["id" => "schedule_replica_id", "schedule_id" => "schedule_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ScheduleReplica()->remove(["id" => "schedule_replica_id", "schedule_id" => "schedule_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleReplicaEntity`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleSyncRuleEntity

```php
$schedule_sync_rule = $client->ScheduleSyncRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `array` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `array` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | Yes | The sync target ID this rule links to |
| `sync_type` | `string` | Yes | Which schedule members sync to the user group |
| `updated_at` | `string` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleSyncRule()->create([
  "id" => null, // string
  "schedule_sync_target_id" => null, // string
  "sync_type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ScheduleSyncRule()->list(["id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleSyncRule()->load(["id" => "schedule_sync_rule_id", "schedule_id" => "schedule_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ScheduleSyncRule()->remove(["id" => "schedule_sync_rule_id", "schedule_id" => "schedule_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ScheduleSyncRule()->update([
  "id" => "schedule_sync_rule_id",
  "schedule_id" => "schedule_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleSyncRuleEntity`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScheduleSyncTargetEntity

```php
$schedule_sync_target = $client->ScheduleSyncTarget();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `bool` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `array` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `array` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->ScheduleSyncTarget()->create([
  "add_bot_to_group" => null, // bool
  "new_slack_user_group" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->ScheduleSyncTarget()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->ScheduleSyncTarget()->load(["id" => "schedule_sync_target_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->ScheduleSyncTarget()->remove(["id" => "schedule_sync_target_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->ScheduleSyncTarget()->update([
  "id" => "schedule_sync_target_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScheduleSyncTargetEntity`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretEntity

```php
$secret = $client->Secret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | Optional description of what this secret is for |
| `id` | `string` | Yes | Unique identifier for this secret |
| `last_four_chars` | `string` | No | The last four characters of the current value, for masked display. |
| `name` | `string` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `array` | No | IDs of the teams that own this secret. |
| `secret` | `array` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes | The secret's plaintext value. |
| `version` | `int` | Yes | The current version number, incremented on each rotation |
| `versions` | `array` | Yes | The secret's versions, newest first |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Secret()->create([
  "name" => null, // string
  "value" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Secret()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Secret()->load(["id" => "secret_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Secret()->remove(["id" => "secret_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Secret()->update([
  "id" => "secret_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretEntity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SeverityEntity

```php
$severity = $client->Severity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the severity |
| `id` | `string` | Yes | Unique identifier of the severity |
| `name` | `string` | Yes | Human readable name of the severity |
| `rank` | `int` | Yes | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | Yes | When the action was last updated |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Severity()->create([
  "description" => null, // string
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Severity()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Severity()->load(["id" => "severity_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Severity()->remove(["id" => "severity_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Severity()->update([
  "id" => "severity_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SeverityEntity`

Create a new `SeverityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageEntity

```php
$status_page = $client->StatusPage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of this status page |
| `id` | `string` | Yes | Unique ID of this status page |
| `name` | `string` | Yes | The title of this status page |
| `public_url` | `string` | No | The public URL of this status page |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatusPage()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPage()->load(["id" => "status_page_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageEntity`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageComponentEntity

```php
$status_page_component = $client->StatusPageComponent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Optional short description of this component |
| `id` | `string` | Yes | Unique identifier for this component |
| `management_meta` | `array` | Yes |  |
| `name` | `string` | Yes | Human-readable name for the component |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPageComponent()->create([
  "name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatusPageComponent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPageComponent()->load(["id" => "status_page_component_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->StatusPageComponent()->remove(["id" => "status_page_component_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->StatusPageComponent()->update([
  "id" => "status_page_component_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageComponentEntity`

Create a new `StatusPageComponentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageComponentAvailabilityEntity

```php
$status_page_component_availability = $client->StatusPageComponentAvailability();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPageComponentAvailability()->load(["component_id" => "component_id", "status_page_id" => "status_page_id", "end_at" => "end_at", "start_at" => "start_at"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageComponentAvailabilityEntity`

Create a new `StatusPageComponentAvailabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageIncidentEntity

```php
$status_page_incident = $client->StatusPageIncident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impacts` | `array` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `array` | No | An array of mappings from component ID to current component status |
| `id` | `string` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Yes | Current status for this incident |
| `message` | `string` | Yes | Markdown initial update on this status page incident |
| `name` | `string` | Yes | A title for the incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `array` | Yes | A list of updates posted to this status page incident |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPageIncident()->create([
  "idempotency_key" => null, // string
  "incident_status" => null, // string
  "message" => null, // string
  "name" => null, // string
  "notify_subscribers" => null, // bool
  "status_page_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatusPageIncident()->list(["status_page_id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPageIncident()->load(["id" => "status_page_incident_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->StatusPageIncident()->update([
  "id" => "status_page_incident_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageIncidentEntity`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageIncidentUpdateEntity

```php
$status_page_incident_update = $client->StatusPageIncidentUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `array` | No | An array of mappings from component ID to component status. |
| `incident_status` | `string` | No | Optional new status for this status page incident. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | Yes | ID of the status page incident |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPageIncidentUpdate()->create([
  "message" => null, // string
  "notify_subscribers" => null, // bool
  "status_page_incident_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageIncidentUpdateEntity`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageLinkedResponseIncidentEntity

```php
$status_page_linked_response_incident = $client->StatusPageLinkedResponseIncident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the Response incident |
| `linked_at` | `string` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatusPageLinkedResponseIncident()->list(["incident_id" => "example", "status_page_id" => "example"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageLinkedResponseIncidentEntity`

Create a new `StatusPageLinkedResponseIncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageMaintenanceEntity

```php
$status_page_maintenance = $client->StatusPageMaintenance();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_ids` | `array` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `bool` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `array` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | Yes | The time the maintenance window ends |
| `id` | `string` | Yes | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Yes | Current status for this maintenance window |
| `message` | `string` | Yes | Markdown initial update on this status page maintenance window |
| `name` | `string` | Yes | A title for the maintenance window |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | Yes | When this status page maintenance window was published to the status page |
| `start_at` | `string` | Yes | The time the maintenance window starts |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `array` | Yes | A list of updates posted to this status page maintenance window |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPageMaintenance()->create([
  "affected_component_ids" => null, // array
  "end_at" => null, // string
  "idempotency_key" => null, // string
  "maintenance_status" => null, // string
  "message" => null, // string
  "name" => null, // string
  "notify_subscribers" => null, // bool
  "start_at" => null, // string
  "status_page_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->StatusPageMaintenance()->list(["status_page_id" => "example"]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPageMaintenance()->load(["id" => "status_page_maintenance_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->StatusPageMaintenance()->remove(["id" => "status_page_maintenance_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->StatusPageMaintenance()->update([
  "id" => "status_page_maintenance_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageMaintenanceEntity`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageMaintenanceUpdateEntity

```php
$status_page_maintenance_update = $client->StatusPageMaintenanceUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `array` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | No | Optional new status for this status page maintenance window. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | Yes | ID of the status page maintenance window |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPageMaintenanceUpdate()->create([
  "message" => null, // string
  "notify_subscribers" => null, // bool
  "status_page_maintenance_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageMaintenanceUpdateEntity`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPageStructureEntity

```php
$status_page_structure = $client->StatusPageStructure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_structure` | `array` | Yes |  |
| `display_uptime_mode` | `string` | Yes | How the page shows uptime against its components |
| `id` | `string` | No |  |
| `management_meta` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->StatusPageStructure()->load(["id" => "status_page_structure_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPageStructureEntity`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity

```php
$status_pages_create_status_page_retrospective_incident_result_v2 = $client->StatusPagesCreateStatusPageRetrospectiveIncidentResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `name` | `string` | Yes | A title for the incident |
| `status_page_id` | `string` | Yes | ID of the status page. |
| `updates` | `array` | Yes | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->StatusPagesCreateStatusPageRetrospectiveIncidentResultV2()->create([
  "idempotency_key" => null, // string
  "name" => null, // string
  "status_page_id" => null, // string
  "updates" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity`

Create a new `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `array` | Yes |  |
| `id` | `string` | Yes | Unique ID of the team |
| `members` | `array` | Yes | Members of the team |
| `name` | `string` | Yes | Name of the team |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Team()->load(["id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TelemetryDataSourceEntity

```php
$telemetry_data_source = $client->TelemetryDataSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this data source was created |
| `datadog_config` | `array` | No | Datadog-specific credential updates |
| `enabled` | `bool` | Yes | Whether this data source is enabled |
| `grafana_config` | `array` | No | Grafana-specific credential and endpoint updates |
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

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->TelemetryDataSource()->update([
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TelemetryDataSourceEntity`

Create a new `TelemetryDataSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `array` | Yes |  |
| `custom_roles` | `array` | Yes |  |
| `email` | `string` | No | Email address of the user. |
| `id` | `string` | Yes | Unique identifier of the user |
| `is_active` | `bool` | Yes | Whether the user is active. |
| `name` | `string` | Yes | Name of the user |
| `role` | `string` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `array` | Yes |  |
| `slack_user_id` | `string` | No | Slack ID of the user |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->User()->load(["id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsersShowPagingProviderResultV2Entity

```php
$users_show_paging_provider_result_v2 = $client->UsersShowPagingProviderResultV2();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `preferred_escalation_provider` | `string` | No | The user's effective escalation provider. |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `preferred_escalation_provider` | - | Yes |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->UsersShowPagingProviderResultV2()->create([
  "user_id" => null, // string
  "preferred_escalation_provider" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->UsersShowPagingProviderResultV2()->load(["user_id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsersShowPagingProviderResultV2Entity`

Create a new `UsersShowPagingProviderResultV2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UtilitiesV1Entity

```php
$utilities_v1 = $client->UtilitiesV1();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->UtilitiesV1()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UtilitiesV1Entity`

Create a new `UtilitiesV1Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `array` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `array` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `bool` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `array` | Yes |  |
| `expressions` | `array` | Yes | The expressions to use in the workflow |
| `folder` | `string` | No | Folder to display the workflow in |
| `form_fields` | `array` | No | User-configured form fields available in the workflow scope. |
| `id` | `string` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `bool` | No | Whether to include private escalations |
| `include_private_incidents` | `bool` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `array` | Yes |  |
| `name` | `string` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `array` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `array` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `array` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `string` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `bool` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | No | What state this workflow is in |
| `steps` | `array` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `string` | Yes | Trigger to set on the workflow |
| `version` | `int` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Returns the created entity and throws on error.

```php
$result = $client->Workflow()->create([
  "condition_groups" => null, // array
  "continue_on_step_error" => null, // bool
  "delay" => null, // array
  "expressions" => null, // array
  "name" => null, // string
  "once_for" => null, // array
  "runs_on_incident_modes" => null, // array
  "runs_on_incidents" => null, // string
  "steps" => null, // array
  "trigger" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->Workflow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and throws on error.

```php
$result = $client->Workflow()->remove(["id" => "workflow_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and throws on error.

```php
$result = $client->Workflow()->update([
  "id" => "workflow_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowRunEntity

```php
$workflow_run = $client->WorkflowRun();
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
| `progress` | `array` | Yes | Status of each step as it is worked |
| `scheduled_at` | `string` | Yes | When the run was scheduled for |
| `updated_at` | `string` | Yes | When the resource was last updated |
| `workflow_id` | `string` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | No | Name of the underlying workflow |
| `workflow_version_id` | `string` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `int` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array of entities, one per record, and throws on error.

```php
$results = $client->WorkflowRun()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and throws on error.

```php
$result = $client->WorkflowRun()->load(["id" => "workflow_run_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowRunEntity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new IncidentIoSDK([
  "feature" => [
    "debug" => ["active" => true],
    "idempotency" => ["active" => true],
    "metrics" => ["active" => true],
    "paging" => ["active" => true],
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "secrets" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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


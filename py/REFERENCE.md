# IncidentIo Python SDK Reference

Complete API reference for the IncidentIo Python SDK.


## IncidentIoSDK

### Constructor

```python
from incidentio_sdk import IncidentIoSDK

client = IncidentIoSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = IncidentIoSDK.test()
```


### Instance Methods

#### `Action(data=None)`

Create a new `ActionEntity` instance. Pass `None` for no initial data.

#### `Alert(data=None)`

Create a new `AlertEntity` instance. Pass `None` for no initial data.

#### `AlertAttribute(data=None)`

Create a new `AlertAttributeEntity` instance. Pass `None` for no initial data.

#### `AlertNote(data=None)`

Create a new `AlertNoteEntity` instance. Pass `None` for no initial data.

#### `AlertRoute(data=None)`

Create a new `AlertRouteEntity` instance. Pass `None` for no initial data.

#### `AlertSource(data=None)`

Create a new `AlertSourceEntity` instance. Pass `None` for no initial data.

#### `AlertSourcesV2(data=None)`

Create a new `AlertSourcesV2Entity` instance. Pass `None` for no initial data.

#### `AlertTag(data=None)`

Create a new `AlertTagEntity` instance. Pass `None` for no initial data.

#### `AlertsAddTagsResultV2(data=None)`

Create a new `AlertsAddTagsResultV2Entity` instance. Pass `None` for no initial data.

#### `AlertsRemoveTagsResultV2(data=None)`

Create a new `AlertsRemoveTagsResultV2Entity` instance. Pass `None` for no initial data.

#### `AlertsSetTagsResultV2(data=None)`

Create a new `AlertsSetTagsResultV2Entity` instance. Pass `None` for no initial data.

#### `AlertsTransitionIncidentAlertResultV2(data=None)`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance. Pass `None` for no initial data.

#### `AnnouncementRule(data=None)`

Create a new `AnnouncementRuleEntity` instance. Pass `None` for no initial data.

#### `AnnouncementTemplate(data=None)`

Create a new `AnnouncementTemplateEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `CallRoute(data=None)`

Create a new `CallRouteEntity` instance. Pass `None` for no initial data.

#### `CallRoutesCreateAllowedCallerResultV2(data=None)`

Create a new `CallRoutesCreateAllowedCallerResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesCreateOptionResultV2(data=None)`

Create a new `CallRoutesCreateOptionResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesListAllowedCallersResultV2(data=None)`

Create a new `CallRoutesListAllowedCallersResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesListOptionsResultV2(data=None)`

Create a new `CallRoutesListOptionsResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesShowAllowedCallerResultV2(data=None)`

Create a new `CallRoutesShowAllowedCallerResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesShowOptionResultV2(data=None)`

Create a new `CallRoutesShowOptionResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesUpdateAllowedCallerResultV2(data=None)`

Create a new `CallRoutesUpdateAllowedCallerResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesUpdateOptionResultV2(data=None)`

Create a new `CallRoutesUpdateOptionResultV2Entity` instance. Pass `None` for no initial data.

#### `CallRoutesV2(data=None)`

Create a new `CallRoutesV2Entity` instance. Pass `None` for no initial data.

#### `CallSession(data=None)`

Create a new `CallSessionEntity` instance. Pass `None` for no initial data.

#### `CallTranscriptEntry(data=None)`

Create a new `CallTranscriptEntryEntity` instance. Pass `None` for no initial data.

#### `CatalogEntry(data=None)`

Create a new `CatalogEntryEntity` instance. Pass `None` for no initial data.

#### `CatalogResource(data=None)`

Create a new `CatalogResourceEntity` instance. Pass `None` for no initial data.

#### `CatalogType(data=None)`

Create a new `CatalogTypeEntity` instance. Pass `None` for no initial data.

#### `CatalogTypeSchema(data=None)`

Create a new `CatalogTypeSchemaEntity` instance. Pass `None` for no initial data.

#### `CustomField(data=None)`

Create a new `CustomFieldEntity` instance. Pass `None` for no initial data.

#### `CustomFieldOption(data=None)`

Create a new `CustomFieldOptionEntity` instance. Pass `None` for no initial data.

#### `Escalation(data=None)`

Create a new `EscalationEntity` instance. Pass `None` for no initial data.

#### `EscalationPathTemplate(data=None)`

Create a new `EscalationPathTemplateEntity` instance. Pass `None` for no initial data.

#### `EscalationsCheckEscalationPermissionsResultV2(data=None)`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance. Pass `None` for no initial data.

#### `EscalationsReassignEscalationResultV2(data=None)`

Create a new `EscalationsReassignEscalationResultV2Entity` instance. Pass `None` for no initial data.

#### `FollowUp(data=None)`

Create a new `FollowUpEntity` instance. Pass `None` for no initial data.

#### `FollowUpsConnectExternalIssueResultV3(data=None)`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance. Pass `None` for no initial data.

#### `FollowUpsCreateFromLinkResultV3(data=None)`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance. Pass `None` for no initial data.

#### `Identity(data=None)`

Create a new `IdentityEntity` instance. Pass `None` for no initial data.

#### `Incident(data=None)`

Create a new `IncidentEntity` instance. Pass `None` for no initial data.

#### `IncidentActivityLogEntry(data=None)`

Create a new `IncidentActivityLogEntryEntity` instance. Pass `None` for no initial data.

#### `IncidentAttachment(data=None)`

Create a new `IncidentAttachmentEntity` instance. Pass `None` for no initial data.

#### `IncidentForm(data=None)`

Create a new `IncidentFormEntity` instance. Pass `None` for no initial data.

#### `IncidentMembership(data=None)`

Create a new `IncidentMembershipEntity` instance. Pass `None` for no initial data.

#### `IncidentParticipant(data=None)`

Create a new `IncidentParticipantEntity` instance. Pass `None` for no initial data.

#### `IncidentParticipantWorkload(data=None)`

Create a new `IncidentParticipantWorkloadEntity` instance. Pass `None` for no initial data.

#### `IncidentRelationship(data=None)`

Create a new `IncidentRelationshipEntity` instance. Pass `None` for no initial data.

#### `IncidentRole(data=None)`

Create a new `IncidentRoleEntity` instance. Pass `None` for no initial data.

#### `IncidentStatus(data=None)`

Create a new `IncidentStatusEntity` instance. Pass `None` for no initial data.

#### `IncidentTeamMembership(data=None)`

Create a new `IncidentTeamMembershipEntity` instance. Pass `None` for no initial data.

#### `IncidentTeamMembershipsV1(data=None)`

Create a new `IncidentTeamMembershipsV1Entity` instance. Pass `None` for no initial data.

#### `IncidentTemplate(data=None)`

Create a new `IncidentTemplateEntity` instance. Pass `None` for no initial data.

#### `IncidentTemplatesValidateResultV1(data=None)`

Create a new `IncidentTemplatesValidateResultV1Entity` instance. Pass `None` for no initial data.

#### `IncidentTimelineItem(data=None)`

Create a new `IncidentTimelineItemEntity` instance. Pass `None` for no initial data.

#### `IncidentTimestamp(data=None)`

Create a new `IncidentTimestampEntity` instance. Pass `None` for no initial data.

#### `IncidentType(data=None)`

Create a new `IncidentTypeEntity` instance. Pass `None` for no initial data.

#### `IncidentUpdate(data=None)`

Create a new `IncidentUpdateEntity` instance. Pass `None` for no initial data.

#### `IpAllowlist(data=None)`

Create a new `IpAllowlistEntity` instance. Pass `None` for no initial data.

#### `IpRange(data=None)`

Create a new `IpRangeEntity` instance. Pass `None` for no initial data.

#### `MaintenanceWindow(data=None)`

Create a new `MaintenanceWindowEntity` instance. Pass `None` for no initial data.

#### `OnCallNotificationMethodPublicV2(data=None)`

Create a new `OnCallNotificationMethodPublicV2Entity` instance. Pass `None` for no initial data.

#### `OnCallNotificationRulePublicV2(data=None)`

Create a new `OnCallNotificationRulePublicV2Entity` instance. Pass `None` for no initial data.

#### `PayConfig(data=None)`

Create a new `PayConfigEntity` instance. Pass `None` for no initial data.

#### `PayConfigsCreateOneOffRuleResultV2(data=None)`

Create a new `PayConfigsCreateOneOffRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsCreateWeeklyRuleResultV2(data=None)`

Create a new `PayConfigsCreateWeeklyRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsListOneOffRulesResultV2(data=None)`

Create a new `PayConfigsListOneOffRulesResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsListWeeklyRulesResultV2(data=None)`

Create a new `PayConfigsListWeeklyRulesResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsShowOneOffRuleResultV2(data=None)`

Create a new `PayConfigsShowOneOffRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsShowWeeklyRuleResultV2(data=None)`

Create a new `PayConfigsShowWeeklyRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsUpdateOneOffRuleResultV2(data=None)`

Create a new `PayConfigsUpdateOneOffRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsUpdateWeeklyRuleResultV2(data=None)`

Create a new `PayConfigsUpdateWeeklyRuleResultV2Entity` instance. Pass `None` for no initial data.

#### `PayConfigsV2(data=None)`

Create a new `PayConfigsV2Entity` instance. Pass `None` for no initial data.

#### `PayReport(data=None)`

Create a new `PayReportEntity` instance. Pass `None` for no initial data.

#### `PayReportsPublishResultV2(data=None)`

Create a new `PayReportsPublishResultV2Entity` instance. Pass `None` for no initial data.

#### `PayReportsUnpublishResultV2(data=None)`

Create a new `PayReportsUnpublishResultV2Entity` instance. Pass `None` for no initial data.

#### `PayReportsV2(data=None)`

Create a new `PayReportsV2Entity` instance. Pass `None` for no initial data.

#### `PoliciesV2(data=None)`

Create a new `PoliciesV2Entity` instance. Pass `None` for no initial data.

#### `Policy(data=None)`

Create a new `PolicyEntity` instance. Pass `None` for no initial data.

#### `PolicyFinding(data=None)`

Create a new `PolicyFindingEntity` instance. Pass `None` for no initial data.

#### `PolicyFindingsDismissResultV2(data=None)`

Create a new `PolicyFindingsDismissResultV2Entity` instance. Pass `None` for no initial data.

#### `PolicyFindingsRestoreResultV2(data=None)`

Create a new `PolicyFindingsRestoreResultV2Entity` instance. Pass `None` for no initial data.

#### `PostmortemDocument(data=None)`

Create a new `PostmortemDocumentEntity` instance. Pass `None` for no initial data.

#### `Schedule(data=None)`

Create a new `ScheduleEntity` instance. Pass `None` for no initial data.

#### `ScheduleEntriesListPayloadV2(data=None)`

Create a new `ScheduleEntriesListPayloadV2Entity` instance. Pass `None` for no initial data.

#### `ScheduleEntry(data=None)`

Create a new `ScheduleEntryEntity` instance. Pass `None` for no initial data.

#### `ScheduleReplica(data=None)`

Create a new `ScheduleReplicaEntity` instance. Pass `None` for no initial data.

#### `ScheduleSyncRule(data=None)`

Create a new `ScheduleSyncRuleEntity` instance. Pass `None` for no initial data.

#### `ScheduleSyncTarget(data=None)`

Create a new `ScheduleSyncTargetEntity` instance. Pass `None` for no initial data.

#### `SchedulesShowOverrideResultV2(data=None)`

Create a new `SchedulesShowOverrideResultV2Entity` instance. Pass `None` for no initial data.

#### `SchedulesUpdateOverrideResultV2(data=None)`

Create a new `SchedulesUpdateOverrideResultV2Entity` instance. Pass `None` for no initial data.

#### `Secret(data=None)`

Create a new `SecretEntity` instance. Pass `None` for no initial data.

#### `Severity(data=None)`

Create a new `SeverityEntity` instance. Pass `None` for no initial data.

#### `StatusPage(data=None)`

Create a new `StatusPageEntity` instance. Pass `None` for no initial data.

#### `StatusPageComponent(data=None)`

Create a new `StatusPageComponentEntity` instance. Pass `None` for no initial data.

#### `StatusPageComponentAvailabilityV2(data=None)`

Create a new `StatusPageComponentAvailabilityV2Entity` instance. Pass `None` for no initial data.

#### `StatusPageIncident(data=None)`

Create a new `StatusPageIncidentEntity` instance. Pass `None` for no initial data.

#### `StatusPageIncidentUpdate(data=None)`

Create a new `StatusPageIncidentUpdateEntity` instance. Pass `None` for no initial data.

#### `StatusPageLinkedResponseIncidentV1(data=None)`

Create a new `StatusPageLinkedResponseIncidentV1Entity` instance. Pass `None` for no initial data.

#### `StatusPageMaintenance(data=None)`

Create a new `StatusPageMaintenanceEntity` instance. Pass `None` for no initial data.

#### `StatusPageMaintenanceUpdate(data=None)`

Create a new `StatusPageMaintenanceUpdateEntity` instance. Pass `None` for no initial data.

#### `StatusPageStructure(data=None)`

Create a new `StatusPageStructureEntity` instance. Pass `None` for no initial data.

#### `StatusPagesV2(data=None)`

Create a new `StatusPagesV2Entity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TelemetryDataSourceV2(data=None)`

Create a new `TelemetryDataSourceV2Entity` instance. Pass `None` for no initial data.

#### `User(data=None)`

Create a new `UserEntity` instance. Pass `None` for no initial data.

#### `Workflow(data=None)`

Create a new `WorkflowEntity` instance. Pass `None` for no initial data.

#### `WorkflowRun(data=None)`

Create a new `WorkflowRunEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActionEntity

```python
action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes |  |
| `assignee_id` | `str` | No | ID of the user this action is assigned to |
| `completed_at` | `str` | No | When the action was completed |
| `created_at` | `str` | Yes | When the action was created |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No | Description of the action |
| `external_issue_reference` | `dict` | No |  |
| `follow_up` | `bool` | Yes | Whether an action is marked as follow-up |
| `id` | `str` | Yes | Unique identifier for the action |
| `incident_id` | `str` | Yes | Unique identifier of the incident the action belongs to |
| `status` | `str` | Yes | Status of the action |
| `updated_at` | `str` | Yes | When the action was last updated |

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

#### `create(reqdata, ctrl=None) -> ActionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Action().create({
    "assignee": {},  # dict
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "follow_up": True,  # bool
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "status": "example_status",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ActionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Action().list()
for action in results:
    print(action.data_get())
```

#### `load(reqmatch, ctrl=None) -> ActionEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Action().load({"id": "action_id"})
```

#### `remove(reqmatch, ctrl=None) -> ActionEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Action().remove({"id": "action_id"})
```

#### `update(reqdata, ctrl=None) -> ActionEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Action().update({
    "id": "action_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertEntity

```python
alert = client.Alert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `list` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `list` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `str` | Yes | When this entry was created |
| `deduplication_key` | `str` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | No | The description of the alert |
| `id` | `str` | Yes | The ID of this alert |
| `resolved_at` | `str` | No | When this alert was resolved |
| `source_url` | `str` | No | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Yes | Statuses of an alert |
| `tags` | `list` | No | Tags someone has applied to this alert |
| `title` | `str` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | Yes | When this alert was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> AlertEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Alert().create({
    "id": "example_id",  # str
    "alert_source_id": "example_alert_source_id",  # str
    "attributes": [],  # list
    "created_at": "example_created_at",  # str
    "deduplication_key": "example_deduplication_key",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Alert().list({"page_size": 1})
for alert in results:
    print(alert.data_get())
```

#### `load(reqmatch, ctrl=None) -> AlertEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Alert().load({"id": "alert_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertAttributeEntity

```python
alert_attribute = client.AlertAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `bool` | Yes | Whether this attribute is an array |
| `emoji` | `str` | No | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `str` | Yes | The ID of this attribute |
| `name` | `str` | Yes | Unique name of this attribute |
| `required` | `bool` | Yes | Whether this attribute is required. |
| `type` | `str` | Yes | Engine resource name for this attribute |

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

#### `create(reqdata, ctrl=None) -> AlertAttributeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertAttribute().create({
    "array": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "required": True,  # bool
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertAttributeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertAttribute().list()
for alert_attribute in results:
    print(alert_attribute.data_get())
```

#### `load(reqmatch, ctrl=None) -> AlertAttributeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AlertAttribute().load({"id": "alert_attribute_id"})
```

#### `remove(reqmatch, ctrl=None) -> AlertAttributeEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AlertAttribute().remove({"id": "alert_attribute_id"})
```

#### `update(reqdata, ctrl=None) -> AlertAttributeEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AlertAttribute().update({
    "id": "alert_attribute_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertAttributeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertNoteEntity

```python
alert_note = client.AlertNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `str` | No | ID of the alert group this note is attached to. |
| `alert_id` | `str` | No | ID of the alert this note is attached to. |
| `content` | `str` | Yes | Markdown body of the note |
| `created_at` | `str` | Yes | When this note was first created |
| `creator` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the alert note |
| `images` | `list` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `str` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `str` | Yes | When this note was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> AlertNoteEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertNote().create({
    "content": "example_content",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "id": "example_id",  # str
    "images": [],  # list
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertNoteEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertNote().list()
for alert_note in results:
    print(alert_note.data_get())
```

#### `load(reqmatch, ctrl=None) -> AlertNoteEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AlertNote().load({"id": "alert_note_id"})
```

#### `remove(reqmatch, ctrl=None) -> AlertNoteEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AlertNote().remove({"id": "alert_note_id"})
```

#### `update(reqdata, ctrl=None) -> AlertNoteEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AlertNote().update({
    "id": "alert_note_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertNoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertRouteEntity

```python
alert_route = client.AlertRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_sources` | `list` | Yes | Which alert sources should this alert route match? |
| `channel_config` | `list` | Yes | The channel configuration for this alert route |
| `condition_groups` | `list` | Yes | What condition groups must be true for this alert route to fire? |
| `created_at` | `str` | No | The time of creation of this alert route |
| `enabled` | `bool` | Yes | Whether this alert route is enabled or not |
| `escalation_config` | `dict` | Yes |  |
| `expressions` | `list` | Yes | The expressions used in this template |
| `grouping_config` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for this alert route config |
| `incident_config` | `dict` | Yes |  |
| `incident_template` | `dict` | Yes |  |
| `is_private` | `bool` | Yes | Whether this alert route is private. |
| `message_config` | `dict` | Yes |  |
| `message_template` | `dict` | No |  |
| `name` | `str` | Yes | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `list` | No | IDs of teams that own this alert route |
| `updated_at` | `str` | No | The time of last update of this alert route |
| `version` | `int` | Yes | The version of this alert route config |

### Operations

#### `create(reqdata, ctrl=None) -> AlertRouteEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertRoute().create({
    "alert_sources": [],  # list
    "channel_config": [],  # list
    "condition_groups": [],  # list
    "enabled": True,  # bool
    "escalation_config": {},  # dict
    "expressions": [],  # list
    "grouping_config": {},  # dict
    "id": "example_id",  # str
    "incident_config": {},  # dict
    "incident_template": {},  # dict
    "is_private": True,  # bool
    "message_config": {},  # dict
    "name": "example_name",  # str
    "version": 1,  # int
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertRouteEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertRoute().list({"page_size": 1})
for alert_route in results:
    print(alert_route.data_get())
```

#### `load(reqmatch, ctrl=None) -> AlertRouteEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AlertRoute().load({"id": "alert_route_id"})
```

#### `remove(reqmatch, ctrl=None) -> AlertRouteEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AlertRoute().remove({"id": "alert_route_id"})
```

#### `update(reqdata, ctrl=None) -> AlertRouteEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AlertRoute().update({
    "id": "alert_route_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertRouteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertSourceEntity

```python
alert_source = client.AlertSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `str` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `bool` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `int` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `dict` | Yes |  |
| `disabled` | `bool` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `dict` | Yes |  |
| `filter_condition_groups` | `list` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `str` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `dict` | Yes |  |
| `http_custom_options` | `dict` | Yes |  |
| `id` | `str` | Yes | The ID of this alert source |
| `jira_options` | `dict` | Yes |  |
| `name` | `str` | Yes | Unique name of the alert source |
| `owning_team_ids` | `list` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `dict` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `str` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `str` | Yes | Type of alert source |
| `template` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AlertSourceEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertSource().create({
    "azure_devops_options": {},  # dict
    "email_options": {},  # dict
    "heartbeat_options": {},  # dict
    "http_custom_options": {},  # dict
    "id": "example_id",  # str
    "jira_options": {},  # dict
    "name": "example_name",  # str
    "rate_limit_sharding": {},  # dict
    "source_type": "example_source_type",  # str
    "template": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertSourceEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertSource().list()
for alert_source in results:
    print(alert_source.data_get())
```

#### `load(reqmatch, ctrl=None) -> AlertSourceEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AlertSource().load({"id": "alert_source_id"})
```

#### `remove(reqmatch, ctrl=None) -> AlertSourceEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AlertSource().remove({"id": "alert_source_id"})
```

#### `update(reqdata, ctrl=None) -> AlertSourceEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AlertSource().update({
    "id": "alert_source_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertSourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertSourcesV2Entity

```python
alert_sources_v2 = client.AlertSourcesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `list` | No | IDs of teams that own this alert source |
| `source_type` | `str` | Yes | Type of alert source |
| `template` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> AlertSourcesV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertSourcesV2().create({
    "source_type": "example_source_type",  # str
    "template": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertSourcesV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertTagEntity

```python
alert_tag = client.AlertTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for the tag |
| `name` | `str` | Yes | The tag name |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[AlertTagEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertTag().list()
for alert_tag in results:
    print(alert_tag.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertTagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertsAddTagsResultV2Entity

```python
alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `list` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `list` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `str` | Yes | When this entry was created |
| `deduplication_key` | `str` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | No | The description of the alert |
| `id` | `str` | Yes | The ID of this alert |
| `resolved_at` | `str` | No | When this alert was resolved |
| `source_url` | `str` | No | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Yes | Statuses of an alert |
| `tags` | `list` | No | Tags someone has applied to this alert |
| `title` | `str` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | Yes | When this alert was last updated |

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

#### `create(reqdata, ctrl=None) -> AlertsAddTagsResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertsAddTagsResultV2().create({
    "alert_id": "example_alert_id",  # str
    "alert_source_id": "example_alert_source_id",  # str
    "attributes": [],  # list
    "created_at": "example_created_at",  # str
    "deduplication_key": "example_deduplication_key",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertsAddTagsResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertsRemoveTagsResultV2Entity

```python
alerts_remove_tags_result_v2 = client.AlertsRemoveTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `list` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `list` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `str` | Yes | When this entry was created |
| `deduplication_key` | `str` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | No | The description of the alert |
| `id` | `str` | Yes | The ID of this alert |
| `resolved_at` | `str` | No | When this alert was resolved |
| `source_url` | `str` | No | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Yes | Statuses of an alert |
| `tags` | `list` | No | Tags someone has applied to this alert |
| `title` | `str` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | Yes | When this alert was last updated |

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

#### `create(reqdata, ctrl=None) -> AlertsRemoveTagsResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertsRemoveTagsResultV2().create({
    "alert_id": "example_alert_id",  # str
    "alert_source_id": "example_alert_source_id",  # str
    "attributes": [],  # list
    "created_at": "example_created_at",  # str
    "deduplication_key": "example_deduplication_key",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertsRemoveTagsResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertsSetTagsResultV2Entity

```python
alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `list` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `list` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `str` | Yes | When this entry was created |
| `deduplication_key` | `str` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | No | The description of the alert |
| `id` | `str` | Yes | The ID of this alert |
| `resolved_at` | `str` | No | When this alert was resolved |
| `source_url` | `str` | No | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Yes | Statuses of an alert |
| `tags` | `list` | No | Tags someone has applied to this alert |
| `title` | `str` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | Yes | When this alert was last updated |

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

#### `create(reqdata, ctrl=None) -> AlertsSetTagsResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertsSetTagsResultV2().create({
    "alert_id": "example_alert_id",  # str
    "alert_source_id": "example_alert_source_id",  # str
    "attributes": [],  # list
    "created_at": "example_created_at",  # str
    "deduplication_key": "example_deduplication_key",  # str
    "id": "example_id",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertsSetTagsResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AlertsTransitionIncidentAlertResultV2Entity

```python
alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `dict` | Yes |  |
| `alert_id` | `str` | Yes | Alert to attach to the incident |
| `alert_route_id` | `str` | No | The ID of the alert route that created this incident alert |
| `id` | `str` | Yes | The ID of this alert |
| `incident` | `dict` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `str` | Yes | Incident to attach the alert to |
| `re_relate` | `bool` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `str` | Yes | What state to move the connection to |

### Operations

#### `create(reqdata, ctrl=None) -> AlertsTransitionIncidentAlertResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AlertsTransitionIncidentAlertResultV2().create({
    "alert": {},  # dict
    "alert_id": "example_alert_id",  # str
    "id": "example_id",  # str
    "incident": {},  # dict
    "incident_id": "example_incident_id",  # str
    "state": "example_state",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AlertsTransitionIncidentAlertResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AlertsTransitionIncidentAlertResultV2().list({"page_size": 1})
for alerts_transition_incident_alert_result_v2 in results:
    print(alerts_transition_incident_alert_result_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnnouncementRuleEntity

```python
announcement_rule = client.AnnouncementRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `list` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `str` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `str` | Yes | When the rule was created |
| `id` | `str` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `list` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `str` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `str` | Yes | Human readable name for the rule |
| `owning_team_ids` | `list` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `str` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `list` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `str` | No | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `str` | Yes | Where incident updates are shared once the incident is announced |
| `updated_at` | `str` | Yes | When the rule was last updated |

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

#### `create(reqdata, ctrl=None) -> AnnouncementRuleEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AnnouncementRule().create({
    "condition_groups": [],  # list
    "conditions_no_longer_apply_behaviour": "example_conditions_no_longer_apply_behaviour",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "microsoft_teams_channel_ids": [],  # list
    "mode": "example_mode",  # str
    "name": "example_name",  # str
    "owning_team_ids": [],  # list
    "slack_channel_ids": [],  # list
    "update_sharing_mode": "example_update_sharing_mode",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AnnouncementRuleEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AnnouncementRule().list()
for announcement_rule in results:
    print(announcement_rule.data_get())
```

#### `load(reqmatch, ctrl=None) -> AnnouncementRuleEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AnnouncementRule().load({"id": "announcement_rule_id"})
```

#### `remove(reqmatch, ctrl=None) -> AnnouncementRuleEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AnnouncementRule().remove({"id": "announcement_rule_id"})
```

#### `update(reqdata, ctrl=None) -> AnnouncementRuleEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AnnouncementRule().update({
    "id": "announcement_rule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnouncementRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AnnouncementTemplateEntity

```python
announcement_template = client.AnnouncementTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `list` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `list` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `str` | Yes | Unique identifier for this announcement template |
| `is_default` | `bool` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `str` | Yes | Name of this announcement template |
| `owning_team_ids` | `list` | Yes | IDs of the teams that own this template |

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

#### `create(reqdata, ctrl=None) -> AnnouncementTemplateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.AnnouncementTemplate().create({
    "actions": [],  # list
    "fields": [],  # list
    "id": "example_id",  # str
    "is_default": True,  # bool
    "name": "example_name",  # str
    "owning_team_ids": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[AnnouncementTemplateEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.AnnouncementTemplate().list()
for announcement_template in results:
    print(announcement_template.data_get())
```

#### `load(reqmatch, ctrl=None) -> AnnouncementTemplateEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.AnnouncementTemplate().load({"id": "announcement_template_id"})
```

#### `remove(reqmatch, ctrl=None) -> AnnouncementTemplateEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.AnnouncementTemplate().remove({"id": "announcement_template_id"})
```

#### `update(reqdata, ctrl=None) -> AnnouncementTemplateEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.AnnouncementTemplate().update({
    "id": "announcement_template_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AnnouncementTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `str` | No | Freeform notes about this API key |
| `created_at` | `str` | Yes | When the API key was created |
| `creator` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for this API key |
| `last_used_at` | `str` | No | When the key was last used to authenticate a request |
| `name` | `str` | Yes | The name of the API key, for the user's reference |
| `role_names` | `list` | Yes | Account-level roles to assign to the API key. |
| `roles` | `list` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `list` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `list` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `list` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `str` | Yes | When the current token for this API was last issued. |

### Operations

#### `create(reqdata, ctrl=None) -> ApiKeyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ApiKey().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "role_names": [],  # list
    "roles": [],  # list
    "team_ids": [],  # list
    "team_role_names": [],  # list
    "team_roles": [],  # list
    "token_last_issued_at": "example_token_last_issued_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ApiKeyEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ApiKey().list()
for api_key in results:
    print(api_key.data_get())
```

#### `load(reqmatch, ctrl=None) -> ApiKeyEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ApiKey().load({"id": "api_key_id"})
```

#### `remove(reqmatch, ctrl=None) -> ApiKeyEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.ApiKey().remove({"id": "api_key_id"})
```

#### `update(reqdata, ctrl=None) -> ApiKeyEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.ApiKey().update({
    "id": "api_key_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRouteEntity

```python
call_route = client.CallRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `list` | Yes | The numbers allowed to call this route. |
| `country_code` | `str` | No | The country this route's number belongs to |
| `created_at` | `str` | Yes |  |
| `current_state` | `str` | Yes | Where this route is in provisioning. |
| `custom_language` | `str` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `str` | Yes | Unique identifier for this call route |
| `name` | `str` | Yes | Name for this call route |
| `options` | `list` | Yes | The phone-tree menu this route presents. |
| `path` | `list` | Yes | Who we page when a call comes in. |
| `phone_number` | `str` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `str` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `str` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `str` | Yes |  |
| `use_caller_allowlist` | `bool` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CallRouteEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CallRoute().list()
for call_route in results:
    print(call_route.data_get())
```

#### `load(reqmatch, ctrl=None) -> CallRouteEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CallRoute().load({"id": "call_route_id"})
```

#### `update(reqdata, ctrl=None) -> CallRouteEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CallRoute().update({
    "id": "call_route_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRouteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesCreateAllowedCallerResultV2Entity

```python
call_routes_create_allowed_caller_result_v2 = client.CallRoutesCreateAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `str` | No | Label for whose number this is |
| `phone_number` | `str` | Yes | The number to allow, in international format |

### Operations

#### `create(reqdata, ctrl=None) -> CallRoutesCreateAllowedCallerResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CallRoutesCreateAllowedCallerResultV2().create({
    "call_route_id": "example_call_route_id",  # str
    "phone_number": "example_phone_number",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesCreateAllowedCallerResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesCreateOptionResultV2Entity

```python
call_routes_create_option_result_v2 = client.CallRoutesCreateOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `str` | Yes | The keypad digit a caller presses to choose this option |
| `path` | `list` | Yes | Who to page when a caller chooses this option |
| `prompt` | `str` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `create(reqdata, ctrl=None) -> CallRoutesCreateOptionResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CallRoutesCreateOptionResultV2().create({
    "call_route_id": "example_call_route_id",  # str
    "digit": "example_digit",  # str
    "path": [],  # list
    "prompt": "example_prompt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesCreateOptionResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesListAllowedCallersResultV2Entity

```python
call_routes_list_allowed_callers_result_v2 = client.CallRoutesListAllowedCallersResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for this allowed caller |
| `name` | `str` | No | Label for whose number this is |
| `phone_number` | `str` | Yes | The number allowed to call this route, in international format |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CallRoutesListAllowedCallersResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CallRoutesListAllowedCallersResultV2().list({"call_route_id": "example"})
for call_routes_list_allowed_callers_result_v2 in results:
    print(call_routes_list_allowed_callers_result_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesListAllowedCallersResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesListOptionsResultV2Entity

```python
call_routes_list_options_result_v2 = client.CallRoutesListOptionsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `str` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `str` | Yes | Unique identifier for this option |
| `path` | `list` | Yes | Who we page when a caller chooses this option |
| `prompt` | `str` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CallRoutesListOptionsResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CallRoutesListOptionsResultV2().list({"call_route_id": "example"})
for call_routes_list_options_result_v2 in results:
    print(call_routes_list_options_result_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesListOptionsResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesShowAllowedCallerResultV2Entity

```python
call_routes_show_allowed_caller_result_v2 = client.CallRoutesShowAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for this allowed caller |
| `name` | `str` | No | Label for whose number this is |
| `phone_number` | `str` | Yes | The number allowed to call this route, in international format |

### Operations

#### `load(reqmatch, ctrl=None) -> CallRoutesShowAllowedCallerResultV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CallRoutesShowAllowedCallerResultV2().load({"id": "call_routes_show_allowed_caller_result_v2_id", "call_route_id": "call_route_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesShowAllowedCallerResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesShowOptionResultV2Entity

```python
call_routes_show_option_result_v2 = client.CallRoutesShowOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `str` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `str` | Yes | Unique identifier for this option |
| `path` | `list` | Yes | Who we page when a caller chooses this option |
| `prompt` | `str` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `load(reqmatch, ctrl=None) -> CallRoutesShowOptionResultV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CallRoutesShowOptionResultV2().load({"id": "call_routes_show_option_result_v2_id", "call_route_id": "call_route_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesShowOptionResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesUpdateAllowedCallerResultV2Entity

```python
call_routes_update_allowed_caller_result_v2 = client.CallRoutesUpdateAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier for this allowed caller |
| `name` | `str` | No | Label for whose number this is |
| `phone_number` | `str` | Yes | The number allowed to call this route, in international format |

### Operations

#### `update(reqdata, ctrl=None) -> CallRoutesUpdateAllowedCallerResultV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CallRoutesUpdateAllowedCallerResultV2().update({
    "call_route_id": "call_route_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesUpdateAllowedCallerResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesUpdateOptionResultV2Entity

```python
call_routes_update_option_result_v2 = client.CallRoutesUpdateOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `str` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `str` | Yes | Unique identifier for this option |
| `path` | `list` | Yes | Who we page when a caller chooses this option |
| `prompt` | `str` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `update(reqdata, ctrl=None) -> CallRoutesUpdateOptionResultV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CallRoutesUpdateOptionResultV2().update({
    "call_route_id": "call_route_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesUpdateOptionResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallRoutesV2Entity

```python
call_routes_v2 = client.CallRoutesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> CallRoutesV2Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.CallRoutesV2().remove({"call_route_id": "call_route_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallRoutesV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallSessionEntity

```python
call_session = client.CallSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `str` | No | When the call session ended. |
| `id` | `str` | Yes | Unique identifier for this call session |
| `incident_id` | `str` | Yes | The incident this call session belongs to |
| `started_at` | `str` | Yes | When the call session started |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CallSessionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CallSession().list({"incident_id": "example"})
for call_session in results:
    print(call_session.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallSessionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CallTranscriptEntryEntity

```python
call_transcript_entry = client.CallTranscriptEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `str` | Yes | What was said |
| `id` | `str` | Yes | Unique identifier for this transcript entry |
| `medium` | `str` | Yes | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `str` | Yes | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `str` | Yes | When the participant started speaking |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CallTranscriptEntryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CallTranscriptEntry().list({"call_session_id": "example"})
for call_transcript_entry in results:
    print(call_transcript_entry.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CallTranscriptEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogEntryEntity

```python
catalog_entry = client.CatalogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `list` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `str` | No | When this entry was archived |
| `attribute_values` | `dict` | Yes | Values of this entry |
| `catalog_entry` | `dict` | Yes |  |
| `catalog_type` | `dict` | Yes |  |
| `catalog_type_id` | `str` | Yes | ID of this catalog type |
| `created_at` | `str` | Yes | When this entry was created |
| `external_id` | `str` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `str` | Yes | ID of this catalog entry |
| `name` | `str` | Yes | Name is the human readable name of this entry |
| `rank` | `int` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `list` | No | If provided, only update these attribute_values keys. |
| `updated_at` | `str` | Yes | When this entry was last updated |

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

#### `create(reqdata, ctrl=None) -> CatalogEntryEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CatalogEntry().create({
    "attribute_values": {},  # dict
    "catalog_entry": {},  # dict
    "catalog_type": {},  # dict
    "catalog_type_id": "example_catalog_type_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[CatalogEntryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CatalogEntry().list({"catalog_type_id": "example"})
for catalog_entry in results:
    print(catalog_entry.data_get())
```

#### `load(reqmatch, ctrl=None) -> CatalogEntryEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CatalogEntry().load({"id": "catalog_entry_id"})
```

#### `update(reqdata, ctrl=None) -> CatalogEntryEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CatalogEntry().update({
    "id": "catalog_entry_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogResourceEntity

```python
catalog_resource = client.CatalogResource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes | Which category of resource |
| `description` | `str` | Yes | Human readable description for this resource |
| `engine_resource_type` | `str` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `str` | Yes | Label for this catalog resource type |
| `type` | `str` | Yes | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `str` | Yes | Documentation for the literal string value of this resource |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[CatalogResourceEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CatalogResource().list()
for catalog_resource in results:
    print(catalog_resource.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogResourceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogTypeEntity

```python
catalog_type = client.CatalogType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | Yes | Annotations that can track metadata about this type |
| `categories` | `list` | Yes | What categories is this type considered part of |
| `color` | `str` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `str` | Yes | When this type was created |
| `description` | `str` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `str` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `str` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `str` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `str` | Yes | ID of this catalog type |
| `is_editable` | `bool` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `str` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `str` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `list` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `str` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `list` | No | If populated, the integrations required for this type |
| `schema` | `dict` | Yes |  |
| `semantic_type` | `str` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `str` | No | The url of the external repository where this type is managed |
| `type_name` | `str` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `str` | Yes | When this type was last updated |
| `use_name_as_identifier` | `bool` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

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

#### `create(reqdata, ctrl=None) -> CatalogTypeEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CatalogType().create({
    "annotations": {},  # dict
    "categories": [],  # list
    "color": "example_color",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "engine_resource_type": "example_engine_resource_type",  # str
    "icon": "example_icon",  # str
    "id": "example_id",  # str
    "is_editable": True,  # bool
    "name": "example_name",  # str
    "ranked": True,  # bool
    "schema": {},  # dict
    "semantic_type": "example_semantic_type",  # str
    "type_name": "example_type_name",  # str
    "updated_at": "example_updated_at",  # str
    "use_name_as_identifier": True,  # bool
})
```

#### `list(reqmatch=None, ctrl=None) -> list[CatalogTypeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CatalogType().list()
for catalog_type in results:
    print(catalog_type.data_get())
```

#### `load(reqmatch, ctrl=None) -> CatalogTypeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CatalogType().load({"id": "catalog_type_id"})
```

#### `update(reqdata, ctrl=None) -> CatalogTypeEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CatalogType().update({
    "id": "catalog_type_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CatalogTypeSchemaEntity

```python
catalog_type_schema = client.CatalogTypeSchema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | Yes | Annotations that can track metadata about this type |
| `attributes` | `list` | Yes |  |
| `categories` | `list` | Yes | What categories is this type considered part of |
| `color` | `str` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `str` | Yes | When this type was created |
| `description` | `str` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `str` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `str` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `str` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `str` | Yes | ID of this catalog type |
| `is_editable` | `bool` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `str` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `str` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `list` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `str` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `list` | No | If populated, the integrations required for this type |
| `schema` | `dict` | Yes |  |
| `semantic_type` | `str` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `str` | No | The url of the external repository where this type is managed |
| `type_name` | `str` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `str` | Yes | When this type was last updated |
| `use_name_as_identifier` | `bool` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> CatalogTypeSchemaEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CatalogTypeSchema().create({
    "catalog_type_id": "example_catalog_type_id",  # str
    "annotations": {},  # dict
    "attributes": [],  # list
    "categories": [],  # list
    "color": "example_color",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "engine_resource_type": "example_engine_resource_type",  # str
    "icon": "example_icon",  # str
    "id": "example_id",  # str
    "is_editable": True,  # bool
    "name": "example_name",  # str
    "ranked": True,  # bool
    "schema": {},  # dict
    "semantic_type": "example_semantic_type",  # str
    "type_name": "example_type_name",  # str
    "updated_at": "example_updated_at",  # str
    "use_name_as_identifier": True,  # bool
    "version": 1,  # int
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CatalogTypeSchemaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldEntity

```python
custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `str` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `str` | Yes | When the action was created |
| `description` | `str` | Yes | Description of the custom field |
| `field_type` | `str` | Yes | Type of custom field |
| `filter_by` | `dict` | Yes |  |
| `fixed_filter` | `dict` | Yes |  |
| `group_by_catalog_attribute_id` | `str` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `str` | No | Which catalog attribute provides helptext for the options |
| `id` | `str` | Yes | Unique identifier for the custom field |
| `name` | `str` | Yes | Human readable name for the custom field |
| `options` | `list` | Yes | What options are available for this custom field, if this field has options |
| `required` | `str` | No | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `str` | No | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `bool` | Yes | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `bool` | Yes | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `bool` | Yes | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `bool` | No | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `str` | Yes | When the action was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> CustomFieldEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CustomField().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "field_type": "example_field_type",  # str
    "filter_by": {},  # dict
    "fixed_filter": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "options": [],  # list
    "show_before_closure": True,  # bool
    "show_before_creation": True,  # bool
    "show_before_update": True,  # bool
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[CustomFieldEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CustomField().list()
for custom_field in results:
    print(custom_field.data_get())
```

#### `load(reqmatch, ctrl=None) -> CustomFieldEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CustomField().load({"id": "custom_field_id"})
```

#### `remove(reqmatch, ctrl=None) -> CustomFieldEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.CustomField().remove({"id": "custom_field_id"})
```

#### `update(reqdata, ctrl=None) -> CustomFieldEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CustomField().update({
    "id": "custom_field_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldOptionEntity

```python
custom_field_option = client.CustomFieldOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `str` | Yes | ID of the custom field this option belongs to |
| `id` | `str` | Yes | Unique identifier for the custom field option |
| `sort_key` | `int` | Yes | Sort key used to order the custom field options correctly |
| `value` | `str` | Yes | Human readable name for the custom field option. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> CustomFieldOptionEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.CustomFieldOption().create({
    "custom_field_id": "example_custom_field_id",  # str
    "id": "example_id",  # str
    "sort_key": 1,  # int
    "value": "example_value",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[CustomFieldOptionEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.CustomFieldOption().list({"custom_field_id": "example"})
for custom_field_option in results:
    print(custom_field_option.data_get())
```

#### `load(reqmatch, ctrl=None) -> CustomFieldOptionEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.CustomFieldOption().load({"id": "custom_field_option_id"})
```

#### `remove(reqmatch, ctrl=None) -> CustomFieldOptionEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.CustomFieldOption().remove({"id": "custom_field_option_id"})
```

#### `update(reqdata, ctrl=None) -> CustomFieldOptionEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.CustomFieldOption().update({
    "id": "custom_field_option_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldOptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EscalationEntity

```python
escalation = client.Escalation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this escalation was created |
| `creator` | `dict` | Yes | The creator of this escalation. |
| `description` | `str` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `str` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `list` | Yes | Events which describe the history of this escalation. |
| `id` | `str` | Yes | Unique ID of the escalation |
| `idempotency_key` | `str` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `str` | No | ID of an incident to associate with this escalation. |
| `priority` | `dict` | Yes | The priority associated with this escalation. |
| `related_alerts` | `list` | Yes | Alerts related to this escalation |
| `related_incidents` | `list` | Yes | Incidents related to this escalation |
| `status` | `str` | Yes | Status of the escalation |
| `title` | `str` | Yes | The title of this escalation |
| `updated_at` | `str` | Yes | When this escalation was last updated |
| `user_ids` | `list` | No | IDs of users to escalate directly to |

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

#### `create(reqdata, ctrl=None) -> EscalationEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Escalation().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "description": "example_description",  # str
    "events": [],  # list
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "priority": {},  # dict
    "related_alerts": [],  # list
    "related_incidents": [],  # list
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[EscalationEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Escalation().list()
for escalation in results:
    print(escalation.data_get())
```

#### `load(reqmatch, ctrl=None) -> EscalationEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Escalation().load({"id": "escalation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EscalationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EscalationPathTemplateEntity

```python
escalation_path_template = client.EscalationPathTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | A description of what this template is for. |
| `expressions` | `list` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `bool` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `str` | Yes | Unique identifier for this template. |
| `name` | `str` | Yes | The name of this template. |
| `params` | `list` | Yes | The parameters declared by this template. |
| `path` | `list` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `dict` | Yes |  |
| `working_hours` | `list` | No | The working hours for this template. |

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

#### `create(reqdata, ctrl=None) -> EscalationPathTemplateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.EscalationPathTemplate().create({
    "expressions": [],  # list
    "has_historical_escalation_path_versions": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "params": [],  # list
    "path": [],  # list
    "repeat_config": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[EscalationPathTemplateEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.EscalationPathTemplate().list()
for escalation_path_template in results:
    print(escalation_path_template.data_get())
```

#### `load(reqmatch, ctrl=None) -> EscalationPathTemplateEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.EscalationPathTemplate().load({"id": "escalation_path_template_id"})
```

#### `remove(reqmatch, ctrl=None) -> EscalationPathTemplateEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.EscalationPathTemplate().remove({"id": "escalation_path_template_id"})
```

#### `update(reqdata, ctrl=None) -> EscalationPathTemplateEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.EscalationPathTemplate().update({
    "id": "escalation_path_template_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EscalationPathTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```python
escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `list` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `list` | Yes | The IDs of the users to check response options for |

### Operations

#### `create(reqdata, ctrl=None) -> EscalationsCheckEscalationPermissionsResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.EscalationsCheckEscalationPermissionsResultV2().create({
    "escalation_id": "example_escalation_id",  # str
    "response_options": [],  # list
    "user_ids": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EscalationsReassignEscalationResultV2Entity

```python
escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Additional details about the new escalation. |
| `escalation_path_id` | `str` | No | ID of the escalation path to reassign to |
| `resolve_original` | `bool` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `str` | No | The title of the new escalation. |
| `user_ids` | `list` | No | IDs of users to reassign directly to |

### Operations

#### `create(reqdata, ctrl=None) -> EscalationsReassignEscalationResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.EscalationsReassignEscalationResultV2().create({
    "escalation_id": "example_escalation_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FollowUpEntity

```python
follow_up = client.FollowUp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes |  |
| `assignee_id` | `str` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `dict` | Yes |  |
| `assignee_team_id` | `str` | No | ID of the team this follow-up is assigned to |
| `category` | `dict` | Yes |  |
| `completed_at` | `str` | No | When the follow-up was completed |
| `created_at` | `str` | Yes | When the follow-up was created |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No | Description of the follow-up |
| `external_issue_reference` | `dict` | Yes |  |
| `external_issue_reference_id` | `str` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `str` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `str` | No | ID of the priority for this follow-up |
| `id` | `str` | Yes | Unique identifier for the follow-up |
| `incident_id` | `str` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `list` | Yes | Labels associated with this follow-up |
| `priority` | `dict` | Yes |  |
| `status` | `str` | Yes | Status of the follow-up |
| `title` | `str` | Yes | Title of the follow-up |
| `updated_at` | `str` | Yes | When the follow-up was last updated |

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

#### `create(reqdata, ctrl=None) -> FollowUpEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.FollowUp().create({
    "assignee": {},  # dict
    "assignee_team": {},  # dict
    "category": {},  # dict
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "external_issue_reference": {},  # dict
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "labels": [],  # list
    "priority": {},  # dict
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[FollowUpEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.FollowUp().list()
for follow_up in results:
    print(follow_up.data_get())
```

#### `load(reqmatch, ctrl=None) -> FollowUpEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.FollowUp().load({"id": "follow_up_id"})
```

#### `remove(reqmatch, ctrl=None) -> FollowUpEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.FollowUp().remove({"id": "follow_up_id"})
```

#### `update(reqdata, ctrl=None) -> FollowUpEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.FollowUp().update({
    "id": "follow_up_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowUpEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV3Entity

```python
follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes |  |
| `assignee_team` | `dict` | Yes |  |
| `category` | `dict` | Yes |  |
| `completed_at` | `str` | No | When the follow-up was completed |
| `created_at` | `str` | Yes | When the follow-up was created |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No | Description of the follow-up |
| `external_issue_reference` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique identifier for the follow-up |
| `incident_id` | `str` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `list` | Yes | Labels associated with this follow-up |
| `priority` | `dict` | Yes |  |
| `provider` | `str` | Yes | The issue tracker provider the issue belongs to |
| `status` | `str` | Yes | Status of the follow-up |
| `title` | `str` | Yes | Title of the follow-up |
| `updated_at` | `str` | Yes | When the follow-up was last updated |
| `url` | `str` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl=None) -> FollowUpsConnectExternalIssueResultV3Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.FollowUpsConnectExternalIssueResultV3().create({
    "follow_up_id": "example_follow_up_id",  # str
    "assignee": {},  # dict
    "assignee_team": {},  # dict
    "category": {},  # dict
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "external_issue_reference": {},  # dict
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "labels": [],  # list
    "priority": {},  # dict
    "provider": "example_provider",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## FollowUpsCreateFromLinkResultV3Entity

```python
follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `str` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `str` | Yes | URL of the issue in the external provider |

### Operations

#### `create(reqdata, ctrl=None) -> FollowUpsCreateFromLinkResultV3Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.FollowUpsCreateFromLinkResultV3().create({
    "incident_id": "example_incident_id",  # str
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdentityEntity

```python
identity = client.Identity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `str` | Yes | The dashboard URL for this organisation |
| `name` | `str` | Yes | The name assigned to the current API Key |
| `roles` | `list` | Yes | Which roles have been enabled for this key |
| `team_roles` | `list` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `list` | Yes | Teams that this API key is scoped to. |

### Operations

#### `load(reqmatch, ctrl=None) -> IdentityEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Identity().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdentityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentEntity

```python
incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `str` | No | The call URL attached to this incident |
| `created_at` | `str` | Yes | When the incident was created |
| `creator` | `dict` | Yes |  |
| `custom_field_entries` | `list` | Yes | Custom field entries for this incident |
| `debriefs` | `list` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `list` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `dict` | Yes |  |
| `has_debrief` | `bool` | No | If this incident has a debrief attached |
| `id` | `str` | Yes | Unique identifier for the incident |
| `idempotency_key` | `str` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `list` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `dict` | Yes |  |
| `incident_status_id` | `str` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `list` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `dict` | Yes |  |
| `incident_type_id` | `str` | No | Incident type to create this incident as |
| `last_activity_at` | `str` | Yes | When the incident last recorded 'activity' |
| `mode` | `str` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `str` | No | URL to link to the Microsoft Teams channel |
| `name` | `str` | Yes | Explanation of the incident |
| `permalink` | `str` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `list` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `str` | No | The URL of the incident post-mortem document |
| `reference` | `str` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `dict` | No |  |
| `severity` | `dict` | Yes |  |
| `severity_id` | `str` | No | Severity to create incident as |
| `slack_channel_id` | `str` | Yes | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `str` | No | Name of the slack channel |
| `slack_channel_name_override` | `str` | No | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `str` | No | URL to link to the slack channel |
| `slack_team_id` | `str` | Yes | ID of the Slack team / workspace. |
| `source_message_channel_id` | `str` | No | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | `str` | No | Timestamp of the source message, if this incident was created from one |
| `status` | `str` | Yes | Current status of the incident |
| `summary` | `str` | No | Detailed description of the incident |
| `team_ids` | `list` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `list` | No | Incident lifecycle events and when they last occurred |
| `updated_at` | `str` | Yes | When the incident was last updated |
| `visibility` | `str` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
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

#### `create(reqdata, ctrl=None) -> IncidentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Incident().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "custom_field_entries": [],  # list
    "external_issue_reference": {},  # dict
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_role_assignments": [],  # list
    "incident_status": {},  # dict
    "incident_type": {},  # dict
    "last_activity_at": "example_last_activity_at",  # str
    "mode": "example_mode",  # str
    "name": "example_name",  # str
    "reference": "example_reference",  # str
    "severity": {},  # dict
    "slack_channel_id": "example_slack_channel_id",  # str
    "slack_team_id": "example_slack_team_id",  # str
    "status": "example_status",  # str
    "team_ids": [],  # list
    "updated_at": "example_updated_at",  # str
    "visibility": "example_visibility",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Incident().list()
for incident in results:
    print(incident.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Incident().load({"id": "incident_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentActivityLogEntryEntity

```python
incident_activity_log_entry = client.IncidentActivityLogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `dict` | No | Details of an activity log entry. |
| `created_at` | `str` | Yes | When we recorded the activity |
| `id` | `str` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `str` | Yes | ID of the incident this happened on. |
| `occurred_at` | `str` | Yes | When the activity happened. |
| `title` | `str` | Yes | Human-readable summary of what happened |
| `type` | `str` | Yes | What kind of activity this is. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IncidentActivityLogEntryEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentActivityLogEntry().list({"incident_id": "example"})
for incident_activity_log_entry in results:
    print(incident_activity_log_entry.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentActivityLogEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentAttachmentEntity

```python
incident_attachment = client.IncidentAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier of this incident membership |
| `incident_id` | `str` | Yes | ID of the incident to add an attachment to |
| `resource` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentAttachmentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentAttachment().create({
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "resource": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentAttachmentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentAttachment().list()
for incident_attachment in results:
    print(incident_attachment.data_get())
```

#### `remove(reqmatch, ctrl=None) -> IncidentAttachmentEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.IncidentAttachment().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentAttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentFormEntity

```python
incident_form = client.IncidentForm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this incident form was created |
| `expressions` | `list` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `str` | Yes | Which form this is. |
| `id` | `str` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `str` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `list` | No | Elements on this form, in display order. |
| `updated_at` | `str` | Yes | When this incident form was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentFormEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentForm().create({
    "created_at": "example_created_at",  # str
    "expressions": [],  # list
    "form_type": "example_form_type",  # str
    "id": "example_id",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentFormEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentForm().list()
for incident_form in results:
    print(incident_form.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentFormEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentForm().load({"id": "incident_form_id"})
```

#### `remove(reqmatch, ctrl=None) -> IncidentFormEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.IncidentForm().remove({"id": "incident_form_id"})
```

#### `update(reqdata, ctrl=None) -> IncidentFormEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IncidentForm().update({
    "id": "incident_form_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentFormEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentMembershipEntity

```python
incident_membership = client.IncidentMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `str` | Yes | The incident to make the user a member of |
| `user_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentMembershipEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentMembership().create({
    "incident_id": "example_incident_id",  # str
    "user_id": "example_user_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentParticipantEntity

```python
incident_participant = client.IncidentParticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `list` | Yes | Participants who are actively helping with the incident |
| `passive` | `list` | Yes | Participants who are just observing the incident |

### Operations

#### `load(reqmatch, ctrl=None) -> IncidentParticipantEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentParticipant().load({"incident_id": "incident_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentParticipantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```python
incident_participant_workload = client.IncidentParticipantWorkload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `str` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `str` | No | The role they had in the incident |
| `user` | `dict` | Yes |  |
| `workload` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IncidentParticipantWorkloadEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentParticipantWorkload().list({"incident_id": "example"})
for incident_participant_workload in results:
    print(incident_participant_workload.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentRelationshipEntity

```python
incident_relationship = client.IncidentRelationship()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique identifier of this incident relationship |
| `incident` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IncidentRelationshipEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentRelationship().list({"incident_id": "example"})
for incident_relationship in results:
    print(incident_relationship.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentRelationshipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentRoleEntity

```python
incident_role = client.IncidentRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When the role was created |
| `description` | `str` | Yes | Describes the purpose of the role |
| `id` | `str` | Yes | Unique identifier for the role |
| `instructions` | `str` | Yes | Provided to whoever is nominated for the role. |
| `name` | `str` | Yes | Human readable name of the incident role |
| `required` | `bool` | No | DEPRECATED: this will always be false. |
| `role_type` | `str` | Yes | Type of incident role |
| `shortform` | `str` | Yes | Short human readable name for Slack. |
| `updated_at` | `str` | Yes | When the role was last updated |

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

#### `create(reqdata, ctrl=None) -> IncidentRoleEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentRole().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "instructions": "example_instructions",  # str
    "name": "example_name",  # str
    "role_type": "example_role_type",  # str
    "shortform": "example_shortform",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentRoleEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentRole().list()
for incident_role in results:
    print(incident_role.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentRoleEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentRole().load({"id": "incident_role_id"})
```

#### `remove(reqmatch, ctrl=None) -> IncidentRoleEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.IncidentRole().remove({"id": "incident_role_id"})
```

#### `update(reqdata, ctrl=None) -> IncidentRoleEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IncidentRole().update({
    "id": "incident_role_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentRoleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentStatusEntity

```python
incident_status = client.IncidentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | Yes | What category of status it is. |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes | Rich text description of the incident status |
| `id` | `str` | Yes | Unique ID of this incident status |
| `name` | `str` | Yes | Unique name of this status |
| `rank` | `int` | Yes | Order of this incident status |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> IncidentStatusEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentStatus().create({
    "category": "example_category",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "rank": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentStatusEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentStatus().list()
for incident_status in results:
    print(incident_status.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentStatusEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentStatus().load({"id": "incident_status_id"})
```

#### `remove(reqmatch, ctrl=None) -> IncidentStatusEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.IncidentStatus().remove({"id": "incident_status_id"})
```

#### `update(reqdata, ctrl=None) -> IncidentStatusEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IncidentStatus().update({
    "id": "incident_status_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentStatusEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTeamMembershipEntity

```python
incident_team_membership = client.IncidentTeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `str` | Yes |  |
| `team_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentTeamMembershipEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentTeamMembership().create({
    "incident_id": "example_incident_id",  # str
    "team_id": "example_team_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTeamMembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTeamMembershipsV1Entity

```python
incident_team_memberships_v1 = client.IncidentTeamMembershipsV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `str` | Yes | Revoke team access to this incident |
| `team_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentTeamMembershipsV1Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentTeamMembershipsV1().create({
    "incident_id": "example_incident_id",  # str
    "team_id": "example_team_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTeamMembershipsV1Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTemplateEntity

```python
incident_template = client.IncidentTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this incident template was created |
| `expressions` | `list` | No | The expressions used by bindings in this template |
| `id` | `str` | Yes | Unique identifier for this incident template |
| `name` | `str` | Yes | The name of this incident template, for the user's reference |
| `template` | `dict` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `str` | Yes | When this incident template was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentTemplateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentTemplate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "template": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentTemplateEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentTemplate().list()
for incident_template in results:
    print(incident_template.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentTemplateEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentTemplate().load({"id": "incident_template_id"})
```

#### `remove(reqmatch, ctrl=None) -> IncidentTemplateEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.IncidentTemplate().remove({"id": "incident_template_id"})
```

#### `update(reqdata, ctrl=None) -> IncidentTemplateEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IncidentTemplate().update({
    "id": "incident_template_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTemplatesValidateResultV1Entity

```python
incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `list` | No | The expressions used by bindings in this template |
| `name` | `str` | Yes | The name of this incident template, for the user's reference |
| `template` | `dict` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `list` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentTemplatesValidateResultV1Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentTemplatesValidateResultV1().create({
    "name": "example_name",  # str
    "template": {},  # dict
    "warnings": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTimelineItemEntity

```python
incident_timeline_item = client.IncidentTimelineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `str` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `str` | Yes | When this item was added to the timeline |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No | Description of the timeline item, in markdown |
| `id` | `str` | Yes | Unique identifier of the timeline item |
| `idempotency_key` | `str` | Yes | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `str` | Yes | Incident to add this item to |
| `timestamp` | `str` | Yes | When the thing this item describes happened. |
| `title` | `str` | Yes | Title of the timeline item |
| `updated_at` | `str` | Yes | When this item was last edited |

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

#### `create(reqdata, ctrl=None) -> IncidentTimelineItemEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentTimelineItem().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_id": "example_incident_id",  # str
    "timestamp": "example_timestamp",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentTimelineItemEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentTimelineItem().list({"incident_id": "example"})
for incident_timeline_item in results:
    print(incident_timeline_item.data_get())
```

#### `update(reqdata, ctrl=None) -> IncidentTimelineItemEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IncidentTimelineItem().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTimelineItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTimestampEntity

```python
incident_timestamp = client.IncidentTimestamp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | Unique ID of this incident timestamp |
| `name` | `str` | Yes | Unique name of this timestamp |
| `rank` | `int` | Yes | Order in which this timestamp should be shown |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IncidentTimestampEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentTimestamp().list()
for incident_timestamp in results:
    print(incident_timestamp.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentTimestampEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentTimestamp().load({"id": "incident_timestamp_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTimestampEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentTypeEntity

```python
incident_type = client.IncidentType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `str` | Yes | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `str` | Yes | When this resource was created |
| `description` | `str` | Yes | What is this incident type for? |
| `id` | `str` | Yes | Unique identifier for this Incident Type |
| `is_default` | `bool` | Yes | The default Incident Type is used when no other type is explicitly specified |
| `name` | `str` | Yes | The name of this Incident Type |
| `owning_team_ids` | `list` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `bool` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `str` | Yes | When this resource was last updated |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IncidentTypeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentType().list()
for incident_type in results:
    print(incident_type.data_get())
```

#### `load(reqmatch, ctrl=None) -> IncidentTypeEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IncidentType().load({"id": "incident_type_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentTypeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IncidentUpdateEntity

```python
incident_update = client.IncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When the update was created |
| `id` | `str` | Yes | Unique identifier for this incident update |
| `idempotency_key` | `str` | Yes | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `str` | Yes | The incident you want to update |
| `merged_into_incident_id` | `str` | No | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `str` | No | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `dict` | Yes |  |
| `new_severity` | `dict` | Yes |  |
| `to_incident_status_id` | `str` | No | Move the incident to this status |
| `to_severity_id` | `str` | No | Move the incident to this severity |
| `updater` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> IncidentUpdateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.IncidentUpdate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_id": "example_incident_id",  # str
    "new_incident_status": {},  # dict
    "new_severity": {},  # dict
    "updater": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[IncidentUpdateEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IncidentUpdate().list()
for incident_update in results:
    print(incident_update.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IncidentUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpAllowlistEntity

```python
ip_allowlist = client.IpAllowlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `list` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `bool` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `str` | No | The time this allowlist was last updated |
| `version` | `int` | Yes | The version of this IP allowlist |

### Operations

#### `load(reqmatch, ctrl=None) -> IpAllowlistEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.IpAllowlist().load()
```

#### `update(reqdata, ctrl=None) -> IpAllowlistEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.IpAllowlist().update({
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpAllowlistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IpRangeEntity

```python
ip_range = client.IpRange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `str` | Yes | The address in CIDR notation. |
| `description` | `str` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[IpRangeEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.IpRange().list()
for ip_range in results:
    print(ip_range.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IpRangeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MaintenanceWindowEntity

```python
maintenance_window = client.MaintenanceWindow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_groups` | `list` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `str` | No | When this maintenance window was archived, if it has been |
| `created_at` | `str` | Yes | When this maintenance window was created |
| `end_at` | `str` | Yes | When the maintenance window ends |
| `escalation_targets` | `list` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `str` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `str` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `dict` | Yes |  |
| `name` | `str` | Yes | Human readable name for the maintenance window |
| `notification_message` | `str` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `list` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `int` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `int` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `list` | No | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `bool` | Yes | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `bool` | Yes | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `bool` | Yes | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `str` | Yes | When the maintenance window starts |
| `updated_at` | `str` | Yes | When this maintenance window was last updated |

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

#### `create(reqdata, ctrl=None) -> MaintenanceWindowEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.MaintenanceWindow().create({
    "alert_condition_groups": [],  # list
    "created_at": "example_created_at",  # str
    "end_at": "example_end_at",  # str
    "id": "example_id",  # str
    "lead": {},  # dict
    "name": "example_name",  # str
    "reroute_on_end": True,  # bool
    "resolve_on_end": True,  # bool
    "show_in_sidebar": True,  # bool
    "start_at": "example_start_at",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[MaintenanceWindowEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.MaintenanceWindow().list()
for maintenance_window in results:
    print(maintenance_window.data_get())
```

#### `load(reqmatch, ctrl=None) -> MaintenanceWindowEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.MaintenanceWindow().load({"id": "maintenance_window_id"})
```

#### `remove(reqmatch, ctrl=None) -> MaintenanceWindowEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.MaintenanceWindow().remove({"id": "maintenance_window_id"})
```

#### `update(reqdata, ctrl=None) -> MaintenanceWindowEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.MaintenanceWindow().update({
    "id": "maintenance_window_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MaintenanceWindowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OnCallNotificationMethodPublicV2Entity

```python
on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | Yes | The address of this method (e.g. |
| `id` | `str` | Yes | Unique identifier for this notification method |
| `is_usable` | `bool` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `str` | Yes | The high-level type of notification method. |
| `phone_details` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[OnCallNotificationMethodPublicV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.OnCallNotificationMethodPublicV2().list({"user_id": "example"})
for on_call_notification_method_public_v2 in results:
    print(on_call_notification_method_public_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OnCallNotificationRulePublicV2Entity

```python
on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `dict` | Yes |  |
| `delay_seconds` | `int` | No | Delay in seconds before this rule activates. |
| `id` | `str` | Yes | Unique identifier for this notification rule |
| `method_target` | `dict` | Yes |  |
| `method_type` | `str` | Yes | The high-level type of notification method. |
| `phone` | `dict` | Yes |  |
| `rule_type` | `str` | Yes | The urgency level this rule applies to |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[OnCallNotificationRulePublicV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.OnCallNotificationRulePublicV2().list({"user_id": "example"})
for on_call_notification_rule_public_v2 in results:
    print(on_call_notification_rule_public_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigEntity

```python
pay_config = client.PayConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `int` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `str` | Yes |  |
| `currency` | `str` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `str` | Yes | Unique identifier for this pay config |
| `name` | `str` | Yes | Human readable name for this pay config |
| `one_off_rules` | `list` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `str` | No | When a published report first priced against this config. |
| `rate_time_unit` | `str` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `str` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `str` | Yes |  |
| `weekly_rules` | `list` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

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

#### `create(reqdata, ctrl=None) -> PayConfigEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayConfig().create({
    "base_rate_cents": 1,  # int
    "created_at": "example_created_at",  # str
    "currency": "example_currency",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "one_off_rules": [],  # list
    "rate_time_unit": "example_rate_time_unit",  # str
    "timezone": "example_timezone",  # str
    "updated_at": "example_updated_at",  # str
    "weekly_rules": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[PayConfigEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PayConfig().list()
for pay_config in results:
    print(pay_config.data_get())
```

#### `load(reqmatch, ctrl=None) -> PayConfigEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PayConfig().load({"id": "pay_config_id"})
```

#### `remove(reqmatch, ctrl=None) -> PayConfigEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.PayConfig().remove({"id": "pay_config_id"})
```

#### `update(reqdata, ctrl=None) -> PayConfigEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.PayConfig().update({
    "id": "pay_config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsCreateOneOffRuleResultV2Entity

```python
pay_configs_create_one_off_rule_result_v2 = client.PayConfigsCreateOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `str` | Yes | When this rule stops applying |
| `name` | `str` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | Yes | When this rule starts applying |

### Operations

#### `create(reqdata, ctrl=None) -> PayConfigsCreateOneOffRuleResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayConfigsCreateOneOffRuleResultV2().create({
    "pay_config_id": "example_pay_config_id",  # str
    "end_at": "example_end_at",  # str
    "name": "example_name",  # str
    "rate_cents": 1,  # int
    "start_at": "example_start_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsCreateOneOffRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsCreateWeeklyRuleResultV2Entity

```python
pay_configs_create_weekly_rule_result_v2 = client.PayConfigsCreateWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `str` | Yes | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Yes | Days of the week this rule applies on |

### Operations

#### `create(reqdata, ctrl=None) -> PayConfigsCreateWeeklyRuleResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayConfigsCreateWeeklyRuleResultV2().create({
    "pay_config_id": "example_pay_config_id",  # str
    "end_time": "example_end_time",  # str
    "rate_cents": 1,  # int
    "start_time": "example_start_time",  # str
    "weekdays": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsCreateWeeklyRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsListOneOffRulesResultV2Entity

```python
pay_configs_list_one_off_rules_result_v2 = client.PayConfigsListOneOffRulesResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `str` | Yes | When this rule stops applying |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | Yes | When this rule starts applying |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PayConfigsListOneOffRulesResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PayConfigsListOneOffRulesResultV2().list({"pay_config_id": "example"})
for pay_configs_list_one_off_rules_result_v2 in results:
    print(pay_configs_list_one_off_rules_result_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsListOneOffRulesResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsListWeeklyRulesResultV2Entity

```python
pay_configs_list_weekly_rules_result_v2 = client.PayConfigsListWeeklyRulesResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `str` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Yes | Days of the week this rule applies on |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PayConfigsListWeeklyRulesResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PayConfigsListWeeklyRulesResultV2().list({"pay_config_id": "example"})
for pay_configs_list_weekly_rules_result_v2 in results:
    print(pay_configs_list_weekly_rules_result_v2.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsListWeeklyRulesResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsShowOneOffRuleResultV2Entity

```python
pay_configs_show_one_off_rule_result_v2 = client.PayConfigsShowOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `str` | Yes | When this rule stops applying |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | Yes | When this rule starts applying |

### Operations

#### `load(reqmatch, ctrl=None) -> PayConfigsShowOneOffRuleResultV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PayConfigsShowOneOffRuleResultV2().load({"id": "pay_configs_show_one_off_rule_result_v2_id", "pay_config_id": "pay_config_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsShowOneOffRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsShowWeeklyRuleResultV2Entity

```python
pay_configs_show_weekly_rule_result_v2 = client.PayConfigsShowWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `str` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Yes | Days of the week this rule applies on |

### Operations

#### `load(reqmatch, ctrl=None) -> PayConfigsShowWeeklyRuleResultV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PayConfigsShowWeeklyRuleResultV2().load({"id": "pay_configs_show_weekly_rule_result_v2_id", "pay_config_id": "pay_config_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsShowWeeklyRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsUpdateOneOffRuleResultV2Entity

```python
pay_configs_update_one_off_rule_result_v2 = client.PayConfigsUpdateOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `str` | Yes | When this rule stops applying |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | Yes | When this rule starts applying |

### Operations

#### `update(reqdata, ctrl=None) -> PayConfigsUpdateOneOffRuleResultV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.PayConfigsUpdateOneOffRuleResultV2().update({
    "id": "id",
    "pay_config_id": "pay_config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsUpdateOneOffRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsUpdateWeeklyRuleResultV2Entity

```python
pay_configs_update_weekly_rule_result_v2 = client.PayConfigsUpdateWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `str` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Yes | Days of the week this rule applies on |

### Operations

#### `update(reqdata, ctrl=None) -> PayConfigsUpdateWeeklyRuleResultV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.PayConfigsUpdateWeeklyRuleResultV2().update({
    "id": "id",
    "pay_config_id": "pay_config_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsUpdateWeeklyRuleResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayConfigsV2Entity

```python
pay_configs_v2 = client.PayConfigsV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> PayConfigsV2Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.PayConfigsV2().remove({"id": "id", "pay_config_id": "pay_config_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayConfigsV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayReportEntity

```python
pay_report = client.PayReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this report was created |
| `creator` | `dict` | No |  |
| `end_date` | `str` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | No | Why a report could not be generated |
| `error_message` | `str` | No | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Yes | Unique identifier for this pay report |
| `name` | `str` | Yes | Human readable name for this report |
| `overlapping_shifts` | `str` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `dict` | Yes |  |
| `pay_config_id` | `str` | No | The pay config to price every shift with. |
| `published_at` | `str` | No | When this report was published. |
| `rotation_filters` | `list` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `list` | Yes | The schedules this report covers |
| `start_date` | `str` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `str` | Yes | When this report was last updated |

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

#### `create(reqdata, ctrl=None) -> PayReportEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayReport().create({
    "created_at": "example_created_at",  # str
    "end_date": "example_end_date",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "overlapping_shifts": "example_overlapping_shifts",  # str
    "pay_config_expression": {},  # dict
    "schedule_ids": [],  # list
    "start_date": "example_start_date",  # str
    "status": "example_status",  # str
    "unpaid_shifts": "example_unpaid_shifts",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[PayReportEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PayReport().list()
for pay_report in results:
    print(pay_report.data_get())
```

#### `load(reqmatch, ctrl=None) -> PayReportEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PayReport().load({"id": "pay_report_id"})
```

#### `remove(reqmatch, ctrl=None) -> PayReportEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.PayReport().remove({"id": "pay_report_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayReportsPublishResultV2Entity

```python
pay_reports_publish_result_v2 = client.PayReportsPublishResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `list` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `str` | Yes | When this report was created |
| `creator` | `dict` | No |  |
| `end_date` | `str` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | No | Why a report could not be generated |
| `error_message` | `str` | No | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Yes | Unique identifier for this pay report |
| `name` | `str` | Yes | Human readable name for this report |
| `overlapping_shifts` | `str` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `str` | No | When this report was published. |
| `schedule_ids` | `list` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `str` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `str` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `str` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> PayReportsPublishResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayReportsPublishResultV2().create({
    "pay_report_id": "example_pay_report_id",  # str
    "cc_emails": [],  # list
    "created_at": "example_created_at",  # str
    "end_date": "example_end_date",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "overlapping_shifts": "example_overlapping_shifts",  # str
    "schedule_ids": [],  # list
    "send_user_breakdowns": "example_send_user_breakdowns",  # str
    "start_date": "example_start_date",  # str
    "status": "example_status",  # str
    "unpaid_shifts": "example_unpaid_shifts",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayReportsPublishResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayReportsUnpublishResultV2Entity

```python
pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this report was created |
| `creator` | `dict` | No |  |
| `end_date` | `str` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | No | Why a report could not be generated |
| `error_message` | `str` | No | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Yes | Unique identifier for this pay report |
| `name` | `str` | Yes | Human readable name for this report |
| `overlapping_shifts` | `str` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `str` | No | When this report was published. |
| `schedule_ids` | `list` | Yes | The schedules this report covers |
| `start_date` | `str` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `str` | Yes | Why this report is being unpublished |
| `updated_at` | `str` | Yes | When this report was last updated |

### Operations

#### `create(reqdata, ctrl=None) -> PayReportsUnpublishResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PayReportsUnpublishResultV2().create({
    "pay_report_id": "example_pay_report_id",  # str
    "created_at": "example_created_at",  # str
    "end_date": "example_end_date",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "overlapping_shifts": "example_overlapping_shifts",  # str
    "schedule_ids": [],  # list
    "start_date": "example_start_date",  # str
    "status": "example_status",  # str
    "unpaid_shifts": "example_unpaid_shifts",  # str
    "unpublish_reason": "example_unpublish_reason",  # str
    "updated_at": "example_updated_at",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayReportsUnpublishResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PayReportsV2Entity

```python
pay_reports_v2 = client.PayReportsV2()
```

### Operations

#### `load(reqmatch, ctrl=None) -> PayReportsV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PayReportsV2().load({"pay_report_id": "pay_report_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PayReportsV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PoliciesV2Entity

```python
policies_v2 = client.PoliciesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> PoliciesV2Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.PoliciesV2().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PoliciesV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyEntity

```python
policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `dict` | Yes |  |
| `conditions` | `list` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `str` | Yes |  |
| `debrief` | `dict` | Yes | Set when policy_type is debrief. |
| `description` | `str` | No | Human readable description of the policy |
| `expressions` | `list` | No | The expressions relating to this policy |
| `follow_up` | `dict` | Yes | Set when policy_type is follow_up. |
| `id` | `str` | Yes | Unique ID of the policy |
| `name` | `str` | Yes | Human readable name of the policy |
| `on_call_readiness` | `dict` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `str` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `dict` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `dict` | Yes | Detects gaps in on-call coverage. |
| `status` | `str` | Yes | Disabled policies stop evaluating but keep their config |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> PolicyEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Policy().create({
    "assignment_rules": {},  # dict
    "conditions": [],  # list
    "created_at": "example_created_at",  # str
    "debrief": {},  # dict
    "follow_up": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "policy_type": "example_policy_type",  # str
    "post_mortem": {},  # dict
    "schedule": {},  # dict
    "status": "example_status",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[PolicyEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Policy().list()
for policy in results:
    print(policy.data_get())
```

#### `load(reqmatch, ctrl=None) -> PolicyEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Policy().load({"id": "policy_id"})
```

#### `update(reqdata, ctrl=None) -> PolicyEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Policy().update({
    "id": "policy_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyFindingEntity

```python
policy_finding = client.PolicyFinding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `dict` | Yes | Set when policy_type is debrief. |
| `dismissal` | `dict` | Yes |  |
| `due_at` | `str` | No | When this finding becomes overdue |
| `follow_up` | `dict` | Yes | Set when policy_type is follow_up. |
| `id` | `str` | Yes | Unique ID of the finding |
| `last_checked_at` | `str` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | Yes | The policy this finding was raised against |
| `policy_type` | `str` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `list` | Yes | Who is expected to resolve this finding |
| `schedule` | `dict` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Yes | Set when policy_type is shift_conflict. |
| `state` | `str` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `str` | Yes |  |
| `vacation_conflict` | `dict` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PolicyFindingEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PolicyFinding().list()
for policy_finding in results:
    print(policy_finding.data_get())
```

#### `load(reqmatch, ctrl=None) -> PolicyFindingEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PolicyFinding().load({"id": "policy_finding_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyFindingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyFindingsDismissResultV2Entity

```python
policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `dict` | Yes | Set when policy_type is debrief. |
| `dismissal` | `dict` | Yes |  |
| `due_at` | `str` | No | When this finding becomes overdue |
| `follow_up` | `dict` | Yes | Set when policy_type is follow_up. |
| `id` | `str` | Yes | Unique ID of the finding |
| `last_checked_at` | `str` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | Yes | The policy this finding was raised against |
| `policy_type` | `str` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Yes | Set when policy_type is post_mortem. |
| `reason` | `str` | Yes | Why this finding is being dismissed |
| `responsible_users` | `list` | Yes | Who is expected to resolve this finding |
| `schedule` | `dict` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Yes | Set when policy_type is shift_conflict. |
| `state` | `str` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `str` | Yes |  |
| `vacation_conflict` | `dict` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl=None) -> PolicyFindingsDismissResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PolicyFindingsDismissResultV2().create({
    "policy_finding_id": "example_policy_finding_id",  # str
    "created_at": "example_created_at",  # str
    "debrief": {},  # dict
    "dismissal": {},  # dict
    "follow_up": {},  # dict
    "id": "example_id",  # str
    "last_checked_at": "example_last_checked_at",  # str
    "on_call_readiness": {},  # dict
    "policy_id": "example_policy_id",  # str
    "policy_type": "example_policy_type",  # str
    "post_mortem": {},  # dict
    "reason": "example_reason",  # str
    "responsible_users": [],  # list
    "schedule": {},  # dict
    "shift_conflict": {},  # dict
    "state": "example_state",  # str
    "updated_at": "example_updated_at",  # str
    "vacation_conflict": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyFindingsRestoreResultV2Entity

```python
policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `dict` | Yes | Set when policy_type is debrief. |
| `dismissal` | `dict` | Yes |  |
| `due_at` | `str` | No | When this finding becomes overdue |
| `follow_up` | `dict` | Yes | Set when policy_type is follow_up. |
| `id` | `str` | Yes | Unique ID of the finding |
| `last_checked_at` | `str` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | Yes | The policy this finding was raised against |
| `policy_type` | `str` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `list` | Yes | Who is expected to resolve this finding |
| `schedule` | `dict` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Yes | Set when policy_type is shift_conflict. |
| `state` | `str` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `str` | Yes |  |
| `vacation_conflict` | `dict` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(reqdata, ctrl=None) -> PolicyFindingsRestoreResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.PolicyFindingsRestoreResultV2().create({
    "policy_finding_id": "example_policy_finding_id",  # str
    "created_at": "example_created_at",  # str
    "debrief": {},  # dict
    "dismissal": {},  # dict
    "follow_up": {},  # dict
    "id": "example_id",  # str
    "last_checked_at": "example_last_checked_at",  # str
    "on_call_readiness": {},  # dict
    "policy_id": "example_policy_id",  # str
    "policy_type": "example_policy_type",  # str
    "post_mortem": {},  # dict
    "responsible_users": [],  # list
    "schedule": {},  # dict
    "shift_conflict": {},  # dict
    "state": "example_state",  # str
    "updated_at": "example_updated_at",  # str
    "vacation_conflict": {},  # dict
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PostmortemDocumentEntity

```python
postmortem_document = client.PostmortemDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | Timestamp for when the document was created |
| `document_url` | `str` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `list` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `list` | Yes | URLs of any external locations this document has been exported to |
| `id` | `str` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `str` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `str` | Yes | The current status of this post-mortem document |
| `title` | `str` | Yes | The display title of the post-mortem document |
| `type` | `str` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `str` | Yes | Timestamp for when the document was last updated |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[PostmortemDocumentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.PostmortemDocument().list()
for postmortem_document in results:
    print(postmortem_document.data_get())
```

#### `load(reqmatch, ctrl=None) -> PostmortemDocumentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.PostmortemDocument().load({"id": "postmortem_document_id"})
```

#### `update(reqdata, ctrl=None) -> PostmortemDocumentEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.PostmortemDocument().update({
    "id": "postmortem_document_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostmortemDocumentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleEntity

```python
schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | Yes | Annotations that track metadata about this resource |
| `config` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `current_shifts` | `list` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique internal ID of the schedule |
| `name` | `str` | Yes | Human readable name synced from external provider |
| `next_shifts` | `list` | No | The shifts after the next changeover. |
| `permalink` | `str` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `list` | Yes | IDs of teams that own this schedule |
| `timezone` | `str` | Yes | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ScheduleEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Schedule().create({
    "annotations": {},  # dict
    "config": {},  # dict
    "created_at": "example_created_at",  # str
    "holidays_public_config": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "permalink": "example_permalink",  # str
    "team_ids": [],  # list
    "timezone": "example_timezone",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ScheduleEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Schedule().list()
for schedule in results:
    print(schedule.data_get())
```

#### `load(reqmatch, ctrl=None) -> ScheduleEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Schedule().load({"id": "schedule_id"})
```

#### `remove(reqmatch, ctrl=None) -> ScheduleEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Schedule().remove({"id": "schedule_id"})
```

#### `update(reqdata, ctrl=None) -> ScheduleEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Schedule().update({
    "id": "schedule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleEntriesListPayloadV2Entity

```python
schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `str` | No | The end of the window to preview entries for. |
| `entry_window_start` | `str` | No | The start of the window to preview entries for. |
| `final` | `list` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `list` | Yes | Overrides that apply within the requested window |
| `schedule` | `dict` | Yes |  |
| `scheduled` | `list` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `create(reqdata, ctrl=None) -> ScheduleEntriesListPayloadV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScheduleEntriesListPayloadV2().create({
    "schedule_id": "example_schedule_id",  # str
    "final": [],  # list
    "overrides": [],  # list
    "schedule": {},  # dict
    "scheduled": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleEntryEntity

```python
schedule_entry = client.ScheduleEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `dict` | Yes |  |
| `schedule_entries` | `dict` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `load(reqmatch, ctrl=None) -> ScheduleEntryEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScheduleEntry().load({"schedule_id": "schedule_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleEntryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleReplicaEntity

```python
schedule_replica = client.ScheduleReplica()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this schedule replica was first created |
| `id` | `str` | Yes | Unique identifier of the schedule replica |
| `last_sync_error` | `str` | No | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `str` | No | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `int` | No | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `str` | Yes | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `str` | Yes | The external provider where this schedule is replicated to |
| `replica_provider_id` | `str` | Yes | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `str` | Yes | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `list` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `str` | Yes | When this schedule replica was last updated |
| `user_statuses` | `list` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `create(reqdata, ctrl=None) -> ScheduleReplicaEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScheduleReplica().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "replica_fallback_user_id": "example_replica_fallback_user_id",  # str
    "replica_provider": "example_replica_provider",  # str
    "replica_provider_id": "example_replica_provider_id",  # str
    "schedule_id": "example_schedule_id",  # str
    "sources": [],  # list
    "updated_at": "example_updated_at",  # str
    "user_statuses": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ScheduleReplicaEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ScheduleReplica().list({"id": "example"})
for schedule_replica in results:
    print(schedule_replica.data_get())
```

#### `load(reqmatch, ctrl=None) -> ScheduleReplicaEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScheduleReplica().load({"id": "schedule_replica_id", "schedule_id": "schedule_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleReplicaEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleSyncRuleEntity

```python
schedule_sync_rule = client.ScheduleSyncRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | No | Annotations that track metadata about this resource |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `list` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `str` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `str` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `dict` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `str` | Yes | The sync target ID this rule links to |
| `sync_type` | `str` | Yes | Which schedule members sync to the user group |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ScheduleSyncRuleEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScheduleSyncRule().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "permanent_member_user_ids": [],  # list
    "schedule_id": "example_schedule_id",  # str
    "schedule_sync_target": {},  # dict
    "schedule_sync_target_id": "example_schedule_sync_target_id",  # str
    "sync_type": "example_sync_type",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ScheduleSyncRuleEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ScheduleSyncRule().list({"id": "example"})
for schedule_sync_rule in results:
    print(schedule_sync_rule.data_get())
```

#### `load(reqmatch, ctrl=None) -> ScheduleSyncRuleEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScheduleSyncRule().load({"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"})
```

#### `update(reqdata, ctrl=None) -> ScheduleSyncRuleEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.ScheduleSyncRule().update({
    "id": "schedule_sync_rule_id",
    "schedule_id": "schedule_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleSyncRuleEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ScheduleSyncTargetEntity

```python
schedule_sync_target = client.ScheduleSyncTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `bool` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `dict` | No | Annotations that track metadata about this resource |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `list` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `dict` | Yes |  |
| `slack_team_id` | `str` | Yes | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `str` | Yes | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> ScheduleSyncTargetEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.ScheduleSyncTarget().create({
    "add_bot_to_group": True,  # bool
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "linked_schedules": [],  # list
    "new_slack_user_group": {},  # dict
    "slack_team_id": "example_slack_team_id",  # str
    "slack_user_group_id": "example_slack_user_group_id",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[ScheduleSyncTargetEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.ScheduleSyncTarget().list()
for schedule_sync_target in results:
    print(schedule_sync_target.data_get())
```

#### `load(reqmatch, ctrl=None) -> ScheduleSyncTargetEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.ScheduleSyncTarget().load({"id": "schedule_sync_target_id"})
```

#### `remove(reqmatch, ctrl=None) -> ScheduleSyncTargetEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.ScheduleSyncTarget().remove({"id": "schedule_sync_target_id"})
```

#### `update(reqdata, ctrl=None) -> ScheduleSyncTargetEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.ScheduleSyncTarget().update({
    "id": "schedule_sync_target_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScheduleSyncTargetEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SchedulesShowOverrideResultV2Entity

```python
schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `end_at` | `str` | Yes | End of the override |
| `id` | `str` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `str` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `str` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `str` | Yes | The schedule that this override applies to |
| `start_at` | `str` | Yes | Start of the override |
| `updated_at` | `str` | Yes |  |
| `user` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> SchedulesShowOverrideResultV2Entity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.SchedulesShowOverrideResultV2().create({
    "created_at": "example_created_at",  # str
    "end_at": "example_end_at",  # str
    "id": "example_id",  # str
    "layer_id": "example_layer_id",  # str
    "rotation_id": "example_rotation_id",  # str
    "schedule_id": "example_schedule_id",  # str
    "start_at": "example_start_at",  # str
    "updated_at": "example_updated_at",  # str
    "user": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[SchedulesShowOverrideResultV2Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.SchedulesShowOverrideResultV2().list({"schedule_id": "example"})
for schedules_show_override_result_v2 in results:
    print(schedules_show_override_result_v2.data_get())
```

#### `load(reqmatch, ctrl=None) -> SchedulesShowOverrideResultV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.SchedulesShowOverrideResultV2().load({"id": "schedules_show_override_result_v2_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SchedulesShowOverrideResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SchedulesUpdateOverrideResultV2Entity

```python
schedules_update_override_result_v2 = client.SchedulesUpdateOverrideResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `end_at` | `str` | Yes | End of the override |
| `id` | `str` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `str` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `str` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `str` | Yes | The schedule that this override applies to |
| `start_at` | `str` | Yes | Start of the override |
| `updated_at` | `str` | Yes |  |
| `user` | `dict` | Yes |  |

### Operations

#### `update(reqdata, ctrl=None) -> SchedulesUpdateOverrideResultV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.SchedulesUpdateOverrideResultV2().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SchedulesUpdateOverrideResultV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SecretEntity

```python
secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No | Optional description of what this secret is for |
| `id` | `str` | Yes | Unique identifier for this secret |
| `last_four_chars` | `str` | No | The last four characters of the current value, for masked display. |
| `name` | `str` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `list` | No | IDs of the teams that own this secret. |
| `secret` | `dict` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `str` | Yes |  |
| `value` | `str` | Yes | The secret's plaintext value. |
| `version` | `int` | Yes | The current version number, incremented on each rotation |
| `versions` | `list` | Yes | The secret's versions, newest first |

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

#### `create(reqdata, ctrl=None) -> SecretEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Secret().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "secret": {},  # dict
    "updated_at": "example_updated_at",  # str
    "value": "example_value",  # str
    "version": 1,  # int
    "versions": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[SecretEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Secret().list()
for secret in results:
    print(secret.data_get())
```

#### `load(reqmatch, ctrl=None) -> SecretEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Secret().load({"id": "secret_id"})
```

#### `remove(reqmatch, ctrl=None) -> SecretEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Secret().remove({"id": "secret_id"})
```

#### `update(reqdata, ctrl=None) -> SecretEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Secret().update({
    "id": "secret_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SecretEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SeverityEntity

```python
severity = client.Severity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When the action was created |
| `description` | `str` | Yes | Description of the severity |
| `id` | `str` | Yes | Unique identifier of the severity |
| `name` | `str` | Yes | Human readable name of the severity |
| `rank` | `int` | Yes | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `str` | Yes | When the action was last updated |

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

#### `create(reqdata, ctrl=None) -> SeverityEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Severity().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "rank": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[SeverityEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Severity().list()
for severity in results:
    print(severity.data_get())
```

#### `load(reqmatch, ctrl=None) -> SeverityEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Severity().load({"id": "severity_id"})
```

#### `update(reqdata, ctrl=None) -> SeverityEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Severity().update({
    "id": "severity_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SeverityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageEntity

```python
status_page = client.StatusPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | The description of this status page |
| `id` | `str` | Yes | Unique ID of this status page |
| `name` | `str` | Yes | The title of this status page |
| `public_url` | `str` | No | The public URL of this status page |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatusPageEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatusPage().list()
for status_page in results:
    print(status_page.data_get())
```

#### `load(reqmatch, ctrl=None) -> StatusPageEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPage().load({"id": "status_page_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageComponentEntity

```python
status_page_component = client.StatusPageComponent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | Optional short description of this component |
| `id` | `str` | Yes | Unique identifier for this component |
| `management_meta` | `dict` | Yes |  |
| `name` | `str` | Yes | Human-readable name for the component |

### Operations

#### `create(reqdata, ctrl=None) -> StatusPageComponentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatusPageComponent().create({
    "id": "example_id",  # str
    "management_meta": {},  # dict
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list[StatusPageComponentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatusPageComponent().list()
for status_page_component in results:
    print(status_page_component.data_get())
```

#### `load(reqmatch, ctrl=None) -> StatusPageComponentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPageComponent().load({"id": "status_page_component_id"})
```

#### `remove(reqmatch, ctrl=None) -> StatusPageComponentEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.StatusPageComponent().remove({"id": "status_page_component_id"})
```

#### `update(reqdata, ctrl=None) -> StatusPageComponentEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.StatusPageComponent().update({
    "id": "status_page_component_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageComponentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageComponentAvailabilityV2Entity

```python
status_page_component_availability_v2 = client.StatusPageComponentAvailabilityV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `availability_percent` | `str` | No | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `str` | Yes | ID of the component. |
| `data_available_since` | `str` | Yes | Earliest time we have status data for this component. |
| `end_at` | `str` | Yes | End of the requested availability window |
| `start_at` | `str` | Yes | Start of the requested availability window |
| `status_page_id` | `str` | Yes | ID of the status page |

### Operations

#### `load(reqmatch, ctrl=None) -> StatusPageComponentAvailabilityV2Entity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPageComponentAvailabilityV2().load({"component_id": "component_id", "status_page_id": "status_page_id", "end_at": "end_at", "start_at": "start_at"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageComponentAvailabilityV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageIncidentEntity

```python
status_page_incident = client.StatusPageIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impacts` | `list` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `list` | No | An array of mappings from component ID to current component status |
| `id` | `str` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `str` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `str` | Yes | Current status for this incident |
| `message` | `str` | Yes | Markdown initial update on this status page incident |
| `name` | `str` | Yes | A title for the incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `str` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `str` | Yes | The ID of the corresponding status page |
| `updates` | `list` | Yes | A list of updates posted to this status page incident |

### Operations

#### `create(reqdata, ctrl=None) -> StatusPageIncidentEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatusPageIncident().create({
    "component_impacts": [],  # list
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_status": "example_incident_status",  # str
    "message": "example_message",  # str
    "name": "example_name",  # str
    "notify_subscribers": True,  # bool
    "published_at": "example_published_at",  # str
    "status_page_id": "example_status_page_id",  # str
    "updates": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[StatusPageIncidentEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatusPageIncident().list({"status_page_id": "example"})
for status_page_incident in results:
    print(status_page_incident.data_get())
```

#### `load(reqmatch, ctrl=None) -> StatusPageIncidentEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPageIncident().load({"id": "status_page_incident_id"})
```

#### `update(reqdata, ctrl=None) -> StatusPageIncidentEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.StatusPageIncident().update({
    "id": "status_page_incident_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageIncidentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageIncidentUpdateEntity

```python
status_page_incident_update = client.StatusPageIncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `list` | No | An array of mappings from component ID to component status. |
| `incident_status` | `str` | No | Optional new status for this status page incident. |
| `message` | `str` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `str` | Yes | ID of the status page incident |

### Operations

#### `create(reqdata, ctrl=None) -> StatusPageIncidentUpdateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatusPageIncidentUpdate().create({
    "message": "example_message",  # str
    "notify_subscribers": True,  # bool
    "status_page_incident_id": "example_status_page_incident_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageIncidentUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageLinkedResponseIncidentV1Entity

```python
status_page_linked_response_incident_v1 = client.StatusPageLinkedResponseIncidentV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes | ID of the Response incident |
| `linked_at` | `str` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[StatusPageLinkedResponseIncidentV1Entity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatusPageLinkedResponseIncidentV1().list({"incident_id": "example", "status_page_id": "example"})
for status_page_linked_response_incident_v1 in results:
    print(status_page_linked_response_incident_v1.data_get())
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageLinkedResponseIncidentV1Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageMaintenanceEntity

```python
status_page_maintenance = client.StatusPageMaintenance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_ids` | `list` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `bool` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `list` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `str` | Yes | The time the maintenance window ends |
| `id` | `str` | Yes | A unique ID for this status page maintenance window |
| `idempotency_key` | `str` | Yes | A unique key to de-duplicate requests. |
| `maintenance_status` | `str` | Yes | Current status for this maintenance window |
| `message` | `str` | Yes | Markdown initial update on this status page maintenance window |
| `name` | `str` | Yes | A title for the maintenance window |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `str` | Yes | When this status page maintenance window was published to the status page |
| `start_at` | `str` | Yes | The time the maintenance window starts |
| `status_page_id` | `str` | Yes | The ID of the corresponding status page |
| `updates` | `list` | Yes | A list of updates posted to this status page maintenance window |

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

#### `create(reqdata, ctrl=None) -> StatusPageMaintenanceEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatusPageMaintenance().create({
    "affected_component_ids": [],  # list
    "automate_maintenance_status": True,  # bool
    "component_maintenance_periods": [],  # list
    "end_at": "example_end_at",  # str
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "maintenance_status": "example_maintenance_status",  # str
    "message": "example_message",  # str
    "name": "example_name",  # str
    "notify_subscribers": True,  # bool
    "published_at": "example_published_at",  # str
    "start_at": "example_start_at",  # str
    "status_page_id": "example_status_page_id",  # str
    "updates": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list[StatusPageMaintenanceEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.StatusPageMaintenance().list({"status_page_id": "example"})
for status_page_maintenance in results:
    print(status_page_maintenance.data_get())
```

#### `load(reqmatch, ctrl=None) -> StatusPageMaintenanceEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPageMaintenance().load({"id": "status_page_maintenance_id"})
```

#### `update(reqdata, ctrl=None) -> StatusPageMaintenanceEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.StatusPageMaintenance().update({
    "id": "status_page_maintenance_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageMaintenanceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageMaintenanceUpdateEntity

```python
status_page_maintenance_update = client.StatusPageMaintenanceUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `list` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `str` | No | Optional new status for this status page maintenance window. |
| `message` | `str` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `str` | Yes | ID of the status page maintenance window |

### Operations

#### `create(reqdata, ctrl=None) -> StatusPageMaintenanceUpdateEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.StatusPageMaintenanceUpdate().create({
    "message": "example_message",  # str
    "notify_subscribers": True,  # bool
    "status_page_maintenance_id": "example_status_page_maintenance_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPageStructureEntity

```python
status_page_structure = client.StatusPageStructure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_structure` | `dict` | Yes |  |
| `display_uptime_mode` | `str` | Yes | How the page shows uptime against its components |
| `id` | `str` | No |  |
| `management_meta` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> StatusPageStructureEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.StatusPageStructure().load({"id": "status_page_structure_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPageStructureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StatusPagesV2Entity

```python
status_pages_v2 = client.StatusPagesV2()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> StatusPagesV2Entity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.StatusPagesV2().remove({"status_page_maintenance_id": "status_page_maintenance_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusPagesV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `dict` | Yes |  |
| `id` | `str` | Yes | Unique ID of the team |
| `members` | `list` | Yes | Members of the team |
| `name` | `str` | Yes | Name of the team |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[TeamEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team.data_get())
```

#### `load(reqmatch, ctrl=None) -> TeamEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Team().load({"id": "team_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TelemetryDataSourceV2Entity

```python
telemetry_data_source_v2 = client.TelemetryDataSourceV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes | When this data source was created |
| `datadog_config` | `dict` | No | Datadog-specific credential updates |
| `enabled` | `bool` | Yes | Whether this data source is enabled |
| `grafana_config` | `dict` | No | Grafana-specific credential and endpoint updates |
| `id` | `str` | Yes | Unique identifier for this data source |
| `name` | `str` | Yes | Human-readable name of the data source |
| `provider` | `str` | Yes | Provider that hosts this data source |
| `source_type` | `str` | Yes | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `str` | Yes | When this data source was last updated |
| `version` | `str` | No | Upstream tool version captured at probe time (e.g. |

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

#### `update(reqdata, ctrl=None) -> TelemetryDataSourceV2Entity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.TelemetryDataSourceV2().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TelemetryDataSourceV2Entity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UserEntity

```python
user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `dict` | Yes |  |
| `custom_roles` | `list` | Yes |  |
| `email` | `str` | No | Email address of the user. |
| `id` | `str` | Yes | Unique identifier of the user |
| `is_active` | `bool` | Yes | Whether the user is active. |
| `name` | `str` | Yes | Name of the user |
| `role` | `str` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `dict` | Yes |  |
| `slack_user_id` | `str` | No | Slack ID of the user |

### Operations

#### `create(reqdata, ctrl=None) -> UserEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.User().create({
    "id": "example_id",  # str
    "base_role": {},  # dict
    "custom_roles": [],  # list
    "is_active": True,  # bool
    "name": "example_name",  # str
    "role": "example_role",  # str
    "seats": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[UserEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.User().list()
for user in results:
    print(user.data_get())
```

#### `load(reqmatch, ctrl=None) -> UserEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.User().load({"id": "user_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowEntity

```python
workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `dict` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `str` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `list` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `bool` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `dict` | Yes |  |
| `expressions` | `list` | Yes | The expressions to use in the workflow |
| `folder` | `str` | No | Folder to display the workflow in |
| `form_fields` | `list` | No | User-configured form fields available in the workflow scope. |
| `id` | `str` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `bool` | No | Whether to include private escalations |
| `include_private_incidents` | `bool` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `dict` | Yes |  |
| `name` | `str` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `list` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `list` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `str` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `str` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `list` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `str` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `str` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `bool` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `str` | No | What state this workflow is in |
| `steps` | `list` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `str` | Yes | Trigger to set on the workflow |
| `version` | `int` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> WorkflowEntity`

Create a new entity with the given data. Returns the created entity and raises on error.

```python
result = client.Workflow().create({
    "condition_groups": [],  # list
    "continue_on_step_error": True,  # bool
    "delay": {},  # dict
    "expressions": [],  # list
    "id": "example_id",  # str
    "management_meta": {},  # dict
    "name": "example_name",  # str
    "once_for": [],  # list
    "runs_on_incident_modes": [],  # list
    "runs_on_incidents": "example_runs_on_incidents",  # str
    "steps": [],  # list
    "trigger": "example_trigger",  # str
    "version": 1,  # int
    "workflow": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list[WorkflowEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.Workflow().list()
for workflow in results:
    print(workflow.data_get())
```

#### `load(reqmatch, ctrl=None) -> WorkflowEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id"})
```

#### `remove(reqmatch, ctrl=None) -> WorkflowEntity`

Remove the entity matching the given criteria. Returns the entity, marked as deleted, and raises on error.

```python
result = client.Workflow().remove({"id": "workflow_id"})
```

#### `update(reqdata, ctrl=None) -> WorkflowEntity`

Update an existing entity. The data must include the entity `id`. Returns the updated entity and raises on error.

```python
result = client.Workflow().update({
    "id": "workflow_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WorkflowRunEntity

```python
workflow_run = client.WorkflowRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancelled_at` | `str` | No | If the run was cancelled, this is when |
| `created_at` | `str` | Yes | When the resource was created |
| `enqueued_at` | `str` | No | When the run was enqueued for execution |
| `error` | `str` | No | Error produced by the workflow, if it failed |
| `id` | `str` | Yes | Unique identifier for the workflow run |
| `incident_id` | `str` | No | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `str` | No | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `list` | Yes | Status of each step as it is worked |
| `scheduled_at` | `str` | Yes | When the run was scheduled for |
| `updated_at` | `str` | Yes | When the resource was last updated |
| `workflow_id` | `str` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `str` | No | Name of the underlying workflow |
| `workflow_version_id` | `str` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `int` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list[WorkflowRunEntity]`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list of entities, one per record, and raises on error.

```python
results = client.WorkflowRun().list()
for workflow_run in results:
    print(workflow_run.data_get())
```

#### `load(reqmatch, ctrl=None) -> WorkflowRunEntity`

Load a single entity matching the given criteria. Returns the entity, whose record `data_get()` reads, and raises on error.

```python
result = client.WorkflowRun().load({"id": "workflow_run_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WorkflowRunEntity` instance with the same options.

#### `get_name() -> str`

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

```python
client = IncidentIoSDK({
    "feature": {
        "debug": {"active": True},
        "idempotency": {"active": True},
        "metrics": {"active": True},
        "paging": {"active": True},
        "ratelimit": {"active": True},
        "retry": {"active": True},
        "test": {"active": True},
        "timeout": {"active": True},
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


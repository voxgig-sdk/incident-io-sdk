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

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

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

#### `FollowUp(data=None)`

Create a new `FollowUpEntity` instance. Pass `None` for no initial data.

#### `Incident(data=None)`

Create a new `IncidentEntity` instance. Pass `None` for no initial data.

#### `IncidentAlert(data=None)`

Create a new `IncidentAlertEntity` instance. Pass `None` for no initial data.

#### `IncidentAttachment(data=None)`

Create a new `IncidentAttachmentEntity` instance. Pass `None` for no initial data.

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

#### `IncidentTimestamp(data=None)`

Create a new `IncidentTimestampEntity` instance. Pass `None` for no initial data.

#### `IncidentType(data=None)`

Create a new `IncidentTypeEntity` instance. Pass `None` for no initial data.

#### `IncidentUpdate(data=None)`

Create a new `IncidentUpdateEntity` instance. Pass `None` for no initial data.

#### `IpAllowlist(data=None)`

Create a new `IpAllowlistEntity` instance. Pass `None` for no initial data.

#### `MaintenanceWindow(data=None)`

Create a new `MaintenanceWindowEntity` instance. Pass `None` for no initial data.

#### `PostmortemDocument(data=None)`

Create a new `PostmortemDocumentEntity` instance. Pass `None` for no initial data.

#### `Schedule(data=None)`

Create a new `ScheduleEntity` instance. Pass `None` for no initial data.

#### `ScheduleEntry(data=None)`

Create a new `ScheduleEntryEntity` instance. Pass `None` for no initial data.

#### `ScheduleReplica(data=None)`

Create a new `ScheduleReplicaEntity` instance. Pass `None` for no initial data.

#### `ScheduleSyncRule(data=None)`

Create a new `ScheduleSyncRuleEntity` instance. Pass `None` for no initial data.

#### `ScheduleSyncTarget(data=None)`

Create a new `ScheduleSyncTargetEntity` instance. Pass `None` for no initial data.

#### `Secret(data=None)`

Create a new `SecretEntity` instance. Pass `None` for no initial data.

#### `Severity(data=None)`

Create a new `SeverityEntity` instance. Pass `None` for no initial data.

#### `StatusPage(data=None)`

Create a new `StatusPageEntity` instance. Pass `None` for no initial data.

#### `StatusPageIncident(data=None)`

Create a new `StatusPageIncidentEntity` instance. Pass `None` for no initial data.

#### `StatusPageIncidentUpdate(data=None)`

Create a new `StatusPageIncidentUpdateEntity` instance. Pass `None` for no initial data.

#### `StatusPageMaintenance(data=None)`

Create a new `StatusPageMaintenanceEntity` instance. Pass `None` for no initial data.

#### `StatusPageMaintenanceUpdate(data=None)`

Create a new `StatusPageMaintenanceUpdateEntity` instance. Pass `None` for no initial data.

#### `StatusPageStructure(data=None)`

Create a new `StatusPageStructureEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

#### `TelemetryDataSource(data=None)`

Create a new `TelemetryDataSourceEntity` instance. Pass `None` for no initial data.

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
| `assignee_id` | `str` | No |  |
| `completed_at` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No |  |
| `external_issue_reference` | `dict` | No |  |
| `follow_up` | `bool` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Action().list()
for action in results:
    print(action)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Action().load({"id": "action_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Action().remove({"id": "action_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `alert_group_id` | `list` | No |  |
| `alert_source_id` | `str` | Yes |  |
| `attribute` | `list` | Yes |  |
| `created_at` | `str` | Yes |  |
| `deduplication_key` | `str` | Yes |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `resolved_at` | `str` | No |  |
| `source_url` | `str` | No |  |
| `status` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Alert().create({
    "id": "example_id",  # str
    "alert_source_id": "example_alert_source_id",  # str
    "attribute": [],  # list
    "created_at": "example_created_at",  # str
    "deduplication_key": "example_deduplication_key",  # str
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Alert().list()
for alert in results:
    print(alert)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `array` | `bool` | Yes |  |
| `emoji` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `required` | `bool` | Yes |  |
| `type` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AlertAttribute().create({
    "array": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "required": True,  # bool
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AlertAttribute().list()
for alert_attribute in results:
    print(alert_attribute)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AlertAttribute().load({"id": "alert_attribute_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AlertAttribute().remove({"id": "alert_attribute_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `alert_group_id` | `str` | No |  |
| `alert_id` | `str` | No |  |
| `content` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `image` | `list` | Yes |  |
| `last_edited_at` | `str` | No |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AlertNote().create({
    "content": "example_content",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "id": "example_id",  # str
    "image": [],  # list
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AlertNote().list()
for alert_note in results:
    print(alert_note)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AlertNote().load({"id": "alert_note_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AlertNote().remove({"id": "alert_note_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `alert_source` | `list` | Yes |  |
| `channel_config` | `list` | Yes |  |
| `condition_group` | `list` | Yes |  |
| `created_at` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `escalation_config` | `dict` | Yes |  |
| `expression` | `list` | Yes |  |
| `grouping_config` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_config` | `dict` | Yes |  |
| `incident_template` | `dict` | Yes |  |
| `is_private` | `bool` | Yes |  |
| `message_config` | `dict` | Yes |  |
| `message_template` | `dict` | No |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `updated_at` | `str` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AlertRoute().create({
    "alert_source": [],  # list
    "channel_config": [],  # list
    "condition_group": [],  # list
    "enabled": True,  # bool
    "escalation_config": {},  # dict
    "expression": [],  # list
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AlertRoute().list()
for alert_route in results:
    print(alert_route)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AlertRoute().load({"id": "alert_route_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AlertRoute().remove({"id": "alert_route_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `alert_events_url` | `str` | No |  |
| `auto_resolve_incident_alert` | `bool` | No |  |
| `auto_resolve_timeout_minute` | `int` | No |  |
| `disabled` | `bool` | No |  |
| `email_option` | `dict` | Yes |  |
| `heartbeat_option` | `dict` | Yes |  |
| `http_custom_option` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `jira_option` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `secret_token` | `str` | No |  |
| `source_type` | `str` | Yes |  |
| `template` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AlertSource().create({
    "email_option": {},  # dict
    "heartbeat_option": {},  # dict
    "http_custom_option": {},  # dict
    "id": "example_id",  # str
    "jira_option": {},  # dict
    "name": "example_name",  # str
    "source_type": "example_source_type",  # str
    "template": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AlertSource().list()
for alert_source in results:
    print(alert_source)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AlertSource().load({"id": "alert_source_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AlertSource().remove({"id": "alert_source_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `grace_period_minute` | `int` | Yes |  |
| `id` | `str` | Yes |  |
| `last_used_at` | `str` | No |  |
| `name` | `str` | Yes |  |
| `role` | `list` | Yes |  |
| `role_name` | `list` | Yes |  |
| `team_id` | `list` | Yes |  |
| `team_role` | `list` | Yes |  |
| `team_role_name` | `list` | Yes |  |
| `token_last_issued_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiKey().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "grace_period_minute": 1,  # int
    "id": "example_id",  # str
    "name": "example_name",  # str
    "role": [],  # list
    "role_name": [],  # list
    "team_id": [],  # list
    "team_role": [],  # list
    "team_role_name": [],  # list
    "token_last_issued_at": "example_token_last_issued_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiKey().list()
for api_key in results:
    print(api_key)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApiKey().load({"id": "api_key_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiKey().remove({"id": "api_key_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## CatalogEntryEntity

```python
catalog_entry = client.CatalogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `list` | No |  |
| `archived_at` | `str` | No |  |
| `attribute_value` | `dict` | Yes |  |
| `catalog_entry` | `dict` | Yes |  |
| `catalog_type` | `dict` | Yes |  |
| `catalog_type_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `external_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `rank` | `int` | No |  |
| `update_attribute` | `list` | No |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CatalogEntry().create({
    "attribute_value": {},  # dict
    "catalog_entry": {},  # dict
    "catalog_type": {},  # dict
    "catalog_type_id": "example_catalog_type_id",  # str
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CatalogEntry().list()
for catalog_entry in results:
    print(catalog_entry)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CatalogEntry().load({"id": "catalog_entry_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `category` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `engine_resource_type` | `str` | Yes |  |
| `label` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `value_docstring` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CatalogResource().list()
for catalog_resource in results:
    print(catalog_resource)
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
| `annotation` | `dict` | Yes |  |
| `category` | `list` | Yes |  |
| `color` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `dynamic_resource_parameter` | `str` | No |  |
| `engine_resource_type` | `str` | Yes |  |
| `estimated_count` | `int` | No |  |
| `icon` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_editable` | `bool` | Yes |  |
| `is_team_type` | `bool` | No |  |
| `last_synced_at` | `str` | No |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `ranked` | `bool` | Yes |  |
| `registry_type` | `str` | No |  |
| `required_integration` | `list` | No |  |
| `schema` | `dict` | Yes |  |
| `semantic_type` | `str` | Yes |  |
| `source_repo_url` | `str` | No |  |
| `type_name` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `use_name_as_identifier` | `bool` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CatalogType().create({
    "annotation": {},  # dict
    "category": [],  # list
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CatalogType().list()
for catalog_type in results:
    print(catalog_type)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CatalogType().load({"id": "catalog_type_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `annotation` | `dict` | Yes |  |
| `attribute` | `list` | Yes |  |
| `category` | `list` | Yes |  |
| `color` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `dynamic_resource_parameter` | `str` | No |  |
| `engine_resource_type` | `str` | Yes |  |
| `estimated_count` | `int` | No |  |
| `icon` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_editable` | `bool` | Yes |  |
| `is_team_type` | `bool` | No |  |
| `last_synced_at` | `str` | No |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `ranked` | `bool` | Yes |  |
| `registry_type` | `str` | No |  |
| `required_integration` | `list` | No |  |
| `schema` | `dict` | Yes |  |
| `semantic_type` | `str` | Yes |  |
| `source_repo_url` | `str` | No |  |
| `type_name` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `use_name_as_identifier` | `bool` | Yes |  |
| `version` | `int` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CatalogTypeSchema().create({
    "catalog_type_id": "example_catalog_type_id",  # str
    "annotation": {},  # dict
    "attribute": [],  # list
    "category": [],  # list
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
| `catalog_type_id` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `field_type` | `str` | Yes |  |
| `filter_by` | `dict` | Yes |  |
| `fixed_filter` | `dict` | Yes |  |
| `group_by_catalog_attribute_id` | `str` | No |  |
| `helptext_catalog_attribute_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `option` | `list` | Yes |  |
| `required` | `str` | No |  |
| `required_v2` | `str` | No |  |
| `show_before_closure` | `bool` | Yes |  |
| `show_before_creation` | `bool` | Yes |  |
| `show_before_update` | `bool` | Yes |  |
| `show_in_announcement_post` | `bool` | No |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomField().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "field_type": "example_field_type",  # str
    "filter_by": {},  # dict
    "fixed_filter": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "option": [],  # list
    "show_before_closure": True,  # bool
    "show_before_creation": True,  # bool
    "show_before_update": True,  # bool
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomField().list()
for custom_field in results:
    print(custom_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomField().load({"id": "custom_field_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomField().remove({"id": "custom_field_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `custom_field_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `sort_key` | `int` | Yes |  |
| `value` | `str` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomFieldOption().create({
    "custom_field_id": "example_custom_field_id",  # str
    "id": "example_id",  # str
    "sort_key": 1,  # int
    "value": "example_value",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomFieldOption().list()
for custom_field_option in results:
    print(custom_field_option)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomFieldOption().load({"id": "custom_field_option_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomFieldOption().remove({"id": "custom_field_option_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No |  |
| `escalation_path_id` | `str` | No |  |
| `event` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `incident_id` | `str` | No |  |
| `priority` | `dict` | Yes |  |
| `related_alert` | `list` | Yes |  |
| `related_incident` | `list` | Yes |  |
| `status` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `user_id` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Escalation().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "event": [],  # list
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "priority": {},  # dict
    "related_alert": [],  # list
    "related_incident": [],  # list
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Escalation().list()
for escalation in results:
    print(escalation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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

## FollowUpEntity

```python
follow_up = client.FollowUp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `dict` | Yes |  |
| `assignee_id` | `str` | No |  |
| `assignee_team` | `dict` | Yes |  |
| `assignee_team_id` | `str` | No |  |
| `completed_at` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `description` | `str` | No |  |
| `external_issue_reference` | `dict` | Yes |  |
| `external_issue_reference_id` | `str` | No |  |
| `follow_up_category_id` | `str` | No |  |
| `follow_up_priority_option_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `label` | `list` | Yes |  |
| `priority` | `dict` | Yes |  |
| `status` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.FollowUp().create({
    "assignee": {},  # dict
    "assignee_team": {},  # dict
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "external_issue_reference": {},  # dict
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "label": [],  # list
    "priority": {},  # dict
    "status": "example_status",  # str
    "title": "example_title",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.FollowUp().list()
for follow_up in results:
    print(follow_up)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.FollowUp().load({"id": "follow_up_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.FollowUp().remove({"id": "follow_up_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## IncidentEntity

```python
incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `creator` | `dict` | Yes |  |
| `custom_field_entry` | `list` | Yes |  |
| `duration_metric` | `list` | No |  |
| `external_issue_reference` | `dict` | Yes |  |
| `has_debrief` | `bool` | No |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `incident` | `dict` | Yes |  |
| `incident_role_assignment` | `list` | Yes |  |
| `incident_status` | `dict` | Yes |  |
| `incident_status_id` | `str` | No |  |
| `incident_timestamp_value` | `list` | No |  |
| `incident_type` | `dict` | Yes |  |
| `incident_type_id` | `str` | No |  |
| `mode` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `notify_incident_channel` | `bool` | Yes |  |
| `permalink` | `str` | No |  |
| `postmortem_document_id` | `list` | No |  |
| `postmortem_document_url` | `str` | No |  |
| `reference` | `str` | Yes |  |
| `retrospective_incident_option` | `dict` | No |  |
| `severity` | `dict` | Yes |  |
| `severity_id` | `str` | No |  |
| `slack_channel_id` | `str` | Yes |  |
| `slack_channel_name` | `str` | No |  |
| `slack_channel_name_override` | `str` | No |  |
| `slack_team_id` | `str` | Yes |  |
| `source_message_channel_id` | `str` | No |  |
| `source_message_timestamp` | `str` | No |  |
| `status` | `str` | Yes |  |
| `summary` | `str` | No |  |
| `timestamp` | `list` | No |  |
| `updated_at` | `str` | Yes |  |
| `visibility` | `str` | Yes |  |
| `workload_minutes_late` | `float` | No |  |
| `workload_minutes_sleeping` | `float` | No |  |
| `workload_minutes_total` | `float` | No |  |
| `workload_minutes_working` | `float` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Incident().create({
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "custom_field_entry": [],  # list
    "external_issue_reference": {},  # dict
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident": {},  # dict
    "incident_role_assignment": [],  # list
    "incident_status": {},  # dict
    "incident_type": {},  # dict
    "mode": "example_mode",  # str
    "name": "example_name",  # str
    "notify_incident_channel": True,  # bool
    "reference": "example_reference",  # str
    "severity": {},  # dict
    "slack_channel_id": "example_slack_channel_id",  # str
    "slack_team_id": "example_slack_team_id",  # str
    "status": "example_status",  # str
    "updated_at": "example_updated_at",  # str
    "visibility": "example_visibility",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Incident().list()
for incident in results:
    print(incident)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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

## IncidentAlertEntity

```python
incident_alert = client.IncidentAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `dict` | Yes |  |
| `alert_route_id` | `str` | No |  |
| `id` | `str` | Yes |  |
| `incident` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentAlert().list()
for incident_alert in results:
    print(incident_alert)
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

Create a new `IncidentAlertEntity` instance with the same options.

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
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `resource` | `dict` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IncidentAttachment().create({
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "resource": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentAttachment().list()
for incident_attachment in results:
    print(incident_attachment)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

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

## IncidentMembershipEntity

```python
incident_membership = client.IncidentMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `str` | Yes |  |
| `user_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

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
| `active` | `list` | Yes |  |
| `passive` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IncidentParticipant().load()
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
| `archived_at` | `str` | No |  |
| `participant_type` | `str` | No |  |
| `user` | `dict` | Yes |  |
| `workload` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentParticipantWorkload().list()
for incident_participant_workload in results:
    print(incident_participant_workload)
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
| `id` | `str` | Yes |  |
| `incident` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentRelationship().list()
for incident_relationship in results:
    print(incident_relationship)
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
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `instruction` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `required` | `bool` | No |  |
| `role_type` | `str` | Yes |  |
| `shortform` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.IncidentRole().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "instruction": "example_instruction",  # str
    "name": "example_name",  # str
    "role_type": "example_role_type",  # str
    "shortform": "example_shortform",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentRole().list()
for incident_role in results:
    print(incident_role)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IncidentRole().load({"id": "incident_role_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IncidentRole().remove({"id": "incident_role_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `category` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `rank` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentStatus().list()
for incident_status in results:
    print(incident_status)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IncidentStatus().load({"id": "incident_status_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IncidentStatus().remove({"id": "incident_status_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## IncidentTimestampEntity

```python
incident_timestamp = client.IncidentTimestamp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `rank` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentTimestamp().list()
for incident_timestamp in results:
    print(incident_timestamp)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `create_in_triage` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `is_default` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `private_incidents_only` | `bool` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentType().list()
for incident_type in results:
    print(incident_type)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `merged_into_incident_id` | `str` | No |  |
| `message` | `str` | No |  |
| `new_incident_status` | `dict` | Yes |  |
| `new_severity` | `dict` | Yes |  |
| `updater` | `dict` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.IncidentUpdate().list()
for incident_update in results:
    print(incident_update)
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
| `allowlist` | `list` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `updated_at` | `str` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.IpAllowlist().load()
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## MaintenanceWindowEntity

```python
maintenance_window = client.MaintenanceWindow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_group` | `list` | Yes |  |
| `archived_at` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `end_at` | `str` | Yes |  |
| `escalation_target` | `list` | No |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | No |  |
| `lead` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `notification_message` | `str` | No |  |
| `notify_channel` | `list` | No |  |
| `notify_end_minutes_before` | `int` | No |  |
| `notify_start_minutes_before` | `int` | No |  |
| `reroute_on_end` | `bool` | Yes |  |
| `resolve_on_end` | `bool` | Yes |  |
| `show_in_sidebar` | `bool` | Yes |  |
| `start_at` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MaintenanceWindow().create({
    "alert_condition_group": [],  # list
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.MaintenanceWindow().list()
for maintenance_window in results:
    print(maintenance_window)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MaintenanceWindow().load({"id": "maintenance_window_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.MaintenanceWindow().remove({"id": "maintenance_window_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## PostmortemDocumentEntity

```python
postmortem_document = client.PostmortemDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `document_url` | `str` | Yes |  |
| `editor` | `list` | Yes |  |
| `exported_url` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `title` | `str` | Yes |  |
| `type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PostmortemDocument().list()
for postmortem_document in results:
    print(postmortem_document)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PostmortemDocument().load({"id": "postmortem_document_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `annotation` | `dict` | Yes |  |
| `config` | `dict` | Yes |  |
| `created_at` | `str` | Yes |  |
| `current_shift` | `list` | No |  |
| `holidays_public_config` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `next_shift` | `list` | No |  |
| `permalink` | `str` | Yes |  |
| `schedule` | `dict` | Yes |  |
| `team_id` | `list` | Yes |  |
| `timezone` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Schedule().create({
    "annotation": {},  # dict
    "config": {},  # dict
    "created_at": "example_created_at",  # str
    "holidays_public_config": {},  # dict
    "id": "example_id",  # str
    "name": "example_name",  # str
    "permalink": "example_permalink",  # str
    "schedule": {},  # dict
    "team_id": [],  # list
    "timezone": "example_timezone",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Schedule().list()
for schedule in results:
    print(schedule)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Schedule().load({"id": "schedule_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Schedule().remove({"id": "schedule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## ScheduleEntryEntity

```python
schedule_entry = client.ScheduleEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `dict` | Yes |  |
| `schedule_entry` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScheduleEntry().load()
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
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `last_sync_error` | `str` | No |  |
| `last_synced_at` | `str` | No |  |
| `mirror_window_day` | `int` | No |  |
| `replica_fallback_user_id` | `str` | Yes |  |
| `replica_provider` | `str` | Yes |  |
| `replica_provider_id` | `str` | Yes |  |
| `schedule_id` | `str` | Yes |  |
| `schedule_replica` | `dict` | Yes |  |
| `source` | `list` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `user_status` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ScheduleReplica().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "replica_fallback_user_id": "example_replica_fallback_user_id",  # str
    "replica_provider": "example_replica_provider",  # str
    "replica_provider_id": "example_replica_provider_id",  # str
    "schedule_id": "example_schedule_id",  # str
    "schedule_replica": {},  # dict
    "source": [],  # list
    "updated_at": "example_updated_at",  # str
    "user_status": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ScheduleReplica().list()
for schedule_replica in results:
    print(schedule_replica)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `annotation` | `dict` | No |  |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `permanent_member_user_id` | `list` | Yes |  |
| `rotation_id` | `str` | No |  |
| `schedule_id` | `str` | Yes |  |
| `schedule_sync_rule` | `dict` | Yes |  |
| `schedule_sync_target` | `dict` | Yes |  |
| `schedule_sync_target_id` | `str` | Yes |  |
| `sync_type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ScheduleSyncRule().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "permanent_member_user_id": [],  # list
    "schedule_id": "example_schedule_id",  # str
    "schedule_sync_rule": {},  # dict
    "schedule_sync_target": {},  # dict
    "schedule_sync_target_id": "example_schedule_sync_target_id",  # str
    "sync_type": "example_sync_type",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ScheduleSyncRule().list()
for schedule_sync_rule in results:
    print(schedule_sync_rule)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScheduleSyncRule().load({"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `add_bot_to_group` | `bool` | Yes |  |
| `annotation` | `dict` | No |  |
| `created_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `linked_schedule` | `list` | Yes |  |
| `schedule_sync_target` | `dict` | Yes |  |
| `slack_team_id` | `str` | Yes |  |
| `slack_user_group_id` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ScheduleSyncTarget().create({
    "add_bot_to_group": True,  # bool
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "linked_schedule": [],  # list
    "schedule_sync_target": {},  # dict
    "slack_team_id": "example_slack_team_id",  # str
    "slack_user_group_id": "example_slack_user_group_id",  # str
    "updated_at": "example_updated_at",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ScheduleSyncTarget().list()
for schedule_sync_target in results:
    print(schedule_sync_target)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ScheduleSyncTarget().load({"id": "schedule_sync_target_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ScheduleSyncTarget().remove({"id": "schedule_sync_target_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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

## SecretEntity

```python
secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `last_four_char` | `str` | No |  |
| `name` | `str` | Yes |  |
| `owning_team_id` | `list` | Yes |  |
| `secret` | `dict` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `value` | `str` | Yes |  |
| `version` | `list` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Secret().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "owning_team_id": [],  # list
    "secret": {},  # dict
    "updated_at": "example_updated_at",  # str
    "value": "example_value",  # str
    "version": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Secret().list()
for secret in results:
    print(secret)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Secret().load({"id": "secret_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Secret().remove({"id": "secret_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `created_at` | `str` | Yes |  |
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `rank` | `int` | Yes |  |
| `updated_at` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Severity().list()
for severity in results:
    print(severity)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Severity().load({"id": "severity_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `description` | `str` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `public_url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StatusPage().list()
for status_page in results:
    print(status_page)
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

## StatusPageIncidentEntity

```python
status_page_incident = client.StatusPageIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impact` | `list` | Yes |  |
| `component_status` | `list` | No |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `incident_status` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `notify_subscriber` | `bool` | Yes |  |
| `published_at` | `str` | Yes |  |
| `status_page_id` | `str` | Yes |  |
| `update` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StatusPageIncident().create({
    "component_impact": [],  # list
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_status": "example_incident_status",  # str
    "message": "example_message",  # str
    "name": "example_name",  # str
    "notify_subscriber": True,  # bool
    "published_at": "example_published_at",  # str
    "status_page_id": "example_status_page_id",  # str
    "update": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StatusPageIncident().list()
for status_page_incident in results:
    print(status_page_incident)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StatusPageIncident().load({"id": "status_page_incident_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `component_status` | `list` | No |  |
| `incident_status` | `str` | No |  |
| `message` | `str` | Yes |  |
| `notify_subscriber` | `bool` | Yes |  |
| `status_page_incident_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StatusPageIncidentUpdate().create({
    "message": "example_message",  # str
    "notify_subscriber": True,  # bool
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

## StatusPageMaintenanceEntity

```python
status_page_maintenance = client.StatusPageMaintenance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_id` | `list` | Yes |  |
| `component_maintenance_period` | `list` | Yes |  |
| `end_at` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `idempotency_key` | `str` | Yes |  |
| `maintenance_status` | `str` | Yes |  |
| `message` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `notify_subscriber` | `bool` | Yes |  |
| `published_at` | `str` | Yes |  |
| `start_at` | `str` | Yes |  |
| `status_page_id` | `str` | Yes |  |
| `update` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StatusPageMaintenance().create({
    "affected_component_id": [],  # list
    "component_maintenance_period": [],  # list
    "end_at": "example_end_at",  # str
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "maintenance_status": "example_maintenance_status",  # str
    "message": "example_message",  # str
    "name": "example_name",  # str
    "notify_subscriber": True,  # bool
    "published_at": "example_published_at",  # str
    "start_at": "example_start_at",  # str
    "status_page_id": "example_status_page_id",  # str
    "update": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.StatusPageMaintenance().list()
for status_page_maintenance in results:
    print(status_page_maintenance)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.StatusPageMaintenance().load({"id": "status_page_maintenance_id"})
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
| `component_status` | `list` | No |  |
| `maintenance_status` | `str` | No |  |
| `message` | `str` | Yes |  |
| `notify_subscriber` | `bool` | Yes |  |
| `status_page_maintenance_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.StatusPageMaintenanceUpdate().create({
    "message": "example_message",  # str
    "notify_subscriber": True,  # bool
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
| `item` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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

## TeamEntity

```python
team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `member` | `list` | Yes |  |
| `name` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Team().list()
for team in results:
    print(team)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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

## TelemetryDataSourceEntity

```python
telemetry_data_source = client.TelemetryDataSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `datadog_config` | `dict` | No |  |
| `enabled` | `bool` | Yes |  |
| `grafana_config` | `dict` | No |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `provider` | `str` | Yes |  |
| `source_type` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `version` | `str` | No |  |

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

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.TelemetryDataSource().update({
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

Create a new `TelemetryDataSourceEntity` instance with the same options.

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
| `custom_role` | `list` | Yes |  |
| `email` | `str` | No |  |
| `id` | `str` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `str` | Yes |  |
| `role` | `str` | Yes |  |
| `seat` | `dict` | Yes |  |
| `slack_user_id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.User().list()
for user in results:
    print(user)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `annotation` | `dict` | No |  |
| `condition_group` | `list` | Yes |  |
| `continue_on_step_error` | `bool` | Yes |  |
| `delay` | `dict` | Yes |  |
| `expression` | `list` | Yes |  |
| `folder` | `str` | No |  |
| `form_field` | `list` | No |  |
| `id` | `str` | Yes |  |
| `include_private_escalation` | `bool` | No |  |
| `include_private_incident` | `bool` | No |  |
| `management_meta` | `dict` | Yes |  |
| `name` | `str` | Yes |  |
| `once_for` | `list` | Yes |  |
| `owning_team_id` | `list` | No |  |
| `private_incident_scope` | `str` | No |  |
| `runs_from` | `str` | No |  |
| `runs_on_incident` | `str` | Yes |  |
| `runs_on_incident_mode` | `list` | Yes |  |
| `shortform` | `str` | No |  |
| `skip_step_upgrade` | `bool` | No |  |
| `state` | `str` | No |  |
| `step` | `list` | Yes |  |
| `trigger` | `str` | Yes |  |
| `version` | `int` | Yes |  |
| `workflow` | `dict` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Workflow().create({
    "condition_group": [],  # list
    "continue_on_step_error": True,  # bool
    "delay": {},  # dict
    "expression": [],  # list
    "id": "example_id",  # str
    "management_meta": {},  # dict
    "name": "example_name",  # str
    "once_for": [],  # list
    "runs_on_incident": "example_runs_on_incident",  # str
    "runs_on_incident_mode": [],  # list
    "step": [],  # list
    "trigger": "example_trigger",  # str
    "version": 1,  # int
    "workflow": {},  # dict
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Workflow().list()
for workflow in results:
    print(workflow)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Workflow().load({"id": "workflow_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Workflow().remove({"id": "workflow_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

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
| `cancelled_at` | `str` | No |  |
| `created_at` | `str` | Yes |  |
| `enqueued_at` | `str` | No |  |
| `error` | `str` | No |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | No |  |
| `incident_reference` | `str` | No |  |
| `progress` | `list` | Yes |  |
| `scheduled_at` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |
| `workflow_id` | `str` | Yes |  |
| `workflow_name` | `str` | No |  |
| `workflow_version_id` | `str` | Yes |  |
| `workflow_version_number` | `int` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WorkflowRun().list()
for workflow_run in results:
    print(workflow_run)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

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
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = IncidentIoSDK({
    "feature": {
        "test": {"active": True},
    },
})
```


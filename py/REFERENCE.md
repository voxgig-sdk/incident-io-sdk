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

#### `CustomField(data=None)`

Create a new `CustomFieldEntity` instance. Pass `None` for no initial data.

#### `CustomFieldOption(data=None)`

Create a new `CustomFieldOptionEntity` instance. Pass `None` for no initial data.

#### `FollowUp(data=None)`

Create a new `FollowUpEntity` instance. Pass `None` for no initial data.

#### `Incident(data=None)`

Create a new `IncidentEntity` instance. Pass `None` for no initial data.

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

#### `Secret(data=None)`

Create a new `SecretEntity` instance. Pass `None` for no initial data.

#### `Team(data=None)`

Create a new `TeamEntity` instance. Pass `None` for no initial data.

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
| `description` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_id` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Action().create({
    "assignee": {},  # dict
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "description": "example_description",  # str
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
| `condition_group` | `list` | Yes |  |
| `created_at` | `str` | No |  |
| `enabled` | `bool` | Yes |  |
| `escalation_config` | `dict` | Yes |  |
| `expression` | `list` | Yes |  |
| `grouping_config` | `dict` | Yes |  |
| `id` | `str` | Yes |  |
| `incident_config` | `dict` | Yes |  |
| `is_private` | `bool` | Yes |  |
| `message_config` | `dict` | Yes |  |
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
    "condition_group": [],  # list
    "enabled": True,  # bool
    "escalation_config": {},  # dict
    "expression": [],  # list
    "grouping_config": {},  # dict
    "id": "example_id",  # str
    "incident_config": {},  # dict
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
| `incident_role_assignment` | `list` | Yes |  |
| `incident_status` | `dict` | Yes |  |
| `incident_status_id` | `str` | No |  |
| `incident_timestamp_value` | `list` | No |  |
| `incident_type` | `dict` | Yes |  |
| `incident_type_id` | `str` | No |  |
| `mode` | `str` | Yes |  |
| `name` | `str` | Yes |  |
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
| `summary` | `str` | No |  |
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
    "incident_role_assignment": [],  # list
    "incident_status": {},  # dict
    "incident_type": {},  # dict
    "mode": "example_mode",  # str
    "name": "example_name",  # str
    "reference": "example_reference",  # str
    "severity": {},  # dict
    "slack_channel_id": "example_slack_channel_id",  # str
    "slack_team_id": "example_slack_team_id",  # str
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
| `role_type` | `str` | Yes |  |
| `shortform` | `str` | Yes |  |
| `updated_at` | `str` | Yes |  |

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
| `owning_team_id` | `list` | No |  |
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
| `owning_team_id` | - | Yes | - | Yes | - |
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


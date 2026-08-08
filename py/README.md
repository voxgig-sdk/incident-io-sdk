# IncidentIo Python SDK



The Python SDK for the IncidentIo API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Action()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/incident-io-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
from incidentio_sdk import IncidentIoSDK

client = IncidentIoSDK()
```

### 2. List action records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    actions = client.Action().list()
    for action in actions:
        print(action)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a schedulereplica

ScheduleReplica is nested under schedule, so provide the `schedule_id`.
`load()` returns the bare record (a `dict`) and raises on error.

```python
try:
    schedulereplica = client.ScheduleReplica().load({"schedule_id": "example_schedule_id", "id": "example_id"})
    print(schedulereplica)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the bare created record (a dict)
created = client.Action().create({"assignee": {}, "created_at": "example_created_at", "creator": {}, "follow_up": True, "id": "example_id", "incident_id": "example_incident_id", "status": "example_status", "updated_at": "example_updated_at"})

# Update — the created record's id is a plain dict key
client.Action().update({"id": created["id"], "assignee": {}, "assignee_id": "example_assignee_id"})

# Remove
client.Action().remove({"id": created["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    incidentroles = client.IncidentRole().list()
    print(incidentroles)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = IncidentIoSDK.test()

# Entity ops return the bare record and raise on error.
incidentrole = client.IncidentRole().list()
# incidentrole contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = IncidentIoSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### IncidentIoSDK

```python
from incidentio_sdk import IncidentIoSDK

client = IncidentIoSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = IncidentIoSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### IncidentIoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Action` | `(data) -> ActionEntity` | Create an Action entity instance. |
| `Alert` | `(data) -> AlertEntity` | Create an Alert entity instance. |
| `AlertAttribute` | `(data) -> AlertAttributeEntity` | Create an AlertAttribute entity instance. |
| `AlertNote` | `(data) -> AlertNoteEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `(data) -> AlertRouteEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `(data) -> AlertSourceEntity` | Create an AlertSource entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `CatalogEntry` | `(data) -> CatalogEntryEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource` | `(data) -> CatalogResourceEntity` | Create a CatalogResource entity instance. |
| `CatalogType` | `(data) -> CatalogTypeEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema` | `(data) -> CatalogTypeSchemaEntity` | Create a CatalogTypeSchema entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data) -> CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `Escalation` | `(data) -> EscalationEntity` | Create an Escalation entity instance. |
| `FollowUp` | `(data) -> FollowUpEntity` | Create a FollowUp entity instance. |
| `Incident` | `(data) -> IncidentEntity` | Create an Incident entity instance. |
| `IncidentAlert` | `(data) -> IncidentAlertEntity` | Create an IncidentAlert entity instance. |
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
| `Schedule` | `(data) -> ScheduleEntity` | Create a Schedule entity instance. |
| `ScheduleEntry` | `(data) -> ScheduleEntryEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleReplica` | `(data) -> ScheduleReplicaEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule` | `(data) -> ScheduleSyncRuleEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget` | `(data) -> ScheduleSyncTargetEntity` | Create a ScheduleSyncTarget entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `Severity` | `(data) -> SeverityEntity` | Create a Severity entity instance. |
| `StatusPage` | `(data) -> StatusPageEntity` | Create a StatusPage entity instance. |
| `StatusPageIncident` | `(data) -> StatusPageIncidentEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate` | `(data) -> StatusPageIncidentUpdateEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageMaintenance` | `(data) -> StatusPageMaintenanceEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate` | `(data) -> StatusPageMaintenanceUpdateEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure` | `(data) -> StatusPageStructureEntity` | Create a StatusPageStructure entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TelemetryDataSource` | `(data) -> TelemetryDataSourceEntity` | Create a TelemetryDataSource entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data) -> WorkflowRunEntity` | Create a WorkflowRun entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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
| `external_issue_reference` |  |
| `follow_up` |  |
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

Operations: Create, List, Load.

API path: `/v2/alerts/{id}/actions/resolve`

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
| `channel_config` |  |
| `condition_group` |  |
| `created_at` |  |
| `enabled` |  |
| `escalation_config` |  |
| `expression` |  |
| `grouping_config` |  |
| `id` |  |
| `incident_config` |  |
| `incident_template` |  |
| `is_private` |  |
| `message_config` |  |
| `message_template` |  |
| `name` |  |
| `owning_team_id` |  |
| `updated_at` |  |
| `version` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_routes`

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
| `grace_period_minute` |  |
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

API path: `/v1/api_keys/{id}/actions/rotate`

#### CatalogEntry

| Field | Description |
| --- | --- |
| `alias` |  |
| `archived_at` |  |
| `attribute_value` |  |
| `catalog_entry` |  |
| `catalog_type` |  |
| `catalog_type_id` |  |
| `created_at` |  |
| `external_id` |  |
| `id` |  |
| `name` |  |
| `rank` |  |
| `update_attribute` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/v2/catalog_entries`

#### CatalogResource

| Field | Description |
| --- | --- |
| `category` |  |
| `description` |  |
| `engine_resource_type` |  |
| `label` |  |
| `type` |  |
| `value_docstring` |  |

Operations: List.

API path: `/v2/catalog_resources`

#### CatalogType

| Field | Description |
| --- | --- |
| `annotation` |  |
| `category` |  |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `dynamic_resource_parameter` |  |
| `engine_resource_type` |  |
| `estimated_count` |  |
| `icon` |  |
| `id` |  |
| `is_editable` |  |
| `is_team_type` |  |
| `last_synced_at` |  |
| `name` |  |
| `owning_team_id` |  |
| `ranked` |  |
| `registry_type` |  |
| `required_integration` |  |
| `schema` |  |
| `semantic_type` |  |
| `source_repo_url` |  |
| `type_name` |  |
| `updated_at` |  |
| `use_name_as_identifier` |  |

Operations: Create, List, Load, Update.

API path: `/v2/catalog_types`

#### CatalogTypeSchema

| Field | Description |
| --- | --- |
| `annotation` |  |
| `attribute` |  |
| `category` |  |
| `color` |  |
| `created_at` |  |
| `description` |  |
| `dynamic_resource_parameter` |  |
| `engine_resource_type` |  |
| `estimated_count` |  |
| `icon` |  |
| `id` |  |
| `is_editable` |  |
| `is_team_type` |  |
| `last_synced_at` |  |
| `name` |  |
| `owning_team_id` |  |
| `ranked` |  |
| `registry_type` |  |
| `required_integration` |  |
| `schema` |  |
| `semantic_type` |  |
| `source_repo_url` |  |
| `type_name` |  |
| `updated_at` |  |
| `use_name_as_identifier` |  |
| `version` |  |

Operations: Create.

API path: `/v2/catalog_types/{id}/actions/update_schema`

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
| `option` |  |
| `required` |  |
| `required_v2` |  |
| `show_before_closure` |  |
| `show_before_creation` |  |
| `show_before_update` |  |
| `show_in_announcement_post` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` |  |
| `id` |  |
| `sort_key` |  |
| `value` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

#### Escalation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `creator` |  |
| `description` |  |
| `escalation_path_id` |  |
| `event` |  |
| `id` |  |
| `idempotency_key` |  |
| `incident_id` |  |
| `priority` |  |
| `related_alert` |  |
| `related_incident` |  |
| `status` |  |
| `title` |  |
| `updated_at` |  |
| `user_id` |  |

Operations: Create, List, Load.

API path: `/v2/escalations`

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
| `incident` |  |
| `incident_role_assignment` |  |
| `incident_status` |  |
| `incident_status_id` |  |
| `incident_timestamp_value` |  |
| `incident_type` |  |
| `incident_type_id` |  |
| `mode` |  |
| `name` |  |
| `notify_incident_channel` |  |
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
| `source_message_channel_id` |  |
| `source_message_timestamp` |  |
| `status` |  |
| `summary` |  |
| `timestamp` |  |
| `updated_at` |  |
| `visibility` |  |
| `workload_minutes_late` |  |
| `workload_minutes_sleeping` |  |
| `workload_minutes_total` |  |
| `workload_minutes_working` |  |

Operations: Create, List, Load.

API path: `/v2/incidents/{id}/actions/edit`

#### IncidentAlert

| Field | Description |
| --- | --- |
| `alert` |  |
| `alert_route_id` |  |
| `id` |  |
| `incident` |  |

Operations: List.

API path: `/v2/incident_alerts`

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
| `required` |  |
| `role_type` |  |
| `shortform` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_roles`

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

#### Schedule

| Field | Description |
| --- | --- |
| `annotation` |  |
| `config` |  |
| `created_at` |  |
| `current_shift` |  |
| `holidays_public_config` |  |
| `id` |  |
| `name` |  |
| `next_shift` |  |
| `permalink` |  |
| `schedule` |  |
| `team_id` |  |
| `timezone` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedules`

#### ScheduleEntry

| Field | Description |
| --- | --- |
| `pagination_meta` |  |
| `schedule_entry` |  |

Operations: Load.

API path: `/v2/schedule_entries`

#### ScheduleReplica

| Field | Description |
| --- | --- |
| `created_at` |  |
| `id` |  |
| `last_sync_error` |  |
| `last_synced_at` |  |
| `mirror_window_day` |  |
| `replica_fallback_user_id` |  |
| `replica_provider` |  |
| `replica_provider_id` |  |
| `schedule_id` |  |
| `schedule_replica` |  |
| `source` |  |
| `updated_at` |  |
| `user_status` |  |

Operations: Create, List, Load.

API path: `/v2/schedules/{schedule_id}/replicas`

#### ScheduleSyncRule

| Field | Description |
| --- | --- |
| `annotation` |  |
| `created_at` |  |
| `id` |  |
| `permanent_member_user_id` |  |
| `rotation_id` |  |
| `schedule_id` |  |
| `schedule_sync_rule` |  |
| `schedule_sync_target` |  |
| `schedule_sync_target_id` |  |
| `sync_type` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/v2/schedules/{schedule_id}/sync_rules`

#### ScheduleSyncTarget

| Field | Description |
| --- | --- |
| `add_bot_to_group` |  |
| `annotation` |  |
| `created_at` |  |
| `id` |  |
| `linked_schedule` |  |
| `schedule_sync_target` |  |
| `slack_team_id` |  |
| `slack_user_group_id` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedule_sync_targets`

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

API path: `/v2/secrets/{id}/actions/rotate`

#### Severity

| Field | Description |
| --- | --- |
| `created_at` |  |
| `description` |  |
| `id` |  |
| `name` |  |
| `rank` |  |
| `updated_at` |  |

Operations: Create, List, Load, Update.

API path: `/v1/severities`

#### StatusPage

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `public_url` |  |

Operations: List.

API path: `/v2/status_pages`

#### StatusPageIncident

| Field | Description |
| --- | --- |
| `component_impact` |  |
| `component_status` |  |
| `id` |  |
| `idempotency_key` |  |
| `incident_status` |  |
| `message` |  |
| `name` |  |
| `notify_subscriber` |  |
| `published_at` |  |
| `status_page_id` |  |
| `update` |  |

Operations: Create, List, Load, Update.

API path: `/v2/status_page_incidents`

#### StatusPageIncidentUpdate

| Field | Description |
| --- | --- |
| `component_status` |  |
| `incident_status` |  |
| `message` |  |
| `notify_subscriber` |  |
| `status_page_incident_id` |  |

Operations: Create.

API path: `/v2/status_page_incident_updates`

#### StatusPageMaintenance

| Field | Description |
| --- | --- |
| `affected_component_id` |  |
| `component_maintenance_period` |  |
| `end_at` |  |
| `id` |  |
| `idempotency_key` |  |
| `maintenance_status` |  |
| `message` |  |
| `name` |  |
| `notify_subscriber` |  |
| `published_at` |  |
| `start_at` |  |
| `status_page_id` |  |
| `update` |  |

Operations: Create, List, Load.

API path: `/v2/status_page_maintenances`

#### StatusPageMaintenanceUpdate

| Field | Description |
| --- | --- |
| `component_status` |  |
| `maintenance_status` |  |
| `message` |  |
| `notify_subscriber` |  |
| `status_page_maintenance_id` |  |

Operations: Create.

API path: `/v2/status_page_maintenance_updates`

#### StatusPageStructure

| Field | Description |
| --- | --- |
| `item` |  |

Operations: Load.

API path: `/v2/status_page_structures/{status_page_id}`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` |  |
| `member` |  |
| `name` |  |

Operations: List, Load.

API path: `/v3/teams`

#### TelemetryDataSource

| Field | Description |
| --- | --- |
| `created_at` |  |
| `datadog_config` |  |
| `enabled` |  |
| `grafana_config` |  |
| `id` |  |
| `name` |  |
| `provider` |  |
| `source_type` |  |
| `updated_at` |  |
| `version` |  |

Operations: Update.

API path: `/v2/telemetry/data_sources/{id}`

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

Create an instance: `action = client.Action()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` |  |
| `assignee_id` | `str` |  |
| `completed_at` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `description` | `str` |  |
| `external_issue_reference` | `dict` |  |
| `follow_up` | `bool` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `status` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
action = client.Action().load({"id": "action_id"})
```

#### Example: List

```python
actions = client.Action().list()
```

#### Example: Create

```python
action = client.Action().create({
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


### Alert

Create an instance: `alert = client.Alert()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `list` |  |
| `alert_source_id` | `str` |  |
| `attribute` | `list` |  |
| `created_at` | `str` |  |
| `deduplication_key` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `resolved_at` | `str` |  |
| `source_url` | `str` |  |
| `status` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
alert = client.Alert().load({"id": "alert_id"})
```

#### Example: List

```python
alerts = client.Alert().list()
```

#### Example: Create

```python
alert = client.Alert().create({
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


### AlertAttribute

Create an instance: `alert_attribute = client.AlertAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `array` | `bool` |  |
| `emoji` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `required` | `bool` |  |
| `type` | `str` |  |

#### Example: Load

```python
alert_attribute = client.AlertAttribute().load({"id": "alert_attribute_id"})
```

#### Example: List

```python
alert_attributes = client.AlertAttribute().list()
```

#### Example: Create

```python
alert_attribute = client.AlertAttribute().create({
    "array": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "required": True,  # bool
    "type": "example_type",  # str
})
```


### AlertNote

Create an instance: `alert_note = client.AlertNote()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `str` |  |
| `alert_id` | `str` |  |
| `content` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `id` | `str` |  |
| `image` | `list` |  |
| `last_edited_at` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
alert_note = client.AlertNote().load({"id": "alert_note_id"})
```

#### Example: List

```python
alert_notes = client.AlertNote().list()
```

#### Example: Create

```python
alert_note = client.AlertNote().create({
    "content": "example_content",  # str
    "created_at": "example_created_at",  # str
    "creator": {},  # dict
    "id": "example_id",  # str
    "image": [],  # list
    "updated_at": "example_updated_at",  # str
})
```


### AlertRoute

Create an instance: `alert_route = client.AlertRoute()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_source` | `list` |  |
| `channel_config` | `list` |  |
| `condition_group` | `list` |  |
| `created_at` | `str` |  |
| `enabled` | `bool` |  |
| `escalation_config` | `dict` |  |
| `expression` | `list` |  |
| `grouping_config` | `dict` |  |
| `id` | `str` |  |
| `incident_config` | `dict` |  |
| `incident_template` | `dict` |  |
| `is_private` | `bool` |  |
| `message_config` | `dict` |  |
| `message_template` | `dict` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `updated_at` | `str` |  |
| `version` | `int` |  |

#### Example: Load

```python
alert_route = client.AlertRoute().load({"id": "alert_route_id"})
```

#### Example: List

```python
alert_routes = client.AlertRoute().list()
```

#### Example: Create

```python
alert_route = client.AlertRoute().create({
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


### AlertSource

Create an instance: `alert_source = client.AlertSource()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_events_url` | `str` |  |
| `auto_resolve_incident_alert` | `bool` |  |
| `auto_resolve_timeout_minute` | `int` |  |
| `disabled` | `bool` |  |
| `email_option` | `dict` |  |
| `heartbeat_option` | `dict` |  |
| `http_custom_option` | `dict` |  |
| `id` | `str` |  |
| `jira_option` | `dict` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `secret_token` | `str` |  |
| `source_type` | `str` |  |
| `template` | `dict` |  |

#### Example: Load

```python
alert_source = client.AlertSource().load({"id": "alert_source_id"})
```

#### Example: List

```python
alert_sources = client.AlertSource().list()
```

#### Example: Create

```python
alert_source = client.AlertSource().create({
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


### ApiKey

Create an instance: `api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comment` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `grace_period_minute` | `int` |  |
| `id` | `str` |  |
| `last_used_at` | `str` |  |
| `name` | `str` |  |
| `role` | `list` |  |
| `role_name` | `list` |  |
| `team_id` | `list` |  |
| `team_role` | `list` |  |
| `team_role_name` | `list` |  |
| `token_last_issued_at` | `str` |  |

#### Example: Load

```python
api_key = client.ApiKey().load({"id": "api_key_id"})
```

#### Example: List

```python
api_keys = client.ApiKey().list()
```

#### Example: Create

```python
api_key = client.ApiKey().create({
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


### CatalogEntry

Create an instance: `catalog_entry = client.CatalogEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `list` |  |
| `archived_at` | `str` |  |
| `attribute_value` | `dict` |  |
| `catalog_entry` | `dict` |  |
| `catalog_type` | `dict` |  |
| `catalog_type_id` | `str` |  |
| `created_at` | `str` |  |
| `external_id` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `rank` | `int` |  |
| `update_attribute` | `list` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
catalog_entry = client.CatalogEntry().load({"id": "catalog_entry_id"})
```

#### Example: List

```python
catalog_entrys = client.CatalogEntry().list()
```

#### Example: Create

```python
catalog_entry = client.CatalogEntry().create({
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


### CatalogResource

Create an instance: `catalog_resource = client.CatalogResource()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `description` | `str` |  |
| `engine_resource_type` | `str` |  |
| `label` | `str` |  |
| `type` | `str` |  |
| `value_docstring` | `str` |  |

#### Example: List

```python
catalog_resources = client.CatalogResource().list()
```


### CatalogType

Create an instance: `catalog_type = client.CatalogType()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `dict` |  |
| `category` | `list` |  |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `dynamic_resource_parameter` | `str` |  |
| `engine_resource_type` | `str` |  |
| `estimated_count` | `int` |  |
| `icon` | `str` |  |
| `id` | `str` |  |
| `is_editable` | `bool` |  |
| `is_team_type` | `bool` |  |
| `last_synced_at` | `str` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `ranked` | `bool` |  |
| `registry_type` | `str` |  |
| `required_integration` | `list` |  |
| `schema` | `dict` |  |
| `semantic_type` | `str` |  |
| `source_repo_url` | `str` |  |
| `type_name` | `str` |  |
| `updated_at` | `str` |  |
| `use_name_as_identifier` | `bool` |  |

#### Example: Load

```python
catalog_type = client.CatalogType().load({"id": "catalog_type_id"})
```

#### Example: List

```python
catalog_types = client.CatalogType().list()
```

#### Example: Create

```python
catalog_type = client.CatalogType().create({
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


### CatalogTypeSchema

Create an instance: `catalog_type_schema = client.CatalogTypeSchema()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `dict` |  |
| `attribute` | `list` |  |
| `category` | `list` |  |
| `color` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `dynamic_resource_parameter` | `str` |  |
| `engine_resource_type` | `str` |  |
| `estimated_count` | `int` |  |
| `icon` | `str` |  |
| `id` | `str` |  |
| `is_editable` | `bool` |  |
| `is_team_type` | `bool` |  |
| `last_synced_at` | `str` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `ranked` | `bool` |  |
| `registry_type` | `str` |  |
| `required_integration` | `list` |  |
| `schema` | `dict` |  |
| `semantic_type` | `str` |  |
| `source_repo_url` | `str` |  |
| `type_name` | `str` |  |
| `updated_at` | `str` |  |
| `use_name_as_identifier` | `bool` |  |
| `version` | `int` |  |

#### Example: Create

```python
catalog_type_schema = client.CatalogTypeSchema().create({
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


### CustomField

Create an instance: `custom_field = client.CustomField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `field_type` | `str` |  |
| `filter_by` | `dict` |  |
| `fixed_filter` | `dict` |  |
| `group_by_catalog_attribute_id` | `str` |  |
| `helptext_catalog_attribute_id` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `option` | `list` |  |
| `required` | `str` |  |
| `required_v2` | `str` |  |
| `show_before_closure` | `bool` |  |
| `show_before_creation` | `bool` |  |
| `show_before_update` | `bool` |  |
| `show_in_announcement_post` | `bool` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
custom_field = client.CustomField().load({"id": "custom_field_id"})
```

#### Example: List

```python
custom_fields = client.CustomField().list()
```

#### Example: Create

```python
custom_field = client.CustomField().create({
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


### CustomFieldOption

Create an instance: `custom_field_option = client.CustomFieldOption()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_field_id` | `str` |  |
| `id` | `str` |  |
| `sort_key` | `int` |  |
| `value` | `str` |  |

#### Example: Load

```python
custom_field_option = client.CustomFieldOption().load({"id": "custom_field_option_id"})
```

#### Example: List

```python
custom_field_options = client.CustomFieldOption().list()
```

#### Example: Create

```python
custom_field_option = client.CustomFieldOption().create({
    "custom_field_id": "example_custom_field_id",  # str
    "id": "example_id",  # str
    "sort_key": 1,  # int
    "value": "example_value",  # str
})
```


### Escalation

Create an instance: `escalation = client.Escalation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `description` | `str` |  |
| `escalation_path_id` | `str` |  |
| `event` | `list` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `incident_id` | `str` |  |
| `priority` | `dict` |  |
| `related_alert` | `list` |  |
| `related_incident` | `list` |  |
| `status` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |
| `user_id` | `list` |  |

#### Example: Load

```python
escalation = client.Escalation().load({"id": "escalation_id"})
```

#### Example: List

```python
escalations = client.Escalation().list()
```

#### Example: Create

```python
escalation = client.Escalation().create({
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


### FollowUp

Create an instance: `follow_up = client.FollowUp()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` |  |
| `assignee_id` | `str` |  |
| `assignee_team` | `dict` |  |
| `assignee_team_id` | `str` |  |
| `completed_at` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `description` | `str` |  |
| `external_issue_reference` | `dict` |  |
| `external_issue_reference_id` | `str` |  |
| `follow_up_category_id` | `str` |  |
| `follow_up_priority_option_id` | `str` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `label` | `list` |  |
| `priority` | `dict` |  |
| `status` | `str` |  |
| `title` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
follow_up = client.FollowUp().load({"id": "follow_up_id"})
```

#### Example: List

```python
follow_ups = client.FollowUp().list()
```

#### Example: Create

```python
follow_up = client.FollowUp().create({
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


### Incident

Create an instance: `incident = client.Incident()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `call_url` | `str` |  |
| `created_at` | `str` |  |
| `creator` | `dict` |  |
| `custom_field_entry` | `list` |  |
| `duration_metric` | `list` |  |
| `external_issue_reference` | `dict` |  |
| `has_debrief` | `bool` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `incident` | `dict` |  |
| `incident_role_assignment` | `list` |  |
| `incident_status` | `dict` |  |
| `incident_status_id` | `str` |  |
| `incident_timestamp_value` | `list` |  |
| `incident_type` | `dict` |  |
| `incident_type_id` | `str` |  |
| `mode` | `str` |  |
| `name` | `str` |  |
| `notify_incident_channel` | `bool` |  |
| `permalink` | `str` |  |
| `postmortem_document_id` | `list` |  |
| `postmortem_document_url` | `str` |  |
| `reference` | `str` |  |
| `retrospective_incident_option` | `dict` |  |
| `severity` | `dict` |  |
| `severity_id` | `str` |  |
| `slack_channel_id` | `str` |  |
| `slack_channel_name` | `str` |  |
| `slack_channel_name_override` | `str` |  |
| `slack_team_id` | `str` |  |
| `source_message_channel_id` | `str` |  |
| `source_message_timestamp` | `str` |  |
| `status` | `str` |  |
| `summary` | `str` |  |
| `timestamp` | `list` |  |
| `updated_at` | `str` |  |
| `visibility` | `str` |  |
| `workload_minutes_late` | `float` |  |
| `workload_minutes_sleeping` | `float` |  |
| `workload_minutes_total` | `float` |  |
| `workload_minutes_working` | `float` |  |

#### Example: Load

```python
incident = client.Incident().load({"id": "incident_id"})
```

#### Example: List

```python
incidents = client.Incident().list()
```

#### Example: Create

```python
incident = client.Incident().create({
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


### IncidentAlert

Create an instance: `incident_alert = client.IncidentAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `dict` |  |
| `alert_route_id` | `str` |  |
| `id` | `str` |  |
| `incident` | `dict` |  |

#### Example: List

```python
incident_alerts = client.IncidentAlert().list()
```


### IncidentAttachment

Create an instance: `incident_attachment = client.IncidentAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `resource` | `dict` |  |

#### Example: List

```python
incident_attachments = client.IncidentAttachment().list()
```

#### Example: Create

```python
incident_attachment = client.IncidentAttachment().create({
    "id": "example_id",  # str
    "incident_id": "example_incident_id",  # str
    "resource": {},  # dict
})
```


### IncidentMembership

Create an instance: `incident_membership = client.IncidentMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `str` |  |
| `user_id` | `str` |  |

#### Example: Create

```python
incident_membership = client.IncidentMembership().create({
    "incident_id": "example_incident_id",  # str
    "user_id": "example_user_id",  # str
})
```


### IncidentParticipant

Create an instance: `incident_participant = client.IncidentParticipant()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `list` |  |
| `passive` | `list` |  |

#### Example: Load

```python
incident_participant = client.IncidentParticipant().load()
```


### IncidentParticipantWorkload

Create an instance: `incident_participant_workload = client.IncidentParticipantWorkload()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `str` |  |
| `participant_type` | `str` |  |
| `user` | `dict` |  |
| `workload` | `dict` |  |

#### Example: List

```python
incident_participant_workloads = client.IncidentParticipantWorkload().list()
```


### IncidentRelationship

Create an instance: `incident_relationship = client.IncidentRelationship()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `incident` | `dict` |  |

#### Example: List

```python
incident_relationships = client.IncidentRelationship().list()
```


### IncidentRole

Create an instance: `incident_role = client.IncidentRole()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `instruction` | `str` |  |
| `name` | `str` |  |
| `required` | `bool` |  |
| `role_type` | `str` |  |
| `shortform` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
incident_role = client.IncidentRole().load({"id": "incident_role_id"})
```

#### Example: List

```python
incident_roles = client.IncidentRole().list()
```

#### Example: Create

```python
incident_role = client.IncidentRole().create({
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


### IncidentStatus

Create an instance: `incident_status = client.IncidentStatus()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `rank` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
incident_status = client.IncidentStatus().load({"id": "incident_status_id"})
```

#### Example: List

```python
incident_statuss = client.IncidentStatus().list()
```

#### Example: Create

```python
incident_status = client.IncidentStatus().create({
    "category": "example_category",  # str
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "rank": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```


### IncidentTimestamp

Create an instance: `incident_timestamp = client.IncidentTimestamp()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` |  |
| `rank` | `int` |  |

#### Example: Load

```python
incident_timestamp = client.IncidentTimestamp().load({"id": "incident_timestamp_id"})
```

#### Example: List

```python
incident_timestamps = client.IncidentTimestamp().list()
```


### IncidentType

Create an instance: `incident_type = client.IncidentType()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_in_triage` | `str` |  |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `is_default` | `bool` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `private_incidents_only` | `bool` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
incident_type = client.IncidentType().load({"id": "incident_type_id"})
```

#### Example: List

```python
incident_types = client.IncidentType().list()
```


### IncidentUpdate

Create an instance: `incident_update = client.IncidentUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `merged_into_incident_id` | `str` |  |
| `message` | `str` |  |
| `new_incident_status` | `dict` |  |
| `new_severity` | `dict` |  |
| `updater` | `dict` |  |

#### Example: List

```python
incident_updates = client.IncidentUpdate().list()
```


### IpAllowlist

Create an instance: `ip_allowlist = client.IpAllowlist()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `list` |  |
| `enabled` | `bool` |  |
| `updated_at` | `str` |  |
| `version` | `int` |  |

#### Example: Load

```python
ip_allowlist = client.IpAllowlist().load()
```


### MaintenanceWindow

Create an instance: `maintenance_window = client.MaintenanceWindow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_condition_group` | `list` |  |
| `archived_at` | `str` |  |
| `created_at` | `str` |  |
| `end_at` | `str` |  |
| `escalation_target` | `list` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `lead` | `dict` |  |
| `name` | `str` |  |
| `notification_message` | `str` |  |
| `notify_channel` | `list` |  |
| `notify_end_minutes_before` | `int` |  |
| `notify_start_minutes_before` | `int` |  |
| `reroute_on_end` | `bool` |  |
| `resolve_on_end` | `bool` |  |
| `show_in_sidebar` | `bool` |  |
| `start_at` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
maintenance_window = client.MaintenanceWindow().load({"id": "maintenance_window_id"})
```

#### Example: List

```python
maintenance_windows = client.MaintenanceWindow().list()
```

#### Example: Create

```python
maintenance_window = client.MaintenanceWindow().create({
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


### PostmortemDocument

Create an instance: `postmortem_document = client.PostmortemDocument()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `document_url` | `str` |  |
| `editor` | `list` |  |
| `exported_url` | `list` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `status` | `str` |  |
| `title` | `str` |  |
| `type` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
postmortem_document = client.PostmortemDocument().load({"id": "postmortem_document_id"})
```

#### Example: List

```python
postmortem_documents = client.PostmortemDocument().list()
```


### Schedule

Create an instance: `schedule = client.Schedule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `dict` |  |
| `config` | `dict` |  |
| `created_at` | `str` |  |
| `current_shift` | `list` |  |
| `holidays_public_config` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `next_shift` | `list` |  |
| `permalink` | `str` |  |
| `schedule` | `dict` |  |
| `team_id` | `list` |  |
| `timezone` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
schedule = client.Schedule().load({"id": "schedule_id"})
```

#### Example: List

```python
schedules = client.Schedule().list()
```

#### Example: Create

```python
schedule = client.Schedule().create({
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


### ScheduleEntry

Create an instance: `schedule_entry = client.ScheduleEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pagination_meta` | `dict` |  |
| `schedule_entry` | `dict` |  |

#### Example: Load

```python
schedule_entry = client.ScheduleEntry().load()
```


### ScheduleReplica

Create an instance: `schedule_replica = client.ScheduleReplica()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `last_sync_error` | `str` |  |
| `last_synced_at` | `str` |  |
| `mirror_window_day` | `int` |  |
| `replica_fallback_user_id` | `str` |  |
| `replica_provider` | `str` |  |
| `replica_provider_id` | `str` |  |
| `schedule_id` | `str` |  |
| `schedule_replica` | `dict` |  |
| `source` | `list` |  |
| `updated_at` | `str` |  |
| `user_status` | `list` |  |

#### Example: Load

```python
schedule_replica = client.ScheduleReplica().load({"id": "schedule_replica_id", "schedule_id": "schedule_id"})
```

#### Example: List

```python
schedule_replicas = client.ScheduleReplica().list()
```

#### Example: Create

```python
schedule_replica = client.ScheduleReplica().create({
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


### ScheduleSyncRule

Create an instance: `schedule_sync_rule = client.ScheduleSyncRule()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `dict` |  |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `permanent_member_user_id` | `list` |  |
| `rotation_id` | `str` |  |
| `schedule_id` | `str` |  |
| `schedule_sync_rule` | `dict` |  |
| `schedule_sync_target` | `dict` |  |
| `schedule_sync_target_id` | `str` |  |
| `sync_type` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
schedule_sync_rule = client.ScheduleSyncRule().load({"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"})
```

#### Example: List

```python
schedule_sync_rules = client.ScheduleSyncRule().list()
```

#### Example: Create

```python
schedule_sync_rule = client.ScheduleSyncRule().create({
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


### ScheduleSyncTarget

Create an instance: `schedule_sync_target = client.ScheduleSyncTarget()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_bot_to_group` | `bool` |  |
| `annotation` | `dict` |  |
| `created_at` | `str` |  |
| `id` | `str` |  |
| `linked_schedule` | `list` |  |
| `schedule_sync_target` | `dict` |  |
| `slack_team_id` | `str` |  |
| `slack_user_group_id` | `str` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
schedule_sync_target = client.ScheduleSyncTarget().load({"id": "schedule_sync_target_id"})
```

#### Example: List

```python
schedule_sync_targets = client.ScheduleSyncTarget().list()
```

#### Example: Create

```python
schedule_sync_target = client.ScheduleSyncTarget().create({
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


### Secret

Create an instance: `secret = client.Secret()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `last_four_char` | `str` |  |
| `name` | `str` |  |
| `owning_team_id` | `list` |  |
| `secret` | `dict` |  |
| `updated_at` | `str` |  |
| `value` | `str` |  |
| `version` | `list` |  |

#### Example: Load

```python
secret = client.Secret().load({"id": "secret_id"})
```

#### Example: List

```python
secrets = client.Secret().list()
```

#### Example: Create

```python
secret = client.Secret().create({
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


### Severity

Create an instance: `severity = client.Severity()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `rank` | `int` |  |
| `updated_at` | `str` |  |

#### Example: Load

```python
severity = client.Severity().load({"id": "severity_id"})
```

#### Example: List

```python
severitys = client.Severity().list()
```

#### Example: Create

```python
severity = client.Severity().create({
    "created_at": "example_created_at",  # str
    "description": "example_description",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "rank": 1,  # int
    "updated_at": "example_updated_at",  # str
})
```


### StatusPage

Create an instance: `status_page = client.StatusPage()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `public_url` | `str` |  |

#### Example: List

```python
status_pages = client.StatusPage().list()
```


### StatusPageIncident

Create an instance: `status_page_incident = client.StatusPageIncident()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_impact` | `list` |  |
| `component_status` | `list` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `incident_status` | `str` |  |
| `message` | `str` |  |
| `name` | `str` |  |
| `notify_subscriber` | `bool` |  |
| `published_at` | `str` |  |
| `status_page_id` | `str` |  |
| `update` | `list` |  |

#### Example: Load

```python
status_page_incident = client.StatusPageIncident().load({"id": "status_page_incident_id"})
```

#### Example: List

```python
status_page_incidents = client.StatusPageIncident().list()
```

#### Example: Create

```python
status_page_incident = client.StatusPageIncident().create({
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


### StatusPageIncidentUpdate

Create an instance: `status_page_incident_update = client.StatusPageIncidentUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_status` | `list` |  |
| `incident_status` | `str` |  |
| `message` | `str` |  |
| `notify_subscriber` | `bool` |  |
| `status_page_incident_id` | `str` |  |

#### Example: Create

```python
status_page_incident_update = client.StatusPageIncidentUpdate().create({
    "message": "example_message",  # str
    "notify_subscriber": True,  # bool
    "status_page_incident_id": "example_status_page_incident_id",  # str
})
```


### StatusPageMaintenance

Create an instance: `status_page_maintenance = client.StatusPageMaintenance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_component_id` | `list` |  |
| `component_maintenance_period` | `list` |  |
| `end_at` | `str` |  |
| `id` | `str` |  |
| `idempotency_key` | `str` |  |
| `maintenance_status` | `str` |  |
| `message` | `str` |  |
| `name` | `str` |  |
| `notify_subscriber` | `bool` |  |
| `published_at` | `str` |  |
| `start_at` | `str` |  |
| `status_page_id` | `str` |  |
| `update` | `list` |  |

#### Example: Load

```python
status_page_maintenance = client.StatusPageMaintenance().load({"id": "status_page_maintenance_id"})
```

#### Example: List

```python
status_page_maintenances = client.StatusPageMaintenance().list()
```

#### Example: Create

```python
status_page_maintenance = client.StatusPageMaintenance().create({
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


### StatusPageMaintenanceUpdate

Create an instance: `status_page_maintenance_update = client.StatusPageMaintenanceUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_status` | `list` |  |
| `maintenance_status` | `str` |  |
| `message` | `str` |  |
| `notify_subscriber` | `bool` |  |
| `status_page_maintenance_id` | `str` |  |

#### Example: Create

```python
status_page_maintenance_update = client.StatusPageMaintenanceUpdate().create({
    "message": "example_message",  # str
    "notify_subscriber": True,  # bool
    "status_page_maintenance_id": "example_status_page_maintenance_id",  # str
})
```


### StatusPageStructure

Create an instance: `status_page_structure = client.StatusPageStructure()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item` | `list` |  |

#### Example: Load

```python
status_page_structure = client.StatusPageStructure().load({"id": "status_page_structure_id"})
```


### Team

Create an instance: `team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `dict` |  |
| `id` | `str` |  |
| `member` | `list` |  |
| `name` | `str` |  |

#### Example: Load

```python
team = client.Team().load({"id": "team_id"})
```

#### Example: List

```python
teams = client.Team().list()
```


### TelemetryDataSource

Create an instance: `telemetry_data_source = client.TelemetryDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `datadog_config` | `dict` |  |
| `enabled` | `bool` |  |
| `grafana_config` | `dict` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `provider` | `str` |  |
| `source_type` | `str` |  |
| `updated_at` | `str` |  |
| `version` | `str` |  |


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `dict` |  |
| `custom_role` | `list` |  |
| `email` | `str` |  |
| `id` | `str` |  |
| `is_active` | `bool` |  |
| `name` | `str` |  |
| `role` | `str` |  |
| `seat` | `dict` |  |
| `slack_user_id` | `str` |  |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```

#### Example: List

```python
users = client.User().list()
```


### Workflow

Create an instance: `workflow = client.Workflow()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `dict` |  |
| `condition_group` | `list` |  |
| `continue_on_step_error` | `bool` |  |
| `delay` | `dict` |  |
| `expression` | `list` |  |
| `folder` | `str` |  |
| `form_field` | `list` |  |
| `id` | `str` |  |
| `include_private_escalation` | `bool` |  |
| `include_private_incident` | `bool` |  |
| `management_meta` | `dict` |  |
| `name` | `str` |  |
| `once_for` | `list` |  |
| `owning_team_id` | `list` |  |
| `private_incident_scope` | `str` |  |
| `runs_from` | `str` |  |
| `runs_on_incident` | `str` |  |
| `runs_on_incident_mode` | `list` |  |
| `shortform` | `str` |  |
| `skip_step_upgrade` | `bool` |  |
| `state` | `str` |  |
| `step` | `list` |  |
| `trigger` | `str` |  |
| `version` | `int` |  |
| `workflow` | `dict` |  |

#### Example: Load

```python
workflow = client.Workflow().load({"id": "workflow_id"})
```

#### Example: List

```python
workflows = client.Workflow().list()
```

#### Example: Create

```python
workflow = client.Workflow().create({
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


### WorkflowRun

Create an instance: `workflow_run = client.WorkflowRun()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancelled_at` | `str` |  |
| `created_at` | `str` |  |
| `enqueued_at` | `str` |  |
| `error` | `str` |  |
| `id` | `str` |  |
| `incident_id` | `str` |  |
| `incident_reference` | `str` |  |
| `progress` | `list` |  |
| `scheduled_at` | `str` |  |
| `updated_at` | `str` |  |
| `workflow_id` | `str` |  |
| `workflow_name` | `str` |  |
| `workflow_version_id` | `str` |  |
| `workflow_version_number` | `int` |  |

#### Example: Load

```python
workflow_run = client.WorkflowRun().load({"id": "workflow_run_id"})
```

#### Example: List

```python
workflow_runs = client.WorkflowRun().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── incidentio_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`incidentio_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
incidentrole = client.IncidentRole()
incidentrole.list()

# incidentrole.data_get() now returns the incidentrole data from the last list
# incidentrole.match_get() returns the last match criteria
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

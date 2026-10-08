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
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/incident-io-sdk/tags)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from incidentio_sdk import IncidentIoSDK

client = IncidentIoSDK({
    "apikey": os.environ.get("INCIDENT_IO_APIKEY"),
})
```

### 2. List action records

`list()` returns a `list` of entities, one per record, and raises on
error; an entity's `data_get()` reads its record (a `dict`).

```python
try:
    actions = client.Action().list()
    for action in actions:
        print(action.data_get())
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load a callroutesshowallowedcallerresultv2

CallRoutesShowAllowedCallerResultV2 is nested under call_route, so provide the `call_route_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    callroutesshowallowedcallerresultv2 = client.CallRoutesShowAllowedCallerResultV2().load({"call_route_id": "example_call_route_id", "id": "example_id"})
    print(callroutesshowallowedcallerresultv2.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Action().create({"assignee": {}, "created_at": "example_created_at", "creator": {}, "follow_up": True, "id": "example_id", "incident_id": "example_incident_id", "status": "example_status", "updated_at": "example_updated_at"})

# Update — the created entity's record holds its id
client.Action().update({"id": created.data_get()["id"], "assignee": {}, "assignee_id": "example_assignee_id"})

# Remove
client.Action().remove({"id": created.data_get()["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    incidentstatuss = client.IncidentStatus().list()
    print([item.data_get() for item in incidentstatuss])
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

# Entity ops return the entity, and list one per record; they raise on error.
incidentstatus = client.IncidentStatus().list()
# data_get() on an entity reads its mock response record
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
INCIDENT_IO_APIKEY=<your-key>
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
| `apikey` | `str` | API key for authentication. |
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
| `AlertSourcesV2` | `(data) -> AlertSourcesV2Entity` | Create an AlertSourcesV2 entity instance. |
| `AlertTag` | `(data) -> AlertTagEntity` | Create an AlertTag entity instance. |
| `AlertsAddTagsResultV2` | `(data) -> AlertsAddTagsResultV2Entity` | Create an AlertsAddTagsResultV2 entity instance. |
| `AlertsRemoveTagsResultV2` | `(data) -> AlertsRemoveTagsResultV2Entity` | Create an AlertsRemoveTagsResultV2 entity instance. |
| `AlertsSetTagsResultV2` | `(data) -> AlertsSetTagsResultV2Entity` | Create an AlertsSetTagsResultV2 entity instance. |
| `AlertsTransitionIncidentAlertResultV2` | `(data) -> AlertsTransitionIncidentAlertResultV2Entity` | Create an AlertsTransitionIncidentAlertResultV2 entity instance. |
| `AnnouncementRule` | `(data) -> AnnouncementRuleEntity` | Create an AnnouncementRule entity instance. |
| `AnnouncementTemplate` | `(data) -> AnnouncementTemplateEntity` | Create an AnnouncementTemplate entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `CallRoute` | `(data) -> CallRouteEntity` | Create a CallRoute entity instance. |
| `CallRoutesCreateAllowedCallerResultV2` | `(data) -> CallRoutesCreateAllowedCallerResultV2Entity` | Create a CallRoutesCreateAllowedCallerResultV2 entity instance. |
| `CallRoutesCreateOptionResultV2` | `(data) -> CallRoutesCreateOptionResultV2Entity` | Create a CallRoutesCreateOptionResultV2 entity instance. |
| `CallRoutesListAllowedCallersResultV2` | `(data) -> CallRoutesListAllowedCallersResultV2Entity` | Create a CallRoutesListAllowedCallersResultV2 entity instance. |
| `CallRoutesListOptionsResultV2` | `(data) -> CallRoutesListOptionsResultV2Entity` | Create a CallRoutesListOptionsResultV2 entity instance. |
| `CallRoutesShowAllowedCallerResultV2` | `(data) -> CallRoutesShowAllowedCallerResultV2Entity` | Create a CallRoutesShowAllowedCallerResultV2 entity instance. |
| `CallRoutesShowOptionResultV2` | `(data) -> CallRoutesShowOptionResultV2Entity` | Create a CallRoutesShowOptionResultV2 entity instance. |
| `CallRoutesUpdateAllowedCallerResultV2` | `(data) -> CallRoutesUpdateAllowedCallerResultV2Entity` | Create a CallRoutesUpdateAllowedCallerResultV2 entity instance. |
| `CallRoutesUpdateOptionResultV2` | `(data) -> CallRoutesUpdateOptionResultV2Entity` | Create a CallRoutesUpdateOptionResultV2 entity instance. |
| `CallRoutesV2` | `(data) -> CallRoutesV2Entity` | Create a CallRoutesV2 entity instance. |
| `CallSession` | `(data) -> CallSessionEntity` | Create a CallSession entity instance. |
| `CallTranscriptEntry` | `(data) -> CallTranscriptEntryEntity` | Create a CallTranscriptEntry entity instance. |
| `CatalogEntry` | `(data) -> CatalogEntryEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource` | `(data) -> CatalogResourceEntity` | Create a CatalogResource entity instance. |
| `CatalogType` | `(data) -> CatalogTypeEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema` | `(data) -> CatalogTypeSchemaEntity` | Create a CatalogTypeSchema entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data) -> CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `Escalation` | `(data) -> EscalationEntity` | Create an Escalation entity instance. |
| `EscalationPathTemplate` | `(data) -> EscalationPathTemplateEntity` | Create an EscalationPathTemplate entity instance. |
| `EscalationsCheckEscalationPermissionsResultV2` | `(data) -> EscalationsCheckEscalationPermissionsResultV2Entity` | Create an EscalationsCheckEscalationPermissionsResultV2 entity instance. |
| `EscalationsReassignEscalationResultV2` | `(data) -> EscalationsReassignEscalationResultV2Entity` | Create an EscalationsReassignEscalationResultV2 entity instance. |
| `FollowUp` | `(data) -> FollowUpEntity` | Create a FollowUp entity instance. |
| `FollowUpsConnectExternalIssueResultV3` | `(data) -> FollowUpsConnectExternalIssueResultV3Entity` | Create a FollowUpsConnectExternalIssueResultV3 entity instance. |
| `FollowUpsCreateFromLinkResultV3` | `(data) -> FollowUpsCreateFromLinkResultV3Entity` | Create a FollowUpsCreateFromLinkResultV3 entity instance. |
| `Identity` | `(data) -> IdentityEntity` | Create an Identity entity instance. |
| `Incident` | `(data) -> IncidentEntity` | Create an Incident entity instance. |
| `IncidentActivityLogEntry` | `(data) -> IncidentActivityLogEntryEntity` | Create an IncidentActivityLogEntry entity instance. |
| `IncidentAttachment` | `(data) -> IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentForm` | `(data) -> IncidentFormEntity` | Create an IncidentForm entity instance. |
| `IncidentMembership` | `(data) -> IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
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
| `IpAllowlist` | `(data) -> IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `IpRange` | `(data) -> IpRangeEntity` | Create an IpRange entity instance. |
| `MaintenanceWindow` | `(data) -> MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `OnCallNotificationMethodPublicV2` | `(data) -> OnCallNotificationMethodPublicV2Entity` | Create an OnCallNotificationMethodPublicV2 entity instance. |
| `OnCallNotificationRulePublicV2` | `(data) -> OnCallNotificationRulePublicV2Entity` | Create an OnCallNotificationRulePublicV2 entity instance. |
| `PayConfig` | `(data) -> PayConfigEntity` | Create a PayConfig entity instance. |
| `PayConfigsCreateOneOffRuleResultV2` | `(data) -> PayConfigsCreateOneOffRuleResultV2Entity` | Create a PayConfigsCreateOneOffRuleResultV2 entity instance. |
| `PayConfigsCreateWeeklyRuleResultV2` | `(data) -> PayConfigsCreateWeeklyRuleResultV2Entity` | Create a PayConfigsCreateWeeklyRuleResultV2 entity instance. |
| `PayConfigsListOneOffRulesResultV2` | `(data) -> PayConfigsListOneOffRulesResultV2Entity` | Create a PayConfigsListOneOffRulesResultV2 entity instance. |
| `PayConfigsListWeeklyRulesResultV2` | `(data) -> PayConfigsListWeeklyRulesResultV2Entity` | Create a PayConfigsListWeeklyRulesResultV2 entity instance. |
| `PayConfigsShowOneOffRuleResultV2` | `(data) -> PayConfigsShowOneOffRuleResultV2Entity` | Create a PayConfigsShowOneOffRuleResultV2 entity instance. |
| `PayConfigsShowWeeklyRuleResultV2` | `(data) -> PayConfigsShowWeeklyRuleResultV2Entity` | Create a PayConfigsShowWeeklyRuleResultV2 entity instance. |
| `PayConfigsUpdateOneOffRuleResultV2` | `(data) -> PayConfigsUpdateOneOffRuleResultV2Entity` | Create a PayConfigsUpdateOneOffRuleResultV2 entity instance. |
| `PayConfigsUpdateWeeklyRuleResultV2` | `(data) -> PayConfigsUpdateWeeklyRuleResultV2Entity` | Create a PayConfigsUpdateWeeklyRuleResultV2 entity instance. |
| `PayConfigsV2` | `(data) -> PayConfigsV2Entity` | Create a PayConfigsV2 entity instance. |
| `PayReport` | `(data) -> PayReportEntity` | Create a PayReport entity instance. |
| `PayReportsPublishResultV2` | `(data) -> PayReportsPublishResultV2Entity` | Create a PayReportsPublishResultV2 entity instance. |
| `PayReportsUnpublishResultV2` | `(data) -> PayReportsUnpublishResultV2Entity` | Create a PayReportsUnpublishResultV2 entity instance. |
| `PayReportsV2` | `(data) -> PayReportsV2Entity` | Create a PayReportsV2 entity instance. |
| `PoliciesV2` | `(data) -> PoliciesV2Entity` | Create a PoliciesV2 entity instance. |
| `Policy` | `(data) -> PolicyEntity` | Create a Policy entity instance. |
| `PolicyFinding` | `(data) -> PolicyFindingEntity` | Create a PolicyFinding entity instance. |
| `PolicyFindingsDismissResultV2` | `(data) -> PolicyFindingsDismissResultV2Entity` | Create a PolicyFindingsDismissResultV2 entity instance. |
| `PolicyFindingsRestoreResultV2` | `(data) -> PolicyFindingsRestoreResultV2Entity` | Create a PolicyFindingsRestoreResultV2 entity instance. |
| `PostmortemDocument` | `(data) -> PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `Schedule` | `(data) -> ScheduleEntity` | Create a Schedule entity instance. |
| `ScheduleEntriesListPayloadV2` | `(data) -> ScheduleEntriesListPayloadV2Entity` | Create a ScheduleEntriesListPayloadV2 entity instance. |
| `ScheduleEntry` | `(data) -> ScheduleEntryEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleReplica` | `(data) -> ScheduleReplicaEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule` | `(data) -> ScheduleSyncRuleEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget` | `(data) -> ScheduleSyncTargetEntity` | Create a ScheduleSyncTarget entity instance. |
| `SchedulesShowOverrideResultV2` | `(data) -> SchedulesShowOverrideResultV2Entity` | Create a SchedulesShowOverrideResultV2 entity instance. |
| `SchedulesUpdateOverrideResultV2` | `(data) -> SchedulesUpdateOverrideResultV2Entity` | Create a SchedulesUpdateOverrideResultV2 entity instance. |
| `Secret` | `(data) -> SecretEntity` | Create a Secret entity instance. |
| `Severity` | `(data) -> SeverityEntity` | Create a Severity entity instance. |
| `StatusPage` | `(data) -> StatusPageEntity` | Create a StatusPage entity instance. |
| `StatusPageComponent` | `(data) -> StatusPageComponentEntity` | Create a StatusPageComponent entity instance. |
| `StatusPageComponentAvailabilityV2` | `(data) -> StatusPageComponentAvailabilityV2Entity` | Create a StatusPageComponentAvailabilityV2 entity instance. |
| `StatusPageIncident` | `(data) -> StatusPageIncidentEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate` | `(data) -> StatusPageIncidentUpdateEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageLinkedResponseIncidentV1` | `(data) -> StatusPageLinkedResponseIncidentV1Entity` | Create a StatusPageLinkedResponseIncidentV1 entity instance. |
| `StatusPageMaintenance` | `(data) -> StatusPageMaintenanceEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate` | `(data) -> StatusPageMaintenanceUpdateEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure` | `(data) -> StatusPageStructureEntity` | Create a StatusPageStructure entity instance. |
| `StatusPagesV2` | `(data) -> StatusPagesV2Entity` | Create a StatusPagesV2 entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `TelemetryDataSourceV2` | `(data) -> TelemetryDataSourceV2Entity` | Create a TelemetryDataSourceV2 entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `Workflow` | `(data) -> WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data) -> WorkflowRunEntity` | Create a WorkflowRun entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria, one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

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
| `assignee_id` | ID of the user this action is assigned to |
| `completed_at` | When the action was completed |
| `created_at` | When the action was created |
| `creator` |  |
| `description` | Description of the action |
| `external_issue_reference` |  |
| `follow_up` | Whether an action is marked as follow-up |
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
| `alert_sources` | Which alert sources should this alert route match? |
| `channel_config` | The channel configuration for this alert route |
| `condition_groups` | What condition groups must be true for this alert route to fire? |
| `created_at` | The time of creation of this alert route |
| `enabled` | Whether this alert route is enabled or not |
| `escalation_config` |  |
| `expressions` | The expressions used in this template |
| `grouping_config` |  |
| `id` | Unique identifier for this alert route config |
| `incident_config` |  |
| `incident_template` |  |
| `is_private` | Whether this alert route is private. |
| `message_config` |  |
| `message_template` |  |
| `name` | The name of this alert route config, for the user's reference |
| `owning_team_ids` | IDs of teams that own this alert route |
| `updated_at` | The time of last update of this alert route |
| `version` | The version of this alert route config |

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
| `id` | Unique identifier for the tag |
| `name` | The tag name |

Operations: List.

API path: `/v2/alert_tags`

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

#### AlertsRemoveTagsResultV2

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

API path: `/v2/alerts/{id}/actions/remove_tags`

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

#### CallRoutesCreateAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `name` | Label for whose number this is |
| `phone_number` | The number to allow, in international format |

Operations: Create.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRoutesCreateOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `path` | Who to page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: Create.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallRoutesListAllowedCallersResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: List.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRoutesListOptionsResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: List.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallRoutesShowAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: Load.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

#### CallRoutesShowOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: Load.

API path: `/v2/call_routes/{call_route_id}/options/{id}`

#### CallRoutesUpdateAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: Update.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

#### CallRoutesUpdateOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: Update.

API path: `/v2/call_routes/{call_route_id}/options/{id}`

#### CallRoutesV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

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

Operations: Create, List, Load, Update.

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
| `semantic_type` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | The url of the external repository where this type is managed |
| `type_name` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | When this type was last updated |
| `use_name_as_identifier` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

Operations: Create, List, Load, Update.

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
| `semantic_type` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | The url of the external repository where this type is managed |
| `type_name` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | When this type was last updated |
| `use_name_as_identifier` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` |  |

Operations: Create.

API path: `/v2/catalog_types/{id}/actions/update_schema`

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
| `options` | What options are available for this custom field, if this field has options |
| `required` | When this custom field must be set during the incident lifecycle. |
| `required_v2` | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
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
| `source_message_channel_id` | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | Timestamp of the source message, if this incident was created from one |
| `status` | Current status of the incident |
| `summary` | Detailed description of the incident |
| `team_ids` | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | Incident lifecycle events and when they last occurred |
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
| `required` | DEPRECATED: this will always be false. |
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

#### PayConfigsCreateOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: Create.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigsCreateWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: Create.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayConfigsListOneOffRulesResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: List.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigsListWeeklyRulesResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: List.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayConfigsShowOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: Load.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules/{id}`

#### PayConfigsShowWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: Load.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules/{id}`

#### PayConfigsUpdateOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: Update.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules/{id}`

#### PayConfigsUpdateWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: Update.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules/{id}`

#### PayConfigsV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules/{id}`

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

#### PoliciesV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/v2/policies/{id}`

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

Operations: Create, List, Load, Update.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load, Update.

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

#### SchedulesShowOverrideResultV2

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

Operations: Create, List, Load.

API path: `/v2/schedule_overrides`

#### SchedulesUpdateOverrideResultV2

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

Operations: Update.

API path: `/v2/schedule_overrides/{id}`

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

Operations: Create, List, Load, Update.

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

#### StatusPageComponentAvailabilityV2

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

#### StatusPageLinkedResponseIncidentV1

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

Operations: Create, List, Load, Update.

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

#### StatusPagesV2

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/v2/status_page_maintenances/{status_page_maintenance_id}`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` | Unique ID of the team |
| `members` | Members of the team |
| `name` | Name of the team |

Operations: List, Load.

API path: `/v3/teams`

#### TelemetryDataSourceV2

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

Operations: Create, List, Load.

API path: `/v2/users/{user_id}/paging_provider`

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
| `assignee_id` | `str` | ID of the user this action is assigned to |
| `completed_at` | `str` | When the action was completed |
| `created_at` | `str` | When the action was created |
| `creator` | `dict` |  |
| `description` | `str` | Description of the action |
| `external_issue_reference` | `dict` |  |
| `follow_up` | `bool` | Whether an action is marked as follow-up |
| `id` | `str` | Unique identifier for the action |
| `incident_id` | `str` | Unique identifier of the incident the action belongs to |
| `status` | `str` | Status of the action |
| `updated_at` | `str` | When the action was last updated |

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
| `alert_group_ids` | `list` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | The ID of the alert source this alert fired on |
| `attributes` | `list` | Attribute values parsed from the alerts payload |
| `created_at` | `str` | When this entry was created |
| `deduplication_key` | `str` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | The description of the alert |
| `id` | `str` | The ID of this alert |
| `resolved_at` | `str` | When this alert was resolved |
| `source_url` | `str` | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Statuses of an alert |
| `tags` | `list` | Tags someone has applied to this alert |
| `title` | `str` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | When this alert was last updated |

#### Example: Load

```python
alert = client.Alert().load({"id": "alert_id"})
```

#### Example: List

```python
alerts = client.Alert().list({"page_size": 1})
```

#### Example: Create

```python
alert = client.Alert().create({
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
| `array` | `bool` | Whether this attribute is an array |
| `emoji` | `str` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `str` | The ID of this attribute |
| `name` | `str` | Unique name of this attribute |
| `required` | `bool` | Whether this attribute is required. |
| `type` | `str` | Engine resource name for this attribute |

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
| `alert_group_id` | `str` | ID of the alert group this note is attached to. |
| `alert_id` | `str` | ID of the alert this note is attached to. |
| `content` | `str` | Markdown body of the note |
| `created_at` | `str` | When this note was first created |
| `creator` | `dict` |  |
| `id` | `str` | Unique identifier for the alert note |
| `images` | `list` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `str` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `str` | When this note was last updated |

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
    "images": [],  # list
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
| `alert_sources` | `list` | Which alert sources should this alert route match? |
| `channel_config` | `list` | The channel configuration for this alert route |
| `condition_groups` | `list` | What condition groups must be true for this alert route to fire? |
| `created_at` | `str` | The time of creation of this alert route |
| `enabled` | `bool` | Whether this alert route is enabled or not |
| `escalation_config` | `dict` |  |
| `expressions` | `list` | The expressions used in this template |
| `grouping_config` | `dict` |  |
| `id` | `str` | Unique identifier for this alert route config |
| `incident_config` | `dict` |  |
| `incident_template` | `dict` |  |
| `is_private` | `bool` | Whether this alert route is private. |
| `message_config` | `dict` |  |
| `message_template` | `dict` |  |
| `name` | `str` | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `list` | IDs of teams that own this alert route |
| `updated_at` | `str` | The time of last update of this alert route |
| `version` | `int` | The version of this alert route config |

#### Example: Load

```python
alert_route = client.AlertRoute().load({"id": "alert_route_id"})
```

#### Example: List

```python
alert_routes = client.AlertRoute().list({"page_size": 1})
```

#### Example: Create

```python
alert_route = client.AlertRoute().create({
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
| `alert_events_url` | `str` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `bool` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `int` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `dict` |  |
| `disabled` | `bool` | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `dict` |  |
| `filter_condition_groups` | `list` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `str` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `dict` |  |
| `http_custom_options` | `dict` |  |
| `id` | `str` | The ID of this alert source |
| `jira_options` | `dict` |  |
| `name` | `str` | Unique name of the alert source |
| `owning_team_ids` | `list` | IDs of teams that own this alert source |
| `rate_limit_sharding` | `dict` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `str` | Secret token used to authenticate this source, if applicable. |
| `source_type` | `str` | Type of alert source |
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


### AlertSourcesV2

Create an instance: `alert_sources_v2 = client.AlertSourcesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `owning_team_ids` | `list` | IDs of teams that own this alert source |
| `source_type` | `str` | Type of alert source |
| `template` | `dict` |  |

#### Example: Create

```python
alert_sources_v2 = client.AlertSourcesV2().create({
    "source_type": "example_source_type",  # str
    "template": {},  # dict
})
```


### AlertTag

Create an instance: `alert_tag = client.AlertTag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for the tag |
| `name` | `str` | The tag name |

#### Example: List

```python
alert_tags = client.AlertTag().list()
```


### AlertsAddTagsResultV2

Create an instance: `alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `list` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | The ID of the alert source this alert fired on |
| `attributes` | `list` | Attribute values parsed from the alerts payload |
| `created_at` | `str` | When this entry was created |
| `deduplication_key` | `str` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | The description of the alert |
| `id` | `str` | The ID of this alert |
| `resolved_at` | `str` | When this alert was resolved |
| `source_url` | `str` | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Statuses of an alert |
| `tags` | `list` | Tags someone has applied to this alert |
| `title` | `str` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | When this alert was last updated |

#### Example: Create

```python
alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2().create({
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


### AlertsRemoveTagsResultV2

Create an instance: `alerts_remove_tags_result_v2 = client.AlertsRemoveTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `list` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | The ID of the alert source this alert fired on |
| `attributes` | `list` | Attribute values parsed from the alerts payload |
| `created_at` | `str` | When this entry was created |
| `deduplication_key` | `str` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | The description of the alert |
| `id` | `str` | The ID of this alert |
| `resolved_at` | `str` | When this alert was resolved |
| `source_url` | `str` | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Statuses of an alert |
| `tags` | `list` | Tags someone has applied to this alert |
| `title` | `str` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | When this alert was last updated |

#### Example: Create

```python
alerts_remove_tags_result_v2 = client.AlertsRemoveTagsResultV2().create({
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


### AlertsSetTagsResultV2

Create an instance: `alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `list` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `str` | The ID of the alert source this alert fired on |
| `attributes` | `list` | Attribute values parsed from the alerts payload |
| `created_at` | `str` | When this entry was created |
| `deduplication_key` | `str` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `str` | The description of the alert |
| `id` | `str` | The ID of this alert |
| `resolved_at` | `str` | When this alert was resolved |
| `source_url` | `str` | If applicable, a link to the alert in the upstream system |
| `status` | `str` | Statuses of an alert |
| `tags` | `list` | Tags someone has applied to this alert |
| `title` | `str` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `str` | When this alert was last updated |

#### Example: Create

```python
alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2().create({
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


### AlertsTransitionIncidentAlertResultV2

Create an instance: `alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `dict` |  |
| `alert_id` | `str` | Alert to attach to the incident |
| `alert_route_id` | `str` | The ID of the alert route that created this incident alert |
| `id` | `str` | The ID of this alert |
| `incident` | `dict` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `str` | Incident to attach the alert to |
| `re_relate` | `bool` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `str` | What state to move the connection to |

#### Example: List

```python
alerts_transition_incident_alert_result_v2s = client.AlertsTransitionIncidentAlertResultV2().list({"page_size": 1})
```

#### Example: Create

```python
alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2().create({
    "alert": {},  # dict
    "alert_id": "example_alert_id",  # str
    "id": "example_id",  # str
    "incident": {},  # dict
    "incident_id": "example_incident_id",  # str
    "state": "example_state",  # str
})
```


### AnnouncementRule

Create an instance: `announcement_rule = client.AnnouncementRule()`

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
| `condition_groups` | `list` | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `str` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `str` | When the rule was created |
| `id` | `str` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `list` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `str` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `str` | Human readable name for the rule |
| `owning_team_ids` | `list` | IDs of the teams that own this rule |
| `private_incident_scope` | `str` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `list` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `str` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `str` | Where incident updates are shared once the incident is announced |
| `updated_at` | `str` | When the rule was last updated |

#### Example: Load

```python
announcement_rule = client.AnnouncementRule().load({"id": "announcement_rule_id"})
```

#### Example: List

```python
announcement_rules = client.AnnouncementRule().list()
```

#### Example: Create

```python
announcement_rule = client.AnnouncementRule().create({
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


### AnnouncementTemplate

Create an instance: `announcement_template = client.AnnouncementTemplate()`

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
| `actions` | `list` | Actions shown on the announcement post, in rank order |
| `fields` | `list` | Fields shown on the announcement post, in rank order |
| `id` | `str` | Unique identifier for this announcement template |
| `is_default` | `bool` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `str` | Name of this announcement template |
| `owning_team_ids` | `list` | IDs of the teams that own this template |

#### Example: Load

```python
announcement_template = client.AnnouncementTemplate().load({"id": "announcement_template_id"})
```

#### Example: List

```python
announcement_templates = client.AnnouncementTemplate().list()
```

#### Example: Create

```python
announcement_template = client.AnnouncementTemplate().create({
    "actions": [],  # list
    "fields": [],  # list
    "id": "example_id",  # str
    "is_default": True,  # bool
    "name": "example_name",  # str
    "owning_team_ids": [],  # list
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
| `comments` | `str` | Freeform notes about this API key |
| `created_at` | `str` | When the API key was created |
| `creator` | `dict` |  |
| `id` | `str` | Unique identifier for this API key |
| `last_used_at` | `str` | When the key was last used to authenticate a request |
| `name` | `str` | The name of the API key, for the user's reference |
| `role_names` | `list` | Account-level roles to assign to the API key. |
| `roles` | `list` | The account-level roles assigned to this API key |
| `team_ids` | `list` | IDs of teams that this API key is scoped to |
| `team_role_names` | `list` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `list` | The team-level roles assigned to this API key |
| `token_last_issued_at` | `str` | When the current token for this API was last issued. |

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


### CallRoute

Create an instance: `call_route = client.CallRoute()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_callers` | `list` | The numbers allowed to call this route. |
| `country_code` | `str` | The country this route's number belongs to |
| `created_at` | `str` |  |
| `current_state` | `str` | Where this route is in provisioning. |
| `custom_language` | `str` | The language we speak voice prompts in, via text-to-speech |
| `id` | `str` | Unique identifier for this call route |
| `name` | `str` | Name for this call route |
| `options` | `list` | The phone-tree menu this route presents. |
| `path` | `list` | Who we page when a call comes in. |
| `phone_number` | `str` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `str` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `str` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `str` |  |
| `use_caller_allowlist` | `bool` | Whether this route only answers calls from its allowed callers |

#### Example: Load

```python
call_route = client.CallRoute().load({"id": "call_route_id"})
```

#### Example: List

```python
call_routes = client.CallRoute().list()
```


### CallRoutesCreateAllowedCallerResultV2

Create an instance: `call_routes_create_allowed_caller_result_v2 = client.CallRoutesCreateAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `str` | Label for whose number this is |
| `phone_number` | `str` | The number to allow, in international format |

#### Example: Create

```python
call_routes_create_allowed_caller_result_v2 = client.CallRoutesCreateAllowedCallerResultV2().create({
    "call_route_id": "example_call_route_id",  # str
    "phone_number": "example_phone_number",  # str
})
```


### CallRoutesCreateOptionResultV2

Create an instance: `call_routes_create_option_result_v2 = client.CallRoutesCreateOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `str` | The keypad digit a caller presses to choose this option |
| `path` | `list` | Who to page when a caller chooses this option |
| `prompt` | `str` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Create

```python
call_routes_create_option_result_v2 = client.CallRoutesCreateOptionResultV2().create({
    "call_route_id": "example_call_route_id",  # str
    "digit": "example_digit",  # str
    "path": [],  # list
    "prompt": "example_prompt",  # str
})
```


### CallRoutesListAllowedCallersResultV2

Create an instance: `call_routes_list_allowed_callers_result_v2 = client.CallRoutesListAllowedCallersResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for this allowed caller |
| `name` | `str` | Label for whose number this is |
| `phone_number` | `str` | The number allowed to call this route, in international format |

#### Example: List

```python
call_routes_list_allowed_callers_result_v2s = client.CallRoutesListAllowedCallersResultV2().list({"call_route_id": "example"})
```


### CallRoutesListOptionsResultV2

Create an instance: `call_routes_list_options_result_v2 = client.CallRoutesListOptionsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `str` | The keypad digit a caller presses to choose this option |
| `id` | `str` | Unique identifier for this option |
| `path` | `list` | Who we page when a caller chooses this option |
| `prompt` | `str` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: List

```python
call_routes_list_options_result_v2s = client.CallRoutesListOptionsResultV2().list({"call_route_id": "example"})
```


### CallRoutesShowAllowedCallerResultV2

Create an instance: `call_routes_show_allowed_caller_result_v2 = client.CallRoutesShowAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for this allowed caller |
| `name` | `str` | Label for whose number this is |
| `phone_number` | `str` | The number allowed to call this route, in international format |

#### Example: Load

```python
call_routes_show_allowed_caller_result_v2 = client.CallRoutesShowAllowedCallerResultV2().load({"id": "call_routes_show_allowed_caller_result_v2_id", "call_route_id": "call_route_id"})
```


### CallRoutesShowOptionResultV2

Create an instance: `call_routes_show_option_result_v2 = client.CallRoutesShowOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `str` | The keypad digit a caller presses to choose this option |
| `id` | `str` | Unique identifier for this option |
| `path` | `list` | Who we page when a caller chooses this option |
| `prompt` | `str` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Load

```python
call_routes_show_option_result_v2 = client.CallRoutesShowOptionResultV2().load({"id": "call_routes_show_option_result_v2_id", "call_route_id": "call_route_id"})
```


### CallRoutesUpdateAllowedCallerResultV2

Create an instance: `call_routes_update_allowed_caller_result_v2 = client.CallRoutesUpdateAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | Unique identifier for this allowed caller |
| `name` | `str` | Label for whose number this is |
| `phone_number` | `str` | The number allowed to call this route, in international format |


### CallRoutesUpdateOptionResultV2

Create an instance: `call_routes_update_option_result_v2 = client.CallRoutesUpdateOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `str` | The keypad digit a caller presses to choose this option |
| `id` | `str` | Unique identifier for this option |
| `path` | `list` | Who we page when a caller chooses this option |
| `prompt` | `str` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |


### CallRoutesV2

Create an instance: `call_routes_v2 = client.CallRoutesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### CallSession

Create an instance: `call_session = client.CallSession()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_at` | `str` | When the call session ended. |
| `id` | `str` | Unique identifier for this call session |
| `incident_id` | `str` | The incident this call session belongs to |
| `started_at` | `str` | When the call session started |

#### Example: List

```python
call_sessions = client.CallSession().list({"incident_id": "example"})
```


### CallTranscriptEntry

Create an instance: `call_transcript_entry = client.CallTranscriptEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `str` | What was said |
| `id` | `str` | Unique identifier for this transcript entry |
| `medium` | `str` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `str` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `str` | When the participant started speaking |

#### Example: List

```python
call_transcript_entrys = client.CallTranscriptEntry().list({"call_session_id": "example"})
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
| `aliases` | `list` | Optional aliases that can be used to reference this entry |
| `archived_at` | `str` | When this entry was archived |
| `attribute_values` | `dict` | Values of this entry |
| `catalog_entry` | `dict` |  |
| `catalog_type` | `dict` |  |
| `catalog_type_id` | `str` | ID of this catalog type |
| `created_at` | `str` | When this entry was created |
| `external_id` | `str` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `str` | ID of this catalog entry |
| `name` | `str` | Name is the human readable name of this entry |
| `rank` | `int` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `list` | If provided, only update these attribute_values keys. |
| `updated_at` | `str` | When this entry was last updated |

#### Example: Load

```python
catalog_entry = client.CatalogEntry().load({"id": "catalog_entry_id"})
```

#### Example: List

```python
catalog_entrys = client.CatalogEntry().list({"catalog_type_id": "example"})
```

#### Example: Create

```python
catalog_entry = client.CatalogEntry().create({
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


### CatalogResource

Create an instance: `catalog_resource = client.CatalogResource()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` | Which category of resource |
| `description` | `str` | Human readable description for this resource |
| `engine_resource_type` | `str` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `str` | Label for this catalog resource type |
| `type` | `str` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `str` | Documentation for the literal string value of this resource |

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
| `annotations` | `dict` | Annotations that can track metadata about this type |
| `categories` | `list` | What categories is this type considered part of |
| `color` | `str` | Sets the display color of this type in the dashboard |
| `created_at` | `str` | When this type was created |
| `description` | `str` | Human readble description of this type |
| `dynamic_resource_parameter` | `str` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `str` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | If populated, gives an estimated count of entries for this type |
| `icon` | `str` | Sets the display icon of this type in the dashboard |
| `id` | `str` | ID of this catalog type |
| `is_editable` | `bool` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `str` | When this type was last synced (if it's ever been sync'd) |
| `name` | `str` | Name is the human readable name of this type |
| `owning_team_ids` | `list` | IDs of the teams that own this catalog type |
| `ranked` | `bool` | If this type should be ranked |
| `registry_type` | `str` | The registry resource this type is synced from, if any |
| `required_integrations` | `list` | If populated, the integrations required for this type |
| `schema` | `dict` |  |
| `semantic_type` | `str` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `str` | The url of the external repository where this type is managed |
| `type_name` | `str` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `str` | When this type was last updated |
| `use_name_as_identifier` | `bool` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

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


### CatalogTypeSchema

Create an instance: `catalog_type_schema = client.CatalogTypeSchema()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `dict` | Annotations that can track metadata about this type |
| `attributes` | `list` |  |
| `categories` | `list` | What categories is this type considered part of |
| `color` | `str` | Sets the display color of this type in the dashboard |
| `created_at` | `str` | When this type was created |
| `description` | `str` | Human readble description of this type |
| `dynamic_resource_parameter` | `str` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `str` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | If populated, gives an estimated count of entries for this type |
| `icon` | `str` | Sets the display icon of this type in the dashboard |
| `id` | `str` | ID of this catalog type |
| `is_editable` | `bool` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `str` | When this type was last synced (if it's ever been sync'd) |
| `name` | `str` | Name is the human readable name of this type |
| `owning_team_ids` | `list` | IDs of the teams that own this catalog type |
| `ranked` | `bool` | If this type should be ranked |
| `registry_type` | `str` | The registry resource this type is synced from, if any |
| `required_integrations` | `list` | If populated, the integrations required for this type |
| `schema` | `dict` |  |
| `semantic_type` | `str` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `str` | The url of the external repository where this type is managed |
| `type_name` | `str` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `str` | When this type was last updated |
| `use_name_as_identifier` | `bool` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `int` |  |

#### Example: Create

```python
catalog_type_schema = client.CatalogTypeSchema().create({
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
| `catalog_type_id` | `str` | For catalog fields, the ID of the associated catalog type |
| `created_at` | `str` | When the action was created |
| `description` | `str` | Description of the custom field |
| `field_type` | `str` | Type of custom field |
| `filter_by` | `dict` |  |
| `fixed_filter` | `dict` |  |
| `group_by_catalog_attribute_id` | `str` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `str` | Which catalog attribute provides helptext for the options |
| `id` | `str` | Unique identifier for the custom field |
| `name` | `str` | Human readable name for the custom field |
| `options` | `list` | What options are available for this custom field, if this field has options |
| `required` | `str` | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `str` | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `bool` | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `bool` | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `bool` | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `bool` | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `str` | When the action was last updated |

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
    "options": [],  # list
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
| `custom_field_id` | `str` | ID of the custom field this option belongs to |
| `id` | `str` | Unique identifier for the custom field option |
| `sort_key` | `int` | Sort key used to order the custom field options correctly |
| `value` | `str` | Human readable name for the custom field option. |

#### Example: Load

```python
custom_field_option = client.CustomFieldOption().load({"id": "custom_field_option_id"})
```

#### Example: List

```python
custom_field_options = client.CustomFieldOption().list({"custom_field_id": "example"})
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
| `created_at` | `str` | When this escalation was created |
| `creator` | `dict` | The creator of this escalation. |
| `description` | `str` | Additional detail provided with this escalation. |
| `escalation_path_id` | `str` | Unique identifier of the escalation path that the escalation was created from |
| `events` | `list` | Events which describe the history of this escalation. |
| `id` | `str` | Unique ID of the escalation |
| `idempotency_key` | `str` | Unique key to prevent duplicate escalations. |
| `incident_id` | `str` | ID of an incident to associate with this escalation. |
| `priority` | `dict` | The priority associated with this escalation. |
| `related_alerts` | `list` | Alerts related to this escalation |
| `related_incidents` | `list` | Incidents related to this escalation |
| `status` | `str` | Status of the escalation |
| `title` | `str` | The title of this escalation |
| `updated_at` | `str` | When this escalation was last updated |
| `user_ids` | `list` | IDs of users to escalate directly to |

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


### EscalationPathTemplate

Create an instance: `escalation_path_template = client.EscalationPathTemplate()`

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
| `description` | `str` | A description of what this template is for. |
| `expressions` | `list` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `bool` | Whether a previous escalation path version uses this template. |
| `id` | `str` | Unique identifier for this template. |
| `name` | `str` | The name of this template. |
| `params` | `list` | The parameters declared by this template. |
| `path` | `list` | The nodes that form the levels and branches of this template. |
| `repeat_config` | `dict` |  |
| `working_hours` | `list` | The working hours for this template. |

#### Example: Load

```python
escalation_path_template = client.EscalationPathTemplate().load({"id": "escalation_path_template_id"})
```

#### Example: List

```python
escalation_path_templates = client.EscalationPathTemplate().list()
```

#### Example: Create

```python
escalation_path_template = client.EscalationPathTemplate().create({
    "expressions": [],  # list
    "has_historical_escalation_path_versions": True,  # bool
    "id": "example_id",  # str
    "name": "example_name",  # str
    "params": [],  # list
    "path": [],  # list
    "repeat_config": {},  # dict
})
```


### EscalationsCheckEscalationPermissionsResultV2

Create an instance: `escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `response_options` | `list` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `list` | The IDs of the users to check response options for |

#### Example: Create

```python
escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2().create({
    "escalation_id": "example_escalation_id",  # str
    "response_options": [],  # list
    "user_ids": [],  # list
})
```


### EscalationsReassignEscalationResultV2

Create an instance: `escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | Additional details about the new escalation. |
| `escalation_path_id` | `str` | ID of the escalation path to reassign to |
| `resolve_original` | `bool` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `str` | The title of the new escalation. |
| `user_ids` | `list` | IDs of users to reassign directly to |

#### Example: Create

```python
escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2().create({
    "escalation_id": "example_escalation_id",  # str
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
| `assignee_id` | `str` | ID of the user this follow-up is assigned to |
| `assignee_team` | `dict` |  |
| `assignee_team_id` | `str` | ID of the team this follow-up is assigned to |
| `category` | `dict` |  |
| `completed_at` | `str` | When the follow-up was completed |
| `created_at` | `str` | When the follow-up was created |
| `creator` | `dict` |  |
| `description` | `str` | Description of the follow-up |
| `external_issue_reference` | `dict` |  |
| `external_issue_reference_id` | `str` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `str` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `str` | ID of the priority for this follow-up |
| `id` | `str` | Unique identifier for the follow-up |
| `incident_id` | `str` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `list` | Labels associated with this follow-up |
| `priority` | `dict` |  |
| `status` | `str` | Status of the follow-up |
| `title` | `str` | Title of the follow-up |
| `updated_at` | `str` | When the follow-up was last updated |

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


### FollowUpsConnectExternalIssueResultV3

Create an instance: `follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `dict` |  |
| `assignee_team` | `dict` |  |
| `category` | `dict` |  |
| `completed_at` | `str` | When the follow-up was completed |
| `created_at` | `str` | When the follow-up was created |
| `creator` | `dict` |  |
| `description` | `str` | Description of the follow-up |
| `external_issue_reference` | `dict` |  |
| `id` | `str` | Unique identifier for the follow-up |
| `incident_id` | `str` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `list` | Labels associated with this follow-up |
| `priority` | `dict` |  |
| `provider` | `str` | The issue tracker provider the issue belongs to |
| `status` | `str` | Status of the follow-up |
| `title` | `str` | Title of the follow-up |
| `updated_at` | `str` | When the follow-up was last updated |
| `url` | `str` | URL of the issue in the external provider |

#### Example: Create

```python
follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3().create({
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


### FollowUpsCreateFromLinkResultV3

Create an instance: `follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `str` | Unique identifier of the incident the follow-up belongs to |
| `url` | `str` | URL of the issue in the external provider |

#### Example: Create

```python
follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3().create({
    "incident_id": "example_incident_id",  # str
    "url": "example_url",  # str
})
```


### Identity

Create an instance: `identity = client.Identity()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dashboard_url` | `str` | The dashboard URL for this organisation |
| `name` | `str` | The name assigned to the current API Key |
| `roles` | `list` | Which roles have been enabled for this key |
| `team_roles` | `list` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `list` | Teams that this API key is scoped to. |

#### Example: Load

```python
identity = client.Identity().load()
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
| `call_url` | `str` | The call URL attached to this incident |
| `created_at` | `str` | When the incident was created |
| `creator` | `dict` |  |
| `custom_field_entries` | `list` | Custom field entries for this incident |
| `debriefs` | `list` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `list` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `dict` |  |
| `has_debrief` | `bool` | If this incident has a debrief attached |
| `id` | `str` | Unique identifier for the incident |
| `idempotency_key` | `str` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `list` | A list of who is assigned to each role for this incident |
| `incident_status` | `dict` |  |
| `incident_status_id` | `str` | Incident status to assign to the incident |
| `incident_timestamp_values` | `list` | Incident lifecycle events and when they occurred |
| `incident_type` | `dict` |  |
| `incident_type_id` | `str` | Incident type to create this incident as |
| `last_activity_at` | `str` | When the incident last recorded 'activity' |
| `mode` | `str` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `str` | URL to link to the Microsoft Teams channel |
| `name` | `str` | Explanation of the incident |
| `permalink` | `str` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `list` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `str` | The URL of the incident post-mortem document |
| `reference` | `str` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `dict` |  |
| `severity` | `dict` |  |
| `severity_id` | `str` | Severity to create incident as |
| `slack_channel_id` | `str` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `str` | Name of the slack channel |
| `slack_channel_name_override` | `str` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `str` | URL to link to the slack channel |
| `slack_team_id` | `str` | ID of the Slack team / workspace. |
| `source_message_channel_id` | `str` | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | `str` | Timestamp of the source message, if this incident was created from one |
| `status` | `str` | Current status of the incident |
| `summary` | `str` | Detailed description of the incident |
| `team_ids` | `list` | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `list` | Incident lifecycle events and when they last occurred |
| `updated_at` | `str` | When the incident was last updated |
| `visibility` | `str` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `float` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `float` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `float` | Amount of time spent on the incident in total |
| `workload_minutes_working` | `float` | Amount of time spent on the incident in working hours |

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


### IncidentActivityLogEntry

Create an instance: `incident_activity_log_entry = client.IncidentActivityLogEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `dict` | Details of an activity log entry. |
| `created_at` | `str` | When we recorded the activity |
| `id` | `str` | Unique identifier of the activity log entry |
| `incident_id` | `str` | ID of the incident this happened on. |
| `occurred_at` | `str` | When the activity happened. |
| `title` | `str` | Human-readable summary of what happened |
| `type` | `str` | What kind of activity this is. |

#### Example: List

```python
incident_activity_log_entrys = client.IncidentActivityLogEntry().list({"incident_id": "example"})
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
| `id` | `str` | Unique identifier of this incident membership |
| `incident_id` | `str` | ID of the incident to add an attachment to |
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


### IncidentForm

Create an instance: `incident_form = client.IncidentForm()`

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
| `created_at` | `str` | When this incident form was created |
| `expressions` | `list` | Expressions available to every element's conditions and defaults. |
| `form_type` | `str` | Which form this is. |
| `id` | `str` | Unique identifier for this incident form |
| `incident_type_id` | `str` | The incident type this form belongs to. |
| `lifecycle_elements` | `list` | Elements on this form, in display order. |
| `updated_at` | `str` | When this incident form was last updated |

#### Example: Load

```python
incident_form = client.IncidentForm().load({"id": "incident_form_id"})
```

#### Example: List

```python
incident_forms = client.IncidentForm().list()
```

#### Example: Create

```python
incident_form = client.IncidentForm().create({
    "created_at": "example_created_at",  # str
    "expressions": [],  # list
    "form_type": "example_form_type",  # str
    "id": "example_id",  # str
    "updated_at": "example_updated_at",  # str
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
| `incident_id` | `str` | The incident to make the user a member of |
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
| `active` | `list` | Participants who are actively helping with the incident |
| `passive` | `list` | Participants who are just observing the incident |

#### Example: Load

```python
incident_participant = client.IncidentParticipant().load({"incident_id": "incident_id"})
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
| `archived_at` | `str` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `str` | The role they had in the incident |
| `user` | `dict` |  |
| `workload` | `dict` |  |

#### Example: List

```python
incident_participant_workloads = client.IncidentParticipantWorkload().list({"incident_id": "example"})
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
| `id` | `str` | Unique identifier of this incident relationship |
| `incident` | `dict` |  |

#### Example: List

```python
incident_relationships = client.IncidentRelationship().list({"incident_id": "example"})
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
| `created_at` | `str` | When the role was created |
| `description` | `str` | Describes the purpose of the role |
| `id` | `str` | Unique identifier for the role |
| `instructions` | `str` | Provided to whoever is nominated for the role. |
| `name` | `str` | Human readable name of the incident role |
| `required` | `bool` | DEPRECATED: this will always be false. |
| `role_type` | `str` | Type of incident role |
| `shortform` | `str` | Short human readable name for Slack. |
| `updated_at` | `str` | When the role was last updated |

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
    "instructions": "example_instructions",  # str
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
| `category` | `str` | What category of status it is. |
| `created_at` | `str` |  |
| `description` | `str` | Rich text description of the incident status |
| `id` | `str` | Unique ID of this incident status |
| `name` | `str` | Unique name of this status |
| `rank` | `int` | Order of this incident status |
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


### IncidentTeamMembership

Create an instance: `incident_team_membership = client.IncidentTeamMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `str` |  |
| `team_id` | `str` |  |

#### Example: Create

```python
incident_team_membership = client.IncidentTeamMembership().create({
    "incident_id": "example_incident_id",  # str
    "team_id": "example_team_id",  # str
})
```


### IncidentTeamMembershipsV1

Create an instance: `incident_team_memberships_v1 = client.IncidentTeamMembershipsV1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `str` | Revoke team access to this incident |
| `team_id` | `str` |  |

#### Example: Create

```python
incident_team_memberships_v1 = client.IncidentTeamMembershipsV1().create({
    "incident_id": "example_incident_id",  # str
    "team_id": "example_team_id",  # str
})
```


### IncidentTemplate

Create an instance: `incident_template = client.IncidentTemplate()`

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
| `created_at` | `str` | When this incident template was created |
| `expressions` | `list` | The expressions used by bindings in this template |
| `id` | `str` | Unique identifier for this incident template |
| `name` | `str` | The name of this incident template, for the user's reference |
| `template` | `dict` | The values an incident template applies to the incidents it creates. |
| `updated_at` | `str` | When this incident template was last updated |

#### Example: Load

```python
incident_template = client.IncidentTemplate().load({"id": "incident_template_id"})
```

#### Example: List

```python
incident_templates = client.IncidentTemplate().list()
```

#### Example: Create

```python
incident_template = client.IncidentTemplate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "template": {},  # dict
    "updated_at": "example_updated_at",  # str
})
```


### IncidentTemplatesValidateResultV1

Create an instance: `incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expressions` | `list` | The expressions used by bindings in this template |
| `name` | `str` | The name of this incident template, for the user's reference |
| `template` | `dict` | The values an incident template applies to the incidents it creates. |
| `warnings` | `list` | Anything suspect about this config that isn't severe enough to reject it. |

#### Example: Create

```python
incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1().create({
    "name": "example_name",  # str
    "template": {},  # dict
    "warnings": [],  # list
})
```


### IncidentTimelineItem

Create an instance: `incident_timeline_item = client.IncidentTimelineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_log_id` | `str` | ID of the activity log entry this item was promoted from. |
| `created_at` | `str` | When this item was added to the timeline |
| `creator` | `dict` |  |
| `description` | `str` | Description of the timeline item, in markdown |
| `id` | `str` | Unique identifier of the timeline item |
| `idempotency_key` | `str` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `str` | Incident to add this item to |
| `timestamp` | `str` | When the thing this item describes happened. |
| `title` | `str` | Title of the timeline item |
| `updated_at` | `str` | When this item was last edited |

#### Example: List

```python
incident_timeline_items = client.IncidentTimelineItem().list({"incident_id": "example"})
```

#### Example: Create

```python
incident_timeline_item = client.IncidentTimelineItem().create({
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
| `id` | `str` | Unique ID of this incident timestamp |
| `name` | `str` | Unique name of this timestamp |
| `rank` | `int` | Order in which this timestamp should be shown |

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
| `create_in_triage` | `str` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `str` | When this resource was created |
| `description` | `str` | What is this incident type for? |
| `id` | `str` | Unique identifier for this Incident Type |
| `is_default` | `bool` | The default Incident Type is used when no other type is explicitly specified |
| `name` | `str` | The name of this Incident Type |
| `owning_team_ids` | `list` | IDs of the teams that own this incident type |
| `private_incidents_only` | `bool` | Should all incidents created with this Incident Type be private? |
| `updated_at` | `str` | When this resource was last updated |

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
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | When the update was created |
| `id` | `str` | Unique identifier for this incident update |
| `idempotency_key` | `str` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `str` | The incident you want to update |
| `merged_into_incident_id` | `str` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `str` | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `dict` |  |
| `new_severity` | `dict` |  |
| `to_incident_status_id` | `str` | Move the incident to this status |
| `to_severity_id` | `str` | Move the incident to this severity |
| `updater` | `dict` |  |

#### Example: List

```python
incident_updates = client.IncidentUpdate().list()
```

#### Example: Create

```python
incident_update = client.IncidentUpdate().create({
    "created_at": "example_created_at",  # str
    "id": "example_id",  # str
    "idempotency_key": "example_idempotency_key",  # str
    "incident_id": "example_incident_id",  # str
    "new_incident_status": {},  # dict
    "new_severity": {},  # dict
    "updater": {},  # dict
})
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
| `allowlist` | `list` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `bool` | Whether this IP allowlist is enabled or not |
| `updated_at` | `str` | The time this allowlist was last updated |
| `version` | `int` | The version of this IP allowlist |

#### Example: Load

```python
ip_allowlist = client.IpAllowlist().load()
```


### IpRange

Create an instance: `ip_range = client.IpRange()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `str` | The address in CIDR notation. |
| `description` | `str` | Which of our traffic reaches you from this address |

#### Example: List

```python
ip_ranges = client.IpRange().list()
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
| `alert_condition_groups` | `list` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `str` | When this maintenance window was archived, if it has been |
| `created_at` | `str` | When this maintenance window was created |
| `end_at` | `str` | When the maintenance window ends |
| `escalation_targets` | `list` | If set, alerts matching this window will be escalated to these targets |
| `id` | `str` | Unique identifier for this maintenance window |
| `incident_id` | `str` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `dict` |  |
| `name` | `str` | Human readable name for the maintenance window |
| `notification_message` | `str` | Custom message included in notifications about this maintenance window |
| `notify_channels` | `list` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `int` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `int` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `list` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `bool` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `bool` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `bool` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `str` | When the maintenance window starts |
| `updated_at` | `str` | When this maintenance window was last updated |

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


### OnCallNotificationMethodPublicV2

Create an instance: `on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` | The address of this method (e.g. |
| `id` | `str` | Unique identifier for this notification method |
| `is_usable` | `bool` | Whether this method is ready to receive notifications. |
| `method_type` | `str` | The high-level type of notification method. |
| `phone_details` | `dict` |  |

#### Example: List

```python
on_call_notification_method_public_v2s = client.OnCallNotificationMethodPublicV2().list({"user_id": "example"})
```


### OnCallNotificationRulePublicV2

Create an instance: `on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `dict` |  |
| `delay_seconds` | `int` | Delay in seconds before this rule activates. |
| `id` | `str` | Unique identifier for this notification rule |
| `method_target` | `dict` |  |
| `method_type` | `str` | The high-level type of notification method. |
| `phone` | `dict` |  |
| `rule_type` | `str` | The urgency level this rule applies to |

#### Example: List

```python
on_call_notification_rule_public_v2s = client.OnCallNotificationRulePublicV2().list({"user_id": "example"})
```


### PayConfig

Create an instance: `pay_config = client.PayConfig()`

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
| `base_rate_cents` | `int` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `str` |  |
| `currency` | `str` | Currency this config pays in, in ISO 4217 format |
| `id` | `str` | Unique identifier for this pay config |
| `name` | `str` | Human readable name for this pay config |
| `one_off_rules` | `list` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `str` | When a published report first priced against this config. |
| `rate_time_unit` | `str` | The unit of time every rate on this config is quoted per. |
| `timezone` | `str` | IANA timezone this config's rules are interpreted in |
| `updated_at` | `str` |  |
| `weekly_rules` | `list` | Rules that apply every week, by day of week and time of day, in evaluation order |

#### Example: Load

```python
pay_config = client.PayConfig().load({"id": "pay_config_id"})
```

#### Example: List

```python
pay_configs = client.PayConfig().list()
```

#### Example: Create

```python
pay_config = client.PayConfig().create({
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


### PayConfigsCreateOneOffRuleResultV2

Create an instance: `pay_configs_create_one_off_rule_result_v2 = client.PayConfigsCreateOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `str` | When this rule stops applying |
| `name` | `str` | Human readable name for this rule |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | When this rule starts applying |

#### Example: Create

```python
pay_configs_create_one_off_rule_result_v2 = client.PayConfigsCreateOneOffRuleResultV2().create({
    "pay_config_id": "example_pay_config_id",  # str
    "end_at": "example_end_at",  # str
    "name": "example_name",  # str
    "rate_cents": 1,  # int
    "start_at": "example_start_at",  # str
})
```


### PayConfigsCreateWeeklyRuleResultV2

Create an instance: `pay_configs_create_weekly_rule_result_v2 = client.PayConfigsCreateWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `str` | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Days of the week this rule applies on |

#### Example: Create

```python
pay_configs_create_weekly_rule_result_v2 = client.PayConfigsCreateWeeklyRuleResultV2().create({
    "pay_config_id": "example_pay_config_id",  # str
    "end_time": "example_end_time",  # str
    "rate_cents": 1,  # int
    "start_time": "example_start_time",  # str
    "weekdays": [],  # list
})
```


### PayConfigsListOneOffRulesResultV2

Create an instance: `pay_configs_list_one_off_rules_result_v2 = client.PayConfigsListOneOffRulesResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `str` | When this rule stops applying |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Human readable name for this rule |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | When this rule starts applying |

#### Example: List

```python
pay_configs_list_one_off_rules_result_v2s = client.PayConfigsListOneOffRulesResultV2().list({"pay_config_id": "example"})
```


### PayConfigsListWeeklyRulesResultV2

Create an instance: `pay_configs_list_weekly_rules_result_v2 = client.PayConfigsListWeeklyRulesResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `str` | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Days of the week this rule applies on |

#### Example: List

```python
pay_configs_list_weekly_rules_result_v2s = client.PayConfigsListWeeklyRulesResultV2().list({"pay_config_id": "example"})
```


### PayConfigsShowOneOffRuleResultV2

Create an instance: `pay_configs_show_one_off_rule_result_v2 = client.PayConfigsShowOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `str` | When this rule stops applying |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Human readable name for this rule |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | When this rule starts applying |

#### Example: Load

```python
pay_configs_show_one_off_rule_result_v2 = client.PayConfigsShowOneOffRuleResultV2().load({"id": "pay_configs_show_one_off_rule_result_v2_id", "pay_config_id": "pay_config_id"})
```


### PayConfigsShowWeeklyRuleResultV2

Create an instance: `pay_configs_show_weekly_rule_result_v2 = client.PayConfigsShowWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `str` | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Days of the week this rule applies on |

#### Example: Load

```python
pay_configs_show_weekly_rule_result_v2 = client.PayConfigsShowWeeklyRuleResultV2().load({"id": "pay_configs_show_weekly_rule_result_v2_id", "pay_config_id": "pay_config_id"})
```


### PayConfigsUpdateOneOffRuleResultV2

Create an instance: `pay_configs_update_one_off_rule_result_v2 = client.PayConfigsUpdateOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `str` | When this rule stops applying |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `name` | `str` | Human readable name for this rule |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `str` | When this rule starts applying |


### PayConfigsUpdateWeeklyRuleResultV2

Create an instance: `pay_configs_update_weekly_rule_result_v2 = client.PayConfigsUpdateWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `str` | Time of day this rule ends, in 24 hour format. |
| `id` | `str` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `str` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `list` | Days of the week this rule applies on |


### PayConfigsV2

Create an instance: `pay_configs_v2 = client.PayConfigsV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### PayReport

Create an instance: `pay_report = client.PayReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | When this report was created |
| `creator` | `dict` |  |
| `end_date` | `str` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | Why a report could not be generated |
| `error_message` | `str` | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Unique identifier for this pay report |
| `name` | `str` | Human readable name for this report |
| `overlapping_shifts` | `str` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `dict` |  |
| `pay_config_id` | `str` | The pay config to price every shift with. |
| `published_at` | `str` | When this report was published. |
| `rotation_filters` | `list` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `list` | The schedules this report covers |
| `start_date` | `str` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `str` | When this report was last updated |

#### Example: Load

```python
pay_report = client.PayReport().load({"id": "pay_report_id"})
```

#### Example: List

```python
pay_reports = client.PayReport().list()
```

#### Example: Create

```python
pay_report = client.PayReport().create({
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


### PayReportsPublishResultV2

Create an instance: `pay_reports_publish_result_v2 = client.PayReportsPublishResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cc_emails` | `list` | Email addresses to send a copy of the report to |
| `created_at` | `str` | When this report was created |
| `creator` | `dict` |  |
| `end_date` | `str` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | Why a report could not be generated |
| `error_message` | `str` | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Unique identifier for this pay report |
| `name` | `str` | Human readable name for this report |
| `overlapping_shifts` | `str` | How time spent on more than one schedule at once was paid |
| `published_at` | `str` | When this report was published. |
| `schedule_ids` | `list` | The schedules this report covers |
| `send_user_breakdowns` | `str` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `str` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `str` | When this report was last updated |

#### Example: Create

```python
pay_reports_publish_result_v2 = client.PayReportsPublishResultV2().create({
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


### PayReportsUnpublishResultV2

Create an instance: `pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | When this report was created |
| `creator` | `dict` |  |
| `end_date` | `str` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `str` | Why a report could not be generated |
| `error_message` | `str` | What went wrong, written for whoever asked for the report. |
| `id` | `str` | Unique identifier for this pay report |
| `name` | `str` | Human readable name for this report |
| `overlapping_shifts` | `str` | How time spent on more than one schedule at once was paid |
| `published_at` | `str` | When this report was published. |
| `schedule_ids` | `list` | The schedules this report covers |
| `start_date` | `str` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `str` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `dict` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `str` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `str` | Why this report is being unpublished |
| `updated_at` | `str` | When this report was last updated |

#### Example: Create

```python
pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2().create({
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


### PayReportsV2

Create an instance: `pay_reports_v2 = client.PayReportsV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
pay_reports_v2 = client.PayReportsV2().load({"pay_report_id": "pay_report_id"})
```


### PoliciesV2

Create an instance: `policies_v2 = client.PoliciesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Policy

Create an instance: `policy = client.Policy()`

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
| `assignment_rules` | `dict` |  |
| `conditions` | `list` | Conditions which determine which resources are in scope for this policy |
| `created_at` | `str` |  |
| `debrief` | `dict` | Set when policy_type is debrief. |
| `description` | `str` | Human readable description of the policy |
| `expressions` | `list` | The expressions relating to this policy |
| `follow_up` | `dict` | Set when policy_type is follow_up. |
| `id` | `str` | Unique ID of the policy |
| `name` | `str` | Human readable name of the policy |
| `on_call_readiness` | `dict` | Set when policy_type is on_call_readiness. |
| `policy_type` | `str` | Type of the policy, specifying what this applies to |
| `post_mortem` | `dict` | Set when policy_type is post_mortem. |
| `schedule` | `dict` | Detects gaps in on-call coverage. |
| `status` | `str` | Disabled policies stop evaluating but keep their config |
| `updated_at` | `str` |  |

#### Example: Load

```python
policy = client.Policy().load({"id": "policy_id"})
```

#### Example: List

```python
policys = client.Policy().list()
```

#### Example: Create

```python
policy = client.Policy().create({
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


### PolicyFinding

Create an instance: `policy_finding = client.PolicyFinding()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `dict` | Set when policy_type is debrief. |
| `dismissal` | `dict` |  |
| `due_at` | `str` | When this finding becomes overdue |
| `follow_up` | `dict` | Set when policy_type is follow_up. |
| `id` | `str` | Unique ID of the finding |
| `last_checked_at` | `str` | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | The policy this finding was raised against |
| `policy_type` | `str` | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Set when policy_type is post_mortem. |
| `responsible_users` | `list` | Who is expected to resolve this finding |
| `schedule` | `dict` | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Set when policy_type is shift_conflict. |
| `state` | `str` | Where this finding is in its lifecycle |
| `updated_at` | `str` |  |
| `vacation_conflict` | `dict` | Set when policy_type is vacation_conflict. |

#### Example: Load

```python
policy_finding = client.PolicyFinding().load({"id": "policy_finding_id"})
```

#### Example: List

```python
policy_findings = client.PolicyFinding().list()
```


### PolicyFindingsDismissResultV2

Create an instance: `policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `dict` | Set when policy_type is debrief. |
| `dismissal` | `dict` |  |
| `due_at` | `str` | When this finding becomes overdue |
| `follow_up` | `dict` | Set when policy_type is follow_up. |
| `id` | `str` | Unique ID of the finding |
| `last_checked_at` | `str` | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | The policy this finding was raised against |
| `policy_type` | `str` | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Set when policy_type is post_mortem. |
| `reason` | `str` | Why this finding is being dismissed |
| `responsible_users` | `list` | Who is expected to resolve this finding |
| `schedule` | `dict` | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Set when policy_type is shift_conflict. |
| `state` | `str` | Where this finding is in its lifecycle |
| `updated_at` | `str` |  |
| `vacation_conflict` | `dict` | Set when policy_type is vacation_conflict. |

#### Example: Create

```python
policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2().create({
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


### PolicyFindingsRestoreResultV2

Create an instance: `policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `dict` | Set when policy_type is debrief. |
| `dismissal` | `dict` |  |
| `due_at` | `str` | When this finding becomes overdue |
| `follow_up` | `dict` | Set when policy_type is follow_up. |
| `id` | `str` | Unique ID of the finding |
| `last_checked_at` | `str` | When this finding was last re-evaluated |
| `on_call_readiness` | `dict` | Set when policy_type is on_call_readiness. |
| `policy_id` | `str` | The policy this finding was raised against |
| `policy_type` | `str` | Type of the policy this finding was raised against |
| `post_mortem` | `dict` | Set when policy_type is post_mortem. |
| `responsible_users` | `list` | Who is expected to resolve this finding |
| `schedule` | `dict` | Set when policy_type is schedule. |
| `shift_conflict` | `dict` | Set when policy_type is shift_conflict. |
| `state` | `str` | Where this finding is in its lifecycle |
| `updated_at` | `str` |  |
| `vacation_conflict` | `dict` | Set when policy_type is vacation_conflict. |

#### Example: Create

```python
policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2().create({
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
| `created_at` | `str` | Timestamp for when the document was created |
| `document_url` | `str` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `list` | The list of users who have edited this post-mortem document |
| `exported_urls` | `list` | URLs of any external locations this document has been exported to |
| `id` | `str` | Unique identifier for the post-mortem document |
| `incident_id` | `str` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `str` | The current status of this post-mortem document |
| `title` | `str` | The display title of the post-mortem document |
| `type` | `str` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `str` | Timestamp for when the document was last updated |

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
| `annotations` | `dict` | Annotations that track metadata about this resource |
| `config` | `dict` |  |
| `created_at` | `str` |  |
| `current_shifts` | `list` | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `dict` |  |
| `id` | `str` | Unique internal ID of the schedule |
| `name` | `str` | Human readable name synced from external provider |
| `next_shifts` | `list` | The shifts after the next changeover. |
| `permalink` | `str` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `list` | IDs of teams that own this schedule |
| `timezone` | `str` | Timezone of the schedule, as interpreted at the point of generating the report |
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


### ScheduleEntriesListPayloadV2

Create an instance: `schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entry_window_end` | `str` | The end of the window to preview entries for. |
| `entry_window_start` | `str` | The start of the window to preview entries for. |
| `final` | `list` | The effective schedule after overrides have been merged in |
| `overrides` | `list` | Overrides that apply within the requested window |
| `schedule` | `dict` |  |
| `scheduled` | `list` | Entries from the schedule's rotation rules, before overrides are applied |

#### Example: Create

```python
schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2().create({
    "schedule_id": "example_schedule_id",  # str
    "final": [],  # list
    "overrides": [],  # list
    "schedule": {},  # dict
    "scheduled": [],  # list
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
| `schedule_entries` | `dict` | The schedule entries for a window of time, grouped by where they come from. |

#### Example: Load

```python
schedule_entry = client.ScheduleEntry().load({"schedule_id": "schedule_id"})
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
| `created_at` | `str` | When this schedule replica was first created |
| `id` | `str` | Unique identifier of the schedule replica |
| `last_sync_error` | `str` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `str` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `int` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `str` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `str` | The external provider where this schedule is replicated to |
| `replica_provider_id` | `str` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `str` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `list` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `str` | When this schedule replica was last updated |
| `user_statuses` | `list` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

#### Example: Load

```python
schedule_replica = client.ScheduleReplica().load({"id": "schedule_replica_id", "schedule_id": "schedule_id"})
```

#### Example: List

```python
schedule_replicas = client.ScheduleReplica().list({"id": "example"})
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
    "sources": [],  # list
    "updated_at": "example_updated_at",  # str
    "user_statuses": [],  # list
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
| `annotations` | `dict` | Annotations that track metadata about this resource |
| `created_at` | `str` |  |
| `id` | `str` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `list` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `str` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `str` | The schedule this rule belongs to |
| `schedule_sync_target` | `dict` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `str` | The sync target ID this rule links to |
| `sync_type` | `str` | Which schedule members sync to the user group |
| `updated_at` | `str` |  |

#### Example: Load

```python
schedule_sync_rule = client.ScheduleSyncRule().load({"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"})
```

#### Example: List

```python
schedule_sync_rules = client.ScheduleSyncRule().list({"id": "example"})
```

#### Example: Create

```python
schedule_sync_rule = client.ScheduleSyncRule().create({
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
| `add_bot_to_group` | `bool` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `dict` | Annotations that track metadata about this resource |
| `created_at` | `str` |  |
| `id` | `str` | Unique identifier of the sync target |
| `linked_schedules` | `list` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `dict` |  |
| `slack_team_id` | `str` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `str` | Slack ID of the user group whose membership is kept in sync. |
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
    "linked_schedules": [],  # list
    "new_slack_user_group": {},  # dict
    "slack_team_id": "example_slack_team_id",  # str
    "slack_user_group_id": "example_slack_user_group_id",  # str
    "updated_at": "example_updated_at",  # str
})
```


### SchedulesShowOverrideResultV2

Create an instance: `schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2()`

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
| `end_at` | `str` | End of the override |
| `id` | `str` | Unique internal ID of the schedule override |
| `layer_id` | `str` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `str` | The rotation on the schedule that this override applies to |
| `schedule_id` | `str` | The schedule that this override applies to |
| `start_at` | `str` | Start of the override |
| `updated_at` | `str` |  |
| `user` | `dict` |  |

#### Example: Load

```python
schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2().load({"id": "schedules_show_override_result_v2_id"})
```

#### Example: List

```python
schedules_show_override_result_v2s = client.SchedulesShowOverrideResultV2().list({"schedule_id": "example"})
```

#### Example: Create

```python
schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2().create({
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


### SchedulesUpdateOverrideResultV2

Create an instance: `schedules_update_override_result_v2 = client.SchedulesUpdateOverrideResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `end_at` | `str` | End of the override |
| `id` | `str` | Unique internal ID of the schedule override |
| `layer_id` | `str` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `str` | The rotation on the schedule that this override applies to |
| `schedule_id` | `str` | The schedule that this override applies to |
| `start_at` | `str` | Start of the override |
| `updated_at` | `str` |  |
| `user` | `dict` |  |


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
| `description` | `str` | Optional description of what this secret is for |
| `id` | `str` | Unique identifier for this secret |
| `last_four_chars` | `str` | The last four characters of the current value, for masked display. |
| `name` | `str` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `list` | IDs of the teams that own this secret. |
| `secret` | `dict` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `str` |  |
| `value` | `str` | The secret's plaintext value. |
| `version` | `int` | The current version number, incremented on each rotation |
| `versions` | `list` | The secret's versions, newest first |

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
    "secret": {},  # dict
    "updated_at": "example_updated_at",  # str
    "value": "example_value",  # str
    "version": 1,  # int
    "versions": [],  # list
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
| `created_at` | `str` | When the action was created |
| `description` | `str` | Description of the severity |
| `id` | `str` | Unique identifier of the severity |
| `name` | `str` | Human readable name of the severity |
| `rank` | `int` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `str` | When the action was last updated |

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
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | The description of this status page |
| `id` | `str` | Unique ID of this status page |
| `name` | `str` | The title of this status page |
| `public_url` | `str` | The public URL of this status page |

#### Example: Load

```python
status_page = client.StatusPage().load({"id": "status_page_id"})
```

#### Example: List

```python
status_pages = client.StatusPage().list()
```


### StatusPageComponent

Create an instance: `status_page_component = client.StatusPageComponent()`

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
| `description` | `str` | Optional short description of this component |
| `id` | `str` | Unique identifier for this component |
| `management_meta` | `dict` |  |
| `name` | `str` | Human-readable name for the component |

#### Example: Load

```python
status_page_component = client.StatusPageComponent().load({"id": "status_page_component_id"})
```

#### Example: List

```python
status_page_components = client.StatusPageComponent().list()
```

#### Example: Create

```python
status_page_component = client.StatusPageComponent().create({
    "id": "example_id",  # str
    "management_meta": {},  # dict
    "name": "example_name",  # str
})
```


### StatusPageComponentAvailabilityV2

Create an instance: `status_page_component_availability_v2 = client.StatusPageComponentAvailabilityV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `availability_percent` | `str` | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `str` | ID of the component. |
| `data_available_since` | `str` | Earliest time we have status data for this component. |
| `end_at` | `str` | End of the requested availability window |
| `start_at` | `str` | Start of the requested availability window |
| `status_page_id` | `str` | ID of the status page |

#### Example: Load

```python
status_page_component_availability_v2 = client.StatusPageComponentAvailabilityV2().load({"component_id": "component_id", "status_page_id": "status_page_id", "end_at": "end_at", "start_at": "start_at"})
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
| `component_impacts` | `list` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `list` | An array of mappings from component ID to current component status |
| `id` | `str` | A unique ID for this status page incident |
| `idempotency_key` | `str` | A unique key to de-duplicate requests. |
| `incident_status` | `str` | Current status for this incident |
| `message` | `str` | Markdown initial update on this status page incident |
| `name` | `str` | A title for the incident |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page incident. |
| `published_at` | `str` | When this status page incident was published to the status page |
| `status_page_id` | `str` | The ID of the corresponding status page |
| `updates` | `list` | A list of updates posted to this status page incident |

#### Example: Load

```python
status_page_incident = client.StatusPageIncident().load({"id": "status_page_incident_id"})
```

#### Example: List

```python
status_page_incidents = client.StatusPageIncident().list({"status_page_id": "example"})
```

#### Example: Create

```python
status_page_incident = client.StatusPageIncident().create({
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


### StatusPageIncidentUpdate

Create an instance: `status_page_incident_update = client.StatusPageIncidentUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `list` | An array of mappings from component ID to component status. |
| `incident_status` | `str` | Optional new status for this status page incident. |
| `message` | `str` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `str` | ID of the status page incident |

#### Example: Create

```python
status_page_incident_update = client.StatusPageIncidentUpdate().create({
    "message": "example_message",  # str
    "notify_subscribers": True,  # bool
    "status_page_incident_id": "example_status_page_incident_id",  # str
})
```


### StatusPageLinkedResponseIncidentV1

Create an instance: `status_page_linked_response_incident_v1 = client.StatusPageLinkedResponseIncidentV1()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | ID of the Response incident |
| `linked_at` | `str` | When the Response incident was linked to the status page incident |

#### Example: List

```python
status_page_linked_response_incident_v1s = client.StatusPageLinkedResponseIncidentV1().list({"incident_id": "example", "status_page_id": "example"})
```


### StatusPageMaintenance

Create an instance: `status_page_maintenance = client.StatusPageMaintenance()`

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
| `affected_component_ids` | `list` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `bool` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `list` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `str` | The time the maintenance window ends |
| `id` | `str` | A unique ID for this status page maintenance window |
| `idempotency_key` | `str` | A unique key to de-duplicate requests. |
| `maintenance_status` | `str` | Current status for this maintenance window |
| `message` | `str` | Markdown initial update on this status page maintenance window |
| `name` | `str` | A title for the maintenance window |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `str` | When this status page maintenance window was published to the status page |
| `start_at` | `str` | The time the maintenance window starts |
| `status_page_id` | `str` | The ID of the corresponding status page |
| `updates` | `list` | A list of updates posted to this status page maintenance window |

#### Example: Load

```python
status_page_maintenance = client.StatusPageMaintenance().load({"id": "status_page_maintenance_id"})
```

#### Example: List

```python
status_page_maintenances = client.StatusPageMaintenance().list({"status_page_id": "example"})
```

#### Example: Create

```python
status_page_maintenance = client.StatusPageMaintenance().create({
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


### StatusPageMaintenanceUpdate

Create an instance: `status_page_maintenance_update = client.StatusPageMaintenanceUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `list` | An array of mappings from component ID to component status. |
| `maintenance_status` | `str` | Optional new status for this status page maintenance window. |
| `message` | `str` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `str` | ID of the status page maintenance window |

#### Example: Create

```python
status_page_maintenance_update = client.StatusPageMaintenanceUpdate().create({
    "message": "example_message",  # str
    "notify_subscribers": True,  # bool
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
| `current_structure` | `dict` |  |
| `display_uptime_mode` | `str` | How the page shows uptime against its components |
| `id` | `str` |  |
| `management_meta` | `dict` |  |

#### Example: Load

```python
status_page_structure = client.StatusPageStructure().load({"id": "status_page_structure_id"})
```


### StatusPagesV2

Create an instance: `status_pages_v2 = client.StatusPagesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


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
| `id` | `str` | Unique ID of the team |
| `members` | `list` | Members of the team |
| `name` | `str` | Name of the team |

#### Example: Load

```python
team = client.Team().load({"id": "team_id"})
```

#### Example: List

```python
teams = client.Team().list()
```


### TelemetryDataSourceV2

Create an instance: `telemetry_data_source_v2 = client.TelemetryDataSourceV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | When this data source was created |
| `datadog_config` | `dict` | Datadog-specific credential updates |
| `enabled` | `bool` | Whether this data source is enabled |
| `grafana_config` | `dict` | Grafana-specific credential and endpoint updates |
| `id` | `str` | Unique identifier for this data source |
| `name` | `str` | Human-readable name of the data source |
| `provider` | `str` | Provider that hosts this data source |
| `source_type` | `str` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `str` | When this data source was last updated |
| `version` | `str` | Upstream tool version captured at probe time (e.g. |


### User

Create an instance: `user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `dict` |  |
| `custom_roles` | `list` |  |
| `email` | `str` | Email address of the user. |
| `id` | `str` | Unique identifier of the user |
| `is_active` | `bool` | Whether the user is active. |
| `name` | `str` | Name of the user |
| `role` | `str` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `dict` |  |
| `slack_user_id` | `str` | Slack ID of the user |

#### Example: Load

```python
user = client.User().load({"id": "user_id"})
```

#### Example: List

```python
users = client.User().list()
```

#### Example: Create

```python
user = client.User().create({
    "id": "example_id",  # str
    "base_role": {},  # dict
    "custom_roles": [],  # list
    "is_active": True,  # bool
    "name": "example_name",  # str
    "role": "example_role",  # str
    "seats": {},  # dict
})
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
| `annotations` | `dict` | Annotations that track metadata about this resource |
| `auto_run_mode` | `str` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `list` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `bool` | Whether to continue executing the workflow if a step fails |
| `delay` | `dict` |  |
| `expressions` | `list` | The expressions to use in the workflow |
| `folder` | `str` | Folder to display the workflow in |
| `form_fields` | `list` | User-configured form fields available in the workflow scope. |
| `id` | `str` | Unique identifier for the workflow |
| `include_private_escalations` | `bool` | Whether to include private escalations |
| `include_private_incidents` | `bool` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `dict` |  |
| `name` | `str` | Name provided by the user when creating the workflow |
| `once_for` | `list` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `list` | IDs of the teams that own this workflow |
| `private_incident_scope` | `str` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `str` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `list` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `str` | Which incidents should the workflow be applied to? |
| `shortform` | `str` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `bool` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `str` | What state this workflow is in |
| `steps` | `list` | Steps that are executed as part of the workflow |
| `trigger` | `str` | Trigger to set on the workflow |
| `version` | `int` | Revision of the workflow, uniquely identifying it's version |
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
| `cancelled_at` | `str` | If the run was cancelled, this is when |
| `created_at` | `str` | When the resource was created |
| `enqueued_at` | `str` | When the run was enqueued for execution |
| `error` | `str` | Error produced by the workflow, if it failed |
| `id` | `str` | Unique identifier for the workflow run |
| `incident_id` | `str` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `str` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `list` | Status of each step as it is worked |
| `scheduled_at` | `str` | When the run was scheduled for |
| `updated_at` | `str` | When the resource was last updated |
| `workflow_id` | `str` | Unique identifier for the underlying workflow |
| `workflow_name` | `str` | Name of the underlying workflow |
| `workflow_version_id` | `str` | Unique identifier of the workflow version |
| `workflow_version_number` | `int` | Monotonically incrementing version number for the version that ran |

#### Example: Load

```python
workflow_run = client.WorkflowRun().load({"id": "workflow_run_id"})
```

#### Example: List

```python
workflow_runs = client.WorkflowRun().list()
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
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
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
├── schema.py                    -- Generated option + entity specs
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
incidentstatus = client.IncidentStatus()
incidentstatus.list()

# incidentstatus.data_get() now returns the incidentstatus data from the last list
# incidentstatus.match_get() returns the last match criteria
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

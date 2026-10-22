# IncidentIo Ruby SDK



The Ruby SDK for the IncidentIo API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Action` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/incident-io-sdk/tags)), or
from a clone:

```bash
git clone https://github.com/voxgig-sdk/incident-io-sdk
```

Then add it to your `Gemfile` by path, and run `bundle install`:

```ruby
gem "voxgig-sdk-incident-io-sdk", path: "./incident-io-sdk/rb"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "IncidentIo_sdk"

client = IncidentIoSDK.new({
  "apikey" => ENV["INCIDENT_IO_APIKEY"],
})
```

### 2. List action records

```ruby
begin
  # list returns an Array of Action entities, one per record; data_get reads the record.
  actions = client.Action.list
  actions.each do |item|
    record = item.data_get
    puts "#{record["id"]} #{record["assignee"]}"
  end
rescue => err
  warn "list failed: #{err}"
end
```

### 3. Load a callrouteallowedcaller

CallRouteAllowedCaller is nested under call_route, so provide the `call_route_id`.

```ruby
begin
  # load returns the ENTITY — call data_get for the CallRouteAllowedCaller record (raises on error).
  callrouteallowedcaller = client.CallRouteAllowedCaller.load({ "call_route_id" => "example_call_route_id", "id" => "example_id" })
  puts callrouteallowedcaller.data_get
rescue => err
  warn "load failed: #{err}"
end
```

### 4. Create, update, and remove

```ruby
# create returns the ENTITY — call data_get for the created Action record.
created = client.Action.create({ "description" => "example_description", "incident_id" => "example_incident_id" })

# Update — index the record via data_get (created.data_get["id"]).
client.Action.update({ "id" => created.data_get["id"], "assignee_id" => "example_assignee_id", "description" => "example_description" })

# Remove
client.Action.remove({ "id" => created.data_get["id"] })
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  incidentstatuss = client.IncidentStatus.list()
rescue => err
  warn "list failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```ruby
client = IncidentIoSDK.test({
  "entity" => { "incident_status" => { "test01" => { "id" => "test01" } } },
})

# list returns an Array of IncidentStatus entities, one per mock record (raises on
# error); data_get reads each record.
incidentstatuss = client.IncidentStatus.list()
incidentstatuss.each { |item| puts item.data_get }
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = IncidentIoSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
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
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### IncidentIoSDK

```ruby
require_relative "IncidentIo_sdk"
client = IncidentIoSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = IncidentIoSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IncidentIoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch = nil, ctrl) -> Array` | List entities matching the criteria (call with no argument to list all), one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` an `Array` of entities, one
per record; an entity's `data_get` reads its record. On failure they raise a
`IncidentIoError` (a `StandardError` subclass), so wrap calls in
`begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

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

API path: `/v2/escalations/{id}/actions/cancel`

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

Create an instance: `action = client.Action`

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
| `assignee` | `Hash` |  |
| `assignee_id` | `String` | ID of the user this action is assigned to |
| `completed_at` | `String` | When the action was completed |
| `created_at` | `String` | When the action was created |
| `creator` | `Hash` |  |
| `description` | `String` | Description of the action |
| `id` | `String` | Unique identifier for the action |
| `incident_id` | `String` | Unique identifier of the incident the action belongs to |
| `status` | `String` | Status of the action |
| `updated_at` | `String` | When the action was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Action record (raises on error).
action = client.Action.load({ "id" => "action_id" })
```

#### Example: List

```ruby
# list returns an Array of Action entities, one per record (raises on error).
actions = client.Action.list
actions.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
action = client.Action.create({
  "description" => "example_description", # String
  "incident_id" => "example_incident_id", # String
})
```


### Alert

Create an instance: `alert = client.Alert`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `String` | When this entry was created |
| `deduplication_key` | `String` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | The description of the alert |
| `id` | `String` | The ID of this alert |
| `resolved_at` | `String` | When this alert was resolved |
| `source_url` | `String` | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `String` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | When this alert was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Alert record (raises on error).
alert = client.Alert.load({ "id" => "alert_id" })
```

#### Example: List

```ruby
# list returns an Array of Alert entities, one per record (raises on error).
alerts = client.Alert.list({ "page_size" => 1 })
alerts.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert = client.Alert.create({
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


### AlertAttribute

Create an instance: `alert_attribute = client.AlertAttribute`

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
| `array` | `Boolean` | Whether this attribute is an array |
| `emoji` | `String` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `String` | The ID of this attribute |
| `name` | `String` | Unique name of this attribute |
| `required` | `Boolean` | Whether this attribute is required. |
| `type` | `String` | Engine resource name for this attribute |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlertAttribute record (raises on error).
alert_attribute = client.AlertAttribute.load({ "id" => "alert_attribute_id" })
```

#### Example: List

```ruby
# list returns an Array of AlertAttribute entities, one per record (raises on error).
alert_attributes = client.AlertAttribute.list
alert_attributes.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert_attribute = client.AlertAttribute.create({
  "array" => true, # Boolean
  "name" => "example_name", # String
  "type" => "example_type", # String
})
```


### AlertEventsV2

Create an instance: `alert_events_v2 = client.AlertEventsV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deduplication_key` | `String` | The deduplication key that the event has been processed with |
| `description` | `String` | Description that optionally adds more detail to title. |
| `message` | `String` | Human readable message giving detail about the event |
| `metadata` | `Hash` | Any additional metadata that you've configured your alert source to parse |
| `source_url` | `String` | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Status of the event |
| `title` | `String` | The title of the alert, parsed from the alert payload according to the alert source configuration |

#### Example: Create

```ruby
alert_events_v2 = client.AlertEventsV2.create({
  "alert_source_config_id" => "example_alert_source_config_id", # String
  "status" => "example_status", # String
  "title" => "example_title", # String
})
```


### AlertNote

Create an instance: `alert_note = client.AlertNote`

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
| `alert_group_id` | `String` | ID of the alert group this note is attached to. |
| `alert_id` | `String` | ID of the alert this note is attached to. |
| `content` | `String` | Markdown body of the note |
| `created_at` | `String` | When this note was first created |
| `creator` | `Hash` |  |
| `id` | `String` | Unique identifier for the alert note |
| `images` | `Array` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `String` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `String` | When this note was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlertNote record (raises on error).
alert_note = client.AlertNote.load({ "id" => "alert_note_id" })
```

#### Example: List

```ruby
# list returns an Array of AlertNote entities, one per record (raises on error).
alert_notes = client.AlertNote.list
alert_notes.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert_note = client.AlertNote.create({
  "content" => "example_content", # String
})
```


### AlertRoute

Create an instance: `alert_route = client.AlertRoute`

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
| `alert_sources` | `Array` | Which alert sources this route matches |
| `condition_groups` | `Array` | Filter: the condition groups that must be true for this route to fire |
| `created_at` | `String` | When this alert route was created |
| `enabled` | `Boolean` | Whether this alert route is enabled |
| `escalation_config` | `Hash` |  |
| `expressions` | `Array` | The expressions used by bindings in this route |
| `grouping_config` | `Hash` |  |
| `id` | `String` | Unique identifier for this alert route |
| `incident_config` | `Hash` |  |
| `is_private` | `Boolean` | Whether this alert route is private. |
| `message_config` | `Hash` |  |
| `name` | `String` | The name of this alert route, for the user's reference |
| `owning_team_ids` | `Array` | IDs of teams that own this alert route |
| `updated_at` | `String` | When this alert route was last updated |
| `version` | `Integer` | The version of this alert route |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlertRoute record (raises on error).
alert_route = client.AlertRoute.load({ "id" => "alert_route_id" })
```

#### Example: List

```ruby
# list returns an Array of AlertRoute entities, one per record (raises on error).
alert_routes = client.AlertRoute.list
alert_routes.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert_route = client.AlertRoute.create({
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


### AlertSource

Create an instance: `alert_source = client.AlertSource`

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
| `alert_events_url` | `String` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `Boolean` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `Integer` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `Hash` |  |
| `disabled` | `Boolean` | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `Hash` |  |
| `filter_condition_groups` | `Array` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `String` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `Hash` |  |
| `http_custom_options` | `Hash` |  |
| `id` | `String` | The ID of this alert source |
| `jira_options` | `Hash` |  |
| `name` | `String` | Unique name of the alert source |
| `owning_team_ids` | `Array` | IDs of teams that own this alert source |
| `rate_limit_sharding` | `Hash` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `String` | Secret token used to authenticate this source, if applicable. |
| `source_type` | `String` | Type of alert source |
| `template` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AlertSource record (raises on error).
alert_source = client.AlertSource.load({ "id" => "alert_source_id" })
```

#### Example: List

```ruby
# list returns an Array of AlertSource entities, one per record (raises on error).
alert_sources = client.AlertSource.list
alert_sources.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert_source = client.AlertSource.create({
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


### AlertSourcesV2

Create an instance: `alert_sources_v2 = client.AlertSourcesV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `owning_team_ids` | `Array` | IDs of teams that own this alert source |
| `source_type` | `String` | Type of alert source |
| `template` | `Hash` |  |

#### Example: Create

```ruby
alert_sources_v2 = client.AlertSourcesV2.create({
  "source_type" => "example_source_type", # String
  "template" => {}, # Hash
})
```


### AlertTag

Create an instance: `alert_tag = client.AlertTag`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `String` | When this entry was created |
| `deduplication_key` | `String` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | The description of the alert |
| `id` | `String` | The ID of this alert |
| `name` | `String` | The tag name |
| `resolved_at` | `String` | When this alert was resolved |
| `source_url` | `String` | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `String` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | When this alert was last updated |

#### Example: List

```ruby
# list returns an Array of AlertTag entities, one per record (raises on error).
alert_tags = client.AlertTag.list
alert_tags.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alert_tag = client.AlertTag.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```


### AlertsAddTagsResultV2

Create an instance: `alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `String` | When this entry was created |
| `deduplication_key` | `String` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | The description of the alert |
| `id` | `String` | The ID of this alert |
| `resolved_at` | `String` | When this alert was resolved |
| `source_url` | `String` | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `String` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | When this alert was last updated |

#### Example: Create

```ruby
alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```


### AlertsSetTagsResultV2

Create an instance: `alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `String` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `String` | When this entry was created |
| `deduplication_key` | `String` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `String` | The description of the alert |
| `id` | `String` | The ID of this alert |
| `resolved_at` | `String` | When this alert was resolved |
| `source_url` | `String` | If applicable, a link to the alert in the upstream system |
| `status` | `String` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `String` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `String` | When this alert was last updated |

#### Example: Create

```ruby
alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2.create({
  "alert_id" => "example_alert_id", # String
  "tags" => [], # Array
})
```


### AlertsTransitionIncidentAlertResultV2

Create an instance: `alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `Hash` |  |
| `alert_id` | `String` | Alert to attach to the incident |
| `alert_route_id` | `String` | The ID of the alert route that created this incident alert |
| `id` | `String` | The ID of this alert |
| `incident` | `Hash` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `String` | Incident to attach the alert to |
| `re_relate` | `Boolean` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `String` | What state to move the connection to |

#### Example: List

```ruby
# list returns an Array of AlertsTransitionIncidentAlertResultV2 entities, one per record (raises on error).
alerts_transition_incident_alert_result_v2s = client.AlertsTransitionIncidentAlertResultV2.list({ "page_size" => 1 })
alerts_transition_incident_alert_result_v2s.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2.create({
  "alert_id" => "example_alert_id", # String
  "incident_id" => "example_incident_id", # String
  "state" => "example_state", # String
})
```


### AnnouncementRule

Create an instance: `announcement_rule = client.AnnouncementRule`

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
| `condition_groups` | `Array` | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `String` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `String` | When the rule was created |
| `id` | `String` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `Array` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `String` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `String` | Human readable name for the rule |
| `owning_team_ids` | `Array` | IDs of the teams that own this rule |
| `private_incident_scope` | `String` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `Array` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `String` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `String` | Where incident updates are shared once the incident is announced |
| `updated_at` | `String` | When the rule was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AnnouncementRule record (raises on error).
announcement_rule = client.AnnouncementRule.load({ "id" => "announcement_rule_id" })
```

#### Example: List

```ruby
# list returns an Array of AnnouncementRule entities, one per record (raises on error).
announcement_rules = client.AnnouncementRule.list
announcement_rules.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
announcement_rule = client.AnnouncementRule.create({
  "condition_groups" => [], # Array
  "mode" => "example_mode", # String
  "name" => "example_name", # String
  "update_sharing_mode" => "example_update_sharing_mode", # String
})
```


### AnnouncementTemplate

Create an instance: `announcement_template = client.AnnouncementTemplate`

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
| `actions` | `Array` | Actions shown on the announcement post, in rank order |
| `fields` | `Array` | Fields shown on the announcement post, in rank order |
| `id` | `String` | Unique identifier for this announcement template |
| `is_default` | `Boolean` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `String` | Name of this announcement template |
| `owning_team_ids` | `Array` | IDs of the teams that own this template |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the AnnouncementTemplate record (raises on error).
announcement_template = client.AnnouncementTemplate.load({ "id" => "announcement_template_id" })
```

#### Example: List

```ruby
# list returns an Array of AnnouncementTemplate entities, one per record (raises on error).
announcement_templates = client.AnnouncementTemplate.list
announcement_templates.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
announcement_template = client.AnnouncementTemplate.create({
  "name" => "example_name", # String
})
```


### ApiKey

Create an instance: `api_key = client.ApiKey`

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
| `comments` | `String` | Freeform notes about this API key |
| `created_at` | `String` | When the API key was created |
| `creator` | `Hash` |  |
| `id` | `String` | Unique identifier for this API key |
| `last_used_at` | `String` | When the key was last used to authenticate a request |
| `name` | `String` | The name of the API key, for the user's reference |
| `role_names` | `Array` | Account-level roles to assign to the API key. |
| `roles` | `Array` | The account-level roles assigned to this API key |
| `team_ids` | `Array` | IDs of teams that this API key is scoped to |
| `team_role_names` | `Array` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `Array` | The team-level roles assigned to this API key |
| `token_last_issued_at` | `String` | When the current token for this API was last issued. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ApiKey record (raises on error).
api_key = client.ApiKey.load({ "id" => "api_key_id" })
```

#### Example: List

```ruby
# list returns an Array of ApiKey entities, one per record (raises on error).
api_keys = client.ApiKey.list
api_keys.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
api_key = client.ApiKey.create({
  "name" => "example_name", # String
  "role_names" => [], # Array
  "team_ids" => [], # Array
  "team_role_names" => [], # Array
})
```


### CallRoute

Create an instance: `call_route = client.CallRoute`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_callers` | `Array` | The numbers allowed to call this route. |
| `country_code` | `String` | The country this route's number belongs to |
| `created_at` | `String` |  |
| `current_state` | `String` | Where this route is in provisioning. |
| `custom_language` | `String` | The language we speak voice prompts in, via text-to-speech |
| `id` | `String` | Unique identifier for this call route |
| `name` | `String` | Name for this call route |
| `options` | `Array` | The phone-tree menu this route presents. |
| `path` | `Array` | Who we page when a call comes in. |
| `phone_number` | `String` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `String` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `String` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `String` |  |
| `use_caller_allowlist` | `Boolean` | Whether this route only answers calls from its allowed callers |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CallRoute record (raises on error).
call_route = client.CallRoute.load({ "id" => "call_route_id" })
```

#### Example: List

```ruby
# list returns an Array of CallRoute entities, one per record (raises on error).
call_routes = client.CallRoute.list
call_routes.each { |item| puts item.data_get }
```


### CallRouteAllowedCaller

Create an instance: `call_route_allowed_caller = client.CallRouteAllowedCaller`

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
| `id` | `String` | Unique identifier for this allowed caller |
| `name` | `String` | Label for whose number this is |
| `phone_number` | `String` | The number allowed to call this route, in international format |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CallRouteAllowedCaller record (raises on error).
call_route_allowed_caller = client.CallRouteAllowedCaller.load({ "id" => "call_route_allowed_caller_id", "call_route_id" => "call_route_id" })
```

#### Example: List

```ruby
# list returns an Array of CallRouteAllowedCaller entities, one per record (raises on error).
call_route_allowed_callers = client.CallRouteAllowedCaller.list({ "id" => "example" })
call_route_allowed_callers.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
call_route_allowed_caller = client.CallRouteAllowedCaller.create({
  "id" => "example_id", # String
  "phone_number" => "example_phone_number", # String
})
```


### CallRouteOption

Create an instance: `call_route_option = client.CallRouteOption`

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
| `digit` | `String` | The keypad digit a caller presses to choose this option |
| `id` | `String` | Unique identifier for this option |
| `path` | `Array` | Who we page when a caller chooses this option |
| `prompt` | `String` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CallRouteOption record (raises on error).
call_route_option = client.CallRouteOption.load({ "id" => "call_route_option_id", "call_route_id" => "call_route_id" })
```

#### Example: List

```ruby
# list returns an Array of CallRouteOption entities, one per record (raises on error).
call_route_options = client.CallRouteOption.list({ "id" => "example" })
call_route_options.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
call_route_option = client.CallRouteOption.create({
  "id" => "example_id", # String
  "digit" => "example_digit", # String
  "path" => [], # Array
  "prompt" => "example_prompt", # String
})
```


### CallSession

Create an instance: `call_session = client.CallSession`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_at` | `String` | When the call session ended. |
| `id` | `String` | Unique identifier for this call session |
| `incident_id` | `String` | The incident this call session belongs to |
| `started_at` | `String` | When the call session started |

#### Example: List

```ruby
# list returns an Array of CallSession entities, one per record (raises on error).
call_sessions = client.CallSession.list({ "incident_id" => "example" })
call_sessions.each { |item| puts item.data_get }
```


### CallTranscriptEntry

Create an instance: `call_transcript_entry = client.CallTranscriptEntry`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` | What was said |
| `id` | `String` | Unique identifier for this transcript entry |
| `medium` | `String` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `String` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `String` | When the participant started speaking |

#### Example: List

```ruby
# list returns an Array of CallTranscriptEntry entities, one per record (raises on error).
call_transcript_entrys = client.CallTranscriptEntry.list({ "call_session_id" => "example" })
call_transcript_entrys.each { |item| puts item.data_get }
```


### CatalogEntry

Create an instance: `catalog_entry = client.CatalogEntry`

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
| `aliases` | `Array` | Optional aliases that can be used to reference this entry |
| `archived_at` | `String` | When this entry was archived |
| `attribute_values` | `Hash` | Values of this entry |
| `catalog_entry` | `Hash` |  |
| `catalog_type` | `Hash` |  |
| `catalog_type_id` | `String` | ID of this catalog type |
| `created_at` | `String` | When this entry was created |
| `external_id` | `String` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `String` | ID of this catalog entry |
| `name` | `String` | Name is the human readable name of this entry |
| `rank` | `Integer` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `Array` | If provided, only update these attribute_values keys. |
| `updated_at` | `String` | When this entry was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CatalogEntry record (raises on error).
catalog_entry = client.CatalogEntry.load({ "id" => "catalog_entry_id" })
```

#### Example: List

```ruby
# list returns an Array of CatalogEntry entities, one per record (raises on error).
catalog_entrys = client.CatalogEntry.list({ "catalog_type_id" => "example", "page_size" => 1 })
catalog_entrys.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
catalog_entry = client.CatalogEntry.create({
  "attribute_values" => {}, # Hash
  "catalog_type_id" => "example_catalog_type_id", # String
  "name" => "example_name", # String
})
```


### CatalogResource

Create an instance: `catalog_resource = client.CatalogResource`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `String` | Which category of resource |
| `description` | `String` | Human readable description for this resource |
| `engine_resource_type` | `String` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `String` | Label for this catalog resource type |
| `type` | `String` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `String` | Documentation for the literal string value of this resource |

#### Example: List

```ruby
# list returns an Array of CatalogResource entities, one per record (raises on error).
catalog_resources = client.CatalogResource.list
catalog_resources.each { |item| puts item.data_get }
```


### CatalogType

Create an instance: `catalog_type = client.CatalogType`

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
| `annotations` | `Hash` | Annotations that can track metadata about this type |
| `categories` | `Array` | What categories is this type considered part of |
| `color` | `String` | Sets the display color of this type in the dashboard |
| `created_at` | `String` | When this type was created |
| `description` | `String` | Human readble description of this type |
| `dynamic_resource_parameter` | `String` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `String` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `Integer` | If populated, gives an estimated count of entries for this type |
| `icon` | `String` | Sets the display icon of this type in the dashboard |
| `id` | `String` | ID of this catalog type |
| `is_editable` | `Boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `Boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `String` | When this type was last synced (if it's ever been sync'd) |
| `name` | `String` | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | IDs of the teams that own this catalog type |
| `ranked` | `Boolean` | If this type should be ranked |
| `registry_type` | `String` | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | If populated, the integrations required for this type |
| `schema` | `Hash` |  |
| `source_repo_url` | `String` | The url of the external repository where this type is managed |
| `type_name` | `String` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `String` | When this type was last updated |
| `use_name_as_identifier` | `Boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CatalogType record (raises on error).
catalog_type = client.CatalogType.load({ "id" => "catalog_type_id" })
```

#### Example: List

```ruby
# list returns an Array of CatalogType entities, one per record (raises on error).
catalog_types = client.CatalogType.list
catalog_types.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
catalog_type = client.CatalogType.create({
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```


### CatalogTypeSchema

Create an instance: `catalog_type_schema = client.CatalogTypeSchema`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `Hash` | Annotations that can track metadata about this type |
| `attributes` | `Array` |  |
| `categories` | `Array` | What categories is this type considered part of |
| `color` | `String` | Sets the display color of this type in the dashboard |
| `created_at` | `String` | When this type was created |
| `description` | `String` | Human readble description of this type |
| `dynamic_resource_parameter` | `String` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `String` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `Integer` | If populated, gives an estimated count of entries for this type |
| `icon` | `String` | Sets the display icon of this type in the dashboard |
| `id` | `String` | ID of this catalog type |
| `is_editable` | `Boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `Boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `String` | When this type was last synced (if it's ever been sync'd) |
| `name` | `String` | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | IDs of the teams that own this catalog type |
| `ranked` | `Boolean` | If this type should be ranked |
| `registry_type` | `String` | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | If populated, the integrations required for this type |
| `schema` | `Hash` |  |
| `source_repo_url` | `String` | The url of the external repository where this type is managed |
| `type_name` | `String` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `String` | When this type was last updated |
| `use_name_as_identifier` | `Boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `Integer` |  |

#### Example: Create

```ruby
catalog_type_schema = client.CatalogTypeSchema.create({
  "catalog_type_id" => "example_catalog_type_id", # String
  "attributes" => [], # Array
  "version" => 1, # Integer
})
```


### CatalogV3

Create an instance: `catalog_v3 = client.CatalogV3`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `String` | The unique identifier of the catalog type containing the entries |
| `entries` | `Array` | A list of entries to update with their new values. |
| `update_attributes` | `Array` | Optional list of specific attribute IDs to update across all entries. |

#### Example: Create

```ruby
catalog_v3 = client.CatalogV3.create({
  "catalog_type_id" => "example_catalog_type_id", # String
  "entries" => [], # Array
})
```


### CustomField

Create an instance: `custom_field = client.CustomField`

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
| `catalog_type_id` | `String` | For catalog fields, the ID of the associated catalog type |
| `created_at` | `String` | When the action was created |
| `description` | `String` | Description of the custom field |
| `field_type` | `String` | Type of custom field |
| `filter_by` | `Hash` |  |
| `fixed_filter` | `Hash` |  |
| `group_by_catalog_attribute_id` | `String` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `String` | Which catalog attribute provides helptext for the options |
| `id` | `String` | Unique identifier for the custom field |
| `name` | `String` | Human readable name for the custom field |
| `updated_at` | `String` | When the action was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomField record (raises on error).
custom_field = client.CustomField.load({ "id" => "custom_field_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomField entities, one per record (raises on error).
custom_fields = client.CustomField.list
custom_fields.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
custom_field = client.CustomField.create({
  "description" => "example_description", # String
  "field_type" => "example_field_type", # String
  "filter_by" => {}, # Hash
  "fixed_filter" => {}, # Hash
  "name" => "example_name", # String
})
```


### CustomFieldOption

Create an instance: `custom_field_option = client.CustomFieldOption`

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
| `custom_field_id` | `String` | ID of the custom field this option belongs to |
| `id` | `String` | Unique identifier for the custom field option |
| `sort_key` | `Integer` | Sort key used to order the custom field options correctly |
| `value` | `String` | Human readable name for the custom field option. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the CustomFieldOption record (raises on error).
custom_field_option = client.CustomFieldOption.load({ "id" => "custom_field_option_id" })
```

#### Example: List

```ruby
# list returns an Array of CustomFieldOption entities, one per record (raises on error).
custom_field_options = client.CustomFieldOption.list({ "custom_field_id" => "example" })
custom_field_options.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
custom_field_option = client.CustomFieldOption.create({
  "custom_field_id" => "example_custom_field_id", # String
  "value" => "example_value", # String
})
```


### Escalation

Create an instance: `escalation = client.Escalation`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | When this escalation was created |
| `creator` | `Hash` | The creator of this escalation. |
| `description` | `String` | Additional detail provided with this escalation. |
| `escalation_path_id` | `String` | Unique identifier of the escalation path that the escalation was created from |
| `events` | `Array` | Events which describe the history of this escalation. |
| `id` | `String` | Unique ID of the escalation |
| `idempotency_key` | `String` | Unique key to prevent duplicate escalations. |
| `incident_id` | `String` | ID of an incident to associate with this escalation. |
| `priority` | `Hash` | The priority associated with this escalation. |
| `related_alerts` | `Array` | Alerts related to this escalation |
| `related_incidents` | `Array` | Incidents related to this escalation |
| `status` | `String` | Status of the escalation |
| `title` | `String` | The title of this escalation |
| `updated_at` | `String` | When this escalation was last updated |
| `user_ids` | `Array` | IDs of users to escalate directly to |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Escalation record (raises on error).
escalation = client.Escalation.load({ "id" => "escalation_id" })
```

#### Example: List

```ruby
# list returns an Array of Escalation entities, one per record (raises on error).
escalations = client.Escalation.list
escalations.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
escalation = client.Escalation.create({
  "idempotency_key" => "example_idempotency_key", # String
  "title" => "example_title", # String
})
```


### EscalationPath

Create an instance: `escalation_path = client.EscalationPath`

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
| `current_responders` | `Array` | Users who are currently on-call for this escalation path |
| `id` | `String` | Unique identifier for this escalation path. |
| `kind` | `String` | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | `String` | The name of this escalation path, for the user's reference. |
| `param_bindings` | `Hash` | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | `Array` | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` | `Hash` |  |
| `team_ids` | `Array` | IDs of the teams that own this escalation path. |
| `template_id` | `String` | For a templated path, the template it is built from. |
| `working_hours` | `Array` | The working hours for this escalation path. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EscalationPath record (raises on error).
escalation_path = client.EscalationPath.load({ "id" => "escalation_path_id" })
```

#### Example: List

```ruby
# list returns an Array of EscalationPath entities, one per record (raises on error).
escalation_paths = client.EscalationPath.list
escalation_paths.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
escalation_path = client.EscalationPath.create({
  "name" => "example_name", # String
  "path" => [], # Array
  "repeat_config" => {}, # Hash
})
```


### EscalationPathTemplate

Create an instance: `escalation_path_template = client.EscalationPathTemplate`

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
| `description` | `String` | A description of what this template is for. |
| `expressions` | `Array` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `Boolean` | Whether a previous escalation path version uses this template. |
| `id` | `String` | Unique identifier for this template. |
| `name` | `String` | The name of this template. |
| `params` | `Array` | The parameters declared by this template. |
| `path` | `Array` | The nodes that form the levels and branches of this template. |
| `repeat_config` | `Hash` |  |
| `working_hours` | `Array` | The working hours for this template. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the EscalationPathTemplate record (raises on error).
escalation_path_template = client.EscalationPathTemplate.load({ "id" => "escalation_path_template_id" })
```

#### Example: List

```ruby
# list returns an Array of EscalationPathTemplate entities, one per record (raises on error).
escalation_path_templates = client.EscalationPathTemplate.list
escalation_path_templates.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
escalation_path_template = client.EscalationPathTemplate.create({
  "name" => "example_name", # String
  "path" => [], # Array
  "repeat_config" => {}, # Hash
})
```


### EscalationsCheckEscalationPermissionsResultV2

Create an instance: `escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `response_options` | `Array` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `Array` | The IDs of the users to check response options for |

#### Example: Create

```ruby
escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2.create({
  "escalation_id" => "example_escalation_id", # String
  "user_ids" => [], # Array
})
```


### EscalationsReassignEscalationResultV2

Create an instance: `escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | Additional details about the new escalation. |
| `escalation_path_id` | `String` | ID of the escalation path to reassign to |
| `resolve_original` | `Boolean` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `String` | The title of the new escalation. |
| `user_ids` | `Array` | IDs of users to reassign directly to |

#### Example: Create

```ruby
escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2.create({
  "escalation_id" => "example_escalation_id", # String
})
```


### FollowUp

Create an instance: `follow_up = client.FollowUp`

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
| `assignee` | `Hash` |  |
| `assignee_id` | `String` | ID of the user this follow-up is assigned to |
| `assignee_team` | `Hash` |  |
| `assignee_team_id` | `String` | ID of the team this follow-up is assigned to |
| `category` | `Hash` |  |
| `completed_at` | `String` | When the follow-up was completed |
| `created_at` | `String` | When the follow-up was created |
| `creator` | `Hash` |  |
| `description` | `String` | Description of the follow-up |
| `external_issue_reference` | `Hash` |  |
| `external_issue_reference_id` | `String` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `String` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `String` | ID of the priority for this follow-up |
| `id` | `String` | Unique identifier for the follow-up |
| `incident_id` | `String` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Labels associated with this follow-up |
| `priority` | `Hash` |  |
| `status` | `String` | Status of the follow-up |
| `title` | `String` | Title of the follow-up |
| `updated_at` | `String` | When the follow-up was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the FollowUp record (raises on error).
follow_up = client.FollowUp.load({ "id" => "follow_up_id" })
```

#### Example: List

```ruby
# list returns an Array of FollowUp entities, one per record (raises on error).
follow_ups = client.FollowUp.list
follow_ups.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
follow_up = client.FollowUp.create({
  "incident_id" => "example_incident_id", # String
  "title" => "example_title", # String
})
```


### FollowUpsConnectExternalIssueResultV2

Create an instance: `follow_ups_connect_external_issue_result_v2 = client.FollowUpsConnectExternalIssueResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `Hash` |  |
| `assignee_team` | `Hash` |  |
| `completed_at` | `String` | When the follow-up was completed |
| `created_at` | `String` | When the follow-up was created |
| `creator` | `Hash` |  |
| `description` | `String` | Description of the follow-up |
| `external_issue_reference` | `Hash` |  |
| `id` | `String` | Unique identifier for the follow-up |
| `incident_id` | `String` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Labels associated with this follow-up |
| `priority` | `Hash` |  |
| `provider` | `String` | The issue tracker provider the issue belongs to |
| `status` | `String` | Status of the follow-up |
| `title` | `String` | Title of the follow-up |
| `updated_at` | `String` | When the follow-up was last updated |
| `url` | `String` | URL of the issue in the external provider |

#### Example: Create

```ruby
follow_ups_connect_external_issue_result_v2 = client.FollowUpsConnectExternalIssueResultV2.create({
  "follow_up_id" => "example_follow_up_id", # String
  "provider" => "example_provider", # String
  "url" => "example_url", # String
})
```


### FollowUpsConnectExternalIssueResultV3

Create an instance: `follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `Hash` |  |
| `assignee_team` | `Hash` |  |
| `category` | `Hash` |  |
| `completed_at` | `String` | When the follow-up was completed |
| `created_at` | `String` | When the follow-up was created |
| `creator` | `Hash` |  |
| `description` | `String` | Description of the follow-up |
| `external_issue_reference` | `Hash` |  |
| `id` | `String` | Unique identifier for the follow-up |
| `incident_id` | `String` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Labels associated with this follow-up |
| `priority` | `Hash` |  |
| `provider` | `String` | The issue tracker provider the issue belongs to |
| `status` | `String` | Status of the follow-up |
| `title` | `String` | Title of the follow-up |
| `updated_at` | `String` | When the follow-up was last updated |
| `url` | `String` | URL of the issue in the external provider |

#### Example: Create

```ruby
follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3.create({
  "follow_up_id" => "example_follow_up_id", # String
  "provider" => "example_provider", # String
  "url" => "example_url", # String
})
```


### FollowUpsCreateFromLinkResultV3

Create an instance: `follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `String` | Unique identifier of the incident the follow-up belongs to |
| `url` | `String` | URL of the issue in the external provider |

#### Example: Create

```ruby
follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3.create({
  "incident_id" => "example_incident_id", # String
  "url" => "example_url", # String
})
```


### HeartbeatV2

Create an instance: `heartbeat_v2 = client.HeartbeatV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the HeartbeatV2 record (raises on error).
heartbeat_v2 = client.HeartbeatV2.load({ "id" => "heartbeat_v2_id" })
```

#### Example: Create

```ruby
heartbeat_v2 = client.HeartbeatV2.create({
  "id" => "example_id", # String
})
```


### Identity

Create an instance: `identity = client.Identity`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dashboard_url` | `String` | The dashboard URL for this organisation |
| `name` | `String` | The name assigned to the current API Key |
| `roles` | `Array` | Which roles have been enabled for this key |
| `team_roles` | `Array` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `Array` | Teams that this API key is scoped to. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Identity record (raises on error).
identity = client.Identity.load()
```


### Incident

Create an instance: `incident = client.Incident`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `call_url` | `String` | The call URL attached to this incident |
| `created_at` | `String` | When the incident was created |
| `creator` | `Hash` |  |
| `custom_field_entries` | `Array` | Custom field entries for this incident |
| `debriefs` | `Array` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `Array` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `Hash` |  |
| `has_debrief` | `Boolean` | If this incident has a debrief attached |
| `id` | `String` | Unique identifier for the incident |
| `idempotency_key` | `String` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `Array` | A list of who is assigned to each role for this incident |
| `incident_status` | `Hash` |  |
| `incident_status_id` | `String` | Incident status to assign to the incident |
| `incident_timestamp_values` | `Array` | Incident lifecycle events and when they occurred |
| `incident_type` | `Hash` |  |
| `incident_type_id` | `String` | Incident type to create this incident as |
| `last_activity_at` | `String` | When the incident last recorded 'activity' |
| `mode` | `String` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `String` | URL to link to the Microsoft Teams channel |
| `name` | `String` | Explanation of the incident |
| `permalink` | `String` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `Array` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `String` | The URL of the incident post-mortem document |
| `reference` | `String` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `Hash` |  |
| `severity` | `Hash` |  |
| `severity_id` | `String` | Severity to create incident as |
| `slack_channel_id` | `String` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `String` | Name of the slack channel |
| `slack_channel_name_override` | `String` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `String` | URL to link to the slack channel |
| `slack_team_id` | `String` | ID of the Slack team / workspace. |
| `summary` | `String` | Detailed description of the incident |
| `team_ids` | `Array` | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | `String` | When the incident was last updated |
| `visibility` | `String` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `Float` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `Float` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `Float` | Amount of time spent on the incident in total |
| `workload_minutes_working` | `Float` | Amount of time spent on the incident in working hours |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Incident record (raises on error).
incident = client.Incident.load({ "id" => "incident_id" })
```

#### Example: List

```ruby
# list returns an Array of Incident entities, one per record (raises on error).
incidents = client.Incident.list
incidents.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident = client.Incident.create({
  "idempotency_key" => "example_idempotency_key", # String
  "visibility" => "example_visibility", # String
})
```


### IncidentActivityLogEntry

Create an instance: `incident_activity_log_entry = client.IncidentActivityLogEntry`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Hash` | Details of an activity log entry. |
| `created_at` | `String` | When we recorded the activity |
| `id` | `String` | Unique identifier of the activity log entry |
| `incident_id` | `String` | ID of the incident this happened on. |
| `occurred_at` | `String` | When the activity happened. |
| `title` | `String` | Human-readable summary of what happened |
| `type` | `String` | What kind of activity this is. |

#### Example: List

```ruby
# list returns an Array of IncidentActivityLogEntry entities, one per record (raises on error).
incident_activity_log_entrys = client.IncidentActivityLogEntry.list({ "incident_id" => "example" })
incident_activity_log_entrys.each { |item| puts item.data_get }
```


### IncidentAttachment

Create an instance: `incident_attachment = client.IncidentAttachment`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | Unique identifier of this incident membership |
| `incident_id` | `String` | ID of the incident to add an attachment to |
| `resource` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of IncidentAttachment entities, one per record (raises on error).
incident_attachments = client.IncidentAttachment.list
incident_attachments.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_attachment = client.IncidentAttachment.create({
  "incident_id" => "example_incident_id", # String
  "resource" => {}, # Hash
})
```


### IncidentForm

Create an instance: `incident_form = client.IncidentForm`

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
| `created_at` | `String` | When this incident form was created |
| `expressions` | `Array` | Expressions available to every element's conditions and defaults. |
| `form_type` | `String` | Which form this is. |
| `id` | `String` | Unique identifier for this incident form |
| `incident_type_id` | `String` | The incident type this form belongs to. |
| `lifecycle_elements` | `Array` | Elements on this form, in display order. |
| `updated_at` | `String` | When this incident form was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentForm record (raises on error).
incident_form = client.IncidentForm.load({ "id" => "incident_form_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentForm entities, one per record (raises on error).
incident_forms = client.IncidentForm.list
incident_forms.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_form = client.IncidentForm.create({
  "expressions" => [], # Array
  "form_type" => "example_form_type", # String
})
```


### IncidentMembership

Create an instance: `incident_membership = client.IncidentMembership`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `String` | The incident to make the user a member of |
| `user_id` | `String` |  |

#### Example: Create

```ruby
incident_membership = client.IncidentMembership.create({
  "incident_id" => "example_incident_id", # String
  "user_id" => "example_user_id", # String
})
```


### IncidentMembershipsV1

Create an instance: `incident_memberships_v1 = client.IncidentMembershipsV1`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `String` | Revoke memberships to incident |
| `user_id` | `String` |  |

#### Example: Create

```ruby
incident_memberships_v1 = client.IncidentMembershipsV1.create({
  "incident_id" => "example_incident_id", # String
  "user_id" => "example_user_id", # String
})
```


### IncidentParticipant

Create an instance: `incident_participant = client.IncidentParticipant`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Array` | Participants who are actively helping with the incident |
| `passive` | `Array` | Participants who are just observing the incident |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentParticipant record (raises on error).
incident_participant = client.IncidentParticipant.load({ "incident_id" => "incident_id" })
```


### IncidentParticipantWorkload

Create an instance: `incident_participant_workload = client.IncidentParticipantWorkload`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `String` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `String` | The role they had in the incident |
| `user` | `Hash` |  |
| `workload` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of IncidentParticipantWorkload entities, one per record (raises on error).
incident_participant_workloads = client.IncidentParticipantWorkload.list({ "incident_id" => "example" })
incident_participant_workloads.each { |item| puts item.data_get }
```


### IncidentRelationship

Create an instance: `incident_relationship = client.IncidentRelationship`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | Unique identifier of this incident relationship |
| `incident` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of IncidentRelationship entities, one per record (raises on error).
incident_relationships = client.IncidentRelationship.list({ "incident_id" => "example" })
incident_relationships.each { |item| puts item.data_get }
```


### IncidentRole

Create an instance: `incident_role = client.IncidentRole`

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
| `created_at` | `String` | When the role was created |
| `description` | `String` | Describes the purpose of the role |
| `id` | `String` | Unique identifier for the role |
| `instructions` | `String` | Provided to whoever is nominated for the role. |
| `name` | `String` | Human readable name of the incident role |
| `role_type` | `String` | Type of incident role |
| `shortform` | `String` | Short human readable name for Slack. |
| `updated_at` | `String` | When the role was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentRole record (raises on error).
incident_role = client.IncidentRole.load({ "id" => "incident_role_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentRole entities, one per record (raises on error).
incident_roles = client.IncidentRole.list
incident_roles.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_role = client.IncidentRole.create({
  "description" => "example_description", # String
  "instructions" => "example_instructions", # String
  "name" => "example_name", # String
  "shortform" => "example_shortform", # String
})
```


### IncidentStatus

Create an instance: `incident_status = client.IncidentStatus`

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
| `category` | `String` | What category of status it is. |
| `created_at` | `String` |  |
| `description` | `String` | Rich text description of the incident status |
| `id` | `String` | Unique ID of this incident status |
| `name` | `String` | Unique name of this status |
| `rank` | `Integer` | Order of this incident status |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentStatus record (raises on error).
incident_status = client.IncidentStatus.load({ "id" => "incident_status_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentStatus entities, one per record (raises on error).
incident_statuss = client.IncidentStatus.list
incident_statuss.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_status = client.IncidentStatus.create({
  "category" => "example_category", # String
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```


### IncidentTeamMembership

Create an instance: `incident_team_membership = client.IncidentTeamMembership`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `String` |  |
| `team_id` | `String` |  |

#### Example: Create

```ruby
incident_team_membership = client.IncidentTeamMembership.create({
  "incident_id" => "example_incident_id", # String
  "team_id" => "example_team_id", # String
})
```


### IncidentTeamMembershipsV1

Create an instance: `incident_team_memberships_v1 = client.IncidentTeamMembershipsV1`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `String` | Revoke team access to this incident |
| `team_id` | `String` |  |

#### Example: Create

```ruby
incident_team_memberships_v1 = client.IncidentTeamMembershipsV1.create({
  "incident_id" => "example_incident_id", # String
  "team_id" => "example_team_id", # String
})
```


### IncidentTemplate

Create an instance: `incident_template = client.IncidentTemplate`

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
| `created_at` | `String` | When this incident template was created |
| `expressions` | `Array` | The expressions used by bindings in this template |
| `id` | `String` | Unique identifier for this incident template |
| `name` | `String` | The name of this incident template, for the user's reference |
| `template` | `Hash` | The values an incident template applies to the incidents it creates. |
| `updated_at` | `String` | When this incident template was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentTemplate record (raises on error).
incident_template = client.IncidentTemplate.load({ "id" => "incident_template_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentTemplate entities, one per record (raises on error).
incident_templates = client.IncidentTemplate.list
incident_templates.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_template = client.IncidentTemplate.create({
  "name" => "example_name", # String
  "template" => {}, # Hash
})
```


### IncidentTemplatesValidateResultV1

Create an instance: `incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expressions` | `Array` | The expressions used by bindings in this template |
| `name` | `String` | The name of this incident template, for the user's reference |
| `template` | `Hash` | The values an incident template applies to the incidents it creates. |
| `warnings` | `Array` | Anything suspect about this config that isn't severe enough to reject it. |

#### Example: Create

```ruby
incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1.create({
  "name" => "example_name", # String
  "template" => {}, # Hash
})
```


### IncidentTimelineItem

Create an instance: `incident_timeline_item = client.IncidentTimelineItem`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_log_id` | `String` | ID of the activity log entry this item was promoted from. |
| `created_at` | `String` | When this item was added to the timeline |
| `creator` | `Hash` |  |
| `description` | `String` | Description of the timeline item, in markdown |
| `id` | `String` | Unique identifier of the timeline item |
| `idempotency_key` | `String` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `String` | Incident to add this item to |
| `timestamp` | `String` | When the thing this item describes happened. |
| `title` | `String` | Title of the timeline item |
| `updated_at` | `String` | When this item was last edited |

#### Example: List

```ruby
# list returns an Array of IncidentTimelineItem entities, one per record (raises on error).
incident_timeline_items = client.IncidentTimelineItem.list({ "incident_id" => "example" })
incident_timeline_items.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_timeline_item = client.IncidentTimelineItem.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_id" => "example_incident_id", # String
  "timestamp" => "example_timestamp", # String
  "title" => "example_title", # String
})
```


### IncidentTimestamp

Create an instance: `incident_timestamp = client.IncidentTimestamp`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | Unique ID of this incident timestamp |
| `name` | `String` | Unique name of this timestamp |
| `rank` | `Integer` | Order in which this timestamp should be shown |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentTimestamp record (raises on error).
incident_timestamp = client.IncidentTimestamp.load({ "id" => "incident_timestamp_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentTimestamp entities, one per record (raises on error).
incident_timestamps = client.IncidentTimestamp.list
incident_timestamps.each { |item| puts item.data_get }
```


### IncidentType

Create an instance: `incident_type = client.IncidentType`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_in_triage` | `String` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `String` | When this resource was created |
| `description` | `String` | What is this incident type for? |
| `id` | `String` | Unique identifier for this Incident Type |
| `is_default` | `Boolean` | The default Incident Type is used when no other type is explicitly specified |
| `name` | `String` | The name of this Incident Type |
| `owning_team_ids` | `Array` | IDs of the teams that own this incident type |
| `private_incidents_only` | `Boolean` | Should all incidents created with this Incident Type be private? |
| `updated_at` | `String` | When this resource was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IncidentType record (raises on error).
incident_type = client.IncidentType.load({ "id" => "incident_type_id" })
```

#### Example: List

```ruby
# list returns an Array of IncidentType entities, one per record (raises on error).
incident_types = client.IncidentType.list
incident_types.each { |item| puts item.data_get }
```


### IncidentUpdate

Create an instance: `incident_update = client.IncidentUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | When the update was created |
| `id` | `String` | Unique identifier for this incident update |
| `idempotency_key` | `String` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `String` | The incident you want to update |
| `merged_into_incident_id` | `String` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `String` | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `Hash` |  |
| `new_severity` | `Hash` |  |
| `to_incident_status_id` | `String` | Move the incident to this status |
| `to_severity_id` | `String` | Move the incident to this severity |
| `updater` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of IncidentUpdate entities, one per record (raises on error).
incident_updates = client.IncidentUpdate.list
incident_updates.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
incident_update = client.IncidentUpdate.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_id" => "example_incident_id", # String
})
```


### IncidentsImportPostmortemDocumentResultV2

Create an instance: `incidents_import_postmortem_document_result_v2 = client.IncidentsImportPostmortemDocumentResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `String` | The document content as GitHub-Flavored Markdown |
| `title` | `String` | Title of the postmortem document |

#### Example: Create

```ruby
incidents_import_postmortem_document_result_v2 = client.IncidentsImportPostmortemDocumentResultV2.create({
  "incident_id" => "example_incident_id", # String
  "content" => "example_content", # String
  "title" => "example_title", # String
})
```


### IpAllowlist

Create an instance: `ip_allowlist = client.IpAllowlist`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `Array` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `Boolean` | Whether this IP allowlist is enabled or not |
| `updated_at` | `String` | The time this allowlist was last updated |
| `version` | `Integer` | The version of this IP allowlist |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the IpAllowlist record (raises on error).
ip_allowlist = client.IpAllowlist.load()
```


### IpRange

Create an instance: `ip_range = client.IpRange`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `String` | The address in CIDR notation. |
| `description` | `String` | Which of our traffic reaches you from this address |

#### Example: List

```ruby
# list returns an Array of IpRange entities, one per record (raises on error).
ip_ranges = client.IpRange.list
ip_ranges.each { |item| puts item.data_get }
```


### MaintenanceWindow

Create an instance: `maintenance_window = client.MaintenanceWindow`

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
| `alert_condition_groups` | `Array` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `String` | When this maintenance window was archived, if it has been |
| `created_at` | `String` | When this maintenance window was created |
| `end_at` | `String` | When the maintenance window ends |
| `escalation_targets` | `Array` | If set, alerts matching this window will be escalated to these targets |
| `id` | `String` | Unique identifier for this maintenance window |
| `incident_id` | `String` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `Hash` |  |
| `name` | `String` | Human readable name for the maintenance window |
| `notification_message` | `String` | Custom message included in notifications about this maintenance window |
| `notify_channels` | `Array` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `Integer` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `Integer` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `Array` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `Boolean` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `Boolean` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `Boolean` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `String` | When the maintenance window starts |
| `updated_at` | `String` | When this maintenance window was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the MaintenanceWindow record (raises on error).
maintenance_window = client.MaintenanceWindow.load({ "id" => "maintenance_window_id" })
```

#### Example: List

```ruby
# list returns an Array of MaintenanceWindow entities, one per record (raises on error).
maintenance_windows = client.MaintenanceWindow.list
maintenance_windows.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
maintenance_window = client.MaintenanceWindow.create({
  "alert_condition_groups" => [], # Array
  "end_at" => "example_end_at", # String
  "lead" => {}, # Hash
  "name" => "example_name", # String
  "show_in_sidebar" => true, # Boolean
  "start_at" => "example_start_at", # String
})
```


### ManagedResource

Create an instance: `managed_resource = client.ManagedResource`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `Hash` | Annotations that track metadata about this resource |
| `managed_by` | `String` | How is this resource managed |
| `resource_id` | `String` | The ID of the resource that this relates to |
| `resource_type` | `String` | The type of the related resource |
| `source_url` | `String` | The url of the external repository where this resource is managed (if there is one) |

#### Example: Create

```ruby
managed_resource = client.ManagedResource.create({
  "annotations" => {}, # Hash
  "resource_id" => "example_resource_id", # String
  "resource_type" => "example_resource_type", # String
})
```


### OnCallNotificationMethodPublicV2

Create an instance: `on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `String` | The address of this method (e.g. |
| `id` | `String` | Unique identifier for this notification method |
| `is_usable` | `Boolean` | Whether this method is ready to receive notifications. |
| `method_type` | `String` | The high-level type of notification method. |
| `phone_details` | `Hash` |  |

#### Example: List

```ruby
# list returns an Array of OnCallNotificationMethodPublicV2 entities, one per record (raises on error).
on_call_notification_method_public_v2s = client.OnCallNotificationMethodPublicV2.list({ "user_id" => "example" })
on_call_notification_method_public_v2s.each { |item| puts item.data_get }
```


### OnCallNotificationPause

Create an instance: `on_call_notification_pause = client.OnCallNotificationPause`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `ends_at` | `String` | When notifications resume |
| `id` | `String` | Unique identifier for this notification pause |
| `reason` | `String` | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | `String` | When notifications stop being sent to the user |
| `updated_at` | `String` |  |
| `user_id` | `String` | The user whose on-call notifications are paused in this time window |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the OnCallNotificationPause record (raises on error).
on_call_notification_pause = client.OnCallNotificationPause.load({ "id" => "on_call_notification_pause_id" })
```

#### Example: List

```ruby
# list returns an Array of OnCallNotificationPause entities, one per record (raises on error).
on_call_notification_pauses = client.OnCallNotificationPause.list
on_call_notification_pauses.each { |item| puts item.data_get }
```


### OnCallNotificationRulePublicV2

Create an instance: `on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Hash` |  |
| `delay_seconds` | `Integer` | Delay in seconds before this rule activates. |
| `id` | `String` | Unique identifier for this notification rule |
| `method_target` | `Hash` |  |
| `method_type` | `String` | The high-level type of notification method. |
| `phone` | `Hash` |  |
| `rule_type` | `String` | The urgency level this rule applies to |

#### Example: List

```ruby
# list returns an Array of OnCallNotificationRulePublicV2 entities, one per record (raises on error).
on_call_notification_rule_public_v2s = client.OnCallNotificationRulePublicV2.list({ "user_id" => "example" })
on_call_notification_rule_public_v2s.each { |item| puts item.data_get }
```


### PayConfig

Create an instance: `pay_config = client.PayConfig`

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
| `base_rate_cents` | `Integer` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `String` |  |
| `currency` | `String` | Currency this config pays in, in ISO 4217 format |
| `id` | `String` | Unique identifier for this pay config |
| `name` | `String` | Human readable name for this pay config |
| `one_off_rules` | `Array` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `String` | When a published report first priced against this config. |
| `rate_time_unit` | `String` | The unit of time every rate on this config is quoted per. |
| `timezone` | `String` | IANA timezone this config's rules are interpreted in |
| `updated_at` | `String` |  |
| `weekly_rules` | `Array` | Rules that apply every week, by day of week and time of day, in evaluation order |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PayConfig record (raises on error).
pay_config = client.PayConfig.load({ "id" => "pay_config_id" })
```

#### Example: List

```ruby
# list returns an Array of PayConfig entities, one per record (raises on error).
pay_configs = client.PayConfig.list
pay_configs.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
pay_config = client.PayConfig.create({
  "base_rate_cents" => 1, # Integer
  "currency" => "example_currency", # String
  "name" => "example_name", # String
  "rate_time_unit" => "example_rate_time_unit", # String
  "timezone" => "example_timezone", # String
})
```


### PayConfigOneOffRule

Create an instance: `pay_config_one_off_rule = client.PayConfigOneOffRule`

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
| `end_at` | `String` | When this rule stops applying |
| `id` | `String` | Unique identifier for this rule, stable across edits to the config |
| `name` | `String` | Human readable name for this rule |
| `rate_cents` | `Integer` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `String` | When this rule starts applying |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PayConfigOneOffRule record (raises on error).
pay_config_one_off_rule = client.PayConfigOneOffRule.load({ "id" => "pay_config_one_off_rule_id", "pay_config_id" => "pay_config_id" })
```

#### Example: List

```ruby
# list returns an Array of PayConfigOneOffRule entities, one per record (raises on error).
pay_config_one_off_rules = client.PayConfigOneOffRule.list({ "id" => "example" })
pay_config_one_off_rules.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
pay_config_one_off_rule = client.PayConfigOneOffRule.create({
  "id" => "example_id", # String
  "end_at" => "example_end_at", # String
  "name" => "example_name", # String
  "rate_cents" => 1, # Integer
  "start_at" => "example_start_at", # String
})
```


### PayConfigWeeklyRule

Create an instance: `pay_config_weekly_rule = client.PayConfigWeeklyRule`

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
| `end_time` | `String` | Time of day this rule ends, in 24 hour format. |
| `id` | `String` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `Integer` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `String` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Days of the week this rule applies on |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PayConfigWeeklyRule record (raises on error).
pay_config_weekly_rule = client.PayConfigWeeklyRule.load({ "id" => "pay_config_weekly_rule_id", "pay_config_id" => "pay_config_id" })
```

#### Example: List

```ruby
# list returns an Array of PayConfigWeeklyRule entities, one per record (raises on error).
pay_config_weekly_rules = client.PayConfigWeeklyRule.list({ "id" => "example" })
pay_config_weekly_rules.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
pay_config_weekly_rule = client.PayConfigWeeklyRule.create({
  "id" => "example_id", # String
  "end_time" => "example_end_time", # String
  "rate_cents" => 1, # Integer
  "start_time" => "example_start_time", # String
  "weekdays" => [], # Array
})
```


### PayReport

Create an instance: `pay_report = client.PayReport`

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
| `created_at` | `String` | When this report was created |
| `creator` | `Hash` |  |
| `end_date` | `String` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | Why a report could not be generated |
| `error_message` | `String` | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Unique identifier for this pay report |
| `name` | `String` | Human readable name for this report |
| `overlapping_shifts` | `String` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `Hash` |  |
| `pay_config_id` | `String` | The pay config to price every shift with. |
| `published_at` | `String` | When this report was published. |
| `rotation_filters` | `Array` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `start_date` | `String` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `String` | When this report was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PayReport record (raises on error).
pay_report = client.PayReport.load({ "id" => "pay_report_id" })
```

#### Example: List

```ruby
# list returns an Array of PayReport entities, one per record (raises on error).
pay_reports = client.PayReport.list
pay_reports.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
pay_report = client.PayReport.create({
  "end_date" => "example_end_date", # String
  "name" => "example_name", # String
  "pay_config_expression" => {}, # Hash
  "schedule_ids" => [], # Array
  "start_date" => "example_start_date", # String
})
```


### PayReportsPublishResultV2

Create an instance: `pay_reports_publish_result_v2 = client.PayReportsPublishResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cc_emails` | `Array` | Email addresses to send a copy of the report to |
| `created_at` | `String` | When this report was created |
| `creator` | `Hash` |  |
| `end_date` | `String` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | Why a report could not be generated |
| `error_message` | `String` | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Unique identifier for this pay report |
| `name` | `String` | Human readable name for this report |
| `overlapping_shifts` | `String` | How time spent on more than one schedule at once was paid |
| `published_at` | `String` | When this report was published. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `send_user_breakdowns` | `String` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `String` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `String` | When this report was last updated |

#### Example: Create

```ruby
pay_reports_publish_result_v2 = client.PayReportsPublishResultV2.create({
  "pay_report_id" => "example_pay_report_id", # String
  "cc_emails" => [], # Array
  "send_user_breakdowns" => "example_send_user_breakdowns", # String
})
```


### PayReportsUnpublishResultV2

Create an instance: `pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | When this report was created |
| `creator` | `Hash` |  |
| `end_date` | `String` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `String` | Why a report could not be generated |
| `error_message` | `String` | What went wrong, written for whoever asked for the report. |
| `id` | `String` | Unique identifier for this pay report |
| `name` | `String` | Human readable name for this report |
| `overlapping_shifts` | `String` | How time spent on more than one schedule at once was paid |
| `published_at` | `String` | When this report was published. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `start_date` | `String` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `String` | How far a report has got through being generated |
| `total_duration_seconds` | `Integer` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Hash` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `String` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `String` | Why this report is being unpublished |
| `updated_at` | `String` | When this report was last updated |

#### Example: Create

```ruby
pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2.create({
  "pay_report_id" => "example_pay_report_id", # String
  "unpublish_reason" => "example_unpublish_reason", # String
})
```


### PayReportsV2

Create an instance: `pay_reports_v2 = client.PayReportsV2`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PayReportsV2 record (raises on error).
pay_reports_v2 = client.PayReportsV2.load({ "pay_report_id" => "pay_report_id" })
```


### Policy

Create an instance: `policy = client.Policy`

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
| `assignment_rules` | `Hash` |  |
| `conditions` | `Array` | Conditions which determine which resources are in scope for this policy |
| `created_at` | `String` |  |
| `debrief` | `Hash` | Set when policy_type is debrief. |
| `description` | `String` | Human readable description of the policy |
| `expressions` | `Array` | The expressions relating to this policy |
| `follow_up` | `Hash` | Set when policy_type is follow_up. |
| `id` | `String` | Unique ID of the policy |
| `name` | `String` | Human readable name of the policy |
| `on_call_readiness` | `Hash` | Set when policy_type is on_call_readiness. |
| `policy_type` | `String` | Type of the policy, specifying what this applies to |
| `post_mortem` | `Hash` | Set when policy_type is post_mortem. |
| `schedule` | `Hash` | Detects gaps in on-call coverage. |
| `status` | `String` | Disabled policies stop evaluating but keep their config |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Policy record (raises on error).
policy = client.Policy.load({ "id" => "policy_id" })
```

#### Example: List

```ruby
# list returns an Array of Policy entities, one per record (raises on error).
policys = client.Policy.list
policys.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
policy = client.Policy.create({
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


### PolicyFinding

Create an instance: `policy_finding = client.PolicyFinding`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `days` | `Integer` | Days outside the policy's due date |
| `debrief` | `Hash` | Set when policy_type is debrief. |
| `dismissal` | `Hash` |  |
| `due_at` | `String` | When this finding becomes overdue |
| `follow_up` | `Hash` | Set when policy_type is follow_up. |
| `id` | `String` | Unique ID of the finding |
| `last_checked_at` | `String` | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | The policy this finding was raised against |
| `policy_type` | `String` | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Hash` | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Set when policy_type is shift_conflict. |
| `state` | `String` | Where this finding is in its lifecycle |
| `updated_at` | `String` |  |
| `vacation_conflict` | `Hash` | Set when policy_type is vacation_conflict. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PolicyFinding record (raises on error).
policy_finding = client.PolicyFinding.load({ "id" => "policy_finding_id" })
```

#### Example: List

```ruby
# list returns an Array of PolicyFinding entities, one per record (raises on error).
policy_findings = client.PolicyFinding.list
policy_findings.each { |item| puts item.data_get }
```


### PolicyFindingsDismissResultV2

Create an instance: `policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `days` | `Integer` | Days outside the policy's due date |
| `debrief` | `Hash` | Set when policy_type is debrief. |
| `dismissal` | `Hash` |  |
| `due_at` | `String` | When this finding becomes overdue |
| `follow_up` | `Hash` | Set when policy_type is follow_up. |
| `id` | `String` | Unique ID of the finding |
| `last_checked_at` | `String` | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | The policy this finding was raised against |
| `policy_type` | `String` | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Set when policy_type is post_mortem. |
| `reason` | `String` | Why this finding is being dismissed |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Hash` | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Set when policy_type is shift_conflict. |
| `state` | `String` | Where this finding is in its lifecycle |
| `updated_at` | `String` |  |
| `vacation_conflict` | `Hash` | Set when policy_type is vacation_conflict. |

#### Example: Create

```ruby
policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2.create({
  "policy_finding_id" => "example_policy_finding_id", # String
  "reason" => "example_reason", # String
})
```


### PolicyFindingsRestoreResultV2

Create an instance: `policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` |  |
| `days` | `Integer` | Days outside the policy's due date |
| `debrief` | `Hash` | Set when policy_type is debrief. |
| `dismissal` | `Hash` |  |
| `due_at` | `String` | When this finding becomes overdue |
| `follow_up` | `Hash` | Set when policy_type is follow_up. |
| `id` | `String` | Unique ID of the finding |
| `last_checked_at` | `String` | When this finding was last re-evaluated |
| `on_call_readiness` | `Hash` | Set when policy_type is on_call_readiness. |
| `policy_id` | `String` | The policy this finding was raised against |
| `policy_type` | `String` | Type of the policy this finding was raised against |
| `post_mortem` | `Hash` | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Hash` | Set when policy_type is schedule. |
| `shift_conflict` | `Hash` | Set when policy_type is shift_conflict. |
| `state` | `String` | Where this finding is in its lifecycle |
| `updated_at` | `String` |  |
| `vacation_conflict` | `Hash` | Set when policy_type is vacation_conflict. |

#### Example: Create

```ruby
policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2.create({
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


### PostmortemDocument

Create an instance: `postmortem_document = client.PostmortemDocument`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | Timestamp for when the document was created |
| `document_url` | `String` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `Array` | The list of users who have edited this post-mortem document |
| `exported_urls` | `Array` | URLs of any external locations this document has been exported to |
| `id` | `String` | Unique identifier for the post-mortem document |
| `incident_id` | `String` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `String` | The current status of this post-mortem document |
| `title` | `String` | The display title of the post-mortem document |
| `type` | `String` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `String` | Timestamp for when the document was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostmortemDocument record (raises on error).
postmortem_document = client.PostmortemDocument.load({ "id" => "postmortem_document_id" })
```

#### Example: List

```ruby
# list returns an Array of PostmortemDocument entities, one per record (raises on error).
postmortem_documents = client.PostmortemDocument.list
postmortem_documents.each { |item| puts item.data_get }
```


### PostmortemDocumentsAttachResultV1

Create an instance: `postmortem_documents_attach_result_v1 = client.PostmortemDocumentsAttachResultV1`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `document_provider` | `String` | The provider hosting the document. |
| `incident_id` | `String` | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | `String` | A URL pointing to the externally-hosted post-mortem document |

#### Example: Create

```ruby
postmortem_documents_attach_result_v1 = client.PostmortemDocumentsAttachResultV1.create({
  "incident_id" => "example_incident_id", # String
  "permalink" => "example_permalink", # String
})
```


### PostmortemDocumentsShowContentResultV1

Create an instance: `postmortem_documents_show_content_result_v1 = client.PostmortemDocumentsShowContentResultV1`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markdown` | `String` | The full content of the post-mortem document, rendered as markdown. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the PostmortemDocumentsShowContentResultV1 record (raises on error).
postmortem_documents_show_content_result_v1 = client.PostmortemDocumentsShowContentResultV1.load({ "postmortem_document_id" => "postmortem_document_id" })
```


### Schedule

Create an instance: `schedule = client.Schedule`

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
| `annotations` | `Hash` | Annotations that track metadata about this resource |
| `config` | `Hash` |  |
| `created_at` | `String` |  |
| `current_shifts` | `Array` | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `Hash` |  |
| `id` | `String` | Unique internal ID of the schedule |
| `name` | `String` | Human readable name synced from external provider |
| `next_shifts` | `Array` | The shifts after the next changeover. |
| `permalink` | `String` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `Array` | IDs of teams that own this schedule |
| `timezone` | `String` | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Schedule record (raises on error).
schedule = client.Schedule.load({ "id" => "schedule_id" })
```

#### Example: List

```ruby
# list returns an Array of Schedule entities, one per record (raises on error).
schedules = client.Schedule.list
schedules.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule = client.Schedule.create({
  "holidays_public_config" => {}, # Hash
})
```


### ScheduleEntriesListPayloadV2

Create an instance: `schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entry_window_end` | `String` | The end of the window to preview entries for. |
| `entry_window_start` | `String` | The start of the window to preview entries for. |
| `final` | `Array` | The effective schedule after overrides have been merged in |
| `overrides` | `Array` | Overrides that apply within the requested window |
| `schedule` | `Hash` |  |
| `scheduled` | `Array` | Entries from the schedule's rotation rules, before overrides are applied |

#### Example: Create

```ruby
schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2.create({
  "schedule_id" => "example_schedule_id", # String
  "schedule" => {}, # Hash
})
```


### ScheduleEntry

Create an instance: `schedule_entry = client.ScheduleEntry`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pagination_meta` | `Hash` |  |
| `schedule_entries` | `Hash` | The schedule entries for a window of time, grouped by where they come from. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleEntry record (raises on error).
schedule_entry = client.ScheduleEntry.load({ "schedule_id" => "schedule_id" })
```


### ScheduleOverride

Create an instance: `schedule_override = client.ScheduleOverride`

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
| `created_at` | `String` |  |
| `end_at` | `String` | End of the override |
| `id` | `String` | Unique internal ID of the schedule override |
| `layer_id` | `String` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `String` | The rotation on the schedule that this override applies to |
| `schedule_id` | `String` | The schedule that this override applies to |
| `start_at` | `String` | Start of the override |
| `updated_at` | `String` |  |
| `user` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleOverride record (raises on error).
schedule_override = client.ScheduleOverride.load({ "id" => "schedule_override_id" })
```

#### Example: List

```ruby
# list returns an Array of ScheduleOverride entities, one per record (raises on error).
schedule_overrides = client.ScheduleOverride.list({ "schedule_id" => "example" })
schedule_overrides.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule_override = client.ScheduleOverride.create({
  "end_at" => "example_end_at", # String
  "layer_id" => "example_layer_id", # String
  "rotation_id" => "example_rotation_id", # String
  "schedule_id" => "example_schedule_id", # String
  "start_at" => "example_start_at", # String
  "user" => {}, # Hash
})
```


### ScheduleReplica

Create an instance: `schedule_replica = client.ScheduleReplica`

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
| `created_at` | `String` | When this schedule replica was first created |
| `id` | `String` | Unique identifier of the schedule replica |
| `last_sync_error` | `String` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `String` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `Integer` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `String` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `String` | The external provider where this schedule is replicated to |
| `replica_provider_id` | `String` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `String` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `Array` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `String` | When this schedule replica was last updated |
| `user_statuses` | `Array` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleReplica record (raises on error).
schedule_replica = client.ScheduleReplica.load({ "id" => "schedule_replica_id", "schedule_id" => "schedule_id" })
```

#### Example: List

```ruby
# list returns an Array of ScheduleReplica entities, one per record (raises on error).
schedule_replicas = client.ScheduleReplica.list({ "id" => "example" })
schedule_replicas.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule_replica = client.ScheduleReplica.create({
  "id" => "example_id", # String
  "replica_fallback_user_id" => "example_replica_fallback_user_id", # String
  "replica_provider" => "example_replica_provider", # String
  "replica_provider_id" => "example_replica_provider_id", # String
  "sources" => [], # Array
})
```


### ScheduleSyncRule

Create an instance: `schedule_sync_rule = client.ScheduleSyncRule`

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
| `annotations` | `Hash` | Annotations that track metadata about this resource |
| `created_at` | `String` |  |
| `id` | `String` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `Array` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `String` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `String` | The schedule this rule belongs to |
| `schedule_sync_target` | `Hash` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `String` | The sync target ID this rule links to |
| `sync_type` | `String` | Which schedule members sync to the user group |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleSyncRule record (raises on error).
schedule_sync_rule = client.ScheduleSyncRule.load({ "id" => "schedule_sync_rule_id", "schedule_id" => "schedule_id" })
```

#### Example: List

```ruby
# list returns an Array of ScheduleSyncRule entities, one per record (raises on error).
schedule_sync_rules = client.ScheduleSyncRule.list({ "id" => "example" })
schedule_sync_rules.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule_sync_rule = client.ScheduleSyncRule.create({
  "id" => "example_id", # String
  "schedule_sync_target_id" => "example_schedule_sync_target_id", # String
  "sync_type" => "example_sync_type", # String
})
```


### ScheduleSyncTarget

Create an instance: `schedule_sync_target = client.ScheduleSyncTarget`

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
| `add_bot_to_group` | `Boolean` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `Hash` | Annotations that track metadata about this resource |
| `created_at` | `String` |  |
| `id` | `String` | Unique identifier of the sync target |
| `linked_schedules` | `Array` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `Hash` |  |
| `slack_team_id` | `String` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `String` | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `String` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the ScheduleSyncTarget record (raises on error).
schedule_sync_target = client.ScheduleSyncTarget.load({ "id" => "schedule_sync_target_id" })
```

#### Example: List

```ruby
# list returns an Array of ScheduleSyncTarget entities, one per record (raises on error).
schedule_sync_targets = client.ScheduleSyncTarget.list
schedule_sync_targets.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
schedule_sync_target = client.ScheduleSyncTarget.create({
  "add_bot_to_group" => true, # Boolean
  "new_slack_user_group" => {}, # Hash
})
```


### Secret

Create an instance: `secret = client.Secret`

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
| `created_at` | `String` |  |
| `description` | `String` | Optional description of what this secret is for |
| `id` | `String` | Unique identifier for this secret |
| `last_four_chars` | `String` | The last four characters of the current value, for masked display. |
| `name` | `String` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `Array` | IDs of the teams that own this secret. |
| `secret` | `Hash` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `String` |  |
| `value` | `String` | The secret's plaintext value. |
| `version` | `Integer` | The current version number, incremented on each rotation |
| `versions` | `Array` | The secret's versions, newest first |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Secret record (raises on error).
secret = client.Secret.load({ "id" => "secret_id" })
```

#### Example: List

```ruby
# list returns an Array of Secret entities, one per record (raises on error).
secrets = client.Secret.list
secrets.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
secret = client.Secret.create({
  "name" => "example_name", # String
  "value" => "example_value", # String
})
```


### Severity

Create an instance: `severity = client.Severity`

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
| `created_at` | `String` | When the action was created |
| `description` | `String` | Description of the severity |
| `id` | `String` | Unique identifier of the severity |
| `name` | `String` | Human readable name of the severity |
| `rank` | `Integer` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `String` | When the action was last updated |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Severity record (raises on error).
severity = client.Severity.load({ "id" => "severity_id" })
```

#### Example: List

```ruby
# list returns an Array of Severity entities, one per record (raises on error).
severitys = client.Severity.list
severitys.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
severity = client.Severity.create({
  "description" => "example_description", # String
  "name" => "example_name", # String
})
```


### StatusPage

Create an instance: `status_page = client.StatusPage`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `String` | The description of this status page |
| `id` | `String` | Unique ID of this status page |
| `name` | `String` | The title of this status page |
| `public_url` | `String` | The public URL of this status page |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPage record (raises on error).
status_page = client.StatusPage.load({ "id" => "status_page_id" })
```

#### Example: List

```ruby
# list returns an Array of StatusPage entities, one per record (raises on error).
status_pages = client.StatusPage.list
status_pages.each { |item| puts item.data_get }
```


### StatusPageComponent

Create an instance: `status_page_component = client.StatusPageComponent`

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
| `description` | `String` | Optional short description of this component |
| `id` | `String` | Unique identifier for this component |
| `management_meta` | `Hash` |  |
| `name` | `String` | Human-readable name for the component |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPageComponent record (raises on error).
status_page_component = client.StatusPageComponent.load({ "id" => "status_page_component_id" })
```

#### Example: List

```ruby
# list returns an Array of StatusPageComponent entities, one per record (raises on error).
status_page_components = client.StatusPageComponent.list
status_page_components.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
status_page_component = client.StatusPageComponent.create({
  "name" => "example_name", # String
})
```


### StatusPageComponentAvailability

Create an instance: `status_page_component_availability = client.StatusPageComponentAvailability`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `availability_percent` | `String` | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `String` | ID of the component. |
| `data_available_since` | `String` | Earliest time we have status data for this component. |
| `end_at` | `String` | End of the requested availability window |
| `start_at` | `String` | Start of the requested availability window |
| `status_page_id` | `String` | ID of the status page |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPageComponentAvailability record (raises on error).
status_page_component_availability = client.StatusPageComponentAvailability.load({ "component_id" => "component_id", "status_page_id" => "status_page_id", "end_at" => "end_at", "start_at" => "start_at" })
```


### StatusPageIncident

Create an instance: `status_page_incident = client.StatusPageIncident`

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
| `component_impacts` | `Array` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `Array` | An array of mappings from component ID to current component status |
| `id` | `String` | A unique ID for this status page incident |
| `idempotency_key` | `String` | A unique key to de-duplicate requests. |
| `incident_status` | `String` | Current status for this incident |
| `message` | `String` | Markdown initial update on this status page incident |
| `name` | `String` | A title for the incident |
| `notify_subscribers` | `Boolean` | Whether to notify subscribers about this status page incident. |
| `published_at` | `String` | When this status page incident was published to the status page |
| `status_page_id` | `String` | The ID of the corresponding status page |
| `updates` | `Array` | A list of updates posted to this status page incident |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPageIncident record (raises on error).
status_page_incident = client.StatusPageIncident.load({ "id" => "status_page_incident_id" })
```

#### Example: List

```ruby
# list returns an Array of StatusPageIncident entities, one per record (raises on error).
status_page_incidents = client.StatusPageIncident.list({ "status_page_id" => "example" })
status_page_incidents.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
status_page_incident = client.StatusPageIncident.create({
  "idempotency_key" => "example_idempotency_key", # String
  "incident_status" => "example_incident_status", # String
  "message" => "example_message", # String
  "name" => "example_name", # String
  "notify_subscribers" => true, # Boolean
  "status_page_id" => "example_status_page_id", # String
})
```


### StatusPageIncidentUpdate

Create an instance: `status_page_incident_update = client.StatusPageIncidentUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `Array` | An array of mappings from component ID to component status. |
| `incident_status` | `String` | Optional new status for this status page incident. |
| `message` | `String` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `Boolean` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `String` | ID of the status page incident |

#### Example: Create

```ruby
status_page_incident_update = client.StatusPageIncidentUpdate.create({
  "message" => "example_message", # String
  "notify_subscribers" => true, # Boolean
  "status_page_incident_id" => "example_status_page_incident_id", # String
})
```


### StatusPageLinkedResponseIncident

Create an instance: `status_page_linked_response_incident = client.StatusPageLinkedResponseIncident`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `String` | ID of the Response incident |
| `linked_at` | `String` | When the Response incident was linked to the status page incident |

#### Example: List

```ruby
# list returns an Array of StatusPageLinkedResponseIncident entities, one per record (raises on error).
status_page_linked_response_incidents = client.StatusPageLinkedResponseIncident.list({ "incident_id" => "example", "status_page_id" => "example" })
status_page_linked_response_incidents.each { |item| puts item.data_get }
```


### StatusPageMaintenance

Create an instance: `status_page_maintenance = client.StatusPageMaintenance`

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
| `affected_component_ids` | `Array` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `Boolean` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `Array` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `String` | The time the maintenance window ends |
| `id` | `String` | A unique ID for this status page maintenance window |
| `idempotency_key` | `String` | A unique key to de-duplicate requests. |
| `maintenance_status` | `String` | Current status for this maintenance window |
| `message` | `String` | Markdown initial update on this status page maintenance window |
| `name` | `String` | A title for the maintenance window |
| `notify_subscribers` | `Boolean` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `String` | When this status page maintenance window was published to the status page |
| `start_at` | `String` | The time the maintenance window starts |
| `status_page_id` | `String` | The ID of the corresponding status page |
| `updates` | `Array` | A list of updates posted to this status page maintenance window |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPageMaintenance record (raises on error).
status_page_maintenance = client.StatusPageMaintenance.load({ "id" => "status_page_maintenance_id" })
```

#### Example: List

```ruby
# list returns an Array of StatusPageMaintenance entities, one per record (raises on error).
status_page_maintenances = client.StatusPageMaintenance.list({ "status_page_id" => "example" })
status_page_maintenances.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
status_page_maintenance = client.StatusPageMaintenance.create({
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


### StatusPageMaintenanceUpdate

Create an instance: `status_page_maintenance_update = client.StatusPageMaintenanceUpdate`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `Array` | An array of mappings from component ID to component status. |
| `maintenance_status` | `String` | Optional new status for this status page maintenance window. |
| `message` | `String` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `Boolean` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `String` | ID of the status page maintenance window |

#### Example: Create

```ruby
status_page_maintenance_update = client.StatusPageMaintenanceUpdate.create({
  "message" => "example_message", # String
  "notify_subscribers" => true, # Boolean
  "status_page_maintenance_id" => "example_status_page_maintenance_id", # String
})
```


### StatusPageStructure

Create an instance: `status_page_structure = client.StatusPageStructure`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_structure` | `Hash` |  |
| `display_uptime_mode` | `String` | How the page shows uptime against its components |
| `id` | `String` |  |
| `management_meta` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the StatusPageStructure record (raises on error).
status_page_structure = client.StatusPageStructure.load({ "id" => "status_page_structure_id" })
```


### StatusPagesCreateStatusPageRetrospectiveIncidentResultV2

Create an instance: `status_pages_create_status_page_retrospective_incident_result_v2 = client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotency_key` | `String` | A unique key to de-duplicate requests. |
| `name` | `String` | A title for the incident |
| `status_page_id` | `String` | ID of the status page. |
| `updates` | `Array` | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

#### Example: Create

```ruby
status_pages_create_status_page_retrospective_incident_result_v2 = client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2.create({
  "idempotency_key" => "example_idempotency_key", # String
  "name" => "example_name", # String
  "status_page_id" => "example_status_page_id", # String
  "updates" => [], # Array
})
```


### Team

Create an instance: `team = client.Team`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `Hash` |  |
| `id` | `String` | Unique ID of the team |
| `members` | `Array` | Members of the team |
| `name` | `String` | Name of the team |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Team record (raises on error).
team = client.Team.load({ "id" => "team_id" })
```

#### Example: List

```ruby
# list returns an Array of Team entities, one per record (raises on error).
teams = client.Team.list
teams.each { |item| puts item.data_get }
```


### TelemetryDataSource

Create an instance: `telemetry_data_source = client.TelemetryDataSource`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `String` | When this data source was created |
| `datadog_config` | `Hash` | Datadog-specific credential updates |
| `enabled` | `Boolean` | Whether this data source is enabled |
| `grafana_config` | `Hash` | Grafana-specific credential and endpoint updates |
| `id` | `String` | Unique identifier for this data source |
| `name` | `String` | Human-readable name of the data source |
| `provider` | `String` | Provider that hosts this data source |
| `source_type` | `String` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `String` | When this data source was last updated |
| `version` | `String` | Upstream tool version captured at probe time (e.g. |


### User

Create an instance: `user = client.User`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `Hash` |  |
| `custom_roles` | `Array` |  |
| `email` | `String` | Email address of the user. |
| `id` | `String` | Unique identifier of the user |
| `is_active` | `Boolean` | Whether the user is active. |
| `name` | `String` | Name of the user |
| `role` | `String` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `Hash` |  |
| `slack_user_id` | `String` | Slack ID of the user |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the User record (raises on error).
user = client.User.load({ "id" => "user_id" })
```

#### Example: List

```ruby
# list returns an Array of User entities, one per record (raises on error).
users = client.User.list
users.each { |item| puts item.data_get }
```


### UsersShowPagingProviderResultV2

Create an instance: `users_show_paging_provider_result_v2 = client.UsersShowPagingProviderResultV2`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `preferred_escalation_provider` | `String` | The user's effective escalation provider. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UsersShowPagingProviderResultV2 record (raises on error).
users_show_paging_provider_result_v2 = client.UsersShowPagingProviderResultV2.load({ "user_id" => "user_id" })
```

#### Example: Create

```ruby
users_show_paging_provider_result_v2 = client.UsersShowPagingProviderResultV2.create({
  "user_id" => "example_user_id", # String
  "preferred_escalation_provider" => "example_preferred_escalation_provider", # String
})
```


### UtilitiesV1

Create an instance: `utilities_v1 = client.UtilitiesV1`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the UtilitiesV1 record (raises on error).
utilities_v1 = client.UtilitiesV1.load()
```


### Workflow

Create an instance: `workflow = client.Workflow`

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
| `annotations` | `Hash` | Annotations that track metadata about this resource |
| `auto_run_mode` | `String` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `Array` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `Boolean` | Whether to continue executing the workflow if a step fails |
| `delay` | `Hash` |  |
| `expressions` | `Array` | The expressions to use in the workflow |
| `folder` | `String` | Folder to display the workflow in |
| `form_fields` | `Array` | User-configured form fields available in the workflow scope. |
| `id` | `String` | Unique identifier for the workflow |
| `include_private_escalations` | `Boolean` | Whether to include private escalations |
| `include_private_incidents` | `Boolean` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `Hash` |  |
| `name` | `String` | Name provided by the user when creating the workflow |
| `once_for` | `Array` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `Array` | IDs of the teams that own this workflow |
| `private_incident_scope` | `String` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `String` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `Array` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `String` | Which incidents should the workflow be applied to? |
| `shortform` | `String` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `Boolean` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `String` | What state this workflow is in |
| `steps` | `Array` | Steps that are executed as part of the workflow |
| `trigger` | `String` | Trigger to set on the workflow |
| `version` | `Integer` | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Workflow record (raises on error).
workflow = client.Workflow.load({ "id" => "workflow_id" })
```

#### Example: List

```ruby
# list returns an Array of Workflow entities, one per record (raises on error).
workflows = client.Workflow.list
workflows.each { |item| puts item.data_get }
```

#### Example: Create

```ruby
workflow = client.Workflow.create({
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


### WorkflowRun

Create an instance: `workflow_run = client.WorkflowRun`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancelled_at` | `String` | If the run was cancelled, this is when |
| `created_at` | `String` | When the resource was created |
| `enqueued_at` | `String` | When the run was enqueued for execution |
| `error` | `String` | Error produced by the workflow, if it failed |
| `id` | `String` | Unique identifier for the workflow run |
| `incident_id` | `String` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `String` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `Array` | Status of each step as it is worked |
| `scheduled_at` | `String` | When the run was scheduled for |
| `updated_at` | `String` | When the resource was last updated |
| `workflow_id` | `String` | Unique identifier for the underlying workflow |
| `workflow_name` | `String` | Name of the underlying workflow |
| `workflow_version_id` | `String` | Unique identifier of the workflow version |
| `workflow_version_number` | `Integer` | Monotonically incrementing version number for the version that ran |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the WorkflowRun record (raises on error).
workflow_run = client.WorkflowRun.load({ "id" => "workflow_run_id" })
```

#### Example: List

```ruby
# list returns an Array of WorkflowRun entities, one per record (raises on error).
workflow_runs = client.WorkflowRun.list
workflow_runs.each { |item| puts item.data_get }
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

Features are the extension mechanism. A feature is a Ruby class
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

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── IncidentIo_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── schema.rb                  -- Generated option + entity specs
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`IncidentIo_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```ruby
incidentstatus = client.IncidentStatus
incidentstatus.list()

# incidentstatus.data_get now returns the incidentstatus data from the last list
# incidentstatus.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

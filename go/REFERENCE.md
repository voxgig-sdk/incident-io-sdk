# IncidentIo Golang SDK Reference

Complete API reference for the IncidentIo Golang SDK.


## IncidentIoSDK

### Constructor

```go
func NewIncidentIoSDK(options map[string]any) *IncidentIoSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *IncidentIoSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *IncidentIoSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Action(data map[string]any) IncidentIoEntity`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `Alert(data map[string]any) IncidentIoEntity`

Create a new `Alert` entity instance. Pass `nil` for no initial data.

#### `AlertAttribute(data map[string]any) IncidentIoEntity`

Create a new `AlertAttribute` entity instance. Pass `nil` for no initial data.

#### `AlertNote(data map[string]any) IncidentIoEntity`

Create a new `AlertNote` entity instance. Pass `nil` for no initial data.

#### `AlertRoute(data map[string]any) IncidentIoEntity`

Create a new `AlertRoute` entity instance. Pass `nil` for no initial data.

#### `AlertSource(data map[string]any) IncidentIoEntity`

Create a new `AlertSource` entity instance. Pass `nil` for no initial data.

#### `AlertSourcesV2(data map[string]any) IncidentIoEntity`

Create a new `AlertSourcesV2` entity instance. Pass `nil` for no initial data.

#### `AlertTag(data map[string]any) IncidentIoEntity`

Create a new `AlertTag` entity instance. Pass `nil` for no initial data.

#### `AlertsAddTagsResultV2(data map[string]any) IncidentIoEntity`

Create a new `AlertsAddTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsRemoveTagsResultV2(data map[string]any) IncidentIoEntity`

Create a new `AlertsRemoveTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsSetTagsResultV2(data map[string]any) IncidentIoEntity`

Create a new `AlertsSetTagsResultV2` entity instance. Pass `nil` for no initial data.

#### `AlertsTransitionIncidentAlertResultV2(data map[string]any) IncidentIoEntity`

Create a new `AlertsTransitionIncidentAlertResultV2` entity instance. Pass `nil` for no initial data.

#### `AnnouncementRule(data map[string]any) IncidentIoEntity`

Create a new `AnnouncementRule` entity instance. Pass `nil` for no initial data.

#### `AnnouncementTemplate(data map[string]any) IncidentIoEntity`

Create a new `AnnouncementTemplate` entity instance. Pass `nil` for no initial data.

#### `ApiKey(data map[string]any) IncidentIoEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `CallRoute(data map[string]any) IncidentIoEntity`

Create a new `CallRoute` entity instance. Pass `nil` for no initial data.

#### `CallRoutesCreateAllowedCallerResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesCreateAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesCreateOptionResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesCreateOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesListAllowedCallersResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesListAllowedCallersResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesListOptionsResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesListOptionsResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesShowAllowedCallerResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesShowAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesShowOptionResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesShowOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesUpdateAllowedCallerResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesUpdateAllowedCallerResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesUpdateOptionResultV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesUpdateOptionResultV2` entity instance. Pass `nil` for no initial data.

#### `CallRoutesV2(data map[string]any) IncidentIoEntity`

Create a new `CallRoutesV2` entity instance. Pass `nil` for no initial data.

#### `CallSession(data map[string]any) IncidentIoEntity`

Create a new `CallSession` entity instance. Pass `nil` for no initial data.

#### `CallTranscriptEntry(data map[string]any) IncidentIoEntity`

Create a new `CallTranscriptEntry` entity instance. Pass `nil` for no initial data.

#### `CatalogEntry(data map[string]any) IncidentIoEntity`

Create a new `CatalogEntry` entity instance. Pass `nil` for no initial data.

#### `CatalogResource(data map[string]any) IncidentIoEntity`

Create a new `CatalogResource` entity instance. Pass `nil` for no initial data.

#### `CatalogType(data map[string]any) IncidentIoEntity`

Create a new `CatalogType` entity instance. Pass `nil` for no initial data.

#### `CatalogTypeSchema(data map[string]any) IncidentIoEntity`

Create a new `CatalogTypeSchema` entity instance. Pass `nil` for no initial data.

#### `CustomField(data map[string]any) IncidentIoEntity`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldOption(data map[string]any) IncidentIoEntity`

Create a new `CustomFieldOption` entity instance. Pass `nil` for no initial data.

#### `Escalation(data map[string]any) IncidentIoEntity`

Create a new `Escalation` entity instance. Pass `nil` for no initial data.

#### `EscalationPathTemplate(data map[string]any) IncidentIoEntity`

Create a new `EscalationPathTemplate` entity instance. Pass `nil` for no initial data.

#### `EscalationsCheckEscalationPermissionsResultV2(data map[string]any) IncidentIoEntity`

Create a new `EscalationsCheckEscalationPermissionsResultV2` entity instance. Pass `nil` for no initial data.

#### `EscalationsReassignEscalationResultV2(data map[string]any) IncidentIoEntity`

Create a new `EscalationsReassignEscalationResultV2` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data map[string]any) IncidentIoEntity`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `FollowUpsConnectExternalIssueResultV3(data map[string]any) IncidentIoEntity`

Create a new `FollowUpsConnectExternalIssueResultV3` entity instance. Pass `nil` for no initial data.

#### `FollowUpsCreateFromLinkResultV3(data map[string]any) IncidentIoEntity`

Create a new `FollowUpsCreateFromLinkResultV3` entity instance. Pass `nil` for no initial data.

#### `Identity(data map[string]any) IncidentIoEntity`

Create a new `Identity` entity instance. Pass `nil` for no initial data.

#### `Incident(data map[string]any) IncidentIoEntity`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `IncidentActivityLogEntry(data map[string]any) IncidentIoEntity`

Create a new `IncidentActivityLogEntry` entity instance. Pass `nil` for no initial data.

#### `IncidentAttachment(data map[string]any) IncidentIoEntity`

Create a new `IncidentAttachment` entity instance. Pass `nil` for no initial data.

#### `IncidentForm(data map[string]any) IncidentIoEntity`

Create a new `IncidentForm` entity instance. Pass `nil` for no initial data.

#### `IncidentMembership(data map[string]any) IncidentIoEntity`

Create a new `IncidentMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipant(data map[string]any) IncidentIoEntity`

Create a new `IncidentParticipant` entity instance. Pass `nil` for no initial data.

#### `IncidentParticipantWorkload(data map[string]any) IncidentIoEntity`

Create a new `IncidentParticipantWorkload` entity instance. Pass `nil` for no initial data.

#### `IncidentRelationship(data map[string]any) IncidentIoEntity`

Create a new `IncidentRelationship` entity instance. Pass `nil` for no initial data.

#### `IncidentRole(data map[string]any) IncidentIoEntity`

Create a new `IncidentRole` entity instance. Pass `nil` for no initial data.

#### `IncidentStatus(data map[string]any) IncidentIoEntity`

Create a new `IncidentStatus` entity instance. Pass `nil` for no initial data.

#### `IncidentTeamMembership(data map[string]any) IncidentIoEntity`

Create a new `IncidentTeamMembership` entity instance. Pass `nil` for no initial data.

#### `IncidentTeamMembershipsV1(data map[string]any) IncidentIoEntity`

Create a new `IncidentTeamMembershipsV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplate(data map[string]any) IncidentIoEntity`

Create a new `IncidentTemplate` entity instance. Pass `nil` for no initial data.

#### `IncidentTemplatesValidateResultV1(data map[string]any) IncidentIoEntity`

Create a new `IncidentTemplatesValidateResultV1` entity instance. Pass `nil` for no initial data.

#### `IncidentTimelineItem(data map[string]any) IncidentIoEntity`

Create a new `IncidentTimelineItem` entity instance. Pass `nil` for no initial data.

#### `IncidentTimestamp(data map[string]any) IncidentIoEntity`

Create a new `IncidentTimestamp` entity instance. Pass `nil` for no initial data.

#### `IncidentType(data map[string]any) IncidentIoEntity`

Create a new `IncidentType` entity instance. Pass `nil` for no initial data.

#### `IncidentUpdate(data map[string]any) IncidentIoEntity`

Create a new `IncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data map[string]any) IncidentIoEntity`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `IpRange(data map[string]any) IncidentIoEntity`

Create a new `IpRange` entity instance. Pass `nil` for no initial data.

#### `MaintenanceWindow(data map[string]any) IncidentIoEntity`

Create a new `MaintenanceWindow` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationMethodPublicV2(data map[string]any) IncidentIoEntity`

Create a new `OnCallNotificationMethodPublicV2` entity instance. Pass `nil` for no initial data.

#### `OnCallNotificationRulePublicV2(data map[string]any) IncidentIoEntity`

Create a new `OnCallNotificationRulePublicV2` entity instance. Pass `nil` for no initial data.

#### `PayConfig(data map[string]any) IncidentIoEntity`

Create a new `PayConfig` entity instance. Pass `nil` for no initial data.

#### `PayConfigsCreateOneOffRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsCreateOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsCreateWeeklyRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsCreateWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsListOneOffRulesResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsListOneOffRulesResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsListWeeklyRulesResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsListWeeklyRulesResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsShowOneOffRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsShowOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsShowWeeklyRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsShowWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsUpdateOneOffRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsUpdateOneOffRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsUpdateWeeklyRuleResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsUpdateWeeklyRuleResultV2` entity instance. Pass `nil` for no initial data.

#### `PayConfigsV2(data map[string]any) IncidentIoEntity`

Create a new `PayConfigsV2` entity instance. Pass `nil` for no initial data.

#### `PayReport(data map[string]any) IncidentIoEntity`

Create a new `PayReport` entity instance. Pass `nil` for no initial data.

#### `PayReportsPublishResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayReportsPublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsUnpublishResultV2(data map[string]any) IncidentIoEntity`

Create a new `PayReportsUnpublishResultV2` entity instance. Pass `nil` for no initial data.

#### `PayReportsV2(data map[string]any) IncidentIoEntity`

Create a new `PayReportsV2` entity instance. Pass `nil` for no initial data.

#### `PoliciesV2(data map[string]any) IncidentIoEntity`

Create a new `PoliciesV2` entity instance. Pass `nil` for no initial data.

#### `Policy(data map[string]any) IncidentIoEntity`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PolicyFinding(data map[string]any) IncidentIoEntity`

Create a new `PolicyFinding` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsDismissResultV2(data map[string]any) IncidentIoEntity`

Create a new `PolicyFindingsDismissResultV2` entity instance. Pass `nil` for no initial data.

#### `PolicyFindingsRestoreResultV2(data map[string]any) IncidentIoEntity`

Create a new `PolicyFindingsRestoreResultV2` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocument(data map[string]any) IncidentIoEntity`

Create a new `PostmortemDocument` entity instance. Pass `nil` for no initial data.

#### `Schedule(data map[string]any) IncidentIoEntity`

Create a new `Schedule` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntriesListPayloadV2(data map[string]any) IncidentIoEntity`

Create a new `ScheduleEntriesListPayloadV2` entity instance. Pass `nil` for no initial data.

#### `ScheduleEntry(data map[string]any) IncidentIoEntity`

Create a new `ScheduleEntry` entity instance. Pass `nil` for no initial data.

#### `ScheduleReplica(data map[string]any) IncidentIoEntity`

Create a new `ScheduleReplica` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncRule(data map[string]any) IncidentIoEntity`

Create a new `ScheduleSyncRule` entity instance. Pass `nil` for no initial data.

#### `ScheduleSyncTarget(data map[string]any) IncidentIoEntity`

Create a new `ScheduleSyncTarget` entity instance. Pass `nil` for no initial data.

#### `SchedulesShowOverrideResultV2(data map[string]any) IncidentIoEntity`

Create a new `SchedulesShowOverrideResultV2` entity instance. Pass `nil` for no initial data.

#### `SchedulesUpdateOverrideResultV2(data map[string]any) IncidentIoEntity`

Create a new `SchedulesUpdateOverrideResultV2` entity instance. Pass `nil` for no initial data.

#### `Secret(data map[string]any) IncidentIoEntity`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Severity(data map[string]any) IncidentIoEntity`

Create a new `Severity` entity instance. Pass `nil` for no initial data.

#### `StatusPage(data map[string]any) IncidentIoEntity`

Create a new `StatusPage` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponent(data map[string]any) IncidentIoEntity`

Create a new `StatusPageComponent` entity instance. Pass `nil` for no initial data.

#### `StatusPageComponentAvailabilityV2(data map[string]any) IncidentIoEntity`

Create a new `StatusPageComponentAvailabilityV2` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncident(data map[string]any) IncidentIoEntity`

Create a new `StatusPageIncident` entity instance. Pass `nil` for no initial data.

#### `StatusPageIncidentUpdate(data map[string]any) IncidentIoEntity`

Create a new `StatusPageIncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageLinkedResponseIncidentV1(data map[string]any) IncidentIoEntity`

Create a new `StatusPageLinkedResponseIncidentV1` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenance(data map[string]any) IncidentIoEntity`

Create a new `StatusPageMaintenance` entity instance. Pass `nil` for no initial data.

#### `StatusPageMaintenanceUpdate(data map[string]any) IncidentIoEntity`

Create a new `StatusPageMaintenanceUpdate` entity instance. Pass `nil` for no initial data.

#### `StatusPageStructure(data map[string]any) IncidentIoEntity`

Create a new `StatusPageStructure` entity instance. Pass `nil` for no initial data.

#### `StatusPagesV2(data map[string]any) IncidentIoEntity`

Create a new `StatusPagesV2` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) IncidentIoEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `TelemetryDataSourceV2(data map[string]any) IncidentIoEntity`

Create a new `TelemetryDataSourceV2` entity instance. Pass `nil` for no initial data.

#### `User(data map[string]any) IncidentIoEntity`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `Workflow(data map[string]any) IncidentIoEntity`

Create a new `Workflow` entity instance. Pass `nil` for no initial data.

#### `WorkflowRun(data map[string]any) IncidentIoEntity`

Create a new `WorkflowRun` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActionEntity

```go
action := client.Action(nil)
fmt.Println(action.GetName()) // "action"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this action is assigned to |
| `completed_at` | `string` | No | When the action was completed |
| `created_at` | `string` | Yes | When the action was created |
| `creator` | `map[string]any` | Yes |  |
| `description` | `string` | No | Description of the action |
| `external_issue_reference` | `map[string]any` | No |  |
| `follow_up` | `bool` | Yes | Whether an action is marked as follow-up |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Action(nil).Create(map[string]any{
    "assignee": map[string]any{},
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "follow_up": true,
    "id": "example_id",
    "incident_id": "example_incident_id",
    "status": "example_status",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Action(nil).Update(map[string]any{
    "id": "action_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Action(nil).Remove(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertEntity

```go
alert := client.Alert(nil)
fmt.Println(alert.GetName()) // "alert"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `[]any` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `[]any` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Alert(nil).List(map[string]any{"page_size": 1}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Alert(nil).Create(map[string]any{
    "id": "example_id",
    "alert_source_id": "example_alert_source_id",
    "attributes": []any{},
    "created_at": "example_created_at",
    "deduplication_key": "example_deduplication_key",
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertAttributeEntity

```go
alertAttribute := client.AlertAttribute(nil)
fmt.Println(alertAttribute.GetName()) // "alert_attribute"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AlertAttribute(nil).Load(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertAttribute(nil).Create(map[string]any{
    "array": true,
    "id": "example_id",
    "name": "example_name",
    "required": true,
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AlertAttribute(nil).Update(map[string]any{
    "id": "alert_attribute_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AlertAttribute(nil).Remove(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertNoteEntity

```go
alertNote := client.AlertNote(nil)
fmt.Println(alertNote.GetName()) // "alert_note"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No | ID of the alert group this note is attached to. |
| `alert_id` | `string` | No | ID of the alert this note is attached to. |
| `content` | `string` | Yes | Markdown body of the note |
| `created_at` | `string` | Yes | When this note was first created |
| `creator` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the alert note |
| `images` | `[]any` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | Yes | When this note was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AlertNote(nil).Load(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertNote(nil).Create(map[string]any{
    "content": "example_content",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "id": "example_id",
    "images": []any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AlertNote(nil).Update(map[string]any{
    "id": "alert_note_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AlertNote(nil).Remove(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertRouteEntity

```go
alertRoute := client.AlertRoute(nil)
fmt.Println(alertRoute.GetName()) // "alert_route"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_sources` | `[]any` | Yes | Which alert sources should this alert route match? |
| `channel_config` | `[]any` | Yes | The channel configuration for this alert route |
| `condition_groups` | `[]any` | Yes | What condition groups must be true for this alert route to fire? |
| `created_at` | `string` | No | The time of creation of this alert route |
| `enabled` | `bool` | Yes | Whether this alert route is enabled or not |
| `escalation_config` | `map[string]any` | Yes |  |
| `expressions` | `[]any` | Yes | The expressions used in this template |
| `grouping_config` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this alert route config |
| `incident_config` | `map[string]any` | Yes |  |
| `incident_template` | `map[string]any` | Yes |  |
| `is_private` | `bool` | Yes | Whether this alert route is private. |
| `message_config` | `map[string]any` | Yes |  |
| `message_template` | `map[string]any` | No |  |
| `name` | `string` | Yes | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `[]any` | No | IDs of teams that own this alert route |
| `updated_at` | `string` | No | The time of last update of this alert route |
| `version` | `int` | Yes | The version of this alert route config |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertRoute(nil).List(map[string]any{"page_size": 1}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AlertRoute(nil).Load(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertRoute(nil).Create(map[string]any{
    "alert_sources": []any{},
    "channel_config": []any{},
    "condition_groups": []any{},
    "enabled": true,
    "escalation_config": map[string]any{},
    "expressions": []any{},
    "grouping_config": map[string]any{},
    "id": "example_id",
    "incident_config": map[string]any{},
    "incident_template": map[string]any{},
    "is_private": true,
    "message_config": map[string]any{},
    "name": "example_name",
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AlertRoute(nil).Update(map[string]any{
    "id": "alert_route_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AlertRoute(nil).Remove(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertSourceEntity

```go
alertSource := client.AlertSource(nil)
fmt.Println(alertSource.GetName()) // "alert_source"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `bool` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `int` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `map[string]any` | Yes |  |
| `disabled` | `bool` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `map[string]any` | Yes |  |
| `filter_condition_groups` | `[]any` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `map[string]any` | Yes |  |
| `http_custom_options` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | The ID of this alert source |
| `jira_options` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | Unique name of the alert source |
| `owning_team_ids` | `[]any` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `map[string]any` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AlertSource(nil).Load(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertSource(nil).Create(map[string]any{
    "azure_devops_options": map[string]any{},
    "email_options": map[string]any{},
    "heartbeat_options": map[string]any{},
    "http_custom_options": map[string]any{},
    "id": "example_id",
    "jira_options": map[string]any{},
    "name": "example_name",
    "rate_limit_sharding": map[string]any{},
    "source_type": "example_source_type",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AlertSource(nil).Update(map[string]any{
    "id": "alert_source_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AlertSource(nil).Remove(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertSourcesV2Entity

```go
alertSourcesV2 := client.AlertSourcesV2(nil)
fmt.Println(alertSourcesV2.GetName()) // "alert_sources_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `[]any` | No | IDs of teams that own this alert source |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `map[string]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertSourcesV2(nil).Create(map[string]any{
    "source_type": "example_source_type",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertSourcesV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertTagEntity

```go
alertTag := client.AlertTag(nil)
fmt.Println(alertTag.GetName()) // "alert_tag"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the tag |
| `name` | `string` | Yes | The tag name |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertTagEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertsAddTagsResultV2Entity

```go
alertsAddTagsResultV2 := client.AlertsAddTagsResultV2(nil)
fmt.Println(alertsAddTagsResultV2.GetName()) // "alerts_add_tags_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `[]any` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `[]any` | No | Tags someone has applied to this alert |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertsAddTagsResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "alert_source_id": "example_alert_source_id",
    "attributes": []any{},
    "created_at": "example_created_at",
    "deduplication_key": "example_deduplication_key",
    "id": "example_id",
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertsAddTagsResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertsRemoveTagsResultV2Entity

```go
alertsRemoveTagsResultV2 := client.AlertsRemoveTagsResultV2(nil)
fmt.Println(alertsRemoveTagsResultV2.GetName()) // "alerts_remove_tags_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `[]any` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `[]any` | No | Tags someone has applied to this alert |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertsRemoveTagsResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "alert_source_id": "example_alert_source_id",
    "attributes": []any{},
    "created_at": "example_created_at",
    "deduplication_key": "example_deduplication_key",
    "id": "example_id",
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertsRemoveTagsResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertsSetTagsResultV2Entity

```go
alertsSetTagsResultV2 := client.AlertsSetTagsResultV2(nil)
fmt.Println(alertsSetTagsResultV2.GetName()) // "alerts_set_tags_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `[]any` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `[]any` | No | Tags someone has applied to this alert |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertsSetTagsResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "alert_source_id": "example_alert_source_id",
    "attributes": []any{},
    "created_at": "example_created_at",
    "deduplication_key": "example_deduplication_key",
    "id": "example_id",
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertsSetTagsResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AlertsTransitionIncidentAlertResultV2Entity

```go
alertsTransitionIncidentAlertResultV2 := client.AlertsTransitionIncidentAlertResultV2(nil)
fmt.Println(alertsTransitionIncidentAlertResultV2.GetName()) // "alerts_transition_incident_alert_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `map[string]any` | Yes |  |
| `alert_id` | `string` | Yes | Alert to attach to the incident |
| `alert_route_id` | `string` | No | The ID of the alert route that created this incident alert |
| `id` | `string` | Yes | The ID of this alert |
| `incident` | `map[string]any` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Yes | Incident to attach the alert to |
| `re_relate` | `bool` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | Yes | What state to move the connection to |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AlertsTransitionIncidentAlertResultV2(nil).List(map[string]any{"page_size": 1}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AlertsTransitionIncidentAlertResultV2(nil).Create(map[string]any{
    "alert": map[string]any{},
    "alert_id": "example_alert_id",
    "id": "example_id",
    "incident": map[string]any{},
    "incident_id": "example_incident_id",
    "state": "example_state",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnnouncementRuleEntity

```go
announcementRule := client.AnnouncementRule(nil)
fmt.Println(announcementRule.GetName()) // "announcement_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `[]any` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | Yes | When the rule was created |
| `id` | `string` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `[]any` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Yes | Human readable name for the rule |
| `owning_team_ids` | `[]any` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `[]any` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AnnouncementRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AnnouncementRule(nil).Load(map[string]any{"id": "announcement_rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AnnouncementRule(nil).Create(map[string]any{
    "condition_groups": []any{},
    "conditions_no_longer_apply_behaviour": "example_conditions_no_longer_apply_behaviour",
    "created_at": "example_created_at",
    "id": "example_id",
    "microsoft_teams_channel_ids": []any{},
    "mode": "example_mode",
    "name": "example_name",
    "owning_team_ids": []any{},
    "slack_channel_ids": []any{},
    "update_sharing_mode": "example_update_sharing_mode",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AnnouncementRule(nil).Update(map[string]any{
    "id": "announcement_rule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AnnouncementRule(nil).Remove(map[string]any{"id": "announcement_rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnnouncementRuleEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## AnnouncementTemplateEntity

```go
announcementTemplate := client.AnnouncementTemplate(nil)
fmt.Println(announcementTemplate.GetName()) // "announcement_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `[]any` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `[]any` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `string` | Yes | Unique identifier for this announcement template |
| `is_default` | `bool` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Yes | Name of this announcement template |
| `owning_team_ids` | `[]any` | Yes | IDs of the teams that own this template |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.AnnouncementTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.AnnouncementTemplate(nil).Load(map[string]any{"id": "announcement_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.AnnouncementTemplate(nil).Create(map[string]any{
    "actions": []any{},
    "fields": []any{},
    "id": "example_id",
    "is_default": true,
    "name": "example_name",
    "owning_team_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.AnnouncementTemplate(nil).Update(map[string]any{
    "id": "announcement_template_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.AnnouncementTemplate(nil).Remove(map[string]any{"id": "announcement_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AnnouncementTemplateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ApiKeyEntity

```go
apiKey := client.ApiKey(nil)
fmt.Println(apiKey.GetName()) // "api_key"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `string` | No | Freeform notes about this API key |
| `created_at` | `string` | Yes | When the API key was created |
| `creator` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this API key |
| `last_used_at` | `string` | No | When the key was last used to authenticate a request |
| `name` | `string` | Yes | The name of the API key, for the user's reference |
| `role_names` | `[]any` | Yes | Account-level roles to assign to the API key. |
| `roles` | `[]any` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `[]any` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `[]any` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `[]any` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | Yes | When the current token for this API was last issued. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "role_names": []any{},
    "roles": []any{},
    "team_ids": []any{},
    "team_role_names": []any{},
    "team_roles": []any{},
    "token_last_issued_at": "example_token_last_issued_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.ApiKey(nil).Update(map[string]any{
    "id": "api_key_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.ApiKey(nil).Remove(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRouteEntity

```go
callRoute := client.CallRoute(nil)
fmt.Println(callRoute.GetName()) // "call_route"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `[]any` | Yes | The numbers allowed to call this route. |
| `country_code` | `string` | No | The country this route's number belongs to |
| `created_at` | `string` | Yes |  |
| `current_state` | `string` | Yes | Where this route is in provisioning. |
| `custom_language` | `string` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Yes | Unique identifier for this call route |
| `name` | `string` | Yes | Name for this call route |
| `options` | `[]any` | Yes | The phone-tree menu this route presents. |
| `path` | `[]any` | Yes | Who we page when a call comes in. |
| `phone_number` | `string` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` | Yes |  |
| `use_caller_allowlist` | `bool` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CallRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CallRoute(nil).Load(map[string]any{"id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CallRoute(nil).Update(map[string]any{
    "id": "call_route_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRouteEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesCreateAllowedCallerResultV2Entity

```go
callRoutesCreateAllowedCallerResultV2 := client.CallRoutesCreateAllowedCallerResultV2(nil)
fmt.Println(callRoutesCreateAllowedCallerResultV2.GetName()) // "call_routes_create_allowed_caller_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number to allow, in international format |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CallRoutesCreateAllowedCallerResultV2(nil).Create(map[string]any{
    "call_route_id": "example_call_route_id",
    "phone_number": "example_phone_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesCreateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesCreateOptionResultV2Entity

```go
callRoutesCreateOptionResultV2 := client.CallRoutesCreateOptionResultV2(nil)
fmt.Println(callRoutesCreateOptionResultV2.GetName()) // "call_routes_create_option_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `path` | `[]any` | Yes | Who to page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CallRoutesCreateOptionResultV2(nil).Create(map[string]any{
    "call_route_id": "example_call_route_id",
    "digit": "example_digit",
    "path": []any{},
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesCreateOptionResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesListAllowedCallersResultV2Entity

```go
callRoutesListAllowedCallersResultV2 := client.CallRoutesListAllowedCallersResultV2(nil)
fmt.Println(callRoutesListAllowedCallersResultV2.GetName()) // "call_routes_list_allowed_callers_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CallRoutesListAllowedCallersResultV2(nil).List(map[string]any{"call_route_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesListAllowedCallersResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesListOptionsResultV2Entity

```go
callRoutesListOptionsResultV2 := client.CallRoutesListOptionsResultV2(nil)
fmt.Println(callRoutesListOptionsResultV2.GetName()) // "call_routes_list_options_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `[]any` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CallRoutesListOptionsResultV2(nil).List(map[string]any{"call_route_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesListOptionsResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesShowAllowedCallerResultV2Entity

```go
callRoutesShowAllowedCallerResultV2 := client.CallRoutesShowAllowedCallerResultV2(nil)
fmt.Println(callRoutesShowAllowedCallerResultV2.GetName()) // "call_routes_show_allowed_caller_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CallRoutesShowAllowedCallerResultV2(nil).Load(map[string]any{"id": "call_routes_show_allowed_caller_result_v2_id", "call_route_id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesShowAllowedCallerResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesShowOptionResultV2Entity

```go
callRoutesShowOptionResultV2 := client.CallRoutesShowOptionResultV2(nil)
fmt.Println(callRoutesShowOptionResultV2.GetName()) // "call_routes_show_option_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `[]any` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CallRoutesShowOptionResultV2(nil).Load(map[string]any{"id": "call_routes_show_option_result_v2_id", "call_route_id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesShowOptionResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesUpdateAllowedCallerResultV2Entity

```go
callRoutesUpdateAllowedCallerResultV2 := client.CallRoutesUpdateAllowedCallerResultV2(nil)
fmt.Println(callRoutesUpdateAllowedCallerResultV2.GetName()) // "call_routes_update_allowed_caller_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CallRoutesUpdateAllowedCallerResultV2(nil).Update(map[string]any{
    "call_route_id": "call_route_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesUpdateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesUpdateOptionResultV2Entity

```go
callRoutesUpdateOptionResultV2 := client.CallRoutesUpdateOptionResultV2(nil)
fmt.Println(callRoutesUpdateOptionResultV2.GetName()) // "call_routes_update_option_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `[]any` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CallRoutesUpdateOptionResultV2(nil).Update(map[string]any{
    "call_route_id": "call_route_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesUpdateOptionResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallRoutesV2Entity

```go
callRoutesV2 := client.CallRoutesV2(nil)
fmt.Println(callRoutesV2.GetName()) // "call_routes_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.CallRoutesV2(nil).Remove(map[string]any{"id": "call_routes_v2_id", "call_route_id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallRoutesV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallSessionEntity

```go
callSession := client.CallSession(nil)
fmt.Println(callSession.GetName()) // "call_session"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `string` | No | When the call session ended. |
| `id` | `string` | Yes | Unique identifier for this call session |
| `incident_id` | `string` | Yes | The incident this call session belongs to |
| `started_at` | `string` | Yes | When the call session started |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CallSession(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallSessionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CallTranscriptEntryEntity

```go
callTranscriptEntry := client.CallTranscriptEntry(nil)
fmt.Println(callTranscriptEntry.GetName()) // "call_transcript_entry"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CallTranscriptEntry(nil).List(map[string]any{"call_session_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CallTranscriptEntryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CatalogEntryEntity

```go
catalogEntry := client.CatalogEntry(nil)
fmt.Println(catalogEntry.GetName()) // "catalog_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `[]any` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | No | When this entry was archived |
| `attribute_values` | `map[string]any` | Yes | Values of this entry |
| `catalog_entry` | `map[string]any` | Yes |  |
| `catalog_type` | `map[string]any` | Yes |  |
| `catalog_type_id` | `string` | Yes | ID of this catalog type |
| `created_at` | `string` | Yes | When this entry was created |
| `external_id` | `string` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | Yes | ID of this catalog entry |
| `name` | `string` | Yes | Name is the human readable name of this entry |
| `rank` | `int` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `[]any` | No | If provided, only update these attribute_values keys. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CatalogEntry(nil).List(map[string]any{"catalog_type_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CatalogEntry(nil).Load(map[string]any{"id": "catalog_entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CatalogEntry(nil).Create(map[string]any{
    "attribute_values": map[string]any{},
    "catalog_entry": map[string]any{},
    "catalog_type": map[string]any{},
    "catalog_type_id": "example_catalog_type_id",
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CatalogEntry(nil).Update(map[string]any{
    "id": "catalog_entry_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CatalogResourceEntity

```go
catalogResource := client.CatalogResource(nil)
fmt.Println(catalogResource.GetName()) // "catalog_resource"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CatalogResource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CatalogTypeEntity

```go
catalogType := client.CatalogType(nil)
fmt.Println(catalogType.GetName()) // "catalog_type"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | Yes | Annotations that can track metadata about this type |
| `categories` | `[]any` | Yes | What categories is this type considered part of |
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
| `owning_team_ids` | `[]any` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `[]any` | No | If populated, the integrations required for this type |
| `schema` | `map[string]any` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CatalogType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CatalogType(nil).Load(map[string]any{"id": "catalog_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CatalogType(nil).Create(map[string]any{
    "annotations": map[string]any{},
    "categories": []any{},
    "color": "example_color",
    "created_at": "example_created_at",
    "description": "example_description",
    "engine_resource_type": "example_engine_resource_type",
    "icon": "example_icon",
    "id": "example_id",
    "is_editable": true,
    "name": "example_name",
    "ranked": true,
    "schema": map[string]any{},
    "semantic_type": "example_semantic_type",
    "type_name": "example_type_name",
    "updated_at": "example_updated_at",
    "use_name_as_identifier": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CatalogType(nil).Update(map[string]any{
    "id": "catalog_type_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CatalogTypeSchemaEntity

```go
catalogTypeSchema := client.CatalogTypeSchema(nil)
fmt.Println(catalogTypeSchema.GetName()) // "catalog_type_schema"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | Yes | Annotations that can track metadata about this type |
| `attributes` | `[]any` | Yes |  |
| `categories` | `[]any` | Yes | What categories is this type considered part of |
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
| `owning_team_ids` | `[]any` | No | IDs of the teams that own this catalog type |
| `ranked` | `bool` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `[]any` | No | If populated, the integrations required for this type |
| `schema` | `map[string]any` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `bool` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `int` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CatalogTypeSchema(nil).Create(map[string]any{
    "catalog_type_id": "example_catalog_type_id",
    "annotations": map[string]any{},
    "attributes": []any{},
    "categories": []any{},
    "color": "example_color",
    "created_at": "example_created_at",
    "description": "example_description",
    "engine_resource_type": "example_engine_resource_type",
    "icon": "example_icon",
    "id": "example_id",
    "is_editable": true,
    "name": "example_name",
    "ranked": true,
    "schema": map[string]any{},
    "semantic_type": "example_semantic_type",
    "type_name": "example_type_name",
    "updated_at": "example_updated_at",
    "use_name_as_identifier": true,
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomFieldEntity

```go
customField := client.CustomField(nil)
fmt.Println(customField.GetName()) // "custom_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the custom field |
| `field_type` | `string` | Yes | Type of custom field |
| `filter_by` | `map[string]any` | Yes |  |
| `fixed_filter` | `map[string]any` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | No | Which catalog attribute provides helptext for the options |
| `id` | `string` | Yes | Unique identifier for the custom field |
| `name` | `string` | Yes | Human readable name for the custom field |
| `options` | `[]any` | Yes | What options are available for this custom field, if this field has options |
| `required` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `bool` | Yes | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `bool` | Yes | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `bool` | Yes | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `bool` | No | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `string` | Yes | When the action was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "description": "example_description",
    "field_type": "example_field_type",
    "filter_by": map[string]any{},
    "fixed_filter": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "options": []any{},
    "show_before_closure": true,
    "show_before_creation": true,
    "show_before_update": true,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CustomField(nil).Update(map[string]any{
    "id": "custom_field_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.CustomField(nil).Remove(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## CustomFieldOptionEntity

```go
customFieldOption := client.CustomFieldOption(nil)
fmt.Println(customFieldOption.GetName()) // "custom_field_option"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.CustomFieldOption(nil).List(map[string]any{"custom_field_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.CustomFieldOption(nil).Load(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.CustomFieldOption(nil).Create(map[string]any{
    "custom_field_id": "example_custom_field_id",
    "id": "example_id",
    "sort_key": 1,
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.CustomFieldOption(nil).Update(map[string]any{
    "id": "custom_field_option_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.CustomFieldOption(nil).Remove(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EscalationEntity

```go
escalation := client.Escalation(nil)
fmt.Println(escalation.GetName()) // "escalation"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this escalation was created |
| `creator` | `map[string]any` | Yes | The creator of this escalation. |
| `description` | `string` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `[]any` | Yes | Events which describe the history of this escalation. |
| `id` | `string` | Yes | Unique ID of the escalation |
| `idempotency_key` | `string` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | No | ID of an incident to associate with this escalation. |
| `priority` | `map[string]any` | Yes | The priority associated with this escalation. |
| `related_alerts` | `[]any` | Yes | Alerts related to this escalation |
| `related_incidents` | `[]any` | Yes | Incidents related to this escalation |
| `status` | `string` | Yes | Status of the escalation |
| `title` | `string` | Yes | The title of this escalation |
| `updated_at` | `string` | Yes | When this escalation was last updated |
| `user_ids` | `[]any` | No | IDs of users to escalate directly to |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Escalation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Escalation(nil).Load(map[string]any{"id": "escalation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Escalation(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "description": "example_description",
    "events": []any{},
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "priority": map[string]any{},
    "related_alerts": []any{},
    "related_incidents": []any{},
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EscalationEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EscalationPathTemplateEntity

```go
escalationPathTemplate := client.EscalationPathTemplate(nil)
fmt.Println(escalationPathTemplate.GetName()) // "escalation_path_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of what this template is for. |
| `expressions` | `[]any` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `bool` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `string` | Yes | Unique identifier for this template. |
| `name` | `string` | Yes | The name of this template. |
| `params` | `[]any` | Yes | The parameters declared by this template. |
| `path` | `[]any` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `map[string]any` | Yes |  |
| `working_hours` | `[]any` | No | The working hours for this template. |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.EscalationPathTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.EscalationPathTemplate(nil).Load(map[string]any{"id": "escalation_path_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.EscalationPathTemplate(nil).Create(map[string]any{
    "expressions": []any{},
    "has_historical_escalation_path_versions": true,
    "id": "example_id",
    "name": "example_name",
    "params": []any{},
    "path": []any{},
    "repeat_config": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.EscalationPathTemplate(nil).Update(map[string]any{
    "id": "escalation_path_template_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.EscalationPathTemplate(nil).Remove(map[string]any{"id": "escalation_path_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EscalationPathTemplateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```go
escalationsCheckEscalationPermissionsResultV2 := client.EscalationsCheckEscalationPermissionsResultV2(nil)
fmt.Println(escalationsCheckEscalationPermissionsResultV2.GetName()) // "escalations_check_escalation_permissions_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `[]any` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `[]any` | Yes | The IDs of the users to check response options for |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.EscalationsCheckEscalationPermissionsResultV2(nil).Create(map[string]any{
    "escalation_id": "example_escalation_id",
    "response_options": []any{},
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## EscalationsReassignEscalationResultV2Entity

```go
escalationsReassignEscalationResultV2 := client.EscalationsReassignEscalationResultV2(nil)
fmt.Println(escalationsReassignEscalationResultV2.GetName()) // "escalations_reassign_escalation_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Additional details about the new escalation. |
| `escalation_path_id` | `string` | No | ID of the escalation path to reassign to |
| `resolve_original` | `bool` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | No | The title of the new escalation. |
| `user_ids` | `[]any` | No | IDs of users to reassign directly to |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.EscalationsReassignEscalationResultV2(nil).Create(map[string]any{
    "escalation_id": "example_escalation_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## FollowUpEntity

```go
followUp := client.FollowUp(nil)
fmt.Println(followUp.GetName()) // "follow_up"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `map[string]any` | Yes |  |
| `assignee_team_id` | `string` | No | ID of the team this follow-up is assigned to |
| `category` | `map[string]any` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `map[string]any` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `map[string]any` | Yes |  |
| `external_issue_reference_id` | `string` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | No | ID of the priority for this follow-up |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `[]any` | Yes | Labels associated with this follow-up |
| `priority` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.FollowUp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.FollowUp(nil).Load(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.FollowUp(nil).Create(map[string]any{
    "assignee": map[string]any{},
    "assignee_team": map[string]any{},
    "category": map[string]any{},
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "external_issue_reference": map[string]any{},
    "id": "example_id",
    "incident_id": "example_incident_id",
    "labels": []any{},
    "priority": map[string]any{},
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.FollowUp(nil).Update(map[string]any{
    "id": "follow_up_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.FollowUp(nil).Remove(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## FollowUpsConnectExternalIssueResultV3Entity

```go
followUpsConnectExternalIssueResultV3 := client.FollowUpsConnectExternalIssueResultV3(nil)
fmt.Println(followUpsConnectExternalIssueResultV3.GetName()) // "follow_ups_connect_external_issue_result_v3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `map[string]any` | Yes |  |
| `assignee_team` | `map[string]any` | Yes |  |
| `category` | `map[string]any` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `map[string]any` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `[]any` | Yes | Labels associated with this follow-up |
| `priority` | `map[string]any` | Yes |  |
| `provider` | `string` | Yes | The issue tracker provider the issue belongs to |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.FollowUpsConnectExternalIssueResultV3(nil).Create(map[string]any{
    "follow_up_id": "example_follow_up_id",
    "assignee": map[string]any{},
    "assignee_team": map[string]any{},
    "category": map[string]any{},
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "external_issue_reference": map[string]any{},
    "id": "example_id",
    "incident_id": "example_incident_id",
    "labels": []any{},
    "priority": map[string]any{},
    "provider": "example_provider",
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## FollowUpsCreateFromLinkResultV3Entity

```go
followUpsCreateFromLinkResultV3 := client.FollowUpsCreateFromLinkResultV3(nil)
fmt.Println(followUpsCreateFromLinkResultV3.GetName()) // "follow_ups_create_from_link_result_v3"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.FollowUpsCreateFromLinkResultV3(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IdentityEntity

```go
identity := client.Identity(nil)
fmt.Println(identity.GetName()) // "identity"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `string` | Yes | The dashboard URL for this organisation |
| `name` | `string` | Yes | The name assigned to the current API Key |
| `roles` | `[]any` | Yes | Which roles have been enabled for this key |
| `team_roles` | `[]any` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `[]any` | Yes | Teams that this API key is scoped to. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Identity(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdentityEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentEntity

```go
incident := client.Incident(nil)
fmt.Println(incident.GetName()) // "incident"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No | The call URL attached to this incident |
| `created_at` | `string` | Yes | When the incident was created |
| `creator` | `map[string]any` | Yes |  |
| `custom_field_entries` | `[]any` | Yes | Custom field entries for this incident |
| `debriefs` | `[]any` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `[]any` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `map[string]any` | Yes |  |
| `has_debrief` | `bool` | No | If this incident has a debrief attached |
| `id` | `string` | Yes | Unique identifier for the incident |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `[]any` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `map[string]any` | Yes |  |
| `incident_status_id` | `string` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `[]any` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `map[string]any` | Yes |  |
| `incident_type_id` | `string` | No | Incident type to create this incident as |
| `last_activity_at` | `string` | Yes | When the incident last recorded 'activity' |
| `mode` | `string` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | No | URL to link to the Microsoft Teams channel |
| `name` | `string` | Yes | Explanation of the incident |
| `permalink` | `string` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `[]any` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | No | The URL of the incident post-mortem document |
| `reference` | `string` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `map[string]any` | No |  |
| `severity` | `map[string]any` | Yes |  |
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
| `team_ids` | `[]any` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `[]any` | No | Incident lifecycle events and when they last occurred |
| `updated_at` | `string` | Yes | When the incident was last updated |
| `visibility` | `string` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `float64` | No | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `float64` | No | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `float64` | No | Amount of time spent on the incident in total |
| `workload_minutes_working` | `float64` | No | Amount of time spent on the incident in working hours |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Incident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Incident(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "custom_field_entries": []any{},
    "external_issue_reference": map[string]any{},
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "incident_role_assignments": []any{},
    "incident_status": map[string]any{},
    "incident_type": map[string]any{},
    "last_activity_at": "example_last_activity_at",
    "mode": "example_mode",
    "name": "example_name",
    "reference": "example_reference",
    "severity": map[string]any{},
    "slack_channel_id": "example_slack_channel_id",
    "slack_team_id": "example_slack_team_id",
    "status": "example_status",
    "team_ids": []any{},
    "updated_at": "example_updated_at",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentActivityLogEntryEntity

```go
incidentActivityLogEntry := client.IncidentActivityLogEntry(nil)
fmt.Println(incidentActivityLogEntry.GetName()) // "incident_activity_log_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `map[string]any` | No | Details of an activity log entry. |
| `created_at` | `string` | Yes | When we recorded the activity |
| `id` | `string` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `string` | Yes | ID of the incident this happened on. |
| `occurred_at` | `string` | Yes | When the activity happened. |
| `title` | `string` | Yes | Human-readable summary of what happened |
| `type` | `string` | Yes | What kind of activity this is. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentActivityLogEntry(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentActivityLogEntryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentAttachmentEntity

```go
incidentAttachment := client.IncidentAttachment(nil)
fmt.Println(incidentAttachment.GetName()) // "incident_attachment"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident membership |
| `incident_id` | `string` | Yes | ID of the incident to add an attachment to |
| `resource` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentAttachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentAttachment(nil).Create(map[string]any{
    "id": "example_id",
    "incident_id": "example_incident_id",
    "resource": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.IncidentAttachment(nil).Remove(map[string]any{"id": "incident_attachment_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentFormEntity

```go
incidentForm := client.IncidentForm(nil)
fmt.Println(incidentForm.GetName()) // "incident_form"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident form was created |
| `expressions` | `[]any` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Yes | Which form this is. |
| `id` | `string` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `string` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `[]any` | No | Elements on this form, in display order. |
| `updated_at` | `string` | Yes | When this incident form was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentForm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentForm(nil).Load(map[string]any{"id": "incident_form_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentForm(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "expressions": []any{},
    "form_type": "example_form_type",
    "id": "example_id",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IncidentForm(nil).Update(map[string]any{
    "id": "incident_form_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.IncidentForm(nil).Remove(map[string]any{"id": "incident_form_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentFormEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentMembershipEntity

```go
incidentMembership := client.IncidentMembership(nil)
fmt.Println(incidentMembership.GetName()) // "incident_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | The incident to make the user a member of |
| `user_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentMembership(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "user_id": "example_user_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentParticipantEntity

```go
incidentParticipant := client.IncidentParticipant(nil)
fmt.Println(incidentParticipant.GetName()) // "incident_participant"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `[]any` | Yes | Participants who are actively helping with the incident |
| `passive` | `[]any` | Yes | Participants who are just observing the incident |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentParticipant(nil).Load(map[string]any{"incident_id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```go
incidentParticipantWorkload := client.IncidentParticipantWorkload(nil)
fmt.Println(incidentParticipantWorkload.GetName()) // "incident_participant_workload"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | No | The role they had in the incident |
| `user` | `map[string]any` | Yes |  |
| `workload` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentParticipantWorkload(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentRelationshipEntity

```go
incidentRelationship := client.IncidentRelationship(nil)
fmt.Println(incidentRelationship.GetName()) // "incident_relationship"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident relationship |
| `incident` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentRelationship(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentRoleEntity

```go
incidentRole := client.IncidentRole(nil)
fmt.Println(incidentRole.GetName()) // "incident_role"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the role was created |
| `description` | `string` | Yes | Describes the purpose of the role |
| `id` | `string` | Yes | Unique identifier for the role |
| `instructions` | `string` | Yes | Provided to whoever is nominated for the role. |
| `name` | `string` | Yes | Human readable name of the incident role |
| `required` | `bool` | No | DEPRECATED: this will always be false. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentRole(nil).Load(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentRole(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "description": "example_description",
    "id": "example_id",
    "instructions": "example_instructions",
    "name": "example_name",
    "role_type": "example_role_type",
    "shortform": "example_shortform",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IncidentRole(nil).Update(map[string]any{
    "id": "incident_role_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.IncidentRole(nil).Remove(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentStatusEntity

```go
incidentStatus := client.IncidentStatus(nil)
fmt.Println(incidentStatus.GetName()) // "incident_status"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentStatus(nil).Load(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentStatus(nil).Create(map[string]any{
    "category": "example_category",
    "created_at": "example_created_at",
    "description": "example_description",
    "id": "example_id",
    "name": "example_name",
    "rank": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IncidentStatus(nil).Update(map[string]any{
    "id": "incident_status_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.IncidentStatus(nil).Remove(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTeamMembershipEntity

```go
incidentTeamMembership := client.IncidentTeamMembership(nil)
fmt.Println(incidentTeamMembership.GetName()) // "incident_team_membership"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTeamMembership(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "team_id": "example_team_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTeamMembershipEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTeamMembershipsV1Entity

```go
incidentTeamMembershipsV1 := client.IncidentTeamMembershipsV1(nil)
fmt.Println(incidentTeamMembershipsV1.GetName()) // "incident_team_memberships_v1"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Revoke team access to this incident |
| `team_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTeamMembershipsV1(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "team_id": "example_team_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTeamMembershipsV1Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTemplateEntity

```go
incidentTemplate := client.IncidentTemplate(nil)
fmt.Println(incidentTemplate.GetName()) // "incident_template"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident template was created |
| `expressions` | `[]any` | No | The expressions used by bindings in this template |
| `id` | `string` | Yes | Unique identifier for this incident template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `map[string]any` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | Yes | When this incident template was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentTemplate(nil).Load(map[string]any{"id": "incident_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTemplate(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "template": map[string]any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTemplate(nil).Update(map[string]any{
    "id": "incident_template_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.IncidentTemplate(nil).Remove(map[string]any{"id": "incident_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTemplateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTemplatesValidateResultV1Entity

```go
incidentTemplatesValidateResultV1 := client.IncidentTemplatesValidateResultV1(nil)
fmt.Println(incidentTemplatesValidateResultV1.GetName()) // "incident_templates_validate_result_v1"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `[]any` | No | The expressions used by bindings in this template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `map[string]any` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `[]any` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTemplatesValidateResultV1(nil).Create(map[string]any{
    "name": "example_name",
    "template": map[string]any{},
    "warnings": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTimelineItemEntity

```go
incidentTimelineItem := client.IncidentTimelineItem(nil)
fmt.Println(incidentTimelineItem.GetName()) // "incident_timeline_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `string` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | Yes | When this item was added to the timeline |
| `creator` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentTimelineItem(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTimelineItem(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "incident_id": "example_incident_id",
    "timestamp": "example_timestamp",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IncidentTimelineItem(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTimelineItemEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTimestampEntity

```go
incidentTimestamp := client.IncidentTimestamp(nil)
fmt.Println(incidentTimestamp.GetName()) // "incident_timestamp"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique ID of this incident timestamp |
| `name` | `string` | Yes | Unique name of this timestamp |
| `rank` | `int` | Yes | Order in which this timestamp should be shown |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentTimestamp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentTimestamp(nil).Load(map[string]any{"id": "incident_timestamp_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentTypeEntity

```go
incidentType := client.IncidentType(nil)
fmt.Println(incidentType.GetName()) // "incident_type"
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
| `owning_team_ids` | `[]any` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `bool` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | Yes | When this resource was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IncidentType(nil).Load(map[string]any{"id": "incident_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IncidentUpdateEntity

```go
incidentUpdate := client.IncidentUpdate(nil)
fmt.Println(incidentUpdate.GetName()) // "incident_update"
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
| `new_incident_status` | `map[string]any` | Yes |  |
| `new_severity` | `map[string]any` | Yes |  |
| `to_incident_status_id` | `string` | No | Move the incident to this status |
| `to_severity_id` | `string` | No | Move the incident to this severity |
| `updater` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IncidentUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.IncidentUpdate(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "incident_id": "example_incident_id",
    "new_incident_status": map[string]any{},
    "new_severity": map[string]any{},
    "updater": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IpAllowlistEntity

```go
ipAllowlist := client.IpAllowlist(nil)
fmt.Println(ipAllowlist.GetName()) // "ip_allowlist"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `[]any` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `bool` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | No | The time this allowlist was last updated |
| `version` | `int` | Yes | The version of this IP allowlist |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.IpAllowlist(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.IpAllowlist(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## IpRangeEntity

```go
ipRange := client.IpRange(nil)
fmt.Println(ipRange.GetName()) // "ip_range"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `string` | Yes | The address in CIDR notation. |
| `description` | `string` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.IpRange(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IpRangeEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## MaintenanceWindowEntity

```go
maintenanceWindow := client.MaintenanceWindow(nil)
fmt.Println(maintenanceWindow.GetName()) // "maintenance_window"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_groups` | `[]any` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | No | When this maintenance window was archived, if it has been |
| `created_at` | `string` | Yes | When this maintenance window was created |
| `end_at` | `string` | Yes | When the maintenance window ends |
| `escalation_targets` | `[]any` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `string` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | Human readable name for the maintenance window |
| `notification_message` | `string` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `[]any` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `int` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `int` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `[]any` | No | IDs of teams that own this maintenance window. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.MaintenanceWindow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.MaintenanceWindow(nil).Load(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.MaintenanceWindow(nil).Create(map[string]any{
    "alert_condition_groups": []any{},
    "created_at": "example_created_at",
    "end_at": "example_end_at",
    "id": "example_id",
    "lead": map[string]any{},
    "name": "example_name",
    "reroute_on_end": true,
    "resolve_on_end": true,
    "show_in_sidebar": true,
    "start_at": "example_start_at",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.MaintenanceWindow(nil).Update(map[string]any{
    "id": "maintenance_window_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.MaintenanceWindow(nil).Remove(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OnCallNotificationMethodPublicV2Entity

```go
onCallNotificationMethodPublicV2 := client.OnCallNotificationMethodPublicV2(nil)
fmt.Println(onCallNotificationMethodPublicV2.GetName()) // "on_call_notification_method_public_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The address of this method (e.g. |
| `id` | `string` | Yes | Unique identifier for this notification method |
| `is_usable` | `bool` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone_details` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.OnCallNotificationMethodPublicV2(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## OnCallNotificationRulePublicV2Entity

```go
onCallNotificationRulePublicV2 := client.OnCallNotificationRulePublicV2(nil)
fmt.Println(onCallNotificationRulePublicV2.GetName()) // "on_call_notification_rule_public_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `map[string]any` | Yes |  |
| `delay_seconds` | `int` | No | Delay in seconds before this rule activates. |
| `id` | `string` | Yes | Unique identifier for this notification rule |
| `method_target` | `map[string]any` | Yes |  |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone` | `map[string]any` | Yes |  |
| `rule_type` | `string` | Yes | The urgency level this rule applies to |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.OnCallNotificationRulePublicV2(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigEntity

```go
payConfig := client.PayConfig(nil)
fmt.Println(payConfig.GetName()) // "pay_config"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `int` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` | Yes |  |
| `currency` | `string` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Yes | Unique identifier for this pay config |
| `name` | `string` | Yes | Human readable name for this pay config |
| `one_off_rules` | `[]any` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | No | When a published report first priced against this config. |
| `rate_time_unit` | `string` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` | Yes |  |
| `weekly_rules` | `[]any` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PayConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PayConfig(nil).Load(map[string]any{"id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayConfig(nil).Create(map[string]any{
    "base_rate_cents": 1,
    "created_at": "example_created_at",
    "currency": "example_currency",
    "id": "example_id",
    "name": "example_name",
    "one_off_rules": []any{},
    "rate_time_unit": "example_rate_time_unit",
    "timezone": "example_timezone",
    "updated_at": "example_updated_at",
    "weekly_rules": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.PayConfig(nil).Update(map[string]any{
    "id": "pay_config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.PayConfig(nil).Remove(map[string]any{"id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsCreateOneOffRuleResultV2Entity

```go
payConfigsCreateOneOffRuleResultV2 := client.PayConfigsCreateOneOffRuleResultV2(nil)
fmt.Println(payConfigsCreateOneOffRuleResultV2.GetName()) // "pay_configs_create_one_off_rule_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayConfigsCreateOneOffRuleResultV2(nil).Create(map[string]any{
    "pay_config_id": "example_pay_config_id",
    "end_at": "example_end_at",
    "name": "example_name",
    "rate_cents": 1,
    "start_at": "example_start_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsCreateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsCreateWeeklyRuleResultV2Entity

```go
payConfigsCreateWeeklyRuleResultV2 := client.PayConfigsCreateWeeklyRuleResultV2(nil)
fmt.Println(payConfigsCreateWeeklyRuleResultV2.GetName()) // "pay_configs_create_weekly_rule_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `[]any` | Yes | Days of the week this rule applies on |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayConfigsCreateWeeklyRuleResultV2(nil).Create(map[string]any{
    "pay_config_id": "example_pay_config_id",
    "end_time": "example_end_time",
    "rate_cents": 1,
    "start_time": "example_start_time",
    "weekdays": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsCreateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsListOneOffRulesResultV2Entity

```go
payConfigsListOneOffRulesResultV2 := client.PayConfigsListOneOffRulesResultV2(nil)
fmt.Println(payConfigsListOneOffRulesResultV2.GetName()) // "pay_configs_list_one_off_rules_result_v2"
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PayConfigsListOneOffRulesResultV2(nil).List(map[string]any{"pay_config_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsListOneOffRulesResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsListWeeklyRulesResultV2Entity

```go
payConfigsListWeeklyRulesResultV2 := client.PayConfigsListWeeklyRulesResultV2(nil)
fmt.Println(payConfigsListWeeklyRulesResultV2.GetName()) // "pay_configs_list_weekly_rules_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `[]any` | Yes | Days of the week this rule applies on |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PayConfigsListWeeklyRulesResultV2(nil).List(map[string]any{"pay_config_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsListWeeklyRulesResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsShowOneOffRuleResultV2Entity

```go
payConfigsShowOneOffRuleResultV2 := client.PayConfigsShowOneOffRuleResultV2(nil)
fmt.Println(payConfigsShowOneOffRuleResultV2.GetName()) // "pay_configs_show_one_off_rule_result_v2"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PayConfigsShowOneOffRuleResultV2(nil).Load(map[string]any{"id": "pay_configs_show_one_off_rule_result_v2_id", "pay_config_id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsShowOneOffRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsShowWeeklyRuleResultV2Entity

```go
payConfigsShowWeeklyRuleResultV2 := client.PayConfigsShowWeeklyRuleResultV2(nil)
fmt.Println(payConfigsShowWeeklyRuleResultV2.GetName()) // "pay_configs_show_weekly_rule_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `[]any` | Yes | Days of the week this rule applies on |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PayConfigsShowWeeklyRuleResultV2(nil).Load(map[string]any{"id": "pay_configs_show_weekly_rule_result_v2_id", "pay_config_id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsShowWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsUpdateOneOffRuleResultV2Entity

```go
payConfigsUpdateOneOffRuleResultV2 := client.PayConfigsUpdateOneOffRuleResultV2(nil)
fmt.Println(payConfigsUpdateOneOffRuleResultV2.GetName()) // "pay_configs_update_one_off_rule_result_v2"
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.PayConfigsUpdateOneOffRuleResultV2(nil).Update(map[string]any{
    "id": "id",
    "pay_config_id": "pay_config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsUpdateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsUpdateWeeklyRuleResultV2Entity

```go
payConfigsUpdateWeeklyRuleResultV2 := client.PayConfigsUpdateWeeklyRuleResultV2(nil)
fmt.Println(payConfigsUpdateWeeklyRuleResultV2.GetName()) // "pay_configs_update_weekly_rule_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `[]any` | Yes | Days of the week this rule applies on |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.PayConfigsUpdateWeeklyRuleResultV2(nil).Update(map[string]any{
    "id": "id",
    "pay_config_id": "pay_config_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsUpdateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayConfigsV2Entity

```go
payConfigsV2 := client.PayConfigsV2(nil)
fmt.Println(payConfigsV2.GetName()) // "pay_configs_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.PayConfigsV2(nil).Remove(map[string]any{"id": "pay_configs_v2_id", "pay_config_id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayConfigsV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayReportEntity

```go
payReport := client.PayReport(nil)
fmt.Println(payReport.GetName()) // "pay_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `map[string]any` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `map[string]any` | Yes |  |
| `pay_config_id` | `string` | No | The pay config to price every shift with. |
| `published_at` | `string` | No | When this report was published. |
| `rotation_filters` | `[]any` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `[]any` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PayReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PayReport(nil).Load(map[string]any{"id": "pay_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayReport(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "end_date": "example_end_date",
    "id": "example_id",
    "name": "example_name",
    "overlapping_shifts": "example_overlapping_shifts",
    "pay_config_expression": map[string]any{},
    "schedule_ids": []any{},
    "start_date": "example_start_date",
    "status": "example_status",
    "unpaid_shifts": "example_unpaid_shifts",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.PayReport(nil).Remove(map[string]any{"id": "pay_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayReportEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayReportsPublishResultV2Entity

```go
payReportsPublishResultV2 := client.PayReportsPublishResultV2(nil)
fmt.Println(payReportsPublishResultV2.GetName()) // "pay_reports_publish_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `[]any` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `map[string]any` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `[]any` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `string` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayReportsPublishResultV2(nil).Create(map[string]any{
    "pay_report_id": "example_pay_report_id",
    "cc_emails": []any{},
    "created_at": "example_created_at",
    "end_date": "example_end_date",
    "id": "example_id",
    "name": "example_name",
    "overlapping_shifts": "example_overlapping_shifts",
    "schedule_ids": []any{},
    "send_user_breakdowns": "example_send_user_breakdowns",
    "start_date": "example_start_date",
    "status": "example_status",
    "unpaid_shifts": "example_unpaid_shifts",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayReportsPublishResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayReportsUnpublishResultV2Entity

```go
payReportsUnpublishResultV2 := client.PayReportsUnpublishResultV2(nil)
fmt.Println(payReportsUnpublishResultV2.GetName()) // "pay_reports_unpublish_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `map[string]any` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `[]any` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `int` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Yes | Why this report is being unpublished |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PayReportsUnpublishResultV2(nil).Create(map[string]any{
    "pay_report_id": "example_pay_report_id",
    "created_at": "example_created_at",
    "end_date": "example_end_date",
    "id": "example_id",
    "name": "example_name",
    "overlapping_shifts": "example_overlapping_shifts",
    "schedule_ids": []any{},
    "start_date": "example_start_date",
    "status": "example_status",
    "unpaid_shifts": "example_unpaid_shifts",
    "unpublish_reason": "example_unpublish_reason",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayReportsUnpublishResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PayReportsV2Entity

```go
payReportsV2 := client.PayReportsV2(nil)
fmt.Println(payReportsV2.GetName()) // "pay_reports_v2"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PayReportsV2(nil).Load(map[string]any{"pay_report_id": "pay_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PayReportsV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PoliciesV2Entity

```go
policiesV2 := client.PoliciesV2(nil)
fmt.Println(policiesV2.GetName()) // "policies_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.PoliciesV2(nil).Remove(map[string]any{"id": "policies_v2_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PoliciesV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PolicyEntity

```go
policy := client.Policy(nil)
fmt.Println(policy.GetName()) // "policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `map[string]any` | Yes |  |
| `conditions` | `[]any` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` | Yes |  |
| `debrief` | `map[string]any` | Yes | Set when policy_type is debrief. |
| `description` | `string` | No | Human readable description of the policy |
| `expressions` | `[]any` | No | The expressions relating to this policy |
| `follow_up` | `map[string]any` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the policy |
| `name` | `string` | Yes | Human readable name of the policy |
| `on_call_readiness` | `map[string]any` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `map[string]any` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `map[string]any` | Yes | Detects gaps in on-call coverage. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Policy(nil).Load(map[string]any{"id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Policy(nil).Create(map[string]any{
    "assignment_rules": map[string]any{},
    "conditions": []any{},
    "created_at": "example_created_at",
    "debrief": map[string]any{},
    "follow_up": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "policy_type": "example_policy_type",
    "post_mortem": map[string]any{},
    "schedule": map[string]any{},
    "status": "example_status",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Policy(nil).Update(map[string]any{
    "id": "policy_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PolicyFindingEntity

```go
policyFinding := client.PolicyFinding(nil)
fmt.Println(policyFinding.GetName()) // "policy_finding"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `map[string]any` | Yes | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `[]any` | Yes | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `map[string]any` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PolicyFinding(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PolicyFinding(nil).Load(map[string]any{"id": "policy_finding_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyFindingEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PolicyFindingsDismissResultV2Entity

```go
policyFindingsDismissResultV2 := client.PolicyFindingsDismissResultV2(nil)
fmt.Println(policyFindingsDismissResultV2.GetName()) // "policy_findings_dismiss_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `map[string]any` | Yes | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Yes | Set when policy_type is post_mortem. |
| `reason` | `string` | Yes | Why this finding is being dismissed |
| `responsible_users` | `[]any` | Yes | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `map[string]any` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PolicyFindingsDismissResultV2(nil).Create(map[string]any{
    "policy_finding_id": "example_policy_finding_id",
    "created_at": "example_created_at",
    "debrief": map[string]any{},
    "dismissal": map[string]any{},
    "follow_up": map[string]any{},
    "id": "example_id",
    "last_checked_at": "example_last_checked_at",
    "on_call_readiness": map[string]any{},
    "policy_id": "example_policy_id",
    "policy_type": "example_policy_type",
    "post_mortem": map[string]any{},
    "reason": "example_reason",
    "responsible_users": []any{},
    "schedule": map[string]any{},
    "shift_conflict": map[string]any{},
    "state": "example_state",
    "updated_at": "example_updated_at",
    "vacation_conflict": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PolicyFindingsRestoreResultV2Entity

```go
policyFindingsRestoreResultV2 := client.PolicyFindingsRestoreResultV2(nil)
fmt.Println(policyFindingsRestoreResultV2.GetName()) // "policy_findings_restore_result_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `int` | No | Days outside the policy's due date |
| `debrief` | `map[string]any` | Yes | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `[]any` | Yes | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `map[string]any` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.PolicyFindingsRestoreResultV2(nil).Create(map[string]any{
    "policy_finding_id": "example_policy_finding_id",
    "created_at": "example_created_at",
    "debrief": map[string]any{},
    "dismissal": map[string]any{},
    "follow_up": map[string]any{},
    "id": "example_id",
    "last_checked_at": "example_last_checked_at",
    "on_call_readiness": map[string]any{},
    "policy_id": "example_policy_id",
    "policy_type": "example_policy_type",
    "post_mortem": map[string]any{},
    "responsible_users": []any{},
    "schedule": map[string]any{},
    "shift_conflict": map[string]any{},
    "state": "example_state",
    "updated_at": "example_updated_at",
    "vacation_conflict": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## PostmortemDocumentEntity

```go
postmortemDocument := client.PostmortemDocument(nil)
fmt.Println(postmortemDocument.GetName()) // "postmortem_document"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Timestamp for when the document was created |
| `document_url` | `string` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `[]any` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `[]any` | Yes | URLs of any external locations this document has been exported to |
| `id` | `string` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `string` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | Yes | The current status of this post-mortem document |
| `title` | `string` | Yes | The display title of the post-mortem document |
| `type` | `string` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Yes | Timestamp for when the document was last updated |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.PostmortemDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.PostmortemDocument(nil).Load(map[string]any{"id": "postmortem_document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.PostmortemDocument(nil).Update(map[string]any{
    "id": "postmortem_document_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleEntity

```go
schedule := client.Schedule(nil)
fmt.Println(schedule.GetName()) // "schedule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | Yes | Annotations that track metadata about this resource |
| `config` | `map[string]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shifts` | `[]any` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique internal ID of the schedule |
| `name` | `string` | Yes | Human readable name synced from external provider |
| `next_shifts` | `[]any` | No | The shifts after the next changeover. |
| `permalink` | `string` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `[]any` | Yes | IDs of teams that own this schedule |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Schedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Schedule(nil).Load(map[string]any{"id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Schedule(nil).Create(map[string]any{
    "annotations": map[string]any{},
    "config": map[string]any{},
    "created_at": "example_created_at",
    "holidays_public_config": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "permalink": "example_permalink",
    "team_ids": []any{},
    "timezone": "example_timezone",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Schedule(nil).Update(map[string]any{
    "id": "schedule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Schedule(nil).Remove(map[string]any{"id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleEntriesListPayloadV2Entity

```go
scheduleEntriesListPayloadV2 := client.ScheduleEntriesListPayloadV2(nil)
fmt.Println(scheduleEntriesListPayloadV2.GetName()) // "schedule_entries_list_payload_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `string` | No | The end of the window to preview entries for. |
| `entry_window_start` | `string` | No | The start of the window to preview entries for. |
| `final` | `[]any` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `[]any` | Yes | Overrides that apply within the requested window |
| `schedule` | `map[string]any` | Yes |  |
| `scheduled` | `[]any` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleEntriesListPayloadV2(nil).Create(map[string]any{
    "schedule_id": "example_schedule_id",
    "final": []any{},
    "overrides": []any{},
    "schedule": map[string]any{},
    "scheduled": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleEntryEntity

```go
scheduleEntry := client.ScheduleEntry(nil)
fmt.Println(scheduleEntry.GetName()) // "schedule_entry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `map[string]any` | Yes |  |
| `schedule_entries` | `map[string]any` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScheduleEntry(nil).Load(map[string]any{"schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleReplicaEntity

```go
scheduleReplica := client.ScheduleReplica(nil)
fmt.Println(scheduleReplica.GetName()) // "schedule_replica"
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
| `sources` | `[]any` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | Yes | When this schedule replica was last updated |
| `user_statuses` | `[]any` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ScheduleReplica(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScheduleReplica(nil).Load(map[string]any{"id": "schedule_replica_id", "schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleReplica(nil).Create(map[string]any{
    "id": "example_id",
    "created_at": "example_created_at",
    "replica_fallback_user_id": "example_replica_fallback_user_id",
    "replica_provider": "example_replica_provider",
    "replica_provider_id": "example_replica_provider_id",
    "schedule_id": "example_schedule_id",
    "sources": []any{},
    "updated_at": "example_updated_at",
    "user_statuses": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleSyncRuleEntity

```go
scheduleSyncRule := client.ScheduleSyncRule(nil)
fmt.Println(scheduleSyncRule.GetName()) // "schedule_sync_rule"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `[]any` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `map[string]any` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ScheduleSyncRule(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncRule(nil).Load(map[string]any{"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncRule(nil).Create(map[string]any{
    "id": "example_id",
    "created_at": "example_created_at",
    "permanent_member_user_ids": []any{},
    "schedule_id": "example_schedule_id",
    "schedule_sync_target": map[string]any{},
    "schedule_sync_target_id": "example_schedule_sync_target_id",
    "sync_type": "example_sync_type",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncRule(nil).Update(map[string]any{
    "id": "schedule_sync_rule_id",
    "schedule_id": "schedule_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## ScheduleSyncTargetEntity

```go
scheduleSyncTarget := client.ScheduleSyncTarget(nil)
fmt.Println(scheduleSyncTarget.GetName()) // "schedule_sync_target"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `bool` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `map[string]any` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `[]any` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `map[string]any` | Yes |  |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.ScheduleSyncTarget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncTarget(nil).Load(map[string]any{"id": "schedule_sync_target_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncTarget(nil).Create(map[string]any{
    "add_bot_to_group": true,
    "created_at": "example_created_at",
    "id": "example_id",
    "linked_schedules": []any{},
    "new_slack_user_group": map[string]any{},
    "slack_team_id": "example_slack_team_id",
    "slack_user_group_id": "example_slack_user_group_id",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncTarget(nil).Update(map[string]any{
    "id": "schedule_sync_target_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.ScheduleSyncTarget(nil).Remove(map[string]any{"id": "schedule_sync_target_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SchedulesShowOverrideResultV2Entity

```go
schedulesShowOverrideResultV2 := client.SchedulesShowOverrideResultV2(nil)
fmt.Println(schedulesShowOverrideResultV2.GetName()) // "schedules_show_override_result_v2"
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
| `user` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.SchedulesShowOverrideResultV2(nil).List(map[string]any{"schedule_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.SchedulesShowOverrideResultV2(nil).Load(map[string]any{"id": "schedules_show_override_result_v2_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.SchedulesShowOverrideResultV2(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "end_at": "example_end_at",
    "id": "example_id",
    "layer_id": "example_layer_id",
    "rotation_id": "example_rotation_id",
    "schedule_id": "example_schedule_id",
    "start_at": "example_start_at",
    "updated_at": "example_updated_at",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SchedulesShowOverrideResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SchedulesUpdateOverrideResultV2Entity

```go
schedulesUpdateOverrideResultV2 := client.SchedulesUpdateOverrideResultV2(nil)
fmt.Println(schedulesUpdateOverrideResultV2.GetName()) // "schedules_update_override_result_v2"
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
| `user` | `map[string]any` | Yes |  |

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.SchedulesUpdateOverrideResultV2(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SchedulesUpdateOverrideResultV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SecretEntity

```go
secret := client.Secret(nil)
fmt.Println(secret.GetName()) // "secret"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | Optional description of what this secret is for |
| `id` | `string` | Yes | Unique identifier for this secret |
| `last_four_chars` | `string` | No | The last four characters of the current value, for masked display. |
| `name` | `string` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `[]any` | No | IDs of the teams that own this secret. |
| `secret` | `map[string]any` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes | The secret's plaintext value. |
| `version` | `int` | Yes | The current version number, incremented on each rotation |
| `versions` | `[]any` | Yes | The secret's versions, newest first |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Secret(nil).Load(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Secret(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "secret": map[string]any{},
    "updated_at": "example_updated_at",
    "value": "example_value",
    "version": 1,
    "versions": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Secret(nil).Update(map[string]any{
    "id": "secret_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Secret(nil).Remove(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SecretEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## SeverityEntity

```go
severity := client.Severity(nil)
fmt.Println(severity.GetName()) // "severity"
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

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | - | Yes | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Severity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Severity(nil).Load(map[string]any{"id": "severity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Severity(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "description": "example_description",
    "id": "example_id",
    "name": "example_name",
    "rank": 1,
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Severity(nil).Update(map[string]any{
    "id": "severity_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SeverityEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageEntity

```go
statusPage := client.StatusPage(nil)
fmt.Println(statusPage.GetName()) // "status_page"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of this status page |
| `id` | `string` | Yes | Unique ID of this status page |
| `name` | `string` | Yes | The title of this status page |
| `public_url` | `string` | No | The public URL of this status page |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatusPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPage(nil).Load(map[string]any{"id": "status_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageComponentEntity

```go
statusPageComponent := client.StatusPageComponent(nil)
fmt.Println(statusPageComponent.GetName()) // "status_page_component"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Optional short description of this component |
| `id` | `string` | Yes | Unique identifier for this component |
| `management_meta` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | Human-readable name for the component |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatusPageComponent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPageComponent(nil).Load(map[string]any{"id": "status_page_component_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageComponent(nil).Create(map[string]any{
    "id": "example_id",
    "management_meta": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageComponent(nil).Update(map[string]any{
    "id": "status_page_component_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.StatusPageComponent(nil).Remove(map[string]any{"id": "status_page_component_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageComponentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageComponentAvailabilityV2Entity

```go
statusPageComponentAvailabilityV2 := client.StatusPageComponentAvailabilityV2(nil)
fmt.Println(statusPageComponentAvailabilityV2.GetName()) // "status_page_component_availability_v2"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPageComponentAvailabilityV2(nil).Load(map[string]any{"component_id": "component_id", "status_page_id": "status_page_id", "end_at": "end_at", "start_at": "start_at"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageComponentAvailabilityV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageIncidentEntity

```go
statusPageIncident := client.StatusPageIncident(nil)
fmt.Println(statusPageIncident.GetName()) // "status_page_incident"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impacts` | `[]any` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `[]any` | No | An array of mappings from component ID to current component status |
| `id` | `string` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Yes | Current status for this incident |
| `message` | `string` | Yes | Markdown initial update on this status page incident |
| `name` | `string` | Yes | A title for the incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `[]any` | Yes | A list of updates posted to this status page incident |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatusPageIncident(nil).List(map[string]any{"status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPageIncident(nil).Load(map[string]any{"id": "status_page_incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageIncident(nil).Create(map[string]any{
    "component_impacts": []any{},
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "incident_status": "example_incident_status",
    "message": "example_message",
    "name": "example_name",
    "notify_subscribers": true,
    "published_at": "example_published_at",
    "status_page_id": "example_status_page_id",
    "updates": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageIncident(nil).Update(map[string]any{
    "id": "status_page_incident_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageIncidentUpdateEntity

```go
statusPageIncidentUpdate := client.StatusPageIncidentUpdate(nil)
fmt.Println(statusPageIncidentUpdate.GetName()) // "status_page_incident_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `[]any` | No | An array of mappings from component ID to component status. |
| `incident_status` | `string` | No | Optional new status for this status page incident. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | Yes | ID of the status page incident |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageIncidentUpdate(nil).Create(map[string]any{
    "message": "example_message",
    "notify_subscribers": true,
    "status_page_incident_id": "example_status_page_incident_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageLinkedResponseIncidentV1Entity

```go
statusPageLinkedResponseIncidentV1 := client.StatusPageLinkedResponseIncidentV1(nil)
fmt.Println(statusPageLinkedResponseIncidentV1.GetName()) // "status_page_linked_response_incident_v1"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the Response incident |
| `linked_at` | `string` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatusPageLinkedResponseIncidentV1(nil).List(map[string]any{"incident_id": "example", "status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageLinkedResponseIncidentV1Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageMaintenanceEntity

```go
statusPageMaintenance := client.StatusPageMaintenance(nil)
fmt.Println(statusPageMaintenance.GetName()) // "status_page_maintenance"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_ids` | `[]any` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `bool` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `[]any` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
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
| `updates` | `[]any` | Yes | A list of updates posted to this status page maintenance window |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.StatusPageMaintenance(nil).List(map[string]any{"status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPageMaintenance(nil).Load(map[string]any{"id": "status_page_maintenance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageMaintenance(nil).Create(map[string]any{
    "affected_component_ids": []any{},
    "automate_maintenance_status": true,
    "component_maintenance_periods": []any{},
    "end_at": "example_end_at",
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "maintenance_status": "example_maintenance_status",
    "message": "example_message",
    "name": "example_name",
    "notify_subscribers": true,
    "published_at": "example_published_at",
    "start_at": "example_start_at",
    "status_page_id": "example_status_page_id",
    "updates": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageMaintenance(nil).Update(map[string]any{
    "id": "status_page_maintenance_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageMaintenanceUpdateEntity

```go
statusPageMaintenanceUpdate := client.StatusPageMaintenanceUpdate(nil)
fmt.Println(statusPageMaintenanceUpdate.GetName()) // "status_page_maintenance_update"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `[]any` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | No | Optional new status for this status page maintenance window. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `bool` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | Yes | ID of the status page maintenance window |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.StatusPageMaintenanceUpdate(nil).Create(map[string]any{
    "message": "example_message",
    "notify_subscribers": true,
    "status_page_maintenance_id": "example_status_page_maintenance_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPageStructureEntity

```go
statusPageStructure := client.StatusPageStructure(nil)
fmt.Println(statusPageStructure.GetName()) // "status_page_structure"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_structure` | `map[string]any` | Yes |  |
| `display_uptime_mode` | `string` | Yes | How the page shows uptime against its components |
| `id` | `string` | No |  |
| `management_meta` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.StatusPageStructure(nil).Load(map[string]any{"id": "status_page_structure_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## StatusPagesV2Entity

```go
statusPagesV2 := client.StatusPagesV2(nil)
fmt.Println(statusPagesV2.GetName()) // "status_pages_v2"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.StatusPagesV2(nil).Remove(map[string]any{"status_page_maintenance_id": "status_page_maintenance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StatusPagesV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TeamEntity

```go
team := client.Team(nil)
fmt.Println(team.GetName()) // "team"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `map[string]any` | Yes |  |
| `id` | `string` | Yes | Unique ID of the team |
| `members` | `[]any` | Yes | Members of the team |
| `name` | `string` | Yes | Name of the team |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## TelemetryDataSourceV2Entity

```go
telemetryDataSourceV2 := client.TelemetryDataSourceV2(nil)
fmt.Println(telemetryDataSourceV2.GetName()) // "telemetry_data_source_v2"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this data source was created |
| `datadog_config` | `map[string]any` | No | Datadog-specific credential updates |
| `enabled` | `bool` | Yes | Whether this data source is enabled |
| `grafana_config` | `map[string]any` | No | Grafana-specific credential and endpoint updates |
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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.TelemetryDataSourceV2(nil).Update(map[string]any{
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TelemetryDataSourceV2Entity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## UserEntity

```go
user := client.User(nil)
fmt.Println(user.GetName()) // "user"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `map[string]any` | Yes |  |
| `custom_roles` | `[]any` | Yes |  |
| `email` | `string` | No | Email address of the user. |
| `id` | `string` | Yes | Unique identifier of the user |
| `is_active` | `bool` | Yes | Whether the user is active. |
| `name` | `string` | Yes | Name of the user |
| `role` | `string` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `map[string]any` | Yes |  |
| `slack_user_id` | `string` | No | Slack ID of the user |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.User(nil).Create(map[string]any{
    "id": "example_id",
    "base_role": map[string]any{},
    "custom_roles": []any{},
    "is_active": true,
    "name": "example_name",
    "role": "example_role",
    "seats": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## WorkflowEntity

```go
workflow := client.Workflow(nil)
fmt.Println(workflow.GetName()) // "workflow"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `map[string]any` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `[]any` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `bool` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `map[string]any` | Yes |  |
| `expressions` | `[]any` | Yes | The expressions to use in the workflow |
| `folder` | `string` | No | Folder to display the workflow in |
| `form_fields` | `[]any` | No | User-configured form fields available in the workflow scope. |
| `id` | `string` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `bool` | No | Whether to include private escalations |
| `include_private_incidents` | `bool` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `map[string]any` | Yes |  |
| `name` | `string` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `[]any` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `[]any` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `[]any` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `string` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `bool` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | No | What state this workflow is in |
| `steps` | `[]any` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `string` | Yes | Trigger to set on the workflow |
| `version` | `int` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `map[string]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data. Returns the created entity; `err` is non-nil on failure.

```go
result, err := client.Workflow(nil).Create(map[string]any{
    "condition_groups": []any{},
    "continue_on_step_error": true,
    "delay": map[string]any{},
    "expressions": []any{},
    "id": "example_id",
    "management_meta": map[string]any{},
    "name": "example_name",
    "once_for": []any{},
    "runs_on_incident_modes": []any{},
    "runs_on_incidents": "example_runs_on_incidents",
    "steps": []any{},
    "trigger": "example_trigger",
    "version": 1,
    "workflow": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`. Returns the updated entity; `err` is non-nil on failure.

```go
result, err := client.Workflow(nil).Update(map[string]any{
    "id": "workflow_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria. Returns the entity, marked as deleted; `err` is non-nil on failure.

```go
result, err := client.Workflow(nil).Remove(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

Return the entity name.


---

## WorkflowRunEntity

```go
workflowRun := client.WorkflowRun(nil)
fmt.Println(workflowRun.GetName()) // "workflow_run"
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
| `progress` | `[]any` | Yes | Status of each step as it is worked |
| `scheduled_at` | `string` | Yes | When the run was scheduled for |
| `updated_at` | `string` | Yes | When the resource was last updated |
| `workflow_id` | `string` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | No | Name of the underlying workflow |
| `workflow_version_id` | `string` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `int` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns a `[]any` of entities, one per record; `err` is non-nil on failure.

```go
results, err := client.WorkflowRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
for _, item := range results.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria. Returns the entity, whose record `Data()` reads; `err` is non-nil on failure.

```go
result, err := client.WorkflowRun(nil).Load(map[string]any{"id": "workflow_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data())
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `Stream(action string, args map[string]any, callopts map[string]any) <-chan StreamItem`

Run an operation through the pipeline and send its result items on the
returned channel, which closes when the stream ends. A `StreamItem` holds
one item in `Item`, or in `Err` the error that ended the stream: the
error the operation itself would return, sent as the last value. Under
`throw: false` in `callopts["ctrl"]`, no error is sent.

#### `GetName() string`

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

```go
client := sdk.NewIncidentIoSDK(map[string]any{
    "feature": map[string]any{
        "debug": map[string]any{"active": true},
        "idempotency": map[string]any{"active": true},
        "metrics": map[string]any{"active": true},
        "paging": map[string]any{"active": true},
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
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


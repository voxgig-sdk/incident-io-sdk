# IncidentIo Golang SDK



The Golang SDK for the IncidentIo API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Action(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/incident-io-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/incident-io-sdk/tags) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/incident-io-sdk/go=../incident-io-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/incident-io-sdk/go"
)

func main() {
    client := sdk.NewIncidentIoSDK(map[string]any{
        "apikey": os.Getenv("INCIDENT_IO_APIKEY"),
    })

    // List action records — the value is a []any of entities, one per record.
    actions, err := client.Action(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range actions.([]any) {
        fmt.Println(item.(sdk.Entity).Data())
    }

    // Load a single action — the value is the entity; Data() reads its record.
    action, err := client.Action(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(action.(sdk.Entity).Data())

    // Create a action.
    created, err := client.Action(nil).Create(map[string]any{"description": "example_description", "incident_id": "example_incident_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created.(sdk.Entity).Data())

    // Update a action.
    updated, err := client.Action(nil).Update(map[string]any{"id": "example_id", "assignee_id": "example_assignee_id", "description": "example_description"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated.(sdk.Entity).Data())

    // Remove a action.
    removed, err := client.Action(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed.(sdk.Entity).Data())
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
incidentstatuss, err := client.IncidentStatus(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = incidentstatuss
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

incidentStatuss, err := client.IncidentStatus(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
// A []any of entities, one per mock record.
for _, item := range incidentStatuss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewIncidentIoSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewIncidentIoSDK

```go
func NewIncidentIoSDK(options map[string]any) *IncidentIoSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *IncidentIoSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### IncidentIoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Action` | `(data map[string]any) IncidentIoEntity` | Create an Action entity instance. |
| `Alert` | `(data map[string]any) IncidentIoEntity` | Create an Alert entity instance. |
| `AlertAttribute` | `(data map[string]any) IncidentIoEntity` | Create an AlertAttribute entity instance. |
| `AlertEventsV2` | `(data map[string]any) IncidentIoEntity` | Create an AlertEventsV2 entity instance. |
| `AlertNote` | `(data map[string]any) IncidentIoEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `(data map[string]any) IncidentIoEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `(data map[string]any) IncidentIoEntity` | Create an AlertSource entity instance. |
| `AlertSourcesV2` | `(data map[string]any) IncidentIoEntity` | Create an AlertSourcesV2 entity instance. |
| `AlertTag` | `(data map[string]any) IncidentIoEntity` | Create an AlertTag entity instance. |
| `AlertsAddTagsResultV2` | `(data map[string]any) IncidentIoEntity` | Create an AlertsAddTagsResultV2 entity instance. |
| `AlertsSetTagsResultV2` | `(data map[string]any) IncidentIoEntity` | Create an AlertsSetTagsResultV2 entity instance. |
| `AlertsTransitionIncidentAlertResultV2` | `(data map[string]any) IncidentIoEntity` | Create an AlertsTransitionIncidentAlertResultV2 entity instance. |
| `AnnouncementRule` | `(data map[string]any) IncidentIoEntity` | Create an AnnouncementRule entity instance. |
| `AnnouncementTemplate` | `(data map[string]any) IncidentIoEntity` | Create an AnnouncementTemplate entity instance. |
| `ApiKey` | `(data map[string]any) IncidentIoEntity` | Create an ApiKey entity instance. |
| `CallRoute` | `(data map[string]any) IncidentIoEntity` | Create a CallRoute entity instance. |
| `CallRouteAllowedCaller` | `(data map[string]any) IncidentIoEntity` | Create a CallRouteAllowedCaller entity instance. |
| `CallRouteOption` | `(data map[string]any) IncidentIoEntity` | Create a CallRouteOption entity instance. |
| `CallSession` | `(data map[string]any) IncidentIoEntity` | Create a CallSession entity instance. |
| `CallTranscriptEntry` | `(data map[string]any) IncidentIoEntity` | Create a CallTranscriptEntry entity instance. |
| `CatalogEntry` | `(data map[string]any) IncidentIoEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource` | `(data map[string]any) IncidentIoEntity` | Create a CatalogResource entity instance. |
| `CatalogType` | `(data map[string]any) IncidentIoEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema` | `(data map[string]any) IncidentIoEntity` | Create a CatalogTypeSchema entity instance. |
| `CatalogV3` | `(data map[string]any) IncidentIoEntity` | Create a CatalogV3 entity instance. |
| `CustomField` | `(data map[string]any) IncidentIoEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data map[string]any) IncidentIoEntity` | Create a CustomFieldOption entity instance. |
| `Escalation` | `(data map[string]any) IncidentIoEntity` | Create an Escalation entity instance. |
| `EscalationPath` | `(data map[string]any) IncidentIoEntity` | Create an EscalationPath entity instance. |
| `EscalationPathTemplate` | `(data map[string]any) IncidentIoEntity` | Create an EscalationPathTemplate entity instance. |
| `EscalationsCheckEscalationPermissionsResultV2` | `(data map[string]any) IncidentIoEntity` | Create an EscalationsCheckEscalationPermissionsResultV2 entity instance. |
| `EscalationsReassignEscalationResultV2` | `(data map[string]any) IncidentIoEntity` | Create an EscalationsReassignEscalationResultV2 entity instance. |
| `EscalationsV2` | `(data map[string]any) IncidentIoEntity` | Create an EscalationsV2 entity instance. |
| `FollowUp` | `(data map[string]any) IncidentIoEntity` | Create a FollowUp entity instance. |
| `FollowUpsConnectExternalIssueResultV2` | `(data map[string]any) IncidentIoEntity` | Create a FollowUpsConnectExternalIssueResultV2 entity instance. |
| `FollowUpsConnectExternalIssueResultV3` | `(data map[string]any) IncidentIoEntity` | Create a FollowUpsConnectExternalIssueResultV3 entity instance. |
| `FollowUpsCreateFromLinkResultV3` | `(data map[string]any) IncidentIoEntity` | Create a FollowUpsCreateFromLinkResultV3 entity instance. |
| `HeartbeatV2` | `(data map[string]any) IncidentIoEntity` | Create a HeartbeatV2 entity instance. |
| `Identity` | `(data map[string]any) IncidentIoEntity` | Create an Identity entity instance. |
| `Incident` | `(data map[string]any) IncidentIoEntity` | Create an Incident entity instance. |
| `IncidentActivityLogEntry` | `(data map[string]any) IncidentIoEntity` | Create an IncidentActivityLogEntry entity instance. |
| `IncidentAttachment` | `(data map[string]any) IncidentIoEntity` | Create an IncidentAttachment entity instance. |
| `IncidentForm` | `(data map[string]any) IncidentIoEntity` | Create an IncidentForm entity instance. |
| `IncidentMembership` | `(data map[string]any) IncidentIoEntity` | Create an IncidentMembership entity instance. |
| `IncidentMembershipsV1` | `(data map[string]any) IncidentIoEntity` | Create an IncidentMembershipsV1 entity instance. |
| `IncidentParticipant` | `(data map[string]any) IncidentIoEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload` | `(data map[string]any) IncidentIoEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship` | `(data map[string]any) IncidentIoEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole` | `(data map[string]any) IncidentIoEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus` | `(data map[string]any) IncidentIoEntity` | Create an IncidentStatus entity instance. |
| `IncidentTeamMembership` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTeamMembership entity instance. |
| `IncidentTeamMembershipsV1` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTeamMembershipsV1 entity instance. |
| `IncidentTemplate` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTemplate entity instance. |
| `IncidentTemplatesValidateResultV1` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTemplatesValidateResultV1 entity instance. |
| `IncidentTimelineItem` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTimelineItem entity instance. |
| `IncidentTimestamp` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType` | `(data map[string]any) IncidentIoEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate` | `(data map[string]any) IncidentIoEntity` | Create an IncidentUpdate entity instance. |
| `IncidentsImportPostmortemDocumentResultV2` | `(data map[string]any) IncidentIoEntity` | Create an IncidentsImportPostmortemDocumentResultV2 entity instance. |
| `IpAllowlist` | `(data map[string]any) IncidentIoEntity` | Create an IpAllowlist entity instance. |
| `IpRange` | `(data map[string]any) IncidentIoEntity` | Create an IpRange entity instance. |
| `MaintenanceWindow` | `(data map[string]any) IncidentIoEntity` | Create a MaintenanceWindow entity instance. |
| `ManagedResource` | `(data map[string]any) IncidentIoEntity` | Create a ManagedResource entity instance. |
| `OnCallNotificationMethodPublicV2` | `(data map[string]any) IncidentIoEntity` | Create an OnCallNotificationMethodPublicV2 entity instance. |
| `OnCallNotificationPause` | `(data map[string]any) IncidentIoEntity` | Create an OnCallNotificationPause entity instance. |
| `OnCallNotificationRulePublicV2` | `(data map[string]any) IncidentIoEntity` | Create an OnCallNotificationRulePublicV2 entity instance. |
| `PayConfig` | `(data map[string]any) IncidentIoEntity` | Create a PayConfig entity instance. |
| `PayConfigOneOffRule` | `(data map[string]any) IncidentIoEntity` | Create a PayConfigOneOffRule entity instance. |
| `PayConfigWeeklyRule` | `(data map[string]any) IncidentIoEntity` | Create a PayConfigWeeklyRule entity instance. |
| `PayReport` | `(data map[string]any) IncidentIoEntity` | Create a PayReport entity instance. |
| `PayReportsPublishResultV2` | `(data map[string]any) IncidentIoEntity` | Create a PayReportsPublishResultV2 entity instance. |
| `PayReportsUnpublishResultV2` | `(data map[string]any) IncidentIoEntity` | Create a PayReportsUnpublishResultV2 entity instance. |
| `PayReportsV2` | `(data map[string]any) IncidentIoEntity` | Create a PayReportsV2 entity instance. |
| `Policy` | `(data map[string]any) IncidentIoEntity` | Create a Policy entity instance. |
| `PolicyFinding` | `(data map[string]any) IncidentIoEntity` | Create a PolicyFinding entity instance. |
| `PolicyFindingsDismissResultV2` | `(data map[string]any) IncidentIoEntity` | Create a PolicyFindingsDismissResultV2 entity instance. |
| `PolicyFindingsRestoreResultV2` | `(data map[string]any) IncidentIoEntity` | Create a PolicyFindingsRestoreResultV2 entity instance. |
| `PostmortemDocument` | `(data map[string]any) IncidentIoEntity` | Create a PostmortemDocument entity instance. |
| `PostmortemDocumentsAttachResultV1` | `(data map[string]any) IncidentIoEntity` | Create a PostmortemDocumentsAttachResultV1 entity instance. |
| `PostmortemDocumentsShowContentResultV1` | `(data map[string]any) IncidentIoEntity` | Create a PostmortemDocumentsShowContentResultV1 entity instance. |
| `Schedule` | `(data map[string]any) IncidentIoEntity` | Create a Schedule entity instance. |
| `ScheduleEntriesListPayloadV2` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleEntriesListPayloadV2 entity instance. |
| `ScheduleEntry` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleOverride` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleOverride entity instance. |
| `ScheduleReplica` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget` | `(data map[string]any) IncidentIoEntity` | Create a ScheduleSyncTarget entity instance. |
| `Secret` | `(data map[string]any) IncidentIoEntity` | Create a Secret entity instance. |
| `Severity` | `(data map[string]any) IncidentIoEntity` | Create a Severity entity instance. |
| `StatusPage` | `(data map[string]any) IncidentIoEntity` | Create a StatusPage entity instance. |
| `StatusPageComponent` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageComponent entity instance. |
| `StatusPageComponentAvailability` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageComponentAvailability entity instance. |
| `StatusPageIncident` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageLinkedResponseIncident` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageLinkedResponseIncident entity instance. |
| `StatusPageMaintenance` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure` | `(data map[string]any) IncidentIoEntity` | Create a StatusPageStructure entity instance. |
| `StatusPagesCreateStatusPageRetrospectiveIncidentResultV2` | `(data map[string]any) IncidentIoEntity` | Create a StatusPagesCreateStatusPageRetrospectiveIncidentResultV2 entity instance. |
| `Team` | `(data map[string]any) IncidentIoEntity` | Create a Team entity instance. |
| `TelemetryDataSource` | `(data map[string]any) IncidentIoEntity` | Create a TelemetryDataSource entity instance. |
| `User` | `(data map[string]any) IncidentIoEntity` | Create an User entity instance. |
| `UsersShowPagingProviderResultV2` | `(data map[string]any) IncidentIoEntity` | Create an UsersShowPagingProviderResultV2 entity instance. |
| `UtilitiesV1` | `(data map[string]any) IncidentIoEntity` | Create an UtilitiesV1 entity instance. |
| `Workflow` | `(data map[string]any) IncidentIoEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data map[string]any) IncidentIoEntity` | Create a WorkflowRun entity instance. |

### Entity interface (IncidentIoEntity)

All entities implement the `IncidentIoEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria, one per record. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity, and return it. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity, and return it. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity, and return it marked as deleted. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity, whose `Data()` reads its record (`map[string]any`) |
| `List` | a `[]any` of entities, one per record |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    action, err := client.Action(nil).List(nil, nil)
    if err != nil { /* handle */ }
    // action is a []any of entities, one per record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_id"` | ID of the user this action is assigned to |
| `"completed_at"` | When the action was completed |
| `"created_at"` | When the action was created |
| `"creator"` |  |
| `"description"` | Description of the action |
| `"id"` | Unique identifier for the action |
| `"incident_id"` | Unique identifier of the incident the action belongs to |
| `"status"` | Status of the action |
| `"updated_at"` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/actions`

#### Alert

| Field | Description |
| --- | --- |
| `"alert_group_ids"` | The IDs of every alert group this alert belongs to. |
| `"alert_source_id"` | The ID of the alert source this alert fired on |
| `"attributes"` | Attribute values parsed from the alerts payload |
| `"created_at"` | When this entry was created |
| `"deduplication_key"` | A deduplication key which uniquely references this alert from your alert source. |
| `"description"` | The description of the alert |
| `"id"` | The ID of this alert |
| `"resolved_at"` | When this alert was resolved |
| `"source_url"` | If applicable, a link to the alert in the upstream system |
| `"status"` | Statuses of an alert |
| `"tags"` | Tags someone has applied to this alert |
| `"title"` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `"updated_at"` | When this alert was last updated |

Operations: Create, List, Load.

API path: `/v2/alerts/{id}/actions/resolve`

#### AlertAttribute

| Field | Description |
| --- | --- |
| `"array"` | Whether this attribute is an array |
| `"emoji"` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `"id"` | The ID of this attribute |
| `"name"` | Unique name of this attribute |
| `"required"` | Whether this attribute is required. |
| `"type"` | Engine resource name for this attribute |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_attributes`

#### AlertEventsV2

| Field | Description |
| --- | --- |
| `"deduplication_key"` | The deduplication key that the event has been processed with |
| `"description"` | Description that optionally adds more detail to title. |
| `"message"` | Human readable message giving detail about the event |
| `"metadata"` | Any additional metadata that you've configured your alert source to parse |
| `"source_url"` | If applicable, a link to the alert in the upstream system |
| `"status"` | Status of the event |
| `"title"` | The title of the alert, parsed from the alert payload according to the alert source configuration |

Operations: Create.

API path: `/v2/alert_events/http/{alert_source_config_id}`

#### AlertNote

| Field | Description |
| --- | --- |
| `"alert_group_id"` | ID of the alert group this note is attached to. |
| `"alert_id"` | ID of the alert this note is attached to. |
| `"content"` | Markdown body of the note |
| `"created_at"` | When this note was first created |
| `"creator"` |  |
| `"id"` | Unique identifier for the alert note |
| `"images"` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `"last_edited_at"` | When this note was last edited, only set if it has been edited at least once since creation |
| `"updated_at"` | When this note was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/alert_notes`

#### AlertRoute

| Field | Description |
| --- | --- |
| `"alert_sources"` | Which alert sources this route matches |
| `"condition_groups"` | Filter: the condition groups that must be true for this route to fire |
| `"created_at"` | When this alert route was created |
| `"enabled"` | Whether this alert route is enabled |
| `"escalation_config"` |  |
| `"expressions"` | The expressions used by bindings in this route |
| `"grouping_config"` |  |
| `"id"` | Unique identifier for this alert route |
| `"incident_config"` |  |
| `"is_private"` | Whether this alert route is private. |
| `"message_config"` |  |
| `"name"` | The name of this alert route, for the user's reference |
| `"owning_team_ids"` | IDs of teams that own this alert route |
| `"updated_at"` | When this alert route was last updated |
| `"version"` | The version of this alert route |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_routes`

#### AlertSource

| Field | Description |
| --- | --- |
| `"alert_events_url"` | URL that can be used to send alert events to this source. |
| `"auto_resolve_incident_alerts"` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `"auto_resolve_timeout_minutes"` | When set, alerts from this source will automatically resolve after this many minutes. |
| `"azure_devops_options"` |  |
| `"disabled"` | For heartbeat sources, set to true to disable monitoring |
| `"email_options"` |  |
| `"filter_condition_groups"` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `"fixed_team_id"` | When set, the team every alert from this source is attributed to. |
| `"heartbeat_options"` |  |
| `"http_custom_options"` |  |
| `"id"` | The ID of this alert source |
| `"jira_options"` |  |
| `"name"` | Unique name of the alert source |
| `"owning_team_ids"` | IDs of teams that own this alert source |
| `"rate_limit_sharding"` | Controls how this source's ingest rate limit is split into buckets. |
| `"secret_token"` | Secret token used to authenticate this source, if applicable. |
| `"source_type"` | Type of alert source |
| `"template"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_sources`

#### AlertSourcesV2

| Field | Description |
| --- | --- |
| `"owning_team_ids"` | IDs of teams that own this alert source |
| `"source_type"` | Type of alert source |
| `"template"` |  |

Operations: Create.

API path: `/v2/alert_sources/actions/validate`

#### AlertTag

| Field | Description |
| --- | --- |
| `"alert_group_ids"` | The IDs of every alert group this alert belongs to. |
| `"alert_source_id"` | The ID of the alert source this alert fired on |
| `"attributes"` | Attribute values parsed from the alerts payload |
| `"created_at"` | When this entry was created |
| `"deduplication_key"` | A deduplication key which uniquely references this alert from your alert source. |
| `"description"` | The description of the alert |
| `"id"` | The ID of this alert |
| `"name"` | The tag name |
| `"resolved_at"` | When this alert was resolved |
| `"source_url"` | If applicable, a link to the alert in the upstream system |
| `"status"` | Statuses of an alert |
| `"tags"` | Tags someone has applied to this alert |
| `"title"` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `"updated_at"` | When this alert was last updated |

Operations: Create, List.

API path: `/v2/alerts/{id}/actions/remove_tags`

#### AlertsAddTagsResultV2

| Field | Description |
| --- | --- |
| `"alert_group_ids"` | The IDs of every alert group this alert belongs to. |
| `"alert_source_id"` | The ID of the alert source this alert fired on |
| `"attributes"` | Attribute values parsed from the alerts payload |
| `"created_at"` | When this entry was created |
| `"deduplication_key"` | A deduplication key which uniquely references this alert from your alert source. |
| `"description"` | The description of the alert |
| `"id"` | The ID of this alert |
| `"resolved_at"` | When this alert was resolved |
| `"source_url"` | If applicable, a link to the alert in the upstream system |
| `"status"` | Statuses of an alert |
| `"tags"` | Tags someone has applied to this alert |
| `"title"` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `"updated_at"` | When this alert was last updated |

Operations: Create.

API path: `/v2/alerts/{id}/actions/add_tags`

#### AlertsSetTagsResultV2

| Field | Description |
| --- | --- |
| `"alert_group_ids"` | The IDs of every alert group this alert belongs to. |
| `"alert_source_id"` | The ID of the alert source this alert fired on |
| `"attributes"` | Attribute values parsed from the alerts payload |
| `"created_at"` | When this entry was created |
| `"deduplication_key"` | A deduplication key which uniquely references this alert from your alert source. |
| `"description"` | The description of the alert |
| `"id"` | The ID of this alert |
| `"resolved_at"` | When this alert was resolved |
| `"source_url"` | If applicable, a link to the alert in the upstream system |
| `"status"` | Statuses of an alert |
| `"tags"` | Tags someone has applied to this alert |
| `"title"` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `"updated_at"` | When this alert was last updated |

Operations: Create.

API path: `/v2/alerts/{id}/actions/set_tags`

#### AlertsTransitionIncidentAlertResultV2

| Field | Description |
| --- | --- |
| `"alert"` |  |
| `"alert_id"` | Alert to attach to the incident |
| `"alert_route_id"` | The ID of the alert route that created this incident alert |
| `"id"` | The ID of this alert |
| `"incident"` | Incident slim is a subset of the full incident object, listing key fields. |
| `"incident_id"` | Incident to attach the alert to |
| `"re_relate"` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `"state"` | What state to move the connection to |

Operations: Create, List.

API path: `/v2/incident_alerts/{id}/actions/transition`

#### AnnouncementRule

| Field | Description |
| --- | --- |
| `"condition_groups"` | Incidents are announced when they match any of these condition groups |
| `"conditions_no_longer_apply_behaviour"` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `"created_at"` | When the rule was created |
| `"id"` | Unique identifier for this announcement rule |
| `"microsoft_teams_channel_ids"` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `"mode"` | Which incidents are announced: live incidents only, or triage incidents too |
| `"name"` | Human readable name for the rule |
| `"owning_team_ids"` | IDs of the teams that own this rule |
| `"private_incident_scope"` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `"slack_channel_ids"` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `"template_id"` | ID of the announcement template used to render this rule's posts |
| `"update_sharing_mode"` | Where incident updates are shared once the incident is announced |
| `"updated_at"` | When the rule was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/announcement_rules`

#### AnnouncementTemplate

| Field | Description |
| --- | --- |
| `"actions"` | Actions shown on the announcement post, in rank order |
| `"fields"` | Fields shown on the announcement post, in rank order |
| `"id"` | Unique identifier for this announcement template |
| `"is_default"` | Whether this is the organisation's default template, used by rules that don't choose one |
| `"name"` | Name of this announcement template |
| `"owning_team_ids"` | IDs of the teams that own this template |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/announcement_templates`

#### ApiKey

| Field | Description |
| --- | --- |
| `"comments"` | Freeform notes about this API key |
| `"created_at"` | When the API key was created |
| `"creator"` |  |
| `"id"` | Unique identifier for this API key |
| `"last_used_at"` | When the key was last used to authenticate a request |
| `"name"` | The name of the API key, for the user's reference |
| `"role_names"` | Account-level roles to assign to the API key. |
| `"roles"` | The account-level roles assigned to this API key |
| `"team_ids"` | IDs of teams that this API key is scoped to |
| `"team_role_names"` | Roles to grant for the teams specified in `team_ids`. |
| `"team_roles"` | The team-level roles assigned to this API key |
| `"token_last_issued_at"` | When the current token for this API was last issued. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/api_keys/{id}/actions/rotate`

#### CallRoute

| Field | Description |
| --- | --- |
| `"allowed_callers"` | The numbers allowed to call this route. |
| `"country_code"` | The country this route's number belongs to |
| `"created_at"` |  |
| `"current_state"` | Where this route is in provisioning. |
| `"custom_language"` | The language we speak voice prompts in, via text-to-speech |
| `"id"` | Unique identifier for this call route |
| `"name"` | Name for this call route |
| `"options"` | The phone-tree menu this route presents. |
| `"path"` | Who we page when a call comes in. |
| `"phone_number"` | The number your customers call to reach this route, once one has been provisioned |
| `"phone_number_type"` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `"responder_caller_id"` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `"updated_at"` |  |
| `"use_caller_allowlist"` | Whether this route only answers calls from its allowed callers |

Operations: List, Load, Update.

API path: `/v2/call_routes`

#### CallRouteAllowedCaller

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier for this allowed caller |
| `"name"` | Label for whose number this is |
| `"phone_number"` | The number allowed to call this route, in international format |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRouteOption

| Field | Description |
| --- | --- |
| `"digit"` | The keypad digit a caller presses to choose this option |
| `"id"` | Unique identifier for this option |
| `"path"` | Who we page when a caller chooses this option |
| `"prompt"` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallSession

| Field | Description |
| --- | --- |
| `"ended_at"` | When the call session ended. |
| `"id"` | Unique identifier for this call session |
| `"incident_id"` | The incident this call session belongs to |
| `"started_at"` | When the call session started |

Operations: List.

API path: `/v2/call_sessions`

#### CallTranscriptEntry

| Field | Description |
| --- | --- |
| `"content"` | What was said |
| `"id"` | Unique identifier for this transcript entry |
| `"medium"` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `"participant_name"` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `"timestamp"` | When the participant started speaking |

Operations: List.

API path: `/v2/call_transcript_entries`

#### CatalogEntry

| Field | Description |
| --- | --- |
| `"aliases"` | Optional aliases that can be used to reference this entry |
| `"archived_at"` | When this entry was archived |
| `"attribute_values"` | Values of this entry |
| `"catalog_entry"` |  |
| `"catalog_type"` |  |
| `"catalog_type_id"` | ID of this catalog type |
| `"created_at"` | When this entry was created |
| `"external_id"` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `"id"` | ID of this catalog entry |
| `"name"` | Name is the human readable name of this entry |
| `"rank"` | When catalog type is ranked, this is used to help order things |
| `"update_attributes"` | If provided, only update these attribute_values keys. |
| `"updated_at"` | When this entry was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/catalog_entries`

#### CatalogResource

| Field | Description |
| --- | --- |
| `"category"` | Which category of resource |
| `"description"` | Human readable description for this resource |
| `"engine_resource_type"` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `"label"` | Label for this catalog resource type |
| `"type"` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `"value_docstring"` | Documentation for the literal string value of this resource |

Operations: List.

API path: `/v2/catalog_resources`

#### CatalogType

| Field | Description |
| --- | --- |
| `"annotations"` | Annotations that can track metadata about this type |
| `"categories"` | What categories is this type considered part of |
| `"color"` | Sets the display color of this type in the dashboard |
| `"created_at"` | When this type was created |
| `"description"` | Human readble description of this type |
| `"dynamic_resource_parameter"` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `"engine_resource_type"` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `"estimated_count"` | If populated, gives an estimated count of entries for this type |
| `"icon"` | Sets the display icon of this type in the dashboard |
| `"id"` | ID of this catalog type |
| `"is_editable"` | Catalog types that are synced with external resources can't be edited |
| `"is_team_type"` | Whether this catalog type is the designated team type in team settings |
| `"last_synced_at"` | When this type was last synced (if it's ever been sync'd) |
| `"name"` | Name is the human readable name of this type |
| `"owning_team_ids"` | IDs of the teams that own this catalog type |
| `"ranked"` | If this type should be ranked |
| `"registry_type"` | The registry resource this type is synced from, if any |
| `"required_integrations"` | If populated, the integrations required for this type |
| `"schema"` |  |
| `"source_repo_url"` | The url of the external repository where this type is managed |
| `"type_name"` | The type name of this catalog type, to be used when defining attributes. |
| `"updated_at"` | When this type was last updated |
| `"use_name_as_identifier"` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/catalog_types`

#### CatalogTypeSchema

| Field | Description |
| --- | --- |
| `"annotations"` | Annotations that can track metadata about this type |
| `"attributes"` |  |
| `"categories"` | What categories is this type considered part of |
| `"color"` | Sets the display color of this type in the dashboard |
| `"created_at"` | When this type was created |
| `"description"` | Human readble description of this type |
| `"dynamic_resource_parameter"` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `"engine_resource_type"` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `"estimated_count"` | If populated, gives an estimated count of entries for this type |
| `"icon"` | Sets the display icon of this type in the dashboard |
| `"id"` | ID of this catalog type |
| `"is_editable"` | Catalog types that are synced with external resources can't be edited |
| `"is_team_type"` | Whether this catalog type is the designated team type in team settings |
| `"last_synced_at"` | When this type was last synced (if it's ever been sync'd) |
| `"name"` | Name is the human readable name of this type |
| `"owning_team_ids"` | IDs of the teams that own this catalog type |
| `"ranked"` | If this type should be ranked |
| `"registry_type"` | The registry resource this type is synced from, if any |
| `"required_integrations"` | If populated, the integrations required for this type |
| `"schema"` |  |
| `"source_repo_url"` | The url of the external repository where this type is managed |
| `"type_name"` | The type name of this catalog type, to be used when defining attributes. |
| `"updated_at"` | When this type was last updated |
| `"use_name_as_identifier"` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `"version"` |  |

Operations: Create.

API path: `/v2/catalog_types/{id}/actions/update_schema`

#### CatalogV3

| Field | Description |
| --- | --- |
| `"catalog_type_id"` | The unique identifier of the catalog type containing the entries |
| `"entries"` | A list of entries to update with their new values. |
| `"update_attributes"` | Optional list of specific attribute IDs to update across all entries. |

Operations: Create.

API path: `/v3/catalog_entries/actions/bulk_update`

#### CustomField

| Field | Description |
| --- | --- |
| `"catalog_type_id"` | For catalog fields, the ID of the associated catalog type |
| `"created_at"` | When the action was created |
| `"description"` | Description of the custom field |
| `"field_type"` | Type of custom field |
| `"filter_by"` |  |
| `"fixed_filter"` |  |
| `"group_by_catalog_attribute_id"` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `"helptext_catalog_attribute_id"` | Which catalog attribute provides helptext for the options |
| `"id"` | Unique identifier for the custom field |
| `"name"` | Human readable name for the custom field |
| `"updated_at"` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `"custom_field_id"` | ID of the custom field this option belongs to |
| `"id"` | Unique identifier for the custom field option |
| `"sort_key"` | Sort key used to order the custom field options correctly |
| `"value"` | Human readable name for the custom field option. |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

#### Escalation

| Field | Description |
| --- | --- |
| `"created_at"` | When this escalation was created |
| `"creator"` | The creator of this escalation. |
| `"description"` | Additional detail provided with this escalation. |
| `"escalation_path_id"` | Unique identifier of the escalation path that the escalation was created from |
| `"events"` | Events which describe the history of this escalation. |
| `"id"` | Unique ID of the escalation |
| `"idempotency_key"` | Unique key to prevent duplicate escalations. |
| `"incident_id"` | ID of an incident to associate with this escalation. |
| `"priority"` | The priority associated with this escalation. |
| `"related_alerts"` | Alerts related to this escalation |
| `"related_incidents"` | Incidents related to this escalation |
| `"status"` | Status of the escalation |
| `"title"` | The title of this escalation |
| `"updated_at"` | When this escalation was last updated |
| `"user_ids"` | IDs of users to escalate directly to |

Operations: Create, List, Load.

API path: `/v2/escalations/{id}/actions/cancel`

#### EscalationPath

| Field | Description |
| --- | --- |
| `"current_responders"` | Users who are currently on-call for this escalation path |
| `"id"` | Unique identifier for this escalation path. |
| `"kind"` | Whether this path carries its own nodes, or is built from an escalation path template. |
| `"name"` | The name of this escalation path, for the user's reference. |
| `"param_bindings"` | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `"path"` | The nodes that form the levels and branches of this escalation path. |
| `"repeat_config"` |  |
| `"team_ids"` | IDs of the teams that own this escalation path. |
| `"template_id"` | For a templated path, the template it is built from. |
| `"working_hours"` | The working hours for this escalation path. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/escalation_paths`

#### EscalationPathTemplate

| Field | Description |
| --- | --- |
| `"description"` | A description of what this template is for. |
| `"expressions"` | Expressions backing the template's binding targets. |
| `"has_historical_escalation_path_versions"` | Whether a previous escalation path version uses this template. |
| `"id"` | Unique identifier for this template. |
| `"name"` | The name of this template. |
| `"params"` | The parameters declared by this template. |
| `"path"` | The nodes that form the levels and branches of this template. |
| `"repeat_config"` |  |
| `"working_hours"` | The working hours for this template. |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/escalation_path_templates`

#### EscalationsCheckEscalationPermissionsResultV2

| Field | Description |
| --- | --- |
| `"response_options"` | The response options available to each requested user, in the same order as the request. |
| `"user_ids"` | The IDs of the users to check response options for |

Operations: Create.

API path: `/v2/escalations/{escalation_id}/actions/check_permissions`

#### EscalationsReassignEscalationResultV2

| Field | Description |
| --- | --- |
| `"description"` | Additional details about the new escalation. |
| `"escalation_path_id"` | ID of the escalation path to reassign to |
| `"resolve_original"` | Whether to resolve the original escalation, stopping it paging its targets. |
| `"title"` | The title of the new escalation. |
| `"user_ids"` | IDs of users to reassign directly to |

Operations: Create.

API path: `/v2/escalations/{escalation_id}/actions/reassign`

#### EscalationsV2

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### FollowUp

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_id"` | ID of the user this follow-up is assigned to |
| `"assignee_team"` |  |
| `"assignee_team_id"` | ID of the team this follow-up is assigned to |
| `"category"` |  |
| `"completed_at"` | When the follow-up was completed |
| `"created_at"` | When the follow-up was created |
| `"creator"` |  |
| `"description"` | Description of the follow-up |
| `"external_issue_reference"` |  |
| `"external_issue_reference_id"` | If this follow-up is related to an external issue, the ID of that issue |
| `"follow_up_category_id"` | ID of the category for this follow-up |
| `"follow_up_priority_option_id"` | ID of the priority for this follow-up |
| `"id"` | Unique identifier for the follow-up |
| `"incident_id"` | Unique identifier of the incident the follow-up belongs to |
| `"labels"` | Labels associated with this follow-up |
| `"priority"` |  |
| `"status"` | Status of the follow-up |
| `"title"` | Title of the follow-up |
| `"updated_at"` | When the follow-up was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/follow_ups`

#### FollowUpsConnectExternalIssueResultV2

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_team"` |  |
| `"completed_at"` | When the follow-up was completed |
| `"created_at"` | When the follow-up was created |
| `"creator"` |  |
| `"description"` | Description of the follow-up |
| `"external_issue_reference"` |  |
| `"id"` | Unique identifier for the follow-up |
| `"incident_id"` | Unique identifier of the incident the follow-up belongs to |
| `"labels"` | Labels associated with this follow-up |
| `"priority"` |  |
| `"provider"` | The issue tracker provider the issue belongs to |
| `"status"` | Status of the follow-up |
| `"title"` | Title of the follow-up |
| `"updated_at"` | When the follow-up was last updated |
| `"url"` | URL of the issue in the external provider |

Operations: Create.

API path: `/v2/follow_ups/{id}/actions/connect_external_issue`

#### FollowUpsConnectExternalIssueResultV3

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_team"` |  |
| `"category"` |  |
| `"completed_at"` | When the follow-up was completed |
| `"created_at"` | When the follow-up was created |
| `"creator"` |  |
| `"description"` | Description of the follow-up |
| `"external_issue_reference"` |  |
| `"id"` | Unique identifier for the follow-up |
| `"incident_id"` | Unique identifier of the incident the follow-up belongs to |
| `"labels"` | Labels associated with this follow-up |
| `"priority"` |  |
| `"provider"` | The issue tracker provider the issue belongs to |
| `"status"` | Status of the follow-up |
| `"title"` | Title of the follow-up |
| `"updated_at"` | When the follow-up was last updated |
| `"url"` | URL of the issue in the external provider |

Operations: Create.

API path: `/v3/follow_ups/{id}/actions/connect_external_issue`

#### FollowUpsCreateFromLinkResultV3

| Field | Description |
| --- | --- |
| `"incident_id"` | Unique identifier of the incident the follow-up belongs to |
| `"url"` | URL of the issue in the external provider |

Operations: Create.

API path: `/v3/follow_ups/actions/create_from_link`

#### HeartbeatV2

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load.

API path: `/v2/heartbeat/{alert_source_config_id}/ping`

#### Identity

| Field | Description |
| --- | --- |
| `"dashboard_url"` | The dashboard URL for this organisation |
| `"name"` | The name assigned to the current API Key |
| `"roles"` | Which roles have been enabled for this key |
| `"team_roles"` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `"teams"` | Teams that this API key is scoped to. |

Operations: Load.

API path: `/v1/identity`

#### Incident

| Field | Description |
| --- | --- |
| `"call_url"` | The call URL attached to this incident |
| `"created_at"` | When the incident was created |
| `"creator"` |  |
| `"custom_field_entries"` | Custom field entries for this incident |
| `"debriefs"` | Debriefs scheduled for this incident, ordered by start time. |
| `"duration_metrics"` | Incident duration metrics and their measurements for this incident |
| `"external_issue_reference"` |  |
| `"has_debrief"` | If this incident has a debrief attached |
| `"id"` | Unique identifier for the incident |
| `"idempotency_key"` | Unique string used to de-duplicate incident create requests |
| `"incident_role_assignments"` | A list of who is assigned to each role for this incident |
| `"incident_status"` |  |
| `"incident_status_id"` | Incident status to assign to the incident |
| `"incident_timestamp_values"` | Incident lifecycle events and when they occurred |
| `"incident_type"` |  |
| `"incident_type_id"` | Incident type to create this incident as |
| `"last_activity_at"` | When the incident last recorded 'activity' |
| `"mode"` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `"ms_teams_channel_url"` | URL to link to the Microsoft Teams channel |
| `"name"` | Explanation of the incident |
| `"permalink"` | A permanent link to the homepage for this incident |
| `"postmortem_document_ids"` | An array of IDs of postmortem documents for this incident |
| `"postmortem_document_url"` | The URL of the incident post-mortem document |
| `"reference"` | Reference to this incident, as displayed across the product |
| `"retrospective_incident_options"` |  |
| `"severity"` |  |
| `"severity_id"` | Severity to create incident as |
| `"slack_channel_id"` | ID of the Slack channel in the organisation Slack workspace. |
| `"slack_channel_name"` | Name of the slack channel |
| `"slack_channel_name_override"` | Name of the Slack channel to create for this incident |
| `"slack_channel_url"` | URL to link to the slack channel |
| `"slack_team_id"` | ID of the Slack team / workspace. |
| `"summary"` | Detailed description of the incident |
| `"team_ids"` | IDs of the teams that own this incident, resolved from your team settings. |
| `"updated_at"` | When the incident was last updated |
| `"visibility"` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `"workload_minutes_late"` | Amount of time spent on the incident in late hours |
| `"workload_minutes_sleeping"` | Amount of time spent on the incident in sleeping hours |
| `"workload_minutes_total"` | Amount of time spent on the incident in total |
| `"workload_minutes_working"` | Amount of time spent on the incident in working hours |

Operations: Create, List, Load.

API path: `/v2/incidents/{id}/actions/edit`

#### IncidentActivityLogEntry

| Field | Description |
| --- | --- |
| `"content"` | Details of an activity log entry. |
| `"created_at"` | When we recorded the activity |
| `"id"` | Unique identifier of the activity log entry |
| `"incident_id"` | ID of the incident this happened on. |
| `"occurred_at"` | When the activity happened. |
| `"title"` | Human-readable summary of what happened |
| `"type"` | What kind of activity this is. |

Operations: List.

API path: `/v2/incident_activity_log_entries`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier of this incident membership |
| `"incident_id"` | ID of the incident to add an attachment to |
| `"resource"` |  |

Operations: Create, List, Remove.

API path: `/v1/incident_attachments`

#### IncidentForm

| Field | Description |
| --- | --- |
| `"created_at"` | When this incident form was created |
| `"expressions"` | Expressions available to every element's conditions and defaults. |
| `"form_type"` | Which form this is. |
| `"id"` | Unique identifier for this incident form |
| `"incident_type_id"` | The incident type this form belongs to. |
| `"lifecycle_elements"` | Elements on this form, in display order. |
| `"updated_at"` | When this incident form was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v3/incident_forms`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `"incident_id"` | The incident to make the user a member of |
| `"user_id"` |  |

Operations: Create.

API path: `/v1/incident_memberships`

#### IncidentMembershipsV1

| Field | Description |
| --- | --- |
| `"incident_id"` | Revoke memberships to incident |
| `"user_id"` |  |

Operations: Create.

API path: `/v1/incident_memberships/actions/revoke`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `"active"` | Participants who are actively helping with the incident |
| `"passive"` | Participants who are just observing the incident |

Operations: Load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `"archived_at"` | When the user left the incident, if they are no longer an active participant |
| `"participant_type"` | The role they had in the incident |
| `"user"` |  |
| `"workload"` |  |

Operations: List.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `"id"` | Unique identifier of this incident relationship |
| `"incident"` |  |

Operations: List.

API path: `/v1/incident_relationships`

#### IncidentRole

| Field | Description |
| --- | --- |
| `"created_at"` | When the role was created |
| `"description"` | Describes the purpose of the role |
| `"id"` | Unique identifier for the role |
| `"instructions"` | Provided to whoever is nominated for the role. |
| `"name"` | Human readable name of the incident role |
| `"role_type"` | Type of incident role |
| `"shortform"` | Short human readable name for Slack. |
| `"updated_at"` | When the role was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_roles`

#### IncidentStatus

| Field | Description |
| --- | --- |
| `"category"` | What category of status it is. |
| `"created_at"` |  |
| `"description"` | Rich text description of the incident status |
| `"id"` | Unique ID of this incident status |
| `"name"` | Unique name of this status |
| `"rank"` | Order of this incident status |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_statuses`

#### IncidentTeamMembership

| Field | Description |
| --- | --- |
| `"incident_id"` |  |
| `"team_id"` |  |

Operations: Create.

API path: `/v1/incident_team_memberships`

#### IncidentTeamMembershipsV1

| Field | Description |
| --- | --- |
| `"incident_id"` | Revoke team access to this incident |
| `"team_id"` |  |

Operations: Create.

API path: `/v1/incident_team_memberships/actions/revoke`

#### IncidentTemplate

| Field | Description |
| --- | --- |
| `"created_at"` | When this incident template was created |
| `"expressions"` | The expressions used by bindings in this template |
| `"id"` | Unique identifier for this incident template |
| `"name"` | The name of this incident template, for the user's reference |
| `"template"` | The values an incident template applies to the incidents it creates. |
| `"updated_at"` | When this incident template was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_templates`

#### IncidentTemplatesValidateResultV1

| Field | Description |
| --- | --- |
| `"expressions"` | The expressions used by bindings in this template |
| `"name"` | The name of this incident template, for the user's reference |
| `"template"` | The values an incident template applies to the incidents it creates. |
| `"warnings"` | Anything suspect about this config that isn't severe enough to reject it. |

Operations: Create.

API path: `/v1/incident_templates/actions/validate`

#### IncidentTimelineItem

| Field | Description |
| --- | --- |
| `"activity_log_id"` | ID of the activity log entry this item was promoted from. |
| `"created_at"` | When this item was added to the timeline |
| `"creator"` |  |
| `"description"` | Description of the timeline item, in markdown |
| `"id"` | Unique identifier of the timeline item |
| `"idempotency_key"` | Unique string used to de-duplicate timeline item requests. |
| `"incident_id"` | Incident to add this item to |
| `"timestamp"` | When the thing this item describes happened. |
| `"title"` | Title of the timeline item |
| `"updated_at"` | When this item was last edited |

Operations: Create, List, Update.

API path: `/v2/incident_timeline_items`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `"id"` | Unique ID of this incident timestamp |
| `"name"` | Unique name of this timestamp |
| `"rank"` | Order in which this timestamp should be shown |

Operations: List, Load.

API path: `/v2/incident_timestamps`

#### IncidentType

| Field | Description |
| --- | --- |
| `"create_in_triage"` | Whether incidents of this must always, or can optionally, be created in triage |
| `"created_at"` | When this resource was created |
| `"description"` | What is this incident type for? |
| `"id"` | Unique identifier for this Incident Type |
| `"is_default"` | The default Incident Type is used when no other type is explicitly specified |
| `"name"` | The name of this Incident Type |
| `"owning_team_ids"` | IDs of the teams that own this incident type |
| `"private_incidents_only"` | Should all incidents created with this Incident Type be private? |
| `"updated_at"` | When this resource was last updated |

Operations: List, Load.

API path: `/v1/incident_types`

#### IncidentUpdate

| Field | Description |
| --- | --- |
| `"created_at"` | When the update was created |
| `"id"` | Unique identifier for this incident update |
| `"idempotency_key"` | Unique string used to de-duplicate incident update requests. |
| `"incident_id"` | The incident you want to update |
| `"merged_into_incident_id"` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `"message"` | Message that explains the context behind the update, in markdown |
| `"new_incident_status"` |  |
| `"new_severity"` |  |
| `"to_incident_status_id"` | Move the incident to this status |
| `"to_severity_id"` | Move the incident to this severity |
| `"updater"` |  |

Operations: Create, List.

API path: `/v2/incident_updates`

#### IncidentsImportPostmortemDocumentResultV2

| Field | Description |
| --- | --- |
| `"content"` | The document content as GitHub-Flavored Markdown |
| `"title"` | Title of the postmortem document |

Operations: Create.

API path: `/v2/incidents/{id}/actions/import_postmortem_document`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `"allowlist"` | A list of IP addresses or CIDR prefixes to allow |
| `"enabled"` | Whether this IP allowlist is enabled or not |
| `"updated_at"` | The time this allowlist was last updated |
| `"version"` | The version of this IP allowlist |

Operations: Load, Update.

API path: `/v1/ip_allowlists`

#### IpRange

| Field | Description |
| --- | --- |
| `"cidr"` | The address in CIDR notation. |
| `"description"` | Which of our traffic reaches you from this address |

Operations: List.

API path: `/v1/ip_ranges`

#### MaintenanceWindow

| Field | Description |
| --- | --- |
| `"alert_condition_groups"` | Condition groups that determine which alerts this maintenance window applies to |
| `"archived_at"` | When this maintenance window was archived, if it has been |
| `"created_at"` | When this maintenance window was created |
| `"end_at"` | When the maintenance window ends |
| `"escalation_targets"` | If set, alerts matching this window will be escalated to these targets |
| `"id"` | Unique identifier for this maintenance window |
| `"incident_id"` | If set, alerts matching this window will be automatically attached to this incident |
| `"lead"` |  |
| `"name"` | Human readable name for the maintenance window |
| `"notification_message"` | Custom message included in notifications about this maintenance window |
| `"notify_channels"` | Channels to notify about the maintenance window starting and ending |
| `"notify_end_minutes_before"` | Minutes before the end to send a notification to the configured channels |
| `"notify_start_minutes_before"` | Minutes before the start to send a notification to the configured channels |
| `"owning_team_ids"` | IDs of teams that own this maintenance window. |
| `"reroute_on_end"` | Whether to retrigger firing alerts through alert routing when the window ends |
| `"resolve_on_end"` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `"show_in_sidebar"` | Whether to show this maintenance window in the dashboard sidebar when active |
| `"start_at"` | When the maintenance window starts |
| `"updated_at"` | When this maintenance window was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/maintenance_windows`

#### ManagedResource

| Field | Description |
| --- | --- |
| `"annotations"` | Annotations that track metadata about this resource |
| `"managed_by"` | How is this resource managed |
| `"resource_id"` | The ID of the resource that this relates to |
| `"resource_type"` | The type of the related resource |
| `"source_url"` | The url of the external repository where this resource is managed (if there is one) |

Operations: Create.

API path: `/v2/managed_resources`

#### OnCallNotificationMethodPublicV2

| Field | Description |
| --- | --- |
| `"address"` | The address of this method (e.g. |
| `"id"` | Unique identifier for this notification method |
| `"is_usable"` | Whether this method is ready to receive notifications. |
| `"method_type"` | The high-level type of notification method. |
| `"phone_details"` |  |

Operations: List.

API path: `/v2/users/{user_id}/notification_methods`

#### OnCallNotificationPause

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"ends_at"` | When notifications resume |
| `"id"` | Unique identifier for this notification pause |
| `"reason"` | Free text reason for why notifications are paused, shown to teammates |
| `"starts_at"` | When notifications stop being sent to the user |
| `"updated_at"` |  |
| `"user_id"` | The user whose on-call notifications are paused in this time window |

Operations: List, Load.

API path: `/v2/on_call_notification_pauses`

#### OnCallNotificationRulePublicV2

| Field | Description |
| --- | --- |
| `"app"` |  |
| `"delay_seconds"` | Delay in seconds before this rule activates. |
| `"id"` | Unique identifier for this notification rule |
| `"method_target"` |  |
| `"method_type"` | The high-level type of notification method. |
| `"phone"` |  |
| `"rule_type"` | The urgency level this rule applies to |

Operations: List.

API path: `/v2/users/{user_id}/notification_rules`

#### PayConfig

| Field | Description |
| --- | --- |
| `"base_rate_cents"` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `"created_at"` |  |
| `"currency"` | Currency this config pays in, in ISO 4217 format |
| `"id"` | Unique identifier for this pay config |
| `"name"` | Human readable name for this pay config |
| `"one_off_rules"` | Rules that apply over a single window of time, such as a public holiday |
| `"published_at"` | When a published report first priced against this config. |
| `"rate_time_unit"` | The unit of time every rate on this config is quoted per. |
| `"timezone"` | IANA timezone this config's rules are interpreted in |
| `"updated_at"` |  |
| `"weekly_rules"` | Rules that apply every week, by day of week and time of day, in evaluation order |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs`

#### PayConfigOneOffRule

| Field | Description |
| --- | --- |
| `"end_at"` | When this rule stops applying |
| `"id"` | Unique identifier for this rule, stable across edits to the config |
| `"name"` | Human readable name for this rule |
| `"rate_cents"` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `"start_at"` | When this rule starts applying |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigWeeklyRule

| Field | Description |
| --- | --- |
| `"end_time"` | Time of day this rule ends, in 24 hour format. |
| `"id"` | Unique identifier for this rule, stable across edits to the config |
| `"rate_cents"` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `"start_time"` | Time of day this rule starts, in 24 hour format |
| `"weekdays"` | Days of the week this rule applies on |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayReport

| Field | Description |
| --- | --- |
| `"created_at"` | When this report was created |
| `"creator"` |  |
| `"end_date"` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"error_code"` | Why a report could not be generated |
| `"error_message"` | What went wrong, written for whoever asked for the report. |
| `"id"` | Unique identifier for this pay report |
| `"name"` | Human readable name for this report |
| `"overlapping_shifts"` | How time spent on more than one schedule at once was paid |
| `"pay_config_expression"` |  |
| `"pay_config_id"` | The pay config to price every shift with. |
| `"published_at"` | When this report was published. |
| `"rotation_filters"` | Narrows some of these schedules to a subset of their rotations. |
| `"schedule_ids"` | The schedules this report covers |
| `"start_date"` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"status"` | How far a report has got through being generated |
| `"total_duration_seconds"` | Total time spent on-call across every shift in this report, in seconds. |
| `"total_pay_by_currency"` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `"unpaid_shifts"` | Whether shifts that priced to zero are part of the report |
| `"updated_at"` | When this report was last updated |

Operations: Create, List, Load, Remove.

API path: `/v2/pay_reports`

#### PayReportsPublishResultV2

| Field | Description |
| --- | --- |
| `"cc_emails"` | Email addresses to send a copy of the report to |
| `"created_at"` | When this report was created |
| `"creator"` |  |
| `"end_date"` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"error_code"` | Why a report could not be generated |
| `"error_message"` | What went wrong, written for whoever asked for the report. |
| `"id"` | Unique identifier for this pay report |
| `"name"` | Human readable name for this report |
| `"overlapping_shifts"` | How time spent on more than one schedule at once was paid |
| `"published_at"` | When this report was published. |
| `"schedule_ids"` | The schedules this report covers |
| `"send_user_breakdowns"` | Whether each user in the report is emailed their own pay breakdown |
| `"start_date"` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"status"` | How far a report has got through being generated |
| `"total_duration_seconds"` | Total time spent on-call across every shift in this report, in seconds. |
| `"total_pay_by_currency"` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `"unpaid_shifts"` | Whether shifts that priced to zero are part of the report |
| `"updated_at"` | When this report was last updated |

Operations: Create.

API path: `/v2/pay_reports/{id}/actions/publish`

#### PayReportsUnpublishResultV2

| Field | Description |
| --- | --- |
| `"created_at"` | When this report was created |
| `"creator"` |  |
| `"end_date"` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"error_code"` | Why a report could not be generated |
| `"error_message"` | What went wrong, written for whoever asked for the report. |
| `"id"` | Unique identifier for this pay report |
| `"name"` | Human readable name for this report |
| `"overlapping_shifts"` | How time spent on more than one schedule at once was paid |
| `"published_at"` | When this report was published. |
| `"schedule_ids"` | The schedules this report covers |
| `"start_date"` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `"status"` | How far a report has got through being generated |
| `"total_duration_seconds"` | Total time spent on-call across every shift in this report, in seconds. |
| `"total_pay_by_currency"` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `"unpaid_shifts"` | Whether shifts that priced to zero are part of the report |
| `"unpublish_reason"` | Why this report is being unpublished |
| `"updated_at"` | When this report was last updated |

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
| `"assignment_rules"` |  |
| `"conditions"` | Conditions which determine which resources are in scope for this policy |
| `"created_at"` |  |
| `"debrief"` | Set when policy_type is debrief. |
| `"description"` | Human readable description of the policy |
| `"expressions"` | The expressions relating to this policy |
| `"follow_up"` | Set when policy_type is follow_up. |
| `"id"` | Unique ID of the policy |
| `"name"` | Human readable name of the policy |
| `"on_call_readiness"` | Set when policy_type is on_call_readiness. |
| `"policy_type"` | Type of the policy, specifying what this applies to |
| `"post_mortem"` | Set when policy_type is post_mortem. |
| `"schedule"` | Detects gaps in on-call coverage. |
| `"status"` | Disabled policies stop evaluating but keep their config |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/policies`

#### PolicyFinding

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"days"` | Days outside the policy's due date |
| `"debrief"` | Set when policy_type is debrief. |
| `"dismissal"` |  |
| `"due_at"` | When this finding becomes overdue |
| `"follow_up"` | Set when policy_type is follow_up. |
| `"id"` | Unique ID of the finding |
| `"last_checked_at"` | When this finding was last re-evaluated |
| `"on_call_readiness"` | Set when policy_type is on_call_readiness. |
| `"policy_id"` | The policy this finding was raised against |
| `"policy_type"` | Type of the policy this finding was raised against |
| `"post_mortem"` | Set when policy_type is post_mortem. |
| `"responsible_users"` | Who is expected to resolve this finding |
| `"schedule"` | Set when policy_type is schedule. |
| `"shift_conflict"` | Set when policy_type is shift_conflict. |
| `"state"` | Where this finding is in its lifecycle |
| `"updated_at"` |  |
| `"vacation_conflict"` | Set when policy_type is vacation_conflict. |

Operations: List, Load.

API path: `/v2/policy_findings`

#### PolicyFindingsDismissResultV2

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"days"` | Days outside the policy's due date |
| `"debrief"` | Set when policy_type is debrief. |
| `"dismissal"` |  |
| `"due_at"` | When this finding becomes overdue |
| `"follow_up"` | Set when policy_type is follow_up. |
| `"id"` | Unique ID of the finding |
| `"last_checked_at"` | When this finding was last re-evaluated |
| `"on_call_readiness"` | Set when policy_type is on_call_readiness. |
| `"policy_id"` | The policy this finding was raised against |
| `"policy_type"` | Type of the policy this finding was raised against |
| `"post_mortem"` | Set when policy_type is post_mortem. |
| `"reason"` | Why this finding is being dismissed |
| `"responsible_users"` | Who is expected to resolve this finding |
| `"schedule"` | Set when policy_type is schedule. |
| `"shift_conflict"` | Set when policy_type is shift_conflict. |
| `"state"` | Where this finding is in its lifecycle |
| `"updated_at"` |  |
| `"vacation_conflict"` | Set when policy_type is vacation_conflict. |

Operations: Create.

API path: `/v2/policy_findings/{id}/actions/dismiss`

#### PolicyFindingsRestoreResultV2

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"days"` | Days outside the policy's due date |
| `"debrief"` | Set when policy_type is debrief. |
| `"dismissal"` |  |
| `"due_at"` | When this finding becomes overdue |
| `"follow_up"` | Set when policy_type is follow_up. |
| `"id"` | Unique ID of the finding |
| `"last_checked_at"` | When this finding was last re-evaluated |
| `"on_call_readiness"` | Set when policy_type is on_call_readiness. |
| `"policy_id"` | The policy this finding was raised against |
| `"policy_type"` | Type of the policy this finding was raised against |
| `"post_mortem"` | Set when policy_type is post_mortem. |
| `"responsible_users"` | Who is expected to resolve this finding |
| `"schedule"` | Set when policy_type is schedule. |
| `"shift_conflict"` | Set when policy_type is shift_conflict. |
| `"state"` | Where this finding is in its lifecycle |
| `"updated_at"` |  |
| `"vacation_conflict"` | Set when policy_type is vacation_conflict. |

Operations: Create.

API path: `/v2/policy_findings/{id}/actions/restore`

#### PostmortemDocument

| Field | Description |
| --- | --- |
| `"created_at"` | Timestamp for when the document was created |
| `"document_url"` | A URL to view the post-mortem document in the incident.io dashboard |
| `"editors"` | The list of users who have edited this post-mortem document |
| `"exported_urls"` | URLs of any external locations this document has been exported to |
| `"id"` | Unique identifier for the post-mortem document |
| `"incident_id"` | The unique identifier of the incident that this post-mortem document belongs to |
| `"status"` | The current status of this post-mortem document |
| `"title"` | The display title of the post-mortem document |
| `"type"` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `"updated_at"` | Timestamp for when the document was last updated |

Operations: List, Load, Update.

API path: `/v1/postmortem_documents`

#### PostmortemDocumentsAttachResultV1

| Field | Description |
| --- | --- |
| `"document_provider"` | The provider hosting the document. |
| `"incident_id"` | The unique identifier of the incident to attach the post-mortem document to |
| `"permalink"` | A URL pointing to the externally-hosted post-mortem document |

Operations: Create.

API path: `/v1/postmortem_documents/actions/attach`

#### PostmortemDocumentsShowContentResultV1

| Field | Description |
| --- | --- |
| `"markdown"` | The full content of the post-mortem document, rendered as markdown. |

Operations: Load.

API path: `/v1/postmortem_documents/{id}/content`

#### Schedule

| Field | Description |
| --- | --- |
| `"annotations"` | Annotations that track metadata about this resource |
| `"config"` |  |
| `"created_at"` |  |
| `"current_shifts"` | Shifts that are ongoing for this schedule |
| `"holidays_public_config"` |  |
| `"id"` | Unique internal ID of the schedule |
| `"name"` | Human readable name synced from external provider |
| `"next_shifts"` | The shifts after the next changeover. |
| `"permalink"` | A permanent link to this schedule in the incident.io dashboard |
| `"team_ids"` | IDs of teams that own this schedule |
| `"timezone"` | Timezone of the schedule, as interpreted at the point of generating the report |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedules`

#### ScheduleEntriesListPayloadV2

| Field | Description |
| --- | --- |
| `"entry_window_end"` | The end of the window to preview entries for. |
| `"entry_window_start"` | The start of the window to preview entries for. |
| `"final"` | The effective schedule after overrides have been merged in |
| `"overrides"` | Overrides that apply within the requested window |
| `"schedule"` |  |
| `"scheduled"` | Entries from the schedule's rotation rules, before overrides are applied |

Operations: Create.

API path: `/v2/schedules/{id}/actions/preview_entries`

#### ScheduleEntry

| Field | Description |
| --- | --- |
| `"pagination_meta"` |  |
| `"schedule_entries"` | The schedule entries for a window of time, grouped by where they come from. |

Operations: Load.

API path: `/v2/schedule_entries`

#### ScheduleOverride

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"end_at"` | End of the override |
| `"id"` | Unique internal ID of the schedule override |
| `"layer_id"` | The layer on the rotation on the schedule that this override applies to |
| `"rotation_id"` | The rotation on the schedule that this override applies to |
| `"schedule_id"` | The schedule that this override applies to |
| `"start_at"` | Start of the override |
| `"updated_at"` |  |
| `"user"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedule_overrides`

#### ScheduleReplica

| Field | Description |
| --- | --- |
| `"created_at"` | When this schedule replica was first created |
| `"id"` | Unique identifier of the schedule replica |
| `"last_sync_error"` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `"last_synced_at"` | When the replica was last successfully synced to the external provider. |
| `"mirror_window_days"` | How many days ahead to mirror this schedule into the external provider. |
| `"replica_fallback_user_id"` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `"replica_provider"` | The external provider where this schedule is replicated to |
| `"replica_provider_id"` | The ID of the schedule in the external provider that this replica syncs to. |
| `"schedule_id"` | The ID of the incident.io schedule that this replica is syncing from |
| `"sources"` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `"updated_at"` | When this schedule replica was last updated |
| `"user_statuses"` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

Operations: Create, List, Load, Remove.

API path: `/v2/schedules/{schedule_id}/replicas`

#### ScheduleSyncRule

| Field | Description |
| --- | --- |
| `"annotations"` | Annotations that track metadata about this resource |
| `"created_at"` |  |
| `"id"` | Unique identifier of the sync rule |
| `"permanent_member_user_ids"` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `"rotation_id"` | If set, only members of this rotation sync to the user group. |
| `"schedule_id"` | The schedule this rule belongs to |
| `"schedule_sync_target"` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `"schedule_sync_target_id"` | The sync target ID this rule links to |
| `"sync_type"` | Which schedule members sync to the user group |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedules/{schedule_id}/sync_rules`

#### ScheduleSyncTarget

| Field | Description |
| --- | --- |
| `"add_bot_to_group"` | Whether the incident.io bot should be added to the group as a member. |
| `"annotations"` | Annotations that track metadata about this resource |
| `"created_at"` |  |
| `"id"` | Unique identifier of the sync target |
| `"linked_schedules"` | Schedules with an active sync rule pointing at this target |
| `"new_slack_user_group"` |  |
| `"slack_team_id"` | Slack team (workspace) ID the user group lives in. |
| `"slack_user_group_id"` | Slack ID of the user group whose membership is kept in sync. |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/schedule_sync_targets`

#### Secret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` | Optional description of what this secret is for |
| `"id"` | Unique identifier for this secret |
| `"last_four_chars"` | The last four characters of the current value, for masked display. |
| `"name"` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `"owning_team_ids"` | IDs of the teams that own this secret. |
| `"secret"` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `"updated_at"` |  |
| `"value"` | The secret's plaintext value. |
| `"version"` | The current version number, incremented on each rotation |
| `"versions"` | The secret's versions, newest first |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/secrets/{id}/actions/rotate`

#### Severity

| Field | Description |
| --- | --- |
| `"created_at"` | When the action was created |
| `"description"` | Description of the severity |
| `"id"` | Unique identifier of the severity |
| `"name"` | Human readable name of the severity |
| `"rank"` | Rank to help sort severities (lower numbers are less severe) |
| `"updated_at"` | When the action was last updated |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/severities`

#### StatusPage

| Field | Description |
| --- | --- |
| `"description"` | The description of this status page |
| `"id"` | Unique ID of this status page |
| `"name"` | The title of this status page |
| `"public_url"` | The public URL of this status page |

Operations: List, Load.

API path: `/v2/status_pages`

#### StatusPageComponent

| Field | Description |
| --- | --- |
| `"description"` | Optional short description of this component |
| `"id"` | Unique identifier for this component |
| `"management_meta"` |  |
| `"name"` | Human-readable name for the component |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/status_page_components`

#### StatusPageComponentAvailability

| Field | Description |
| --- | --- |
| `"availability_percent"` | Availability over the window as a percentage, floored (for example "99.94"). |
| `"component_id"` | ID of the component. |
| `"data_available_since"` | Earliest time we have status data for this component. |
| `"end_at"` | End of the requested availability window |
| `"start_at"` | Start of the requested availability window |
| `"status_page_id"` | ID of the status page |

Operations: Load.

API path: `/v2/status_pages/{status_page_id}/components/{component_id}/availability`

#### StatusPageIncident

| Field | Description |
| --- | --- |
| `"component_impacts"` | A list of time periods that this status page incident had an impact on a component |
| `"component_statuses"` | An array of mappings from component ID to current component status |
| `"id"` | A unique ID for this status page incident |
| `"idempotency_key"` | A unique key to de-duplicate requests. |
| `"incident_status"` | Current status for this incident |
| `"message"` | Markdown initial update on this status page incident |
| `"name"` | A title for the incident |
| `"notify_subscribers"` | Whether to notify subscribers about this status page incident. |
| `"published_at"` | When this status page incident was published to the status page |
| `"status_page_id"` | The ID of the corresponding status page |
| `"updates"` | A list of updates posted to this status page incident |

Operations: Create, List, Load, Update.

API path: `/v2/status_page_incidents`

#### StatusPageIncidentUpdate

| Field | Description |
| --- | --- |
| `"component_statuses"` | An array of mappings from component ID to component status. |
| `"incident_status"` | Optional new status for this status page incident. |
| `"message"` | Markdown update on what's changed about this status page incident |
| `"notify_subscribers"` | Whether to notify subscribers about this incident update. |
| `"status_page_incident_id"` | ID of the status page incident |

Operations: Create.

API path: `/v2/status_page_incident_updates`

#### StatusPageLinkedResponseIncident

| Field | Description |
| --- | --- |
| `"id"` | ID of the Response incident |
| `"linked_at"` | When the Response incident was linked to the status page incident |

Operations: List.

API path: `/v1/status-pages/{id}/incidents/{incident_id}/response-incidents`

#### StatusPageMaintenance

| Field | Description |
| --- | --- |
| `"affected_component_ids"` | An array of IDs of component affected by the maintenance window |
| `"automate_maintenance_status"` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `"component_maintenance_periods"` | A list of time periods where components were under maintenance during this status page maintenance window |
| `"end_at"` | The time the maintenance window ends |
| `"id"` | A unique ID for this status page maintenance window |
| `"idempotency_key"` | A unique key to de-duplicate requests. |
| `"maintenance_status"` | Current status for this maintenance window |
| `"message"` | Markdown initial update on this status page maintenance window |
| `"name"` | A title for the maintenance window |
| `"notify_subscribers"` | Whether to notify subscribers about this status page maintenance. |
| `"published_at"` | When this status page maintenance window was published to the status page |
| `"start_at"` | The time the maintenance window starts |
| `"status_page_id"` | The ID of the corresponding status page |
| `"updates"` | A list of updates posted to this status page maintenance window |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/status_page_maintenances`

#### StatusPageMaintenanceUpdate

| Field | Description |
| --- | --- |
| `"component_statuses"` | An array of mappings from component ID to component status. |
| `"maintenance_status"` | Optional new status for this status page maintenance window. |
| `"message"` | Markdown update on what's changed about this status page maintenance window |
| `"notify_subscribers"` | Whether to notify subscribers about this status page maintenance update. |
| `"status_page_maintenance_id"` | ID of the status page maintenance window |

Operations: Create.

API path: `/v2/status_page_maintenance_updates`

#### StatusPageStructure

| Field | Description |
| --- | --- |
| `"current_structure"` |  |
| `"display_uptime_mode"` | How the page shows uptime against its components |
| `"id"` |  |
| `"management_meta"` |  |

Operations: Load.

API path: `/v2/status_page_structures/{status_page_id}`

#### StatusPagesCreateStatusPageRetrospectiveIncidentResultV2

| Field | Description |
| --- | --- |
| `"idempotency_key"` | A unique key to de-duplicate requests. |
| `"name"` | A title for the incident |
| `"status_page_id"` | ID of the status page. |
| `"updates"` | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

Operations: Create.

API path: `/v2/status_page_retrospective_incidents`

#### Team

| Field | Description |
| --- | --- |
| `"catalog_entry"` |  |
| `"id"` | Unique ID of the team |
| `"members"` | Members of the team |
| `"name"` | Name of the team |

Operations: List, Load.

API path: `/v3/teams`

#### TelemetryDataSource

| Field | Description |
| --- | --- |
| `"created_at"` | When this data source was created |
| `"datadog_config"` | Datadog-specific credential updates |
| `"enabled"` | Whether this data source is enabled |
| `"grafana_config"` | Grafana-specific credential and endpoint updates |
| `"id"` | Unique identifier for this data source |
| `"name"` | Human-readable name of the data source |
| `"provider"` | Provider that hosts this data source |
| `"source_type"` | Type of data source (e.g., prometheus, loki, tempo) |
| `"updated_at"` | When this data source was last updated |
| `"version"` | Upstream tool version captured at probe time (e.g. |

Operations: Update.

API path: `/v2/telemetry/data_sources/{id}`

#### User

| Field | Description |
| --- | --- |
| `"base_role"` |  |
| `"custom_roles"` |  |
| `"email"` | Email address of the user. |
| `"id"` | Unique identifier of the user |
| `"is_active"` | Whether the user is active. |
| `"name"` | Name of the user |
| `"role"` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `"seats"` |  |
| `"slack_user_id"` | Slack ID of the user |

Operations: List, Load.

API path: `/v2/users`

#### UsersShowPagingProviderResultV2

| Field | Description |
| --- | --- |
| `"preferred_escalation_provider"` | The user's effective escalation provider. |

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
| `"annotations"` | Annotations that track metadata about this resource |
| `"auto_run_mode"` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `"condition_groups"` | Conditions that apply to the workflow trigger |
| `"continue_on_step_error"` | Whether to continue executing the workflow if a step fails |
| `"delay"` |  |
| `"expressions"` | The expressions to use in the workflow |
| `"folder"` | Folder to display the workflow in |
| `"form_fields"` | User-configured form fields available in the workflow scope. |
| `"id"` | Unique identifier for the workflow |
| `"include_private_escalations"` | Whether to include private escalations |
| `"include_private_incidents"` | DEPRECATED: use `private_incident_scope` instead. |
| `"management_meta"` |  |
| `"name"` | Name provided by the user when creating the workflow |
| `"once_for"` | This workflow will run 'once for' a list of references |
| `"owning_team_ids"` | IDs of the teams that own this workflow |
| `"private_incident_scope"` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `"runs_from"` | The time from which this workflow will run on incidents |
| `"runs_on_incident_modes"` | Which incident modes should this workflow run on? |
| `"runs_on_incidents"` | Which incidents should the workflow be applied to? |
| `"shortform"` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `"skip_step_upgrades"` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `"state"` | What state this workflow is in |
| `"steps"` | Steps that are executed as part of the workflow |
| `"trigger"` | Trigger to set on the workflow |
| `"version"` | Revision of the workflow, uniquely identifying it's version |
| `"workflow"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/workflows`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `"cancelled_at"` | If the run was cancelled, this is when |
| `"created_at"` | When the resource was created |
| `"enqueued_at"` | When the run was enqueued for execution |
| `"error"` | Error produced by the workflow, if it failed |
| `"id"` | Unique identifier for the workflow run |
| `"incident_id"` | If this run was against a specific incident, this is the ID of that incident |
| `"incident_reference"` | If this run was against a specific incident, this is the reference of that incident |
| `"progress"` | Status of each step as it is worked |
| `"scheduled_at"` | When the run was scheduled for |
| `"updated_at"` | When the resource was last updated |
| `"workflow_id"` | Unique identifier for the underlying workflow |
| `"workflow_name"` | Name of the underlying workflow |
| `"workflow_version_id"` | Unique identifier of the workflow version |
| `"workflow_version_number"` | Monotonically incrementing version number for the version that ran |

Operations: List, Load.

API path: `/v2/workflow_runs`



## Entities


### Action

Create an instance: `action := client.Action(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `assignee_id` | `string` | ID of the user this action is assigned to |
| `completed_at` | `string` | When the action was completed |
| `created_at` | `string` | When the action was created |
| `creator` | `map[string]any` |  |
| `description` | `string` | Description of the action |
| `id` | `string` | Unique identifier for the action |
| `incident_id` | `string` | Unique identifier of the incident the action belongs to |
| `status` | `string` | Status of the action |
| `updated_at` | `string` | When the action was last updated |

#### Example: Load

```go
action, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(action.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
actions, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range actions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Action(nil).Create(map[string]any{
    "description": "example_description",
    "incident_id": "example_incident_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Alert

Create an instance: `alert := client.Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `[]any` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `[]any` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Load

```go
alert, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alert.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
alerts, err := client.Alert(nil).List(map[string]any{"page_size": 1}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alerts.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertAttribute

Create an instance: `alertAttribute := client.AlertAttribute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `array` | `bool` | Whether this attribute is an array |
| `emoji` | `string` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | The ID of this attribute |
| `name` | `string` | Unique name of this attribute |
| `required` | `bool` | Whether this attribute is required. |
| `type` | `string` | Engine resource name for this attribute |

#### Example: Load

```go
alertAttribute, err := client.AlertAttribute(nil).Load(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertAttribute.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
alertAttributes, err := client.AlertAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertAttributes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertAttribute(nil).Create(map[string]any{
    "array": true,
    "name": "example_name",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertEventsV2

Create an instance: `alertEventsV2 := client.AlertEventsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deduplication_key` | `string` | The deduplication key that the event has been processed with |
| `description` | `string` | Description that optionally adds more detail to title. |
| `message` | `string` | Human readable message giving detail about the event |
| `metadata` | `map[string]any` | Any additional metadata that you've configured your alert source to parse |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Status of the event |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |

#### Example: Create

```go
result, err := client.AlertEventsV2(nil).Create(map[string]any{
    "alert_source_config_id": "example_alert_source_config_id",
    "status": "example_status",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertNote

Create an instance: `alertNote := client.AlertNote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `string` | ID of the alert group this note is attached to. |
| `alert_id` | `string` | ID of the alert this note is attached to. |
| `content` | `string` | Markdown body of the note |
| `created_at` | `string` | When this note was first created |
| `creator` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the alert note |
| `images` | `[]any` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | When this note was last updated |

#### Example: Load

```go
alertNote, err := client.AlertNote(nil).Load(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertNote.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
alertNotes, err := client.AlertNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertNotes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertNote(nil).Create(map[string]any{
    "content": "example_content",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertRoute

Create an instance: `alertRoute := client.AlertRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_sources` | `[]any` | Which alert sources this route matches |
| `condition_groups` | `[]any` | Filter: the condition groups that must be true for this route to fire |
| `created_at` | `string` | When this alert route was created |
| `enabled` | `bool` | Whether this alert route is enabled |
| `escalation_config` | `map[string]any` |  |
| `expressions` | `[]any` | The expressions used by bindings in this route |
| `grouping_config` | `map[string]any` |  |
| `id` | `string` | Unique identifier for this alert route |
| `incident_config` | `map[string]any` |  |
| `is_private` | `bool` | Whether this alert route is private. |
| `message_config` | `map[string]any` |  |
| `name` | `string` | The name of this alert route, for the user's reference |
| `owning_team_ids` | `[]any` | IDs of teams that own this alert route |
| `updated_at` | `string` | When this alert route was last updated |
| `version` | `int` | The version of this alert route |

#### Example: Load

```go
alertRoute, err := client.AlertRoute(nil).Load(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertRoute.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
alertRoutes, err := client.AlertRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertRoutes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertRoute(nil).Create(map[string]any{
    "alert_sources": []any{},
    "condition_groups": []any{},
    "enabled": true,
    "escalation_config": map[string]any{},
    "expressions": []any{},
    "grouping_config": map[string]any{},
    "incident_config": map[string]any{},
    "is_private": true,
    "message_config": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertSource

Create an instance: `alertSource := client.AlertSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_events_url` | `string` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `bool` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `int` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `map[string]any` |  |
| `disabled` | `bool` | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `map[string]any` |  |
| `filter_condition_groups` | `[]any` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `map[string]any` |  |
| `http_custom_options` | `map[string]any` |  |
| `id` | `string` | The ID of this alert source |
| `jira_options` | `map[string]any` |  |
| `name` | `string` | Unique name of the alert source |
| `owning_team_ids` | `[]any` | IDs of teams that own this alert source |
| `rate_limit_sharding` | `map[string]any` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Type of alert source |
| `template` | `map[string]any` |  |

#### Example: Load

```go
alertSource, err := client.AlertSource(nil).Load(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertSource.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
alertSources, err := client.AlertSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertSources.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertSource(nil).Create(map[string]any{
    "azure_devops_options": map[string]any{},
    "email_options": map[string]any{},
    "heartbeat_options": map[string]any{},
    "http_custom_options": map[string]any{},
    "jira_options": map[string]any{},
    "name": "example_name",
    "rate_limit_sharding": map[string]any{},
    "source_type": "example_source_type",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertSourcesV2

Create an instance: `alertSourcesV2 := client.AlertSourcesV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `owning_team_ids` | `[]any` | IDs of teams that own this alert source |
| `source_type` | `string` | Type of alert source |
| `template` | `map[string]any` |  |

#### Example: Create

```go
result, err := client.AlertSourcesV2(nil).Create(map[string]any{
    "source_type": "example_source_type",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertTag

Create an instance: `alertTag := client.AlertTag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `[]any` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `name` | `string` | The tag name |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `[]any` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: List

```go
alertTags, err := client.AlertTag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertTags.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertTag(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "tags": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertsAddTagsResultV2

Create an instance: `alertsAddTagsResultV2 := client.AlertsAddTagsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `[]any` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `[]any` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```go
result, err := client.AlertsAddTagsResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "tags": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertsSetTagsResultV2

Create an instance: `alertsSetTagsResultV2 := client.AlertsSetTagsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `[]any` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `[]any` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `[]any` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```go
result, err := client.AlertsSetTagsResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "tags": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AlertsTransitionIncidentAlertResultV2

Create an instance: `alertsTransitionIncidentAlertResultV2 := client.AlertsTransitionIncidentAlertResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `map[string]any` |  |
| `alert_id` | `string` | Alert to attach to the incident |
| `alert_route_id` | `string` | The ID of the alert route that created this incident alert |
| `id` | `string` | The ID of this alert |
| `incident` | `map[string]any` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Incident to attach the alert to |
| `re_relate` | `bool` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | What state to move the connection to |

#### Example: List

```go
alertsTransitionIncidentAlertResultV2s, err := client.AlertsTransitionIncidentAlertResultV2(nil).List(map[string]any{"page_size": 1}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range alertsTransitionIncidentAlertResultV2s.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AlertsTransitionIncidentAlertResultV2(nil).Create(map[string]any{
    "alert_id": "example_alert_id",
    "incident_id": "example_incident_id",
    "state": "example_state",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AnnouncementRule

Create an instance: `announcementRule := client.AnnouncementRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition_groups` | `[]any` | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | When the rule was created |
| `id` | `string` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `[]any` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Human readable name for the rule |
| `owning_team_ids` | `[]any` | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `[]any` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `string` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `string` | Where incident updates are shared once the incident is announced |
| `updated_at` | `string` | When the rule was last updated |

#### Example: Load

```go
announcementRule, err := client.AnnouncementRule(nil).Load(map[string]any{"id": "announcement_rule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(announcementRule.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
announcementRules, err := client.AnnouncementRule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range announcementRules.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AnnouncementRule(nil).Create(map[string]any{
    "condition_groups": []any{},
    "mode": "example_mode",
    "name": "example_name",
    "update_sharing_mode": "example_update_sharing_mode",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### AnnouncementTemplate

Create an instance: `announcementTemplate := client.AnnouncementTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actions` | `[]any` | Actions shown on the announcement post, in rank order |
| `fields` | `[]any` | Fields shown on the announcement post, in rank order |
| `id` | `string` | Unique identifier for this announcement template |
| `is_default` | `bool` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Name of this announcement template |
| `owning_team_ids` | `[]any` | IDs of the teams that own this template |

#### Example: Load

```go
announcementTemplate, err := client.AnnouncementTemplate(nil).Load(map[string]any{"id": "announcement_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(announcementTemplate.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
announcementTemplates, err := client.AnnouncementTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range announcementTemplates.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.AnnouncementTemplate(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ApiKey

Create an instance: `apiKey := client.ApiKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `comments` | `string` | Freeform notes about this API key |
| `created_at` | `string` | When the API key was created |
| `creator` | `map[string]any` |  |
| `id` | `string` | Unique identifier for this API key |
| `last_used_at` | `string` | When the key was last used to authenticate a request |
| `name` | `string` | The name of the API key, for the user's reference |
| `role_names` | `[]any` | Account-level roles to assign to the API key. |
| `roles` | `[]any` | The account-level roles assigned to this API key |
| `team_ids` | `[]any` | IDs of teams that this API key is scoped to |
| `team_role_names` | `[]any` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `[]any` | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | When the current token for this API was last issued. |

#### Example: Load

```go
apiKey, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKey.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
apiKeys, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range apiKeys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "name": "example_name",
    "role_names": []any{},
    "team_ids": []any{},
    "team_role_names": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CallRoute

Create an instance: `callRoute := client.CallRoute(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowed_callers` | `[]any` | The numbers allowed to call this route. |
| `country_code` | `string` | The country this route's number belongs to |
| `created_at` | `string` |  |
| `current_state` | `string` | Where this route is in provisioning. |
| `custom_language` | `string` | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Unique identifier for this call route |
| `name` | `string` | Name for this call route |
| `options` | `[]any` | The phone-tree menu this route presents. |
| `path` | `[]any` | Who we page when a call comes in. |
| `phone_number` | `string` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` |  |
| `use_caller_allowlist` | `bool` | Whether this route only answers calls from its allowed callers |

#### Example: Load

```go
callRoute, err := client.CallRoute(nil).Load(map[string]any{"id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(callRoute.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
callRoutes, err := client.CallRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range callRoutes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CallRouteAllowedCaller

Create an instance: `callRouteAllowedCaller := client.CallRouteAllowedCaller(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for this allowed caller |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number allowed to call this route, in international format |

#### Example: Load

```go
callRouteAllowedCaller, err := client.CallRouteAllowedCaller(nil).Load(map[string]any{"id": "call_route_allowed_caller_id", "call_route_id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(callRouteAllowedCaller.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
callRouteAllowedCallers, err := client.CallRouteAllowedCaller(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range callRouteAllowedCallers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CallRouteAllowedCaller(nil).Create(map[string]any{
    "id": "example_id",
    "phone_number": "example_phone_number",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CallRouteOption

Create an instance: `callRouteOption := client.CallRouteOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `id` | `string` | Unique identifier for this option |
| `path` | `[]any` | Who we page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Load

```go
callRouteOption, err := client.CallRouteOption(nil).Load(map[string]any{"id": "call_route_option_id", "call_route_id": "call_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(callRouteOption.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
callRouteOptions, err := client.CallRouteOption(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range callRouteOptions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CallRouteOption(nil).Create(map[string]any{
    "id": "example_id",
    "digit": "example_digit",
    "path": []any{},
    "prompt": "example_prompt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CallSession

Create an instance: `callSession := client.CallSession(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_at` | `string` | When the call session ended. |
| `id` | `string` | Unique identifier for this call session |
| `incident_id` | `string` | The incident this call session belongs to |
| `started_at` | `string` | When the call session started |

#### Example: List

```go
callSessions, err := client.CallSession(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range callSessions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CallTranscriptEntry

Create an instance: `callTranscriptEntry := client.CallTranscriptEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | What was said |
| `id` | `string` | Unique identifier for this transcript entry |
| `medium` | `string` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `string` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `string` | When the participant started speaking |

#### Example: List

```go
callTranscriptEntrys, err := client.CallTranscriptEntry(nil).List(map[string]any{"call_session_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range callTranscriptEntrys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CatalogEntry

Create an instance: `catalogEntry := client.CatalogEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aliases` | `[]any` | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | When this entry was archived |
| `attribute_values` | `map[string]any` | Values of this entry |
| `catalog_entry` | `map[string]any` |  |
| `catalog_type` | `map[string]any` |  |
| `catalog_type_id` | `string` | ID of this catalog type |
| `created_at` | `string` | When this entry was created |
| `external_id` | `string` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | ID of this catalog entry |
| `name` | `string` | Name is the human readable name of this entry |
| `rank` | `int` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `[]any` | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | When this entry was last updated |

#### Example: Load

```go
catalogEntry, err := client.CatalogEntry(nil).Load(map[string]any{"id": "catalog_entry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(catalogEntry.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
catalogEntrys, err := client.CatalogEntry(nil).List(map[string]any{"catalog_type_id": "example", "page_size": 1}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range catalogEntrys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CatalogEntry(nil).Create(map[string]any{
    "attribute_values": map[string]any{},
    "catalog_type_id": "example_catalog_type_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CatalogResource

Create an instance: `catalogResource := client.CatalogResource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | Which category of resource |
| `description` | `string` | Human readable description for this resource |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `string` | Label for this catalog resource type |
| `type` | `string` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `string` | Documentation for the literal string value of this resource |

#### Example: List

```go
catalogResources, err := client.CatalogResource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range catalogResources.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### CatalogType

Create an instance: `catalogType := client.CatalogType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that can track metadata about this type |
| `categories` | `[]any` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `bool` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `[]any` | IDs of the teams that own this catalog type |
| `ranked` | `bool` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `[]any` | If populated, the integrations required for this type |
| `schema` | `map[string]any` |  |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `bool` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

#### Example: Load

```go
catalogType, err := client.CatalogType(nil).Load(map[string]any{"id": "catalog_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(catalogType.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
catalogTypes, err := client.CatalogType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range catalogTypes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CatalogType(nil).Create(map[string]any{
    "description": "example_description",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CatalogTypeSchema

Create an instance: `catalogTypeSchema := client.CatalogTypeSchema(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that can track metadata about this type |
| `attributes` | `[]any` |  |
| `categories` | `[]any` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `int` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `bool` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `bool` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `[]any` | IDs of the teams that own this catalog type |
| `ranked` | `bool` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `[]any` | If populated, the integrations required for this type |
| `schema` | `map[string]any` |  |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `bool` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `int` |  |

#### Example: Create

```go
result, err := client.CatalogTypeSchema(nil).Create(map[string]any{
    "catalog_type_id": "example_catalog_type_id",
    "attributes": []any{},
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CatalogV3

Create an instance: `catalogV3 := client.CatalogV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `string` | The unique identifier of the catalog type containing the entries |
| `entries` | `[]any` | A list of entries to update with their new values. |
| `update_attributes` | `[]any` | Optional list of specific attribute IDs to update across all entries. |

#### Example: Create

```go
result, err := client.CatalogV3(nil).Create(map[string]any{
    "catalog_type_id": "example_catalog_type_id",
    "entries": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CustomField

Create an instance: `customField := client.CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_type_id` | `string` | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the custom field |
| `field_type` | `string` | Type of custom field |
| `filter_by` | `map[string]any` |  |
| `fixed_filter` | `map[string]any` |  |
| `group_by_catalog_attribute_id` | `string` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | Which catalog attribute provides helptext for the options |
| `id` | `string` | Unique identifier for the custom field |
| `name` | `string` | Human readable name for the custom field |
| `updated_at` | `string` | When the action was last updated |

#### Example: Load

```go
customField, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customField.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
customFields, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range customFields.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "description": "example_description",
    "field_type": "example_field_type",
    "filter_by": map[string]any{},
    "fixed_filter": map[string]any{},
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### CustomFieldOption

Create an instance: `customFieldOption := client.CustomFieldOption(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `custom_field_id` | `string` | ID of the custom field this option belongs to |
| `id` | `string` | Unique identifier for the custom field option |
| `sort_key` | `int` | Sort key used to order the custom field options correctly |
| `value` | `string` | Human readable name for the custom field option. |

#### Example: Load

```go
customFieldOption, err := client.CustomFieldOption(nil).Load(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFieldOption.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
customFieldOptions, err := client.CustomFieldOption(nil).List(map[string]any{"custom_field_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range customFieldOptions.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.CustomFieldOption(nil).Create(map[string]any{
    "custom_field_id": "example_custom_field_id",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Escalation

Create an instance: `escalation := client.Escalation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this escalation was created |
| `creator` | `map[string]any` | The creator of this escalation. |
| `description` | `string` | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | Unique identifier of the escalation path that the escalation was created from |
| `events` | `[]any` | Events which describe the history of this escalation. |
| `id` | `string` | Unique ID of the escalation |
| `idempotency_key` | `string` | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | ID of an incident to associate with this escalation. |
| `priority` | `map[string]any` | The priority associated with this escalation. |
| `related_alerts` | `[]any` | Alerts related to this escalation |
| `related_incidents` | `[]any` | Incidents related to this escalation |
| `status` | `string` | Status of the escalation |
| `title` | `string` | The title of this escalation |
| `updated_at` | `string` | When this escalation was last updated |
| `user_ids` | `[]any` | IDs of users to escalate directly to |

#### Example: Load

```go
escalation, err := client.Escalation(nil).Load(map[string]any{"id": "escalation_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(escalation.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
escalations, err := client.Escalation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range escalations.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Escalation(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EscalationPath

Create an instance: `escalationPath := client.EscalationPath(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_responders` | `[]any` | Users who are currently on-call for this escalation path |
| `id` | `string` | Unique identifier for this escalation path. |
| `kind` | `string` | Whether this path carries its own nodes, or is built from an escalation path template. |
| `name` | `string` | The name of this escalation path, for the user's reference. |
| `param_bindings` | `map[string]any` | For a templated path, the values bound to the template's declared parameters, keyed by parameter name. |
| `path` | `[]any` | The nodes that form the levels and branches of this escalation path. |
| `repeat_config` | `map[string]any` |  |
| `team_ids` | `[]any` | IDs of the teams that own this escalation path. |
| `template_id` | `string` | For a templated path, the template it is built from. |
| `working_hours` | `[]any` | The working hours for this escalation path. |

#### Example: Load

```go
escalationPath, err := client.EscalationPath(nil).Load(map[string]any{"id": "escalation_path_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(escalationPath.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
escalationPaths, err := client.EscalationPath(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range escalationPaths.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.EscalationPath(nil).Create(map[string]any{
    "name": "example_name",
    "path": []any{},
    "repeat_config": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EscalationPathTemplate

Create an instance: `escalationPathTemplate := client.EscalationPathTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A description of what this template is for. |
| `expressions` | `[]any` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `bool` | Whether a previous escalation path version uses this template. |
| `id` | `string` | Unique identifier for this template. |
| `name` | `string` | The name of this template. |
| `params` | `[]any` | The parameters declared by this template. |
| `path` | `[]any` | The nodes that form the levels and branches of this template. |
| `repeat_config` | `map[string]any` |  |
| `working_hours` | `[]any` | The working hours for this template. |

#### Example: Load

```go
escalationPathTemplate, err := client.EscalationPathTemplate(nil).Load(map[string]any{"id": "escalation_path_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(escalationPathTemplate.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
escalationPathTemplates, err := client.EscalationPathTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range escalationPathTemplates.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.EscalationPathTemplate(nil).Create(map[string]any{
    "name": "example_name",
    "path": []any{},
    "repeat_config": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EscalationsCheckEscalationPermissionsResultV2

Create an instance: `escalationsCheckEscalationPermissionsResultV2 := client.EscalationsCheckEscalationPermissionsResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `response_options` | `[]any` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `[]any` | The IDs of the users to check response options for |

#### Example: Create

```go
result, err := client.EscalationsCheckEscalationPermissionsResultV2(nil).Create(map[string]any{
    "escalation_id": "example_escalation_id",
    "user_ids": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EscalationsReassignEscalationResultV2

Create an instance: `escalationsReassignEscalationResultV2 := client.EscalationsReassignEscalationResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Additional details about the new escalation. |
| `escalation_path_id` | `string` | ID of the escalation path to reassign to |
| `resolve_original` | `bool` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | The title of the new escalation. |
| `user_ids` | `[]any` | IDs of users to reassign directly to |

#### Example: Create

```go
result, err := client.EscalationsReassignEscalationResultV2(nil).Create(map[string]any{
    "escalation_id": "example_escalation_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### EscalationsV2

Create an instance: `escalationsV2 := client.EscalationsV2(nil)`


### FollowUp

Create an instance: `followUp := client.FollowUp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `assignee_id` | `string` | ID of the user this follow-up is assigned to |
| `assignee_team` | `map[string]any` |  |
| `assignee_team_id` | `string` | ID of the team this follow-up is assigned to |
| `category` | `map[string]any` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `map[string]any` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `map[string]any` |  |
| `external_issue_reference_id` | `string` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | ID of the priority for this follow-up |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `[]any` | Labels associated with this follow-up |
| `priority` | `map[string]any` |  |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |

#### Example: Load

```go
followUp, err := client.FollowUp(nil).Load(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(followUp.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
followUps, err := client.FollowUp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range followUps.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.FollowUp(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### FollowUpsConnectExternalIssueResultV2

Create an instance: `followUpsConnectExternalIssueResultV2 := client.FollowUpsConnectExternalIssueResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `assignee_team` | `map[string]any` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `map[string]any` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `[]any` | Labels associated with this follow-up |
| `priority` | `map[string]any` |  |
| `provider` | `string` | The issue tracker provider the issue belongs to |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```go
result, err := client.FollowUpsConnectExternalIssueResultV2(nil).Create(map[string]any{
    "follow_up_id": "example_follow_up_id",
    "provider": "example_provider",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### FollowUpsConnectExternalIssueResultV3

Create an instance: `followUpsConnectExternalIssueResultV3 := client.FollowUpsConnectExternalIssueResultV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `map[string]any` |  |
| `assignee_team` | `map[string]any` |  |
| `category` | `map[string]any` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `map[string]any` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `map[string]any` |  |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `[]any` | Labels associated with this follow-up |
| `priority` | `map[string]any` |  |
| `provider` | `string` | The issue tracker provider the issue belongs to |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```go
result, err := client.FollowUpsConnectExternalIssueResultV3(nil).Create(map[string]any{
    "follow_up_id": "example_follow_up_id",
    "provider": "example_provider",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### FollowUpsCreateFromLinkResultV3

Create an instance: `followUpsCreateFromLinkResultV3 := client.FollowUpsCreateFromLinkResultV3(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```go
result, err := client.FollowUpsCreateFromLinkResultV3(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### HeartbeatV2

Create an instance: `heartbeatV2 := client.HeartbeatV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
heartbeatV2, err := client.HeartbeatV2(nil).Load(map[string]any{"id": "heartbeat_v2_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(heartbeatV2.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.HeartbeatV2(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Identity

Create an instance: `identity := client.Identity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dashboard_url` | `string` | The dashboard URL for this organisation |
| `name` | `string` | The name assigned to the current API Key |
| `roles` | `[]any` | Which roles have been enabled for this key |
| `team_roles` | `[]any` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `[]any` | Teams that this API key is scoped to. |

#### Example: Load

```go
identity, err := client.Identity(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(identity.(sdk.Entity).Data()) // the loaded entity's record
```


### Incident

Create an instance: `incident := client.Incident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `call_url` | `string` | The call URL attached to this incident |
| `created_at` | `string` | When the incident was created |
| `creator` | `map[string]any` |  |
| `custom_field_entries` | `[]any` | Custom field entries for this incident |
| `debriefs` | `[]any` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `[]any` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `map[string]any` |  |
| `has_debrief` | `bool` | If this incident has a debrief attached |
| `id` | `string` | Unique identifier for the incident |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `[]any` | A list of who is assigned to each role for this incident |
| `incident_status` | `map[string]any` |  |
| `incident_status_id` | `string` | Incident status to assign to the incident |
| `incident_timestamp_values` | `[]any` | Incident lifecycle events and when they occurred |
| `incident_type` | `map[string]any` |  |
| `incident_type_id` | `string` | Incident type to create this incident as |
| `last_activity_at` | `string` | When the incident last recorded 'activity' |
| `mode` | `string` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | URL to link to the Microsoft Teams channel |
| `name` | `string` | Explanation of the incident |
| `permalink` | `string` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `[]any` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | The URL of the incident post-mortem document |
| `reference` | `string` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `map[string]any` |  |
| `severity` | `map[string]any` |  |
| `severity_id` | `string` | Severity to create incident as |
| `slack_channel_id` | `string` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | Name of the slack channel |
| `slack_channel_name_override` | `string` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | URL to link to the slack channel |
| `slack_team_id` | `string` | ID of the Slack team / workspace. |
| `summary` | `string` | Detailed description of the incident |
| `team_ids` | `[]any` | IDs of the teams that own this incident, resolved from your team settings. |
| `updated_at` | `string` | When the incident was last updated |
| `visibility` | `string` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `float64` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `float64` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `float64` | Amount of time spent on the incident in total |
| `workload_minutes_working` | `float64` | Amount of time spent on the incident in working hours |

#### Example: Load

```go
incident, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incident.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidents, err := client.Incident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Incident(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentActivityLogEntry

Create an instance: `incidentActivityLogEntry := client.IncidentActivityLogEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `map[string]any` | Details of an activity log entry. |
| `created_at` | `string` | When we recorded the activity |
| `id` | `string` | Unique identifier of the activity log entry |
| `incident_id` | `string` | ID of the incident this happened on. |
| `occurred_at` | `string` | When the activity happened. |
| `title` | `string` | Human-readable summary of what happened |
| `type` | `string` | What kind of activity this is. |

#### Example: List

```go
incidentActivityLogEntrys, err := client.IncidentActivityLogEntry(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentActivityLogEntrys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IncidentAttachment

Create an instance: `incidentAttachment := client.IncidentAttachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier of this incident membership |
| `incident_id` | `string` | ID of the incident to add an attachment to |
| `resource` | `map[string]any` |  |

#### Example: List

```go
incidentAttachments, err := client.IncidentAttachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentAttachments.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentAttachment(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "resource": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentForm

Create an instance: `incidentForm := client.IncidentForm(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this incident form was created |
| `expressions` | `[]any` | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Which form this is. |
| `id` | `string` | Unique identifier for this incident form |
| `incident_type_id` | `string` | The incident type this form belongs to. |
| `lifecycle_elements` | `[]any` | Elements on this form, in display order. |
| `updated_at` | `string` | When this incident form was last updated |

#### Example: Load

```go
incidentForm, err := client.IncidentForm(nil).Load(map[string]any{"id": "incident_form_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentForm.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentForms, err := client.IncidentForm(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentForms.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentForm(nil).Create(map[string]any{
    "expressions": []any{},
    "form_type": "example_form_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentMembership

Create an instance: `incidentMembership := client.IncidentMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | The incident to make the user a member of |
| `user_id` | `string` |  |

#### Example: Create

```go
result, err := client.IncidentMembership(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "user_id": "example_user_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentMembershipsV1

Create an instance: `incidentMembershipsV1 := client.IncidentMembershipsV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Revoke memberships to incident |
| `user_id` | `string` |  |

#### Example: Create

```go
result, err := client.IncidentMembershipsV1(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "user_id": "example_user_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentParticipant

Create an instance: `incidentParticipant := client.IncidentParticipant(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `[]any` | Participants who are actively helping with the incident |
| `passive` | `[]any` | Participants who are just observing the incident |

#### Example: Load

```go
incidentParticipant, err := client.IncidentParticipant(nil).Load(map[string]any{"incident_id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentParticipant.(sdk.Entity).Data()) // the loaded entity's record
```


### IncidentParticipantWorkload

Create an instance: `incidentParticipantWorkload := client.IncidentParticipantWorkload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | The role they had in the incident |
| `user` | `map[string]any` |  |
| `workload` | `map[string]any` |  |

#### Example: List

```go
incidentParticipantWorkloads, err := client.IncidentParticipantWorkload(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentParticipantWorkloads.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IncidentRelationship

Create an instance: `incidentRelationship := client.IncidentRelationship(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier of this incident relationship |
| `incident` | `map[string]any` |  |

#### Example: List

```go
incidentRelationships, err := client.IncidentRelationship(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentRelationships.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IncidentRole

Create an instance: `incidentRole := client.IncidentRole(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When the role was created |
| `description` | `string` | Describes the purpose of the role |
| `id` | `string` | Unique identifier for the role |
| `instructions` | `string` | Provided to whoever is nominated for the role. |
| `name` | `string` | Human readable name of the incident role |
| `role_type` | `string` | Type of incident role |
| `shortform` | `string` | Short human readable name for Slack. |
| `updated_at` | `string` | When the role was last updated |

#### Example: Load

```go
incidentRole, err := client.IncidentRole(nil).Load(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentRole.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentRoles, err := client.IncidentRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentRoles.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentRole(nil).Create(map[string]any{
    "description": "example_description",
    "instructions": "example_instructions",
    "name": "example_name",
    "shortform": "example_shortform",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentStatus

Create an instance: `incidentStatus := client.IncidentStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` | What category of status it is. |
| `created_at` | `string` |  |
| `description` | `string` | Rich text description of the incident status |
| `id` | `string` | Unique ID of this incident status |
| `name` | `string` | Unique name of this status |
| `rank` | `int` | Order of this incident status |
| `updated_at` | `string` |  |

#### Example: Load

```go
incidentStatus, err := client.IncidentStatus(nil).Load(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentStatus.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentStatuss, err := client.IncidentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentStatuss.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentStatus(nil).Create(map[string]any{
    "category": "example_category",
    "description": "example_description",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTeamMembership

Create an instance: `incidentTeamMembership := client.IncidentTeamMembership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` |  |
| `team_id` | `string` |  |

#### Example: Create

```go
result, err := client.IncidentTeamMembership(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "team_id": "example_team_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTeamMembershipsV1

Create an instance: `incidentTeamMembershipsV1 := client.IncidentTeamMembershipsV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Revoke team access to this incident |
| `team_id` | `string` |  |

#### Example: Create

```go
result, err := client.IncidentTeamMembershipsV1(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "team_id": "example_team_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTemplate

Create an instance: `incidentTemplate := client.IncidentTemplate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this incident template was created |
| `expressions` | `[]any` | The expressions used by bindings in this template |
| `id` | `string` | Unique identifier for this incident template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `map[string]any` | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | When this incident template was last updated |

#### Example: Load

```go
incidentTemplate, err := client.IncidentTemplate(nil).Load(map[string]any{"id": "incident_template_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentTemplate.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentTemplates, err := client.IncidentTemplate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentTemplates.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentTemplate(nil).Create(map[string]any{
    "name": "example_name",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTemplatesValidateResultV1

Create an instance: `incidentTemplatesValidateResultV1 := client.IncidentTemplatesValidateResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expressions` | `[]any` | The expressions used by bindings in this template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `map[string]any` | The values an incident template applies to the incidents it creates. |
| `warnings` | `[]any` | Anything suspect about this config that isn't severe enough to reject it. |

#### Example: Create

```go
result, err := client.IncidentTemplatesValidateResultV1(nil).Create(map[string]any{
    "name": "example_name",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTimelineItem

Create an instance: `incidentTimelineItem := client.IncidentTimelineItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_log_id` | `string` | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | When this item was added to the timeline |
| `creator` | `map[string]any` |  |
| `description` | `string` | Description of the timeline item, in markdown |
| `id` | `string` | Unique identifier of the timeline item |
| `idempotency_key` | `string` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `string` | Incident to add this item to |
| `timestamp` | `string` | When the thing this item describes happened. |
| `title` | `string` | Title of the timeline item |
| `updated_at` | `string` | When this item was last edited |

#### Example: List

```go
incidentTimelineItems, err := client.IncidentTimelineItem(nil).List(map[string]any{"incident_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentTimelineItems.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentTimelineItem(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "incident_id": "example_incident_id",
    "timestamp": "example_timestamp",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentTimestamp

Create an instance: `incidentTimestamp := client.IncidentTimestamp(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique ID of this incident timestamp |
| `name` | `string` | Unique name of this timestamp |
| `rank` | `int` | Order in which this timestamp should be shown |

#### Example: Load

```go
incidentTimestamp, err := client.IncidentTimestamp(nil).Load(map[string]any{"id": "incident_timestamp_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentTimestamp.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentTimestamps, err := client.IncidentTimestamp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentTimestamps.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IncidentType

Create an instance: `incidentType := client.IncidentType(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_in_triage` | `string` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | When this resource was created |
| `description` | `string` | What is this incident type for? |
| `id` | `string` | Unique identifier for this Incident Type |
| `is_default` | `bool` | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | The name of this Incident Type |
| `owning_team_ids` | `[]any` | IDs of the teams that own this incident type |
| `private_incidents_only` | `bool` | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | When this resource was last updated |

#### Example: Load

```go
incidentType, err := client.IncidentType(nil).Load(map[string]any{"id": "incident_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentType.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
incidentTypes, err := client.IncidentType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentTypes.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### IncidentUpdate

Create an instance: `incidentUpdate := client.IncidentUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When the update was created |
| `id` | `string` | Unique identifier for this incident update |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `string` | The incident you want to update |
| `merged_into_incident_id` | `string` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `string` | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `map[string]any` |  |
| `new_severity` | `map[string]any` |  |
| `to_incident_status_id` | `string` | Move the incident to this status |
| `to_severity_id` | `string` | Move the incident to this severity |
| `updater` | `map[string]any` |  |

#### Example: List

```go
incidentUpdates, err := client.IncidentUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range incidentUpdates.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.IncidentUpdate(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "incident_id": "example_incident_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IncidentsImportPostmortemDocumentResultV2

Create an instance: `incidentsImportPostmortemDocumentResultV2 := client.IncidentsImportPostmortemDocumentResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | The document content as GitHub-Flavored Markdown |
| `title` | `string` | Title of the postmortem document |

#### Example: Create

```go
result, err := client.IncidentsImportPostmortemDocumentResultV2(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "content": "example_content",
    "title": "example_title",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### IpAllowlist

Create an instance: `ipAllowlist := client.IpAllowlist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `[]any` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `bool` | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | The time this allowlist was last updated |
| `version` | `int` | The version of this IP allowlist |

#### Example: Load

```go
ipAllowlist, err := client.IpAllowlist(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipAllowlist.(sdk.Entity).Data()) // the loaded entity's record
```


### IpRange

Create an instance: `ipRange := client.IpRange(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `string` | The address in CIDR notation. |
| `description` | `string` | Which of our traffic reaches you from this address |

#### Example: List

```go
ipRanges, err := client.IpRange(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range ipRanges.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### MaintenanceWindow

Create an instance: `maintenanceWindow := client.MaintenanceWindow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_condition_groups` | `[]any` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | When this maintenance window was archived, if it has been |
| `created_at` | `string` | When this maintenance window was created |
| `end_at` | `string` | When the maintenance window ends |
| `escalation_targets` | `[]any` | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Unique identifier for this maintenance window |
| `incident_id` | `string` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `map[string]any` |  |
| `name` | `string` | Human readable name for the maintenance window |
| `notification_message` | `string` | Custom message included in notifications about this maintenance window |
| `notify_channels` | `[]any` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `int` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `int` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `[]any` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `bool` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `bool` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `bool` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `string` | When the maintenance window starts |
| `updated_at` | `string` | When this maintenance window was last updated |

#### Example: Load

```go
maintenanceWindow, err := client.MaintenanceWindow(nil).Load(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(maintenanceWindow.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
maintenanceWindows, err := client.MaintenanceWindow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range maintenanceWindows.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.MaintenanceWindow(nil).Create(map[string]any{
    "alert_condition_groups": []any{},
    "end_at": "example_end_at",
    "lead": map[string]any{},
    "name": "example_name",
    "show_in_sidebar": true,
    "start_at": "example_start_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ManagedResource

Create an instance: `managedResource := client.ManagedResource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that track metadata about this resource |
| `managed_by` | `string` | How is this resource managed |
| `resource_id` | `string` | The ID of the resource that this relates to |
| `resource_type` | `string` | The type of the related resource |
| `source_url` | `string` | The url of the external repository where this resource is managed (if there is one) |

#### Example: Create

```go
result, err := client.ManagedResource(nil).Create(map[string]any{
    "annotations": map[string]any{},
    "resource_id": "example_resource_id",
    "resource_type": "example_resource_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### OnCallNotificationMethodPublicV2

Create an instance: `onCallNotificationMethodPublicV2 := client.OnCallNotificationMethodPublicV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The address of this method (e.g. |
| `id` | `string` | Unique identifier for this notification method |
| `is_usable` | `bool` | Whether this method is ready to receive notifications. |
| `method_type` | `string` | The high-level type of notification method. |
| `phone_details` | `map[string]any` |  |

#### Example: List

```go
onCallNotificationMethodPublicV2s, err := client.OnCallNotificationMethodPublicV2(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range onCallNotificationMethodPublicV2s.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### OnCallNotificationPause

Create an instance: `onCallNotificationPause := client.OnCallNotificationPause(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `ends_at` | `string` | When notifications resume |
| `id` | `string` | Unique identifier for this notification pause |
| `reason` | `string` | Free text reason for why notifications are paused, shown to teammates |
| `starts_at` | `string` | When notifications stop being sent to the user |
| `updated_at` | `string` |  |
| `user_id` | `string` | The user whose on-call notifications are paused in this time window |

#### Example: Load

```go
onCallNotificationPause, err := client.OnCallNotificationPause(nil).Load(map[string]any{"id": "on_call_notification_pause_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(onCallNotificationPause.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
onCallNotificationPauses, err := client.OnCallNotificationPause(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range onCallNotificationPauses.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### OnCallNotificationRulePublicV2

Create an instance: `onCallNotificationRulePublicV2 := client.OnCallNotificationRulePublicV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `map[string]any` |  |
| `delay_seconds` | `int` | Delay in seconds before this rule activates. |
| `id` | `string` | Unique identifier for this notification rule |
| `method_target` | `map[string]any` |  |
| `method_type` | `string` | The high-level type of notification method. |
| `phone` | `map[string]any` |  |
| `rule_type` | `string` | The urgency level this rule applies to |

#### Example: List

```go
onCallNotificationRulePublicV2s, err := client.OnCallNotificationRulePublicV2(nil).List(map[string]any{"user_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range onCallNotificationRulePublicV2s.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PayConfig

Create an instance: `payConfig := client.PayConfig(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_rate_cents` | `int` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` |  |
| `currency` | `string` | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Unique identifier for this pay config |
| `name` | `string` | Human readable name for this pay config |
| `one_off_rules` | `[]any` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | When a published report first priced against this config. |
| `rate_time_unit` | `string` | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` |  |
| `weekly_rules` | `[]any` | Rules that apply every week, by day of week and time of day, in evaluation order |

#### Example: Load

```go
payConfig, err := client.PayConfig(nil).Load(map[string]any{"id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payConfig.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
payConfigs, err := client.PayConfig(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range payConfigs.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PayConfig(nil).Create(map[string]any{
    "base_rate_cents": 1,
    "currency": "example_currency",
    "name": "example_name",
    "rate_time_unit": "example_rate_time_unit",
    "timezone": "example_timezone",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayConfigOneOffRule

Create an instance: `payConfigOneOffRule := client.PayConfigOneOffRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `string` | When this rule stops applying |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |

#### Example: Load

```go
payConfigOneOffRule, err := client.PayConfigOneOffRule(nil).Load(map[string]any{"id": "pay_config_one_off_rule_id", "pay_config_id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payConfigOneOffRule.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
payConfigOneOffRules, err := client.PayConfigOneOffRule(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range payConfigOneOffRules.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PayConfigOneOffRule(nil).Create(map[string]any{
    "id": "example_id",
    "end_at": "example_end_at",
    "name": "example_name",
    "rate_cents": 1,
    "start_at": "example_start_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayConfigWeeklyRule

Create an instance: `payConfigWeeklyRule := client.PayConfigWeeklyRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `int` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `[]any` | Days of the week this rule applies on |

#### Example: Load

```go
payConfigWeeklyRule, err := client.PayConfigWeeklyRule(nil).Load(map[string]any{"id": "pay_config_weekly_rule_id", "pay_config_id": "pay_config_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payConfigWeeklyRule.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
payConfigWeeklyRules, err := client.PayConfigWeeklyRule(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range payConfigWeeklyRules.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PayConfigWeeklyRule(nil).Create(map[string]any{
    "id": "example_id",
    "end_time": "example_end_time",
    "rate_cents": 1,
    "start_time": "example_start_time",
    "weekdays": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayReport

Create an instance: `payReport := client.PayReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this report was created |
| `creator` | `map[string]any` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `map[string]any` |  |
| `pay_config_id` | `string` | The pay config to price every shift with. |
| `published_at` | `string` | When this report was published. |
| `rotation_filters` | `[]any` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `[]any` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Load

```go
payReport, err := client.PayReport(nil).Load(map[string]any{"id": "pay_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payReport.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
payReports, err := client.PayReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range payReports.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PayReport(nil).Create(map[string]any{
    "end_date": "example_end_date",
    "name": "example_name",
    "pay_config_expression": map[string]any{},
    "schedule_ids": []any{},
    "start_date": "example_start_date",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayReportsPublishResultV2

Create an instance: `payReportsPublishResultV2 := client.PayReportsPublishResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cc_emails` | `[]any` | Email addresses to send a copy of the report to |
| `created_at` | `string` | When this report was created |
| `creator` | `map[string]any` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `[]any` | The schedules this report covers |
| `send_user_breakdowns` | `string` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```go
result, err := client.PayReportsPublishResultV2(nil).Create(map[string]any{
    "pay_report_id": "example_pay_report_id",
    "cc_emails": []any{},
    "send_user_breakdowns": "example_send_user_breakdowns",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayReportsUnpublishResultV2

Create an instance: `payReportsUnpublishResultV2 := client.PayReportsUnpublishResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this report was created |
| `creator` | `map[string]any` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `[]any` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `int` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `map[string]any` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Why this report is being unpublished |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```go
result, err := client.PayReportsUnpublishResultV2(nil).Create(map[string]any{
    "pay_report_id": "example_pay_report_id",
    "unpublish_reason": "example_unpublish_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PayReportsV2

Create an instance: `payReportsV2 := client.PayReportsV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
payReportsV2, err := client.PayReportsV2(nil).Load(map[string]any{"pay_report_id": "pay_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(payReportsV2.(sdk.Entity).Data()) // the loaded entity's record
```


### Policy

Create an instance: `policy := client.Policy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignment_rules` | `map[string]any` |  |
| `conditions` | `[]any` | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` |  |
| `debrief` | `map[string]any` | Set when policy_type is debrief. |
| `description` | `string` | Human readable description of the policy |
| `expressions` | `[]any` | The expressions relating to this policy |
| `follow_up` | `map[string]any` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the policy |
| `name` | `string` | Human readable name of the policy |
| `on_call_readiness` | `map[string]any` | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Type of the policy, specifying what this applies to |
| `post_mortem` | `map[string]any` | Set when policy_type is post_mortem. |
| `schedule` | `map[string]any` | Detects gaps in on-call coverage. |
| `status` | `string` | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` |  |

#### Example: Load

```go
policy, err := client.Policy(nil).Load(map[string]any{"id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policy.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
policys, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range policys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Policy(nil).Create(map[string]any{
    "assignment_rules": map[string]any{},
    "conditions": []any{},
    "debrief": map[string]any{},
    "description": "example_description",
    "follow_up": map[string]any{},
    "name": "example_name",
    "policy_type": "example_policy_type",
    "post_mortem": map[string]any{},
    "schedule": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PolicyFinding

Create an instance: `policyFinding := client.PolicyFinding(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `map[string]any` | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Set when policy_type is post_mortem. |
| `responsible_users` | `[]any` | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `map[string]any` | Set when policy_type is vacation_conflict. |

#### Example: Load

```go
policyFinding, err := client.PolicyFinding(nil).Load(map[string]any{"id": "policy_finding_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyFinding.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
policyFindings, err := client.PolicyFinding(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range policyFindings.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PolicyFindingsDismissResultV2

Create an instance: `policyFindingsDismissResultV2 := client.PolicyFindingsDismissResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `map[string]any` | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Set when policy_type is post_mortem. |
| `reason` | `string` | Why this finding is being dismissed |
| `responsible_users` | `[]any` | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `map[string]any` | Set when policy_type is vacation_conflict. |

#### Example: Create

```go
result, err := client.PolicyFindingsDismissResultV2(nil).Create(map[string]any{
    "policy_finding_id": "example_policy_finding_id",
    "reason": "example_reason",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PolicyFindingsRestoreResultV2

Create an instance: `policyFindingsRestoreResultV2 := client.PolicyFindingsRestoreResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `int` | Days outside the policy's due date |
| `debrief` | `map[string]any` | Set when policy_type is debrief. |
| `dismissal` | `map[string]any` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `map[string]any` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `map[string]any` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `map[string]any` | Set when policy_type is post_mortem. |
| `responsible_users` | `[]any` | Who is expected to resolve this finding |
| `schedule` | `map[string]any` | Set when policy_type is schedule. |
| `shift_conflict` | `map[string]any` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `map[string]any` | Set when policy_type is vacation_conflict. |

#### Example: Create

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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PostmortemDocument

Create an instance: `postmortemDocument := client.PostmortemDocument(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp for when the document was created |
| `document_url` | `string` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `[]any` | The list of users who have edited this post-mortem document |
| `exported_urls` | `[]any` | URLs of any external locations this document has been exported to |
| `id` | `string` | Unique identifier for the post-mortem document |
| `incident_id` | `string` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | The current status of this post-mortem document |
| `title` | `string` | The display title of the post-mortem document |
| `type` | `string` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Timestamp for when the document was last updated |

#### Example: Load

```go
postmortemDocument, err := client.PostmortemDocument(nil).Load(map[string]any{"id": "postmortem_document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postmortemDocument.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
postmortemDocuments, err := client.PostmortemDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range postmortemDocuments.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### PostmortemDocumentsAttachResultV1

Create an instance: `postmortemDocumentsAttachResultV1 := client.PostmortemDocumentsAttachResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `document_provider` | `string` | The provider hosting the document. |
| `incident_id` | `string` | The unique identifier of the incident to attach the post-mortem document to |
| `permalink` | `string` | A URL pointing to the externally-hosted post-mortem document |

#### Example: Create

```go
result, err := client.PostmortemDocumentsAttachResultV1(nil).Create(map[string]any{
    "incident_id": "example_incident_id",
    "permalink": "example_permalink",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### PostmortemDocumentsShowContentResultV1

Create an instance: `postmortemDocumentsShowContentResultV1 := client.PostmortemDocumentsShowContentResultV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `markdown` | `string` | The full content of the post-mortem document, rendered as markdown. |

#### Example: Load

```go
postmortemDocumentsShowContentResultV1, err := client.PostmortemDocumentsShowContentResultV1(nil).Load(map[string]any{"postmortem_document_id": "postmortem_document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postmortemDocumentsShowContentResultV1.(sdk.Entity).Data()) // the loaded entity's record
```


### Schedule

Create an instance: `schedule := client.Schedule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that track metadata about this resource |
| `config` | `map[string]any` |  |
| `created_at` | `string` |  |
| `current_shifts` | `[]any` | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `map[string]any` |  |
| `id` | `string` | Unique internal ID of the schedule |
| `name` | `string` | Human readable name synced from external provider |
| `next_shifts` | `[]any` | The shifts after the next changeover. |
| `permalink` | `string` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `[]any` | IDs of teams that own this schedule |
| `timezone` | `string` | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `string` |  |

#### Example: Load

```go
schedule, err := client.Schedule(nil).Load(map[string]any{"id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(schedule.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
schedules, err := client.Schedule(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range schedules.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Schedule(nil).Create(map[string]any{
    "holidays_public_config": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScheduleEntriesListPayloadV2

Create an instance: `scheduleEntriesListPayloadV2 := client.ScheduleEntriesListPayloadV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entry_window_end` | `string` | The end of the window to preview entries for. |
| `entry_window_start` | `string` | The start of the window to preview entries for. |
| `final` | `[]any` | The effective schedule after overrides have been merged in |
| `overrides` | `[]any` | Overrides that apply within the requested window |
| `schedule` | `map[string]any` |  |
| `scheduled` | `[]any` | Entries from the schedule's rotation rules, before overrides are applied |

#### Example: Create

```go
result, err := client.ScheduleEntriesListPayloadV2(nil).Create(map[string]any{
    "schedule_id": "example_schedule_id",
    "schedule": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScheduleEntry

Create an instance: `scheduleEntry := client.ScheduleEntry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pagination_meta` | `map[string]any` |  |
| `schedule_entries` | `map[string]any` | The schedule entries for a window of time, grouped by where they come from. |

#### Example: Load

```go
scheduleEntry, err := client.ScheduleEntry(nil).Load(map[string]any{"schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleEntry.(sdk.Entity).Data()) // the loaded entity's record
```


### ScheduleOverride

Create an instance: `scheduleOverride := client.ScheduleOverride(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `end_at` | `string` | End of the override |
| `id` | `string` | Unique internal ID of the schedule override |
| `layer_id` | `string` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | The schedule that this override applies to |
| `start_at` | `string` | Start of the override |
| `updated_at` | `string` |  |
| `user` | `map[string]any` |  |

#### Example: Load

```go
scheduleOverride, err := client.ScheduleOverride(nil).Load(map[string]any{"id": "schedule_override_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleOverride.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
scheduleOverrides, err := client.ScheduleOverride(nil).List(map[string]any{"schedule_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range scheduleOverrides.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.ScheduleOverride(nil).Create(map[string]any{
    "end_at": "example_end_at",
    "layer_id": "example_layer_id",
    "rotation_id": "example_rotation_id",
    "schedule_id": "example_schedule_id",
    "start_at": "example_start_at",
    "user": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScheduleReplica

Create an instance: `scheduleReplica := client.ScheduleReplica(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this schedule replica was first created |
| `id` | `string` | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `int` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `[]any` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | When this schedule replica was last updated |
| `user_statuses` | `[]any` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

#### Example: Load

```go
scheduleReplica, err := client.ScheduleReplica(nil).Load(map[string]any{"id": "schedule_replica_id", "schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleReplica.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
scheduleReplicas, err := client.ScheduleReplica(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range scheduleReplicas.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.ScheduleReplica(nil).Create(map[string]any{
    "id": "example_id",
    "replica_fallback_user_id": "example_replica_fallback_user_id",
    "replica_provider": "example_replica_provider",
    "replica_provider_id": "example_replica_provider_id",
    "sources": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScheduleSyncRule

Create an instance: `scheduleSyncRule := client.ScheduleSyncRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `[]any` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | The schedule this rule belongs to |
| `schedule_sync_target` | `map[string]any` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | The sync target ID this rule links to |
| `sync_type` | `string` | Which schedule members sync to the user group |
| `updated_at` | `string` |  |

#### Example: Load

```go
scheduleSyncRule, err := client.ScheduleSyncRule(nil).Load(map[string]any{"id": "schedule_sync_rule_id", "schedule_id": "schedule_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleSyncRule.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
scheduleSyncRules, err := client.ScheduleSyncRule(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range scheduleSyncRules.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.ScheduleSyncRule(nil).Create(map[string]any{
    "id": "example_id",
    "schedule_sync_target_id": "example_schedule_sync_target_id",
    "sync_type": "example_sync_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### ScheduleSyncTarget

Create an instance: `scheduleSyncTarget := client.ScheduleSyncTarget(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `add_bot_to_group` | `bool` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `map[string]any` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync target |
| `linked_schedules` | `[]any` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `map[string]any` |  |
| `slack_team_id` | `string` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `string` | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `string` |  |

#### Example: Load

```go
scheduleSyncTarget, err := client.ScheduleSyncTarget(nil).Load(map[string]any{"id": "schedule_sync_target_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(scheduleSyncTarget.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
scheduleSyncTargets, err := client.ScheduleSyncTarget(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range scheduleSyncTargets.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.ScheduleSyncTarget(nil).Create(map[string]any{
    "add_bot_to_group": true,
    "new_slack_user_group": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Secret

Create an instance: `secret := client.Secret(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `description` | `string` | Optional description of what this secret is for |
| `id` | `string` | Unique identifier for this secret |
| `last_four_chars` | `string` | The last four characters of the current value, for masked display. |
| `name` | `string` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `[]any` | IDs of the teams that own this secret. |
| `secret` | `map[string]any` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` |  |
| `value` | `string` | The secret's plaintext value. |
| `version` | `int` | The current version number, incremented on each rotation |
| `versions` | `[]any` | The secret's versions, newest first |

#### Example: Load

```go
secret, err := client.Secret(nil).Load(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secret.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
secrets, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range secrets.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Secret(nil).Create(map[string]any{
    "name": "example_name",
    "value": "example_value",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Severity

Create an instance: `severity := client.Severity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the severity |
| `id` | `string` | Unique identifier of the severity |
| `name` | `string` | Human readable name of the severity |
| `rank` | `int` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | When the action was last updated |

#### Example: Load

```go
severity, err := client.Severity(nil).Load(map[string]any{"id": "severity_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(severity.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
severitys, err := client.Severity(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range severitys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Severity(nil).Create(map[string]any{
    "description": "example_description",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPage

Create an instance: `statusPage := client.StatusPage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of this status page |
| `id` | `string` | Unique ID of this status page |
| `name` | `string` | The title of this status page |
| `public_url` | `string` | The public URL of this status page |

#### Example: Load

```go
statusPage, err := client.StatusPage(nil).Load(map[string]any{"id": "status_page_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPage.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
statusPages, err := client.StatusPage(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statusPages.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatusPageComponent

Create an instance: `statusPageComponent := client.StatusPageComponent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Optional short description of this component |
| `id` | `string` | Unique identifier for this component |
| `management_meta` | `map[string]any` |  |
| `name` | `string` | Human-readable name for the component |

#### Example: Load

```go
statusPageComponent, err := client.StatusPageComponent(nil).Load(map[string]any{"id": "status_page_component_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPageComponent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
statusPageComponents, err := client.StatusPageComponent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statusPageComponents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.StatusPageComponent(nil).Create(map[string]any{
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPageComponentAvailability

Create an instance: `statusPageComponentAvailability := client.StatusPageComponentAvailability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `availability_percent` | `string` | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `string` | ID of the component. |
| `data_available_since` | `string` | Earliest time we have status data for this component. |
| `end_at` | `string` | End of the requested availability window |
| `start_at` | `string` | Start of the requested availability window |
| `status_page_id` | `string` | ID of the status page |

#### Example: Load

```go
statusPageComponentAvailability, err := client.StatusPageComponentAvailability(nil).Load(map[string]any{"component_id": "component_id", "status_page_id": "status_page_id", "end_at": "end_at", "start_at": "start_at"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPageComponentAvailability.(sdk.Entity).Data()) // the loaded entity's record
```


### StatusPageIncident

Create an instance: `statusPageIncident := client.StatusPageIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_impacts` | `[]any` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `[]any` | An array of mappings from component ID to current component status |
| `id` | `string` | A unique ID for this status page incident |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Current status for this incident |
| `message` | `string` | Markdown initial update on this status page incident |
| `name` | `string` | A title for the incident |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | When this status page incident was published to the status page |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `[]any` | A list of updates posted to this status page incident |

#### Example: Load

```go
statusPageIncident, err := client.StatusPageIncident(nil).Load(map[string]any{"id": "status_page_incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPageIncident.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
statusPageIncidents, err := client.StatusPageIncident(nil).List(map[string]any{"status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statusPageIncidents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.StatusPageIncident(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "incident_status": "example_incident_status",
    "message": "example_message",
    "name": "example_name",
    "notify_subscribers": true,
    "status_page_id": "example_status_page_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPageIncidentUpdate

Create an instance: `statusPageIncidentUpdate := client.StatusPageIncidentUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `[]any` | An array of mappings from component ID to component status. |
| `incident_status` | `string` | Optional new status for this status page incident. |
| `message` | `string` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | ID of the status page incident |

#### Example: Create

```go
result, err := client.StatusPageIncidentUpdate(nil).Create(map[string]any{
    "message": "example_message",
    "notify_subscribers": true,
    "status_page_incident_id": "example_status_page_incident_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPageLinkedResponseIncident

Create an instance: `statusPageLinkedResponseIncident := client.StatusPageLinkedResponseIncident(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the Response incident |
| `linked_at` | `string` | When the Response incident was linked to the status page incident |

#### Example: List

```go
statusPageLinkedResponseIncidents, err := client.StatusPageLinkedResponseIncident(nil).List(map[string]any{"incident_id": "example", "status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statusPageLinkedResponseIncidents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### StatusPageMaintenance

Create an instance: `statusPageMaintenance := client.StatusPageMaintenance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_component_ids` | `[]any` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `bool` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `[]any` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | The time the maintenance window ends |
| `id` | `string` | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Current status for this maintenance window |
| `message` | `string` | Markdown initial update on this status page maintenance window |
| `name` | `string` | A title for the maintenance window |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | When this status page maintenance window was published to the status page |
| `start_at` | `string` | The time the maintenance window starts |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `[]any` | A list of updates posted to this status page maintenance window |

#### Example: Load

```go
statusPageMaintenance, err := client.StatusPageMaintenance(nil).Load(map[string]any{"id": "status_page_maintenance_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPageMaintenance.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
statusPageMaintenances, err := client.StatusPageMaintenance(nil).List(map[string]any{"status_page_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range statusPageMaintenances.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.StatusPageMaintenance(nil).Create(map[string]any{
    "affected_component_ids": []any{},
    "end_at": "example_end_at",
    "idempotency_key": "example_idempotency_key",
    "maintenance_status": "example_maintenance_status",
    "message": "example_message",
    "name": "example_name",
    "notify_subscribers": true,
    "start_at": "example_start_at",
    "status_page_id": "example_status_page_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPageMaintenanceUpdate

Create an instance: `statusPageMaintenanceUpdate := client.StatusPageMaintenanceUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_statuses` | `[]any` | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | Optional new status for this status page maintenance window. |
| `message` | `string` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `bool` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | ID of the status page maintenance window |

#### Example: Create

```go
result, err := client.StatusPageMaintenanceUpdate(nil).Create(map[string]any{
    "message": "example_message",
    "notify_subscribers": true,
    "status_page_maintenance_id": "example_status_page_maintenance_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### StatusPageStructure

Create an instance: `statusPageStructure := client.StatusPageStructure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_structure` | `map[string]any` |  |
| `display_uptime_mode` | `string` | How the page shows uptime against its components |
| `id` | `string` |  |
| `management_meta` | `map[string]any` |  |

#### Example: Load

```go
statusPageStructure, err := client.StatusPageStructure(nil).Load(map[string]any{"id": "status_page_structure_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(statusPageStructure.(sdk.Entity).Data()) // the loaded entity's record
```


### StatusPagesCreateStatusPageRetrospectiveIncidentResultV2

Create an instance: `statusPagesCreateStatusPageRetrospectiveIncidentResultV2 := client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `name` | `string` | A title for the incident |
| `status_page_id` | `string` | ID of the status page. |
| `updates` | `[]any` | The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). |

#### Example: Create

```go
result, err := client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(nil).Create(map[string]any{
    "idempotency_key": "example_idempotency_key",
    "name": "example_name",
    "status_page_id": "example_status_page_id",
    "updates": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### Team

Create an instance: `team := client.Team(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `map[string]any` |  |
| `id` | `string` | Unique ID of the team |
| `members` | `[]any` | Members of the team |
| `name` | `string` | Name of the team |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range teams.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### TelemetryDataSource

Create an instance: `telemetryDataSource := client.TelemetryDataSource(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this data source was created |
| `datadog_config` | `map[string]any` | Datadog-specific credential updates |
| `enabled` | `bool` | Whether this data source is enabled |
| `grafana_config` | `map[string]any` | Grafana-specific credential and endpoint updates |
| `id` | `string` | Unique identifier for this data source |
| `name` | `string` | Human-readable name of the data source |
| `provider` | `string` | Provider that hosts this data source |
| `source_type` | `string` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `string` | When this data source was last updated |
| `version` | `string` | Upstream tool version captured at probe time (e.g. |


### User

Create an instance: `user := client.User(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `map[string]any` |  |
| `custom_roles` | `[]any` |  |
| `email` | `string` | Email address of the user. |
| `id` | `string` | Unique identifier of the user |
| `is_active` | `bool` | Whether the user is active. |
| `name` | `string` | Name of the user |
| `role` | `string` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `map[string]any` |  |
| `slack_user_id` | `string` | Slack ID of the user |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range users.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### UsersShowPagingProviderResultV2

Create an instance: `usersShowPagingProviderResultV2 := client.UsersShowPagingProviderResultV2(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `preferred_escalation_provider` | `string` | The user's effective escalation provider. |

#### Example: Load

```go
usersShowPagingProviderResultV2, err := client.UsersShowPagingProviderResultV2(nil).Load(map[string]any{"user_id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(usersShowPagingProviderResultV2.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.UsersShowPagingProviderResultV2(nil).Create(map[string]any{
    "user_id": "example_user_id",
    "preferred_escalation_provider": "example_preferred_escalation_provider",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### UtilitiesV1

Create an instance: `utilitiesV1 := client.UtilitiesV1(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
utilitiesV1, err := client.UtilitiesV1(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(utilitiesV1.(sdk.Entity).Data()) // the loaded entity's record
```


### Workflow

Create an instance: `workflow := client.Workflow(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotations` | `map[string]any` | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `[]any` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `bool` | Whether to continue executing the workflow if a step fails |
| `delay` | `map[string]any` |  |
| `expressions` | `[]any` | The expressions to use in the workflow |
| `folder` | `string` | Folder to display the workflow in |
| `form_fields` | `[]any` | User-configured form fields available in the workflow scope. |
| `id` | `string` | Unique identifier for the workflow |
| `include_private_escalations` | `bool` | Whether to include private escalations |
| `include_private_incidents` | `bool` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `map[string]any` |  |
| `name` | `string` | Name provided by the user when creating the workflow |
| `once_for` | `[]any` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `[]any` | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `[]any` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Which incidents should the workflow be applied to? |
| `shortform` | `string` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `bool` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | What state this workflow is in |
| `steps` | `[]any` | Steps that are executed as part of the workflow |
| `trigger` | `string` | Trigger to set on the workflow |
| `version` | `int` | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `map[string]any` |  |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
workflows, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range workflows.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Workflow(nil).Create(map[string]any{
    "condition_groups": []any{},
    "continue_on_step_error": true,
    "delay": map[string]any{},
    "expressions": []any{},
    "name": "example_name",
    "once_for": []any{},
    "runs_on_incident_modes": []any{},
    "runs_on_incidents": "example_runs_on_incidents",
    "steps": []any{},
    "trigger": "example_trigger",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
```


### WorkflowRun

Create an instance: `workflowRun := client.WorkflowRun(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancelled_at` | `string` | If the run was cancelled, this is when |
| `created_at` | `string` | When the resource was created |
| `enqueued_at` | `string` | When the run was enqueued for execution |
| `error` | `string` | Error produced by the workflow, if it failed |
| `id` | `string` | Unique identifier for the workflow run |
| `incident_id` | `string` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `string` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `[]any` | Status of each step as it is worked |
| `scheduled_at` | `string` | When the run was scheduled for |
| `updated_at` | `string` | When the resource was last updated |
| `workflow_id` | `string` | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | Name of the underlying workflow |
| `workflow_version_id` | `string` | Unique identifier of the workflow version |
| `workflow_version_number` | `int` | Monotonically incrementing version number for the version that ran |

#### Example: Load

```go
workflowRun, err := client.WorkflowRun(nil).Load(map[string]any{"id": "workflow_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowRun.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
workflowRuns, err := client.WorkflowRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range workflowRuns.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

### Package structure

```
github.com/voxgig-sdk/incident-io-sdk/go/
├── incident-io.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/incident-io-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
incidentstatus := client.IncidentStatus(nil)
incidentstatus.List(nil, nil)

// incidentstatus.Data() now returns the incidentstatus data from the last list
// incidentstatus.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

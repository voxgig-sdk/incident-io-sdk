# IncidentIo Golang SDK



The Golang SDK for the IncidentIo API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Action(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/incident-io-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/incident-io-sdk/releases) for the available versions.

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
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/incident-io-sdk/go"
)

func main() {
    client := sdk.New()

    // List action records — the value is the array of records itself.
    actions, err := client.Action(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range actions.([]any) {
        fmt.Println(item)
    }

    // Load a single action — the value is the loaded record.
    action, err := client.Action(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(action)

    // Create a action.
    created, err := client.Action(nil).Create(map[string]any{"assignee": map[string]any{}, "created_at": "example_created_at", "creator": map[string]any{}, "description": "example_description", "id": "example_id", "incident_id": "example_incident_id", "status": "example_status", "updated_at": "example_updated_at"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a action.
    updated, err := client.Action(nil).Update(map[string]any{"id": "example_id", "assignee": map[string]any{}, "assignee_id": "example_assignee_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a action.
    removed, err := client.Action(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
incidenttypes, err := client.IncidentType(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = incidenttypes
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

incidentType, err := client.IncidentType(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(incidentType) // the returned mock data
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
| `AlertNote` | `(data map[string]any) IncidentIoEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `(data map[string]any) IncidentIoEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `(data map[string]any) IncidentIoEntity` | Create an AlertSource entity instance. |
| `ApiKey` | `(data map[string]any) IncidentIoEntity` | Create an ApiKey entity instance. |
| `CustomField` | `(data map[string]any) IncidentIoEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `(data map[string]any) IncidentIoEntity` | Create a CustomFieldOption entity instance. |
| `FollowUp` | `(data map[string]any) IncidentIoEntity` | Create a FollowUp entity instance. |
| `Incident` | `(data map[string]any) IncidentIoEntity` | Create an Incident entity instance. |
| `IncidentAttachment` | `(data map[string]any) IncidentIoEntity` | Create an IncidentAttachment entity instance. |
| `IncidentMembership` | `(data map[string]any) IncidentIoEntity` | Create an IncidentMembership entity instance. |
| `IncidentParticipant` | `(data map[string]any) IncidentIoEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload` | `(data map[string]any) IncidentIoEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship` | `(data map[string]any) IncidentIoEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole` | `(data map[string]any) IncidentIoEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus` | `(data map[string]any) IncidentIoEntity` | Create an IncidentStatus entity instance. |
| `IncidentTimestamp` | `(data map[string]any) IncidentIoEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType` | `(data map[string]any) IncidentIoEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate` | `(data map[string]any) IncidentIoEntity` | Create an IncidentUpdate entity instance. |
| `IpAllowlist` | `(data map[string]any) IncidentIoEntity` | Create an IpAllowlist entity instance. |
| `MaintenanceWindow` | `(data map[string]any) IncidentIoEntity` | Create a MaintenanceWindow entity instance. |
| `PostmortemDocument` | `(data map[string]any) IncidentIoEntity` | Create a PostmortemDocument entity instance. |
| `Secret` | `(data map[string]any) IncidentIoEntity` | Create a Secret entity instance. |
| `Team` | `(data map[string]any) IncidentIoEntity` | Create a Team entity instance. |
| `User` | `(data map[string]any) IncidentIoEntity` | Create an User entity instance. |
| `Workflow` | `(data map[string]any) IncidentIoEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `(data map[string]any) IncidentIoEntity` | Create a WorkflowRun entity instance. |

### Entity interface (IncidentIoEntity)

All entities implement the `IncidentIoEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    action, err := client.Action(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // action is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_id"` |  |
| `"completed_at"` |  |
| `"created_at"` |  |
| `"creator"` |  |
| `"description"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"status"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/actions`

#### Alert

| Field | Description |
| --- | --- |
| `"alert_group_id"` |  |
| `"alert_source_id"` |  |
| `"attribute"` |  |
| `"created_at"` |  |
| `"deduplication_key"` |  |
| `"description"` |  |
| `"id"` |  |
| `"resolved_at"` |  |
| `"source_url"` |  |
| `"status"` |  |
| `"title"` |  |
| `"updated_at"` |  |

Operations: List, Load.

API path: `/v2/alerts`

#### AlertAttribute

| Field | Description |
| --- | --- |
| `"array"` |  |
| `"emoji"` |  |
| `"id"` |  |
| `"name"` |  |
| `"required"` |  |
| `"type"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_attributes`

#### AlertNote

| Field | Description |
| --- | --- |
| `"alert_group_id"` |  |
| `"alert_id"` |  |
| `"content"` |  |
| `"created_at"` |  |
| `"creator"` |  |
| `"id"` |  |
| `"image"` |  |
| `"last_edited_at"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/alert_notes`

#### AlertRoute

| Field | Description |
| --- | --- |
| `"alert_source"` |  |
| `"condition_group"` |  |
| `"created_at"` |  |
| `"enabled"` |  |
| `"escalation_config"` |  |
| `"expression"` |  |
| `"grouping_config"` |  |
| `"id"` |  |
| `"incident_config"` |  |
| `"is_private"` |  |
| `"message_config"` |  |
| `"name"` |  |
| `"owning_team_id"` |  |
| `"updated_at"` |  |
| `"version"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v3/alert_routes`

#### AlertSource

| Field | Description |
| --- | --- |
| `"alert_events_url"` |  |
| `"auto_resolve_incident_alert"` |  |
| `"auto_resolve_timeout_minute"` |  |
| `"disabled"` |  |
| `"email_option"` |  |
| `"heartbeat_option"` |  |
| `"http_custom_option"` |  |
| `"id"` |  |
| `"jira_option"` |  |
| `"name"` |  |
| `"owning_team_id"` |  |
| `"secret_token"` |  |
| `"source_type"` |  |
| `"template"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/alert_sources`

#### ApiKey

| Field | Description |
| --- | --- |
| `"comment"` |  |
| `"created_at"` |  |
| `"creator"` |  |
| `"id"` |  |
| `"last_used_at"` |  |
| `"name"` |  |
| `"role"` |  |
| `"role_name"` |  |
| `"team_id"` |  |
| `"team_role"` |  |
| `"team_role_name"` |  |
| `"token_last_issued_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/api_keys`

#### CustomField

| Field | Description |
| --- | --- |
| `"catalog_type_id"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"field_type"` |  |
| `"filter_by"` |  |
| `"fixed_filter"` |  |
| `"group_by_catalog_attribute_id"` |  |
| `"helptext_catalog_attribute_id"` |  |
| `"id"` |  |
| `"name"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `"custom_field_id"` |  |
| `"id"` |  |
| `"sort_key"` |  |
| `"value"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

#### FollowUp

| Field | Description |
| --- | --- |
| `"assignee"` |  |
| `"assignee_id"` |  |
| `"assignee_team"` |  |
| `"assignee_team_id"` |  |
| `"completed_at"` |  |
| `"created_at"` |  |
| `"creator"` |  |
| `"description"` |  |
| `"external_issue_reference"` |  |
| `"external_issue_reference_id"` |  |
| `"follow_up_category_id"` |  |
| `"follow_up_priority_option_id"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"label"` |  |
| `"priority"` |  |
| `"status"` |  |
| `"title"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/follow_ups`

#### Incident

| Field | Description |
| --- | --- |
| `"call_url"` |  |
| `"created_at"` |  |
| `"creator"` |  |
| `"custom_field_entry"` |  |
| `"duration_metric"` |  |
| `"external_issue_reference"` |  |
| `"has_debrief"` |  |
| `"id"` |  |
| `"idempotency_key"` |  |
| `"incident_role_assignment"` |  |
| `"incident_status"` |  |
| `"incident_status_id"` |  |
| `"incident_timestamp_value"` |  |
| `"incident_type"` |  |
| `"incident_type_id"` |  |
| `"mode"` |  |
| `"name"` |  |
| `"permalink"` |  |
| `"postmortem_document_id"` |  |
| `"postmortem_document_url"` |  |
| `"reference"` |  |
| `"retrospective_incident_option"` |  |
| `"severity"` |  |
| `"severity_id"` |  |
| `"slack_channel_id"` |  |
| `"slack_channel_name"` |  |
| `"slack_channel_name_override"` |  |
| `"slack_team_id"` |  |
| `"summary"` |  |
| `"updated_at"` |  |
| `"visibility"` |  |
| `"workload_minutes_late"` |  |
| `"workload_minutes_sleeping"` |  |
| `"workload_minutes_total"` |  |
| `"workload_minutes_working"` |  |

Operations: Create, List, Load.

API path: `/v2/incidents`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"incident_id"` |  |
| `"resource"` |  |

Operations: Create, List, Remove.

API path: `/v1/incident_attachments`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `"incident_id"` |  |
| `"user_id"` |  |

Operations: Create.

API path: `/v1/incident_memberships`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"passive"` |  |

Operations: Load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `"archived_at"` |  |
| `"participant_type"` |  |
| `"user"` |  |
| `"workload"` |  |

Operations: List.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"incident"` |  |

Operations: List.

API path: `/v1/incident_relationships`

#### IncidentRole

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"instruction"` |  |
| `"name"` |  |
| `"role_type"` |  |
| `"shortform"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/incident_roles`

#### IncidentStatus

| Field | Description |
| --- | --- |
| `"category"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"name"` |  |
| `"rank"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/incident_statuses`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` |  |
| `"rank"` |  |

Operations: List, Load.

API path: `/v2/incident_timestamps`

#### IncidentType

| Field | Description |
| --- | --- |
| `"create_in_triage"` |  |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"is_default"` |  |
| `"name"` |  |
| `"owning_team_id"` |  |
| `"private_incidents_only"` |  |
| `"updated_at"` |  |

Operations: List, Load.

API path: `/v1/incident_types`

#### IncidentUpdate

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"merged_into_incident_id"` |  |
| `"message"` |  |
| `"new_incident_status"` |  |
| `"new_severity"` |  |
| `"updater"` |  |

Operations: List.

API path: `/v2/incident_updates`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `"allowlist"` |  |
| `"enabled"` |  |
| `"updated_at"` |  |
| `"version"` |  |

Operations: Load, Update.

API path: `/v1/ip_allowlists`

#### MaintenanceWindow

| Field | Description |
| --- | --- |
| `"alert_condition_group"` |  |
| `"archived_at"` |  |
| `"created_at"` |  |
| `"end_at"` |  |
| `"escalation_target"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"lead"` |  |
| `"name"` |  |
| `"notification_message"` |  |
| `"notify_channel"` |  |
| `"notify_end_minutes_before"` |  |
| `"notify_start_minutes_before"` |  |
| `"reroute_on_end"` |  |
| `"resolve_on_end"` |  |
| `"show_in_sidebar"` |  |
| `"start_at"` |  |
| `"updated_at"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/maintenance_windows`

#### PostmortemDocument

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"document_url"` |  |
| `"editor"` |  |
| `"exported_url"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"status"` |  |
| `"title"` |  |
| `"type"` |  |
| `"updated_at"` |  |

Operations: List, Load, Update.

API path: `/v1/postmortem_documents`

#### Secret

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"description"` |  |
| `"id"` |  |
| `"last_four_char"` |  |
| `"name"` |  |
| `"owning_team_id"` |  |
| `"secret"` |  |
| `"updated_at"` |  |
| `"value"` |  |
| `"version"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/secrets`

#### Team

| Field | Description |
| --- | --- |
| `"catalog_entry"` |  |
| `"id"` |  |
| `"member"` |  |
| `"name"` |  |

Operations: List, Load.

API path: `/v3/teams`

#### User

| Field | Description |
| --- | --- |
| `"base_role"` |  |
| `"custom_role"` |  |
| `"email"` |  |
| `"id"` |  |
| `"is_active"` |  |
| `"name"` |  |
| `"role"` |  |
| `"seat"` |  |
| `"slack_user_id"` |  |

Operations: List, Load.

API path: `/v2/users`

#### Workflow

| Field | Description |
| --- | --- |
| `"annotation"` |  |
| `"condition_group"` |  |
| `"continue_on_step_error"` |  |
| `"delay"` |  |
| `"expression"` |  |
| `"folder"` |  |
| `"form_field"` |  |
| `"id"` |  |
| `"include_private_escalation"` |  |
| `"include_private_incident"` |  |
| `"management_meta"` |  |
| `"name"` |  |
| `"once_for"` |  |
| `"owning_team_id"` |  |
| `"private_incident_scope"` |  |
| `"runs_from"` |  |
| `"runs_on_incident"` |  |
| `"runs_on_incident_mode"` |  |
| `"shortform"` |  |
| `"skip_step_upgrade"` |  |
| `"state"` |  |
| `"step"` |  |
| `"trigger"` |  |
| `"version"` |  |
| `"workflow"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/workflows`

#### WorkflowRun

| Field | Description |
| --- | --- |
| `"cancelled_at"` |  |
| `"created_at"` |  |
| `"enqueued_at"` |  |
| `"error"` |  |
| `"id"` |  |
| `"incident_id"` |  |
| `"incident_reference"` |  |
| `"progress"` |  |
| `"scheduled_at"` |  |
| `"updated_at"` |  |
| `"workflow_id"` |  |
| `"workflow_name"` |  |
| `"workflow_version_id"` |  |
| `"workflow_version_number"` |  |

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
| `assignee_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
action, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(action) // the loaded record
```

#### Example: List

```go
actions, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actions) // the array of records
```

#### Example: Create

```go
result, err := client.Action(nil).Create(map[string]any{
    "assignee": map[string]any{},
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "description": "example_description",
    "id": "example_id",
    "incident_id": "example_incident_id",
    "status": "example_status",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Alert

Create an instance: `alert := client.Alert(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `[]any` |  |
| `alert_source_id` | `string` |  |
| `attribute` | `[]any` |  |
| `created_at` | `string` |  |
| `deduplication_key` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `resolved_at` | `string` |  |
| `source_url` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
alert, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alert) // the loaded record
```

#### Example: List

```go
alerts, err := client.Alert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alerts) // the array of records
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
| `array` | `bool` |  |
| `emoji` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `required` | `bool` |  |
| `type` | `string` |  |

#### Example: Load

```go
alertAttribute, err := client.AlertAttribute(nil).Load(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertAttribute) // the loaded record
```

#### Example: List

```go
alertAttributes, err := client.AlertAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertAttributes) // the array of records
```

#### Example: Create

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
fmt.Println(result)
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
| `alert_group_id` | `string` |  |
| `alert_id` | `string` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` |  |
| `id` | `string` |  |
| `image` | `[]any` |  |
| `last_edited_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
alertNote, err := client.AlertNote(nil).Load(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertNote) // the loaded record
```

#### Example: List

```go
alertNotes, err := client.AlertNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertNotes) // the array of records
```

#### Example: Create

```go
result, err := client.AlertNote(nil).Create(map[string]any{
    "content": "example_content",
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "id": "example_id",
    "image": []any{},
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_source` | `[]any` |  |
| `condition_group` | `[]any` |  |
| `created_at` | `string` |  |
| `enabled` | `bool` |  |
| `escalation_config` | `map[string]any` |  |
| `expression` | `[]any` |  |
| `grouping_config` | `map[string]any` |  |
| `id` | `string` |  |
| `incident_config` | `map[string]any` |  |
| `is_private` | `bool` |  |
| `message_config` | `map[string]any` |  |
| `name` | `string` |  |
| `owning_team_id` | `[]any` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```go
alertRoute, err := client.AlertRoute(nil).Load(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertRoute) // the loaded record
```

#### Example: List

```go
alertRoutes, err := client.AlertRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertRoutes) // the array of records
```

#### Example: Create

```go
result, err := client.AlertRoute(nil).Create(map[string]any{
    "alert_source": []any{},
    "condition_group": []any{},
    "enabled": true,
    "escalation_config": map[string]any{},
    "expression": []any{},
    "grouping_config": map[string]any{},
    "id": "example_id",
    "incident_config": map[string]any{},
    "is_private": true,
    "message_config": map[string]any{},
    "name": "example_name",
    "version": 1,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_events_url` | `string` |  |
| `auto_resolve_incident_alert` | `bool` |  |
| `auto_resolve_timeout_minute` | `int` |  |
| `disabled` | `bool` |  |
| `email_option` | `map[string]any` |  |
| `heartbeat_option` | `map[string]any` |  |
| `http_custom_option` | `map[string]any` |  |
| `id` | `string` |  |
| `jira_option` | `map[string]any` |  |
| `name` | `string` |  |
| `owning_team_id` | `[]any` |  |
| `secret_token` | `string` |  |
| `source_type` | `string` |  |
| `template` | `map[string]any` |  |

#### Example: Load

```go
alertSource, err := client.AlertSource(nil).Load(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertSource) // the loaded record
```

#### Example: List

```go
alertSources, err := client.AlertSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(alertSources) // the array of records
```

#### Example: Create

```go
result, err := client.AlertSource(nil).Create(map[string]any{
    "email_option": map[string]any{},
    "heartbeat_option": map[string]any{},
    "http_custom_option": map[string]any{},
    "id": "example_id",
    "jira_option": map[string]any{},
    "name": "example_name",
    "source_type": "example_source_type",
    "template": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `role` | `[]any` |  |
| `role_name` | `[]any` |  |
| `team_id` | `[]any` |  |
| `team_role` | `[]any` |  |
| `team_role_name` | `[]any` |  |
| `token_last_issued_at` | `string` |  |

#### Example: Load

```go
apiKey, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKey) // the loaded record
```

#### Example: List

```go
apiKeys, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(apiKeys) // the array of records
```

#### Example: Create

```go
result, err := client.ApiKey(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "role": []any{},
    "role_name": []any{},
    "team_id": []any{},
    "team_role": []any{},
    "team_role_name": []any{},
    "token_last_issued_at": "example_token_last_issued_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `catalog_type_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `field_type` | `string` |  |
| `filter_by` | `map[string]any` |  |
| `fixed_filter` | `map[string]any` |  |
| `group_by_catalog_attribute_id` | `string` |  |
| `helptext_catalog_attribute_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
customField, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customField) // the loaded record
```

#### Example: List

```go
customFields, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFields) // the array of records
```

#### Example: Create

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "description": "example_description",
    "field_type": "example_field_type",
    "filter_by": map[string]any{},
    "fixed_filter": map[string]any{},
    "id": "example_id",
    "name": "example_name",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `custom_field_id` | `string` |  |
| `id` | `string` |  |
| `sort_key` | `int` |  |
| `value` | `string` |  |

#### Example: Load

```go
customFieldOption, err := client.CustomFieldOption(nil).Load(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFieldOption) // the loaded record
```

#### Example: List

```go
customFieldOptions, err := client.CustomFieldOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFieldOptions) // the array of records
```

#### Example: Create

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
fmt.Println(result)
```


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
| `assignee_id` | `string` |  |
| `assignee_team` | `map[string]any` |  |
| `assignee_team_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` |  |
| `description` | `string` |  |
| `external_issue_reference` | `map[string]any` |  |
| `external_issue_reference_id` | `string` |  |
| `follow_up_category_id` | `string` |  |
| `follow_up_priority_option_id` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `label` | `[]any` |  |
| `priority` | `map[string]any` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
followUp, err := client.FollowUp(nil).Load(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(followUp) // the loaded record
```

#### Example: List

```go
followUps, err := client.FollowUp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(followUps) // the array of records
```

#### Example: Create

```go
result, err := client.FollowUp(nil).Create(map[string]any{
    "assignee": map[string]any{},
    "assignee_team": map[string]any{},
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "external_issue_reference": map[string]any{},
    "id": "example_id",
    "incident_id": "example_incident_id",
    "label": []any{},
    "priority": map[string]any{},
    "status": "example_status",
    "title": "example_title",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `call_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `map[string]any` |  |
| `custom_field_entry` | `[]any` |  |
| `duration_metric` | `[]any` |  |
| `external_issue_reference` | `map[string]any` |  |
| `has_debrief` | `bool` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_role_assignment` | `[]any` |  |
| `incident_status` | `map[string]any` |  |
| `incident_status_id` | `string` |  |
| `incident_timestamp_value` | `[]any` |  |
| `incident_type` | `map[string]any` |  |
| `incident_type_id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `permalink` | `string` |  |
| `postmortem_document_id` | `[]any` |  |
| `postmortem_document_url` | `string` |  |
| `reference` | `string` |  |
| `retrospective_incident_option` | `map[string]any` |  |
| `severity` | `map[string]any` |  |
| `severity_id` | `string` |  |
| `slack_channel_id` | `string` |  |
| `slack_channel_name` | `string` |  |
| `slack_channel_name_override` | `string` |  |
| `slack_team_id` | `string` |  |
| `summary` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `workload_minutes_late` | `float64` |  |
| `workload_minutes_sleeping` | `float64` |  |
| `workload_minutes_total` | `float64` |  |
| `workload_minutes_working` | `float64` |  |

#### Example: Load

```go
incident, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incident) // the loaded record
```

#### Example: List

```go
incidents, err := client.Incident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidents) // the array of records
```

#### Example: Create

```go
result, err := client.Incident(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "creator": map[string]any{},
    "custom_field_entry": []any{},
    "external_issue_reference": map[string]any{},
    "id": "example_id",
    "idempotency_key": "example_idempotency_key",
    "incident_role_assignment": []any{},
    "incident_status": map[string]any{},
    "incident_type": map[string]any{},
    "mode": "example_mode",
    "name": "example_name",
    "reference": "example_reference",
    "severity": map[string]any{},
    "slack_channel_id": "example_slack_channel_id",
    "slack_team_id": "example_slack_team_id",
    "updated_at": "example_updated_at",
    "visibility": "example_visibility",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `resource` | `map[string]any` |  |

#### Example: List

```go
incidentAttachments, err := client.IncidentAttachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentAttachments) // the array of records
```

#### Example: Create

```go
result, err := client.IncidentAttachment(nil).Create(map[string]any{
    "id": "example_id",
    "incident_id": "example_incident_id",
    "resource": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `incident_id` | `string` |  |
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
fmt.Println(result)
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
| `active` | `[]any` |  |
| `passive` | `[]any` |  |

#### Example: Load

```go
incidentParticipant, err := client.IncidentParticipant(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentParticipant) // the loaded record
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
| `archived_at` | `string` |  |
| `participant_type` | `string` |  |
| `user` | `map[string]any` |  |
| `workload` | `map[string]any` |  |

#### Example: List

```go
incidentParticipantWorkloads, err := client.IncidentParticipantWorkload(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentParticipantWorkloads) // the array of records
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
| `id` | `string` |  |
| `incident` | `map[string]any` |  |

#### Example: List

```go
incidentRelationships, err := client.IncidentRelationship(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentRelationships) // the array of records
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
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `instruction` | `string` |  |
| `name` | `string` |  |
| `role_type` | `string` |  |
| `shortform` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
incidentRole, err := client.IncidentRole(nil).Load(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentRole) // the loaded record
```

#### Example: List

```go
incidentRoles, err := client.IncidentRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentRoles) // the array of records
```

#### Example: Create

```go
result, err := client.IncidentRole(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "description": "example_description",
    "id": "example_id",
    "instruction": "example_instruction",
    "name": "example_name",
    "role_type": "example_role_type",
    "shortform": "example_shortform",
    "updated_at": "example_updated_at",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `category` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
incidentStatus, err := client.IncidentStatus(nil).Load(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentStatus) // the loaded record
```

#### Example: List

```go
incidentStatuss, err := client.IncidentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentStatuss) // the array of records
```

#### Example: Create

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
fmt.Println(result)
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
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `int` |  |

#### Example: Load

```go
incidentTimestamp, err := client.IncidentTimestamp(nil).Load(map[string]any{"id": "incident_timestamp_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentTimestamp) // the loaded record
```

#### Example: List

```go
incidentTimestamps, err := client.IncidentTimestamp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentTimestamps) // the array of records
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
| `create_in_triage` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `is_default` | `bool` |  |
| `name` | `string` |  |
| `owning_team_id` | `[]any` |  |
| `private_incidents_only` | `bool` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
incidentType, err := client.IncidentType(nil).Load(map[string]any{"id": "incident_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentType) // the loaded record
```

#### Example: List

```go
incidentTypes, err := client.IncidentType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentTypes) // the array of records
```


### IncidentUpdate

Create an instance: `incidentUpdate := client.IncidentUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `merged_into_incident_id` | `string` |  |
| `message` | `string` |  |
| `new_incident_status` | `map[string]any` |  |
| `new_severity` | `map[string]any` |  |
| `updater` | `map[string]any` |  |

#### Example: List

```go
incidentUpdates, err := client.IncidentUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(incidentUpdates) // the array of records
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
| `allowlist` | `[]any` |  |
| `enabled` | `bool` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```go
ipAllowlist, err := client.IpAllowlist(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(ipAllowlist) // the loaded record
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
| `alert_condition_group` | `[]any` |  |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `end_at` | `string` |  |
| `escalation_target` | `[]any` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `lead` | `map[string]any` |  |
| `name` | `string` |  |
| `notification_message` | `string` |  |
| `notify_channel` | `[]any` |  |
| `notify_end_minutes_before` | `int` |  |
| `notify_start_minutes_before` | `int` |  |
| `reroute_on_end` | `bool` |  |
| `resolve_on_end` | `bool` |  |
| `show_in_sidebar` | `bool` |  |
| `start_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
maintenanceWindow, err := client.MaintenanceWindow(nil).Load(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(maintenanceWindow) // the loaded record
```

#### Example: List

```go
maintenanceWindows, err := client.MaintenanceWindow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(maintenanceWindows) // the array of records
```

#### Example: Create

```go
result, err := client.MaintenanceWindow(nil).Create(map[string]any{
    "alert_condition_group": []any{},
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
fmt.Println(result)
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
| `created_at` | `string` |  |
| `document_url` | `string` |  |
| `editor` | `[]any` |  |
| `exported_url` | `[]any` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```go
postmortemDocument, err := client.PostmortemDocument(nil).Load(map[string]any{"id": "postmortem_document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(postmortemDocument) // the loaded record
```

#### Example: List

```go
postmortemDocuments, err := client.PostmortemDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(postmortemDocuments) // the array of records
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
| `description` | `string` |  |
| `id` | `string` |  |
| `last_four_char` | `string` |  |
| `name` | `string` |  |
| `owning_team_id` | `[]any` |  |
| `secret` | `map[string]any` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |
| `version` | `[]any` |  |

#### Example: Load

```go
secret, err := client.Secret(nil).Load(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(secret) // the loaded record
```

#### Example: List

```go
secrets, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(secrets) // the array of records
```

#### Example: Create

```go
result, err := client.Secret(nil).Create(map[string]any{
    "created_at": "example_created_at",
    "id": "example_id",
    "name": "example_name",
    "secret": map[string]any{},
    "updated_at": "example_updated_at",
    "value": "example_value",
    "version": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `id` | `string` |  |
| `member` | `[]any` |  |
| `name` | `string` |  |

#### Example: Load

```go
team, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(team) // the loaded record
```

#### Example: List

```go
teams, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(teams) // the array of records
```


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
| `custom_role` | `[]any` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_active` | `bool` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `seat` | `map[string]any` |  |
| `slack_user_id` | `string` |  |

#### Example: Load

```go
user, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(user) // the loaded record
```

#### Example: List

```go
users, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(users) // the array of records
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
| `annotation` | `map[string]any` |  |
| `condition_group` | `[]any` |  |
| `continue_on_step_error` | `bool` |  |
| `delay` | `map[string]any` |  |
| `expression` | `[]any` |  |
| `folder` | `string` |  |
| `form_field` | `[]any` |  |
| `id` | `string` |  |
| `include_private_escalation` | `bool` |  |
| `include_private_incident` | `bool` |  |
| `management_meta` | `map[string]any` |  |
| `name` | `string` |  |
| `once_for` | `[]any` |  |
| `owning_team_id` | `[]any` |  |
| `private_incident_scope` | `string` |  |
| `runs_from` | `string` |  |
| `runs_on_incident` | `string` |  |
| `runs_on_incident_mode` | `[]any` |  |
| `shortform` | `string` |  |
| `skip_step_upgrade` | `bool` |  |
| `state` | `string` |  |
| `step` | `[]any` |  |
| `trigger` | `string` |  |
| `version` | `int` |  |
| `workflow` | `map[string]any` |  |

#### Example: Load

```go
workflow, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflow) // the loaded record
```

#### Example: List

```go
workflows, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflows) // the array of records
```

#### Example: Create

```go
result, err := client.Workflow(nil).Create(map[string]any{
    "condition_group": []any{},
    "continue_on_step_error": true,
    "delay": map[string]any{},
    "expression": []any{},
    "id": "example_id",
    "management_meta": map[string]any{},
    "name": "example_name",
    "once_for": []any{},
    "runs_on_incident": "example_runs_on_incident",
    "runs_on_incident_mode": []any{},
    "step": []any{},
    "trigger": "example_trigger",
    "version": 1,
    "workflow": map[string]any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `cancelled_at` | `string` |  |
| `created_at` | `string` |  |
| `enqueued_at` | `string` |  |
| `error` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `incident_reference` | `string` |  |
| `progress` | `[]any` |  |
| `scheduled_at` | `string` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `string` |  |
| `workflow_name` | `string` |  |
| `workflow_version_id` | `string` |  |
| `workflow_version_number` | `int` |  |

#### Example: Load

```go
workflowRun, err := client.WorkflowRun(nil).Load(map[string]any{"id": "workflow_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowRun) // the loaded record
```

#### Example: List

```go
workflowRuns, err := client.WorkflowRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(workflowRuns) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

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
incidenttype := client.IncidentType(nil)
incidenttype.List(nil, nil)

// incidenttype.Data() now returns the incidenttype data from the last list
// incidenttype.Match() returns the last match criteria
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

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

#### `ApiKey(data map[string]any) IncidentIoEntity`

Create a new `ApiKey` entity instance. Pass `nil` for no initial data.

#### `CustomField(data map[string]any) IncidentIoEntity`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldOption(data map[string]any) IncidentIoEntity`

Create a new `CustomFieldOption` entity instance. Pass `nil` for no initial data.

#### `FollowUp(data map[string]any) IncidentIoEntity`

Create a new `FollowUp` entity instance. Pass `nil` for no initial data.

#### `Incident(data map[string]any) IncidentIoEntity`

Create a new `Incident` entity instance. Pass `nil` for no initial data.

#### `IncidentAttachment(data map[string]any) IncidentIoEntity`

Create a new `IncidentAttachment` entity instance. Pass `nil` for no initial data.

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

#### `IncidentTimestamp(data map[string]any) IncidentIoEntity`

Create a new `IncidentTimestamp` entity instance. Pass `nil` for no initial data.

#### `IncidentType(data map[string]any) IncidentIoEntity`

Create a new `IncidentType` entity instance. Pass `nil` for no initial data.

#### `IncidentUpdate(data map[string]any) IncidentIoEntity`

Create a new `IncidentUpdate` entity instance. Pass `nil` for no initial data.

#### `IpAllowlist(data map[string]any) IncidentIoEntity`

Create a new `IpAllowlist` entity instance. Pass `nil` for no initial data.

#### `MaintenanceWindow(data map[string]any) IncidentIoEntity`

Create a new `MaintenanceWindow` entity instance. Pass `nil` for no initial data.

#### `PostmortemDocument(data map[string]any) IncidentIoEntity`

Create a new `PostmortemDocument` entity instance. Pass `nil` for no initial data.

#### `Secret(data map[string]any) IncidentIoEntity`

Create a new `Secret` entity instance. Pass `nil` for no initial data.

#### `Team(data map[string]any) IncidentIoEntity`

Create a new `Team` entity instance. Pass `nil` for no initial data.

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
| `assignee_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Action(nil).Update(map[string]any{
    "id": "action_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Action(nil).Remove(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_group_id` | `[]any` | No |  |
| `alert_source_id` | `string` | Yes |  |
| `attribute` | `[]any` | Yes |  |
| `created_at` | `string` | Yes |  |
| `deduplication_key` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `resolved_at` | `string` | No |  |
| `source_url` | `string` | No |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Alert(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Alert(nil).Load(map[string]any{"id": "alert_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `array` | `bool` | Yes |  |
| `emoji` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `required` | `bool` | Yes |  |
| `type` | `string` | Yes |  |

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

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlertAttribute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlertAttribute(nil).Load(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AlertAttribute(nil).Update(map[string]any{
    "id": "alert_attribute_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlertAttribute(nil).Remove(map[string]any{"id": "alert_attribute_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_group_id` | `string` | No |  |
| `alert_id` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `image` | `[]any` | Yes |  |
| `last_edited_at` | `string` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlertNote(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlertNote(nil).Load(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AlertNote(nil).Update(map[string]any{
    "id": "alert_note_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlertNote(nil).Remove(map[string]any{"id": "alert_note_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_source` | `[]any` | Yes |  |
| `condition_group` | `[]any` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `escalation_config` | `map[string]any` | Yes |  |
| `expression` | `[]any` | Yes |  |
| `grouping_config` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `map[string]any` | Yes |  |
| `is_private` | `bool` | Yes |  |
| `message_config` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `[]any` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlertRoute(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlertRoute(nil).Load(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AlertRoute(nil).Update(map[string]any{
    "id": "alert_route_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlertRoute(nil).Remove(map[string]any{"id": "alert_route_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_events_url` | `string` | No |  |
| `auto_resolve_incident_alert` | `bool` | No |  |
| `auto_resolve_timeout_minute` | `int` | No |  |
| `disabled` | `bool` | No |  |
| `email_option` | `map[string]any` | Yes |  |
| `heartbeat_option` | `map[string]any` | Yes |  |
| `http_custom_option` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `jira_option` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `[]any` | No |  |
| `secret_token` | `string` | No |  |
| `source_type` | `string` | Yes |  |
| `template` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AlertSource(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AlertSource(nil).Load(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AlertSource(nil).Update(map[string]any{
    "id": "alert_source_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AlertSource(nil).Remove(map[string]any{"id": "alert_source_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `comment` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes |  |
| `id` | `string` | Yes |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `[]any` | Yes |  |
| `role_name` | `[]any` | Yes |  |
| `team_id` | `[]any` | Yes |  |
| `team_role` | `[]any` | Yes |  |
| `team_role_name` | `[]any` | Yes |  |
| `token_last_issued_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ApiKey(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApiKey(nil).Load(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ApiKey(nil).Update(map[string]any{
    "id": "api_key_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.ApiKey(nil).Remove(map[string]any{"id": "api_key_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `catalog_type_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `filter_by` | `map[string]any` | Yes |  |
| `fixed_filter` | `map[string]any` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No |  |
| `helptext_catalog_attribute_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomField(nil).Update(map[string]any{
    "id": "custom_field_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomField(nil).Remove(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `custom_field_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `sort_key` | `int` | Yes |  |
| `value` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomFieldOption(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomFieldOption(nil).Load(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomFieldOption(nil).Update(map[string]any{
    "id": "custom_field_option_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomFieldOption(nil).Remove(map[string]any{"id": "custom_field_option_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `assignee_id` | `string` | No |  |
| `assignee_team` | `map[string]any` | Yes |  |
| `assignee_team_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `map[string]any` | Yes |  |
| `external_issue_reference_id` | `string` | No |  |
| `follow_up_category_id` | `string` | No |  |
| `follow_up_priority_option_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `label` | `[]any` | Yes |  |
| `priority` | `map[string]any` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.FollowUp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.FollowUp(nil).Load(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.FollowUp(nil).Update(map[string]any{
    "id": "follow_up_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.FollowUp(nil).Remove(map[string]any{"id": "follow_up_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `call_url` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `map[string]any` | Yes |  |
| `custom_field_entry` | `[]any` | Yes |  |
| `duration_metric` | `[]any` | No |  |
| `external_issue_reference` | `map[string]any` | Yes |  |
| `has_debrief` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_role_assignment` | `[]any` | Yes |  |
| `incident_status` | `map[string]any` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `[]any` | No |  |
| `incident_type` | `map[string]any` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `permalink` | `string` | No |  |
| `postmortem_document_id` | `[]any` | No |  |
| `postmortem_document_url` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `retrospective_incident_option` | `map[string]any` | No |  |
| `severity` | `map[string]any` | Yes |  |
| `severity_id` | `string` | No |  |
| `slack_channel_id` | `string` | Yes |  |
| `slack_channel_name` | `string` | No |  |
| `slack_channel_name_override` | `string` | No |  |
| `slack_team_id` | `string` | Yes |  |
| `summary` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `workload_minutes_late` | `float64` | No |  |
| `workload_minutes_sleeping` | `float64` | No |  |
| `workload_minutes_total` | `float64` | No |  |
| `workload_minutes_working` | `float64` | No |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Incident(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Incident(nil).Load(map[string]any{"id": "incident_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `resource` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentAttachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IncidentAttachment(nil).Remove(map[string]any{"id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `incident_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
| `active` | `[]any` | Yes |  |
| `passive` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IncidentParticipant(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `archived_at` | `string` | No |  |
| `participant_type` | `string` | No |  |
| `user` | `map[string]any` | Yes |  |
| `workload` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentParticipantWorkload(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
| `id` | `string` | Yes |  |
| `incident` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentRelationship(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `instruction` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `role_type` | `string` | Yes |  |
| `shortform` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentRole(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IncidentRole(nil).Load(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IncidentRole(nil).Update(map[string]any{
    "id": "incident_role_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IncidentRole(nil).Remove(map[string]any{"id": "incident_role_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `category` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `int` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentStatus(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IncidentStatus(nil).Load(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IncidentStatus(nil).Update(map[string]any{
    "id": "incident_status_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IncidentStatus(nil).Remove(map[string]any{"id": "incident_status_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentTimestamp(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IncidentTimestamp(nil).Load(map[string]any{"id": "incident_timestamp_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `create_in_triage` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_default` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `[]any` | No |  |
| `private_incidents_only` | `bool` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentType(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IncidentType(nil).Load(map[string]any{"id": "incident_type_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `merged_into_incident_id` | `string` | No |  |
| `message` | `string` | No |  |
| `new_incident_status` | `map[string]any` | Yes |  |
| `new_severity` | `map[string]any` | Yes |  |
| `updater` | `map[string]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.IncidentUpdate(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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
| `allowlist` | `[]any` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `updated_at` | `string` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.IpAllowlist(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IpAllowlist(nil).Update(map[string]any{
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `alert_condition_group` | `[]any` | Yes |  |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes |  |
| `escalation_target` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `lead` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `notification_message` | `string` | No |  |
| `notify_channel` | `[]any` | No |  |
| `notify_end_minutes_before` | `int` | No |  |
| `notify_start_minutes_before` | `int` | No |  |
| `reroute_on_end` | `bool` | Yes |  |
| `resolve_on_end` | `bool` | Yes |  |
| `show_in_sidebar` | `bool` | Yes |  |
| `start_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.MaintenanceWindow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MaintenanceWindow(nil).Load(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.MaintenanceWindow(nil).Update(map[string]any{
    "id": "maintenance_window_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.MaintenanceWindow(nil).Remove(map[string]any{"id": "maintenance_window_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `created_at` | `string` | Yes |  |
| `document_url` | `string` | Yes |  |
| `editor` | `[]any` | Yes |  |
| `exported_url` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PostmortemDocument(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PostmortemDocument(nil).Load(map[string]any{"id": "postmortem_document_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PostmortemDocument(nil).Update(map[string]any{
    "id": "postmortem_document_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_four_char` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `[]any` | No |  |
| `secret` | `map[string]any` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `[]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Secret(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Secret(nil).Load(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Secret(nil).Update(map[string]any{
    "id": "secret_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Secret(nil).Remove(map[string]any{"id": "secret_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `id` | `string` | Yes |  |
| `member` | `[]any` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Team(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Team(nil).Load(map[string]any{"id": "team_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `custom_role` | `[]any` | Yes |  |
| `email` | `string` | No |  |
| `id` | `string` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `seat` | `map[string]any` | Yes |  |
| `slack_user_id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.User(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.User(nil).Load(map[string]any{"id": "user_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `annotation` | `map[string]any` | No |  |
| `condition_group` | `[]any` | Yes |  |
| `continue_on_step_error` | `bool` | Yes |  |
| `delay` | `map[string]any` | Yes |  |
| `expression` | `[]any` | Yes |  |
| `folder` | `string` | No |  |
| `form_field` | `[]any` | No |  |
| `id` | `string` | Yes |  |
| `include_private_escalation` | `bool` | No |  |
| `include_private_incident` | `bool` | No |  |
| `management_meta` | `map[string]any` | Yes |  |
| `name` | `string` | Yes |  |
| `once_for` | `[]any` | Yes |  |
| `owning_team_id` | `[]any` | No |  |
| `private_incident_scope` | `string` | No |  |
| `runs_from` | `string` | No |  |
| `runs_on_incident` | `string` | Yes |  |
| `runs_on_incident_mode` | `[]any` | Yes |  |
| `shortform` | `string` | No |  |
| `skip_step_upgrade` | `bool` | No |  |
| `state` | `string` | No |  |
| `step` | `[]any` | Yes |  |
| `trigger` | `string` | Yes |  |
| `version` | `int` | Yes |  |
| `workflow` | `map[string]any` | Yes |  |

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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Workflow(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Workflow(nil).Load(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Workflow(nil).Update(map[string]any{
    "id": "workflow_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Workflow(nil).Remove(map[string]any{"id": "workflow_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
| `cancelled_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `enqueued_at` | `string` | No |  |
| `error` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `incident_reference` | `string` | No |  |
| `progress` | `[]any` | Yes |  |
| `scheduled_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `string` | Yes |  |
| `workflow_name` | `string` | No |  |
| `workflow_version_id` | `string` | Yes |  |
| `workflow_version_number` | `int` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WorkflowRun(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WorkflowRun(nil).Load(map[string]any{"id": "workflow_run_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewIncidentIoSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```


# IncidentIo PHP SDK Reference

Complete API reference for the IncidentIo PHP SDK.


## IncidentIoSDK

### Constructor

```php
require_once __DIR__ . '/incidentio_sdk.php';

$client = new IncidentIoSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = IncidentIoSDK::test();
```


### Instance Methods

#### `Action($data = null)`

Create a new `ActionEntity` instance. Pass `null` for no initial data.

#### `Alert($data = null)`

Create a new `AlertEntity` instance. Pass `null` for no initial data.

#### `AlertAttribute($data = null)`

Create a new `AlertAttributeEntity` instance. Pass `null` for no initial data.

#### `AlertNote($data = null)`

Create a new `AlertNoteEntity` instance. Pass `null` for no initial data.

#### `AlertRoute($data = null)`

Create a new `AlertRouteEntity` instance. Pass `null` for no initial data.

#### `AlertSource($data = null)`

Create a new `AlertSourceEntity` instance. Pass `null` for no initial data.

#### `ApiKey($data = null)`

Create a new `ApiKeyEntity` instance. Pass `null` for no initial data.

#### `CustomField($data = null)`

Create a new `CustomFieldEntity` instance. Pass `null` for no initial data.

#### `CustomFieldOption($data = null)`

Create a new `CustomFieldOptionEntity` instance. Pass `null` for no initial data.

#### `FollowUp($data = null)`

Create a new `FollowUpEntity` instance. Pass `null` for no initial data.

#### `Incident($data = null)`

Create a new `IncidentEntity` instance. Pass `null` for no initial data.

#### `IncidentAttachment($data = null)`

Create a new `IncidentAttachmentEntity` instance. Pass `null` for no initial data.

#### `IncidentMembership($data = null)`

Create a new `IncidentMembershipEntity` instance. Pass `null` for no initial data.

#### `IncidentParticipant($data = null)`

Create a new `IncidentParticipantEntity` instance. Pass `null` for no initial data.

#### `IncidentParticipantWorkload($data = null)`

Create a new `IncidentParticipantWorkloadEntity` instance. Pass `null` for no initial data.

#### `IncidentRelationship($data = null)`

Create a new `IncidentRelationshipEntity` instance. Pass `null` for no initial data.

#### `IncidentRole($data = null)`

Create a new `IncidentRoleEntity` instance. Pass `null` for no initial data.

#### `IncidentStatus($data = null)`

Create a new `IncidentStatusEntity` instance. Pass `null` for no initial data.

#### `IncidentTimestamp($data = null)`

Create a new `IncidentTimestampEntity` instance. Pass `null` for no initial data.

#### `IncidentType($data = null)`

Create a new `IncidentTypeEntity` instance. Pass `null` for no initial data.

#### `IncidentUpdate($data = null)`

Create a new `IncidentUpdateEntity` instance. Pass `null` for no initial data.

#### `IpAllowlist($data = null)`

Create a new `IpAllowlistEntity` instance. Pass `null` for no initial data.

#### `MaintenanceWindow($data = null)`

Create a new `MaintenanceWindowEntity` instance. Pass `null` for no initial data.

#### `PostmortemDocument($data = null)`

Create a new `PostmortemDocumentEntity` instance. Pass `null` for no initial data.

#### `Secret($data = null)`

Create a new `SecretEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `Workflow($data = null)`

Create a new `WorkflowEntity` instance. Pass `null` for no initial data.

#### `WorkflowRun($data = null)`

Create a new `WorkflowRunEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): IncidentIoUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActionEntity

```php
$action = $client->Action();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Action()->create([
  "assignee" => null, // array
  "created_at" => null, // string
  "creator" => null, // array
  "description" => null, // string
  "id" => null, // string
  "incident_id" => null, // string
  "status" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Action()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->load(["id" => "action_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->remove(["id" => "action_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Action()->update([
  "id" => "action_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionEntity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertEntity

```php
$alert = $client->Alert();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `array` | No |  |
| `alert_source_id` | `string` | Yes |  |
| `attribute` | `array` | Yes |  |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Alert()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Alert()->load(["id" => "alert_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertEntity`

Create a new `AlertEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertAttributeEntity

```php
$alert_attribute = $client->AlertAttribute();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AlertAttribute()->create([
  "array" => null, // bool
  "id" => null, // string
  "name" => null, // string
  "required" => null, // bool
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AlertAttribute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AlertAttribute()->load(["id" => "alert_attribute_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AlertAttribute()->remove(["id" => "alert_attribute_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AlertAttribute()->update([
  "id" => "alert_attribute_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertAttributeEntity`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertNoteEntity

```php
$alert_note = $client->AlertNote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No |  |
| `alert_id` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `image` | `array` | Yes |  |
| `last_edited_at` | `string` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AlertNote()->create([
  "content" => null, // string
  "created_at" => null, // string
  "creator" => null, // array
  "id" => null, // string
  "image" => null, // array
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AlertNote()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AlertNote()->load(["id" => "alert_note_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AlertNote()->remove(["id" => "alert_note_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AlertNote()->update([
  "id" => "alert_note_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertNoteEntity`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertRouteEntity

```php
$alert_route = $client->AlertRoute();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_source` | `array` | Yes |  |
| `condition_group` | `array` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `bool` | Yes |  |
| `escalation_config` | `array` | Yes |  |
| `expression` | `array` | Yes |  |
| `grouping_config` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `array` | Yes |  |
| `is_private` | `bool` | Yes |  |
| `message_config` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `array` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AlertRoute()->create([
  "alert_source" => null, // array
  "condition_group" => null, // array
  "enabled" => null, // bool
  "escalation_config" => null, // array
  "expression" => null, // array
  "grouping_config" => null, // array
  "id" => null, // string
  "incident_config" => null, // array
  "is_private" => null, // bool
  "message_config" => null, // array
  "name" => null, // string
  "version" => null, // int
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AlertRoute()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AlertRoute()->load(["id" => "alert_route_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AlertRoute()->remove(["id" => "alert_route_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AlertRoute()->update([
  "id" => "alert_route_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertRouteEntity`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlertSourceEntity

```php
$alert_source = $client->AlertSource();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No |  |
| `auto_resolve_incident_alert` | `bool` | No |  |
| `auto_resolve_timeout_minute` | `int` | No |  |
| `disabled` | `bool` | No |  |
| `email_option` | `array` | Yes |  |
| `heartbeat_option` | `array` | Yes |  |
| `http_custom_option` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `jira_option` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `array` | No |  |
| `secret_token` | `string` | No |  |
| `source_type` | `string` | Yes |  |
| `template` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AlertSource()->create([
  "email_option" => null, // array
  "heartbeat_option" => null, // array
  "http_custom_option" => null, // array
  "id" => null, // string
  "jira_option" => null, // array
  "name" => null, // string
  "source_type" => null, // string
  "template" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AlertSource()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AlertSource()->load(["id" => "alert_source_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AlertSource()->remove(["id" => "alert_source_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AlertSource()->update([
  "id" => "alert_source_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlertSourceEntity`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApiKeyEntity

```php
$api_key = $client->ApiKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `array` | Yes |  |
| `role_name` | `array` | Yes |  |
| `team_id` | `array` | Yes |  |
| `team_role` | `array` | Yes |  |
| `team_role_name` | `array` | Yes |  |
| `token_last_issued_at` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ApiKey()->create([
  "created_at" => null, // string
  "creator" => null, // array
  "id" => null, // string
  "name" => null, // string
  "role" => null, // array
  "role_name" => null, // array
  "team_id" => null, // array
  "team_role" => null, // array
  "team_role_name" => null, // array
  "token_last_issued_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ApiKey()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApiKey()->load(["id" => "api_key_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->ApiKey()->remove(["id" => "api_key_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ApiKey()->update([
  "id" => "api_key_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApiKeyEntity`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldEntity

```php
$custom_field = $client->CustomField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `filter_by` | `array` | Yes |  |
| `fixed_filter` | `array` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No |  |
| `helptext_catalog_attribute_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomField()->create([
  "created_at" => null, // string
  "description" => null, // string
  "field_type" => null, // string
  "filter_by" => null, // array
  "fixed_filter" => null, // array
  "id" => null, // string
  "name" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->remove(["id" => "custom_field_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomField()->update([
  "id" => "custom_field_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldEntity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldOptionEntity

```php
$custom_field_option = $client->CustomFieldOption();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomFieldOption()->create([
  "custom_field_id" => null, // string
  "id" => null, // string
  "sort_key" => null, // int
  "value" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomFieldOption()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomFieldOption()->load(["id" => "custom_field_option_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomFieldOption()->remove(["id" => "custom_field_option_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomFieldOption()->update([
  "id" => "custom_field_option_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldOptionEntity`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FollowUpEntity

```php
$follow_up = $client->FollowUp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `array` | Yes |  |
| `assignee_id` | `string` | No |  |
| `assignee_team` | `array` | Yes |  |
| `assignee_team_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `array` | Yes |  |
| `external_issue_reference_id` | `string` | No |  |
| `follow_up_category_id` | `string` | No |  |
| `follow_up_priority_option_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `label` | `array` | Yes |  |
| `priority` | `array` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->FollowUp()->create([
  "assignee" => null, // array
  "assignee_team" => null, // array
  "created_at" => null, // string
  "creator" => null, // array
  "external_issue_reference" => null, // array
  "id" => null, // string
  "incident_id" => null, // string
  "label" => null, // array
  "priority" => null, // array
  "status" => null, // string
  "title" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->FollowUp()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->FollowUp()->load(["id" => "follow_up_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->FollowUp()->remove(["id" => "follow_up_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->FollowUp()->update([
  "id" => "follow_up_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FollowUpEntity`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentEntity

```php
$incident = $client->Incident();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `array` | Yes |  |
| `custom_field_entry` | `array` | Yes |  |
| `duration_metric` | `array` | No |  |
| `external_issue_reference` | `array` | Yes |  |
| `has_debrief` | `bool` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_role_assignment` | `array` | Yes |  |
| `incident_status` | `array` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `array` | No |  |
| `incident_type` | `array` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `permalink` | `string` | No |  |
| `postmortem_document_id` | `array` | No |  |
| `postmortem_document_url` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `retrospective_incident_option` | `array` | No |  |
| `severity` | `array` | Yes |  |
| `severity_id` | `string` | No |  |
| `slack_channel_id` | `string` | Yes |  |
| `slack_channel_name` | `string` | No |  |
| `slack_channel_name_override` | `string` | No |  |
| `slack_team_id` | `string` | Yes |  |
| `summary` | `string` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Incident()->create([
  "created_at" => null, // string
  "creator" => null, // array
  "custom_field_entry" => null, // array
  "external_issue_reference" => null, // array
  "id" => null, // string
  "idempotency_key" => null, // string
  "incident_role_assignment" => null, // array
  "incident_status" => null, // array
  "incident_type" => null, // array
  "mode" => null, // string
  "name" => null, // string
  "reference" => null, // string
  "severity" => null, // array
  "slack_channel_id" => null, // string
  "slack_team_id" => null, // string
  "updated_at" => null, // string
  "visibility" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Incident()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Incident()->load(["id" => "incident_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentEntity`

Create a new `IncidentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentAttachmentEntity

```php
$incident_attachment = $client->IncidentAttachment();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `resource` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IncidentAttachment()->create([
  "id" => null, // string
  "incident_id" => null, // string
  "resource" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentAttachment()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentAttachment()->remove(["id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentAttachmentEntity`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentMembershipEntity

```php
$incident_membership = $client->IncidentMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IncidentMembership()->create([
  "incident_id" => null, // string
  "user_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentMembershipEntity`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentParticipantEntity

```php
$incident_participant = $client->IncidentParticipant();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `array` | Yes |  |
| `passive` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentParticipant()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentParticipantEntity`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentParticipantWorkloadEntity

```php
$incident_participant_workload = $client->IncidentParticipantWorkload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `participant_type` | `string` | No |  |
| `user` | `array` | Yes |  |
| `workload` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentParticipantWorkload()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentParticipantWorkloadEntity`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentRelationshipEntity

```php
$incident_relationship = $client->IncidentRelationship();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentRelationship()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentRelationshipEntity`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentRoleEntity

```php
$incident_role = $client->IncidentRole();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IncidentRole()->create([
  "created_at" => null, // string
  "description" => null, // string
  "id" => null, // string
  "instruction" => null, // string
  "name" => null, // string
  "role_type" => null, // string
  "shortform" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentRole()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentRole()->load(["id" => "incident_role_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentRole()->remove(["id" => "incident_role_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IncidentRole()->update([
  "id" => "incident_role_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentRoleEntity`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentStatusEntity

```php
$incident_status = $client->IncidentStatus();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->IncidentStatus()->create([
  "category" => null, // string
  "created_at" => null, // string
  "description" => null, // string
  "id" => null, // string
  "name" => null, // string
  "rank" => null, // int
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentStatus()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentStatus()->load(["id" => "incident_status_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentStatus()->remove(["id" => "incident_status_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IncidentStatus()->update([
  "id" => "incident_status_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentStatusEntity`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTimestampEntity

```php
$incident_timestamp = $client->IncidentTimestamp();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentTimestamp()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentTimestamp()->load(["id" => "incident_timestamp_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTimestampEntity`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentTypeEntity

```php
$incident_type = $client->IncidentType();
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
| `owning_team_id` | `array` | No |  |
| `private_incidents_only` | `bool` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentType()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IncidentType()->load(["id" => "incident_type_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentTypeEntity`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IncidentUpdateEntity

```php
$incident_update = $client->IncidentUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `merged_into_incident_id` | `string` | No |  |
| `message` | `string` | No |  |
| `new_incident_status` | `array` | Yes |  |
| `new_severity` | `array` | Yes |  |
| `updater` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->IncidentUpdate()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IncidentUpdateEntity`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IpAllowlistEntity

```php
$ip_allowlist = $client->IpAllowlist();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `array` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `updated_at` | `string` | No |  |
| `version` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->IpAllowlist()->load();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IpAllowlist()->update([
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IpAllowlistEntity`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MaintenanceWindowEntity

```php
$maintenance_window = $client->MaintenanceWindow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_group` | `array` | Yes |  |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes |  |
| `escalation_target` | `array` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `lead` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `notification_message` | `string` | No |  |
| `notify_channel` | `array` | No |  |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MaintenanceWindow()->create([
  "alert_condition_group" => null, // array
  "created_at" => null, // string
  "end_at" => null, // string
  "id" => null, // string
  "lead" => null, // array
  "name" => null, // string
  "reroute_on_end" => null, // bool
  "resolve_on_end" => null, // bool
  "show_in_sidebar" => null, // bool
  "start_at" => null, // string
  "updated_at" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->MaintenanceWindow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MaintenanceWindow()->load(["id" => "maintenance_window_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->MaintenanceWindow()->remove(["id" => "maintenance_window_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->MaintenanceWindow()->update([
  "id" => "maintenance_window_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MaintenanceWindowEntity`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PostmortemDocumentEntity

```php
$postmortem_document = $client->PostmortemDocument();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `document_url` | `string` | Yes |  |
| `editor` | `array` | Yes |  |
| `exported_url` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PostmortemDocument()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PostmortemDocument()->load(["id" => "postmortem_document_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PostmortemDocument()->update([
  "id" => "postmortem_document_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostmortemDocumentEntity`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SecretEntity

```php
$secret = $client->Secret();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_four_char` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `array` | No |  |
| `secret` | `array` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Secret()->create([
  "created_at" => null, // string
  "id" => null, // string
  "name" => null, // string
  "secret" => null, // array
  "updated_at" => null, // string
  "value" => null, // string
  "version" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Secret()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Secret()->load(["id" => "secret_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Secret()->remove(["id" => "secret_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Secret()->update([
  "id" => "secret_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SecretEntity`

Create a new `SecretEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `member` | `array` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Team()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Team()->load(["id" => "team_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `array` | Yes |  |
| `custom_role` | `array` | Yes |  |
| `email` | `string` | No |  |
| `id` | `string` | Yes |  |
| `is_active` | `bool` | Yes |  |
| `name` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `seat` | `array` | Yes |  |
| `slack_user_id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->User()->load(["id" => "user_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowEntity

```php
$workflow = $client->Workflow();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `array` | No |  |
| `condition_group` | `array` | Yes |  |
| `continue_on_step_error` | `bool` | Yes |  |
| `delay` | `array` | Yes |  |
| `expression` | `array` | Yes |  |
| `folder` | `string` | No |  |
| `form_field` | `array` | No |  |
| `id` | `string` | Yes |  |
| `include_private_escalation` | `bool` | No |  |
| `include_private_incident` | `bool` | No |  |
| `management_meta` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `once_for` | `array` | Yes |  |
| `owning_team_id` | `array` | No |  |
| `private_incident_scope` | `string` | No |  |
| `runs_from` | `string` | No |  |
| `runs_on_incident` | `string` | Yes |  |
| `runs_on_incident_mode` | `array` | Yes |  |
| `shortform` | `string` | No |  |
| `skip_step_upgrade` | `bool` | No |  |
| `state` | `string` | No |  |
| `step` | `array` | Yes |  |
| `trigger` | `string` | Yes |  |
| `version` | `int` | Yes |  |
| `workflow` | `array` | Yes |  |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Workflow()->create([
  "condition_group" => null, // array
  "continue_on_step_error" => null, // bool
  "delay" => null, // array
  "expression" => null, // array
  "id" => null, // string
  "management_meta" => null, // array
  "name" => null, // string
  "once_for" => null, // array
  "runs_on_incident" => null, // string
  "runs_on_incident_mode" => null, // array
  "step" => null, // array
  "trigger" => null, // string
  "version" => null, // int
  "workflow" => null, // array
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Workflow()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->load(["id" => "workflow_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Workflow()->remove(["id" => "workflow_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Workflow()->update([
  "id" => "workflow_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowEntity`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WorkflowRunEntity

```php
$workflow_run = $client->WorkflowRun();
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
| `progress` | `array` | Yes |  |
| `scheduled_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `string` | Yes |  |
| `workflow_name` | `string` | No |  |
| `workflow_version_id` | `string` | Yes |  |
| `workflow_version_number` | `int` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WorkflowRun()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WorkflowRun()->load(["id" => "workflow_run_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WorkflowRunEntity`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new IncidentIoSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```


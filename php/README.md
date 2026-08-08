# IncidentIo PHP SDK



The PHP SDK for the IncidentIo API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Action()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/incident-io-sdk/releases](https://github.com/voxgig-sdk/incident-io-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'incidentio_sdk.php';

$client = new IncidentIoSDK();
```

### 2. List action records

```php
try {
    // list() returns an array of Action records — iterate directly.
    $actions = $client->Action()->list();
    foreach ($actions as $item) {
        echo $item["id"] . " " . $item["assignee"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an action

```php
try {
    // load() returns the bare Action record (throws on error).
    $action = $client->Action()->load(["id" => "example_id"]);
    print_r($action);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the bare created Action record.
$created = $client->Action()->create(["assignee" => [], "created_at" => "example_created_at", "creator" => [], "description" => "example_description", "id" => "example_id", "incident_id" => "example_incident_id", "status" => "example_status", "updated_at" => "example_updated_at"]);

// Update — index the bare record directly ($created["id"]).
$client->Action()->update(["id" => $created["id"], "assignee" => [], "assignee_id" => "example_assignee_id"]);

// Remove
$client->Action()->remove(["id" => $created["id"]]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $incidenttypes = $client->IncidentType()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = IncidentIoSDK::test([
    "entity" => ["incidenttype" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$incidenttype = $client->IncidentType()->list();
print_r($incidenttype);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new IncidentIoSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
INCIDENT_IO_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### IncidentIoSDK

```php
require_once 'incidentio_sdk.php';
$client = new IncidentIoSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = IncidentIoSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### IncidentIoSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Action` | `($data): ActionEntity` | Create an Action entity instance. |
| `Alert` | `($data): AlertEntity` | Create an Alert entity instance. |
| `AlertAttribute` | `($data): AlertAttributeEntity` | Create an AlertAttribute entity instance. |
| `AlertNote` | `($data): AlertNoteEntity` | Create an AlertNote entity instance. |
| `AlertRoute` | `($data): AlertRouteEntity` | Create an AlertRoute entity instance. |
| `AlertSource` | `($data): AlertSourceEntity` | Create an AlertSource entity instance. |
| `ApiKey` | `($data): ApiKeyEntity` | Create an ApiKey entity instance. |
| `CustomField` | `($data): CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption` | `($data): CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `FollowUp` | `($data): FollowUpEntity` | Create a FollowUp entity instance. |
| `Incident` | `($data): IncidentEntity` | Create an Incident entity instance. |
| `IncidentAttachment` | `($data): IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentMembership` | `($data): IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
| `IncidentParticipant` | `($data): IncidentParticipantEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload` | `($data): IncidentParticipantWorkloadEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship` | `($data): IncidentRelationshipEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole` | `($data): IncidentRoleEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus` | `($data): IncidentStatusEntity` | Create an IncidentStatus entity instance. |
| `IncidentTimestamp` | `($data): IncidentTimestampEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType` | `($data): IncidentTypeEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate` | `($data): IncidentUpdateEntity` | Create an IncidentUpdate entity instance. |
| `IpAllowlist` | `($data): IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `MaintenanceWindow` | `($data): MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `PostmortemDocument` | `($data): PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `Secret` | `($data): SecretEntity` | Create a Secret entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `Workflow` | `($data): WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun` | `($data): WorkflowRunEntity` | Create a WorkflowRun entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Operations: List, Load.

API path: `/v2/alerts`

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
| `condition_group` |  |
| `created_at` |  |
| `enabled` |  |
| `escalation_config` |  |
| `expression` |  |
| `grouping_config` |  |
| `id` |  |
| `incident_config` |  |
| `is_private` |  |
| `message_config` |  |
| `name` |  |
| `owning_team_id` |  |
| `updated_at` |  |
| `version` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v3/alert_routes`

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

API path: `/v1/api_keys`

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
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` |  |
| `id` |  |
| `sort_key` |  |
| `value` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v1/custom_field_options`

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
| `incident_role_assignment` |  |
| `incident_status` |  |
| `incident_status_id` |  |
| `incident_timestamp_value` |  |
| `incident_type` |  |
| `incident_type_id` |  |
| `mode` |  |
| `name` |  |
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
| `summary` |  |
| `updated_at` |  |
| `visibility` |  |
| `workload_minutes_late` |  |
| `workload_minutes_sleeping` |  |
| `workload_minutes_total` |  |
| `workload_minutes_working` |  |

Operations: Create, List, Load.

API path: `/v2/incidents`

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
| `role_type` |  |
| `shortform` |  |
| `updated_at` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/v2/incident_roles`

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

API path: `/v2/secrets`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` |  |
| `member` |  |
| `name` |  |

Operations: List, Load.

API path: `/v3/teams`

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

Create an instance: `$action = $client->Action();`

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
| `assignee` | `array` |  |
| `assignee_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare Action record (throws on error).
$action = $client->Action()->load(["id" => "action_id"]);
```

#### Example: List

```php
// list() returns an array of Action records (throws on error).
$actions = $client->Action()->list();
```

#### Example: Create

```php
$action = $client->Action()->create([
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


### Alert

Create an instance: `$alert = $client->Alert();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `array` |  |
| `alert_source_id` | `string` |  |
| `attribute` | `array` |  |
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

```php
// load() returns the bare Alert record (throws on error).
$alert = $client->Alert()->load(["id" => "alert_id"]);
```

#### Example: List

```php
// list() returns an array of Alert records (throws on error).
$alerts = $client->Alert()->list();
```


### AlertAttribute

Create an instance: `$alert_attribute = $client->AlertAttribute();`

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
| `array` | `bool` |  |
| `emoji` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `required` | `bool` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the bare AlertAttribute record (throws on error).
$alert_attribute = $client->AlertAttribute()->load(["id" => "alert_attribute_id"]);
```

#### Example: List

```php
// list() returns an array of AlertAttribute records (throws on error).
$alert_attributes = $client->AlertAttribute()->list();
```

#### Example: Create

```php
$alert_attribute = $client->AlertAttribute()->create([
    "array" => null, // bool
    "id" => null, // string
    "name" => null, // string
    "required" => null, // bool
    "type" => null, // string
]);
```


### AlertNote

Create an instance: `$alert_note = $client->AlertNote();`

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
| `alert_group_id` | `string` |  |
| `alert_id` | `string` |  |
| `content` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` |  |
| `id` | `string` |  |
| `image` | `array` |  |
| `last_edited_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare AlertNote record (throws on error).
$alert_note = $client->AlertNote()->load(["id" => "alert_note_id"]);
```

#### Example: List

```php
// list() returns an array of AlertNote records (throws on error).
$alert_notes = $client->AlertNote()->list();
```

#### Example: Create

```php
$alert_note = $client->AlertNote()->create([
    "content" => null, // string
    "created_at" => null, // string
    "creator" => null, // array
    "id" => null, // string
    "image" => null, // array
    "updated_at" => null, // string
]);
```


### AlertRoute

Create an instance: `$alert_route = $client->AlertRoute();`

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
| `alert_source` | `array` |  |
| `condition_group` | `array` |  |
| `created_at` | `string` |  |
| `enabled` | `bool` |  |
| `escalation_config` | `array` |  |
| `expression` | `array` |  |
| `grouping_config` | `array` |  |
| `id` | `string` |  |
| `incident_config` | `array` |  |
| `is_private` | `bool` |  |
| `message_config` | `array` |  |
| `name` | `string` |  |
| `owning_team_id` | `array` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```php
// load() returns the bare AlertRoute record (throws on error).
$alert_route = $client->AlertRoute()->load(["id" => "alert_route_id"]);
```

#### Example: List

```php
// list() returns an array of AlertRoute records (throws on error).
$alert_routes = $client->AlertRoute()->list();
```

#### Example: Create

```php
$alert_route = $client->AlertRoute()->create([
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


### AlertSource

Create an instance: `$alert_source = $client->AlertSource();`

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
| `alert_events_url` | `string` |  |
| `auto_resolve_incident_alert` | `bool` |  |
| `auto_resolve_timeout_minute` | `int` |  |
| `disabled` | `bool` |  |
| `email_option` | `array` |  |
| `heartbeat_option` | `array` |  |
| `http_custom_option` | `array` |  |
| `id` | `string` |  |
| `jira_option` | `array` |  |
| `name` | `string` |  |
| `owning_team_id` | `array` |  |
| `secret_token` | `string` |  |
| `source_type` | `string` |  |
| `template` | `array` |  |

#### Example: Load

```php
// load() returns the bare AlertSource record (throws on error).
$alert_source = $client->AlertSource()->load(["id" => "alert_source_id"]);
```

#### Example: List

```php
// list() returns an array of AlertSource records (throws on error).
$alert_sources = $client->AlertSource()->list();
```

#### Example: Create

```php
$alert_source = $client->AlertSource()->create([
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


### ApiKey

Create an instance: `$api_key = $client->ApiKey();`

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
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `role` | `array` |  |
| `role_name` | `array` |  |
| `team_id` | `array` |  |
| `team_role` | `array` |  |
| `team_role_name` | `array` |  |
| `token_last_issued_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare ApiKey record (throws on error).
$api_key = $client->ApiKey()->load(["id" => "api_key_id"]);
```

#### Example: List

```php
// list() returns an array of ApiKey records (throws on error).
$api_keys = $client->ApiKey()->list();
```

#### Example: Create

```php
$api_key = $client->ApiKey()->create([
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


### CustomField

Create an instance: `$custom_field = $client->CustomField();`

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
| `catalog_type_id` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `field_type` | `string` |  |
| `filter_by` | `array` |  |
| `fixed_filter` | `array` |  |
| `group_by_catalog_attribute_id` | `string` |  |
| `helptext_catalog_attribute_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare CustomField record (throws on error).
$custom_field = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### Example: List

```php
// list() returns an array of CustomField records (throws on error).
$custom_fields = $client->CustomField()->list();
```

#### Example: Create

```php
$custom_field = $client->CustomField()->create([
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


### CustomFieldOption

Create an instance: `$custom_field_option = $client->CustomFieldOption();`

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
| `custom_field_id` | `string` |  |
| `id` | `string` |  |
| `sort_key` | `int` |  |
| `value` | `string` |  |

#### Example: Load

```php
// load() returns the bare CustomFieldOption record (throws on error).
$custom_field_option = $client->CustomFieldOption()->load(["id" => "custom_field_option_id"]);
```

#### Example: List

```php
// list() returns an array of CustomFieldOption records (throws on error).
$custom_field_options = $client->CustomFieldOption()->list();
```

#### Example: Create

```php
$custom_field_option = $client->CustomFieldOption()->create([
    "custom_field_id" => null, // string
    "id" => null, // string
    "sort_key" => null, // int
    "value" => null, // string
]);
```


### FollowUp

Create an instance: `$follow_up = $client->FollowUp();`

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
| `assignee` | `array` |  |
| `assignee_id` | `string` |  |
| `assignee_team` | `array` |  |
| `assignee_team_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` |  |
| `description` | `string` |  |
| `external_issue_reference` | `array` |  |
| `external_issue_reference_id` | `string` |  |
| `follow_up_category_id` | `string` |  |
| `follow_up_priority_option_id` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `label` | `array` |  |
| `priority` | `array` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare FollowUp record (throws on error).
$follow_up = $client->FollowUp()->load(["id" => "follow_up_id"]);
```

#### Example: List

```php
// list() returns an array of FollowUp records (throws on error).
$follow_ups = $client->FollowUp()->list();
```

#### Example: Create

```php
$follow_up = $client->FollowUp()->create([
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


### Incident

Create an instance: `$incident = $client->Incident();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `call_url` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `array` |  |
| `custom_field_entry` | `array` |  |
| `duration_metric` | `array` |  |
| `external_issue_reference` | `array` |  |
| `has_debrief` | `bool` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_role_assignment` | `array` |  |
| `incident_status` | `array` |  |
| `incident_status_id` | `string` |  |
| `incident_timestamp_value` | `array` |  |
| `incident_type` | `array` |  |
| `incident_type_id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `permalink` | `string` |  |
| `postmortem_document_id` | `array` |  |
| `postmortem_document_url` | `string` |  |
| `reference` | `string` |  |
| `retrospective_incident_option` | `array` |  |
| `severity` | `array` |  |
| `severity_id` | `string` |  |
| `slack_channel_id` | `string` |  |
| `slack_channel_name` | `string` |  |
| `slack_channel_name_override` | `string` |  |
| `slack_team_id` | `string` |  |
| `summary` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `workload_minutes_late` | `float` |  |
| `workload_minutes_sleeping` | `float` |  |
| `workload_minutes_total` | `float` |  |
| `workload_minutes_working` | `float` |  |

#### Example: Load

```php
// load() returns the bare Incident record (throws on error).
$incident = $client->Incident()->load(["id" => "incident_id"]);
```

#### Example: List

```php
// list() returns an array of Incident records (throws on error).
$incidents = $client->Incident()->list();
```

#### Example: Create

```php
$incident = $client->Incident()->create([
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


### IncidentAttachment

Create an instance: `$incident_attachment = $client->IncidentAttachment();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `resource` | `array` |  |

#### Example: List

```php
// list() returns an array of IncidentAttachment records (throws on error).
$incident_attachments = $client->IncidentAttachment()->list();
```

#### Example: Create

```php
$incident_attachment = $client->IncidentAttachment()->create([
    "id" => null, // string
    "incident_id" => null, // string
    "resource" => null, // array
]);
```


### IncidentMembership

Create an instance: `$incident_membership = $client->IncidentMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` |  |
| `user_id` | `string` |  |

#### Example: Create

```php
$incident_membership = $client->IncidentMembership()->create([
    "incident_id" => null, // string
    "user_id" => null, // string
]);
```


### IncidentParticipant

Create an instance: `$incident_participant = $client->IncidentParticipant();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `array` |  |
| `passive` | `array` |  |

#### Example: Load

```php
// load() returns the bare IncidentParticipant record (throws on error).
$incident_participant = $client->IncidentParticipant()->load();
```


### IncidentParticipantWorkload

Create an instance: `$incident_participant_workload = $client->IncidentParticipantWorkload();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `participant_type` | `string` |  |
| `user` | `array` |  |
| `workload` | `array` |  |

#### Example: List

```php
// list() returns an array of IncidentParticipantWorkload records (throws on error).
$incident_participant_workloads = $client->IncidentParticipantWorkload()->list();
```


### IncidentRelationship

Create an instance: `$incident_relationship = $client->IncidentRelationship();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `incident` | `array` |  |

#### Example: List

```php
// list() returns an array of IncidentRelationship records (throws on error).
$incident_relationships = $client->IncidentRelationship()->list();
```


### IncidentRole

Create an instance: `$incident_role = $client->IncidentRole();`

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
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `instruction` | `string` |  |
| `name` | `string` |  |
| `role_type` | `string` |  |
| `shortform` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare IncidentRole record (throws on error).
$incident_role = $client->IncidentRole()->load(["id" => "incident_role_id"]);
```

#### Example: List

```php
// list() returns an array of IncidentRole records (throws on error).
$incident_roles = $client->IncidentRole()->list();
```

#### Example: Create

```php
$incident_role = $client->IncidentRole()->create([
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


### IncidentStatus

Create an instance: `$incident_status = $client->IncidentStatus();`

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
| `category` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `int` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare IncidentStatus record (throws on error).
$incident_status = $client->IncidentStatus()->load(["id" => "incident_status_id"]);
```

#### Example: List

```php
// list() returns an array of IncidentStatus records (throws on error).
$incident_statuss = $client->IncidentStatus()->list();
```

#### Example: Create

```php
$incident_status = $client->IncidentStatus()->create([
    "category" => null, // string
    "created_at" => null, // string
    "description" => null, // string
    "id" => null, // string
    "name" => null, // string
    "rank" => null, // int
    "updated_at" => null, // string
]);
```


### IncidentTimestamp

Create an instance: `$incident_timestamp = $client->IncidentTimestamp();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `int` |  |

#### Example: Load

```php
// load() returns the bare IncidentTimestamp record (throws on error).
$incident_timestamp = $client->IncidentTimestamp()->load(["id" => "incident_timestamp_id"]);
```

#### Example: List

```php
// list() returns an array of IncidentTimestamp records (throws on error).
$incident_timestamps = $client->IncidentTimestamp()->list();
```


### IncidentType

Create an instance: `$incident_type = $client->IncidentType();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `create_in_triage` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `is_default` | `bool` |  |
| `name` | `string` |  |
| `owning_team_id` | `array` |  |
| `private_incidents_only` | `bool` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare IncidentType record (throws on error).
$incident_type = $client->IncidentType()->load(["id" => "incident_type_id"]);
```

#### Example: List

```php
// list() returns an array of IncidentType records (throws on error).
$incident_types = $client->IncidentType()->list();
```


### IncidentUpdate

Create an instance: `$incident_update = $client->IncidentUpdate();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `merged_into_incident_id` | `string` |  |
| `message` | `string` |  |
| `new_incident_status` | `array` |  |
| `new_severity` | `array` |  |
| `updater` | `array` |  |

#### Example: List

```php
// list() returns an array of IncidentUpdate records (throws on error).
$incident_updates = $client->IncidentUpdate()->list();
```


### IpAllowlist

Create an instance: `$ip_allowlist = $client->IpAllowlist();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `array` |  |
| `enabled` | `bool` |  |
| `updated_at` | `string` |  |
| `version` | `int` |  |

#### Example: Load

```php
// load() returns the bare IpAllowlist record (throws on error).
$ip_allowlist = $client->IpAllowlist()->load();
```


### MaintenanceWindow

Create an instance: `$maintenance_window = $client->MaintenanceWindow();`

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
| `alert_condition_group` | `array` |  |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `end_at` | `string` |  |
| `escalation_target` | `array` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `lead` | `array` |  |
| `name` | `string` |  |
| `notification_message` | `string` |  |
| `notify_channel` | `array` |  |
| `notify_end_minutes_before` | `int` |  |
| `notify_start_minutes_before` | `int` |  |
| `reroute_on_end` | `bool` |  |
| `resolve_on_end` | `bool` |  |
| `show_in_sidebar` | `bool` |  |
| `start_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare MaintenanceWindow record (throws on error).
$maintenance_window = $client->MaintenanceWindow()->load(["id" => "maintenance_window_id"]);
```

#### Example: List

```php
// list() returns an array of MaintenanceWindow records (throws on error).
$maintenance_windows = $client->MaintenanceWindow()->list();
```

#### Example: Create

```php
$maintenance_window = $client->MaintenanceWindow()->create([
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


### PostmortemDocument

Create an instance: `$postmortem_document = $client->PostmortemDocument();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `document_url` | `string` |  |
| `editor` | `array` |  |
| `exported_url` | `array` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare PostmortemDocument record (throws on error).
$postmortem_document = $client->PostmortemDocument()->load(["id" => "postmortem_document_id"]);
```

#### Example: List

```php
// list() returns an array of PostmortemDocument records (throws on error).
$postmortem_documents = $client->PostmortemDocument()->list();
```


### Secret

Create an instance: `$secret = $client->Secret();`

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
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `last_four_char` | `string` |  |
| `name` | `string` |  |
| `owning_team_id` | `array` |  |
| `secret` | `array` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |
| `version` | `array` |  |

#### Example: Load

```php
// load() returns the bare Secret record (throws on error).
$secret = $client->Secret()->load(["id" => "secret_id"]);
```

#### Example: List

```php
// list() returns an array of Secret records (throws on error).
$secrets = $client->Secret()->list();
```

#### Example: Create

```php
$secret = $client->Secret()->create([
    "created_at" => null, // string
    "id" => null, // string
    "name" => null, // string
    "secret" => null, // array
    "updated_at" => null, // string
    "value" => null, // string
    "version" => null, // array
]);
```


### Team

Create an instance: `$team = $client->Team();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `array` |  |
| `id` | `string` |  |
| `member` | `array` |  |
| `name` | `string` |  |

#### Example: Load

```php
// load() returns the bare Team record (throws on error).
$team = $client->Team()->load(["id" => "team_id"]);
```

#### Example: List

```php
// list() returns an array of Team records (throws on error).
$teams = $client->Team()->list();
```


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `array` |  |
| `custom_role` | `array` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_active` | `bool` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `seat` | `array` |  |
| `slack_user_id` | `string` |  |

#### Example: Load

```php
// load() returns the bare User record (throws on error).
$user = $client->User()->load(["id" => "user_id"]);
```

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### Workflow

Create an instance: `$workflow = $client->Workflow();`

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
| `annotation` | `array` |  |
| `condition_group` | `array` |  |
| `continue_on_step_error` | `bool` |  |
| `delay` | `array` |  |
| `expression` | `array` |  |
| `folder` | `string` |  |
| `form_field` | `array` |  |
| `id` | `string` |  |
| `include_private_escalation` | `bool` |  |
| `include_private_incident` | `bool` |  |
| `management_meta` | `array` |  |
| `name` | `string` |  |
| `once_for` | `array` |  |
| `owning_team_id` | `array` |  |
| `private_incident_scope` | `string` |  |
| `runs_from` | `string` |  |
| `runs_on_incident` | `string` |  |
| `runs_on_incident_mode` | `array` |  |
| `shortform` | `string` |  |
| `skip_step_upgrade` | `bool` |  |
| `state` | `string` |  |
| `step` | `array` |  |
| `trigger` | `string` |  |
| `version` | `int` |  |
| `workflow` | `array` |  |

#### Example: Load

```php
// load() returns the bare Workflow record (throws on error).
$workflow = $client->Workflow()->load(["id" => "workflow_id"]);
```

#### Example: List

```php
// list() returns an array of Workflow records (throws on error).
$workflows = $client->Workflow()->list();
```

#### Example: Create

```php
$workflow = $client->Workflow()->create([
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


### WorkflowRun

Create an instance: `$workflow_run = $client->WorkflowRun();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

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
| `progress` | `array` |  |
| `scheduled_at` | `string` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `string` |  |
| `workflow_name` | `string` |  |
| `workflow_version_id` | `string` |  |
| `workflow_version_number` | `int` |  |

#### Example: Load

```php
// load() returns the bare WorkflowRun record (throws on error).
$workflow_run = $client->WorkflowRun()->load(["id" => "workflow_run_id"]);
```

#### Example: List

```php
// list() returns an array of WorkflowRun records (throws on error).
$workflow_runs = $client->WorkflowRun()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── incidentio_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`incidentio_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$incidenttype = $client->IncidentType();
$incidenttype->list();

// $incidenttype->data_get() now returns the incidenttype data from the last list
// $incidenttype->match_get() returns the last match criteria
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

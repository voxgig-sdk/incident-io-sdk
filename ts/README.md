# IncidentIo TypeScript SDK



The TypeScript SDK for the IncidentIo API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/incident-io-sdk/releases](https://github.com/voxgig-sdk/incident-io-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { IncidentIoSDK } from '@voxgig-sdk/incident-io'

const client = new IncidentIoSDK()
```

### 2. List action records

`list()` resolves to an array of Action objects — iterate it directly:

```ts
const actions = await client.Action().list()

for (const action of actions) {
  console.log(action)
}
```

### 3. Load an action

`load()` returns the entity directly and throws on failure:

```ts
try {
  const action = await client.Action().load({ id: 'example_id' })
  console.log(action)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created Action
const created = await client.Action().create({
  assignee: {},
  created_at: 'example_created_at',
  creator: {},
  description: 'example_description',
  id: 'example_id',
  incident_id: 'example_incident_id',
  status: 'example_status',
  updated_at: 'example_updated_at',
})

// Update — the id comes straight off the returned entity
const updated = await client.Action().update({
  id: created.id!,
  assignee: {},
  assignee_id: 'example_assignee_id',
})

// Remove
await client.Action().remove({
  id: created.id!,
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const incidenttypes = await client.IncidentType().list()
  console.log(incidenttypes)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = IncidentIoSDK.test()

const incidenttype = await client.IncidentType().list()
// incidenttype is a bare entity populated with mock response data
console.log(incidenttype)
```

You can also use the instance method:

```ts
const client = new IncidentIoSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.IncidentType()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new IncidentIoSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
INCIDENT_IO_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### IncidentIoSDK

#### Constructor

```ts
new IncidentIoSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Action(data?)` | `ActionEntity` | Create an Action entity instance. |
| `Alert(data?)` | `AlertEntity` | Create an Alert entity instance. |
| `AlertAttribute(data?)` | `AlertAttributeEntity` | Create an AlertAttribute entity instance. |
| `AlertNote(data?)` | `AlertNoteEntity` | Create an AlertNote entity instance. |
| `AlertRoute(data?)` | `AlertRouteEntity` | Create an AlertRoute entity instance. |
| `AlertSource(data?)` | `AlertSourceEntity` | Create an AlertSource entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption(data?)` | `CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `FollowUp(data?)` | `FollowUpEntity` | Create a FollowUp entity instance. |
| `Incident(data?)` | `IncidentEntity` | Create an Incident entity instance. |
| `IncidentAttachment(data?)` | `IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentMembership(data?)` | `IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
| `IncidentParticipant(data?)` | `IncidentParticipantEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload(data?)` | `IncidentParticipantWorkloadEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship(data?)` | `IncidentRelationshipEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole(data?)` | `IncidentRoleEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus(data?)` | `IncidentStatusEntity` | Create an IncidentStatus entity instance. |
| `IncidentTimestamp(data?)` | `IncidentTimestampEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType(data?)` | `IncidentTypeEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate(data?)` | `IncidentUpdateEntity` | Create an IncidentUpdate entity instance. |
| `IpAllowlist(data?)` | `IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `MaintenanceWindow(data?)` | `MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `PostmortemDocument(data?)` | `PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `User(data?)` | `UserEntity` | Create an User entity instance. |
| `Workflow(data?)` | `WorkflowEntity` | Create a Workflow entity instance. |
| `WorkflowRun(data?)` | `WorkflowRunEntity` | Create a WorkflowRun entity instance. |
| `tester(testopts?, sdkopts?)` | `IncidentIoSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `IncidentIoSDK.test(testopts?, sdkopts?)` | `IncidentIoSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): IncidentIoSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: create, list, load, remove, update.

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

Operations: list, load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/v2/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` |  |
| `id` |  |
| `sort_key` |  |
| `value` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

API path: `/v2/incidents`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `id` |  |
| `incident_id` |  |
| `resource` |  |

Operations: create, list, remove.

API path: `/v1/incident_attachments`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `incident_id` |  |
| `user_id` |  |

Operations: create.

API path: `/v1/incident_memberships`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `active` |  |
| `passive` |  |

Operations: load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `archived_at` |  |
| `participant_type` |  |
| `user` |  |
| `workload` |  |

Operations: list.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `id` |  |
| `incident` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/v1/incident_statuses`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `rank` |  |

Operations: list, load.

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

Operations: list, load.

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

Operations: list.

API path: `/v2/incident_updates`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `allowlist` |  |
| `enabled` |  |
| `updated_at` |  |
| `version` |  |

Operations: load, update.

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

Operations: create, list, load, remove, update.

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

Operations: list, load, update.

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

Operations: create, list, load, remove, update.

API path: `/v2/secrets`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` |  |
| `member` |  |
| `name` |  |

Operations: list, load.

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

Operations: list, load.

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

Operations: create, list, load, remove, update.

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

Operations: list, load.

API path: `/v2/workflow_runs`



## Entities


### Action

Create an instance: `const action = client.Action()`

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
| `assignee` | `Record<string, any>` |  |
| `assignee_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const action = await client.Action().load({ id: 'action_id' })
```

#### Example: List

```ts
const actions = await client.Action().list()
```

#### Example: Create

```ts
const action = await client.Action().create({
  assignee: {},
  created_at: 'example_created_at',
  creator: {},
  description: 'example_description',
  id: 'example_id',
  incident_id: 'example_incident_id',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```


### Alert

Create an instance: `const alert = client.Alert()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `any[]` |  |
| `alert_source_id` | `string` |  |
| `attribute` | `any[]` |  |
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

```ts
const alert = await client.Alert().load({ id: 'alert_id' })
```

#### Example: List

```ts
const alerts = await client.Alert().list()
```


### AlertAttribute

Create an instance: `const alert_attribute = client.AlertAttribute()`

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
| `array` | `boolean` |  |
| `emoji` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `required` | `boolean` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const alert_attribute = await client.AlertAttribute().load({ id: 'alert_attribute_id' })
```

#### Example: List

```ts
const alert_attributes = await client.AlertAttribute().list()
```

#### Example: Create

```ts
const alert_attribute = await client.AlertAttribute().create({
  array: true,
  id: 'example_id',
  name: 'example_name',
  required: true,
  type: 'example_type',
})
```


### AlertNote

Create an instance: `const alert_note = client.AlertNote()`

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
| `creator` | `Record<string, any>` |  |
| `id` | `string` |  |
| `image` | `any[]` |  |
| `last_edited_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const alert_note = await client.AlertNote().load({ id: 'alert_note_id' })
```

#### Example: List

```ts
const alert_notes = await client.AlertNote().list()
```

#### Example: Create

```ts
const alert_note = await client.AlertNote().create({
  content: 'example_content',
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  image: [],
  updated_at: 'example_updated_at',
})
```


### AlertRoute

Create an instance: `const alert_route = client.AlertRoute()`

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
| `alert_source` | `any[]` |  |
| `condition_group` | `any[]` |  |
| `created_at` | `string` |  |
| `enabled` | `boolean` |  |
| `escalation_config` | `Record<string, any>` |  |
| `expression` | `any[]` |  |
| `grouping_config` | `Record<string, any>` |  |
| `id` | `string` |  |
| `incident_config` | `Record<string, any>` |  |
| `is_private` | `boolean` |  |
| `message_config` | `Record<string, any>` |  |
| `name` | `string` |  |
| `owning_team_id` | `any[]` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const alert_route = await client.AlertRoute().load({ id: 'alert_route_id' })
```

#### Example: List

```ts
const alert_routes = await client.AlertRoute().list()
```

#### Example: Create

```ts
const alert_route = await client.AlertRoute().create({
  alert_source: [],
  condition_group: [],
  enabled: true,
  escalation_config: {},
  expression: [],
  grouping_config: {},
  id: 'example_id',
  incident_config: {},
  is_private: true,
  message_config: {},
  name: 'example_name',
  version: 1,
})
```


### AlertSource

Create an instance: `const alert_source = client.AlertSource()`

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
| `auto_resolve_incident_alert` | `boolean` |  |
| `auto_resolve_timeout_minute` | `number` |  |
| `disabled` | `boolean` |  |
| `email_option` | `Record<string, any>` |  |
| `heartbeat_option` | `Record<string, any>` |  |
| `http_custom_option` | `Record<string, any>` |  |
| `id` | `string` |  |
| `jira_option` | `Record<string, any>` |  |
| `name` | `string` |  |
| `owning_team_id` | `any[]` |  |
| `secret_token` | `string` |  |
| `source_type` | `string` |  |
| `template` | `Record<string, any>` |  |

#### Example: Load

```ts
const alert_source = await client.AlertSource().load({ id: 'alert_source_id' })
```

#### Example: List

```ts
const alert_sources = await client.AlertSource().list()
```

#### Example: Create

```ts
const alert_source = await client.AlertSource().create({
  email_option: {},
  heartbeat_option: {},
  http_custom_option: {},
  id: 'example_id',
  jira_option: {},
  name: 'example_name',
  source_type: 'example_source_type',
  template: {},
})
```


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

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
| `creator` | `Record<string, any>` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `role` | `any[]` |  |
| `role_name` | `any[]` |  |
| `team_id` | `any[]` |  |
| `team_role` | `any[]` |  |
| `team_role_name` | `any[]` |  |
| `token_last_issued_at` | `string` |  |

#### Example: Load

```ts
const api_key = await client.ApiKey().load({ id: 'api_key_id' })
```

#### Example: List

```ts
const api_keys = await client.ApiKey().list()
```

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  name: 'example_name',
  role: [],
  role_name: [],
  team_id: [],
  team_role: [],
  team_role_name: [],
  token_last_issued_at: 'example_token_last_issued_at',
})
```


### CustomField

Create an instance: `const custom_field = client.CustomField()`

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
| `filter_by` | `Record<string, any>` |  |
| `fixed_filter` | `Record<string, any>` |  |
| `group_by_catalog_attribute_id` | `string` |  |
| `helptext_catalog_attribute_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const custom_field = await client.CustomField().load({ id: 'custom_field_id' })
```

#### Example: List

```ts
const custom_fields = await client.CustomField().list()
```

#### Example: Create

```ts
const custom_field = await client.CustomField().create({
  created_at: 'example_created_at',
  description: 'example_description',
  field_type: 'example_field_type',
  filter_by: {},
  fixed_filter: {},
  id: 'example_id',
  name: 'example_name',
  updated_at: 'example_updated_at',
})
```


### CustomFieldOption

Create an instance: `const custom_field_option = client.CustomFieldOption()`

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
| `sort_key` | `number` |  |
| `value` | `string` |  |

#### Example: Load

```ts
const custom_field_option = await client.CustomFieldOption().load({ id: 'custom_field_option_id' })
```

#### Example: List

```ts
const custom_field_options = await client.CustomFieldOption().list()
```

#### Example: Create

```ts
const custom_field_option = await client.CustomFieldOption().create({
  custom_field_id: 'example_custom_field_id',
  id: 'example_id',
  sort_key: 1,
  value: 'example_value',
})
```


### FollowUp

Create an instance: `const follow_up = client.FollowUp()`

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
| `assignee` | `Record<string, any>` |  |
| `assignee_id` | `string` |  |
| `assignee_team` | `Record<string, any>` |  |
| `assignee_team_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `Record<string, any>` |  |
| `description` | `string` |  |
| `external_issue_reference` | `Record<string, any>` |  |
| `external_issue_reference_id` | `string` |  |
| `follow_up_category_id` | `string` |  |
| `follow_up_priority_option_id` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `label` | `any[]` |  |
| `priority` | `Record<string, any>` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const follow_up = await client.FollowUp().load({ id: 'follow_up_id' })
```

#### Example: List

```ts
const follow_ups = await client.FollowUp().list()
```

#### Example: Create

```ts
const follow_up = await client.FollowUp().create({
  assignee: {},
  assignee_team: {},
  created_at: 'example_created_at',
  creator: {},
  external_issue_reference: {},
  id: 'example_id',
  incident_id: 'example_incident_id',
  label: [],
  priority: {},
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### Incident

Create an instance: `const incident = client.Incident()`

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
| `creator` | `Record<string, any>` |  |
| `custom_field_entry` | `any[]` |  |
| `duration_metric` | `any[]` |  |
| `external_issue_reference` | `Record<string, any>` |  |
| `has_debrief` | `boolean` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_role_assignment` | `any[]` |  |
| `incident_status` | `Record<string, any>` |  |
| `incident_status_id` | `string` |  |
| `incident_timestamp_value` | `any[]` |  |
| `incident_type` | `Record<string, any>` |  |
| `incident_type_id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `permalink` | `string` |  |
| `postmortem_document_id` | `any[]` |  |
| `postmortem_document_url` | `string` |  |
| `reference` | `string` |  |
| `retrospective_incident_option` | `Record<string, any>` |  |
| `severity` | `Record<string, any>` |  |
| `severity_id` | `string` |  |
| `slack_channel_id` | `string` |  |
| `slack_channel_name` | `string` |  |
| `slack_channel_name_override` | `string` |  |
| `slack_team_id` | `string` |  |
| `summary` | `string` |  |
| `updated_at` | `string` |  |
| `visibility` | `string` |  |
| `workload_minutes_late` | `number` |  |
| `workload_minutes_sleeping` | `number` |  |
| `workload_minutes_total` | `number` |  |
| `workload_minutes_working` | `number` |  |

#### Example: Load

```ts
const incident = await client.Incident().load({ id: 'incident_id' })
```

#### Example: List

```ts
const incidents = await client.Incident().list()
```

#### Example: Create

```ts
const incident = await client.Incident().create({
  created_at: 'example_created_at',
  creator: {},
  custom_field_entry: [],
  external_issue_reference: {},
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_role_assignment: [],
  incident_status: {},
  incident_type: {},
  mode: 'example_mode',
  name: 'example_name',
  reference: 'example_reference',
  severity: {},
  slack_channel_id: 'example_slack_channel_id',
  slack_team_id: 'example_slack_team_id',
  updated_at: 'example_updated_at',
  visibility: 'example_visibility',
})
```


### IncidentAttachment

Create an instance: `const incident_attachment = client.IncidentAttachment()`

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
| `resource` | `Record<string, any>` |  |

#### Example: List

```ts
const incident_attachments = await client.IncidentAttachment().list()
```

#### Example: Create

```ts
const incident_attachment = await client.IncidentAttachment().create({
  id: 'example_id',
  incident_id: 'example_incident_id',
  resource: {},
})
```


### IncidentMembership

Create an instance: `const incident_membership = client.IncidentMembership()`

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

```ts
const incident_membership = await client.IncidentMembership().create({
  incident_id: 'example_incident_id',
  user_id: 'example_user_id',
})
```


### IncidentParticipant

Create an instance: `const incident_participant = client.IncidentParticipant()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `any[]` |  |
| `passive` | `any[]` |  |

#### Example: Load

```ts
const incident_participant = await client.IncidentParticipant().load()
```


### IncidentParticipantWorkload

Create an instance: `const incident_participant_workload = client.IncidentParticipantWorkload()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `archived_at` | `string` |  |
| `participant_type` | `string` |  |
| `user` | `Record<string, any>` |  |
| `workload` | `Record<string, any>` |  |

#### Example: List

```ts
const incident_participant_workloads = await client.IncidentParticipantWorkload().list()
```


### IncidentRelationship

Create an instance: `const incident_relationship = client.IncidentRelationship()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `incident` | `Record<string, any>` |  |

#### Example: List

```ts
const incident_relationships = await client.IncidentRelationship().list()
```


### IncidentRole

Create an instance: `const incident_role = client.IncidentRole()`

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

```ts
const incident_role = await client.IncidentRole().load({ id: 'incident_role_id' })
```

#### Example: List

```ts
const incident_roles = await client.IncidentRole().list()
```

#### Example: Create

```ts
const incident_role = await client.IncidentRole().create({
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  instruction: 'example_instruction',
  name: 'example_name',
  role_type: 'example_role_type',
  shortform: 'example_shortform',
  updated_at: 'example_updated_at',
})
```


### IncidentStatus

Create an instance: `const incident_status = client.IncidentStatus()`

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
| `rank` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const incident_status = await client.IncidentStatus().load({ id: 'incident_status_id' })
```

#### Example: List

```ts
const incident_statuss = await client.IncidentStatus().list()
```

#### Example: Create

```ts
const incident_status = await client.IncidentStatus().create({
  category: 'example_category',
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```


### IncidentTimestamp

Create an instance: `const incident_timestamp = client.IncidentTimestamp()`

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
| `rank` | `number` |  |

#### Example: Load

```ts
const incident_timestamp = await client.IncidentTimestamp().load({ id: 'incident_timestamp_id' })
```

#### Example: List

```ts
const incident_timestamps = await client.IncidentTimestamp().list()
```


### IncidentType

Create an instance: `const incident_type = client.IncidentType()`

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
| `is_default` | `boolean` |  |
| `name` | `string` |  |
| `owning_team_id` | `any[]` |  |
| `private_incidents_only` | `boolean` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const incident_type = await client.IncidentType().load({ id: 'incident_type_id' })
```

#### Example: List

```ts
const incident_types = await client.IncidentType().list()
```


### IncidentUpdate

Create an instance: `const incident_update = client.IncidentUpdate()`

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
| `new_incident_status` | `Record<string, any>` |  |
| `new_severity` | `Record<string, any>` |  |
| `updater` | `Record<string, any>` |  |

#### Example: List

```ts
const incident_updates = await client.IncidentUpdate().list()
```


### IpAllowlist

Create an instance: `const ip_allowlist = client.IpAllowlist()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allowlist` | `any[]` |  |
| `enabled` | `boolean` |  |
| `updated_at` | `string` |  |
| `version` | `number` |  |

#### Example: Load

```ts
const ip_allowlist = await client.IpAllowlist().load()
```


### MaintenanceWindow

Create an instance: `const maintenance_window = client.MaintenanceWindow()`

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
| `alert_condition_group` | `any[]` |  |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `end_at` | `string` |  |
| `escalation_target` | `any[]` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `lead` | `Record<string, any>` |  |
| `name` | `string` |  |
| `notification_message` | `string` |  |
| `notify_channel` | `any[]` |  |
| `notify_end_minutes_before` | `number` |  |
| `notify_start_minutes_before` | `number` |  |
| `reroute_on_end` | `boolean` |  |
| `resolve_on_end` | `boolean` |  |
| `show_in_sidebar` | `boolean` |  |
| `start_at` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const maintenance_window = await client.MaintenanceWindow().load({ id: 'maintenance_window_id' })
```

#### Example: List

```ts
const maintenance_windows = await client.MaintenanceWindow().list()
```

#### Example: Create

```ts
const maintenance_window = await client.MaintenanceWindow().create({
  alert_condition_group: [],
  created_at: 'example_created_at',
  end_at: 'example_end_at',
  id: 'example_id',
  lead: {},
  name: 'example_name',
  reroute_on_end: true,
  resolve_on_end: true,
  show_in_sidebar: true,
  start_at: 'example_start_at',
  updated_at: 'example_updated_at',
})
```


### PostmortemDocument

Create an instance: `const postmortem_document = client.PostmortemDocument()`

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
| `editor` | `any[]` |  |
| `exported_url` | `any[]` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const postmortem_document = await client.PostmortemDocument().load({ id: 'postmortem_document_id' })
```

#### Example: List

```ts
const postmortem_documents = await client.PostmortemDocument().list()
```


### Secret

Create an instance: `const secret = client.Secret()`

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
| `owning_team_id` | `any[]` |  |
| `secret` | `Record<string, any>` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |
| `version` | `any[]` |  |

#### Example: Load

```ts
const secret = await client.Secret().load({ id: 'secret_id' })
```

#### Example: List

```ts
const secrets = await client.Secret().list()
```

#### Example: Create

```ts
const secret = await client.Secret().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  secret: {},
  updated_at: 'example_updated_at',
  value: 'example_value',
  version: [],
})
```


### Team

Create an instance: `const team = client.Team()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `catalog_entry` | `Record<string, any>` |  |
| `id` | `string` |  |
| `member` | `any[]` |  |
| `name` | `string` |  |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `Record<string, any>` |  |
| `custom_role` | `any[]` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_active` | `boolean` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `seat` | `Record<string, any>` |  |
| `slack_user_id` | `string` |  |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```


### Workflow

Create an instance: `const workflow = client.Workflow()`

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
| `annotation` | `Record<string, any>` |  |
| `condition_group` | `any[]` |  |
| `continue_on_step_error` | `boolean` |  |
| `delay` | `Record<string, any>` |  |
| `expression` | `any[]` |  |
| `folder` | `string` |  |
| `form_field` | `any[]` |  |
| `id` | `string` |  |
| `include_private_escalation` | `boolean` |  |
| `include_private_incident` | `boolean` |  |
| `management_meta` | `Record<string, any>` |  |
| `name` | `string` |  |
| `once_for` | `any[]` |  |
| `owning_team_id` | `any[]` |  |
| `private_incident_scope` | `string` |  |
| `runs_from` | `string` |  |
| `runs_on_incident` | `string` |  |
| `runs_on_incident_mode` | `any[]` |  |
| `shortform` | `string` |  |
| `skip_step_upgrade` | `boolean` |  |
| `state` | `string` |  |
| `step` | `any[]` |  |
| `trigger` | `string` |  |
| `version` | `number` |  |
| `workflow` | `Record<string, any>` |  |

#### Example: Load

```ts
const workflow = await client.Workflow().load({ id: 'workflow_id' })
```

#### Example: List

```ts
const workflows = await client.Workflow().list()
```

#### Example: Create

```ts
const workflow = await client.Workflow().create({
  condition_group: [],
  continue_on_step_error: true,
  delay: {},
  expression: [],
  id: 'example_id',
  management_meta: {},
  name: 'example_name',
  once_for: [],
  runs_on_incident: 'example_runs_on_incident',
  runs_on_incident_mode: [],
  step: [],
  trigger: 'example_trigger',
  version: 1,
  workflow: {},
})
```


### WorkflowRun

Create an instance: `const workflow_run = client.WorkflowRun()`

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
| `progress` | `any[]` |  |
| `scheduled_at` | `string` |  |
| `updated_at` | `string` |  |
| `workflow_id` | `string` |  |
| `workflow_name` | `string` |  |
| `workflow_version_id` | `string` |  |
| `workflow_version_number` | `number` |  |

#### Example: Load

```ts
const workflow_run = await client.WorkflowRun().load({ id: 'workflow_run_id' })
```

#### Example: List

```ts
const workflow_runs = await client.WorkflowRun().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
incident-io/
├── src/
│   ├── IncidentIoSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { IncidentIoSDK } from '@voxgig-sdk/incident-io'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const incidenttype = client.IncidentType()
await incidenttype.list()

// incidenttype.data() now returns the incidenttype data from the last `list`
// incidenttype.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.

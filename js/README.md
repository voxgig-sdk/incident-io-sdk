# IncidentIo JavaScript SDK



The JavaScript SDK for the IncidentIo API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install incident-io
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { IncidentIoSDK } = require('@voxgig-sdk/incident-io-js')

const client = new IncidentIoSDK()
```

### Load an Action

```js
const action = await client.Action().load({ id: 'action_id' })
console.log(action)
```

### List Action Records

```js
const actions = await client.Action().list()
for (const action of actions) {
  console.log(action)
}
```

### Create a Action

```js
const created = await client.Action().create({
  assignee: {},
  created_at: 'example_created_at',
  creator: {},
  follow_up: true,
  id: 'example_id',
  incident_id: 'example_incident_id',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
console.log(created)
```

### Update a Action

```js
const updated = await client.Action().update({
  id: 'action_id',
  assignee: {},
  assignee_id: 'example_assignee_id',
})
console.log(updated)
```

### Remove a Action

```js
await client.Action().remove({ id: 'action_id' })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const incidentroles = await client.IncidentRole().list()
  console.log(incidentroles)
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

```js
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

```js
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

```js
const client = IncidentIoSDK.test()

const incidentrole = await client.IncidentRole().list()
// incidentrole is a bare entity populated with mock response data
console.log(incidentrole)
```

You can also use the instance method:

```js
const client = new IncidentIoSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.IncidentRole()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
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
cd js && npm test
```


## Reference

### IncidentIoSDK

#### Constructor

```js
new IncidentIoSDK(options?)
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
| `CatalogEntry(data?)` | `CatalogEntryEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource(data?)` | `CatalogResourceEntity` | Create a CatalogResource entity instance. |
| `CatalogType(data?)` | `CatalogTypeEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema(data?)` | `CatalogTypeSchemaEntity` | Create a CatalogTypeSchema entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption(data?)` | `CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `Escalation(data?)` | `EscalationEntity` | Create an Escalation entity instance. |
| `FollowUp(data?)` | `FollowUpEntity` | Create a FollowUp entity instance. |
| `Incident(data?)` | `IncidentEntity` | Create an Incident entity instance. |
| `IncidentAlert(data?)` | `IncidentAlertEntity` | Create an IncidentAlert entity instance. |
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
| `Schedule(data?)` | `ScheduleEntity` | Create a Schedule entity instance. |
| `ScheduleEntry(data?)` | `ScheduleEntryEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleReplica(data?)` | `ScheduleReplicaEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule(data?)` | `ScheduleSyncRuleEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget(data?)` | `ScheduleSyncTargetEntity` | Create a ScheduleSyncTarget entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `Severity(data?)` | `SeverityEntity` | Create a Severity entity instance. |
| `StatusPage(data?)` | `StatusPageEntity` | Create a StatusPage entity instance. |
| `StatusPageIncident(data?)` | `StatusPageIncidentEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate(data?)` | `StatusPageIncidentUpdateEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageMaintenance(data?)` | `StatusPageMaintenanceEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate(data?)` | `StatusPageMaintenanceUpdateEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure(data?)` | `StatusPageStructureEntity` | Create a StatusPageStructure entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TelemetryDataSource(data?)` | `TelemetryDataSourceEntity` | Create a TelemetryDataSource entity instance. |
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
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
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
| `external_issue_reference` |  |
| `follow_up` |  |
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

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

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

Operations: list.

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

Operations: create, list, load, update.

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

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/v1/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` |  |
| `id` |  |
| `sort_key` |  |
| `value` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

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

Operations: create, list, load.

API path: `/v2/incidents/{id}/actions/edit`

#### IncidentAlert

| Field | Description |
| --- | --- |
| `alert` |  |
| `alert_route_id` |  |
| `id` |  |
| `incident` |  |

Operations: list.

API path: `/v2/incident_alerts`

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
| `required` |  |
| `role_type` |  |
| `shortform` |  |
| `updated_at` |  |

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/v2/schedules`

#### ScheduleEntry

| Field | Description |
| --- | --- |
| `pagination_meta` |  |
| `schedule_entry` |  |

Operations: load.

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

Operations: create, list, load.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

API path: `/v1/severities`

#### StatusPage

| Field | Description |
| --- | --- |
| `description` |  |
| `id` |  |
| `name` |  |
| `public_url` |  |

Operations: list.

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

Operations: create, list, load, update.

API path: `/v2/status_page_incidents`

#### StatusPageIncidentUpdate

| Field | Description |
| --- | --- |
| `component_status` |  |
| `incident_status` |  |
| `message` |  |
| `notify_subscriber` |  |
| `status_page_incident_id` |  |

Operations: create.

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

Operations: create, list, load.

API path: `/v2/status_page_maintenances`

#### StatusPageMaintenanceUpdate

| Field | Description |
| --- | --- |
| `component_status` |  |
| `maintenance_status` |  |
| `message` |  |
| `notify_subscriber` |  |
| `status_page_maintenance_id` |  |

Operations: create.

API path: `/v2/status_page_maintenance_updates`

#### StatusPageStructure

| Field | Description |
| --- | --- |
| `item` |  |

Operations: load.

API path: `/v2/status_page_structures/{status_page_id}`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` |  |
| `member` |  |
| `name` |  |

Operations: list, load.

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

Operations: update.

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
| `assignee` | `Object` |  |
| `assignee_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `Object` |  |
| `description` | `string` |  |
| `external_issue_reference` | `Object` |  |
| `follow_up` | `boolean` |  |
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
  follow_up: true,
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
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_id` | `Array` |  |
| `alert_source_id` | `string` |  |
| `attribute` | `Array` |  |
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

#### Example: Create

```ts
const alert = await client.Alert().create({
  id: 'example_id',
  alert_source_id: 'example_alert_source_id',
  attribute: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
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
| `creator` | `Object` |  |
| `id` | `string` |  |
| `image` | `Array` |  |
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
| `alert_source` | `Array` |  |
| `channel_config` | `Array` |  |
| `condition_group` | `Array` |  |
| `created_at` | `string` |  |
| `enabled` | `boolean` |  |
| `escalation_config` | `Object` |  |
| `expression` | `Array` |  |
| `grouping_config` | `Object` |  |
| `id` | `string` |  |
| `incident_config` | `Object` |  |
| `incident_template` | `Object` |  |
| `is_private` | `boolean` |  |
| `message_config` | `Object` |  |
| `message_template` | `Object` |  |
| `name` | `string` |  |
| `owning_team_id` | `Array` |  |
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
  channel_config: [],
  condition_group: [],
  enabled: true,
  escalation_config: {},
  expression: [],
  grouping_config: {},
  id: 'example_id',
  incident_config: {},
  incident_template: {},
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
| `email_option` | `Object` |  |
| `heartbeat_option` | `Object` |  |
| `http_custom_option` | `Object` |  |
| `id` | `string` |  |
| `jira_option` | `Object` |  |
| `name` | `string` |  |
| `owning_team_id` | `Array` |  |
| `secret_token` | `string` |  |
| `source_type` | `string` |  |
| `template` | `Object` |  |

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
| `creator` | `Object` |  |
| `grace_period_minute` | `number` |  |
| `id` | `string` |  |
| `last_used_at` | `string` |  |
| `name` | `string` |  |
| `role` | `Array` |  |
| `role_name` | `Array` |  |
| `team_id` | `Array` |  |
| `team_role` | `Array` |  |
| `team_role_name` | `Array` |  |
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
  grace_period_minute: 1,
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


### CatalogEntry

Create an instance: `const catalog_entry = client.CatalogEntry()`

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
| `alias` | `Array` |  |
| `archived_at` | `string` |  |
| `attribute_value` | `Object` |  |
| `catalog_entry` | `Object` |  |
| `catalog_type` | `Object` |  |
| `catalog_type_id` | `string` |  |
| `created_at` | `string` |  |
| `external_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `number` |  |
| `update_attribute` | `Array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const catalog_entry = await client.CatalogEntry().load({ id: 'catalog_entry_id' })
```

#### Example: List

```ts
const catalog_entrys = await client.CatalogEntry().list()
```

#### Example: Create

```ts
const catalog_entry = await client.CatalogEntry().create({
  attribute_value: {},
  catalog_entry: {},
  catalog_type: {},
  catalog_type_id: 'example_catalog_type_id',
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  updated_at: 'example_updated_at',
})
```


### CatalogResource

Create an instance: `const catalog_resource = client.CatalogResource()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `description` | `string` |  |
| `engine_resource_type` | `string` |  |
| `label` | `string` |  |
| `type` | `string` |  |
| `value_docstring` | `string` |  |

#### Example: List

```ts
const catalog_resources = await client.CatalogResource().list()
```


### CatalogType

Create an instance: `const catalog_type = client.CatalogType()`

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
| `annotation` | `Object` |  |
| `category` | `Array` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `dynamic_resource_parameter` | `string` |  |
| `engine_resource_type` | `string` |  |
| `estimated_count` | `number` |  |
| `icon` | `string` |  |
| `id` | `string` |  |
| `is_editable` | `boolean` |  |
| `is_team_type` | `boolean` |  |
| `last_synced_at` | `string` |  |
| `name` | `string` |  |
| `owning_team_id` | `Array` |  |
| `ranked` | `boolean` |  |
| `registry_type` | `string` |  |
| `required_integration` | `Array` |  |
| `schema` | `Object` |  |
| `semantic_type` | `string` |  |
| `source_repo_url` | `string` |  |
| `type_name` | `string` |  |
| `updated_at` | `string` |  |
| `use_name_as_identifier` | `boolean` |  |

#### Example: Load

```ts
const catalog_type = await client.CatalogType().load({ id: 'catalog_type_id' })
```

#### Example: List

```ts
const catalog_types = await client.CatalogType().list()
```

#### Example: Create

```ts
const catalog_type = await client.CatalogType().create({
  annotation: {},
  category: [],
  color: 'example_color',
  created_at: 'example_created_at',
  description: 'example_description',
  engine_resource_type: 'example_engine_resource_type',
  icon: 'example_icon',
  id: 'example_id',
  is_editable: true,
  name: 'example_name',
  ranked: true,
  schema: {},
  semantic_type: 'example_semantic_type',
  type_name: 'example_type_name',
  updated_at: 'example_updated_at',
  use_name_as_identifier: true,
})
```


### CatalogTypeSchema

Create an instance: `const catalog_type_schema = client.CatalogTypeSchema()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `annotation` | `Object` |  |
| `attribute` | `Array` |  |
| `category` | `Array` |  |
| `color` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `dynamic_resource_parameter` | `string` |  |
| `engine_resource_type` | `string` |  |
| `estimated_count` | `number` |  |
| `icon` | `string` |  |
| `id` | `string` |  |
| `is_editable` | `boolean` |  |
| `is_team_type` | `boolean` |  |
| `last_synced_at` | `string` |  |
| `name` | `string` |  |
| `owning_team_id` | `Array` |  |
| `ranked` | `boolean` |  |
| `registry_type` | `string` |  |
| `required_integration` | `Array` |  |
| `schema` | `Object` |  |
| `semantic_type` | `string` |  |
| `source_repo_url` | `string` |  |
| `type_name` | `string` |  |
| `updated_at` | `string` |  |
| `use_name_as_identifier` | `boolean` |  |
| `version` | `number` |  |

#### Example: Create

```ts
const catalog_type_schema = await client.CatalogTypeSchema().create({
  catalog_type_id: 'example_catalog_type_id',
  annotation: {},
  attribute: [],
  category: [],
  color: 'example_color',
  created_at: 'example_created_at',
  description: 'example_description',
  engine_resource_type: 'example_engine_resource_type',
  icon: 'example_icon',
  id: 'example_id',
  is_editable: true,
  name: 'example_name',
  ranked: true,
  schema: {},
  semantic_type: 'example_semantic_type',
  type_name: 'example_type_name',
  updated_at: 'example_updated_at',
  use_name_as_identifier: true,
  version: 1,
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
| `filter_by` | `Object` |  |
| `fixed_filter` | `Object` |  |
| `group_by_catalog_attribute_id` | `string` |  |
| `helptext_catalog_attribute_id` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `option` | `Array` |  |
| `required` | `string` |  |
| `required_v2` | `string` |  |
| `show_before_closure` | `boolean` |  |
| `show_before_creation` | `boolean` |  |
| `show_before_update` | `boolean` |  |
| `show_in_announcement_post` | `boolean` |  |
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
  option: [],
  show_before_closure: true,
  show_before_creation: true,
  show_before_update: true,
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


### Escalation

Create an instance: `const escalation = client.Escalation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `creator` | `Object` |  |
| `description` | `string` |  |
| `escalation_path_id` | `string` |  |
| `event` | `Array` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_id` | `string` |  |
| `priority` | `Object` |  |
| `related_alert` | `Array` |  |
| `related_incident` | `Array` |  |
| `status` | `string` |  |
| `title` | `string` |  |
| `updated_at` | `string` |  |
| `user_id` | `Array` |  |

#### Example: Load

```ts
const escalation = await client.Escalation().load({ id: 'escalation_id' })
```

#### Example: List

```ts
const escalations = await client.Escalation().list()
```

#### Example: Create

```ts
const escalation = await client.Escalation().create({
  created_at: 'example_created_at',
  creator: {},
  event: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  priority: {},
  related_alert: [],
  related_incident: [],
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
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
| `assignee` | `Object` |  |
| `assignee_id` | `string` |  |
| `assignee_team` | `Object` |  |
| `assignee_team_id` | `string` |  |
| `completed_at` | `string` |  |
| `created_at` | `string` |  |
| `creator` | `Object` |  |
| `description` | `string` |  |
| `external_issue_reference` | `Object` |  |
| `external_issue_reference_id` | `string` |  |
| `follow_up_category_id` | `string` |  |
| `follow_up_priority_option_id` | `string` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `label` | `Array` |  |
| `priority` | `Object` |  |
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
| `creator` | `Object` |  |
| `custom_field_entry` | `Array` |  |
| `duration_metric` | `Array` |  |
| `external_issue_reference` | `Object` |  |
| `has_debrief` | `boolean` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident` | `Object` |  |
| `incident_role_assignment` | `Array` |  |
| `incident_status` | `Object` |  |
| `incident_status_id` | `string` |  |
| `incident_timestamp_value` | `Array` |  |
| `incident_type` | `Object` |  |
| `incident_type_id` | `string` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `notify_incident_channel` | `boolean` |  |
| `permalink` | `string` |  |
| `postmortem_document_id` | `Array` |  |
| `postmortem_document_url` | `string` |  |
| `reference` | `string` |  |
| `retrospective_incident_option` | `Object` |  |
| `severity` | `Object` |  |
| `severity_id` | `string` |  |
| `slack_channel_id` | `string` |  |
| `slack_channel_name` | `string` |  |
| `slack_channel_name_override` | `string` |  |
| `slack_team_id` | `string` |  |
| `source_message_channel_id` | `string` |  |
| `source_message_timestamp` | `string` |  |
| `status` | `string` |  |
| `summary` | `string` |  |
| `timestamp` | `Array` |  |
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
  incident: {},
  incident_role_assignment: [],
  incident_status: {},
  incident_type: {},
  mode: 'example_mode',
  name: 'example_name',
  notify_incident_channel: true,
  reference: 'example_reference',
  severity: {},
  slack_channel_id: 'example_slack_channel_id',
  slack_team_id: 'example_slack_team_id',
  status: 'example_status',
  updated_at: 'example_updated_at',
  visibility: 'example_visibility',
})
```


### IncidentAlert

Create an instance: `const incident_alert = client.IncidentAlert()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `Object` |  |
| `alert_route_id` | `string` |  |
| `id` | `string` |  |
| `incident` | `Object` |  |

#### Example: List

```ts
const incident_alerts = await client.IncidentAlert().list()
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
| `resource` | `Object` |  |

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
| `active` | `Array` |  |
| `passive` | `Array` |  |

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
| `user` | `Object` |  |
| `workload` | `Object` |  |

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
| `incident` | `Object` |  |

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
| `required` | `boolean` |  |
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
| `owning_team_id` | `Array` |  |
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
| `new_incident_status` | `Object` |  |
| `new_severity` | `Object` |  |
| `updater` | `Object` |  |

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
| `allowlist` | `Array` |  |
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
| `alert_condition_group` | `Array` |  |
| `archived_at` | `string` |  |
| `created_at` | `string` |  |
| `end_at` | `string` |  |
| `escalation_target` | `Array` |  |
| `id` | `string` |  |
| `incident_id` | `string` |  |
| `lead` | `Object` |  |
| `name` | `string` |  |
| `notification_message` | `string` |  |
| `notify_channel` | `Array` |  |
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
| `editor` | `Array` |  |
| `exported_url` | `Array` |  |
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


### Schedule

Create an instance: `const schedule = client.Schedule()`

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
| `annotation` | `Object` |  |
| `config` | `Object` |  |
| `created_at` | `string` |  |
| `current_shift` | `Array` |  |
| `holidays_public_config` | `Object` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `next_shift` | `Array` |  |
| `permalink` | `string` |  |
| `schedule` | `Object` |  |
| `team_id` | `Array` |  |
| `timezone` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const schedule = await client.Schedule().load({ id: 'schedule_id' })
```

#### Example: List

```ts
const schedules = await client.Schedule().list()
```

#### Example: Create

```ts
const schedule = await client.Schedule().create({
  annotation: {},
  config: {},
  created_at: 'example_created_at',
  holidays_public_config: {},
  id: 'example_id',
  name: 'example_name',
  permalink: 'example_permalink',
  schedule: {},
  team_id: [],
  timezone: 'example_timezone',
  updated_at: 'example_updated_at',
})
```


### ScheduleEntry

Create an instance: `const schedule_entry = client.ScheduleEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `pagination_meta` | `Object` |  |
| `schedule_entry` | `Object` |  |

#### Example: Load

```ts
const schedule_entry = await client.ScheduleEntry().load()
```


### ScheduleReplica

Create an instance: `const schedule_replica = client.ScheduleReplica()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `last_sync_error` | `string` |  |
| `last_synced_at` | `string` |  |
| `mirror_window_day` | `number` |  |
| `replica_fallback_user_id` | `string` |  |
| `replica_provider` | `string` |  |
| `replica_provider_id` | `string` |  |
| `schedule_id` | `string` |  |
| `schedule_replica` | `Object` |  |
| `source` | `Array` |  |
| `updated_at` | `string` |  |
| `user_status` | `Array` |  |

#### Example: Load

```ts
const schedule_replica = await client.ScheduleReplica().load({ id: 'schedule_replica_id', schedule_id: 'schedule_id' })
```

#### Example: List

```ts
const schedule_replicas = await client.ScheduleReplica().list()
```

#### Example: Create

```ts
const schedule_replica = await client.ScheduleReplica().create({
  id: 'example_id',
  created_at: 'example_created_at',
  replica_fallback_user_id: 'example_replica_fallback_user_id',
  replica_provider: 'example_replica_provider',
  replica_provider_id: 'example_replica_provider_id',
  schedule_id: 'example_schedule_id',
  schedule_replica: {},
  source: [],
  updated_at: 'example_updated_at',
  user_status: [],
})
```


### ScheduleSyncRule

Create an instance: `const schedule_sync_rule = client.ScheduleSyncRule()`

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
| `annotation` | `Object` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `permanent_member_user_id` | `Array` |  |
| `rotation_id` | `string` |  |
| `schedule_id` | `string` |  |
| `schedule_sync_rule` | `Object` |  |
| `schedule_sync_target` | `Object` |  |
| `schedule_sync_target_id` | `string` |  |
| `sync_type` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const schedule_sync_rule = await client.ScheduleSyncRule().load({ id: 'schedule_sync_rule_id', schedule_id: 'schedule_id' })
```

#### Example: List

```ts
const schedule_sync_rules = await client.ScheduleSyncRule().list()
```

#### Example: Create

```ts
const schedule_sync_rule = await client.ScheduleSyncRule().create({
  id: 'example_id',
  created_at: 'example_created_at',
  permanent_member_user_id: [],
  schedule_id: 'example_schedule_id',
  schedule_sync_rule: {},
  schedule_sync_target: {},
  schedule_sync_target_id: 'example_schedule_sync_target_id',
  sync_type: 'example_sync_type',
  updated_at: 'example_updated_at',
})
```


### ScheduleSyncTarget

Create an instance: `const schedule_sync_target = client.ScheduleSyncTarget()`

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
| `add_bot_to_group` | `boolean` |  |
| `annotation` | `Object` |  |
| `created_at` | `string` |  |
| `id` | `string` |  |
| `linked_schedule` | `Array` |  |
| `schedule_sync_target` | `Object` |  |
| `slack_team_id` | `string` |  |
| `slack_user_group_id` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const schedule_sync_target = await client.ScheduleSyncTarget().load({ id: 'schedule_sync_target_id' })
```

#### Example: List

```ts
const schedule_sync_targets = await client.ScheduleSyncTarget().list()
```

#### Example: Create

```ts
const schedule_sync_target = await client.ScheduleSyncTarget().create({
  add_bot_to_group: true,
  created_at: 'example_created_at',
  id: 'example_id',
  linked_schedule: [],
  schedule_sync_target: {},
  slack_team_id: 'example_slack_team_id',
  slack_user_group_id: 'example_slack_user_group_id',
  updated_at: 'example_updated_at',
})
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
| `owning_team_id` | `Array` |  |
| `secret` | `Object` |  |
| `updated_at` | `string` |  |
| `value` | `string` |  |
| `version` | `Array` |  |

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
  owning_team_id: [],
  secret: {},
  updated_at: 'example_updated_at',
  value: 'example_value',
  version: [],
})
```


### Severity

Create an instance: `const severity = client.Severity()`

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
| `created_at` | `string` |  |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `rank` | `number` |  |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const severity = await client.Severity().load({ id: 'severity_id' })
```

#### Example: List

```ts
const severitys = await client.Severity().list()
```

#### Example: Create

```ts
const severity = await client.Severity().create({
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```


### StatusPage

Create an instance: `const status_page = client.StatusPage()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `public_url` | `string` |  |

#### Example: List

```ts
const status_pages = await client.StatusPage().list()
```


### StatusPageIncident

Create an instance: `const status_page_incident = client.StatusPageIncident()`

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
| `component_impact` | `Array` |  |
| `component_status` | `Array` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `incident_status` | `string` |  |
| `message` | `string` |  |
| `name` | `string` |  |
| `notify_subscriber` | `boolean` |  |
| `published_at` | `string` |  |
| `status_page_id` | `string` |  |
| `update` | `Array` |  |

#### Example: Load

```ts
const status_page_incident = await client.StatusPageIncident().load({ id: 'status_page_incident_id' })
```

#### Example: List

```ts
const status_page_incidents = await client.StatusPageIncident().list()
```

#### Example: Create

```ts
const status_page_incident = await client.StatusPageIncident().create({
  component_impact: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_status: 'example_incident_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscriber: true,
  published_at: 'example_published_at',
  status_page_id: 'example_status_page_id',
  update: [],
})
```


### StatusPageIncidentUpdate

Create an instance: `const status_page_incident_update = client.StatusPageIncidentUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_status` | `Array` |  |
| `incident_status` | `string` |  |
| `message` | `string` |  |
| `notify_subscriber` | `boolean` |  |
| `status_page_incident_id` | `string` |  |

#### Example: Create

```ts
const status_page_incident_update = await client.StatusPageIncidentUpdate().create({
  message: 'example_message',
  notify_subscriber: true,
  status_page_incident_id: 'example_status_page_incident_id',
})
```


### StatusPageMaintenance

Create an instance: `const status_page_maintenance = client.StatusPageMaintenance()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affected_component_id` | `Array` |  |
| `component_maintenance_period` | `Array` |  |
| `end_at` | `string` |  |
| `id` | `string` |  |
| `idempotency_key` | `string` |  |
| `maintenance_status` | `string` |  |
| `message` | `string` |  |
| `name` | `string` |  |
| `notify_subscriber` | `boolean` |  |
| `published_at` | `string` |  |
| `start_at` | `string` |  |
| `status_page_id` | `string` |  |
| `update` | `Array` |  |

#### Example: Load

```ts
const status_page_maintenance = await client.StatusPageMaintenance().load({ id: 'status_page_maintenance_id' })
```

#### Example: List

```ts
const status_page_maintenances = await client.StatusPageMaintenance().list()
```

#### Example: Create

```ts
const status_page_maintenance = await client.StatusPageMaintenance().create({
  affected_component_id: [],
  component_maintenance_period: [],
  end_at: 'example_end_at',
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  maintenance_status: 'example_maintenance_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscriber: true,
  published_at: 'example_published_at',
  start_at: 'example_start_at',
  status_page_id: 'example_status_page_id',
  update: [],
})
```


### StatusPageMaintenanceUpdate

Create an instance: `const status_page_maintenance_update = client.StatusPageMaintenanceUpdate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `component_status` | `Array` |  |
| `maintenance_status` | `string` |  |
| `message` | `string` |  |
| `notify_subscriber` | `boolean` |  |
| `status_page_maintenance_id` | `string` |  |

#### Example: Create

```ts
const status_page_maintenance_update = await client.StatusPageMaintenanceUpdate().create({
  message: 'example_message',
  notify_subscriber: true,
  status_page_maintenance_id: 'example_status_page_maintenance_id',
})
```


### StatusPageStructure

Create an instance: `const status_page_structure = client.StatusPageStructure()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `item` | `Array` |  |

#### Example: Load

```ts
const status_page_structure = await client.StatusPageStructure().load({ id: 'status_page_structure_id' })
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
| `catalog_entry` | `Object` |  |
| `id` | `string` |  |
| `member` | `Array` |  |
| `name` | `string` |  |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```


### TelemetryDataSource

Create an instance: `const telemetry_data_source = client.TelemetryDataSource()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `datadog_config` | `Object` |  |
| `enabled` | `boolean` |  |
| `grafana_config` | `Object` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `provider` | `string` |  |
| `source_type` | `string` |  |
| `updated_at` | `string` |  |
| `version` | `string` |  |


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
| `base_role` | `Object` |  |
| `custom_role` | `Array` |  |
| `email` | `string` |  |
| `id` | `string` |  |
| `is_active` | `boolean` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `seat` | `Object` |  |
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
| `annotation` | `Object` |  |
| `condition_group` | `Array` |  |
| `continue_on_step_error` | `boolean` |  |
| `delay` | `Object` |  |
| `expression` | `Array` |  |
| `folder` | `string` |  |
| `form_field` | `Array` |  |
| `id` | `string` |  |
| `include_private_escalation` | `boolean` |  |
| `include_private_incident` | `boolean` |  |
| `management_meta` | `Object` |  |
| `name` | `string` |  |
| `once_for` | `Array` |  |
| `owning_team_id` | `Array` |  |
| `private_incident_scope` | `string` |  |
| `runs_from` | `string` |  |
| `runs_on_incident` | `string` |  |
| `runs_on_incident_mode` | `Array` |  |
| `shortform` | `string` |  |
| `skip_step_upgrade` | `boolean` |  |
| `state` | `string` |  |
| `step` | `Array` |  |
| `trigger` | `string` |  |
| `version` | `number` |  |
| `workflow` | `Object` |  |

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
| `progress` | `Array` |  |
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
│   ├── IncidentIoSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { IncidentIoSDK } = require('@voxgig-sdk/incident-io-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const incidentrole = client.IncidentRole()
await incidentrole.list()

// incidentrole.data() now returns the incidentrole data from the last `list`
// incidentrole.match() returns the last match criteria
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

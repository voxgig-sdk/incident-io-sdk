# IncidentIo JavaScript SDK



The JavaScript SDK for the IncidentIo API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`js/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/incident-io-sdk/tags)), or from a
clone:

```bash
git clone https://github.com/voxgig-sdk/incident-io-sdk
npm install ./incident-io-sdk/js
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { IncidentIoSDK } = require('@voxgig-sdk/incident-io-sdk-js')

const client = new IncidentIoSDK({
  apikey: process.env.INCIDENT_IO_APIKEY,
})
```

### Load an Action

```js
const action = await client.Action().load({ id: 'action_id' })
console.log(action.data())
```

### List Action Records

```js
const actions = await client.Action().list()
for (const action of actions) {
  console.log(action.data())
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
console.log(created.data())
```

### Update a Action

```js
const updated = await client.Action().update({
  id: 'action_id',
  assignee: {},
  assignee_id: 'example_assignee_id',
})
console.log(updated.data())
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
  const incidentstatuss = await client.IncidentStatus().list()
  console.log(incidentstatuss.map((item) => item.data()))
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
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

const incidentstatuss = await client.IncidentStatus().list()
// incidentstatuss is an array of IncidentStatus entities, one per mock record
console.log(incidentstatuss.map((incidentstatus) => incidentstatus.data()))
```

You can also use the instance method:

```js
const client = new IncidentIoSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.IncidentStatus()

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
  apikey: '...',
  extend: [logger],
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
| `apikey` | `string` | API key for authentication. |
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
| `AlertSourcesV2(data?)` | `AlertSourcesV2Entity` | Create an AlertSourcesV2 entity instance. |
| `AlertTag(data?)` | `AlertTagEntity` | Create an AlertTag entity instance. |
| `AlertsAddTagsResultV2(data?)` | `AlertsAddTagsResultV2Entity` | Create an AlertsAddTagsResultV2 entity instance. |
| `AlertsRemoveTagsResultV2(data?)` | `AlertsRemoveTagsResultV2Entity` | Create an AlertsRemoveTagsResultV2 entity instance. |
| `AlertsSetTagsResultV2(data?)` | `AlertsSetTagsResultV2Entity` | Create an AlertsSetTagsResultV2 entity instance. |
| `AlertsTransitionIncidentAlertResultV2(data?)` | `AlertsTransitionIncidentAlertResultV2Entity` | Create an AlertsTransitionIncidentAlertResultV2 entity instance. |
| `AnnouncementRule(data?)` | `AnnouncementRuleEntity` | Create an AnnouncementRule entity instance. |
| `AnnouncementTemplate(data?)` | `AnnouncementTemplateEntity` | Create an AnnouncementTemplate entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `CallRoute(data?)` | `CallRouteEntity` | Create a CallRoute entity instance. |
| `CallRoutesCreateAllowedCallerResultV2(data?)` | `CallRoutesCreateAllowedCallerResultV2Entity` | Create a CallRoutesCreateAllowedCallerResultV2 entity instance. |
| `CallRoutesCreateOptionResultV2(data?)` | `CallRoutesCreateOptionResultV2Entity` | Create a CallRoutesCreateOptionResultV2 entity instance. |
| `CallRoutesListAllowedCallersResultV2(data?)` | `CallRoutesListAllowedCallersResultV2Entity` | Create a CallRoutesListAllowedCallersResultV2 entity instance. |
| `CallRoutesListOptionsResultV2(data?)` | `CallRoutesListOptionsResultV2Entity` | Create a CallRoutesListOptionsResultV2 entity instance. |
| `CallRoutesShowAllowedCallerResultV2(data?)` | `CallRoutesShowAllowedCallerResultV2Entity` | Create a CallRoutesShowAllowedCallerResultV2 entity instance. |
| `CallRoutesShowOptionResultV2(data?)` | `CallRoutesShowOptionResultV2Entity` | Create a CallRoutesShowOptionResultV2 entity instance. |
| `CallRoutesUpdateAllowedCallerResultV2(data?)` | `CallRoutesUpdateAllowedCallerResultV2Entity` | Create a CallRoutesUpdateAllowedCallerResultV2 entity instance. |
| `CallRoutesUpdateOptionResultV2(data?)` | `CallRoutesUpdateOptionResultV2Entity` | Create a CallRoutesUpdateOptionResultV2 entity instance. |
| `CallRoutesV2(data?)` | `CallRoutesV2Entity` | Create a CallRoutesV2 entity instance. |
| `CallSession(data?)` | `CallSessionEntity` | Create a CallSession entity instance. |
| `CallTranscriptEntry(data?)` | `CallTranscriptEntryEntity` | Create a CallTranscriptEntry entity instance. |
| `CatalogEntry(data?)` | `CatalogEntryEntity` | Create a CatalogEntry entity instance. |
| `CatalogResource(data?)` | `CatalogResourceEntity` | Create a CatalogResource entity instance. |
| `CatalogType(data?)` | `CatalogTypeEntity` | Create a CatalogType entity instance. |
| `CatalogTypeSchema(data?)` | `CatalogTypeSchemaEntity` | Create a CatalogTypeSchema entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldOption(data?)` | `CustomFieldOptionEntity` | Create a CustomFieldOption entity instance. |
| `Escalation(data?)` | `EscalationEntity` | Create an Escalation entity instance. |
| `EscalationPathTemplate(data?)` | `EscalationPathTemplateEntity` | Create an EscalationPathTemplate entity instance. |
| `EscalationsCheckEscalationPermissionsResultV2(data?)` | `EscalationsCheckEscalationPermissionsResultV2Entity` | Create an EscalationsCheckEscalationPermissionsResultV2 entity instance. |
| `EscalationsReassignEscalationResultV2(data?)` | `EscalationsReassignEscalationResultV2Entity` | Create an EscalationsReassignEscalationResultV2 entity instance. |
| `FollowUp(data?)` | `FollowUpEntity` | Create a FollowUp entity instance. |
| `FollowUpsConnectExternalIssueResultV3(data?)` | `FollowUpsConnectExternalIssueResultV3Entity` | Create a FollowUpsConnectExternalIssueResultV3 entity instance. |
| `FollowUpsCreateFromLinkResultV3(data?)` | `FollowUpsCreateFromLinkResultV3Entity` | Create a FollowUpsCreateFromLinkResultV3 entity instance. |
| `Identity(data?)` | `IdentityEntity` | Create an Identity entity instance. |
| `Incident(data?)` | `IncidentEntity` | Create an Incident entity instance. |
| `IncidentActivityLogEntry(data?)` | `IncidentActivityLogEntryEntity` | Create an IncidentActivityLogEntry entity instance. |
| `IncidentAttachment(data?)` | `IncidentAttachmentEntity` | Create an IncidentAttachment entity instance. |
| `IncidentForm(data?)` | `IncidentFormEntity` | Create an IncidentForm entity instance. |
| `IncidentMembership(data?)` | `IncidentMembershipEntity` | Create an IncidentMembership entity instance. |
| `IncidentParticipant(data?)` | `IncidentParticipantEntity` | Create an IncidentParticipant entity instance. |
| `IncidentParticipantWorkload(data?)` | `IncidentParticipantWorkloadEntity` | Create an IncidentParticipantWorkload entity instance. |
| `IncidentRelationship(data?)` | `IncidentRelationshipEntity` | Create an IncidentRelationship entity instance. |
| `IncidentRole(data?)` | `IncidentRoleEntity` | Create an IncidentRole entity instance. |
| `IncidentStatus(data?)` | `IncidentStatusEntity` | Create an IncidentStatus entity instance. |
| `IncidentTeamMembership(data?)` | `IncidentTeamMembershipEntity` | Create an IncidentTeamMembership entity instance. |
| `IncidentTeamMembershipsV1(data?)` | `IncidentTeamMembershipsV1Entity` | Create an IncidentTeamMembershipsV1 entity instance. |
| `IncidentTemplate(data?)` | `IncidentTemplateEntity` | Create an IncidentTemplate entity instance. |
| `IncidentTemplatesValidateResultV1(data?)` | `IncidentTemplatesValidateResultV1Entity` | Create an IncidentTemplatesValidateResultV1 entity instance. |
| `IncidentTimelineItem(data?)` | `IncidentTimelineItemEntity` | Create an IncidentTimelineItem entity instance. |
| `IncidentTimestamp(data?)` | `IncidentTimestampEntity` | Create an IncidentTimestamp entity instance. |
| `IncidentType(data?)` | `IncidentTypeEntity` | Create an IncidentType entity instance. |
| `IncidentUpdate(data?)` | `IncidentUpdateEntity` | Create an IncidentUpdate entity instance. |
| `IpAllowlist(data?)` | `IpAllowlistEntity` | Create an IpAllowlist entity instance. |
| `IpRange(data?)` | `IpRangeEntity` | Create an IpRange entity instance. |
| `MaintenanceWindow(data?)` | `MaintenanceWindowEntity` | Create a MaintenanceWindow entity instance. |
| `OnCallNotificationMethodPublicV2(data?)` | `OnCallNotificationMethodPublicV2Entity` | Create an OnCallNotificationMethodPublicV2 entity instance. |
| `OnCallNotificationRulePublicV2(data?)` | `OnCallNotificationRulePublicV2Entity` | Create an OnCallNotificationRulePublicV2 entity instance. |
| `PayConfig(data?)` | `PayConfigEntity` | Create a PayConfig entity instance. |
| `PayConfigsCreateOneOffRuleResultV2(data?)` | `PayConfigsCreateOneOffRuleResultV2Entity` | Create a PayConfigsCreateOneOffRuleResultV2 entity instance. |
| `PayConfigsCreateWeeklyRuleResultV2(data?)` | `PayConfigsCreateWeeklyRuleResultV2Entity` | Create a PayConfigsCreateWeeklyRuleResultV2 entity instance. |
| `PayConfigsListOneOffRulesResultV2(data?)` | `PayConfigsListOneOffRulesResultV2Entity` | Create a PayConfigsListOneOffRulesResultV2 entity instance. |
| `PayConfigsListWeeklyRulesResultV2(data?)` | `PayConfigsListWeeklyRulesResultV2Entity` | Create a PayConfigsListWeeklyRulesResultV2 entity instance. |
| `PayConfigsShowOneOffRuleResultV2(data?)` | `PayConfigsShowOneOffRuleResultV2Entity` | Create a PayConfigsShowOneOffRuleResultV2 entity instance. |
| `PayConfigsShowWeeklyRuleResultV2(data?)` | `PayConfigsShowWeeklyRuleResultV2Entity` | Create a PayConfigsShowWeeklyRuleResultV2 entity instance. |
| `PayConfigsUpdateOneOffRuleResultV2(data?)` | `PayConfigsUpdateOneOffRuleResultV2Entity` | Create a PayConfigsUpdateOneOffRuleResultV2 entity instance. |
| `PayConfigsUpdateWeeklyRuleResultV2(data?)` | `PayConfigsUpdateWeeklyRuleResultV2Entity` | Create a PayConfigsUpdateWeeklyRuleResultV2 entity instance. |
| `PayConfigsV2(data?)` | `PayConfigsV2Entity` | Create a PayConfigsV2 entity instance. |
| `PayReport(data?)` | `PayReportEntity` | Create a PayReport entity instance. |
| `PayReportsPublishResultV2(data?)` | `PayReportsPublishResultV2Entity` | Create a PayReportsPublishResultV2 entity instance. |
| `PayReportsUnpublishResultV2(data?)` | `PayReportsUnpublishResultV2Entity` | Create a PayReportsUnpublishResultV2 entity instance. |
| `PayReportsV2(data?)` | `PayReportsV2Entity` | Create a PayReportsV2 entity instance. |
| `PoliciesV2(data?)` | `PoliciesV2Entity` | Create a PoliciesV2 entity instance. |
| `Policy(data?)` | `PolicyEntity` | Create a Policy entity instance. |
| `PolicyFinding(data?)` | `PolicyFindingEntity` | Create a PolicyFinding entity instance. |
| `PolicyFindingsDismissResultV2(data?)` | `PolicyFindingsDismissResultV2Entity` | Create a PolicyFindingsDismissResultV2 entity instance. |
| `PolicyFindingsRestoreResultV2(data?)` | `PolicyFindingsRestoreResultV2Entity` | Create a PolicyFindingsRestoreResultV2 entity instance. |
| `PostmortemDocument(data?)` | `PostmortemDocumentEntity` | Create a PostmortemDocument entity instance. |
| `Schedule(data?)` | `ScheduleEntity` | Create a Schedule entity instance. |
| `ScheduleEntriesListPayloadV2(data?)` | `ScheduleEntriesListPayloadV2Entity` | Create a ScheduleEntriesListPayloadV2 entity instance. |
| `ScheduleEntry(data?)` | `ScheduleEntryEntity` | Create a ScheduleEntry entity instance. |
| `ScheduleReplica(data?)` | `ScheduleReplicaEntity` | Create a ScheduleReplica entity instance. |
| `ScheduleSyncRule(data?)` | `ScheduleSyncRuleEntity` | Create a ScheduleSyncRule entity instance. |
| `ScheduleSyncTarget(data?)` | `ScheduleSyncTargetEntity` | Create a ScheduleSyncTarget entity instance. |
| `SchedulesShowOverrideResultV2(data?)` | `SchedulesShowOverrideResultV2Entity` | Create a SchedulesShowOverrideResultV2 entity instance. |
| `SchedulesUpdateOverrideResultV2(data?)` | `SchedulesUpdateOverrideResultV2Entity` | Create a SchedulesUpdateOverrideResultV2 entity instance. |
| `Secret(data?)` | `SecretEntity` | Create a Secret entity instance. |
| `Severity(data?)` | `SeverityEntity` | Create a Severity entity instance. |
| `StatusPage(data?)` | `StatusPageEntity` | Create a StatusPage entity instance. |
| `StatusPageComponent(data?)` | `StatusPageComponentEntity` | Create a StatusPageComponent entity instance. |
| `StatusPageComponentAvailabilityV2(data?)` | `StatusPageComponentAvailabilityV2Entity` | Create a StatusPageComponentAvailabilityV2 entity instance. |
| `StatusPageIncident(data?)` | `StatusPageIncidentEntity` | Create a StatusPageIncident entity instance. |
| `StatusPageIncidentUpdate(data?)` | `StatusPageIncidentUpdateEntity` | Create a StatusPageIncidentUpdate entity instance. |
| `StatusPageLinkedResponseIncidentV1(data?)` | `StatusPageLinkedResponseIncidentV1Entity` | Create a StatusPageLinkedResponseIncidentV1 entity instance. |
| `StatusPageMaintenance(data?)` | `StatusPageMaintenanceEntity` | Create a StatusPageMaintenance entity instance. |
| `StatusPageMaintenanceUpdate(data?)` | `StatusPageMaintenanceUpdateEntity` | Create a StatusPageMaintenanceUpdate entity instance. |
| `StatusPageStructure(data?)` | `StatusPageStructureEntity` | Create a StatusPageStructure entity instance. |
| `StatusPagesV2(data?)` | `StatusPagesV2Entity` | Create a StatusPagesV2 entity instance. |
| `Team(data?)` | `TeamEntity` | Create a Team entity instance. |
| `TelemetryDataSourceV2(data?)` | `TelemetryDataSourceV2Entity` | Create a TelemetryDataSourceV2 entity instance. |
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
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity, and return it. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity, and return it. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<Entity>` | Remove an entity, and return it marked as deleted. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): IncidentIoSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to the entity, marked as deleted.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/v2/alert_sources`

#### AlertSourcesV2

| Field | Description |
| --- | --- |
| `owning_team_ids` | IDs of teams that own this alert source |
| `source_type` | Type of alert source |
| `template` |  |

Operations: create.

API path: `/v2/alert_sources/actions/validate`

#### AlertTag

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the tag |
| `name` | The tag name |

Operations: list.

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

Operations: create.

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

Operations: create.

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

Operations: create.

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

Operations: create, list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

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

Operations: list, load, update.

API path: `/v2/call_routes`

#### CallRoutesCreateAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `name` | Label for whose number this is |
| `phone_number` | The number to allow, in international format |

Operations: create.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRoutesCreateOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `path` | Who to page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: create.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallRoutesListAllowedCallersResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: list.

API path: `/v2/call_routes/{call_route_id}/allowed_callers`

#### CallRoutesListOptionsResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: list.

API path: `/v2/call_routes/{call_route_id}/options`

#### CallRoutesShowAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: load.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

#### CallRoutesShowOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: load.

API path: `/v2/call_routes/{call_route_id}/options/{id}`

#### CallRoutesUpdateAllowedCallerResultV2

| Field | Description |
| --- | --- |
| `id` | Unique identifier for this allowed caller |
| `name` | Label for whose number this is |
| `phone_number` | The number allowed to call this route, in international format |

Operations: update.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

#### CallRoutesUpdateOptionResultV2

| Field | Description |
| --- | --- |
| `digit` | The keypad digit a caller presses to choose this option |
| `id` | Unique identifier for this option |
| `path` | Who we page when a caller chooses this option |
| `prompt` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

Operations: update.

API path: `/v2/call_routes/{call_route_id}/options/{id}`

#### CallRoutesV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/v2/call_routes/{call_route_id}/allowed_callers/{id}`

#### CallSession

| Field | Description |
| --- | --- |
| `ended_at` | When the call session ended. |
| `id` | Unique identifier for this call session |
| `incident_id` | The incident this call session belongs to |
| `started_at` | When the call session started |

Operations: list.

API path: `/v2/call_sessions`

#### CallTranscriptEntry

| Field | Description |
| --- | --- |
| `content` | What was said |
| `id` | Unique identifier for this transcript entry |
| `medium` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | When the participant started speaking |

Operations: list.

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

Operations: create, list, load, update.

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

Operations: list.

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

Operations: create, list, load, update.

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

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/v1/custom_fields`

#### CustomFieldOption

| Field | Description |
| --- | --- |
| `custom_field_id` | ID of the custom field this option belongs to |
| `id` | Unique identifier for the custom field option |
| `sort_key` | Sort key used to order the custom field options correctly |
| `value` | Human readable name for the custom field option. |

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

API path: `/v2/escalation_path_templates`

#### EscalationsCheckEscalationPermissionsResultV2

| Field | Description |
| --- | --- |
| `response_options` | The response options available to each requested user, in the same order as the request. |
| `user_ids` | The IDs of the users to check response options for |

Operations: create.

API path: `/v2/escalations/{escalation_id}/actions/check_permissions`

#### EscalationsReassignEscalationResultV2

| Field | Description |
| --- | --- |
| `description` | Additional details about the new escalation. |
| `escalation_path_id` | ID of the escalation path to reassign to |
| `resolve_original` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | The title of the new escalation. |
| `user_ids` | IDs of users to reassign directly to |

Operations: create.

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

Operations: create, list, load, remove, update.

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

Operations: create.

API path: `/v3/follow_ups/{id}/actions/connect_external_issue`

#### FollowUpsCreateFromLinkResultV3

| Field | Description |
| --- | --- |
| `incident_id` | Unique identifier of the incident the follow-up belongs to |
| `url` | URL of the issue in the external provider |

Operations: create.

API path: `/v3/follow_ups/actions/create_from_link`

#### Identity

| Field | Description |
| --- | --- |
| `dashboard_url` | The dashboard URL for this organisation |
| `name` | The name assigned to the current API Key |
| `roles` | Which roles have been enabled for this key |
| `team_roles` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | Teams that this API key is scoped to. |

Operations: load.

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

Operations: create, list, load.

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

Operations: list.

API path: `/v2/incident_activity_log_entries`

#### IncidentAttachment

| Field | Description |
| --- | --- |
| `id` | Unique identifier of this incident membership |
| `incident_id` | ID of the incident to add an attachment to |
| `resource` |  |

Operations: create, list, remove.

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

Operations: create, list, load, remove, update.

API path: `/v3/incident_forms`

#### IncidentMembership

| Field | Description |
| --- | --- |
| `incident_id` | The incident to make the user a member of |
| `user_id` |  |

Operations: create.

API path: `/v1/incident_memberships`

#### IncidentParticipant

| Field | Description |
| --- | --- |
| `active` | Participants who are actively helping with the incident |
| `passive` | Participants who are just observing the incident |

Operations: load.

API path: `/v2/incident_participants`

#### IncidentParticipantWorkload

| Field | Description |
| --- | --- |
| `archived_at` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | The role they had in the incident |
| `user` |  |
| `workload` |  |

Operations: list.

API path: `/v2/incident_participant_workloads`

#### IncidentRelationship

| Field | Description |
| --- | --- |
| `id` | Unique identifier of this incident relationship |
| `incident` |  |

Operations: list.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, remove, update.

API path: `/v1/incident_statuses`

#### IncidentTeamMembership

| Field | Description |
| --- | --- |
| `incident_id` |  |
| `team_id` |  |

Operations: create.

API path: `/v1/incident_team_memberships`

#### IncidentTeamMembershipsV1

| Field | Description |
| --- | --- |
| `incident_id` | Revoke team access to this incident |
| `team_id` |  |

Operations: create.

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

Operations: create, list, load, remove, update.

API path: `/v1/incident_templates`

#### IncidentTemplatesValidateResultV1

| Field | Description |
| --- | --- |
| `expressions` | The expressions used by bindings in this template |
| `name` | The name of this incident template, for the user's reference |
| `template` | The values an incident template applies to the incidents it creates. |
| `warnings` | Anything suspect about this config that isn't severe enough to reject it. |

Operations: create.

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

Operations: create, list, update.

API path: `/v2/incident_timeline_items`

#### IncidentTimestamp

| Field | Description |
| --- | --- |
| `id` | Unique ID of this incident timestamp |
| `name` | Unique name of this timestamp |
| `rank` | Order in which this timestamp should be shown |

Operations: list, load.

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

Operations: list, load.

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

Operations: create, list.

API path: `/v2/incident_updates`

#### IpAllowlist

| Field | Description |
| --- | --- |
| `allowlist` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | Whether this IP allowlist is enabled or not |
| `updated_at` | The time this allowlist was last updated |
| `version` | The version of this IP allowlist |

Operations: load, update.

API path: `/v1/ip_allowlists`

#### IpRange

| Field | Description |
| --- | --- |
| `cidr` | The address in CIDR notation. |
| `description` | Which of our traffic reaches you from this address |

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/v1/maintenance_windows`

#### OnCallNotificationMethodPublicV2

| Field | Description |
| --- | --- |
| `address` | The address of this method (e.g. |
| `id` | Unique identifier for this notification method |
| `is_usable` | Whether this method is ready to receive notifications. |
| `method_type` | The high-level type of notification method. |
| `phone_details` |  |

Operations: list.

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

Operations: list.

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

Operations: create, list, load, remove, update.

API path: `/v2/pay_configs`

#### PayConfigsCreateOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: create.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigsCreateWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: create.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayConfigsListOneOffRulesResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: list.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules`

#### PayConfigsListWeeklyRulesResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: list.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules`

#### PayConfigsShowOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: load.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules/{id}`

#### PayConfigsShowWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: load.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules/{id}`

#### PayConfigsUpdateOneOffRuleResultV2

| Field | Description |
| --- | --- |
| `end_at` | When this rule stops applying |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `name` | Human readable name for this rule |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | When this rule starts applying |

Operations: update.

API path: `/v2/pay_configs/{pay_config_id}/one_off_rules/{id}`

#### PayConfigsUpdateWeeklyRuleResultV2

| Field | Description |
| --- | --- |
| `end_time` | Time of day this rule ends, in 24 hour format. |
| `id` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | Time of day this rule starts, in 24 hour format |
| `weekdays` | Days of the week this rule applies on |

Operations: update.

API path: `/v2/pay_configs/{pay_config_id}/weekly_rules/{id}`

#### PayConfigsV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: create, list, load, remove.

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

Operations: create.

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

Operations: create.

API path: `/v2/pay_reports/{id}/actions/unpublish`

#### PayReportsV2

| Field | Description |
| --- | --- |

Operations: load.

API path: `/v2/pay_reports/{id}/download`

#### PoliciesV2

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

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

Operations: create, list, load, update.

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

Operations: list, load.

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

Operations: create.

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

Operations: create.

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

Operations: list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create.

API path: `/v2/schedules/{id}/actions/preview_entries`

#### ScheduleEntry

| Field | Description |
| --- | --- |
| `pagination_meta` |  |
| `schedule_entries` | The schedule entries for a window of time, grouped by where they come from. |

Operations: load.

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

Operations: create, list, load.

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

Operations: create, list, load, update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load.

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

Operations: update.

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

Operations: create, list, load, remove, update.

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

Operations: create, list, load, update.

API path: `/v1/severities`

#### StatusPage

| Field | Description |
| --- | --- |
| `description` | The description of this status page |
| `id` | Unique ID of this status page |
| `name` | The title of this status page |
| `public_url` | The public URL of this status page |

Operations: list, load.

API path: `/v2/status_pages`

#### StatusPageComponent

| Field | Description |
| --- | --- |
| `description` | Optional short description of this component |
| `id` | Unique identifier for this component |
| `management_meta` |  |
| `name` | Human-readable name for the component |

Operations: create, list, load, remove, update.

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

Operations: load.

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

Operations: create, list, load, update.

API path: `/v2/status_page_incidents`

#### StatusPageIncidentUpdate

| Field | Description |
| --- | --- |
| `component_statuses` | An array of mappings from component ID to component status. |
| `incident_status` | Optional new status for this status page incident. |
| `message` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | ID of the status page incident |

Operations: create.

API path: `/v2/status_page_incident_updates`

#### StatusPageLinkedResponseIncidentV1

| Field | Description |
| --- | --- |
| `id` | ID of the Response incident |
| `linked_at` | When the Response incident was linked to the status page incident |

Operations: list.

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

Operations: create, list, load, update.

API path: `/v2/status_page_maintenances`

#### StatusPageMaintenanceUpdate

| Field | Description |
| --- | --- |
| `component_statuses` | An array of mappings from component ID to component status. |
| `maintenance_status` | Optional new status for this status page maintenance window. |
| `message` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | ID of the status page maintenance window |

Operations: create.

API path: `/v2/status_page_maintenance_updates`

#### StatusPageStructure

| Field | Description |
| --- | --- |
| `current_structure` |  |
| `display_uptime_mode` | How the page shows uptime against its components |
| `id` |  |
| `management_meta` |  |

Operations: load.

API path: `/v2/status_page_structures/{status_page_id}`

#### StatusPagesV2

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/v2/status_page_maintenances/{status_page_maintenance_id}`

#### Team

| Field | Description |
| --- | --- |
| `catalog_entry` |  |
| `id` | Unique ID of the team |
| `members` | Members of the team |
| `name` | Name of the team |

Operations: list, load.

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

Operations: update.

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

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

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
| `assignee_id` | `string` | ID of the user this action is assigned to |
| `completed_at` | `string` | When the action was completed |
| `created_at` | `string` | When the action was created |
| `creator` | `Object` |  |
| `description` | `string` | Description of the action |
| `external_issue_reference` | `Object` |  |
| `follow_up` | `boolean` | Whether an action is marked as follow-up |
| `id` | `string` | Unique identifier for the action |
| `incident_id` | `string` | Unique identifier of the incident the action belongs to |
| `status` | `string` | Status of the action |
| `updated_at` | `string` | When the action was last updated |

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
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Load

```ts
const alert = await client.Alert().load({ id: 'alert_id' })
```

#### Example: List

```ts
const alerts = await client.Alert().list({ page_size: 1 })
```

#### Example: Create

```ts
const alert = await client.Alert().create({
  id: 'example_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
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
| `array` | `boolean` | Whether this attribute is an array |
| `emoji` | `string` | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | The ID of this attribute |
| `name` | `string` | Unique name of this attribute |
| `required` | `boolean` | Whether this attribute is required. |
| `type` | `string` | Engine resource name for this attribute |

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
| `alert_group_id` | `string` | ID of the alert group this note is attached to. |
| `alert_id` | `string` | ID of the alert this note is attached to. |
| `content` | `string` | Markdown body of the note |
| `created_at` | `string` | When this note was first created |
| `creator` | `Object` |  |
| `id` | `string` | Unique identifier for the alert note |
| `images` | `Array` | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | When this note was last updated |

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
  images: [],
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
| `alert_sources` | `Array` | Which alert sources should this alert route match? |
| `channel_config` | `Array` | The channel configuration for this alert route |
| `condition_groups` | `Array` | What condition groups must be true for this alert route to fire? |
| `created_at` | `string` | The time of creation of this alert route |
| `enabled` | `boolean` | Whether this alert route is enabled or not |
| `escalation_config` | `Object` |  |
| `expressions` | `Array` | The expressions used in this template |
| `grouping_config` | `Object` |  |
| `id` | `string` | Unique identifier for this alert route config |
| `incident_config` | `Object` |  |
| `incident_template` | `Object` |  |
| `is_private` | `boolean` | Whether this alert route is private. |
| `message_config` | `Object` |  |
| `message_template` | `Object` |  |
| `name` | `string` | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `Array` | IDs of teams that own this alert route |
| `updated_at` | `string` | The time of last update of this alert route |
| `version` | `number` | The version of this alert route config |

#### Example: Load

```ts
const alert_route = await client.AlertRoute().load({ id: 'alert_route_id' })
```

#### Example: List

```ts
const alert_routes = await client.AlertRoute().list({ page_size: 1 })
```

#### Example: Create

```ts
const alert_route = await client.AlertRoute().create({
  alert_sources: [],
  channel_config: [],
  condition_groups: [],
  enabled: true,
  escalation_config: {},
  expressions: [],
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
| `alert_events_url` | `string` | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `boolean` | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `number` | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `Object` |  |
| `disabled` | `boolean` | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `Object` |  |
| `filter_condition_groups` | `Array` | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `Object` |  |
| `http_custom_options` | `Object` |  |
| `id` | `string` | The ID of this alert source |
| `jira_options` | `Object` |  |
| `name` | `string` | Unique name of the alert source |
| `owning_team_ids` | `Array` | IDs of teams that own this alert source |
| `rate_limit_sharding` | `Object` | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Type of alert source |
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
  azure_devops_options: {},
  email_options: {},
  heartbeat_options: {},
  http_custom_options: {},
  id: 'example_id',
  jira_options: {},
  name: 'example_name',
  rate_limit_sharding: {},
  source_type: 'example_source_type',
  template: {},
})
```


### AlertSourcesV2

Create an instance: `const alert_sources_v2 = client.AlertSourcesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `owning_team_ids` | `Array` | IDs of teams that own this alert source |
| `source_type` | `string` | Type of alert source |
| `template` | `Object` |  |

#### Example: Create

```ts
const alert_sources_v2 = await client.AlertSourcesV2().create({
  source_type: 'example_source_type',
  template: {},
})
```


### AlertTag

Create an instance: `const alert_tag = client.AlertTag()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the tag |
| `name` | `string` | The tag name |

#### Example: List

```ts
const alert_tags = await client.AlertTag().list()
```


### AlertsAddTagsResultV2

Create an instance: `const alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```ts
const alerts_add_tags_result_v2 = await client.AlertsAddTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### AlertsRemoveTagsResultV2

Create an instance: `const alerts_remove_tags_result_v2 = client.AlertsRemoveTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```ts
const alerts_remove_tags_result_v2 = await client.AlertsRemoveTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### AlertsSetTagsResultV2

Create an instance: `const alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert_group_ids` | `Array` | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Attribute values parsed from the alerts payload |
| `created_at` | `string` | When this entry was created |
| `deduplication_key` | `string` | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | The description of the alert |
| `id` | `string` | The ID of this alert |
| `resolved_at` | `string` | When this alert was resolved |
| `source_url` | `string` | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Statuses of an alert |
| `tags` | `Array` | Tags someone has applied to this alert |
| `title` | `string` | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | When this alert was last updated |

#### Example: Create

```ts
const alerts_set_tags_result_v2 = await client.AlertsSetTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### AlertsTransitionIncidentAlertResultV2

Create an instance: `const alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alert` | `Object` |  |
| `alert_id` | `string` | Alert to attach to the incident |
| `alert_route_id` | `string` | The ID of the alert route that created this incident alert |
| `id` | `string` | The ID of this alert |
| `incident` | `Object` | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Incident to attach the alert to |
| `re_relate` | `boolean` | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | What state to move the connection to |

#### Example: List

```ts
const alerts_transition_incident_alert_result_v2s = await client.AlertsTransitionIncidentAlertResultV2().list({ page_size: 1 })
```

#### Example: Create

```ts
const alerts_transition_incident_alert_result_v2 = await client.AlertsTransitionIncidentAlertResultV2().create({
  alert: {},
  alert_id: 'example_alert_id',
  id: 'example_id',
  incident: {},
  incident_id: 'example_incident_id',
  state: 'example_state',
})
```


### AnnouncementRule

Create an instance: `const announcement_rule = client.AnnouncementRule()`

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
| `conditions_no_longer_apply_behaviour` | `string` | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | When the rule was created |
| `id` | `string` | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `Array` | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Human readable name for the rule |
| `owning_team_ids` | `Array` | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `Array` | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `string` | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `string` | Where incident updates are shared once the incident is announced |
| `updated_at` | `string` | When the rule was last updated |

#### Example: Load

```ts
const announcement_rule = await client.AnnouncementRule().load({ id: 'announcement_rule_id' })
```

#### Example: List

```ts
const announcement_rules = await client.AnnouncementRule().list()
```

#### Example: Create

```ts
const announcement_rule = await client.AnnouncementRule().create({
  condition_groups: [],
  conditions_no_longer_apply_behaviour: 'example_conditions_no_longer_apply_behaviour',
  created_at: 'example_created_at',
  id: 'example_id',
  microsoft_teams_channel_ids: [],
  mode: 'example_mode',
  name: 'example_name',
  owning_team_ids: [],
  slack_channel_ids: [],
  update_sharing_mode: 'example_update_sharing_mode',
  updated_at: 'example_updated_at',
})
```


### AnnouncementTemplate

Create an instance: `const announcement_template = client.AnnouncementTemplate()`

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
| `id` | `string` | Unique identifier for this announcement template |
| `is_default` | `boolean` | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Name of this announcement template |
| `owning_team_ids` | `Array` | IDs of the teams that own this template |

#### Example: Load

```ts
const announcement_template = await client.AnnouncementTemplate().load({ id: 'announcement_template_id' })
```

#### Example: List

```ts
const announcement_templates = await client.AnnouncementTemplate().list()
```

#### Example: Create

```ts
const announcement_template = await client.AnnouncementTemplate().create({
  actions: [],
  fields: [],
  id: 'example_id',
  is_default: true,
  name: 'example_name',
  owning_team_ids: [],
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
| `comments` | `string` | Freeform notes about this API key |
| `created_at` | `string` | When the API key was created |
| `creator` | `Object` |  |
| `id` | `string` | Unique identifier for this API key |
| `last_used_at` | `string` | When the key was last used to authenticate a request |
| `name` | `string` | The name of the API key, for the user's reference |
| `role_names` | `Array` | Account-level roles to assign to the API key. |
| `roles` | `Array` | The account-level roles assigned to this API key |
| `team_ids` | `Array` | IDs of teams that this API key is scoped to |
| `team_role_names` | `Array` | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `Array` | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | When the current token for this API was last issued. |

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
  role_names: [],
  roles: [],
  team_ids: [],
  team_role_names: [],
  team_roles: [],
  token_last_issued_at: 'example_token_last_issued_at',
})
```


### CallRoute

Create an instance: `const call_route = client.CallRoute()`

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
| `country_code` | `string` | The country this route's number belongs to |
| `created_at` | `string` |  |
| `current_state` | `string` | Where this route is in provisioning. |
| `custom_language` | `string` | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Unique identifier for this call route |
| `name` | `string` | Name for this call route |
| `options` | `Array` | The phone-tree menu this route presents. |
| `path` | `Array` | Who we page when a call comes in. |
| `phone_number` | `string` | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` |  |
| `use_caller_allowlist` | `boolean` | Whether this route only answers calls from its allowed callers |

#### Example: Load

```ts
const call_route = await client.CallRoute().load({ id: 'call_route_id' })
```

#### Example: List

```ts
const call_routes = await client.CallRoute().list()
```


### CallRoutesCreateAllowedCallerResultV2

Create an instance: `const call_routes_create_allowed_caller_result_v2 = client.CallRoutesCreateAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number to allow, in international format |

#### Example: Create

```ts
const call_routes_create_allowed_caller_result_v2 = await client.CallRoutesCreateAllowedCallerResultV2().create({
  call_route_id: 'example_call_route_id',
  phone_number: 'example_phone_number',
})
```


### CallRoutesCreateOptionResultV2

Create an instance: `const call_routes_create_option_result_v2 = client.CallRoutesCreateOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `path` | `Array` | Who to page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Create

```ts
const call_routes_create_option_result_v2 = await client.CallRoutesCreateOptionResultV2().create({
  call_route_id: 'example_call_route_id',
  digit: 'example_digit',
  path: [],
  prompt: 'example_prompt',
})
```


### CallRoutesListAllowedCallersResultV2

Create an instance: `const call_routes_list_allowed_callers_result_v2 = client.CallRoutesListAllowedCallersResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for this allowed caller |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number allowed to call this route, in international format |

#### Example: List

```ts
const call_routes_list_allowed_callers_result_v2s = await client.CallRoutesListAllowedCallersResultV2().list({ call_route_id: "example" })
```


### CallRoutesListOptionsResultV2

Create an instance: `const call_routes_list_options_result_v2 = client.CallRoutesListOptionsResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `id` | `string` | Unique identifier for this option |
| `path` | `Array` | Who we page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: List

```ts
const call_routes_list_options_result_v2s = await client.CallRoutesListOptionsResultV2().list({ call_route_id: "example" })
```


### CallRoutesShowAllowedCallerResultV2

Create an instance: `const call_routes_show_allowed_caller_result_v2 = client.CallRoutesShowAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for this allowed caller |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number allowed to call this route, in international format |

#### Example: Load

```ts
const call_routes_show_allowed_caller_result_v2 = await client.CallRoutesShowAllowedCallerResultV2().load({ id: 'call_routes_show_allowed_caller_result_v2_id', call_route_id: 'call_route_id' })
```


### CallRoutesShowOptionResultV2

Create an instance: `const call_routes_show_option_result_v2 = client.CallRoutesShowOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `id` | `string` | Unique identifier for this option |
| `path` | `Array` | Who we page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

#### Example: Load

```ts
const call_routes_show_option_result_v2 = await client.CallRoutesShowOptionResultV2().load({ id: 'call_routes_show_option_result_v2_id', call_route_id: 'call_route_id' })
```


### CallRoutesUpdateAllowedCallerResultV2

Create an instance: `const call_routes_update_allowed_caller_result_v2 = client.CallRoutesUpdateAllowedCallerResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for this allowed caller |
| `name` | `string` | Label for whose number this is |
| `phone_number` | `string` | The number allowed to call this route, in international format |


### CallRoutesUpdateOptionResultV2

Create an instance: `const call_routes_update_option_result_v2 = client.CallRoutesUpdateOptionResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `digit` | `string` | The keypad digit a caller presses to choose this option |
| `id` | `string` | Unique identifier for this option |
| `path` | `Array` | Who we page when a caller chooses this option |
| `prompt` | `string` | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |


### CallRoutesV2

Create an instance: `const call_routes_v2 = client.CallRoutesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CallSession

Create an instance: `const call_session = client.CallSession()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ended_at` | `string` | When the call session ended. |
| `id` | `string` | Unique identifier for this call session |
| `incident_id` | `string` | The incident this call session belongs to |
| `started_at` | `string` | When the call session started |

#### Example: List

```ts
const call_sessions = await client.CallSession().list({ incident_id: "example" })
```


### CallTranscriptEntry

Create an instance: `const call_transcript_entry = client.CallTranscriptEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `string` | What was said |
| `id` | `string` | Unique identifier for this transcript entry |
| `medium` | `string` | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `string` | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `string` | When the participant started speaking |

#### Example: List

```ts
const call_transcript_entrys = await client.CallTranscriptEntry().list({ call_session_id: "example" })
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
| `aliases` | `Array` | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | When this entry was archived |
| `attribute_values` | `Object` | Values of this entry |
| `catalog_entry` | `Object` |  |
| `catalog_type` | `Object` |  |
| `catalog_type_id` | `string` | ID of this catalog type |
| `created_at` | `string` | When this entry was created |
| `external_id` | `string` | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | ID of this catalog entry |
| `name` | `string` | Name is the human readable name of this entry |
| `rank` | `number` | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `Array` | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | When this entry was last updated |

#### Example: Load

```ts
const catalog_entry = await client.CatalogEntry().load({ id: 'catalog_entry_id' })
```

#### Example: List

```ts
const catalog_entrys = await client.CatalogEntry().list({ catalog_type_id: "example" })
```

#### Example: Create

```ts
const catalog_entry = await client.CatalogEntry().create({
  attribute_values: {},
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
| `category` | `string` | Which category of resource |
| `description` | `string` | Human readable description for this resource |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `string` | Label for this catalog resource type |
| `type` | `string` | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `string` | Documentation for the literal string value of this resource |

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
| `annotations` | `Object` | Annotations that can track metadata about this type |
| `categories` | `Array` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | If populated, the integrations required for this type |
| `schema` | `Object` |  |
| `semantic_type` | `string` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

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
  annotations: {},
  categories: [],
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
| `annotations` | `Object` | Annotations that can track metadata about this type |
| `attributes` | `Array` |  |
| `categories` | `Array` | What categories is this type considered part of |
| `color` | `string` | Sets the display color of this type in the dashboard |
| `created_at` | `string` | When this type was created |
| `description` | `string` | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Sets the display icon of this type in the dashboard |
| `id` | `string` | ID of this catalog type |
| `is_editable` | `boolean` | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | If this type should be ranked |
| `registry_type` | `string` | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | If populated, the integrations required for this type |
| `schema` | `Object` |  |
| `semantic_type` | `string` | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | The url of the external repository where this type is managed |
| `type_name` | `string` | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | When this type was last updated |
| `use_name_as_identifier` | `boolean` | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `number` |  |

#### Example: Create

```ts
const catalog_type_schema = await client.CatalogTypeSchema().create({
  catalog_type_id: 'example_catalog_type_id',
  annotations: {},
  attributes: [],
  categories: [],
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
| `catalog_type_id` | `string` | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the custom field |
| `field_type` | `string` | Type of custom field |
| `filter_by` | `Object` |  |
| `fixed_filter` | `Object` |  |
| `group_by_catalog_attribute_id` | `string` | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | Which catalog attribute provides helptext for the options |
| `id` | `string` | Unique identifier for the custom field |
| `name` | `string` | Human readable name for the custom field |
| `options` | `Array` | What options are available for this custom field, if this field has options |
| `required` | `string` | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `string` | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `boolean` | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `boolean` | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `boolean` | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `boolean` | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `string` | When the action was last updated |

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
  options: [],
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
| `custom_field_id` | `string` | ID of the custom field this option belongs to |
| `id` | `string` | Unique identifier for the custom field option |
| `sort_key` | `number` | Sort key used to order the custom field options correctly |
| `value` | `string` | Human readable name for the custom field option. |

#### Example: Load

```ts
const custom_field_option = await client.CustomFieldOption().load({ id: 'custom_field_option_id' })
```

#### Example: List

```ts
const custom_field_options = await client.CustomFieldOption().list({ custom_field_id: "example" })
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
| `created_at` | `string` | When this escalation was created |
| `creator` | `Object` | The creator of this escalation. |
| `description` | `string` | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | Unique identifier of the escalation path that the escalation was created from |
| `events` | `Array` | Events which describe the history of this escalation. |
| `id` | `string` | Unique ID of the escalation |
| `idempotency_key` | `string` | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | ID of an incident to associate with this escalation. |
| `priority` | `Object` | The priority associated with this escalation. |
| `related_alerts` | `Array` | Alerts related to this escalation |
| `related_incidents` | `Array` | Incidents related to this escalation |
| `status` | `string` | Status of the escalation |
| `title` | `string` | The title of this escalation |
| `updated_at` | `string` | When this escalation was last updated |
| `user_ids` | `Array` | IDs of users to escalate directly to |

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
  description: 'example_description',
  events: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  priority: {},
  related_alerts: [],
  related_incidents: [],
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### EscalationPathTemplate

Create an instance: `const escalation_path_template = client.EscalationPathTemplate()`

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
| `description` | `string` | A description of what this template is for. |
| `expressions` | `Array` | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `boolean` | Whether a previous escalation path version uses this template. |
| `id` | `string` | Unique identifier for this template. |
| `name` | `string` | The name of this template. |
| `params` | `Array` | The parameters declared by this template. |
| `path` | `Array` | The nodes that form the levels and branches of this template. |
| `repeat_config` | `Object` |  |
| `working_hours` | `Array` | The working hours for this template. |

#### Example: Load

```ts
const escalation_path_template = await client.EscalationPathTemplate().load({ id: 'escalation_path_template_id' })
```

#### Example: List

```ts
const escalation_path_templates = await client.EscalationPathTemplate().list()
```

#### Example: Create

```ts
const escalation_path_template = await client.EscalationPathTemplate().create({
  expressions: [],
  has_historical_escalation_path_versions: true,
  id: 'example_id',
  name: 'example_name',
  params: [],
  path: [],
  repeat_config: {},
})
```


### EscalationsCheckEscalationPermissionsResultV2

Create an instance: `const escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2()`

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

```ts
const escalations_check_escalation_permissions_result_v2 = await client.EscalationsCheckEscalationPermissionsResultV2().create({
  escalation_id: 'example_escalation_id',
  response_options: [],
  user_ids: [],
})
```


### EscalationsReassignEscalationResultV2

Create an instance: `const escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Additional details about the new escalation. |
| `escalation_path_id` | `string` | ID of the escalation path to reassign to |
| `resolve_original` | `boolean` | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | The title of the new escalation. |
| `user_ids` | `Array` | IDs of users to reassign directly to |

#### Example: Create

```ts
const escalations_reassign_escalation_result_v2 = await client.EscalationsReassignEscalationResultV2().create({
  escalation_id: 'example_escalation_id',
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
| `assignee_id` | `string` | ID of the user this follow-up is assigned to |
| `assignee_team` | `Object` |  |
| `assignee_team_id` | `string` | ID of the team this follow-up is assigned to |
| `category` | `Object` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `Object` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `Object` |  |
| `external_issue_reference_id` | `string` | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | ID of the priority for this follow-up |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Labels associated with this follow-up |
| `priority` | `Object` |  |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |

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
  category: {},
  created_at: 'example_created_at',
  creator: {},
  external_issue_reference: {},
  id: 'example_id',
  incident_id: 'example_incident_id',
  labels: [],
  priority: {},
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```


### FollowUpsConnectExternalIssueResultV3

Create an instance: `const follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `assignee` | `Object` |  |
| `assignee_team` | `Object` |  |
| `category` | `Object` |  |
| `completed_at` | `string` | When the follow-up was completed |
| `created_at` | `string` | When the follow-up was created |
| `creator` | `Object` |  |
| `description` | `string` | Description of the follow-up |
| `external_issue_reference` | `Object` |  |
| `id` | `string` | Unique identifier for the follow-up |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Labels associated with this follow-up |
| `priority` | `Object` |  |
| `provider` | `string` | The issue tracker provider the issue belongs to |
| `status` | `string` | Status of the follow-up |
| `title` | `string` | Title of the follow-up |
| `updated_at` | `string` | When the follow-up was last updated |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```ts
const follow_ups_connect_external_issue_result_v3 = await client.FollowUpsConnectExternalIssueResultV3().create({
  follow_up_id: 'example_follow_up_id',
  assignee: {},
  assignee_team: {},
  category: {},
  created_at: 'example_created_at',
  creator: {},
  external_issue_reference: {},
  id: 'example_id',
  incident_id: 'example_incident_id',
  labels: [],
  priority: {},
  provider: 'example_provider',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```


### FollowUpsCreateFromLinkResultV3

Create an instance: `const follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | URL of the issue in the external provider |

#### Example: Create

```ts
const follow_ups_create_from_link_result_v3 = await client.FollowUpsCreateFromLinkResultV3().create({
  incident_id: 'example_incident_id',
  url: 'example_url',
})
```


### Identity

Create an instance: `const identity = client.Identity()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dashboard_url` | `string` | The dashboard URL for this organisation |
| `name` | `string` | The name assigned to the current API Key |
| `roles` | `Array` | Which roles have been enabled for this key |
| `team_roles` | `Array` | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `Array` | Teams that this API key is scoped to. |

#### Example: Load

```ts
const identity = await client.Identity().load()
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
| `call_url` | `string` | The call URL attached to this incident |
| `created_at` | `string` | When the incident was created |
| `creator` | `Object` |  |
| `custom_field_entries` | `Array` | Custom field entries for this incident |
| `debriefs` | `Array` | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `Array` | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `Object` |  |
| `has_debrief` | `boolean` | If this incident has a debrief attached |
| `id` | `string` | Unique identifier for the incident |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `Array` | A list of who is assigned to each role for this incident |
| `incident_status` | `Object` |  |
| `incident_status_id` | `string` | Incident status to assign to the incident |
| `incident_timestamp_values` | `Array` | Incident lifecycle events and when they occurred |
| `incident_type` | `Object` |  |
| `incident_type_id` | `string` | Incident type to create this incident as |
| `last_activity_at` | `string` | When the incident last recorded 'activity' |
| `mode` | `string` | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | URL to link to the Microsoft Teams channel |
| `name` | `string` | Explanation of the incident |
| `permalink` | `string` | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `Array` | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | The URL of the incident post-mortem document |
| `reference` | `string` | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `Object` |  |
| `severity` | `Object` |  |
| `severity_id` | `string` | Severity to create incident as |
| `slack_channel_id` | `string` | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | Name of the slack channel |
| `slack_channel_name_override` | `string` | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | URL to link to the slack channel |
| `slack_team_id` | `string` | ID of the Slack team / workspace. |
| `source_message_channel_id` | `string` | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | `string` | Timestamp of the source message, if this incident was created from one |
| `status` | `string` | Current status of the incident |
| `summary` | `string` | Detailed description of the incident |
| `team_ids` | `Array` | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `Array` | Incident lifecycle events and when they last occurred |
| `updated_at` | `string` | When the incident was last updated |
| `visibility` | `string` | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `number` | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `number` | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `number` | Amount of time spent on the incident in total |
| `workload_minutes_working` | `number` | Amount of time spent on the incident in working hours |

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
  custom_field_entries: [],
  external_issue_reference: {},
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_role_assignments: [],
  incident_status: {},
  incident_type: {},
  last_activity_at: 'example_last_activity_at',
  mode: 'example_mode',
  name: 'example_name',
  reference: 'example_reference',
  severity: {},
  slack_channel_id: 'example_slack_channel_id',
  slack_team_id: 'example_slack_team_id',
  status: 'example_status',
  team_ids: [],
  updated_at: 'example_updated_at',
  visibility: 'example_visibility',
})
```


### IncidentActivityLogEntry

Create an instance: `const incident_activity_log_entry = client.IncidentActivityLogEntry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content` | `Object` | Details of an activity log entry. |
| `created_at` | `string` | When we recorded the activity |
| `id` | `string` | Unique identifier of the activity log entry |
| `incident_id` | `string` | ID of the incident this happened on. |
| `occurred_at` | `string` | When the activity happened. |
| `title` | `string` | Human-readable summary of what happened |
| `type` | `string` | What kind of activity this is. |

#### Example: List

```ts
const incident_activity_log_entrys = await client.IncidentActivityLogEntry().list({ incident_id: "example" })
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
| `id` | `string` | Unique identifier of this incident membership |
| `incident_id` | `string` | ID of the incident to add an attachment to |
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


### IncidentForm

Create an instance: `const incident_form = client.IncidentForm()`

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
| `created_at` | `string` | When this incident form was created |
| `expressions` | `Array` | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Which form this is. |
| `id` | `string` | Unique identifier for this incident form |
| `incident_type_id` | `string` | The incident type this form belongs to. |
| `lifecycle_elements` | `Array` | Elements on this form, in display order. |
| `updated_at` | `string` | When this incident form was last updated |

#### Example: Load

```ts
const incident_form = await client.IncidentForm().load({ id: 'incident_form_id' })
```

#### Example: List

```ts
const incident_forms = await client.IncidentForm().list()
```

#### Example: Create

```ts
const incident_form = await client.IncidentForm().create({
  created_at: 'example_created_at',
  expressions: [],
  form_type: 'example_form_type',
  id: 'example_id',
  updated_at: 'example_updated_at',
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
| `incident_id` | `string` | The incident to make the user a member of |
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
| `active` | `Array` | Participants who are actively helping with the incident |
| `passive` | `Array` | Participants who are just observing the incident |

#### Example: Load

```ts
const incident_participant = await client.IncidentParticipant().load({ incident_id: 'incident_id' })
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
| `archived_at` | `string` | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | The role they had in the incident |
| `user` | `Object` |  |
| `workload` | `Object` |  |

#### Example: List

```ts
const incident_participant_workloads = await client.IncidentParticipantWorkload().list({ incident_id: "example" })
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
| `id` | `string` | Unique identifier of this incident relationship |
| `incident` | `Object` |  |

#### Example: List

```ts
const incident_relationships = await client.IncidentRelationship().list({ incident_id: "example" })
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
| `created_at` | `string` | When the role was created |
| `description` | `string` | Describes the purpose of the role |
| `id` | `string` | Unique identifier for the role |
| `instructions` | `string` | Provided to whoever is nominated for the role. |
| `name` | `string` | Human readable name of the incident role |
| `required` | `boolean` | DEPRECATED: this will always be false. |
| `role_type` | `string` | Type of incident role |
| `shortform` | `string` | Short human readable name for Slack. |
| `updated_at` | `string` | When the role was last updated |

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
  instructions: 'example_instructions',
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
| `category` | `string` | What category of status it is. |
| `created_at` | `string` |  |
| `description` | `string` | Rich text description of the incident status |
| `id` | `string` | Unique ID of this incident status |
| `name` | `string` | Unique name of this status |
| `rank` | `number` | Order of this incident status |
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


### IncidentTeamMembership

Create an instance: `const incident_team_membership = client.IncidentTeamMembership()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` |  |
| `team_id` | `string` |  |

#### Example: Create

```ts
const incident_team_membership = await client.IncidentTeamMembership().create({
  incident_id: 'example_incident_id',
  team_id: 'example_team_id',
})
```


### IncidentTeamMembershipsV1

Create an instance: `const incident_team_memberships_v1 = client.IncidentTeamMembershipsV1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `incident_id` | `string` | Revoke team access to this incident |
| `team_id` | `string` |  |

#### Example: Create

```ts
const incident_team_memberships_v1 = await client.IncidentTeamMembershipsV1().create({
  incident_id: 'example_incident_id',
  team_id: 'example_team_id',
})
```


### IncidentTemplate

Create an instance: `const incident_template = client.IncidentTemplate()`

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
| `created_at` | `string` | When this incident template was created |
| `expressions` | `Array` | The expressions used by bindings in this template |
| `id` | `string` | Unique identifier for this incident template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `Object` | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | When this incident template was last updated |

#### Example: Load

```ts
const incident_template = await client.IncidentTemplate().load({ id: 'incident_template_id' })
```

#### Example: List

```ts
const incident_templates = await client.IncidentTemplate().list()
```

#### Example: Create

```ts
const incident_template = await client.IncidentTemplate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  template: {},
  updated_at: 'example_updated_at',
})
```


### IncidentTemplatesValidateResultV1

Create an instance: `const incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expressions` | `Array` | The expressions used by bindings in this template |
| `name` | `string` | The name of this incident template, for the user's reference |
| `template` | `Object` | The values an incident template applies to the incidents it creates. |
| `warnings` | `Array` | Anything suspect about this config that isn't severe enough to reject it. |

#### Example: Create

```ts
const incident_templates_validate_result_v1 = await client.IncidentTemplatesValidateResultV1().create({
  name: 'example_name',
  template: {},
  warnings: [],
})
```


### IncidentTimelineItem

Create an instance: `const incident_timeline_item = client.IncidentTimelineItem()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activity_log_id` | `string` | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | When this item was added to the timeline |
| `creator` | `Object` |  |
| `description` | `string` | Description of the timeline item, in markdown |
| `id` | `string` | Unique identifier of the timeline item |
| `idempotency_key` | `string` | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `string` | Incident to add this item to |
| `timestamp` | `string` | When the thing this item describes happened. |
| `title` | `string` | Title of the timeline item |
| `updated_at` | `string` | When this item was last edited |

#### Example: List

```ts
const incident_timeline_items = await client.IncidentTimelineItem().list({ incident_id: "example" })
```

#### Example: Create

```ts
const incident_timeline_item = await client.IncidentTimelineItem().create({
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_id: 'example_incident_id',
  timestamp: 'example_timestamp',
  title: 'example_title',
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
| `id` | `string` | Unique ID of this incident timestamp |
| `name` | `string` | Unique name of this timestamp |
| `rank` | `number` | Order in which this timestamp should be shown |

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
| `create_in_triage` | `string` | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | When this resource was created |
| `description` | `string` | What is this incident type for? |
| `id` | `string` | Unique identifier for this Incident Type |
| `is_default` | `boolean` | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | The name of this Incident Type |
| `owning_team_ids` | `Array` | IDs of the teams that own this incident type |
| `private_incidents_only` | `boolean` | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | When this resource was last updated |

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
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When the update was created |
| `id` | `string` | Unique identifier for this incident update |
| `idempotency_key` | `string` | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `string` | The incident you want to update |
| `merged_into_incident_id` | `string` | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `string` | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `Object` |  |
| `new_severity` | `Object` |  |
| `to_incident_status_id` | `string` | Move the incident to this status |
| `to_severity_id` | `string` | Move the incident to this severity |
| `updater` | `Object` |  |

#### Example: List

```ts
const incident_updates = await client.IncidentUpdate().list()
```

#### Example: Create

```ts
const incident_update = await client.IncidentUpdate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_id: 'example_incident_id',
  new_incident_status: {},
  new_severity: {},
  updater: {},
})
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
| `allowlist` | `Array` | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `boolean` | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | The time this allowlist was last updated |
| `version` | `number` | The version of this IP allowlist |

#### Example: Load

```ts
const ip_allowlist = await client.IpAllowlist().load()
```


### IpRange

Create an instance: `const ip_range = client.IpRange()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `string` | The address in CIDR notation. |
| `description` | `string` | Which of our traffic reaches you from this address |

#### Example: List

```ts
const ip_ranges = await client.IpRange().list()
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
| `alert_condition_groups` | `Array` | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | When this maintenance window was archived, if it has been |
| `created_at` | `string` | When this maintenance window was created |
| `end_at` | `string` | When the maintenance window ends |
| `escalation_targets` | `Array` | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Unique identifier for this maintenance window |
| `incident_id` | `string` | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `Object` |  |
| `name` | `string` | Human readable name for the maintenance window |
| `notification_message` | `string` | Custom message included in notifications about this maintenance window |
| `notify_channels` | `Array` | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `number` | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `number` | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `Array` | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `boolean` | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `boolean` | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `boolean` | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `string` | When the maintenance window starts |
| `updated_at` | `string` | When this maintenance window was last updated |

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
  alert_condition_groups: [],
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


### OnCallNotificationMethodPublicV2

Create an instance: `const on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` | The address of this method (e.g. |
| `id` | `string` | Unique identifier for this notification method |
| `is_usable` | `boolean` | Whether this method is ready to receive notifications. |
| `method_type` | `string` | The high-level type of notification method. |
| `phone_details` | `Object` |  |

#### Example: List

```ts
const on_call_notification_method_public_v2s = await client.OnCallNotificationMethodPublicV2().list({ user_id: "example" })
```


### OnCallNotificationRulePublicV2

Create an instance: `const on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `app` | `Object` |  |
| `delay_seconds` | `number` | Delay in seconds before this rule activates. |
| `id` | `string` | Unique identifier for this notification rule |
| `method_target` | `Object` |  |
| `method_type` | `string` | The high-level type of notification method. |
| `phone` | `Object` |  |
| `rule_type` | `string` | The urgency level this rule applies to |

#### Example: List

```ts
const on_call_notification_rule_public_v2s = await client.OnCallNotificationRulePublicV2().list({ user_id: "example" })
```


### PayConfig

Create an instance: `const pay_config = client.PayConfig()`

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
| `base_rate_cents` | `number` | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` |  |
| `currency` | `string` | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Unique identifier for this pay config |
| `name` | `string` | Human readable name for this pay config |
| `one_off_rules` | `Array` | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | When a published report first priced against this config. |
| `rate_time_unit` | `string` | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` |  |
| `weekly_rules` | `Array` | Rules that apply every week, by day of week and time of day, in evaluation order |

#### Example: Load

```ts
const pay_config = await client.PayConfig().load({ id: 'pay_config_id' })
```

#### Example: List

```ts
const pay_configs = await client.PayConfig().list()
```

#### Example: Create

```ts
const pay_config = await client.PayConfig().create({
  base_rate_cents: 1,
  created_at: 'example_created_at',
  currency: 'example_currency',
  id: 'example_id',
  name: 'example_name',
  one_off_rules: [],
  rate_time_unit: 'example_rate_time_unit',
  timezone: 'example_timezone',
  updated_at: 'example_updated_at',
  weekly_rules: [],
})
```


### PayConfigsCreateOneOffRuleResultV2

Create an instance: `const pay_configs_create_one_off_rule_result_v2 = client.PayConfigsCreateOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `string` | When this rule stops applying |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |

#### Example: Create

```ts
const pay_configs_create_one_off_rule_result_v2 = await client.PayConfigsCreateOneOffRuleResultV2().create({
  pay_config_id: 'example_pay_config_id',
  end_at: 'example_end_at',
  name: 'example_name',
  rate_cents: 1,
  start_at: 'example_start_at',
})
```


### PayConfigsCreateWeeklyRuleResultV2

Create an instance: `const pay_configs_create_weekly_rule_result_v2 = client.PayConfigsCreateWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Days of the week this rule applies on |

#### Example: Create

```ts
const pay_configs_create_weekly_rule_result_v2 = await client.PayConfigsCreateWeeklyRuleResultV2().create({
  pay_config_id: 'example_pay_config_id',
  end_time: 'example_end_time',
  rate_cents: 1,
  start_time: 'example_start_time',
  weekdays: [],
})
```


### PayConfigsListOneOffRulesResultV2

Create an instance: `const pay_configs_list_one_off_rules_result_v2 = client.PayConfigsListOneOffRulesResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `string` | When this rule stops applying |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |

#### Example: List

```ts
const pay_configs_list_one_off_rules_result_v2s = await client.PayConfigsListOneOffRulesResultV2().list({ pay_config_id: "example" })
```


### PayConfigsListWeeklyRulesResultV2

Create an instance: `const pay_configs_list_weekly_rules_result_v2 = client.PayConfigsListWeeklyRulesResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Days of the week this rule applies on |

#### Example: List

```ts
const pay_configs_list_weekly_rules_result_v2s = await client.PayConfigsListWeeklyRulesResultV2().list({ pay_config_id: "example" })
```


### PayConfigsShowOneOffRuleResultV2

Create an instance: `const pay_configs_show_one_off_rule_result_v2 = client.PayConfigsShowOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `string` | When this rule stops applying |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |

#### Example: Load

```ts
const pay_configs_show_one_off_rule_result_v2 = await client.PayConfigsShowOneOffRuleResultV2().load({ id: 'pay_configs_show_one_off_rule_result_v2_id', pay_config_id: 'pay_config_id' })
```


### PayConfigsShowWeeklyRuleResultV2

Create an instance: `const pay_configs_show_weekly_rule_result_v2 = client.PayConfigsShowWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Days of the week this rule applies on |

#### Example: Load

```ts
const pay_configs_show_weekly_rule_result_v2 = await client.PayConfigsShowWeeklyRuleResultV2().load({ id: 'pay_configs_show_weekly_rule_result_v2_id', pay_config_id: 'pay_config_id' })
```


### PayConfigsUpdateOneOffRuleResultV2

Create an instance: `const pay_configs_update_one_off_rule_result_v2 = client.PayConfigsUpdateOneOffRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_at` | `string` | When this rule stops applying |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Human readable name for this rule |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | When this rule starts applying |


### PayConfigsUpdateWeeklyRuleResultV2

Create an instance: `const pay_configs_update_weekly_rule_result_v2 = client.PayConfigsUpdateWeeklyRuleResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `end_time` | `string` | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Days of the week this rule applies on |


### PayConfigsV2

Create an instance: `const pay_configs_v2 = client.PayConfigsV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### PayReport

Create an instance: `const pay_report = client.PayReport()`

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
| `created_at` | `string` | When this report was created |
| `creator` | `Object` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `Object` |  |
| `pay_config_id` | `string` | The pay config to price every shift with. |
| `published_at` | `string` | When this report was published. |
| `rotation_filters` | `Array` | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Load

```ts
const pay_report = await client.PayReport().load({ id: 'pay_report_id' })
```

#### Example: List

```ts
const pay_reports = await client.PayReport().list()
```

#### Example: Create

```ts
const pay_report = await client.PayReport().create({
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  pay_config_expression: {},
  schedule_ids: [],
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  updated_at: 'example_updated_at',
})
```


### PayReportsPublishResultV2

Create an instance: `const pay_reports_publish_result_v2 = client.PayReportsPublishResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cc_emails` | `Array` | Email addresses to send a copy of the report to |
| `created_at` | `string` | When this report was created |
| `creator` | `Object` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `send_user_breakdowns` | `string` | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```ts
const pay_reports_publish_result_v2 = await client.PayReportsPublishResultV2().create({
  pay_report_id: 'example_pay_report_id',
  cc_emails: [],
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  schedule_ids: [],
  send_user_breakdowns: 'example_send_user_breakdowns',
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  updated_at: 'example_updated_at',
})
```


### PayReportsUnpublishResultV2

Create an instance: `const pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this report was created |
| `creator` | `Object` |  |
| `end_date` | `string` | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | Why a report could not be generated |
| `error_message` | `string` | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Unique identifier for this pay report |
| `name` | `string` | Human readable name for this report |
| `overlapping_shifts` | `string` | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | When this report was published. |
| `schedule_ids` | `Array` | The schedules this report covers |
| `start_date` | `string` | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | How far a report has got through being generated |
| `total_duration_seconds` | `number` | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Why this report is being unpublished |
| `updated_at` | `string` | When this report was last updated |

#### Example: Create

```ts
const pay_reports_unpublish_result_v2 = await client.PayReportsUnpublishResultV2().create({
  pay_report_id: 'example_pay_report_id',
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  schedule_ids: [],
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  unpublish_reason: 'example_unpublish_reason',
  updated_at: 'example_updated_at',
})
```


### PayReportsV2

Create an instance: `const pay_reports_v2 = client.PayReportsV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const pay_reports_v2 = await client.PayReportsV2().load({ pay_report_id: 'pay_report_id' })
```


### PoliciesV2

Create an instance: `const policies_v2 = client.PoliciesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Policy

Create an instance: `const policy = client.Policy()`

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
| `assignment_rules` | `Object` |  |
| `conditions` | `Array` | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` |  |
| `debrief` | `Object` | Set when policy_type is debrief. |
| `description` | `string` | Human readable description of the policy |
| `expressions` | `Array` | The expressions relating to this policy |
| `follow_up` | `Object` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the policy |
| `name` | `string` | Human readable name of the policy |
| `on_call_readiness` | `Object` | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Type of the policy, specifying what this applies to |
| `post_mortem` | `Object` | Set when policy_type is post_mortem. |
| `schedule` | `Object` | Detects gaps in on-call coverage. |
| `status` | `string` | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const policy = await client.Policy().load({ id: 'policy_id' })
```

#### Example: List

```ts
const policys = await client.Policy().list()
```

#### Example: Create

```ts
const policy = await client.Policy().create({
  assignment_rules: {},
  conditions: [],
  created_at: 'example_created_at',
  debrief: {},
  follow_up: {},
  id: 'example_id',
  name: 'example_name',
  policy_type: 'example_policy_type',
  post_mortem: {},
  schedule: {},
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```


### PolicyFinding

Create an instance: `const policy_finding = client.PolicyFinding()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `Object` | Set when policy_type is debrief. |
| `dismissal` | `Object` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `Object` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Object` | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `Object` | Set when policy_type is vacation_conflict. |

#### Example: Load

```ts
const policy_finding = await client.PolicyFinding().load({ id: 'policy_finding_id' })
```

#### Example: List

```ts
const policy_findings = await client.PolicyFinding().list()
```


### PolicyFindingsDismissResultV2

Create an instance: `const policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `Object` | Set when policy_type is debrief. |
| `dismissal` | `Object` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `Object` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Set when policy_type is post_mortem. |
| `reason` | `string` | Why this finding is being dismissed |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Object` | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `Object` | Set when policy_type is vacation_conflict. |

#### Example: Create

```ts
const policy_findings_dismiss_result_v2 = await client.PolicyFindingsDismissResultV2().create({
  policy_finding_id: 'example_policy_finding_id',
  created_at: 'example_created_at',
  debrief: {},
  dismissal: {},
  follow_up: {},
  id: 'example_id',
  last_checked_at: 'example_last_checked_at',
  on_call_readiness: {},
  policy_id: 'example_policy_id',
  policy_type: 'example_policy_type',
  post_mortem: {},
  reason: 'example_reason',
  responsible_users: [],
  schedule: {},
  shift_conflict: {},
  state: 'example_state',
  updated_at: 'example_updated_at',
  vacation_conflict: {},
})
```


### PolicyFindingsRestoreResultV2

Create an instance: `const policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `days` | `number` | Days outside the policy's due date |
| `debrief` | `Object` | Set when policy_type is debrief. |
| `dismissal` | `Object` |  |
| `due_at` | `string` | When this finding becomes overdue |
| `follow_up` | `Object` | Set when policy_type is follow_up. |
| `id` | `string` | Unique ID of the finding |
| `last_checked_at` | `string` | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | The policy this finding was raised against |
| `policy_type` | `string` | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Who is expected to resolve this finding |
| `schedule` | `Object` | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Set when policy_type is shift_conflict. |
| `state` | `string` | Where this finding is in its lifecycle |
| `updated_at` | `string` |  |
| `vacation_conflict` | `Object` | Set when policy_type is vacation_conflict. |

#### Example: Create

```ts
const policy_findings_restore_result_v2 = await client.PolicyFindingsRestoreResultV2().create({
  policy_finding_id: 'example_policy_finding_id',
  created_at: 'example_created_at',
  debrief: {},
  dismissal: {},
  follow_up: {},
  id: 'example_id',
  last_checked_at: 'example_last_checked_at',
  on_call_readiness: {},
  policy_id: 'example_policy_id',
  policy_type: 'example_policy_type',
  post_mortem: {},
  responsible_users: [],
  schedule: {},
  shift_conflict: {},
  state: 'example_state',
  updated_at: 'example_updated_at',
  vacation_conflict: {},
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
| `created_at` | `string` | Timestamp for when the document was created |
| `document_url` | `string` | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `Array` | The list of users who have edited this post-mortem document |
| `exported_urls` | `Array` | URLs of any external locations this document has been exported to |
| `id` | `string` | Unique identifier for the post-mortem document |
| `incident_id` | `string` | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | The current status of this post-mortem document |
| `title` | `string` | The display title of the post-mortem document |
| `type` | `string` | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Timestamp for when the document was last updated |

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
| `annotations` | `Object` | Annotations that track metadata about this resource |
| `config` | `Object` |  |
| `created_at` | `string` |  |
| `current_shifts` | `Array` | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `Object` |  |
| `id` | `string` | Unique internal ID of the schedule |
| `name` | `string` | Human readable name synced from external provider |
| `next_shifts` | `Array` | The shifts after the next changeover. |
| `permalink` | `string` | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `Array` | IDs of teams that own this schedule |
| `timezone` | `string` | Timezone of the schedule, as interpreted at the point of generating the report |
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
  annotations: {},
  config: {},
  created_at: 'example_created_at',
  holidays_public_config: {},
  id: 'example_id',
  name: 'example_name',
  permalink: 'example_permalink',
  team_ids: [],
  timezone: 'example_timezone',
  updated_at: 'example_updated_at',
})
```


### ScheduleEntriesListPayloadV2

Create an instance: `const schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `entry_window_end` | `string` | The end of the window to preview entries for. |
| `entry_window_start` | `string` | The start of the window to preview entries for. |
| `final` | `Array` | The effective schedule after overrides have been merged in |
| `overrides` | `Array` | Overrides that apply within the requested window |
| `schedule` | `Object` |  |
| `scheduled` | `Array` | Entries from the schedule's rotation rules, before overrides are applied |

#### Example: Create

```ts
const schedule_entries_list_payload_v2 = await client.ScheduleEntriesListPayloadV2().create({
  schedule_id: 'example_schedule_id',
  final: [],
  overrides: [],
  schedule: {},
  scheduled: [],
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
| `schedule_entries` | `Object` | The schedule entries for a window of time, grouped by where they come from. |

#### Example: Load

```ts
const schedule_entry = await client.ScheduleEntry().load({ schedule_id: 'schedule_id' })
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
| `created_at` | `string` | When this schedule replica was first created |
| `id` | `string` | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `number` | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `Array` | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | When this schedule replica was last updated |
| `user_statuses` | `Array` | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

#### Example: Load

```ts
const schedule_replica = await client.ScheduleReplica().load({ id: 'schedule_replica_id', schedule_id: 'schedule_id' })
```

#### Example: List

```ts
const schedule_replicas = await client.ScheduleReplica().list({ id: "example" })
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
  sources: [],
  updated_at: 'example_updated_at',
  user_statuses: [],
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
| `annotations` | `Object` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `Array` | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | The schedule this rule belongs to |
| `schedule_sync_target` | `Object` | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | The sync target ID this rule links to |
| `sync_type` | `string` | Which schedule members sync to the user group |
| `updated_at` | `string` |  |

#### Example: Load

```ts
const schedule_sync_rule = await client.ScheduleSyncRule().load({ id: 'schedule_sync_rule_id', schedule_id: 'schedule_id' })
```

#### Example: List

```ts
const schedule_sync_rules = await client.ScheduleSyncRule().list({ id: "example" })
```

#### Example: Create

```ts
const schedule_sync_rule = await client.ScheduleSyncRule().create({
  id: 'example_id',
  created_at: 'example_created_at',
  permanent_member_user_ids: [],
  schedule_id: 'example_schedule_id',
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
| `add_bot_to_group` | `boolean` | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `Object` | Annotations that track metadata about this resource |
| `created_at` | `string` |  |
| `id` | `string` | Unique identifier of the sync target |
| `linked_schedules` | `Array` | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `Object` |  |
| `slack_team_id` | `string` | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `string` | Slack ID of the user group whose membership is kept in sync. |
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
  linked_schedules: [],
  new_slack_user_group: {},
  slack_team_id: 'example_slack_team_id',
  slack_user_group_id: 'example_slack_user_group_id',
  updated_at: 'example_updated_at',
})
```


### SchedulesShowOverrideResultV2

Create an instance: `const schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2()`

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
| `end_at` | `string` | End of the override |
| `id` | `string` | Unique internal ID of the schedule override |
| `layer_id` | `string` | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | The schedule that this override applies to |
| `start_at` | `string` | Start of the override |
| `updated_at` | `string` |  |
| `user` | `Object` |  |

#### Example: Load

```ts
const schedules_show_override_result_v2 = await client.SchedulesShowOverrideResultV2().load({ id: 'schedules_show_override_result_v2_id' })
```

#### Example: List

```ts
const schedules_show_override_result_v2s = await client.SchedulesShowOverrideResultV2().list({ schedule_id: "example" })
```

#### Example: Create

```ts
const schedules_show_override_result_v2 = await client.SchedulesShowOverrideResultV2().create({
  created_at: 'example_created_at',
  end_at: 'example_end_at',
  id: 'example_id',
  layer_id: 'example_layer_id',
  rotation_id: 'example_rotation_id',
  schedule_id: 'example_schedule_id',
  start_at: 'example_start_at',
  updated_at: 'example_updated_at',
  user: {},
})
```


### SchedulesUpdateOverrideResultV2

Create an instance: `const schedules_update_override_result_v2 = client.SchedulesUpdateOverrideResultV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

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
| `user` | `Object` |  |


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
| `description` | `string` | Optional description of what this secret is for |
| `id` | `string` | Unique identifier for this secret |
| `last_four_chars` | `string` | The last four characters of the current value, for masked display. |
| `name` | `string` | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `Array` | IDs of the teams that own this secret. |
| `secret` | `Object` | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` |  |
| `value` | `string` | The secret's plaintext value. |
| `version` | `number` | The current version number, incremented on each rotation |
| `versions` | `Array` | The secret's versions, newest first |

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
  version: 1,
  versions: [],
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
| `created_at` | `string` | When the action was created |
| `description` | `string` | Description of the severity |
| `id` | `string` | Unique identifier of the severity |
| `name` | `string` | Human readable name of the severity |
| `rank` | `number` | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | When the action was last updated |

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
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description of this status page |
| `id` | `string` | Unique ID of this status page |
| `name` | `string` | The title of this status page |
| `public_url` | `string` | The public URL of this status page |

#### Example: Load

```ts
const status_page = await client.StatusPage().load({ id: 'status_page_id' })
```

#### Example: List

```ts
const status_pages = await client.StatusPage().list()
```


### StatusPageComponent

Create an instance: `const status_page_component = client.StatusPageComponent()`

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
| `description` | `string` | Optional short description of this component |
| `id` | `string` | Unique identifier for this component |
| `management_meta` | `Object` |  |
| `name` | `string` | Human-readable name for the component |

#### Example: Load

```ts
const status_page_component = await client.StatusPageComponent().load({ id: 'status_page_component_id' })
```

#### Example: List

```ts
const status_page_components = await client.StatusPageComponent().list()
```

#### Example: Create

```ts
const status_page_component = await client.StatusPageComponent().create({
  id: 'example_id',
  management_meta: {},
  name: 'example_name',
})
```


### StatusPageComponentAvailabilityV2

Create an instance: `const status_page_component_availability_v2 = client.StatusPageComponentAvailabilityV2()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

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

```ts
const status_page_component_availability_v2 = await client.StatusPageComponentAvailabilityV2().load({ component_id: 'component_id', status_page_id: 'status_page_id', end_at: 'end_at', start_at: 'start_at' })
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
| `component_impacts` | `Array` | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `Array` | An array of mappings from component ID to current component status |
| `id` | `string` | A unique ID for this status page incident |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Current status for this incident |
| `message` | `string` | Markdown initial update on this status page incident |
| `name` | `string` | A title for the incident |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | When this status page incident was published to the status page |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `Array` | A list of updates posted to this status page incident |

#### Example: Load

```ts
const status_page_incident = await client.StatusPageIncident().load({ id: 'status_page_incident_id' })
```

#### Example: List

```ts
const status_page_incidents = await client.StatusPageIncident().list({ status_page_id: "example" })
```

#### Example: Create

```ts
const status_page_incident = await client.StatusPageIncident().create({
  component_impacts: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_status: 'example_incident_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscribers: true,
  published_at: 'example_published_at',
  status_page_id: 'example_status_page_id',
  updates: [],
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
| `component_statuses` | `Array` | An array of mappings from component ID to component status. |
| `incident_status` | `string` | Optional new status for this status page incident. |
| `message` | `string` | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | ID of the status page incident |

#### Example: Create

```ts
const status_page_incident_update = await client.StatusPageIncidentUpdate().create({
  message: 'example_message',
  notify_subscribers: true,
  status_page_incident_id: 'example_status_page_incident_id',
})
```


### StatusPageLinkedResponseIncidentV1

Create an instance: `const status_page_linked_response_incident_v1 = client.StatusPageLinkedResponseIncidentV1()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the Response incident |
| `linked_at` | `string` | When the Response incident was linked to the status page incident |

#### Example: List

```ts
const status_page_linked_response_incident_v1s = await client.StatusPageLinkedResponseIncidentV1().list({ incident_id: "example", status_page_id: "example" })
```


### StatusPageMaintenance

Create an instance: `const status_page_maintenance = client.StatusPageMaintenance()`

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
| `affected_component_ids` | `Array` | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `boolean` | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `Array` | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | The time the maintenance window ends |
| `id` | `string` | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Current status for this maintenance window |
| `message` | `string` | Markdown initial update on this status page maintenance window |
| `name` | `string` | A title for the maintenance window |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | When this status page maintenance window was published to the status page |
| `start_at` | `string` | The time the maintenance window starts |
| `status_page_id` | `string` | The ID of the corresponding status page |
| `updates` | `Array` | A list of updates posted to this status page maintenance window |

#### Example: Load

```ts
const status_page_maintenance = await client.StatusPageMaintenance().load({ id: 'status_page_maintenance_id' })
```

#### Example: List

```ts
const status_page_maintenances = await client.StatusPageMaintenance().list({ status_page_id: "example" })
```

#### Example: Create

```ts
const status_page_maintenance = await client.StatusPageMaintenance().create({
  affected_component_ids: [],
  automate_maintenance_status: true,
  component_maintenance_periods: [],
  end_at: 'example_end_at',
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  maintenance_status: 'example_maintenance_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscribers: true,
  published_at: 'example_published_at',
  start_at: 'example_start_at',
  status_page_id: 'example_status_page_id',
  updates: [],
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
| `component_statuses` | `Array` | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | Optional new status for this status page maintenance window. |
| `message` | `string` | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `boolean` | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | ID of the status page maintenance window |

#### Example: Create

```ts
const status_page_maintenance_update = await client.StatusPageMaintenanceUpdate().create({
  message: 'example_message',
  notify_subscribers: true,
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
| `current_structure` | `Object` |  |
| `display_uptime_mode` | `string` | How the page shows uptime against its components |
| `id` | `string` |  |
| `management_meta` | `Object` |  |

#### Example: Load

```ts
const status_page_structure = await client.StatusPageStructure().load({ id: 'status_page_structure_id' })
```


### StatusPagesV2

Create an instance: `const status_pages_v2 = client.StatusPagesV2()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


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
| `id` | `string` | Unique ID of the team |
| `members` | `Array` | Members of the team |
| `name` | `string` | Name of the team |

#### Example: Load

```ts
const team = await client.Team().load({ id: 'team_id' })
```

#### Example: List

```ts
const teams = await client.Team().list()
```


### TelemetryDataSourceV2

Create an instance: `const telemetry_data_source_v2 = client.TelemetryDataSourceV2()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | When this data source was created |
| `datadog_config` | `Object` | Datadog-specific credential updates |
| `enabled` | `boolean` | Whether this data source is enabled |
| `grafana_config` | `Object` | Grafana-specific credential and endpoint updates |
| `id` | `string` | Unique identifier for this data source |
| `name` | `string` | Human-readable name of the data source |
| `provider` | `string` | Provider that hosts this data source |
| `source_type` | `string` | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `string` | When this data source was last updated |
| `version` | `string` | Upstream tool version captured at probe time (e.g. |


### User

Create an instance: `const user = client.User()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_role` | `Object` |  |
| `custom_roles` | `Array` |  |
| `email` | `string` | Email address of the user. |
| `id` | `string` | Unique identifier of the user |
| `is_active` | `boolean` | Whether the user is active. |
| `name` | `string` | Name of the user |
| `role` | `string` | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `Object` |  |
| `slack_user_id` | `string` | Slack ID of the user |

#### Example: Load

```ts
const user = await client.User().load({ id: 'user_id' })
```

#### Example: List

```ts
const users = await client.User().list()
```

#### Example: Create

```ts
const user = await client.User().create({
  id: 'example_id',
  base_role: {},
  custom_roles: [],
  is_active: true,
  name: 'example_name',
  role: 'example_role',
  seats: {},
})
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
| `annotations` | `Object` | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `Array` | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `boolean` | Whether to continue executing the workflow if a step fails |
| `delay` | `Object` |  |
| `expressions` | `Array` | The expressions to use in the workflow |
| `folder` | `string` | Folder to display the workflow in |
| `form_fields` | `Array` | User-configured form fields available in the workflow scope. |
| `id` | `string` | Unique identifier for the workflow |
| `include_private_escalations` | `boolean` | Whether to include private escalations |
| `include_private_incidents` | `boolean` | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `Object` |  |
| `name` | `string` | Name provided by the user when creating the workflow |
| `once_for` | `Array` | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `Array` | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `Array` | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Which incidents should the workflow be applied to? |
| `shortform` | `string` | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `boolean` | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | What state this workflow is in |
| `steps` | `Array` | Steps that are executed as part of the workflow |
| `trigger` | `string` | Trigger to set on the workflow |
| `version` | `number` | Revision of the workflow, uniquely identifying it's version |
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
  condition_groups: [],
  continue_on_step_error: true,
  delay: {},
  expressions: [],
  id: 'example_id',
  management_meta: {},
  name: 'example_name',
  once_for: [],
  runs_on_incident_modes: [],
  runs_on_incidents: 'example_runs_on_incidents',
  steps: [],
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
| `cancelled_at` | `string` | If the run was cancelled, this is when |
| `created_at` | `string` | When the resource was created |
| `enqueued_at` | `string` | When the run was enqueued for execution |
| `error` | `string` | Error produced by the workflow, if it failed |
| `id` | `string` | Unique identifier for the workflow run |
| `incident_id` | `string` | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `string` | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `Array` | Status of each step as it is worked |
| `scheduled_at` | `string` | When the run was scheduled for |
| `updated_at` | `string` | When the resource was last updated |
| `workflow_id` | `string` | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | Name of the underlying workflow |
| `workflow_version_id` | `string` | Unique identifier of the workflow version |
| `workflow_version_number` | `number` | Monotonically incrementing version number for the version that ran |

#### Example: Load

```ts
const workflow_run = await client.WorkflowRun().load({ id: 'workflow_run_id' })
```

#### Example: List

```ts
const workflow_runs = await client.WorkflowRun().list()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

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
const { IncidentIoSDK } = require('@voxgig-sdk/incident-io-sdk-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const incidentstatus = client.IncidentStatus()
await incidentstatus.list()

// incidentstatus.data() now returns the incidentstatus data from the last `list`
// incidentstatus.match() returns the last match criteria
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

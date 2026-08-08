# IncidentIo JavaScript SDK Reference

Complete API reference for the IncidentIo JavaScript SDK.


## IncidentIoSDK

### Constructor

```ts
new IncidentIoSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IncidentIoSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IncidentIoSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `Alert(data?: object)`

Create a new `Alert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertEntity` instance.

#### `AlertAttribute(data?: object)`

Create a new `AlertAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertAttributeEntity` instance.

#### `AlertNote(data?: object)`

Create a new `AlertNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertNoteEntity` instance.

#### `AlertRoute(data?: object)`

Create a new `AlertRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertRouteEntity` instance.

#### `AlertSource(data?: object)`

Create a new `AlertSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertSourceEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `CatalogEntry(data?: object)`

Create a new `CatalogEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogEntryEntity` instance.

#### `CatalogResource(data?: object)`

Create a new `CatalogResource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogResourceEntity` instance.

#### `CatalogType(data?: object)`

Create a new `CatalogType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogTypeEntity` instance.

#### `CatalogTypeSchema(data?: object)`

Create a new `CatalogTypeSchema` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogTypeSchemaEntity` instance.

#### `CustomField(data?: object)`

Create a new `CustomField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldEntity` instance.

#### `CustomFieldOption(data?: object)`

Create a new `CustomFieldOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldOptionEntity` instance.

#### `Escalation(data?: object)`

Create a new `Escalation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EscalationEntity` instance.

#### `FollowUp(data?: object)`

Create a new `FollowUp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowUpEntity` instance.

#### `Incident(data?: object)`

Create a new `Incident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentEntity` instance.

#### `IncidentAlert(data?: object)`

Create a new `IncidentAlert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentAlertEntity` instance.

#### `IncidentAttachment(data?: object)`

Create a new `IncidentAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentAttachmentEntity` instance.

#### `IncidentMembership(data?: object)`

Create a new `IncidentMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentMembershipEntity` instance.

#### `IncidentParticipant(data?: object)`

Create a new `IncidentParticipant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentParticipantEntity` instance.

#### `IncidentParticipantWorkload(data?: object)`

Create a new `IncidentParticipantWorkload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentParticipantWorkloadEntity` instance.

#### `IncidentRelationship(data?: object)`

Create a new `IncidentRelationship` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentRelationshipEntity` instance.

#### `IncidentRole(data?: object)`

Create a new `IncidentRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentRoleEntity` instance.

#### `IncidentStatus(data?: object)`

Create a new `IncidentStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentStatusEntity` instance.

#### `IncidentTimestamp(data?: object)`

Create a new `IncidentTimestamp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTimestampEntity` instance.

#### `IncidentType(data?: object)`

Create a new `IncidentType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTypeEntity` instance.

#### `IncidentUpdate(data?: object)`

Create a new `IncidentUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentUpdateEntity` instance.

#### `IpAllowlist(data?: object)`

Create a new `IpAllowlist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpAllowlistEntity` instance.

#### `MaintenanceWindow(data?: object)`

Create a new `MaintenanceWindow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MaintenanceWindowEntity` instance.

#### `PostmortemDocument(data?: object)`

Create a new `PostmortemDocument` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostmortemDocumentEntity` instance.

#### `Schedule(data?: object)`

Create a new `Schedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntity` instance.

#### `ScheduleEntry(data?: object)`

Create a new `ScheduleEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntryEntity` instance.

#### `ScheduleReplica(data?: object)`

Create a new `ScheduleReplica` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleReplicaEntity` instance.

#### `ScheduleSyncRule(data?: object)`

Create a new `ScheduleSyncRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleSyncRuleEntity` instance.

#### `ScheduleSyncTarget(data?: object)`

Create a new `ScheduleSyncTarget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleSyncTargetEntity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Severity(data?: object)`

Create a new `Severity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeverityEntity` instance.

#### `StatusPage(data?: object)`

Create a new `StatusPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageEntity` instance.

#### `StatusPageIncident(data?: object)`

Create a new `StatusPageIncident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageIncidentEntity` instance.

#### `StatusPageIncidentUpdate(data?: object)`

Create a new `StatusPageIncidentUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageIncidentUpdateEntity` instance.

#### `StatusPageMaintenance(data?: object)`

Create a new `StatusPageMaintenance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageMaintenanceEntity` instance.

#### `StatusPageMaintenanceUpdate(data?: object)`

Create a new `StatusPageMaintenanceUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageMaintenanceUpdateEntity` instance.

#### `StatusPageStructure(data?: object)`

Create a new `StatusPageStructure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageStructureEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TelemetryDataSource(data?: object)`

Create a new `TelemetryDataSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TelemetryDataSourceEntity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `WorkflowRun(data?: object)`

Create a new `WorkflowRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowRunEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IncidentIoSDK.test()`.

**Returns:** `IncidentIoSDK` instance in test mode.


---

## ActionEntity

```ts
const action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes |  |
| `assignee_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `Object` | No |  |
| `follow_up` | `boolean` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Action().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Action().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Action().load({ id: 'action_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Action().remove({ id: 'action_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Action().update({
  id: 'action_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertEntity

```ts
const alert = client.Alert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `Array` | No |  |
| `alert_source_id` | `string` | Yes |  |
| `attribute` | `Array` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Alert().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Alert().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Alert().load({ id: 'alert_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertAttributeEntity

```ts
const alert_attribute = client.AlertAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `boolean` | Yes |  |
| `emoji` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `required` | `boolean` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlertAttribute().create({
  array: true,
  id: 'example_id',
  name: 'example_name',
  required: true,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlertAttribute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlertAttribute().load({ id: 'alert_attribute_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlertAttribute().remove({ id: 'alert_attribute_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AlertAttribute().update({
  id: 'alert_attribute_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertNoteEntity

```ts
const alert_note = client.AlertNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No |  |
| `alert_id` | `string` | No |  |
| `content` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `image` | `Array` | Yes |  |
| `last_edited_at` | `string` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlertNote().create({
  content: 'example_content',
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  image: [],
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlertNote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlertNote().load({ id: 'alert_note_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlertNote().remove({ id: 'alert_note_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AlertNote().update({
  id: 'alert_note_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertRouteEntity

```ts
const alert_route = client.AlertRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_source` | `Array` | Yes |  |
| `channel_config` | `Array` | Yes |  |
| `condition_group` | `Array` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `escalation_config` | `Object` | Yes |  |
| `expression` | `Array` | Yes |  |
| `grouping_config` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `Object` | Yes |  |
| `incident_template` | `Object` | Yes |  |
| `is_private` | `boolean` | Yes |  |
| `message_config` | `Object` | Yes |  |
| `message_template` | `Object` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `updated_at` | `string` | No |  |
| `version` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlertRoute().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlertRoute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlertRoute().load({ id: 'alert_route_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlertRoute().remove({ id: 'alert_route_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AlertRoute().update({
  id: 'alert_route_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertSourceEntity

```ts
const alert_source = client.AlertSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No |  |
| `auto_resolve_incident_alert` | `boolean` | No |  |
| `auto_resolve_timeout_minute` | `number` | No |  |
| `disabled` | `boolean` | No |  |
| `email_option` | `Object` | Yes |  |
| `heartbeat_option` | `Object` | Yes |  |
| `http_custom_option` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `jira_option` | `Object` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `secret_token` | `string` | No |  |
| `source_type` | `string` | Yes |  |
| `template` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AlertSource().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AlertSource().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AlertSource().load({ id: 'alert_source_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AlertSource().remove({ id: 'alert_source_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.AlertSource().update({
  id: 'alert_source_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comment` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `grace_period_minute` | `number` | Yes |  |
| `id` | `string` | Yes |  |
| `last_used_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `Array` | Yes |  |
| `role_name` | `Array` | Yes |  |
| `team_id` | `Array` | Yes |  |
| `team_role` | `Array` | Yes |  |
| `team_role_name` | `Array` | Yes |  |
| `token_last_issued_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApiKey().load({ id: 'api_key_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 'api_key_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ApiKey().update({
  id: 'api_key_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogEntryEntity

```ts
const catalog_entry = client.CatalogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `Array` | No |  |
| `archived_at` | `string` | No |  |
| `attribute_value` | `Object` | Yes |  |
| `catalog_entry` | `Object` | Yes |  |
| `catalog_type` | `Object` | Yes |  |
| `catalog_type_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `external_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | No |  |
| `update_attribute` | `Array` | No |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `alias` | - | Yes | - | - |
| `archived_at` | - | - | - | - |
| `attribute_value` | - | - | - | - |
| `catalog_entry` | - | - | - | - |
| `catalog_type` | - | - | - | - |
| `catalog_type_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `external_id` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | Yes | - | - |
| `update_attribute` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CatalogEntry().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CatalogEntry().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CatalogEntry().load({ id: 'catalog_entry_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CatalogEntry().update({
  id: 'catalog_entry_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogResourceEntity

```ts
const catalog_resource = client.CatalogResource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `engine_resource_type` | `string` | Yes |  |
| `label` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `value_docstring` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CatalogResource().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogTypeEntity

```ts
const catalog_type = client.CatalogType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `Object` | Yes |  |
| `category` | `Array` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dynamic_resource_parameter` | `string` | No |  |
| `engine_resource_type` | `string` | Yes |  |
| `estimated_count` | `number` | No |  |
| `icon` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_editable` | `boolean` | Yes |  |
| `is_team_type` | `boolean` | No |  |
| `last_synced_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `ranked` | `boolean` | Yes |  |
| `registry_type` | `string` | No |  |
| `required_integration` | `Array` | No |  |
| `schema` | `Object` | Yes |  |
| `semantic_type` | `string` | Yes |  |
| `source_repo_url` | `string` | No |  |
| `type_name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `use_name_as_identifier` | `boolean` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotation` | - | - | Yes | Yes |
| `category` | - | - | Yes | Yes |
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
| `owning_team_id` | - | - | - | - |
| `ranked` | - | - | Yes | Yes |
| `registry_type` | - | - | - | - |
| `required_integration` | - | - | - | - |
| `schema` | - | - | - | - |
| `semantic_type` | - | - | - | - |
| `source_repo_url` | - | - | - | - |
| `type_name` | - | - | Yes | - |
| `updated_at` | - | - | - | - |
| `use_name_as_identifier` | - | - | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CatalogType().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CatalogType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CatalogType().load({ id: 'catalog_type_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CatalogType().update({
  id: 'catalog_type_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogTypeSchemaEntity

```ts
const catalog_type_schema = client.CatalogTypeSchema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `Object` | Yes |  |
| `attribute` | `Array` | Yes |  |
| `category` | `Array` | Yes |  |
| `color` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `dynamic_resource_parameter` | `string` | No |  |
| `engine_resource_type` | `string` | Yes |  |
| `estimated_count` | `number` | No |  |
| `icon` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_editable` | `boolean` | Yes |  |
| `is_team_type` | `boolean` | No |  |
| `last_synced_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `ranked` | `boolean` | Yes |  |
| `registry_type` | `string` | No |  |
| `required_integration` | `Array` | No |  |
| `schema` | `Object` | Yes |  |
| `semantic_type` | `string` | Yes |  |
| `source_repo_url` | `string` | No |  |
| `type_name` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `use_name_as_identifier` | `boolean` | Yes |  |
| `version` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CatalogTypeSchema().create({
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

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldEntity

```ts
const custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `field_type` | `string` | Yes |  |
| `filter_by` | `Object` | Yes |  |
| `fixed_filter` | `Object` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No |  |
| `helptext_catalog_attribute_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `option` | `Array` | Yes |  |
| `required` | `string` | No |  |
| `required_v2` | `string` | No |  |
| `show_before_closure` | `boolean` | Yes |  |
| `show_before_creation` | `boolean` | Yes |  |
| `show_before_update` | `boolean` | Yes |  |
| `show_in_announcement_post` | `boolean` | No |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomField().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomField().load({ id: 'custom_field_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomField().remove({ id: 'custom_field_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomField().update({
  id: 'custom_field_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldOptionEntity

```ts
const custom_field_option = client.CustomFieldOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `sort_key` | `number` | Yes |  |
| `value` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomFieldOption().create({
  custom_field_id: 'example_custom_field_id',
  id: 'example_id',
  sort_key: 1,
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomFieldOption().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomFieldOption().load({ id: 'custom_field_option_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomFieldOption().remove({ id: 'custom_field_option_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomFieldOption().update({
  id: 'custom_field_option_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EscalationEntity

```ts
const escalation = client.Escalation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No |  |
| `escalation_path_id` | `string` | No |  |
| `event` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `priority` | `Object` | Yes |  |
| `related_alert` | `Array` | Yes |  |
| `related_incident` | `Array` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `user_id` | `Array` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Escalation().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Escalation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Escalation().load({ id: 'escalation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EscalationEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowUpEntity

```ts
const follow_up = client.FollowUp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes |  |
| `assignee_id` | `string` | No |  |
| `assignee_team` | `Object` | Yes |  |
| `assignee_team_id` | `string` | No |  |
| `completed_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No |  |
| `external_issue_reference` | `Object` | Yes |  |
| `external_issue_reference_id` | `string` | No |  |
| `follow_up_category_id` | `string` | No |  |
| `follow_up_priority_option_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `label` | `Array` | Yes |  |
| `priority` | `Object` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.FollowUp().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.FollowUp().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.FollowUp().load({ id: 'follow_up_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.FollowUp().remove({ id: 'follow_up_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.FollowUp().update({
  id: 'follow_up_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentEntity

```ts
const incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `creator` | `Object` | Yes |  |
| `custom_field_entry` | `Array` | Yes |  |
| `duration_metric` | `Array` | No |  |
| `external_issue_reference` | `Object` | Yes |  |
| `has_debrief` | `boolean` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident` | `Object` | Yes |  |
| `incident_role_assignment` | `Array` | Yes |  |
| `incident_status` | `Object` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `Array` | No |  |
| `incident_type` | `Object` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_incident_channel` | `boolean` | Yes |  |
| `permalink` | `string` | No |  |
| `postmortem_document_id` | `Array` | No |  |
| `postmortem_document_url` | `string` | No |  |
| `reference` | `string` | Yes |  |
| `retrospective_incident_option` | `Object` | No |  |
| `severity` | `Object` | Yes |  |
| `severity_id` | `string` | No |  |
| `slack_channel_id` | `string` | Yes |  |
| `slack_channel_name` | `string` | No |  |
| `slack_channel_name_override` | `string` | No |  |
| `slack_team_id` | `string` | Yes |  |
| `source_message_channel_id` | `string` | No |  |
| `source_message_timestamp` | `string` | No |  |
| `status` | `string` | Yes |  |
| `summary` | `string` | No |  |
| `timestamp` | `Array` | No |  |
| `updated_at` | `string` | Yes |  |
| `visibility` | `string` | Yes |  |
| `workload_minutes_late` | `number` | No |  |
| `workload_minutes_sleeping` | `number` | No |  |
| `workload_minutes_total` | `number` | No |  |
| `workload_minutes_working` | `number` | No |  |

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
| `incident` | - | - | - |
| `incident_role_assignment` | - | - | Yes |
| `incident_status` | - | - | - |
| `incident_status_id` | - | - | - |
| `incident_timestamp_value` | - | - | - |
| `incident_type` | - | - | - |
| `incident_type_id` | - | - | - |
| `mode` | - | - | Yes |
| `name` | - | - | Yes |
| `notify_incident_channel` | - | - | - |
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
| `source_message_channel_id` | - | - | - |
| `source_message_timestamp` | - | - | - |
| `status` | - | - | Yes |
| `summary` | - | - | - |
| `timestamp` | - | - | - |
| `updated_at` | - | - | - |
| `visibility` | - | - | - |
| `workload_minutes_late` | - | - | - |
| `workload_minutes_sleeping` | - | - | - |
| `workload_minutes_total` | - | - | - |
| `workload_minutes_working` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Incident().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Incident().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Incident().load({ id: 'incident_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentAlertEntity

```ts
const incident_alert = client.IncidentAlert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `Object` | Yes |  |
| `alert_route_id` | `string` | No |  |
| `id` | `string` | Yes |  |
| `incident` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentAlert().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentAlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentAttachmentEntity

```ts
const incident_attachment = client.IncidentAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `resource` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IncidentAttachment().create({
  id: 'example_id',
  incident_id: 'example_incident_id',
  resource: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentAttachment().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IncidentAttachment().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentMembershipEntity

```ts
const incident_membership = client.IncidentMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IncidentMembership().create({
  incident_id: 'example_incident_id',
  user_id: 'example_user_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentParticipantEntity

```ts
const incident_participant = client.IncidentParticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Array` | Yes |  |
| `passive` | `Array` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IncidentParticipant().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentParticipantWorkloadEntity

```ts
const incident_participant_workload = client.IncidentParticipantWorkload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No |  |
| `participant_type` | `string` | No |  |
| `user` | `Object` | Yes |  |
| `workload` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentParticipantWorkload().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentRelationshipEntity

```ts
const incident_relationship = client.IncidentRelationship()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `incident` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentRelationship().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentRoleEntity

```ts
const incident_role = client.IncidentRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `instruction` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `required` | `boolean` | No |  |
| `role_type` | `string` | Yes |  |
| `shortform` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `instruction` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | - | - |
| `role_type` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IncidentRole().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentRole().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IncidentRole().load({ id: 'incident_role_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IncidentRole().remove({ id: 'incident_role_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IncidentRole().update({
  id: 'incident_role_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentStatusEntity

```ts
const incident_status = client.IncidentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.IncidentStatus().create({
  category: 'example_category',
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentStatus().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IncidentStatus().load({ id: 'incident_status_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IncidentStatus().remove({ id: 'incident_status_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IncidentStatus().update({
  id: 'incident_status_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTimestampEntity

```ts
const incident_timestamp = client.IncidentTimestamp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentTimestamp().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IncidentTimestamp().load({ id: 'incident_timestamp_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTypeEntity

```ts
const incident_type = client.IncidentType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `is_default` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `private_incidents_only` | `boolean` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IncidentType().load({ id: 'incident_type_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentUpdateEntity

```ts
const incident_update = client.IncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `merged_into_incident_id` | `string` | No |  |
| `message` | `string` | No |  |
| `new_incident_status` | `Object` | Yes |  |
| `new_severity` | `Object` | Yes |  |
| `updater` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.IncidentUpdate().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpAllowlistEntity

```ts
const ip_allowlist = client.IpAllowlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `Array` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `updated_at` | `string` | No |  |
| `version` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.IpAllowlist().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IpAllowlist().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MaintenanceWindowEntity

```ts
const maintenance_window = client.MaintenanceWindow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_group` | `Array` | Yes |  |
| `archived_at` | `string` | No |  |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes |  |
| `escalation_target` | `Array` | No |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | No |  |
| `lead` | `Object` | Yes |  |
| `name` | `string` | Yes |  |
| `notification_message` | `string` | No |  |
| `notify_channel` | `Array` | No |  |
| `notify_end_minutes_before` | `number` | No |  |
| `notify_start_minutes_before` | `number` | No |  |
| `reroute_on_end` | `boolean` | Yes |  |
| `resolve_on_end` | `boolean` | Yes |  |
| `show_in_sidebar` | `boolean` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MaintenanceWindow().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.MaintenanceWindow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MaintenanceWindow().load({ id: 'maintenance_window_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.MaintenanceWindow().remove({ id: 'maintenance_window_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.MaintenanceWindow().update({
  id: 'maintenance_window_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostmortemDocumentEntity

```ts
const postmortem_document = client.PostmortemDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `document_url` | `string` | Yes |  |
| `editor` | `Array` | Yes |  |
| `exported_url` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `title` | `string` | Yes |  |
| `type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PostmortemDocument().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PostmortemDocument().load({ id: 'postmortem_document_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PostmortemDocument().update({
  id: 'postmortem_document_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntity

```ts
const schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `Object` | Yes |  |
| `config` | `Object` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shift` | `Array` | No |  |
| `holidays_public_config` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `next_shift` | `Array` | No |  |
| `permalink` | `string` | Yes |  |
| `schedule` | `Object` | Yes |  |
| `team_id` | `Array` | Yes |  |
| `timezone` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Schedule().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Schedule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Schedule().load({ id: 'schedule_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Schedule().remove({ id: 'schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Schedule().update({
  id: 'schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntryEntity

```ts
const schedule_entry = client.ScheduleEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `Object` | Yes |  |
| `schedule_entry` | `Object` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScheduleEntry().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleReplicaEntity

```ts
const schedule_replica = client.ScheduleReplica()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_sync_error` | `string` | No |  |
| `last_synced_at` | `string` | No |  |
| `mirror_window_day` | `number` | No |  |
| `replica_fallback_user_id` | `string` | Yes |  |
| `replica_provider` | `string` | Yes |  |
| `replica_provider_id` | `string` | Yes |  |
| `schedule_id` | `string` | Yes |  |
| `schedule_replica` | `Object` | Yes |  |
| `source` | `Array` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `user_status` | `Array` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ScheduleReplica().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ScheduleReplica().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScheduleReplica().load({ id: 'schedule_replica_id', schedule_id: 'schedule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleSyncRuleEntity

```ts
const schedule_sync_rule = client.ScheduleSyncRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `Object` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `permanent_member_user_id` | `Array` | Yes |  |
| `rotation_id` | `string` | No |  |
| `schedule_id` | `string` | Yes |  |
| `schedule_sync_rule` | `Object` | Yes |  |
| `schedule_sync_target` | `Object` | Yes |  |
| `schedule_sync_target_id` | `string` | Yes |  |
| `sync_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotation` | - | - | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `permanent_member_user_id` | - | - | - | Yes |
| `rotation_id` | - | - | - | - |
| `schedule_id` | - | - | - | - |
| `schedule_sync_rule` | - | - | - | - |
| `schedule_sync_target` | - | - | - | - |
| `schedule_sync_target_id` | - | - | - | - |
| `sync_type` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ScheduleSyncRule().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ScheduleSyncRule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScheduleSyncRule().load({ id: 'schedule_sync_rule_id', schedule_id: 'schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ScheduleSyncRule().update({
  id: 'schedule_sync_rule_id',
  schedule_id: 'schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleSyncTargetEntity

```ts
const schedule_sync_target = client.ScheduleSyncTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `boolean` | Yes |  |
| `annotation` | `Object` | No |  |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `linked_schedule` | `Array` | Yes |  |
| `schedule_sync_target` | `Object` | Yes |  |
| `slack_team_id` | `string` | Yes |  |
| `slack_user_group_id` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ScheduleSyncTarget().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ScheduleSyncTarget().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ScheduleSyncTarget().load({ id: 'schedule_sync_target_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ScheduleSyncTarget().remove({ id: 'schedule_sync_target_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ScheduleSyncTarget().update({
  id: 'schedule_sync_target_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `last_four_char` | `string` | No |  |
| `name` | `string` | Yes |  |
| `owning_team_id` | `Array` | Yes |  |
| `secret` | `Object` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes |  |
| `version` | `Array` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_four_char` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_id` | - | - | Yes | Yes | - |
| `secret` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `value` | - | - | - | - | - |
| `version` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Secret().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Secret().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Secret().load({ id: 'secret_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Secret().remove({ id: 'secret_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Secret().update({
  id: 'secret_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeverityEntity

```ts
const severity = client.Severity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `rank` | `number` | Yes |  |
| `updated_at` | `string` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Severity().create({
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Severity().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Severity().load({ id: 'severity_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Severity().update({
  id: 'severity_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeverityEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageEntity

```ts
const status_page = client.StatusPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `public_url` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StatusPage().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageIncidentEntity

```ts
const status_page_incident = client.StatusPageIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impact` | `Array` | Yes |  |
| `component_status` | `Array` | No |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `incident_status` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `published_at` | `string` | Yes |  |
| `status_page_id` | `string` | Yes |  |
| `update` | `Array` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StatusPageIncident().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StatusPageIncident().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StatusPageIncident().load({ id: 'status_page_incident_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.StatusPageIncident().update({
  id: 'status_page_incident_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageIncidentUpdateEntity

```ts
const status_page_incident_update = client.StatusPageIncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_status` | `Array` | No |  |
| `incident_status` | `string` | No |  |
| `message` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `status_page_incident_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StatusPageIncidentUpdate().create({
  message: 'example_message',
  notify_subscriber: true,
  status_page_incident_id: 'example_status_page_incident_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageMaintenanceEntity

```ts
const status_page_maintenance = client.StatusPageMaintenance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_id` | `Array` | Yes |  |
| `component_maintenance_period` | `Array` | Yes |  |
| `end_at` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `idempotency_key` | `string` | Yes |  |
| `maintenance_status` | `string` | Yes |  |
| `message` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `published_at` | `string` | Yes |  |
| `start_at` | `string` | Yes |  |
| `status_page_id` | `string` | Yes |  |
| `update` | `Array` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StatusPageMaintenance().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.StatusPageMaintenance().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StatusPageMaintenance().load({ id: 'status_page_maintenance_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageMaintenanceUpdateEntity

```ts
const status_page_maintenance_update = client.StatusPageMaintenanceUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_status` | `Array` | No |  |
| `maintenance_status` | `string` | No |  |
| `message` | `string` | Yes |  |
| `notify_subscriber` | `boolean` | Yes |  |
| `status_page_maintenance_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.StatusPageMaintenanceUpdate().create({
  message: 'example_message',
  notify_subscriber: true,
  status_page_maintenance_id: 'example_status_page_maintenance_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageStructureEntity

```ts
const status_page_structure = client.StatusPageStructure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `item` | `Array` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.StatusPageStructure().load({ id: 'status_page_structure_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `member` | `Array` | Yes |  |
| `name` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Team().load({ id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TelemetryDataSourceEntity

```ts
const telemetry_data_source = client.TelemetryDataSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `datadog_config` | `Object` | No |  |
| `enabled` | `boolean` | Yes |  |
| `grafana_config` | `Object` | No |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `provider` | `string` | Yes |  |
| `source_type` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `version` | `string` | No |  |

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

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.TelemetryDataSource().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TelemetryDataSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `Object` | Yes |  |
| `custom_role` | `Array` | Yes |  |
| `email` | `string` | No |  |
| `id` | `string` | Yes |  |
| `is_active` | `boolean` | Yes |  |
| `name` | `string` | Yes |  |
| `role` | `string` | Yes |  |
| `seat` | `Object` | Yes |  |
| `slack_user_id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.User().load({ id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotation` | `Object` | No |  |
| `condition_group` | `Array` | Yes |  |
| `continue_on_step_error` | `boolean` | Yes |  |
| `delay` | `Object` | Yes |  |
| `expression` | `Array` | Yes |  |
| `folder` | `string` | No |  |
| `form_field` | `Array` | No |  |
| `id` | `string` | Yes |  |
| `include_private_escalation` | `boolean` | No |  |
| `include_private_incident` | `boolean` | No |  |
| `management_meta` | `Object` | Yes |  |
| `name` | `string` | Yes |  |
| `once_for` | `Array` | Yes |  |
| `owning_team_id` | `Array` | No |  |
| `private_incident_scope` | `string` | No |  |
| `runs_from` | `string` | No |  |
| `runs_on_incident` | `string` | Yes |  |
| `runs_on_incident_mode` | `Array` | Yes |  |
| `shortform` | `string` | No |  |
| `skip_step_upgrade` | `boolean` | No |  |
| `state` | `string` | No |  |
| `step` | `Array` | Yes |  |
| `trigger` | `string` | Yes |  |
| `version` | `number` | Yes |  |
| `workflow` | `Object` | Yes |  |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Workflow().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Workflow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Workflow().load({ id: 'workflow_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Workflow().remove({ id: 'workflow_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Workflow().update({
  id: 'workflow_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowRunEntity

```ts
const workflow_run = client.WorkflowRun()
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
| `progress` | `Array` | Yes |  |
| `scheduled_at` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |
| `workflow_id` | `string` | Yes |  |
| `workflow_name` | `string` | No |  |
| `workflow_version_id` | `string` | Yes |  |
| `workflow_version_number` | `number` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WorkflowRun().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WorkflowRun().load({ id: 'workflow_run_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new IncidentIoSDK({
  feature: {
    test: { active: true },
  }
})
```


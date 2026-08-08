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

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

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
| `description` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_id` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Action().create({
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
| `condition_group` | `Array` | Yes |  |
| `created_at` | `string` | No |  |
| `enabled` | `boolean` | Yes |  |
| `escalation_config` | `Object` | Yes |  |
| `expression` | `Array` | Yes |  |
| `grouping_config` | `Object` | Yes |  |
| `id` | `string` | Yes |  |
| `incident_config` | `Object` | Yes |  |
| `is_private` | `boolean` | Yes |  |
| `message_config` | `Object` | Yes |  |
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
| `incident_role_assignment` | `Array` | Yes |  |
| `incident_status` | `Object` | Yes |  |
| `incident_status_id` | `string` | No |  |
| `incident_timestamp_value` | `Array` | No |  |
| `incident_type` | `Object` | Yes |  |
| `incident_type_id` | `string` | No |  |
| `mode` | `string` | Yes |  |
| `name` | `string` | Yes |  |
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
| `summary` | `string` | No |  |
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
| `role_type` | `string` | Yes |  |
| `shortform` | `string` | Yes |  |
| `updated_at` | `string` | Yes |  |

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
| `owning_team_id` | `Array` | No |  |
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
| `owning_team_id` | - | Yes | - | Yes | - |
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


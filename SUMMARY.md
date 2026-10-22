# incident.io

> This is the API reference for incident.io.
>
> It documents available API endpoints, provides examples of how to use it, and
> instructions around things like authentication and error handling.
>
> The API is hosted at:
>
> - https://api.incident.io/
>
> And you will need to create an API key via your [incident.io
> dashboard](https://app.incident.io/settings/api-keys) to make requests.
>
> # Making requests
>
> Here are the key concepts required to make requests to the incident.io API.
>
> ## Authentication
>
> For all requests made to the incident.io API, you&#39;ll need an API key.
>
> To create an API key, head to the incident dashboard and visit [API
> keys](https://app.incident.io/settings/api-keys). When you create the key, you&#39;ll be able to choose what actions it
> can take for your account: choose carefully, as those roles can only be set
> when you first create the key. We&#39;ll only show you the token once, so make sure
> you store it somewhere safe.
>
> API keys are global to your incident.io account, and can be managed by anyone
> who has the right permissions. We display the user that created the API key,
> and the API key will remain valid if that user becomes deactivated.
>
> Once you have the key, you should make requests to the API that set the
> `Authorization` request header using a &quot;Bearer&quot; authentication scheme:
>
> ```
> Authorization: Bearer &lt;YOUR_API_KEY&gt;
> ```
>
> ## Rate Limits
>
> The incident.io API enforces rate limits to ensure consistent performance for all users.
>
> The default rate limit is 1200 requests/minute per API key. This limit applies to most endpoints across the API.
>
> Limits are token buckets that refill continuously rather than resetting on a fixed window boundary. The default
> bucket holds 1200 requests and refills at 20 per second, so you can burst up to the full bucket and then sustain
> 20 requests/second indefinitely. There is no boundary at which your quota resets to full in one step.
>
> Some endpoints have lower rate limits, particularly those that interact with external third-party systems that impose
> their own limitations. These specific limits vary by endpoint.
>
> ### Rate limit headers
>
> Responses to requests authenticated with an API key carry your current allowance, so you can pace yourself rather
> than waiting to be throttled:
>
> ```
> X-RateLimit-Limit: 60, 1200;window=60, 60;window=60
> X-RateLimit-Remaining: 59
> X-RateLimit-Used: 1
> X-RateLimit-Reset: 1785173199
> ```
>
> | Header | Meaning |
> | --- | --- |
> | `X-RateLimit-Limit` | The quota that binds this request, followed by every limit that applied and the window it applies over |
> | `X-RateLimit-Remaining` | Requests you can make right now against the binding limit |
> | `X-RateLimit-Used` | Requests you have spent against it |
> | `X-RateLimit-Reset` | Unix timestamp (seconds) at which that limit will be back to full |
>
> More than one limit can apply to a request: your API key&#39;s overall limit, and for some endpoints a lower limit of
> their own. `X-RateLimit-Limit` lists all of them, each with its window, so `1200;window=60` means 1200 requests per
> minute. Because our limits refill continuously rather than resetting on a boundary, that window is what tells you
> the rate you can sustain: 1200 per 60 seconds is 20 requests/second indefinitely.
>
> `Remaining`, `Used` and `Reset` describe whichever limit has the least allowance left, since that is the one you
> will hit first.
>
> `X-RateLimit-Remaining` may lag by a small number of requests under high concurrency, and can move by more than the
> requests you made, because limits scoped to your whole organisation are shared with your other API keys.
>
> Headers are omitted rather than guessed if we cannot determine your allowance for a request.
>
> ### Exceeding a rate limit
>
> When you exceed a rate limit the API responds with `429 Too Many Requests` and a `Retry-After` header giving the
> number of seconds to wait:
>
> ```
> X-RateLimit-Limit: 1200, 1200;window=60
> X-RateLimit-Remaining: 0
> X-RateLimit-Used: 1200
> X-RateLimit-Reset: 1785173199
> Retry-After: 1
> ```
>
> Prefer `Retry-After` over `X-RateLimit-Reset` when deciding how long to back off. `Retry-After` is when a single
> request will succeed; `X-RateLimit-Reset` is the later point at which your whole allowance has returned. It is a
> duration rather than a timestamp, so it does not depend on your clock agreeing with ours.
>
> The 429 also carries a JSON body with the same information:
>
> ```json
> &#123;
>   &quot;type&quot;: &quot;too_many_requests&quot;,
>   &quot;status&quot;: 429,
>   &quot;request_id&quot;: &quot;b839a403-7704-41c1-bf6a-39a2d68caefa&quot;,
>   &quot;rate_limit&quot;: &#123;
>       &quot;name&quot;: &quot;api_key_name&quot;,
>       &quot;limit&quot;: 1200,
>       &quot;remaining&quot;: 0,
>       &quot;retry_after&quot;: &quot;2025-04-17T11:17:18Z&quot;
>   &#125;,
>   &quot;errors&quot;: [
>       &#123;
>           &quot;code&quot;: &quot;too_many_requests&quot;,
>           &quot;message&quot;: &quot;Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.&quot;
>       &#125;
>   ]
> &#125;
> ```
>
> The response includes:
> * The name of the API key (`name`)
> * The bucket limit (`limit`)
> * The number of requests remaining (`remaining`)
> * When you can retry requests (`retry_after`), as an RFC3339 timestamp
>
> ## Errors
>
> We use standard HTTP response codes to indicate the status or failure of API
> requests.
>
> The API response body will be JSON, and contain more detailed information on the
> nature of the error.
>
> An example error when a request is made without an API key:
>
> ```json
> &#123;
> &quot;type&quot;: &quot;authentication_error&quot;,
> &quot;status&quot;: 401,
> &quot;request_id&quot;: &quot;8e3cc412-b49d-4957-9073-2c19d2c61804&quot;,
> &quot;errors&quot;: [
>   &#123;
>     &quot;code&quot;: &quot;missing_authorization_material&quot;,
>     &quot;message&quot;: &quot;No authorization material provided in request&quot;
>   &#125;
> ]
> &#125;
> ```
>
> Note that the error:
>
> - Contains the HTTP status (`401`)
> - References the type of error (`authentication_error`)
> - Includes a `request_id` that can be provided to incident.io support to help
> 	debug questions with your API request
> - Provides a list of individual errors, which go into detail about why the error
> 	occurred
>
> The most common error will be a 422 Validation Error, which is returned when the
> request was rejected due to failing validations.
>
> These errors look like this:
>
> ```json
> &#123;
> &quot;type&quot;: &quot;validation_error&quot;,
> &quot;status&quot;: 422,
> &quot;request_id&quot;: &quot;631766c4-4afd-4803-997c-cd700928fa4b&quot;,
> &quot;errors&quot;: [
>   &#123;
>     &quot;code&quot;: &quot;is_required&quot;,
>     &quot;message&quot;: &quot;A severity is required to open an incident&quot;,
>     &quot;source&quot;: &#123;
>       &quot;field&quot;: &quot;severity_id&quot;
>     &#125;
>   &#125;
> ]
> &#125;
> ```
>
> This error is caused by not providing a severity identifier, which should be at
> the `severity_id` field of the request payload. Errors like these can be mapped to
> forms, should you be integrating with the API from a user-interface.
>
> ## Compatibility
>
> We won&#39;t make breaking changes to existing API services or endpoints, but will
> expect integrators to upgrade themselves to the latest API endpoints within 3
> months of us deprecating the old service.
>
> We will make changes that are considered backwards compatible, which include:
>
> - Adding new API endpoints and services
> - Adding new properties to responses from existing API endpoints
> - Reordering properties returned from existing API endpoints
> - Adding optional request parameters to existing API endpoints
> - Altering the format or length of IDs
> - Adding new values to enums
>
> It is important that clients are robust to these changes, to ensure reliable
> integrations.
>
> As an example, if you are generating a client using an openapi-generator, ensure
> the generated client is configured to support unknown enum values, often
> configured via the `enumUnknownDefaultCase` parameter.
>
> When breaking changes are unavoidable, we&#39;ll create a new service version on a
> separate path, and run them in parallel.
>
> For example:
>
> - https://api.incident.io/v1/incidents
> - https://api.incident.io/v2/incidents
>
> For any questions, email support@incident.io.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 106 entities and 330 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Action](docs/api/action.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assignee_id`: ID of the user this action is assigned to
- `completed_at`: When the action was completed
- `created_at`: When the action was created
- `description`: Description of the action
- `id`: Unique identifier for the action

### [Alert](docs/api/alert.html)

Results: OK response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `alert_group_ids`: The IDs of every alert group this alert belongs to. Empty when the alert is not part of any group.
- `alert_source_id`: The ID of the alert source this alert fired on
- `attributes`: Attribute values parsed from the alerts payload
- `created_at`: When this entry was created
- `deduplication_key`: A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required. If you send an event with the same `deduplication_key` multiple times, only one alert will be created in incident.io for this alert source config. You can filter on this field to find the alert created by an event you&#39;ve sent us.

### [AlertAttribute](docs/api/alert_attribute.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `array`: Whether this attribute is an array
- `emoji`: The emoji to display alongside this attribute in chat messages, stored without colons
- `id`: The ID of this attribute
- `name`: Unique name of this attribute
- `required`: Whether this attribute is required. If this field is not set, the existing setting will be preserved.

### [AlertEventsV2](docs/api/alert_events_v2.html)

Results: Accepted response.

SDK operations: `create`.

Key fields to recognise:

- `deduplication_key`: The deduplication key that the event has been processed with
- `description`: Description that optionally adds more detail to title.
- `message`: Human readable message giving detail about the event
- `metadata`: Additional metadata about the error, keyed by a string identifier
- `source_url`: If applicable, a link to the alert in the upstream system

### [AlertNote](docs/api/alert_note.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `alert_group_id`: ID of the alert group this note is attached to. Exactly one of `alert_id` or `alert_group_id` is set; the other is null.
- `alert_id`: ID of the alert this note is attached to. Exactly one of `alert_id` or `alert_group_id` is set; the other is null.
- `content`: Markdown body of the note
- `created_at`: When this note was first created
- `id`: Unique identifier for the alert note

### [AlertRoute](docs/api/alert_route.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `alert_sources`: Which alert sources should this alert route match?
- `condition_groups`: What condition groups must be true for this alert route to fire?
- `created_at`: The time of creation of this alert route
- `enabled`: Whether this alert route is enabled or not
- `expressions`: The expressions used in this template

### [AlertSource](docs/api/alert_source.html)

Results: OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `alert_events_url`: URL that can be used to send alert events to this source. This is only set for sources that accept webhook/HTTP events; email sources use the `email_address` field, and integration-based sources (like Jira) receive events through their native integrations.
- `auto_resolve_incident_alerts`: Whether alerts from this source keep counting down to auto-resolve while attached to an incident. Defaults to true. Has no effect without `auto_resolve_timeout_minutes`.
- `auto_resolve_timeout_minutes`: When set, alerts from this source will automatically resolve after this many minutes.
- `disabled`: For heartbeat sources, set to true to disable monitoring
- `filter_condition_groups`: Conditions an incoming event must match to be ingested from this source, evaluated against the event&#39;s payload and this source&#39;s expressions.

### [AlertSourcesV2](docs/api/alert_sources_v2.html)

Results: No Content response.

SDK operations: `create`.

Key fields to recognise:

- `owning_team_ids`: IDs of teams that own this alert source
- `source_type`: Type of alert source

### [AlertTag](docs/api/alert_tag.html)

Results: OK response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `alert_group_ids`: The IDs of every alert group this alert belongs to. Empty when the alert is not part of any group.
- `alert_source_id`: The ID of the alert source this alert fired on
- `attributes`: Attribute values parsed from the alerts payload
- `created_at`: When this entry was created
- `deduplication_key`: A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required. If you send an event with the same `deduplication_key` multiple times, only one alert will be created in incident.io for this alert source config. You can filter on this field to find the alert created by an event you&#39;ve sent us.

### [AlertsAddTagsResultV2](docs/api/alerts_add_tags_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `alert_group_ids`: The IDs of every alert group this alert belongs to. Empty when the alert is not part of any group.
- `alert_source_id`: The ID of the alert source this alert fired on
- `attributes`: Attribute values parsed from the alerts payload
- `created_at`: When this entry was created
- `deduplication_key`: A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required. If you send an event with the same `deduplication_key` multiple times, only one alert will be created in incident.io for this alert source config. You can filter on this field to find the alert created by an event you&#39;ve sent us.

### [AlertsSetTagsResultV2](docs/api/alerts_set_tags_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `alert_group_ids`: The IDs of every alert group this alert belongs to. Empty when the alert is not part of any group.
- `alert_source_id`: The ID of the alert source this alert fired on
- `attributes`: Attribute values parsed from the alerts payload
- `created_at`: When this entry was created
- `deduplication_key`: A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required. If you send an event with the same `deduplication_key` multiple times, only one alert will be created in incident.io for this alert source config. You can filter on this field to find the alert created by an event you&#39;ve sent us.

### [AlertsTransitionIncidentAlertResultV2](docs/api/alerts_transition_incident_alert_result_v2.html)

Results: OK response.; Created response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `alert_id`: Alert to attach to the incident
- `alert_route_id`: The ID of the alert route that created this incident alert
- `id`: The ID of this alert
- `incident`: Incident slim is a subset of the full incident object, listing key fields.
- `incident_id`: Incident to attach the alert to

### [AnnouncementRule](docs/api/announcement_rule.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `condition_groups`: Incidents are announced when they match any of these condition groups
- `conditions_no_longer_apply_behaviour`: Whether to remove announcement posts when the incident no longer matches this rule&#39;s conditions
- `created_at`: When the rule was created
- `id`: Unique identifier for this announcement rule
- `microsoft_teams_channel_ids`: Microsoft Teams channels to post announcements into, as `team_id`/`channel_id`, when the organisation uses Microsoft Teams

### [AnnouncementTemplate](docs/api/announcement_template.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `actions`: Actions shown on the announcement post, in rank order
- `fields`: Fields shown on the announcement post, in rank order
- `id`: Unique identifier for this announcement template
- `is_default`: Whether this is the organisation&#39;s default template, used by rules that don&#39;t choose one
- `name`: Name of this announcement template

### [ApiKey](docs/api/api_key.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `comments`: Freeform notes about this API key
- `created_at`: When the API key was created
- `id`: Unique identifier for this API key
- `last_used_at`: When the key was last used to authenticate a request
- `name`: The name of the API key, for the user&#39;s reference

### [CallRoute](docs/api/call_route.html)

Results: OK response.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `allowed_callers`: The numbers allowed to call this route. Only enforced when `use_caller_allowlist` is true.
- `country_code`: The country this route&#39;s number belongs to
- `current_state`: Where this route is in provisioning. Only an active route answers calls: * pending: created, and awaiting manual work from us * `pending_regulatory_information`: awaiting regulatory compliance information, collected in the dashboard * `pending_number`: compliance is settled, and we&#39;re provisioning a number * active: fully provisioned, and answering calls
- `custom_language`: The language we speak voice prompts in, via text-to-speech
- `id`: Unique identifier for this call route

### [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `id`: Unique identifier for this allowed caller
- `name`: Label for whose number this is
- `phone_number`: The number allowed to call this route, in international format

### [CallRouteOption](docs/api/call_route_option.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `digit`: The keypad digit a caller presses to choose this option
- `id`: Unique identifier for this option
- `path`: Who we page when a caller chooses this option
- `prompt`: What we read out to offer this option, via text-to-speech in the route&#39;s language, exactly as written

### [CallSession](docs/api/call_session.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `ended_at`: When the call session ended. Absent while the call is still in progress.
- `id`: Unique identifier for this call session
- `incident_id`: The incident this call session belongs to
- `started_at`: When the call session started

### [CallTranscriptEntry](docs/api/call_transcript_entry.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `content`: What was said
- `id`: Unique identifier for this transcript entry
- `medium`: Whether this entry was spoken aloud or sent as an in-call chat message
- `participant_name`: Name of the participant who spoke or sent the message, as reported by the call provider
- `timestamp`: When the participant started speaking

### [CatalogEntry](docs/api/catalog_entry.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `aliases`: Optional aliases that can be used to reference this entry
- `archived_at`: When this entry was archived
- `attribute_values`: Values of this entry
- `catalog_type_id`: ID of this catalog type
- `created_at`: When this entry was created

### [CatalogResource](docs/api/catalog_resource.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `category`: Which category of resource
- `description`: Human readable description for this resource
- `engine_resource_type`: The way this resource type is referenced in the engine, as used when setting the type of an alert attribute
- `label`: Label for this catalog resource type
- `type`: Catalog type name for this resource, as used when setting the type of a catalog type attribute

### [CatalogType](docs/api/catalog_type.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotations`: Annotations that can track metadata about this type
- `categories`: What categories is this type considered part of
- `color`: Sets the display color of this type in the dashboard
- `created_at`: When this type was created
- `description`: Human readble description of this type

### [CatalogTypeSchema](docs/api/catalog_type_schema.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `annotations`: Annotations that can track metadata about this type
- `attributes`: Attributes of this catalog type
- `categories`: What categories is this type considered part of
- `color`: Sets the display color of this type in the dashboard
- `created_at`: When this type was created

### [CatalogV3](docs/api/catalog_v3.html)

Results: No Content response.

SDK operations: `create`.

Key fields to recognise:

- `catalog_type_id`: The unique identifier of the catalog type containing the entries
- `entries`: A list of entries to update with their new values.
- `update_attributes`: Optional list of specific attribute IDs to update across all entries.

### [CustomField](docs/api/custom_field.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `catalog_type_id`: For catalog fields, the ID of the associated catalog type
- `created_at`: When the action was created
- `description`: Description of the custom field
- `field_type`: Type of custom field
- `group_by_catalog_attribute_id`: For catalog fields, the ID of the attribute used to group catalog entries (if applicable)

### [CustomFieldOption](docs/api/custom_field_option.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `custom_field_id`: ID of the custom field this option belongs to
- `id`: Unique identifier for the custom field option
- `sort_key`: Sort key used to order the custom field options correctly
- `value`: Human readable name for the custom field option. Values must not start or end with whitespace, or contain tabs or newlines.

### [Escalation](docs/api/escalation.html)

Results: Created response.; OK response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: When this escalation was created
- `creator`: The creator of this escalation. Can be a user, a workflow, or an alert. If the escalation came from a call route, this will be empty.
- `description`: Additional detail provided with this escalation. When it isn&#39;t set explicitly, this is taken from the alert description or the incident summary, and is empty when neither applies.
- `escalation_path_id`: Unique identifier of the escalation path that the escalation was created from
- `events`: Events which describe the history of this escalation. Events include information about what users or channels were notified and what users acked.

### [EscalationPath](docs/api/escalation_path.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `current_responders`: Users who are currently on-call for this escalation path
- `id`: Unique identifier for this escalation path.
- `kind`: Whether this path carries its own nodes, or is built from an escalation path template.
- `name`: The name of this escalation path, for the user&#39;s reference.
- `param_bindings`: For a templated path, the values bound to the template&#39;s declared parameters, keyed by parameter name.

### [EscalationPathTemplate](docs/api/escalation_path_template.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: A description of what this template is for.
- `expressions`: Expressions backing the template&#39;s binding targets.
- `has_historical_escalation_path_versions`: Whether a previous escalation path version uses this template. You cannot restore those versions after the template is archived.
- `id`: Unique identifier for this template.
- `name`: The name of this template.

### [EscalationsCheckEscalationPermissionsResultV2](docs/api/escalations_check_escalation_permissions_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `response_options`: The response options available to each requested user, in the same order as the request.
- `user_ids`: The IDs of the users to check response options for

### [EscalationsReassignEscalationResultV2](docs/api/escalations_reassign_escalation_result_v2.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `description`: Additional detail provided with this escalation. When it isn&#39;t set explicitly, this is taken from the alert description or the incident summary, and is empty when neither applies.
- `escalation_path_id`: Unique identifier of the escalation path that the escalation was created from
- `resolve_original`: Whether to resolve the original escalation, stopping it paging its targets.
- `title`: The title of this escalation
- `user_ids`: IDs of users to reassign directly to

### [EscalationsV2](docs/api/escalations_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `response`: Whether to acknowledge, decline or snooze the escalation

### [FollowUp](docs/api/follow_up.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `assignee_id`: ID of the user this follow-up is assigned to
- `assignee_team_id`: ID of the team this follow-up is assigned to
- `completed_at`: When the follow-up was completed
- `created_at`: When the follow-up was created
- `description`: Description of the follow-up

### [FollowUpsConnectExternalIssueResultV2](docs/api/follow_ups_connect_external_issue_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `completed_at`: When the follow-up was completed
- `created_at`: When the follow-up was created
- `description`: Description of the follow-up
- `id`: Unique identifier for the follow-up
- `incident_id`: Unique identifier of the incident the follow-up belongs to

### [FollowUpsConnectExternalIssueResultV3](docs/api/follow_ups_connect_external_issue_result_v3.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `completed_at`: When the follow-up was completed
- `created_at`: When the follow-up was created
- `description`: Description of the follow-up
- `id`: Unique identifier for the follow-up
- `incident_id`: Unique identifier of the incident the follow-up belongs to

### [FollowUpsCreateFromLinkResultV3](docs/api/follow_ups_create_from_link_result_v3.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `incident_id`: Unique identifier of the incident the follow-up belongs to
- `url`: URL of the issue in the external provider

### [HeartbeatV2](docs/api/heartbeat_v2.html)

Results: No Content response.

SDK operations: `create`, `load`.

### [Identity](docs/api/identity.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `dashboard_url`: The dashboard URL for this organisation
- `name`: The name assigned to the current API Key
- `roles`: Which roles have been enabled for this key
- `team_roles`: If set, these roles apply to requests that operate on resources owned by any of the teams in the &#39;teams&#39; array. These are in addition to any &#39;roles&#39; which are applied on all requests.
- `teams`: Teams that this API key is scoped to. If this is not empty, the current API key has additional roles within these teams (see `team_roles`).

### [Incident](docs/api/incident.html)

Results: OK response.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `call_url`: The call URL attached to this incident
- `created_at`: When the incident was created
- `custom_field_entries`: Custom field entries for this incident
- `debriefs`: Debriefs scheduled for this incident, ordered by start time. Excludes cancelled calendar events.
- `duration_metrics`: Incident duration metrics and their measurements for this incident

### [IncidentActivityLogEntry](docs/api/incident_activity_log_entry.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `content`: Details of an activity log entry. At most one key is set, and it matches the entry&#39;s type. Types not listed here carry no content: the entry&#39;s type and title are all there is.
- `created_at`: When we recorded the activity
- `id`: Unique identifier of the activity log entry
- `incident_id`: ID of the incident this happened on. When the incident has streams, listing the parent also returns entries from its streams, and this is the stream&#39;s ID for those.
- `occurred_at`: When the activity happened. This is what the log is ordered by.

### [IncidentAttachment](docs/api/incident_attachment.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `id`: Unique identifier of this incident membership
- `incident_id`: Unique identifier of the incident

### [IncidentForm](docs/api/incident_form.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: When this incident form was created
- `expressions`: Expressions available to every element&#39;s conditions and defaults. Referenced by reference, not by ID.
- `form_type`: Which form this is. Escalate forms are not part of this API.
- `id`: Unique identifier for this incident form
- `incident_type_id`: The incident type this form belongs to. Unset for the organisation&#39;s default form of this type.

### [IncidentMembership](docs/api/incident_membership.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `incident_id`: Unique identifier of the incident

### [IncidentMembershipsV1](docs/api/incident_memberships_v1.html)

Results: No Content response.

SDK operations: `create`.

Key fields to recognise:

- `incident_id`: Revoke memberships to incident

### [IncidentParticipant](docs/api/incident_participant.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `active`: Participants who are actively helping with the incident
- `passive`: Participants who are just observing the incident

### [IncidentParticipantWorkload](docs/api/incident_participant_workload.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `archived_at`: When the user left the incident, if they are no longer an active participant
- `participant_type`: The role they had in the incident

### [IncidentRelationship](docs/api/incident_relationship.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier of this incident relationship

### [IncidentRole](docs/api/incident_role.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: When the role was created
- `description`: Describes the purpose of the role
- `id`: Unique identifier for the role
- `instructions`: Provided to whoever is nominated for the role. Note that this will be empty for the &#39;reporter&#39; role.
- `name`: Human readable name of the incident role

### [IncidentStatus](docs/api/incident_status.html)

Results: Created response.; OK response.; Accepted response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `category`: What category of status it is. All statuses apart from live (renamed in the app to Active) and learning (renamed in the app to Post-incident) are managed by incident.io and cannot be configured
- `description`: Rich text description of the incident status
- `id`: Unique ID of this incident status
- `name`: Unique name of this status
- `rank`: Order of this incident status

### [IncidentTeamMembership](docs/api/incident_team_membership.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `incident_id`: Unique identifier of the incident

### [IncidentTeamMembershipsV1](docs/api/incident_team_memberships_v1.html)

Results: No Content response.

SDK operations: `create`.

Key fields to recognise:

- `incident_id`: Revoke team access to this incident

### [IncidentTemplate](docs/api/incident_template.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: When this incident template was created
- `expressions`: The expressions used by bindings in this template
- `id`: Unique identifier for this incident template
- `name`: The name of this incident template, for the user&#39;s reference
- `template`: The values an incident template applies to the incidents it creates.

### [IncidentTemplatesValidateResultV1](docs/api/incident_templates_validate_result_v1.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `expressions`: The expressions used by bindings in this template
- `name`: Which rate limit was exceeded
- `template`: The values an incident template applies to the incidents it creates.
- `warnings`: Anything suspect about this config that isn&#39;t severe enough to reject it. Empty when there&#39;s nothing to say.

### [IncidentTimelineItem](docs/api/incident_timeline_item.html)

Results: Created response.; OK response.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `activity_log_id`: ID of the activity log entry this item was promoted from. Null for items written by hand, which are the items whose timestamp can be changed.
- `created_at`: When this item was added to the timeline
- `description`: Description of the timeline item, in markdown. Absent when the item has no description.
- `id`: Unique identifier of the timeline item
- `idempotency_key`: Unique string used to de-duplicate timeline item requests.

### [IncidentTimestamp](docs/api/incident_timestamp.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique ID of this incident timestamp
- `name`: Unique name of this timestamp
- `rank`: Order in which this timestamp should be shown

### [IncidentType](docs/api/incident_type.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `create_in_triage`: Whether incidents of this must always, or can optionally, be created in triage
- `created_at`: When this resource was created
- `description`: What is this incident type for?
- `id`: Unique identifier for this Incident Type
- `is_default`: The default Incident Type is used when no other type is explicitly specified

### [IncidentUpdate](docs/api/incident_update.html)

Results: Created response.; OK response.

SDK operations: `create`, `list`.

Key fields to recognise:

- `created_at`: When the update was created
- `id`: Unique identifier for this incident update
- `idempotency_key`: Unique string used to de-duplicate incident update requests.
- `incident_id`: The incident this update relates to
- `merged_into_incident_id`: The ID of the incident this incident was merged into, if the to state of this update is &#39;merged&#39;.

### [IncidentsImportPostmortemDocumentResultV2](docs/api/incidents_import_postmortem_document_result_v2.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `content`: The document content as GitHub-Flavored Markdown
- `title`: The display title of the post-mortem document

### [IpAllowlist](docs/api/ip_allowlist.html)

Results: OK response.

SDK operations: `load`, `update`.

Key fields to recognise:

- `allowlist`: A list of IP addresses or CIDR prefixes to allow
- `enabled`: Whether this IP allowlist is enabled or not
- `updated_at`: The time this allowlist was last updated
- `version`: The version of this IP allowlist

### [IpRange](docs/api/ip_range.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `cidr`: The address in CIDR notation. Single addresses are given as a /32.
- `description`: Which of our traffic reaches you from this address

### [MaintenanceWindow](docs/api/maintenance_window.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `alert_condition_groups`: Condition groups that determine which alerts this maintenance window applies to
- `archived_at`: When this maintenance window was archived, if it has been
- `created_at`: When this maintenance window was created
- `end_at`: When the maintenance window ends
- `escalation_targets`: If set, alerts matching this window will be escalated to these targets

### [ManagedResource](docs/api/managed_resource.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `annotations`: Annotations that track metadata about this resource
- `managed_by`: How is this resource managed
- `resource_id`: The ID of the resource that this relates to
- `resource_type`: The type of the related resource
- `source_url`: The url of the external repository where this resource is managed (if there is one)

### [OnCallNotificationMethodPublicV2](docs/api/on_call_notification_method_public_v2.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `address`: The address of this method (for example redacted phone number, email address, device name, Slack user name)
- `id`: Unique identifier for this notification method
- `is_usable`: Whether this method is ready to receive notifications. For phone, this means verified. For app devices, this means push notifications can be sent. For email, Slack, and Microsoft Teams this is always true.
- `method_type`: The high-level type of notification method. Phone rules include phone details that distinguish SMS from voice calls.

### [OnCallNotificationPause](docs/api/on_call_notification_pause.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `ends_at`: When notifications resume
- `id`: Unique identifier for this notification pause
- `reason`: Free text reason for why notifications are paused, shown to teammates
- `starts_at`: When notifications stop being sent to the user
- `user_id`: The user whose on-call notifications are paused in this time window

### [OnCallNotificationRulePublicV2](docs/api/on_call_notification_rule_public_v2.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `delay_seconds`: Delay in seconds before this rule activates. 0 means immediate.
- `id`: Unique identifier for this notification rule
- `method_type`: The high-level type of notification method. Phone rules include phone details that distinguish SMS from voice calls.
- `rule_type`: The urgency level this rule applies to

### [PayConfig](docs/api/pay_config.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `base_rate_cents`: Rate paid for any time no rule covers, in the lowest denomination of the currency
- `currency`: Currency this config pays in, in ISO 4217 format
- `id`: Unique identifier for this pay config
- `name`: Human readable name for this pay config
- `one_off_rules`: Rules that apply over a single window of time, such as a public holiday

### [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `end_at`: When this rule stops applying
- `id`: Unique identifier for this rule, stable across edits to the config
- `name`: Human readable name for this rule
- `rate_cents`: Rate paid while this rule applies, in the lowest denomination of the config&#39;s currency
- `start_at`: When this rule starts applying

### [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `end_time`: Time of day this rule ends, in 24 hour format. Equal to `start_time` means it runs for the whole day.
- `id`: Unique identifier for this rule, stable across edits to the config
- `rate_cents`: Rate paid while this rule applies, in the lowest denomination of the config&#39;s currency
- `start_time`: Time of day this rule starts, in 24 hour format
- `weekdays`: Days of the week this rule applies on

### [PayReport](docs/api/pay_report.html)

Results: Accepted response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: When this report was created
- `end_date`: Last date (YYYY-MM-DD) this report includes shifts from, inclusive
- `error_code`: Why a report could not be generated
- `error_message`: What went wrong, written for whoever asked for the report. Only set on a failed report.
- `id`: Unique identifier for this pay report

### [PayReportsPublishResultV2](docs/api/pay_reports_publish_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `cc_emails`: Email addresses to send a copy of the report to
- `created_at`: When this report was created
- `end_date`: Last date (YYYY-MM-DD) this report includes shifts from, inclusive
- `error_code`: Why a report could not be generated
- `error_message`: What went wrong, written for whoever asked for the report. Only set on a failed report.

### [PayReportsUnpublishResultV2](docs/api/pay_reports_unpublish_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `created_at`: When this report was created
- `end_date`: Last date (YYYY-MM-DD) this report includes shifts from, inclusive
- `error_code`: Why a report could not be generated
- `error_message`: What went wrong, written for whoever asked for the report. Only set on a failed report.
- `id`: Unique identifier for this pay report

### [PayReportsV2](docs/api/pay_reports_v2.html)

Results: OK response.

SDK operations: `load`.

### [Policy](docs/api/policy.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `conditions`: Conditions which determine which resources are in scope for this policy
- `debrief`: Set when `policy_type` is debrief.
- `description`: Human readable description of the policy
- `expressions`: The expressions relating to this policy
- `follow_up`: Set when `policy_type` is `follow_up`.

### [PolicyFinding](docs/api/policy_finding.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `days`: Days outside the policy&#39;s due date
- `debrief`: Set when `policy_type` is debrief.
- `due_at`: When this finding becomes overdue
- `follow_up`: Set when `policy_type` is `follow_up`.
- `id`: Unique ID of the finding

### [PolicyFindingsDismissResultV2](docs/api/policy_findings_dismiss_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `days`: Days outside the policy&#39;s due date
- `debrief`: Set when `policy_type` is debrief.
- `due_at`: When this finding becomes overdue
- `follow_up`: Set when `policy_type` is `follow_up`.
- `id`: Unique ID of the finding

### [PolicyFindingsRestoreResultV2](docs/api/policy_findings_restore_result_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `days`: Days outside the policy&#39;s due date
- `debrief`: Set when `policy_type` is debrief.
- `due_at`: When this finding becomes overdue
- `follow_up`: Set when `policy_type` is `follow_up`.
- `id`: Unique ID of the finding

### [PostmortemDocument](docs/api/postmortem_document.html)

Results: OK response.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `created_at`: Timestamp for when the document was created
- `document_url`: A URL to view the post-mortem document in the incident.io dashboard
- `editors`: The list of users who have edited this post-mortem document
- `exported_urls`: URLs of any external locations this document has been exported to
- `id`: Unique identifier for the post-mortem document

### [PostmortemDocumentsAttachResultV1](docs/api/postmortem_documents_attach_result_v1.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `document_provider`: The provider hosting the document.
- `incident_id`: The unique identifier of the incident that this post-mortem document belongs to
- `permalink`: A URL pointing to the externally-hosted post-mortem document

### [PostmortemDocumentsShowContentResultV1](docs/api/postmortem_documents_show_content_result_v1.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `markdown`: The full content of the post-mortem document, rendered as markdown. Includes all sections, resolved mentions, timeline, follow-ups, and custom fields.

### [Schedule](docs/api/schedule.html)

Results: Created response.; OK response.; Accepted response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotations`: Annotations that track metadata about this resource
- `current_shifts`: Shifts that are ongoing for this schedule
- `id`: Unique internal ID of the schedule
- `name`: Human readable name synced from external provider
- `next_shifts`: The shifts after the next changeover. Note that on the list schedules endpoint, this will always be empty if the page size requested is greater than 25.

### [ScheduleEntriesListPayloadV2](docs/api/schedule_entries_list_payload_v2.html)

Results: OK response.

SDK operations: `create`.

Key fields to recognise:

- `entry_window_end`: The end of the window to preview entries for.
- `entry_window_start`: The start of the window to preview entries for.
- `final`: The effective schedule after overrides have been merged in
- `overrides`: Overrides that apply within the requested window
- `scheduled`: Entries from the schedule&#39;s rotation rules, before overrides are applied

### [ScheduleEntry](docs/api/schedule_entry.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `schedule_entries`: The schedule entries for a window of time, grouped by where they come from. `scheduled` are the entries produced by the schedule&#39;s rotation rules before any overrides are taken into account. `overrides` are the one-off changes that apply within the window. `final` is the effective schedule after overrides have been merged in, this is normally the list to use when working out who is on-call.

### [ScheduleOverride](docs/api/schedule_override.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `end_at`: End of the override
- `id`: Unique internal ID of the schedule override
- `layer_id`: The layer on the rotation on the schedule that this override applies to
- `rotation_id`: The rotation on the schedule that this override applies to
- `schedule_id`: The schedule that this override applies to

### [ScheduleReplica](docs/api/schedule_replica.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `created_at`: When this schedule replica was first created
- `id`: Unique identifier of the schedule replica
- `last_sync_error`: The most recent error encountered while syncing this replica to the external provider, if any. Common errors include unmapped users or connectivity issues with the external provider. Null if the last sync was successful.
- `last_synced_at`: When the replica was last successfully synced to the external provider. Null if the replica has never been successfully synced.
- `mirror_window_days`: How many days ahead to mirror this schedule into the external provider. Defaults to 14 if not set; maximum 90.

### [ScheduleSyncRule](docs/api/schedule_sync_rule.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotations`: Annotations that track metadata about this resource
- `id`: Unique identifier of the sync rule
- `permanent_member_user_ids`: IDs of users always kept in the Slack user group, regardless of who is on call. Useful for keeping for example a manager in the group so they see mentions without being paged. Scoped to this rule: when several rules feed the same group, we sync the union of their permanent members.
- `rotation_id`: If set, only members of this rotation sync to the user group. When unset, all rotations on the schedule are synced.
- `schedule_id`: The schedule this rule belongs to

### [ScheduleSyncTarget](docs/api/schedule_sync_target.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `add_bot_to_group`: Whether the incident.io bot should be added to the group as a member. This is needed for some Slack configurations to let us manage the group&#39;s membership.
- `annotations`: Annotations that track metadata about this resource
- `id`: Unique identifier of the sync target
- `linked_schedules`: Schedules with an active sync rule pointing at this target
- `slack_team_id`: Slack team (workspace) ID the user group lives in. On Enterprise Grid this identifies which workspace within the org the group belongs to.

### [Secret](docs/api/secret.html)

Results: OK response.; Created response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: Optional description of what this secret is for
- `id`: Unique identifier for this secret
- `last_four_chars`: The last four characters of the current value, for masked display. Absent when the value is four characters or shorter.
- `name`: Human-readable name, unique within the organisation amongst unarchived secrets
- `owning_team_ids`: IDs of the teams that own this secret. Empty means the secret is owned by the whole organisation.

### [Severity](docs/api/severity.html)

Results: Created response.; OK response.; Accepted response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `created_at`: When the action was created
- `description`: Description of the severity
- `id`: Unique identifier of the severity
- `name`: Human readable name of the severity
- `rank`: Rank to help sort severities (lower numbers are less severe)

### [StatusPage](docs/api/status_page.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: The description of this status page
- `id`: Unique ID of this status page
- `name`: The title of this status page
- `public_url`: The public URL of this status page

### [StatusPageComponent](docs/api/status_page_component.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `description`: Optional short description of this component
- `id`: Unique identifier for this component
- `name`: Human-readable name for the component

### [StatusPageComponentAvailability](docs/api/status_page_component_availability.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `availability_percent`: Availability over the window as a percentage, floored (for example &quot;99.94&quot;). Omitted when we have no data covering the window.
- `component_id`: ID of the component. This may be found by calling the ShowStatusPageStructure endpoint.
- `data_available_since`: Earliest time we have status data for this component. Before this, availability is unknown rather than assumed operational.
- `end_at`: End of the requested availability window
- `start_at`: Start of the requested availability window

### [StatusPageIncident](docs/api/status_page_incident.html)

Results: Created response.; OK response.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `component_impacts`: A list of time periods that this status page incident had an impact on a component
- `component_statuses`: The updated statuses of affected components
- `id`: A unique ID for this status page incident
- `idempotency_key`: A unique key to de-duplicate requests.
- `incident_status`: Current status for this incident

### [StatusPageIncidentUpdate](docs/api/status_page_incident_update.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `component_statuses`: The updated statuses of affected components
- `incident_status`: Current status for this incident
- `message`: Markdown update on what&#39;s changed about this status page incident
- `notify_subscribers`: Whether to notify subscribers about this incident update.
- `status_page_incident_id`: The ID of the corresponding status page incident

### [StatusPageLinkedResponseIncident](docs/api/status_page_linked_response_incident.html)

Results: OK response.

SDK operations: `list`.

Key fields to recognise:

- `id`: ID of the Response incident
- `linked_at`: When the Response incident was linked to the status page incident

### [StatusPageMaintenance](docs/api/status_page_maintenance.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `affected_component_ids`: An array of IDs of component affected by the maintenance window
- `automate_maintenance_status`: Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time
- `component_maintenance_periods`: A list of time periods where components were under maintenance during this status page maintenance window
- `end_at`: When the component stopped being under maintenance. If this is null, the impact is ongoing.
- `id`: A unique ID for this status page maintenance window

### [StatusPageMaintenanceUpdate](docs/api/status_page_maintenance_update.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `component_statuses`: The updated statuses of affected components
- `maintenance_status`: Current status for this maintenance window
- `message`: Markdown update on what&#39;s changed about this status page maintenance window
- `notify_subscribers`: Whether to notify subscribers about this status page maintenance update.
- `status_page_maintenance_id`: The ID of the corresponding status page maintenance window

### [StatusPageStructure](docs/api/status_page_structure.html)

Results: OK response.

SDK operations: `load`.

Key fields to recognise:

- `display_uptime_mode`: How the page shows uptime against its components
- `id`: Unique ID of this component group

### [StatusPagesCreateStatusPageRetrospectiveIncidentResultV2](docs/api/status_pages_create_status_page_retrospective_incident_result_v2.html)

Results: Created response.

SDK operations: `create`.

Key fields to recognise:

- `idempotency_key`: A unique key to de-duplicate requests.
- `name`: A title for the incident
- `status_page_id`: The ID of the corresponding status page
- `updates`: A list of updates posted to this status page incident

### [Team](docs/api/team.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique ID of the team
- `members`: Members of the team
- `name`: Name of the team

### [TelemetryDataSource](docs/api/telemetry_data_source.html)

Results: OK response.

SDK operations: `update`.

Key fields to recognise:

- `created_at`: When this data source was created
- `datadog_config`: Datadog-specific credential updates
- `enabled`: Whether this data source is enabled
- `grafana_config`: Grafana-specific credential and endpoint updates
- `id`: Unique identifier for this data source

### [User](docs/api/user.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `email`: Email address of the user.
- `id`: Unique identifier of the user
- `is_active`: Whether the user is active. False if the user has been deactivated (for example offboarded) or is not yet active.
- `name`: Name of the user
- `role`: DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated.

### [UsersShowPagingProviderResultV2](docs/api/users_show_paging_provider_result_v2.html)

Results: No Content response.; OK response.

SDK operations: `create`, `load`.

Key fields to recognise:

- `preferred_escalation_provider`: The user&#39;s effective escalation provider.

### [UtilitiesV1](docs/api/utilities_v1.html)

Results: OK response.

SDK operations: `load`.

### [Workflow](docs/api/workflow.html)

Results: Created response.; OK response.; No Content response.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `annotations`: Annotations that track metadata about this resource
- `auto_run_mode`: Whether the workflow is configured to run immediately or ask for confirmation in the incident channel
- `condition_groups`: Conditions that apply to the workflow trigger
- `continue_on_step_error`: Whether to continue executing the workflow if a step fails
- `expressions`: Expressions that make variables available in the scope

### [WorkflowRun](docs/api/workflow_run.html)

Results: OK response.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cancelled_at`: If the run was cancelled, this is when
- `created_at`: When the resource was created
- `enqueued_at`: When the run was enqueued for execution
- `error`: Error produced by the workflow, if it failed
- `id`: Unique identifier for the workflow run

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Action](docs/api/action.html) | `create` | `POST /v2/actions` | Required |
| [Action](docs/api/action.html) | `create` | `POST /v3/actions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /v1/actions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /v2/actions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /v3/actions` | Required |
| [Action](docs/api/action.html) | `load` | `GET /v1/actions/{id}` | Required |
| [Action](docs/api/action.html) | `load` | `GET /v2/actions/{id}` | Required |
| [Action](docs/api/action.html) | `load` | `GET /v3/actions/{id}` | Required |
| [Action](docs/api/action.html) | `remove` | `DELETE /v2/actions/{id}` | Required |
| [Action](docs/api/action.html) | `remove` | `DELETE /v3/actions/{id}` | Required |
| [Action](docs/api/action.html) | `update` | `PUT /v2/actions/{id}` | Required |
| [Action](docs/api/action.html) | `update` | `PUT /v3/actions/{id}` | Required |
| [Alert](docs/api/alert.html) | `create` | `POST /v2/alerts/{id}/actions/resolve` | Required |
| [Alert](docs/api/alert.html) | `list` | `GET /v2/alerts` | Required |
| [Alert](docs/api/alert.html) | `load` | `GET /v2/alerts/{id}` | Required |
| [AlertAttribute](docs/api/alert_attribute.html) | `create` | `POST /v2/alert_attributes` | Required |
| [AlertAttribute](docs/api/alert_attribute.html) | `list` | `GET /v2/alert_attributes` | Required |
| [AlertAttribute](docs/api/alert_attribute.html) | `load` | `GET /v2/alert_attributes/{id}` | Required |
| [AlertAttribute](docs/api/alert_attribute.html) | `remove` | `DELETE /v2/alert_attributes/{id}` | Required |
| [AlertAttribute](docs/api/alert_attribute.html) | `update` | `PUT /v2/alert_attributes/{id}` | Required |
| [AlertEventsV2](docs/api/alert_events_v2.html) | `create` | `POST /v2/alert_events/http/{alert_source_config_id}` | Not required |
| [AlertNote](docs/api/alert_note.html) | `create` | `POST /v1/alert_notes` | Required |
| [AlertNote](docs/api/alert_note.html) | `list` | `GET /v1/alert_notes` | Required |
| [AlertNote](docs/api/alert_note.html) | `load` | `GET /v1/alert_notes/{id}` | Required |
| [AlertNote](docs/api/alert_note.html) | `remove` | `DELETE /v1/alert_notes/{id}` | Required |
| [AlertNote](docs/api/alert_note.html) | `update` | `PUT /v1/alert_notes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `create` | `POST /v2/alert_routes` | Required |
| [AlertRoute](docs/api/alert_route.html) | `create` | `POST /v3/alert_routes` | Required |
| [AlertRoute](docs/api/alert_route.html) | `list` | `GET /v2/alert_routes` | Required |
| [AlertRoute](docs/api/alert_route.html) | `list` | `GET /v3/alert_routes` | Required |
| [AlertRoute](docs/api/alert_route.html) | `load` | `GET /v2/alert_routes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `load` | `GET /v3/alert_routes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `remove` | `DELETE /v2/alert_routes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `remove` | `DELETE /v3/alert_routes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `update` | `PUT /v2/alert_routes/{id}` | Required |
| [AlertRoute](docs/api/alert_route.html) | `update` | `PUT /v3/alert_routes/{id}` | Required |
| [AlertSource](docs/api/alert_source.html) | `create` | `POST /v2/alert_sources` | Required |
| [AlertSource](docs/api/alert_source.html) | `list` | `GET /v2/alert_sources` | Required |
| [AlertSource](docs/api/alert_source.html) | `load` | `GET /v2/alert_sources/{id}` | Required |
| [AlertSource](docs/api/alert_source.html) | `remove` | `DELETE /v2/alert_sources/{id}` | Required |
| [AlertSource](docs/api/alert_source.html) | `update` | `PUT /v2/alert_sources/{id}` | Required |
| [AlertSourcesV2](docs/api/alert_sources_v2.html) | `create` | `POST /v2/alert_sources/actions/validate` | Required |
| [AlertTag](docs/api/alert_tag.html) | `create` | `POST /v2/alerts/{id}/actions/remove_tags` | Required |
| [AlertTag](docs/api/alert_tag.html) | `list` | `GET /v2/alert_tags` | Required |
| [AlertsAddTagsResultV2](docs/api/alerts_add_tags_result_v2.html) | `create` | `POST /v2/alerts/{id}/actions/add_tags` | Required |
| [AlertsSetTagsResultV2](docs/api/alerts_set_tags_result_v2.html) | `create` | `POST /v2/alerts/{id}/actions/set_tags` | Required |
| [AlertsTransitionIncidentAlertResultV2](docs/api/alerts_transition_incident_alert_result_v2.html) | `create` | `POST /v2/incident_alerts/{id}/actions/transition` | Required |
| [AlertsTransitionIncidentAlertResultV2](docs/api/alerts_transition_incident_alert_result_v2.html) | `create` | `POST /v2/incident_alerts` | Required |
| [AlertsTransitionIncidentAlertResultV2](docs/api/alerts_transition_incident_alert_result_v2.html) | `list` | `GET /v2/incident_alerts` | Required |
| [AnnouncementRule](docs/api/announcement_rule.html) | `create` | `POST /v2/announcement_rules` | Required |
| [AnnouncementRule](docs/api/announcement_rule.html) | `list` | `GET /v2/announcement_rules` | Required |
| [AnnouncementRule](docs/api/announcement_rule.html) | `load` | `GET /v2/announcement_rules/{id}` | Required |
| [AnnouncementRule](docs/api/announcement_rule.html) | `remove` | `DELETE /v2/announcement_rules/{id}` | Required |
| [AnnouncementRule](docs/api/announcement_rule.html) | `update` | `PUT /v2/announcement_rules/{id}` | Required |
| [AnnouncementTemplate](docs/api/announcement_template.html) | `create` | `POST /v2/announcement_templates` | Required |
| [AnnouncementTemplate](docs/api/announcement_template.html) | `list` | `GET /v2/announcement_templates` | Required |
| [AnnouncementTemplate](docs/api/announcement_template.html) | `load` | `GET /v2/announcement_templates/{id}` | Required |
| [AnnouncementTemplate](docs/api/announcement_template.html) | `remove` | `DELETE /v2/announcement_templates/{id}` | Required |
| [AnnouncementTemplate](docs/api/announcement_template.html) | `update` | `PUT /v2/announcement_templates/{id}` | Required |
| [ApiKey](docs/api/api_key.html) | `create` | `POST /v1/api_keys/{id}/actions/rotate` | Required |
| [ApiKey](docs/api/api_key.html) | `create` | `POST /v1/api_keys` | Required |
| [ApiKey](docs/api/api_key.html) | `list` | `GET /v1/api_keys` | Required |
| [ApiKey](docs/api/api_key.html) | `load` | `GET /v1/api_keys/{id}` | Required |
| [ApiKey](docs/api/api_key.html) | `remove` | `DELETE /v1/api_keys/{id}` | Required |
| [ApiKey](docs/api/api_key.html) | `update` | `PUT /v1/api_keys/{id}` | Required |
| [CallRoute](docs/api/call_route.html) | `list` | `GET /v2/call_routes` | Required |
| [CallRoute](docs/api/call_route.html) | `load` | `GET /v2/call_routes/{id}` | Required |
| [CallRoute](docs/api/call_route.html) | `update` | `PUT /v2/call_routes/{id}` | Required |
| [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html) | `create` | `POST /v2/call_routes/{call_route_id}/allowed_callers` | Required |
| [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html) | `list` | `GET /v2/call_routes/{call_route_id}/allowed_callers` | Required |
| [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html) | `load` | `GET /v2/call_routes/{call_route_id}/allowed_callers/{id}` | Required |
| [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html) | `remove` | `DELETE /v2/call_routes/{call_route_id}/allowed_callers/{id}` | Required |
| [CallRouteAllowedCaller](docs/api/call_route_allowed_caller.html) | `update` | `PUT /v2/call_routes/{call_route_id}/allowed_callers/{id}` | Required |
| [CallRouteOption](docs/api/call_route_option.html) | `create` | `POST /v2/call_routes/{call_route_id}/options` | Required |
| [CallRouteOption](docs/api/call_route_option.html) | `list` | `GET /v2/call_routes/{call_route_id}/options` | Required |
| [CallRouteOption](docs/api/call_route_option.html) | `load` | `GET /v2/call_routes/{call_route_id}/options/{id}` | Required |
| [CallRouteOption](docs/api/call_route_option.html) | `remove` | `DELETE /v2/call_routes/{call_route_id}/options/{id}` | Required |
| [CallRouteOption](docs/api/call_route_option.html) | `update` | `PUT /v2/call_routes/{call_route_id}/options/{id}` | Required |
| [CallSession](docs/api/call_session.html) | `list` | `GET /v2/call_sessions` | Required |
| [CallTranscriptEntry](docs/api/call_transcript_entry.html) | `list` | `GET /v2/call_transcript_entries` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `create` | `POST /v2/catalog_entries` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `create` | `POST /v3/catalog_entries` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `list` | `GET /v3/catalog_entries` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `list` | `GET /v2/catalog_entries` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `load` | `GET /v2/catalog_entries/{id}` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `load` | `GET /v3/catalog_entries/{id}` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `remove` | `DELETE /v2/catalog_entries/{id}` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `remove` | `DELETE /v3/catalog_entries/{id}` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `update` | `PUT /v2/catalog_entries/{id}` | Required |
| [CatalogEntry](docs/api/catalog_entry.html) | `update` | `PUT /v3/catalog_entries/{id}` | Required |
| [CatalogResource](docs/api/catalog_resource.html) | `list` | `GET /v2/catalog_resources` | Required |
| [CatalogResource](docs/api/catalog_resource.html) | `list` | `GET /v3/catalog_resources` | Required |
| [CatalogType](docs/api/catalog_type.html) | `create` | `POST /v2/catalog_types` | Required |
| [CatalogType](docs/api/catalog_type.html) | `create` | `POST /v3/catalog_types` | Required |
| [CatalogType](docs/api/catalog_type.html) | `list` | `GET /v2/catalog_types` | Required |
| [CatalogType](docs/api/catalog_type.html) | `list` | `GET /v3/catalog_types` | Required |
| [CatalogType](docs/api/catalog_type.html) | `load` | `GET /v2/catalog_types/{id}` | Required |
| [CatalogType](docs/api/catalog_type.html) | `load` | `GET /v3/catalog_types/{id}` | Required |
| [CatalogType](docs/api/catalog_type.html) | `remove` | `DELETE /v2/catalog_types/{id}` | Required |
| [CatalogType](docs/api/catalog_type.html) | `remove` | `DELETE /v3/catalog_types/{id}` | Required |
| [CatalogType](docs/api/catalog_type.html) | `update` | `PUT /v2/catalog_types/{id}` | Required |
| [CatalogType](docs/api/catalog_type.html) | `update` | `PUT /v3/catalog_types/{id}` | Required |
| [CatalogTypeSchema](docs/api/catalog_type_schema.html) | `create` | `POST /v2/catalog_types/{id}/actions/update_schema` | Required |
| [CatalogTypeSchema](docs/api/catalog_type_schema.html) | `create` | `POST /v3/catalog_types/{id}/actions/update_schema` | Required |
| [CatalogV3](docs/api/catalog_v3.html) | `create` | `POST /v3/catalog_entries/actions/bulk_update` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /v1/custom_fields` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /v2/custom_fields` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /v1/custom_fields` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /v2/custom_fields` | Required |
| [CustomField](docs/api/custom_field.html) | `load` | `GET /v1/custom_fields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `load` | `GET /v2/custom_fields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /v1/custom_fields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /v2/custom_fields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /v1/custom_fields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /v2/custom_fields/{id}` | Required |
| [CustomFieldOption](docs/api/custom_field_option.html) | `create` | `POST /v1/custom_field_options` | Required |
| [CustomFieldOption](docs/api/custom_field_option.html) | `list` | `GET /v1/custom_field_options` | Required |
| [CustomFieldOption](docs/api/custom_field_option.html) | `load` | `GET /v1/custom_field_options/{id}` | Required |
| [CustomFieldOption](docs/api/custom_field_option.html) | `remove` | `DELETE /v1/custom_field_options/{id}` | Required |
| [CustomFieldOption](docs/api/custom_field_option.html) | `update` | `PUT /v1/custom_field_options/{id}` | Required |
| [Escalation](docs/api/escalation.html) | `create` | `POST /v2/escalations` | Required |
| [Escalation](docs/api/escalation.html) | `list` | `GET /v2/escalations` | Required |
| [Escalation](docs/api/escalation.html) | `load` | `GET /v2/escalations/{id}` | Required |
| [EscalationPath](docs/api/escalation_path.html) | `create` | `POST /v2/escalation_paths` | Required |
| [EscalationPath](docs/api/escalation_path.html) | `list` | `GET /v2/escalation_paths` | Required |
| [EscalationPath](docs/api/escalation_path.html) | `load` | `GET /v2/escalation_paths/{id}` | Required |
| [EscalationPath](docs/api/escalation_path.html) | `remove` | `DELETE /v2/escalation_paths/{id}` | Required |
| [EscalationPath](docs/api/escalation_path.html) | `update` | `PUT /v2/escalation_paths/{id}` | Required |
| [EscalationPathTemplate](docs/api/escalation_path_template.html) | `create` | `POST /v2/escalation_path_templates` | Required |
| [EscalationPathTemplate](docs/api/escalation_path_template.html) | `list` | `GET /v2/escalation_path_templates` | Required |
| [EscalationPathTemplate](docs/api/escalation_path_template.html) | `load` | `GET /v2/escalation_path_templates/{id}` | Required |
| [EscalationPathTemplate](docs/api/escalation_path_template.html) | `remove` | `DELETE /v2/escalation_path_templates/{id}` | Required |
| [EscalationPathTemplate](docs/api/escalation_path_template.html) | `update` | `PUT /v2/escalation_path_templates/{id}` | Required |
| [EscalationsCheckEscalationPermissionsResultV2](docs/api/escalations_check_escalation_permissions_result_v2.html) | `create` | `POST /v2/escalations/{escalation_id}/actions/check_permissions` | Required |
| [EscalationsReassignEscalationResultV2](docs/api/escalations_reassign_escalation_result_v2.html) | `create` | `POST /v2/escalations/{escalation_id}/actions/reassign` | Required |
| [EscalationsV2](docs/api/escalations_v2.html) | `create` | `POST /v2/escalations/{escalation_id}/actions/respond` | Required |
| [EscalationsV2](docs/api/escalations_v2.html) | `create` | `POST /v2/escalations/{id}/actions/cancel` | Required |
| [FollowUp](docs/api/follow_up.html) | `create` | `POST /v2/follow_ups` | Required |
| [FollowUp](docs/api/follow_up.html) | `create` | `POST /v3/follow_ups` | Required |
| [FollowUp](docs/api/follow_up.html) | `list` | `GET /v2/follow_ups` | Required |
| [FollowUp](docs/api/follow_up.html) | `list` | `GET /v3/follow_ups` | Required |
| [FollowUp](docs/api/follow_up.html) | `load` | `GET /v2/follow_ups/{id}` | Required |
| [FollowUp](docs/api/follow_up.html) | `load` | `GET /v3/follow_ups/{id}` | Required |
| [FollowUp](docs/api/follow_up.html) | `remove` | `DELETE /v2/follow_ups/{id}` | Required |
| [FollowUp](docs/api/follow_up.html) | `remove` | `DELETE /v3/follow_ups/{id}` | Required |
| [FollowUp](docs/api/follow_up.html) | `update` | `PUT /v2/follow_ups/{id}` | Required |
| [FollowUp](docs/api/follow_up.html) | `update` | `PUT /v3/follow_ups/{id}` | Required |
| [FollowUpsConnectExternalIssueResultV2](docs/api/follow_ups_connect_external_issue_result_v2.html) | `create` | `POST /v2/follow_ups/{id}/actions/connect_external_issue` | Required |
| [FollowUpsConnectExternalIssueResultV3](docs/api/follow_ups_connect_external_issue_result_v3.html) | `create` | `POST /v3/follow_ups/{id}/actions/connect_external_issue` | Required |
| [FollowUpsCreateFromLinkResultV3](docs/api/follow_ups_create_from_link_result_v3.html) | `create` | `POST /v3/follow_ups/actions/create_from_link` | Required |
| [HeartbeatV2](docs/api/heartbeat_v2.html) | `create` | `POST /v2/heartbeat/{alert_source_config_id}/ping` | Not required |
| [HeartbeatV2](docs/api/heartbeat_v2.html) | `load` | `GET /v2/heartbeat/{alert_source_config_id}/ping` | Required |
| [Identity](docs/api/identity.html) | `load` | `GET /v1/identity` | Required |
| [Incident](docs/api/incident.html) | `create` | `POST /v2/incidents/{id}/actions/edit` | Required |
| [Incident](docs/api/incident.html) | `create` | `POST /v1/incidents` | Required |
| [Incident](docs/api/incident.html) | `create` | `POST /v2/incidents` | Required |
| [Incident](docs/api/incident.html) | `list` | `GET /v1/incidents` | Required |
| [Incident](docs/api/incident.html) | `list` | `GET /v2/incidents` | Required |
| [Incident](docs/api/incident.html) | `load` | `GET /v1/incidents/{id}` | Required |
| [Incident](docs/api/incident.html) | `load` | `GET /v2/incidents/{id}` | Required |
| [IncidentActivityLogEntry](docs/api/incident_activity_log_entry.html) | `list` | `GET /v2/incident_activity_log_entries` | Required |
| [IncidentAttachment](docs/api/incident_attachment.html) | `create` | `POST /v1/incident_attachments` | Required |
| [IncidentAttachment](docs/api/incident_attachment.html) | `list` | `GET /v1/incident_attachments` | Required |
| [IncidentAttachment](docs/api/incident_attachment.html) | `remove` | `DELETE /v1/incident_attachments/{id}` | Required |
| [IncidentForm](docs/api/incident_form.html) | `create` | `POST /v3/incident_forms` | Required |
| [IncidentForm](docs/api/incident_form.html) | `list` | `GET /v3/incident_forms` | Required |
| [IncidentForm](docs/api/incident_form.html) | `load` | `GET /v3/incident_forms/{id}` | Required |
| [IncidentForm](docs/api/incident_form.html) | `remove` | `DELETE /v3/incident_forms/{id}` | Required |
| [IncidentForm](docs/api/incident_form.html) | `update` | `PUT /v3/incident_forms/{id}` | Required |
| [IncidentMembership](docs/api/incident_membership.html) | `create` | `POST /v1/incident_memberships` | Required |
| [IncidentMembershipsV1](docs/api/incident_memberships_v1.html) | `create` | `POST /v1/incident_memberships/actions/revoke` | Required |
| [IncidentParticipant](docs/api/incident_participant.html) | `load` | `GET /v2/incident_participants` | Required |
| [IncidentParticipantWorkload](docs/api/incident_participant_workload.html) | `list` | `GET /v2/incident_participant_workloads` | Required |
| [IncidentRelationship](docs/api/incident_relationship.html) | `list` | `GET /v1/incident_relationships` | Required |
| [IncidentRole](docs/api/incident_role.html) | `create` | `POST /v1/incident_roles` | Required |
| [IncidentRole](docs/api/incident_role.html) | `create` | `POST /v2/incident_roles` | Required |
| [IncidentRole](docs/api/incident_role.html) | `list` | `GET /v1/incident_roles` | Required |
| [IncidentRole](docs/api/incident_role.html) | `list` | `GET /v2/incident_roles` | Required |
| [IncidentRole](docs/api/incident_role.html) | `load` | `GET /v1/incident_roles/{id}` | Required |
| [IncidentRole](docs/api/incident_role.html) | `load` | `GET /v2/incident_roles/{id}` | Required |
| [IncidentRole](docs/api/incident_role.html) | `remove` | `DELETE /v1/incident_roles/{id}` | Required |
| [IncidentRole](docs/api/incident_role.html) | `remove` | `DELETE /v2/incident_roles/{id}` | Required |
| [IncidentRole](docs/api/incident_role.html) | `update` | `PUT /v1/incident_roles/{id}` | Required |
| [IncidentRole](docs/api/incident_role.html) | `update` | `PUT /v2/incident_roles/{id}` | Required |
| [IncidentStatus](docs/api/incident_status.html) | `create` | `POST /v1/incident_statuses` | Required |
| [IncidentStatus](docs/api/incident_status.html) | `list` | `GET /v1/incident_statuses` | Required |
| [IncidentStatus](docs/api/incident_status.html) | `load` | `GET /v1/incident_statuses/{id}` | Required |
| [IncidentStatus](docs/api/incident_status.html) | `remove` | `DELETE /v1/incident_statuses/{id}` | Required |
| [IncidentStatus](docs/api/incident_status.html) | `update` | `PUT /v1/incident_statuses/{id}` | Required |
| [IncidentTeamMembership](docs/api/incident_team_membership.html) | `create` | `POST /v1/incident_team_memberships` | Required |
| [IncidentTeamMembershipsV1](docs/api/incident_team_memberships_v1.html) | `create` | `POST /v1/incident_team_memberships/actions/revoke` | Required |
| [IncidentTemplate](docs/api/incident_template.html) | `create` | `POST /v1/incident_templates` | Required |
| [IncidentTemplate](docs/api/incident_template.html) | `list` | `GET /v1/incident_templates` | Required |
| [IncidentTemplate](docs/api/incident_template.html) | `load` | `GET /v1/incident_templates/{id}` | Required |
| [IncidentTemplate](docs/api/incident_template.html) | `remove` | `DELETE /v1/incident_templates/{id}` | Required |
| [IncidentTemplate](docs/api/incident_template.html) | `update` | `PUT /v1/incident_templates/{id}` | Required |
| [IncidentTemplatesValidateResultV1](docs/api/incident_templates_validate_result_v1.html) | `create` | `POST /v1/incident_templates/actions/validate` | Required |
| [IncidentTimelineItem](docs/api/incident_timeline_item.html) | `create` | `POST /v2/incident_timeline_items` | Required |
| [IncidentTimelineItem](docs/api/incident_timeline_item.html) | `list` | `GET /v2/incident_timeline_items` | Required |
| [IncidentTimelineItem](docs/api/incident_timeline_item.html) | `update` | `PATCH /v2/incident_timeline_items/{id}` | Required |
| [IncidentTimestamp](docs/api/incident_timestamp.html) | `list` | `GET /v2/incident_timestamps` | Required |
| [IncidentTimestamp](docs/api/incident_timestamp.html) | `load` | `GET /v2/incident_timestamps/{id}` | Required |
| [IncidentType](docs/api/incident_type.html) | `list` | `GET /v1/incident_types` | Required |
| [IncidentType](docs/api/incident_type.html) | `load` | `GET /v1/incident_types/{id}` | Required |
| [IncidentUpdate](docs/api/incident_update.html) | `create` | `POST /v2/incident_updates` | Required |
| [IncidentUpdate](docs/api/incident_update.html) | `list` | `GET /v2/incident_updates` | Required |
| [IncidentsImportPostmortemDocumentResultV2](docs/api/incidents_import_postmortem_document_result_v2.html) | `create` | `POST /v2/incidents/{id}/actions/import_postmortem_document` | Required |
| [IpAllowlist](docs/api/ip_allowlist.html) | `load` | `GET /v1/ip_allowlists` | Required |
| [IpAllowlist](docs/api/ip_allowlist.html) | `update` | `PUT /v1/ip_allowlists` | Required |
| [IpRange](docs/api/ip_range.html) | `list` | `GET /v1/ip_ranges` | Not required |
| [MaintenanceWindow](docs/api/maintenance_window.html) | `create` | `POST /v1/maintenance_windows` | Required |
| [MaintenanceWindow](docs/api/maintenance_window.html) | `list` | `GET /v1/maintenance_windows` | Required |
| [MaintenanceWindow](docs/api/maintenance_window.html) | `load` | `GET /v1/maintenance_windows/{id}` | Required |
| [MaintenanceWindow](docs/api/maintenance_window.html) | `remove` | `DELETE /v1/maintenance_windows/{id}` | Required |
| [MaintenanceWindow](docs/api/maintenance_window.html) | `update` | `PUT /v1/maintenance_windows/{id}` | Required |
| [ManagedResource](docs/api/managed_resource.html) | `create` | `POST /v2/managed_resources` | Required |
| [OnCallNotificationMethodPublicV2](docs/api/on_call_notification_method_public_v2.html) | `list` | `GET /v2/users/{user_id}/notification_methods` | Required |
| [OnCallNotificationPause](docs/api/on_call_notification_pause.html) | `list` | `GET /v2/on_call_notification_pauses` | Required |
| [OnCallNotificationPause](docs/api/on_call_notification_pause.html) | `load` | `GET /v2/on_call_notification_pauses/{id}` | Required |
| [OnCallNotificationRulePublicV2](docs/api/on_call_notification_rule_public_v2.html) | `list` | `GET /v2/users/{user_id}/notification_rules` | Required |
| [PayConfig](docs/api/pay_config.html) | `create` | `POST /v2/pay_configs` | Required |
| [PayConfig](docs/api/pay_config.html) | `list` | `GET /v2/pay_configs` | Required |
| [PayConfig](docs/api/pay_config.html) | `load` | `GET /v2/pay_configs/{id}` | Required |
| [PayConfig](docs/api/pay_config.html) | `remove` | `DELETE /v2/pay_configs/{id}` | Required |
| [PayConfig](docs/api/pay_config.html) | `update` | `PUT /v2/pay_configs/{id}` | Required |
| [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html) | `create` | `POST /v2/pay_configs/{pay_config_id}/one_off_rules` | Required |
| [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html) | `list` | `GET /v2/pay_configs/{pay_config_id}/one_off_rules` | Required |
| [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html) | `load` | `GET /v2/pay_configs/{pay_config_id}/one_off_rules/{id}` | Required |
| [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html) | `remove` | `DELETE /v2/pay_configs/{pay_config_id}/one_off_rules/{id}` | Required |
| [PayConfigOneOffRule](docs/api/pay_config_one_off_rule.html) | `update` | `PUT /v2/pay_configs/{pay_config_id}/one_off_rules/{id}` | Required |
| [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html) | `create` | `POST /v2/pay_configs/{pay_config_id}/weekly_rules` | Required |
| [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html) | `list` | `GET /v2/pay_configs/{pay_config_id}/weekly_rules` | Required |
| [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html) | `load` | `GET /v2/pay_configs/{pay_config_id}/weekly_rules/{id}` | Required |
| [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html) | `remove` | `DELETE /v2/pay_configs/{pay_config_id}/weekly_rules/{id}` | Required |
| [PayConfigWeeklyRule](docs/api/pay_config_weekly_rule.html) | `update` | `PUT /v2/pay_configs/{pay_config_id}/weekly_rules/{id}` | Required |
| [PayReport](docs/api/pay_report.html) | `create` | `POST /v2/pay_reports` | Required |
| [PayReport](docs/api/pay_report.html) | `list` | `GET /v2/pay_reports` | Required |
| [PayReport](docs/api/pay_report.html) | `load` | `GET /v2/pay_reports/{id}` | Required |
| [PayReport](docs/api/pay_report.html) | `remove` | `DELETE /v2/pay_reports/{id}` | Required |
| [PayReportsPublishResultV2](docs/api/pay_reports_publish_result_v2.html) | `create` | `POST /v2/pay_reports/{id}/actions/publish` | Required |
| [PayReportsUnpublishResultV2](docs/api/pay_reports_unpublish_result_v2.html) | `create` | `POST /v2/pay_reports/{id}/actions/unpublish` | Required |
| [PayReportsV2](docs/api/pay_reports_v2.html) | `load` | `GET /v2/pay_reports/{id}/download` | Required |
| [Policy](docs/api/policy.html) | `create` | `POST /v2/policies` | Required |
| [Policy](docs/api/policy.html) | `list` | `GET /v2/policies` | Required |
| [Policy](docs/api/policy.html) | `load` | `GET /v2/policies/{id}` | Required |
| [Policy](docs/api/policy.html) | `remove` | `DELETE /v2/policies/{id}` | Required |
| [Policy](docs/api/policy.html) | `update` | `PUT /v2/policies/{id}` | Required |
| [PolicyFinding](docs/api/policy_finding.html) | `list` | `GET /v2/policy_findings` | Required |
| [PolicyFinding](docs/api/policy_finding.html) | `load` | `GET /v2/policy_findings/{id}` | Required |
| [PolicyFindingsDismissResultV2](docs/api/policy_findings_dismiss_result_v2.html) | `create` | `POST /v2/policy_findings/{id}/actions/dismiss` | Required |
| [PolicyFindingsRestoreResultV2](docs/api/policy_findings_restore_result_v2.html) | `create` | `POST /v2/policy_findings/{id}/actions/restore` | Required |
| [PostmortemDocument](docs/api/postmortem_document.html) | `list` | `GET /v1/postmortem_documents` | Required |
| [PostmortemDocument](docs/api/postmortem_document.html) | `load` | `GET /v1/postmortem_documents/{id}` | Required |
| [PostmortemDocument](docs/api/postmortem_document.html) | `update` | `PUT /v1/postmortem_documents/{id}` | Required |
| [PostmortemDocumentsAttachResultV1](docs/api/postmortem_documents_attach_result_v1.html) | `create` | `POST /v1/postmortem_documents/actions/attach` | Required |
| [PostmortemDocumentsShowContentResultV1](docs/api/postmortem_documents_show_content_result_v1.html) | `load` | `GET /v1/postmortem_documents/{id}/content` | Required |
| [Schedule](docs/api/schedule.html) | `create` | `POST /v2/schedules` | Required |
| [Schedule](docs/api/schedule.html) | `list` | `GET /v2/schedules` | Required |
| [Schedule](docs/api/schedule.html) | `load` | `GET /v2/schedules/{id}` | Required |
| [Schedule](docs/api/schedule.html) | `remove` | `DELETE /v2/schedules/{id}` | Required |
| [Schedule](docs/api/schedule.html) | `update` | `PUT /v2/schedules/{id}` | Required |
| [ScheduleEntriesListPayloadV2](docs/api/schedule_entries_list_payload_v2.html) | `create` | `POST /v2/schedules/{id}/actions/preview_entries` | Required |
| [ScheduleEntry](docs/api/schedule_entry.html) | `load` | `GET /v2/schedule_entries` | Required |
| [ScheduleOverride](docs/api/schedule_override.html) | `create` | `POST /v2/schedule_overrides` | Required |
| [ScheduleOverride](docs/api/schedule_override.html) | `list` | `GET /v2/schedule_overrides` | Required |
| [ScheduleOverride](docs/api/schedule_override.html) | `load` | `GET /v2/schedule_overrides/{id}` | Required |
| [ScheduleOverride](docs/api/schedule_override.html) | `remove` | `DELETE /v2/schedule_overrides/{id}` | Required |
| [ScheduleOverride](docs/api/schedule_override.html) | `update` | `PUT /v2/schedule_overrides/{id}` | Required |
| [ScheduleReplica](docs/api/schedule_replica.html) | `create` | `POST /v2/schedules/{schedule_id}/replicas` | Required |
| [ScheduleReplica](docs/api/schedule_replica.html) | `list` | `GET /v2/schedules/{schedule_id}/replicas` | Required |
| [ScheduleReplica](docs/api/schedule_replica.html) | `load` | `GET /v2/schedules/{schedule_id}/replicas/{id}` | Required |
| [ScheduleReplica](docs/api/schedule_replica.html) | `remove` | `DELETE /v2/schedules/{schedule_id}/replicas/{id}` | Required |
| [ScheduleSyncRule](docs/api/schedule_sync_rule.html) | `create` | `POST /v2/schedules/{schedule_id}/sync_rules` | Required |
| [ScheduleSyncRule](docs/api/schedule_sync_rule.html) | `list` | `GET /v2/schedules/{schedule_id}/sync_rules` | Required |
| [ScheduleSyncRule](docs/api/schedule_sync_rule.html) | `load` | `GET /v2/schedules/{schedule_id}/sync_rules/{id}` | Required |
| [ScheduleSyncRule](docs/api/schedule_sync_rule.html) | `remove` | `DELETE /v2/schedules/{schedule_id}/sync_rules/{id}` | Required |
| [ScheduleSyncRule](docs/api/schedule_sync_rule.html) | `update` | `PUT /v2/schedules/{schedule_id}/sync_rules/{id}` | Required |
| [ScheduleSyncTarget](docs/api/schedule_sync_target.html) | `create` | `POST /v2/schedule_sync_targets` | Required |
| [ScheduleSyncTarget](docs/api/schedule_sync_target.html) | `list` | `GET /v2/schedule_sync_targets` | Required |
| [ScheduleSyncTarget](docs/api/schedule_sync_target.html) | `load` | `GET /v2/schedule_sync_targets/{id}` | Required |
| [ScheduleSyncTarget](docs/api/schedule_sync_target.html) | `remove` | `DELETE /v2/schedule_sync_targets/{id}` | Required |
| [ScheduleSyncTarget](docs/api/schedule_sync_target.html) | `update` | `PUT /v2/schedule_sync_targets/{id}` | Required |
| [Secret](docs/api/secret.html) | `create` | `POST /v2/secrets/{id}/actions/rotate` | Required |
| [Secret](docs/api/secret.html) | `create` | `POST /v2/secrets` | Required |
| [Secret](docs/api/secret.html) | `list` | `GET /v2/secrets` | Required |
| [Secret](docs/api/secret.html) | `load` | `GET /v2/secrets/{id}` | Required |
| [Secret](docs/api/secret.html) | `remove` | `DELETE /v2/secrets/{id}` | Required |
| [Secret](docs/api/secret.html) | `update` | `PUT /v2/secrets/{id}` | Required |
| [Severity](docs/api/severity.html) | `create` | `POST /v1/severities` | Required |
| [Severity](docs/api/severity.html) | `list` | `GET /v1/severities` | Required |
| [Severity](docs/api/severity.html) | `load` | `GET /v1/severities/{id}` | Required |
| [Severity](docs/api/severity.html) | `remove` | `DELETE /v1/severities/{id}` | Required |
| [Severity](docs/api/severity.html) | `update` | `PUT /v1/severities/{id}` | Required |
| [StatusPage](docs/api/status_page.html) | `list` | `GET /v2/status_pages` | Required |
| [StatusPage](docs/api/status_page.html) | `load` | `GET /v2/status_pages/{status_page_id}` | Required |
| [StatusPageComponent](docs/api/status_page_component.html) | `create` | `POST /v2/status_page_components` | Required |
| [StatusPageComponent](docs/api/status_page_component.html) | `list` | `GET /v2/status_page_components` | Required |
| [StatusPageComponent](docs/api/status_page_component.html) | `load` | `GET /v2/status_page_components/{id}` | Required |
| [StatusPageComponent](docs/api/status_page_component.html) | `remove` | `DELETE /v2/status_page_components/{id}` | Required |
| [StatusPageComponent](docs/api/status_page_component.html) | `update` | `PUT /v2/status_page_components/{id}` | Required |
| [StatusPageComponentAvailability](docs/api/status_page_component_availability.html) | `load` | `GET /v2/status_pages/{status_page_id}/components/{component_id}/availability` | Required |
| [StatusPageIncident](docs/api/status_page_incident.html) | `create` | `POST /v2/status_page_incidents` | Required |
| [StatusPageIncident](docs/api/status_page_incident.html) | `list` | `GET /v2/status_page_incidents` | Required |
| [StatusPageIncident](docs/api/status_page_incident.html) | `load` | `GET /v2/status_page_incidents/{status_page_incident_id}` | Required |
| [StatusPageIncident](docs/api/status_page_incident.html) | `update` | `PUT /v2/status_page_incidents/{status_page_incident_id}` | Required |
| [StatusPageIncidentUpdate](docs/api/status_page_incident_update.html) | `create` | `POST /v2/status_page_incident_updates` | Required |
| [StatusPageLinkedResponseIncident](docs/api/status_page_linked_response_incident.html) | `list` | `GET /v1/status-pages/{id}/incidents/{incident_id}/response-incidents` | Required |
| [StatusPageMaintenance](docs/api/status_page_maintenance.html) | `create` | `POST /v2/status_page_maintenances` | Required |
| [StatusPageMaintenance](docs/api/status_page_maintenance.html) | `list` | `GET /v2/status_page_maintenances` | Required |
| [StatusPageMaintenance](docs/api/status_page_maintenance.html) | `load` | `GET /v2/status_page_maintenances/{status_page_maintenance_id}` | Required |
| [StatusPageMaintenance](docs/api/status_page_maintenance.html) | `remove` | `DELETE /v2/status_page_maintenances/{status_page_maintenance_id}` | Required |
| [StatusPageMaintenance](docs/api/status_page_maintenance.html) | `update` | `PUT /v2/status_page_maintenances/{status_page_maintenance_id}` | Required |
| [StatusPageMaintenanceUpdate](docs/api/status_page_maintenance_update.html) | `create` | `POST /v2/status_page_maintenance_updates` | Required |
| [StatusPageStructure](docs/api/status_page_structure.html) | `load` | `GET /v2/status_page_structures/{status_page_id}` | Required |
| [StatusPagesCreateStatusPageRetrospectiveIncidentResultV2](docs/api/status_pages_create_status_page_retrospective_incident_result_v2.html) | `create` | `POST /v2/status_page_retrospective_incidents` | Required |
| [Team](docs/api/team.html) | `list` | `GET /v3/teams` | Required |
| [Team](docs/api/team.html) | `load` | `GET /v3/teams/{id}` | Required |
| [TelemetryDataSource](docs/api/telemetry_data_source.html) | `update` | `PUT /v2/telemetry/data_sources/{id}` | Required |
| [User](docs/api/user.html) | `list` | `GET /v2/users` | Required |
| [User](docs/api/user.html) | `load` | `GET /v2/users/{id}` | Required |
| [UsersShowPagingProviderResultV2](docs/api/users_show_paging_provider_result_v2.html) | `create` | `POST /v2/users/{user_id}/paging_provider` | Required |
| [UsersShowPagingProviderResultV2](docs/api/users_show_paging_provider_result_v2.html) | `load` | `GET /v2/users/{user_id}/paging_provider` | Required |
| [UtilitiesV1](docs/api/utilities_v1.html) | `load` | `GET /v1/openapiV3.json` | Not required |
| [Workflow](docs/api/workflow.html) | `create` | `POST /v2/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `list` | `GET /v2/workflows` | Required |
| [Workflow](docs/api/workflow.html) | `load` | `GET /v2/workflows/{id}` | Required |
| [Workflow](docs/api/workflow.html) | `remove` | `DELETE /v2/workflows/{id}` | Required |
| [Workflow](docs/api/workflow.html) | `update` | `PUT /v2/workflows/{id}` | Required |
| [WorkflowRun](docs/api/workflow_run.html) | `list` | `GET /v2/workflow_runs` | Required |
| [WorkflowRun](docs/api/workflow_run.html) | `load` | `GET /v2/workflow_runs/{id}` | Required |

## Connect to the API

- API server: `https://api.incident.io`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

API key from your incident.io dashboard (Settings &gt; API keys)

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /v1/ip_ranges`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.incident.io/v1/ip_ranges'
```

Inspect the response using the [IpRange](docs/api/ip_range.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [Ruby](docs/sdks/rb.html) | `rb/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `incident-io_list`: List records for an entity. Supported entities: `action`, `alert`, `alert_attribute`, `alert_note`, `alert_route`, `alert_source`, `alert_tag`, `alerts_transition_incident_alert_result_v2`, `announcement_rule`, `announcement_template`, `api_key`, `call_route`, `call_route_allowed_caller`, `call_route_option`, `call_session`, `call_transcript_entry`, `catalog_entry`, `catalog_resource`, `catalog_type`, `custom_field`, `custom_field_option`, `escalation`, `escalation_path`, `escalation_path_template`, `follow_up`, `incident`, `incident_activity_log_entry`, `incident_attachment`, `incident_form`, `incident_participant_workload`, `incident_relationship`, `incident_role`, `incident_status`, `incident_template`, `incident_timeline_item`, `incident_timestamp`, `incident_type`, `incident_update`, `ip_range`, `maintenance_window`, `on_call_notification_method_public_v2`, `on_call_notification_pause`, `on_call_notification_rule_public_v2`, `pay_config`, `pay_config_one_off_rule`, `pay_config_weekly_rule`, `pay_report`, `policy`, `policy_finding`, `postmortem_document`, `schedule`, `schedule_override`, `schedule_replica`, `schedule_sync_rule`, `schedule_sync_target`, `secret`, `severity`, `status_page`, `status_page_component`, `status_page_incident`, `status_page_linked_response_incident`, `status_page_maintenance`, `team`, `user`, `workflow`, `workflow_run`.
- `incident-io_load`: Load one record for an entity. Supported entities: `action`, `alert`, `alert_attribute`, `alert_note`, `alert_route`, `alert_source`, `announcement_rule`, `announcement_template`, `api_key`, `call_route`, `call_route_allowed_caller`, `call_route_option`, `catalog_entry`, `catalog_type`, `custom_field`, `custom_field_option`, `escalation`, `escalation_path`, `escalation_path_template`, `follow_up`, `heartbeat_v2`, `identity`, `incident`, `incident_form`, `incident_participant`, `incident_role`, `incident_status`, `incident_template`, `incident_timestamp`, `incident_type`, `ip_allowlist`, `maintenance_window`, `on_call_notification_pause`, `pay_config`, `pay_config_one_off_rule`, `pay_config_weekly_rule`, `pay_report`, `pay_reports_v2`, `policy`, `policy_finding`, `postmortem_document`, `postmortem_documents_show_content_result_v1`, `schedule`, `schedule_entry`, `schedule_override`, `schedule_replica`, `schedule_sync_rule`, `schedule_sync_target`, `secret`, `severity`, `status_page`, `status_page_component`, `status_page_component_availability`, `status_page_incident`, `status_page_maintenance`, `status_page_structure`, `team`, `user`, `users_show_paging_provider_result_v2`, `utilities_v1`, `workflow`, `workflow_run`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`secrets`](docs/features/secrets.html): Secret access: resolve the API credential through a provider chain, and exchange a refresh token for short-lived access tokens
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.


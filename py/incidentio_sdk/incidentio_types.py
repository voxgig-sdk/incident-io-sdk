# Typed models for the IncidentIo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class ActionRequired(TypedDict):
    assignee: dict
    created_at: str
    creator: dict
    description: str
    id: str
    incident_id: str
    status: str
    updated_at: str


class Action(ActionRequired, total=False):
    assignee_id: str
    completed_at: str


class ActionLoadMatch(TypedDict):
    id: str


class ActionListMatch(TypedDict, total=False):
    after: str
    created_at: dict
    incident_id: str
    incident_mode: str
    page_size: int
    updated_at: dict


class ActionCreateDataRequired(TypedDict):
    description: str
    incident_id: str


class ActionCreateData(ActionCreateDataRequired, total=False):
    assignee_id: str


class ActionUpdateDataRequired(TypedDict):
    id: str


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    assignee_id: str
    description: str
    status: str


class ActionRemoveMatch(TypedDict):
    id: str


class AlertRequired(TypedDict):
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class Alert(AlertRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertLoadMatch(TypedDict):
    id: str


class AlertListMatchRequired(TypedDict):
    page_size: int


class AlertListMatch(AlertListMatchRequired, total=False):
    after: str
    alert_group_id: dict
    alert_source: dict
    attribute: dict
    created_at: dict
    deduplication_key: dict
    has_note: dict
    include_maintenance_window: dict
    status: dict
    tag: dict
    updated_at: dict


class AlertCreateDataRequired(TypedDict):
    id: str
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    status: str
    title: str
    updated_at: str


class AlertCreateData(AlertCreateDataRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertAttributeRequired(TypedDict):
    array: bool
    id: str
    name: str
    required: bool
    type: str


class AlertAttribute(AlertAttributeRequired, total=False):
    emoji: str


class AlertAttributeLoadMatch(TypedDict):
    id: str


class AlertAttributeListMatch(TypedDict, total=False):
    array: bool
    emoji: str
    id: str
    name: str
    required: bool
    type: str


class AlertAttributeCreateDataRequired(TypedDict):
    array: bool
    name: str
    type: str


class AlertAttributeCreateData(AlertAttributeCreateDataRequired, total=False):
    emoji: str
    required: bool


class AlertAttributeUpdateDataRequired(TypedDict):
    id: str


class AlertAttributeUpdateData(AlertAttributeUpdateDataRequired, total=False):
    array: bool
    emoji: str
    name: str
    required: bool
    type: str


class AlertAttributeRemoveMatch(TypedDict):
    id: str


class AlertEventsV2Required(TypedDict):
    deduplication_key: str
    message: str
    status: str
    title: str


class AlertEventsV2(AlertEventsV2Required, total=False):
    description: str
    metadata: dict
    source_url: str


class AlertEventsV2CreateDataRequired(TypedDict):
    alert_source_config_id: str
    status: str
    title: str


class AlertEventsV2CreateData(AlertEventsV2CreateDataRequired, total=False):
    query: dict
    token: str
    deduplication_key: str
    description: str
    metadata: dict
    source_url: str


class AlertNoteRequired(TypedDict):
    content: str
    created_at: str
    creator: dict
    id: str
    images: list
    updated_at: str


class AlertNote(AlertNoteRequired, total=False):
    alert_group_id: str
    alert_id: str
    last_edited_at: str


class AlertNoteLoadMatch(TypedDict):
    id: str


class AlertNoteListMatch(TypedDict, total=False):
    after: str
    alert_group_id: str
    alert_id: str
    page_size: int


class AlertNoteCreateDataRequired(TypedDict):
    content: str


class AlertNoteCreateData(AlertNoteCreateDataRequired, total=False):
    alert_group_id: str
    alert_id: str


class AlertNoteUpdateDataRequired(TypedDict):
    id: str


class AlertNoteUpdateData(AlertNoteUpdateDataRequired, total=False):
    content: str


class AlertNoteRemoveMatch(TypedDict):
    id: str


class AlertRouteRequired(TypedDict):
    alert_sources: list
    condition_groups: list
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    id: str
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    version: int


class AlertRoute(AlertRouteRequired, total=False):
    created_at: str
    owning_team_ids: list
    updated_at: str


class AlertRouteLoadMatch(TypedDict):
    id: str


class AlertRouteListMatch(TypedDict, total=False):
    after: str
    page_size: int


class AlertRouteCreateDataRequired(TypedDict):
    alert_sources: list
    condition_groups: list
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str


class AlertRouteCreateData(AlertRouteCreateDataRequired, total=False):
    owning_team_ids: list


class AlertRouteUpdateDataRequired(TypedDict):
    id: str


class AlertRouteUpdateData(AlertRouteUpdateDataRequired, total=False):
    alert_sources: list
    condition_groups: list
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    owning_team_ids: list
    version: int


class AlertRouteRemoveMatch(TypedDict):
    id: str


class AlertSourceRequired(TypedDict):
    azure_devops_options: dict
    email_options: dict
    heartbeat_options: dict
    http_custom_options: dict
    id: str
    jira_options: dict
    name: str
    rate_limit_sharding: dict
    source_type: str
    template: dict


class AlertSource(AlertSourceRequired, total=False):
    alert_events_url: str
    auto_resolve_incident_alerts: bool
    auto_resolve_timeout_minutes: int
    disabled: bool
    filter_condition_groups: list
    fixed_team_id: str
    owning_team_ids: list
    secret_token: str


class AlertSourceLoadMatch(TypedDict):
    id: str


class AlertSourceListMatch(TypedDict, total=False):
    alert_events_url: str
    auto_resolve_incident_alerts: bool
    auto_resolve_timeout_minutes: int
    azure_devops_options: dict
    disabled: bool
    email_options: dict
    filter_condition_groups: list
    fixed_team_id: str
    heartbeat_options: dict
    http_custom_options: dict
    id: str
    jira_options: dict
    name: str
    owning_team_ids: list
    rate_limit_sharding: dict
    secret_token: str
    source_type: str
    template: dict


class AlertSourceCreateDataRequired(TypedDict):
    azure_devops_options: dict
    email_options: dict
    heartbeat_options: dict
    http_custom_options: dict
    jira_options: dict
    name: str
    rate_limit_sharding: dict
    source_type: str
    template: dict


class AlertSourceCreateData(AlertSourceCreateDataRequired, total=False):
    auto_resolve_incident_alerts: bool
    auto_resolve_timeout_minutes: int
    filter_condition_groups: list
    fixed_team_id: str
    owning_team_ids: list


class AlertSourceUpdateDataRequired(TypedDict):
    id: str


class AlertSourceUpdateData(AlertSourceUpdateDataRequired, total=False):
    auto_resolve_incident_alerts: bool
    auto_resolve_timeout_minutes: int
    azure_devops_options: dict
    disabled: bool
    email_options: dict
    filter_condition_groups: list
    fixed_team_id: str
    heartbeat_options: dict
    http_custom_options: dict
    jira_options: dict
    name: str
    owning_team_ids: list
    rate_limit_sharding: dict
    template: dict


class AlertSourceRemoveMatch(TypedDict):
    id: str


class AlertSourcesV2Required(TypedDict):
    source_type: str
    template: dict


class AlertSourcesV2(AlertSourcesV2Required, total=False):
    owning_team_ids: list


class AlertSourcesV2CreateDataRequired(TypedDict):
    source_type: str
    template: dict


class AlertSourcesV2CreateData(AlertSourcesV2CreateDataRequired, total=False):
    owning_team_ids: list


class AlertTagRequired(TypedDict):
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    name: str
    status: str
    title: str
    updated_at: str


class AlertTag(AlertTagRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertTagListMatch(TypedDict, total=False):
    after: str
    page_size: int
    search: str


class AlertTagCreateData(TypedDict):
    alert_id: str
    tags: list


class AlertsAddTagsResultV2Required(TypedDict):
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsAddTagsResultV2(AlertsAddTagsResultV2Required, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertsAddTagsResultV2CreateData(TypedDict):
    alert_id: str
    tags: list


class AlertsSetTagsResultV2Required(TypedDict):
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsSetTagsResultV2(AlertsSetTagsResultV2Required, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertsSetTagsResultV2CreateData(TypedDict):
    alert_id: str
    tags: list


class AlertsTransitionIncidentAlertResultV2Required(TypedDict):
    alert: dict
    alert_id: str
    id: str
    incident: dict
    incident_id: str
    state: str


class AlertsTransitionIncidentAlertResultV2(AlertsTransitionIncidentAlertResultV2Required, total=False):
    alert_route_id: str
    re_relate: bool


class AlertsTransitionIncidentAlertResultV2ListMatchRequired(TypedDict):
    page_size: int


class AlertsTransitionIncidentAlertResultV2ListMatch(AlertsTransitionIncidentAlertResultV2ListMatchRequired, total=False):
    after: str
    alert_id: str
    incident_id: str


class AlertsTransitionIncidentAlertResultV2CreateDataRequired(TypedDict):
    alert_id: str
    incident_id: str
    state: str


class AlertsTransitionIncidentAlertResultV2CreateData(AlertsTransitionIncidentAlertResultV2CreateDataRequired, total=False):
    re_relate: bool


class AnnouncementRuleRequired(TypedDict):
    condition_groups: list
    conditions_no_longer_apply_behaviour: str
    created_at: str
    id: str
    microsoft_teams_channel_ids: list
    mode: str
    name: str
    owning_team_ids: list
    slack_channel_ids: list
    update_sharing_mode: str
    updated_at: str


class AnnouncementRule(AnnouncementRuleRequired, total=False):
    private_incident_scope: str
    template_id: str


class AnnouncementRuleLoadMatch(TypedDict):
    id: str


class AnnouncementRuleListMatch(TypedDict, total=False):
    after: str
    page_size: int


class AnnouncementRuleCreateDataRequired(TypedDict):
    condition_groups: list
    mode: str
    name: str
    update_sharing_mode: str


class AnnouncementRuleCreateData(AnnouncementRuleCreateDataRequired, total=False):
    conditions_no_longer_apply_behaviour: str
    microsoft_teams_channel_ids: list
    owning_team_ids: list
    private_incident_scope: str
    slack_channel_ids: list
    template_id: str


class AnnouncementRuleUpdateDataRequired(TypedDict):
    id: str


class AnnouncementRuleUpdateData(AnnouncementRuleUpdateDataRequired, total=False):
    condition_groups: list
    conditions_no_longer_apply_behaviour: str
    microsoft_teams_channel_ids: list
    mode: str
    name: str
    owning_team_ids: list
    private_incident_scope: str
    slack_channel_ids: list
    template_id: str
    update_sharing_mode: str


class AnnouncementRuleRemoveMatch(TypedDict):
    id: str


class AnnouncementTemplate(TypedDict):
    actions: list
    fields: list
    id: str
    is_default: bool
    name: str
    owning_team_ids: list


class AnnouncementTemplateLoadMatch(TypedDict):
    id: str


class AnnouncementTemplateListMatch(TypedDict, total=False):
    actions: list
    fields: list
    id: str
    is_default: bool
    name: str
    owning_team_ids: list


class AnnouncementTemplateCreateDataRequired(TypedDict):
    name: str


class AnnouncementTemplateCreateData(AnnouncementTemplateCreateDataRequired, total=False):
    actions: list
    fields: list
    owning_team_ids: list


class AnnouncementTemplateUpdateDataRequired(TypedDict):
    id: str


class AnnouncementTemplateUpdateData(AnnouncementTemplateUpdateDataRequired, total=False):
    actions: list
    fields: list
    name: str
    owning_team_ids: list


class AnnouncementTemplateRemoveMatch(TypedDict):
    id: str


class ApiKeyRequired(TypedDict):
    created_at: str
    creator: dict
    id: str
    name: str
    role_names: list
    roles: list
    team_ids: list
    team_role_names: list
    team_roles: list
    token_last_issued_at: str


class ApiKey(ApiKeyRequired, total=False):
    comments: str
    last_used_at: str


class ApiKeyLoadMatch(TypedDict):
    id: str


class ApiKeyListMatch(TypedDict, total=False):
    after: str
    page_size: int


class ApiKeyCreateDataRequired(TypedDict):
    name: str
    role_names: list
    team_ids: list
    team_role_names: list


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    comments: str


class ApiKeyUpdateDataRequired(TypedDict):
    id: str


class ApiKeyUpdateData(ApiKeyUpdateDataRequired, total=False):
    comments: str
    name: str
    role_names: list
    team_ids: list
    team_role_names: list


class ApiKeyRemoveMatch(TypedDict):
    id: str


class CallRouteRequired(TypedDict):
    allowed_callers: list
    created_at: str
    current_state: str
    custom_language: str
    id: str
    name: str
    options: list
    path: list
    responder_caller_id: str
    updated_at: str
    use_caller_allowlist: bool


class CallRoute(CallRouteRequired, total=False):
    country_code: str
    phone_number: str
    phone_number_type: str


class CallRouteLoadMatch(TypedDict):
    id: str


class CallRouteListMatch(TypedDict, total=False):
    after: str
    page_size: int


class CallRouteUpdateDataRequired(TypedDict):
    id: str


class CallRouteUpdateData(CallRouteUpdateDataRequired, total=False):
    custom_language: str
    name: str
    path: list
    responder_caller_id: str
    use_caller_allowlist: bool


class CallRouteAllowedCallerRequired(TypedDict):
    id: str
    phone_number: str


class CallRouteAllowedCaller(CallRouteAllowedCallerRequired, total=False):
    name: str


class CallRouteAllowedCallerLoadMatch(TypedDict):
    call_route_id: str
    id: str


class CallRouteAllowedCallerListMatch(TypedDict):
    id: str


class CallRouteAllowedCallerCreateDataRequired(TypedDict):
    id: str
    phone_number: str


class CallRouteAllowedCallerCreateData(CallRouteAllowedCallerCreateDataRequired, total=False):
    name: str


class CallRouteAllowedCallerUpdateDataRequired(TypedDict):
    call_route_id: str
    id: str


class CallRouteAllowedCallerUpdateData(CallRouteAllowedCallerUpdateDataRequired, total=False):
    name: str
    phone_number: str


class CallRouteAllowedCallerRemoveMatch(TypedDict):
    call_route_id: str
    id: str


class CallRouteOption(TypedDict):
    digit: str
    id: str
    path: list
    prompt: str


class CallRouteOptionLoadMatch(TypedDict):
    call_route_id: str
    id: str


class CallRouteOptionListMatch(TypedDict):
    id: str


class CallRouteOptionCreateData(TypedDict):
    id: str
    digit: str
    path: list
    prompt: str


class CallRouteOptionUpdateDataRequired(TypedDict):
    call_route_id: str
    id: str


class CallRouteOptionUpdateData(CallRouteOptionUpdateDataRequired, total=False):
    digit: str
    path: list
    prompt: str


class CallRouteOptionRemoveMatch(TypedDict):
    call_route_id: str
    id: str


class CallSessionRequired(TypedDict):
    id: str
    incident_id: str
    started_at: str


class CallSession(CallSessionRequired, total=False):
    ended_at: str


class CallSessionListMatchRequired(TypedDict):
    incident_id: str


class CallSessionListMatch(CallSessionListMatchRequired, total=False):
    after: str
    page_size: int


class CallTranscriptEntry(TypedDict):
    content: str
    id: str
    medium: str
    participant_name: str
    timestamp: str


class CallTranscriptEntryListMatchRequired(TypedDict):
    call_session_id: str


class CallTranscriptEntryListMatch(CallTranscriptEntryListMatchRequired, total=False):
    after: str
    page_size: int


class CatalogEntryRequired(TypedDict):
    attribute_values: dict
    catalog_entry: dict
    catalog_type: dict
    catalog_type_id: str
    created_at: str
    id: str
    name: str
    updated_at: str


class CatalogEntry(CatalogEntryRequired, total=False):
    aliases: list
    archived_at: str
    external_id: str
    rank: int
    update_attributes: list


class CatalogEntryLoadMatchRequired(TypedDict):
    id: str


class CatalogEntryLoadMatch(CatalogEntryLoadMatchRequired, total=False):
    expand: bool


class CatalogEntryListMatchRequired(TypedDict):
    catalog_type_id: str
    page_size: int


class CatalogEntryListMatch(CatalogEntryListMatchRequired, total=False):
    after: str
    identifier: str


class CatalogEntryCreateDataRequired(TypedDict):
    attribute_values: dict
    catalog_type_id: str
    name: str


class CatalogEntryCreateData(CatalogEntryCreateDataRequired, total=False):
    aliases: list
    external_id: str
    rank: int


class CatalogEntryUpdateDataRequired(TypedDict):
    id: str


class CatalogEntryUpdateData(CatalogEntryUpdateDataRequired, total=False):
    aliases: list
    attribute_values: dict
    external_id: str
    name: str
    rank: int
    update_attributes: list


class CatalogEntryRemoveMatch(TypedDict):
    id: str


class CatalogResource(TypedDict):
    category: str
    description: str
    engine_resource_type: str
    label: str
    type: str
    value_docstring: str


class CatalogResourceListMatch(TypedDict, total=False):
    category: str
    description: str
    engine_resource_type: str
    label: str
    type: str
    value_docstring: str


class CatalogTypeRequired(TypedDict):
    annotations: dict
    categories: list
    color: str
    created_at: str
    description: str
    engine_resource_type: str
    icon: str
    id: str
    is_editable: bool
    name: str
    ranked: bool
    schema: dict
    type_name: str
    updated_at: str
    use_name_as_identifier: bool


class CatalogType(CatalogTypeRequired, total=False):
    dynamic_resource_parameter: str
    estimated_count: int
    is_team_type: bool
    last_synced_at: str
    owning_team_ids: list
    registry_type: str
    required_integrations: list
    source_repo_url: str


class CatalogTypeLoadMatch(TypedDict):
    id: str


class CatalogTypeListMatch(TypedDict, total=False):
    annotations: dict
    categories: list
    color: str
    created_at: str
    description: str
    dynamic_resource_parameter: str
    engine_resource_type: str
    estimated_count: int
    icon: str
    id: str
    is_editable: bool
    is_team_type: bool
    last_synced_at: str
    name: str
    owning_team_ids: list
    ranked: bool
    registry_type: str
    required_integrations: list
    schema: dict
    source_repo_url: str
    type_name: str
    updated_at: str
    use_name_as_identifier: bool


class CatalogTypeCreateDataRequired(TypedDict):
    description: str
    name: str


class CatalogTypeCreateData(CatalogTypeCreateDataRequired, total=False):
    annotations: dict
    categories: list
    color: str
    icon: str
    owning_team_ids: list
    ranked: bool
    source_repo_url: str
    type_name: str
    use_name_as_identifier: bool


class CatalogTypeUpdateDataRequired(TypedDict):
    id: str


class CatalogTypeUpdateData(CatalogTypeUpdateDataRequired, total=False):
    annotations: dict
    categories: list
    color: str
    description: str
    icon: str
    name: str
    owning_team_ids: list
    ranked: bool
    source_repo_url: str
    use_name_as_identifier: bool


class CatalogTypeRemoveMatch(TypedDict):
    id: str


class CatalogTypeSchemaRequired(TypedDict):
    annotations: dict
    attributes: list
    categories: list
    color: str
    created_at: str
    description: str
    engine_resource_type: str
    icon: str
    id: str
    is_editable: bool
    name: str
    ranked: bool
    schema: dict
    type_name: str
    updated_at: str
    use_name_as_identifier: bool
    version: int


class CatalogTypeSchema(CatalogTypeSchemaRequired, total=False):
    dynamic_resource_parameter: str
    estimated_count: int
    is_team_type: bool
    last_synced_at: str
    owning_team_ids: list
    registry_type: str
    required_integrations: list
    source_repo_url: str


class CatalogTypeSchemaCreateData(TypedDict):
    catalog_type_id: str
    attributes: list
    version: int


class CatalogV3Required(TypedDict):
    catalog_type_id: str
    entries: list


class CatalogV3(CatalogV3Required, total=False):
    update_attributes: list


class CatalogV3CreateDataRequired(TypedDict):
    catalog_type_id: str
    entries: list


class CatalogV3CreateData(CatalogV3CreateDataRequired, total=False):
    update_attributes: list


class CustomFieldRequired(TypedDict):
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    id: str
    name: str
    updated_at: str


class CustomField(CustomFieldRequired, total=False):
    catalog_type_id: str
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str


class CustomFieldLoadMatch(TypedDict):
    id: str


class CustomFieldListMatch(TypedDict, total=False):
    catalog_type_id: str
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str
    id: str
    name: str
    updated_at: str


class CustomFieldCreateDataRequired(TypedDict):
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    name: str


class CustomFieldCreateData(CustomFieldCreateDataRequired, total=False):
    catalog_type_id: str
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str


class CustomFieldUpdateDataRequired(TypedDict):
    id: str


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    description: str
    filter_by: dict
    fixed_filter: dict
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str
    name: str


class CustomFieldRemoveMatch(TypedDict):
    id: str


class CustomFieldOption(TypedDict):
    custom_field_id: str
    id: str
    sort_key: int
    value: str


class CustomFieldOptionLoadMatch(TypedDict):
    id: str


class CustomFieldOptionListMatchRequired(TypedDict):
    custom_field_id: str


class CustomFieldOptionListMatch(CustomFieldOptionListMatchRequired, total=False):
    after: str
    page_size: int


class CustomFieldOptionCreateDataRequired(TypedDict):
    custom_field_id: str
    value: str


class CustomFieldOptionCreateData(CustomFieldOptionCreateDataRequired, total=False):
    sort_key: int


class CustomFieldOptionUpdateDataRequired(TypedDict):
    id: str


class CustomFieldOptionUpdateData(CustomFieldOptionUpdateDataRequired, total=False):
    sort_key: int
    value: str


class CustomFieldOptionRemoveMatch(TypedDict):
    id: str


class EscalationRequired(TypedDict):
    created_at: str
    creator: dict
    description: str
    events: list
    id: str
    idempotency_key: str
    priority: dict
    related_alerts: list
    related_incidents: list
    status: str
    title: str
    updated_at: str


class Escalation(EscalationRequired, total=False):
    escalation_path_id: str
    incident_id: str
    user_ids: list


class EscalationLoadMatch(TypedDict):
    id: str


class EscalationListMatch(TypedDict, total=False):
    after: str
    alert: dict
    created_at: dict
    escalation_path: dict
    idempotency_key: dict
    incident: dict
    page_size: int
    status: dict
    updated_at: dict


class EscalationCreateDataRequired(TypedDict):
    idempotency_key: str
    title: str


class EscalationCreateData(EscalationCreateDataRequired, total=False):
    description: str
    escalation_path_id: str
    incident_id: str
    user_ids: list


class EscalationPathRequired(TypedDict):
    id: str
    kind: str
    name: str
    path: list
    repeat_config: dict
    team_ids: list


class EscalationPath(EscalationPathRequired, total=False):
    current_responders: list
    param_bindings: dict
    template_id: str
    working_hours: list


class EscalationPathLoadMatch(TypedDict):
    id: str


class EscalationPathListMatch(TypedDict, total=False):
    after: str
    page_size: int


class EscalationPathCreateDataRequired(TypedDict):
    name: str
    path: list
    repeat_config: dict


class EscalationPathCreateData(EscalationPathCreateDataRequired, total=False):
    kind: str
    param_bindings: dict
    team_ids: list
    template_id: str
    working_hours: list


class EscalationPathUpdateDataRequired(TypedDict):
    id: str


class EscalationPathUpdateData(EscalationPathUpdateDataRequired, total=False):
    kind: str
    name: str
    param_bindings: dict
    path: list
    repeat_config: dict
    team_ids: list
    template_id: str
    working_hours: list


class EscalationPathRemoveMatch(TypedDict):
    id: str


class EscalationPathTemplateRequired(TypedDict):
    expressions: list
    has_historical_escalation_path_versions: bool
    id: str
    name: str
    params: list
    path: list
    repeat_config: dict


class EscalationPathTemplate(EscalationPathTemplateRequired, total=False):
    description: str
    working_hours: list


class EscalationPathTemplateLoadMatch(TypedDict):
    id: str


class EscalationPathTemplateListMatch(TypedDict, total=False):
    after: str
    page_size: int
    search: str


class EscalationPathTemplateCreateDataRequired(TypedDict):
    name: str
    path: list
    repeat_config: dict


class EscalationPathTemplateCreateData(EscalationPathTemplateCreateDataRequired, total=False):
    description: str
    expressions: list
    params: list
    working_hours: list


class EscalationPathTemplateUpdateDataRequired(TypedDict):
    id: str


class EscalationPathTemplateUpdateData(EscalationPathTemplateUpdateDataRequired, total=False):
    description: str
    expressions: list
    name: str
    params: list
    path: list
    repeat_config: dict
    working_hours: list


class EscalationPathTemplateRemoveMatch(TypedDict):
    id: str


class EscalationsCheckEscalationPermissionsResultV2(TypedDict):
    response_options: list
    user_ids: list


class EscalationsCheckEscalationPermissionsResultV2CreateData(TypedDict):
    escalation_id: str
    user_ids: list


class EscalationsReassignEscalationResultV2(TypedDict, total=False):
    description: str
    escalation_path_id: str
    resolve_original: bool
    title: str
    user_ids: list


class EscalationsReassignEscalationResultV2CreateDataRequired(TypedDict):
    escalation_id: str


class EscalationsReassignEscalationResultV2CreateData(EscalationsReassignEscalationResultV2CreateDataRequired, total=False):
    description: str
    escalation_path_id: str
    resolve_original: bool
    title: str
    user_ids: list


class EscalationsV2(TypedDict):
    pass


class FollowUpRequired(TypedDict):
    assignee: dict
    assignee_team: dict
    category: dict
    created_at: str
    creator: dict
    external_issue_reference: dict
    id: str
    incident_id: str
    labels: list
    priority: dict
    status: str
    title: str
    updated_at: str


class FollowUp(FollowUpRequired, total=False):
    assignee_id: str
    assignee_team_id: str
    completed_at: str
    description: str
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str


class FollowUpLoadMatch(TypedDict):
    id: str


class FollowUpListMatch(TypedDict, total=False):
    after: str
    assignee_team_id: str
    created_at: dict
    incident_id: str
    incident_mode: str
    page_size: int
    updated_at: dict


class FollowUpCreateDataRequired(TypedDict):
    incident_id: str
    title: str


class FollowUpCreateData(FollowUpCreateDataRequired, total=False):
    assignee_id: str
    assignee_team_id: str
    description: str
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str
    labels: list


class FollowUpUpdateDataRequired(TypedDict):
    id: str


class FollowUpUpdateData(FollowUpUpdateDataRequired, total=False):
    assignee_id: str
    assignee_team_id: str
    description: str
    follow_up_category_id: str
    follow_up_priority_option_id: str
    labels: list
    status: str
    title: str


class FollowUpRemoveMatch(TypedDict):
    id: str


class FollowUpsConnectExternalIssueResultV2Required(TypedDict):
    assignee: dict
    assignee_team: dict
    created_at: str
    creator: dict
    external_issue_reference: dict
    id: str
    incident_id: str
    labels: list
    priority: dict
    provider: str
    status: str
    title: str
    updated_at: str
    url: str


class FollowUpsConnectExternalIssueResultV2(FollowUpsConnectExternalIssueResultV2Required, total=False):
    completed_at: str
    description: str


class FollowUpsConnectExternalIssueResultV2CreateData(TypedDict):
    follow_up_id: str
    provider: str
    url: str


class FollowUpsConnectExternalIssueResultV3Required(TypedDict):
    assignee: dict
    assignee_team: dict
    category: dict
    created_at: str
    creator: dict
    external_issue_reference: dict
    id: str
    incident_id: str
    labels: list
    priority: dict
    provider: str
    status: str
    title: str
    updated_at: str
    url: str


class FollowUpsConnectExternalIssueResultV3(FollowUpsConnectExternalIssueResultV3Required, total=False):
    completed_at: str
    description: str


class FollowUpsConnectExternalIssueResultV3CreateData(TypedDict):
    follow_up_id: str
    provider: str
    url: str


class FollowUpsCreateFromLinkResultV3(TypedDict):
    incident_id: str
    url: str


class FollowUpsCreateFromLinkResultV3CreateData(TypedDict):
    incident_id: str
    url: str


class HeartbeatV2(TypedDict, total=False):
    id: str


class HeartbeatV2LoadMatchRequired(TypedDict):
    id: str


class HeartbeatV2LoadMatch(HeartbeatV2LoadMatchRequired, total=False):
    token: str


class HeartbeatV2CreateDataRequired(TypedDict):
    id: str


class HeartbeatV2CreateData(HeartbeatV2CreateDataRequired, total=False):
    token: str


class Identity(TypedDict):
    dashboard_url: str
    name: str
    roles: list
    team_roles: list
    teams: list


class IdentityLoadMatch(TypedDict, total=False):
    dashboard_url: str
    name: str
    roles: list
    team_roles: list
    teams: list


class IncidentRequired(TypedDict):
    created_at: str
    creator: dict
    custom_field_entries: list
    external_issue_reference: dict
    id: str
    idempotency_key: str
    incident_role_assignments: list
    incident_status: dict
    incident_type: dict
    last_activity_at: str
    mode: str
    name: str
    reference: str
    severity: dict
    slack_channel_id: str
    slack_team_id: str
    team_ids: list
    updated_at: str
    visibility: str


class Incident(IncidentRequired, total=False):
    call_url: str
    debriefs: list
    duration_metrics: list
    has_debrief: bool
    incident_status_id: str
    incident_timestamp_values: list
    incident_type_id: str
    ms_teams_channel_url: str
    permalink: str
    postmortem_document_ids: list
    postmortem_document_url: str
    retrospective_incident_options: dict
    severity_id: str
    slack_channel_name: str
    slack_channel_name_override: str
    slack_channel_url: str
    summary: str
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


class IncidentLoadMatch(TypedDict):
    id: str


class IncidentListMatch(TypedDict, total=False):
    after: str
    created_at: dict
    custom_field: dict
    filter_mode: str
    incident_role: dict
    incident_type: dict
    mode: dict
    page_size: int
    severity: dict
    sort_by: str
    status: dict
    status_category: dict
    updated_at: dict


class IncidentCreateDataRequired(TypedDict):
    idempotency_key: str
    visibility: str


class IncidentCreateData(IncidentCreateDataRequired, total=False):
    custom_field_entries: list
    incident_role_assignments: list
    incident_status_id: str
    incident_timestamp_values: list
    incident_type_id: str
    mode: str
    name: str
    retrospective_incident_options: dict
    severity_id: str
    slack_channel_name_override: str
    slack_team_id: str
    summary: str


class IncidentActivityLogEntryRequired(TypedDict):
    created_at: str
    id: str
    incident_id: str
    occurred_at: str
    title: str
    type: str


class IncidentActivityLogEntry(IncidentActivityLogEntryRequired, total=False):
    content: dict


class IncidentActivityLogEntryListMatchRequired(TypedDict):
    incident_id: str


class IncidentActivityLogEntryListMatch(IncidentActivityLogEntryListMatchRequired, total=False):
    after: str
    id: list
    page_size: int


class IncidentAttachment(TypedDict):
    id: str
    incident_id: str
    resource: dict


class IncidentAttachmentListMatch(TypedDict, total=False):
    external_id: str
    incident_id: str
    resource_type: str


class IncidentAttachmentCreateData(TypedDict):
    incident_id: str
    resource: dict


class IncidentAttachmentRemoveMatch(TypedDict):
    id: str


class IncidentFormRequired(TypedDict):
    created_at: str
    expressions: list
    form_type: str
    id: str
    updated_at: str


class IncidentForm(IncidentFormRequired, total=False):
    incident_type_id: str
    lifecycle_elements: list


class IncidentFormLoadMatch(TypedDict):
    id: str


class IncidentFormListMatch(TypedDict, total=False):
    after: str
    page_size: int


class IncidentFormCreateDataRequired(TypedDict):
    expressions: list
    form_type: str


class IncidentFormCreateData(IncidentFormCreateDataRequired, total=False):
    incident_type_id: str
    lifecycle_elements: list


class IncidentFormUpdateDataRequired(TypedDict):
    id: str


class IncidentFormUpdateData(IncidentFormUpdateDataRequired, total=False):
    expressions: list
    form_type: str
    incident_type_id: str
    lifecycle_elements: list


class IncidentFormRemoveMatch(TypedDict):
    id: str


class IncidentMembership(TypedDict):
    incident_id: str
    user_id: str


class IncidentMembershipCreateData(TypedDict):
    incident_id: str
    user_id: str


class IncidentMembershipsV1(TypedDict):
    incident_id: str
    user_id: str


class IncidentMembershipsV1CreateData(TypedDict):
    incident_id: str
    user_id: str


class IncidentParticipant(TypedDict):
    active: list
    passive: list


class IncidentParticipantLoadMatch(TypedDict):
    incident_id: str


class IncidentParticipantWorkloadRequired(TypedDict):
    user: dict
    workload: dict


class IncidentParticipantWorkload(IncidentParticipantWorkloadRequired, total=False):
    archived_at: str
    participant_type: str


class IncidentParticipantWorkloadListMatch(TypedDict):
    incident_id: str


class IncidentRelationship(TypedDict):
    id: str
    incident: dict


class IncidentRelationshipListMatchRequired(TypedDict):
    incident_id: str


class IncidentRelationshipListMatch(IncidentRelationshipListMatchRequired, total=False):
    after: str
    page_size: int


class IncidentRole(TypedDict):
    created_at: str
    description: str
    id: str
    instructions: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleLoadMatch(TypedDict):
    id: str


class IncidentRoleListMatch(TypedDict, total=False):
    created_at: str
    description: str
    id: str
    instructions: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleCreateData(TypedDict):
    description: str
    instructions: str
    name: str
    shortform: str


class IncidentRoleUpdateDataRequired(TypedDict):
    id: str


class IncidentRoleUpdateData(IncidentRoleUpdateDataRequired, total=False):
    description: str
    instructions: str
    name: str
    shortform: str


class IncidentRoleRemoveMatch(TypedDict):
    id: str


class IncidentStatus(TypedDict):
    category: str
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class IncidentStatusLoadMatch(TypedDict):
    id: str


class IncidentStatusListMatch(TypedDict, total=False):
    category: str
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class IncidentStatusCreateDataRequired(TypedDict):
    category: str
    description: str
    name: str


class IncidentStatusCreateData(IncidentStatusCreateDataRequired, total=False):
    rank: int


class IncidentStatusUpdateDataRequired(TypedDict):
    id: str


class IncidentStatusUpdateData(IncidentStatusUpdateDataRequired, total=False):
    description: str
    name: str
    rank: int


class IncidentStatusRemoveMatch(TypedDict):
    id: str


class IncidentTeamMembership(TypedDict):
    incident_id: str
    team_id: str


class IncidentTeamMembershipCreateData(TypedDict):
    incident_id: str
    team_id: str


class IncidentTeamMembershipsV1(TypedDict):
    incident_id: str
    team_id: str


class IncidentTeamMembershipsV1CreateData(TypedDict):
    incident_id: str
    team_id: str


class IncidentTemplateRequired(TypedDict):
    created_at: str
    id: str
    name: str
    template: dict
    updated_at: str


class IncidentTemplate(IncidentTemplateRequired, total=False):
    expressions: list


class IncidentTemplateLoadMatch(TypedDict):
    id: str


class IncidentTemplateListMatch(TypedDict, total=False):
    after: str
    page_size: int


class IncidentTemplateCreateDataRequired(TypedDict):
    name: str
    template: dict


class IncidentTemplateCreateData(IncidentTemplateCreateDataRequired, total=False):
    expressions: list


class IncidentTemplateUpdateDataRequired(TypedDict):
    id: str


class IncidentTemplateUpdateData(IncidentTemplateUpdateDataRequired, total=False):
    expressions: list
    name: str
    template: dict


class IncidentTemplateRemoveMatch(TypedDict):
    id: str


class IncidentTemplatesValidateResultV1Required(TypedDict):
    name: str
    template: dict
    warnings: list


class IncidentTemplatesValidateResultV1(IncidentTemplatesValidateResultV1Required, total=False):
    expressions: list


class IncidentTemplatesValidateResultV1CreateDataRequired(TypedDict):
    name: str
    template: dict


class IncidentTemplatesValidateResultV1CreateData(IncidentTemplatesValidateResultV1CreateDataRequired, total=False):
    expressions: list


class IncidentTimelineItemRequired(TypedDict):
    created_at: str
    creator: dict
    id: str
    idempotency_key: str
    incident_id: str
    timestamp: str
    title: str
    updated_at: str


class IncidentTimelineItem(IncidentTimelineItemRequired, total=False):
    activity_log_id: str
    description: str


class IncidentTimelineItemListMatchRequired(TypedDict):
    incident_id: str


class IncidentTimelineItemListMatch(IncidentTimelineItemListMatchRequired, total=False):
    after: str
    page_size: int


class IncidentTimelineItemCreateDataRequired(TypedDict):
    idempotency_key: str
    incident_id: str
    timestamp: str
    title: str


class IncidentTimelineItemCreateData(IncidentTimelineItemCreateDataRequired, total=False):
    description: str


class IncidentTimelineItemUpdateDataRequired(TypedDict):
    id: str


class IncidentTimelineItemUpdateData(IncidentTimelineItemUpdateDataRequired, total=False):
    description: str
    timestamp: str
    title: str


class IncidentTimestamp(TypedDict):
    id: str
    name: str
    rank: int


class IncidentTimestampLoadMatch(TypedDict):
    id: str


class IncidentTimestampListMatch(TypedDict, total=False):
    id: str
    name: str
    rank: int


class IncidentTypeRequired(TypedDict):
    create_in_triage: str
    created_at: str
    description: str
    id: str
    is_default: bool
    name: str
    private_incidents_only: bool
    updated_at: str


class IncidentType(IncidentTypeRequired, total=False):
    owning_team_ids: list


class IncidentTypeLoadMatch(TypedDict):
    id: str


class IncidentTypeListMatch(TypedDict, total=False):
    create_in_triage: str
    created_at: str
    description: str
    id: str
    is_default: bool
    name: str
    owning_team_ids: list
    private_incidents_only: bool
    updated_at: str


class IncidentUpdateRequired(TypedDict):
    created_at: str
    id: str
    idempotency_key: str
    incident_id: str
    new_incident_status: dict
    new_severity: dict
    updater: dict


class IncidentUpdate(IncidentUpdateRequired, total=False):
    merged_into_incident_id: str
    message: str
    to_incident_status_id: str
    to_severity_id: str


class IncidentUpdateListMatch(TypedDict, total=False):
    after: str
    incident_id: str
    page_size: int


class IncidentUpdateCreateDataRequired(TypedDict):
    idempotency_key: str
    incident_id: str


class IncidentUpdateCreateData(IncidentUpdateCreateDataRequired, total=False):
    message: str
    to_incident_status_id: str
    to_severity_id: str


class IncidentsImportPostmortemDocumentResultV2(TypedDict):
    content: str
    title: str


class IncidentsImportPostmortemDocumentResultV2CreateData(TypedDict):
    incident_id: str
    content: str
    title: str


class IpAllowlistRequired(TypedDict):
    allowlist: list
    enabled: bool
    version: int


class IpAllowlist(IpAllowlistRequired, total=False):
    updated_at: str


class IpAllowlistLoadMatch(TypedDict, total=False):
    allowlist: list
    enabled: bool
    updated_at: str
    version: int


class IpAllowlistUpdateData(TypedDict, total=False):
    allowlist: list
    enabled: bool
    version: int


class IpRange(TypedDict):
    cidr: str
    description: str


class IpRangeListMatch(TypedDict, total=False):
    cidr: str
    description: str


class MaintenanceWindowRequired(TypedDict):
    alert_condition_groups: list
    created_at: str
    end_at: str
    id: str
    lead: dict
    name: str
    reroute_on_end: bool
    resolve_on_end: bool
    show_in_sidebar: bool
    start_at: str
    updated_at: str


class MaintenanceWindow(MaintenanceWindowRequired, total=False):
    archived_at: str
    escalation_targets: list
    incident_id: str
    notification_message: str
    notify_channels: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    owning_team_ids: list


class MaintenanceWindowLoadMatch(TypedDict):
    id: str


class MaintenanceWindowListMatch(TypedDict, total=False):
    after: str
    page_size: int
    status: str


class MaintenanceWindowCreateDataRequired(TypedDict):
    alert_condition_groups: list
    end_at: str
    lead: dict
    name: str
    show_in_sidebar: bool
    start_at: str


class MaintenanceWindowCreateData(MaintenanceWindowCreateDataRequired, total=False):
    escalation_targets: list
    incident_id: str
    notification_message: str
    notify_channels: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    owning_team_ids: list
    reroute_on_end: bool
    resolve_on_end: bool


class MaintenanceWindowUpdateDataRequired(TypedDict):
    id: str


class MaintenanceWindowUpdateData(MaintenanceWindowUpdateDataRequired, total=False):
    alert_condition_groups: list
    end_at: str
    escalation_targets: list
    incident_id: str
    lead: dict
    name: str
    notification_message: str
    notify_channels: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    owning_team_ids: list
    reroute_on_end: bool
    resolve_on_end: bool
    show_in_sidebar: bool
    start_at: str


class MaintenanceWindowRemoveMatchRequired(TypedDict):
    id: str


class MaintenanceWindowRemoveMatch(MaintenanceWindowRemoveMatchRequired, total=False):
    force: bool


class ManagedResourceRequired(TypedDict):
    annotations: dict
    managed_by: str
    resource_id: str
    resource_type: str


class ManagedResource(ManagedResourceRequired, total=False):
    source_url: str


class ManagedResourceCreateData(TypedDict):
    annotations: dict
    resource_id: str
    resource_type: str


class OnCallNotificationMethodPublicV2(TypedDict):
    address: str
    id: str
    is_usable: bool
    method_type: str
    phone_details: dict


class OnCallNotificationMethodPublicV2ListMatch(TypedDict):
    user_id: str


class OnCallNotificationPauseRequired(TypedDict):
    created_at: str
    ends_at: str
    id: str
    starts_at: str
    updated_at: str
    user_id: str


class OnCallNotificationPause(OnCallNotificationPauseRequired, total=False):
    reason: str


class OnCallNotificationPauseLoadMatch(TypedDict):
    id: str


OnCallNotificationPauseListMatch = TypedDict('OnCallNotificationPauseListMatch', {
    "after": str,
    "from": str,
    "page_size": int,
    "to": str,
}, total=False)


class OnCallNotificationRulePublicV2Required(TypedDict):
    app: dict
    id: str
    method_target: dict
    method_type: str
    phone: dict
    rule_type: str


class OnCallNotificationRulePublicV2(OnCallNotificationRulePublicV2Required, total=False):
    delay_seconds: int


class OnCallNotificationRulePublicV2ListMatch(TypedDict):
    user_id: str


class PayConfigRequired(TypedDict):
    base_rate_cents: int
    created_at: str
    currency: str
    id: str
    name: str
    one_off_rules: list
    rate_time_unit: str
    timezone: str
    updated_at: str
    weekly_rules: list


class PayConfig(PayConfigRequired, total=False):
    published_at: str


class PayConfigLoadMatch(TypedDict):
    id: str


class PayConfigListMatch(TypedDict, total=False):
    after: str
    page_size: int


class PayConfigCreateDataRequired(TypedDict):
    base_rate_cents: int
    currency: str
    name: str
    rate_time_unit: str
    timezone: str


class PayConfigCreateData(PayConfigCreateDataRequired, total=False):
    one_off_rules: list
    weekly_rules: list


class PayConfigUpdateDataRequired(TypedDict):
    id: str


class PayConfigUpdateData(PayConfigUpdateDataRequired, total=False):
    base_rate_cents: int
    currency: str
    name: str
    rate_time_unit: str
    timezone: str


class PayConfigRemoveMatch(TypedDict):
    id: str


class PayConfigOneOffRule(TypedDict):
    end_at: str
    id: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigOneOffRuleLoadMatch(TypedDict):
    id: str
    pay_config_id: str


class PayConfigOneOffRuleListMatch(TypedDict):
    id: str


class PayConfigOneOffRuleCreateData(TypedDict):
    id: str
    end_at: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigOneOffRuleUpdateDataRequired(TypedDict):
    id: str
    pay_config_id: str


class PayConfigOneOffRuleUpdateData(PayConfigOneOffRuleUpdateDataRequired, total=False):
    end_at: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigOneOffRuleRemoveMatch(TypedDict):
    id: str
    pay_config_id: str


class PayConfigWeeklyRule(TypedDict):
    end_time: str
    id: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigWeeklyRuleLoadMatch(TypedDict):
    id: str
    pay_config_id: str


class PayConfigWeeklyRuleListMatch(TypedDict):
    id: str


class PayConfigWeeklyRuleCreateData(TypedDict):
    id: str
    end_time: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigWeeklyRuleUpdateDataRequired(TypedDict):
    id: str
    pay_config_id: str


class PayConfigWeeklyRuleUpdateData(PayConfigWeeklyRuleUpdateDataRequired, total=False):
    end_time: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigWeeklyRuleRemoveMatch(TypedDict):
    id: str
    pay_config_id: str


class PayReportRequired(TypedDict):
    created_at: str
    end_date: str
    id: str
    name: str
    overlapping_shifts: str
    pay_config_expression: dict
    schedule_ids: list
    start_date: str
    status: str
    unpaid_shifts: str
    updated_at: str


class PayReport(PayReportRequired, total=False):
    creator: dict
    error_code: str
    error_message: str
    pay_config_id: str
    published_at: str
    rotation_filters: list
    total_duration_seconds: int
    total_pay_by_currency: dict


class PayReportLoadMatch(TypedDict):
    id: str


class PayReportListMatch(TypedDict, total=False):
    after: str
    page_size: int


class PayReportCreateDataRequired(TypedDict):
    end_date: str
    name: str
    pay_config_expression: dict
    schedule_ids: list
    start_date: str


class PayReportCreateData(PayReportCreateDataRequired, total=False):
    overlapping_shifts: str
    pay_config_id: str
    rotation_filters: list
    unpaid_shifts: str


class PayReportRemoveMatch(TypedDict):
    id: str


class PayReportsPublishResultV2Required(TypedDict):
    cc_emails: list
    created_at: str
    end_date: str
    id: str
    name: str
    overlapping_shifts: str
    schedule_ids: list
    send_user_breakdowns: str
    start_date: str
    status: str
    unpaid_shifts: str
    updated_at: str


class PayReportsPublishResultV2(PayReportsPublishResultV2Required, total=False):
    creator: dict
    error_code: str
    error_message: str
    published_at: str
    total_duration_seconds: int
    total_pay_by_currency: dict


class PayReportsPublishResultV2CreateData(TypedDict):
    pay_report_id: str
    cc_emails: list
    send_user_breakdowns: str


class PayReportsUnpublishResultV2Required(TypedDict):
    created_at: str
    end_date: str
    id: str
    name: str
    overlapping_shifts: str
    schedule_ids: list
    start_date: str
    status: str
    unpaid_shifts: str
    unpublish_reason: str
    updated_at: str


class PayReportsUnpublishResultV2(PayReportsUnpublishResultV2Required, total=False):
    creator: dict
    error_code: str
    error_message: str
    published_at: str
    total_duration_seconds: int
    total_pay_by_currency: dict


class PayReportsUnpublishResultV2CreateData(TypedDict):
    pay_report_id: str
    unpublish_reason: str


class PayReportsV2(TypedDict):
    pass


class PayReportsV2LoadMatch(TypedDict):
    pay_report_id: str


class PolicyRequired(TypedDict):
    assignment_rules: dict
    conditions: list
    created_at: str
    debrief: dict
    follow_up: dict
    id: str
    name: str
    policy_type: str
    post_mortem: dict
    schedule: dict
    status: str
    updated_at: str


class Policy(PolicyRequired, total=False):
    description: str
    expressions: list
    on_call_readiness: dict


class PolicyLoadMatch(TypedDict):
    id: str


class PolicyListMatch(TypedDict, total=False):
    after: str
    page_size: int
    policy_type: str


class PolicyCreateDataRequired(TypedDict):
    assignment_rules: dict
    conditions: list
    debrief: dict
    description: str
    follow_up: dict
    name: str
    policy_type: str
    post_mortem: dict
    schedule: dict


class PolicyCreateData(PolicyCreateDataRequired, total=False):
    expressions: list
    on_call_readiness: dict
    status: str


class PolicyUpdateDataRequired(TypedDict):
    id: str


class PolicyUpdateData(PolicyUpdateDataRequired, total=False):
    assignment_rules: dict
    conditions: list
    debrief: dict
    description: str
    expressions: list
    follow_up: dict
    name: str
    on_call_readiness: dict
    policy_type: str
    post_mortem: dict
    schedule: dict
    status: str


class PolicyRemoveMatch(TypedDict):
    id: str


class PolicyFindingRequired(TypedDict):
    created_at: str
    debrief: dict
    dismissal: dict
    follow_up: dict
    id: str
    last_checked_at: str
    on_call_readiness: dict
    policy_id: str
    policy_type: str
    post_mortem: dict
    responsible_users: list
    schedule: dict
    shift_conflict: dict
    state: str
    updated_at: str
    vacation_conflict: dict


class PolicyFinding(PolicyFindingRequired, total=False):
    days: int
    due_at: str


class PolicyFindingLoadMatch(TypedDict):
    id: str


class PolicyFindingListMatch(TypedDict, total=False):
    after: str
    page_size: int
    policy_id: str


class PolicyFindingsDismissResultV2Required(TypedDict):
    created_at: str
    debrief: dict
    dismissal: dict
    follow_up: dict
    id: str
    last_checked_at: str
    on_call_readiness: dict
    policy_id: str
    policy_type: str
    post_mortem: dict
    reason: str
    responsible_users: list
    schedule: dict
    shift_conflict: dict
    state: str
    updated_at: str
    vacation_conflict: dict


class PolicyFindingsDismissResultV2(PolicyFindingsDismissResultV2Required, total=False):
    days: int
    due_at: str


class PolicyFindingsDismissResultV2CreateData(TypedDict):
    policy_finding_id: str
    reason: str


class PolicyFindingsRestoreResultV2Required(TypedDict):
    created_at: str
    debrief: dict
    dismissal: dict
    follow_up: dict
    id: str
    last_checked_at: str
    on_call_readiness: dict
    policy_id: str
    policy_type: str
    post_mortem: dict
    responsible_users: list
    schedule: dict
    shift_conflict: dict
    state: str
    updated_at: str
    vacation_conflict: dict


class PolicyFindingsRestoreResultV2(PolicyFindingsRestoreResultV2Required, total=False):
    days: int
    due_at: str


class PolicyFindingsRestoreResultV2CreateDataRequired(TypedDict):
    policy_finding_id: str
    created_at: str
    debrief: dict
    dismissal: dict
    follow_up: dict
    id: str
    last_checked_at: str
    on_call_readiness: dict
    policy_id: str
    policy_type: str
    post_mortem: dict
    responsible_users: list
    schedule: dict
    shift_conflict: dict
    state: str
    updated_at: str
    vacation_conflict: dict


class PolicyFindingsRestoreResultV2CreateData(PolicyFindingsRestoreResultV2CreateDataRequired, total=False):
    days: int
    due_at: str


class PostmortemDocument(TypedDict):
    created_at: str
    document_url: str
    editors: list
    exported_urls: list
    id: str
    incident_id: str
    status: str
    title: str
    type: str
    updated_at: str


class PostmortemDocumentLoadMatch(TypedDict):
    id: str


class PostmortemDocumentListMatch(TypedDict, total=False):
    after: str
    incident_id: str
    page_size: int
    sort_by: str


class PostmortemDocumentUpdateDataRequired(TypedDict):
    id: str


class PostmortemDocumentUpdateData(PostmortemDocumentUpdateDataRequired, total=False):
    status: str


class PostmortemDocumentsAttachResultV1Required(TypedDict):
    incident_id: str
    permalink: str


class PostmortemDocumentsAttachResultV1(PostmortemDocumentsAttachResultV1Required, total=False):
    document_provider: str


class PostmortemDocumentsAttachResultV1CreateDataRequired(TypedDict):
    incident_id: str
    permalink: str


class PostmortemDocumentsAttachResultV1CreateData(PostmortemDocumentsAttachResultV1CreateDataRequired, total=False):
    document_provider: str


class PostmortemDocumentsShowContentResultV1(TypedDict):
    markdown: str


class PostmortemDocumentsShowContentResultV1LoadMatch(TypedDict):
    postmortem_document_id: str


class ScheduleRequired(TypedDict):
    annotations: dict
    config: dict
    created_at: str
    holidays_public_config: dict
    id: str
    name: str
    permalink: str
    team_ids: list
    timezone: str
    updated_at: str


class Schedule(ScheduleRequired, total=False):
    current_shifts: list
    next_shifts: list


class ScheduleLoadMatch(TypedDict):
    id: str


class ScheduleListMatch(TypedDict, total=False):
    after: str
    page_size: int


class ScheduleCreateDataRequired(TypedDict):
    holidays_public_config: dict


class ScheduleCreateData(ScheduleCreateDataRequired, total=False):
    annotations: dict
    config: dict
    name: str
    team_ids: list
    timezone: str


class ScheduleUpdateDataRequired(TypedDict):
    id: str


class ScheduleUpdateData(ScheduleUpdateDataRequired, total=False):
    annotations: dict
    config: dict
    holidays_public_config: dict
    name: str
    team_ids: list
    timezone: str


class ScheduleRemoveMatch(TypedDict):
    id: str


class ScheduleEntriesListPayloadV2Required(TypedDict):
    final: list
    overrides: list
    schedule: dict
    scheduled: list


class ScheduleEntriesListPayloadV2(ScheduleEntriesListPayloadV2Required, total=False):
    entry_window_end: str
    entry_window_start: str


class ScheduleEntriesListPayloadV2CreateDataRequired(TypedDict):
    schedule_id: str
    schedule: dict


class ScheduleEntriesListPayloadV2CreateData(ScheduleEntriesListPayloadV2CreateDataRequired, total=False):
    entry_window_end: str
    entry_window_start: str


class ScheduleEntry(TypedDict):
    pagination_meta: dict
    schedule_entries: dict


class ScheduleEntryLoadMatchRequired(TypedDict):
    schedule_id: str


class ScheduleEntryLoadMatch(ScheduleEntryLoadMatchRequired, total=False):
    entry_window_end: str
    entry_window_start: str


class ScheduleOverride(TypedDict):
    created_at: str
    end_at: str
    id: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    updated_at: str
    user: dict


class ScheduleOverrideLoadMatch(TypedDict):
    id: str


class ScheduleOverrideListMatchRequired(TypedDict):
    schedule_id: str


class ScheduleOverrideListMatch(ScheduleOverrideListMatchRequired, total=False):
    after: str
    layer_id: str
    page_size: int
    rotation_id: str


class ScheduleOverrideCreateData(TypedDict):
    end_at: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    user: dict


class ScheduleOverrideUpdateDataRequired(TypedDict):
    id: str


class ScheduleOverrideUpdateData(ScheduleOverrideUpdateDataRequired, total=False):
    end_at: str
    layer_id: str
    rotation_id: str
    start_at: str
    user: dict


class ScheduleOverrideRemoveMatch(TypedDict):
    id: str


class ScheduleReplicaRequired(TypedDict):
    created_at: str
    id: str
    replica_fallback_user_id: str
    replica_provider: str
    replica_provider_id: str
    schedule_id: str
    sources: list
    updated_at: str
    user_statuses: list


class ScheduleReplica(ScheduleReplicaRequired, total=False):
    last_sync_error: str
    last_synced_at: str
    mirror_window_days: int


class ScheduleReplicaLoadMatch(TypedDict):
    id: str
    schedule_id: str


class ScheduleReplicaListMatch(TypedDict):
    id: str


class ScheduleReplicaCreateDataRequired(TypedDict):
    id: str
    replica_fallback_user_id: str
    replica_provider: str
    replica_provider_id: str
    sources: list


class ScheduleReplicaCreateData(ScheduleReplicaCreateDataRequired, total=False):
    mirror_window_days: int


class ScheduleReplicaRemoveMatch(TypedDict):
    id: str
    schedule_id: str


class ScheduleSyncRuleRequired(TypedDict):
    created_at: str
    id: str
    permanent_member_user_ids: list
    schedule_id: str
    schedule_sync_target: dict
    schedule_sync_target_id: str
    sync_type: str
    updated_at: str


class ScheduleSyncRule(ScheduleSyncRuleRequired, total=False):
    annotations: dict
    rotation_id: str


class ScheduleSyncRuleLoadMatch(TypedDict):
    id: str
    schedule_id: str


class ScheduleSyncRuleListMatchRequired(TypedDict):
    id: str


class ScheduleSyncRuleListMatch(ScheduleSyncRuleListMatchRequired, total=False):
    after: str
    page_size: int


class ScheduleSyncRuleCreateDataRequired(TypedDict):
    id: str
    schedule_sync_target_id: str
    sync_type: str


class ScheduleSyncRuleCreateData(ScheduleSyncRuleCreateDataRequired, total=False):
    annotations: dict
    permanent_member_user_ids: list
    rotation_id: str


class ScheduleSyncRuleUpdateDataRequired(TypedDict):
    id: str
    schedule_id: str


class ScheduleSyncRuleUpdateData(ScheduleSyncRuleUpdateDataRequired, total=False):
    annotations: dict
    permanent_member_user_ids: list
    sync_type: str


class ScheduleSyncRuleRemoveMatch(TypedDict):
    id: str
    schedule_id: str


class ScheduleSyncTargetRequired(TypedDict):
    add_bot_to_group: bool
    created_at: str
    id: str
    linked_schedules: list
    new_slack_user_group: dict
    slack_team_id: str
    slack_user_group_id: str
    updated_at: str


class ScheduleSyncTarget(ScheduleSyncTargetRequired, total=False):
    annotations: dict


class ScheduleSyncTargetLoadMatch(TypedDict):
    id: str


class ScheduleSyncTargetListMatch(TypedDict, total=False):
    after: str
    page_size: int


class ScheduleSyncTargetCreateDataRequired(TypedDict):
    add_bot_to_group: bool
    new_slack_user_group: dict


class ScheduleSyncTargetCreateData(ScheduleSyncTargetCreateDataRequired, total=False):
    annotations: dict
    slack_user_group_id: str


class ScheduleSyncTargetUpdateDataRequired(TypedDict):
    id: str


class ScheduleSyncTargetUpdateData(ScheduleSyncTargetUpdateDataRequired, total=False):
    add_bot_to_group: bool
    annotations: dict


class ScheduleSyncTargetRemoveMatch(TypedDict):
    id: str


class SecretRequired(TypedDict):
    created_at: str
    id: str
    name: str
    secret: dict
    updated_at: str
    value: str
    version: int
    versions: list


class Secret(SecretRequired, total=False):
    description: str
    last_four_chars: str
    owning_team_ids: list


class SecretLoadMatch(TypedDict):
    id: str


class SecretListMatch(TypedDict, total=False):
    after: str
    page_size: int
    team_id: list


class SecretCreateDataRequired(TypedDict):
    name: str
    value: str


class SecretCreateData(SecretCreateDataRequired, total=False):
    description: str
    owning_team_ids: list


class SecretUpdateDataRequired(TypedDict):
    id: str


class SecretUpdateData(SecretUpdateDataRequired, total=False):
    description: str
    name: str
    owning_team_ids: list


class SecretRemoveMatch(TypedDict):
    id: str


class Severity(TypedDict):
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class SeverityLoadMatch(TypedDict):
    id: str


class SeverityListMatch(TypedDict, total=False):
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class SeverityCreateDataRequired(TypedDict):
    description: str
    name: str


class SeverityCreateData(SeverityCreateDataRequired, total=False):
    rank: int


class SeverityUpdateDataRequired(TypedDict):
    id: str


class SeverityUpdateData(SeverityUpdateDataRequired, total=False):
    description: str
    name: str
    rank: int


class SeverityRemoveMatch(TypedDict):
    id: str


class StatusPageRequired(TypedDict):
    id: str
    name: str


class StatusPage(StatusPageRequired, total=False):
    description: str
    public_url: str


class StatusPageLoadMatch(TypedDict):
    id: str


class StatusPageListMatch(TypedDict, total=False):
    after: str
    page_size: int


class StatusPageComponentRequired(TypedDict):
    id: str
    management_meta: dict
    name: str


class StatusPageComponent(StatusPageComponentRequired, total=False):
    description: str


class StatusPageComponentLoadMatch(TypedDict):
    id: str


class StatusPageComponentListMatch(TypedDict, total=False):
    description: str
    id: str
    management_meta: dict
    name: str


class StatusPageComponentCreateDataRequired(TypedDict):
    name: str


class StatusPageComponentCreateData(StatusPageComponentCreateDataRequired, total=False):
    description: str


class StatusPageComponentUpdateDataRequired(TypedDict):
    id: str


class StatusPageComponentUpdateData(StatusPageComponentUpdateDataRequired, total=False):
    description: str
    name: str


class StatusPageComponentRemoveMatch(TypedDict):
    id: str


class StatusPageComponentAvailabilityRequired(TypedDict):
    component_id: str
    data_available_since: str
    end_at: str
    start_at: str
    status_page_id: str


class StatusPageComponentAvailability(StatusPageComponentAvailabilityRequired, total=False):
    availability_percent: str


class StatusPageComponentAvailabilityLoadMatch(TypedDict):
    component_id: str
    status_page_id: str
    end_at: str
    start_at: str


class StatusPageIncidentRequired(TypedDict):
    component_impacts: list
    id: str
    idempotency_key: str
    incident_status: str
    message: str
    name: str
    notify_subscribers: bool
    published_at: str
    status_page_id: str
    updates: list


class StatusPageIncident(StatusPageIncidentRequired, total=False):
    component_statuses: list


class StatusPageIncidentLoadMatch(TypedDict):
    id: str


class StatusPageIncidentListMatchRequired(TypedDict):
    status_page_id: str


class StatusPageIncidentListMatch(StatusPageIncidentListMatchRequired, total=False):
    after: str
    component_id: str
    end_at: str
    group_id: str
    page_size: int
    start_at: str
    sub_page_id: str


class StatusPageIncidentCreateDataRequired(TypedDict):
    idempotency_key: str
    incident_status: str
    message: str
    name: str
    notify_subscribers: bool
    status_page_id: str


class StatusPageIncidentCreateData(StatusPageIncidentCreateDataRequired, total=False):
    component_statuses: list


class StatusPageIncidentUpdateDataRequired(TypedDict):
    id: str


class StatusPageIncidentUpdateData(StatusPageIncidentUpdateDataRequired, total=False):
    name: str


class StatusPageIncidentUpdateRequired(TypedDict):
    message: str
    notify_subscribers: bool
    status_page_incident_id: str


class StatusPageIncidentUpdate(StatusPageIncidentUpdateRequired, total=False):
    component_statuses: list
    incident_status: str


class StatusPageIncidentUpdateCreateDataRequired(TypedDict):
    message: str
    notify_subscribers: bool
    status_page_incident_id: str


class StatusPageIncidentUpdateCreateData(StatusPageIncidentUpdateCreateDataRequired, total=False):
    component_statuses: list
    incident_status: str


class StatusPageLinkedResponseIncident(TypedDict):
    id: str
    linked_at: str


class StatusPageLinkedResponseIncidentListMatch(TypedDict):
    incident_id: str
    status_page_id: str


class StatusPageMaintenance(TypedDict):
    affected_component_ids: list
    automate_maintenance_status: bool
    component_maintenance_periods: list
    end_at: str
    id: str
    idempotency_key: str
    maintenance_status: str
    message: str
    name: str
    notify_subscribers: bool
    published_at: str
    start_at: str
    status_page_id: str
    updates: list


class StatusPageMaintenanceLoadMatch(TypedDict):
    id: str


class StatusPageMaintenanceListMatchRequired(TypedDict):
    status_page_id: str


class StatusPageMaintenanceListMatch(StatusPageMaintenanceListMatchRequired, total=False):
    after: str
    component_id: str
    end_at: str
    group_id: str
    page_size: int
    start_at: str
    sub_page_id: str


class StatusPageMaintenanceCreateDataRequired(TypedDict):
    affected_component_ids: list
    end_at: str
    idempotency_key: str
    maintenance_status: str
    message: str
    name: str
    notify_subscribers: bool
    start_at: str
    status_page_id: str


class StatusPageMaintenanceCreateData(StatusPageMaintenanceCreateDataRequired, total=False):
    automate_maintenance_status: bool


class StatusPageMaintenanceUpdateDataRequired(TypedDict):
    id: str


class StatusPageMaintenanceUpdateData(StatusPageMaintenanceUpdateDataRequired, total=False):
    end_at: str
    name: str
    start_at: str


class StatusPageMaintenanceRemoveMatch(TypedDict):
    id: str


class StatusPageMaintenanceUpdateRequired(TypedDict):
    message: str
    notify_subscribers: bool
    status_page_maintenance_id: str


class StatusPageMaintenanceUpdate(StatusPageMaintenanceUpdateRequired, total=False):
    component_statuses: list
    maintenance_status: str


class StatusPageMaintenanceUpdateCreateDataRequired(TypedDict):
    message: str
    notify_subscribers: bool
    status_page_maintenance_id: str


class StatusPageMaintenanceUpdateCreateData(StatusPageMaintenanceUpdateCreateDataRequired, total=False):
    component_statuses: list
    maintenance_status: str


class StatusPageStructureRequired(TypedDict):
    current_structure: dict
    display_uptime_mode: str
    management_meta: dict


class StatusPageStructure(StatusPageStructureRequired, total=False):
    id: str


class StatusPageStructureLoadMatch(TypedDict):
    id: str


class StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(TypedDict):
    idempotency_key: str
    name: str
    status_page_id: str
    updates: list


class StatusPagesCreateStatusPageRetrospectiveIncidentResultV2CreateData(TypedDict):
    idempotency_key: str
    name: str
    status_page_id: str
    updates: list


class Team(TypedDict):
    catalog_entry: dict
    id: str
    members: list
    name: str


class TeamLoadMatch(TypedDict):
    id: str


class TeamListMatch(TypedDict, total=False):
    after: str
    page_size: int


class TelemetryDataSourceRequired(TypedDict):
    created_at: str
    enabled: bool
    id: str
    name: str
    provider: str
    source_type: str
    updated_at: str


class TelemetryDataSource(TelemetryDataSourceRequired, total=False):
    datadog_config: dict
    grafana_config: dict
    version: str


class TelemetryDataSourceUpdateDataRequired(TypedDict):
    id: str


class TelemetryDataSourceUpdateData(TelemetryDataSourceUpdateDataRequired, total=False):
    datadog_config: dict
    grafana_config: dict
    name: str


class UserRequired(TypedDict):
    base_role: dict
    custom_roles: list
    id: str
    is_active: bool
    name: str
    role: str
    seats: dict


class User(UserRequired, total=False):
    email: str
    slack_user_id: str


class UserLoadMatch(TypedDict):
    id: str


class UserListMatch(TypedDict, total=False):
    after: str
    email: str
    include_inactive: bool
    page_size: int
    slack_user_id: str


class UsersShowPagingProviderResultV2(TypedDict, total=False):
    preferred_escalation_provider: str


class UsersShowPagingProviderResultV2LoadMatch(TypedDict):
    user_id: str


class UsersShowPagingProviderResultV2CreateData(TypedDict):
    user_id: str
    preferred_escalation_provider: str


class UtilitiesV1(TypedDict):
    pass


class UtilitiesV1LoadMatch(TypedDict):
    pass


class WorkflowRequired(TypedDict):
    condition_groups: list
    continue_on_step_error: bool
    delay: dict
    expressions: list
    id: str
    management_meta: dict
    name: str
    once_for: list
    runs_on_incident_modes: list
    runs_on_incidents: str
    steps: list
    trigger: str
    version: int
    workflow: dict


class Workflow(WorkflowRequired, total=False):
    annotations: dict
    auto_run_mode: str
    folder: str
    form_fields: list
    include_private_escalations: bool
    include_private_incidents: bool
    owning_team_ids: list
    private_incident_scope: str
    runs_from: str
    shortform: str
    skip_step_upgrades: bool
    state: str


class WorkflowLoadMatchRequired(TypedDict):
    id: str


class WorkflowLoadMatch(WorkflowLoadMatchRequired, total=False):
    skip_step_upgrade: bool


class WorkflowListMatch(TypedDict, total=False):
    annotations: dict
    auto_run_mode: str
    condition_groups: list
    continue_on_step_error: bool
    delay: dict
    expressions: list
    folder: str
    form_fields: list
    id: str
    include_private_escalations: bool
    include_private_incidents: bool
    management_meta: dict
    name: str
    once_for: list
    owning_team_ids: list
    private_incident_scope: str
    runs_from: str
    runs_on_incident_modes: list
    runs_on_incidents: str
    shortform: str
    skip_step_upgrades: bool
    state: str
    steps: list
    trigger: str
    version: int
    workflow: dict


class WorkflowCreateDataRequired(TypedDict):
    condition_groups: list
    continue_on_step_error: bool
    delay: dict
    expressions: list
    name: str
    once_for: list
    runs_on_incident_modes: list
    runs_on_incidents: str
    steps: list
    trigger: str


class WorkflowCreateData(WorkflowCreateDataRequired, total=False):
    annotations: dict
    auto_run_mode: str
    folder: str
    form_fields: list
    include_private_escalations: bool
    include_private_incidents: bool
    owning_team_ids: list
    private_incident_scope: str
    shortform: str
    state: str


class WorkflowUpdateDataRequired(TypedDict):
    id: str


class WorkflowUpdateData(WorkflowUpdateDataRequired, total=False):
    annotations: dict
    auto_run_mode: str
    condition_groups: list
    continue_on_step_error: bool
    delay: dict
    expressions: list
    folder: str
    form_fields: list
    include_private_escalations: bool
    include_private_incidents: bool
    name: str
    once_for: list
    owning_team_ids: list
    private_incident_scope: str
    runs_on_incident_modes: list
    runs_on_incidents: str
    shortform: str
    skip_step_upgrades: bool
    state: str
    steps: list


class WorkflowRemoveMatch(TypedDict):
    id: str


class WorkflowRunRequired(TypedDict):
    created_at: str
    id: str
    progress: list
    scheduled_at: str
    updated_at: str
    workflow_id: str
    workflow_version_id: str
    workflow_version_number: int


class WorkflowRun(WorkflowRunRequired, total=False):
    cancelled_at: str
    enqueued_at: str
    error: str
    incident_id: str
    incident_reference: str
    workflow_name: str


class WorkflowRunLoadMatch(TypedDict):
    id: str


class WorkflowRunListMatch(TypedDict, total=False):
    after: str
    created_at: dict
    incident_id: str
    page_size: int
    workflow_id: str

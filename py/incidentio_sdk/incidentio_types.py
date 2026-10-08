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
    follow_up: bool
    id: str
    incident_id: str
    status: str
    updated_at: str


class Action(ActionRequired, total=False):
    assignee_id: str
    completed_at: str
    description: str
    external_issue_reference: dict


class ActionLoadMatch(TypedDict):
    id: str


class ActionListMatch(TypedDict, total=False):
    incident_id: str
    incident_mode: str
    is_follow_up: bool


class ActionCreateDataRequired(TypedDict):
    assignee: dict
    created_at: str
    creator: dict
    follow_up: bool
    id: str
    incident_id: str
    status: str
    updated_at: str


class ActionCreateData(ActionCreateDataRequired, total=False):
    assignee_id: str
    completed_at: str
    description: str
    external_issue_reference: dict


class ActionUpdateDataRequired(TypedDict):
    id: str


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    assignee: dict
    assignee_id: str
    completed_at: str
    created_at: str
    creator: dict
    description: str
    external_issue_reference: dict
    follow_up: bool
    incident_id: str
    status: str
    updated_at: str


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
    id: str
    name: str
    required: bool
    type: str


class AlertAttributeCreateData(AlertAttributeCreateDataRequired, total=False):
    emoji: str


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
    created_at: str
    creator: dict
    id: str
    images: list
    updated_at: str


class AlertNoteCreateData(AlertNoteCreateDataRequired, total=False):
    alert_group_id: str
    alert_id: str
    last_edited_at: str


class AlertNoteUpdateDataRequired(TypedDict):
    id: str


class AlertNoteUpdateData(AlertNoteUpdateDataRequired, total=False):
    alert_group_id: str
    alert_id: str
    content: str
    created_at: str
    creator: dict
    images: list
    last_edited_at: str
    updated_at: str


class AlertNoteRemoveMatch(TypedDict):
    id: str


class AlertRouteRequired(TypedDict):
    alert_sources: list
    channel_config: list
    condition_groups: list
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    id: str
    incident_config: dict
    incident_template: dict
    is_private: bool
    message_config: dict
    name: str
    version: int


class AlertRoute(AlertRouteRequired, total=False):
    created_at: str
    message_template: dict
    owning_team_ids: list
    updated_at: str


class AlertRouteLoadMatch(TypedDict):
    id: str


class AlertRouteListMatchRequired(TypedDict):
    page_size: int


class AlertRouteListMatch(AlertRouteListMatchRequired, total=False):
    after: str


class AlertRouteCreateDataRequired(TypedDict):
    alert_sources: list
    channel_config: list
    condition_groups: list
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    id: str
    incident_config: dict
    incident_template: dict
    is_private: bool
    message_config: dict
    name: str
    version: int


class AlertRouteCreateData(AlertRouteCreateDataRequired, total=False):
    created_at: str
    message_template: dict
    owning_team_ids: list
    updated_at: str


class AlertRouteUpdateDataRequired(TypedDict):
    id: str


class AlertRouteUpdateData(AlertRouteUpdateDataRequired, total=False):
    alert_sources: list
    channel_config: list
    condition_groups: list
    created_at: str
    enabled: bool
    escalation_config: dict
    expressions: list
    grouping_config: dict
    incident_config: dict
    incident_template: dict
    is_private: bool
    message_config: dict
    message_template: dict
    name: str
    owning_team_ids: list
    updated_at: str
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
    id: str
    jira_options: dict
    name: str
    rate_limit_sharding: dict
    source_type: str
    template: dict


class AlertSourceCreateData(AlertSourceCreateDataRequired, total=False):
    alert_events_url: str
    auto_resolve_incident_alerts: bool
    auto_resolve_timeout_minutes: int
    disabled: bool
    filter_condition_groups: list
    fixed_team_id: str
    owning_team_ids: list
    secret_token: str


class AlertSourceUpdateDataRequired(TypedDict):
    id: str


class AlertSourceUpdateData(AlertSourceUpdateDataRequired, total=False):
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
    jira_options: dict
    name: str
    owning_team_ids: list
    rate_limit_sharding: dict
    secret_token: str
    source_type: str
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


class AlertTag(TypedDict):
    id: str
    name: str


class AlertTagListMatch(TypedDict, total=False):
    after: str
    page_size: int
    search: str


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


class AlertsAddTagsResultV2CreateDataRequired(TypedDict):
    alert_id: str
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsAddTagsResultV2CreateData(AlertsAddTagsResultV2CreateDataRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertsRemoveTagsResultV2Required(TypedDict):
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsRemoveTagsResultV2(AlertsRemoveTagsResultV2Required, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
    tags: list


class AlertsRemoveTagsResultV2CreateDataRequired(TypedDict):
    alert_id: str
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsRemoveTagsResultV2CreateData(AlertsRemoveTagsResultV2CreateDataRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
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


class AlertsSetTagsResultV2CreateDataRequired(TypedDict):
    alert_id: str
    alert_source_id: str
    attributes: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class AlertsSetTagsResultV2CreateData(AlertsSetTagsResultV2CreateDataRequired, total=False):
    alert_group_ids: list
    description: str
    resolved_at: str
    source_url: str
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
    alert: dict
    alert_id: str
    id: str
    incident: dict
    incident_id: str
    state: str


class AlertsTransitionIncidentAlertResultV2CreateData(AlertsTransitionIncidentAlertResultV2CreateDataRequired, total=False):
    alert_route_id: str
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


class AnnouncementRuleCreateData(AnnouncementRuleCreateDataRequired, total=False):
    private_incident_scope: str
    template_id: str


class AnnouncementRuleUpdateDataRequired(TypedDict):
    id: str


class AnnouncementRuleUpdateData(AnnouncementRuleUpdateDataRequired, total=False):
    condition_groups: list
    conditions_no_longer_apply_behaviour: str
    created_at: str
    microsoft_teams_channel_ids: list
    mode: str
    name: str
    owning_team_ids: list
    private_incident_scope: str
    slack_channel_ids: list
    template_id: str
    update_sharing_mode: str
    updated_at: str


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


class AnnouncementTemplateCreateData(TypedDict):
    actions: list
    fields: list
    id: str
    is_default: bool
    name: str
    owning_team_ids: list


class AnnouncementTemplateUpdateDataRequired(TypedDict):
    id: str


class AnnouncementTemplateUpdateData(AnnouncementTemplateUpdateDataRequired, total=False):
    actions: list
    fields: list
    is_default: bool
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


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    comments: str
    last_used_at: str


class ApiKeyUpdateDataRequired(TypedDict):
    id: str


class ApiKeyUpdateData(ApiKeyUpdateDataRequired, total=False):
    comments: str
    created_at: str
    creator: dict
    last_used_at: str
    name: str
    role_names: list
    roles: list
    team_ids: list
    team_role_names: list
    team_roles: list
    token_last_issued_at: str


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
    allowed_callers: list
    country_code: str
    created_at: str
    current_state: str
    custom_language: str
    name: str
    options: list
    path: list
    phone_number: str
    phone_number_type: str
    responder_caller_id: str
    updated_at: str
    use_caller_allowlist: bool


class CallRoutesCreateAllowedCallerResultV2Required(TypedDict):
    phone_number: str


class CallRoutesCreateAllowedCallerResultV2(CallRoutesCreateAllowedCallerResultV2Required, total=False):
    name: str


class CallRoutesCreateAllowedCallerResultV2CreateDataRequired(TypedDict):
    call_route_id: str
    phone_number: str


class CallRoutesCreateAllowedCallerResultV2CreateData(CallRoutesCreateAllowedCallerResultV2CreateDataRequired, total=False):
    name: str


class CallRoutesCreateOptionResultV2(TypedDict):
    digit: str
    path: list
    prompt: str


class CallRoutesCreateOptionResultV2CreateData(TypedDict):
    call_route_id: str
    digit: str
    path: list
    prompt: str


class CallRoutesListAllowedCallersResultV2Required(TypedDict):
    id: str
    phone_number: str


class CallRoutesListAllowedCallersResultV2(CallRoutesListAllowedCallersResultV2Required, total=False):
    name: str


class CallRoutesListAllowedCallersResultV2ListMatch(TypedDict):
    call_route_id: str


class CallRoutesListOptionsResultV2(TypedDict):
    digit: str
    id: str
    path: list
    prompt: str


class CallRoutesListOptionsResultV2ListMatch(TypedDict):
    call_route_id: str


class CallRoutesShowAllowedCallerResultV2Required(TypedDict):
    id: str
    phone_number: str


class CallRoutesShowAllowedCallerResultV2(CallRoutesShowAllowedCallerResultV2Required, total=False):
    name: str


class CallRoutesShowAllowedCallerResultV2LoadMatch(TypedDict):
    call_route_id: str
    id: str


class CallRoutesShowOptionResultV2(TypedDict):
    digit: str
    id: str
    path: list
    prompt: str


class CallRoutesShowOptionResultV2LoadMatch(TypedDict):
    call_route_id: str
    id: str


class CallRoutesUpdateAllowedCallerResultV2Required(TypedDict):
    id: str
    phone_number: str


class CallRoutesUpdateAllowedCallerResultV2(CallRoutesUpdateAllowedCallerResultV2Required, total=False):
    name: str


class CallRoutesUpdateAllowedCallerResultV2UpdateDataRequired(TypedDict):
    call_route_id: str
    id: str


class CallRoutesUpdateAllowedCallerResultV2UpdateData(CallRoutesUpdateAllowedCallerResultV2UpdateDataRequired, total=False):
    name: str
    phone_number: str


class CallRoutesUpdateOptionResultV2(TypedDict):
    digit: str
    id: str
    path: list
    prompt: str


class CallRoutesUpdateOptionResultV2UpdateDataRequired(TypedDict):
    call_route_id: str
    id: str


class CallRoutesUpdateOptionResultV2UpdateData(CallRoutesUpdateOptionResultV2UpdateDataRequired, total=False):
    digit: str
    path: list
    prompt: str


class CallRoutesV2(TypedDict, total=False):
    id: str


class CallRoutesV2RemoveMatch(TypedDict):
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


class CatalogEntryListMatch(CatalogEntryListMatchRequired, total=False):
    after: str
    identifier: str
    page_size: int


class CatalogEntryCreateDataRequired(TypedDict):
    attribute_values: dict
    catalog_entry: dict
    catalog_type: dict
    catalog_type_id: str
    created_at: str
    id: str
    name: str
    updated_at: str


class CatalogEntryCreateData(CatalogEntryCreateDataRequired, total=False):
    aliases: list
    archived_at: str
    external_id: str
    rank: int
    update_attributes: list


class CatalogEntryUpdateDataRequired(TypedDict):
    id: str


class CatalogEntryUpdateData(CatalogEntryUpdateDataRequired, total=False):
    aliases: list
    archived_at: str
    attribute_values: dict
    catalog_entry: dict
    catalog_type: dict
    catalog_type_id: str
    created_at: str
    external_id: str
    name: str
    rank: int
    update_attributes: list
    updated_at: str


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
    semantic_type: str
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
    semantic_type: str
    source_repo_url: str
    type_name: str
    updated_at: str
    use_name_as_identifier: bool


class CatalogTypeCreateDataRequired(TypedDict):
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
    semantic_type: str
    type_name: str
    updated_at: str
    use_name_as_identifier: bool


class CatalogTypeCreateData(CatalogTypeCreateDataRequired, total=False):
    dynamic_resource_parameter: str
    estimated_count: int
    is_team_type: bool
    last_synced_at: str
    owning_team_ids: list
    registry_type: str
    required_integrations: list
    source_repo_url: str


class CatalogTypeUpdateDataRequired(TypedDict):
    id: str


class CatalogTypeUpdateData(CatalogTypeUpdateDataRequired, total=False):
    annotations: dict
    categories: list
    color: str
    created_at: str
    description: str
    dynamic_resource_parameter: str
    engine_resource_type: str
    estimated_count: int
    icon: str
    is_editable: bool
    is_team_type: bool
    last_synced_at: str
    name: str
    owning_team_ids: list
    ranked: bool
    registry_type: str
    required_integrations: list
    schema: dict
    semantic_type: str
    source_repo_url: str
    type_name: str
    updated_at: str
    use_name_as_identifier: bool


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
    semantic_type: str
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


class CatalogTypeSchemaCreateDataRequired(TypedDict):
    catalog_type_id: str
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
    semantic_type: str
    type_name: str
    updated_at: str
    use_name_as_identifier: bool
    version: int


class CatalogTypeSchemaCreateData(CatalogTypeSchemaCreateDataRequired, total=False):
    dynamic_resource_parameter: str
    estimated_count: int
    is_team_type: bool
    last_synced_at: str
    owning_team_ids: list
    registry_type: str
    required_integrations: list
    source_repo_url: str


class CustomFieldRequired(TypedDict):
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    id: str
    name: str
    options: list
    show_before_closure: bool
    show_before_creation: bool
    show_before_update: bool
    updated_at: str


class CustomField(CustomFieldRequired, total=False):
    catalog_type_id: str
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str
    required: str
    required_v2: str
    show_in_announcement_post: bool


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
    options: list
    required: str
    required_v2: str
    show_before_closure: bool
    show_before_creation: bool
    show_before_update: bool
    show_in_announcement_post: bool
    updated_at: str


class CustomFieldCreateDataRequired(TypedDict):
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    id: str
    name: str
    options: list
    show_before_closure: bool
    show_before_creation: bool
    show_before_update: bool
    updated_at: str


class CustomFieldCreateData(CustomFieldCreateDataRequired, total=False):
    catalog_type_id: str
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str
    required: str
    required_v2: str
    show_in_announcement_post: bool


class CustomFieldUpdateDataRequired(TypedDict):
    id: str


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    catalog_type_id: str
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str
    name: str
    options: list
    required: str
    required_v2: str
    show_before_closure: bool
    show_before_creation: bool
    show_before_update: bool
    show_in_announcement_post: bool
    updated_at: str


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


class CustomFieldOptionCreateData(TypedDict):
    custom_field_id: str
    id: str
    sort_key: int
    value: str


class CustomFieldOptionUpdateDataRequired(TypedDict):
    id: str


class CustomFieldOptionUpdateData(CustomFieldOptionUpdateDataRequired, total=False):
    custom_field_id: str
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


class EscalationCreateData(EscalationCreateDataRequired, total=False):
    escalation_path_id: str
    incident_id: str
    user_ids: list


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
    expressions: list
    has_historical_escalation_path_versions: bool
    id: str
    name: str
    params: list
    path: list
    repeat_config: dict


class EscalationPathTemplateCreateData(EscalationPathTemplateCreateDataRequired, total=False):
    description: str
    working_hours: list


class EscalationPathTemplateUpdateDataRequired(TypedDict):
    id: str


class EscalationPathTemplateUpdateData(EscalationPathTemplateUpdateDataRequired, total=False):
    description: str
    expressions: list
    has_historical_escalation_path_versions: bool
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
    response_options: list
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
    assignee_team_id: str
    incident_id: str
    incident_mode: str


class FollowUpCreateDataRequired(TypedDict):
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


class FollowUpCreateData(FollowUpCreateDataRequired, total=False):
    assignee_id: str
    assignee_team_id: str
    completed_at: str
    description: str
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str


class FollowUpUpdateDataRequired(TypedDict):
    id: str


class FollowUpUpdateData(FollowUpUpdateDataRequired, total=False):
    assignee: dict
    assignee_id: str
    assignee_team: dict
    assignee_team_id: str
    category: dict
    completed_at: str
    created_at: str
    creator: dict
    description: str
    external_issue_reference: dict
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str
    incident_id: str
    labels: list
    priority: dict
    status: str
    title: str
    updated_at: str


class FollowUpRemoveMatch(TypedDict):
    id: str


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


class FollowUpsConnectExternalIssueResultV3CreateDataRequired(TypedDict):
    follow_up_id: str
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


class FollowUpsConnectExternalIssueResultV3CreateData(FollowUpsConnectExternalIssueResultV3CreateDataRequired, total=False):
    completed_at: str
    description: str


class FollowUpsCreateFromLinkResultV3(TypedDict):
    incident_id: str
    url: str


class FollowUpsCreateFromLinkResultV3CreateData(TypedDict):
    incident_id: str
    url: str


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
    status: str
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
    source_message_channel_id: str
    source_message_timestamp: str
    summary: str
    timestamps: list
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


class IncidentLoadMatch(TypedDict):
    id: str


class IncidentListMatch(TypedDict, total=False):
    after: str
    page_size: int
    status: list


class IncidentCreateDataRequired(TypedDict):
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
    status: str
    team_ids: list
    updated_at: str
    visibility: str


class IncidentCreateData(IncidentCreateDataRequired, total=False):
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
    source_message_channel_id: str
    source_message_timestamp: str
    summary: str
    timestamps: list
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


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
    id: str
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
    created_at: str
    expressions: list
    form_type: str
    id: str
    updated_at: str


class IncidentFormCreateData(IncidentFormCreateDataRequired, total=False):
    incident_type_id: str
    lifecycle_elements: list


class IncidentFormUpdateDataRequired(TypedDict):
    id: str


class IncidentFormUpdateData(IncidentFormUpdateDataRequired, total=False):
    created_at: str
    expressions: list
    form_type: str
    incident_type_id: str
    lifecycle_elements: list
    updated_at: str


class IncidentFormRemoveMatch(TypedDict):
    id: str


class IncidentMembership(TypedDict):
    incident_id: str
    user_id: str


class IncidentMembershipCreateData(TypedDict):
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


class IncidentRoleRequired(TypedDict):
    created_at: str
    description: str
    id: str
    instructions: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRole(IncidentRoleRequired, total=False):
    required: bool


class IncidentRoleLoadMatch(TypedDict):
    id: str


class IncidentRoleListMatch(TypedDict, total=False):
    created_at: str
    description: str
    id: str
    instructions: str
    name: str
    required: bool
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleCreateDataRequired(TypedDict):
    created_at: str
    description: str
    id: str
    instructions: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleCreateData(IncidentRoleCreateDataRequired, total=False):
    required: bool


class IncidentRoleUpdateDataRequired(TypedDict):
    id: str


class IncidentRoleUpdateData(IncidentRoleUpdateDataRequired, total=False):
    created_at: str
    description: str
    instructions: str
    name: str
    required: bool
    role_type: str
    shortform: str
    updated_at: str


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


class IncidentStatusCreateData(TypedDict):
    category: str
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class IncidentStatusUpdateDataRequired(TypedDict):
    id: str


class IncidentStatusUpdateData(IncidentStatusUpdateDataRequired, total=False):
    category: str
    created_at: str
    description: str
    name: str
    rank: int
    updated_at: str


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
    created_at: str
    id: str
    name: str
    template: dict
    updated_at: str


class IncidentTemplateCreateData(IncidentTemplateCreateDataRequired, total=False):
    expressions: list


class IncidentTemplateUpdateDataRequired(TypedDict):
    id: str


class IncidentTemplateUpdateData(IncidentTemplateUpdateDataRequired, total=False):
    created_at: str
    expressions: list
    name: str
    template: dict
    updated_at: str


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
    warnings: list


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
    created_at: str
    creator: dict
    id: str
    idempotency_key: str
    incident_id: str
    timestamp: str
    title: str
    updated_at: str


class IncidentTimelineItemCreateData(IncidentTimelineItemCreateDataRequired, total=False):
    activity_log_id: str
    description: str


class IncidentTimelineItemUpdateDataRequired(TypedDict):
    id: str


class IncidentTimelineItemUpdateData(IncidentTimelineItemUpdateDataRequired, total=False):
    activity_log_id: str
    created_at: str
    creator: dict
    description: str
    idempotency_key: str
    incident_id: str
    timestamp: str
    title: str
    updated_at: str


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
    created_at: str
    id: str
    idempotency_key: str
    incident_id: str
    new_incident_status: dict
    new_severity: dict
    updater: dict


class IncidentUpdateCreateData(IncidentUpdateCreateDataRequired, total=False):
    merged_into_incident_id: str
    message: str
    to_incident_status_id: str
    to_severity_id: str


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
    updated_at: str
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


class MaintenanceWindowCreateData(MaintenanceWindowCreateDataRequired, total=False):
    archived_at: str
    escalation_targets: list
    incident_id: str
    notification_message: str
    notify_channels: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    owning_team_ids: list


class MaintenanceWindowUpdateDataRequired(TypedDict):
    id: str


class MaintenanceWindowUpdateData(MaintenanceWindowUpdateDataRequired, total=False):
    alert_condition_groups: list
    archived_at: str
    created_at: str
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
    updated_at: str


class MaintenanceWindowRemoveMatchRequired(TypedDict):
    id: str


class MaintenanceWindowRemoveMatch(MaintenanceWindowRemoveMatchRequired, total=False):
    force: bool


class OnCallNotificationMethodPublicV2(TypedDict):
    address: str
    id: str
    is_usable: bool
    method_type: str
    phone_details: dict


class OnCallNotificationMethodPublicV2ListMatch(TypedDict):
    user_id: str


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
    created_at: str
    currency: str
    id: str
    name: str
    one_off_rules: list
    rate_time_unit: str
    timezone: str
    updated_at: str
    weekly_rules: list


class PayConfigCreateData(PayConfigCreateDataRequired, total=False):
    published_at: str


class PayConfigUpdateDataRequired(TypedDict):
    id: str


class PayConfigUpdateData(PayConfigUpdateDataRequired, total=False):
    base_rate_cents: int
    created_at: str
    currency: str
    name: str
    one_off_rules: list
    published_at: str
    rate_time_unit: str
    timezone: str
    updated_at: str
    weekly_rules: list


class PayConfigRemoveMatch(TypedDict):
    id: str


class PayConfigsCreateOneOffRuleResultV2(TypedDict):
    end_at: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsCreateOneOffRuleResultV2CreateData(TypedDict):
    pay_config_id: str
    end_at: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsCreateWeeklyRuleResultV2(TypedDict):
    end_time: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsCreateWeeklyRuleResultV2CreateData(TypedDict):
    pay_config_id: str
    end_time: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsListOneOffRulesResultV2(TypedDict):
    end_at: str
    id: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsListOneOffRulesResultV2ListMatch(TypedDict):
    pay_config_id: str


class PayConfigsListWeeklyRulesResultV2(TypedDict):
    end_time: str
    id: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsListWeeklyRulesResultV2ListMatch(TypedDict):
    pay_config_id: str


class PayConfigsShowOneOffRuleResultV2(TypedDict):
    end_at: str
    id: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsShowOneOffRuleResultV2LoadMatch(TypedDict):
    id: str
    pay_config_id: str


class PayConfigsShowWeeklyRuleResultV2(TypedDict):
    end_time: str
    id: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsShowWeeklyRuleResultV2LoadMatch(TypedDict):
    id: str
    pay_config_id: str


class PayConfigsUpdateOneOffRuleResultV2(TypedDict):
    end_at: str
    id: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsUpdateOneOffRuleResultV2UpdateDataRequired(TypedDict):
    id: str
    pay_config_id: str


class PayConfigsUpdateOneOffRuleResultV2UpdateData(PayConfigsUpdateOneOffRuleResultV2UpdateDataRequired, total=False):
    end_at: str
    name: str
    rate_cents: int
    start_at: str


class PayConfigsUpdateWeeklyRuleResultV2(TypedDict):
    end_time: str
    id: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsUpdateWeeklyRuleResultV2UpdateDataRequired(TypedDict):
    id: str
    pay_config_id: str


class PayConfigsUpdateWeeklyRuleResultV2UpdateData(PayConfigsUpdateWeeklyRuleResultV2UpdateDataRequired, total=False):
    end_time: str
    rate_cents: int
    start_time: str
    weekdays: list


class PayConfigsV2(TypedDict, total=False):
    id: str


class PayConfigsV2RemoveMatch(TypedDict):
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


class PayReportCreateData(PayReportCreateDataRequired, total=False):
    creator: dict
    error_code: str
    error_message: str
    pay_config_id: str
    published_at: str
    rotation_filters: list
    total_duration_seconds: int
    total_pay_by_currency: dict


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


class PayReportsPublishResultV2CreateDataRequired(TypedDict):
    pay_report_id: str
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


class PayReportsPublishResultV2CreateData(PayReportsPublishResultV2CreateDataRequired, total=False):
    creator: dict
    error_code: str
    error_message: str
    published_at: str
    total_duration_seconds: int
    total_pay_by_currency: dict


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


class PayReportsUnpublishResultV2CreateDataRequired(TypedDict):
    pay_report_id: str
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


class PayReportsUnpublishResultV2CreateData(PayReportsUnpublishResultV2CreateDataRequired, total=False):
    creator: dict
    error_code: str
    error_message: str
    published_at: str
    total_duration_seconds: int
    total_pay_by_currency: dict


class PayReportsV2(TypedDict):
    pass


class PayReportsV2LoadMatch(TypedDict):
    pay_report_id: str


class PoliciesV2(TypedDict, total=False):
    id: str


class PoliciesV2RemoveMatch(TypedDict):
    id: str


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


class PolicyCreateData(PolicyCreateDataRequired, total=False):
    description: str
    expressions: list
    on_call_readiness: dict


class PolicyUpdateDataRequired(TypedDict):
    id: str


class PolicyUpdateData(PolicyUpdateDataRequired, total=False):
    assignment_rules: dict
    conditions: list
    created_at: str
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
    updated_at: str


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


class PolicyFindingsDismissResultV2CreateDataRequired(TypedDict):
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
    reason: str
    responsible_users: list
    schedule: dict
    shift_conflict: dict
    state: str
    updated_at: str
    vacation_conflict: dict


class PolicyFindingsDismissResultV2CreateData(PolicyFindingsDismissResultV2CreateDataRequired, total=False):
    days: int
    due_at: str


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
    created_at: str
    document_url: str
    editors: list
    exported_urls: list
    incident_id: str
    status: str
    title: str
    type: str
    updated_at: str


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


class ScheduleCreateData(ScheduleCreateDataRequired, total=False):
    current_shifts: list
    next_shifts: list


class ScheduleUpdateDataRequired(TypedDict):
    id: str


class ScheduleUpdateData(ScheduleUpdateDataRequired, total=False):
    annotations: dict
    config: dict
    created_at: str
    current_shifts: list
    holidays_public_config: dict
    name: str
    next_shifts: list
    permalink: str
    team_ids: list
    timezone: str
    updated_at: str


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
    final: list
    overrides: list
    schedule: dict
    scheduled: list


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
    created_at: str
    replica_fallback_user_id: str
    replica_provider: str
    replica_provider_id: str
    schedule_id: str
    sources: list
    updated_at: str
    user_statuses: list


class ScheduleReplicaCreateData(ScheduleReplicaCreateDataRequired, total=False):
    last_sync_error: str
    last_synced_at: str
    mirror_window_days: int


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
    created_at: str
    permanent_member_user_ids: list
    schedule_id: str
    schedule_sync_target: dict
    schedule_sync_target_id: str
    sync_type: str
    updated_at: str


class ScheduleSyncRuleCreateData(ScheduleSyncRuleCreateDataRequired, total=False):
    annotations: dict
    rotation_id: str


class ScheduleSyncRuleUpdateDataRequired(TypedDict):
    id: str
    schedule_id: str


class ScheduleSyncRuleUpdateData(ScheduleSyncRuleUpdateDataRequired, total=False):
    annotations: dict
    created_at: str
    permanent_member_user_ids: list
    rotation_id: str
    schedule_sync_target: dict
    schedule_sync_target_id: str
    sync_type: str
    updated_at: str


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
    created_at: str
    id: str
    linked_schedules: list
    new_slack_user_group: dict
    slack_team_id: str
    slack_user_group_id: str
    updated_at: str


class ScheduleSyncTargetCreateData(ScheduleSyncTargetCreateDataRequired, total=False):
    annotations: dict


class ScheduleSyncTargetUpdateDataRequired(TypedDict):
    id: str


class ScheduleSyncTargetUpdateData(ScheduleSyncTargetUpdateDataRequired, total=False):
    add_bot_to_group: bool
    annotations: dict
    created_at: str
    linked_schedules: list
    new_slack_user_group: dict
    slack_team_id: str
    slack_user_group_id: str
    updated_at: str


class ScheduleSyncTargetRemoveMatch(TypedDict):
    id: str


class SchedulesShowOverrideResultV2(TypedDict):
    created_at: str
    end_at: str
    id: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    updated_at: str
    user: dict


class SchedulesShowOverrideResultV2LoadMatch(TypedDict):
    id: str


class SchedulesShowOverrideResultV2ListMatchRequired(TypedDict):
    schedule_id: str


class SchedulesShowOverrideResultV2ListMatch(SchedulesShowOverrideResultV2ListMatchRequired, total=False):
    after: str
    layer_id: str
    page_size: int
    rotation_id: str


class SchedulesShowOverrideResultV2CreateData(TypedDict):
    created_at: str
    end_at: str
    id: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    updated_at: str
    user: dict


class SchedulesUpdateOverrideResultV2(TypedDict):
    created_at: str
    end_at: str
    id: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    updated_at: str
    user: dict


class SchedulesUpdateOverrideResultV2UpdateDataRequired(TypedDict):
    id: str


class SchedulesUpdateOverrideResultV2UpdateData(SchedulesUpdateOverrideResultV2UpdateDataRequired, total=False):
    created_at: str
    end_at: str
    layer_id: str
    rotation_id: str
    schedule_id: str
    start_at: str
    updated_at: str
    user: dict


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
    created_at: str
    id: str
    name: str
    secret: dict
    updated_at: str
    value: str
    version: int
    versions: list


class SecretCreateData(SecretCreateDataRequired, total=False):
    description: str
    last_four_chars: str
    owning_team_ids: list


class SecretUpdateDataRequired(TypedDict):
    id: str


class SecretUpdateData(SecretUpdateDataRequired, total=False):
    created_at: str
    description: str
    last_four_chars: str
    name: str
    owning_team_ids: list
    secret: dict
    updated_at: str
    value: str
    version: int
    versions: list


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


class SeverityCreateData(TypedDict):
    created_at: str
    description: str
    id: str
    name: str
    rank: int
    updated_at: str


class SeverityUpdateDataRequired(TypedDict):
    id: str


class SeverityUpdateData(SeverityUpdateDataRequired, total=False):
    created_at: str
    description: str
    name: str
    rank: int
    updated_at: str


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
    id: str
    management_meta: dict
    name: str


class StatusPageComponentCreateData(StatusPageComponentCreateDataRequired, total=False):
    description: str


class StatusPageComponentUpdateDataRequired(TypedDict):
    id: str


class StatusPageComponentUpdateData(StatusPageComponentUpdateDataRequired, total=False):
    description: str
    management_meta: dict
    name: str


class StatusPageComponentRemoveMatch(TypedDict):
    id: str


class StatusPageComponentAvailabilityV2Required(TypedDict):
    component_id: str
    data_available_since: str
    end_at: str
    start_at: str
    status_page_id: str


class StatusPageComponentAvailabilityV2(StatusPageComponentAvailabilityV2Required, total=False):
    availability_percent: str


class StatusPageComponentAvailabilityV2LoadMatch(TypedDict):
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


class StatusPageIncidentCreateData(StatusPageIncidentCreateDataRequired, total=False):
    component_statuses: list


class StatusPageIncidentUpdateDataRequired(TypedDict):
    id: str


class StatusPageIncidentUpdateData(StatusPageIncidentUpdateDataRequired, total=False):
    component_impacts: list
    component_statuses: list
    idempotency_key: str
    incident_status: str
    message: str
    name: str
    notify_subscribers: bool
    published_at: str
    status_page_id: str
    updates: list


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


class StatusPageLinkedResponseIncidentV1(TypedDict):
    id: str
    linked_at: str


class StatusPageLinkedResponseIncidentV1ListMatch(TypedDict):
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


class StatusPageMaintenanceCreateData(TypedDict):
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


class StatusPageMaintenanceUpdateDataRequired(TypedDict):
    id: str


class StatusPageMaintenanceUpdateData(StatusPageMaintenanceUpdateDataRequired, total=False):
    affected_component_ids: list
    automate_maintenance_status: bool
    component_maintenance_periods: list
    end_at: str
    idempotency_key: str
    maintenance_status: str
    message: str
    name: str
    notify_subscribers: bool
    published_at: str
    start_at: str
    status_page_id: str
    updates: list


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


class StatusPagesV2(TypedDict):
    pass


class StatusPagesV2RemoveMatch(TypedDict):
    status_page_maintenance_id: str


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


class TelemetryDataSourceV2Required(TypedDict):
    created_at: str
    enabled: bool
    id: str
    name: str
    provider: str
    source_type: str
    updated_at: str


class TelemetryDataSourceV2(TelemetryDataSourceV2Required, total=False):
    datadog_config: dict
    grafana_config: dict
    version: str


class TelemetryDataSourceV2UpdateDataRequired(TypedDict):
    id: str


class TelemetryDataSourceV2UpdateData(TelemetryDataSourceV2UpdateDataRequired, total=False):
    created_at: str
    datadog_config: dict
    enabled: bool
    grafana_config: dict
    name: str
    provider: str
    source_type: str
    updated_at: str
    version: str


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


class UserCreateDataRequired(TypedDict):
    id: str
    base_role: dict
    custom_roles: list
    is_active: bool
    name: str
    role: str
    seats: dict


class UserCreateData(UserCreateDataRequired, total=False):
    email: str
    slack_user_id: str


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


class WorkflowCreateData(WorkflowCreateDataRequired, total=False):
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

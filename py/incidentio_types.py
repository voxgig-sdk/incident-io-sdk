# Typed models for the IncidentIo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
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
    assignee: dict
    assignee_id: str
    completed_at: str
    created_at: str
    creator: dict
    description: str
    id: str
    incident_id: str
    status: str
    updated_at: str


class ActionCreateDataRequired(TypedDict):
    assignee: dict
    created_at: str
    creator: dict
    description: str
    id: str
    incident_id: str
    status: str
    updated_at: str


class ActionCreateData(ActionCreateDataRequired, total=False):
    assignee_id: str
    completed_at: str


class ActionUpdateDataRequired(TypedDict):
    id: str


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    assignee: dict
    assignee_id: str
    completed_at: str
    created_at: str
    creator: dict
    description: str
    incident_id: str
    status: str
    updated_at: str


class ActionRemoveMatch(TypedDict):
    id: str


class AlertRequired(TypedDict):
    alert_source_id: str
    attribute: list
    created_at: str
    deduplication_key: str
    id: str
    status: str
    title: str
    updated_at: str


class Alert(AlertRequired, total=False):
    alert_group_id: list
    description: str
    resolved_at: str
    source_url: str


class AlertLoadMatch(TypedDict):
    id: str


class AlertListMatch(TypedDict, total=False):
    alert_group_id: list
    alert_source_id: str
    attribute: list
    created_at: str
    deduplication_key: str
    description: str
    id: str
    resolved_at: str
    source_url: str
    status: str
    title: str
    updated_at: str


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
    image: list
    updated_at: str


class AlertNote(AlertNoteRequired, total=False):
    alert_group_id: str
    alert_id: str
    last_edited_at: str


class AlertNoteLoadMatch(TypedDict):
    id: str


class AlertNoteListMatch(TypedDict, total=False):
    alert_group_id: str
    alert_id: str
    content: str
    created_at: str
    creator: dict
    id: str
    image: list
    last_edited_at: str
    updated_at: str


class AlertNoteCreateDataRequired(TypedDict):
    content: str
    created_at: str
    creator: dict
    id: str
    image: list
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
    image: list
    last_edited_at: str
    updated_at: str


class AlertNoteRemoveMatch(TypedDict):
    id: str


class AlertRouteRequired(TypedDict):
    alert_source: list
    condition_group: list
    enabled: bool
    escalation_config: dict
    expression: list
    grouping_config: dict
    id: str
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    version: int


class AlertRoute(AlertRouteRequired, total=False):
    created_at: str
    owning_team_id: list
    updated_at: str


class AlertRouteLoadMatch(TypedDict):
    id: str


class AlertRouteListMatch(TypedDict, total=False):
    alert_source: list
    condition_group: list
    created_at: str
    enabled: bool
    escalation_config: dict
    expression: list
    grouping_config: dict
    id: str
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    owning_team_id: list
    updated_at: str
    version: int


class AlertRouteCreateDataRequired(TypedDict):
    alert_source: list
    condition_group: list
    enabled: bool
    escalation_config: dict
    expression: list
    grouping_config: dict
    id: str
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    version: int


class AlertRouteCreateData(AlertRouteCreateDataRequired, total=False):
    created_at: str
    owning_team_id: list
    updated_at: str


class AlertRouteUpdateDataRequired(TypedDict):
    id: str


class AlertRouteUpdateData(AlertRouteUpdateDataRequired, total=False):
    alert_source: list
    condition_group: list
    created_at: str
    enabled: bool
    escalation_config: dict
    expression: list
    grouping_config: dict
    incident_config: dict
    is_private: bool
    message_config: dict
    name: str
    owning_team_id: list
    updated_at: str
    version: int


class AlertRouteRemoveMatch(TypedDict):
    id: str


class AlertSourceRequired(TypedDict):
    email_option: dict
    heartbeat_option: dict
    http_custom_option: dict
    id: str
    jira_option: dict
    name: str
    source_type: str
    template: dict


class AlertSource(AlertSourceRequired, total=False):
    alert_events_url: str
    auto_resolve_incident_alert: bool
    auto_resolve_timeout_minute: int
    disabled: bool
    owning_team_id: list
    secret_token: str


class AlertSourceLoadMatch(TypedDict):
    id: str


class AlertSourceListMatch(TypedDict, total=False):
    alert_events_url: str
    auto_resolve_incident_alert: bool
    auto_resolve_timeout_minute: int
    disabled: bool
    email_option: dict
    heartbeat_option: dict
    http_custom_option: dict
    id: str
    jira_option: dict
    name: str
    owning_team_id: list
    secret_token: str
    source_type: str
    template: dict


class AlertSourceCreateDataRequired(TypedDict):
    email_option: dict
    heartbeat_option: dict
    http_custom_option: dict
    id: str
    jira_option: dict
    name: str
    source_type: str
    template: dict


class AlertSourceCreateData(AlertSourceCreateDataRequired, total=False):
    alert_events_url: str
    auto_resolve_incident_alert: bool
    auto_resolve_timeout_minute: int
    disabled: bool
    owning_team_id: list
    secret_token: str


class AlertSourceUpdateDataRequired(TypedDict):
    id: str


class AlertSourceUpdateData(AlertSourceUpdateDataRequired, total=False):
    alert_events_url: str
    auto_resolve_incident_alert: bool
    auto_resolve_timeout_minute: int
    disabled: bool
    email_option: dict
    heartbeat_option: dict
    http_custom_option: dict
    jira_option: dict
    name: str
    owning_team_id: list
    secret_token: str
    source_type: str
    template: dict


class AlertSourceRemoveMatch(TypedDict):
    id: str


class ApiKeyRequired(TypedDict):
    created_at: str
    creator: dict
    id: str
    name: str
    role: list
    role_name: list
    team_id: list
    team_role: list
    team_role_name: list
    token_last_issued_at: str


class ApiKey(ApiKeyRequired, total=False):
    comment: str
    last_used_at: str


class ApiKeyLoadMatch(TypedDict):
    id: str


class ApiKeyListMatch(TypedDict, total=False):
    comment: str
    created_at: str
    creator: dict
    id: str
    last_used_at: str
    name: str
    role: list
    role_name: list
    team_id: list
    team_role: list
    team_role_name: list
    token_last_issued_at: str


class ApiKeyCreateDataRequired(TypedDict):
    created_at: str
    creator: dict
    id: str
    name: str
    role: list
    role_name: list
    team_id: list
    team_role: list
    team_role_name: list
    token_last_issued_at: str


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    comment: str
    last_used_at: str


class ApiKeyUpdateDataRequired(TypedDict):
    id: str


class ApiKeyUpdateData(ApiKeyUpdateDataRequired, total=False):
    comment: str
    created_at: str
    creator: dict
    last_used_at: str
    name: str
    role: list
    role_name: list
    team_id: list
    team_role: list
    team_role_name: list
    token_last_issued_at: str


class ApiKeyRemoveMatch(TypedDict):
    id: str


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
    created_at: str
    description: str
    field_type: str
    filter_by: dict
    fixed_filter: dict
    id: str
    name: str
    updated_at: str


class CustomFieldCreateData(CustomFieldCreateDataRequired, total=False):
    catalog_type_id: str
    group_by_catalog_attribute_id: str
    helptext_catalog_attribute_id: str


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


class CustomFieldOptionListMatch(TypedDict, total=False):
    custom_field_id: str
    id: str
    sort_key: int
    value: str


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


class FollowUpRequired(TypedDict):
    assignee: dict
    assignee_team: dict
    created_at: str
    creator: dict
    external_issue_reference: dict
    id: str
    incident_id: str
    label: list
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
    assignee: dict
    assignee_id: str
    assignee_team: dict
    assignee_team_id: str
    completed_at: str
    created_at: str
    creator: dict
    description: str
    external_issue_reference: dict
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str
    id: str
    incident_id: str
    label: list
    priority: dict
    status: str
    title: str
    updated_at: str


class FollowUpCreateDataRequired(TypedDict):
    assignee: dict
    assignee_team: dict
    created_at: str
    creator: dict
    external_issue_reference: dict
    id: str
    incident_id: str
    label: list
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
    completed_at: str
    created_at: str
    creator: dict
    description: str
    external_issue_reference: dict
    external_issue_reference_id: str
    follow_up_category_id: str
    follow_up_priority_option_id: str
    incident_id: str
    label: list
    priority: dict
    status: str
    title: str
    updated_at: str


class FollowUpRemoveMatch(TypedDict):
    id: str


class IncidentRequired(TypedDict):
    created_at: str
    creator: dict
    custom_field_entry: list
    external_issue_reference: dict
    id: str
    idempotency_key: str
    incident_role_assignment: list
    incident_status: dict
    incident_type: dict
    mode: str
    name: str
    reference: str
    severity: dict
    slack_channel_id: str
    slack_team_id: str
    updated_at: str
    visibility: str


class Incident(IncidentRequired, total=False):
    call_url: str
    duration_metric: list
    has_debrief: bool
    incident_status_id: str
    incident_timestamp_value: list
    incident_type_id: str
    permalink: str
    postmortem_document_id: list
    postmortem_document_url: str
    retrospective_incident_option: dict
    severity_id: str
    slack_channel_name: str
    slack_channel_name_override: str
    summary: str
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


class IncidentLoadMatch(TypedDict):
    id: str


class IncidentListMatch(TypedDict, total=False):
    call_url: str
    created_at: str
    creator: dict
    custom_field_entry: list
    duration_metric: list
    external_issue_reference: dict
    has_debrief: bool
    id: str
    idempotency_key: str
    incident_role_assignment: list
    incident_status: dict
    incident_status_id: str
    incident_timestamp_value: list
    incident_type: dict
    incident_type_id: str
    mode: str
    name: str
    permalink: str
    postmortem_document_id: list
    postmortem_document_url: str
    reference: str
    retrospective_incident_option: dict
    severity: dict
    severity_id: str
    slack_channel_id: str
    slack_channel_name: str
    slack_channel_name_override: str
    slack_team_id: str
    summary: str
    updated_at: str
    visibility: str
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


class IncidentCreateDataRequired(TypedDict):
    created_at: str
    creator: dict
    custom_field_entry: list
    external_issue_reference: dict
    id: str
    idempotency_key: str
    incident_role_assignment: list
    incident_status: dict
    incident_type: dict
    mode: str
    name: str
    reference: str
    severity: dict
    slack_channel_id: str
    slack_team_id: str
    updated_at: str
    visibility: str


class IncidentCreateData(IncidentCreateDataRequired, total=False):
    call_url: str
    duration_metric: list
    has_debrief: bool
    incident_status_id: str
    incident_timestamp_value: list
    incident_type_id: str
    permalink: str
    postmortem_document_id: list
    postmortem_document_url: str
    retrospective_incident_option: dict
    severity_id: str
    slack_channel_name: str
    slack_channel_name_override: str
    summary: str
    workload_minutes_late: float
    workload_minutes_sleeping: float
    workload_minutes_total: float
    workload_minutes_working: float


class IncidentAttachment(TypedDict):
    id: str
    incident_id: str
    resource: dict


class IncidentAttachmentListMatch(TypedDict, total=False):
    id: str
    incident_id: str
    resource: dict


class IncidentAttachmentCreateData(TypedDict):
    id: str
    incident_id: str
    resource: dict


class IncidentAttachmentRemoveMatch(TypedDict):
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


class IncidentParticipantLoadMatch(TypedDict, total=False):
    active: list
    passive: list


class IncidentParticipantWorkloadRequired(TypedDict):
    user: dict
    workload: dict


class IncidentParticipantWorkload(IncidentParticipantWorkloadRequired, total=False):
    archived_at: str
    participant_type: str


class IncidentParticipantWorkloadListMatch(TypedDict, total=False):
    archived_at: str
    participant_type: str
    user: dict
    workload: dict


class IncidentRelationship(TypedDict):
    id: str
    incident: dict


class IncidentRelationshipListMatch(TypedDict, total=False):
    id: str
    incident: dict


class IncidentRole(TypedDict):
    created_at: str
    description: str
    id: str
    instruction: str
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
    instruction: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleCreateData(TypedDict):
    created_at: str
    description: str
    id: str
    instruction: str
    name: str
    role_type: str
    shortform: str
    updated_at: str


class IncidentRoleUpdateDataRequired(TypedDict):
    id: str


class IncidentRoleUpdateData(IncidentRoleUpdateDataRequired, total=False):
    created_at: str
    description: str
    instruction: str
    name: str
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
    owning_team_id: list


class IncidentTypeLoadMatch(TypedDict):
    id: str


class IncidentTypeListMatch(TypedDict, total=False):
    create_in_triage: str
    created_at: str
    description: str
    id: str
    is_default: bool
    name: str
    owning_team_id: list
    private_incidents_only: bool
    updated_at: str


class IncidentUpdateRequired(TypedDict):
    created_at: str
    id: str
    incident_id: str
    new_incident_status: dict
    new_severity: dict
    updater: dict


class IncidentUpdate(IncidentUpdateRequired, total=False):
    merged_into_incident_id: str
    message: str


class IncidentUpdateListMatch(TypedDict, total=False):
    created_at: str
    id: str
    incident_id: str
    merged_into_incident_id: str
    message: str
    new_incident_status: dict
    new_severity: dict
    updater: dict


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


class MaintenanceWindowRequired(TypedDict):
    alert_condition_group: list
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
    escalation_target: list
    incident_id: str
    notification_message: str
    notify_channel: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int


class MaintenanceWindowLoadMatch(TypedDict):
    id: str


class MaintenanceWindowListMatch(TypedDict, total=False):
    alert_condition_group: list
    archived_at: str
    created_at: str
    end_at: str
    escalation_target: list
    id: str
    incident_id: str
    lead: dict
    name: str
    notification_message: str
    notify_channel: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    reroute_on_end: bool
    resolve_on_end: bool
    show_in_sidebar: bool
    start_at: str
    updated_at: str


class MaintenanceWindowCreateDataRequired(TypedDict):
    alert_condition_group: list
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
    escalation_target: list
    incident_id: str
    notification_message: str
    notify_channel: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int


class MaintenanceWindowUpdateDataRequired(TypedDict):
    id: str


class MaintenanceWindowUpdateData(MaintenanceWindowUpdateDataRequired, total=False):
    alert_condition_group: list
    archived_at: str
    created_at: str
    end_at: str
    escalation_target: list
    incident_id: str
    lead: dict
    name: str
    notification_message: str
    notify_channel: list
    notify_end_minutes_before: int
    notify_start_minutes_before: int
    reroute_on_end: bool
    resolve_on_end: bool
    show_in_sidebar: bool
    start_at: str
    updated_at: str


class MaintenanceWindowRemoveMatch(TypedDict):
    id: str


class PostmortemDocument(TypedDict):
    created_at: str
    document_url: str
    editor: list
    exported_url: list
    id: str
    incident_id: str
    status: str
    title: str
    type: str
    updated_at: str


class PostmortemDocumentLoadMatch(TypedDict):
    id: str


class PostmortemDocumentListMatch(TypedDict, total=False):
    created_at: str
    document_url: str
    editor: list
    exported_url: list
    id: str
    incident_id: str
    status: str
    title: str
    type: str
    updated_at: str


class PostmortemDocumentUpdateDataRequired(TypedDict):
    id: str


class PostmortemDocumentUpdateData(PostmortemDocumentUpdateDataRequired, total=False):
    created_at: str
    document_url: str
    editor: list
    exported_url: list
    incident_id: str
    status: str
    title: str
    type: str
    updated_at: str


class SecretRequired(TypedDict):
    created_at: str
    id: str
    name: str
    secret: dict
    updated_at: str
    value: str
    version: list


class Secret(SecretRequired, total=False):
    description: str
    last_four_char: str
    owning_team_id: list


class SecretLoadMatch(TypedDict):
    id: str


class SecretListMatch(TypedDict, total=False):
    created_at: str
    description: str
    id: str
    last_four_char: str
    name: str
    owning_team_id: list
    secret: dict
    updated_at: str
    value: str
    version: list


class SecretCreateDataRequired(TypedDict):
    created_at: str
    id: str
    name: str
    secret: dict
    updated_at: str
    value: str
    version: list


class SecretCreateData(SecretCreateDataRequired, total=False):
    description: str
    last_four_char: str
    owning_team_id: list


class SecretUpdateDataRequired(TypedDict):
    id: str


class SecretUpdateData(SecretUpdateDataRequired, total=False):
    created_at: str
    description: str
    last_four_char: str
    name: str
    owning_team_id: list
    secret: dict
    updated_at: str
    value: str
    version: list


class SecretRemoveMatch(TypedDict):
    id: str


class Team(TypedDict):
    catalog_entry: dict
    id: str
    member: list
    name: str


class TeamLoadMatch(TypedDict):
    id: str


class TeamListMatch(TypedDict, total=False):
    catalog_entry: dict
    id: str
    member: list
    name: str


class UserRequired(TypedDict):
    base_role: dict
    custom_role: list
    id: str
    is_active: bool
    name: str
    role: str
    seat: dict


class User(UserRequired, total=False):
    email: str
    slack_user_id: str


class UserLoadMatch(TypedDict):
    id: str


class UserListMatch(TypedDict, total=False):
    base_role: dict
    custom_role: list
    email: str
    id: str
    is_active: bool
    name: str
    role: str
    seat: dict
    slack_user_id: str


class WorkflowRequired(TypedDict):
    condition_group: list
    continue_on_step_error: bool
    delay: dict
    expression: list
    id: str
    management_meta: dict
    name: str
    once_for: list
    runs_on_incident: str
    runs_on_incident_mode: list
    step: list
    trigger: str
    version: int
    workflow: dict


class Workflow(WorkflowRequired, total=False):
    annotation: dict
    folder: str
    form_field: list
    include_private_escalation: bool
    include_private_incident: bool
    owning_team_id: list
    private_incident_scope: str
    runs_from: str
    shortform: str
    skip_step_upgrade: bool
    state: str


class WorkflowLoadMatch(TypedDict):
    id: str


class WorkflowListMatch(TypedDict, total=False):
    annotation: dict
    condition_group: list
    continue_on_step_error: bool
    delay: dict
    expression: list
    folder: str
    form_field: list
    id: str
    include_private_escalation: bool
    include_private_incident: bool
    management_meta: dict
    name: str
    once_for: list
    owning_team_id: list
    private_incident_scope: str
    runs_from: str
    runs_on_incident: str
    runs_on_incident_mode: list
    shortform: str
    skip_step_upgrade: bool
    state: str
    step: list
    trigger: str
    version: int
    workflow: dict


class WorkflowCreateDataRequired(TypedDict):
    condition_group: list
    continue_on_step_error: bool
    delay: dict
    expression: list
    id: str
    management_meta: dict
    name: str
    once_for: list
    runs_on_incident: str
    runs_on_incident_mode: list
    step: list
    trigger: str
    version: int
    workflow: dict


class WorkflowCreateData(WorkflowCreateDataRequired, total=False):
    annotation: dict
    folder: str
    form_field: list
    include_private_escalation: bool
    include_private_incident: bool
    owning_team_id: list
    private_incident_scope: str
    runs_from: str
    shortform: str
    skip_step_upgrade: bool
    state: str


class WorkflowUpdateDataRequired(TypedDict):
    id: str


class WorkflowUpdateData(WorkflowUpdateDataRequired, total=False):
    annotation: dict
    condition_group: list
    continue_on_step_error: bool
    delay: dict
    expression: list
    folder: str
    form_field: list
    include_private_escalation: bool
    include_private_incident: bool
    management_meta: dict
    name: str
    once_for: list
    owning_team_id: list
    private_incident_scope: str
    runs_from: str
    runs_on_incident: str
    runs_on_incident_mode: list
    shortform: str
    skip_step_upgrade: bool
    state: str
    step: list
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
    cancelled_at: str
    created_at: str
    enqueued_at: str
    error: str
    id: str
    incident_id: str
    incident_reference: str
    progress: list
    scheduled_at: str
    updated_at: str
    workflow_id: str
    workflow_name: str
    workflow_version_id: str
    workflow_version_number: int

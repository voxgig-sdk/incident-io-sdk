-- Typed models for the IncidentIo SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Action
---@field assignee table
---@field assignee_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description string
---@field id string
---@field incident_id string
---@field status string
---@field updated_at string

---@class ActionLoadMatch
---@field id string

---@class ActionListMatch
---@field assignee? table
---@field assignee_id? string
---@field completed_at? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field id? string
---@field incident_id? string
---@field status? string
---@field updated_at? string

---@class ActionCreateData
---@field assignee table
---@field assignee_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description string
---@field id string
---@field incident_id string
---@field status string
---@field updated_at string

---@class ActionUpdateData
---@field id string
---@field assignee? table
---@field assignee_id? string
---@field completed_at? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field incident_id? string
---@field status? string
---@field updated_at? string

---@class ActionRemoveMatch
---@field id string

---@class Alert
---@field alert_group_id? table
---@field alert_source_id string
---@field attribute table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field title string
---@field updated_at string

---@class AlertLoadMatch
---@field id string

---@class AlertListMatch
---@field alert_group_id? table
---@field alert_source_id? string
---@field attribute? table
---@field created_at? string
---@field deduplication_key? string
---@field description? string
---@field id? string
---@field resolved_at? string
---@field source_url? string
---@field status? string
---@field title? string
---@field updated_at? string

---@class AlertAttribute
---@field array boolean
---@field emoji? string
---@field id string
---@field name string
---@field required boolean
---@field type string

---@class AlertAttributeLoadMatch
---@field id string

---@class AlertAttributeListMatch
---@field array? boolean
---@field emoji? string
---@field id? string
---@field name? string
---@field required? boolean
---@field type? string

---@class AlertAttributeCreateData
---@field array boolean
---@field emoji? string
---@field id string
---@field name string
---@field required boolean
---@field type string

---@class AlertAttributeUpdateData
---@field id string
---@field array? boolean
---@field emoji? string
---@field name? string
---@field required? boolean
---@field type? string

---@class AlertAttributeRemoveMatch
---@field id string

---@class AlertNote
---@field alert_group_id? string
---@field alert_id? string
---@field content string
---@field created_at string
---@field creator table
---@field id string
---@field image table
---@field last_edited_at? string
---@field updated_at string

---@class AlertNoteLoadMatch
---@field id string

---@class AlertNoteListMatch
---@field alert_group_id? string
---@field alert_id? string
---@field content? string
---@field created_at? string
---@field creator? table
---@field id? string
---@field image? table
---@field last_edited_at? string
---@field updated_at? string

---@class AlertNoteCreateData
---@field alert_group_id? string
---@field alert_id? string
---@field content string
---@field created_at string
---@field creator table
---@field id string
---@field image table
---@field last_edited_at? string
---@field updated_at string

---@class AlertNoteUpdateData
---@field id string
---@field alert_group_id? string
---@field alert_id? string
---@field content? string
---@field created_at? string
---@field creator? table
---@field image? table
---@field last_edited_at? string
---@field updated_at? string

---@class AlertNoteRemoveMatch
---@field id string

---@class AlertRoute
---@field alert_source table
---@field condition_group table
---@field created_at? string
---@field enabled boolean
---@field escalation_config table
---@field expression table
---@field grouping_config table
---@field id string
---@field incident_config table
---@field is_private boolean
---@field message_config table
---@field name string
---@field owning_team_id? table
---@field updated_at? string
---@field version number

---@class AlertRouteLoadMatch
---@field id string

---@class AlertRouteListMatch
---@field alert_source? table
---@field condition_group? table
---@field created_at? string
---@field enabled? boolean
---@field escalation_config? table
---@field expression? table
---@field grouping_config? table
---@field id? string
---@field incident_config? table
---@field is_private? boolean
---@field message_config? table
---@field name? string
---@field owning_team_id? table
---@field updated_at? string
---@field version? number

---@class AlertRouteCreateData
---@field alert_source table
---@field condition_group table
---@field created_at? string
---@field enabled boolean
---@field escalation_config table
---@field expression table
---@field grouping_config table
---@field id string
---@field incident_config table
---@field is_private boolean
---@field message_config table
---@field name string
---@field owning_team_id? table
---@field updated_at? string
---@field version number

---@class AlertRouteUpdateData
---@field id string
---@field alert_source? table
---@field condition_group? table
---@field created_at? string
---@field enabled? boolean
---@field escalation_config? table
---@field expression? table
---@field grouping_config? table
---@field incident_config? table
---@field is_private? boolean
---@field message_config? table
---@field name? string
---@field owning_team_id? table
---@field updated_at? string
---@field version? number

---@class AlertRouteRemoveMatch
---@field id string

---@class AlertSource
---@field alert_events_url? string
---@field auto_resolve_incident_alert? boolean
---@field auto_resolve_timeout_minute? number
---@field disabled? boolean
---@field email_option table
---@field heartbeat_option table
---@field http_custom_option table
---@field id string
---@field jira_option table
---@field name string
---@field owning_team_id? table
---@field secret_token? string
---@field source_type string
---@field template table

---@class AlertSourceLoadMatch
---@field id string

---@class AlertSourceListMatch
---@field alert_events_url? string
---@field auto_resolve_incident_alert? boolean
---@field auto_resolve_timeout_minute? number
---@field disabled? boolean
---@field email_option? table
---@field heartbeat_option? table
---@field http_custom_option? table
---@field id? string
---@field jira_option? table
---@field name? string
---@field owning_team_id? table
---@field secret_token? string
---@field source_type? string
---@field template? table

---@class AlertSourceCreateData
---@field alert_events_url? string
---@field auto_resolve_incident_alert? boolean
---@field auto_resolve_timeout_minute? number
---@field disabled? boolean
---@field email_option table
---@field heartbeat_option table
---@field http_custom_option table
---@field id string
---@field jira_option table
---@field name string
---@field owning_team_id? table
---@field secret_token? string
---@field source_type string
---@field template table

---@class AlertSourceUpdateData
---@field id string
---@field alert_events_url? string
---@field auto_resolve_incident_alert? boolean
---@field auto_resolve_timeout_minute? number
---@field disabled? boolean
---@field email_option? table
---@field heartbeat_option? table
---@field http_custom_option? table
---@field jira_option? table
---@field name? string
---@field owning_team_id? table
---@field secret_token? string
---@field source_type? string
---@field template? table

---@class AlertSourceRemoveMatch
---@field id string

---@class ApiKey
---@field comment? string
---@field created_at string
---@field creator table
---@field id string
---@field last_used_at? string
---@field name string
---@field role table
---@field role_name table
---@field team_id table
---@field team_role table
---@field team_role_name table
---@field token_last_issued_at string

---@class ApiKeyLoadMatch
---@field id string

---@class ApiKeyListMatch
---@field comment? string
---@field created_at? string
---@field creator? table
---@field id? string
---@field last_used_at? string
---@field name? string
---@field role? table
---@field role_name? table
---@field team_id? table
---@field team_role? table
---@field team_role_name? table
---@field token_last_issued_at? string

---@class ApiKeyCreateData
---@field comment? string
---@field created_at string
---@field creator table
---@field id string
---@field last_used_at? string
---@field name string
---@field role table
---@field role_name table
---@field team_id table
---@field team_role table
---@field team_role_name table
---@field token_last_issued_at string

---@class ApiKeyUpdateData
---@field id string
---@field comment? string
---@field created_at? string
---@field creator? table
---@field last_used_at? string
---@field name? string
---@field role? table
---@field role_name? table
---@field team_id? table
---@field team_role? table
---@field team_role_name? table
---@field token_last_issued_at? string

---@class ApiKeyRemoveMatch
---@field id string

---@class CustomField
---@field catalog_type_id? string
---@field created_at string
---@field description string
---@field field_type string
---@field filter_by table
---@field fixed_filter table
---@field group_by_catalog_attribute_id? string
---@field helptext_catalog_attribute_id? string
---@field id string
---@field name string
---@field updated_at string

---@class CustomFieldLoadMatch
---@field id string

---@class CustomFieldListMatch
---@field catalog_type_id? string
---@field created_at? string
---@field description? string
---@field field_type? string
---@field filter_by? table
---@field fixed_filter? table
---@field group_by_catalog_attribute_id? string
---@field helptext_catalog_attribute_id? string
---@field id? string
---@field name? string
---@field updated_at? string

---@class CustomFieldCreateData
---@field catalog_type_id? string
---@field created_at string
---@field description string
---@field field_type string
---@field filter_by table
---@field fixed_filter table
---@field group_by_catalog_attribute_id? string
---@field helptext_catalog_attribute_id? string
---@field id string
---@field name string
---@field updated_at string

---@class CustomFieldUpdateData
---@field id string
---@field catalog_type_id? string
---@field created_at? string
---@field description? string
---@field field_type? string
---@field filter_by? table
---@field fixed_filter? table
---@field group_by_catalog_attribute_id? string
---@field helptext_catalog_attribute_id? string
---@field name? string
---@field updated_at? string

---@class CustomFieldRemoveMatch
---@field id string

---@class CustomFieldOption
---@field custom_field_id string
---@field id string
---@field sort_key number
---@field value string

---@class CustomFieldOptionLoadMatch
---@field id string

---@class CustomFieldOptionListMatch
---@field custom_field_id? string
---@field id? string
---@field sort_key? number
---@field value? string

---@class CustomFieldOptionCreateData
---@field custom_field_id string
---@field id string
---@field sort_key number
---@field value string

---@class CustomFieldOptionUpdateData
---@field id string
---@field custom_field_id? string
---@field sort_key? number
---@field value? string

---@class CustomFieldOptionRemoveMatch
---@field id string

---@class FollowUp
---@field assignee table
---@field assignee_id? string
---@field assignee_team table
---@field assignee_team_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference table
---@field external_issue_reference_id? string
---@field follow_up_category_id? string
---@field follow_up_priority_option_id? string
---@field id string
---@field incident_id string
---@field label table
---@field priority table
---@field status string
---@field title string
---@field updated_at string

---@class FollowUpLoadMatch
---@field id string

---@class FollowUpListMatch
---@field assignee? table
---@field assignee_id? string
---@field assignee_team? table
---@field assignee_team_id? string
---@field completed_at? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field external_issue_reference? table
---@field external_issue_reference_id? string
---@field follow_up_category_id? string
---@field follow_up_priority_option_id? string
---@field id? string
---@field incident_id? string
---@field label? table
---@field priority? table
---@field status? string
---@field title? string
---@field updated_at? string

---@class FollowUpCreateData
---@field assignee table
---@field assignee_id? string
---@field assignee_team table
---@field assignee_team_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference table
---@field external_issue_reference_id? string
---@field follow_up_category_id? string
---@field follow_up_priority_option_id? string
---@field id string
---@field incident_id string
---@field label table
---@field priority table
---@field status string
---@field title string
---@field updated_at string

---@class FollowUpUpdateData
---@field id string
---@field assignee? table
---@field assignee_id? string
---@field assignee_team? table
---@field assignee_team_id? string
---@field completed_at? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field external_issue_reference? table
---@field external_issue_reference_id? string
---@field follow_up_category_id? string
---@field follow_up_priority_option_id? string
---@field incident_id? string
---@field label? table
---@field priority? table
---@field status? string
---@field title? string
---@field updated_at? string

---@class FollowUpRemoveMatch
---@field id string

---@class Incident
---@field call_url? string
---@field created_at string
---@field creator table
---@field custom_field_entry table
---@field duration_metric? table
---@field external_issue_reference table
---@field has_debrief? boolean
---@field id string
---@field idempotency_key string
---@field incident_role_assignment table
---@field incident_status table
---@field incident_status_id? string
---@field incident_timestamp_value? table
---@field incident_type table
---@field incident_type_id? string
---@field mode string
---@field name string
---@field permalink? string
---@field postmortem_document_id? table
---@field postmortem_document_url? string
---@field reference string
---@field retrospective_incident_option? table
---@field severity table
---@field severity_id? string
---@field slack_channel_id string
---@field slack_channel_name? string
---@field slack_channel_name_override? string
---@field slack_team_id string
---@field summary? string
---@field updated_at string
---@field visibility string
---@field workload_minutes_late? number
---@field workload_minutes_sleeping? number
---@field workload_minutes_total? number
---@field workload_minutes_working? number

---@class IncidentLoadMatch
---@field id string

---@class IncidentListMatch
---@field call_url? string
---@field created_at? string
---@field creator? table
---@field custom_field_entry? table
---@field duration_metric? table
---@field external_issue_reference? table
---@field has_debrief? boolean
---@field id? string
---@field idempotency_key? string
---@field incident_role_assignment? table
---@field incident_status? table
---@field incident_status_id? string
---@field incident_timestamp_value? table
---@field incident_type? table
---@field incident_type_id? string
---@field mode? string
---@field name? string
---@field permalink? string
---@field postmortem_document_id? table
---@field postmortem_document_url? string
---@field reference? string
---@field retrospective_incident_option? table
---@field severity? table
---@field severity_id? string
---@field slack_channel_id? string
---@field slack_channel_name? string
---@field slack_channel_name_override? string
---@field slack_team_id? string
---@field summary? string
---@field updated_at? string
---@field visibility? string
---@field workload_minutes_late? number
---@field workload_minutes_sleeping? number
---@field workload_minutes_total? number
---@field workload_minutes_working? number

---@class IncidentCreateData
---@field call_url? string
---@field created_at string
---@field creator table
---@field custom_field_entry table
---@field duration_metric? table
---@field external_issue_reference table
---@field has_debrief? boolean
---@field id string
---@field idempotency_key string
---@field incident_role_assignment table
---@field incident_status table
---@field incident_status_id? string
---@field incident_timestamp_value? table
---@field incident_type table
---@field incident_type_id? string
---@field mode string
---@field name string
---@field permalink? string
---@field postmortem_document_id? table
---@field postmortem_document_url? string
---@field reference string
---@field retrospective_incident_option? table
---@field severity table
---@field severity_id? string
---@field slack_channel_id string
---@field slack_channel_name? string
---@field slack_channel_name_override? string
---@field slack_team_id string
---@field summary? string
---@field updated_at string
---@field visibility string
---@field workload_minutes_late? number
---@field workload_minutes_sleeping? number
---@field workload_minutes_total? number
---@field workload_minutes_working? number

---@class IncidentAttachment
---@field id string
---@field incident_id string
---@field resource table

---@class IncidentAttachmentListMatch
---@field id? string
---@field incident_id? string
---@field resource? table

---@class IncidentAttachmentCreateData
---@field id string
---@field incident_id string
---@field resource table

---@class IncidentAttachmentRemoveMatch
---@field id string

---@class IncidentMembership
---@field incident_id string
---@field user_id string

---@class IncidentMembershipCreateData
---@field incident_id string
---@field user_id string

---@class IncidentParticipant
---@field active table
---@field passive table

---@class IncidentParticipantLoadMatch
---@field active? table
---@field passive? table

---@class IncidentParticipantWorkload
---@field archived_at? string
---@field participant_type? string
---@field user table
---@field workload table

---@class IncidentParticipantWorkloadListMatch
---@field archived_at? string
---@field participant_type? string
---@field user? table
---@field workload? table

---@class IncidentRelationship
---@field id string
---@field incident table

---@class IncidentRelationshipListMatch
---@field id? string
---@field incident? table

---@class IncidentRole
---@field created_at string
---@field description string
---@field id string
---@field instruction string
---@field name string
---@field role_type string
---@field shortform string
---@field updated_at string

---@class IncidentRoleLoadMatch
---@field id string

---@class IncidentRoleListMatch
---@field created_at? string
---@field description? string
---@field id? string
---@field instruction? string
---@field name? string
---@field role_type? string
---@field shortform? string
---@field updated_at? string

---@class IncidentRoleCreateData
---@field created_at string
---@field description string
---@field id string
---@field instruction string
---@field name string
---@field role_type string
---@field shortform string
---@field updated_at string

---@class IncidentRoleUpdateData
---@field id string
---@field created_at? string
---@field description? string
---@field instruction? string
---@field name? string
---@field role_type? string
---@field shortform? string
---@field updated_at? string

---@class IncidentRoleRemoveMatch
---@field id string

---@class IncidentStatus
---@field category string
---@field created_at string
---@field description string
---@field id string
---@field name string
---@field rank number
---@field updated_at string

---@class IncidentStatusLoadMatch
---@field id string

---@class IncidentStatusListMatch
---@field category? string
---@field created_at? string
---@field description? string
---@field id? string
---@field name? string
---@field rank? number
---@field updated_at? string

---@class IncidentStatusCreateData
---@field category string
---@field created_at string
---@field description string
---@field id string
---@field name string
---@field rank number
---@field updated_at string

---@class IncidentStatusUpdateData
---@field id string
---@field category? string
---@field created_at? string
---@field description? string
---@field name? string
---@field rank? number
---@field updated_at? string

---@class IncidentStatusRemoveMatch
---@field id string

---@class IncidentTimestamp
---@field id string
---@field name string
---@field rank number

---@class IncidentTimestampLoadMatch
---@field id string

---@class IncidentTimestampListMatch
---@field id? string
---@field name? string
---@field rank? number

---@class IncidentType
---@field create_in_triage string
---@field created_at string
---@field description string
---@field id string
---@field is_default boolean
---@field name string
---@field owning_team_id? table
---@field private_incidents_only boolean
---@field updated_at string

---@class IncidentTypeLoadMatch
---@field id string

---@class IncidentTypeListMatch
---@field create_in_triage? string
---@field created_at? string
---@field description? string
---@field id? string
---@field is_default? boolean
---@field name? string
---@field owning_team_id? table
---@field private_incidents_only? boolean
---@field updated_at? string

---@class IncidentUpdate
---@field created_at string
---@field id string
---@field incident_id string
---@field merged_into_incident_id? string
---@field message? string
---@field new_incident_status table
---@field new_severity table
---@field updater table

---@class IncidentUpdateListMatch
---@field created_at? string
---@field id? string
---@field incident_id? string
---@field merged_into_incident_id? string
---@field message? string
---@field new_incident_status? table
---@field new_severity? table
---@field updater? table

---@class IpAllowlist
---@field allowlist table
---@field enabled boolean
---@field updated_at? string
---@field version number

---@class IpAllowlistLoadMatch
---@field allowlist? table
---@field enabled? boolean
---@field updated_at? string
---@field version? number

---@class IpAllowlistUpdateData
---@field allowlist? table
---@field enabled? boolean
---@field updated_at? string
---@field version? number

---@class MaintenanceWindow
---@field alert_condition_group table
---@field archived_at? string
---@field created_at string
---@field end_at string
---@field escalation_target? table
---@field id string
---@field incident_id? string
---@field lead table
---@field name string
---@field notification_message? string
---@field notify_channel? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field reroute_on_end boolean
---@field resolve_on_end boolean
---@field show_in_sidebar boolean
---@field start_at string
---@field updated_at string

---@class MaintenanceWindowLoadMatch
---@field id string

---@class MaintenanceWindowListMatch
---@field alert_condition_group? table
---@field archived_at? string
---@field created_at? string
---@field end_at? string
---@field escalation_target? table
---@field id? string
---@field incident_id? string
---@field lead? table
---@field name? string
---@field notification_message? string
---@field notify_channel? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field reroute_on_end? boolean
---@field resolve_on_end? boolean
---@field show_in_sidebar? boolean
---@field start_at? string
---@field updated_at? string

---@class MaintenanceWindowCreateData
---@field alert_condition_group table
---@field archived_at? string
---@field created_at string
---@field end_at string
---@field escalation_target? table
---@field id string
---@field incident_id? string
---@field lead table
---@field name string
---@field notification_message? string
---@field notify_channel? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field reroute_on_end boolean
---@field resolve_on_end boolean
---@field show_in_sidebar boolean
---@field start_at string
---@field updated_at string

---@class MaintenanceWindowUpdateData
---@field id string
---@field alert_condition_group? table
---@field archived_at? string
---@field created_at? string
---@field end_at? string
---@field escalation_target? table
---@field incident_id? string
---@field lead? table
---@field name? string
---@field notification_message? string
---@field notify_channel? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field reroute_on_end? boolean
---@field resolve_on_end? boolean
---@field show_in_sidebar? boolean
---@field start_at? string
---@field updated_at? string

---@class MaintenanceWindowRemoveMatch
---@field id string

---@class PostmortemDocument
---@field created_at string
---@field document_url string
---@field editor table
---@field exported_url table
---@field id string
---@field incident_id string
---@field status string
---@field title string
---@field type string
---@field updated_at string

---@class PostmortemDocumentLoadMatch
---@field id string

---@class PostmortemDocumentListMatch
---@field created_at? string
---@field document_url? string
---@field editor? table
---@field exported_url? table
---@field id? string
---@field incident_id? string
---@field status? string
---@field title? string
---@field type? string
---@field updated_at? string

---@class PostmortemDocumentUpdateData
---@field id string
---@field created_at? string
---@field document_url? string
---@field editor? table
---@field exported_url? table
---@field incident_id? string
---@field status? string
---@field title? string
---@field type? string
---@field updated_at? string

---@class Secret
---@field created_at string
---@field description? string
---@field id string
---@field last_four_char? string
---@field name string
---@field owning_team_id? table
---@field secret table
---@field updated_at string
---@field value string
---@field version table

---@class SecretLoadMatch
---@field id string

---@class SecretListMatch
---@field created_at? string
---@field description? string
---@field id? string
---@field last_four_char? string
---@field name? string
---@field owning_team_id? table
---@field secret? table
---@field updated_at? string
---@field value? string
---@field version? table

---@class SecretCreateData
---@field created_at string
---@field description? string
---@field id string
---@field last_four_char? string
---@field name string
---@field owning_team_id? table
---@field secret table
---@field updated_at string
---@field value string
---@field version table

---@class SecretUpdateData
---@field id string
---@field created_at? string
---@field description? string
---@field last_four_char? string
---@field name? string
---@field owning_team_id? table
---@field secret? table
---@field updated_at? string
---@field value? string
---@field version? table

---@class SecretRemoveMatch
---@field id string

---@class Team
---@field catalog_entry table
---@field id string
---@field member table
---@field name string

---@class TeamLoadMatch
---@field id string

---@class TeamListMatch
---@field catalog_entry? table
---@field id? string
---@field member? table
---@field name? string

---@class User
---@field base_role table
---@field custom_role table
---@field email? string
---@field id string
---@field is_active boolean
---@field name string
---@field role string
---@field seat table
---@field slack_user_id? string

---@class UserLoadMatch
---@field id string

---@class UserListMatch
---@field base_role? table
---@field custom_role? table
---@field email? string
---@field id? string
---@field is_active? boolean
---@field name? string
---@field role? string
---@field seat? table
---@field slack_user_id? string

---@class Workflow
---@field annotation? table
---@field condition_group table
---@field continue_on_step_error boolean
---@field delay table
---@field expression table
---@field folder? string
---@field form_field? table
---@field id string
---@field include_private_escalation? boolean
---@field include_private_incident? boolean
---@field management_meta table
---@field name string
---@field once_for table
---@field owning_team_id? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident string
---@field runs_on_incident_mode table
---@field shortform? string
---@field skip_step_upgrade? boolean
---@field state? string
---@field step table
---@field trigger string
---@field version number
---@field workflow table

---@class WorkflowLoadMatch
---@field id string

---@class WorkflowListMatch
---@field annotation? table
---@field condition_group? table
---@field continue_on_step_error? boolean
---@field delay? table
---@field expression? table
---@field folder? string
---@field form_field? table
---@field id? string
---@field include_private_escalation? boolean
---@field include_private_incident? boolean
---@field management_meta? table
---@field name? string
---@field once_for? table
---@field owning_team_id? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident? string
---@field runs_on_incident_mode? table
---@field shortform? string
---@field skip_step_upgrade? boolean
---@field state? string
---@field step? table
---@field trigger? string
---@field version? number
---@field workflow? table

---@class WorkflowCreateData
---@field annotation? table
---@field condition_group table
---@field continue_on_step_error boolean
---@field delay table
---@field expression table
---@field folder? string
---@field form_field? table
---@field id string
---@field include_private_escalation? boolean
---@field include_private_incident? boolean
---@field management_meta table
---@field name string
---@field once_for table
---@field owning_team_id? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident string
---@field runs_on_incident_mode table
---@field shortform? string
---@field skip_step_upgrade? boolean
---@field state? string
---@field step table
---@field trigger string
---@field version number
---@field workflow table

---@class WorkflowUpdateData
---@field id string
---@field annotation? table
---@field condition_group? table
---@field continue_on_step_error? boolean
---@field delay? table
---@field expression? table
---@field folder? string
---@field form_field? table
---@field include_private_escalation? boolean
---@field include_private_incident? boolean
---@field management_meta? table
---@field name? string
---@field once_for? table
---@field owning_team_id? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident? string
---@field runs_on_incident_mode? table
---@field shortform? string
---@field skip_step_upgrade? boolean
---@field state? string
---@field step? table
---@field trigger? string
---@field version? number
---@field workflow? table

---@class WorkflowRemoveMatch
---@field id string

---@class WorkflowRun
---@field cancelled_at? string
---@field created_at string
---@field enqueued_at? string
---@field error? string
---@field id string
---@field incident_id? string
---@field incident_reference? string
---@field progress table
---@field scheduled_at string
---@field updated_at string
---@field workflow_id string
---@field workflow_name? string
---@field workflow_version_id string
---@field workflow_version_number number

---@class WorkflowRunLoadMatch
---@field id string

---@class WorkflowRunListMatch
---@field cancelled_at? string
---@field created_at? string
---@field enqueued_at? string
---@field error? string
---@field id? string
---@field incident_id? string
---@field incident_reference? string
---@field progress? table
---@field scheduled_at? string
---@field updated_at? string
---@field workflow_id? string
---@field workflow_name? string
---@field workflow_version_id? string
---@field workflow_version_number? number

local M = {}

return M

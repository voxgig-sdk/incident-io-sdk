// Typed models for the IncidentIo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Action {
  assignee: Record<string, any>
  assignee_id?: string
  completed_at?: string
  created_at: string
  creator: Record<string, any>
  description: string
  id: string
  incident_id: string
  status: string
  updated_at: string
}

export interface ActionLoadMatch {
  id: string
}

export interface ActionListMatch {
  assignee?: Record<string, any>
  assignee_id?: string
  completed_at?: string
  created_at?: string
  creator?: Record<string, any>
  description?: string
  id?: string
  incident_id?: string
  status?: string
  updated_at?: string
}

export interface ActionCreateData {
  assignee: Record<string, any>
  assignee_id?: string
  completed_at?: string
  created_at: string
  creator: Record<string, any>
  description: string
  id: string
  incident_id: string
  status: string
  updated_at: string
}

export interface ActionUpdateData {
  id: string
  assignee?: Record<string, any>
  assignee_id?: string
  completed_at?: string
  created_at?: string
  creator?: Record<string, any>
  description?: string
  incident_id?: string
  status?: string
  updated_at?: string
}

export interface ActionRemoveMatch {
  id: string
}

export interface Alert {
  alert_group_id?: any[]
  alert_source_id: string
  attribute: any[]
  created_at: string
  deduplication_key: string
  description?: string
  id: string
  resolved_at?: string
  source_url?: string
  status: string
  title: string
  updated_at: string
}

export interface AlertLoadMatch {
  id: string
}

export interface AlertListMatch {
  alert_group_id?: any[]
  alert_source_id?: string
  attribute?: any[]
  created_at?: string
  deduplication_key?: string
  description?: string
  id?: string
  resolved_at?: string
  source_url?: string
  status?: string
  title?: string
  updated_at?: string
}

export interface AlertAttribute {
  array: boolean
  emoji?: string
  id: string
  name: string
  required: boolean
  type: string
}

export interface AlertAttributeLoadMatch {
  id: string
}

export interface AlertAttributeListMatch {
  array?: boolean
  emoji?: string
  id?: string
  name?: string
  required?: boolean
  type?: string
}

export interface AlertAttributeCreateData {
  array: boolean
  emoji?: string
  id: string
  name: string
  required: boolean
  type: string
}

export interface AlertAttributeUpdateData {
  id: string
  array?: boolean
  emoji?: string
  name?: string
  required?: boolean
  type?: string
}

export interface AlertAttributeRemoveMatch {
  id: string
}

export interface AlertNote {
  alert_group_id?: string
  alert_id?: string
  content: string
  created_at: string
  creator: Record<string, any>
  id: string
  image: any[]
  last_edited_at?: string
  updated_at: string
}

export interface AlertNoteLoadMatch {
  id: string
}

export interface AlertNoteListMatch {
  alert_group_id?: string
  alert_id?: string
  content?: string
  created_at?: string
  creator?: Record<string, any>
  id?: string
  image?: any[]
  last_edited_at?: string
  updated_at?: string
}

export interface AlertNoteCreateData {
  alert_group_id?: string
  alert_id?: string
  content: string
  created_at: string
  creator: Record<string, any>
  id: string
  image: any[]
  last_edited_at?: string
  updated_at: string
}

export interface AlertNoteUpdateData {
  id: string
  alert_group_id?: string
  alert_id?: string
  content?: string
  created_at?: string
  creator?: Record<string, any>
  image?: any[]
  last_edited_at?: string
  updated_at?: string
}

export interface AlertNoteRemoveMatch {
  id: string
}

export interface AlertRoute {
  alert_source: any[]
  condition_group: any[]
  created_at?: string
  enabled: boolean
  escalation_config: Record<string, any>
  expression: any[]
  grouping_config: Record<string, any>
  id: string
  incident_config: Record<string, any>
  is_private: boolean
  message_config: Record<string, any>
  name: string
  owning_team_id?: any[]
  updated_at?: string
  version: number
}

export interface AlertRouteLoadMatch {
  id: string
}

export interface AlertRouteListMatch {
  alert_source?: any[]
  condition_group?: any[]
  created_at?: string
  enabled?: boolean
  escalation_config?: Record<string, any>
  expression?: any[]
  grouping_config?: Record<string, any>
  id?: string
  incident_config?: Record<string, any>
  is_private?: boolean
  message_config?: Record<string, any>
  name?: string
  owning_team_id?: any[]
  updated_at?: string
  version?: number
}

export interface AlertRouteCreateData {
  alert_source: any[]
  condition_group: any[]
  created_at?: string
  enabled: boolean
  escalation_config: Record<string, any>
  expression: any[]
  grouping_config: Record<string, any>
  id: string
  incident_config: Record<string, any>
  is_private: boolean
  message_config: Record<string, any>
  name: string
  owning_team_id?: any[]
  updated_at?: string
  version: number
}

export interface AlertRouteUpdateData {
  id: string
  alert_source?: any[]
  condition_group?: any[]
  created_at?: string
  enabled?: boolean
  escalation_config?: Record<string, any>
  expression?: any[]
  grouping_config?: Record<string, any>
  incident_config?: Record<string, any>
  is_private?: boolean
  message_config?: Record<string, any>
  name?: string
  owning_team_id?: any[]
  updated_at?: string
  version?: number
}

export interface AlertRouteRemoveMatch {
  id: string
}

export interface AlertSource {
  alert_events_url?: string
  auto_resolve_incident_alert?: boolean
  auto_resolve_timeout_minute?: number
  disabled?: boolean
  email_option: Record<string, any>
  heartbeat_option: Record<string, any>
  http_custom_option: Record<string, any>
  id: string
  jira_option: Record<string, any>
  name: string
  owning_team_id?: any[]
  secret_token?: string
  source_type: string
  template: Record<string, any>
}

export interface AlertSourceLoadMatch {
  id: string
}

export interface AlertSourceListMatch {
  alert_events_url?: string
  auto_resolve_incident_alert?: boolean
  auto_resolve_timeout_minute?: number
  disabled?: boolean
  email_option?: Record<string, any>
  heartbeat_option?: Record<string, any>
  http_custom_option?: Record<string, any>
  id?: string
  jira_option?: Record<string, any>
  name?: string
  owning_team_id?: any[]
  secret_token?: string
  source_type?: string
  template?: Record<string, any>
}

export interface AlertSourceCreateData {
  alert_events_url?: string
  auto_resolve_incident_alert?: boolean
  auto_resolve_timeout_minute?: number
  disabled?: boolean
  email_option: Record<string, any>
  heartbeat_option: Record<string, any>
  http_custom_option: Record<string, any>
  id: string
  jira_option: Record<string, any>
  name: string
  owning_team_id?: any[]
  secret_token?: string
  source_type: string
  template: Record<string, any>
}

export interface AlertSourceUpdateData {
  id: string
  alert_events_url?: string
  auto_resolve_incident_alert?: boolean
  auto_resolve_timeout_minute?: number
  disabled?: boolean
  email_option?: Record<string, any>
  heartbeat_option?: Record<string, any>
  http_custom_option?: Record<string, any>
  jira_option?: Record<string, any>
  name?: string
  owning_team_id?: any[]
  secret_token?: string
  source_type?: string
  template?: Record<string, any>
}

export interface AlertSourceRemoveMatch {
  id: string
}

export interface ApiKey {
  comment?: string
  created_at: string
  creator: Record<string, any>
  id: string
  last_used_at?: string
  name: string
  role: any[]
  role_name: any[]
  team_id: any[]
  team_role: any[]
  team_role_name: any[]
  token_last_issued_at: string
}

export interface ApiKeyLoadMatch {
  id: string
}

export interface ApiKeyListMatch {
  comment?: string
  created_at?: string
  creator?: Record<string, any>
  id?: string
  last_used_at?: string
  name?: string
  role?: any[]
  role_name?: any[]
  team_id?: any[]
  team_role?: any[]
  team_role_name?: any[]
  token_last_issued_at?: string
}

export interface ApiKeyCreateData {
  comment?: string
  created_at: string
  creator: Record<string, any>
  id: string
  last_used_at?: string
  name: string
  role: any[]
  role_name: any[]
  team_id: any[]
  team_role: any[]
  team_role_name: any[]
  token_last_issued_at: string
}

export interface ApiKeyUpdateData {
  id: string
  comment?: string
  created_at?: string
  creator?: Record<string, any>
  last_used_at?: string
  name?: string
  role?: any[]
  role_name?: any[]
  team_id?: any[]
  team_role?: any[]
  team_role_name?: any[]
  token_last_issued_at?: string
}

export interface ApiKeyRemoveMatch {
  id: string
}

export interface CustomField {
  catalog_type_id?: string
  created_at: string
  description: string
  field_type: string
  filter_by: Record<string, any>
  fixed_filter: Record<string, any>
  group_by_catalog_attribute_id?: string
  helptext_catalog_attribute_id?: string
  id: string
  name: string
  updated_at: string
}

export interface CustomFieldLoadMatch {
  id: string
}

export interface CustomFieldListMatch {
  catalog_type_id?: string
  created_at?: string
  description?: string
  field_type?: string
  filter_by?: Record<string, any>
  fixed_filter?: Record<string, any>
  group_by_catalog_attribute_id?: string
  helptext_catalog_attribute_id?: string
  id?: string
  name?: string
  updated_at?: string
}

export interface CustomFieldCreateData {
  catalog_type_id?: string
  created_at: string
  description: string
  field_type: string
  filter_by: Record<string, any>
  fixed_filter: Record<string, any>
  group_by_catalog_attribute_id?: string
  helptext_catalog_attribute_id?: string
  id: string
  name: string
  updated_at: string
}

export interface CustomFieldUpdateData {
  id: string
  catalog_type_id?: string
  created_at?: string
  description?: string
  field_type?: string
  filter_by?: Record<string, any>
  fixed_filter?: Record<string, any>
  group_by_catalog_attribute_id?: string
  helptext_catalog_attribute_id?: string
  name?: string
  updated_at?: string
}

export interface CustomFieldRemoveMatch {
  id: string
}

export interface CustomFieldOption {
  custom_field_id: string
  id: string
  sort_key: number
  value: string
}

export interface CustomFieldOptionLoadMatch {
  id: string
}

export interface CustomFieldOptionListMatch {
  custom_field_id?: string
  id?: string
  sort_key?: number
  value?: string
}

export interface CustomFieldOptionCreateData {
  custom_field_id: string
  id: string
  sort_key: number
  value: string
}

export interface CustomFieldOptionUpdateData {
  id: string
  custom_field_id?: string
  sort_key?: number
  value?: string
}

export interface CustomFieldOptionRemoveMatch {
  id: string
}

export interface FollowUp {
  assignee: Record<string, any>
  assignee_id?: string
  assignee_team: Record<string, any>
  assignee_team_id?: string
  completed_at?: string
  created_at: string
  creator: Record<string, any>
  description?: string
  external_issue_reference: Record<string, any>
  external_issue_reference_id?: string
  follow_up_category_id?: string
  follow_up_priority_option_id?: string
  id: string
  incident_id: string
  label: any[]
  priority: Record<string, any>
  status: string
  title: string
  updated_at: string
}

export interface FollowUpLoadMatch {
  id: string
}

export interface FollowUpListMatch {
  assignee?: Record<string, any>
  assignee_id?: string
  assignee_team?: Record<string, any>
  assignee_team_id?: string
  completed_at?: string
  created_at?: string
  creator?: Record<string, any>
  description?: string
  external_issue_reference?: Record<string, any>
  external_issue_reference_id?: string
  follow_up_category_id?: string
  follow_up_priority_option_id?: string
  id?: string
  incident_id?: string
  label?: any[]
  priority?: Record<string, any>
  status?: string
  title?: string
  updated_at?: string
}

export interface FollowUpCreateData {
  assignee: Record<string, any>
  assignee_id?: string
  assignee_team: Record<string, any>
  assignee_team_id?: string
  completed_at?: string
  created_at: string
  creator: Record<string, any>
  description?: string
  external_issue_reference: Record<string, any>
  external_issue_reference_id?: string
  follow_up_category_id?: string
  follow_up_priority_option_id?: string
  id: string
  incident_id: string
  label: any[]
  priority: Record<string, any>
  status: string
  title: string
  updated_at: string
}

export interface FollowUpUpdateData {
  id: string
  assignee?: Record<string, any>
  assignee_id?: string
  assignee_team?: Record<string, any>
  assignee_team_id?: string
  completed_at?: string
  created_at?: string
  creator?: Record<string, any>
  description?: string
  external_issue_reference?: Record<string, any>
  external_issue_reference_id?: string
  follow_up_category_id?: string
  follow_up_priority_option_id?: string
  incident_id?: string
  label?: any[]
  priority?: Record<string, any>
  status?: string
  title?: string
  updated_at?: string
}

export interface FollowUpRemoveMatch {
  id: string
}

export interface Incident {
  call_url?: string
  created_at: string
  creator: Record<string, any>
  custom_field_entry: any[]
  duration_metric?: any[]
  external_issue_reference: Record<string, any>
  has_debrief?: boolean
  id: string
  idempotency_key: string
  incident_role_assignment: any[]
  incident_status: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type: Record<string, any>
  incident_type_id?: string
  mode: string
  name: string
  permalink?: string
  postmortem_document_id?: any[]
  postmortem_document_url?: string
  reference: string
  retrospective_incident_option?: Record<string, any>
  severity: Record<string, any>
  severity_id?: string
  slack_channel_id: string
  slack_channel_name?: string
  slack_channel_name_override?: string
  slack_team_id: string
  summary?: string
  updated_at: string
  visibility: string
  workload_minutes_late?: number
  workload_minutes_sleeping?: number
  workload_minutes_total?: number
  workload_minutes_working?: number
}

export interface IncidentLoadMatch {
  id: string
}

export interface IncidentListMatch {
  call_url?: string
  created_at?: string
  creator?: Record<string, any>
  custom_field_entry?: any[]
  duration_metric?: any[]
  external_issue_reference?: Record<string, any>
  has_debrief?: boolean
  id?: string
  idempotency_key?: string
  incident_role_assignment?: any[]
  incident_status?: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type?: Record<string, any>
  incident_type_id?: string
  mode?: string
  name?: string
  permalink?: string
  postmortem_document_id?: any[]
  postmortem_document_url?: string
  reference?: string
  retrospective_incident_option?: Record<string, any>
  severity?: Record<string, any>
  severity_id?: string
  slack_channel_id?: string
  slack_channel_name?: string
  slack_channel_name_override?: string
  slack_team_id?: string
  summary?: string
  updated_at?: string
  visibility?: string
  workload_minutes_late?: number
  workload_minutes_sleeping?: number
  workload_minutes_total?: number
  workload_minutes_working?: number
}

export interface IncidentCreateData {
  call_url?: string
  created_at: string
  creator: Record<string, any>
  custom_field_entry: any[]
  duration_metric?: any[]
  external_issue_reference: Record<string, any>
  has_debrief?: boolean
  id: string
  idempotency_key: string
  incident_role_assignment: any[]
  incident_status: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type: Record<string, any>
  incident_type_id?: string
  mode: string
  name: string
  permalink?: string
  postmortem_document_id?: any[]
  postmortem_document_url?: string
  reference: string
  retrospective_incident_option?: Record<string, any>
  severity: Record<string, any>
  severity_id?: string
  slack_channel_id: string
  slack_channel_name?: string
  slack_channel_name_override?: string
  slack_team_id: string
  summary?: string
  updated_at: string
  visibility: string
  workload_minutes_late?: number
  workload_minutes_sleeping?: number
  workload_minutes_total?: number
  workload_minutes_working?: number
}

export interface IncidentAttachment {
  id: string
  incident_id: string
  resource: Record<string, any>
}

export interface IncidentAttachmentListMatch {
  id?: string
  incident_id?: string
  resource?: Record<string, any>
}

export interface IncidentAttachmentCreateData {
  id: string
  incident_id: string
  resource: Record<string, any>
}

export interface IncidentAttachmentRemoveMatch {
  id: string
}

export interface IncidentMembership {
  incident_id: string
  user_id: string
}

export interface IncidentMembershipCreateData {
  incident_id: string
  user_id: string
}

export interface IncidentParticipant {
  active: any[]
  passive: any[]
}

export interface IncidentParticipantLoadMatch {
  active?: any[]
  passive?: any[]
}

export interface IncidentParticipantWorkload {
  archived_at?: string
  participant_type?: string
  user: Record<string, any>
  workload: Record<string, any>
}

export interface IncidentParticipantWorkloadListMatch {
  archived_at?: string
  participant_type?: string
  user?: Record<string, any>
  workload?: Record<string, any>
}

export interface IncidentRelationship {
  id: string
  incident: Record<string, any>
}

export interface IncidentRelationshipListMatch {
  id?: string
  incident?: Record<string, any>
}

export interface IncidentRole {
  created_at: string
  description: string
  id: string
  instruction: string
  name: string
  role_type: string
  shortform: string
  updated_at: string
}

export interface IncidentRoleLoadMatch {
  id: string
}

export interface IncidentRoleListMatch {
  created_at?: string
  description?: string
  id?: string
  instruction?: string
  name?: string
  role_type?: string
  shortform?: string
  updated_at?: string
}

export interface IncidentRoleCreateData {
  created_at: string
  description: string
  id: string
  instruction: string
  name: string
  role_type: string
  shortform: string
  updated_at: string
}

export interface IncidentRoleUpdateData {
  id: string
  created_at?: string
  description?: string
  instruction?: string
  name?: string
  role_type?: string
  shortform?: string
  updated_at?: string
}

export interface IncidentRoleRemoveMatch {
  id: string
}

export interface IncidentStatus {
  category: string
  created_at: string
  description: string
  id: string
  name: string
  rank: number
  updated_at: string
}

export interface IncidentStatusLoadMatch {
  id: string
}

export interface IncidentStatusListMatch {
  category?: string
  created_at?: string
  description?: string
  id?: string
  name?: string
  rank?: number
  updated_at?: string
}

export interface IncidentStatusCreateData {
  category: string
  created_at: string
  description: string
  id: string
  name: string
  rank: number
  updated_at: string
}

export interface IncidentStatusUpdateData {
  id: string
  category?: string
  created_at?: string
  description?: string
  name?: string
  rank?: number
  updated_at?: string
}

export interface IncidentStatusRemoveMatch {
  id: string
}

export interface IncidentTimestamp {
  id: string
  name: string
  rank: number
}

export interface IncidentTimestampLoadMatch {
  id: string
}

export interface IncidentTimestampListMatch {
  id?: string
  name?: string
  rank?: number
}

export interface IncidentType {
  create_in_triage: string
  created_at: string
  description: string
  id: string
  is_default: boolean
  name: string
  owning_team_id?: any[]
  private_incidents_only: boolean
  updated_at: string
}

export interface IncidentTypeLoadMatch {
  id: string
}

export interface IncidentTypeListMatch {
  create_in_triage?: string
  created_at?: string
  description?: string
  id?: string
  is_default?: boolean
  name?: string
  owning_team_id?: any[]
  private_incidents_only?: boolean
  updated_at?: string
}

export interface IncidentUpdate {
  created_at: string
  id: string
  incident_id: string
  merged_into_incident_id?: string
  message?: string
  new_incident_status: Record<string, any>
  new_severity: Record<string, any>
  updater: Record<string, any>
}

export interface IncidentUpdateListMatch {
  created_at?: string
  id?: string
  incident_id?: string
  merged_into_incident_id?: string
  message?: string
  new_incident_status?: Record<string, any>
  new_severity?: Record<string, any>
  updater?: Record<string, any>
}

export interface IpAllowlist {
  allowlist: any[]
  enabled: boolean
  updated_at?: string
  version: number
}

export interface IpAllowlistLoadMatch {
  allowlist?: any[]
  enabled?: boolean
  updated_at?: string
  version?: number
}

export interface IpAllowlistUpdateData {
  allowlist?: any[]
  enabled?: boolean
  updated_at?: string
  version?: number
}

export interface MaintenanceWindow {
  alert_condition_group: any[]
  archived_at?: string
  created_at: string
  end_at: string
  escalation_target?: any[]
  id: string
  incident_id?: string
  lead: Record<string, any>
  name: string
  notification_message?: string
  notify_channel?: any[]
  notify_end_minutes_before?: number
  notify_start_minutes_before?: number
  reroute_on_end: boolean
  resolve_on_end: boolean
  show_in_sidebar: boolean
  start_at: string
  updated_at: string
}

export interface MaintenanceWindowLoadMatch {
  id: string
}

export interface MaintenanceWindowListMatch {
  alert_condition_group?: any[]
  archived_at?: string
  created_at?: string
  end_at?: string
  escalation_target?: any[]
  id?: string
  incident_id?: string
  lead?: Record<string, any>
  name?: string
  notification_message?: string
  notify_channel?: any[]
  notify_end_minutes_before?: number
  notify_start_minutes_before?: number
  reroute_on_end?: boolean
  resolve_on_end?: boolean
  show_in_sidebar?: boolean
  start_at?: string
  updated_at?: string
}

export interface MaintenanceWindowCreateData {
  alert_condition_group: any[]
  archived_at?: string
  created_at: string
  end_at: string
  escalation_target?: any[]
  id: string
  incident_id?: string
  lead: Record<string, any>
  name: string
  notification_message?: string
  notify_channel?: any[]
  notify_end_minutes_before?: number
  notify_start_minutes_before?: number
  reroute_on_end: boolean
  resolve_on_end: boolean
  show_in_sidebar: boolean
  start_at: string
  updated_at: string
}

export interface MaintenanceWindowUpdateData {
  id: string
  alert_condition_group?: any[]
  archived_at?: string
  created_at?: string
  end_at?: string
  escalation_target?: any[]
  incident_id?: string
  lead?: Record<string, any>
  name?: string
  notification_message?: string
  notify_channel?: any[]
  notify_end_minutes_before?: number
  notify_start_minutes_before?: number
  reroute_on_end?: boolean
  resolve_on_end?: boolean
  show_in_sidebar?: boolean
  start_at?: string
  updated_at?: string
}

export interface MaintenanceWindowRemoveMatch {
  id: string
}

export interface PostmortemDocument {
  created_at: string
  document_url: string
  editor: any[]
  exported_url: any[]
  id: string
  incident_id: string
  status: string
  title: string
  type: string
  updated_at: string
}

export interface PostmortemDocumentLoadMatch {
  id: string
}

export interface PostmortemDocumentListMatch {
  created_at?: string
  document_url?: string
  editor?: any[]
  exported_url?: any[]
  id?: string
  incident_id?: string
  status?: string
  title?: string
  type?: string
  updated_at?: string
}

export interface PostmortemDocumentUpdateData {
  id: string
  created_at?: string
  document_url?: string
  editor?: any[]
  exported_url?: any[]
  incident_id?: string
  status?: string
  title?: string
  type?: string
  updated_at?: string
}

export interface Secret {
  created_at: string
  description?: string
  id: string
  last_four_char?: string
  name: string
  owning_team_id?: any[]
  secret: Record<string, any>
  updated_at: string
  value: string
  version: any[]
}

export interface SecretLoadMatch {
  id: string
}

export interface SecretListMatch {
  created_at?: string
  description?: string
  id?: string
  last_four_char?: string
  name?: string
  owning_team_id?: any[]
  secret?: Record<string, any>
  updated_at?: string
  value?: string
  version?: any[]
}

export interface SecretCreateData {
  created_at: string
  description?: string
  id: string
  last_four_char?: string
  name: string
  owning_team_id?: any[]
  secret: Record<string, any>
  updated_at: string
  value: string
  version: any[]
}

export interface SecretUpdateData {
  id: string
  created_at?: string
  description?: string
  last_four_char?: string
  name?: string
  owning_team_id?: any[]
  secret?: Record<string, any>
  updated_at?: string
  value?: string
  version?: any[]
}

export interface SecretRemoveMatch {
  id: string
}

export interface Team {
  catalog_entry: Record<string, any>
  id: string
  member: any[]
  name: string
}

export interface TeamLoadMatch {
  id: string
}

export interface TeamListMatch {
  catalog_entry?: Record<string, any>
  id?: string
  member?: any[]
  name?: string
}

export interface User {
  base_role: Record<string, any>
  custom_role: any[]
  email?: string
  id: string
  is_active: boolean
  name: string
  role: string
  seat: Record<string, any>
  slack_user_id?: string
}

export interface UserLoadMatch {
  id: string
}

export interface UserListMatch {
  base_role?: Record<string, any>
  custom_role?: any[]
  email?: string
  id?: string
  is_active?: boolean
  name?: string
  role?: string
  seat?: Record<string, any>
  slack_user_id?: string
}

export interface Workflow {
  annotation?: Record<string, any>
  condition_group: any[]
  continue_on_step_error: boolean
  delay: Record<string, any>
  expression: any[]
  folder?: string
  form_field?: any[]
  id: string
  include_private_escalation?: boolean
  include_private_incident?: boolean
  management_meta: Record<string, any>
  name: string
  once_for: any[]
  owning_team_id?: any[]
  private_incident_scope?: string
  runs_from?: string
  runs_on_incident: string
  runs_on_incident_mode: any[]
  shortform?: string
  skip_step_upgrade?: boolean
  state?: string
  step: any[]
  trigger: string
  version: number
  workflow: Record<string, any>
}

export interface WorkflowLoadMatch {
  id: string
}

export interface WorkflowListMatch {
  annotation?: Record<string, any>
  condition_group?: any[]
  continue_on_step_error?: boolean
  delay?: Record<string, any>
  expression?: any[]
  folder?: string
  form_field?: any[]
  id?: string
  include_private_escalation?: boolean
  include_private_incident?: boolean
  management_meta?: Record<string, any>
  name?: string
  once_for?: any[]
  owning_team_id?: any[]
  private_incident_scope?: string
  runs_from?: string
  runs_on_incident?: string
  runs_on_incident_mode?: any[]
  shortform?: string
  skip_step_upgrade?: boolean
  state?: string
  step?: any[]
  trigger?: string
  version?: number
  workflow?: Record<string, any>
}

export interface WorkflowCreateData {
  annotation?: Record<string, any>
  condition_group: any[]
  continue_on_step_error: boolean
  delay: Record<string, any>
  expression: any[]
  folder?: string
  form_field?: any[]
  id: string
  include_private_escalation?: boolean
  include_private_incident?: boolean
  management_meta: Record<string, any>
  name: string
  once_for: any[]
  owning_team_id?: any[]
  private_incident_scope?: string
  runs_from?: string
  runs_on_incident: string
  runs_on_incident_mode: any[]
  shortform?: string
  skip_step_upgrade?: boolean
  state?: string
  step: any[]
  trigger: string
  version: number
  workflow: Record<string, any>
}

export interface WorkflowUpdateData {
  id: string
  annotation?: Record<string, any>
  condition_group?: any[]
  continue_on_step_error?: boolean
  delay?: Record<string, any>
  expression?: any[]
  folder?: string
  form_field?: any[]
  include_private_escalation?: boolean
  include_private_incident?: boolean
  management_meta?: Record<string, any>
  name?: string
  once_for?: any[]
  owning_team_id?: any[]
  private_incident_scope?: string
  runs_from?: string
  runs_on_incident?: string
  runs_on_incident_mode?: any[]
  shortform?: string
  skip_step_upgrade?: boolean
  state?: string
  step?: any[]
  trigger?: string
  version?: number
  workflow?: Record<string, any>
}

export interface WorkflowRemoveMatch {
  id: string
}

export interface WorkflowRun {
  cancelled_at?: string
  created_at: string
  enqueued_at?: string
  error?: string
  id: string
  incident_id?: string
  incident_reference?: string
  progress: any[]
  scheduled_at: string
  updated_at: string
  workflow_id: string
  workflow_name?: string
  workflow_version_id: string
  workflow_version_number: number
}

export interface WorkflowRunLoadMatch {
  id: string
}

export interface WorkflowRunListMatch {
  cancelled_at?: string
  created_at?: string
  enqueued_at?: string
  error?: string
  id?: string
  incident_id?: string
  incident_reference?: string
  progress?: any[]
  scheduled_at?: string
  updated_at?: string
  workflow_id?: string
  workflow_name?: string
  workflow_version_id?: string
  workflow_version_number?: number
}


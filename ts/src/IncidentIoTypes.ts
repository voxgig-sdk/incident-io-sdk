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
  description?: string
  external_issue_reference?: Record<string, any>
  follow_up: boolean
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
  external_issue_reference?: Record<string, any>
  follow_up?: boolean
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
  description?: string
  external_issue_reference?: Record<string, any>
  follow_up: boolean
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
  external_issue_reference?: Record<string, any>
  follow_up?: boolean
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

export interface AlertCreateData {
  id: string
  alert_group_id?: any[]
  alert_source_id: string
  attribute: any[]
  created_at: string
  deduplication_key: string
  description?: string
  resolved_at?: string
  source_url?: string
  status: string
  title: string
  updated_at: string
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
  channel_config: any[]
  condition_group: any[]
  created_at?: string
  enabled: boolean
  escalation_config: Record<string, any>
  expression: any[]
  grouping_config: Record<string, any>
  id: string
  incident_config: Record<string, any>
  incident_template: Record<string, any>
  is_private: boolean
  message_config: Record<string, any>
  message_template?: Record<string, any>
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
  channel_config?: any[]
  condition_group?: any[]
  created_at?: string
  enabled?: boolean
  escalation_config?: Record<string, any>
  expression?: any[]
  grouping_config?: Record<string, any>
  id?: string
  incident_config?: Record<string, any>
  incident_template?: Record<string, any>
  is_private?: boolean
  message_config?: Record<string, any>
  message_template?: Record<string, any>
  name?: string
  owning_team_id?: any[]
  updated_at?: string
  version?: number
}

export interface AlertRouteCreateData {
  alert_source: any[]
  channel_config: any[]
  condition_group: any[]
  created_at?: string
  enabled: boolean
  escalation_config: Record<string, any>
  expression: any[]
  grouping_config: Record<string, any>
  id: string
  incident_config: Record<string, any>
  incident_template: Record<string, any>
  is_private: boolean
  message_config: Record<string, any>
  message_template?: Record<string, any>
  name: string
  owning_team_id?: any[]
  updated_at?: string
  version: number
}

export interface AlertRouteUpdateData {
  id: string
  alert_source?: any[]
  channel_config?: any[]
  condition_group?: any[]
  created_at?: string
  enabled?: boolean
  escalation_config?: Record<string, any>
  expression?: any[]
  grouping_config?: Record<string, any>
  incident_config?: Record<string, any>
  incident_template?: Record<string, any>
  is_private?: boolean
  message_config?: Record<string, any>
  message_template?: Record<string, any>
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
  grace_period_minute: number
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
  grace_period_minute?: number
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
  grace_period_minute: number
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
  grace_period_minute?: number
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

export interface CatalogEntry {
  alias?: any[]
  archived_at?: string
  attribute_value: Record<string, any>
  catalog_entry: Record<string, any>
  catalog_type: Record<string, any>
  catalog_type_id: string
  created_at: string
  external_id?: string
  id: string
  name: string
  rank?: number
  update_attribute?: any[]
  updated_at: string
}

export interface CatalogEntryLoadMatch {
  id: string
}

export interface CatalogEntryListMatch {
  alias?: any[]
  archived_at?: string
  attribute_value?: Record<string, any>
  catalog_entry?: Record<string, any>
  catalog_type?: Record<string, any>
  catalog_type_id?: string
  created_at?: string
  external_id?: string
  id?: string
  name?: string
  rank?: number
  update_attribute?: any[]
  updated_at?: string
}

export interface CatalogEntryCreateData {
  alias?: any[]
  archived_at?: string
  attribute_value: Record<string, any>
  catalog_entry: Record<string, any>
  catalog_type: Record<string, any>
  catalog_type_id: string
  created_at: string
  external_id?: string
  id: string
  name: string
  rank?: number
  update_attribute?: any[]
  updated_at: string
}

export interface CatalogEntryUpdateData {
  id: string
  alias?: any[]
  archived_at?: string
  attribute_value?: Record<string, any>
  catalog_entry?: Record<string, any>
  catalog_type?: Record<string, any>
  catalog_type_id?: string
  created_at?: string
  external_id?: string
  name?: string
  rank?: number
  update_attribute?: any[]
  updated_at?: string
}

export interface CatalogResource {
  category: string
  description: string
  engine_resource_type: string
  label: string
  type: string
  value_docstring: string
}

export interface CatalogResourceListMatch {
  category?: string
  description?: string
  engine_resource_type?: string
  label?: string
  type?: string
  value_docstring?: string
}

export interface CatalogType {
  annotation: Record<string, any>
  category: any[]
  color: string
  created_at: string
  description: string
  dynamic_resource_parameter?: string
  engine_resource_type: string
  estimated_count?: number
  icon: string
  id: string
  is_editable: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name: string
  owning_team_id?: any[]
  ranked: boolean
  registry_type?: string
  required_integration?: any[]
  schema: Record<string, any>
  semantic_type: string
  source_repo_url?: string
  type_name: string
  updated_at: string
  use_name_as_identifier: boolean
}

export interface CatalogTypeLoadMatch {
  id: string
}

export interface CatalogTypeListMatch {
  annotation?: Record<string, any>
  category?: any[]
  color?: string
  created_at?: string
  description?: string
  dynamic_resource_parameter?: string
  engine_resource_type?: string
  estimated_count?: number
  icon?: string
  id?: string
  is_editable?: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name?: string
  owning_team_id?: any[]
  ranked?: boolean
  registry_type?: string
  required_integration?: any[]
  schema?: Record<string, any>
  semantic_type?: string
  source_repo_url?: string
  type_name?: string
  updated_at?: string
  use_name_as_identifier?: boolean
}

export interface CatalogTypeCreateData {
  annotation: Record<string, any>
  category: any[]
  color: string
  created_at: string
  description: string
  dynamic_resource_parameter?: string
  engine_resource_type: string
  estimated_count?: number
  icon: string
  id: string
  is_editable: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name: string
  owning_team_id?: any[]
  ranked: boolean
  registry_type?: string
  required_integration?: any[]
  schema: Record<string, any>
  semantic_type: string
  source_repo_url?: string
  type_name: string
  updated_at: string
  use_name_as_identifier: boolean
}

export interface CatalogTypeUpdateData {
  id: string
  annotation?: Record<string, any>
  category?: any[]
  color?: string
  created_at?: string
  description?: string
  dynamic_resource_parameter?: string
  engine_resource_type?: string
  estimated_count?: number
  icon?: string
  is_editable?: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name?: string
  owning_team_id?: any[]
  ranked?: boolean
  registry_type?: string
  required_integration?: any[]
  schema?: Record<string, any>
  semantic_type?: string
  source_repo_url?: string
  type_name?: string
  updated_at?: string
  use_name_as_identifier?: boolean
}

export interface CatalogTypeSchema {
  annotation: Record<string, any>
  attribute: any[]
  category: any[]
  color: string
  created_at: string
  description: string
  dynamic_resource_parameter?: string
  engine_resource_type: string
  estimated_count?: number
  icon: string
  id: string
  is_editable: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name: string
  owning_team_id?: any[]
  ranked: boolean
  registry_type?: string
  required_integration?: any[]
  schema: Record<string, any>
  semantic_type: string
  source_repo_url?: string
  type_name: string
  updated_at: string
  use_name_as_identifier: boolean
  version: number
}

export interface CatalogTypeSchemaCreateData {
  catalog_type_id: string
  annotation: Record<string, any>
  attribute: any[]
  category: any[]
  color: string
  created_at: string
  description: string
  dynamic_resource_parameter?: string
  engine_resource_type: string
  estimated_count?: number
  icon: string
  id: string
  is_editable: boolean
  is_team_type?: boolean
  last_synced_at?: string
  name: string
  owning_team_id?: any[]
  ranked: boolean
  registry_type?: string
  required_integration?: any[]
  schema: Record<string, any>
  semantic_type: string
  source_repo_url?: string
  type_name: string
  updated_at: string
  use_name_as_identifier: boolean
  version: number
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
  option: any[]
  required?: string
  required_v2?: string
  show_before_closure: boolean
  show_before_creation: boolean
  show_before_update: boolean
  show_in_announcement_post?: boolean
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
  option?: any[]
  required?: string
  required_v2?: string
  show_before_closure?: boolean
  show_before_creation?: boolean
  show_before_update?: boolean
  show_in_announcement_post?: boolean
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
  option: any[]
  required?: string
  required_v2?: string
  show_before_closure: boolean
  show_before_creation: boolean
  show_before_update: boolean
  show_in_announcement_post?: boolean
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
  option?: any[]
  required?: string
  required_v2?: string
  show_before_closure?: boolean
  show_before_creation?: boolean
  show_before_update?: boolean
  show_in_announcement_post?: boolean
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

export interface Escalation {
  created_at: string
  creator: Record<string, any>
  description?: string
  escalation_path_id?: string
  event: any[]
  id: string
  idempotency_key: string
  incident_id?: string
  priority: Record<string, any>
  related_alert: any[]
  related_incident: any[]
  status: string
  title: string
  updated_at: string
  user_id?: any[]
}

export interface EscalationLoadMatch {
  id: string
}

export interface EscalationListMatch {
  created_at?: string
  creator?: Record<string, any>
  description?: string
  escalation_path_id?: string
  event?: any[]
  id?: string
  idempotency_key?: string
  incident_id?: string
  priority?: Record<string, any>
  related_alert?: any[]
  related_incident?: any[]
  status?: string
  title?: string
  updated_at?: string
  user_id?: any[]
}

export interface EscalationCreateData {
  created_at: string
  creator: Record<string, any>
  description?: string
  escalation_path_id?: string
  event: any[]
  id: string
  idempotency_key: string
  incident_id?: string
  priority: Record<string, any>
  related_alert: any[]
  related_incident: any[]
  status: string
  title: string
  updated_at: string
  user_id?: any[]
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
  incident: Record<string, any>
  incident_role_assignment: any[]
  incident_status: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type: Record<string, any>
  incident_type_id?: string
  mode: string
  name: string
  notify_incident_channel: boolean
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
  source_message_channel_id?: string
  source_message_timestamp?: string
  status: string
  summary?: string
  timestamp?: any[]
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
  incident?: Record<string, any>
  incident_role_assignment?: any[]
  incident_status?: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type?: Record<string, any>
  incident_type_id?: string
  mode?: string
  name?: string
  notify_incident_channel?: boolean
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
  source_message_channel_id?: string
  source_message_timestamp?: string
  status?: string
  summary?: string
  timestamp?: any[]
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
  incident: Record<string, any>
  incident_role_assignment: any[]
  incident_status: Record<string, any>
  incident_status_id?: string
  incident_timestamp_value?: any[]
  incident_type: Record<string, any>
  incident_type_id?: string
  mode: string
  name: string
  notify_incident_channel: boolean
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
  source_message_channel_id?: string
  source_message_timestamp?: string
  status: string
  summary?: string
  timestamp?: any[]
  updated_at: string
  visibility: string
  workload_minutes_late?: number
  workload_minutes_sleeping?: number
  workload_minutes_total?: number
  workload_minutes_working?: number
}

export interface IncidentAlert {
  alert: Record<string, any>
  alert_route_id?: string
  id: string
  incident: Record<string, any>
}

export interface IncidentAlertListMatch {
  alert?: Record<string, any>
  alert_route_id?: string
  id?: string
  incident?: Record<string, any>
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
  required?: boolean
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
  required?: boolean
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
  required?: boolean
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
  required?: boolean
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

export interface Schedule {
  annotation: Record<string, any>
  config: Record<string, any>
  created_at: string
  current_shift?: any[]
  holidays_public_config: Record<string, any>
  id: string
  name: string
  next_shift?: any[]
  permalink: string
  schedule: Record<string, any>
  team_id: any[]
  timezone: string
  updated_at: string
}

export interface ScheduleLoadMatch {
  id: string
}

export interface ScheduleListMatch {
  annotation?: Record<string, any>
  config?: Record<string, any>
  created_at?: string
  current_shift?: any[]
  holidays_public_config?: Record<string, any>
  id?: string
  name?: string
  next_shift?: any[]
  permalink?: string
  schedule?: Record<string, any>
  team_id?: any[]
  timezone?: string
  updated_at?: string
}

export interface ScheduleCreateData {
  annotation: Record<string, any>
  config: Record<string, any>
  created_at: string
  current_shift?: any[]
  holidays_public_config: Record<string, any>
  id: string
  name: string
  next_shift?: any[]
  permalink: string
  schedule: Record<string, any>
  team_id: any[]
  timezone: string
  updated_at: string
}

export interface ScheduleUpdateData {
  id: string
  annotation?: Record<string, any>
  config?: Record<string, any>
  created_at?: string
  current_shift?: any[]
  holidays_public_config?: Record<string, any>
  name?: string
  next_shift?: any[]
  permalink?: string
  schedule?: Record<string, any>
  team_id?: any[]
  timezone?: string
  updated_at?: string
}

export interface ScheduleRemoveMatch {
  id: string
}

export interface ScheduleEntry {
  pagination_meta: Record<string, any>
  schedule_entry: Record<string, any>
}

export interface ScheduleEntryLoadMatch {
  pagination_meta?: Record<string, any>
  schedule_entry?: Record<string, any>
}

export interface ScheduleReplica {
  created_at: string
  id: string
  last_sync_error?: string
  last_synced_at?: string
  mirror_window_day?: number
  replica_fallback_user_id: string
  replica_provider: string
  replica_provider_id: string
  schedule_id: string
  schedule_replica: Record<string, any>
  source: any[]
  updated_at: string
  user_status: any[]
}

export interface ScheduleReplicaLoadMatch {
  id: string
  schedule_id: string
}

export interface ScheduleReplicaListMatch {
  id: string
}

export interface ScheduleReplicaCreateData {
  id: string
  created_at: string
  last_sync_error?: string
  last_synced_at?: string
  mirror_window_day?: number
  replica_fallback_user_id: string
  replica_provider: string
  replica_provider_id: string
  schedule_id: string
  schedule_replica: Record<string, any>
  source: any[]
  updated_at: string
  user_status: any[]
}

export interface ScheduleSyncRule {
  annotation?: Record<string, any>
  created_at: string
  id: string
  permanent_member_user_id: any[]
  rotation_id?: string
  schedule_id: string
  schedule_sync_rule: Record<string, any>
  schedule_sync_target: Record<string, any>
  schedule_sync_target_id: string
  sync_type: string
  updated_at: string
}

export interface ScheduleSyncRuleLoadMatch {
  id: string
  schedule_id: string
}

export interface ScheduleSyncRuleListMatch {
  id: string
}

export interface ScheduleSyncRuleCreateData {
  id: string
  annotation?: Record<string, any>
  created_at: string
  permanent_member_user_id: any[]
  rotation_id?: string
  schedule_id: string
  schedule_sync_rule: Record<string, any>
  schedule_sync_target: Record<string, any>
  schedule_sync_target_id: string
  sync_type: string
  updated_at: string
}

export interface ScheduleSyncRuleUpdateData {
  id: string
  schedule_id: string
  annotation?: Record<string, any>
  created_at?: string
  permanent_member_user_id?: any[]
  rotation_id?: string
  schedule_sync_rule?: Record<string, any>
  schedule_sync_target?: Record<string, any>
  schedule_sync_target_id?: string
  sync_type?: string
  updated_at?: string
}

export interface ScheduleSyncTarget {
  add_bot_to_group: boolean
  annotation?: Record<string, any>
  created_at: string
  id: string
  linked_schedule: any[]
  schedule_sync_target: Record<string, any>
  slack_team_id: string
  slack_user_group_id: string
  updated_at: string
}

export interface ScheduleSyncTargetLoadMatch {
  id: string
}

export interface ScheduleSyncTargetListMatch {
  add_bot_to_group?: boolean
  annotation?: Record<string, any>
  created_at?: string
  id?: string
  linked_schedule?: any[]
  schedule_sync_target?: Record<string, any>
  slack_team_id?: string
  slack_user_group_id?: string
  updated_at?: string
}

export interface ScheduleSyncTargetCreateData {
  add_bot_to_group: boolean
  annotation?: Record<string, any>
  created_at: string
  id: string
  linked_schedule: any[]
  schedule_sync_target: Record<string, any>
  slack_team_id: string
  slack_user_group_id: string
  updated_at: string
}

export interface ScheduleSyncTargetUpdateData {
  id: string
  add_bot_to_group?: boolean
  annotation?: Record<string, any>
  created_at?: string
  linked_schedule?: any[]
  schedule_sync_target?: Record<string, any>
  slack_team_id?: string
  slack_user_group_id?: string
  updated_at?: string
}

export interface ScheduleSyncTargetRemoveMatch {
  id: string
}

export interface Secret {
  created_at: string
  description?: string
  id: string
  last_four_char?: string
  name: string
  owning_team_id: any[]
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
  owning_team_id: any[]
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

export interface Severity {
  created_at: string
  description: string
  id: string
  name: string
  rank: number
  updated_at: string
}

export interface SeverityLoadMatch {
  id: string
}

export interface SeverityListMatch {
  created_at?: string
  description?: string
  id?: string
  name?: string
  rank?: number
  updated_at?: string
}

export interface SeverityCreateData {
  created_at: string
  description: string
  id: string
  name: string
  rank: number
  updated_at: string
}

export interface SeverityUpdateData {
  id: string
  created_at?: string
  description?: string
  name?: string
  rank?: number
  updated_at?: string
}

export interface StatusPage {
  description?: string
  id: string
  name: string
  public_url?: string
}

export interface StatusPageListMatch {
  description?: string
  id?: string
  name?: string
  public_url?: string
}

export interface StatusPageIncident {
  component_impact: any[]
  component_status?: any[]
  id: string
  idempotency_key: string
  incident_status: string
  message: string
  name: string
  notify_subscriber: boolean
  published_at: string
  status_page_id: string
  update: any[]
}

export interface StatusPageIncidentLoadMatch {
  id: string
}

export interface StatusPageIncidentListMatch {
  component_impact?: any[]
  component_status?: any[]
  id?: string
  idempotency_key?: string
  incident_status?: string
  message?: string
  name?: string
  notify_subscriber?: boolean
  published_at?: string
  status_page_id?: string
  update?: any[]
}

export interface StatusPageIncidentCreateData {
  component_impact: any[]
  component_status?: any[]
  id: string
  idempotency_key: string
  incident_status: string
  message: string
  name: string
  notify_subscriber: boolean
  published_at: string
  status_page_id: string
  update: any[]
}

export interface StatusPageIncidentUpdateData {
  id: string
  component_impact?: any[]
  component_status?: any[]
  idempotency_key?: string
  incident_status?: string
  message?: string
  name?: string
  notify_subscriber?: boolean
  published_at?: string
  status_page_id?: string
  update?: any[]
}

export interface StatusPageIncidentUpdate {
  component_status?: any[]
  incident_status?: string
  message: string
  notify_subscriber: boolean
  status_page_incident_id: string
}

export interface StatusPageIncidentUpdateCreateData {
  component_status?: any[]
  incident_status?: string
  message: string
  notify_subscriber: boolean
  status_page_incident_id: string
}

export interface StatusPageMaintenance {
  affected_component_id: any[]
  component_maintenance_period: any[]
  end_at: string
  id: string
  idempotency_key: string
  maintenance_status: string
  message: string
  name: string
  notify_subscriber: boolean
  published_at: string
  start_at: string
  status_page_id: string
  update: any[]
}

export interface StatusPageMaintenanceLoadMatch {
  id: string
}

export interface StatusPageMaintenanceListMatch {
  affected_component_id?: any[]
  component_maintenance_period?: any[]
  end_at?: string
  id?: string
  idempotency_key?: string
  maintenance_status?: string
  message?: string
  name?: string
  notify_subscriber?: boolean
  published_at?: string
  start_at?: string
  status_page_id?: string
  update?: any[]
}

export interface StatusPageMaintenanceCreateData {
  affected_component_id: any[]
  component_maintenance_period: any[]
  end_at: string
  id: string
  idempotency_key: string
  maintenance_status: string
  message: string
  name: string
  notify_subscriber: boolean
  published_at: string
  start_at: string
  status_page_id: string
  update: any[]
}

export interface StatusPageMaintenanceUpdate {
  component_status?: any[]
  maintenance_status?: string
  message: string
  notify_subscriber: boolean
  status_page_maintenance_id: string
}

export interface StatusPageMaintenanceUpdateCreateData {
  component_status?: any[]
  maintenance_status?: string
  message: string
  notify_subscriber: boolean
  status_page_maintenance_id: string
}

export interface StatusPageStructure {
  item: any[]
}

export interface StatusPageStructureLoadMatch {
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

export interface TelemetryDataSource {
  created_at: string
  datadog_config?: Record<string, any>
  enabled: boolean
  grafana_config?: Record<string, any>
  id: string
  name: string
  provider: string
  source_type: string
  updated_at: string
  version?: string
}

export interface TelemetryDataSourceUpdateData {
  id: string
  created_at?: string
  datadog_config?: Record<string, any>
  enabled?: boolean
  grafana_config?: Record<string, any>
  name?: string
  provider?: string
  source_type?: string
  updated_at?: string
  version?: string
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


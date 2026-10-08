-- Typed models for the IncidentIo SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Action
---@field assignee table
---@field assignee_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference? table
---@field follow_up boolean
---@field id string
---@field incident_id string
---@field status string
---@field updated_at string

---@class ActionLoadMatch
---@field id string

---@class ActionListMatch
---@field incident_id? string
---@field incident_mode? string
---@field is_follow_up? boolean

---@class ActionCreateData
---@field assignee table
---@field assignee_id? string
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference? table
---@field follow_up boolean
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
---@field external_issue_reference? table
---@field follow_up? boolean
---@field incident_id? string
---@field status? string
---@field updated_at? string

---@class ActionRemoveMatch
---@field id string

---@class Alert
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertLoadMatch
---@field id string

---@class AlertListMatch
---@field after? string
---@field alert_group_id? table
---@field alert_source? table
---@field attribute? table
---@field created_at? table
---@field deduplication_key? table
---@field has_note? table
---@field include_maintenance_window? table
---@field page_size number
---@field status? table
---@field tag? table
---@field updated_at? table

---@class AlertCreateData
---@field id string
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

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
---@field images table
---@field last_edited_at? string
---@field updated_at string

---@class AlertNoteLoadMatch
---@field id string

---@class AlertNoteListMatch
---@field after? string
---@field alert_group_id? string
---@field alert_id? string
---@field page_size? number

---@class AlertNoteCreateData
---@field alert_group_id? string
---@field alert_id? string
---@field content string
---@field created_at string
---@field creator table
---@field id string
---@field images table
---@field last_edited_at? string
---@field updated_at string

---@class AlertNoteUpdateData
---@field id string
---@field alert_group_id? string
---@field alert_id? string
---@field content? string
---@field created_at? string
---@field creator? table
---@field images? table
---@field last_edited_at? string
---@field updated_at? string

---@class AlertNoteRemoveMatch
---@field id string

---@class AlertRoute
---@field alert_sources table
---@field channel_config table
---@field condition_groups table
---@field created_at? string
---@field enabled boolean
---@field escalation_config table
---@field expressions table
---@field grouping_config table
---@field id string
---@field incident_config table
---@field incident_template table
---@field is_private boolean
---@field message_config table
---@field message_template? table
---@field name string
---@field owning_team_ids? table
---@field updated_at? string
---@field version number

---@class AlertRouteLoadMatch
---@field id string

---@class AlertRouteListMatch
---@field after? string
---@field page_size number

---@class AlertRouteCreateData
---@field alert_sources table
---@field channel_config table
---@field condition_groups table
---@field created_at? string
---@field enabled boolean
---@field escalation_config table
---@field expressions table
---@field grouping_config table
---@field id string
---@field incident_config table
---@field incident_template table
---@field is_private boolean
---@field message_config table
---@field message_template? table
---@field name string
---@field owning_team_ids? table
---@field updated_at? string
---@field version number

---@class AlertRouteUpdateData
---@field id string
---@field alert_sources? table
---@field channel_config? table
---@field condition_groups? table
---@field created_at? string
---@field enabled? boolean
---@field escalation_config? table
---@field expressions? table
---@field grouping_config? table
---@field incident_config? table
---@field incident_template? table
---@field is_private? boolean
---@field message_config? table
---@field message_template? table
---@field name? string
---@field owning_team_ids? table
---@field updated_at? string
---@field version? number

---@class AlertRouteRemoveMatch
---@field id string

---@class AlertSource
---@field alert_events_url? string
---@field auto_resolve_incident_alerts? boolean
---@field auto_resolve_timeout_minutes? number
---@field azure_devops_options table
---@field disabled? boolean
---@field email_options table
---@field filter_condition_groups? table
---@field fixed_team_id? string
---@field heartbeat_options table
---@field http_custom_options table
---@field id string
---@field jira_options table
---@field name string
---@field owning_team_ids? table
---@field rate_limit_sharding table
---@field secret_token? string
---@field source_type string
---@field template table

---@class AlertSourceLoadMatch
---@field id string

---@class AlertSourceListMatch
---@field alert_events_url? string
---@field auto_resolve_incident_alerts? boolean
---@field auto_resolve_timeout_minutes? number
---@field azure_devops_options? table
---@field disabled? boolean
---@field email_options? table
---@field filter_condition_groups? table
---@field fixed_team_id? string
---@field heartbeat_options? table
---@field http_custom_options? table
---@field id? string
---@field jira_options? table
---@field name? string
---@field owning_team_ids? table
---@field rate_limit_sharding? table
---@field secret_token? string
---@field source_type? string
---@field template? table

---@class AlertSourceCreateData
---@field alert_events_url? string
---@field auto_resolve_incident_alerts? boolean
---@field auto_resolve_timeout_minutes? number
---@field azure_devops_options table
---@field disabled? boolean
---@field email_options table
---@field filter_condition_groups? table
---@field fixed_team_id? string
---@field heartbeat_options table
---@field http_custom_options table
---@field id string
---@field jira_options table
---@field name string
---@field owning_team_ids? table
---@field rate_limit_sharding table
---@field secret_token? string
---@field source_type string
---@field template table

---@class AlertSourceUpdateData
---@field id string
---@field alert_events_url? string
---@field auto_resolve_incident_alerts? boolean
---@field auto_resolve_timeout_minutes? number
---@field azure_devops_options? table
---@field disabled? boolean
---@field email_options? table
---@field filter_condition_groups? table
---@field fixed_team_id? string
---@field heartbeat_options? table
---@field http_custom_options? table
---@field jira_options? table
---@field name? string
---@field owning_team_ids? table
---@field rate_limit_sharding? table
---@field secret_token? string
---@field source_type? string
---@field template? table

---@class AlertSourceRemoveMatch
---@field id string

---@class AlertSourcesV2
---@field owning_team_ids? table
---@field source_type string
---@field template table

---@class AlertSourcesV2CreateData
---@field owning_team_ids? table
---@field source_type string
---@field template table

---@class AlertTag
---@field id string
---@field name string

---@class AlertTagListMatch
---@field after? string
---@field page_size? number
---@field search? string

---@class AlertsAddTagsResultV2
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsAddTagsResultV2CreateData
---@field alert_id string
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsRemoveTagsResultV2
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsRemoveTagsResultV2CreateData
---@field alert_id string
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsSetTagsResultV2
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsSetTagsResultV2CreateData
---@field alert_id string
---@field alert_group_ids? table
---@field alert_source_id string
---@field attributes table
---@field created_at string
---@field deduplication_key string
---@field description? string
---@field id string
---@field resolved_at? string
---@field source_url? string
---@field status string
---@field tags? table
---@field title string
---@field updated_at string

---@class AlertsTransitionIncidentAlertResultV2
---@field alert table
---@field alert_id string
---@field alert_route_id? string
---@field id string
---@field incident table
---@field incident_id string
---@field re_relate? boolean
---@field state string

---@class AlertsTransitionIncidentAlertResultV2ListMatch
---@field after? string
---@field alert_id? string
---@field incident_id? string
---@field page_size number

---@class AlertsTransitionIncidentAlertResultV2CreateData
---@field alert table
---@field alert_id string
---@field alert_route_id? string
---@field id string
---@field incident table
---@field incident_id string
---@field re_relate? boolean
---@field state string

---@class AnnouncementRule
---@field condition_groups table
---@field conditions_no_longer_apply_behaviour string
---@field created_at string
---@field id string
---@field microsoft_teams_channel_ids table
---@field mode string
---@field name string
---@field owning_team_ids table
---@field private_incident_scope? string
---@field slack_channel_ids table
---@field template_id? string
---@field update_sharing_mode string
---@field updated_at string

---@class AnnouncementRuleLoadMatch
---@field id string

---@class AnnouncementRuleListMatch
---@field after? string
---@field page_size? number

---@class AnnouncementRuleCreateData
---@field condition_groups table
---@field conditions_no_longer_apply_behaviour string
---@field created_at string
---@field id string
---@field microsoft_teams_channel_ids table
---@field mode string
---@field name string
---@field owning_team_ids table
---@field private_incident_scope? string
---@field slack_channel_ids table
---@field template_id? string
---@field update_sharing_mode string
---@field updated_at string

---@class AnnouncementRuleUpdateData
---@field id string
---@field condition_groups? table
---@field conditions_no_longer_apply_behaviour? string
---@field created_at? string
---@field microsoft_teams_channel_ids? table
---@field mode? string
---@field name? string
---@field owning_team_ids? table
---@field private_incident_scope? string
---@field slack_channel_ids? table
---@field template_id? string
---@field update_sharing_mode? string
---@field updated_at? string

---@class AnnouncementRuleRemoveMatch
---@field id string

---@class AnnouncementTemplate
---@field actions table
---@field fields table
---@field id string
---@field is_default boolean
---@field name string
---@field owning_team_ids table

---@class AnnouncementTemplateLoadMatch
---@field id string

---@class AnnouncementTemplateListMatch
---@field actions? table
---@field fields? table
---@field id? string
---@field is_default? boolean
---@field name? string
---@field owning_team_ids? table

---@class AnnouncementTemplateCreateData
---@field actions table
---@field fields table
---@field id string
---@field is_default boolean
---@field name string
---@field owning_team_ids table

---@class AnnouncementTemplateUpdateData
---@field id string
---@field actions? table
---@field fields? table
---@field is_default? boolean
---@field name? string
---@field owning_team_ids? table

---@class AnnouncementTemplateRemoveMatch
---@field id string

---@class ApiKey
---@field comments? string
---@field created_at string
---@field creator table
---@field id string
---@field last_used_at? string
---@field name string
---@field role_names table
---@field roles table
---@field team_ids table
---@field team_role_names table
---@field team_roles table
---@field token_last_issued_at string

---@class ApiKeyLoadMatch
---@field id string

---@class ApiKeyListMatch
---@field after? string
---@field page_size? number

---@class ApiKeyCreateData
---@field comments? string
---@field created_at string
---@field creator table
---@field id string
---@field last_used_at? string
---@field name string
---@field role_names table
---@field roles table
---@field team_ids table
---@field team_role_names table
---@field team_roles table
---@field token_last_issued_at string

---@class ApiKeyUpdateData
---@field id string
---@field comments? string
---@field created_at? string
---@field creator? table
---@field last_used_at? string
---@field name? string
---@field role_names? table
---@field roles? table
---@field team_ids? table
---@field team_role_names? table
---@field team_roles? table
---@field token_last_issued_at? string

---@class ApiKeyRemoveMatch
---@field id string

---@class CallRoute
---@field allowed_callers table
---@field country_code? string
---@field created_at string
---@field current_state string
---@field custom_language string
---@field id string
---@field name string
---@field options table
---@field path table
---@field phone_number? string
---@field phone_number_type? string
---@field responder_caller_id string
---@field updated_at string
---@field use_caller_allowlist boolean

---@class CallRouteLoadMatch
---@field id string

---@class CallRouteListMatch
---@field after? string
---@field page_size? number

---@class CallRouteUpdateData
---@field id string
---@field allowed_callers? table
---@field country_code? string
---@field created_at? string
---@field current_state? string
---@field custom_language? string
---@field name? string
---@field options? table
---@field path? table
---@field phone_number? string
---@field phone_number_type? string
---@field responder_caller_id? string
---@field updated_at? string
---@field use_caller_allowlist? boolean

---@class CallRoutesCreateAllowedCallerResultV2
---@field name? string
---@field phone_number string

---@class CallRoutesCreateAllowedCallerResultV2CreateData
---@field call_route_id string
---@field name? string
---@field phone_number string

---@class CallRoutesCreateOptionResultV2
---@field digit string
---@field path table
---@field prompt string

---@class CallRoutesCreateOptionResultV2CreateData
---@field call_route_id string
---@field digit string
---@field path table
---@field prompt string

---@class CallRoutesListAllowedCallersResultV2
---@field id string
---@field name? string
---@field phone_number string

---@class CallRoutesListAllowedCallersResultV2ListMatch
---@field call_route_id string

---@class CallRoutesListOptionsResultV2
---@field digit string
---@field id string
---@field path table
---@field prompt string

---@class CallRoutesListOptionsResultV2ListMatch
---@field call_route_id string

---@class CallRoutesShowAllowedCallerResultV2
---@field id string
---@field name? string
---@field phone_number string

---@class CallRoutesShowAllowedCallerResultV2LoadMatch
---@field call_route_id string
---@field id string

---@class CallRoutesShowOptionResultV2
---@field digit string
---@field id string
---@field path table
---@field prompt string

---@class CallRoutesShowOptionResultV2LoadMatch
---@field call_route_id string
---@field id string

---@class CallRoutesUpdateAllowedCallerResultV2
---@field id string
---@field name? string
---@field phone_number string

---@class CallRoutesUpdateAllowedCallerResultV2UpdateData
---@field call_route_id string
---@field id string
---@field name? string
---@field phone_number? string

---@class CallRoutesUpdateOptionResultV2
---@field digit string
---@field id string
---@field path table
---@field prompt string

---@class CallRoutesUpdateOptionResultV2UpdateData
---@field call_route_id string
---@field id string
---@field digit? string
---@field path? table
---@field prompt? string

---@class CallRoutesV2
---@field id? string

---@class CallRoutesV2RemoveMatch
---@field call_route_id string
---@field id string

---@class CallSession
---@field ended_at? string
---@field id string
---@field incident_id string
---@field started_at string

---@class CallSessionListMatch
---@field after? string
---@field incident_id string
---@field page_size? number

---@class CallTranscriptEntry
---@field content string
---@field id string
---@field medium string
---@field participant_name string
---@field timestamp string

---@class CallTranscriptEntryListMatch
---@field after? string
---@field call_session_id string
---@field page_size? number

---@class CatalogEntry
---@field aliases? table
---@field archived_at? string
---@field attribute_values table
---@field catalog_entry table
---@field catalog_type table
---@field catalog_type_id string
---@field created_at string
---@field external_id? string
---@field id string
---@field name string
---@field rank? number
---@field update_attributes? table
---@field updated_at string

---@class CatalogEntryLoadMatch
---@field id string
---@field expand? boolean

---@class CatalogEntryListMatch
---@field after? string
---@field catalog_type_id string
---@field identifier? string
---@field page_size? number

---@class CatalogEntryCreateData
---@field aliases? table
---@field archived_at? string
---@field attribute_values table
---@field catalog_entry table
---@field catalog_type table
---@field catalog_type_id string
---@field created_at string
---@field external_id? string
---@field id string
---@field name string
---@field rank? number
---@field update_attributes? table
---@field updated_at string

---@class CatalogEntryUpdateData
---@field id string
---@field aliases? table
---@field archived_at? string
---@field attribute_values? table
---@field catalog_entry? table
---@field catalog_type? table
---@field catalog_type_id? string
---@field created_at? string
---@field external_id? string
---@field name? string
---@field rank? number
---@field update_attributes? table
---@field updated_at? string

---@class CatalogResource
---@field category string
---@field description string
---@field engine_resource_type string
---@field label string
---@field type string
---@field value_docstring string

---@class CatalogResourceListMatch
---@field category? string
---@field description? string
---@field engine_resource_type? string
---@field label? string
---@field type? string
---@field value_docstring? string

---@class CatalogType
---@field annotations table
---@field categories table
---@field color string
---@field created_at string
---@field description string
---@field dynamic_resource_parameter? string
---@field engine_resource_type string
---@field estimated_count? number
---@field icon string
---@field id string
---@field is_editable boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name string
---@field owning_team_ids? table
---@field ranked boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema table
---@field semantic_type string
---@field source_repo_url? string
---@field type_name string
---@field updated_at string
---@field use_name_as_identifier boolean

---@class CatalogTypeLoadMatch
---@field id string

---@class CatalogTypeListMatch
---@field annotations? table
---@field categories? table
---@field color? string
---@field created_at? string
---@field description? string
---@field dynamic_resource_parameter? string
---@field engine_resource_type? string
---@field estimated_count? number
---@field icon? string
---@field id? string
---@field is_editable? boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name? string
---@field owning_team_ids? table
---@field ranked? boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema? table
---@field semantic_type? string
---@field source_repo_url? string
---@field type_name? string
---@field updated_at? string
---@field use_name_as_identifier? boolean

---@class CatalogTypeCreateData
---@field annotations table
---@field categories table
---@field color string
---@field created_at string
---@field description string
---@field dynamic_resource_parameter? string
---@field engine_resource_type string
---@field estimated_count? number
---@field icon string
---@field id string
---@field is_editable boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name string
---@field owning_team_ids? table
---@field ranked boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema table
---@field semantic_type string
---@field source_repo_url? string
---@field type_name string
---@field updated_at string
---@field use_name_as_identifier boolean

---@class CatalogTypeUpdateData
---@field id string
---@field annotations? table
---@field categories? table
---@field color? string
---@field created_at? string
---@field description? string
---@field dynamic_resource_parameter? string
---@field engine_resource_type? string
---@field estimated_count? number
---@field icon? string
---@field is_editable? boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name? string
---@field owning_team_ids? table
---@field ranked? boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema? table
---@field semantic_type? string
---@field source_repo_url? string
---@field type_name? string
---@field updated_at? string
---@field use_name_as_identifier? boolean

---@class CatalogTypeSchema
---@field annotations table
---@field attributes table
---@field categories table
---@field color string
---@field created_at string
---@field description string
---@field dynamic_resource_parameter? string
---@field engine_resource_type string
---@field estimated_count? number
---@field icon string
---@field id string
---@field is_editable boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name string
---@field owning_team_ids? table
---@field ranked boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema table
---@field semantic_type string
---@field source_repo_url? string
---@field type_name string
---@field updated_at string
---@field use_name_as_identifier boolean
---@field version number

---@class CatalogTypeSchemaCreateData
---@field catalog_type_id string
---@field annotations table
---@field attributes table
---@field categories table
---@field color string
---@field created_at string
---@field description string
---@field dynamic_resource_parameter? string
---@field engine_resource_type string
---@field estimated_count? number
---@field icon string
---@field id string
---@field is_editable boolean
---@field is_team_type? boolean
---@field last_synced_at? string
---@field name string
---@field owning_team_ids? table
---@field ranked boolean
---@field registry_type? string
---@field required_integrations? table
---@field schema table
---@field semantic_type string
---@field source_repo_url? string
---@field type_name string
---@field updated_at string
---@field use_name_as_identifier boolean
---@field version number

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
---@field options table
---@field required? string
---@field required_v2? string
---@field show_before_closure boolean
---@field show_before_creation boolean
---@field show_before_update boolean
---@field show_in_announcement_post? boolean
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
---@field options? table
---@field required? string
---@field required_v2? string
---@field show_before_closure? boolean
---@field show_before_creation? boolean
---@field show_before_update? boolean
---@field show_in_announcement_post? boolean
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
---@field options table
---@field required? string
---@field required_v2? string
---@field show_before_closure boolean
---@field show_before_creation boolean
---@field show_before_update boolean
---@field show_in_announcement_post? boolean
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
---@field options? table
---@field required? string
---@field required_v2? string
---@field show_before_closure? boolean
---@field show_before_creation? boolean
---@field show_before_update? boolean
---@field show_in_announcement_post? boolean
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
---@field after? string
---@field custom_field_id string
---@field page_size? number

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

---@class Escalation
---@field created_at string
---@field creator table
---@field description string
---@field escalation_path_id? string
---@field events table
---@field id string
---@field idempotency_key string
---@field incident_id? string
---@field priority table
---@field related_alerts table
---@field related_incidents table
---@field status string
---@field title string
---@field updated_at string
---@field user_ids? table

---@class EscalationLoadMatch
---@field id string

---@class EscalationListMatch
---@field after? string
---@field alert? table
---@field created_at? table
---@field escalation_path? table
---@field idempotency_key? table
---@field incident? table
---@field page_size? number
---@field status? table
---@field updated_at? table

---@class EscalationCreateData
---@field created_at string
---@field creator table
---@field description string
---@field escalation_path_id? string
---@field events table
---@field id string
---@field idempotency_key string
---@field incident_id? string
---@field priority table
---@field related_alerts table
---@field related_incidents table
---@field status string
---@field title string
---@field updated_at string
---@field user_ids? table

---@class EscalationPathTemplate
---@field description? string
---@field expressions table
---@field has_historical_escalation_path_versions boolean
---@field id string
---@field name string
---@field params table
---@field path table
---@field repeat_config table
---@field working_hours? table

---@class EscalationPathTemplateLoadMatch
---@field id string

---@class EscalationPathTemplateListMatch
---@field after? string
---@field page_size? number
---@field search? string

---@class EscalationPathTemplateCreateData
---@field description? string
---@field expressions table
---@field has_historical_escalation_path_versions boolean
---@field id string
---@field name string
---@field params table
---@field path table
---@field repeat_config table
---@field working_hours? table

---@class EscalationPathTemplateUpdateData
---@field id string
---@field description? string
---@field expressions? table
---@field has_historical_escalation_path_versions? boolean
---@field name? string
---@field params? table
---@field path? table
---@field repeat_config? table
---@field working_hours? table

---@class EscalationPathTemplateRemoveMatch
---@field id string

---@class EscalationsCheckEscalationPermissionsResultV2
---@field response_options table
---@field user_ids table

---@class EscalationsCheckEscalationPermissionsResultV2CreateData
---@field escalation_id string
---@field response_options table
---@field user_ids table

---@class EscalationsReassignEscalationResultV2
---@field description? string
---@field escalation_path_id? string
---@field resolve_original? boolean
---@field title? string
---@field user_ids? table

---@class EscalationsReassignEscalationResultV2CreateData
---@field escalation_id string
---@field description? string
---@field escalation_path_id? string
---@field resolve_original? boolean
---@field title? string
---@field user_ids? table

---@class FollowUp
---@field assignee table
---@field assignee_id? string
---@field assignee_team table
---@field assignee_team_id? string
---@field category table
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
---@field labels table
---@field priority table
---@field status string
---@field title string
---@field updated_at string

---@class FollowUpLoadMatch
---@field id string

---@class FollowUpListMatch
---@field assignee_team_id? string
---@field incident_id? string
---@field incident_mode? string

---@class FollowUpCreateData
---@field assignee table
---@field assignee_id? string
---@field assignee_team table
---@field assignee_team_id? string
---@field category table
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
---@field labels table
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
---@field category? table
---@field completed_at? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field external_issue_reference? table
---@field external_issue_reference_id? string
---@field follow_up_category_id? string
---@field follow_up_priority_option_id? string
---@field incident_id? string
---@field labels? table
---@field priority? table
---@field status? string
---@field title? string
---@field updated_at? string

---@class FollowUpRemoveMatch
---@field id string

---@class FollowUpsConnectExternalIssueResultV3
---@field assignee table
---@field assignee_team table
---@field category table
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference table
---@field id string
---@field incident_id string
---@field labels table
---@field priority table
---@field provider string
---@field status string
---@field title string
---@field updated_at string
---@field url string

---@class FollowUpsConnectExternalIssueResultV3CreateData
---@field follow_up_id string
---@field assignee table
---@field assignee_team table
---@field category table
---@field completed_at? string
---@field created_at string
---@field creator table
---@field description? string
---@field external_issue_reference table
---@field id string
---@field incident_id string
---@field labels table
---@field priority table
---@field provider string
---@field status string
---@field title string
---@field updated_at string
---@field url string

---@class FollowUpsCreateFromLinkResultV3
---@field incident_id string
---@field url string

---@class FollowUpsCreateFromLinkResultV3CreateData
---@field incident_id string
---@field url string

---@class Identity
---@field dashboard_url string
---@field name string
---@field roles table
---@field team_roles table
---@field teams table

---@class IdentityLoadMatch
---@field dashboard_url? string
---@field name? string
---@field roles? table
---@field team_roles? table
---@field teams? table

---@class Incident
---@field call_url? string
---@field created_at string
---@field creator table
---@field custom_field_entries table
---@field debriefs? table
---@field duration_metrics? table
---@field external_issue_reference table
---@field has_debrief? boolean
---@field id string
---@field idempotency_key string
---@field incident_role_assignments table
---@field incident_status table
---@field incident_status_id? string
---@field incident_timestamp_values? table
---@field incident_type table
---@field incident_type_id? string
---@field last_activity_at string
---@field mode string
---@field ms_teams_channel_url? string
---@field name string
---@field permalink? string
---@field postmortem_document_ids? table
---@field postmortem_document_url? string
---@field reference string
---@field retrospective_incident_options? table
---@field severity table
---@field severity_id? string
---@field slack_channel_id string
---@field slack_channel_name? string
---@field slack_channel_name_override? string
---@field slack_channel_url? string
---@field slack_team_id string
---@field source_message_channel_id? string
---@field source_message_timestamp? string
---@field status string
---@field summary? string
---@field team_ids table
---@field timestamps? table
---@field updated_at string
---@field visibility string
---@field workload_minutes_late? number
---@field workload_minutes_sleeping? number
---@field workload_minutes_total? number
---@field workload_minutes_working? number

---@class IncidentLoadMatch
---@field id string

---@class IncidentListMatch
---@field after? string
---@field page_size? number
---@field status? table

---@class IncidentCreateData
---@field call_url? string
---@field created_at string
---@field creator table
---@field custom_field_entries table
---@field debriefs? table
---@field duration_metrics? table
---@field external_issue_reference table
---@field has_debrief? boolean
---@field id string
---@field idempotency_key string
---@field incident_role_assignments table
---@field incident_status table
---@field incident_status_id? string
---@field incident_timestamp_values? table
---@field incident_type table
---@field incident_type_id? string
---@field last_activity_at string
---@field mode string
---@field ms_teams_channel_url? string
---@field name string
---@field permalink? string
---@field postmortem_document_ids? table
---@field postmortem_document_url? string
---@field reference string
---@field retrospective_incident_options? table
---@field severity table
---@field severity_id? string
---@field slack_channel_id string
---@field slack_channel_name? string
---@field slack_channel_name_override? string
---@field slack_channel_url? string
---@field slack_team_id string
---@field source_message_channel_id? string
---@field source_message_timestamp? string
---@field status string
---@field summary? string
---@field team_ids table
---@field timestamps? table
---@field updated_at string
---@field visibility string
---@field workload_minutes_late? number
---@field workload_minutes_sleeping? number
---@field workload_minutes_total? number
---@field workload_minutes_working? number

---@class IncidentActivityLogEntry
---@field content? table
---@field created_at string
---@field id string
---@field incident_id string
---@field occurred_at string
---@field title string
---@field type string

---@class IncidentActivityLogEntryListMatch
---@field after? string
---@field id? table
---@field incident_id string
---@field page_size? number

---@class IncidentAttachment
---@field id string
---@field incident_id string
---@field resource table

---@class IncidentAttachmentListMatch
---@field external_id? string
---@field incident_id? string
---@field resource_type? string

---@class IncidentAttachmentCreateData
---@field id string
---@field incident_id string
---@field resource table

---@class IncidentAttachmentRemoveMatch
---@field id string

---@class IncidentForm
---@field created_at string
---@field expressions table
---@field form_type string
---@field id string
---@field incident_type_id? string
---@field lifecycle_elements? table
---@field updated_at string

---@class IncidentFormLoadMatch
---@field id string

---@class IncidentFormListMatch
---@field after? string
---@field page_size? number

---@class IncidentFormCreateData
---@field created_at string
---@field expressions table
---@field form_type string
---@field id string
---@field incident_type_id? string
---@field lifecycle_elements? table
---@field updated_at string

---@class IncidentFormUpdateData
---@field id string
---@field created_at? string
---@field expressions? table
---@field form_type? string
---@field incident_type_id? string
---@field lifecycle_elements? table
---@field updated_at? string

---@class IncidentFormRemoveMatch
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
---@field incident_id string

---@class IncidentParticipantWorkload
---@field archived_at? string
---@field participant_type? string
---@field user table
---@field workload table

---@class IncidentParticipantWorkloadListMatch
---@field incident_id string

---@class IncidentRelationship
---@field id string
---@field incident table

---@class IncidentRelationshipListMatch
---@field after? string
---@field incident_id string
---@field page_size? number

---@class IncidentRole
---@field created_at string
---@field description string
---@field id string
---@field instructions string
---@field name string
---@field required? boolean
---@field role_type string
---@field shortform string
---@field updated_at string

---@class IncidentRoleLoadMatch
---@field id string

---@class IncidentRoleListMatch
---@field created_at? string
---@field description? string
---@field id? string
---@field instructions? string
---@field name? string
---@field required? boolean
---@field role_type? string
---@field shortform? string
---@field updated_at? string

---@class IncidentRoleCreateData
---@field created_at string
---@field description string
---@field id string
---@field instructions string
---@field name string
---@field required? boolean
---@field role_type string
---@field shortform string
---@field updated_at string

---@class IncidentRoleUpdateData
---@field id string
---@field created_at? string
---@field description? string
---@field instructions? string
---@field name? string
---@field required? boolean
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

---@class IncidentTeamMembership
---@field incident_id string
---@field team_id string

---@class IncidentTeamMembershipCreateData
---@field incident_id string
---@field team_id string

---@class IncidentTeamMembershipsV1
---@field incident_id string
---@field team_id string

---@class IncidentTeamMembershipsV1CreateData
---@field incident_id string
---@field team_id string

---@class IncidentTemplate
---@field created_at string
---@field expressions? table
---@field id string
---@field name string
---@field template table
---@field updated_at string

---@class IncidentTemplateLoadMatch
---@field id string

---@class IncidentTemplateListMatch
---@field after? string
---@field page_size? number

---@class IncidentTemplateCreateData
---@field created_at string
---@field expressions? table
---@field id string
---@field name string
---@field template table
---@field updated_at string

---@class IncidentTemplateUpdateData
---@field id string
---@field created_at? string
---@field expressions? table
---@field name? string
---@field template? table
---@field updated_at? string

---@class IncidentTemplateRemoveMatch
---@field id string

---@class IncidentTemplatesValidateResultV1
---@field expressions? table
---@field name string
---@field template table
---@field warnings table

---@class IncidentTemplatesValidateResultV1CreateData
---@field expressions? table
---@field name string
---@field template table
---@field warnings table

---@class IncidentTimelineItem
---@field activity_log_id? string
---@field created_at string
---@field creator table
---@field description? string
---@field id string
---@field idempotency_key string
---@field incident_id string
---@field timestamp string
---@field title string
---@field updated_at string

---@class IncidentTimelineItemListMatch
---@field after? string
---@field incident_id string
---@field page_size? number

---@class IncidentTimelineItemCreateData
---@field activity_log_id? string
---@field created_at string
---@field creator table
---@field description? string
---@field id string
---@field idempotency_key string
---@field incident_id string
---@field timestamp string
---@field title string
---@field updated_at string

---@class IncidentTimelineItemUpdateData
---@field id string
---@field activity_log_id? string
---@field created_at? string
---@field creator? table
---@field description? string
---@field idempotency_key? string
---@field incident_id? string
---@field timestamp? string
---@field title? string
---@field updated_at? string

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
---@field owning_team_ids? table
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
---@field owning_team_ids? table
---@field private_incidents_only? boolean
---@field updated_at? string

---@class IncidentUpdate
---@field created_at string
---@field id string
---@field idempotency_key string
---@field incident_id string
---@field merged_into_incident_id? string
---@field message? string
---@field new_incident_status table
---@field new_severity table
---@field to_incident_status_id? string
---@field to_severity_id? string
---@field updater table

---@class IncidentUpdateListMatch
---@field after? string
---@field incident_id? string
---@field page_size? number

---@class IncidentUpdateCreateData
---@field created_at string
---@field id string
---@field idempotency_key string
---@field incident_id string
---@field merged_into_incident_id? string
---@field message? string
---@field new_incident_status table
---@field new_severity table
---@field to_incident_status_id? string
---@field to_severity_id? string
---@field updater table

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

---@class IpRange
---@field cidr string
---@field description string

---@class IpRangeListMatch
---@field cidr? string
---@field description? string

---@class MaintenanceWindow
---@field alert_condition_groups table
---@field archived_at? string
---@field created_at string
---@field end_at string
---@field escalation_targets? table
---@field id string
---@field incident_id? string
---@field lead table
---@field name string
---@field notification_message? string
---@field notify_channels? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field owning_team_ids? table
---@field reroute_on_end boolean
---@field resolve_on_end boolean
---@field show_in_sidebar boolean
---@field start_at string
---@field updated_at string

---@class MaintenanceWindowLoadMatch
---@field id string

---@class MaintenanceWindowListMatch
---@field after? string
---@field page_size? number
---@field status? string

---@class MaintenanceWindowCreateData
---@field alert_condition_groups table
---@field archived_at? string
---@field created_at string
---@field end_at string
---@field escalation_targets? table
---@field id string
---@field incident_id? string
---@field lead table
---@field name string
---@field notification_message? string
---@field notify_channels? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field owning_team_ids? table
---@field reroute_on_end boolean
---@field resolve_on_end boolean
---@field show_in_sidebar boolean
---@field start_at string
---@field updated_at string

---@class MaintenanceWindowUpdateData
---@field id string
---@field alert_condition_groups? table
---@field archived_at? string
---@field created_at? string
---@field end_at? string
---@field escalation_targets? table
---@field incident_id? string
---@field lead? table
---@field name? string
---@field notification_message? string
---@field notify_channels? table
---@field notify_end_minutes_before? number
---@field notify_start_minutes_before? number
---@field owning_team_ids? table
---@field reroute_on_end? boolean
---@field resolve_on_end? boolean
---@field show_in_sidebar? boolean
---@field start_at? string
---@field updated_at? string

---@class MaintenanceWindowRemoveMatch
---@field id string
---@field force? boolean

---@class OnCallNotificationMethodPublicV2
---@field address string
---@field id string
---@field is_usable boolean
---@field method_type string
---@field phone_details table

---@class OnCallNotificationMethodPublicV2ListMatch
---@field user_id string

---@class OnCallNotificationRulePublicV2
---@field app table
---@field delay_seconds? number
---@field id string
---@field method_target table
---@field method_type string
---@field phone table
---@field rule_type string

---@class OnCallNotificationRulePublicV2ListMatch
---@field user_id string

---@class PayConfig
---@field base_rate_cents number
---@field created_at string
---@field currency string
---@field id string
---@field name string
---@field one_off_rules table
---@field published_at? string
---@field rate_time_unit string
---@field timezone string
---@field updated_at string
---@field weekly_rules table

---@class PayConfigLoadMatch
---@field id string

---@class PayConfigListMatch
---@field after? string
---@field page_size? number

---@class PayConfigCreateData
---@field base_rate_cents number
---@field created_at string
---@field currency string
---@field id string
---@field name string
---@field one_off_rules table
---@field published_at? string
---@field rate_time_unit string
---@field timezone string
---@field updated_at string
---@field weekly_rules table

---@class PayConfigUpdateData
---@field id string
---@field base_rate_cents? number
---@field created_at? string
---@field currency? string
---@field name? string
---@field one_off_rules? table
---@field published_at? string
---@field rate_time_unit? string
---@field timezone? string
---@field updated_at? string
---@field weekly_rules? table

---@class PayConfigRemoveMatch
---@field id string

---@class PayConfigsCreateOneOffRuleResultV2
---@field end_at string
---@field name string
---@field rate_cents number
---@field start_at string

---@class PayConfigsCreateOneOffRuleResultV2CreateData
---@field pay_config_id string
---@field end_at string
---@field name string
---@field rate_cents number
---@field start_at string

---@class PayConfigsCreateWeeklyRuleResultV2
---@field end_time string
---@field rate_cents number
---@field start_time string
---@field weekdays table

---@class PayConfigsCreateWeeklyRuleResultV2CreateData
---@field pay_config_id string
---@field end_time string
---@field rate_cents number
---@field start_time string
---@field weekdays table

---@class PayConfigsListOneOffRulesResultV2
---@field end_at string
---@field id string
---@field name string
---@field rate_cents number
---@field start_at string

---@class PayConfigsListOneOffRulesResultV2ListMatch
---@field pay_config_id string

---@class PayConfigsListWeeklyRulesResultV2
---@field end_time string
---@field id string
---@field rate_cents number
---@field start_time string
---@field weekdays table

---@class PayConfigsListWeeklyRulesResultV2ListMatch
---@field pay_config_id string

---@class PayConfigsShowOneOffRuleResultV2
---@field end_at string
---@field id string
---@field name string
---@field rate_cents number
---@field start_at string

---@class PayConfigsShowOneOffRuleResultV2LoadMatch
---@field id string
---@field pay_config_id string

---@class PayConfigsShowWeeklyRuleResultV2
---@field end_time string
---@field id string
---@field rate_cents number
---@field start_time string
---@field weekdays table

---@class PayConfigsShowWeeklyRuleResultV2LoadMatch
---@field id string
---@field pay_config_id string

---@class PayConfigsUpdateOneOffRuleResultV2
---@field end_at string
---@field id string
---@field name string
---@field rate_cents number
---@field start_at string

---@class PayConfigsUpdateOneOffRuleResultV2UpdateData
---@field id string
---@field pay_config_id string
---@field end_at? string
---@field name? string
---@field rate_cents? number
---@field start_at? string

---@class PayConfigsUpdateWeeklyRuleResultV2
---@field end_time string
---@field id string
---@field rate_cents number
---@field start_time string
---@field weekdays table

---@class PayConfigsUpdateWeeklyRuleResultV2UpdateData
---@field id string
---@field pay_config_id string
---@field end_time? string
---@field rate_cents? number
---@field start_time? string
---@field weekdays? table

---@class PayConfigsV2
---@field id? string

---@class PayConfigsV2RemoveMatch
---@field id string
---@field pay_config_id string

---@class PayReport
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field pay_config_expression table
---@field pay_config_id? string
---@field published_at? string
---@field rotation_filters? table
---@field schedule_ids table
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field updated_at string

---@class PayReportLoadMatch
---@field id string

---@class PayReportListMatch
---@field after? string
---@field page_size? number

---@class PayReportCreateData
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field pay_config_expression table
---@field pay_config_id? string
---@field published_at? string
---@field rotation_filters? table
---@field schedule_ids table
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field updated_at string

---@class PayReportRemoveMatch
---@field id string

---@class PayReportsPublishResultV2
---@field cc_emails table
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field published_at? string
---@field schedule_ids table
---@field send_user_breakdowns string
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field updated_at string

---@class PayReportsPublishResultV2CreateData
---@field pay_report_id string
---@field cc_emails table
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field published_at? string
---@field schedule_ids table
---@field send_user_breakdowns string
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field updated_at string

---@class PayReportsUnpublishResultV2
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field published_at? string
---@field schedule_ids table
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field unpublish_reason string
---@field updated_at string

---@class PayReportsUnpublishResultV2CreateData
---@field pay_report_id string
---@field created_at string
---@field creator? table
---@field end_date string
---@field error_code? string
---@field error_message? string
---@field id string
---@field name string
---@field overlapping_shifts string
---@field published_at? string
---@field schedule_ids table
---@field start_date string
---@field status string
---@field total_duration_seconds? number
---@field total_pay_by_currency? table
---@field unpaid_shifts string
---@field unpublish_reason string
---@field updated_at string

---@class PayReportsV2

---@class PayReportsV2LoadMatch
---@field pay_report_id string

---@class PoliciesV2
---@field id? string

---@class PoliciesV2RemoveMatch
---@field id string

---@class Policy
---@field assignment_rules table
---@field conditions table
---@field created_at string
---@field debrief table
---@field description? string
---@field expressions? table
---@field follow_up table
---@field id string
---@field name string
---@field on_call_readiness? table
---@field policy_type string
---@field post_mortem table
---@field schedule table
---@field status string
---@field updated_at string

---@class PolicyLoadMatch
---@field id string

---@class PolicyListMatch
---@field after? string
---@field page_size? number
---@field policy_type? string

---@class PolicyCreateData
---@field assignment_rules table
---@field conditions table
---@field created_at string
---@field debrief table
---@field description? string
---@field expressions? table
---@field follow_up table
---@field id string
---@field name string
---@field on_call_readiness? table
---@field policy_type string
---@field post_mortem table
---@field schedule table
---@field status string
---@field updated_at string

---@class PolicyUpdateData
---@field id string
---@field assignment_rules? table
---@field conditions? table
---@field created_at? string
---@field debrief? table
---@field description? string
---@field expressions? table
---@field follow_up? table
---@field name? string
---@field on_call_readiness? table
---@field policy_type? string
---@field post_mortem? table
---@field schedule? table
---@field status? string
---@field updated_at? string

---@class PolicyFinding
---@field created_at string
---@field days? number
---@field debrief table
---@field dismissal table
---@field due_at? string
---@field follow_up table
---@field id string
---@field last_checked_at string
---@field on_call_readiness table
---@field policy_id string
---@field policy_type string
---@field post_mortem table
---@field responsible_users table
---@field schedule table
---@field shift_conflict table
---@field state string
---@field updated_at string
---@field vacation_conflict table

---@class PolicyFindingLoadMatch
---@field id string

---@class PolicyFindingListMatch
---@field after? string
---@field page_size? number
---@field policy_id? string

---@class PolicyFindingsDismissResultV2
---@field created_at string
---@field days? number
---@field debrief table
---@field dismissal table
---@field due_at? string
---@field follow_up table
---@field id string
---@field last_checked_at string
---@field on_call_readiness table
---@field policy_id string
---@field policy_type string
---@field post_mortem table
---@field reason string
---@field responsible_users table
---@field schedule table
---@field shift_conflict table
---@field state string
---@field updated_at string
---@field vacation_conflict table

---@class PolicyFindingsDismissResultV2CreateData
---@field policy_finding_id string
---@field created_at string
---@field days? number
---@field debrief table
---@field dismissal table
---@field due_at? string
---@field follow_up table
---@field id string
---@field last_checked_at string
---@field on_call_readiness table
---@field policy_id string
---@field policy_type string
---@field post_mortem table
---@field reason string
---@field responsible_users table
---@field schedule table
---@field shift_conflict table
---@field state string
---@field updated_at string
---@field vacation_conflict table

---@class PolicyFindingsRestoreResultV2
---@field created_at string
---@field days? number
---@field debrief table
---@field dismissal table
---@field due_at? string
---@field follow_up table
---@field id string
---@field last_checked_at string
---@field on_call_readiness table
---@field policy_id string
---@field policy_type string
---@field post_mortem table
---@field responsible_users table
---@field schedule table
---@field shift_conflict table
---@field state string
---@field updated_at string
---@field vacation_conflict table

---@class PolicyFindingsRestoreResultV2CreateData
---@field policy_finding_id string
---@field created_at string
---@field days? number
---@field debrief table
---@field dismissal table
---@field due_at? string
---@field follow_up table
---@field id string
---@field last_checked_at string
---@field on_call_readiness table
---@field policy_id string
---@field policy_type string
---@field post_mortem table
---@field responsible_users table
---@field schedule table
---@field shift_conflict table
---@field state string
---@field updated_at string
---@field vacation_conflict table

---@class PostmortemDocument
---@field created_at string
---@field document_url string
---@field editors table
---@field exported_urls table
---@field id string
---@field incident_id string
---@field status string
---@field title string
---@field type string
---@field updated_at string

---@class PostmortemDocumentLoadMatch
---@field id string

---@class PostmortemDocumentListMatch
---@field after? string
---@field incident_id? string
---@field page_size? number
---@field sort_by? string

---@class PostmortemDocumentUpdateData
---@field id string
---@field created_at? string
---@field document_url? string
---@field editors? table
---@field exported_urls? table
---@field incident_id? string
---@field status? string
---@field title? string
---@field type? string
---@field updated_at? string

---@class Schedule
---@field annotations table
---@field config table
---@field created_at string
---@field current_shifts? table
---@field holidays_public_config table
---@field id string
---@field name string
---@field next_shifts? table
---@field permalink string
---@field team_ids table
---@field timezone string
---@field updated_at string

---@class ScheduleLoadMatch
---@field id string

---@class ScheduleListMatch
---@field after? string
---@field page_size? number

---@class ScheduleCreateData
---@field annotations table
---@field config table
---@field created_at string
---@field current_shifts? table
---@field holidays_public_config table
---@field id string
---@field name string
---@field next_shifts? table
---@field permalink string
---@field team_ids table
---@field timezone string
---@field updated_at string

---@class ScheduleUpdateData
---@field id string
---@field annotations? table
---@field config? table
---@field created_at? string
---@field current_shifts? table
---@field holidays_public_config? table
---@field name? string
---@field next_shifts? table
---@field permalink? string
---@field team_ids? table
---@field timezone? string
---@field updated_at? string

---@class ScheduleRemoveMatch
---@field id string

---@class ScheduleEntriesListPayloadV2
---@field entry_window_end? string
---@field entry_window_start? string
---@field final table
---@field overrides table
---@field schedule table
---@field scheduled table

---@class ScheduleEntriesListPayloadV2CreateData
---@field schedule_id string
---@field entry_window_end? string
---@field entry_window_start? string
---@field final table
---@field overrides table
---@field schedule table
---@field scheduled table

---@class ScheduleEntry
---@field pagination_meta table
---@field schedule_entries table

---@class ScheduleEntryLoadMatch
---@field entry_window_end? string
---@field entry_window_start? string
---@field schedule_id string

---@class ScheduleReplica
---@field created_at string
---@field id string
---@field last_sync_error? string
---@field last_synced_at? string
---@field mirror_window_days? number
---@field replica_fallback_user_id string
---@field replica_provider string
---@field replica_provider_id string
---@field schedule_id string
---@field sources table
---@field updated_at string
---@field user_statuses table

---@class ScheduleReplicaLoadMatch
---@field id string
---@field schedule_id string

---@class ScheduleReplicaListMatch
---@field id string

---@class ScheduleReplicaCreateData
---@field id string
---@field created_at string
---@field last_sync_error? string
---@field last_synced_at? string
---@field mirror_window_days? number
---@field replica_fallback_user_id string
---@field replica_provider string
---@field replica_provider_id string
---@field schedule_id string
---@field sources table
---@field updated_at string
---@field user_statuses table

---@class ScheduleSyncRule
---@field annotations? table
---@field created_at string
---@field id string
---@field permanent_member_user_ids table
---@field rotation_id? string
---@field schedule_id string
---@field schedule_sync_target table
---@field schedule_sync_target_id string
---@field sync_type string
---@field updated_at string

---@class ScheduleSyncRuleLoadMatch
---@field id string
---@field schedule_id string

---@class ScheduleSyncRuleListMatch
---@field id string
---@field after? string
---@field page_size? number

---@class ScheduleSyncRuleCreateData
---@field id string
---@field annotations? table
---@field created_at string
---@field permanent_member_user_ids table
---@field rotation_id? string
---@field schedule_id string
---@field schedule_sync_target table
---@field schedule_sync_target_id string
---@field sync_type string
---@field updated_at string

---@class ScheduleSyncRuleUpdateData
---@field id string
---@field schedule_id string
---@field annotations? table
---@field created_at? string
---@field permanent_member_user_ids? table
---@field rotation_id? string
---@field schedule_sync_target? table
---@field schedule_sync_target_id? string
---@field sync_type? string
---@field updated_at? string

---@class ScheduleSyncTarget
---@field add_bot_to_group boolean
---@field annotations? table
---@field created_at string
---@field id string
---@field linked_schedules table
---@field new_slack_user_group table
---@field slack_team_id string
---@field slack_user_group_id string
---@field updated_at string

---@class ScheduleSyncTargetLoadMatch
---@field id string

---@class ScheduleSyncTargetListMatch
---@field after? string
---@field page_size? number

---@class ScheduleSyncTargetCreateData
---@field add_bot_to_group boolean
---@field annotations? table
---@field created_at string
---@field id string
---@field linked_schedules table
---@field new_slack_user_group table
---@field slack_team_id string
---@field slack_user_group_id string
---@field updated_at string

---@class ScheduleSyncTargetUpdateData
---@field id string
---@field add_bot_to_group? boolean
---@field annotations? table
---@field created_at? string
---@field linked_schedules? table
---@field new_slack_user_group? table
---@field slack_team_id? string
---@field slack_user_group_id? string
---@field updated_at? string

---@class ScheduleSyncTargetRemoveMatch
---@field id string

---@class SchedulesShowOverrideResultV2
---@field created_at string
---@field end_at string
---@field id string
---@field layer_id string
---@field rotation_id string
---@field schedule_id string
---@field start_at string
---@field updated_at string
---@field user table

---@class SchedulesShowOverrideResultV2LoadMatch
---@field id string

---@class SchedulesShowOverrideResultV2ListMatch
---@field after? string
---@field layer_id? string
---@field page_size? number
---@field rotation_id? string
---@field schedule_id string

---@class SchedulesShowOverrideResultV2CreateData
---@field created_at string
---@field end_at string
---@field id string
---@field layer_id string
---@field rotation_id string
---@field schedule_id string
---@field start_at string
---@field updated_at string
---@field user table

---@class SchedulesUpdateOverrideResultV2
---@field created_at string
---@field end_at string
---@field id string
---@field layer_id string
---@field rotation_id string
---@field schedule_id string
---@field start_at string
---@field updated_at string
---@field user table

---@class SchedulesUpdateOverrideResultV2UpdateData
---@field id string
---@field created_at? string
---@field end_at? string
---@field layer_id? string
---@field rotation_id? string
---@field schedule_id? string
---@field start_at? string
---@field updated_at? string
---@field user? table

---@class Secret
---@field created_at string
---@field description? string
---@field id string
---@field last_four_chars? string
---@field name string
---@field owning_team_ids? table
---@field secret table
---@field updated_at string
---@field value string
---@field version number
---@field versions table

---@class SecretLoadMatch
---@field id string

---@class SecretListMatch
---@field after? string
---@field page_size? number
---@field team_id? table

---@class SecretCreateData
---@field created_at string
---@field description? string
---@field id string
---@field last_four_chars? string
---@field name string
---@field owning_team_ids? table
---@field secret table
---@field updated_at string
---@field value string
---@field version number
---@field versions table

---@class SecretUpdateData
---@field id string
---@field created_at? string
---@field description? string
---@field last_four_chars? string
---@field name? string
---@field owning_team_ids? table
---@field secret? table
---@field updated_at? string
---@field value? string
---@field version? number
---@field versions? table

---@class SecretRemoveMatch
---@field id string

---@class Severity
---@field created_at string
---@field description string
---@field id string
---@field name string
---@field rank number
---@field updated_at string

---@class SeverityLoadMatch
---@field id string

---@class SeverityListMatch
---@field created_at? string
---@field description? string
---@field id? string
---@field name? string
---@field rank? number
---@field updated_at? string

---@class SeverityCreateData
---@field created_at string
---@field description string
---@field id string
---@field name string
---@field rank number
---@field updated_at string

---@class SeverityUpdateData
---@field id string
---@field created_at? string
---@field description? string
---@field name? string
---@field rank? number
---@field updated_at? string

---@class StatusPage
---@field description? string
---@field id string
---@field name string
---@field public_url? string

---@class StatusPageLoadMatch
---@field id string

---@class StatusPageListMatch
---@field after? string
---@field page_size? number

---@class StatusPageComponent
---@field description? string
---@field id string
---@field management_meta table
---@field name string

---@class StatusPageComponentLoadMatch
---@field id string

---@class StatusPageComponentListMatch
---@field description? string
---@field id? string
---@field management_meta? table
---@field name? string

---@class StatusPageComponentCreateData
---@field description? string
---@field id string
---@field management_meta table
---@field name string

---@class StatusPageComponentUpdateData
---@field id string
---@field description? string
---@field management_meta? table
---@field name? string

---@class StatusPageComponentRemoveMatch
---@field id string

---@class StatusPageComponentAvailabilityV2
---@field availability_percent? string
---@field component_id string
---@field data_available_since string
---@field end_at string
---@field start_at string
---@field status_page_id string

---@class StatusPageComponentAvailabilityV2LoadMatch
---@field component_id string
---@field status_page_id string
---@field end_at string
---@field start_at string

---@class StatusPageIncident
---@field component_impacts table
---@field component_statuses? table
---@field id string
---@field idempotency_key string
---@field incident_status string
---@field message string
---@field name string
---@field notify_subscribers boolean
---@field published_at string
---@field status_page_id string
---@field updates table

---@class StatusPageIncidentLoadMatch
---@field id string

---@class StatusPageIncidentListMatch
---@field after? string
---@field component_id? string
---@field end_at? string
---@field group_id? string
---@field page_size? number
---@field start_at? string
---@field status_page_id string
---@field sub_page_id? string

---@class StatusPageIncidentCreateData
---@field component_impacts table
---@field component_statuses? table
---@field id string
---@field idempotency_key string
---@field incident_status string
---@field message string
---@field name string
---@field notify_subscribers boolean
---@field published_at string
---@field status_page_id string
---@field updates table

---@class StatusPageIncidentUpdateData
---@field id string
---@field component_impacts? table
---@field component_statuses? table
---@field idempotency_key? string
---@field incident_status? string
---@field message? string
---@field name? string
---@field notify_subscribers? boolean
---@field published_at? string
---@field status_page_id? string
---@field updates? table

---@class StatusPageIncidentUpdate
---@field component_statuses? table
---@field incident_status? string
---@field message string
---@field notify_subscribers boolean
---@field status_page_incident_id string

---@class StatusPageIncidentUpdateCreateData
---@field component_statuses? table
---@field incident_status? string
---@field message string
---@field notify_subscribers boolean
---@field status_page_incident_id string

---@class StatusPageLinkedResponseIncidentV1
---@field id string
---@field linked_at string

---@class StatusPageLinkedResponseIncidentV1ListMatch
---@field incident_id string
---@field status_page_id string

---@class StatusPageMaintenance
---@field affected_component_ids table
---@field automate_maintenance_status boolean
---@field component_maintenance_periods table
---@field end_at string
---@field id string
---@field idempotency_key string
---@field maintenance_status string
---@field message string
---@field name string
---@field notify_subscribers boolean
---@field published_at string
---@field start_at string
---@field status_page_id string
---@field updates table

---@class StatusPageMaintenanceLoadMatch
---@field id string

---@class StatusPageMaintenanceListMatch
---@field after? string
---@field component_id? string
---@field end_at? string
---@field group_id? string
---@field page_size? number
---@field start_at? string
---@field status_page_id string
---@field sub_page_id? string

---@class StatusPageMaintenanceCreateData
---@field affected_component_ids table
---@field automate_maintenance_status boolean
---@field component_maintenance_periods table
---@field end_at string
---@field id string
---@field idempotency_key string
---@field maintenance_status string
---@field message string
---@field name string
---@field notify_subscribers boolean
---@field published_at string
---@field start_at string
---@field status_page_id string
---@field updates table

---@class StatusPageMaintenanceUpdateData
---@field id string
---@field affected_component_ids? table
---@field automate_maintenance_status? boolean
---@field component_maintenance_periods? table
---@field end_at? string
---@field idempotency_key? string
---@field maintenance_status? string
---@field message? string
---@field name? string
---@field notify_subscribers? boolean
---@field published_at? string
---@field start_at? string
---@field status_page_id? string
---@field updates? table

---@class StatusPageMaintenanceUpdate
---@field component_statuses? table
---@field maintenance_status? string
---@field message string
---@field notify_subscribers boolean
---@field status_page_maintenance_id string

---@class StatusPageMaintenanceUpdateCreateData
---@field component_statuses? table
---@field maintenance_status? string
---@field message string
---@field notify_subscribers boolean
---@field status_page_maintenance_id string

---@class StatusPageStructure
---@field current_structure table
---@field display_uptime_mode string
---@field id? string
---@field management_meta table

---@class StatusPageStructureLoadMatch
---@field id string

---@class StatusPagesV2

---@class StatusPagesV2RemoveMatch
---@field status_page_maintenance_id string

---@class Team
---@field catalog_entry table
---@field id string
---@field members table
---@field name string

---@class TeamLoadMatch
---@field id string

---@class TeamListMatch
---@field after? string
---@field page_size? number

---@class TelemetryDataSourceV2
---@field created_at string
---@field datadog_config? table
---@field enabled boolean
---@field grafana_config? table
---@field id string
---@field name string
---@field provider string
---@field source_type string
---@field updated_at string
---@field version? string

---@class TelemetryDataSourceV2UpdateData
---@field id string
---@field created_at? string
---@field datadog_config? table
---@field enabled? boolean
---@field grafana_config? table
---@field name? string
---@field provider? string
---@field source_type? string
---@field updated_at? string
---@field version? string

---@class User
---@field base_role table
---@field custom_roles table
---@field email? string
---@field id string
---@field is_active boolean
---@field name string
---@field role string
---@field seats table
---@field slack_user_id? string

---@class UserLoadMatch
---@field id string

---@class UserListMatch
---@field after? string
---@field email? string
---@field include_inactive? boolean
---@field page_size? number
---@field slack_user_id? string

---@class UserCreateData
---@field id string
---@field base_role table
---@field custom_roles table
---@field email? string
---@field is_active boolean
---@field name string
---@field role string
---@field seats table
---@field slack_user_id? string

---@class Workflow
---@field annotations? table
---@field auto_run_mode? string
---@field condition_groups table
---@field continue_on_step_error boolean
---@field delay table
---@field expressions table
---@field folder? string
---@field form_fields? table
---@field id string
---@field include_private_escalations? boolean
---@field include_private_incidents? boolean
---@field management_meta table
---@field name string
---@field once_for table
---@field owning_team_ids? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident_modes table
---@field runs_on_incidents string
---@field shortform? string
---@field skip_step_upgrades? boolean
---@field state? string
---@field steps table
---@field trigger string
---@field version number
---@field workflow table

---@class WorkflowLoadMatch
---@field id string
---@field skip_step_upgrade? boolean

---@class WorkflowListMatch
---@field annotations? table
---@field auto_run_mode? string
---@field condition_groups? table
---@field continue_on_step_error? boolean
---@field delay? table
---@field expressions? table
---@field folder? string
---@field form_fields? table
---@field id? string
---@field include_private_escalations? boolean
---@field include_private_incidents? boolean
---@field management_meta? table
---@field name? string
---@field once_for? table
---@field owning_team_ids? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident_modes? table
---@field runs_on_incidents? string
---@field shortform? string
---@field skip_step_upgrades? boolean
---@field state? string
---@field steps? table
---@field trigger? string
---@field version? number
---@field workflow? table

---@class WorkflowCreateData
---@field annotations? table
---@field auto_run_mode? string
---@field condition_groups table
---@field continue_on_step_error boolean
---@field delay table
---@field expressions table
---@field folder? string
---@field form_fields? table
---@field id string
---@field include_private_escalations? boolean
---@field include_private_incidents? boolean
---@field management_meta table
---@field name string
---@field once_for table
---@field owning_team_ids? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident_modes table
---@field runs_on_incidents string
---@field shortform? string
---@field skip_step_upgrades? boolean
---@field state? string
---@field steps table
---@field trigger string
---@field version number
---@field workflow table

---@class WorkflowUpdateData
---@field id string
---@field annotations? table
---@field auto_run_mode? string
---@field condition_groups? table
---@field continue_on_step_error? boolean
---@field delay? table
---@field expressions? table
---@field folder? string
---@field form_fields? table
---@field include_private_escalations? boolean
---@field include_private_incidents? boolean
---@field management_meta? table
---@field name? string
---@field once_for? table
---@field owning_team_ids? table
---@field private_incident_scope? string
---@field runs_from? string
---@field runs_on_incident_modes? table
---@field runs_on_incidents? string
---@field shortform? string
---@field skip_step_upgrades? boolean
---@field state? string
---@field steps? table
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
---@field after? string
---@field created_at? table
---@field incident_id? string
---@field page_size? number
---@field workflow_id? string

local M = {}

return M

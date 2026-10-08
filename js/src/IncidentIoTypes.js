// Typed models for the IncidentIo SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Action
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {boolean} follow_up
 * @property {string} id
 * @property {string} incident_id
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ActionLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ActionListMatch
 * @property {string} [incident_id]
 * @property {string} [incident_mode]
 * @property {boolean} [is_follow_up]
 */

/**
 * @typedef {Object} ActionCreateData
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {boolean} follow_up
 * @property {string} id
 * @property {string} incident_id
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ActionUpdateData
 * @property {string} id
 * @property {Object} [assignee]
 * @property {string} [assignee_id]
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {boolean} [follow_up]
 * @property {string} [incident_id]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ActionRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Alert
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertListMatch
 * @property {string} [after]
 * @property {Object} [alert_group_id]
 * @property {Object} [alert_source]
 * @property {Object} [attribute]
 * @property {Object} [created_at]
 * @property {Object} [deduplication_key]
 * @property {Object} [has_note]
 * @property {Object} [include_maintenance_window]
 * @property {number} page_size
 * @property {Object} [status]
 * @property {Object} [tag]
 * @property {Object} [updated_at]
 */

/**
 * @typedef {Object} AlertCreateData
 * @property {string} id
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertAttribute
 * @property {boolean} array
 * @property {string} [emoji]
 * @property {string} id
 * @property {string} name
 * @property {boolean} required
 * @property {string} type
 */

/**
 * @typedef {Object} AlertAttributeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertAttributeListMatch
 * @property {boolean} [array]
 * @property {string} [emoji]
 * @property {string} [id]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AlertAttributeCreateData
 * @property {boolean} array
 * @property {string} [emoji]
 * @property {string} id
 * @property {string} name
 * @property {boolean} required
 * @property {string} type
 */

/**
 * @typedef {Object} AlertAttributeUpdateData
 * @property {string} id
 * @property {boolean} [array]
 * @property {string} [emoji]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [type]
 */

/**
 * @typedef {Object} AlertAttributeRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertNote
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {string} content
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} id
 * @property {Array} images
 * @property {string} [last_edited_at]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertNoteLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertNoteListMatch
 * @property {string} [after]
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} AlertNoteCreateData
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {string} content
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} id
 * @property {Array} images
 * @property {string} [last_edited_at]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertNoteUpdateData
 * @property {string} id
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {string} [content]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {Array} [images]
 * @property {string} [last_edited_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} AlertNoteRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertRoute
 * @property {Array} alert_sources
 * @property {Array} channel_config
 * @property {Array} condition_groups
 * @property {string} [created_at]
 * @property {boolean} enabled
 * @property {Object} escalation_config
 * @property {Array} expressions
 * @property {Object} grouping_config
 * @property {string} id
 * @property {Object} incident_config
 * @property {Object} incident_template
 * @property {boolean} is_private
 * @property {Object} message_config
 * @property {Object} [message_template]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {string} [updated_at]
 * @property {number} version
 */

/**
 * @typedef {Object} AlertRouteLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertRouteListMatch
 * @property {string} [after]
 * @property {number} page_size
 */

/**
 * @typedef {Object} AlertRouteCreateData
 * @property {Array} alert_sources
 * @property {Array} channel_config
 * @property {Array} condition_groups
 * @property {string} [created_at]
 * @property {boolean} enabled
 * @property {Object} escalation_config
 * @property {Array} expressions
 * @property {Object} grouping_config
 * @property {string} id
 * @property {Object} incident_config
 * @property {Object} incident_template
 * @property {boolean} is_private
 * @property {Object} message_config
 * @property {Object} [message_template]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {string} [updated_at]
 * @property {number} version
 */

/**
 * @typedef {Object} AlertRouteUpdateData
 * @property {string} id
 * @property {Array} [alert_sources]
 * @property {Array} [channel_config]
 * @property {Array} [condition_groups]
 * @property {string} [created_at]
 * @property {boolean} [enabled]
 * @property {Object} [escalation_config]
 * @property {Array} [expressions]
 * @property {Object} [grouping_config]
 * @property {Object} [incident_config]
 * @property {Object} [incident_template]
 * @property {boolean} [is_private]
 * @property {Object} [message_config]
 * @property {Object} [message_template]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {string} [updated_at]
 * @property {number} [version]
 */

/**
 * @typedef {Object} AlertRouteRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertSource
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alerts]
 * @property {number} [auto_resolve_timeout_minutes]
 * @property {Object} azure_devops_options
 * @property {boolean} [disabled]
 * @property {Object} email_options
 * @property {Array} [filter_condition_groups]
 * @property {string} [fixed_team_id]
 * @property {Object} heartbeat_options
 * @property {Object} http_custom_options
 * @property {string} id
 * @property {Object} jira_options
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {Object} rate_limit_sharding
 * @property {string} [secret_token]
 * @property {string} source_type
 * @property {Object} template
 */

/**
 * @typedef {Object} AlertSourceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertSourceListMatch
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alerts]
 * @property {number} [auto_resolve_timeout_minutes]
 * @property {Object} [azure_devops_options]
 * @property {boolean} [disabled]
 * @property {Object} [email_options]
 * @property {Array} [filter_condition_groups]
 * @property {string} [fixed_team_id]
 * @property {Object} [heartbeat_options]
 * @property {Object} [http_custom_options]
 * @property {string} [id]
 * @property {Object} [jira_options]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {Object} [rate_limit_sharding]
 * @property {string} [secret_token]
 * @property {string} [source_type]
 * @property {Object} [template]
 */

/**
 * @typedef {Object} AlertSourceCreateData
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alerts]
 * @property {number} [auto_resolve_timeout_minutes]
 * @property {Object} azure_devops_options
 * @property {boolean} [disabled]
 * @property {Object} email_options
 * @property {Array} [filter_condition_groups]
 * @property {string} [fixed_team_id]
 * @property {Object} heartbeat_options
 * @property {Object} http_custom_options
 * @property {string} id
 * @property {Object} jira_options
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {Object} rate_limit_sharding
 * @property {string} [secret_token]
 * @property {string} source_type
 * @property {Object} template
 */

/**
 * @typedef {Object} AlertSourceUpdateData
 * @property {string} id
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alerts]
 * @property {number} [auto_resolve_timeout_minutes]
 * @property {Object} [azure_devops_options]
 * @property {boolean} [disabled]
 * @property {Object} [email_options]
 * @property {Array} [filter_condition_groups]
 * @property {string} [fixed_team_id]
 * @property {Object} [heartbeat_options]
 * @property {Object} [http_custom_options]
 * @property {Object} [jira_options]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {Object} [rate_limit_sharding]
 * @property {string} [secret_token]
 * @property {string} [source_type]
 * @property {Object} [template]
 */

/**
 * @typedef {Object} AlertSourceRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertSourcesV2
 * @property {Array} [owning_team_ids]
 * @property {string} source_type
 * @property {Object} template
 */

/**
 * @typedef {Object} AlertSourcesV2CreateData
 * @property {Array} [owning_team_ids]
 * @property {string} source_type
 * @property {Object} template
 */

/**
 * @typedef {Object} AlertTag
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {Object} AlertTagListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {string} [search]
 */

/**
 * @typedef {Object} AlertsAddTagsResultV2
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsAddTagsResultV2CreateData
 * @property {string} alert_id
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsRemoveTagsResultV2
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsRemoveTagsResultV2CreateData
 * @property {string} alert_id
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsSetTagsResultV2
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsSetTagsResultV2CreateData
 * @property {string} alert_id
 * @property {Array} [alert_group_ids]
 * @property {string} alert_source_id
 * @property {Array} attributes
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {Array} [tags]
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertsTransitionIncidentAlertResultV2
 * @property {Object} alert
 * @property {string} alert_id
 * @property {string} [alert_route_id]
 * @property {string} id
 * @property {Object} incident
 * @property {string} incident_id
 * @property {boolean} [re_relate]
 * @property {string} state
 */

/**
 * @typedef {Object} AlertsTransitionIncidentAlertResultV2ListMatch
 * @property {string} [after]
 * @property {string} [alert_id]
 * @property {string} [incident_id]
 * @property {number} page_size
 */

/**
 * @typedef {Object} AlertsTransitionIncidentAlertResultV2CreateData
 * @property {Object} alert
 * @property {string} alert_id
 * @property {string} [alert_route_id]
 * @property {string} id
 * @property {Object} incident
 * @property {string} incident_id
 * @property {boolean} [re_relate]
 * @property {string} state
 */

/**
 * @typedef {Object} AnnouncementRule
 * @property {Array} condition_groups
 * @property {string} conditions_no_longer_apply_behaviour
 * @property {string} created_at
 * @property {string} id
 * @property {Array} microsoft_teams_channel_ids
 * @property {string} mode
 * @property {string} name
 * @property {Array} owning_team_ids
 * @property {string} [private_incident_scope]
 * @property {Array} slack_channel_ids
 * @property {string} [template_id]
 * @property {string} update_sharing_mode
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AnnouncementRuleLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AnnouncementRuleListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} AnnouncementRuleCreateData
 * @property {Array} condition_groups
 * @property {string} conditions_no_longer_apply_behaviour
 * @property {string} created_at
 * @property {string} id
 * @property {Array} microsoft_teams_channel_ids
 * @property {string} mode
 * @property {string} name
 * @property {Array} owning_team_ids
 * @property {string} [private_incident_scope]
 * @property {Array} slack_channel_ids
 * @property {string} [template_id]
 * @property {string} update_sharing_mode
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AnnouncementRuleUpdateData
 * @property {string} id
 * @property {Array} [condition_groups]
 * @property {string} [conditions_no_longer_apply_behaviour]
 * @property {string} [created_at]
 * @property {Array} [microsoft_teams_channel_ids]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {string} [private_incident_scope]
 * @property {Array} [slack_channel_ids]
 * @property {string} [template_id]
 * @property {string} [update_sharing_mode]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} AnnouncementRuleRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AnnouncementTemplate
 * @property {Array} actions
 * @property {Array} fields
 * @property {string} id
 * @property {boolean} is_default
 * @property {string} name
 * @property {Array} owning_team_ids
 */

/**
 * @typedef {Object} AnnouncementTemplateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AnnouncementTemplateListMatch
 * @property {Array} [actions]
 * @property {Array} [fields]
 * @property {string} [id]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 */

/**
 * @typedef {Object} AnnouncementTemplateCreateData
 * @property {Array} actions
 * @property {Array} fields
 * @property {string} id
 * @property {boolean} is_default
 * @property {string} name
 * @property {Array} owning_team_ids
 */

/**
 * @typedef {Object} AnnouncementTemplateUpdateData
 * @property {string} id
 * @property {Array} [actions]
 * @property {Array} [fields]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 */

/**
 * @typedef {Object} AnnouncementTemplateRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ApiKey
 * @property {string} [comments]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} id
 * @property {string} [last_used_at]
 * @property {string} name
 * @property {Array} role_names
 * @property {Array} roles
 * @property {Array} team_ids
 * @property {Array} team_role_names
 * @property {Array} team_roles
 * @property {string} token_last_issued_at
 */

/**
 * @typedef {Object} ApiKeyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ApiKeyListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} ApiKeyCreateData
 * @property {string} [comments]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} id
 * @property {string} [last_used_at]
 * @property {string} name
 * @property {Array} role_names
 * @property {Array} roles
 * @property {Array} team_ids
 * @property {Array} team_role_names
 * @property {Array} team_roles
 * @property {string} token_last_issued_at
 */

/**
 * @typedef {Object} ApiKeyUpdateData
 * @property {string} id
 * @property {string} [comments]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [last_used_at]
 * @property {string} [name]
 * @property {Array} [role_names]
 * @property {Array} [roles]
 * @property {Array} [team_ids]
 * @property {Array} [team_role_names]
 * @property {Array} [team_roles]
 * @property {string} [token_last_issued_at]
 */

/**
 * @typedef {Object} ApiKeyRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CallRoute
 * @property {Array} allowed_callers
 * @property {string} [country_code]
 * @property {string} created_at
 * @property {string} current_state
 * @property {string} custom_language
 * @property {string} id
 * @property {string} name
 * @property {Array} options
 * @property {Array} path
 * @property {string} [phone_number]
 * @property {string} [phone_number_type]
 * @property {string} responder_caller_id
 * @property {string} updated_at
 * @property {boolean} use_caller_allowlist
 */

/**
 * @typedef {Object} CallRouteLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CallRouteListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} CallRouteUpdateData
 * @property {string} id
 * @property {Array} [allowed_callers]
 * @property {string} [country_code]
 * @property {string} [created_at]
 * @property {string} [current_state]
 * @property {string} [custom_language]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {Array} [path]
 * @property {string} [phone_number]
 * @property {string} [phone_number_type]
 * @property {string} [responder_caller_id]
 * @property {string} [updated_at]
 * @property {boolean} [use_caller_allowlist]
 */

/**
 * @typedef {Object} CallRoutesCreateAllowedCallerResultV2
 * @property {string} [name]
 * @property {string} phone_number
 */

/**
 * @typedef {Object} CallRoutesCreateAllowedCallerResultV2CreateData
 * @property {string} call_route_id
 * @property {string} [name]
 * @property {string} phone_number
 */

/**
 * @typedef {Object} CallRoutesCreateOptionResultV2
 * @property {string} digit
 * @property {Array} path
 * @property {string} prompt
 */

/**
 * @typedef {Object} CallRoutesCreateOptionResultV2CreateData
 * @property {string} call_route_id
 * @property {string} digit
 * @property {Array} path
 * @property {string} prompt
 */

/**
 * @typedef {Object} CallRoutesListAllowedCallersResultV2
 * @property {string} id
 * @property {string} [name]
 * @property {string} phone_number
 */

/**
 * @typedef {Object} CallRoutesListAllowedCallersResultV2ListMatch
 * @property {string} call_route_id
 */

/**
 * @typedef {Object} CallRoutesListOptionsResultV2
 * @property {string} digit
 * @property {string} id
 * @property {Array} path
 * @property {string} prompt
 */

/**
 * @typedef {Object} CallRoutesListOptionsResultV2ListMatch
 * @property {string} call_route_id
 */

/**
 * @typedef {Object} CallRoutesShowAllowedCallerResultV2
 * @property {string} id
 * @property {string} [name]
 * @property {string} phone_number
 */

/**
 * @typedef {Object} CallRoutesShowAllowedCallerResultV2LoadMatch
 * @property {string} call_route_id
 * @property {string} id
 */

/**
 * @typedef {Object} CallRoutesShowOptionResultV2
 * @property {string} digit
 * @property {string} id
 * @property {Array} path
 * @property {string} prompt
 */

/**
 * @typedef {Object} CallRoutesShowOptionResultV2LoadMatch
 * @property {string} call_route_id
 * @property {string} id
 */

/**
 * @typedef {Object} CallRoutesUpdateAllowedCallerResultV2
 * @property {string} id
 * @property {string} [name]
 * @property {string} phone_number
 */

/**
 * @typedef {Object} CallRoutesUpdateAllowedCallerResultV2UpdateData
 * @property {string} call_route_id
 * @property {string} id
 * @property {string} [name]
 * @property {string} [phone_number]
 */

/**
 * @typedef {Object} CallRoutesUpdateOptionResultV2
 * @property {string} digit
 * @property {string} id
 * @property {Array} path
 * @property {string} prompt
 */

/**
 * @typedef {Object} CallRoutesUpdateOptionResultV2UpdateData
 * @property {string} call_route_id
 * @property {string} id
 * @property {string} [digit]
 * @property {Array} [path]
 * @property {string} [prompt]
 */

/**
 * @typedef {Object} CallRoutesV2
 * @property {string} [id]
 */

/**
 * @typedef {Object} CallRoutesV2RemoveMatch
 * @property {string} call_route_id
 * @property {string} id
 */

/**
 * @typedef {Object} CallSession
 * @property {string} [ended_at]
 * @property {string} id
 * @property {string} incident_id
 * @property {string} started_at
 */

/**
 * @typedef {Object} CallSessionListMatch
 * @property {string} [after]
 * @property {string} incident_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} CallTranscriptEntry
 * @property {string} content
 * @property {string} id
 * @property {string} medium
 * @property {string} participant_name
 * @property {string} timestamp
 */

/**
 * @typedef {Object} CallTranscriptEntryListMatch
 * @property {string} [after]
 * @property {string} call_session_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} CatalogEntry
 * @property {Array} [aliases]
 * @property {string} [archived_at]
 * @property {Object} attribute_values
 * @property {Object} catalog_entry
 * @property {Object} catalog_type
 * @property {string} catalog_type_id
 * @property {string} created_at
 * @property {string} [external_id]
 * @property {string} id
 * @property {string} name
 * @property {number} [rank]
 * @property {Array} [update_attributes]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CatalogEntryLoadMatch
 * @property {string} id
 * @property {boolean} [expand]
 */

/**
 * @typedef {Object} CatalogEntryListMatch
 * @property {string} [after]
 * @property {string} catalog_type_id
 * @property {string} [identifier]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} CatalogEntryCreateData
 * @property {Array} [aliases]
 * @property {string} [archived_at]
 * @property {Object} attribute_values
 * @property {Object} catalog_entry
 * @property {Object} catalog_type
 * @property {string} catalog_type_id
 * @property {string} created_at
 * @property {string} [external_id]
 * @property {string} id
 * @property {string} name
 * @property {number} [rank]
 * @property {Array} [update_attributes]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CatalogEntryUpdateData
 * @property {string} id
 * @property {Array} [aliases]
 * @property {string} [archived_at]
 * @property {Object} [attribute_values]
 * @property {Object} [catalog_entry]
 * @property {Object} [catalog_type]
 * @property {string} [catalog_type_id]
 * @property {string} [created_at]
 * @property {string} [external_id]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {Array} [update_attributes]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CatalogResource
 * @property {string} category
 * @property {string} description
 * @property {string} engine_resource_type
 * @property {string} label
 * @property {string} type
 * @property {string} value_docstring
 */

/**
 * @typedef {Object} CatalogResourceListMatch
 * @property {string} [category]
 * @property {string} [description]
 * @property {string} [engine_resource_type]
 * @property {string} [label]
 * @property {string} [type]
 * @property {string} [value_docstring]
 */

/**
 * @typedef {Object} CatalogType
 * @property {Object} annotations
 * @property {Array} categories
 * @property {string} color
 * @property {string} created_at
 * @property {string} description
 * @property {string} [dynamic_resource_parameter]
 * @property {string} engine_resource_type
 * @property {number} [estimated_count]
 * @property {string} icon
 * @property {string} id
 * @property {boolean} is_editable
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} schema
 * @property {string} semantic_type
 * @property {string} [source_repo_url]
 * @property {string} type_name
 * @property {string} updated_at
 * @property {boolean} use_name_as_identifier
 */

/**
 * @typedef {Object} CatalogTypeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CatalogTypeListMatch
 * @property {Object} [annotations]
 * @property {Array} [categories]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [dynamic_resource_parameter]
 * @property {string} [engine_resource_type]
 * @property {number} [estimated_count]
 * @property {string} [icon]
 * @property {string} [id]
 * @property {boolean} [is_editable]
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {boolean} [ranked]
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} [schema]
 * @property {string} [semantic_type]
 * @property {string} [source_repo_url]
 * @property {string} [type_name]
 * @property {string} [updated_at]
 * @property {boolean} [use_name_as_identifier]
 */

/**
 * @typedef {Object} CatalogTypeCreateData
 * @property {Object} annotations
 * @property {Array} categories
 * @property {string} color
 * @property {string} created_at
 * @property {string} description
 * @property {string} [dynamic_resource_parameter]
 * @property {string} engine_resource_type
 * @property {number} [estimated_count]
 * @property {string} icon
 * @property {string} id
 * @property {boolean} is_editable
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} schema
 * @property {string} semantic_type
 * @property {string} [source_repo_url]
 * @property {string} type_name
 * @property {string} updated_at
 * @property {boolean} use_name_as_identifier
 */

/**
 * @typedef {Object} CatalogTypeUpdateData
 * @property {string} id
 * @property {Object} [annotations]
 * @property {Array} [categories]
 * @property {string} [color]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [dynamic_resource_parameter]
 * @property {string} [engine_resource_type]
 * @property {number} [estimated_count]
 * @property {string} [icon]
 * @property {boolean} [is_editable]
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {boolean} [ranked]
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} [schema]
 * @property {string} [semantic_type]
 * @property {string} [source_repo_url]
 * @property {string} [type_name]
 * @property {string} [updated_at]
 * @property {boolean} [use_name_as_identifier]
 */

/**
 * @typedef {Object} CatalogTypeSchema
 * @property {Object} annotations
 * @property {Array} attributes
 * @property {Array} categories
 * @property {string} color
 * @property {string} created_at
 * @property {string} description
 * @property {string} [dynamic_resource_parameter]
 * @property {string} engine_resource_type
 * @property {number} [estimated_count]
 * @property {string} icon
 * @property {string} id
 * @property {boolean} is_editable
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} schema
 * @property {string} semantic_type
 * @property {string} [source_repo_url]
 * @property {string} type_name
 * @property {string} updated_at
 * @property {boolean} use_name_as_identifier
 * @property {number} version
 */

/**
 * @typedef {Object} CatalogTypeSchemaCreateData
 * @property {string} catalog_type_id
 * @property {Object} annotations
 * @property {Array} attributes
 * @property {Array} categories
 * @property {string} color
 * @property {string} created_at
 * @property {string} description
 * @property {string} [dynamic_resource_parameter]
 * @property {string} engine_resource_type
 * @property {number} [estimated_count]
 * @property {string} icon
 * @property {string} id
 * @property {boolean} is_editable
 * @property {boolean} [is_team_type]
 * @property {string} [last_synced_at]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integrations]
 * @property {Object} schema
 * @property {string} semantic_type
 * @property {string} [source_repo_url]
 * @property {string} type_name
 * @property {string} updated_at
 * @property {boolean} use_name_as_identifier
 * @property {number} version
 */

/**
 * @typedef {Object} CustomField
 * @property {string} [catalog_type_id]
 * @property {string} created_at
 * @property {string} description
 * @property {string} field_type
 * @property {Object} filter_by
 * @property {Object} fixed_filter
 * @property {string} [group_by_catalog_attribute_id]
 * @property {string} [helptext_catalog_attribute_id]
 * @property {string} id
 * @property {string} name
 * @property {Array} options
 * @property {string} [required]
 * @property {string} [required_v2]
 * @property {boolean} show_before_closure
 * @property {boolean} show_before_creation
 * @property {boolean} show_before_update
 * @property {boolean} [show_in_announcement_post]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CustomFieldLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldListMatch
 * @property {string} [catalog_type_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [field_type]
 * @property {Object} [filter_by]
 * @property {Object} [fixed_filter]
 * @property {string} [group_by_catalog_attribute_id]
 * @property {string} [helptext_catalog_attribute_id]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [required]
 * @property {string} [required_v2]
 * @property {boolean} [show_before_closure]
 * @property {boolean} [show_before_creation]
 * @property {boolean} [show_before_update]
 * @property {boolean} [show_in_announcement_post]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CustomFieldCreateData
 * @property {string} [catalog_type_id]
 * @property {string} created_at
 * @property {string} description
 * @property {string} field_type
 * @property {Object} filter_by
 * @property {Object} fixed_filter
 * @property {string} [group_by_catalog_attribute_id]
 * @property {string} [helptext_catalog_attribute_id]
 * @property {string} id
 * @property {string} name
 * @property {Array} options
 * @property {string} [required]
 * @property {string} [required_v2]
 * @property {boolean} show_before_closure
 * @property {boolean} show_before_creation
 * @property {boolean} show_before_update
 * @property {boolean} [show_in_announcement_post]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CustomFieldUpdateData
 * @property {string} id
 * @property {string} [catalog_type_id]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [field_type]
 * @property {Object} [filter_by]
 * @property {Object} [fixed_filter]
 * @property {string} [group_by_catalog_attribute_id]
 * @property {string} [helptext_catalog_attribute_id]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [required]
 * @property {string} [required_v2]
 * @property {boolean} [show_before_closure]
 * @property {boolean} [show_before_creation]
 * @property {boolean} [show_before_update]
 * @property {boolean} [show_in_announcement_post]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CustomFieldRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldOption
 * @property {string} custom_field_id
 * @property {string} id
 * @property {number} sort_key
 * @property {string} value
 */

/**
 * @typedef {Object} CustomFieldOptionLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldOptionListMatch
 * @property {string} [after]
 * @property {string} custom_field_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} CustomFieldOptionCreateData
 * @property {string} custom_field_id
 * @property {string} id
 * @property {number} sort_key
 * @property {string} value
 */

/**
 * @typedef {Object} CustomFieldOptionUpdateData
 * @property {string} id
 * @property {string} [custom_field_id]
 * @property {number} [sort_key]
 * @property {string} [value]
 */

/**
 * @typedef {Object} CustomFieldOptionRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Escalation
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} description
 * @property {string} [escalation_path_id]
 * @property {Array} events
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} [incident_id]
 * @property {Object} priority
 * @property {Array} related_alerts
 * @property {Array} related_incidents
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {Array} [user_ids]
 */

/**
 * @typedef {Object} EscalationLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EscalationListMatch
 * @property {string} [after]
 * @property {Object} [alert]
 * @property {Object} [created_at]
 * @property {Object} [escalation_path]
 * @property {Object} [idempotency_key]
 * @property {Object} [incident]
 * @property {number} [page_size]
 * @property {Object} [status]
 * @property {Object} [updated_at]
 */

/**
 * @typedef {Object} EscalationCreateData
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} description
 * @property {string} [escalation_path_id]
 * @property {Array} events
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} [incident_id]
 * @property {Object} priority
 * @property {Array} related_alerts
 * @property {Array} related_incidents
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {Array} [user_ids]
 */

/**
 * @typedef {Object} EscalationPathTemplate
 * @property {string} [description]
 * @property {Array} expressions
 * @property {boolean} has_historical_escalation_path_versions
 * @property {string} id
 * @property {string} name
 * @property {Array} params
 * @property {Array} path
 * @property {Object} repeat_config
 * @property {Array} [working_hours]
 */

/**
 * @typedef {Object} EscalationPathTemplateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EscalationPathTemplateListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {string} [search]
 */

/**
 * @typedef {Object} EscalationPathTemplateCreateData
 * @property {string} [description]
 * @property {Array} expressions
 * @property {boolean} has_historical_escalation_path_versions
 * @property {string} id
 * @property {string} name
 * @property {Array} params
 * @property {Array} path
 * @property {Object} repeat_config
 * @property {Array} [working_hours]
 */

/**
 * @typedef {Object} EscalationPathTemplateUpdateData
 * @property {string} id
 * @property {string} [description]
 * @property {Array} [expressions]
 * @property {boolean} [has_historical_escalation_path_versions]
 * @property {string} [name]
 * @property {Array} [params]
 * @property {Array} [path]
 * @property {Object} [repeat_config]
 * @property {Array} [working_hours]
 */

/**
 * @typedef {Object} EscalationPathTemplateRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EscalationsCheckEscalationPermissionsResultV2
 * @property {Array} response_options
 * @property {Array} user_ids
 */

/**
 * @typedef {Object} EscalationsCheckEscalationPermissionsResultV2CreateData
 * @property {string} escalation_id
 * @property {Array} response_options
 * @property {Array} user_ids
 */

/**
 * @typedef {Object} EscalationsReassignEscalationResultV2
 * @property {string} [description]
 * @property {string} [escalation_path_id]
 * @property {boolean} [resolve_original]
 * @property {string} [title]
 * @property {Array} [user_ids]
 */

/**
 * @typedef {Object} EscalationsReassignEscalationResultV2CreateData
 * @property {string} escalation_id
 * @property {string} [description]
 * @property {string} [escalation_path_id]
 * @property {boolean} [resolve_original]
 * @property {string} [title]
 * @property {Array} [user_ids]
 */

/**
 * @typedef {Object} FollowUp
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {Object} assignee_team
 * @property {string} [assignee_team_id]
 * @property {Object} category
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} external_issue_reference
 * @property {string} [external_issue_reference_id]
 * @property {string} [follow_up_category_id]
 * @property {string} [follow_up_priority_option_id]
 * @property {string} id
 * @property {string} incident_id
 * @property {Array} labels
 * @property {Object} priority
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} FollowUpLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} FollowUpListMatch
 * @property {string} [assignee_team_id]
 * @property {string} [incident_id]
 * @property {string} [incident_mode]
 */

/**
 * @typedef {Object} FollowUpCreateData
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {Object} assignee_team
 * @property {string} [assignee_team_id]
 * @property {Object} category
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} external_issue_reference
 * @property {string} [external_issue_reference_id]
 * @property {string} [follow_up_category_id]
 * @property {string} [follow_up_priority_option_id]
 * @property {string} id
 * @property {string} incident_id
 * @property {Array} labels
 * @property {Object} priority
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} FollowUpUpdateData
 * @property {string} id
 * @property {Object} [assignee]
 * @property {string} [assignee_id]
 * @property {Object} [assignee_team]
 * @property {string} [assignee_team_id]
 * @property {Object} [category]
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {string} [external_issue_reference_id]
 * @property {string} [follow_up_category_id]
 * @property {string} [follow_up_priority_option_id]
 * @property {string} [incident_id]
 * @property {Array} [labels]
 * @property {Object} [priority]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} FollowUpRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} FollowUpsConnectExternalIssueResultV3
 * @property {Object} assignee
 * @property {Object} assignee_team
 * @property {Object} category
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} external_issue_reference
 * @property {string} id
 * @property {string} incident_id
 * @property {Array} labels
 * @property {Object} priority
 * @property {string} provider
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} FollowUpsConnectExternalIssueResultV3CreateData
 * @property {string} follow_up_id
 * @property {Object} assignee
 * @property {Object} assignee_team
 * @property {Object} category
 * @property {string} [completed_at]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {Object} external_issue_reference
 * @property {string} id
 * @property {string} incident_id
 * @property {Array} labels
 * @property {Object} priority
 * @property {string} provider
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {string} url
 */

/**
 * @typedef {Object} FollowUpsCreateFromLinkResultV3
 * @property {string} incident_id
 * @property {string} url
 */

/**
 * @typedef {Object} FollowUpsCreateFromLinkResultV3CreateData
 * @property {string} incident_id
 * @property {string} url
 */

/**
 * @typedef {Object} Identity
 * @property {string} dashboard_url
 * @property {string} name
 * @property {Array} roles
 * @property {Array} team_roles
 * @property {Array} teams
 */

/**
 * @typedef {Object} IdentityLoadMatch
 * @property {string} [dashboard_url]
 * @property {string} [name]
 * @property {Array} [roles]
 * @property {Array} [team_roles]
 * @property {Array} [teams]
 */

/**
 * @typedef {Object} Incident
 * @property {string} [call_url]
 * @property {string} created_at
 * @property {Object} creator
 * @property {Array} custom_field_entries
 * @property {Array} [debriefs]
 * @property {Array} [duration_metrics]
 * @property {Object} external_issue_reference
 * @property {boolean} [has_debrief]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {Array} incident_role_assignments
 * @property {Object} incident_status
 * @property {string} [incident_status_id]
 * @property {Array} [incident_timestamp_values]
 * @property {Object} incident_type
 * @property {string} [incident_type_id]
 * @property {string} last_activity_at
 * @property {string} mode
 * @property {string} [ms_teams_channel_url]
 * @property {string} name
 * @property {string} [permalink]
 * @property {Array} [postmortem_document_ids]
 * @property {string} [postmortem_document_url]
 * @property {string} reference
 * @property {Object} [retrospective_incident_options]
 * @property {Object} severity
 * @property {string} [severity_id]
 * @property {string} slack_channel_id
 * @property {string} [slack_channel_name]
 * @property {string} [slack_channel_name_override]
 * @property {string} [slack_channel_url]
 * @property {string} slack_team_id
 * @property {string} [source_message_channel_id]
 * @property {string} [source_message_timestamp]
 * @property {string} status
 * @property {string} [summary]
 * @property {Array} team_ids
 * @property {Array} [timestamps]
 * @property {string} updated_at
 * @property {string} visibility
 * @property {number} [workload_minutes_late]
 * @property {number} [workload_minutes_sleeping]
 * @property {number} [workload_minutes_total]
 * @property {number} [workload_minutes_working]
 */

/**
 * @typedef {Object} IncidentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {Array} [status]
 */

/**
 * @typedef {Object} IncidentCreateData
 * @property {string} [call_url]
 * @property {string} created_at
 * @property {Object} creator
 * @property {Array} custom_field_entries
 * @property {Array} [debriefs]
 * @property {Array} [duration_metrics]
 * @property {Object} external_issue_reference
 * @property {boolean} [has_debrief]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {Array} incident_role_assignments
 * @property {Object} incident_status
 * @property {string} [incident_status_id]
 * @property {Array} [incident_timestamp_values]
 * @property {Object} incident_type
 * @property {string} [incident_type_id]
 * @property {string} last_activity_at
 * @property {string} mode
 * @property {string} [ms_teams_channel_url]
 * @property {string} name
 * @property {string} [permalink]
 * @property {Array} [postmortem_document_ids]
 * @property {string} [postmortem_document_url]
 * @property {string} reference
 * @property {Object} [retrospective_incident_options]
 * @property {Object} severity
 * @property {string} [severity_id]
 * @property {string} slack_channel_id
 * @property {string} [slack_channel_name]
 * @property {string} [slack_channel_name_override]
 * @property {string} [slack_channel_url]
 * @property {string} slack_team_id
 * @property {string} [source_message_channel_id]
 * @property {string} [source_message_timestamp]
 * @property {string} status
 * @property {string} [summary]
 * @property {Array} team_ids
 * @property {Array} [timestamps]
 * @property {string} updated_at
 * @property {string} visibility
 * @property {number} [workload_minutes_late]
 * @property {number} [workload_minutes_sleeping]
 * @property {number} [workload_minutes_total]
 * @property {number} [workload_minutes_working]
 */

/**
 * @typedef {Object} IncidentActivityLogEntry
 * @property {Object} [content]
 * @property {string} created_at
 * @property {string} id
 * @property {string} incident_id
 * @property {string} occurred_at
 * @property {string} title
 * @property {string} type
 */

/**
 * @typedef {Object} IncidentActivityLogEntryListMatch
 * @property {string} [after]
 * @property {Array} [id]
 * @property {string} incident_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentAttachment
 * @property {string} id
 * @property {string} incident_id
 * @property {Object} resource
 */

/**
 * @typedef {Object} IncidentAttachmentListMatch
 * @property {string} [external_id]
 * @property {string} [incident_id]
 * @property {string} [resource_type]
 */

/**
 * @typedef {Object} IncidentAttachmentCreateData
 * @property {string} id
 * @property {string} incident_id
 * @property {Object} resource
 */

/**
 * @typedef {Object} IncidentAttachmentRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentForm
 * @property {string} created_at
 * @property {Array} expressions
 * @property {string} form_type
 * @property {string} id
 * @property {string} [incident_type_id]
 * @property {Array} [lifecycle_elements]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentFormLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentFormListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentFormCreateData
 * @property {string} created_at
 * @property {Array} expressions
 * @property {string} form_type
 * @property {string} id
 * @property {string} [incident_type_id]
 * @property {Array} [lifecycle_elements]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentFormUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {Array} [expressions]
 * @property {string} [form_type]
 * @property {string} [incident_type_id]
 * @property {Array} [lifecycle_elements]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentFormRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentMembership
 * @property {string} incident_id
 * @property {string} user_id
 */

/**
 * @typedef {Object} IncidentMembershipCreateData
 * @property {string} incident_id
 * @property {string} user_id
 */

/**
 * @typedef {Object} IncidentParticipant
 * @property {Array} active
 * @property {Array} passive
 */

/**
 * @typedef {Object} IncidentParticipantLoadMatch
 * @property {string} incident_id
 */

/**
 * @typedef {Object} IncidentParticipantWorkload
 * @property {string} [archived_at]
 * @property {string} [participant_type]
 * @property {Object} user
 * @property {Object} workload
 */

/**
 * @typedef {Object} IncidentParticipantWorkloadListMatch
 * @property {string} incident_id
 */

/**
 * @typedef {Object} IncidentRelationship
 * @property {string} id
 * @property {Object} incident
 */

/**
 * @typedef {Object} IncidentRelationshipListMatch
 * @property {string} [after]
 * @property {string} incident_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentRole
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} instructions
 * @property {string} name
 * @property {boolean} [required]
 * @property {string} role_type
 * @property {string} shortform
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentRoleLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentRoleListMatch
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [instructions]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [role_type]
 * @property {string} [shortform]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentRoleCreateData
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} instructions
 * @property {string} name
 * @property {boolean} [required]
 * @property {string} role_type
 * @property {string} shortform
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentRoleUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [instructions]
 * @property {string} [name]
 * @property {boolean} [required]
 * @property {string} [role_type]
 * @property {string} [shortform]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentRoleRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentStatus
 * @property {string} category
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {number} rank
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentStatusLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentStatusListMatch
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentStatusCreateData
 * @property {string} category
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {number} rank
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentStatusUpdateData
 * @property {string} id
 * @property {string} [category]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentStatusRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentTeamMembership
 * @property {string} incident_id
 * @property {string} team_id
 */

/**
 * @typedef {Object} IncidentTeamMembershipCreateData
 * @property {string} incident_id
 * @property {string} team_id
 */

/**
 * @typedef {Object} IncidentTeamMembershipsV1
 * @property {string} incident_id
 * @property {string} team_id
 */

/**
 * @typedef {Object} IncidentTeamMembershipsV1CreateData
 * @property {string} incident_id
 * @property {string} team_id
 */

/**
 * @typedef {Object} IncidentTemplate
 * @property {string} created_at
 * @property {Array} [expressions]
 * @property {string} id
 * @property {string} name
 * @property {Object} template
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentTemplateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentTemplateListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentTemplateCreateData
 * @property {string} created_at
 * @property {Array} [expressions]
 * @property {string} id
 * @property {string} name
 * @property {Object} template
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentTemplateUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {Array} [expressions]
 * @property {string} [name]
 * @property {Object} [template]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentTemplateRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentTemplatesValidateResultV1
 * @property {Array} [expressions]
 * @property {string} name
 * @property {Object} template
 * @property {Array} warnings
 */

/**
 * @typedef {Object} IncidentTemplatesValidateResultV1CreateData
 * @property {Array} [expressions]
 * @property {string} name
 * @property {Object} template
 * @property {Array} warnings
 */

/**
 * @typedef {Object} IncidentTimelineItem
 * @property {string} [activity_log_id]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_id
 * @property {string} timestamp
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentTimelineItemListMatch
 * @property {string} [after]
 * @property {string} incident_id
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentTimelineItemCreateData
 * @property {string} [activity_log_id]
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_id
 * @property {string} timestamp
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentTimelineItemUpdateData
 * @property {string} id
 * @property {string} [activity_log_id]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {string} [idempotency_key]
 * @property {string} [incident_id]
 * @property {string} [timestamp]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentTimestamp
 * @property {string} id
 * @property {string} name
 * @property {number} rank
 */

/**
 * @typedef {Object} IncidentTimestampLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentTimestampListMatch
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [rank]
 */

/**
 * @typedef {Object} IncidentType
 * @property {string} create_in_triage
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {boolean} is_default
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {boolean} private_incidents_only
 * @property {string} updated_at
 */

/**
 * @typedef {Object} IncidentTypeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} IncidentTypeListMatch
 * @property {string} [create_in_triage]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {boolean} [is_default]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {boolean} [private_incidents_only]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentUpdate
 * @property {string} created_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_id
 * @property {string} [merged_into_incident_id]
 * @property {string} [message]
 * @property {Object} new_incident_status
 * @property {Object} new_severity
 * @property {string} [to_incident_status_id]
 * @property {string} [to_severity_id]
 * @property {Object} updater
 */

/**
 * @typedef {Object} IncidentUpdateListMatch
 * @property {string} [after]
 * @property {string} [incident_id]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} IncidentUpdateCreateData
 * @property {string} created_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_id
 * @property {string} [merged_into_incident_id]
 * @property {string} [message]
 * @property {Object} new_incident_status
 * @property {Object} new_severity
 * @property {string} [to_incident_status_id]
 * @property {string} [to_severity_id]
 * @property {Object} updater
 */

/**
 * @typedef {Object} IpAllowlist
 * @property {Array} allowlist
 * @property {boolean} enabled
 * @property {string} [updated_at]
 * @property {number} version
 */

/**
 * @typedef {Object} IpAllowlistLoadMatch
 * @property {Array} [allowlist]
 * @property {boolean} [enabled]
 * @property {string} [updated_at]
 * @property {number} [version]
 */

/**
 * @typedef {Object} IpAllowlistUpdateData
 * @property {Array} [allowlist]
 * @property {boolean} [enabled]
 * @property {string} [updated_at]
 * @property {number} [version]
 */

/**
 * @typedef {Object} IpRange
 * @property {string} cidr
 * @property {string} description
 */

/**
 * @typedef {Object} IpRangeListMatch
 * @property {string} [cidr]
 * @property {string} [description]
 */

/**
 * @typedef {Object} MaintenanceWindow
 * @property {Array} alert_condition_groups
 * @property {string} [archived_at]
 * @property {string} created_at
 * @property {string} end_at
 * @property {Array} [escalation_targets]
 * @property {string} id
 * @property {string} [incident_id]
 * @property {Object} lead
 * @property {string} name
 * @property {string} [notification_message]
 * @property {Array} [notify_channels]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {Array} [owning_team_ids]
 * @property {boolean} reroute_on_end
 * @property {boolean} resolve_on_end
 * @property {boolean} show_in_sidebar
 * @property {string} start_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} MaintenanceWindowLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} MaintenanceWindowListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {string} [status]
 */

/**
 * @typedef {Object} MaintenanceWindowCreateData
 * @property {Array} alert_condition_groups
 * @property {string} [archived_at]
 * @property {string} created_at
 * @property {string} end_at
 * @property {Array} [escalation_targets]
 * @property {string} id
 * @property {string} [incident_id]
 * @property {Object} lead
 * @property {string} name
 * @property {string} [notification_message]
 * @property {Array} [notify_channels]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {Array} [owning_team_ids]
 * @property {boolean} reroute_on_end
 * @property {boolean} resolve_on_end
 * @property {boolean} show_in_sidebar
 * @property {string} start_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} MaintenanceWindowUpdateData
 * @property {string} id
 * @property {Array} [alert_condition_groups]
 * @property {string} [archived_at]
 * @property {string} [created_at]
 * @property {string} [end_at]
 * @property {Array} [escalation_targets]
 * @property {string} [incident_id]
 * @property {Object} [lead]
 * @property {string} [name]
 * @property {string} [notification_message]
 * @property {Array} [notify_channels]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {Array} [owning_team_ids]
 * @property {boolean} [reroute_on_end]
 * @property {boolean} [resolve_on_end]
 * @property {boolean} [show_in_sidebar]
 * @property {string} [start_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} MaintenanceWindowRemoveMatch
 * @property {string} id
 * @property {boolean} [force]
 */

/**
 * @typedef {Object} OnCallNotificationMethodPublicV2
 * @property {string} address
 * @property {string} id
 * @property {boolean} is_usable
 * @property {string} method_type
 * @property {Object} phone_details
 */

/**
 * @typedef {Object} OnCallNotificationMethodPublicV2ListMatch
 * @property {string} user_id
 */

/**
 * @typedef {Object} OnCallNotificationRulePublicV2
 * @property {Object} app
 * @property {number} [delay_seconds]
 * @property {string} id
 * @property {Object} method_target
 * @property {string} method_type
 * @property {Object} phone
 * @property {string} rule_type
 */

/**
 * @typedef {Object} OnCallNotificationRulePublicV2ListMatch
 * @property {string} user_id
 */

/**
 * @typedef {Object} PayConfig
 * @property {number} base_rate_cents
 * @property {string} created_at
 * @property {string} currency
 * @property {string} id
 * @property {string} name
 * @property {Array} one_off_rules
 * @property {string} [published_at]
 * @property {string} rate_time_unit
 * @property {string} timezone
 * @property {string} updated_at
 * @property {Array} weekly_rules
 */

/**
 * @typedef {Object} PayConfigLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PayConfigListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} PayConfigCreateData
 * @property {number} base_rate_cents
 * @property {string} created_at
 * @property {string} currency
 * @property {string} id
 * @property {string} name
 * @property {Array} one_off_rules
 * @property {string} [published_at]
 * @property {string} rate_time_unit
 * @property {string} timezone
 * @property {string} updated_at
 * @property {Array} weekly_rules
 */

/**
 * @typedef {Object} PayConfigUpdateData
 * @property {string} id
 * @property {number} [base_rate_cents]
 * @property {string} [created_at]
 * @property {string} [currency]
 * @property {string} [name]
 * @property {Array} [one_off_rules]
 * @property {string} [published_at]
 * @property {string} [rate_time_unit]
 * @property {string} [timezone]
 * @property {string} [updated_at]
 * @property {Array} [weekly_rules]
 */

/**
 * @typedef {Object} PayConfigRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PayConfigsCreateOneOffRuleResultV2
 * @property {string} end_at
 * @property {string} name
 * @property {number} rate_cents
 * @property {string} start_at
 */

/**
 * @typedef {Object} PayConfigsCreateOneOffRuleResultV2CreateData
 * @property {string} pay_config_id
 * @property {string} end_at
 * @property {string} name
 * @property {number} rate_cents
 * @property {string} start_at
 */

/**
 * @typedef {Object} PayConfigsCreateWeeklyRuleResultV2
 * @property {string} end_time
 * @property {number} rate_cents
 * @property {string} start_time
 * @property {Array} weekdays
 */

/**
 * @typedef {Object} PayConfigsCreateWeeklyRuleResultV2CreateData
 * @property {string} pay_config_id
 * @property {string} end_time
 * @property {number} rate_cents
 * @property {string} start_time
 * @property {Array} weekdays
 */

/**
 * @typedef {Object} PayConfigsListOneOffRulesResultV2
 * @property {string} end_at
 * @property {string} id
 * @property {string} name
 * @property {number} rate_cents
 * @property {string} start_at
 */

/**
 * @typedef {Object} PayConfigsListOneOffRulesResultV2ListMatch
 * @property {string} pay_config_id
 */

/**
 * @typedef {Object} PayConfigsListWeeklyRulesResultV2
 * @property {string} end_time
 * @property {string} id
 * @property {number} rate_cents
 * @property {string} start_time
 * @property {Array} weekdays
 */

/**
 * @typedef {Object} PayConfigsListWeeklyRulesResultV2ListMatch
 * @property {string} pay_config_id
 */

/**
 * @typedef {Object} PayConfigsShowOneOffRuleResultV2
 * @property {string} end_at
 * @property {string} id
 * @property {string} name
 * @property {number} rate_cents
 * @property {string} start_at
 */

/**
 * @typedef {Object} PayConfigsShowOneOffRuleResultV2LoadMatch
 * @property {string} id
 * @property {string} pay_config_id
 */

/**
 * @typedef {Object} PayConfigsShowWeeklyRuleResultV2
 * @property {string} end_time
 * @property {string} id
 * @property {number} rate_cents
 * @property {string} start_time
 * @property {Array} weekdays
 */

/**
 * @typedef {Object} PayConfigsShowWeeklyRuleResultV2LoadMatch
 * @property {string} id
 * @property {string} pay_config_id
 */

/**
 * @typedef {Object} PayConfigsUpdateOneOffRuleResultV2
 * @property {string} end_at
 * @property {string} id
 * @property {string} name
 * @property {number} rate_cents
 * @property {string} start_at
 */

/**
 * @typedef {Object} PayConfigsUpdateOneOffRuleResultV2UpdateData
 * @property {string} id
 * @property {string} pay_config_id
 * @property {string} [end_at]
 * @property {string} [name]
 * @property {number} [rate_cents]
 * @property {string} [start_at]
 */

/**
 * @typedef {Object} PayConfigsUpdateWeeklyRuleResultV2
 * @property {string} end_time
 * @property {string} id
 * @property {number} rate_cents
 * @property {string} start_time
 * @property {Array} weekdays
 */

/**
 * @typedef {Object} PayConfigsUpdateWeeklyRuleResultV2UpdateData
 * @property {string} id
 * @property {string} pay_config_id
 * @property {string} [end_time]
 * @property {number} [rate_cents]
 * @property {string} [start_time]
 * @property {Array} [weekdays]
 */

/**
 * @typedef {Object} PayConfigsV2
 * @property {string} [id]
 */

/**
 * @typedef {Object} PayConfigsV2RemoveMatch
 * @property {string} id
 * @property {string} pay_config_id
 */

/**
 * @typedef {Object} PayReport
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {Object} pay_config_expression
 * @property {string} [pay_config_id]
 * @property {string} [published_at]
 * @property {Array} [rotation_filters]
 * @property {Array} schedule_ids
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PayReportListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} PayReportCreateData
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {Object} pay_config_expression
 * @property {string} [pay_config_id]
 * @property {string} [published_at]
 * @property {Array} [rotation_filters]
 * @property {Array} schedule_ids
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PayReportsPublishResultV2
 * @property {Array} cc_emails
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {string} [published_at]
 * @property {Array} schedule_ids
 * @property {string} send_user_breakdowns
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportsPublishResultV2CreateData
 * @property {string} pay_report_id
 * @property {Array} cc_emails
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {string} [published_at]
 * @property {Array} schedule_ids
 * @property {string} send_user_breakdowns
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportsUnpublishResultV2
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {string} [published_at]
 * @property {Array} schedule_ids
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} unpublish_reason
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportsUnpublishResultV2CreateData
 * @property {string} pay_report_id
 * @property {string} created_at
 * @property {Object} [creator]
 * @property {string} end_date
 * @property {string} [error_code]
 * @property {string} [error_message]
 * @property {string} id
 * @property {string} name
 * @property {string} overlapping_shifts
 * @property {string} [published_at]
 * @property {Array} schedule_ids
 * @property {string} start_date
 * @property {string} status
 * @property {number} [total_duration_seconds]
 * @property {Object} [total_pay_by_currency]
 * @property {string} unpaid_shifts
 * @property {string} unpublish_reason
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PayReportsV2
 */

/**
 * @typedef {Object} PayReportsV2LoadMatch
 * @property {string} pay_report_id
 */

/**
 * @typedef {Object} PoliciesV2
 * @property {string} [id]
 */

/**
 * @typedef {Object} PoliciesV2RemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Policy
 * @property {Object} assignment_rules
 * @property {Array} conditions
 * @property {string} created_at
 * @property {Object} debrief
 * @property {string} [description]
 * @property {Array} [expressions]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} name
 * @property {Object} [on_call_readiness]
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {Object} schedule
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PolicyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PolicyListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {string} [policy_type]
 */

/**
 * @typedef {Object} PolicyCreateData
 * @property {Object} assignment_rules
 * @property {Array} conditions
 * @property {string} created_at
 * @property {Object} debrief
 * @property {string} [description]
 * @property {Array} [expressions]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} name
 * @property {Object} [on_call_readiness]
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {Object} schedule
 * @property {string} status
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PolicyUpdateData
 * @property {string} id
 * @property {Object} [assignment_rules]
 * @property {Array} [conditions]
 * @property {string} [created_at]
 * @property {Object} [debrief]
 * @property {string} [description]
 * @property {Array} [expressions]
 * @property {Object} [follow_up]
 * @property {string} [name]
 * @property {Object} [on_call_readiness]
 * @property {string} [policy_type]
 * @property {Object} [post_mortem]
 * @property {Object} [schedule]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PolicyFinding
 * @property {string} created_at
 * @property {number} [days]
 * @property {Object} debrief
 * @property {Object} dismissal
 * @property {string} [due_at]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} last_checked_at
 * @property {Object} on_call_readiness
 * @property {string} policy_id
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {Array} responsible_users
 * @property {Object} schedule
 * @property {Object} shift_conflict
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} vacation_conflict
 */

/**
 * @typedef {Object} PolicyFindingLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PolicyFindingListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {string} [policy_id]
 */

/**
 * @typedef {Object} PolicyFindingsDismissResultV2
 * @property {string} created_at
 * @property {number} [days]
 * @property {Object} debrief
 * @property {Object} dismissal
 * @property {string} [due_at]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} last_checked_at
 * @property {Object} on_call_readiness
 * @property {string} policy_id
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {string} reason
 * @property {Array} responsible_users
 * @property {Object} schedule
 * @property {Object} shift_conflict
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} vacation_conflict
 */

/**
 * @typedef {Object} PolicyFindingsDismissResultV2CreateData
 * @property {string} policy_finding_id
 * @property {string} created_at
 * @property {number} [days]
 * @property {Object} debrief
 * @property {Object} dismissal
 * @property {string} [due_at]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} last_checked_at
 * @property {Object} on_call_readiness
 * @property {string} policy_id
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {string} reason
 * @property {Array} responsible_users
 * @property {Object} schedule
 * @property {Object} shift_conflict
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} vacation_conflict
 */

/**
 * @typedef {Object} PolicyFindingsRestoreResultV2
 * @property {string} created_at
 * @property {number} [days]
 * @property {Object} debrief
 * @property {Object} dismissal
 * @property {string} [due_at]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} last_checked_at
 * @property {Object} on_call_readiness
 * @property {string} policy_id
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {Array} responsible_users
 * @property {Object} schedule
 * @property {Object} shift_conflict
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} vacation_conflict
 */

/**
 * @typedef {Object} PolicyFindingsRestoreResultV2CreateData
 * @property {string} policy_finding_id
 * @property {string} created_at
 * @property {number} [days]
 * @property {Object} debrief
 * @property {Object} dismissal
 * @property {string} [due_at]
 * @property {Object} follow_up
 * @property {string} id
 * @property {string} last_checked_at
 * @property {Object} on_call_readiness
 * @property {string} policy_id
 * @property {string} policy_type
 * @property {Object} post_mortem
 * @property {Array} responsible_users
 * @property {Object} schedule
 * @property {Object} shift_conflict
 * @property {string} state
 * @property {string} updated_at
 * @property {Object} vacation_conflict
 */

/**
 * @typedef {Object} PostmortemDocument
 * @property {string} created_at
 * @property {string} document_url
 * @property {Array} editors
 * @property {Array} exported_urls
 * @property {string} id
 * @property {string} incident_id
 * @property {string} status
 * @property {string} title
 * @property {string} type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} PostmortemDocumentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PostmortemDocumentListMatch
 * @property {string} [after]
 * @property {string} [incident_id]
 * @property {number} [page_size]
 * @property {string} [sort_by]
 */

/**
 * @typedef {Object} PostmortemDocumentUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [document_url]
 * @property {Array} [editors]
 * @property {Array} [exported_urls]
 * @property {string} [incident_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Schedule
 * @property {Object} annotations
 * @property {Object} config
 * @property {string} created_at
 * @property {Array} [current_shifts]
 * @property {Object} holidays_public_config
 * @property {string} id
 * @property {string} name
 * @property {Array} [next_shifts]
 * @property {string} permalink
 * @property {Array} team_ids
 * @property {string} timezone
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} ScheduleCreateData
 * @property {Object} annotations
 * @property {Object} config
 * @property {string} created_at
 * @property {Array} [current_shifts]
 * @property {Object} holidays_public_config
 * @property {string} id
 * @property {string} name
 * @property {Array} [next_shifts]
 * @property {string} permalink
 * @property {Array} team_ids
 * @property {string} timezone
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleUpdateData
 * @property {string} id
 * @property {Object} [annotations]
 * @property {Object} [config]
 * @property {string} [created_at]
 * @property {Array} [current_shifts]
 * @property {Object} [holidays_public_config]
 * @property {string} [name]
 * @property {Array} [next_shifts]
 * @property {string} [permalink]
 * @property {Array} [team_ids]
 * @property {string} [timezone]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleEntriesListPayloadV2
 * @property {string} [entry_window_end]
 * @property {string} [entry_window_start]
 * @property {Array} final
 * @property {Array} overrides
 * @property {Object} schedule
 * @property {Array} scheduled
 */

/**
 * @typedef {Object} ScheduleEntriesListPayloadV2CreateData
 * @property {string} schedule_id
 * @property {string} [entry_window_end]
 * @property {string} [entry_window_start]
 * @property {Array} final
 * @property {Array} overrides
 * @property {Object} schedule
 * @property {Array} scheduled
 */

/**
 * @typedef {Object} ScheduleEntry
 * @property {Object} pagination_meta
 * @property {Object} schedule_entries
 */

/**
 * @typedef {Object} ScheduleEntryLoadMatch
 * @property {string} [entry_window_end]
 * @property {string} [entry_window_start]
 * @property {string} schedule_id
 */

/**
 * @typedef {Object} ScheduleReplica
 * @property {string} created_at
 * @property {string} id
 * @property {string} [last_sync_error]
 * @property {string} [last_synced_at]
 * @property {number} [mirror_window_days]
 * @property {string} replica_fallback_user_id
 * @property {string} replica_provider
 * @property {string} replica_provider_id
 * @property {string} schedule_id
 * @property {Array} sources
 * @property {string} updated_at
 * @property {Array} user_statuses
 */

/**
 * @typedef {Object} ScheduleReplicaLoadMatch
 * @property {string} id
 * @property {string} schedule_id
 */

/**
 * @typedef {Object} ScheduleReplicaListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleReplicaCreateData
 * @property {string} id
 * @property {string} created_at
 * @property {string} [last_sync_error]
 * @property {string} [last_synced_at]
 * @property {number} [mirror_window_days]
 * @property {string} replica_fallback_user_id
 * @property {string} replica_provider
 * @property {string} replica_provider_id
 * @property {string} schedule_id
 * @property {Array} sources
 * @property {string} updated_at
 * @property {Array} user_statuses
 */

/**
 * @typedef {Object} ScheduleSyncRule
 * @property {Object} [annotations]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} permanent_member_user_ids
 * @property {string} [rotation_id]
 * @property {string} schedule_id
 * @property {Object} schedule_sync_target
 * @property {string} schedule_sync_target_id
 * @property {string} sync_type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncRuleLoadMatch
 * @property {string} id
 * @property {string} schedule_id
 */

/**
 * @typedef {Object} ScheduleSyncRuleListMatch
 * @property {string} id
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} ScheduleSyncRuleCreateData
 * @property {string} id
 * @property {Object} [annotations]
 * @property {string} created_at
 * @property {Array} permanent_member_user_ids
 * @property {string} [rotation_id]
 * @property {string} schedule_id
 * @property {Object} schedule_sync_target
 * @property {string} schedule_sync_target_id
 * @property {string} sync_type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncRuleUpdateData
 * @property {string} id
 * @property {string} schedule_id
 * @property {Object} [annotations]
 * @property {string} [created_at]
 * @property {Array} [permanent_member_user_ids]
 * @property {string} [rotation_id]
 * @property {Object} [schedule_sync_target]
 * @property {string} [schedule_sync_target_id]
 * @property {string} [sync_type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleSyncTarget
 * @property {boolean} add_bot_to_group
 * @property {Object} [annotations]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} linked_schedules
 * @property {Object} new_slack_user_group
 * @property {string} slack_team_id
 * @property {string} slack_user_group_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncTargetLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleSyncTargetListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} ScheduleSyncTargetCreateData
 * @property {boolean} add_bot_to_group
 * @property {Object} [annotations]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} linked_schedules
 * @property {Object} new_slack_user_group
 * @property {string} slack_team_id
 * @property {string} slack_user_group_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncTargetUpdateData
 * @property {string} id
 * @property {boolean} [add_bot_to_group]
 * @property {Object} [annotations]
 * @property {string} [created_at]
 * @property {Array} [linked_schedules]
 * @property {Object} [new_slack_user_group]
 * @property {string} [slack_team_id]
 * @property {string} [slack_user_group_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleSyncTargetRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SchedulesShowOverrideResultV2
 * @property {string} created_at
 * @property {string} end_at
 * @property {string} id
 * @property {string} layer_id
 * @property {string} rotation_id
 * @property {string} schedule_id
 * @property {string} start_at
 * @property {string} updated_at
 * @property {Object} user
 */

/**
 * @typedef {Object} SchedulesShowOverrideResultV2LoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SchedulesShowOverrideResultV2ListMatch
 * @property {string} [after]
 * @property {string} [layer_id]
 * @property {number} [page_size]
 * @property {string} [rotation_id]
 * @property {string} schedule_id
 */

/**
 * @typedef {Object} SchedulesShowOverrideResultV2CreateData
 * @property {string} created_at
 * @property {string} end_at
 * @property {string} id
 * @property {string} layer_id
 * @property {string} rotation_id
 * @property {string} schedule_id
 * @property {string} start_at
 * @property {string} updated_at
 * @property {Object} user
 */

/**
 * @typedef {Object} SchedulesUpdateOverrideResultV2
 * @property {string} created_at
 * @property {string} end_at
 * @property {string} id
 * @property {string} layer_id
 * @property {string} rotation_id
 * @property {string} schedule_id
 * @property {string} start_at
 * @property {string} updated_at
 * @property {Object} user
 */

/**
 * @typedef {Object} SchedulesUpdateOverrideResultV2UpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [end_at]
 * @property {string} [layer_id]
 * @property {string} [rotation_id]
 * @property {string} [schedule_id]
 * @property {string} [start_at]
 * @property {string} [updated_at]
 * @property {Object} [user]
 */

/**
 * @typedef {Object} Secret
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {string} [last_four_chars]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {Object} secret
 * @property {string} updated_at
 * @property {string} value
 * @property {number} version
 * @property {Array} versions
 */

/**
 * @typedef {Object} SecretLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SecretListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 * @property {Array} [team_id]
 */

/**
 * @typedef {Object} SecretCreateData
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {string} [last_four_chars]
 * @property {string} name
 * @property {Array} [owning_team_ids]
 * @property {Object} secret
 * @property {string} updated_at
 * @property {string} value
 * @property {number} version
 * @property {Array} versions
 */

/**
 * @typedef {Object} SecretUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [last_four_chars]
 * @property {string} [name]
 * @property {Array} [owning_team_ids]
 * @property {Object} [secret]
 * @property {string} [updated_at]
 * @property {string} [value]
 * @property {number} [version]
 * @property {Array} [versions]
 */

/**
 * @typedef {Object} SecretRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Severity
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {number} rank
 * @property {string} updated_at
 */

/**
 * @typedef {Object} SeverityLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SeverityListMatch
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} SeverityCreateData
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} name
 * @property {number} rank
 * @property {string} updated_at
 */

/**
 * @typedef {Object} SeverityUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} StatusPage
 * @property {string} [description]
 * @property {string} id
 * @property {string} name
 * @property {string} [public_url]
 */

/**
 * @typedef {Object} StatusPageLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} StatusPageComponent
 * @property {string} [description]
 * @property {string} id
 * @property {Object} management_meta
 * @property {string} name
 */

/**
 * @typedef {Object} StatusPageComponentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageComponentListMatch
 * @property {string} [description]
 * @property {string} [id]
 * @property {Object} [management_meta]
 * @property {string} [name]
 */

/**
 * @typedef {Object} StatusPageComponentCreateData
 * @property {string} [description]
 * @property {string} id
 * @property {Object} management_meta
 * @property {string} name
 */

/**
 * @typedef {Object} StatusPageComponentUpdateData
 * @property {string} id
 * @property {string} [description]
 * @property {Object} [management_meta]
 * @property {string} [name]
 */

/**
 * @typedef {Object} StatusPageComponentRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageComponentAvailabilityV2
 * @property {string} [availability_percent]
 * @property {string} component_id
 * @property {string} data_available_since
 * @property {string} end_at
 * @property {string} start_at
 * @property {string} status_page_id
 */

/**
 * @typedef {Object} StatusPageComponentAvailabilityV2LoadMatch
 * @property {string} component_id
 * @property {string} status_page_id
 * @property {string} end_at
 * @property {string} start_at
 */

/**
 * @typedef {Object} StatusPageIncident
 * @property {Array} component_impacts
 * @property {Array} [component_statuses]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscribers
 * @property {string} published_at
 * @property {string} status_page_id
 * @property {Array} updates
 */

/**
 * @typedef {Object} StatusPageIncidentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageIncidentListMatch
 * @property {string} [after]
 * @property {string} [component_id]
 * @property {string} [end_at]
 * @property {string} [group_id]
 * @property {number} [page_size]
 * @property {string} [start_at]
 * @property {string} status_page_id
 * @property {string} [sub_page_id]
 */

/**
 * @typedef {Object} StatusPageIncidentCreateData
 * @property {Array} component_impacts
 * @property {Array} [component_statuses]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscribers
 * @property {string} published_at
 * @property {string} status_page_id
 * @property {Array} updates
 */

/**
 * @typedef {Object} StatusPageIncidentUpdateData
 * @property {string} id
 * @property {Array} [component_impacts]
 * @property {Array} [component_statuses]
 * @property {string} [idempotency_key]
 * @property {string} [incident_status]
 * @property {string} [message]
 * @property {string} [name]
 * @property {boolean} [notify_subscribers]
 * @property {string} [published_at]
 * @property {string} [status_page_id]
 * @property {Array} [updates]
 */

/**
 * @typedef {Object} StatusPageIncidentUpdate
 * @property {Array} [component_statuses]
 * @property {string} [incident_status]
 * @property {string} message
 * @property {boolean} notify_subscribers
 * @property {string} status_page_incident_id
 */

/**
 * @typedef {Object} StatusPageIncidentUpdateCreateData
 * @property {Array} [component_statuses]
 * @property {string} [incident_status]
 * @property {string} message
 * @property {boolean} notify_subscribers
 * @property {string} status_page_incident_id
 */

/**
 * @typedef {Object} StatusPageLinkedResponseIncidentV1
 * @property {string} id
 * @property {string} linked_at
 */

/**
 * @typedef {Object} StatusPageLinkedResponseIncidentV1ListMatch
 * @property {string} incident_id
 * @property {string} status_page_id
 */

/**
 * @typedef {Object} StatusPageMaintenance
 * @property {Array} affected_component_ids
 * @property {boolean} automate_maintenance_status
 * @property {Array} component_maintenance_periods
 * @property {string} end_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} maintenance_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscribers
 * @property {string} published_at
 * @property {string} start_at
 * @property {string} status_page_id
 * @property {Array} updates
 */

/**
 * @typedef {Object} StatusPageMaintenanceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageMaintenanceListMatch
 * @property {string} [after]
 * @property {string} [component_id]
 * @property {string} [end_at]
 * @property {string} [group_id]
 * @property {number} [page_size]
 * @property {string} [start_at]
 * @property {string} status_page_id
 * @property {string} [sub_page_id]
 */

/**
 * @typedef {Object} StatusPageMaintenanceCreateData
 * @property {Array} affected_component_ids
 * @property {boolean} automate_maintenance_status
 * @property {Array} component_maintenance_periods
 * @property {string} end_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} maintenance_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscribers
 * @property {string} published_at
 * @property {string} start_at
 * @property {string} status_page_id
 * @property {Array} updates
 */

/**
 * @typedef {Object} StatusPageMaintenanceUpdateData
 * @property {string} id
 * @property {Array} [affected_component_ids]
 * @property {boolean} [automate_maintenance_status]
 * @property {Array} [component_maintenance_periods]
 * @property {string} [end_at]
 * @property {string} [idempotency_key]
 * @property {string} [maintenance_status]
 * @property {string} [message]
 * @property {string} [name]
 * @property {boolean} [notify_subscribers]
 * @property {string} [published_at]
 * @property {string} [start_at]
 * @property {string} [status_page_id]
 * @property {Array} [updates]
 */

/**
 * @typedef {Object} StatusPageMaintenanceUpdate
 * @property {Array} [component_statuses]
 * @property {string} [maintenance_status]
 * @property {string} message
 * @property {boolean} notify_subscribers
 * @property {string} status_page_maintenance_id
 */

/**
 * @typedef {Object} StatusPageMaintenanceUpdateCreateData
 * @property {Array} [component_statuses]
 * @property {string} [maintenance_status]
 * @property {string} message
 * @property {boolean} notify_subscribers
 * @property {string} status_page_maintenance_id
 */

/**
 * @typedef {Object} StatusPageStructure
 * @property {Object} current_structure
 * @property {string} display_uptime_mode
 * @property {string} [id]
 * @property {Object} management_meta
 */

/**
 * @typedef {Object} StatusPageStructureLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPagesV2
 */

/**
 * @typedef {Object} StatusPagesV2RemoveMatch
 * @property {string} status_page_maintenance_id
 */

/**
 * @typedef {Object} Team
 * @property {Object} catalog_entry
 * @property {string} id
 * @property {Array} members
 * @property {string} name
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {string} [after]
 * @property {number} [page_size]
 */

/**
 * @typedef {Object} TelemetryDataSourceV2
 * @property {string} created_at
 * @property {Object} [datadog_config]
 * @property {boolean} enabled
 * @property {Object} [grafana_config]
 * @property {string} id
 * @property {string} name
 * @property {string} provider
 * @property {string} source_type
 * @property {string} updated_at
 * @property {string} [version]
 */

/**
 * @typedef {Object} TelemetryDataSourceV2UpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {Object} [datadog_config]
 * @property {boolean} [enabled]
 * @property {Object} [grafana_config]
 * @property {string} [name]
 * @property {string} [provider]
 * @property {string} [source_type]
 * @property {string} [updated_at]
 * @property {string} [version]
 */

/**
 * @typedef {Object} User
 * @property {Object} base_role
 * @property {Array} custom_roles
 * @property {string} [email]
 * @property {string} id
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} role
 * @property {Object} seats
 * @property {string} [slack_user_id]
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} UserListMatch
 * @property {string} [after]
 * @property {string} [email]
 * @property {boolean} [include_inactive]
 * @property {number} [page_size]
 * @property {string} [slack_user_id]
 */

/**
 * @typedef {Object} UserCreateData
 * @property {string} id
 * @property {Object} base_role
 * @property {Array} custom_roles
 * @property {string} [email]
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} role
 * @property {Object} seats
 * @property {string} [slack_user_id]
 */

/**
 * @typedef {Object} Workflow
 * @property {Object} [annotations]
 * @property {string} [auto_run_mode]
 * @property {Array} condition_groups
 * @property {boolean} continue_on_step_error
 * @property {Object} delay
 * @property {Array} expressions
 * @property {string} [folder]
 * @property {Array} [form_fields]
 * @property {string} id
 * @property {boolean} [include_private_escalations]
 * @property {boolean} [include_private_incidents]
 * @property {Object} management_meta
 * @property {string} name
 * @property {Array} once_for
 * @property {Array} [owning_team_ids]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {Array} runs_on_incident_modes
 * @property {string} runs_on_incidents
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrades]
 * @property {string} [state]
 * @property {Array} steps
 * @property {string} trigger
 * @property {number} version
 * @property {Object} workflow
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {string} id
 * @property {boolean} [skip_step_upgrade]
 */

/**
 * @typedef {Object} WorkflowListMatch
 * @property {Object} [annotations]
 * @property {string} [auto_run_mode]
 * @property {Array} [condition_groups]
 * @property {boolean} [continue_on_step_error]
 * @property {Object} [delay]
 * @property {Array} [expressions]
 * @property {string} [folder]
 * @property {Array} [form_fields]
 * @property {string} [id]
 * @property {boolean} [include_private_escalations]
 * @property {boolean} [include_private_incidents]
 * @property {Object} [management_meta]
 * @property {string} [name]
 * @property {Array} [once_for]
 * @property {Array} [owning_team_ids]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {Array} [runs_on_incident_modes]
 * @property {string} [runs_on_incidents]
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrades]
 * @property {string} [state]
 * @property {Array} [steps]
 * @property {string} [trigger]
 * @property {number} [version]
 * @property {Object} [workflow]
 */

/**
 * @typedef {Object} WorkflowCreateData
 * @property {Object} [annotations]
 * @property {string} [auto_run_mode]
 * @property {Array} condition_groups
 * @property {boolean} continue_on_step_error
 * @property {Object} delay
 * @property {Array} expressions
 * @property {string} [folder]
 * @property {Array} [form_fields]
 * @property {string} id
 * @property {boolean} [include_private_escalations]
 * @property {boolean} [include_private_incidents]
 * @property {Object} management_meta
 * @property {string} name
 * @property {Array} once_for
 * @property {Array} [owning_team_ids]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {Array} runs_on_incident_modes
 * @property {string} runs_on_incidents
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrades]
 * @property {string} [state]
 * @property {Array} steps
 * @property {string} trigger
 * @property {number} version
 * @property {Object} workflow
 */

/**
 * @typedef {Object} WorkflowUpdateData
 * @property {string} id
 * @property {Object} [annotations]
 * @property {string} [auto_run_mode]
 * @property {Array} [condition_groups]
 * @property {boolean} [continue_on_step_error]
 * @property {Object} [delay]
 * @property {Array} [expressions]
 * @property {string} [folder]
 * @property {Array} [form_fields]
 * @property {boolean} [include_private_escalations]
 * @property {boolean} [include_private_incidents]
 * @property {Object} [management_meta]
 * @property {string} [name]
 * @property {Array} [once_for]
 * @property {Array} [owning_team_ids]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {Array} [runs_on_incident_modes]
 * @property {string} [runs_on_incidents]
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrades]
 * @property {string} [state]
 * @property {Array} [steps]
 * @property {string} [trigger]
 * @property {number} [version]
 * @property {Object} [workflow]
 */

/**
 * @typedef {Object} WorkflowRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WorkflowRun
 * @property {string} [cancelled_at]
 * @property {string} created_at
 * @property {string} [enqueued_at]
 * @property {string} [error]
 * @property {string} id
 * @property {string} [incident_id]
 * @property {string} [incident_reference]
 * @property {Array} progress
 * @property {string} scheduled_at
 * @property {string} updated_at
 * @property {string} workflow_id
 * @property {string} [workflow_name]
 * @property {string} workflow_version_id
 * @property {number} workflow_version_number
 */

/**
 * @typedef {Object} WorkflowRunLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WorkflowRunListMatch
 * @property {string} [after]
 * @property {Object} [created_at]
 * @property {string} [incident_id]
 * @property {number} [page_size]
 * @property {string} [workflow_id]
 */


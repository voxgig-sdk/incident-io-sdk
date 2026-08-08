// Typed models for the IncidentIo SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
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
 * @property {Object} [assignee]
 * @property {string} [assignee_id]
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {boolean} [follow_up]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {string} [status]
 * @property {string} [updated_at]
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
 * @property {Array} [alert_group_id]
 * @property {string} alert_source_id
 * @property {Array} attribute
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} id
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertListMatch
 * @property {Array} [alert_group_id]
 * @property {string} [alert_source_id]
 * @property {Array} [attribute]
 * @property {string} [created_at]
 * @property {string} [deduplication_key]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} AlertCreateData
 * @property {string} id
 * @property {Array} [alert_group_id]
 * @property {string} alert_source_id
 * @property {Array} attribute
 * @property {string} created_at
 * @property {string} deduplication_key
 * @property {string} [description]
 * @property {string} [resolved_at]
 * @property {string} [source_url]
 * @property {string} status
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
 * @property {Array} image
 * @property {string} [last_edited_at]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} AlertNoteLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertNoteListMatch
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {string} [content]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [id]
 * @property {Array} [image]
 * @property {string} [last_edited_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} AlertNoteCreateData
 * @property {string} [alert_group_id]
 * @property {string} [alert_id]
 * @property {string} content
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} id
 * @property {Array} image
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
 * @property {Array} [image]
 * @property {string} [last_edited_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} AlertNoteRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertRoute
 * @property {Array} alert_source
 * @property {Array} channel_config
 * @property {Array} condition_group
 * @property {string} [created_at]
 * @property {boolean} enabled
 * @property {Object} escalation_config
 * @property {Array} expression
 * @property {Object} grouping_config
 * @property {string} id
 * @property {Object} incident_config
 * @property {Object} incident_template
 * @property {boolean} is_private
 * @property {Object} message_config
 * @property {Object} [message_template]
 * @property {string} name
 * @property {Array} [owning_team_id]
 * @property {string} [updated_at]
 * @property {number} version
 */

/**
 * @typedef {Object} AlertRouteLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} AlertRouteListMatch
 * @property {Array} [alert_source]
 * @property {Array} [channel_config]
 * @property {Array} [condition_group]
 * @property {string} [created_at]
 * @property {boolean} [enabled]
 * @property {Object} [escalation_config]
 * @property {Array} [expression]
 * @property {Object} [grouping_config]
 * @property {string} [id]
 * @property {Object} [incident_config]
 * @property {Object} [incident_template]
 * @property {boolean} [is_private]
 * @property {Object} [message_config]
 * @property {Object} [message_template]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
 * @property {string} [updated_at]
 * @property {number} [version]
 */

/**
 * @typedef {Object} AlertRouteCreateData
 * @property {Array} alert_source
 * @property {Array} channel_config
 * @property {Array} condition_group
 * @property {string} [created_at]
 * @property {boolean} enabled
 * @property {Object} escalation_config
 * @property {Array} expression
 * @property {Object} grouping_config
 * @property {string} id
 * @property {Object} incident_config
 * @property {Object} incident_template
 * @property {boolean} is_private
 * @property {Object} message_config
 * @property {Object} [message_template]
 * @property {string} name
 * @property {Array} [owning_team_id]
 * @property {string} [updated_at]
 * @property {number} version
 */

/**
 * @typedef {Object} AlertRouteUpdateData
 * @property {string} id
 * @property {Array} [alert_source]
 * @property {Array} [channel_config]
 * @property {Array} [condition_group]
 * @property {string} [created_at]
 * @property {boolean} [enabled]
 * @property {Object} [escalation_config]
 * @property {Array} [expression]
 * @property {Object} [grouping_config]
 * @property {Object} [incident_config]
 * @property {Object} [incident_template]
 * @property {boolean} [is_private]
 * @property {Object} [message_config]
 * @property {Object} [message_template]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
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
 * @property {boolean} [auto_resolve_incident_alert]
 * @property {number} [auto_resolve_timeout_minute]
 * @property {boolean} [disabled]
 * @property {Object} email_option
 * @property {Object} heartbeat_option
 * @property {Object} http_custom_option
 * @property {string} id
 * @property {Object} jira_option
 * @property {string} name
 * @property {Array} [owning_team_id]
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
 * @property {boolean} [auto_resolve_incident_alert]
 * @property {number} [auto_resolve_timeout_minute]
 * @property {boolean} [disabled]
 * @property {Object} [email_option]
 * @property {Object} [heartbeat_option]
 * @property {Object} [http_custom_option]
 * @property {string} [id]
 * @property {Object} [jira_option]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
 * @property {string} [secret_token]
 * @property {string} [source_type]
 * @property {Object} [template]
 */

/**
 * @typedef {Object} AlertSourceCreateData
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alert]
 * @property {number} [auto_resolve_timeout_minute]
 * @property {boolean} [disabled]
 * @property {Object} email_option
 * @property {Object} heartbeat_option
 * @property {Object} http_custom_option
 * @property {string} id
 * @property {Object} jira_option
 * @property {string} name
 * @property {Array} [owning_team_id]
 * @property {string} [secret_token]
 * @property {string} source_type
 * @property {Object} template
 */

/**
 * @typedef {Object} AlertSourceUpdateData
 * @property {string} id
 * @property {string} [alert_events_url]
 * @property {boolean} [auto_resolve_incident_alert]
 * @property {number} [auto_resolve_timeout_minute]
 * @property {boolean} [disabled]
 * @property {Object} [email_option]
 * @property {Object} [heartbeat_option]
 * @property {Object} [http_custom_option]
 * @property {Object} [jira_option]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
 * @property {string} [secret_token]
 * @property {string} [source_type]
 * @property {Object} [template]
 */

/**
 * @typedef {Object} AlertSourceRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ApiKey
 * @property {string} [comment]
 * @property {string} created_at
 * @property {Object} creator
 * @property {number} grace_period_minute
 * @property {string} id
 * @property {string} [last_used_at]
 * @property {string} name
 * @property {Array} role
 * @property {Array} role_name
 * @property {Array} team_id
 * @property {Array} team_role
 * @property {Array} team_role_name
 * @property {string} token_last_issued_at
 */

/**
 * @typedef {Object} ApiKeyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ApiKeyListMatch
 * @property {string} [comment]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {number} [grace_period_minute]
 * @property {string} [id]
 * @property {string} [last_used_at]
 * @property {string} [name]
 * @property {Array} [role]
 * @property {Array} [role_name]
 * @property {Array} [team_id]
 * @property {Array} [team_role]
 * @property {Array} [team_role_name]
 * @property {string} [token_last_issued_at]
 */

/**
 * @typedef {Object} ApiKeyCreateData
 * @property {string} [comment]
 * @property {string} created_at
 * @property {Object} creator
 * @property {number} grace_period_minute
 * @property {string} id
 * @property {string} [last_used_at]
 * @property {string} name
 * @property {Array} role
 * @property {Array} role_name
 * @property {Array} team_id
 * @property {Array} team_role
 * @property {Array} team_role_name
 * @property {string} token_last_issued_at
 */

/**
 * @typedef {Object} ApiKeyUpdateData
 * @property {string} id
 * @property {string} [comment]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {number} [grace_period_minute]
 * @property {string} [last_used_at]
 * @property {string} [name]
 * @property {Array} [role]
 * @property {Array} [role_name]
 * @property {Array} [team_id]
 * @property {Array} [team_role]
 * @property {Array} [team_role_name]
 * @property {string} [token_last_issued_at]
 */

/**
 * @typedef {Object} ApiKeyRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CatalogEntry
 * @property {Array} [alias]
 * @property {string} [archived_at]
 * @property {Object} attribute_value
 * @property {Object} catalog_entry
 * @property {Object} catalog_type
 * @property {string} catalog_type_id
 * @property {string} created_at
 * @property {string} [external_id]
 * @property {string} id
 * @property {string} name
 * @property {number} [rank]
 * @property {Array} [update_attribute]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CatalogEntryLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CatalogEntryListMatch
 * @property {Array} [alias]
 * @property {string} [archived_at]
 * @property {Object} [attribute_value]
 * @property {Object} [catalog_entry]
 * @property {Object} [catalog_type]
 * @property {string} [catalog_type_id]
 * @property {string} [created_at]
 * @property {string} [external_id]
 * @property {string} [id]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {Array} [update_attribute]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} CatalogEntryCreateData
 * @property {Array} [alias]
 * @property {string} [archived_at]
 * @property {Object} attribute_value
 * @property {Object} catalog_entry
 * @property {Object} catalog_type
 * @property {string} catalog_type_id
 * @property {string} created_at
 * @property {string} [external_id]
 * @property {string} id
 * @property {string} name
 * @property {number} [rank]
 * @property {Array} [update_attribute]
 * @property {string} updated_at
 */

/**
 * @typedef {Object} CatalogEntryUpdateData
 * @property {string} id
 * @property {Array} [alias]
 * @property {string} [archived_at]
 * @property {Object} [attribute_value]
 * @property {Object} [catalog_entry]
 * @property {Object} [catalog_type]
 * @property {string} [catalog_type_id]
 * @property {string} [created_at]
 * @property {string} [external_id]
 * @property {string} [name]
 * @property {number} [rank]
 * @property {Array} [update_attribute]
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
 * @property {Object} annotation
 * @property {Array} category
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
 * @property {Array} [owning_team_id]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
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
 * @property {Object} [annotation]
 * @property {Array} [category]
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
 * @property {Array} [owning_team_id]
 * @property {boolean} [ranked]
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
 * @property {Object} [schema]
 * @property {string} [semantic_type]
 * @property {string} [source_repo_url]
 * @property {string} [type_name]
 * @property {string} [updated_at]
 * @property {boolean} [use_name_as_identifier]
 */

/**
 * @typedef {Object} CatalogTypeCreateData
 * @property {Object} annotation
 * @property {Array} category
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
 * @property {Array} [owning_team_id]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
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
 * @property {Object} [annotation]
 * @property {Array} [category]
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
 * @property {Array} [owning_team_id]
 * @property {boolean} [ranked]
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
 * @property {Object} [schema]
 * @property {string} [semantic_type]
 * @property {string} [source_repo_url]
 * @property {string} [type_name]
 * @property {string} [updated_at]
 * @property {boolean} [use_name_as_identifier]
 */

/**
 * @typedef {Object} CatalogTypeSchema
 * @property {Object} annotation
 * @property {Array} attribute
 * @property {Array} category
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
 * @property {Array} [owning_team_id]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
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
 * @property {Object} annotation
 * @property {Array} attribute
 * @property {Array} category
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
 * @property {Array} [owning_team_id]
 * @property {boolean} ranked
 * @property {string} [registry_type]
 * @property {Array} [required_integration]
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
 * @property {Array} option
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
 * @property {Array} [option]
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
 * @property {Array} option
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
 * @property {Array} [option]
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
 * @property {string} [custom_field_id]
 * @property {string} [id]
 * @property {number} [sort_key]
 * @property {string} [value]
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
 * @property {string} [description]
 * @property {string} [escalation_path_id]
 * @property {Array} event
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} [incident_id]
 * @property {Object} priority
 * @property {Array} related_alert
 * @property {Array} related_incident
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {Array} [user_id]
 */

/**
 * @typedef {Object} EscalationLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EscalationListMatch
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {string} [escalation_path_id]
 * @property {Array} [event]
 * @property {string} [id]
 * @property {string} [idempotency_key]
 * @property {string} [incident_id]
 * @property {Object} [priority]
 * @property {Array} [related_alert]
 * @property {Array} [related_incident]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [updated_at]
 * @property {Array} [user_id]
 */

/**
 * @typedef {Object} EscalationCreateData
 * @property {string} created_at
 * @property {Object} creator
 * @property {string} [description]
 * @property {string} [escalation_path_id]
 * @property {Array} event
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} [incident_id]
 * @property {Object} priority
 * @property {Array} related_alert
 * @property {Array} related_incident
 * @property {string} status
 * @property {string} title
 * @property {string} updated_at
 * @property {Array} [user_id]
 */

/**
 * @typedef {Object} FollowUp
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {Object} assignee_team
 * @property {string} [assignee_team_id]
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
 * @property {Array} label
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
 * @property {Object} [assignee]
 * @property {string} [assignee_id]
 * @property {Object} [assignee_team]
 * @property {string} [assignee_team_id]
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {string} [external_issue_reference_id]
 * @property {string} [follow_up_category_id]
 * @property {string} [follow_up_priority_option_id]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {Array} [label]
 * @property {Object} [priority]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} FollowUpCreateData
 * @property {Object} assignee
 * @property {string} [assignee_id]
 * @property {Object} assignee_team
 * @property {string} [assignee_team_id]
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
 * @property {Array} label
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
 * @property {string} [completed_at]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {string} [description]
 * @property {Object} [external_issue_reference]
 * @property {string} [external_issue_reference_id]
 * @property {string} [follow_up_category_id]
 * @property {string} [follow_up_priority_option_id]
 * @property {string} [incident_id]
 * @property {Array} [label]
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
 * @typedef {Object} Incident
 * @property {string} [call_url]
 * @property {string} created_at
 * @property {Object} creator
 * @property {Array} custom_field_entry
 * @property {Array} [duration_metric]
 * @property {Object} external_issue_reference
 * @property {boolean} [has_debrief]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {Object} incident
 * @property {Array} incident_role_assignment
 * @property {Object} incident_status
 * @property {string} [incident_status_id]
 * @property {Array} [incident_timestamp_value]
 * @property {Object} incident_type
 * @property {string} [incident_type_id]
 * @property {string} mode
 * @property {string} name
 * @property {boolean} notify_incident_channel
 * @property {string} [permalink]
 * @property {Array} [postmortem_document_id]
 * @property {string} [postmortem_document_url]
 * @property {string} reference
 * @property {Object} [retrospective_incident_option]
 * @property {Object} severity
 * @property {string} [severity_id]
 * @property {string} slack_channel_id
 * @property {string} [slack_channel_name]
 * @property {string} [slack_channel_name_override]
 * @property {string} slack_team_id
 * @property {string} [source_message_channel_id]
 * @property {string} [source_message_timestamp]
 * @property {string} status
 * @property {string} [summary]
 * @property {Array} [timestamp]
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
 * @property {string} [call_url]
 * @property {string} [created_at]
 * @property {Object} [creator]
 * @property {Array} [custom_field_entry]
 * @property {Array} [duration_metric]
 * @property {Object} [external_issue_reference]
 * @property {boolean} [has_debrief]
 * @property {string} [id]
 * @property {string} [idempotency_key]
 * @property {Object} [incident]
 * @property {Array} [incident_role_assignment]
 * @property {Object} [incident_status]
 * @property {string} [incident_status_id]
 * @property {Array} [incident_timestamp_value]
 * @property {Object} [incident_type]
 * @property {string} [incident_type_id]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [notify_incident_channel]
 * @property {string} [permalink]
 * @property {Array} [postmortem_document_id]
 * @property {string} [postmortem_document_url]
 * @property {string} [reference]
 * @property {Object} [retrospective_incident_option]
 * @property {Object} [severity]
 * @property {string} [severity_id]
 * @property {string} [slack_channel_id]
 * @property {string} [slack_channel_name]
 * @property {string} [slack_channel_name_override]
 * @property {string} [slack_team_id]
 * @property {string} [source_message_channel_id]
 * @property {string} [source_message_timestamp]
 * @property {string} [status]
 * @property {string} [summary]
 * @property {Array} [timestamp]
 * @property {string} [updated_at]
 * @property {string} [visibility]
 * @property {number} [workload_minutes_late]
 * @property {number} [workload_minutes_sleeping]
 * @property {number} [workload_minutes_total]
 * @property {number} [workload_minutes_working]
 */

/**
 * @typedef {Object} IncidentCreateData
 * @property {string} [call_url]
 * @property {string} created_at
 * @property {Object} creator
 * @property {Array} custom_field_entry
 * @property {Array} [duration_metric]
 * @property {Object} external_issue_reference
 * @property {boolean} [has_debrief]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {Object} incident
 * @property {Array} incident_role_assignment
 * @property {Object} incident_status
 * @property {string} [incident_status_id]
 * @property {Array} [incident_timestamp_value]
 * @property {Object} incident_type
 * @property {string} [incident_type_id]
 * @property {string} mode
 * @property {string} name
 * @property {boolean} notify_incident_channel
 * @property {string} [permalink]
 * @property {Array} [postmortem_document_id]
 * @property {string} [postmortem_document_url]
 * @property {string} reference
 * @property {Object} [retrospective_incident_option]
 * @property {Object} severity
 * @property {string} [severity_id]
 * @property {string} slack_channel_id
 * @property {string} [slack_channel_name]
 * @property {string} [slack_channel_name_override]
 * @property {string} slack_team_id
 * @property {string} [source_message_channel_id]
 * @property {string} [source_message_timestamp]
 * @property {string} status
 * @property {string} [summary]
 * @property {Array} [timestamp]
 * @property {string} updated_at
 * @property {string} visibility
 * @property {number} [workload_minutes_late]
 * @property {number} [workload_minutes_sleeping]
 * @property {number} [workload_minutes_total]
 * @property {number} [workload_minutes_working]
 */

/**
 * @typedef {Object} IncidentAlert
 * @property {Object} alert
 * @property {string} [alert_route_id]
 * @property {string} id
 * @property {Object} incident
 */

/**
 * @typedef {Object} IncidentAlertListMatch
 * @property {Object} [alert]
 * @property {string} [alert_route_id]
 * @property {string} [id]
 * @property {Object} [incident]
 */

/**
 * @typedef {Object} IncidentAttachment
 * @property {string} id
 * @property {string} incident_id
 * @property {Object} resource
 */

/**
 * @typedef {Object} IncidentAttachmentListMatch
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {Object} [resource]
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
 * @property {Array} [active]
 * @property {Array} [passive]
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
 * @property {string} [archived_at]
 * @property {string} [participant_type]
 * @property {Object} [user]
 * @property {Object} [workload]
 */

/**
 * @typedef {Object} IncidentRelationship
 * @property {string} id
 * @property {Object} incident
 */

/**
 * @typedef {Object} IncidentRelationshipListMatch
 * @property {string} [id]
 * @property {Object} [incident]
 */

/**
 * @typedef {Object} IncidentRole
 * @property {string} created_at
 * @property {string} description
 * @property {string} id
 * @property {string} instruction
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
 * @property {string} [instruction]
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
 * @property {string} instruction
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
 * @property {string} [instruction]
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
 * @property {Array} [owning_team_id]
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
 * @property {Array} [owning_team_id]
 * @property {boolean} [private_incidents_only]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} IncidentUpdate
 * @property {string} created_at
 * @property {string} id
 * @property {string} incident_id
 * @property {string} [merged_into_incident_id]
 * @property {string} [message]
 * @property {Object} new_incident_status
 * @property {Object} new_severity
 * @property {Object} updater
 */

/**
 * @typedef {Object} IncidentUpdateListMatch
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {string} [merged_into_incident_id]
 * @property {string} [message]
 * @property {Object} [new_incident_status]
 * @property {Object} [new_severity]
 * @property {Object} [updater]
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
 * @typedef {Object} MaintenanceWindow
 * @property {Array} alert_condition_group
 * @property {string} [archived_at]
 * @property {string} created_at
 * @property {string} end_at
 * @property {Array} [escalation_target]
 * @property {string} id
 * @property {string} [incident_id]
 * @property {Object} lead
 * @property {string} name
 * @property {string} [notification_message]
 * @property {Array} [notify_channel]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
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
 * @property {Array} [alert_condition_group]
 * @property {string} [archived_at]
 * @property {string} [created_at]
 * @property {string} [end_at]
 * @property {Array} [escalation_target]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {Object} [lead]
 * @property {string} [name]
 * @property {string} [notification_message]
 * @property {Array} [notify_channel]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {boolean} [reroute_on_end]
 * @property {boolean} [resolve_on_end]
 * @property {boolean} [show_in_sidebar]
 * @property {string} [start_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} MaintenanceWindowCreateData
 * @property {Array} alert_condition_group
 * @property {string} [archived_at]
 * @property {string} created_at
 * @property {string} end_at
 * @property {Array} [escalation_target]
 * @property {string} id
 * @property {string} [incident_id]
 * @property {Object} lead
 * @property {string} name
 * @property {string} [notification_message]
 * @property {Array} [notify_channel]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {boolean} reroute_on_end
 * @property {boolean} resolve_on_end
 * @property {boolean} show_in_sidebar
 * @property {string} start_at
 * @property {string} updated_at
 */

/**
 * @typedef {Object} MaintenanceWindowUpdateData
 * @property {string} id
 * @property {Array} [alert_condition_group]
 * @property {string} [archived_at]
 * @property {string} [created_at]
 * @property {string} [end_at]
 * @property {Array} [escalation_target]
 * @property {string} [incident_id]
 * @property {Object} [lead]
 * @property {string} [name]
 * @property {string} [notification_message]
 * @property {Array} [notify_channel]
 * @property {number} [notify_end_minutes_before]
 * @property {number} [notify_start_minutes_before]
 * @property {boolean} [reroute_on_end]
 * @property {boolean} [resolve_on_end]
 * @property {boolean} [show_in_sidebar]
 * @property {string} [start_at]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} MaintenanceWindowRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PostmortemDocument
 * @property {string} created_at
 * @property {string} document_url
 * @property {Array} editor
 * @property {Array} exported_url
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
 * @property {string} [created_at]
 * @property {string} [document_url]
 * @property {Array} [editor]
 * @property {Array} [exported_url]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PostmortemDocumentUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [document_url]
 * @property {Array} [editor]
 * @property {Array} [exported_url]
 * @property {string} [incident_id]
 * @property {string} [status]
 * @property {string} [title]
 * @property {string} [type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} Schedule
 * @property {Object} annotation
 * @property {Object} config
 * @property {string} created_at
 * @property {Array} [current_shift]
 * @property {Object} holidays_public_config
 * @property {string} id
 * @property {string} name
 * @property {Array} [next_shift]
 * @property {string} permalink
 * @property {Object} schedule
 * @property {Array} team_id
 * @property {string} timezone
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleListMatch
 * @property {Object} [annotation]
 * @property {Object} [config]
 * @property {string} [created_at]
 * @property {Array} [current_shift]
 * @property {Object} [holidays_public_config]
 * @property {string} [id]
 * @property {string} [name]
 * @property {Array} [next_shift]
 * @property {string} [permalink]
 * @property {Object} [schedule]
 * @property {Array} [team_id]
 * @property {string} [timezone]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleCreateData
 * @property {Object} annotation
 * @property {Object} config
 * @property {string} created_at
 * @property {Array} [current_shift]
 * @property {Object} holidays_public_config
 * @property {string} id
 * @property {string} name
 * @property {Array} [next_shift]
 * @property {string} permalink
 * @property {Object} schedule
 * @property {Array} team_id
 * @property {string} timezone
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleUpdateData
 * @property {string} id
 * @property {Object} [annotation]
 * @property {Object} [config]
 * @property {string} [created_at]
 * @property {Array} [current_shift]
 * @property {Object} [holidays_public_config]
 * @property {string} [name]
 * @property {Array} [next_shift]
 * @property {string} [permalink]
 * @property {Object} [schedule]
 * @property {Array} [team_id]
 * @property {string} [timezone]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ScheduleEntry
 * @property {Object} pagination_meta
 * @property {Object} schedule_entry
 */

/**
 * @typedef {Object} ScheduleEntryLoadMatch
 * @property {Object} [pagination_meta]
 * @property {Object} [schedule_entry]
 */

/**
 * @typedef {Object} ScheduleReplica
 * @property {string} created_at
 * @property {string} id
 * @property {string} [last_sync_error]
 * @property {string} [last_synced_at]
 * @property {number} [mirror_window_day]
 * @property {string} replica_fallback_user_id
 * @property {string} replica_provider
 * @property {string} replica_provider_id
 * @property {string} schedule_id
 * @property {Object} schedule_replica
 * @property {Array} source
 * @property {string} updated_at
 * @property {Array} user_status
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
 * @property {number} [mirror_window_day]
 * @property {string} replica_fallback_user_id
 * @property {string} replica_provider
 * @property {string} replica_provider_id
 * @property {string} schedule_id
 * @property {Object} schedule_replica
 * @property {Array} source
 * @property {string} updated_at
 * @property {Array} user_status
 */

/**
 * @typedef {Object} ScheduleSyncRule
 * @property {Object} [annotation]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} permanent_member_user_id
 * @property {string} [rotation_id]
 * @property {string} schedule_id
 * @property {Object} schedule_sync_rule
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
 */

/**
 * @typedef {Object} ScheduleSyncRuleCreateData
 * @property {string} id
 * @property {Object} [annotation]
 * @property {string} created_at
 * @property {Array} permanent_member_user_id
 * @property {string} [rotation_id]
 * @property {string} schedule_id
 * @property {Object} schedule_sync_rule
 * @property {Object} schedule_sync_target
 * @property {string} schedule_sync_target_id
 * @property {string} sync_type
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncRuleUpdateData
 * @property {string} id
 * @property {string} schedule_id
 * @property {Object} [annotation]
 * @property {string} [created_at]
 * @property {Array} [permanent_member_user_id]
 * @property {string} [rotation_id]
 * @property {Object} [schedule_sync_rule]
 * @property {Object} [schedule_sync_target]
 * @property {string} [schedule_sync_target_id]
 * @property {string} [sync_type]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleSyncTarget
 * @property {boolean} add_bot_to_group
 * @property {Object} [annotation]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} linked_schedule
 * @property {Object} schedule_sync_target
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
 * @property {boolean} [add_bot_to_group]
 * @property {Object} [annotation]
 * @property {string} [created_at]
 * @property {string} [id]
 * @property {Array} [linked_schedule]
 * @property {Object} [schedule_sync_target]
 * @property {string} [slack_team_id]
 * @property {string} [slack_user_group_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleSyncTargetCreateData
 * @property {boolean} add_bot_to_group
 * @property {Object} [annotation]
 * @property {string} created_at
 * @property {string} id
 * @property {Array} linked_schedule
 * @property {Object} schedule_sync_target
 * @property {string} slack_team_id
 * @property {string} slack_user_group_id
 * @property {string} updated_at
 */

/**
 * @typedef {Object} ScheduleSyncTargetUpdateData
 * @property {string} id
 * @property {boolean} [add_bot_to_group]
 * @property {Object} [annotation]
 * @property {string} [created_at]
 * @property {Array} [linked_schedule]
 * @property {Object} [schedule_sync_target]
 * @property {string} [slack_team_id]
 * @property {string} [slack_user_group_id]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} ScheduleSyncTargetRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Secret
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {string} [last_four_char]
 * @property {string} name
 * @property {Array} owning_team_id
 * @property {Object} secret
 * @property {string} updated_at
 * @property {string} value
 * @property {Array} version
 */

/**
 * @typedef {Object} SecretLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} SecretListMatch
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [last_four_char]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
 * @property {Object} [secret]
 * @property {string} [updated_at]
 * @property {string} [value]
 * @property {Array} [version]
 */

/**
 * @typedef {Object} SecretCreateData
 * @property {string} created_at
 * @property {string} [description]
 * @property {string} id
 * @property {string} [last_four_char]
 * @property {string} name
 * @property {Array} owning_team_id
 * @property {Object} secret
 * @property {string} updated_at
 * @property {string} value
 * @property {Array} version
 */

/**
 * @typedef {Object} SecretUpdateData
 * @property {string} id
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [last_four_char]
 * @property {string} [name]
 * @property {Array} [owning_team_id]
 * @property {Object} [secret]
 * @property {string} [updated_at]
 * @property {string} [value]
 * @property {Array} [version]
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
 * @typedef {Object} StatusPageListMatch
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [public_url]
 */

/**
 * @typedef {Object} StatusPageIncident
 * @property {Array} component_impact
 * @property {Array} [component_status]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscriber
 * @property {string} published_at
 * @property {string} status_page_id
 * @property {Array} update
 */

/**
 * @typedef {Object} StatusPageIncidentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageIncidentListMatch
 * @property {Array} [component_impact]
 * @property {Array} [component_status]
 * @property {string} [id]
 * @property {string} [idempotency_key]
 * @property {string} [incident_status]
 * @property {string} [message]
 * @property {string} [name]
 * @property {boolean} [notify_subscriber]
 * @property {string} [published_at]
 * @property {string} [status_page_id]
 * @property {Array} [update]
 */

/**
 * @typedef {Object} StatusPageIncidentCreateData
 * @property {Array} component_impact
 * @property {Array} [component_status]
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} incident_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscriber
 * @property {string} published_at
 * @property {string} status_page_id
 * @property {Array} update
 */

/**
 * @typedef {Object} StatusPageIncidentUpdateData
 * @property {string} id
 * @property {Array} [component_impact]
 * @property {Array} [component_status]
 * @property {string} [idempotency_key]
 * @property {string} [incident_status]
 * @property {string} [message]
 * @property {string} [name]
 * @property {boolean} [notify_subscriber]
 * @property {string} [published_at]
 * @property {string} [status_page_id]
 * @property {Array} [update]
 */

/**
 * @typedef {Object} StatusPageIncidentUpdate
 * @property {Array} [component_status]
 * @property {string} [incident_status]
 * @property {string} message
 * @property {boolean} notify_subscriber
 * @property {string} status_page_incident_id
 */

/**
 * @typedef {Object} StatusPageIncidentUpdateCreateData
 * @property {Array} [component_status]
 * @property {string} [incident_status]
 * @property {string} message
 * @property {boolean} notify_subscriber
 * @property {string} status_page_incident_id
 */

/**
 * @typedef {Object} StatusPageMaintenance
 * @property {Array} affected_component_id
 * @property {Array} component_maintenance_period
 * @property {string} end_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} maintenance_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscriber
 * @property {string} published_at
 * @property {string} start_at
 * @property {string} status_page_id
 * @property {Array} update
 */

/**
 * @typedef {Object} StatusPageMaintenanceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StatusPageMaintenanceListMatch
 * @property {Array} [affected_component_id]
 * @property {Array} [component_maintenance_period]
 * @property {string} [end_at]
 * @property {string} [id]
 * @property {string} [idempotency_key]
 * @property {string} [maintenance_status]
 * @property {string} [message]
 * @property {string} [name]
 * @property {boolean} [notify_subscriber]
 * @property {string} [published_at]
 * @property {string} [start_at]
 * @property {string} [status_page_id]
 * @property {Array} [update]
 */

/**
 * @typedef {Object} StatusPageMaintenanceCreateData
 * @property {Array} affected_component_id
 * @property {Array} component_maintenance_period
 * @property {string} end_at
 * @property {string} id
 * @property {string} idempotency_key
 * @property {string} maintenance_status
 * @property {string} message
 * @property {string} name
 * @property {boolean} notify_subscriber
 * @property {string} published_at
 * @property {string} start_at
 * @property {string} status_page_id
 * @property {Array} update
 */

/**
 * @typedef {Object} StatusPageMaintenanceUpdate
 * @property {Array} [component_status]
 * @property {string} [maintenance_status]
 * @property {string} message
 * @property {boolean} notify_subscriber
 * @property {string} status_page_maintenance_id
 */

/**
 * @typedef {Object} StatusPageMaintenanceUpdateCreateData
 * @property {Array} [component_status]
 * @property {string} [maintenance_status]
 * @property {string} message
 * @property {boolean} notify_subscriber
 * @property {string} status_page_maintenance_id
 */

/**
 * @typedef {Object} StatusPageStructure
 * @property {Array} item
 */

/**
 * @typedef {Object} StatusPageStructureLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Team
 * @property {Object} catalog_entry
 * @property {string} id
 * @property {Array} member
 * @property {string} name
 */

/**
 * @typedef {Object} TeamLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TeamListMatch
 * @property {Object} [catalog_entry]
 * @property {string} [id]
 * @property {Array} [member]
 * @property {string} [name]
 */

/**
 * @typedef {Object} TelemetryDataSource
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
 * @typedef {Object} TelemetryDataSourceUpdateData
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
 * @property {Array} custom_role
 * @property {string} [email]
 * @property {string} id
 * @property {boolean} is_active
 * @property {string} name
 * @property {string} role
 * @property {Object} seat
 * @property {string} [slack_user_id]
 */

/**
 * @typedef {Object} UserLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} UserListMatch
 * @property {Object} [base_role]
 * @property {Array} [custom_role]
 * @property {string} [email]
 * @property {string} [id]
 * @property {boolean} [is_active]
 * @property {string} [name]
 * @property {string} [role]
 * @property {Object} [seat]
 * @property {string} [slack_user_id]
 */

/**
 * @typedef {Object} Workflow
 * @property {Object} [annotation]
 * @property {Array} condition_group
 * @property {boolean} continue_on_step_error
 * @property {Object} delay
 * @property {Array} expression
 * @property {string} [folder]
 * @property {Array} [form_field]
 * @property {string} id
 * @property {boolean} [include_private_escalation]
 * @property {boolean} [include_private_incident]
 * @property {Object} management_meta
 * @property {string} name
 * @property {Array} once_for
 * @property {Array} [owning_team_id]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {string} runs_on_incident
 * @property {Array} runs_on_incident_mode
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrade]
 * @property {string} [state]
 * @property {Array} step
 * @property {string} trigger
 * @property {number} version
 * @property {Object} workflow
 */

/**
 * @typedef {Object} WorkflowLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WorkflowListMatch
 * @property {Object} [annotation]
 * @property {Array} [condition_group]
 * @property {boolean} [continue_on_step_error]
 * @property {Object} [delay]
 * @property {Array} [expression]
 * @property {string} [folder]
 * @property {Array} [form_field]
 * @property {string} [id]
 * @property {boolean} [include_private_escalation]
 * @property {boolean} [include_private_incident]
 * @property {Object} [management_meta]
 * @property {string} [name]
 * @property {Array} [once_for]
 * @property {Array} [owning_team_id]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {string} [runs_on_incident]
 * @property {Array} [runs_on_incident_mode]
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrade]
 * @property {string} [state]
 * @property {Array} [step]
 * @property {string} [trigger]
 * @property {number} [version]
 * @property {Object} [workflow]
 */

/**
 * @typedef {Object} WorkflowCreateData
 * @property {Object} [annotation]
 * @property {Array} condition_group
 * @property {boolean} continue_on_step_error
 * @property {Object} delay
 * @property {Array} expression
 * @property {string} [folder]
 * @property {Array} [form_field]
 * @property {string} id
 * @property {boolean} [include_private_escalation]
 * @property {boolean} [include_private_incident]
 * @property {Object} management_meta
 * @property {string} name
 * @property {Array} once_for
 * @property {Array} [owning_team_id]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {string} runs_on_incident
 * @property {Array} runs_on_incident_mode
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrade]
 * @property {string} [state]
 * @property {Array} step
 * @property {string} trigger
 * @property {number} version
 * @property {Object} workflow
 */

/**
 * @typedef {Object} WorkflowUpdateData
 * @property {string} id
 * @property {Object} [annotation]
 * @property {Array} [condition_group]
 * @property {boolean} [continue_on_step_error]
 * @property {Object} [delay]
 * @property {Array} [expression]
 * @property {string} [folder]
 * @property {Array} [form_field]
 * @property {boolean} [include_private_escalation]
 * @property {boolean} [include_private_incident]
 * @property {Object} [management_meta]
 * @property {string} [name]
 * @property {Array} [once_for]
 * @property {Array} [owning_team_id]
 * @property {string} [private_incident_scope]
 * @property {string} [runs_from]
 * @property {string} [runs_on_incident]
 * @property {Array} [runs_on_incident_mode]
 * @property {string} [shortform]
 * @property {boolean} [skip_step_upgrade]
 * @property {string} [state]
 * @property {Array} [step]
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
 * @property {string} [cancelled_at]
 * @property {string} [created_at]
 * @property {string} [enqueued_at]
 * @property {string} [error]
 * @property {string} [id]
 * @property {string} [incident_id]
 * @property {string} [incident_reference]
 * @property {Array} [progress]
 * @property {string} [scheduled_at]
 * @property {string} [updated_at]
 * @property {string} [workflow_id]
 * @property {string} [workflow_name]
 * @property {string} [workflow_version_id]
 * @property {number} [workflow_version_number]
 */


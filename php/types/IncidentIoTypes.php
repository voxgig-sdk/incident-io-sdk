<?php
declare(strict_types=1);

// Typed models for the IncidentIo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Action entity data model. */
class Action
{
    public array $assignee;
    public ?string $assignee_id = null;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public bool $follow_up;
    public string $id;
    public string $incident_id;
    public string $status;
    public string $updated_at;
}

/** Request payload for Action#load. */
class ActionLoadMatch
{
    public string $id;
}

/** Request payload for Action#list. */
class ActionListMatch
{
    public ?array $assignee = null;
    public ?string $assignee_id = null;
    public ?string $completed_at = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public ?bool $follow_up = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for Action#create. */
class ActionCreateData
{
    public array $assignee;
    public ?string $assignee_id = null;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public bool $follow_up;
    public string $id;
    public string $incident_id;
    public string $status;
    public string $updated_at;
}

/** Request payload for Action#update. */
class ActionUpdateData
{
    public string $id;
    public ?array $assignee = null;
    public ?string $assignee_id = null;
    public ?string $completed_at = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public ?bool $follow_up = null;
    public ?string $incident_id = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for Action#remove. */
class ActionRemoveMatch
{
    public string $id;
}

/** Alert entity data model. */
class Alert
{
    public ?array $alert_group_id = null;
    public string $alert_source_id;
    public array $attribute;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public string $id;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public string $title;
    public string $updated_at;
}

/** Request payload for Alert#load. */
class AlertLoadMatch
{
    public string $id;
}

/** Request payload for Alert#list. */
class AlertListMatch
{
    public ?array $alert_group_id = null;
    public ?string $alert_source_id = null;
    public ?array $attribute = null;
    public ?string $created_at = null;
    public ?string $deduplication_key = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $updated_at = null;
}

/** Request payload for Alert#create. */
class AlertCreateData
{
    public string $id;
    public ?array $alert_group_id = null;
    public string $alert_source_id;
    public array $attribute;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public string $title;
    public string $updated_at;
}

/** AlertAttribute entity data model. */
class AlertAttribute
{
    public bool $array;
    public ?string $emoji = null;
    public string $id;
    public string $name;
    public bool $required;
    public string $type;
}

/** Request payload for AlertAttribute#load. */
class AlertAttributeLoadMatch
{
    public string $id;
}

/** Request payload for AlertAttribute#list. */
class AlertAttributeListMatch
{
    public ?bool $array = null;
    public ?string $emoji = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?bool $required = null;
    public ?string $type = null;
}

/** Request payload for AlertAttribute#create. */
class AlertAttributeCreateData
{
    public bool $array;
    public ?string $emoji = null;
    public string $id;
    public string $name;
    public bool $required;
    public string $type;
}

/** Request payload for AlertAttribute#update. */
class AlertAttributeUpdateData
{
    public string $id;
    public ?bool $array = null;
    public ?string $emoji = null;
    public ?string $name = null;
    public ?bool $required = null;
    public ?string $type = null;
}

/** Request payload for AlertAttribute#remove. */
class AlertAttributeRemoveMatch
{
    public string $id;
}

/** AlertNote entity data model. */
class AlertNote
{
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public string $content;
    public string $created_at;
    public array $creator;
    public string $id;
    public array $image;
    public ?string $last_edited_at = null;
    public string $updated_at;
}

/** Request payload for AlertNote#load. */
class AlertNoteLoadMatch
{
    public string $id;
}

/** Request payload for AlertNote#list. */
class AlertNoteListMatch
{
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public ?string $content = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $id = null;
    public ?array $image = null;
    public ?string $last_edited_at = null;
    public ?string $updated_at = null;
}

/** Request payload for AlertNote#create. */
class AlertNoteCreateData
{
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public string $content;
    public string $created_at;
    public array $creator;
    public string $id;
    public array $image;
    public ?string $last_edited_at = null;
    public string $updated_at;
}

/** Request payload for AlertNote#update. */
class AlertNoteUpdateData
{
    public string $id;
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public ?string $content = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?array $image = null;
    public ?string $last_edited_at = null;
    public ?string $updated_at = null;
}

/** Request payload for AlertNote#remove. */
class AlertNoteRemoveMatch
{
    public string $id;
}

/** AlertRoute entity data model. */
class AlertRoute
{
    public array $alert_source;
    public array $channel_config;
    public array $condition_group;
    public ?string $created_at = null;
    public bool $enabled;
    public array $escalation_config;
    public array $expression;
    public array $grouping_config;
    public string $id;
    public array $incident_config;
    public array $incident_template;
    public bool $is_private;
    public array $message_config;
    public ?array $message_template = null;
    public string $name;
    public ?array $owning_team_id = null;
    public ?string $updated_at = null;
    public int $version;
}

/** Request payload for AlertRoute#load. */
class AlertRouteLoadMatch
{
    public string $id;
}

/** Request payload for AlertRoute#list. */
class AlertRouteListMatch
{
    public ?array $alert_source = null;
    public ?array $channel_config = null;
    public ?array $condition_group = null;
    public ?string $created_at = null;
    public ?bool $enabled = null;
    public ?array $escalation_config = null;
    public ?array $expression = null;
    public ?array $grouping_config = null;
    public ?string $id = null;
    public ?array $incident_config = null;
    public ?array $incident_template = null;
    public ?bool $is_private = null;
    public ?array $message_config = null;
    public ?array $message_template = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?string $updated_at = null;
    public ?int $version = null;
}

/** Request payload for AlertRoute#create. */
class AlertRouteCreateData
{
    public array $alert_source;
    public array $channel_config;
    public array $condition_group;
    public ?string $created_at = null;
    public bool $enabled;
    public array $escalation_config;
    public array $expression;
    public array $grouping_config;
    public string $id;
    public array $incident_config;
    public array $incident_template;
    public bool $is_private;
    public array $message_config;
    public ?array $message_template = null;
    public string $name;
    public ?array $owning_team_id = null;
    public ?string $updated_at = null;
    public int $version;
}

/** Request payload for AlertRoute#update. */
class AlertRouteUpdateData
{
    public string $id;
    public ?array $alert_source = null;
    public ?array $channel_config = null;
    public ?array $condition_group = null;
    public ?string $created_at = null;
    public ?bool $enabled = null;
    public ?array $escalation_config = null;
    public ?array $expression = null;
    public ?array $grouping_config = null;
    public ?array $incident_config = null;
    public ?array $incident_template = null;
    public ?bool $is_private = null;
    public ?array $message_config = null;
    public ?array $message_template = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?string $updated_at = null;
    public ?int $version = null;
}

/** Request payload for AlertRoute#remove. */
class AlertRouteRemoveMatch
{
    public string $id;
}

/** AlertSource entity data model. */
class AlertSource
{
    public ?string $alert_events_url = null;
    public ?bool $auto_resolve_incident_alert = null;
    public ?int $auto_resolve_timeout_minute = null;
    public ?bool $disabled = null;
    public array $email_option;
    public array $heartbeat_option;
    public array $http_custom_option;
    public string $id;
    public array $jira_option;
    public string $name;
    public ?array $owning_team_id = null;
    public ?string $secret_token = null;
    public string $source_type;
    public array $template;
}

/** Request payload for AlertSource#load. */
class AlertSourceLoadMatch
{
    public string $id;
}

/** Request payload for AlertSource#list. */
class AlertSourceListMatch
{
    public ?string $alert_events_url = null;
    public ?bool $auto_resolve_incident_alert = null;
    public ?int $auto_resolve_timeout_minute = null;
    public ?bool $disabled = null;
    public ?array $email_option = null;
    public ?array $heartbeat_option = null;
    public ?array $http_custom_option = null;
    public ?string $id = null;
    public ?array $jira_option = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?string $secret_token = null;
    public ?string $source_type = null;
    public ?array $template = null;
}

/** Request payload for AlertSource#create. */
class AlertSourceCreateData
{
    public ?string $alert_events_url = null;
    public ?bool $auto_resolve_incident_alert = null;
    public ?int $auto_resolve_timeout_minute = null;
    public ?bool $disabled = null;
    public array $email_option;
    public array $heartbeat_option;
    public array $http_custom_option;
    public string $id;
    public array $jira_option;
    public string $name;
    public ?array $owning_team_id = null;
    public ?string $secret_token = null;
    public string $source_type;
    public array $template;
}

/** Request payload for AlertSource#update. */
class AlertSourceUpdateData
{
    public string $id;
    public ?string $alert_events_url = null;
    public ?bool $auto_resolve_incident_alert = null;
    public ?int $auto_resolve_timeout_minute = null;
    public ?bool $disabled = null;
    public ?array $email_option = null;
    public ?array $heartbeat_option = null;
    public ?array $http_custom_option = null;
    public ?array $jira_option = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?string $secret_token = null;
    public ?string $source_type = null;
    public ?array $template = null;
}

/** Request payload for AlertSource#remove. */
class AlertSourceRemoveMatch
{
    public string $id;
}

/** ApiKey entity data model. */
class ApiKey
{
    public ?string $comment = null;
    public string $created_at;
    public array $creator;
    public int $grace_period_minute;
    public string $id;
    public ?string $last_used_at = null;
    public string $name;
    public array $role;
    public array $role_name;
    public array $team_id;
    public array $team_role;
    public array $team_role_name;
    public string $token_last_issued_at;
}

/** Request payload for ApiKey#load. */
class ApiKeyLoadMatch
{
    public string $id;
}

/** Request payload for ApiKey#list. */
class ApiKeyListMatch
{
    public ?string $comment = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?int $grace_period_minute = null;
    public ?string $id = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?array $role = null;
    public ?array $role_name = null;
    public ?array $team_id = null;
    public ?array $team_role = null;
    public ?array $team_role_name = null;
    public ?string $token_last_issued_at = null;
}

/** Request payload for ApiKey#create. */
class ApiKeyCreateData
{
    public ?string $comment = null;
    public string $created_at;
    public array $creator;
    public int $grace_period_minute;
    public string $id;
    public ?string $last_used_at = null;
    public string $name;
    public array $role;
    public array $role_name;
    public array $team_id;
    public array $team_role;
    public array $team_role_name;
    public string $token_last_issued_at;
}

/** Request payload for ApiKey#update. */
class ApiKeyUpdateData
{
    public string $id;
    public ?string $comment = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?int $grace_period_minute = null;
    public ?string $last_used_at = null;
    public ?string $name = null;
    public ?array $role = null;
    public ?array $role_name = null;
    public ?array $team_id = null;
    public ?array $team_role = null;
    public ?array $team_role_name = null;
    public ?string $token_last_issued_at = null;
}

/** Request payload for ApiKey#remove. */
class ApiKeyRemoveMatch
{
    public string $id;
}

/** CatalogEntry entity data model. */
class CatalogEntry
{
    public ?array $alias = null;
    public ?string $archived_at = null;
    public array $attribute_value;
    public array $catalog_entry;
    public array $catalog_type;
    public string $catalog_type_id;
    public string $created_at;
    public ?string $external_id = null;
    public string $id;
    public string $name;
    public ?int $rank = null;
    public ?array $update_attribute = null;
    public string $updated_at;
}

/** Request payload for CatalogEntry#load. */
class CatalogEntryLoadMatch
{
    public string $id;
}

/** Request payload for CatalogEntry#list. */
class CatalogEntryListMatch
{
    public ?array $alias = null;
    public ?string $archived_at = null;
    public ?array $attribute_value = null;
    public ?array $catalog_entry = null;
    public ?array $catalog_type = null;
    public ?string $catalog_type_id = null;
    public ?string $created_at = null;
    public ?string $external_id = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?array $update_attribute = null;
    public ?string $updated_at = null;
}

/** Request payload for CatalogEntry#create. */
class CatalogEntryCreateData
{
    public ?array $alias = null;
    public ?string $archived_at = null;
    public array $attribute_value;
    public array $catalog_entry;
    public array $catalog_type;
    public string $catalog_type_id;
    public string $created_at;
    public ?string $external_id = null;
    public string $id;
    public string $name;
    public ?int $rank = null;
    public ?array $update_attribute = null;
    public string $updated_at;
}

/** Request payload for CatalogEntry#update. */
class CatalogEntryUpdateData
{
    public string $id;
    public ?array $alias = null;
    public ?string $archived_at = null;
    public ?array $attribute_value = null;
    public ?array $catalog_entry = null;
    public ?array $catalog_type = null;
    public ?string $catalog_type_id = null;
    public ?string $created_at = null;
    public ?string $external_id = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?array $update_attribute = null;
    public ?string $updated_at = null;
}

/** CatalogResource entity data model. */
class CatalogResource
{
    public string $category;
    public string $description;
    public string $engine_resource_type;
    public string $label;
    public string $type;
    public string $value_docstring;
}

/** Request payload for CatalogResource#list. */
class CatalogResourceListMatch
{
    public ?string $category = null;
    public ?string $description = null;
    public ?string $engine_resource_type = null;
    public ?string $label = null;
    public ?string $type = null;
    public ?string $value_docstring = null;
}

/** CatalogType entity data model. */
class CatalogType
{
    public array $annotation;
    public array $category;
    public string $color;
    public string $created_at;
    public string $description;
    public ?string $dynamic_resource_parameter = null;
    public string $engine_resource_type;
    public ?int $estimated_count = null;
    public string $icon;
    public string $id;
    public bool $is_editable;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public string $name;
    public ?array $owning_team_id = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public array $schema;
    public string $semantic_type;
    public ?string $source_repo_url = null;
    public string $type_name;
    public string $updated_at;
    public bool $use_name_as_identifier;
}

/** Request payload for CatalogType#load. */
class CatalogTypeLoadMatch
{
    public string $id;
}

/** Request payload for CatalogType#list. */
class CatalogTypeListMatch
{
    public ?array $annotation = null;
    public ?array $category = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $dynamic_resource_parameter = null;
    public ?string $engine_resource_type = null;
    public ?int $estimated_count = null;
    public ?string $icon = null;
    public ?string $id = null;
    public ?bool $is_editable = null;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?bool $ranked = null;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public ?array $schema = null;
    public ?string $semantic_type = null;
    public ?string $source_repo_url = null;
    public ?string $type_name = null;
    public ?string $updated_at = null;
    public ?bool $use_name_as_identifier = null;
}

/** Request payload for CatalogType#create. */
class CatalogTypeCreateData
{
    public array $annotation;
    public array $category;
    public string $color;
    public string $created_at;
    public string $description;
    public ?string $dynamic_resource_parameter = null;
    public string $engine_resource_type;
    public ?int $estimated_count = null;
    public string $icon;
    public string $id;
    public bool $is_editable;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public string $name;
    public ?array $owning_team_id = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public array $schema;
    public string $semantic_type;
    public ?string $source_repo_url = null;
    public string $type_name;
    public string $updated_at;
    public bool $use_name_as_identifier;
}

/** Request payload for CatalogType#update. */
class CatalogTypeUpdateData
{
    public string $id;
    public ?array $annotation = null;
    public ?array $category = null;
    public ?string $color = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $dynamic_resource_parameter = null;
    public ?string $engine_resource_type = null;
    public ?int $estimated_count = null;
    public ?string $icon = null;
    public ?bool $is_editable = null;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?bool $ranked = null;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public ?array $schema = null;
    public ?string $semantic_type = null;
    public ?string $source_repo_url = null;
    public ?string $type_name = null;
    public ?string $updated_at = null;
    public ?bool $use_name_as_identifier = null;
}

/** CatalogTypeSchema entity data model. */
class CatalogTypeSchema
{
    public array $annotation;
    public array $attribute;
    public array $category;
    public string $color;
    public string $created_at;
    public string $description;
    public ?string $dynamic_resource_parameter = null;
    public string $engine_resource_type;
    public ?int $estimated_count = null;
    public string $icon;
    public string $id;
    public bool $is_editable;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public string $name;
    public ?array $owning_team_id = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public array $schema;
    public string $semantic_type;
    public ?string $source_repo_url = null;
    public string $type_name;
    public string $updated_at;
    public bool $use_name_as_identifier;
    public int $version;
}

/** Request payload for CatalogTypeSchema#create. */
class CatalogTypeSchemaCreateData
{
    public string $catalog_type_id;
    public array $annotation;
    public array $attribute;
    public array $category;
    public string $color;
    public string $created_at;
    public string $description;
    public ?string $dynamic_resource_parameter = null;
    public string $engine_resource_type;
    public ?int $estimated_count = null;
    public string $icon;
    public string $id;
    public bool $is_editable;
    public ?bool $is_team_type = null;
    public ?string $last_synced_at = null;
    public string $name;
    public ?array $owning_team_id = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integration = null;
    public array $schema;
    public string $semantic_type;
    public ?string $source_repo_url = null;
    public string $type_name;
    public string $updated_at;
    public bool $use_name_as_identifier;
    public int $version;
}

/** CustomField entity data model. */
class CustomField
{
    public ?string $catalog_type_id = null;
    public string $created_at;
    public string $description;
    public string $field_type;
    public array $filter_by;
    public array $fixed_filter;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public string $id;
    public string $name;
    public array $option;
    public ?string $required = null;
    public ?string $required_v2 = null;
    public bool $show_before_closure;
    public bool $show_before_creation;
    public bool $show_before_update;
    public ?bool $show_in_announcement_post = null;
    public string $updated_at;
}

/** Request payload for CustomField#load. */
class CustomFieldLoadMatch
{
    public string $id;
}

/** Request payload for CustomField#list. */
class CustomFieldListMatch
{
    public ?string $catalog_type_id = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $field_type = null;
    public ?array $filter_by = null;
    public ?array $fixed_filter = null;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $option = null;
    public ?string $required = null;
    public ?string $required_v2 = null;
    public ?bool $show_before_closure = null;
    public ?bool $show_before_creation = null;
    public ?bool $show_before_update = null;
    public ?bool $show_in_announcement_post = null;
    public ?string $updated_at = null;
}

/** Request payload for CustomField#create. */
class CustomFieldCreateData
{
    public ?string $catalog_type_id = null;
    public string $created_at;
    public string $description;
    public string $field_type;
    public array $filter_by;
    public array $fixed_filter;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public string $id;
    public string $name;
    public array $option;
    public ?string $required = null;
    public ?string $required_v2 = null;
    public bool $show_before_closure;
    public bool $show_before_creation;
    public bool $show_before_update;
    public ?bool $show_in_announcement_post = null;
    public string $updated_at;
}

/** Request payload for CustomField#update. */
class CustomFieldUpdateData
{
    public string $id;
    public ?string $catalog_type_id = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $field_type = null;
    public ?array $filter_by = null;
    public ?array $fixed_filter = null;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public ?string $name = null;
    public ?array $option = null;
    public ?string $required = null;
    public ?string $required_v2 = null;
    public ?bool $show_before_closure = null;
    public ?bool $show_before_creation = null;
    public ?bool $show_before_update = null;
    public ?bool $show_in_announcement_post = null;
    public ?string $updated_at = null;
}

/** Request payload for CustomField#remove. */
class CustomFieldRemoveMatch
{
    public string $id;
}

/** CustomFieldOption entity data model. */
class CustomFieldOption
{
    public string $custom_field_id;
    public string $id;
    public int $sort_key;
    public string $value;
}

/** Request payload for CustomFieldOption#load. */
class CustomFieldOptionLoadMatch
{
    public string $id;
}

/** Request payload for CustomFieldOption#list. */
class CustomFieldOptionListMatch
{
    public ?string $custom_field_id = null;
    public ?string $id = null;
    public ?int $sort_key = null;
    public ?string $value = null;
}

/** Request payload for CustomFieldOption#create. */
class CustomFieldOptionCreateData
{
    public string $custom_field_id;
    public string $id;
    public int $sort_key;
    public string $value;
}

/** Request payload for CustomFieldOption#update. */
class CustomFieldOptionUpdateData
{
    public string $id;
    public ?string $custom_field_id = null;
    public ?int $sort_key = null;
    public ?string $value = null;
}

/** Request payload for CustomFieldOption#remove. */
class CustomFieldOptionRemoveMatch
{
    public string $id;
}

/** Escalation entity data model. */
class Escalation
{
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public array $event;
    public string $id;
    public string $idempotency_key;
    public ?string $incident_id = null;
    public array $priority;
    public array $related_alert;
    public array $related_incident;
    public string $status;
    public string $title;
    public string $updated_at;
    public ?array $user_id = null;
}

/** Request payload for Escalation#load. */
class EscalationLoadMatch
{
    public string $id;
}

/** Request payload for Escalation#list. */
class EscalationListMatch
{
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public ?array $event = null;
    public ?string $id = null;
    public ?string $idempotency_key = null;
    public ?string $incident_id = null;
    public ?array $priority = null;
    public ?array $related_alert = null;
    public ?array $related_incident = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $updated_at = null;
    public ?array $user_id = null;
}

/** Request payload for Escalation#create. */
class EscalationCreateData
{
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public array $event;
    public string $id;
    public string $idempotency_key;
    public ?string $incident_id = null;
    public array $priority;
    public array $related_alert;
    public array $related_incident;
    public string $status;
    public string $title;
    public string $updated_at;
    public ?array $user_id = null;
}

/** FollowUp entity data model. */
class FollowUp
{
    public array $assignee;
    public ?string $assignee_id = null;
    public array $assignee_team;
    public ?string $assignee_team_id = null;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public array $external_issue_reference;
    public ?string $external_issue_reference_id = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public string $id;
    public string $incident_id;
    public array $label;
    public array $priority;
    public string $status;
    public string $title;
    public string $updated_at;
}

/** Request payload for FollowUp#load. */
class FollowUpLoadMatch
{
    public string $id;
}

/** Request payload for FollowUp#list. */
class FollowUpListMatch
{
    public ?array $assignee = null;
    public ?string $assignee_id = null;
    public ?array $assignee_team = null;
    public ?string $assignee_team_id = null;
    public ?string $completed_at = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public ?string $external_issue_reference_id = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?array $label = null;
    public ?array $priority = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $updated_at = null;
}

/** Request payload for FollowUp#create. */
class FollowUpCreateData
{
    public array $assignee;
    public ?string $assignee_id = null;
    public array $assignee_team;
    public ?string $assignee_team_id = null;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public array $external_issue_reference;
    public ?string $external_issue_reference_id = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public string $id;
    public string $incident_id;
    public array $label;
    public array $priority;
    public string $status;
    public string $title;
    public string $updated_at;
}

/** Request payload for FollowUp#update. */
class FollowUpUpdateData
{
    public string $id;
    public ?array $assignee = null;
    public ?string $assignee_id = null;
    public ?array $assignee_team = null;
    public ?string $assignee_team_id = null;
    public ?string $completed_at = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?string $description = null;
    public ?array $external_issue_reference = null;
    public ?string $external_issue_reference_id = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public ?string $incident_id = null;
    public ?array $label = null;
    public ?array $priority = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $updated_at = null;
}

/** Request payload for FollowUp#remove. */
class FollowUpRemoveMatch
{
    public string $id;
}

/** Incident entity data model. */
class Incident
{
    public ?string $call_url = null;
    public string $created_at;
    public array $creator;
    public array $custom_field_entry;
    public ?array $duration_metric = null;
    public array $external_issue_reference;
    public ?bool $has_debrief = null;
    public string $id;
    public string $idempotency_key;
    public array $incident;
    public array $incident_role_assignment;
    public array $incident_status;
    public ?string $incident_status_id = null;
    public ?array $incident_timestamp_value = null;
    public array $incident_type;
    public ?string $incident_type_id = null;
    public string $mode;
    public string $name;
    public bool $notify_incident_channel;
    public ?string $permalink = null;
    public ?array $postmortem_document_id = null;
    public ?string $postmortem_document_url = null;
    public string $reference;
    public ?array $retrospective_incident_option = null;
    public array $severity;
    public ?string $severity_id = null;
    public string $slack_channel_id;
    public ?string $slack_channel_name = null;
    public ?string $slack_channel_name_override = null;
    public string $slack_team_id;
    public ?string $source_message_channel_id = null;
    public ?string $source_message_timestamp = null;
    public string $status;
    public ?string $summary = null;
    public ?array $timestamp = null;
    public string $updated_at;
    public string $visibility;
    public ?float $workload_minutes_late = null;
    public ?float $workload_minutes_sleeping = null;
    public ?float $workload_minutes_total = null;
    public ?float $workload_minutes_working = null;
}

/** Request payload for Incident#load. */
class IncidentLoadMatch
{
    public string $id;
}

/** Request payload for Incident#list. */
class IncidentListMatch
{
    public ?string $call_url = null;
    public ?string $created_at = null;
    public ?array $creator = null;
    public ?array $custom_field_entry = null;
    public ?array $duration_metric = null;
    public ?array $external_issue_reference = null;
    public ?bool $has_debrief = null;
    public ?string $id = null;
    public ?string $idempotency_key = null;
    public ?array $incident = null;
    public ?array $incident_role_assignment = null;
    public ?array $incident_status = null;
    public ?string $incident_status_id = null;
    public ?array $incident_timestamp_value = null;
    public ?array $incident_type = null;
    public ?string $incident_type_id = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?bool $notify_incident_channel = null;
    public ?string $permalink = null;
    public ?array $postmortem_document_id = null;
    public ?string $postmortem_document_url = null;
    public ?string $reference = null;
    public ?array $retrospective_incident_option = null;
    public ?array $severity = null;
    public ?string $severity_id = null;
    public ?string $slack_channel_id = null;
    public ?string $slack_channel_name = null;
    public ?string $slack_channel_name_override = null;
    public ?string $slack_team_id = null;
    public ?string $source_message_channel_id = null;
    public ?string $source_message_timestamp = null;
    public ?string $status = null;
    public ?string $summary = null;
    public ?array $timestamp = null;
    public ?string $updated_at = null;
    public ?string $visibility = null;
    public ?float $workload_minutes_late = null;
    public ?float $workload_minutes_sleeping = null;
    public ?float $workload_minutes_total = null;
    public ?float $workload_minutes_working = null;
}

/** Request payload for Incident#create. */
class IncidentCreateData
{
    public ?string $call_url = null;
    public string $created_at;
    public array $creator;
    public array $custom_field_entry;
    public ?array $duration_metric = null;
    public array $external_issue_reference;
    public ?bool $has_debrief = null;
    public string $id;
    public string $idempotency_key;
    public array $incident;
    public array $incident_role_assignment;
    public array $incident_status;
    public ?string $incident_status_id = null;
    public ?array $incident_timestamp_value = null;
    public array $incident_type;
    public ?string $incident_type_id = null;
    public string $mode;
    public string $name;
    public bool $notify_incident_channel;
    public ?string $permalink = null;
    public ?array $postmortem_document_id = null;
    public ?string $postmortem_document_url = null;
    public string $reference;
    public ?array $retrospective_incident_option = null;
    public array $severity;
    public ?string $severity_id = null;
    public string $slack_channel_id;
    public ?string $slack_channel_name = null;
    public ?string $slack_channel_name_override = null;
    public string $slack_team_id;
    public ?string $source_message_channel_id = null;
    public ?string $source_message_timestamp = null;
    public string $status;
    public ?string $summary = null;
    public ?array $timestamp = null;
    public string $updated_at;
    public string $visibility;
    public ?float $workload_minutes_late = null;
    public ?float $workload_minutes_sleeping = null;
    public ?float $workload_minutes_total = null;
    public ?float $workload_minutes_working = null;
}

/** IncidentAlert entity data model. */
class IncidentAlert
{
    public array $alert;
    public ?string $alert_route_id = null;
    public string $id;
    public array $incident;
}

/** Request payload for IncidentAlert#list. */
class IncidentAlertListMatch
{
    public ?array $alert = null;
    public ?string $alert_route_id = null;
    public ?string $id = null;
    public ?array $incident = null;
}

/** IncidentAttachment entity data model. */
class IncidentAttachment
{
    public string $id;
    public string $incident_id;
    public array $resource;
}

/** Request payload for IncidentAttachment#list. */
class IncidentAttachmentListMatch
{
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?array $resource = null;
}

/** Request payload for IncidentAttachment#create. */
class IncidentAttachmentCreateData
{
    public string $id;
    public string $incident_id;
    public array $resource;
}

/** Request payload for IncidentAttachment#remove. */
class IncidentAttachmentRemoveMatch
{
    public string $id;
}

/** IncidentMembership entity data model. */
class IncidentMembership
{
    public string $incident_id;
    public string $user_id;
}

/** Request payload for IncidentMembership#create. */
class IncidentMembershipCreateData
{
    public string $incident_id;
    public string $user_id;
}

/** IncidentParticipant entity data model. */
class IncidentParticipant
{
    public array $active;
    public array $passive;
}

/** Request payload for IncidentParticipant#load. */
class IncidentParticipantLoadMatch
{
    public ?array $active = null;
    public ?array $passive = null;
}

/** IncidentParticipantWorkload entity data model. */
class IncidentParticipantWorkload
{
    public ?string $archived_at = null;
    public ?string $participant_type = null;
    public array $user;
    public array $workload;
}

/** Request payload for IncidentParticipantWorkload#list. */
class IncidentParticipantWorkloadListMatch
{
    public ?string $archived_at = null;
    public ?string $participant_type = null;
    public ?array $user = null;
    public ?array $workload = null;
}

/** IncidentRelationship entity data model. */
class IncidentRelationship
{
    public string $id;
    public array $incident;
}

/** Request payload for IncidentRelationship#list. */
class IncidentRelationshipListMatch
{
    public ?string $id = null;
    public ?array $incident = null;
}

/** IncidentRole entity data model. */
class IncidentRole
{
    public string $created_at;
    public string $description;
    public string $id;
    public string $instruction;
    public string $name;
    public ?bool $required = null;
    public string $role_type;
    public string $shortform;
    public string $updated_at;
}

/** Request payload for IncidentRole#load. */
class IncidentRoleLoadMatch
{
    public string $id;
}

/** Request payload for IncidentRole#list. */
class IncidentRoleListMatch
{
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $instruction = null;
    public ?string $name = null;
    public ?bool $required = null;
    public ?string $role_type = null;
    public ?string $shortform = null;
    public ?string $updated_at = null;
}

/** Request payload for IncidentRole#create. */
class IncidentRoleCreateData
{
    public string $created_at;
    public string $description;
    public string $id;
    public string $instruction;
    public string $name;
    public ?bool $required = null;
    public string $role_type;
    public string $shortform;
    public string $updated_at;
}

/** Request payload for IncidentRole#update. */
class IncidentRoleUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $instruction = null;
    public ?string $name = null;
    public ?bool $required = null;
    public ?string $role_type = null;
    public ?string $shortform = null;
    public ?string $updated_at = null;
}

/** Request payload for IncidentRole#remove. */
class IncidentRoleRemoveMatch
{
    public string $id;
}

/** IncidentStatus entity data model. */
class IncidentStatus
{
    public string $category;
    public string $created_at;
    public string $description;
    public string $id;
    public string $name;
    public int $rank;
    public string $updated_at;
}

/** Request payload for IncidentStatus#load. */
class IncidentStatusLoadMatch
{
    public string $id;
}

/** Request payload for IncidentStatus#list. */
class IncidentStatusListMatch
{
    public ?string $category = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?string $updated_at = null;
}

/** Request payload for IncidentStatus#create. */
class IncidentStatusCreateData
{
    public string $category;
    public string $created_at;
    public string $description;
    public string $id;
    public string $name;
    public int $rank;
    public string $updated_at;
}

/** Request payload for IncidentStatus#update. */
class IncidentStatusUpdateData
{
    public string $id;
    public ?string $category = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?string $updated_at = null;
}

/** Request payload for IncidentStatus#remove. */
class IncidentStatusRemoveMatch
{
    public string $id;
}

/** IncidentTimestamp entity data model. */
class IncidentTimestamp
{
    public string $id;
    public string $name;
    public int $rank;
}

/** Request payload for IncidentTimestamp#load. */
class IncidentTimestampLoadMatch
{
    public string $id;
}

/** Request payload for IncidentTimestamp#list. */
class IncidentTimestampListMatch
{
    public ?string $id = null;
    public ?string $name = null;
    public ?int $rank = null;
}

/** IncidentType entity data model. */
class IncidentType
{
    public string $create_in_triage;
    public string $created_at;
    public string $description;
    public string $id;
    public bool $is_default;
    public string $name;
    public ?array $owning_team_id = null;
    public bool $private_incidents_only;
    public string $updated_at;
}

/** Request payload for IncidentType#load. */
class IncidentTypeLoadMatch
{
    public string $id;
}

/** Request payload for IncidentType#list. */
class IncidentTypeListMatch
{
    public ?string $create_in_triage = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?bool $is_default = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?bool $private_incidents_only = null;
    public ?string $updated_at = null;
}

/** IncidentUpdate entity data model. */
class IncidentUpdate
{
    public string $created_at;
    public string $id;
    public string $incident_id;
    public ?string $merged_into_incident_id = null;
    public ?string $message = null;
    public array $new_incident_status;
    public array $new_severity;
    public array $updater;
}

/** Request payload for IncidentUpdate#list. */
class IncidentUpdateListMatch
{
    public ?string $created_at = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?string $merged_into_incident_id = null;
    public ?string $message = null;
    public ?array $new_incident_status = null;
    public ?array $new_severity = null;
    public ?array $updater = null;
}

/** IpAllowlist entity data model. */
class IpAllowlist
{
    public array $allowlist;
    public bool $enabled;
    public ?string $updated_at = null;
    public int $version;
}

/** Request payload for IpAllowlist#load. */
class IpAllowlistLoadMatch
{
    public ?array $allowlist = null;
    public ?bool $enabled = null;
    public ?string $updated_at = null;
    public ?int $version = null;
}

/** Request payload for IpAllowlist#update. */
class IpAllowlistUpdateData
{
    public ?array $allowlist = null;
    public ?bool $enabled = null;
    public ?string $updated_at = null;
    public ?int $version = null;
}

/** MaintenanceWindow entity data model. */
class MaintenanceWindow
{
    public array $alert_condition_group;
    public ?string $archived_at = null;
    public string $created_at;
    public string $end_at;
    public ?array $escalation_target = null;
    public string $id;
    public ?string $incident_id = null;
    public array $lead;
    public string $name;
    public ?string $notification_message = null;
    public ?array $notify_channel = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public bool $reroute_on_end;
    public bool $resolve_on_end;
    public bool $show_in_sidebar;
    public string $start_at;
    public string $updated_at;
}

/** Request payload for MaintenanceWindow#load. */
class MaintenanceWindowLoadMatch
{
    public string $id;
}

/** Request payload for MaintenanceWindow#list. */
class MaintenanceWindowListMatch
{
    public ?array $alert_condition_group = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $end_at = null;
    public ?array $escalation_target = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?array $lead = null;
    public ?string $name = null;
    public ?string $notification_message = null;
    public ?array $notify_channel = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public ?bool $reroute_on_end = null;
    public ?bool $resolve_on_end = null;
    public ?bool $show_in_sidebar = null;
    public ?string $start_at = null;
    public ?string $updated_at = null;
}

/** Request payload for MaintenanceWindow#create. */
class MaintenanceWindowCreateData
{
    public array $alert_condition_group;
    public ?string $archived_at = null;
    public string $created_at;
    public string $end_at;
    public ?array $escalation_target = null;
    public string $id;
    public ?string $incident_id = null;
    public array $lead;
    public string $name;
    public ?string $notification_message = null;
    public ?array $notify_channel = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public bool $reroute_on_end;
    public bool $resolve_on_end;
    public bool $show_in_sidebar;
    public string $start_at;
    public string $updated_at;
}

/** Request payload for MaintenanceWindow#update. */
class MaintenanceWindowUpdateData
{
    public string $id;
    public ?array $alert_condition_group = null;
    public ?string $archived_at = null;
    public ?string $created_at = null;
    public ?string $end_at = null;
    public ?array $escalation_target = null;
    public ?string $incident_id = null;
    public ?array $lead = null;
    public ?string $name = null;
    public ?string $notification_message = null;
    public ?array $notify_channel = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public ?bool $reroute_on_end = null;
    public ?bool $resolve_on_end = null;
    public ?bool $show_in_sidebar = null;
    public ?string $start_at = null;
    public ?string $updated_at = null;
}

/** Request payload for MaintenanceWindow#remove. */
class MaintenanceWindowRemoveMatch
{
    public string $id;
}

/** PostmortemDocument entity data model. */
class PostmortemDocument
{
    public string $created_at;
    public string $document_url;
    public array $editor;
    public array $exported_url;
    public string $id;
    public string $incident_id;
    public string $status;
    public string $title;
    public string $type;
    public string $updated_at;
}

/** Request payload for PostmortemDocument#load. */
class PostmortemDocumentLoadMatch
{
    public string $id;
}

/** Request payload for PostmortemDocument#list. */
class PostmortemDocumentListMatch
{
    public ?string $created_at = null;
    public ?string $document_url = null;
    public ?array $editor = null;
    public ?array $exported_url = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Request payload for PostmortemDocument#update. */
class PostmortemDocumentUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?string $document_url = null;
    public ?array $editor = null;
    public ?array $exported_url = null;
    public ?string $incident_id = null;
    public ?string $status = null;
    public ?string $title = null;
    public ?string $type = null;
    public ?string $updated_at = null;
}

/** Schedule entity data model. */
class Schedule
{
    public array $annotation;
    public array $config;
    public string $created_at;
    public ?array $current_shift = null;
    public array $holidays_public_config;
    public string $id;
    public string $name;
    public ?array $next_shift = null;
    public string $permalink;
    public array $schedule;
    public array $team_id;
    public string $timezone;
    public string $updated_at;
}

/** Request payload for Schedule#load. */
class ScheduleLoadMatch
{
    public string $id;
}

/** Request payload for Schedule#list. */
class ScheduleListMatch
{
    public ?array $annotation = null;
    public ?array $config = null;
    public ?string $created_at = null;
    public ?array $current_shift = null;
    public ?array $holidays_public_config = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $next_shift = null;
    public ?string $permalink = null;
    public ?array $schedule = null;
    public ?array $team_id = null;
    public ?string $timezone = null;
    public ?string $updated_at = null;
}

/** Request payload for Schedule#create. */
class ScheduleCreateData
{
    public array $annotation;
    public array $config;
    public string $created_at;
    public ?array $current_shift = null;
    public array $holidays_public_config;
    public string $id;
    public string $name;
    public ?array $next_shift = null;
    public string $permalink;
    public array $schedule;
    public array $team_id;
    public string $timezone;
    public string $updated_at;
}

/** Request payload for Schedule#update. */
class ScheduleUpdateData
{
    public string $id;
    public ?array $annotation = null;
    public ?array $config = null;
    public ?string $created_at = null;
    public ?array $current_shift = null;
    public ?array $holidays_public_config = null;
    public ?string $name = null;
    public ?array $next_shift = null;
    public ?string $permalink = null;
    public ?array $schedule = null;
    public ?array $team_id = null;
    public ?string $timezone = null;
    public ?string $updated_at = null;
}

/** Request payload for Schedule#remove. */
class ScheduleRemoveMatch
{
    public string $id;
}

/** ScheduleEntry entity data model. */
class ScheduleEntry
{
    public array $pagination_meta;
    public array $schedule_entry;
}

/** Request payload for ScheduleEntry#load. */
class ScheduleEntryLoadMatch
{
    public ?array $pagination_meta = null;
    public ?array $schedule_entry = null;
}

/** ScheduleReplica entity data model. */
class ScheduleReplica
{
    public string $created_at;
    public string $id;
    public ?string $last_sync_error = null;
    public ?string $last_synced_at = null;
    public ?int $mirror_window_day = null;
    public string $replica_fallback_user_id;
    public string $replica_provider;
    public string $replica_provider_id;
    public string $schedule_id;
    public array $schedule_replica;
    public array $source;
    public string $updated_at;
    public array $user_status;
}

/** Request payload for ScheduleReplica#load. */
class ScheduleReplicaLoadMatch
{
    public string $id;
    public string $schedule_id;
}

/** Request payload for ScheduleReplica#list. */
class ScheduleReplicaListMatch
{
    public string $id;
}

/** Request payload for ScheduleReplica#create. */
class ScheduleReplicaCreateData
{
    public string $id;
    public string $created_at;
    public ?string $last_sync_error = null;
    public ?string $last_synced_at = null;
    public ?int $mirror_window_day = null;
    public string $replica_fallback_user_id;
    public string $replica_provider;
    public string $replica_provider_id;
    public string $schedule_id;
    public array $schedule_replica;
    public array $source;
    public string $updated_at;
    public array $user_status;
}

/** ScheduleSyncRule entity data model. */
class ScheduleSyncRule
{
    public ?array $annotation = null;
    public string $created_at;
    public string $id;
    public array $permanent_member_user_id;
    public ?string $rotation_id = null;
    public string $schedule_id;
    public array $schedule_sync_rule;
    public array $schedule_sync_target;
    public string $schedule_sync_target_id;
    public string $sync_type;
    public string $updated_at;
}

/** Request payload for ScheduleSyncRule#load. */
class ScheduleSyncRuleLoadMatch
{
    public string $id;
    public string $schedule_id;
}

/** Request payload for ScheduleSyncRule#list. */
class ScheduleSyncRuleListMatch
{
    public string $id;
}

/** Request payload for ScheduleSyncRule#create. */
class ScheduleSyncRuleCreateData
{
    public string $id;
    public ?array $annotation = null;
    public string $created_at;
    public array $permanent_member_user_id;
    public ?string $rotation_id = null;
    public string $schedule_id;
    public array $schedule_sync_rule;
    public array $schedule_sync_target;
    public string $schedule_sync_target_id;
    public string $sync_type;
    public string $updated_at;
}

/** Request payload for ScheduleSyncRule#update. */
class ScheduleSyncRuleUpdateData
{
    public string $id;
    public string $schedule_id;
    public ?array $annotation = null;
    public ?string $created_at = null;
    public ?array $permanent_member_user_id = null;
    public ?string $rotation_id = null;
    public ?array $schedule_sync_rule = null;
    public ?array $schedule_sync_target = null;
    public ?string $schedule_sync_target_id = null;
    public ?string $sync_type = null;
    public ?string $updated_at = null;
}

/** ScheduleSyncTarget entity data model. */
class ScheduleSyncTarget
{
    public bool $add_bot_to_group;
    public ?array $annotation = null;
    public string $created_at;
    public string $id;
    public array $linked_schedule;
    public array $schedule_sync_target;
    public string $slack_team_id;
    public string $slack_user_group_id;
    public string $updated_at;
}

/** Request payload for ScheduleSyncTarget#load. */
class ScheduleSyncTargetLoadMatch
{
    public string $id;
}

/** Request payload for ScheduleSyncTarget#list. */
class ScheduleSyncTargetListMatch
{
    public ?bool $add_bot_to_group = null;
    public ?array $annotation = null;
    public ?string $created_at = null;
    public ?string $id = null;
    public ?array $linked_schedule = null;
    public ?array $schedule_sync_target = null;
    public ?string $slack_team_id = null;
    public ?string $slack_user_group_id = null;
    public ?string $updated_at = null;
}

/** Request payload for ScheduleSyncTarget#create. */
class ScheduleSyncTargetCreateData
{
    public bool $add_bot_to_group;
    public ?array $annotation = null;
    public string $created_at;
    public string $id;
    public array $linked_schedule;
    public array $schedule_sync_target;
    public string $slack_team_id;
    public string $slack_user_group_id;
    public string $updated_at;
}

/** Request payload for ScheduleSyncTarget#update. */
class ScheduleSyncTargetUpdateData
{
    public string $id;
    public ?bool $add_bot_to_group = null;
    public ?array $annotation = null;
    public ?string $created_at = null;
    public ?array $linked_schedule = null;
    public ?array $schedule_sync_target = null;
    public ?string $slack_team_id = null;
    public ?string $slack_user_group_id = null;
    public ?string $updated_at = null;
}

/** Request payload for ScheduleSyncTarget#remove. */
class ScheduleSyncTargetRemoveMatch
{
    public string $id;
}

/** Secret entity data model. */
class Secret
{
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public ?string $last_four_char = null;
    public string $name;
    public array $owning_team_id;
    public array $secret;
    public string $updated_at;
    public string $value;
    public array $version;
}

/** Request payload for Secret#load. */
class SecretLoadMatch
{
    public string $id;
}

/** Request payload for Secret#list. */
class SecretListMatch
{
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $last_four_char = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?array $secret = null;
    public ?string $updated_at = null;
    public ?string $value = null;
    public ?array $version = null;
}

/** Request payload for Secret#create. */
class SecretCreateData
{
    public string $created_at;
    public ?string $description = null;
    public string $id;
    public ?string $last_four_char = null;
    public string $name;
    public array $owning_team_id;
    public array $secret;
    public string $updated_at;
    public string $value;
    public array $version;
}

/** Request payload for Secret#update. */
class SecretUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $last_four_char = null;
    public ?string $name = null;
    public ?array $owning_team_id = null;
    public ?array $secret = null;
    public ?string $updated_at = null;
    public ?string $value = null;
    public ?array $version = null;
}

/** Request payload for Secret#remove. */
class SecretRemoveMatch
{
    public string $id;
}

/** Severity entity data model. */
class Severity
{
    public string $created_at;
    public string $description;
    public string $id;
    public string $name;
    public int $rank;
    public string $updated_at;
}

/** Request payload for Severity#load. */
class SeverityLoadMatch
{
    public string $id;
}

/** Request payload for Severity#list. */
class SeverityListMatch
{
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?string $updated_at = null;
}

/** Request payload for Severity#create. */
class SeverityCreateData
{
    public string $created_at;
    public string $description;
    public string $id;
    public string $name;
    public int $rank;
    public string $updated_at;
}

/** Request payload for Severity#update. */
class SeverityUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?string $updated_at = null;
}

/** StatusPage entity data model. */
class StatusPage
{
    public ?string $description = null;
    public string $id;
    public string $name;
    public ?string $public_url = null;
}

/** Request payload for StatusPage#list. */
class StatusPageListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $public_url = null;
}

/** StatusPageIncident entity data model. */
class StatusPageIncident
{
    public array $component_impact;
    public ?array $component_status = null;
    public string $id;
    public string $idempotency_key;
    public string $incident_status;
    public string $message;
    public string $name;
    public bool $notify_subscriber;
    public string $published_at;
    public string $status_page_id;
    public array $update;
}

/** Request payload for StatusPageIncident#load. */
class StatusPageIncidentLoadMatch
{
    public string $id;
}

/** Request payload for StatusPageIncident#list. */
class StatusPageIncidentListMatch
{
    public ?array $component_impact = null;
    public ?array $component_status = null;
    public ?string $id = null;
    public ?string $idempotency_key = null;
    public ?string $incident_status = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?bool $notify_subscriber = null;
    public ?string $published_at = null;
    public ?string $status_page_id = null;
    public ?array $update = null;
}

/** Request payload for StatusPageIncident#create. */
class StatusPageIncidentCreateData
{
    public array $component_impact;
    public ?array $component_status = null;
    public string $id;
    public string $idempotency_key;
    public string $incident_status;
    public string $message;
    public string $name;
    public bool $notify_subscriber;
    public string $published_at;
    public string $status_page_id;
    public array $update;
}

/** Request payload for StatusPageIncident#update. */
class StatusPageIncidentUpdateData
{
    public string $id;
    public ?array $component_impact = null;
    public ?array $component_status = null;
    public ?string $idempotency_key = null;
    public ?string $incident_status = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?bool $notify_subscriber = null;
    public ?string $published_at = null;
    public ?string $status_page_id = null;
    public ?array $update = null;
}

/** StatusPageIncidentUpdate entity data model. */
class StatusPageIncidentUpdate
{
    public ?array $component_status = null;
    public ?string $incident_status = null;
    public string $message;
    public bool $notify_subscriber;
    public string $status_page_incident_id;
}

/** Request payload for StatusPageIncidentUpdate#create. */
class StatusPageIncidentUpdateCreateData
{
    public ?array $component_status = null;
    public ?string $incident_status = null;
    public string $message;
    public bool $notify_subscriber;
    public string $status_page_incident_id;
}

/** StatusPageMaintenance entity data model. */
class StatusPageMaintenance
{
    public array $affected_component_id;
    public array $component_maintenance_period;
    public string $end_at;
    public string $id;
    public string $idempotency_key;
    public string $maintenance_status;
    public string $message;
    public string $name;
    public bool $notify_subscriber;
    public string $published_at;
    public string $start_at;
    public string $status_page_id;
    public array $update;
}

/** Request payload for StatusPageMaintenance#load. */
class StatusPageMaintenanceLoadMatch
{
    public string $id;
}

/** Request payload for StatusPageMaintenance#list. */
class StatusPageMaintenanceListMatch
{
    public ?array $affected_component_id = null;
    public ?array $component_maintenance_period = null;
    public ?string $end_at = null;
    public ?string $id = null;
    public ?string $idempotency_key = null;
    public ?string $maintenance_status = null;
    public ?string $message = null;
    public ?string $name = null;
    public ?bool $notify_subscriber = null;
    public ?string $published_at = null;
    public ?string $start_at = null;
    public ?string $status_page_id = null;
    public ?array $update = null;
}

/** Request payload for StatusPageMaintenance#create. */
class StatusPageMaintenanceCreateData
{
    public array $affected_component_id;
    public array $component_maintenance_period;
    public string $end_at;
    public string $id;
    public string $idempotency_key;
    public string $maintenance_status;
    public string $message;
    public string $name;
    public bool $notify_subscriber;
    public string $published_at;
    public string $start_at;
    public string $status_page_id;
    public array $update;
}

/** StatusPageMaintenanceUpdate entity data model. */
class StatusPageMaintenanceUpdate
{
    public ?array $component_status = null;
    public ?string $maintenance_status = null;
    public string $message;
    public bool $notify_subscriber;
    public string $status_page_maintenance_id;
}

/** Request payload for StatusPageMaintenanceUpdate#create. */
class StatusPageMaintenanceUpdateCreateData
{
    public ?array $component_status = null;
    public ?string $maintenance_status = null;
    public string $message;
    public bool $notify_subscriber;
    public string $status_page_maintenance_id;
}

/** StatusPageStructure entity data model. */
class StatusPageStructure
{
    public array $item;
}

/** Request payload for StatusPageStructure#load. */
class StatusPageStructureLoadMatch
{
    public string $id;
}

/** Team entity data model. */
class Team
{
    public array $catalog_entry;
    public string $id;
    public array $member;
    public string $name;
}

/** Request payload for Team#load. */
class TeamLoadMatch
{
    public string $id;
}

/** Request payload for Team#list. */
class TeamListMatch
{
    public ?array $catalog_entry = null;
    public ?string $id = null;
    public ?array $member = null;
    public ?string $name = null;
}

/** TelemetryDataSource entity data model. */
class TelemetryDataSource
{
    public string $created_at;
    public ?array $datadog_config = null;
    public bool $enabled;
    public ?array $grafana_config = null;
    public string $id;
    public string $name;
    public string $provider;
    public string $source_type;
    public string $updated_at;
    public ?string $version = null;
}

/** Request payload for TelemetryDataSource#update. */
class TelemetryDataSourceUpdateData
{
    public string $id;
    public ?string $created_at = null;
    public ?array $datadog_config = null;
    public ?bool $enabled = null;
    public ?array $grafana_config = null;
    public ?string $name = null;
    public ?string $provider = null;
    public ?string $source_type = null;
    public ?string $updated_at = null;
    public ?string $version = null;
}

/** User entity data model. */
class User
{
    public array $base_role;
    public array $custom_role;
    public ?string $email = null;
    public string $id;
    public bool $is_active;
    public string $name;
    public string $role;
    public array $seat;
    public ?string $slack_user_id = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public string $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?array $base_role = null;
    public ?array $custom_role = null;
    public ?string $email = null;
    public ?string $id = null;
    public ?bool $is_active = null;
    public ?string $name = null;
    public ?string $role = null;
    public ?array $seat = null;
    public ?string $slack_user_id = null;
}

/** Workflow entity data model. */
class Workflow
{
    public ?array $annotation = null;
    public array $condition_group;
    public bool $continue_on_step_error;
    public array $delay;
    public array $expression;
    public ?string $folder = null;
    public ?array $form_field = null;
    public string $id;
    public ?bool $include_private_escalation = null;
    public ?bool $include_private_incident = null;
    public array $management_meta;
    public string $name;
    public array $once_for;
    public ?array $owning_team_id = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public string $runs_on_incident;
    public array $runs_on_incident_mode;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrade = null;
    public ?string $state = null;
    public array $step;
    public string $trigger;
    public int $version;
    public array $workflow;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $id;
}

/** Request payload for Workflow#list. */
class WorkflowListMatch
{
    public ?array $annotation = null;
    public ?array $condition_group = null;
    public ?bool $continue_on_step_error = null;
    public ?array $delay = null;
    public ?array $expression = null;
    public ?string $folder = null;
    public ?array $form_field = null;
    public ?string $id = null;
    public ?bool $include_private_escalation = null;
    public ?bool $include_private_incident = null;
    public ?array $management_meta = null;
    public ?string $name = null;
    public ?array $once_for = null;
    public ?array $owning_team_id = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public ?string $runs_on_incident = null;
    public ?array $runs_on_incident_mode = null;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrade = null;
    public ?string $state = null;
    public ?array $step = null;
    public ?string $trigger = null;
    public ?int $version = null;
    public ?array $workflow = null;
}

/** Request payload for Workflow#create. */
class WorkflowCreateData
{
    public ?array $annotation = null;
    public array $condition_group;
    public bool $continue_on_step_error;
    public array $delay;
    public array $expression;
    public ?string $folder = null;
    public ?array $form_field = null;
    public string $id;
    public ?bool $include_private_escalation = null;
    public ?bool $include_private_incident = null;
    public array $management_meta;
    public string $name;
    public array $once_for;
    public ?array $owning_team_id = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public string $runs_on_incident;
    public array $runs_on_incident_mode;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrade = null;
    public ?string $state = null;
    public array $step;
    public string $trigger;
    public int $version;
    public array $workflow;
}

/** Request payload for Workflow#update. */
class WorkflowUpdateData
{
    public string $id;
    public ?array $annotation = null;
    public ?array $condition_group = null;
    public ?bool $continue_on_step_error = null;
    public ?array $delay = null;
    public ?array $expression = null;
    public ?string $folder = null;
    public ?array $form_field = null;
    public ?bool $include_private_escalation = null;
    public ?bool $include_private_incident = null;
    public ?array $management_meta = null;
    public ?string $name = null;
    public ?array $once_for = null;
    public ?array $owning_team_id = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public ?string $runs_on_incident = null;
    public ?array $runs_on_incident_mode = null;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrade = null;
    public ?string $state = null;
    public ?array $step = null;
    public ?string $trigger = null;
    public ?int $version = null;
    public ?array $workflow = null;
}

/** Request payload for Workflow#remove. */
class WorkflowRemoveMatch
{
    public string $id;
}

/** WorkflowRun entity data model. */
class WorkflowRun
{
    public ?string $cancelled_at = null;
    public string $created_at;
    public ?string $enqueued_at = null;
    public ?string $error = null;
    public string $id;
    public ?string $incident_id = null;
    public ?string $incident_reference = null;
    public array $progress;
    public string $scheduled_at;
    public string $updated_at;
    public string $workflow_id;
    public ?string $workflow_name = null;
    public string $workflow_version_id;
    public int $workflow_version_number;
}

/** Request payload for WorkflowRun#load. */
class WorkflowRunLoadMatch
{
    public string $id;
}

/** Request payload for WorkflowRun#list. */
class WorkflowRunListMatch
{
    public ?string $cancelled_at = null;
    public ?string $created_at = null;
    public ?string $enqueued_at = null;
    public ?string $error = null;
    public ?string $id = null;
    public ?string $incident_id = null;
    public ?string $incident_reference = null;
    public ?array $progress = null;
    public ?string $scheduled_at = null;
    public ?string $updated_at = null;
    public ?string $workflow_id = null;
    public ?string $workflow_name = null;
    public ?string $workflow_version_id = null;
    public ?int $workflow_version_number = null;
}


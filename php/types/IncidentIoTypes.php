<?php
declare(strict_types=1);

// Typed models for the IncidentIo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
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
    public string $description;
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
    public ?string $after = null;
    public ?array $created_at = null;
    public ?string $incident_id = null;
    public ?string $incident_mode = null;
    public ?int $page_size = null;
    public ?array $updated_at = null;
}

/** Request payload for Action#create. */
class ActionCreateData
{
    public ?string $assignee_id = null;
    public string $description;
    public string $incident_id;
}

/** Request payload for Action#update. */
class ActionUpdateData
{
    public string $id;
    public ?string $assignee_id = null;
    public ?string $description = null;
    public ?string $status = null;
}

/** Request payload for Action#remove. */
class ActionRemoveMatch
{
    public string $id;
}

/** Alert entity data model. */
class Alert
{
    public ?array $alert_group_ids = null;
    public string $alert_source_id;
    public array $attributes;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public string $id;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public ?array $tags = null;
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
    public ?string $after = null;
    public ?array $alert_group_id = null;
    public ?array $alert_source = null;
    public ?array $attribute = null;
    public ?array $created_at = null;
    public ?array $deduplication_key = null;
    public ?array $has_note = null;
    public ?array $include_maintenance_window = null;
    public int $page_size;
    public ?array $status = null;
    public ?array $tag = null;
    public ?array $updated_at = null;
}

/** Request payload for Alert#create. */
class AlertCreateData
{
    public string $id;
    public ?array $alert_group_ids = null;
    public string $alert_source_id;
    public array $attributes;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public ?array $tags = null;
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
    public string $name;
    public ?bool $required = null;
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

/** AlertEventsV2 entity data model. */
class AlertEventsV2
{
    public string $deduplication_key;
    public ?string $description = null;
    public string $message;
    public ?array $metadata = null;
    public ?string $source_url = null;
    public string $status;
    public string $title;
}

/** Request payload for AlertEventsV2#create. */
class AlertEventsV2CreateData
{
    public string $alert_source_config_id;
    public ?array $query = null;
    public ?string $token = null;
    public ?string $deduplication_key = null;
    public ?string $description = null;
    public ?array $metadata = null;
    public ?string $source_url = null;
    public string $status;
    public string $title;
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
    public array $images;
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
    public ?string $after = null;
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public ?int $page_size = null;
}

/** Request payload for AlertNote#create. */
class AlertNoteCreateData
{
    public ?string $alert_group_id = null;
    public ?string $alert_id = null;
    public string $content;
}

/** Request payload for AlertNote#update. */
class AlertNoteUpdateData
{
    public string $id;
    public ?string $content = null;
}

/** Request payload for AlertNote#remove. */
class AlertNoteRemoveMatch
{
    public string $id;
}

/** AlertRoute entity data model. */
class AlertRoute
{
    public array $alert_sources;
    public array $condition_groups;
    public ?string $created_at = null;
    public bool $enabled;
    public array $escalation_config;
    public array $expressions;
    public array $grouping_config;
    public string $id;
    public array $incident_config;
    public bool $is_private;
    public array $message_config;
    public string $name;
    public ?array $owning_team_ids = null;
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
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for AlertRoute#create. */
class AlertRouteCreateData
{
    public array $alert_sources;
    public array $condition_groups;
    public bool $enabled;
    public array $escalation_config;
    public array $expressions;
    public array $grouping_config;
    public array $incident_config;
    public bool $is_private;
    public array $message_config;
    public string $name;
    public ?array $owning_team_ids = null;
}

/** Request payload for AlertRoute#update. */
class AlertRouteUpdateData
{
    public string $id;
    public ?array $alert_sources = null;
    public ?array $condition_groups = null;
    public ?bool $enabled = null;
    public ?array $escalation_config = null;
    public ?array $expressions = null;
    public ?array $grouping_config = null;
    public ?array $incident_config = null;
    public ?bool $is_private = null;
    public ?array $message_config = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
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
    public ?bool $auto_resolve_incident_alerts = null;
    public ?int $auto_resolve_timeout_minutes = null;
    public array $azure_devops_options;
    public ?bool $disabled = null;
    public array $email_options;
    public ?array $filter_condition_groups = null;
    public ?string $fixed_team_id = null;
    public array $heartbeat_options;
    public array $http_custom_options;
    public string $id;
    public array $jira_options;
    public string $name;
    public ?array $owning_team_ids = null;
    public array $rate_limit_sharding;
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
    public ?bool $auto_resolve_incident_alerts = null;
    public ?int $auto_resolve_timeout_minutes = null;
    public ?array $azure_devops_options = null;
    public ?bool $disabled = null;
    public ?array $email_options = null;
    public ?array $filter_condition_groups = null;
    public ?string $fixed_team_id = null;
    public ?array $heartbeat_options = null;
    public ?array $http_custom_options = null;
    public ?string $id = null;
    public ?array $jira_options = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
    public ?array $rate_limit_sharding = null;
    public ?string $secret_token = null;
    public ?string $source_type = null;
    public ?array $template = null;
}

/** Request payload for AlertSource#create. */
class AlertSourceCreateData
{
    public ?bool $auto_resolve_incident_alerts = null;
    public ?int $auto_resolve_timeout_minutes = null;
    public array $azure_devops_options;
    public array $email_options;
    public ?array $filter_condition_groups = null;
    public ?string $fixed_team_id = null;
    public array $heartbeat_options;
    public array $http_custom_options;
    public array $jira_options;
    public string $name;
    public ?array $owning_team_ids = null;
    public array $rate_limit_sharding;
    public string $source_type;
    public array $template;
}

/** Request payload for AlertSource#update. */
class AlertSourceUpdateData
{
    public string $id;
    public ?bool $auto_resolve_incident_alerts = null;
    public ?int $auto_resolve_timeout_minutes = null;
    public ?array $azure_devops_options = null;
    public ?bool $disabled = null;
    public ?array $email_options = null;
    public ?array $filter_condition_groups = null;
    public ?string $fixed_team_id = null;
    public ?array $heartbeat_options = null;
    public ?array $http_custom_options = null;
    public ?array $jira_options = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
    public ?array $rate_limit_sharding = null;
    public ?array $template = null;
}

/** Request payload for AlertSource#remove. */
class AlertSourceRemoveMatch
{
    public string $id;
}

/** AlertSourcesV2 entity data model. */
class AlertSourcesV2
{
    public ?array $owning_team_ids = null;
    public string $source_type;
    public array $template;
}

/** Request payload for AlertSourcesV2#create. */
class AlertSourcesV2CreateData
{
    public ?array $owning_team_ids = null;
    public string $source_type;
    public array $template;
}

/** AlertTag entity data model. */
class AlertTag
{
    public ?array $alert_group_ids = null;
    public string $alert_source_id;
    public array $attributes;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public string $id;
    public string $name;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public ?array $tags = null;
    public string $title;
    public string $updated_at;
}

/** Request payload for AlertTag#list. */
class AlertTagListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
    public ?string $search = null;
}

/** Request payload for AlertTag#create. */
class AlertTagCreateData
{
    public string $alert_id;
    public array $tags;
}

/** AlertsAddTagsResultV2 entity data model. */
class AlertsAddTagsResultV2
{
    public ?array $alert_group_ids = null;
    public string $alert_source_id;
    public array $attributes;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public string $id;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public ?array $tags = null;
    public string $title;
    public string $updated_at;
}

/** Request payload for AlertsAddTagsResultV2#create. */
class AlertsAddTagsResultV2CreateData
{
    public string $alert_id;
    public array $tags;
}

/** AlertsSetTagsResultV2 entity data model. */
class AlertsSetTagsResultV2
{
    public ?array $alert_group_ids = null;
    public string $alert_source_id;
    public array $attributes;
    public string $created_at;
    public string $deduplication_key;
    public ?string $description = null;
    public string $id;
    public ?string $resolved_at = null;
    public ?string $source_url = null;
    public string $status;
    public ?array $tags = null;
    public string $title;
    public string $updated_at;
}

/** Request payload for AlertsSetTagsResultV2#create. */
class AlertsSetTagsResultV2CreateData
{
    public string $alert_id;
    public array $tags;
}

/** AlertsTransitionIncidentAlertResultV2 entity data model. */
class AlertsTransitionIncidentAlertResultV2
{
    public array $alert;
    public string $alert_id;
    public ?string $alert_route_id = null;
    public string $id;
    public array $incident;
    public string $incident_id;
    public ?bool $re_relate = null;
    public string $state;
}

/** Request payload for AlertsTransitionIncidentAlertResultV2#list. */
class AlertsTransitionIncidentAlertResultV2ListMatch
{
    public ?string $after = null;
    public ?string $alert_id = null;
    public ?string $incident_id = null;
    public int $page_size;
}

/** Request payload for AlertsTransitionIncidentAlertResultV2#create. */
class AlertsTransitionIncidentAlertResultV2CreateData
{
    public string $alert_id;
    public string $incident_id;
    public ?bool $re_relate = null;
    public string $state;
}

/** AnnouncementRule entity data model. */
class AnnouncementRule
{
    public array $condition_groups;
    public string $conditions_no_longer_apply_behaviour;
    public string $created_at;
    public string $id;
    public array $microsoft_teams_channel_ids;
    public string $mode;
    public string $name;
    public array $owning_team_ids;
    public ?string $private_incident_scope = null;
    public array $slack_channel_ids;
    public ?string $template_id = null;
    public string $update_sharing_mode;
    public string $updated_at;
}

/** Request payload for AnnouncementRule#load. */
class AnnouncementRuleLoadMatch
{
    public string $id;
}

/** Request payload for AnnouncementRule#list. */
class AnnouncementRuleListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for AnnouncementRule#create. */
class AnnouncementRuleCreateData
{
    public array $condition_groups;
    public ?string $conditions_no_longer_apply_behaviour = null;
    public ?array $microsoft_teams_channel_ids = null;
    public string $mode;
    public string $name;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public ?array $slack_channel_ids = null;
    public ?string $template_id = null;
    public string $update_sharing_mode;
}

/** Request payload for AnnouncementRule#update. */
class AnnouncementRuleUpdateData
{
    public string $id;
    public ?array $condition_groups = null;
    public ?string $conditions_no_longer_apply_behaviour = null;
    public ?array $microsoft_teams_channel_ids = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public ?array $slack_channel_ids = null;
    public ?string $template_id = null;
    public ?string $update_sharing_mode = null;
}

/** Request payload for AnnouncementRule#remove. */
class AnnouncementRuleRemoveMatch
{
    public string $id;
}

/** AnnouncementTemplate entity data model. */
class AnnouncementTemplate
{
    public array $actions;
    public array $fields;
    public string $id;
    public bool $is_default;
    public string $name;
    public array $owning_team_ids;
}

/** Request payload for AnnouncementTemplate#load. */
class AnnouncementTemplateLoadMatch
{
    public string $id;
}

/** Request payload for AnnouncementTemplate#list. */
class AnnouncementTemplateListMatch
{
    public ?array $actions = null;
    public ?array $fields = null;
    public ?string $id = null;
    public ?bool $is_default = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
}

/** Request payload for AnnouncementTemplate#create. */
class AnnouncementTemplateCreateData
{
    public ?array $actions = null;
    public ?array $fields = null;
    public string $name;
    public ?array $owning_team_ids = null;
}

/** Request payload for AnnouncementTemplate#update. */
class AnnouncementTemplateUpdateData
{
    public string $id;
    public ?array $actions = null;
    public ?array $fields = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
}

/** Request payload for AnnouncementTemplate#remove. */
class AnnouncementTemplateRemoveMatch
{
    public string $id;
}

/** ApiKey entity data model. */
class ApiKey
{
    public ?string $comments = null;
    public string $created_at;
    public array $creator;
    public string $id;
    public ?string $last_used_at = null;
    public string $name;
    public array $role_names;
    public array $roles;
    public array $team_ids;
    public array $team_role_names;
    public array $team_roles;
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
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for ApiKey#create. */
class ApiKeyCreateData
{
    public ?string $comments = null;
    public string $name;
    public array $role_names;
    public array $team_ids;
    public array $team_role_names;
}

/** Request payload for ApiKey#update. */
class ApiKeyUpdateData
{
    public string $id;
    public ?string $comments = null;
    public ?string $name = null;
    public ?array $role_names = null;
    public ?array $team_ids = null;
    public ?array $team_role_names = null;
}

/** Request payload for ApiKey#remove. */
class ApiKeyRemoveMatch
{
    public string $id;
}

/** CallRoute entity data model. */
class CallRoute
{
    public array $allowed_callers;
    public ?string $country_code = null;
    public string $created_at;
    public string $current_state;
    public string $custom_language;
    public string $id;
    public string $name;
    public array $options;
    public array $path;
    public ?string $phone_number = null;
    public ?string $phone_number_type = null;
    public string $responder_caller_id;
    public string $updated_at;
    public bool $use_caller_allowlist;
}

/** Request payload for CallRoute#load. */
class CallRouteLoadMatch
{
    public string $id;
}

/** Request payload for CallRoute#list. */
class CallRouteListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for CallRoute#update. */
class CallRouteUpdateData
{
    public string $id;
    public ?string $custom_language = null;
    public ?string $name = null;
    public ?array $path = null;
    public ?string $responder_caller_id = null;
    public ?bool $use_caller_allowlist = null;
}

/** CallRouteAllowedCaller entity data model. */
class CallRouteAllowedCaller
{
    public string $id;
    public ?string $name = null;
    public string $phone_number;
}

/** Request payload for CallRouteAllowedCaller#load. */
class CallRouteAllowedCallerLoadMatch
{
    public string $call_route_id;
    public string $id;
}

/** Request payload for CallRouteAllowedCaller#list. */
class CallRouteAllowedCallerListMatch
{
    public string $id;
}

/** Request payload for CallRouteAllowedCaller#create. */
class CallRouteAllowedCallerCreateData
{
    public string $id;
    public ?string $name = null;
    public string $phone_number;
}

/** Request payload for CallRouteAllowedCaller#update. */
class CallRouteAllowedCallerUpdateData
{
    public string $call_route_id;
    public string $id;
    public ?string $name = null;
    public ?string $phone_number = null;
}

/** Request payload for CallRouteAllowedCaller#remove. */
class CallRouteAllowedCallerRemoveMatch
{
    public string $call_route_id;
    public string $id;
}

/** CallRouteOption entity data model. */
class CallRouteOption
{
    public string $digit;
    public string $id;
    public array $path;
    public string $prompt;
}

/** Request payload for CallRouteOption#load. */
class CallRouteOptionLoadMatch
{
    public string $call_route_id;
    public string $id;
}

/** Request payload for CallRouteOption#list. */
class CallRouteOptionListMatch
{
    public string $id;
}

/** Request payload for CallRouteOption#create. */
class CallRouteOptionCreateData
{
    public string $id;
    public string $digit;
    public array $path;
    public string $prompt;
}

/** Request payload for CallRouteOption#update. */
class CallRouteOptionUpdateData
{
    public string $call_route_id;
    public string $id;
    public ?string $digit = null;
    public ?array $path = null;
    public ?string $prompt = null;
}

/** Request payload for CallRouteOption#remove. */
class CallRouteOptionRemoveMatch
{
    public string $call_route_id;
    public string $id;
}

/** CallSession entity data model. */
class CallSession
{
    public ?string $ended_at = null;
    public string $id;
    public string $incident_id;
    public string $started_at;
}

/** Request payload for CallSession#list. */
class CallSessionListMatch
{
    public ?string $after = null;
    public string $incident_id;
    public ?int $page_size = null;
}

/** CallTranscriptEntry entity data model. */
class CallTranscriptEntry
{
    public string $content;
    public string $id;
    public string $medium;
    public string $participant_name;
    public string $timestamp;
}

/** Request payload for CallTranscriptEntry#list. */
class CallTranscriptEntryListMatch
{
    public ?string $after = null;
    public string $call_session_id;
    public ?int $page_size = null;
}

/** CatalogEntry entity data model. */
class CatalogEntry
{
    public ?array $aliases = null;
    public ?string $archived_at = null;
    public array $attribute_values;
    public array $catalog_entry;
    public array $catalog_type;
    public string $catalog_type_id;
    public string $created_at;
    public ?string $external_id = null;
    public string $id;
    public string $name;
    public ?int $rank = null;
    public ?array $update_attributes = null;
    public string $updated_at;
}

/** Request payload for CatalogEntry#load. */
class CatalogEntryLoadMatch
{
    public string $id;
    public ?bool $expand = null;
}

/** Request payload for CatalogEntry#list. */
class CatalogEntryListMatch
{
    public ?string $after = null;
    public string $catalog_type_id;
    public ?string $identifier = null;
    public int $page_size;
}

/** Request payload for CatalogEntry#create. */
class CatalogEntryCreateData
{
    public ?array $aliases = null;
    public array $attribute_values;
    public string $catalog_type_id;
    public ?string $external_id = null;
    public string $name;
    public ?int $rank = null;
}

/** Request payload for CatalogEntry#update. */
class CatalogEntryUpdateData
{
    public string $id;
    public ?array $aliases = null;
    public ?array $attribute_values = null;
    public ?string $external_id = null;
    public ?string $name = null;
    public ?int $rank = null;
    public ?array $update_attributes = null;
}

/** Request payload for CatalogEntry#remove. */
class CatalogEntryRemoveMatch
{
    public string $id;
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
    public array $annotations;
    public array $categories;
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
    public ?array $owning_team_ids = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integrations = null;
    public array $schema;
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
    public ?array $annotations = null;
    public ?array $categories = null;
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
    public ?array $owning_team_ids = null;
    public ?bool $ranked = null;
    public ?string $registry_type = null;
    public ?array $required_integrations = null;
    public ?array $schema = null;
    public ?string $source_repo_url = null;
    public ?string $type_name = null;
    public ?string $updated_at = null;
    public ?bool $use_name_as_identifier = null;
}

/** Request payload for CatalogType#create. */
class CatalogTypeCreateData
{
    public ?array $annotations = null;
    public ?array $categories = null;
    public ?string $color = null;
    public string $description;
    public ?string $icon = null;
    public string $name;
    public ?array $owning_team_ids = null;
    public ?bool $ranked = null;
    public ?string $source_repo_url = null;
    public ?string $type_name = null;
    public ?bool $use_name_as_identifier = null;
}

/** Request payload for CatalogType#update. */
class CatalogTypeUpdateData
{
    public string $id;
    public ?array $annotations = null;
    public ?array $categories = null;
    public ?string $color = null;
    public ?string $description = null;
    public ?string $icon = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
    public ?bool $ranked = null;
    public ?string $source_repo_url = null;
    public ?bool $use_name_as_identifier = null;
}

/** Request payload for CatalogType#remove. */
class CatalogTypeRemoveMatch
{
    public string $id;
}

/** CatalogTypeSchema entity data model. */
class CatalogTypeSchema
{
    public array $annotations;
    public array $attributes;
    public array $categories;
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
    public ?array $owning_team_ids = null;
    public bool $ranked;
    public ?string $registry_type = null;
    public ?array $required_integrations = null;
    public array $schema;
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
    public array $attributes;
    public int $version;
}

/** CatalogV3 entity data model. */
class CatalogV3
{
    public string $catalog_type_id;
    public array $entries;
    public ?array $update_attributes = null;
}

/** Request payload for CatalogV3#create. */
class CatalogV3CreateData
{
    public string $catalog_type_id;
    public array $entries;
    public ?array $update_attributes = null;
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
    public ?string $updated_at = null;
}

/** Request payload for CustomField#create. */
class CustomFieldCreateData
{
    public ?string $catalog_type_id = null;
    public string $description;
    public string $field_type;
    public array $filter_by;
    public array $fixed_filter;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public string $name;
}

/** Request payload for CustomField#update. */
class CustomFieldUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?array $filter_by = null;
    public ?array $fixed_filter = null;
    public ?string $group_by_catalog_attribute_id = null;
    public ?string $helptext_catalog_attribute_id = null;
    public ?string $name = null;
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
    public ?string $after = null;
    public string $custom_field_id;
    public ?int $page_size = null;
}

/** Request payload for CustomFieldOption#create. */
class CustomFieldOptionCreateData
{
    public string $custom_field_id;
    public ?int $sort_key = null;
    public string $value;
}

/** Request payload for CustomFieldOption#update. */
class CustomFieldOptionUpdateData
{
    public string $id;
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
    public string $description;
    public ?string $escalation_path_id = null;
    public array $events;
    public string $id;
    public string $idempotency_key;
    public ?string $incident_id = null;
    public array $priority;
    public array $related_alerts;
    public array $related_incidents;
    public string $status;
    public string $title;
    public string $updated_at;
    public ?array $user_ids = null;
}

/** Request payload for Escalation#load. */
class EscalationLoadMatch
{
    public string $id;
}

/** Request payload for Escalation#list. */
class EscalationListMatch
{
    public ?string $after = null;
    public ?array $alert = null;
    public ?array $created_at = null;
    public ?array $escalation_path = null;
    public ?array $idempotency_key = null;
    public ?array $incident = null;
    public ?int $page_size = null;
    public ?array $status = null;
    public ?array $updated_at = null;
}

/** Request payload for Escalation#create. */
class EscalationCreateData
{
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public string $idempotency_key;
    public ?string $incident_id = null;
    public string $title;
    public ?array $user_ids = null;
}

/** EscalationPath entity data model. */
class EscalationPath
{
    public ?array $current_responders = null;
    public string $id;
    public string $kind;
    public string $name;
    public ?array $param_bindings = null;
    public array $path;
    public array $repeat_config;
    public array $team_ids;
    public ?string $template_id = null;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPath#load. */
class EscalationPathLoadMatch
{
    public string $id;
}

/** Request payload for EscalationPath#list. */
class EscalationPathListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for EscalationPath#create. */
class EscalationPathCreateData
{
    public ?string $kind = null;
    public string $name;
    public ?array $param_bindings = null;
    public array $path;
    public array $repeat_config;
    public ?array $team_ids = null;
    public ?string $template_id = null;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPath#update. */
class EscalationPathUpdateData
{
    public string $id;
    public ?string $kind = null;
    public ?string $name = null;
    public ?array $param_bindings = null;
    public ?array $path = null;
    public ?array $repeat_config = null;
    public ?array $team_ids = null;
    public ?string $template_id = null;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPath#remove. */
class EscalationPathRemoveMatch
{
    public string $id;
}

/** EscalationPathTemplate entity data model. */
class EscalationPathTemplate
{
    public ?string $description = null;
    public array $expressions;
    public bool $has_historical_escalation_path_versions;
    public string $id;
    public string $name;
    public array $params;
    public array $path;
    public array $repeat_config;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPathTemplate#load. */
class EscalationPathTemplateLoadMatch
{
    public string $id;
}

/** Request payload for EscalationPathTemplate#list. */
class EscalationPathTemplateListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
    public ?string $search = null;
}

/** Request payload for EscalationPathTemplate#create. */
class EscalationPathTemplateCreateData
{
    public ?string $description = null;
    public ?array $expressions = null;
    public string $name;
    public ?array $params = null;
    public array $path;
    public array $repeat_config;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPathTemplate#update. */
class EscalationPathTemplateUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?array $expressions = null;
    public ?string $name = null;
    public ?array $params = null;
    public ?array $path = null;
    public ?array $repeat_config = null;
    public ?array $working_hours = null;
}

/** Request payload for EscalationPathTemplate#remove. */
class EscalationPathTemplateRemoveMatch
{
    public string $id;
}

/** EscalationsCheckEscalationPermissionsResultV2 entity data model. */
class EscalationsCheckEscalationPermissionsResultV2
{
    public array $response_options;
    public array $user_ids;
}

/** Request payload for EscalationsCheckEscalationPermissionsResultV2#create. */
class EscalationsCheckEscalationPermissionsResultV2CreateData
{
    public string $escalation_id;
    public array $user_ids;
}

/** EscalationsReassignEscalationResultV2 entity data model. */
class EscalationsReassignEscalationResultV2
{
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public ?bool $resolve_original = null;
    public ?string $title = null;
    public ?array $user_ids = null;
}

/** Request payload for EscalationsReassignEscalationResultV2#create. */
class EscalationsReassignEscalationResultV2CreateData
{
    public string $escalation_id;
    public ?string $description = null;
    public ?string $escalation_path_id = null;
    public ?bool $resolve_original = null;
    public ?string $title = null;
    public ?array $user_ids = null;
}

/** EscalationsV2 entity data model. */
class EscalationsV2
{
}

/** FollowUp entity data model. */
class FollowUp
{
    public array $assignee;
    public ?string $assignee_id = null;
    public array $assignee_team;
    public ?string $assignee_team_id = null;
    public array $category;
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
    public array $labels;
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
    public ?string $after = null;
    public ?string $assignee_team_id = null;
    public ?array $created_at = null;
    public ?string $incident_id = null;
    public ?string $incident_mode = null;
    public ?int $page_size = null;
    public ?array $updated_at = null;
}

/** Request payload for FollowUp#create. */
class FollowUpCreateData
{
    public ?string $assignee_id = null;
    public ?string $assignee_team_id = null;
    public ?string $description = null;
    public ?string $external_issue_reference_id = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public string $incident_id;
    public ?array $labels = null;
    public string $title;
}

/** Request payload for FollowUp#update. */
class FollowUpUpdateData
{
    public string $id;
    public ?string $assignee_id = null;
    public ?string $assignee_team_id = null;
    public ?string $description = null;
    public ?string $follow_up_category_id = null;
    public ?string $follow_up_priority_option_id = null;
    public ?array $labels = null;
    public ?string $status = null;
    public ?string $title = null;
}

/** Request payload for FollowUp#remove. */
class FollowUpRemoveMatch
{
    public string $id;
}

/** FollowUpsConnectExternalIssueResultV2 entity data model. */
class FollowUpsConnectExternalIssueResultV2
{
    public array $assignee;
    public array $assignee_team;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public array $external_issue_reference;
    public string $id;
    public string $incident_id;
    public array $labels;
    public array $priority;
    public string $provider;
    public string $status;
    public string $title;
    public string $updated_at;
    public string $url;
}

/** Request payload for FollowUpsConnectExternalIssueResultV2#create. */
class FollowUpsConnectExternalIssueResultV2CreateData
{
    public string $follow_up_id;
    public string $provider;
    public string $url;
}

/** FollowUpsConnectExternalIssueResultV3 entity data model. */
class FollowUpsConnectExternalIssueResultV3
{
    public array $assignee;
    public array $assignee_team;
    public array $category;
    public ?string $completed_at = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public array $external_issue_reference;
    public string $id;
    public string $incident_id;
    public array $labels;
    public array $priority;
    public string $provider;
    public string $status;
    public string $title;
    public string $updated_at;
    public string $url;
}

/** Request payload for FollowUpsConnectExternalIssueResultV3#create. */
class FollowUpsConnectExternalIssueResultV3CreateData
{
    public string $follow_up_id;
    public string $provider;
    public string $url;
}

/** FollowUpsCreateFromLinkResultV3 entity data model. */
class FollowUpsCreateFromLinkResultV3
{
    public string $incident_id;
    public string $url;
}

/** Request payload for FollowUpsCreateFromLinkResultV3#create. */
class FollowUpsCreateFromLinkResultV3CreateData
{
    public string $incident_id;
    public string $url;
}

/** HeartbeatV2 entity data model. */
class HeartbeatV2
{
    public ?string $id = null;
}

/** Request payload for HeartbeatV2#load. */
class HeartbeatV2LoadMatch
{
    public string $id;
    public ?string $token = null;
}

/** Request payload for HeartbeatV2#create. */
class HeartbeatV2CreateData
{
    public string $id;
    public ?string $token = null;
}

/** Identity entity data model. */
class Identity
{
    public string $dashboard_url;
    public string $name;
    public array $roles;
    public array $team_roles;
    public array $teams;
}

/** Request payload for Identity#load. */
class IdentityLoadMatch
{
    public ?string $dashboard_url = null;
    public ?string $name = null;
    public ?array $roles = null;
    public ?array $team_roles = null;
    public ?array $teams = null;
}

/** Incident entity data model. */
class Incident
{
    public ?string $call_url = null;
    public string $created_at;
    public array $creator;
    public array $custom_field_entries;
    public ?array $debriefs = null;
    public ?array $duration_metrics = null;
    public array $external_issue_reference;
    public ?bool $has_debrief = null;
    public string $id;
    public string $idempotency_key;
    public array $incident_role_assignments;
    public array $incident_status;
    public ?string $incident_status_id = null;
    public ?array $incident_timestamp_values = null;
    public array $incident_type;
    public ?string $incident_type_id = null;
    public string $last_activity_at;
    public string $mode;
    public ?string $ms_teams_channel_url = null;
    public string $name;
    public ?string $permalink = null;
    public ?array $postmortem_document_ids = null;
    public ?string $postmortem_document_url = null;
    public string $reference;
    public ?array $retrospective_incident_options = null;
    public array $severity;
    public ?string $severity_id = null;
    public string $slack_channel_id;
    public ?string $slack_channel_name = null;
    public ?string $slack_channel_name_override = null;
    public ?string $slack_channel_url = null;
    public string $slack_team_id;
    public ?string $summary = null;
    public array $team_ids;
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
    public ?string $after = null;
    public ?array $created_at = null;
    public ?array $custom_field = null;
    public ?string $filter_mode = null;
    public ?array $incident_role = null;
    public ?array $incident_type = null;
    public ?array $mode = null;
    public ?int $page_size = null;
    public ?array $severity = null;
    public ?string $sort_by = null;
    public ?array $status = null;
    public ?array $status_category = null;
    public ?array $updated_at = null;
}

/** Request payload for Incident#create. */
class IncidentCreateData
{
    public ?array $custom_field_entries = null;
    public string $idempotency_key;
    public ?array $incident_role_assignments = null;
    public ?string $incident_status_id = null;
    public ?array $incident_timestamp_values = null;
    public ?string $incident_type_id = null;
    public ?string $mode = null;
    public ?string $name = null;
    public ?array $retrospective_incident_options = null;
    public ?string $severity_id = null;
    public ?string $slack_channel_name_override = null;
    public ?string $slack_team_id = null;
    public ?string $summary = null;
    public string $visibility;
}

/** IncidentActivityLogEntry entity data model. */
class IncidentActivityLogEntry
{
    public ?array $content = null;
    public string $created_at;
    public string $id;
    public string $incident_id;
    public string $occurred_at;
    public string $title;
    public string $type;
}

/** Request payload for IncidentActivityLogEntry#list. */
class IncidentActivityLogEntryListMatch
{
    public ?string $after = null;
    public ?array $id = null;
    public string $incident_id;
    public ?int $page_size = null;
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
    public ?string $external_id = null;
    public ?string $incident_id = null;
    public ?string $resource_type = null;
}

/** Request payload for IncidentAttachment#create. */
class IncidentAttachmentCreateData
{
    public string $incident_id;
    public array $resource;
}

/** Request payload for IncidentAttachment#remove. */
class IncidentAttachmentRemoveMatch
{
    public string $id;
}

/** IncidentForm entity data model. */
class IncidentForm
{
    public string $created_at;
    public array $expressions;
    public string $form_type;
    public string $id;
    public ?string $incident_type_id = null;
    public ?array $lifecycle_elements = null;
    public string $updated_at;
}

/** Request payload for IncidentForm#load. */
class IncidentFormLoadMatch
{
    public string $id;
}

/** Request payload for IncidentForm#list. */
class IncidentFormListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for IncidentForm#create. */
class IncidentFormCreateData
{
    public array $expressions;
    public string $form_type;
    public ?string $incident_type_id = null;
    public ?array $lifecycle_elements = null;
}

/** Request payload for IncidentForm#update. */
class IncidentFormUpdateData
{
    public string $id;
    public ?array $expressions = null;
    public ?string $form_type = null;
    public ?string $incident_type_id = null;
    public ?array $lifecycle_elements = null;
}

/** Request payload for IncidentForm#remove. */
class IncidentFormRemoveMatch
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

/** IncidentMembershipsV1 entity data model. */
class IncidentMembershipsV1
{
    public string $incident_id;
    public string $user_id;
}

/** Request payload for IncidentMembershipsV1#create. */
class IncidentMembershipsV1CreateData
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
    public string $incident_id;
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
    public string $incident_id;
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
    public ?string $after = null;
    public string $incident_id;
    public ?int $page_size = null;
}

/** IncidentRole entity data model. */
class IncidentRole
{
    public string $created_at;
    public string $description;
    public string $id;
    public string $instructions;
    public string $name;
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
    public ?string $instructions = null;
    public ?string $name = null;
    public ?string $role_type = null;
    public ?string $shortform = null;
    public ?string $updated_at = null;
}

/** Request payload for IncidentRole#create. */
class IncidentRoleCreateData
{
    public string $description;
    public string $instructions;
    public string $name;
    public string $shortform;
}

/** Request payload for IncidentRole#update. */
class IncidentRoleUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $instructions = null;
    public ?string $name = null;
    public ?string $shortform = null;
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
    public string $description;
    public string $name;
    public ?int $rank = null;
}

/** Request payload for IncidentStatus#update. */
class IncidentStatusUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
    public ?int $rank = null;
}

/** Request payload for IncidentStatus#remove. */
class IncidentStatusRemoveMatch
{
    public string $id;
}

/** IncidentTeamMembership entity data model. */
class IncidentTeamMembership
{
    public string $incident_id;
    public string $team_id;
}

/** Request payload for IncidentTeamMembership#create. */
class IncidentTeamMembershipCreateData
{
    public string $incident_id;
    public string $team_id;
}

/** IncidentTeamMembershipsV1 entity data model. */
class IncidentTeamMembershipsV1
{
    public string $incident_id;
    public string $team_id;
}

/** Request payload for IncidentTeamMembershipsV1#create. */
class IncidentTeamMembershipsV1CreateData
{
    public string $incident_id;
    public string $team_id;
}

/** IncidentTemplate entity data model. */
class IncidentTemplate
{
    public string $created_at;
    public ?array $expressions = null;
    public string $id;
    public string $name;
    public array $template;
    public string $updated_at;
}

/** Request payload for IncidentTemplate#load. */
class IncidentTemplateLoadMatch
{
    public string $id;
}

/** Request payload for IncidentTemplate#list. */
class IncidentTemplateListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for IncidentTemplate#create. */
class IncidentTemplateCreateData
{
    public ?array $expressions = null;
    public string $name;
    public array $template;
}

/** Request payload for IncidentTemplate#update. */
class IncidentTemplateUpdateData
{
    public string $id;
    public ?array $expressions = null;
    public ?string $name = null;
    public ?array $template = null;
}

/** Request payload for IncidentTemplate#remove. */
class IncidentTemplateRemoveMatch
{
    public string $id;
}

/** IncidentTemplatesValidateResultV1 entity data model. */
class IncidentTemplatesValidateResultV1
{
    public ?array $expressions = null;
    public string $name;
    public array $template;
    public array $warnings;
}

/** Request payload for IncidentTemplatesValidateResultV1#create. */
class IncidentTemplatesValidateResultV1CreateData
{
    public ?array $expressions = null;
    public string $name;
    public array $template;
}

/** IncidentTimelineItem entity data model. */
class IncidentTimelineItem
{
    public ?string $activity_log_id = null;
    public string $created_at;
    public array $creator;
    public ?string $description = null;
    public string $id;
    public string $idempotency_key;
    public string $incident_id;
    public string $timestamp;
    public string $title;
    public string $updated_at;
}

/** Request payload for IncidentTimelineItem#list. */
class IncidentTimelineItemListMatch
{
    public ?string $after = null;
    public string $incident_id;
    public ?int $page_size = null;
}

/** Request payload for IncidentTimelineItem#create. */
class IncidentTimelineItemCreateData
{
    public ?string $description = null;
    public string $idempotency_key;
    public string $incident_id;
    public string $timestamp;
    public string $title;
}

/** Request payload for IncidentTimelineItem#update. */
class IncidentTimelineItemUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $timestamp = null;
    public ?string $title = null;
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
    public ?array $owning_team_ids = null;
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
    public ?array $owning_team_ids = null;
    public ?bool $private_incidents_only = null;
    public ?string $updated_at = null;
}

/** IncidentUpdate entity data model. */
class IncidentUpdate
{
    public string $created_at;
    public string $id;
    public string $idempotency_key;
    public string $incident_id;
    public ?string $merged_into_incident_id = null;
    public ?string $message = null;
    public array $new_incident_status;
    public array $new_severity;
    public ?string $to_incident_status_id = null;
    public ?string $to_severity_id = null;
    public array $updater;
}

/** Request payload for IncidentUpdate#list. */
class IncidentUpdateListMatch
{
    public ?string $after = null;
    public ?string $incident_id = null;
    public ?int $page_size = null;
}

/** Request payload for IncidentUpdate#create. */
class IncidentUpdateCreateData
{
    public string $idempotency_key;
    public string $incident_id;
    public ?string $message = null;
    public ?string $to_incident_status_id = null;
    public ?string $to_severity_id = null;
}

/** IncidentsImportPostmortemDocumentResultV2 entity data model. */
class IncidentsImportPostmortemDocumentResultV2
{
    public string $content;
    public string $title;
}

/** Request payload for IncidentsImportPostmortemDocumentResultV2#create. */
class IncidentsImportPostmortemDocumentResultV2CreateData
{
    public string $incident_id;
    public string $content;
    public string $title;
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
    public ?int $version = null;
}

/** IpRange entity data model. */
class IpRange
{
    public string $cidr;
    public string $description;
}

/** Request payload for IpRange#list. */
class IpRangeListMatch
{
    public ?string $cidr = null;
    public ?string $description = null;
}

/** MaintenanceWindow entity data model. */
class MaintenanceWindow
{
    public array $alert_condition_groups;
    public ?string $archived_at = null;
    public string $created_at;
    public string $end_at;
    public ?array $escalation_targets = null;
    public string $id;
    public ?string $incident_id = null;
    public array $lead;
    public string $name;
    public ?string $notification_message = null;
    public ?array $notify_channels = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public ?array $owning_team_ids = null;
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
    public ?string $after = null;
    public ?int $page_size = null;
    public ?string $status = null;
}

/** Request payload for MaintenanceWindow#create. */
class MaintenanceWindowCreateData
{
    public array $alert_condition_groups;
    public string $end_at;
    public ?array $escalation_targets = null;
    public ?string $incident_id = null;
    public array $lead;
    public string $name;
    public ?string $notification_message = null;
    public ?array $notify_channels = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public ?array $owning_team_ids = null;
    public ?bool $reroute_on_end = null;
    public ?bool $resolve_on_end = null;
    public bool $show_in_sidebar;
    public string $start_at;
}

/** Request payload for MaintenanceWindow#update. */
class MaintenanceWindowUpdateData
{
    public string $id;
    public ?array $alert_condition_groups = null;
    public ?string $end_at = null;
    public ?array $escalation_targets = null;
    public ?string $incident_id = null;
    public ?array $lead = null;
    public ?string $name = null;
    public ?string $notification_message = null;
    public ?array $notify_channels = null;
    public ?int $notify_end_minutes_before = null;
    public ?int $notify_start_minutes_before = null;
    public ?array $owning_team_ids = null;
    public ?bool $reroute_on_end = null;
    public ?bool $resolve_on_end = null;
    public ?bool $show_in_sidebar = null;
    public ?string $start_at = null;
}

/** Request payload for MaintenanceWindow#remove. */
class MaintenanceWindowRemoveMatch
{
    public string $id;
    public ?bool $force = null;
}

/** ManagedResource entity data model. */
class ManagedResource
{
    public array $annotations;
    public string $managed_by;
    public string $resource_id;
    public string $resource_type;
    public ?string $source_url = null;
}

/** Request payload for ManagedResource#create. */
class ManagedResourceCreateData
{
    public array $annotations;
    public string $resource_id;
    public string $resource_type;
}

/** OnCallNotificationMethodPublicV2 entity data model. */
class OnCallNotificationMethodPublicV2
{
    public string $address;
    public string $id;
    public bool $is_usable;
    public string $method_type;
    public array $phone_details;
}

/** Request payload for OnCallNotificationMethodPublicV2#list. */
class OnCallNotificationMethodPublicV2ListMatch
{
    public string $user_id;
}

/** OnCallNotificationPause entity data model. */
class OnCallNotificationPause
{
    public string $created_at;
    public string $ends_at;
    public string $id;
    public ?string $reason = null;
    public string $starts_at;
    public string $updated_at;
    public string $user_id;
}

/** Request payload for OnCallNotificationPause#load. */
class OnCallNotificationPauseLoadMatch
{
    public string $id;
}

/** Request payload for OnCallNotificationPause#list. */
class OnCallNotificationPauseListMatch
{
    public ?string $after = null;
    public ?string $from = null;
    public ?int $page_size = null;
    public ?string $to = null;
}

/** OnCallNotificationRulePublicV2 entity data model. */
class OnCallNotificationRulePublicV2
{
    public array $app;
    public ?int $delay_seconds = null;
    public string $id;
    public array $method_target;
    public string $method_type;
    public array $phone;
    public string $rule_type;
}

/** Request payload for OnCallNotificationRulePublicV2#list. */
class OnCallNotificationRulePublicV2ListMatch
{
    public string $user_id;
}

/** PayConfig entity data model. */
class PayConfig
{
    public int $base_rate_cents;
    public string $created_at;
    public string $currency;
    public string $id;
    public string $name;
    public array $one_off_rules;
    public ?string $published_at = null;
    public string $rate_time_unit;
    public string $timezone;
    public string $updated_at;
    public array $weekly_rules;
}

/** Request payload for PayConfig#load. */
class PayConfigLoadMatch
{
    public string $id;
}

/** Request payload for PayConfig#list. */
class PayConfigListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for PayConfig#create. */
class PayConfigCreateData
{
    public int $base_rate_cents;
    public string $currency;
    public string $name;
    public ?array $one_off_rules = null;
    public string $rate_time_unit;
    public string $timezone;
    public ?array $weekly_rules = null;
}

/** Request payload for PayConfig#update. */
class PayConfigUpdateData
{
    public string $id;
    public ?int $base_rate_cents = null;
    public ?string $currency = null;
    public ?string $name = null;
    public ?string $rate_time_unit = null;
    public ?string $timezone = null;
}

/** Request payload for PayConfig#remove. */
class PayConfigRemoveMatch
{
    public string $id;
}

/** PayConfigOneOffRule entity data model. */
class PayConfigOneOffRule
{
    public string $end_at;
    public string $id;
    public string $name;
    public int $rate_cents;
    public string $start_at;
}

/** Request payload for PayConfigOneOffRule#load. */
class PayConfigOneOffRuleLoadMatch
{
    public string $id;
    public string $pay_config_id;
}

/** Request payload for PayConfigOneOffRule#list. */
class PayConfigOneOffRuleListMatch
{
    public string $id;
}

/** Request payload for PayConfigOneOffRule#create. */
class PayConfigOneOffRuleCreateData
{
    public string $id;
    public string $end_at;
    public string $name;
    public int $rate_cents;
    public string $start_at;
}

/** Request payload for PayConfigOneOffRule#update. */
class PayConfigOneOffRuleUpdateData
{
    public string $id;
    public string $pay_config_id;
    public ?string $end_at = null;
    public ?string $name = null;
    public ?int $rate_cents = null;
    public ?string $start_at = null;
}

/** Request payload for PayConfigOneOffRule#remove. */
class PayConfigOneOffRuleRemoveMatch
{
    public string $id;
    public string $pay_config_id;
}

/** PayConfigWeeklyRule entity data model. */
class PayConfigWeeklyRule
{
    public string $end_time;
    public string $id;
    public int $rate_cents;
    public string $start_time;
    public array $weekdays;
}

/** Request payload for PayConfigWeeklyRule#load. */
class PayConfigWeeklyRuleLoadMatch
{
    public string $id;
    public string $pay_config_id;
}

/** Request payload for PayConfigWeeklyRule#list. */
class PayConfigWeeklyRuleListMatch
{
    public string $id;
}

/** Request payload for PayConfigWeeklyRule#create. */
class PayConfigWeeklyRuleCreateData
{
    public string $id;
    public string $end_time;
    public int $rate_cents;
    public string $start_time;
    public array $weekdays;
}

/** Request payload for PayConfigWeeklyRule#update. */
class PayConfigWeeklyRuleUpdateData
{
    public string $id;
    public string $pay_config_id;
    public ?string $end_time = null;
    public ?int $rate_cents = null;
    public ?string $start_time = null;
    public ?array $weekdays = null;
}

/** Request payload for PayConfigWeeklyRule#remove. */
class PayConfigWeeklyRuleRemoveMatch
{
    public string $id;
    public string $pay_config_id;
}

/** PayReport entity data model. */
class PayReport
{
    public string $created_at;
    public ?array $creator = null;
    public string $end_date;
    public ?string $error_code = null;
    public ?string $error_message = null;
    public string $id;
    public string $name;
    public string $overlapping_shifts;
    public array $pay_config_expression;
    public ?string $pay_config_id = null;
    public ?string $published_at = null;
    public ?array $rotation_filters = null;
    public array $schedule_ids;
    public string $start_date;
    public string $status;
    public ?int $total_duration_seconds = null;
    public ?array $total_pay_by_currency = null;
    public string $unpaid_shifts;
    public string $updated_at;
}

/** Request payload for PayReport#load. */
class PayReportLoadMatch
{
    public string $id;
}

/** Request payload for PayReport#list. */
class PayReportListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for PayReport#create. */
class PayReportCreateData
{
    public string $end_date;
    public string $name;
    public ?string $overlapping_shifts = null;
    public array $pay_config_expression;
    public ?string $pay_config_id = null;
    public ?array $rotation_filters = null;
    public array $schedule_ids;
    public string $start_date;
    public ?string $unpaid_shifts = null;
}

/** Request payload for PayReport#remove. */
class PayReportRemoveMatch
{
    public string $id;
}

/** PayReportsPublishResultV2 entity data model. */
class PayReportsPublishResultV2
{
    public array $cc_emails;
    public string $created_at;
    public ?array $creator = null;
    public string $end_date;
    public ?string $error_code = null;
    public ?string $error_message = null;
    public string $id;
    public string $name;
    public string $overlapping_shifts;
    public ?string $published_at = null;
    public array $schedule_ids;
    public string $send_user_breakdowns;
    public string $start_date;
    public string $status;
    public ?int $total_duration_seconds = null;
    public ?array $total_pay_by_currency = null;
    public string $unpaid_shifts;
    public string $updated_at;
}

/** Request payload for PayReportsPublishResultV2#create. */
class PayReportsPublishResultV2CreateData
{
    public string $pay_report_id;
    public array $cc_emails;
    public string $send_user_breakdowns;
}

/** PayReportsUnpublishResultV2 entity data model. */
class PayReportsUnpublishResultV2
{
    public string $created_at;
    public ?array $creator = null;
    public string $end_date;
    public ?string $error_code = null;
    public ?string $error_message = null;
    public string $id;
    public string $name;
    public string $overlapping_shifts;
    public ?string $published_at = null;
    public array $schedule_ids;
    public string $start_date;
    public string $status;
    public ?int $total_duration_seconds = null;
    public ?array $total_pay_by_currency = null;
    public string $unpaid_shifts;
    public string $unpublish_reason;
    public string $updated_at;
}

/** Request payload for PayReportsUnpublishResultV2#create. */
class PayReportsUnpublishResultV2CreateData
{
    public string $pay_report_id;
    public string $unpublish_reason;
}

/** PayReportsV2 entity data model. */
class PayReportsV2
{
}

/** Request payload for PayReportsV2#load. */
class PayReportsV2LoadMatch
{
    public string $pay_report_id;
}

/** Policy entity data model. */
class Policy
{
    public array $assignment_rules;
    public array $conditions;
    public string $created_at;
    public array $debrief;
    public ?string $description = null;
    public ?array $expressions = null;
    public array $follow_up;
    public string $id;
    public string $name;
    public ?array $on_call_readiness = null;
    public string $policy_type;
    public array $post_mortem;
    public array $schedule;
    public string $status;
    public string $updated_at;
}

/** Request payload for Policy#load. */
class PolicyLoadMatch
{
    public string $id;
}

/** Request payload for Policy#list. */
class PolicyListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
    public ?string $policy_type = null;
}

/** Request payload for Policy#create. */
class PolicyCreateData
{
    public array $assignment_rules;
    public array $conditions;
    public array $debrief;
    public string $description;
    public ?array $expressions = null;
    public array $follow_up;
    public string $name;
    public ?array $on_call_readiness = null;
    public string $policy_type;
    public array $post_mortem;
    public array $schedule;
    public ?string $status = null;
}

/** Request payload for Policy#update. */
class PolicyUpdateData
{
    public string $id;
    public ?array $assignment_rules = null;
    public ?array $conditions = null;
    public ?array $debrief = null;
    public ?string $description = null;
    public ?array $expressions = null;
    public ?array $follow_up = null;
    public ?string $name = null;
    public ?array $on_call_readiness = null;
    public ?string $policy_type = null;
    public ?array $post_mortem = null;
    public ?array $schedule = null;
    public ?string $status = null;
}

/** Request payload for Policy#remove. */
class PolicyRemoveMatch
{
    public string $id;
}

/** PolicyFinding entity data model. */
class PolicyFinding
{
    public string $created_at;
    public ?int $days = null;
    public array $debrief;
    public array $dismissal;
    public ?string $due_at = null;
    public array $follow_up;
    public string $id;
    public string $last_checked_at;
    public array $on_call_readiness;
    public string $policy_id;
    public string $policy_type;
    public array $post_mortem;
    public array $responsible_users;
    public array $schedule;
    public array $shift_conflict;
    public string $state;
    public string $updated_at;
    public array $vacation_conflict;
}

/** Request payload for PolicyFinding#load. */
class PolicyFindingLoadMatch
{
    public string $id;
}

/** Request payload for PolicyFinding#list. */
class PolicyFindingListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
    public ?string $policy_id = null;
}

/** PolicyFindingsDismissResultV2 entity data model. */
class PolicyFindingsDismissResultV2
{
    public string $created_at;
    public ?int $days = null;
    public array $debrief;
    public array $dismissal;
    public ?string $due_at = null;
    public array $follow_up;
    public string $id;
    public string $last_checked_at;
    public array $on_call_readiness;
    public string $policy_id;
    public string $policy_type;
    public array $post_mortem;
    public string $reason;
    public array $responsible_users;
    public array $schedule;
    public array $shift_conflict;
    public string $state;
    public string $updated_at;
    public array $vacation_conflict;
}

/** Request payload for PolicyFindingsDismissResultV2#create. */
class PolicyFindingsDismissResultV2CreateData
{
    public string $policy_finding_id;
    public string $reason;
}

/** PolicyFindingsRestoreResultV2 entity data model. */
class PolicyFindingsRestoreResultV2
{
    public string $created_at;
    public ?int $days = null;
    public array $debrief;
    public array $dismissal;
    public ?string $due_at = null;
    public array $follow_up;
    public string $id;
    public string $last_checked_at;
    public array $on_call_readiness;
    public string $policy_id;
    public string $policy_type;
    public array $post_mortem;
    public array $responsible_users;
    public array $schedule;
    public array $shift_conflict;
    public string $state;
    public string $updated_at;
    public array $vacation_conflict;
}

/** Request payload for PolicyFindingsRestoreResultV2#create. */
class PolicyFindingsRestoreResultV2CreateData
{
    public string $policy_finding_id;
    public string $created_at;
    public ?int $days = null;
    public array $debrief;
    public array $dismissal;
    public ?string $due_at = null;
    public array $follow_up;
    public string $id;
    public string $last_checked_at;
    public array $on_call_readiness;
    public string $policy_id;
    public string $policy_type;
    public array $post_mortem;
    public array $responsible_users;
    public array $schedule;
    public array $shift_conflict;
    public string $state;
    public string $updated_at;
    public array $vacation_conflict;
}

/** PostmortemDocument entity data model. */
class PostmortemDocument
{
    public string $created_at;
    public string $document_url;
    public array $editors;
    public array $exported_urls;
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
    public ?string $after = null;
    public ?string $incident_id = null;
    public ?int $page_size = null;
    public ?string $sort_by = null;
}

/** Request payload for PostmortemDocument#update. */
class PostmortemDocumentUpdateData
{
    public string $id;
    public ?string $status = null;
}

/** PostmortemDocumentsAttachResultV1 entity data model. */
class PostmortemDocumentsAttachResultV1
{
    public ?string $document_provider = null;
    public string $incident_id;
    public string $permalink;
}

/** Request payload for PostmortemDocumentsAttachResultV1#create. */
class PostmortemDocumentsAttachResultV1CreateData
{
    public ?string $document_provider = null;
    public string $incident_id;
    public string $permalink;
}

/** PostmortemDocumentsShowContentResultV1 entity data model. */
class PostmortemDocumentsShowContentResultV1
{
    public string $markdown;
}

/** Request payload for PostmortemDocumentsShowContentResultV1#load. */
class PostmortemDocumentsShowContentResultV1LoadMatch
{
    public string $postmortem_document_id;
}

/** Schedule entity data model. */
class Schedule
{
    public array $annotations;
    public array $config;
    public string $created_at;
    public ?array $current_shifts = null;
    public array $holidays_public_config;
    public string $id;
    public string $name;
    public ?array $next_shifts = null;
    public string $permalink;
    public array $team_ids;
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
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for Schedule#create. */
class ScheduleCreateData
{
    public ?array $annotations = null;
    public ?array $config = null;
    public array $holidays_public_config;
    public ?string $name = null;
    public ?array $team_ids = null;
    public ?string $timezone = null;
}

/** Request payload for Schedule#update. */
class ScheduleUpdateData
{
    public string $id;
    public ?array $annotations = null;
    public ?array $config = null;
    public ?array $holidays_public_config = null;
    public ?string $name = null;
    public ?array $team_ids = null;
    public ?string $timezone = null;
}

/** Request payload for Schedule#remove. */
class ScheduleRemoveMatch
{
    public string $id;
}

/** ScheduleEntriesListPayloadV2 entity data model. */
class ScheduleEntriesListPayloadV2
{
    public ?string $entry_window_end = null;
    public ?string $entry_window_start = null;
    public array $final;
    public array $overrides;
    public array $schedule;
    public array $scheduled;
}

/** Request payload for ScheduleEntriesListPayloadV2#create. */
class ScheduleEntriesListPayloadV2CreateData
{
    public string $schedule_id;
    public ?string $entry_window_end = null;
    public ?string $entry_window_start = null;
    public array $schedule;
}

/** ScheduleEntry entity data model. */
class ScheduleEntry
{
    public array $pagination_meta;
    public array $schedule_entries;
}

/** Request payload for ScheduleEntry#load. */
class ScheduleEntryLoadMatch
{
    public ?string $entry_window_end = null;
    public ?string $entry_window_start = null;
    public string $schedule_id;
}

/** ScheduleOverride entity data model. */
class ScheduleOverride
{
    public string $created_at;
    public string $end_at;
    public string $id;
    public string $layer_id;
    public string $rotation_id;
    public string $schedule_id;
    public string $start_at;
    public string $updated_at;
    public array $user;
}

/** Request payload for ScheduleOverride#load. */
class ScheduleOverrideLoadMatch
{
    public string $id;
}

/** Request payload for ScheduleOverride#list. */
class ScheduleOverrideListMatch
{
    public ?string $after = null;
    public ?string $layer_id = null;
    public ?int $page_size = null;
    public ?string $rotation_id = null;
    public string $schedule_id;
}

/** Request payload for ScheduleOverride#create. */
class ScheduleOverrideCreateData
{
    public string $end_at;
    public string $layer_id;
    public string $rotation_id;
    public string $schedule_id;
    public string $start_at;
    public array $user;
}

/** Request payload for ScheduleOverride#update. */
class ScheduleOverrideUpdateData
{
    public string $id;
    public ?string $end_at = null;
    public ?string $layer_id = null;
    public ?string $rotation_id = null;
    public ?string $start_at = null;
    public ?array $user = null;
}

/** Request payload for ScheduleOverride#remove. */
class ScheduleOverrideRemoveMatch
{
    public string $id;
}

/** ScheduleReplica entity data model. */
class ScheduleReplica
{
    public string $created_at;
    public string $id;
    public ?string $last_sync_error = null;
    public ?string $last_synced_at = null;
    public ?int $mirror_window_days = null;
    public string $replica_fallback_user_id;
    public string $replica_provider;
    public string $replica_provider_id;
    public string $schedule_id;
    public array $sources;
    public string $updated_at;
    public array $user_statuses;
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
    public ?int $mirror_window_days = null;
    public string $replica_fallback_user_id;
    public string $replica_provider;
    public string $replica_provider_id;
    public array $sources;
}

/** Request payload for ScheduleReplica#remove. */
class ScheduleReplicaRemoveMatch
{
    public string $id;
    public string $schedule_id;
}

/** ScheduleSyncRule entity data model. */
class ScheduleSyncRule
{
    public ?array $annotations = null;
    public string $created_at;
    public string $id;
    public array $permanent_member_user_ids;
    public ?string $rotation_id = null;
    public string $schedule_id;
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
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for ScheduleSyncRule#create. */
class ScheduleSyncRuleCreateData
{
    public string $id;
    public ?array $annotations = null;
    public ?array $permanent_member_user_ids = null;
    public ?string $rotation_id = null;
    public string $schedule_sync_target_id;
    public string $sync_type;
}

/** Request payload for ScheduleSyncRule#update. */
class ScheduleSyncRuleUpdateData
{
    public string $id;
    public string $schedule_id;
    public ?array $annotations = null;
    public ?array $permanent_member_user_ids = null;
    public ?string $sync_type = null;
}

/** Request payload for ScheduleSyncRule#remove. */
class ScheduleSyncRuleRemoveMatch
{
    public string $id;
    public string $schedule_id;
}

/** ScheduleSyncTarget entity data model. */
class ScheduleSyncTarget
{
    public bool $add_bot_to_group;
    public ?array $annotations = null;
    public string $created_at;
    public string $id;
    public array $linked_schedules;
    public array $new_slack_user_group;
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
    public ?string $after = null;
    public ?int $page_size = null;
}

/** Request payload for ScheduleSyncTarget#create. */
class ScheduleSyncTargetCreateData
{
    public bool $add_bot_to_group;
    public ?array $annotations = null;
    public array $new_slack_user_group;
    public ?string $slack_user_group_id = null;
}

/** Request payload for ScheduleSyncTarget#update. */
class ScheduleSyncTargetUpdateData
{
    public string $id;
    public ?bool $add_bot_to_group = null;
    public ?array $annotations = null;
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
    public ?string $last_four_chars = null;
    public string $name;
    public ?array $owning_team_ids = null;
    public array $secret;
    public string $updated_at;
    public string $value;
    public int $version;
    public array $versions;
}

/** Request payload for Secret#load. */
class SecretLoadMatch
{
    public string $id;
}

/** Request payload for Secret#list. */
class SecretListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
    public ?array $team_id = null;
}

/** Request payload for Secret#create. */
class SecretCreateData
{
    public ?string $description = null;
    public string $name;
    public ?array $owning_team_ids = null;
    public string $value;
}

/** Request payload for Secret#update. */
class SecretUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
    public ?array $owning_team_ids = null;
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
    public string $description;
    public string $name;
    public ?int $rank = null;
}

/** Request payload for Severity#update. */
class SeverityUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
    public ?int $rank = null;
}

/** Request payload for Severity#remove. */
class SeverityRemoveMatch
{
    public string $id;
}

/** StatusPage entity data model. */
class StatusPage
{
    public ?string $description = null;
    public string $id;
    public string $name;
    public ?string $public_url = null;
}

/** Request payload for StatusPage#load. */
class StatusPageLoadMatch
{
    public string $id;
}

/** Request payload for StatusPage#list. */
class StatusPageListMatch
{
    public ?string $after = null;
    public ?int $page_size = null;
}

/** StatusPageComponent entity data model. */
class StatusPageComponent
{
    public ?string $description = null;
    public string $id;
    public array $management_meta;
    public string $name;
}

/** Request payload for StatusPageComponent#load. */
class StatusPageComponentLoadMatch
{
    public string $id;
}

/** Request payload for StatusPageComponent#list. */
class StatusPageComponentListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?array $management_meta = null;
    public ?string $name = null;
}

/** Request payload for StatusPageComponent#create. */
class StatusPageComponentCreateData
{
    public ?string $description = null;
    public string $name;
}

/** Request payload for StatusPageComponent#update. */
class StatusPageComponentUpdateData
{
    public string $id;
    public ?string $description = null;
    public ?string $name = null;
}

/** Request payload for StatusPageComponent#remove. */
class StatusPageComponentRemoveMatch
{
    public string $id;
}

/** StatusPageComponentAvailability entity data model. */
class StatusPageComponentAvailability
{
    public ?string $availability_percent = null;
    public string $component_id;
    public string $data_available_since;
    public string $end_at;
    public string $start_at;
    public string $status_page_id;
}

/** Request payload for StatusPageComponentAvailability#load. */
class StatusPageComponentAvailabilityLoadMatch
{
    public string $component_id;
    public string $status_page_id;
    public string $end_at;
    public string $start_at;
}

/** StatusPageIncident entity data model. */
class StatusPageIncident
{
    public array $component_impacts;
    public ?array $component_statuses = null;
    public string $id;
    public string $idempotency_key;
    public string $incident_status;
    public string $message;
    public string $name;
    public bool $notify_subscribers;
    public string $published_at;
    public string $status_page_id;
    public array $updates;
}

/** Request payload for StatusPageIncident#load. */
class StatusPageIncidentLoadMatch
{
    public string $id;
}

/** Request payload for StatusPageIncident#list. */
class StatusPageIncidentListMatch
{
    public ?string $after = null;
    public ?string $component_id = null;
    public ?string $end_at = null;
    public ?string $group_id = null;
    public ?int $page_size = null;
    public ?string $start_at = null;
    public string $status_page_id;
    public ?string $sub_page_id = null;
}

/** Request payload for StatusPageIncident#create. */
class StatusPageIncidentCreateData
{
    public ?array $component_statuses = null;
    public string $idempotency_key;
    public string $incident_status;
    public string $message;
    public string $name;
    public bool $notify_subscribers;
    public string $status_page_id;
}

/** Request payload for StatusPageIncident#update. */
class StatusPageIncidentUpdateData
{
    public string $id;
    public ?string $name = null;
}

/** StatusPageIncidentUpdate entity data model. */
class StatusPageIncidentUpdate
{
    public ?array $component_statuses = null;
    public ?string $incident_status = null;
    public string $message;
    public bool $notify_subscribers;
    public string $status_page_incident_id;
}

/** Request payload for StatusPageIncidentUpdate#create. */
class StatusPageIncidentUpdateCreateData
{
    public ?array $component_statuses = null;
    public ?string $incident_status = null;
    public string $message;
    public bool $notify_subscribers;
    public string $status_page_incident_id;
}

/** StatusPageLinkedResponseIncident entity data model. */
class StatusPageLinkedResponseIncident
{
    public string $id;
    public string $linked_at;
}

/** Request payload for StatusPageLinkedResponseIncident#list. */
class StatusPageLinkedResponseIncidentListMatch
{
    public string $incident_id;
    public string $status_page_id;
}

/** StatusPageMaintenance entity data model. */
class StatusPageMaintenance
{
    public array $affected_component_ids;
    public bool $automate_maintenance_status;
    public array $component_maintenance_periods;
    public string $end_at;
    public string $id;
    public string $idempotency_key;
    public string $maintenance_status;
    public string $message;
    public string $name;
    public bool $notify_subscribers;
    public string $published_at;
    public string $start_at;
    public string $status_page_id;
    public array $updates;
}

/** Request payload for StatusPageMaintenance#load. */
class StatusPageMaintenanceLoadMatch
{
    public string $id;
}

/** Request payload for StatusPageMaintenance#list. */
class StatusPageMaintenanceListMatch
{
    public ?string $after = null;
    public ?string $component_id = null;
    public ?string $end_at = null;
    public ?string $group_id = null;
    public ?int $page_size = null;
    public ?string $start_at = null;
    public string $status_page_id;
    public ?string $sub_page_id = null;
}

/** Request payload for StatusPageMaintenance#create. */
class StatusPageMaintenanceCreateData
{
    public array $affected_component_ids;
    public ?bool $automate_maintenance_status = null;
    public string $end_at;
    public string $idempotency_key;
    public string $maintenance_status;
    public string $message;
    public string $name;
    public bool $notify_subscribers;
    public string $start_at;
    public string $status_page_id;
}

/** Request payload for StatusPageMaintenance#update. */
class StatusPageMaintenanceUpdateData
{
    public string $id;
    public ?string $end_at = null;
    public ?string $name = null;
    public ?string $start_at = null;
}

/** Request payload for StatusPageMaintenance#remove. */
class StatusPageMaintenanceRemoveMatch
{
    public string $id;
}

/** StatusPageMaintenanceUpdate entity data model. */
class StatusPageMaintenanceUpdate
{
    public ?array $component_statuses = null;
    public ?string $maintenance_status = null;
    public string $message;
    public bool $notify_subscribers;
    public string $status_page_maintenance_id;
}

/** Request payload for StatusPageMaintenanceUpdate#create. */
class StatusPageMaintenanceUpdateCreateData
{
    public ?array $component_statuses = null;
    public ?string $maintenance_status = null;
    public string $message;
    public bool $notify_subscribers;
    public string $status_page_maintenance_id;
}

/** StatusPageStructure entity data model. */
class StatusPageStructure
{
    public array $current_structure;
    public string $display_uptime_mode;
    public ?string $id = null;
    public array $management_meta;
}

/** Request payload for StatusPageStructure#load. */
class StatusPageStructureLoadMatch
{
    public string $id;
}

/** StatusPagesCreateStatusPageRetrospectiveIncidentResultV2 entity data model. */
class StatusPagesCreateStatusPageRetrospectiveIncidentResultV2
{
    public string $idempotency_key;
    public string $name;
    public string $status_page_id;
    public array $updates;
}

/** Request payload for StatusPagesCreateStatusPageRetrospectiveIncidentResultV2#create. */
class StatusPagesCreateStatusPageRetrospectiveIncidentResultV2CreateData
{
    public string $idempotency_key;
    public string $name;
    public string $status_page_id;
    public array $updates;
}

/** Team entity data model. */
class Team
{
    public array $catalog_entry;
    public string $id;
    public array $members;
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
    public ?string $after = null;
    public ?int $page_size = null;
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
    public ?array $datadog_config = null;
    public ?array $grafana_config = null;
    public ?string $name = null;
}

/** User entity data model. */
class User
{
    public array $base_role;
    public array $custom_roles;
    public ?string $email = null;
    public string $id;
    public bool $is_active;
    public string $name;
    public string $role;
    public array $seats;
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
    public ?string $after = null;
    public ?string $email = null;
    public ?bool $include_inactive = null;
    public ?int $page_size = null;
    public ?string $slack_user_id = null;
}

/** UsersShowPagingProviderResultV2 entity data model. */
class UsersShowPagingProviderResultV2
{
    public ?string $preferred_escalation_provider = null;
}

/** Request payload for UsersShowPagingProviderResultV2#load. */
class UsersShowPagingProviderResultV2LoadMatch
{
    public string $user_id;
}

/** Request payload for UsersShowPagingProviderResultV2#create. */
class UsersShowPagingProviderResultV2CreateData
{
    public string $user_id;
    public string $preferred_escalation_provider;
}

/** UtilitiesV1 entity data model. */
class UtilitiesV1
{
}

/** Request payload for UtilitiesV1#load. */
class UtilitiesV1LoadMatch
{
}

/** Workflow entity data model. */
class Workflow
{
    public ?array $annotations = null;
    public ?string $auto_run_mode = null;
    public array $condition_groups;
    public bool $continue_on_step_error;
    public array $delay;
    public array $expressions;
    public ?string $folder = null;
    public ?array $form_fields = null;
    public string $id;
    public ?bool $include_private_escalations = null;
    public ?bool $include_private_incidents = null;
    public array $management_meta;
    public string $name;
    public array $once_for;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public array $runs_on_incident_modes;
    public string $runs_on_incidents;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrades = null;
    public ?string $state = null;
    public array $steps;
    public string $trigger;
    public int $version;
    public array $workflow;
}

/** Request payload for Workflow#load. */
class WorkflowLoadMatch
{
    public string $id;
    public ?bool $skip_step_upgrade = null;
}

/** Request payload for Workflow#list. */
class WorkflowListMatch
{
    public ?array $annotations = null;
    public ?string $auto_run_mode = null;
    public ?array $condition_groups = null;
    public ?bool $continue_on_step_error = null;
    public ?array $delay = null;
    public ?array $expressions = null;
    public ?string $folder = null;
    public ?array $form_fields = null;
    public ?string $id = null;
    public ?bool $include_private_escalations = null;
    public ?bool $include_private_incidents = null;
    public ?array $management_meta = null;
    public ?string $name = null;
    public ?array $once_for = null;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public ?string $runs_from = null;
    public ?array $runs_on_incident_modes = null;
    public ?string $runs_on_incidents = null;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrades = null;
    public ?string $state = null;
    public ?array $steps = null;
    public ?string $trigger = null;
    public ?int $version = null;
    public ?array $workflow = null;
}

/** Request payload for Workflow#create. */
class WorkflowCreateData
{
    public ?array $annotations = null;
    public ?string $auto_run_mode = null;
    public array $condition_groups;
    public bool $continue_on_step_error;
    public array $delay;
    public array $expressions;
    public ?string $folder = null;
    public ?array $form_fields = null;
    public ?bool $include_private_escalations = null;
    public ?bool $include_private_incidents = null;
    public string $name;
    public array $once_for;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public array $runs_on_incident_modes;
    public string $runs_on_incidents;
    public ?string $shortform = null;
    public ?string $state = null;
    public array $steps;
    public string $trigger;
}

/** Request payload for Workflow#update. */
class WorkflowUpdateData
{
    public string $id;
    public ?array $annotations = null;
    public ?string $auto_run_mode = null;
    public ?array $condition_groups = null;
    public ?bool $continue_on_step_error = null;
    public ?array $delay = null;
    public ?array $expressions = null;
    public ?string $folder = null;
    public ?array $form_fields = null;
    public ?bool $include_private_escalations = null;
    public ?bool $include_private_incidents = null;
    public ?string $name = null;
    public ?array $once_for = null;
    public ?array $owning_team_ids = null;
    public ?string $private_incident_scope = null;
    public ?array $runs_on_incident_modes = null;
    public ?string $runs_on_incidents = null;
    public ?string $shortform = null;
    public ?bool $skip_step_upgrades = null;
    public ?string $state = null;
    public ?array $steps = null;
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
    public ?string $after = null;
    public ?array $created_at = null;
    public ?string $incident_id = null;
    public ?int $page_size = null;
    public ?string $workflow_id = null;
}


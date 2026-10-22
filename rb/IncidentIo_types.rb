# frozen_string_literal: true

# Typed models for the IncidentIo SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Action entity data model.
#
# @!attribute [rw] assignee
#   @return [Hash]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] external_issue_reference
#   @return [Hash, nil]
#
# @!attribute [rw] follow_up
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Action = Struct.new(
  :assignee,
  :assignee_id,
  :completed_at,
  :created_at,
  :creator,
  :description,
  :external_issue_reference,
  :follow_up,
  :id,
  :incident_id,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Action#load.
#
# @!attribute [rw] id
#   @return [String]
ActionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Action#list.
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] incident_mode
#   @return [String, nil]
#
# @!attribute [rw] is_follow_up
#   @return [Boolean, nil]
ActionListMatch = Struct.new(
  :incident_id,
  :incident_mode,
  :is_follow_up,
  keyword_init: true
)

# Request payload for Action#create.
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
ActionCreateData = Struct.new(
  :assignee_id,
  :description,
  :incident_id,
  keyword_init: true
)

# Request payload for Action#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
ActionUpdateData = Struct.new(
  :id,
  :assignee_id,
  :description,
  :status,
  keyword_init: true
)

# Request payload for Action#remove.
#
# @!attribute [rw] id
#   @return [String]
ActionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Alert entity data model.
#
# @!attribute [rw] alert_group_ids
#   @return [Array, nil]
#
# @!attribute [rw] alert_source_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deduplication_key
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] resolved_at
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Alert = Struct.new(
  :alert_group_ids,
  :alert_source_id,
  :attributes,
  :created_at,
  :deduplication_key,
  :description,
  :id,
  :resolved_at,
  :source_url,
  :status,
  :tags,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for Alert#load.
#
# @!attribute [rw] id
#   @return [String]
AlertLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Alert#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] alert_group_id
#   @return [Hash, nil]
#
# @!attribute [rw] alert_source
#   @return [Hash, nil]
#
# @!attribute [rw] attribute
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [Hash, nil]
#
# @!attribute [rw] deduplication_key
#   @return [Hash, nil]
#
# @!attribute [rw] has_note
#   @return [Hash, nil]
#
# @!attribute [rw] include_maintenance_window
#   @return [Hash, nil]
#
# @!attribute [rw] page_size
#   @return [Integer]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] tag
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [Hash, nil]
AlertListMatch = Struct.new(
  :after,
  :alert_group_id,
  :alert_source,
  :attribute,
  :created_at,
  :deduplication_key,
  :has_note,
  :include_maintenance_window,
  :page_size,
  :status,
  :tag,
  :updated_at,
  keyword_init: true
)

# Request payload for Alert#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] alert_group_ids
#   @return [Array, nil]
#
# @!attribute [rw] alert_source_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deduplication_key
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] resolved_at
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
AlertCreateData = Struct.new(
  :id,
  :alert_group_ids,
  :alert_source_id,
  :attributes,
  :created_at,
  :deduplication_key,
  :description,
  :resolved_at,
  :source_url,
  :status,
  :tags,
  :title,
  :updated_at,
  keyword_init: true
)

# AlertAttribute entity data model.
#
# @!attribute [rw] array
#   @return [Boolean]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] type
#   @return [String]
AlertAttribute = Struct.new(
  :array,
  :emoji,
  :id,
  :name,
  :required,
  :type,
  keyword_init: true
)

# Request payload for AlertAttribute#load.
#
# @!attribute [rw] id
#   @return [String]
AlertAttributeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AlertAttribute#list.
#
# @!attribute [rw] array
#   @return [Boolean, nil]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AlertAttributeListMatch = Struct.new(
  :array,
  :emoji,
  :id,
  :name,
  :required,
  :type,
  keyword_init: true
)

# Request payload for AlertAttribute#create.
#
# @!attribute [rw] array
#   @return [Boolean]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String]
AlertAttributeCreateData = Struct.new(
  :array,
  :emoji,
  :name,
  :required,
  :type,
  keyword_init: true
)

# Request payload for AlertAttribute#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] array
#   @return [Boolean, nil]
#
# @!attribute [rw] emoji
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
AlertAttributeUpdateData = Struct.new(
  :id,
  :array,
  :emoji,
  :name,
  :required,
  :type,
  keyword_init: true
)

# Request payload for AlertAttribute#remove.
#
# @!attribute [rw] id
#   @return [String]
AlertAttributeRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AlertNote entity data model.
#
# @!attribute [rw] alert_group_id
#   @return [String, nil]
#
# @!attribute [rw] alert_id
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] images
#   @return [Array]
#
# @!attribute [rw] last_edited_at
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
AlertNote = Struct.new(
  :alert_group_id,
  :alert_id,
  :content,
  :created_at,
  :creator,
  :id,
  :images,
  :last_edited_at,
  :updated_at,
  keyword_init: true
)

# Request payload for AlertNote#load.
#
# @!attribute [rw] id
#   @return [String]
AlertNoteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AlertNote#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] alert_group_id
#   @return [String, nil]
#
# @!attribute [rw] alert_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
AlertNoteListMatch = Struct.new(
  :after,
  :alert_group_id,
  :alert_id,
  :page_size,
  keyword_init: true
)

# Request payload for AlertNote#create.
#
# @!attribute [rw] alert_group_id
#   @return [String, nil]
#
# @!attribute [rw] alert_id
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [String]
AlertNoteCreateData = Struct.new(
  :alert_group_id,
  :alert_id,
  :content,
  keyword_init: true
)

# Request payload for AlertNote#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] content
#   @return [String, nil]
AlertNoteUpdateData = Struct.new(
  :id,
  :content,
  keyword_init: true
)

# Request payload for AlertNote#remove.
#
# @!attribute [rw] id
#   @return [String]
AlertNoteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AlertRoute entity data model.
#
# @!attribute [rw] alert_sources
#   @return [Array]
#
# @!attribute [rw] channel_config
#   @return [Array]
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] escalation_config
#   @return [Hash]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] grouping_config
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_config
#   @return [Hash]
#
# @!attribute [rw] incident_template
#   @return [Hash]
#
# @!attribute [rw] is_private
#   @return [Boolean]
#
# @!attribute [rw] message_config
#   @return [Hash]
#
# @!attribute [rw] message_template
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Integer]
AlertRoute = Struct.new(
  :alert_sources,
  :channel_config,
  :condition_groups,
  :created_at,
  :enabled,
  :escalation_config,
  :expressions,
  :grouping_config,
  :id,
  :incident_config,
  :incident_template,
  :is_private,
  :message_config,
  :message_template,
  :name,
  :owning_team_ids,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for AlertRoute#load.
#
# @!attribute [rw] id
#   @return [String]
AlertRouteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AlertRoute#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer]
AlertRouteListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for AlertRoute#create.
#
# @!attribute [rw] alert_sources
#   @return [Array]
#
# @!attribute [rw] channel_config
#   @return [Array]
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] escalation_config
#   @return [Hash]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] grouping_config
#   @return [Hash]
#
# @!attribute [rw] incident_config
#   @return [Hash]
#
# @!attribute [rw] incident_template
#   @return [Hash]
#
# @!attribute [rw] is_private
#   @return [Boolean]
#
# @!attribute [rw] message_config
#   @return [Hash]
#
# @!attribute [rw] message_template
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
AlertRouteCreateData = Struct.new(
  :alert_sources,
  :channel_config,
  :condition_groups,
  :created_at,
  :enabled,
  :escalation_config,
  :expressions,
  :grouping_config,
  :incident_config,
  :incident_template,
  :is_private,
  :message_config,
  :message_template,
  :name,
  :owning_team_ids,
  :updated_at,
  keyword_init: true
)

# Request payload for AlertRoute#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] alert_sources
#   @return [Array, nil]
#
# @!attribute [rw] channel_config
#   @return [Array, nil]
#
# @!attribute [rw] condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] escalation_config
#   @return [Hash, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] grouping_config
#   @return [Hash, nil]
#
# @!attribute [rw] incident_config
#   @return [Hash, nil]
#
# @!attribute [rw] incident_template
#   @return [Hash, nil]
#
# @!attribute [rw] is_private
#   @return [Boolean, nil]
#
# @!attribute [rw] message_config
#   @return [Hash, nil]
#
# @!attribute [rw] message_template
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Integer, nil]
AlertRouteUpdateData = Struct.new(
  :id,
  :alert_sources,
  :channel_config,
  :condition_groups,
  :created_at,
  :enabled,
  :escalation_config,
  :expressions,
  :grouping_config,
  :incident_config,
  :incident_template,
  :is_private,
  :message_config,
  :message_template,
  :name,
  :owning_team_ids,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for AlertRoute#remove.
#
# @!attribute [rw] id
#   @return [String]
AlertRouteRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AlertSource entity data model.
#
# @!attribute [rw] alert_events_url
#   @return [String, nil]
#
# @!attribute [rw] auto_resolve_incident_alerts
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_resolve_timeout_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] azure_devops_options
#   @return [Hash]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] email_options
#   @return [Hash]
#
# @!attribute [rw] filter_condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] fixed_team_id
#   @return [String, nil]
#
# @!attribute [rw] heartbeat_options
#   @return [Hash]
#
# @!attribute [rw] http_custom_options
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] jira_options
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] rate_limit_sharding
#   @return [Hash]
#
# @!attribute [rw] secret_token
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
AlertSource = Struct.new(
  :alert_events_url,
  :auto_resolve_incident_alerts,
  :auto_resolve_timeout_minutes,
  :azure_devops_options,
  :disabled,
  :email_options,
  :filter_condition_groups,
  :fixed_team_id,
  :heartbeat_options,
  :http_custom_options,
  :id,
  :jira_options,
  :name,
  :owning_team_ids,
  :rate_limit_sharding,
  :secret_token,
  :source_type,
  :template,
  keyword_init: true
)

# Request payload for AlertSource#load.
#
# @!attribute [rw] id
#   @return [String]
AlertSourceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AlertSource#list.
#
# @!attribute [rw] alert_events_url
#   @return [String, nil]
#
# @!attribute [rw] auto_resolve_incident_alerts
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_resolve_timeout_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] azure_devops_options
#   @return [Hash, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] email_options
#   @return [Hash, nil]
#
# @!attribute [rw] filter_condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] fixed_team_id
#   @return [String, nil]
#
# @!attribute [rw] heartbeat_options
#   @return [Hash, nil]
#
# @!attribute [rw] http_custom_options
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] jira_options
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] rate_limit_sharding
#   @return [Hash, nil]
#
# @!attribute [rw] secret_token
#   @return [String, nil]
#
# @!attribute [rw] source_type
#   @return [String, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
AlertSourceListMatch = Struct.new(
  :alert_events_url,
  :auto_resolve_incident_alerts,
  :auto_resolve_timeout_minutes,
  :azure_devops_options,
  :disabled,
  :email_options,
  :filter_condition_groups,
  :fixed_team_id,
  :heartbeat_options,
  :http_custom_options,
  :id,
  :jira_options,
  :name,
  :owning_team_ids,
  :rate_limit_sharding,
  :secret_token,
  :source_type,
  :template,
  keyword_init: true
)

# Request payload for AlertSource#create.
#
# @!attribute [rw] auto_resolve_incident_alerts
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_resolve_timeout_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] azure_devops_options
#   @return [Hash]
#
# @!attribute [rw] email_options
#   @return [Hash]
#
# @!attribute [rw] filter_condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] fixed_team_id
#   @return [String, nil]
#
# @!attribute [rw] heartbeat_options
#   @return [Hash]
#
# @!attribute [rw] http_custom_options
#   @return [Hash]
#
# @!attribute [rw] jira_options
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] rate_limit_sharding
#   @return [Hash]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
AlertSourceCreateData = Struct.new(
  :auto_resolve_incident_alerts,
  :auto_resolve_timeout_minutes,
  :azure_devops_options,
  :email_options,
  :filter_condition_groups,
  :fixed_team_id,
  :heartbeat_options,
  :http_custom_options,
  :jira_options,
  :name,
  :owning_team_ids,
  :rate_limit_sharding,
  :source_type,
  :template,
  keyword_init: true
)

# Request payload for AlertSource#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] auto_resolve_incident_alerts
#   @return [Boolean, nil]
#
# @!attribute [rw] auto_resolve_timeout_minutes
#   @return [Integer, nil]
#
# @!attribute [rw] azure_devops_options
#   @return [Hash, nil]
#
# @!attribute [rw] disabled
#   @return [Boolean, nil]
#
# @!attribute [rw] email_options
#   @return [Hash, nil]
#
# @!attribute [rw] filter_condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] fixed_team_id
#   @return [String, nil]
#
# @!attribute [rw] heartbeat_options
#   @return [Hash, nil]
#
# @!attribute [rw] http_custom_options
#   @return [Hash, nil]
#
# @!attribute [rw] jira_options
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] rate_limit_sharding
#   @return [Hash, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
AlertSourceUpdateData = Struct.new(
  :id,
  :auto_resolve_incident_alerts,
  :auto_resolve_timeout_minutes,
  :azure_devops_options,
  :disabled,
  :email_options,
  :filter_condition_groups,
  :fixed_team_id,
  :heartbeat_options,
  :http_custom_options,
  :jira_options,
  :name,
  :owning_team_ids,
  :rate_limit_sharding,
  :template,
  keyword_init: true
)

# Request payload for AlertSource#remove.
#
# @!attribute [rw] id
#   @return [String]
AlertSourceRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AlertSourcesV2 entity data model.
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
AlertSourcesV2 = Struct.new(
  :owning_team_ids,
  :source_type,
  :template,
  keyword_init: true
)

# Request payload for AlertSourcesV2#create.
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
AlertSourcesV2CreateData = Struct.new(
  :owning_team_ids,
  :source_type,
  :template,
  keyword_init: true
)

# AlertTag entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
AlertTag = Struct.new(
  :id,
  :name,
  keyword_init: true
)

# Request payload for AlertTag#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
AlertTagListMatch = Struct.new(
  :after,
  :page_size,
  :search,
  keyword_init: true
)

# AlertsAddTagsResultV2 entity data model.
#
# @!attribute [rw] alert_group_ids
#   @return [Array, nil]
#
# @!attribute [rw] alert_source_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deduplication_key
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] resolved_at
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
AlertsAddTagsResultV2 = Struct.new(
  :alert_group_ids,
  :alert_source_id,
  :attributes,
  :created_at,
  :deduplication_key,
  :description,
  :id,
  :resolved_at,
  :source_url,
  :status,
  :tags,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for AlertsAddTagsResultV2#create.
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array]
AlertsAddTagsResultV2CreateData = Struct.new(
  :alert_id,
  :tags,
  keyword_init: true
)

# AlertsRemoveTagsResultV2 entity data model.
#
# @!attribute [rw] alert_group_ids
#   @return [Array, nil]
#
# @!attribute [rw] alert_source_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deduplication_key
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] resolved_at
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
AlertsRemoveTagsResultV2 = Struct.new(
  :alert_group_ids,
  :alert_source_id,
  :attributes,
  :created_at,
  :deduplication_key,
  :description,
  :id,
  :resolved_at,
  :source_url,
  :status,
  :tags,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for AlertsRemoveTagsResultV2#create.
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array]
AlertsRemoveTagsResultV2CreateData = Struct.new(
  :alert_id,
  :tags,
  keyword_init: true
)

# AlertsSetTagsResultV2 entity data model.
#
# @!attribute [rw] alert_group_ids
#   @return [Array, nil]
#
# @!attribute [rw] alert_source_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] deduplication_key
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] resolved_at
#   @return [String, nil]
#
# @!attribute [rw] source_url
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
AlertsSetTagsResultV2 = Struct.new(
  :alert_group_ids,
  :alert_source_id,
  :attributes,
  :created_at,
  :deduplication_key,
  :description,
  :id,
  :resolved_at,
  :source_url,
  :status,
  :tags,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for AlertsSetTagsResultV2#create.
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] tags
#   @return [Array]
AlertsSetTagsResultV2CreateData = Struct.new(
  :alert_id,
  :tags,
  keyword_init: true
)

# AlertsTransitionIncidentAlertResultV2 entity data model.
#
# @!attribute [rw] alert
#   @return [Hash]
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] alert_route_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident
#   @return [Hash]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] re_relate
#   @return [Boolean, nil]
#
# @!attribute [rw] state
#   @return [String]
AlertsTransitionIncidentAlertResultV2 = Struct.new(
  :alert,
  :alert_id,
  :alert_route_id,
  :id,
  :incident,
  :incident_id,
  :re_relate,
  :state,
  keyword_init: true
)

# Request payload for AlertsTransitionIncidentAlertResultV2#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] alert_id
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer]
AlertsTransitionIncidentAlertResultV2ListMatch = Struct.new(
  :after,
  :alert_id,
  :incident_id,
  :page_size,
  keyword_init: true
)

# Request payload for AlertsTransitionIncidentAlertResultV2#create.
#
# @!attribute [rw] alert_id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] re_relate
#   @return [Boolean, nil]
#
# @!attribute [rw] state
#   @return [String]
AlertsTransitionIncidentAlertResultV2CreateData = Struct.new(
  :alert_id,
  :incident_id,
  :re_relate,
  :state,
  keyword_init: true
)

# AnnouncementRule entity data model.
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] conditions_no_longer_apply_behaviour
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] microsoft_teams_channel_ids
#   @return [Array]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_ids
#   @return [Array]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] update_sharing_mode
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
AnnouncementRule = Struct.new(
  :condition_groups,
  :conditions_no_longer_apply_behaviour,
  :created_at,
  :id,
  :microsoft_teams_channel_ids,
  :mode,
  :name,
  :owning_team_ids,
  :private_incident_scope,
  :slack_channel_ids,
  :template_id,
  :update_sharing_mode,
  :updated_at,
  keyword_init: true
)

# Request payload for AnnouncementRule#load.
#
# @!attribute [rw] id
#   @return [String]
AnnouncementRuleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AnnouncementRule#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
AnnouncementRuleListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for AnnouncementRule#create.
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] conditions_no_longer_apply_behaviour
#   @return [String, nil]
#
# @!attribute [rw] microsoft_teams_channel_ids
#   @return [Array, nil]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_ids
#   @return [Array, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] update_sharing_mode
#   @return [String]
AnnouncementRuleCreateData = Struct.new(
  :condition_groups,
  :conditions_no_longer_apply_behaviour,
  :microsoft_teams_channel_ids,
  :mode,
  :name,
  :owning_team_ids,
  :private_incident_scope,
  :slack_channel_ids,
  :template_id,
  :update_sharing_mode,
  keyword_init: true
)

# Request payload for AnnouncementRule#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] conditions_no_longer_apply_behaviour
#   @return [String, nil]
#
# @!attribute [rw] microsoft_teams_channel_ids
#   @return [Array, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_ids
#   @return [Array, nil]
#
# @!attribute [rw] template_id
#   @return [String, nil]
#
# @!attribute [rw] update_sharing_mode
#   @return [String, nil]
AnnouncementRuleUpdateData = Struct.new(
  :id,
  :condition_groups,
  :conditions_no_longer_apply_behaviour,
  :microsoft_teams_channel_ids,
  :mode,
  :name,
  :owning_team_ids,
  :private_incident_scope,
  :slack_channel_ids,
  :template_id,
  :update_sharing_mode,
  keyword_init: true
)

# Request payload for AnnouncementRule#remove.
#
# @!attribute [rw] id
#   @return [String]
AnnouncementRuleRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# AnnouncementTemplate entity data model.
#
# @!attribute [rw] actions
#   @return [Array]
#
# @!attribute [rw] fields
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_default
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array]
AnnouncementTemplate = Struct.new(
  :actions,
  :fields,
  :id,
  :is_default,
  :name,
  :owning_team_ids,
  keyword_init: true
)

# Request payload for AnnouncementTemplate#load.
#
# @!attribute [rw] id
#   @return [String]
AnnouncementTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for AnnouncementTemplate#list.
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
AnnouncementTemplateListMatch = Struct.new(
  :actions,
  :fields,
  :id,
  :is_default,
  :name,
  :owning_team_ids,
  keyword_init: true
)

# Request payload for AnnouncementTemplate#create.
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
AnnouncementTemplateCreateData = Struct.new(
  :actions,
  :fields,
  :name,
  :owning_team_ids,
  keyword_init: true
)

# Request payload for AnnouncementTemplate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] actions
#   @return [Array, nil]
#
# @!attribute [rw] fields
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
AnnouncementTemplateUpdateData = Struct.new(
  :id,
  :actions,
  :fields,
  :name,
  :owning_team_ids,
  keyword_init: true
)

# Request payload for AnnouncementTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
AnnouncementTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ApiKey entity data model.
#
# @!attribute [rw] comments
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_used_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role_names
#   @return [Array]
#
# @!attribute [rw] roles
#   @return [Array]
#
# @!attribute [rw] team_ids
#   @return [Array]
#
# @!attribute [rw] team_role_names
#   @return [Array]
#
# @!attribute [rw] team_roles
#   @return [Array]
#
# @!attribute [rw] token_last_issued_at
#   @return [String]
ApiKey = Struct.new(
  :comments,
  :created_at,
  :creator,
  :id,
  :last_used_at,
  :name,
  :role_names,
  :roles,
  :team_ids,
  :team_role_names,
  :team_roles,
  :token_last_issued_at,
  keyword_init: true
)

# Request payload for ApiKey#load.
#
# @!attribute [rw] id
#   @return [String]
ApiKeyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ApiKey#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
ApiKeyListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for ApiKey#create.
#
# @!attribute [rw] comments
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role_names
#   @return [Array]
#
# @!attribute [rw] team_ids
#   @return [Array]
#
# @!attribute [rw] team_role_names
#   @return [Array]
ApiKeyCreateData = Struct.new(
  :comments,
  :name,
  :role_names,
  :team_ids,
  :team_role_names,
  keyword_init: true
)

# Request payload for ApiKey#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] comments
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role_names
#   @return [Array, nil]
#
# @!attribute [rw] team_ids
#   @return [Array, nil]
#
# @!attribute [rw] team_role_names
#   @return [Array, nil]
ApiKeyUpdateData = Struct.new(
  :id,
  :comments,
  :name,
  :role_names,
  :team_ids,
  :team_role_names,
  keyword_init: true
)

# Request payload for ApiKey#remove.
#
# @!attribute [rw] id
#   @return [String]
ApiKeyRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# CallRoute entity data model.
#
# @!attribute [rw] allowed_callers
#   @return [Array]
#
# @!attribute [rw] country_code
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] current_state
#   @return [String]
#
# @!attribute [rw] custom_language
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] options
#   @return [Array]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] phone_number
#   @return [String, nil]
#
# @!attribute [rw] phone_number_type
#   @return [String, nil]
#
# @!attribute [rw] responder_caller_id
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] use_caller_allowlist
#   @return [Boolean]
CallRoute = Struct.new(
  :allowed_callers,
  :country_code,
  :created_at,
  :current_state,
  :custom_language,
  :id,
  :name,
  :options,
  :path,
  :phone_number,
  :phone_number_type,
  :responder_caller_id,
  :updated_at,
  :use_caller_allowlist,
  keyword_init: true
)

# Request payload for CallRoute#load.
#
# @!attribute [rw] id
#   @return [String]
CallRouteLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CallRoute#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CallRouteListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for CallRoute#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] custom_language
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [Array, nil]
#
# @!attribute [rw] responder_caller_id
#   @return [String, nil]
#
# @!attribute [rw] use_caller_allowlist
#   @return [Boolean, nil]
CallRouteUpdateData = Struct.new(
  :id,
  :custom_language,
  :name,
  :path,
  :responder_caller_id,
  :use_caller_allowlist,
  keyword_init: true
)

# CallRoutesCreateAllowedCallerResultV2 entity data model.
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String]
CallRoutesCreateAllowedCallerResultV2 = Struct.new(
  :name,
  :phone_number,
  keyword_init: true
)

# Request payload for CallRoutesCreateAllowedCallerResultV2#create.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String]
CallRoutesCreateAllowedCallerResultV2CreateData = Struct.new(
  :call_route_id,
  :name,
  :phone_number,
  keyword_init: true
)

# CallRoutesCreateOptionResultV2 entity data model.
#
# @!attribute [rw] digit
#   @return [String]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] prompt
#   @return [String]
CallRoutesCreateOptionResultV2 = Struct.new(
  :digit,
  :path,
  :prompt,
  keyword_init: true
)

# Request payload for CallRoutesCreateOptionResultV2#create.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] digit
#   @return [String]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] prompt
#   @return [String]
CallRoutesCreateOptionResultV2CreateData = Struct.new(
  :call_route_id,
  :digit,
  :path,
  :prompt,
  keyword_init: true
)

# CallRoutesListAllowedCallersResultV2 entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String]
CallRoutesListAllowedCallersResultV2 = Struct.new(
  :id,
  :name,
  :phone_number,
  keyword_init: true
)

# Request payload for CallRoutesListAllowedCallersResultV2#list.
#
# @!attribute [rw] call_route_id
#   @return [String]
CallRoutesListAllowedCallersResultV2ListMatch = Struct.new(
  :call_route_id,
  keyword_init: true
)

# CallRoutesListOptionsResultV2 entity data model.
#
# @!attribute [rw] digit
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] prompt
#   @return [String]
CallRoutesListOptionsResultV2 = Struct.new(
  :digit,
  :id,
  :path,
  :prompt,
  keyword_init: true
)

# Request payload for CallRoutesListOptionsResultV2#list.
#
# @!attribute [rw] call_route_id
#   @return [String]
CallRoutesListOptionsResultV2ListMatch = Struct.new(
  :call_route_id,
  keyword_init: true
)

# CallRoutesShowAllowedCallerResultV2 entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String]
CallRoutesShowAllowedCallerResultV2 = Struct.new(
  :id,
  :name,
  :phone_number,
  keyword_init: true
)

# Request payload for CallRoutesShowAllowedCallerResultV2#load.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CallRoutesShowAllowedCallerResultV2LoadMatch = Struct.new(
  :call_route_id,
  :id,
  keyword_init: true
)

# CallRoutesShowOptionResultV2 entity data model.
#
# @!attribute [rw] digit
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] prompt
#   @return [String]
CallRoutesShowOptionResultV2 = Struct.new(
  :digit,
  :id,
  :path,
  :prompt,
  keyword_init: true
)

# Request payload for CallRoutesShowOptionResultV2#load.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CallRoutesShowOptionResultV2LoadMatch = Struct.new(
  :call_route_id,
  :id,
  keyword_init: true
)

# CallRoutesUpdateAllowedCallerResultV2 entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String]
CallRoutesUpdateAllowedCallerResultV2 = Struct.new(
  :id,
  :name,
  :phone_number,
  keyword_init: true
)

# Request payload for CallRoutesUpdateAllowedCallerResultV2#update.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone_number
#   @return [String, nil]
CallRoutesUpdateAllowedCallerResultV2UpdateData = Struct.new(
  :call_route_id,
  :id,
  :name,
  :phone_number,
  keyword_init: true
)

# CallRoutesUpdateOptionResultV2 entity data model.
#
# @!attribute [rw] digit
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] prompt
#   @return [String]
CallRoutesUpdateOptionResultV2 = Struct.new(
  :digit,
  :id,
  :path,
  :prompt,
  keyword_init: true
)

# Request payload for CallRoutesUpdateOptionResultV2#update.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] digit
#   @return [String, nil]
#
# @!attribute [rw] path
#   @return [Array, nil]
#
# @!attribute [rw] prompt
#   @return [String, nil]
CallRoutesUpdateOptionResultV2UpdateData = Struct.new(
  :call_route_id,
  :id,
  :digit,
  :path,
  :prompt,
  keyword_init: true
)

# CallRoutesV2 entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
CallRoutesV2 = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CallRoutesV2#remove.
#
# @!attribute [rw] call_route_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
CallRoutesV2RemoveMatch = Struct.new(
  :call_route_id,
  :id,
  keyword_init: true
)

# CallSession entity data model.
#
# @!attribute [rw] ended_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String]
CallSession = Struct.new(
  :ended_at,
  :id,
  :incident_id,
  :started_at,
  keyword_init: true
)

# Request payload for CallSession#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CallSessionListMatch = Struct.new(
  :after,
  :incident_id,
  :page_size,
  keyword_init: true
)

# CallTranscriptEntry entity data model.
#
# @!attribute [rw] content
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] medium
#   @return [String]
#
# @!attribute [rw] participant_name
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [String]
CallTranscriptEntry = Struct.new(
  :content,
  :id,
  :medium,
  :participant_name,
  :timestamp,
  keyword_init: true
)

# Request payload for CallTranscriptEntry#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] call_session_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CallTranscriptEntryListMatch = Struct.new(
  :after,
  :call_session_id,
  :page_size,
  keyword_init: true
)

# CatalogEntry entity data model.
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] attribute_values
#   @return [Hash]
#
# @!attribute [rw] catalog_entry
#   @return [Hash]
#
# @!attribute [rw] catalog_type
#   @return [Hash]
#
# @!attribute [rw] catalog_type_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] update_attributes
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
CatalogEntry = Struct.new(
  :aliases,
  :archived_at,
  :attribute_values,
  :catalog_entry,
  :catalog_type,
  :catalog_type_id,
  :created_at,
  :external_id,
  :id,
  :name,
  :rank,
  :update_attributes,
  :updated_at,
  keyword_init: true
)

# Request payload for CatalogEntry#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] expand
#   @return [Boolean, nil]
CatalogEntryLoadMatch = Struct.new(
  :id,
  :expand,
  keyword_init: true
)

# Request payload for CatalogEntry#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] catalog_type_id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CatalogEntryListMatch = Struct.new(
  :after,
  :catalog_type_id,
  :identifier,
  :page_size,
  keyword_init: true
)

# Request payload for CatalogEntry#create.
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] attribute_values
#   @return [Hash]
#
# @!attribute [rw] catalog_type_id
#   @return [String]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
CatalogEntryCreateData = Struct.new(
  :aliases,
  :attribute_values,
  :catalog_type_id,
  :external_id,
  :name,
  :rank,
  keyword_init: true
)

# Request payload for CatalogEntry#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] aliases
#   @return [Array, nil]
#
# @!attribute [rw] attribute_values
#   @return [Hash, nil]
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] update_attributes
#   @return [Array, nil]
CatalogEntryUpdateData = Struct.new(
  :id,
  :aliases,
  :attribute_values,
  :external_id,
  :name,
  :rank,
  :update_attributes,
  keyword_init: true
)

# CatalogResource entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] engine_resource_type
#   @return [String]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] value_docstring
#   @return [String]
CatalogResource = Struct.new(
  :category,
  :description,
  :engine_resource_type,
  :label,
  :type,
  :value_docstring,
  keyword_init: true
)

# Request payload for CatalogResource#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] engine_resource_type
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] value_docstring
#   @return [String, nil]
CatalogResourceListMatch = Struct.new(
  :category,
  :description,
  :engine_resource_type,
  :label,
  :type,
  :value_docstring,
  keyword_init: true
)

# CatalogType entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] dynamic_resource_parameter
#   @return [String, nil]
#
# @!attribute [rw] engine_resource_type
#   @return [String]
#
# @!attribute [rw] estimated_count
#   @return [Integer, nil]
#
# @!attribute [rw] icon
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_editable
#   @return [Boolean]
#
# @!attribute [rw] is_team_type
#   @return [Boolean, nil]
#
# @!attribute [rw] last_synced_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] ranked
#   @return [Boolean]
#
# @!attribute [rw] registry_type
#   @return [String, nil]
#
# @!attribute [rw] required_integrations
#   @return [Array, nil]
#
# @!attribute [rw] schema
#   @return [Hash]
#
# @!attribute [rw] semantic_type
#   @return [String]
#
# @!attribute [rw] source_repo_url
#   @return [String, nil]
#
# @!attribute [rw] type_name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] use_name_as_identifier
#   @return [Boolean]
CatalogType = Struct.new(
  :annotations,
  :categories,
  :color,
  :created_at,
  :description,
  :dynamic_resource_parameter,
  :engine_resource_type,
  :estimated_count,
  :icon,
  :id,
  :is_editable,
  :is_team_type,
  :last_synced_at,
  :name,
  :owning_team_ids,
  :ranked,
  :registry_type,
  :required_integrations,
  :schema,
  :semantic_type,
  :source_repo_url,
  :type_name,
  :updated_at,
  :use_name_as_identifier,
  keyword_init: true
)

# Request payload for CatalogType#load.
#
# @!attribute [rw] id
#   @return [String]
CatalogTypeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CatalogType#list.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] dynamic_resource_parameter
#   @return [String, nil]
#
# @!attribute [rw] engine_resource_type
#   @return [String, nil]
#
# @!attribute [rw] estimated_count
#   @return [Integer, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_editable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_team_type
#   @return [Boolean, nil]
#
# @!attribute [rw] last_synced_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] ranked
#   @return [Boolean, nil]
#
# @!attribute [rw] registry_type
#   @return [String, nil]
#
# @!attribute [rw] required_integrations
#   @return [Array, nil]
#
# @!attribute [rw] schema
#   @return [Hash, nil]
#
# @!attribute [rw] semantic_type
#   @return [String, nil]
#
# @!attribute [rw] source_repo_url
#   @return [String, nil]
#
# @!attribute [rw] type_name
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] use_name_as_identifier
#   @return [Boolean, nil]
CatalogTypeListMatch = Struct.new(
  :annotations,
  :categories,
  :color,
  :created_at,
  :description,
  :dynamic_resource_parameter,
  :engine_resource_type,
  :estimated_count,
  :icon,
  :id,
  :is_editable,
  :is_team_type,
  :last_synced_at,
  :name,
  :owning_team_ids,
  :ranked,
  :registry_type,
  :required_integrations,
  :schema,
  :semantic_type,
  :source_repo_url,
  :type_name,
  :updated_at,
  :use_name_as_identifier,
  keyword_init: true
)

# Request payload for CatalogType#create.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] ranked
#   @return [Boolean, nil]
#
# @!attribute [rw] source_repo_url
#   @return [String, nil]
#
# @!attribute [rw] type_name
#   @return [String, nil]
#
# @!attribute [rw] use_name_as_identifier
#   @return [Boolean, nil]
CatalogTypeCreateData = Struct.new(
  :annotations,
  :categories,
  :color,
  :description,
  :icon,
  :name,
  :owning_team_ids,
  :ranked,
  :source_repo_url,
  :type_name,
  :use_name_as_identifier,
  keyword_init: true
)

# Request payload for CatalogType#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] categories
#   @return [Array, nil]
#
# @!attribute [rw] color
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] ranked
#   @return [Boolean, nil]
#
# @!attribute [rw] source_repo_url
#   @return [String, nil]
#
# @!attribute [rw] use_name_as_identifier
#   @return [Boolean, nil]
CatalogTypeUpdateData = Struct.new(
  :id,
  :annotations,
  :categories,
  :color,
  :description,
  :icon,
  :name,
  :owning_team_ids,
  :ranked,
  :source_repo_url,
  :use_name_as_identifier,
  keyword_init: true
)

# CatalogTypeSchema entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] categories
#   @return [Array]
#
# @!attribute [rw] color
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] dynamic_resource_parameter
#   @return [String, nil]
#
# @!attribute [rw] engine_resource_type
#   @return [String]
#
# @!attribute [rw] estimated_count
#   @return [Integer, nil]
#
# @!attribute [rw] icon
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_editable
#   @return [Boolean]
#
# @!attribute [rw] is_team_type
#   @return [Boolean, nil]
#
# @!attribute [rw] last_synced_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] ranked
#   @return [Boolean]
#
# @!attribute [rw] registry_type
#   @return [String, nil]
#
# @!attribute [rw] required_integrations
#   @return [Array, nil]
#
# @!attribute [rw] schema
#   @return [Hash]
#
# @!attribute [rw] semantic_type
#   @return [String]
#
# @!attribute [rw] source_repo_url
#   @return [String, nil]
#
# @!attribute [rw] type_name
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] use_name_as_identifier
#   @return [Boolean]
#
# @!attribute [rw] version
#   @return [Integer]
CatalogTypeSchema = Struct.new(
  :annotations,
  :attributes,
  :categories,
  :color,
  :created_at,
  :description,
  :dynamic_resource_parameter,
  :engine_resource_type,
  :estimated_count,
  :icon,
  :id,
  :is_editable,
  :is_team_type,
  :last_synced_at,
  :name,
  :owning_team_ids,
  :ranked,
  :registry_type,
  :required_integrations,
  :schema,
  :semantic_type,
  :source_repo_url,
  :type_name,
  :updated_at,
  :use_name_as_identifier,
  :version,
  keyword_init: true
)

# Request payload for CatalogTypeSchema#create.
#
# @!attribute [rw] catalog_type_id
#   @return [String]
#
# @!attribute [rw] attributes
#   @return [Array]
#
# @!attribute [rw] version
#   @return [Integer]
CatalogTypeSchemaCreateData = Struct.new(
  :catalog_type_id,
  :attributes,
  :version,
  keyword_init: true
)

# CustomField entity data model.
#
# @!attribute [rw] catalog_type_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] field_type
#   @return [String]
#
# @!attribute [rw] filter_by
#   @return [Hash]
#
# @!attribute [rw] fixed_filter
#   @return [Hash]
#
# @!attribute [rw] group_by_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] helptext_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] options
#   @return [Array]
#
# @!attribute [rw] required
#   @return [String, nil]
#
# @!attribute [rw] required_v2
#   @return [String, nil]
#
# @!attribute [rw] show_before_closure
#   @return [Boolean]
#
# @!attribute [rw] show_before_creation
#   @return [Boolean]
#
# @!attribute [rw] show_before_update
#   @return [Boolean]
#
# @!attribute [rw] show_in_announcement_post
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
CustomField = Struct.new(
  :catalog_type_id,
  :created_at,
  :description,
  :field_type,
  :filter_by,
  :fixed_filter,
  :group_by_catalog_attribute_id,
  :helptext_catalog_attribute_id,
  :id,
  :name,
  :options,
  :required,
  :required_v2,
  :show_before_closure,
  :show_before_creation,
  :show_before_update,
  :show_in_announcement_post,
  :updated_at,
  keyword_init: true
)

# Request payload for CustomField#load.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomField#list.
#
# @!attribute [rw] catalog_type_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] field_type
#   @return [String, nil]
#
# @!attribute [rw] filter_by
#   @return [Hash, nil]
#
# @!attribute [rw] fixed_filter
#   @return [Hash, nil]
#
# @!attribute [rw] group_by_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] helptext_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] options
#   @return [Array, nil]
#
# @!attribute [rw] required
#   @return [String, nil]
#
# @!attribute [rw] required_v2
#   @return [String, nil]
#
# @!attribute [rw] show_before_closure
#   @return [Boolean, nil]
#
# @!attribute [rw] show_before_creation
#   @return [Boolean, nil]
#
# @!attribute [rw] show_before_update
#   @return [Boolean, nil]
#
# @!attribute [rw] show_in_announcement_post
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
CustomFieldListMatch = Struct.new(
  :catalog_type_id,
  :created_at,
  :description,
  :field_type,
  :filter_by,
  :fixed_filter,
  :group_by_catalog_attribute_id,
  :helptext_catalog_attribute_id,
  :id,
  :name,
  :options,
  :required,
  :required_v2,
  :show_before_closure,
  :show_before_creation,
  :show_before_update,
  :show_in_announcement_post,
  :updated_at,
  keyword_init: true
)

# Request payload for CustomField#create.
#
# @!attribute [rw] catalog_type_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] field_type
#   @return [String]
#
# @!attribute [rw] filter_by
#   @return [Hash]
#
# @!attribute [rw] fixed_filter
#   @return [Hash]
#
# @!attribute [rw] group_by_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] helptext_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] required
#   @return [String, nil]
#
# @!attribute [rw] required_v2
#   @return [String, nil]
#
# @!attribute [rw] show_before_closure
#   @return [Boolean]
#
# @!attribute [rw] show_before_creation
#   @return [Boolean]
#
# @!attribute [rw] show_before_update
#   @return [Boolean]
#
# @!attribute [rw] show_in_announcement_post
#   @return [Boolean, nil]
CustomFieldCreateData = Struct.new(
  :catalog_type_id,
  :description,
  :field_type,
  :filter_by,
  :fixed_filter,
  :group_by_catalog_attribute_id,
  :helptext_catalog_attribute_id,
  :name,
  :required,
  :required_v2,
  :show_before_closure,
  :show_before_creation,
  :show_before_update,
  :show_in_announcement_post,
  keyword_init: true
)

# Request payload for CustomField#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] filter_by
#   @return [Hash, nil]
#
# @!attribute [rw] fixed_filter
#   @return [Hash, nil]
#
# @!attribute [rw] group_by_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] helptext_catalog_attribute_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] required
#   @return [String, nil]
#
# @!attribute [rw] required_v2
#   @return [String, nil]
#
# @!attribute [rw] show_before_closure
#   @return [Boolean, nil]
#
# @!attribute [rw] show_before_creation
#   @return [Boolean, nil]
#
# @!attribute [rw] show_before_update
#   @return [Boolean, nil]
#
# @!attribute [rw] show_in_announcement_post
#   @return [Boolean, nil]
CustomFieldUpdateData = Struct.new(
  :id,
  :description,
  :filter_by,
  :fixed_filter,
  :group_by_catalog_attribute_id,
  :helptext_catalog_attribute_id,
  :name,
  :required,
  :required_v2,
  :show_before_closure,
  :show_before_creation,
  :show_before_update,
  :show_in_announcement_post,
  keyword_init: true
)

# Request payload for CustomField#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# CustomFieldOption entity data model.
#
# @!attribute [rw] custom_field_id
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sort_key
#   @return [Integer]
#
# @!attribute [rw] value
#   @return [String]
CustomFieldOption = Struct.new(
  :custom_field_id,
  :id,
  :sort_key,
  :value,
  keyword_init: true
)

# Request payload for CustomFieldOption#load.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldOptionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for CustomFieldOption#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] custom_field_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CustomFieldOptionListMatch = Struct.new(
  :after,
  :custom_field_id,
  :page_size,
  keyword_init: true
)

# Request payload for CustomFieldOption#create.
#
# @!attribute [rw] custom_field_id
#   @return [String]
#
# @!attribute [rw] sort_key
#   @return [Integer, nil]
#
# @!attribute [rw] value
#   @return [String]
CustomFieldOptionCreateData = Struct.new(
  :custom_field_id,
  :sort_key,
  :value,
  keyword_init: true
)

# Request payload for CustomFieldOption#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] sort_key
#   @return [Integer, nil]
#
# @!attribute [rw] value
#   @return [String, nil]
CustomFieldOptionUpdateData = Struct.new(
  :id,
  :sort_key,
  :value,
  keyword_init: true
)

# Request payload for CustomFieldOption#remove.
#
# @!attribute [rw] id
#   @return [String]
CustomFieldOptionRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Escalation entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] escalation_path_id
#   @return [String, nil]
#
# @!attribute [rw] events
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] priority
#   @return [Hash]
#
# @!attribute [rw] related_alerts
#   @return [Array]
#
# @!attribute [rw] related_incidents
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_ids
#   @return [Array, nil]
Escalation = Struct.new(
  :created_at,
  :creator,
  :description,
  :escalation_path_id,
  :events,
  :id,
  :idempotency_key,
  :incident_id,
  :priority,
  :related_alerts,
  :related_incidents,
  :status,
  :title,
  :updated_at,
  :user_ids,
  keyword_init: true
)

# Request payload for Escalation#load.
#
# @!attribute [rw] id
#   @return [String]
EscalationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Escalation#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] alert
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [Hash, nil]
#
# @!attribute [rw] escalation_path
#   @return [Hash, nil]
#
# @!attribute [rw] idempotency_key
#   @return [Hash, nil]
#
# @!attribute [rw] incident
#   @return [Hash, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Hash, nil]
#
# @!attribute [rw] updated_at
#   @return [Hash, nil]
EscalationListMatch = Struct.new(
  :after,
  :alert,
  :created_at,
  :escalation_path,
  :idempotency_key,
  :incident,
  :page_size,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Escalation#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] escalation_path_id
#   @return [String, nil]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] user_ids
#   @return [Array, nil]
EscalationCreateData = Struct.new(
  :description,
  :escalation_path_id,
  :idempotency_key,
  :incident_id,
  :title,
  :user_ids,
  keyword_init: true
)

# EscalationPathTemplate entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] has_historical_escalation_path_versions
#   @return [Boolean]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] params
#   @return [Array]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] repeat_config
#   @return [Hash]
#
# @!attribute [rw] working_hours
#   @return [Array, nil]
EscalationPathTemplate = Struct.new(
  :description,
  :expressions,
  :has_historical_escalation_path_versions,
  :id,
  :name,
  :params,
  :path,
  :repeat_config,
  :working_hours,
  keyword_init: true
)

# Request payload for EscalationPathTemplate#load.
#
# @!attribute [rw] id
#   @return [String]
EscalationPathTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for EscalationPathTemplate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
EscalationPathTemplateListMatch = Struct.new(
  :after,
  :page_size,
  :search,
  keyword_init: true
)

# Request payload for EscalationPathTemplate#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] params
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [Array]
#
# @!attribute [rw] repeat_config
#   @return [Hash]
#
# @!attribute [rw] working_hours
#   @return [Array, nil]
EscalationPathTemplateCreateData = Struct.new(
  :description,
  :expressions,
  :name,
  :params,
  :path,
  :repeat_config,
  :working_hours,
  keyword_init: true
)

# Request payload for EscalationPathTemplate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] params
#   @return [Array, nil]
#
# @!attribute [rw] path
#   @return [Array, nil]
#
# @!attribute [rw] repeat_config
#   @return [Hash, nil]
#
# @!attribute [rw] working_hours
#   @return [Array, nil]
EscalationPathTemplateUpdateData = Struct.new(
  :id,
  :description,
  :expressions,
  :name,
  :params,
  :path,
  :repeat_config,
  :working_hours,
  keyword_init: true
)

# Request payload for EscalationPathTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
EscalationPathTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# EscalationsCheckEscalationPermissionsResultV2 entity data model.
#
# @!attribute [rw] response_options
#   @return [Array]
#
# @!attribute [rw] user_ids
#   @return [Array]
EscalationsCheckEscalationPermissionsResultV2 = Struct.new(
  :response_options,
  :user_ids,
  keyword_init: true
)

# Request payload for EscalationsCheckEscalationPermissionsResultV2#create.
#
# @!attribute [rw] escalation_id
#   @return [String]
#
# @!attribute [rw] user_ids
#   @return [Array]
EscalationsCheckEscalationPermissionsResultV2CreateData = Struct.new(
  :escalation_id,
  :user_ids,
  keyword_init: true
)

# EscalationsReassignEscalationResultV2 entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] escalation_path_id
#   @return [String, nil]
#
# @!attribute [rw] resolve_original
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_ids
#   @return [Array, nil]
EscalationsReassignEscalationResultV2 = Struct.new(
  :description,
  :escalation_path_id,
  :resolve_original,
  :title,
  :user_ids,
  keyword_init: true
)

# Request payload for EscalationsReassignEscalationResultV2#create.
#
# @!attribute [rw] escalation_id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] escalation_path_id
#   @return [String, nil]
#
# @!attribute [rw] resolve_original
#   @return [Boolean, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
#
# @!attribute [rw] user_ids
#   @return [Array, nil]
EscalationsReassignEscalationResultV2CreateData = Struct.new(
  :escalation_id,
  :description,
  :escalation_path_id,
  :resolve_original,
  :title,
  :user_ids,
  keyword_init: true
)

# FollowUp entity data model.
#
# @!attribute [rw] assignee
#   @return [Hash]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] assignee_team
#   @return [Hash]
#
# @!attribute [rw] assignee_team_id
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [Hash]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] external_issue_reference
#   @return [Hash]
#
# @!attribute [rw] external_issue_reference_id
#   @return [String, nil]
#
# @!attribute [rw] follow_up_category_id
#   @return [String, nil]
#
# @!attribute [rw] follow_up_priority_option_id
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
FollowUp = Struct.new(
  :assignee,
  :assignee_id,
  :assignee_team,
  :assignee_team_id,
  :category,
  :completed_at,
  :created_at,
  :creator,
  :description,
  :external_issue_reference,
  :external_issue_reference_id,
  :follow_up_category_id,
  :follow_up_priority_option_id,
  :id,
  :incident_id,
  :labels,
  :priority,
  :status,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for FollowUp#load.
#
# @!attribute [rw] id
#   @return [String]
FollowUpLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for FollowUp#list.
#
# @!attribute [rw] assignee_team_id
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] incident_mode
#   @return [String, nil]
FollowUpListMatch = Struct.new(
  :assignee_team_id,
  :incident_id,
  :incident_mode,
  keyword_init: true
)

# Request payload for FollowUp#create.
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] assignee_team_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] external_issue_reference_id
#   @return [String, nil]
#
# @!attribute [rw] follow_up_category_id
#   @return [String, nil]
#
# @!attribute [rw] follow_up_priority_option_id
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String]
FollowUpCreateData = Struct.new(
  :assignee_id,
  :assignee_team_id,
  :description,
  :external_issue_reference_id,
  :follow_up_category_id,
  :follow_up_priority_option_id,
  :incident_id,
  :labels,
  :title,
  keyword_init: true
)

# Request payload for FollowUp#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assignee_id
#   @return [String, nil]
#
# @!attribute [rw] assignee_team_id
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] follow_up_category_id
#   @return [String, nil]
#
# @!attribute [rw] follow_up_priority_option_id
#   @return [String, nil]
#
# @!attribute [rw] labels
#   @return [Array, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
FollowUpUpdateData = Struct.new(
  :id,
  :assignee_id,
  :assignee_team_id,
  :description,
  :follow_up_category_id,
  :follow_up_priority_option_id,
  :labels,
  :status,
  :title,
  keyword_init: true
)

# Request payload for FollowUp#remove.
#
# @!attribute [rw] id
#   @return [String]
FollowUpRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# FollowUpsConnectExternalIssueResultV3 entity data model.
#
# @!attribute [rw] assignee
#   @return [Hash]
#
# @!attribute [rw] assignee_team
#   @return [Hash]
#
# @!attribute [rw] category
#   @return [Hash]
#
# @!attribute [rw] completed_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] external_issue_reference
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] labels
#   @return [Array]
#
# @!attribute [rw] priority
#   @return [Hash]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
FollowUpsConnectExternalIssueResultV3 = Struct.new(
  :assignee,
  :assignee_team,
  :category,
  :completed_at,
  :created_at,
  :creator,
  :description,
  :external_issue_reference,
  :id,
  :incident_id,
  :labels,
  :priority,
  :provider,
  :status,
  :title,
  :updated_at,
  :url,
  keyword_init: true
)

# Request payload for FollowUpsConnectExternalIssueResultV3#create.
#
# @!attribute [rw] follow_up_id
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
FollowUpsConnectExternalIssueResultV3CreateData = Struct.new(
  :follow_up_id,
  :provider,
  :url,
  keyword_init: true
)

# FollowUpsCreateFromLinkResultV3 entity data model.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
FollowUpsCreateFromLinkResultV3 = Struct.new(
  :incident_id,
  :url,
  keyword_init: true
)

# Request payload for FollowUpsCreateFromLinkResultV3#create.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] url
#   @return [String]
FollowUpsCreateFromLinkResultV3CreateData = Struct.new(
  :incident_id,
  :url,
  keyword_init: true
)

# Identity entity data model.
#
# @!attribute [rw] dashboard_url
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] roles
#   @return [Array]
#
# @!attribute [rw] team_roles
#   @return [Array]
#
# @!attribute [rw] teams
#   @return [Array]
Identity = Struct.new(
  :dashboard_url,
  :name,
  :roles,
  :team_roles,
  :teams,
  keyword_init: true
)

# Request payload for Identity#load.
#
# @!attribute [rw] dashboard_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] roles
#   @return [Array, nil]
#
# @!attribute [rw] team_roles
#   @return [Array, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
IdentityLoadMatch = Struct.new(
  :dashboard_url,
  :name,
  :roles,
  :team_roles,
  :teams,
  keyword_init: true
)

# Incident entity data model.
#
# @!attribute [rw] call_url
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] custom_field_entries
#   @return [Array]
#
# @!attribute [rw] debriefs
#   @return [Array, nil]
#
# @!attribute [rw] duration_metrics
#   @return [Array, nil]
#
# @!attribute [rw] external_issue_reference
#   @return [Hash]
#
# @!attribute [rw] has_debrief
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_role_assignments
#   @return [Array]
#
# @!attribute [rw] incident_status
#   @return [Hash]
#
# @!attribute [rw] incident_status_id
#   @return [String, nil]
#
# @!attribute [rw] incident_timestamp_values
#   @return [Array, nil]
#
# @!attribute [rw] incident_type
#   @return [Hash]
#
# @!attribute [rw] incident_type_id
#   @return [String, nil]
#
# @!attribute [rw] last_activity_at
#   @return [String]
#
# @!attribute [rw] mode
#   @return [String]
#
# @!attribute [rw] ms_teams_channel_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] permalink
#   @return [String, nil]
#
# @!attribute [rw] postmortem_document_ids
#   @return [Array, nil]
#
# @!attribute [rw] postmortem_document_url
#   @return [String, nil]
#
# @!attribute [rw] reference
#   @return [String]
#
# @!attribute [rw] retrospective_incident_options
#   @return [Hash, nil]
#
# @!attribute [rw] severity
#   @return [Hash]
#
# @!attribute [rw] severity_id
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_id
#   @return [String]
#
# @!attribute [rw] slack_channel_name
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_name_override
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_url
#   @return [String, nil]
#
# @!attribute [rw] slack_team_id
#   @return [String]
#
# @!attribute [rw] source_message_channel_id
#   @return [String, nil]
#
# @!attribute [rw] source_message_timestamp
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] team_ids
#   @return [Array]
#
# @!attribute [rw] timestamps
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] visibility
#   @return [String]
#
# @!attribute [rw] workload_minutes_late
#   @return [Float, nil]
#
# @!attribute [rw] workload_minutes_sleeping
#   @return [Float, nil]
#
# @!attribute [rw] workload_minutes_total
#   @return [Float, nil]
#
# @!attribute [rw] workload_minutes_working
#   @return [Float, nil]
Incident = Struct.new(
  :call_url,
  :created_at,
  :creator,
  :custom_field_entries,
  :debriefs,
  :duration_metrics,
  :external_issue_reference,
  :has_debrief,
  :id,
  :idempotency_key,
  :incident_role_assignments,
  :incident_status,
  :incident_status_id,
  :incident_timestamp_values,
  :incident_type,
  :incident_type_id,
  :last_activity_at,
  :mode,
  :ms_teams_channel_url,
  :name,
  :permalink,
  :postmortem_document_ids,
  :postmortem_document_url,
  :reference,
  :retrospective_incident_options,
  :severity,
  :severity_id,
  :slack_channel_id,
  :slack_channel_name,
  :slack_channel_name_override,
  :slack_channel_url,
  :slack_team_id,
  :source_message_channel_id,
  :source_message_timestamp,
  :status,
  :summary,
  :team_ids,
  :timestamps,
  :updated_at,
  :visibility,
  :workload_minutes_late,
  :workload_minutes_sleeping,
  :workload_minutes_total,
  :workload_minutes_working,
  keyword_init: true
)

# Request payload for Incident#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Incident#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [Array, nil]
IncidentListMatch = Struct.new(
  :after,
  :page_size,
  :status,
  keyword_init: true
)

# Request payload for Incident#create.
#
# @!attribute [rw] custom_field_entries
#   @return [Array, nil]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_role_assignments
#   @return [Array, nil]
#
# @!attribute [rw] incident_status_id
#   @return [String, nil]
#
# @!attribute [rw] incident_timestamp_values
#   @return [Array, nil]
#
# @!attribute [rw] incident_type_id
#   @return [String, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] retrospective_incident_options
#   @return [Hash, nil]
#
# @!attribute [rw] severity_id
#   @return [String, nil]
#
# @!attribute [rw] slack_channel_name_override
#   @return [String, nil]
#
# @!attribute [rw] slack_team_id
#   @return [String, nil]
#
# @!attribute [rw] source_message_channel_id
#   @return [String, nil]
#
# @!attribute [rw] source_message_timestamp
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String]
IncidentCreateData = Struct.new(
  :custom_field_entries,
  :idempotency_key,
  :incident_role_assignments,
  :incident_status_id,
  :incident_timestamp_values,
  :incident_type_id,
  :mode,
  :name,
  :retrospective_incident_options,
  :severity_id,
  :slack_channel_name_override,
  :slack_team_id,
  :source_message_channel_id,
  :source_message_timestamp,
  :status,
  :summary,
  :visibility,
  keyword_init: true
)

# IncidentActivityLogEntry entity data model.
#
# @!attribute [rw] content
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] occurred_at
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
IncidentActivityLogEntry = Struct.new(
  :content,
  :created_at,
  :id,
  :incident_id,
  :occurred_at,
  :title,
  :type,
  keyword_init: true
)

# Request payload for IncidentActivityLogEntry#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Array, nil]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentActivityLogEntryListMatch = Struct.new(
  :after,
  :id,
  :incident_id,
  :page_size,
  keyword_init: true
)

# IncidentAttachment entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] resource
#   @return [Hash]
IncidentAttachment = Struct.new(
  :id,
  :incident_id,
  :resource,
  keyword_init: true
)

# Request payload for IncidentAttachment#list.
#
# @!attribute [rw] external_id
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] resource_type
#   @return [String, nil]
IncidentAttachmentListMatch = Struct.new(
  :external_id,
  :incident_id,
  :resource_type,
  keyword_init: true
)

# Request payload for IncidentAttachment#create.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] resource
#   @return [Hash]
IncidentAttachmentCreateData = Struct.new(
  :incident_id,
  :resource,
  keyword_init: true
)

# Request payload for IncidentAttachment#remove.
#
# @!attribute [rw] id
#   @return [String]
IncidentAttachmentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IncidentForm entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] form_type
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_type_id
#   @return [String, nil]
#
# @!attribute [rw] lifecycle_elements
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentForm = Struct.new(
  :created_at,
  :expressions,
  :form_type,
  :id,
  :incident_type_id,
  :lifecycle_elements,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentForm#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentFormLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentForm#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentFormListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for IncidentForm#create.
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] form_type
#   @return [String]
#
# @!attribute [rw] incident_type_id
#   @return [String, nil]
#
# @!attribute [rw] lifecycle_elements
#   @return [Array, nil]
IncidentFormCreateData = Struct.new(
  :expressions,
  :form_type,
  :incident_type_id,
  :lifecycle_elements,
  keyword_init: true
)

# Request payload for IncidentForm#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] form_type
#   @return [String, nil]
#
# @!attribute [rw] incident_type_id
#   @return [String, nil]
#
# @!attribute [rw] lifecycle_elements
#   @return [Array, nil]
IncidentFormUpdateData = Struct.new(
  :id,
  :expressions,
  :form_type,
  :incident_type_id,
  :lifecycle_elements,
  keyword_init: true
)

# Request payload for IncidentForm#remove.
#
# @!attribute [rw] id
#   @return [String]
IncidentFormRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IncidentMembership entity data model.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
IncidentMembership = Struct.new(
  :incident_id,
  :user_id,
  keyword_init: true
)

# Request payload for IncidentMembership#create.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
IncidentMembershipCreateData = Struct.new(
  :incident_id,
  :user_id,
  keyword_init: true
)

# IncidentParticipant entity data model.
#
# @!attribute [rw] active
#   @return [Array]
#
# @!attribute [rw] passive
#   @return [Array]
IncidentParticipant = Struct.new(
  :active,
  :passive,
  keyword_init: true
)

# Request payload for IncidentParticipant#load.
#
# @!attribute [rw] incident_id
#   @return [String]
IncidentParticipantLoadMatch = Struct.new(
  :incident_id,
  keyword_init: true
)

# IncidentParticipantWorkload entity data model.
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] participant_type
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash]
#
# @!attribute [rw] workload
#   @return [Hash]
IncidentParticipantWorkload = Struct.new(
  :archived_at,
  :participant_type,
  :user,
  :workload,
  keyword_init: true
)

# Request payload for IncidentParticipantWorkload#list.
#
# @!attribute [rw] incident_id
#   @return [String]
IncidentParticipantWorkloadListMatch = Struct.new(
  :incident_id,
  keyword_init: true
)

# IncidentRelationship entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident
#   @return [Hash]
IncidentRelationship = Struct.new(
  :id,
  :incident,
  keyword_init: true
)

# Request payload for IncidentRelationship#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentRelationshipListMatch = Struct.new(
  :after,
  :incident_id,
  :page_size,
  keyword_init: true
)

# IncidentRole entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] instructions
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] role_type
#   @return [String]
#
# @!attribute [rw] shortform
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentRole = Struct.new(
  :created_at,
  :description,
  :id,
  :instructions,
  :name,
  :required,
  :role_type,
  :shortform,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentRole#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentRoleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentRole#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] instructions
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] role_type
#   @return [String, nil]
#
# @!attribute [rw] shortform
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
IncidentRoleListMatch = Struct.new(
  :created_at,
  :description,
  :id,
  :instructions,
  :name,
  :required,
  :role_type,
  :shortform,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentRole#create.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] instructions
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] required
#   @return [Boolean]
#
# @!attribute [rw] shortform
#   @return [String]
IncidentRoleCreateData = Struct.new(
  :description,
  :instructions,
  :name,
  :required,
  :shortform,
  keyword_init: true
)

# Request payload for IncidentRole#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] instructions
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] required
#   @return [Boolean, nil]
#
# @!attribute [rw] shortform
#   @return [String, nil]
IncidentRoleUpdateData = Struct.new(
  :id,
  :description,
  :instructions,
  :name,
  :required,
  :shortform,
  keyword_init: true
)

# Request payload for IncidentRole#remove.
#
# @!attribute [rw] id
#   @return [String]
IncidentRoleRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IncidentStatus entity data model.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentStatus = Struct.new(
  :category,
  :created_at,
  :description,
  :id,
  :name,
  :rank,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentStatus#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentStatusLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentStatus#list.
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
IncidentStatusListMatch = Struct.new(
  :category,
  :created_at,
  :description,
  :id,
  :name,
  :rank,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentStatus#create.
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
IncidentStatusCreateData = Struct.new(
  :category,
  :description,
  :name,
  :rank,
  keyword_init: true
)

# Request payload for IncidentStatus#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
IncidentStatusUpdateData = Struct.new(
  :id,
  :description,
  :name,
  :rank,
  keyword_init: true
)

# Request payload for IncidentStatus#remove.
#
# @!attribute [rw] id
#   @return [String]
IncidentStatusRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IncidentTeamMembership entity data model.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
IncidentTeamMembership = Struct.new(
  :incident_id,
  :team_id,
  keyword_init: true
)

# Request payload for IncidentTeamMembership#create.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
IncidentTeamMembershipCreateData = Struct.new(
  :incident_id,
  :team_id,
  keyword_init: true
)

# IncidentTeamMembershipsV1 entity data model.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
IncidentTeamMembershipsV1 = Struct.new(
  :incident_id,
  :team_id,
  keyword_init: true
)

# Request payload for IncidentTeamMembershipsV1#create.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
IncidentTeamMembershipsV1CreateData = Struct.new(
  :incident_id,
  :team_id,
  keyword_init: true
)

# IncidentTemplate entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentTemplate = Struct.new(
  :created_at,
  :expressions,
  :id,
  :name,
  :template,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentTemplate#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentTemplateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentTemplate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentTemplateListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for IncidentTemplate#create.
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
IncidentTemplateCreateData = Struct.new(
  :expressions,
  :name,
  :template,
  keyword_init: true
)

# Request payload for IncidentTemplate#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] template
#   @return [Hash, nil]
IncidentTemplateUpdateData = Struct.new(
  :id,
  :expressions,
  :name,
  :template,
  keyword_init: true
)

# Request payload for IncidentTemplate#remove.
#
# @!attribute [rw] id
#   @return [String]
IncidentTemplateRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# IncidentTemplatesValidateResultV1 entity data model.
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
#
# @!attribute [rw] warnings
#   @return [Array]
IncidentTemplatesValidateResultV1 = Struct.new(
  :expressions,
  :name,
  :template,
  :warnings,
  keyword_init: true
)

# Request payload for IncidentTemplatesValidateResultV1#create.
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] template
#   @return [Hash]
IncidentTemplatesValidateResultV1CreateData = Struct.new(
  :expressions,
  :name,
  :template,
  keyword_init: true
)

# IncidentTimelineItem entity data model.
#
# @!attribute [rw] activity_log_id
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentTimelineItem = Struct.new(
  :activity_log_id,
  :created_at,
  :creator,
  :description,
  :id,
  :idempotency_key,
  :incident_id,
  :timestamp,
  :title,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentTimelineItem#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentTimelineItemListMatch = Struct.new(
  :after,
  :incident_id,
  :page_size,
  keyword_init: true
)

# Request payload for IncidentTimelineItem#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] timestamp
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
IncidentTimelineItemCreateData = Struct.new(
  :description,
  :idempotency_key,
  :incident_id,
  :timestamp,
  :title,
  keyword_init: true
)

# Request payload for IncidentTimelineItem#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
IncidentTimelineItemUpdateData = Struct.new(
  :id,
  :description,
  :timestamp,
  :title,
  keyword_init: true
)

# IncidentTimestamp entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer]
IncidentTimestamp = Struct.new(
  :id,
  :name,
  :rank,
  keyword_init: true
)

# Request payload for IncidentTimestamp#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentTimestampLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentTimestamp#list.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
IncidentTimestampListMatch = Struct.new(
  :id,
  :name,
  :rank,
  keyword_init: true
)

# IncidentType entity data model.
#
# @!attribute [rw] create_in_triage
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_default
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incidents_only
#   @return [Boolean]
#
# @!attribute [rw] updated_at
#   @return [String]
IncidentType = Struct.new(
  :create_in_triage,
  :created_at,
  :description,
  :id,
  :is_default,
  :name,
  :owning_team_ids,
  :private_incidents_only,
  :updated_at,
  keyword_init: true
)

# Request payload for IncidentType#load.
#
# @!attribute [rw] id
#   @return [String]
IncidentTypeLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for IncidentType#list.
#
# @!attribute [rw] create_in_triage
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_default
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incidents_only
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
IncidentTypeListMatch = Struct.new(
  :create_in_triage,
  :created_at,
  :description,
  :id,
  :is_default,
  :name,
  :owning_team_ids,
  :private_incidents_only,
  :updated_at,
  keyword_init: true
)

# IncidentUpdate entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] merged_into_incident_id
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] new_incident_status
#   @return [Hash]
#
# @!attribute [rw] new_severity
#   @return [Hash]
#
# @!attribute [rw] to_incident_status_id
#   @return [String, nil]
#
# @!attribute [rw] to_severity_id
#   @return [String, nil]
#
# @!attribute [rw] updater
#   @return [Hash]
IncidentUpdate = Struct.new(
  :created_at,
  :id,
  :idempotency_key,
  :incident_id,
  :merged_into_incident_id,
  :message,
  :new_incident_status,
  :new_severity,
  :to_incident_status_id,
  :to_severity_id,
  :updater,
  keyword_init: true
)

# Request payload for IncidentUpdate#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
IncidentUpdateListMatch = Struct.new(
  :after,
  :incident_id,
  :page_size,
  keyword_init: true
)

# Request payload for IncidentUpdate#create.
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] message
#   @return [String, nil]
#
# @!attribute [rw] to_incident_status_id
#   @return [String, nil]
#
# @!attribute [rw] to_severity_id
#   @return [String, nil]
IncidentUpdateCreateData = Struct.new(
  :idempotency_key,
  :incident_id,
  :message,
  :to_incident_status_id,
  :to_severity_id,
  keyword_init: true
)

# IpAllowlist entity data model.
#
# @!attribute [rw] allowlist
#   @return [Array]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Integer]
IpAllowlist = Struct.new(
  :allowlist,
  :enabled,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for IpAllowlist#load.
#
# @!attribute [rw] allowlist
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Integer, nil]
IpAllowlistLoadMatch = Struct.new(
  :allowlist,
  :enabled,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for IpAllowlist#update.
#
# @!attribute [rw] allowlist
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] version
#   @return [Integer, nil]
IpAllowlistUpdateData = Struct.new(
  :allowlist,
  :enabled,
  :version,
  keyword_init: true
)

# IpRange entity data model.
#
# @!attribute [rw] cidr
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
IpRange = Struct.new(
  :cidr,
  :description,
  keyword_init: true
)

# Request payload for IpRange#list.
#
# @!attribute [rw] cidr
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
IpRangeListMatch = Struct.new(
  :cidr,
  :description,
  keyword_init: true
)

# MaintenanceWindow entity data model.
#
# @!attribute [rw] alert_condition_groups
#   @return [Array]
#
# @!attribute [rw] archived_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] escalation_targets
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] lead
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notification_message
#   @return [String, nil]
#
# @!attribute [rw] notify_channels
#   @return [Array, nil]
#
# @!attribute [rw] notify_end_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] notify_start_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] reroute_on_end
#   @return [Boolean]
#
# @!attribute [rw] resolve_on_end
#   @return [Boolean]
#
# @!attribute [rw] show_in_sidebar
#   @return [Boolean]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
MaintenanceWindow = Struct.new(
  :alert_condition_groups,
  :archived_at,
  :created_at,
  :end_at,
  :escalation_targets,
  :id,
  :incident_id,
  :lead,
  :name,
  :notification_message,
  :notify_channels,
  :notify_end_minutes_before,
  :notify_start_minutes_before,
  :owning_team_ids,
  :reroute_on_end,
  :resolve_on_end,
  :show_in_sidebar,
  :start_at,
  :updated_at,
  keyword_init: true
)

# Request payload for MaintenanceWindow#load.
#
# @!attribute [rw] id
#   @return [String]
MaintenanceWindowLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for MaintenanceWindow#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
MaintenanceWindowListMatch = Struct.new(
  :after,
  :page_size,
  :status,
  keyword_init: true
)

# Request payload for MaintenanceWindow#create.
#
# @!attribute [rw] alert_condition_groups
#   @return [Array]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] escalation_targets
#   @return [Array, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] lead
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notification_message
#   @return [String, nil]
#
# @!attribute [rw] notify_channels
#   @return [Array, nil]
#
# @!attribute [rw] notify_end_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] notify_start_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] reroute_on_end
#   @return [Boolean, nil]
#
# @!attribute [rw] resolve_on_end
#   @return [Boolean, nil]
#
# @!attribute [rw] show_in_sidebar
#   @return [Boolean]
#
# @!attribute [rw] start_at
#   @return [String]
MaintenanceWindowCreateData = Struct.new(
  :alert_condition_groups,
  :end_at,
  :escalation_targets,
  :incident_id,
  :lead,
  :name,
  :notification_message,
  :notify_channels,
  :notify_end_minutes_before,
  :notify_start_minutes_before,
  :owning_team_ids,
  :reroute_on_end,
  :resolve_on_end,
  :show_in_sidebar,
  :start_at,
  keyword_init: true
)

# Request payload for MaintenanceWindow#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] alert_condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] escalation_targets
#   @return [Array, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] lead
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] notification_message
#   @return [String, nil]
#
# @!attribute [rw] notify_channels
#   @return [Array, nil]
#
# @!attribute [rw] notify_end_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] notify_start_minutes_before
#   @return [Integer, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] reroute_on_end
#   @return [Boolean, nil]
#
# @!attribute [rw] resolve_on_end
#   @return [Boolean, nil]
#
# @!attribute [rw] show_in_sidebar
#   @return [Boolean, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
MaintenanceWindowUpdateData = Struct.new(
  :id,
  :alert_condition_groups,
  :end_at,
  :escalation_targets,
  :incident_id,
  :lead,
  :name,
  :notification_message,
  :notify_channels,
  :notify_end_minutes_before,
  :notify_start_minutes_before,
  :owning_team_ids,
  :reroute_on_end,
  :resolve_on_end,
  :show_in_sidebar,
  :start_at,
  keyword_init: true
)

# Request payload for MaintenanceWindow#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] force
#   @return [Boolean, nil]
MaintenanceWindowRemoveMatch = Struct.new(
  :id,
  :force,
  keyword_init: true
)

# ManagedResource entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] managed_by
#   @return [String]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
#
# @!attribute [rw] source_url
#   @return [String, nil]
ManagedResource = Struct.new(
  :annotations,
  :managed_by,
  :resource_id,
  :resource_type,
  :source_url,
  keyword_init: true
)

# Request payload for ManagedResource#create.
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] resource_id
#   @return [String]
#
# @!attribute [rw] resource_type
#   @return [String]
ManagedResourceCreateData = Struct.new(
  :annotations,
  :resource_id,
  :resource_type,
  keyword_init: true
)

# OnCallNotificationMethodPublicV2 entity data model.
#
# @!attribute [rw] address
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_usable
#   @return [Boolean]
#
# @!attribute [rw] method_type
#   @return [String]
#
# @!attribute [rw] phone_details
#   @return [Hash]
OnCallNotificationMethodPublicV2 = Struct.new(
  :address,
  :id,
  :is_usable,
  :method_type,
  :phone_details,
  keyword_init: true
)

# Request payload for OnCallNotificationMethodPublicV2#list.
#
# @!attribute [rw] user_id
#   @return [String]
OnCallNotificationMethodPublicV2ListMatch = Struct.new(
  :user_id,
  keyword_init: true
)

# OnCallNotificationPause entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] ends_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String, nil]
#
# @!attribute [rw] starts_at
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_id
#   @return [String]
OnCallNotificationPause = Struct.new(
  :created_at,
  :ends_at,
  :id,
  :reason,
  :starts_at,
  :updated_at,
  :user_id,
  keyword_init: true
)

# Request payload for OnCallNotificationPause#load.
#
# @!attribute [rw] id
#   @return [String]
OnCallNotificationPauseLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for OnCallNotificationPause#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] from
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] to
#   @return [String, nil]
OnCallNotificationPauseListMatch = Struct.new(
  :after,
  :from,
  :page_size,
  :to,
  keyword_init: true
)

# OnCallNotificationRulePublicV2 entity data model.
#
# @!attribute [rw] app
#   @return [Hash]
#
# @!attribute [rw] delay_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] method_target
#   @return [Hash]
#
# @!attribute [rw] method_type
#   @return [String]
#
# @!attribute [rw] phone
#   @return [Hash]
#
# @!attribute [rw] rule_type
#   @return [String]
OnCallNotificationRulePublicV2 = Struct.new(
  :app,
  :delay_seconds,
  :id,
  :method_target,
  :method_type,
  :phone,
  :rule_type,
  keyword_init: true
)

# Request payload for OnCallNotificationRulePublicV2#list.
#
# @!attribute [rw] user_id
#   @return [String]
OnCallNotificationRulePublicV2ListMatch = Struct.new(
  :user_id,
  keyword_init: true
)

# PayConfig entity data model.
#
# @!attribute [rw] base_rate_cents
#   @return [Integer]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] currency
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] one_off_rules
#   @return [Array]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] rate_time_unit
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] weekly_rules
#   @return [Array]
PayConfig = Struct.new(
  :base_rate_cents,
  :created_at,
  :currency,
  :id,
  :name,
  :one_off_rules,
  :published_at,
  :rate_time_unit,
  :timezone,
  :updated_at,
  :weekly_rules,
  keyword_init: true
)

# Request payload for PayConfig#load.
#
# @!attribute [rw] id
#   @return [String]
PayConfigLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PayConfig#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PayConfigListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for PayConfig#create.
#
# @!attribute [rw] base_rate_cents
#   @return [Integer]
#
# @!attribute [rw] currency
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] one_off_rules
#   @return [Array, nil]
#
# @!attribute [rw] rate_time_unit
#   @return [String]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] weekly_rules
#   @return [Array, nil]
PayConfigCreateData = Struct.new(
  :base_rate_cents,
  :currency,
  :name,
  :one_off_rules,
  :rate_time_unit,
  :timezone,
  :weekly_rules,
  keyword_init: true
)

# Request payload for PayConfig#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] base_rate_cents
#   @return [Integer, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rate_time_unit
#   @return [String, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
PayConfigUpdateData = Struct.new(
  :id,
  :base_rate_cents,
  :currency,
  :name,
  :rate_time_unit,
  :timezone,
  keyword_init: true
)

# Request payload for PayConfig#remove.
#
# @!attribute [rw] id
#   @return [String]
PayConfigRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# PayConfigsCreateOneOffRuleResultV2 entity data model.
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_at
#   @return [String]
PayConfigsCreateOneOffRuleResultV2 = Struct.new(
  :end_at,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# Request payload for PayConfigsCreateOneOffRuleResultV2#create.
#
# @!attribute [rw] pay_config_id
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_at
#   @return [String]
PayConfigsCreateOneOffRuleResultV2CreateData = Struct.new(
  :pay_config_id,
  :end_at,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# PayConfigsCreateWeeklyRuleResultV2 entity data model.
#
# @!attribute [rw] end_time
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] weekdays
#   @return [Array]
PayConfigsCreateWeeklyRuleResultV2 = Struct.new(
  :end_time,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# Request payload for PayConfigsCreateWeeklyRuleResultV2#create.
#
# @!attribute [rw] pay_config_id
#   @return [String]
#
# @!attribute [rw] end_time
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] weekdays
#   @return [Array]
PayConfigsCreateWeeklyRuleResultV2CreateData = Struct.new(
  :pay_config_id,
  :end_time,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# PayConfigsListOneOffRulesResultV2 entity data model.
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_at
#   @return [String]
PayConfigsListOneOffRulesResultV2 = Struct.new(
  :end_at,
  :id,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# Request payload for PayConfigsListOneOffRulesResultV2#list.
#
# @!attribute [rw] pay_config_id
#   @return [String]
PayConfigsListOneOffRulesResultV2ListMatch = Struct.new(
  :pay_config_id,
  keyword_init: true
)

# PayConfigsListWeeklyRulesResultV2 entity data model.
#
# @!attribute [rw] end_time
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] weekdays
#   @return [Array]
PayConfigsListWeeklyRulesResultV2 = Struct.new(
  :end_time,
  :id,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# Request payload for PayConfigsListWeeklyRulesResultV2#list.
#
# @!attribute [rw] pay_config_id
#   @return [String]
PayConfigsListWeeklyRulesResultV2ListMatch = Struct.new(
  :pay_config_id,
  keyword_init: true
)

# PayConfigsShowOneOffRuleResultV2 entity data model.
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_at
#   @return [String]
PayConfigsShowOneOffRuleResultV2 = Struct.new(
  :end_at,
  :id,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# Request payload for PayConfigsShowOneOffRuleResultV2#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pay_config_id
#   @return [String]
PayConfigsShowOneOffRuleResultV2LoadMatch = Struct.new(
  :id,
  :pay_config_id,
  keyword_init: true
)

# PayConfigsShowWeeklyRuleResultV2 entity data model.
#
# @!attribute [rw] end_time
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] weekdays
#   @return [Array]
PayConfigsShowWeeklyRuleResultV2 = Struct.new(
  :end_time,
  :id,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# Request payload for PayConfigsShowWeeklyRuleResultV2#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pay_config_id
#   @return [String]
PayConfigsShowWeeklyRuleResultV2LoadMatch = Struct.new(
  :id,
  :pay_config_id,
  keyword_init: true
)

# PayConfigsUpdateOneOffRuleResultV2 entity data model.
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_at
#   @return [String]
PayConfigsUpdateOneOffRuleResultV2 = Struct.new(
  :end_at,
  :id,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# Request payload for PayConfigsUpdateOneOffRuleResultV2#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pay_config_id
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rate_cents
#   @return [Integer, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
PayConfigsUpdateOneOffRuleResultV2UpdateData = Struct.new(
  :id,
  :pay_config_id,
  :end_at,
  :name,
  :rate_cents,
  :start_at,
  keyword_init: true
)

# PayConfigsUpdateWeeklyRuleResultV2 entity data model.
#
# @!attribute [rw] end_time
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] rate_cents
#   @return [Integer]
#
# @!attribute [rw] start_time
#   @return [String]
#
# @!attribute [rw] weekdays
#   @return [Array]
PayConfigsUpdateWeeklyRuleResultV2 = Struct.new(
  :end_time,
  :id,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# Request payload for PayConfigsUpdateWeeklyRuleResultV2#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pay_config_id
#   @return [String]
#
# @!attribute [rw] end_time
#   @return [String, nil]
#
# @!attribute [rw] rate_cents
#   @return [Integer, nil]
#
# @!attribute [rw] start_time
#   @return [String, nil]
#
# @!attribute [rw] weekdays
#   @return [Array, nil]
PayConfigsUpdateWeeklyRuleResultV2UpdateData = Struct.new(
  :id,
  :pay_config_id,
  :end_time,
  :rate_cents,
  :start_time,
  :weekdays,
  keyword_init: true
)

# PayConfigsV2 entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
PayConfigsV2 = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PayConfigsV2#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] pay_config_id
#   @return [String]
PayConfigsV2RemoveMatch = Struct.new(
  :id,
  :pay_config_id,
  keyword_init: true
)

# PayReport entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] error_code
#   @return [String, nil]
#
# @!attribute [rw] error_message
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overlapping_shifts
#   @return [String]
#
# @!attribute [rw] pay_config_expression
#   @return [Hash]
#
# @!attribute [rw] pay_config_id
#   @return [String, nil]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] rotation_filters
#   @return [Array, nil]
#
# @!attribute [rw] schedule_ids
#   @return [Array]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] total_duration_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] total_pay_by_currency
#   @return [Hash, nil]
#
# @!attribute [rw] unpaid_shifts
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
PayReport = Struct.new(
  :created_at,
  :creator,
  :end_date,
  :error_code,
  :error_message,
  :id,
  :name,
  :overlapping_shifts,
  :pay_config_expression,
  :pay_config_id,
  :published_at,
  :rotation_filters,
  :schedule_ids,
  :start_date,
  :status,
  :total_duration_seconds,
  :total_pay_by_currency,
  :unpaid_shifts,
  :updated_at,
  keyword_init: true
)

# Request payload for PayReport#load.
#
# @!attribute [rw] id
#   @return [String]
PayReportLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PayReport#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PayReportListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for PayReport#create.
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overlapping_shifts
#   @return [String, nil]
#
# @!attribute [rw] pay_config_expression
#   @return [Hash]
#
# @!attribute [rw] pay_config_id
#   @return [String, nil]
#
# @!attribute [rw] rotation_filters
#   @return [Array, nil]
#
# @!attribute [rw] schedule_ids
#   @return [Array]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] unpaid_shifts
#   @return [String, nil]
PayReportCreateData = Struct.new(
  :end_date,
  :name,
  :overlapping_shifts,
  :pay_config_expression,
  :pay_config_id,
  :rotation_filters,
  :schedule_ids,
  :start_date,
  :unpaid_shifts,
  keyword_init: true
)

# Request payload for PayReport#remove.
#
# @!attribute [rw] id
#   @return [String]
PayReportRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# PayReportsPublishResultV2 entity data model.
#
# @!attribute [rw] cc_emails
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] error_code
#   @return [String, nil]
#
# @!attribute [rw] error_message
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overlapping_shifts
#   @return [String]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] schedule_ids
#   @return [Array]
#
# @!attribute [rw] send_user_breakdowns
#   @return [String]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] total_duration_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] total_pay_by_currency
#   @return [Hash, nil]
#
# @!attribute [rw] unpaid_shifts
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
PayReportsPublishResultV2 = Struct.new(
  :cc_emails,
  :created_at,
  :creator,
  :end_date,
  :error_code,
  :error_message,
  :id,
  :name,
  :overlapping_shifts,
  :published_at,
  :schedule_ids,
  :send_user_breakdowns,
  :start_date,
  :status,
  :total_duration_seconds,
  :total_pay_by_currency,
  :unpaid_shifts,
  :updated_at,
  keyword_init: true
)

# Request payload for PayReportsPublishResultV2#create.
#
# @!attribute [rw] pay_report_id
#   @return [String]
#
# @!attribute [rw] cc_emails
#   @return [Array]
#
# @!attribute [rw] send_user_breakdowns
#   @return [String]
PayReportsPublishResultV2CreateData = Struct.new(
  :pay_report_id,
  :cc_emails,
  :send_user_breakdowns,
  keyword_init: true
)

# PayReportsUnpublishResultV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] creator
#   @return [Hash, nil]
#
# @!attribute [rw] end_date
#   @return [String]
#
# @!attribute [rw] error_code
#   @return [String, nil]
#
# @!attribute [rw] error_message
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] overlapping_shifts
#   @return [String]
#
# @!attribute [rw] published_at
#   @return [String, nil]
#
# @!attribute [rw] schedule_ids
#   @return [Array]
#
# @!attribute [rw] start_date
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] total_duration_seconds
#   @return [Integer, nil]
#
# @!attribute [rw] total_pay_by_currency
#   @return [Hash, nil]
#
# @!attribute [rw] unpaid_shifts
#   @return [String]
#
# @!attribute [rw] unpublish_reason
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
PayReportsUnpublishResultV2 = Struct.new(
  :created_at,
  :creator,
  :end_date,
  :error_code,
  :error_message,
  :id,
  :name,
  :overlapping_shifts,
  :published_at,
  :schedule_ids,
  :start_date,
  :status,
  :total_duration_seconds,
  :total_pay_by_currency,
  :unpaid_shifts,
  :unpublish_reason,
  :updated_at,
  keyword_init: true
)

# Request payload for PayReportsUnpublishResultV2#create.
#
# @!attribute [rw] pay_report_id
#   @return [String]
#
# @!attribute [rw] unpublish_reason
#   @return [String]
PayReportsUnpublishResultV2CreateData = Struct.new(
  :pay_report_id,
  :unpublish_reason,
  keyword_init: true
)

# PayReportsV2 entity data model.
class PayReportsV2
end

# Request payload for PayReportsV2#load.
#
# @!attribute [rw] pay_report_id
#   @return [String]
PayReportsV2LoadMatch = Struct.new(
  :pay_report_id,
  keyword_init: true
)

# PoliciesV2 entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
PoliciesV2 = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PoliciesV2#remove.
#
# @!attribute [rw] id
#   @return [String]
PoliciesV2RemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Policy entity data model.
#
# @!attribute [rw] assignment_rules
#   @return [Hash]
#
# @!attribute [rw] conditions
#   @return [Array]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash, nil]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Policy = Struct.new(
  :assignment_rules,
  :conditions,
  :created_at,
  :debrief,
  :description,
  :expressions,
  :follow_up,
  :id,
  :name,
  :on_call_readiness,
  :policy_type,
  :post_mortem,
  :schedule,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for Policy#load.
#
# @!attribute [rw] id
#   @return [String]
PolicyLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Policy#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] policy_type
#   @return [String, nil]
PolicyListMatch = Struct.new(
  :after,
  :page_size,
  :policy_type,
  keyword_init: true
)

# Request payload for Policy#create.
#
# @!attribute [rw] assignment_rules
#   @return [Hash]
#
# @!attribute [rw] conditions
#   @return [Array]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash, nil]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] status
#   @return [String, nil]
PolicyCreateData = Struct.new(
  :assignment_rules,
  :conditions,
  :debrief,
  :description,
  :expressions,
  :follow_up,
  :name,
  :on_call_readiness,
  :policy_type,
  :post_mortem,
  :schedule,
  :status,
  keyword_init: true
)

# Request payload for Policy#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] assignment_rules
#   @return [Hash, nil]
#
# @!attribute [rw] conditions
#   @return [Array, nil]
#
# @!attribute [rw] debrief
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash, nil]
#
# @!attribute [rw] policy_type
#   @return [String, nil]
#
# @!attribute [rw] post_mortem
#   @return [Hash, nil]
#
# @!attribute [rw] schedule
#   @return [Hash, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
PolicyUpdateData = Struct.new(
  :id,
  :assignment_rules,
  :conditions,
  :debrief,
  :description,
  :expressions,
  :follow_up,
  :name,
  :on_call_readiness,
  :policy_type,
  :post_mortem,
  :schedule,
  :status,
  keyword_init: true
)

# PolicyFinding entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] dismissal
#   @return [Hash]
#
# @!attribute [rw] due_at
#   @return [String, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked_at
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash]
#
# @!attribute [rw] policy_id
#   @return [String]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] responsible_users
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] shift_conflict
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] vacation_conflict
#   @return [Hash]
PolicyFinding = Struct.new(
  :created_at,
  :days,
  :debrief,
  :dismissal,
  :due_at,
  :follow_up,
  :id,
  :last_checked_at,
  :on_call_readiness,
  :policy_id,
  :policy_type,
  :post_mortem,
  :responsible_users,
  :schedule,
  :shift_conflict,
  :state,
  :updated_at,
  :vacation_conflict,
  keyword_init: true
)

# Request payload for PolicyFinding#load.
#
# @!attribute [rw] id
#   @return [String]
PolicyFindingLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PolicyFinding#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] policy_id
#   @return [String, nil]
PolicyFindingListMatch = Struct.new(
  :after,
  :page_size,
  :policy_id,
  keyword_init: true
)

# PolicyFindingsDismissResultV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] dismissal
#   @return [Hash]
#
# @!attribute [rw] due_at
#   @return [String, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked_at
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash]
#
# @!attribute [rw] policy_id
#   @return [String]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] reason
#   @return [String]
#
# @!attribute [rw] responsible_users
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] shift_conflict
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] vacation_conflict
#   @return [Hash]
PolicyFindingsDismissResultV2 = Struct.new(
  :created_at,
  :days,
  :debrief,
  :dismissal,
  :due_at,
  :follow_up,
  :id,
  :last_checked_at,
  :on_call_readiness,
  :policy_id,
  :policy_type,
  :post_mortem,
  :reason,
  :responsible_users,
  :schedule,
  :shift_conflict,
  :state,
  :updated_at,
  :vacation_conflict,
  keyword_init: true
)

# Request payload for PolicyFindingsDismissResultV2#create.
#
# @!attribute [rw] policy_finding_id
#   @return [String]
#
# @!attribute [rw] reason
#   @return [String]
PolicyFindingsDismissResultV2CreateData = Struct.new(
  :policy_finding_id,
  :reason,
  keyword_init: true
)

# PolicyFindingsRestoreResultV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] dismissal
#   @return [Hash]
#
# @!attribute [rw] due_at
#   @return [String, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked_at
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash]
#
# @!attribute [rw] policy_id
#   @return [String]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] responsible_users
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] shift_conflict
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] vacation_conflict
#   @return [Hash]
PolicyFindingsRestoreResultV2 = Struct.new(
  :created_at,
  :days,
  :debrief,
  :dismissal,
  :due_at,
  :follow_up,
  :id,
  :last_checked_at,
  :on_call_readiness,
  :policy_id,
  :policy_type,
  :post_mortem,
  :responsible_users,
  :schedule,
  :shift_conflict,
  :state,
  :updated_at,
  :vacation_conflict,
  keyword_init: true
)

# Request payload for PolicyFindingsRestoreResultV2#create.
#
# @!attribute [rw] policy_finding_id
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] days
#   @return [Integer, nil]
#
# @!attribute [rw] debrief
#   @return [Hash]
#
# @!attribute [rw] dismissal
#   @return [Hash]
#
# @!attribute [rw] due_at
#   @return [String, nil]
#
# @!attribute [rw] follow_up
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_checked_at
#   @return [String]
#
# @!attribute [rw] on_call_readiness
#   @return [Hash]
#
# @!attribute [rw] policy_id
#   @return [String]
#
# @!attribute [rw] policy_type
#   @return [String]
#
# @!attribute [rw] post_mortem
#   @return [Hash]
#
# @!attribute [rw] responsible_users
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] shift_conflict
#   @return [Hash]
#
# @!attribute [rw] state
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] vacation_conflict
#   @return [Hash]
PolicyFindingsRestoreResultV2CreateData = Struct.new(
  :policy_finding_id,
  :created_at,
  :days,
  :debrief,
  :dismissal,
  :due_at,
  :follow_up,
  :id,
  :last_checked_at,
  :on_call_readiness,
  :policy_id,
  :policy_type,
  :post_mortem,
  :responsible_users,
  :schedule,
  :shift_conflict,
  :state,
  :updated_at,
  :vacation_conflict,
  keyword_init: true
)

# PostmortemDocument entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] document_url
#   @return [String]
#
# @!attribute [rw] editors
#   @return [Array]
#
# @!attribute [rw] exported_urls
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] title
#   @return [String]
#
# @!attribute [rw] type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
PostmortemDocument = Struct.new(
  :created_at,
  :document_url,
  :editors,
  :exported_urls,
  :id,
  :incident_id,
  :status,
  :title,
  :type,
  :updated_at,
  keyword_init: true
)

# Request payload for PostmortemDocument#load.
#
# @!attribute [rw] id
#   @return [String]
PostmortemDocumentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PostmortemDocument#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] sort_by
#   @return [String, nil]
PostmortemDocumentListMatch = Struct.new(
  :after,
  :incident_id,
  :page_size,
  :sort_by,
  keyword_init: true
)

# Request payload for PostmortemDocument#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] status
#   @return [String, nil]
PostmortemDocumentUpdateData = Struct.new(
  :id,
  :status,
  keyword_init: true
)

# Schedule entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash]
#
# @!attribute [rw] config
#   @return [Hash]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] current_shifts
#   @return [Array, nil]
#
# @!attribute [rw] holidays_public_config
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] next_shifts
#   @return [Array, nil]
#
# @!attribute [rw] permalink
#   @return [String]
#
# @!attribute [rw] team_ids
#   @return [Array]
#
# @!attribute [rw] timezone
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
Schedule = Struct.new(
  :annotations,
  :config,
  :created_at,
  :current_shifts,
  :holidays_public_config,
  :id,
  :name,
  :next_shifts,
  :permalink,
  :team_ids,
  :timezone,
  :updated_at,
  keyword_init: true
)

# Request payload for Schedule#load.
#
# @!attribute [rw] id
#   @return [String]
ScheduleLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Schedule#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
ScheduleListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for Schedule#create.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] holidays_public_config
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] team_ids
#   @return [Array, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
ScheduleCreateData = Struct.new(
  :annotations,
  :config,
  :holidays_public_config,
  :name,
  :team_ids,
  :timezone,
  keyword_init: true
)

# Request payload for Schedule#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] config
#   @return [Hash, nil]
#
# @!attribute [rw] holidays_public_config
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] team_ids
#   @return [Array, nil]
#
# @!attribute [rw] timezone
#   @return [String, nil]
ScheduleUpdateData = Struct.new(
  :id,
  :annotations,
  :config,
  :holidays_public_config,
  :name,
  :team_ids,
  :timezone,
  keyword_init: true
)

# Request payload for Schedule#remove.
#
# @!attribute [rw] id
#   @return [String]
ScheduleRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# ScheduleEntriesListPayloadV2 entity data model.
#
# @!attribute [rw] entry_window_end
#   @return [String, nil]
#
# @!attribute [rw] entry_window_start
#   @return [String, nil]
#
# @!attribute [rw] final
#   @return [Array]
#
# @!attribute [rw] overrides
#   @return [Array]
#
# @!attribute [rw] schedule
#   @return [Hash]
#
# @!attribute [rw] scheduled
#   @return [Array]
ScheduleEntriesListPayloadV2 = Struct.new(
  :entry_window_end,
  :entry_window_start,
  :final,
  :overrides,
  :schedule,
  :scheduled,
  keyword_init: true
)

# Request payload for ScheduleEntriesListPayloadV2#create.
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] entry_window_end
#   @return [String, nil]
#
# @!attribute [rw] entry_window_start
#   @return [String, nil]
#
# @!attribute [rw] schedule
#   @return [Hash]
ScheduleEntriesListPayloadV2CreateData = Struct.new(
  :schedule_id,
  :entry_window_end,
  :entry_window_start,
  :schedule,
  keyword_init: true
)

# ScheduleEntry entity data model.
#
# @!attribute [rw] pagination_meta
#   @return [Hash]
#
# @!attribute [rw] schedule_entries
#   @return [Hash]
ScheduleEntry = Struct.new(
  :pagination_meta,
  :schedule_entries,
  keyword_init: true
)

# Request payload for ScheduleEntry#load.
#
# @!attribute [rw] entry_window_end
#   @return [String, nil]
#
# @!attribute [rw] entry_window_start
#   @return [String, nil]
#
# @!attribute [rw] schedule_id
#   @return [String]
ScheduleEntryLoadMatch = Struct.new(
  :entry_window_end,
  :entry_window_start,
  :schedule_id,
  keyword_init: true
)

# ScheduleReplica entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_sync_error
#   @return [String, nil]
#
# @!attribute [rw] last_synced_at
#   @return [String, nil]
#
# @!attribute [rw] mirror_window_days
#   @return [Integer, nil]
#
# @!attribute [rw] replica_fallback_user_id
#   @return [String]
#
# @!attribute [rw] replica_provider
#   @return [String]
#
# @!attribute [rw] replica_provider_id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] sources
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user_statuses
#   @return [Array]
ScheduleReplica = Struct.new(
  :created_at,
  :id,
  :last_sync_error,
  :last_synced_at,
  :mirror_window_days,
  :replica_fallback_user_id,
  :replica_provider,
  :replica_provider_id,
  :schedule_id,
  :sources,
  :updated_at,
  :user_statuses,
  keyword_init: true
)

# Request payload for ScheduleReplica#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
ScheduleReplicaLoadMatch = Struct.new(
  :id,
  :schedule_id,
  keyword_init: true
)

# Request payload for ScheduleReplica#list.
#
# @!attribute [rw] id
#   @return [String]
ScheduleReplicaListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ScheduleReplica#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] mirror_window_days
#   @return [Integer, nil]
#
# @!attribute [rw] replica_fallback_user_id
#   @return [String]
#
# @!attribute [rw] replica_provider
#   @return [String]
#
# @!attribute [rw] replica_provider_id
#   @return [String]
#
# @!attribute [rw] sources
#   @return [Array]
ScheduleReplicaCreateData = Struct.new(
  :id,
  :mirror_window_days,
  :replica_fallback_user_id,
  :replica_provider,
  :replica_provider_id,
  :sources,
  keyword_init: true
)

# ScheduleSyncRule entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] permanent_member_user_ids
#   @return [Array]
#
# @!attribute [rw] rotation_id
#   @return [String, nil]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] schedule_sync_target
#   @return [Hash]
#
# @!attribute [rw] schedule_sync_target_id
#   @return [String]
#
# @!attribute [rw] sync_type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
ScheduleSyncRule = Struct.new(
  :annotations,
  :created_at,
  :id,
  :permanent_member_user_ids,
  :rotation_id,
  :schedule_id,
  :schedule_sync_target,
  :schedule_sync_target_id,
  :sync_type,
  :updated_at,
  keyword_init: true
)

# Request payload for ScheduleSyncRule#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
ScheduleSyncRuleLoadMatch = Struct.new(
  :id,
  :schedule_id,
  keyword_init: true
)

# Request payload for ScheduleSyncRule#list.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
ScheduleSyncRuleListMatch = Struct.new(
  :id,
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for ScheduleSyncRule#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] permanent_member_user_ids
#   @return [Array, nil]
#
# @!attribute [rw] rotation_id
#   @return [String, nil]
#
# @!attribute [rw] schedule_sync_target_id
#   @return [String]
#
# @!attribute [rw] sync_type
#   @return [String]
ScheduleSyncRuleCreateData = Struct.new(
  :id,
  :annotations,
  :permanent_member_user_ids,
  :rotation_id,
  :schedule_sync_target_id,
  :sync_type,
  keyword_init: true
)

# Request payload for ScheduleSyncRule#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] permanent_member_user_ids
#   @return [Array, nil]
#
# @!attribute [rw] sync_type
#   @return [String, nil]
ScheduleSyncRuleUpdateData = Struct.new(
  :id,
  :schedule_id,
  :annotations,
  :permanent_member_user_ids,
  :sync_type,
  keyword_init: true
)

# ScheduleSyncTarget entity data model.
#
# @!attribute [rw] add_bot_to_group
#   @return [Boolean]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] linked_schedules
#   @return [Array]
#
# @!attribute [rw] new_slack_user_group
#   @return [Hash]
#
# @!attribute [rw] slack_team_id
#   @return [String]
#
# @!attribute [rw] slack_user_group_id
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
ScheduleSyncTarget = Struct.new(
  :add_bot_to_group,
  :annotations,
  :created_at,
  :id,
  :linked_schedules,
  :new_slack_user_group,
  :slack_team_id,
  :slack_user_group_id,
  :updated_at,
  keyword_init: true
)

# Request payload for ScheduleSyncTarget#load.
#
# @!attribute [rw] id
#   @return [String]
ScheduleSyncTargetLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ScheduleSyncTarget#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
ScheduleSyncTargetListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# Request payload for ScheduleSyncTarget#create.
#
# @!attribute [rw] add_bot_to_group
#   @return [Boolean]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] new_slack_user_group
#   @return [Hash]
#
# @!attribute [rw] slack_user_group_id
#   @return [String, nil]
ScheduleSyncTargetCreateData = Struct.new(
  :add_bot_to_group,
  :annotations,
  :new_slack_user_group,
  :slack_user_group_id,
  keyword_init: true
)

# Request payload for ScheduleSyncTarget#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] add_bot_to_group
#   @return [Boolean, nil]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
ScheduleSyncTargetUpdateData = Struct.new(
  :id,
  :add_bot_to_group,
  :annotations,
  keyword_init: true
)

# Request payload for ScheduleSyncTarget#remove.
#
# @!attribute [rw] id
#   @return [String]
ScheduleSyncTargetRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# SchedulesShowOverrideResultV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] layer_id
#   @return [String]
#
# @!attribute [rw] rotation_id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash]
SchedulesShowOverrideResultV2 = Struct.new(
  :created_at,
  :end_at,
  :id,
  :layer_id,
  :rotation_id,
  :schedule_id,
  :start_at,
  :updated_at,
  :user,
  keyword_init: true
)

# Request payload for SchedulesShowOverrideResultV2#load.
#
# @!attribute [rw] id
#   @return [String]
SchedulesShowOverrideResultV2LoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for SchedulesShowOverrideResultV2#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] layer_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] rotation_id
#   @return [String, nil]
#
# @!attribute [rw] schedule_id
#   @return [String]
SchedulesShowOverrideResultV2ListMatch = Struct.new(
  :after,
  :layer_id,
  :page_size,
  :rotation_id,
  :schedule_id,
  keyword_init: true
)

# Request payload for SchedulesShowOverrideResultV2#create.
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] layer_id
#   @return [String]
#
# @!attribute [rw] rotation_id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash]
SchedulesShowOverrideResultV2CreateData = Struct.new(
  :end_at,
  :layer_id,
  :rotation_id,
  :schedule_id,
  :start_at,
  :user,
  keyword_init: true
)

# SchedulesUpdateOverrideResultV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] layer_id
#   @return [String]
#
# @!attribute [rw] rotation_id
#   @return [String]
#
# @!attribute [rw] schedule_id
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] user
#   @return [Hash]
SchedulesUpdateOverrideResultV2 = Struct.new(
  :created_at,
  :end_at,
  :id,
  :layer_id,
  :rotation_id,
  :schedule_id,
  :start_at,
  :updated_at,
  :user,
  keyword_init: true
)

# Request payload for SchedulesUpdateOverrideResultV2#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] layer_id
#   @return [String, nil]
#
# @!attribute [rw] rotation_id
#   @return [String, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [Hash, nil]
SchedulesUpdateOverrideResultV2UpdateData = Struct.new(
  :id,
  :end_at,
  :layer_id,
  :rotation_id,
  :start_at,
  :user,
  keyword_init: true
)

# Secret entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] last_four_chars
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] secret
#   @return [Hash]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] value
#   @return [String]
#
# @!attribute [rw] version
#   @return [Integer]
#
# @!attribute [rw] versions
#   @return [Array]
Secret = Struct.new(
  :created_at,
  :description,
  :id,
  :last_four_chars,
  :name,
  :owning_team_ids,
  :secret,
  :updated_at,
  :value,
  :version,
  :versions,
  keyword_init: true
)

# Request payload for Secret#load.
#
# @!attribute [rw] id
#   @return [String]
SecretLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Secret#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] team_id
#   @return [Array, nil]
SecretListMatch = Struct.new(
  :after,
  :page_size,
  :team_id,
  keyword_init: true
)

# Request payload for Secret#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] value
#   @return [String]
SecretCreateData = Struct.new(
  :description,
  :name,
  :owning_team_ids,
  :value,
  keyword_init: true
)

# Request payload for Secret#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
SecretUpdateData = Struct.new(
  :id,
  :description,
  :name,
  :owning_team_ids,
  keyword_init: true
)

# Request payload for Secret#remove.
#
# @!attribute [rw] id
#   @return [String]
SecretRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# Severity entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer]
#
# @!attribute [rw] updated_at
#   @return [String]
Severity = Struct.new(
  :created_at,
  :description,
  :id,
  :name,
  :rank,
  :updated_at,
  keyword_init: true
)

# Request payload for Severity#load.
#
# @!attribute [rw] id
#   @return [String]
SeverityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Severity#list.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
SeverityListMatch = Struct.new(
  :created_at,
  :description,
  :id,
  :name,
  :rank,
  :updated_at,
  keyword_init: true
)

# Request payload for Severity#create.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
SeverityCreateData = Struct.new(
  :description,
  :name,
  :rank,
  keyword_init: true
)

# Request payload for Severity#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] rank
#   @return [Integer, nil]
SeverityUpdateData = Struct.new(
  :id,
  :description,
  :name,
  :rank,
  keyword_init: true
)

# StatusPage entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] public_url
#   @return [String, nil]
StatusPage = Struct.new(
  :description,
  :id,
  :name,
  :public_url,
  keyword_init: true
)

# Request payload for StatusPage#load.
#
# @!attribute [rw] id
#   @return [String]
StatusPageLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StatusPage#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
StatusPageListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# StatusPageComponent entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] management_meta
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
StatusPageComponent = Struct.new(
  :description,
  :id,
  :management_meta,
  :name,
  keyword_init: true
)

# Request payload for StatusPageComponent#load.
#
# @!attribute [rw] id
#   @return [String]
StatusPageComponentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StatusPageComponent#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] management_meta
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
StatusPageComponentListMatch = Struct.new(
  :description,
  :id,
  :management_meta,
  :name,
  keyword_init: true
)

# Request payload for StatusPageComponent#create.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
StatusPageComponentCreateData = Struct.new(
  :description,
  :name,
  keyword_init: true
)

# Request payload for StatusPageComponent#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
StatusPageComponentUpdateData = Struct.new(
  :id,
  :description,
  :name,
  keyword_init: true
)

# Request payload for StatusPageComponent#remove.
#
# @!attribute [rw] id
#   @return [String]
StatusPageComponentRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# StatusPageComponentAvailabilityV2 entity data model.
#
# @!attribute [rw] availability_percent
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] data_available_since
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
StatusPageComponentAvailabilityV2 = Struct.new(
  :availability_percent,
  :component_id,
  :data_available_since,
  :end_at,
  :start_at,
  :status_page_id,
  keyword_init: true
)

# Request payload for StatusPageComponentAvailabilityV2#load.
#
# @!attribute [rw] component_id
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
StatusPageComponentAvailabilityV2LoadMatch = Struct.new(
  :component_id,
  :status_page_id,
  :end_at,
  :start_at,
  keyword_init: true
)

# StatusPageIncident entity data model.
#
# @!attribute [rw] component_impacts
#   @return [Array]
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_status
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] published_at
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
#
# @!attribute [rw] updates
#   @return [Array]
StatusPageIncident = Struct.new(
  :component_impacts,
  :component_statuses,
  :id,
  :idempotency_key,
  :incident_status,
  :message,
  :name,
  :notify_subscribers,
  :published_at,
  :status_page_id,
  :updates,
  keyword_init: true
)

# Request payload for StatusPageIncident#load.
#
# @!attribute [rw] id
#   @return [String]
StatusPageIncidentLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StatusPageIncident#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [String, nil]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
#
# @!attribute [rw] status_page_id
#   @return [String]
#
# @!attribute [rw] sub_page_id
#   @return [String, nil]
StatusPageIncidentListMatch = Struct.new(
  :after,
  :component_id,
  :end_at,
  :group_id,
  :page_size,
  :start_at,
  :status_page_id,
  :sub_page_id,
  keyword_init: true
)

# Request payload for StatusPageIncident#create.
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] incident_status
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] status_page_id
#   @return [String]
StatusPageIncidentCreateData = Struct.new(
  :component_statuses,
  :idempotency_key,
  :incident_status,
  :message,
  :name,
  :notify_subscribers,
  :status_page_id,
  keyword_init: true
)

# Request payload for StatusPageIncident#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
StatusPageIncidentUpdateData = Struct.new(
  :id,
  :name,
  keyword_init: true
)

# StatusPageIncidentUpdate entity data model.
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] incident_status
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] status_page_incident_id
#   @return [String]
StatusPageIncidentUpdate = Struct.new(
  :component_statuses,
  :incident_status,
  :message,
  :notify_subscribers,
  :status_page_incident_id,
  keyword_init: true
)

# Request payload for StatusPageIncidentUpdate#create.
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] incident_status
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] status_page_incident_id
#   @return [String]
StatusPageIncidentUpdateCreateData = Struct.new(
  :component_statuses,
  :incident_status,
  :message,
  :notify_subscribers,
  :status_page_incident_id,
  keyword_init: true
)

# StatusPageLinkedResponseIncidentV1 entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] linked_at
#   @return [String]
StatusPageLinkedResponseIncidentV1 = Struct.new(
  :id,
  :linked_at,
  keyword_init: true
)

# Request payload for StatusPageLinkedResponseIncidentV1#list.
#
# @!attribute [rw] incident_id
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
StatusPageLinkedResponseIncidentV1ListMatch = Struct.new(
  :incident_id,
  :status_page_id,
  keyword_init: true
)

# StatusPageMaintenance entity data model.
#
# @!attribute [rw] affected_component_ids
#   @return [Array]
#
# @!attribute [rw] automate_maintenance_status
#   @return [Boolean]
#
# @!attribute [rw] component_maintenance_periods
#   @return [Array]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] maintenance_status
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] published_at
#   @return [String]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
#
# @!attribute [rw] updates
#   @return [Array]
StatusPageMaintenance = Struct.new(
  :affected_component_ids,
  :automate_maintenance_status,
  :component_maintenance_periods,
  :end_at,
  :id,
  :idempotency_key,
  :maintenance_status,
  :message,
  :name,
  :notify_subscribers,
  :published_at,
  :start_at,
  :status_page_id,
  :updates,
  keyword_init: true
)

# Request payload for StatusPageMaintenance#load.
#
# @!attribute [rw] id
#   @return [String]
StatusPageMaintenanceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StatusPageMaintenance#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] component_id
#   @return [String, nil]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] group_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
#
# @!attribute [rw] status_page_id
#   @return [String]
#
# @!attribute [rw] sub_page_id
#   @return [String, nil]
StatusPageMaintenanceListMatch = Struct.new(
  :after,
  :component_id,
  :end_at,
  :group_id,
  :page_size,
  :start_at,
  :status_page_id,
  :sub_page_id,
  keyword_init: true
)

# Request payload for StatusPageMaintenance#create.
#
# @!attribute [rw] affected_component_ids
#   @return [Array]
#
# @!attribute [rw] automate_maintenance_status
#   @return [Boolean, nil]
#
# @!attribute [rw] end_at
#   @return [String]
#
# @!attribute [rw] idempotency_key
#   @return [String]
#
# @!attribute [rw] maintenance_status
#   @return [String]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] start_at
#   @return [String]
#
# @!attribute [rw] status_page_id
#   @return [String]
StatusPageMaintenanceCreateData = Struct.new(
  :affected_component_ids,
  :automate_maintenance_status,
  :end_at,
  :idempotency_key,
  :maintenance_status,
  :message,
  :name,
  :notify_subscribers,
  :start_at,
  :status_page_id,
  keyword_init: true
)

# Request payload for StatusPageMaintenance#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] end_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] start_at
#   @return [String, nil]
StatusPageMaintenanceUpdateData = Struct.new(
  :id,
  :end_at,
  :name,
  :start_at,
  keyword_init: true
)

# StatusPageMaintenanceUpdate entity data model.
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] maintenance_status
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] status_page_maintenance_id
#   @return [String]
StatusPageMaintenanceUpdate = Struct.new(
  :component_statuses,
  :maintenance_status,
  :message,
  :notify_subscribers,
  :status_page_maintenance_id,
  keyword_init: true
)

# Request payload for StatusPageMaintenanceUpdate#create.
#
# @!attribute [rw] component_statuses
#   @return [Array, nil]
#
# @!attribute [rw] maintenance_status
#   @return [String, nil]
#
# @!attribute [rw] message
#   @return [String]
#
# @!attribute [rw] notify_subscribers
#   @return [Boolean]
#
# @!attribute [rw] status_page_maintenance_id
#   @return [String]
StatusPageMaintenanceUpdateCreateData = Struct.new(
  :component_statuses,
  :maintenance_status,
  :message,
  :notify_subscribers,
  :status_page_maintenance_id,
  keyword_init: true
)

# StatusPageStructure entity data model.
#
# @!attribute [rw] current_structure
#   @return [Hash]
#
# @!attribute [rw] display_uptime_mode
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] management_meta
#   @return [Hash]
StatusPageStructure = Struct.new(
  :current_structure,
  :display_uptime_mode,
  :id,
  :management_meta,
  keyword_init: true
)

# Request payload for StatusPageStructure#load.
#
# @!attribute [rw] id
#   @return [String]
StatusPageStructureLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# StatusPagesV2 entity data model.
class StatusPagesV2
end

# Request payload for StatusPagesV2#remove.
#
# @!attribute [rw] status_page_maintenance_id
#   @return [String]
StatusPagesV2RemoveMatch = Struct.new(
  :status_page_maintenance_id,
  keyword_init: true
)

# Team entity data model.
#
# @!attribute [rw] catalog_entry
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] members
#   @return [Array]
#
# @!attribute [rw] name
#   @return [String]
Team = Struct.new(
  :catalog_entry,
  :id,
  :members,
  :name,
  keyword_init: true
)

# Request payload for Team#load.
#
# @!attribute [rw] id
#   @return [String]
TeamLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Team#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
TeamListMatch = Struct.new(
  :after,
  :page_size,
  keyword_init: true
)

# TelemetryDataSourceV2 entity data model.
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] datadog_config
#   @return [Hash, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] grafana_config
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String]
#
# @!attribute [rw] source_type
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] version
#   @return [String, nil]
TelemetryDataSourceV2 = Struct.new(
  :created_at,
  :datadog_config,
  :enabled,
  :grafana_config,
  :id,
  :name,
  :provider,
  :source_type,
  :updated_at,
  :version,
  keyword_init: true
)

# Request payload for TelemetryDataSourceV2#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] datadog_config
#   @return [Hash, nil]
#
# @!attribute [rw] grafana_config
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
TelemetryDataSourceV2UpdateData = Struct.new(
  :id,
  :datadog_config,
  :grafana_config,
  :name,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] base_role
#   @return [Hash]
#
# @!attribute [rw] custom_roles
#   @return [Array]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] is_active
#   @return [Boolean]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] seats
#   @return [Hash]
#
# @!attribute [rw] slack_user_id
#   @return [String, nil]
User = Struct.new(
  :base_role,
  :custom_roles,
  :email,
  :id,
  :is_active,
  :name,
  :role,
  :seats,
  :slack_user_id,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [String]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] include_inactive
#   @return [Boolean, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] slack_user_id
#   @return [String, nil]
UserListMatch = Struct.new(
  :after,
  :email,
  :include_inactive,
  :page_size,
  :slack_user_id,
  keyword_init: true
)

# Request payload for User#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] preferred_escalation_provider
#   @return [Object, nil]
UserCreateData = Struct.new(
  :id,
  :preferred_escalation_provider,
  keyword_init: true
)

# Workflow entity data model.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] auto_run_mode
#   @return [String, nil]
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] continue_on_step_error
#   @return [Boolean]
#
# @!attribute [rw] delay
#   @return [Hash]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] folder
#   @return [String, nil]
#
# @!attribute [rw] form_fields
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] include_private_escalations
#   @return [Boolean, nil]
#
# @!attribute [rw] include_private_incidents
#   @return [Boolean, nil]
#
# @!attribute [rw] management_meta
#   @return [Hash]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] once_for
#   @return [Array]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] runs_from
#   @return [String, nil]
#
# @!attribute [rw] runs_on_incident_modes
#   @return [Array]
#
# @!attribute [rw] runs_on_incidents
#   @return [String]
#
# @!attribute [rw] shortform
#   @return [String, nil]
#
# @!attribute [rw] skip_step_upgrades
#   @return [Boolean, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] steps
#   @return [Array]
#
# @!attribute [rw] trigger
#   @return [String]
#
# @!attribute [rw] version
#   @return [Integer]
#
# @!attribute [rw] workflow
#   @return [Hash]
Workflow = Struct.new(
  :annotations,
  :auto_run_mode,
  :condition_groups,
  :continue_on_step_error,
  :delay,
  :expressions,
  :folder,
  :form_fields,
  :id,
  :include_private_escalations,
  :include_private_incidents,
  :management_meta,
  :name,
  :once_for,
  :owning_team_ids,
  :private_incident_scope,
  :runs_from,
  :runs_on_incident_modes,
  :runs_on_incidents,
  :shortform,
  :skip_step_upgrades,
  :state,
  :steps,
  :trigger,
  :version,
  :workflow,
  keyword_init: true
)

# Request payload for Workflow#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] skip_step_upgrade
#   @return [Boolean, nil]
WorkflowLoadMatch = Struct.new(
  :id,
  :skip_step_upgrade,
  keyword_init: true
)

# Request payload for Workflow#list.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] auto_run_mode
#   @return [String, nil]
#
# @!attribute [rw] condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] continue_on_step_error
#   @return [Boolean, nil]
#
# @!attribute [rw] delay
#   @return [Hash, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] folder
#   @return [String, nil]
#
# @!attribute [rw] form_fields
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_private_escalations
#   @return [Boolean, nil]
#
# @!attribute [rw] include_private_incidents
#   @return [Boolean, nil]
#
# @!attribute [rw] management_meta
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] once_for
#   @return [Array, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] runs_from
#   @return [String, nil]
#
# @!attribute [rw] runs_on_incident_modes
#   @return [Array, nil]
#
# @!attribute [rw] runs_on_incidents
#   @return [String, nil]
#
# @!attribute [rw] shortform
#   @return [String, nil]
#
# @!attribute [rw] skip_step_upgrades
#   @return [Boolean, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
#
# @!attribute [rw] trigger
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [Integer, nil]
#
# @!attribute [rw] workflow
#   @return [Hash, nil]
WorkflowListMatch = Struct.new(
  :annotations,
  :auto_run_mode,
  :condition_groups,
  :continue_on_step_error,
  :delay,
  :expressions,
  :folder,
  :form_fields,
  :id,
  :include_private_escalations,
  :include_private_incidents,
  :management_meta,
  :name,
  :once_for,
  :owning_team_ids,
  :private_incident_scope,
  :runs_from,
  :runs_on_incident_modes,
  :runs_on_incidents,
  :shortform,
  :skip_step_upgrades,
  :state,
  :steps,
  :trigger,
  :version,
  :workflow,
  keyword_init: true
)

# Request payload for Workflow#create.
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] auto_run_mode
#   @return [String, nil]
#
# @!attribute [rw] condition_groups
#   @return [Array]
#
# @!attribute [rw] continue_on_step_error
#   @return [Boolean]
#
# @!attribute [rw] delay
#   @return [Hash]
#
# @!attribute [rw] expressions
#   @return [Array]
#
# @!attribute [rw] folder
#   @return [String, nil]
#
# @!attribute [rw] form_fields
#   @return [Array, nil]
#
# @!attribute [rw] include_private_escalations
#   @return [Boolean, nil]
#
# @!attribute [rw] include_private_incidents
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] once_for
#   @return [Array]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] runs_on_incident_modes
#   @return [Array]
#
# @!attribute [rw] runs_on_incidents
#   @return [String]
#
# @!attribute [rw] shortform
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] steps
#   @return [Array]
#
# @!attribute [rw] trigger
#   @return [String]
WorkflowCreateData = Struct.new(
  :annotations,
  :auto_run_mode,
  :condition_groups,
  :continue_on_step_error,
  :delay,
  :expressions,
  :folder,
  :form_fields,
  :include_private_escalations,
  :include_private_incidents,
  :name,
  :once_for,
  :owning_team_ids,
  :private_incident_scope,
  :runs_on_incident_modes,
  :runs_on_incidents,
  :shortform,
  :state,
  :steps,
  :trigger,
  keyword_init: true
)

# Request payload for Workflow#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] annotations
#   @return [Hash, nil]
#
# @!attribute [rw] auto_run_mode
#   @return [String, nil]
#
# @!attribute [rw] condition_groups
#   @return [Array, nil]
#
# @!attribute [rw] continue_on_step_error
#   @return [Boolean, nil]
#
# @!attribute [rw] delay
#   @return [Hash, nil]
#
# @!attribute [rw] expressions
#   @return [Array, nil]
#
# @!attribute [rw] folder
#   @return [String, nil]
#
# @!attribute [rw] form_fields
#   @return [Array, nil]
#
# @!attribute [rw] include_private_escalations
#   @return [Boolean, nil]
#
# @!attribute [rw] include_private_incidents
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] once_for
#   @return [Array, nil]
#
# @!attribute [rw] owning_team_ids
#   @return [Array, nil]
#
# @!attribute [rw] private_incident_scope
#   @return [String, nil]
#
# @!attribute [rw] runs_on_incident_modes
#   @return [Array, nil]
#
# @!attribute [rw] runs_on_incidents
#   @return [String, nil]
#
# @!attribute [rw] shortform
#   @return [String, nil]
#
# @!attribute [rw] skip_step_upgrades
#   @return [Boolean, nil]
#
# @!attribute [rw] state
#   @return [String, nil]
#
# @!attribute [rw] steps
#   @return [Array, nil]
WorkflowUpdateData = Struct.new(
  :id,
  :annotations,
  :auto_run_mode,
  :condition_groups,
  :continue_on_step_error,
  :delay,
  :expressions,
  :folder,
  :form_fields,
  :include_private_escalations,
  :include_private_incidents,
  :name,
  :once_for,
  :owning_team_ids,
  :private_incident_scope,
  :runs_on_incident_modes,
  :runs_on_incidents,
  :shortform,
  :skip_step_upgrades,
  :state,
  :steps,
  keyword_init: true
)

# Request payload for Workflow#remove.
#
# @!attribute [rw] id
#   @return [String]
WorkflowRemoveMatch = Struct.new(
  :id,
  keyword_init: true
)

# WorkflowRun entity data model.
#
# @!attribute [rw] cancelled_at
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String]
#
# @!attribute [rw] enqueued_at
#   @return [String, nil]
#
# @!attribute [rw] error
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] incident_reference
#   @return [String, nil]
#
# @!attribute [rw] progress
#   @return [Array]
#
# @!attribute [rw] scheduled_at
#   @return [String]
#
# @!attribute [rw] updated_at
#   @return [String]
#
# @!attribute [rw] workflow_id
#   @return [String]
#
# @!attribute [rw] workflow_name
#   @return [String, nil]
#
# @!attribute [rw] workflow_version_id
#   @return [String]
#
# @!attribute [rw] workflow_version_number
#   @return [Integer]
WorkflowRun = Struct.new(
  :cancelled_at,
  :created_at,
  :enqueued_at,
  :error,
  :id,
  :incident_id,
  :incident_reference,
  :progress,
  :scheduled_at,
  :updated_at,
  :workflow_id,
  :workflow_name,
  :workflow_version_id,
  :workflow_version_number,
  keyword_init: true
)

# Request payload for WorkflowRun#load.
#
# @!attribute [rw] id
#   @return [String]
WorkflowRunLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for WorkflowRun#list.
#
# @!attribute [rw] after
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [Hash, nil]
#
# @!attribute [rw] incident_id
#   @return [String, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] workflow_id
#   @return [String, nil]
WorkflowRunListMatch = Struct.new(
  :after,
  :created_at,
  :incident_id,
  :page_size,
  :workflow_id,
  keyword_init: true
)


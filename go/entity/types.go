// Typed models for the IncidentIo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Action is the typed data model for the action entity.
type Action struct {
	Assignee map[string]any `json:"assignee"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description string `json:"description"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
}

// ActionLoadMatch is the typed request payload for Action.LoadTyped.
type ActionLoadMatch struct {
	Id string `json:"id"`
}

// ActionListMatch is the typed request payload for Action.ListTyped.
type ActionListMatch struct {
	Assignee *map[string]any `json:"assignee,omitempty"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ActionCreateData is the typed request payload for Action.CreateTyped.
type ActionCreateData struct {
	Assignee map[string]any `json:"assignee"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description string `json:"description"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Status string `json:"status"`
	UpdatedAt string `json:"updated_at"`
}

// ActionUpdateData is the typed request payload for Action.UpdateTyped.
type ActionUpdateData struct {
	Id string `json:"id"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// ActionRemoveMatch is the typed request payload for Action.RemoveTyped.
type ActionRemoveMatch struct {
	Id string `json:"id"`
}

// Alert is the typed data model for the alert entity.
type Alert struct {
	AlertGroupId *[]any `json:"alert_group_id,omitempty"`
	AlertSourceId string `json:"alert_source_id"`
	Attribute []any `json:"attribute"`
	CreatedAt string `json:"created_at"`
	DeduplicationKey string `json:"deduplication_key"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Status string `json:"status"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
}

// AlertLoadMatch is the typed request payload for Alert.LoadTyped.
type AlertLoadMatch struct {
	Id string `json:"id"`
}

// AlertListMatch is the typed request payload for Alert.ListTyped.
type AlertListMatch struct {
	AlertGroupId *[]any `json:"alert_group_id,omitempty"`
	AlertSourceId *string `json:"alert_source_id,omitempty"`
	Attribute *[]any `json:"attribute,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DeduplicationKey *string `json:"deduplication_key,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// AlertAttribute is the typed data model for the alert_attribute entity.
type AlertAttribute struct {
	Array bool `json:"array"`
	Emoji *string `json:"emoji,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Required bool `json:"required"`
	Type string `json:"type"`
}

// AlertAttributeLoadMatch is the typed request payload for AlertAttribute.LoadTyped.
type AlertAttributeLoadMatch struct {
	Id string `json:"id"`
}

// AlertAttributeListMatch is the typed request payload for AlertAttribute.ListTyped.
type AlertAttributeListMatch struct {
	Array *bool `json:"array,omitempty"`
	Emoji *string `json:"emoji,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Required *bool `json:"required,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AlertAttributeCreateData is the typed request payload for AlertAttribute.CreateTyped.
type AlertAttributeCreateData struct {
	Array bool `json:"array"`
	Emoji *string `json:"emoji,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	Required bool `json:"required"`
	Type string `json:"type"`
}

// AlertAttributeUpdateData is the typed request payload for AlertAttribute.UpdateTyped.
type AlertAttributeUpdateData struct {
	Id string `json:"id"`
	Array *bool `json:"array,omitempty"`
	Emoji *string `json:"emoji,omitempty"`
	Name *string `json:"name,omitempty"`
	Required *bool `json:"required,omitempty"`
	Type *string `json:"type,omitempty"`
}

// AlertAttributeRemoveMatch is the typed request payload for AlertAttribute.RemoveTyped.
type AlertAttributeRemoveMatch struct {
	Id string `json:"id"`
}

// AlertNote is the typed data model for the alert_note entity.
type AlertNote struct {
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Content string `json:"content"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Id string `json:"id"`
	Image []any `json:"image"`
	LastEditedAt *string `json:"last_edited_at,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// AlertNoteLoadMatch is the typed request payload for AlertNote.LoadTyped.
type AlertNoteLoadMatch struct {
	Id string `json:"id"`
}

// AlertNoteListMatch is the typed request payload for AlertNote.ListTyped.
type AlertNoteListMatch struct {
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id *string `json:"id,omitempty"`
	Image *[]any `json:"image,omitempty"`
	LastEditedAt *string `json:"last_edited_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// AlertNoteCreateData is the typed request payload for AlertNote.CreateTyped.
type AlertNoteCreateData struct {
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Content string `json:"content"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Id string `json:"id"`
	Image []any `json:"image"`
	LastEditedAt *string `json:"last_edited_at,omitempty"`
	UpdatedAt string `json:"updated_at"`
}

// AlertNoteUpdateData is the typed request payload for AlertNote.UpdateTyped.
type AlertNoteUpdateData struct {
	Id string `json:"id"`
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Content *string `json:"content,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Image *[]any `json:"image,omitempty"`
	LastEditedAt *string `json:"last_edited_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// AlertNoteRemoveMatch is the typed request payload for AlertNote.RemoveTyped.
type AlertNoteRemoveMatch struct {
	Id string `json:"id"`
}

// AlertRoute is the typed data model for the alert_route entity.
type AlertRoute struct {
	AlertSource []any `json:"alert_source"`
	ConditionGroup []any `json:"condition_group"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled bool `json:"enabled"`
	EscalationConfig map[string]any `json:"escalation_config"`
	Expression []any `json:"expression"`
	GroupingConfig map[string]any `json:"grouping_config"`
	Id string `json:"id"`
	IncidentConfig map[string]any `json:"incident_config"`
	IsPrivate bool `json:"is_private"`
	MessageConfig map[string]any `json:"message_config"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version int `json:"version"`
}

// AlertRouteLoadMatch is the typed request payload for AlertRoute.LoadTyped.
type AlertRouteLoadMatch struct {
	Id string `json:"id"`
}

// AlertRouteListMatch is the typed request payload for AlertRoute.ListTyped.
type AlertRouteListMatch struct {
	AlertSource *[]any `json:"alert_source,omitempty"`
	ConditionGroup *[]any `json:"condition_group,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EscalationConfig *map[string]any `json:"escalation_config,omitempty"`
	Expression *[]any `json:"expression,omitempty"`
	GroupingConfig *map[string]any `json:"grouping_config,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentConfig *map[string]any `json:"incident_config,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	MessageConfig *map[string]any `json:"message_config,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *int `json:"version,omitempty"`
}

// AlertRouteCreateData is the typed request payload for AlertRoute.CreateTyped.
type AlertRouteCreateData struct {
	AlertSource []any `json:"alert_source"`
	ConditionGroup []any `json:"condition_group"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled bool `json:"enabled"`
	EscalationConfig map[string]any `json:"escalation_config"`
	Expression []any `json:"expression"`
	GroupingConfig map[string]any `json:"grouping_config"`
	Id string `json:"id"`
	IncidentConfig map[string]any `json:"incident_config"`
	IsPrivate bool `json:"is_private"`
	MessageConfig map[string]any `json:"message_config"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version int `json:"version"`
}

// AlertRouteUpdateData is the typed request payload for AlertRoute.UpdateTyped.
type AlertRouteUpdateData struct {
	Id string `json:"id"`
	AlertSource *[]any `json:"alert_source,omitempty"`
	ConditionGroup *[]any `json:"condition_group,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EscalationConfig *map[string]any `json:"escalation_config,omitempty"`
	Expression *[]any `json:"expression,omitempty"`
	GroupingConfig *map[string]any `json:"grouping_config,omitempty"`
	IncidentConfig *map[string]any `json:"incident_config,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	MessageConfig *map[string]any `json:"message_config,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *int `json:"version,omitempty"`
}

// AlertRouteRemoveMatch is the typed request payload for AlertRoute.RemoveTyped.
type AlertRouteRemoveMatch struct {
	Id string `json:"id"`
}

// AlertSource is the typed data model for the alert_source entity.
type AlertSource struct {
	AlertEventsUrl *string `json:"alert_events_url,omitempty"`
	AutoResolveIncidentAlert *bool `json:"auto_resolve_incident_alert,omitempty"`
	AutoResolveTimeoutMinute *int `json:"auto_resolve_timeout_minute,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOption map[string]any `json:"email_option"`
	HeartbeatOption map[string]any `json:"heartbeat_option"`
	HttpCustomOption map[string]any `json:"http_custom_option"`
	Id string `json:"id"`
	JiraOption map[string]any `json:"jira_option"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	SecretToken *string `json:"secret_token,omitempty"`
	SourceType string `json:"source_type"`
	Template map[string]any `json:"template"`
}

// AlertSourceLoadMatch is the typed request payload for AlertSource.LoadTyped.
type AlertSourceLoadMatch struct {
	Id string `json:"id"`
}

// AlertSourceListMatch is the typed request payload for AlertSource.ListTyped.
type AlertSourceListMatch struct {
	AlertEventsUrl *string `json:"alert_events_url,omitempty"`
	AutoResolveIncidentAlert *bool `json:"auto_resolve_incident_alert,omitempty"`
	AutoResolveTimeoutMinute *int `json:"auto_resolve_timeout_minute,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOption *map[string]any `json:"email_option,omitempty"`
	HeartbeatOption *map[string]any `json:"heartbeat_option,omitempty"`
	HttpCustomOption *map[string]any `json:"http_custom_option,omitempty"`
	Id *string `json:"id,omitempty"`
	JiraOption *map[string]any `json:"jira_option,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	SecretToken *string `json:"secret_token,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
}

// AlertSourceCreateData is the typed request payload for AlertSource.CreateTyped.
type AlertSourceCreateData struct {
	AlertEventsUrl *string `json:"alert_events_url,omitempty"`
	AutoResolveIncidentAlert *bool `json:"auto_resolve_incident_alert,omitempty"`
	AutoResolveTimeoutMinute *int `json:"auto_resolve_timeout_minute,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOption map[string]any `json:"email_option"`
	HeartbeatOption map[string]any `json:"heartbeat_option"`
	HttpCustomOption map[string]any `json:"http_custom_option"`
	Id string `json:"id"`
	JiraOption map[string]any `json:"jira_option"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	SecretToken *string `json:"secret_token,omitempty"`
	SourceType string `json:"source_type"`
	Template map[string]any `json:"template"`
}

// AlertSourceUpdateData is the typed request payload for AlertSource.UpdateTyped.
type AlertSourceUpdateData struct {
	Id string `json:"id"`
	AlertEventsUrl *string `json:"alert_events_url,omitempty"`
	AutoResolveIncidentAlert *bool `json:"auto_resolve_incident_alert,omitempty"`
	AutoResolveTimeoutMinute *int `json:"auto_resolve_timeout_minute,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOption *map[string]any `json:"email_option,omitempty"`
	HeartbeatOption *map[string]any `json:"heartbeat_option,omitempty"`
	HttpCustomOption *map[string]any `json:"http_custom_option,omitempty"`
	JiraOption *map[string]any `json:"jira_option,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	SecretToken *string `json:"secret_token,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
}

// AlertSourceRemoveMatch is the typed request payload for AlertSource.RemoveTyped.
type AlertSourceRemoveMatch struct {
	Id string `json:"id"`
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
	Comment *string `json:"comment,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Id string `json:"id"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name string `json:"name"`
	Role []any `json:"role"`
	RoleName []any `json:"role_name"`
	TeamId []any `json:"team_id"`
	TeamRole []any `json:"team_role"`
	TeamRoleName []any `json:"team_role_name"`
	TokenLastIssuedAt string `json:"token_last_issued_at"`
}

// ApiKeyLoadMatch is the typed request payload for ApiKey.LoadTyped.
type ApiKeyLoadMatch struct {
	Id string `json:"id"`
}

// ApiKeyListMatch is the typed request payload for ApiKey.ListTyped.
type ApiKeyListMatch struct {
	Comment *string `json:"comment,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Id *string `json:"id,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *[]any `json:"role,omitempty"`
	RoleName *[]any `json:"role_name,omitempty"`
	TeamId *[]any `json:"team_id,omitempty"`
	TeamRole *[]any `json:"team_role,omitempty"`
	TeamRoleName *[]any `json:"team_role_name,omitempty"`
	TokenLastIssuedAt *string `json:"token_last_issued_at,omitempty"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	Comment *string `json:"comment,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Id string `json:"id"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name string `json:"name"`
	Role []any `json:"role"`
	RoleName []any `json:"role_name"`
	TeamId []any `json:"team_id"`
	TeamRole []any `json:"team_role"`
	TeamRoleName []any `json:"team_role_name"`
	TokenLastIssuedAt string `json:"token_last_issued_at"`
}

// ApiKeyUpdateData is the typed request payload for ApiKey.UpdateTyped.
type ApiKeyUpdateData struct {
	Id string `json:"id"`
	Comment *string `json:"comment,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	LastUsedAt *string `json:"last_used_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *[]any `json:"role,omitempty"`
	RoleName *[]any `json:"role_name,omitempty"`
	TeamId *[]any `json:"team_id,omitempty"`
	TeamRole *[]any `json:"team_role,omitempty"`
	TeamRoleName *[]any `json:"team_role_name,omitempty"`
	TokenLastIssuedAt *string `json:"token_last_issued_at,omitempty"`
}

// ApiKeyRemoveMatch is the typed request payload for ApiKey.RemoveTyped.
type ApiKeyRemoveMatch struct {
	Id string `json:"id"`
}

// CustomField is the typed data model for the custom_field entity.
type CustomField struct {
	CatalogTypeId *string `json:"catalog_type_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	FieldType string `json:"field_type"`
	FilterBy map[string]any `json:"filter_by"`
	FixedFilter map[string]any `json:"fixed_filter"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	UpdatedAt string `json:"updated_at"`
}

// CustomFieldLoadMatch is the typed request payload for CustomField.LoadTyped.
type CustomFieldLoadMatch struct {
	Id string `json:"id"`
}

// CustomFieldListMatch is the typed request payload for CustomField.ListTyped.
type CustomFieldListMatch struct {
	CatalogTypeId *string `json:"catalog_type_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FieldType *string `json:"field_type,omitempty"`
	FilterBy *map[string]any `json:"filter_by,omitempty"`
	FixedFilter *map[string]any `json:"fixed_filter,omitempty"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CustomFieldCreateData is the typed request payload for CustomField.CreateTyped.
type CustomFieldCreateData struct {
	CatalogTypeId *string `json:"catalog_type_id,omitempty"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	FieldType string `json:"field_type"`
	FilterBy map[string]any `json:"filter_by"`
	FixedFilter map[string]any `json:"fixed_filter"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Id string `json:"id"`
	Name string `json:"name"`
	UpdatedAt string `json:"updated_at"`
}

// CustomFieldUpdateData is the typed request payload for CustomField.UpdateTyped.
type CustomFieldUpdateData struct {
	Id string `json:"id"`
	CatalogTypeId *string `json:"catalog_type_id,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	FieldType *string `json:"field_type,omitempty"`
	FilterBy *map[string]any `json:"filter_by,omitempty"`
	FixedFilter *map[string]any `json:"fixed_filter,omitempty"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Name *string `json:"name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CustomFieldRemoveMatch is the typed request payload for CustomField.RemoveTyped.
type CustomFieldRemoveMatch struct {
	Id string `json:"id"`
}

// CustomFieldOption is the typed data model for the custom_field_option entity.
type CustomFieldOption struct {
	CustomFieldId string `json:"custom_field_id"`
	Id string `json:"id"`
	SortKey int `json:"sort_key"`
	Value string `json:"value"`
}

// CustomFieldOptionLoadMatch is the typed request payload for CustomFieldOption.LoadTyped.
type CustomFieldOptionLoadMatch struct {
	Id string `json:"id"`
}

// CustomFieldOptionListMatch is the typed request payload for CustomFieldOption.ListTyped.
type CustomFieldOptionListMatch struct {
	CustomFieldId *string `json:"custom_field_id,omitempty"`
	Id *string `json:"id,omitempty"`
	SortKey *int `json:"sort_key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomFieldOptionCreateData is the typed request payload for CustomFieldOption.CreateTyped.
type CustomFieldOptionCreateData struct {
	CustomFieldId string `json:"custom_field_id"`
	Id string `json:"id"`
	SortKey int `json:"sort_key"`
	Value string `json:"value"`
}

// CustomFieldOptionUpdateData is the typed request payload for CustomFieldOption.UpdateTyped.
type CustomFieldOptionUpdateData struct {
	Id string `json:"id"`
	CustomFieldId *string `json:"custom_field_id,omitempty"`
	SortKey *int `json:"sort_key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomFieldOptionRemoveMatch is the typed request payload for CustomFieldOption.RemoveTyped.
type CustomFieldOptionRemoveMatch struct {
	Id string `json:"id"`
}

// FollowUp is the typed data model for the follow_up entity.
type FollowUp struct {
	Assignee map[string]any `json:"assignee"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeam map[string]any `json:"assignee_team"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	ExternalIssueReference map[string]any `json:"external_issue_reference"`
	ExternalIssueReferenceId *string `json:"external_issue_reference_id,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Label []any `json:"label"`
	Priority map[string]any `json:"priority"`
	Status string `json:"status"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
}

// FollowUpLoadMatch is the typed request payload for FollowUp.LoadTyped.
type FollowUpLoadMatch struct {
	Id string `json:"id"`
}

// FollowUpListMatch is the typed request payload for FollowUp.ListTyped.
type FollowUpListMatch struct {
	Assignee *map[string]any `json:"assignee,omitempty"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeam *map[string]any `json:"assignee_team,omitempty"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalIssueReference *map[string]any `json:"external_issue_reference,omitempty"`
	ExternalIssueReferenceId *string `json:"external_issue_reference_id,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Label *[]any `json:"label,omitempty"`
	Priority *map[string]any `json:"priority,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// FollowUpCreateData is the typed request payload for FollowUp.CreateTyped.
type FollowUpCreateData struct {
	Assignee map[string]any `json:"assignee"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeam map[string]any `json:"assignee_team"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	Description *string `json:"description,omitempty"`
	ExternalIssueReference map[string]any `json:"external_issue_reference"`
	ExternalIssueReferenceId *string `json:"external_issue_reference_id,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Label []any `json:"label"`
	Priority map[string]any `json:"priority"`
	Status string `json:"status"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
}

// FollowUpUpdateData is the typed request payload for FollowUp.UpdateTyped.
type FollowUpUpdateData struct {
	Id string `json:"id"`
	Assignee *map[string]any `json:"assignee,omitempty"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeam *map[string]any `json:"assignee_team,omitempty"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	CompletedAt *string `json:"completed_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalIssueReference *map[string]any `json:"external_issue_reference,omitempty"`
	ExternalIssueReferenceId *string `json:"external_issue_reference_id,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Label *[]any `json:"label,omitempty"`
	Priority *map[string]any `json:"priority,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// FollowUpRemoveMatch is the typed request payload for FollowUp.RemoveTyped.
type FollowUpRemoveMatch struct {
	Id string `json:"id"`
}

// Incident is the typed data model for the incident entity.
type Incident struct {
	CallUrl *string `json:"call_url,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	CustomFieldEntry []any `json:"custom_field_entry"`
	DurationMetric *[]any `json:"duration_metric,omitempty"`
	ExternalIssueReference map[string]any `json:"external_issue_reference"`
	HasDebrief *bool `json:"has_debrief,omitempty"`
	Id string `json:"id"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentRoleAssignment []any `json:"incident_role_assignment"`
	IncidentStatus map[string]any `json:"incident_status"`
	IncidentStatusId *string `json:"incident_status_id,omitempty"`
	IncidentTimestampValue *[]any `json:"incident_timestamp_value,omitempty"`
	IncidentType map[string]any `json:"incident_type"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	Mode string `json:"mode"`
	Name string `json:"name"`
	Permalink *string `json:"permalink,omitempty"`
	PostmortemDocumentId *[]any `json:"postmortem_document_id,omitempty"`
	PostmortemDocumentUrl *string `json:"postmortem_document_url,omitempty"`
	Reference string `json:"reference"`
	RetrospectiveIncidentOption *map[string]any `json:"retrospective_incident_option,omitempty"`
	Severity map[string]any `json:"severity"`
	SeverityId *string `json:"severity_id,omitempty"`
	SlackChannelId string `json:"slack_channel_id"`
	SlackChannelName *string `json:"slack_channel_name,omitempty"`
	SlackChannelNameOverride *string `json:"slack_channel_name_override,omitempty"`
	SlackTeamId string `json:"slack_team_id"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Visibility string `json:"visibility"`
	WorkloadMinutesLate *float64 `json:"workload_minutes_late,omitempty"`
	WorkloadMinutesSleeping *float64 `json:"workload_minutes_sleeping,omitempty"`
	WorkloadMinutesTotal *float64 `json:"workload_minutes_total,omitempty"`
	WorkloadMinutesWorking *float64 `json:"workload_minutes_working,omitempty"`
}

// IncidentLoadMatch is the typed request payload for Incident.LoadTyped.
type IncidentLoadMatch struct {
	Id string `json:"id"`
}

// IncidentListMatch is the typed request payload for Incident.ListTyped.
type IncidentListMatch struct {
	CallUrl *string `json:"call_url,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Creator *map[string]any `json:"creator,omitempty"`
	CustomFieldEntry *[]any `json:"custom_field_entry,omitempty"`
	DurationMetric *[]any `json:"duration_metric,omitempty"`
	ExternalIssueReference *map[string]any `json:"external_issue_reference,omitempty"`
	HasDebrief *bool `json:"has_debrief,omitempty"`
	Id *string `json:"id,omitempty"`
	IdempotencyKey *string `json:"idempotency_key,omitempty"`
	IncidentRoleAssignment *[]any `json:"incident_role_assignment,omitempty"`
	IncidentStatus *map[string]any `json:"incident_status,omitempty"`
	IncidentStatusId *string `json:"incident_status_id,omitempty"`
	IncidentTimestampValue *[]any `json:"incident_timestamp_value,omitempty"`
	IncidentType *map[string]any `json:"incident_type,omitempty"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	Permalink *string `json:"permalink,omitempty"`
	PostmortemDocumentId *[]any `json:"postmortem_document_id,omitempty"`
	PostmortemDocumentUrl *string `json:"postmortem_document_url,omitempty"`
	Reference *string `json:"reference,omitempty"`
	RetrospectiveIncidentOption *map[string]any `json:"retrospective_incident_option,omitempty"`
	Severity *map[string]any `json:"severity,omitempty"`
	SeverityId *string `json:"severity_id,omitempty"`
	SlackChannelId *string `json:"slack_channel_id,omitempty"`
	SlackChannelName *string `json:"slack_channel_name,omitempty"`
	SlackChannelNameOverride *string `json:"slack_channel_name_override,omitempty"`
	SlackTeamId *string `json:"slack_team_id,omitempty"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
	WorkloadMinutesLate *float64 `json:"workload_minutes_late,omitempty"`
	WorkloadMinutesSleeping *float64 `json:"workload_minutes_sleeping,omitempty"`
	WorkloadMinutesTotal *float64 `json:"workload_minutes_total,omitempty"`
	WorkloadMinutesWorking *float64 `json:"workload_minutes_working,omitempty"`
}

// IncidentCreateData is the typed request payload for Incident.CreateTyped.
type IncidentCreateData struct {
	CallUrl *string `json:"call_url,omitempty"`
	CreatedAt string `json:"created_at"`
	Creator map[string]any `json:"creator"`
	CustomFieldEntry []any `json:"custom_field_entry"`
	DurationMetric *[]any `json:"duration_metric,omitempty"`
	ExternalIssueReference map[string]any `json:"external_issue_reference"`
	HasDebrief *bool `json:"has_debrief,omitempty"`
	Id string `json:"id"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentRoleAssignment []any `json:"incident_role_assignment"`
	IncidentStatus map[string]any `json:"incident_status"`
	IncidentStatusId *string `json:"incident_status_id,omitempty"`
	IncidentTimestampValue *[]any `json:"incident_timestamp_value,omitempty"`
	IncidentType map[string]any `json:"incident_type"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	Mode string `json:"mode"`
	Name string `json:"name"`
	Permalink *string `json:"permalink,omitempty"`
	PostmortemDocumentId *[]any `json:"postmortem_document_id,omitempty"`
	PostmortemDocumentUrl *string `json:"postmortem_document_url,omitempty"`
	Reference string `json:"reference"`
	RetrospectiveIncidentOption *map[string]any `json:"retrospective_incident_option,omitempty"`
	Severity map[string]any `json:"severity"`
	SeverityId *string `json:"severity_id,omitempty"`
	SlackChannelId string `json:"slack_channel_id"`
	SlackChannelName *string `json:"slack_channel_name,omitempty"`
	SlackChannelNameOverride *string `json:"slack_channel_name_override,omitempty"`
	SlackTeamId string `json:"slack_team_id"`
	Summary *string `json:"summary,omitempty"`
	UpdatedAt string `json:"updated_at"`
	Visibility string `json:"visibility"`
	WorkloadMinutesLate *float64 `json:"workload_minutes_late,omitempty"`
	WorkloadMinutesSleeping *float64 `json:"workload_minutes_sleeping,omitempty"`
	WorkloadMinutesTotal *float64 `json:"workload_minutes_total,omitempty"`
	WorkloadMinutesWorking *float64 `json:"workload_minutes_working,omitempty"`
}

// IncidentAttachment is the typed data model for the incident_attachment entity.
type IncidentAttachment struct {
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Resource map[string]any `json:"resource"`
}

// IncidentAttachmentListMatch is the typed request payload for IncidentAttachment.ListTyped.
type IncidentAttachmentListMatch struct {
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Resource *map[string]any `json:"resource,omitempty"`
}

// IncidentAttachmentCreateData is the typed request payload for IncidentAttachment.CreateTyped.
type IncidentAttachmentCreateData struct {
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Resource map[string]any `json:"resource"`
}

// IncidentAttachmentRemoveMatch is the typed request payload for IncidentAttachment.RemoveTyped.
type IncidentAttachmentRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentMembership is the typed data model for the incident_membership entity.
type IncidentMembership struct {
	IncidentId string `json:"incident_id"`
	UserId string `json:"user_id"`
}

// IncidentMembershipCreateData is the typed request payload for IncidentMembership.CreateTyped.
type IncidentMembershipCreateData struct {
	IncidentId string `json:"incident_id"`
	UserId string `json:"user_id"`
}

// IncidentParticipant is the typed data model for the incident_participant entity.
type IncidentParticipant struct {
	Active []any `json:"active"`
	Passive []any `json:"passive"`
}

// IncidentParticipantLoadMatch is the typed request payload for IncidentParticipant.LoadTyped.
type IncidentParticipantLoadMatch struct {
	Active *[]any `json:"active,omitempty"`
	Passive *[]any `json:"passive,omitempty"`
}

// IncidentParticipantWorkload is the typed data model for the incident_participant_workload entity.
type IncidentParticipantWorkload struct {
	ArchivedAt *string `json:"archived_at,omitempty"`
	ParticipantType *string `json:"participant_type,omitempty"`
	User map[string]any `json:"user"`
	Workload map[string]any `json:"workload"`
}

// IncidentParticipantWorkloadListMatch is the typed request payload for IncidentParticipantWorkload.ListTyped.
type IncidentParticipantWorkloadListMatch struct {
	ArchivedAt *string `json:"archived_at,omitempty"`
	ParticipantType *string `json:"participant_type,omitempty"`
	User *map[string]any `json:"user,omitempty"`
	Workload *map[string]any `json:"workload,omitempty"`
}

// IncidentRelationship is the typed data model for the incident_relationship entity.
type IncidentRelationship struct {
	Id string `json:"id"`
	Incident map[string]any `json:"incident"`
}

// IncidentRelationshipListMatch is the typed request payload for IncidentRelationship.ListTyped.
type IncidentRelationshipListMatch struct {
	Id *string `json:"id,omitempty"`
	Incident *map[string]any `json:"incident,omitempty"`
}

// IncidentRole is the typed data model for the incident_role entity.
type IncidentRole struct {
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id string `json:"id"`
	Instruction string `json:"instruction"`
	Name string `json:"name"`
	RoleType string `json:"role_type"`
	Shortform string `json:"shortform"`
	UpdatedAt string `json:"updated_at"`
}

// IncidentRoleLoadMatch is the typed request payload for IncidentRole.LoadTyped.
type IncidentRoleLoadMatch struct {
	Id string `json:"id"`
}

// IncidentRoleListMatch is the typed request payload for IncidentRole.ListTyped.
type IncidentRoleListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Instruction *string `json:"instruction,omitempty"`
	Name *string `json:"name,omitempty"`
	RoleType *string `json:"role_type,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentRoleCreateData is the typed request payload for IncidentRole.CreateTyped.
type IncidentRoleCreateData struct {
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id string `json:"id"`
	Instruction string `json:"instruction"`
	Name string `json:"name"`
	RoleType string `json:"role_type"`
	Shortform string `json:"shortform"`
	UpdatedAt string `json:"updated_at"`
}

// IncidentRoleUpdateData is the typed request payload for IncidentRole.UpdateTyped.
type IncidentRoleUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Instruction *string `json:"instruction,omitempty"`
	Name *string `json:"name,omitempty"`
	RoleType *string `json:"role_type,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentRoleRemoveMatch is the typed request payload for IncidentRole.RemoveTyped.
type IncidentRoleRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentStatus is the typed data model for the incident_status entity.
type IncidentStatus struct {
	Category string `json:"category"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id string `json:"id"`
	Name string `json:"name"`
	Rank int `json:"rank"`
	UpdatedAt string `json:"updated_at"`
}

// IncidentStatusLoadMatch is the typed request payload for IncidentStatus.LoadTyped.
type IncidentStatusLoadMatch struct {
	Id string `json:"id"`
}

// IncidentStatusListMatch is the typed request payload for IncidentStatus.ListTyped.
type IncidentStatusListMatch struct {
	Category *string `json:"category,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentStatusCreateData is the typed request payload for IncidentStatus.CreateTyped.
type IncidentStatusCreateData struct {
	Category string `json:"category"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id string `json:"id"`
	Name string `json:"name"`
	Rank int `json:"rank"`
	UpdatedAt string `json:"updated_at"`
}

// IncidentStatusUpdateData is the typed request payload for IncidentStatus.UpdateTyped.
type IncidentStatusUpdateData struct {
	Id string `json:"id"`
	Category *string `json:"category,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentStatusRemoveMatch is the typed request payload for IncidentStatus.RemoveTyped.
type IncidentStatusRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentTimestamp is the typed data model for the incident_timestamp entity.
type IncidentTimestamp struct {
	Id string `json:"id"`
	Name string `json:"name"`
	Rank int `json:"rank"`
}

// IncidentTimestampLoadMatch is the typed request payload for IncidentTimestamp.LoadTyped.
type IncidentTimestampLoadMatch struct {
	Id string `json:"id"`
}

// IncidentTimestampListMatch is the typed request payload for IncidentTimestamp.ListTyped.
type IncidentTimestampListMatch struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
}

// IncidentType is the typed data model for the incident_type entity.
type IncidentType struct {
	CreateInTriage string `json:"create_in_triage"`
	CreatedAt string `json:"created_at"`
	Description string `json:"description"`
	Id string `json:"id"`
	IsDefault bool `json:"is_default"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentsOnly bool `json:"private_incidents_only"`
	UpdatedAt string `json:"updated_at"`
}

// IncidentTypeLoadMatch is the typed request payload for IncidentType.LoadTyped.
type IncidentTypeLoadMatch struct {
	Id string `json:"id"`
}

// IncidentTypeListMatch is the typed request payload for IncidentType.ListTyped.
type IncidentTypeListMatch struct {
	CreateInTriage *string `json:"create_in_triage,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentsOnly *bool `json:"private_incidents_only,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentUpdate is the typed data model for the incident_update entity.
type IncidentUpdate struct {
	CreatedAt string `json:"created_at"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	MergedIntoIncidentId *string `json:"merged_into_incident_id,omitempty"`
	Message *string `json:"message,omitempty"`
	NewIncidentStatus map[string]any `json:"new_incident_status"`
	NewSeverity map[string]any `json:"new_severity"`
	Updater map[string]any `json:"updater"`
}

// IncidentUpdateListMatch is the typed request payload for IncidentUpdate.ListTyped.
type IncidentUpdateListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	MergedIntoIncidentId *string `json:"merged_into_incident_id,omitempty"`
	Message *string `json:"message,omitempty"`
	NewIncidentStatus *map[string]any `json:"new_incident_status,omitempty"`
	NewSeverity *map[string]any `json:"new_severity,omitempty"`
	Updater *map[string]any `json:"updater,omitempty"`
}

// IpAllowlist is the typed data model for the ip_allowlist entity.
type IpAllowlist struct {
	Allowlist []any `json:"allowlist"`
	Enabled bool `json:"enabled"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version int `json:"version"`
}

// IpAllowlistLoadMatch is the typed request payload for IpAllowlist.LoadTyped.
type IpAllowlistLoadMatch struct {
	Allowlist *[]any `json:"allowlist,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *int `json:"version,omitempty"`
}

// IpAllowlistUpdateData is the typed request payload for IpAllowlist.UpdateTyped.
type IpAllowlistUpdateData struct {
	Allowlist *[]any `json:"allowlist,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *int `json:"version,omitempty"`
}

// MaintenanceWindow is the typed data model for the maintenance_window entity.
type MaintenanceWindow struct {
	AlertConditionGroup []any `json:"alert_condition_group"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt string `json:"created_at"`
	EndAt string `json:"end_at"`
	EscalationTarget *[]any `json:"escalation_target,omitempty"`
	Id string `json:"id"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead map[string]any `json:"lead"`
	Name string `json:"name"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannel *[]any `json:"notify_channel,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	RerouteOnEnd bool `json:"reroute_on_end"`
	ResolveOnEnd bool `json:"resolve_on_end"`
	ShowInSidebar bool `json:"show_in_sidebar"`
	StartAt string `json:"start_at"`
	UpdatedAt string `json:"updated_at"`
}

// MaintenanceWindowLoadMatch is the typed request payload for MaintenanceWindow.LoadTyped.
type MaintenanceWindowLoadMatch struct {
	Id string `json:"id"`
}

// MaintenanceWindowListMatch is the typed request payload for MaintenanceWindow.ListTyped.
type MaintenanceWindowListMatch struct {
	AlertConditionGroup *[]any `json:"alert_condition_group,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	EscalationTarget *[]any `json:"escalation_target,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	Name *string `json:"name,omitempty"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannel *[]any `json:"notify_channel,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	RerouteOnEnd *bool `json:"reroute_on_end,omitempty"`
	ResolveOnEnd *bool `json:"resolve_on_end,omitempty"`
	ShowInSidebar *bool `json:"show_in_sidebar,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// MaintenanceWindowCreateData is the typed request payload for MaintenanceWindow.CreateTyped.
type MaintenanceWindowCreateData struct {
	AlertConditionGroup []any `json:"alert_condition_group"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt string `json:"created_at"`
	EndAt string `json:"end_at"`
	EscalationTarget *[]any `json:"escalation_target,omitempty"`
	Id string `json:"id"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead map[string]any `json:"lead"`
	Name string `json:"name"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannel *[]any `json:"notify_channel,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	RerouteOnEnd bool `json:"reroute_on_end"`
	ResolveOnEnd bool `json:"resolve_on_end"`
	ShowInSidebar bool `json:"show_in_sidebar"`
	StartAt string `json:"start_at"`
	UpdatedAt string `json:"updated_at"`
}

// MaintenanceWindowUpdateData is the typed request payload for MaintenanceWindow.UpdateTyped.
type MaintenanceWindowUpdateData struct {
	Id string `json:"id"`
	AlertConditionGroup *[]any `json:"alert_condition_group,omitempty"`
	ArchivedAt *string `json:"archived_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	EscalationTarget *[]any `json:"escalation_target,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	Name *string `json:"name,omitempty"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannel *[]any `json:"notify_channel,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	RerouteOnEnd *bool `json:"reroute_on_end,omitempty"`
	ResolveOnEnd *bool `json:"resolve_on_end,omitempty"`
	ShowInSidebar *bool `json:"show_in_sidebar,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// MaintenanceWindowRemoveMatch is the typed request payload for MaintenanceWindow.RemoveTyped.
type MaintenanceWindowRemoveMatch struct {
	Id string `json:"id"`
}

// PostmortemDocument is the typed data model for the postmortem_document entity.
type PostmortemDocument struct {
	CreatedAt string `json:"created_at"`
	DocumentUrl string `json:"document_url"`
	Editor []any `json:"editor"`
	ExportedUrl []any `json:"exported_url"`
	Id string `json:"id"`
	IncidentId string `json:"incident_id"`
	Status string `json:"status"`
	Title string `json:"title"`
	Type string `json:"type"`
	UpdatedAt string `json:"updated_at"`
}

// PostmortemDocumentLoadMatch is the typed request payload for PostmortemDocument.LoadTyped.
type PostmortemDocumentLoadMatch struct {
	Id string `json:"id"`
}

// PostmortemDocumentListMatch is the typed request payload for PostmortemDocument.ListTyped.
type PostmortemDocumentListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	DocumentUrl *string `json:"document_url,omitempty"`
	Editor *[]any `json:"editor,omitempty"`
	ExportedUrl *[]any `json:"exported_url,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// PostmortemDocumentUpdateData is the typed request payload for PostmortemDocument.UpdateTyped.
type PostmortemDocumentUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	DocumentUrl *string `json:"document_url,omitempty"`
	Editor *[]any `json:"editor,omitempty"`
	ExportedUrl *[]any `json:"exported_url,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// Secret is the typed data model for the secret entity.
type Secret struct {
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LastFourChar *string `json:"last_four_char,omitempty"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	Secret map[string]any `json:"secret"`
	UpdatedAt string `json:"updated_at"`
	Value string `json:"value"`
	Version []any `json:"version"`
}

// SecretLoadMatch is the typed request payload for Secret.LoadTyped.
type SecretLoadMatch struct {
	Id string `json:"id"`
}

// SecretListMatch is the typed request payload for Secret.ListTyped.
type SecretListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	LastFourChar *string `json:"last_four_char,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	Secret *map[string]any `json:"secret,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
	Version *[]any `json:"version,omitempty"`
}

// SecretCreateData is the typed request payload for Secret.CreateTyped.
type SecretCreateData struct {
	CreatedAt string `json:"created_at"`
	Description *string `json:"description,omitempty"`
	Id string `json:"id"`
	LastFourChar *string `json:"last_four_char,omitempty"`
	Name string `json:"name"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	Secret map[string]any `json:"secret"`
	UpdatedAt string `json:"updated_at"`
	Value string `json:"value"`
	Version []any `json:"version"`
}

// SecretUpdateData is the typed request payload for Secret.UpdateTyped.
type SecretUpdateData struct {
	Id string `json:"id"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	LastFourChar *string `json:"last_four_char,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	Secret *map[string]any `json:"secret,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Value *string `json:"value,omitempty"`
	Version *[]any `json:"version,omitempty"`
}

// SecretRemoveMatch is the typed request payload for Secret.RemoveTyped.
type SecretRemoveMatch struct {
	Id string `json:"id"`
}

// Team is the typed data model for the team entity.
type Team struct {
	CatalogEntry map[string]any `json:"catalog_entry"`
	Id string `json:"id"`
	Member []any `json:"member"`
	Name string `json:"name"`
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	CatalogEntry *map[string]any `json:"catalog_entry,omitempty"`
	Id *string `json:"id,omitempty"`
	Member *[]any `json:"member,omitempty"`
	Name *string `json:"name,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	BaseRole map[string]any `json:"base_role"`
	CustomRole []any `json:"custom_role"`
	Email *string `json:"email,omitempty"`
	Id string `json:"id"`
	IsActive bool `json:"is_active"`
	Name string `json:"name"`
	Role string `json:"role"`
	Seat map[string]any `json:"seat"`
	SlackUserId *string `json:"slack_user_id,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id string `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	BaseRole *map[string]any `json:"base_role,omitempty"`
	CustomRole *[]any `json:"custom_role,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *string `json:"id,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
	Seat *map[string]any `json:"seat,omitempty"`
	SlackUserId *string `json:"slack_user_id,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
	Annotation *map[string]any `json:"annotation,omitempty"`
	ConditionGroup []any `json:"condition_group"`
	ContinueOnStepError bool `json:"continue_on_step_error"`
	Delay map[string]any `json:"delay"`
	Expression []any `json:"expression"`
	Folder *string `json:"folder,omitempty"`
	FormField *[]any `json:"form_field,omitempty"`
	Id string `json:"id"`
	IncludePrivateEscalation *bool `json:"include_private_escalation,omitempty"`
	IncludePrivateIncident *bool `json:"include_private_incident,omitempty"`
	ManagementMeta map[string]any `json:"management_meta"`
	Name string `json:"name"`
	OnceFor []any `json:"once_for"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsFrom *string `json:"runs_from,omitempty"`
	RunsOnIncident string `json:"runs_on_incident"`
	RunsOnIncidentMode []any `json:"runs_on_incident_mode"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrade *bool `json:"skip_step_upgrade,omitempty"`
	State *string `json:"state,omitempty"`
	Step []any `json:"step"`
	Trigger string `json:"trigger"`
	Version int `json:"version"`
	Workflow map[string]any `json:"workflow"`
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id string `json:"id"`
}

// WorkflowListMatch is the typed request payload for Workflow.ListTyped.
type WorkflowListMatch struct {
	Annotation *map[string]any `json:"annotation,omitempty"`
	ConditionGroup *[]any `json:"condition_group,omitempty"`
	ContinueOnStepError *bool `json:"continue_on_step_error,omitempty"`
	Delay *map[string]any `json:"delay,omitempty"`
	Expression *[]any `json:"expression,omitempty"`
	Folder *string `json:"folder,omitempty"`
	FormField *[]any `json:"form_field,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludePrivateEscalation *bool `json:"include_private_escalation,omitempty"`
	IncludePrivateIncident *bool `json:"include_private_incident,omitempty"`
	ManagementMeta *map[string]any `json:"management_meta,omitempty"`
	Name *string `json:"name,omitempty"`
	OnceFor *[]any `json:"once_for,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsFrom *string `json:"runs_from,omitempty"`
	RunsOnIncident *string `json:"runs_on_incident,omitempty"`
	RunsOnIncidentMode *[]any `json:"runs_on_incident_mode,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrade *bool `json:"skip_step_upgrade,omitempty"`
	State *string `json:"state,omitempty"`
	Step *[]any `json:"step,omitempty"`
	Trigger *string `json:"trigger,omitempty"`
	Version *int `json:"version,omitempty"`
	Workflow *map[string]any `json:"workflow,omitempty"`
}

// WorkflowCreateData is the typed request payload for Workflow.CreateTyped.
type WorkflowCreateData struct {
	Annotation *map[string]any `json:"annotation,omitempty"`
	ConditionGroup []any `json:"condition_group"`
	ContinueOnStepError bool `json:"continue_on_step_error"`
	Delay map[string]any `json:"delay"`
	Expression []any `json:"expression"`
	Folder *string `json:"folder,omitempty"`
	FormField *[]any `json:"form_field,omitempty"`
	Id string `json:"id"`
	IncludePrivateEscalation *bool `json:"include_private_escalation,omitempty"`
	IncludePrivateIncident *bool `json:"include_private_incident,omitempty"`
	ManagementMeta map[string]any `json:"management_meta"`
	Name string `json:"name"`
	OnceFor []any `json:"once_for"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsFrom *string `json:"runs_from,omitempty"`
	RunsOnIncident string `json:"runs_on_incident"`
	RunsOnIncidentMode []any `json:"runs_on_incident_mode"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrade *bool `json:"skip_step_upgrade,omitempty"`
	State *string `json:"state,omitempty"`
	Step []any `json:"step"`
	Trigger string `json:"trigger"`
	Version int `json:"version"`
	Workflow map[string]any `json:"workflow"`
}

// WorkflowUpdateData is the typed request payload for Workflow.UpdateTyped.
type WorkflowUpdateData struct {
	Id string `json:"id"`
	Annotation *map[string]any `json:"annotation,omitempty"`
	ConditionGroup *[]any `json:"condition_group,omitempty"`
	ContinueOnStepError *bool `json:"continue_on_step_error,omitempty"`
	Delay *map[string]any `json:"delay,omitempty"`
	Expression *[]any `json:"expression,omitempty"`
	Folder *string `json:"folder,omitempty"`
	FormField *[]any `json:"form_field,omitempty"`
	IncludePrivateEscalation *bool `json:"include_private_escalation,omitempty"`
	IncludePrivateIncident *bool `json:"include_private_incident,omitempty"`
	ManagementMeta *map[string]any `json:"management_meta,omitempty"`
	Name *string `json:"name,omitempty"`
	OnceFor *[]any `json:"once_for,omitempty"`
	OwningTeamId *[]any `json:"owning_team_id,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsFrom *string `json:"runs_from,omitempty"`
	RunsOnIncident *string `json:"runs_on_incident,omitempty"`
	RunsOnIncidentMode *[]any `json:"runs_on_incident_mode,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrade *bool `json:"skip_step_upgrade,omitempty"`
	State *string `json:"state,omitempty"`
	Step *[]any `json:"step,omitempty"`
	Trigger *string `json:"trigger,omitempty"`
	Version *int `json:"version,omitempty"`
	Workflow *map[string]any `json:"workflow,omitempty"`
}

// WorkflowRemoveMatch is the typed request payload for Workflow.RemoveTyped.
type WorkflowRemoveMatch struct {
	Id string `json:"id"`
}

// WorkflowRun is the typed data model for the workflow_run entity.
type WorkflowRun struct {
	CancelledAt *string `json:"cancelled_at,omitempty"`
	CreatedAt string `json:"created_at"`
	EnqueuedAt *string `json:"enqueued_at,omitempty"`
	Error *string `json:"error,omitempty"`
	Id string `json:"id"`
	IncidentId *string `json:"incident_id,omitempty"`
	IncidentReference *string `json:"incident_reference,omitempty"`
	Progress []any `json:"progress"`
	ScheduledAt string `json:"scheduled_at"`
	UpdatedAt string `json:"updated_at"`
	WorkflowId string `json:"workflow_id"`
	WorkflowName *string `json:"workflow_name,omitempty"`
	WorkflowVersionId string `json:"workflow_version_id"`
	WorkflowVersionNumber int `json:"workflow_version_number"`
}

// WorkflowRunLoadMatch is the typed request payload for WorkflowRun.LoadTyped.
type WorkflowRunLoadMatch struct {
	Id string `json:"id"`
}

// WorkflowRunListMatch is the typed request payload for WorkflowRun.ListTyped.
type WorkflowRunListMatch struct {
	CancelledAt *string `json:"cancelled_at,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EnqueuedAt *string `json:"enqueued_at,omitempty"`
	Error *string `json:"error,omitempty"`
	Id *string `json:"id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	IncidentReference *string `json:"incident_reference,omitempty"`
	Progress *[]any `json:"progress,omitempty"`
	ScheduledAt *string `json:"scheduled_at,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
	WorkflowName *string `json:"workflow_name,omitempty"`
	WorkflowVersionId *string `json:"workflow_version_id,omitempty"`
	WorkflowVersionNumber *int `json:"workflow_version_number,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

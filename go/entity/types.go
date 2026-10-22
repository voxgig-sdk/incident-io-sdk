// Typed models for the IncidentIo SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/incident-io-sdk/go/core"
)

// Action is the typed data model for the action entity.
type Action struct {
}

// ActionLoadMatch is the typed request payload for Action.LoadTyped.
type ActionLoadMatch struct {
	Id string `json:"id"`
}

// ActionListMatch is the typed request payload for Action.ListTyped.
type ActionListMatch struct {
	IncidentId *string `json:"incident_id,omitempty"`
	IncidentMode *string `json:"incident_mode,omitempty"`
	IsFollowUp *bool `json:"is_follow_up,omitempty"`
}

// ActionCreateData is the typed request payload for Action.CreateTyped.
type ActionCreateData struct {
	AssigneeId *string `json:"assignee_id,omitempty"`
	Description string `json:"description"`
	IncidentId string `json:"incident_id"`
}

// ActionUpdateData is the typed request payload for Action.UpdateTyped.
type ActionUpdateData struct {
	Id string `json:"id"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Status *string `json:"status,omitempty"`
}

// ActionRemoveMatch is the typed request payload for Action.RemoveTyped.
type ActionRemoveMatch struct {
	Id string `json:"id"`
}

// Alert is the typed data model for the alert entity.
type Alert struct {
}

// AlertLoadMatch is the typed request payload for Alert.LoadTyped.
type AlertLoadMatch struct {
	Id string `json:"id"`
}

// AlertListMatch is the typed request payload for Alert.ListTyped.
type AlertListMatch struct {
	After *string `json:"after,omitempty"`
	AlertGroupId *map[string]any `json:"alert_group_id,omitempty"`
	AlertSource *map[string]any `json:"alert_source,omitempty"`
	Attribute *map[string]any `json:"attribute,omitempty"`
	CreatedAt *map[string]any `json:"created_at,omitempty"`
	DeduplicationKey *map[string]any `json:"deduplication_key,omitempty"`
	HasNote *map[string]any `json:"has_note,omitempty"`
	IncludeMaintenanceWindow *map[string]any `json:"include_maintenance_window,omitempty"`
	PageSize int `json:"page_size"`
	Status *map[string]any `json:"status,omitempty"`
	Tag *map[string]any `json:"tag,omitempty"`
	UpdatedAt *map[string]any `json:"updated_at,omitempty"`
}

// AlertCreateData is the typed request payload for Alert.CreateTyped.
type AlertCreateData struct {
	Id string `json:"id"`
	AlertGroupIds *[]any `json:"alert_group_ids,omitempty"`
	AlertSourceId string `json:"alert_source_id"`
	Attributes []any `json:"attributes"`
	CreatedAt string `json:"created_at"`
	DeduplicationKey string `json:"deduplication_key"`
	Description *string `json:"description,omitempty"`
	ResolvedAt *string `json:"resolved_at,omitempty"`
	SourceUrl *string `json:"source_url,omitempty"`
	Status string `json:"status"`
	Tags *[]any `json:"tags,omitempty"`
	Title string `json:"title"`
	UpdatedAt string `json:"updated_at"`
}

// AlertAttribute is the typed data model for the alert_attribute entity.
type AlertAttribute struct {
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
	Name string `json:"name"`
	Required *bool `json:"required,omitempty"`
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
}

// AlertNoteLoadMatch is the typed request payload for AlertNote.LoadTyped.
type AlertNoteLoadMatch struct {
	Id string `json:"id"`
}

// AlertNoteListMatch is the typed request payload for AlertNote.ListTyped.
type AlertNoteListMatch struct {
	After *string `json:"after,omitempty"`
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// AlertNoteCreateData is the typed request payload for AlertNote.CreateTyped.
type AlertNoteCreateData struct {
	AlertGroupId *string `json:"alert_group_id,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	Content string `json:"content"`
}

// AlertNoteUpdateData is the typed request payload for AlertNote.UpdateTyped.
type AlertNoteUpdateData struct {
	Id string `json:"id"`
	Content *string `json:"content,omitempty"`
}

// AlertNoteRemoveMatch is the typed request payload for AlertNote.RemoveTyped.
type AlertNoteRemoveMatch struct {
	Id string `json:"id"`
}

// AlertRoute is the typed data model for the alert_route entity.
type AlertRoute struct {
}

// AlertRouteLoadMatch is the typed request payload for AlertRoute.LoadTyped.
type AlertRouteLoadMatch struct {
	Id string `json:"id"`
}

// AlertRouteListMatch is the typed request payload for AlertRoute.ListTyped.
type AlertRouteListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize int `json:"page_size"`
}

// AlertRouteCreateData is the typed request payload for AlertRoute.CreateTyped.
type AlertRouteCreateData struct {
	AlertSources []any `json:"alert_sources"`
	ChannelConfig []any `json:"channel_config"`
	ConditionGroups []any `json:"condition_groups"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled bool `json:"enabled"`
	EscalationConfig map[string]any `json:"escalation_config"`
	Expressions []any `json:"expressions"`
	GroupingConfig map[string]any `json:"grouping_config"`
	IncidentConfig map[string]any `json:"incident_config"`
	IncidentTemplate map[string]any `json:"incident_template"`
	IsPrivate bool `json:"is_private"`
	MessageConfig map[string]any `json:"message_config"`
	MessageTemplate *map[string]any `json:"message_template,omitempty"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// AlertRouteUpdateData is the typed request payload for AlertRoute.UpdateTyped.
type AlertRouteUpdateData struct {
	Id string `json:"id"`
	AlertSources *[]any `json:"alert_sources,omitempty"`
	ChannelConfig *[]any `json:"channel_config,omitempty"`
	ConditionGroups *[]any `json:"condition_groups,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	EscalationConfig *map[string]any `json:"escalation_config,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	GroupingConfig *map[string]any `json:"grouping_config,omitempty"`
	IncidentConfig *map[string]any `json:"incident_config,omitempty"`
	IncidentTemplate *map[string]any `json:"incident_template,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	MessageConfig *map[string]any `json:"message_config,omitempty"`
	MessageTemplate *map[string]any `json:"message_template,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Version *int `json:"version,omitempty"`
}

// AlertRouteRemoveMatch is the typed request payload for AlertRoute.RemoveTyped.
type AlertRouteRemoveMatch struct {
	Id string `json:"id"`
}

// AlertSource is the typed data model for the alert_source entity.
type AlertSource struct {
}

// AlertSourceLoadMatch is the typed request payload for AlertSource.LoadTyped.
type AlertSourceLoadMatch struct {
	Id string `json:"id"`
}

// AlertSourceListMatch is the typed request payload for AlertSource.ListTyped.
type AlertSourceListMatch struct {
	AlertEventsUrl *string `json:"alert_events_url,omitempty"`
	AutoResolveIncidentAlerts *bool `json:"auto_resolve_incident_alerts,omitempty"`
	AutoResolveTimeoutMinutes *int `json:"auto_resolve_timeout_minutes,omitempty"`
	AzureDevopsOptions *map[string]any `json:"azure_devops_options,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOptions *map[string]any `json:"email_options,omitempty"`
	FilterConditionGroups *[]any `json:"filter_condition_groups,omitempty"`
	FixedTeamId *string `json:"fixed_team_id,omitempty"`
	HeartbeatOptions *map[string]any `json:"heartbeat_options,omitempty"`
	HttpCustomOptions *map[string]any `json:"http_custom_options,omitempty"`
	Id *string `json:"id,omitempty"`
	JiraOptions *map[string]any `json:"jira_options,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	RateLimitSharding *map[string]any `json:"rate_limit_sharding,omitempty"`
	SecretToken *string `json:"secret_token,omitempty"`
	SourceType *string `json:"source_type,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
}

// AlertSourceCreateData is the typed request payload for AlertSource.CreateTyped.
type AlertSourceCreateData struct {
	AutoResolveIncidentAlerts *bool `json:"auto_resolve_incident_alerts,omitempty"`
	AutoResolveTimeoutMinutes *int `json:"auto_resolve_timeout_minutes,omitempty"`
	AzureDevopsOptions map[string]any `json:"azure_devops_options"`
	EmailOptions map[string]any `json:"email_options"`
	FilterConditionGroups *[]any `json:"filter_condition_groups,omitempty"`
	FixedTeamId *string `json:"fixed_team_id,omitempty"`
	HeartbeatOptions map[string]any `json:"heartbeat_options"`
	HttpCustomOptions map[string]any `json:"http_custom_options"`
	JiraOptions map[string]any `json:"jira_options"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	RateLimitSharding map[string]any `json:"rate_limit_sharding"`
	SourceType string `json:"source_type"`
	Template map[string]any `json:"template"`
}

// AlertSourceUpdateData is the typed request payload for AlertSource.UpdateTyped.
type AlertSourceUpdateData struct {
	Id string `json:"id"`
	AutoResolveIncidentAlerts *bool `json:"auto_resolve_incident_alerts,omitempty"`
	AutoResolveTimeoutMinutes *int `json:"auto_resolve_timeout_minutes,omitempty"`
	AzureDevopsOptions *map[string]any `json:"azure_devops_options,omitempty"`
	Disabled *bool `json:"disabled,omitempty"`
	EmailOptions *map[string]any `json:"email_options,omitempty"`
	FilterConditionGroups *[]any `json:"filter_condition_groups,omitempty"`
	FixedTeamId *string `json:"fixed_team_id,omitempty"`
	HeartbeatOptions *map[string]any `json:"heartbeat_options,omitempty"`
	HttpCustomOptions *map[string]any `json:"http_custom_options,omitempty"`
	JiraOptions *map[string]any `json:"jira_options,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	RateLimitSharding *map[string]any `json:"rate_limit_sharding,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
}

// AlertSourceRemoveMatch is the typed request payload for AlertSource.RemoveTyped.
type AlertSourceRemoveMatch struct {
	Id string `json:"id"`
}

// AlertSourcesV2 is the typed data model for the alert_sources_v2 entity.
type AlertSourcesV2 struct {
}

// AlertSourcesV2CreateData is the typed request payload for AlertSourcesV2.CreateTyped.
type AlertSourcesV2CreateData struct {
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	SourceType string `json:"source_type"`
	Template map[string]any `json:"template"`
}

// AlertTag is the typed data model for the alert_tag entity.
type AlertTag struct {
}

// AlertTagListMatch is the typed request payload for AlertTag.ListTyped.
type AlertTagListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Search *string `json:"search,omitempty"`
}

// AlertsAddTagsResultV2 is the typed data model for the alerts_add_tags_result_v2 entity.
type AlertsAddTagsResultV2 struct {
}

// AlertsAddTagsResultV2CreateData is the typed request payload for AlertsAddTagsResultV2.CreateTyped.
type AlertsAddTagsResultV2CreateData struct {
	AlertId string `json:"alert_id"`
	Tags []any `json:"tags"`
}

// AlertsRemoveTagsResultV2 is the typed data model for the alerts_remove_tags_result_v2 entity.
type AlertsRemoveTagsResultV2 struct {
}

// AlertsRemoveTagsResultV2CreateData is the typed request payload for AlertsRemoveTagsResultV2.CreateTyped.
type AlertsRemoveTagsResultV2CreateData struct {
	AlertId string `json:"alert_id"`
	Tags []any `json:"tags"`
}

// AlertsSetTagsResultV2 is the typed data model for the alerts_set_tags_result_v2 entity.
type AlertsSetTagsResultV2 struct {
}

// AlertsSetTagsResultV2CreateData is the typed request payload for AlertsSetTagsResultV2.CreateTyped.
type AlertsSetTagsResultV2CreateData struct {
	AlertId string `json:"alert_id"`
	Tags []any `json:"tags"`
}

// AlertsTransitionIncidentAlertResultV2 is the typed data model for the alerts_transition_incident_alert_result_v2 entity.
type AlertsTransitionIncidentAlertResultV2 struct {
}

// AlertsTransitionIncidentAlertResultV2ListMatch is the typed request payload for AlertsTransitionIncidentAlertResultV2.ListTyped.
type AlertsTransitionIncidentAlertResultV2ListMatch struct {
	After *string `json:"after,omitempty"`
	AlertId *string `json:"alert_id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	PageSize int `json:"page_size"`
}

// AlertsTransitionIncidentAlertResultV2CreateData is the typed request payload for AlertsTransitionIncidentAlertResultV2.CreateTyped.
type AlertsTransitionIncidentAlertResultV2CreateData struct {
	AlertId string `json:"alert_id"`
	IncidentId string `json:"incident_id"`
	ReRelate *bool `json:"re_relate,omitempty"`
	State string `json:"state"`
}

// AnnouncementRule is the typed data model for the announcement_rule entity.
type AnnouncementRule struct {
}

// AnnouncementRuleLoadMatch is the typed request payload for AnnouncementRule.LoadTyped.
type AnnouncementRuleLoadMatch struct {
	Id string `json:"id"`
}

// AnnouncementRuleListMatch is the typed request payload for AnnouncementRule.ListTyped.
type AnnouncementRuleListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// AnnouncementRuleCreateData is the typed request payload for AnnouncementRule.CreateTyped.
type AnnouncementRuleCreateData struct {
	ConditionGroups []any `json:"condition_groups"`
	ConditionsNoLongerApplyBehaviour *string `json:"conditions_no_longer_apply_behaviour,omitempty"`
	MicrosoftTeamsChannelIds *[]any `json:"microsoft_teams_channel_ids,omitempty"`
	Mode string `json:"mode"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	SlackChannelIds *[]any `json:"slack_channel_ids,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
	UpdateSharingMode string `json:"update_sharing_mode"`
}

// AnnouncementRuleUpdateData is the typed request payload for AnnouncementRule.UpdateTyped.
type AnnouncementRuleUpdateData struct {
	Id string `json:"id"`
	ConditionGroups *[]any `json:"condition_groups,omitempty"`
	ConditionsNoLongerApplyBehaviour *string `json:"conditions_no_longer_apply_behaviour,omitempty"`
	MicrosoftTeamsChannelIds *[]any `json:"microsoft_teams_channel_ids,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	SlackChannelIds *[]any `json:"slack_channel_ids,omitempty"`
	TemplateId *string `json:"template_id,omitempty"`
	UpdateSharingMode *string `json:"update_sharing_mode,omitempty"`
}

// AnnouncementRuleRemoveMatch is the typed request payload for AnnouncementRule.RemoveTyped.
type AnnouncementRuleRemoveMatch struct {
	Id string `json:"id"`
}

// AnnouncementTemplate is the typed data model for the announcement_template entity.
type AnnouncementTemplate struct {
}

// AnnouncementTemplateLoadMatch is the typed request payload for AnnouncementTemplate.LoadTyped.
type AnnouncementTemplateLoadMatch struct {
	Id string `json:"id"`
}

// AnnouncementTemplateListMatch is the typed request payload for AnnouncementTemplate.ListTyped.
type AnnouncementTemplateListMatch struct {
	Actions *[]any `json:"actions,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Id *string `json:"id,omitempty"`
	IsDefault *bool `json:"is_default,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
}

// AnnouncementTemplateCreateData is the typed request payload for AnnouncementTemplate.CreateTyped.
type AnnouncementTemplateCreateData struct {
	Actions *[]any `json:"actions,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
}

// AnnouncementTemplateUpdateData is the typed request payload for AnnouncementTemplate.UpdateTyped.
type AnnouncementTemplateUpdateData struct {
	Id string `json:"id"`
	Actions *[]any `json:"actions,omitempty"`
	Fields *[]any `json:"fields,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
}

// AnnouncementTemplateRemoveMatch is the typed request payload for AnnouncementTemplate.RemoveTyped.
type AnnouncementTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// ApiKey is the typed data model for the api_key entity.
type ApiKey struct {
}

// ApiKeyLoadMatch is the typed request payload for ApiKey.LoadTyped.
type ApiKeyLoadMatch struct {
	Id string `json:"id"`
}

// ApiKeyListMatch is the typed request payload for ApiKey.ListTyped.
type ApiKeyListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// ApiKeyCreateData is the typed request payload for ApiKey.CreateTyped.
type ApiKeyCreateData struct {
	Comments *string `json:"comments,omitempty"`
	Name string `json:"name"`
	RoleNames []any `json:"role_names"`
	TeamIds []any `json:"team_ids"`
	TeamRoleNames []any `json:"team_role_names"`
}

// ApiKeyUpdateData is the typed request payload for ApiKey.UpdateTyped.
type ApiKeyUpdateData struct {
	Id string `json:"id"`
	Comments *string `json:"comments,omitempty"`
	Name *string `json:"name,omitempty"`
	RoleNames *[]any `json:"role_names,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	TeamRoleNames *[]any `json:"team_role_names,omitempty"`
}

// ApiKeyRemoveMatch is the typed request payload for ApiKey.RemoveTyped.
type ApiKeyRemoveMatch struct {
	Id string `json:"id"`
}

// CallRoute is the typed data model for the call_route entity.
type CallRoute struct {
}

// CallRouteLoadMatch is the typed request payload for CallRoute.LoadTyped.
type CallRouteLoadMatch struct {
	Id string `json:"id"`
}

// CallRouteListMatch is the typed request payload for CallRoute.ListTyped.
type CallRouteListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// CallRouteUpdateData is the typed request payload for CallRoute.UpdateTyped.
type CallRouteUpdateData struct {
	Id string `json:"id"`
	CustomLanguage *string `json:"custom_language,omitempty"`
	Name *string `json:"name,omitempty"`
	Path *[]any `json:"path,omitempty"`
	ResponderCallerId *string `json:"responder_caller_id,omitempty"`
	UseCallerAllowlist *bool `json:"use_caller_allowlist,omitempty"`
}

// CallRoutesCreateAllowedCallerResultV2 is the typed data model for the call_routes_create_allowed_caller_result_v2 entity.
type CallRoutesCreateAllowedCallerResultV2 struct {
}

// CallRoutesCreateAllowedCallerResultV2CreateData is the typed request payload for CallRoutesCreateAllowedCallerResultV2.CreateTyped.
type CallRoutesCreateAllowedCallerResultV2CreateData struct {
	CallRouteId string `json:"call_route_id"`
	Name *string `json:"name,omitempty"`
	PhoneNumber string `json:"phone_number"`
}

// CallRoutesCreateOptionResultV2 is the typed data model for the call_routes_create_option_result_v2 entity.
type CallRoutesCreateOptionResultV2 struct {
}

// CallRoutesCreateOptionResultV2CreateData is the typed request payload for CallRoutesCreateOptionResultV2.CreateTyped.
type CallRoutesCreateOptionResultV2CreateData struct {
	CallRouteId string `json:"call_route_id"`
	Digit string `json:"digit"`
	Path []any `json:"path"`
	Prompt string `json:"prompt"`
}

// CallRoutesListAllowedCallersResultV2 is the typed data model for the call_routes_list_allowed_callers_result_v2 entity.
type CallRoutesListAllowedCallersResultV2 struct {
}

// CallRoutesListAllowedCallersResultV2ListMatch is the typed request payload for CallRoutesListAllowedCallersResultV2.ListTyped.
type CallRoutesListAllowedCallersResultV2ListMatch struct {
	CallRouteId string `json:"call_route_id"`
}

// CallRoutesListOptionsResultV2 is the typed data model for the call_routes_list_options_result_v2 entity.
type CallRoutesListOptionsResultV2 struct {
}

// CallRoutesListOptionsResultV2ListMatch is the typed request payload for CallRoutesListOptionsResultV2.ListTyped.
type CallRoutesListOptionsResultV2ListMatch struct {
	CallRouteId string `json:"call_route_id"`
}

// CallRoutesShowAllowedCallerResultV2 is the typed data model for the call_routes_show_allowed_caller_result_v2 entity.
type CallRoutesShowAllowedCallerResultV2 struct {
}

// CallRoutesShowAllowedCallerResultV2LoadMatch is the typed request payload for CallRoutesShowAllowedCallerResultV2.LoadTyped.
type CallRoutesShowAllowedCallerResultV2LoadMatch struct {
	CallRouteId string `json:"call_route_id"`
	Id string `json:"id"`
}

// CallRoutesShowOptionResultV2 is the typed data model for the call_routes_show_option_result_v2 entity.
type CallRoutesShowOptionResultV2 struct {
}

// CallRoutesShowOptionResultV2LoadMatch is the typed request payload for CallRoutesShowOptionResultV2.LoadTyped.
type CallRoutesShowOptionResultV2LoadMatch struct {
	CallRouteId string `json:"call_route_id"`
	Id string `json:"id"`
}

// CallRoutesUpdateAllowedCallerResultV2 is the typed data model for the call_routes_update_allowed_caller_result_v2 entity.
type CallRoutesUpdateAllowedCallerResultV2 struct {
}

// CallRoutesUpdateAllowedCallerResultV2UpdateData is the typed request payload for CallRoutesUpdateAllowedCallerResultV2.UpdateTyped.
type CallRoutesUpdateAllowedCallerResultV2UpdateData struct {
	CallRouteId string `json:"call_route_id"`
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
}

// CallRoutesUpdateOptionResultV2 is the typed data model for the call_routes_update_option_result_v2 entity.
type CallRoutesUpdateOptionResultV2 struct {
}

// CallRoutesUpdateOptionResultV2UpdateData is the typed request payload for CallRoutesUpdateOptionResultV2.UpdateTyped.
type CallRoutesUpdateOptionResultV2UpdateData struct {
	CallRouteId string `json:"call_route_id"`
	Id string `json:"id"`
	Digit *string `json:"digit,omitempty"`
	Path *[]any `json:"path,omitempty"`
	Prompt *string `json:"prompt,omitempty"`
}

// CallRoutesV2 is the typed data model for the call_routes_v2 entity.
type CallRoutesV2 struct {
}

// CallRoutesV2RemoveMatch is the typed request payload for CallRoutesV2.RemoveTyped.
type CallRoutesV2RemoveMatch struct {
	CallRouteId string `json:"call_route_id"`
	Id string `json:"id"`
}

// CallSession is the typed data model for the call_session entity.
type CallSession struct {
}

// CallSessionListMatch is the typed request payload for CallSession.ListTyped.
type CallSessionListMatch struct {
	After *string `json:"after,omitempty"`
	IncidentId string `json:"incident_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// CallTranscriptEntry is the typed data model for the call_transcript_entry entity.
type CallTranscriptEntry struct {
}

// CallTranscriptEntryListMatch is the typed request payload for CallTranscriptEntry.ListTyped.
type CallTranscriptEntryListMatch struct {
	After *string `json:"after,omitempty"`
	CallSessionId string `json:"call_session_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// CatalogEntry is the typed data model for the catalog_entry entity.
type CatalogEntry struct {
}

// CatalogEntryLoadMatch is the typed request payload for CatalogEntry.LoadTyped.
type CatalogEntryLoadMatch struct {
	Id string `json:"id"`
	Expand *bool `json:"expand,omitempty"`
}

// CatalogEntryListMatch is the typed request payload for CatalogEntry.ListTyped.
type CatalogEntryListMatch struct {
	After *string `json:"after,omitempty"`
	CatalogTypeId string `json:"catalog_type_id"`
	Identifier *string `json:"identifier,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// CatalogEntryCreateData is the typed request payload for CatalogEntry.CreateTyped.
type CatalogEntryCreateData struct {
	Aliases *[]any `json:"aliases,omitempty"`
	AttributeValues map[string]any `json:"attribute_values"`
	CatalogTypeId string `json:"catalog_type_id"`
	ExternalId *string `json:"external_id,omitempty"`
	Name string `json:"name"`
	Rank *int `json:"rank,omitempty"`
}

// CatalogEntryUpdateData is the typed request payload for CatalogEntry.UpdateTyped.
type CatalogEntryUpdateData struct {
	Id string `json:"id"`
	Aliases *[]any `json:"aliases,omitempty"`
	AttributeValues *map[string]any `json:"attribute_values,omitempty"`
	ExternalId *string `json:"external_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
	UpdateAttributes *[]any `json:"update_attributes,omitempty"`
}

// CatalogResource is the typed data model for the catalog_resource entity.
type CatalogResource struct {
}

// CatalogResourceListMatch is the typed request payload for CatalogResource.ListTyped.
type CatalogResourceListMatch struct {
	Category *string `json:"category,omitempty"`
	Description *string `json:"description,omitempty"`
	EngineResourceType *string `json:"engine_resource_type,omitempty"`
	Label *string `json:"label,omitempty"`
	Type *string `json:"type,omitempty"`
	ValueDocstring *string `json:"value_docstring,omitempty"`
}

// CatalogType is the typed data model for the catalog_type entity.
type CatalogType struct {
}

// CatalogTypeLoadMatch is the typed request payload for CatalogType.LoadTyped.
type CatalogTypeLoadMatch struct {
	Id string `json:"id"`
}

// CatalogTypeListMatch is the typed request payload for CatalogType.ListTyped.
type CatalogTypeListMatch struct {
	Annotations *map[string]any `json:"annotations,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Color *string `json:"color,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	DynamicResourceParameter *string `json:"dynamic_resource_parameter,omitempty"`
	EngineResourceType *string `json:"engine_resource_type,omitempty"`
	EstimatedCount *int `json:"estimated_count,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Id *string `json:"id,omitempty"`
	IsEditable *bool `json:"is_editable,omitempty"`
	IsTeamType *bool `json:"is_team_type,omitempty"`
	LastSyncedAt *string `json:"last_synced_at,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	Ranked *bool `json:"ranked,omitempty"`
	RegistryType *string `json:"registry_type,omitempty"`
	RequiredIntegrations *[]any `json:"required_integrations,omitempty"`
	Schema *map[string]any `json:"schema,omitempty"`
	SemanticType *string `json:"semantic_type,omitempty"`
	SourceRepoUrl *string `json:"source_repo_url,omitempty"`
	TypeName *string `json:"type_name,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UseNameAsIdentifier *bool `json:"use_name_as_identifier,omitempty"`
}

// CatalogTypeCreateData is the typed request payload for CatalogType.CreateTyped.
type CatalogTypeCreateData struct {
	Annotations *map[string]any `json:"annotations,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Color *string `json:"color,omitempty"`
	Description string `json:"description"`
	Icon *string `json:"icon,omitempty"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	Ranked *bool `json:"ranked,omitempty"`
	SourceRepoUrl *string `json:"source_repo_url,omitempty"`
	TypeName *string `json:"type_name,omitempty"`
	UseNameAsIdentifier *bool `json:"use_name_as_identifier,omitempty"`
}

// CatalogTypeUpdateData is the typed request payload for CatalogType.UpdateTyped.
type CatalogTypeUpdateData struct {
	Id string `json:"id"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	Categories *[]any `json:"categories,omitempty"`
	Color *string `json:"color,omitempty"`
	Description *string `json:"description,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	Ranked *bool `json:"ranked,omitempty"`
	SourceRepoUrl *string `json:"source_repo_url,omitempty"`
	UseNameAsIdentifier *bool `json:"use_name_as_identifier,omitempty"`
}

// CatalogTypeSchema is the typed data model for the catalog_type_schema entity.
type CatalogTypeSchema struct {
}

// CatalogTypeSchemaCreateData is the typed request payload for CatalogTypeSchema.CreateTyped.
type CatalogTypeSchemaCreateData struct {
	CatalogTypeId string `json:"catalog_type_id"`
	Attributes []any `json:"attributes"`
	Version int `json:"version"`
}

// CustomField is the typed data model for the custom_field entity.
type CustomField struct {
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
	Options *[]any `json:"options,omitempty"`
	Required *string `json:"required,omitempty"`
	RequiredV2 *string `json:"required_v2,omitempty"`
	ShowBeforeClosure *bool `json:"show_before_closure,omitempty"`
	ShowBeforeCreation *bool `json:"show_before_creation,omitempty"`
	ShowBeforeUpdate *bool `json:"show_before_update,omitempty"`
	ShowInAnnouncementPost *bool `json:"show_in_announcement_post,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// CustomFieldCreateData is the typed request payload for CustomField.CreateTyped.
type CustomFieldCreateData struct {
	CatalogTypeId *string `json:"catalog_type_id,omitempty"`
	Description string `json:"description"`
	FieldType string `json:"field_type"`
	FilterBy map[string]any `json:"filter_by"`
	FixedFilter map[string]any `json:"fixed_filter"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Name string `json:"name"`
	Required *string `json:"required,omitempty"`
	RequiredV2 *string `json:"required_v2,omitempty"`
	ShowBeforeClosure bool `json:"show_before_closure"`
	ShowBeforeCreation bool `json:"show_before_creation"`
	ShowBeforeUpdate bool `json:"show_before_update"`
	ShowInAnnouncementPost *bool `json:"show_in_announcement_post,omitempty"`
}

// CustomFieldUpdateData is the typed request payload for CustomField.UpdateTyped.
type CustomFieldUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	FilterBy *map[string]any `json:"filter_by,omitempty"`
	FixedFilter *map[string]any `json:"fixed_filter,omitempty"`
	GroupByCatalogAttributeId *string `json:"group_by_catalog_attribute_id,omitempty"`
	HelptextCatalogAttributeId *string `json:"helptext_catalog_attribute_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Required *string `json:"required,omitempty"`
	RequiredV2 *string `json:"required_v2,omitempty"`
	ShowBeforeClosure *bool `json:"show_before_closure,omitempty"`
	ShowBeforeCreation *bool `json:"show_before_creation,omitempty"`
	ShowBeforeUpdate *bool `json:"show_before_update,omitempty"`
	ShowInAnnouncementPost *bool `json:"show_in_announcement_post,omitempty"`
}

// CustomFieldRemoveMatch is the typed request payload for CustomField.RemoveTyped.
type CustomFieldRemoveMatch struct {
	Id string `json:"id"`
}

// CustomFieldOption is the typed data model for the custom_field_option entity.
type CustomFieldOption struct {
}

// CustomFieldOptionLoadMatch is the typed request payload for CustomFieldOption.LoadTyped.
type CustomFieldOptionLoadMatch struct {
	Id string `json:"id"`
}

// CustomFieldOptionListMatch is the typed request payload for CustomFieldOption.ListTyped.
type CustomFieldOptionListMatch struct {
	After *string `json:"after,omitempty"`
	CustomFieldId string `json:"custom_field_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// CustomFieldOptionCreateData is the typed request payload for CustomFieldOption.CreateTyped.
type CustomFieldOptionCreateData struct {
	CustomFieldId string `json:"custom_field_id"`
	SortKey *int `json:"sort_key,omitempty"`
	Value string `json:"value"`
}

// CustomFieldOptionUpdateData is the typed request payload for CustomFieldOption.UpdateTyped.
type CustomFieldOptionUpdateData struct {
	Id string `json:"id"`
	SortKey *int `json:"sort_key,omitempty"`
	Value *string `json:"value,omitempty"`
}

// CustomFieldOptionRemoveMatch is the typed request payload for CustomFieldOption.RemoveTyped.
type CustomFieldOptionRemoveMatch struct {
	Id string `json:"id"`
}

// Escalation is the typed data model for the escalation entity.
type Escalation struct {
}

// EscalationLoadMatch is the typed request payload for Escalation.LoadTyped.
type EscalationLoadMatch struct {
	Id string `json:"id"`
}

// EscalationListMatch is the typed request payload for Escalation.ListTyped.
type EscalationListMatch struct {
	After *string `json:"after,omitempty"`
	Alert *map[string]any `json:"alert,omitempty"`
	CreatedAt *map[string]any `json:"created_at,omitempty"`
	EscalationPath *map[string]any `json:"escalation_path,omitempty"`
	IdempotencyKey *map[string]any `json:"idempotency_key,omitempty"`
	Incident *map[string]any `json:"incident,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
	UpdatedAt *map[string]any `json:"updated_at,omitempty"`
}

// EscalationCreateData is the typed request payload for Escalation.CreateTyped.
type EscalationCreateData struct {
	Description *string `json:"description,omitempty"`
	EscalationPathId *string `json:"escalation_path_id,omitempty"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentId *string `json:"incident_id,omitempty"`
	Title string `json:"title"`
	UserIds *[]any `json:"user_ids,omitempty"`
}

// EscalationPathTemplate is the typed data model for the escalation_path_template entity.
type EscalationPathTemplate struct {
}

// EscalationPathTemplateLoadMatch is the typed request payload for EscalationPathTemplate.LoadTyped.
type EscalationPathTemplateLoadMatch struct {
	Id string `json:"id"`
}

// EscalationPathTemplateListMatch is the typed request payload for EscalationPathTemplate.ListTyped.
type EscalationPathTemplateListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Search *string `json:"search,omitempty"`
}

// EscalationPathTemplateCreateData is the typed request payload for EscalationPathTemplate.CreateTyped.
type EscalationPathTemplateCreateData struct {
	Description *string `json:"description,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	Name string `json:"name"`
	Params *[]any `json:"params,omitempty"`
	Path []any `json:"path"`
	RepeatConfig map[string]any `json:"repeat_config"`
	WorkingHours *[]any `json:"working_hours,omitempty"`
}

// EscalationPathTemplateUpdateData is the typed request payload for EscalationPathTemplate.UpdateTyped.
type EscalationPathTemplateUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	Name *string `json:"name,omitempty"`
	Params *[]any `json:"params,omitempty"`
	Path *[]any `json:"path,omitempty"`
	RepeatConfig *map[string]any `json:"repeat_config,omitempty"`
	WorkingHours *[]any `json:"working_hours,omitempty"`
}

// EscalationPathTemplateRemoveMatch is the typed request payload for EscalationPathTemplate.RemoveTyped.
type EscalationPathTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// EscalationsCheckEscalationPermissionsResultV2 is the typed data model for the escalations_check_escalation_permissions_result_v2 entity.
type EscalationsCheckEscalationPermissionsResultV2 struct {
}

// EscalationsCheckEscalationPermissionsResultV2CreateData is the typed request payload for EscalationsCheckEscalationPermissionsResultV2.CreateTyped.
type EscalationsCheckEscalationPermissionsResultV2CreateData struct {
	EscalationId string `json:"escalation_id"`
	UserIds []any `json:"user_ids"`
}

// EscalationsReassignEscalationResultV2 is the typed data model for the escalations_reassign_escalation_result_v2 entity.
type EscalationsReassignEscalationResultV2 struct {
}

// EscalationsReassignEscalationResultV2CreateData is the typed request payload for EscalationsReassignEscalationResultV2.CreateTyped.
type EscalationsReassignEscalationResultV2CreateData struct {
	EscalationId string `json:"escalation_id"`
	Description *string `json:"description,omitempty"`
	EscalationPathId *string `json:"escalation_path_id,omitempty"`
	ResolveOriginal *bool `json:"resolve_original,omitempty"`
	Title *string `json:"title,omitempty"`
	UserIds *[]any `json:"user_ids,omitempty"`
}

// FollowUp is the typed data model for the follow_up entity.
type FollowUp struct {
}

// FollowUpLoadMatch is the typed request payload for FollowUp.LoadTyped.
type FollowUpLoadMatch struct {
	Id string `json:"id"`
}

// FollowUpListMatch is the typed request payload for FollowUp.ListTyped.
type FollowUpListMatch struct {
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	IncidentMode *string `json:"incident_mode,omitempty"`
}

// FollowUpCreateData is the typed request payload for FollowUp.CreateTyped.
type FollowUpCreateData struct {
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	Description *string `json:"description,omitempty"`
	ExternalIssueReferenceId *string `json:"external_issue_reference_id,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	IncidentId string `json:"incident_id"`
	Labels *[]any `json:"labels,omitempty"`
	Title string `json:"title"`
}

// FollowUpUpdateData is the typed request payload for FollowUp.UpdateTyped.
type FollowUpUpdateData struct {
	Id string `json:"id"`
	AssigneeId *string `json:"assignee_id,omitempty"`
	AssigneeTeamId *string `json:"assignee_team_id,omitempty"`
	Description *string `json:"description,omitempty"`
	FollowUpCategoryId *string `json:"follow_up_category_id,omitempty"`
	FollowUpPriorityOptionId *string `json:"follow_up_priority_option_id,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Status *string `json:"status,omitempty"`
	Title *string `json:"title,omitempty"`
}

// FollowUpRemoveMatch is the typed request payload for FollowUp.RemoveTyped.
type FollowUpRemoveMatch struct {
	Id string `json:"id"`
}

// FollowUpsConnectExternalIssueResultV3 is the typed data model for the follow_ups_connect_external_issue_result_v3 entity.
type FollowUpsConnectExternalIssueResultV3 struct {
}

// FollowUpsConnectExternalIssueResultV3CreateData is the typed request payload for FollowUpsConnectExternalIssueResultV3.CreateTyped.
type FollowUpsConnectExternalIssueResultV3CreateData struct {
	FollowUpId string `json:"follow_up_id"`
	Provider string `json:"provider"`
	Url string `json:"url"`
}

// FollowUpsCreateFromLinkResultV3 is the typed data model for the follow_ups_create_from_link_result_v3 entity.
type FollowUpsCreateFromLinkResultV3 struct {
}

// FollowUpsCreateFromLinkResultV3CreateData is the typed request payload for FollowUpsCreateFromLinkResultV3.CreateTyped.
type FollowUpsCreateFromLinkResultV3CreateData struct {
	IncidentId string `json:"incident_id"`
	Url string `json:"url"`
}

// Identity is the typed data model for the identity entity.
type Identity struct {
}

// IdentityLoadMatch is the typed request payload for Identity.LoadTyped.
type IdentityLoadMatch struct {
	DashboardUrl *string `json:"dashboard_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Roles *[]any `json:"roles,omitempty"`
	TeamRoles *[]any `json:"team_roles,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
}

// Incident is the typed data model for the incident entity.
type Incident struct {
}

// IncidentLoadMatch is the typed request payload for Incident.LoadTyped.
type IncidentLoadMatch struct {
	Id string `json:"id"`
}

// IncidentListMatch is the typed request payload for Incident.ListTyped.
type IncidentListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *[]any `json:"status,omitempty"`
}

// IncidentCreateData is the typed request payload for Incident.CreateTyped.
type IncidentCreateData struct {
	CustomFieldEntries *[]any `json:"custom_field_entries,omitempty"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentRoleAssignments *[]any `json:"incident_role_assignments,omitempty"`
	IncidentStatusId *string `json:"incident_status_id,omitempty"`
	IncidentTimestampValues *[]any `json:"incident_timestamp_values,omitempty"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	RetrospectiveIncidentOptions *map[string]any `json:"retrospective_incident_options,omitempty"`
	SeverityId *string `json:"severity_id,omitempty"`
	SlackChannelNameOverride *string `json:"slack_channel_name_override,omitempty"`
	SlackTeamId *string `json:"slack_team_id,omitempty"`
	SourceMessageChannelId *string `json:"source_message_channel_id,omitempty"`
	SourceMessageTimestamp *string `json:"source_message_timestamp,omitempty"`
	Status *string `json:"status,omitempty"`
	Summary *string `json:"summary,omitempty"`
	Visibility string `json:"visibility"`
}

// IncidentActivityLogEntry is the typed data model for the incident_activity_log_entry entity.
type IncidentActivityLogEntry struct {
}

// IncidentActivityLogEntryListMatch is the typed request payload for IncidentActivityLogEntry.ListTyped.
type IncidentActivityLogEntryListMatch struct {
	After *string `json:"after,omitempty"`
	Id *[]any `json:"id,omitempty"`
	IncidentId string `json:"incident_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentAttachment is the typed data model for the incident_attachment entity.
type IncidentAttachment struct {
}

// IncidentAttachmentListMatch is the typed request payload for IncidentAttachment.ListTyped.
type IncidentAttachmentListMatch struct {
	ExternalId *string `json:"external_id,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
}

// IncidentAttachmentCreateData is the typed request payload for IncidentAttachment.CreateTyped.
type IncidentAttachmentCreateData struct {
	IncidentId string `json:"incident_id"`
	Resource map[string]any `json:"resource"`
}

// IncidentAttachmentRemoveMatch is the typed request payload for IncidentAttachment.RemoveTyped.
type IncidentAttachmentRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentForm is the typed data model for the incident_form entity.
type IncidentForm struct {
}

// IncidentFormLoadMatch is the typed request payload for IncidentForm.LoadTyped.
type IncidentFormLoadMatch struct {
	Id string `json:"id"`
}

// IncidentFormListMatch is the typed request payload for IncidentForm.ListTyped.
type IncidentFormListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentFormCreateData is the typed request payload for IncidentForm.CreateTyped.
type IncidentFormCreateData struct {
	Expressions []any `json:"expressions"`
	FormType string `json:"form_type"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	LifecycleElements *[]any `json:"lifecycle_elements,omitempty"`
}

// IncidentFormUpdateData is the typed request payload for IncidentForm.UpdateTyped.
type IncidentFormUpdateData struct {
	Id string `json:"id"`
	Expressions *[]any `json:"expressions,omitempty"`
	FormType *string `json:"form_type,omitempty"`
	IncidentTypeId *string `json:"incident_type_id,omitempty"`
	LifecycleElements *[]any `json:"lifecycle_elements,omitempty"`
}

// IncidentFormRemoveMatch is the typed request payload for IncidentForm.RemoveTyped.
type IncidentFormRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentMembership is the typed data model for the incident_membership entity.
type IncidentMembership struct {
}

// IncidentMembershipCreateData is the typed request payload for IncidentMembership.CreateTyped.
type IncidentMembershipCreateData struct {
	IncidentId string `json:"incident_id"`
	UserId string `json:"user_id"`
}

// IncidentParticipant is the typed data model for the incident_participant entity.
type IncidentParticipant struct {
}

// IncidentParticipantLoadMatch is the typed request payload for IncidentParticipant.LoadTyped.
type IncidentParticipantLoadMatch struct {
	IncidentId string `json:"incident_id"`
}

// IncidentParticipantWorkload is the typed data model for the incident_participant_workload entity.
type IncidentParticipantWorkload struct {
}

// IncidentParticipantWorkloadListMatch is the typed request payload for IncidentParticipantWorkload.ListTyped.
type IncidentParticipantWorkloadListMatch struct {
	IncidentId string `json:"incident_id"`
}

// IncidentRelationship is the typed data model for the incident_relationship entity.
type IncidentRelationship struct {
}

// IncidentRelationshipListMatch is the typed request payload for IncidentRelationship.ListTyped.
type IncidentRelationshipListMatch struct {
	After *string `json:"after,omitempty"`
	IncidentId string `json:"incident_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentRole is the typed data model for the incident_role entity.
type IncidentRole struct {
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
	Instructions *string `json:"instructions,omitempty"`
	Name *string `json:"name,omitempty"`
	Required *bool `json:"required,omitempty"`
	RoleType *string `json:"role_type,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentRoleCreateData is the typed request payload for IncidentRole.CreateTyped.
type IncidentRoleCreateData struct {
	Description string `json:"description"`
	Instructions string `json:"instructions"`
	Name string `json:"name"`
	Required bool `json:"required"`
	Shortform string `json:"shortform"`
}

// IncidentRoleUpdateData is the typed request payload for IncidentRole.UpdateTyped.
type IncidentRoleUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Instructions *string `json:"instructions,omitempty"`
	Name *string `json:"name,omitempty"`
	Required *bool `json:"required,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
}

// IncidentRoleRemoveMatch is the typed request payload for IncidentRole.RemoveTyped.
type IncidentRoleRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentStatus is the typed data model for the incident_status entity.
type IncidentStatus struct {
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
	Description string `json:"description"`
	Name string `json:"name"`
	Rank *int `json:"rank,omitempty"`
}

// IncidentStatusUpdateData is the typed request payload for IncidentStatus.UpdateTyped.
type IncidentStatusUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
}

// IncidentStatusRemoveMatch is the typed request payload for IncidentStatus.RemoveTyped.
type IncidentStatusRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentTeamMembership is the typed data model for the incident_team_membership entity.
type IncidentTeamMembership struct {
}

// IncidentTeamMembershipCreateData is the typed request payload for IncidentTeamMembership.CreateTyped.
type IncidentTeamMembershipCreateData struct {
	IncidentId string `json:"incident_id"`
	TeamId string `json:"team_id"`
}

// IncidentTeamMembershipsV1 is the typed data model for the incident_team_memberships_v1 entity.
type IncidentTeamMembershipsV1 struct {
}

// IncidentTeamMembershipsV1CreateData is the typed request payload for IncidentTeamMembershipsV1.CreateTyped.
type IncidentTeamMembershipsV1CreateData struct {
	IncidentId string `json:"incident_id"`
	TeamId string `json:"team_id"`
}

// IncidentTemplate is the typed data model for the incident_template entity.
type IncidentTemplate struct {
}

// IncidentTemplateLoadMatch is the typed request payload for IncidentTemplate.LoadTyped.
type IncidentTemplateLoadMatch struct {
	Id string `json:"id"`
}

// IncidentTemplateListMatch is the typed request payload for IncidentTemplate.ListTyped.
type IncidentTemplateListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentTemplateCreateData is the typed request payload for IncidentTemplate.CreateTyped.
type IncidentTemplateCreateData struct {
	Expressions *[]any `json:"expressions,omitempty"`
	Name string `json:"name"`
	Template map[string]any `json:"template"`
}

// IncidentTemplateUpdateData is the typed request payload for IncidentTemplate.UpdateTyped.
type IncidentTemplateUpdateData struct {
	Id string `json:"id"`
	Expressions *[]any `json:"expressions,omitempty"`
	Name *string `json:"name,omitempty"`
	Template *map[string]any `json:"template,omitempty"`
}

// IncidentTemplateRemoveMatch is the typed request payload for IncidentTemplate.RemoveTyped.
type IncidentTemplateRemoveMatch struct {
	Id string `json:"id"`
}

// IncidentTemplatesValidateResultV1 is the typed data model for the incident_templates_validate_result_v1 entity.
type IncidentTemplatesValidateResultV1 struct {
}

// IncidentTemplatesValidateResultV1CreateData is the typed request payload for IncidentTemplatesValidateResultV1.CreateTyped.
type IncidentTemplatesValidateResultV1CreateData struct {
	Expressions *[]any `json:"expressions,omitempty"`
	Name string `json:"name"`
	Template map[string]any `json:"template"`
}

// IncidentTimelineItem is the typed data model for the incident_timeline_item entity.
type IncidentTimelineItem struct {
}

// IncidentTimelineItemListMatch is the typed request payload for IncidentTimelineItem.ListTyped.
type IncidentTimelineItemListMatch struct {
	After *string `json:"after,omitempty"`
	IncidentId string `json:"incident_id"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentTimelineItemCreateData is the typed request payload for IncidentTimelineItem.CreateTyped.
type IncidentTimelineItemCreateData struct {
	Description *string `json:"description,omitempty"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentId string `json:"incident_id"`
	Timestamp string `json:"timestamp"`
	Title string `json:"title"`
}

// IncidentTimelineItemUpdateData is the typed request payload for IncidentTimelineItem.UpdateTyped.
type IncidentTimelineItemUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Title *string `json:"title,omitempty"`
}

// IncidentTimestamp is the typed data model for the incident_timestamp entity.
type IncidentTimestamp struct {
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
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentsOnly *bool `json:"private_incidents_only,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// IncidentUpdate is the typed data model for the incident_update entity.
type IncidentUpdate struct {
}

// IncidentUpdateListMatch is the typed request payload for IncidentUpdate.ListTyped.
type IncidentUpdateListMatch struct {
	After *string `json:"after,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// IncidentUpdateCreateData is the typed request payload for IncidentUpdate.CreateTyped.
type IncidentUpdateCreateData struct {
	IdempotencyKey string `json:"idempotency_key"`
	IncidentId string `json:"incident_id"`
	Message *string `json:"message,omitempty"`
	ToIncidentStatusId *string `json:"to_incident_status_id,omitempty"`
	ToSeverityId *string `json:"to_severity_id,omitempty"`
}

// IpAllowlist is the typed data model for the ip_allowlist entity.
type IpAllowlist struct {
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
	Version *int `json:"version,omitempty"`
}

// IpRange is the typed data model for the ip_range entity.
type IpRange struct {
}

// IpRangeListMatch is the typed request payload for IpRange.ListTyped.
type IpRangeListMatch struct {
	Cidr *string `json:"cidr,omitempty"`
	Description *string `json:"description,omitempty"`
}

// MaintenanceWindow is the typed data model for the maintenance_window entity.
type MaintenanceWindow struct {
}

// MaintenanceWindowLoadMatch is the typed request payload for MaintenanceWindow.LoadTyped.
type MaintenanceWindowLoadMatch struct {
	Id string `json:"id"`
}

// MaintenanceWindowListMatch is the typed request payload for MaintenanceWindow.ListTyped.
type MaintenanceWindowListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// MaintenanceWindowCreateData is the typed request payload for MaintenanceWindow.CreateTyped.
type MaintenanceWindowCreateData struct {
	AlertConditionGroups []any `json:"alert_condition_groups"`
	EndAt string `json:"end_at"`
	EscalationTargets *[]any `json:"escalation_targets,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead map[string]any `json:"lead"`
	Name string `json:"name"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannels *[]any `json:"notify_channels,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	RerouteOnEnd *bool `json:"reroute_on_end,omitempty"`
	ResolveOnEnd *bool `json:"resolve_on_end,omitempty"`
	ShowInSidebar bool `json:"show_in_sidebar"`
	StartAt string `json:"start_at"`
}

// MaintenanceWindowUpdateData is the typed request payload for MaintenanceWindow.UpdateTyped.
type MaintenanceWindowUpdateData struct {
	Id string `json:"id"`
	AlertConditionGroups *[]any `json:"alert_condition_groups,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	EscalationTargets *[]any `json:"escalation_targets,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	Lead *map[string]any `json:"lead,omitempty"`
	Name *string `json:"name,omitempty"`
	NotificationMessage *string `json:"notification_message,omitempty"`
	NotifyChannels *[]any `json:"notify_channels,omitempty"`
	NotifyEndMinutesBefore *int `json:"notify_end_minutes_before,omitempty"`
	NotifyStartMinutesBefore *int `json:"notify_start_minutes_before,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	RerouteOnEnd *bool `json:"reroute_on_end,omitempty"`
	ResolveOnEnd *bool `json:"resolve_on_end,omitempty"`
	ShowInSidebar *bool `json:"show_in_sidebar,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
}

// MaintenanceWindowRemoveMatch is the typed request payload for MaintenanceWindow.RemoveTyped.
type MaintenanceWindowRemoveMatch struct {
	Id string `json:"id"`
	Force *bool `json:"force,omitempty"`
}

// ManagedResource is the typed data model for the managed_resource entity.
type ManagedResource struct {
}

// ManagedResourceCreateData is the typed request payload for ManagedResource.CreateTyped.
type ManagedResourceCreateData struct {
	Annotations map[string]any `json:"annotations"`
	ResourceId string `json:"resource_id"`
	ResourceType string `json:"resource_type"`
}

// OnCallNotificationMethodPublicV2 is the typed data model for the on_call_notification_method_public_v2 entity.
type OnCallNotificationMethodPublicV2 struct {
}

// OnCallNotificationMethodPublicV2ListMatch is the typed request payload for OnCallNotificationMethodPublicV2.ListTyped.
type OnCallNotificationMethodPublicV2ListMatch struct {
	UserId string `json:"user_id"`
}

// OnCallNotificationPause is the typed data model for the on_call_notification_pause entity.
type OnCallNotificationPause struct {
}

// OnCallNotificationPauseLoadMatch is the typed request payload for OnCallNotificationPause.LoadTyped.
type OnCallNotificationPauseLoadMatch struct {
	Id string `json:"id"`
}

// OnCallNotificationPauseListMatch is the typed request payload for OnCallNotificationPause.ListTyped.
type OnCallNotificationPauseListMatch struct {
	After *string `json:"after,omitempty"`
	From *string `json:"from,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	To *string `json:"to,omitempty"`
}

// OnCallNotificationRulePublicV2 is the typed data model for the on_call_notification_rule_public_v2 entity.
type OnCallNotificationRulePublicV2 struct {
}

// OnCallNotificationRulePublicV2ListMatch is the typed request payload for OnCallNotificationRulePublicV2.ListTyped.
type OnCallNotificationRulePublicV2ListMatch struct {
	UserId string `json:"user_id"`
}

// PayConfig is the typed data model for the pay_config entity.
type PayConfig struct {
}

// PayConfigLoadMatch is the typed request payload for PayConfig.LoadTyped.
type PayConfigLoadMatch struct {
	Id string `json:"id"`
}

// PayConfigListMatch is the typed request payload for PayConfig.ListTyped.
type PayConfigListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// PayConfigCreateData is the typed request payload for PayConfig.CreateTyped.
type PayConfigCreateData struct {
	BaseRateCents int `json:"base_rate_cents"`
	Currency string `json:"currency"`
	Name string `json:"name"`
	OneOffRules *[]any `json:"one_off_rules,omitempty"`
	RateTimeUnit string `json:"rate_time_unit"`
	Timezone string `json:"timezone"`
	WeeklyRules *[]any `json:"weekly_rules,omitempty"`
}

// PayConfigUpdateData is the typed request payload for PayConfig.UpdateTyped.
type PayConfigUpdateData struct {
	Id string `json:"id"`
	BaseRateCents *int `json:"base_rate_cents,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Name *string `json:"name,omitempty"`
	RateTimeUnit *string `json:"rate_time_unit,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

// PayConfigRemoveMatch is the typed request payload for PayConfig.RemoveTyped.
type PayConfigRemoveMatch struct {
	Id string `json:"id"`
}

// PayConfigsCreateOneOffRuleResultV2 is the typed data model for the pay_configs_create_one_off_rule_result_v2 entity.
type PayConfigsCreateOneOffRuleResultV2 struct {
}

// PayConfigsCreateOneOffRuleResultV2CreateData is the typed request payload for PayConfigsCreateOneOffRuleResultV2.CreateTyped.
type PayConfigsCreateOneOffRuleResultV2CreateData struct {
	PayConfigId string `json:"pay_config_id"`
	EndAt string `json:"end_at"`
	Name string `json:"name"`
	RateCents int `json:"rate_cents"`
	StartAt string `json:"start_at"`
}

// PayConfigsCreateWeeklyRuleResultV2 is the typed data model for the pay_configs_create_weekly_rule_result_v2 entity.
type PayConfigsCreateWeeklyRuleResultV2 struct {
}

// PayConfigsCreateWeeklyRuleResultV2CreateData is the typed request payload for PayConfigsCreateWeeklyRuleResultV2.CreateTyped.
type PayConfigsCreateWeeklyRuleResultV2CreateData struct {
	PayConfigId string `json:"pay_config_id"`
	EndTime string `json:"end_time"`
	RateCents int `json:"rate_cents"`
	StartTime string `json:"start_time"`
	Weekdays []any `json:"weekdays"`
}

// PayConfigsListOneOffRulesResultV2 is the typed data model for the pay_configs_list_one_off_rules_result_v2 entity.
type PayConfigsListOneOffRulesResultV2 struct {
}

// PayConfigsListOneOffRulesResultV2ListMatch is the typed request payload for PayConfigsListOneOffRulesResultV2.ListTyped.
type PayConfigsListOneOffRulesResultV2ListMatch struct {
	PayConfigId string `json:"pay_config_id"`
}

// PayConfigsListWeeklyRulesResultV2 is the typed data model for the pay_configs_list_weekly_rules_result_v2 entity.
type PayConfigsListWeeklyRulesResultV2 struct {
}

// PayConfigsListWeeklyRulesResultV2ListMatch is the typed request payload for PayConfigsListWeeklyRulesResultV2.ListTyped.
type PayConfigsListWeeklyRulesResultV2ListMatch struct {
	PayConfigId string `json:"pay_config_id"`
}

// PayConfigsShowOneOffRuleResultV2 is the typed data model for the pay_configs_show_one_off_rule_result_v2 entity.
type PayConfigsShowOneOffRuleResultV2 struct {
}

// PayConfigsShowOneOffRuleResultV2LoadMatch is the typed request payload for PayConfigsShowOneOffRuleResultV2.LoadTyped.
type PayConfigsShowOneOffRuleResultV2LoadMatch struct {
	Id string `json:"id"`
	PayConfigId string `json:"pay_config_id"`
}

// PayConfigsShowWeeklyRuleResultV2 is the typed data model for the pay_configs_show_weekly_rule_result_v2 entity.
type PayConfigsShowWeeklyRuleResultV2 struct {
}

// PayConfigsShowWeeklyRuleResultV2LoadMatch is the typed request payload for PayConfigsShowWeeklyRuleResultV2.LoadTyped.
type PayConfigsShowWeeklyRuleResultV2LoadMatch struct {
	Id string `json:"id"`
	PayConfigId string `json:"pay_config_id"`
}

// PayConfigsUpdateOneOffRuleResultV2 is the typed data model for the pay_configs_update_one_off_rule_result_v2 entity.
type PayConfigsUpdateOneOffRuleResultV2 struct {
}

// PayConfigsUpdateOneOffRuleResultV2UpdateData is the typed request payload for PayConfigsUpdateOneOffRuleResultV2.UpdateTyped.
type PayConfigsUpdateOneOffRuleResultV2UpdateData struct {
	Id string `json:"id"`
	PayConfigId string `json:"pay_config_id"`
	EndAt *string `json:"end_at,omitempty"`
	Name *string `json:"name,omitempty"`
	RateCents *int `json:"rate_cents,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
}

// PayConfigsUpdateWeeklyRuleResultV2 is the typed data model for the pay_configs_update_weekly_rule_result_v2 entity.
type PayConfigsUpdateWeeklyRuleResultV2 struct {
}

// PayConfigsUpdateWeeklyRuleResultV2UpdateData is the typed request payload for PayConfigsUpdateWeeklyRuleResultV2.UpdateTyped.
type PayConfigsUpdateWeeklyRuleResultV2UpdateData struct {
	Id string `json:"id"`
	PayConfigId string `json:"pay_config_id"`
	EndTime *string `json:"end_time,omitempty"`
	RateCents *int `json:"rate_cents,omitempty"`
	StartTime *string `json:"start_time,omitempty"`
	Weekdays *[]any `json:"weekdays,omitempty"`
}

// PayConfigsV2 is the typed data model for the pay_configs_v2 entity.
type PayConfigsV2 struct {
}

// PayConfigsV2RemoveMatch is the typed request payload for PayConfigsV2.RemoveTyped.
type PayConfigsV2RemoveMatch struct {
	Id string `json:"id"`
	PayConfigId string `json:"pay_config_id"`
}

// PayReport is the typed data model for the pay_report entity.
type PayReport struct {
}

// PayReportLoadMatch is the typed request payload for PayReport.LoadTyped.
type PayReportLoadMatch struct {
	Id string `json:"id"`
}

// PayReportListMatch is the typed request payload for PayReport.ListTyped.
type PayReportListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// PayReportCreateData is the typed request payload for PayReport.CreateTyped.
type PayReportCreateData struct {
	EndDate string `json:"end_date"`
	Name string `json:"name"`
	OverlappingShifts *string `json:"overlapping_shifts,omitempty"`
	PayConfigExpression map[string]any `json:"pay_config_expression"`
	PayConfigId *string `json:"pay_config_id,omitempty"`
	RotationFilters *[]any `json:"rotation_filters,omitempty"`
	ScheduleIds []any `json:"schedule_ids"`
	StartDate string `json:"start_date"`
	UnpaidShifts *string `json:"unpaid_shifts,omitempty"`
}

// PayReportRemoveMatch is the typed request payload for PayReport.RemoveTyped.
type PayReportRemoveMatch struct {
	Id string `json:"id"`
}

// PayReportsPublishResultV2 is the typed data model for the pay_reports_publish_result_v2 entity.
type PayReportsPublishResultV2 struct {
}

// PayReportsPublishResultV2CreateData is the typed request payload for PayReportsPublishResultV2.CreateTyped.
type PayReportsPublishResultV2CreateData struct {
	PayReportId string `json:"pay_report_id"`
	CcEmails []any `json:"cc_emails"`
	SendUserBreakdowns string `json:"send_user_breakdowns"`
}

// PayReportsUnpublishResultV2 is the typed data model for the pay_reports_unpublish_result_v2 entity.
type PayReportsUnpublishResultV2 struct {
}

// PayReportsUnpublishResultV2CreateData is the typed request payload for PayReportsUnpublishResultV2.CreateTyped.
type PayReportsUnpublishResultV2CreateData struct {
	PayReportId string `json:"pay_report_id"`
	UnpublishReason string `json:"unpublish_reason"`
}

// PayReportsV2 is the typed data model for the pay_reports_v2 entity.
type PayReportsV2 struct {
}

// PayReportsV2LoadMatch is the typed request payload for PayReportsV2.LoadTyped.
type PayReportsV2LoadMatch struct {
	PayReportId string `json:"pay_report_id"`
}

// PoliciesV2 is the typed data model for the policies_v2 entity.
type PoliciesV2 struct {
}

// PoliciesV2RemoveMatch is the typed request payload for PoliciesV2.RemoveTyped.
type PoliciesV2RemoveMatch struct {
	Id string `json:"id"`
}

// Policy is the typed data model for the policy entity.
type Policy struct {
}

// PolicyLoadMatch is the typed request payload for Policy.LoadTyped.
type PolicyLoadMatch struct {
	Id string `json:"id"`
}

// PolicyListMatch is the typed request payload for Policy.ListTyped.
type PolicyListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PolicyType *string `json:"policy_type,omitempty"`
}

// PolicyCreateData is the typed request payload for Policy.CreateTyped.
type PolicyCreateData struct {
	AssignmentRules map[string]any `json:"assignment_rules"`
	Conditions []any `json:"conditions"`
	Debrief map[string]any `json:"debrief"`
	Description string `json:"description"`
	Expressions *[]any `json:"expressions,omitempty"`
	FollowUp map[string]any `json:"follow_up"`
	Name string `json:"name"`
	OnCallReadiness *map[string]any `json:"on_call_readiness,omitempty"`
	PolicyType string `json:"policy_type"`
	PostMortem map[string]any `json:"post_mortem"`
	Schedule map[string]any `json:"schedule"`
	Status *string `json:"status,omitempty"`
}

// PolicyUpdateData is the typed request payload for Policy.UpdateTyped.
type PolicyUpdateData struct {
	Id string `json:"id"`
	AssignmentRules *map[string]any `json:"assignment_rules,omitempty"`
	Conditions *[]any `json:"conditions,omitempty"`
	Debrief *map[string]any `json:"debrief,omitempty"`
	Description *string `json:"description,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	FollowUp *map[string]any `json:"follow_up,omitempty"`
	Name *string `json:"name,omitempty"`
	OnCallReadiness *map[string]any `json:"on_call_readiness,omitempty"`
	PolicyType *string `json:"policy_type,omitempty"`
	PostMortem *map[string]any `json:"post_mortem,omitempty"`
	Schedule *map[string]any `json:"schedule,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PolicyFinding is the typed data model for the policy_finding entity.
type PolicyFinding struct {
}

// PolicyFindingLoadMatch is the typed request payload for PolicyFinding.LoadTyped.
type PolicyFindingLoadMatch struct {
	Id string `json:"id"`
}

// PolicyFindingListMatch is the typed request payload for PolicyFinding.ListTyped.
type PolicyFindingListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PolicyId *string `json:"policy_id,omitempty"`
}

// PolicyFindingsDismissResultV2 is the typed data model for the policy_findings_dismiss_result_v2 entity.
type PolicyFindingsDismissResultV2 struct {
}

// PolicyFindingsDismissResultV2CreateData is the typed request payload for PolicyFindingsDismissResultV2.CreateTyped.
type PolicyFindingsDismissResultV2CreateData struct {
	PolicyFindingId string `json:"policy_finding_id"`
	Reason string `json:"reason"`
}

// PolicyFindingsRestoreResultV2 is the typed data model for the policy_findings_restore_result_v2 entity.
type PolicyFindingsRestoreResultV2 struct {
}

// PolicyFindingsRestoreResultV2CreateData is the typed request payload for PolicyFindingsRestoreResultV2.CreateTyped.
type PolicyFindingsRestoreResultV2CreateData struct {
	PolicyFindingId string `json:"policy_finding_id"`
	CreatedAt string `json:"created_at"`
	Days *int `json:"days,omitempty"`
	Debrief map[string]any `json:"debrief"`
	Dismissal map[string]any `json:"dismissal"`
	DueAt *string `json:"due_at,omitempty"`
	FollowUp map[string]any `json:"follow_up"`
	Id string `json:"id"`
	LastCheckedAt string `json:"last_checked_at"`
	OnCallReadiness map[string]any `json:"on_call_readiness"`
	PolicyId string `json:"policy_id"`
	PolicyType string `json:"policy_type"`
	PostMortem map[string]any `json:"post_mortem"`
	ResponsibleUsers []any `json:"responsible_users"`
	Schedule map[string]any `json:"schedule"`
	ShiftConflict map[string]any `json:"shift_conflict"`
	State string `json:"state"`
	UpdatedAt string `json:"updated_at"`
	VacationConflict map[string]any `json:"vacation_conflict"`
}

// PostmortemDocument is the typed data model for the postmortem_document entity.
type PostmortemDocument struct {
}

// PostmortemDocumentLoadMatch is the typed request payload for PostmortemDocument.LoadTyped.
type PostmortemDocumentLoadMatch struct {
	Id string `json:"id"`
}

// PostmortemDocumentListMatch is the typed request payload for PostmortemDocument.ListTyped.
type PostmortemDocumentListMatch struct {
	After *string `json:"after,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
}

// PostmortemDocumentUpdateData is the typed request payload for PostmortemDocument.UpdateTyped.
type PostmortemDocumentUpdateData struct {
	Id string `json:"id"`
	Status *string `json:"status,omitempty"`
}

// Schedule is the typed data model for the schedule entity.
type Schedule struct {
}

// ScheduleLoadMatch is the typed request payload for Schedule.LoadTyped.
type ScheduleLoadMatch struct {
	Id string `json:"id"`
}

// ScheduleListMatch is the typed request payload for Schedule.ListTyped.
type ScheduleListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// ScheduleCreateData is the typed request payload for Schedule.CreateTyped.
type ScheduleCreateData struct {
	Annotations *map[string]any `json:"annotations,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	HolidaysPublicConfig map[string]any `json:"holidays_public_config"`
	Name *string `json:"name,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

// ScheduleUpdateData is the typed request payload for Schedule.UpdateTyped.
type ScheduleUpdateData struct {
	Id string `json:"id"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	Config *map[string]any `json:"config,omitempty"`
	HolidaysPublicConfig *map[string]any `json:"holidays_public_config,omitempty"`
	Name *string `json:"name,omitempty"`
	TeamIds *[]any `json:"team_ids,omitempty"`
	Timezone *string `json:"timezone,omitempty"`
}

// ScheduleRemoveMatch is the typed request payload for Schedule.RemoveTyped.
type ScheduleRemoveMatch struct {
	Id string `json:"id"`
}

// ScheduleEntriesListPayloadV2 is the typed data model for the schedule_entries_list_payload_v2 entity.
type ScheduleEntriesListPayloadV2 struct {
}

// ScheduleEntriesListPayloadV2CreateData is the typed request payload for ScheduleEntriesListPayloadV2.CreateTyped.
type ScheduleEntriesListPayloadV2CreateData struct {
	ScheduleId string `json:"schedule_id"`
	EntryWindowEnd *string `json:"entry_window_end,omitempty"`
	EntryWindowStart *string `json:"entry_window_start,omitempty"`
	Schedule map[string]any `json:"schedule"`
}

// ScheduleEntry is the typed data model for the schedule_entry entity.
type ScheduleEntry struct {
}

// ScheduleEntryLoadMatch is the typed request payload for ScheduleEntry.LoadTyped.
type ScheduleEntryLoadMatch struct {
	EntryWindowEnd *string `json:"entry_window_end,omitempty"`
	EntryWindowStart *string `json:"entry_window_start,omitempty"`
	ScheduleId string `json:"schedule_id"`
}

// ScheduleReplica is the typed data model for the schedule_replica entity.
type ScheduleReplica struct {
}

// ScheduleReplicaLoadMatch is the typed request payload for ScheduleReplica.LoadTyped.
type ScheduleReplicaLoadMatch struct {
	Id string `json:"id"`
	ScheduleId string `json:"schedule_id"`
}

// ScheduleReplicaListMatch is the typed request payload for ScheduleReplica.ListTyped.
type ScheduleReplicaListMatch struct {
	Id string `json:"id"`
}

// ScheduleReplicaCreateData is the typed request payload for ScheduleReplica.CreateTyped.
type ScheduleReplicaCreateData struct {
	Id string `json:"id"`
	MirrorWindowDays *int `json:"mirror_window_days,omitempty"`
	ReplicaFallbackUserId string `json:"replica_fallback_user_id"`
	ReplicaProvider string `json:"replica_provider"`
	ReplicaProviderId string `json:"replica_provider_id"`
	Sources []any `json:"sources"`
}

// ScheduleSyncRule is the typed data model for the schedule_sync_rule entity.
type ScheduleSyncRule struct {
}

// ScheduleSyncRuleLoadMatch is the typed request payload for ScheduleSyncRule.LoadTyped.
type ScheduleSyncRuleLoadMatch struct {
	Id string `json:"id"`
	ScheduleId string `json:"schedule_id"`
}

// ScheduleSyncRuleListMatch is the typed request payload for ScheduleSyncRule.ListTyped.
type ScheduleSyncRuleListMatch struct {
	Id string `json:"id"`
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// ScheduleSyncRuleCreateData is the typed request payload for ScheduleSyncRule.CreateTyped.
type ScheduleSyncRuleCreateData struct {
	Id string `json:"id"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	PermanentMemberUserIds *[]any `json:"permanent_member_user_ids,omitempty"`
	RotationId *string `json:"rotation_id,omitempty"`
	ScheduleSyncTargetId string `json:"schedule_sync_target_id"`
	SyncType string `json:"sync_type"`
}

// ScheduleSyncRuleUpdateData is the typed request payload for ScheduleSyncRule.UpdateTyped.
type ScheduleSyncRuleUpdateData struct {
	Id string `json:"id"`
	ScheduleId string `json:"schedule_id"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	PermanentMemberUserIds *[]any `json:"permanent_member_user_ids,omitempty"`
	SyncType *string `json:"sync_type,omitempty"`
}

// ScheduleSyncTarget is the typed data model for the schedule_sync_target entity.
type ScheduleSyncTarget struct {
}

// ScheduleSyncTargetLoadMatch is the typed request payload for ScheduleSyncTarget.LoadTyped.
type ScheduleSyncTargetLoadMatch struct {
	Id string `json:"id"`
}

// ScheduleSyncTargetListMatch is the typed request payload for ScheduleSyncTarget.ListTyped.
type ScheduleSyncTargetListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// ScheduleSyncTargetCreateData is the typed request payload for ScheduleSyncTarget.CreateTyped.
type ScheduleSyncTargetCreateData struct {
	AddBotToGroup bool `json:"add_bot_to_group"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	NewSlackUserGroup map[string]any `json:"new_slack_user_group"`
	SlackUserGroupId *string `json:"slack_user_group_id,omitempty"`
}

// ScheduleSyncTargetUpdateData is the typed request payload for ScheduleSyncTarget.UpdateTyped.
type ScheduleSyncTargetUpdateData struct {
	Id string `json:"id"`
	AddBotToGroup *bool `json:"add_bot_to_group,omitempty"`
	Annotations *map[string]any `json:"annotations,omitempty"`
}

// ScheduleSyncTargetRemoveMatch is the typed request payload for ScheduleSyncTarget.RemoveTyped.
type ScheduleSyncTargetRemoveMatch struct {
	Id string `json:"id"`
}

// SchedulesShowOverrideResultV2 is the typed data model for the schedules_show_override_result_v2 entity.
type SchedulesShowOverrideResultV2 struct {
}

// SchedulesShowOverrideResultV2LoadMatch is the typed request payload for SchedulesShowOverrideResultV2.LoadTyped.
type SchedulesShowOverrideResultV2LoadMatch struct {
	Id string `json:"id"`
}

// SchedulesShowOverrideResultV2ListMatch is the typed request payload for SchedulesShowOverrideResultV2.ListTyped.
type SchedulesShowOverrideResultV2ListMatch struct {
	After *string `json:"after,omitempty"`
	LayerId *string `json:"layer_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	RotationId *string `json:"rotation_id,omitempty"`
	ScheduleId string `json:"schedule_id"`
}

// SchedulesShowOverrideResultV2CreateData is the typed request payload for SchedulesShowOverrideResultV2.CreateTyped.
type SchedulesShowOverrideResultV2CreateData struct {
	EndAt string `json:"end_at"`
	LayerId string `json:"layer_id"`
	RotationId string `json:"rotation_id"`
	ScheduleId string `json:"schedule_id"`
	StartAt string `json:"start_at"`
	User map[string]any `json:"user"`
}

// SchedulesUpdateOverrideResultV2 is the typed data model for the schedules_update_override_result_v2 entity.
type SchedulesUpdateOverrideResultV2 struct {
}

// SchedulesUpdateOverrideResultV2UpdateData is the typed request payload for SchedulesUpdateOverrideResultV2.UpdateTyped.
type SchedulesUpdateOverrideResultV2UpdateData struct {
	Id string `json:"id"`
	EndAt *string `json:"end_at,omitempty"`
	LayerId *string `json:"layer_id,omitempty"`
	RotationId *string `json:"rotation_id,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	User *map[string]any `json:"user,omitempty"`
}

// Secret is the typed data model for the secret entity.
type Secret struct {
}

// SecretLoadMatch is the typed request payload for Secret.LoadTyped.
type SecretLoadMatch struct {
	Id string `json:"id"`
}

// SecretListMatch is the typed request payload for Secret.ListTyped.
type SecretListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	TeamId *[]any `json:"team_id,omitempty"`
}

// SecretCreateData is the typed request payload for Secret.CreateTyped.
type SecretCreateData struct {
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	Value string `json:"value"`
}

// SecretUpdateData is the typed request payload for Secret.UpdateTyped.
type SecretUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
}

// SecretRemoveMatch is the typed request payload for Secret.RemoveTyped.
type SecretRemoveMatch struct {
	Id string `json:"id"`
}

// Severity is the typed data model for the severity entity.
type Severity struct {
}

// SeverityLoadMatch is the typed request payload for Severity.LoadTyped.
type SeverityLoadMatch struct {
	Id string `json:"id"`
}

// SeverityListMatch is the typed request payload for Severity.ListTyped.
type SeverityListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// SeverityCreateData is the typed request payload for Severity.CreateTyped.
type SeverityCreateData struct {
	Description string `json:"description"`
	Name string `json:"name"`
	Rank *int `json:"rank,omitempty"`
}

// SeverityUpdateData is the typed request payload for Severity.UpdateTyped.
type SeverityUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Rank *int `json:"rank,omitempty"`
}

// StatusPage is the typed data model for the status_page entity.
type StatusPage struct {
}

// StatusPageLoadMatch is the typed request payload for StatusPage.LoadTyped.
type StatusPageLoadMatch struct {
	Id string `json:"id"`
}

// StatusPageListMatch is the typed request payload for StatusPage.ListTyped.
type StatusPageListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// StatusPageComponent is the typed data model for the status_page_component entity.
type StatusPageComponent struct {
}

// StatusPageComponentLoadMatch is the typed request payload for StatusPageComponent.LoadTyped.
type StatusPageComponentLoadMatch struct {
	Id string `json:"id"`
}

// StatusPageComponentListMatch is the typed request payload for StatusPageComponent.ListTyped.
type StatusPageComponentListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ManagementMeta *map[string]any `json:"management_meta,omitempty"`
	Name *string `json:"name,omitempty"`
}

// StatusPageComponentCreateData is the typed request payload for StatusPageComponent.CreateTyped.
type StatusPageComponentCreateData struct {
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
}

// StatusPageComponentUpdateData is the typed request payload for StatusPageComponent.UpdateTyped.
type StatusPageComponentUpdateData struct {
	Id string `json:"id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
}

// StatusPageComponentRemoveMatch is the typed request payload for StatusPageComponent.RemoveTyped.
type StatusPageComponentRemoveMatch struct {
	Id string `json:"id"`
}

// StatusPageComponentAvailabilityV2 is the typed data model for the status_page_component_availability_v2 entity.
type StatusPageComponentAvailabilityV2 struct {
}

// StatusPageComponentAvailabilityV2LoadMatch is the typed request payload for StatusPageComponentAvailabilityV2.LoadTyped.
type StatusPageComponentAvailabilityV2LoadMatch struct {
	ComponentId string `json:"component_id"`
	StatusPageId string `json:"status_page_id"`
	EndAt string `json:"end_at"`
	StartAt string `json:"start_at"`
}

// StatusPageIncident is the typed data model for the status_page_incident entity.
type StatusPageIncident struct {
}

// StatusPageIncidentLoadMatch is the typed request payload for StatusPageIncident.LoadTyped.
type StatusPageIncidentLoadMatch struct {
	Id string `json:"id"`
}

// StatusPageIncidentListMatch is the typed request payload for StatusPageIncident.ListTyped.
type StatusPageIncidentListMatch struct {
	After *string `json:"after,omitempty"`
	ComponentId *string `json:"component_id,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	StatusPageId string `json:"status_page_id"`
	SubPageId *string `json:"sub_page_id,omitempty"`
}

// StatusPageIncidentCreateData is the typed request payload for StatusPageIncident.CreateTyped.
type StatusPageIncidentCreateData struct {
	ComponentStatuses *[]any `json:"component_statuses,omitempty"`
	IdempotencyKey string `json:"idempotency_key"`
	IncidentStatus string `json:"incident_status"`
	Message string `json:"message"`
	Name string `json:"name"`
	NotifySubscribers bool `json:"notify_subscribers"`
	StatusPageId string `json:"status_page_id"`
}

// StatusPageIncidentUpdateData is the typed request payload for StatusPageIncident.UpdateTyped.
type StatusPageIncidentUpdateData struct {
	Id string `json:"id"`
	Name *string `json:"name,omitempty"`
}

// StatusPageIncidentUpdate is the typed data model for the status_page_incident_update entity.
type StatusPageIncidentUpdate struct {
}

// StatusPageIncidentUpdateCreateData is the typed request payload for StatusPageIncidentUpdate.CreateTyped.
type StatusPageIncidentUpdateCreateData struct {
	ComponentStatuses *[]any `json:"component_statuses,omitempty"`
	IncidentStatus *string `json:"incident_status,omitempty"`
	Message string `json:"message"`
	NotifySubscribers bool `json:"notify_subscribers"`
	StatusPageIncidentId string `json:"status_page_incident_id"`
}

// StatusPageLinkedResponseIncidentV1 is the typed data model for the status_page_linked_response_incident_v1 entity.
type StatusPageLinkedResponseIncidentV1 struct {
}

// StatusPageLinkedResponseIncidentV1ListMatch is the typed request payload for StatusPageLinkedResponseIncidentV1.ListTyped.
type StatusPageLinkedResponseIncidentV1ListMatch struct {
	IncidentId string `json:"incident_id"`
	StatusPageId string `json:"status_page_id"`
}

// StatusPageMaintenance is the typed data model for the status_page_maintenance entity.
type StatusPageMaintenance struct {
}

// StatusPageMaintenanceLoadMatch is the typed request payload for StatusPageMaintenance.LoadTyped.
type StatusPageMaintenanceLoadMatch struct {
	Id string `json:"id"`
}

// StatusPageMaintenanceListMatch is the typed request payload for StatusPageMaintenance.ListTyped.
type StatusPageMaintenanceListMatch struct {
	After *string `json:"after,omitempty"`
	ComponentId *string `json:"component_id,omitempty"`
	EndAt *string `json:"end_at,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
	StatusPageId string `json:"status_page_id"`
	SubPageId *string `json:"sub_page_id,omitempty"`
}

// StatusPageMaintenanceCreateData is the typed request payload for StatusPageMaintenance.CreateTyped.
type StatusPageMaintenanceCreateData struct {
	AffectedComponentIds []any `json:"affected_component_ids"`
	AutomateMaintenanceStatus *bool `json:"automate_maintenance_status,omitempty"`
	EndAt string `json:"end_at"`
	IdempotencyKey string `json:"idempotency_key"`
	MaintenanceStatus string `json:"maintenance_status"`
	Message string `json:"message"`
	Name string `json:"name"`
	NotifySubscribers bool `json:"notify_subscribers"`
	StartAt string `json:"start_at"`
	StatusPageId string `json:"status_page_id"`
}

// StatusPageMaintenanceUpdateData is the typed request payload for StatusPageMaintenance.UpdateTyped.
type StatusPageMaintenanceUpdateData struct {
	Id string `json:"id"`
	EndAt *string `json:"end_at,omitempty"`
	Name *string `json:"name,omitempty"`
	StartAt *string `json:"start_at,omitempty"`
}

// StatusPageMaintenanceUpdate is the typed data model for the status_page_maintenance_update entity.
type StatusPageMaintenanceUpdate struct {
}

// StatusPageMaintenanceUpdateCreateData is the typed request payload for StatusPageMaintenanceUpdate.CreateTyped.
type StatusPageMaintenanceUpdateCreateData struct {
	ComponentStatuses *[]any `json:"component_statuses,omitempty"`
	MaintenanceStatus *string `json:"maintenance_status,omitempty"`
	Message string `json:"message"`
	NotifySubscribers bool `json:"notify_subscribers"`
	StatusPageMaintenanceId string `json:"status_page_maintenance_id"`
}

// StatusPageStructure is the typed data model for the status_page_structure entity.
type StatusPageStructure struct {
}

// StatusPageStructureLoadMatch is the typed request payload for StatusPageStructure.LoadTyped.
type StatusPageStructureLoadMatch struct {
	Id string `json:"id"`
}

// StatusPagesV2 is the typed data model for the status_pages_v2 entity.
type StatusPagesV2 struct {
}

// StatusPagesV2RemoveMatch is the typed request payload for StatusPagesV2.RemoveTyped.
type StatusPagesV2RemoveMatch struct {
	StatusPageMaintenanceId string `json:"status_page_maintenance_id"`
}

// Team is the typed data model for the team entity.
type Team struct {
}

// TeamLoadMatch is the typed request payload for Team.LoadTyped.
type TeamLoadMatch struct {
	Id string `json:"id"`
}

// TeamListMatch is the typed request payload for Team.ListTyped.
type TeamListMatch struct {
	After *string `json:"after,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// TelemetryDataSourceV2 is the typed data model for the telemetry_data_source_v2 entity.
type TelemetryDataSourceV2 struct {
}

// TelemetryDataSourceV2UpdateData is the typed request payload for TelemetryDataSourceV2.UpdateTyped.
type TelemetryDataSourceV2UpdateData struct {
	Id string `json:"id"`
	DatadogConfig *map[string]any `json:"datadog_config,omitempty"`
	GrafanaConfig *map[string]any `json:"grafana_config,omitempty"`
	Name *string `json:"name,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id string `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	After *string `json:"after,omitempty"`
	Email *string `json:"email,omitempty"`
	IncludeInactive *bool `json:"include_inactive,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	SlackUserId *string `json:"slack_user_id,omitempty"`
}

// UserCreateData is the typed request payload for User.CreateTyped.
type UserCreateData struct {
	Id string `json:"id"`
	PreferredEscalationProvider *any `json:"preferred_escalation_provider,omitempty"`
}

// Workflow is the typed data model for the workflow entity.
type Workflow struct {
}

// WorkflowLoadMatch is the typed request payload for Workflow.LoadTyped.
type WorkflowLoadMatch struct {
	Id string `json:"id"`
	SkipStepUpgrade *bool `json:"skip_step_upgrade,omitempty"`
}

// WorkflowListMatch is the typed request payload for Workflow.ListTyped.
type WorkflowListMatch struct {
	Annotations *map[string]any `json:"annotations,omitempty"`
	AutoRunMode *string `json:"auto_run_mode,omitempty"`
	ConditionGroups *[]any `json:"condition_groups,omitempty"`
	ContinueOnStepError *bool `json:"continue_on_step_error,omitempty"`
	Delay *map[string]any `json:"delay,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	Folder *string `json:"folder,omitempty"`
	FormFields *[]any `json:"form_fields,omitempty"`
	Id *string `json:"id,omitempty"`
	IncludePrivateEscalations *bool `json:"include_private_escalations,omitempty"`
	IncludePrivateIncidents *bool `json:"include_private_incidents,omitempty"`
	ManagementMeta *map[string]any `json:"management_meta,omitempty"`
	Name *string `json:"name,omitempty"`
	OnceFor *[]any `json:"once_for,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsFrom *string `json:"runs_from,omitempty"`
	RunsOnIncidentModes *[]any `json:"runs_on_incident_modes,omitempty"`
	RunsOnIncidents *string `json:"runs_on_incidents,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrades *bool `json:"skip_step_upgrades,omitempty"`
	State *string `json:"state,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
	Trigger *string `json:"trigger,omitempty"`
	Version *int `json:"version,omitempty"`
	Workflow *map[string]any `json:"workflow,omitempty"`
}

// WorkflowCreateData is the typed request payload for Workflow.CreateTyped.
type WorkflowCreateData struct {
	Annotations *map[string]any `json:"annotations,omitempty"`
	AutoRunMode *string `json:"auto_run_mode,omitempty"`
	ConditionGroups []any `json:"condition_groups"`
	ContinueOnStepError bool `json:"continue_on_step_error"`
	Delay map[string]any `json:"delay"`
	Expressions []any `json:"expressions"`
	Folder *string `json:"folder,omitempty"`
	FormFields *[]any `json:"form_fields,omitempty"`
	IncludePrivateEscalations *bool `json:"include_private_escalations,omitempty"`
	IncludePrivateIncidents *bool `json:"include_private_incidents,omitempty"`
	Name string `json:"name"`
	OnceFor []any `json:"once_for"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsOnIncidentModes []any `json:"runs_on_incident_modes"`
	RunsOnIncidents string `json:"runs_on_incidents"`
	Shortform *string `json:"shortform,omitempty"`
	State *string `json:"state,omitempty"`
	Steps []any `json:"steps"`
	Trigger string `json:"trigger"`
}

// WorkflowUpdateData is the typed request payload for Workflow.UpdateTyped.
type WorkflowUpdateData struct {
	Id string `json:"id"`
	Annotations *map[string]any `json:"annotations,omitempty"`
	AutoRunMode *string `json:"auto_run_mode,omitempty"`
	ConditionGroups *[]any `json:"condition_groups,omitempty"`
	ContinueOnStepError *bool `json:"continue_on_step_error,omitempty"`
	Delay *map[string]any `json:"delay,omitempty"`
	Expressions *[]any `json:"expressions,omitempty"`
	Folder *string `json:"folder,omitempty"`
	FormFields *[]any `json:"form_fields,omitempty"`
	IncludePrivateEscalations *bool `json:"include_private_escalations,omitempty"`
	IncludePrivateIncidents *bool `json:"include_private_incidents,omitempty"`
	Name *string `json:"name,omitempty"`
	OnceFor *[]any `json:"once_for,omitempty"`
	OwningTeamIds *[]any `json:"owning_team_ids,omitempty"`
	PrivateIncidentScope *string `json:"private_incident_scope,omitempty"`
	RunsOnIncidentModes *[]any `json:"runs_on_incident_modes,omitempty"`
	RunsOnIncidents *string `json:"runs_on_incidents,omitempty"`
	Shortform *string `json:"shortform,omitempty"`
	SkipStepUpgrades *bool `json:"skip_step_upgrades,omitempty"`
	State *string `json:"state,omitempty"`
	Steps *[]any `json:"steps,omitempty"`
}

// WorkflowRemoveMatch is the typed request payload for Workflow.RemoveTyped.
type WorkflowRemoveMatch struct {
	Id string `json:"id"`
}

// WorkflowRun is the typed data model for the workflow_run entity.
type WorkflowRun struct {
}

// WorkflowRunLoadMatch is the typed request payload for WorkflowRun.LoadTyped.
type WorkflowRunLoadMatch struct {
	Id string `json:"id"`
}

// WorkflowRunListMatch is the typed request payload for WorkflowRun.ListTyped.
type WorkflowRunListMatch struct {
	After *string `json:"after,omitempty"`
	CreatedAt *map[string]any `json:"created_at,omitempty"`
	IncidentId *string `json:"incident_id,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	WorkflowId *string `json:"workflow_id,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

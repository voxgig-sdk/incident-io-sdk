package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewActionEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertAttributeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertNoteEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertRouteEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertSourceEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewApiKeyEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCustomFieldEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCustomFieldOptionEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewFollowUpEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentAttachmentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentMembershipEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentParticipantEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentParticipantWorkloadEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentRelationshipEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentRoleEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentStatusEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTimestampEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTypeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentUpdateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIpAllowlistEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewMaintenanceWindowEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPostmortemDocumentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewSecretEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewTeamEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewUserEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewWorkflowEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewWorkflowRunEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity


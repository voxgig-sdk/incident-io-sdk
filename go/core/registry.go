package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewSecretsFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewActionEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertAttributeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertNoteEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertRouteEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertSourceEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertSourcesV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertTagEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertsAddTagsResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertsRemoveTagsResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertsSetTagsResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAlertsTransitionIncidentAlertResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAnnouncementRuleEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewAnnouncementTemplateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewApiKeyEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRouteEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesCreateAllowedCallerResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesCreateOptionResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesListAllowedCallersResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesListOptionsResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesShowAllowedCallerResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesShowOptionResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesUpdateAllowedCallerResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesUpdateOptionResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallRoutesV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallSessionEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCallTranscriptEntryEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCatalogEntryEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCatalogResourceEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCatalogTypeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCatalogTypeSchemaEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCustomFieldEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewCustomFieldOptionEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewEscalationEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewEscalationPathTemplateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewEscalationsCheckEscalationPermissionsResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewEscalationsReassignEscalationResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewFollowUpEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewFollowUpsConnectExternalIssueResultV3EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewFollowUpsCreateFromLinkResultV3EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIdentityEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentActivityLogEntryEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentAttachmentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentFormEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentMembershipEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentParticipantEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentParticipantWorkloadEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentRelationshipEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentRoleEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentStatusEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTeamMembershipEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTeamMembershipsV1EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTemplateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTemplatesValidateResultV1EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTimelineItemEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTimestampEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentTypeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIncidentUpdateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIpAllowlistEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewIpRangeEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewMaintenanceWindowEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewManagedResourceEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewOnCallNotificationMethodPublicV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewOnCallNotificationPauseEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewOnCallNotificationRulePublicV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsCreateOneOffRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsCreateWeeklyRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsListOneOffRulesResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsListWeeklyRulesResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsShowOneOffRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsShowWeeklyRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsUpdateOneOffRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsUpdateWeeklyRuleResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayConfigsV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayReportEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayReportsPublishResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayReportsUnpublishResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPayReportsV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPoliciesV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPolicyEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPolicyFindingEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPolicyFindingsDismissResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPolicyFindingsRestoreResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewPostmortemDocumentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleEntriesListPayloadV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleEntryEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleReplicaEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleSyncRuleEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewScheduleSyncTargetEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewSchedulesShowOverrideResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewSchedulesUpdateOverrideResultV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewSecretEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewSeverityEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageComponentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageComponentAvailabilityV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageIncidentEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageIncidentUpdateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageLinkedResponseIncidentV1EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageMaintenanceEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageMaintenanceUpdateEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPageStructureEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewStatusPagesV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewTeamEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewTelemetryDataSourceV2EntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewUserEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewWorkflowEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity

var NewWorkflowRunEntityFunc func(client *IncidentIoSDK, entopts map[string]any) IncidentIoEntity


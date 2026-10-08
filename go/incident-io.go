package voxgigincidentiosdk

import (
	"github.com/voxgig-sdk/incident-io-sdk/go/core"
	"github.com/voxgig-sdk/incident-io-sdk/go/entity"
	"github.com/voxgig-sdk/incident-io-sdk/go/feature"
	_ "github.com/voxgig-sdk/incident-io-sdk/go/utility"
)

// Type aliases preserve external API.
type IncidentIoSDK = core.IncidentIoSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type IncidentIoEntity = core.IncidentIoEntity
type StreamItem = core.StreamItem
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type IncidentIoError = core.IncidentIoError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewActionEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewActionEntity(client, entopts)
	}
	core.NewAlertEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertEntity(client, entopts)
	}
	core.NewAlertAttributeEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertAttributeEntity(client, entopts)
	}
	core.NewAlertNoteEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertNoteEntity(client, entopts)
	}
	core.NewAlertRouteEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertRouteEntity(client, entopts)
	}
	core.NewAlertSourceEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertSourceEntity(client, entopts)
	}
	core.NewAlertSourcesV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertSourcesV2Entity(client, entopts)
	}
	core.NewAlertTagEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertTagEntity(client, entopts)
	}
	core.NewAlertsAddTagsResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertsAddTagsResultV2Entity(client, entopts)
	}
	core.NewAlertsRemoveTagsResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertsRemoveTagsResultV2Entity(client, entopts)
	}
	core.NewAlertsSetTagsResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertsSetTagsResultV2Entity(client, entopts)
	}
	core.NewAlertsTransitionIncidentAlertResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAlertsTransitionIncidentAlertResultV2Entity(client, entopts)
	}
	core.NewAnnouncementRuleEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAnnouncementRuleEntity(client, entopts)
	}
	core.NewAnnouncementTemplateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewAnnouncementTemplateEntity(client, entopts)
	}
	core.NewApiKeyEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewApiKeyEntity(client, entopts)
	}
	core.NewCallRouteEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRouteEntity(client, entopts)
	}
	core.NewCallRoutesCreateAllowedCallerResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesCreateAllowedCallerResultV2Entity(client, entopts)
	}
	core.NewCallRoutesCreateOptionResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesCreateOptionResultV2Entity(client, entopts)
	}
	core.NewCallRoutesListAllowedCallersResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesListAllowedCallersResultV2Entity(client, entopts)
	}
	core.NewCallRoutesListOptionsResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesListOptionsResultV2Entity(client, entopts)
	}
	core.NewCallRoutesShowAllowedCallerResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesShowAllowedCallerResultV2Entity(client, entopts)
	}
	core.NewCallRoutesShowOptionResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesShowOptionResultV2Entity(client, entopts)
	}
	core.NewCallRoutesUpdateAllowedCallerResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesUpdateAllowedCallerResultV2Entity(client, entopts)
	}
	core.NewCallRoutesUpdateOptionResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesUpdateOptionResultV2Entity(client, entopts)
	}
	core.NewCallRoutesV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallRoutesV2Entity(client, entopts)
	}
	core.NewCallSessionEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallSessionEntity(client, entopts)
	}
	core.NewCallTranscriptEntryEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCallTranscriptEntryEntity(client, entopts)
	}
	core.NewCatalogEntryEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCatalogEntryEntity(client, entopts)
	}
	core.NewCatalogResourceEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCatalogResourceEntity(client, entopts)
	}
	core.NewCatalogTypeEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCatalogTypeEntity(client, entopts)
	}
	core.NewCatalogTypeSchemaEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCatalogTypeSchemaEntity(client, entopts)
	}
	core.NewCustomFieldEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCustomFieldEntity(client, entopts)
	}
	core.NewCustomFieldOptionEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewCustomFieldOptionEntity(client, entopts)
	}
	core.NewEscalationEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewEscalationEntity(client, entopts)
	}
	core.NewEscalationPathTemplateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewEscalationPathTemplateEntity(client, entopts)
	}
	core.NewEscalationsCheckEscalationPermissionsResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewEscalationsCheckEscalationPermissionsResultV2Entity(client, entopts)
	}
	core.NewEscalationsReassignEscalationResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewEscalationsReassignEscalationResultV2Entity(client, entopts)
	}
	core.NewFollowUpEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewFollowUpEntity(client, entopts)
	}
	core.NewFollowUpsConnectExternalIssueResultV3EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewFollowUpsConnectExternalIssueResultV3Entity(client, entopts)
	}
	core.NewFollowUpsCreateFromLinkResultV3EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewFollowUpsCreateFromLinkResultV3Entity(client, entopts)
	}
	core.NewIdentityEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIdentityEntity(client, entopts)
	}
	core.NewIncidentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentEntity(client, entopts)
	}
	core.NewIncidentActivityLogEntryEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentActivityLogEntryEntity(client, entopts)
	}
	core.NewIncidentAttachmentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentAttachmentEntity(client, entopts)
	}
	core.NewIncidentFormEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentFormEntity(client, entopts)
	}
	core.NewIncidentMembershipEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentMembershipEntity(client, entopts)
	}
	core.NewIncidentParticipantEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentParticipantEntity(client, entopts)
	}
	core.NewIncidentParticipantWorkloadEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentParticipantWorkloadEntity(client, entopts)
	}
	core.NewIncidentRelationshipEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentRelationshipEntity(client, entopts)
	}
	core.NewIncidentRoleEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentRoleEntity(client, entopts)
	}
	core.NewIncidentStatusEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentStatusEntity(client, entopts)
	}
	core.NewIncidentTeamMembershipEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTeamMembershipEntity(client, entopts)
	}
	core.NewIncidentTeamMembershipsV1EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTeamMembershipsV1Entity(client, entopts)
	}
	core.NewIncidentTemplateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTemplateEntity(client, entopts)
	}
	core.NewIncidentTemplatesValidateResultV1EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTemplatesValidateResultV1Entity(client, entopts)
	}
	core.NewIncidentTimelineItemEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTimelineItemEntity(client, entopts)
	}
	core.NewIncidentTimestampEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTimestampEntity(client, entopts)
	}
	core.NewIncidentTypeEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentTypeEntity(client, entopts)
	}
	core.NewIncidentUpdateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentUpdateEntity(client, entopts)
	}
	core.NewIpAllowlistEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIpAllowlistEntity(client, entopts)
	}
	core.NewIpRangeEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIpRangeEntity(client, entopts)
	}
	core.NewMaintenanceWindowEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewMaintenanceWindowEntity(client, entopts)
	}
	core.NewOnCallNotificationMethodPublicV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewOnCallNotificationMethodPublicV2Entity(client, entopts)
	}
	core.NewOnCallNotificationRulePublicV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewOnCallNotificationRulePublicV2Entity(client, entopts)
	}
	core.NewPayConfigEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigEntity(client, entopts)
	}
	core.NewPayConfigsCreateOneOffRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsCreateOneOffRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsCreateWeeklyRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsCreateWeeklyRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsListOneOffRulesResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsListOneOffRulesResultV2Entity(client, entopts)
	}
	core.NewPayConfigsListWeeklyRulesResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsListWeeklyRulesResultV2Entity(client, entopts)
	}
	core.NewPayConfigsShowOneOffRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsShowOneOffRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsShowWeeklyRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsShowWeeklyRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsUpdateOneOffRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsUpdateOneOffRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsUpdateWeeklyRuleResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsUpdateWeeklyRuleResultV2Entity(client, entopts)
	}
	core.NewPayConfigsV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayConfigsV2Entity(client, entopts)
	}
	core.NewPayReportEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayReportEntity(client, entopts)
	}
	core.NewPayReportsPublishResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayReportsPublishResultV2Entity(client, entopts)
	}
	core.NewPayReportsUnpublishResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayReportsUnpublishResultV2Entity(client, entopts)
	}
	core.NewPayReportsV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPayReportsV2Entity(client, entopts)
	}
	core.NewPoliciesV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPoliciesV2Entity(client, entopts)
	}
	core.NewPolicyEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPolicyEntity(client, entopts)
	}
	core.NewPolicyFindingEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPolicyFindingEntity(client, entopts)
	}
	core.NewPolicyFindingsDismissResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPolicyFindingsDismissResultV2Entity(client, entopts)
	}
	core.NewPolicyFindingsRestoreResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPolicyFindingsRestoreResultV2Entity(client, entopts)
	}
	core.NewPostmortemDocumentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPostmortemDocumentEntity(client, entopts)
	}
	core.NewScheduleEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleEntity(client, entopts)
	}
	core.NewScheduleEntriesListPayloadV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleEntriesListPayloadV2Entity(client, entopts)
	}
	core.NewScheduleEntryEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleEntryEntity(client, entopts)
	}
	core.NewScheduleReplicaEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleReplicaEntity(client, entopts)
	}
	core.NewScheduleSyncRuleEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleSyncRuleEntity(client, entopts)
	}
	core.NewScheduleSyncTargetEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleSyncTargetEntity(client, entopts)
	}
	core.NewSchedulesShowOverrideResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSchedulesShowOverrideResultV2Entity(client, entopts)
	}
	core.NewSchedulesUpdateOverrideResultV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSchedulesUpdateOverrideResultV2Entity(client, entopts)
	}
	core.NewSecretEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSecretEntity(client, entopts)
	}
	core.NewSeverityEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSeverityEntity(client, entopts)
	}
	core.NewStatusPageEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageEntity(client, entopts)
	}
	core.NewStatusPageComponentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageComponentEntity(client, entopts)
	}
	core.NewStatusPageComponentAvailabilityV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageComponentAvailabilityV2Entity(client, entopts)
	}
	core.NewStatusPageIncidentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageIncidentEntity(client, entopts)
	}
	core.NewStatusPageIncidentUpdateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageIncidentUpdateEntity(client, entopts)
	}
	core.NewStatusPageLinkedResponseIncidentV1EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageLinkedResponseIncidentV1Entity(client, entopts)
	}
	core.NewStatusPageMaintenanceEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageMaintenanceEntity(client, entopts)
	}
	core.NewStatusPageMaintenanceUpdateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageMaintenanceUpdateEntity(client, entopts)
	}
	core.NewStatusPageStructureEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageStructureEntity(client, entopts)
	}
	core.NewStatusPagesV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPagesV2Entity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTelemetryDataSourceV2EntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewTelemetryDataSourceV2Entity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewWorkflowEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewWorkflowEntity(client, entopts)
	}
	core.NewWorkflowRunEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewWorkflowRunEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewIncidentIoSDK = core.NewIncidentIoSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIncidentIoSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IncidentIoSDK  { return NewIncidentIoSDK(nil) }
func Test() *IncidentIoSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature

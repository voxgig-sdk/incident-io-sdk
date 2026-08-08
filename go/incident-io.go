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
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
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
	core.NewApiKeyEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewApiKeyEntity(client, entopts)
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
	core.NewFollowUpEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewFollowUpEntity(client, entopts)
	}
	core.NewIncidentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentEntity(client, entopts)
	}
	core.NewIncidentAlertEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentAlertEntity(client, entopts)
	}
	core.NewIncidentAttachmentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewIncidentAttachmentEntity(client, entopts)
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
	core.NewMaintenanceWindowEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewMaintenanceWindowEntity(client, entopts)
	}
	core.NewPostmortemDocumentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewPostmortemDocumentEntity(client, entopts)
	}
	core.NewScheduleEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewScheduleEntity(client, entopts)
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
	core.NewSecretEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSecretEntity(client, entopts)
	}
	core.NewSeverityEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewSeverityEntity(client, entopts)
	}
	core.NewStatusPageEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageEntity(client, entopts)
	}
	core.NewStatusPageIncidentEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageIncidentEntity(client, entopts)
	}
	core.NewStatusPageIncidentUpdateEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewStatusPageIncidentUpdateEntity(client, entopts)
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
	core.NewTeamEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTelemetryDataSourceEntityFunc = func(client *core.IncidentIoSDK, entopts map[string]any) core.IncidentIoEntity {
		return entity.NewTelemetryDataSourceEntity(client, entopts)
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

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewIncidentIoSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *IncidentIoSDK  { return NewIncidentIoSDK(nil) }
func Test() *IncidentIoSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature

# IncidentIo JavaScript SDK Reference

Complete API reference for the IncidentIo JavaScript SDK.


## IncidentIoSDK

### Constructor

```ts
new IncidentIoSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `IncidentIoSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = IncidentIoSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `IncidentIoSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `Alert(data?: object)`

Create a new `Alert` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertEntity` instance.

#### `AlertAttribute(data?: object)`

Create a new `AlertAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertAttributeEntity` instance.

#### `AlertNote(data?: object)`

Create a new `AlertNote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertNoteEntity` instance.

#### `AlertRoute(data?: object)`

Create a new `AlertRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertRouteEntity` instance.

#### `AlertSource(data?: object)`

Create a new `AlertSource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertSourceEntity` instance.

#### `AlertSourcesV2(data?: object)`

Create a new `AlertSourcesV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertSourcesV2Entity` instance.

#### `AlertTag(data?: object)`

Create a new `AlertTag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertTagEntity` instance.

#### `AlertsAddTagsResultV2(data?: object)`

Create a new `AlertsAddTagsResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertsAddTagsResultV2Entity` instance.

#### `AlertsRemoveTagsResultV2(data?: object)`

Create a new `AlertsRemoveTagsResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertsRemoveTagsResultV2Entity` instance.

#### `AlertsSetTagsResultV2(data?: object)`

Create a new `AlertsSetTagsResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertsSetTagsResultV2Entity` instance.

#### `AlertsTransitionIncidentAlertResultV2(data?: object)`

Create a new `AlertsTransitionIncidentAlertResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AlertsTransitionIncidentAlertResultV2Entity` instance.

#### `AnnouncementRule(data?: object)`

Create a new `AnnouncementRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnouncementRuleEntity` instance.

#### `AnnouncementTemplate(data?: object)`

Create a new `AnnouncementTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AnnouncementTemplateEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `CallRoute(data?: object)`

Create a new `CallRoute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRouteEntity` instance.

#### `CallRoutesCreateAllowedCallerResultV2(data?: object)`

Create a new `CallRoutesCreateAllowedCallerResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesCreateAllowedCallerResultV2Entity` instance.

#### `CallRoutesCreateOptionResultV2(data?: object)`

Create a new `CallRoutesCreateOptionResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesCreateOptionResultV2Entity` instance.

#### `CallRoutesListAllowedCallersResultV2(data?: object)`

Create a new `CallRoutesListAllowedCallersResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesListAllowedCallersResultV2Entity` instance.

#### `CallRoutesListOptionsResultV2(data?: object)`

Create a new `CallRoutesListOptionsResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesListOptionsResultV2Entity` instance.

#### `CallRoutesShowAllowedCallerResultV2(data?: object)`

Create a new `CallRoutesShowAllowedCallerResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesShowAllowedCallerResultV2Entity` instance.

#### `CallRoutesShowOptionResultV2(data?: object)`

Create a new `CallRoutesShowOptionResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesShowOptionResultV2Entity` instance.

#### `CallRoutesUpdateAllowedCallerResultV2(data?: object)`

Create a new `CallRoutesUpdateAllowedCallerResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesUpdateAllowedCallerResultV2Entity` instance.

#### `CallRoutesUpdateOptionResultV2(data?: object)`

Create a new `CallRoutesUpdateOptionResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesUpdateOptionResultV2Entity` instance.

#### `CallRoutesV2(data?: object)`

Create a new `CallRoutesV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallRoutesV2Entity` instance.

#### `CallSession(data?: object)`

Create a new `CallSession` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallSessionEntity` instance.

#### `CallTranscriptEntry(data?: object)`

Create a new `CallTranscriptEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CallTranscriptEntryEntity` instance.

#### `CatalogEntry(data?: object)`

Create a new `CatalogEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogEntryEntity` instance.

#### `CatalogResource(data?: object)`

Create a new `CatalogResource` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogResourceEntity` instance.

#### `CatalogType(data?: object)`

Create a new `CatalogType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogTypeEntity` instance.

#### `CatalogTypeSchema(data?: object)`

Create a new `CatalogTypeSchema` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CatalogTypeSchemaEntity` instance.

#### `CustomField(data?: object)`

Create a new `CustomField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldEntity` instance.

#### `CustomFieldOption(data?: object)`

Create a new `CustomFieldOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldOptionEntity` instance.

#### `Escalation(data?: object)`

Create a new `Escalation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EscalationEntity` instance.

#### `EscalationPathTemplate(data?: object)`

Create a new `EscalationPathTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EscalationPathTemplateEntity` instance.

#### `EscalationsCheckEscalationPermissionsResultV2(data?: object)`

Create a new `EscalationsCheckEscalationPermissionsResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EscalationsCheckEscalationPermissionsResultV2Entity` instance.

#### `EscalationsReassignEscalationResultV2(data?: object)`

Create a new `EscalationsReassignEscalationResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EscalationsReassignEscalationResultV2Entity` instance.

#### `FollowUp(data?: object)`

Create a new `FollowUp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowUpEntity` instance.

#### `FollowUpsConnectExternalIssueResultV3(data?: object)`

Create a new `FollowUpsConnectExternalIssueResultV3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowUpsConnectExternalIssueResultV3Entity` instance.

#### `FollowUpsCreateFromLinkResultV3(data?: object)`

Create a new `FollowUpsCreateFromLinkResultV3` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `FollowUpsCreateFromLinkResultV3Entity` instance.

#### `Identity(data?: object)`

Create a new `Identity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdentityEntity` instance.

#### `Incident(data?: object)`

Create a new `Incident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentEntity` instance.

#### `IncidentActivityLogEntry(data?: object)`

Create a new `IncidentActivityLogEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentActivityLogEntryEntity` instance.

#### `IncidentAttachment(data?: object)`

Create a new `IncidentAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentAttachmentEntity` instance.

#### `IncidentForm(data?: object)`

Create a new `IncidentForm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentFormEntity` instance.

#### `IncidentMembership(data?: object)`

Create a new `IncidentMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentMembershipEntity` instance.

#### `IncidentParticipant(data?: object)`

Create a new `IncidentParticipant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentParticipantEntity` instance.

#### `IncidentParticipantWorkload(data?: object)`

Create a new `IncidentParticipantWorkload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentParticipantWorkloadEntity` instance.

#### `IncidentRelationship(data?: object)`

Create a new `IncidentRelationship` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentRelationshipEntity` instance.

#### `IncidentRole(data?: object)`

Create a new `IncidentRole` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentRoleEntity` instance.

#### `IncidentStatus(data?: object)`

Create a new `IncidentStatus` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentStatusEntity` instance.

#### `IncidentTeamMembership(data?: object)`

Create a new `IncidentTeamMembership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTeamMembershipEntity` instance.

#### `IncidentTeamMembershipsV1(data?: object)`

Create a new `IncidentTeamMembershipsV1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTeamMembershipsV1Entity` instance.

#### `IncidentTemplate(data?: object)`

Create a new `IncidentTemplate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTemplateEntity` instance.

#### `IncidentTemplatesValidateResultV1(data?: object)`

Create a new `IncidentTemplatesValidateResultV1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTemplatesValidateResultV1Entity` instance.

#### `IncidentTimelineItem(data?: object)`

Create a new `IncidentTimelineItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTimelineItemEntity` instance.

#### `IncidentTimestamp(data?: object)`

Create a new `IncidentTimestamp` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTimestampEntity` instance.

#### `IncidentType(data?: object)`

Create a new `IncidentType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentTypeEntity` instance.

#### `IncidentUpdate(data?: object)`

Create a new `IncidentUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IncidentUpdateEntity` instance.

#### `IpAllowlist(data?: object)`

Create a new `IpAllowlist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpAllowlistEntity` instance.

#### `IpRange(data?: object)`

Create a new `IpRange` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IpRangeEntity` instance.

#### `MaintenanceWindow(data?: object)`

Create a new `MaintenanceWindow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MaintenanceWindowEntity` instance.

#### `OnCallNotificationMethodPublicV2(data?: object)`

Create a new `OnCallNotificationMethodPublicV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnCallNotificationMethodPublicV2Entity` instance.

#### `OnCallNotificationRulePublicV2(data?: object)`

Create a new `OnCallNotificationRulePublicV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OnCallNotificationRulePublicV2Entity` instance.

#### `PayConfig(data?: object)`

Create a new `PayConfig` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigEntity` instance.

#### `PayConfigsCreateOneOffRuleResultV2(data?: object)`

Create a new `PayConfigsCreateOneOffRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsCreateOneOffRuleResultV2Entity` instance.

#### `PayConfigsCreateWeeklyRuleResultV2(data?: object)`

Create a new `PayConfigsCreateWeeklyRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsCreateWeeklyRuleResultV2Entity` instance.

#### `PayConfigsListOneOffRulesResultV2(data?: object)`

Create a new `PayConfigsListOneOffRulesResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsListOneOffRulesResultV2Entity` instance.

#### `PayConfigsListWeeklyRulesResultV2(data?: object)`

Create a new `PayConfigsListWeeklyRulesResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsListWeeklyRulesResultV2Entity` instance.

#### `PayConfigsShowOneOffRuleResultV2(data?: object)`

Create a new `PayConfigsShowOneOffRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsShowOneOffRuleResultV2Entity` instance.

#### `PayConfigsShowWeeklyRuleResultV2(data?: object)`

Create a new `PayConfigsShowWeeklyRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsShowWeeklyRuleResultV2Entity` instance.

#### `PayConfigsUpdateOneOffRuleResultV2(data?: object)`

Create a new `PayConfigsUpdateOneOffRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsUpdateOneOffRuleResultV2Entity` instance.

#### `PayConfigsUpdateWeeklyRuleResultV2(data?: object)`

Create a new `PayConfigsUpdateWeeklyRuleResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsUpdateWeeklyRuleResultV2Entity` instance.

#### `PayConfigsV2(data?: object)`

Create a new `PayConfigsV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayConfigsV2Entity` instance.

#### `PayReport(data?: object)`

Create a new `PayReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayReportEntity` instance.

#### `PayReportsPublishResultV2(data?: object)`

Create a new `PayReportsPublishResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayReportsPublishResultV2Entity` instance.

#### `PayReportsUnpublishResultV2(data?: object)`

Create a new `PayReportsUnpublishResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayReportsUnpublishResultV2Entity` instance.

#### `PayReportsV2(data?: object)`

Create a new `PayReportsV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PayReportsV2Entity` instance.

#### `PoliciesV2(data?: object)`

Create a new `PoliciesV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PoliciesV2Entity` instance.

#### `Policy(data?: object)`

Create a new `Policy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyEntity` instance.

#### `PolicyFinding(data?: object)`

Create a new `PolicyFinding` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyFindingEntity` instance.

#### `PolicyFindingsDismissResultV2(data?: object)`

Create a new `PolicyFindingsDismissResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyFindingsDismissResultV2Entity` instance.

#### `PolicyFindingsRestoreResultV2(data?: object)`

Create a new `PolicyFindingsRestoreResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyFindingsRestoreResultV2Entity` instance.

#### `PostmortemDocument(data?: object)`

Create a new `PostmortemDocument` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostmortemDocumentEntity` instance.

#### `Schedule(data?: object)`

Create a new `Schedule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntity` instance.

#### `ScheduleEntriesListPayloadV2(data?: object)`

Create a new `ScheduleEntriesListPayloadV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntriesListPayloadV2Entity` instance.

#### `ScheduleEntry(data?: object)`

Create a new `ScheduleEntry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleEntryEntity` instance.

#### `ScheduleReplica(data?: object)`

Create a new `ScheduleReplica` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleReplicaEntity` instance.

#### `ScheduleSyncRule(data?: object)`

Create a new `ScheduleSyncRule` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleSyncRuleEntity` instance.

#### `ScheduleSyncTarget(data?: object)`

Create a new `ScheduleSyncTarget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ScheduleSyncTargetEntity` instance.

#### `SchedulesShowOverrideResultV2(data?: object)`

Create a new `SchedulesShowOverrideResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SchedulesShowOverrideResultV2Entity` instance.

#### `SchedulesUpdateOverrideResultV2(data?: object)`

Create a new `SchedulesUpdateOverrideResultV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SchedulesUpdateOverrideResultV2Entity` instance.

#### `Secret(data?: object)`

Create a new `Secret` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SecretEntity` instance.

#### `Severity(data?: object)`

Create a new `Severity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SeverityEntity` instance.

#### `StatusPage(data?: object)`

Create a new `StatusPage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageEntity` instance.

#### `StatusPageComponent(data?: object)`

Create a new `StatusPageComponent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageComponentEntity` instance.

#### `StatusPageComponentAvailabilityV2(data?: object)`

Create a new `StatusPageComponentAvailabilityV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageComponentAvailabilityV2Entity` instance.

#### `StatusPageIncident(data?: object)`

Create a new `StatusPageIncident` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageIncidentEntity` instance.

#### `StatusPageIncidentUpdate(data?: object)`

Create a new `StatusPageIncidentUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageIncidentUpdateEntity` instance.

#### `StatusPageLinkedResponseIncidentV1(data?: object)`

Create a new `StatusPageLinkedResponseIncidentV1` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageLinkedResponseIncidentV1Entity` instance.

#### `StatusPageMaintenance(data?: object)`

Create a new `StatusPageMaintenance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageMaintenanceEntity` instance.

#### `StatusPageMaintenanceUpdate(data?: object)`

Create a new `StatusPageMaintenanceUpdate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageMaintenanceUpdateEntity` instance.

#### `StatusPageStructure(data?: object)`

Create a new `StatusPageStructure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPageStructureEntity` instance.

#### `StatusPagesV2(data?: object)`

Create a new `StatusPagesV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatusPagesV2Entity` instance.

#### `Team(data?: object)`

Create a new `Team` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TeamEntity` instance.

#### `TelemetryDataSourceV2(data?: object)`

Create a new `TelemetryDataSourceV2` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TelemetryDataSourceV2Entity` instance.

#### `User(data?: object)`

Create a new `User` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UserEntity` instance.

#### `Workflow(data?: object)`

Create a new `Workflow` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowEntity` instance.

#### `WorkflowRun(data?: object)`

Create a new `WorkflowRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WorkflowRunEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `IncidentIoSDK.test()`.

**Returns:** `IncidentIoSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## ActionEntity

```ts
const action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this action is assigned to |
| `completed_at` | `string` | No | When the action was completed |
| `created_at` | `string` | Yes | When the action was created |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No | Description of the action |
| `external_issue_reference` | `Object` | No |  |
| `follow_up` | `boolean` | Yes | Whether an action is marked as follow-up |
| `id` | `string` | Yes | Unique identifier for the action |
| `incident_id` | `string` | Yes | Unique identifier of the incident the action belongs to |
| `status` | `string` | Yes | Status of the action |
| `updated_at` | `string` | Yes | When the action was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignee` | - | - | - | - | - |
| `assignee_id` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `description` | Yes | Yes | Yes | Yes | - |
| `external_issue_reference` | - | - | - | - | - |
| `follow_up` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Action().create({
  assignee: {},
  created_at: 'example_created_at',
  creator: {},
  follow_up: true,
  id: 'example_id',
  incident_id: 'example_incident_id',
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Action().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Action().load({ id: 'action_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Action().remove({ id: 'action_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Action().update({
  id: 'action_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertEntity

```ts
const alert = client.Alert()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Alert().create({
  id: 'example_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Alert().list({ page_size: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Alert().load({ id: 'alert_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertAttributeEntity

```ts
const alert_attribute = client.AlertAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `array` | `boolean` | Yes | Whether this attribute is an array |
| `emoji` | `string` | No | The emoji to display alongside this attribute in chat messages, stored without colons |
| `id` | `string` | Yes | The ID of this attribute |
| `name` | `string` | Yes | Unique name of this attribute |
| `required` | `boolean` | Yes | Whether this attribute is required. |
| `type` | `string` | Yes | Engine resource name for this attribute |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `array` | - | - | - | - | - |
| `emoji` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | Yes | - |
| `type` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertAttribute().create({
  array: true,
  id: 'example_id',
  name: 'example_name',
  required: true,
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertAttribute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AlertAttribute().load({ id: 'alert_attribute_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AlertAttribute().remove({ id: 'alert_attribute_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AlertAttribute().update({
  id: 'alert_attribute_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertNoteEntity

```ts
const alert_note = client.AlertNote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_id` | `string` | No | ID of the alert group this note is attached to. |
| `alert_id` | `string` | No | ID of the alert this note is attached to. |
| `content` | `string` | Yes | Markdown body of the note |
| `created_at` | `string` | Yes | When this note was first created |
| `creator` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the alert note |
| `images` | `Array` | Yes | Images attached to the current version of the note, with signed URLs valid for 10 minutes |
| `last_edited_at` | `string` | No | When this note was last edited, only set if it has been edited at least once since creation |
| `updated_at` | `string` | Yes | When this note was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertNote().create({
  content: 'example_content',
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  images: [],
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertNote().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AlertNote().load({ id: 'alert_note_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AlertNote().remove({ id: 'alert_note_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AlertNote().update({
  id: 'alert_note_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertNoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertRouteEntity

```ts
const alert_route = client.AlertRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_sources` | `Array` | Yes | Which alert sources should this alert route match? |
| `channel_config` | `Array` | Yes | The channel configuration for this alert route |
| `condition_groups` | `Array` | Yes | What condition groups must be true for this alert route to fire? |
| `created_at` | `string` | No | The time of creation of this alert route |
| `enabled` | `boolean` | Yes | Whether this alert route is enabled or not |
| `escalation_config` | `Object` | Yes |  |
| `expressions` | `Array` | Yes | The expressions used in this template |
| `grouping_config` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this alert route config |
| `incident_config` | `Object` | Yes |  |
| `incident_template` | `Object` | Yes |  |
| `is_private` | `boolean` | Yes | Whether this alert route is private. |
| `message_config` | `Object` | Yes |  |
| `message_template` | `Object` | No |  |
| `name` | `string` | Yes | The name of this alert route config, for the user's reference |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert route |
| `updated_at` | `string` | No | The time of last update of this alert route |
| `version` | `number` | Yes | The version of this alert route config |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertRoute().create({
  alert_sources: [],
  channel_config: [],
  condition_groups: [],
  enabled: true,
  escalation_config: {},
  expressions: [],
  grouping_config: {},
  id: 'example_id',
  incident_config: {},
  incident_template: {},
  is_private: true,
  message_config: {},
  name: 'example_name',
  version: 1,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertRoute().list({ page_size: 1 })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AlertRoute().load({ id: 'alert_route_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AlertRoute().remove({ id: 'alert_route_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AlertRoute().update({
  id: 'alert_route_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertSourceEntity

```ts
const alert_source = client.AlertSource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_events_url` | `string` | No | URL that can be used to send alert events to this source. |
| `auto_resolve_incident_alerts` | `boolean` | No | Whether alerts from this source keep counting down to auto-resolve while attached to an incident. |
| `auto_resolve_timeout_minutes` | `number` | No | When set, alerts from this source will automatically resolve after this many minutes. |
| `azure_devops_options` | `Object` | Yes |  |
| `disabled` | `boolean` | No | For heartbeat sources, set to true to disable monitoring |
| `email_options` | `Object` | Yes |  |
| `filter_condition_groups` | `Array` | No | Conditions an incoming event must match to be ingested from this source, evaluated against the event's payload and this source's expressions. |
| `fixed_team_id` | `string` | No | When set, the team every alert from this source is attributed to. |
| `heartbeat_options` | `Object` | Yes |  |
| `http_custom_options` | `Object` | Yes |  |
| `id` | `string` | Yes | The ID of this alert source |
| `jira_options` | `Object` | Yes |  |
| `name` | `string` | Yes | Unique name of the alert source |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert source |
| `rate_limit_sharding` | `Object` | Yes | Controls how this source's ingest rate limit is split into buckets. |
| `secret_token` | `string` | No | Secret token used to authenticate this source, if applicable. |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertSource().create({
  azure_devops_options: {},
  email_options: {},
  heartbeat_options: {},
  http_custom_options: {},
  id: 'example_id',
  jira_options: {},
  name: 'example_name',
  rate_limit_sharding: {},
  source_type: 'example_source_type',
  template: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertSource().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AlertSource().load({ id: 'alert_source_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AlertSource().remove({ id: 'alert_source_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AlertSource().update({
  id: 'alert_source_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertSourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertSourcesV2Entity

```ts
const alert_sources_v2 = client.AlertSourcesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `owning_team_ids` | `Array` | No | IDs of teams that own this alert source |
| `source_type` | `string` | Yes | Type of alert source |
| `template` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertSourcesV2().create({
  source_type: 'example_source_type',
  template: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertSourcesV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertTagEntity

```ts
const alert_tag = client.AlertTag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the tag |
| `name` | `string` | Yes | The tag name |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertTag().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertTagEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertsAddTagsResultV2Entity

```ts
const alerts_add_tags_result_v2 = client.AlertsAddTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertsAddTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertsAddTagsResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertsRemoveTagsResultV2Entity

```ts
const alerts_remove_tags_result_v2 = client.AlertsRemoveTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertsRemoveTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertsRemoveTagsResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertsSetTagsResultV2Entity

```ts
const alerts_set_tags_result_v2 = client.AlertsSetTagsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_group_ids` | `Array` | No | The IDs of every alert group this alert belongs to. |
| `alert_source_id` | `string` | Yes | The ID of the alert source this alert fired on |
| `attributes` | `Array` | Yes | Attribute values parsed from the alerts payload |
| `created_at` | `string` | Yes | When this entry was created |
| `deduplication_key` | `string` | Yes | A deduplication key which uniquely references this alert from your alert source. |
| `description` | `string` | No | The description of the alert |
| `id` | `string` | Yes | The ID of this alert |
| `resolved_at` | `string` | No | When this alert was resolved |
| `source_url` | `string` | No | If applicable, a link to the alert in the upstream system |
| `status` | `string` | Yes | Statuses of an alert |
| `tags` | `Array` | No | Tags someone has applied to this alert |
| `title` | `string` | Yes | The title of the alert, parsed from the alert payload according to the alert source configuration |
| `updated_at` | `string` | Yes | When this alert was last updated |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `alert_group_ids` | - |
| `alert_source_id` | - |
| `attributes` | - |
| `created_at` | - |
| `deduplication_key` | - |
| `description` | - |
| `id` | - |
| `resolved_at` | - |
| `source_url` | - |
| `status` | - |
| `tags` | Yes |
| `title` | - |
| `updated_at` | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertsSetTagsResultV2().create({
  alert_id: 'example_alert_id',
  alert_source_id: 'example_alert_source_id',
  attributes: [],
  created_at: 'example_created_at',
  deduplication_key: 'example_deduplication_key',
  id: 'example_id',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertsSetTagsResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AlertsTransitionIncidentAlertResultV2Entity

```ts
const alerts_transition_incident_alert_result_v2 = client.AlertsTransitionIncidentAlertResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert` | `Object` | Yes |  |
| `alert_id` | `string` | Yes | Alert to attach to the incident |
| `alert_route_id` | `string` | No | The ID of the alert route that created this incident alert |
| `id` | `string` | Yes | The ID of this alert |
| `incident` | `Object` | Yes | Incident slim is a subset of the full incident object, listing key fields. |
| `incident_id` | `string` | Yes | Incident to attach the alert to |
| `re_relate` | `boolean` | No | Relate the alert again even though someone previously marked it unrelated to this incident. |
| `state` | `string` | Yes | What state to move the connection to |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AlertsTransitionIncidentAlertResultV2().create({
  alert: {},
  alert_id: 'example_alert_id',
  id: 'example_id',
  incident: {},
  incident_id: 'example_incident_id',
  state: 'example_state',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AlertsTransitionIncidentAlertResultV2().list({ page_size: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AlertsTransitionIncidentAlertResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnnouncementRuleEntity

```ts
const announcement_rule = client.AnnouncementRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition_groups` | `Array` | Yes | Incidents are announced when they match any of these condition groups |
| `conditions_no_longer_apply_behaviour` | `string` | Yes | Whether to remove announcement posts when the incident no longer matches this rule's conditions |
| `created_at` | `string` | Yes | When the rule was created |
| `id` | `string` | Yes | Unique identifier for this announcement rule |
| `microsoft_teams_channel_ids` | `Array` | Yes | Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams |
| `mode` | `string` | Yes | Which incidents are announced: live incidents only, or triage incidents too |
| `name` | `string` | Yes | Human readable name for the rule |
| `owning_team_ids` | `Array` | Yes | IDs of the teams that own this rule |
| `private_incident_scope` | `string` | No | Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none |
| `slack_channel_ids` | `Array` | Yes | IDs of the Slack channels to post announcements into, when the organisation uses Slack |
| `template_id` | `string` | No | ID of the announcement template used to render this rule's posts |
| `update_sharing_mode` | `string` | Yes | Where incident updates are shared once the incident is announced |
| `updated_at` | `string` | Yes | When the rule was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `condition_groups` | - | - | - | - | - |
| `conditions_no_longer_apply_behaviour` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `microsoft_teams_channel_ids` | - | - | Yes | Yes | - |
| `mode` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | - | Yes | Yes | - |
| `private_incident_scope` | - | - | - | - | - |
| `slack_channel_ids` | - | - | Yes | Yes | - |
| `template_id` | - | - | - | - | - |
| `update_sharing_mode` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AnnouncementRule().create({
  condition_groups: [],
  conditions_no_longer_apply_behaviour: 'example_conditions_no_longer_apply_behaviour',
  created_at: 'example_created_at',
  id: 'example_id',
  microsoft_teams_channel_ids: [],
  mode: 'example_mode',
  name: 'example_name',
  owning_team_ids: [],
  slack_channel_ids: [],
  update_sharing_mode: 'example_update_sharing_mode',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AnnouncementRule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AnnouncementRule().load({ id: 'announcement_rule_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AnnouncementRule().remove({ id: 'announcement_rule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AnnouncementRule().update({
  id: 'announcement_rule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnouncementRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AnnouncementTemplateEntity

```ts
const announcement_template = client.AnnouncementTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actions` | `Array` | Yes | Actions shown on the announcement post, in rank order |
| `fields` | `Array` | Yes | Fields shown on the announcement post, in rank order |
| `id` | `string` | Yes | Unique identifier for this announcement template |
| `is_default` | `boolean` | Yes | Whether this is the organisation's default template, used by rules that don't choose one |
| `name` | `string` | Yes | Name of this announcement template |
| `owning_team_ids` | `Array` | Yes | IDs of the teams that own this template |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `actions` | - | - | Yes | - | - |
| `fields` | - | - | Yes | - | - |
| `id` | - | - | - | - | - |
| `is_default` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | - | Yes | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AnnouncementTemplate().create({
  actions: [],
  fields: [],
  id: 'example_id',
  is_default: true,
  name: 'example_name',
  owning_team_ids: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AnnouncementTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AnnouncementTemplate().load({ id: 'announcement_template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AnnouncementTemplate().remove({ id: 'announcement_template_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AnnouncementTemplate().update({
  id: 'announcement_template_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AnnouncementTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `comments` | `string` | No | Freeform notes about this API key |
| `created_at` | `string` | Yes | When the API key was created |
| `creator` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique identifier for this API key |
| `last_used_at` | `string` | No | When the key was last used to authenticate a request |
| `name` | `string` | Yes | The name of the API key, for the user's reference |
| `role_names` | `Array` | Yes | Account-level roles to assign to the API key. |
| `roles` | `Array` | Yes | The account-level roles assigned to this API key |
| `team_ids` | `Array` | Yes | IDs of teams that this API key is scoped to |
| `team_role_names` | `Array` | Yes | Roles to grant for the teams specified in `team_ids`. |
| `team_roles` | `Array` | Yes | The team-level roles assigned to this API key |
| `token_last_issued_at` | `string` | Yes | When the current token for this API was last issued. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ApiKey().create({
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  name: 'example_name',
  role_names: [],
  roles: [],
  team_ids: [],
  team_role_names: [],
  team_roles: [],
  token_last_issued_at: 'example_token_last_issued_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ApiKey().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ApiKey().load({ id: 'api_key_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.ApiKey().remove({ id: 'api_key_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ApiKey().update({
  id: 'api_key_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRouteEntity

```ts
const call_route = client.CallRoute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowed_callers` | `Array` | Yes | The numbers allowed to call this route. |
| `country_code` | `string` | No | The country this route's number belongs to |
| `created_at` | `string` | Yes |  |
| `current_state` | `string` | Yes | Where this route is in provisioning. |
| `custom_language` | `string` | Yes | The language we speak voice prompts in, via text-to-speech |
| `id` | `string` | Yes | Unique identifier for this call route |
| `name` | `string` | Yes | Name for this call route |
| `options` | `Array` | Yes | The phone-tree menu this route presents. |
| `path` | `Array` | Yes | Who we page when a call comes in. |
| `phone_number` | `string` | No | The number your customers call to reach this route, once one has been provisioned |
| `phone_number_type` | `string` | No | The type of phone number, which determines the regulatory requirements for provisioning it |
| `responder_caller_id` | `string` | Yes | Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number |
| `updated_at` | `string` | Yes |  |
| `use_caller_allowlist` | `boolean` | Yes | Whether this route only answers calls from its allowed callers |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CallRoute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CallRoute().load({ id: 'call_route_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CallRoute().update({
  id: 'call_route_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRouteEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesCreateAllowedCallerResultV2Entity

```ts
const call_routes_create_allowed_caller_result_v2 = client.CallRoutesCreateAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number to allow, in international format |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CallRoutesCreateAllowedCallerResultV2().create({
  call_route_id: 'example_call_route_id',
  phone_number: 'example_phone_number',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesCreateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesCreateOptionResultV2Entity

```ts
const call_routes_create_option_result_v2 = client.CallRoutesCreateOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `path` | `Array` | Yes | Who to page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CallRoutesCreateOptionResultV2().create({
  call_route_id: 'example_call_route_id',
  digit: 'example_digit',
  path: [],
  prompt: 'example_prompt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesCreateOptionResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesListAllowedCallersResultV2Entity

```ts
const call_routes_list_allowed_callers_result_v2 = client.CallRoutesListAllowedCallersResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CallRoutesListAllowedCallersResultV2().list({ call_route_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesListAllowedCallersResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesListOptionsResultV2Entity

```ts
const call_routes_list_options_result_v2 = client.CallRoutesListOptionsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `Array` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CallRoutesListOptionsResultV2().list({ call_route_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesListOptionsResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesShowAllowedCallerResultV2Entity

```ts
const call_routes_show_allowed_caller_result_v2 = client.CallRoutesShowAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CallRoutesShowAllowedCallerResultV2().load({ id: 'call_routes_show_allowed_caller_result_v2_id', call_route_id: 'call_route_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesShowAllowedCallerResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesShowOptionResultV2Entity

```ts
const call_routes_show_option_result_v2 = client.CallRoutesShowOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `Array` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CallRoutesShowOptionResultV2().load({ id: 'call_routes_show_option_result_v2_id', call_route_id: 'call_route_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesShowOptionResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesUpdateAllowedCallerResultV2Entity

```ts
const call_routes_update_allowed_caller_result_v2 = client.CallRoutesUpdateAllowedCallerResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for this allowed caller |
| `name` | `string` | No | Label for whose number this is |
| `phone_number` | `string` | Yes | The number allowed to call this route, in international format |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CallRoutesUpdateAllowedCallerResultV2().update({
  call_route_id: 'call_route_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesUpdateAllowedCallerResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesUpdateOptionResultV2Entity

```ts
const call_routes_update_option_result_v2 = client.CallRoutesUpdateOptionResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `digit` | `string` | Yes | The keypad digit a caller presses to choose this option |
| `id` | `string` | Yes | Unique identifier for this option |
| `path` | `Array` | Yes | Who we page when a caller chooses this option |
| `prompt` | `string` | Yes | What we read out to offer this option, via text-to-speech in the route's language, exactly as written |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CallRoutesUpdateOptionResultV2().update({
  call_route_id: 'call_route_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesUpdateOptionResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallRoutesV2Entity

```ts
const call_routes_v2 = client.CallRoutesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.CallRoutesV2().remove({ id: 'call_routes_v2_id', call_route_id: 'call_route_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallRoutesV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallSessionEntity

```ts
const call_session = client.CallSession()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ended_at` | `string` | No | When the call session ended. |
| `id` | `string` | Yes | Unique identifier for this call session |
| `incident_id` | `string` | Yes | The incident this call session belongs to |
| `started_at` | `string` | Yes | When the call session started |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CallSession().list({ incident_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallSessionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CallTranscriptEntryEntity

```ts
const call_transcript_entry = client.CallTranscriptEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `string` | Yes | What was said |
| `id` | `string` | Yes | Unique identifier for this transcript entry |
| `medium` | `string` | Yes | Whether this entry was spoken aloud or sent as an in-call chat message |
| `participant_name` | `string` | Yes | Name of the participant who spoke or sent the message, as reported by the call provider |
| `timestamp` | `string` | Yes | When the participant started speaking |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CallTranscriptEntry().list({ call_session_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CallTranscriptEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogEntryEntity

```ts
const catalog_entry = client.CatalogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aliases` | `Array` | No | Optional aliases that can be used to reference this entry |
| `archived_at` | `string` | No | When this entry was archived |
| `attribute_values` | `Object` | Yes | Values of this entry |
| `catalog_entry` | `Object` | Yes |  |
| `catalog_type` | `Object` | Yes |  |
| `catalog_type_id` | `string` | Yes | ID of this catalog type |
| `created_at` | `string` | Yes | When this entry was created |
| `external_id` | `string` | No | An optional alternative ID for this entry, which is ensured to be unique for the type |
| `id` | `string` | Yes | ID of this catalog entry |
| `name` | `string` | Yes | Name is the human readable name of this entry |
| `rank` | `number` | No | When catalog type is ranked, this is used to help order things |
| `update_attributes` | `Array` | No | If provided, only update these attribute_values keys. |
| `updated_at` | `string` | Yes | When this entry was last updated |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `aliases` | - | Yes | - | - |
| `archived_at` | - | - | - | - |
| `attribute_values` | - | - | - | - |
| `catalog_entry` | - | - | - | - |
| `catalog_type` | - | - | - | - |
| `catalog_type_id` | - | - | - | - |
| `created_at` | - | - | - | - |
| `external_id` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | Yes | - | - |
| `update_attributes` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CatalogEntry().create({
  attribute_values: {},
  catalog_entry: {},
  catalog_type: {},
  catalog_type_id: 'example_catalog_type_id',
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CatalogEntry().list({ catalog_type_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CatalogEntry().load({ id: 'catalog_entry_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CatalogEntry().update({
  id: 'catalog_entry_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogResourceEntity

```ts
const catalog_resource = client.CatalogResource()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | Which category of resource |
| `description` | `string` | Yes | Human readable description for this resource |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `label` | `string` | Yes | Label for this catalog resource type |
| `type` | `string` | Yes | Catalog type name for this resource, as used when setting the type of a catalog type attribute |
| `value_docstring` | `string` | Yes | Documentation for the literal string value of this resource |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CatalogResource().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogResourceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogTypeEntity

```ts
const catalog_type = client.CatalogType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Object` | Yes | Annotations that can track metadata about this type |
| `categories` | `Array` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | No | If populated, the integrations required for this type |
| `schema` | `Object` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotations` | - | - | Yes | Yes |
| `categories` | - | - | Yes | Yes |
| `color` | - | - | Yes | Yes |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `dynamic_resource_parameter` | - | - | - | - |
| `engine_resource_type` | - | - | - | - |
| `estimated_count` | - | - | - | - |
| `icon` | - | - | Yes | Yes |
| `id` | - | - | - | - |
| `is_editable` | - | - | - | - |
| `is_team_type` | - | - | - | - |
| `last_synced_at` | - | - | - | - |
| `name` | - | - | - | - |
| `owning_team_ids` | - | - | - | - |
| `ranked` | - | - | Yes | Yes |
| `registry_type` | - | - | - | - |
| `required_integrations` | - | - | - | - |
| `schema` | - | - | - | - |
| `semantic_type` | - | - | - | - |
| `source_repo_url` | - | - | - | - |
| `type_name` | - | - | Yes | - |
| `updated_at` | - | - | - | - |
| `use_name_as_identifier` | - | - | Yes | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CatalogType().create({
  annotations: {},
  categories: [],
  color: 'example_color',
  created_at: 'example_created_at',
  description: 'example_description',
  engine_resource_type: 'example_engine_resource_type',
  icon: 'example_icon',
  id: 'example_id',
  is_editable: true,
  name: 'example_name',
  ranked: true,
  schema: {},
  semantic_type: 'example_semantic_type',
  type_name: 'example_type_name',
  updated_at: 'example_updated_at',
  use_name_as_identifier: true,
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CatalogType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CatalogType().load({ id: 'catalog_type_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CatalogType().update({
  id: 'catalog_type_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CatalogTypeSchemaEntity

```ts
const catalog_type_schema = client.CatalogTypeSchema()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Object` | Yes | Annotations that can track metadata about this type |
| `attributes` | `Array` | Yes |  |
| `categories` | `Array` | Yes | What categories is this type considered part of |
| `color` | `string` | Yes | Sets the display color of this type in the dashboard |
| `created_at` | `string` | Yes | When this type was created |
| `description` | `string` | Yes | Human readble description of this type |
| `dynamic_resource_parameter` | `string` | No | If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally. |
| `engine_resource_type` | `string` | Yes | The way this resource type is referenced in the engine, as used when setting the type of an alert attribute |
| `estimated_count` | `number` | No | If populated, gives an estimated count of entries for this type |
| `icon` | `string` | Yes | Sets the display icon of this type in the dashboard |
| `id` | `string` | Yes | ID of this catalog type |
| `is_editable` | `boolean` | Yes | Catalog types that are synced with external resources can't be edited |
| `is_team_type` | `boolean` | No | Whether this catalog type is the designated team type in team settings |
| `last_synced_at` | `string` | No | When this type was last synced (if it's ever been sync'd) |
| `name` | `string` | Yes | Name is the human readable name of this type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this catalog type |
| `ranked` | `boolean` | Yes | If this type should be ranked |
| `registry_type` | `string` | No | The registry resource this type is synced from, if any |
| `required_integrations` | `Array` | No | If populated, the integrations required for this type |
| `schema` | `Object` | Yes |  |
| `semantic_type` | `string` | Yes | This type has been deprecated, and will always be empty. |
| `source_repo_url` | `string` | No | The url of the external repository where this type is managed |
| `type_name` | `string` | Yes | The type name of this catalog type, to be used when defining attributes. |
| `updated_at` | `string` | Yes | When this type was last updated |
| `use_name_as_identifier` | `boolean` | Yes | If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases. |
| `version` | `number` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CatalogTypeSchema().create({
  catalog_type_id: 'example_catalog_type_id',
  annotations: {},
  attributes: [],
  categories: [],
  color: 'example_color',
  created_at: 'example_created_at',
  description: 'example_description',
  engine_resource_type: 'example_engine_resource_type',
  icon: 'example_icon',
  id: 'example_id',
  is_editable: true,
  name: 'example_name',
  ranked: true,
  schema: {},
  semantic_type: 'example_semantic_type',
  type_name: 'example_type_name',
  updated_at: 'example_updated_at',
  use_name_as_identifier: true,
  version: 1,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CatalogTypeSchemaEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldEntity

```ts
const custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_type_id` | `string` | No | For catalog fields, the ID of the associated catalog type |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the custom field |
| `field_type` | `string` | Yes | Type of custom field |
| `filter_by` | `Object` | Yes |  |
| `fixed_filter` | `Object` | Yes |  |
| `group_by_catalog_attribute_id` | `string` | No | For catalog fields, the ID of the attribute used to group catalog entries (if applicable) |
| `helptext_catalog_attribute_id` | `string` | No | Which catalog attribute provides helptext for the options |
| `id` | `string` | Yes | Unique identifier for the custom field |
| `name` | `string` | Yes | Human readable name for the custom field |
| `options` | `Array` | Yes | What options are available for this custom field, if this field has options |
| `required` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `required_v2` | `string` | No | When this custom field must be set during the incident lifecycle. |
| `show_before_closure` | `boolean` | Yes | Whether a custom field should be shown in the incident resolve modal. |
| `show_before_creation` | `boolean` | Yes | Whether a custom field should be shown in the incident creation modal. |
| `show_before_update` | `boolean` | Yes | Whether a custom field should be shown in the incident update modal. |
| `show_in_announcement_post` | `boolean` | No | Whether a custom field should be shown in the list of fields as part of the announcement post when set. |
| `updated_at` | `string` | Yes | When the action was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CustomField().create({
  created_at: 'example_created_at',
  description: 'example_description',
  field_type: 'example_field_type',
  filter_by: {},
  fixed_filter: {},
  id: 'example_id',
  name: 'example_name',
  options: [],
  show_before_closure: true,
  show_before_creation: true,
  show_before_update: true,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CustomField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CustomField().load({ id: 'custom_field_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.CustomField().remove({ id: 'custom_field_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CustomField().update({
  id: 'custom_field_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldOptionEntity

```ts
const custom_field_option = client.CustomFieldOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `custom_field_id` | `string` | Yes | ID of the custom field this option belongs to |
| `id` | `string` | Yes | Unique identifier for the custom field option |
| `sort_key` | `number` | Yes | Sort key used to order the custom field options correctly |
| `value` | `string` | Yes | Human readable name for the custom field option. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `custom_field_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `sort_key` | - | - | Yes | - | - |
| `value` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CustomFieldOption().create({
  custom_field_id: 'example_custom_field_id',
  id: 'example_id',
  sort_key: 1,
  value: 'example_value',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.CustomFieldOption().list({ custom_field_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.CustomFieldOption().load({ id: 'custom_field_option_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.CustomFieldOption().remove({ id: 'custom_field_option_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.CustomFieldOption().update({
  id: 'custom_field_option_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EscalationEntity

```ts
const escalation = client.Escalation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this escalation was created |
| `creator` | `Object` | Yes | The creator of this escalation. |
| `description` | `string` | Yes | Additional detail provided with this escalation. |
| `escalation_path_id` | `string` | No | Unique identifier of the escalation path that the escalation was created from |
| `events` | `Array` | Yes | Events which describe the history of this escalation. |
| `id` | `string` | Yes | Unique ID of the escalation |
| `idempotency_key` | `string` | Yes | Unique key to prevent duplicate escalations. |
| `incident_id` | `string` | No | ID of an incident to associate with this escalation. |
| `priority` | `Object` | Yes | The priority associated with this escalation. |
| `related_alerts` | `Array` | Yes | Alerts related to this escalation |
| `related_incidents` | `Array` | Yes | Incidents related to this escalation |
| `status` | `string` | Yes | Status of the escalation |
| `title` | `string` | Yes | The title of this escalation |
| `updated_at` | `string` | Yes | When this escalation was last updated |
| `user_ids` | `Array` | No | IDs of users to escalate directly to |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `description` | - | - | Yes |
| `escalation_path_id` | - | - | - |
| `events` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_id` | - | - | - |
| `priority` | - | - | - |
| `related_alerts` | - | - | - |
| `related_incidents` | - | - | - |
| `status` | - | - | - |
| `title` | - | - | - |
| `updated_at` | - | - | - |
| `user_ids` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Escalation().create({
  created_at: 'example_created_at',
  creator: {},
  description: 'example_description',
  events: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  priority: {},
  related_alerts: [],
  related_incidents: [],
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Escalation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Escalation().load({ id: 'escalation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EscalationEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EscalationPathTemplateEntity

```ts
const escalation_path_template = client.EscalationPathTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of what this template is for. |
| `expressions` | `Array` | Yes | Expressions backing the template's binding targets. |
| `has_historical_escalation_path_versions` | `boolean` | Yes | Whether a previous escalation path version uses this template. |
| `id` | `string` | Yes | Unique identifier for this template. |
| `name` | `string` | Yes | The name of this template. |
| `params` | `Array` | Yes | The parameters declared by this template. |
| `path` | `Array` | Yes | The nodes that form the levels and branches of this template. |
| `repeat_config` | `Object` | Yes |  |
| `working_hours` | `Array` | No | The working hours for this template. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `description` | - | - | - | - | - |
| `expressions` | - | - | Yes | Yes | - |
| `has_historical_escalation_path_versions` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `params` | - | - | Yes | Yes | - |
| `path` | - | - | - | - | - |
| `repeat_config` | - | - | - | - | - |
| `working_hours` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EscalationPathTemplate().create({
  expressions: [],
  has_historical_escalation_path_versions: true,
  id: 'example_id',
  name: 'example_name',
  params: [],
  path: [],
  repeat_config: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EscalationPathTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EscalationPathTemplate().load({ id: 'escalation_path_template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.EscalationPathTemplate().remove({ id: 'escalation_path_template_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.EscalationPathTemplate().update({
  id: 'escalation_path_template_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EscalationPathTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EscalationsCheckEscalationPermissionsResultV2Entity

```ts
const escalations_check_escalation_permissions_result_v2 = client.EscalationsCheckEscalationPermissionsResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `response_options` | `Array` | Yes | The response options available to each requested user, in the same order as the request. |
| `user_ids` | `Array` | Yes | The IDs of the users to check response options for |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EscalationsCheckEscalationPermissionsResultV2().create({
  escalation_id: 'example_escalation_id',
  response_options: [],
  user_ids: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EscalationsCheckEscalationPermissionsResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EscalationsReassignEscalationResultV2Entity

```ts
const escalations_reassign_escalation_result_v2 = client.EscalationsReassignEscalationResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Additional details about the new escalation. |
| `escalation_path_id` | `string` | No | ID of the escalation path to reassign to |
| `resolve_original` | `boolean` | No | Whether to resolve the original escalation, stopping it paging its targets. |
| `title` | `string` | No | The title of the new escalation. |
| `user_ids` | `Array` | No | IDs of users to reassign directly to |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EscalationsReassignEscalationResultV2().create({
  escalation_id: 'example_escalation_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EscalationsReassignEscalationResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowUpEntity

```ts
const follow_up = client.FollowUp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes |  |
| `assignee_id` | `string` | No | ID of the user this follow-up is assigned to |
| `assignee_team` | `Object` | Yes |  |
| `assignee_team_id` | `string` | No | ID of the team this follow-up is assigned to |
| `category` | `Object` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `Object` | Yes |  |
| `external_issue_reference_id` | `string` | No | If this follow-up is related to an external issue, the ID of that issue |
| `follow_up_category_id` | `string` | No | ID of the category for this follow-up |
| `follow_up_priority_option_id` | `string` | No | ID of the priority for this follow-up |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Yes | Labels associated with this follow-up |
| `priority` | `Object` | Yes |  |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `assignee` | - | - | - | - | - |
| `assignee_id` | - | - | - | - | - |
| `assignee_team` | - | - | - | - | - |
| `assignee_team_id` | - | - | - | - | - |
| `category` | - | - | - | - | - |
| `completed_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `creator` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `external_issue_reference` | - | - | - | - | - |
| `external_issue_reference_id` | - | - | - | - | - |
| `follow_up_category_id` | - | - | - | - | - |
| `follow_up_priority_option_id` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `labels` | - | - | Yes | Yes | - |
| `priority` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `title` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FollowUp().create({
  assignee: {},
  assignee_team: {},
  category: {},
  created_at: 'example_created_at',
  creator: {},
  external_issue_reference: {},
  id: 'example_id',
  incident_id: 'example_incident_id',
  labels: [],
  priority: {},
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.FollowUp().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.FollowUp().load({ id: 'follow_up_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.FollowUp().remove({ id: 'follow_up_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.FollowUp().update({
  id: 'follow_up_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowUpEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowUpsConnectExternalIssueResultV3Entity

```ts
const follow_ups_connect_external_issue_result_v3 = client.FollowUpsConnectExternalIssueResultV3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignee` | `Object` | Yes |  |
| `assignee_team` | `Object` | Yes |  |
| `category` | `Object` | Yes |  |
| `completed_at` | `string` | No | When the follow-up was completed |
| `created_at` | `string` | Yes | When the follow-up was created |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No | Description of the follow-up |
| `external_issue_reference` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique identifier for the follow-up |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `labels` | `Array` | Yes | Labels associated with this follow-up |
| `priority` | `Object` | Yes |  |
| `provider` | `string` | Yes | The issue tracker provider the issue belongs to |
| `status` | `string` | Yes | Status of the follow-up |
| `title` | `string` | Yes | Title of the follow-up |
| `updated_at` | `string` | Yes | When the follow-up was last updated |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FollowUpsConnectExternalIssueResultV3().create({
  follow_up_id: 'example_follow_up_id',
  assignee: {},
  assignee_team: {},
  category: {},
  created_at: 'example_created_at',
  creator: {},
  external_issue_reference: {},
  id: 'example_id',
  incident_id: 'example_incident_id',
  labels: [],
  priority: {},
  provider: 'example_provider',
  status: 'example_status',
  title: 'example_title',
  updated_at: 'example_updated_at',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowUpsConnectExternalIssueResultV3Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## FollowUpsCreateFromLinkResultV3Entity

```ts
const follow_ups_create_from_link_result_v3 = client.FollowUpsCreateFromLinkResultV3()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Unique identifier of the incident the follow-up belongs to |
| `url` | `string` | Yes | URL of the issue in the external provider |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.FollowUpsCreateFromLinkResultV3().create({
  incident_id: 'example_incident_id',
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `FollowUpsCreateFromLinkResultV3Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdentityEntity

```ts
const identity = client.Identity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dashboard_url` | `string` | Yes | The dashboard URL for this organisation |
| `name` | `string` | Yes | The name assigned to the current API Key |
| `roles` | `Array` | Yes | Which roles have been enabled for this key |
| `team_roles` | `Array` | Yes | If set, these roles apply to requests that operate on resources owned by any of the teams in the 'teams' array. |
| `teams` | `Array` | Yes | Teams that this API key is scoped to. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Identity().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdentityEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentEntity

```ts
const incident = client.Incident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call_url` | `string` | No | The call URL attached to this incident |
| `created_at` | `string` | Yes | When the incident was created |
| `creator` | `Object` | Yes |  |
| `custom_field_entries` | `Array` | Yes | Custom field entries for this incident |
| `debriefs` | `Array` | No | Debriefs scheduled for this incident, ordered by start time. |
| `duration_metrics` | `Array` | No | Incident duration metrics and their measurements for this incident |
| `external_issue_reference` | `Object` | Yes |  |
| `has_debrief` | `boolean` | No | If this incident has a debrief attached |
| `id` | `string` | Yes | Unique identifier for the incident |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident create requests |
| `incident_role_assignments` | `Array` | Yes | A list of who is assigned to each role for this incident |
| `incident_status` | `Object` | Yes |  |
| `incident_status_id` | `string` | No | Incident status to assign to the incident |
| `incident_timestamp_values` | `Array` | No | Incident lifecycle events and when they occurred |
| `incident_type` | `Object` | Yes |  |
| `incident_type_id` | `string` | No | Incident type to create this incident as |
| `last_activity_at` | `string` | Yes | When the incident last recorded 'activity' |
| `mode` | `string` | Yes | Whether the incident is real, a test, a tutorial, or importing as a retrospective incident |
| `ms_teams_channel_url` | `string` | No | URL to link to the Microsoft Teams channel |
| `name` | `string` | Yes | Explanation of the incident |
| `permalink` | `string` | No | A permanent link to the homepage for this incident |
| `postmortem_document_ids` | `Array` | No | An array of IDs of postmortem documents for this incident |
| `postmortem_document_url` | `string` | No | The URL of the incident post-mortem document |
| `reference` | `string` | Yes | Reference to this incident, as displayed across the product |
| `retrospective_incident_options` | `Object` | No |  |
| `severity` | `Object` | Yes |  |
| `severity_id` | `string` | No | Severity to create incident as |
| `slack_channel_id` | `string` | Yes | ID of the Slack channel in the organisation Slack workspace. |
| `slack_channel_name` | `string` | No | Name of the slack channel |
| `slack_channel_name_override` | `string` | No | Name of the Slack channel to create for this incident |
| `slack_channel_url` | `string` | No | URL to link to the slack channel |
| `slack_team_id` | `string` | Yes | ID of the Slack team / workspace. |
| `source_message_channel_id` | `string` | No | Channel ID of the source message, if this incident was created from one |
| `source_message_timestamp` | `string` | No | Timestamp of the source message, if this incident was created from one |
| `status` | `string` | Yes | Current status of the incident |
| `summary` | `string` | No | Detailed description of the incident |
| `team_ids` | `Array` | Yes | IDs of the teams that own this incident, resolved from your team settings. |
| `timestamps` | `Array` | No | Incident lifecycle events and when they last occurred |
| `updated_at` | `string` | Yes | When the incident was last updated |
| `visibility` | `string` | Yes | Whether the incident should be open to anyone in your Slack workspace (public), or invite-only (private). |
| `workload_minutes_late` | `number` | No | Amount of time spent on the incident in late hours |
| `workload_minutes_sleeping` | `number` | No | Amount of time spent on the incident in sleeping hours |
| `workload_minutes_total` | `number` | No | Amount of time spent on the incident in total |
| `workload_minutes_working` | `number` | No | Amount of time spent on the incident in working hours |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `call_url` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `custom_field_entries` | - | - | Yes |
| `debriefs` | - | - | - |
| `duration_metrics` | - | - | - |
| `external_issue_reference` | - | - | - |
| `has_debrief` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_role_assignments` | - | - | Yes |
| `incident_status` | - | - | - |
| `incident_status_id` | - | - | - |
| `incident_timestamp_values` | - | - | - |
| `incident_type` | - | - | - |
| `incident_type_id` | - | - | - |
| `last_activity_at` | - | - | - |
| `mode` | - | - | Yes |
| `ms_teams_channel_url` | - | - | - |
| `name` | - | - | Yes |
| `permalink` | - | - | - |
| `postmortem_document_ids` | - | - | - |
| `postmortem_document_url` | - | - | - |
| `reference` | - | - | - |
| `retrospective_incident_options` | - | - | - |
| `severity` | - | - | - |
| `severity_id` | - | - | - |
| `slack_channel_id` | - | - | - |
| `slack_channel_name` | - | - | - |
| `slack_channel_name_override` | - | - | - |
| `slack_channel_url` | - | - | - |
| `slack_team_id` | - | - | Yes |
| `source_message_channel_id` | - | - | - |
| `source_message_timestamp` | - | - | - |
| `status` | - | - | Yes |
| `summary` | - | - | - |
| `team_ids` | - | - | - |
| `timestamps` | - | - | - |
| `updated_at` | - | - | - |
| `visibility` | - | - | - |
| `workload_minutes_late` | - | - | - |
| `workload_minutes_sleeping` | - | - | - |
| `workload_minutes_total` | - | - | - |
| `workload_minutes_working` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Incident().create({
  created_at: 'example_created_at',
  creator: {},
  custom_field_entries: [],
  external_issue_reference: {},
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_role_assignments: [],
  incident_status: {},
  incident_type: {},
  last_activity_at: 'example_last_activity_at',
  mode: 'example_mode',
  name: 'example_name',
  reference: 'example_reference',
  severity: {},
  slack_channel_id: 'example_slack_channel_id',
  slack_team_id: 'example_slack_team_id',
  status: 'example_status',
  team_ids: [],
  updated_at: 'example_updated_at',
  visibility: 'example_visibility',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Incident().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Incident().load({ id: 'incident_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentActivityLogEntryEntity

```ts
const incident_activity_log_entry = client.IncidentActivityLogEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Object` | No | Details of an activity log entry. |
| `created_at` | `string` | Yes | When we recorded the activity |
| `id` | `string` | Yes | Unique identifier of the activity log entry |
| `incident_id` | `string` | Yes | ID of the incident this happened on. |
| `occurred_at` | `string` | Yes | When the activity happened. |
| `title` | `string` | Yes | Human-readable summary of what happened |
| `type` | `string` | Yes | What kind of activity this is. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentActivityLogEntry().list({ incident_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentActivityLogEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentAttachmentEntity

```ts
const incident_attachment = client.IncidentAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident membership |
| `incident_id` | `string` | Yes | ID of the incident to add an attachment to |
| `resource` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentAttachment().create({
  id: 'example_id',
  incident_id: 'example_incident_id',
  resource: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentAttachment().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.IncidentAttachment().remove({ id: 'incident_attachment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentFormEntity

```ts
const incident_form = client.IncidentForm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident form was created |
| `expressions` | `Array` | Yes | Expressions available to every element's conditions and defaults. |
| `form_type` | `string` | Yes | Which form this is. |
| `id` | `string` | Yes | Unique identifier for this incident form |
| `incident_type_id` | `string` | No | The incident type this form belongs to. |
| `lifecycle_elements` | `Array` | No | Elements on this form, in display order. |
| `updated_at` | `string` | Yes | When this incident form was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentForm().create({
  created_at: 'example_created_at',
  expressions: [],
  form_type: 'example_form_type',
  id: 'example_id',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentForm().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentForm().load({ id: 'incident_form_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.IncidentForm().remove({ id: 'incident_form_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IncidentForm().update({
  id: 'incident_form_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentFormEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentMembershipEntity

```ts
const incident_membership = client.IncidentMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | The incident to make the user a member of |
| `user_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentMembership().create({
  incident_id: 'example_incident_id',
  user_id: 'example_user_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentParticipantEntity

```ts
const incident_participant = client.IncidentParticipant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Array` | Yes | Participants who are actively helping with the incident |
| `passive` | `Array` | Yes | Participants who are just observing the incident |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentParticipant().load({ incident_id: 'incident_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentParticipantEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentParticipantWorkloadEntity

```ts
const incident_participant_workload = client.IncidentParticipantWorkload()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `archived_at` | `string` | No | When the user left the incident, if they are no longer an active participant |
| `participant_type` | `string` | No | The role they had in the incident |
| `user` | `Object` | Yes |  |
| `workload` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentParticipantWorkload().list({ incident_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentParticipantWorkloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentRelationshipEntity

```ts
const incident_relationship = client.IncidentRelationship()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of this incident relationship |
| `incident` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentRelationship().list({ incident_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentRelationshipEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentRoleEntity

```ts
const incident_role = client.IncidentRole()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the role was created |
| `description` | `string` | Yes | Describes the purpose of the role |
| `id` | `string` | Yes | Unique identifier for the role |
| `instructions` | `string` | Yes | Provided to whoever is nominated for the role. |
| `name` | `string` | Yes | Human readable name of the incident role |
| `required` | `boolean` | No | DEPRECATED: this will always be false. |
| `role_type` | `string` | Yes | Type of incident role |
| `shortform` | `string` | Yes | Short human readable name for Slack. |
| `updated_at` | `string` | Yes | When the role was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `instructions` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `required` | - | - | Yes | - | - |
| `role_type` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentRole().create({
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  instructions: 'example_instructions',
  name: 'example_name',
  role_type: 'example_role_type',
  shortform: 'example_shortform',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentRole().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentRole().load({ id: 'incident_role_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.IncidentRole().remove({ id: 'incident_role_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IncidentRole().update({
  id: 'incident_role_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentRoleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentStatusEntity

```ts
const incident_status = client.IncidentStatus()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | Yes | What category of status it is. |
| `created_at` | `string` | Yes |  |
| `description` | `string` | Yes | Rich text description of the incident status |
| `id` | `string` | Yes | Unique ID of this incident status |
| `name` | `string` | Yes | Unique name of this status |
| `rank` | `number` | Yes | Order of this incident status |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `category` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `rank` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentStatus().create({
  category: 'example_category',
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentStatus().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentStatus().load({ id: 'incident_status_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.IncidentStatus().remove({ id: 'incident_status_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IncidentStatus().update({
  id: 'incident_status_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentStatusEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTeamMembershipEntity

```ts
const incident_team_membership = client.IncidentTeamMembership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes |  |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentTeamMembership().create({
  incident_id: 'example_incident_id',
  team_id: 'example_team_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTeamMembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTeamMembershipsV1Entity

```ts
const incident_team_memberships_v1 = client.IncidentTeamMembershipsV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incident_id` | `string` | Yes | Revoke team access to this incident |
| `team_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentTeamMembershipsV1().create({
  incident_id: 'example_incident_id',
  team_id: 'example_team_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTeamMembershipsV1Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTemplateEntity

```ts
const incident_template = client.IncidentTemplate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this incident template was created |
| `expressions` | `Array` | No | The expressions used by bindings in this template |
| `id` | `string` | Yes | Unique identifier for this incident template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `Object` | Yes | The values an incident template applies to the incidents it creates. |
| `updated_at` | `string` | Yes | When this incident template was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentTemplate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  template: {},
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentTemplate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentTemplate().load({ id: 'incident_template_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.IncidentTemplate().remove({ id: 'incident_template_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IncidentTemplate().update({
  id: 'incident_template_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTemplatesValidateResultV1Entity

```ts
const incident_templates_validate_result_v1 = client.IncidentTemplatesValidateResultV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expressions` | `Array` | No | The expressions used by bindings in this template |
| `name` | `string` | Yes | The name of this incident template, for the user's reference |
| `template` | `Object` | Yes | The values an incident template applies to the incidents it creates. |
| `warnings` | `Array` | Yes | Anything suspect about this config that isn't severe enough to reject it. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentTemplatesValidateResultV1().create({
  name: 'example_name',
  template: {},
  warnings: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTemplatesValidateResultV1Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTimelineItemEntity

```ts
const incident_timeline_item = client.IncidentTimelineItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activity_log_id` | `string` | No | ID of the activity log entry this item was promoted from. |
| `created_at` | `string` | Yes | When this item was added to the timeline |
| `creator` | `Object` | Yes |  |
| `description` | `string` | No | Description of the timeline item, in markdown |
| `id` | `string` | Yes | Unique identifier of the timeline item |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate timeline item requests. |
| `incident_id` | `string` | Yes | Incident to add this item to |
| `timestamp` | `string` | Yes | When the thing this item describes happened. |
| `title` | `string` | Yes | Title of the timeline item |
| `updated_at` | `string` | Yes | When this item was last edited |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `activity_log_id` | - | - | - |
| `created_at` | - | - | - |
| `creator` | - | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `idempotency_key` | - | - | - |
| `incident_id` | - | - | - |
| `timestamp` | - | - | Yes |
| `title` | - | - | Yes |
| `updated_at` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentTimelineItem().create({
  created_at: 'example_created_at',
  creator: {},
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_id: 'example_incident_id',
  timestamp: 'example_timestamp',
  title: 'example_title',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentTimelineItem().list({ incident_id: "example" })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IncidentTimelineItem().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTimelineItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTimestampEntity

```ts
const incident_timestamp = client.IncidentTimestamp()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique ID of this incident timestamp |
| `name` | `string` | Yes | Unique name of this timestamp |
| `rank` | `number` | Yes | Order in which this timestamp should be shown |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentTimestamp().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentTimestamp().load({ id: 'incident_timestamp_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTimestampEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentTypeEntity

```ts
const incident_type = client.IncidentType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_in_triage` | `string` | Yes | Whether incidents of this must always, or can optionally, be created in triage |
| `created_at` | `string` | Yes | When this resource was created |
| `description` | `string` | Yes | What is this incident type for? |
| `id` | `string` | Yes | Unique identifier for this Incident Type |
| `is_default` | `boolean` | Yes | The default Incident Type is used when no other type is explicitly specified |
| `name` | `string` | Yes | The name of this Incident Type |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this incident type |
| `private_incidents_only` | `boolean` | Yes | Should all incidents created with this Incident Type be private? |
| `updated_at` | `string` | Yes | When this resource was last updated |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IncidentType().load({ id: 'incident_type_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IncidentUpdateEntity

```ts
const incident_update = client.IncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the update was created |
| `id` | `string` | Yes | Unique identifier for this incident update |
| `idempotency_key` | `string` | Yes | Unique string used to de-duplicate incident update requests. |
| `incident_id` | `string` | Yes | The incident you want to update |
| `merged_into_incident_id` | `string` | No | The ID of the incident this incident was merged into, if the to state of this update is 'merged'. |
| `message` | `string` | No | Message that explains the context behind the update, in markdown |
| `new_incident_status` | `Object` | Yes |  |
| `new_severity` | `Object` | Yes |  |
| `to_incident_status_id` | `string` | No | Move the incident to this status |
| `to_severity_id` | `string` | No | Move the incident to this severity |
| `updater` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.IncidentUpdate().create({
  created_at: 'example_created_at',
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_id: 'example_incident_id',
  new_incident_status: {},
  new_severity: {},
  updater: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IncidentUpdate().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IncidentUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpAllowlistEntity

```ts
const ip_allowlist = client.IpAllowlist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowlist` | `Array` | Yes | A list of IP addresses or CIDR prefixes to allow |
| `enabled` | `boolean` | Yes | Whether this IP allowlist is enabled or not |
| `updated_at` | `string` | No | The time this allowlist was last updated |
| `version` | `number` | Yes | The version of this IP allowlist |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.IpAllowlist().load()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.IpAllowlist().update({
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpAllowlistEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IpRangeEntity

```ts
const ip_range = client.IpRange()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `string` | Yes | The address in CIDR notation. |
| `description` | `string` | Yes | Which of our traffic reaches you from this address |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.IpRange().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IpRangeEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MaintenanceWindowEntity

```ts
const maintenance_window = client.MaintenanceWindow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alert_condition_groups` | `Array` | Yes | Condition groups that determine which alerts this maintenance window applies to |
| `archived_at` | `string` | No | When this maintenance window was archived, if it has been |
| `created_at` | `string` | Yes | When this maintenance window was created |
| `end_at` | `string` | Yes | When the maintenance window ends |
| `escalation_targets` | `Array` | No | If set, alerts matching this window will be escalated to these targets |
| `id` | `string` | Yes | Unique identifier for this maintenance window |
| `incident_id` | `string` | No | If set, alerts matching this window will be automatically attached to this incident |
| `lead` | `Object` | Yes |  |
| `name` | `string` | Yes | Human readable name for the maintenance window |
| `notification_message` | `string` | No | Custom message included in notifications about this maintenance window |
| `notify_channels` | `Array` | No | Channels to notify about the maintenance window starting and ending |
| `notify_end_minutes_before` | `number` | No | Minutes before the end to send a notification to the configured channels |
| `notify_start_minutes_before` | `number` | No | Minutes before the start to send a notification to the configured channels |
| `owning_team_ids` | `Array` | No | IDs of teams that own this maintenance window. |
| `reroute_on_end` | `boolean` | Yes | Whether to retrigger firing alerts through alert routing when the window ends |
| `resolve_on_end` | `boolean` | Yes | Whether to automatically resolve all firing alerts that matched this window when it ends |
| `show_in_sidebar` | `boolean` | Yes | Whether to show this maintenance window in the dashboard sidebar when active |
| `start_at` | `string` | Yes | When the maintenance window starts |
| `updated_at` | `string` | Yes | When this maintenance window was last updated |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `alert_condition_groups` | - | - | - | - | - |
| `archived_at` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `end_at` | - | - | - | - | - |
| `escalation_targets` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `incident_id` | - | - | - | - | - |
| `lead` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `notification_message` | - | - | - | - | - |
| `notify_channels` | - | - | - | - | - |
| `notify_end_minutes_before` | - | - | - | - | - |
| `notify_start_minutes_before` | - | - | - | - | - |
| `owning_team_ids` | - | - | - | - | - |
| `reroute_on_end` | - | - | Yes | Yes | - |
| `resolve_on_end` | - | - | Yes | Yes | - |
| `show_in_sidebar` | - | - | - | - | - |
| `start_at` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.MaintenanceWindow().create({
  alert_condition_groups: [],
  created_at: 'example_created_at',
  end_at: 'example_end_at',
  id: 'example_id',
  lead: {},
  name: 'example_name',
  reroute_on_end: true,
  resolve_on_end: true,
  show_in_sidebar: true,
  start_at: 'example_start_at',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MaintenanceWindow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MaintenanceWindow().load({ id: 'maintenance_window_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.MaintenanceWindow().remove({ id: 'maintenance_window_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.MaintenanceWindow().update({
  id: 'maintenance_window_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MaintenanceWindowEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnCallNotificationMethodPublicV2Entity

```ts
const on_call_notification_method_public_v2 = client.OnCallNotificationMethodPublicV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | Yes | The address of this method (e.g. |
| `id` | `string` | Yes | Unique identifier for this notification method |
| `is_usable` | `boolean` | Yes | Whether this method is ready to receive notifications. |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone_details` | `Object` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.OnCallNotificationMethodPublicV2().list({ user_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnCallNotificationMethodPublicV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OnCallNotificationRulePublicV2Entity

```ts
const on_call_notification_rule_public_v2 = client.OnCallNotificationRulePublicV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `app` | `Object` | Yes |  |
| `delay_seconds` | `number` | No | Delay in seconds before this rule activates. |
| `id` | `string` | Yes | Unique identifier for this notification rule |
| `method_target` | `Object` | Yes |  |
| `method_type` | `string` | Yes | The high-level type of notification method. |
| `phone` | `Object` | Yes |  |
| `rule_type` | `string` | Yes | The urgency level this rule applies to |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.OnCallNotificationRulePublicV2().list({ user_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OnCallNotificationRulePublicV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigEntity

```ts
const pay_config = client.PayConfig()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_rate_cents` | `number` | Yes | Rate paid for any time no rule covers, in the lowest denomination of the currency |
| `created_at` | `string` | Yes |  |
| `currency` | `string` | Yes | Currency this config pays in, in ISO 4217 format |
| `id` | `string` | Yes | Unique identifier for this pay config |
| `name` | `string` | Yes | Human readable name for this pay config |
| `one_off_rules` | `Array` | Yes | Rules that apply over a single window of time, such as a public holiday |
| `published_at` | `string` | No | When a published report first priced against this config. |
| `rate_time_unit` | `string` | Yes | The unit of time every rate on this config is quoted per. |
| `timezone` | `string` | Yes | IANA timezone this config's rules are interpreted in |
| `updated_at` | `string` | Yes |  |
| `weekly_rules` | `Array` | Yes | Rules that apply every week, by day of week and time of day, in evaluation order |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `base_rate_cents` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `currency` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `one_off_rules` | - | - | Yes | - | - |
| `published_at` | - | - | - | - | - |
| `rate_time_unit` | - | - | - | - | - |
| `timezone` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `weekly_rules` | - | - | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayConfig().create({
  base_rate_cents: 1,
  created_at: 'example_created_at',
  currency: 'example_currency',
  id: 'example_id',
  name: 'example_name',
  one_off_rules: [],
  rate_time_unit: 'example_rate_time_unit',
  timezone: 'example_timezone',
  updated_at: 'example_updated_at',
  weekly_rules: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PayConfig().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PayConfig().load({ id: 'pay_config_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.PayConfig().remove({ id: 'pay_config_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PayConfig().update({
  id: 'pay_config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsCreateOneOffRuleResultV2Entity

```ts
const pay_configs_create_one_off_rule_result_v2 = client.PayConfigsCreateOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayConfigsCreateOneOffRuleResultV2().create({
  pay_config_id: 'example_pay_config_id',
  end_at: 'example_end_at',
  name: 'example_name',
  rate_cents: 1,
  start_at: 'example_start_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsCreateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsCreateWeeklyRuleResultV2Entity

```ts
const pay_configs_create_weekly_rule_result_v2 = client.PayConfigsCreateWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Yes | Days of the week this rule applies on |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayConfigsCreateWeeklyRuleResultV2().create({
  pay_config_id: 'example_pay_config_id',
  end_time: 'example_end_time',
  rate_cents: 1,
  start_time: 'example_start_time',
  weekdays: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsCreateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsListOneOffRulesResultV2Entity

```ts
const pay_configs_list_one_off_rules_result_v2 = client.PayConfigsListOneOffRulesResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PayConfigsListOneOffRulesResultV2().list({ pay_config_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsListOneOffRulesResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsListWeeklyRulesResultV2Entity

```ts
const pay_configs_list_weekly_rules_result_v2 = client.PayConfigsListWeeklyRulesResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Yes | Days of the week this rule applies on |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PayConfigsListWeeklyRulesResultV2().list({ pay_config_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsListWeeklyRulesResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsShowOneOffRuleResultV2Entity

```ts
const pay_configs_show_one_off_rule_result_v2 = client.PayConfigsShowOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PayConfigsShowOneOffRuleResultV2().load({ id: 'pay_configs_show_one_off_rule_result_v2_id', pay_config_id: 'pay_config_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsShowOneOffRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsShowWeeklyRuleResultV2Entity

```ts
const pay_configs_show_weekly_rule_result_v2 = client.PayConfigsShowWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Yes | Days of the week this rule applies on |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PayConfigsShowWeeklyRuleResultV2().load({ id: 'pay_configs_show_weekly_rule_result_v2_id', pay_config_id: 'pay_config_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsShowWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsUpdateOneOffRuleResultV2Entity

```ts
const pay_configs_update_one_off_rule_result_v2 = client.PayConfigsUpdateOneOffRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_at` | `string` | Yes | When this rule stops applying |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `name` | `string` | Yes | Human readable name for this rule |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_at` | `string` | Yes | When this rule starts applying |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PayConfigsUpdateOneOffRuleResultV2().update({
  id: 'id',
  pay_config_id: 'pay_config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsUpdateOneOffRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsUpdateWeeklyRuleResultV2Entity

```ts
const pay_configs_update_weekly_rule_result_v2 = client.PayConfigsUpdateWeeklyRuleResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `end_time` | `string` | Yes | Time of day this rule ends, in 24 hour format. |
| `id` | `string` | Yes | Unique identifier for this rule, stable across edits to the config |
| `rate_cents` | `number` | Yes | Rate paid while this rule applies, in the lowest denomination of the config's currency |
| `start_time` | `string` | Yes | Time of day this rule starts, in 24 hour format |
| `weekdays` | `Array` | Yes | Days of the week this rule applies on |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PayConfigsUpdateWeeklyRuleResultV2().update({
  id: 'id',
  pay_config_id: 'pay_config_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsUpdateWeeklyRuleResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayConfigsV2Entity

```ts
const pay_configs_v2 = client.PayConfigsV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.PayConfigsV2().remove({ id: 'pay_configs_v2_id', pay_config_id: 'pay_config_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayConfigsV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayReportEntity

```ts
const pay_report = client.PayReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `Object` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `pay_config_expression` | `Object` | Yes |  |
| `pay_config_id` | `string` | No | The pay config to price every shift with. |
| `published_at` | `string` | No | When this report was published. |
| `rotation_filters` | `Array` | No | Narrows some of these schedules to a subset of their rotations. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `creator` | - | - | - | - |
| `end_date` | - | - | - | - |
| `error_code` | - | - | - | - |
| `error_message` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `overlapping_shifts` | - | - | Yes | - |
| `pay_config_expression` | - | - | - | - |
| `pay_config_id` | - | - | - | - |
| `published_at` | - | - | - | - |
| `rotation_filters` | - | - | - | - |
| `schedule_ids` | - | - | - | - |
| `start_date` | - | - | - | - |
| `status` | - | - | - | - |
| `total_duration_seconds` | - | - | - | - |
| `total_pay_by_currency` | - | - | - | - |
| `unpaid_shifts` | - | - | Yes | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayReport().create({
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  pay_config_expression: {},
  schedule_ids: [],
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PayReport().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PayReport().load({ id: 'pay_report_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.PayReport().remove({ id: 'pay_report_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayReportsPublishResultV2Entity

```ts
const pay_reports_publish_result_v2 = client.PayReportsPublishResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cc_emails` | `Array` | Yes | Email addresses to send a copy of the report to |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `Object` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `send_user_breakdowns` | `string` | Yes | Whether each user in the report is emailed their own pay breakdown |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayReportsPublishResultV2().create({
  pay_report_id: 'example_pay_report_id',
  cc_emails: [],
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  schedule_ids: [],
  send_user_breakdowns: 'example_send_user_breakdowns',
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayReportsPublishResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayReportsUnpublishResultV2Entity

```ts
const pay_reports_unpublish_result_v2 = client.PayReportsUnpublishResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this report was created |
| `creator` | `Object` | No |  |
| `end_date` | `string` | Yes | Last date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `error_code` | `string` | No | Why a report could not be generated |
| `error_message` | `string` | No | What went wrong, written for whoever asked for the report. |
| `id` | `string` | Yes | Unique identifier for this pay report |
| `name` | `string` | Yes | Human readable name for this report |
| `overlapping_shifts` | `string` | Yes | How time spent on more than one schedule at once was paid |
| `published_at` | `string` | No | When this report was published. |
| `schedule_ids` | `Array` | Yes | The schedules this report covers |
| `start_date` | `string` | Yes | First date (YYYY-MM-DD) this report includes shifts from, inclusive |
| `status` | `string` | Yes | How far a report has got through being generated |
| `total_duration_seconds` | `number` | No | Total time spent on-call across every shift in this report, in seconds. |
| `total_pay_by_currency` | `Object` | No | Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency. |
| `unpaid_shifts` | `string` | Yes | Whether shifts that priced to zero are part of the report |
| `unpublish_reason` | `string` | Yes | Why this report is being unpublished |
| `updated_at` | `string` | Yes | When this report was last updated |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PayReportsUnpublishResultV2().create({
  pay_report_id: 'example_pay_report_id',
  created_at: 'example_created_at',
  end_date: 'example_end_date',
  id: 'example_id',
  name: 'example_name',
  overlapping_shifts: 'example_overlapping_shifts',
  schedule_ids: [],
  start_date: 'example_start_date',
  status: 'example_status',
  unpaid_shifts: 'example_unpaid_shifts',
  unpublish_reason: 'example_unpublish_reason',
  updated_at: 'example_updated_at',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayReportsUnpublishResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PayReportsV2Entity

```ts
const pay_reports_v2 = client.PayReportsV2()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PayReportsV2().load({ pay_report_id: 'pay_report_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PayReportsV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PoliciesV2Entity

```ts
const policies_v2 = client.PoliciesV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.PoliciesV2().remove({ id: 'policies_v2_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PoliciesV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyEntity

```ts
const policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `assignment_rules` | `Object` | Yes |  |
| `conditions` | `Array` | Yes | Conditions which determine which resources are in scope for this policy |
| `created_at` | `string` | Yes |  |
| `debrief` | `Object` | Yes | Set when policy_type is debrief. |
| `description` | `string` | No | Human readable description of the policy |
| `expressions` | `Array` | No | The expressions relating to this policy |
| `follow_up` | `Object` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the policy |
| `name` | `string` | Yes | Human readable name of the policy |
| `on_call_readiness` | `Object` | No | Set when policy_type is on_call_readiness. |
| `policy_type` | `string` | Yes | Type of the policy, specifying what this applies to |
| `post_mortem` | `Object` | Yes | Set when policy_type is post_mortem. |
| `schedule` | `Object` | Yes | Detects gaps in on-call coverage. |
| `status` | `string` | Yes | Disabled policies stop evaluating but keep their config |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `assignment_rules` | - | - | - | - |
| `conditions` | - | - | - | - |
| `created_at` | - | - | - | - |
| `debrief` | - | - | - | - |
| `description` | - | - | Yes | Yes |
| `expressions` | - | - | - | - |
| `follow_up` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `on_call_readiness` | - | - | - | - |
| `policy_type` | - | - | - | - |
| `post_mortem` | - | - | - | - |
| `schedule` | - | - | - | - |
| `status` | - | - | Yes | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Policy().create({
  assignment_rules: {},
  conditions: [],
  created_at: 'example_created_at',
  debrief: {},
  follow_up: {},
  id: 'example_id',
  name: 'example_name',
  policy_type: 'example_policy_type',
  post_mortem: {},
  schedule: {},
  status: 'example_status',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Policy().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Policy().load({ id: 'policy_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Policy().update({
  id: 'policy_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyFindingEntity

```ts
const policy_finding = client.PolicyFinding()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `Object` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Object` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `Object` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Object` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `Object` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PolicyFinding().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PolicyFinding().load({ id: 'policy_finding_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyFindingEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyFindingsDismissResultV2Entity

```ts
const policy_findings_dismiss_result_v2 = client.PolicyFindingsDismissResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `Object` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Object` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `Object` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Yes | Set when policy_type is post_mortem. |
| `reason` | `string` | Yes | Why this finding is being dismissed |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Object` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `Object` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PolicyFindingsDismissResultV2().create({
  policy_finding_id: 'example_policy_finding_id',
  created_at: 'example_created_at',
  debrief: {},
  dismissal: {},
  follow_up: {},
  id: 'example_id',
  last_checked_at: 'example_last_checked_at',
  on_call_readiness: {},
  policy_id: 'example_policy_id',
  policy_type: 'example_policy_type',
  post_mortem: {},
  reason: 'example_reason',
  responsible_users: [],
  schedule: {},
  shift_conflict: {},
  state: 'example_state',
  updated_at: 'example_updated_at',
  vacation_conflict: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyFindingsDismissResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyFindingsRestoreResultV2Entity

```ts
const policy_findings_restore_result_v2 = client.PolicyFindingsRestoreResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `days` | `number` | No | Days outside the policy's due date |
| `debrief` | `Object` | Yes | Set when policy_type is debrief. |
| `dismissal` | `Object` | Yes |  |
| `due_at` | `string` | No | When this finding becomes overdue |
| `follow_up` | `Object` | Yes | Set when policy_type is follow_up. |
| `id` | `string` | Yes | Unique ID of the finding |
| `last_checked_at` | `string` | Yes | When this finding was last re-evaluated |
| `on_call_readiness` | `Object` | Yes | Set when policy_type is on_call_readiness. |
| `policy_id` | `string` | Yes | The policy this finding was raised against |
| `policy_type` | `string` | Yes | Type of the policy this finding was raised against |
| `post_mortem` | `Object` | Yes | Set when policy_type is post_mortem. |
| `responsible_users` | `Array` | Yes | Who is expected to resolve this finding |
| `schedule` | `Object` | Yes | Set when policy_type is schedule. |
| `shift_conflict` | `Object` | Yes | Set when policy_type is shift_conflict. |
| `state` | `string` | Yes | Where this finding is in its lifecycle |
| `updated_at` | `string` | Yes |  |
| `vacation_conflict` | `Object` | Yes | Set when policy_type is vacation_conflict. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PolicyFindingsRestoreResultV2().create({
  policy_finding_id: 'example_policy_finding_id',
  created_at: 'example_created_at',
  debrief: {},
  dismissal: {},
  follow_up: {},
  id: 'example_id',
  last_checked_at: 'example_last_checked_at',
  on_call_readiness: {},
  policy_id: 'example_policy_id',
  policy_type: 'example_policy_type',
  post_mortem: {},
  responsible_users: [],
  schedule: {},
  shift_conflict: {},
  state: 'example_state',
  updated_at: 'example_updated_at',
  vacation_conflict: {},
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyFindingsRestoreResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PostmortemDocumentEntity

```ts
const postmortem_document = client.PostmortemDocument()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Timestamp for when the document was created |
| `document_url` | `string` | Yes | A URL to view the post-mortem document in the incident.io dashboard |
| `editors` | `Array` | Yes | The list of users who have edited this post-mortem document |
| `exported_urls` | `Array` | Yes | URLs of any external locations this document has been exported to |
| `id` | `string` | Yes | Unique identifier for the post-mortem document |
| `incident_id` | `string` | Yes | The unique identifier of the incident that this post-mortem document belongs to |
| `status` | `string` | Yes | The current status of this post-mortem document |
| `title` | `string` | Yes | The display title of the post-mortem document |
| `type` | `string` | Yes | Whether this is a native incident.io post-mortem or one hosted in an external provider |
| `updated_at` | `string` | Yes | Timestamp for when the document was last updated |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PostmortemDocument().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PostmortemDocument().load({ id: 'postmortem_document_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.PostmortemDocument().update({
  id: 'postmortem_document_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostmortemDocumentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntity

```ts
const schedule = client.Schedule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Object` | Yes | Annotations that track metadata about this resource |
| `config` | `Object` | Yes |  |
| `created_at` | `string` | Yes |  |
| `current_shifts` | `Array` | No | Shifts that are ongoing for this schedule |
| `holidays_public_config` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique internal ID of the schedule |
| `name` | `string` | Yes | Human readable name synced from external provider |
| `next_shifts` | `Array` | No | The shifts after the next changeover. |
| `permalink` | `string` | Yes | A permanent link to this schedule in the incident.io dashboard |
| `team_ids` | `Array` | Yes | IDs of teams that own this schedule |
| `timezone` | `string` | Yes | Timezone of the schedule, as interpreted at the point of generating the report |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | Yes | Yes | - |
| `config` | - | - | Yes | Yes | - |
| `created_at` | - | - | - | - | - |
| `current_shifts` | - | - | - | - | - |
| `holidays_public_config` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | Yes | Yes | - |
| `next_shifts` | - | - | - | - | - |
| `permalink` | - | - | - | - | - |
| `team_ids` | - | - | Yes | Yes | - |
| `timezone` | - | - | Yes | Yes | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Schedule().create({
  annotations: {},
  config: {},
  created_at: 'example_created_at',
  holidays_public_config: {},
  id: 'example_id',
  name: 'example_name',
  permalink: 'example_permalink',
  team_ids: [],
  timezone: 'example_timezone',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Schedule().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Schedule().load({ id: 'schedule_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Schedule().remove({ id: 'schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Schedule().update({
  id: 'schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntriesListPayloadV2Entity

```ts
const schedule_entries_list_payload_v2 = client.ScheduleEntriesListPayloadV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `entry_window_end` | `string` | No | The end of the window to preview entries for. |
| `entry_window_start` | `string` | No | The start of the window to preview entries for. |
| `final` | `Array` | Yes | The effective schedule after overrides have been merged in |
| `overrides` | `Array` | Yes | Overrides that apply within the requested window |
| `schedule` | `Object` | Yes |  |
| `scheduled` | `Array` | Yes | Entries from the schedule's rotation rules, before overrides are applied |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScheduleEntriesListPayloadV2().create({
  schedule_id: 'example_schedule_id',
  final: [],
  overrides: [],
  schedule: {},
  scheduled: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntriesListPayloadV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleEntryEntity

```ts
const schedule_entry = client.ScheduleEntry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pagination_meta` | `Object` | Yes |  |
| `schedule_entries` | `Object` | Yes | The schedule entries for a window of time, grouped by where they come from. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScheduleEntry().load({ schedule_id: 'schedule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleEntryEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleReplicaEntity

```ts
const schedule_replica = client.ScheduleReplica()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this schedule replica was first created |
| `id` | `string` | Yes | Unique identifier of the schedule replica |
| `last_sync_error` | `string` | No | The most recent error encountered while syncing this replica to the external provider, if any. |
| `last_synced_at` | `string` | No | When the replica was last successfully synced to the external provider. |
| `mirror_window_days` | `number` | No | How many days ahead to mirror this schedule into the external provider. |
| `replica_fallback_user_id` | `string` | Yes | The ID of a user in the external provider that will be assigned whenever nobody is on-call in the incident.io schedule. |
| `replica_provider` | `string` | Yes | The external provider where this schedule is replicated to |
| `replica_provider_id` | `string` | Yes | The ID of the schedule in the external provider that this replica syncs to. |
| `schedule_id` | `string` | Yes | The ID of the incident.io schedule that this replica is syncing from |
| `sources` | `Array` | Yes | The specific rotation and layer combinations from the schedule that are being replicated. |
| `updated_at` | `string` | Yes | When this schedule replica was last updated |
| `user_statuses` | `Array` | Yes | The mapping status of each incident.io user in the schedule to their corresponding user in the external provider. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScheduleReplica().create({
  id: 'example_id',
  created_at: 'example_created_at',
  replica_fallback_user_id: 'example_replica_fallback_user_id',
  replica_provider: 'example_replica_provider',
  replica_provider_id: 'example_replica_provider_id',
  schedule_id: 'example_schedule_id',
  sources: [],
  updated_at: 'example_updated_at',
  user_statuses: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ScheduleReplica().list({ id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScheduleReplica().load({ id: 'schedule_replica_id', schedule_id: 'schedule_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleReplicaEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleSyncRuleEntity

```ts
const schedule_sync_rule = client.ScheduleSyncRule()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Object` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync rule |
| `permanent_member_user_ids` | `Array` | Yes | IDs of users always kept in the Slack user group, regardless of who is on call. |
| `rotation_id` | `string` | No | If set, only members of this rotation sync to the user group. |
| `schedule_id` | `string` | Yes | The schedule this rule belongs to |
| `schedule_sync_target` | `Object` | Yes | A sync target is the link between incident.io and a single Slack user group, used to keep that group's membership in step with who is currently on call. |
| `schedule_sync_target_id` | `string` | Yes | The sync target ID this rule links to |
| `sync_type` | `string` | Yes | Which schedule members sync to the user group |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `annotations` | - | - | - | - |
| `created_at` | - | - | - | - |
| `id` | - | - | - | - |
| `permanent_member_user_ids` | - | - | Yes | Yes |
| `rotation_id` | - | - | - | - |
| `schedule_id` | - | - | - | - |
| `schedule_sync_target` | - | - | - | - |
| `schedule_sync_target_id` | - | - | - | - |
| `sync_type` | - | - | - | - |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScheduleSyncRule().create({
  id: 'example_id',
  created_at: 'example_created_at',
  permanent_member_user_ids: [],
  schedule_id: 'example_schedule_id',
  schedule_sync_target: {},
  schedule_sync_target_id: 'example_schedule_sync_target_id',
  sync_type: 'example_sync_type',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ScheduleSyncRule().list({ id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScheduleSyncRule().load({ id: 'schedule_sync_rule_id', schedule_id: 'schedule_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ScheduleSyncRule().update({
  id: 'schedule_sync_rule_id',
  schedule_id: 'schedule_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleSyncRuleEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ScheduleSyncTargetEntity

```ts
const schedule_sync_target = client.ScheduleSyncTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `add_bot_to_group` | `boolean` | Yes | Whether the incident.io bot should be added to the group as a member. |
| `annotations` | `Object` | No | Annotations that track metadata about this resource |
| `created_at` | `string` | Yes |  |
| `id` | `string` | Yes | Unique identifier of the sync target |
| `linked_schedules` | `Array` | Yes | Schedules with an active sync rule pointing at this target |
| `new_slack_user_group` | `Object` | Yes |  |
| `slack_team_id` | `string` | Yes | Slack team (workspace) ID the user group lives in. |
| `slack_user_group_id` | `string` | Yes | Slack ID of the user group whose membership is kept in sync. |
| `updated_at` | `string` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `add_bot_to_group` | - | - | - | - | - |
| `annotations` | - | - | - | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `linked_schedules` | - | - | - | - | - |
| `new_slack_user_group` | - | - | - | - | - |
| `slack_team_id` | - | - | - | - | - |
| `slack_user_group_id` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ScheduleSyncTarget().create({
  add_bot_to_group: true,
  created_at: 'example_created_at',
  id: 'example_id',
  linked_schedules: [],
  new_slack_user_group: {},
  slack_team_id: 'example_slack_team_id',
  slack_user_group_id: 'example_slack_user_group_id',
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ScheduleSyncTarget().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ScheduleSyncTarget().load({ id: 'schedule_sync_target_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.ScheduleSyncTarget().remove({ id: 'schedule_sync_target_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.ScheduleSyncTarget().update({
  id: 'schedule_sync_target_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ScheduleSyncTargetEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SchedulesShowOverrideResultV2Entity

```ts
const schedules_show_override_result_v2 = client.SchedulesShowOverrideResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes | End of the override |
| `id` | `string` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `string` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | Yes | The schedule that this override applies to |
| `start_at` | `string` | Yes | Start of the override |
| `updated_at` | `string` | Yes |  |
| `user` | `Object` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.SchedulesShowOverrideResultV2().create({
  created_at: 'example_created_at',
  end_at: 'example_end_at',
  id: 'example_id',
  layer_id: 'example_layer_id',
  rotation_id: 'example_rotation_id',
  schedule_id: 'example_schedule_id',
  start_at: 'example_start_at',
  updated_at: 'example_updated_at',
  user: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SchedulesShowOverrideResultV2().list({ schedule_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SchedulesShowOverrideResultV2().load({ id: 'schedules_show_override_result_v2_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SchedulesShowOverrideResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SchedulesUpdateOverrideResultV2Entity

```ts
const schedules_update_override_result_v2 = client.SchedulesUpdateOverrideResultV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `end_at` | `string` | Yes | End of the override |
| `id` | `string` | Yes | Unique internal ID of the schedule override |
| `layer_id` | `string` | Yes | The layer on the rotation on the schedule that this override applies to |
| `rotation_id` | `string` | Yes | The rotation on the schedule that this override applies to |
| `schedule_id` | `string` | Yes | The schedule that this override applies to |
| `start_at` | `string` | Yes | Start of the override |
| `updated_at` | `string` | Yes |  |
| `user` | `Object` | Yes |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.SchedulesUpdateOverrideResultV2().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SchedulesUpdateOverrideResultV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SecretEntity

```ts
const secret = client.Secret()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `description` | `string` | No | Optional description of what this secret is for |
| `id` | `string` | Yes | Unique identifier for this secret |
| `last_four_chars` | `string` | No | The last four characters of the current value, for masked display. |
| `name` | `string` | Yes | Human-readable name, unique within the organisation amongst unarchived secrets |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this secret. |
| `secret` | `Object` | Yes | A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook. |
| `updated_at` | `string` | Yes |  |
| `value` | `string` | Yes | The secret's plaintext value. |
| `version` | `number` | Yes | The current version number, incremented on each rotation |
| `versions` | `Array` | Yes | The secret's versions, newest first |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - | - |
| `description` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `last_four_chars` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `owning_team_ids` | - | Yes | - | Yes | - |
| `secret` | - | - | - | - | - |
| `updated_at` | - | - | - | - | - |
| `value` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `versions` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Secret().create({
  created_at: 'example_created_at',
  id: 'example_id',
  name: 'example_name',
  secret: {},
  updated_at: 'example_updated_at',
  value: 'example_value',
  version: 1,
  versions: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Secret().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Secret().load({ id: 'secret_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Secret().remove({ id: 'secret_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Secret().update({
  id: 'secret_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SecretEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SeverityEntity

```ts
const severity = client.Severity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When the action was created |
| `description` | `string` | Yes | Description of the severity |
| `id` | `string` | Yes | Unique identifier of the severity |
| `name` | `string` | Yes | Human readable name of the severity |
| `rank` | `number` | Yes | Rank to help sort severities (lower numbers are less severe) |
| `updated_at` | `string` | Yes | When the action was last updated |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `created_at` | - | - | - | - |
| `description` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | - |
| `rank` | - | - | Yes | Yes |
| `updated_at` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Severity().create({
  created_at: 'example_created_at',
  description: 'example_description',
  id: 'example_id',
  name: 'example_name',
  rank: 1,
  updated_at: 'example_updated_at',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Severity().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Severity().load({ id: 'severity_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Severity().update({
  id: 'severity_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SeverityEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageEntity

```ts
const status_page = client.StatusPage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description of this status page |
| `id` | `string` | Yes | Unique ID of this status page |
| `name` | `string` | Yes | The title of this status page |
| `public_url` | `string` | No | The public URL of this status page |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatusPage().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPage().load({ id: 'status_page_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageComponentEntity

```ts
const status_page_component = client.StatusPageComponent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | Optional short description of this component |
| `id` | `string` | Yes | Unique identifier for this component |
| `management_meta` | `Object` | Yes |  |
| `name` | `string` | Yes | Human-readable name for the component |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatusPageComponent().create({
  id: 'example_id',
  management_meta: {},
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatusPageComponent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPageComponent().load({ id: 'status_page_component_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.StatusPageComponent().remove({ id: 'status_page_component_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.StatusPageComponent().update({
  id: 'status_page_component_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageComponentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageComponentAvailabilityV2Entity

```ts
const status_page_component_availability_v2 = client.StatusPageComponentAvailabilityV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `availability_percent` | `string` | No | Availability over the window as a percentage, floored (for example "99.94"). |
| `component_id` | `string` | Yes | ID of the component. |
| `data_available_since` | `string` | Yes | Earliest time we have status data for this component. |
| `end_at` | `string` | Yes | End of the requested availability window |
| `start_at` | `string` | Yes | Start of the requested availability window |
| `status_page_id` | `string` | Yes | ID of the status page |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPageComponentAvailabilityV2().load({ component_id: 'component_id', status_page_id: 'status_page_id', end_at: 'end_at', start_at: 'start_at' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageComponentAvailabilityV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageIncidentEntity

```ts
const status_page_incident = client.StatusPageIncident()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_impacts` | `Array` | Yes | A list of time periods that this status page incident had an impact on a component |
| `component_statuses` | `Array` | No | An array of mappings from component ID to current component status |
| `id` | `string` | Yes | A unique ID for this status page incident |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `incident_status` | `string` | Yes | Current status for this incident |
| `message` | `string` | Yes | Markdown initial update on this status page incident |
| `name` | `string` | Yes | A title for the incident |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page incident. |
| `published_at` | `string` | Yes | When this status page incident was published to the status page |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `Array` | Yes | A list of updates posted to this status page incident |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatusPageIncident().create({
  component_impacts: [],
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  incident_status: 'example_incident_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscribers: true,
  published_at: 'example_published_at',
  status_page_id: 'example_status_page_id',
  updates: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatusPageIncident().list({ status_page_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPageIncident().load({ id: 'status_page_incident_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.StatusPageIncident().update({
  id: 'status_page_incident_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageIncidentEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageIncidentUpdateEntity

```ts
const status_page_incident_update = client.StatusPageIncidentUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `Array` | No | An array of mappings from component ID to component status. |
| `incident_status` | `string` | No | Optional new status for this status page incident. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page incident |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this incident update. |
| `status_page_incident_id` | `string` | Yes | ID of the status page incident |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatusPageIncidentUpdate().create({
  message: 'example_message',
  notify_subscribers: true,
  status_page_incident_id: 'example_status_page_incident_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageIncidentUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageLinkedResponseIncidentV1Entity

```ts
const status_page_linked_response_incident_v1 = client.StatusPageLinkedResponseIncidentV1()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | ID of the Response incident |
| `linked_at` | `string` | Yes | When the Response incident was linked to the status page incident |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatusPageLinkedResponseIncidentV1().list({ incident_id: "example", status_page_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageLinkedResponseIncidentV1Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageMaintenanceEntity

```ts
const status_page_maintenance = client.StatusPageMaintenance()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affected_component_ids` | `Array` | Yes | An array of IDs of component affected by the maintenance window |
| `automate_maintenance_status` | `boolean` | Yes | Whether updates are published automatically, moving this maintenance window to in progress at its start time and to complete at its end time |
| `component_maintenance_periods` | `Array` | Yes | A list of time periods where components were under maintenance during this status page maintenance window |
| `end_at` | `string` | Yes | The time the maintenance window ends |
| `id` | `string` | Yes | A unique ID for this status page maintenance window |
| `idempotency_key` | `string` | Yes | A unique key to de-duplicate requests. |
| `maintenance_status` | `string` | Yes | Current status for this maintenance window |
| `message` | `string` | Yes | Markdown initial update on this status page maintenance window |
| `name` | `string` | Yes | A title for the maintenance window |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page maintenance. |
| `published_at` | `string` | Yes | When this status page maintenance window was published to the status page |
| `start_at` | `string` | Yes | The time the maintenance window starts |
| `status_page_id` | `string` | Yes | The ID of the corresponding status page |
| `updates` | `Array` | Yes | A list of updates posted to this status page maintenance window |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `affected_component_ids` | - | - | - | - |
| `automate_maintenance_status` | - | - | Yes | - |
| `component_maintenance_periods` | - | - | - | - |
| `end_at` | - | - | - | - |
| `id` | - | - | - | - |
| `idempotency_key` | - | - | - | - |
| `maintenance_status` | - | - | - | - |
| `message` | - | - | - | - |
| `name` | - | - | - | - |
| `notify_subscribers` | - | - | - | - |
| `published_at` | - | - | - | - |
| `start_at` | - | - | - | - |
| `status_page_id` | - | - | - | - |
| `updates` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatusPageMaintenance().create({
  affected_component_ids: [],
  automate_maintenance_status: true,
  component_maintenance_periods: [],
  end_at: 'example_end_at',
  id: 'example_id',
  idempotency_key: 'example_idempotency_key',
  maintenance_status: 'example_maintenance_status',
  message: 'example_message',
  name: 'example_name',
  notify_subscribers: true,
  published_at: 'example_published_at',
  start_at: 'example_start_at',
  status_page_id: 'example_status_page_id',
  updates: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.StatusPageMaintenance().list({ status_page_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPageMaintenance().load({ id: 'status_page_maintenance_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.StatusPageMaintenance().update({
  id: 'status_page_maintenance_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageMaintenanceEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageMaintenanceUpdateEntity

```ts
const status_page_maintenance_update = client.StatusPageMaintenanceUpdate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `component_statuses` | `Array` | No | An array of mappings from component ID to component status. |
| `maintenance_status` | `string` | No | Optional new status for this status page maintenance window. |
| `message` | `string` | Yes | Markdown update on what's changed about this status page maintenance window |
| `notify_subscribers` | `boolean` | Yes | Whether to notify subscribers about this status page maintenance update. |
| `status_page_maintenance_id` | `string` | Yes | ID of the status page maintenance window |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.StatusPageMaintenanceUpdate().create({
  message: 'example_message',
  notify_subscribers: true,
  status_page_maintenance_id: 'example_status_page_maintenance_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageMaintenanceUpdateEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPageStructureEntity

```ts
const status_page_structure = client.StatusPageStructure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_structure` | `Object` | Yes |  |
| `display_uptime_mode` | `string` | Yes | How the page shows uptime against its components |
| `id` | `string` | No |  |
| `management_meta` | `Object` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.StatusPageStructure().load({ id: 'status_page_structure_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPageStructureEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatusPagesV2Entity

```ts
const status_pages_v2 = client.StatusPagesV2()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.StatusPagesV2().remove({ status_page_maintenance_id: 'status_page_maintenance_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatusPagesV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TeamEntity

```ts
const team = client.Team()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `catalog_entry` | `Object` | Yes |  |
| `id` | `string` | Yes | Unique ID of the team |
| `members` | `Array` | Yes | Members of the team |
| `name` | `string` | Yes | Name of the team |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Team().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Team().load({ id: 'team_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TeamEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TelemetryDataSourceV2Entity

```ts
const telemetry_data_source_v2 = client.TelemetryDataSourceV2()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | When this data source was created |
| `datadog_config` | `Object` | No | Datadog-specific credential updates |
| `enabled` | `boolean` | Yes | Whether this data source is enabled |
| `grafana_config` | `Object` | No | Grafana-specific credential and endpoint updates |
| `id` | `string` | Yes | Unique identifier for this data source |
| `name` | `string` | Yes | Human-readable name of the data source |
| `provider` | `string` | Yes | Provider that hosts this data source |
| `source_type` | `string` | Yes | Type of data source (e.g., prometheus, loki, tempo) |
| `updated_at` | `string` | Yes | When this data source was last updated |
| `version` | `string` | No | Upstream tool version captured at probe time (e.g. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `created_at` | - |
| `datadog_config` | - |
| `enabled` | - |
| `grafana_config` | - |
| `id` | - |
| `name` | Yes |
| `provider` | - |
| `source_type` | - |
| `updated_at` | - |
| `version` | - |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.TelemetryDataSourceV2().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TelemetryDataSourceV2Entity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UserEntity

```ts
const user = client.User()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_role` | `Object` | Yes |  |
| `custom_roles` | `Array` | Yes |  |
| `email` | `string` | No | Email address of the user. |
| `id` | `string` | Yes | Unique identifier of the user |
| `is_active` | `boolean` | Yes | Whether the user is active. |
| `name` | `string` | Yes | Name of the user |
| `role` | `string` | Yes | DEPRECATED: Role of the user as of March 9th 2023, this value is no longer updated. |
| `seats` | `Object` | Yes |  |
| `slack_user_id` | `string` | No | Slack ID of the user |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.User().create({
  id: 'example_id',
  base_role: {},
  custom_roles: [],
  is_active: true,
  name: 'example_name',
  role: 'example_role',
  seats: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.User().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.User().load({ id: 'user_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UserEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowEntity

```ts
const workflow = client.Workflow()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `annotations` | `Object` | No | Annotations that track metadata about this resource |
| `auto_run_mode` | `string` | No | Whether the workflow runs immediately, or asks for confirmation in the incident channel first. |
| `condition_groups` | `Array` | Yes | Conditions that apply to the workflow trigger |
| `continue_on_step_error` | `boolean` | Yes | Whether to continue executing the workflow if a step fails |
| `delay` | `Object` | Yes |  |
| `expressions` | `Array` | Yes | The expressions to use in the workflow |
| `folder` | `string` | No | Folder to display the workflow in |
| `form_fields` | `Array` | No | User-configured form fields available in the workflow scope. |
| `id` | `string` | Yes | Unique identifier for the workflow |
| `include_private_escalations` | `boolean` | No | Whether to include private escalations |
| `include_private_incidents` | `boolean` | No | DEPRECATED: use `private_incident_scope` instead. |
| `management_meta` | `Object` | Yes |  |
| `name` | `string` | Yes | Name provided by the user when creating the workflow |
| `once_for` | `Array` | Yes | This workflow will run 'once for' a list of references |
| `owning_team_ids` | `Array` | No | IDs of the teams that own this workflow |
| `private_incident_scope` | `string` | No | Which private incidents this workflow acts on: every private incident (all), those an owning team can see (owning_teams), or none |
| `runs_from` | `string` | No | The time from which this workflow will run on incidents |
| `runs_on_incident_modes` | `Array` | Yes | Which incident modes should this workflow run on? |
| `runs_on_incidents` | `string` | Yes | Which incidents should the workflow be applied to? |
| `shortform` | `string` | No | The shortform used to trigger this workflow (only applicable for manual triggers) |
| `skip_step_upgrades` | `boolean` | No | Skips workflow step upgrades, when the parameters for an existing workflow step change |
| `state` | `string` | No | What state this workflow is in |
| `steps` | `Array` | Yes | Steps that are executed as part of the workflow |
| `trigger` | `string` | Yes | Trigger to set on the workflow |
| `version` | `number` | Yes | Revision of the workflow, uniquely identifying it's version |
| `workflow` | `Object` | Yes |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `annotations` | - | - | - | - | - |
| `auto_run_mode` | - | Yes | - | - | - |
| `condition_groups` | - | - | - | - | - |
| `continue_on_step_error` | - | - | - | - | - |
| `delay` | - | - | - | - | - |
| `expressions` | - | - | - | - | - |
| `folder` | - | - | - | - | - |
| `form_fields` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `include_private_escalations` | - | Yes | - | - | - |
| `include_private_incidents` | - | Yes | - | - | - |
| `management_meta` | - | - | - | - | - |
| `name` | - | - | - | - | - |
| `once_for` | - | - | - | - | - |
| `owning_team_ids` | - | - | - | - | - |
| `private_incident_scope` | - | Yes | - | - | - |
| `runs_from` | - | - | - | - | - |
| `runs_on_incident_modes` | - | - | - | - | - |
| `runs_on_incidents` | - | - | - | - | - |
| `shortform` | - | - | - | - | - |
| `skip_step_upgrades` | - | - | - | - | - |
| `state` | - | Yes | - | - | - |
| `steps` | - | - | - | - | - |
| `trigger` | - | - | - | - | - |
| `version` | - | - | - | - | - |
| `workflow` | - | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Workflow().create({
  condition_groups: [],
  continue_on_step_error: true,
  delay: {},
  expressions: [],
  id: 'example_id',
  management_meta: {},
  name: 'example_name',
  once_for: [],
  runs_on_incident_modes: [],
  runs_on_incidents: 'example_runs_on_incidents',
  steps: [],
  trigger: 'example_trigger',
  version: 1,
  workflow: {},
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Workflow().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Workflow().load({ id: 'workflow_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Workflow().remove({ id: 'workflow_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Workflow().update({
  id: 'workflow_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WorkflowRunEntity

```ts
const workflow_run = client.WorkflowRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancelled_at` | `string` | No | If the run was cancelled, this is when |
| `created_at` | `string` | Yes | When the resource was created |
| `enqueued_at` | `string` | No | When the run was enqueued for execution |
| `error` | `string` | No | Error produced by the workflow, if it failed |
| `id` | `string` | Yes | Unique identifier for the workflow run |
| `incident_id` | `string` | No | If this run was against a specific incident, this is the ID of that incident |
| `incident_reference` | `string` | No | If this run was against a specific incident, this is the reference of that incident |
| `progress` | `Array` | Yes | Status of each step as it is worked |
| `scheduled_at` | `string` | Yes | When the run was scheduled for |
| `updated_at` | `string` | Yes | When the resource was last updated |
| `workflow_id` | `string` | Yes | Unique identifier for the underlying workflow |
| `workflow_name` | `string` | No | Name of the underlying workflow |
| `workflow_version_id` | `string` | Yes | Unique identifier of the workflow version |
| `workflow_version_number` | `number` | Yes | Monotonically incrementing version number for the version that ran |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.WorkflowRun().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WorkflowRun().load({ id: 'workflow_run_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WorkflowRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `IncidentIoSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new IncidentIoSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.


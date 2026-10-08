// IncidentIo Ts SDK

import { ActionEntity } from './entity/ActionEntity'
import { AlertEntity } from './entity/AlertEntity'
import { AlertAttributeEntity } from './entity/AlertAttributeEntity'
import { AlertNoteEntity } from './entity/AlertNoteEntity'
import { AlertRouteEntity } from './entity/AlertRouteEntity'
import { AlertSourceEntity } from './entity/AlertSourceEntity'
import { AlertSourcesV2Entity } from './entity/AlertSourcesV2Entity'
import { AlertTagEntity } from './entity/AlertTagEntity'
import { AlertsAddTagsResultV2Entity } from './entity/AlertsAddTagsResultV2Entity'
import { AlertsRemoveTagsResultV2Entity } from './entity/AlertsRemoveTagsResultV2Entity'
import { AlertsSetTagsResultV2Entity } from './entity/AlertsSetTagsResultV2Entity'
import { AlertsTransitionIncidentAlertResultV2Entity } from './entity/AlertsTransitionIncidentAlertResultV2Entity'
import { AnnouncementRuleEntity } from './entity/AnnouncementRuleEntity'
import { AnnouncementTemplateEntity } from './entity/AnnouncementTemplateEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { CallRouteEntity } from './entity/CallRouteEntity'
import { CallRoutesCreateAllowedCallerResultV2Entity } from './entity/CallRoutesCreateAllowedCallerResultV2Entity'
import { CallRoutesCreateOptionResultV2Entity } from './entity/CallRoutesCreateOptionResultV2Entity'
import { CallRoutesListAllowedCallersResultV2Entity } from './entity/CallRoutesListAllowedCallersResultV2Entity'
import { CallRoutesListOptionsResultV2Entity } from './entity/CallRoutesListOptionsResultV2Entity'
import { CallRoutesShowAllowedCallerResultV2Entity } from './entity/CallRoutesShowAllowedCallerResultV2Entity'
import { CallRoutesShowOptionResultV2Entity } from './entity/CallRoutesShowOptionResultV2Entity'
import { CallRoutesUpdateAllowedCallerResultV2Entity } from './entity/CallRoutesUpdateAllowedCallerResultV2Entity'
import { CallRoutesUpdateOptionResultV2Entity } from './entity/CallRoutesUpdateOptionResultV2Entity'
import { CallRoutesV2Entity } from './entity/CallRoutesV2Entity'
import { CallSessionEntity } from './entity/CallSessionEntity'
import { CallTranscriptEntryEntity } from './entity/CallTranscriptEntryEntity'
import { CatalogEntryEntity } from './entity/CatalogEntryEntity'
import { CatalogResourceEntity } from './entity/CatalogResourceEntity'
import { CatalogTypeEntity } from './entity/CatalogTypeEntity'
import { CatalogTypeSchemaEntity } from './entity/CatalogTypeSchemaEntity'
import { CustomFieldEntity } from './entity/CustomFieldEntity'
import { CustomFieldOptionEntity } from './entity/CustomFieldOptionEntity'
import { EscalationEntity } from './entity/EscalationEntity'
import { EscalationPathTemplateEntity } from './entity/EscalationPathTemplateEntity'
import { EscalationsCheckEscalationPermissionsResultV2Entity } from './entity/EscalationsCheckEscalationPermissionsResultV2Entity'
import { EscalationsReassignEscalationResultV2Entity } from './entity/EscalationsReassignEscalationResultV2Entity'
import { FollowUpEntity } from './entity/FollowUpEntity'
import { FollowUpsConnectExternalIssueResultV3Entity } from './entity/FollowUpsConnectExternalIssueResultV3Entity'
import { FollowUpsCreateFromLinkResultV3Entity } from './entity/FollowUpsCreateFromLinkResultV3Entity'
import { IdentityEntity } from './entity/IdentityEntity'
import { IncidentEntity } from './entity/IncidentEntity'
import { IncidentActivityLogEntryEntity } from './entity/IncidentActivityLogEntryEntity'
import { IncidentAttachmentEntity } from './entity/IncidentAttachmentEntity'
import { IncidentFormEntity } from './entity/IncidentFormEntity'
import { IncidentMembershipEntity } from './entity/IncidentMembershipEntity'
import { IncidentParticipantEntity } from './entity/IncidentParticipantEntity'
import { IncidentParticipantWorkloadEntity } from './entity/IncidentParticipantWorkloadEntity'
import { IncidentRelationshipEntity } from './entity/IncidentRelationshipEntity'
import { IncidentRoleEntity } from './entity/IncidentRoleEntity'
import { IncidentStatusEntity } from './entity/IncidentStatusEntity'
import { IncidentTeamMembershipEntity } from './entity/IncidentTeamMembershipEntity'
import { IncidentTeamMembershipsV1Entity } from './entity/IncidentTeamMembershipsV1Entity'
import { IncidentTemplateEntity } from './entity/IncidentTemplateEntity'
import { IncidentTemplatesValidateResultV1Entity } from './entity/IncidentTemplatesValidateResultV1Entity'
import { IncidentTimelineItemEntity } from './entity/IncidentTimelineItemEntity'
import { IncidentTimestampEntity } from './entity/IncidentTimestampEntity'
import { IncidentTypeEntity } from './entity/IncidentTypeEntity'
import { IncidentUpdateEntity } from './entity/IncidentUpdateEntity'
import { IpAllowlistEntity } from './entity/IpAllowlistEntity'
import { IpRangeEntity } from './entity/IpRangeEntity'
import { MaintenanceWindowEntity } from './entity/MaintenanceWindowEntity'
import { OnCallNotificationMethodPublicV2Entity } from './entity/OnCallNotificationMethodPublicV2Entity'
import { OnCallNotificationRulePublicV2Entity } from './entity/OnCallNotificationRulePublicV2Entity'
import { PayConfigEntity } from './entity/PayConfigEntity'
import { PayConfigsCreateOneOffRuleResultV2Entity } from './entity/PayConfigsCreateOneOffRuleResultV2Entity'
import { PayConfigsCreateWeeklyRuleResultV2Entity } from './entity/PayConfigsCreateWeeklyRuleResultV2Entity'
import { PayConfigsListOneOffRulesResultV2Entity } from './entity/PayConfigsListOneOffRulesResultV2Entity'
import { PayConfigsListWeeklyRulesResultV2Entity } from './entity/PayConfigsListWeeklyRulesResultV2Entity'
import { PayConfigsShowOneOffRuleResultV2Entity } from './entity/PayConfigsShowOneOffRuleResultV2Entity'
import { PayConfigsShowWeeklyRuleResultV2Entity } from './entity/PayConfigsShowWeeklyRuleResultV2Entity'
import { PayConfigsUpdateOneOffRuleResultV2Entity } from './entity/PayConfigsUpdateOneOffRuleResultV2Entity'
import { PayConfigsUpdateWeeklyRuleResultV2Entity } from './entity/PayConfigsUpdateWeeklyRuleResultV2Entity'
import { PayConfigsV2Entity } from './entity/PayConfigsV2Entity'
import { PayReportEntity } from './entity/PayReportEntity'
import { PayReportsPublishResultV2Entity } from './entity/PayReportsPublishResultV2Entity'
import { PayReportsUnpublishResultV2Entity } from './entity/PayReportsUnpublishResultV2Entity'
import { PayReportsV2Entity } from './entity/PayReportsV2Entity'
import { PoliciesV2Entity } from './entity/PoliciesV2Entity'
import { PolicyEntity } from './entity/PolicyEntity'
import { PolicyFindingEntity } from './entity/PolicyFindingEntity'
import { PolicyFindingsDismissResultV2Entity } from './entity/PolicyFindingsDismissResultV2Entity'
import { PolicyFindingsRestoreResultV2Entity } from './entity/PolicyFindingsRestoreResultV2Entity'
import { PostmortemDocumentEntity } from './entity/PostmortemDocumentEntity'
import { ScheduleEntity } from './entity/ScheduleEntity'
import { ScheduleEntriesListPayloadV2Entity } from './entity/ScheduleEntriesListPayloadV2Entity'
import { ScheduleEntryEntity } from './entity/ScheduleEntryEntity'
import { ScheduleReplicaEntity } from './entity/ScheduleReplicaEntity'
import { ScheduleSyncRuleEntity } from './entity/ScheduleSyncRuleEntity'
import { ScheduleSyncTargetEntity } from './entity/ScheduleSyncTargetEntity'
import { SchedulesShowOverrideResultV2Entity } from './entity/SchedulesShowOverrideResultV2Entity'
import { SchedulesUpdateOverrideResultV2Entity } from './entity/SchedulesUpdateOverrideResultV2Entity'
import { SecretEntity } from './entity/SecretEntity'
import { SeverityEntity } from './entity/SeverityEntity'
import { StatusPageEntity } from './entity/StatusPageEntity'
import { StatusPageComponentEntity } from './entity/StatusPageComponentEntity'
import { StatusPageComponentAvailabilityV2Entity } from './entity/StatusPageComponentAvailabilityV2Entity'
import { StatusPageIncidentEntity } from './entity/StatusPageIncidentEntity'
import { StatusPageIncidentUpdateEntity } from './entity/StatusPageIncidentUpdateEntity'
import { StatusPageLinkedResponseIncidentV1Entity } from './entity/StatusPageLinkedResponseIncidentV1Entity'
import { StatusPageMaintenanceEntity } from './entity/StatusPageMaintenanceEntity'
import { StatusPageMaintenanceUpdateEntity } from './entity/StatusPageMaintenanceUpdateEntity'
import { StatusPageStructureEntity } from './entity/StatusPageStructureEntity'
import { StatusPagesV2Entity } from './entity/StatusPagesV2Entity'
import { TeamEntity } from './entity/TeamEntity'
import { TelemetryDataSourceV2Entity } from './entity/TelemetryDataSourceV2Entity'
import { UserEntity } from './entity/UserEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'
import { WorkflowRunEntity } from './entity/WorkflowRunEntity'

export type * from './IncidentIoTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { IncidentIoEntityBase } from './IncidentIoEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class IncidentIoSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method,
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('IncidentIoSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('IncidentIoSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('IncidentIoSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts?: Record<string, any>) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alert(entopts?: Record<string, any>) {
    const self = this
    return new AlertEntity(self, entopts)
  }


  // Entity access: `client.AlertAttribute().list()` / `client.AlertAttribute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertAttribute(entopts?: Record<string, any>) {
    const self = this
    return new AlertAttributeEntity(self, entopts)
  }


  // Entity access: `client.AlertNote().list()` / `client.AlertNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertNote(entopts?: Record<string, any>) {
    const self = this
    return new AlertNoteEntity(self, entopts)
  }


  // Entity access: `client.AlertRoute().list()` / `client.AlertRoute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertRoute(entopts?: Record<string, any>) {
    const self = this
    return new AlertRouteEntity(self, entopts)
  }


  // Entity access: `client.AlertSource().list()` / `client.AlertSource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertSource(entopts?: Record<string, any>) {
    const self = this
    return new AlertSourceEntity(self, entopts)
  }


  // Entity access: `client.AlertSourcesV2().list()` / `client.AlertSourcesV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertSourcesV2(entopts?: Record<string, any>) {
    const self = this
    return new AlertSourcesV2Entity(self, entopts)
  }


  // Entity access: `client.AlertTag().list()` / `client.AlertTag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertTag(entopts?: Record<string, any>) {
    const self = this
    return new AlertTagEntity(self, entopts)
  }


  // Entity access: `client.AlertsAddTagsResultV2().list()` / `client.AlertsAddTagsResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertsAddTagsResultV2(entopts?: Record<string, any>) {
    const self = this
    return new AlertsAddTagsResultV2Entity(self, entopts)
  }


  // Entity access: `client.AlertsRemoveTagsResultV2().list()` / `client.AlertsRemoveTagsResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertsRemoveTagsResultV2(entopts?: Record<string, any>) {
    const self = this
    return new AlertsRemoveTagsResultV2Entity(self, entopts)
  }


  // Entity access: `client.AlertsSetTagsResultV2().list()` / `client.AlertsSetTagsResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertsSetTagsResultV2(entopts?: Record<string, any>) {
    const self = this
    return new AlertsSetTagsResultV2Entity(self, entopts)
  }


  // Entity access: `client.AlertsTransitionIncidentAlertResultV2().list()` / `client.AlertsTransitionIncidentAlertResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertsTransitionIncidentAlertResultV2(entopts?: Record<string, any>) {
    const self = this
    return new AlertsTransitionIncidentAlertResultV2Entity(self, entopts)
  }


  // Entity access: `client.AnnouncementRule().list()` / `client.AnnouncementRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnnouncementRule(entopts?: Record<string, any>) {
    const self = this
    return new AnnouncementRuleEntity(self, entopts)
  }


  // Entity access: `client.AnnouncementTemplate().list()` / `client.AnnouncementTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AnnouncementTemplate(entopts?: Record<string, any>) {
    const self = this
    return new AnnouncementTemplateEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.CallRoute().list()` / `client.CallRoute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoute(entopts?: Record<string, any>) {
    const self = this
    return new CallRouteEntity(self, entopts)
  }


  // Entity access: `client.CallRoutesCreateAllowedCallerResultV2().list()` / `client.CallRoutesCreateAllowedCallerResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesCreateAllowedCallerResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesCreateAllowedCallerResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesCreateOptionResultV2().list()` / `client.CallRoutesCreateOptionResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesCreateOptionResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesCreateOptionResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesListAllowedCallersResultV2().list()` / `client.CallRoutesListAllowedCallersResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesListAllowedCallersResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesListAllowedCallersResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesListOptionsResultV2().list()` / `client.CallRoutesListOptionsResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesListOptionsResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesListOptionsResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesShowAllowedCallerResultV2().list()` / `client.CallRoutesShowAllowedCallerResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesShowAllowedCallerResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesShowAllowedCallerResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesShowOptionResultV2().list()` / `client.CallRoutesShowOptionResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesShowOptionResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesShowOptionResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesUpdateAllowedCallerResultV2().list()` / `client.CallRoutesUpdateAllowedCallerResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesUpdateAllowedCallerResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesUpdateAllowedCallerResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesUpdateOptionResultV2().list()` / `client.CallRoutesUpdateOptionResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesUpdateOptionResultV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesUpdateOptionResultV2Entity(self, entopts)
  }


  // Entity access: `client.CallRoutesV2().list()` / `client.CallRoutesV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallRoutesV2(entopts?: Record<string, any>) {
    const self = this
    return new CallRoutesV2Entity(self, entopts)
  }


  // Entity access: `client.CallSession().list()` / `client.CallSession().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallSession(entopts?: Record<string, any>) {
    const self = this
    return new CallSessionEntity(self, entopts)
  }


  // Entity access: `client.CallTranscriptEntry().list()` / `client.CallTranscriptEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CallTranscriptEntry(entopts?: Record<string, any>) {
    const self = this
    return new CallTranscriptEntryEntity(self, entopts)
  }


  // Entity access: `client.CatalogEntry().list()` / `client.CatalogEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CatalogEntry(entopts?: Record<string, any>) {
    const self = this
    return new CatalogEntryEntity(self, entopts)
  }


  // Entity access: `client.CatalogResource().list()` / `client.CatalogResource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CatalogResource(entopts?: Record<string, any>) {
    const self = this
    return new CatalogResourceEntity(self, entopts)
  }


  // Entity access: `client.CatalogType().list()` / `client.CatalogType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CatalogType(entopts?: Record<string, any>) {
    const self = this
    return new CatalogTypeEntity(self, entopts)
  }


  // Entity access: `client.CatalogTypeSchema().list()` / `client.CatalogTypeSchema().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CatalogTypeSchema(entopts?: Record<string, any>) {
    const self = this
    return new CatalogTypeSchemaEntity(self, entopts)
  }


  // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomField(entopts?: Record<string, any>) {
    const self = this
    return new CustomFieldEntity(self, entopts)
  }


  // Entity access: `client.CustomFieldOption().list()` / `client.CustomFieldOption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomFieldOption(entopts?: Record<string, any>) {
    const self = this
    return new CustomFieldOptionEntity(self, entopts)
  }


  // Entity access: `client.Escalation().list()` / `client.Escalation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Escalation(entopts?: Record<string, any>) {
    const self = this
    return new EscalationEntity(self, entopts)
  }


  // Entity access: `client.EscalationPathTemplate().list()` / `client.EscalationPathTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EscalationPathTemplate(entopts?: Record<string, any>) {
    const self = this
    return new EscalationPathTemplateEntity(self, entopts)
  }


  // Entity access: `client.EscalationsCheckEscalationPermissionsResultV2().list()` / `client.EscalationsCheckEscalationPermissionsResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EscalationsCheckEscalationPermissionsResultV2(entopts?: Record<string, any>) {
    const self = this
    return new EscalationsCheckEscalationPermissionsResultV2Entity(self, entopts)
  }


  // Entity access: `client.EscalationsReassignEscalationResultV2().list()` / `client.EscalationsReassignEscalationResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EscalationsReassignEscalationResultV2(entopts?: Record<string, any>) {
    const self = this
    return new EscalationsReassignEscalationResultV2Entity(self, entopts)
  }


  // Entity access: `client.FollowUp().list()` / `client.FollowUp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FollowUp(entopts?: Record<string, any>) {
    const self = this
    return new FollowUpEntity(self, entopts)
  }


  // Entity access: `client.FollowUpsConnectExternalIssueResultV3().list()` / `client.FollowUpsConnectExternalIssueResultV3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FollowUpsConnectExternalIssueResultV3(entopts?: Record<string, any>) {
    const self = this
    return new FollowUpsConnectExternalIssueResultV3Entity(self, entopts)
  }


  // Entity access: `client.FollowUpsCreateFromLinkResultV3().list()` / `client.FollowUpsCreateFromLinkResultV3().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FollowUpsCreateFromLinkResultV3(entopts?: Record<string, any>) {
    const self = this
    return new FollowUpsCreateFromLinkResultV3Entity(self, entopts)
  }


  // Entity access: `client.Identity().list()` / `client.Identity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Identity(entopts?: Record<string, any>) {
    const self = this
    return new IdentityEntity(self, entopts)
  }


  // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Incident(entopts?: Record<string, any>) {
    const self = this
    return new IncidentEntity(self, entopts)
  }


  // Entity access: `client.IncidentActivityLogEntry().list()` / `client.IncidentActivityLogEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentActivityLogEntry(entopts?: Record<string, any>) {
    const self = this
    return new IncidentActivityLogEntryEntity(self, entopts)
  }


  // Entity access: `client.IncidentAttachment().list()` / `client.IncidentAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentAttachment(entopts?: Record<string, any>) {
    const self = this
    return new IncidentAttachmentEntity(self, entopts)
  }


  // Entity access: `client.IncidentForm().list()` / `client.IncidentForm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentForm(entopts?: Record<string, any>) {
    const self = this
    return new IncidentFormEntity(self, entopts)
  }


  // Entity access: `client.IncidentMembership().list()` / `client.IncidentMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentMembership(entopts?: Record<string, any>) {
    const self = this
    return new IncidentMembershipEntity(self, entopts)
  }


  // Entity access: `client.IncidentParticipant().list()` / `client.IncidentParticipant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentParticipant(entopts?: Record<string, any>) {
    const self = this
    return new IncidentParticipantEntity(self, entopts)
  }


  // Entity access: `client.IncidentParticipantWorkload().list()` / `client.IncidentParticipantWorkload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentParticipantWorkload(entopts?: Record<string, any>) {
    const self = this
    return new IncidentParticipantWorkloadEntity(self, entopts)
  }


  // Entity access: `client.IncidentRelationship().list()` / `client.IncidentRelationship().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentRelationship(entopts?: Record<string, any>) {
    const self = this
    return new IncidentRelationshipEntity(self, entopts)
  }


  // Entity access: `client.IncidentRole().list()` / `client.IncidentRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentRole(entopts?: Record<string, any>) {
    const self = this
    return new IncidentRoleEntity(self, entopts)
  }


  // Entity access: `client.IncidentStatus().list()` / `client.IncidentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentStatus(entopts?: Record<string, any>) {
    const self = this
    return new IncidentStatusEntity(self, entopts)
  }


  // Entity access: `client.IncidentTeamMembership().list()` / `client.IncidentTeamMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTeamMembership(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTeamMembershipEntity(self, entopts)
  }


  // Entity access: `client.IncidentTeamMembershipsV1().list()` / `client.IncidentTeamMembershipsV1().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTeamMembershipsV1(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTeamMembershipsV1Entity(self, entopts)
  }


  // Entity access: `client.IncidentTemplate().list()` / `client.IncidentTemplate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTemplate(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTemplateEntity(self, entopts)
  }


  // Entity access: `client.IncidentTemplatesValidateResultV1().list()` / `client.IncidentTemplatesValidateResultV1().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTemplatesValidateResultV1(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTemplatesValidateResultV1Entity(self, entopts)
  }


  // Entity access: `client.IncidentTimelineItem().list()` / `client.IncidentTimelineItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTimelineItem(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTimelineItemEntity(self, entopts)
  }


  // Entity access: `client.IncidentTimestamp().list()` / `client.IncidentTimestamp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTimestamp(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTimestampEntity(self, entopts)
  }


  // Entity access: `client.IncidentType().list()` / `client.IncidentType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentType(entopts?: Record<string, any>) {
    const self = this
    return new IncidentTypeEntity(self, entopts)
  }


  // Entity access: `client.IncidentUpdate().list()` / `client.IncidentUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentUpdate(entopts?: Record<string, any>) {
    const self = this
    return new IncidentUpdateEntity(self, entopts)
  }


  // Entity access: `client.IpAllowlist().list()` / `client.IpAllowlist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IpAllowlist(entopts?: Record<string, any>) {
    const self = this
    return new IpAllowlistEntity(self, entopts)
  }


  // Entity access: `client.IpRange().list()` / `client.IpRange().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IpRange(entopts?: Record<string, any>) {
    const self = this
    return new IpRangeEntity(self, entopts)
  }


  // Entity access: `client.MaintenanceWindow().list()` / `client.MaintenanceWindow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MaintenanceWindow(entopts?: Record<string, any>) {
    const self = this
    return new MaintenanceWindowEntity(self, entopts)
  }


  // Entity access: `client.OnCallNotificationMethodPublicV2().list()` / `client.OnCallNotificationMethodPublicV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OnCallNotificationMethodPublicV2(entopts?: Record<string, any>) {
    const self = this
    return new OnCallNotificationMethodPublicV2Entity(self, entopts)
  }


  // Entity access: `client.OnCallNotificationRulePublicV2().list()` / `client.OnCallNotificationRulePublicV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OnCallNotificationRulePublicV2(entopts?: Record<string, any>) {
    const self = this
    return new OnCallNotificationRulePublicV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfig().list()` / `client.PayConfig().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfig(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigEntity(self, entopts)
  }


  // Entity access: `client.PayConfigsCreateOneOffRuleResultV2().list()` / `client.PayConfigsCreateOneOffRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsCreateOneOffRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsCreateOneOffRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsCreateWeeklyRuleResultV2().list()` / `client.PayConfigsCreateWeeklyRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsCreateWeeklyRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsCreateWeeklyRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsListOneOffRulesResultV2().list()` / `client.PayConfigsListOneOffRulesResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsListOneOffRulesResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsListOneOffRulesResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsListWeeklyRulesResultV2().list()` / `client.PayConfigsListWeeklyRulesResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsListWeeklyRulesResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsListWeeklyRulesResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsShowOneOffRuleResultV2().list()` / `client.PayConfigsShowOneOffRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsShowOneOffRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsShowOneOffRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsShowWeeklyRuleResultV2().list()` / `client.PayConfigsShowWeeklyRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsShowWeeklyRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsShowWeeklyRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsUpdateOneOffRuleResultV2().list()` / `client.PayConfigsUpdateOneOffRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsUpdateOneOffRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsUpdateOneOffRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsUpdateWeeklyRuleResultV2().list()` / `client.PayConfigsUpdateWeeklyRuleResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsUpdateWeeklyRuleResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsUpdateWeeklyRuleResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayConfigsV2().list()` / `client.PayConfigsV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayConfigsV2(entopts?: Record<string, any>) {
    const self = this
    return new PayConfigsV2Entity(self, entopts)
  }


  // Entity access: `client.PayReport().list()` / `client.PayReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayReport(entopts?: Record<string, any>) {
    const self = this
    return new PayReportEntity(self, entopts)
  }


  // Entity access: `client.PayReportsPublishResultV2().list()` / `client.PayReportsPublishResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayReportsPublishResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayReportsPublishResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayReportsUnpublishResultV2().list()` / `client.PayReportsUnpublishResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayReportsUnpublishResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PayReportsUnpublishResultV2Entity(self, entopts)
  }


  // Entity access: `client.PayReportsV2().list()` / `client.PayReportsV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PayReportsV2(entopts?: Record<string, any>) {
    const self = this
    return new PayReportsV2Entity(self, entopts)
  }


  // Entity access: `client.PoliciesV2().list()` / `client.PoliciesV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PoliciesV2(entopts?: Record<string, any>) {
    const self = this
    return new PoliciesV2Entity(self, entopts)
  }


  // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Policy(entopts?: Record<string, any>) {
    const self = this
    return new PolicyEntity(self, entopts)
  }


  // Entity access: `client.PolicyFinding().list()` / `client.PolicyFinding().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PolicyFinding(entopts?: Record<string, any>) {
    const self = this
    return new PolicyFindingEntity(self, entopts)
  }


  // Entity access: `client.PolicyFindingsDismissResultV2().list()` / `client.PolicyFindingsDismissResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PolicyFindingsDismissResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PolicyFindingsDismissResultV2Entity(self, entopts)
  }


  // Entity access: `client.PolicyFindingsRestoreResultV2().list()` / `client.PolicyFindingsRestoreResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PolicyFindingsRestoreResultV2(entopts?: Record<string, any>) {
    const self = this
    return new PolicyFindingsRestoreResultV2Entity(self, entopts)
  }


  // Entity access: `client.PostmortemDocument().list()` / `client.PostmortemDocument().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostmortemDocument(entopts?: Record<string, any>) {
    const self = this
    return new PostmortemDocumentEntity(self, entopts)
  }


  // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Schedule(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleEntity(self, entopts)
  }


  // Entity access: `client.ScheduleEntriesListPayloadV2().list()` / `client.ScheduleEntriesListPayloadV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduleEntriesListPayloadV2(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleEntriesListPayloadV2Entity(self, entopts)
  }


  // Entity access: `client.ScheduleEntry().list()` / `client.ScheduleEntry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduleEntry(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleEntryEntity(self, entopts)
  }


  // Entity access: `client.ScheduleReplica().list()` / `client.ScheduleReplica().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduleReplica(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleReplicaEntity(self, entopts)
  }


  // Entity access: `client.ScheduleSyncRule().list()` / `client.ScheduleSyncRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduleSyncRule(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleSyncRuleEntity(self, entopts)
  }


  // Entity access: `client.ScheduleSyncTarget().list()` / `client.ScheduleSyncTarget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ScheduleSyncTarget(entopts?: Record<string, any>) {
    const self = this
    return new ScheduleSyncTargetEntity(self, entopts)
  }


  // Entity access: `client.SchedulesShowOverrideResultV2().list()` / `client.SchedulesShowOverrideResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SchedulesShowOverrideResultV2(entopts?: Record<string, any>) {
    const self = this
    return new SchedulesShowOverrideResultV2Entity(self, entopts)
  }


  // Entity access: `client.SchedulesUpdateOverrideResultV2().list()` / `client.SchedulesUpdateOverrideResultV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SchedulesUpdateOverrideResultV2(entopts?: Record<string, any>) {
    const self = this
    return new SchedulesUpdateOverrideResultV2Entity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts?: Record<string, any>) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Severity().list()` / `client.Severity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Severity(entopts?: Record<string, any>) {
    const self = this
    return new SeverityEntity(self, entopts)
  }


  // Entity access: `client.StatusPage().list()` / `client.StatusPage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPage(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageEntity(self, entopts)
  }


  // Entity access: `client.StatusPageComponent().list()` / `client.StatusPageComponent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageComponent(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageComponentEntity(self, entopts)
  }


  // Entity access: `client.StatusPageComponentAvailabilityV2().list()` / `client.StatusPageComponentAvailabilityV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageComponentAvailabilityV2(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageComponentAvailabilityV2Entity(self, entopts)
  }


  // Entity access: `client.StatusPageIncident().list()` / `client.StatusPageIncident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageIncident(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageIncidentEntity(self, entopts)
  }


  // Entity access: `client.StatusPageIncidentUpdate().list()` / `client.StatusPageIncidentUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageIncidentUpdate(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageIncidentUpdateEntity(self, entopts)
  }


  // Entity access: `client.StatusPageLinkedResponseIncidentV1().list()` / `client.StatusPageLinkedResponseIncidentV1().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageLinkedResponseIncidentV1(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageLinkedResponseIncidentV1Entity(self, entopts)
  }


  // Entity access: `client.StatusPageMaintenance().list()` / `client.StatusPageMaintenance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageMaintenance(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageMaintenanceEntity(self, entopts)
  }


  // Entity access: `client.StatusPageMaintenanceUpdate().list()` / `client.StatusPageMaintenanceUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageMaintenanceUpdate(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageMaintenanceUpdateEntity(self, entopts)
  }


  // Entity access: `client.StatusPageStructure().list()` / `client.StatusPageStructure().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPageStructure(entopts?: Record<string, any>) {
    const self = this
    return new StatusPageStructureEntity(self, entopts)
  }


  // Entity access: `client.StatusPagesV2().list()` / `client.StatusPagesV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusPagesV2(entopts?: Record<string, any>) {
    const self = this
    return new StatusPagesV2Entity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.TelemetryDataSourceV2().list()` / `client.TelemetryDataSourceV2().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TelemetryDataSourceV2(entopts?: Record<string, any>) {
    const self = this
    return new TelemetryDataSourceV2Entity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRun(entopts?: Record<string, any>) {
    const self = this
    return new WorkflowRunEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new IncidentIoSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return IncidentIoSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'IncidentIo' }
  }

  toString() {
    return 'IncidentIo ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = IncidentIoSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  IncidentIoEntityBase,

  IncidentIoSDK,
  SDK,
}


export type { DirectResult }

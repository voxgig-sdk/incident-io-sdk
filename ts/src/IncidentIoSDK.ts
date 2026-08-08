// IncidentIo Ts SDK

import { ActionEntity } from './entity/ActionEntity'
import { AlertEntity } from './entity/AlertEntity'
import { AlertAttributeEntity } from './entity/AlertAttributeEntity'
import { AlertNoteEntity } from './entity/AlertNoteEntity'
import { AlertRouteEntity } from './entity/AlertRouteEntity'
import { AlertSourceEntity } from './entity/AlertSourceEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { CatalogEntryEntity } from './entity/CatalogEntryEntity'
import { CatalogResourceEntity } from './entity/CatalogResourceEntity'
import { CatalogTypeEntity } from './entity/CatalogTypeEntity'
import { CatalogTypeSchemaEntity } from './entity/CatalogTypeSchemaEntity'
import { CustomFieldEntity } from './entity/CustomFieldEntity'
import { CustomFieldOptionEntity } from './entity/CustomFieldOptionEntity'
import { EscalationEntity } from './entity/EscalationEntity'
import { FollowUpEntity } from './entity/FollowUpEntity'
import { IncidentEntity } from './entity/IncidentEntity'
import { IncidentAlertEntity } from './entity/IncidentAlertEntity'
import { IncidentAttachmentEntity } from './entity/IncidentAttachmentEntity'
import { IncidentMembershipEntity } from './entity/IncidentMembershipEntity'
import { IncidentParticipantEntity } from './entity/IncidentParticipantEntity'
import { IncidentParticipantWorkloadEntity } from './entity/IncidentParticipantWorkloadEntity'
import { IncidentRelationshipEntity } from './entity/IncidentRelationshipEntity'
import { IncidentRoleEntity } from './entity/IncidentRoleEntity'
import { IncidentStatusEntity } from './entity/IncidentStatusEntity'
import { IncidentTimestampEntity } from './entity/IncidentTimestampEntity'
import { IncidentTypeEntity } from './entity/IncidentTypeEntity'
import { IncidentUpdateEntity } from './entity/IncidentUpdateEntity'
import { IpAllowlistEntity } from './entity/IpAllowlistEntity'
import { MaintenanceWindowEntity } from './entity/MaintenanceWindowEntity'
import { PostmortemDocumentEntity } from './entity/PostmortemDocumentEntity'
import { ScheduleEntity } from './entity/ScheduleEntity'
import { ScheduleEntryEntity } from './entity/ScheduleEntryEntity'
import { ScheduleReplicaEntity } from './entity/ScheduleReplicaEntity'
import { ScheduleSyncRuleEntity } from './entity/ScheduleSyncRuleEntity'
import { ScheduleSyncTargetEntity } from './entity/ScheduleSyncTargetEntity'
import { SecretEntity } from './entity/SecretEntity'
import { SeverityEntity } from './entity/SeverityEntity'
import { StatusPageEntity } from './entity/StatusPageEntity'
import { StatusPageIncidentEntity } from './entity/StatusPageIncidentEntity'
import { StatusPageIncidentUpdateEntity } from './entity/StatusPageIncidentUpdateEntity'
import { StatusPageMaintenanceEntity } from './entity/StatusPageMaintenanceEntity'
import { StatusPageMaintenanceUpdateEntity } from './entity/StatusPageMaintenanceUpdateEntity'
import { StatusPageStructureEntity } from './entity/StatusPageStructureEntity'
import { TeamEntity } from './entity/TeamEntity'
import { TelemetryDataSourceEntity } from './entity/TelemetryDataSourceEntity'
import { UserEntity } from './entity/UserEntity'
import { WorkflowEntity } from './entity/WorkflowEntity'
import { WorkflowRunEntity } from './entity/WorkflowRunEntity'

export type * from './IncidentIoTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { IncidentIoEntityBase } from './IncidentIoEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


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
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
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

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
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
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
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


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
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


  // Entity access: `client.FollowUp().list()` / `client.FollowUp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FollowUp(entopts?: Record<string, any>) {
    const self = this
    return new FollowUpEntity(self, entopts)
  }


  // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Incident(entopts?: Record<string, any>) {
    const self = this
    return new IncidentEntity(self, entopts)
  }


  // Entity access: `client.IncidentAlert().list()` / `client.IncidentAlert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentAlert(entopts?: Record<string, any>) {
    const self = this
    return new IncidentAlertEntity(self, entopts)
  }


  // Entity access: `client.IncidentAttachment().list()` / `client.IncidentAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentAttachment(entopts?: Record<string, any>) {
    const self = this
    return new IncidentAttachmentEntity(self, entopts)
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


  // Entity access: `client.MaintenanceWindow().list()` / `client.MaintenanceWindow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MaintenanceWindow(entopts?: Record<string, any>) {
    const self = this
    return new MaintenanceWindowEntity(self, entopts)
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


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.TelemetryDataSource().list()` / `client.TelemetryDataSource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TelemetryDataSource(entopts?: Record<string, any>) {
    const self = this
    return new TelemetryDataSourceEntity(self, entopts)
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



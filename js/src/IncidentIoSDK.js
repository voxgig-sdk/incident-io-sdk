// IncidentIo Js SDK

const { ActionEntity } = require('./entity/ActionEntity')
const { AlertEntity } = require('./entity/AlertEntity')
const { AlertAttributeEntity } = require('./entity/AlertAttributeEntity')
const { AlertNoteEntity } = require('./entity/AlertNoteEntity')
const { AlertRouteEntity } = require('./entity/AlertRouteEntity')
const { AlertSourceEntity } = require('./entity/AlertSourceEntity')
const { ApiKeyEntity } = require('./entity/ApiKeyEntity')
const { CustomFieldEntity } = require('./entity/CustomFieldEntity')
const { CustomFieldOptionEntity } = require('./entity/CustomFieldOptionEntity')
const { FollowUpEntity } = require('./entity/FollowUpEntity')
const { IncidentEntity } = require('./entity/IncidentEntity')
const { IncidentAttachmentEntity } = require('./entity/IncidentAttachmentEntity')
const { IncidentMembershipEntity } = require('./entity/IncidentMembershipEntity')
const { IncidentParticipantEntity } = require('./entity/IncidentParticipantEntity')
const { IncidentParticipantWorkloadEntity } = require('./entity/IncidentParticipantWorkloadEntity')
const { IncidentRelationshipEntity } = require('./entity/IncidentRelationshipEntity')
const { IncidentRoleEntity } = require('./entity/IncidentRoleEntity')
const { IncidentStatusEntity } = require('./entity/IncidentStatusEntity')
const { IncidentTimestampEntity } = require('./entity/IncidentTimestampEntity')
const { IncidentTypeEntity } = require('./entity/IncidentTypeEntity')
const { IncidentUpdateEntity } = require('./entity/IncidentUpdateEntity')
const { IpAllowlistEntity } = require('./entity/IpAllowlistEntity')
const { MaintenanceWindowEntity } = require('./entity/MaintenanceWindowEntity')
const { PostmortemDocumentEntity } = require('./entity/PostmortemDocumentEntity')
const { SecretEntity } = require('./entity/SecretEntity')
const { TeamEntity } = require('./entity/TeamEntity')
const { UserEntity } = require('./entity/UserEntity')
const { WorkflowEntity } = require('./entity/WorkflowEntity')
const { WorkflowRunEntity } = require('./entity/WorkflowRunEntity')


const { inspect } = require('node:util')

const { config } = require('./Config')
const { Utility } = require('./utility/Utility')
const { IncidentIoEntityBase } = require('./IncidentIoEntityBase')


const { BaseFeature } = require('./feature/base/BaseFeature')


const stdutil = new Utility()


class IncidentIoSDK {
  _mode = 'live'
  _options
  _utility = new Utility()
  _features
  _rootctx

  constructor(options) {

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


  async prepare(fetchargs) {
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

    let ctx = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec = {
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


  async direct(fetchargs) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx = makeContext({
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
      const json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alert(entopts) {
    const self = this
    return new AlertEntity(self, entopts)
  }


  // Entity access: `client.AlertAttribute().list()` / `client.AlertAttribute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertAttribute(entopts) {
    const self = this
    return new AlertAttributeEntity(self, entopts)
  }


  // Entity access: `client.AlertNote().list()` / `client.AlertNote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertNote(entopts) {
    const self = this
    return new AlertNoteEntity(self, entopts)
  }


  // Entity access: `client.AlertRoute().list()` / `client.AlertRoute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertRoute(entopts) {
    const self = this
    return new AlertRouteEntity(self, entopts)
  }


  // Entity access: `client.AlertSource().list()` / `client.AlertSource().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AlertSource(entopts) {
    const self = this
    return new AlertSourceEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomField(entopts) {
    const self = this
    return new CustomFieldEntity(self, entopts)
  }


  // Entity access: `client.CustomFieldOption().list()` / `client.CustomFieldOption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomFieldOption(entopts) {
    const self = this
    return new CustomFieldOptionEntity(self, entopts)
  }


  // Entity access: `client.FollowUp().list()` / `client.FollowUp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  FollowUp(entopts) {
    const self = this
    return new FollowUpEntity(self, entopts)
  }


  // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Incident(entopts) {
    const self = this
    return new IncidentEntity(self, entopts)
  }


  // Entity access: `client.IncidentAttachment().list()` / `client.IncidentAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentAttachment(entopts) {
    const self = this
    return new IncidentAttachmentEntity(self, entopts)
  }


  // Entity access: `client.IncidentMembership().list()` / `client.IncidentMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentMembership(entopts) {
    const self = this
    return new IncidentMembershipEntity(self, entopts)
  }


  // Entity access: `client.IncidentParticipant().list()` / `client.IncidentParticipant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentParticipant(entopts) {
    const self = this
    return new IncidentParticipantEntity(self, entopts)
  }


  // Entity access: `client.IncidentParticipantWorkload().list()` / `client.IncidentParticipantWorkload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentParticipantWorkload(entopts) {
    const self = this
    return new IncidentParticipantWorkloadEntity(self, entopts)
  }


  // Entity access: `client.IncidentRelationship().list()` / `client.IncidentRelationship().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentRelationship(entopts) {
    const self = this
    return new IncidentRelationshipEntity(self, entopts)
  }


  // Entity access: `client.IncidentRole().list()` / `client.IncidentRole().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentRole(entopts) {
    const self = this
    return new IncidentRoleEntity(self, entopts)
  }


  // Entity access: `client.IncidentStatus().list()` / `client.IncidentStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentStatus(entopts) {
    const self = this
    return new IncidentStatusEntity(self, entopts)
  }


  // Entity access: `client.IncidentTimestamp().list()` / `client.IncidentTimestamp().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentTimestamp(entopts) {
    const self = this
    return new IncidentTimestampEntity(self, entopts)
  }


  // Entity access: `client.IncidentType().list()` / `client.IncidentType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentType(entopts) {
    const self = this
    return new IncidentTypeEntity(self, entopts)
  }


  // Entity access: `client.IncidentUpdate().list()` / `client.IncidentUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IncidentUpdate(entopts) {
    const self = this
    return new IncidentUpdateEntity(self, entopts)
  }


  // Entity access: `client.IpAllowlist().list()` / `client.IpAllowlist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IpAllowlist(entopts) {
    const self = this
    return new IpAllowlistEntity(self, entopts)
  }


  // Entity access: `client.MaintenanceWindow().list()` / `client.MaintenanceWindow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MaintenanceWindow(entopts) {
    const self = this
    return new MaintenanceWindowEntity(self, entopts)
  }


  // Entity access: `client.PostmortemDocument().list()` / `client.PostmortemDocument().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PostmortemDocument(entopts) {
    const self = this
    return new PostmortemDocumentEntity(self, entopts)
  }


  // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Secret(entopts) {
    const self = this
    return new SecretEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Workflow(entopts) {
    const self = this
    return new WorkflowEntity(self, entopts)
  }


  // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WorkflowRun(entopts) {
    const self = this
    return new WorkflowRunEntity(self, entopts)
  }




  static test(testoptsarg, sdkoptsarg) {
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


  tester(testopts, sdkopts) {
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


module.exports = {
  stdutil,
  config,

  BaseFeature,
  IncidentIoEntityBase,

  IncidentIoSDK,
  SDK,
}


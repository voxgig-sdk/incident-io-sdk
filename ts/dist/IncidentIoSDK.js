"use strict";
// IncidentIo Ts SDK
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.IncidentIoSDK = exports.IncidentIoEntityBase = exports.BaseFeature = exports.sekreto = exports.config = exports.stdutil = void 0;
const ActionEntity_1 = require("./entity/ActionEntity");
const AlertEntity_1 = require("./entity/AlertEntity");
const AlertAttributeEntity_1 = require("./entity/AlertAttributeEntity");
const AlertNoteEntity_1 = require("./entity/AlertNoteEntity");
const AlertRouteEntity_1 = require("./entity/AlertRouteEntity");
const AlertSourceEntity_1 = require("./entity/AlertSourceEntity");
const AlertSourcesV2Entity_1 = require("./entity/AlertSourcesV2Entity");
const AlertTagEntity_1 = require("./entity/AlertTagEntity");
const AlertsAddTagsResultV2Entity_1 = require("./entity/AlertsAddTagsResultV2Entity");
const AlertsSetTagsResultV2Entity_1 = require("./entity/AlertsSetTagsResultV2Entity");
const AlertsTransitionIncidentAlertResultV2Entity_1 = require("./entity/AlertsTransitionIncidentAlertResultV2Entity");
const AnnouncementRuleEntity_1 = require("./entity/AnnouncementRuleEntity");
const AnnouncementTemplateEntity_1 = require("./entity/AnnouncementTemplateEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const CallRouteEntity_1 = require("./entity/CallRouteEntity");
const CallRouteAllowedCallerEntity_1 = require("./entity/CallRouteAllowedCallerEntity");
const CallRouteOptionEntity_1 = require("./entity/CallRouteOptionEntity");
const CallSessionEntity_1 = require("./entity/CallSessionEntity");
const CallTranscriptEntryEntity_1 = require("./entity/CallTranscriptEntryEntity");
const CatalogEntryEntity_1 = require("./entity/CatalogEntryEntity");
const CatalogResourceEntity_1 = require("./entity/CatalogResourceEntity");
const CatalogTypeEntity_1 = require("./entity/CatalogTypeEntity");
const CatalogTypeSchemaEntity_1 = require("./entity/CatalogTypeSchemaEntity");
const CustomFieldEntity_1 = require("./entity/CustomFieldEntity");
const CustomFieldOptionEntity_1 = require("./entity/CustomFieldOptionEntity");
const EscalationEntity_1 = require("./entity/EscalationEntity");
const EscalationPathEntity_1 = require("./entity/EscalationPathEntity");
const EscalationPathTemplateEntity_1 = require("./entity/EscalationPathTemplateEntity");
const EscalationsCheckEscalationPermissionsResultV2Entity_1 = require("./entity/EscalationsCheckEscalationPermissionsResultV2Entity");
const EscalationsReassignEscalationResultV2Entity_1 = require("./entity/EscalationsReassignEscalationResultV2Entity");
const FollowUpEntity_1 = require("./entity/FollowUpEntity");
const FollowUpsConnectExternalIssueResultV3Entity_1 = require("./entity/FollowUpsConnectExternalIssueResultV3Entity");
const FollowUpsCreateFromLinkResultV3Entity_1 = require("./entity/FollowUpsCreateFromLinkResultV3Entity");
const IdentityEntity_1 = require("./entity/IdentityEntity");
const IncidentEntity_1 = require("./entity/IncidentEntity");
const IncidentActivityLogEntryEntity_1 = require("./entity/IncidentActivityLogEntryEntity");
const IncidentAttachmentEntity_1 = require("./entity/IncidentAttachmentEntity");
const IncidentFormEntity_1 = require("./entity/IncidentFormEntity");
const IncidentMembershipEntity_1 = require("./entity/IncidentMembershipEntity");
const IncidentParticipantEntity_1 = require("./entity/IncidentParticipantEntity");
const IncidentParticipantWorkloadEntity_1 = require("./entity/IncidentParticipantWorkloadEntity");
const IncidentRelationshipEntity_1 = require("./entity/IncidentRelationshipEntity");
const IncidentRoleEntity_1 = require("./entity/IncidentRoleEntity");
const IncidentStatusEntity_1 = require("./entity/IncidentStatusEntity");
const IncidentTeamMembershipEntity_1 = require("./entity/IncidentTeamMembershipEntity");
const IncidentTeamMembershipsV1Entity_1 = require("./entity/IncidentTeamMembershipsV1Entity");
const IncidentTemplateEntity_1 = require("./entity/IncidentTemplateEntity");
const IncidentTemplatesValidateResultV1Entity_1 = require("./entity/IncidentTemplatesValidateResultV1Entity");
const IncidentTimelineItemEntity_1 = require("./entity/IncidentTimelineItemEntity");
const IncidentTimestampEntity_1 = require("./entity/IncidentTimestampEntity");
const IncidentTypeEntity_1 = require("./entity/IncidentTypeEntity");
const IncidentUpdateEntity_1 = require("./entity/IncidentUpdateEntity");
const IpAllowlistEntity_1 = require("./entity/IpAllowlistEntity");
const IpRangeEntity_1 = require("./entity/IpRangeEntity");
const MaintenanceWindowEntity_1 = require("./entity/MaintenanceWindowEntity");
const ManagedResourceEntity_1 = require("./entity/ManagedResourceEntity");
const OnCallNotificationMethodPublicV2Entity_1 = require("./entity/OnCallNotificationMethodPublicV2Entity");
const OnCallNotificationPauseEntity_1 = require("./entity/OnCallNotificationPauseEntity");
const OnCallNotificationRulePublicV2Entity_1 = require("./entity/OnCallNotificationRulePublicV2Entity");
const PayConfigEntity_1 = require("./entity/PayConfigEntity");
const PayConfigOneOffRuleEntity_1 = require("./entity/PayConfigOneOffRuleEntity");
const PayConfigWeeklyRuleEntity_1 = require("./entity/PayConfigWeeklyRuleEntity");
const PayReportEntity_1 = require("./entity/PayReportEntity");
const PayReportsPublishResultV2Entity_1 = require("./entity/PayReportsPublishResultV2Entity");
const PayReportsUnpublishResultV2Entity_1 = require("./entity/PayReportsUnpublishResultV2Entity");
const PayReportsV2Entity_1 = require("./entity/PayReportsV2Entity");
const PolicyEntity_1 = require("./entity/PolicyEntity");
const PolicyFindingEntity_1 = require("./entity/PolicyFindingEntity");
const PolicyFindingsDismissResultV2Entity_1 = require("./entity/PolicyFindingsDismissResultV2Entity");
const PolicyFindingsRestoreResultV2Entity_1 = require("./entity/PolicyFindingsRestoreResultV2Entity");
const PostmortemDocumentEntity_1 = require("./entity/PostmortemDocumentEntity");
const ScheduleEntity_1 = require("./entity/ScheduleEntity");
const ScheduleEntriesListPayloadV2Entity_1 = require("./entity/ScheduleEntriesListPayloadV2Entity");
const ScheduleEntryEntity_1 = require("./entity/ScheduleEntryEntity");
const ScheduleOverrideEntity_1 = require("./entity/ScheduleOverrideEntity");
const ScheduleReplicaEntity_1 = require("./entity/ScheduleReplicaEntity");
const ScheduleSyncRuleEntity_1 = require("./entity/ScheduleSyncRuleEntity");
const ScheduleSyncTargetEntity_1 = require("./entity/ScheduleSyncTargetEntity");
const SecretEntity_1 = require("./entity/SecretEntity");
const SeverityEntity_1 = require("./entity/SeverityEntity");
const StatusPageEntity_1 = require("./entity/StatusPageEntity");
const StatusPageComponentEntity_1 = require("./entity/StatusPageComponentEntity");
const StatusPageComponentAvailabilityEntity_1 = require("./entity/StatusPageComponentAvailabilityEntity");
const StatusPageIncidentEntity_1 = require("./entity/StatusPageIncidentEntity");
const StatusPageIncidentUpdateEntity_1 = require("./entity/StatusPageIncidentUpdateEntity");
const StatusPageLinkedResponseIncidentEntity_1 = require("./entity/StatusPageLinkedResponseIncidentEntity");
const StatusPageMaintenanceEntity_1 = require("./entity/StatusPageMaintenanceEntity");
const StatusPageMaintenanceUpdateEntity_1 = require("./entity/StatusPageMaintenanceUpdateEntity");
const StatusPageStructureEntity_1 = require("./entity/StatusPageStructureEntity");
const TeamEntity_1 = require("./entity/TeamEntity");
const TelemetryDataSourceEntity_1 = require("./entity/TelemetryDataSourceEntity");
const UserEntity_1 = require("./entity/UserEntity");
const WorkflowEntity_1 = require("./entity/WorkflowEntity");
const WorkflowRunEntity_1 = require("./entity/WorkflowRunEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const IncidentIoEntityBase_1 = require("./IncidentIoEntityBase");
Object.defineProperty(exports, "IncidentIoEntityBase", { enumerable: true, get: function () { return IncidentIoEntityBase_1.IncidentIoEntityBase; } });
const Utility_1 = require("./utility/Utility");
const ResultBodyUtility_1 = require("./utility/ResultBodyUtility");
const MakeRequestUtility_1 = require("./utility/MakeRequestUtility");
const PrepareMethodUtility_1 = require("./utility/PrepareMethodUtility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const sekreto = __importStar(require("./feature/secrets/sekreto"));
exports.sekreto = sekreto;
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class IncidentIoSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    _secrets;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        for (const key of ['_options', '_rootctx', '_features']) {
            Object.defineProperty(this, key, {
                value: this[key], enumerable: false, writable: true, configurable: true
            });
        }
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    secrets() {
        return this._secrets && this._secrets.sekreto();
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const method = String(fetchargs.method || 'GET').toUpperCase();
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.method, method)) {
            return ctx.error('spec_method_allow', 'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + options.allow.method + '"');
        }
        const spec = {
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        if (null != this._secrets) {
            try {
                await this._secrets.resolve();
            }
            catch (err) {
                return err instanceof Error ? err : new Error(String(err));
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!(0, PrepareMethodUtility_1.allowed)(this._options.allow.op, 'direct')) {
            return {
                ok: false,
                err: new Error('IncidentIoSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return { ok: false, err: utility.clean(this._rootctx, fetchdef) };
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            if (true === fetchdef.signal?.aborted) {
                throw fetchdef.signal.reason;
            }
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, fetched)) };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            let err = undefined;
            if (!noBody) {
                let text = undefined;
                try {
                    const raw = fetched;
                    if ('function' === typeof raw.text) {
                        text = await raw.text();
                        json = '' === text.trim() ? undefined : JSON.parse(text);
                    }
                    else {
                        json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                    }
                }
                catch (parseErr) {
                    if ('SyntaxError' !== parseErr?.name) {
                        throw parseErr;
                    }
                    err = (0, ResultBodyUtility_1.unreadableBody)(ctx, {
                        status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
                        failed: 200 <= status && status < 300 ? undefined :
                            ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
                    });
                }
            }
            return {
                ok: null == err && status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
                ...(null == err ? {} : { err: utility.clean(ctx, err) }),
            };
        }
        catch (err) {
            return { ok: false, err: utility.clean(ctx, (0, MakeRequestUtility_1.abortError)(ctx, err)) };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!(0, PrepareMethodUtility_1.allowed)(options.allow.op, 'graphql')) {
            return {
                ok: false,
                err: new Error('IncidentIoSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('IncidentIoSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Action(entopts) {
        const self = this;
        return new ActionEntity_1.ActionEntity(self, entopts);
    }
    // Entity access: `client.Alert().list()` / `client.Alert().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Alert(entopts) {
        const self = this;
        return new AlertEntity_1.AlertEntity(self, entopts);
    }
    // Entity access: `client.AlertAttribute().list()` / `client.AlertAttribute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertAttribute(entopts) {
        const self = this;
        return new AlertAttributeEntity_1.AlertAttributeEntity(self, entopts);
    }
    // Entity access: `client.AlertNote().list()` / `client.AlertNote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertNote(entopts) {
        const self = this;
        return new AlertNoteEntity_1.AlertNoteEntity(self, entopts);
    }
    // Entity access: `client.AlertRoute().list()` / `client.AlertRoute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertRoute(entopts) {
        const self = this;
        return new AlertRouteEntity_1.AlertRouteEntity(self, entopts);
    }
    // Entity access: `client.AlertSource().list()` / `client.AlertSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertSource(entopts) {
        const self = this;
        return new AlertSourceEntity_1.AlertSourceEntity(self, entopts);
    }
    // Entity access: `client.AlertSourcesV2().list()` / `client.AlertSourcesV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertSourcesV2(entopts) {
        const self = this;
        return new AlertSourcesV2Entity_1.AlertSourcesV2Entity(self, entopts);
    }
    // Entity access: `client.AlertTag().list()` / `client.AlertTag().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertTag(entopts) {
        const self = this;
        return new AlertTagEntity_1.AlertTagEntity(self, entopts);
    }
    // Entity access: `client.AlertsAddTagsResultV2().list()` / `client.AlertsAddTagsResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertsAddTagsResultV2(entopts) {
        const self = this;
        return new AlertsAddTagsResultV2Entity_1.AlertsAddTagsResultV2Entity(self, entopts);
    }
    // Entity access: `client.AlertsSetTagsResultV2().list()` / `client.AlertsSetTagsResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertsSetTagsResultV2(entopts) {
        const self = this;
        return new AlertsSetTagsResultV2Entity_1.AlertsSetTagsResultV2Entity(self, entopts);
    }
    // Entity access: `client.AlertsTransitionIncidentAlertResultV2().list()` / `client.AlertsTransitionIncidentAlertResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AlertsTransitionIncidentAlertResultV2(entopts) {
        const self = this;
        return new AlertsTransitionIncidentAlertResultV2Entity_1.AlertsTransitionIncidentAlertResultV2Entity(self, entopts);
    }
    // Entity access: `client.AnnouncementRule().list()` / `client.AnnouncementRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnnouncementRule(entopts) {
        const self = this;
        return new AnnouncementRuleEntity_1.AnnouncementRuleEntity(self, entopts);
    }
    // Entity access: `client.AnnouncementTemplate().list()` / `client.AnnouncementTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AnnouncementTemplate(entopts) {
        const self = this;
        return new AnnouncementTemplateEntity_1.AnnouncementTemplateEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.CallRoute().list()` / `client.CallRoute().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallRoute(entopts) {
        const self = this;
        return new CallRouteEntity_1.CallRouteEntity(self, entopts);
    }
    // Entity access: `client.CallRouteAllowedCaller().list()` / `client.CallRouteAllowedCaller().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallRouteAllowedCaller(entopts) {
        const self = this;
        return new CallRouteAllowedCallerEntity_1.CallRouteAllowedCallerEntity(self, entopts);
    }
    // Entity access: `client.CallRouteOption().list()` / `client.CallRouteOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallRouteOption(entopts) {
        const self = this;
        return new CallRouteOptionEntity_1.CallRouteOptionEntity(self, entopts);
    }
    // Entity access: `client.CallSession().list()` / `client.CallSession().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallSession(entopts) {
        const self = this;
        return new CallSessionEntity_1.CallSessionEntity(self, entopts);
    }
    // Entity access: `client.CallTranscriptEntry().list()` / `client.CallTranscriptEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CallTranscriptEntry(entopts) {
        const self = this;
        return new CallTranscriptEntryEntity_1.CallTranscriptEntryEntity(self, entopts);
    }
    // Entity access: `client.CatalogEntry().list()` / `client.CatalogEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CatalogEntry(entopts) {
        const self = this;
        return new CatalogEntryEntity_1.CatalogEntryEntity(self, entopts);
    }
    // Entity access: `client.CatalogResource().list()` / `client.CatalogResource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CatalogResource(entopts) {
        const self = this;
        return new CatalogResourceEntity_1.CatalogResourceEntity(self, entopts);
    }
    // Entity access: `client.CatalogType().list()` / `client.CatalogType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CatalogType(entopts) {
        const self = this;
        return new CatalogTypeEntity_1.CatalogTypeEntity(self, entopts);
    }
    // Entity access: `client.CatalogTypeSchema().list()` / `client.CatalogTypeSchema().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CatalogTypeSchema(entopts) {
        const self = this;
        return new CatalogTypeSchemaEntity_1.CatalogTypeSchemaEntity(self, entopts);
    }
    // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomField(entopts) {
        const self = this;
        return new CustomFieldEntity_1.CustomFieldEntity(self, entopts);
    }
    // Entity access: `client.CustomFieldOption().list()` / `client.CustomFieldOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CustomFieldOption(entopts) {
        const self = this;
        return new CustomFieldOptionEntity_1.CustomFieldOptionEntity(self, entopts);
    }
    // Entity access: `client.Escalation().list()` / `client.Escalation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Escalation(entopts) {
        const self = this;
        return new EscalationEntity_1.EscalationEntity(self, entopts);
    }
    // Entity access: `client.EscalationPath().list()` / `client.EscalationPath().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EscalationPath(entopts) {
        const self = this;
        return new EscalationPathEntity_1.EscalationPathEntity(self, entopts);
    }
    // Entity access: `client.EscalationPathTemplate().list()` / `client.EscalationPathTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EscalationPathTemplate(entopts) {
        const self = this;
        return new EscalationPathTemplateEntity_1.EscalationPathTemplateEntity(self, entopts);
    }
    // Entity access: `client.EscalationsCheckEscalationPermissionsResultV2().list()` / `client.EscalationsCheckEscalationPermissionsResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EscalationsCheckEscalationPermissionsResultV2(entopts) {
        const self = this;
        return new EscalationsCheckEscalationPermissionsResultV2Entity_1.EscalationsCheckEscalationPermissionsResultV2Entity(self, entopts);
    }
    // Entity access: `client.EscalationsReassignEscalationResultV2().list()` / `client.EscalationsReassignEscalationResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EscalationsReassignEscalationResultV2(entopts) {
        const self = this;
        return new EscalationsReassignEscalationResultV2Entity_1.EscalationsReassignEscalationResultV2Entity(self, entopts);
    }
    // Entity access: `client.FollowUp().list()` / `client.FollowUp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FollowUp(entopts) {
        const self = this;
        return new FollowUpEntity_1.FollowUpEntity(self, entopts);
    }
    // Entity access: `client.FollowUpsConnectExternalIssueResultV3().list()` / `client.FollowUpsConnectExternalIssueResultV3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FollowUpsConnectExternalIssueResultV3(entopts) {
        const self = this;
        return new FollowUpsConnectExternalIssueResultV3Entity_1.FollowUpsConnectExternalIssueResultV3Entity(self, entopts);
    }
    // Entity access: `client.FollowUpsCreateFromLinkResultV3().list()` / `client.FollowUpsCreateFromLinkResultV3().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    FollowUpsCreateFromLinkResultV3(entopts) {
        const self = this;
        return new FollowUpsCreateFromLinkResultV3Entity_1.FollowUpsCreateFromLinkResultV3Entity(self, entopts);
    }
    // Entity access: `client.Identity().list()` / `client.Identity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Identity(entopts) {
        const self = this;
        return new IdentityEntity_1.IdentityEntity(self, entopts);
    }
    // Entity access: `client.Incident().list()` / `client.Incident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Incident(entopts) {
        const self = this;
        return new IncidentEntity_1.IncidentEntity(self, entopts);
    }
    // Entity access: `client.IncidentActivityLogEntry().list()` / `client.IncidentActivityLogEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentActivityLogEntry(entopts) {
        const self = this;
        return new IncidentActivityLogEntryEntity_1.IncidentActivityLogEntryEntity(self, entopts);
    }
    // Entity access: `client.IncidentAttachment().list()` / `client.IncidentAttachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentAttachment(entopts) {
        const self = this;
        return new IncidentAttachmentEntity_1.IncidentAttachmentEntity(self, entopts);
    }
    // Entity access: `client.IncidentForm().list()` / `client.IncidentForm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentForm(entopts) {
        const self = this;
        return new IncidentFormEntity_1.IncidentFormEntity(self, entopts);
    }
    // Entity access: `client.IncidentMembership().list()` / `client.IncidentMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentMembership(entopts) {
        const self = this;
        return new IncidentMembershipEntity_1.IncidentMembershipEntity(self, entopts);
    }
    // Entity access: `client.IncidentParticipant().list()` / `client.IncidentParticipant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentParticipant(entopts) {
        const self = this;
        return new IncidentParticipantEntity_1.IncidentParticipantEntity(self, entopts);
    }
    // Entity access: `client.IncidentParticipantWorkload().list()` / `client.IncidentParticipantWorkload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentParticipantWorkload(entopts) {
        const self = this;
        return new IncidentParticipantWorkloadEntity_1.IncidentParticipantWorkloadEntity(self, entopts);
    }
    // Entity access: `client.IncidentRelationship().list()` / `client.IncidentRelationship().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentRelationship(entopts) {
        const self = this;
        return new IncidentRelationshipEntity_1.IncidentRelationshipEntity(self, entopts);
    }
    // Entity access: `client.IncidentRole().list()` / `client.IncidentRole().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentRole(entopts) {
        const self = this;
        return new IncidentRoleEntity_1.IncidentRoleEntity(self, entopts);
    }
    // Entity access: `client.IncidentStatus().list()` / `client.IncidentStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentStatus(entopts) {
        const self = this;
        return new IncidentStatusEntity_1.IncidentStatusEntity(self, entopts);
    }
    // Entity access: `client.IncidentTeamMembership().list()` / `client.IncidentTeamMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTeamMembership(entopts) {
        const self = this;
        return new IncidentTeamMembershipEntity_1.IncidentTeamMembershipEntity(self, entopts);
    }
    // Entity access: `client.IncidentTeamMembershipsV1().list()` / `client.IncidentTeamMembershipsV1().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTeamMembershipsV1(entopts) {
        const self = this;
        return new IncidentTeamMembershipsV1Entity_1.IncidentTeamMembershipsV1Entity(self, entopts);
    }
    // Entity access: `client.IncidentTemplate().list()` / `client.IncidentTemplate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTemplate(entopts) {
        const self = this;
        return new IncidentTemplateEntity_1.IncidentTemplateEntity(self, entopts);
    }
    // Entity access: `client.IncidentTemplatesValidateResultV1().list()` / `client.IncidentTemplatesValidateResultV1().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTemplatesValidateResultV1(entopts) {
        const self = this;
        return new IncidentTemplatesValidateResultV1Entity_1.IncidentTemplatesValidateResultV1Entity(self, entopts);
    }
    // Entity access: `client.IncidentTimelineItem().list()` / `client.IncidentTimelineItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTimelineItem(entopts) {
        const self = this;
        return new IncidentTimelineItemEntity_1.IncidentTimelineItemEntity(self, entopts);
    }
    // Entity access: `client.IncidentTimestamp().list()` / `client.IncidentTimestamp().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentTimestamp(entopts) {
        const self = this;
        return new IncidentTimestampEntity_1.IncidentTimestampEntity(self, entopts);
    }
    // Entity access: `client.IncidentType().list()` / `client.IncidentType().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentType(entopts) {
        const self = this;
        return new IncidentTypeEntity_1.IncidentTypeEntity(self, entopts);
    }
    // Entity access: `client.IncidentUpdate().list()` / `client.IncidentUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IncidentUpdate(entopts) {
        const self = this;
        return new IncidentUpdateEntity_1.IncidentUpdateEntity(self, entopts);
    }
    // Entity access: `client.IpAllowlist().list()` / `client.IpAllowlist().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IpAllowlist(entopts) {
        const self = this;
        return new IpAllowlistEntity_1.IpAllowlistEntity(self, entopts);
    }
    // Entity access: `client.IpRange().list()` / `client.IpRange().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    IpRange(entopts) {
        const self = this;
        return new IpRangeEntity_1.IpRangeEntity(self, entopts);
    }
    // Entity access: `client.MaintenanceWindow().list()` / `client.MaintenanceWindow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    MaintenanceWindow(entopts) {
        const self = this;
        return new MaintenanceWindowEntity_1.MaintenanceWindowEntity(self, entopts);
    }
    // Entity access: `client.ManagedResource().list()` / `client.ManagedResource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ManagedResource(entopts) {
        const self = this;
        return new ManagedResourceEntity_1.ManagedResourceEntity(self, entopts);
    }
    // Entity access: `client.OnCallNotificationMethodPublicV2().list()` / `client.OnCallNotificationMethodPublicV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnCallNotificationMethodPublicV2(entopts) {
        const self = this;
        return new OnCallNotificationMethodPublicV2Entity_1.OnCallNotificationMethodPublicV2Entity(self, entopts);
    }
    // Entity access: `client.OnCallNotificationPause().list()` / `client.OnCallNotificationPause().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnCallNotificationPause(entopts) {
        const self = this;
        return new OnCallNotificationPauseEntity_1.OnCallNotificationPauseEntity(self, entopts);
    }
    // Entity access: `client.OnCallNotificationRulePublicV2().list()` / `client.OnCallNotificationRulePublicV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OnCallNotificationRulePublicV2(entopts) {
        const self = this;
        return new OnCallNotificationRulePublicV2Entity_1.OnCallNotificationRulePublicV2Entity(self, entopts);
    }
    // Entity access: `client.PayConfig().list()` / `client.PayConfig().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayConfig(entopts) {
        const self = this;
        return new PayConfigEntity_1.PayConfigEntity(self, entopts);
    }
    // Entity access: `client.PayConfigOneOffRule().list()` / `client.PayConfigOneOffRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayConfigOneOffRule(entopts) {
        const self = this;
        return new PayConfigOneOffRuleEntity_1.PayConfigOneOffRuleEntity(self, entopts);
    }
    // Entity access: `client.PayConfigWeeklyRule().list()` / `client.PayConfigWeeklyRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayConfigWeeklyRule(entopts) {
        const self = this;
        return new PayConfigWeeklyRuleEntity_1.PayConfigWeeklyRuleEntity(self, entopts);
    }
    // Entity access: `client.PayReport().list()` / `client.PayReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayReport(entopts) {
        const self = this;
        return new PayReportEntity_1.PayReportEntity(self, entopts);
    }
    // Entity access: `client.PayReportsPublishResultV2().list()` / `client.PayReportsPublishResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayReportsPublishResultV2(entopts) {
        const self = this;
        return new PayReportsPublishResultV2Entity_1.PayReportsPublishResultV2Entity(self, entopts);
    }
    // Entity access: `client.PayReportsUnpublishResultV2().list()` / `client.PayReportsUnpublishResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayReportsUnpublishResultV2(entopts) {
        const self = this;
        return new PayReportsUnpublishResultV2Entity_1.PayReportsUnpublishResultV2Entity(self, entopts);
    }
    // Entity access: `client.PayReportsV2().list()` / `client.PayReportsV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PayReportsV2(entopts) {
        const self = this;
        return new PayReportsV2Entity_1.PayReportsV2Entity(self, entopts);
    }
    // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Policy(entopts) {
        const self = this;
        return new PolicyEntity_1.PolicyEntity(self, entopts);
    }
    // Entity access: `client.PolicyFinding().list()` / `client.PolicyFinding().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PolicyFinding(entopts) {
        const self = this;
        return new PolicyFindingEntity_1.PolicyFindingEntity(self, entopts);
    }
    // Entity access: `client.PolicyFindingsDismissResultV2().list()` / `client.PolicyFindingsDismissResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PolicyFindingsDismissResultV2(entopts) {
        const self = this;
        return new PolicyFindingsDismissResultV2Entity_1.PolicyFindingsDismissResultV2Entity(self, entopts);
    }
    // Entity access: `client.PolicyFindingsRestoreResultV2().list()` / `client.PolicyFindingsRestoreResultV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PolicyFindingsRestoreResultV2(entopts) {
        const self = this;
        return new PolicyFindingsRestoreResultV2Entity_1.PolicyFindingsRestoreResultV2Entity(self, entopts);
    }
    // Entity access: `client.PostmortemDocument().list()` / `client.PostmortemDocument().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PostmortemDocument(entopts) {
        const self = this;
        return new PostmortemDocumentEntity_1.PostmortemDocumentEntity(self, entopts);
    }
    // Entity access: `client.Schedule().list()` / `client.Schedule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Schedule(entopts) {
        const self = this;
        return new ScheduleEntity_1.ScheduleEntity(self, entopts);
    }
    // Entity access: `client.ScheduleEntriesListPayloadV2().list()` / `client.ScheduleEntriesListPayloadV2().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleEntriesListPayloadV2(entopts) {
        const self = this;
        return new ScheduleEntriesListPayloadV2Entity_1.ScheduleEntriesListPayloadV2Entity(self, entopts);
    }
    // Entity access: `client.ScheduleEntry().list()` / `client.ScheduleEntry().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleEntry(entopts) {
        const self = this;
        return new ScheduleEntryEntity_1.ScheduleEntryEntity(self, entopts);
    }
    // Entity access: `client.ScheduleOverride().list()` / `client.ScheduleOverride().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleOverride(entopts) {
        const self = this;
        return new ScheduleOverrideEntity_1.ScheduleOverrideEntity(self, entopts);
    }
    // Entity access: `client.ScheduleReplica().list()` / `client.ScheduleReplica().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleReplica(entopts) {
        const self = this;
        return new ScheduleReplicaEntity_1.ScheduleReplicaEntity(self, entopts);
    }
    // Entity access: `client.ScheduleSyncRule().list()` / `client.ScheduleSyncRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleSyncRule(entopts) {
        const self = this;
        return new ScheduleSyncRuleEntity_1.ScheduleSyncRuleEntity(self, entopts);
    }
    // Entity access: `client.ScheduleSyncTarget().list()` / `client.ScheduleSyncTarget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ScheduleSyncTarget(entopts) {
        const self = this;
        return new ScheduleSyncTargetEntity_1.ScheduleSyncTargetEntity(self, entopts);
    }
    // Entity access: `client.Secret().list()` / `client.Secret().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Secret(entopts) {
        const self = this;
        return new SecretEntity_1.SecretEntity(self, entopts);
    }
    // Entity access: `client.Severity().list()` / `client.Severity().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Severity(entopts) {
        const self = this;
        return new SeverityEntity_1.SeverityEntity(self, entopts);
    }
    // Entity access: `client.StatusPage().list()` / `client.StatusPage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPage(entopts) {
        const self = this;
        return new StatusPageEntity_1.StatusPageEntity(self, entopts);
    }
    // Entity access: `client.StatusPageComponent().list()` / `client.StatusPageComponent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageComponent(entopts) {
        const self = this;
        return new StatusPageComponentEntity_1.StatusPageComponentEntity(self, entopts);
    }
    // Entity access: `client.StatusPageComponentAvailability().list()` / `client.StatusPageComponentAvailability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageComponentAvailability(entopts) {
        const self = this;
        return new StatusPageComponentAvailabilityEntity_1.StatusPageComponentAvailabilityEntity(self, entopts);
    }
    // Entity access: `client.StatusPageIncident().list()` / `client.StatusPageIncident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageIncident(entopts) {
        const self = this;
        return new StatusPageIncidentEntity_1.StatusPageIncidentEntity(self, entopts);
    }
    // Entity access: `client.StatusPageIncidentUpdate().list()` / `client.StatusPageIncidentUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageIncidentUpdate(entopts) {
        const self = this;
        return new StatusPageIncidentUpdateEntity_1.StatusPageIncidentUpdateEntity(self, entopts);
    }
    // Entity access: `client.StatusPageLinkedResponseIncident().list()` / `client.StatusPageLinkedResponseIncident().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageLinkedResponseIncident(entopts) {
        const self = this;
        return new StatusPageLinkedResponseIncidentEntity_1.StatusPageLinkedResponseIncidentEntity(self, entopts);
    }
    // Entity access: `client.StatusPageMaintenance().list()` / `client.StatusPageMaintenance().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageMaintenance(entopts) {
        const self = this;
        return new StatusPageMaintenanceEntity_1.StatusPageMaintenanceEntity(self, entopts);
    }
    // Entity access: `client.StatusPageMaintenanceUpdate().list()` / `client.StatusPageMaintenanceUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageMaintenanceUpdate(entopts) {
        const self = this;
        return new StatusPageMaintenanceUpdateEntity_1.StatusPageMaintenanceUpdateEntity(self, entopts);
    }
    // Entity access: `client.StatusPageStructure().list()` / `client.StatusPageStructure().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusPageStructure(entopts) {
        const self = this;
        return new StatusPageStructureEntity_1.StatusPageStructureEntity(self, entopts);
    }
    // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Team(entopts) {
        const self = this;
        return new TeamEntity_1.TeamEntity(self, entopts);
    }
    // Entity access: `client.TelemetryDataSource().list()` / `client.TelemetryDataSource().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    TelemetryDataSource(entopts) {
        const self = this;
        return new TelemetryDataSourceEntity_1.TelemetryDataSourceEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.Workflow().list()` / `client.Workflow().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Workflow(entopts) {
        const self = this;
        return new WorkflowEntity_1.WorkflowEntity(self, entopts);
    }
    // Entity access: `client.WorkflowRun().list()` / `client.WorkflowRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WorkflowRun(entopts) {
        const self = this;
        return new WorkflowRunEntity_1.WorkflowRunEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new IncidentIoSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return IncidentIoSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'IncidentIo' };
    }
    toString() {
        return 'IncidentIo ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.IncidentIoSDK = IncidentIoSDK;
const SDK = IncidentIoSDK;
exports.SDK = SDK;
//# sourceMappingURL=IncidentIoSDK.js.map
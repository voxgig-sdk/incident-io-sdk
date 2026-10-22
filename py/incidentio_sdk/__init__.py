# IncidentIo SDK

from incidentio_sdk.utility.voxgig_struct import voxgig_struct as vs
from incidentio_sdk.core.utility_type import IncidentIoUtility
from incidentio_sdk.core.spec import IncidentIoSpec
from incidentio_sdk.core import helpers
from incidentio_sdk.utility.prepare_method import allowed
from incidentio_sdk.utility.result_body import unreadable_body

# Load utility registration (populates Utility._registrar)
from incidentio_sdk.utility import register

# Load features
from incidentio_sdk.feature.base_feature import IncidentIoBaseFeature
from incidentio_sdk.features import _has_feature, _make_feature


class IncidentIoSDK:
    # The options hold the credential. A slot keeps them reachable as
    # `client.options` and out of `vars(client)` and every attribute dump;
    # the dict entry keeps the instance open for everything else.
    __slots__ = ("_options", "__dict__")

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self._options = None

        utility = IncidentIoUtility()
        self._utility = utility

        from incidentio_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    @property
    def options(self):
        return self._options

    @options.setter
    def options(self, value):
        self._options = value

    def __repr__(self):
        return "IncidentIoSDK(mode=" + repr(self.mode) + ")"

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return IncidentIoUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def secrets(self):
        _s = getattr(self, "_secrets", None)
        return None if _s is None else _s.sekreto()

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        if getattr(self, "_secrets", None) is not None:
            self._secrets.resolve()

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"
        method = method.upper()

        allow_method = vs.getpath(options, "allow.method")
        if not allowed(allow_method, method):
            raise ctx.make_error("spec_method_allow",
                'Method "' + method +
                '" not allowed by SDK option allow.method value: "' + str(allow_method) + '"')

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = IncidentIoSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        return allowed(vs.getpath(self.options, "allow.op"), op)

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "IncidentIoSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            # That error never passes through make_error, so it is cleaned.
            return {"ok": False, "err": utility.clean(self._rootctx, err)}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": utility.clean(ctx, fetch_err)}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            body_err = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None
                if vs.getprop(fetched, "unreadable") is True:
                    failed = None if 200 <= status < 300 else ctx.make_error(
                        "request_status",
                        "request: " + str(status) + ": " + str(vs.getprop(fetched, "statusText")))
                    body_err = unreadable_body(ctx, status, headers, vs.getprop(fetched, "body"),
                                               fetchdef.get("headers"), failed)

            out = {
                "ok": body_err is None and status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }
            if body_err is not None:
                out["err"] = utility.clean(ctx, body_err)
            return out

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("IncidentIoSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Action(self, data=None) -> "ActionEntity":
        """Entity factory: client.Action().list() / client.Action().load({"id": ...})."""
        from incidentio_sdk.entity.action_entity import ActionEntity
        return ActionEntity(self, data)


    def Alert(self, data=None) -> "AlertEntity":
        """Entity factory: client.Alert().list() / client.Alert().load({"id": ...})."""
        from incidentio_sdk.entity.alert_entity import AlertEntity
        return AlertEntity(self, data)


    def AlertAttribute(self, data=None) -> "AlertAttributeEntity":
        """Entity factory: client.AlertAttribute().list() / client.AlertAttribute().load({"id": ...})."""
        from incidentio_sdk.entity.alert_attribute_entity import AlertAttributeEntity
        return AlertAttributeEntity(self, data)


    def AlertEventsV2(self, data=None) -> "AlertEventsV2Entity":
        """Entity factory: client.AlertEventsV2().list() / client.AlertEventsV2().load({"id": ...})."""
        from incidentio_sdk.entity.alert_events_v2_entity import AlertEventsV2Entity
        return AlertEventsV2Entity(self, data)


    def AlertNote(self, data=None) -> "AlertNoteEntity":
        """Entity factory: client.AlertNote().list() / client.AlertNote().load({"id": ...})."""
        from incidentio_sdk.entity.alert_note_entity import AlertNoteEntity
        return AlertNoteEntity(self, data)


    def AlertRoute(self, data=None) -> "AlertRouteEntity":
        """Entity factory: client.AlertRoute().list() / client.AlertRoute().load({"id": ...})."""
        from incidentio_sdk.entity.alert_route_entity import AlertRouteEntity
        return AlertRouteEntity(self, data)


    def AlertSource(self, data=None) -> "AlertSourceEntity":
        """Entity factory: client.AlertSource().list() / client.AlertSource().load({"id": ...})."""
        from incidentio_sdk.entity.alert_source_entity import AlertSourceEntity
        return AlertSourceEntity(self, data)


    def AlertSourcesV2(self, data=None) -> "AlertSourcesV2Entity":
        """Entity factory: client.AlertSourcesV2().list() / client.AlertSourcesV2().load({"id": ...})."""
        from incidentio_sdk.entity.alert_sources_v2_entity import AlertSourcesV2Entity
        return AlertSourcesV2Entity(self, data)


    def AlertTag(self, data=None) -> "AlertTagEntity":
        """Entity factory: client.AlertTag().list() / client.AlertTag().load({"id": ...})."""
        from incidentio_sdk.entity.alert_tag_entity import AlertTagEntity
        return AlertTagEntity(self, data)


    def AlertsAddTagsResultV2(self, data=None) -> "AlertsAddTagsResultV2Entity":
        """Entity factory: client.AlertsAddTagsResultV2().list() / client.AlertsAddTagsResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.alerts_add_tags_result_v2_entity import AlertsAddTagsResultV2Entity
        return AlertsAddTagsResultV2Entity(self, data)


    def AlertsSetTagsResultV2(self, data=None) -> "AlertsSetTagsResultV2Entity":
        """Entity factory: client.AlertsSetTagsResultV2().list() / client.AlertsSetTagsResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.alerts_set_tags_result_v2_entity import AlertsSetTagsResultV2Entity
        return AlertsSetTagsResultV2Entity(self, data)


    def AlertsTransitionIncidentAlertResultV2(self, data=None) -> "AlertsTransitionIncidentAlertResultV2Entity":
        """Entity factory: client.AlertsTransitionIncidentAlertResultV2().list() / client.AlertsTransitionIncidentAlertResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.alerts_transition_incident_alert_result_v2_entity import AlertsTransitionIncidentAlertResultV2Entity
        return AlertsTransitionIncidentAlertResultV2Entity(self, data)


    def AnnouncementRule(self, data=None) -> "AnnouncementRuleEntity":
        """Entity factory: client.AnnouncementRule().list() / client.AnnouncementRule().load({"id": ...})."""
        from incidentio_sdk.entity.announcement_rule_entity import AnnouncementRuleEntity
        return AnnouncementRuleEntity(self, data)


    def AnnouncementTemplate(self, data=None) -> "AnnouncementTemplateEntity":
        """Entity factory: client.AnnouncementTemplate().list() / client.AnnouncementTemplate().load({"id": ...})."""
        from incidentio_sdk.entity.announcement_template_entity import AnnouncementTemplateEntity
        return AnnouncementTemplateEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from incidentio_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def CallRoute(self, data=None) -> "CallRouteEntity":
        """Entity factory: client.CallRoute().list() / client.CallRoute().load({"id": ...})."""
        from incidentio_sdk.entity.call_route_entity import CallRouteEntity
        return CallRouteEntity(self, data)


    def CallRouteAllowedCaller(self, data=None) -> "CallRouteAllowedCallerEntity":
        """Entity factory: client.CallRouteAllowedCaller().list() / client.CallRouteAllowedCaller().load({"id": ...})."""
        from incidentio_sdk.entity.call_route_allowed_caller_entity import CallRouteAllowedCallerEntity
        return CallRouteAllowedCallerEntity(self, data)


    def CallRouteOption(self, data=None) -> "CallRouteOptionEntity":
        """Entity factory: client.CallRouteOption().list() / client.CallRouteOption().load({"id": ...})."""
        from incidentio_sdk.entity.call_route_option_entity import CallRouteOptionEntity
        return CallRouteOptionEntity(self, data)


    def CallSession(self, data=None) -> "CallSessionEntity":
        """Entity factory: client.CallSession().list() / client.CallSession().load({"id": ...})."""
        from incidentio_sdk.entity.call_session_entity import CallSessionEntity
        return CallSessionEntity(self, data)


    def CallTranscriptEntry(self, data=None) -> "CallTranscriptEntryEntity":
        """Entity factory: client.CallTranscriptEntry().list() / client.CallTranscriptEntry().load({"id": ...})."""
        from incidentio_sdk.entity.call_transcript_entry_entity import CallTranscriptEntryEntity
        return CallTranscriptEntryEntity(self, data)


    def CatalogEntry(self, data=None) -> "CatalogEntryEntity":
        """Entity factory: client.CatalogEntry().list() / client.CatalogEntry().load({"id": ...})."""
        from incidentio_sdk.entity.catalog_entry_entity import CatalogEntryEntity
        return CatalogEntryEntity(self, data)


    def CatalogResource(self, data=None) -> "CatalogResourceEntity":
        """Entity factory: client.CatalogResource().list() / client.CatalogResource().load({"id": ...})."""
        from incidentio_sdk.entity.catalog_resource_entity import CatalogResourceEntity
        return CatalogResourceEntity(self, data)


    def CatalogType(self, data=None) -> "CatalogTypeEntity":
        """Entity factory: client.CatalogType().list() / client.CatalogType().load({"id": ...})."""
        from incidentio_sdk.entity.catalog_type_entity import CatalogTypeEntity
        return CatalogTypeEntity(self, data)


    def CatalogTypeSchema(self, data=None) -> "CatalogTypeSchemaEntity":
        """Entity factory: client.CatalogTypeSchema().list() / client.CatalogTypeSchema().load({"id": ...})."""
        from incidentio_sdk.entity.catalog_type_schema_entity import CatalogTypeSchemaEntity
        return CatalogTypeSchemaEntity(self, data)


    def CatalogV3(self, data=None) -> "CatalogV3Entity":
        """Entity factory: client.CatalogV3().list() / client.CatalogV3().load({"id": ...})."""
        from incidentio_sdk.entity.catalog_v3_entity import CatalogV3Entity
        return CatalogV3Entity(self, data)


    def CustomField(self, data=None) -> "CustomFieldEntity":
        """Entity factory: client.CustomField().list() / client.CustomField().load({"id": ...})."""
        from incidentio_sdk.entity.custom_field_entity import CustomFieldEntity
        return CustomFieldEntity(self, data)


    def CustomFieldOption(self, data=None) -> "CustomFieldOptionEntity":
        """Entity factory: client.CustomFieldOption().list() / client.CustomFieldOption().load({"id": ...})."""
        from incidentio_sdk.entity.custom_field_option_entity import CustomFieldOptionEntity
        return CustomFieldOptionEntity(self, data)


    def Escalation(self, data=None) -> "EscalationEntity":
        """Entity factory: client.Escalation().list() / client.Escalation().load({"id": ...})."""
        from incidentio_sdk.entity.escalation_entity import EscalationEntity
        return EscalationEntity(self, data)


    def EscalationPath(self, data=None) -> "EscalationPathEntity":
        """Entity factory: client.EscalationPath().list() / client.EscalationPath().load({"id": ...})."""
        from incidentio_sdk.entity.escalation_path_entity import EscalationPathEntity
        return EscalationPathEntity(self, data)


    def EscalationPathTemplate(self, data=None) -> "EscalationPathTemplateEntity":
        """Entity factory: client.EscalationPathTemplate().list() / client.EscalationPathTemplate().load({"id": ...})."""
        from incidentio_sdk.entity.escalation_path_template_entity import EscalationPathTemplateEntity
        return EscalationPathTemplateEntity(self, data)


    def EscalationsCheckEscalationPermissionsResultV2(self, data=None) -> "EscalationsCheckEscalationPermissionsResultV2Entity":
        """Entity factory: client.EscalationsCheckEscalationPermissionsResultV2().list() / client.EscalationsCheckEscalationPermissionsResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.escalations_check_escalation_permissions_result_v2_entity import EscalationsCheckEscalationPermissionsResultV2Entity
        return EscalationsCheckEscalationPermissionsResultV2Entity(self, data)


    def EscalationsReassignEscalationResultV2(self, data=None) -> "EscalationsReassignEscalationResultV2Entity":
        """Entity factory: client.EscalationsReassignEscalationResultV2().list() / client.EscalationsReassignEscalationResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.escalations_reassign_escalation_result_v2_entity import EscalationsReassignEscalationResultV2Entity
        return EscalationsReassignEscalationResultV2Entity(self, data)


    def FollowUp(self, data=None) -> "FollowUpEntity":
        """Entity factory: client.FollowUp().list() / client.FollowUp().load({"id": ...})."""
        from incidentio_sdk.entity.follow_up_entity import FollowUpEntity
        return FollowUpEntity(self, data)


    def FollowUpsConnectExternalIssueResultV2(self, data=None) -> "FollowUpsConnectExternalIssueResultV2Entity":
        """Entity factory: client.FollowUpsConnectExternalIssueResultV2().list() / client.FollowUpsConnectExternalIssueResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.follow_ups_connect_external_issue_result_v2_entity import FollowUpsConnectExternalIssueResultV2Entity
        return FollowUpsConnectExternalIssueResultV2Entity(self, data)


    def FollowUpsConnectExternalIssueResultV3(self, data=None) -> "FollowUpsConnectExternalIssueResultV3Entity":
        """Entity factory: client.FollowUpsConnectExternalIssueResultV3().list() / client.FollowUpsConnectExternalIssueResultV3().load({"id": ...})."""
        from incidentio_sdk.entity.follow_ups_connect_external_issue_result_v3_entity import FollowUpsConnectExternalIssueResultV3Entity
        return FollowUpsConnectExternalIssueResultV3Entity(self, data)


    def FollowUpsCreateFromLinkResultV3(self, data=None) -> "FollowUpsCreateFromLinkResultV3Entity":
        """Entity factory: client.FollowUpsCreateFromLinkResultV3().list() / client.FollowUpsCreateFromLinkResultV3().load({"id": ...})."""
        from incidentio_sdk.entity.follow_ups_create_from_link_result_v3_entity import FollowUpsCreateFromLinkResultV3Entity
        return FollowUpsCreateFromLinkResultV3Entity(self, data)


    def HeartbeatV2(self, data=None) -> "HeartbeatV2Entity":
        """Entity factory: client.HeartbeatV2().list() / client.HeartbeatV2().load({"id": ...})."""
        from incidentio_sdk.entity.heartbeat_v2_entity import HeartbeatV2Entity
        return HeartbeatV2Entity(self, data)


    def Identity(self, data=None) -> "IdentityEntity":
        """Entity factory: client.Identity().list() / client.Identity().load({"id": ...})."""
        from incidentio_sdk.entity.identity_entity import IdentityEntity
        return IdentityEntity(self, data)


    def Incident(self, data=None) -> "IncidentEntity":
        """Entity factory: client.Incident().list() / client.Incident().load({"id": ...})."""
        from incidentio_sdk.entity.incident_entity import IncidentEntity
        return IncidentEntity(self, data)


    def IncidentActivityLogEntry(self, data=None) -> "IncidentActivityLogEntryEntity":
        """Entity factory: client.IncidentActivityLogEntry().list() / client.IncidentActivityLogEntry().load({"id": ...})."""
        from incidentio_sdk.entity.incident_activity_log_entry_entity import IncidentActivityLogEntryEntity
        return IncidentActivityLogEntryEntity(self, data)


    def IncidentAttachment(self, data=None) -> "IncidentAttachmentEntity":
        """Entity factory: client.IncidentAttachment().list() / client.IncidentAttachment().load({"id": ...})."""
        from incidentio_sdk.entity.incident_attachment_entity import IncidentAttachmentEntity
        return IncidentAttachmentEntity(self, data)


    def IncidentForm(self, data=None) -> "IncidentFormEntity":
        """Entity factory: client.IncidentForm().list() / client.IncidentForm().load({"id": ...})."""
        from incidentio_sdk.entity.incident_form_entity import IncidentFormEntity
        return IncidentFormEntity(self, data)


    def IncidentMembership(self, data=None) -> "IncidentMembershipEntity":
        """Entity factory: client.IncidentMembership().list() / client.IncidentMembership().load({"id": ...})."""
        from incidentio_sdk.entity.incident_membership_entity import IncidentMembershipEntity
        return IncidentMembershipEntity(self, data)


    def IncidentMembershipsV1(self, data=None) -> "IncidentMembershipsV1Entity":
        """Entity factory: client.IncidentMembershipsV1().list() / client.IncidentMembershipsV1().load({"id": ...})."""
        from incidentio_sdk.entity.incident_memberships_v1_entity import IncidentMembershipsV1Entity
        return IncidentMembershipsV1Entity(self, data)


    def IncidentParticipant(self, data=None) -> "IncidentParticipantEntity":
        """Entity factory: client.IncidentParticipant().list() / client.IncidentParticipant().load({"id": ...})."""
        from incidentio_sdk.entity.incident_participant_entity import IncidentParticipantEntity
        return IncidentParticipantEntity(self, data)


    def IncidentParticipantWorkload(self, data=None) -> "IncidentParticipantWorkloadEntity":
        """Entity factory: client.IncidentParticipantWorkload().list() / client.IncidentParticipantWorkload().load({"id": ...})."""
        from incidentio_sdk.entity.incident_participant_workload_entity import IncidentParticipantWorkloadEntity
        return IncidentParticipantWorkloadEntity(self, data)


    def IncidentRelationship(self, data=None) -> "IncidentRelationshipEntity":
        """Entity factory: client.IncidentRelationship().list() / client.IncidentRelationship().load({"id": ...})."""
        from incidentio_sdk.entity.incident_relationship_entity import IncidentRelationshipEntity
        return IncidentRelationshipEntity(self, data)


    def IncidentRole(self, data=None) -> "IncidentRoleEntity":
        """Entity factory: client.IncidentRole().list() / client.IncidentRole().load({"id": ...})."""
        from incidentio_sdk.entity.incident_role_entity import IncidentRoleEntity
        return IncidentRoleEntity(self, data)


    def IncidentStatus(self, data=None) -> "IncidentStatusEntity":
        """Entity factory: client.IncidentStatus().list() / client.IncidentStatus().load({"id": ...})."""
        from incidentio_sdk.entity.incident_status_entity import IncidentStatusEntity
        return IncidentStatusEntity(self, data)


    def IncidentTeamMembership(self, data=None) -> "IncidentTeamMembershipEntity":
        """Entity factory: client.IncidentTeamMembership().list() / client.IncidentTeamMembership().load({"id": ...})."""
        from incidentio_sdk.entity.incident_team_membership_entity import IncidentTeamMembershipEntity
        return IncidentTeamMembershipEntity(self, data)


    def IncidentTeamMembershipsV1(self, data=None) -> "IncidentTeamMembershipsV1Entity":
        """Entity factory: client.IncidentTeamMembershipsV1().list() / client.IncidentTeamMembershipsV1().load({"id": ...})."""
        from incidentio_sdk.entity.incident_team_memberships_v1_entity import IncidentTeamMembershipsV1Entity
        return IncidentTeamMembershipsV1Entity(self, data)


    def IncidentTemplate(self, data=None) -> "IncidentTemplateEntity":
        """Entity factory: client.IncidentTemplate().list() / client.IncidentTemplate().load({"id": ...})."""
        from incidentio_sdk.entity.incident_template_entity import IncidentTemplateEntity
        return IncidentTemplateEntity(self, data)


    def IncidentTemplatesValidateResultV1(self, data=None) -> "IncidentTemplatesValidateResultV1Entity":
        """Entity factory: client.IncidentTemplatesValidateResultV1().list() / client.IncidentTemplatesValidateResultV1().load({"id": ...})."""
        from incidentio_sdk.entity.incident_templates_validate_result_v1_entity import IncidentTemplatesValidateResultV1Entity
        return IncidentTemplatesValidateResultV1Entity(self, data)


    def IncidentTimelineItem(self, data=None) -> "IncidentTimelineItemEntity":
        """Entity factory: client.IncidentTimelineItem().list() / client.IncidentTimelineItem().load({"id": ...})."""
        from incidentio_sdk.entity.incident_timeline_item_entity import IncidentTimelineItemEntity
        return IncidentTimelineItemEntity(self, data)


    def IncidentTimestamp(self, data=None) -> "IncidentTimestampEntity":
        """Entity factory: client.IncidentTimestamp().list() / client.IncidentTimestamp().load({"id": ...})."""
        from incidentio_sdk.entity.incident_timestamp_entity import IncidentTimestampEntity
        return IncidentTimestampEntity(self, data)


    def IncidentType(self, data=None) -> "IncidentTypeEntity":
        """Entity factory: client.IncidentType().list() / client.IncidentType().load({"id": ...})."""
        from incidentio_sdk.entity.incident_type_entity import IncidentTypeEntity
        return IncidentTypeEntity(self, data)


    def IncidentUpdate(self, data=None) -> "IncidentUpdateEntity":
        """Entity factory: client.IncidentUpdate().list() / client.IncidentUpdate().load({"id": ...})."""
        from incidentio_sdk.entity.incident_update_entity import IncidentUpdateEntity
        return IncidentUpdateEntity(self, data)


    def IncidentsImportPostmortemDocumentResultV2(self, data=None) -> "IncidentsImportPostmortemDocumentResultV2Entity":
        """Entity factory: client.IncidentsImportPostmortemDocumentResultV2().list() / client.IncidentsImportPostmortemDocumentResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.incidents_import_postmortem_document_result_v2_entity import IncidentsImportPostmortemDocumentResultV2Entity
        return IncidentsImportPostmortemDocumentResultV2Entity(self, data)


    def IpAllowlist(self, data=None) -> "IpAllowlistEntity":
        """Entity factory: client.IpAllowlist().list() / client.IpAllowlist().load({"id": ...})."""
        from incidentio_sdk.entity.ip_allowlist_entity import IpAllowlistEntity
        return IpAllowlistEntity(self, data)


    def IpRange(self, data=None) -> "IpRangeEntity":
        """Entity factory: client.IpRange().list() / client.IpRange().load({"id": ...})."""
        from incidentio_sdk.entity.ip_range_entity import IpRangeEntity
        return IpRangeEntity(self, data)


    def MaintenanceWindow(self, data=None) -> "MaintenanceWindowEntity":
        """Entity factory: client.MaintenanceWindow().list() / client.MaintenanceWindow().load({"id": ...})."""
        from incidentio_sdk.entity.maintenance_window_entity import MaintenanceWindowEntity
        return MaintenanceWindowEntity(self, data)


    def ManagedResource(self, data=None) -> "ManagedResourceEntity":
        """Entity factory: client.ManagedResource().list() / client.ManagedResource().load({"id": ...})."""
        from incidentio_sdk.entity.managed_resource_entity import ManagedResourceEntity
        return ManagedResourceEntity(self, data)


    def OnCallNotificationMethodPublicV2(self, data=None) -> "OnCallNotificationMethodPublicV2Entity":
        """Entity factory: client.OnCallNotificationMethodPublicV2().list() / client.OnCallNotificationMethodPublicV2().load({"id": ...})."""
        from incidentio_sdk.entity.on_call_notification_method_public_v2_entity import OnCallNotificationMethodPublicV2Entity
        return OnCallNotificationMethodPublicV2Entity(self, data)


    def OnCallNotificationPause(self, data=None) -> "OnCallNotificationPauseEntity":
        """Entity factory: client.OnCallNotificationPause().list() / client.OnCallNotificationPause().load({"id": ...})."""
        from incidentio_sdk.entity.on_call_notification_pause_entity import OnCallNotificationPauseEntity
        return OnCallNotificationPauseEntity(self, data)


    def OnCallNotificationRulePublicV2(self, data=None) -> "OnCallNotificationRulePublicV2Entity":
        """Entity factory: client.OnCallNotificationRulePublicV2().list() / client.OnCallNotificationRulePublicV2().load({"id": ...})."""
        from incidentio_sdk.entity.on_call_notification_rule_public_v2_entity import OnCallNotificationRulePublicV2Entity
        return OnCallNotificationRulePublicV2Entity(self, data)


    def PayConfig(self, data=None) -> "PayConfigEntity":
        """Entity factory: client.PayConfig().list() / client.PayConfig().load({"id": ...})."""
        from incidentio_sdk.entity.pay_config_entity import PayConfigEntity
        return PayConfigEntity(self, data)


    def PayConfigOneOffRule(self, data=None) -> "PayConfigOneOffRuleEntity":
        """Entity factory: client.PayConfigOneOffRule().list() / client.PayConfigOneOffRule().load({"id": ...})."""
        from incidentio_sdk.entity.pay_config_one_off_rule_entity import PayConfigOneOffRuleEntity
        return PayConfigOneOffRuleEntity(self, data)


    def PayConfigWeeklyRule(self, data=None) -> "PayConfigWeeklyRuleEntity":
        """Entity factory: client.PayConfigWeeklyRule().list() / client.PayConfigWeeklyRule().load({"id": ...})."""
        from incidentio_sdk.entity.pay_config_weekly_rule_entity import PayConfigWeeklyRuleEntity
        return PayConfigWeeklyRuleEntity(self, data)


    def PayReport(self, data=None) -> "PayReportEntity":
        """Entity factory: client.PayReport().list() / client.PayReport().load({"id": ...})."""
        from incidentio_sdk.entity.pay_report_entity import PayReportEntity
        return PayReportEntity(self, data)


    def PayReportsPublishResultV2(self, data=None) -> "PayReportsPublishResultV2Entity":
        """Entity factory: client.PayReportsPublishResultV2().list() / client.PayReportsPublishResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.pay_reports_publish_result_v2_entity import PayReportsPublishResultV2Entity
        return PayReportsPublishResultV2Entity(self, data)


    def PayReportsUnpublishResultV2(self, data=None) -> "PayReportsUnpublishResultV2Entity":
        """Entity factory: client.PayReportsUnpublishResultV2().list() / client.PayReportsUnpublishResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.pay_reports_unpublish_result_v2_entity import PayReportsUnpublishResultV2Entity
        return PayReportsUnpublishResultV2Entity(self, data)


    def PayReportsV2(self, data=None) -> "PayReportsV2Entity":
        """Entity factory: client.PayReportsV2().list() / client.PayReportsV2().load({"id": ...})."""
        from incidentio_sdk.entity.pay_reports_v2_entity import PayReportsV2Entity
        return PayReportsV2Entity(self, data)


    def Policy(self, data=None) -> "PolicyEntity":
        """Entity factory: client.Policy().list() / client.Policy().load({"id": ...})."""
        from incidentio_sdk.entity.policy_entity import PolicyEntity
        return PolicyEntity(self, data)


    def PolicyFinding(self, data=None) -> "PolicyFindingEntity":
        """Entity factory: client.PolicyFinding().list() / client.PolicyFinding().load({"id": ...})."""
        from incidentio_sdk.entity.policy_finding_entity import PolicyFindingEntity
        return PolicyFindingEntity(self, data)


    def PolicyFindingsDismissResultV2(self, data=None) -> "PolicyFindingsDismissResultV2Entity":
        """Entity factory: client.PolicyFindingsDismissResultV2().list() / client.PolicyFindingsDismissResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.policy_findings_dismiss_result_v2_entity import PolicyFindingsDismissResultV2Entity
        return PolicyFindingsDismissResultV2Entity(self, data)


    def PolicyFindingsRestoreResultV2(self, data=None) -> "PolicyFindingsRestoreResultV2Entity":
        """Entity factory: client.PolicyFindingsRestoreResultV2().list() / client.PolicyFindingsRestoreResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.policy_findings_restore_result_v2_entity import PolicyFindingsRestoreResultV2Entity
        return PolicyFindingsRestoreResultV2Entity(self, data)


    def PostmortemDocument(self, data=None) -> "PostmortemDocumentEntity":
        """Entity factory: client.PostmortemDocument().list() / client.PostmortemDocument().load({"id": ...})."""
        from incidentio_sdk.entity.postmortem_document_entity import PostmortemDocumentEntity
        return PostmortemDocumentEntity(self, data)


    def PostmortemDocumentsAttachResultV1(self, data=None) -> "PostmortemDocumentsAttachResultV1Entity":
        """Entity factory: client.PostmortemDocumentsAttachResultV1().list() / client.PostmortemDocumentsAttachResultV1().load({"id": ...})."""
        from incidentio_sdk.entity.postmortem_documents_attach_result_v1_entity import PostmortemDocumentsAttachResultV1Entity
        return PostmortemDocumentsAttachResultV1Entity(self, data)


    def PostmortemDocumentsShowContentResultV1(self, data=None) -> "PostmortemDocumentsShowContentResultV1Entity":
        """Entity factory: client.PostmortemDocumentsShowContentResultV1().list() / client.PostmortemDocumentsShowContentResultV1().load({"id": ...})."""
        from incidentio_sdk.entity.postmortem_documents_show_content_result_v1_entity import PostmortemDocumentsShowContentResultV1Entity
        return PostmortemDocumentsShowContentResultV1Entity(self, data)


    def Schedule(self, data=None) -> "ScheduleEntity":
        """Entity factory: client.Schedule().list() / client.Schedule().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_entity import ScheduleEntity
        return ScheduleEntity(self, data)


    def ScheduleEntriesListPayloadV2(self, data=None) -> "ScheduleEntriesListPayloadV2Entity":
        """Entity factory: client.ScheduleEntriesListPayloadV2().list() / client.ScheduleEntriesListPayloadV2().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_entries_list_payload_v2_entity import ScheduleEntriesListPayloadV2Entity
        return ScheduleEntriesListPayloadV2Entity(self, data)


    def ScheduleEntry(self, data=None) -> "ScheduleEntryEntity":
        """Entity factory: client.ScheduleEntry().list() / client.ScheduleEntry().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_entry_entity import ScheduleEntryEntity
        return ScheduleEntryEntity(self, data)


    def ScheduleOverride(self, data=None) -> "ScheduleOverrideEntity":
        """Entity factory: client.ScheduleOverride().list() / client.ScheduleOverride().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_override_entity import ScheduleOverrideEntity
        return ScheduleOverrideEntity(self, data)


    def ScheduleReplica(self, data=None) -> "ScheduleReplicaEntity":
        """Entity factory: client.ScheduleReplica().list() / client.ScheduleReplica().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_replica_entity import ScheduleReplicaEntity
        return ScheduleReplicaEntity(self, data)


    def ScheduleSyncRule(self, data=None) -> "ScheduleSyncRuleEntity":
        """Entity factory: client.ScheduleSyncRule().list() / client.ScheduleSyncRule().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_sync_rule_entity import ScheduleSyncRuleEntity
        return ScheduleSyncRuleEntity(self, data)


    def ScheduleSyncTarget(self, data=None) -> "ScheduleSyncTargetEntity":
        """Entity factory: client.ScheduleSyncTarget().list() / client.ScheduleSyncTarget().load({"id": ...})."""
        from incidentio_sdk.entity.schedule_sync_target_entity import ScheduleSyncTargetEntity
        return ScheduleSyncTargetEntity(self, data)


    def Secret(self, data=None) -> "SecretEntity":
        """Entity factory: client.Secret().list() / client.Secret().load({"id": ...})."""
        from incidentio_sdk.entity.secret_entity import SecretEntity
        return SecretEntity(self, data)


    def Severity(self, data=None) -> "SeverityEntity":
        """Entity factory: client.Severity().list() / client.Severity().load({"id": ...})."""
        from incidentio_sdk.entity.severity_entity import SeverityEntity
        return SeverityEntity(self, data)


    def StatusPage(self, data=None) -> "StatusPageEntity":
        """Entity factory: client.StatusPage().list() / client.StatusPage().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_entity import StatusPageEntity
        return StatusPageEntity(self, data)


    def StatusPageComponent(self, data=None) -> "StatusPageComponentEntity":
        """Entity factory: client.StatusPageComponent().list() / client.StatusPageComponent().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_component_entity import StatusPageComponentEntity
        return StatusPageComponentEntity(self, data)


    def StatusPageComponentAvailability(self, data=None) -> "StatusPageComponentAvailabilityEntity":
        """Entity factory: client.StatusPageComponentAvailability().list() / client.StatusPageComponentAvailability().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_component_availability_entity import StatusPageComponentAvailabilityEntity
        return StatusPageComponentAvailabilityEntity(self, data)


    def StatusPageIncident(self, data=None) -> "StatusPageIncidentEntity":
        """Entity factory: client.StatusPageIncident().list() / client.StatusPageIncident().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_incident_entity import StatusPageIncidentEntity
        return StatusPageIncidentEntity(self, data)


    def StatusPageIncidentUpdate(self, data=None) -> "StatusPageIncidentUpdateEntity":
        """Entity factory: client.StatusPageIncidentUpdate().list() / client.StatusPageIncidentUpdate().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_incident_update_entity import StatusPageIncidentUpdateEntity
        return StatusPageIncidentUpdateEntity(self, data)


    def StatusPageLinkedResponseIncident(self, data=None) -> "StatusPageLinkedResponseIncidentEntity":
        """Entity factory: client.StatusPageLinkedResponseIncident().list() / client.StatusPageLinkedResponseIncident().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_linked_response_incident_entity import StatusPageLinkedResponseIncidentEntity
        return StatusPageLinkedResponseIncidentEntity(self, data)


    def StatusPageMaintenance(self, data=None) -> "StatusPageMaintenanceEntity":
        """Entity factory: client.StatusPageMaintenance().list() / client.StatusPageMaintenance().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_maintenance_entity import StatusPageMaintenanceEntity
        return StatusPageMaintenanceEntity(self, data)


    def StatusPageMaintenanceUpdate(self, data=None) -> "StatusPageMaintenanceUpdateEntity":
        """Entity factory: client.StatusPageMaintenanceUpdate().list() / client.StatusPageMaintenanceUpdate().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_maintenance_update_entity import StatusPageMaintenanceUpdateEntity
        return StatusPageMaintenanceUpdateEntity(self, data)


    def StatusPageStructure(self, data=None) -> "StatusPageStructureEntity":
        """Entity factory: client.StatusPageStructure().list() / client.StatusPageStructure().load({"id": ...})."""
        from incidentio_sdk.entity.status_page_structure_entity import StatusPageStructureEntity
        return StatusPageStructureEntity(self, data)


    def StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(self, data=None) -> "StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity":
        """Entity factory: client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2().list() / client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.status_pages_create_status_page_retrospective_incident_result_v2_entity import StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity
        return StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from incidentio_sdk.entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def TelemetryDataSource(self, data=None) -> "TelemetryDataSourceEntity":
        """Entity factory: client.TelemetryDataSource().list() / client.TelemetryDataSource().load({"id": ...})."""
        from incidentio_sdk.entity.telemetry_data_source_entity import TelemetryDataSourceEntity
        return TelemetryDataSourceEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from incidentio_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def UsersShowPagingProviderResultV2(self, data=None) -> "UsersShowPagingProviderResultV2Entity":
        """Entity factory: client.UsersShowPagingProviderResultV2().list() / client.UsersShowPagingProviderResultV2().load({"id": ...})."""
        from incidentio_sdk.entity.users_show_paging_provider_result_v2_entity import UsersShowPagingProviderResultV2Entity
        return UsersShowPagingProviderResultV2Entity(self, data)


    def UtilitiesV1(self, data=None) -> "UtilitiesV1Entity":
        """Entity factory: client.UtilitiesV1().list() / client.UtilitiesV1().load({"id": ...})."""
        from incidentio_sdk.entity.utilities_v1_entity import UtilitiesV1Entity
        return UtilitiesV1Entity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from incidentio_sdk.entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)


    def WorkflowRun(self, data=None) -> "WorkflowRunEntity":
        """Entity factory: client.WorkflowRun().list() / client.WorkflowRun().load({"id": ...})."""
        from incidentio_sdk.entity.workflow_run_entity import WorkflowRunEntity
        return WorkflowRunEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "IncidentIoSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from incidentio_sdk.entity.action_entity import ActionEntity
    from incidentio_sdk.entity.alert_entity import AlertEntity
    from incidentio_sdk.entity.alert_attribute_entity import AlertAttributeEntity
    from incidentio_sdk.entity.alert_events_v2_entity import AlertEventsV2Entity
    from incidentio_sdk.entity.alert_note_entity import AlertNoteEntity
    from incidentio_sdk.entity.alert_route_entity import AlertRouteEntity
    from incidentio_sdk.entity.alert_source_entity import AlertSourceEntity
    from incidentio_sdk.entity.alert_sources_v2_entity import AlertSourcesV2Entity
    from incidentio_sdk.entity.alert_tag_entity import AlertTagEntity
    from incidentio_sdk.entity.alerts_add_tags_result_v2_entity import AlertsAddTagsResultV2Entity
    from incidentio_sdk.entity.alerts_set_tags_result_v2_entity import AlertsSetTagsResultV2Entity
    from incidentio_sdk.entity.alerts_transition_incident_alert_result_v2_entity import AlertsTransitionIncidentAlertResultV2Entity
    from incidentio_sdk.entity.announcement_rule_entity import AnnouncementRuleEntity
    from incidentio_sdk.entity.announcement_template_entity import AnnouncementTemplateEntity
    from incidentio_sdk.entity.api_key_entity import ApiKeyEntity
    from incidentio_sdk.entity.call_route_entity import CallRouteEntity
    from incidentio_sdk.entity.call_route_allowed_caller_entity import CallRouteAllowedCallerEntity
    from incidentio_sdk.entity.call_route_option_entity import CallRouteOptionEntity
    from incidentio_sdk.entity.call_session_entity import CallSessionEntity
    from incidentio_sdk.entity.call_transcript_entry_entity import CallTranscriptEntryEntity
    from incidentio_sdk.entity.catalog_entry_entity import CatalogEntryEntity
    from incidentio_sdk.entity.catalog_resource_entity import CatalogResourceEntity
    from incidentio_sdk.entity.catalog_type_entity import CatalogTypeEntity
    from incidentio_sdk.entity.catalog_type_schema_entity import CatalogTypeSchemaEntity
    from incidentio_sdk.entity.catalog_v3_entity import CatalogV3Entity
    from incidentio_sdk.entity.custom_field_entity import CustomFieldEntity
    from incidentio_sdk.entity.custom_field_option_entity import CustomFieldOptionEntity
    from incidentio_sdk.entity.escalation_entity import EscalationEntity
    from incidentio_sdk.entity.escalation_path_entity import EscalationPathEntity
    from incidentio_sdk.entity.escalation_path_template_entity import EscalationPathTemplateEntity
    from incidentio_sdk.entity.escalations_check_escalation_permissions_result_v2_entity import EscalationsCheckEscalationPermissionsResultV2Entity
    from incidentio_sdk.entity.escalations_reassign_escalation_result_v2_entity import EscalationsReassignEscalationResultV2Entity
    from incidentio_sdk.entity.follow_up_entity import FollowUpEntity
    from incidentio_sdk.entity.follow_ups_connect_external_issue_result_v2_entity import FollowUpsConnectExternalIssueResultV2Entity
    from incidentio_sdk.entity.follow_ups_connect_external_issue_result_v3_entity import FollowUpsConnectExternalIssueResultV3Entity
    from incidentio_sdk.entity.follow_ups_create_from_link_result_v3_entity import FollowUpsCreateFromLinkResultV3Entity
    from incidentio_sdk.entity.heartbeat_v2_entity import HeartbeatV2Entity
    from incidentio_sdk.entity.identity_entity import IdentityEntity
    from incidentio_sdk.entity.incident_entity import IncidentEntity
    from incidentio_sdk.entity.incident_activity_log_entry_entity import IncidentActivityLogEntryEntity
    from incidentio_sdk.entity.incident_attachment_entity import IncidentAttachmentEntity
    from incidentio_sdk.entity.incident_form_entity import IncidentFormEntity
    from incidentio_sdk.entity.incident_membership_entity import IncidentMembershipEntity
    from incidentio_sdk.entity.incident_memberships_v1_entity import IncidentMembershipsV1Entity
    from incidentio_sdk.entity.incident_participant_entity import IncidentParticipantEntity
    from incidentio_sdk.entity.incident_participant_workload_entity import IncidentParticipantWorkloadEntity
    from incidentio_sdk.entity.incident_relationship_entity import IncidentRelationshipEntity
    from incidentio_sdk.entity.incident_role_entity import IncidentRoleEntity
    from incidentio_sdk.entity.incident_status_entity import IncidentStatusEntity
    from incidentio_sdk.entity.incident_team_membership_entity import IncidentTeamMembershipEntity
    from incidentio_sdk.entity.incident_team_memberships_v1_entity import IncidentTeamMembershipsV1Entity
    from incidentio_sdk.entity.incident_template_entity import IncidentTemplateEntity
    from incidentio_sdk.entity.incident_templates_validate_result_v1_entity import IncidentTemplatesValidateResultV1Entity
    from incidentio_sdk.entity.incident_timeline_item_entity import IncidentTimelineItemEntity
    from incidentio_sdk.entity.incident_timestamp_entity import IncidentTimestampEntity
    from incidentio_sdk.entity.incident_type_entity import IncidentTypeEntity
    from incidentio_sdk.entity.incident_update_entity import IncidentUpdateEntity
    from incidentio_sdk.entity.incidents_import_postmortem_document_result_v2_entity import IncidentsImportPostmortemDocumentResultV2Entity
    from incidentio_sdk.entity.ip_allowlist_entity import IpAllowlistEntity
    from incidentio_sdk.entity.ip_range_entity import IpRangeEntity
    from incidentio_sdk.entity.maintenance_window_entity import MaintenanceWindowEntity
    from incidentio_sdk.entity.managed_resource_entity import ManagedResourceEntity
    from incidentio_sdk.entity.on_call_notification_method_public_v2_entity import OnCallNotificationMethodPublicV2Entity
    from incidentio_sdk.entity.on_call_notification_pause_entity import OnCallNotificationPauseEntity
    from incidentio_sdk.entity.on_call_notification_rule_public_v2_entity import OnCallNotificationRulePublicV2Entity
    from incidentio_sdk.entity.pay_config_entity import PayConfigEntity
    from incidentio_sdk.entity.pay_config_one_off_rule_entity import PayConfigOneOffRuleEntity
    from incidentio_sdk.entity.pay_config_weekly_rule_entity import PayConfigWeeklyRuleEntity
    from incidentio_sdk.entity.pay_report_entity import PayReportEntity
    from incidentio_sdk.entity.pay_reports_publish_result_v2_entity import PayReportsPublishResultV2Entity
    from incidentio_sdk.entity.pay_reports_unpublish_result_v2_entity import PayReportsUnpublishResultV2Entity
    from incidentio_sdk.entity.pay_reports_v2_entity import PayReportsV2Entity
    from incidentio_sdk.entity.policy_entity import PolicyEntity
    from incidentio_sdk.entity.policy_finding_entity import PolicyFindingEntity
    from incidentio_sdk.entity.policy_findings_dismiss_result_v2_entity import PolicyFindingsDismissResultV2Entity
    from incidentio_sdk.entity.policy_findings_restore_result_v2_entity import PolicyFindingsRestoreResultV2Entity
    from incidentio_sdk.entity.postmortem_document_entity import PostmortemDocumentEntity
    from incidentio_sdk.entity.postmortem_documents_attach_result_v1_entity import PostmortemDocumentsAttachResultV1Entity
    from incidentio_sdk.entity.postmortem_documents_show_content_result_v1_entity import PostmortemDocumentsShowContentResultV1Entity
    from incidentio_sdk.entity.schedule_entity import ScheduleEntity
    from incidentio_sdk.entity.schedule_entries_list_payload_v2_entity import ScheduleEntriesListPayloadV2Entity
    from incidentio_sdk.entity.schedule_entry_entity import ScheduleEntryEntity
    from incidentio_sdk.entity.schedule_override_entity import ScheduleOverrideEntity
    from incidentio_sdk.entity.schedule_replica_entity import ScheduleReplicaEntity
    from incidentio_sdk.entity.schedule_sync_rule_entity import ScheduleSyncRuleEntity
    from incidentio_sdk.entity.schedule_sync_target_entity import ScheduleSyncTargetEntity
    from incidentio_sdk.entity.secret_entity import SecretEntity
    from incidentio_sdk.entity.severity_entity import SeverityEntity
    from incidentio_sdk.entity.status_page_entity import StatusPageEntity
    from incidentio_sdk.entity.status_page_component_entity import StatusPageComponentEntity
    from incidentio_sdk.entity.status_page_component_availability_entity import StatusPageComponentAvailabilityEntity
    from incidentio_sdk.entity.status_page_incident_entity import StatusPageIncidentEntity
    from incidentio_sdk.entity.status_page_incident_update_entity import StatusPageIncidentUpdateEntity
    from incidentio_sdk.entity.status_page_linked_response_incident_entity import StatusPageLinkedResponseIncidentEntity
    from incidentio_sdk.entity.status_page_maintenance_entity import StatusPageMaintenanceEntity
    from incidentio_sdk.entity.status_page_maintenance_update_entity import StatusPageMaintenanceUpdateEntity
    from incidentio_sdk.entity.status_page_structure_entity import StatusPageStructureEntity
    from incidentio_sdk.entity.status_pages_create_status_page_retrospective_incident_result_v2_entity import StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity
    from incidentio_sdk.entity.team_entity import TeamEntity
    from incidentio_sdk.entity.telemetry_data_source_entity import TelemetryDataSourceEntity
    from incidentio_sdk.entity.user_entity import UserEntity
    from incidentio_sdk.entity.users_show_paging_provider_result_v2_entity import UsersShowPagingProviderResultV2Entity
    from incidentio_sdk.entity.utilities_v1_entity import UtilitiesV1Entity
    from incidentio_sdk.entity.workflow_entity import WorkflowEntity
    from incidentio_sdk.entity.workflow_run_entity import WorkflowRunEntity

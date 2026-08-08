# IncidentIo SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import IncidentIoUtility
from core.spec import IncidentIoSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import IncidentIoBaseFeature
from features import _make_feature


class IncidentIoSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = IncidentIoUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

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
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return IncidentIoUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

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

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

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

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

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
            return {"ok": False, "err": fetch_err}

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
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    def Action(self, data=None) -> "ActionEntity":
        """Entity factory: client.Action().list() / client.Action().load({"id": ...})."""
        from entity.action_entity import ActionEntity
        return ActionEntity(self, data)


    def Alert(self, data=None) -> "AlertEntity":
        """Entity factory: client.Alert().list() / client.Alert().load({"id": ...})."""
        from entity.alert_entity import AlertEntity
        return AlertEntity(self, data)


    def AlertAttribute(self, data=None) -> "AlertAttributeEntity":
        """Entity factory: client.AlertAttribute().list() / client.AlertAttribute().load({"id": ...})."""
        from entity.alert_attribute_entity import AlertAttributeEntity
        return AlertAttributeEntity(self, data)


    def AlertNote(self, data=None) -> "AlertNoteEntity":
        """Entity factory: client.AlertNote().list() / client.AlertNote().load({"id": ...})."""
        from entity.alert_note_entity import AlertNoteEntity
        return AlertNoteEntity(self, data)


    def AlertRoute(self, data=None) -> "AlertRouteEntity":
        """Entity factory: client.AlertRoute().list() / client.AlertRoute().load({"id": ...})."""
        from entity.alert_route_entity import AlertRouteEntity
        return AlertRouteEntity(self, data)


    def AlertSource(self, data=None) -> "AlertSourceEntity":
        """Entity factory: client.AlertSource().list() / client.AlertSource().load({"id": ...})."""
        from entity.alert_source_entity import AlertSourceEntity
        return AlertSourceEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def CustomField(self, data=None) -> "CustomFieldEntity":
        """Entity factory: client.CustomField().list() / client.CustomField().load({"id": ...})."""
        from entity.custom_field_entity import CustomFieldEntity
        return CustomFieldEntity(self, data)


    def CustomFieldOption(self, data=None) -> "CustomFieldOptionEntity":
        """Entity factory: client.CustomFieldOption().list() / client.CustomFieldOption().load({"id": ...})."""
        from entity.custom_field_option_entity import CustomFieldOptionEntity
        return CustomFieldOptionEntity(self, data)


    def FollowUp(self, data=None) -> "FollowUpEntity":
        """Entity factory: client.FollowUp().list() / client.FollowUp().load({"id": ...})."""
        from entity.follow_up_entity import FollowUpEntity
        return FollowUpEntity(self, data)


    def Incident(self, data=None) -> "IncidentEntity":
        """Entity factory: client.Incident().list() / client.Incident().load({"id": ...})."""
        from entity.incident_entity import IncidentEntity
        return IncidentEntity(self, data)


    def IncidentAttachment(self, data=None) -> "IncidentAttachmentEntity":
        """Entity factory: client.IncidentAttachment().list() / client.IncidentAttachment().load({"id": ...})."""
        from entity.incident_attachment_entity import IncidentAttachmentEntity
        return IncidentAttachmentEntity(self, data)


    def IncidentMembership(self, data=None) -> "IncidentMembershipEntity":
        """Entity factory: client.IncidentMembership().list() / client.IncidentMembership().load({"id": ...})."""
        from entity.incident_membership_entity import IncidentMembershipEntity
        return IncidentMembershipEntity(self, data)


    def IncidentParticipant(self, data=None) -> "IncidentParticipantEntity":
        """Entity factory: client.IncidentParticipant().list() / client.IncidentParticipant().load({"id": ...})."""
        from entity.incident_participant_entity import IncidentParticipantEntity
        return IncidentParticipantEntity(self, data)


    def IncidentParticipantWorkload(self, data=None) -> "IncidentParticipantWorkloadEntity":
        """Entity factory: client.IncidentParticipantWorkload().list() / client.IncidentParticipantWorkload().load({"id": ...})."""
        from entity.incident_participant_workload_entity import IncidentParticipantWorkloadEntity
        return IncidentParticipantWorkloadEntity(self, data)


    def IncidentRelationship(self, data=None) -> "IncidentRelationshipEntity":
        """Entity factory: client.IncidentRelationship().list() / client.IncidentRelationship().load({"id": ...})."""
        from entity.incident_relationship_entity import IncidentRelationshipEntity
        return IncidentRelationshipEntity(self, data)


    def IncidentRole(self, data=None) -> "IncidentRoleEntity":
        """Entity factory: client.IncidentRole().list() / client.IncidentRole().load({"id": ...})."""
        from entity.incident_role_entity import IncidentRoleEntity
        return IncidentRoleEntity(self, data)


    def IncidentStatus(self, data=None) -> "IncidentStatusEntity":
        """Entity factory: client.IncidentStatus().list() / client.IncidentStatus().load({"id": ...})."""
        from entity.incident_status_entity import IncidentStatusEntity
        return IncidentStatusEntity(self, data)


    def IncidentTimestamp(self, data=None) -> "IncidentTimestampEntity":
        """Entity factory: client.IncidentTimestamp().list() / client.IncidentTimestamp().load({"id": ...})."""
        from entity.incident_timestamp_entity import IncidentTimestampEntity
        return IncidentTimestampEntity(self, data)


    def IncidentType(self, data=None) -> "IncidentTypeEntity":
        """Entity factory: client.IncidentType().list() / client.IncidentType().load({"id": ...})."""
        from entity.incident_type_entity import IncidentTypeEntity
        return IncidentTypeEntity(self, data)


    def IncidentUpdate(self, data=None) -> "IncidentUpdateEntity":
        """Entity factory: client.IncidentUpdate().list() / client.IncidentUpdate().load({"id": ...})."""
        from entity.incident_update_entity import IncidentUpdateEntity
        return IncidentUpdateEntity(self, data)


    def IpAllowlist(self, data=None) -> "IpAllowlistEntity":
        """Entity factory: client.IpAllowlist().list() / client.IpAllowlist().load({"id": ...})."""
        from entity.ip_allowlist_entity import IpAllowlistEntity
        return IpAllowlistEntity(self, data)


    def MaintenanceWindow(self, data=None) -> "MaintenanceWindowEntity":
        """Entity factory: client.MaintenanceWindow().list() / client.MaintenanceWindow().load({"id": ...})."""
        from entity.maintenance_window_entity import MaintenanceWindowEntity
        return MaintenanceWindowEntity(self, data)


    def PostmortemDocument(self, data=None) -> "PostmortemDocumentEntity":
        """Entity factory: client.PostmortemDocument().list() / client.PostmortemDocument().load({"id": ...})."""
        from entity.postmortem_document_entity import PostmortemDocumentEntity
        return PostmortemDocumentEntity(self, data)


    def Secret(self, data=None) -> "SecretEntity":
        """Entity factory: client.Secret().list() / client.Secret().load({"id": ...})."""
        from entity.secret_entity import SecretEntity
        return SecretEntity(self, data)


    def Team(self, data=None) -> "TeamEntity":
        """Entity factory: client.Team().list() / client.Team().load({"id": ...})."""
        from entity.team_entity import TeamEntity
        return TeamEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from entity.user_entity import UserEntity
        return UserEntity(self, data)


    def Workflow(self, data=None) -> "WorkflowEntity":
        """Entity factory: client.Workflow().list() / client.Workflow().load({"id": ...})."""
        from entity.workflow_entity import WorkflowEntity
        return WorkflowEntity(self, data)


    def WorkflowRun(self, data=None) -> "WorkflowRunEntity":
        """Entity factory: client.WorkflowRun().list() / client.WorkflowRun().load({"id": ...})."""
        from entity.workflow_run_entity import WorkflowRunEntity
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
    from entity.action_entity import ActionEntity
    from entity.alert_entity import AlertEntity
    from entity.alert_attribute_entity import AlertAttributeEntity
    from entity.alert_note_entity import AlertNoteEntity
    from entity.alert_route_entity import AlertRouteEntity
    from entity.alert_source_entity import AlertSourceEntity
    from entity.api_key_entity import ApiKeyEntity
    from entity.custom_field_entity import CustomFieldEntity
    from entity.custom_field_option_entity import CustomFieldOptionEntity
    from entity.follow_up_entity import FollowUpEntity
    from entity.incident_entity import IncidentEntity
    from entity.incident_attachment_entity import IncidentAttachmentEntity
    from entity.incident_membership_entity import IncidentMembershipEntity
    from entity.incident_participant_entity import IncidentParticipantEntity
    from entity.incident_participant_workload_entity import IncidentParticipantWorkloadEntity
    from entity.incident_relationship_entity import IncidentRelationshipEntity
    from entity.incident_role_entity import IncidentRoleEntity
    from entity.incident_status_entity import IncidentStatusEntity
    from entity.incident_timestamp_entity import IncidentTimestampEntity
    from entity.incident_type_entity import IncidentTypeEntity
    from entity.incident_update_entity import IncidentUpdateEntity
    from entity.ip_allowlist_entity import IpAllowlistEntity
    from entity.maintenance_window_entity import MaintenanceWindowEntity
    from entity.postmortem_document_entity import PostmortemDocumentEntity
    from entity.secret_entity import SecretEntity
    from entity.team_entity import TeamEntity
    from entity.user_entity import UserEntity
    from entity.workflow_entity import WorkflowEntity
    from entity.workflow_run_entity import WorkflowRunEntity

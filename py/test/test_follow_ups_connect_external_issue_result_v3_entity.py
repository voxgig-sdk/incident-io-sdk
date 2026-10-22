# FollowUpsConnectExternalIssueResultV3 entity test

import json
import os
import time

import pytest

from incidentio_sdk.utility.voxgig_struct import voxgig_struct as vs
from incidentio_sdk import IncidentIoSDK
from incidentio_sdk.core import helpers
from incidentio_sdk.config import shared_config
from incidentio_sdk.feature.base_feature import IncidentIoBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestFollowUpsConnectExternalIssueResultV3Entity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.FollowUpsConnectExternalIssueResultV3(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = IncidentIoSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.FollowUpsConnectExternalIssueResultV3(None).create({"follow_up_id": 1, "provider": "x", "url": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _follow_ups_connect_external_issue_result_v3_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "follow_ups_connect_external_issue_result_v3." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["follow_up01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID")
        client = setup["client"]

        # CREATE
        follow_ups_connect_external_issue_result_v3_ref01_ent = client.FollowUpsConnectExternalIssueResultV3(None)
        follow_ups_connect_external_issue_result_v3_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.follow_ups_connect_external_issue_result_v3"), "follow_ups_connect_external_issue_result_v3_ref01"))
        follow_ups_connect_external_issue_result_v3_ref01_data["follow_up_id"] = setup["idmap"]["follow_up01"]

        follow_ups_connect_external_issue_result_v3_ref01_data = helpers.to_map(runner.entity_data(follow_ups_connect_external_issue_result_v3_ref01_ent.create(follow_ups_connect_external_issue_result_v3_ref01_data, None)))
        assert follow_ups_connect_external_issue_result_v3_ref01_data is not None
        assert follow_ups_connect_external_issue_result_v3_ref01_data["id"] is not None



def _follow_ups_connect_external_issue_result_v3_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/follow_ups_connect_external_issue_result_v3/FollowUpsConnectExternalIssueResultV3TestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IncidentIoSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["follow_ups_connect_external_issue_result_v301", "follow_ups_connect_external_issue_result_v302", "follow_ups_connect_external_issue_result_v303", "follow_up01", "follow_up02", "follow_up03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID": idmap,
        "INCIDENT_IO_TEST_LIVE": "FALSE",
        "INCIDENT_IO_TEST_EXPLAIN": "FALSE",
        "INCIDENT_IO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("INCIDENT_IO_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("INCIDENT_IO_APIKEY"),
            },
            extra or {},
        ])
        client = IncidentIoSDK(helpers.to_map(merged_opts))

    _live = env.get("INCIDENT_IO_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("INCIDENT_IO_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

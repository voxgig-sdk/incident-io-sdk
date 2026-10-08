# CallRoutesListOptionsResultV2 entity test

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


class TestCallRoutesListOptionsResultV2Entity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.CallRoutesListOptionsResultV2(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = IncidentIoSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.CallRoutesListOptionsResultV2(None).list({"call_route_id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _call_routes_list_options_result_v2_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "call_routes_list_options_result_v2." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["call_route01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        call_routes_list_options_result_v2_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.call_routes_list_options_result_v2")))
        call_routes_list_options_result_v2_ref01_data = None
        if len(call_routes_list_options_result_v2_ref01_data_raw) > 0:
            call_routes_list_options_result_v2_ref01_data = helpers.to_map(call_routes_list_options_result_v2_ref01_data_raw[0][1])

        # LIST
        call_routes_list_options_result_v2_ref01_ent = client.CallRoutesListOptionsResultV2(None)
        call_routes_list_options_result_v2_ref01_match = {
            "call_route_id": setup["idmap"]["call_route01"],
        }

        call_routes_list_options_result_v2_ref01_list_result = call_routes_list_options_result_v2_ref01_ent.list(call_routes_list_options_result_v2_ref01_match, None)
        assert isinstance(call_routes_list_options_result_v2_ref01_list_result, list)



def _call_routes_list_options_result_v2_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/call_routes_list_options_result_v2/CallRoutesListOptionsResultV2TestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IncidentIoSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["call_routes_list_options_result_v201", "call_routes_list_options_result_v202", "call_routes_list_options_result_v203", "call_route01", "call_route02", "call_route03"],
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
        "INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID": idmap,
        "INCIDENT_IO_TEST_LIVE": "FALSE",
        "INCIDENT_IO_TEST_EXPLAIN": "FALSE",
        "INCIDENT_IO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID"))
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

# StatusPageIncident entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from incidentio_sdk import IncidentIoSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestStatusPageIncidentEntity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.StatusPageIncident(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "status_page_incident": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = IncidentIoSDK.test(seed, None)
        seen = list(base.StatusPageIncident(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = IncidentIoSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.StatusPageIncident(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _status_page_incident_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "status_page_incident." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INCIDENTIO_TEST_STATUS_PAGE_INCIDENT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        status_page_incident_ref01_ent = client.StatusPageIncident(None)
        status_page_incident_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.status_page_incident"), "status_page_incident_ref01"))

        status_page_incident_ref01_data = helpers.to_map(status_page_incident_ref01_ent.create(status_page_incident_ref01_data, None))
        assert status_page_incident_ref01_data is not None
        assert status_page_incident_ref01_data["id"] is not None

        # LIST
        status_page_incident_ref01_match = {}

        status_page_incident_ref01_list_result = status_page_incident_ref01_ent.list(status_page_incident_ref01_match, None)
        assert isinstance(status_page_incident_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(status_page_incident_ref01_list_result),
            {"id": status_page_incident_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        status_page_incident_ref01_data_up0_up = {
            "id": status_page_incident_ref01_data["id"],
        }

        status_page_incident_ref01_markdef_up0_name = "idempotency_key"
        status_page_incident_ref01_markdef_up0_value = "Mark01-status_page_incident_ref01_" + str(setup["now"])
        status_page_incident_ref01_data_up0_up[status_page_incident_ref01_markdef_up0_name] = status_page_incident_ref01_markdef_up0_value

        status_page_incident_ref01_resdata_up0 = helpers.to_map(status_page_incident_ref01_ent.update(status_page_incident_ref01_data_up0_up, None))
        assert status_page_incident_ref01_resdata_up0 is not None
        assert status_page_incident_ref01_resdata_up0["id"] == status_page_incident_ref01_data_up0_up["id"]
        assert status_page_incident_ref01_resdata_up0[status_page_incident_ref01_markdef_up0_name] == status_page_incident_ref01_markdef_up0_value

        # LOAD
        status_page_incident_ref01_match_dt0 = {
            "id": status_page_incident_ref01_data["id"],
        }
        status_page_incident_ref01_data_dt0_loaded = status_page_incident_ref01_ent.load(status_page_incident_ref01_match_dt0, None)
        status_page_incident_ref01_data_dt0_load_result = helpers.to_map(status_page_incident_ref01_data_dt0_loaded)
        assert status_page_incident_ref01_data_dt0_load_result is not None
        assert status_page_incident_ref01_data_dt0_load_result["id"] == status_page_incident_ref01_data["id"]



def _status_page_incident_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/status_page_incident/StatusPageIncidentTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IncidentIoSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["status_page_incident01", "status_page_incident02", "status_page_incident03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "INCIDENTIO_TEST_STATUS_PAGE_INCIDENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENTIO_TEST_STATUS_PAGE_INCIDENT_ENTID": idmap,
        "INCIDENTIO_TEST_LIVE": "FALSE",
        "INCIDENTIO_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENTIO_TEST_STATUS_PAGE_INCIDENT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("INCIDENTIO_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
            },
            extra or {},
        ])
        client = IncidentIoSDK(helpers.to_map(merged_opts))

    _live = env.get("INCIDENTIO_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("INCIDENTIO_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }

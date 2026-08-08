# IpAllowlist entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from incidentio_sdk import IncidentIoSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestIpAllowlistEntity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.IpAllowlist(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _ip_allowlist_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "ip_allowlist." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set INCIDENTIO_TEST_IP_ALLOWLIST_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        ip_allowlist_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.ip_allowlist")))
        ip_allowlist_ref01_data = None
        if len(ip_allowlist_ref01_data_raw) > 0:
            ip_allowlist_ref01_data = helpers.to_map(ip_allowlist_ref01_data_raw[0][1])

        # UPDATE
        ip_allowlist_ref01_ent = client.IpAllowlist(None)
        ip_allowlist_ref01_data_up0_up = {
        }

        ip_allowlist_ref01_markdef_up0_name = "updated_at"
        ip_allowlist_ref01_markdef_up0_value = "Mark01-ip_allowlist_ref01_" + str(setup["now"])
        ip_allowlist_ref01_data_up0_up[ip_allowlist_ref01_markdef_up0_name] = ip_allowlist_ref01_markdef_up0_value

        ip_allowlist_ref01_resdata_up0 = helpers.to_map(ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0_up, None))
        assert ip_allowlist_ref01_resdata_up0 is not None
        assert ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0_name] == ip_allowlist_ref01_markdef_up0_value

        # LOAD
        ip_allowlist_ref01_match_dt0 = {}
        ip_allowlist_ref01_data_dt0_loaded = ip_allowlist_ref01_ent.load(ip_allowlist_ref01_match_dt0, None)
        assert ip_allowlist_ref01_data_dt0_loaded is not None



def _ip_allowlist_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IncidentIoSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["ip_allowlist01", "ip_allowlist02", "ip_allowlist03"],
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
        "INCIDENTIO_TEST_IP_ALLOWLIST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENTIO_TEST_IP_ALLOWLIST_ENTID": idmap,
        "INCIDENTIO_TEST_LIVE": "FALSE",
        "INCIDENTIO_TEST_EXPLAIN": "FALSE",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENTIO_TEST_IP_ALLOWLIST_ENTID"))
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

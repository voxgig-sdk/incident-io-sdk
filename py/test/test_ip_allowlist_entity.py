# IpAllowlist entity test

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


class TestIpAllowlistEntity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.IpAllowlist(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = IncidentIoSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.IpAllowlist(None).load({"enabled": "x"}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

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

        ip_allowlist_ref01_resdata_up0 = helpers.to_map(runner.entity_data(ip_allowlist_ref01_ent.update(ip_allowlist_ref01_data_up0_up, None)))
        assert ip_allowlist_ref01_resdata_up0 is not None
        assert ip_allowlist_ref01_resdata_up0[ip_allowlist_ref01_markdef_up0_name] == ip_allowlist_ref01_markdef_up0_value

        # LOAD
        ip_allowlist_ref01_match_dt0 = {}
        ip_allowlist_ref01_data_dt0_loaded = ip_allowlist_ref01_ent.load(ip_allowlist_ref01_match_dt0, None)
        assert ip_allowlist_ref01_data_dt0_loaded is not None



def _ip_allowlist_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
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

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID": idmap,
        "INCIDENT_IO_TEST_LIVE": "FALSE",
        "INCIDENT_IO_TEST_EXPLAIN": "FALSE",
        "INCIDENT_IO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID"))
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

# ScheduleSyncRule entity test

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


class TestScheduleSyncRuleEntity:

    def test_should_create_instance(self):
        testsdk = IncidentIoSDK.test(None, None)
        ent = testsdk.ScheduleSyncRule(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = IncidentIoSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.ScheduleSyncRule(None).list({"id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _schedule_sync_rule_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "schedule_sync_rule." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["schedule01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID")
        if setup["live"]:
            runner.live_miss(LIVE_STRICT, "Live entity test blocked: " + "the flow updates a schedule_sync_rule record it did not create")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        schedule_sync_rule_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.schedule_sync_rule")))
        schedule_sync_rule_ref01_data = None
        if len(schedule_sync_rule_ref01_data_raw) > 0:
            schedule_sync_rule_ref01_data = helpers.to_map(schedule_sync_rule_ref01_data_raw[0][1])

        # UPDATE
        schedule_sync_rule_ref01_ent = client.ScheduleSyncRule(None)
        schedule_sync_rule_ref01_data_up0_up = {
            "id": schedule_sync_rule_ref01_data["id"],
            "schedule_id": setup["idmap"]["schedule_id"],
        }

        schedule_sync_rule_ref01_markdef_up0_name = "created_at"
        schedule_sync_rule_ref01_markdef_up0_value = "Mark01-schedule_sync_rule_ref01_" + str(setup["now"])
        schedule_sync_rule_ref01_data_up0_up[schedule_sync_rule_ref01_markdef_up0_name] = schedule_sync_rule_ref01_markdef_up0_value

        schedule_sync_rule_ref01_resdata_up0 = helpers.to_map(runner.entity_data(schedule_sync_rule_ref01_ent.update(schedule_sync_rule_ref01_data_up0_up, None)))
        assert schedule_sync_rule_ref01_resdata_up0 is not None
        assert schedule_sync_rule_ref01_resdata_up0["id"] == schedule_sync_rule_ref01_data_up0_up["id"]
        assert schedule_sync_rule_ref01_resdata_up0[schedule_sync_rule_ref01_markdef_up0_name] == schedule_sync_rule_ref01_markdef_up0_value

        # LOAD
        schedule_sync_rule_ref01_match_dt0 = {
            "id": schedule_sync_rule_ref01_data["id"],
        }
        schedule_sync_rule_ref01_match_dt0["schedule_id"] = setup["idmap"].get("schedule_id") or setup["idmap"].get("schedule01")
        schedule_sync_rule_ref01_data_dt0_loaded = schedule_sync_rule_ref01_ent.load(schedule_sync_rule_ref01_match_dt0, None)
        schedule_sync_rule_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(schedule_sync_rule_ref01_data_dt0_loaded))
        assert schedule_sync_rule_ref01_data_dt0_load_result is not None
        assert schedule_sync_rule_ref01_data_dt0_load_result["id"] == schedule_sync_rule_ref01_data["id"]



def _schedule_sync_rule_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/schedule_sync_rule/ScheduleSyncRuleTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = IncidentIoSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["schedule_sync_rule01", "schedule_sync_rule02", "schedule_sync_rule03", "schedule01", "schedule02", "schedule03"],
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
        "INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID": idmap,
        "INCIDENT_IO_TEST_LIVE": "FALSE",
        "INCIDENT_IO_TEST_EXPLAIN": "FALSE",
        "INCIDENT_IO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("schedule_id") is None:
        idmap_resolved["schedule_id"] = idmap_resolved.get("schedule01")

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

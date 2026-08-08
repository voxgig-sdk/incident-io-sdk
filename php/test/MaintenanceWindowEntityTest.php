<?php
declare(strict_types=1);

// MaintenanceWindow entity test

require_once __DIR__ . '/../incidentio_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class MaintenanceWindowEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IncidentIoSDK::test(null, null);
        $ent = $testsdk->MaintenanceWindow(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "maintenance_window" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = IncidentIoSDK::test($seed, null);
        $seen = iterator_to_array($base->MaintenanceWindow(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = IncidentIoConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = IncidentIoSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->MaintenanceWindow(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = maintenance_window_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "maintenance_window." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_MAINTENANCE_WINDOW_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $maintenance_window_ref01_ent = $client->MaintenanceWindow(null);
        $maintenance_window_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.maintenance_window"), "maintenance_window_ref01"));

        $maintenance_window_ref01_data_result = $maintenance_window_ref01_ent->create($maintenance_window_ref01_data, null);
        $maintenance_window_ref01_data = Helpers::to_map($maintenance_window_ref01_data_result);
        $this->assertNotNull($maintenance_window_ref01_data);
        $this->assertNotNull($maintenance_window_ref01_data["id"]);

        // LIST
        $maintenance_window_ref01_match = [];

        $maintenance_window_ref01_list_result = $maintenance_window_ref01_ent->list($maintenance_window_ref01_match, null);
        $this->assertIsArray($maintenance_window_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($maintenance_window_ref01_list_result),
            ["id" => $maintenance_window_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $maintenance_window_ref01_data_up0_up = [
            "id" => $maintenance_window_ref01_data["id"],
        ];

        $maintenance_window_ref01_markdef_up0_name = "archived_at";
        $maintenance_window_ref01_markdef_up0_value = "Mark01-maintenance_window_ref01_" . $setup["now"];
        $maintenance_window_ref01_data_up0_up[$maintenance_window_ref01_markdef_up0_name] = $maintenance_window_ref01_markdef_up0_value;

        $maintenance_window_ref01_resdata_up0_result = $maintenance_window_ref01_ent->update($maintenance_window_ref01_data_up0_up, null);
        $maintenance_window_ref01_resdata_up0 = Helpers::to_map($maintenance_window_ref01_resdata_up0_result);
        $this->assertNotNull($maintenance_window_ref01_resdata_up0);
        $this->assertEquals($maintenance_window_ref01_resdata_up0["id"], $maintenance_window_ref01_data_up0_up["id"]);
        $this->assertEquals($maintenance_window_ref01_resdata_up0[$maintenance_window_ref01_markdef_up0_name], $maintenance_window_ref01_markdef_up0_value);

        // LOAD
        $maintenance_window_ref01_match_dt0 = [
            "id" => $maintenance_window_ref01_data["id"],
        ];
        $maintenance_window_ref01_data_dt0_loaded = $maintenance_window_ref01_ent->load($maintenance_window_ref01_match_dt0, null);
        $maintenance_window_ref01_data_dt0_load_result = Helpers::to_map($maintenance_window_ref01_data_dt0_loaded);
        $this->assertNotNull($maintenance_window_ref01_data_dt0_load_result);
        $this->assertEquals($maintenance_window_ref01_data_dt0_load_result["id"], $maintenance_window_ref01_data["id"]);

        // REMOVE
        $maintenance_window_ref01_match_rm0 = [
            "id" => $maintenance_window_ref01_data["id"],
        ];
        $maintenance_window_ref01_ent->remove($maintenance_window_ref01_match_rm0, null);

        // LIST
        $maintenance_window_ref01_match_rt0 = [];

        $maintenance_window_ref01_list_rt0_result = $maintenance_window_ref01_ent->list($maintenance_window_ref01_match_rt0, null);
        $this->assertIsArray($maintenance_window_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($maintenance_window_ref01_list_rt0_result),
            ["id" => $maintenance_window_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function maintenance_window_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/maintenance_window/MaintenanceWindowTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IncidentIoSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["maintenance_window01", "maintenance_window02", "maintenance_window03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("INCIDENTIO_TEST_MAINTENANCE_WINDOW_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INCIDENTIO_TEST_MAINTENANCE_WINDOW_ENTID" => $idmap,
        "INCIDENTIO_TEST_LIVE" => "FALSE",
        "INCIDENTIO_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INCIDENTIO_TEST_MAINTENANCE_WINDOW_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["INCIDENTIO_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new IncidentIoSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["INCIDENTIO_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["INCIDENTIO_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

<?php
declare(strict_types=1);

// CustomFieldOption entity test

require_once __DIR__ . '/../incidentio_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CustomFieldOptionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IncidentIoSDK::test(null, null);
        $ent = $testsdk->CustomFieldOption(null);
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
                "custom_field_option" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = IncidentIoSDK::test($seed, null);
        $seen = iterator_to_array($base->CustomFieldOption(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = IncidentIoConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = IncidentIoSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->CustomFieldOption(null)->stream("list", null, null) as $item) {
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
        $setup = custom_field_option_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "custom_field_option." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $custom_field_option_ref01_ent = $client->CustomFieldOption(null);
        $custom_field_option_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.custom_field_option"), "custom_field_option_ref01"));

        $custom_field_option_ref01_data_result = $custom_field_option_ref01_ent->create($custom_field_option_ref01_data, null);
        $custom_field_option_ref01_data = Helpers::to_map($custom_field_option_ref01_data_result);
        $this->assertNotNull($custom_field_option_ref01_data);
        $this->assertNotNull($custom_field_option_ref01_data["id"]);

        // LIST
        $custom_field_option_ref01_match = [];

        $custom_field_option_ref01_list_result = $custom_field_option_ref01_ent->list($custom_field_option_ref01_match, null);
        $this->assertIsArray($custom_field_option_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($custom_field_option_ref01_list_result),
            ["id" => $custom_field_option_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $custom_field_option_ref01_data_up0_up = [
            "id" => $custom_field_option_ref01_data["id"],
        ];

        $custom_field_option_ref01_markdef_up0_name = "custom_field_id";
        $custom_field_option_ref01_markdef_up0_value = "Mark01-custom_field_option_ref01_" . $setup["now"];
        $custom_field_option_ref01_data_up0_up[$custom_field_option_ref01_markdef_up0_name] = $custom_field_option_ref01_markdef_up0_value;

        $custom_field_option_ref01_resdata_up0_result = $custom_field_option_ref01_ent->update($custom_field_option_ref01_data_up0_up, null);
        $custom_field_option_ref01_resdata_up0 = Helpers::to_map($custom_field_option_ref01_resdata_up0_result);
        $this->assertNotNull($custom_field_option_ref01_resdata_up0);
        $this->assertEquals($custom_field_option_ref01_resdata_up0["id"], $custom_field_option_ref01_data_up0_up["id"]);
        $this->assertEquals($custom_field_option_ref01_resdata_up0[$custom_field_option_ref01_markdef_up0_name], $custom_field_option_ref01_markdef_up0_value);

        // LOAD
        $custom_field_option_ref01_match_dt0 = [
            "id" => $custom_field_option_ref01_data["id"],
        ];
        $custom_field_option_ref01_data_dt0_loaded = $custom_field_option_ref01_ent->load($custom_field_option_ref01_match_dt0, null);
        $custom_field_option_ref01_data_dt0_load_result = Helpers::to_map($custom_field_option_ref01_data_dt0_loaded);
        $this->assertNotNull($custom_field_option_ref01_data_dt0_load_result);
        $this->assertEquals($custom_field_option_ref01_data_dt0_load_result["id"], $custom_field_option_ref01_data["id"]);

        // REMOVE
        $custom_field_option_ref01_match_rm0 = [
            "id" => $custom_field_option_ref01_data["id"],
        ];
        $custom_field_option_ref01_ent->remove($custom_field_option_ref01_match_rm0, null);

        // LIST
        $custom_field_option_ref01_match_rt0 = [];

        $custom_field_option_ref01_list_rt0_result = $custom_field_option_ref01_ent->list($custom_field_option_ref01_match_rt0, null);
        $this->assertIsArray($custom_field_option_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($custom_field_option_ref01_list_rt0_result),
            ["id" => $custom_field_option_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function custom_field_option_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/custom_field_option/CustomFieldOptionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IncidentIoSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["custom_field_option01", "custom_field_option02", "custom_field_option03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID" => $idmap,
        "INCIDENTIO_TEST_LIVE" => "FALSE",
        "INCIDENTIO_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID"]);
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

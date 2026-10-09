<?php
declare(strict_types=1);

// CallRoutesShowOptionResultV2 entity test

require_once __DIR__ . '/../incidentio_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CallRoutesShowOptionResultV2EntityTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    public function test_create_instance(): void
    {
        $testsdk = IncidentIoSDK::test(null, null);
        $ent = $testsdk->CallRoutesShowOptionResultV2(null);
        $this->assertNotNull($ent);
    }

    public function test_validate(): void
    {
        $cfg = IncidentIoConfig::shared_config();
        if (!isset($cfg["feature"]["validate"])) {
            $this->markTestSkipped('feature not present in this SDK: validate');
        }
        $client = IncidentIoSDK::test(null, ["feature" => ["validate" => ["active" => true]]]);
        $err = null;
        try {
            $client->CallRoutesShowOptionResultV2(null)->load(["call_route_id" => 1, "id" => 'x'], null);
        } catch (\Throwable $e) {
            $err = $e;
        }
        $this->assertSame('validate_failed', $err->sdk_code ?? null);
    }

    public function test_basic_flow(): void
    {
        $setup = call_routes_show_option_result_v2_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "call_routes_show_option_result_v2." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        if (!empty($setup["live"])) {
            Runner::live_miss(self::LIVE_STRICT, "Live entity test blocked: " . "the flow loads a call_routes_show_option_result_v2 record it has no list to find");
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $call_routes_show_option_result_v2_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.call_routes_show_option_result_v2")));
        $call_routes_show_option_result_v2_ref01_data = null;
        if (count($call_routes_show_option_result_v2_ref01_data_raw) > 0) {
            $call_routes_show_option_result_v2_ref01_data = Helpers::to_map($call_routes_show_option_result_v2_ref01_data_raw[0][1]);
        }

        // LOAD
        $call_routes_show_option_result_v2_ref01_ent = $client->CallRoutesShowOptionResultV2(null);
        $call_routes_show_option_result_v2_ref01_match_dt0 = [
            "id" => $call_routes_show_option_result_v2_ref01_data["id"],
        ];
        $call_routes_show_option_result_v2_ref01_match_dt0["call_route_id"] = $setup["idmap"]["call_route_id"] ?? $setup["idmap"]["call_route01"] ?? null;
        $call_routes_show_option_result_v2_ref01_data_dt0_loaded = $call_routes_show_option_result_v2_ref01_ent->load($call_routes_show_option_result_v2_ref01_match_dt0, null);
        $call_routes_show_option_result_v2_ref01_data_dt0_load_result = Helpers::to_map(is_object($call_routes_show_option_result_v2_ref01_data_dt0_loaded) && method_exists($call_routes_show_option_result_v2_ref01_data_dt0_loaded, 'data_get') ? $call_routes_show_option_result_v2_ref01_data_dt0_loaded->data_get() : $call_routes_show_option_result_v2_ref01_data_dt0_loaded);
        $this->assertNotNull($call_routes_show_option_result_v2_ref01_data_dt0_load_result);
        $this->assertEquals($call_routes_show_option_result_v2_ref01_data_dt0_load_result["id"], $call_routes_show_option_result_v2_ref01_data["id"]);

    }
}

function call_routes_show_option_result_v2_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/call_routes_show_option_result_v2/CallRoutesShowOptionResultV2TestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IncidentIoSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["call_routes_show_option_result_v201", "call_routes_show_option_result_v202", "call_routes_show_option_result_v203", "call_route01", "call_route02", "call_route03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Whether *_ENTID supplied the idmap, read before env_override consumes
    // it: without it, the ids a live flow binds are the fixture's synthetic ones.
    $entid_env_raw = getenv("INCIDENT_IO_TEST_CALL_ROUTES_SHOW_OPTION_RESULT_V2_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INCIDENT_IO_TEST_CALL_ROUTES_SHOW_OPTION_RESULT_V2_ENTID" => $idmap,
        "INCIDENT_IO_TEST_LIVE" => "FALSE",
        "INCIDENT_IO_TEST_EXPLAIN" => "FALSE",
        "INCIDENT_IO_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INCIDENT_IO_TEST_CALL_ROUTES_SHOW_OPTION_RESULT_V2_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["INCIDENT_IO_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["INCIDENT_IO_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new IncidentIoSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["INCIDENT_IO_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["INCIDENT_IO_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}

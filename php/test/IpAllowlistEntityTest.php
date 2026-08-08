<?php
declare(strict_types=1);

// IpAllowlist entity test

require_once __DIR__ . '/../incidentio_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class IpAllowlistEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = IncidentIoSDK::test(null, null);
        $ent = $testsdk->IpAllowlist(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = ip_allowlist_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ip_allowlist." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_IP_ALLOWLIST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $ip_allowlist_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.ip_allowlist")));
        $ip_allowlist_ref01_data = null;
        if (count($ip_allowlist_ref01_data_raw) > 0) {
            $ip_allowlist_ref01_data = Helpers::to_map($ip_allowlist_ref01_data_raw[0][1]);
        }

        // UPDATE
        $ip_allowlist_ref01_ent = $client->IpAllowlist(null);
        $ip_allowlist_ref01_data_up0_up = [
        ];

        $ip_allowlist_ref01_markdef_up0_name = "updated_at";
        $ip_allowlist_ref01_markdef_up0_value = "Mark01-ip_allowlist_ref01_" . $setup["now"];
        $ip_allowlist_ref01_data_up0_up[$ip_allowlist_ref01_markdef_up0_name] = $ip_allowlist_ref01_markdef_up0_value;

        $ip_allowlist_ref01_resdata_up0_result = $ip_allowlist_ref01_ent->update($ip_allowlist_ref01_data_up0_up, null);
        $ip_allowlist_ref01_resdata_up0 = Helpers::to_map($ip_allowlist_ref01_resdata_up0_result);
        $this->assertNotNull($ip_allowlist_ref01_resdata_up0);
        $this->assertEquals($ip_allowlist_ref01_resdata_up0[$ip_allowlist_ref01_markdef_up0_name], $ip_allowlist_ref01_markdef_up0_value);

        // LOAD
        $ip_allowlist_ref01_match_dt0 = [];
        $ip_allowlist_ref01_data_dt0_loaded = $ip_allowlist_ref01_ent->load($ip_allowlist_ref01_match_dt0, null);
        $this->assertNotNull($ip_allowlist_ref01_data_dt0_loaded);

    }
}

function ip_allowlist_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ip_allowlist/IpAllowlistTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = IncidentIoSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ip_allowlist01", "ip_allowlist02", "ip_allowlist03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("INCIDENTIO_TEST_IP_ALLOWLIST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "INCIDENTIO_TEST_IP_ALLOWLIST_ENTID" => $idmap,
        "INCIDENTIO_TEST_LIVE" => "FALSE",
        "INCIDENTIO_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["INCIDENTIO_TEST_IP_ALLOWLIST_ENTID"]);
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

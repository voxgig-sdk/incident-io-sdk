<?php
declare(strict_types=1);

// OnCallNotificationRulePublicV2 direct test

require_once __DIR__ . '/../incidentio_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class OnCallNotificationRulePublicV2DirectTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    private static function liveOk(array $result): bool
    {
        $status = Helpers::to_int($result["status"] ?? 0);
        return empty($result["err"]) && !empty($result["ok"]) && $status >= 200 && $status < 300;
    }

    public function test_direct_list_on_call_notification_rule_public_v2(): void
    {
        $setup = on_call_notification_rule_public_v2_direct_setup([
            ["id" => "direct01"],
            ["id" => "direct02"],
        ]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-list-on_call_notification_rule_public_v2", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            foreach (["user01"] as $_liveKey) {
                if (null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live test blocked: needs " . $_liveKey . " via INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID");
                }
            }
        }
        $client = $setup["client"];

        $params = [];
        $params["user_id"] = $setup["live"] ? ($setup["idmap"]["user01"] ?? null) : "direct01";

        $result = $client->direct([
            "path" => "v2/users/{user_id}/notification_rules",
            "method" => "GET",
            "params" => $params,
        ]);
        if ($setup["live"]) {
            if (!self::liveOk($result)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list failed: " . Runner::live_describe($result));
            }
            if (null === Runner::live_list($result["data"] ?? null)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list returned no list: " . Runner::live_describe($result));
            }
            $this->assertIsArray(Runner::live_list($result["data"]));
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertIsArray($result["data"]);
            $this->assertCount(2, $result["data"]);
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function on_call_notification_rule_public_v2_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID" => [],
        "INCIDENT_IO_TEST_LIVE" => "FALSE",
        "INCIDENT_IO_APIKEY" => "",
    ]);

    $live = $env["INCIDENT_IO_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["INCIDENT_IO_APIKEY"],
        ]);
        $client = new IncidentIoSDK($merged_opts);
        $idmap = $env["INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_RULE_PUBLIC_V2_ENTID"] ?? [];
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => is_array($idmap) ? $idmap : [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new IncidentIoSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}

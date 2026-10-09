package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/incident-io-sdk/go"
	"github.com/voxgig-sdk/incident-io-sdk/go/core"

	vs "github.com/voxgig-sdk/incident-io-sdk/go/utility/struct"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const pay_configs_update_weekly_rule_result_v2EntityLiveStrict = true


func TestPayConfigsUpdateWeeklyRuleResultV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PayConfigsUpdateWeeklyRuleResultV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil PayConfigsUpdateWeeklyRuleResultV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.PayConfigsUpdateWeeklyRuleResultV2(nil).Update(map[string]any{"id": 1, "pay_config_id": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := pay_configs_update_weekly_rule_result_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "pay_configs_update_weekly_rule_result_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"pay_config01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, pay_configs_update_weekly_rule_result_v2EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_WEEKLY_RULE_RESULT_V2_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, pay_configs_update_weekly_rule_result_v2EntityLiveStrict, "Live entity test blocked: %s", "the flow updates a pay_configs_update_weekly_rule_result_v2 record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		payConfigsUpdateWeeklyRuleResultV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.pay_configs_update_weekly_rule_result_v2")))
		var payConfigsUpdateWeeklyRuleResultV2Ref01Data map[string]any
		if len(payConfigsUpdateWeeklyRuleResultV2Ref01DataRaw) > 0 {
			payConfigsUpdateWeeklyRuleResultV2Ref01Data = core.ToMapAny(payConfigsUpdateWeeklyRuleResultV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = payConfigsUpdateWeeklyRuleResultV2Ref01Data

		// UPDATE
		payConfigsUpdateWeeklyRuleResultV2Ref01Ent := client.PayConfigsUpdateWeeklyRuleResultV2(nil)
		payConfigsUpdateWeeklyRuleResultV2Ref01DataUp0Up := map[string]any{
			"id": payConfigsUpdateWeeklyRuleResultV2Ref01Data["id"],
			"pay_config_id": setup.idmap["pay_config_id"],
		}

		payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Name := "end_time"
		payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Value := fmt.Sprintf("Mark01-pay_configs_update_weekly_rule_result_v2_ref01_%d", setup.now)
		payConfigsUpdateWeeklyRuleResultV2Ref01DataUp0Up[payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Name] = payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Value

		payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0Result, err := payConfigsUpdateWeeklyRuleResultV2Ref01Ent.Update(payConfigsUpdateWeeklyRuleResultV2Ref01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0 := core.ToMapAny(entityData(payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0Result))
		if payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0["id"] != payConfigsUpdateWeeklyRuleResultV2Ref01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0[payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Name] != payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Name, payConfigsUpdateWeeklyRuleResultV2Ref01ResdataUp0[payConfigsUpdateWeeklyRuleResultV2Ref01MarkdefUp0Name])
		}

	})
}

func pay_configs_update_weekly_rule_result_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "pay_configs_update_weekly_rule_result_v2", "PayConfigsUpdateWeeklyRuleResultV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read pay_configs_update_weekly_rule_result_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse pay_configs_update_weekly_rule_result_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"pay_configs_update_weekly_rule_result_v201", "pay_configs_update_weekly_rule_result_v202", "pay_configs_update_weekly_rule_result_v203", "pay_config01", "pay_config02", "pay_config03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_WEEKLY_RULE_RESULT_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_WEEKLY_RULE_RESULT_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_PAY_CONFIGS_UPDATE_WEEKLY_RULE_RESULT_V2_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add pay_config_id alias for update test.
	if idmapResolved["pay_config_id"] == nil {
		idmapResolved["pay_config_id"] = idmapResolved["pay_config01"]
	}

	if env["INCIDENT_IO_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["INCIDENT_IO_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewIncidentIoSDK(core.ToMapAny(mergedOpts))
	}

	live := env["INCIDENT_IO_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["INCIDENT_IO_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

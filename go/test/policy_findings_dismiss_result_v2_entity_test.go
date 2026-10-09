package sdktest

import (
	"encoding/json"
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
const policy_findings_dismiss_result_v2EntityLiveStrict = true


func TestPolicyFindingsDismissResultV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PolicyFindingsDismissResultV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil PolicyFindingsDismissResultV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.PolicyFindingsDismissResultV2(nil).Create(map[string]any{"policy_finding_id": 1, "created_at": "x", "debrief": "x", "dismissal": "x", "follow_up": "x", "id": "x", "last_checked_at": "x", "on_call_readiness": "x", "policy_id": "x", "policy_type": "x", "post_mortem": "x", "reason": "x", "responsible_users": "x", "schedule": "x", "shift_conflict": "x", "state": "x", "updated_at": "x", "vacation_conflict": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := policy_findings_dismiss_result_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "policy_findings_dismiss_result_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"policy_finding01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, policy_findings_dismiss_result_v2EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		policyFindingsDismissResultV2Ref01Ent := client.PolicyFindingsDismissResultV2(nil)
		policyFindingsDismissResultV2Ref01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "policy_findings_dismiss_result_v2"}), "policy_findings_dismiss_result_v2_ref01"))
		policyFindingsDismissResultV2Ref01Data["policy_finding_id"] = setup.idmap["policy_finding01"]

		policyFindingsDismissResultV2Ref01DataResult, err := policyFindingsDismissResultV2Ref01Ent.Create(policyFindingsDismissResultV2Ref01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		policyFindingsDismissResultV2Ref01Data = core.ToMapAny(entityData(policyFindingsDismissResultV2Ref01DataResult))
		if policyFindingsDismissResultV2Ref01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if policyFindingsDismissResultV2Ref01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func policy_findings_dismiss_result_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "policy_findings_dismiss_result_v2", "PolicyFindingsDismissResultV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read policy_findings_dismiss_result_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse policy_findings_dismiss_result_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"policy_findings_dismiss_result_v201", "policy_findings_dismiss_result_v202", "policy_findings_dismiss_result_v203", "policy_finding01", "policy_finding02", "policy_finding03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_POLICY_FINDINGS_DISMISS_RESULT_V2_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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

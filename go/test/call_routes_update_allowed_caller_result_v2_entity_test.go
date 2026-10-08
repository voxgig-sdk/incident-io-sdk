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
const call_routes_update_allowed_caller_result_v2EntityLiveStrict = true


func TestCallRoutesUpdateAllowedCallerResultV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CallRoutesUpdateAllowedCallerResultV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil CallRoutesUpdateAllowedCallerResultV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CallRoutesUpdateAllowedCallerResultV2(nil).Update(map[string]any{"call_route_id": 1, "id": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := call_routes_update_allowed_caller_result_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "call_routes_update_allowed_caller_result_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"call_route01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, call_routes_update_allowed_caller_result_v2EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, call_routes_update_allowed_caller_result_v2EntityLiveStrict, "Live entity test blocked: %s", "the flow updates a call_routes_update_allowed_caller_result_v2 record it did not create")
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		callRoutesUpdateAllowedCallerResultV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.call_routes_update_allowed_caller_result_v2")))
		var callRoutesUpdateAllowedCallerResultV2Ref01Data map[string]any
		if len(callRoutesUpdateAllowedCallerResultV2Ref01DataRaw) > 0 {
			callRoutesUpdateAllowedCallerResultV2Ref01Data = core.ToMapAny(callRoutesUpdateAllowedCallerResultV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = callRoutesUpdateAllowedCallerResultV2Ref01Data

		// UPDATE
		callRoutesUpdateAllowedCallerResultV2Ref01Ent := client.CallRoutesUpdateAllowedCallerResultV2(nil)
		callRoutesUpdateAllowedCallerResultV2Ref01DataUp0Up := map[string]any{
			"id": callRoutesUpdateAllowedCallerResultV2Ref01Data["id"],
			"call_route_id": setup.idmap["call_route_id"],
		}

		callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Name := "name"
		callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Value := fmt.Sprintf("Mark01-call_routes_update_allowed_caller_result_v2_ref01_%d", setup.now)
		callRoutesUpdateAllowedCallerResultV2Ref01DataUp0Up[callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Name] = callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Value

		callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0Result, err := callRoutesUpdateAllowedCallerResultV2Ref01Ent.Update(callRoutesUpdateAllowedCallerResultV2Ref01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0 := core.ToMapAny(entityData(callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0Result))
		if callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0["id"] != callRoutesUpdateAllowedCallerResultV2Ref01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0[callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Name] != callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Name, callRoutesUpdateAllowedCallerResultV2Ref01ResdataUp0[callRoutesUpdateAllowedCallerResultV2Ref01MarkdefUp0Name])
		}

	})
}

func call_routes_update_allowed_caller_result_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "call_routes_update_allowed_caller_result_v2", "CallRoutesUpdateAllowedCallerResultV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read call_routes_update_allowed_caller_result_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse call_routes_update_allowed_caller_result_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"call_routes_update_allowed_caller_result_v201", "call_routes_update_allowed_caller_result_v202", "call_routes_update_allowed_caller_result_v203", "call_route01", "call_route02", "call_route03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_CALL_ROUTES_UPDATE_ALLOWED_CALLER_RESULT_V2_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add call_route_id alias for update test.
	if idmapResolved["call_route_id"] == nil {
		idmapResolved["call_route_id"] = idmapResolved["call_route01"]
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

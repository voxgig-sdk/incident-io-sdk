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
const call_route_allowed_callerEntityLiveStrict = true


func TestCallRouteAllowedCallerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CallRouteAllowedCaller(nil)
		if ent == nil {
			t.Fatal("expected non-nil CallRouteAllowedCallerEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CallRouteAllowedCaller(nil).List(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := call_route_allowed_callerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load", "remove", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "call_route_allowed_caller." + _op, _mode); _shouldSkip {
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
					liveMiss(t, call_route_allowed_callerEntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, call_route_allowed_callerEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a call_route_allowed_caller record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		callRouteAllowedCallerRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.call_route_allowed_caller")))
		var callRouteAllowedCallerRef01Data map[string]any
		if len(callRouteAllowedCallerRef01DataRaw) > 0 {
			callRouteAllowedCallerRef01Data = core.ToMapAny(callRouteAllowedCallerRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = callRouteAllowedCallerRef01Data

		// UPDATE
		callRouteAllowedCallerRef01Ent := client.CallRouteAllowedCaller(nil)
		callRouteAllowedCallerRef01DataUp0Up := map[string]any{
			"id": callRouteAllowedCallerRef01Data["id"],
			"call_route_id": setup.idmap["call_route_id"],
		}

		callRouteAllowedCallerRef01MarkdefUp0Name := "name"
		callRouteAllowedCallerRef01MarkdefUp0Value := fmt.Sprintf("Mark01-call_route_allowed_caller_ref01_%d", setup.now)
		callRouteAllowedCallerRef01DataUp0Up[callRouteAllowedCallerRef01MarkdefUp0Name] = callRouteAllowedCallerRef01MarkdefUp0Value

		callRouteAllowedCallerRef01ResdataUp0Result, err := callRouteAllowedCallerRef01Ent.Update(callRouteAllowedCallerRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		callRouteAllowedCallerRef01ResdataUp0 := core.ToMapAny(entityData(callRouteAllowedCallerRef01ResdataUp0Result))
		if callRouteAllowedCallerRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if callRouteAllowedCallerRef01ResdataUp0["id"] != callRouteAllowedCallerRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if callRouteAllowedCallerRef01ResdataUp0[callRouteAllowedCallerRef01MarkdefUp0Name] != callRouteAllowedCallerRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", callRouteAllowedCallerRef01MarkdefUp0Name, callRouteAllowedCallerRef01ResdataUp0[callRouteAllowedCallerRef01MarkdefUp0Name])
		}

		// LOAD
		callRouteAllowedCallerRef01MatchDt0 := map[string]any{
			"id": callRouteAllowedCallerRef01Data["id"],
		}
		if v := setup.idmap["call_route_id"]; v != nil {
			callRouteAllowedCallerRef01MatchDt0["call_route_id"] = v
		} else {
			callRouteAllowedCallerRef01MatchDt0["call_route_id"] = setup.idmap["call_route01"]
		}
		callRouteAllowedCallerRef01DataDt0Loaded, err := callRouteAllowedCallerRef01Ent.Load(callRouteAllowedCallerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		callRouteAllowedCallerRef01DataDt0LoadResult := core.ToMapAny(entityData(callRouteAllowedCallerRef01DataDt0Loaded))
		if callRouteAllowedCallerRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if callRouteAllowedCallerRef01DataDt0LoadResult["id"] != callRouteAllowedCallerRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func call_route_allowed_callerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "call_route_allowed_caller", "CallRouteAllowedCallerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read call_route_allowed_caller test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse call_route_allowed_caller test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"call_route_allowed_caller01", "call_route_allowed_caller02", "call_route_allowed_caller03", "call_route01", "call_route02", "call_route03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID"])
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

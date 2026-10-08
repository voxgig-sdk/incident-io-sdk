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
const call_routes_list_options_result_v2EntityLiveStrict = true


func TestCallRoutesListOptionsResultV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CallRoutesListOptionsResultV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil CallRoutesListOptionsResultV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CallRoutesListOptionsResultV2(nil).List(map[string]any{"call_route_id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := call_routes_list_options_result_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "call_routes_list_options_result_v2." + _op, _mode); _shouldSkip {
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
					liveMiss(t, call_routes_list_options_result_v2EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID", _liveKey)
				}
			}
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		callRoutesListOptionsResultV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.call_routes_list_options_result_v2")))
		var callRoutesListOptionsResultV2Ref01Data map[string]any
		if len(callRoutesListOptionsResultV2Ref01DataRaw) > 0 {
			callRoutesListOptionsResultV2Ref01Data = core.ToMapAny(callRoutesListOptionsResultV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = callRoutesListOptionsResultV2Ref01Data

		// LIST
		callRoutesListOptionsResultV2Ref01Ent := client.CallRoutesListOptionsResultV2(nil)
		callRoutesListOptionsResultV2Ref01Match := map[string]any{
			"call_route_id": setup.idmap["call_route01"],
		}

		callRoutesListOptionsResultV2Ref01ListResult, err := callRoutesListOptionsResultV2Ref01Ent.List(callRoutesListOptionsResultV2Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, callRoutesListOptionsResultV2Ref01ListOk := callRoutesListOptionsResultV2Ref01ListResult.([]any)
		if !callRoutesListOptionsResultV2Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", callRoutesListOptionsResultV2Ref01ListResult)
		}

	})
}

func call_routes_list_options_result_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "call_routes_list_options_result_v2", "CallRoutesListOptionsResultV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read call_routes_list_options_result_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse call_routes_list_options_result_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"call_routes_list_options_result_v201", "call_routes_list_options_result_v202", "call_routes_list_options_result_v203", "call_route01", "call_route02", "call_route03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_CALL_ROUTES_LIST_OPTIONS_RESULT_V2_ENTID"])
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

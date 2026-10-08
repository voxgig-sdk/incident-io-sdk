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
const schedules_update_override_result_v2EntityLiveStrict = true


func TestSchedulesUpdateOverrideResultV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SchedulesUpdateOverrideResultV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil SchedulesUpdateOverrideResultV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.SchedulesUpdateOverrideResultV2(nil).Update(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := schedules_update_override_result_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "schedules_update_override_result_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, schedules_update_override_result_v2EntityLiveStrict, "Live entity test blocked: %s", "the flow updates a schedules_update_override_result_v2 record it did not create")
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		schedulesUpdateOverrideResultV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.schedules_update_override_result_v2")))
		var schedulesUpdateOverrideResultV2Ref01Data map[string]any
		if len(schedulesUpdateOverrideResultV2Ref01DataRaw) > 0 {
			schedulesUpdateOverrideResultV2Ref01Data = core.ToMapAny(schedulesUpdateOverrideResultV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = schedulesUpdateOverrideResultV2Ref01Data

		// UPDATE
		schedulesUpdateOverrideResultV2Ref01Ent := client.SchedulesUpdateOverrideResultV2(nil)
		schedulesUpdateOverrideResultV2Ref01DataUp0Up := map[string]any{
			"id": schedulesUpdateOverrideResultV2Ref01Data["id"],
		}

		schedulesUpdateOverrideResultV2Ref01MarkdefUp0Name := "created_at"
		schedulesUpdateOverrideResultV2Ref01MarkdefUp0Value := fmt.Sprintf("Mark01-schedules_update_override_result_v2_ref01_%d", setup.now)
		schedulesUpdateOverrideResultV2Ref01DataUp0Up[schedulesUpdateOverrideResultV2Ref01MarkdefUp0Name] = schedulesUpdateOverrideResultV2Ref01MarkdefUp0Value

		schedulesUpdateOverrideResultV2Ref01ResdataUp0Result, err := schedulesUpdateOverrideResultV2Ref01Ent.Update(schedulesUpdateOverrideResultV2Ref01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		schedulesUpdateOverrideResultV2Ref01ResdataUp0 := core.ToMapAny(entityData(schedulesUpdateOverrideResultV2Ref01ResdataUp0Result))
		if schedulesUpdateOverrideResultV2Ref01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if schedulesUpdateOverrideResultV2Ref01ResdataUp0["id"] != schedulesUpdateOverrideResultV2Ref01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if schedulesUpdateOverrideResultV2Ref01ResdataUp0[schedulesUpdateOverrideResultV2Ref01MarkdefUp0Name] != schedulesUpdateOverrideResultV2Ref01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", schedulesUpdateOverrideResultV2Ref01MarkdefUp0Name, schedulesUpdateOverrideResultV2Ref01ResdataUp0[schedulesUpdateOverrideResultV2Ref01MarkdefUp0Name])
		}

	})
}

func schedules_update_override_result_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "schedules_update_override_result_v2", "SchedulesUpdateOverrideResultV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read schedules_update_override_result_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse schedules_update_override_result_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"schedules_update_override_result_v201", "schedules_update_override_result_v202", "schedules_update_override_result_v203"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_SCHEDULES_UPDATE_OVERRIDE_RESULT_V2_ENTID"])
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

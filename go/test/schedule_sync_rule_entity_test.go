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
const schedule_sync_ruleEntityLiveStrict = true


func TestScheduleSyncRuleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ScheduleSyncRule(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScheduleSyncRuleEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.ScheduleSyncRule(nil).List(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := schedule_sync_ruleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "schedule_sync_rule." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"schedule01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, schedule_sync_ruleEntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID", _liveKey)
				}
			}
		}
		if setup.live {
			liveMiss(t, schedule_sync_ruleEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a schedule_sync_rule record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		scheduleSyncRuleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.schedule_sync_rule")))
		var scheduleSyncRuleRef01Data map[string]any
		if len(scheduleSyncRuleRef01DataRaw) > 0 {
			scheduleSyncRuleRef01Data = core.ToMapAny(scheduleSyncRuleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = scheduleSyncRuleRef01Data

		// UPDATE
		scheduleSyncRuleRef01Ent := client.ScheduleSyncRule(nil)
		scheduleSyncRuleRef01DataUp0Up := map[string]any{
			"id": scheduleSyncRuleRef01Data["id"],
			"schedule_id": setup.idmap["schedule_id"],
		}

		scheduleSyncRuleRef01MarkdefUp0Name := "created_at"
		scheduleSyncRuleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-schedule_sync_rule_ref01_%d", setup.now)
		scheduleSyncRuleRef01DataUp0Up[scheduleSyncRuleRef01MarkdefUp0Name] = scheduleSyncRuleRef01MarkdefUp0Value

		scheduleSyncRuleRef01ResdataUp0Result, err := scheduleSyncRuleRef01Ent.Update(scheduleSyncRuleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		scheduleSyncRuleRef01ResdataUp0 := core.ToMapAny(entityData(scheduleSyncRuleRef01ResdataUp0Result))
		if scheduleSyncRuleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if scheduleSyncRuleRef01ResdataUp0["id"] != scheduleSyncRuleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if scheduleSyncRuleRef01ResdataUp0[scheduleSyncRuleRef01MarkdefUp0Name] != scheduleSyncRuleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", scheduleSyncRuleRef01MarkdefUp0Name, scheduleSyncRuleRef01ResdataUp0[scheduleSyncRuleRef01MarkdefUp0Name])
		}

		// LOAD
		scheduleSyncRuleRef01MatchDt0 := map[string]any{
			"id": scheduleSyncRuleRef01Data["id"],
		}
		if v := setup.idmap["schedule_id"]; v != nil {
			scheduleSyncRuleRef01MatchDt0["schedule_id"] = v
		} else {
			scheduleSyncRuleRef01MatchDt0["schedule_id"] = setup.idmap["schedule01"]
		}
		scheduleSyncRuleRef01DataDt0Loaded, err := scheduleSyncRuleRef01Ent.Load(scheduleSyncRuleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		scheduleSyncRuleRef01DataDt0LoadResult := core.ToMapAny(entityData(scheduleSyncRuleRef01DataDt0Loaded))
		if scheduleSyncRuleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if scheduleSyncRuleRef01DataDt0LoadResult["id"] != scheduleSyncRuleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func schedule_sync_ruleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "schedule_sync_rule", "ScheduleSyncRuleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read schedule_sync_rule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse schedule_sync_rule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"schedule_sync_rule01", "schedule_sync_rule02", "schedule_sync_rule03", "schedule01", "schedule02", "schedule03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_SCHEDULE_SYNC_RULE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add schedule_id alias for update test.
	if idmapResolved["schedule_id"] == nil {
		idmapResolved["schedule_id"] = idmapResolved["schedule01"]
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

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

func TestScheduleSyncRuleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ScheduleSyncRule(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScheduleSyncRuleEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"schedule_sync_rule": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ScheduleSyncRule(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ScheduleSyncRule(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := schedule_sync_ruleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "schedule_sync_rule." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_SCHEDULE_SYNC_RULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		scheduleSyncRuleRef01Ent := client.ScheduleSyncRule(nil)
		scheduleSyncRuleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "schedule_sync_rule"}, setup.data), "schedule_sync_rule_ref01"))
		scheduleSyncRuleRef01Data["schedule_id"] = setup.idmap["schedule01"]

		scheduleSyncRuleRef01DataResult, err := scheduleSyncRuleRef01Ent.Create(scheduleSyncRuleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		scheduleSyncRuleRef01Data = core.ToMapAny(scheduleSyncRuleRef01DataResult)
		if scheduleSyncRuleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if scheduleSyncRuleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		scheduleSyncRuleRef01Match := map[string]any{
			"schedule_id": setup.idmap["schedule01"],
		}

		scheduleSyncRuleRef01ListResult, err := scheduleSyncRuleRef01Ent.List(scheduleSyncRuleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		scheduleSyncRuleRef01List, scheduleSyncRuleRef01ListOk := scheduleSyncRuleRef01ListResult.([]any)
		if !scheduleSyncRuleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", scheduleSyncRuleRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(scheduleSyncRuleRef01List), map[string]any{"id": scheduleSyncRuleRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
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
		scheduleSyncRuleRef01ResdataUp0 := core.ToMapAny(scheduleSyncRuleRef01ResdataUp0Result)
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
		scheduleSyncRuleRef01DataDt0Loaded, err := scheduleSyncRuleRef01Ent.Load(scheduleSyncRuleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		scheduleSyncRuleRef01DataDt0LoadResult := core.ToMapAny(scheduleSyncRuleRef01DataDt0Loaded)
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
	idmap := vs.Transform(
		[]any{"schedule_sync_rule01", "schedule_sync_rule02", "schedule_sync_rule03", "schedule01", "schedule02", "schedule03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_SCHEDULE_SYNC_RULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_SCHEDULE_SYNC_RULE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_SCHEDULE_SYNC_RULE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add schedule_id alias for update test.
	if idmapResolved["schedule_id"] == nil {
		idmapResolved["schedule_id"] = idmapResolved["schedule01"]
	}

	if env["INCIDENTIO_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewIncidentIoSDK(core.ToMapAny(mergedOpts))
	}

	live := env["INCIDENTIO_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["INCIDENTIO_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

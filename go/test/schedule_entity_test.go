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

func TestScheduleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Schedule(nil)
		if ent == nil {
			t.Fatal("expected non-nil ScheduleEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"schedule": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Schedule(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Schedule(nil).Stream("list", nil, nil) {
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
		setup := scheduleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "schedule." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_SCHEDULE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		scheduleRef01Ent := client.Schedule(nil)
		scheduleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "schedule"}, setup.data), "schedule_ref01"))

		scheduleRef01DataResult, err := scheduleRef01Ent.Create(scheduleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		scheduleRef01Data = core.ToMapAny(scheduleRef01DataResult)
		if scheduleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if scheduleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		scheduleRef01Match := map[string]any{}

		scheduleRef01ListResult, err := scheduleRef01Ent.List(scheduleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		scheduleRef01List, scheduleRef01ListOk := scheduleRef01ListResult.([]any)
		if !scheduleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", scheduleRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(scheduleRef01List), map[string]any{"id": scheduleRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		scheduleRef01DataUp0Up := map[string]any{
			"id": scheduleRef01Data["id"],
		}

		scheduleRef01MarkdefUp0Name := "created_at"
		scheduleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-schedule_ref01_%d", setup.now)
		scheduleRef01DataUp0Up[scheduleRef01MarkdefUp0Name] = scheduleRef01MarkdefUp0Value

		scheduleRef01ResdataUp0Result, err := scheduleRef01Ent.Update(scheduleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		scheduleRef01ResdataUp0 := core.ToMapAny(scheduleRef01ResdataUp0Result)
		if scheduleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if scheduleRef01ResdataUp0["id"] != scheduleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if scheduleRef01ResdataUp0[scheduleRef01MarkdefUp0Name] != scheduleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", scheduleRef01MarkdefUp0Name, scheduleRef01ResdataUp0[scheduleRef01MarkdefUp0Name])
		}

		// LOAD
		scheduleRef01MatchDt0 := map[string]any{
			"id": scheduleRef01Data["id"],
		}
		scheduleRef01DataDt0Loaded, err := scheduleRef01Ent.Load(scheduleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		scheduleRef01DataDt0LoadResult := core.ToMapAny(scheduleRef01DataDt0Loaded)
		if scheduleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if scheduleRef01DataDt0LoadResult["id"] != scheduleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		scheduleRef01MatchRm0 := map[string]any{
			"id": scheduleRef01Data["id"],
		}
		_, err = scheduleRef01Ent.Remove(scheduleRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		scheduleRef01MatchRt0 := map[string]any{}

		scheduleRef01ListRt0Result, err := scheduleRef01Ent.List(scheduleRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		scheduleRef01ListRt0, scheduleRef01ListRt0Ok := scheduleRef01ListRt0Result.([]any)
		if !scheduleRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", scheduleRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(scheduleRef01ListRt0), map[string]any{"id": scheduleRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func scheduleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "schedule", "ScheduleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read schedule test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse schedule test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"schedule01", "schedule02", "schedule03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_SCHEDULE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_SCHEDULE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_SCHEDULE_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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

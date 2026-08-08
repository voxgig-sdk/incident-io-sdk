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

func TestAlertSourceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AlertSource(nil)
		if ent == nil {
			t.Fatal("expected non-nil AlertSourceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"alert_source": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AlertSource(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AlertSource(nil).Stream("list", nil, nil) {
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
		setup := alert_sourceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "alert_source." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_ALERT_SOURCE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		alertSourceRef01Ent := client.AlertSource(nil)
		alertSourceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "alert_source"}, setup.data), "alert_source_ref01"))

		alertSourceRef01DataResult, err := alertSourceRef01Ent.Create(alertSourceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		alertSourceRef01Data = core.ToMapAny(alertSourceRef01DataResult)
		if alertSourceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if alertSourceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		alertSourceRef01Match := map[string]any{}

		alertSourceRef01ListResult, err := alertSourceRef01Ent.List(alertSourceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		alertSourceRef01List, alertSourceRef01ListOk := alertSourceRef01ListResult.([]any)
		if !alertSourceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", alertSourceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(alertSourceRef01List), map[string]any{"id": alertSourceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		alertSourceRef01DataUp0Up := map[string]any{
			"id": alertSourceRef01Data["id"],
		}

		alertSourceRef01MarkdefUp0Name := "alert_events_url"
		alertSourceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-alert_source_ref01_%d", setup.now)
		alertSourceRef01DataUp0Up[alertSourceRef01MarkdefUp0Name] = alertSourceRef01MarkdefUp0Value

		alertSourceRef01ResdataUp0Result, err := alertSourceRef01Ent.Update(alertSourceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		alertSourceRef01ResdataUp0 := core.ToMapAny(alertSourceRef01ResdataUp0Result)
		if alertSourceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if alertSourceRef01ResdataUp0["id"] != alertSourceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if alertSourceRef01ResdataUp0[alertSourceRef01MarkdefUp0Name] != alertSourceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", alertSourceRef01MarkdefUp0Name, alertSourceRef01ResdataUp0[alertSourceRef01MarkdefUp0Name])
		}

		// LOAD
		alertSourceRef01MatchDt0 := map[string]any{
			"id": alertSourceRef01Data["id"],
		}
		alertSourceRef01DataDt0Loaded, err := alertSourceRef01Ent.Load(alertSourceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		alertSourceRef01DataDt0LoadResult := core.ToMapAny(alertSourceRef01DataDt0Loaded)
		if alertSourceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if alertSourceRef01DataDt0LoadResult["id"] != alertSourceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		alertSourceRef01MatchRm0 := map[string]any{
			"id": alertSourceRef01Data["id"],
		}
		_, err = alertSourceRef01Ent.Remove(alertSourceRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		alertSourceRef01MatchRt0 := map[string]any{}

		alertSourceRef01ListRt0Result, err := alertSourceRef01Ent.List(alertSourceRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		alertSourceRef01ListRt0, alertSourceRef01ListRt0Ok := alertSourceRef01ListRt0Result.([]any)
		if !alertSourceRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", alertSourceRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(alertSourceRef01ListRt0), map[string]any{"id": alertSourceRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func alert_sourceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "alert_source", "AlertSourceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read alert_source test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse alert_source test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"alert_source01", "alert_source02", "alert_source03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_ALERT_SOURCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_ALERT_SOURCE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_ALERT_SOURCE_ENTID"])
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

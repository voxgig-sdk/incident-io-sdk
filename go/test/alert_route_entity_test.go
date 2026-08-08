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

func TestAlertRouteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AlertRoute(nil)
		if ent == nil {
			t.Fatal("expected non-nil AlertRouteEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"alert_route": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.AlertRoute(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.AlertRoute(nil).Stream("list", nil, nil) {
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
		setup := alert_routeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "alert_route." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_ALERT_ROUTE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		alertRouteRef01Ent := client.AlertRoute(nil)
		alertRouteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "alert_route"}, setup.data), "alert_route_ref01"))

		alertRouteRef01DataResult, err := alertRouteRef01Ent.Create(alertRouteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		alertRouteRef01Data = core.ToMapAny(alertRouteRef01DataResult)
		if alertRouteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if alertRouteRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		alertRouteRef01Match := map[string]any{}

		alertRouteRef01ListResult, err := alertRouteRef01Ent.List(alertRouteRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		alertRouteRef01List, alertRouteRef01ListOk := alertRouteRef01ListResult.([]any)
		if !alertRouteRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", alertRouteRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(alertRouteRef01List), map[string]any{"id": alertRouteRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		alertRouteRef01DataUp0Up := map[string]any{
			"id": alertRouteRef01Data["id"],
		}

		alertRouteRef01MarkdefUp0Name := "created_at"
		alertRouteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-alert_route_ref01_%d", setup.now)
		alertRouteRef01DataUp0Up[alertRouteRef01MarkdefUp0Name] = alertRouteRef01MarkdefUp0Value

		alertRouteRef01ResdataUp0Result, err := alertRouteRef01Ent.Update(alertRouteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		alertRouteRef01ResdataUp0 := core.ToMapAny(alertRouteRef01ResdataUp0Result)
		if alertRouteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if alertRouteRef01ResdataUp0["id"] != alertRouteRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if alertRouteRef01ResdataUp0[alertRouteRef01MarkdefUp0Name] != alertRouteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", alertRouteRef01MarkdefUp0Name, alertRouteRef01ResdataUp0[alertRouteRef01MarkdefUp0Name])
		}

		// LOAD
		alertRouteRef01MatchDt0 := map[string]any{
			"id": alertRouteRef01Data["id"],
		}
		alertRouteRef01DataDt0Loaded, err := alertRouteRef01Ent.Load(alertRouteRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		alertRouteRef01DataDt0LoadResult := core.ToMapAny(alertRouteRef01DataDt0Loaded)
		if alertRouteRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if alertRouteRef01DataDt0LoadResult["id"] != alertRouteRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		alertRouteRef01MatchRm0 := map[string]any{
			"id": alertRouteRef01Data["id"],
		}
		_, err = alertRouteRef01Ent.Remove(alertRouteRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		alertRouteRef01MatchRt0 := map[string]any{}

		alertRouteRef01ListRt0Result, err := alertRouteRef01Ent.List(alertRouteRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		alertRouteRef01ListRt0, alertRouteRef01ListRt0Ok := alertRouteRef01ListRt0Result.([]any)
		if !alertRouteRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", alertRouteRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(alertRouteRef01ListRt0), map[string]any{"id": alertRouteRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func alert_routeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "alert_route", "AlertRouteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read alert_route test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse alert_route test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"alert_route01", "alert_route02", "alert_route03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_ALERT_ROUTE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_ALERT_ROUTE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_ALERT_ROUTE_ENTID"])
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

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

func TestStatusPageMaintenanceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StatusPageMaintenance(nil)
		if ent == nil {
			t.Fatal("expected non-nil StatusPageMaintenanceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"status_page_maintenance": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.StatusPageMaintenance(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.StatusPageMaintenance(nil).Stream("list", nil, nil) {
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
		setup := status_page_maintenanceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "status_page_maintenance." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_STATUS_PAGE_MAINTENANCE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		statusPageMaintenanceRef01Ent := client.StatusPageMaintenance(nil)
		statusPageMaintenanceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "status_page_maintenance"}, setup.data), "status_page_maintenance_ref01"))

		statusPageMaintenanceRef01DataResult, err := statusPageMaintenanceRef01Ent.Create(statusPageMaintenanceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		statusPageMaintenanceRef01Data = core.ToMapAny(statusPageMaintenanceRef01DataResult)
		if statusPageMaintenanceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if statusPageMaintenanceRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		statusPageMaintenanceRef01Match := map[string]any{}

		statusPageMaintenanceRef01ListResult, err := statusPageMaintenanceRef01Ent.List(statusPageMaintenanceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		statusPageMaintenanceRef01List, statusPageMaintenanceRef01ListOk := statusPageMaintenanceRef01ListResult.([]any)
		if !statusPageMaintenanceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", statusPageMaintenanceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(statusPageMaintenanceRef01List), map[string]any{"id": statusPageMaintenanceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		statusPageMaintenanceRef01MatchDt0 := map[string]any{
			"id": statusPageMaintenanceRef01Data["id"],
		}
		statusPageMaintenanceRef01DataDt0Loaded, err := statusPageMaintenanceRef01Ent.Load(statusPageMaintenanceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		statusPageMaintenanceRef01DataDt0LoadResult := core.ToMapAny(statusPageMaintenanceRef01DataDt0Loaded)
		if statusPageMaintenanceRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if statusPageMaintenanceRef01DataDt0LoadResult["id"] != statusPageMaintenanceRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func status_page_maintenanceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "status_page_maintenance", "StatusPageMaintenanceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read status_page_maintenance test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse status_page_maintenance test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"status_page_maintenance01", "status_page_maintenance02", "status_page_maintenance03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_STATUS_PAGE_MAINTENANCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_STATUS_PAGE_MAINTENANCE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_STATUS_PAGE_MAINTENANCE_ENTID"])
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

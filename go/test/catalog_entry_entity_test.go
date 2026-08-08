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

func TestCatalogEntryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CatalogEntry(nil)
		if ent == nil {
			t.Fatal("expected non-nil CatalogEntryEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"catalog_entry": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CatalogEntry(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CatalogEntry(nil).Stream("list", nil, nil) {
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
		setup := catalog_entryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "catalog_entry." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_CATALOG_ENTRY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		catalogEntryRef01Ent := client.CatalogEntry(nil)
		catalogEntryRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "catalog_entry"}, setup.data), "catalog_entry_ref01"))

		catalogEntryRef01DataResult, err := catalogEntryRef01Ent.Create(catalogEntryRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		catalogEntryRef01Data = core.ToMapAny(catalogEntryRef01DataResult)
		if catalogEntryRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if catalogEntryRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		catalogEntryRef01Match := map[string]any{}

		catalogEntryRef01ListResult, err := catalogEntryRef01Ent.List(catalogEntryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		catalogEntryRef01List, catalogEntryRef01ListOk := catalogEntryRef01ListResult.([]any)
		if !catalogEntryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", catalogEntryRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(catalogEntryRef01List), map[string]any{"id": catalogEntryRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		catalogEntryRef01DataUp0Up := map[string]any{
			"id": catalogEntryRef01Data["id"],
		}

		catalogEntryRef01MarkdefUp0Name := "archived_at"
		catalogEntryRef01MarkdefUp0Value := fmt.Sprintf("Mark01-catalog_entry_ref01_%d", setup.now)
		catalogEntryRef01DataUp0Up[catalogEntryRef01MarkdefUp0Name] = catalogEntryRef01MarkdefUp0Value

		catalogEntryRef01ResdataUp0Result, err := catalogEntryRef01Ent.Update(catalogEntryRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		catalogEntryRef01ResdataUp0 := core.ToMapAny(catalogEntryRef01ResdataUp0Result)
		if catalogEntryRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if catalogEntryRef01ResdataUp0["id"] != catalogEntryRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if catalogEntryRef01ResdataUp0[catalogEntryRef01MarkdefUp0Name] != catalogEntryRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", catalogEntryRef01MarkdefUp0Name, catalogEntryRef01ResdataUp0[catalogEntryRef01MarkdefUp0Name])
		}

		// LOAD
		catalogEntryRef01MatchDt0 := map[string]any{
			"id": catalogEntryRef01Data["id"],
		}
		catalogEntryRef01DataDt0Loaded, err := catalogEntryRef01Ent.Load(catalogEntryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		catalogEntryRef01DataDt0LoadResult := core.ToMapAny(catalogEntryRef01DataDt0Loaded)
		if catalogEntryRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if catalogEntryRef01DataDt0LoadResult["id"] != catalogEntryRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func catalog_entryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "catalog_entry", "CatalogEntryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read catalog_entry test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse catalog_entry test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"catalog_entry01", "catalog_entry02", "catalog_entry03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_CATALOG_ENTRY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_CATALOG_ENTRY_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_CATALOG_ENTRY_ENTID"])
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

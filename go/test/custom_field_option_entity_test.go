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

func TestCustomFieldOptionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomFieldOption(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomFieldOptionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_field_option": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomFieldOption(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomFieldOption(nil).Stream("list", nil, nil) {
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
		setup := custom_field_optionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_field_option." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customFieldOptionRef01Ent := client.CustomFieldOption(nil)
		customFieldOptionRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "custom_field_option"}, setup.data), "custom_field_option_ref01"))

		customFieldOptionRef01DataResult, err := customFieldOptionRef01Ent.Create(customFieldOptionRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customFieldOptionRef01Data = core.ToMapAny(customFieldOptionRef01DataResult)
		if customFieldOptionRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customFieldOptionRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customFieldOptionRef01Match := map[string]any{}

		customFieldOptionRef01ListResult, err := customFieldOptionRef01Ent.List(customFieldOptionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customFieldOptionRef01List, customFieldOptionRef01ListOk := customFieldOptionRef01ListResult.([]any)
		if !customFieldOptionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customFieldOptionRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customFieldOptionRef01List), map[string]any{"id": customFieldOptionRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		customFieldOptionRef01DataUp0Up := map[string]any{
			"id": customFieldOptionRef01Data["id"],
		}

		customFieldOptionRef01MarkdefUp0Name := "custom_field_id"
		customFieldOptionRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_field_option_ref01_%d", setup.now)
		customFieldOptionRef01DataUp0Up[customFieldOptionRef01MarkdefUp0Name] = customFieldOptionRef01MarkdefUp0Value

		customFieldOptionRef01ResdataUp0Result, err := customFieldOptionRef01Ent.Update(customFieldOptionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customFieldOptionRef01ResdataUp0 := core.ToMapAny(customFieldOptionRef01ResdataUp0Result)
		if customFieldOptionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customFieldOptionRef01ResdataUp0["id"] != customFieldOptionRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customFieldOptionRef01ResdataUp0[customFieldOptionRef01MarkdefUp0Name] != customFieldOptionRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customFieldOptionRef01MarkdefUp0Name, customFieldOptionRef01ResdataUp0[customFieldOptionRef01MarkdefUp0Name])
		}

		// LOAD
		customFieldOptionRef01MatchDt0 := map[string]any{
			"id": customFieldOptionRef01Data["id"],
		}
		customFieldOptionRef01DataDt0Loaded, err := customFieldOptionRef01Ent.Load(customFieldOptionRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customFieldOptionRef01DataDt0LoadResult := core.ToMapAny(customFieldOptionRef01DataDt0Loaded)
		if customFieldOptionRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customFieldOptionRef01DataDt0LoadResult["id"] != customFieldOptionRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customFieldOptionRef01MatchRm0 := map[string]any{
			"id": customFieldOptionRef01Data["id"],
		}
		_, err = customFieldOptionRef01Ent.Remove(customFieldOptionRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customFieldOptionRef01MatchRt0 := map[string]any{}

		customFieldOptionRef01ListRt0Result, err := customFieldOptionRef01Ent.List(customFieldOptionRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customFieldOptionRef01ListRt0, customFieldOptionRef01ListRt0Ok := customFieldOptionRef01ListRt0Result.([]any)
		if !customFieldOptionRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customFieldOptionRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customFieldOptionRef01ListRt0), map[string]any{"id": customFieldOptionRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func custom_field_optionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_field_option", "CustomFieldOptionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_field_option test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_field_option test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"custom_field_option01", "custom_field_option02", "custom_field_option03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_CUSTOM_FIELD_OPTION_ENTID"])
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

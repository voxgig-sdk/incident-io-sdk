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

func TestSecretEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Secret(nil)
		if ent == nil {
			t.Fatal("expected non-nil SecretEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"secret": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Secret(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Secret(nil).Stream("list", nil, nil) {
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
		setup := secretBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "secret." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_SECRET_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		secretRef01Ent := client.Secret(nil)
		secretRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "secret"}, setup.data), "secret_ref01"))

		secretRef01DataResult, err := secretRef01Ent.Create(secretRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		secretRef01Data = core.ToMapAny(secretRef01DataResult)
		if secretRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if secretRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		secretRef01Match := map[string]any{}

		secretRef01ListResult, err := secretRef01Ent.List(secretRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		secretRef01List, secretRef01ListOk := secretRef01ListResult.([]any)
		if !secretRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", secretRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(secretRef01List), map[string]any{"id": secretRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		secretRef01DataUp0Up := map[string]any{
			"id": secretRef01Data["id"],
		}

		secretRef01MarkdefUp0Name := "created_at"
		secretRef01MarkdefUp0Value := fmt.Sprintf("Mark01-secret_ref01_%d", setup.now)
		secretRef01DataUp0Up[secretRef01MarkdefUp0Name] = secretRef01MarkdefUp0Value

		secretRef01ResdataUp0Result, err := secretRef01Ent.Update(secretRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		secretRef01ResdataUp0 := core.ToMapAny(secretRef01ResdataUp0Result)
		if secretRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if secretRef01ResdataUp0["id"] != secretRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if secretRef01ResdataUp0[secretRef01MarkdefUp0Name] != secretRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", secretRef01MarkdefUp0Name, secretRef01ResdataUp0[secretRef01MarkdefUp0Name])
		}

		// LOAD
		secretRef01MatchDt0 := map[string]any{
			"id": secretRef01Data["id"],
		}
		secretRef01DataDt0Loaded, err := secretRef01Ent.Load(secretRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		secretRef01DataDt0LoadResult := core.ToMapAny(secretRef01DataDt0Loaded)
		if secretRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if secretRef01DataDt0LoadResult["id"] != secretRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		secretRef01MatchRm0 := map[string]any{
			"id": secretRef01Data["id"],
		}
		_, err = secretRef01Ent.Remove(secretRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		secretRef01MatchRt0 := map[string]any{}

		secretRef01ListRt0Result, err := secretRef01Ent.List(secretRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		secretRef01ListRt0, secretRef01ListRt0Ok := secretRef01ListRt0Result.([]any)
		if !secretRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", secretRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(secretRef01ListRt0), map[string]any{"id": secretRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func secretBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "secret", "SecretTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read secret test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse secret test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"secret01", "secret02", "secret03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_SECRET_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_SECRET_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_SECRET_ENTID"])
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

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

func TestIncidentStatusEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IncidentStatus(nil)
		if ent == nil {
			t.Fatal("expected non-nil IncidentStatusEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"incident_status": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.IncidentStatus(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.IncidentStatus(nil).Stream("list", nil, nil) {
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
		setup := incident_statusBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "incident_status." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_INCIDENT_STATUS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		incidentStatusRef01Ent := client.IncidentStatus(nil)
		incidentStatusRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "incident_status"}, setup.data), "incident_status_ref01"))

		incidentStatusRef01DataResult, err := incidentStatusRef01Ent.Create(incidentStatusRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		incidentStatusRef01Data = core.ToMapAny(incidentStatusRef01DataResult)
		if incidentStatusRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if incidentStatusRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		incidentStatusRef01Match := map[string]any{}

		incidentStatusRef01ListResult, err := incidentStatusRef01Ent.List(incidentStatusRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentStatusRef01List, incidentStatusRef01ListOk := incidentStatusRef01ListResult.([]any)
		if !incidentStatusRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", incidentStatusRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(incidentStatusRef01List), map[string]any{"id": incidentStatusRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		incidentStatusRef01DataUp0Up := map[string]any{
			"id": incidentStatusRef01Data["id"],
		}

		incidentStatusRef01MarkdefUp0Name := "category"
		incidentStatusRef01MarkdefUp0Value := fmt.Sprintf("Mark01-incident_status_ref01_%d", setup.now)
		incidentStatusRef01DataUp0Up[incidentStatusRef01MarkdefUp0Name] = incidentStatusRef01MarkdefUp0Value

		incidentStatusRef01ResdataUp0Result, err := incidentStatusRef01Ent.Update(incidentStatusRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		incidentStatusRef01ResdataUp0 := core.ToMapAny(incidentStatusRef01ResdataUp0Result)
		if incidentStatusRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if incidentStatusRef01ResdataUp0["id"] != incidentStatusRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if incidentStatusRef01ResdataUp0[incidentStatusRef01MarkdefUp0Name] != incidentStatusRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", incidentStatusRef01MarkdefUp0Name, incidentStatusRef01ResdataUp0[incidentStatusRef01MarkdefUp0Name])
		}

		// LOAD
		incidentStatusRef01MatchDt0 := map[string]any{
			"id": incidentStatusRef01Data["id"],
		}
		incidentStatusRef01DataDt0Loaded, err := incidentStatusRef01Ent.Load(incidentStatusRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		incidentStatusRef01DataDt0LoadResult := core.ToMapAny(incidentStatusRef01DataDt0Loaded)
		if incidentStatusRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if incidentStatusRef01DataDt0LoadResult["id"] != incidentStatusRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		incidentStatusRef01MatchRm0 := map[string]any{
			"id": incidentStatusRef01Data["id"],
		}
		_, err = incidentStatusRef01Ent.Remove(incidentStatusRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		incidentStatusRef01MatchRt0 := map[string]any{}

		incidentStatusRef01ListRt0Result, err := incidentStatusRef01Ent.List(incidentStatusRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentStatusRef01ListRt0, incidentStatusRef01ListRt0Ok := incidentStatusRef01ListRt0Result.([]any)
		if !incidentStatusRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", incidentStatusRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(incidentStatusRef01ListRt0), map[string]any{"id": incidentStatusRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func incident_statusBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "incident_status", "IncidentStatusTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read incident_status test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse incident_status test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"incident_status01", "incident_status02", "incident_status03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_INCIDENT_STATUS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_INCIDENT_STATUS_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_INCIDENT_STATUS_ENTID"])
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

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

func TestIncidentRoleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IncidentRole(nil)
		if ent == nil {
			t.Fatal("expected non-nil IncidentRoleEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"incident_role": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.IncidentRole(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.IncidentRole(nil).Stream("list", nil, nil) {
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
		setup := incident_roleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "incident_role." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_INCIDENT_ROLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		incidentRoleRef01Ent := client.IncidentRole(nil)
		incidentRoleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "incident_role"}, setup.data), "incident_role_ref01"))

		incidentRoleRef01DataResult, err := incidentRoleRef01Ent.Create(incidentRoleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		incidentRoleRef01Data = core.ToMapAny(incidentRoleRef01DataResult)
		if incidentRoleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if incidentRoleRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		incidentRoleRef01Match := map[string]any{}

		incidentRoleRef01ListResult, err := incidentRoleRef01Ent.List(incidentRoleRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentRoleRef01List, incidentRoleRef01ListOk := incidentRoleRef01ListResult.([]any)
		if !incidentRoleRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", incidentRoleRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(incidentRoleRef01List), map[string]any{"id": incidentRoleRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		incidentRoleRef01DataUp0Up := map[string]any{
			"id": incidentRoleRef01Data["id"],
		}

		incidentRoleRef01MarkdefUp0Name := "created_at"
		incidentRoleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-incident_role_ref01_%d", setup.now)
		incidentRoleRef01DataUp0Up[incidentRoleRef01MarkdefUp0Name] = incidentRoleRef01MarkdefUp0Value

		incidentRoleRef01ResdataUp0Result, err := incidentRoleRef01Ent.Update(incidentRoleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		incidentRoleRef01ResdataUp0 := core.ToMapAny(incidentRoleRef01ResdataUp0Result)
		if incidentRoleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if incidentRoleRef01ResdataUp0["id"] != incidentRoleRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if incidentRoleRef01ResdataUp0[incidentRoleRef01MarkdefUp0Name] != incidentRoleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", incidentRoleRef01MarkdefUp0Name, incidentRoleRef01ResdataUp0[incidentRoleRef01MarkdefUp0Name])
		}

		// LOAD
		incidentRoleRef01MatchDt0 := map[string]any{
			"id": incidentRoleRef01Data["id"],
		}
		incidentRoleRef01DataDt0Loaded, err := incidentRoleRef01Ent.Load(incidentRoleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		incidentRoleRef01DataDt0LoadResult := core.ToMapAny(incidentRoleRef01DataDt0Loaded)
		if incidentRoleRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if incidentRoleRef01DataDt0LoadResult["id"] != incidentRoleRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		incidentRoleRef01MatchRm0 := map[string]any{
			"id": incidentRoleRef01Data["id"],
		}
		_, err = incidentRoleRef01Ent.Remove(incidentRoleRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		incidentRoleRef01MatchRt0 := map[string]any{}

		incidentRoleRef01ListRt0Result, err := incidentRoleRef01Ent.List(incidentRoleRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentRoleRef01ListRt0, incidentRoleRef01ListRt0Ok := incidentRoleRef01ListRt0Result.([]any)
		if !incidentRoleRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", incidentRoleRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(incidentRoleRef01ListRt0), map[string]any{"id": incidentRoleRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func incident_roleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "incident_role", "IncidentRoleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read incident_role test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse incident_role test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"incident_role01", "incident_role02", "incident_role03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_INCIDENT_ROLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_INCIDENT_ROLE_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_INCIDENT_ROLE_ENTID"])
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

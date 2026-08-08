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

func TestWorkflowEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Workflow(nil)
		if ent == nil {
			t.Fatal("expected non-nil WorkflowEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"workflow": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Workflow(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Workflow(nil).Stream("list", nil, nil) {
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
		setup := workflowBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "workflow." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_WORKFLOW_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		workflowRef01Ent := client.Workflow(nil)
		workflowRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "workflow"}, setup.data), "workflow_ref01"))

		workflowRef01DataResult, err := workflowRef01Ent.Create(workflowRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		workflowRef01Data = core.ToMapAny(workflowRef01DataResult)
		if workflowRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if workflowRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		workflowRef01Match := map[string]any{}

		workflowRef01ListResult, err := workflowRef01Ent.List(workflowRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workflowRef01List, workflowRef01ListOk := workflowRef01ListResult.([]any)
		if !workflowRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", workflowRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(workflowRef01List), map[string]any{"id": workflowRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		workflowRef01DataUp0Up := map[string]any{
			"id": workflowRef01Data["id"],
		}

		workflowRef01MarkdefUp0Name := "folder"
		workflowRef01MarkdefUp0Value := fmt.Sprintf("Mark01-workflow_ref01_%d", setup.now)
		workflowRef01DataUp0Up[workflowRef01MarkdefUp0Name] = workflowRef01MarkdefUp0Value

		workflowRef01ResdataUp0Result, err := workflowRef01Ent.Update(workflowRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		workflowRef01ResdataUp0 := core.ToMapAny(workflowRef01ResdataUp0Result)
		if workflowRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if workflowRef01ResdataUp0["id"] != workflowRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if workflowRef01ResdataUp0[workflowRef01MarkdefUp0Name] != workflowRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", workflowRef01MarkdefUp0Name, workflowRef01ResdataUp0[workflowRef01MarkdefUp0Name])
		}

		// LOAD
		workflowRef01MatchDt0 := map[string]any{
			"id": workflowRef01Data["id"],
		}
		workflowRef01DataDt0Loaded, err := workflowRef01Ent.Load(workflowRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		workflowRef01DataDt0LoadResult := core.ToMapAny(workflowRef01DataDt0Loaded)
		if workflowRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if workflowRef01DataDt0LoadResult["id"] != workflowRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		workflowRef01MatchRm0 := map[string]any{
			"id": workflowRef01Data["id"],
		}
		_, err = workflowRef01Ent.Remove(workflowRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		workflowRef01MatchRt0 := map[string]any{}

		workflowRef01ListRt0Result, err := workflowRef01Ent.List(workflowRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		workflowRef01ListRt0, workflowRef01ListRt0Ok := workflowRef01ListRt0Result.([]any)
		if !workflowRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", workflowRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(workflowRef01ListRt0), map[string]any{"id": workflowRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func workflowBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "workflow", "WorkflowTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read workflow test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse workflow test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"workflow01", "workflow02", "workflow03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_WORKFLOW_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_WORKFLOW_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_WORKFLOW_ENTID"])
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

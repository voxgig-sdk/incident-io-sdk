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

func TestPostmortemDocumentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PostmortemDocument(nil)
		if ent == nil {
			t.Fatal("expected non-nil PostmortemDocumentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"postmortem_document": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.PostmortemDocument(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.PostmortemDocument(nil).Stream("list", nil, nil) {
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
		setup := postmortem_documentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "postmortem_document." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_POSTMORTEM_DOCUMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		postmortemDocumentRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.postmortem_document", setup.data)))
		var postmortemDocumentRef01Data map[string]any
		if len(postmortemDocumentRef01DataRaw) > 0 {
			postmortemDocumentRef01Data = core.ToMapAny(postmortemDocumentRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = postmortemDocumentRef01Data

		// LIST
		postmortemDocumentRef01Ent := client.PostmortemDocument(nil)
		postmortemDocumentRef01Match := map[string]any{}

		postmortemDocumentRef01ListResult, err := postmortemDocumentRef01Ent.List(postmortemDocumentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, postmortemDocumentRef01ListOk := postmortemDocumentRef01ListResult.([]any)
		if !postmortemDocumentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", postmortemDocumentRef01ListResult)
		}

		// UPDATE
		postmortemDocumentRef01DataUp0Up := map[string]any{
			"id": postmortemDocumentRef01Data["id"],
		}

		postmortemDocumentRef01MarkdefUp0Name := "created_at"
		postmortemDocumentRef01MarkdefUp0Value := fmt.Sprintf("Mark01-postmortem_document_ref01_%d", setup.now)
		postmortemDocumentRef01DataUp0Up[postmortemDocumentRef01MarkdefUp0Name] = postmortemDocumentRef01MarkdefUp0Value

		postmortemDocumentRef01ResdataUp0Result, err := postmortemDocumentRef01Ent.Update(postmortemDocumentRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		postmortemDocumentRef01ResdataUp0 := core.ToMapAny(postmortemDocumentRef01ResdataUp0Result)
		if postmortemDocumentRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if postmortemDocumentRef01ResdataUp0["id"] != postmortemDocumentRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if postmortemDocumentRef01ResdataUp0[postmortemDocumentRef01MarkdefUp0Name] != postmortemDocumentRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", postmortemDocumentRef01MarkdefUp0Name, postmortemDocumentRef01ResdataUp0[postmortemDocumentRef01MarkdefUp0Name])
		}

		// LOAD
		postmortemDocumentRef01MatchDt0 := map[string]any{
			"id": postmortemDocumentRef01Data["id"],
		}
		postmortemDocumentRef01DataDt0Loaded, err := postmortemDocumentRef01Ent.Load(postmortemDocumentRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		postmortemDocumentRef01DataDt0LoadResult := core.ToMapAny(postmortemDocumentRef01DataDt0Loaded)
		if postmortemDocumentRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if postmortemDocumentRef01DataDt0LoadResult["id"] != postmortemDocumentRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func postmortem_documentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "postmortem_document", "PostmortemDocumentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read postmortem_document test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse postmortem_document test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"postmortem_document01", "postmortem_document02", "postmortem_document03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_POSTMORTEM_DOCUMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_POSTMORTEM_DOCUMENT_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_POSTMORTEM_DOCUMENT_ENTID"])
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

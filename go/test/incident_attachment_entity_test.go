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

func TestIncidentAttachmentEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IncidentAttachment(nil)
		if ent == nil {
			t.Fatal("expected non-nil IncidentAttachmentEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"incident_attachment": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.IncidentAttachment(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.IncidentAttachment(nil).Stream("list", nil, nil) {
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
		setup := incident_attachmentBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "incident_attachment." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_INCIDENT_ATTACHMENT_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		incidentAttachmentRef01Ent := client.IncidentAttachment(nil)
		incidentAttachmentRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "incident_attachment"}, setup.data), "incident_attachment_ref01"))

		incidentAttachmentRef01DataResult, err := incidentAttachmentRef01Ent.Create(incidentAttachmentRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		incidentAttachmentRef01Data = core.ToMapAny(incidentAttachmentRef01DataResult)
		if incidentAttachmentRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if incidentAttachmentRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		incidentAttachmentRef01Match := map[string]any{}

		incidentAttachmentRef01ListResult, err := incidentAttachmentRef01Ent.List(incidentAttachmentRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentAttachmentRef01List, incidentAttachmentRef01ListOk := incidentAttachmentRef01ListResult.([]any)
		if !incidentAttachmentRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", incidentAttachmentRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(incidentAttachmentRef01List), map[string]any{"id": incidentAttachmentRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// REMOVE
		incidentAttachmentRef01MatchRm0 := map[string]any{
			"id": incidentAttachmentRef01Data["id"],
		}
		_, err = incidentAttachmentRef01Ent.Remove(incidentAttachmentRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		incidentAttachmentRef01MatchRt0 := map[string]any{}

		incidentAttachmentRef01ListRt0Result, err := incidentAttachmentRef01Ent.List(incidentAttachmentRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentAttachmentRef01ListRt0, incidentAttachmentRef01ListRt0Ok := incidentAttachmentRef01ListRt0Result.([]any)
		if !incidentAttachmentRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", incidentAttachmentRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(incidentAttachmentRef01ListRt0), map[string]any{"id": incidentAttachmentRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func incident_attachmentBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "incident_attachment", "IncidentAttachmentTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read incident_attachment test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse incident_attachment test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"incident_attachment01", "incident_attachment02", "incident_attachment03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_INCIDENT_ATTACHMENT_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_INCIDENT_ATTACHMENT_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_INCIDENT_ATTACHMENT_ENTID"])
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

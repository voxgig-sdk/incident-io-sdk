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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const custom_fieldEntityLiveStrict = true


type custom_fieldFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *custom_fieldFailHook) PreSpec(ctx *sdk.Context) {
	panic("custom_field hook failed")
}

func (f *custom_fieldFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestCustomFieldEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomField(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomFieldEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_field": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.CustomField(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				t.Fatalf("stream failed: %v", si.Err)
			}
			seen = append(seen, si.Item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for si := range streamSdk.CustomField(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					t.Fatalf("stream failed: %v", si.Err)
				}
				if sub, ok := si.Item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, si.Item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("stream-error", func(t *testing.T) {
		offline := map[string]any{"net": map[string]any{"offline": true}}
		var streamerr error
		for si := range sdk.TestSDK(offline, nil).CustomField(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).CustomField(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.CustomField(nil).Stream("list", nil, nil) {
				if si.Err != nil {
					denyerr = si.Err
				}
			}
			if sdkerr, ok := denyerr.(*core.IncidentIoError); !ok || "rbac_denied" != sdkerr.Code {
				t.Fatalf("expected the rbac denial as a stream value, got %v", denyerr)
			}
		}
	})

	t.Run("stream-ctrl", func(t *testing.T) {
		explain := map[string]any{}
		ctrl := map[string]any{"explain": explain}
		for range sdk.TestSDK(nil, nil).CustomField(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &custom_fieldFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.CustomField(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.CustomField(nil).List(nil, map[string]any{"throw": false}); nil != err {
			t.Fatalf("throw false: expected no error, got %v", err)
		}
		if fired == hook.unexpected {
			t.Fatalf("throw false: PreUnexpected did not fire")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.CustomField(nil).List(map[string]any{"catalog_type_id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := custom_fieldBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_field." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client

		// CREATE
		customFieldRef01Ent := client.CustomField(nil)
		customFieldRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "custom_field"}), "custom_field_ref01"))

		customFieldRef01DataResult, err := customFieldRef01Ent.Create(customFieldRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customFieldRef01Data = core.ToMapAny(entityData(customFieldRef01DataResult))
		if customFieldRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customFieldRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customFieldRef01Match := map[string]any{}

		customFieldRef01ListResult, err := customFieldRef01Ent.List(customFieldRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customFieldRef01List, customFieldRef01ListOk := customFieldRef01ListResult.([]any)
		if !customFieldRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customFieldRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customFieldRef01List), map[string]any{"id": customFieldRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		customFieldRef01DataUp0Up := map[string]any{
			"id": customFieldRef01Data["id"],
		}

		customFieldRef01MarkdefUp0Name := "catalog_type_id"
		customFieldRef01MarkdefUp0Value := fmt.Sprintf("Mark01-custom_field_ref01_%d", setup.now)
		customFieldRef01DataUp0Up[customFieldRef01MarkdefUp0Name] = customFieldRef01MarkdefUp0Value

		customFieldRef01ResdataUp0Result, err := customFieldRef01Ent.Update(customFieldRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		customFieldRef01ResdataUp0 := core.ToMapAny(entityData(customFieldRef01ResdataUp0Result))
		if customFieldRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if customFieldRef01ResdataUp0["id"] != customFieldRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if customFieldRef01ResdataUp0[customFieldRef01MarkdefUp0Name] != customFieldRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", customFieldRef01MarkdefUp0Name, customFieldRef01ResdataUp0[customFieldRef01MarkdefUp0Name])
		}

		// LOAD
		customFieldRef01MatchDt0 := map[string]any{
			"id": customFieldRef01Data["id"],
		}
		customFieldRef01DataDt0Loaded, err := customFieldRef01Ent.Load(customFieldRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customFieldRef01DataDt0LoadResult := core.ToMapAny(entityData(customFieldRef01DataDt0Loaded))
		if customFieldRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customFieldRef01DataDt0LoadResult["id"] != customFieldRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customFieldRef01MatchRm0 := map[string]any{
			"id": customFieldRef01Data["id"],
		}
		_, err = customFieldRef01Ent.Remove(customFieldRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customFieldRef01MatchRt0 := map[string]any{}

		customFieldRef01ListRt0Result, err := customFieldRef01Ent.List(customFieldRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customFieldRef01ListRt0, customFieldRef01ListRt0Ok := customFieldRef01ListRt0Result.([]any)
		if !customFieldRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customFieldRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customFieldRef01ListRt0), map[string]any{"id": customFieldRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func custom_fieldBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_field", "CustomFieldTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_field test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_field test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"custom_field01", "custom_field02", "custom_field03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["INCIDENT_IO_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["INCIDENT_IO_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewIncidentIoSDK(core.ToMapAny(mergedOpts))
	}

	live := env["INCIDENT_IO_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["INCIDENT_IO_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}

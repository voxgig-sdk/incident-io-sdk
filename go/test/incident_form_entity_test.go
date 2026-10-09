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
const incident_formEntityLiveStrict = true


type incident_formFailHook struct {
	sdk.BaseFeature
	unexpected int
}

func (f *incident_formFailHook) PreSpec(ctx *sdk.Context) {
	panic("incident_form hook failed")
}

func (f *incident_formFailHook) PreUnexpected(ctx *sdk.Context) {
	f.unexpected++
}

func TestIncidentFormEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IncidentForm(nil)
		if ent == nil {
			t.Fatal("expected non-nil IncidentFormEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"incident_form": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for si := range base.IncidentForm(nil).Stream("list", nil, nil) {
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
			for si := range streamSdk.IncidentForm(nil).Stream("list", nil, nil) {
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
		for si := range sdk.TestSDK(offline, nil).IncidentForm(nil).Stream("list", nil, nil) {
			if si.Err != nil {
				streamerr = si.Err
			}
		}
		if nil == streamerr || !strings.Contains(streamerr.Error(), "offline") {
			t.Fatalf("expected the transport failure as a stream value, got %v", streamerr)
		}

		quiet := map[string]any{"ctrl": map[string]any{"throw": false}}
		for si := range sdk.TestSDK(offline, nil).IncidentForm(nil).Stream("list", nil, quiet) {
			if si.Err != nil {
				t.Fatalf("throw false: expected no error value, got %v", si.Err)
			}
		}

		if fhHasFeature("rbac") {
			denied := sdk.TestSDK(nil, map[string]any{
				"feature": map[string]any{"rbac": map[string]any{"active": true, "deny": true}},
			})
			var denyerr error
			for si := range denied.IncidentForm(nil).Stream("list", nil, nil) {
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
		for range sdk.TestSDK(nil, nil).IncidentForm(nil).Stream("list", nil, map[string]any{"ctrl": ctrl}) {
		}
		if _, has := ctrl["stream"]; has || 1 != len(ctrl) {
			t.Fatalf("the stream changed the caller's ctrl")
		}
		if 0 == len(explain) {
			t.Fatalf("the caller's explain record was not filled")
		}
	})

	t.Run("unexpected", func(t *testing.T) {
		hook := &incident_formFailHook{
			BaseFeature: sdk.BaseFeature{Version: "0.0.1", Name: "failhook", Active: true}}
		client := sdk.TestSDK(nil, map[string]any{"extend": []any{hook}})

		_, err := client.IncidentForm(nil).List(nil, nil)
		if nil == err || !strings.Contains(err.Error(), "hook failed") {
			t.Fatalf("expected the hook's failure, got %v", err)
		}
		if 0 == hook.unexpected {
			t.Fatalf("PreUnexpected did not fire")
		}

		fired := hook.unexpected
		if _, err := client.IncidentForm(nil).List(nil, map[string]any{"throw": false}); nil != err {
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
		_, err := client.IncidentForm(nil).List(map[string]any{"after": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := incident_formBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "incident_form." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client
		_ = client

		// CREATE
		incidentFormRef01Ent := client.IncidentForm(nil)
		incidentFormRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "incident_form"}), "incident_form_ref01"))

		incidentFormRef01DataResult, err := incidentFormRef01Ent.Create(incidentFormRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		incidentFormRef01Data = core.ToMapAny(entityData(incidentFormRef01DataResult))
		if incidentFormRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if incidentFormRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		incidentFormRef01Match := map[string]any{}

		incidentFormRef01ListResult, err := incidentFormRef01Ent.List(incidentFormRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentFormRef01List, incidentFormRef01ListOk := incidentFormRef01ListResult.([]any)
		if !incidentFormRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", incidentFormRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(incidentFormRef01List), map[string]any{"id": incidentFormRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		incidentFormRef01DataUp0Up := map[string]any{
			"id": incidentFormRef01Data["id"],
		}

		incidentFormRef01MarkdefUp0Name := "created_at"
		incidentFormRef01MarkdefUp0Value := fmt.Sprintf("Mark01-incident_form_ref01_%d", setup.now)
		incidentFormRef01DataUp0Up[incidentFormRef01MarkdefUp0Name] = incidentFormRef01MarkdefUp0Value

		incidentFormRef01ResdataUp0Result, err := incidentFormRef01Ent.Update(incidentFormRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		incidentFormRef01ResdataUp0 := core.ToMapAny(entityData(incidentFormRef01ResdataUp0Result))
		if incidentFormRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if incidentFormRef01ResdataUp0["id"] != incidentFormRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if incidentFormRef01ResdataUp0[incidentFormRef01MarkdefUp0Name] != incidentFormRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", incidentFormRef01MarkdefUp0Name, incidentFormRef01ResdataUp0[incidentFormRef01MarkdefUp0Name])
		}

		// LOAD
		incidentFormRef01MatchDt0 := map[string]any{
			"id": incidentFormRef01Data["id"],
		}
		incidentFormRef01DataDt0Loaded, err := incidentFormRef01Ent.Load(incidentFormRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		incidentFormRef01DataDt0LoadResult := core.ToMapAny(entityData(incidentFormRef01DataDt0Loaded))
		if incidentFormRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if incidentFormRef01DataDt0LoadResult["id"] != incidentFormRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		incidentFormRef01MatchRm0 := map[string]any{
			"id": incidentFormRef01Data["id"],
		}
		_, err = incidentFormRef01Ent.Remove(incidentFormRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		incidentFormRef01MatchRt0 := map[string]any{}

		incidentFormRef01ListRt0Result, err := incidentFormRef01Ent.List(incidentFormRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		incidentFormRef01ListRt0, incidentFormRef01ListRt0Ok := incidentFormRef01ListRt0Result.([]any)
		if !incidentFormRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", incidentFormRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(incidentFormRef01ListRt0), map[string]any{"id": incidentFormRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func incident_formBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "incident_form", "IncidentFormTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read incident_form test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse incident_form test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"incident_form01", "incident_form02", "incident_form03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_INCIDENT_FORM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_INCIDENT_FORM_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_INCIDENT_FORM_ENTID"])
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

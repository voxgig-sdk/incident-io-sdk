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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const on_call_notification_method_public_v2EntityLiveStrict = true


func TestOnCallNotificationMethodPublicV2Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OnCallNotificationMethodPublicV2(nil)
		if ent == nil {
			t.Fatal("expected non-nil OnCallNotificationMethodPublicV2Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.OnCallNotificationMethodPublicV2(nil).List(map[string]any{"user_id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := on_call_notification_method_public_v2BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "on_call_notification_method_public_v2." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"user01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, on_call_notification_method_public_v2EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_METHOD_PUBLIC_V2_ENTID", _liveKey)
				}
			}
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		onCallNotificationMethodPublicV2Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.on_call_notification_method_public_v2")))
		var onCallNotificationMethodPublicV2Ref01Data map[string]any
		if len(onCallNotificationMethodPublicV2Ref01DataRaw) > 0 {
			onCallNotificationMethodPublicV2Ref01Data = core.ToMapAny(onCallNotificationMethodPublicV2Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = onCallNotificationMethodPublicV2Ref01Data

		// LIST
		onCallNotificationMethodPublicV2Ref01Ent := client.OnCallNotificationMethodPublicV2(nil)
		onCallNotificationMethodPublicV2Ref01Match := map[string]any{
			"user_id": setup.idmap["user01"],
		}

		onCallNotificationMethodPublicV2Ref01ListResult, err := onCallNotificationMethodPublicV2Ref01Ent.List(onCallNotificationMethodPublicV2Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, onCallNotificationMethodPublicV2Ref01ListOk := onCallNotificationMethodPublicV2Ref01ListResult.([]any)
		if !onCallNotificationMethodPublicV2Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", onCallNotificationMethodPublicV2Ref01ListResult)
		}

	})
}

func on_call_notification_method_public_v2BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "on_call_notification_method_public_v2", "OnCallNotificationMethodPublicV2TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read on_call_notification_method_public_v2 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse on_call_notification_method_public_v2 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"on_call_notification_method_public_v201", "on_call_notification_method_public_v202", "on_call_notification_method_public_v203", "user01", "user02", "user03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_METHOD_PUBLIC_V2_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_METHOD_PUBLIC_V2_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_ON_CALL_NOTIFICATION_METHOD_PUBLIC_V2_ENTID"])
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

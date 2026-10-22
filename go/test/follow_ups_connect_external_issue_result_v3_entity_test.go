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
const follow_ups_connect_external_issue_result_v3EntityLiveStrict = true


func TestFollowUpsConnectExternalIssueResultV3Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.FollowUpsConnectExternalIssueResultV3(nil)
		if ent == nil {
			t.Fatal("expected non-nil FollowUpsConnectExternalIssueResultV3Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.FollowUpsConnectExternalIssueResultV3(nil).Create(map[string]any{"follow_up_id": 1, "provider": "x", "url": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := follow_ups_connect_external_issue_result_v3BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "follow_ups_connect_external_issue_result_v3." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"follow_up01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, follow_ups_connect_external_issue_result_v3EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID", _liveKey)
				}
			}
		}
		client := setup.client
		_ = client

		// CREATE
		followUpsConnectExternalIssueResultV3Ref01Ent := client.FollowUpsConnectExternalIssueResultV3(nil)
		followUpsConnectExternalIssueResultV3Ref01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "follow_ups_connect_external_issue_result_v3"}), "follow_ups_connect_external_issue_result_v3_ref01"))
		followUpsConnectExternalIssueResultV3Ref01Data["follow_up_id"] = setup.idmap["follow_up01"]

		followUpsConnectExternalIssueResultV3Ref01DataResult, err := followUpsConnectExternalIssueResultV3Ref01Ent.Create(followUpsConnectExternalIssueResultV3Ref01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		followUpsConnectExternalIssueResultV3Ref01Data = core.ToMapAny(entityData(followUpsConnectExternalIssueResultV3Ref01DataResult))
		if followUpsConnectExternalIssueResultV3Ref01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if followUpsConnectExternalIssueResultV3Ref01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func follow_ups_connect_external_issue_result_v3BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "follow_ups_connect_external_issue_result_v3", "FollowUpsConnectExternalIssueResultV3TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read follow_ups_connect_external_issue_result_v3 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse follow_ups_connect_external_issue_result_v3 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"follow_ups_connect_external_issue_result_v301", "follow_ups_connect_external_issue_result_v302", "follow_ups_connect_external_issue_result_v303", "follow_up01", "follow_up02", "follow_up03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID"])
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

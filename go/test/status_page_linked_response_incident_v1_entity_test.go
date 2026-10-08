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
const status_page_linked_response_incident_v1EntityLiveStrict = true


func TestStatusPageLinkedResponseIncidentV1Entity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.StatusPageLinkedResponseIncidentV1(nil)
		if ent == nil {
			t.Fatal("expected non-nil StatusPageLinkedResponseIncidentV1Entity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.StatusPageLinkedResponseIncidentV1(nil).List(map[string]any{"incident_id": 1, "status_page_id": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := status_page_linked_response_incident_v1BasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "status_page_linked_response_incident_v1." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _, _liveKey := range []string{"incident01", "status_page01"} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					liveMiss(t, status_page_linked_response_incident_v1EntityLiveStrict, "Live entity test blocked: needs %s via INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID", _liveKey)
				}
			}
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		statusPageLinkedResponseIncidentV1Ref01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.status_page_linked_response_incident_v1")))
		var statusPageLinkedResponseIncidentV1Ref01Data map[string]any
		if len(statusPageLinkedResponseIncidentV1Ref01DataRaw) > 0 {
			statusPageLinkedResponseIncidentV1Ref01Data = core.ToMapAny(statusPageLinkedResponseIncidentV1Ref01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = statusPageLinkedResponseIncidentV1Ref01Data

		// LIST
		statusPageLinkedResponseIncidentV1Ref01Ent := client.StatusPageLinkedResponseIncidentV1(nil)
		statusPageLinkedResponseIncidentV1Ref01Match := map[string]any{
			"incident_id": setup.idmap["incident01"],
			"status_page_id": setup.idmap["status_page01"],
		}

		statusPageLinkedResponseIncidentV1Ref01ListResult, err := statusPageLinkedResponseIncidentV1Ref01Ent.List(statusPageLinkedResponseIncidentV1Ref01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, statusPageLinkedResponseIncidentV1Ref01ListOk := statusPageLinkedResponseIncidentV1Ref01ListResult.([]any)
		if !statusPageLinkedResponseIncidentV1Ref01ListOk {
			t.Fatalf("expected list result to be an array, got %T", statusPageLinkedResponseIncidentV1Ref01ListResult)
		}

	})
}

func status_page_linked_response_incident_v1BasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "status_page_linked_response_incident_v1", "StatusPageLinkedResponseIncidentV1TestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read status_page_linked_response_incident_v1 test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse status_page_linked_response_incident_v1 test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"status_page_linked_response_incident_v101", "status_page_linked_response_incident_v102", "status_page_linked_response_incident_v103", "status_page01", "status_page02", "status_page03", "incident01", "incident02", "incident03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_V1_ENTID"])
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

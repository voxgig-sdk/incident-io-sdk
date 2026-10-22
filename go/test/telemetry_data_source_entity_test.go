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
const telemetry_data_sourceEntityLiveStrict = true


func TestTelemetryDataSourceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.TelemetryDataSource(nil)
		if ent == nil {
			t.Fatal("expected non-nil TelemetryDataSourceEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.TelemetryDataSource(nil).Update(map[string]any{"id": 1}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := telemetry_data_sourceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "telemetry_data_source." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			liveMiss(t, telemetry_data_sourceEntityLiveStrict, "Live entity test blocked: %s", "the flow updates a telemetry_data_source record it did not create")
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		telemetryDataSourceRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.telemetry_data_source")))
		var telemetryDataSourceRef01Data map[string]any
		if len(telemetryDataSourceRef01DataRaw) > 0 {
			telemetryDataSourceRef01Data = core.ToMapAny(telemetryDataSourceRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = telemetryDataSourceRef01Data

		// UPDATE
		telemetryDataSourceRef01Ent := client.TelemetryDataSource(nil)
		telemetryDataSourceRef01DataUp0Up := map[string]any{
			"id": telemetryDataSourceRef01Data["id"],
		}

		telemetryDataSourceRef01MarkdefUp0Name := "created_at"
		telemetryDataSourceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-telemetry_data_source_ref01_%d", setup.now)
		telemetryDataSourceRef01DataUp0Up[telemetryDataSourceRef01MarkdefUp0Name] = telemetryDataSourceRef01MarkdefUp0Value

		telemetryDataSourceRef01ResdataUp0Result, err := telemetryDataSourceRef01Ent.Update(telemetryDataSourceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		telemetryDataSourceRef01ResdataUp0 := core.ToMapAny(entityData(telemetryDataSourceRef01ResdataUp0Result))
		if telemetryDataSourceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if telemetryDataSourceRef01ResdataUp0["id"] != telemetryDataSourceRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if telemetryDataSourceRef01ResdataUp0[telemetryDataSourceRef01MarkdefUp0Name] != telemetryDataSourceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", telemetryDataSourceRef01MarkdefUp0Name, telemetryDataSourceRef01ResdataUp0[telemetryDataSourceRef01MarkdefUp0Name])
		}

	})
}

func telemetry_data_sourceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "telemetry_data_source", "TelemetryDataSourceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read telemetry_data_source test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse telemetry_data_source test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"telemetry_data_source01", "telemetry_data_source02", "telemetry_data_source03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID"])
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

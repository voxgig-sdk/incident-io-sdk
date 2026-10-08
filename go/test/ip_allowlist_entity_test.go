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
const ip_allowlistEntityLiveStrict = true


func TestIpAllowlistEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IpAllowlist(nil)
		if ent == nil {
			t.Fatal("expected non-nil IpAllowlistEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.IpAllowlist(nil).Load(map[string]any{"enabled": "x"}, nil)
		if sdkerr, ok := err.(*core.IncidentIoError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := ip_allowlistBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "ip_allowlist." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		ipAllowlistRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.ip_allowlist")))
		var ipAllowlistRef01Data map[string]any
		if len(ipAllowlistRef01DataRaw) > 0 {
			ipAllowlistRef01Data = core.ToMapAny(ipAllowlistRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = ipAllowlistRef01Data

		// UPDATE
		ipAllowlistRef01Ent := client.IpAllowlist(nil)
		ipAllowlistRef01DataUp0Up := map[string]any{
		}

		ipAllowlistRef01MarkdefUp0Name := "updated_at"
		ipAllowlistRef01MarkdefUp0Value := fmt.Sprintf("Mark01-ip_allowlist_ref01_%d", setup.now)
		ipAllowlistRef01DataUp0Up[ipAllowlistRef01MarkdefUp0Name] = ipAllowlistRef01MarkdefUp0Value

		ipAllowlistRef01ResdataUp0Result, err := ipAllowlistRef01Ent.Update(ipAllowlistRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		ipAllowlistRef01ResdataUp0 := core.ToMapAny(entityData(ipAllowlistRef01ResdataUp0Result))
		if ipAllowlistRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if ipAllowlistRef01ResdataUp0[ipAllowlistRef01MarkdefUp0Name] != ipAllowlistRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", ipAllowlistRef01MarkdefUp0Name, ipAllowlistRef01ResdataUp0[ipAllowlistRef01MarkdefUp0Name])
		}

		// LOAD
		ipAllowlistRef01MatchDt0 := map[string]any{}
		ipAllowlistRef01DataDt0Loaded, err := ipAllowlistRef01Ent.Load(ipAllowlistRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if ipAllowlistRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func ip_allowlistBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "ip_allowlist", "IpAllowlistTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read ip_allowlist test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse ip_allowlist test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"ip_allowlist01", "ip_allowlist02", "ip_allowlist03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID": idmap,
		"INCIDENT_IO_TEST_LIVE":      "FALSE",
		"INCIDENT_IO_TEST_EXPLAIN":   "FALSE",
		"INCIDENT_IO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["INCIDENT_IO_TEST_IP_ALLOWLIST_ENTID"])
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

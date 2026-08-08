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

func TestIpAllowlistEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.IpAllowlist(nil)
		if ent == nil {
			t.Fatal("expected non-nil IpAllowlistEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
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
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set INCIDENTIO_TEST_IP_ALLOWLIST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		ipAllowlistRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.ip_allowlist", setup.data)))
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
		ipAllowlistRef01ResdataUp0 := core.ToMapAny(ipAllowlistRef01ResdataUp0Result)
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
	idmap := vs.Transform(
		[]any{"ip_allowlist01", "ip_allowlist02", "ip_allowlist03"},
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
	entidEnvRaw := os.Getenv("INCIDENTIO_TEST_IP_ALLOWLIST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"INCIDENTIO_TEST_IP_ALLOWLIST_ENTID": idmap,
		"INCIDENTIO_TEST_LIVE":      "FALSE",
		"INCIDENTIO_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["INCIDENTIO_TEST_IP_ALLOWLIST_ENTID"])
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

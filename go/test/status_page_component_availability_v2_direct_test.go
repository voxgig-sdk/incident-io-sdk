package sdktest

import (
	"encoding/json"
	"os"
	"strings"
	"testing"

	sdk "github.com/voxgig-sdk/incident-io-sdk/go"
	"github.com/voxgig-sdk/incident-io-sdk/go/core"
)

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const status_page_component_availability_v2DirectLiveStrict = true

func TestStatusPageComponentAvailabilityV2Direct(t *testing.T) {
	t.Run("direct-load-status_page_component_availability_v2", func(t *testing.T) {
		setup := status_page_component_availability_v2DirectSetup(map[string]any{"id": "direct01"})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-load-status_page_component_availability_v2", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client

		params := map[string]any{}
		query := map[string]any{}
		if setup.live {
			query["end_at"] = "2026-02-01T00:00:00Z"
			query["start_at"] = "2026-01-01T00:00:00Z"
			params["component_id"] = "01FCNDV6P870EA6S7TK1DSYDG1"
			params["status_page_id"] = "01FCNDV6P870EA6S7TK1DSYDG0"
		} else {
			params["component_id"] = "direct01"
			params["status_page_id"] = "direct02"
		}

		result, err := client.Direct(map[string]any{
			"path":   "v2/status_pages/{status_page_id}/components/{component_id}/availability",
			"method": "GET",
			"params": params,
			"query":  query,
		})
		if setup.live {
			if err != nil {
				liveMiss(t, status_page_component_availability_v2DirectLiveStrict, "Live load failed: %v", err)
			}
			if status := core.ToInt(result["status"]); result["ok"] != true || status < 200 || status >= 300 {
				liveMiss(t, status_page_component_availability_v2DirectLiveStrict, "Live load failed: %s", liveDescribe(result))
			}
			if result["data"] == nil {
				liveMiss(t, status_page_component_availability_v2DirectLiveStrict, "Live load returned no data: %s", liveDescribe(result))
			}
		} else {
			if err != nil {
				t.Fatalf("direct failed: %v", err)
			}
			if result["ok"] != true {
				t.Fatalf("expected ok to be true, got %v", result["ok"])
			}
			if core.ToInt(result["status"]) != 200 {
				t.Fatalf("expected status 200, got %v", result["status"])
			}
			if result["data"] == nil {
				t.Fatal("expected data to be non-nil")
			}
		}

		if !setup.live {
			if dataMap, ok := result["data"].(map[string]any); ok {
				if dataMap["id"] != "direct01" {
					t.Fatalf("expected data.id to be direct01, got %v", dataMap["id"])
				}
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
			call := (*setup.calls)[0]
			if initMap, ok := call["init"].(map[string]any); ok {
				if initMap["method"] != "GET" {
					t.Fatalf("expected method GET, got %v", initMap["method"])
				}
			}
			if url, ok := call["url"].(string); ok {
				if !strings.Contains(url, "direct01") {
					t.Fatalf("expected url to contain direct01, got %v", url)
				}
				if !strings.Contains(url, "direct02") {
					t.Fatalf("expected url to contain direct02, got %v", url)
				}
			}
		}
	})

}

type status_page_component_availability_v2DirectSetupResult struct {
	client *sdk.IncidentIoSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func status_page_component_availability_v2DirectSetup(mockres any) *status_page_component_availability_v2DirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_AVAILABILITY_V2_ENTID": map[string]any{},
		"INCIDENT_IO_TEST_LIVE":    "FALSE",
		"INCIDENT_IO_APIKEY":       "",
	})

	live := env["INCIDENT_IO_TEST_LIVE"] == "TRUE"

	if live {
		// sdk-test-control.json's test.client.options seeds the live
		// client; the generated fields below overwrite anything they name.
		mergedOpts := map[string]any{}
		for k, v := range liveClientOptions() {
			mergedOpts[k] = v
		}
		for k, v := range map[string]any{
			"apikey": env["INCIDENT_IO_APIKEY"],
		} {
			mergedOpts[k] = v
		}
		client := sdk.NewIncidentIoSDK(mergedOpts)

		idmap := map[string]any{}
		if entidRaw, ok := env["INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_AVAILABILITY_V2_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &status_page_component_availability_v2DirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
	}

	mockFetch := func(url string, init map[string]any) (map[string]any, error) {
		*calls = append(*calls, map[string]any{"url": url, "init": init})
		return map[string]any{
			"status":     200,
			"statusText": "OK",
			"headers":    map[string]any{},
			"json": (func() any)(func() any {
				if mockres != nil {
					return mockres
				}
				return map[string]any{"id": "direct01"}
			}),
		}, nil
	}

	client := sdk.NewIncidentIoSDK(map[string]any{
		"base": "http://localhost:8080",
		"system": map[string]any{
			"fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
		},
	})

	return &status_page_component_availability_v2DirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal

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
const incident_attachmentDirectLiveStrict = true

func TestIncidentAttachmentDirect(t *testing.T) {
	t.Run("direct-list-incident_attachment", func(t *testing.T) {
		setup := incident_attachmentDirectSetup([]any{
			map[string]any{"id": "direct01"},
			map[string]any{"id": "direct02"},
		})
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		if _shouldSkip, _reason := isControlSkipped("direct", "direct-list-incident_attachment", _mode); _shouldSkip {
			if _reason == "" {
				_reason = "skipped via sdk-test-control.json"
			}
			t.Skip(_reason)
			return
		}
		client := setup.client


		result, err := client.Direct(map[string]any{
			"path":   "v1/incident_attachments",
			"method": "GET",
			"params": map[string]any{},
		})
		if setup.live {
			if err != nil {
				liveMiss(t, incident_attachmentDirectLiveStrict, "Live list failed: %v", err)
			}
			if status := core.ToInt(result["status"]); result["ok"] != true || status < 200 || status >= 300 {
				liveMiss(t, incident_attachmentDirectLiveStrict, "Live list failed: %s", liveDescribe(result))
			}
			if _, ok := liveList(result["data"]); !ok {
				liveMiss(t, incident_attachmentDirectLiveStrict, "Live list returned no list: %s", liveDescribe(result))
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
		}

		if !setup.live {
			if dataList, ok := result["data"].([]any); ok {
				if len(dataList) != 2 {
					t.Fatalf("expected 2 items, got %d", len(dataList))
				}
			} else {
				t.Fatalf("expected data to be an array, got %T", result["data"])
			}

			if len(*setup.calls) != 1 {
				t.Fatalf("expected 1 call, got %d", len(*setup.calls))
			}
		}
	})

}

type incident_attachmentDirectSetupResult struct {
	client *sdk.IncidentIoSDK
	calls  *[]map[string]any
	live   bool
	idmap  map[string]any
}

func incident_attachmentDirectSetup(mockres any) *incident_attachmentDirectSetupResult {
	loadEnvLocal()

	calls := &[]map[string]any{}

	env := envOverride(map[string]any{
		"INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID": map[string]any{},
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
		if entidRaw, ok := env["INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID"]; ok {
			if entidStr, ok := entidRaw.(string); ok && strings.HasPrefix(entidStr, "{") {
				json.Unmarshal([]byte(entidStr), &idmap)
			} else if entidMap, ok := entidRaw.(map[string]any); ok {
				idmap = entidMap
			}
		}

		return &incident_attachmentDirectSetupResult{client: client, calls: calls, live: true, idmap: idmap}
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

	return &incident_attachmentDirectSetupResult{client: client, calls: calls, live: false, idmap: map[string]any{}}
}

var _ = os.Getenv
var _ = json.Unmarshal

package core

import (
	"encoding/json"
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/incident-io-sdk/go/utility/struct"
)

type IncidentIoSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewIncidentIoSDK(options map[string]any) *IncidentIoSDK {
	sdk := &IncidentIoSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath(sdk.options, []any{"feature", "test", "active"}) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath(sdk.options, []any{"__derived__", "featureorder"}).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

// The client holds the credential in its options, so a print or a JSON dump
// carries the name alone. Value receivers: a dereferenced client prints the
// same way.
func (sdk IncidentIoSDK) String() string {
	return "IncidentIo " + vs.Jsonify(map[string]any{"name": "IncidentIo"},
		map[string]any{"indent": 0})
}

func (sdk IncidentIoSDK) GoString() string {
	return sdk.String()
}

func (sdk IncidentIoSDK) MarshalJSON() ([]byte, error) {
	return json.Marshal(map[string]any{"name": "IncidentIo"})
}

func (sdk *IncidentIoSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *IncidentIoSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *IncidentIoSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *IncidentIoSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}
	method = strings.ToUpper(method)

	allowMethodVal := vs.GetPath(options, []any{"allow", "method"})
	if !Allowed(allowMethodVal, method) {
		allowMethod, _ := allowMethodVal.(string)
		return nil, ctx.MakeError("spec_method_allow",
			"Method \""+method+"\" not allowed by SDK option allow.method value: \""+allowMethod+"\"")
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *IncidentIoSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *IncidentIoSDK) opAllowed(op string) bool {
	return Allowed(vs.GetPath(sdk.options, []any{"allow", "op"}), op)
}

func (sdk *IncidentIoSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath(sdk.options, []any{"allow", "op"}).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("IncidentIoSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *IncidentIoSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(sdk.rootctx, err)}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": sdk.cleanErr(ctx, fetchErr)}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		var bodyErr error
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					jsonData = f()
				}
			}
			if unreadable, _ := vs.GetProp(fm, "unreadable").(bool); unreadable {
				var failed error
				if status < 200 || status >= 300 {
					failed = ctx.MakeError("request_status",
						fmt.Sprintf("request: %d: %v", status, vs.GetProp(fm, "statusText")))
				}
				bodyErr = UnreadableBody(ctx, status, headers, vs.GetProp(fm, "body"),
					fetchdef["headers"], failed)
			}
		}

		out := map[string]any{
			"ok":      bodyErr == nil && status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}
		if bodyErr != nil {
			out["err"] = sdk.cleanErr(ctx, bodyErr)
		}
		return out, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// A raw request returns its error rather than passing it through MakeError.
func (sdk *IncidentIoSDK) cleanErr(ctx *Context, err error) error {
	if cleaned, ok := sdk.utility.Clean(ctx, err).(error); ok {
		return cleaned
	}
	return err
}

func (sdk *IncidentIoSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath(res, []any{"data", "errors"}).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("IncidentIoSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Action returns a Action entity bound to this client.
// Idiomatic usage: client.Action(nil).List(nil, nil) or
// client.Action(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Action(data map[string]any) IncidentIoEntity {
	return NewActionEntityFunc(sdk, data)
}


// Alert returns a Alert entity bound to this client.
// Idiomatic usage: client.Alert(nil).List(nil, nil) or
// client.Alert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Alert(data map[string]any) IncidentIoEntity {
	return NewAlertEntityFunc(sdk, data)
}


// AlertAttribute returns a AlertAttribute entity bound to this client.
// Idiomatic usage: client.AlertAttribute(nil).List(nil, nil) or
// client.AlertAttribute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertAttribute(data map[string]any) IncidentIoEntity {
	return NewAlertAttributeEntityFunc(sdk, data)
}


// AlertNote returns a AlertNote entity bound to this client.
// Idiomatic usage: client.AlertNote(nil).List(nil, nil) or
// client.AlertNote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertNote(data map[string]any) IncidentIoEntity {
	return NewAlertNoteEntityFunc(sdk, data)
}


// AlertRoute returns a AlertRoute entity bound to this client.
// Idiomatic usage: client.AlertRoute(nil).List(nil, nil) or
// client.AlertRoute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertRoute(data map[string]any) IncidentIoEntity {
	return NewAlertRouteEntityFunc(sdk, data)
}


// AlertSource returns a AlertSource entity bound to this client.
// Idiomatic usage: client.AlertSource(nil).List(nil, nil) or
// client.AlertSource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertSource(data map[string]any) IncidentIoEntity {
	return NewAlertSourceEntityFunc(sdk, data)
}


// AlertSourcesV2 returns a AlertSourcesV2 entity bound to this client.
// Idiomatic usage: client.AlertSourcesV2(nil).List(nil, nil) or
// client.AlertSourcesV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertSourcesV2(data map[string]any) IncidentIoEntity {
	return NewAlertSourcesV2EntityFunc(sdk, data)
}


// AlertTag returns a AlertTag entity bound to this client.
// Idiomatic usage: client.AlertTag(nil).List(nil, nil) or
// client.AlertTag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertTag(data map[string]any) IncidentIoEntity {
	return NewAlertTagEntityFunc(sdk, data)
}


// AlertsAddTagsResultV2 returns a AlertsAddTagsResultV2 entity bound to this client.
// Idiomatic usage: client.AlertsAddTagsResultV2(nil).List(nil, nil) or
// client.AlertsAddTagsResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertsAddTagsResultV2(data map[string]any) IncidentIoEntity {
	return NewAlertsAddTagsResultV2EntityFunc(sdk, data)
}


// AlertsRemoveTagsResultV2 returns a AlertsRemoveTagsResultV2 entity bound to this client.
// Idiomatic usage: client.AlertsRemoveTagsResultV2(nil).List(nil, nil) or
// client.AlertsRemoveTagsResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertsRemoveTagsResultV2(data map[string]any) IncidentIoEntity {
	return NewAlertsRemoveTagsResultV2EntityFunc(sdk, data)
}


// AlertsSetTagsResultV2 returns a AlertsSetTagsResultV2 entity bound to this client.
// Idiomatic usage: client.AlertsSetTagsResultV2(nil).List(nil, nil) or
// client.AlertsSetTagsResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertsSetTagsResultV2(data map[string]any) IncidentIoEntity {
	return NewAlertsSetTagsResultV2EntityFunc(sdk, data)
}


// AlertsTransitionIncidentAlertResultV2 returns a AlertsTransitionIncidentAlertResultV2 entity bound to this client.
// Idiomatic usage: client.AlertsTransitionIncidentAlertResultV2(nil).List(nil, nil) or
// client.AlertsTransitionIncidentAlertResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AlertsTransitionIncidentAlertResultV2(data map[string]any) IncidentIoEntity {
	return NewAlertsTransitionIncidentAlertResultV2EntityFunc(sdk, data)
}


// AnnouncementRule returns a AnnouncementRule entity bound to this client.
// Idiomatic usage: client.AnnouncementRule(nil).List(nil, nil) or
// client.AnnouncementRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AnnouncementRule(data map[string]any) IncidentIoEntity {
	return NewAnnouncementRuleEntityFunc(sdk, data)
}


// AnnouncementTemplate returns a AnnouncementTemplate entity bound to this client.
// Idiomatic usage: client.AnnouncementTemplate(nil).List(nil, nil) or
// client.AnnouncementTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) AnnouncementTemplate(data map[string]any) IncidentIoEntity {
	return NewAnnouncementTemplateEntityFunc(sdk, data)
}


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ApiKey(data map[string]any) IncidentIoEntity {
	return NewApiKeyEntityFunc(sdk, data)
}


// CallRoute returns a CallRoute entity bound to this client.
// Idiomatic usage: client.CallRoute(nil).List(nil, nil) or
// client.CallRoute(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoute(data map[string]any) IncidentIoEntity {
	return NewCallRouteEntityFunc(sdk, data)
}


// CallRoutesCreateAllowedCallerResultV2 returns a CallRoutesCreateAllowedCallerResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesCreateAllowedCallerResultV2(nil).List(nil, nil) or
// client.CallRoutesCreateAllowedCallerResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesCreateAllowedCallerResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesCreateAllowedCallerResultV2EntityFunc(sdk, data)
}


// CallRoutesCreateOptionResultV2 returns a CallRoutesCreateOptionResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesCreateOptionResultV2(nil).List(nil, nil) or
// client.CallRoutesCreateOptionResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesCreateOptionResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesCreateOptionResultV2EntityFunc(sdk, data)
}


// CallRoutesListAllowedCallersResultV2 returns a CallRoutesListAllowedCallersResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesListAllowedCallersResultV2(nil).List(nil, nil) or
// client.CallRoutesListAllowedCallersResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesListAllowedCallersResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesListAllowedCallersResultV2EntityFunc(sdk, data)
}


// CallRoutesListOptionsResultV2 returns a CallRoutesListOptionsResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesListOptionsResultV2(nil).List(nil, nil) or
// client.CallRoutesListOptionsResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesListOptionsResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesListOptionsResultV2EntityFunc(sdk, data)
}


// CallRoutesShowAllowedCallerResultV2 returns a CallRoutesShowAllowedCallerResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesShowAllowedCallerResultV2(nil).List(nil, nil) or
// client.CallRoutesShowAllowedCallerResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesShowAllowedCallerResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesShowAllowedCallerResultV2EntityFunc(sdk, data)
}


// CallRoutesShowOptionResultV2 returns a CallRoutesShowOptionResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesShowOptionResultV2(nil).List(nil, nil) or
// client.CallRoutesShowOptionResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesShowOptionResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesShowOptionResultV2EntityFunc(sdk, data)
}


// CallRoutesUpdateAllowedCallerResultV2 returns a CallRoutesUpdateAllowedCallerResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesUpdateAllowedCallerResultV2(nil).List(nil, nil) or
// client.CallRoutesUpdateAllowedCallerResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesUpdateAllowedCallerResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesUpdateAllowedCallerResultV2EntityFunc(sdk, data)
}


// CallRoutesUpdateOptionResultV2 returns a CallRoutesUpdateOptionResultV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesUpdateOptionResultV2(nil).List(nil, nil) or
// client.CallRoutesUpdateOptionResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesUpdateOptionResultV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesUpdateOptionResultV2EntityFunc(sdk, data)
}


// CallRoutesV2 returns a CallRoutesV2 entity bound to this client.
// Idiomatic usage: client.CallRoutesV2(nil).List(nil, nil) or
// client.CallRoutesV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallRoutesV2(data map[string]any) IncidentIoEntity {
	return NewCallRoutesV2EntityFunc(sdk, data)
}


// CallSession returns a CallSession entity bound to this client.
// Idiomatic usage: client.CallSession(nil).List(nil, nil) or
// client.CallSession(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallSession(data map[string]any) IncidentIoEntity {
	return NewCallSessionEntityFunc(sdk, data)
}


// CallTranscriptEntry returns a CallTranscriptEntry entity bound to this client.
// Idiomatic usage: client.CallTranscriptEntry(nil).List(nil, nil) or
// client.CallTranscriptEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CallTranscriptEntry(data map[string]any) IncidentIoEntity {
	return NewCallTranscriptEntryEntityFunc(sdk, data)
}


// CatalogEntry returns a CatalogEntry entity bound to this client.
// Idiomatic usage: client.CatalogEntry(nil).List(nil, nil) or
// client.CatalogEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CatalogEntry(data map[string]any) IncidentIoEntity {
	return NewCatalogEntryEntityFunc(sdk, data)
}


// CatalogResource returns a CatalogResource entity bound to this client.
// Idiomatic usage: client.CatalogResource(nil).List(nil, nil) or
// client.CatalogResource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CatalogResource(data map[string]any) IncidentIoEntity {
	return NewCatalogResourceEntityFunc(sdk, data)
}


// CatalogType returns a CatalogType entity bound to this client.
// Idiomatic usage: client.CatalogType(nil).List(nil, nil) or
// client.CatalogType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CatalogType(data map[string]any) IncidentIoEntity {
	return NewCatalogTypeEntityFunc(sdk, data)
}


// CatalogTypeSchema returns a CatalogTypeSchema entity bound to this client.
// Idiomatic usage: client.CatalogTypeSchema(nil).List(nil, nil) or
// client.CatalogTypeSchema(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CatalogTypeSchema(data map[string]any) IncidentIoEntity {
	return NewCatalogTypeSchemaEntityFunc(sdk, data)
}


// CustomField returns a CustomField entity bound to this client.
// Idiomatic usage: client.CustomField(nil).List(nil, nil) or
// client.CustomField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CustomField(data map[string]any) IncidentIoEntity {
	return NewCustomFieldEntityFunc(sdk, data)
}


// CustomFieldOption returns a CustomFieldOption entity bound to this client.
// Idiomatic usage: client.CustomFieldOption(nil).List(nil, nil) or
// client.CustomFieldOption(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) CustomFieldOption(data map[string]any) IncidentIoEntity {
	return NewCustomFieldOptionEntityFunc(sdk, data)
}


// Escalation returns a Escalation entity bound to this client.
// Idiomatic usage: client.Escalation(nil).List(nil, nil) or
// client.Escalation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Escalation(data map[string]any) IncidentIoEntity {
	return NewEscalationEntityFunc(sdk, data)
}


// EscalationPathTemplate returns a EscalationPathTemplate entity bound to this client.
// Idiomatic usage: client.EscalationPathTemplate(nil).List(nil, nil) or
// client.EscalationPathTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) EscalationPathTemplate(data map[string]any) IncidentIoEntity {
	return NewEscalationPathTemplateEntityFunc(sdk, data)
}


// EscalationsCheckEscalationPermissionsResultV2 returns a EscalationsCheckEscalationPermissionsResultV2 entity bound to this client.
// Idiomatic usage: client.EscalationsCheckEscalationPermissionsResultV2(nil).List(nil, nil) or
// client.EscalationsCheckEscalationPermissionsResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) EscalationsCheckEscalationPermissionsResultV2(data map[string]any) IncidentIoEntity {
	return NewEscalationsCheckEscalationPermissionsResultV2EntityFunc(sdk, data)
}


// EscalationsReassignEscalationResultV2 returns a EscalationsReassignEscalationResultV2 entity bound to this client.
// Idiomatic usage: client.EscalationsReassignEscalationResultV2(nil).List(nil, nil) or
// client.EscalationsReassignEscalationResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) EscalationsReassignEscalationResultV2(data map[string]any) IncidentIoEntity {
	return NewEscalationsReassignEscalationResultV2EntityFunc(sdk, data)
}


// FollowUp returns a FollowUp entity bound to this client.
// Idiomatic usage: client.FollowUp(nil).List(nil, nil) or
// client.FollowUp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) FollowUp(data map[string]any) IncidentIoEntity {
	return NewFollowUpEntityFunc(sdk, data)
}


// FollowUpsConnectExternalIssueResultV3 returns a FollowUpsConnectExternalIssueResultV3 entity bound to this client.
// Idiomatic usage: client.FollowUpsConnectExternalIssueResultV3(nil).List(nil, nil) or
// client.FollowUpsConnectExternalIssueResultV3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) FollowUpsConnectExternalIssueResultV3(data map[string]any) IncidentIoEntity {
	return NewFollowUpsConnectExternalIssueResultV3EntityFunc(sdk, data)
}


// FollowUpsCreateFromLinkResultV3 returns a FollowUpsCreateFromLinkResultV3 entity bound to this client.
// Idiomatic usage: client.FollowUpsCreateFromLinkResultV3(nil).List(nil, nil) or
// client.FollowUpsCreateFromLinkResultV3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) FollowUpsCreateFromLinkResultV3(data map[string]any) IncidentIoEntity {
	return NewFollowUpsCreateFromLinkResultV3EntityFunc(sdk, data)
}


// Identity returns a Identity entity bound to this client.
// Idiomatic usage: client.Identity(nil).List(nil, nil) or
// client.Identity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Identity(data map[string]any) IncidentIoEntity {
	return NewIdentityEntityFunc(sdk, data)
}


// Incident returns a Incident entity bound to this client.
// Idiomatic usage: client.Incident(nil).List(nil, nil) or
// client.Incident(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Incident(data map[string]any) IncidentIoEntity {
	return NewIncidentEntityFunc(sdk, data)
}


// IncidentActivityLogEntry returns a IncidentActivityLogEntry entity bound to this client.
// Idiomatic usage: client.IncidentActivityLogEntry(nil).List(nil, nil) or
// client.IncidentActivityLogEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentActivityLogEntry(data map[string]any) IncidentIoEntity {
	return NewIncidentActivityLogEntryEntityFunc(sdk, data)
}


// IncidentAttachment returns a IncidentAttachment entity bound to this client.
// Idiomatic usage: client.IncidentAttachment(nil).List(nil, nil) or
// client.IncidentAttachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentAttachment(data map[string]any) IncidentIoEntity {
	return NewIncidentAttachmentEntityFunc(sdk, data)
}


// IncidentForm returns a IncidentForm entity bound to this client.
// Idiomatic usage: client.IncidentForm(nil).List(nil, nil) or
// client.IncidentForm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentForm(data map[string]any) IncidentIoEntity {
	return NewIncidentFormEntityFunc(sdk, data)
}


// IncidentMembership returns a IncidentMembership entity bound to this client.
// Idiomatic usage: client.IncidentMembership(nil).List(nil, nil) or
// client.IncidentMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentMembership(data map[string]any) IncidentIoEntity {
	return NewIncidentMembershipEntityFunc(sdk, data)
}


// IncidentParticipant returns a IncidentParticipant entity bound to this client.
// Idiomatic usage: client.IncidentParticipant(nil).List(nil, nil) or
// client.IncidentParticipant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentParticipant(data map[string]any) IncidentIoEntity {
	return NewIncidentParticipantEntityFunc(sdk, data)
}


// IncidentParticipantWorkload returns a IncidentParticipantWorkload entity bound to this client.
// Idiomatic usage: client.IncidentParticipantWorkload(nil).List(nil, nil) or
// client.IncidentParticipantWorkload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentParticipantWorkload(data map[string]any) IncidentIoEntity {
	return NewIncidentParticipantWorkloadEntityFunc(sdk, data)
}


// IncidentRelationship returns a IncidentRelationship entity bound to this client.
// Idiomatic usage: client.IncidentRelationship(nil).List(nil, nil) or
// client.IncidentRelationship(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentRelationship(data map[string]any) IncidentIoEntity {
	return NewIncidentRelationshipEntityFunc(sdk, data)
}


// IncidentRole returns a IncidentRole entity bound to this client.
// Idiomatic usage: client.IncidentRole(nil).List(nil, nil) or
// client.IncidentRole(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentRole(data map[string]any) IncidentIoEntity {
	return NewIncidentRoleEntityFunc(sdk, data)
}


// IncidentStatus returns a IncidentStatus entity bound to this client.
// Idiomatic usage: client.IncidentStatus(nil).List(nil, nil) or
// client.IncidentStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentStatus(data map[string]any) IncidentIoEntity {
	return NewIncidentStatusEntityFunc(sdk, data)
}


// IncidentTeamMembership returns a IncidentTeamMembership entity bound to this client.
// Idiomatic usage: client.IncidentTeamMembership(nil).List(nil, nil) or
// client.IncidentTeamMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTeamMembership(data map[string]any) IncidentIoEntity {
	return NewIncidentTeamMembershipEntityFunc(sdk, data)
}


// IncidentTeamMembershipsV1 returns a IncidentTeamMembershipsV1 entity bound to this client.
// Idiomatic usage: client.IncidentTeamMembershipsV1(nil).List(nil, nil) or
// client.IncidentTeamMembershipsV1(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTeamMembershipsV1(data map[string]any) IncidentIoEntity {
	return NewIncidentTeamMembershipsV1EntityFunc(sdk, data)
}


// IncidentTemplate returns a IncidentTemplate entity bound to this client.
// Idiomatic usage: client.IncidentTemplate(nil).List(nil, nil) or
// client.IncidentTemplate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTemplate(data map[string]any) IncidentIoEntity {
	return NewIncidentTemplateEntityFunc(sdk, data)
}


// IncidentTemplatesValidateResultV1 returns a IncidentTemplatesValidateResultV1 entity bound to this client.
// Idiomatic usage: client.IncidentTemplatesValidateResultV1(nil).List(nil, nil) or
// client.IncidentTemplatesValidateResultV1(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTemplatesValidateResultV1(data map[string]any) IncidentIoEntity {
	return NewIncidentTemplatesValidateResultV1EntityFunc(sdk, data)
}


// IncidentTimelineItem returns a IncidentTimelineItem entity bound to this client.
// Idiomatic usage: client.IncidentTimelineItem(nil).List(nil, nil) or
// client.IncidentTimelineItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTimelineItem(data map[string]any) IncidentIoEntity {
	return NewIncidentTimelineItemEntityFunc(sdk, data)
}


// IncidentTimestamp returns a IncidentTimestamp entity bound to this client.
// Idiomatic usage: client.IncidentTimestamp(nil).List(nil, nil) or
// client.IncidentTimestamp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentTimestamp(data map[string]any) IncidentIoEntity {
	return NewIncidentTimestampEntityFunc(sdk, data)
}


// IncidentType returns a IncidentType entity bound to this client.
// Idiomatic usage: client.IncidentType(nil).List(nil, nil) or
// client.IncidentType(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentType(data map[string]any) IncidentIoEntity {
	return NewIncidentTypeEntityFunc(sdk, data)
}


// IncidentUpdate returns a IncidentUpdate entity bound to this client.
// Idiomatic usage: client.IncidentUpdate(nil).List(nil, nil) or
// client.IncidentUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentUpdate(data map[string]any) IncidentIoEntity {
	return NewIncidentUpdateEntityFunc(sdk, data)
}


// IpAllowlist returns a IpAllowlist entity bound to this client.
// Idiomatic usage: client.IpAllowlist(nil).List(nil, nil) or
// client.IpAllowlist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IpAllowlist(data map[string]any) IncidentIoEntity {
	return NewIpAllowlistEntityFunc(sdk, data)
}


// IpRange returns a IpRange entity bound to this client.
// Idiomatic usage: client.IpRange(nil).List(nil, nil) or
// client.IpRange(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IpRange(data map[string]any) IncidentIoEntity {
	return NewIpRangeEntityFunc(sdk, data)
}


// MaintenanceWindow returns a MaintenanceWindow entity bound to this client.
// Idiomatic usage: client.MaintenanceWindow(nil).List(nil, nil) or
// client.MaintenanceWindow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) MaintenanceWindow(data map[string]any) IncidentIoEntity {
	return NewMaintenanceWindowEntityFunc(sdk, data)
}


// OnCallNotificationMethodPublicV2 returns a OnCallNotificationMethodPublicV2 entity bound to this client.
// Idiomatic usage: client.OnCallNotificationMethodPublicV2(nil).List(nil, nil) or
// client.OnCallNotificationMethodPublicV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) OnCallNotificationMethodPublicV2(data map[string]any) IncidentIoEntity {
	return NewOnCallNotificationMethodPublicV2EntityFunc(sdk, data)
}


// OnCallNotificationRulePublicV2 returns a OnCallNotificationRulePublicV2 entity bound to this client.
// Idiomatic usage: client.OnCallNotificationRulePublicV2(nil).List(nil, nil) or
// client.OnCallNotificationRulePublicV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) OnCallNotificationRulePublicV2(data map[string]any) IncidentIoEntity {
	return NewOnCallNotificationRulePublicV2EntityFunc(sdk, data)
}


// PayConfig returns a PayConfig entity bound to this client.
// Idiomatic usage: client.PayConfig(nil).List(nil, nil) or
// client.PayConfig(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfig(data map[string]any) IncidentIoEntity {
	return NewPayConfigEntityFunc(sdk, data)
}


// PayConfigsCreateOneOffRuleResultV2 returns a PayConfigsCreateOneOffRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsCreateOneOffRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsCreateOneOffRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsCreateOneOffRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsCreateOneOffRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsCreateWeeklyRuleResultV2 returns a PayConfigsCreateWeeklyRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsCreateWeeklyRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsCreateWeeklyRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsCreateWeeklyRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsCreateWeeklyRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsListOneOffRulesResultV2 returns a PayConfigsListOneOffRulesResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsListOneOffRulesResultV2(nil).List(nil, nil) or
// client.PayConfigsListOneOffRulesResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsListOneOffRulesResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsListOneOffRulesResultV2EntityFunc(sdk, data)
}


// PayConfigsListWeeklyRulesResultV2 returns a PayConfigsListWeeklyRulesResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsListWeeklyRulesResultV2(nil).List(nil, nil) or
// client.PayConfigsListWeeklyRulesResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsListWeeklyRulesResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsListWeeklyRulesResultV2EntityFunc(sdk, data)
}


// PayConfigsShowOneOffRuleResultV2 returns a PayConfigsShowOneOffRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsShowOneOffRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsShowOneOffRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsShowOneOffRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsShowOneOffRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsShowWeeklyRuleResultV2 returns a PayConfigsShowWeeklyRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsShowWeeklyRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsShowWeeklyRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsShowWeeklyRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsShowWeeklyRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsUpdateOneOffRuleResultV2 returns a PayConfigsUpdateOneOffRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsUpdateOneOffRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsUpdateOneOffRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsUpdateOneOffRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsUpdateOneOffRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsUpdateWeeklyRuleResultV2 returns a PayConfigsUpdateWeeklyRuleResultV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsUpdateWeeklyRuleResultV2(nil).List(nil, nil) or
// client.PayConfigsUpdateWeeklyRuleResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsUpdateWeeklyRuleResultV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsUpdateWeeklyRuleResultV2EntityFunc(sdk, data)
}


// PayConfigsV2 returns a PayConfigsV2 entity bound to this client.
// Idiomatic usage: client.PayConfigsV2(nil).List(nil, nil) or
// client.PayConfigsV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayConfigsV2(data map[string]any) IncidentIoEntity {
	return NewPayConfigsV2EntityFunc(sdk, data)
}


// PayReport returns a PayReport entity bound to this client.
// Idiomatic usage: client.PayReport(nil).List(nil, nil) or
// client.PayReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayReport(data map[string]any) IncidentIoEntity {
	return NewPayReportEntityFunc(sdk, data)
}


// PayReportsPublishResultV2 returns a PayReportsPublishResultV2 entity bound to this client.
// Idiomatic usage: client.PayReportsPublishResultV2(nil).List(nil, nil) or
// client.PayReportsPublishResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayReportsPublishResultV2(data map[string]any) IncidentIoEntity {
	return NewPayReportsPublishResultV2EntityFunc(sdk, data)
}


// PayReportsUnpublishResultV2 returns a PayReportsUnpublishResultV2 entity bound to this client.
// Idiomatic usage: client.PayReportsUnpublishResultV2(nil).List(nil, nil) or
// client.PayReportsUnpublishResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayReportsUnpublishResultV2(data map[string]any) IncidentIoEntity {
	return NewPayReportsUnpublishResultV2EntityFunc(sdk, data)
}


// PayReportsV2 returns a PayReportsV2 entity bound to this client.
// Idiomatic usage: client.PayReportsV2(nil).List(nil, nil) or
// client.PayReportsV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PayReportsV2(data map[string]any) IncidentIoEntity {
	return NewPayReportsV2EntityFunc(sdk, data)
}


// PoliciesV2 returns a PoliciesV2 entity bound to this client.
// Idiomatic usage: client.PoliciesV2(nil).List(nil, nil) or
// client.PoliciesV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PoliciesV2(data map[string]any) IncidentIoEntity {
	return NewPoliciesV2EntityFunc(sdk, data)
}


// Policy returns a Policy entity bound to this client.
// Idiomatic usage: client.Policy(nil).List(nil, nil) or
// client.Policy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Policy(data map[string]any) IncidentIoEntity {
	return NewPolicyEntityFunc(sdk, data)
}


// PolicyFinding returns a PolicyFinding entity bound to this client.
// Idiomatic usage: client.PolicyFinding(nil).List(nil, nil) or
// client.PolicyFinding(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PolicyFinding(data map[string]any) IncidentIoEntity {
	return NewPolicyFindingEntityFunc(sdk, data)
}


// PolicyFindingsDismissResultV2 returns a PolicyFindingsDismissResultV2 entity bound to this client.
// Idiomatic usage: client.PolicyFindingsDismissResultV2(nil).List(nil, nil) or
// client.PolicyFindingsDismissResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PolicyFindingsDismissResultV2(data map[string]any) IncidentIoEntity {
	return NewPolicyFindingsDismissResultV2EntityFunc(sdk, data)
}


// PolicyFindingsRestoreResultV2 returns a PolicyFindingsRestoreResultV2 entity bound to this client.
// Idiomatic usage: client.PolicyFindingsRestoreResultV2(nil).List(nil, nil) or
// client.PolicyFindingsRestoreResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PolicyFindingsRestoreResultV2(data map[string]any) IncidentIoEntity {
	return NewPolicyFindingsRestoreResultV2EntityFunc(sdk, data)
}


// PostmortemDocument returns a PostmortemDocument entity bound to this client.
// Idiomatic usage: client.PostmortemDocument(nil).List(nil, nil) or
// client.PostmortemDocument(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) PostmortemDocument(data map[string]any) IncidentIoEntity {
	return NewPostmortemDocumentEntityFunc(sdk, data)
}


// Schedule returns a Schedule entity bound to this client.
// Idiomatic usage: client.Schedule(nil).List(nil, nil) or
// client.Schedule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Schedule(data map[string]any) IncidentIoEntity {
	return NewScheduleEntityFunc(sdk, data)
}


// ScheduleEntriesListPayloadV2 returns a ScheduleEntriesListPayloadV2 entity bound to this client.
// Idiomatic usage: client.ScheduleEntriesListPayloadV2(nil).List(nil, nil) or
// client.ScheduleEntriesListPayloadV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ScheduleEntriesListPayloadV2(data map[string]any) IncidentIoEntity {
	return NewScheduleEntriesListPayloadV2EntityFunc(sdk, data)
}


// ScheduleEntry returns a ScheduleEntry entity bound to this client.
// Idiomatic usage: client.ScheduleEntry(nil).List(nil, nil) or
// client.ScheduleEntry(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ScheduleEntry(data map[string]any) IncidentIoEntity {
	return NewScheduleEntryEntityFunc(sdk, data)
}


// ScheduleReplica returns a ScheduleReplica entity bound to this client.
// Idiomatic usage: client.ScheduleReplica(nil).List(nil, nil) or
// client.ScheduleReplica(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ScheduleReplica(data map[string]any) IncidentIoEntity {
	return NewScheduleReplicaEntityFunc(sdk, data)
}


// ScheduleSyncRule returns a ScheduleSyncRule entity bound to this client.
// Idiomatic usage: client.ScheduleSyncRule(nil).List(nil, nil) or
// client.ScheduleSyncRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ScheduleSyncRule(data map[string]any) IncidentIoEntity {
	return NewScheduleSyncRuleEntityFunc(sdk, data)
}


// ScheduleSyncTarget returns a ScheduleSyncTarget entity bound to this client.
// Idiomatic usage: client.ScheduleSyncTarget(nil).List(nil, nil) or
// client.ScheduleSyncTarget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ScheduleSyncTarget(data map[string]any) IncidentIoEntity {
	return NewScheduleSyncTargetEntityFunc(sdk, data)
}


// SchedulesShowOverrideResultV2 returns a SchedulesShowOverrideResultV2 entity bound to this client.
// Idiomatic usage: client.SchedulesShowOverrideResultV2(nil).List(nil, nil) or
// client.SchedulesShowOverrideResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) SchedulesShowOverrideResultV2(data map[string]any) IncidentIoEntity {
	return NewSchedulesShowOverrideResultV2EntityFunc(sdk, data)
}


// SchedulesUpdateOverrideResultV2 returns a SchedulesUpdateOverrideResultV2 entity bound to this client.
// Idiomatic usage: client.SchedulesUpdateOverrideResultV2(nil).List(nil, nil) or
// client.SchedulesUpdateOverrideResultV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) SchedulesUpdateOverrideResultV2(data map[string]any) IncidentIoEntity {
	return NewSchedulesUpdateOverrideResultV2EntityFunc(sdk, data)
}


// Secret returns a Secret entity bound to this client.
// Idiomatic usage: client.Secret(nil).List(nil, nil) or
// client.Secret(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Secret(data map[string]any) IncidentIoEntity {
	return NewSecretEntityFunc(sdk, data)
}


// Severity returns a Severity entity bound to this client.
// Idiomatic usage: client.Severity(nil).List(nil, nil) or
// client.Severity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Severity(data map[string]any) IncidentIoEntity {
	return NewSeverityEntityFunc(sdk, data)
}


// StatusPage returns a StatusPage entity bound to this client.
// Idiomatic usage: client.StatusPage(nil).List(nil, nil) or
// client.StatusPage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPage(data map[string]any) IncidentIoEntity {
	return NewStatusPageEntityFunc(sdk, data)
}


// StatusPageComponent returns a StatusPageComponent entity bound to this client.
// Idiomatic usage: client.StatusPageComponent(nil).List(nil, nil) or
// client.StatusPageComponent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageComponent(data map[string]any) IncidentIoEntity {
	return NewStatusPageComponentEntityFunc(sdk, data)
}


// StatusPageComponentAvailabilityV2 returns a StatusPageComponentAvailabilityV2 entity bound to this client.
// Idiomatic usage: client.StatusPageComponentAvailabilityV2(nil).List(nil, nil) or
// client.StatusPageComponentAvailabilityV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageComponentAvailabilityV2(data map[string]any) IncidentIoEntity {
	return NewStatusPageComponentAvailabilityV2EntityFunc(sdk, data)
}


// StatusPageIncident returns a StatusPageIncident entity bound to this client.
// Idiomatic usage: client.StatusPageIncident(nil).List(nil, nil) or
// client.StatusPageIncident(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageIncident(data map[string]any) IncidentIoEntity {
	return NewStatusPageIncidentEntityFunc(sdk, data)
}


// StatusPageIncidentUpdate returns a StatusPageIncidentUpdate entity bound to this client.
// Idiomatic usage: client.StatusPageIncidentUpdate(nil).List(nil, nil) or
// client.StatusPageIncidentUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageIncidentUpdate(data map[string]any) IncidentIoEntity {
	return NewStatusPageIncidentUpdateEntityFunc(sdk, data)
}


// StatusPageLinkedResponseIncidentV1 returns a StatusPageLinkedResponseIncidentV1 entity bound to this client.
// Idiomatic usage: client.StatusPageLinkedResponseIncidentV1(nil).List(nil, nil) or
// client.StatusPageLinkedResponseIncidentV1(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageLinkedResponseIncidentV1(data map[string]any) IncidentIoEntity {
	return NewStatusPageLinkedResponseIncidentV1EntityFunc(sdk, data)
}


// StatusPageMaintenance returns a StatusPageMaintenance entity bound to this client.
// Idiomatic usage: client.StatusPageMaintenance(nil).List(nil, nil) or
// client.StatusPageMaintenance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageMaintenance(data map[string]any) IncidentIoEntity {
	return NewStatusPageMaintenanceEntityFunc(sdk, data)
}


// StatusPageMaintenanceUpdate returns a StatusPageMaintenanceUpdate entity bound to this client.
// Idiomatic usage: client.StatusPageMaintenanceUpdate(nil).List(nil, nil) or
// client.StatusPageMaintenanceUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageMaintenanceUpdate(data map[string]any) IncidentIoEntity {
	return NewStatusPageMaintenanceUpdateEntityFunc(sdk, data)
}


// StatusPageStructure returns a StatusPageStructure entity bound to this client.
// Idiomatic usage: client.StatusPageStructure(nil).List(nil, nil) or
// client.StatusPageStructure(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPageStructure(data map[string]any) IncidentIoEntity {
	return NewStatusPageStructureEntityFunc(sdk, data)
}


// StatusPagesV2 returns a StatusPagesV2 entity bound to this client.
// Idiomatic usage: client.StatusPagesV2(nil).List(nil, nil) or
// client.StatusPagesV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) StatusPagesV2(data map[string]any) IncidentIoEntity {
	return NewStatusPagesV2EntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Team(data map[string]any) IncidentIoEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TelemetryDataSourceV2 returns a TelemetryDataSourceV2 entity bound to this client.
// Idiomatic usage: client.TelemetryDataSourceV2(nil).List(nil, nil) or
// client.TelemetryDataSourceV2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) TelemetryDataSourceV2(data map[string]any) IncidentIoEntity {
	return NewTelemetryDataSourceV2EntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) User(data map[string]any) IncidentIoEntity {
	return NewUserEntityFunc(sdk, data)
}


// Workflow returns a Workflow entity bound to this client.
// Idiomatic usage: client.Workflow(nil).List(nil, nil) or
// client.Workflow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Workflow(data map[string]any) IncidentIoEntity {
	return NewWorkflowEntityFunc(sdk, data)
}


// WorkflowRun returns a WorkflowRun entity bound to this client.
// Idiomatic usage: client.WorkflowRun(nil).List(nil, nil) or
// client.WorkflowRun(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) WorkflowRun(data map[string]any) IncidentIoEntity {
	return NewWorkflowRunEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *IncidentIoSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewIncidentIoSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}

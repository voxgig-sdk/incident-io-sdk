package core

import (
	"fmt"

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

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
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
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
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

func (sdk *IncidentIoSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
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
		return map[string]any{"ok": false, "err": fetchErr}, nil
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
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
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


// ApiKey returns a ApiKey entity bound to this client.
// Idiomatic usage: client.ApiKey(nil).List(nil, nil) or
// client.ApiKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) ApiKey(data map[string]any) IncidentIoEntity {
	return NewApiKeyEntityFunc(sdk, data)
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


// FollowUp returns a FollowUp entity bound to this client.
// Idiomatic usage: client.FollowUp(nil).List(nil, nil) or
// client.FollowUp(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) FollowUp(data map[string]any) IncidentIoEntity {
	return NewFollowUpEntityFunc(sdk, data)
}


// Incident returns a Incident entity bound to this client.
// Idiomatic usage: client.Incident(nil).List(nil, nil) or
// client.Incident(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Incident(data map[string]any) IncidentIoEntity {
	return NewIncidentEntityFunc(sdk, data)
}


// IncidentAlert returns a IncidentAlert entity bound to this client.
// Idiomatic usage: client.IncidentAlert(nil).List(nil, nil) or
// client.IncidentAlert(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentAlert(data map[string]any) IncidentIoEntity {
	return NewIncidentAlertEntityFunc(sdk, data)
}


// IncidentAttachment returns a IncidentAttachment entity bound to this client.
// Idiomatic usage: client.IncidentAttachment(nil).List(nil, nil) or
// client.IncidentAttachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) IncidentAttachment(data map[string]any) IncidentIoEntity {
	return NewIncidentAttachmentEntityFunc(sdk, data)
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


// MaintenanceWindow returns a MaintenanceWindow entity bound to this client.
// Idiomatic usage: client.MaintenanceWindow(nil).List(nil, nil) or
// client.MaintenanceWindow(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) MaintenanceWindow(data map[string]any) IncidentIoEntity {
	return NewMaintenanceWindowEntityFunc(sdk, data)
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


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) Team(data map[string]any) IncidentIoEntity {
	return NewTeamEntityFunc(sdk, data)
}


// TelemetryDataSource returns a TelemetryDataSource entity bound to this client.
// Idiomatic usage: client.TelemetryDataSource(nil).List(nil, nil) or
// client.TelemetryDataSource(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *IncidentIoSDK) TelemetryDataSource(data map[string]any) IncidentIoEntity {
	return NewTelemetryDataSourceEntityFunc(sdk, data)
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

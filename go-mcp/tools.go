package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/incident-io-sdk/go"
)

// ListArgs is what an agent sends to incident-io_list.
type ListArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: action | alert | alert_attribute | alert_note | alert_route | alert_source | alert_tag | alerts_transition_incident_alert_result_v2 | announcement_rule | announcement_template | api_key | call_route | call_routes_list_allowed_callers_result_v2 | call_routes_list_options_result_v2 | call_session | call_transcript_entry | catalog_entry | catalog_resource | catalog_type | custom_field | custom_field_option | escalation | escalation_path_template | follow_up | incident | incident_activity_log_entry | incident_attachment | incident_form | incident_participant_workload | incident_relationship | incident_role | incident_status | incident_template | incident_timeline_item | incident_timestamp | incident_type | incident_update | ip_range | maintenance_window | on_call_notification_method_public_v2 | on_call_notification_rule_public_v2 | pay_config | pay_configs_list_one_off_rules_result_v2 | pay_configs_list_weekly_rules_result_v2 | pay_report | policy | policy_finding | postmortem_document | schedule | schedule_replica | schedule_sync_rule | schedule_sync_target | schedules_show_override_result_v2 | secret | severity | status_page | status_page_component | status_page_incident | status_page_linked_response_incident_v1 | status_page_maintenance | team | user | workflow | workflow_run"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional filter map; omit it for the first page"`
}

// LoadArgs is what an agent sends to incident-io_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: action | alert | alert_attribute | alert_note | alert_route | alert_source | announcement_rule | announcement_template | api_key | call_route | call_routes_show_allowed_caller_result_v2 | call_routes_show_option_result_v2 | catalog_entry | catalog_type | custom_field | custom_field_option | escalation | escalation_path_template | follow_up | identity | incident | incident_form | incident_participant | incident_role | incident_status | incident_template | incident_timestamp | incident_type | ip_allowlist | maintenance_window | pay_config | pay_configs_show_one_off_rule_result_v2 | pay_configs_show_weekly_rule_result_v2 | pay_report | pay_reports_v2 | policy | policy_finding | postmortem_document | schedule | schedule_entry | schedule_replica | schedule_sync_rule | schedule_sync_target | schedules_show_override_result_v2 | secret | severity | status_page | status_page_component | status_page_component_availability_v2 | status_page_incident | status_page_maintenance | status_page_structure | team | user | workflow | workflow_run"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.IncidentIoSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "incident-io_list",
		Description: "List records from IncidentIo. Args: entity, query (optional filter map; omit it for the first page). Returns the first page of records as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[ListArgs]("action", "alert", "alert_attribute", "alert_note", "alert_route", "alert_source", "alert_tag", "alerts_transition_incident_alert_result_v2", "announcement_rule", "announcement_template", "api_key", "call_route", "call_routes_list_allowed_callers_result_v2", "call_routes_list_options_result_v2", "call_session", "call_transcript_entry", "catalog_entry", "catalog_resource", "catalog_type", "custom_field", "custom_field_option", "escalation", "escalation_path_template", "follow_up", "incident", "incident_activity_log_entry", "incident_attachment", "incident_form", "incident_participant_workload", "incident_relationship", "incident_role", "incident_status", "incident_template", "incident_timeline_item", "incident_timestamp", "incident_type", "incident_update", "ip_range", "maintenance_window", "on_call_notification_method_public_v2", "on_call_notification_rule_public_v2", "pay_config", "pay_configs_list_one_off_rules_result_v2", "pay_configs_list_weekly_rules_result_v2", "pay_report", "policy", "policy_finding", "postmortem_document", "schedule", "schedule_replica", "schedule_sync_rule", "schedule_sync_target", "schedules_show_override_result_v2", "secret", "severity", "status_page", "status_page_component", "status_page_incident", "status_page_linked_response_incident_v1", "status_page_maintenance", "team", "user", "workflow", "workflow_run"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args ListArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "list", args.Entity, args.Query)
	})
	mcp.AddTool(server, &mcp.Tool{
		Name:        "incident-io_load",
		Description: "Load one record from IncidentIo. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("action", "alert", "alert_attribute", "alert_note", "alert_route", "alert_source", "announcement_rule", "announcement_template", "api_key", "call_route", "call_routes_show_allowed_caller_result_v2", "call_routes_show_option_result_v2", "catalog_entry", "catalog_type", "custom_field", "custom_field_option", "escalation", "escalation_path_template", "follow_up", "identity", "incident", "incident_form", "incident_participant", "incident_role", "incident_status", "incident_template", "incident_timestamp", "incident_type", "ip_allowlist", "maintenance_window", "pay_config", "pay_configs_show_one_off_rule_result_v2", "pay_configs_show_weekly_rule_result_v2", "pay_report", "pay_reports_v2", "policy", "policy_finding", "postmortem_document", "schedule", "schedule_entry", "schedule_replica", "schedule_sync_rule", "schedule_sync_target", "schedules_show_override_result_v2", "secret", "severity", "status_page", "status_page_component", "status_page_component_availability_v2", "status_page_incident", "status_page_maintenance", "status_page_structure", "team", "user", "workflow", "workflow_run"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.IncidentIoSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.IncidentIoSDK, name string) (sdk.IncidentIoEntity, error) {
	switch strings.ToLower(name) {
	case "action":
		return client.Action(nil), nil
	case "alert":
		return client.Alert(nil), nil
	case "alert_attribute":
		return client.AlertAttribute(nil), nil
	case "alert_note":
		return client.AlertNote(nil), nil
	case "alert_route":
		return client.AlertRoute(nil), nil
	case "alert_source":
		return client.AlertSource(nil), nil
	case "alert_sources_v2":
		return client.AlertSourcesV2(nil), nil
	case "alert_tag":
		return client.AlertTag(nil), nil
	case "alerts_add_tags_result_v2":
		return client.AlertsAddTagsResultV2(nil), nil
	case "alerts_remove_tags_result_v2":
		return client.AlertsRemoveTagsResultV2(nil), nil
	case "alerts_set_tags_result_v2":
		return client.AlertsSetTagsResultV2(nil), nil
	case "alerts_transition_incident_alert_result_v2":
		return client.AlertsTransitionIncidentAlertResultV2(nil), nil
	case "announcement_rule":
		return client.AnnouncementRule(nil), nil
	case "announcement_template":
		return client.AnnouncementTemplate(nil), nil
	case "api_key":
		return client.ApiKey(nil), nil
	case "call_route":
		return client.CallRoute(nil), nil
	case "call_routes_create_allowed_caller_result_v2":
		return client.CallRoutesCreateAllowedCallerResultV2(nil), nil
	case "call_routes_create_option_result_v2":
		return client.CallRoutesCreateOptionResultV2(nil), nil
	case "call_routes_list_allowed_callers_result_v2":
		return client.CallRoutesListAllowedCallersResultV2(nil), nil
	case "call_routes_list_options_result_v2":
		return client.CallRoutesListOptionsResultV2(nil), nil
	case "call_routes_show_allowed_caller_result_v2":
		return client.CallRoutesShowAllowedCallerResultV2(nil), nil
	case "call_routes_show_option_result_v2":
		return client.CallRoutesShowOptionResultV2(nil), nil
	case "call_routes_update_allowed_caller_result_v2":
		return client.CallRoutesUpdateAllowedCallerResultV2(nil), nil
	case "call_routes_update_option_result_v2":
		return client.CallRoutesUpdateOptionResultV2(nil), nil
	case "call_routes_v2":
		return client.CallRoutesV2(nil), nil
	case "call_session":
		return client.CallSession(nil), nil
	case "call_transcript_entry":
		return client.CallTranscriptEntry(nil), nil
	case "catalog_entry":
		return client.CatalogEntry(nil), nil
	case "catalog_resource":
		return client.CatalogResource(nil), nil
	case "catalog_type":
		return client.CatalogType(nil), nil
	case "catalog_type_schema":
		return client.CatalogTypeSchema(nil), nil
	case "custom_field":
		return client.CustomField(nil), nil
	case "custom_field_option":
		return client.CustomFieldOption(nil), nil
	case "escalation":
		return client.Escalation(nil), nil
	case "escalation_path_template":
		return client.EscalationPathTemplate(nil), nil
	case "escalations_check_escalation_permissions_result_v2":
		return client.EscalationsCheckEscalationPermissionsResultV2(nil), nil
	case "escalations_reassign_escalation_result_v2":
		return client.EscalationsReassignEscalationResultV2(nil), nil
	case "follow_up":
		return client.FollowUp(nil), nil
	case "follow_ups_connect_external_issue_result_v3":
		return client.FollowUpsConnectExternalIssueResultV3(nil), nil
	case "follow_ups_create_from_link_result_v3":
		return client.FollowUpsCreateFromLinkResultV3(nil), nil
	case "identity":
		return client.Identity(nil), nil
	case "incident":
		return client.Incident(nil), nil
	case "incident_activity_log_entry":
		return client.IncidentActivityLogEntry(nil), nil
	case "incident_attachment":
		return client.IncidentAttachment(nil), nil
	case "incident_form":
		return client.IncidentForm(nil), nil
	case "incident_membership":
		return client.IncidentMembership(nil), nil
	case "incident_participant":
		return client.IncidentParticipant(nil), nil
	case "incident_participant_workload":
		return client.IncidentParticipantWorkload(nil), nil
	case "incident_relationship":
		return client.IncidentRelationship(nil), nil
	case "incident_role":
		return client.IncidentRole(nil), nil
	case "incident_status":
		return client.IncidentStatus(nil), nil
	case "incident_team_membership":
		return client.IncidentTeamMembership(nil), nil
	case "incident_team_memberships_v1":
		return client.IncidentTeamMembershipsV1(nil), nil
	case "incident_template":
		return client.IncidentTemplate(nil), nil
	case "incident_templates_validate_result_v1":
		return client.IncidentTemplatesValidateResultV1(nil), nil
	case "incident_timeline_item":
		return client.IncidentTimelineItem(nil), nil
	case "incident_timestamp":
		return client.IncidentTimestamp(nil), nil
	case "incident_type":
		return client.IncidentType(nil), nil
	case "incident_update":
		return client.IncidentUpdate(nil), nil
	case "ip_allowlist":
		return client.IpAllowlist(nil), nil
	case "ip_range":
		return client.IpRange(nil), nil
	case "maintenance_window":
		return client.MaintenanceWindow(nil), nil
	case "on_call_notification_method_public_v2":
		return client.OnCallNotificationMethodPublicV2(nil), nil
	case "on_call_notification_rule_public_v2":
		return client.OnCallNotificationRulePublicV2(nil), nil
	case "pay_config":
		return client.PayConfig(nil), nil
	case "pay_configs_create_one_off_rule_result_v2":
		return client.PayConfigsCreateOneOffRuleResultV2(nil), nil
	case "pay_configs_create_weekly_rule_result_v2":
		return client.PayConfigsCreateWeeklyRuleResultV2(nil), nil
	case "pay_configs_list_one_off_rules_result_v2":
		return client.PayConfigsListOneOffRulesResultV2(nil), nil
	case "pay_configs_list_weekly_rules_result_v2":
		return client.PayConfigsListWeeklyRulesResultV2(nil), nil
	case "pay_configs_show_one_off_rule_result_v2":
		return client.PayConfigsShowOneOffRuleResultV2(nil), nil
	case "pay_configs_show_weekly_rule_result_v2":
		return client.PayConfigsShowWeeklyRuleResultV2(nil), nil
	case "pay_configs_update_one_off_rule_result_v2":
		return client.PayConfigsUpdateOneOffRuleResultV2(nil), nil
	case "pay_configs_update_weekly_rule_result_v2":
		return client.PayConfigsUpdateWeeklyRuleResultV2(nil), nil
	case "pay_configs_v2":
		return client.PayConfigsV2(nil), nil
	case "pay_report":
		return client.PayReport(nil), nil
	case "pay_reports_publish_result_v2":
		return client.PayReportsPublishResultV2(nil), nil
	case "pay_reports_unpublish_result_v2":
		return client.PayReportsUnpublishResultV2(nil), nil
	case "pay_reports_v2":
		return client.PayReportsV2(nil), nil
	case "policies_v2":
		return client.PoliciesV2(nil), nil
	case "policy":
		return client.Policy(nil), nil
	case "policy_finding":
		return client.PolicyFinding(nil), nil
	case "policy_findings_dismiss_result_v2":
		return client.PolicyFindingsDismissResultV2(nil), nil
	case "policy_findings_restore_result_v2":
		return client.PolicyFindingsRestoreResultV2(nil), nil
	case "postmortem_document":
		return client.PostmortemDocument(nil), nil
	case "schedule":
		return client.Schedule(nil), nil
	case "schedule_entries_list_payload_v2":
		return client.ScheduleEntriesListPayloadV2(nil), nil
	case "schedule_entry":
		return client.ScheduleEntry(nil), nil
	case "schedule_replica":
		return client.ScheduleReplica(nil), nil
	case "schedule_sync_rule":
		return client.ScheduleSyncRule(nil), nil
	case "schedule_sync_target":
		return client.ScheduleSyncTarget(nil), nil
	case "schedules_show_override_result_v2":
		return client.SchedulesShowOverrideResultV2(nil), nil
	case "schedules_update_override_result_v2":
		return client.SchedulesUpdateOverrideResultV2(nil), nil
	case "secret":
		return client.Secret(nil), nil
	case "severity":
		return client.Severity(nil), nil
	case "status_page":
		return client.StatusPage(nil), nil
	case "status_page_component":
		return client.StatusPageComponent(nil), nil
	case "status_page_component_availability_v2":
		return client.StatusPageComponentAvailabilityV2(nil), nil
	case "status_page_incident":
		return client.StatusPageIncident(nil), nil
	case "status_page_incident_update":
		return client.StatusPageIncidentUpdate(nil), nil
	case "status_page_linked_response_incident_v1":
		return client.StatusPageLinkedResponseIncidentV1(nil), nil
	case "status_page_maintenance":
		return client.StatusPageMaintenance(nil), nil
	case "status_page_maintenance_update":
		return client.StatusPageMaintenanceUpdate(nil), nil
	case "status_page_structure":
		return client.StatusPageStructure(nil), nil
	case "status_pages_v2":
		return client.StatusPagesV2(nil), nil
	case "team":
		return client.Team(nil), nil
	case "telemetry_data_source_v2":
		return client.TelemetryDataSourceV2(nil), nil
	case "user":
		return client.User(nil), nil
	case "workflow":
		return client.Workflow(nil), nil
	case "workflow_run":
		return client.WorkflowRun(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}

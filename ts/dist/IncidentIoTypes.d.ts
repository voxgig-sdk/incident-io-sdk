export interface Action {
    assignee: Record<string, any>;
    assignee_id?: string;
    completed_at?: string;
    created_at: string;
    creator: Record<string, any>;
    description: string;
    id: string;
    incident_id: string;
    status: string;
    updated_at: string;
}
export interface ActionLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionListMatch {
    after?: string;
    created_at?: Record<string, any>;
    incident_id?: string;
    incident_mode?: string;
    page_size?: number;
    updated_at?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface ActionCreateData {
    assignee_id?: string;
    description: string;
    incident_id: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionUpdateData {
    id: string;
    assignee_id?: string;
    description?: string;
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface Alert {
    alert_group_ids?: any[];
    alert_source_id: string;
    attributes: any[];
    created_at: string;
    deduplication_key: string;
    description?: string;
    id: string;
    resolved_at?: string;
    source_url?: string;
    status: string;
    tags?: any[];
    title: string;
    updated_at: string;
}
export interface AlertLoadMatch {
    id: string;
}
export interface AlertListMatch {
    after?: string;
    alert_group_id?: Record<string, any>;
    alert_source?: Record<string, any>;
    attribute?: Record<string, any>;
    created_at?: Record<string, any>;
    deduplication_key?: Record<string, any>;
    has_note?: Record<string, any>;
    include_maintenance_window?: Record<string, any>;
    page_size: number;
    status?: Record<string, any>;
    tag?: Record<string, any>;
    updated_at?: Record<string, any>;
}
export interface AlertCreateData {
    id: string;
    alert_group_ids?: any[];
    alert_source_id: string;
    attributes: any[];
    created_at: string;
    deduplication_key: string;
    description?: string;
    resolved_at?: string;
    source_url?: string;
    status: string;
    tags?: any[];
    title: string;
    updated_at: string;
    $action?: string;
    [action: string]: any;
}
export interface AlertAttribute {
    array: boolean;
    emoji?: string;
    id: string;
    name: string;
    required: boolean;
    type: string;
}
export interface AlertAttributeLoadMatch {
    id: string;
}
export interface AlertAttributeListMatch {
    array?: boolean;
    emoji?: string;
    id?: string;
    name?: string;
    required?: boolean;
    type?: string;
}
export interface AlertAttributeCreateData {
    array: boolean;
    emoji?: string;
    name: string;
    required?: boolean;
    type: string;
}
export interface AlertAttributeUpdateData {
    id: string;
    array?: boolean;
    emoji?: string;
    name?: string;
    required?: boolean;
    type?: string;
}
export interface AlertAttributeRemoveMatch {
    id: string;
}
export interface AlertNote {
    alert_group_id?: string;
    alert_id?: string;
    content: string;
    created_at: string;
    creator: Record<string, any>;
    id: string;
    images: any[];
    last_edited_at?: string;
    updated_at: string;
}
export interface AlertNoteLoadMatch {
    id: string;
}
export interface AlertNoteListMatch {
    after?: string;
    alert_group_id?: string;
    alert_id?: string;
    page_size?: number;
}
export interface AlertNoteCreateData {
    alert_group_id?: string;
    alert_id?: string;
    content: string;
}
export interface AlertNoteUpdateData {
    id: string;
    content?: string;
}
export interface AlertNoteRemoveMatch {
    id: string;
}
export interface AlertRoute {
    alert_sources: any[];
    condition_groups: any[];
    created_at?: string;
    enabled: boolean;
    escalation_config: Record<string, any>;
    expressions: any[];
    grouping_config: Record<string, any>;
    id: string;
    incident_config: Record<string, any>;
    is_private: boolean;
    message_config: Record<string, any>;
    name: string;
    owning_team_ids?: any[];
    updated_at?: string;
    version: number;
}
export interface AlertRouteLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AlertRouteListMatch {
    after?: string;
    page_size?: number;
    $action?: string;
    [action: string]: any;
}
export interface AlertRouteCreateData {
    alert_sources: any[];
    condition_groups: any[];
    enabled: boolean;
    escalation_config: Record<string, any>;
    expressions: any[];
    grouping_config: Record<string, any>;
    incident_config: Record<string, any>;
    is_private: boolean;
    message_config: Record<string, any>;
    name: string;
    owning_team_ids?: any[];
    $action?: string;
    [action: string]: any;
}
export interface AlertRouteUpdateData {
    id: string;
    alert_sources?: any[];
    condition_groups?: any[];
    enabled?: boolean;
    escalation_config?: Record<string, any>;
    expressions?: any[];
    grouping_config?: Record<string, any>;
    incident_config?: Record<string, any>;
    is_private?: boolean;
    message_config?: Record<string, any>;
    name?: string;
    owning_team_ids?: any[];
    version?: number;
    $action?: string;
    [action: string]: any;
}
export interface AlertRouteRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface AlertSource {
    alert_events_url?: string;
    auto_resolve_incident_alerts?: boolean;
    auto_resolve_timeout_minutes?: number;
    azure_devops_options: Record<string, any>;
    disabled?: boolean;
    email_options: Record<string, any>;
    filter_condition_groups?: any[];
    fixed_team_id?: string;
    heartbeat_options: Record<string, any>;
    http_custom_options: Record<string, any>;
    id: string;
    jira_options: Record<string, any>;
    name: string;
    owning_team_ids?: any[];
    rate_limit_sharding: Record<string, any>;
    secret_token?: string;
    source_type: string;
    template: Record<string, any>;
}
export interface AlertSourceLoadMatch {
    id: string;
}
export interface AlertSourceListMatch {
    alert_events_url?: string;
    auto_resolve_incident_alerts?: boolean;
    auto_resolve_timeout_minutes?: number;
    azure_devops_options?: Record<string, any>;
    disabled?: boolean;
    email_options?: Record<string, any>;
    filter_condition_groups?: any[];
    fixed_team_id?: string;
    heartbeat_options?: Record<string, any>;
    http_custom_options?: Record<string, any>;
    id?: string;
    jira_options?: Record<string, any>;
    name?: string;
    owning_team_ids?: any[];
    rate_limit_sharding?: Record<string, any>;
    secret_token?: string;
    source_type?: string;
    template?: Record<string, any>;
}
export interface AlertSourceCreateData {
    auto_resolve_incident_alerts?: boolean;
    auto_resolve_timeout_minutes?: number;
    azure_devops_options: Record<string, any>;
    email_options: Record<string, any>;
    filter_condition_groups?: any[];
    fixed_team_id?: string;
    heartbeat_options: Record<string, any>;
    http_custom_options: Record<string, any>;
    jira_options: Record<string, any>;
    name: string;
    owning_team_ids?: any[];
    rate_limit_sharding: Record<string, any>;
    source_type: string;
    template: Record<string, any>;
}
export interface AlertSourceUpdateData {
    id: string;
    auto_resolve_incident_alerts?: boolean;
    auto_resolve_timeout_minutes?: number;
    azure_devops_options?: Record<string, any>;
    disabled?: boolean;
    email_options?: Record<string, any>;
    filter_condition_groups?: any[];
    fixed_team_id?: string;
    heartbeat_options?: Record<string, any>;
    http_custom_options?: Record<string, any>;
    jira_options?: Record<string, any>;
    name?: string;
    owning_team_ids?: any[];
    rate_limit_sharding?: Record<string, any>;
    template?: Record<string, any>;
}
export interface AlertSourceRemoveMatch {
    id: string;
}
export interface AlertSourcesV2 {
    owning_team_ids?: any[];
    source_type: string;
    template: Record<string, any>;
}
export interface AlertSourcesV2CreateData {
    owning_team_ids?: any[];
    source_type: string;
    template: Record<string, any>;
}
export interface AlertTag {
    alert_group_ids?: any[];
    alert_source_id: string;
    attributes: any[];
    created_at: string;
    deduplication_key: string;
    description?: string;
    id: string;
    name: string;
    resolved_at?: string;
    source_url?: string;
    status: string;
    tags?: any[];
    title: string;
    updated_at: string;
}
export interface AlertTagListMatch {
    after?: string;
    page_size?: number;
    search?: string;
}
export interface AlertTagCreateData {
    alert_id: string;
    tags: any[];
}
export interface AlertsAddTagsResultV2 {
    alert_group_ids?: any[];
    alert_source_id: string;
    attributes: any[];
    created_at: string;
    deduplication_key: string;
    description?: string;
    id: string;
    resolved_at?: string;
    source_url?: string;
    status: string;
    tags?: any[];
    title: string;
    updated_at: string;
}
export interface AlertsAddTagsResultV2CreateData {
    alert_id: string;
    tags: any[];
}
export interface AlertsSetTagsResultV2 {
    alert_group_ids?: any[];
    alert_source_id: string;
    attributes: any[];
    created_at: string;
    deduplication_key: string;
    description?: string;
    id: string;
    resolved_at?: string;
    source_url?: string;
    status: string;
    tags?: any[];
    title: string;
    updated_at: string;
}
export interface AlertsSetTagsResultV2CreateData {
    alert_id: string;
    tags: any[];
}
export interface AlertsTransitionIncidentAlertResultV2 {
    alert: Record<string, any>;
    alert_id: string;
    alert_route_id?: string;
    id: string;
    incident: Record<string, any>;
    incident_id: string;
    re_relate?: boolean;
    state: string;
}
export interface AlertsTransitionIncidentAlertResultV2ListMatch {
    after?: string;
    alert_id?: string;
    incident_id?: string;
    page_size: number;
}
export interface AlertsTransitionIncidentAlertResultV2CreateData {
    alert_id: string;
    incident_id: string;
    re_relate?: boolean;
    state: string;
}
export interface AnnouncementRule {
    condition_groups: any[];
    conditions_no_longer_apply_behaviour: string;
    created_at: string;
    id: string;
    microsoft_teams_channel_ids: any[];
    mode: string;
    name: string;
    owning_team_ids: any[];
    private_incident_scope?: string;
    slack_channel_ids: any[];
    template_id?: string;
    update_sharing_mode: string;
    updated_at: string;
}
export interface AnnouncementRuleLoadMatch {
    id: string;
}
export interface AnnouncementRuleListMatch {
    after?: string;
    page_size?: number;
}
export interface AnnouncementRuleCreateData {
    condition_groups: any[];
    conditions_no_longer_apply_behaviour?: string;
    microsoft_teams_channel_ids?: any[];
    mode: string;
    name: string;
    owning_team_ids?: any[];
    private_incident_scope?: string;
    slack_channel_ids?: any[];
    template_id?: string;
    update_sharing_mode: string;
}
export interface AnnouncementRuleUpdateData {
    id: string;
    condition_groups?: any[];
    conditions_no_longer_apply_behaviour?: string;
    microsoft_teams_channel_ids?: any[];
    mode?: string;
    name?: string;
    owning_team_ids?: any[];
    private_incident_scope?: string;
    slack_channel_ids?: any[];
    template_id?: string;
    update_sharing_mode?: string;
}
export interface AnnouncementRuleRemoveMatch {
    id: string;
}
export interface AnnouncementTemplate {
    actions: any[];
    fields: any[];
    id: string;
    is_default: boolean;
    name: string;
    owning_team_ids: any[];
}
export interface AnnouncementTemplateLoadMatch {
    id: string;
}
export interface AnnouncementTemplateListMatch {
    actions?: any[];
    fields?: any[];
    id?: string;
    is_default?: boolean;
    name?: string;
    owning_team_ids?: any[];
}
export interface AnnouncementTemplateCreateData {
    actions?: any[];
    fields?: any[];
    name: string;
    owning_team_ids?: any[];
}
export interface AnnouncementTemplateUpdateData {
    id: string;
    actions?: any[];
    fields?: any[];
    name?: string;
    owning_team_ids?: any[];
}
export interface AnnouncementTemplateRemoveMatch {
    id: string;
}
export interface ApiKey {
    comments?: string;
    created_at: string;
    creator: Record<string, any>;
    id: string;
    last_used_at?: string;
    name: string;
    role_names: any[];
    roles: any[];
    team_ids: any[];
    team_role_names: any[];
    team_roles: any[];
    token_last_issued_at: string;
}
export interface ApiKeyLoadMatch {
    id: string;
}
export interface ApiKeyListMatch {
    after?: string;
    page_size?: number;
}
export interface ApiKeyCreateData {
    comments?: string;
    name: string;
    role_names: any[];
    team_ids: any[];
    team_role_names: any[];
    $action?: string;
    [action: string]: any;
}
export interface ApiKeyUpdateData {
    id: string;
    comments?: string;
    name?: string;
    role_names?: any[];
    team_ids?: any[];
    team_role_names?: any[];
}
export interface ApiKeyRemoveMatch {
    id: string;
}
export interface CallRoute {
    allowed_callers: any[];
    country_code?: string;
    created_at: string;
    current_state: string;
    custom_language: string;
    id: string;
    name: string;
    options: any[];
    path: any[];
    phone_number?: string;
    phone_number_type?: string;
    responder_caller_id: string;
    updated_at: string;
    use_caller_allowlist: boolean;
}
export interface CallRouteLoadMatch {
    id: string;
}
export interface CallRouteListMatch {
    after?: string;
    page_size?: number;
}
export interface CallRouteUpdateData {
    id: string;
    custom_language?: string;
    name?: string;
    path?: any[];
    responder_caller_id?: string;
    use_caller_allowlist?: boolean;
}
export interface CallRouteAllowedCaller {
    id: string;
    name?: string;
    phone_number: string;
}
export interface CallRouteAllowedCallerLoadMatch {
    call_route_id: string;
    id: string;
}
export interface CallRouteAllowedCallerListMatch {
    id: string;
}
export interface CallRouteAllowedCallerCreateData {
    id: string;
    name?: string;
    phone_number: string;
}
export interface CallRouteAllowedCallerUpdateData {
    call_route_id: string;
    id: string;
    name?: string;
    phone_number?: string;
}
export interface CallRouteAllowedCallerRemoveMatch {
    call_route_id: string;
    id: string;
}
export interface CallRouteOption {
    digit: string;
    id: string;
    path: any[];
    prompt: string;
}
export interface CallRouteOptionLoadMatch {
    call_route_id: string;
    id: string;
}
export interface CallRouteOptionListMatch {
    id: string;
}
export interface CallRouteOptionCreateData {
    id: string;
    digit: string;
    path: any[];
    prompt: string;
}
export interface CallRouteOptionUpdateData {
    call_route_id: string;
    id: string;
    digit?: string;
    path?: any[];
    prompt?: string;
}
export interface CallRouteOptionRemoveMatch {
    call_route_id: string;
    id: string;
}
export interface CallSession {
    ended_at?: string;
    id: string;
    incident_id: string;
    started_at: string;
}
export interface CallSessionListMatch {
    after?: string;
    incident_id: string;
    page_size?: number;
}
export interface CallTranscriptEntry {
    content: string;
    id: string;
    medium: string;
    participant_name: string;
    timestamp: string;
}
export interface CallTranscriptEntryListMatch {
    after?: string;
    call_session_id: string;
    page_size?: number;
}
export interface CatalogEntry {
    aliases?: any[];
    archived_at?: string;
    attribute_values: Record<string, any>;
    catalog_entry: Record<string, any>;
    catalog_type: Record<string, any>;
    catalog_type_id: string;
    created_at: string;
    external_id?: string;
    id: string;
    name: string;
    rank?: number;
    update_attributes?: any[];
    updated_at: string;
}
export interface CatalogEntryLoadMatch {
    id: string;
    expand?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CatalogEntryListMatch {
    after?: string;
    catalog_type_id: string;
    identifier?: string;
    page_size: number;
    $action?: string;
    [action: string]: any;
}
export interface CatalogEntryCreateData {
    aliases?: any[];
    attribute_values: Record<string, any>;
    catalog_type_id: string;
    external_id?: string;
    name: string;
    rank?: number;
    $action?: string;
    [action: string]: any;
}
export interface CatalogEntryUpdateData {
    id: string;
    aliases?: any[];
    attribute_values?: Record<string, any>;
    external_id?: string;
    name?: string;
    rank?: number;
    update_attributes?: any[];
    $action?: string;
    [action: string]: any;
}
export interface CatalogEntryRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CatalogResource {
    category: string;
    description: string;
    engine_resource_type: string;
    label: string;
    type: string;
    value_docstring: string;
}
export interface CatalogResourceListMatch {
    category?: string;
    description?: string;
    engine_resource_type?: string;
    label?: string;
    type?: string;
    value_docstring?: string;
    $action?: string;
    [action: string]: any;
}
export interface CatalogType {
    annotations: Record<string, any>;
    categories: any[];
    color: string;
    created_at: string;
    description: string;
    dynamic_resource_parameter?: string;
    engine_resource_type: string;
    estimated_count?: number;
    icon: string;
    id: string;
    is_editable: boolean;
    is_team_type?: boolean;
    last_synced_at?: string;
    name: string;
    owning_team_ids?: any[];
    ranked: boolean;
    registry_type?: string;
    required_integrations?: any[];
    schema: Record<string, any>;
    source_repo_url?: string;
    type_name: string;
    updated_at: string;
    use_name_as_identifier: boolean;
}
export interface CatalogTypeLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CatalogTypeListMatch {
    annotations?: Record<string, any>;
    categories?: any[];
    color?: string;
    created_at?: string;
    description?: string;
    dynamic_resource_parameter?: string;
    engine_resource_type?: string;
    estimated_count?: number;
    icon?: string;
    id?: string;
    is_editable?: boolean;
    is_team_type?: boolean;
    last_synced_at?: string;
    name?: string;
    owning_team_ids?: any[];
    ranked?: boolean;
    registry_type?: string;
    required_integrations?: any[];
    schema?: Record<string, any>;
    source_repo_url?: string;
    type_name?: string;
    updated_at?: string;
    use_name_as_identifier?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CatalogTypeCreateData {
    annotations?: Record<string, any>;
    categories?: any[];
    color?: string;
    description: string;
    icon?: string;
    name: string;
    owning_team_ids?: any[];
    ranked?: boolean;
    source_repo_url?: string;
    type_name?: string;
    use_name_as_identifier?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CatalogTypeUpdateData {
    id: string;
    annotations?: Record<string, any>;
    categories?: any[];
    color?: string;
    description?: string;
    icon?: string;
    name?: string;
    owning_team_ids?: any[];
    ranked?: boolean;
    source_repo_url?: string;
    use_name_as_identifier?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface CatalogTypeRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CatalogTypeSchema {
    annotations: Record<string, any>;
    attributes: any[];
    categories: any[];
    color: string;
    created_at: string;
    description: string;
    dynamic_resource_parameter?: string;
    engine_resource_type: string;
    estimated_count?: number;
    icon: string;
    id: string;
    is_editable: boolean;
    is_team_type?: boolean;
    last_synced_at?: string;
    name: string;
    owning_team_ids?: any[];
    ranked: boolean;
    registry_type?: string;
    required_integrations?: any[];
    schema: Record<string, any>;
    source_repo_url?: string;
    type_name: string;
    updated_at: string;
    use_name_as_identifier: boolean;
    version: number;
}
export interface CatalogTypeSchemaCreateData {
    catalog_type_id: string;
    attributes: any[];
    version: number;
    $action?: string;
    [action: string]: any;
}
export interface CustomField {
    catalog_type_id?: string;
    created_at: string;
    description: string;
    field_type: string;
    filter_by: Record<string, any>;
    fixed_filter: Record<string, any>;
    group_by_catalog_attribute_id?: string;
    helptext_catalog_attribute_id?: string;
    id: string;
    name: string;
    updated_at: string;
}
export interface CustomFieldLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldListMatch {
    catalog_type_id?: string;
    created_at?: string;
    description?: string;
    field_type?: string;
    filter_by?: Record<string, any>;
    fixed_filter?: Record<string, any>;
    group_by_catalog_attribute_id?: string;
    helptext_catalog_attribute_id?: string;
    id?: string;
    name?: string;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldCreateData {
    catalog_type_id?: string;
    description: string;
    field_type: string;
    filter_by: Record<string, any>;
    fixed_filter: Record<string, any>;
    group_by_catalog_attribute_id?: string;
    helptext_catalog_attribute_id?: string;
    name: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldUpdateData {
    id: string;
    description?: string;
    filter_by?: Record<string, any>;
    fixed_filter?: Record<string, any>;
    group_by_catalog_attribute_id?: string;
    helptext_catalog_attribute_id?: string;
    name?: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldOption {
    custom_field_id: string;
    id: string;
    sort_key: number;
    value: string;
}
export interface CustomFieldOptionLoadMatch {
    id: string;
}
export interface CustomFieldOptionListMatch {
    after?: string;
    custom_field_id: string;
    page_size?: number;
}
export interface CustomFieldOptionCreateData {
    custom_field_id: string;
    sort_key?: number;
    value: string;
}
export interface CustomFieldOptionUpdateData {
    id: string;
    sort_key?: number;
    value?: string;
}
export interface CustomFieldOptionRemoveMatch {
    id: string;
}
export interface Escalation {
    created_at: string;
    creator: Record<string, any>;
    description: string;
    escalation_path_id?: string;
    events: any[];
    id: string;
    idempotency_key: string;
    incident_id?: string;
    priority: Record<string, any>;
    related_alerts: any[];
    related_incidents: any[];
    status: string;
    title: string;
    updated_at: string;
    user_ids?: any[];
}
export interface EscalationLoadMatch {
    id: string;
}
export interface EscalationListMatch {
    after?: string;
    alert?: Record<string, any>;
    created_at?: Record<string, any>;
    escalation_path?: Record<string, any>;
    idempotency_key?: Record<string, any>;
    incident?: Record<string, any>;
    page_size?: number;
    status?: Record<string, any>;
    updated_at?: Record<string, any>;
}
export interface EscalationCreateData {
    description?: string;
    escalation_path_id?: string;
    idempotency_key: string;
    incident_id?: string;
    title: string;
    user_ids?: any[];
}
export interface EscalationPath {
    current_responders?: any[];
    id: string;
    kind: string;
    name: string;
    param_bindings?: Record<string, any>;
    path: any[];
    repeat_config: Record<string, any>;
    team_ids: any[];
    template_id?: string;
    working_hours?: any[];
}
export interface EscalationPathLoadMatch {
    id: string;
}
export interface EscalationPathListMatch {
    after?: string;
    page_size?: number;
}
export interface EscalationPathCreateData {
    kind?: string;
    name: string;
    param_bindings?: Record<string, any>;
    path: any[];
    repeat_config: Record<string, any>;
    team_ids?: any[];
    template_id?: string;
    working_hours?: any[];
}
export interface EscalationPathUpdateData {
    id: string;
    kind?: string;
    name?: string;
    param_bindings?: Record<string, any>;
    path?: any[];
    repeat_config?: Record<string, any>;
    team_ids?: any[];
    template_id?: string;
    working_hours?: any[];
}
export interface EscalationPathRemoveMatch {
    id: string;
}
export interface EscalationPathTemplate {
    description?: string;
    expressions: any[];
    has_historical_escalation_path_versions: boolean;
    id: string;
    name: string;
    params: any[];
    path: any[];
    repeat_config: Record<string, any>;
    working_hours?: any[];
}
export interface EscalationPathTemplateLoadMatch {
    id: string;
}
export interface EscalationPathTemplateListMatch {
    after?: string;
    page_size?: number;
    search?: string;
}
export interface EscalationPathTemplateCreateData {
    description?: string;
    expressions?: any[];
    name: string;
    params?: any[];
    path: any[];
    repeat_config: Record<string, any>;
    working_hours?: any[];
}
export interface EscalationPathTemplateUpdateData {
    id: string;
    description?: string;
    expressions?: any[];
    name?: string;
    params?: any[];
    path?: any[];
    repeat_config?: Record<string, any>;
    working_hours?: any[];
}
export interface EscalationPathTemplateRemoveMatch {
    id: string;
}
export interface EscalationsCheckEscalationPermissionsResultV2 {
    response_options: any[];
    user_ids: any[];
}
export interface EscalationsCheckEscalationPermissionsResultV2CreateData {
    escalation_id: string;
    user_ids: any[];
}
export interface EscalationsReassignEscalationResultV2 {
    description?: string;
    escalation_path_id?: string;
    resolve_original?: boolean;
    title?: string;
    user_ids?: any[];
}
export interface EscalationsReassignEscalationResultV2CreateData {
    escalation_id: string;
    description?: string;
    escalation_path_id?: string;
    resolve_original?: boolean;
    title?: string;
    user_ids?: any[];
}
export interface FollowUp {
    assignee: Record<string, any>;
    assignee_id?: string;
    assignee_team: Record<string, any>;
    assignee_team_id?: string;
    category: Record<string, any>;
    completed_at?: string;
    created_at: string;
    creator: Record<string, any>;
    description?: string;
    external_issue_reference: Record<string, any>;
    external_issue_reference_id?: string;
    follow_up_category_id?: string;
    follow_up_priority_option_id?: string;
    id: string;
    incident_id: string;
    labels: any[];
    priority: Record<string, any>;
    status: string;
    title: string;
    updated_at: string;
}
export interface FollowUpLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface FollowUpListMatch {
    after?: string;
    assignee_team_id?: string;
    created_at?: Record<string, any>;
    incident_id?: string;
    incident_mode?: string;
    page_size?: number;
    updated_at?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface FollowUpCreateData {
    assignee_id?: string;
    assignee_team_id?: string;
    description?: string;
    external_issue_reference_id?: string;
    follow_up_category_id?: string;
    follow_up_priority_option_id?: string;
    incident_id: string;
    labels?: any[];
    title: string;
    $action?: string;
    [action: string]: any;
}
export interface FollowUpUpdateData {
    id: string;
    assignee_id?: string;
    assignee_team_id?: string;
    description?: string;
    follow_up_category_id?: string;
    follow_up_priority_option_id?: string;
    labels?: any[];
    status?: string;
    title?: string;
    $action?: string;
    [action: string]: any;
}
export interface FollowUpRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface FollowUpsConnectExternalIssueResultV3 {
    assignee: Record<string, any>;
    assignee_team: Record<string, any>;
    category: Record<string, any>;
    completed_at?: string;
    created_at: string;
    creator: Record<string, any>;
    description?: string;
    external_issue_reference: Record<string, any>;
    id: string;
    incident_id: string;
    labels: any[];
    priority: Record<string, any>;
    provider: string;
    status: string;
    title: string;
    updated_at: string;
    url: string;
}
export interface FollowUpsConnectExternalIssueResultV3CreateData {
    follow_up_id: string;
    provider: string;
    url: string;
}
export interface FollowUpsCreateFromLinkResultV3 {
    incident_id: string;
    url: string;
}
export interface FollowUpsCreateFromLinkResultV3CreateData {
    incident_id: string;
    url: string;
}
export interface Identity {
    dashboard_url: string;
    name: string;
    roles: any[];
    team_roles: any[];
    teams: any[];
}
export interface IdentityLoadMatch {
    dashboard_url?: string;
    name?: string;
    roles?: any[];
    team_roles?: any[];
    teams?: any[];
}
export interface Incident {
    call_url?: string;
    created_at: string;
    creator: Record<string, any>;
    custom_field_entries: any[];
    debriefs?: any[];
    duration_metrics?: any[];
    external_issue_reference: Record<string, any>;
    has_debrief?: boolean;
    id: string;
    idempotency_key: string;
    incident_role_assignments: any[];
    incident_status: Record<string, any>;
    incident_status_id?: string;
    incident_timestamp_values?: any[];
    incident_type: Record<string, any>;
    incident_type_id?: string;
    last_activity_at: string;
    mode: string;
    ms_teams_channel_url?: string;
    name: string;
    permalink?: string;
    postmortem_document_ids?: any[];
    postmortem_document_url?: string;
    reference: string;
    retrospective_incident_options?: Record<string, any>;
    severity: Record<string, any>;
    severity_id?: string;
    slack_channel_id: string;
    slack_channel_name?: string;
    slack_channel_name_override?: string;
    slack_channel_url?: string;
    slack_team_id: string;
    summary?: string;
    team_ids: any[];
    updated_at: string;
    visibility: string;
    workload_minutes_late?: number;
    workload_minutes_sleeping?: number;
    workload_minutes_total?: number;
    workload_minutes_working?: number;
}
export interface IncidentLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentListMatch {
    after?: string;
    created_at?: Record<string, any>;
    custom_field?: Record<string, any>;
    filter_mode?: string;
    incident_role?: Record<string, any>;
    incident_type?: Record<string, any>;
    mode?: Record<string, any>;
    page_size?: number;
    severity?: Record<string, any>;
    sort_by?: string;
    status?: Record<string, any>;
    status_category?: Record<string, any>;
    updated_at?: Record<string, any>;
    $action?: string;
    [action: string]: any;
}
export interface IncidentCreateData {
    custom_field_entries?: any[];
    idempotency_key: string;
    incident_role_assignments?: any[];
    incident_status_id?: string;
    incident_timestamp_values?: any[];
    incident_type_id?: string;
    mode?: string;
    name?: string;
    retrospective_incident_options?: Record<string, any>;
    severity_id?: string;
    slack_channel_name_override?: string;
    slack_team_id?: string;
    summary?: string;
    visibility: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentActivityLogEntry {
    content?: Record<string, any>;
    created_at: string;
    id: string;
    incident_id: string;
    occurred_at: string;
    title: string;
    type: string;
}
export interface IncidentActivityLogEntryListMatch {
    after?: string;
    id?: any[];
    incident_id: string;
    page_size?: number;
}
export interface IncidentAttachment {
    id: string;
    incident_id: string;
    resource: Record<string, any>;
}
export interface IncidentAttachmentListMatch {
    external_id?: string;
    incident_id?: string;
    resource_type?: string;
}
export interface IncidentAttachmentCreateData {
    incident_id: string;
    resource: Record<string, any>;
}
export interface IncidentAttachmentRemoveMatch {
    id: string;
}
export interface IncidentForm {
    created_at: string;
    expressions: any[];
    form_type: string;
    id: string;
    incident_type_id?: string;
    lifecycle_elements?: any[];
    updated_at: string;
}
export interface IncidentFormLoadMatch {
    id: string;
}
export interface IncidentFormListMatch {
    after?: string;
    page_size?: number;
}
export interface IncidentFormCreateData {
    expressions: any[];
    form_type: string;
    incident_type_id?: string;
    lifecycle_elements?: any[];
}
export interface IncidentFormUpdateData {
    id: string;
    expressions?: any[];
    form_type?: string;
    incident_type_id?: string;
    lifecycle_elements?: any[];
}
export interface IncidentFormRemoveMatch {
    id: string;
}
export interface IncidentMembership {
    incident_id: string;
    user_id: string;
}
export interface IncidentMembershipCreateData {
    incident_id: string;
    user_id: string;
}
export interface IncidentParticipant {
    active: any[];
    passive: any[];
}
export interface IncidentParticipantLoadMatch {
    incident_id: string;
}
export interface IncidentParticipantWorkload {
    archived_at?: string;
    participant_type?: string;
    user: Record<string, any>;
    workload: Record<string, any>;
}
export interface IncidentParticipantWorkloadListMatch {
    incident_id: string;
}
export interface IncidentRelationship {
    id: string;
    incident: Record<string, any>;
}
export interface IncidentRelationshipListMatch {
    after?: string;
    incident_id: string;
    page_size?: number;
}
export interface IncidentRole {
    created_at: string;
    description: string;
    id: string;
    instructions: string;
    name: string;
    role_type: string;
    shortform: string;
    updated_at: string;
}
export interface IncidentRoleLoadMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentRoleListMatch {
    created_at?: string;
    description?: string;
    id?: string;
    instructions?: string;
    name?: string;
    role_type?: string;
    shortform?: string;
    updated_at?: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentRoleCreateData {
    description: string;
    instructions: string;
    name: string;
    shortform: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentRoleUpdateData {
    id: string;
    description?: string;
    instructions?: string;
    name?: string;
    shortform?: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentRoleRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface IncidentStatus {
    category: string;
    created_at: string;
    description: string;
    id: string;
    name: string;
    rank: number;
    updated_at: string;
}
export interface IncidentStatusLoadMatch {
    id: string;
}
export interface IncidentStatusListMatch {
    category?: string;
    created_at?: string;
    description?: string;
    id?: string;
    name?: string;
    rank?: number;
    updated_at?: string;
}
export interface IncidentStatusCreateData {
    category: string;
    description: string;
    name: string;
    rank?: number;
}
export interface IncidentStatusUpdateData {
    id: string;
    description?: string;
    name?: string;
    rank?: number;
}
export interface IncidentStatusRemoveMatch {
    id: string;
}
export interface IncidentTeamMembership {
    incident_id: string;
    team_id: string;
}
export interface IncidentTeamMembershipCreateData {
    incident_id: string;
    team_id: string;
}
export interface IncidentTeamMembershipsV1 {
    incident_id: string;
    team_id: string;
}
export interface IncidentTeamMembershipsV1CreateData {
    incident_id: string;
    team_id: string;
}
export interface IncidentTemplate {
    created_at: string;
    expressions?: any[];
    id: string;
    name: string;
    template: Record<string, any>;
    updated_at: string;
}
export interface IncidentTemplateLoadMatch {
    id: string;
}
export interface IncidentTemplateListMatch {
    after?: string;
    page_size?: number;
}
export interface IncidentTemplateCreateData {
    expressions?: any[];
    name: string;
    template: Record<string, any>;
}
export interface IncidentTemplateUpdateData {
    id: string;
    expressions?: any[];
    name?: string;
    template?: Record<string, any>;
}
export interface IncidentTemplateRemoveMatch {
    id: string;
}
export interface IncidentTemplatesValidateResultV1 {
    expressions?: any[];
    name: string;
    template: Record<string, any>;
    warnings: any[];
}
export interface IncidentTemplatesValidateResultV1CreateData {
    expressions?: any[];
    name: string;
    template: Record<string, any>;
}
export interface IncidentTimelineItem {
    activity_log_id?: string;
    created_at: string;
    creator: Record<string, any>;
    description?: string;
    id: string;
    idempotency_key: string;
    incident_id: string;
    timestamp: string;
    title: string;
    updated_at: string;
}
export interface IncidentTimelineItemListMatch {
    after?: string;
    incident_id: string;
    page_size?: number;
}
export interface IncidentTimelineItemCreateData {
    description?: string;
    idempotency_key: string;
    incident_id: string;
    timestamp: string;
    title: string;
}
export interface IncidentTimelineItemUpdateData {
    id: string;
    description?: string;
    timestamp?: string;
    title?: string;
}
export interface IncidentTimestamp {
    id: string;
    name: string;
    rank: number;
}
export interface IncidentTimestampLoadMatch {
    id: string;
}
export interface IncidentTimestampListMatch {
    id?: string;
    name?: string;
    rank?: number;
}
export interface IncidentType {
    create_in_triage: string;
    created_at: string;
    description: string;
    id: string;
    is_default: boolean;
    name: string;
    owning_team_ids?: any[];
    private_incidents_only: boolean;
    updated_at: string;
}
export interface IncidentTypeLoadMatch {
    id: string;
}
export interface IncidentTypeListMatch {
    create_in_triage?: string;
    created_at?: string;
    description?: string;
    id?: string;
    is_default?: boolean;
    name?: string;
    owning_team_ids?: any[];
    private_incidents_only?: boolean;
    updated_at?: string;
}
export interface IncidentUpdate {
    created_at: string;
    id: string;
    idempotency_key: string;
    incident_id: string;
    merged_into_incident_id?: string;
    message?: string;
    new_incident_status: Record<string, any>;
    new_severity: Record<string, any>;
    to_incident_status_id?: string;
    to_severity_id?: string;
    updater: Record<string, any>;
}
export interface IncidentUpdateListMatch {
    after?: string;
    incident_id?: string;
    page_size?: number;
}
export interface IncidentUpdateCreateData {
    idempotency_key: string;
    incident_id: string;
    message?: string;
    to_incident_status_id?: string;
    to_severity_id?: string;
}
export interface IpAllowlist {
    allowlist: any[];
    enabled: boolean;
    updated_at?: string;
    version: number;
}
export interface IpAllowlistLoadMatch {
    allowlist?: any[];
    enabled?: boolean;
    updated_at?: string;
    version?: number;
}
export interface IpAllowlistUpdateData {
    allowlist?: any[];
    enabled?: boolean;
    version?: number;
}
export interface IpRange {
    cidr: string;
    description: string;
}
export interface IpRangeListMatch {
    cidr?: string;
    description?: string;
}
export interface MaintenanceWindow {
    alert_condition_groups: any[];
    archived_at?: string;
    created_at: string;
    end_at: string;
    escalation_targets?: any[];
    id: string;
    incident_id?: string;
    lead: Record<string, any>;
    name: string;
    notification_message?: string;
    notify_channels?: any[];
    notify_end_minutes_before?: number;
    notify_start_minutes_before?: number;
    owning_team_ids?: any[];
    reroute_on_end: boolean;
    resolve_on_end: boolean;
    show_in_sidebar: boolean;
    start_at: string;
    updated_at: string;
}
export interface MaintenanceWindowLoadMatch {
    id: string;
}
export interface MaintenanceWindowListMatch {
    after?: string;
    page_size?: number;
    status?: string;
}
export interface MaintenanceWindowCreateData {
    alert_condition_groups: any[];
    end_at: string;
    escalation_targets?: any[];
    incident_id?: string;
    lead: Record<string, any>;
    name: string;
    notification_message?: string;
    notify_channels?: any[];
    notify_end_minutes_before?: number;
    notify_start_minutes_before?: number;
    owning_team_ids?: any[];
    reroute_on_end?: boolean;
    resolve_on_end?: boolean;
    show_in_sidebar: boolean;
    start_at: string;
}
export interface MaintenanceWindowUpdateData {
    id: string;
    alert_condition_groups?: any[];
    end_at?: string;
    escalation_targets?: any[];
    incident_id?: string;
    lead?: Record<string, any>;
    name?: string;
    notification_message?: string;
    notify_channels?: any[];
    notify_end_minutes_before?: number;
    notify_start_minutes_before?: number;
    owning_team_ids?: any[];
    reroute_on_end?: boolean;
    resolve_on_end?: boolean;
    show_in_sidebar?: boolean;
    start_at?: string;
}
export interface MaintenanceWindowRemoveMatch {
    id: string;
    force?: boolean;
}
export interface ManagedResource {
    annotations: Record<string, any>;
    managed_by: string;
    resource_id: string;
    resource_type: string;
    source_url?: string;
}
export interface ManagedResourceCreateData {
    annotations: Record<string, any>;
    resource_id: string;
    resource_type: string;
}
export interface OnCallNotificationMethodPublicV2 {
    address: string;
    id: string;
    is_usable: boolean;
    method_type: string;
    phone_details: Record<string, any>;
}
export interface OnCallNotificationMethodPublicV2ListMatch {
    user_id: string;
}
export interface OnCallNotificationPause {
    created_at: string;
    ends_at: string;
    id: string;
    reason?: string;
    starts_at: string;
    updated_at: string;
    user_id: string;
}
export interface OnCallNotificationPauseLoadMatch {
    id: string;
}
export interface OnCallNotificationPauseListMatch {
    after?: string;
    from?: string;
    page_size?: number;
    to?: string;
}
export interface OnCallNotificationRulePublicV2 {
    app: Record<string, any>;
    delay_seconds?: number;
    id: string;
    method_target: Record<string, any>;
    method_type: string;
    phone: Record<string, any>;
    rule_type: string;
}
export interface OnCallNotificationRulePublicV2ListMatch {
    user_id: string;
}
export interface PayConfig {
    base_rate_cents: number;
    created_at: string;
    currency: string;
    id: string;
    name: string;
    one_off_rules: any[];
    published_at?: string;
    rate_time_unit: string;
    timezone: string;
    updated_at: string;
    weekly_rules: any[];
}
export interface PayConfigLoadMatch {
    id: string;
}
export interface PayConfigListMatch {
    after?: string;
    page_size?: number;
}
export interface PayConfigCreateData {
    base_rate_cents: number;
    currency: string;
    name: string;
    one_off_rules?: any[];
    rate_time_unit: string;
    timezone: string;
    weekly_rules?: any[];
}
export interface PayConfigUpdateData {
    id: string;
    base_rate_cents?: number;
    currency?: string;
    name?: string;
    rate_time_unit?: string;
    timezone?: string;
}
export interface PayConfigRemoveMatch {
    id: string;
}
export interface PayConfigOneOffRule {
    end_at: string;
    id: string;
    name: string;
    rate_cents: number;
    start_at: string;
}
export interface PayConfigOneOffRuleLoadMatch {
    id: string;
    pay_config_id: string;
}
export interface PayConfigOneOffRuleListMatch {
    id: string;
}
export interface PayConfigOneOffRuleCreateData {
    id: string;
    end_at: string;
    name: string;
    rate_cents: number;
    start_at: string;
}
export interface PayConfigOneOffRuleUpdateData {
    id: string;
    pay_config_id: string;
    end_at?: string;
    name?: string;
    rate_cents?: number;
    start_at?: string;
}
export interface PayConfigOneOffRuleRemoveMatch {
    id: string;
    pay_config_id: string;
}
export interface PayConfigWeeklyRule {
    end_time: string;
    id: string;
    rate_cents: number;
    start_time: string;
    weekdays: any[];
}
export interface PayConfigWeeklyRuleLoadMatch {
    id: string;
    pay_config_id: string;
}
export interface PayConfigWeeklyRuleListMatch {
    id: string;
}
export interface PayConfigWeeklyRuleCreateData {
    id: string;
    end_time: string;
    rate_cents: number;
    start_time: string;
    weekdays: any[];
}
export interface PayConfigWeeklyRuleUpdateData {
    id: string;
    pay_config_id: string;
    end_time?: string;
    rate_cents?: number;
    start_time?: string;
    weekdays?: any[];
}
export interface PayConfigWeeklyRuleRemoveMatch {
    id: string;
    pay_config_id: string;
}
export interface PayReport {
    created_at: string;
    creator?: Record<string, any>;
    end_date: string;
    error_code?: string;
    error_message?: string;
    id: string;
    name: string;
    overlapping_shifts: string;
    pay_config_expression: Record<string, any>;
    pay_config_id?: string;
    published_at?: string;
    rotation_filters?: any[];
    schedule_ids: any[];
    start_date: string;
    status: string;
    total_duration_seconds?: number;
    total_pay_by_currency?: Record<string, any>;
    unpaid_shifts: string;
    updated_at: string;
}
export interface PayReportLoadMatch {
    id: string;
}
export interface PayReportListMatch {
    after?: string;
    page_size?: number;
}
export interface PayReportCreateData {
    end_date: string;
    name: string;
    overlapping_shifts?: string;
    pay_config_expression: Record<string, any>;
    pay_config_id?: string;
    rotation_filters?: any[];
    schedule_ids: any[];
    start_date: string;
    unpaid_shifts?: string;
}
export interface PayReportRemoveMatch {
    id: string;
}
export interface PayReportsPublishResultV2 {
    cc_emails: any[];
    created_at: string;
    creator?: Record<string, any>;
    end_date: string;
    error_code?: string;
    error_message?: string;
    id: string;
    name: string;
    overlapping_shifts: string;
    published_at?: string;
    schedule_ids: any[];
    send_user_breakdowns: string;
    start_date: string;
    status: string;
    total_duration_seconds?: number;
    total_pay_by_currency?: Record<string, any>;
    unpaid_shifts: string;
    updated_at: string;
}
export interface PayReportsPublishResultV2CreateData {
    pay_report_id: string;
    cc_emails: any[];
    send_user_breakdowns: string;
}
export interface PayReportsUnpublishResultV2 {
    created_at: string;
    creator?: Record<string, any>;
    end_date: string;
    error_code?: string;
    error_message?: string;
    id: string;
    name: string;
    overlapping_shifts: string;
    published_at?: string;
    schedule_ids: any[];
    start_date: string;
    status: string;
    total_duration_seconds?: number;
    total_pay_by_currency?: Record<string, any>;
    unpaid_shifts: string;
    unpublish_reason: string;
    updated_at: string;
}
export interface PayReportsUnpublishResultV2CreateData {
    pay_report_id: string;
    unpublish_reason: string;
}
export interface PayReportsV2 {
}
export interface PayReportsV2LoadMatch {
    pay_report_id: string;
}
export interface Policy {
    assignment_rules: Record<string, any>;
    conditions: any[];
    created_at: string;
    debrief: Record<string, any>;
    description?: string;
    expressions?: any[];
    follow_up: Record<string, any>;
    id: string;
    name: string;
    on_call_readiness?: Record<string, any>;
    policy_type: string;
    post_mortem: Record<string, any>;
    schedule: Record<string, any>;
    status: string;
    updated_at: string;
}
export interface PolicyLoadMatch {
    id: string;
}
export interface PolicyListMatch {
    after?: string;
    page_size?: number;
    policy_type?: string;
}
export interface PolicyCreateData {
    assignment_rules: Record<string, any>;
    conditions: any[];
    debrief: Record<string, any>;
    description: string;
    expressions?: any[];
    follow_up: Record<string, any>;
    name: string;
    on_call_readiness?: Record<string, any>;
    policy_type: string;
    post_mortem: Record<string, any>;
    schedule: Record<string, any>;
    status?: string;
}
export interface PolicyUpdateData {
    id: string;
    assignment_rules?: Record<string, any>;
    conditions?: any[];
    debrief?: Record<string, any>;
    description?: string;
    expressions?: any[];
    follow_up?: Record<string, any>;
    name?: string;
    on_call_readiness?: Record<string, any>;
    policy_type?: string;
    post_mortem?: Record<string, any>;
    schedule?: Record<string, any>;
    status?: string;
}
export interface PolicyRemoveMatch {
    id: string;
}
export interface PolicyFinding {
    created_at: string;
    days?: number;
    debrief: Record<string, any>;
    dismissal: Record<string, any>;
    due_at?: string;
    follow_up: Record<string, any>;
    id: string;
    last_checked_at: string;
    on_call_readiness: Record<string, any>;
    policy_id: string;
    policy_type: string;
    post_mortem: Record<string, any>;
    responsible_users: any[];
    schedule: Record<string, any>;
    shift_conflict: Record<string, any>;
    state: string;
    updated_at: string;
    vacation_conflict: Record<string, any>;
}
export interface PolicyFindingLoadMatch {
    id: string;
}
export interface PolicyFindingListMatch {
    after?: string;
    page_size?: number;
    policy_id?: string;
}
export interface PolicyFindingsDismissResultV2 {
    created_at: string;
    days?: number;
    debrief: Record<string, any>;
    dismissal: Record<string, any>;
    due_at?: string;
    follow_up: Record<string, any>;
    id: string;
    last_checked_at: string;
    on_call_readiness: Record<string, any>;
    policy_id: string;
    policy_type: string;
    post_mortem: Record<string, any>;
    reason: string;
    responsible_users: any[];
    schedule: Record<string, any>;
    shift_conflict: Record<string, any>;
    state: string;
    updated_at: string;
    vacation_conflict: Record<string, any>;
}
export interface PolicyFindingsDismissResultV2CreateData {
    policy_finding_id: string;
    reason: string;
}
export interface PolicyFindingsRestoreResultV2 {
    created_at: string;
    days?: number;
    debrief: Record<string, any>;
    dismissal: Record<string, any>;
    due_at?: string;
    follow_up: Record<string, any>;
    id: string;
    last_checked_at: string;
    on_call_readiness: Record<string, any>;
    policy_id: string;
    policy_type: string;
    post_mortem: Record<string, any>;
    responsible_users: any[];
    schedule: Record<string, any>;
    shift_conflict: Record<string, any>;
    state: string;
    updated_at: string;
    vacation_conflict: Record<string, any>;
}
export interface PolicyFindingsRestoreResultV2CreateData {
    policy_finding_id: string;
    created_at: string;
    days?: number;
    debrief: Record<string, any>;
    dismissal: Record<string, any>;
    due_at?: string;
    follow_up: Record<string, any>;
    id: string;
    last_checked_at: string;
    on_call_readiness: Record<string, any>;
    policy_id: string;
    policy_type: string;
    post_mortem: Record<string, any>;
    responsible_users: any[];
    schedule: Record<string, any>;
    shift_conflict: Record<string, any>;
    state: string;
    updated_at: string;
    vacation_conflict: Record<string, any>;
}
export interface PostmortemDocument {
    created_at: string;
    document_url: string;
    editors: any[];
    exported_urls: any[];
    id: string;
    incident_id: string;
    status: string;
    title: string;
    type: string;
    updated_at: string;
}
export interface PostmortemDocumentLoadMatch {
    id: string;
}
export interface PostmortemDocumentListMatch {
    after?: string;
    incident_id?: string;
    page_size?: number;
    sort_by?: string;
}
export interface PostmortemDocumentUpdateData {
    id: string;
    status?: string;
}
export interface Schedule {
    annotations: Record<string, any>;
    config: Record<string, any>;
    created_at: string;
    current_shifts?: any[];
    holidays_public_config: Record<string, any>;
    id: string;
    name: string;
    next_shifts?: any[];
    permalink: string;
    team_ids: any[];
    timezone: string;
    updated_at: string;
}
export interface ScheduleLoadMatch {
    id: string;
}
export interface ScheduleListMatch {
    after?: string;
    page_size?: number;
}
export interface ScheduleCreateData {
    annotations?: Record<string, any>;
    config?: Record<string, any>;
    holidays_public_config: Record<string, any>;
    name?: string;
    team_ids?: any[];
    timezone?: string;
}
export interface ScheduleUpdateData {
    id: string;
    annotations?: Record<string, any>;
    config?: Record<string, any>;
    holidays_public_config?: Record<string, any>;
    name?: string;
    team_ids?: any[];
    timezone?: string;
}
export interface ScheduleRemoveMatch {
    id: string;
}
export interface ScheduleEntriesListPayloadV2 {
    entry_window_end?: string;
    entry_window_start?: string;
    final: any[];
    overrides: any[];
    schedule: Record<string, any>;
    scheduled: any[];
}
export interface ScheduleEntriesListPayloadV2CreateData {
    schedule_id: string;
    entry_window_end?: string;
    entry_window_start?: string;
    schedule: Record<string, any>;
}
export interface ScheduleEntry {
    pagination_meta: Record<string, any>;
    schedule_entries: Record<string, any>;
}
export interface ScheduleEntryLoadMatch {
    entry_window_end?: string;
    entry_window_start?: string;
    schedule_id: string;
}
export interface ScheduleOverride {
    created_at: string;
    end_at: string;
    id: string;
    layer_id: string;
    rotation_id: string;
    schedule_id: string;
    start_at: string;
    updated_at: string;
    user: Record<string, any>;
}
export interface ScheduleOverrideLoadMatch {
    id: string;
}
export interface ScheduleOverrideListMatch {
    after?: string;
    layer_id?: string;
    page_size?: number;
    rotation_id?: string;
    schedule_id: string;
}
export interface ScheduleOverrideCreateData {
    end_at: string;
    layer_id: string;
    rotation_id: string;
    schedule_id: string;
    start_at: string;
    user: Record<string, any>;
}
export interface ScheduleOverrideUpdateData {
    id: string;
    end_at?: string;
    layer_id?: string;
    rotation_id?: string;
    start_at?: string;
    user?: Record<string, any>;
}
export interface ScheduleOverrideRemoveMatch {
    id: string;
}
export interface ScheduleReplica {
    created_at: string;
    id: string;
    last_sync_error?: string;
    last_synced_at?: string;
    mirror_window_days?: number;
    replica_fallback_user_id: string;
    replica_provider: string;
    replica_provider_id: string;
    schedule_id: string;
    sources: any[];
    updated_at: string;
    user_statuses: any[];
}
export interface ScheduleReplicaLoadMatch {
    id: string;
    schedule_id: string;
}
export interface ScheduleReplicaListMatch {
    id: string;
}
export interface ScheduleReplicaCreateData {
    id: string;
    mirror_window_days?: number;
    replica_fallback_user_id: string;
    replica_provider: string;
    replica_provider_id: string;
    sources: any[];
}
export interface ScheduleReplicaRemoveMatch {
    id: string;
    schedule_id: string;
}
export interface ScheduleSyncRule {
    annotations?: Record<string, any>;
    created_at: string;
    id: string;
    permanent_member_user_ids: any[];
    rotation_id?: string;
    schedule_id: string;
    schedule_sync_target: Record<string, any>;
    schedule_sync_target_id: string;
    sync_type: string;
    updated_at: string;
}
export interface ScheduleSyncRuleLoadMatch {
    id: string;
    schedule_id: string;
}
export interface ScheduleSyncRuleListMatch {
    id: string;
    after?: string;
    page_size?: number;
}
export interface ScheduleSyncRuleCreateData {
    id: string;
    annotations?: Record<string, any>;
    permanent_member_user_ids?: any[];
    rotation_id?: string;
    schedule_sync_target_id: string;
    sync_type: string;
}
export interface ScheduleSyncRuleUpdateData {
    id: string;
    schedule_id: string;
    annotations?: Record<string, any>;
    permanent_member_user_ids?: any[];
    sync_type?: string;
}
export interface ScheduleSyncRuleRemoveMatch {
    id: string;
    schedule_id: string;
}
export interface ScheduleSyncTarget {
    add_bot_to_group: boolean;
    annotations?: Record<string, any>;
    created_at: string;
    id: string;
    linked_schedules: any[];
    new_slack_user_group: Record<string, any>;
    slack_team_id: string;
    slack_user_group_id: string;
    updated_at: string;
}
export interface ScheduleSyncTargetLoadMatch {
    id: string;
}
export interface ScheduleSyncTargetListMatch {
    after?: string;
    page_size?: number;
}
export interface ScheduleSyncTargetCreateData {
    add_bot_to_group: boolean;
    annotations?: Record<string, any>;
    new_slack_user_group: Record<string, any>;
    slack_user_group_id?: string;
}
export interface ScheduleSyncTargetUpdateData {
    id: string;
    add_bot_to_group?: boolean;
    annotations?: Record<string, any>;
}
export interface ScheduleSyncTargetRemoveMatch {
    id: string;
}
export interface Secret {
    created_at: string;
    description?: string;
    id: string;
    last_four_chars?: string;
    name: string;
    owning_team_ids?: any[];
    secret: Record<string, any>;
    updated_at: string;
    value: string;
    version: number;
    versions: any[];
}
export interface SecretLoadMatch {
    id: string;
}
export interface SecretListMatch {
    after?: string;
    page_size?: number;
    team_id?: any[];
}
export interface SecretCreateData {
    description?: string;
    name: string;
    owning_team_ids?: any[];
    value: string;
    $action?: string;
    [action: string]: any;
}
export interface SecretUpdateData {
    id: string;
    description?: string;
    name?: string;
    owning_team_ids?: any[];
}
export interface SecretRemoveMatch {
    id: string;
}
export interface Severity {
    created_at: string;
    description: string;
    id: string;
    name: string;
    rank: number;
    updated_at: string;
}
export interface SeverityLoadMatch {
    id: string;
}
export interface SeverityListMatch {
    created_at?: string;
    description?: string;
    id?: string;
    name?: string;
    rank?: number;
    updated_at?: string;
}
export interface SeverityCreateData {
    description: string;
    name: string;
    rank?: number;
}
export interface SeverityUpdateData {
    id: string;
    description?: string;
    name?: string;
    rank?: number;
}
export interface SeverityRemoveMatch {
    id: string;
}
export interface StatusPage {
    description?: string;
    id: string;
    name: string;
    public_url?: string;
}
export interface StatusPageLoadMatch {
    id: string;
}
export interface StatusPageListMatch {
    after?: string;
    page_size?: number;
}
export interface StatusPageComponent {
    description?: string;
    id: string;
    management_meta: Record<string, any>;
    name: string;
}
export interface StatusPageComponentLoadMatch {
    id: string;
}
export interface StatusPageComponentListMatch {
    description?: string;
    id?: string;
    management_meta?: Record<string, any>;
    name?: string;
}
export interface StatusPageComponentCreateData {
    description?: string;
    name: string;
}
export interface StatusPageComponentUpdateData {
    id: string;
    description?: string;
    name?: string;
}
export interface StatusPageComponentRemoveMatch {
    id: string;
}
export interface StatusPageComponentAvailability {
    availability_percent?: string;
    component_id: string;
    data_available_since: string;
    end_at: string;
    start_at: string;
    status_page_id: string;
}
export interface StatusPageComponentAvailabilityLoadMatch {
    component_id: string;
    status_page_id: string;
    end_at: string;
    start_at: string;
}
export interface StatusPageIncident {
    component_impacts: any[];
    component_statuses?: any[];
    id: string;
    idempotency_key: string;
    incident_status: string;
    message: string;
    name: string;
    notify_subscribers: boolean;
    published_at: string;
    status_page_id: string;
    updates: any[];
}
export interface StatusPageIncidentLoadMatch {
    id: string;
}
export interface StatusPageIncidentListMatch {
    after?: string;
    component_id?: string;
    end_at?: string;
    group_id?: string;
    page_size?: number;
    start_at?: string;
    status_page_id: string;
    sub_page_id?: string;
}
export interface StatusPageIncidentCreateData {
    component_statuses?: any[];
    idempotency_key: string;
    incident_status: string;
    message: string;
    name: string;
    notify_subscribers: boolean;
    status_page_id: string;
}
export interface StatusPageIncidentUpdateData {
    id: string;
    name?: string;
}
export interface StatusPageIncidentUpdate {
    component_statuses?: any[];
    incident_status?: string;
    message: string;
    notify_subscribers: boolean;
    status_page_incident_id: string;
}
export interface StatusPageIncidentUpdateCreateData {
    component_statuses?: any[];
    incident_status?: string;
    message: string;
    notify_subscribers: boolean;
    status_page_incident_id: string;
}
export interface StatusPageLinkedResponseIncident {
    id: string;
    linked_at: string;
}
export interface StatusPageLinkedResponseIncidentListMatch {
    incident_id: string;
    status_page_id: string;
}
export interface StatusPageMaintenance {
    affected_component_ids: any[];
    automate_maintenance_status: boolean;
    component_maintenance_periods: any[];
    end_at: string;
    id: string;
    idempotency_key: string;
    maintenance_status: string;
    message: string;
    name: string;
    notify_subscribers: boolean;
    published_at: string;
    start_at: string;
    status_page_id: string;
    updates: any[];
}
export interface StatusPageMaintenanceLoadMatch {
    id: string;
}
export interface StatusPageMaintenanceListMatch {
    after?: string;
    component_id?: string;
    end_at?: string;
    group_id?: string;
    page_size?: number;
    start_at?: string;
    status_page_id: string;
    sub_page_id?: string;
}
export interface StatusPageMaintenanceCreateData {
    affected_component_ids: any[];
    automate_maintenance_status?: boolean;
    end_at: string;
    idempotency_key: string;
    maintenance_status: string;
    message: string;
    name: string;
    notify_subscribers: boolean;
    start_at: string;
    status_page_id: string;
}
export interface StatusPageMaintenanceUpdateData {
    id: string;
    end_at?: string;
    name?: string;
    start_at?: string;
}
export interface StatusPageMaintenanceRemoveMatch {
    id: string;
}
export interface StatusPageMaintenanceUpdate {
    component_statuses?: any[];
    maintenance_status?: string;
    message: string;
    notify_subscribers: boolean;
    status_page_maintenance_id: string;
}
export interface StatusPageMaintenanceUpdateCreateData {
    component_statuses?: any[];
    maintenance_status?: string;
    message: string;
    notify_subscribers: boolean;
    status_page_maintenance_id: string;
}
export interface StatusPageStructure {
    current_structure: Record<string, any>;
    display_uptime_mode: string;
    id?: string;
    management_meta: Record<string, any>;
}
export interface StatusPageStructureLoadMatch {
    id: string;
}
export interface Team {
    catalog_entry: Record<string, any>;
    id: string;
    members: any[];
    name: string;
}
export interface TeamLoadMatch {
    id: string;
}
export interface TeamListMatch {
    after?: string;
    page_size?: number;
}
export interface TelemetryDataSource {
    created_at: string;
    datadog_config?: Record<string, any>;
    enabled: boolean;
    grafana_config?: Record<string, any>;
    id: string;
    name: string;
    provider: string;
    source_type: string;
    updated_at: string;
    version?: string;
}
export interface TelemetryDataSourceUpdateData {
    id: string;
    datadog_config?: Record<string, any>;
    grafana_config?: Record<string, any>;
    name?: string;
}
export interface User {
    base_role: Record<string, any>;
    custom_roles: any[];
    email?: string;
    id: string;
    is_active: boolean;
    name: string;
    role: string;
    seats: Record<string, any>;
    slack_user_id?: string;
}
export interface UserLoadMatch {
    id: string;
}
export interface UserListMatch {
    after?: string;
    email?: string;
    include_inactive?: boolean;
    page_size?: number;
    slack_user_id?: string;
}
export interface Workflow {
    annotations?: Record<string, any>;
    auto_run_mode?: string;
    condition_groups: any[];
    continue_on_step_error: boolean;
    delay: Record<string, any>;
    expressions: any[];
    folder?: string;
    form_fields?: any[];
    id: string;
    include_private_escalations?: boolean;
    include_private_incidents?: boolean;
    management_meta: Record<string, any>;
    name: string;
    once_for: any[];
    owning_team_ids?: any[];
    private_incident_scope?: string;
    runs_from?: string;
    runs_on_incident_modes: any[];
    runs_on_incidents: string;
    shortform?: string;
    skip_step_upgrades?: boolean;
    state?: string;
    steps: any[];
    trigger: string;
    version: number;
    workflow: Record<string, any>;
}
export interface WorkflowLoadMatch {
    id: string;
    skip_step_upgrade?: boolean;
}
export interface WorkflowListMatch {
    annotations?: Record<string, any>;
    auto_run_mode?: string;
    condition_groups?: any[];
    continue_on_step_error?: boolean;
    delay?: Record<string, any>;
    expressions?: any[];
    folder?: string;
    form_fields?: any[];
    id?: string;
    include_private_escalations?: boolean;
    include_private_incidents?: boolean;
    management_meta?: Record<string, any>;
    name?: string;
    once_for?: any[];
    owning_team_ids?: any[];
    private_incident_scope?: string;
    runs_from?: string;
    runs_on_incident_modes?: any[];
    runs_on_incidents?: string;
    shortform?: string;
    skip_step_upgrades?: boolean;
    state?: string;
    steps?: any[];
    trigger?: string;
    version?: number;
    workflow?: Record<string, any>;
}
export interface WorkflowCreateData {
    annotations?: Record<string, any>;
    auto_run_mode?: string;
    condition_groups: any[];
    continue_on_step_error: boolean;
    delay: Record<string, any>;
    expressions: any[];
    folder?: string;
    form_fields?: any[];
    include_private_escalations?: boolean;
    include_private_incidents?: boolean;
    name: string;
    once_for: any[];
    owning_team_ids?: any[];
    private_incident_scope?: string;
    runs_on_incident_modes: any[];
    runs_on_incidents: string;
    shortform?: string;
    state?: string;
    steps: any[];
    trigger: string;
}
export interface WorkflowUpdateData {
    id: string;
    annotations?: Record<string, any>;
    auto_run_mode?: string;
    condition_groups?: any[];
    continue_on_step_error?: boolean;
    delay?: Record<string, any>;
    expressions?: any[];
    folder?: string;
    form_fields?: any[];
    include_private_escalations?: boolean;
    include_private_incidents?: boolean;
    name?: string;
    once_for?: any[];
    owning_team_ids?: any[];
    private_incident_scope?: string;
    runs_on_incident_modes?: any[];
    runs_on_incidents?: string;
    shortform?: string;
    skip_step_upgrades?: boolean;
    state?: string;
    steps?: any[];
}
export interface WorkflowRemoveMatch {
    id: string;
}
export interface WorkflowRun {
    cancelled_at?: string;
    created_at: string;
    enqueued_at?: string;
    error?: string;
    id: string;
    incident_id?: string;
    incident_reference?: string;
    progress: any[];
    scheduled_at: string;
    updated_at: string;
    workflow_id: string;
    workflow_name?: string;
    workflow_version_id: string;
    workflow_version_number: number;
}
export interface WorkflowRunLoadMatch {
    id: string;
}
export interface WorkflowRunListMatch {
    after?: string;
    created_at?: Record<string, any>;
    incident_id?: string;
    page_size?: number;
    workflow_id?: string;
}

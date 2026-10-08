"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ApiKeyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.ApiKey();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('api_key hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).ApiKey().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).ApiKey()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.ApiKey().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().ApiKey().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.ApiKey().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.ApiKey().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ApiKey().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_key.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "comments": { "a": true, "h": "Comments", "n": "comments", "r": false, "sh": "Freeform notes about this API key", "t": "`$STRING`", "key$": "comments", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When the API key was created", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": true, "t": "`$OBJECT`", "key$": "creator", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this API key", "t": "`$STRING`", "key$": "id", "index$": 3 }, "last_used_at": { "a": true, "fo": "date-time", "h": "Last Used At", "n": "last_used_at", "r": false, "sh": "When the key was last used to authenticate a request", "t": "`$STRING`", "key$": "last_used_at", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the API key, for the user's reference", "t": "`$STRING`", "key$": "name", "index$": 5 }, "role_names": { "a": true, "h": "Role Names", "n": "role_names", "r": true, "sh": "Account-level roles to assign to the API key.", "t": "`$ARRAY`", "key$": "role_names", "index$": 6 }, "roles": { "a": true, "h": "Roles", "n": "roles", "r": true, "sh": "The account-level roles assigned to this API key", "t": "`$ARRAY`", "key$": "roles", "index$": 7 }, "team_ids": { "a": true, "h": "Team Ids", "n": "team_ids", "r": true, "sh": "IDs of teams that this API key is scoped to", "t": "`$ARRAY`", "key$": "team_ids", "index$": 8 }, "team_role_names": { "a": true, "h": "Team Role Names", "n": "team_role_names", "r": true, "sh": "Roles to grant for the teams specified in `team_ids`.", "t": "`$ARRAY`", "key$": "team_role_names", "index$": 9 }, "team_roles": { "a": true, "h": "Team Roles", "n": "team_roles", "r": true, "sh": "The team-level roles assigned to this API key", "t": "`$ARRAY`", "key$": "team_roles", "index$": 10 }, "token_last_issued_at": { "a": true, "fo": "date-time", "h": "Token Last Issued At", "n": "token_last_issued_at", "r": true, "sh": "When the current token for this API was last issued.", "t": "`$STRING`", "key$": "token_last_issued_at", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "api_key", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["grace_period_minutes"], "co": { "id": "POST /v1/api_keys/{id}/actions/rotate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v1/api_keys/{id}/actions/rotate", "q": { "$action": "action_rotate", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "api_keys" }, { "var": "id" }, { "lit": "actions" }, { "lit": "rotate" }], "t": { "req": "`reqdata`", "res": "`body.api_key`" }, "index$": 0 }, { "a": true, "bf": ["comments", "name", "role_names", "team_ids", "team_role_names"], "co": { "id": "POST /v1/api_keys", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/api_keys", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "api_keys" }], "t": { "req": "`reqdata`", "res": "`body.api_key`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/api_keys", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/api_keys", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "api_keys" }], "t": { "req": "`reqdata`", "res": "`body.api_keys`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/api_keys/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/api_keys/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "api_keys" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.api_key`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/api_keys/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/api_keys/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "api_keys" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["comments", "name", "role_names", "team_ids", "team_role_names"], "co": { "id": "PUT /v1/api_keys/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v1/api_keys/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "api_keys" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.api_key`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "api_key", "name__orig": "api_key", "Name": "ApiKey", "name_": "api_key", "name-": "api-key", "NAME": "API_KEY", "index$": 14 }, { "active": true, "entity": "api_key", "key$": "BasicApiKeyFlow", "kind": "basic", "name": "BasicApiKeyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_key_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_key_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_key_ref01", "srcdatavar": "api_key_ref01_data", "suffix": "_up0", "textfield": "comments" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_key_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_key_ref01", "srcdatavar": "api_key_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_key01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_key_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "api_key_ref01", "suffix": "_rm0" }, "m": { "id": "api_key01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "api_key_ref01" } }], "index$": 5 }] }, 'ApiKey', { "POST /v1/api_keys/{id}/actions/rotate": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "grace_period_minutes": 30 }, "schema": { "example": { "grace_period_minutes": 30 }, "properties": { "grace_period_minutes": { "default": 30, "description": "How many minutes to keep the old access token alive.", "example": 30, "format": "int64", "maximum": 60, "minimum": 0, "type": "integer" } }, "required": ["grace_period_minutes"], "type": "object", "x-ref": "#/components/schemas/APIKeysRotatePayloadV1" } } }, "required": true }, "parameters": [{ "description": "Unique identifier of the API key to rotate", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the API key to rotate", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "POST /v1/api_keys": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "comments": "Requested in https://example.slack.com/archives/C123/p456", "name": "My test API key", "role_names": ["viewer", "incident_creator"], "team_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "team_role_names": ["schedules_editor"] }, "schema": { "example": { "comments": "Requested in https://example.slack.com/archives/C123/p456", "name": "My test API key", "role_names": ["viewer", "incident_creator"], "team_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "team_role_names": ["schedules_editor"] }, "properties": { "comments": { "description": "Freeform notes about the API key", "example": "Requested in https://example.slack.com/archives/C123/p456", "maxLength": 5000, "pattern": "^[^\u0000]*$", "type": "string", "key$": "comments" }, "name": { "description": "Human-readable name for the new API key", "example": "My test API key", "maxLength": 200, "minLength": 1, "type": "string", "key$": "name" }, "role_names": { "description": "Account-level roles to assign to the API key. These roles apply across the entire account, not scoped to specific teams. Pass an empty array if no account-level roles are needed.", "example": ["viewer", "incident_creator"], "items": { "enum": ["viewer", "incident_creator", "incident_editor", "manage_settings", "global_access", "catalog_viewer", "catalog_editor", "incident_memberships_editor", "schedules_editor", "schedules_reader", "schedule_overrides_editor", "workflows_editor", "workflows_viewer", "private_workflows_editor", "private_escalation_workflows_editor", "on_call_editor", "on_call_viewer", "escalation_creator", "post_incident_flow_opt_out", "security_settings_editor", "investigation_download", "team_memberships_manage", "status_page_publisher", "status_page_viewer", "postmortems_manage", "api_keys_manage", "notification_methods_manage", "notification_methods_unredacted_viewer", "incident_workload_viewer", "incident_workload_private_viewer", "act_on_behalf_of_users", "secrets_manage", "secrets_use", "call_transcripts_viewer", "heartbeats_ping", "telemetry_query_restricted", "telemetry_data_source_update", "policies_viewer", "policy_findings_manage", "pay_reports_viewer", "pay_reports_editor", "pay_configs_viewer", "pay_configs_editor", "investigations_editor", "telemetry_viewer", "documents_viewer"], "example": "viewer", "type": "string" }, "type": "array", "key$": "role_names" }, "team_ids": { "description": "IDs of teams to scope the `team_role_names` to. If provided, `team_role_names` must also be a non-empty array, and vice versa. Pass an empty array if the key should not be scoped to any teams.", "example": ["01FCNDV6P870EA6S7TK1DSYDG0"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "team_ids" }, "team_role_names": { "description": "Roles to grant for the teams specified in `team_ids`. If provided, `team_ids` must also be a non-empty array, and vice versa. Pass an empty array if no team-level roles are needed.", "example": ["schedules_editor"], "items": { "enum": ["catalog_editor", "schedules_editor", "schedules_reader", "schedule_overrides_editor", "on_call_editor", "escalation_creator", "api_keys_manage", "workflows_editor", "private_workflows_editor", "secrets_manage", "secrets_use", "heartbeats_ping", "telemetry_query_restricted", "telemetry_data_source_update"], "example": "catalog_editor", "type": "string" }, "type": "array", "key$": "team_role_names" } }, "required": ["name", "role_names", "team_ids", "team_role_names"], "type": "object", "x-ref": "#/components/schemas/APIKeysCreatePayloadV1", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v1/api_keys": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "in": "query", "name": "after", "schema": { "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 1 }] }, "GET /v1/api_keys/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier of the API key to retrieve", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the API key to retrieve", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v1/api_keys/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier of the API key to delete", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the API key to delete", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v1/api_keys/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "comments": "Requested in https://example.slack.com/archives/C123/p456", "name": "My test API key", "role_names": ["viewer", "incident_creator"], "team_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "team_role_names": ["schedules_editor"] }, "schema": { "example": { "comments": "Requested in https://example.slack.com/archives/C123/p456", "name": "My test API key", "role_names": ["viewer", "incident_creator"], "team_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "team_role_names": ["schedules_editor"] }, "properties": { "comments": { "description": "Freeform notes about the API key", "example": "Requested in https://example.slack.com/archives/C123/p456", "maxLength": 5000, "pattern": "^[^\u0000]*$", "type": "string", "key$": "comments" }, "name": { "description": "Human-readable name for the API key", "example": "My test API key", "maxLength": 200, "minLength": 1, "type": "string", "key$": "name" }, "role_names": { "description": "Account-level roles for the API key. These roles apply across the entire account, not scoped to specific teams. Pass an empty array if no account-level roles are needed.", "example": ["viewer", "incident_creator"], "items": { "enum": ["viewer", "incident_creator", "incident_editor", "manage_settings", "global_access", "catalog_viewer", "catalog_editor", "incident_memberships_editor", "schedules_editor", "schedules_reader", "schedule_overrides_editor", "workflows_editor", "workflows_viewer", "private_workflows_editor", "private_escalation_workflows_editor", "on_call_editor", "on_call_viewer", "escalation_creator", "post_incident_flow_opt_out", "security_settings_editor", "investigation_download", "team_memberships_manage", "status_page_publisher", "status_page_viewer", "postmortems_manage", "api_keys_manage", "notification_methods_manage", "notification_methods_unredacted_viewer", "incident_workload_viewer", "incident_workload_private_viewer", "act_on_behalf_of_users", "secrets_manage", "secrets_use", "call_transcripts_viewer", "heartbeats_ping", "telemetry_query_restricted", "telemetry_data_source_update", "policies_viewer", "policy_findings_manage", "pay_reports_viewer", "pay_reports_editor", "pay_configs_viewer", "pay_configs_editor", "investigations_editor", "telemetry_viewer", "documents_viewer"], "example": "viewer", "type": "string" }, "type": "array", "key$": "role_names" }, "team_ids": { "description": "IDs of teams to scope the `team_role_names` to. If provided, `team_role_names` must also be a non-empty array, and vice versa. Pass an empty array if the key should not be scoped to any teams.", "example": ["01FCNDV6P870EA6S7TK1DSYDG0"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "team_ids" }, "team_role_names": { "description": "Roles to grant for the teams specified in `team_ids`. If provided, `team_ids` must also be a non-empty array, and vice versa. Pass an empty array if no team-level roles are needed.", "example": ["schedules_editor"], "items": { "enum": ["catalog_editor", "schedules_editor", "schedules_reader", "schedule_overrides_editor", "on_call_editor", "escalation_creator", "api_keys_manage", "workflows_editor", "private_workflows_editor", "secrets_manage", "secrets_use", "heartbeats_ping", "telemetry_query_restricted", "telemetry_data_source_update"], "example": "catalog_editor", "type": "string" }, "type": "array", "key$": "team_role_names" } }, "required": ["name", "role_names", "team_ids", "team_role_names"], "type": "object", "x-ref": "#/components/schemas/APIKeysUpdatePayloadV1", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier of the API key to update", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the API key to update", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_key_ref01_ent = client.ApiKey();
        let api_key_ref01_data = setup.data.new.api_key['api_key_ref01'];
        api_key_ref01_data = (await api_key_ref01_ent.create(api_key_ref01_data)).data();
        (0, node_assert_1.default)(null != api_key_ref01_data.id);
        // LIST
        const api_key_ref01_match = {};
        const api_key_ref01_list = (await api_key_ref01_ent.list(api_key_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })));
        // UPDATE
        const api_key_ref01_data_up0 = {};
        api_key_ref01_data_up0.id = api_key_ref01_data.id;
        const api_key_ref01_markdef_up0 = { name: 'comments', value: 'Mark01-api_key_ref01_' + setup.now };
        api_key_ref01_data_up0[api_key_ref01_markdef_up0.name] = api_key_ref01_markdef_up0.value;
        const api_key_ref01_resdata_up0 = (await api_key_ref01_ent.update(api_key_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_key_ref01_resdata_up0.id === api_key_ref01_data_up0.id);
        (0, node_assert_1.default)(api_key_ref01_resdata_up0[api_key_ref01_markdef_up0.name] === api_key_ref01_markdef_up0.value);
        // LOAD
        const api_key_ref01_match_dt0 = {};
        api_key_ref01_match_dt0.id = api_key_ref01_data.id;
        const api_key_ref01_data_dt0 = (await api_key_ref01_ent.load(api_key_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_key_ref01_data_dt0.id === api_key_ref01_data.id);
        // REMOVE
        const api_key_ref01_match_rm0 = { id: api_key_ref01_data.id };
        await api_key_ref01_ent.remove(api_key_ref01_match_rm0);
        // LIST
        const api_key_ref01_match_rt0 = {};
        const api_key_ref01_list_rt0 = (await api_key_ref01_ent.list(api_key_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(api_key_ref01_list_rt0, { id: api_key_ref01_data.id })));
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_key01', 'api_key02', 'api_key03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_API_KEY_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_API_KEY_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_API_KEY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.IncidentIoSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.INCIDENT_IO_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.INCIDENT_IO_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ApiKeyEntity.test.js.map
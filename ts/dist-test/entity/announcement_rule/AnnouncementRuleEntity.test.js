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
(0, node_test_1.describe)('AnnouncementRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.AnnouncementRule();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('announcement_rule hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).AnnouncementRule().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).AnnouncementRule()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.AnnouncementRule().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().AnnouncementRule().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.AnnouncementRule().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.AnnouncementRule().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AnnouncementRule().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'announcement_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "condition_groups": { "a": true, "h": "Condition Groups", "n": "condition_groups", "r": true, "sh": "Incidents are announced when they match any of these condition groups", "t": "`$ARRAY`", "key$": "condition_groups", "index$": 0 }, "conditions_no_longer_apply_behaviour": { "a": true, "h": "Conditions No Longer Apply Behaviour", "n": "conditions_no_longer_apply_behaviour", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Whether to remove announcement posts when the incident no longer matches this rule's conditions", "t": "`$STRING`", "key$": "conditions_no_longer_apply_behaviour", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When the rule was created", "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this announcement rule", "t": "`$STRING`", "key$": "id", "index$": 3 }, "microsoft_teams_channel_ids": { "a": true, "h": "Microsoft Teams Channel Ids", "n": "microsoft_teams_channel_ids", "op": { "create": { "req": false, "type": "`$ARRAY`" }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Microsoft Teams channels to post announcements into, as team_id/channel_id, when the organisation uses Microsoft Teams", "t": "`$ARRAY`", "key$": "microsoft_teams_channel_ids", "index$": 4 }, "mode": { "a": true, "h": "Mode", "n": "mode", "r": true, "sh": "Which incidents are announced: live incidents only, or triage incidents too", "t": "`$STRING`", "key$": "mode", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human readable name for the rule", "t": "`$STRING`", "key$": "name", "index$": 6 }, "owning_team_ids": { "a": true, "h": "Owning Team Ids", "n": "owning_team_ids", "op": { "create": { "req": false, "type": "`$ARRAY`" }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "IDs of the teams that own this rule", "t": "`$ARRAY`", "key$": "owning_team_ids", "index$": 7 }, "private_incident_scope": { "a": true, "h": "Private Incident Scope", "n": "private_incident_scope", "r": false, "sh": "Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none", "t": "`$STRING`", "key$": "private_incident_scope", "index$": 8 }, "slack_channel_ids": { "a": true, "h": "Slack Channel Ids", "n": "slack_channel_ids", "op": { "create": { "req": false, "type": "`$ARRAY`" }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "IDs of the Slack channels to post announcements into, when the organisation uses Slack", "t": "`$ARRAY`", "key$": "slack_channel_ids", "index$": 9 }, "template_id": { "a": true, "h": "Template Id", "n": "template_id", "r": false, "sh": "ID of the announcement template used to render this rule's posts", "t": "`$STRING`", "key$": "template_id", "index$": 10 }, "update_sharing_mode": { "a": true, "h": "Update Sharing Mode", "n": "update_sharing_mode", "r": true, "sh": "Where incident updates are shared once the incident is announced", "t": "`$STRING`", "key$": "update_sharing_mode", "index$": 11 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When the rule was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "announcement_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["condition_groups", "conditions_no_longer_apply_behaviour", "microsoft_teams_channel_ids", "mode", "name", "owning_team_ids", "private_incident_scope", "slack_channel_ids", "template_id", "update_sharing_mode"], "co": { "id": "POST /v2/announcement_rules", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/announcement_rules", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "announcement_rules" }], "t": { "req": "`reqdata`", "res": "`body.announcement_rule`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/announcement_rules", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/announcement_rules", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "announcement_rules" }], "t": { "req": "`reqdata`", "res": "`body.announcement_rules`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/announcement_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/announcement_rules/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "announcement_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.announcement_rule`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/announcement_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/announcement_rules/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "announcement_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["condition_groups", "conditions_no_longer_apply_behaviour", "microsoft_teams_channel_ids", "mode", "name", "owning_team_ids", "private_incident_scope", "slack_channel_ids", "template_id", "update_sharing_mode"], "co": { "id": "PUT /v2/announcement_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/announcement_rules/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "announcement_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.announcement_rule`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "announcement_rule", "name__orig": "announcement_rule", "Name": "AnnouncementRule", "name_": "announcement_rule", "name-": "announcement-rule", "NAME": "ANNOUNCEMENT_RULE", "index$": 11 }, { "active": true, "entity": "announcement_rule", "key$": "BasicAnnouncementRuleFlow", "kind": "basic", "name": "BasicAnnouncementRuleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "announcement_rule_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "announcement_rule_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "announcement_rule_ref01", "srcdatavar": "announcement_rule_ref01_data", "suffix": "_up0", "textfield": "conditions_no_longer_apply_behaviour" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-announcement_rule_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "announcement_rule_ref01", "srcdatavar": "announcement_rule_ref01_data", "suffix": "_dt0" }, "m": { "id": "announcement_rule01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-announcement_rule_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "announcement_rule_ref01", "suffix": "_rm0" }, "m": { "id": "announcement_rule01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "announcement_rule_ref01" } }], "index$": 5 }] }, 'AnnouncementRule', { "POST /v2/announcement_rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "condition_groups": [{ "conditions": [{ "operation": "one_of", "param_bindings": [{}], "subject": "incident.severity" }] }], "conditions_no_longer_apply_behaviour": "leave_in_place", "microsoft_teams_channel_ids": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "mode": "live_and_closed", "name": "Data Breaches", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "private_incident_scope": "all", "slack_channel_ids": ["C02AW36C1M5"], "template_id": "01FCNDV6P870EA6S7TK1DSYDG0", "update_sharing_mode": "none" }, "schema": { "example": { "condition_groups": [{ "conditions": [{ "operation": "one_of", "param_bindings": [], "subject": "incident.severity" }] }], "conditions_no_longer_apply_behaviour": "leave_in_place", "microsoft_teams_channel_ids": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "mode": "live_and_closed", "name": "Data Breaches", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "private_incident_scope": "all", "slack_channel_ids": ["C02AW36C1M5"], "template_id": "01FCNDV6P870EA6S7TK1DSYDG0", "update_sharing_mode": "none" }, "properties": { "condition_groups": { "description": "Incidents are announced when they match any of these condition groups", "example": [{ "conditions": [{}] }], "items": { "example": { "conditions": [{}] }, "properties": { "conditions": { "description": "All conditions in this list must be satisfied for the group to be satisfied", "example": [], "items": {}, "type": "array" } }, "required": ["conditions"], "type": "object", "x-ref": "#/components/schemas/ConditionGroupPayloadV2" }, "type": "array", "key$": "condition_groups" }, "conditions_no_longer_apply_behaviour": { "description": "Whether to remove announcement posts when the incident no longer matches this rule's conditions. Defaults to leaving them in place.", "enum": ["leave_in_place", "remove"], "example": "leave_in_place", "type": "string", "key$": "conditions_no_longer_apply_behaviour" }, "microsoft_teams_channel_ids": { "description": "Microsoft Teams channels to post announcements into, as team_id/channel_id. Required when the organisation uses Microsoft Teams.", "example": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "items": { "example": "19:abc@thread.tacv2/19:def@thread.tacv2", "type": "string" }, "type": "array", "key$": "microsoft_teams_channel_ids" }, "mode": { "description": "Which incidents are announced: live incidents only, or triage incidents too", "enum": ["live_and_closed", "include_triage", "include_triage_and_merged", "include_declined_and_merged", "include_all"], "example": "live_and_closed", "type": "string", "key$": "mode" }, "name": { "description": "Human readable name for the rule", "example": "Data Breaches", "type": "string", "key$": "name" }, "owning_team_ids": { "description": "IDs of the teams that own this rule", "example": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "owning_team_ids" }, "private_incident_scope": { "description": "Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none. Defaults to none on create, and is left unchanged on update when omitted.", "enum": ["all", "owning_teams", "none"], "example": "all", "type": "string", "key$": "private_incident_scope" }, "slack_channel_ids": { "description": "IDs of the Slack channels to post announcements into. Required when the organisation uses Slack.", "example": ["C02AW36C1M5"], "items": { "example": "C02AW36C1M5", "type": "string" }, "type": "array", "key$": "slack_channel_ids" }, "template_id": { "description": "ID of the announcement template used to render this rule's posts. Defaults to the organisation's default template when omitted.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "template_id" }, "update_sharing_mode": { "description": "Where incident updates are shared once the incident is announced", "enum": ["none", "thread", "thread_and_channel"], "example": "none", "type": "string", "key$": "update_sharing_mode" } }, "required": ["name", "update_sharing_mode", "mode", "condition_groups"], "type": "object", "x-ref": "#/components/schemas/AnnouncementRulesCreatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v2/announcement_rules": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 50, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "An announcement rule's ID.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "An announcement rule's ID.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "GET /v2/announcement_rules/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v2/announcement_rules/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v2/announcement_rules/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "condition_groups": [{ "conditions": [{ "operation": "one_of", "param_bindings": [{}], "subject": "incident.severity" }] }], "conditions_no_longer_apply_behaviour": "leave_in_place", "microsoft_teams_channel_ids": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "mode": "live_and_closed", "name": "Data Breaches", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "private_incident_scope": "all", "slack_channel_ids": ["C02AW36C1M5"], "template_id": "01FCNDV6P870EA6S7TK1DSYDG0", "update_sharing_mode": "none" }, "schema": { "example": { "condition_groups": [{ "conditions": [{ "operation": "one_of", "param_bindings": [], "subject": "incident.severity" }] }], "conditions_no_longer_apply_behaviour": "leave_in_place", "microsoft_teams_channel_ids": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "mode": "live_and_closed", "name": "Data Breaches", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "private_incident_scope": "all", "slack_channel_ids": ["C02AW36C1M5"], "template_id": "01FCNDV6P870EA6S7TK1DSYDG0", "update_sharing_mode": "none" }, "properties": { "condition_groups": { "description": "Incidents are announced when they match any of these condition groups", "example": [{ "conditions": [{}] }], "items": { "example": { "conditions": [{}] }, "properties": { "conditions": { "description": "All conditions in this list must be satisfied for the group to be satisfied", "example": [], "items": {}, "type": "array" } }, "required": ["conditions"], "type": "object", "x-ref": "#/components/schemas/ConditionGroupPayloadV2" }, "type": "array", "key$": "condition_groups" }, "conditions_no_longer_apply_behaviour": { "description": "Whether to remove announcement posts when the incident no longer matches this rule's conditions. Defaults to leaving them in place.", "enum": ["leave_in_place", "remove"], "example": "leave_in_place", "type": "string", "key$": "conditions_no_longer_apply_behaviour" }, "microsoft_teams_channel_ids": { "description": "Microsoft Teams channels to post announcements into, as team_id/channel_id. Required when the organisation uses Microsoft Teams.", "example": ["19:abc@thread.tacv2/19:def@thread.tacv2"], "items": { "example": "19:abc@thread.tacv2/19:def@thread.tacv2", "type": "string" }, "type": "array", "key$": "microsoft_teams_channel_ids" }, "mode": { "description": "Which incidents are announced: live incidents only, or triage incidents too", "enum": ["live_and_closed", "include_triage", "include_triage_and_merged", "include_declined_and_merged", "include_all"], "example": "live_and_closed", "type": "string", "key$": "mode" }, "name": { "description": "Human readable name for the rule", "example": "Data Breaches", "type": "string", "key$": "name" }, "owning_team_ids": { "description": "IDs of the teams that own this rule. The existing owning teams are kept when omitted.", "example": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "owning_team_ids" }, "private_incident_scope": { "description": "Which private incidents this rule announces: every private incident (all), those an owning team can see (owning_teams), or none. Defaults to none on create, and is left unchanged on update when omitted.", "enum": ["all", "owning_teams", "none"], "example": "all", "type": "string", "key$": "private_incident_scope" }, "slack_channel_ids": { "description": "IDs of the Slack channels to post announcements into. Required when the organisation uses Slack.", "example": ["C02AW36C1M5"], "items": { "example": "C02AW36C1M5", "type": "string" }, "type": "array", "key$": "slack_channel_ids" }, "template_id": { "description": "ID of the announcement template used to render this rule's posts. The existing template is kept when omitted.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "template_id" }, "update_sharing_mode": { "description": "Where incident updates are shared once the incident is announced", "enum": ["none", "thread", "thread_and_channel"], "example": "none", "type": "string", "key$": "update_sharing_mode" } }, "required": ["name", "update_sharing_mode", "mode", "condition_groups"], "type": "object", "x-ref": "#/components/schemas/AnnouncementRulesUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this announcement rule", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const announcement_rule_ref01_ent = client.AnnouncementRule();
        let announcement_rule_ref01_data = setup.data.new.announcement_rule['announcement_rule_ref01'];
        announcement_rule_ref01_data = (await announcement_rule_ref01_ent.create(announcement_rule_ref01_data)).data();
        (0, node_assert_1.default)(null != announcement_rule_ref01_data.id);
        // LIST
        const announcement_rule_ref01_match = {};
        const announcement_rule_ref01_list = (await announcement_rule_ref01_ent.list(announcement_rule_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(announcement_rule_ref01_list, { id: announcement_rule_ref01_data.id })));
        // UPDATE
        const announcement_rule_ref01_data_up0 = {};
        announcement_rule_ref01_data_up0.id = announcement_rule_ref01_data.id;
        const announcement_rule_ref01_markdef_up0 = { name: 'conditions_no_longer_apply_behaviour', value: 'Mark01-announcement_rule_ref01_' + setup.now };
        announcement_rule_ref01_data_up0[announcement_rule_ref01_markdef_up0.name] = announcement_rule_ref01_markdef_up0.value;
        const announcement_rule_ref01_resdata_up0 = (await announcement_rule_ref01_ent.update(announcement_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(announcement_rule_ref01_resdata_up0.id === announcement_rule_ref01_data_up0.id);
        (0, node_assert_1.default)(announcement_rule_ref01_resdata_up0[announcement_rule_ref01_markdef_up0.name] === announcement_rule_ref01_markdef_up0.value);
        // LOAD
        const announcement_rule_ref01_match_dt0 = {};
        announcement_rule_ref01_match_dt0.id = announcement_rule_ref01_data.id;
        const announcement_rule_ref01_data_dt0 = (await announcement_rule_ref01_ent.load(announcement_rule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(announcement_rule_ref01_data_dt0.id === announcement_rule_ref01_data.id);
        // REMOVE
        const announcement_rule_ref01_match_rm0 = { id: announcement_rule_ref01_data.id };
        await announcement_rule_ref01_ent.remove(announcement_rule_ref01_match_rm0);
        // LIST
        const announcement_rule_ref01_match_rt0 = {};
        const announcement_rule_ref01_list_rt0 = (await announcement_rule_ref01_ent.list(announcement_rule_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(announcement_rule_ref01_list_rt0, { id: announcement_rule_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/announcement_rule/AnnouncementRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['announcement_rule01', 'announcement_rule02', 'announcement_rule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_ANNOUNCEMENT_RULE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_ANNOUNCEMENT_RULE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_ANNOUNCEMENT_RULE_ENTID'];
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
//# sourceMappingURL=AnnouncementRuleEntity.test.js.map
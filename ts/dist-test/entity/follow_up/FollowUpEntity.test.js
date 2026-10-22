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
(0, node_test_1.describe)('FollowUpEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.FollowUp();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('follow_up hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).FollowUp().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).FollowUp()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.FollowUp().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().FollowUp().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.FollowUp().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.FollowUp().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.FollowUp().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'follow_up.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assignee": { "a": true, "h": "Assignee", "n": "assignee", "r": true, "t": "`$OBJECT`", "key$": "assignee", "index$": 0 }, "assignee_id": { "a": true, "h": "Assignee Id", "n": "assignee_id", "r": false, "sh": "ID of the user this follow-up is assigned to", "t": "`$STRING`", "key$": "assignee_id", "index$": 1 }, "assignee_team": { "a": true, "h": "Assignee Team", "n": "assignee_team", "r": true, "t": "`$OBJECT`", "key$": "assignee_team", "index$": 2 }, "assignee_team_id": { "a": true, "h": "Assignee Team Id", "n": "assignee_team_id", "r": false, "sh": "ID of the team this follow-up is assigned to", "t": "`$STRING`", "key$": "assignee_team_id", "index$": 3 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "t": "`$OBJECT`", "key$": "category", "index$": 4 }, "completed_at": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completed_at", "r": false, "sh": "When the follow-up was completed", "t": "`$STRING`", "key$": "completed_at", "index$": 5 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When the follow-up was created", "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": true, "t": "`$OBJECT`", "key$": "creator", "index$": 7 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description of the follow-up", "t": "`$STRING`", "key$": "description", "index$": 8 }, "external_issue_reference": { "a": true, "h": "External Issue Reference", "n": "external_issue_reference", "r": true, "t": "`$OBJECT`", "key$": "external_issue_reference", "index$": 9 }, "external_issue_reference_id": { "a": true, "h": "External Issue Reference Id", "n": "external_issue_reference_id", "r": false, "sh": "If this follow-up is related to an external issue, the ID of that issue", "t": "`$STRING`", "key$": "external_issue_reference_id", "index$": 10 }, "follow_up_category_id": { "a": true, "h": "Follow Up Category Id", "n": "follow_up_category_id", "r": false, "sh": "ID of the category for this follow-up", "t": "`$STRING`", "key$": "follow_up_category_id", "index$": 11 }, "follow_up_priority_option_id": { "a": true, "h": "Follow Up Priority Option Id", "n": "follow_up_priority_option_id", "r": false, "sh": "ID of the priority for this follow-up", "t": "`$STRING`", "key$": "follow_up_priority_option_id", "index$": 12 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the follow-up", "t": "`$STRING`", "key$": "id", "index$": 13 }, "incident_id": { "a": true, "h": "Incident Id", "n": "incident_id", "r": true, "sh": "Unique identifier of the incident the follow-up belongs to", "t": "`$STRING`", "key$": "incident_id", "index$": 14 }, "labels": { "a": true, "h": "Labels", "n": "labels", "op": { "create": { "req": false, "type": "`$ARRAY`" }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Labels associated with this follow-up", "t": "`$ARRAY`", "key$": "labels", "index$": 15 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "t": "`$OBJECT`", "key$": "priority", "index$": 16 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Status of the follow-up", "t": "`$STRING`", "key$": "status", "index$": 17 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Title of the follow-up", "t": "`$STRING`", "key$": "title", "index$": 18 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When the follow-up was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "follow_up", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["assignee_id", "assignee_team_id", "description", "external_issue_reference_id", "follow_up_category_id", "follow_up_priority_option_id", "incident_id", "labels", "title"], "co": { "id": "POST /v2/follow_ups", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/follow_ups", "q": { "$action": "v2" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "follow_ups" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 0 }, { "a": true, "bf": ["assignee_id", "assignee_team_id", "description", "external_issue_reference_id", "follow_up_category_id", "follow_up_priority_option_id", "incident_id", "labels", "title"], "co": { "id": "POST /v3/follow_ups", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v3/follow_ups", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/follow_ups", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "assignee_team_id", "or": "assignee_team_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "incident_id", "or": "incident_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "standard", "k": "query", "n": "incident_mode", "or": "incident_mode", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/follow_ups", "q": { "$action": "v2" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "follow_ups" }], "t": { "req": "`reqdata`", "res": "`body.follow_ups`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v3/follow_ups", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "assignee_team_id", "or": "assignee_team_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": { "gte": ["2025-01-01"] }, "k": "query", "n": "created_at", "or": "created_at", "r": false, "t": "`$OBJECT`", "index$": 2 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "incident_id", "or": "incident_id", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "standard", "k": "query", "n": "incident_mode", "or": "incident_mode", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": { "gte": ["2025-01-01"] }, "k": "query", "n": "updated_at", "or": "updated_at", "r": false, "t": "`$OBJECT`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/v3/follow_ups", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }], "t": { "req": "`reqdata`", "res": "`body.follow_ups`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/follow_ups/{id}", "q": { "$action": "v2", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v3/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v3/follow_ups/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/follow_ups/{id}", "q": { "$action": "v2", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v3/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v3/follow_ups/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["assignee_id", "assignee_team_id", "description", "follow_up_category_id", "follow_up_priority_option_id", "labels", "status", "title"], "co": { "id": "PUT /v2/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/follow_ups/{id}", "q": { "$action": "v2", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 0 }, { "a": true, "bf": ["assignee_id", "assignee_team_id", "description", "follow_up_category_id", "follow_up_priority_option_id", "labels", "status", "title"], "co": { "id": "PUT /v3/follow_ups/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v3/follow_ups/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "follow_up", "name__orig": "follow_up", "Name": "FollowUp", "name_": "follow_up", "name-": "follow-up", "NAME": "FOLLOW_UP", "index$": 30 }, { "active": true, "entity": "follow_up", "key$": "BasicFollowUpFlow", "kind": "basic", "name": "BasicFollowUpFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "follow_up_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "follow_up_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "follow_up_ref01", "srcdatavar": "follow_up_ref01_data", "suffix": "_up0", "textfield": "assignee_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-follow_up_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "follow_up_ref01", "srcdatavar": "follow_up_ref01_data", "suffix": "_dt0" }, "m": { "id": "follow_up01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-follow_up_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "follow_up_ref01", "suffix": "_rm0" }, "m": { "id": "follow_up01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "follow_up_ref01" } }], "index$": 5 }] }, 'FollowUp', { "POST /v2/follow_ups": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "external_issue_reference_id": "01FCNDV6P870EA6S7TK1DSYDG0", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "labels": ["bug", "urgent"], "title": "Add alerting on replica lag" }, "schema": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "external_issue_reference_id": "01FCNDV6P870EA6S7TK1DSYDG0", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "labels": ["bug", "urgent"], "title": "Add alerting on replica lag" }, "properties": { "assignee_id": { "description": "ID of the user this follow-up is assigned to", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "assignee_team_id": { "description": "ID of the team this follow-up is assigned to", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "description": { "description": "Description of the follow-up. Supports Markdown.", "example": "Call the fire brigade", "type": "string" }, "external_issue_reference_id": { "description": "If this follow-up is related to an external issue, the ID of that issue", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "follow_up_category_id": { "description": "ID of the category for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string" }, "follow_up_priority_option_id": { "description": "ID of the priority for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string" }, "incident_id": { "description": "Unique identifier of the incident the follow-up belongs to", "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "labels": { "description": "Labels associated with this follow-up", "example": ["bug", "urgent"], "items": { "example": "abc123", "type": "string" }, "type": "array" }, "title": { "description": "Title of the follow-up", "example": "Add alerting on replica lag", "type": "string" } }, "required": ["incident_id", "title"], "type": "object", "x-ref": "#/components/schemas/FollowUpsCreatePayloadV2" } } }, "required": true }, "parameters": [] }, "POST /v3/follow_ups": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "external_issue_reference_id": "01FCNDV6P870EA6S7TK1DSYDG0", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "labels": ["bug", "urgent"], "title": "Add alerting on replica lag" }, "schema": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "external_issue_reference_id": "01FCNDV6P870EA6S7TK1DSYDG0", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "labels": ["bug", "urgent"], "title": "Add alerting on replica lag" }, "properties": { "assignee_id": { "description": "ID of the user this follow-up is assigned to", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "assignee_id" }, "assignee_team_id": { "description": "ID of the team this follow-up is assigned to", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "assignee_team_id" }, "description": { "description": "Description of the follow-up. Supports Markdown.", "example": "Call the fire brigade", "type": "string", "key$": "description" }, "external_issue_reference_id": { "description": "If this follow-up is related to an external issue, the ID of that issue", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "external_issue_reference_id" }, "follow_up_category_id": { "description": "ID of the category for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string", "key$": "follow_up_category_id" }, "follow_up_priority_option_id": { "description": "ID of the priority for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string", "key$": "follow_up_priority_option_id" }, "incident_id": { "description": "Unique identifier of the incident the follow-up belongs to", "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string", "key$": "incident_id" }, "labels": { "description": "Labels associated with this follow-up", "example": ["bug", "urgent"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "labels" }, "title": { "description": "Title of the follow-up", "example": "Add alerting on replica lag", "type": "string", "key$": "title" } }, "required": ["incident_id", "title"], "type": "object", "x-ref": "#/components/schemas/FollowUpsCreatePayloadV3", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v2/follow_ups": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Find follow-ups related to this incident", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "incident_id", "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "Filter to follow-ups from incidents of the given mode. If not set, only follow-ups from `standard` and `retrospective` incidents are returned", "example": "standard", "in": "query", "name": "incident_mode", "schema": { "description": "Filter to follow-ups from incidents of the given mode. If not set, only follow-ups from `standard` and `retrospective` incidents are returned", "enum": ["standard", "retrospective", "test", "tutorial", "stream"], "example": "standard", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Filter follow-ups that are assigned to the given team", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "assignee_team_id", "schema": { "description": "Filter follow-ups that are assigned to the given team", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 2 }] }, "GET /v3/follow_ups": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A follow-up's ID. This endpoint will return a list of follow-ups after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FDAG4SAP5TYPT98WGR2N7W91" } }, "in": "query", "name": "after", "schema": { "description": "A follow-up's ID. This endpoint will return a list of follow-ups after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Find follow-ups related to this incident", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "incident_id", "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 2 }, { "allowEmptyValue": true, "description": "Filter to follow-ups from incidents of the given mode. If not set, only follow-ups from `standard` and `retrospective` incidents are returned", "example": "standard", "in": "query", "name": "incident_mode", "schema": { "description": "Filter to follow-ups from incidents of the given mode. If not set, only follow-ups from `standard` and `retrospective` incidents are returned", "enum": ["standard", "retrospective", "test", "tutorial", "stream"], "example": "standard", "type": "string" }, "index$": 3 }, { "allowEmptyValue": true, "description": "Filter follow-ups that are assigned to the given team", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "assignee_team_id", "schema": { "description": "Filter follow-ups that are assigned to the given team", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 4 }, { "allowEmptyValue": true, "description": "Filter on follow-up created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.", "example": { "gte": ["2025-01-01"] }, "explode": true, "in": "query", "name": "created_at", "schema": { "additionalProperties": { "example": ["some_value"], "items": { "example": "some_value", "type": "string" }, "type": "array" }, "description": "Filter on follow-up created at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.", "example": { "gte": ["2025-01-01"] }, "type": "object" }, "style": "deepObject", "index$": 5 }, { "allowEmptyValue": true, "description": "Filter on follow-up updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.", "example": { "gte": ["2025-01-01"] }, "explode": true, "in": "query", "name": "updated_at", "schema": { "additionalProperties": { "example": ["some_value"], "items": { "example": "some_value", "type": "string" }, "type": "array" }, "description": "Filter on follow-up updated at timestamp. Accepted operators are 'gte', 'lte' and 'date_range'.", "example": { "gte": ["2025-01-01"] }, "type": "object" }, "style": "deepObject", "index$": 6 }] }, "GET /v2/follow_ups/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the follow-up", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "GET /v3/follow_ups/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the follow-up", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "DELETE /v2/follow_ups/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the follow-up", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "DELETE /v3/follow_ups/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the follow-up", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "PUT /v2/follow_ups/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "labels": ["bug", "urgent"], "status": "outstanding", "title": "Add alerting on replica lag" }, "schema": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "labels": ["bug", "urgent"], "status": "outstanding", "title": "Add alerting on replica lag" }, "properties": { "assignee_id": { "description": "ID of the user this follow-up is assigned to. Set to null to unassign.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "assignee_team_id": { "description": "ID of the team this follow-up is assigned to. Set to null to unassign.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "description": { "description": "Description of the follow-up. Supports Markdown.", "example": "Call the fire brigade", "type": "string" }, "follow_up_category_id": { "description": "ID of the category for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string" }, "follow_up_priority_option_id": { "description": "ID of the priority for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string" }, "labels": { "description": "Labels associated with this follow-up", "example": ["bug", "urgent"], "items": { "example": "abc123", "type": "string" }, "type": "array" }, "status": { "description": "Status of the follow-up. Setting this to `deleted` is not allowed; use the delete endpoint instead.", "enum": ["outstanding", "completed", "deleted", "not_doing"], "example": "outstanding", "type": "string" }, "title": { "description": "Title of the follow-up", "example": "Add alerting on replica lag", "type": "string" } }, "required": ["title", "status"], "type": "object", "x-ref": "#/components/schemas/FollowUpsUpdatePayloadV2" } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the follow-up", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "PUT /v3/follow_ups/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "labels": ["bug", "urgent"], "status": "outstanding", "title": "Add alerting on replica lag" }, "schema": { "example": { "assignee_id": "01FCNDV6P870EA6S7TK1DSYDG0", "assignee_team_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Call the fire brigade", "follow_up_category_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "follow_up_priority_option_id": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "labels": ["bug", "urgent"], "status": "outstanding", "title": "Add alerting on replica lag" }, "properties": { "assignee_id": { "description": "ID of the user this follow-up is assigned to. Set to null to unassign.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "assignee_id" }, "assignee_team_id": { "description": "ID of the team this follow-up is assigned to. Set to null to unassign.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "assignee_team_id" }, "description": { "description": "Description of the follow-up. Supports Markdown.", "example": "Call the fire brigade", "type": "string", "key$": "description" }, "follow_up_category_id": { "description": "ID of the category for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string", "key$": "follow_up_category_id" }, "follow_up_priority_option_id": { "description": "ID of the priority for this follow-up", "example": "01GNW4BAQ7XRMFF6FHKNXDFPRW", "type": "string", "key$": "follow_up_priority_option_id" }, "labels": { "description": "Labels associated with this follow-up", "example": ["bug", "urgent"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "labels" }, "status": { "description": "Status of the follow-up. Setting this to `deleted` is not allowed; use the delete endpoint instead.", "enum": ["outstanding", "completed", "deleted", "not_doing"], "example": "outstanding", "type": "string", "key$": "status" }, "title": { "description": "Title of the follow-up", "example": "Add alerting on replica lag", "type": "string", "key$": "title" } }, "required": ["title", "status"], "type": "object", "x-ref": "#/components/schemas/FollowUpsUpdatePayloadV3", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the follow-up", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const follow_up_ref01_ent = client.FollowUp();
        let follow_up_ref01_data = setup.data.new.follow_up['follow_up_ref01'];
        follow_up_ref01_data = (await follow_up_ref01_ent.create(follow_up_ref01_data)).data();
        (0, node_assert_1.default)(null != follow_up_ref01_data.id);
        // LIST
        const follow_up_ref01_match = {};
        const follow_up_ref01_list = (await follow_up_ref01_ent.list(follow_up_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(follow_up_ref01_list, { id: follow_up_ref01_data.id })));
        // UPDATE
        const follow_up_ref01_data_up0 = {};
        follow_up_ref01_data_up0.id = follow_up_ref01_data.id;
        const follow_up_ref01_markdef_up0 = { name: 'assignee_id', value: 'Mark01-follow_up_ref01_' + setup.now };
        follow_up_ref01_data_up0[follow_up_ref01_markdef_up0.name] = follow_up_ref01_markdef_up0.value;
        const follow_up_ref01_resdata_up0 = (await follow_up_ref01_ent.update(follow_up_ref01_data_up0)).data();
        (0, node_assert_1.default)(follow_up_ref01_resdata_up0.id === follow_up_ref01_data_up0.id);
        (0, node_assert_1.default)(follow_up_ref01_resdata_up0[follow_up_ref01_markdef_up0.name] === follow_up_ref01_markdef_up0.value);
        // LOAD
        const follow_up_ref01_match_dt0 = {};
        follow_up_ref01_match_dt0.id = follow_up_ref01_data.id;
        const follow_up_ref01_data_dt0 = (await follow_up_ref01_ent.load(follow_up_ref01_match_dt0)).data();
        (0, node_assert_1.default)(follow_up_ref01_data_dt0.id === follow_up_ref01_data.id);
        // REMOVE
        const follow_up_ref01_match_rm0 = { id: follow_up_ref01_data.id };
        await follow_up_ref01_ent.remove(follow_up_ref01_match_rm0);
        // LIST
        const follow_up_ref01_match_rt0 = {};
        const follow_up_ref01_list_rt0 = (await follow_up_ref01_ent.list(follow_up_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(follow_up_ref01_list_rt0, { id: follow_up_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/follow_up/FollowUpTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['follow_up01', 'follow_up02', 'follow_up03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_FOLLOW_UP_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_FOLLOW_UP_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_FOLLOW_UP_ENTID'];
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
//# sourceMappingURL=FollowUpEntity.test.js.map
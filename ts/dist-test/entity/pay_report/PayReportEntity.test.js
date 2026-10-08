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
(0, node_test_1.describe)('PayReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.PayReport();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('pay_report hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).PayReport().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).PayReport()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.PayReport().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().PayReport().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.PayReport().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.PayReport().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PayReport().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pay_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this report was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "t": "`$OBJECT`", "key$": "creator", "index$": 1 }, "end_date": { "a": true, "h": "End Date", "n": "end_date", "r": true, "sh": "Last date (YYYY-MM-DD) this report includes shifts from, inclusive", "t": "`$STRING`", "key$": "end_date", "index$": 2 }, "error_code": { "a": true, "h": "Error Code", "n": "error_code", "r": false, "sh": "Why a report could not be generated", "t": "`$STRING`", "key$": "error_code", "index$": 3 }, "error_message": { "a": true, "h": "Error Message", "n": "error_message", "r": false, "sh": "What went wrong, written for whoever asked for the report.", "t": "`$STRING`", "key$": "error_message", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this pay report", "t": "`$STRING`", "key$": "id", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human readable name for this report", "t": "`$STRING`", "key$": "name", "index$": 6 }, "overlapping_shifts": { "a": true, "h": "Overlapping Shifts", "n": "overlapping_shifts", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "How time spent on more than one schedule at once was paid", "t": "`$STRING`", "key$": "overlapping_shifts", "index$": 7 }, "pay_config_expression": { "a": true, "h": "Pay Config Expression", "n": "pay_config_expression", "r": true, "t": "`$OBJECT`", "key$": "pay_config_expression", "index$": 8 }, "pay_config_id": { "a": true, "h": "Pay Config Id", "n": "pay_config_id", "r": false, "sh": "The pay config to price every shift with.", "t": "`$STRING`", "key$": "pay_config_id", "index$": 9 }, "published_at": { "a": true, "fo": "date-time", "h": "Published At", "n": "published_at", "r": false, "sh": "When this report was published.", "t": "`$STRING`", "key$": "published_at", "index$": 10 }, "rotation_filters": { "a": true, "h": "Rotation Filters", "n": "rotation_filters", "r": false, "sh": "Narrows some of these schedules to a subset of their rotations.", "t": "`$ARRAY`", "key$": "rotation_filters", "index$": 11 }, "schedule_ids": { "a": true, "h": "Schedule Ids", "n": "schedule_ids", "r": true, "sh": "The schedules this report covers", "t": "`$ARRAY`", "key$": "schedule_ids", "index$": 12 }, "start_date": { "a": true, "h": "Start Date", "n": "start_date", "r": true, "sh": "First date (YYYY-MM-DD) this report includes shifts from, inclusive", "t": "`$STRING`", "key$": "start_date", "index$": 13 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "How far a report has got through being generated", "t": "`$STRING`", "key$": "status", "index$": 14 }, "total_duration_seconds": { "a": true, "fo": "int64", "h": "Total Duration Seconds", "n": "total_duration_seconds", "r": false, "sh": "Total time spent on-call across every shift in this report, in seconds.", "t": "`$INTEGER`", "key$": "total_duration_seconds", "index$": 15 }, "total_pay_by_currency": { "a": true, "h": "Total Pay By Currency", "n": "total_pay_by_currency", "r": false, "sh": "Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency.", "t": "`$OBJECT`", "key$": "total_pay_by_currency", "index$": 16 }, "unpaid_shifts": { "a": true, "h": "Unpaid Shifts", "n": "unpaid_shifts", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Whether shifts that priced to zero are part of the report", "t": "`$STRING`", "key$": "unpaid_shifts", "index$": 17 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this report was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "pay_report", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["end_date", "name", "overlapping_shifts", "pay_config_expression", "pay_config_id", "rotation_filters", "schedule_ids", "start_date", "unpaid_shifts"], "co": { "id": "POST /v2/pay_reports", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/pay_reports", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_reports" }], "t": { "req": "`reqdata`", "res": "`body.pay_report`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/pay_reports", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/pay_reports", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_reports" }], "t": { "req": "`reqdata`", "res": "`body.pay_reports`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/pay_reports/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/pay_reports/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_reports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.pay_report`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/pay_reports/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/pay_reports/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "pay_reports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "pay_report", "name__orig": "pay_report", "Name": "PayReport", "name_": "pay_report", "name-": "pay-report", "NAME": "PAY_REPORT", "index$": 74 }, { "active": true, "entity": "pay_report", "key$": "BasicPayReportFlow", "kind": "basic", "name": "BasicPayReportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pay_report_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "pay_report_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "pay_report_ref01", "srcdatavar": "pay_report_ref01_data", "suffix": "_dt0" }, "m": { "id": "pay_report01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pay_report_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "pay_report_ref01", "suffix": "_rm0" }, "m": { "id": "pay_report01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "pay_report_ref01" } }], "index$": 4 }] }, 'PayReport', { "POST /v2/pay_reports": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "end_date": "2026-03-31", "name": "March 2026", "overlapping_shifts": "paid_per_schedule", "pay_config_expression": { "else_branch": { "result": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "label": "Team Slack channel", "operations": [{ "branches": { "branches": [{}], "returns": { "array": true, "type": "IncidentStatus" } }, "cast": { "returns": { "array": true, "type": "IncidentStatus" } }, "concatenate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "filter": { "condition_groups": [{}] }, "navigate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "operation_type": "navigate", "parse": { "returns": { "array": true, "type": "IncidentStatus" }, "source": "metadata.annotations[\"github.com/repo\"]" } }], "reference": "abc123", "root_reference": "incident.status" }, "pay_config_id": "01G0J1EXE7AXZ2C93K61WBPYEH", "rotation_filters": [{ "rotation_ids": ["primary"], "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH" }], "schedule_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "start_date": "2026-03-01", "unpaid_shifts": "excluded" }, "schema": { "example": { "end_date": "2026-03-31", "name": "March 2026", "overlapping_shifts": "paid_per_schedule", "pay_config_expression": { "else_branch": { "result": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "label": "Team Slack channel", "operations": [{ "branches": { "branches": [], "returns": {} }, "cast": { "returns": {} }, "concatenate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "filter": { "condition_groups": [] }, "navigate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "operation_type": "navigate", "parse": { "returns": {}, "source": "metadata.annotations[\"github.com/repo\"]" } }], "reference": "abc123", "root_reference": "incident.status" }, "pay_config_id": "01G0J1EXE7AXZ2C93K61WBPYEH", "rotation_filters": [{ "rotation_ids": ["primary"], "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH" }], "schedule_ids": ["01FCNDV6P870EA6S7TK1DSYDG0"], "start_date": "2026-03-01", "unpaid_shifts": "excluded" }, "properties": { "end_date": { "description": "Last date (YYYY-MM-DD) to include shifts from, inclusive", "example": "2026-03-31", "type": "string", "key$": "end_date" }, "name": { "description": "Human readable name for this report", "example": "March 2026", "type": "string", "key$": "name" }, "overlapping_shifts": { "description": "Time on more than one of these schedules at once can be paid once or per schedule. Paying it once requires the advanced on-call plan.", "enum": ["paid_once", "paid_per_schedule"], "example": "paid_per_schedule", "type": "string", "key$": "overlapping_shifts" }, "pay_config_expression": { "example": { "else_branch": { "result": { "array_value": [], "value": {} } }, "label": "Team Slack channel", "operations": [{ "branches": {}, "cast": {}, "concatenate": {}, "filter": {}, "navigate": {}, "operation_type": "navigate", "parse": {} }], "reference": "abc123", "root_reference": "incident.status" }, "properties": { "else_branch": { "example": { "result": {} }, "properties": { "result": {} }, "required": ["result"], "type": "object", "x-ref": "#/components/schemas/ExpressionElseBranchPayloadV2" }, "label": { "description": "The human readable label of the expression", "example": "Team Slack channel", "type": "string" }, "operations": { "example": [{}], "items": { "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ExpressionOperationPayloadV2" }, "type": "array" }, "reference": { "description": "A short ID that can be used to reference the expression", "example": "abc123", "type": "string" }, "root_reference": { "description": "The root reference for this expression (i.e. where the expression starts)", "example": "incident.status", "type": "string" } }, "required": ["label", "reference", "root_reference", "operations"], "type": "object", "x-ref": "#/components/schemas/ExpressionPayloadV2", "key$": "pay_config_expression" }, "pay_config_id": { "description": "The pay config to price every shift with. Provide this or pay_config_expression, and not both.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "minLength": 1, "type": "string", "key$": "pay_config_id" }, "rotation_filters": { "description": "Narrows some of these schedules to a subset of their rotations. A schedule that does not appear here includes every rotation.", "example": [{ "rotation_ids": ["primary"], "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH" }], "items": { "description": "Narrows one of a report's schedules to some of its rotations.", "example": { "rotation_ids": ["primary"], "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH" }, "properties": { "rotation_ids": { "description": "Which of the schedule's rotations to include. To include all of them, leave this schedule out of rotation_filters rather than listing every rotation here.", "example": [], "items": {}, "minItems": 1, "type": "array" }, "schedule_id": { "description": "The schedule to narrow. Must also appear in schedule_ids.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" } }, "required": ["schedule_id", "rotation_ids"], "type": "object", "x-ref": "#/components/schemas/PayReportRotationFilterV2" }, "type": "array", "key$": "rotation_filters" }, "schedule_ids": { "description": "Which schedules to report on", "example": ["01FCNDV6P870EA6S7TK1DSYDG0"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "schedule_ids" }, "start_date": { "description": "First date (YYYY-MM-DD) to include shifts from, inclusive", "example": "2026-03-01", "type": "string", "key$": "start_date" }, "unpaid_shifts": { "description": "Whether shifts that price to zero count towards total_duration_seconds", "enum": ["included", "excluded"], "example": "excluded", "type": "string", "key$": "unpaid_shifts" } }, "required": ["name", "start_date", "end_date", "schedule_ids"], "type": "object", "x-ref": "#/components/schemas/PayReportsCreatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v2/pay_reports": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 50, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A pay report's ID. This endpoint will return a list of pay reports after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01G0J1EXE7AXZ2C93K61WBPYEH" } }, "in": "query", "name": "after", "schema": { "description": "A pay report's ID. This endpoint will return a list of pay reports after this ID in relation to the API response order.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 1 }] }, "GET /v2/pay_reports/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] }, "DELETE /v2/pay_reports/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pay_report_ref01_ent = client.PayReport();
        let pay_report_ref01_data = setup.data.new.pay_report['pay_report_ref01'];
        pay_report_ref01_data = (await pay_report_ref01_ent.create(pay_report_ref01_data)).data();
        (0, node_assert_1.default)(null != pay_report_ref01_data.id);
        // LIST
        const pay_report_ref01_match = {};
        const pay_report_ref01_list = (await pay_report_ref01_ent.list(pay_report_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(pay_report_ref01_list, { id: pay_report_ref01_data.id })));
        // LOAD
        const pay_report_ref01_match_dt0 = {};
        pay_report_ref01_match_dt0.id = pay_report_ref01_data.id;
        const pay_report_ref01_data_dt0 = (await pay_report_ref01_ent.load(pay_report_ref01_match_dt0)).data();
        (0, node_assert_1.default)(pay_report_ref01_data_dt0.id === pay_report_ref01_data.id);
        // REMOVE
        const pay_report_ref01_match_rm0 = { id: pay_report_ref01_data.id };
        await pay_report_ref01_ent.remove(pay_report_ref01_match_rm0);
        // LIST
        const pay_report_ref01_match_rt0 = {};
        const pay_report_ref01_list_rt0 = (await pay_report_ref01_ent.list(pay_report_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(pay_report_ref01_list_rt0, { id: pay_report_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pay_report/PayReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pay_report01', 'pay_report02', 'pay_report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_PAY_REPORT_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_PAY_REPORT_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_PAY_REPORT_ENTID'];
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
//# sourceMappingURL=PayReportEntity.test.js.map
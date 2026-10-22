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
(0, node_test_1.describe)('IncidentFormEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.IncidentForm();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('incident_form hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).IncidentForm().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).IncidentForm()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.IncidentForm().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().IncidentForm().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.IncidentForm().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.IncidentForm().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IncidentForm().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'incident_form.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this incident form was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "expressions": { "a": true, "h": "Expressions", "n": "expressions", "r": true, "sh": "Expressions available to every element's conditions and defaults.", "t": "`$ARRAY`", "key$": "expressions", "index$": 1 }, "form_type": { "a": true, "h": "Form Type", "n": "form_type", "r": true, "sh": "Which form this is.", "t": "`$STRING`", "key$": "form_type", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this incident form", "t": "`$STRING`", "key$": "id", "index$": 3 }, "incident_type_id": { "a": true, "h": "Incident Type Id", "n": "incident_type_id", "r": false, "sh": "The incident type this form belongs to.", "t": "`$STRING`", "key$": "incident_type_id", "index$": 4 }, "lifecycle_elements": { "a": true, "h": "Lifecycle Elements", "n": "lifecycle_elements", "r": false, "sh": "Elements on this form, in display order.", "t": "`$ARRAY`", "key$": "lifecycle_elements", "index$": 5 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this incident form was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "incident_form", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["expressions", "form_type", "incident_type_id", "lifecycle_elements"], "co": { "id": "POST /v3/incident_forms", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v3/incident_forms", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "incident_forms" }], "t": { "req": "`reqdata`", "res": "`body.incident_form`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v3/incident_forms", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v3/incident_forms", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "incident_forms" }], "t": { "req": "`reqdata`", "res": "`body.incident_forms`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v3/incident_forms/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v3/incident_forms/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "incident_forms" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.incident_form`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v3/incident_forms/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v3/incident_forms/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v3" }, { "lit": "incident_forms" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["expressions", "form_type", "incident_type_id", "lifecycle_elements"], "co": { "id": "PUT /v3/incident_forms/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v3/incident_forms/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "incident_forms" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.incident_form`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "incident_form", "name__orig": "incident_form", "Name": "IncidentForm", "name_": "incident_form", "name-": "incident-form", "NAME": "INCIDENT_FORM", "index$": 37 }, { "active": true, "entity": "incident_form", "key$": "BasicIncidentFormFlow", "kind": "basic", "name": "BasicIncidentFormFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "incident_form_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "incident_form_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "incident_form_ref01", "srcdatavar": "incident_form_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-incident_form_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "incident_form_ref01", "srcdatavar": "incident_form_ref01_data", "suffix": "_dt0" }, "m": { "id": "incident_form01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-incident_form_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "incident_form_ref01", "suffix": "_rm0" }, "m": { "id": "incident_form01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "incident_form_ref01" } }], "index$": 5 }] }, 'IncidentForm', { "POST /v3/incident_forms": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "expressions": [{ "else_branch": { "result": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "label": "Team Slack channel", "operations": [{ "branches": { "branches": [], "returns": {} }, "cast": { "returns": {} }, "concatenate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "filter": { "condition_groups": [] }, "navigate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "operation_type": "navigate", "parse": { "returns": {}, "source": "metadata.annotations[\"github.com/repo\"]" } }], "reference": "abc123", "root_reference": "incident.status" }], "form_type": "declare", "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "lifecycle_elements": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{ "conditions": [{}] }], "show_if_condition_groups": [{ "conditions": [{}] }] }] }, "schema": { "example": { "expressions": [{ "else_branch": { "result": { "array_value": [], "value": {} } }, "label": "Team Slack channel", "operations": [{ "branches": {}, "cast": {}, "concatenate": {}, "filter": {}, "navigate": {}, "operation_type": "navigate", "parse": {} }], "reference": "abc123", "root_reference": "incident.status" }], "form_type": "declare", "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "lifecycle_elements": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{ "conditions": [] }], "show_if_condition_groups": [{ "conditions": [] }] }] }, "properties": { "expressions": { "description": "Expressions available to every element's conditions and defaults. Referenced by reference, not by ID.", "example": [{ "else_branch": { "result": {} }, "label": "Team Slack channel", "operations": [{}], "reference": "abc123", "root_reference": "incident.status" }], "items": { "example": { "else_branch": { "result": {} }, "label": "Team Slack channel", "operations": [{}], "reference": "abc123", "root_reference": "incident.status" }, "properties": { "else_branch": { "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ExpressionElseBranchPayloadV3" }, "label": { "description": "The human readable label of the expression", "example": "Team Slack channel", "type": "string" }, "operations": { "example": [], "items": {}, "type": "array" }, "reference": { "description": "A short ID that can be used to reference the expression", "example": "abc123", "type": "string" }, "root_reference": { "description": "The root reference for this expression (i.e. where the expression starts)", "example": "incident.status", "type": "string" } }, "required": ["label", "reference", "root_reference", "operations"], "type": "object", "x-ref": "#/components/schemas/ExpressionPayloadV3" }, "type": "array", "key$": "expressions" }, "form_type": { "description": "Which form this is. Escalate forms are not part of this API.", "enum": ["declare", "accept", "update", "resolve", "retrospective", "custom-fields"], "example": "declare", "type": "string", "key$": "form_type" }, "incident_type_id": { "description": "The incident type this form belongs to. Leave unset for the organisation's default form of this type.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "incident_type_id" }, "lifecycle_elements": { "description": "Elements on this form, in display order. List position is the order: there is no separate rank.", "example": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [], "value": {} }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{}], "show_if_condition_groups": [{}] }], "items": { "example": { "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [], "value": {} }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{}], "show_if_condition_groups": [{}] }, "properties": { "can_select_no_value": { "description": "Whether the user can explicitly choose no value. Only meaningful for custom field elements.", "example": false, "type": "boolean" }, "config": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/IncidentFormLifecycleElementConfigV3" }, "custom_field_id": { "description": "The custom field this element edits. Set only when element_type is custom_field.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "default_value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingPayloadV3" }, "description": { "description": "Description shown beside this element, as markdown", "example": "Shown when the incident is major or above.", "type": "string" }, "element_type": { "description": "What this element captures", "enum": [], "example": "name", "type": "string" }, "id": { "description": "Identifier of an existing divider or text element. Omit when adding an element.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "incident_role_id": { "description": "The incident role this element assigns. Set only when element_type is incident_role.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "incident_timestamp_id": { "description": "The incident timestamp this element sets. Set only when element_type is timestamp.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "placeholder": { "description": "Placeholder text shown in the empty field", "example": "What's happening?", "type": "string" }, "required_if": { "description": "When this element must be filled in", "enum": [], "example": "check_engine_config", "type": "string" }, "required_if_condition_groups": { "description": "Condition groups that make this element required. Used when required_if is check_engine_config.", "example": [], "items": {}, "type": "array" }, "show_if_condition_groups": { "description": "The element is shown when any of these condition groups match. Unset means it is always shown.", "example": [], "items": {}, "type": "array" } }, "required": ["element_type"], "type": "object", "x-ref": "#/components/schemas/IncidentFormLifecycleElementPayloadV3" }, "type": "array", "key$": "lifecycle_elements" } }, "required": ["form_type", "expressions"], "type": "object", "x-ref": "#/components/schemas/IncidentFormsCreatePayloadV3", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v3/incident_forms": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "An incident form's ID. This endpoint will return a list of forms after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "An incident form's ID. This endpoint will return a list of forms after this ID in relation to the API response order.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "GET /v3/incident_forms/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v3/incident_forms/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for this incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v3/incident_forms/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "expressions": [{ "else_branch": { "result": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "label": "Team Slack channel", "operations": [{ "branches": { "branches": [], "returns": {} }, "cast": { "returns": {} }, "concatenate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "filter": { "condition_groups": [] }, "navigate": { "reference": "catalog_attribute[\"01FCNDV6P870EA6S7TK1DSYD5H\"]" }, "operation_type": "navigate", "parse": { "returns": {}, "source": "metadata.annotations[\"github.com/repo\"]" } }], "reference": "abc123", "root_reference": "incident.status" }], "form_type": "declare", "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "lifecycle_elements": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{ "conditions": [{}] }], "show_if_condition_groups": [{ "conditions": [{}] }] }] }, "schema": { "example": { "expressions": [{ "else_branch": { "result": { "array_value": [], "value": {} } }, "label": "Team Slack channel", "operations": [{ "branches": {}, "cast": {}, "concatenate": {}, "filter": {}, "navigate": {}, "operation_type": "navigate", "parse": {} }], "reference": "abc123", "root_reference": "incident.status" }], "form_type": "declare", "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "lifecycle_elements": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{ "conditions": [] }], "show_if_condition_groups": [{ "conditions": [] }] }] }, "properties": { "expressions": { "description": "Expressions available to every element's conditions and defaults. Referenced by reference, not by ID.", "example": [{ "else_branch": { "result": {} }, "label": "Team Slack channel", "operations": [{}], "reference": "abc123", "root_reference": "incident.status" }], "items": { "example": { "else_branch": { "result": {} }, "label": "Team Slack channel", "operations": [{}], "reference": "abc123", "root_reference": "incident.status" }, "properties": { "else_branch": { "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ExpressionElseBranchPayloadV3" }, "label": { "description": "The human readable label of the expression", "example": "Team Slack channel", "type": "string" }, "operations": { "example": [], "items": {}, "type": "array" }, "reference": { "description": "A short ID that can be used to reference the expression", "example": "abc123", "type": "string" }, "root_reference": { "description": "The root reference for this expression (i.e. where the expression starts)", "example": "incident.status", "type": "string" } }, "required": ["label", "reference", "root_reference", "operations"], "type": "object", "x-ref": "#/components/schemas/ExpressionPayloadV3" }, "type": "array", "key$": "expressions" }, "form_type": { "description": "Which form this is. Escalate forms are not part of this API.", "enum": ["declare", "accept", "update", "resolve", "retrospective", "custom-fields"], "example": "declare", "type": "string", "key$": "form_type" }, "incident_type_id": { "description": "The incident type this form belongs to. Leave unset for the organisation's default form of this type.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "incident_type_id" }, "lifecycle_elements": { "description": "Elements on this form, in display order. List position is the order: there is no separate rank.", "example": [{ "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [], "value": {} }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{}], "show_if_condition_groups": [{}] }], "items": { "example": { "can_select_no_value": false, "config": { "require_comment": false }, "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0", "default_value": { "array_value": [], "value": {} }, "description": "Shown when the incident is major or above.", "element_type": "name", "id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0", "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0", "placeholder": "What's happening?", "required_if": "check_engine_config", "required_if_condition_groups": [{}], "show_if_condition_groups": [{}] }, "properties": { "can_select_no_value": { "description": "Whether the user can explicitly choose no value. Only meaningful for custom field elements.", "example": false, "type": "boolean" }, "config": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/IncidentFormLifecycleElementConfigV3" }, "custom_field_id": { "description": "The custom field this element edits. Set only when element_type is custom_field.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "default_value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingPayloadV3" }, "description": { "description": "Description shown beside this element, as markdown", "example": "Shown when the incident is major or above.", "type": "string" }, "element_type": { "description": "What this element captures", "enum": [], "example": "name", "type": "string" }, "id": { "description": "Identifier of an existing divider or text element. Omit when adding an element.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "incident_role_id": { "description": "The incident role this element assigns. Set only when element_type is incident_role.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "incident_timestamp_id": { "description": "The incident timestamp this element sets. Set only when element_type is timestamp.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "placeholder": { "description": "Placeholder text shown in the empty field", "example": "What's happening?", "type": "string" }, "required_if": { "description": "When this element must be filled in", "enum": [], "example": "check_engine_config", "type": "string" }, "required_if_condition_groups": { "description": "Condition groups that make this element required. Used when required_if is check_engine_config.", "example": [], "items": {}, "type": "array" }, "show_if_condition_groups": { "description": "The element is shown when any of these condition groups match. Unset means it is always shown.", "example": [], "items": {}, "type": "array" } }, "required": ["element_type"], "type": "object", "x-ref": "#/components/schemas/IncidentFormLifecycleElementPayloadV3" }, "type": "array", "key$": "lifecycle_elements" } }, "required": ["form_type", "expressions"], "type": "object", "x-ref": "#/components/schemas/IncidentFormsUpdatePayloadV3", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier of the incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the incident form", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const incident_form_ref01_ent = client.IncidentForm();
        let incident_form_ref01_data = setup.data.new.incident_form['incident_form_ref01'];
        incident_form_ref01_data = (await incident_form_ref01_ent.create(incident_form_ref01_data)).data();
        (0, node_assert_1.default)(null != incident_form_ref01_data.id);
        // LIST
        const incident_form_ref01_match = {};
        const incident_form_ref01_list = (await incident_form_ref01_ent.list(incident_form_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(incident_form_ref01_list, { id: incident_form_ref01_data.id })));
        // UPDATE
        const incident_form_ref01_data_up0 = {};
        incident_form_ref01_data_up0.id = incident_form_ref01_data.id;
        const incident_form_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-incident_form_ref01_' + setup.now };
        incident_form_ref01_data_up0[incident_form_ref01_markdef_up0.name] = incident_form_ref01_markdef_up0.value;
        const incident_form_ref01_resdata_up0 = (await incident_form_ref01_ent.update(incident_form_ref01_data_up0)).data();
        (0, node_assert_1.default)(incident_form_ref01_resdata_up0.id === incident_form_ref01_data_up0.id);
        (0, node_assert_1.default)(incident_form_ref01_resdata_up0[incident_form_ref01_markdef_up0.name] === incident_form_ref01_markdef_up0.value);
        // LOAD
        const incident_form_ref01_match_dt0 = {};
        incident_form_ref01_match_dt0.id = incident_form_ref01_data.id;
        const incident_form_ref01_data_dt0 = (await incident_form_ref01_ent.load(incident_form_ref01_match_dt0)).data();
        (0, node_assert_1.default)(incident_form_ref01_data_dt0.id === incident_form_ref01_data.id);
        // REMOVE
        const incident_form_ref01_match_rm0 = { id: incident_form_ref01_data.id };
        await incident_form_ref01_ent.remove(incident_form_ref01_match_rm0);
        // LIST
        const incident_form_ref01_match_rt0 = {};
        const incident_form_ref01_list_rt0 = (await incident_form_ref01_ent.list(incident_form_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(incident_form_ref01_list_rt0, { id: incident_form_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/incident_form/IncidentFormTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['incident_form01', 'incident_form02', 'incident_form03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_INCIDENT_FORM_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_INCIDENT_FORM_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_FORM_ENTID'];
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
//# sourceMappingURL=IncidentFormEntity.test.js.map
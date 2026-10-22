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
(0, node_test_1.describe)('CustomFieldEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CustomField();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('custom_field hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).CustomField().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).CustomField()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CustomField().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().CustomField().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CustomField().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CustomField().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CustomField().list({ "catalog_type_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'custom_field.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "catalog_type_id": { "a": true, "h": "Catalog Type Id", "n": "catalog_type_id", "r": false, "sh": "For catalog fields, the ID of the associated catalog type", "t": "`$STRING`", "key$": "catalog_type_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When the action was created", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "Description of the custom field", "t": "`$STRING`", "key$": "description", "index$": 2 }, "field_type": { "a": true, "h": "Field Type", "n": "field_type", "r": true, "sh": "Type of custom field", "t": "`$STRING`", "key$": "field_type", "index$": 3 }, "filter_by": { "a": true, "h": "Filter By", "n": "filter_by", "r": true, "t": "`$OBJECT`", "key$": "filter_by", "index$": 4 }, "fixed_filter": { "a": true, "h": "Fixed Filter", "n": "fixed_filter", "r": true, "t": "`$OBJECT`", "key$": "fixed_filter", "index$": 5 }, "group_by_catalog_attribute_id": { "a": true, "h": "Group By Catalog Attribute Id", "n": "group_by_catalog_attribute_id", "r": false, "sh": "For catalog fields, the ID of the attribute used to group catalog entries (if applicable)", "t": "`$STRING`", "key$": "group_by_catalog_attribute_id", "index$": 6 }, "helptext_catalog_attribute_id": { "a": true, "h": "Helptext Catalog Attribute Id", "n": "helptext_catalog_attribute_id", "r": false, "sh": "Which catalog attribute provides helptext for the options", "t": "`$STRING`", "key$": "helptext_catalog_attribute_id", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the custom field", "t": "`$STRING`", "key$": "id", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human readable name for the custom field", "t": "`$STRING`", "key$": "name", "index$": 9 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When the action was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "custom_field", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["description", "field_type", "name", "required", "required_v2", "show_before_closure", "show_before_creation", "show_before_update", "show_in_announcement_post"], "co": { "id": "POST /v1/custom_fields", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/custom_fields", "q": { "$action": "v1" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "custom_fields" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 0 }, { "a": true, "bf": ["catalog_type_id", "description", "field_type", "filter_by", "fixed_filter", "group_by_catalog_attribute_id", "helptext_catalog_attribute_id", "name"], "co": { "id": "POST /v2/custom_fields", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/custom_fields", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "custom_fields" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/custom_fields", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v1/custom_fields", "q": { "$action": "v1" }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "custom_fields" }], "t": { "req": "`reqdata`", "res": "`body.custom_fields`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v2/custom_fields", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v2/custom_fields", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "custom_fields" }], "t": { "req": "`reqdata`", "res": "`body.custom_fields`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/custom_fields/{id}", "q": { "$action": "v1", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v2/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/custom_fields/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/custom_fields/{id}", "q": { "$action": "v1", "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /v2/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/custom_fields/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["description", "name", "required", "required_v2", "show_before_closure", "show_before_creation", "show_before_update", "show_in_announcement_post"], "co": { "id": "PUT /v1/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v1/custom_fields/{id}", "q": { "$action": "v1", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 0 }, { "a": true, "bf": ["description", "filter_by", "fixed_filter", "group_by_catalog_attribute_id", "helptext_catalog_attribute_id", "name"], "co": { "id": "PUT /v2/custom_fields/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/custom_fields/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "custom_fields" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.custom_field`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "custom_field", "name__orig": "custom_field", "Name": "CustomField", "name_": "custom_field", "name-": "custom-field", "NAME": "CUSTOM_FIELD", "index$": 23 }, { "active": true, "entity": "custom_field", "key$": "BasicCustomFieldFlow", "kind": "basic", "name": "BasicCustomFieldFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "custom_field_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "custom_field_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "custom_field_ref01", "srcdatavar": "custom_field_ref01_data", "suffix": "_up0", "textfield": "catalog_type_id" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-custom_field_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "custom_field_ref01", "srcdatavar": "custom_field_ref01_data", "suffix": "_dt0" }, "m": { "id": "custom_field01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-custom_field_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "custom_field_ref01", "suffix": "_rm0" }, "m": { "id": "custom_field01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "custom_field_ref01" } }], "index$": 5 }] }, 'CustomField', { "POST /v1/custom_fields": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Which team is impacted by this issue", "field_type": "single_select", "name": "Affected Team", "required": "never", "required_v2": "never", "show_before_closure": true, "show_before_creation": true, "show_before_update": true, "show_in_announcement_post": true }, "schema": { "example": { "description": "Which team is impacted by this issue", "field_type": "single_select", "name": "Affected Team", "required": "never", "required_v2": "never", "show_before_closure": true, "show_before_creation": true, "show_before_update": true, "show_in_announcement_post": true }, "properties": { "description": { "description": "Description of the custom field", "example": "Which team is impacted by this issue", "type": "string" }, "field_type": { "description": "Type of custom field", "enum": ["single_select", "multi_select", "text", "link", "numeric"], "example": "single_select", "type": "string" }, "name": { "description": "Human readable name for the custom field", "example": "Affected Team", "maxLength": 50, "type": "string" }, "required": { "description": "When this custom field must be set during the incident lifecycle. [DEPRECATED: please use required_v2 instead].", "enum": ["never", "before_closure", "always"], "example": "never", "type": "string" }, "required_v2": { "description": "When this custom field must be set during the incident lifecycle.", "enum": ["never", "before_resolution", "always"], "example": "never", "type": "string" }, "show_before_closure": { "description": "Whether a custom field should be shown in the incident resolve modal. If this custom field is required before resolution, but no value has been set for it, the field will be shown in the resolve modal whatever the value of this setting.", "example": true, "type": "boolean" }, "show_before_creation": { "description": "Whether a custom field should be shown in the incident creation modal. This must be true if the field is always required.", "example": true, "type": "boolean" }, "show_before_update": { "description": "Whether a custom field should be shown in the incident update modal.", "example": true, "type": "boolean" }, "show_in_announcement_post": { "description": "Whether a custom field should be shown in the list of fields as part of the announcement post when set.", "example": true, "type": "boolean" } }, "required": ["name", "description", "field_type", "show_before_creation", "show_before_closure", "show_before_update"], "type": "object", "x-ref": "#/components/schemas/CustomFieldsCreatePayloadV1" } } }, "required": true }, "parameters": [] }, "POST /v2/custom_fields": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Which team is impacted by this issue", "field_type": "single_select", "filter_by": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "fixed_filter": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0", "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "name": "Affected Team" }, "schema": { "example": { "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "description": "Which team is impacted by this issue", "field_type": "single_select", "filter_by": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "fixed_filter": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0", "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "name": "Affected Team" }, "properties": { "catalog_type_id": { "description": "For catalog fields, the ID of the associated catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "catalog_type_id" }, "description": { "description": "Description of the custom field", "example": "Which team is impacted by this issue", "type": "string", "key$": "description" }, "field_type": { "description": "Type of custom field", "enum": ["single_select", "multi_select", "text", "link", "numeric"], "example": "single_select", "type": "string", "key$": "field_type" }, "filter_by": { "example": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "properties": { "catalog_attribute_id": { "description": "This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" }, "custom_field_id": { "description": "This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.\n\nWhen this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" } }, "required": ["custom_field_id", "catalog_attribute_id"], "type": "object", "x-ref": "#/components/schemas/CustomFieldFilterByOptionsV2", "key$": "filter_by" }, "fixed_filter": { "example": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "properties": { "catalog_attribute_id": { "description": "This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" }, "values": { "description": "The catalog entry IDs (of the type the attribute points at) that the attribute must reference. The options for this custom field are restricted to entries matching one of these values.", "example": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"], "items": { "example": "abc123", "type": "string" }, "type": "array" } }, "required": ["catalog_attribute_id", "values"], "type": "object", "x-ref": "#/components/schemas/CustomFieldFixedFilterOptionsV2", "key$": "fixed_filter" }, "group_by_catalog_attribute_id": { "description": "For catalog fields, the ID of the attribute used to group catalog entries (if applicable)", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "group_by_catalog_attribute_id" }, "helptext_catalog_attribute_id": { "description": "Which catalog attribute provides helptext for the options", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string", "key$": "helptext_catalog_attribute_id" }, "name": { "description": "Human readable name for the custom field", "example": "Affected Team", "maxLength": 50, "type": "string", "key$": "name" } }, "required": ["name", "description", "field_type"], "type": "object", "x-ref": "#/components/schemas/CustomFieldsCreatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v1/custom_fields": { "protocol": "http", "parameters": [] }, "GET /v2/custom_fields": { "protocol": "http", "parameters": [] }, "GET /v1/custom_fields/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "GET /v2/custom_fields/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v1/custom_fields/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v2/custom_fields/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v1/custom_fields/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Which team is impacted by this issue", "name": "Affected Team", "required": "never", "required_v2": "never", "show_before_closure": true, "show_before_creation": true, "show_before_update": true, "show_in_announcement_post": true }, "schema": { "example": { "description": "Which team is impacted by this issue", "name": "Affected Team", "required": "never", "required_v2": "never", "show_before_closure": true, "show_before_creation": true, "show_before_update": true, "show_in_announcement_post": true }, "properties": { "description": { "description": "Description of the custom field", "example": "Which team is impacted by this issue", "type": "string" }, "name": { "description": "Human readable name for the custom field", "example": "Affected Team", "maxLength": 50, "type": "string" }, "required": { "description": "When this custom field must be set during the incident lifecycle. [DEPRECATED: please use required_v2 instead].", "enum": ["never", "before_closure", "always"], "example": "never", "type": "string" }, "required_v2": { "description": "When this custom field must be set during the incident lifecycle.", "enum": ["never", "before_resolution", "always"], "example": "never", "type": "string" }, "show_before_closure": { "description": "Whether a custom field should be shown in the incident resolve modal. If this custom field is required before resolution, but no value has been set for it, the field will be shown in the resolve modal whatever the value of this setting.", "example": true, "type": "boolean" }, "show_before_creation": { "description": "Whether a custom field should be shown in the incident creation modal. This must be true if the field is always required.", "example": true, "type": "boolean" }, "show_before_update": { "description": "Whether a custom field should be shown in the incident update modal.", "example": true, "type": "boolean" }, "show_in_announcement_post": { "description": "Whether a custom field should be shown in the list of fields as part of the announcement post when set.", "example": true, "type": "boolean" } }, "required": ["name", "description", "show_before_creation", "show_before_closure", "show_before_update"], "type": "object", "x-ref": "#/components/schemas/CustomFieldsUpdatePayloadV1" } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v2/custom_fields/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Which team is impacted by this issue", "filter_by": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "fixed_filter": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0", "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "name": "Affected Team" }, "schema": { "example": { "description": "Which team is impacted by this issue", "filter_by": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "fixed_filter": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "group_by_catalog_attribute_id": "01FCNDV6P870EA6S7TK1DSYDG0", "helptext_catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "name": "Affected Team" }, "properties": { "description": { "description": "Description of the custom field", "example": "Which team is impacted by this issue", "type": "string", "key$": "description" }, "filter_by": { "example": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "custom_field_id": "01H2FW182TAH0NHEVBY34SCAK0" }, "properties": { "catalog_attribute_id": { "description": "This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" }, "custom_field_id": { "description": "This must be the ID of a custom field, which must have values of the same type as the attribute you are filtering by.\n\nWhen this filtering field is set on an incident, the options for this custom field will be filtered to only those with the attribute value that matches the value of the filtering field.", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" } }, "required": ["custom_field_id", "catalog_attribute_id"], "type": "object", "x-ref": "#/components/schemas/CustomFieldFilterByOptionsV2", "key$": "filter_by" }, "fixed_filter": { "example": { "catalog_attribute_id": "01H2FW182TAH0NHEVBY34SCAK0", "values": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"] }, "properties": { "catalog_attribute_id": { "description": "This must be an attribute of the catalog type of this custom field. It must be an attribute that points to another catalog type (so not a plain string, number, or boolean attribute).", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string" }, "values": { "description": "The catalog entry IDs (of the type the attribute points at) that the attribute must reference. The options for this custom field are restricted to entries matching one of these values.", "example": ["01H2FW182TAH0NHEVBY34SCAK0", "01H2FW182TAH0NHEVBY34SCAK1"], "items": { "example": "abc123", "type": "string" }, "type": "array" } }, "required": ["catalog_attribute_id", "values"], "type": "object", "x-ref": "#/components/schemas/CustomFieldFixedFilterOptionsV2", "key$": "fixed_filter" }, "group_by_catalog_attribute_id": { "description": "For catalog fields, the ID of the attribute used to group catalog entries (if applicable)", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "group_by_catalog_attribute_id" }, "helptext_catalog_attribute_id": { "description": "Which catalog attribute provides helptext for the options", "example": "01H2FW182TAH0NHEVBY34SCAK0", "type": "string", "key$": "helptext_catalog_attribute_id" }, "name": { "description": "Human readable name for the custom field", "example": "Affected Team", "maxLength": 50, "type": "string", "key$": "name" } }, "required": ["name", "description"], "type": "object", "x-ref": "#/components/schemas/CustomFieldsUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for the custom field", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const custom_field_ref01_ent = client.CustomField();
        let custom_field_ref01_data = setup.data.new.custom_field['custom_field_ref01'];
        custom_field_ref01_data = (await custom_field_ref01_ent.create(custom_field_ref01_data)).data();
        (0, node_assert_1.default)(null != custom_field_ref01_data.id);
        // LIST
        const custom_field_ref01_match = {};
        const custom_field_ref01_list = (await custom_field_ref01_ent.list(custom_field_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(custom_field_ref01_list, { id: custom_field_ref01_data.id })));
        // UPDATE
        const custom_field_ref01_data_up0 = {};
        custom_field_ref01_data_up0.id = custom_field_ref01_data.id;
        const custom_field_ref01_markdef_up0 = { name: 'catalog_type_id', value: 'Mark01-custom_field_ref01_' + setup.now };
        custom_field_ref01_data_up0[custom_field_ref01_markdef_up0.name] = custom_field_ref01_markdef_up0.value;
        const custom_field_ref01_resdata_up0 = (await custom_field_ref01_ent.update(custom_field_ref01_data_up0)).data();
        (0, node_assert_1.default)(custom_field_ref01_resdata_up0.id === custom_field_ref01_data_up0.id);
        (0, node_assert_1.default)(custom_field_ref01_resdata_up0[custom_field_ref01_markdef_up0.name] === custom_field_ref01_markdef_up0.value);
        // LOAD
        const custom_field_ref01_match_dt0 = {};
        custom_field_ref01_match_dt0.id = custom_field_ref01_data.id;
        const custom_field_ref01_data_dt0 = (await custom_field_ref01_ent.load(custom_field_ref01_match_dt0)).data();
        (0, node_assert_1.default)(custom_field_ref01_data_dt0.id === custom_field_ref01_data.id);
        // REMOVE
        const custom_field_ref01_match_rm0 = { id: custom_field_ref01_data.id };
        await custom_field_ref01_ent.remove(custom_field_ref01_match_rm0);
        // LIST
        const custom_field_ref01_match_rt0 = {};
        const custom_field_ref01_list_rt0 = (await custom_field_ref01_ent.list(custom_field_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(custom_field_ref01_list_rt0, { id: custom_field_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/custom_field/CustomFieldTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['custom_field01', 'custom_field02', 'custom_field03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CUSTOM_FIELD_ENTID'];
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
//# sourceMappingURL=CustomFieldEntity.test.js.map
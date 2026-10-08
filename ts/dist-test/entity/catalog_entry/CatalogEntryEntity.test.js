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
(0, node_test_1.describe)('CatalogEntryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CatalogEntry();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('catalog_entry hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).CatalogEntry().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).CatalogEntry()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CatalogEntry().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().CatalogEntry().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CatalogEntry().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CatalogEntry().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CatalogEntry().list({ "after": 1, "catalog_type_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'catalog_entry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "aliases": { "a": true, "h": "Aliases", "n": "aliases", "op": { "list": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "Optional aliases that can be used to reference this entry", "t": "`$ARRAY`", "key$": "aliases", "index$": 0 }, "archived_at": { "a": true, "fo": "date-time", "h": "Archived At", "n": "archived_at", "r": false, "sh": "When this entry was archived", "t": "`$STRING`", "key$": "archived_at", "index$": 1 }, "attribute_values": { "a": true, "h": "Attribute Values", "n": "attribute_values", "r": true, "sh": "Values of this entry", "t": "`$OBJECT`", "key$": "attribute_values", "index$": 2 }, "catalog_entry": { "a": true, "h": "Catalog Entry", "n": "catalog_entry", "r": true, "t": "`$OBJECT`", "key$": "catalog_entry", "index$": 3 }, "catalog_type": { "a": true, "h": "Catalog Type", "n": "catalog_type", "r": true, "t": "`$OBJECT`", "key$": "catalog_type", "index$": 4 }, "catalog_type_id": { "a": true, "h": "Catalog Type Id", "n": "catalog_type_id", "r": true, "sh": "ID of this catalog type", "t": "`$STRING`", "key$": "catalog_type_id", "index$": 5 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this entry was created", "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "external_id": { "a": true, "h": "External Id", "n": "external_id", "r": false, "sh": "An optional alternative ID for this entry, which is ensured to be unique for the type", "t": "`$STRING`", "key$": "external_id", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "ID of this catalog entry", "t": "`$STRING`", "key$": "id", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name is the human readable name of this entry", "t": "`$STRING`", "key$": "name", "index$": 9 }, "rank": { "a": true, "fo": "int32", "h": "Rank", "n": "rank", "op": { "list": { "req": true, "type": "`$INTEGER`" } }, "r": false, "sh": "When catalog type is ranked, this is used to help order things", "t": "`$INTEGER`", "key$": "rank", "index$": 10 }, "update_attributes": { "a": true, "h": "Update Attributes", "n": "update_attributes", "r": false, "sh": "If provided, only update these attribute_values keys.", "t": "`$ARRAY`", "key$": "update_attributes", "index$": 11 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this entry was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "catalog_entry", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["aliases", "attribute_values", "catalog_type_id", "external_id", "name", "rank"], "co": { "id": "POST /v2/catalog_entries", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/catalog_entries", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "catalog_entries" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 0 }, { "a": true, "bf": ["aliases", "attribute_values", "catalog_type_id", "external_id", "name", "rank"], "co": { "id": "POST /v3/catalog_entries", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v3/catalog_entries", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "catalog_entries" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v3/catalog_entries", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "catalog_type_id", "or": "catalog_type_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "abc123", "k": "query", "n": "identifier", "or": "identifier", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": true, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v3/catalog_entries", "q": { "exist": ["catalog_type_id", "page_size"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "catalog_entries" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entries`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v2/catalog_entries", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "catalog_type_id", "or": "catalog_type_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/catalog_entries", "q": { "exist": ["catalog_type_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "catalog_entries" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entries`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/catalog_entries/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/catalog_entries/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "catalog_entries" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /v3/catalog_entries/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "expand", "or": "expand", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v3/catalog_entries/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "catalog_entries" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["aliases", "attribute_values", "external_id", "name", "rank"], "co": { "id": "PUT /v2/catalog_entries/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/catalog_entries/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "catalog_entries" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 0 }, { "a": true, "bf": ["aliases", "attribute_values", "external_id", "name", "rank", "update_attributes"], "co": { "id": "PUT /v3/catalog_entries/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v3/catalog_entries/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "catalog_entries" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.catalog_entry`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "catalog_entry", "name__orig": "catalog_entry", "Name": "CatalogEntry", "name_": "catalog_entry", "name-": "catalog-entry", "NAME": "CATALOG_ENTRY", "index$": 27 }, { "active": true, "entity": "catalog_entry", "key$": "BasicCatalogEntryFlow", "kind": "basic", "name": "BasicCatalogEntryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "catalog_entry_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "catalog_entry_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "catalog_entry_ref01", "srcdatavar": "catalog_entry_ref01_data", "suffix": "_up0", "textfield": "archived_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-catalog_entry_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "catalog_entry_ref01", "srcdatavar": "catalog_entry_ref01_data", "suffix": "_dt0" }, "m": { "id": "catalog_entry01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-catalog_entry_ref01" } }], "index$": 3 }] }, 'CatalogEntry', { "POST /v2/catalog_entries": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "schema": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "properties": { "aliases": { "description": "Optional aliases that can be used to reference this entry", "example": ["lawrence@incident.io", "lawrence"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "aliases" }, "attribute_values": { "additionalProperties": { "example": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "properties": { "array_value": { "description": "If set, this is the array value of the step parameter", "example": [], "items": {}, "type": "array" }, "value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingValuePayloadV2" } }, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingPayloadV2" }, "description": "Values of this entry", "example": { "abc123": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "type": "object", "key$": "attribute_values" }, "catalog_type_id": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "catalog_type_id" }, "external_id": { "description": "An optional alternative ID for this entry, which is ensured to be unique for the type", "example": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "type": "string", "key$": "external_id" }, "name": { "description": "Name is the human readable name of this entry", "example": "Primary On-call", "type": "string", "key$": "name" }, "rank": { "description": "When catalog type is ranked, this is used to help order things", "example": 3, "format": "int32", "type": "integer", "key$": "rank" } }, "required": ["catalog_type_id", "name", "attribute_values"], "type": "object", "x-ref": "#/components/schemas/CatalogCreateEntryPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "POST /v3/catalog_entries": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123" }], "value": { "literal": "SEV123" } } }, "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "schema": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123" }], "value": { "literal": "SEV123" } } }, "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0", "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "properties": { "aliases": { "description": "Optional aliases that can be used to reference this entry", "example": ["lawrence@incident.io", "lawrence"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "aliases" }, "attribute_values": { "additionalProperties": { "example": { "array_value": [{}], "value": { "literal": "SEV123" } }, "properties": { "array_value": { "description": "If set, this is the array value of the step parameter", "example": [], "items": {}, "type": "array" }, "value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/CatalogEngineParamBindingValuePayloadV3" } }, "type": "object", "x-ref": "#/components/schemas/CatalogEngineParamBindingPayloadV3" }, "description": "Values of this entry", "example": { "abc123": { "array_value": [{}], "value": { "literal": "SEV123" } } }, "type": "object", "key$": "attribute_values" }, "catalog_type_id": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "catalog_type_id" }, "external_id": { "description": "An optional alternative ID for this entry, which is ensured to be unique for the type", "example": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "type": "string", "key$": "external_id" }, "name": { "description": "Name is the human readable name of this entry", "example": "Primary On-call", "type": "string", "key$": "name" }, "rank": { "description": "When catalog type is ranked, this is used to help order things", "example": 3, "format": "int32", "type": "integer", "key$": "rank" } }, "required": ["catalog_type_id", "name", "attribute_values"], "type": "object", "x-ref": "#/components/schemas/CatalogCreateEntryPayloadV3", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v3/catalog_entries": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "catalog_type_id", "required": true, "schema": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "The integer number of records to return", "examples": { "default": { "summary": "default", "value": 25 } }, "in": "query", "name": "page_size", "required": true, "schema": { "default": 25, "description": "The integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 1 }, { "allowEmptyValue": true, "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FDAG4SAP5TYPT98WGR2N7W91" } }, "in": "query", "name": "after", "schema": { "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 2 }, { "allowEmptyValue": true, "description": "If specified, only entries with this identifier will be returned. This will search by ID, external ID, and aliases.\n\nIf 'use name as identifier' is enabled for the catalog type, this will also match on name.", "example": "abc123", "in": "query", "name": "identifier", "schema": { "description": "If specified, only entries with this identifier will be returned. This will search by ID, external ID, and aliases.\n\nIf 'use name as identifier' is enabled for the catalog type, this will also match on name.", "example": "abc123", "type": "string" }, "index$": 3 }] }, "GET /v2/catalog_entries": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "catalog_type_id", "required": true, "schema": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 1 }, { "allowEmptyValue": true, "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "in": "query", "name": "after", "schema": { "description": "An record's ID. This endpoint will return a list of records after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 2 }] }, "GET /v2/catalog_entries/{id}": { "protocol": "http", "parameters": [{ "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "GET /v3/catalog_entries/{id}": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Whether to include details of all attribute links (forwards and backwards) within the response. Default behaviour (no query param) is to include only forward links. When expand is false, we only show attributes of the catalog entry itself.When expand is true, we show forward and backward links", "example": true, "in": "query", "name": "expand", "schema": { "description": "Whether to include details of all attribute links (forwards and backwards) within the response. Default behaviour (no query param) is to include only forward links. When expand is false, we only show attributes of the catalog entry itself.When expand is true, we show forward and backward links", "example": true, "type": "boolean" }, "index$": 0 }, { "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "PUT /v2/catalog_entries/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "schema": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3 }, "properties": { "aliases": { "description": "Optional aliases that can be used to reference this entry", "example": ["lawrence@incident.io", "lawrence"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "aliases" }, "attribute_values": { "additionalProperties": { "example": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } }, "properties": { "array_value": { "description": "If set, this is the array value of the step parameter", "example": [], "items": {}, "type": "array" }, "value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingValuePayloadV2" } }, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingPayloadV2" }, "description": "Values of this entry", "example": { "abc123": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "type": "object", "key$": "attribute_values" }, "external_id": { "description": "An optional alternative ID for this entry, which is ensured to be unique for the type", "example": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "type": "string", "key$": "external_id" }, "name": { "description": "Name is the human readable name of this entry", "example": "Primary On-call", "type": "string", "key$": "name" }, "rank": { "description": "When catalog type is ranked, this is used to help order things", "example": 3, "format": "int32", "type": "integer", "key$": "rank" } }, "required": ["name", "attribute_values"], "type": "object", "x-ref": "#/components/schemas/CatalogUpdateEntryPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v3/catalog_entries/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123" }], "value": { "literal": "SEV123" } } }, "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3, "update_attributes": ["abc123"] }, "schema": { "example": { "aliases": ["lawrence@incident.io", "lawrence"], "attribute_values": { "abc123": { "array_value": [{ "literal": "SEV123" }], "value": { "literal": "SEV123" } } }, "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "name": "Primary On-call", "rank": 3, "update_attributes": ["abc123"] }, "properties": { "aliases": { "description": "Optional aliases that can be used to reference this entry", "example": ["lawrence@incident.io", "lawrence"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "aliases" }, "attribute_values": { "additionalProperties": { "example": { "array_value": [{}], "value": { "literal": "SEV123" } }, "properties": { "array_value": { "description": "If set, this is the array value of the step parameter", "example": [], "items": {}, "type": "array" }, "value": { "example": {}, "properties": {}, "type": "object", "x-ref": "#/components/schemas/CatalogEngineParamBindingValuePayloadV3" } }, "type": "object", "x-ref": "#/components/schemas/CatalogEngineParamBindingPayloadV3" }, "description": "Values of this entry", "example": { "abc123": { "array_value": [{}], "value": { "literal": "SEV123" } } }, "type": "object", "key$": "attribute_values" }, "external_id": { "description": "An optional alternative ID for this entry, which is ensured to be unique for the type", "example": "761722cd-d1d7-477b-ac7e-90f9e079dc33", "type": "string", "key$": "external_id" }, "name": { "description": "Name is the human readable name of this entry", "example": "Primary On-call", "type": "string", "key$": "name" }, "rank": { "description": "When catalog type is ranked, this is used to help order things", "example": 3, "format": "int32", "type": "integer", "key$": "rank" }, "update_attributes": { "description": "If provided, only update these attribute_values keys. If not provided, update all attribute values.\nIf you specify an attribute key that's not in your payload, the associated attribute value will be cleared.", "example": ["abc123"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "update_attributes" } }, "required": ["name", "attribute_values"], "type": "object", "x-ref": "#/components/schemas/CatalogUpdateEntryPayloadV3", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog entry", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const catalog_entry_ref01_ent = client.CatalogEntry();
        let catalog_entry_ref01_data = setup.data.new.catalog_entry['catalog_entry_ref01'];
        catalog_entry_ref01_data = (await catalog_entry_ref01_ent.create(catalog_entry_ref01_data)).data();
        (0, node_assert_1.default)(null != catalog_entry_ref01_data.id);
        // LIST
        const catalog_entry_ref01_match = {};
        const catalog_entry_ref01_list = (await catalog_entry_ref01_ent.list(catalog_entry_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(catalog_entry_ref01_list, { id: catalog_entry_ref01_data.id })));
        // UPDATE
        const catalog_entry_ref01_data_up0 = {};
        catalog_entry_ref01_data_up0.id = catalog_entry_ref01_data.id;
        const catalog_entry_ref01_markdef_up0 = { name: 'archived_at', value: 'Mark01-catalog_entry_ref01_' + setup.now };
        catalog_entry_ref01_data_up0[catalog_entry_ref01_markdef_up0.name] = catalog_entry_ref01_markdef_up0.value;
        const catalog_entry_ref01_resdata_up0 = (await catalog_entry_ref01_ent.update(catalog_entry_ref01_data_up0)).data();
        (0, node_assert_1.default)(catalog_entry_ref01_resdata_up0.id === catalog_entry_ref01_data_up0.id);
        (0, node_assert_1.default)(catalog_entry_ref01_resdata_up0[catalog_entry_ref01_markdef_up0.name] === catalog_entry_ref01_markdef_up0.value);
        // LOAD
        const catalog_entry_ref01_match_dt0 = {};
        catalog_entry_ref01_match_dt0.id = catalog_entry_ref01_data.id;
        const catalog_entry_ref01_data_dt0 = (await catalog_entry_ref01_ent.load(catalog_entry_ref01_match_dt0)).data();
        (0, node_assert_1.default)(catalog_entry_ref01_data_dt0.id === catalog_entry_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/catalog_entry/CatalogEntryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['catalog_entry01', 'catalog_entry02', 'catalog_entry03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CATALOG_ENTRY_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CATALOG_ENTRY_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CATALOG_ENTRY_ENTID'];
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
//# sourceMappingURL=CatalogEntryEntity.test.js.map
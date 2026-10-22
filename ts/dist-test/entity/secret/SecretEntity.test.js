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
(0, node_test_1.describe)('SecretEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.Secret();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('secret hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).Secret().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).Secret()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Secret().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().Secret().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Secret().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Secret().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Secret().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'secret.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Optional description of what this secret is for", "t": "`$STRING`", "key$": "description", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this secret", "t": "`$STRING`", "key$": "id", "index$": 2 }, "last_four_chars": { "a": true, "h": "Last Four Chars", "n": "last_four_chars", "r": false, "sh": "The last four characters of the current value, for masked display.", "t": "`$STRING`", "key$": "last_four_chars", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human-readable name, unique within the organisation amongst unarchived secrets", "t": "`$STRING`", "key$": "name", "index$": 4 }, "owning_team_ids": { "a": true, "h": "Owning Team Ids", "n": "owning_team_ids", "op": { "list": { "req": true, "type": "`$ARRAY`" }, "update": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "IDs of the teams that own this secret.", "t": "`$ARRAY`", "key$": "owning_team_ids", "index$": 5 }, "secret": { "a": true, "h": "Secret", "n": "secret", "r": true, "sh": "A secret is a named credential that workflows can reference, for example an auth token for an outgoing webhook.", "t": "`$OBJECT`", "key$": "secret", "index$": 6 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 7 }, "value": { "a": true, "h": "Value", "n": "value", "r": true, "sh": "The secret's plaintext value.", "t": "`$STRING`", "key$": "value", "index$": 8 }, "version": { "a": true, "fo": "int64", "h": "Version", "n": "version", "r": true, "sh": "The current version number, incremented on each rotation", "t": "`$INTEGER`", "key$": "version", "index$": 9 }, "versions": { "a": true, "h": "Versions", "n": "versions", "r": true, "sh": "The secret's versions, newest first", "t": "`$ARRAY`", "key$": "versions", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "secret", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["value"], "co": { "id": "POST /v2/secrets/{id}/actions/rotate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/secrets/{id}/actions/rotate", "q": { "$action": "action_rotate", "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "secrets" }, { "var": "id" }, { "lit": "actions" }, { "lit": "rotate" }], "t": { "req": "`reqdata`", "res": "`body.secret`" }, "index$": 0 }, { "a": true, "bf": ["description", "name", "owning_team_ids", "value"], "co": { "id": "POST /v2/secrets", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/secrets", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body.secret`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/secrets", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": ["abc123"], "k": "query", "n": "team_id", "or": "team_ids", "r": false, "t": "`$ARRAY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/secrets", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "secrets" }], "t": { "req": "`reqdata`", "res": "`body.secrets`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/secrets/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/secrets/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.secret`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/secrets/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/secrets/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["description", "name", "owning_team_ids"], "co": { "id": "PUT /v2/secrets/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/secrets/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "secrets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.secret`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "secret", "name__orig": "secret", "Name": "Secret", "name_": "secret", "name-": "secret", "NAME": "SECRET", "index$": 78 }, { "active": true, "entity": "secret", "key$": "BasicSecretFlow", "kind": "basic", "name": "BasicSecretFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "secret_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "secret_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "srcdatavar": "secret_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-secret_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "srcdatavar": "secret_ref01_data", "suffix": "_dt0" }, "m": { "id": "secret01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-secret_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "secret_ref01", "suffix": "_rm0" }, "m": { "id": "secret01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "secret_ref01" } }], "index$": 5 }] }, 'Secret', { "POST /v2/secrets/{id}/actions/rotate": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "value": "sk_live_def456" }, "schema": { "example": { "value": "sk_live_def456" }, "properties": { "value": { "description": "The secret's new plaintext value. It's stored encrypted and never returned by the API.", "example": "sk_live_def456", "type": "string" } }, "required": ["value"], "type": "object", "x-ref": "#/components/schemas/SecretsRotatePayloadV2" } } }, "required": true }, "parameters": [{ "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "POST /v2/secrets": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Auth token for the PagerDuty outgoing webhook", "name": "PagerDuty webhook token", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "value": "sk_live_abc123" }, "schema": { "example": { "description": "Auth token for the PagerDuty outgoing webhook", "name": "PagerDuty webhook token", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "value": "sk_live_abc123" }, "properties": { "description": { "description": "Optional description of what this secret is for", "example": "Auth token for the PagerDuty outgoing webhook", "type": "string", "key$": "description" }, "name": { "description": "Human-readable name, unique within the organisation amongst unarchived secrets", "example": "PagerDuty webhook token", "type": "string", "key$": "name" }, "owning_team_ids": { "description": "IDs of the teams that own this secret. When empty or omitted, the secret is owned by the whole organisation.", "example": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "owning_team_ids" }, "value": { "description": "The secret's plaintext value. It's stored encrypted and never returned by the API.", "example": "sk_live_abc123", "type": "string", "key$": "value" } }, "required": ["name", "value"], "type": "object", "x-ref": "#/components/schemas/SecretsCreatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v2/secrets": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A secret's ID. This endpoint will return a list of secrets after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "A secret's ID. This endpoint will return a list of secrets after this ID in relation to the API response order.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Filter to secrets owned by any of these teams", "example": ["abc123"], "in": "query", "name": "team_ids", "schema": { "description": "Filter to secrets owned by any of these teams", "example": ["abc123"], "items": { "example": "abc123", "type": "string" }, "type": "array" }, "index$": 2 }] }, "GET /v2/secrets/{id}": { "protocol": "http", "parameters": [{ "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "DELETE /v2/secrets/{id}": { "protocol": "http", "parameters": [{ "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v2/secrets/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Auth token for the PagerDuty outgoing webhook", "name": "PagerDuty webhook token", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"] }, "schema": { "example": { "description": "Auth token for the PagerDuty outgoing webhook", "name": "PagerDuty webhook token", "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"] }, "properties": { "description": { "description": "Optional description of what this secret is for", "example": "Auth token for the PagerDuty outgoing webhook", "type": "string", "key$": "description" }, "name": { "description": "Human-readable name, unique within the organisation amongst unarchived secrets", "example": "PagerDuty webhook token", "type": "string", "key$": "name" }, "owning_team_ids": { "description": "IDs of the teams that own this secret. When omitted, the existing owning teams are left unchanged.", "example": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "owning_team_ids" } }, "required": ["name"], "type": "object", "x-ref": "#/components/schemas/SecretsUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The secret's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const secret_ref01_ent = client.Secret();
        let secret_ref01_data = setup.data.new.secret['secret_ref01'];
        secret_ref01_data = (await secret_ref01_ent.create(secret_ref01_data)).data();
        (0, node_assert_1.default)(null != secret_ref01_data.id);
        // LIST
        const secret_ref01_match = {};
        const secret_ref01_list = (await secret_ref01_ent.list(secret_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(secret_ref01_list, { id: secret_ref01_data.id })));
        // UPDATE
        const secret_ref01_data_up0 = {};
        secret_ref01_data_up0.id = secret_ref01_data.id;
        const secret_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-secret_ref01_' + setup.now };
        secret_ref01_data_up0[secret_ref01_markdef_up0.name] = secret_ref01_markdef_up0.value;
        const secret_ref01_resdata_up0 = (await secret_ref01_ent.update(secret_ref01_data_up0)).data();
        (0, node_assert_1.default)(secret_ref01_resdata_up0.id === secret_ref01_data_up0.id);
        (0, node_assert_1.default)(secret_ref01_resdata_up0[secret_ref01_markdef_up0.name] === secret_ref01_markdef_up0.value);
        // LOAD
        const secret_ref01_match_dt0 = {};
        secret_ref01_match_dt0.id = secret_ref01_data.id;
        const secret_ref01_data_dt0 = (await secret_ref01_ent.load(secret_ref01_match_dt0)).data();
        (0, node_assert_1.default)(secret_ref01_data_dt0.id === secret_ref01_data.id);
        // REMOVE
        const secret_ref01_match_rm0 = { id: secret_ref01_data.id };
        await secret_ref01_ent.remove(secret_ref01_match_rm0);
        // LIST
        const secret_ref01_match_rt0 = {};
        const secret_ref01_list_rt0 = (await secret_ref01_ent.list(secret_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(secret_ref01_list_rt0, { id: secret_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/secret/SecretTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['secret01', 'secret02', 'secret03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_SECRET_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_SECRET_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_SECRET_ENTID'];
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
//# sourceMappingURL=SecretEntity.test.js.map
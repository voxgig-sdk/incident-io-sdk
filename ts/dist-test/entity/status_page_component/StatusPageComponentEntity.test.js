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
(0, node_test_1.describe)('StatusPageComponentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.StatusPageComponent();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('status_page_component hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).StatusPageComponent().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).StatusPageComponent()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.StatusPageComponent().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().StatusPageComponent().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.StatusPageComponent().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.StatusPageComponent().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.StatusPageComponent().list({ "description": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'status_page_component.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Optional short description of this component", "t": "`$STRING`", "key$": "description", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this component", "t": "`$STRING`", "key$": "id", "index$": 1 }, "management_meta": { "a": true, "h": "Management Meta", "n": "management_meta", "r": true, "t": "`$OBJECT`", "key$": "management_meta", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human-readable name for the component", "t": "`$STRING`", "key$": "name", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "status_page_component", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["description", "name"], "co": { "id": "POST /v2/status_page_components", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/status_page_components", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_components" }], "t": { "req": "`reqdata`", "res": "`body.status_page_component`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/status_page_components", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/v2/status_page_components", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_components" }], "t": { "req": "`reqdata`", "res": "`body.status_page_components`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/status_page_components/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG1", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/status_page_components/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_components" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.status_page_component`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/status_page_components/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG1", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/status_page_components/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "status_page_components" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["description", "name"], "co": { "id": "PUT /v2/status_page_components/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG1", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/status_page_components/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_components" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.status_page_component`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "status_page_component", "name__orig": "status_page_component", "Name": "StatusPageComponent", "name_": "status_page_component", "name-": "status-page-component", "NAME": "STATUS_PAGE_COMPONENT", "index$": 95 }, { "active": true, "entity": "status_page_component", "key$": "BasicStatusPageComponentFlow", "kind": "basic", "name": "BasicStatusPageComponentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "status_page_component_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "status_page_component_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "status_page_component_ref01", "srcdatavar": "status_page_component_ref01_data", "suffix": "_up0", "textfield": "description" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-status_page_component_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "status_page_component_ref01", "srcdatavar": "status_page_component_ref01_data", "suffix": "_dt0" }, "m": { "id": "status_page_component01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-status_page_component_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "status_page_component_ref01", "suffix": "_rm0" }, "m": { "id": "status_page_component01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "status_page_component_ref01" } }], "index$": 5 }] }, 'StatusPageComponent', { "POST /v2/status_page_components": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Our iOS app", "name": "App" }, "schema": { "example": { "description": "Our iOS app", "name": "App" }, "properties": { "description": { "description": "Optional short description of this component", "example": "Our iOS app", "type": "string", "key$": "description" }, "name": { "description": "Human-readable name for the component", "example": "App", "type": "string", "key$": "name" } }, "required": ["name"], "type": "object", "x-ref": "#/components/schemas/StatusPageComponentsCreatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v2/status_page_components": { "protocol": "http", "parameters": [] }, "GET /v2/status_page_components/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "type": "string" }, "index$": 0 }] }, "DELETE /v2/status_page_components/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "type": "string" }, "index$": 0 }] }, "PUT /v2/status_page_components/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "description": "Our iOS app", "name": "App" }, "schema": { "example": { "description": "Our iOS app", "name": "App" }, "properties": { "description": { "description": "Optional short description of this component", "example": "Our iOS app", "type": "string", "key$": "description" }, "name": { "description": "Human-readable name for the component", "example": "App", "type": "string", "key$": "name" } }, "required": ["name"], "type": "object", "x-ref": "#/components/schemas/StatusPageComponentsUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier of the status page component", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const status_page_component_ref01_ent = client.StatusPageComponent();
        let status_page_component_ref01_data = setup.data.new.status_page_component['status_page_component_ref01'];
        status_page_component_ref01_data = (await status_page_component_ref01_ent.create(status_page_component_ref01_data)).data();
        (0, node_assert_1.default)(null != status_page_component_ref01_data.id);
        // LIST
        const status_page_component_ref01_match = {};
        const status_page_component_ref01_list = (await status_page_component_ref01_ent.list(status_page_component_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(status_page_component_ref01_list, { id: status_page_component_ref01_data.id })));
        // UPDATE
        const status_page_component_ref01_data_up0 = {};
        status_page_component_ref01_data_up0.id = status_page_component_ref01_data.id;
        const status_page_component_ref01_markdef_up0 = { name: 'description', value: 'Mark01-status_page_component_ref01_' + setup.now };
        status_page_component_ref01_data_up0[status_page_component_ref01_markdef_up0.name] = status_page_component_ref01_markdef_up0.value;
        const status_page_component_ref01_resdata_up0 = (await status_page_component_ref01_ent.update(status_page_component_ref01_data_up0)).data();
        (0, node_assert_1.default)(status_page_component_ref01_resdata_up0.id === status_page_component_ref01_data_up0.id);
        (0, node_assert_1.default)(status_page_component_ref01_resdata_up0[status_page_component_ref01_markdef_up0.name] === status_page_component_ref01_markdef_up0.value);
        // LOAD
        const status_page_component_ref01_match_dt0 = {};
        status_page_component_ref01_match_dt0.id = status_page_component_ref01_data.id;
        const status_page_component_ref01_data_dt0 = (await status_page_component_ref01_ent.load(status_page_component_ref01_match_dt0)).data();
        (0, node_assert_1.default)(status_page_component_ref01_data_dt0.id === status_page_component_ref01_data.id);
        // REMOVE
        const status_page_component_ref01_match_rm0 = { id: status_page_component_ref01_data.id };
        await status_page_component_ref01_ent.remove(status_page_component_ref01_match_rm0);
        // LIST
        const status_page_component_ref01_match_rt0 = {};
        const status_page_component_ref01_list_rt0 = (await status_page_component_ref01_ent.list(status_page_component_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(status_page_component_ref01_list_rt0, { id: status_page_component_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/status_page_component/StatusPageComponentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['status_page_component01', 'status_page_component02', 'status_page_component03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_COMPONENT_ENTID'];
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
//# sourceMappingURL=StatusPageComponentEntity.test.js.map
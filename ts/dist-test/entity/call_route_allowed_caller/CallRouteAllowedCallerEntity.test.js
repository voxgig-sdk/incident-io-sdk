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
(0, node_test_1.describe)('CallRouteAllowedCallerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CallRouteAllowedCaller();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CallRouteAllowedCaller().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['update', 'load', 'remove', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'call_route_allowed_caller.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this allowed caller", "t": "`$STRING`", "key$": "id", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Label for whose number this is", "t": "`$STRING`", "key$": "name", "index$": 1 }, "phone_number": { "a": true, "h": "Phone Number", "n": "phone_number", "r": true, "sh": "The number allowed to call this route, in international format", "t": "`$STRING`", "key$": "phone_number", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "call_route_allowed_caller", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["name", "phone_number"], "co": { "id": "POST /v2/call_routes/{call_route_id}/allowed_callers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "call_route_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/call_routes/{call_route_id}/allowed_callers", "q": { "exist": ["id"] }, "r": { "param": { "call_route_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "id" }, { "lit": "allowed_callers" }], "t": { "req": "`reqdata`", "res": "`body.allowed_caller`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/call_routes/{call_route_id}/allowed_callers", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "call_route_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/call_routes/{call_route_id}/allowed_callers", "q": { "exist": ["id"] }, "r": { "param": { "call_route_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "id" }, { "lit": "allowed_callers" }], "t": { "req": "`reqdata`", "res": "`body.allowed_callers`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/call_routes/{call_route_id}/allowed_callers/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "call_route_id", "or": "call_route_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/call_routes/{call_route_id}/allowed_callers/{id}", "q": { "exist": ["call_route_id", "id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "call_route_id" }, { "lit": "allowed_callers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.allowed_caller`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/call_routes/{call_route_id}/allowed_callers/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "call_route_id", "or": "call_route_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v2/call_routes/{call_route_id}/allowed_callers/{id}", "q": { "exist": ["call_route_id", "id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "call_route_id" }, { "lit": "allowed_callers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["name", "phone_number"], "co": { "id": "PUT /v2/call_routes/{call_route_id}/allowed_callers/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "call_route_id", "or": "call_route_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/v2/call_routes/{call_route_id}/allowed_callers/{id}", "q": { "exist": ["call_route_id", "id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "call_route_id" }, { "lit": "allowed_callers" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.allowed_caller`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.call_route"]] }, "key$": "call_route_allowed_caller", "name__orig": "call_route_allowed_caller", "Name": "CallRouteAllowedCaller", "name_": "call_route_allowed_caller", "name-": "call-route-allowed-caller", "NAME": "CALL_ROUTE_ALLOWED_CALLER", "index$": 15 }, { "active": true, "entity": "call_route_allowed_caller", "key$": "BasicCallRouteAllowedCallerFlow", "kind": "basic", "name": "BasicCallRouteAllowedCallerFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "call_route_allowed_caller_ref01" }, "m": { "call_route_id": "call_route01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": {}, "m": { "call_route_id": "call_route01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "call_route_allowed_caller_ref01" } }], "unreachable": true }, { "a": true, "d": { "call_route_id": "call_route01" }, "i": { "ref": "call_route_allowed_caller_ref01", "srcdatavar": "call_route_allowed_caller_ref01_data", "suffix": "_up0", "textfield": "name" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-call_route_allowed_caller_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "call_route_allowed_caller_ref01", "srcdatavar": "call_route_allowed_caller_ref01_data", "suffix": "_dt0" }, "m": { "call_route_id": "call_route01", "id": "call_route_allowed_caller01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-call_route_allowed_caller_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "call_route_allowed_caller_ref01", "suffix": "_rm0" }, "m": { "call_route_id": "call_route01", "id": "call_route_allowed_caller01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "call_route_id": "call_route01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "call_route_allowed_caller_ref01" } }], "index$": 3 }] }, 'CallRouteAllowedCaller', { "POST /v2/call_routes/{call_route_id}/allowed_callers": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "name": "Regulator duty desk", "phone_number": "+15551234567" }, "schema": { "example": { "name": "Regulator duty desk", "phone_number": "+15551234567" }, "properties": { "name": { "description": "Label for whose number this is", "example": "Regulator duty desk", "type": "string", "key$": "name" }, "phone_number": { "description": "The number to allow, in international format", "example": "+15551234567", "type": "string", "key$": "phone_number" } }, "required": ["phone_number"], "type": "object", "x-ref": "#/components/schemas/CallRoutesCreateAllowedCallerPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The call route to allow this number to call", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "call_route_id", "required": true, "schema": { "description": "The call route to allow this number to call", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "GET /v2/call_routes/{call_route_id}/allowed_callers": { "protocol": "http", "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "call_route_id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "GET /v2/call_routes/{call_route_id}/allowed_callers/{id}": { "protocol": "http", "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "call_route_id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }, { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "DELETE /v2/call_routes/{call_route_id}/allowed_callers/{id}": { "protocol": "http", "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "call_route_id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }, { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "PUT /v2/call_routes/{call_route_id}/allowed_callers/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "name": "Regulator duty desk", "phone_number": "+15551234567" }, "schema": { "example": { "name": "Regulator duty desk", "phone_number": "+15551234567" }, "properties": { "name": { "description": "Label for whose number this is", "example": "Regulator duty desk", "type": "string", "key$": "name" }, "phone_number": { "description": "The number to allow, in international format", "example": "+15551234567", "type": "string", "key$": "phone_number" } }, "required": ["phone_number"], "type": "object", "x-ref": "#/components/schemas/CallRoutesUpdateAllowedCallerPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "call_route_id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }, { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The allowed caller's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let call_route_allowed_caller_ref01_data = Object.values(setup.data.existing.call_route_allowed_caller)[0];
        // UPDATE
        const call_route_allowed_caller_ref01_ent = client.CallRouteAllowedCaller();
        const call_route_allowed_caller_ref01_data_up0 = {};
        call_route_allowed_caller_ref01_data_up0.id = call_route_allowed_caller_ref01_data.id;
        call_route_allowed_caller_ref01_data_up0['call_route_id'] = setup.idmap['call_route_id'] ?? setup.idmap['call_route01'];
        const call_route_allowed_caller_ref01_markdef_up0 = { name: 'name', value: 'Mark01-call_route_allowed_caller_ref01_' + setup.now };
        call_route_allowed_caller_ref01_data_up0[call_route_allowed_caller_ref01_markdef_up0.name] = call_route_allowed_caller_ref01_markdef_up0.value;
        const call_route_allowed_caller_ref01_resdata_up0 = (await call_route_allowed_caller_ref01_ent.update(call_route_allowed_caller_ref01_data_up0)).data();
        (0, node_assert_1.default)(call_route_allowed_caller_ref01_resdata_up0.id === call_route_allowed_caller_ref01_data_up0.id);
        (0, node_assert_1.default)(call_route_allowed_caller_ref01_resdata_up0[call_route_allowed_caller_ref01_markdef_up0.name] === call_route_allowed_caller_ref01_markdef_up0.value);
        // LOAD
        const call_route_allowed_caller_ref01_match_dt0 = {};
        call_route_allowed_caller_ref01_match_dt0.id = call_route_allowed_caller_ref01_data.id;
        call_route_allowed_caller_ref01_match_dt0['call_route_id'] = setup.idmap['call_route_id'] ?? setup.idmap['call_route01'];
        const call_route_allowed_caller_ref01_data_dt0 = (await call_route_allowed_caller_ref01_ent.load(call_route_allowed_caller_ref01_match_dt0)).data();
        (0, node_assert_1.default)(call_route_allowed_caller_ref01_data_dt0.id === call_route_allowed_caller_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/call_route_allowed_caller/CallRouteAllowedCallerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['call_route_allowed_caller01', 'call_route_allowed_caller02', 'call_route_allowed_caller03', 'call_route01', 'call_route02', 'call_route03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CALL_ROUTE_ALLOWED_CALLER_ENTID'];
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
//# sourceMappingURL=CallRouteAllowedCallerEntity.test.js.map
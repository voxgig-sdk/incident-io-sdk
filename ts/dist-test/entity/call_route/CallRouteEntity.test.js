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
(0, node_test_1.describe)('CallRouteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CallRoute();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('call_route hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).CallRoute().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).CallRoute()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CallRoute().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().CallRoute().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CallRoute().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CallRoute().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CallRoute().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'call_route.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowed_callers": { "a": true, "h": "Allowed Callers", "n": "allowed_callers", "r": true, "sh": "The numbers allowed to call this route.", "t": "`$ARRAY`", "key$": "allowed_callers", "index$": 0 }, "country_code": { "a": true, "h": "Country Code", "n": "country_code", "r": false, "sh": "The country this route's number belongs to", "t": "`$STRING`", "key$": "country_code", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "current_state": { "a": true, "h": "Current State", "n": "current_state", "r": true, "sh": "Where this route is in provisioning.", "t": "`$STRING`", "key$": "current_state", "index$": 3 }, "custom_language": { "a": true, "h": "Custom Language", "n": "custom_language", "r": true, "sh": "The language we speak voice prompts in, via text-to-speech", "t": "`$STRING`", "key$": "custom_language", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this call route", "t": "`$STRING`", "key$": "id", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name for this call route", "t": "`$STRING`", "key$": "name", "index$": 6 }, "options": { "a": true, "h": "Options", "n": "options", "r": true, "sh": "The phone-tree menu this route presents.", "t": "`$ARRAY`", "key$": "options", "index$": 7 }, "path": { "a": true, "h": "Path", "n": "path", "r": true, "sh": "Who we page when a call comes in.", "t": "`$ARRAY`", "key$": "path", "index$": 8 }, "phone_number": { "a": true, "h": "Phone Number", "n": "phone_number", "r": false, "sh": "The number your customers call to reach this route, once one has been provisioned", "t": "`$STRING`", "key$": "phone_number", "index$": 9 }, "phone_number_type": { "a": true, "h": "Phone Number Type", "n": "phone_number_type", "r": false, "sh": "The type of phone number, which determines the regulatory requirements for provisioning it", "t": "`$STRING`", "key$": "phone_number_type", "index$": 10 }, "responder_caller_id": { "a": true, "h": "Responder Caller Id", "n": "responder_caller_id", "r": true, "sh": "Which number responders see when we call them: * route_number: this route's own number * oncall_number: an incident.io on-call number", "t": "`$STRING`", "key$": "responder_caller_id", "index$": 11 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 12 }, "use_caller_allowlist": { "a": true, "h": "Use Caller Allowlist", "n": "use_caller_allowlist", "r": true, "sh": "Whether this route only answers calls from its allowed callers", "t": "`$BOOLEAN`", "key$": "use_caller_allowlist", "index$": 13 } }, "id": { "field": "id", "name": "id" }, "name": "call_route", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/call_routes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/call_routes", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }], "t": { "req": "`reqdata`", "res": "`body.call_routes`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/call_routes/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/call_routes/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.call_route`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["custom_language", "name", "path", "responder_caller_id", "use_caller_allowlist"], "co": { "id": "PUT /v2/call_routes/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/call_routes/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_routes" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.call_route`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "call_route", "name__orig": "call_route", "Name": "CallRoute", "name_": "call_route", "name-": "call-route", "NAME": "CALL_ROUTE", "index$": 15 }, { "active": true, "entity": "call_route", "key$": "BasicCallRouteFlow", "kind": "basic", "name": "BasicCallRouteFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "call_route_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "call_route_ref01", "srcdatavar": "call_route_ref01_data", "suffix": "_up0", "textfield": "country_code" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-call_route_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "call_route_ref01", "srcdatavar": "call_route_ref01_data", "suffix": "_dt0" }, "m": { "id": "call_route01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-call_route_ref01" } }], "index$": 2 }] }, 'CallRoute', { "GET /v2/call_routes": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A call route's ID. This endpoint will return a list of call routes after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "A call route's ID. This endpoint will return a list of call routes after this ID in relation to the API response order.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }] }, "GET /v2/call_routes/{id}": { "protocol": "http", "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "PUT /v2/call_routes/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "custom_language": "en-US", "name": "Regulator urgent request", "path": [{ "id": "01FCNDV6P870EA6S7TK1DSYDG0", "level": { "targets": [{ "id": "lawrencejones", "schedule_mode": "currently_on_call", "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "schedule", "urgency": "high" }] }, "type": "level", "voicemail": { "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded." } }], "responder_caller_id": "route_number", "use_caller_allowlist": true }, "schema": { "example": { "custom_language": "en-US", "name": "Regulator urgent request", "path": [{ "id": "01FCNDV6P870EA6S7TK1DSYDG0", "level": { "targets": [{}] }, "type": "level", "voicemail": { "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded." } }], "responder_caller_id": "route_number", "use_caller_allowlist": true }, "properties": { "custom_language": { "description": "The language we speak voice prompts in, via text-to-speech", "enum": ["en-US", "en-GB", "fr-FR", "es-ES", "pt-PT", "pt-BR", "de-DE", "nl-NL"], "example": "en-US", "type": "string", "key$": "custom_language" }, "name": { "description": "Name for this call route", "example": "Regulator urgent request", "type": "string", "key$": "name" }, "path": { "description": "Who to page when a call comes in. Retires any phone-tree menu on the route; send an empty list to keep the menu.", "example": [{ "id": "01FCNDV6P870EA6S7TK1DSYDG0", "level": { "targets": [] }, "type": "level", "voicemail": { "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded." } }], "items": { "example": { "id": "01FCNDV6P870EA6S7TK1DSYDG0", "level": { "targets": [] }, "type": "level", "voicemail": { "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded." } }, "properties": { "id": { "description": "Unique identifier for this node. Omit it and we'll generate one.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "level": { "description": "The targets a level pages.\n\nWe call each target for 30 seconds, rotating to the next after 60 seconds, and\nmove to the next node if nobody acknowledges within 5 minutes. Those timings are\nfixed for call routes.", "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/CallRoutePathNodeLevelV2" }, "type": { "description": "The type of this node. Available types are:\n* level: page a set of targets, rotating between them\n* voicemail: record a message from the caller", "enum": [], "example": "level", "type": "string" }, "voicemail": { "description": "Records a message from the caller, and enriches the resulting alert with the transcript.", "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/CallRoutePathNodeVoicemailV2" } }, "required": ["type"], "type": "object", "x-ref": "#/components/schemas/CallRoutePathNodePayloadV2" }, "type": "array", "key$": "path" }, "responder_caller_id": { "description": "Which number responders see when we call them:\n* route_number: this route's own number\n* oncall_number: an incident.io on-call number", "enum": ["route_number", "oncall_number"], "example": "route_number", "type": "string", "key$": "responder_caller_id" }, "use_caller_allowlist": { "description": "Whether to only answer calls from this route's allowed callers. Needs at least one allowed caller.", "example": true, "type": "boolean", "key$": "use_caller_allowlist" } }, "required": ["name", "custom_language", "responder_caller_id", "use_caller_allowlist", "path"], "type": "object", "x-ref": "#/components/schemas/CallRoutesUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "The call route's ID", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let call_route_ref01_data = Object.values(setup.data.existing.call_route)[0];
        // LIST
        const call_route_ref01_ent = client.CallRoute();
        const call_route_ref01_match = {};
        const call_route_ref01_list = (await call_route_ref01_ent.list(call_route_ref01_match)).map((e) => e.data());
        // UPDATE
        const call_route_ref01_data_up0 = {};
        call_route_ref01_data_up0.id = call_route_ref01_data.id;
        const call_route_ref01_markdef_up0 = { name: 'country_code', value: 'Mark01-call_route_ref01_' + setup.now };
        call_route_ref01_data_up0[call_route_ref01_markdef_up0.name] = call_route_ref01_markdef_up0.value;
        const call_route_ref01_resdata_up0 = (await call_route_ref01_ent.update(call_route_ref01_data_up0)).data();
        (0, node_assert_1.default)(call_route_ref01_resdata_up0.id === call_route_ref01_data_up0.id);
        (0, node_assert_1.default)(call_route_ref01_resdata_up0[call_route_ref01_markdef_up0.name] === call_route_ref01_markdef_up0.value);
        // LOAD
        const call_route_ref01_match_dt0 = {};
        call_route_ref01_match_dt0.id = call_route_ref01_data.id;
        const call_route_ref01_data_dt0 = (await call_route_ref01_ent.load(call_route_ref01_match_dt0)).data();
        (0, node_assert_1.default)(call_route_ref01_data_dt0.id === call_route_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/call_route/CallRouteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['call_route01', 'call_route02', 'call_route03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CALL_ROUTE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CALL_ROUTE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CALL_ROUTE_ENTID'];
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
//# sourceMappingURL=CallRouteEntity.test.js.map
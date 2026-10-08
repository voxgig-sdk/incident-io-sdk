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
(0, node_test_1.describe)('CallTranscriptEntryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CallTranscriptEntry();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('call_transcript_entry hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).CallTranscriptEntry().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).CallTranscriptEntry()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.CallTranscriptEntry().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().CallTranscriptEntry().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.CallTranscriptEntry().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.CallTranscriptEntry().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CallTranscriptEntry().list({ "after": 1, "call_session_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'call_transcript_entry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "What was said", "t": "`$STRING`", "key$": "content", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this transcript entry", "t": "`$STRING`", "key$": "id", "index$": 1 }, "medium": { "a": true, "h": "Medium", "n": "medium", "r": true, "sh": "Whether this entry was spoken aloud or sent as an in-call chat message", "t": "`$STRING`", "key$": "medium", "index$": 2 }, "participant_name": { "a": true, "h": "Participant Name", "n": "participant_name", "r": true, "sh": "Name of the participant who spoke or sent the message, as reported by the call provider", "t": "`$STRING`", "key$": "participant_name", "index$": 3 }, "timestamp": { "a": true, "fo": "date-time", "h": "Timestamp", "n": "timestamp", "r": true, "sh": "When the participant started speaking", "t": "`$STRING`", "key$": "timestamp", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "call_transcript_entry", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/call_transcript_entries", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "call_session_id", "or": "call_session_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/call_transcript_entries", "q": { "exist": ["call_session_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "call_transcript_entries" }], "t": { "req": "`reqdata`", "res": "`body.call_transcript_entries`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "call_transcript_entry", "name__orig": "call_transcript_entry", "Name": "CallTranscriptEntry", "name_": "call_transcript_entry", "name-": "call-transcript-entry", "NAME": "CALL_TRANSCRIPT_ENTRY", "index$": 26 }, { "active": true, "entity": "call_transcript_entry", "key$": "BasicCallTranscriptEntryFlow", "kind": "basic", "name": "BasicCallTranscriptEntryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "call_transcript_entry_ref01" } }], "index$": 0 }] }, 'CallTranscriptEntry', { "GET /v2/call_transcript_entries": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A transcript entry's ID. This endpoint will return a list of entries after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "A transcript entry's ID. This endpoint will return a list of entries after this ID in relation to the API response order.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Call session whose transcript entries you want to list", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "query", "name": "call_session_id", "required": true, "schema": { "description": "Call session whose transcript entries you want to list", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let call_transcript_entry_ref01_data = Object.values(setup.data.existing.call_transcript_entry)[0];
        // LIST
        const call_transcript_entry_ref01_ent = client.CallTranscriptEntry();
        const call_transcript_entry_ref01_match = {};
        const call_transcript_entry_ref01_list = (await call_transcript_entry_ref01_ent.list(call_transcript_entry_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/call_transcript_entry/CallTranscriptEntryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['call_transcript_entry01', 'call_transcript_entry02', 'call_transcript_entry03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CALL_TRANSCRIPT_ENTRY_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CALL_TRANSCRIPT_ENTRY_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CALL_TRANSCRIPT_ENTRY_ENTID'];
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
//# sourceMappingURL=CallTranscriptEntryEntity.test.js.map
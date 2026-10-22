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
(0, node_test_1.describe)('IncidentActivityLogEntryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.IncidentActivityLogEntry();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('incident_activity_log_entry hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).IncidentActivityLogEntry().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).IncidentActivityLogEntry()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.IncidentActivityLogEntry().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().IncidentActivityLogEntry().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.IncidentActivityLogEntry().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.IncidentActivityLogEntry().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IncidentActivityLogEntry().list({ "after": 1, "incident_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'incident_activity_log_entry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Details of an activity log entry.", "t": "`$OBJECT`", "key$": "content", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When we recorded the activity", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier of the activity log entry", "t": "`$STRING`", "key$": "id", "index$": 2 }, "incident_id": { "a": true, "h": "Incident Id", "n": "incident_id", "r": true, "sh": "ID of the incident this happened on.", "t": "`$STRING`", "key$": "incident_id", "index$": 3 }, "occurred_at": { "a": true, "fo": "date-time", "h": "Occurred At", "n": "occurred_at", "r": true, "sh": "When the activity happened.", "t": "`$STRING`", "key$": "occurred_at", "index$": 4 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Human-readable summary of what happened", "t": "`$STRING`", "key$": "title", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "What kind of activity this is.", "t": "`$STRING`", "key$": "type", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "incident_activity_log_entry", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/incident_activity_log_entries", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": ["01FCNDV6P870EA6S7TK1DSYDG0", "01FCNDV6P870EA6S7TK1DSYDG1"], "k": "query", "n": "id", "or": "id", "r": false, "t": "`$ARRAY`", "index$": 1 }, { "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "query", "n": "incident_id", "or": "incident_id", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v2/incident_activity_log_entries", "q": { "exist": ["incident_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "incident_activity_log_entries" }], "t": { "req": "`reqdata`", "res": "`body.incident_activity_log_entries`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "incident_activity_log_entry", "name__orig": "incident_activity_log_entry", "Name": "IncidentActivityLogEntry", "name_": "incident_activity_log_entry", "name-": "incident-activity-log-entry", "NAME": "INCIDENT_ACTIVITY_LOG_ENTRY", "index$": 39 }, { "active": true, "entity": "incident_activity_log_entry", "key$": "BasicIncidentActivityLogEntryFlow", "kind": "basic", "name": "BasicIncidentActivityLogEntryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "incident_activity_log_entry_ref01" } }], "index$": 0 }] }, 'IncidentActivityLogEntry', { "GET /v2/incident_activity_log_entries": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Incident whose activity you want to list", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "query", "name": "incident_id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "Return only the entries with these IDs", "example": ["01FCNDV6P870EA6S7TK1DSYDG0", "01FCNDV6P870EA6S7TK1DSYDG1"], "in": "query", "name": "id", "schema": { "description": "Return only the entries with these IDs", "example": ["01FCNDV6P870EA6S7TK1DSYDG0", "01FCNDV6P870EA6S7TK1DSYDG1"], "items": { "example": "abc123", "type": "string" }, "maxItems": 100, "type": "array" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 2 }, { "allowEmptyValue": true, "description": "An entry's ID. This endpoint returns the entries that follow it.", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "query", "name": "after", "schema": { "description": "An entry's ID. This endpoint returns the entries that follow it.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let incident_activity_log_entry_ref01_data = Object.values(setup.data.existing.incident_activity_log_entry)[0];
        // LIST
        const incident_activity_log_entry_ref01_ent = client.IncidentActivityLogEntry();
        const incident_activity_log_entry_ref01_match = {};
        const incident_activity_log_entry_ref01_list = (await incident_activity_log_entry_ref01_ent.list(incident_activity_log_entry_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/incident_activity_log_entry/IncidentActivityLogEntryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['incident_activity_log_entry01', 'incident_activity_log_entry02', 'incident_activity_log_entry03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_INCIDENT_ACTIVITY_LOG_ENTRY_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_INCIDENT_ACTIVITY_LOG_ENTRY_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_ACTIVITY_LOG_ENTRY_ENTID'];
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
//# sourceMappingURL=IncidentActivityLogEntryEntity.test.js.map
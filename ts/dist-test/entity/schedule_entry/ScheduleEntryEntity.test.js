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
(0, node_test_1.describe)('ScheduleEntryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.ScheduleEntry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ScheduleEntry().load({ "entry_window_end": 1, "schedule_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'schedule_entry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "pagination_meta": { "a": true, "h": "Pagination Meta", "n": "pagination_meta", "r": true, "t": "`$OBJECT`", "key$": "pagination_meta", "index$": 0 }, "schedule_entries": { "a": true, "h": "Schedule Entries", "n": "schedule_entries", "r": true, "sh": "The schedule entries for a window of time, grouped by where they come from.", "t": "`$OBJECT`", "key$": "schedule_entries", "index$": 1 } }, "name": "schedule_entry", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/schedule_entries", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "2021-01-01T00:00:00Z", "k": "query", "n": "entry_window_end", "or": "entry_window_end", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "2021-01-01T00:00:00Z", "k": "query", "n": "entry_window_start", "or": "entry_window_start", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "schedule_id", "or": "schedule_id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v2/schedule_entries", "q": { "exist": ["schedule_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "schedule_entries" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "schedule_entry", "name__orig": "schedule_entry", "Name": "ScheduleEntry", "name_": "schedule_entry", "name-": "schedule-entry", "NAME": "SCHEDULE_ENTRY", "index$": 82 }, { "active": true, "entity": "schedule_entry", "key$": "BasicScheduleEntryFlow", "kind": "basic", "name": "BasicScheduleEntryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "schedule_entry_ref01", "srcdatavar": "schedule_entry_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-schedule_entry_ref01" } }], "index$": 0 }] }, 'ScheduleEntry', { "GET /v2/schedule_entries": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "The ID of the schedule to get entries for.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "in": "query", "name": "schedule_id", "required": true, "schema": { "description": "The ID of the schedule to get entries for.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "The start of the window to get entries for. May also carry an opaque pagination cursor previously returned in `pagination_meta.after` — pass it back here unchanged to fetch the next page (leave `entry_window_end` unchanged from the original request).", "example": "2021-01-01T00:00:00Z", "in": "query", "name": "entry_window_start", "schema": { "description": "The start of the window to get entries for. May also carry an opaque pagination cursor previously returned in `pagination_meta.after` — pass it back here unchanged to fetch the next page (leave `entry_window_end` unchanged from the original request).", "example": "2021-01-01T00:00:00Z", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "The end of the window to get entries for.", "example": "2021-01-01T00:00:00Z", "in": "query", "name": "entry_window_end", "schema": { "description": "The end of the window to get entries for.", "example": "2021-01-01T00:00:00Z", "format": "date-time", "type": "string" }, "index$": 2 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let schedule_entry_ref01_data = Object.values(setup.data.existing.schedule_entry)[0];
        // LOAD
        const schedule_entry_ref01_ent = client.ScheduleEntry();
        const schedule_entry_ref01_match_dt0 = {};
        const schedule_entry_ref01_data_dt0 = (await schedule_entry_ref01_ent.load(schedule_entry_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != schedule_entry_ref01_data_dt0);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/schedule_entry/ScheduleEntryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['schedule_entry01', 'schedule_entry02', 'schedule_entry03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_SCHEDULE_ENTRY_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_SCHEDULE_ENTRY_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_ENTRY_ENTID'];
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
//# sourceMappingURL=ScheduleEntryEntity.test.js.map
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
(0, node_test_1.describe)('PayReportsUnpublishResultV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.PayReportsUnpublishResultV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PayReportsUnpublishResultV2().create({ "pay_report_id": 1, "created_at": "x", "end_date": "x", "id": "x", "name": "x", "overlapping_shifts": "x", "schedule_ids": "x", "start_date": "x", "status": "x", "unpaid_shifts": "x", "unpublish_reason": "x", "updated_at": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pay_reports_unpublish_result_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this report was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": false, "t": "`$OBJECT`", "key$": "creator", "index$": 1 }, "end_date": { "a": true, "h": "End Date", "n": "end_date", "r": true, "sh": "Last date (YYYY-MM-DD) this report includes shifts from, inclusive", "t": "`$STRING`", "key$": "end_date", "index$": 2 }, "error_code": { "a": true, "h": "Error Code", "n": "error_code", "r": false, "sh": "Why a report could not be generated", "t": "`$STRING`", "key$": "error_code", "index$": 3 }, "error_message": { "a": true, "h": "Error Message", "n": "error_message", "r": false, "sh": "What went wrong, written for whoever asked for the report.", "t": "`$STRING`", "key$": "error_message", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this pay report", "t": "`$STRING`", "key$": "id", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human readable name for this report", "t": "`$STRING`", "key$": "name", "index$": 6 }, "overlapping_shifts": { "a": true, "h": "Overlapping Shifts", "n": "overlapping_shifts", "r": true, "sh": "How time spent on more than one schedule at once was paid", "t": "`$STRING`", "key$": "overlapping_shifts", "index$": 7 }, "published_at": { "a": true, "fo": "date-time", "h": "Published At", "n": "published_at", "r": false, "sh": "When this report was published.", "t": "`$STRING`", "key$": "published_at", "index$": 8 }, "schedule_ids": { "a": true, "h": "Schedule Ids", "n": "schedule_ids", "r": true, "sh": "The schedules this report covers", "t": "`$ARRAY`", "key$": "schedule_ids", "index$": 9 }, "start_date": { "a": true, "h": "Start Date", "n": "start_date", "r": true, "sh": "First date (YYYY-MM-DD) this report includes shifts from, inclusive", "t": "`$STRING`", "key$": "start_date", "index$": 10 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "How far a report has got through being generated", "t": "`$STRING`", "key$": "status", "index$": 11 }, "total_duration_seconds": { "a": true, "fo": "int64", "h": "Total Duration Seconds", "n": "total_duration_seconds", "r": false, "sh": "Total time spent on-call across every shift in this report, in seconds.", "t": "`$INTEGER`", "key$": "total_duration_seconds", "index$": 12 }, "total_pay_by_currency": { "a": true, "h": "Total Pay By Currency", "n": "total_pay_by_currency", "r": false, "sh": "Total owed for this report, keyed by ISO 4217 currency code, in the lowest denomination of that currency.", "t": "`$OBJECT`", "key$": "total_pay_by_currency", "index$": 13 }, "unpaid_shifts": { "a": true, "h": "Unpaid Shifts", "n": "unpaid_shifts", "r": true, "sh": "Whether shifts that priced to zero are part of the report", "t": "`$STRING`", "key$": "unpaid_shifts", "index$": 14 }, "unpublish_reason": { "a": true, "h": "Unpublish Reason", "n": "unpublish_reason", "r": true, "sh": "Why this report is being unpublished", "t": "`$STRING`", "key$": "unpublish_reason", "index$": 15 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this report was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "pay_reports_unpublish_result_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["unpublish_reason"], "co": { "id": "POST /v2/pay_reports/{id}/actions/unpublish", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "pay_report_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/pay_reports/{id}/actions/unpublish", "q": { "exist": ["pay_report_id"] }, "r": { "param": { "id": "pay_report_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_reports" }, { "var": "pay_report_id" }, { "lit": "actions" }, { "lit": "unpublish" }], "t": { "req": "`reqdata`", "res": "`body.pay_report`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.pay_report"]] }, "key$": "pay_reports_unpublish_result_v2", "name__orig": "pay_reports_unpublish_result_v2", "Name": "PayReportsUnpublishResultV2", "name_": "pay_reports_unpublish_result_v2", "name-": "pay-reports-unpublish-result-v2", "NAME": "PAY_REPORTS_UNPUBLISH_RESULT_V2", "index$": 76 }, { "active": true, "entity": "pay_reports_unpublish_result_v2", "key$": "BasicPayReportsUnpublishResultV2Flow", "kind": "basic", "name": "BasicPayReportsUnpublishResultV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pay_reports_unpublish_result_v2_ref01" }, "m": { "pay_report_id": "pay_report01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PayReportsUnpublishResultV2', { "POST /v2/pay_reports/{id}/actions/unpublish": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "unpublish_reason": "The date range is wrong and one schedule was incorrectly synced." }, "schema": { "example": { "unpublish_reason": "The date range is wrong and one schedule was incorrectly synced." }, "properties": { "unpublish_reason": { "description": "Why this report is being unpublished", "example": "The date range is wrong and one schedule was incorrectly synced.", "minLength": 1, "type": "string", "key$": "unpublish_reason" } }, "required": ["unpublish_reason"], "type": "object", "x-ref": "#/components/schemas/PayReportsUnpublishPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this pay report", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pay_reports_unpublish_result_v2_ref01_ent = client.PayReportsUnpublishResultV2();
        let pay_reports_unpublish_result_v2_ref01_data = setup.data.new.pay_reports_unpublish_result_v2['pay_reports_unpublish_result_v2_ref01'];
        pay_reports_unpublish_result_v2_ref01_data['pay_report_id'] = setup.idmap['pay_report01'];
        pay_reports_unpublish_result_v2_ref01_data = (await pay_reports_unpublish_result_v2_ref01_ent.create(pay_reports_unpublish_result_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != pay_reports_unpublish_result_v2_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pay_reports_unpublish_result_v2/PayReportsUnpublishResultV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pay_reports_unpublish_result_v201', 'pay_reports_unpublish_result_v202', 'pay_reports_unpublish_result_v203', 'pay_report01', 'pay_report02', 'pay_report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_PAY_REPORTS_UNPUBLISH_RESULT_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_PAY_REPORTS_UNPUBLISH_RESULT_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_PAY_REPORTS_UNPUBLISH_RESULT_V2_ENTID'];
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
//# sourceMappingURL=PayReportsUnpublishResultV2Entity.test.js.map
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
(0, node_test_1.describe)('PayConfigsCreateWeeklyRuleResultV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.PayConfigsCreateWeeklyRuleResultV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PayConfigsCreateWeeklyRuleResultV2().create({ "pay_config_id": 1, "end_time": "x", "rate_cents": 1, "start_time": "x", "weekdays": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pay_configs_create_weekly_rule_result_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "end_time": { "a": true, "h": "End Time", "n": "end_time", "r": true, "sh": "Time of day this rule ends, in 24 hour format.", "t": "`$STRING`", "key$": "end_time", "index$": 0 }, "rate_cents": { "a": true, "fo": "int64", "h": "Rate Cents", "n": "rate_cents", "r": true, "sh": "Rate paid while this rule applies, in the lowest denomination of the config's currency", "t": "`$INTEGER`", "key$": "rate_cents", "index$": 1 }, "start_time": { "a": true, "h": "Start Time", "n": "start_time", "r": true, "sh": "Time of day this rule starts, in 24 hour format", "t": "`$STRING`", "key$": "start_time", "index$": 2 }, "weekdays": { "a": true, "h": "Weekdays", "n": "weekdays", "r": true, "sh": "Days of the week this rule applies on", "t": "`$ARRAY`", "key$": "weekdays", "index$": 3 } }, "name": "pay_configs_create_weekly_rule_result_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["end_time", "rate_cents", "start_time", "weekdays"], "co": { "id": "POST /v2/pay_configs/{pay_config_id}/weekly_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "pay_config_id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/pay_configs/{pay_config_id}/weekly_rules", "q": { "exist": ["pay_config_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "pay_config_id" }, { "lit": "weekly_rules" }], "t": { "req": "`reqdata`", "res": "`body.weekly_rule`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.pay_config"]] }, "key$": "pay_configs_create_weekly_rule_result_v2", "name__orig": "pay_configs_create_weekly_rule_result_v2", "Name": "PayConfigsCreateWeeklyRuleResultV2", "name_": "pay_configs_create_weekly_rule_result_v2", "name-": "pay-configs-create-weekly-rule-result-v2", "NAME": "PAY_CONFIGS_CREATE_WEEKLY_RULE_RESULT_V2", "index$": 66 }, { "active": true, "entity": "pay_configs_create_weekly_rule_result_v2", "key$": "BasicPayConfigsCreateWeeklyRuleResultV2Flow", "kind": "basic", "name": "BasicPayConfigsCreateWeeklyRuleResultV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pay_configs_create_weekly_rule_result_v2_ref01" }, "m": { "pay_config_id": "pay_config01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PayConfigsCreateWeeklyRuleResultV2', { "POST /v2/pay_configs/{pay_config_id}/weekly_rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "end_time": "17:00", "rate_cents": 2400, "start_time": "09:00", "weekdays": ["monday"] }, "schema": { "example": { "end_time": "17:00", "rate_cents": 2400, "start_time": "09:00", "weekdays": ["monday"] }, "properties": { "end_time": { "description": "Time of day this rule ends, in 24 hour format. Equal to start_time means it runs for the whole day.", "example": "17:00", "type": "string", "key$": "end_time" }, "rate_cents": { "description": "Rate paid while this rule applies, in the lowest denomination of the config's currency", "example": 2400, "format": "int64", "type": "integer", "key$": "rate_cents" }, "start_time": { "description": "Time of day this rule starts, in 24 hour format", "example": "09:00", "type": "string", "key$": "start_time" }, "weekdays": { "description": "Days of the week this rule applies on", "example": ["monday"], "items": { "enum": ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], "example": "monday", "type": "string" }, "type": "array", "key$": "weekdays" } }, "required": ["weekdays", "start_time", "end_time", "rate_cents"], "type": "object", "x-ref": "#/components/schemas/PayConfigsCreateWeeklyRulePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pay_configs_create_weekly_rule_result_v2_ref01_ent = client.PayConfigsCreateWeeklyRuleResultV2();
        let pay_configs_create_weekly_rule_result_v2_ref01_data = setup.data.new.pay_configs_create_weekly_rule_result_v2['pay_configs_create_weekly_rule_result_v2_ref01'];
        pay_configs_create_weekly_rule_result_v2_ref01_data['pay_config_id'] = setup.idmap['pay_config01'];
        pay_configs_create_weekly_rule_result_v2_ref01_data = (await pay_configs_create_weekly_rule_result_v2_ref01_ent.create(pay_configs_create_weekly_rule_result_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != pay_configs_create_weekly_rule_result_v2_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pay_configs_create_weekly_rule_result_v2/PayConfigsCreateWeeklyRuleResultV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pay_configs_create_weekly_rule_result_v201', 'pay_configs_create_weekly_rule_result_v202', 'pay_configs_create_weekly_rule_result_v203', 'pay_config01', 'pay_config02', 'pay_config03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_PAY_CONFIGS_CREATE_WEEKLY_RULE_RESULT_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_PAY_CONFIGS_CREATE_WEEKLY_RULE_RESULT_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIGS_CREATE_WEEKLY_RULE_RESULT_V2_ENTID'];
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
//# sourceMappingURL=PayConfigsCreateWeeklyRuleResultV2Entity.test.js.map
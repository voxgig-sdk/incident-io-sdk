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
(0, node_test_1.describe)('PayConfigOneOffRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.PayConfigOneOffRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PayConfigOneOffRule().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['update', 'load', 'remove', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pay_config_one_off_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "end_at": { "a": true, "fo": "date-time", "h": "End At", "n": "end_at", "r": true, "sh": "When this rule stops applying", "t": "`$STRING`", "key$": "end_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this rule, stable across edits to the config", "t": "`$STRING`", "key$": "id", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Human readable name for this rule", "t": "`$STRING`", "key$": "name", "index$": 2 }, "rate_cents": { "a": true, "fo": "int64", "h": "Rate Cents", "n": "rate_cents", "r": true, "sh": "Rate paid while this rule applies, in the lowest denomination of the config's currency", "t": "`$INTEGER`", "key$": "rate_cents", "index$": 3 }, "start_at": { "a": true, "fo": "date-time", "h": "Start At", "n": "start_at", "r": true, "sh": "When this rule starts applying", "t": "`$STRING`", "key$": "start_at", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "pay_config_one_off_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["end_at", "name", "rate_cents", "start_at"], "co": { "id": "POST /v2/pay_configs/{pay_config_id}/one_off_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/pay_configs/{pay_config_id}/one_off_rules", "q": { "exist": ["id"] }, "r": { "param": { "pay_config_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "id" }, { "lit": "one_off_rules" }], "t": { "req": "`reqdata`", "res": "`body.one_off_rule`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/pay_configs/{pay_config_id}/one_off_rules", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/pay_configs/{pay_config_id}/one_off_rules", "q": { "exist": ["id"] }, "r": { "param": { "pay_config_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "id" }, { "lit": "one_off_rules" }], "t": { "req": "`reqdata`", "res": "`body.one_off_rules`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "pay_config_id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "q": { "exist": ["id", "pay_config_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "pay_config_id" }, { "lit": "one_off_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.one_off_rule`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "pay_config_id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "q": { "exist": ["id", "pay_config_id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "pay_config_id" }, { "lit": "one_off_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["end_at", "name", "rate_cents", "start_at"], "co": { "id": "PUT /v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "pay_config_id", "or": "pay_config_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/v2/pay_configs/{pay_config_id}/one_off_rules/{id}", "q": { "exist": ["id", "pay_config_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "pay_configs" }, { "var": "pay_config_id" }, { "lit": "one_off_rules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.one_off_rule`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.pay_config"]] }, "key$": "pay_config_one_off_rule", "name__orig": "pay_config_one_off_rule", "Name": "PayConfigOneOffRule", "name_": "pay_config_one_off_rule", "name-": "pay-config-one-off-rule", "NAME": "PAY_CONFIG_ONE_OFF_RULE", "index$": 66 }, { "active": true, "entity": "pay_config_one_off_rule", "key$": "BasicPayConfigOneOffRuleFlow", "kind": "basic", "name": "BasicPayConfigOneOffRuleFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "pay_config_one_off_rule_ref01" }, "m": { "pay_config_id": "pay_config01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": false, "d": {}, "i": {}, "m": { "pay_config_id": "pay_config01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "pay_config_one_off_rule_ref01" } }], "unreachable": true }, { "a": true, "d": { "pay_config_id": "pay_config01" }, "i": { "ref": "pay_config_one_off_rule_ref01", "srcdatavar": "pay_config_one_off_rule_ref01_data", "suffix": "_up0", "textfield": "end_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pay_config_one_off_rule_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "pay_config_one_off_rule_ref01", "srcdatavar": "pay_config_one_off_rule_ref01_data", "suffix": "_dt0" }, "m": { "id": "pay_config_one_off_rule01", "pay_config_id": "pay_config01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-pay_config_one_off_rule_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "pay_config_one_off_rule_ref01", "suffix": "_rm0" }, "m": { "id": "pay_config_one_off_rule01", "pay_config_id": "pay_config01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "pay_config_id": "pay_config01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "pay_config_one_off_rule_ref01" } }], "index$": 3 }] }, 'PayConfigOneOffRule', { "POST /v2/pay_configs/{pay_config_id}/one_off_rules": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "end_at": "2021-08-17T13:28:57.801578Z", "name": "Christmas day", "rate_cents": 4800, "start_at": "2021-08-17T13:28:57.801578Z" }, "schema": { "example": { "end_at": "2021-08-17T13:28:57.801578Z", "name": "Christmas day", "rate_cents": 4800, "start_at": "2021-08-17T13:28:57.801578Z" }, "properties": { "end_at": { "description": "When this rule stops applying", "example": "2021-08-17T13:28:57.801578Z", "format": "date-time", "type": "string", "key$": "end_at" }, "name": { "description": "Human readable name for this rule", "example": "Christmas day", "type": "string", "key$": "name" }, "rate_cents": { "description": "Rate paid while this rule applies, in the lowest denomination of the config's currency", "example": 4800, "format": "int64", "type": "integer", "key$": "rate_cents" }, "start_at": { "description": "When this rule starts applying", "example": "2021-08-17T13:28:57.801578Z", "format": "date-time", "type": "string", "key$": "start_at" } }, "required": ["name", "start_at", "end_at", "rate_cents"], "type": "object", "x-ref": "#/components/schemas/PayConfigsCreateOneOffRulePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] }, "GET /v2/pay_configs/{pay_config_id}/one_off_rules": { "protocol": "http", "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] }, "GET /v2/pay_configs/{pay_config_id}/one_off_rules/{id}": { "protocol": "http", "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }, { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 1 }] }, "DELETE /v2/pay_configs/{pay_config_id}/one_off_rules/{id}": { "protocol": "http", "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }, { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 1 }] }, "PUT /v2/pay_configs/{pay_config_id}/one_off_rules/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "end_at": "2021-08-17T13:28:57.801578Z", "name": "Christmas day", "rate_cents": 4800, "start_at": "2021-08-17T13:28:57.801578Z" }, "schema": { "example": { "end_at": "2021-08-17T13:28:57.801578Z", "name": "Christmas day", "rate_cents": 4800, "start_at": "2021-08-17T13:28:57.801578Z" }, "properties": { "end_at": { "description": "When this rule stops applying", "example": "2021-08-17T13:28:57.801578Z", "format": "date-time", "type": "string", "key$": "end_at" }, "name": { "description": "Human readable name for this rule", "example": "Christmas day", "type": "string", "key$": "name" }, "rate_cents": { "description": "Rate paid while this rule applies, in the lowest denomination of the config's currency", "example": 4800, "format": "int64", "type": "integer", "key$": "rate_cents" }, "start_at": { "description": "When this rule starts applying", "example": "2021-08-17T13:28:57.801578Z", "format": "date-time", "type": "string", "key$": "start_at" } }, "required": ["name", "start_at", "end_at", "rate_cents"], "type": "object", "x-ref": "#/components/schemas/PayConfigsUpdateOneOffRulePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "pay_config_id", "required": true, "schema": { "description": "The pay config's ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }, { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique identifier for this rule, stable across edits to the config", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let pay_config_one_off_rule_ref01_data = Object.values(setup.data.existing.pay_config_one_off_rule)[0];
        // UPDATE
        const pay_config_one_off_rule_ref01_ent = client.PayConfigOneOffRule();
        const pay_config_one_off_rule_ref01_data_up0 = {};
        pay_config_one_off_rule_ref01_data_up0.id = pay_config_one_off_rule_ref01_data.id;
        pay_config_one_off_rule_ref01_data_up0['pay_config_id'] = setup.idmap['pay_config_id'] ?? setup.idmap['pay_config01'];
        const pay_config_one_off_rule_ref01_markdef_up0 = { name: 'end_at', value: 'Mark01-pay_config_one_off_rule_ref01_' + setup.now };
        pay_config_one_off_rule_ref01_data_up0[pay_config_one_off_rule_ref01_markdef_up0.name] = pay_config_one_off_rule_ref01_markdef_up0.value;
        const pay_config_one_off_rule_ref01_resdata_up0 = (await pay_config_one_off_rule_ref01_ent.update(pay_config_one_off_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(pay_config_one_off_rule_ref01_resdata_up0.id === pay_config_one_off_rule_ref01_data_up0.id);
        (0, node_assert_1.default)(pay_config_one_off_rule_ref01_resdata_up0[pay_config_one_off_rule_ref01_markdef_up0.name] === pay_config_one_off_rule_ref01_markdef_up0.value);
        // LOAD
        const pay_config_one_off_rule_ref01_match_dt0 = {};
        pay_config_one_off_rule_ref01_match_dt0.id = pay_config_one_off_rule_ref01_data.id;
        pay_config_one_off_rule_ref01_match_dt0['pay_config_id'] = setup.idmap['pay_config_id'] ?? setup.idmap['pay_config01'];
        const pay_config_one_off_rule_ref01_data_dt0 = (await pay_config_one_off_rule_ref01_ent.load(pay_config_one_off_rule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(pay_config_one_off_rule_ref01_data_dt0.id === pay_config_one_off_rule_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pay_config_one_off_rule/PayConfigOneOffRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pay_config_one_off_rule01', 'pay_config_one_off_rule02', 'pay_config_one_off_rule03', 'pay_config01', 'pay_config02', 'pay_config03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_PAY_CONFIG_ONE_OFF_RULE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_PAY_CONFIG_ONE_OFF_RULE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_PAY_CONFIG_ONE_OFF_RULE_ENTID'];
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
//# sourceMappingURL=PayConfigOneOffRuleEntity.test.js.map
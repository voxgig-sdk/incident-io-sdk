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
(0, node_test_1.describe)('AlertEventsV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.AlertEventsV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AlertEventsV2().create({ "alert_source_config_id": 1, "status": "x", "title": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'alert_events_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "deduplication_key": { "a": true, "h": "Deduplication Key", "n": "deduplication_key", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The deduplication key that the event has been processed with", "t": "`$STRING`", "key$": "deduplication_key", "index$": 0 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description that optionally adds more detail to title.", "t": "`$STRING`", "key$": "description", "index$": 1 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "sh": "Human readable message giving detail about the event", "t": "`$STRING`", "key$": "message", "index$": 2 }, "metadata": { "a": true, "h": "Metadata", "n": "metadata", "r": false, "sh": "Any additional metadata that you've configured your alert source to parse", "t": "`$OBJECT`", "key$": "metadata", "index$": 3 }, "source_url": { "a": true, "h": "Source Url", "n": "source_url", "r": false, "sh": "If applicable, a link to the alert in the upstream system", "t": "`$STRING`", "key$": "source_url", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Status of the event", "t": "`$STRING`", "key$": "status", "index$": 5 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "The title of the alert, parsed from the alert payload according to the alert source configuration", "t": "`$STRING`", "key$": "title", "index$": 6 } }, "name": "alert_events_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["deduplication_key", "description", "metadata", "source_url", "status", "title"], "co": { "id": "POST /v2/alert_events/http/{alert_source_config_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "some-random-string", "k": "header", "n": "authorization", "or": "authorization", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "01GW2G3V0S59R238FAHPDS1R66", "k": "param", "n": "alert_source_config_id", "or": "alert_source_config_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "query", "or": "query", "r": false, "t": "`$OBJECT`", "index$": 0 }, { "a": true, "ex": "some-random-string", "k": "query", "n": "token", "or": "token", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/v2/alert_events/http/{alert_source_config_id}", "q": { "exist": ["alert_source_config_id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "alert_events" }, { "lit": "http" }, { "var": "alert_source_config_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "alert_events_v2", "name__orig": "alert_events_v2", "Name": "AlertEventsV2", "name_": "alert_events_v2", "name-": "alert-events-v2", "NAME": "ALERT_EVENTS_V2", "index$": 3 }, { "active": true, "entity": "alert_events_v2", "key$": "BasicAlertEventsV2Flow", "kind": "basic", "name": "BasicAlertEventsV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "alert_events_v2_ref01" }, "m": { "alert_source_config_id": "alert_source_config01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'AlertEventsV2', { "POST /v2/alert_events/http/{alert_source_config_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "deduplication_key": "4293868629", "description": "We've detected a number of timeouts on hello.world.com, the service may be down. To fix...", "metadata": { "service": "hello.world.com", "team": ["my-team"] }, "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123", "status": "firing", "title": "*errors.withMessage: PG::Error failed to connect" }, "schema": { "example": { "deduplication_key": "4293868629", "description": "We've detected a number of timeouts on hello.world.com, the service may be down. To fix...", "metadata": { "service": "hello.world.com", "team": ["my-team"] }, "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123", "status": "firing", "title": "*errors.withMessage: PG::Error failed to connect" }, "properties": { "deduplication_key": { "description": "A deduplication key which uniquely references this alert from your alert source. For newly created HTTP sources, this field is required.\nIf you send an event with the same deduplication_key multiple times, only one alert will be created in incident.io for this alert source config.\nYou can filter on this field to find the alert created by an event you've sent us.", "example": "4293868629", "type": "string", "key$": "deduplication_key" }, "description": { "description": "Description that optionally adds more detail to title. Supports markdown.", "example": "We've detected a number of timeouts on hello.world.com, the service may be down. To fix...", "type": "string", "key$": "description" }, "metadata": { "additionalProperties": true, "description": "Any additional metadata that you've configured your alert source to parse", "example": { "service": "hello.world.com", "team": ["my-team"] }, "type": "object", "key$": "metadata" }, "source_url": { "description": "If applicable, a link to the alert in the upstream system", "example": "https://www.my-alerting-platform.com/alerts/my-alert-123", "type": "string", "key$": "source_url" }, "status": { "description": "Current status of this alert", "enum": ["firing", "resolved"], "example": "firing", "type": "string", "key$": "status" }, "title": { "description": "The title of the alert, parsed from the alert payload according to the alert source configuration", "example": "*errors.withMessage: PG::Error failed to connect", "type": "string", "key$": "title" } }, "required": ["title", "status"], "type": "object", "x-ref": "#/components/schemas/AlertEventsCreateHTTPPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "allowEmptyValue": true, "description": "Token used to authenticate the request, generated when configuring the alert source. Will be consumed via a URL query string parameter", "example": "some-random-string", "in": "query", "name": "token", "schema": { "description": "Token used to authenticate the request, generated when configuring the alert source. Will be consumed via a URL query string parameter", "example": "some-random-string", "type": "string" }, "index$": 0 }, { "description": "Which alert source config produced this alert", "examples": { "default": { "summary": "default", "value": "01GW2G3V0S59R238FAHPDS1R66" } }, "in": "path", "name": "alert_source_config_id", "required": true, "schema": { "description": "Which alert source config produced this alert", "example": "01GW2G3V0S59R238FAHPDS1R66", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Whatever is provided in the Authorization header. We support either Basic or Bearer authorization with the secret provided on the alert source.", "example": "some-random-string", "in": "header", "name": "authorization", "schema": { "description": "Whatever is provided in the Authorization header. We support either Basic or Bearer authorization with the secret provided on the alert source.", "example": "some-random-string", "type": "string" }, "index$": 2 }, { "description": "Query parameters", "in": "query", "name": "query", "schema": { "additionalProperties": true, "type": "object" }, "style": "deepObject", "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const alert_events_v2_ref01_ent = client.AlertEventsV2();
        let alert_events_v2_ref01_data = setup.data.new.alert_events_v2['alert_events_v2_ref01'];
        alert_events_v2_ref01_data['alert_source_config_id'] = setup.idmap['alert_source_config01'];
        alert_events_v2_ref01_data = (await alert_events_v2_ref01_ent.create(alert_events_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != alert_events_v2_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/alert_events_v2/AlertEventsV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['alert_events_v201', 'alert_events_v202', 'alert_events_v203', 'alert_source_config01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_ALERT_EVENTS_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_ALERT_EVENTS_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_ALERT_EVENTS_V2_ENTID'];
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
//# sourceMappingURL=AlertEventsV2Entity.test.js.map
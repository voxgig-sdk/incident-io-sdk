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
(0, node_test_1.describe)('TelemetryDataSourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.TelemetryDataSource();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.TelemetryDataSource().update({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'telemetry_data_source.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this data source was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "datadog_config": { "a": true, "h": "Datadog Config", "n": "datadog_config", "r": false, "sh": "Datadog-specific credential updates", "t": "`$OBJECT`", "key$": "datadog_config", "index$": 1 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": true, "sh": "Whether this data source is enabled", "t": "`$BOOLEAN`", "key$": "enabled", "index$": 2 }, "grafana_config": { "a": true, "h": "Grafana Config", "n": "grafana_config", "r": false, "sh": "Grafana-specific credential and endpoint updates", "t": "`$OBJECT`", "key$": "grafana_config", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for this data source", "t": "`$STRING`", "key$": "id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Human-readable name of the data source", "t": "`$STRING`", "key$": "name", "index$": 5 }, "provider": { "a": true, "h": "Provider", "n": "provider", "r": true, "sh": "Provider that hosts this data source", "t": "`$STRING`", "key$": "provider", "index$": 6 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": true, "sh": "Type of data source (e.g., prometheus, loki, tempo)", "t": "`$STRING`", "key$": "source_type", "index$": 7 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this data source was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 8 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "sh": "Upstream tool version captured at probe time (e.g.", "t": "`$STRING`", "key$": "version", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "telemetry_data_source", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["datadog_config", "grafana_config", "name"], "co": { "id": "PUT /v2/telemetry/data_sources/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/telemetry/data_sources/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "telemetry" }, { "lit": "data_sources" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.data_source`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "telemetry_data_source", "name__orig": "telemetry_data_source", "Name": "TelemetryDataSource", "name_": "telemetry_data_source", "name-": "telemetry-data-source", "NAME": "TELEMETRY_DATA_SOURCE", "index$": 99 }, { "active": true, "entity": "telemetry_data_source", "key$": "BasicTelemetryDataSourceFlow", "kind": "basic", "name": "BasicTelemetryDataSourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "telemetry_data_source_ref01", "srcdatavar": "telemetry_data_source_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-telemetry_data_source_ref01" } }], "v": [], "index$": 0 }] }, 'TelemetryDataSource', { "PUT /v2/telemetry/data_sources/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "datadog_config": { "api_key": "abc123", "app_key": "abc123" }, "grafana_config": { "api_key": "glsa_123", "api_url": "grafana.example.com" }, "name": "Production Grafana" }, "schema": { "example": { "datadog_config": { "api_key": "abc123", "app_key": "abc123" }, "grafana_config": { "api_key": "glsa_123", "api_url": "grafana.example.com" }, "name": "Production Grafana" }, "properties": { "datadog_config": { "description": "Datadog-specific credential updates", "example": { "api_key": "abc123", "app_key": "abc123" }, "properties": { "api_key": { "description": "New Datadog API key", "example": "abc123", "type": "string" }, "app_key": { "description": "New Datadog Application key", "example": "abc123", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/TelemetryDatadogUpdateConfigV2", "key$": "datadog_config" }, "grafana_config": { "description": "Grafana-specific credential and endpoint updates", "example": { "api_key": "glsa_123", "api_url": "grafana.example.com" }, "properties": { "api_key": { "description": "New Grafana service account token", "example": "glsa_123", "type": "string" }, "api_url": { "description": "Grafana API URL (without protocol)", "example": "grafana.example.com", "type": "string" } }, "type": "object", "x-ref": "#/components/schemas/TelemetryGrafanaUpdateConfigV2", "key$": "grafana_config" }, "name": { "description": "Updated display name", "example": "Production Grafana", "type": "string", "key$": "name" } }, "type": "object", "x-ref": "#/components/schemas/TelemetryUpdateDataSourcePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Data source ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Data source ID", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let telemetry_data_source_ref01_data = Object.values(setup.data.existing.telemetry_data_source)[0];
        // UPDATE
        const telemetry_data_source_ref01_ent = client.TelemetryDataSource();
        const telemetry_data_source_ref01_data_up0 = {};
        telemetry_data_source_ref01_data_up0.id = telemetry_data_source_ref01_data.id;
        const telemetry_data_source_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-telemetry_data_source_ref01_' + setup.now };
        telemetry_data_source_ref01_data_up0[telemetry_data_source_ref01_markdef_up0.name] = telemetry_data_source_ref01_markdef_up0.value;
        const telemetry_data_source_ref01_resdata_up0 = (await telemetry_data_source_ref01_ent.update(telemetry_data_source_ref01_data_up0)).data();
        (0, node_assert_1.default)(telemetry_data_source_ref01_resdata_up0.id === telemetry_data_source_ref01_data_up0.id);
        (0, node_assert_1.default)(telemetry_data_source_ref01_resdata_up0[telemetry_data_source_ref01_markdef_up0.name] === telemetry_data_source_ref01_markdef_up0.value);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/telemetry_data_source/TelemetryDataSourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['telemetry_data_source01', 'telemetry_data_source02', 'telemetry_data_source03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_TELEMETRY_DATA_SOURCE_ENTID'];
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
//# sourceMappingURL=TelemetryDataSourceEntity.test.js.map
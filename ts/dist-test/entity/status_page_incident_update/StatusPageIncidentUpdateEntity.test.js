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
(0, node_test_1.describe)('StatusPageIncidentUpdateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.StatusPageIncidentUpdate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.StatusPageIncidentUpdate().create({ "incident_status": 1, "message": "x", "notify_subscribers": true, "status_page_incident_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'status_page_incident_update.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "component_statuses": { "a": true, "h": "Component Statuses", "n": "component_statuses", "r": false, "sh": "An array of mappings from component ID to component status.", "t": "`$ARRAY`", "key$": "component_statuses", "index$": 0 }, "incident_status": { "a": true, "h": "Incident Status", "n": "incident_status", "r": false, "sh": "Optional new status for this status page incident.", "t": "`$STRING`", "key$": "incident_status", "index$": 1 }, "message": { "a": true, "h": "Message", "n": "message", "r": true, "sh": "Markdown update on what's changed about this status page incident", "t": "`$STRING`", "key$": "message", "index$": 2 }, "notify_subscribers": { "a": true, "h": "Notify Subscribers", "n": "notify_subscribers", "r": true, "sh": "Whether to notify subscribers about this incident update.", "t": "`$BOOLEAN`", "key$": "notify_subscribers", "index$": 3 }, "status_page_incident_id": { "a": true, "h": "Status Page Incident Id", "n": "status_page_incident_id", "r": true, "sh": "ID of the status page incident", "t": "`$STRING`", "key$": "status_page_incident_id", "index$": 4 } }, "name": "status_page_incident_update", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["component_statuses", "incident_status", "message", "notify_subscribers", "status_page_incident_id"], "co": { "id": "POST /v2/status_page_incident_updates", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/status_page_incident_updates", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_incident_updates" }], "t": { "req": "`reqdata`", "res": "`body.status_page_incident_update`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "status_page_incident_update", "name__orig": "status_page_incident_update", "Name": "StatusPageIncidentUpdate", "name_": "status_page_incident_update", "name-": "status-page-incident-update", "NAME": "STATUS_PAGE_INCIDENT_UPDATE", "index$": 93 }, { "active": true, "entity": "status_page_incident_update", "key$": "BasicStatusPageIncidentUpdateFlow", "kind": "basic", "name": "BasicStatusPageIncidentUpdateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "status_page_incident_update_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'StatusPageIncidentUpdate', { "POST /v2/status_page_incident_updates": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "component_statuses": [{ "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }], "incident_status": "investigating", "message": "The fix has been deployed and we are monitoring the situation. Some users may still experience intermittent issues.", "notify_subscribers": true, "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1" }, "schema": { "example": { "component_statuses": [{ "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }], "incident_status": "investigating", "message": "The fix has been deployed and we are monitoring the situation. Some users may still experience intermittent issues.", "notify_subscribers": true, "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1" }, "properties": { "component_statuses": { "description": "An array of mappings from component ID to component status. This must not be set if the status page incident status is being set to \"resolved\", as all components statuses will update to \"operational\".", "example": [{ "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }], "items": { "example": { "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }, "properties": { "component_id": { "description": "The ID of the affected component. This may be found by calling the ShowStatusPageStructure endpoint.", "example": "01FCNDV6P870EA6S7TK1DSYDG2", "type": "string" }, "component_status": { "description": "The status of the relevant component in a status page incident", "enum": [], "example": "operational", "type": "string", "x-public-api-version": "v2" } }, "required": ["component_id", "component_status"], "type": "object", "x-ref": "#/components/schemas/StatusPageIncidentAffectedComponentV2" }, "type": "array", "key$": "component_statuses" }, "incident_status": { "description": "Optional new status for this status page incident. If not provided, the status will remain unchanged. Setting to \"resolved\" will end the incident and all component statuses will update to \"operational\".", "enum": ["investigating", "identified", "monitoring", "resolved"], "example": "investigating", "type": "string", "key$": "incident_status" }, "message": { "description": "Markdown update on what's changed about this status page incident", "example": "The fix has been deployed and we are monitoring the situation. Some users may still experience intermittent issues.", "maxLength": 4096, "type": "string", "key$": "message" }, "notify_subscribers": { "description": "Whether to notify subscribers about this incident update. If your status page has more than 1000 subscribers, requests that set this to true are rejected. This limit applies only to the public API: publishing from the incident.io dashboard or Slack always notifies every subscriber.", "example": true, "type": "boolean", "key$": "notify_subscribers" }, "status_page_incident_id": { "description": "ID of the status page incident", "example": "01FCNDV6P870EA6S7TK1DSYDG1", "type": "string", "key$": "status_page_incident_id" } }, "required": ["status_page_incident_id", "message", "notify_subscribers"], "type": "object", "x-ref": "#/components/schemas/StatusPagesCreateStatusPageIncidentUpdatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const status_page_incident_update_ref01_ent = client.StatusPageIncidentUpdate();
        let status_page_incident_update_ref01_data = setup.data.new.status_page_incident_update['status_page_incident_update_ref01'];
        status_page_incident_update_ref01_data = (await status_page_incident_update_ref01_ent.create(status_page_incident_update_ref01_data)).data();
        (0, node_assert_1.default)(null != status_page_incident_update_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/status_page_incident_update/StatusPageIncidentUpdateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['status_page_incident_update01', 'status_page_incident_update02', 'status_page_incident_update03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_UPDATE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_UPDATE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_INCIDENT_UPDATE_ENTID'];
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
//# sourceMappingURL=StatusPageIncidentUpdateEntity.test.js.map
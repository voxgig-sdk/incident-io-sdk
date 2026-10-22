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
(0, node_test_1.describe)('StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2().create({ "idempotency_key": 1, "name": "x", "status_page_id": "x", "updates": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'status_pages_create_status_page_retrospective_incident_result_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "idempotency_key": { "a": true, "h": "Idempotency Key", "n": "idempotency_key", "r": true, "sh": "A unique key to de-duplicate requests.", "t": "`$STRING`", "key$": "idempotency_key", "index$": 0 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "A title for the incident", "t": "`$STRING`", "key$": "name", "index$": 1 }, "status_page_id": { "a": true, "h": "Status Page Id", "n": "status_page_id", "r": true, "sh": "ID of the status page.", "t": "`$STRING`", "key$": "status_page_id", "index$": 2 }, "updates": { "a": true, "h": "Updates", "n": "updates", "r": true, "sh": "The reconstructed timeline of updates for this incident, ordered chronologically (earliest first).", "t": "`$ARRAY`", "key$": "updates", "index$": 3 } }, "name": "status_pages_create_status_page_retrospective_incident_result_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["idempotency_key", "name", "status_page_id", "updates"], "co": { "id": "POST /v2/status_page_retrospective_incidents", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/status_page_retrospective_incidents", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "status_page_retrospective_incidents" }], "t": { "req": "`reqdata`", "res": "`body.status_page_incident`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "status_pages_create_status_page_retrospective_incident_result_v2", "name__orig": "status_pages_create_status_page_retrospective_incident_result_v2", "Name": "StatusPagesCreateStatusPageRetrospectiveIncidentResultV2", "name_": "status_pages_create_status_page_retrospective_incident_result_v2", "name-": "status-pages-create-status-page-retrospective-incident-result-v2", "NAME": "STATUS_PAGES_CREATE_STATUS_PAGE_RETROSPECTIVE_INCIDENT_RESULT_V2", "index$": 98 }, { "active": true, "entity": "status_pages_create_status_page_retrospective_incident_result_v2", "key$": "BasicStatusPagesCreateStatusPageRetrospectiveIncidentResultV2Flow", "kind": "basic", "name": "BasicStatusPagesCreateStatusPageRetrospectiveIncidentResultV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "status_pages_create_status_page_retrospective_incident_result_v2_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'StatusPagesCreateStatusPageRetrospectiveIncidentResultV2', { "POST /v2/status_page_retrospective_incidents": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "idempotency_key": "historical-incident-2021-08-17", "name": "Elevated API latency", "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0", "updates": [{ "component_statuses": [{ "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }], "incident_status": "investigating", "message": "We are currently investigating reports of elevated error rates affecting our API.", "published_at": "2021-08-17T13:28:57.801578Z" }] }, "schema": { "example": { "idempotency_key": "historical-incident-2021-08-17", "name": "Elevated API latency", "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0", "updates": [{ "component_statuses": [{ "component_id": "01FCNDV6P870EA6S7TK1DSYDG2", "component_status": "operational" }], "incident_status": "investigating", "message": "We are currently investigating reports of elevated error rates affecting our API.", "published_at": "2021-08-17T13:28:57.801578Z" }] }, "properties": { "idempotency_key": { "description": "A unique key to de-duplicate requests. If you send a request with an idempotency_key that was already used, the original response will be returned.", "example": "historical-incident-2021-08-17", "type": "string", "key$": "idempotency_key" }, "name": { "description": "A title for the incident", "example": "Elevated API latency", "maxLength": 200, "type": "string", "key$": "name" }, "status_page_id": { "description": "ID of the status page. You can find this by calling the ListStatusPages endpoint.", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string", "key$": "status_page_id" }, "updates": { "description": "The reconstructed timeline of updates for this incident, ordered chronologically (earliest first). The final update must set incident_status to \"resolved\".", "example": [{ "component_statuses": [{}], "incident_status": "investigating", "message": "We are currently investigating reports of elevated error rates affecting our API.", "published_at": "2021-08-17T13:28:57.801578Z" }], "items": { "description": "A single update in the reconstructed timeline of a retrospective status page incident.", "example": { "component_statuses": [{}], "incident_status": "investigating", "message": "We are currently investigating reports of elevated error rates affecting our API.", "published_at": "2021-08-17T13:28:57.801578Z" }, "properties": { "component_statuses": { "description": "An array of mappings from component ID to component status at the time this update was published", "example": [], "items": {}, "type": "array" }, "incident_status": { "description": "Current status for this incident", "enum": [], "example": "investigating", "type": "string", "x-public-api-version": "v2" }, "message": { "description": "Markdown update on what's changed about this status page incident", "example": "We are currently investigating reports of elevated error rates affecting our API.", "maxLength": 4096, "type": "string" }, "published_at": { "description": "When this update was published. Must be in the past.", "example": "2021-08-17T13:28:57.801578Z", "format": "date-time", "type": "string" } }, "required": ["incident_status", "message", "published_at"], "type": "object", "x-ref": "#/components/schemas/StatusPageRetrospectiveIncidentUpdateV2" }, "type": "array", "key$": "updates" } }, "required": ["status_page_id", "name", "idempotency_key", "updates"], "type": "object", "x-ref": "#/components/schemas/StatusPagesCreateStatusPageRetrospectiveIncidentPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const status_pages_create_status_page_retrospective_incident_result_v2_ref01_ent = client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2();
        let status_pages_create_status_page_retrospective_incident_result_v2_ref01_data = setup.data.new.status_pages_create_status_page_retrospective_incident_result_v2['status_pages_create_status_page_retrospective_incident_result_v2_ref01'];
        status_pages_create_status_page_retrospective_incident_result_v2_ref01_data = (await status_pages_create_status_page_retrospective_incident_result_v2_ref01_ent.create(status_pages_create_status_page_retrospective_incident_result_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != status_pages_create_status_page_retrospective_incident_result_v2_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/status_pages_create_status_page_retrospective_incident_result_v2/StatusPagesCreateStatusPageRetrospectiveIncidentResultV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['status_pages_create_status_page_retrospective_incident_result_v201', 'status_pages_create_status_page_retrospective_incident_result_v202', 'status_pages_create_status_page_retrospective_incident_result_v203'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_STATUS_PAGES_CREATE_STATUS_PAGE_RETROSPECTIVE_INCIDENT_RESULT_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_STATUS_PAGES_CREATE_STATUS_PAGE_RETROSPECTIVE_INCIDENT_RESULT_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGES_CREATE_STATUS_PAGE_RETROSPECTIVE_INCIDENT_RESULT_V2_ENTID'];
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
//# sourceMappingURL=StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity.test.js.map
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
(0, node_test_1.describe)('StatusPageLinkedResponseIncidentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.StatusPageLinkedResponseIncident();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.StatusPageLinkedResponseIncident().list({ "incident_id": 1, "status_page_id": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'status_page_linked_response_incident.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "ID of the Response incident", "t": "`$STRING`", "key$": "id", "index$": 0 }, "linked_at": { "a": true, "fo": "date-time", "h": "Linked At", "n": "linked_at", "r": true, "sh": "When the Response incident was linked to the status page incident", "t": "`$STRING`", "key$": "linked_at", "index$": 1 } }, "id": { "field": "id", "name": "id" }, "name": "status_page_linked_response_incident", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/status-pages/{id}/incidents/{incident_id}/response-incidents", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "abc123", "k": "param", "n": "incident_id", "or": "incident_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "abc123", "k": "param", "n": "status_page_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v1/status-pages/{id}/incidents/{incident_id}/response-incidents", "q": { "exist": ["incident_id", "status_page_id"] }, "r": { "param": { "id": "status_page_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "status-pages" }, { "var": "status_page_id" }, { "lit": "incidents" }, { "var": "incident_id" }, { "lit": "response-incidents" }], "t": { "req": "`reqdata`", "res": "`body.incidents`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.status_page", "$.main.kit.entity.incident"]] }, "key$": "status_page_linked_response_incident", "name__orig": "status_page_linked_response_incident", "Name": "StatusPageLinkedResponseIncident", "name_": "status_page_linked_response_incident", "name-": "status-page-linked-response-incident", "NAME": "STATUS_PAGE_LINKED_RESPONSE_INCIDENT", "index$": 85 }, { "active": true, "entity": "status_page_linked_response_incident", "key$": "BasicStatusPageLinkedResponseIncidentFlow", "kind": "basic", "name": "BasicStatusPageLinkedResponseIncidentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "incident_id": "incident01", "status_page_id": "status_page01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "status_page_linked_response_incident_ref01" } }], "index$": 0 }] }, 'StatusPageLinkedResponseIncident', { "GET /v1/status-pages/{id}/incidents/{incident_id}/response-incidents": { "protocol": "http", "parameters": [{ "description": "ID of the status page", "example": "abc123", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of the status page", "example": "abc123", "type": "string" }, "index$": 0 }, { "description": "ID of the status page incident", "example": "abc123", "in": "path", "name": "incident_id", "required": true, "schema": { "description": "ID of the status page incident", "example": "abc123", "type": "string" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let status_page_linked_response_incident_ref01_data = Object.values(setup.data.existing.status_page_linked_response_incident)[0];
        // LIST
        const status_page_linked_response_incident_ref01_ent = client.StatusPageLinkedResponseIncident();
        const status_page_linked_response_incident_ref01_match = {};
        status_page_linked_response_incident_ref01_match['incident_id'] = setup.idmap['incident01'];
        status_page_linked_response_incident_ref01_match['status_page_id'] = setup.idmap['status_page01'];
        const status_page_linked_response_incident_ref01_list = (await status_page_linked_response_incident_ref01_ent.list(status_page_linked_response_incident_ref01_match)).map((e) => e.data());
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/status_page_linked_response_incident/StatusPageLinkedResponseIncidentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['status_page_linked_response_incident01', 'status_page_linked_response_incident02', 'status_page_linked_response_incident03', 'status_page01', 'status_page02', 'status_page03', 'incident01', 'incident02', 'incident03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_STATUS_PAGE_LINKED_RESPONSE_INCIDENT_ENTID'];
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
//# sourceMappingURL=StatusPageLinkedResponseIncidentEntity.test.js.map
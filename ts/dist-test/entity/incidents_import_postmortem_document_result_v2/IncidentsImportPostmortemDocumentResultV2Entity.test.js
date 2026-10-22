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
(0, node_test_1.describe)('IncidentsImportPostmortemDocumentResultV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.IncidentsImportPostmortemDocumentResultV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IncidentsImportPostmortemDocumentResultV2().create({ "incident_id": 1, "content": "x", "title": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'incidents_import_postmortem_document_result_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "content": { "a": true, "h": "Content", "n": "content", "r": true, "sh": "The document content as GitHub-Flavored Markdown", "t": "`$STRING`", "key$": "content", "index$": 0 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Title of the postmortem document", "t": "`$STRING`", "key$": "title", "index$": 1 } }, "name": "incidents_import_postmortem_document_result_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["content", "title"], "co": { "id": "POST /v2/incidents/{id}/actions/import_postmortem_document", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01GBA8J19SMXQWPJMX3P2ESCVG", "k": "param", "n": "incident_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/incidents/{id}/actions/import_postmortem_document", "q": { "exist": ["incident_id"] }, "r": { "param": { "id": "incident_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "incidents" }, { "var": "incident_id" }, { "lit": "actions" }, { "lit": "import_postmortem_document" }], "t": { "req": "`reqdata`", "res": "`body.postmortem_document`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.incident"]] }, "key$": "incidents_import_postmortem_document_result_v2", "name__orig": "incidents_import_postmortem_document_result_v2", "Name": "IncidentsImportPostmortemDocumentResultV2", "name_": "incidents_import_postmortem_document_result_v2", "name-": "incidents-import-postmortem-document-result-v2", "NAME": "INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2", "index$": 57 }, { "active": true, "entity": "incidents_import_postmortem_document_result_v2", "key$": "BasicIncidentsImportPostmortemDocumentResultV2Flow", "kind": "basic", "name": "BasicIncidentsImportPostmortemDocumentResultV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "incidents_import_postmortem_document_result_v2_ref01" }, "m": { "incident_id": "incident01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'IncidentsImportPostmortemDocumentResultV2', { "POST /v2/incidents/{id}/actions/import_postmortem_document": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "content": "## Summary\n\nA database migration caused increased latency...", "title": "INC-123: Post-incident review" }, "schema": { "example": { "content": "## Summary\n\nA database migration caused increased latency...", "title": "INC-123: Post-incident review" }, "properties": { "content": { "description": "The document content as GitHub-Flavored Markdown", "example": "## Summary\n\nA database migration caused increased latency...", "type": "string", "key$": "content" }, "title": { "description": "Title of the postmortem document", "example": "INC-123: Post-incident review", "type": "string", "key$": "title" } }, "required": ["title", "content"], "type": "object", "x-ref": "#/components/schemas/IncidentsImportPostmortemDocumentPayloadV2", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "The unique identifier of the incident", "example": "01GBA8J19SMXQWPJMX3P2ESCVG", "in": "path", "name": "id", "required": true, "schema": { "description": "The unique identifier of the incident", "example": "01GBA8J19SMXQWPJMX3P2ESCVG", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const incidents_import_postmortem_document_result_v2_ref01_ent = client.IncidentsImportPostmortemDocumentResultV2();
        let incidents_import_postmortem_document_result_v2_ref01_data = setup.data.new.incidents_import_postmortem_document_result_v2['incidents_import_postmortem_document_result_v2_ref01'];
        incidents_import_postmortem_document_result_v2_ref01_data['incident_id'] = setup.idmap['incident01'];
        incidents_import_postmortem_document_result_v2_ref01_data = (await incidents_import_postmortem_document_result_v2_ref01_ent.create(incidents_import_postmortem_document_result_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != incidents_import_postmortem_document_result_v2_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/incidents_import_postmortem_document_result_v2/IncidentsImportPostmortemDocumentResultV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['incidents_import_postmortem_document_result_v201', 'incidents_import_postmortem_document_result_v202', 'incidents_import_postmortem_document_result_v203', 'incident01', 'incident02', 'incident03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_INCIDENTS_IMPORT_POSTMORTEM_DOCUMENT_RESULT_V2_ENTID'];
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
//# sourceMappingURL=IncidentsImportPostmortemDocumentResultV2Entity.test.js.map
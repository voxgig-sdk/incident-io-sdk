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
(0, node_test_1.describe)('PostmortemDocumentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.PostmortemDocument();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('postmortem_document hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).PostmortemDocument().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).PostmortemDocument()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.PostmortemDocument().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().PostmortemDocument().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.PostmortemDocument().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.PostmortemDocument().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.PostmortemDocument().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'postmortem_document.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "Timestamp for when the document was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "document_url": { "a": true, "h": "Document Url", "n": "document_url", "r": true, "sh": "A URL to view the post-mortem document in the incident.io dashboard", "t": "`$STRING`", "key$": "document_url", "index$": 1 }, "editors": { "a": true, "h": "Editors", "n": "editors", "r": true, "sh": "The list of users who have edited this post-mortem document", "t": "`$ARRAY`", "key$": "editors", "index$": 2 }, "exported_urls": { "a": true, "h": "Exported Urls", "n": "exported_urls", "r": true, "sh": "URLs of any external locations this document has been exported to", "t": "`$ARRAY`", "key$": "exported_urls", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the post-mortem document", "t": "`$STRING`", "key$": "id", "index$": 4 }, "incident_id": { "a": true, "h": "Incident Id", "n": "incident_id", "r": true, "sh": "The unique identifier of the incident that this post-mortem document belongs to", "t": "`$STRING`", "key$": "incident_id", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "The current status of this post-mortem document", "t": "`$STRING`", "key$": "status", "index$": 6 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "The display title of the post-mortem document", "t": "`$STRING`", "key$": "title", "index$": 7 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "Whether this is a native incident.io post-mortem or one hosted in an external provider", "t": "`$STRING`", "key$": "type", "index$": 8 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": true, "sh": "Timestamp for when the document was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "postmortem_document", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/postmortem_documents", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01GBA8J19SMXQWPJMX3P2ESCVG", "k": "query", "n": "incident_id", "or": "incident_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "created_at_oldest_first", "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/v1/postmortem_documents", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "postmortem_documents" }], "t": { "req": "`reqdata`", "res": "`body.postmortem_documents`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/postmortem_documents/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01GDZEW57FDA1K4S63MGMQ5DS9", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v1/postmortem_documents/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "postmortem_documents" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.postmortem_document`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["status"], "co": { "id": "PUT /v1/postmortem_documents/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01GDZEW57FDA1K4S63MGMQ5DS9", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v1/postmortem_documents/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "postmortem_documents" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.postmortem_document`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "postmortem_document", "name__orig": "postmortem_document", "Name": "PostmortemDocument", "name_": "postmortem_document", "name-": "postmortem-document", "NAME": "POSTMORTEM_DOCUMENT", "index$": 70 }, { "active": true, "entity": "postmortem_document", "key$": "BasicPostmortemDocumentFlow", "kind": "basic", "name": "BasicPostmortemDocumentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "postmortem_document_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "postmortem_document_ref01", "srcdatavar": "postmortem_document_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-postmortem_document_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "postmortem_document_ref01", "srcdatavar": "postmortem_document_ref01_data", "suffix": "_dt0" }, "m": { "id": "postmortem_document01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-postmortem_document_ref01" } }], "index$": 2 }] }, 'PostmortemDocument', { "GET /v1/postmortem_documents": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Integer number of records to return", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Integer number of records to return", "example": 25, "format": "int64", "maximum": 250, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A post-mortem document's ID. This endpoint will return a list of post-mortem documents after this ID.", "examples": { "default": { "summary": "default", "value": "01G0J1EXE7AXZ2C93K61WBPYEH" } }, "in": "query", "name": "after", "schema": { "description": "A post-mortem document's ID. This endpoint will return a list of post-mortem documents after this ID.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "Filter to only return post-mortem documents for the given incident", "example": "01GBA8J19SMXQWPJMX3P2ESCVG", "in": "query", "name": "incident_id", "schema": { "description": "Filter to only return post-mortem documents for the given incident", "example": "01GBA8J19SMXQWPJMX3P2ESCVG", "type": "string" }, "index$": 2 }, { "allowEmptyValue": true, "description": "Controls the order that results are returned in", "example": "created_at_oldest_first", "in": "query", "name": "sort_by", "schema": { "default": "created_at_newest_first", "description": "Controls the order that results are returned in", "enum": ["created_at_newest_first", "created_at_oldest_first"], "example": "created_at_oldest_first", "type": "string" }, "index$": 3 }] }, "GET /v1/postmortem_documents/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier for the post-mortem document", "example": "01GDZEW57FDA1K4S63MGMQ5DS9", "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] }, "PUT /v1/postmortem_documents/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "status": "completed" }, "schema": { "example": { "status": "completed" }, "properties": { "status": { "description": "The new status to set the post-mortem document to", "enum": ["in_progress", "in_review", "completed"], "example": "completed", "type": "string", "key$": "status" } }, "required": ["status"], "type": "object", "x-ref": "#/components/schemas/PostmortemDocumentsUpdateStatusPayloadV1", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the post-mortem document", "example": "01GDZEW57FDA1K4S63MGMQ5DS9", "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let postmortem_document_ref01_data = Object.values(setup.data.existing.postmortem_document)[0];
        // LIST
        const postmortem_document_ref01_ent = client.PostmortemDocument();
        const postmortem_document_ref01_match = {};
        const postmortem_document_ref01_list = (await postmortem_document_ref01_ent.list(postmortem_document_ref01_match)).map((e) => e.data());
        // UPDATE
        const postmortem_document_ref01_data_up0 = {};
        postmortem_document_ref01_data_up0.id = postmortem_document_ref01_data.id;
        const postmortem_document_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-postmortem_document_ref01_' + setup.now };
        postmortem_document_ref01_data_up0[postmortem_document_ref01_markdef_up0.name] = postmortem_document_ref01_markdef_up0.value;
        const postmortem_document_ref01_resdata_up0 = (await postmortem_document_ref01_ent.update(postmortem_document_ref01_data_up0)).data();
        (0, node_assert_1.default)(postmortem_document_ref01_resdata_up0.id === postmortem_document_ref01_data_up0.id);
        (0, node_assert_1.default)(postmortem_document_ref01_resdata_up0[postmortem_document_ref01_markdef_up0.name] === postmortem_document_ref01_markdef_up0.value);
        // LOAD
        const postmortem_document_ref01_match_dt0 = {};
        postmortem_document_ref01_match_dt0.id = postmortem_document_ref01_data.id;
        const postmortem_document_ref01_data_dt0 = (await postmortem_document_ref01_ent.load(postmortem_document_ref01_match_dt0)).data();
        (0, node_assert_1.default)(postmortem_document_ref01_data_dt0.id === postmortem_document_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/postmortem_document/PostmortemDocumentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['postmortem_document01', 'postmortem_document02', 'postmortem_document03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_POSTMORTEM_DOCUMENT_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENT_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_POSTMORTEM_DOCUMENT_ENTID'];
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
//# sourceMappingURL=PostmortemDocumentEntity.test.js.map
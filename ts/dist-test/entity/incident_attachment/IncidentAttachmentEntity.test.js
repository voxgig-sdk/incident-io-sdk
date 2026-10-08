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
(0, node_test_1.describe)('IncidentAttachmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.IncidentAttachment();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('incident_attachment hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).IncidentAttachment().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).IncidentAttachment()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.IncidentAttachment().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().IncidentAttachment().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.IncidentAttachment().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.IncidentAttachment().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.IncidentAttachment().list({ "external_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'incident_attachment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier of this incident membership", "t": "`$STRING`", "key$": "id", "index$": 0 }, "incident_id": { "a": true, "h": "Incident Id", "n": "incident_id", "r": true, "sh": "ID of the incident to add an attachment to", "t": "`$STRING`", "key$": "incident_id", "index$": 1 }, "resource": { "a": true, "h": "Resource", "n": "resource", "r": true, "t": "`$OBJECT`", "key$": "resource", "index$": 2 } }, "id": { "field": "id", "name": "id" }, "name": "incident_attachment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["incident_id", "resource"], "co": { "id": "POST /v1/incident_attachments", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/incident_attachments", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "incident_attachments" }], "t": { "req": "`reqdata`", "res": "`body.incident_attachment`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v1/incident_attachments", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "123", "k": "query", "n": "external_id", "or": "external_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "query", "n": "incident_id", "or": "incident_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "pager_duty_incident", "k": "query", "n": "resource_type", "or": "resource_type", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/v1/incident_attachments", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v1" }, { "lit": "incident_attachments" }], "t": { "req": "`reqdata`", "res": "`body.incident_attachments`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v1/incident_attachments/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYD5H", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v1/incident_attachments/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "incident_attachments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "incident_attachment", "name__orig": "incident_attachment", "Name": "IncidentAttachment", "name_": "incident_attachment", "name-": "incident-attachment", "NAME": "INCIDENT_ATTACHMENT", "index$": 43 }, { "active": true, "entity": "incident_attachment", "key$": "BasicIncidentAttachmentFlow", "kind": "basic", "name": "BasicIncidentAttachmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "incident_attachment_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "incident_attachment_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "incident_attachment_ref01", "suffix": "_rm0" }, "m": { "id": "incident_attachment01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "incident_attachment_ref01" } }], "index$": 3 }] }, 'IncidentAttachment', { "POST /v1/incident_attachments": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "resource": { "emoji": "rocket", "external_id": "123", "resource_type": "pager_duty_incident", "title": "Impact tracking spreadsheet", "url": "https://github.com/company/repo/pull/123" } }, "schema": { "example": { "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H", "resource": { "emoji": "rocket", "external_id": "123", "resource_type": "pager_duty_incident", "title": "Impact tracking spreadsheet", "url": "https://github.com/company/repo/pull/123" } }, "properties": { "incident_id": { "description": "ID of the incident to add an attachment to", "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string", "key$": "incident_id" }, "resource": { "example": { "emoji": "rocket", "external_id": "123", "resource_type": "pager_duty_incident", "title": "Impact tracking spreadsheet", "url": "https://github.com/company/repo/pull/123" }, "properties": { "emoji": { "description": "Emoji shortcode representing the link, without surrounding colons. Only supported for the arbitrary_url resource type.", "example": "rocket", "type": "string" }, "external_id": { "description": "ID of the resource in the external system", "example": "123", "type": "string" }, "resource_type": { "description": "E.g. PagerDuty: the external system that holds the resource", "enum": ["pager_duty_incident", "opsgenie_alert", "datadog_monitor_alert", "github_pull_request", "gitlab_merge_request", "sentry_issue", "jira_issue", "jsm_alert", "atlassian_statuspage_incident", "zendesk_ticket", "google_calendar_event", "outlook_calendar_event", "slack_file", "salesforce_case", "pylon_issue", "arbitrary_url", "scrubbed", "statuspage_incident"], "example": "pager_duty_incident", "type": "string" }, "title": { "description": "Human readable title for the link. Only supported for the arbitrary_url resource type.", "example": "Impact tracking spreadsheet", "type": "string" }, "url": { "description": "URL of the external resource to attach for the given resource type.", "example": "https://github.com/company/repo/pull/123", "type": "string" } }, "required": ["resource_type"], "type": "object", "key$": "resource" } }, "required": ["incident_id", "resource"], "type": "object", "x-ref": "#/components/schemas/IncidentAttachmentsCreatePayloadV1", "index$": 1 } } }, "required": true }, "parameters": [] }, "GET /v1/incident_attachments": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Incident that this attachment is against", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "query", "name": "incident_id", "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }, { "allowEmptyValue": true, "description": "ID of the resource in the external system", "example": "123", "in": "query", "name": "external_id", "schema": { "description": "ID of the resource in the external system", "example": "123", "type": "string" }, "index$": 1 }, { "allowEmptyValue": true, "description": "E.g. PagerDuty: the external system that holds the resource", "examples": { "default": { "summary": "default", "value": "pager_duty_incident" } }, "in": "query", "name": "resource_type", "schema": { "description": "E.g. PagerDuty: the external system that holds the resource", "enum": ["pager_duty_incident", "opsgenie_alert", "datadog_monitor_alert", "github_pull_request", "gitlab_merge_request", "sentry_issue", "jira_issue", "jsm_alert", "atlassian_statuspage_incident", "zendesk_ticket", "google_calendar_event", "outlook_calendar_event", "slack_file", "salesforce_case", "pylon_issue", "arbitrary_url", "scrubbed", "statuspage_incident"], "example": "pager_duty_incident", "type": "string" }, "index$": 2 }] }, "DELETE /v1/incident_attachments/{id}": { "protocol": "http", "parameters": [{ "description": "Unique identifier of this incident membership", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYD5H" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const incident_attachment_ref01_ent = client.IncidentAttachment();
        let incident_attachment_ref01_data = setup.data.new.incident_attachment['incident_attachment_ref01'];
        incident_attachment_ref01_data = (await incident_attachment_ref01_ent.create(incident_attachment_ref01_data)).data();
        (0, node_assert_1.default)(null != incident_attachment_ref01_data.id);
        // LIST
        const incident_attachment_ref01_match = {};
        const incident_attachment_ref01_list = (await incident_attachment_ref01_ent.list(incident_attachment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(incident_attachment_ref01_list, { id: incident_attachment_ref01_data.id })));
        // REMOVE
        const incident_attachment_ref01_match_rm0 = { id: incident_attachment_ref01_data.id };
        await incident_attachment_ref01_ent.remove(incident_attachment_ref01_match_rm0);
        // LIST
        const incident_attachment_ref01_match_rt0 = {};
        const incident_attachment_ref01_list_rt0 = (await incident_attachment_ref01_ent.list(incident_attachment_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(incident_attachment_ref01_list_rt0, { id: incident_attachment_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/incident_attachment/IncidentAttachmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['incident_attachment01', 'incident_attachment02', 'incident_attachment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_INCIDENT_ATTACHMENT_ENTID'];
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
//# sourceMappingURL=IncidentAttachmentEntity.test.js.map
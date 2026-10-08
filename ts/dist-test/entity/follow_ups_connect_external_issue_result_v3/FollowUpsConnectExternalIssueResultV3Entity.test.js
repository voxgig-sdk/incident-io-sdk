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
(0, node_test_1.describe)('FollowUpsConnectExternalIssueResultV3Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.FollowUpsConnectExternalIssueResultV3();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.FollowUpsConnectExternalIssueResultV3().create({ "follow_up_id": 1, "assignee": "x", "assignee_team": "x", "category": "x", "created_at": "x", "creator": "x", "external_issue_reference": "x", "id": "x", "incident_id": "x", "labels": "x", "priority": "x", "provider": "x", "status": "x", "title": "x", "updated_at": "x", "url": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'follow_ups_connect_external_issue_result_v3.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assignee": { "a": true, "h": "Assignee", "n": "assignee", "r": true, "t": "`$OBJECT`", "key$": "assignee", "index$": 0 }, "assignee_team": { "a": true, "h": "Assignee Team", "n": "assignee_team", "r": true, "t": "`$OBJECT`", "key$": "assignee_team", "index$": 1 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "t": "`$OBJECT`", "key$": "category", "index$": 2 }, "completed_at": { "a": true, "fo": "date-time", "h": "Completed At", "n": "completed_at", "r": false, "sh": "When the follow-up was completed", "t": "`$STRING`", "key$": "completed_at", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When the follow-up was created", "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "creator": { "a": true, "h": "Creator", "n": "creator", "r": true, "t": "`$OBJECT`", "key$": "creator", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Description of the follow-up", "t": "`$STRING`", "key$": "description", "index$": 6 }, "external_issue_reference": { "a": true, "h": "External Issue Reference", "n": "external_issue_reference", "r": true, "t": "`$OBJECT`", "key$": "external_issue_reference", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the follow-up", "t": "`$STRING`", "key$": "id", "index$": 8 }, "incident_id": { "a": true, "h": "Incident Id", "n": "incident_id", "r": true, "sh": "Unique identifier of the incident the follow-up belongs to", "t": "`$STRING`", "key$": "incident_id", "index$": 9 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": true, "sh": "Labels associated with this follow-up", "t": "`$ARRAY`", "key$": "labels", "index$": 10 }, "priority": { "a": true, "h": "Priority", "n": "priority", "r": true, "t": "`$OBJECT`", "key$": "priority", "index$": 11 }, "provider": { "a": true, "h": "Provider", "n": "provider", "r": true, "sh": "The issue tracker provider the issue belongs to", "t": "`$STRING`", "key$": "provider", "index$": 12 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Status of the follow-up", "t": "`$STRING`", "key$": "status", "index$": 13 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "sh": "Title of the follow-up", "t": "`$STRING`", "key$": "title", "index$": 14 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When the follow-up was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 15 }, "url": { "a": true, "h": "Url", "n": "url", "r": true, "sh": "URL of the issue in the external provider", "t": "`$STRING`", "key$": "url", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "follow_ups_connect_external_issue_result_v3", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["provider", "url"], "co": { "id": "POST /v3/follow_ups/{id}/actions/connect_external_issue", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "follow_up_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v3/follow_ups/{id}/actions/connect_external_issue", "q": { "exist": ["follow_up_id"] }, "r": { "param": { "id": "follow_up_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "follow_ups" }, { "var": "follow_up_id" }, { "lit": "actions" }, { "lit": "connect_external_issue" }], "t": { "req": "`reqdata`", "res": "`body.follow_up`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.follow_up"]] }, "key$": "follow_ups_connect_external_issue_result_v3", "name__orig": "follow_ups_connect_external_issue_result_v3", "Name": "FollowUpsConnectExternalIssueResultV3", "name_": "follow_ups_connect_external_issue_result_v3", "name-": "follow-ups-connect-external-issue-result-v3", "NAME": "FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3", "index$": 38 }, { "active": true, "entity": "follow_ups_connect_external_issue_result_v3", "key$": "BasicFollowUpsConnectExternalIssueResultV3Flow", "kind": "basic", "name": "BasicFollowUpsConnectExternalIssueResultV3Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "follow_ups_connect_external_issue_result_v3_ref01" }, "m": { "follow_up_id": "follow_up01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'FollowUpsConnectExternalIssueResultV3', { "POST /v3/follow_ups/{id}/actions/connect_external_issue": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "provider": "linear", "url": "https://linear.app/incident/issue/INC-123" }, "schema": { "example": { "provider": "linear", "url": "https://linear.app/incident/issue/INC-123" }, "properties": { "provider": { "description": "The issue tracker provider the issue belongs to", "enum": ["asana", "azure_devops", "click_up", "freshservice", "linear", "jira", "salesforce", "jira_server", "github", "gitlab", "service_now", "shortcut", "notion"], "example": "linear", "type": "string", "key$": "provider" }, "url": { "description": "URL of the issue in the external provider", "example": "https://linear.app/incident/issue/INC-123", "type": "string", "key$": "url" } }, "required": ["provider", "url"], "type": "object", "x-ref": "#/components/schemas/FollowUpsConnectExternalIssuePayloadV3", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "Unique identifier for the follow-up", "examples": { "default": { "summary": "default", "value": "01FCNDV6P870EA6S7TK1DSYDG0" } }, "in": "path", "name": "id", "required": true, "schema": { "example": "01FCNDV6P870EA6S7TK1DSYD5H", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const follow_ups_connect_external_issue_result_v3_ref01_ent = client.FollowUpsConnectExternalIssueResultV3();
        let follow_ups_connect_external_issue_result_v3_ref01_data = setup.data.new.follow_ups_connect_external_issue_result_v3['follow_ups_connect_external_issue_result_v3_ref01'];
        follow_ups_connect_external_issue_result_v3_ref01_data['follow_up_id'] = setup.idmap['follow_up01'];
        follow_ups_connect_external_issue_result_v3_ref01_data = (await follow_ups_connect_external_issue_result_v3_ref01_ent.create(follow_ups_connect_external_issue_result_v3_ref01_data)).data();
        (0, node_assert_1.default)(null != follow_ups_connect_external_issue_result_v3_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/follow_ups_connect_external_issue_result_v3/FollowUpsConnectExternalIssueResultV3TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['follow_ups_connect_external_issue_result_v301', 'follow_ups_connect_external_issue_result_v302', 'follow_ups_connect_external_issue_result_v303', 'follow_up01', 'follow_up02', 'follow_up03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_FOLLOW_UPS_CONNECT_EXTERNAL_ISSUE_RESULT_V3_ENTID'];
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
//# sourceMappingURL=FollowUpsConnectExternalIssueResultV3Entity.test.js.map
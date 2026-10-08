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
(0, node_test_1.describe)('AlertSourcesV2Entity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.AlertSourcesV2();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.AlertSourcesV2().create({ "source_type": 1, "template": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'alert_sources_v2.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "owning_team_ids": { "a": true, "h": "Owning Team Ids", "n": "owning_team_ids", "r": false, "sh": "IDs of teams that own this alert source", "t": "`$ARRAY`", "key$": "owning_team_ids", "index$": 0 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": true, "sh": "Type of alert source", "t": "`$STRING`", "key$": "source_type", "index$": 1 }, "template": { "a": true, "h": "Template", "n": "template", "r": true, "t": "`$OBJECT`", "key$": "template", "index$": 2 } }, "name": "alert_sources_v2", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["owning_team_ids", "source_type", "template"], "co": { "id": "POST /v2/alert_sources/actions/validate", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/alert_sources/actions/validate", "q": {}, "r": {}, "s": [{ "lit": "v2" }, { "lit": "alert_sources" }, { "lit": "actions" }, { "lit": "validate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "alert_sources_v2", "name__orig": "alert_sources_v2", "Name": "AlertSourcesV2", "name_": "alert_sources_v2", "name-": "alert-sources-v2", "NAME": "ALERT_SOURCES_V2", "index$": 6 }, { "active": true, "entity": "alert_sources_v2", "key$": "BasicAlertSourcesV2Flow", "kind": "basic", "name": "BasicAlertSourcesV2Flow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "alert_sources_v2_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'AlertSourcesV2', { "POST /v2/alert_sources/actions/validate": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "source_type": "alertmanager", "template": { "attributes": [{ "alert_attribute_id": "abc123", "binding": { "array_value": [{}], "merge_strategy": "first_wins", "value": { "literal": "SEV123", "reference": "incident.severity" } } }], "description": { "literal": "SEV123", "reference": "incident.severity" }, "expressions": [{ "else_branch": { "result": { "array_value": [], "value": {} } }, "label": "Team Slack channel", "operations": [{ "branches": {}, "cast": {}, "concatenate": {}, "filter": {}, "navigate": {}, "operation_type": "navigate", "parse": {} }], "reference": "abc123", "root_reference": "incident.status" }], "is_private": false, "title": { "literal": "SEV123", "reference": "incident.severity" }, "visible_to_teams": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } } }, "schema": { "example": { "owning_team_ids": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "source_type": "alertmanager", "template": { "attributes": [{ "alert_attribute_id": "abc123", "binding": { "array_value": [], "merge_strategy": "first_wins", "value": {} } }], "description": { "literal": "SEV123", "reference": "incident.severity" }, "expressions": [{ "else_branch": { "result": {} }, "label": "Team Slack channel", "operations": [{}], "reference": "abc123", "root_reference": "incident.status" }], "is_private": false, "title": { "literal": "SEV123", "reference": "incident.severity" }, "visible_to_teams": { "array_value": [{ "literal": "SEV123", "reference": "incident.severity" }], "value": { "literal": "SEV123", "reference": "incident.severity" } } } }, "properties": { "owning_team_ids": { "description": "IDs of teams that own this alert source", "example": ["01G0J1EXE7AXZ2C93K61WBPYEH"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "owning_team_ids" }, "source_type": { "description": "Type of alert source", "enum": ["alertmanager", "app_optics", "azure_monitor", "azure_devops", "big_panda", "bugsnag", "checkly", "chronosphere", "cloudwatch", "cloudflare", "coralogix", "cronitor", "crowdstrike_falcon", "dash0", "datadog", "dynatrace", "elasticsearch", "email", "expel", "github_issue", "google_cloud", "google_secops", "grafana", "heartbeat", "http", "http_custom", "honeycomb", "icinga2", "incoming_calls", "jira", "jsm", "logzio", "monte_carlo", "nagios", "new_relic", "opsgenie", "prtg", "pager_duty", "panther", "pingdom", "posthog", "runscope", "sns", "salesforce_case", "sentry", "sentry_metric", "service_now", "splunk", "status_cake", "status_page_views", "sumo_logic", "uptime", "vercel", "wiz", "zendesk"], "example": "alertmanager", "type": "string", "key$": "source_type" }, "template": { "example": { "attributes": [{ "alert_attribute_id": "abc123", "binding": {} }], "description": { "literal": "SEV123", "reference": "incident.severity" }, "expressions": [{ "else_branch": {}, "label": "Team Slack channel", "operations": [], "reference": "abc123", "root_reference": "incident.status" }], "is_private": false, "title": { "literal": "SEV123", "reference": "incident.severity" }, "visible_to_teams": { "array_value": [{}], "value": { "literal": "SEV123", "reference": "incident.severity" } } }, "properties": { "attributes": { "description": "Attributes to set on alerts coming from this source, with a binding describing how to set them.", "example": [{}], "items": { "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/AlertTemplateAttributePayloadV2" }, "type": "array" }, "description": { "example": { "literal": "SEV123", "reference": "incident.severity" }, "properties": { "literal": {}, "reference": {} }, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingValuePayloadV2" }, "expressions": { "description": "Expressions available for use in bindings within this template", "example": [{}], "items": { "example": {}, "properties": {}, "required": [], "type": "object", "x-ref": "#/components/schemas/ExpressionPayloadV2" }, "type": "array" }, "is_private": { "description": "Whether or not alerts produced by this source should be private", "example": false, "type": "boolean" }, "title": { "example": { "literal": "SEV123", "reference": "incident.severity" }, "properties": { "literal": {}, "reference": {} }, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingValuePayloadV2" }, "visible_to_teams": { "example": { "array_value": [], "value": {} }, "properties": { "array_value": {}, "value": {} }, "type": "object", "x-ref": "#/components/schemas/EngineParamBindingPayloadV2" } }, "required": ["expressions", "title", "description", "attributes"], "type": "object", "x-ref": "#/components/schemas/AlertTemplatePayloadV2", "key$": "template" } }, "required": ["source_type", "template"], "type": "object", "x-ref": "#/components/schemas/AlertSourcesValidatePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const alert_sources_v2_ref01_ent = client.AlertSourcesV2();
        let alert_sources_v2_ref01_data = setup.data.new.alert_sources_v2['alert_sources_v2_ref01'];
        alert_sources_v2_ref01_data = (await alert_sources_v2_ref01_ent.create(alert_sources_v2_ref01_data)).data();
        (0, node_assert_1.default)(null != alert_sources_v2_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/alert_sources_v2/AlertSourcesV2TestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['alert_sources_v201', 'alert_sources_v202', 'alert_sources_v203'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_ALERT_SOURCES_V2_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_ALERT_SOURCES_V2_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_ALERT_SOURCES_V2_ENTID'];
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
//# sourceMappingURL=AlertSourcesV2Entity.test.js.map
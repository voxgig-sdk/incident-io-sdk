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
(0, node_test_1.describe)('ManagedResourceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.ManagedResource();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ManagedResource().create({ "annotations": "x", "resource_id": 1, "resource_type": "x" }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'managed_resource.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "annotations": { "a": true, "h": "Annotations", "n": "annotations", "r": true, "sh": "Annotations that track metadata about this resource", "t": "`$OBJECT`", "key$": "annotations", "index$": 0 }, "managed_by": { "a": true, "h": "Managed By", "n": "managed_by", "r": true, "sh": "How is this resource managed", "t": "`$STRING`", "key$": "managed_by", "index$": 1 }, "resource_id": { "a": true, "h": "Resource Id", "n": "resource_id", "r": true, "sh": "The ID of the resource that this relates to", "t": "`$STRING`", "key$": "resource_id", "index$": 2 }, "resource_type": { "a": true, "h": "Resource Type", "n": "resource_type", "r": true, "sh": "The type of the related resource", "t": "`$STRING`", "key$": "resource_type", "index$": 3 }, "source_url": { "a": true, "h": "Source Url", "n": "source_url", "r": false, "sh": "The url of the external repository where this resource is managed (if there is one)", "t": "`$STRING`", "key$": "source_url", "index$": 4 } }, "name": "managed_resource", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["annotations", "resource_id", "resource_type"], "co": { "id": "POST /v2/managed_resources", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/managed_resources", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "managed_resources" }], "t": { "req": "`reqdata`", "res": "`body.managed_resource`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "managed_resource", "name__orig": "managed_resource", "Name": "ManagedResource", "name_": "managed_resource", "name-": "managed-resource", "NAME": "MANAGED_RESOURCE", "index$": 62 }, { "active": true, "entity": "managed_resource", "key$": "BasicManagedResourceFlow", "kind": "basic", "name": "BasicManagedResourceFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "managed_resource_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ManagedResource', { "POST /v2/managed_resources": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "annotations": { "incident.io/terraform/version": "3.0.0" }, "resource_id": "abc123", "resource_type": "alert_route" }, "schema": { "example": { "annotations": { "incident.io/terraform/version": "3.0.0" }, "resource_id": "abc123", "resource_type": "alert_route" }, "properties": { "annotations": { "additionalProperties": { "example": "abc123", "type": "string" }, "description": "Annotations that track metadata about this resource", "example": { "incident.io/terraform/version": "3.0.0" }, "type": "object", "key$": "annotations" }, "resource_id": { "description": "The ID of the resource that this relates to", "example": "abc123", "type": "string", "key$": "resource_id" }, "resource_type": { "description": "The type of the related resource", "enum": ["alert_route", "alert_source", "api_key", "incident_form", "incident_template", "escalation_path", "escalation_path_template", "policy", "schedule", "schedule_sync_target", "schedule_sync_rule", "secret", "status_page_component", "status_page_structure", "team_grouping_preference", "workflow"], "example": "alert_route", "type": "string", "key$": "resource_type" } }, "required": ["annotations", "resource_type", "resource_id"], "type": "object", "x-ref": "#/components/schemas/ManagedResourcesCreateManagedResourcePayloadV2", "index$": 1 } } }, "required": true }, "parameters": [] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const managed_resource_ref01_ent = client.ManagedResource();
        let managed_resource_ref01_data = setup.data.new.managed_resource['managed_resource_ref01'];
        managed_resource_ref01_data = (await managed_resource_ref01_ent.create(managed_resource_ref01_data)).data();
        (0, node_assert_1.default)(null != managed_resource_ref01_data);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/managed_resource/ManagedResourceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['managed_resource01', 'managed_resource02', 'managed_resource03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_MANAGED_RESOURCE_ENTID'];
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
//# sourceMappingURL=ManagedResourceEntity.test.js.map
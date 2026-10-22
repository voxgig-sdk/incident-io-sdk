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
(0, node_test_1.describe)('CatalogTypeSchemaEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.CatalogTypeSchema();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.CatalogTypeSchema().create({ "catalog_type_id": 1, "attributes": "x", "version": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'catalog_type_schema.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "annotations": { "a": true, "h": "Annotations", "n": "annotations", "r": true, "sh": "Annotations that can track metadata about this type", "t": "`$OBJECT`", "key$": "annotations", "index$": 0 }, "attributes": { "a": true, "h": "Attributes", "n": "attributes", "r": true, "t": "`$ARRAY`", "key$": "attributes", "index$": 1 }, "categories": { "a": true, "h": "Categories", "n": "categories", "r": true, "sh": "What categories is this type considered part of", "t": "`$ARRAY`", "key$": "categories", "index$": 2 }, "color": { "a": true, "h": "Color", "n": "color", "r": true, "sh": "Sets the display color of this type in the dashboard", "t": "`$STRING`", "key$": "color", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "When this type was created", "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "Human readble description of this type", "t": "`$STRING`", "key$": "description", "index$": 5 }, "dynamic_resource_parameter": { "a": true, "h": "Dynamic Resource Parameter", "n": "dynamic_resource_parameter", "r": false, "sh": "If this is a dynamic catalog type, this will be the unique parameter for identitfying this resource externally.", "t": "`$STRING`", "key$": "dynamic_resource_parameter", "index$": 6 }, "engine_resource_type": { "a": true, "h": "Engine Resource Type", "n": "engine_resource_type", "r": true, "sh": "The way this resource type is referenced in the engine, as used when setting the type of an alert attribute", "t": "`$STRING`", "key$": "engine_resource_type", "index$": 7 }, "estimated_count": { "a": true, "fo": "int64", "h": "Estimated Count", "n": "estimated_count", "r": false, "sh": "If populated, gives an estimated count of entries for this type", "t": "`$INTEGER`", "key$": "estimated_count", "index$": 8 }, "icon": { "a": true, "h": "Icon", "n": "icon", "r": true, "sh": "Sets the display icon of this type in the dashboard", "t": "`$STRING`", "key$": "icon", "index$": 9 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "ID of this catalog type", "t": "`$STRING`", "key$": "id", "index$": 10 }, "is_editable": { "a": true, "h": "Is Editable", "n": "is_editable", "r": true, "sh": "Catalog types that are synced with external resources can't be edited", "t": "`$BOOLEAN`", "key$": "is_editable", "index$": 11 }, "is_team_type": { "a": true, "h": "Is Team Type", "n": "is_team_type", "r": false, "sh": "Whether this catalog type is the designated team type in team settings", "t": "`$BOOLEAN`", "key$": "is_team_type", "index$": 12 }, "last_synced_at": { "a": true, "fo": "date-time", "h": "Last Synced At", "n": "last_synced_at", "r": false, "sh": "When this type was last synced (if it's ever been sync'd)", "t": "`$STRING`", "key$": "last_synced_at", "index$": 13 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name is the human readable name of this type", "t": "`$STRING`", "key$": "name", "index$": 14 }, "owning_team_ids": { "a": true, "h": "Owning Team Ids", "n": "owning_team_ids", "r": false, "sh": "IDs of the teams that own this catalog type", "t": "`$ARRAY`", "key$": "owning_team_ids", "index$": 15 }, "ranked": { "a": true, "h": "Ranked", "n": "ranked", "r": true, "sh": "If this type should be ranked", "t": "`$BOOLEAN`", "key$": "ranked", "index$": 16 }, "registry_type": { "a": true, "h": "Registry Type", "n": "registry_type", "r": false, "sh": "The registry resource this type is synced from, if any", "t": "`$STRING`", "key$": "registry_type", "index$": 17 }, "required_integrations": { "a": true, "h": "Required Integrations", "n": "required_integrations", "r": false, "sh": "If populated, the integrations required for this type", "t": "`$ARRAY`", "key$": "required_integrations", "index$": 18 }, "schema": { "a": true, "h": "Schema", "n": "schema", "r": true, "t": "`$OBJECT`", "key$": "schema", "index$": 19 }, "source_repo_url": { "a": true, "h": "Source Repo Url", "n": "source_repo_url", "r": false, "sh": "The url of the external repository where this type is managed", "t": "`$STRING`", "key$": "source_repo_url", "index$": 20 }, "type_name": { "a": true, "h": "Type Name", "n": "type_name", "r": true, "sh": "The type name of this catalog type, to be used when defining attributes.", "t": "`$STRING`", "key$": "type_name", "index$": 21 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "sh": "When this type was last updated", "t": "`$STRING`", "key$": "updated_at", "index$": 22 }, "use_name_as_identifier": { "a": true, "h": "Use Name As Identifier", "n": "use_name_as_identifier", "r": true, "sh": "If enabled, you can refer to entries of this type by their name, as well as their external ID and any aliases.", "t": "`$BOOLEAN`", "key$": "use_name_as_identifier", "index$": 23 }, "version": { "a": true, "fo": "int64", "h": "Version", "n": "version", "r": true, "t": "`$INTEGER`", "key$": "version", "index$": 24 } }, "id": { "field": "id", "name": "id" }, "name": "catalog_type_schema", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["attributes", "version"], "co": { "id": "POST /v2/catalog_types/{id}/actions/update_schema", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "catalog_type_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v2/catalog_types/{id}/actions/update_schema", "q": { "$action": "v2", "exist": ["catalog_type_id"] }, "r": { "param": { "id": "catalog_type_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "catalog_types" }, { "var": "catalog_type_id" }, { "lit": "actions" }, { "lit": "update_schema" }], "t": { "req": "`reqdata`", "res": "`body.catalog_type`" }, "index$": 0 }, { "a": true, "bf": ["attributes", "version"], "co": { "id": "POST /v3/catalog_types/{id}/actions/update_schema", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01FCNDV6P870EA6S7TK1DSYDG0", "k": "param", "n": "catalog_type_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/v3/catalog_types/{id}/actions/update_schema", "q": { "exist": ["catalog_type_id"] }, "r": { "param": { "id": "catalog_type_id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v3" }, { "lit": "catalog_types" }, { "var": "catalog_type_id" }, { "lit": "actions" }, { "lit": "update_schema" }], "t": { "req": "`reqdata`", "res": "`body.catalog_type`" }, "index$": 1 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.catalog_type"]] }, "key$": "catalog_type_schema", "name__orig": "catalog_type_schema", "Name": "CatalogTypeSchema", "name_": "catalog_type_schema", "name-": "catalog-type-schema", "NAME": "CATALOG_TYPE_SCHEMA", "index$": 22 }, { "active": true, "entity": "catalog_type_schema", "key$": "BasicCatalogTypeSchemaFlow", "kind": "basic", "name": "BasicCatalogTypeSchemaFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "catalog_type_schema_ref01" }, "m": { "catalog_type_id": "catalog_type01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CatalogTypeSchema', { "POST /v2/catalog_types/{id}/actions/update_schema": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "attributes": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{ "attribute_id": "abc123" }], "type": "Custom[\"Service\"]" }], "version": 1 }, "schema": { "example": { "attributes": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{ "attribute_id": "abc123" }], "type": "Custom[\"Service\"]" }], "version": 1 }, "properties": { "attributes": { "example": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{}], "type": "Custom[\"Service\"]" }], "items": { "example": { "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{}], "type": "Custom[\"Service\"]" }, "properties": { "array": { "description": "Whether this attribute is an array", "example": false, "type": "boolean" }, "backlink_attribute": { "description": "The attribute to use (if this is a backlink)", "example": "abc123", "type": "string" }, "id": { "description": "The ID of this attribute", "example": "01GW2G3V0S59R238FAHPDS1R66", "type": "string" }, "mode": { "description": "Controls how this attribute is modified", "enum": [], "example": "", "type": "string", "x-public-api-version": "v2" }, "name": { "description": "Unique name of this attribute", "example": "tier", "type": "string" }, "path": { "description": "The path to use (if this is an path)", "example": [], "items": {}, "type": "array" }, "type": { "description": "Catalog type name for this attribute", "example": "Custom[\"Service\"]", "type": "string" } }, "required": ["name", "type", "array"], "type": "object", "x-ref": "#/components/schemas/CatalogTypeAttributePayloadV2" }, "type": "array" }, "version": { "example": 1, "format": "int64", "type": "integer" } }, "required": ["attributes", "version"], "type": "object", "x-ref": "#/components/schemas/CatalogUpdateTypeSchemaPayloadV2" } } }, "required": true }, "parameters": [{ "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] }, "POST /v3/catalog_types/{id}/actions/update_schema": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "attributes": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{ "attribute_id": "abc123" }], "type": "Custom[\"Service\"]" }], "version": 1 }, "schema": { "example": { "attributes": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{ "attribute_id": "abc123" }], "type": "Custom[\"Service\"]" }], "version": 1 }, "properties": { "attributes": { "example": [{ "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{}], "type": "Custom[\"Service\"]" }], "items": { "example": { "array": false, "backlink_attribute": "abc123", "id": "01GW2G3V0S59R238FAHPDS1R66", "mode": "", "name": "tier", "path": [{}], "type": "Custom[\"Service\"]" }, "properties": { "array": { "description": "Whether this attribute is an array", "example": false, "type": "boolean" }, "backlink_attribute": { "description": "The attribute to use (if this is a backlink)", "example": "abc123", "type": "string" }, "id": { "description": "The ID of this attribute", "example": "01GW2G3V0S59R238FAHPDS1R66", "type": "string" }, "mode": { "description": "Controls how this attribute is modified", "enum": [], "example": "", "type": "string", "x-public-api-version": "v3" }, "name": { "description": "Unique name of this attribute", "example": "tier", "type": "string" }, "path": { "description": "The path to use (if this is an path)", "example": [], "items": {}, "type": "array" }, "type": { "description": "Catalog type name for this attribute", "example": "Custom[\"Service\"]", "type": "string" } }, "required": ["name", "type", "array"], "type": "object", "x-ref": "#/components/schemas/CatalogTypeAttributePayloadV3" }, "type": "array", "key$": "attributes" }, "version": { "example": 1, "format": "int64", "type": "integer", "key$": "version" } }, "required": ["attributes", "version"], "type": "object", "x-ref": "#/components/schemas/CatalogUpdateTypeSchemaPayloadV3", "index$": 1 } } }, "required": true }, "parameters": [{ "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "in": "path", "name": "id", "required": true, "schema": { "description": "ID of this catalog type", "example": "01FCNDV6P870EA6S7TK1DSYDG0", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const catalog_type_schema_ref01_ent = client.CatalogTypeSchema();
        let catalog_type_schema_ref01_data = setup.data.new.catalog_type_schema['catalog_type_schema_ref01'];
        catalog_type_schema_ref01_data['catalog_type_id'] = setup.idmap['catalog_type01'];
        catalog_type_schema_ref01_data = (await catalog_type_schema_ref01_ent.create(catalog_type_schema_ref01_data)).data();
        (0, node_assert_1.default)(null != catalog_type_schema_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/catalog_type_schema/CatalogTypeSchemaTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['catalog_type_schema01', 'catalog_type_schema02', 'catalog_type_schema03', 'catalog_type01', 'catalog_type02', 'catalog_type03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_CATALOG_TYPE_SCHEMA_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_CATALOG_TYPE_SCHEMA_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_CATALOG_TYPE_SCHEMA_ENTID'];
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
//# sourceMappingURL=CatalogTypeSchemaEntity.test.js.map
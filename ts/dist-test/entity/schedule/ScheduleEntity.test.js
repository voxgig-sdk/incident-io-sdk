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
(0, node_test_1.describe)('ScheduleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when INCIDENT_IO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('INCIDENT_IO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.IncidentIoSDK.test();
        const ent = testsdk.Schedule();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('schedule hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.IncidentIoSDK.test(offline).Schedule().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.IncidentIoSDK.test(offline).Schedule()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.IncidentIoSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Schedule().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.IncidentIoSDK.test().Schedule().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.IncidentIoSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Schedule().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Schedule().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.IncidentIoSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Schedule().list({ "after": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.INCIDENT_IO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'schedule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "annotations": { "a": true, "h": "Annotations", "n": "annotations", "op": { "create": { "req": false, "type": "`$OBJECT`" }, "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "sh": "Annotations that track metadata about this resource", "t": "`$OBJECT`", "key$": "annotations", "index$": 0 }, "config": { "a": true, "h": "Config", "n": "config", "op": { "create": { "req": false, "type": "`$OBJECT`" }, "update": { "req": false, "type": "`$OBJECT`" } }, "r": true, "t": "`$OBJECT`", "key$": "config", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "current_shifts": { "a": true, "h": "Current Shifts", "n": "current_shifts", "r": false, "sh": "Shifts that are ongoing for this schedule", "t": "`$ARRAY`", "key$": "current_shifts", "index$": 3 }, "holidays_public_config": { "a": true, "h": "Holidays Public Config", "n": "holidays_public_config", "r": true, "t": "`$OBJECT`", "key$": "holidays_public_config", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique internal ID of the schedule", "t": "`$STRING`", "key$": "id", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Human readable name synced from external provider", "t": "`$STRING`", "key$": "name", "index$": 6 }, "next_shifts": { "a": true, "h": "Next Shifts", "n": "next_shifts", "r": false, "sh": "The shifts after the next changeover.", "t": "`$ARRAY`", "key$": "next_shifts", "index$": 7 }, "permalink": { "a": true, "h": "Permalink", "n": "permalink", "r": true, "sh": "A permanent link to this schedule in the incident.io dashboard", "t": "`$STRING`", "key$": "permalink", "index$": 8 }, "team_ids": { "a": true, "h": "Team Ids", "n": "team_ids", "op": { "create": { "req": false, "type": "`$ARRAY`" }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "IDs of teams that own this schedule", "t": "`$ARRAY`", "key$": "team_ids", "index$": 9 }, "timezone": { "a": true, "h": "Timezone", "n": "timezone", "op": { "create": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Timezone of the schedule, as interpreted at the point of generating the report", "t": "`$STRING`", "key$": "timezone", "index$": 10 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": true, "t": "`$STRING`", "key$": "updated_at", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "schedule", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "bf": ["annotations", "config", "holidays_public_config", "name", "team_ids", "timezone"], "co": { "id": "POST /v2/schedules", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v2/schedules", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "schedules" }], "t": { "req": { "schedule": "`reqdata`" }, "res": "`body.schedule`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /v2/schedules", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "01FDAG4SAP5TYPT98WGR2N7W91", "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 25, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/v2/schedules", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "schedules" }], "t": { "req": "`reqdata`", "res": "`body.schedules`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v2/schedules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/v2/schedules/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.schedule`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /v2/schedules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/v2/schedules/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "v2" }, { "lit": "schedules" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "bf": ["annotations", "config", "holidays_public_config", "name", "team_ids", "timezone"], "co": { "id": "PUT /v2/schedules/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "01G0J1EXE7AXZ2C93K61WBPYEH", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/v2/schedules/{id}", "q": { "exist": ["id"] }, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "v2" }, { "lit": "schedules" }, { "var": "id" }], "t": { "req": { "schedule": "`reqdata`" }, "res": "`body.schedule`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "schedule", "name__orig": "schedule", "Name": "Schedule", "name_": "schedule", "name-": "schedule", "NAME": "SCHEDULE", "index$": 80 }, { "active": true, "entity": "schedule", "key$": "BasicScheduleFlow", "kind": "basic", "name": "BasicScheduleFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "schedule_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "schedule_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "schedule_ref01", "srcdatavar": "schedule_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-schedule_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "schedule_ref01", "srcdatavar": "schedule_ref01_data", "suffix": "_dt0" }, "m": { "id": "schedule01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-schedule_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "schedule_ref01", "suffix": "_rm0" }, "m": { "id": "schedule01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "schedule_ref01" } }], "index$": 5 }] }, 'Schedule', { "POST /v2/schedules": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "schedule": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{ "effective_from": "2021-08-17T13:28:57.801578Z", "handover_start_at": "2021-08-17T13:28:57.801578Z", "handovers": [{}], "id": "01G0J1EXE7AXZ2C93K61WBPYEH", "layers": [{}], "name": "My Rotation", "scheduling_mode": "fair", "users": [{}], "working_interval": [{}], "working_intervals": [{}] }] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" } }, "schema": { "example": { "schedule": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{ "effective_from": "2021-08-17T13:28:57.801578Z", "handover_start_at": "2021-08-17T13:28:57.801578Z", "handovers": [], "id": "01G0J1EXE7AXZ2C93K61WBPYEH", "layers": [], "name": "My Rotation", "scheduling_mode": "fair", "users": [], "working_interval": [], "working_intervals": [] }] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" } }, "properties": { "schedule": { "example": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{}] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" }, "properties": { "annotations": { "additionalProperties": { "example": "abc123", "type": "string" }, "description": "Annotations that can track metadata about the schedule", "example": { "incident.io/terraform/version": "version-of-terraform" }, "type": "object", "key$": "annotations" }, "config": { "example": { "rotations": [] }, "properties": { "rotations": {} }, "type": "object", "x-ref": "#/components/schemas/ScheduleConfigCreatePayloadV2", "key$": "config" }, "holidays_public_config": { "example": { "country_codes": [] }, "properties": { "country_codes": {} }, "required": ["country_codes"], "type": "object", "x-ref": "#/components/schemas/ScheduleHolidaysPublicConfigPayloadV2", "key$": "holidays_public_config" }, "name": { "description": "Name of the schedule", "example": "Primary On-call Schedule", "type": "string", "key$": "name" }, "team_ids": { "description": "IDs of teams that own this schedule", "example": ["01JPQA75EPNEES4479P16P4XAB"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "team_ids" }, "timezone": { "description": "Timezone of the schedule", "example": "America/Los_Angeles", "type": "string", "key$": "timezone" } }, "type": "object", "x-ref": "#/components/schemas/ScheduleCreatePayloadV2", "index$": 1 } }, "required": ["schedule"], "type": "object", "x-ref": "#/components/schemas/SchedulesCreatePayloadV2" } } }, "required": true }, "parameters": [] }, "GET /v2/schedules": { "protocol": "http", "parameters": [{ "allowEmptyValue": true, "description": "Note that next_shifts will only be returned when the page size is 25 or lower.", "example": 25, "in": "query", "name": "page_size", "schema": { "default": 25, "description": "Note that next_shifts will only be returned when the page size is 25 or lower.", "example": 25, "format": "int64", "maximum": 10000, "minimum": 1, "type": "integer" }, "index$": 0 }, { "allowEmptyValue": true, "description": "A schedule's ID. This endpoint will return a list of schedules after this ID in relation to the API response order.", "examples": { "default": { "summary": "default", "value": "01FDAG4SAP5TYPT98WGR2N7W91" } }, "in": "query", "name": "after", "schema": { "description": "A schedule's ID. This endpoint will return a list of schedules after this ID in relation to the API response order.", "example": "01FDAG4SAP5TYPT98WGR2N7W91", "type": "string" }, "index$": 1 }] }, "GET /v2/schedules/{id}": { "protocol": "http", "parameters": [{ "description": "Unique internal ID of the schedule", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique internal ID of the schedule", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] }, "DELETE /v2/schedules/{id}": { "protocol": "http", "parameters": [{ "description": "Unique internal ID of the schedule", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "Unique internal ID of the schedule", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] }, "PUT /v2/schedules/{id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "example": { "schedule": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{ "effective_from": "2021-08-17T13:28:57.801578Z", "handover_start_at": "2021-08-17T13:28:57.801578Z", "handovers": [{}], "id": "01G0J1EXE7AXZ2C93K61WBPYEH", "layers": [{}], "name": "My Rotation", "scheduling_mode": "fair", "users": [{}], "working_interval": [{}], "working_intervals": [{}] }] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" } }, "schema": { "example": { "schedule": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{ "effective_from": "2021-08-17T13:28:57.801578Z", "handover_start_at": "2021-08-17T13:28:57.801578Z", "handovers": [], "id": "01G0J1EXE7AXZ2C93K61WBPYEH", "layers": [], "name": "My Rotation", "scheduling_mode": "fair", "users": [], "working_interval": [], "working_intervals": [] }] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" } }, "properties": { "schedule": { "example": { "annotations": { "incident.io/terraform/version": "version-of-terraform" }, "config": { "rotations": [{}] }, "holidays_public_config": { "country_codes": ["abc123"] }, "name": "Primary On-call Schedule", "team_ids": ["01JPQA75EPNEES4479P16P4XAB"], "timezone": "America/Los_Angeles" }, "properties": { "annotations": { "additionalProperties": { "example": "abc123", "type": "string" }, "description": "Annotations that can track metadata about the schedule", "example": { "incident.io/terraform/version": "version-of-terraform" }, "type": "object", "key$": "annotations" }, "config": { "example": { "rotations": [] }, "properties": { "rotations": {} }, "type": "object", "x-ref": "#/components/schemas/ScheduleConfigUpdatePayloadV2", "key$": "config" }, "holidays_public_config": { "example": { "country_codes": [] }, "properties": { "country_codes": {} }, "required": ["country_codes"], "type": "object", "x-ref": "#/components/schemas/ScheduleHolidaysPublicConfigPayloadV2", "key$": "holidays_public_config" }, "name": { "description": "Name of the schedule", "example": "Primary On-call Schedule", "type": "string", "key$": "name" }, "team_ids": { "description": "IDs of teams that own this schedule", "example": ["01JPQA75EPNEES4479P16P4XAB"], "items": { "example": "abc123", "type": "string" }, "type": "array", "key$": "team_ids" }, "timezone": { "description": "Timezone of the schedule", "example": "America/Los_Angeles", "type": "string", "key$": "timezone" } }, "type": "object", "x-ref": "#/components/schemas/ScheduleUpdatePayloadV2", "index$": 1 } }, "required": ["schedule"], "type": "object", "x-ref": "#/components/schemas/SchedulesUpdatePayloadV2" } } }, "required": true }, "parameters": [{ "description": "The schedule ID to update.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "in": "path", "name": "id", "required": true, "schema": { "description": "The schedule ID to update.", "example": "01G0J1EXE7AXZ2C93K61WBPYEH", "type": "string" }, "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const schedule_ref01_ent = client.Schedule();
        let schedule_ref01_data = setup.data.new.schedule['schedule_ref01'];
        schedule_ref01_data = (await schedule_ref01_ent.create(schedule_ref01_data)).data();
        (0, node_assert_1.default)(null != schedule_ref01_data.id);
        // LIST
        const schedule_ref01_match = {};
        const schedule_ref01_list = (await schedule_ref01_ent.list(schedule_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(schedule_ref01_list, { id: schedule_ref01_data.id })));
        // UPDATE
        const schedule_ref01_data_up0 = {};
        schedule_ref01_data_up0.id = schedule_ref01_data.id;
        const schedule_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-schedule_ref01_' + setup.now };
        schedule_ref01_data_up0[schedule_ref01_markdef_up0.name] = schedule_ref01_markdef_up0.value;
        const schedule_ref01_resdata_up0 = (await schedule_ref01_ent.update(schedule_ref01_data_up0)).data();
        (0, node_assert_1.default)(schedule_ref01_resdata_up0.id === schedule_ref01_data_up0.id);
        (0, node_assert_1.default)(schedule_ref01_resdata_up0[schedule_ref01_markdef_up0.name] === schedule_ref01_markdef_up0.value);
        // LOAD
        const schedule_ref01_match_dt0 = {};
        schedule_ref01_match_dt0.id = schedule_ref01_data.id;
        const schedule_ref01_data_dt0 = (await schedule_ref01_ent.load(schedule_ref01_match_dt0)).data();
        (0, node_assert_1.default)(schedule_ref01_data_dt0.id === schedule_ref01_data.id);
        // REMOVE
        const schedule_ref01_match_rm0 = { id: schedule_ref01_data.id };
        await schedule_ref01_ent.remove(schedule_ref01_match_rm0);
        // LIST
        const schedule_ref01_match_rt0 = {};
        const schedule_ref01_list_rt0 = (await schedule_ref01_ent.list(schedule_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(schedule_ref01_list_rt0, { id: schedule_ref01_data.id })));
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/schedule/ScheduleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.IncidentIoSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['schedule01', 'schedule02', 'schedule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'INCIDENT_IO_TEST_SCHEDULE_ENTID': idmap,
        'INCIDENT_IO_TEST_LIVE': 'FALSE',
        'INCIDENT_IO_TEST_EXPLAIN': 'FALSE',
        'INCIDENT_IO_APIKEY': '',
    });
    idmap = env['INCIDENT_IO_TEST_SCHEDULE_ENTID'];
    const live = 'TRUE' === env.INCIDENT_IO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['INCIDENT_IO_TEST_SCHEDULE_ENTID'];
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
//# sourceMappingURL=ScheduleEntity.test.js.map
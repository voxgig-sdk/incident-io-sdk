"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationsV2Entity = void 0;
const IncidentIoEntityBase_1 = require("../IncidentIoEntityBase");
class EscalationsV2Entity extends IncidentIoEntityBase_1.IncidentIoEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'escalations_v2';
        this.name_ = 'escalations_v2';
        this.Name = 'EscalationsV2';
    }
    make() {
        return new EscalationsV2Entity(this._client, this.entopts());
    }
}
exports.EscalationsV2Entity = EscalationsV2Entity;
//# sourceMappingURL=EscalationsV2Entity.js.map
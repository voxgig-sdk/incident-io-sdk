import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageIncident, StatusPageIncidentLoadMatch, StatusPageIncidentListMatch, StatusPageIncidentCreateData, StatusPageIncidentUpdateData } from '../IncidentIoTypes';
declare class StatusPageIncidentEntity extends IncidentIoEntityBase<StatusPageIncident> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageIncidentEntity): StatusPageIncidentEntity;
    load(this: any, reqmatch?: StatusPageIncidentLoadMatch, ctrl?: Control): Promise<StatusPageIncidentEntity>;
    list(this: any, reqmatch?: StatusPageIncidentListMatch, ctrl?: Control): Promise<StatusPageIncidentEntity[]>;
    create(this: any, reqdata?: StatusPageIncidentCreateData, ctrl?: Control): Promise<StatusPageIncidentEntity>;
    update(this: any, reqdata?: StatusPageIncidentUpdateData, ctrl?: Control): Promise<StatusPageIncidentEntity>;
}
export { StatusPageIncidentEntity };

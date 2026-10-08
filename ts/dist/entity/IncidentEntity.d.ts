import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Incident, IncidentLoadMatch, IncidentListMatch, IncidentCreateData } from '../IncidentIoTypes';
declare class IncidentEntity extends IncidentIoEntityBase<Incident> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentEntity): IncidentEntity;
    load(this: any, reqmatch?: IncidentLoadMatch, ctrl?: Control): Promise<IncidentEntity>;
    list(this: any, reqmatch?: IncidentListMatch, ctrl?: Control): Promise<IncidentEntity[]>;
    create(this: any, reqdata?: IncidentCreateData, ctrl?: Control): Promise<IncidentEntity>;
}
export { IncidentEntity };

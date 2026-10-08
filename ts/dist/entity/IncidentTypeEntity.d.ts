import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentType, IncidentTypeLoadMatch, IncidentTypeListMatch } from '../IncidentIoTypes';
declare class IncidentTypeEntity extends IncidentIoEntityBase<IncidentType> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTypeEntity): IncidentTypeEntity;
    load(this: any, reqmatch?: IncidentTypeLoadMatch, ctrl?: Control): Promise<IncidentTypeEntity>;
    list(this: any, reqmatch?: IncidentTypeListMatch, ctrl?: Control): Promise<IncidentTypeEntity[]>;
}
export { IncidentTypeEntity };

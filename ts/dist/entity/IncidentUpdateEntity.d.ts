import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentUpdate, IncidentUpdateListMatch, IncidentUpdateCreateData } from '../IncidentIoTypes';
declare class IncidentUpdateEntity extends IncidentIoEntityBase<IncidentUpdate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentUpdateEntity): IncidentUpdateEntity;
    list(this: any, reqmatch?: IncidentUpdateListMatch, ctrl?: Control): Promise<IncidentUpdateEntity[]>;
    create(this: any, reqdata?: IncidentUpdateCreateData, ctrl?: Control): Promise<IncidentUpdateEntity>;
}
export { IncidentUpdateEntity };

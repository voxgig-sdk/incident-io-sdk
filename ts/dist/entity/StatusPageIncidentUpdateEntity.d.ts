import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageIncidentUpdate, StatusPageIncidentUpdateCreateData } from '../IncidentIoTypes';
declare class StatusPageIncidentUpdateEntity extends IncidentIoEntityBase<StatusPageIncidentUpdate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageIncidentUpdateEntity): StatusPageIncidentUpdateEntity;
    create(this: any, reqdata?: StatusPageIncidentUpdateCreateData, ctrl?: Control): Promise<StatusPageIncidentUpdateEntity>;
}
export { StatusPageIncidentUpdateEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageStructure, StatusPageStructureLoadMatch } from '../IncidentIoTypes';
declare class StatusPageStructureEntity extends IncidentIoEntityBase<StatusPageStructure> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageStructureEntity): StatusPageStructureEntity;
    load(this: any, reqmatch?: StatusPageStructureLoadMatch, ctrl?: Control): Promise<StatusPageStructureEntity>;
}
export { StatusPageStructureEntity };

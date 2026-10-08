import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentStatus, IncidentStatusLoadMatch, IncidentStatusListMatch, IncidentStatusCreateData, IncidentStatusUpdateData, IncidentStatusRemoveMatch } from '../IncidentIoTypes';
declare class IncidentStatusEntity extends IncidentIoEntityBase<IncidentStatus> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentStatusEntity): IncidentStatusEntity;
    load(this: any, reqmatch?: IncidentStatusLoadMatch, ctrl?: Control): Promise<IncidentStatusEntity>;
    list(this: any, reqmatch?: IncidentStatusListMatch, ctrl?: Control): Promise<IncidentStatusEntity[]>;
    create(this: any, reqdata?: IncidentStatusCreateData, ctrl?: Control): Promise<IncidentStatusEntity>;
    update(this: any, reqdata?: IncidentStatusUpdateData, ctrl?: Control): Promise<IncidentStatusEntity>;
    remove(this: any, reqmatch?: IncidentStatusRemoveMatch, ctrl?: Control): Promise<IncidentStatusEntity>;
}
export { IncidentStatusEntity };

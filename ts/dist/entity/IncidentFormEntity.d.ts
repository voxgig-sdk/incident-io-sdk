import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentForm, IncidentFormLoadMatch, IncidentFormListMatch, IncidentFormCreateData, IncidentFormUpdateData, IncidentFormRemoveMatch } from '../IncidentIoTypes';
declare class IncidentFormEntity extends IncidentIoEntityBase<IncidentForm> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentFormEntity): IncidentFormEntity;
    load(this: any, reqmatch?: IncidentFormLoadMatch, ctrl?: Control): Promise<IncidentFormEntity>;
    list(this: any, reqmatch?: IncidentFormListMatch, ctrl?: Control): Promise<IncidentFormEntity[]>;
    create(this: any, reqdata?: IncidentFormCreateData, ctrl?: Control): Promise<IncidentFormEntity>;
    update(this: any, reqdata?: IncidentFormUpdateData, ctrl?: Control): Promise<IncidentFormEntity>;
    remove(this: any, reqmatch?: IncidentFormRemoveMatch, ctrl?: Control): Promise<IncidentFormEntity>;
}
export { IncidentFormEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertAttribute, AlertAttributeLoadMatch, AlertAttributeListMatch, AlertAttributeCreateData, AlertAttributeUpdateData, AlertAttributeRemoveMatch } from '../IncidentIoTypes';
declare class AlertAttributeEntity extends IncidentIoEntityBase<AlertAttribute> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertAttributeEntity): AlertAttributeEntity;
    load(this: any, reqmatch?: AlertAttributeLoadMatch, ctrl?: Control): Promise<AlertAttributeEntity>;
    list(this: any, reqmatch?: AlertAttributeListMatch, ctrl?: Control): Promise<AlertAttributeEntity[]>;
    create(this: any, reqdata?: AlertAttributeCreateData, ctrl?: Control): Promise<AlertAttributeEntity>;
    update(this: any, reqdata?: AlertAttributeUpdateData, ctrl?: Control): Promise<AlertAttributeEntity>;
    remove(this: any, reqmatch?: AlertAttributeRemoveMatch, ctrl?: Control): Promise<AlertAttributeEntity>;
}
export { AlertAttributeEntity };

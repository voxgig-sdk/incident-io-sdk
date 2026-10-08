import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertSource, AlertSourceLoadMatch, AlertSourceListMatch, AlertSourceCreateData, AlertSourceUpdateData, AlertSourceRemoveMatch } from '../IncidentIoTypes';
declare class AlertSourceEntity extends IncidentIoEntityBase<AlertSource> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertSourceEntity): AlertSourceEntity;
    load(this: any, reqmatch?: AlertSourceLoadMatch, ctrl?: Control): Promise<AlertSourceEntity>;
    list(this: any, reqmatch?: AlertSourceListMatch, ctrl?: Control): Promise<AlertSourceEntity[]>;
    create(this: any, reqdata?: AlertSourceCreateData, ctrl?: Control): Promise<AlertSourceEntity>;
    update(this: any, reqdata?: AlertSourceUpdateData, ctrl?: Control): Promise<AlertSourceEntity>;
    remove(this: any, reqmatch?: AlertSourceRemoveMatch, ctrl?: Control): Promise<AlertSourceEntity>;
}
export { AlertSourceEntity };

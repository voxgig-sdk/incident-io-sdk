import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Alert, AlertLoadMatch, AlertListMatch, AlertCreateData } from '../IncidentIoTypes';
declare class AlertEntity extends IncidentIoEntityBase<Alert> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertEntity): AlertEntity;
    load(this: any, reqmatch?: AlertLoadMatch, ctrl?: Control): Promise<AlertEntity>;
    list(this: any, reqmatch?: AlertListMatch, ctrl?: Control): Promise<AlertEntity[]>;
    create(this: any, reqdata?: AlertCreateData, ctrl?: Control): Promise<AlertEntity>;
}
export { AlertEntity };

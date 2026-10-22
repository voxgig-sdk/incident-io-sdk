import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertTag, AlertTagListMatch, AlertTagCreateData } from '../IncidentIoTypes';
declare class AlertTagEntity extends IncidentIoEntityBase<AlertTag> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertTagEntity): AlertTagEntity;
    list(this: any, reqmatch?: AlertTagListMatch, ctrl?: Control): Promise<AlertTagEntity[]>;
    create(this: any, reqdata?: AlertTagCreateData, ctrl?: Control): Promise<AlertTagEntity>;
}
export { AlertTagEntity };

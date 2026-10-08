import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertSourcesV2, AlertSourcesV2CreateData } from '../IncidentIoTypes';
declare class AlertSourcesV2Entity extends IncidentIoEntityBase<AlertSourcesV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertSourcesV2Entity): AlertSourcesV2Entity;
    create(this: any, reqdata?: AlertSourcesV2CreateData, ctrl?: Control): Promise<AlertSourcesV2Entity>;
}
export { AlertSourcesV2Entity };

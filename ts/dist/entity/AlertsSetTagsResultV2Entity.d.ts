import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertsSetTagsResultV2, AlertsSetTagsResultV2CreateData } from '../IncidentIoTypes';
declare class AlertsSetTagsResultV2Entity extends IncidentIoEntityBase<AlertsSetTagsResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertsSetTagsResultV2Entity): AlertsSetTagsResultV2Entity;
    create(this: any, reqdata?: AlertsSetTagsResultV2CreateData, ctrl?: Control): Promise<AlertsSetTagsResultV2Entity>;
}
export { AlertsSetTagsResultV2Entity };

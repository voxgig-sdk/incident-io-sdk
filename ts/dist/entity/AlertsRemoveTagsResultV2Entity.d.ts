import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertsRemoveTagsResultV2, AlertsRemoveTagsResultV2CreateData } from '../IncidentIoTypes';
declare class AlertsRemoveTagsResultV2Entity extends IncidentIoEntityBase<AlertsRemoveTagsResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertsRemoveTagsResultV2Entity): AlertsRemoveTagsResultV2Entity;
    create(this: any, reqdata?: AlertsRemoveTagsResultV2CreateData, ctrl?: Control): Promise<AlertsRemoveTagsResultV2Entity>;
}
export { AlertsRemoveTagsResultV2Entity };

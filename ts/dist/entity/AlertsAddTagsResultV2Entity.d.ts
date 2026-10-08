import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertsAddTagsResultV2, AlertsAddTagsResultV2CreateData } from '../IncidentIoTypes';
declare class AlertsAddTagsResultV2Entity extends IncidentIoEntityBase<AlertsAddTagsResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertsAddTagsResultV2Entity): AlertsAddTagsResultV2Entity;
    create(this: any, reqdata?: AlertsAddTagsResultV2CreateData, ctrl?: Control): Promise<AlertsAddTagsResultV2Entity>;
}
export { AlertsAddTagsResultV2Entity };

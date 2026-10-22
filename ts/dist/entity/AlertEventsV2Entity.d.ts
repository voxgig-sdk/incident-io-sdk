import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertEventsV2, AlertEventsV2CreateData } from '../IncidentIoTypes';
declare class AlertEventsV2Entity extends IncidentIoEntityBase<AlertEventsV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertEventsV2Entity): AlertEventsV2Entity;
    create(this: any, reqdata?: AlertEventsV2CreateData, ctrl?: Control): Promise<AlertEventsV2Entity>;
}
export { AlertEventsV2Entity };

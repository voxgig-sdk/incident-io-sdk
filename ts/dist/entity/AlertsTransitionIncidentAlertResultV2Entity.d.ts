import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertsTransitionIncidentAlertResultV2, AlertsTransitionIncidentAlertResultV2ListMatch, AlertsTransitionIncidentAlertResultV2CreateData } from '../IncidentIoTypes';
declare class AlertsTransitionIncidentAlertResultV2Entity extends IncidentIoEntityBase<AlertsTransitionIncidentAlertResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertsTransitionIncidentAlertResultV2Entity): AlertsTransitionIncidentAlertResultV2Entity;
    list(this: any, reqmatch?: AlertsTransitionIncidentAlertResultV2ListMatch, ctrl?: Control): Promise<AlertsTransitionIncidentAlertResultV2Entity[]>;
    create(this: any, reqdata?: AlertsTransitionIncidentAlertResultV2CreateData, ctrl?: Control): Promise<AlertsTransitionIncidentAlertResultV2Entity>;
}
export { AlertsTransitionIncidentAlertResultV2Entity };

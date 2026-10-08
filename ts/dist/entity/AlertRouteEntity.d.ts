import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertRoute, AlertRouteLoadMatch, AlertRouteListMatch, AlertRouteCreateData, AlertRouteUpdateData, AlertRouteRemoveMatch } from '../IncidentIoTypes';
declare class AlertRouteEntity extends IncidentIoEntityBase<AlertRoute> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertRouteEntity): AlertRouteEntity;
    load(this: any, reqmatch?: AlertRouteLoadMatch, ctrl?: Control): Promise<AlertRouteEntity>;
    list(this: any, reqmatch?: AlertRouteListMatch, ctrl?: Control): Promise<AlertRouteEntity[]>;
    create(this: any, reqdata?: AlertRouteCreateData, ctrl?: Control): Promise<AlertRouteEntity>;
    update(this: any, reqdata?: AlertRouteUpdateData, ctrl?: Control): Promise<AlertRouteEntity>;
    remove(this: any, reqmatch?: AlertRouteRemoveMatch, ctrl?: Control): Promise<AlertRouteEntity>;
}
export { AlertRouteEntity };

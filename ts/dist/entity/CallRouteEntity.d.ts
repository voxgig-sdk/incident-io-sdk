import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoute, CallRouteLoadMatch, CallRouteListMatch, CallRouteUpdateData } from '../IncidentIoTypes';
declare class CallRouteEntity extends IncidentIoEntityBase<CallRoute> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRouteEntity): CallRouteEntity;
    load(this: any, reqmatch?: CallRouteLoadMatch, ctrl?: Control): Promise<CallRouteEntity>;
    list(this: any, reqmatch?: CallRouteListMatch, ctrl?: Control): Promise<CallRouteEntity[]>;
    update(this: any, reqdata?: CallRouteUpdateData, ctrl?: Control): Promise<CallRouteEntity>;
}
export { CallRouteEntity };

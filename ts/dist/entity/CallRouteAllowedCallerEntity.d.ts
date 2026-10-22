import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRouteAllowedCaller, CallRouteAllowedCallerLoadMatch, CallRouteAllowedCallerListMatch, CallRouteAllowedCallerCreateData, CallRouteAllowedCallerUpdateData, CallRouteAllowedCallerRemoveMatch } from '../IncidentIoTypes';
declare class CallRouteAllowedCallerEntity extends IncidentIoEntityBase<CallRouteAllowedCaller> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRouteAllowedCallerEntity): CallRouteAllowedCallerEntity;
    load(this: any, reqmatch?: CallRouteAllowedCallerLoadMatch, ctrl?: Control): Promise<CallRouteAllowedCallerEntity>;
    list(this: any, reqmatch?: CallRouteAllowedCallerListMatch, ctrl?: Control): Promise<CallRouteAllowedCallerEntity[]>;
    create(this: any, reqdata?: CallRouteAllowedCallerCreateData, ctrl?: Control): Promise<CallRouteAllowedCallerEntity>;
    update(this: any, reqdata?: CallRouteAllowedCallerUpdateData, ctrl?: Control): Promise<CallRouteAllowedCallerEntity>;
    remove(this: any, reqmatch?: CallRouteAllowedCallerRemoveMatch, ctrl?: Control): Promise<CallRouteAllowedCallerEntity>;
}
export { CallRouteAllowedCallerEntity };

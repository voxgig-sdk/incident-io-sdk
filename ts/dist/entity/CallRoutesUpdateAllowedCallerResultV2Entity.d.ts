import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesUpdateAllowedCallerResultV2, CallRoutesUpdateAllowedCallerResultV2UpdateData } from '../IncidentIoTypes';
declare class CallRoutesUpdateAllowedCallerResultV2Entity extends IncidentIoEntityBase<CallRoutesUpdateAllowedCallerResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesUpdateAllowedCallerResultV2Entity): CallRoutesUpdateAllowedCallerResultV2Entity;
    update(this: any, reqdata?: CallRoutesUpdateAllowedCallerResultV2UpdateData, ctrl?: Control): Promise<CallRoutesUpdateAllowedCallerResultV2Entity>;
}
export { CallRoutesUpdateAllowedCallerResultV2Entity };

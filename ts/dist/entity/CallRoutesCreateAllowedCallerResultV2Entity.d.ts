import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesCreateAllowedCallerResultV2, CallRoutesCreateAllowedCallerResultV2CreateData } from '../IncidentIoTypes';
declare class CallRoutesCreateAllowedCallerResultV2Entity extends IncidentIoEntityBase<CallRoutesCreateAllowedCallerResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesCreateAllowedCallerResultV2Entity): CallRoutesCreateAllowedCallerResultV2Entity;
    create(this: any, reqdata?: CallRoutesCreateAllowedCallerResultV2CreateData, ctrl?: Control): Promise<CallRoutesCreateAllowedCallerResultV2Entity>;
}
export { CallRoutesCreateAllowedCallerResultV2Entity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesShowAllowedCallerResultV2, CallRoutesShowAllowedCallerResultV2LoadMatch } from '../IncidentIoTypes';
declare class CallRoutesShowAllowedCallerResultV2Entity extends IncidentIoEntityBase<CallRoutesShowAllowedCallerResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesShowAllowedCallerResultV2Entity): CallRoutesShowAllowedCallerResultV2Entity;
    load(this: any, reqmatch?: CallRoutesShowAllowedCallerResultV2LoadMatch, ctrl?: Control): Promise<CallRoutesShowAllowedCallerResultV2Entity>;
}
export { CallRoutesShowAllowedCallerResultV2Entity };

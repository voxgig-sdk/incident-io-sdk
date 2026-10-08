import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesListAllowedCallersResultV2, CallRoutesListAllowedCallersResultV2ListMatch } from '../IncidentIoTypes';
declare class CallRoutesListAllowedCallersResultV2Entity extends IncidentIoEntityBase<CallRoutesListAllowedCallersResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesListAllowedCallersResultV2Entity): CallRoutesListAllowedCallersResultV2Entity;
    list(this: any, reqmatch?: CallRoutesListAllowedCallersResultV2ListMatch, ctrl?: Control): Promise<CallRoutesListAllowedCallersResultV2Entity[]>;
}
export { CallRoutesListAllowedCallersResultV2Entity };

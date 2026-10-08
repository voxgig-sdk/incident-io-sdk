import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesListOptionsResultV2, CallRoutesListOptionsResultV2ListMatch } from '../IncidentIoTypes';
declare class CallRoutesListOptionsResultV2Entity extends IncidentIoEntityBase<CallRoutesListOptionsResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesListOptionsResultV2Entity): CallRoutesListOptionsResultV2Entity;
    list(this: any, reqmatch?: CallRoutesListOptionsResultV2ListMatch, ctrl?: Control): Promise<CallRoutesListOptionsResultV2Entity[]>;
}
export { CallRoutesListOptionsResultV2Entity };

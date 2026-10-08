import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesV2, CallRoutesV2RemoveMatch } from '../IncidentIoTypes';
declare class CallRoutesV2Entity extends IncidentIoEntityBase<CallRoutesV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesV2Entity): CallRoutesV2Entity;
    remove(this: any, reqmatch?: CallRoutesV2RemoveMatch, ctrl?: Control): Promise<CallRoutesV2Entity>;
}
export { CallRoutesV2Entity };

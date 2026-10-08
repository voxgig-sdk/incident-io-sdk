import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesShowOptionResultV2, CallRoutesShowOptionResultV2LoadMatch } from '../IncidentIoTypes';
declare class CallRoutesShowOptionResultV2Entity extends IncidentIoEntityBase<CallRoutesShowOptionResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesShowOptionResultV2Entity): CallRoutesShowOptionResultV2Entity;
    load(this: any, reqmatch?: CallRoutesShowOptionResultV2LoadMatch, ctrl?: Control): Promise<CallRoutesShowOptionResultV2Entity>;
}
export { CallRoutesShowOptionResultV2Entity };

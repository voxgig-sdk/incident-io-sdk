import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesUpdateOptionResultV2, CallRoutesUpdateOptionResultV2UpdateData } from '../IncidentIoTypes';
declare class CallRoutesUpdateOptionResultV2Entity extends IncidentIoEntityBase<CallRoutesUpdateOptionResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesUpdateOptionResultV2Entity): CallRoutesUpdateOptionResultV2Entity;
    update(this: any, reqdata?: CallRoutesUpdateOptionResultV2UpdateData, ctrl?: Control): Promise<CallRoutesUpdateOptionResultV2Entity>;
}
export { CallRoutesUpdateOptionResultV2Entity };

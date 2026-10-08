import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRoutesCreateOptionResultV2, CallRoutesCreateOptionResultV2CreateData } from '../IncidentIoTypes';
declare class CallRoutesCreateOptionResultV2Entity extends IncidentIoEntityBase<CallRoutesCreateOptionResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRoutesCreateOptionResultV2Entity): CallRoutesCreateOptionResultV2Entity;
    create(this: any, reqdata?: CallRoutesCreateOptionResultV2CreateData, ctrl?: Control): Promise<CallRoutesCreateOptionResultV2Entity>;
}
export { CallRoutesCreateOptionResultV2Entity };

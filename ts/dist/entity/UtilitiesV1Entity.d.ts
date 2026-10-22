import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { UtilitiesV1, UtilitiesV1LoadMatch } from '../IncidentIoTypes';
declare class UtilitiesV1Entity extends IncidentIoEntityBase<UtilitiesV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: UtilitiesV1Entity): UtilitiesV1Entity;
    load(this: any, reqmatch?: UtilitiesV1LoadMatch, ctrl?: Control): Promise<UtilitiesV1Entity>;
}
export { UtilitiesV1Entity };

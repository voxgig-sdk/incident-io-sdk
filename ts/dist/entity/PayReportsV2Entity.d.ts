import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayReportsV2, PayReportsV2LoadMatch } from '../IncidentIoTypes';
declare class PayReportsV2Entity extends IncidentIoEntityBase<PayReportsV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayReportsV2Entity): PayReportsV2Entity;
    load(this: any, reqmatch?: PayReportsV2LoadMatch, ctrl?: Control): Promise<PayReportsV2Entity>;
}
export { PayReportsV2Entity };

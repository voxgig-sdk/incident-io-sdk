import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsV2, PayConfigsV2RemoveMatch } from '../IncidentIoTypes';
declare class PayConfigsV2Entity extends IncidentIoEntityBase<PayConfigsV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsV2Entity): PayConfigsV2Entity;
    remove(this: any, reqmatch?: PayConfigsV2RemoveMatch, ctrl?: Control): Promise<PayConfigsV2Entity>;
}
export { PayConfigsV2Entity };

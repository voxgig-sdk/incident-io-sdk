import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsListOneOffRulesResultV2, PayConfigsListOneOffRulesResultV2ListMatch } from '../IncidentIoTypes';
declare class PayConfigsListOneOffRulesResultV2Entity extends IncidentIoEntityBase<PayConfigsListOneOffRulesResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsListOneOffRulesResultV2Entity): PayConfigsListOneOffRulesResultV2Entity;
    list(this: any, reqmatch?: PayConfigsListOneOffRulesResultV2ListMatch, ctrl?: Control): Promise<PayConfigsListOneOffRulesResultV2Entity[]>;
}
export { PayConfigsListOneOffRulesResultV2Entity };

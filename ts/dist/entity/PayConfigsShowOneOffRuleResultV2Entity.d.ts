import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsShowOneOffRuleResultV2, PayConfigsShowOneOffRuleResultV2LoadMatch } from '../IncidentIoTypes';
declare class PayConfigsShowOneOffRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsShowOneOffRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsShowOneOffRuleResultV2Entity): PayConfigsShowOneOffRuleResultV2Entity;
    load(this: any, reqmatch?: PayConfigsShowOneOffRuleResultV2LoadMatch, ctrl?: Control): Promise<PayConfigsShowOneOffRuleResultV2Entity>;
}
export { PayConfigsShowOneOffRuleResultV2Entity };

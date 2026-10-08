import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsShowWeeklyRuleResultV2, PayConfigsShowWeeklyRuleResultV2LoadMatch } from '../IncidentIoTypes';
declare class PayConfigsShowWeeklyRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsShowWeeklyRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsShowWeeklyRuleResultV2Entity): PayConfigsShowWeeklyRuleResultV2Entity;
    load(this: any, reqmatch?: PayConfigsShowWeeklyRuleResultV2LoadMatch, ctrl?: Control): Promise<PayConfigsShowWeeklyRuleResultV2Entity>;
}
export { PayConfigsShowWeeklyRuleResultV2Entity };

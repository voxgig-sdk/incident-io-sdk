import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsUpdateWeeklyRuleResultV2, PayConfigsUpdateWeeklyRuleResultV2UpdateData } from '../IncidentIoTypes';
declare class PayConfigsUpdateWeeklyRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsUpdateWeeklyRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsUpdateWeeklyRuleResultV2Entity): PayConfigsUpdateWeeklyRuleResultV2Entity;
    update(this: any, reqdata?: PayConfigsUpdateWeeklyRuleResultV2UpdateData, ctrl?: Control): Promise<PayConfigsUpdateWeeklyRuleResultV2Entity>;
}
export { PayConfigsUpdateWeeklyRuleResultV2Entity };

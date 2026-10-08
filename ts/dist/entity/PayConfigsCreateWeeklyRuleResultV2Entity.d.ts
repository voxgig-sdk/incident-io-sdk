import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsCreateWeeklyRuleResultV2, PayConfigsCreateWeeklyRuleResultV2CreateData } from '../IncidentIoTypes';
declare class PayConfigsCreateWeeklyRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsCreateWeeklyRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsCreateWeeklyRuleResultV2Entity): PayConfigsCreateWeeklyRuleResultV2Entity;
    create(this: any, reqdata?: PayConfigsCreateWeeklyRuleResultV2CreateData, ctrl?: Control): Promise<PayConfigsCreateWeeklyRuleResultV2Entity>;
}
export { PayConfigsCreateWeeklyRuleResultV2Entity };

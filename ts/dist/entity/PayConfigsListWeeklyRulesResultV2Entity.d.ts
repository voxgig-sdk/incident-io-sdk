import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsListWeeklyRulesResultV2, PayConfigsListWeeklyRulesResultV2ListMatch } from '../IncidentIoTypes';
declare class PayConfigsListWeeklyRulesResultV2Entity extends IncidentIoEntityBase<PayConfigsListWeeklyRulesResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsListWeeklyRulesResultV2Entity): PayConfigsListWeeklyRulesResultV2Entity;
    list(this: any, reqmatch?: PayConfigsListWeeklyRulesResultV2ListMatch, ctrl?: Control): Promise<PayConfigsListWeeklyRulesResultV2Entity[]>;
}
export { PayConfigsListWeeklyRulesResultV2Entity };

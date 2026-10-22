import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigWeeklyRule, PayConfigWeeklyRuleLoadMatch, PayConfigWeeklyRuleListMatch, PayConfigWeeklyRuleCreateData, PayConfigWeeklyRuleUpdateData, PayConfigWeeklyRuleRemoveMatch } from '../IncidentIoTypes';
declare class PayConfigWeeklyRuleEntity extends IncidentIoEntityBase<PayConfigWeeklyRule> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigWeeklyRuleEntity): PayConfigWeeklyRuleEntity;
    load(this: any, reqmatch?: PayConfigWeeklyRuleLoadMatch, ctrl?: Control): Promise<PayConfigWeeklyRuleEntity>;
    list(this: any, reqmatch?: PayConfigWeeklyRuleListMatch, ctrl?: Control): Promise<PayConfigWeeklyRuleEntity[]>;
    create(this: any, reqdata?: PayConfigWeeklyRuleCreateData, ctrl?: Control): Promise<PayConfigWeeklyRuleEntity>;
    update(this: any, reqdata?: PayConfigWeeklyRuleUpdateData, ctrl?: Control): Promise<PayConfigWeeklyRuleEntity>;
    remove(this: any, reqmatch?: PayConfigWeeklyRuleRemoveMatch, ctrl?: Control): Promise<PayConfigWeeklyRuleEntity>;
}
export { PayConfigWeeklyRuleEntity };

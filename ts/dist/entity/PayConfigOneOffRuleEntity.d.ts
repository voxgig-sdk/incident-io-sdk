import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigOneOffRule, PayConfigOneOffRuleLoadMatch, PayConfigOneOffRuleListMatch, PayConfigOneOffRuleCreateData, PayConfigOneOffRuleUpdateData, PayConfigOneOffRuleRemoveMatch } from '../IncidentIoTypes';
declare class PayConfigOneOffRuleEntity extends IncidentIoEntityBase<PayConfigOneOffRule> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigOneOffRuleEntity): PayConfigOneOffRuleEntity;
    load(this: any, reqmatch?: PayConfigOneOffRuleLoadMatch, ctrl?: Control): Promise<PayConfigOneOffRuleEntity>;
    list(this: any, reqmatch?: PayConfigOneOffRuleListMatch, ctrl?: Control): Promise<PayConfigOneOffRuleEntity[]>;
    create(this: any, reqdata?: PayConfigOneOffRuleCreateData, ctrl?: Control): Promise<PayConfigOneOffRuleEntity>;
    update(this: any, reqdata?: PayConfigOneOffRuleUpdateData, ctrl?: Control): Promise<PayConfigOneOffRuleEntity>;
    remove(this: any, reqmatch?: PayConfigOneOffRuleRemoveMatch, ctrl?: Control): Promise<PayConfigOneOffRuleEntity>;
}
export { PayConfigOneOffRuleEntity };

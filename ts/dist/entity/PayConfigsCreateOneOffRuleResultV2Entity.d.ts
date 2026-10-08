import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsCreateOneOffRuleResultV2, PayConfigsCreateOneOffRuleResultV2CreateData } from '../IncidentIoTypes';
declare class PayConfigsCreateOneOffRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsCreateOneOffRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsCreateOneOffRuleResultV2Entity): PayConfigsCreateOneOffRuleResultV2Entity;
    create(this: any, reqdata?: PayConfigsCreateOneOffRuleResultV2CreateData, ctrl?: Control): Promise<PayConfigsCreateOneOffRuleResultV2Entity>;
}
export { PayConfigsCreateOneOffRuleResultV2Entity };

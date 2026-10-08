import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfigsUpdateOneOffRuleResultV2, PayConfigsUpdateOneOffRuleResultV2UpdateData } from '../IncidentIoTypes';
declare class PayConfigsUpdateOneOffRuleResultV2Entity extends IncidentIoEntityBase<PayConfigsUpdateOneOffRuleResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigsUpdateOneOffRuleResultV2Entity): PayConfigsUpdateOneOffRuleResultV2Entity;
    update(this: any, reqdata?: PayConfigsUpdateOneOffRuleResultV2UpdateData, ctrl?: Control): Promise<PayConfigsUpdateOneOffRuleResultV2Entity>;
}
export { PayConfigsUpdateOneOffRuleResultV2Entity };

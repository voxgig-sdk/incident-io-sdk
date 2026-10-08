import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PolicyFindingsDismissResultV2, PolicyFindingsDismissResultV2CreateData } from '../IncidentIoTypes';
declare class PolicyFindingsDismissResultV2Entity extends IncidentIoEntityBase<PolicyFindingsDismissResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PolicyFindingsDismissResultV2Entity): PolicyFindingsDismissResultV2Entity;
    create(this: any, reqdata?: PolicyFindingsDismissResultV2CreateData, ctrl?: Control): Promise<PolicyFindingsDismissResultV2Entity>;
}
export { PolicyFindingsDismissResultV2Entity };

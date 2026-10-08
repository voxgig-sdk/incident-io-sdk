import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PolicyFinding, PolicyFindingLoadMatch, PolicyFindingListMatch } from '../IncidentIoTypes';
declare class PolicyFindingEntity extends IncidentIoEntityBase<PolicyFinding> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PolicyFindingEntity): PolicyFindingEntity;
    load(this: any, reqmatch?: PolicyFindingLoadMatch, ctrl?: Control): Promise<PolicyFindingEntity>;
    list(this: any, reqmatch?: PolicyFindingListMatch, ctrl?: Control): Promise<PolicyFindingEntity[]>;
}
export { PolicyFindingEntity };

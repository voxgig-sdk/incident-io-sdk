import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Policy, PolicyLoadMatch, PolicyListMatch, PolicyCreateData, PolicyUpdateData, PolicyRemoveMatch } from '../IncidentIoTypes';
declare class PolicyEntity extends IncidentIoEntityBase<Policy> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PolicyEntity): PolicyEntity;
    load(this: any, reqmatch?: PolicyLoadMatch, ctrl?: Control): Promise<PolicyEntity>;
    list(this: any, reqmatch?: PolicyListMatch, ctrl?: Control): Promise<PolicyEntity[]>;
    create(this: any, reqdata?: PolicyCreateData, ctrl?: Control): Promise<PolicyEntity>;
    update(this: any, reqdata?: PolicyUpdateData, ctrl?: Control): Promise<PolicyEntity>;
    remove(this: any, reqmatch?: PolicyRemoveMatch, ctrl?: Control): Promise<PolicyEntity>;
}
export { PolicyEntity };

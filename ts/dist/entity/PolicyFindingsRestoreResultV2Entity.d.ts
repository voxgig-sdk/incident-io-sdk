import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PolicyFindingsRestoreResultV2, PolicyFindingsRestoreResultV2CreateData } from '../IncidentIoTypes';
declare class PolicyFindingsRestoreResultV2Entity extends IncidentIoEntityBase<PolicyFindingsRestoreResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PolicyFindingsRestoreResultV2Entity): PolicyFindingsRestoreResultV2Entity;
    create(this: any, reqdata?: PolicyFindingsRestoreResultV2CreateData, ctrl?: Control): Promise<PolicyFindingsRestoreResultV2Entity>;
}
export { PolicyFindingsRestoreResultV2Entity };

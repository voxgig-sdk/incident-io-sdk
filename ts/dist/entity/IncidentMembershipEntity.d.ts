import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentMembership, IncidentMembershipCreateData } from '../IncidentIoTypes';
declare class IncidentMembershipEntity extends IncidentIoEntityBase<IncidentMembership> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentMembershipEntity): IncidentMembershipEntity;
    create(this: any, reqdata?: IncidentMembershipCreateData, ctrl?: Control): Promise<IncidentMembershipEntity>;
}
export { IncidentMembershipEntity };

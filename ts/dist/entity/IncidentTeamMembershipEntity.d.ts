import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTeamMembership, IncidentTeamMembershipCreateData } from '../IncidentIoTypes';
declare class IncidentTeamMembershipEntity extends IncidentIoEntityBase<IncidentTeamMembership> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTeamMembershipEntity): IncidentTeamMembershipEntity;
    create(this: any, reqdata?: IncidentTeamMembershipCreateData, ctrl?: Control): Promise<IncidentTeamMembershipEntity>;
}
export { IncidentTeamMembershipEntity };

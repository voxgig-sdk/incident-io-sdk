import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTeamMembershipsV1, IncidentTeamMembershipsV1CreateData } from '../IncidentIoTypes';
declare class IncidentTeamMembershipsV1Entity extends IncidentIoEntityBase<IncidentTeamMembershipsV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTeamMembershipsV1Entity): IncidentTeamMembershipsV1Entity;
    create(this: any, reqdata?: IncidentTeamMembershipsV1CreateData, ctrl?: Control): Promise<IncidentTeamMembershipsV1Entity>;
}
export { IncidentTeamMembershipsV1Entity };

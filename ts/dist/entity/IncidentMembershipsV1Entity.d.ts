import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentMembershipsV1, IncidentMembershipsV1CreateData } from '../IncidentIoTypes';
declare class IncidentMembershipsV1Entity extends IncidentIoEntityBase<IncidentMembershipsV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentMembershipsV1Entity): IncidentMembershipsV1Entity;
    create(this: any, reqdata?: IncidentMembershipsV1CreateData, ctrl?: Control): Promise<IncidentMembershipsV1Entity>;
}
export { IncidentMembershipsV1Entity };

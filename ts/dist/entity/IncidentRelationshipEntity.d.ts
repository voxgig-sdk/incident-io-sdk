import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentRelationship, IncidentRelationshipListMatch } from '../IncidentIoTypes';
declare class IncidentRelationshipEntity extends IncidentIoEntityBase<IncidentRelationship> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentRelationshipEntity): IncidentRelationshipEntity;
    list(this: any, reqmatch?: IncidentRelationshipListMatch, ctrl?: Control): Promise<IncidentRelationshipEntity[]>;
}
export { IncidentRelationshipEntity };

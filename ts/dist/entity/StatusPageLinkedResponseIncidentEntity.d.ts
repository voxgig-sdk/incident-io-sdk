import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageLinkedResponseIncident, StatusPageLinkedResponseIncidentListMatch } from '../IncidentIoTypes';
declare class StatusPageLinkedResponseIncidentEntity extends IncidentIoEntityBase<StatusPageLinkedResponseIncident> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageLinkedResponseIncidentEntity): StatusPageLinkedResponseIncidentEntity;
    list(this: any, reqmatch?: StatusPageLinkedResponseIncidentListMatch, ctrl?: Control): Promise<StatusPageLinkedResponseIncidentEntity[]>;
}
export { StatusPageLinkedResponseIncidentEntity };

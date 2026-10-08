import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageLinkedResponseIncidentV1, StatusPageLinkedResponseIncidentV1ListMatch } from '../IncidentIoTypes';
declare class StatusPageLinkedResponseIncidentV1Entity extends IncidentIoEntityBase<StatusPageLinkedResponseIncidentV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageLinkedResponseIncidentV1Entity): StatusPageLinkedResponseIncidentV1Entity;
    list(this: any, reqmatch?: StatusPageLinkedResponseIncidentV1ListMatch, ctrl?: Control): Promise<StatusPageLinkedResponseIncidentV1Entity[]>;
}
export { StatusPageLinkedResponseIncidentV1Entity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageComponentAvailability, StatusPageComponentAvailabilityLoadMatch } from '../IncidentIoTypes';
declare class StatusPageComponentAvailabilityEntity extends IncidentIoEntityBase<StatusPageComponentAvailability> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageComponentAvailabilityEntity): StatusPageComponentAvailabilityEntity;
    load(this: any, reqmatch?: StatusPageComponentAvailabilityLoadMatch, ctrl?: Control): Promise<StatusPageComponentAvailabilityEntity>;
}
export { StatusPageComponentAvailabilityEntity };

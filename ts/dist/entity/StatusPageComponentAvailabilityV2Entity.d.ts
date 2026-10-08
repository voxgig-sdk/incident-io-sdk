import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageComponentAvailabilityV2, StatusPageComponentAvailabilityV2LoadMatch } from '../IncidentIoTypes';
declare class StatusPageComponentAvailabilityV2Entity extends IncidentIoEntityBase<StatusPageComponentAvailabilityV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageComponentAvailabilityV2Entity): StatusPageComponentAvailabilityV2Entity;
    load(this: any, reqmatch?: StatusPageComponentAvailabilityV2LoadMatch, ctrl?: Control): Promise<StatusPageComponentAvailabilityV2Entity>;
}
export { StatusPageComponentAvailabilityV2Entity };

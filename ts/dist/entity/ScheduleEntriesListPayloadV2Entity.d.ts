import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleEntriesListPayloadV2, ScheduleEntriesListPayloadV2CreateData } from '../IncidentIoTypes';
declare class ScheduleEntriesListPayloadV2Entity extends IncidentIoEntityBase<ScheduleEntriesListPayloadV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleEntriesListPayloadV2Entity): ScheduleEntriesListPayloadV2Entity;
    create(this: any, reqdata?: ScheduleEntriesListPayloadV2CreateData, ctrl?: Control): Promise<ScheduleEntriesListPayloadV2Entity>;
}
export { ScheduleEntriesListPayloadV2Entity };

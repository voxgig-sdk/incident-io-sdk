import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleEntry, ScheduleEntryLoadMatch } from '../IncidentIoTypes';
declare class ScheduleEntryEntity extends IncidentIoEntityBase<ScheduleEntry> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleEntryEntity): ScheduleEntryEntity;
    load(this: any, reqmatch?: ScheduleEntryLoadMatch, ctrl?: Control): Promise<ScheduleEntryEntity>;
}
export { ScheduleEntryEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { SchedulesShowOverrideResultV2, SchedulesShowOverrideResultV2LoadMatch, SchedulesShowOverrideResultV2ListMatch, SchedulesShowOverrideResultV2CreateData } from '../IncidentIoTypes';
declare class SchedulesShowOverrideResultV2Entity extends IncidentIoEntityBase<SchedulesShowOverrideResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: SchedulesShowOverrideResultV2Entity): SchedulesShowOverrideResultV2Entity;
    load(this: any, reqmatch?: SchedulesShowOverrideResultV2LoadMatch, ctrl?: Control): Promise<SchedulesShowOverrideResultV2Entity>;
    list(this: any, reqmatch?: SchedulesShowOverrideResultV2ListMatch, ctrl?: Control): Promise<SchedulesShowOverrideResultV2Entity[]>;
    create(this: any, reqdata?: SchedulesShowOverrideResultV2CreateData, ctrl?: Control): Promise<SchedulesShowOverrideResultV2Entity>;
}
export { SchedulesShowOverrideResultV2Entity };

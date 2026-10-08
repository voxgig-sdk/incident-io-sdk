import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Schedule, ScheduleLoadMatch, ScheduleListMatch, ScheduleCreateData, ScheduleUpdateData, ScheduleRemoveMatch } from '../IncidentIoTypes';
declare class ScheduleEntity extends IncidentIoEntityBase<Schedule> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleEntity): ScheduleEntity;
    load(this: any, reqmatch?: ScheduleLoadMatch, ctrl?: Control): Promise<ScheduleEntity>;
    list(this: any, reqmatch?: ScheduleListMatch, ctrl?: Control): Promise<ScheduleEntity[]>;
    create(this: any, reqdata?: ScheduleCreateData, ctrl?: Control): Promise<ScheduleEntity>;
    update(this: any, reqdata?: ScheduleUpdateData, ctrl?: Control): Promise<ScheduleEntity>;
    remove(this: any, reqmatch?: ScheduleRemoveMatch, ctrl?: Control): Promise<ScheduleEntity>;
}
export { ScheduleEntity };

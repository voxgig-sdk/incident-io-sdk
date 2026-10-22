import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleOverride, ScheduleOverrideLoadMatch, ScheduleOverrideListMatch, ScheduleOverrideCreateData, ScheduleOverrideUpdateData, ScheduleOverrideRemoveMatch } from '../IncidentIoTypes';
declare class ScheduleOverrideEntity extends IncidentIoEntityBase<ScheduleOverride> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleOverrideEntity): ScheduleOverrideEntity;
    load(this: any, reqmatch?: ScheduleOverrideLoadMatch, ctrl?: Control): Promise<ScheduleOverrideEntity>;
    list(this: any, reqmatch?: ScheduleOverrideListMatch, ctrl?: Control): Promise<ScheduleOverrideEntity[]>;
    create(this: any, reqdata?: ScheduleOverrideCreateData, ctrl?: Control): Promise<ScheduleOverrideEntity>;
    update(this: any, reqdata?: ScheduleOverrideUpdateData, ctrl?: Control): Promise<ScheduleOverrideEntity>;
    remove(this: any, reqmatch?: ScheduleOverrideRemoveMatch, ctrl?: Control): Promise<ScheduleOverrideEntity>;
}
export { ScheduleOverrideEntity };

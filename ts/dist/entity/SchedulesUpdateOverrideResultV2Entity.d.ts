import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { SchedulesUpdateOverrideResultV2, SchedulesUpdateOverrideResultV2UpdateData } from '../IncidentIoTypes';
declare class SchedulesUpdateOverrideResultV2Entity extends IncidentIoEntityBase<SchedulesUpdateOverrideResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: SchedulesUpdateOverrideResultV2Entity): SchedulesUpdateOverrideResultV2Entity;
    update(this: any, reqdata?: SchedulesUpdateOverrideResultV2UpdateData, ctrl?: Control): Promise<SchedulesUpdateOverrideResultV2Entity>;
}
export { SchedulesUpdateOverrideResultV2Entity };

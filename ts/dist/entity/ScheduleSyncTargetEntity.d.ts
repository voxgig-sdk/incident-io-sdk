import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleSyncTarget, ScheduleSyncTargetLoadMatch, ScheduleSyncTargetListMatch, ScheduleSyncTargetCreateData, ScheduleSyncTargetUpdateData, ScheduleSyncTargetRemoveMatch } from '../IncidentIoTypes';
declare class ScheduleSyncTargetEntity extends IncidentIoEntityBase<ScheduleSyncTarget> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleSyncTargetEntity): ScheduleSyncTargetEntity;
    load(this: any, reqmatch?: ScheduleSyncTargetLoadMatch, ctrl?: Control): Promise<ScheduleSyncTargetEntity>;
    list(this: any, reqmatch?: ScheduleSyncTargetListMatch, ctrl?: Control): Promise<ScheduleSyncTargetEntity[]>;
    create(this: any, reqdata?: ScheduleSyncTargetCreateData, ctrl?: Control): Promise<ScheduleSyncTargetEntity>;
    update(this: any, reqdata?: ScheduleSyncTargetUpdateData, ctrl?: Control): Promise<ScheduleSyncTargetEntity>;
    remove(this: any, reqmatch?: ScheduleSyncTargetRemoveMatch, ctrl?: Control): Promise<ScheduleSyncTargetEntity>;
}
export { ScheduleSyncTargetEntity };

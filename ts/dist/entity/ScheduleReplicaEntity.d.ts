import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleReplica, ScheduleReplicaLoadMatch, ScheduleReplicaListMatch, ScheduleReplicaCreateData, ScheduleReplicaRemoveMatch } from '../IncidentIoTypes';
declare class ScheduleReplicaEntity extends IncidentIoEntityBase<ScheduleReplica> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleReplicaEntity): ScheduleReplicaEntity;
    load(this: any, reqmatch?: ScheduleReplicaLoadMatch, ctrl?: Control): Promise<ScheduleReplicaEntity>;
    list(this: any, reqmatch?: ScheduleReplicaListMatch, ctrl?: Control): Promise<ScheduleReplicaEntity[]>;
    create(this: any, reqdata?: ScheduleReplicaCreateData, ctrl?: Control): Promise<ScheduleReplicaEntity>;
    remove(this: any, reqmatch?: ScheduleReplicaRemoveMatch, ctrl?: Control): Promise<ScheduleReplicaEntity>;
}
export { ScheduleReplicaEntity };

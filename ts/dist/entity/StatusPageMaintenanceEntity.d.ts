import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageMaintenance, StatusPageMaintenanceLoadMatch, StatusPageMaintenanceListMatch, StatusPageMaintenanceCreateData, StatusPageMaintenanceUpdateData } from '../IncidentIoTypes';
declare class StatusPageMaintenanceEntity extends IncidentIoEntityBase<StatusPageMaintenance> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageMaintenanceEntity): StatusPageMaintenanceEntity;
    load(this: any, reqmatch?: StatusPageMaintenanceLoadMatch, ctrl?: Control): Promise<StatusPageMaintenanceEntity>;
    list(this: any, reqmatch?: StatusPageMaintenanceListMatch, ctrl?: Control): Promise<StatusPageMaintenanceEntity[]>;
    create(this: any, reqdata?: StatusPageMaintenanceCreateData, ctrl?: Control): Promise<StatusPageMaintenanceEntity>;
    update(this: any, reqdata?: StatusPageMaintenanceUpdateData, ctrl?: Control): Promise<StatusPageMaintenanceEntity>;
}
export { StatusPageMaintenanceEntity };

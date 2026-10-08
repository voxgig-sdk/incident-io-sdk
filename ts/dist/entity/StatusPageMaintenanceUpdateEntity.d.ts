import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageMaintenanceUpdate, StatusPageMaintenanceUpdateCreateData } from '../IncidentIoTypes';
declare class StatusPageMaintenanceUpdateEntity extends IncidentIoEntityBase<StatusPageMaintenanceUpdate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageMaintenanceUpdateEntity): StatusPageMaintenanceUpdateEntity;
    create(this: any, reqdata?: StatusPageMaintenanceUpdateCreateData, ctrl?: Control): Promise<StatusPageMaintenanceUpdateEntity>;
}
export { StatusPageMaintenanceUpdateEntity };

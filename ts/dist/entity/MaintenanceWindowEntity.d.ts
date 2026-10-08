import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { MaintenanceWindow, MaintenanceWindowLoadMatch, MaintenanceWindowListMatch, MaintenanceWindowCreateData, MaintenanceWindowUpdateData, MaintenanceWindowRemoveMatch } from '../IncidentIoTypes';
declare class MaintenanceWindowEntity extends IncidentIoEntityBase<MaintenanceWindow> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: MaintenanceWindowEntity): MaintenanceWindowEntity;
    load(this: any, reqmatch?: MaintenanceWindowLoadMatch, ctrl?: Control): Promise<MaintenanceWindowEntity>;
    list(this: any, reqmatch?: MaintenanceWindowListMatch, ctrl?: Control): Promise<MaintenanceWindowEntity[]>;
    create(this: any, reqdata?: MaintenanceWindowCreateData, ctrl?: Control): Promise<MaintenanceWindowEntity>;
    update(this: any, reqdata?: MaintenanceWindowUpdateData, ctrl?: Control): Promise<MaintenanceWindowEntity>;
    remove(this: any, reqmatch?: MaintenanceWindowRemoveMatch, ctrl?: Control): Promise<MaintenanceWindowEntity>;
}
export { MaintenanceWindowEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentRole, IncidentRoleLoadMatch, IncidentRoleListMatch, IncidentRoleCreateData, IncidentRoleUpdateData, IncidentRoleRemoveMatch } from '../IncidentIoTypes';
declare class IncidentRoleEntity extends IncidentIoEntityBase<IncidentRole> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentRoleEntity): IncidentRoleEntity;
    load(this: any, reqmatch?: IncidentRoleLoadMatch, ctrl?: Control): Promise<IncidentRoleEntity>;
    list(this: any, reqmatch?: IncidentRoleListMatch, ctrl?: Control): Promise<IncidentRoleEntity[]>;
    create(this: any, reqdata?: IncidentRoleCreateData, ctrl?: Control): Promise<IncidentRoleEntity>;
    update(this: any, reqdata?: IncidentRoleUpdateData, ctrl?: Control): Promise<IncidentRoleEntity>;
    remove(this: any, reqmatch?: IncidentRoleRemoveMatch, ctrl?: Control): Promise<IncidentRoleEntity>;
}
export { IncidentRoleEntity };

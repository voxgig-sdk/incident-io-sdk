import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPageComponent, StatusPageComponentLoadMatch, StatusPageComponentListMatch, StatusPageComponentCreateData, StatusPageComponentUpdateData, StatusPageComponentRemoveMatch } from '../IncidentIoTypes';
declare class StatusPageComponentEntity extends IncidentIoEntityBase<StatusPageComponent> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageComponentEntity): StatusPageComponentEntity;
    load(this: any, reqmatch?: StatusPageComponentLoadMatch, ctrl?: Control): Promise<StatusPageComponentEntity>;
    list(this: any, reqmatch?: StatusPageComponentListMatch, ctrl?: Control): Promise<StatusPageComponentEntity[]>;
    create(this: any, reqdata?: StatusPageComponentCreateData, ctrl?: Control): Promise<StatusPageComponentEntity>;
    update(this: any, reqdata?: StatusPageComponentUpdateData, ctrl?: Control): Promise<StatusPageComponentEntity>;
    remove(this: any, reqmatch?: StatusPageComponentRemoveMatch, ctrl?: Control): Promise<StatusPageComponentEntity>;
}
export { StatusPageComponentEntity };

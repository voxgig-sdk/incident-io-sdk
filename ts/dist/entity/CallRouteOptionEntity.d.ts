import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallRouteOption, CallRouteOptionLoadMatch, CallRouteOptionListMatch, CallRouteOptionCreateData, CallRouteOptionUpdateData, CallRouteOptionRemoveMatch } from '../IncidentIoTypes';
declare class CallRouteOptionEntity extends IncidentIoEntityBase<CallRouteOption> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallRouteOptionEntity): CallRouteOptionEntity;
    load(this: any, reqmatch?: CallRouteOptionLoadMatch, ctrl?: Control): Promise<CallRouteOptionEntity>;
    list(this: any, reqmatch?: CallRouteOptionListMatch, ctrl?: Control): Promise<CallRouteOptionEntity[]>;
    create(this: any, reqdata?: CallRouteOptionCreateData, ctrl?: Control): Promise<CallRouteOptionEntity>;
    update(this: any, reqdata?: CallRouteOptionUpdateData, ctrl?: Control): Promise<CallRouteOptionEntity>;
    remove(this: any, reqmatch?: CallRouteOptionRemoveMatch, ctrl?: Control): Promise<CallRouteOptionEntity>;
}
export { CallRouteOptionEntity };

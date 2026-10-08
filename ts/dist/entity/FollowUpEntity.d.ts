import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { FollowUp, FollowUpLoadMatch, FollowUpListMatch, FollowUpCreateData, FollowUpUpdateData, FollowUpRemoveMatch } from '../IncidentIoTypes';
declare class FollowUpEntity extends IncidentIoEntityBase<FollowUp> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: FollowUpEntity): FollowUpEntity;
    load(this: any, reqmatch?: FollowUpLoadMatch, ctrl?: Control): Promise<FollowUpEntity>;
    list(this: any, reqmatch?: FollowUpListMatch, ctrl?: Control): Promise<FollowUpEntity[]>;
    create(this: any, reqdata?: FollowUpCreateData, ctrl?: Control): Promise<FollowUpEntity>;
    update(this: any, reqdata?: FollowUpUpdateData, ctrl?: Control): Promise<FollowUpEntity>;
    remove(this: any, reqmatch?: FollowUpRemoveMatch, ctrl?: Control): Promise<FollowUpEntity>;
}
export { FollowUpEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { FollowUpsCreateFromLinkResultV3, FollowUpsCreateFromLinkResultV3CreateData } from '../IncidentIoTypes';
declare class FollowUpsCreateFromLinkResultV3Entity extends IncidentIoEntityBase<FollowUpsCreateFromLinkResultV3> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: FollowUpsCreateFromLinkResultV3Entity): FollowUpsCreateFromLinkResultV3Entity;
    create(this: any, reqdata?: FollowUpsCreateFromLinkResultV3CreateData, ctrl?: Control): Promise<FollowUpsCreateFromLinkResultV3Entity>;
}
export { FollowUpsCreateFromLinkResultV3Entity };

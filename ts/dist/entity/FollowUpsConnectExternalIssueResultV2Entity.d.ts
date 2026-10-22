import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { FollowUpsConnectExternalIssueResultV2, FollowUpsConnectExternalIssueResultV2CreateData } from '../IncidentIoTypes';
declare class FollowUpsConnectExternalIssueResultV2Entity extends IncidentIoEntityBase<FollowUpsConnectExternalIssueResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: FollowUpsConnectExternalIssueResultV2Entity): FollowUpsConnectExternalIssueResultV2Entity;
    create(this: any, reqdata?: FollowUpsConnectExternalIssueResultV2CreateData, ctrl?: Control): Promise<FollowUpsConnectExternalIssueResultV2Entity>;
}
export { FollowUpsConnectExternalIssueResultV2Entity };

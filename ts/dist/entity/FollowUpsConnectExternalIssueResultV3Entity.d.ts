import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { FollowUpsConnectExternalIssueResultV3, FollowUpsConnectExternalIssueResultV3CreateData } from '../IncidentIoTypes';
declare class FollowUpsConnectExternalIssueResultV3Entity extends IncidentIoEntityBase<FollowUpsConnectExternalIssueResultV3> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: FollowUpsConnectExternalIssueResultV3Entity): FollowUpsConnectExternalIssueResultV3Entity;
    create(this: any, reqdata?: FollowUpsConnectExternalIssueResultV3CreateData, ctrl?: Control): Promise<FollowUpsConnectExternalIssueResultV3Entity>;
}
export { FollowUpsConnectExternalIssueResultV3Entity };

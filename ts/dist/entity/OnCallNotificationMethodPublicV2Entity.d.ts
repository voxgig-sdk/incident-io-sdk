import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { OnCallNotificationMethodPublicV2, OnCallNotificationMethodPublicV2ListMatch } from '../IncidentIoTypes';
declare class OnCallNotificationMethodPublicV2Entity extends IncidentIoEntityBase<OnCallNotificationMethodPublicV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: OnCallNotificationMethodPublicV2Entity): OnCallNotificationMethodPublicV2Entity;
    list(this: any, reqmatch?: OnCallNotificationMethodPublicV2ListMatch, ctrl?: Control): Promise<OnCallNotificationMethodPublicV2Entity[]>;
}
export { OnCallNotificationMethodPublicV2Entity };

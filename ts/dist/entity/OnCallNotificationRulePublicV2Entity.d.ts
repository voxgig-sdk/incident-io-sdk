import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { OnCallNotificationRulePublicV2, OnCallNotificationRulePublicV2ListMatch } from '../IncidentIoTypes';
declare class OnCallNotificationRulePublicV2Entity extends IncidentIoEntityBase<OnCallNotificationRulePublicV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: OnCallNotificationRulePublicV2Entity): OnCallNotificationRulePublicV2Entity;
    list(this: any, reqmatch?: OnCallNotificationRulePublicV2ListMatch, ctrl?: Control): Promise<OnCallNotificationRulePublicV2Entity[]>;
}
export { OnCallNotificationRulePublicV2Entity };

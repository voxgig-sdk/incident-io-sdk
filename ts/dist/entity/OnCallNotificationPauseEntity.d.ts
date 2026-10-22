import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { OnCallNotificationPause, OnCallNotificationPauseLoadMatch, OnCallNotificationPauseListMatch } from '../IncidentIoTypes';
declare class OnCallNotificationPauseEntity extends IncidentIoEntityBase<OnCallNotificationPause> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: OnCallNotificationPauseEntity): OnCallNotificationPauseEntity;
    load(this: any, reqmatch?: OnCallNotificationPauseLoadMatch, ctrl?: Control): Promise<OnCallNotificationPauseEntity>;
    list(this: any, reqmatch?: OnCallNotificationPauseListMatch, ctrl?: Control): Promise<OnCallNotificationPauseEntity[]>;
}
export { OnCallNotificationPauseEntity };

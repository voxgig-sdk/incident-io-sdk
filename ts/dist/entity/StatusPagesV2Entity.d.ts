import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPagesV2, StatusPagesV2RemoveMatch } from '../IncidentIoTypes';
declare class StatusPagesV2Entity extends IncidentIoEntityBase<StatusPagesV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPagesV2Entity): StatusPagesV2Entity;
    remove(this: any, reqmatch?: StatusPagesV2RemoveMatch, ctrl?: Control): Promise<StatusPagesV2Entity>;
}
export { StatusPagesV2Entity };

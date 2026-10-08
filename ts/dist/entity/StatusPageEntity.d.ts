import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPage, StatusPageLoadMatch, StatusPageListMatch } from '../IncidentIoTypes';
declare class StatusPageEntity extends IncidentIoEntityBase<StatusPage> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPageEntity): StatusPageEntity;
    load(this: any, reqmatch?: StatusPageLoadMatch, ctrl?: Control): Promise<StatusPageEntity>;
    list(this: any, reqmatch?: StatusPageListMatch, ctrl?: Control): Promise<StatusPageEntity[]>;
}
export { StatusPageEntity };

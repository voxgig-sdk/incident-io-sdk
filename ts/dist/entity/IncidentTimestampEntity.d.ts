import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTimestamp, IncidentTimestampLoadMatch, IncidentTimestampListMatch } from '../IncidentIoTypes';
declare class IncidentTimestampEntity extends IncidentIoEntityBase<IncidentTimestamp> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTimestampEntity): IncidentTimestampEntity;
    load(this: any, reqmatch?: IncidentTimestampLoadMatch, ctrl?: Control): Promise<IncidentTimestampEntity>;
    list(this: any, reqmatch?: IncidentTimestampListMatch, ctrl?: Control): Promise<IncidentTimestampEntity[]>;
}
export { IncidentTimestampEntity };

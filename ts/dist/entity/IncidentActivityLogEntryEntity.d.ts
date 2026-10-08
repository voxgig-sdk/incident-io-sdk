import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentActivityLogEntry, IncidentActivityLogEntryListMatch } from '../IncidentIoTypes';
declare class IncidentActivityLogEntryEntity extends IncidentIoEntityBase<IncidentActivityLogEntry> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentActivityLogEntryEntity): IncidentActivityLogEntryEntity;
    list(this: any, reqmatch?: IncidentActivityLogEntryListMatch, ctrl?: Control): Promise<IncidentActivityLogEntryEntity[]>;
}
export { IncidentActivityLogEntryEntity };

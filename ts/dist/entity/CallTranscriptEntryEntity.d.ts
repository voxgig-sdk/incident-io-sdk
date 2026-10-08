import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallTranscriptEntry, CallTranscriptEntryListMatch } from '../IncidentIoTypes';
declare class CallTranscriptEntryEntity extends IncidentIoEntityBase<CallTranscriptEntry> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallTranscriptEntryEntity): CallTranscriptEntryEntity;
    list(this: any, reqmatch?: CallTranscriptEntryListMatch, ctrl?: Control): Promise<CallTranscriptEntryEntity[]>;
}
export { CallTranscriptEntryEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CallSession, CallSessionListMatch } from '../IncidentIoTypes';
declare class CallSessionEntity extends IncidentIoEntityBase<CallSession> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CallSessionEntity): CallSessionEntity;
    list(this: any, reqmatch?: CallSessionListMatch, ctrl?: Control): Promise<CallSessionEntity[]>;
}
export { CallSessionEntity };

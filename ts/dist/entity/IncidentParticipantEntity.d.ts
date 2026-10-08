import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentParticipant, IncidentParticipantLoadMatch } from '../IncidentIoTypes';
declare class IncidentParticipantEntity extends IncidentIoEntityBase<IncidentParticipant> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentParticipantEntity): IncidentParticipantEntity;
    load(this: any, reqmatch?: IncidentParticipantLoadMatch, ctrl?: Control): Promise<IncidentParticipantEntity>;
}
export { IncidentParticipantEntity };

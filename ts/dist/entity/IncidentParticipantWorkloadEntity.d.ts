import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentParticipantWorkload, IncidentParticipantWorkloadListMatch } from '../IncidentIoTypes';
declare class IncidentParticipantWorkloadEntity extends IncidentIoEntityBase<IncidentParticipantWorkload> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentParticipantWorkloadEntity): IncidentParticipantWorkloadEntity;
    list(this: any, reqmatch?: IncidentParticipantWorkloadListMatch, ctrl?: Control): Promise<IncidentParticipantWorkloadEntity[]>;
}
export { IncidentParticipantWorkloadEntity };

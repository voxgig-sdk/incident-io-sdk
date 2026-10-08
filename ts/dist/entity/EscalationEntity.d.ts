import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Escalation, EscalationLoadMatch, EscalationListMatch, EscalationCreateData } from '../IncidentIoTypes';
declare class EscalationEntity extends IncidentIoEntityBase<Escalation> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationEntity): EscalationEntity;
    load(this: any, reqmatch?: EscalationLoadMatch, ctrl?: Control): Promise<EscalationEntity>;
    list(this: any, reqmatch?: EscalationListMatch, ctrl?: Control): Promise<EscalationEntity[]>;
    create(this: any, reqdata?: EscalationCreateData, ctrl?: Control): Promise<EscalationEntity>;
}
export { EscalationEntity };

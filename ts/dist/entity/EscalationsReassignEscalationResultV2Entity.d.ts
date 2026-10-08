import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { EscalationsReassignEscalationResultV2, EscalationsReassignEscalationResultV2CreateData } from '../IncidentIoTypes';
declare class EscalationsReassignEscalationResultV2Entity extends IncidentIoEntityBase<EscalationsReassignEscalationResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationsReassignEscalationResultV2Entity): EscalationsReassignEscalationResultV2Entity;
    create(this: any, reqdata?: EscalationsReassignEscalationResultV2CreateData, ctrl?: Control): Promise<EscalationsReassignEscalationResultV2Entity>;
}
export { EscalationsReassignEscalationResultV2Entity };

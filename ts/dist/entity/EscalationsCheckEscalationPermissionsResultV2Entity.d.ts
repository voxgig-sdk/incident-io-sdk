import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { EscalationsCheckEscalationPermissionsResultV2, EscalationsCheckEscalationPermissionsResultV2CreateData } from '../IncidentIoTypes';
declare class EscalationsCheckEscalationPermissionsResultV2Entity extends IncidentIoEntityBase<EscalationsCheckEscalationPermissionsResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationsCheckEscalationPermissionsResultV2Entity): EscalationsCheckEscalationPermissionsResultV2Entity;
    create(this: any, reqdata?: EscalationsCheckEscalationPermissionsResultV2CreateData, ctrl?: Control): Promise<EscalationsCheckEscalationPermissionsResultV2Entity>;
}
export { EscalationsCheckEscalationPermissionsResultV2Entity };

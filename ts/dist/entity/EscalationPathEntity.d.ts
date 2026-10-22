import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { EscalationPath, EscalationPathLoadMatch, EscalationPathListMatch, EscalationPathCreateData, EscalationPathUpdateData, EscalationPathRemoveMatch } from '../IncidentIoTypes';
declare class EscalationPathEntity extends IncidentIoEntityBase<EscalationPath> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationPathEntity): EscalationPathEntity;
    load(this: any, reqmatch?: EscalationPathLoadMatch, ctrl?: Control): Promise<EscalationPathEntity>;
    list(this: any, reqmatch?: EscalationPathListMatch, ctrl?: Control): Promise<EscalationPathEntity[]>;
    create(this: any, reqdata?: EscalationPathCreateData, ctrl?: Control): Promise<EscalationPathEntity>;
    update(this: any, reqdata?: EscalationPathUpdateData, ctrl?: Control): Promise<EscalationPathEntity>;
    remove(this: any, reqmatch?: EscalationPathRemoveMatch, ctrl?: Control): Promise<EscalationPathEntity>;
}
export { EscalationPathEntity };

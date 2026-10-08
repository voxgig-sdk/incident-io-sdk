import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { EscalationPathTemplate, EscalationPathTemplateLoadMatch, EscalationPathTemplateListMatch, EscalationPathTemplateCreateData, EscalationPathTemplateUpdateData, EscalationPathTemplateRemoveMatch } from '../IncidentIoTypes';
declare class EscalationPathTemplateEntity extends IncidentIoEntityBase<EscalationPathTemplate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationPathTemplateEntity): EscalationPathTemplateEntity;
    load(this: any, reqmatch?: EscalationPathTemplateLoadMatch, ctrl?: Control): Promise<EscalationPathTemplateEntity>;
    list(this: any, reqmatch?: EscalationPathTemplateListMatch, ctrl?: Control): Promise<EscalationPathTemplateEntity[]>;
    create(this: any, reqdata?: EscalationPathTemplateCreateData, ctrl?: Control): Promise<EscalationPathTemplateEntity>;
    update(this: any, reqdata?: EscalationPathTemplateUpdateData, ctrl?: Control): Promise<EscalationPathTemplateEntity>;
    remove(this: any, reqmatch?: EscalationPathTemplateRemoveMatch, ctrl?: Control): Promise<EscalationPathTemplateEntity>;
}
export { EscalationPathTemplateEntity };

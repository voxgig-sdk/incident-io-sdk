import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTemplate, IncidentTemplateLoadMatch, IncidentTemplateListMatch, IncidentTemplateCreateData, IncidentTemplateUpdateData, IncidentTemplateRemoveMatch } from '../IncidentIoTypes';
declare class IncidentTemplateEntity extends IncidentIoEntityBase<IncidentTemplate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTemplateEntity): IncidentTemplateEntity;
    load(this: any, reqmatch?: IncidentTemplateLoadMatch, ctrl?: Control): Promise<IncidentTemplateEntity>;
    list(this: any, reqmatch?: IncidentTemplateListMatch, ctrl?: Control): Promise<IncidentTemplateEntity[]>;
    create(this: any, reqdata?: IncidentTemplateCreateData, ctrl?: Control): Promise<IncidentTemplateEntity>;
    update(this: any, reqdata?: IncidentTemplateUpdateData, ctrl?: Control): Promise<IncidentTemplateEntity>;
    remove(this: any, reqmatch?: IncidentTemplateRemoveMatch, ctrl?: Control): Promise<IncidentTemplateEntity>;
}
export { IncidentTemplateEntity };

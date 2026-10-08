import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AnnouncementTemplate, AnnouncementTemplateLoadMatch, AnnouncementTemplateListMatch, AnnouncementTemplateCreateData, AnnouncementTemplateUpdateData, AnnouncementTemplateRemoveMatch } from '../IncidentIoTypes';
declare class AnnouncementTemplateEntity extends IncidentIoEntityBase<AnnouncementTemplate> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AnnouncementTemplateEntity): AnnouncementTemplateEntity;
    load(this: any, reqmatch?: AnnouncementTemplateLoadMatch, ctrl?: Control): Promise<AnnouncementTemplateEntity>;
    list(this: any, reqmatch?: AnnouncementTemplateListMatch, ctrl?: Control): Promise<AnnouncementTemplateEntity[]>;
    create(this: any, reqdata?: AnnouncementTemplateCreateData, ctrl?: Control): Promise<AnnouncementTemplateEntity>;
    update(this: any, reqdata?: AnnouncementTemplateUpdateData, ctrl?: Control): Promise<AnnouncementTemplateEntity>;
    remove(this: any, reqmatch?: AnnouncementTemplateRemoveMatch, ctrl?: Control): Promise<AnnouncementTemplateEntity>;
}
export { AnnouncementTemplateEntity };

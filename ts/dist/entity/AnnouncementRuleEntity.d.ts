import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AnnouncementRule, AnnouncementRuleLoadMatch, AnnouncementRuleListMatch, AnnouncementRuleCreateData, AnnouncementRuleUpdateData, AnnouncementRuleRemoveMatch } from '../IncidentIoTypes';
declare class AnnouncementRuleEntity extends IncidentIoEntityBase<AnnouncementRule> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AnnouncementRuleEntity): AnnouncementRuleEntity;
    load(this: any, reqmatch?: AnnouncementRuleLoadMatch, ctrl?: Control): Promise<AnnouncementRuleEntity>;
    list(this: any, reqmatch?: AnnouncementRuleListMatch, ctrl?: Control): Promise<AnnouncementRuleEntity[]>;
    create(this: any, reqdata?: AnnouncementRuleCreateData, ctrl?: Control): Promise<AnnouncementRuleEntity>;
    update(this: any, reqdata?: AnnouncementRuleUpdateData, ctrl?: Control): Promise<AnnouncementRuleEntity>;
    remove(this: any, reqmatch?: AnnouncementRuleRemoveMatch, ctrl?: Control): Promise<AnnouncementRuleEntity>;
}
export { AnnouncementRuleEntity };

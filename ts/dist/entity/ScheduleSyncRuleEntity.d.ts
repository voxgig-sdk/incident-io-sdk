import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ScheduleSyncRule, ScheduleSyncRuleLoadMatch, ScheduleSyncRuleListMatch, ScheduleSyncRuleCreateData, ScheduleSyncRuleUpdateData, ScheduleSyncRuleRemoveMatch } from '../IncidentIoTypes';
declare class ScheduleSyncRuleEntity extends IncidentIoEntityBase<ScheduleSyncRule> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ScheduleSyncRuleEntity): ScheduleSyncRuleEntity;
    load(this: any, reqmatch?: ScheduleSyncRuleLoadMatch, ctrl?: Control): Promise<ScheduleSyncRuleEntity>;
    list(this: any, reqmatch?: ScheduleSyncRuleListMatch, ctrl?: Control): Promise<ScheduleSyncRuleEntity[]>;
    create(this: any, reqdata?: ScheduleSyncRuleCreateData, ctrl?: Control): Promise<ScheduleSyncRuleEntity>;
    update(this: any, reqdata?: ScheduleSyncRuleUpdateData, ctrl?: Control): Promise<ScheduleSyncRuleEntity>;
    remove(this: any, reqmatch?: ScheduleSyncRuleRemoveMatch, ctrl?: Control): Promise<ScheduleSyncRuleEntity>;
}
export { ScheduleSyncRuleEntity };

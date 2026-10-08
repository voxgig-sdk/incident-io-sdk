import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CustomFieldOption, CustomFieldOptionLoadMatch, CustomFieldOptionListMatch, CustomFieldOptionCreateData, CustomFieldOptionUpdateData, CustomFieldOptionRemoveMatch } from '../IncidentIoTypes';
declare class CustomFieldOptionEntity extends IncidentIoEntityBase<CustomFieldOption> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CustomFieldOptionEntity): CustomFieldOptionEntity;
    load(this: any, reqmatch?: CustomFieldOptionLoadMatch, ctrl?: Control): Promise<CustomFieldOptionEntity>;
    list(this: any, reqmatch?: CustomFieldOptionListMatch, ctrl?: Control): Promise<CustomFieldOptionEntity[]>;
    create(this: any, reqdata?: CustomFieldOptionCreateData, ctrl?: Control): Promise<CustomFieldOptionEntity>;
    update(this: any, reqdata?: CustomFieldOptionUpdateData, ctrl?: Control): Promise<CustomFieldOptionEntity>;
    remove(this: any, reqmatch?: CustomFieldOptionRemoveMatch, ctrl?: Control): Promise<CustomFieldOptionEntity>;
}
export { CustomFieldOptionEntity };

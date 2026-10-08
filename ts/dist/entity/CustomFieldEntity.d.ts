import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CustomField, CustomFieldLoadMatch, CustomFieldListMatch, CustomFieldCreateData, CustomFieldUpdateData, CustomFieldRemoveMatch } from '../IncidentIoTypes';
declare class CustomFieldEntity extends IncidentIoEntityBase<CustomField> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CustomFieldEntity): CustomFieldEntity;
    load(this: any, reqmatch?: CustomFieldLoadMatch, ctrl?: Control): Promise<CustomFieldEntity>;
    list(this: any, reqmatch?: CustomFieldListMatch, ctrl?: Control): Promise<CustomFieldEntity[]>;
    create(this: any, reqdata?: CustomFieldCreateData, ctrl?: Control): Promise<CustomFieldEntity>;
    update(this: any, reqdata?: CustomFieldUpdateData, ctrl?: Control): Promise<CustomFieldEntity>;
    remove(this: any, reqmatch?: CustomFieldRemoveMatch, ctrl?: Control): Promise<CustomFieldEntity>;
}
export { CustomFieldEntity };

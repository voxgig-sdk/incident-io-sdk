import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CatalogType, CatalogTypeLoadMatch, CatalogTypeListMatch, CatalogTypeCreateData, CatalogTypeUpdateData } from '../IncidentIoTypes';
declare class CatalogTypeEntity extends IncidentIoEntityBase<CatalogType> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CatalogTypeEntity): CatalogTypeEntity;
    load(this: any, reqmatch?: CatalogTypeLoadMatch, ctrl?: Control): Promise<CatalogTypeEntity>;
    list(this: any, reqmatch?: CatalogTypeListMatch, ctrl?: Control): Promise<CatalogTypeEntity[]>;
    create(this: any, reqdata?: CatalogTypeCreateData, ctrl?: Control): Promise<CatalogTypeEntity>;
    update(this: any, reqdata?: CatalogTypeUpdateData, ctrl?: Control): Promise<CatalogTypeEntity>;
}
export { CatalogTypeEntity };

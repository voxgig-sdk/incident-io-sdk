import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CatalogEntry, CatalogEntryLoadMatch, CatalogEntryListMatch, CatalogEntryCreateData, CatalogEntryUpdateData } from '../IncidentIoTypes';
declare class CatalogEntryEntity extends IncidentIoEntityBase<CatalogEntry> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CatalogEntryEntity): CatalogEntryEntity;
    load(this: any, reqmatch?: CatalogEntryLoadMatch, ctrl?: Control): Promise<CatalogEntryEntity>;
    list(this: any, reqmatch?: CatalogEntryListMatch, ctrl?: Control): Promise<CatalogEntryEntity[]>;
    create(this: any, reqdata?: CatalogEntryCreateData, ctrl?: Control): Promise<CatalogEntryEntity>;
    update(this: any, reqdata?: CatalogEntryUpdateData, ctrl?: Control): Promise<CatalogEntryEntity>;
}
export { CatalogEntryEntity };

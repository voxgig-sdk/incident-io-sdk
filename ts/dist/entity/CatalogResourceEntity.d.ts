import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CatalogResource, CatalogResourceListMatch } from '../IncidentIoTypes';
declare class CatalogResourceEntity extends IncidentIoEntityBase<CatalogResource> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CatalogResourceEntity): CatalogResourceEntity;
    list(this: any, reqmatch?: CatalogResourceListMatch, ctrl?: Control): Promise<CatalogResourceEntity[]>;
}
export { CatalogResourceEntity };

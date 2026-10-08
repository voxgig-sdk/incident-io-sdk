import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CatalogTypeSchema, CatalogTypeSchemaCreateData } from '../IncidentIoTypes';
declare class CatalogTypeSchemaEntity extends IncidentIoEntityBase<CatalogTypeSchema> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CatalogTypeSchemaEntity): CatalogTypeSchemaEntity;
    create(this: any, reqdata?: CatalogTypeSchemaCreateData, ctrl?: Control): Promise<CatalogTypeSchemaEntity>;
}
export { CatalogTypeSchemaEntity };

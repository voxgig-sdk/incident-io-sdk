import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { CatalogV3, CatalogV3CreateData } from '../IncidentIoTypes';
declare class CatalogV3Entity extends IncidentIoEntityBase<CatalogV3> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: CatalogV3Entity): CatalogV3Entity;
    create(this: any, reqdata?: CatalogV3CreateData, ctrl?: Control): Promise<CatalogV3Entity>;
}
export { CatalogV3Entity };

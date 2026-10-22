import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentsImportPostmortemDocumentResultV2, IncidentsImportPostmortemDocumentResultV2CreateData } from '../IncidentIoTypes';
declare class IncidentsImportPostmortemDocumentResultV2Entity extends IncidentIoEntityBase<IncidentsImportPostmortemDocumentResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentsImportPostmortemDocumentResultV2Entity): IncidentsImportPostmortemDocumentResultV2Entity;
    create(this: any, reqdata?: IncidentsImportPostmortemDocumentResultV2CreateData, ctrl?: Control): Promise<IncidentsImportPostmortemDocumentResultV2Entity>;
}
export { IncidentsImportPostmortemDocumentResultV2Entity };

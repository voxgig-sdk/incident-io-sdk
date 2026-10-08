import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTemplatesValidateResultV1, IncidentTemplatesValidateResultV1CreateData } from '../IncidentIoTypes';
declare class IncidentTemplatesValidateResultV1Entity extends IncidentIoEntityBase<IncidentTemplatesValidateResultV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTemplatesValidateResultV1Entity): IncidentTemplatesValidateResultV1Entity;
    create(this: any, reqdata?: IncidentTemplatesValidateResultV1CreateData, ctrl?: Control): Promise<IncidentTemplatesValidateResultV1Entity>;
}
export { IncidentTemplatesValidateResultV1Entity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayReportsUnpublishResultV2, PayReportsUnpublishResultV2CreateData } from '../IncidentIoTypes';
declare class PayReportsUnpublishResultV2Entity extends IncidentIoEntityBase<PayReportsUnpublishResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayReportsUnpublishResultV2Entity): PayReportsUnpublishResultV2Entity;
    create(this: any, reqdata?: PayReportsUnpublishResultV2CreateData, ctrl?: Control): Promise<PayReportsUnpublishResultV2Entity>;
}
export { PayReportsUnpublishResultV2Entity };

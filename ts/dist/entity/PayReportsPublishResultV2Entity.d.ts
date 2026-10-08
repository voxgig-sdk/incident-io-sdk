import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayReportsPublishResultV2, PayReportsPublishResultV2CreateData } from '../IncidentIoTypes';
declare class PayReportsPublishResultV2Entity extends IncidentIoEntityBase<PayReportsPublishResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayReportsPublishResultV2Entity): PayReportsPublishResultV2Entity;
    create(this: any, reqdata?: PayReportsPublishResultV2CreateData, ctrl?: Control): Promise<PayReportsPublishResultV2Entity>;
}
export { PayReportsPublishResultV2Entity };

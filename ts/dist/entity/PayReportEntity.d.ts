import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayReport, PayReportLoadMatch, PayReportListMatch, PayReportCreateData, PayReportRemoveMatch } from '../IncidentIoTypes';
declare class PayReportEntity extends IncidentIoEntityBase<PayReport> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayReportEntity): PayReportEntity;
    load(this: any, reqmatch?: PayReportLoadMatch, ctrl?: Control): Promise<PayReportEntity>;
    list(this: any, reqmatch?: PayReportListMatch, ctrl?: Control): Promise<PayReportEntity[]>;
    create(this: any, reqdata?: PayReportCreateData, ctrl?: Control): Promise<PayReportEntity>;
    remove(this: any, reqmatch?: PayReportRemoveMatch, ctrl?: Control): Promise<PayReportEntity>;
}
export { PayReportEntity };

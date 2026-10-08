import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { TelemetryDataSourceV2, TelemetryDataSourceV2UpdateData } from '../IncidentIoTypes';
declare class TelemetryDataSourceV2Entity extends IncidentIoEntityBase<TelemetryDataSourceV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: TelemetryDataSourceV2Entity): TelemetryDataSourceV2Entity;
    update(this: any, reqdata?: TelemetryDataSourceV2UpdateData, ctrl?: Control): Promise<TelemetryDataSourceV2Entity>;
}
export { TelemetryDataSourceV2Entity };

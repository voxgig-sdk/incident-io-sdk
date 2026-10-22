import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { TelemetryDataSource, TelemetryDataSourceUpdateData } from '../IncidentIoTypes';
declare class TelemetryDataSourceEntity extends IncidentIoEntityBase<TelemetryDataSource> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: TelemetryDataSourceEntity): TelemetryDataSourceEntity;
    update(this: any, reqdata?: TelemetryDataSourceUpdateData, ctrl?: Control): Promise<TelemetryDataSourceEntity>;
}
export { TelemetryDataSourceEntity };

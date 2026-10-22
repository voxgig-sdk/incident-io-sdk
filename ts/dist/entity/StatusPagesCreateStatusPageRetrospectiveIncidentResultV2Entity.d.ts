import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { StatusPagesCreateStatusPageRetrospectiveIncidentResultV2, StatusPagesCreateStatusPageRetrospectiveIncidentResultV2CreateData } from '../IncidentIoTypes';
declare class StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity extends IncidentIoEntityBase<StatusPagesCreateStatusPageRetrospectiveIncidentResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity): StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity;
    create(this: any, reqdata?: StatusPagesCreateStatusPageRetrospectiveIncidentResultV2CreateData, ctrl?: Control): Promise<StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity>;
}
export { StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity };

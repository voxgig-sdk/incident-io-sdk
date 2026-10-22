import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { UsersShowPagingProviderResultV2, UsersShowPagingProviderResultV2LoadMatch, UsersShowPagingProviderResultV2CreateData } from '../IncidentIoTypes';
declare class UsersShowPagingProviderResultV2Entity extends IncidentIoEntityBase<UsersShowPagingProviderResultV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: UsersShowPagingProviderResultV2Entity): UsersShowPagingProviderResultV2Entity;
    load(this: any, reqmatch?: UsersShowPagingProviderResultV2LoadMatch, ctrl?: Control): Promise<UsersShowPagingProviderResultV2Entity>;
    create(this: any, reqdata?: UsersShowPagingProviderResultV2CreateData, ctrl?: Control): Promise<UsersShowPagingProviderResultV2Entity>;
}
export { UsersShowPagingProviderResultV2Entity };

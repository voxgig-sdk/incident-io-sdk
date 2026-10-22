import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { ManagedResource, ManagedResourceCreateData } from '../IncidentIoTypes';
declare class ManagedResourceEntity extends IncidentIoEntityBase<ManagedResource> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ManagedResourceEntity): ManagedResourceEntity;
    create(this: any, reqdata?: ManagedResourceCreateData, ctrl?: Control): Promise<ManagedResourceEntity>;
}
export { ManagedResourceEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Identity, IdentityLoadMatch } from '../IncidentIoTypes';
declare class IdentityEntity extends IncidentIoEntityBase<Identity> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IdentityEntity): IdentityEntity;
    load(this: any, reqmatch?: IdentityLoadMatch, ctrl?: Control): Promise<IdentityEntity>;
}
export { IdentityEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PoliciesV2, PoliciesV2RemoveMatch } from '../IncidentIoTypes';
declare class PoliciesV2Entity extends IncidentIoEntityBase<PoliciesV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PoliciesV2Entity): PoliciesV2Entity;
    remove(this: any, reqmatch?: PoliciesV2RemoveMatch, ctrl?: Control): Promise<PoliciesV2Entity>;
}
export { PoliciesV2Entity };

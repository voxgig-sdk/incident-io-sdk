import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { EscalationsV2 } from '../IncidentIoTypes';
declare class EscalationsV2Entity extends IncidentIoEntityBase<EscalationsV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationsV2Entity): EscalationsV2Entity;
}
export { EscalationsV2Entity };

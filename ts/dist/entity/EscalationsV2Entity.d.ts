import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { EscalationsV2, EscalationsV2CreateData } from '../IncidentIoTypes';
declare class EscalationsV2Entity extends IncidentIoEntityBase<EscalationsV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: EscalationsV2Entity): EscalationsV2Entity;
    create(this: any, reqdata?: EscalationsV2CreateData, ctrl?: Control): Promise<EscalationsV2Entity>;
}
export { EscalationsV2Entity };

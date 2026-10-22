import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { HeartbeatV2, HeartbeatV2LoadMatch, HeartbeatV2CreateData } from '../IncidentIoTypes';
declare class HeartbeatV2Entity extends IncidentIoEntityBase<HeartbeatV2> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: HeartbeatV2Entity): HeartbeatV2Entity;
    load(this: any, reqmatch?: HeartbeatV2LoadMatch, ctrl?: Control): Promise<HeartbeatV2Entity>;
    create(this: any, reqdata?: HeartbeatV2CreateData, ctrl?: Control): Promise<HeartbeatV2Entity>;
}
export { HeartbeatV2Entity };

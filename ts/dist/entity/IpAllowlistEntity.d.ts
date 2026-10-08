import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IpAllowlist, IpAllowlistLoadMatch, IpAllowlistUpdateData } from '../IncidentIoTypes';
declare class IpAllowlistEntity extends IncidentIoEntityBase<IpAllowlist> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IpAllowlistEntity): IpAllowlistEntity;
    load(this: any, reqmatch?: IpAllowlistLoadMatch, ctrl?: Control): Promise<IpAllowlistEntity>;
    update(this: any, reqdata?: IpAllowlistUpdateData, ctrl?: Control): Promise<IpAllowlistEntity>;
}
export { IpAllowlistEntity };

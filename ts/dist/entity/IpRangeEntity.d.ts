import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IpRange, IpRangeListMatch } from '../IncidentIoTypes';
declare class IpRangeEntity extends IncidentIoEntityBase<IpRange> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IpRangeEntity): IpRangeEntity;
    list(this: any, reqmatch?: IpRangeListMatch, ctrl?: Control): Promise<IpRangeEntity[]>;
}
export { IpRangeEntity };

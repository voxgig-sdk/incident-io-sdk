import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PayConfig, PayConfigLoadMatch, PayConfigListMatch, PayConfigCreateData, PayConfigUpdateData, PayConfigRemoveMatch } from '../IncidentIoTypes';
declare class PayConfigEntity extends IncidentIoEntityBase<PayConfig> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PayConfigEntity): PayConfigEntity;
    load(this: any, reqmatch?: PayConfigLoadMatch, ctrl?: Control): Promise<PayConfigEntity>;
    list(this: any, reqmatch?: PayConfigListMatch, ctrl?: Control): Promise<PayConfigEntity[]>;
    create(this: any, reqdata?: PayConfigCreateData, ctrl?: Control): Promise<PayConfigEntity>;
    update(this: any, reqdata?: PayConfigUpdateData, ctrl?: Control): Promise<PayConfigEntity>;
    remove(this: any, reqmatch?: PayConfigRemoveMatch, ctrl?: Control): Promise<PayConfigEntity>;
}
export { PayConfigEntity };

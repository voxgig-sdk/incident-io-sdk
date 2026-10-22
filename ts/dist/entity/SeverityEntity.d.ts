import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Severity, SeverityLoadMatch, SeverityListMatch, SeverityCreateData, SeverityUpdateData, SeverityRemoveMatch } from '../IncidentIoTypes';
declare class SeverityEntity extends IncidentIoEntityBase<Severity> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: SeverityEntity): SeverityEntity;
    load(this: any, reqmatch?: SeverityLoadMatch, ctrl?: Control): Promise<SeverityEntity>;
    list(this: any, reqmatch?: SeverityListMatch, ctrl?: Control): Promise<SeverityEntity[]>;
    create(this: any, reqdata?: SeverityCreateData, ctrl?: Control): Promise<SeverityEntity>;
    update(this: any, reqdata?: SeverityUpdateData, ctrl?: Control): Promise<SeverityEntity>;
    remove(this: any, reqmatch?: SeverityRemoveMatch, ctrl?: Control): Promise<SeverityEntity>;
}
export { SeverityEntity };

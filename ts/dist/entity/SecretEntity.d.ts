import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Secret, SecretLoadMatch, SecretListMatch, SecretCreateData, SecretUpdateData, SecretRemoveMatch } from '../IncidentIoTypes';
declare class SecretEntity extends IncidentIoEntityBase<Secret> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: SecretEntity): SecretEntity;
    load(this: any, reqmatch?: SecretLoadMatch, ctrl?: Control): Promise<SecretEntity>;
    list(this: any, reqmatch?: SecretListMatch, ctrl?: Control): Promise<SecretEntity[]>;
    create(this: any, reqdata?: SecretCreateData, ctrl?: Control): Promise<SecretEntity>;
    update(this: any, reqdata?: SecretUpdateData, ctrl?: Control): Promise<SecretEntity>;
    remove(this: any, reqmatch?: SecretRemoveMatch, ctrl?: Control): Promise<SecretEntity>;
}
export { SecretEntity };

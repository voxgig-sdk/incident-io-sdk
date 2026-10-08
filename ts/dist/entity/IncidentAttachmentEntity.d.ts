import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentAttachment, IncidentAttachmentListMatch, IncidentAttachmentCreateData, IncidentAttachmentRemoveMatch } from '../IncidentIoTypes';
declare class IncidentAttachmentEntity extends IncidentIoEntityBase<IncidentAttachment> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentAttachmentEntity): IncidentAttachmentEntity;
    list(this: any, reqmatch?: IncidentAttachmentListMatch, ctrl?: Control): Promise<IncidentAttachmentEntity[]>;
    create(this: any, reqdata?: IncidentAttachmentCreateData, ctrl?: Control): Promise<IncidentAttachmentEntity>;
    remove(this: any, reqmatch?: IncidentAttachmentRemoveMatch, ctrl?: Control): Promise<IncidentAttachmentEntity>;
}
export { IncidentAttachmentEntity };

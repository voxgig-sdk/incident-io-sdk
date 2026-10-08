import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PostmortemDocument, PostmortemDocumentLoadMatch, PostmortemDocumentListMatch, PostmortemDocumentUpdateData } from '../IncidentIoTypes';
declare class PostmortemDocumentEntity extends IncidentIoEntityBase<PostmortemDocument> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PostmortemDocumentEntity): PostmortemDocumentEntity;
    load(this: any, reqmatch?: PostmortemDocumentLoadMatch, ctrl?: Control): Promise<PostmortemDocumentEntity>;
    list(this: any, reqmatch?: PostmortemDocumentListMatch, ctrl?: Control): Promise<PostmortemDocumentEntity[]>;
    update(this: any, reqdata?: PostmortemDocumentUpdateData, ctrl?: Control): Promise<PostmortemDocumentEntity>;
}
export { PostmortemDocumentEntity };

import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PostmortemDocumentsAttachResultV1, PostmortemDocumentsAttachResultV1CreateData } from '../IncidentIoTypes';
declare class PostmortemDocumentsAttachResultV1Entity extends IncidentIoEntityBase<PostmortemDocumentsAttachResultV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PostmortemDocumentsAttachResultV1Entity): PostmortemDocumentsAttachResultV1Entity;
    create(this: any, reqdata?: PostmortemDocumentsAttachResultV1CreateData, ctrl?: Control): Promise<PostmortemDocumentsAttachResultV1Entity>;
}
export { PostmortemDocumentsAttachResultV1Entity };

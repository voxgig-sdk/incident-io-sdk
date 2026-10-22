import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { PostmortemDocumentsShowContentResultV1, PostmortemDocumentsShowContentResultV1LoadMatch } from '../IncidentIoTypes';
declare class PostmortemDocumentsShowContentResultV1Entity extends IncidentIoEntityBase<PostmortemDocumentsShowContentResultV1> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: PostmortemDocumentsShowContentResultV1Entity): PostmortemDocumentsShowContentResultV1Entity;
    load(this: any, reqmatch?: PostmortemDocumentsShowContentResultV1LoadMatch, ctrl?: Control): Promise<PostmortemDocumentsShowContentResultV1Entity>;
}
export { PostmortemDocumentsShowContentResultV1Entity };

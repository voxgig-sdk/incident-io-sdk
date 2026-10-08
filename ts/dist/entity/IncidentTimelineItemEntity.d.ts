import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { IncidentTimelineItem, IncidentTimelineItemListMatch, IncidentTimelineItemCreateData, IncidentTimelineItemUpdateData } from '../IncidentIoTypes';
declare class IncidentTimelineItemEntity extends IncidentIoEntityBase<IncidentTimelineItem> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: IncidentTimelineItemEntity): IncidentTimelineItemEntity;
    list(this: any, reqmatch?: IncidentTimelineItemListMatch, ctrl?: Control): Promise<IncidentTimelineItemEntity[]>;
    create(this: any, reqdata?: IncidentTimelineItemCreateData, ctrl?: Control): Promise<IncidentTimelineItemEntity>;
    update(this: any, reqdata?: IncidentTimelineItemUpdateData, ctrl?: Control): Promise<IncidentTimelineItemEntity>;
}
export { IncidentTimelineItemEntity };

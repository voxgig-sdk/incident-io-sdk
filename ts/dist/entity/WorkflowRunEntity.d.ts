import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { WorkflowRun, WorkflowRunLoadMatch, WorkflowRunListMatch } from '../IncidentIoTypes';
declare class WorkflowRunEntity extends IncidentIoEntityBase<WorkflowRun> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: WorkflowRunEntity): WorkflowRunEntity;
    load(this: any, reqmatch?: WorkflowRunLoadMatch, ctrl?: Control): Promise<WorkflowRunEntity>;
    list(this: any, reqmatch?: WorkflowRunListMatch, ctrl?: Control): Promise<WorkflowRunEntity[]>;
}
export { WorkflowRunEntity };

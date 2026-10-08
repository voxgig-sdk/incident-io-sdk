import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch, WorkflowListMatch, WorkflowCreateData, WorkflowUpdateData, WorkflowRemoveMatch } from '../IncidentIoTypes';
declare class WorkflowEntity extends IncidentIoEntityBase<Workflow> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
    list(this: any, reqmatch?: WorkflowListMatch, ctrl?: Control): Promise<WorkflowEntity[]>;
    create(this: any, reqdata?: WorkflowCreateData, ctrl?: Control): Promise<WorkflowEntity>;
    update(this: any, reqdata?: WorkflowUpdateData, ctrl?: Control): Promise<WorkflowEntity>;
    remove(this: any, reqmatch?: WorkflowRemoveMatch, ctrl?: Control): Promise<WorkflowEntity>;
}
export { WorkflowEntity };

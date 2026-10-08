import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Action, ActionLoadMatch, ActionListMatch, ActionCreateData, ActionUpdateData, ActionRemoveMatch } from '../IncidentIoTypes';
declare class ActionEntity extends IncidentIoEntityBase<Action> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: ActionEntity): ActionEntity;
    load(this: any, reqmatch?: ActionLoadMatch, ctrl?: Control): Promise<ActionEntity>;
    list(this: any, reqmatch?: ActionListMatch, ctrl?: Control): Promise<ActionEntity[]>;
    create(this: any, reqdata?: ActionCreateData, ctrl?: Control): Promise<ActionEntity>;
    update(this: any, reqdata?: ActionUpdateData, ctrl?: Control): Promise<ActionEntity>;
    remove(this: any, reqmatch?: ActionRemoveMatch, ctrl?: Control): Promise<ActionEntity>;
}
export { ActionEntity };

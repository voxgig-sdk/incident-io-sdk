import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { AlertNote, AlertNoteLoadMatch, AlertNoteListMatch, AlertNoteCreateData, AlertNoteUpdateData, AlertNoteRemoveMatch } from '../IncidentIoTypes';
declare class AlertNoteEntity extends IncidentIoEntityBase<AlertNote> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: AlertNoteEntity): AlertNoteEntity;
    load(this: any, reqmatch?: AlertNoteLoadMatch, ctrl?: Control): Promise<AlertNoteEntity>;
    list(this: any, reqmatch?: AlertNoteListMatch, ctrl?: Control): Promise<AlertNoteEntity[]>;
    create(this: any, reqdata?: AlertNoteCreateData, ctrl?: Control): Promise<AlertNoteEntity>;
    update(this: any, reqdata?: AlertNoteUpdateData, ctrl?: Control): Promise<AlertNoteEntity>;
    remove(this: any, reqmatch?: AlertNoteRemoveMatch, ctrl?: Control): Promise<AlertNoteEntity>;
}
export { AlertNoteEntity };

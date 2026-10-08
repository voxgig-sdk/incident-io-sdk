import { IncidentIoEntityBase } from '../IncidentIoEntityBase';
import type { IncidentIoSDK } from '../IncidentIoSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamListMatch } from '../IncidentIoTypes';
declare class TeamEntity extends IncidentIoEntityBase<Team> {
    constructor(client: IncidentIoSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
}
export { TeamEntity };

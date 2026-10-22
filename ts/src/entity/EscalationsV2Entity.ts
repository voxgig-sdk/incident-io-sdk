
import { inspect } from 'node:util'

import { IncidentIoEntityBase } from '../IncidentIoEntityBase'

import type {
  IncidentIoSDK,
} from '../IncidentIoSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  EscalationsV2,
} from '../IncidentIoTypes'

class EscalationsV2Entity extends IncidentIoEntityBase<EscalationsV2> {

  constructor(client: IncidentIoSDK, entopts: any) {
    super(client, entopts)
    this.name = 'escalations_v2'
    this.name_ = 'escalations_v2'
    this.Name = 'EscalationsV2'
  }


  make(this: EscalationsV2Entity) {
    return new EscalationsV2Entity(this._client, this.entopts())
  }








}


export {
  EscalationsV2Entity
}

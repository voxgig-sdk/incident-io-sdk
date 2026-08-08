
import { Context } from './Context'


class IncidentIoError extends Error {

  isIncidentIoError = true

  sdk = 'IncidentIo'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  IncidentIoError
}


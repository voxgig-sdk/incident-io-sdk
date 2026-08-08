

class IncidentIoError extends Error {

  isIncidentIoError = true

  sdk = 'IncidentIo'

  constructor(code, msg, ctx) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

module.exports = {
  IncidentIoError
}


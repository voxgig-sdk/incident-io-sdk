-- IncidentIo SDK error

local IncidentIoError = {}
IncidentIoError.__index = IncidentIoError


function IncidentIoError.new(code, msg, ctx)
  local self = setmetatable({}, IncidentIoError)
  self.is_sdk_error = true
  self.sdk = "IncidentIo"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function IncidentIoError:error()
  return self.msg
end


function IncidentIoError:__tostring()
  return self.msg
end


return IncidentIoError

# IncidentIo SDK utility: make_context
require_relative '../core/context'
module IncidentIoUtilities
  MakeContext = ->(ctxmap, basectx) {
    IncidentIoContext.new(ctxmap, basectx)
  }
end

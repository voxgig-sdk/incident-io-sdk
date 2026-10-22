# IncidentIo SDK utility: prepare_body
require_relative 'media'
module IncidentIoUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return IncidentIoUtilities.raw_body(ctx.reqdata) if IncidentIoUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end

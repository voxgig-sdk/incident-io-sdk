# IncidentIo SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/secrets_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module IncidentIoFeatures
  def self.make_feature(name)
    case name
    when "base"
      IncidentIoBaseFeature.new
    when "debug"
      IncidentIoDebugFeature.new
    when "idempotency"
      IncidentIoIdempotencyFeature.new
    when "metrics"
      IncidentIoMetricsFeature.new
    when "paging"
      IncidentIoPagingFeature.new
    when "ratelimit"
      IncidentIoRatelimitFeature.new
    when "retry"
      IncidentIoRetryFeature.new
    when "secrets"
      IncidentIoSecretsFeature.new
    when "test"
      IncidentIoTestFeature.new
    when "timeout"
      IncidentIoTimeoutFeature.new
    else
      IncidentIoBaseFeature.new
    end
  end
end

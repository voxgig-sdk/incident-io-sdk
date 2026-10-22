# IncidentIo SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

IncidentIoUtility.registrar = ->(u) {
  u.clean = IncidentIoUtilities::Clean
  u.clean_add = IncidentIoUtilities::CleanAdd
  u.clean_explain = IncidentIoUtilities::CleanExplain
  u.done = IncidentIoUtilities::Done
  u.make_error = IncidentIoUtilities::MakeError
  u.feature_add = IncidentIoUtilities::FeatureAdd
  u.feature_hook = IncidentIoUtilities::FeatureHook
  u.feature_init = IncidentIoUtilities::FeatureInit
  u.fetcher = IncidentIoUtilities::Fetcher
  u.make_fetch_def = IncidentIoUtilities::MakeFetchDef
  u.make_context = IncidentIoUtilities::MakeContext
  u.make_options = IncidentIoUtilities::MakeOptions
  u.make_request = IncidentIoUtilities::MakeRequest
  u.make_response = IncidentIoUtilities::MakeResponse
  u.make_result = IncidentIoUtilities::MakeResult
  u.make_point = IncidentIoUtilities::MakePoint
  u.make_spec = IncidentIoUtilities::MakeSpec
  u.make_url = IncidentIoUtilities::MakeUrl
  u.param = IncidentIoUtilities::Param
  u.prepare_auth = IncidentIoUtilities::PrepareAuth
  u.prepare_body = IncidentIoUtilities::PrepareBody
  u.prepare_headers = IncidentIoUtilities::PrepareHeaders
  u.prepare_method = IncidentIoUtilities::PrepareMethod
  u.prepare_params = IncidentIoUtilities::PrepareParams
  u.prepare_path = IncidentIoUtilities::PreparePath
  u.prepare_query = IncidentIoUtilities::PrepareQuery
  u.graphql_body = IncidentIoUtilities::GraphqlBody
  u.graphql_errors = IncidentIoUtilities::GraphqlErrors
  u.result_basic = IncidentIoUtilities::ResultBasic
  u.result_body = IncidentIoUtilities::ResultBody
  u.result_headers = IncidentIoUtilities::ResultHeaders
  u.transform_request = IncidentIoUtilities::TransformRequest
  u.transform_response = IncidentIoUtilities::TransformResponse
}

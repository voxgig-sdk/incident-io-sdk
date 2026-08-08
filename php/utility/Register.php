<?php
declare(strict_types=1);

// IncidentIo SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

IncidentIoUtility::setRegistrar(function (IncidentIoUtility $u): void {
    $u->clean = [IncidentIoClean::class, 'call'];
    $u->done = [IncidentIoDone::class, 'call'];
    $u->make_error = [IncidentIoMakeError::class, 'call'];
    $u->feature_add = [IncidentIoFeatureAdd::class, 'call'];
    $u->feature_hook = [IncidentIoFeatureHook::class, 'call'];
    $u->feature_init = [IncidentIoFeatureInit::class, 'call'];
    $u->fetcher = [IncidentIoFetcher::class, 'call'];
    $u->make_fetch_def = [IncidentIoMakeFetchDef::class, 'call'];
    $u->make_context = [IncidentIoMakeContext::class, 'call'];
    $u->make_options = [IncidentIoMakeOptions::class, 'call'];
    $u->make_request = [IncidentIoMakeRequest::class, 'call'];
    $u->make_response = [IncidentIoMakeResponse::class, 'call'];
    $u->make_result = [IncidentIoMakeResult::class, 'call'];
    $u->make_point = [IncidentIoMakePoint::class, 'call'];
    $u->make_spec = [IncidentIoMakeSpec::class, 'call'];
    $u->make_url = [IncidentIoMakeUrl::class, 'call'];
    $u->param = [IncidentIoParam::class, 'call'];
    $u->prepare_auth = [IncidentIoPrepareAuth::class, 'call'];
    $u->prepare_body = [IncidentIoPrepareBody::class, 'call'];
    $u->prepare_headers = [IncidentIoPrepareHeaders::class, 'call'];
    $u->prepare_method = [IncidentIoPrepareMethod::class, 'call'];
    $u->prepare_params = [IncidentIoPrepareParams::class, 'call'];
    $u->prepare_path = [IncidentIoPreparePath::class, 'call'];
    $u->prepare_query = [IncidentIoPrepareQuery::class, 'call'];
    $u->result_basic = [IncidentIoResultBasic::class, 'call'];
    $u->result_body = [IncidentIoResultBody::class, 'call'];
    $u->result_headers = [IncidentIoResultHeaders::class, 'call'];
    $u->transform_request = [IncidentIoTransformRequest::class, 'call'];
    $u->transform_response = [IncidentIoTransformResponse::class, 'call'];
});

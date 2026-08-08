<?php
declare(strict_types=1);

// IncidentIo SDK utility: result_body

class IncidentIoResultBody
{
    public static function call(IncidentIoContext $ctx): ?IncidentIoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}

<?php
declare(strict_types=1);

// IncidentIo SDK utility: result_headers

class IncidentIoResultHeaders
{
    public static function call(IncidentIoContext $ctx): ?IncidentIoResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}

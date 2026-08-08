<?php
declare(strict_types=1);

// IncidentIo SDK utility: prepare_body

class IncidentIoPrepareBody
{
    public static function call(IncidentIoContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}

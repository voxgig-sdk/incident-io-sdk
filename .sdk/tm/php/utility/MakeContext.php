<?php
declare(strict_types=1);

// IncidentIo SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class IncidentIoMakeContext
{
    public static function call(array $ctxmap, ?IncidentIoContext $basectx): IncidentIoContext
    {
        return new IncidentIoContext($ctxmap, $basectx);
    }
}

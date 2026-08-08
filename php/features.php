<?php
declare(strict_types=1);

// IncidentIo SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class IncidentIoFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new IncidentIoBaseFeature();
            case "test":
                return new IncidentIoTestFeature();
            default:
                return new IncidentIoBaseFeature();
        }
    }
}

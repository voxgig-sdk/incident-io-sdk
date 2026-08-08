<?php
declare(strict_types=1);

// IncidentIo SDK base feature

class IncidentIoBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(IncidentIoContext $ctx, array $options): void {}
    public function PostConstruct(IncidentIoContext $ctx): void {}
    public function PostConstructEntity(IncidentIoContext $ctx): void {}
    public function SetData(IncidentIoContext $ctx): void {}
    public function GetData(IncidentIoContext $ctx): void {}
    public function GetMatch(IncidentIoContext $ctx): void {}
    public function SetMatch(IncidentIoContext $ctx): void {}
    public function PrePoint(IncidentIoContext $ctx): void {}
    public function PreSpec(IncidentIoContext $ctx): void {}
    public function PreRequest(IncidentIoContext $ctx): void {}
    public function PreResponse(IncidentIoContext $ctx): void {}
    public function PreResult(IncidentIoContext $ctx): void {}
    public function PreDone(IncidentIoContext $ctx): void {}
    public function PreUnexpected(IncidentIoContext $ctx): void {}
}

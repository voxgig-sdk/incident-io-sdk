<?php
declare(strict_types=1);

// IncidentIo SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class IncidentIoSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new IncidentIoUtility();
        $this->_utility = $utility;

        $config = IncidentIoConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = IncidentIoHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = IncidentIoHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, IncidentIoFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return IncidentIoUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = IncidentIoHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = IncidentIoHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = IncidentIoHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new IncidentIoSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    public function direct(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = IncidentIoHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = IncidentIoHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }


    private $_action = null;

    // Canonical facade: $client->Action()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->action()
    // resolves here too.
    public function Action($data = null)
    {
        require_once __DIR__ . '/entity/action_entity.php';
        if ($data === null) {
            if ($this->_action === null) {
                $this->_action = new ActionEntity($this, null);
            }
            return $this->_action;
        }
        return new ActionEntity($this, $data);
    }


    private $_alert = null;

    // Canonical facade: $client->Alert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert()
    // resolves here too.
    public function Alert($data = null)
    {
        require_once __DIR__ . '/entity/alert_entity.php';
        if ($data === null) {
            if ($this->_alert === null) {
                $this->_alert = new AlertEntity($this, null);
            }
            return $this->_alert;
        }
        return new AlertEntity($this, $data);
    }


    private $_alert_attribute = null;

    // Canonical facade: $client->AlertAttribute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert_attribute()
    // resolves here too.
    public function AlertAttribute($data = null)
    {
        require_once __DIR__ . '/entity/alert_attribute_entity.php';
        if ($data === null) {
            if ($this->_alert_attribute === null) {
                $this->_alert_attribute = new AlertAttributeEntity($this, null);
            }
            return $this->_alert_attribute;
        }
        return new AlertAttributeEntity($this, $data);
    }


    private $_alert_note = null;

    // Canonical facade: $client->AlertNote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert_note()
    // resolves here too.
    public function AlertNote($data = null)
    {
        require_once __DIR__ . '/entity/alert_note_entity.php';
        if ($data === null) {
            if ($this->_alert_note === null) {
                $this->_alert_note = new AlertNoteEntity($this, null);
            }
            return $this->_alert_note;
        }
        return new AlertNoteEntity($this, $data);
    }


    private $_alert_route = null;

    // Canonical facade: $client->AlertRoute()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert_route()
    // resolves here too.
    public function AlertRoute($data = null)
    {
        require_once __DIR__ . '/entity/alert_route_entity.php';
        if ($data === null) {
            if ($this->_alert_route === null) {
                $this->_alert_route = new AlertRouteEntity($this, null);
            }
            return $this->_alert_route;
        }
        return new AlertRouteEntity($this, $data);
    }


    private $_alert_source = null;

    // Canonical facade: $client->AlertSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->alert_source()
    // resolves here too.
    public function AlertSource($data = null)
    {
        require_once __DIR__ . '/entity/alert_source_entity.php';
        if ($data === null) {
            if ($this->_alert_source === null) {
                $this->_alert_source = new AlertSourceEntity($this, null);
            }
            return $this->_alert_source;
        }
        return new AlertSourceEntity($this, $data);
    }


    private $_api_key = null;

    // Canonical facade: $client->ApiKey()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->api_key()
    // resolves here too.
    public function ApiKey($data = null)
    {
        require_once __DIR__ . '/entity/api_key_entity.php';
        if ($data === null) {
            if ($this->_api_key === null) {
                $this->_api_key = new ApiKeyEntity($this, null);
            }
            return $this->_api_key;
        }
        return new ApiKeyEntity($this, $data);
    }


    private $_catalog_entry = null;

    // Canonical facade: $client->CatalogEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->catalog_entry()
    // resolves here too.
    public function CatalogEntry($data = null)
    {
        require_once __DIR__ . '/entity/catalog_entry_entity.php';
        if ($data === null) {
            if ($this->_catalog_entry === null) {
                $this->_catalog_entry = new CatalogEntryEntity($this, null);
            }
            return $this->_catalog_entry;
        }
        return new CatalogEntryEntity($this, $data);
    }


    private $_catalog_resource = null;

    // Canonical facade: $client->CatalogResource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->catalog_resource()
    // resolves here too.
    public function CatalogResource($data = null)
    {
        require_once __DIR__ . '/entity/catalog_resource_entity.php';
        if ($data === null) {
            if ($this->_catalog_resource === null) {
                $this->_catalog_resource = new CatalogResourceEntity($this, null);
            }
            return $this->_catalog_resource;
        }
        return new CatalogResourceEntity($this, $data);
    }


    private $_catalog_type = null;

    // Canonical facade: $client->CatalogType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->catalog_type()
    // resolves here too.
    public function CatalogType($data = null)
    {
        require_once __DIR__ . '/entity/catalog_type_entity.php';
        if ($data === null) {
            if ($this->_catalog_type === null) {
                $this->_catalog_type = new CatalogTypeEntity($this, null);
            }
            return $this->_catalog_type;
        }
        return new CatalogTypeEntity($this, $data);
    }


    private $_catalog_type_schema = null;

    // Canonical facade: $client->CatalogTypeSchema()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->catalog_type_schema()
    // resolves here too.
    public function CatalogTypeSchema($data = null)
    {
        require_once __DIR__ . '/entity/catalog_type_schema_entity.php';
        if ($data === null) {
            if ($this->_catalog_type_schema === null) {
                $this->_catalog_type_schema = new CatalogTypeSchemaEntity($this, null);
            }
            return $this->_catalog_type_schema;
        }
        return new CatalogTypeSchemaEntity($this, $data);
    }


    private $_custom_field = null;

    // Canonical facade: $client->CustomField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field()
    // resolves here too.
    public function CustomField($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_entity.php';
        if ($data === null) {
            if ($this->_custom_field === null) {
                $this->_custom_field = new CustomFieldEntity($this, null);
            }
            return $this->_custom_field;
        }
        return new CustomFieldEntity($this, $data);
    }


    private $_custom_field_option = null;

    // Canonical facade: $client->CustomFieldOption()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field_option()
    // resolves here too.
    public function CustomFieldOption($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_option_entity.php';
        if ($data === null) {
            if ($this->_custom_field_option === null) {
                $this->_custom_field_option = new CustomFieldOptionEntity($this, null);
            }
            return $this->_custom_field_option;
        }
        return new CustomFieldOptionEntity($this, $data);
    }


    private $_escalation = null;

    // Canonical facade: $client->Escalation()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->escalation()
    // resolves here too.
    public function Escalation($data = null)
    {
        require_once __DIR__ . '/entity/escalation_entity.php';
        if ($data === null) {
            if ($this->_escalation === null) {
                $this->_escalation = new EscalationEntity($this, null);
            }
            return $this->_escalation;
        }
        return new EscalationEntity($this, $data);
    }


    private $_follow_up = null;

    // Canonical facade: $client->FollowUp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->follow_up()
    // resolves here too.
    public function FollowUp($data = null)
    {
        require_once __DIR__ . '/entity/follow_up_entity.php';
        if ($data === null) {
            if ($this->_follow_up === null) {
                $this->_follow_up = new FollowUpEntity($this, null);
            }
            return $this->_follow_up;
        }
        return new FollowUpEntity($this, $data);
    }


    private $_incident = null;

    // Canonical facade: $client->Incident()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident()
    // resolves here too.
    public function Incident($data = null)
    {
        require_once __DIR__ . '/entity/incident_entity.php';
        if ($data === null) {
            if ($this->_incident === null) {
                $this->_incident = new IncidentEntity($this, null);
            }
            return $this->_incident;
        }
        return new IncidentEntity($this, $data);
    }


    private $_incident_alert = null;

    // Canonical facade: $client->IncidentAlert()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_alert()
    // resolves here too.
    public function IncidentAlert($data = null)
    {
        require_once __DIR__ . '/entity/incident_alert_entity.php';
        if ($data === null) {
            if ($this->_incident_alert === null) {
                $this->_incident_alert = new IncidentAlertEntity($this, null);
            }
            return $this->_incident_alert;
        }
        return new IncidentAlertEntity($this, $data);
    }


    private $_incident_attachment = null;

    // Canonical facade: $client->IncidentAttachment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_attachment()
    // resolves here too.
    public function IncidentAttachment($data = null)
    {
        require_once __DIR__ . '/entity/incident_attachment_entity.php';
        if ($data === null) {
            if ($this->_incident_attachment === null) {
                $this->_incident_attachment = new IncidentAttachmentEntity($this, null);
            }
            return $this->_incident_attachment;
        }
        return new IncidentAttachmentEntity($this, $data);
    }


    private $_incident_membership = null;

    // Canonical facade: $client->IncidentMembership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_membership()
    // resolves here too.
    public function IncidentMembership($data = null)
    {
        require_once __DIR__ . '/entity/incident_membership_entity.php';
        if ($data === null) {
            if ($this->_incident_membership === null) {
                $this->_incident_membership = new IncidentMembershipEntity($this, null);
            }
            return $this->_incident_membership;
        }
        return new IncidentMembershipEntity($this, $data);
    }


    private $_incident_participant = null;

    // Canonical facade: $client->IncidentParticipant()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_participant()
    // resolves here too.
    public function IncidentParticipant($data = null)
    {
        require_once __DIR__ . '/entity/incident_participant_entity.php';
        if ($data === null) {
            if ($this->_incident_participant === null) {
                $this->_incident_participant = new IncidentParticipantEntity($this, null);
            }
            return $this->_incident_participant;
        }
        return new IncidentParticipantEntity($this, $data);
    }


    private $_incident_participant_workload = null;

    // Canonical facade: $client->IncidentParticipantWorkload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_participant_workload()
    // resolves here too.
    public function IncidentParticipantWorkload($data = null)
    {
        require_once __DIR__ . '/entity/incident_participant_workload_entity.php';
        if ($data === null) {
            if ($this->_incident_participant_workload === null) {
                $this->_incident_participant_workload = new IncidentParticipantWorkloadEntity($this, null);
            }
            return $this->_incident_participant_workload;
        }
        return new IncidentParticipantWorkloadEntity($this, $data);
    }


    private $_incident_relationship = null;

    // Canonical facade: $client->IncidentRelationship()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_relationship()
    // resolves here too.
    public function IncidentRelationship($data = null)
    {
        require_once __DIR__ . '/entity/incident_relationship_entity.php';
        if ($data === null) {
            if ($this->_incident_relationship === null) {
                $this->_incident_relationship = new IncidentRelationshipEntity($this, null);
            }
            return $this->_incident_relationship;
        }
        return new IncidentRelationshipEntity($this, $data);
    }


    private $_incident_role = null;

    // Canonical facade: $client->IncidentRole()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_role()
    // resolves here too.
    public function IncidentRole($data = null)
    {
        require_once __DIR__ . '/entity/incident_role_entity.php';
        if ($data === null) {
            if ($this->_incident_role === null) {
                $this->_incident_role = new IncidentRoleEntity($this, null);
            }
            return $this->_incident_role;
        }
        return new IncidentRoleEntity($this, $data);
    }


    private $_incident_status = null;

    // Canonical facade: $client->IncidentStatus()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_status()
    // resolves here too.
    public function IncidentStatus($data = null)
    {
        require_once __DIR__ . '/entity/incident_status_entity.php';
        if ($data === null) {
            if ($this->_incident_status === null) {
                $this->_incident_status = new IncidentStatusEntity($this, null);
            }
            return $this->_incident_status;
        }
        return new IncidentStatusEntity($this, $data);
    }


    private $_incident_timestamp = null;

    // Canonical facade: $client->IncidentTimestamp()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_timestamp()
    // resolves here too.
    public function IncidentTimestamp($data = null)
    {
        require_once __DIR__ . '/entity/incident_timestamp_entity.php';
        if ($data === null) {
            if ($this->_incident_timestamp === null) {
                $this->_incident_timestamp = new IncidentTimestampEntity($this, null);
            }
            return $this->_incident_timestamp;
        }
        return new IncidentTimestampEntity($this, $data);
    }


    private $_incident_type = null;

    // Canonical facade: $client->IncidentType()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_type()
    // resolves here too.
    public function IncidentType($data = null)
    {
        require_once __DIR__ . '/entity/incident_type_entity.php';
        if ($data === null) {
            if ($this->_incident_type === null) {
                $this->_incident_type = new IncidentTypeEntity($this, null);
            }
            return $this->_incident_type;
        }
        return new IncidentTypeEntity($this, $data);
    }


    private $_incident_update = null;

    // Canonical facade: $client->IncidentUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->incident_update()
    // resolves here too.
    public function IncidentUpdate($data = null)
    {
        require_once __DIR__ . '/entity/incident_update_entity.php';
        if ($data === null) {
            if ($this->_incident_update === null) {
                $this->_incident_update = new IncidentUpdateEntity($this, null);
            }
            return $this->_incident_update;
        }
        return new IncidentUpdateEntity($this, $data);
    }


    private $_ip_allowlist = null;

    // Canonical facade: $client->IpAllowlist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->ip_allowlist()
    // resolves here too.
    public function IpAllowlist($data = null)
    {
        require_once __DIR__ . '/entity/ip_allowlist_entity.php';
        if ($data === null) {
            if ($this->_ip_allowlist === null) {
                $this->_ip_allowlist = new IpAllowlistEntity($this, null);
            }
            return $this->_ip_allowlist;
        }
        return new IpAllowlistEntity($this, $data);
    }


    private $_maintenance_window = null;

    // Canonical facade: $client->MaintenanceWindow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->maintenance_window()
    // resolves here too.
    public function MaintenanceWindow($data = null)
    {
        require_once __DIR__ . '/entity/maintenance_window_entity.php';
        if ($data === null) {
            if ($this->_maintenance_window === null) {
                $this->_maintenance_window = new MaintenanceWindowEntity($this, null);
            }
            return $this->_maintenance_window;
        }
        return new MaintenanceWindowEntity($this, $data);
    }


    private $_postmortem_document = null;

    // Canonical facade: $client->PostmortemDocument()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->postmortem_document()
    // resolves here too.
    public function PostmortemDocument($data = null)
    {
        require_once __DIR__ . '/entity/postmortem_document_entity.php';
        if ($data === null) {
            if ($this->_postmortem_document === null) {
                $this->_postmortem_document = new PostmortemDocumentEntity($this, null);
            }
            return $this->_postmortem_document;
        }
        return new PostmortemDocumentEntity($this, $data);
    }


    private $_schedule = null;

    // Canonical facade: $client->Schedule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule()
    // resolves here too.
    public function Schedule($data = null)
    {
        require_once __DIR__ . '/entity/schedule_entity.php';
        if ($data === null) {
            if ($this->_schedule === null) {
                $this->_schedule = new ScheduleEntity($this, null);
            }
            return $this->_schedule;
        }
        return new ScheduleEntity($this, $data);
    }


    private $_schedule_entry = null;

    // Canonical facade: $client->ScheduleEntry()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule_entry()
    // resolves here too.
    public function ScheduleEntry($data = null)
    {
        require_once __DIR__ . '/entity/schedule_entry_entity.php';
        if ($data === null) {
            if ($this->_schedule_entry === null) {
                $this->_schedule_entry = new ScheduleEntryEntity($this, null);
            }
            return $this->_schedule_entry;
        }
        return new ScheduleEntryEntity($this, $data);
    }


    private $_schedule_replica = null;

    // Canonical facade: $client->ScheduleReplica()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule_replica()
    // resolves here too.
    public function ScheduleReplica($data = null)
    {
        require_once __DIR__ . '/entity/schedule_replica_entity.php';
        if ($data === null) {
            if ($this->_schedule_replica === null) {
                $this->_schedule_replica = new ScheduleReplicaEntity($this, null);
            }
            return $this->_schedule_replica;
        }
        return new ScheduleReplicaEntity($this, $data);
    }


    private $_schedule_sync_rule = null;

    // Canonical facade: $client->ScheduleSyncRule()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule_sync_rule()
    // resolves here too.
    public function ScheduleSyncRule($data = null)
    {
        require_once __DIR__ . '/entity/schedule_sync_rule_entity.php';
        if ($data === null) {
            if ($this->_schedule_sync_rule === null) {
                $this->_schedule_sync_rule = new ScheduleSyncRuleEntity($this, null);
            }
            return $this->_schedule_sync_rule;
        }
        return new ScheduleSyncRuleEntity($this, $data);
    }


    private $_schedule_sync_target = null;

    // Canonical facade: $client->ScheduleSyncTarget()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->schedule_sync_target()
    // resolves here too.
    public function ScheduleSyncTarget($data = null)
    {
        require_once __DIR__ . '/entity/schedule_sync_target_entity.php';
        if ($data === null) {
            if ($this->_schedule_sync_target === null) {
                $this->_schedule_sync_target = new ScheduleSyncTargetEntity($this, null);
            }
            return $this->_schedule_sync_target;
        }
        return new ScheduleSyncTargetEntity($this, $data);
    }


    private $_secret = null;

    // Canonical facade: $client->Secret()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->secret()
    // resolves here too.
    public function Secret($data = null)
    {
        require_once __DIR__ . '/entity/secret_entity.php';
        if ($data === null) {
            if ($this->_secret === null) {
                $this->_secret = new SecretEntity($this, null);
            }
            return $this->_secret;
        }
        return new SecretEntity($this, $data);
    }


    private $_severity = null;

    // Canonical facade: $client->Severity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->severity()
    // resolves here too.
    public function Severity($data = null)
    {
        require_once __DIR__ . '/entity/severity_entity.php';
        if ($data === null) {
            if ($this->_severity === null) {
                $this->_severity = new SeverityEntity($this, null);
            }
            return $this->_severity;
        }
        return new SeverityEntity($this, $data);
    }


    private $_status_page = null;

    // Canonical facade: $client->StatusPage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page()
    // resolves here too.
    public function StatusPage($data = null)
    {
        require_once __DIR__ . '/entity/status_page_entity.php';
        if ($data === null) {
            if ($this->_status_page === null) {
                $this->_status_page = new StatusPageEntity($this, null);
            }
            return $this->_status_page;
        }
        return new StatusPageEntity($this, $data);
    }


    private $_status_page_incident = null;

    // Canonical facade: $client->StatusPageIncident()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page_incident()
    // resolves here too.
    public function StatusPageIncident($data = null)
    {
        require_once __DIR__ . '/entity/status_page_incident_entity.php';
        if ($data === null) {
            if ($this->_status_page_incident === null) {
                $this->_status_page_incident = new StatusPageIncidentEntity($this, null);
            }
            return $this->_status_page_incident;
        }
        return new StatusPageIncidentEntity($this, $data);
    }


    private $_status_page_incident_update = null;

    // Canonical facade: $client->StatusPageIncidentUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page_incident_update()
    // resolves here too.
    public function StatusPageIncidentUpdate($data = null)
    {
        require_once __DIR__ . '/entity/status_page_incident_update_entity.php';
        if ($data === null) {
            if ($this->_status_page_incident_update === null) {
                $this->_status_page_incident_update = new StatusPageIncidentUpdateEntity($this, null);
            }
            return $this->_status_page_incident_update;
        }
        return new StatusPageIncidentUpdateEntity($this, $data);
    }


    private $_status_page_maintenance = null;

    // Canonical facade: $client->StatusPageMaintenance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page_maintenance()
    // resolves here too.
    public function StatusPageMaintenance($data = null)
    {
        require_once __DIR__ . '/entity/status_page_maintenance_entity.php';
        if ($data === null) {
            if ($this->_status_page_maintenance === null) {
                $this->_status_page_maintenance = new StatusPageMaintenanceEntity($this, null);
            }
            return $this->_status_page_maintenance;
        }
        return new StatusPageMaintenanceEntity($this, $data);
    }


    private $_status_page_maintenance_update = null;

    // Canonical facade: $client->StatusPageMaintenanceUpdate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page_maintenance_update()
    // resolves here too.
    public function StatusPageMaintenanceUpdate($data = null)
    {
        require_once __DIR__ . '/entity/status_page_maintenance_update_entity.php';
        if ($data === null) {
            if ($this->_status_page_maintenance_update === null) {
                $this->_status_page_maintenance_update = new StatusPageMaintenanceUpdateEntity($this, null);
            }
            return $this->_status_page_maintenance_update;
        }
        return new StatusPageMaintenanceUpdateEntity($this, $data);
    }


    private $_status_page_structure = null;

    // Canonical facade: $client->StatusPageStructure()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->status_page_structure()
    // resolves here too.
    public function StatusPageStructure($data = null)
    {
        require_once __DIR__ . '/entity/status_page_structure_entity.php';
        if ($data === null) {
            if ($this->_status_page_structure === null) {
                $this->_status_page_structure = new StatusPageStructureEntity($this, null);
            }
            return $this->_status_page_structure;
        }
        return new StatusPageStructureEntity($this, $data);
    }


    private $_team = null;

    // Canonical facade: $client->Team()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->team()
    // resolves here too.
    public function Team($data = null)
    {
        require_once __DIR__ . '/entity/team_entity.php';
        if ($data === null) {
            if ($this->_team === null) {
                $this->_team = new TeamEntity($this, null);
            }
            return $this->_team;
        }
        return new TeamEntity($this, $data);
    }


    private $_telemetry_data_source = null;

    // Canonical facade: $client->TelemetryDataSource()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->telemetry_data_source()
    // resolves here too.
    public function TelemetryDataSource($data = null)
    {
        require_once __DIR__ . '/entity/telemetry_data_source_entity.php';
        if ($data === null) {
            if ($this->_telemetry_data_source === null) {
                $this->_telemetry_data_source = new TelemetryDataSourceEntity($this, null);
            }
            return $this->_telemetry_data_source;
        }
        return new TelemetryDataSourceEntity($this, $data);
    }


    private $_user = null;

    // Canonical facade: $client->User()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->user()
    // resolves here too.
    public function User($data = null)
    {
        require_once __DIR__ . '/entity/user_entity.php';
        if ($data === null) {
            if ($this->_user === null) {
                $this->_user = new UserEntity($this, null);
            }
            return $this->_user;
        }
        return new UserEntity($this, $data);
    }


    private $_workflow = null;

    // Canonical facade: $client->Workflow()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow()
    // resolves here too.
    public function Workflow($data = null)
    {
        require_once __DIR__ . '/entity/workflow_entity.php';
        if ($data === null) {
            if ($this->_workflow === null) {
                $this->_workflow = new WorkflowEntity($this, null);
            }
            return $this->_workflow;
        }
        return new WorkflowEntity($this, $data);
    }


    private $_workflow_run = null;

    // Canonical facade: $client->WorkflowRun()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->workflow_run()
    // resolves here too.
    public function WorkflowRun($data = null)
    {
        require_once __DIR__ . '/entity/workflow_run_entity.php';
        if ($data === null) {
            if ($this->_workflow_run === null) {
                $this->_workflow_run = new WorkflowRunEntity($this, null);
            }
            return $this->_workflow_run;
        }
        return new WorkflowRunEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new IncidentIoSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}

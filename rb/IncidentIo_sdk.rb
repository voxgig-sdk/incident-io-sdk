# IncidentIo SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'IncidentIo_types'


class IncidentIoSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = IncidentIoUtility.new
    @_utility = utility

    config = IncidentIoConfig.shared_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = IncidentIoHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = IncidentIoHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, IncidentIoFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    IncidentIoUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  # The options and the root context both hold the credential, so the
  # client's printed form is its name alone; `options_map` is the
  # documented way to read them back.
  def to_s
    "IncidentIo " + VoxgigStruct.jsonify({ "name" => "IncidentIo" })
  end

  def inspect
    to_s
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = IncidentIoHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String) && "" != method_val
    method_val = method_val.upcase
    allow_method = VoxgigStruct.getpath(opts, "allow.method")
    unless IncidentIoUtilities.allowed(allow_method, method_val)
      raise ctx.make_error("spec_method_allow",
        "Method \"#{method_val}\" not allowed by SDK option allow.method value: \"#{allow_method}\"")
    end
    params = IncidentIoHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = IncidentIoHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = IncidentIoSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  # Raw endpoint access is operator-controllable, like every entity op.
  # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  # either one reaches the same endpoint.
  def direct(fetchargs = {})
    return op_denied("direct") unless op_allowed?("direct")

    raw_request(fetchargs)
  end

  # Is this raw-access op permitted by the SDK's allow.op option?
  def op_allowed?(op)
    IncidentIoUtilities.allowed(VoxgigStruct.getpath(@options, "allow.op"), op)
  end

  def op_denied(op)
    allow_op = VoxgigStruct.getpath(@options, "allow.op")
    {
      "ok" => false,
      "err" => IncidentIoError.new(
        "#{op}_allow",
        "IncidentIoSDK: #{op}: operation not allowed by" \
        " SDK option allow.op value: \"#{allow_op}\""),
    }
  end

  # Ungated request path shared by direct and graphql, each of which checks
  # its own allow.op token first. Separate, rather than a flag on fetchargs:
  # a caller-supplied marker would let anyone opt straight back out of the
  # gate by passing it.
  def raw_request(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue IncidentIoError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = IncidentIoHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => utility.clean.call(ctx, fetch_err) } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = IncidentIoHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      body_err = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
        if true == VoxgigStruct.getprop(fetched, "unreadable")
          failed = status >= 200 && status < 300 ? nil : ctx.make_error("request_status",
            "request: #{status}: #{VoxgigStruct.getprop(fetched, 'statusText')}")
          body_err = IncidentIoUtilities::UnreadableBody.call(ctx, status, headers,
            VoxgigStruct.getprop(fetched, "body"), fetchdef["headers"], failed)
        end
      end

      out = {
        "ok" => body_err.nil? && status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
      out["err"] = utility.clean.call(ctx, body_err) unless body_err.nil?
      return out
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end

  # Raw GraphQL access: the pressure valve that makes the generated surface's
  # deliberate omissions (per-call selection sets, typed filter builders,
  # batching, subscriptions) livable — the whole schema stays reachable.
  #
  # Thin wrapper over the same prepare/fetch path direct uses, with the one
  # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
  # as a top-level `errors` array, so status alone would report a failed
  # query as ok.
  #
  # NOTE: like direct, this bypasses the feature pipeline — no retry,
  # ratelimit or paging features apply.
  def graphql(query, variables = nil, ctrl = nil)
    return op_denied("graphql") unless op_allowed?("graphql")

    res = raw_request({
      "method" => "POST",
      "headers" => { "content-type" => "application/json" },
      "body" => { "query" => query, "variables" => variables || {} },
      "ctrl" => ctrl || {},
    })

    # Errors are read BEFORE any status check: a GraphQL parse or validation
    # failure comes back as HTTP 400 carrying the standard { errors: [...] }
    # body, and the raw path represents a non-2xx as ok:false with no err —
    # so returning early on status would discard the server's own
    # diagnostics, which are the only useful part of that response.
    errors = VoxgigStruct.getpath(res, "data.errors")

    if errors.is_a?(Array) && !errors.empty?
      first = errors[0].is_a?(Hash) ? errors[0] : {}
      msg = first["message"]
      msg = "graphql error" if msg.nil? || msg.to_s.empty?
      res["ok"] = false
      res["err"] = IncidentIoError.new(
        "graphql_error", "IncidentIoSDK: graphql: #{msg}")
      res["graphql"] = errors
    end

    res
  end


  # Canonical facade: client.Action.list / client.Action.load({ "id" => ... })
  def Action(data = nil)
    require_relative 'entity/action_entity'
    ActionEntity.new(self, data)
  end


  # Canonical facade: client.Alert.list / client.Alert.load({ "id" => ... })
  def Alert(data = nil)
    require_relative 'entity/alert_entity'
    AlertEntity.new(self, data)
  end


  # Canonical facade: client.AlertAttribute.list / client.AlertAttribute.load({ "id" => ... })
  def AlertAttribute(data = nil)
    require_relative 'entity/alert_attribute_entity'
    AlertAttributeEntity.new(self, data)
  end


  # Canonical facade: client.AlertEventsV2.list / client.AlertEventsV2.load({ "id" => ... })
  def AlertEventsV2(data = nil)
    require_relative 'entity/alert_events_v2_entity'
    AlertEventsV2Entity.new(self, data)
  end


  # Canonical facade: client.AlertNote.list / client.AlertNote.load({ "id" => ... })
  def AlertNote(data = nil)
    require_relative 'entity/alert_note_entity'
    AlertNoteEntity.new(self, data)
  end


  # Canonical facade: client.AlertRoute.list / client.AlertRoute.load({ "id" => ... })
  def AlertRoute(data = nil)
    require_relative 'entity/alert_route_entity'
    AlertRouteEntity.new(self, data)
  end


  # Canonical facade: client.AlertSource.list / client.AlertSource.load({ "id" => ... })
  def AlertSource(data = nil)
    require_relative 'entity/alert_source_entity'
    AlertSourceEntity.new(self, data)
  end


  # Canonical facade: client.AlertSourcesV2.list / client.AlertSourcesV2.load({ "id" => ... })
  def AlertSourcesV2(data = nil)
    require_relative 'entity/alert_sources_v2_entity'
    AlertSourcesV2Entity.new(self, data)
  end


  # Canonical facade: client.AlertTag.list / client.AlertTag.load({ "id" => ... })
  def AlertTag(data = nil)
    require_relative 'entity/alert_tag_entity'
    AlertTagEntity.new(self, data)
  end


  # Canonical facade: client.AlertsAddTagsResultV2.list / client.AlertsAddTagsResultV2.load({ "id" => ... })
  def AlertsAddTagsResultV2(data = nil)
    require_relative 'entity/alerts_add_tags_result_v2_entity'
    AlertsAddTagsResultV2Entity.new(self, data)
  end


  # Canonical facade: client.AlertsSetTagsResultV2.list / client.AlertsSetTagsResultV2.load({ "id" => ... })
  def AlertsSetTagsResultV2(data = nil)
    require_relative 'entity/alerts_set_tags_result_v2_entity'
    AlertsSetTagsResultV2Entity.new(self, data)
  end


  # Canonical facade: client.AlertsTransitionIncidentAlertResultV2.list / client.AlertsTransitionIncidentAlertResultV2.load({ "id" => ... })
  def AlertsTransitionIncidentAlertResultV2(data = nil)
    require_relative 'entity/alerts_transition_incident_alert_result_v2_entity'
    AlertsTransitionIncidentAlertResultV2Entity.new(self, data)
  end


  # Canonical facade: client.AnnouncementRule.list / client.AnnouncementRule.load({ "id" => ... })
  def AnnouncementRule(data = nil)
    require_relative 'entity/announcement_rule_entity'
    AnnouncementRuleEntity.new(self, data)
  end


  # Canonical facade: client.AnnouncementTemplate.list / client.AnnouncementTemplate.load({ "id" => ... })
  def AnnouncementTemplate(data = nil)
    require_relative 'entity/announcement_template_entity'
    AnnouncementTemplateEntity.new(self, data)
  end


  # Canonical facade: client.ApiKey.list / client.ApiKey.load({ "id" => ... })
  def ApiKey(data = nil)
    require_relative 'entity/api_key_entity'
    ApiKeyEntity.new(self, data)
  end


  # Canonical facade: client.CallRoute.list / client.CallRoute.load({ "id" => ... })
  def CallRoute(data = nil)
    require_relative 'entity/call_route_entity'
    CallRouteEntity.new(self, data)
  end


  # Canonical facade: client.CallRouteAllowedCaller.list / client.CallRouteAllowedCaller.load({ "id" => ... })
  def CallRouteAllowedCaller(data = nil)
    require_relative 'entity/call_route_allowed_caller_entity'
    CallRouteAllowedCallerEntity.new(self, data)
  end


  # Canonical facade: client.CallRouteOption.list / client.CallRouteOption.load({ "id" => ... })
  def CallRouteOption(data = nil)
    require_relative 'entity/call_route_option_entity'
    CallRouteOptionEntity.new(self, data)
  end


  # Canonical facade: client.CallSession.list / client.CallSession.load({ "id" => ... })
  def CallSession(data = nil)
    require_relative 'entity/call_session_entity'
    CallSessionEntity.new(self, data)
  end


  # Canonical facade: client.CallTranscriptEntry.list / client.CallTranscriptEntry.load({ "id" => ... })
  def CallTranscriptEntry(data = nil)
    require_relative 'entity/call_transcript_entry_entity'
    CallTranscriptEntryEntity.new(self, data)
  end


  # Canonical facade: client.CatalogEntry.list / client.CatalogEntry.load({ "id" => ... })
  def CatalogEntry(data = nil)
    require_relative 'entity/catalog_entry_entity'
    CatalogEntryEntity.new(self, data)
  end


  # Canonical facade: client.CatalogResource.list / client.CatalogResource.load({ "id" => ... })
  def CatalogResource(data = nil)
    require_relative 'entity/catalog_resource_entity'
    CatalogResourceEntity.new(self, data)
  end


  # Canonical facade: client.CatalogType.list / client.CatalogType.load({ "id" => ... })
  def CatalogType(data = nil)
    require_relative 'entity/catalog_type_entity'
    CatalogTypeEntity.new(self, data)
  end


  # Canonical facade: client.CatalogTypeSchema.list / client.CatalogTypeSchema.load({ "id" => ... })
  def CatalogTypeSchema(data = nil)
    require_relative 'entity/catalog_type_schema_entity'
    CatalogTypeSchemaEntity.new(self, data)
  end


  # Canonical facade: client.CatalogV3.list / client.CatalogV3.load({ "id" => ... })
  def CatalogV3(data = nil)
    require_relative 'entity/catalog_v3_entity'
    CatalogV3Entity.new(self, data)
  end


  # Canonical facade: client.CustomField.list / client.CustomField.load({ "id" => ... })
  def CustomField(data = nil)
    require_relative 'entity/custom_field_entity'
    CustomFieldEntity.new(self, data)
  end


  # Canonical facade: client.CustomFieldOption.list / client.CustomFieldOption.load({ "id" => ... })
  def CustomFieldOption(data = nil)
    require_relative 'entity/custom_field_option_entity'
    CustomFieldOptionEntity.new(self, data)
  end


  # Canonical facade: client.Escalation.list / client.Escalation.load({ "id" => ... })
  def Escalation(data = nil)
    require_relative 'entity/escalation_entity'
    EscalationEntity.new(self, data)
  end


  # Canonical facade: client.EscalationPath.list / client.EscalationPath.load({ "id" => ... })
  def EscalationPath(data = nil)
    require_relative 'entity/escalation_path_entity'
    EscalationPathEntity.new(self, data)
  end


  # Canonical facade: client.EscalationPathTemplate.list / client.EscalationPathTemplate.load({ "id" => ... })
  def EscalationPathTemplate(data = nil)
    require_relative 'entity/escalation_path_template_entity'
    EscalationPathTemplateEntity.new(self, data)
  end


  # Canonical facade: client.EscalationsCheckEscalationPermissionsResultV2.list / client.EscalationsCheckEscalationPermissionsResultV2.load({ "id" => ... })
  def EscalationsCheckEscalationPermissionsResultV2(data = nil)
    require_relative 'entity/escalations_check_escalation_permissions_result_v2_entity'
    EscalationsCheckEscalationPermissionsResultV2Entity.new(self, data)
  end


  # Canonical facade: client.EscalationsReassignEscalationResultV2.list / client.EscalationsReassignEscalationResultV2.load({ "id" => ... })
  def EscalationsReassignEscalationResultV2(data = nil)
    require_relative 'entity/escalations_reassign_escalation_result_v2_entity'
    EscalationsReassignEscalationResultV2Entity.new(self, data)
  end


  # Canonical facade: client.FollowUp.list / client.FollowUp.load({ "id" => ... })
  def FollowUp(data = nil)
    require_relative 'entity/follow_up_entity'
    FollowUpEntity.new(self, data)
  end


  # Canonical facade: client.FollowUpsConnectExternalIssueResultV2.list / client.FollowUpsConnectExternalIssueResultV2.load({ "id" => ... })
  def FollowUpsConnectExternalIssueResultV2(data = nil)
    require_relative 'entity/follow_ups_connect_external_issue_result_v2_entity'
    FollowUpsConnectExternalIssueResultV2Entity.new(self, data)
  end


  # Canonical facade: client.FollowUpsConnectExternalIssueResultV3.list / client.FollowUpsConnectExternalIssueResultV3.load({ "id" => ... })
  def FollowUpsConnectExternalIssueResultV3(data = nil)
    require_relative 'entity/follow_ups_connect_external_issue_result_v3_entity'
    FollowUpsConnectExternalIssueResultV3Entity.new(self, data)
  end


  # Canonical facade: client.FollowUpsCreateFromLinkResultV3.list / client.FollowUpsCreateFromLinkResultV3.load({ "id" => ... })
  def FollowUpsCreateFromLinkResultV3(data = nil)
    require_relative 'entity/follow_ups_create_from_link_result_v3_entity'
    FollowUpsCreateFromLinkResultV3Entity.new(self, data)
  end


  # Canonical facade: client.HeartbeatV2.list / client.HeartbeatV2.load({ "id" => ... })
  def HeartbeatV2(data = nil)
    require_relative 'entity/heartbeat_v2_entity'
    HeartbeatV2Entity.new(self, data)
  end


  # Canonical facade: client.Identity.list / client.Identity.load({ "id" => ... })
  def Identity(data = nil)
    require_relative 'entity/identity_entity'
    IdentityEntity.new(self, data)
  end


  # Canonical facade: client.Incident.list / client.Incident.load({ "id" => ... })
  def Incident(data = nil)
    require_relative 'entity/incident_entity'
    IncidentEntity.new(self, data)
  end


  # Canonical facade: client.IncidentActivityLogEntry.list / client.IncidentActivityLogEntry.load({ "id" => ... })
  def IncidentActivityLogEntry(data = nil)
    require_relative 'entity/incident_activity_log_entry_entity'
    IncidentActivityLogEntryEntity.new(self, data)
  end


  # Canonical facade: client.IncidentAttachment.list / client.IncidentAttachment.load({ "id" => ... })
  def IncidentAttachment(data = nil)
    require_relative 'entity/incident_attachment_entity'
    IncidentAttachmentEntity.new(self, data)
  end


  # Canonical facade: client.IncidentForm.list / client.IncidentForm.load({ "id" => ... })
  def IncidentForm(data = nil)
    require_relative 'entity/incident_form_entity'
    IncidentFormEntity.new(self, data)
  end


  # Canonical facade: client.IncidentMembership.list / client.IncidentMembership.load({ "id" => ... })
  def IncidentMembership(data = nil)
    require_relative 'entity/incident_membership_entity'
    IncidentMembershipEntity.new(self, data)
  end


  # Canonical facade: client.IncidentMembershipsV1.list / client.IncidentMembershipsV1.load({ "id" => ... })
  def IncidentMembershipsV1(data = nil)
    require_relative 'entity/incident_memberships_v1_entity'
    IncidentMembershipsV1Entity.new(self, data)
  end


  # Canonical facade: client.IncidentParticipant.list / client.IncidentParticipant.load({ "id" => ... })
  def IncidentParticipant(data = nil)
    require_relative 'entity/incident_participant_entity'
    IncidentParticipantEntity.new(self, data)
  end


  # Canonical facade: client.IncidentParticipantWorkload.list / client.IncidentParticipantWorkload.load({ "id" => ... })
  def IncidentParticipantWorkload(data = nil)
    require_relative 'entity/incident_participant_workload_entity'
    IncidentParticipantWorkloadEntity.new(self, data)
  end


  # Canonical facade: client.IncidentRelationship.list / client.IncidentRelationship.load({ "id" => ... })
  def IncidentRelationship(data = nil)
    require_relative 'entity/incident_relationship_entity'
    IncidentRelationshipEntity.new(self, data)
  end


  # Canonical facade: client.IncidentRole.list / client.IncidentRole.load({ "id" => ... })
  def IncidentRole(data = nil)
    require_relative 'entity/incident_role_entity'
    IncidentRoleEntity.new(self, data)
  end


  # Canonical facade: client.IncidentStatus.list / client.IncidentStatus.load({ "id" => ... })
  def IncidentStatus(data = nil)
    require_relative 'entity/incident_status_entity'
    IncidentStatusEntity.new(self, data)
  end


  # Canonical facade: client.IncidentTeamMembership.list / client.IncidentTeamMembership.load({ "id" => ... })
  def IncidentTeamMembership(data = nil)
    require_relative 'entity/incident_team_membership_entity'
    IncidentTeamMembershipEntity.new(self, data)
  end


  # Canonical facade: client.IncidentTeamMembershipsV1.list / client.IncidentTeamMembershipsV1.load({ "id" => ... })
  def IncidentTeamMembershipsV1(data = nil)
    require_relative 'entity/incident_team_memberships_v1_entity'
    IncidentTeamMembershipsV1Entity.new(self, data)
  end


  # Canonical facade: client.IncidentTemplate.list / client.IncidentTemplate.load({ "id" => ... })
  def IncidentTemplate(data = nil)
    require_relative 'entity/incident_template_entity'
    IncidentTemplateEntity.new(self, data)
  end


  # Canonical facade: client.IncidentTemplatesValidateResultV1.list / client.IncidentTemplatesValidateResultV1.load({ "id" => ... })
  def IncidentTemplatesValidateResultV1(data = nil)
    require_relative 'entity/incident_templates_validate_result_v1_entity'
    IncidentTemplatesValidateResultV1Entity.new(self, data)
  end


  # Canonical facade: client.IncidentTimelineItem.list / client.IncidentTimelineItem.load({ "id" => ... })
  def IncidentTimelineItem(data = nil)
    require_relative 'entity/incident_timeline_item_entity'
    IncidentTimelineItemEntity.new(self, data)
  end


  # Canonical facade: client.IncidentTimestamp.list / client.IncidentTimestamp.load({ "id" => ... })
  def IncidentTimestamp(data = nil)
    require_relative 'entity/incident_timestamp_entity'
    IncidentTimestampEntity.new(self, data)
  end


  # Canonical facade: client.IncidentType.list / client.IncidentType.load({ "id" => ... })
  def IncidentType(data = nil)
    require_relative 'entity/incident_type_entity'
    IncidentTypeEntity.new(self, data)
  end


  # Canonical facade: client.IncidentUpdate.list / client.IncidentUpdate.load({ "id" => ... })
  def IncidentUpdate(data = nil)
    require_relative 'entity/incident_update_entity'
    IncidentUpdateEntity.new(self, data)
  end


  # Canonical facade: client.IncidentsImportPostmortemDocumentResultV2.list / client.IncidentsImportPostmortemDocumentResultV2.load({ "id" => ... })
  def IncidentsImportPostmortemDocumentResultV2(data = nil)
    require_relative 'entity/incidents_import_postmortem_document_result_v2_entity'
    IncidentsImportPostmortemDocumentResultV2Entity.new(self, data)
  end


  # Canonical facade: client.IpAllowlist.list / client.IpAllowlist.load({ "id" => ... })
  def IpAllowlist(data = nil)
    require_relative 'entity/ip_allowlist_entity'
    IpAllowlistEntity.new(self, data)
  end


  # Canonical facade: client.IpRange.list / client.IpRange.load({ "id" => ... })
  def IpRange(data = nil)
    require_relative 'entity/ip_range_entity'
    IpRangeEntity.new(self, data)
  end


  # Canonical facade: client.MaintenanceWindow.list / client.MaintenanceWindow.load({ "id" => ... })
  def MaintenanceWindow(data = nil)
    require_relative 'entity/maintenance_window_entity'
    MaintenanceWindowEntity.new(self, data)
  end


  # Canonical facade: client.ManagedResource.list / client.ManagedResource.load({ "id" => ... })
  def ManagedResource(data = nil)
    require_relative 'entity/managed_resource_entity'
    ManagedResourceEntity.new(self, data)
  end


  # Canonical facade: client.OnCallNotificationMethodPublicV2.list / client.OnCallNotificationMethodPublicV2.load({ "id" => ... })
  def OnCallNotificationMethodPublicV2(data = nil)
    require_relative 'entity/on_call_notification_method_public_v2_entity'
    OnCallNotificationMethodPublicV2Entity.new(self, data)
  end


  # Canonical facade: client.OnCallNotificationPause.list / client.OnCallNotificationPause.load({ "id" => ... })
  def OnCallNotificationPause(data = nil)
    require_relative 'entity/on_call_notification_pause_entity'
    OnCallNotificationPauseEntity.new(self, data)
  end


  # Canonical facade: client.OnCallNotificationRulePublicV2.list / client.OnCallNotificationRulePublicV2.load({ "id" => ... })
  def OnCallNotificationRulePublicV2(data = nil)
    require_relative 'entity/on_call_notification_rule_public_v2_entity'
    OnCallNotificationRulePublicV2Entity.new(self, data)
  end


  # Canonical facade: client.PayConfig.list / client.PayConfig.load({ "id" => ... })
  def PayConfig(data = nil)
    require_relative 'entity/pay_config_entity'
    PayConfigEntity.new(self, data)
  end


  # Canonical facade: client.PayConfigOneOffRule.list / client.PayConfigOneOffRule.load({ "id" => ... })
  def PayConfigOneOffRule(data = nil)
    require_relative 'entity/pay_config_one_off_rule_entity'
    PayConfigOneOffRuleEntity.new(self, data)
  end


  # Canonical facade: client.PayConfigWeeklyRule.list / client.PayConfigWeeklyRule.load({ "id" => ... })
  def PayConfigWeeklyRule(data = nil)
    require_relative 'entity/pay_config_weekly_rule_entity'
    PayConfigWeeklyRuleEntity.new(self, data)
  end


  # Canonical facade: client.PayReport.list / client.PayReport.load({ "id" => ... })
  def PayReport(data = nil)
    require_relative 'entity/pay_report_entity'
    PayReportEntity.new(self, data)
  end


  # Canonical facade: client.PayReportsPublishResultV2.list / client.PayReportsPublishResultV2.load({ "id" => ... })
  def PayReportsPublishResultV2(data = nil)
    require_relative 'entity/pay_reports_publish_result_v2_entity'
    PayReportsPublishResultV2Entity.new(self, data)
  end


  # Canonical facade: client.PayReportsUnpublishResultV2.list / client.PayReportsUnpublishResultV2.load({ "id" => ... })
  def PayReportsUnpublishResultV2(data = nil)
    require_relative 'entity/pay_reports_unpublish_result_v2_entity'
    PayReportsUnpublishResultV2Entity.new(self, data)
  end


  # Canonical facade: client.PayReportsV2.list / client.PayReportsV2.load({ "id" => ... })
  def PayReportsV2(data = nil)
    require_relative 'entity/pay_reports_v2_entity'
    PayReportsV2Entity.new(self, data)
  end


  # Canonical facade: client.Policy.list / client.Policy.load({ "id" => ... })
  def Policy(data = nil)
    require_relative 'entity/policy_entity'
    PolicyEntity.new(self, data)
  end


  # Canonical facade: client.PolicyFinding.list / client.PolicyFinding.load({ "id" => ... })
  def PolicyFinding(data = nil)
    require_relative 'entity/policy_finding_entity'
    PolicyFindingEntity.new(self, data)
  end


  # Canonical facade: client.PolicyFindingsDismissResultV2.list / client.PolicyFindingsDismissResultV2.load({ "id" => ... })
  def PolicyFindingsDismissResultV2(data = nil)
    require_relative 'entity/policy_findings_dismiss_result_v2_entity'
    PolicyFindingsDismissResultV2Entity.new(self, data)
  end


  # Canonical facade: client.PolicyFindingsRestoreResultV2.list / client.PolicyFindingsRestoreResultV2.load({ "id" => ... })
  def PolicyFindingsRestoreResultV2(data = nil)
    require_relative 'entity/policy_findings_restore_result_v2_entity'
    PolicyFindingsRestoreResultV2Entity.new(self, data)
  end


  # Canonical facade: client.PostmortemDocument.list / client.PostmortemDocument.load({ "id" => ... })
  def PostmortemDocument(data = nil)
    require_relative 'entity/postmortem_document_entity'
    PostmortemDocumentEntity.new(self, data)
  end


  # Canonical facade: client.PostmortemDocumentsAttachResultV1.list / client.PostmortemDocumentsAttachResultV1.load({ "id" => ... })
  def PostmortemDocumentsAttachResultV1(data = nil)
    require_relative 'entity/postmortem_documents_attach_result_v1_entity'
    PostmortemDocumentsAttachResultV1Entity.new(self, data)
  end


  # Canonical facade: client.PostmortemDocumentsShowContentResultV1.list / client.PostmortemDocumentsShowContentResultV1.load({ "id" => ... })
  def PostmortemDocumentsShowContentResultV1(data = nil)
    require_relative 'entity/postmortem_documents_show_content_result_v1_entity'
    PostmortemDocumentsShowContentResultV1Entity.new(self, data)
  end


  # Canonical facade: client.Schedule.list / client.Schedule.load({ "id" => ... })
  def Schedule(data = nil)
    require_relative 'entity/schedule_entity'
    ScheduleEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleEntriesListPayloadV2.list / client.ScheduleEntriesListPayloadV2.load({ "id" => ... })
  def ScheduleEntriesListPayloadV2(data = nil)
    require_relative 'entity/schedule_entries_list_payload_v2_entity'
    ScheduleEntriesListPayloadV2Entity.new(self, data)
  end


  # Canonical facade: client.ScheduleEntry.list / client.ScheduleEntry.load({ "id" => ... })
  def ScheduleEntry(data = nil)
    require_relative 'entity/schedule_entry_entity'
    ScheduleEntryEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleOverride.list / client.ScheduleOverride.load({ "id" => ... })
  def ScheduleOverride(data = nil)
    require_relative 'entity/schedule_override_entity'
    ScheduleOverrideEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleReplica.list / client.ScheduleReplica.load({ "id" => ... })
  def ScheduleReplica(data = nil)
    require_relative 'entity/schedule_replica_entity'
    ScheduleReplicaEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleSyncRule.list / client.ScheduleSyncRule.load({ "id" => ... })
  def ScheduleSyncRule(data = nil)
    require_relative 'entity/schedule_sync_rule_entity'
    ScheduleSyncRuleEntity.new(self, data)
  end


  # Canonical facade: client.ScheduleSyncTarget.list / client.ScheduleSyncTarget.load({ "id" => ... })
  def ScheduleSyncTarget(data = nil)
    require_relative 'entity/schedule_sync_target_entity'
    ScheduleSyncTargetEntity.new(self, data)
  end


  # Canonical facade: client.Secret.list / client.Secret.load({ "id" => ... })
  def Secret(data = nil)
    require_relative 'entity/secret_entity'
    SecretEntity.new(self, data)
  end


  # Canonical facade: client.Severity.list / client.Severity.load({ "id" => ... })
  def Severity(data = nil)
    require_relative 'entity/severity_entity'
    SeverityEntity.new(self, data)
  end


  # Canonical facade: client.StatusPage.list / client.StatusPage.load({ "id" => ... })
  def StatusPage(data = nil)
    require_relative 'entity/status_page_entity'
    StatusPageEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageComponent.list / client.StatusPageComponent.load({ "id" => ... })
  def StatusPageComponent(data = nil)
    require_relative 'entity/status_page_component_entity'
    StatusPageComponentEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageComponentAvailability.list / client.StatusPageComponentAvailability.load({ "id" => ... })
  def StatusPageComponentAvailability(data = nil)
    require_relative 'entity/status_page_component_availability_entity'
    StatusPageComponentAvailabilityEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageIncident.list / client.StatusPageIncident.load({ "id" => ... })
  def StatusPageIncident(data = nil)
    require_relative 'entity/status_page_incident_entity'
    StatusPageIncidentEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageIncidentUpdate.list / client.StatusPageIncidentUpdate.load({ "id" => ... })
  def StatusPageIncidentUpdate(data = nil)
    require_relative 'entity/status_page_incident_update_entity'
    StatusPageIncidentUpdateEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageLinkedResponseIncident.list / client.StatusPageLinkedResponseIncident.load({ "id" => ... })
  def StatusPageLinkedResponseIncident(data = nil)
    require_relative 'entity/status_page_linked_response_incident_entity'
    StatusPageLinkedResponseIncidentEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageMaintenance.list / client.StatusPageMaintenance.load({ "id" => ... })
  def StatusPageMaintenance(data = nil)
    require_relative 'entity/status_page_maintenance_entity'
    StatusPageMaintenanceEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageMaintenanceUpdate.list / client.StatusPageMaintenanceUpdate.load({ "id" => ... })
  def StatusPageMaintenanceUpdate(data = nil)
    require_relative 'entity/status_page_maintenance_update_entity'
    StatusPageMaintenanceUpdateEntity.new(self, data)
  end


  # Canonical facade: client.StatusPageStructure.list / client.StatusPageStructure.load({ "id" => ... })
  def StatusPageStructure(data = nil)
    require_relative 'entity/status_page_structure_entity'
    StatusPageStructureEntity.new(self, data)
  end


  # Canonical facade: client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2.list / client.StatusPagesCreateStatusPageRetrospectiveIncidentResultV2.load({ "id" => ... })
  def StatusPagesCreateStatusPageRetrospectiveIncidentResultV2(data = nil)
    require_relative 'entity/status_pages_create_status_page_retrospective_incident_result_v2_entity'
    StatusPagesCreateStatusPageRetrospectiveIncidentResultV2Entity.new(self, data)
  end


  # Canonical facade: client.Team.list / client.Team.load({ "id" => ... })
  def Team(data = nil)
    require_relative 'entity/team_entity'
    TeamEntity.new(self, data)
  end


  # Canonical facade: client.TelemetryDataSource.list / client.TelemetryDataSource.load({ "id" => ... })
  def TelemetryDataSource(data = nil)
    require_relative 'entity/telemetry_data_source_entity'
    TelemetryDataSourceEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UsersShowPagingProviderResultV2.list / client.UsersShowPagingProviderResultV2.load({ "id" => ... })
  def UsersShowPagingProviderResultV2(data = nil)
    require_relative 'entity/users_show_paging_provider_result_v2_entity'
    UsersShowPagingProviderResultV2Entity.new(self, data)
  end


  # Canonical facade: client.UtilitiesV1.list / client.UtilitiesV1.load({ "id" => ... })
  def UtilitiesV1(data = nil)
    require_relative 'entity/utilities_v1_entity'
    UtilitiesV1Entity.new(self, data)
  end


  # Canonical facade: client.Workflow.list / client.Workflow.load({ "id" => ... })
  def Workflow(data = nil)
    require_relative 'entity/workflow_entity'
    WorkflowEntity.new(self, data)
  end


  # Canonical facade: client.WorkflowRun.list / client.WorkflowRun.load({ "id" => ... })
  def WorkflowRun(data = nil)
    require_relative 'entity/workflow_run_entity'
    WorkflowRunEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = IncidentIoSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end

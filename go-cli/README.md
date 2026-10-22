# incident-io-cli

boru-driven command-line client **and** interactive REPL for the IncidentIo
SDK. Each command line is parsed as a single [boru](https://github.com/boru-lang/boru)
expression and evaluated against the live API; run it with no arguments to drop
into a REPL. Built on `github.com/boru-lang/boru/eng/go` and the sibling Go SDK
at `../go`.

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/incident-io-cli)
make build

# 2. See usage (words, entities, env vars)
./incident-io-cli --help

# 3. Provide credentials once, via the environment
export INCIDENT_IO_APIKEY=sk_live_xxx

# 4. Each command line is ONE boru expression, run against the API:
./incident-io-cli list action
./incident-io-cli load 1 action            # {id:1} shorthand
./incident-io-cli load '{id:1}' action       # explicit match map
./incident-io-cli update '{name:"x"}' action
./incident-io-cli list alert

# 5. Override the API base URL for a single call
INCIDENT_IO_BASE=https://api.example.com ./incident-io-cli list action

# 6. No arguments -> interactive REPL
./incident-io-cli
incident-io> list action
incident-io> /quit
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: your first query in under a minute

1. **Build the binary.** From this `go-cli/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/incident-io-cli
   ```

2. **Set your API key** (read from the environment):

   ```sh
   export INCIDENT_IO_APIKEY=sk_live_xxx
   ```

3. **Run a query.** Evaluate an boru expression against the API (or run with no
   arguments to open the REPL):

   ```sh
   ./dist/*/incident-io-cli list action
   ```

4. **Go interactive.** Run the binary with no arguments to open the REPL, then
   type `/help` for the word and entity lists and `/quit` to leave.

That is the whole loop: *build → set key → evaluate boru expressions*.

## How-to guides

### List the records of an entity

```sh
./incident-io-cli list action
```

`list <entity>` returns the first page of records. `<entity>` is a bareword —
it is auto-quoted as an boru atom, so no quotes are needed.

### Load a single record

```sh
./incident-io-cli load 1 action          # scalar shorthand for {id:1}
./incident-io-cli load '{id:1}' action     # explicit match map
```

The query is either a **scalar** (`1`, treated as `{id:1}`) or a **match map**
(`{id:1}`, `{slug:"acme"}`). Quote the map so your shell passes it through intact.

### Update a record

```sh
./incident-io-cli update '{id:1,name:"new"}' action
```

The match map carries both the selector and the new field values; the updated
record is printed back.

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export INCIDENT_IO_APIKEY=sk_live_xxx            # API key
export INCIDENT_IO_BASE=https://api.example.com  # optional: override the API base URL
./incident-io-cli list action
```

Both are injectable by a secrets vault, so the key never has to be typed inline.

### Explore interactively with the REPL

Run with no arguments to open a REPL (prompt `incident-io>`). Each line is
evaluated as its own boru expression:

```text
$ ./incident-io-cli
incident-io> list action
incident-io> /help
incident-io> /quit
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

### Discover the available entities

`/help` in the REPL prints the full entity list, or see [Entities](#entities)
below — this SDK exposes 106 entities.

## Reference

### Words

The CLI registers these boru words, each bound to the SDK:

| Word     | Signatures                                    | Returns                        |
|----------|-----------------------------------------------|--------------------------------|
| `list`   | `list <entity>` · `list <query> <entity>`     | First page of records          |
| `load`   | `load <entity>` · `load <query> <entity>`     | A single record                |
| `update` | `update <query> <entity>`                     | Update a record, return it     |

- `<entity>` is a bareword, auto-quoted as an boru atom (e.g. `action`).
- `<query>` is either a **Map** (`{id:1}`) or a **Scalar** (`1`, treated as
  `{id:1}`). A scalar is always wrapped as `{id:<value>}`.

### Environment variables

| Variable | Purpose |
|----------|---------|
| `INCIDENT_IO_APIKEY` | API key sent with every request. |
| `INCIDENT_IO_BASE` | Optional override of the API base URL. |

Unset variables fall back to the SDK's built-in defaults.

### CLI flags

- `--help` / `-h` — print usage (words, entities, env vars) and exit.

### REPL commands

Meta-commands use the `/` prefix (everything else on a line is evaluated as boru):

- `/quit` / `/q` / `/exit` — exit the REPL
- `/help` / `/h` / `/?`     — show the word list, entity list and meta commands

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | Success (also the normal REPL exit). |
| `1` | Parse error, word-registration error, or an API/evaluation error. |

### Build targets

| Target | Result |
|--------|--------|
| `make build` | Native binary at `dist/<os>-<arch>/incident-io-cli`. |
| `make build-all` | linux/darwin/windows x amd64/arm64, each under its own `dist/<os>-<arch>/`. |
| `make clean` | Remove `dist/` and any stray binaries. |

### Entities

The 106 entities this SDK exposes (any is valid as `<entity>`):

action alert alert_attribute alert_events_v2 alert_note alert_route alert_source alert_sources_v2 alert_tag alerts_add_tags_result_v2 alerts_set_tags_result_v2 alerts_transition_incident_alert_result_v2 announcement_rule announcement_template api_key call_route call_route_allowed_caller call_route_option call_session call_transcript_entry catalog_entry catalog_resource catalog_type catalog_type_schema catalog_v3 custom_field custom_field_option escalation escalation_path escalation_path_template escalations_check_escalation_permissions_result_v2 escalations_reassign_escalation_result_v2 escalations_v2 follow_up follow_ups_connect_external_issue_result_v2 follow_ups_connect_external_issue_result_v3 follow_ups_create_from_link_result_v3 heartbeat_v2 identity incident incident_activity_log_entry incident_attachment incident_form incident_membership incident_memberships_v1 incident_participant incident_participant_workload incident_relationship incident_role incident_status incident_team_membership incident_team_memberships_v1 incident_template incident_templates_validate_result_v1 incident_timeline_item incident_timestamp incident_type incident_update incidents_import_postmortem_document_result_v2 ip_allowlist ip_range maintenance_window managed_resource on_call_notification_method_public_v2 on_call_notification_pause on_call_notification_rule_public_v2 pay_config pay_config_one_off_rule pay_config_weekly_rule pay_report pay_reports_publish_result_v2 pay_reports_unpublish_result_v2 pay_reports_v2 policy policy_finding policy_findings_dismiss_result_v2 policy_findings_restore_result_v2 postmortem_document postmortem_documents_attach_result_v1 postmortem_documents_show_content_result_v1 schedule schedule_entries_list_payload_v2 schedule_entry schedule_override schedule_replica schedule_sync_rule schedule_sync_target secret severity status_page status_page_component status_page_component_availability status_page_incident status_page_incident_update status_page_linked_response_incident status_page_maintenance status_page_maintenance_update status_page_structure status_pages_create_status_page_retrospective_incident_result_v2 team telemetry_data_source user users_show_paging_provider_result_v2 utilities_v1 workflow workflow_run

## Explanation

### Why boru?

The whole command line is one [boru](https://github.com/boru-lang/boru) expression,
not a fixed `verb --flag` grammar. That means the same binary works one-shot
(`./incident-io-cli <expr>`) and interactively (the REPL), and expressions compose the
same way in both. `list` / `load` / `update` are ordinary boru *words* bound to
the SDK — adding SDK operations is adding words, not re-parsing flags.

### How it is wired

`main.go` builds the SDK client (configured from the environment), creates an
boru registry, and `words.go` registers `list` / `load` / `update` as native
words that dispatch on the entity atom and call the sibling Go SDK at `../go`.
Results are unwrapped from their `Entity` wrappers to plain data before being
printed.

### Output format

Each result value is printed as its boru string form (a JSON-like rendering of
the record or list of records). One-shot mode prints to stdout; errors go to
stderr with a non-zero exit code.

## Generated by

sdkgen `go-cli` target. See the target source under `.sdk/src/cmp/go-cli/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-cli/`.

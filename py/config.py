# IncidentIo SDK configuration


def make_config():
    return {
        "main": {
            "name": "IncidentIo",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.incident.io",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "action": {},
                "alert": {},
                "alert_attribute": {},
                "alert_note": {},
                "alert_route": {},
                "alert_source": {},
                "api_key": {},
                "catalog_entry": {},
                "catalog_resource": {},
                "catalog_type": {},
                "catalog_type_schema": {},
                "custom_field": {},
                "custom_field_option": {},
                "escalation": {},
                "follow_up": {},
                "incident": {},
                "incident_alert": {},
                "incident_attachment": {},
                "incident_membership": {},
                "incident_participant": {},
                "incident_participant_workload": {},
                "incident_relationship": {},
                "incident_role": {},
                "incident_status": {},
                "incident_timestamp": {},
                "incident_type": {},
                "incident_update": {},
                "ip_allowlist": {},
                "maintenance_window": {},
                "postmortem_document": {},
                "schedule": {},
                "schedule_entry": {},
                "schedule_replica": {},
                "schedule_sync_rule": {},
                "schedule_sync_target": {},
                "secret": {},
                "severity": {},
                "status_page": {},
                "status_page_incident": {},
                "status_page_incident_update": {},
                "status_page_maintenance": {},
                "status_page_maintenance_update": {},
                "status_page_structure": {},
                "team": {},
                "telemetry_data_source": {},
                "user": {},
                "workflow": {},
                "workflow_run": {},
            },
        },
        "entity": {
      "action": {
        "fields": [
          {
            "active": True,
            "name": "assignee",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "assignee_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
              "load": {
                "req": True,
                "type": "`$STRING`",
              },
              "update": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "external_issue_reference",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "follow_up",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
        ],
        "name": "action",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/actions",
                "parts": [
                  "v2",
                  "actions",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.action`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "real",
                      "kind": "query",
                      "name": "incident_mode",
                      "orig": "incident_mode",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "is_follow_up",
                      "orig": "is_follow_up",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/actions",
                "parts": [
                  "v1",
                  "actions",
                ],
                "select": {
                  "exist": [
                    "incident_id",
                    "incident_mode",
                    "is_follow_up",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.actions`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "standard",
                      "kind": "query",
                      "name": "incident_mode",
                      "orig": "incident_mode",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/actions",
                "parts": [
                  "v2",
                  "actions",
                ],
                "select": {
                  "exist": [
                    "incident_id",
                    "incident_mode",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.actions`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/actions/{id}",
                "parts": [
                  "v1",
                  "actions",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.action`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/actions/{id}",
                "parts": [
                  "v2",
                  "actions",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.action`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/actions/{id}",
                "parts": [
                  "v2",
                  "actions",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/actions/{id}",
                "parts": [
                  "v2",
                  "actions",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.action`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "alert": {
        "fields": [
          {
            "active": True,
            "name": "alert_group_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "alert_source_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "attribute",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "deduplication_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "resolved_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "source_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
        ],
        "name": "alert",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/alerts/{id}/actions/resolve",
                "parts": [
                  "v2",
                  "alerts",
                  "{id}",
                  "actions",
                  "resolve",
                ],
                "select": {
                  "$action": "action_resolve",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "alert_group_id",
                      "orig": "alert_group_id",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "alert_source",
                      "orig": "alert_source",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "01GBSQF3FHF7FWZQNWGHAVQ804": {
                          "one_of": [
                            "01GBSQF3FHF7FWZQNWGHAVQ804",
                            "01ET65M7ZARSFZ6TFDFVQDN9AA",
                          ],
                        },
                      },
                      "kind": "query",
                      "name": "attribute",
                      "orig": "attribute",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "gte": [
                          "2025-01-01",
                        ],
                      },
                      "kind": "query",
                      "name": "created_at",
                      "orig": "created_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "is": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "deduplication_key",
                      "orig": "deduplication_key",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "is": [
                          "true",
                        ],
                      },
                      "kind": "query",
                      "name": "has_note",
                      "orig": "has_note",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "is": [
                          "true",
                        ],
                      },
                      "kind": "query",
                      "name": "include_maintenance_window",
                      "orig": "include_maintenance_window",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "firing",
                        ],
                      },
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alerts",
                "parts": [
                  "v2",
                  "alerts",
                ],
                "select": {
                  "exist": [
                    "after",
                    "alert_group_id",
                    "alert_source",
                    "attribute",
                    "created_at",
                    "deduplication_key",
                    "has_note",
                    "include_maintenance_window",
                    "page_size",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alerts/{id}",
                "parts": [
                  "v2",
                  "alerts",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "alert_attribute": {
        "fields": [
          {
            "active": True,
            "name": "array",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "emoji",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "required",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "alert_attribute",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/alert_attributes",
                "parts": [
                  "v2",
                  "alert_attributes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_attribute`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/alert_attributes",
                "parts": [
                  "v2",
                  "alert_attributes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_attributes`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alert_attributes/{id}",
                "parts": [
                  "v2",
                  "alert_attributes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_attribute`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/alert_attributes/{id}",
                "parts": [
                  "v2",
                  "alert_attributes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/alert_attributes/{id}",
                "parts": [
                  "v2",
                  "alert_attributes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_attribute`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "alert_note": {
        "fields": [
          {
            "active": True,
            "name": "alert_group_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "alert_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "content",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "image",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "last_edited_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "alert_note",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/alert_notes",
                "parts": [
                  "v1",
                  "alert_notes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_note`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01HB9Z8WANK6P870EA6S7TK1DS",
                      "kind": "query",
                      "name": "alert_group_id",
                      "orig": "alert_group_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "alert_id",
                      "orig": "alert_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/alert_notes",
                "parts": [
                  "v1",
                  "alert_notes",
                ],
                "select": {
                  "exist": [
                    "after",
                    "alert_group_id",
                    "alert_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01J1X9J85C7Y12G8P8W8K55Q5Y",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/alert_notes/{id}",
                "parts": [
                  "v1",
                  "alert_notes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_note`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01J1X9J85C7Y12G8P8W8K55Q5Y",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/alert_notes/{id}",
                "parts": [
                  "v1",
                  "alert_notes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01J1X9J85C7Y12G8P8W8K55Q5Y",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/alert_notes/{id}",
                "parts": [
                  "v1",
                  "alert_notes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_note`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "alert_route": {
        "fields": [
          {
            "active": True,
            "name": "alert_source",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "channel_config",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "condition_group",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "escalation_config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "expression",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "grouping_config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "incident_config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "incident_template",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_private",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "message_config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "message_template",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 17,
          },
        ],
        "name": "alert_route",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/alert_routes",
                "parts": [
                  "v2",
                  "alert_routes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v3/alert_routes",
                "parts": [
                  "v3",
                  "alert_routes",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alert_routes",
                "parts": [
                  "v2",
                  "alert_routes",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 2,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/alert_routes",
                "parts": [
                  "v3",
                  "alert_routes",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alert_routes/{id}",
                "parts": [
                  "v2",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/alert_routes/{id}",
                "parts": [
                  "v3",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/alert_routes/{id}",
                "parts": [
                  "v2",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v3/alert_routes/{id}",
                "parts": [
                  "v3",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/alert_routes/{id}",
                "parts": [
                  "v2",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v3/alert_routes/{id}",
                "parts": [
                  "v3",
                  "alert_routes",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_route`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "alert_source": {
        "fields": [
          {
            "active": True,
            "name": "alert_events_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "auto_resolve_incident_alert",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "auto_resolve_timeout_minute",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "disabled",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "email_option",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "heartbeat_option",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "http_custom_option",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "jira_option",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "secret_token",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "source_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "template",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 13,
          },
        ],
        "name": "alert_source",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/alert_sources",
                "parts": [
                  "v2",
                  "alert_sources",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_source`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/alert_sources",
                "parts": [
                  "v2",
                  "alert_sources",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_sources`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/alert_sources/{id}",
                "parts": [
                  "v2",
                  "alert_sources",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_source`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/alert_sources/{id}",
                "parts": [
                  "v2",
                  "alert_sources",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GW2G3V0S59R238FAHPDS1R66",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/alert_sources/{id}",
                "parts": [
                  "v2",
                  "alert_sources",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.alert_source`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "api_key": {
        "fields": [
          {
            "active": True,
            "name": "comment",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "grace_period_minute",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "last_used_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "role_name",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "team_id",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "team_role",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "team_role_name",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "token_last_issued_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "api_key",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v1/api_keys/{id}/actions/rotate",
                "parts": [
                  "v1",
                  "api_keys",
                  "{id}",
                  "actions",
                  "rotate",
                ],
                "select": {
                  "$action": "action_rotate",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.api_key`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/api_keys",
                "parts": [
                  "v1",
                  "api_keys",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.api_key`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/api_keys",
                "parts": [
                  "v1",
                  "api_keys",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/api_keys/{id}",
                "parts": [
                  "v1",
                  "api_keys",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.api_key`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/api_keys/{id}",
                "parts": [
                  "v1",
                  "api_keys",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/api_keys/{id}",
                "parts": [
                  "v1",
                  "api_keys",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.api_key`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog_entry": {
        "fields": [
          {
            "active": True,
            "name": "alias",
            "op": {
              "list": {
                "req": True,
                "type": "`$ARRAY`",
              },
            },
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "attribute_value",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "catalog_entry",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "catalog_type",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "catalog_type_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "external_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "rank",
            "op": {
              "list": {
                "req": True,
                "type": "`$INTEGER`",
              },
            },
            "req": False,
            "type": "`$INTEGER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "update_attribute",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "catalog_entry",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/catalog_entries",
                "parts": [
                  "v2",
                  "catalog_entries",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v3/catalog_entries",
                "parts": [
                  "v3",
                  "catalog_entries",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "catalog_type_id",
                      "orig": "catalog_type_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "query",
                      "name": "identifier",
                      "orig": "identifier",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/catalog_entries",
                "parts": [
                  "v3",
                  "catalog_entries",
                ],
                "select": {
                  "exist": [
                    "after",
                    "catalog_type_id",
                    "identifier",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "catalog_type_id",
                      "orig": "catalog_type_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/catalog_entries",
                "parts": [
                  "v2",
                  "catalog_entries",
                ],
                "select": {
                  "exist": [
                    "after",
                    "catalog_type_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "expand",
                      "orig": "expand",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/catalog_entries/{id}",
                "parts": [
                  "v3",
                  "catalog_entries",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "expand",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/catalog_entries/{id}",
                "parts": [
                  "v2",
                  "catalog_entries",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/catalog_entries/{id}",
                "parts": [
                  "v2",
                  "catalog_entries",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v3/catalog_entries/{id}",
                "parts": [
                  "v3",
                  "catalog_entries",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_entry`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog_resource": {
        "fields": [
          {
            "active": True,
            "name": "category",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "engine_resource_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "label",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "value_docstring",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "catalog_resource",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/catalog_resources",
                "parts": [
                  "v2",
                  "catalog_resources",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.resources`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v3/catalog_resources",
                "parts": [
                  "v3",
                  "catalog_resources",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.resources`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog_type": {
        "fields": [
          {
            "active": True,
            "name": "annotation",
            "op": {
              "create": {
                "req": False,
                "type": "`$OBJECT`",
              },
              "update": {
                "req": False,
                "type": "`$OBJECT`",
              },
            },
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "category",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "color",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "dynamic_resource_parameter",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "engine_resource_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "estimated_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "icon",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "is_editable",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_team_type",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "last_synced_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "ranked",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "registry_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "required_integration",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "schema",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "semantic_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "source_repo_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "type_name",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "use_name_as_identifier",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 23,
          },
        ],
        "name": "catalog_type",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/catalog_types",
                "parts": [
                  "v2",
                  "catalog_types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v3/catalog_types",
                "parts": [
                  "v3",
                  "catalog_types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/catalog_types",
                "parts": [
                  "v2",
                  "catalog_types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_types`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v3/catalog_types",
                "parts": [
                  "v3",
                  "catalog_types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_types`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/catalog_types/{id}",
                "parts": [
                  "v2",
                  "catalog_types",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/catalog_types/{id}",
                "parts": [
                  "v3",
                  "catalog_types",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/catalog_types/{id}",
                "parts": [
                  "v2",
                  "catalog_types",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v3/catalog_types/{id}",
                "parts": [
                  "v3",
                  "catalog_types",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "catalog_type_schema": {
        "fields": [
          {
            "active": True,
            "name": "annotation",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "attribute",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "category",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "color",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "dynamic_resource_parameter",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "engine_resource_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "estimated_count",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "icon",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "is_editable",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "is_team_type",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "last_synced_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "ranked",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "registry_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "required_integration",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "schema",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "semantic_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "source_repo_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "type_name",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "use_name_as_identifier",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 25,
          },
        ],
        "name": "catalog_type_schema",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "catalog_type_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/catalog_types/{id}/actions/update_schema",
                "parts": [
                  "v2",
                  "catalog_types",
                  "{catalog_type_id}",
                  "actions",
                  "update_schema",
                ],
                "rename": {
                  "param": {
                    "id": "catalog_type_id",
                  },
                },
                "select": {
                  "exist": [
                    "catalog_type_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "catalog_type_id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v3/catalog_types/{id}/actions/update_schema",
                "parts": [
                  "v3",
                  "catalog_types",
                  "{catalog_type_id}",
                  "actions",
                  "update_schema",
                ],
                "rename": {
                  "param": {
                    "id": "catalog_type_id",
                  },
                },
                "select": {
                  "exist": [
                    "catalog_type_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.catalog_type`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [
            [
              "catalog_type",
            ],
          ],
        },
      },
      "custom_field": {
        "fields": [
          {
            "active": True,
            "name": "catalog_type_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "field_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "filter_by",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "fixed_filter",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "group_by_catalog_attribute_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "helptext_catalog_attribute_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "option",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "required",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "required_v2",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "show_before_closure",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "show_before_creation",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "show_before_update",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "show_in_announcement_post",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
        ],
        "name": "custom_field",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/custom_fields",
                "parts": [
                  "v1",
                  "custom_fields",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/custom_fields",
                "parts": [
                  "v2",
                  "custom_fields",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/custom_fields",
                "parts": [
                  "v1",
                  "custom_fields",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_fields`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/custom_fields",
                "parts": [
                  "v2",
                  "custom_fields",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_fields`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/custom_fields/{id}",
                "parts": [
                  "v1",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/custom_fields/{id}",
                "parts": [
                  "v2",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/custom_fields/{id}",
                "parts": [
                  "v1",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/custom_fields/{id}",
                "parts": [
                  "v2",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/custom_fields/{id}",
                "parts": [
                  "v1",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/custom_fields/{id}",
                "parts": [
                  "v2",
                  "custom_fields",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "custom_field_option": {
        "fields": [
          {
            "active": True,
            "name": "custom_field_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "sort_key",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "value",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "custom_field_option",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/custom_field_options",
                "parts": [
                  "v1",
                  "custom_field_options",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field_option`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "query",
                      "name": "custom_field_id",
                      "orig": "custom_field_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/custom_field_options",
                "parts": [
                  "v1",
                  "custom_field_options",
                ],
                "select": {
                  "exist": [
                    "after",
                    "custom_field_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/custom_field_options/{id}",
                "parts": [
                  "v1",
                  "custom_field_options",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field_option`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/custom_field_options/{id}",
                "parts": [
                  "v1",
                  "custom_field_options",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/custom_field_options/{id}",
                "parts": [
                  "v1",
                  "custom_field_options",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.custom_field_option`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "escalation": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "escalation_path_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "event",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "idempotency_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "priority",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "related_alert",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "related_incident",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "user_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 14,
          },
        ],
        "name": "escalation",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/escalations",
                "parts": [
                  "v2",
                  "escalations",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.escalation`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01J479052SSQAA4531ASFPR3BF",
                        ],
                      },
                      "kind": "query",
                      "name": "alert",
                      "orig": "alert",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "gte": [
                          "2021-08-17",
                        ],
                      },
                      "kind": "query",
                      "name": "created_at",
                      "orig": "created_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01J479052SSQAA4531ASFPR3BF",
                        ],
                      },
                      "kind": "query",
                      "name": "escalation_path",
                      "orig": "escalation_path",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "starts_with": [
                          "team-a:",
                        ],
                      },
                      "kind": "query",
                      "name": "idempotency_key",
                      "orig": "idempotency_key",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "triggered",
                        ],
                      },
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "gte": [
                          "2021-08-17",
                        ],
                      },
                      "kind": "query",
                      "name": "updated_at",
                      "orig": "updated_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/escalations",
                "parts": [
                  "v2",
                  "escalations",
                ],
                "select": {
                  "exist": [
                    "after",
                    "alert",
                    "created_at",
                    "escalation_path",
                    "idempotency_key",
                    "page_size",
                    "status",
                    "updated_at",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/escalations/{id}",
                "parts": [
                  "v2",
                  "escalations",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.escalation`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "follow_up": {
        "fields": [
          {
            "active": True,
            "name": "assignee",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "assignee_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "assignee_team",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "assignee_team_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "completed_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "external_issue_reference",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "external_issue_reference_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "follow_up_category_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "follow_up_priority_option_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "label",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "priority",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 18,
          },
        ],
        "name": "follow_up",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/follow_ups",
                "parts": [
                  "v2",
                  "follow_ups",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.follow_up`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "assignee_team_id",
                      "orig": "assignee_team_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "standard",
                      "kind": "query",
                      "name": "incident_mode",
                      "orig": "incident_mode",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/follow_ups",
                "parts": [
                  "v2",
                  "follow_ups",
                ],
                "select": {
                  "exist": [
                    "assignee_team_id",
                    "incident_id",
                    "incident_mode",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.follow_ups`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/follow_ups/{id}",
                "parts": [
                  "v2",
                  "follow_ups",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.follow_up`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/follow_ups/{id}",
                "parts": [
                  "v2",
                  "follow_ups",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/follow_ups/{id}",
                "parts": [
                  "v2",
                  "follow_ups",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.follow_up`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident": {
        "fields": [
          {
            "active": True,
            "name": "call_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "creator",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "custom_field_entry",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "duration_metric",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "external_issue_reference",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "has_debrief",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "idempotency_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "incident",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "incident_role_assignment",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "incident_status",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "incident_status_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "incident_timestamp_value",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "incident_type",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "incident_type_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "mode",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "notify_incident_channel",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "permalink",
            "req": False,
            "type": "`$STRING`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "postmortem_document_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "postmortem_document_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "reference",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "retrospective_incident_option",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "severity",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 24,
          },
          {
            "active": True,
            "name": "severity_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 25,
          },
          {
            "active": True,
            "name": "slack_channel_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 26,
          },
          {
            "active": True,
            "name": "slack_channel_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 27,
          },
          {
            "active": True,
            "name": "slack_channel_name_override",
            "req": False,
            "type": "`$STRING`",
            "index$": 28,
          },
          {
            "active": True,
            "name": "slack_team_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 29,
          },
          {
            "active": True,
            "name": "source_message_channel_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 30,
          },
          {
            "active": True,
            "name": "source_message_timestamp",
            "req": False,
            "type": "`$STRING`",
            "index$": 31,
          },
          {
            "active": True,
            "name": "status",
            "op": {
              "create": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 32,
          },
          {
            "active": True,
            "name": "summary",
            "req": False,
            "type": "`$STRING`",
            "index$": 33,
          },
          {
            "active": True,
            "name": "timestamp",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 34,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 35,
          },
          {
            "active": True,
            "name": "visibility",
            "req": True,
            "type": "`$STRING`",
            "index$": 36,
          },
          {
            "active": True,
            "name": "workload_minutes_late",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 37,
          },
          {
            "active": True,
            "name": "workload_minutes_sleeping",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 38,
          },
          {
            "active": True,
            "name": "workload_minutes_total",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 39,
          },
          {
            "active": True,
            "name": "workload_minutes_working",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 40,
          },
        ],
        "name": "incident",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G18REBY9AYH6CMWCJ2CVCYCH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/incidents/{id}/actions/edit",
                "parts": [
                  "v2",
                  "incidents",
                  "{id}",
                  "actions",
                  "edit",
                ],
                "select": {
                  "$action": "action_edit",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "incident": "`reqdata`",
                  },
                  "res": "`body.incident`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/incidents",
                "parts": [
                  "v1",
                  "incidents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident`",
                },
                "index$": 1,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/incidents",
                "parts": [
                  "v2",
                  "incidents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident`",
                },
                "index$": 2,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "created_at[gte]": [
                          "2024-05-01",
                        ],
                      },
                      "kind": "query",
                      "name": "created_at",
                      "orig": "created_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "01GBSQF3FHF7FWZQNWGHAVQ804": {
                          "one_of": [
                            "01GBSQF3FHF7FWZQNWGHAVQ804",
                            "01ET65M7ZARSFZ6TFDFVQDN9AA",
                          ],
                        },
                      },
                      "kind": "query",
                      "name": "custom_field",
                      "orig": "custom_field",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": "all",
                      "kind": "query",
                      "name": "filter_mode",
                      "orig": "filter_mode",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "01GBSQF3FHF7FWZQNWGHAVQ804": {
                          "one_of": [
                            "01GBSQF3FHF7FWZQNWGHAVQ804",
                            "01ET65M7ZARSFZ6TFDFVQDN9AA",
                          ],
                        },
                      },
                      "kind": "query",
                      "name": "incident_role",
                      "orig": "incident_role",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "incident_type",
                      "orig": "incident_type",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "retrospective",
                        ],
                      },
                      "kind": "query",
                      "name": "mode",
                      "orig": "mode",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "severity",
                      "orig": "severity",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": "created_at_newest_first",
                      "kind": "query",
                      "name": "sort_by",
                      "orig": "sort_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "01GBSQF3FHF7FWZQNWGHAVQ804",
                        ],
                      },
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "one_of": [
                          "active",
                        ],
                      },
                      "kind": "query",
                      "name": "status_category",
                      "orig": "status_category",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": {
                        "updated_at[gte]": [
                          "2024-05-01",
                        ],
                      },
                      "kind": "query",
                      "name": "updated_at",
                      "orig": "updated_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incidents",
                "parts": [
                  "v2",
                  "incidents",
                ],
                "select": {
                  "exist": [
                    "after",
                    "created_at",
                    "custom_field",
                    "filter_mode",
                    "incident_role",
                    "incident_type",
                    "mode",
                    "page_size",
                    "severity",
                    "sort_by",
                    "status",
                    "status_category",
                    "updated_at",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": [
                        "declined",
                      ],
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incidents",
                "parts": [
                  "v1",
                  "incidents",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incidents/{id}",
                "parts": [
                  "v1",
                  "incidents",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incidents/{id}",
                "parts": [
                  "v2",
                  "incidents",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_alert": {
        "fields": [
          {
            "active": True,
            "name": "alert",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "alert_route_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "incident",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
        ],
        "name": "incident_alert",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "query",
                      "name": "alert_id",
                      "orig": "alert_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_alerts",
                "parts": [
                  "v2",
                  "incident_alerts",
                ],
                "select": {
                  "exist": [
                    "after",
                    "alert_id",
                    "incident_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_attachment": {
        "fields": [
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "resource",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
        ],
        "name": "incident_attachment",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/incident_attachments",
                "parts": [
                  "v1",
                  "incident_attachments",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_attachment`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "123",
                      "kind": "query",
                      "name": "external_id",
                      "orig": "external_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "pager_duty_incident",
                      "kind": "query",
                      "name": "resource_type",
                      "orig": "resource_type",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incident_attachments",
                "parts": [
                  "v1",
                  "incident_attachments",
                ],
                "select": {
                  "exist": [
                    "external_id",
                    "incident_id",
                    "resource_type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_attachments`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/incident_attachments/{id}",
                "parts": [
                  "v1",
                  "incident_attachments",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_membership": {
        "fields": [
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "user_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "incident_membership",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/incident_memberships",
                "parts": [
                  "v1",
                  "incident_memberships",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_membership`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_participant": {
        "fields": [
          {
            "active": True,
            "name": "active",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "passive",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
        ],
        "name": "incident_participant",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_participants",
                "parts": [
                  "v2",
                  "incident_participants",
                ],
                "select": {
                  "exist": [
                    "incident_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_participants`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_participant_workload": {
        "fields": [
          {
            "active": True,
            "name": "archived_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "participant_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "user",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "workload",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
        ],
        "name": "incident_participant_workload",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_participant_workloads",
                "parts": [
                  "v2",
                  "incident_participant_workloads",
                ],
                "select": {
                  "exist": [
                    "incident_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_relationship": {
        "fields": [
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "incident",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "incident_relationship",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incident_relationships",
                "parts": [
                  "v1",
                  "incident_relationships",
                ],
                "select": {
                  "exist": [
                    "after",
                    "incident_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_role": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "instruction",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "required",
            "op": {
              "create": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "role_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "shortform",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "incident_role",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/incident_roles",
                "parts": [
                  "v1",
                  "incident_roles",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/incident_roles",
                "parts": [
                  "v2",
                  "incident_roles",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/incident_roles",
                "parts": [
                  "v1",
                  "incident_roles",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_roles`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/incident_roles",
                "parts": [
                  "v2",
                  "incident_roles",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_roles`",
                },
                "index$": 1,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incident_roles/{id}",
                "parts": [
                  "v1",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_roles/{id}",
                "parts": [
                  "v2",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 1,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/incident_roles/{id}",
                "parts": [
                  "v1",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/incident_roles/{id}",
                "parts": [
                  "v2",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 1,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/incident_roles/{id}",
                "parts": [
                  "v1",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/incident_roles/{id}",
                "parts": [
                  "v2",
                  "incident_roles",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_role`",
                },
                "index$": 1,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_status": {
        "fields": [
          {
            "active": True,
            "name": "category",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "rank",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
        ],
        "name": "incident_status",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/incident_statuses",
                "parts": [
                  "v1",
                  "incident_statuses",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_status`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/incident_statuses",
                "parts": [
                  "v1",
                  "incident_statuses",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_statuses`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incident_statuses/{id}",
                "parts": [
                  "v1",
                  "incident_statuses",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_status`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/incident_statuses/{id}",
                "parts": [
                  "v1",
                  "incident_statuses",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/incident_statuses/{id}",
                "parts": [
                  "v1",
                  "incident_statuses",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_status`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_timestamp": {
        "fields": [
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "rank",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 2,
          },
        ],
        "name": "incident_timestamp",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/incident_timestamps",
                "parts": [
                  "v2",
                  "incident_timestamps",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_timestamps`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYD5H",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_timestamps/{id}",
                "parts": [
                  "v2",
                  "incident_timestamps",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_timestamp`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_type": {
        "fields": [
          {
            "active": True,
            "name": "create_in_triage",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "is_default",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "private_incidents_only",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "incident_type",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/incident_types",
                "parts": [
                  "v1",
                  "incident_types",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_types`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/incident_types/{id}",
                "parts": [
                  "v1",
                  "incident_types",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.incident_type`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "incident_update": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "merged_into_incident_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "message",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "new_incident_status",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "new_severity",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "updater",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
        ],
        "name": "incident_update",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/incident_updates",
                "parts": [
                  "v2",
                  "incident_updates",
                ],
                "select": {
                  "exist": [
                    "after",
                    "incident_id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "ip_allowlist": {
        "fields": [
          {
            "active": True,
            "name": "allowlist",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 3,
          },
        ],
        "name": "ip_allowlist",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/ip_allowlists",
                "parts": [
                  "v1",
                  "ip_allowlists",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.ip_allowlist`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "PUT",
                "orig": "/v1/ip_allowlists",
                "parts": [
                  "v1",
                  "ip_allowlists",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.ip_allowlist`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "maintenance_window": {
        "fields": [
          {
            "active": True,
            "name": "alert_condition_group",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "archived_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "end_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "escalation_target",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "lead",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "notification_message",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "notify_channel",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "notify_end_minutes_before",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "notify_start_minutes_before",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "reroute_on_end",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "resolve_on_end",
            "op": {
              "create": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
              "update": {
                "req": False,
                "type": "`$BOOLEAN`",
              },
            },
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "show_in_sidebar",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "start_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 17,
          },
        ],
        "name": "maintenance_window",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/maintenance_windows",
                "parts": [
                  "v1",
                  "maintenance_windows",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.maintenance_window`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "active",
                      "kind": "query",
                      "name": "status",
                      "orig": "status",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/maintenance_windows",
                "parts": [
                  "v1",
                  "maintenance_windows",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                    "status",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/maintenance_windows/{id}",
                "parts": [
                  "v1",
                  "maintenance_windows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.maintenance_window`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v1/maintenance_windows/{id}",
                "parts": [
                  "v1",
                  "maintenance_windows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/maintenance_windows/{id}",
                "parts": [
                  "v1",
                  "maintenance_windows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.maintenance_window`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "postmortem_document": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "document_url",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "editor",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "exported_url",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "status",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "title",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "type",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "postmortem_document",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01GBA8J19SMXQWPJMX3P2ESCVG",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "created_at_oldest_first",
                      "kind": "query",
                      "name": "sort_by",
                      "orig": "sort_by",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/postmortem_documents",
                "parts": [
                  "v1",
                  "postmortem_documents",
                ],
                "select": {
                  "exist": [
                    "after",
                    "incident_id",
                    "page_size",
                    "sort_by",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GDZEW57FDA1K4S63MGMQ5DS9",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/postmortem_documents/{id}",
                "parts": [
                  "v1",
                  "postmortem_documents",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.postmortem_document`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01GDZEW57FDA1K4S63MGMQ5DS9",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/postmortem_documents/{id}",
                "parts": [
                  "v1",
                  "postmortem_documents",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.postmortem_document`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "schedule": {
        "fields": [
          {
            "active": True,
            "name": "annotation",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "current_shift",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "holidays_public_config",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "next_shift",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "permalink",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "schedule",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "team_id",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "timezone",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
        ],
        "name": "schedule",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/schedules",
                "parts": [
                  "v2",
                  "schedules",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "schedule": "`reqdata`",
                  },
                  "res": "`body.schedule`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules",
                "parts": [
                  "v2",
                  "schedules",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/schedules/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/schedules/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "schedule": "`reqdata`",
                  },
                  "res": "`body.schedule`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "schedule_entry": {
        "fields": [
          {
            "active": True,
            "name": "pagination_meta",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "schedule_entry",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "schedule_entry",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "2021-01-01T00:00:00Z",
                      "kind": "query",
                      "name": "entry_window_end",
                      "orig": "entry_window_end",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2021-01-01T00:00:00Z",
                      "kind": "query",
                      "name": "entry_window_start",
                      "orig": "entry_window_start",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "schedule_id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedule_entries",
                "parts": [
                  "v2",
                  "schedule_entries",
                ],
                "select": {
                  "exist": [
                    "entry_window_end",
                    "entry_window_start",
                    "schedule_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "schedule_replica": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "last_sync_error",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "last_synced_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "mirror_window_day",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "replica_fallback_user_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "replica_provider",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "replica_provider_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "schedule_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "schedule_replica",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "source",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "user_status",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
        ],
        "name": "schedule_replica",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/schedules/{schedule_id}/replicas",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                  "replicas",
                ],
                "rename": {
                  "param": {
                    "schedule_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "schedule_replica": "`reqdata`",
                  },
                  "res": "`body.schedule_replica`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules/{schedule_id}/replicas",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                  "replicas",
                ],
                "rename": {
                  "param": {
                    "schedule_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_replicas`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "schedule_id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules/{schedule_id}/replicas/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{schedule_id}",
                  "replicas",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "schedule_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_replica`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [
            [
              "schedule",
            ],
          ],
        },
      },
      "schedule_sync_rule": {
        "fields": [
          {
            "active": True,
            "name": "annotation",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "permanent_member_user_id",
            "op": {
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "rotation_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "schedule_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "schedule_sync_rule",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "schedule_sync_target",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "schedule_sync_target_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "sync_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
        ],
        "name": "schedule_sync_rule",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/schedules/{schedule_id}/sync_rules",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                  "sync_rules",
                ],
                "rename": {
                  "param": {
                    "schedule_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": {
                    "schedule_sync_rule": "`reqdata`",
                  },
                  "res": "`body.schedule_sync_rule`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": "01JXYZ000000000000000000CD",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules/{schedule_id}/sync_rules",
                "parts": [
                  "v2",
                  "schedules",
                  "{id}",
                  "sync_rules",
                ],
                "rename": {
                  "param": {
                    "schedule_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "after",
                    "id",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01JXYZ000000000000000000CD",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "schedule_id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedules/{schedule_id}/sync_rules/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{schedule_id}",
                  "sync_rules",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "schedule_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_sync_rule`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01JXYZ000000000000000000CD",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "param",
                      "name": "schedule_id",
                      "orig": "schedule_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 1,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/schedules/{schedule_id}/sync_rules/{id}",
                "parts": [
                  "v2",
                  "schedules",
                  "{schedule_id}",
                  "sync_rules",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "schedule_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_sync_rule`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [
            [
              "schedule",
            ],
          ],
        },
      },
      "schedule_sync_target": {
        "fields": [
          {
            "active": True,
            "name": "add_bot_to_group",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "annotation",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "linked_schedule",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "schedule_sync_target",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "slack_team_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "slack_user_group_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "schedule_sync_target",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/schedule_sync_targets",
                "parts": [
                  "v2",
                  "schedule_sync_targets",
                ],
                "select": {},
                "transform": {
                  "req": {
                    "schedule_sync_target": "`reqdata`",
                  },
                  "res": "`body.schedule_sync_target`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedule_sync_targets",
                "parts": [
                  "v2",
                  "schedule_sync_targets",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/schedule_sync_targets/{id}",
                "parts": [
                  "v2",
                  "schedule_sync_targets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_sync_target`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/schedule_sync_targets/{id}",
                "parts": [
                  "v2",
                  "schedule_sync_targets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/schedule_sync_targets/{id}",
                "parts": [
                  "v2",
                  "schedule_sync_targets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.schedule_sync_target`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "secret": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "last_four_char",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "op": {
              "create": {
                "req": False,
                "type": "`$ARRAY`",
              },
              "update": {
                "req": False,
                "type": "`$ARRAY`",
              },
            },
            "req": True,
            "type": "`$ARRAY`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "secret",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "value",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 9,
          },
        ],
        "name": "secret",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "POST",
                "orig": "/v2/secrets/{id}/actions/rotate",
                "parts": [
                  "v2",
                  "secrets",
                  "{id}",
                  "actions",
                  "rotate",
                ],
                "select": {
                  "$action": "action_rotate",
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.secret`",
                },
                "index$": 0,
              },
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/secrets",
                "parts": [
                  "v2",
                  "secrets",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.secret`",
                },
                "index$": 1,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": [
                        "abc123",
                      ],
                      "kind": "query",
                      "name": "team_id",
                      "orig": "team_id",
                      "reqd": False,
                      "type": "`$ARRAY`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/secrets",
                "parts": [
                  "v2",
                  "secrets",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                    "team_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/secrets/{id}",
                "parts": [
                  "v2",
                  "secrets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.secret`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/secrets/{id}",
                "parts": [
                  "v2",
                  "secrets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/secrets/{id}",
                "parts": [
                  "v2",
                  "secrets",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.secret`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "severity": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "description",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "rank",
            "op": {
              "create": {
                "req": False,
                "type": "`$INTEGER`",
              },
              "update": {
                "req": False,
                "type": "`$INTEGER`",
              },
            },
            "req": True,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
        ],
        "name": "severity",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v1/severities",
                "parts": [
                  "v1",
                  "severities",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.severity`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v1/severities",
                "parts": [
                  "v1",
                  "severities",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.severities`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v1/severities/{id}",
                "parts": [
                  "v1",
                  "severities",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.severity`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v1/severities/{id}",
                "parts": [
                  "v1",
                  "severities",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.severity`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page": {
        "fields": [
          {
            "active": True,
            "name": "description",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "public_url",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "status_page",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_pages",
                "parts": [
                  "v2",
                  "status_pages",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page_incident": {
        "fields": [
          {
            "active": True,
            "name": "component_impact",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "component_status",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "idempotency_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "incident_status",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "notify_subscriber",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "published_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "status_page_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "update",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 10,
          },
        ],
        "name": "status_page_incident",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/status_page_incidents",
                "parts": [
                  "v2",
                  "status_page_incidents",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_incident`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "query",
                      "name": "component_id",
                      "orig": "component_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2021-08-17T13:28:57.801578Z",
                      "kind": "query",
                      "name": "end_at",
                      "orig": "end_at",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG2",
                      "kind": "query",
                      "name": "group_id",
                      "orig": "group_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "2021-08-17T13:28:57.801578Z",
                      "kind": "query",
                      "name": "start_at",
                      "orig": "start_at",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "status_page_id",
                      "orig": "status_page_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG3",
                      "kind": "query",
                      "name": "sub_page_id",
                      "orig": "sub_page_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_page_incidents",
                "parts": [
                  "v2",
                  "status_page_incidents",
                ],
                "select": {
                  "exist": [
                    "after",
                    "component_id",
                    "end_at",
                    "group_id",
                    "page_size",
                    "start_at",
                    "status_page_id",
                    "sub_page_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "param",
                      "name": "id",
                      "orig": "status_page_incident_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_page_incidents/{status_page_incident_id}",
                "parts": [
                  "v2",
                  "status_page_incidents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "status_page_incident_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_incident`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "param",
                      "name": "id",
                      "orig": "status_page_incident_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/status_page_incidents/{status_page_incident_id}",
                "parts": [
                  "v2",
                  "status_page_incidents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "status_page_incident_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_incident`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page_incident_update": {
        "fields": [
          {
            "active": True,
            "name": "component_status",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "incident_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "notify_subscriber",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "status_page_incident_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "status_page_incident_update",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/status_page_incident_updates",
                "parts": [
                  "v2",
                  "status_page_incident_updates",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_incident_update`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page_maintenance": {
        "fields": [
          {
            "active": True,
            "name": "affected_component_id",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "component_maintenance_period",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "end_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "idempotency_key",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "maintenance_status",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "notify_subscriber",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "published_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "start_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "status_page_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "update",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
        ],
        "name": "status_page_maintenance",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/status_page_maintenances",
                "parts": [
                  "v2",
                  "status_page_maintenances",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_maintenance`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "query",
                      "name": "component_id",
                      "orig": "component_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "2021-08-17T13:28:57.801578Z",
                      "kind": "query",
                      "name": "end_at",
                      "orig": "end_at",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG2",
                      "kind": "query",
                      "name": "group_id",
                      "orig": "group_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "2021-08-17T13:28:57.801578Z",
                      "kind": "query",
                      "name": "start_at",
                      "orig": "start_at",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "status_page_id",
                      "orig": "status_page_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG3",
                      "kind": "query",
                      "name": "sub_page_id",
                      "orig": "sub_page_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_page_maintenances",
                "parts": [
                  "v2",
                  "status_page_maintenances",
                ],
                "select": {
                  "exist": [
                    "after",
                    "component_id",
                    "end_at",
                    "group_id",
                    "page_size",
                    "start_at",
                    "status_page_id",
                    "sub_page_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG1",
                      "kind": "param",
                      "name": "id",
                      "orig": "status_page_maintenance_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_page_maintenances/{status_page_maintenance_id}",
                "parts": [
                  "v2",
                  "status_page_maintenances",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "status_page_maintenance_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_maintenance`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page_maintenance_update": {
        "fields": [
          {
            "active": True,
            "name": "component_status",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "maintenance_status",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "message",
            "req": True,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "notify_subscriber",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "status_page_maintenance_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
        ],
        "name": "status_page_maintenance_update",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/status_page_maintenance_updates",
                "parts": [
                  "v2",
                  "status_page_maintenance_updates",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.status_page_maintenance_update`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status_page_structure": {
        "fields": [
          {
            "active": True,
            "name": "item",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 0,
          },
        ],
        "name": "status_page_structure",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "status_page_id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/status_page_structures/{status_page_id}",
                "parts": [
                  "v2",
                  "status_page_structures",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "status_page_id": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.current_structure`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "team": {
        "fields": [
          {
            "active": True,
            "name": "catalog_entry",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "member",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
        ],
        "name": "team",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/teams",
                "parts": [
                  "v3",
                  "teams",
                ],
                "select": {
                  "exist": [
                    "after",
                    "page_size",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "abc123",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v3/teams/{id}",
                "parts": [
                  "v3",
                  "teams",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.team`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "telemetry_data_source": {
        "fields": [
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "datadog_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enabled",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "grafana_config",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "op": {
              "update": {
                "req": False,
                "type": "`$STRING`",
              },
            },
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "provider",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "source_type",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "version",
            "req": False,
            "type": "`$STRING`",
            "index$": 9,
          },
        ],
        "name": "telemetry_data_source",
        "op": {
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01G0J1EXE7AXZ2C93K61WBPYEH",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/telemetry/data_sources/{id}",
                "parts": [
                  "v2",
                  "telemetry",
                  "data_sources",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.data_source`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "user": {
        "fields": [
          {
            "active": True,
            "name": "base_role",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "custom_role",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "email",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "is_active",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "role",
            "req": True,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "seat",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "slack_user_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 8,
          },
        ],
        "name": "user",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FDAG4SAP5TYPT98WGR2N7W91",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "john.doe@incident.io",
                      "kind": "query",
                      "name": "email",
                      "orig": "email",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": True,
                      "kind": "query",
                      "name": "include_inactive",
                      "orig": "include_inactive",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "U12345678",
                      "kind": "query",
                      "name": "slack_user_id",
                      "orig": "slack_user_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/users",
                "parts": [
                  "v2",
                  "users",
                ],
                "select": {
                  "exist": [
                    "after",
                    "email",
                    "include_inactive",
                    "page_size",
                    "slack_user_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/users/{id}",
                "parts": [
                  "v2",
                  "users",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.user`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workflow": {
        "fields": [
          {
            "active": True,
            "name": "annotation",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "condition_group",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "continue_on_step_error",
            "req": True,
            "type": "`$BOOLEAN`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "delay",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "expression",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "folder",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "form_field",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "include_private_escalation",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "include_private_incident",
            "op": {
              "list": {
                "req": True,
                "type": "`$BOOLEAN`",
              },
            },
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "management_meta",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "name",
            "req": True,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "once_for",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "owning_team_id",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "private_incident_scope",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "runs_from",
            "req": False,
            "type": "`$STRING`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "runs_on_incident",
            "req": True,
            "type": "`$STRING`",
            "index$": 16,
          },
          {
            "active": True,
            "name": "runs_on_incident_mode",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 17,
          },
          {
            "active": True,
            "name": "shortform",
            "req": False,
            "type": "`$STRING`",
            "index$": 18,
          },
          {
            "active": True,
            "name": "skip_step_upgrade",
            "req": False,
            "type": "`$BOOLEAN`",
            "index$": 19,
          },
          {
            "active": True,
            "name": "state",
            "op": {
              "list": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "req": False,
            "type": "`$STRING`",
            "index$": 20,
          },
          {
            "active": True,
            "name": "step",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 21,
          },
          {
            "active": True,
            "name": "trigger",
            "req": True,
            "type": "`$STRING`",
            "index$": 22,
          },
          {
            "active": True,
            "name": "version",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 23,
          },
          {
            "active": True,
            "name": "workflow",
            "req": True,
            "type": "`$OBJECT`",
            "index$": 24,
          },
        ],
        "name": "workflow",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "POST",
                "orig": "/v2/workflows",
                "parts": [
                  "v2",
                  "workflows",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.workflow`",
                },
                "index$": 0,
              },
            ],
            "key$": "create",
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {},
                "method": "GET",
                "orig": "/v2/workflows",
                "parts": [
                  "v2",
                  "workflows",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.workflows`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                  "query": [
                    {
                      "active": True,
                      "example": False,
                      "kind": "query",
                      "name": "skip_step_upgrade",
                      "orig": "skip_step_upgrade",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/workflows/{id}",
                "parts": [
                  "v2",
                  "workflows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                    "skip_step_upgrade",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.workflow`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "DELETE",
                "orig": "/v2/workflows/{id}",
                "parts": [
                  "v2",
                  "workflows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "remove",
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "PUT",
                "orig": "/v2/workflows/{id}",
                "parts": [
                  "v2",
                  "workflows",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.workflow`",
                },
                "index$": 0,
              },
            ],
            "key$": "update",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "workflow_run": {
        "fields": [
          {
            "active": True,
            "name": "cancelled_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "created_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "enqueued_at",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "error",
            "req": False,
            "type": "`$STRING`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "id",
            "req": True,
            "type": "`$STRING`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "incident_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "incident_reference",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "progress",
            "req": True,
            "type": "`$ARRAY`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "scheduled_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "updated_at",
            "req": True,
            "type": "`$STRING`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "workflow_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "workflow_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "workflow_version_id",
            "req": True,
            "type": "`$STRING`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "workflow_version_number",
            "req": True,
            "type": "`$INTEGER`",
            "index$": 13,
          },
        ],
        "name": "workflow_run",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "after",
                      "orig": "after",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": {
                        "date_range": [
                          "2026-07-01~2026-07-31",
                        ],
                      },
                      "kind": "query",
                      "name": "created_at",
                      "orig": "created_at",
                      "reqd": False,
                      "type": "`$OBJECT`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "incident_id",
                      "orig": "incident_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": 25,
                      "kind": "query",
                      "name": "page_size",
                      "orig": "page_size",
                      "reqd": False,
                      "type": "`$INTEGER`",
                    },
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "query",
                      "name": "workflow_id",
                      "orig": "workflow_id",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/workflow_runs",
                "parts": [
                  "v2",
                  "workflow_runs",
                ],
                "select": {
                  "exist": [
                    "after",
                    "created_at",
                    "incident_id",
                    "page_size",
                    "workflow_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "list",
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "params": [
                    {
                      "active": True,
                      "example": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "kind": "param",
                      "name": "id",
                      "orig": "id",
                      "reqd": True,
                      "type": "`$STRING`",
                      "index$": 0,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/v2/workflow_runs/{id}",
                "parts": [
                  "v2",
                  "workflow_runs",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.workflow_run`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

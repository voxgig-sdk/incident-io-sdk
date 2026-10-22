import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "alert",
    "accessor": "Alert",
    "op": "create",
    "method": "POST",
    "path": "/v2/alerts/{id}/actions/resolve",
    "action": "action_resolve",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert": {
        "alert_group_ids": [
          "01GW2G3V0S59R238FAHPDS1R66"
        ],
        "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
        "attributes": [
          {
            "array_value": [
              {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            ],
            "attribute": {
              "array": false,
              "emoji": "fire",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "service",
              "required": false,
              "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
            },
            "value": {
              "catalog_entry": {
                "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Primary On-call"
              },
              "label": "Payments Team",
              "literal": "SEV123"
            }
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "deduplication_key": "4293868629",
        "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "resolved_at": "2021-08-17T14:28:57.801578Z",
        "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
        "status": "firing",
        "tags": [
          {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "name": "noisy"
          }
        ],
        "title": "*errors.withMessage: PG::Error failed to connect",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert",
    "accessor": "Alert",
    "op": "list",
    "method": "GET",
    "path": "/v2/alerts",
    "args": [],
    "select": {
      "page_size": 25,
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "alert_group_id": "v1",
      "alert_source": "v1",
      "attribute": "v1",
      "created_at": "v1",
      "deduplication_key": "v1",
      "has_note": "v1",
      "include_maintenance_window": "v1",
      "status": "v1",
      "tag": "v1",
      "updated_at": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "deduplication_key",
      "status",
      "alert_source",
      "alert_group_id",
      "created_at",
      "updated_at",
      "attributes",
      "has_notes",
      "tags",
      "include_maintenance_window"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "alert_group_id",
        "wire": "alert_group_id"
      },
      {
        "name": "alert_source",
        "wire": "alert_source"
      },
      {
        "name": "attribute",
        "wire": "attributes"
      },
      {
        "name": "created_at",
        "wire": "created_at"
      },
      {
        "name": "deduplication_key",
        "wire": "deduplication_key"
      },
      {
        "name": "has_note",
        "wire": "has_notes"
      },
      {
        "name": "include_maintenance_window",
        "wire": "include_maintenance_window"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "status",
        "wire": "status"
      },
      {
        "name": "tag",
        "wire": "tags"
      },
      {
        "name": "updated_at",
        "wire": "updated_at"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alerts": [
        {
          "alert_group_ids": [
            "01GW2G3V0S59R238FAHPDS1R66"
          ],
          "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
          "attributes": [
            {
              "array_value": [
                {
                  "catalog_entry": {
                    "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "name": "Primary On-call"
                  },
                  "label": "Payments Team",
                  "literal": "SEV123"
                }
              ],
              "attribute": {
                "array": false,
                "emoji": "fire",
                "id": "01GW2G3V0S59R238FAHPDS1R66",
                "name": "service",
                "required": false,
                "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
              },
              "value": {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            }
          ],
          "created_at": "2021-08-17T13:28:57.801578Z",
          "deduplication_key": "4293868629",
          "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "resolved_at": "2021-08-17T14:28:57.801578Z",
          "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
          "status": "firing",
          "tags": [
            {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "noisy"
            }
          ],
          "title": "*errors.withMessage: PG::Error failed to connect",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert",
    "accessor": "Alert",
    "op": "load",
    "method": "GET",
    "path": "/v2/alerts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert": {
        "alert_group_ids": [
          "01GW2G3V0S59R238FAHPDS1R66"
        ],
        "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
        "attributes": [
          {
            "array_value": [
              {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            ],
            "attribute": {
              "array": false,
              "emoji": "fire",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "service",
              "required": false,
              "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
            },
            "value": {
              "catalog_entry": {
                "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Primary On-call"
              },
              "label": "Payments Team",
              "literal": "SEV123"
            }
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "deduplication_key": "4293868629",
        "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "resolved_at": "2021-08-17T14:28:57.801578Z",
        "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
        "status": "firing",
        "tags": [
          {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "name": "noisy"
          }
        ],
        "title": "*errors.withMessage: PG::Error failed to connect",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_attribute",
    "accessor": "AlertAttribute",
    "op": "create",
    "method": "POST",
    "path": "/v2/alert_attributes",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "alert_attribute": {
        "array": false,
        "emoji": "fire",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "name": "service",
        "required": false,
        "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_attribute",
    "accessor": "AlertAttribute",
    "op": "list",
    "method": "GET",
    "path": "/v2/alert_attributes",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_attributes": [
        {
          "array": false,
          "emoji": "fire",
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "name": "service",
          "required": false,
          "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "alert_attribute",
    "accessor": "AlertAttribute",
    "op": "load",
    "method": "GET",
    "path": "/v2/alert_attributes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_attribute": {
        "array": false,
        "emoji": "fire",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "name": "service",
        "required": false,
        "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_attribute",
    "accessor": "AlertAttribute",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/alert_attributes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "alert_attribute",
    "accessor": "AlertAttribute",
    "op": "update",
    "method": "PUT",
    "path": "/v2/alert_attributes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_attribute": {
        "array": false,
        "emoji": "fire",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "name": "service",
        "required": false,
        "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_note",
    "accessor": "AlertNote",
    "op": "create",
    "method": "POST",
    "path": "/v1/alert_notes",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "alert_note": {
        "alert_group_id": "01HB9Z8WANK6P870EA6S7TK1DS",
        "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "content": "Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n",
        "created_at": "2026-05-28T15:30:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01J1X9J85C7Y12G8P8W8K55Q5Y",
        "images": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "url": "https://storage.googleapis.com/incident-io/images/..."
          }
        ],
        "last_edited_at": "2026-05-28T15:35:00Z",
        "updated_at": "2026-05-28T15:35:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_note",
    "accessor": "AlertNote",
    "op": "list",
    "method": "GET",
    "path": "/v1/alert_notes",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "alert_group_id": "01HB9Z8WANK6P870EA6S7TK1DS",
      "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "alert_id",
      "alert_group_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "alert_group_id",
        "wire": "alert_group_id"
      },
      {
        "name": "alert_id",
        "wire": "alert_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_notes": [
        {
          "alert_group_id": "01HB9Z8WANK6P870EA6S7TK1DS",
          "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "content": "Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n",
          "created_at": "2026-05-28T15:30:00Z",
          "creator": {
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "viewer",
              "slack_user_id": "U02AYNF2XJM"
            }
          },
          "id": "01J1X9J85C7Y12G8P8W8K55Q5Y",
          "images": [
            {
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "url": "https://storage.googleapis.com/incident-io/images/..."
            }
          ],
          "last_edited_at": "2026-05-28T15:35:00Z",
          "updated_at": "2026-05-28T15:35:00Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_note",
    "accessor": "AlertNote",
    "op": "load",
    "method": "GET",
    "path": "/v1/alert_notes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01J1X9J85C7Y12G8P8W8K55Q5Y"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_note": {
        "alert_group_id": "01HB9Z8WANK6P870EA6S7TK1DS",
        "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "content": "Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n",
        "created_at": "2026-05-28T15:30:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01J1X9J85C7Y12G8P8W8K55Q5Y",
        "images": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "url": "https://storage.googleapis.com/incident-io/images/..."
          }
        ],
        "last_edited_at": "2026-05-28T15:35:00Z",
        "updated_at": "2026-05-28T15:35:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_note",
    "accessor": "AlertNote",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/alert_notes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01J1X9J85C7Y12G8P8W8K55Q5Y"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "alert_note",
    "accessor": "AlertNote",
    "op": "update",
    "method": "PUT",
    "path": "/v1/alert_notes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01J1X9J85C7Y12G8P8W8K55Q5Y"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_note": {
        "alert_group_id": "01HB9Z8WANK6P870EA6S7TK1DS",
        "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "content": "Customer reports **checkout 500s** starting ~14:32 UTC. Investigating `payments-api`.\n\n- Error rate: ~12% on `/checkout`\n- Region: `eu-west-1`\n- See [dashboard](https://grafana.example.com/d/abc)\n",
        "created_at": "2026-05-28T15:30:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01J1X9J85C7Y12G8P8W8K55Q5Y",
        "images": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "url": "https://storage.googleapis.com/incident-io/images/..."
          }
        ],
        "last_edited_at": "2026-05-28T15:35:00Z",
        "updated_at": "2026-05-28T15:35:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_route",
    "accessor": "AlertRoute",
    "op": "list",
    "method": "GET",
    "path": "/v2/alert_routes",
    "args": [],
    "select": {
      "page_size": 25,
      "after": "01FCNDV6P870EA6S7TK1DSYDG0"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_routes": [
        {
          "enabled": false,
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Production incidents"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_route",
    "accessor": "AlertRoute",
    "op": "list",
    "method": "GET",
    "path": "/v3/alert_routes",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_routes": [
        {
          "enabled": false,
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Production incidents"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_source",
    "accessor": "AlertSource",
    "op": "create",
    "method": "POST",
    "path": "/v2/alert_sources",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_source": {
        "alert_events_url": "https://api.incident.io/v2/alert_events/http/01GW2G3V0S59R238FAHPDS1R66",
        "auto_resolve_incident_alerts": false,
        "auto_resolve_timeout_minutes": 1,
        "azure_devops_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "ba038695-f5f7-4490-a9ea-bf4ab3cbf483"
          ]
        },
        "email_options": {
          "email_address": "lawrence@example.com",
          "redactions": [
            "credit_card_numbers"
          ],
          "transform_expression": "return {\n  title: $.subject,\n  description: $.text,\n  status: $.subject.startsWith('[RESOLVED]') ? 'resolved' : 'firing',\n  deduplication_key: $.header_message_id,\n}"
        },
        "filter_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "fixed_team_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "heartbeat_options": {
          "failure_threshold": 1,
          "grace_period_seconds": 0,
          "interval_seconds": 60,
          "ping_url": "https://api.incident.io/v2/heartbeat/01GW2G3V0S59R238FAHPDS1R66/ping"
        },
        "http_custom_options": {
          "deduplication_key_path": "$.alert_id",
          "transform_expression": "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}"
        },
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "jira_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "10043"
          ]
        },
        "name": "Production Web Dashboard Alerts",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rate_limit_sharding": {
          "rate_limit_shard_key_path": "$.priority"
        },
        "secret_token": "some-secret-token",
        "source_type": "alertmanager",
        "template": {
          "attributes": [
            {
              "alert_attribute_id": "abc123",
              "binding": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "merge_strategy": "first_wins",
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            }
          ],
          "description": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "is_private": false,
          "title": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "visible_to_teams": {
            "array_value": [
              {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            ],
            "value": {
              "label": "Lawrence Jones",
              "literal": "SEV123",
              "reference": "incident.severity"
            }
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_source",
    "accessor": "AlertSource",
    "op": "list",
    "method": "GET",
    "path": "/v2/alert_sources",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_sources": [
        {
          "alert_events_url": "https://api.incident.io/v2/alert_events/http/01GW2G3V0S59R238FAHPDS1R66",
          "auto_resolve_incident_alerts": false,
          "auto_resolve_timeout_minutes": 1,
          "azure_devops_options": {
            "project_ids": [
              "01GBSQF3FHF7FWZQNWGHAVQ804",
              "ba038695-f5f7-4490-a9ea-bf4ab3cbf483"
            ]
          },
          "email_options": {
            "email_address": "lawrence@example.com",
            "redactions": [
              "credit_card_numbers"
            ],
            "transform_expression": "return {\n  title: $.subject,\n  description: $.text,\n  status: $.subject.startsWith('[RESOLVED]') ? 'resolved' : 'firing',\n  deduplication_key: $.header_message_id,\n}"
          },
          "filter_condition_groups": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "fixed_team_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "heartbeat_options": {
            "failure_threshold": 1,
            "grace_period_seconds": 0,
            "interval_seconds": 60,
            "ping_url": "https://api.incident.io/v2/heartbeat/01GW2G3V0S59R238FAHPDS1R66/ping"
          },
          "http_custom_options": {
            "deduplication_key_path": "$.alert_id",
            "transform_expression": "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}"
          },
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "jira_options": {
            "project_ids": [
              "01GBSQF3FHF7FWZQNWGHAVQ804",
              "10043"
            ]
          },
          "name": "Production Web Dashboard Alerts",
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "rate_limit_sharding": {
            "rate_limit_shard_key_path": "$.priority"
          },
          "secret_token": "some-secret-token",
          "source_type": "alertmanager",
          "template": {
            "attributes": [
              {
                "alert_attribute_id": "abc123",
                "binding": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "merge_strategy": "first_wins",
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              }
            ],
            "description": {
              "label": "Lawrence Jones",
              "literal": "SEV123",
              "reference": "incident.severity"
            },
            "expressions": [
              {
                "else_branch": {
                  "result": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                },
                "label": "Team Slack channel",
                "operations": [
                  {
                    "branches": {
                      "branches": null,
                      "returns": null
                    },
                    "cast": {
                      "returns": null
                    },
                    "concatenate": {
                      "reference": "1235",
                      "reference_label": "Teams"
                    },
                    "filter": {
                      "condition_groups": null
                    },
                    "navigate": {
                      "reference": "1235",
                      "reference_label": "Teams"
                    },
                    "operation_type": "navigate",
                    "parse": {
                      "returns": null,
                      "source": "metadata.annotations[\"github.com/repo\"]"
                    },
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  }
                ],
                "reference": "abc123",
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                },
                "root_reference": "incident.status"
              }
            ],
            "is_private": false,
            "title": {
              "label": "Lawrence Jones",
              "literal": "SEV123",
              "reference": "incident.severity"
            },
            "visible_to_teams": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "alert_source",
    "accessor": "AlertSource",
    "op": "load",
    "method": "GET",
    "path": "/v2/alert_sources/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_source": {
        "alert_events_url": "https://api.incident.io/v2/alert_events/http/01GW2G3V0S59R238FAHPDS1R66",
        "auto_resolve_incident_alerts": false,
        "auto_resolve_timeout_minutes": 1,
        "azure_devops_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "ba038695-f5f7-4490-a9ea-bf4ab3cbf483"
          ]
        },
        "email_options": {
          "email_address": "lawrence@example.com",
          "redactions": [
            "credit_card_numbers"
          ],
          "transform_expression": "return {\n  title: $.subject,\n  description: $.text,\n  status: $.subject.startsWith('[RESOLVED]') ? 'resolved' : 'firing',\n  deduplication_key: $.header_message_id,\n}"
        },
        "filter_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "fixed_team_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "heartbeat_options": {
          "failure_threshold": 1,
          "grace_period_seconds": 0,
          "interval_seconds": 60,
          "ping_url": "https://api.incident.io/v2/heartbeat/01GW2G3V0S59R238FAHPDS1R66/ping"
        },
        "http_custom_options": {
          "deduplication_key_path": "$.alert_id",
          "transform_expression": "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}"
        },
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "jira_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "10043"
          ]
        },
        "name": "Production Web Dashboard Alerts",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rate_limit_sharding": {
          "rate_limit_shard_key_path": "$.priority"
        },
        "secret_token": "some-secret-token",
        "source_type": "alertmanager",
        "template": {
          "attributes": [
            {
              "alert_attribute_id": "abc123",
              "binding": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "merge_strategy": "first_wins",
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            }
          ],
          "description": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "is_private": false,
          "title": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "visible_to_teams": {
            "array_value": [
              {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            ],
            "value": {
              "label": "Lawrence Jones",
              "literal": "SEV123",
              "reference": "incident.severity"
            }
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_source",
    "accessor": "AlertSource",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/alert_sources/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "alert_source",
    "accessor": "AlertSource",
    "op": "update",
    "method": "PUT",
    "path": "/v2/alert_sources/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GW2G3V0S59R238FAHPDS1R66"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_source": {
        "alert_events_url": "https://api.incident.io/v2/alert_events/http/01GW2G3V0S59R238FAHPDS1R66",
        "auto_resolve_incident_alerts": false,
        "auto_resolve_timeout_minutes": 1,
        "azure_devops_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "ba038695-f5f7-4490-a9ea-bf4ab3cbf483"
          ]
        },
        "email_options": {
          "email_address": "lawrence@example.com",
          "redactions": [
            "credit_card_numbers"
          ],
          "transform_expression": "return {\n  title: $.subject,\n  description: $.text,\n  status: $.subject.startsWith('[RESOLVED]') ? 'resolved' : 'firing',\n  deduplication_key: $.header_message_id,\n}"
        },
        "filter_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "fixed_team_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "heartbeat_options": {
          "failure_threshold": 1,
          "grace_period_seconds": 0,
          "interval_seconds": 60,
          "ping_url": "https://api.incident.io/v2/heartbeat/01GW2G3V0S59R238FAHPDS1R66/ping"
        },
        "http_custom_options": {
          "deduplication_key_path": "$.alert_id",
          "transform_expression": "return {\n  title: $.title || $.name || 'Unknown Alert',\n  status: $.status === 'resolved' ? 'resolved' : 'firing',\n  description: $.description || $.message || '',\n  sourceURL: $.url || $.link || '',\n  metadata: { team: $.team, severity: $.severity }\n}"
        },
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "jira_options": {
          "project_ids": [
            "01GBSQF3FHF7FWZQNWGHAVQ804",
            "10043"
          ]
        },
        "name": "Production Web Dashboard Alerts",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rate_limit_sharding": {
          "rate_limit_shard_key_path": "$.priority"
        },
        "secret_token": "some-secret-token",
        "source_type": "alertmanager",
        "template": {
          "attributes": [
            {
              "alert_attribute_id": "abc123",
              "binding": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "merge_strategy": "first_wins",
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            }
          ],
          "description": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "is_private": false,
          "title": {
            "label": "Lawrence Jones",
            "literal": "SEV123",
            "reference": "incident.severity"
          },
          "visible_to_teams": {
            "array_value": [
              {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            ],
            "value": {
              "label": "Lawrence Jones",
              "literal": "SEV123",
              "reference": "incident.severity"
            }
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "alert_sources_v2",
    "accessor": "AlertSourcesV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/alert_sources/actions/validate",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "alert_tag",
    "accessor": "AlertTag",
    "op": "list",
    "method": "GET",
    "path": "/v2/alert_tags",
    "args": [],
    "select": {
      "after": "01GW2G3V0S59R238FAHPDS1R66",
      "page_size": 25,
      "search": "noisy"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "search"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "search",
        "wire": "search"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert_tags": [
        {
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "name": "noisy"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_add_tags_result_v2",
    "accessor": "AlertsAddTagsResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/alerts/{id}/actions/add_tags",
    "args": [
      {
        "name": "alert_id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert": {
        "alert_group_ids": [
          "01GW2G3V0S59R238FAHPDS1R66"
        ],
        "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
        "attributes": [
          {
            "array_value": [
              {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            ],
            "attribute": {
              "array": false,
              "emoji": "fire",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "service",
              "required": false,
              "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
            },
            "value": {
              "catalog_entry": {
                "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Primary On-call"
              },
              "label": "Payments Team",
              "literal": "SEV123"
            }
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "deduplication_key": "4293868629",
        "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "resolved_at": "2021-08-17T14:28:57.801578Z",
        "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
        "status": "firing",
        "tags": [
          {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "name": "noisy"
          }
        ],
        "title": "*errors.withMessage: PG::Error failed to connect",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_remove_tags_result_v2",
    "accessor": "AlertsRemoveTagsResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/alerts/{id}/actions/remove_tags",
    "args": [
      {
        "name": "alert_id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert": {
        "alert_group_ids": [
          "01GW2G3V0S59R238FAHPDS1R66"
        ],
        "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
        "attributes": [
          {
            "array_value": [
              {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            ],
            "attribute": {
              "array": false,
              "emoji": "fire",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "service",
              "required": false,
              "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
            },
            "value": {
              "catalog_entry": {
                "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Primary On-call"
              },
              "label": "Payments Team",
              "literal": "SEV123"
            }
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "deduplication_key": "4293868629",
        "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "resolved_at": "2021-08-17T14:28:57.801578Z",
        "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
        "status": "firing",
        "tags": [
          {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "name": "noisy"
          }
        ],
        "title": "*errors.withMessage: PG::Error failed to connect",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_set_tags_result_v2",
    "accessor": "AlertsSetTagsResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/alerts/{id}/actions/set_tags",
    "args": [
      {
        "name": "alert_id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "alert": {
        "alert_group_ids": [
          "01GW2G3V0S59R238FAHPDS1R66"
        ],
        "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
        "attributes": [
          {
            "array_value": [
              {
                "catalog_entry": {
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "label": "Payments Team",
                "literal": "SEV123"
              }
            ],
            "attribute": {
              "array": false,
              "emoji": "fire",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "name": "service",
              "required": false,
              "type": "CatalogEntry[\"01GW2G3V0S59R238FAHPDS1R67\"]"
            },
            "value": {
              "catalog_entry": {
                "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Primary On-call"
              },
              "label": "Payments Team",
              "literal": "SEV123"
            }
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "deduplication_key": "4293868629",
        "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "resolved_at": "2021-08-17T14:28:57.801578Z",
        "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
        "status": "firing",
        "tags": [
          {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "name": "noisy"
          }
        ],
        "title": "*errors.withMessage: PG::Error failed to connect",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_transition_incident_alert_result_v2",
    "accessor": "AlertsTransitionIncidentAlertResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/incident_alerts/{id}/actions/transition",
    "args": [
      {
        "name": "incident_alert_id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_alert": {
        "alert": {
          "alert_group_ids": [
            "01GW2G3V0S59R238FAHPDS1R66"
          ],
          "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "deduplication_key": "4293868629",
          "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "resolved_at": "2021-08-17T14:28:57.801578Z",
          "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
          "status": "firing",
          "title": "*errors.withMessage: PG::Error failed to connect",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "alert_route_id": "01GW2G3V0S59R238FAHPDS1R67",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "incident": {
          "external_id": 123,
          "id": "01FDAG4SAP5TYPT98WGR2N7W91",
          "name": "Our database is sad",
          "reference": "INC-123",
          "status_category": "triage",
          "summary": "Our database is really really sad, and we don't know why yet.",
          "visibility": "public"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_transition_incident_alert_result_v2",
    "accessor": "AlertsTransitionIncidentAlertResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/incident_alerts",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_alert": {
        "alert": {
          "alert_group_ids": [
            "01GW2G3V0S59R238FAHPDS1R66"
          ],
          "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "deduplication_key": "4293868629",
          "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "resolved_at": "2021-08-17T14:28:57.801578Z",
          "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
          "status": "firing",
          "title": "*errors.withMessage: PG::Error failed to connect",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "alert_route_id": "01GW2G3V0S59R238FAHPDS1R67",
        "id": "01GW2G3V0S59R238FAHPDS1R66",
        "incident": {
          "external_id": 123,
          "id": "01FDAG4SAP5TYPT98WGR2N7W91",
          "name": "Our database is sad",
          "reference": "INC-123",
          "status_category": "triage",
          "summary": "Our database is really really sad, and we don't know why yet.",
          "visibility": "public"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "alerts_transition_incident_alert_result_v2",
    "accessor": "AlertsTransitionIncidentAlertResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_alerts",
    "args": [],
    "select": {
      "page_size": 25,
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "alert_id": "01FCNDV6P870EA6S7TK1DSYDG1",
      "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "alert_id",
      "incident_id"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "alert_id",
        "wire": "alert_id"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_alerts": [
        {
          "alert": {
            "alert_group_ids": [
              "01GW2G3V0S59R238FAHPDS1R66"
            ],
            "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
            "created_at": "2021-08-17T13:28:57.801578Z",
            "deduplication_key": "4293868629",
            "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "resolved_at": "2021-08-17T14:28:57.801578Z",
            "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
            "status": "firing",
            "title": "*errors.withMessage: PG::Error failed to connect",
            "updated_at": "2021-08-17T13:28:57.801578Z"
          },
          "alert_route_id": "01GW2G3V0S59R238FAHPDS1R67",
          "id": "01GW2G3V0S59R238FAHPDS1R66",
          "incident": {
            "external_id": 123,
            "id": "01FDAG4SAP5TYPT98WGR2N7W91",
            "name": "Our database is sad",
            "reference": "INC-123",
            "status_category": "triage",
            "summary": "Our database is really really sad, and we don't know why yet.",
            "visibility": "public"
          }
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_rule",
    "accessor": "AnnouncementRule",
    "op": "create",
    "method": "POST",
    "path": "/v2/announcement_rules",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "announcement_rule": {
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "conditions_no_longer_apply_behaviour": "leave_in_place",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "microsoft_teams_channel_ids": [
          "19:abc@thread.tacv2/19:def@thread.tacv2"
        ],
        "mode": "live_and_closed",
        "name": "Data Breaches",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "all",
        "slack_channel_ids": [
          "C02AW36C1M5"
        ],
        "template_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "update_sharing_mode": "none",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_rule",
    "accessor": "AnnouncementRule",
    "op": "list",
    "method": "GET",
    "path": "/v2/announcement_rules",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_rules": [
        {
          "condition_groups": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "conditions_no_longer_apply_behaviour": "leave_in_place",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "microsoft_teams_channel_ids": [
            "19:abc@thread.tacv2/19:def@thread.tacv2"
          ],
          "mode": "live_and_closed",
          "name": "Data Breaches",
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "private_incident_scope": "all",
          "slack_channel_ids": [
            "C02AW36C1M5"
          ],
          "template_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "update_sharing_mode": "none",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_rule",
    "accessor": "AnnouncementRule",
    "op": "load",
    "method": "GET",
    "path": "/v2/announcement_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_rule": {
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "conditions_no_longer_apply_behaviour": "leave_in_place",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "microsoft_teams_channel_ids": [
          "19:abc@thread.tacv2/19:def@thread.tacv2"
        ],
        "mode": "live_and_closed",
        "name": "Data Breaches",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "all",
        "slack_channel_ids": [
          "C02AW36C1M5"
        ],
        "template_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "update_sharing_mode": "none",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_rule",
    "accessor": "AnnouncementRule",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/announcement_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "announcement_rule",
    "accessor": "AnnouncementRule",
    "op": "update",
    "method": "PUT",
    "path": "/v2/announcement_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_rule": {
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "conditions_no_longer_apply_behaviour": "leave_in_place",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "microsoft_teams_channel_ids": [
          "19:abc@thread.tacv2/19:def@thread.tacv2"
        ],
        "mode": "live_and_closed",
        "name": "Data Breaches",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "all",
        "slack_channel_ids": [
          "C02AW36C1M5"
        ],
        "template_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "update_sharing_mode": "none",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_template",
    "accessor": "AnnouncementTemplate",
    "op": "create",
    "method": "POST",
    "path": "/v2/announcement_templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "announcement_template": {
        "actions": [
          {
            "action_type": "announcement_post_actions_homepage",
            "emoji": "slack",
            "rank": 1,
            "title": "Join channel"
          }
        ],
        "fields": [
          {
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "emoji": "fire",
            "field_type": "announcement_post_fields_status",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "rank": 1,
            "rich_text": {
              "contents": "If you work on **payments**, please join {{incident.reference}}",
              "type": "markdown"
            },
            "title": "Severity"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_default": false,
        "name": "Major incidents",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_template",
    "accessor": "AnnouncementTemplate",
    "op": "list",
    "method": "GET",
    "path": "/v2/announcement_templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_templates": [
        {
          "actions": [
            {
              "action_type": "announcement_post_actions_homepage",
              "emoji": "slack",
              "rank": 1,
              "title": "Join channel"
            }
          ],
          "fields": [
            {
              "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "emoji": "fire",
              "field_type": "announcement_post_fields_status",
              "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "rank": 1,
              "rich_text": {
                "contents": "If you work on **payments**, please join {{incident.reference}}",
                "type": "markdown"
              },
              "title": "Severity"
            }
          ],
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "is_default": false,
          "name": "Major incidents",
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "announcement_template",
    "accessor": "AnnouncementTemplate",
    "op": "load",
    "method": "GET",
    "path": "/v2/announcement_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_template": {
        "actions": [
          {
            "action_type": "announcement_post_actions_homepage",
            "emoji": "slack",
            "rank": 1,
            "title": "Join channel"
          }
        ],
        "fields": [
          {
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "emoji": "fire",
            "field_type": "announcement_post_fields_status",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "rank": 1,
            "rich_text": {
              "contents": "If you work on **payments**, please join {{incident.reference}}",
              "type": "markdown"
            },
            "title": "Severity"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_default": false,
        "name": "Major incidents",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "announcement_template",
    "accessor": "AnnouncementTemplate",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/announcement_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "announcement_template",
    "accessor": "AnnouncementTemplate",
    "op": "update",
    "method": "PUT",
    "path": "/v2/announcement_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "announcement_template": {
        "actions": [
          {
            "action_type": "announcement_post_actions_homepage",
            "emoji": "slack",
            "rank": 1,
            "title": "Join channel"
          }
        ],
        "fields": [
          {
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "emoji": "fire",
            "field_type": "announcement_post_fields_status",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "rank": 1,
            "rich_text": {
              "contents": "If you work on **payments**, please join {{incident.reference}}",
              "type": "markdown"
            },
            "title": "Severity"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_default": false,
        "name": "Major incidents",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "create",
    "method": "POST",
    "path": "/v1/api_keys/{id}/actions/rotate",
    "action": "action_rotate",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "api_key": {
        "comments": "Requested in https://example.slack.com/archives/C123/p456",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_used_at": "2021-08-17T13:28:57.801578Z",
        "name": "My test API key",
        "roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "viewer"
          }
        ],
        "team_ids": [
          "abc123"
        ],
        "team_roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "catalog_editor"
          }
        ],
        "token_last_issued_at": "2021-08-17T13:28:57.801578Z"
      },
      "token": "inc_EXAMPLE_KEY_REDACTED"
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "create",
    "method": "POST",
    "path": "/v1/api_keys",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "api_key": {
        "comments": "Requested in https://example.slack.com/archives/C123/p456",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_used_at": "2021-08-17T13:28:57.801578Z",
        "name": "My test API key",
        "roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "viewer"
          }
        ],
        "team_ids": [
          "abc123"
        ],
        "team_roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "catalog_editor"
          }
        ],
        "token_last_issued_at": "2021-08-17T13:28:57.801578Z"
      },
      "token": "inc_EXAMPLE_KEY_REDACTED"
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "list",
    "method": "GET",
    "path": "/v1/api_keys",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "api_keys": [
        {
          "comments": "Requested in https://example.slack.com/archives/C123/p456",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "creator": {
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "viewer",
              "slack_user_id": "U02AYNF2XJM"
            }
          },
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "last_used_at": "2021-08-17T13:28:57.801578Z",
          "name": "My test API key",
          "roles": [
            {
              "description": "can view data, like public incidents and organization settings",
              "name": "viewer"
            }
          ],
          "team_ids": [
            "abc123"
          ],
          "team_roles": [
            {
              "description": "can view data, like public incidents and organization settings",
              "name": "catalog_editor"
            }
          ],
          "token_last_issued_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "load",
    "method": "GET",
    "path": "/v1/api_keys/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "api_key": {
        "comments": "Requested in https://example.slack.com/archives/C123/p456",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_used_at": "2021-08-17T13:28:57.801578Z",
        "name": "My test API key",
        "roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "viewer"
          }
        ],
        "team_ids": [
          "abc123"
        ],
        "team_roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "catalog_editor"
          }
        ],
        "token_last_issued_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/api_keys/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "api_key",
    "accessor": "ApiKey",
    "op": "update",
    "method": "PUT",
    "path": "/v1/api_keys/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "api_key": {
        "comments": "Requested in https://example.slack.com/archives/C123/p456",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_used_at": "2021-08-17T13:28:57.801578Z",
        "name": "My test API key",
        "roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "viewer"
          }
        ],
        "team_ids": [
          "abc123"
        ],
        "team_roles": [
          {
            "description": "can view data, like public incidents and organization settings",
            "name": "catalog_editor"
          }
        ],
        "token_last_issued_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_route",
    "accessor": "CallRoute",
    "op": "list",
    "method": "GET",
    "path": "/v2/call_routes",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "call_routes": [
        {
          "allowed_callers": [
            {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Regulator duty desk",
              "phone_number": "+15551234567"
            }
          ],
          "country_code": "US",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "current_state": "active",
          "custom_language": "en-US",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Regulator urgent request",
          "options": [
            {
              "digit": "1",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "path": [
                {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "level": {
                    "targets": [
                      null
                    ]
                  },
                  "type": "level",
                  "voicemail": {
                    "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
                  }
                }
              ],
              "prompt": "For an urgent production outage, press 1"
            }
          ],
          "path": [
            {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "level": {
                "targets": [
                  {
                    "id": "lawrencejones",
                    "schedule_mode": "currently_on_call",
                    "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "type": "schedule",
                    "urgency": "high"
                  }
                ]
              },
              "type": "level",
              "voicemail": {
                "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
              }
            }
          ],
          "phone_number": "+15551234567",
          "phone_number_type": "toll_free",
          "responder_caller_id": "route_number",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "use_caller_allowlist": true
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_route",
    "accessor": "CallRoute",
    "op": "load",
    "method": "GET",
    "path": "/v2/call_routes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "call_route": {
        "allowed_callers": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Regulator duty desk",
            "phone_number": "+15551234567"
          }
        ],
        "country_code": "US",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "current_state": "active",
        "custom_language": "en-US",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Regulator urgent request",
        "options": [
          {
            "digit": "1",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "path": [
              {
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "level": {
                  "targets": [
                    {
                      "id": "lawrencejones",
                      "schedule_mode": "currently_on_call",
                      "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "type": "schedule",
                      "urgency": "high"
                    }
                  ]
                },
                "type": "level",
                "voicemail": {
                  "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
                }
              }
            ],
            "prompt": "For an urgent production outage, press 1"
          }
        ],
        "path": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "level": {
              "targets": [
                {
                  "id": "lawrencejones",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ]
            },
            "type": "level",
            "voicemail": {
              "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
            }
          }
        ],
        "phone_number": "+15551234567",
        "phone_number_type": "toll_free",
        "responder_caller_id": "route_number",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "use_caller_allowlist": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_route",
    "accessor": "CallRoute",
    "op": "update",
    "method": "PUT",
    "path": "/v2/call_routes/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "call_route": {
        "allowed_callers": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Regulator duty desk",
            "phone_number": "+15551234567"
          }
        ],
        "country_code": "US",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "current_state": "active",
        "custom_language": "en-US",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Regulator urgent request",
        "options": [
          {
            "digit": "1",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "path": [
              {
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "level": {
                  "targets": [
                    {
                      "id": "lawrencejones",
                      "schedule_mode": "currently_on_call",
                      "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                      "type": "schedule",
                      "urgency": "high"
                    }
                  ]
                },
                "type": "level",
                "voicemail": {
                  "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
                }
              }
            ],
            "prompt": "For an urgent production outage, press 1"
          }
        ],
        "path": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "level": {
              "targets": [
                {
                  "id": "lawrencejones",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ]
            },
            "type": "level",
            "voicemail": {
              "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
            }
          }
        ],
        "phone_number": "+15551234567",
        "phone_number_type": "toll_free",
        "responder_caller_id": "route_number",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "use_caller_allowlist": true
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_create_allowed_caller_result_v2",
    "accessor": "CallRoutesCreateAllowedCallerResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/call_routes/{call_route_id}/allowed_callers",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "allowed_caller": {
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Regulator duty desk",
        "phone_number": "+15551234567"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_create_option_result_v2",
    "accessor": "CallRoutesCreateOptionResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/call_routes/{call_route_id}/options",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "option": {
        "digit": "1",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "path": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "level": {
              "targets": [
                {
                  "id": "lawrencejones",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ]
            },
            "type": "level",
            "voicemail": {
              "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
            }
          }
        ],
        "prompt": "For an urgent production outage, press 1"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_list_allowed_callers_result_v2",
    "accessor": "CallRoutesListAllowedCallersResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/call_routes/{call_route_id}/allowed_callers",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "allowed_callers": [
        {
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Regulator duty desk",
          "phone_number": "+15551234567"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_list_options_result_v2",
    "accessor": "CallRoutesListOptionsResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/call_routes/{call_route_id}/options",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "options": [
        {
          "digit": "1",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "path": [
            {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "level": {
                "targets": [
                  {
                    "id": "lawrencejones",
                    "schedule_mode": "currently_on_call",
                    "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "type": "schedule",
                    "urgency": "high"
                  }
                ]
              },
              "type": "level",
              "voicemail": {
                "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
              }
            }
          ],
          "prompt": "For an urgent production outage, press 1"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_show_allowed_caller_result_v2",
    "accessor": "CallRoutesShowAllowedCallerResultV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/call_routes/{call_route_id}/allowed_callers/{id}",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "allowed_caller": {
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Regulator duty desk",
        "phone_number": "+15551234567"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_show_option_result_v2",
    "accessor": "CallRoutesShowOptionResultV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/call_routes/{call_route_id}/options/{id}",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "option": {
        "digit": "1",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "path": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "level": {
              "targets": [
                {
                  "id": "lawrencejones",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ]
            },
            "type": "level",
            "voicemail": {
              "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
            }
          }
        ],
        "prompt": "For an urgent production outage, press 1"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_update_allowed_caller_result_v2",
    "accessor": "CallRoutesUpdateAllowedCallerResultV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/call_routes/{call_route_id}/allowed_callers/{id}",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "allowed_caller": {
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Regulator duty desk",
        "phone_number": "+15551234567"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_routes_update_option_result_v2",
    "accessor": "CallRoutesUpdateOptionResultV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/call_routes/{call_route_id}/options/{id}",
    "args": [
      {
        "name": "call_route_id",
        "wire": "call_route_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      },
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "option": {
        "digit": "1",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "path": [
          {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "level": {
              "targets": [
                {
                  "id": "lawrencejones",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ]
            },
            "type": "level",
            "voicemail": {
              "greeting_text": "Sorry, no one is available to take your call. Please leave a message after the tone. This call will be recorded."
            }
          }
        ],
        "prompt": "For an urgent production outage, press 1"
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_session",
    "accessor": "CallSession",
    "op": "list",
    "method": "GET",
    "path": "/v2/call_sessions",
    "args": [],
    "select": {
      "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "incident_id"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "call_sessions": [
        {
          "ended_at": "2021-08-17T14:28:57.801578Z",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "started_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "call_transcript_entry",
    "accessor": "CallTranscriptEntry",
    "op": "list",
    "method": "GET",
    "path": "/v2/call_transcript_entries",
    "args": [],
    "select": {
      "call_session_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "call_session_id"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "call_session_id",
        "wire": "call_session_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "call_transcript_entries": [
        {
          "content": "I think we should roll back the deploy.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "medium": "spoken",
          "participant_name": "Alice Smith",
          "timestamp": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "catalog_entry",
    "accessor": "CatalogEntry",
    "op": "list",
    "method": "GET",
    "path": "/v3/catalog_entries",
    "args": [],
    "select": {
      "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "identifier": "abc123"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "catalog_type_id",
      "page_size",
      "after",
      "identifier"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "catalog_type_id",
        "wire": "catalog_type_id"
      },
      {
        "name": "identifier",
        "wire": "identifier"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "catalog_entries": [
        {
          "aliases": [
            "lawrence@incident.io",
            "lawrence"
          ],
          "archived_at": "2021-08-17T14:28:57.801578Z",
          "attribute_values": {
            "abc123": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123"
              }
            }
          },
          "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Primary On-call",
          "rank": 3,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "catalog_type": {
        "annotations": {
          "incident.io/catalog-importer/id": "id-of-config"
        },
        "categories": [
          "customer"
        ],
        "color": "yellow",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Represents Kubernetes clusters that we run inside of GKE.",
        "dynamic_resource_parameter": "abc123",
        "engine_resource_type": "CatalogEntry[\"PagerDutyService\"]",
        "estimated_count": 7,
        "icon": "alert",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_editable": false,
        "is_team_type": false,
        "last_synced_at": "2021-08-17T13:28:57.801578Z",
        "name": "Kubernetes Cluster",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "ranked": true,
        "registry_type": "PagerDutyService",
        "required_integrations": [
          "pager_duty"
        ],
        "schema": {
          "attributes": [
            {
              "array": false,
              "backlink_attribute": "abc123",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "mode": "",
              "name": "tier",
              "path": [
                {
                  "attribute_id": "abc123",
                  "attribute_name": "abc123"
                }
              ],
              "type": "Custom[\"Service\"]"
            }
          ],
          "version": 1
        },
        "source_repo_url": "https://github.com/my-company/incident-io-catalog",
        "type_name": "Custom[\"BackstageGroup\"]",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "use_name_as_identifier": true
      },
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25,
        "total_record_count": 238
      }
    },
    "idField": "id"
  },
  {
    "entity": "catalog_entry",
    "accessor": "CatalogEntry",
    "op": "list",
    "method": "GET",
    "path": "/v2/catalog_entries",
    "args": [],
    "select": {
      "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "after": "01FDAG4SAP5TYPT98WGR2N7W91"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "catalog_type_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "catalog_type_id",
        "wire": "catalog_type_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "catalog_entries": [
        {
          "aliases": [
            "lawrence@incident.io",
            "lawrence"
          ],
          "archived_at": "2021-08-17T14:28:57.801578Z",
          "attribute_values": {
            "abc123": {
              "array_value": [
                {
                  "catalog_entry": {
                    "archived_at": "2021-08-17T14:28:57.801578Z",
                    "catalog_entry_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "catalog_entry_name": "Primary escalation",
                    "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0"
                  },
                  "helptext": "abc123",
                  "image_url": "abc123",
                  "is_image_slack_icon": false,
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity",
                  "sort_key": "abc123",
                  "unavailable": false,
                  "value": "abc123"
                }
              ],
              "value": {
                "catalog_entry": {
                  "archived_at": "2021-08-17T14:28:57.801578Z",
                  "catalog_entry_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "catalog_entry_name": "Primary escalation",
                  "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0"
                },
                "helptext": "abc123",
                "image_url": "abc123",
                "is_image_slack_icon": false,
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity",
                "sort_key": "abc123",
                "unavailable": false,
                "value": "abc123"
              }
            }
          },
          "catalog_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Primary On-call",
          "rank": 3,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "catalog_type": {
        "annotations": {
          "incident.io/catalog-importer/id": "id-of-config"
        },
        "categories": [
          "customer"
        ],
        "color": "yellow",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Represents Kubernetes clusters that we run inside of GKE.",
        "dynamic_resource_parameter": "abc123",
        "estimated_count": 7,
        "icon": "alert",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_editable": false,
        "last_synced_at": "2021-08-17T13:28:57.801578Z",
        "name": "Kubernetes Cluster",
        "ranked": true,
        "registry_type": "PagerDutyService",
        "required_integrations": [
          "pager_duty"
        ],
        "schema": {
          "attributes": [
            {
              "array": false,
              "backlink_attribute": "abc123",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "mode": "",
              "name": "tier",
              "path": [
                {
                  "attribute_id": "abc123",
                  "attribute_name": "abc123"
                }
              ],
              "type": "Custom[\"Service\"]"
            }
          ],
          "version": 1
        },
        "semantic_type": "abc123",
        "source_repo_url": "https://github.com/my-company/incident-io-catalog",
        "type_name": "Custom[\"BackstageGroup\"]",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      },
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "custom_field_option",
    "accessor": "CustomFieldOption",
    "op": "create",
    "method": "POST",
    "path": "/v1/custom_field_options",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "custom_field_option": {
        "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "sort_key": 10,
        "value": "Product"
      }
    },
    "idField": "id"
  },
  {
    "entity": "custom_field_option",
    "accessor": "CustomFieldOption",
    "op": "list",
    "method": "GET",
    "path": "/v1/custom_field_options",
    "args": [],
    "select": {
      "custom_field_id": "01FCNDV6P870EA6S7TK1DSYD5H",
      "after": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "custom_field_id"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "custom_field_id",
        "wire": "custom_field_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "custom_field_options": [
        {
          "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "sort_key": 10,
          "value": "Product"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "custom_field_option",
    "accessor": "CustomFieldOption",
    "op": "load",
    "method": "GET",
    "path": "/v1/custom_field_options/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "custom_field_option": {
        "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "sort_key": 10,
        "value": "Product"
      }
    },
    "idField": "id"
  },
  {
    "entity": "custom_field_option",
    "accessor": "CustomFieldOption",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/custom_field_options/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "custom_field_option",
    "accessor": "CustomFieldOption",
    "op": "update",
    "method": "PUT",
    "path": "/v1/custom_field_options/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "custom_field_option": {
        "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "sort_key": 10,
        "value": "Product"
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation",
    "accessor": "Escalation",
    "op": "create",
    "method": "POST",
    "path": "/v2/escalations",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "escalation": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Database CPU has been above 90% for 5 minutes",
        "escalation_path_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "events": [
          {
            "channels": [
              {
                "microsoft_teams_channel_id": "abc123",
                "microsoft_teams_team_id": "abc123",
                "slack_channel_id": "abc123",
                "slack_team_id": "abc123"
              }
            ],
            "event": "entered_grace_period",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "occurred_at": "2021-08-17T13:28:57.801578Z",
            "urgency": "high",
            "users": [
              {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              }
            ]
          }
        ],
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "priority": {
          "name": "P1"
        },
        "related_alerts": [
          {
            "alert_group_ids": [
              "01GW2G3V0S59R238FAHPDS1R66"
            ],
            "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
            "created_at": "2021-08-17T13:28:57.801578Z",
            "deduplication_key": "4293868629",
            "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "resolved_at": "2021-08-17T14:28:57.801578Z",
            "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
            "status": "firing",
            "title": "*errors.withMessage: PG::Error failed to connect",
            "updated_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "related_incidents": [
          {
            "external_id": 123,
            "id": "01FDAG4SAP5TYPT98WGR2N7W91",
            "name": "Our database is sad",
            "reference": "INC-123",
            "status_category": "triage",
            "summary": "Our database is really really sad, and we don't know why yet.",
            "visibility": "public"
          }
        ],
        "status": "pending",
        "title": "Database CPU is high",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation",
    "accessor": "Escalation",
    "op": "list",
    "method": "GET",
    "path": "/v2/escalations",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "alert": "v1",
      "created_at": "v1",
      "escalation_path": "v1",
      "idempotency_key": "v1",
      "incident": "v1",
      "page_size": 25,
      "status": "v1",
      "updated_at": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "escalation_path",
      "status",
      "alert",
      "incident",
      "created_at",
      "updated_at",
      "idempotency_key"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "alert",
        "wire": "alert"
      },
      {
        "name": "created_at",
        "wire": "created_at"
      },
      {
        "name": "escalation_path",
        "wire": "escalation_path"
      },
      {
        "name": "idempotency_key",
        "wire": "idempotency_key"
      },
      {
        "name": "incident",
        "wire": "incident"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "status",
        "wire": "status"
      },
      {
        "name": "updated_at",
        "wire": "updated_at"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "escalations": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "creator": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "description": "Database CPU has been above 90% for 5 minutes",
          "escalation_path_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "events": [
            {
              "channels": [
                {
                  "microsoft_teams_channel_id": "abc123",
                  "microsoft_teams_team_id": "abc123",
                  "slack_channel_id": "abc123",
                  "slack_team_id": "abc123"
                }
              ],
              "event": "entered_grace_period",
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "occurred_at": "2021-08-17T13:28:57.801578Z",
              "urgency": "high",
              "users": [
                {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                }
              ]
            }
          ],
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "priority": {
            "name": "P1"
          },
          "related_alerts": [
            {
              "alert_group_ids": [
                "01GW2G3V0S59R238FAHPDS1R66"
              ],
              "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
              "created_at": "2021-08-17T13:28:57.801578Z",
              "deduplication_key": "4293868629",
              "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "resolved_at": "2021-08-17T14:28:57.801578Z",
              "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
              "status": "firing",
              "title": "*errors.withMessage: PG::Error failed to connect",
              "updated_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "related_incidents": [
            {
              "external_id": 123,
              "id": "01FDAG4SAP5TYPT98WGR2N7W91",
              "name": "Our database is sad",
              "reference": "INC-123",
              "status_category": "triage",
              "summary": "Our database is really really sad, and we don't know why yet.",
              "visibility": "public"
            }
          ],
          "status": "pending",
          "title": "Database CPU is high",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation",
    "accessor": "Escalation",
    "op": "load",
    "method": "GET",
    "path": "/v2/escalations/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "escalation": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Database CPU has been above 90% for 5 minutes",
        "escalation_path_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "events": [
          {
            "channels": [
              {
                "microsoft_teams_channel_id": "abc123",
                "microsoft_teams_team_id": "abc123",
                "slack_channel_id": "abc123",
                "slack_team_id": "abc123"
              }
            ],
            "event": "entered_grace_period",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "occurred_at": "2021-08-17T13:28:57.801578Z",
            "urgency": "high",
            "users": [
              {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              }
            ]
          }
        ],
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "priority": {
          "name": "P1"
        },
        "related_alerts": [
          {
            "alert_group_ids": [
              "01GW2G3V0S59R238FAHPDS1R66"
            ],
            "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
            "created_at": "2021-08-17T13:28:57.801578Z",
            "deduplication_key": "4293868629",
            "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "resolved_at": "2021-08-17T14:28:57.801578Z",
            "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
            "status": "firing",
            "title": "*errors.withMessage: PG::Error failed to connect",
            "updated_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "related_incidents": [
          {
            "external_id": 123,
            "id": "01FDAG4SAP5TYPT98WGR2N7W91",
            "name": "Our database is sad",
            "reference": "INC-123",
            "status_category": "triage",
            "summary": "Our database is really really sad, and we don't know why yet.",
            "visibility": "public"
          }
        ],
        "status": "pending",
        "title": "Database CPU is high",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation_path_template",
    "accessor": "EscalationPathTemplate",
    "op": "create",
    "method": "POST",
    "path": "/v2/escalation_path_templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "escalation_path_template": {
        "description": "abc123",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "has_historical_escalation_path_versions": false,
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Team on-call",
        "params": [
          {
            "allowed_value_types": [
              "literal"
            ],
            "array": true,
            "default_value": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "What slack channel should we send the message to?",
            "label": "To date",
            "name": "severity",
            "optional": true,
            "type": "IncidentSeverity"
          }
        ],
        "path": [
          {
            "delay": {
              "delay_interval_condition": "active",
              "delay_seconds": 300,
              "delay_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "escalation_path": {
              "escalation_path_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "if_else": {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ],
              "else_path": [
                {}
              ],
              "then_path": [
                {}
              ]
            },
            "level": {
              "ack_mode": "all",
              "retry_config": {
                "attempts": 3,
                "interval_seconds": 300
              },
              "round_robin_config": {
                "enabled": false,
                "rotate_after_seconds": 120
              },
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "notify_channel": {
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "repeat": {
              "repeat_times": 3,
              "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "type": "if_else"
          }
        ],
        "repeat_config": {
          "delay_repeat_on_activity": false,
          "repeat_after_seconds": 1800
        },
        "working_hours": [
          {
            "id": "abc123",
            "name": "abc123",
            "timezone": "abc123",
            "weekday_intervals": [
              {
                "end_time": "17:00",
                "start_time": "09:00",
                "weekday": "monday"
              }
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation_path_template",
    "accessor": "EscalationPathTemplate",
    "op": "list",
    "method": "GET",
    "path": "/v2/escalation_path_templates",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25,
      "search": "Team on-call"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "search"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "search",
        "wire": "search"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "escalation_path_templates": [
        {
          "description": "abc123",
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "has_historical_escalation_path_versions": false,
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Team on-call",
          "params": [
            {
              "allowed_value_types": [
                "literal"
              ],
              "array": true,
              "default_value": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "description": "What slack channel should we send the message to?",
              "label": "To date",
              "name": "severity",
              "optional": true,
              "type": "IncidentSeverity"
            }
          ],
          "path": [
            {
              "delay": {
                "delay_interval_condition": "active",
                "delay_seconds": 300,
                "delay_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
              },
              "escalation_path": {
                "escalation_path_id": "01FCNDV6P870EA6S7TK1DSYDG0"
              },
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "if_else": {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Incident Severity",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "else_path": [
                  {}
                ],
                "then_path": [
                  {}
                ]
              },
              "level": {
                "ack_mode": "all",
                "retry_config": {
                  "attempts": 3,
                  "interval_seconds": 300
                },
                "round_robin_config": {
                  "enabled": false,
                  "rotate_after_seconds": 120
                },
                "targets": [
                  {
                    "binding": {
                      "array_value": null,
                      "value": null
                    },
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "schedule_mode": "currently_on_call",
                    "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "type": "schedule",
                    "urgency": "high"
                  }
                ],
                "time_to_ack_interval_condition": "active",
                "time_to_ack_seconds": 1800,
                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
              },
              "notify_channel": {
                "targets": [
                  {
                    "binding": {
                      "array_value": null,
                      "value": null
                    },
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "schedule_mode": "currently_on_call",
                    "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "type": "schedule",
                    "urgency": "high"
                  }
                ],
                "time_to_ack_interval_condition": "active",
                "time_to_ack_seconds": 1800,
                "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
              },
              "repeat": {
                "repeat_times": 3,
                "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"
              },
              "type": "if_else"
            }
          ],
          "repeat_config": {
            "delay_repeat_on_activity": false,
            "repeat_after_seconds": 1800
          },
          "working_hours": [
            {
              "id": "abc123",
              "name": "abc123",
              "timezone": "abc123",
              "weekday_intervals": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ]
            }
          ]
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation_path_template",
    "accessor": "EscalationPathTemplate",
    "op": "load",
    "method": "GET",
    "path": "/v2/escalation_path_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "escalation_path_template": {
        "description": "abc123",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "has_historical_escalation_path_versions": false,
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Team on-call",
        "params": [
          {
            "allowed_value_types": [
              "literal"
            ],
            "array": true,
            "default_value": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "What slack channel should we send the message to?",
            "label": "To date",
            "name": "severity",
            "optional": true,
            "type": "IncidentSeverity"
          }
        ],
        "path": [
          {
            "delay": {
              "delay_interval_condition": "active",
              "delay_seconds": 300,
              "delay_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "escalation_path": {
              "escalation_path_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "if_else": {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ],
              "else_path": [
                {}
              ],
              "then_path": [
                {}
              ]
            },
            "level": {
              "ack_mode": "all",
              "retry_config": {
                "attempts": 3,
                "interval_seconds": 300
              },
              "round_robin_config": {
                "enabled": false,
                "rotate_after_seconds": 120
              },
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "notify_channel": {
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "repeat": {
              "repeat_times": 3,
              "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "type": "if_else"
          }
        ],
        "repeat_config": {
          "delay_repeat_on_activity": false,
          "repeat_after_seconds": 1800
        },
        "working_hours": [
          {
            "id": "abc123",
            "name": "abc123",
            "timezone": "abc123",
            "weekday_intervals": [
              {
                "end_time": "17:00",
                "start_time": "09:00",
                "weekday": "monday"
              }
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalation_path_template",
    "accessor": "EscalationPathTemplate",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/escalation_path_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "escalation_path_template",
    "accessor": "EscalationPathTemplate",
    "op": "update",
    "method": "PUT",
    "path": "/v2/escalation_path_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "escalation_path_template": {
        "description": "abc123",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "has_historical_escalation_path_versions": false,
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Team on-call",
        "params": [
          {
            "allowed_value_types": [
              "literal"
            ],
            "array": true,
            "default_value": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "What slack channel should we send the message to?",
            "label": "To date",
            "name": "severity",
            "optional": true,
            "type": "IncidentSeverity"
          }
        ],
        "path": [
          {
            "delay": {
              "delay_interval_condition": "active",
              "delay_seconds": 300,
              "delay_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "escalation_path": {
              "escalation_path_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "if_else": {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ],
              "else_path": [
                {}
              ],
              "then_path": [
                {}
              ]
            },
            "level": {
              "ack_mode": "all",
              "retry_config": {
                "attempts": 3,
                "interval_seconds": 300
              },
              "round_robin_config": {
                "enabled": false,
                "rotate_after_seconds": 120
              },
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "notify_channel": {
              "targets": [
                {
                  "binding": {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  },
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "schedule_mode": "currently_on_call",
                  "selected_rota_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "type": "schedule",
                  "urgency": "high"
                }
              ],
              "time_to_ack_interval_condition": "active",
              "time_to_ack_seconds": 1800,
              "time_to_ack_weekday_interval_config_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "repeat": {
              "repeat_times": 3,
              "to_node": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "type": "if_else"
          }
        ],
        "repeat_config": {
          "delay_repeat_on_activity": false,
          "repeat_after_seconds": 1800
        },
        "working_hours": [
          {
            "id": "abc123",
            "name": "abc123",
            "timezone": "abc123",
            "weekday_intervals": [
              {
                "end_time": "17:00",
                "start_time": "09:00",
                "weekday": "monday"
              }
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "escalations_check_escalation_permissions_result_v2",
    "accessor": "EscalationsCheckEscalationPermissionsResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/escalations/{escalation_id}/actions/check_permissions",
    "args": [
      {
        "name": "escalation_id",
        "wire": "escalation_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "response_options": [
        {
          "available_actions": [
            "ack",
            "nack",
            "snooze"
          ],
          "user_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "escalations_reassign_escalation_result_v2",
    "accessor": "EscalationsReassignEscalationResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/escalations/{escalation_id}/actions/reassign",
    "args": [
      {
        "name": "escalation_id",
        "wire": "escalation_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "escalation": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Database CPU has been above 90% for 5 minutes",
        "escalation_path_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "events": [
          {
            "channels": [
              {
                "microsoft_teams_channel_id": "abc123",
                "microsoft_teams_team_id": "abc123",
                "slack_channel_id": "abc123",
                "slack_team_id": "abc123"
              }
            ],
            "event": "entered_grace_period",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "occurred_at": "2021-08-17T13:28:57.801578Z",
            "urgency": "high",
            "users": [
              {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              }
            ]
          }
        ],
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "priority": {
          "name": "P1"
        },
        "related_alerts": [
          {
            "alert_group_ids": [
              "01GW2G3V0S59R238FAHPDS1R66"
            ],
            "alert_source_id": "01GW2G3V0S59R238FAHPDS1R66",
            "created_at": "2021-08-17T13:28:57.801578Z",
            "deduplication_key": "4293868629",
            "description": "CPU on the payments service has exceeded 75 percent for 5 minutes",
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "resolved_at": "2021-08-17T14:28:57.801578Z",
            "source_url": "https://www.my-alerting-platform.com/alerts/my-alert-123",
            "status": "firing",
            "title": "*errors.withMessage: PG::Error failed to connect",
            "updated_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "related_incidents": [
          {
            "external_id": 123,
            "id": "01FDAG4SAP5TYPT98WGR2N7W91",
            "name": "Our database is sad",
            "reference": "INC-123",
            "status_category": "triage",
            "summary": "Our database is really really sad, and we don't know why yet.",
            "visibility": "public"
          }
        ],
        "status": "pending",
        "title": "Database CPU is high",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "follow_ups_connect_external_issue_result_v3",
    "accessor": "FollowUpsConnectExternalIssueResultV3",
    "op": "create",
    "method": "POST",
    "path": "/v3/follow_ups/{id}/actions/connect_external_issue",
    "args": [
      {
        "name": "follow_up_id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "follow_up": {
        "assignee": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "slack_user_id": "U02AYNF2XJM"
        },
        "assignee_team": {
          "id": "abc123",
          "name": "abc123"
        },
        "category": {
          "description": "Follow-ups related to infrastructure changes.",
          "id": "01GNW4BAQ7XRMFF6FHKNXDFPRW",
          "name": "Infrastructure",
          "rank": 10
        },
        "completed_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Call the fire brigade",
        "external_issue_reference": {
          "issue_name": "INC-123",
          "issue_permalink": "https://linear.app/incident-io/issue/INC-1609/find-copywriter-to-write-up",
          "provider": "asana"
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "labels": [
          "bug",
          "urgent"
        ],
        "priority": {
          "description": "A follow-up that requires immediate attention.",
          "id": "01GNW4BAQ7XRMFF6FHKNXDFPRW",
          "name": "Urgent",
          "rank": 10
        },
        "status": "outstanding",
        "title": "Cat is stuck in the tree",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "follow_ups_create_from_link_result_v3",
    "accessor": "FollowUpsCreateFromLinkResultV3",
    "op": "create",
    "method": "POST",
    "path": "/v3/follow_ups/actions/create_from_link",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "follow_up": {
        "assignee": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "slack_user_id": "U02AYNF2XJM"
        },
        "assignee_team": {
          "id": "abc123",
          "name": "abc123"
        },
        "category": {
          "description": "Follow-ups related to infrastructure changes.",
          "id": "01GNW4BAQ7XRMFF6FHKNXDFPRW",
          "name": "Infrastructure",
          "rank": 10
        },
        "completed_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Call the fire brigade",
        "external_issue_reference": {
          "issue_name": "INC-123",
          "issue_permalink": "https://linear.app/incident-io/issue/INC-1609/find-copywriter-to-write-up",
          "provider": "asana"
        },
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "labels": [
          "bug",
          "urgent"
        ],
        "priority": {
          "description": "A follow-up that requires immediate attention.",
          "id": "01GNW4BAQ7XRMFF6FHKNXDFPRW",
          "name": "Urgent",
          "rank": 10
        },
        "status": "outstanding",
        "title": "Cat is stuck in the tree",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "identity",
    "accessor": "Identity",
    "op": "load",
    "method": "GET",
    "path": "/v1/identity",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "identity": {
        "dashboard_url": "https://app.incident.io/my-org",
        "name": "Alertmanager token",
        "roles": [
          "viewer"
        ],
        "team_roles": [
          "catalog_editor"
        ],
        "teams": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Platform"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident",
    "accessor": "Incident",
    "op": "create",
    "method": "POST",
    "path": "/v2/incidents/{id}/actions/edit",
    "action": "action_edit",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G18REBY9AYH6CMWCJ2CVCYCH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident": {
        "call_url": "https://zoom.us/foo",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "custom_field_entries": [
          {
            "custom_field": {
              "description": "Which team is impacted by this issue",
              "field_type": "single_select",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Affected Team",
              "options": [
                {
                  "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "sort_key": 10,
                  "value": "Product"
                }
              ]
            },
            "values": [
              {
                "value_catalog_entry": {
                  "aliases": [
                    "lawrence@incident.io",
                    "lawrence"
                  ],
                  "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Primary On-call"
                },
                "value_link": "https://google.com/",
                "value_numeric": "123.456",
                "value_option": {
                  "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "sort_key": 10,
                  "value": "Product"
                },
                "value_text": "This is my text field, I hope you like it"
              }
            ]
          }
        ],
        "debriefs": [
          {
            "end_at": "2021-08-17T14:28:57.801578Z",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "duration_metrics": [
          {
            "duration_metric": {
              "id": "01FCNDV6P870EA6S7TK1DSYD5H",
              "name": "Lasted"
            },
            "status": "success",
            "value_seconds": 10800
          }
        ],
        "external_issue_reference": {
          "issue_name": "INC-123",
          "issue_permalink": "https://linear.app/incident-io/issue/INC-1609/find-copywriter-to-write-up",
          "provider": "asana"
        },
        "has_debrief": false,
        "id": "01FDAG4SAP5TYPT98WGR2N7W91",
        "incident_role_assignments": [
          {
            "assignee": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "role": {
              "created_at": "2021-08-17T13:28:57.801578Z",
              "description": "The person currently coordinating the incident",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "instructions": "Take point on the incident; Make sure people are clear on responsibilities",
              "name": "Incident Lead",
              "required": false,
              "role_type": "lead",
              "shortform": "lead",
              "updated_at": "2021-08-17T13:28:57.801578Z"
            }
          }
        ],
        "incident_status": {
          "category": "triage",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "name": "Closed",
          "rank": 4,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "incident_timestamp_values": [
          {
            "incident_timestamp": {
              "id": "01FCNDV6P870EA6S7TK1DSYD5H",
              "name": "Impact started",
              "rank": 1
            },
            "value": {
              "value": "2021-08-17T13:28:57.801578Z"
            }
          }
        ],
        "incident_type": {
          "create_in_triage": "always",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Customer facing production outages",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "is_default": false,
          "name": "Production Outage",
          "private_incidents_only": false,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "last_activity_at": "2021-08-17T13:28:57.801578Z",
        "mode": "standard",
        "ms_teams_channel_url": "https://teams.microsoft.com/l/channel/19%some-hex%40thread.tacv2/inc-123-title?groupId=some-uuid&tenantId=another-uuid",
        "name": "Our database is sad",
        "permalink": "https://app.incident.io/incidents/123",
        "postmortem_document_ids": [
          "01FCNDV6P870EA6S7TK1DSYD5H"
        ],
        "postmortem_document_url": "https://docs.google.com/my_doc_id",
        "reference": "INC-123",
        "severity": {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Issues with **low impact**.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Minor",
          "rank": 1,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "slack_channel_id": "C02AW36C1M5",
        "slack_channel_name": "inc-165-green-parrot",
        "slack_channel_url": "https://slack.com/app_redirect?team=T1234&channel=C5678",
        "slack_team_id": "T02A1FSLE8J",
        "summary": "Our database is really really sad, and we don't know why yet.",
        "team_ids": [
          "01JPQA75EPNEES4479P16P4XAB"
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "visibility": "public",
        "workload_minutes_late": 40.7,
        "workload_minutes_sleeping": 0,
        "workload_minutes_total": 60.7,
        "workload_minutes_working": 20
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_activity_log_entry",
    "accessor": "IncidentActivityLogEntry",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_activity_log_entries",
    "args": [],
    "select": {
      "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "id": "v1",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id",
      "id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "id",
        "wire": "id"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_activity_log_entries": [
        {
          "content": {
            "action_created": {
              "action_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "actor": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "action_updated": {
              "action_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "new_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "new_status": "completed",
              "previous_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "previous_status": "outstanding",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "alert_attached_to_incident": {
              "actor": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              },
              "alert_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "custom_field_value_update": {
              "custom_field": {
                "description": "Which team is impacted by this issue",
                "field_type": "single_select",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Affected Team",
                "options": [
                  {
                    "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "sort_key": 10,
                    "value": "Product"
                  }
                ]
              },
              "new_values": [
                {
                  "value_catalog_entry": {
                    "aliases": [
                      "lawrence@incident.io",
                      "lawrence"
                    ],
                    "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "name": "Primary On-call"
                  },
                  "value_link": "https://google.com/",
                  "value_numeric": "123.456",
                  "value_option": {
                    "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "sort_key": 10,
                    "value": "Product"
                  },
                  "value_text": "This is my text field, I hope you like it"
                }
              ],
              "new_values_count": 4,
              "previous_values": [
                {
                  "value_catalog_entry": {
                    "aliases": [
                      "lawrence@incident.io",
                      "lawrence"
                    ],
                    "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "name": "Primary On-call"
                  },
                  "value_link": "https://google.com/",
                  "value_numeric": "123.456",
                  "value_option": {
                    "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "sort_key": 10,
                    "value": "Product"
                  },
                  "value_text": "This is my text field, I hope you like it"
                }
              ],
              "previous_values_count": 3,
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "escalation_acknowledged": {
              "acknowledger": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "escalation_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "escalation_created": {
              "creator": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              },
              "escalated_to_users": [
                {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                }
              ],
              "escalation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "escalation_path_id": "01FCNDV6P870EA6S7TK1DSYDG1"
            },
            "follow_up_created": {
              "actor": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              },
              "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "follow_up_updated": {
              "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "new_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "new_status": "completed",
              "new_title": "Add a payments-api rollback runbook",
              "previous_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "previous_status": "outstanding",
              "previous_title": "Add a runbook",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "incident_merged": {
              "incident_update_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "merger": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              },
              "source_incident": {
                "external_id": 123,
                "id": "01FDAG4SAP5TYPT98WGR2N7W91",
                "name": "Our database is sad",
                "reference": "INC-123",
                "status_category": "triage",
                "summary": "Our database is really really sad, and we don't know why yet.",
                "visibility": "public"
              }
            },
            "incident_rename": {
              "new_name": "EU checkout failing after 14:02 deploy",
              "previous_name": "Checkout errors",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "incident_timestamp_set": {
              "incident_timestamp": {
                "id": "01FCNDV6P870EA6S7TK1DSYD5H",
                "name": "Impact started",
                "rank": 1
              },
              "new_value": "2026-09-01T13:42:00Z",
              "previous_value": "2026-09-01T14:00:00Z",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "incident_type_changed": {
              "new_incident_type": {
                "create_in_triage": "always",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Customer facing production outages",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "is_default": false,
                "name": "Production Outage",
                "private_incidents_only": false,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "previous_incident_type": {
                "create_in_triage": "always",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Customer facing production outages",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "is_default": false,
                "name": "Production Outage",
                "private_incidents_only": false,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "incident_update": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "message": "Rolled back **payments-api** to v411, error rate recovering.",
              "new_severity": {
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Issues with **low impact**.",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Minor",
                "rank": 1,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "new_status": {
                "category": "triage",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
                "id": "01FCNDV6P870EA6S7TK1DSYD5H",
                "name": "Closed",
                "rank": 4,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "next_update_in_minutes": 30,
              "previous_severity": {
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Issues with **low impact**.",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Minor",
                "rank": 1,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "previous_status": {
                "category": "triage",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
                "id": "01FCNDV6P870EA6S7TK1DSYD5H",
                "name": "Closed",
                "rank": 4,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "incident_visibility_changed": {
              "new_visibility": "private",
              "previous_visibility": "public",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "role_update": {
              "new_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "previous_assignee": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "role": {
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "The person currently coordinating the incident",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "instructions": "Take point on the incident; Make sure people are clear on responsibilities",
                "name": "Incident Lead",
                "role_type": "lead",
                "shortform": "lead",
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "status_change": {
              "new_status": {
                "category": "triage",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
                "id": "01FCNDV6P870EA6S7TK1DSYD5H",
                "name": "Closed",
                "rank": 4,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "previous_status": {
                "category": "triage",
                "created_at": "2021-08-17T13:28:57.801578Z",
                "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
                "id": "01FCNDV6P870EA6S7TK1DSYD5H",
                "name": "Closed",
                "rank": 4,
                "updated_at": "2021-08-17T13:28:57.801578Z"
              },
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "summary_update": {
              "new_summary": "Checkout is failing for all EU customers since the 14:02 deploy.",
              "previous_summary": "Checkout is failing for some customers.",
              "updater": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              }
            },
            "workflow_ran": {
              "creator": {
                "alert": {
                  "id": "01GW2G3V0S59R238FAHPDS1R66",
                  "title": "*errors.withMessage: PG::Error failed to connect"
                },
                "api_key": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My test API key"
                },
                "user": {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                },
                "workflow": {
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "My little workflow"
                }
              },
              "event_description": "Stopped the synthetic load test in staging.",
              "event_title": "Load test halted"
            }
          },
          "created_at": "2026-09-01T15:30:01Z",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "occurred_at": "2026-09-01T15:30:00Z",
          "title": "Status changed from Investigating to Monitoring",
          "type": "incident_update"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_attachment",
    "accessor": "IncidentAttachment",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_attachments",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_attachment": {
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "resource": {
          "external_id": "123",
          "permalink": "https://my.pagerduty.com/incidents/ABC",
          "resource_type": "pager_duty_incident",
          "title": "The database has gone down"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_attachment",
    "accessor": "IncidentAttachment",
    "op": "list",
    "method": "GET",
    "path": "/v1/incident_attachments",
    "args": [],
    "select": {
      "external_id": "123",
      "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "resource_type": "pager_duty_incident"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id",
      "external_id",
      "resource_type"
    ],
    "queryArgs": [
      {
        "name": "external_id",
        "wire": "external_id"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "resource_type",
        "wire": "resource_type"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_attachments": [
        {
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "resource": {
            "external_id": "123",
            "permalink": "https://my.pagerduty.com/incidents/ABC",
            "resource_type": "pager_duty_incident",
            "title": "The database has gone down"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident_attachment",
    "accessor": "IncidentAttachment",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/incident_attachments/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "incident_form",
    "accessor": "IncidentForm",
    "op": "create",
    "method": "POST",
    "path": "/v3/incident_forms",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_form": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "form_type": "declare",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lifecycle_elements": [
          {
            "can_select_no_value": false,
            "config": {
              "require_comment": false
            },
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "default_value": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "Shown when the incident is major or above.",
            "element_type": "name",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "placeholder": "What's happening?",
            "required_if": "check_engine_config",
            "required_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ],
            "show_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_form",
    "accessor": "IncidentForm",
    "op": "list",
    "method": "GET",
    "path": "/v3/incident_forms",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_forms": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "form_type": "declare",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "lifecycle_elements": [
            {
              "can_select_no_value": false,
              "config": {
                "require_comment": false
              },
              "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "default_value": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "description": "Shown when the incident is major or above.",
              "element_type": "name",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "placeholder": "What's happening?",
              "required_if": "check_engine_config",
              "required_if_condition_groups": [
                {
                  "conditions": [
                    {
                      "operation": null,
                      "param_bindings": null,
                      "subject": null
                    }
                  ]
                }
              ],
              "show_if_condition_groups": [
                {
                  "conditions": [
                    {
                      "operation": null,
                      "param_bindings": null,
                      "subject": null
                    }
                  ]
                }
              ]
            }
          ],
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_form",
    "accessor": "IncidentForm",
    "op": "load",
    "method": "GET",
    "path": "/v3/incident_forms/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_form": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "form_type": "declare",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lifecycle_elements": [
          {
            "can_select_no_value": false,
            "config": {
              "require_comment": false
            },
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "default_value": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "Shown when the incident is major or above.",
            "element_type": "name",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "placeholder": "What's happening?",
            "required_if": "check_engine_config",
            "required_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ],
            "show_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_form",
    "accessor": "IncidentForm",
    "op": "remove",
    "method": "DELETE",
    "path": "/v3/incident_forms/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "incident_form",
    "accessor": "IncidentForm",
    "op": "update",
    "method": "PUT",
    "path": "/v3/incident_forms/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_form": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "form_type": "declare",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_type_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lifecycle_elements": [
          {
            "can_select_no_value": false,
            "config": {
              "require_comment": false
            },
            "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "default_value": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "description": "Shown when the incident is major or above.",
            "element_type": "name",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_role_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "placeholder": "What's happening?",
            "required_if": "check_engine_config",
            "required_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ],
            "show_if_condition_groups": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Priority",
                      "reference": "alert.priority"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_membership",
    "accessor": "IncidentMembership",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_memberships",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_membership": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "viewer",
          "slack_user_id": "U02AYNF2XJM"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_participant",
    "accessor": "IncidentParticipant",
    "op": "load",
    "method": "GET",
    "path": "/v2/incident_participants",
    "args": [],
    "select": {
      "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id"
    ],
    "queryArgs": [
      {
        "name": "incident_id",
        "wire": "incident_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_participants": {
        "active": [
          {
            "participant_type": "observer",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "passive": [
          {
            "participant_type": "observer",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_participant_workload",
    "accessor": "IncidentParticipantWorkload",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_participant_workloads",
    "args": [],
    "select": {
      "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id"
    ],
    "queryArgs": [
      {
        "name": "incident_id",
        "wire": "incident_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_participant_workloads": [
        {
          "archived_at": "2021-08-17T13:28:57.801578Z",
          "participant_type": "observer",
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workload": {
            "minutes_spent_on_incident": 125.5,
            "minutes_spent_on_incident_in_late_hours": 20.5,
            "minutes_spent_on_incident_in_sleeping_hours": 15,
            "minutes_spent_on_incident_in_working_hours": 90
          }
        }
      ],
      "metadata": {
        "data_synced_at": "2021-08-17T13:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_relationship",
    "accessor": "IncidentRelationship",
    "op": "list",
    "method": "GET",
    "path": "/v1/incident_relationships",
    "args": [],
    "select": {
      "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_relationships": [
        {
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "incident": {
            "external_id": 123,
            "id": "01FCNDV6P870EA6S7TK1DSYD5H",
            "name": "The database is down"
          }
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_status",
    "accessor": "IncidentStatus",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_statuses",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_status": {
        "category": "triage",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "name": "Closed",
        "rank": 4,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_status",
    "accessor": "IncidentStatus",
    "op": "list",
    "method": "GET",
    "path": "/v1/incident_statuses",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_statuses": [
        {
          "category": "triage",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "name": "Closed",
          "rank": 4,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident_status",
    "accessor": "IncidentStatus",
    "op": "load",
    "method": "GET",
    "path": "/v1/incident_statuses/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_status": {
        "category": "triage",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "name": "Closed",
        "rank": 4,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_status",
    "accessor": "IncidentStatus",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/incident_statuses/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "incident_status",
    "accessor": "IncidentStatus",
    "op": "update",
    "method": "PUT",
    "path": "/v1/incident_statuses/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_status": {
        "category": "triage",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "name": "Closed",
        "rank": 4,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_team_membership",
    "accessor": "IncidentTeamMembership",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_team_memberships",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_team_membership": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "team": {
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "Platform"
        },
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_team_memberships_v1",
    "accessor": "IncidentTeamMembershipsV1",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_team_memberships/actions/revoke",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "incident_template",
    "accessor": "IncidentTemplate",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_templates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_template": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Payments incidents",
        "template": {
          "custom_fields": [
            {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "merge_strategy": "first-wins"
            }
          ],
          "incident_mode": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "incident_type": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "name": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "severity": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "merge_strategy": "first-wins"
          },
          "start_in_triage": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "summary": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "workspace": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        },
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_template",
    "accessor": "IncidentTemplate",
    "op": "list",
    "method": "GET",
    "path": "/v1/incident_templates",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_templates": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Payments incidents",
          "template": {
            "custom_fields": [
              {
                "binding": {
                  "array_value": [
                    {
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                },
                "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "merge_strategy": "first-wins"
              }
            ],
            "incident_mode": {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "incident_type": {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "name": {
              "autogenerated": false,
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "severity": {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "merge_strategy": "first-wins"
            },
            "start_in_triage": {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "summary": {
              "autogenerated": false,
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "workspace": {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            }
          },
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_template",
    "accessor": "IncidentTemplate",
    "op": "load",
    "method": "GET",
    "path": "/v1/incident_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_template": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Payments incidents",
        "template": {
          "custom_fields": [
            {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "merge_strategy": "first-wins"
            }
          ],
          "incident_mode": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "incident_type": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "name": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "severity": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "merge_strategy": "first-wins"
          },
          "start_in_triage": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "summary": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "workspace": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        },
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_template",
    "accessor": "IncidentTemplate",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/incident_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "incident_template",
    "accessor": "IncidentTemplate",
    "op": "update",
    "method": "PUT",
    "path": "/v1/incident_templates/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_template": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Payments incidents",
        "template": {
          "custom_fields": [
            {
              "binding": {
                "array_value": [
                  {
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "custom_field_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "merge_strategy": "first-wins"
            }
          ],
          "incident_mode": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "incident_type": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "name": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "severity": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "merge_strategy": "first-wins"
          },
          "start_in_triage": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "summary": {
            "autogenerated": false,
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          },
          "workspace": {
            "binding": {
              "array_value": [
                {
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        },
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_templates_validate_result_v1",
    "accessor": "IncidentTemplatesValidateResultV1",
    "op": "create",
    "method": "POST",
    "path": "/v1/incident_templates/actions/validate",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "warnings": [
        {
          "detail": "Creating a new template with this name will fail. Updating the template that already has it keeps working.",
          "summary": "An incident template with this name already exists"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident_timeline_item",
    "accessor": "IncidentTimelineItem",
    "op": "create",
    "method": "POST",
    "path": "/v2/incident_timeline_items",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_timeline_item": {
        "activity_log_id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "created_at": "2026-09-01T15:31:04Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Rolled back **payments-api** to v411 after error rate hit 12%.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "timestamp": "2026-09-01T15:30:00Z",
        "title": "Rolled back payments-api",
        "updated_at": "2026-09-01T16:45:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_timeline_item",
    "accessor": "IncidentTimelineItem",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_timeline_items",
    "args": [],
    "select": {
      "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_timeline_items": [
        {
          "activity_log_id": "01FCNDV6P870EA6S7TK1DSYDG1",
          "created_at": "2026-09-01T15:31:04Z",
          "creator": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "description": "Rolled back **payments-api** to v411 after error rate hit 12%.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "timestamp": "2026-09-01T15:30:00Z",
          "title": "Rolled back payments-api",
          "updated_at": "2026-09-01T16:45:00Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_timeline_item",
    "accessor": "IncidentTimelineItem",
    "op": "update",
    "method": "PATCH",
    "path": "/v2/incident_timeline_items/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_timeline_item": {
        "activity_log_id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "created_at": "2026-09-01T15:31:04Z",
        "creator": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "description": "Rolled back **payments-api** to v411 after error rate hit 12%.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "timestamp": "2026-09-01T15:30:00Z",
        "title": "Rolled back payments-api",
        "updated_at": "2026-09-01T16:45:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_timestamp",
    "accessor": "IncidentTimestamp",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_timestamps",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_timestamps": [
        {
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "name": "Impact started",
          "rank": 1
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident_timestamp",
    "accessor": "IncidentTimestamp",
    "op": "load",
    "method": "GET",
    "path": "/v2/incident_timestamps/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYD5H"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_timestamp": {
        "id": "01FCNDV6P870EA6S7TK1DSYD5H",
        "name": "Impact started",
        "rank": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_type",
    "accessor": "IncidentType",
    "op": "list",
    "method": "GET",
    "path": "/v1/incident_types",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_types": [
        {
          "create_in_triage": "always",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Customer facing production outages",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "is_default": false,
          "name": "Production Outage",
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "private_incidents_only": false,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "incident_type",
    "accessor": "IncidentType",
    "op": "load",
    "method": "GET",
    "path": "/v1/incident_types/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_type": {
        "create_in_triage": "always",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Customer facing production outages",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_default": false,
        "name": "Production Outage",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incidents_only": false,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_update",
    "accessor": "IncidentUpdate",
    "op": "create",
    "method": "POST",
    "path": "/v2/incident_updates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "incident_update": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "merged_into_incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "message": "We're working on a fix, hoping to ship in the next 30 minutes",
        "new_incident_status": {
          "category": "triage",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
          "id": "01FCNDV6P870EA6S7TK1DSYD5H",
          "name": "Closed",
          "rank": 4,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "new_severity": {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Issues with **low impact**.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Minor",
          "rank": 1,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "updater": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "incident_update",
    "accessor": "IncidentUpdate",
    "op": "list",
    "method": "GET",
    "path": "/v2/incident_updates",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "incident_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "incident_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incident_updates": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "merged_into_incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "message": "We're working on a fix, hoping to ship in the next 30 minutes",
          "new_incident_status": {
            "category": "triage",
            "created_at": "2021-08-17T13:28:57.801578Z",
            "description": "Impact has been **fully mitigated**, and we're ready to learn from this incident.",
            "id": "01FCNDV6P870EA6S7TK1DSYD5H",
            "name": "Closed",
            "rank": 4,
            "updated_at": "2021-08-17T13:28:57.801578Z"
          },
          "new_severity": {
            "created_at": "2021-08-17T13:28:57.801578Z",
            "description": "Issues with **low impact**.",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Minor",
            "rank": 1,
            "updated_at": "2021-08-17T13:28:57.801578Z"
          },
          "updater": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          }
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "ip_allowlist",
    "accessor": "IpAllowlist",
    "op": "load",
    "method": "GET",
    "path": "/v1/ip_allowlists",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ip_allowlist": {
        "allowlist": [
          {
            "label": "London HQ",
            "value": "192.0.2.0"
          }
        ],
        "enabled": true,
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "ip_allowlist",
    "accessor": "IpAllowlist",
    "op": "update",
    "method": "PUT",
    "path": "/v1/ip_allowlists",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "ip_allowlist": {
        "allowlist": [
          {
            "label": "London HQ",
            "value": "192.0.2.0"
          }
        ],
        "enabled": true,
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 1
      }
    },
    "idField": "id"
  },
  {
    "entity": "ip_range",
    "accessor": "IpRange",
    "op": "list",
    "method": "GET",
    "path": "/v1/ip_ranges",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [],
    "status": 200,
    "sample": {
      "ip_ranges": [
        {
          "cidr": "34.91.219.113/32",
          "description": "Requests to your systems from integrations and from workflow \"Send a webhook\" steps"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "maintenance_window",
    "accessor": "MaintenanceWindow",
    "op": "create",
    "method": "POST",
    "path": "/v1/maintenance_windows",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "maintenance_window": {
        "alert_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "archived_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T14:28:57.801578Z",
        "escalation_targets": [
          {
            "escalation_paths": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "users": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lead": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "name": "Planned database migration",
        "notification_message": "Scheduled downtime for database migration",
        "notify_channels": [
          {
            "channel_id": "C0ACTHQMHS8",
            "channel_name": "general",
            "channel_type": "public",
            "is_private": false
          }
        ],
        "notify_end_minutes_before": 5,
        "notify_start_minutes_before": 15,
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "reroute_on_end": false,
        "resolve_on_end": false,
        "show_in_sidebar": true,
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "maintenance_window",
    "accessor": "MaintenanceWindow",
    "op": "list",
    "method": "GET",
    "path": "/v1/maintenance_windows",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "status": "active"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "status"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "status",
        "wire": "status"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "maintenance_windows": [
        {
          "alert_condition_groups": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "archived_at": "2021-08-17T13:28:57.801578Z",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "end_at": "2021-08-17T14:28:57.801578Z",
          "escalation_targets": [
            {
              "escalation_paths": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "users": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            }
          ],
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "lead": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "name": "Planned database migration",
          "notification_message": "Scheduled downtime for database migration",
          "notify_channels": [
            {
              "channel_id": "C0ACTHQMHS8",
              "channel_name": "general",
              "channel_type": "public",
              "is_private": false
            }
          ],
          "notify_end_minutes_before": 5,
          "notify_start_minutes_before": 15,
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "reroute_on_end": false,
          "resolve_on_end": false,
          "show_in_sidebar": true,
          "start_at": "2021-08-17T13:28:57.801578Z",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "maintenance_window",
    "accessor": "MaintenanceWindow",
    "op": "load",
    "method": "GET",
    "path": "/v1/maintenance_windows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "maintenance_window": {
        "alert_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "archived_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T14:28:57.801578Z",
        "escalation_targets": [
          {
            "escalation_paths": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "users": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lead": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "name": "Planned database migration",
        "notification_message": "Scheduled downtime for database migration",
        "notify_channels": [
          {
            "channel_id": "C0ACTHQMHS8",
            "channel_name": "general",
            "channel_type": "public",
            "is_private": false
          }
        ],
        "notify_end_minutes_before": 5,
        "notify_start_minutes_before": 15,
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "reroute_on_end": false,
        "resolve_on_end": false,
        "show_in_sidebar": true,
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "maintenance_window",
    "accessor": "MaintenanceWindow",
    "op": "remove",
    "method": "DELETE",
    "path": "/v1/maintenance_windows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {
      "force": "v1"
    },
    "headers": [],
    "cookies": [],
    "query": [
      "force"
    ],
    "queryArgs": [
      {
        "name": "force",
        "wire": "force"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "maintenance_window",
    "accessor": "MaintenanceWindow",
    "op": "update",
    "method": "PUT",
    "path": "/v1/maintenance_windows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "maintenance_window": {
        "alert_condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "archived_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T14:28:57.801578Z",
        "escalation_targets": [
          {
            "escalation_paths": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "users": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "lead": {
          "alert": {
            "id": "01GW2G3V0S59R238FAHPDS1R66",
            "title": "*errors.withMessage: PG::Error failed to connect"
          },
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          },
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          },
          "workflow": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My little workflow"
          }
        },
        "name": "Planned database migration",
        "notification_message": "Scheduled downtime for database migration",
        "notify_channels": [
          {
            "channel_id": "C0ACTHQMHS8",
            "channel_name": "general",
            "channel_type": "public",
            "is_private": false
          }
        ],
        "notify_end_minutes_before": 5,
        "notify_start_minutes_before": 15,
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "reroute_on_end": false,
        "resolve_on_end": false,
        "show_in_sidebar": true,
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "managed_resource",
    "accessor": "ManagedResource",
    "op": "create",
    "method": "POST",
    "path": "/v2/managed_resources",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "managed_resource": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "managed_by": "terraform",
        "resource_id": "abc123",
        "resource_type": "alert_route",
        "source_url": "https://github.com/my-company/infrastructure"
      }
    },
    "idField": "id"
  },
  {
    "entity": "on_call_notification_method_public_v2",
    "accessor": "OnCallNotificationMethodPublicV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/users/{user_id}/notification_methods",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "notification_methods": [
        {
          "address": "•••••••6789",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "is_usable": true,
          "method_type": "app",
          "phone_details": {
            "supports_sms": true,
            "supports_voice": true
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "on_call_notification_pause",
    "accessor": "OnCallNotificationPause",
    "op": "list",
    "method": "GET",
    "path": "/v2/on_call_notification_pauses",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "from": "2021-08-17T00:00:00Z",
      "page_size": 25,
      "to": "2021-08-24T00:00:00Z"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "from",
      "to",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "from",
        "wire": "from"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "to",
        "wire": "to"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "on_call_notification_pauses": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "ends_at": "2021-08-24T13:28:57.801578Z",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "reason": "Annual leave",
          "starts_at": "2021-08-17T13:28:57.801578Z",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "on_call_notification_pause",
    "accessor": "OnCallNotificationPause",
    "op": "load",
    "method": "GET",
    "path": "/v2/on_call_notification_pauses/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "on_call_notification_pause": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "ends_at": "2021-08-24T13:28:57.801578Z",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "reason": "Annual leave",
        "starts_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    },
    "idField": "id"
  },
  {
    "entity": "on_call_notification_rule_public_v2",
    "accessor": "OnCallNotificationRulePublicV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/users/{user_id}/notification_rules",
    "args": [
      {
        "name": "user_id",
        "wire": "user_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "notification_rules": [
        {
          "app": {
            "push_notification_criticality": "critical"
          },
          "delay_seconds": 0,
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "method_target": {
            "all": {},
            "specific": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "type": "specific"
          },
          "method_type": "app",
          "phone": {
            "channel": "voice"
          },
          "rule_type": "low_urgency"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pay_config",
    "accessor": "PayConfig",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_configs",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "pay_config": {
        "base_rate_cents": 1200,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "currency": "GBP",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Engineering on-call",
        "one_off_rules": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Christmas day",
            "rate_cents": 4800,
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "published_at": "2021-08-17T13:28:57.801578Z",
        "rate_time_unit": "hour",
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "weekly_rules": [
          {
            "end_time": "17:00",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rate_cents": 2400,
            "start_time": "09:00",
            "weekdays": [
              "monday"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_config",
    "accessor": "PayConfig",
    "op": "list",
    "method": "GET",
    "path": "/v2/pay_configs",
    "args": [],
    "select": {
      "after": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "pay_configs": [
        {
          "base_rate_cents": 1200,
          "created_at": "2021-08-17T13:28:57.801578Z",
          "currency": "GBP",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "Engineering on-call",
          "one_off_rules": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "name": "Christmas day",
              "rate_cents": 4800,
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "published_at": "2021-08-17T13:28:57.801578Z",
          "rate_time_unit": "hour",
          "timezone": "Europe/London",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "weekly_rules": [
            {
              "end_time": "17:00",
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "rate_cents": 2400,
              "start_time": "09:00",
              "weekdays": [
                "monday"
              ]
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pay_config",
    "accessor": "PayConfig",
    "op": "load",
    "method": "GET",
    "path": "/v2/pay_configs/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pay_config": {
        "base_rate_cents": 1200,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "currency": "GBP",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Engineering on-call",
        "one_off_rules": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Christmas day",
            "rate_cents": 4800,
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "published_at": "2021-08-17T13:28:57.801578Z",
        "rate_time_unit": "hour",
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "weekly_rules": [
          {
            "end_time": "17:00",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rate_cents": 2400,
            "start_time": "09:00",
            "weekdays": [
              "monday"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_config",
    "accessor": "PayConfig",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/pay_configs/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pay_config",
    "accessor": "PayConfig",
    "op": "update",
    "method": "PUT",
    "path": "/v2/pay_configs/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pay_config": {
        "base_rate_cents": 1200,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "currency": "GBP",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Engineering on-call",
        "one_off_rules": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Christmas day",
            "rate_cents": 4800,
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "published_at": "2021-08-17T13:28:57.801578Z",
        "rate_time_unit": "hour",
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "weekly_rules": [
          {
            "end_time": "17:00",
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rate_cents": 2400,
            "start_time": "09:00",
            "weekdays": [
              "monday"
            ]
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_create_one_off_rule_result_v2",
    "accessor": "PayConfigsCreateOneOffRuleResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_configs/{pay_config_id}/one_off_rules",
    "args": [
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "one_off_rule": {
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Christmas day",
        "rate_cents": 4800,
        "start_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_create_weekly_rule_result_v2",
    "accessor": "PayConfigsCreateWeeklyRuleResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_configs/{pay_config_id}/weekly_rules",
    "args": [
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "weekly_rule": {
        "end_time": "17:00",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rate_cents": 2400,
        "start_time": "09:00",
        "weekdays": [
          "monday"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_list_one_off_rules_result_v2",
    "accessor": "PayConfigsListOneOffRulesResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/pay_configs/{pay_config_id}/one_off_rules",
    "args": [
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "one_off_rules": [
        {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "Christmas day",
          "rate_cents": 4800,
          "start_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_list_weekly_rules_result_v2",
    "accessor": "PayConfigsListWeeklyRulesResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/pay_configs/{pay_config_id}/weekly_rules",
    "args": [
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "weekly_rules": [
        {
          "end_time": "17:00",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "rate_cents": 2400,
          "start_time": "09:00",
          "weekdays": [
            "monday"
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_show_one_off_rule_result_v2",
    "accessor": "PayConfigsShowOneOffRuleResultV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/pay_configs/{pay_config_id}/one_off_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      },
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "one_off_rule": {
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Christmas day",
        "rate_cents": 4800,
        "start_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_show_weekly_rule_result_v2",
    "accessor": "PayConfigsShowWeeklyRuleResultV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/pay_configs/{pay_config_id}/weekly_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      },
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "weekly_rule": {
        "end_time": "17:00",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rate_cents": 2400,
        "start_time": "09:00",
        "weekdays": [
          "monday"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_update_one_off_rule_result_v2",
    "accessor": "PayConfigsUpdateOneOffRuleResultV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/pay_configs/{pay_config_id}/one_off_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      },
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "one_off_rule": {
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Christmas day",
        "rate_cents": 4800,
        "start_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_configs_update_weekly_rule_result_v2",
    "accessor": "PayConfigsUpdateWeeklyRuleResultV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/pay_configs/{pay_config_id}/weekly_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      },
      {
        "name": "pay_config_id",
        "wire": "pay_config_id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "weekly_rule": {
        "end_time": "17:00",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rate_cents": 2400,
        "start_time": "09:00",
        "weekdays": [
          "monday"
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_report",
    "accessor": "PayReport",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_reports",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": {
      "pay_report": {
        "created_at": "2026-04-01T09:00:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          }
        },
        "end_date": "2026-03-31",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "March 2026",
        "overlapping_shifts": "paid_per_schedule",
        "schedule_ids": [
          "01FCNDV6P870EA6S7TK1DSYDG0"
        ],
        "start_date": "2026-03-01",
        "status": "pending",
        "unpaid_shifts": "included",
        "updated_at": "2026-04-01T09:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_report",
    "accessor": "PayReport",
    "op": "list",
    "method": "GET",
    "path": "/v2/pay_reports",
    "args": [],
    "select": {
      "after": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "pay_reports": [
        {
          "created_at": "2026-04-01T09:00:00Z",
          "creator": {
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            }
          },
          "end_date": "2026-03-31",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "March 2026",
          "overlapping_shifts": "paid_per_schedule",
          "published_at": "2026-04-01T09:00:00Z",
          "schedule_ids": [
            "01FCNDV6P870EA6S7TK1DSYDG0"
          ],
          "start_date": "2026-03-01",
          "status": "complete",
          "total_duration_seconds": 3600,
          "total_pay_by_currency": {
            "GBP": 2400
          },
          "unpaid_shifts": "included",
          "updated_at": "2026-04-01T09:00:00Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "pay_report",
    "accessor": "PayReport",
    "op": "load",
    "method": "GET",
    "path": "/v2/pay_reports/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pay_report": {
        "created_at": "2026-04-01T09:00:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          }
        },
        "end_date": "2026-03-31",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "March 2026",
        "overlapping_shifts": "paid_per_schedule",
        "published_at": "2026-04-01T09:00:00Z",
        "schedule_ids": [
          "01FCNDV6P870EA6S7TK1DSYDG0"
        ],
        "start_date": "2026-03-01",
        "status": "complete",
        "total_duration_seconds": 3600,
        "total_pay_by_currency": {
          "GBP": 2400
        },
        "unpaid_shifts": "included",
        "updated_at": "2026-04-01T09:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_report",
    "accessor": "PayReport",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/pay_reports/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "pay_reports_publish_result_v2",
    "accessor": "PayReportsPublishResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_reports/{id}/actions/publish",
    "args": [
      {
        "name": "pay_report_id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pay_report": {
        "created_at": "2026-04-01T09:00:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          }
        },
        "end_date": "2026-03-31",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "March 2026",
        "overlapping_shifts": "paid_per_schedule",
        "published_at": "2026-04-01T09:00:00Z",
        "schedule_ids": [
          "01FCNDV6P870EA6S7TK1DSYDG0"
        ],
        "start_date": "2026-03-01",
        "status": "complete",
        "total_duration_seconds": 3600,
        "total_pay_by_currency": {
          "GBP": 2400
        },
        "unpaid_shifts": "included",
        "updated_at": "2026-04-01T09:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_reports_unpublish_result_v2",
    "accessor": "PayReportsUnpublishResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/pay_reports/{id}/actions/unpublish",
    "args": [
      {
        "name": "pay_report_id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pay_report": {
        "created_at": "2026-04-01T09:00:00Z",
        "creator": {
          "api_key": {
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "My test API key"
          }
        },
        "end_date": "2026-03-31",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "March 2026",
        "overlapping_shifts": "paid_per_schedule",
        "published_at": "2026-04-01T09:00:00Z",
        "schedule_ids": [
          "01FCNDV6P870EA6S7TK1DSYDG0"
        ],
        "start_date": "2026-03-01",
        "status": "complete",
        "total_duration_seconds": 3600,
        "total_pay_by_currency": {
          "GBP": 2400
        },
        "unpaid_shifts": "included",
        "updated_at": "2026-04-01T09:00:00Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "pay_reports_v2",
    "accessor": "PayReportsV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/pay_reports/{id}/download",
    "args": [
      {
        "name": "pay_report_id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "text/csv"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "policies_v2",
    "accessor": "PoliciesV2",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/policies/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "policy",
    "accessor": "Policy",
    "op": "create",
    "method": "POST",
    "path": "/v2/policies",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "policy": {
        "assignment_rules": {
          "bindings": [
            {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          ],
          "reminder_cadence_after": {
            "interval": "daily"
          },
          "reminder_cadence_before": {
            "interval": "daily"
          },
          "reminder_detected_date_offset_hours": [
            0,
            48
          ],
          "reminder_due_date_offset_hours": [
            -24,
            0,
            24
          ]
        },
        "conditions": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "debrief": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "description": "All critical incidents must export follow-ups to an external issue tracker before 7 days has passed since closure.",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "follow_up": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Critical incidents must export follow-ups",
        "on_call_readiness": {
          "enforcement": "advisory",
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ]
        },
        "policy_type": "follow_up",
        "post_mortem": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "schedule": {
          "evaluation_level": "schedule",
          "requirement_type": "contiguous"
        },
        "status": "enabled",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "policy",
    "accessor": "Policy",
    "op": "list",
    "method": "GET",
    "path": "/v2/policies",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "policy_type": "follow_up"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "policy_type"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "policy_type",
        "wire": "policy_type"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "policies": [
        {
          "assignment_rules": {
            "bindings": [
              {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            ],
            "reminder_cadence_after": {
              "interval": "daily"
            },
            "reminder_cadence_before": {
              "interval": "daily"
            },
            "reminder_detected_date_offset_hours": [
              0,
              48
            ],
            "reminder_due_date_offset_hours": [
              -24,
              0,
              24
            ]
          },
          "conditions": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "created_at": "2021-08-17T13:28:57.801578Z",
          "debrief": {
            "due_date_config": {
              "applies_from": "2021-08-17T13:28:57.801578Z",
              "calculation_timezone": "Europe/London",
              "calculation_type": "weekdays",
              "days": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "requirements": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Incident Severity",
                      "reference": "incident.severity"
                    }
                  }
                ]
              }
            ],
            "run_on_private_incidents": false
          },
          "description": "All critical incidents must export follow-ups to an external issue tracker before 7 days has passed since closure.",
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "follow_up": {
            "due_date_config": {
              "applies_from": "2021-08-17T13:28:57.801578Z",
              "calculation_timezone": "Europe/London",
              "calculation_type": "weekdays",
              "days": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "requirements": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Incident Severity",
                      "reference": "incident.severity"
                    }
                  }
                ]
              }
            ],
            "run_on_private_incidents": false
          },
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "Critical incidents must export follow-ups",
          "on_call_readiness": {
            "enforcement": "advisory",
            "high_urgency": [
              {
                "max_delay_seconds": 300,
                "method_types": [
                  "slack"
                ]
              }
            ],
            "low_urgency": [
              {
                "max_delay_seconds": 300,
                "method_types": [
                  "slack"
                ]
              }
            ]
          },
          "policy_type": "follow_up",
          "post_mortem": {
            "due_date_config": {
              "applies_from": "2021-08-17T13:28:57.801578Z",
              "calculation_timezone": "Europe/London",
              "calculation_type": "weekdays",
              "days": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              },
              "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            },
            "requirements": [
              {
                "conditions": [
                  {
                    "operation": {
                      "label": "Lawrence Jones",
                      "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                    },
                    "param_bindings": [
                      null
                    ],
                    "subject": {
                      "label": "Incident Severity",
                      "reference": "incident.severity"
                    }
                  }
                ]
              }
            ],
            "run_on_private_incidents": false
          },
          "schedule": {
            "evaluation_level": "schedule",
            "requirement_type": "contiguous"
          },
          "status": "enabled",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "policy",
    "accessor": "Policy",
    "op": "load",
    "method": "GET",
    "path": "/v2/policies/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "policy": {
        "assignment_rules": {
          "bindings": [
            {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          ],
          "reminder_cadence_after": {
            "interval": "daily"
          },
          "reminder_cadence_before": {
            "interval": "daily"
          },
          "reminder_detected_date_offset_hours": [
            0,
            48
          ],
          "reminder_due_date_offset_hours": [
            -24,
            0,
            24
          ]
        },
        "conditions": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "debrief": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "description": "All critical incidents must export follow-ups to an external issue tracker before 7 days has passed since closure.",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "follow_up": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Critical incidents must export follow-ups",
        "on_call_readiness": {
          "enforcement": "advisory",
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ]
        },
        "policy_type": "follow_up",
        "post_mortem": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "schedule": {
          "evaluation_level": "schedule",
          "requirement_type": "contiguous"
        },
        "status": "enabled",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "policy",
    "accessor": "Policy",
    "op": "update",
    "method": "PUT",
    "path": "/v2/policies/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "policy": {
        "assignment_rules": {
          "bindings": [
            {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            }
          ],
          "reminder_cadence_after": {
            "interval": "daily"
          },
          "reminder_cadence_before": {
            "interval": "daily"
          },
          "reminder_detected_date_offset_hours": [
            0,
            48
          ],
          "reminder_due_date_offset_hours": [
            -24,
            0,
            24
          ]
        },
        "conditions": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "created_at": "2021-08-17T13:28:57.801578Z",
        "debrief": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "description": "All critical incidents must export follow-ups to an external issue tracker before 7 days has passed since closure.",
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "follow_up": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Critical incidents must export follow-ups",
        "on_call_readiness": {
          "enforcement": "advisory",
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "method_types": [
                "slack"
              ]
            }
          ]
        },
        "policy_type": "follow_up",
        "post_mortem": {
          "due_date_config": {
            "applies_from": "2021-08-17T13:28:57.801578Z",
            "calculation_timezone": "Europe/London",
            "calculation_type": "weekdays",
            "days": {
              "array_value": [
                {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              ],
              "value": {
                "label": "Lawrence Jones",
                "literal": "SEV123",
                "reference": "incident.severity"
              }
            },
            "incident_timestamp_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "requirements": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "run_on_private_incidents": false
        },
        "schedule": {
          "evaluation_level": "schedule",
          "requirement_type": "contiguous"
        },
        "status": "enabled",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "policy_finding",
    "accessor": "PolicyFinding",
    "op": "list",
    "method": "GET",
    "path": "/v2/policy_findings",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "policy_id": "01FDAG4SAP5TYPT98WGR2N7W91"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "policy_id"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "policy_id",
        "wire": "policy_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "policy_findings": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "days": 3,
          "debrief": {
            "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "dismissal": {
            "dismissed_at": "2021-08-17T13:28:57.801578Z",
            "dismissed_by": {
              "alert": {
                "id": "01GW2G3V0S59R238FAHPDS1R66",
                "title": "*errors.withMessage: PG::Error failed to connect"
              },
              "api_key": {
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "My test API key"
              },
              "user": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              },
              "workflow": {
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "My little workflow"
              }
            },
            "reason": "This incident is special."
          },
          "due_at": "2025-10-14T00:00:00.000000Z",
          "follow_up": {
            "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "last_checked_at": "2021-08-17T13:28:57.801578Z",
          "on_call_readiness": {
            "high_urgency": [
              {
                "max_delay_seconds": 300,
                "met": false,
                "method_types": [
                  "slack"
                ]
              }
            ],
            "low_urgency": [
              {
                "max_delay_seconds": 300,
                "met": false,
                "method_types": [
                  "slack"
                ]
              }
            ],
            "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "policy_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "policy_type": "follow_up",
          "post_mortem": {
            "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "responsible_users": [
            {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          ],
          "schedule": {
            "cause": "nobody_scheduled",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "has_unscheduled_time": true,
            "impacted_users": [
              {
                "cause": "no_on_call_seat",
                "name": "Alice Green",
                "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
              }
            ],
            "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "start_at": "2021-08-17T13:28:57.801578Z"
          },
          "shift_conflict": {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "shifts": [
              {
                "end_at": "2021-08-17T13:28:57.801578Z",
                "layer_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "start_at": "2021-08-17T13:28:57.801578Z"
              }
            ],
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          },
          "state": "active",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "vacation_conflict": {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "holiday_name": "Joe Bloggs - Holiday",
            "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
          }
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "policy_finding",
    "accessor": "PolicyFinding",
    "op": "load",
    "method": "GET",
    "path": "/v2/policy_findings/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "policy_finding": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "days": 3,
        "debrief": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "dismissal": {
          "dismissed_at": "2021-08-17T13:28:57.801578Z",
          "dismissed_by": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "reason": "This incident is special."
        },
        "due_at": "2025-10-14T00:00:00.000000Z",
        "follow_up": {
          "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "last_checked_at": "2021-08-17T13:28:57.801578Z",
        "on_call_readiness": {
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "policy_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "policy_type": "follow_up",
        "post_mortem": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "responsible_users": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "schedule": {
          "cause": "nobody_scheduled",
          "end_at": "2021-08-17T13:28:57.801578Z",
          "has_unscheduled_time": true,
          "impacted_users": [
            {
              "cause": "no_on_call_seat",
              "name": "Alice Green",
              "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            }
          ],
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z"
        },
        "shift_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "shifts": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "layer_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "state": "active",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "vacation_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "holiday_name": "Joe Bloggs - Holiday",
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "policy_findings_dismiss_result_v2",
    "accessor": "PolicyFindingsDismissResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/policy_findings/{id}/actions/dismiss",
    "args": [
      {
        "name": "policy_finding_id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "policy_finding": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "days": 3,
        "debrief": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "dismissal": {
          "dismissed_at": "2021-08-17T13:28:57.801578Z",
          "dismissed_by": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "reason": "This incident is special."
        },
        "due_at": "2025-10-14T00:00:00.000000Z",
        "follow_up": {
          "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "last_checked_at": "2021-08-17T13:28:57.801578Z",
        "on_call_readiness": {
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "policy_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "policy_type": "follow_up",
        "post_mortem": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "responsible_users": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "schedule": {
          "cause": "nobody_scheduled",
          "end_at": "2021-08-17T13:28:57.801578Z",
          "has_unscheduled_time": true,
          "impacted_users": [
            {
              "cause": "no_on_call_seat",
              "name": "Alice Green",
              "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            }
          ],
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z"
        },
        "shift_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "shifts": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "layer_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "state": "active",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "vacation_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "holiday_name": "Joe Bloggs - Holiday",
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "policy_findings_restore_result_v2",
    "accessor": "PolicyFindingsRestoreResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/policy_findings/{id}/actions/restore",
    "args": [
      {
        "name": "policy_finding_id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "policy_finding": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "days": 3,
        "debrief": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "dismissal": {
          "dismissed_at": "2021-08-17T13:28:57.801578Z",
          "dismissed_by": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "reason": "This incident is special."
        },
        "due_at": "2025-10-14T00:00:00.000000Z",
        "follow_up": {
          "follow_up_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "last_checked_at": "2021-08-17T13:28:57.801578Z",
        "on_call_readiness": {
          "high_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "low_urgency": [
            {
              "max_delay_seconds": 300,
              "met": false,
              "method_types": [
                "slack"
              ]
            }
          ],
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "policy_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "policy_type": "follow_up",
        "post_mortem": {
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "responsible_users": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "schedule": {
          "cause": "nobody_scheduled",
          "end_at": "2021-08-17T13:28:57.801578Z",
          "has_unscheduled_time": true,
          "impacted_users": [
            {
              "cause": "no_on_call_seat",
              "name": "Alice Green",
              "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
            }
          ],
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z"
        },
        "shift_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "shifts": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "layer_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        },
        "state": "active",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "vacation_conflict": {
          "end_at": "2021-08-17T13:28:57.801578Z",
          "holiday_name": "Joe Bloggs - Holiday",
          "rotation_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "schedule_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "start_at": "2021-08-17T13:28:57.801578Z",
          "user_id": "01FCNDV6P870EA6S7TK1DSYDG0"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "postmortem_document",
    "accessor": "PostmortemDocument",
    "op": "list",
    "method": "GET",
    "path": "/v1/postmortem_documents",
    "args": [],
    "select": {
      "after": "01G0J1EXE7AXZ2C93K61WBPYEH",
      "incident_id": "01GBA8J19SMXQWPJMX3P2ESCVG",
      "page_size": 25,
      "sort_by": "created_at_oldest_first"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "incident_id",
      "sort_by"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "sort_by",
        "wire": "sort_by"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "postmortem_documents": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "document_url": "https://app.incident.io/my-org/incidents/123/post-mortems/01GDZEW57FDA1K4S63MGMQ5DS9",
          "editors": [
            {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "viewer",
              "slack_user_id": "U02AYNF2XJM"
            }
          ],
          "exported_urls": [
            "https://www.notion.so/INC-123-sad-database",
            "https://docs.google.com/document/d/1234"
          ],
          "id": "01GDZEW57FDA1K4S63MGMQ5DS9",
          "incident_id": "01GBA8J19SMXQWPJMX3P2ESCVG",
          "status": "in_progress",
          "title": "INC-123: Database is sad",
          "type": "in_app",
          "updated_at": "abc123"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "postmortem_document",
    "accessor": "PostmortemDocument",
    "op": "load",
    "method": "GET",
    "path": "/v1/postmortem_documents/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GDZEW57FDA1K4S63MGMQ5DS9"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "postmortem_document": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "document_url": "https://app.incident.io/my-org/incidents/123/post-mortems/01GDZEW57FDA1K4S63MGMQ5DS9",
        "editors": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "exported_urls": [
          "https://www.notion.so/INC-123-sad-database",
          "https://docs.google.com/document/d/1234"
        ],
        "id": "01GDZEW57FDA1K4S63MGMQ5DS9",
        "incident_id": "01GBA8J19SMXQWPJMX3P2ESCVG",
        "status": "in_progress",
        "title": "INC-123: Database is sad",
        "type": "in_app",
        "updated_at": "abc123"
      }
    },
    "idField": "id"
  },
  {
    "entity": "postmortem_document",
    "accessor": "PostmortemDocument",
    "op": "update",
    "method": "PUT",
    "path": "/v1/postmortem_documents/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01GDZEW57FDA1K4S63MGMQ5DS9"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "postmortem_document": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "document_url": "https://app.incident.io/my-org/incidents/123/post-mortems/01GDZEW57FDA1K4S63MGMQ5DS9",
        "editors": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "viewer",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "exported_urls": [
          "https://www.notion.so/INC-123-sad-database",
          "https://docs.google.com/document/d/1234"
        ],
        "id": "01GDZEW57FDA1K4S63MGMQ5DS9",
        "incident_id": "01GBA8J19SMXQWPJMX3P2ESCVG",
        "status": "in_progress",
        "title": "INC-123: Database is sad",
        "type": "in_app",
        "updated_at": "abc123"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule",
    "accessor": "Schedule",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedules",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "schedule": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "config": {
          "rotations": [
            {
              "effective_from": "2021-08-17T13:28:57.801578Z",
              "handover_start_at": "2021-08-17T13:28:57.801578Z",
              "handovers": [
                {
                  "interval": 1,
                  "interval_type": "hourly"
                }
              ],
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "layers": [
                {
                  "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                  "name": "Layer 1"
                }
              ],
              "name": "Primary On-Call Schedule",
              "scheduling_mode": "fair",
              "users": [
                {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                }
              ],
              "working_interval": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ],
              "working_intervals": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ]
            }
          ]
        },
        "created_at": "2021-08-17T13:28:57.801578Z",
        "current_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "holidays_public_config": {
          "country_codes": [
            "GB",
            "FR"
          ]
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Primary On-Call Schedule",
        "next_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "permalink": "https://app.incident.io/acme/on-call/schedules/01G0J1EXE7AXZ2C93K61WBPYEH",
        "team_ids": [
          "01JPQA75EPNEES4479P16P4XAB"
        ],
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule",
    "accessor": "Schedule",
    "op": "list",
    "method": "GET",
    "path": "/v2/schedules",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25,
        "total_record_count": 238
      },
      "schedules": [
        {
          "annotations": {
            "incident.io/terraform/version": "3.0.0"
          },
          "config": {
            "rotations": [
              {
                "effective_from": "2021-08-17T13:28:57.801578Z",
                "handover_start_at": "2021-08-17T13:28:57.801578Z",
                "handovers": [
                  {
                    "interval": 1,
                    "interval_type": "hourly"
                  }
                ],
                "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                "layers": [
                  {
                    "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                    "name": "Layer 1"
                  }
                ],
                "name": "Primary On-Call Schedule",
                "scheduling_mode": "fair",
                "users": [
                  {
                    "email": "lisa@incident.io",
                    "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                    "name": "Lisa Karlin Curtis",
                    "role": "owner",
                    "slack_user_id": "U02AYNF2XJM"
                  }
                ],
                "working_interval": [
                  {
                    "end_time": "17:00",
                    "start_time": "09:00",
                    "weekday": "monday"
                  }
                ],
                "working_intervals": [
                  {
                    "end_time": "17:00",
                    "start_time": "09:00",
                    "weekday": "monday"
                  }
                ]
              }
            ]
          },
          "created_at": "2021-08-17T13:28:57.801578Z",
          "current_shifts": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "start_at": "2021-08-17T13:28:57.801578Z",
              "user": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              }
            }
          ],
          "holidays_public_config": {
            "country_codes": [
              "GB",
              "FR"
            ]
          },
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "name": "Primary On-Call Schedule",
          "next_shifts": [
            {
              "end_at": "2021-08-17T13:28:57.801578Z",
              "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "start_at": "2021-08-17T13:28:57.801578Z",
              "user": {
                "email": "lisa@incident.io",
                "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                "name": "Lisa Karlin Curtis",
                "role": "owner",
                "slack_user_id": "U02AYNF2XJM"
              }
            }
          ],
          "permalink": "https://app.incident.io/acme/on-call/schedules/01G0J1EXE7AXZ2C93K61WBPYEH",
          "team_ids": [
            "01JPQA75EPNEES4479P16P4XAB"
          ],
          "timezone": "Europe/London",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "schedule",
    "accessor": "Schedule",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "config": {
          "rotations": [
            {
              "effective_from": "2021-08-17T13:28:57.801578Z",
              "handover_start_at": "2021-08-17T13:28:57.801578Z",
              "handovers": [
                {
                  "interval": 1,
                  "interval_type": "hourly"
                }
              ],
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "layers": [
                {
                  "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                  "name": "Layer 1"
                }
              ],
              "name": "Primary On-Call Schedule",
              "scheduling_mode": "fair",
              "users": [
                {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                }
              ],
              "working_interval": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ],
              "working_intervals": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ]
            }
          ]
        },
        "created_at": "2021-08-17T13:28:57.801578Z",
        "current_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "holidays_public_config": {
          "country_codes": [
            "GB",
            "FR"
          ]
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Primary On-Call Schedule",
        "next_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "permalink": "https://app.incident.io/acme/on-call/schedules/01G0J1EXE7AXZ2C93K61WBPYEH",
        "team_ids": [
          "01JPQA75EPNEES4479P16P4XAB"
        ],
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule",
    "accessor": "Schedule",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/schedules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 202,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "schedule",
    "accessor": "Schedule",
    "op": "update",
    "method": "PUT",
    "path": "/v2/schedules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "config": {
          "rotations": [
            {
              "effective_from": "2021-08-17T13:28:57.801578Z",
              "handover_start_at": "2021-08-17T13:28:57.801578Z",
              "handovers": [
                {
                  "interval": 1,
                  "interval_type": "hourly"
                }
              ],
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "layers": [
                {
                  "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                  "name": "Layer 1"
                }
              ],
              "name": "Primary On-Call Schedule",
              "scheduling_mode": "fair",
              "users": [
                {
                  "email": "lisa@incident.io",
                  "id": "01FCNDV6P870EA6S7TK1DSYDG0",
                  "name": "Lisa Karlin Curtis",
                  "role": "owner",
                  "slack_user_id": "U02AYNF2XJM"
                }
              ],
              "working_interval": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ],
              "working_intervals": [
                {
                  "end_time": "17:00",
                  "start_time": "09:00",
                  "weekday": "monday"
                }
              ]
            }
          ]
        },
        "created_at": "2021-08-17T13:28:57.801578Z",
        "current_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "holidays_public_config": {
          "country_codes": [
            "GB",
            "FR"
          ]
        },
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Primary On-Call Schedule",
        "next_shifts": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "permalink": "https://app.incident.io/acme/on-call/schedules/01G0J1EXE7AXZ2C93K61WBPYEH",
        "team_ids": [
          "01JPQA75EPNEES4479P16P4XAB"
        ],
        "timezone": "Europe/London",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_entries_list_payload_v2",
    "accessor": "ScheduleEntriesListPayloadV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedules/{id}/actions/preview_entries",
    "args": [
      {
        "name": "schedule_id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_entries": {
        "final": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "overrides": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "scheduled": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_entry",
    "accessor": "ScheduleEntry",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedule_entries",
    "args": [],
    "select": {
      "schedule_id": "01FDAG4SAP5TYPT98WGR2N7W91",
      "entry_window_end": "2021-01-01T00:00:00Z",
      "entry_window_start": "2021-01-01T00:00:00Z"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "schedule_id",
      "entry_window_start",
      "entry_window_end"
    ],
    "queryArgs": [
      {
        "name": "entry_window_end",
        "wire": "entry_window_end"
      },
      {
        "name": "entry_window_start",
        "wire": "entry_window_start"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "abc123",
        "after_url": "abc123"
      },
      "schedule_entries": {
        "final": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "overrides": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ],
        "scheduled": [
          {
            "end_at": "2021-08-17T13:28:57.801578Z",
            "entry_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "fingerprint": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "start_at": "2021-08-17T13:28:57.801578Z",
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            }
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_replica",
    "accessor": "ScheduleReplica",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedules/{schedule_id}/replicas",
    "args": [
      {
        "name": "id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "schedule_replica": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "last_sync_error": "Failed to find external user for Milly",
        "last_synced_at": "2023-11-07T13:33:30Z",
        "mirror_window_days": 14,
        "replica_fallback_user_id": "PA7AXXN",
        "replica_provider": "pagerduty",
        "replica_provider_id": "PO8107X",
        "schedule_id": "01FDAG4SAP5TYPT98WGR2N7W91",
        "sources": [
          {
            "layer_id": "01G0J1EXE7AXZ2C93K61WBPYNH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
          }
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user_statuses": [
          {
            "external_user_id": "PJYTRGS",
            "user_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_replica",
    "accessor": "ScheduleReplica",
    "op": "list",
    "method": "GET",
    "path": "/v2/schedules/{schedule_id}/replicas",
    "args": [
      {
        "name": "id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_replicas": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "last_sync_error": "Failed to find external user for Milly",
          "last_synced_at": "2023-11-07T13:33:30Z",
          "mirror_window_days": 14,
          "replica_fallback_user_id": "PA7AXXN",
          "replica_provider": "pagerduty",
          "replica_provider_id": "PO8107X",
          "schedule_id": "01FDAG4SAP5TYPT98WGR2N7W91",
          "sources": [
            {
              "layer_id": "01G0J1EXE7AXZ2C93K61WBPYNH",
              "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
            }
          ],
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "user_statuses": [
            {
              "external_user_id": "PJYTRGS",
              "user_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "schedule_replica",
    "accessor": "ScheduleReplica",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedules/{schedule_id}/replicas/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_replica": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "last_sync_error": "Failed to find external user for Milly",
        "last_synced_at": "2023-11-07T13:33:30Z",
        "mirror_window_days": 14,
        "replica_fallback_user_id": "PA7AXXN",
        "replica_provider": "pagerduty",
        "replica_provider_id": "PO8107X",
        "schedule_id": "01FDAG4SAP5TYPT98WGR2N7W91",
        "sources": [
          {
            "layer_id": "01G0J1EXE7AXZ2C93K61WBPYNH",
            "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
          }
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user_statuses": [
          {
            "external_user_id": "PJYTRGS",
            "user_id": "01G0J1EXE7AXZ2C93K61WBPYEH"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_rule",
    "accessor": "ScheduleSyncRule",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedules/{schedule_id}/sync_rules",
    "args": [
      {
        "name": "id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "schedule_sync_rule": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000CD",
        "permanent_member_user_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rotation_id": "01JXYZ000000000000000000RT",
        "schedule_id": "01JXYZ000000000000000000EF",
        "schedule_sync_target": {
          "add_bot_to_group": true,
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01JXYZ000000000000000000AB",
          "linked_schedules": [
            {
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "name": "Primary On-Call Schedule",
              "team_ids": [
                "01JPQA75EPNEES4479P16P4XAB"
              ]
            }
          ],
          "slack_team_id": "T02A1AZHG3J",
          "slack_user_group_id": "S06MNNU5BMK",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "schedule_sync_target_id": "01JXYZ000000000000000000AB",
        "sync_type": "on_call",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_rule",
    "accessor": "ScheduleSyncRule",
    "op": "list",
    "method": "GET",
    "path": "/v2/schedules/{schedule_id}/sync_rules",
    "args": [
      {
        "name": "id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {
      "after": "01JXYZ000000000000000000CD",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "schedule_sync_rules": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01JXYZ000000000000000000CD",
          "permanent_member_user_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "rotation_id": "01JXYZ000000000000000000RT",
          "schedule_id": "01JXYZ000000000000000000EF",
          "schedule_sync_target": {
            "add_bot_to_group": true,
            "created_at": "2021-08-17T13:28:57.801578Z",
            "id": "01JXYZ000000000000000000AB",
            "linked_schedules": [
              {
                "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
                "name": "Primary On-Call Schedule",
                "team_ids": [
                  "01JPQA75EPNEES4479P16P4XAB"
                ]
              }
            ],
            "slack_team_id": "T02A1AZHG3J",
            "slack_user_group_id": "S06MNNU5BMK",
            "updated_at": "2021-08-17T13:28:57.801578Z"
          },
          "schedule_sync_target_id": "01JXYZ000000000000000000AB",
          "sync_type": "on_call",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_rule",
    "accessor": "ScheduleSyncRule",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedules/{schedule_id}/sync_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01JXYZ000000000000000000CD"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_sync_rule": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000CD",
        "permanent_member_user_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rotation_id": "01JXYZ000000000000000000RT",
        "schedule_id": "01JXYZ000000000000000000EF",
        "schedule_sync_target": {
          "add_bot_to_group": true,
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01JXYZ000000000000000000AB",
          "linked_schedules": [
            {
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "name": "Primary On-Call Schedule",
              "team_ids": [
                "01JPQA75EPNEES4479P16P4XAB"
              ]
            }
          ],
          "slack_team_id": "T02A1AZHG3J",
          "slack_user_group_id": "S06MNNU5BMK",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "schedule_sync_target_id": "01JXYZ000000000000000000AB",
        "sync_type": "on_call",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_rule",
    "accessor": "ScheduleSyncRule",
    "op": "update",
    "method": "PUT",
    "path": "/v2/schedules/{schedule_id}/sync_rules/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01JXYZ000000000000000000CD"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_sync_rule": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000CD",
        "permanent_member_user_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "rotation_id": "01JXYZ000000000000000000RT",
        "schedule_id": "01JXYZ000000000000000000EF",
        "schedule_sync_target": {
          "add_bot_to_group": true,
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01JXYZ000000000000000000AB",
          "linked_schedules": [
            {
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "name": "Primary On-Call Schedule",
              "team_ids": [
                "01JPQA75EPNEES4479P16P4XAB"
              ]
            }
          ],
          "slack_team_id": "T02A1AZHG3J",
          "slack_user_group_id": "S06MNNU5BMK",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        },
        "schedule_sync_target_id": "01JXYZ000000000000000000AB",
        "sync_type": "on_call",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_target",
    "accessor": "ScheduleSyncTarget",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedule_sync_targets",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "schedule_sync_target": {
        "add_bot_to_group": true,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000AB",
        "linked_schedules": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Primary On-Call Schedule",
            "team_ids": [
              "01JPQA75EPNEES4479P16P4XAB"
            ]
          }
        ],
        "slack_team_id": "T02A1AZHG3J",
        "slack_user_group_id": "S06MNNU5BMK",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_target",
    "accessor": "ScheduleSyncTarget",
    "op": "list",
    "method": "GET",
    "path": "/v2/schedule_sync_targets",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "schedule_sync_targets": [
        {
          "add_bot_to_group": true,
          "created_at": "2021-08-17T13:28:57.801578Z",
          "id": "01JXYZ000000000000000000AB",
          "linked_schedules": [
            {
              "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
              "name": "Primary On-Call Schedule",
              "team_ids": [
                "01JPQA75EPNEES4479P16P4XAB"
              ]
            }
          ],
          "slack_team_id": "T02A1AZHG3J",
          "slack_user_group_id": "S06MNNU5BMK",
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_target",
    "accessor": "ScheduleSyncTarget",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedule_sync_targets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_sync_target": {
        "add_bot_to_group": true,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000AB",
        "linked_schedules": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Primary On-Call Schedule",
            "team_ids": [
              "01JPQA75EPNEES4479P16P4XAB"
            ]
          }
        ],
        "slack_team_id": "T02A1AZHG3J",
        "slack_user_group_id": "S06MNNU5BMK",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedule_sync_target",
    "accessor": "ScheduleSyncTarget",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/schedule_sync_targets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "schedule_sync_target",
    "accessor": "ScheduleSyncTarget",
    "op": "update",
    "method": "PUT",
    "path": "/v2/schedule_sync_targets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "schedule_sync_target": {
        "add_bot_to_group": true,
        "created_at": "2021-08-17T13:28:57.801578Z",
        "id": "01JXYZ000000000000000000AB",
        "linked_schedules": [
          {
            "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
            "name": "Primary On-Call Schedule",
            "team_ids": [
              "01JPQA75EPNEES4479P16P4XAB"
            ]
          }
        ],
        "slack_team_id": "T02A1AZHG3J",
        "slack_user_group_id": "S06MNNU5BMK",
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedules_show_override_result_v2",
    "accessor": "SchedulesShowOverrideResultV2",
    "op": "create",
    "method": "POST",
    "path": "/v2/schedule_overrides",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "override": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "layer_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "slack_user_id": "U02AYNF2XJM"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedules_show_override_result_v2",
    "accessor": "SchedulesShowOverrideResultV2",
    "op": "list",
    "method": "GET",
    "path": "/v2/schedule_overrides",
    "args": [],
    "select": {
      "schedule_id": "01FDAG4SAP5TYPT98WGR2N7W91",
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "layer_id": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25,
      "rotation_id": "01FDAG4SAP5TYPT98WGR2N7W91"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "schedule_id",
      "rotation_id",
      "layer_id",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "layer_id",
        "wire": "layer_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "rotation_id",
        "wire": "rotation_id"
      },
      {
        "name": "schedule_id",
        "wire": "schedule_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "overrides": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "end_at": "2021-08-17T13:28:57.801578Z",
          "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "layer_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
          "start_at": "2021-08-17T13:28:57.801578Z",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "user": {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "role": "owner",
            "slack_user_id": "U02AYNF2XJM"
          }
        }
      ],
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedules_show_override_result_v2",
    "accessor": "SchedulesShowOverrideResultV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/schedule_overrides/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "override": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "layer_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "slack_user_id": "U02AYNF2XJM"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "schedules_update_override_result_v2",
    "accessor": "SchedulesUpdateOverrideResultV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/schedule_overrides/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FDAG4SAP5TYPT98WGR2N7W91"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "override": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "end_at": "2021-08-17T13:28:57.801578Z",
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "layer_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "rotation_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "schedule_id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "start_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "user": {
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "slack_user_id": "U02AYNF2XJM"
        }
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "create",
    "method": "POST",
    "path": "/v2/secrets/{id}/actions/rotate",
    "action": "action_rotate",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "secret": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Auth token for the PagerDuty outgoing webhook",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_four_chars": "c123",
        "name": "PagerDuty webhook token",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "create",
    "method": "POST",
    "path": "/v2/secrets",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "secret": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Auth token for the PagerDuty outgoing webhook",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_four_chars": "c123",
        "name": "PagerDuty webhook token",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "list",
    "method": "GET",
    "path": "/v2/secrets",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "team_id": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after",
      "team_ids"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "team_id",
        "wire": "team_ids"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "secrets": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Auth token for the PagerDuty outgoing webhook",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "last_four_chars": "c123",
          "name": "PagerDuty webhook token",
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "version": 3
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "load",
    "method": "GET",
    "path": "/v2/secrets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "secret": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Auth token for the PagerDuty outgoing webhook",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_four_chars": "c123",
        "name": "PagerDuty webhook token",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 3
      },
      "versions": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "created_by": {
            "alert": {
              "id": "01GW2G3V0S59R238FAHPDS1R66",
              "title": "*errors.withMessage: PG::Error failed to connect"
            },
            "api_key": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My test API key"
            },
            "user": {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "role": "owner",
              "slack_user_id": "U02AYNF2XJM"
            },
            "workflow": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "My little workflow"
            }
          },
          "last_four_chars": "c123",
          "version": 3
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/secrets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "secret",
    "accessor": "Secret",
    "op": "update",
    "method": "PUT",
    "path": "/v2/secrets/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "secret": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Auth token for the PagerDuty outgoing webhook",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "last_four_chars": "c123",
        "name": "PagerDuty webhook token",
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "severity",
    "accessor": "Severity",
    "op": "create",
    "method": "POST",
    "path": "/v1/severities",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "severity": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Issues with **low impact**.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Minor",
        "rank": 1,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "severity",
    "accessor": "Severity",
    "op": "list",
    "method": "GET",
    "path": "/v1/severities",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "severities": [
        {
          "created_at": "2021-08-17T13:28:57.801578Z",
          "description": "Issues with **low impact**.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Minor",
          "rank": 1,
          "updated_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "severity",
    "accessor": "Severity",
    "op": "load",
    "method": "GET",
    "path": "/v1/severities/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "severity": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Issues with **low impact**.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Minor",
        "rank": 1,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "severity",
    "accessor": "Severity",
    "op": "update",
    "method": "PUT",
    "path": "/v1/severities/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "severity": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "description": "Issues with **low impact**.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Minor",
        "rank": 1,
        "updated_at": "2021-08-17T13:28:57.801578Z"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page",
    "accessor": "StatusPage",
    "op": "list",
    "method": "GET",
    "path": "/v2/status_pages",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "status_pages": [
        {
          "description": "This status page is our public status page.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Our public status page",
          "public_url": "https://statuspage.incident.io/our-public-status-page"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "status_page",
    "accessor": "StatusPage",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_pages/{status_page_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page": {
        "description": "This status page is our public status page.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "name": "Our public status page",
        "public_url": "https://statuspage.incident.io/our-public-status-page"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_component",
    "accessor": "StatusPageComponent",
    "op": "create",
    "method": "POST",
    "path": "/v2/status_page_components",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "status_page_component": {
        "description": "Our iOS app",
        "id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "management_meta": {
          "annotations": {
            "incident.io/terraform/version": "3.0.0"
          },
          "managed_by": "terraform",
          "source_url": "https://github.com/my-company/infrastructure"
        },
        "name": "App"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_component",
    "accessor": "StatusPageComponent",
    "op": "list",
    "method": "GET",
    "path": "/v2/status_page_components",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_components": [
        {
          "description": "Our iOS app",
          "id": "01FCNDV6P870EA6S7TK1DSYDG1",
          "management_meta": {
            "annotations": {
              "incident.io/terraform/version": "3.0.0"
            },
            "managed_by": "terraform",
            "source_url": "https://github.com/my-company/infrastructure"
          },
          "name": "App"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "status_page_component",
    "accessor": "StatusPageComponent",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_page_components/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_component": {
        "description": "Our iOS app",
        "id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "management_meta": {
          "annotations": {
            "incident.io/terraform/version": "3.0.0"
          },
          "managed_by": "terraform",
          "source_url": "https://github.com/my-company/infrastructure"
        },
        "name": "App"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_component",
    "accessor": "StatusPageComponent",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/status_page_components/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "status_page_component",
    "accessor": "StatusPageComponent",
    "op": "update",
    "method": "PUT",
    "path": "/v2/status_page_components/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_component": {
        "description": "Our iOS app",
        "id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "management_meta": {
          "annotations": {
            "incident.io/terraform/version": "3.0.0"
          },
          "managed_by": "terraform",
          "source_url": "https://github.com/my-company/infrastructure"
        },
        "name": "App"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_component_availability_v2",
    "accessor": "StatusPageComponentAvailabilityV2",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_pages/{status_page_id}/components/{component_id}/availability",
    "args": [
      {
        "name": "component_id",
        "wire": "component_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      },
      {
        "name": "status_page_id",
        "wire": "status_page_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {
      "end_at": "2026-02-01T00:00:00Z",
      "start_at": "2026-01-01T00:00:00Z"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "start_at",
      "end_at"
    ],
    "queryArgs": [
      {
        "name": "end_at",
        "wire": "end_at"
      },
      {
        "name": "start_at",
        "wire": "start_at"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "availability": {
        "availability_percent": "99.94",
        "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
        "data_available_since": "2025-06-01T00:00:00Z",
        "end_at": "2026-02-01T00:00:00Z",
        "start_at": "2026-01-01T00:00:00Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_incident",
    "accessor": "StatusPageIncident",
    "op": "create",
    "method": "POST",
    "path": "/v2/status_page_incidents",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "status_page_incident": {
        "component_impacts": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "component_status": "degraded_performance",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_status": "investigating",
        "name": "Elevated API latency",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_status": "investigating",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_incident",
    "accessor": "StatusPageIncident",
    "op": "list",
    "method": "GET",
    "path": "/v2/status_page_incidents",
    "args": [],
    "select": {
      "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
      "end_at": "2021-08-17T13:28:57.801578Z",
      "group_id": "01FCNDV6P870EA6S7TK1DSYDG2",
      "page_size": 25,
      "start_at": "2021-08-17T13:28:57.801578Z",
      "sub_page_id": "01FCNDV6P870EA6S7TK1DSYDG3"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status_page_id",
      "component_id",
      "group_id",
      "sub_page_id",
      "start_at",
      "end_at",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "component_id",
        "wire": "component_id"
      },
      {
        "name": "end_at",
        "wire": "end_at"
      },
      {
        "name": "group_id",
        "wire": "group_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "start_at",
        "wire": "start_at"
      },
      {
        "name": "status_page_id",
        "wire": "status_page_id"
      },
      {
        "name": "sub_page_id",
        "wire": "sub_page_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "status_page_incidents": [
        {
          "component_impacts": [
            {
              "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
              "component_status": "degraded_performance",
              "end_at": "2021-08-17T13:28:57.801578Z",
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_status": "investigating",
          "name": "Elevated API latency",
          "published_at": "2021-08-17T13:28:57.801578Z",
          "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "updates": [
            {
              "component_statuses": [
                {
                  "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                  "component_status": "operational"
                }
              ],
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "incident_status": "investigating",
              "message": "abc123",
              "published_at": "2021-08-17T13:28:57.801578Z",
              "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "status_page_incident",
    "accessor": "StatusPageIncident",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_page_incidents/{status_page_incident_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_incident_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_incident": {
        "component_impacts": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "component_status": "degraded_performance",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_status": "investigating",
        "name": "Elevated API latency",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_status": "investigating",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_incident",
    "accessor": "StatusPageIncident",
    "op": "update",
    "method": "PUT",
    "path": "/v2/status_page_incidents/{status_page_incident_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_incident_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_incident": {
        "component_impacts": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "component_status": "degraded_performance",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_status": "investigating",
        "name": "Elevated API latency",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_status": "investigating",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_incident_update",
    "accessor": "StatusPageIncidentUpdate",
    "op": "create",
    "method": "POST",
    "path": "/v2/status_page_incident_updates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "status_page_incident_update": {
        "component_statuses": [
          {
            "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
            "component_status": "operational"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_status": "investigating",
        "message": "abc123",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_incident_id": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_linked_response_incident_v1",
    "accessor": "StatusPageLinkedResponseIncidentV1",
    "op": "list",
    "method": "GET",
    "path": "/v1/status-pages/{id}/incidents/{incident_id}/response-incidents",
    "args": [
      {
        "name": "incident_id",
        "wire": "incident_id",
        "value": "abc123"
      },
      {
        "name": "status_page_id",
        "wire": "id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "incidents": [
        {
          "id": "01FDAG4SAH3GYPT98WGR2N7W91",
          "linked_at": "2021-08-17T13:28:57.801578Z"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "status_page_maintenance",
    "accessor": "StatusPageMaintenance",
    "op": "create",
    "method": "POST",
    "path": "/v2/status_page_maintenances",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "status_page_maintenance": {
        "automate_maintenance_status": true,
        "component_maintenance_periods": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "maintenance_status": "maintenance_scheduled",
        "name": "Routine infrastructure upgrade",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "maintenance_status": "maintenance_scheduled",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_maintenance_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_maintenance",
    "accessor": "StatusPageMaintenance",
    "op": "list",
    "method": "GET",
    "path": "/v2/status_page_maintenances",
    "args": [],
    "select": {
      "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
      "end_at": "2021-08-17T13:28:57.801578Z",
      "group_id": "01FCNDV6P870EA6S7TK1DSYDG2",
      "page_size": 25,
      "start_at": "2021-08-17T13:28:57.801578Z",
      "sub_page_id": "01FCNDV6P870EA6S7TK1DSYDG3"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "status_page_id",
      "component_id",
      "group_id",
      "sub_page_id",
      "start_at",
      "end_at",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "component_id",
        "wire": "component_id"
      },
      {
        "name": "end_at",
        "wire": "end_at"
      },
      {
        "name": "group_id",
        "wire": "group_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "start_at",
        "wire": "start_at"
      },
      {
        "name": "status_page_id",
        "wire": "status_page_id"
      },
      {
        "name": "sub_page_id",
        "wire": "sub_page_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "status_page_maintenances": [
        {
          "automate_maintenance_status": true,
          "component_maintenance_periods": [
            {
              "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
              "end_at": "2021-08-17T13:28:57.801578Z",
              "start_at": "2021-08-17T13:28:57.801578Z"
            }
          ],
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "maintenance_status": "maintenance_scheduled",
          "name": "Routine infrastructure upgrade",
          "published_at": "2021-08-17T13:28:57.801578Z",
          "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "updates": [
            {
              "component_statuses": [
                {
                  "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                  "component_status": "operational"
                }
              ],
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "maintenance_status": "maintenance_scheduled",
              "message": "abc123",
              "published_at": "2021-08-17T13:28:57.801578Z",
              "status_page_maintenance_id": "01FCNDV6P870EA6S7TK1DSYDG1"
            }
          ]
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "status_page_maintenance",
    "accessor": "StatusPageMaintenance",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_page_maintenances/{status_page_maintenance_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_maintenance_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_maintenance": {
        "automate_maintenance_status": true,
        "component_maintenance_periods": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "maintenance_status": "maintenance_scheduled",
        "name": "Routine infrastructure upgrade",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "maintenance_status": "maintenance_scheduled",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_maintenance_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_maintenance",
    "accessor": "StatusPageMaintenance",
    "op": "update",
    "method": "PUT",
    "path": "/v2/status_page_maintenances/{status_page_maintenance_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_maintenance_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "status_page_maintenance": {
        "automate_maintenance_status": true,
        "component_maintenance_periods": [
          {
            "component_id": "01GW7P4ES31Q6V1ZQH321T0GJN",
            "end_at": "2021-08-17T13:28:57.801578Z",
            "start_at": "2021-08-17T13:28:57.801578Z"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "maintenance_status": "maintenance_scheduled",
        "name": "Routine infrastructure upgrade",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "updates": [
          {
            "component_statuses": [
              {
                "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
                "component_status": "operational"
              }
            ],
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "maintenance_status": "maintenance_scheduled",
            "message": "abc123",
            "published_at": "2021-08-17T13:28:57.801578Z",
            "status_page_maintenance_id": "01FCNDV6P870EA6S7TK1DSYDG1"
          }
        ]
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_maintenance_update",
    "accessor": "StatusPageMaintenanceUpdate",
    "op": "create",
    "method": "POST",
    "path": "/v2/status_page_maintenance_updates",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "status_page_maintenance_update": {
        "component_statuses": [
          {
            "component_id": "01FCNDV6P870EA6S7TK1DSYDG2",
            "component_status": "operational"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "maintenance_status": "maintenance_scheduled",
        "message": "abc123",
        "published_at": "2021-08-17T13:28:57.801578Z",
        "status_page_maintenance_id": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_page_structure",
    "accessor": "StatusPageStructure",
    "op": "load",
    "method": "GET",
    "path": "/v2/status_page_structures/{status_page_id}",
    "args": [
      {
        "name": "id",
        "wire": "status_page_id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "current_structure": {
        "items": [
          {
            "component": {
              "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
              "display_uptime": true,
              "hidden": false,
              "name": "App"
            },
            "group": {
              "components": [
                {
                  "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
                  "display_uptime": true,
                  "hidden": false,
                  "name": "App"
                }
              ],
              "description": "Services hosted in our EU data center",
              "display_aggregated_uptime": true,
              "hidden": false,
              "id": "01FCNDV6P870EA6S7TK1DSYDG1",
              "name": "EU Data center"
            },
            "sub_page": {
              "id": "01FCNDV6P870EA6S7TK1DSYDG1",
              "items": [
                {
                  "component": {
                    "component_id": "01FCNDV6P870EA6S7TK1DSYDG1",
                    "display_uptime": true,
                    "hidden": false,
                    "name": "App"
                  },
                  "group": {
                    "components": [
                      null
                    ],
                    "description": "Services hosted in our EU data center",
                    "display_aggregated_uptime": true,
                    "hidden": false,
                    "id": "01FCNDV6P870EA6S7TK1DSYDG1",
                    "name": "EU Data center"
                  }
                }
              ],
              "name": "United Kingdom"
            }
          }
        ]
      },
      "display_uptime_mode": "chart_and_percentage",
      "management_meta": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "managed_by": "terraform",
        "source_url": "https://github.com/my-company/infrastructure"
      }
    },
    "idField": "id"
  },
  {
    "entity": "status_pages_v2",
    "accessor": "StatusPagesV2",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/status_page_maintenances/{status_page_maintenance_id}",
    "args": [
      {
        "name": "status_page_maintenance_id",
        "wire": "status_page_maintenance_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG1"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "list",
    "method": "GET",
    "path": "/v3/teams",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "page_size": 25
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "teams": [
        {
          "catalog_entry": {
            "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Primary On-call"
          },
          "id": "abc123",
          "members": [
            {
              "email": "lisa@incident.io",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Lisa Karlin Curtis",
              "slack_user_id": "U02AYNF2XJM"
            }
          ],
          "name": "abc123"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "team",
    "accessor": "Team",
    "op": "load",
    "method": "GET",
    "path": "/v3/teams/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "abc123"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "team": {
        "catalog_entry": {
          "external_id": "761722cd-d1d7-477b-ac7e-90f9e079dc33",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Primary On-call"
        },
        "id": "abc123",
        "members": [
          {
            "email": "lisa@incident.io",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Lisa Karlin Curtis",
            "slack_user_id": "U02AYNF2XJM"
          }
        ],
        "name": "abc123"
      }
    },
    "idField": "id"
  },
  {
    "entity": "telemetry_data_source_v2",
    "accessor": "TelemetryDataSourceV2",
    "op": "update",
    "method": "PUT",
    "path": "/v2/telemetry/data_sources/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01G0J1EXE7AXZ2C93K61WBPYEH"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "data_source": {
        "created_at": "2021-08-17T13:28:57.801578Z",
        "enabled": true,
        "id": "01G0J1EXE7AXZ2C93K61WBPYEH",
        "name": "Primary Prometheus",
        "provider": "grafana",
        "source_type": "grafana",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "version": "8.5.27"
      }
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "create",
    "method": "POST",
    "path": "/v2/users/{user_id}/paging_provider",
    "action": "paging_provider",
    "args": [
      {
        "name": "id",
        "wire": "user_id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "list",
    "method": "GET",
    "path": "/v2/users",
    "args": [],
    "select": {
      "after": "01FDAG4SAP5TYPT98WGR2N7W91",
      "email": "john.doe@incident.io",
      "include_inactive": "v1",
      "page_size": 25,
      "slack_user_id": "U12345678"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "email",
      "slack_user_id",
      "include_inactive",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "email",
        "wire": "email"
      },
      {
        "name": "include_inactive",
        "wire": "include_inactive"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "slack_user_id",
        "wire": "slack_user_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25
      },
      "users": [
        {
          "base_role": {
            "description": "Elevated permissions for the customer success team.",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Customer Success",
            "slug": "customer-success"
          },
          "custom_roles": [
            {
              "description": "Elevated permissions for the customer success team.",
              "id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "name": "Customer Success",
              "slug": "customer-success"
            }
          ],
          "email": "lisa@incident.io",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "is_active": true,
          "name": "Lisa Karlin Curtis",
          "role": "owner",
          "seats": {
            "on_call": "full_access",
            "response": "viewer_only"
          },
          "slack_user_id": "U02AYNF2XJM"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "user",
    "accessor": "User",
    "op": "load",
    "method": "GET",
    "path": "/v2/users/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "user": {
        "base_role": {
          "description": "Elevated permissions for the customer success team.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "name": "Customer Success",
          "slug": "customer-success"
        },
        "custom_roles": [
          {
            "description": "Elevated permissions for the customer success team.",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "name": "Customer Success",
            "slug": "customer-success"
          }
        ],
        "email": "lisa@incident.io",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "is_active": true,
        "name": "Lisa Karlin Curtis",
        "role": "owner",
        "seats": {
          "on_call": "full_access",
          "response": "viewer_only"
        },
        "slack_user_id": "U02AYNF2XJM"
      }
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "create",
    "method": "POST",
    "path": "/v2/workflows",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 201,
    "sample": {
      "management_meta": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "managed_by": "terraform",
        "source_url": "https://github.com/my-company/infrastructure"
      },
      "workflow": {
        "auto_run_mode": "confirm_before_running",
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "continue_on_step_error": true,
        "delay": {
          "conditions_apply_over_delay": false,
          "for_seconds": 60
        },
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "folder": "My folder 01",
        "form_fields": [
          {
            "array": true,
            "description": "The customer affected by this incident",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "key": "affected_customer",
            "required": true,
            "title": "Affected customer",
            "type": "User"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "include_private_escalations": true,
        "include_private_incidents": true,
        "name": "My little workflow",
        "once_for": [
          {
            "array": false,
            "key": "incident.custom_field[\"01FCNDV6P870EA6S7TK1DSYDG0\"]",
            "label": "Incident -> Affected Team",
            "type": "IncidentSeverity"
          }
        ],
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "owning_teams",
        "runs_from": "2021-08-17T13:28:57.801578Z",
        "runs_on_incident_modes": [
          "standard",
          "test",
          "retrospective"
        ],
        "runs_on_incidents": "newly_created",
        "shortform": "page-the-ceo",
        "state": "active",
        "steps": [
          {
            "for_each": "abc123",
            "id": "abc123",
            "label": "PagerDuty Escalate",
            "name": "pagerduty.escalate",
            "param_bindings": [
              {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "trigger": {
          "label": "Incident Updated",
          "name": "incident.updated"
        },
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "list",
    "method": "GET",
    "path": "/v2/workflows",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflows": [
        {
          "auto_run_mode": "confirm_before_running",
          "condition_groups": [
            {
              "conditions": [
                {
                  "operation": {
                    "label": "Lawrence Jones",
                    "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                  },
                  "param_bindings": [
                    {
                      "array_value": null,
                      "value": null
                    }
                  ],
                  "subject": {
                    "label": "Incident Severity",
                    "reference": "incident.severity"
                  }
                }
              ]
            }
          ],
          "continue_on_step_error": true,
          "delay": {
            "conditions_apply_over_delay": false,
            "for_seconds": 60
          },
          "expressions": [
            {
              "else_branch": {
                "result": {
                  "array_value": [
                    {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  ],
                  "value": {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                }
              },
              "label": "Team Slack channel",
              "operations": [
                {
                  "branches": {
                    "branches": [
                      null
                    ],
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "cast": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    }
                  },
                  "concatenate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "filter": {
                    "condition_groups": [
                      null
                    ]
                  },
                  "navigate": {
                    "reference": "1235",
                    "reference_label": "Teams"
                  },
                  "operation_type": "navigate",
                  "parse": {
                    "returns": {
                      "array": true,
                      "type": "IncidentStatus"
                    },
                    "source": "metadata.annotations[\"github.com/repo\"]"
                  },
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                }
              ],
              "reference": "abc123",
              "returns": {
                "array": true,
                "type": "IncidentStatus"
              },
              "root_reference": "incident.status"
            }
          ],
          "folder": "My folder 01",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "include_private_escalations": true,
          "include_private_incidents": true,
          "name": "My little workflow",
          "once_for": [
            {
              "array": false,
              "key": "incident.custom_field[\"01FCNDV6P870EA6S7TK1DSYDG0\"]",
              "label": "Incident -> Affected Team",
              "type": "IncidentSeverity"
            }
          ],
          "owning_team_ids": [
            "01G0J1EXE7AXZ2C93K61WBPYEH"
          ],
          "private_incident_scope": "owning_teams",
          "runs_from": "2021-08-17T13:28:57.801578Z",
          "runs_on_incident_modes": [
            "standard",
            "test",
            "retrospective"
          ],
          "runs_on_incidents": "newly_created",
          "shortform": "page-the-ceo",
          "state": "active",
          "steps": [
            {
              "label": "PagerDuty Escalate",
              "name": "pagerduty.escalate"
            }
          ],
          "trigger": {
            "label": "Incident Updated",
            "name": "incident.updated"
          },
          "version": 3
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "load",
    "method": "GET",
    "path": "/v2/workflows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {
      "skip_step_upgrade": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "skip_step_upgrades"
    ],
    "queryArgs": [
      {
        "name": "skip_step_upgrade",
        "wire": "skip_step_upgrades"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "management_meta": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "managed_by": "terraform",
        "source_url": "https://github.com/my-company/infrastructure"
      },
      "workflow": {
        "auto_run_mode": "confirm_before_running",
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "continue_on_step_error": true,
        "delay": {
          "conditions_apply_over_delay": false,
          "for_seconds": 60
        },
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "folder": "My folder 01",
        "form_fields": [
          {
            "array": true,
            "description": "The customer affected by this incident",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "key": "affected_customer",
            "required": true,
            "title": "Affected customer",
            "type": "User"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "include_private_escalations": true,
        "include_private_incidents": true,
        "name": "My little workflow",
        "once_for": [
          {
            "array": false,
            "key": "incident.custom_field[\"01FCNDV6P870EA6S7TK1DSYDG0\"]",
            "label": "Incident -> Affected Team",
            "type": "IncidentSeverity"
          }
        ],
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "owning_teams",
        "runs_from": "2021-08-17T13:28:57.801578Z",
        "runs_on_incident_modes": [
          "standard",
          "test",
          "retrospective"
        ],
        "runs_on_incidents": "newly_created",
        "shortform": "page-the-ceo",
        "state": "active",
        "steps": [
          {
            "for_each": "abc123",
            "id": "abc123",
            "label": "PagerDuty Escalate",
            "name": "pagerduty.escalate",
            "param_bindings": [
              {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "trigger": {
          "label": "Incident Updated",
          "name": "incident.updated"
        },
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "remove",
    "method": "DELETE",
    "path": "/v2/workflows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 204,
    "sample": null,
    "idField": "id"
  },
  {
    "entity": "workflow",
    "accessor": "Workflow",
    "op": "update",
    "method": "PUT",
    "path": "/v2/workflows/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "management_meta": {
        "annotations": {
          "incident.io/terraform/version": "3.0.0"
        },
        "managed_by": "terraform",
        "source_url": "https://github.com/my-company/infrastructure"
      },
      "workflow": {
        "auto_run_mode": "confirm_before_running",
        "condition_groups": [
          {
            "conditions": [
              {
                "operation": {
                  "label": "Lawrence Jones",
                  "value": "01FCQSP07Z74QMMYPDDGQB9FTG"
                },
                "param_bindings": [
                  {
                    "array_value": [
                      null
                    ],
                    "value": {
                      "label": "Lawrence Jones",
                      "literal": "SEV123",
                      "reference": "incident.severity"
                    }
                  }
                ],
                "subject": {
                  "label": "Incident Severity",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "continue_on_step_error": true,
        "delay": {
          "conditions_apply_over_delay": false,
          "for_seconds": 60
        },
        "expressions": [
          {
            "else_branch": {
              "result": {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            },
            "label": "Team Slack channel",
            "operations": [
              {
                "branches": {
                  "branches": [
                    {
                      "condition_groups": null,
                      "result": null
                    }
                  ],
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "cast": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  }
                },
                "concatenate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "filter": {
                  "condition_groups": [
                    {
                      "conditions": null
                    }
                  ]
                },
                "navigate": {
                  "reference": "1235",
                  "reference_label": "Teams"
                },
                "operation_type": "navigate",
                "parse": {
                  "returns": {
                    "array": true,
                    "type": "IncidentStatus"
                  },
                  "source": "metadata.annotations[\"github.com/repo\"]"
                },
                "returns": {
                  "array": true,
                  "type": "IncidentStatus"
                }
              }
            ],
            "reference": "abc123",
            "returns": {
              "array": true,
              "type": "IncidentStatus"
            },
            "root_reference": "incident.status"
          }
        ],
        "folder": "My folder 01",
        "form_fields": [
          {
            "array": true,
            "description": "The customer affected by this incident",
            "id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "key": "affected_customer",
            "required": true,
            "title": "Affected customer",
            "type": "User"
          }
        ],
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "include_private_escalations": true,
        "include_private_incidents": true,
        "name": "My little workflow",
        "once_for": [
          {
            "array": false,
            "key": "incident.custom_field[\"01FCNDV6P870EA6S7TK1DSYDG0\"]",
            "label": "Incident -> Affected Team",
            "type": "IncidentSeverity"
          }
        ],
        "owning_team_ids": [
          "01G0J1EXE7AXZ2C93K61WBPYEH"
        ],
        "private_incident_scope": "owning_teams",
        "runs_from": "2021-08-17T13:28:57.801578Z",
        "runs_on_incident_modes": [
          "standard",
          "test",
          "retrospective"
        ],
        "runs_on_incidents": "newly_created",
        "shortform": "page-the-ceo",
        "state": "active",
        "steps": [
          {
            "for_each": "abc123",
            "id": "abc123",
            "label": "PagerDuty Escalate",
            "name": "pagerduty.escalate",
            "param_bindings": [
              {
                "array_value": [
                  {
                    "label": "Lawrence Jones",
                    "literal": "SEV123",
                    "reference": "incident.severity"
                  }
                ],
                "value": {
                  "label": "Lawrence Jones",
                  "literal": "SEV123",
                  "reference": "incident.severity"
                }
              }
            ]
          }
        ],
        "trigger": {
          "label": "Incident Updated",
          "name": "incident.updated"
        },
        "version": 3
      }
    },
    "idField": "id"
  },
  {
    "entity": "workflow_run",
    "accessor": "WorkflowRun",
    "op": "list",
    "method": "GET",
    "path": "/v2/workflow_runs",
    "args": [],
    "select": {
      "after": "01FCNDV6P870EA6S7TK1DSYDG0",
      "created_at": "v1",
      "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
      "page_size": 25,
      "workflow_id": "01FCNDV6P870EA6S7TK1DSYDG0"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "workflow_id",
      "incident_id",
      "created_at",
      "page_size",
      "after"
    ],
    "queryArgs": [
      {
        "name": "after",
        "wire": "after"
      },
      {
        "name": "created_at",
        "wire": "created_at"
      },
      {
        "name": "incident_id",
        "wire": "incident_id"
      },
      {
        "name": "page_size",
        "wire": "page_size"
      },
      {
        "name": "workflow_id",
        "wire": "workflow_id"
      }
    ],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "pagination_meta": {
        "after": "01FCNDV6P870EA6S7TK1DSYDG0",
        "page_size": 25,
        "total_record_count": 238
      },
      "workflow_runs": [
        {
          "cancelled_at": "2021-08-17T13:28:57.801578Z",
          "created_at": "2021-08-17T13:28:57.801578Z",
          "enqueued_at": "2021-08-17T13:28:57.801578Z",
          "error": "Something went wrong and our engineers have been notified.",
          "id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "incident_reference": "INC-123",
          "progress": [
            {
              "completed_at": "2021-08-17T13:28:57.801578Z",
              "error": "Something went wrong and our engineers have been notified.",
              "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
              "incident_reference": "INC-123",
              "status": "complete",
              "step": "slack.post_message",
              "webhook_delivery": {
                "duration_ms": 412,
                "endpoint": "https://example.com/hooks/incident",
                "method": "POST",
                "outcome": "non_2xx",
                "status_code": 500
              },
              "webhook_delivery_state": "expired"
            }
          ],
          "scheduled_at": "2021-08-17T13:28:57.801578Z",
          "updated_at": "2021-08-17T13:28:57.801578Z",
          "workflow_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "workflow_name": "Announce incident updates",
          "workflow_version_id": "01FCNDV6P870EA6S7TK1DSYDG0",
          "workflow_version_number": 3
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "workflow_run",
    "accessor": "WorkflowRun",
    "op": "load",
    "method": "GET",
    "path": "/v2/workflow_runs/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "01FCNDV6P870EA6S7TK1DSYDG0"
      }
    ],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": [
      [
        {
          "in": "header",
          "name": "authorization",
          "scheme": "bearer"
        }
      ]
    ],
    "status": 200,
    "sample": {
      "workflow_run": {
        "cancelled_at": "2021-08-17T13:28:57.801578Z",
        "created_at": "2021-08-17T13:28:57.801578Z",
        "enqueued_at": "2021-08-17T13:28:57.801578Z",
        "error": "Something went wrong and our engineers have been notified.",
        "id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "incident_reference": "INC-123",
        "progress": [
          {
            "completed_at": "2021-08-17T13:28:57.801578Z",
            "error": "Something went wrong and our engineers have been notified.",
            "incident_id": "01FCNDV6P870EA6S7TK1DSYDG0",
            "incident_reference": "INC-123",
            "status": "complete",
            "step": "slack.post_message",
            "webhook_delivery": {
              "duration_ms": 412,
              "endpoint": "https://example.com/hooks/incident",
              "method": "POST",
              "outcome": "non_2xx",
              "request": {
                "body": "{\"incident_id\":\"01FCNDV6P870EA6S7TK1DSYDG0\"}",
                "body_truncated": false,
                "headers": {
                  "Content-Type": "application/json"
                }
              },
              "response": {
                "body": "{\"error\":\"unprocessable\"}",
                "body_truncated": false,
                "headers": {
                  "Content-Type": "application/json"
                }
              },
              "status_code": 500
            },
            "webhook_delivery_state": "expired"
          }
        ],
        "scheduled_at": "2021-08-17T13:28:57.801578Z",
        "updated_at": "2021-08-17T13:28:57.801578Z",
        "workflow_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "workflow_name": "Announce incident updates",
        "workflow_version_id": "01FCNDV6P870EA6S7TK1DSYDG0",
        "workflow_version_number": 3
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})

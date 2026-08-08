<?php
declare(strict_types=1);

// IncidentIo SDK configuration

class IncidentIoConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "IncidentIo",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.incident.io",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "action" => [],
                    "alert" => [],
                    "alert_attribute" => [],
                    "alert_note" => [],
                    "alert_route" => [],
                    "alert_source" => [],
                    "api_key" => [],
                    "custom_field" => [],
                    "custom_field_option" => [],
                    "follow_up" => [],
                    "incident" => [],
                    "incident_attachment" => [],
                    "incident_membership" => [],
                    "incident_participant" => [],
                    "incident_participant_workload" => [],
                    "incident_relationship" => [],
                    "incident_role" => [],
                    "incident_status" => [],
                    "incident_timestamp" => [],
                    "incident_type" => [],
                    "incident_update" => [],
                    "ip_allowlist" => [],
                    "maintenance_window" => [],
                    "postmortem_document" => [],
                    "secret" => [],
                    "team" => [],
                    "user" => [],
                    "workflow" => [],
                    "workflow_run" => [],
                ],
            ],
            "entity" => [
        'action' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assignee',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'assignee_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'creator',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'action',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/actions',
                  'parts' => [
                    'v2',
                    'actions',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.action`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'standard',
                        'kind' => 'query',
                        'name' => 'incident_mode',
                        'orig' => 'incident_mode',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/actions',
                  'parts' => [
                    'v2',
                    'actions',
                  ],
                  'select' => [
                    'exist' => [
                      'incident_id',
                      'incident_mode',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.actions`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/actions/{id}',
                  'parts' => [
                    'v2',
                    'actions',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.action`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/actions/{id}',
                  'parts' => [
                    'v2',
                    'actions',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/actions/{id}',
                  'parts' => [
                    'v2',
                    'actions',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.action`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'alert' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'alert_group_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'alert_source_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'attribute',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'deduplication_key',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'resolved_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'source_url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
          ],
          'name' => 'alert',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'alert_group_id',
                        'orig' => 'alert_group_id',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'alert_source',
                        'orig' => 'alert_source',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          '01GBSQF3FHF7FWZQNWGHAVQ804' => [
                            'one_of' => [
                              '01GBSQF3FHF7FWZQNWGHAVQ804',
                              '01ET65M7ZARSFZ6TFDFVQDN9AA',
                            ],
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'attribute',
                        'orig' => 'attribute',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'gte' => [
                            '2025-01-01',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'created_at',
                        'orig' => 'created_at',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'is' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'deduplication_key',
                        'orig' => 'deduplication_key',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'is' => [
                            'true',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'has_note',
                        'orig' => 'has_note',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'is' => [
                            'true',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'include_maintenance_window',
                        'orig' => 'include_maintenance_window',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            'firing',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/alerts',
                  'parts' => [
                    'v2',
                    'alerts',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'alert_group_id',
                      'alert_source',
                      'attribute',
                      'created_at',
                      'deduplication_key',
                      'has_note',
                      'include_maintenance_window',
                      'page_size',
                      'status',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/alerts/{id}',
                  'parts' => [
                    'v2',
                    'alerts',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'alert_attribute' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'array',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'emoji',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'required',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
          ],
          'name' => 'alert_attribute',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/alert_attributes',
                  'parts' => [
                    'v2',
                    'alert_attributes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_attribute`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/alert_attributes',
                  'parts' => [
                    'v2',
                    'alert_attributes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_attributes`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/alert_attributes/{id}',
                  'parts' => [
                    'v2',
                    'alert_attributes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_attribute`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/alert_attributes/{id}',
                  'parts' => [
                    'v2',
                    'alert_attributes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/alert_attributes/{id}',
                  'parts' => [
                    'v2',
                    'alert_attributes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_attribute`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'alert_note' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'alert_group_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'alert_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'content',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'creator',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'image',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'last_edited_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'alert_note',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/alert_notes',
                  'parts' => [
                    'v1',
                    'alert_notes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_note`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01HB9Z8WANK6P870EA6S7TK1DS',
                        'kind' => 'query',
                        'name' => 'alert_group_id',
                        'orig' => 'alert_group_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'alert_id',
                        'orig' => 'alert_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/alert_notes',
                  'parts' => [
                    'v1',
                    'alert_notes',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'alert_group_id',
                      'alert_id',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01J1X9J85C7Y12G8P8W8K55Q5Y',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/alert_notes/{id}',
                  'parts' => [
                    'v1',
                    'alert_notes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_note`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01J1X9J85C7Y12G8P8W8K55Q5Y',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/alert_notes/{id}',
                  'parts' => [
                    'v1',
                    'alert_notes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01J1X9J85C7Y12G8P8W8K55Q5Y',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/alert_notes/{id}',
                  'parts' => [
                    'v1',
                    'alert_notes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_note`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'alert_route' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'alert_source',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'condition_group',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'escalation_config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'expression',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'grouping_config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'incident_config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'is_private',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'message_config',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'owning_team_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 14,
            ],
          ],
          'name' => 'alert_route',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v3/alert_routes',
                  'parts' => [
                    'v3',
                    'alert_routes',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_route`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 2,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v3/alert_routes',
                  'parts' => [
                    'v3',
                    'alert_routes',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v3/alert_routes/{id}',
                  'parts' => [
                    'v3',
                    'alert_routes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_route`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v3/alert_routes/{id}',
                  'parts' => [
                    'v3',
                    'alert_routes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v3/alert_routes/{id}',
                  'parts' => [
                    'v3',
                    'alert_routes',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_route`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'alert_source' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'alert_events_url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'auto_resolve_incident_alert',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'auto_resolve_timeout_minute',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'disabled',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'email_option',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'heartbeat_option',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'http_custom_option',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'jira_option',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'owning_team_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'secret_token',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'source_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'template',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 13,
            ],
          ],
          'name' => 'alert_source',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/alert_sources',
                  'parts' => [
                    'v2',
                    'alert_sources',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_source`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/alert_sources',
                  'parts' => [
                    'v2',
                    'alert_sources',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_sources`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/alert_sources/{id}',
                  'parts' => [
                    'v2',
                    'alert_sources',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_source`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/alert_sources/{id}',
                  'parts' => [
                    'v2',
                    'alert_sources',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GW2G3V0S59R238FAHPDS1R66',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/alert_sources/{id}',
                  'parts' => [
                    'v2',
                    'alert_sources',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.alert_source`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'api_key' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'comment',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'creator',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'last_used_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'role',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'role_name',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'team_id',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'team_role',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'team_role_name',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'token_last_issued_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
          ],
          'name' => 'api_key',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/api_keys',
                  'parts' => [
                    'v1',
                    'api_keys',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.api_key`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/api_keys',
                  'parts' => [
                    'v1',
                    'api_keys',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/api_keys/{id}',
                  'parts' => [
                    'v1',
                    'api_keys',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.api_key`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/api_keys/{id}',
                  'parts' => [
                    'v1',
                    'api_keys',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/api_keys/{id}',
                  'parts' => [
                    'v1',
                    'api_keys',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.api_key`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_field' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'catalog_type_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'field_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'filter_by',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'fixed_filter',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'group_by_catalog_attribute_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'helptext_catalog_attribute_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
          ],
          'name' => 'custom_field',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/custom_fields',
                  'parts' => [
                    'v2',
                    'custom_fields',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/custom_fields',
                  'parts' => [
                    'v2',
                    'custom_fields',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_fields`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/custom_fields/{id}',
                  'parts' => [
                    'v2',
                    'custom_fields',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/custom_fields/{id}',
                  'parts' => [
                    'v2',
                    'custom_fields',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/custom_fields/{id}',
                  'parts' => [
                    'v2',
                    'custom_fields',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'custom_field_option' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'custom_field_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'sort_key',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$INTEGER`',
                ],
              ],
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'value',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'custom_field_option',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/custom_field_options',
                  'parts' => [
                    'v1',
                    'custom_field_options',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field_option`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01G0J1EXE7AXZ2C93K61WBPYEH',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'query',
                        'name' => 'custom_field_id',
                        'orig' => 'custom_field_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/custom_field_options',
                  'parts' => [
                    'v1',
                    'custom_field_options',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'custom_field_id',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/custom_field_options/{id}',
                  'parts' => [
                    'v1',
                    'custom_field_options',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field_option`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/custom_field_options/{id}',
                  'parts' => [
                    'v1',
                    'custom_field_options',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/custom_field_options/{id}',
                  'parts' => [
                    'v1',
                    'custom_field_options',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.custom_field_option`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'follow_up' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'assignee',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'assignee_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'assignee_team',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'assignee_team_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'completed_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'creator',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'external_issue_reference',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'external_issue_reference_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'follow_up_category_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'follow_up_priority_option_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'label',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'priority',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
          ],
          'name' => 'follow_up',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/follow_ups',
                  'parts' => [
                    'v2',
                    'follow_ups',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.follow_up`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'assignee_team_id',
                        'orig' => 'assignee_team_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'standard',
                        'kind' => 'query',
                        'name' => 'incident_mode',
                        'orig' => 'incident_mode',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/follow_ups',
                  'parts' => [
                    'v2',
                    'follow_ups',
                  ],
                  'select' => [
                    'exist' => [
                      'assignee_team_id',
                      'incident_id',
                      'incident_mode',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.follow_ups`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/follow_ups/{id}',
                  'parts' => [
                    'v2',
                    'follow_ups',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.follow_up`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/follow_ups/{id}',
                  'parts' => [
                    'v2',
                    'follow_ups',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/follow_ups/{id}',
                  'parts' => [
                    'v2',
                    'follow_ups',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.follow_up`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'call_url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'creator',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'custom_field_entry',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'duration_metric',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'external_issue_reference',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'has_debrief',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'idempotency_key',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'incident_role_assignment',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'incident_status',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'incident_status_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'incident_timestamp_value',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'incident_type',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'incident_type_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'mode',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'name',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'permalink',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'postmortem_document_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'postmortem_document_url',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'reference',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'retrospective_incident_option',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'severity',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'severity_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'slack_channel_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 24,
            ],
            [
              'active' => true,
              'name' => 'slack_channel_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 25,
            ],
            [
              'active' => true,
              'name' => 'slack_channel_name_override',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 26,
            ],
            [
              'active' => true,
              'name' => 'slack_team_id',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 27,
            ],
            [
              'active' => true,
              'name' => 'summary',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 28,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 29,
            ],
            [
              'active' => true,
              'name' => 'visibility',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 30,
            ],
            [
              'active' => true,
              'name' => 'workload_minutes_late',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 31,
            ],
            [
              'active' => true,
              'name' => 'workload_minutes_sleeping',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 32,
            ],
            [
              'active' => true,
              'name' => 'workload_minutes_total',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 33,
            ],
            [
              'active' => true,
              'name' => 'workload_minutes_working',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 34,
            ],
          ],
          'name' => 'incident',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/incidents',
                  'parts' => [
                    'v2',
                    'incidents',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'created_at[gte]' => [
                            '2024-05-01',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'created_at',
                        'orig' => 'created_at',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          '01GBSQF3FHF7FWZQNWGHAVQ804' => [
                            'one_of' => [
                              '01GBSQF3FHF7FWZQNWGHAVQ804',
                              '01ET65M7ZARSFZ6TFDFVQDN9AA',
                            ],
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'custom_field',
                        'orig' => 'custom_field',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => 'all',
                        'kind' => 'query',
                        'name' => 'filter_mode',
                        'orig' => 'filter_mode',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          '01GBSQF3FHF7FWZQNWGHAVQ804' => [
                            'one_of' => [
                              '01GBSQF3FHF7FWZQNWGHAVQ804',
                              '01ET65M7ZARSFZ6TFDFVQDN9AA',
                            ],
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'incident_role',
                        'orig' => 'incident_role',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'incident_type',
                        'orig' => 'incident_type',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            'retrospective',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'mode',
                        'orig' => 'mode',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'severity',
                        'orig' => 'severity',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => 'created_at_newest_first',
                        'kind' => 'query',
                        'name' => 'sort_by',
                        'orig' => 'sort_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            '01GBSQF3FHF7FWZQNWGHAVQ804',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'one_of' => [
                            'active',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'status_category',
                        'orig' => 'status_category',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'updated_at[gte]' => [
                            '2024-05-01',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'updated_at',
                        'orig' => 'updated_at',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incidents',
                  'parts' => [
                    'v2',
                    'incidents',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'created_at',
                      'custom_field',
                      'filter_mode',
                      'incident_role',
                      'incident_type',
                      'mode',
                      'page_size',
                      'severity',
                      'sort_by',
                      'status',
                      'status_category',
                      'updated_at',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incidents/{id}',
                  'parts' => [
                    'v2',
                    'incidents',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_attachment' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'resource',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
          ],
          'name' => 'incident_attachment',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/incident_attachments',
                  'parts' => [
                    'v1',
                    'incident_attachments',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_attachment`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '123',
                        'kind' => 'query',
                        'name' => 'external_id',
                        'orig' => 'external_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01G0J1EXE7AXZ2C93K61WBPYEH',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'pager_duty_incident',
                        'kind' => 'query',
                        'name' => 'resource_type',
                        'orig' => 'resource_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/incident_attachments',
                  'parts' => [
                    'v1',
                    'incident_attachments',
                  ],
                  'select' => [
                    'exist' => [
                      'external_id',
                      'incident_id',
                      'resource_type',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_attachments`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/incident_attachments/{id}',
                  'parts' => [
                    'v1',
                    'incident_attachments',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_membership' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'user_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'incident_membership',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/incident_memberships',
                  'parts' => [
                    'v1',
                    'incident_memberships',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_membership`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_participant' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'active',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'passive',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
          ],
          'name' => 'incident_participant',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incident_participants',
                  'parts' => [
                    'v2',
                    'incident_participants',
                  ],
                  'select' => [
                    'exist' => [
                      'incident_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_participants`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_participant_workload' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'archived_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'participant_type',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'user',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'workload',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
          ],
          'name' => 'incident_participant_workload',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incident_participant_workloads',
                  'parts' => [
                    'v2',
                    'incident_participant_workloads',
                  ],
                  'select' => [
                    'exist' => [
                      'incident_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_relationship' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'incident',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 1,
            ],
          ],
          'name' => 'incident_relationship',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/incident_relationships',
                  'parts' => [
                    'v1',
                    'incident_relationships',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'incident_id',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_role' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'instruction',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'role_type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'shortform',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
          ],
          'name' => 'incident_role',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/incident_roles',
                  'parts' => [
                    'v2',
                    'incident_roles',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_role`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/incident_roles',
                  'parts' => [
                    'v2',
                    'incident_roles',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_roles`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incident_roles/{id}',
                  'parts' => [
                    'v2',
                    'incident_roles',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_role`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/incident_roles/{id}',
                  'parts' => [
                    'v2',
                    'incident_roles',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/incident_roles/{id}',
                  'parts' => [
                    'v2',
                    'incident_roles',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_role`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_status' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'rank',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
          ],
          'name' => 'incident_status',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/incident_statuses',
                  'parts' => [
                    'v1',
                    'incident_statuses',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_status`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v1/incident_statuses',
                  'parts' => [
                    'v1',
                    'incident_statuses',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_statuses`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/incident_statuses/{id}',
                  'parts' => [
                    'v1',
                    'incident_statuses',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_status`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/incident_statuses/{id}',
                  'parts' => [
                    'v1',
                    'incident_statuses',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/incident_statuses/{id}',
                  'parts' => [
                    'v1',
                    'incident_statuses',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_status`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_timestamp' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'rank',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 2,
            ],
          ],
          'name' => 'incident_timestamp',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/incident_timestamps',
                  'parts' => [
                    'v2',
                    'incident_timestamps',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_timestamps`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYD5H',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incident_timestamps/{id}',
                  'parts' => [
                    'v2',
                    'incident_timestamps',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_timestamp`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_type' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'create_in_triage',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'is_default',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'owning_team_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'private_incidents_only',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'incident_type',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v1/incident_types',
                  'parts' => [
                    'v1',
                    'incident_types',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_types`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/incident_types/{id}',
                  'parts' => [
                    'v1',
                    'incident_types',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.incident_type`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'incident_update' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'merged_into_incident_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'message',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'new_incident_status',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'new_severity',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'updater',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
          ],
          'name' => 'incident_update',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01G0J1EXE7AXZ2C93K61WBPYEH',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/incident_updates',
                  'parts' => [
                    'v2',
                    'incident_updates',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'incident_id',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'ip_allowlist' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'allowlist',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'enabled',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 3,
            ],
          ],
          'name' => 'ip_allowlist',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v1/ip_allowlists',
                  'parts' => [
                    'v1',
                    'ip_allowlists',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.ip_allowlist`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'PUT',
                  'orig' => '/v1/ip_allowlists',
                  'parts' => [
                    'v1',
                    'ip_allowlists',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.ip_allowlist`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'maintenance_window' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'alert_condition_group',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'archived_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'end_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'escalation_target',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'lead',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'notification_message',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'notify_channel',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'notify_end_minutes_before',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'notify_start_minutes_before',
              'req' => false,
              'type' => '`$INTEGER`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'reroute_on_end',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'resolve_on_end',
              'op' => [
                'create' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
                'update' => [
                  'req' => false,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'show_in_sidebar',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'start_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
          ],
          'name' => 'maintenance_window',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v1/maintenance_windows',
                  'parts' => [
                    'v1',
                    'maintenance_windows',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.maintenance_window`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'active',
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/maintenance_windows',
                  'parts' => [
                    'v1',
                    'maintenance_windows',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'page_size',
                      'status',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/maintenance_windows/{id}',
                  'parts' => [
                    'v1',
                    'maintenance_windows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.maintenance_window`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v1/maintenance_windows/{id}',
                  'parts' => [
                    'v1',
                    'maintenance_windows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/maintenance_windows/{id}',
                  'parts' => [
                    'v1',
                    'maintenance_windows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.maintenance_window`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'postmortem_document' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'document_url',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'editor',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'exported_url',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'status',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'title',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
          ],
          'name' => 'postmortem_document',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01G0J1EXE7AXZ2C93K61WBPYEH',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => '01GBA8J19SMXQWPJMX3P2ESCVG',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'created_at_oldest_first',
                        'kind' => 'query',
                        'name' => 'sort_by',
                        'orig' => 'sort_by',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/postmortem_documents',
                  'parts' => [
                    'v1',
                    'postmortem_documents',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'incident_id',
                      'page_size',
                      'sort_by',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GDZEW57FDA1K4S63MGMQ5DS9',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v1/postmortem_documents/{id}',
                  'parts' => [
                    'v1',
                    'postmortem_documents',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.postmortem_document`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01GDZEW57FDA1K4S63MGMQ5DS9',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v1/postmortem_documents/{id}',
                  'parts' => [
                    'v1',
                    'postmortem_documents',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.postmortem_document`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'secret' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'last_four_char',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'owning_team_id',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
                'update' => [
                  'req' => true,
                  'type' => '`$ARRAY`',
                ],
              ],
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'secret',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'value',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 9,
            ],
          ],
          'name' => 'secret',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/secrets',
                  'parts' => [
                    'v2',
                    'secrets',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.secret`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'abc123',
                        ],
                        'kind' => 'query',
                        'name' => 'team_id',
                        'orig' => 'team_id',
                        'reqd' => false,
                        'type' => '`$ARRAY`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/secrets',
                  'parts' => [
                    'v2',
                    'secrets',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'page_size',
                      'team_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/secrets/{id}',
                  'parts' => [
                    'v2',
                    'secrets',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.secret`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/secrets/{id}',
                  'parts' => [
                    'v2',
                    'secrets',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/secrets/{id}',
                  'parts' => [
                    'v2',
                    'secrets',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.secret`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'team' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'catalog_entry',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'member',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
          ],
          'name' => 'team',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v3/teams',
                  'parts' => [
                    'v3',
                    'teams',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'page_size',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => 'abc123',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v3/teams/{id}',
                  'parts' => [
                    'v3',
                    'teams',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.team`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'user' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'base_role',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'custom_role',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'email',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'is_active',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'role',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'seat',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'slack_user_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
          ],
          'name' => 'user',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FDAG4SAP5TYPT98WGR2N7W91',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'john.doe@incident.io',
                        'kind' => 'query',
                        'name' => 'email',
                        'orig' => 'email',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => true,
                        'kind' => 'query',
                        'name' => 'include_inactive',
                        'orig' => 'include_inactive',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => 'U12345678',
                        'kind' => 'query',
                        'name' => 'slack_user_id',
                        'orig' => 'slack_user_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/users',
                  'parts' => [
                    'v2',
                    'users',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'email',
                      'include_inactive',
                      'page_size',
                      'slack_user_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/users/{id}',
                  'parts' => [
                    'v2',
                    'users',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.user`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'workflow' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'annotation',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'condition_group',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'continue_on_step_error',
              'req' => true,
              'type' => '`$BOOLEAN`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'delay',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'expression',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'folder',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'form_field',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'include_private_escalation',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'include_private_incident',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$BOOLEAN`',
                ],
              ],
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'management_meta',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'once_for',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'owning_team_id',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'private_incident_scope',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'runs_from',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'runs_on_incident',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'runs_on_incident_mode',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 17,
            ],
            [
              'active' => true,
              'name' => 'shortform',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 18,
            ],
            [
              'active' => true,
              'name' => 'skip_step_upgrade',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'index$' => 19,
            ],
            [
              'active' => true,
              'name' => 'state',
              'op' => [
                'list' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 20,
            ],
            [
              'active' => true,
              'name' => 'step',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 21,
            ],
            [
              'active' => true,
              'name' => 'trigger',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 22,
            ],
            [
              'active' => true,
              'name' => 'version',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 23,
            ],
            [
              'active' => true,
              'name' => 'workflow',
              'req' => true,
              'type' => '`$OBJECT`',
              'index$' => 24,
            ],
          ],
          'name' => 'workflow',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'POST',
                  'orig' => '/v2/workflows',
                  'parts' => [
                    'v2',
                    'workflows',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.workflow`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'create',
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [],
                  'method' => 'GET',
                  'orig' => '/v2/workflows',
                  'parts' => [
                    'v2',
                    'workflows',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.workflows`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                    'query' => [
                      [
                        'active' => true,
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'skip_step_upgrade',
                        'orig' => 'skip_step_upgrade',
                        'reqd' => false,
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/workflows/{id}',
                  'parts' => [
                    'v2',
                    'workflows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'skip_step_upgrade',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.workflow`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'DELETE',
                  'orig' => '/v2/workflows/{id}',
                  'parts' => [
                    'v2',
                    'workflows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'remove',
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'PUT',
                  'orig' => '/v2/workflows/{id}',
                  'parts' => [
                    'v2',
                    'workflows',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.workflow`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'update',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'workflow_run' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'cancelled_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'created_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'enqueued_at',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'error',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'incident_id',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'incident_reference',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'progress',
              'req' => true,
              'type' => '`$ARRAY`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'scheduled_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'updated_at',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'workflow_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'workflow_name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'workflow_version_id',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'workflow_version_number',
              'req' => true,
              'type' => '`$INTEGER`',
              'index$' => 13,
            ],
          ],
          'name' => 'workflow_run',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'after',
                        'orig' => 'after',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => [
                          'date_range' => [
                            '2026-07-01~2026-07-31',
                          ],
                        ],
                        'kind' => 'query',
                        'name' => 'created_at',
                        'orig' => 'created_at',
                        'reqd' => false,
                        'type' => '`$OBJECT`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'incident_id',
                        'orig' => 'incident_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 25,
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'reqd' => false,
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'query',
                        'name' => 'workflow_id',
                        'orig' => 'workflow_id',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/workflow_runs',
                  'parts' => [
                    'v2',
                    'workflow_runs',
                  ],
                  'select' => [
                    'exist' => [
                      'after',
                      'created_at',
                      'incident_id',
                      'page_size',
                      'workflow_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'params' => [
                      [
                        'active' => true,
                        'example' => '01FCNDV6P870EA6S7TK1DSYDG0',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'index$' => 0,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/v2/workflow_runs/{id}',
                  'parts' => [
                    'v2',
                    'workflow_runs',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.workflow_run`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'load',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return IncidentIoFeatures::make_feature($name);
    }
}

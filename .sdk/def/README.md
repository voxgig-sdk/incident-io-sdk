# API Definition

`incident-io-openapi.json` is incident.io's published OpenAPI definition, with
one change: its six example API keys are replaced.

| | |
|---|---|
| Source | https://api.incident.io/v1/openapiV3.json |
| Fetched | 2026-10-08 |
| Size | 6012937 bytes |
| sha256 | `b310b33f6648778a46bbf0d620418c20003edd344137436dad3172a5f781e581` |
| Version | 1.0.0 — 183 paths, 327 operations |

The six example keys (`"inc_0123456789abcdef…"`) look like live credentials to
GitHub push protection, so each is replaced with `"inc_EXAMPLE_KEY_REDACTED"`.
The file is then serialised the way Python writes it:

```python
json.dumps(d, indent=1, sort_keys=True, ensure_ascii=True)
```

To reproduce it, download the source, apply
`re.sub(r'"inc_[A-Za-z0-9_]{12,}"', '"inc_EXAMPLE_KEY_REDACTED"', raw)`, and
serialise as above.

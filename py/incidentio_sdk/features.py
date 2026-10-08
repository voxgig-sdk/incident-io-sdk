# IncidentIo SDK feature factory

from incidentio_sdk.feature.base_feature import IncidentIoBaseFeature
from incidentio_sdk.feature.debug_feature import IncidentIoDebugFeature
from incidentio_sdk.feature.idempotency_feature import IncidentIoIdempotencyFeature
from incidentio_sdk.feature.metrics_feature import IncidentIoMetricsFeature
from incidentio_sdk.feature.paging_feature import IncidentIoPagingFeature
from incidentio_sdk.feature.ratelimit_feature import IncidentIoRatelimitFeature
from incidentio_sdk.feature.retry_feature import IncidentIoRetryFeature
from incidentio_sdk.feature.test_feature import IncidentIoTestFeature
from incidentio_sdk.feature.timeout_feature import IncidentIoTimeoutFeature


_FEATURES = {
    "base": lambda: IncidentIoBaseFeature(),
    "debug": lambda: IncidentIoDebugFeature(),
    "idempotency": lambda: IncidentIoIdempotencyFeature(),
    "metrics": lambda: IncidentIoMetricsFeature(),
    "paging": lambda: IncidentIoPagingFeature(),
    "ratelimit": lambda: IncidentIoRatelimitFeature(),
    "retry": lambda: IncidentIoRetryFeature(),
    "test": lambda: IncidentIoTestFeature(),
    "timeout": lambda: IncidentIoTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES

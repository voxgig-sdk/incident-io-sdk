# IncidentIo SDK feature factory

from feature.base_feature import IncidentIoBaseFeature
from feature.test_feature import IncidentIoTestFeature


def _make_feature(name):
    features = {
        "base": lambda: IncidentIoBaseFeature(),
        "test": lambda: IncidentIoTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()

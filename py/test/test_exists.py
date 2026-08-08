# ProjectName SDK exists test

import pytest
from incidentio_sdk import IncidentIoSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = IncidentIoSDK.test(None, None)
        assert testsdk is not None

# IncidentIo SDK utility: make_context

from incidentio_sdk.core.context import IncidentIoContext


def make_context_util(ctxmap, basectx):
    return IncidentIoContext(ctxmap, basectx)

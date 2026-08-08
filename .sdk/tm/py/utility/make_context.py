# IncidentIo SDK utility: make_context

from core.context import IncidentIoContext


def make_context_util(ctxmap, basectx):
    return IncidentIoContext(ctxmap, basectx)

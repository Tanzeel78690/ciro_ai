# from datetime import datetime


# class TraceLogger:

#     traces = []

#     @classmethod
#     def log(cls, agent, message):

#         trace = {
#             "timestamp": str(datetime.now()),
#             "agent": agent,
#             "message": message,
#         }

#         cls.traces.append(trace)

#         print(f"[{agent}] {message}")

#     @classmethod
#     def get_traces(cls):

#         return cls.traces


from datetime import datetime

from agents.utils.websocket_broadcaster import (
    WebSocketBroadcaster
)


class TraceLogger:

    traces = []

    @classmethod
    def log(cls, agent, message):

        trace = {
            "timestamp": str(datetime.now()),
            "agent": agent,
            "message": message,
        }

        cls.traces.append(trace)

        print(f"[{agent}] {message}")

        WebSocketBroadcaster.broadcast({
            "event": "trace",
            "data": trace
        })

    @classmethod
    def get_traces(cls):

        return cls.traces
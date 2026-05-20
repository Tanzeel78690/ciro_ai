from agents.utils.websocket_broadcaster import (
    WebSocketBroadcaster
)


class IncidentBroadcaster:

    @staticmethod
    def broadcast_incident(data):

        WebSocketBroadcaster.broadcast({
            "event": "incident",
            "data": data
        })
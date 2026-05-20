from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer


class WebSocketBroadcaster:

    @staticmethod
    def broadcast(data):

        channel_layer = get_channel_layer()

        if channel_layer is None:
            print("Channel layer not available")
            return

        async_to_sync(channel_layer.group_send)(
            "crisis_room",
            {
                "type": "broadcast_message",
                "message": data
            }
        )
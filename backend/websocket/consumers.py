# import json

# from channels.generic.websocket import AsyncWebsocketConsumer


# class CrisisConsumer(AsyncWebsocketConsumer):

#     async def connect(self):

#         self.room_group_name = "crisis_room"

#         await self.channel_layer.group_add(
#             self.room_group_name,
#             self.channel_name
#         )

#         await self.accept()

#         await self.send(text_data=json.dumps({
#             "type": "connection",
#             "message": "Connected to CIRO realtime server"
#         }))

#     async def disconnect(self, close_code):

#         await self.channel_layer.group_discard(
#             self.room_group_name,
#             self.channel_name
#         )

#     async def receive(self, text_data):

#         data = json.loads(text_data)

#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {
#                 "type": "broadcast_message",
#                 "message": data
#             }
#         )

#     async def broadcast_message(self, event):

#         await self.send(text_data=json.dumps(event["message"]))


import json

from channels.generic.websocket import AsyncWebsocketConsumer


class CrisisConsumer(AsyncWebsocketConsumer):

    async def connect(self):

        print("WEBSOCKET CONNECT ATTEMPT")

        self.room_group_name = "crisis_room"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

        print("WEBSOCKET CONNECTED")

        await self.send(text_data=json.dumps({
            "type": "connection",
            "message": "Connected to CIRO realtime server"
        }))

    async def disconnect(self, close_code):

        print("WEBSOCKET DISCONNECTED")

        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):

        print("MESSAGE RECEIVED")

        data = json.loads(text_data)

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                "type": "broadcast_message",
                "message": data
            }
        )

    async def broadcast_message(self, event):

        await self.send(
            text_data=json.dumps(event["message"])
        )
# from django.urls import re_path

# from .consumers import CrisisConsumer

# websocket_urlpatterns = [
#     re_path(r'ws/crisis/$', CrisisConsumer.as_asgi()),
# ]

# from django.urls import re_path
# from channels.routing import URLRouter

# from .consumers import CrisisConsumer


# websocket_urlpatterns = [
#     re_path(
#         r"ws/crisis/$",
#         CrisisConsumer.as_asgi(), # type: ignore
#     ), # type: ignore
# ]

# from django.urls import re_path
# from .consumers import CrisisConsumer

# websocket_urlpatterns = [
#     re_path(r"ws/crisis/$", CrisisConsumer.as_asgi()),
# ]

from django.urls import path
from .consumers import CrisisConsumer

websocket_urlpatterns = [
    path("ws/crisis/", CrisisConsumer.as_asgi()),
]
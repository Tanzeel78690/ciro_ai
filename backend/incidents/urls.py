from rest_framework.routers import DefaultRouter
from .views import IncidentViewSet
from django.urls import path
from .views import citizen_report
from .views import recent_incidents

router = DefaultRouter()
router.register(r'incidents', IncidentViewSet)

urlpatterns = router.urls

urlpatterns += [
    path("citizen-report/", citizen_report),
]

urlpatterns += [
    path("recent-incidents/", recent_incidents),
]

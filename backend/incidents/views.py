from rest_framework import viewsets
from .models import Incident
from .serializers import IncidentSerializer
from .models import IncidentRecord
from rest_framework.decorators import api_view
from rest_framework.response import Response

class IncidentViewSet(viewsets.ModelViewSet):

    queryset = Incident.objects.all().order_by('-created_at')

    serializer_class = IncidentSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response

from agents.ai_agents.orchestrator import CrisisOrchestrator


@api_view(["POST"])
def citizen_report(request):
    data = request.data

    signals = [
        {
            "content": data.get("description", ""),
            "credibility_score": 0.75,
            "urgency_score": float(data.get("urgency_score", 0.7)),
            "latitude": data.get("latitude"),
            "longitude": data.get("longitude"),
            "location_name": data.get(
                "location_name",
                "Citizen Report Location"
            ),
            "source_type": "mobile_citizen_report",
        }
    ]

    orchestrator = CrisisOrchestrator()
    result = orchestrator.process_incident(signals)

    return Response({
        "message": "Incident report processed successfully",
        "result": result
    })


@api_view(["GET"])
def recent_incidents(request):
    records = IncidentRecord.objects.all().order_by("-created_at")[:30]

    data = [
        record.payload
        for record in records
    ]

    return Response(data)
from datetime import datetime
import random


class TicketService:

    @staticmethod
    def generate_ticket(classification, location):

        crisis_type = classification.get(
            "crisis_type",
            "unknown"
        )

        severity = classification.get(
            "severity",
            1
        )

        location_name = (
            location.get("name")
            if location
            else "Unknown Location"
        )

        ticket_id = (
            f"CIRO-{datetime.now().strftime('%Y%m%d')}-"
            f"{random.randint(1000, 9999)}"
        )

        eta_minutes = max(
            5,
            25 - int(severity * 2)
        )

        return {
            "ticket_id": ticket_id,
            "status": "DISPATCHED",
            "incident_type": crisis_type,
            "location": location_name,
            "eta_minutes": eta_minutes,
            "assigned_team": (
                "High Priority Response Team"
                if severity >= 7
                else "Standard Emergency Response Team"
            ),
            "created_at": datetime.now().isoformat(),
        }
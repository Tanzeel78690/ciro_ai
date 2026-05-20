class StakeholderCommandCenter:

    @staticmethod
    def generate_messages(incident):

        classification = incident.get("classification", {})
        prediction = incident.get("prediction", {})
        allocation = incident.get("allocated_resources", [])
        verification = incident.get("verification", {})
        requires_retraction = incident.get("requires_retraction", False)

        crisis_type = classification.get("crisis_type", "unknown")
        severity = classification.get("severity", 1)
        confidence = classification.get("adjusted_confidence", classification.get("confidence", 0.5))
        affected_population = classification.get("affected_population", 0)

        if requires_retraction:
            return {
                "public": {
                    "title": "Alert Retraction",
                    "message": "Previous emergency alert is under review. Please avoid spreading unverified information and follow official updates.",
                    "priority": "medium",
                },
                "command_center": {
                    "title": "Retraction Required",
                    "message": f"CIRO detected low confidence for {crisis_type}. Manual verification required before further escalation.",
                    "priority": "high",
                },
                "utility": {
                    "title": "Verification Request",
                    "message": "Please verify whether this is an infrastructure issue such as a water-main burst, power fault, or maintenance event.",
                    "priority": "high",
                },
            }

        public_message = f"Possible {crisis_type} reported. Avoid the affected area. Follow official instructions. Estimated affected population: {affected_population}."

        police_message = f"Deploy traffic control units near affected zone. Severity {severity}/10. Maintain emergency corridor and prevent congestion."

        rescue_message = f"Prepare rescue response for {crisis_type}. Prioritize vulnerable citizens and high-risk locations. Allocated resources: {allocation}."

        hospital_message = f"Prepare triage and emergency intake. Expected crisis type: {crisis_type}. Severity: {severity}/10. Confidence: {confidence}."

        utility_message = f"Inspect infrastructure near affected area. Check electricity, water, drainage, and road utilities depending on incident type: {crisis_type}."

        transport_message = f"Activate rerouting plan. Reduce public transport exposure near affected zone. Coordinate with police for safe routes."

        media_message = f"Official update: CIRO is monitoring a {crisis_type} event. Severity {severity}/10. Public should avoid affected routes and wait for verified instructions."

        return {
            "public": {
                "title": "Public Safety Alert",
                "message": public_message,
                "priority": "high" if severity >= 7 else "medium",
            },
            "police": {
                "title": "Traffic & Security Coordination",
                "message": police_message,
                "priority": "high",
            },
            "rescue": {
                "title": "Emergency Rescue Dispatch",
                "message": rescue_message,
                "priority": "high",
            },
            "hospital": {
                "title": "Hospital Preparedness Notice",
                "message": hospital_message,
                "priority": "high" if severity >= 7 else "medium",
            },
            "utility": {
                "title": "Utility Escalation",
                "message": utility_message,
                "priority": "medium",
            },
            "transport": {
                "title": "Transport Authority Alert",
                "message": transport_message,
                "priority": "medium",
            },
            "media": {
                "title": "Media Briefing",
                "message": media_message,
                "priority": "low",
            },
            "command_center": {
                "title": "Command Center Summary",
                "message": f"{crisis_type} detected with severity {severity}/10, confidence {confidence}, affected population {affected_population}. Prediction: {prediction}.",
                "priority": "high",
            },
        }
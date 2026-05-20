from agents.utils.trace_logger import TraceLogger


class CommunicationAgent:

    def generate_alert(self, incident_type):

        TraceLogger.log(
            "CommunicationAgent",
            "Generating public alert"
        )

        return f"""
        ALERT:
        Possible {incident_type} detected.

        Avoid affected area.
        Emergency teams dispatched.
        """
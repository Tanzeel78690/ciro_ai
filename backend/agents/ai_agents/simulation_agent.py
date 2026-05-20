from agents.utils.trace_logger import TraceLogger


class SimulationAgent:

    def simulate(self, incident_type):

        TraceLogger.log(
            "SimulationAgent",
            "Running impact simulation"
        )

        if incident_type == "flood":

            result = {
                "before": "Heavy congestion",
                "action": "Traffic rerouting",
                "after": "Congestion reduced by 35%",
                "side_effect": "Secondary road delays",
            }

        else:

            result = {
                "before": "Normal",
                "action": "Monitoring",
                "after": "Stable",
                "side_effect": "None",
            }

        TraceLogger.log(
            "SimulationAgent",
            "Simulation completed"
        )

        return result
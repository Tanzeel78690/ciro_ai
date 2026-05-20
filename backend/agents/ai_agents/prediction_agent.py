# import json
# import re
# import random
# from agents.services.gemini_service import GeminiService
# from agents.utils.trace_logger import TraceLogger


# class PredictionAgent:

#     def __init__(self):

#         self.gemini = GeminiService()

#     def extract_json(self, text):

#         try:

#             match = re.search(r'\{.*\}', text, re.DOTALL)

#             if match:
#                 return json.loads(match.group())

#             return None

#         except Exception as e:

#             TraceLogger.log(
#                 "PredictionAgent",
#                 f"JSON extraction failed: {str(e)}"
#             )

#             return None

#     def predict(self, incident_data):

#         TraceLogger.log(
#             "PredictionAgent",
#             "Predicting crisis evolution"
#         )

#         prompt = f"""
#         Predict the following crisis evolution.

#         Incident:
#         {incident_data}

#         Return:
#         - spread_radius
#         - expected_duration
#         - peak_impact_time
#         - spread_risk
#         - uncertainty_range

#         IMPORTANT:
#         Return ONLY valid JSON.

#         Example:
#         {{
#             "spread_radius": "3km",
#             "expected_duration": "4 hours",
#             "peak_impact_time": "2 hours",
#             "spread_risk": "high",
#             "uncertainty_range": "medium"
#         }}
#         """

#         response = self.gemini.generate(prompt)

#         parsed = self.extract_json(response)

#         TraceLogger.log(
#             "PredictionAgent",
#             f"Prediction completed: {parsed}"
#         )

#         return parsed

import json
import re
import random

from agents.services.gemini_service import (
    GeminiService
)

from agents.utils.trace_logger import (
    TraceLogger
)


class PredictionAgent:

    def __init__(self):

        self.gemini = GeminiService()

    def extract_json(self, text):

        try:

            if not text:
                return None

            match = re.search(
                r'\{.*\}',
                text,
                re.DOTALL
            )

            if match:

                return json.loads(
                    match.group()
                )

            return None

        except Exception as e:

            TraceLogger.log(
                "PredictionAgent",
                f"JSON extraction failed: "
                f"{str(e)}"
            )

            return None

    def predict(self, incident_data):

        TraceLogger.log(
            "PredictionAgent",
            "Predicting crisis evolution"
        )

        prompt = f"""
        Predict the following crisis evolution.

        Incident:
        {incident_data}

        Return:
        - spread_radius
        - expected_duration
        - peak_impact_time
        - spread_risk
        - uncertainty_range

        IMPORTANT:
        Return ONLY valid JSON.

        Example:
        {{
            "spread_radius": "3km",
            "expected_duration": "4 hours",
            "peak_impact_time": "2 hours",
            "spread_risk": "high",
            "uncertainty_range": "medium"
        }}
        """

        # =====================================
        # GEMINI RESPONSE
        # =====================================

        response = self.gemini.generate(
            prompt
        )

        parsed = self.extract_json(
            response
        )

        # =====================================
        # FALLBACK MODE
        # =====================================

        if not parsed:

            TraceLogger.log(
                "PredictionAgent",
                "Using fallback prediction"
            )

            parsed = {

                "spread_radius":
                    f"{random.randint(1,10)}km",

                "expected_duration":
                    f"{random.randint(1,24)} hours",

                "peak_impact_time":
                    f"{random.randint(1,12)} hours",

                "spread_risk":
                    random.choice([
                        "low",
                        "medium",
                        "high"
                    ]),

                "uncertainty_range":
                    random.choice([
                        "low",
                        "medium",
                        "high"
                    ]),

                "estimated_damage":
                    random.randint(
                        10000,
                        1000000
                    ),

                "next_severity":
                    random.randint(3,10)
            }

        TraceLogger.log(
            "PredictionAgent",
            f"Prediction completed: "
            f"{parsed}"
        )

        return parsed
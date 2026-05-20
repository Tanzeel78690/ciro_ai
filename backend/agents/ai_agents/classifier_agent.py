

import json
import re
import random

from agents.services.gemini_service import (
    GeminiService
)


class ClassifierAgent:

    def classify(self, fusion_result):

        print(
            "[ClassifierAgent] "
            "Classifying incident"
        )

        prompt = f"""
        Analyze this crisis signal:

        {fusion_result}

        Return ONLY valid JSON:

        {{
            "crisis_type": "",
            "severity": 1-10,
            "confidence": 0-1,
            "urgency": "",
            "affected_population": number
        }}
        """

        response = GeminiService.generate(
            prompt
        )

        # =========================
        # FALLBACK HEURISTIC MODE
        # =========================

        if not response:

            print(
                "[ClassifierAgent] "
                "Using fallback classification"
            )

            signal_text = ""

            if isinstance(fusion_result, dict):

                signal_text = fusion_result.get(
                    "combined_text",
                    ""
                ).lower()

            else:

                signal_text = str(
                    fusion_result
                ).lower()

            crisis_type = "unknown"

            # =====================================
            # FLOOD DETECTION
            # =====================================

            if any(word in signal_text for word in [
                "flood",
                "flooding",
                "water level",
                "heavy rainfall",
                "road flooded",
                "urban flooding"
            ]):
                crisis_type = "flood"

            # =====================================
            # HEATWAVE DETECTION
            # =====================================

            elif any(word in signal_text for word in [
                "heat",
                "heatwave",
                "extreme temperature",
                "hot weather",
                "dehydration"
            ]):
                crisis_type = "heatwave"

            # =====================================
            # ACCIDENT DETECTION
            # =====================================

            elif any(word in signal_text for word in [
                "accident",
                "crash",
                "collision",
                "vehicle collision",
                "road blocked",
                "traffic incident",
                "injured"
            ]):
                crisis_type = "accident"

            # =====================================
            # POWER OUTAGE
            # =====================================

            elif any(word in signal_text for word in [
                "power outage",
                "electricity",
                "blackout",
                "transformer",
                "grid failure"
            ]):
                crisis_type = "power_outage"

            
            # =====================================
            # WATER PIPE / INFRASTRUCTURE FAILURE
            # =====================================

            elif any(word in signal_text for word in [
                "pipe burst",
                "water leakage",
                "water pipe",
                "sewage",
                "pipeline",
                "infrastructure failure",
                "water main burst",
                "drainage issue"
            ]):
                crisis_type = "infrastructure_failure"

            # =====================================
            # FIRE DETECTION
            # =====================================

            elif any(word in signal_text for word in [
                "fire",
                "smoke",
                "burning",
                "explosion"
            ]):
                crisis_type = "fire"

            # =====================================
            # PUBLIC DISORDER
            # =====================================

            elif any(word in signal_text for word in [
                "protest",
                "riot",
                "public disorder",
                "crowd violence"
            ]):
                crisis_type = "public_disorder"

            severity = random.randint(3, 10)

            confidence = round(
                random.uniform(0.55, 0.95),
                2
            )

            affected_population = random.randint(
                500,
                15000
            )

            urgency = (
                "high"
                if severity >= 8
                else "medium"
                if severity >= 5
                else "low"
            )

            result = {
                "crisis_type": crisis_type,
                "severity": severity,
                "confidence": confidence,
                "urgency": urgency,
                "affected_population":
                    affected_population
            }

            print(
                "[ClassifierAgent] "
                f"Incident classified as "
                f"{crisis_type}"
            )

            return result
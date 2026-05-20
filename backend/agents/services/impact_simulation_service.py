class ImpactSimulationService:

    @staticmethod
    def simulate(classification, priority_score):

        severity = int(
            classification.get(
                "severity",
                1
            )
        )

        affected_population = int(
            classification.get(
                "affected_population",
                500
            )
        )

        before_response_time = min(
            45,
            12 + severity * 3
        )

        after_response_time = max(
            6,
            before_response_time - severity * 2
        )

        before_congestion = min(
            95,
            35 + severity * 7
        )

        after_congestion = max(
            20,
            before_congestion - severity * 5
        )

        before_risk = min(
            100,
            severity * 10
        )

        after_risk = max(
            10,
            before_risk - severity * 4
        )

        protected_population = int(
            affected_population * 0.35
        )

        return {
            "before": {
                "response_time_minutes": before_response_time,
                "congestion_level_percent": before_congestion,
                "public_risk_percent": before_risk,
                "affected_population": affected_population,
            },
            "after": {
                "response_time_minutes": after_response_time,
                "congestion_level_percent": after_congestion,
                "public_risk_percent": after_risk,
                "population_protected": protected_population,
            },
            "improvement": {
                "response_time_saved_minutes": (
                    before_response_time
                    - after_response_time
                ),
                "congestion_reduction_percent": (
                    before_congestion
                    - after_congestion
                ),
                "risk_reduction_percent": (
                    before_risk
                    - after_risk
                ),
            },
            "summary": (
                f"CIRO response is projected to reduce response time by "
                f"{before_response_time - after_response_time} minutes, "
                f"reduce congestion by {before_congestion - after_congestion}%, "
                f"and lower public risk by {before_risk - after_risk}%."
            )
        }
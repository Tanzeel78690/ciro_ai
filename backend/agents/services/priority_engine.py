class PriorityEngine:

    @staticmethod
    def calculate_priority(data):

        classification = data.get(
            "classification",
            {}
        )

        severity = classification.get(
            "severity",
            5
        )

        confidence = classification.get(
            "confidence",
            0.5
        )

        affected_population = (
            classification.get(
                "affected_population",
                1000
            )
        )

        score = (
            severity * 0.5
            + confidence * 2
            + affected_population / 5000
        )

        return round(score, 2)
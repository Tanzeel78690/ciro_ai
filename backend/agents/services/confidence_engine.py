class ConfidenceEngine:

    @staticmethod
    def adjust_confidence(
        base_confidence,
        conflicts,
        misinformation_score
    ):

        adjusted = base_confidence

        if conflicts:
            adjusted -= 0.2

        adjusted -= (
            misinformation_score * 0.3
        )

        adjusted = max(0.1, adjusted)

        return round(adjusted, 2)
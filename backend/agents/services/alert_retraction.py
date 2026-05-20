class AlertRetractionService:

    @staticmethod
    def should_retract(
        adjusted_confidence
    ):

        return adjusted_confidence < 0.4
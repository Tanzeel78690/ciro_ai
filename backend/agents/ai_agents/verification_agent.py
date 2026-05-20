from agents.utils.trace_logger import TraceLogger


class VerificationAgent:

    def verify(self, signals):

        TraceLogger.log(
            "VerificationAgent",
            "Checking conflicting signals"
        )

        flood_mentions = 0
        pipe_mentions = 0

        for signal in signals:

            text = signal["content"].lower()

            if "flood" in text:
                flood_mentions += 1

            if "pipe" in text:
                pipe_mentions += 1

        if pipe_mentions > flood_mentions:

            result = {
                "verified": False,
                "reason": "Possible water pipe burst"
            }

        else:

            result = {
                "verified": True,
                "reason": "Flood likely confirmed"
            }

        TraceLogger.log(
            "VerificationAgent",
            str(result)
        )

        return result


# class FusionAgent:

#     def analyze(self, signals):

#         print(
#             "[FusionAgent] "
#             "Starting signal fusion"
#         )

#         combined_text = " ".join([
#             signal.get(
#                 "content",
#                 ""
#             )
#             for signal in signals
#         ])

#         confidence = round(

#             sum([
#                 (
#                     signal.get(
#                         "credibility_score",
#                         0.5
#                     )
#                     +
#                     signal.get(
#                         "urgency_score",
#                         0.5
#                     )
#                 ) / 2

#                 for signal in signals
#             ]) / len(signals),

#             4
#         )

#         print(
#             "[FusionAgent] "
#             f"Calculated confidence: "
#             f"{confidence}"
#         )

#         return {

#             "combined_text":
#                 combined_text,

#             "confidence":
#                 confidence,

#             "signal_count":
#                 len(signals),

#             "signals":
#                 signals
#         }

class FusionAgent:

    def analyze(self, signals):

        print(
            "[FusionAgent] "
            "Starting signal fusion"
        )

        if not signals:
            return {
                "combined_text": "",
                "confidence": 0,
                "signal_count": 0,
                "signals": [],
                "location": None,
            }

        combined_text = " ".join([
            signal.get("content", "")
            for signal in signals
        ])

        confidence = round(
            sum([
                (
                    signal.get("credibility_score", 0.5)
                    +
                    signal.get("urgency_score", 0.5)
                ) / 2
                for signal in signals
            ]) / len(signals),
            4
        )

        first_signal_with_location = None

        for signal in signals:
            if (
                signal.get("latitude") is not None
                and signal.get("longitude") is not None
            ):
                first_signal_with_location = signal
                break

        location = None

        if first_signal_with_location:
            location = {
                "lat": first_signal_with_location.get("latitude"),
                "lng": first_signal_with_location.get("longitude"),
                "name": (
                    first_signal_with_location.get("location_name")
                    or first_signal_with_location.get("source_location")
                    or "Detected Location"
                )
            }

        print(
            "[FusionAgent] "
            f"Calculated confidence: {confidence}"
        )

        return {
            "combined_text": combined_text,
            "confidence": confidence,
            "signal_count": len(signals),
            "signals": signals,
            "location": location,
        }
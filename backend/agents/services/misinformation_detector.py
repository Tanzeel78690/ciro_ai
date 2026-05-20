class MisinformationDetector:

    SUSPICIOUS_WORDS = [
        "unconfirmed",
        "rumor",
        "fake",
        "viral",
        "maybe",
        "possibly",
    ]

    @staticmethod
    def analyze(signals):

        suspicious_count = 0

        for signal in signals:

            content = (
                signal.get(
                    "content",
                    ""
                ).lower()
            )

            for word in (
                MisinformationDetector
                .SUSPICIOUS_WORDS
            ):

                if word in content:
                    suspicious_count += 1

        misinformation_score = (
            suspicious_count
            /
            max(len(signals), 1)
        )

        return {
            "misinformation_score":
                round(
                    misinformation_score,
                    2
                ),
            "suspicious_signals":
                suspicious_count
        }
class ConflictResolutionService:

    CONFLICT_KEYWORDS = [

        ("flood", "pipe burst"),

        ("fire", "smoke test"),

        ("power outage", "maintenance"),

        ("protest", "public event"),
    ]

    @staticmethod
    def detect_conflicts(signals):

        conflicts = []

        combined_text = " ".join([
            signal.get("content", "").lower()
            for signal in signals
        ])

        for keyword_a, keyword_b in (
            ConflictResolutionService
            .CONFLICT_KEYWORDS
        ):

            if (
                keyword_a in combined_text
                and keyword_b in combined_text
            ):

                conflicts.append({
                    "primary": keyword_a,
                    "conflict": keyword_b,
                    "status": "contradiction_detected"
                })

        return conflicts
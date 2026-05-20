class MultilingualService:

    @staticmethod
    def generate_urdu_alert(
        crisis_type,
        location
    ):

        return (
            f"⚠ ہنگامی صورتحال: "
            f"{location} میں "
            f"{crisis_type} رپورٹ ہوئی ہے۔ "
            f"متاثرہ علاقے سے دور رہیں۔"
        )
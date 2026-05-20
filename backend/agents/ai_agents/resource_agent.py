

class ResourceAgent:

    def allocate(self, severity):

        print(
            "[ResourceAgent] "
            "Allocating resources"
        )

        resources = {

            "ambulances":
                max(1, severity // 2),

            "police_units":
                max(2, severity),

            "rescue_teams":
                max(1, severity // 3),
        }

        print(
            "[ResourceAgent] "
            f"Resources allocated: "
            f"{resources}"
        )

        return resources
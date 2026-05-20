from ..models import EmergencyResource


class ResourceOptimizer:

    @staticmethod
    def allocate(incident):

        severity = (
            incident["classification"]
            .get("severity", 1)
        )

        allocated_resources = []

        ambulances = EmergencyResource.objects.filter(
            resource_type="ambulance",
            active=True
        )

        police_units = EmergencyResource.objects.filter(
            resource_type="police",
            active=True
        )

        rescue_teams = EmergencyResource.objects.filter(
            resource_type="rescue",
            active=True
        )

        required_ambulances = min(
            severity,
            5
        )

        required_police = min(
            severity + 2,
            8
        )

        required_rescue = min(
            severity // 2,
            4
        )

        for ambulance in ambulances:

            if ambulance.available_units <= 0:
                continue

            dispatch = min(
                ambulance.available_units,
                required_ambulances
            )

            ambulance.available_units -= dispatch
            ambulance.save()

            allocated_resources.append({
                "resource": ambulance.name,
                "type": "ambulance",
                "units": dispatch,
            })

            required_ambulances -= dispatch

            if required_ambulances <= 0:
                break

        for police in police_units:

            if police.available_units <= 0:
                continue

            dispatch = min(
                police.available_units,
                required_police
            )

            police.available_units -= dispatch
            police.save()

            allocated_resources.append({
                "resource": police.name,
                "type": "police",
                "units": dispatch,
            })

            required_police -= dispatch

            if required_police <= 0:
                break

        for rescue in rescue_teams:

            if rescue.available_units <= 0:
                continue

            dispatch = min(
                rescue.available_units,
                required_rescue
            )

            rescue.available_units -= dispatch
            rescue.save()

            allocated_resources.append({
                "resource": rescue.name,
                "type": "rescue",
                "units": dispatch,
            })

            required_rescue -= dispatch

            if required_rescue <= 0:
                break

        return allocated_resources
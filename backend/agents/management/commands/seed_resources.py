from django.core.management.base import BaseCommand

from django.apps import apps


class Command(BaseCommand):

    def handle(self, *args, **kwargs):

        EmergencyResource = apps.get_model('agents', 'EmergencyResource')

        EmergencyResource.objects.all().delete()

        resources = [

            {
                "name": "Ambulance Unit 1",
                "resource_type": "ambulance",
                "latitude": 33.6844,
                "longitude": 73.0479,
                "available_units": 5,
            },

            {
                "name": "Police Squad Alpha",
                "resource_type": "police",
                "latitude": 33.7008,
                "longitude": 72.9682,
                "available_units": 8,
            },

            {
                "name": "Rescue Team Bravo",
                "resource_type": "rescue",
                "latitude": 33.7294,
                "longitude": 73.0931,
                "available_units": 4,
            },

            {
                "name": "City Hospital",
                "resource_type": "hospital",
                "latitude": 33.7100,
                "longitude": 73.0500,
                "capacity": 200,
            },
        ]

        for item in resources:

            EmergencyResource.objects.create(
                **item
            )

        self.stdout.write(
            self.style.SUCCESS(
                "Resources Seeded Successfully"
            )
        )
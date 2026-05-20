from django.db import models

# Create your models here.
class EmergencyResource(models.Model):

    RESOURCE_TYPES = [
        ("ambulance", "Ambulance"),
        ("police", "Police"),
        ("rescue", "Rescue Team"),
        ("hospital", "Hospital"),
        ("utility", "Utility Crew"),
    ]

    name = models.CharField(max_length=255)

    resource_type = models.CharField(
        max_length=50,
        choices=RESOURCE_TYPES
    )

    latitude = models.FloatField()

    longitude = models.FloatField()

    available_units = models.IntegerField(default=1)

    capacity = models.IntegerField(default=100)

    active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
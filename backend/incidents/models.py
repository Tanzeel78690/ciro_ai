from django.db import models

class Incident(models.Model):

    INCIDENT_TYPES = [
        ('flood', 'Flood'),
        ('heatwave', 'Heatwave'),
        ('accident', 'Accident'),
        ('power_outage', 'Power Outage'),
        ('protest', 'Protest'),
    ]

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('resolved', 'Resolved'),
        ('investigating', 'Investigating'),
    ]

    title = models.CharField(max_length=255)

    incident_type = models.CharField(
        max_length=50,
        choices=INCIDENT_TYPES
    )

    severity = models.IntegerField(default=1)

    confidence_score = models.FloatField(default=0.0)

    latitude = models.FloatField()

    longitude = models.FloatField()

    affected_population = models.IntegerField(default=0)

    estimated_duration = models.IntegerField(default=0)

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='investigating'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    


class Signal(models.Model):

    SOURCE_TYPES = [
        ('social', 'Social Media'),
        ('weather', 'Weather'),
        ('traffic', 'Traffic'),
        ('sensor', 'Sensor'),
        ('field', 'Field Report'),
    ]

    incident = models.ForeignKey(
        Incident,
        on_delete=models.CASCADE,
        related_name='signals'
    )

    source_type = models.CharField(
        max_length=50,
        choices=SOURCE_TYPES
    )

    content = models.TextField()

    credibility_score = models.FloatField(default=0.5)

    urgency_score = models.FloatField(default=0.5)

    created_at = models.DateTimeField(auto_now_add=True)

class Resource(models.Model):

    RESOURCE_TYPES = [
        ('ambulance', 'Ambulance'),
        ('police', 'Police'),
        ('rescue', 'Rescue Team'),
        ('generator', 'Generator'),
    ]

    STATUS = [
        ('available', 'Available'),
        ('deployed', 'Deployed'),
    ]

    resource_type = models.CharField(max_length=50)

    status = models.CharField(
        max_length=50,
        choices=STATUS,
        default='available'
    )

    latitude = models.FloatField()

    longitude = models.FloatField()

class IncidentRecord(models.Model):
    crisis_type = models.CharField(max_length=100)
    severity = models.IntegerField(default=1)
    confidence = models.FloatField(default=0.5)

    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)
    location_name = models.CharField(max_length=255, blank=True)

    payload = models.JSONField(default=dict)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.crisis_type} - {self.severity}"
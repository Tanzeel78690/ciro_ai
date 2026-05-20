import sys
import os
import django
import time

sys.path.append(
    os.path.dirname(
        os.path.dirname(
            os.path.abspath(__file__)
        )
    )
)

os.environ.setdefault(
    "DJANGO_SETTINGS_MODULE",
    "core.settings"
)

django.setup()

from agents.ai_agents.orchestrator import CrisisOrchestrator

orchestrator = CrisisOrchestrator()

DEMO_INCIDENTS = [
    {
        "name": "Urban Flooding - Karachi Saddar",
        "signals": [
            {
                "content": "Road flooded near Saddar Karachi after heavy rainfall",
                "credibility_score": 0.9,
                "urgency_score": 0.9,
                "latitude": 24.8607,
                "longitude": 67.0011,
                "location_name": "Saddar, Karachi",
                "source_type": "citizen_report",
            },
            {
                "content": "Traffic congestion increasing near Saddar due to water accumulation",
                "credibility_score": 0.85,
                "urgency_score": 0.8,
                "latitude": 24.8607,
                "longitude": 67.0011,
                "location_name": "Saddar, Karachi",
                "source_type": "traffic_feed",
            },
            {
                "content": "Heavy rainfall detected in central Karachi",
                "credibility_score": 0.95,
                "urgency_score": 0.85,
                "latitude": 24.8607,
                "longitude": 67.0011,
                "location_name": "Saddar, Karachi",
                "source_type": "weather_api",
            },
        ],
    },
    {
        "name": "Heat Emergency - Orangi Town",
        "signals": [
            {
                "content": "Extreme heat reported in low income area Orangi Town",
                "credibility_score": 0.88,
                "urgency_score": 0.9,
                "latitude": 24.9447,
                "longitude": 66.9905,
                "location_name": "Orangi Town, Karachi",
                "source_type": "citizen_report",
            },
            {
                "content": "Emergency calls increasing due to dehydration and heat exhaustion",
                "credibility_score": 0.9,
                "urgency_score": 0.95,
                "latitude": 24.9447,
                "longitude": 66.9905,
                "location_name": "Orangi Town, Karachi",
                "source_type": "emergency_calls",
            },
        ],
    },
    {
        "name": "Road Accident - Shahrah-e-Faisal",
        "signals": [
            {
                "content": "Major accident on Shahrah-e-Faisal causing road blockage",
                "credibility_score": 0.92,
                "urgency_score": 0.96,
                "latitude": 24.8708,
                "longitude": 67.0907,
                "location_name": "Shahrah-e-Faisal, Karachi",
                "source_type": "traffic_feed",
            },
            {
                "content": "Ambulance requested urgently after vehicle collision",
                "credibility_score": 0.9,
                "urgency_score": 0.97,
                "latitude": 24.8708,
                "longitude": 67.0907,
                "location_name": "Shahrah-e-Faisal, Karachi",
                "source_type": "emergency_call",
            },
        ],
    },
    {
        "name": "False Alarm - Water Main Burst",
        "signals": [
            {
                "content": "People claiming flood near Gulshan, but field report says pipe burst",
                "credibility_score": 0.65,
                "urgency_score": 0.6,
                "latitude": 24.9180,
                "longitude": 67.0971,
                "location_name": "Gulshan-e-Iqbal, Karachi",
                "source_type": "social_media",
            },
            {
                "content": "Field team confirms possible pipe burst not urban flooding",
                "credibility_score": 0.9,
                "urgency_score": 0.7,
                "latitude": 24.9180,
                "longitude": 67.0971,
                "location_name": "Gulshan-e-Iqbal, Karachi",
                "source_type": "field_report",
            },
        ],
    },
]

print("\n==============================")
print("CIRO DEMO INCIDENT INJECTION")
print("==============================\n")

for incident in DEMO_INCIDENTS:
    print(f"\nInjecting Demo Incident: {incident['name']}\n")

    orchestrator.process_incident(
        incident["signals"]
    )

    time.sleep(8)

print("\nDemo injection completed.\n")
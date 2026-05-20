# # import sys
# # import os
# # import django

# # sys.path.append(
# #     os.path.dirname(
# #         os.path.dirname(
# #             os.path.abspath(__file__)
# #         )
# #     )
# # )

# # # Setup Django settings
# # os.environ.setdefault(
# #     "DJANGO_SETTINGS_MODULE",
# #     "core.settings"
# # )

# # django.setup()

# # import random
# # import time

# # from agents.ai_agents.orchestrator import (
# #     CrisisOrchestrator  
# # )
 
# # orchestrator = CrisisOrchestrator()

# # SIGNALS = [

# #     [
# #         {
# #             "content": "Road flooded near G-10",
# #             "credibility_score": 0.9,
# #             "urgency_score": 0.9,
# #         },
# #         {
# #             "content": "Heavy rainfall detected",
# #             "credibility_score": 0.95,
# #             "urgency_score": 0.85,
# #         },
# #         {
# #             "content": "Traffic congestion increasing",
# #             "credibility_score": 0.75,
# #             "urgency_score": 0.7,
# #         },
# #     ],

# #     [
# #         {
# #             "content": "Extreme heat in low income area",
# #             "credibility_score": 0.85,
# #             "urgency_score": 0.8,
# #         },
# #         {
# #             "content": "Emergency calls increasing",
# #             "credibility_score": 0.9,
# #             "urgency_score": 0.95,
# #         },
# #     ],

# #     [
# #         {
# #             "content": "Possible pipe burst near G-10",
# #             "credibility_score": 0.8,
# #             "urgency_score": 0.6,
# #         },
# #     ]
# # ]


# # while True:

# #     selected = random.choice(SIGNALS)

# #     print("\nGenerating Incident...\n")

# #     orchestrator.process_incident(selected)

# #     time.sleep(10)


# import sys
# import os
# import django
# import random
# import time

# sys.path.append(
#     os.path.dirname(
#         os.path.dirname(
#             os.path.abspath(__file__)
#         )
#     )
# )

# # Setup Django settings
# os.environ.setdefault(
#     "DJANGO_SETTINGS_MODULE",
#     "core.settings"
# )

# django.setup()

# from agents.ai_agents.orchestrator import (
#     CrisisOrchestrator
# )

# orchestrator = CrisisOrchestrator()

# # =========================
# # MULTI-SIGNAL INCIDENTS
# # =========================

# SIGNALS = [

#     # FLOOD INCIDENT
#     [
#         {
#             "content": "Road flooded near G-10",
#             "credibility_score": 0.9,
#             "urgency_score": 0.9,
#         },
#         {
#             "content": "Heavy rainfall detected",
#             "credibility_score": 0.95,
#             "urgency_score": 0.85,
#         },
#         {
#             "content": "Traffic congestion increasing",
#             "credibility_score": 0.75,
#             "urgency_score": 0.7,
#         },
#     ],

#     # HEATWAVE INCIDENT
#     [
#         {
#             "content": "Extreme heat in low income area",
#             "credibility_score": 0.85,
#             "urgency_score": 0.8,
#         },
#         {
#             "content": "Emergency calls increasing",
#             "credibility_score": 0.9,
#             "urgency_score": 0.95,
#         },
#     ],

#     # FALSE POSITIVE / CONFLICT SIGNAL
#     [
#         {
#             "content": "Possible pipe burst near G-10",
#             "credibility_score": 0.8,
#             "urgency_score": 0.6,
#         },
#     ],

#     # POWER OUTAGE
#     [
#         {
#             "content": "Power outage reported in Sector F-8",
#             "credibility_score": 0.88,
#             "urgency_score": 0.82,
#         },
#         {
#             "content": "Traffic lights not working",
#             "credibility_score": 0.84,
#             "urgency_score": 0.79,
#         },
#     ],

#     # ROAD ACCIDENT
#     [
#         {
#             "content": "Major accident on expressway",
#             "credibility_score": 0.93,
#             "urgency_score": 0.95,
#         },
#         {
#             "content": "Ambulance requested urgently",
#             "credibility_score": 0.91,
#             "urgency_score": 0.97,
#         },
#     ],

#     # PROTEST / PUBLIC DISORDER
#     [
#         {
#             "content": "Large protest gathering downtown",
#             "credibility_score": 0.82,
#             "urgency_score": 0.74,
#         },
#         {
#             "content": "Roads blocked near city center",
#             "credibility_score": 0.87,
#             "urgency_score": 0.78,
#         },
#     ],
# ]

# print("\n==============================")
# print("CIRO LIVE INCIDENT SIMULATION")
# print("==============================\n")

# # =========================
# # CONTINUOUS LIVE SIMULATION
# # =========================

# while True:

#     # Generate 1–3 simultaneous incidents
#     incident_batch_count = random.randint(1, 3)

#     print(
#         f"\nGenerating {incident_batch_count} Incident(s)...\n"
#     )

#     for _ in range(incident_batch_count):

#         selected = random.choice(SIGNALS)

#         result = orchestrator.process_incident(
#             selected
#         )

#         print("\n===================================")
#         print("CRISIS DETECTED")
#         print("===================================")

#         print(
#             f"Type: "
#             f"{result['classification'].get('crisis_type')}"
#         )

#         print(
#             f"Severity: "
#             f"{result['classification'].get('severity')}"
#         )

#         print(
#             f"Confidence: "
#             f"{result['classification'].get('confidence')}"
#         )

#         print(
#             f"Priority Score: "
#             f"{result.get('priority_score')}"
#         )

#         print("\nAllocated Resources:")

#         for resource in result.get(
#             "allocated_resources",
#             []
#         ):

#             print(
#                 f"- {resource['resource']} "
#                 f"({resource['units']} units)"
#             )

#         print("===================================\n")

#         # Small delay between simultaneous incidents
#         time.sleep(2)

#     # Random wait before next batch
#     next_interval = random.randint(8, 15)

#     print(
#         f"\nNext incident batch in "
#         f"{next_interval} seconds...\n"
#     )

#     time.sleep(next_interval)



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
from agents.services.real_weather_service import RealWeatherService

orchestrator = CrisisOrchestrator()

MONITORED_AREAS = [
    {
        "name": "Karachi",
        "latitude": 24.8607,
        "longitude": 67.0011,
    },
    {
        "name": "Islamabad G-10",
        "latitude": 33.6844,
        "longitude": 73.0479,
    },
]

print("\n==============================")
print("CIRO REAL LIVE INGESTION ENGINE")
print("==============================\n")

while True:
    all_signals = []

    for area in MONITORED_AREAS:
        weather_signals = RealWeatherService.fetch_weather_signal(
            latitude=area["latitude"],
            longitude=area["longitude"],
            location_name=area["name"]
        )

        all_signals.extend(weather_signals)

    if all_signals:
        print(f"\nReal signal batch detected: {len(all_signals)} signal(s)\n")
        orchestrator.process_incident(all_signals)
    else:
        print("No real crisis signal detected. Monitoring continues...")

    time.sleep(60)
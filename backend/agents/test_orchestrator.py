from agents.ai_agents.orchestrator import CrisisOrchestrator

signals = [
    {
        "content": "Road flooded near G-10",
        "credibility_score": 0.8,
        "urgency_score": 0.9,
    },
    {
        "content": "Heavy rainfall reported",
        "credibility_score": 0.95,
        "urgency_score": 0.8,
    },
    {
        "content": "Traffic congestion increasing",
        "credibility_score": 0.7,
        "urgency_score": 0.75,
    }
]

orchestrator = CrisisOrchestrator()

result = orchestrator.process_incident(signals)

print(result)
export const demoIncidents = [
    {
      location: {
        name: "Saddar, Karachi",
        lat: 24.8607,
        lng: 67.0011,
      },
      classification: {
        crisis_type: "urban flooding",
        severity: 8,
        confidence: 0.91,
        adjusted_confidence: 0.86,
        affected_population: 5200,
      },
      priority_score: 8.7,
      emergency_ticket: {
        ticket_id: "CIRO-DEMO-1001",
        status: "DISPATCHED",
        eta_minutes: 9,
        assigned_team: "High Priority Response Team",
        location: "Saddar, Karachi",
      },
      impact_simulation: {
        before: {
          response_time_minutes: 35,
          congestion_level_percent: 91,
          public_risk_percent: 80,
          affected_population: 5200,
        },
        after: {
          response_time_minutes: 14,
          congestion_level_percent: 48,
          public_risk_percent: 45,
          population_protected: 1820,
        },
        summary:
          "CIRO response is projected to reduce response time by 21 minutes, reduce congestion by 43%, and protect 1,820 people.",
      },
      allocated_resources: [
        { resource: "Karachi Ambulance Unit 01", type: "ambulance", units: 4 },
        { resource: "Karachi Police Unit 01", type: "police", units: 7 },
        { resource: "Karachi Rescue Team 01", type: "rescue", units: 3 },
      ],
      stakeholder_messages: {
        public: {
          title: "Public Safety Alert",
          message:
            "Avoid Saddar routes due to urban flooding. Use alternate roads and follow official updates.",
          priority: "high",
        },
        rescue: {
          title: "Emergency Rescue Dispatch",
          message:
            "Deploy rescue teams for stranded vehicles and vulnerable citizens.",
          priority: "high",
        },
        hospital: {
          title: "Hospital Preparedness",
          message:
            "Prepare emergency intake for flood-related injuries and exposure cases.",
          priority: "medium",
        },
      },
      traces: [
        {
          agent: "FusionAgent",
          message: "Merged weather, traffic, and citizen report signals",
          timestamp: "Demo Trace",
        },
        {
          agent: "ClassifierAgent",
          message: "Classified incident as urban flooding",
          timestamp: "Demo Trace",
        },
        {
          agent: "ResourceOptimizer",
          message: "Allocated ambulance, police, and rescue teams",
          timestamp: "Demo Trace",
        },
        {
          agent: "ImpactSimulation",
          message: "Calculated before and after response impact",
          timestamp: "Demo Trace",
        },
      ],
    },
  ]
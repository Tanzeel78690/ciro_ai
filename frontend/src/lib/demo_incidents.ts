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
      prediction: {
        spread_risk: "High",
        expected_duration: "2-4 hours",
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
          message: "Avoid Saddar routes due to urban flooding. Use alternate roads and follow official updates.",
          priority: "high",
        },
        police: {
          title: "Traffic Control Required",
          message: "Block waterlogged lanes and create emergency vehicle corridor.",
          priority: "high",
        },
        rescue: {
          title: "Rescue Dispatch",
          message: "Deploy rescue teams for stranded vehicles and vulnerable citizens.",
          priority: "high",
        },
        hospital: {
          title: "Hospital Preparedness",
          message: "Prepare emergency intake for flood-related injuries and exposure cases.",
          priority: "medium",
        },
        utility: {
          title: "Drainage Inspection",
          message: "Inspect drainage system and possible blocked stormwater channels.",
          priority: "medium",
        },
      },
      traces: [
        { agent: "FusionAgent", message: "Merged weather, traffic, and citizen report signals", timestamp: "Demo Trace" },
        { agent: "ClassifierAgent", message: "Classified incident as urban flooding", timestamp: "Demo Trace" },
        { agent: "ResourceOptimizer", message: "Allocated ambulance, police, and rescue teams", timestamp: "Demo Trace" },
        { agent: "ImpactSimulation", message: "Calculated before and after response impact", timestamp: "Demo Trace" },
      ],
    },
  
    {
      location: {
        name: "Orangi Town, Karachi",
        lat: 24.9447,
        lng: 66.9905,
      },
      classification: {
        crisis_type: "heatwave",
        severity: 7,
        confidence: 0.88,
        adjusted_confidence: 0.84,
        affected_population: 8500,
      },
      prediction: {
        spread_risk: "Medium",
        expected_duration: "6-8 hours",
      },
      priority_score: 8.1,
      emergency_ticket: {
        ticket_id: "CIRO-DEMO-1002",
        status: "DISPATCHED",
        eta_minutes: 11,
        assigned_team: "Medical Outreach Team",
        location: "Orangi Town, Karachi",
      },
      impact_simulation: {
        before: {
          response_time_minutes: 33,
          congestion_level_percent: 67,
          public_risk_percent: 70,
          affected_population: 8500,
        },
        after: {
          response_time_minutes: 16,
          congestion_level_percent: 42,
          public_risk_percent: 38,
          population_protected: 2975,
        },
        summary:
          "CIRO response is projected to reduce response time by 17 minutes, reduce public risk by 32%, and protect 2,975 people.",
      },
      allocated_resources: [
        { resource: "Mobile Medical Unit 02", type: "ambulance", units: 3 },
        { resource: "Water Distribution Team", type: "utility", units: 4 },
        { resource: "Community Health Volunteers", type: "rescue", units: 5 },
      ],
      stakeholder_messages: {
        public: {
          title: "Heat Safety Alert",
          message: "Stay indoors, drink water, and avoid direct sunlight. Cooling points are being prepared.",
          priority: "high",
        },
        hospital: {
          title: "Heat Emergency Intake",
          message: "Prepare for dehydration, heat exhaustion, and vulnerable patient cases.",
          priority: "high",
        },
        rescue: {
          title: "Medical Outreach",
          message: "Deploy outreach teams to vulnerable neighborhoods and elderly residents.",
          priority: "high",
        },
        utility: {
          title: "Water Support",
          message: "Arrange water tankers and cooling support points.",
          priority: "medium",
        },
      },
      traces: [
        { agent: "FusionAgent", message: "Combined temperature and emergency call signals", timestamp: "Demo Trace" },
        { agent: "ClassifierAgent", message: "Classified incident as heatwave", timestamp: "Demo Trace" },
        { agent: "PredictionAgent", message: "Estimated vulnerable population risk", timestamp: "Demo Trace" },
        { agent: "CommunicationAgent", message: "Generated public heat safety alert", timestamp: "Demo Trace" },
      ],
    },
  
    {
      location: {
        name: "Shahrah-e-Faisal, Karachi",
        lat: 24.8708,
        lng: 67.0907,
      },
      classification: {
        crisis_type: "road accident",
        severity: 6,
        confidence: 0.9,
        adjusted_confidence: 0.87,
        affected_population: 2100,
      },
      prediction: {
        spread_risk: "Medium",
        expected_duration: "1-2 hours",
      },
      priority_score: 7.4,
      emergency_ticket: {
        ticket_id: "CIRO-DEMO-1003",
        status: "DISPATCHED",
        eta_minutes: 13,
        assigned_team: "Traffic & Medical Response Team",
        location: "Shahrah-e-Faisal, Karachi",
      },
      impact_simulation: {
        before: {
          response_time_minutes: 30,
          congestion_level_percent: 86,
          public_risk_percent: 60,
          affected_population: 2100,
        },
        after: {
          response_time_minutes: 18,
          congestion_level_percent: 52,
          public_risk_percent: 36,
          population_protected: 735,
        },
        summary:
          "CIRO response is projected to reduce response time by 12 minutes, reduce congestion by 34%, and protect 735 people.",
      },
      allocated_resources: [
        { resource: "Ambulance Unit 04", type: "ambulance", units: 2 },
        { resource: "Traffic Police Unit 03", type: "police", units: 6 },
        { resource: "Rescue Vehicle 01", type: "rescue", units: 1 },
      ],
      stakeholder_messages: {
        public: {
          title: "Road Blockage Alert",
          message: "Avoid Shahrah-e-Faisal due to accident and emergency operations.",
          priority: "medium",
        },
        police: {
          title: "Traffic Diversion",
          message: "Redirect traffic through alternate corridors and secure accident zone.",
          priority: "high",
        },
        hospital: {
          title: "Accident Intake Alert",
          message: "Prepare emergency trauma intake for possible injuries.",
          priority: "high",
        },
        media: {
          title: "Traffic Advisory",
          message: "Official advisory issued for road blockage and rerouting.",
          priority: "low",
        },
      },
      traces: [
        { agent: "FusionAgent", message: "Merged traffic congestion and emergency call signals", timestamp: "Demo Trace" },
        { agent: "ClassifierAgent", message: "Classified incident as road accident", timestamp: "Demo Trace" },
        { agent: "ResourceOptimizer", message: "Allocated ambulance and police units", timestamp: "Demo Trace" },
        { agent: "SimulationAgent", message: "Simulated rerouting and response time reduction", timestamp: "Demo Trace" },
      ],
    },
  
    {
      location: {
        name: "Gulshan-e-Iqbal, Karachi",
        lat: 24.918,
        lng: 67.0971,
      },
      classification: {
        crisis_type: "infrastructure failure",
        severity: 5,
        confidence: 0.72,
        adjusted_confidence: 0.49,
        affected_population: 1800,
        conflicts: [
          {
            primary: "flood",
            conflict: "pipe burst",
            status: "contradiction_detected",
          },
        ],
        misinformation: {
          misinformation_score: 0.28,
          suspicious_signals: 1,
        },
      },
      prediction: {
        spread_risk: "Low",
        expected_duration: "1-3 hours",
      },
      priority_score: 5.9,
      requires_retraction: true,
      emergency_ticket: {
        ticket_id: "CIRO-DEMO-1004",
        status: "UNDER VERIFICATION",
        eta_minutes: 18,
        assigned_team: "Utility Verification Team",
        location: "Gulshan-e-Iqbal, Karachi",
      },
      impact_simulation: {
        before: {
          response_time_minutes: 27,
          congestion_level_percent: 70,
          public_risk_percent: 50,
          affected_population: 1800,
        },
        after: {
          response_time_minutes: 19,
          congestion_level_percent: 44,
          public_risk_percent: 30,
          population_protected: 630,
        },
        summary:
          "CIRO detected conflicting flood and pipe-burst signals, reduced public alert intensity, and escalated to utility verification.",
      },
      allocated_resources: [
        { resource: "Utility Crew 02", type: "utility", units: 3 },
        { resource: "Police Support Unit", type: "police", units: 2 },
      ],
      stakeholder_messages: {
        public: {
          title: "Alert Under Verification",
          message: "Previous flooding reports are being verified. Avoid spreading unconfirmed information.",
          priority: "medium",
        },
        utility: {
          title: "Pipe Burst Verification",
          message: "Dispatch utility crew to verify possible water-main burst.",
          priority: "high",
        },
        command_center: {
          title: "Conflict Detected",
          message: "CIRO found conflicting flood vs pipe-burst signals and triggered verification workflow.",
          priority: "high",
        },
      },
      traces: [
        { agent: "ConflictResolution", message: "Detected contradiction between flooding and pipe burst reports", timestamp: "Demo Trace" },
        { agent: "MisinformationDetector", message: "Suspicious low-confidence signal detected", timestamp: "Demo Trace" },
        { agent: "ConfidenceEngine", message: "Adjusted confidence reduced from 0.72 to 0.49", timestamp: "Demo Trace" },
        { agent: "AlertRetraction", message: "Retraction/verification workflow triggered", timestamp: "Demo Trace" },
      ],
    },
  
    {
      location: {
        name: "Korangi Industrial Area, Karachi",
        lat: 24.8377,
        lng: 67.1209,
      },
      classification: {
        crisis_type: "power outage",
        severity: 6,
        confidence: 0.85,
        adjusted_confidence: 0.81,
        affected_population: 4300,
      },
      prediction: {
        spread_risk: "Medium",
        expected_duration: "3-5 hours",
      },
      priority_score: 7.2,
      emergency_ticket: {
        ticket_id: "CIRO-DEMO-1005",
        status: "ESCALATED",
        eta_minutes: 15,
        assigned_team: "Utility Restoration Team",
        location: "Korangi Industrial Area, Karachi",
      },
      impact_simulation: {
        before: {
          response_time_minutes: 31,
          congestion_level_percent: 64,
          public_risk_percent: 60,
          affected_population: 4300,
        },
        after: {
          response_time_minutes: 17,
          congestion_level_percent: 39,
          public_risk_percent: 34,
          population_protected: 1505,
        },
        summary:
          "CIRO response is projected to reduce outage escalation delay by 14 minutes and reduce operational risk by 26%.",
      },
      allocated_resources: [
        { resource: "K-Electric Utility Crew", type: "utility", units: 4 },
        { resource: "Police Safety Unit", type: "police", units: 2 },
        { resource: "Generator Support Unit", type: "utility", units: 2 },
      ],
      stakeholder_messages: {
        public: {
          title: "Power Outage Advisory",
          message: "Power outage reported in Korangi Industrial Area. Avoid unnecessary travel near affected factories.",
          priority: "medium",
        },
        utility: {
          title: "Utility Escalation",
          message: "Dispatch restoration team and backup generator support.",
          priority: "high",
        },
        hospital: {
          title: "Backup Power Check",
          message: "Nearby hospitals should verify generator readiness.",
          priority: "medium",
        },
        command_center: {
          title: "Industrial Area Outage",
          message: "Power outage may affect industrial operations and traffic signals.",
          priority: "high",
        },
      },
      traces: [
        { agent: "FusionAgent", message: "Combined utility outage and citizen complaint signals", timestamp: "Demo Trace" },
        { agent: "ClassifierAgent", message: "Classified incident as power outage", timestamp: "Demo Trace" },
        { agent: "PriorityEngine", message: "Raised priority due to industrial area impact", timestamp: "Demo Trace" },
        { agent: "StakeholderCommandCenter", message: "Generated utility, public, hospital, and command center messages", timestamp: "Demo Trace" },
      ],
    },
  ]
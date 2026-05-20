export interface Trace {
  timestamp: string
  agent: string
  message: string
}

export interface ResourceAllocation {

  resource: string

  type: string

  units: number
}


export interface Incident {
  classification: {
    crisis_type: string
    severity: number
    confidence: number
    urgency: string
    affected_population: number
    allocated_resources: ResourceAllocation[]
    priority_score: number
  }

  prediction: {
    spread_radius: string
    expected_duration: string
    peak_impact_time: string
    spread_risk: string
    uncertainty_range: string
  }

  allocation: {
    ambulances: number
    police_units: number
    rescue_teams: number
  }

  simulation: {
    before: string
    action: string
    after: string
    side_effect: string
  }

  verification: {
    verified: boolean
    reason: string
  }

  alert: string
}
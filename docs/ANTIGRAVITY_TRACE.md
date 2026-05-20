# CIRO Antigravity Execution Trace

This document captures the underlying algorithmic workflow and behavioral trace of the CIRO (Crisis Incident Response Orchestrator) backend during our demo injection stream. It highlights how the multi-agent system processes noisy data, executes decision-making, and handles external failures.

## 1. Signal Interpretation & Fusion
The **FusionAgent** ingested raw unstructured multi-modal inputs (citizen reports, traffic feeds, weather APIs). Instead of treating each data point independently, it fused spatially and temporally aligned signals (e.g., Saddar Karachi traffic paired with local weather) into a unified incident context for downstream evaluation.

## 2. Confidence Scoring
Initial confidence was bootstrapped based on the credibility of the reporting sources (e.g., verified weather sensors yielding higher base confidence than anonymous social media). The **ConfidenceEngine** then dynamically adjusted these probabilities. For instance, in one demo incident, the confidence was actively mathematicaly decayed to `0.67` upon the detection of conflicting reports.

## 3. Crisis Classification
The **ClassifierAgent** was responsible for mapping the unstructured fusion data into structured categories (Crisis Type, Severity, Urgency). 
* **Fallback Behavior (External Data Unavailability)**: During execution, the external Gemini API call failed (`404 models/gemini-1.5-flash is not found`). Instead of crashing or dropping the incident, the agent seamlessly engaged its **Fallback Heuristic Mode**, utilizing regex and keyword matching against the payload to successfully classify the incident as a "flood" and assign default severity parameters. 

## 4. Conflict & Misinformation Handling
The system proactively scrubbed the data for unreliability. 
* **ConflictResolutionService**: Analyzed overlapping signals and flagged discrepancies (e.g., `1 conflict(s) detected`).
* **MisinformationDetector**: Evaluated lexical markers and source history for panic-inducing or fake claims, producing a misinformation score that fed directly back into the Confidence Engine.

## 5. Priority Ranking
The **PriorityEngine** ingested the classification output to determine overall response triage. It calculated a composite priority score (e.g., `6.48`) based on the severity multiplier, estimated affected population, and the urgency of the event, ensuring that low-income areas facing heat emergencies or high-traffic intersections received appropriate focus.

## 6. Resource Allocation Trade-offs
With a priority established, the **ResourceOptimizer** and **ResourceAgent** evaluated the severity against theoretical inventory limits. For a high-severity event, it bypassed a generic response and dynamically allocated a tailored dispatch footprint: `{'ambulances': 3, 'police_units': 6, 'rescue_teams': 2}`.

## 7. Simulated Response Execution
Before committing to full public communication, the **SimulationAgent** utilized the "fallback prediction" parameters (`'spread_radius': '3km', 'expected_duration': '12 hours'`) to run a predictive impact simulation. This allowed the system to forecast the likely evolution of the crisis (e.g., tracking the transition from severity level 3 to 4 over the next few hours).

## 8. Stakeholder Messages
Rather than a one-size-fits-all broadcast, the **StakeholderCommandCenter** processed the fusion, prediction, and resource allocation data to generate partitioned, role-based messaging:
* *Public Alerts*: Focus on safety and evacuation perimeters.
* *Responder Briefings*: Focus on tactical deployment and exact coordinates.

## 9. False Alarm & Retraction Behavior
In the final demo incident ("False Alarm - Water Main Burst"), the system ingested a social media panic claiming an urban flood, immediately followed by a field team clarifying it was merely a pipe burst.
* The conflict detection spiked.
* The confidence score plummeted due to the highly credible field report contradicting the low-credibility social media claim.
* The **AlertRetractionService** evaluated the newly adjusted confidence, determined it crossed the retraction threshold (`should_retract`), and triggered an automated alert retraction to stand down emergency services and correct the public record.

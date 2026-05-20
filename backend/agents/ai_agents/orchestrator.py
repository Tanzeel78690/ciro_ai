

from django.utils import timezone

from .fusion_agent import FusionAgent
from .classifier_agent import ClassifierAgent
from .prediction_agent import PredictionAgent
from .resource_agent import ResourceAgent
from .simulation_agent import SimulationAgent
from .verification_agent import VerificationAgent
from .communication_agent import CommunicationAgent
from agents.services.ticket_service import TicketService
from agents.services.impact_simulation_service import ImpactSimulationService

from agents.utils.trace_logger import TraceLogger

from agents.services.priority_engine import (
    PriorityEngine
)

from agents.services.resource_optimizer import (
    ResourceOptimizer
)

from agents.services.conflict_resolution import (
    ConflictResolutionService
)

from agents.services.misinformation_detector import (
    MisinformationDetector
)

from agents.services.confidence_engine import (
    ConfidenceEngine
)

from agents.services.alert_retraction import (
    AlertRetractionService
)

from agents.utils.incident_broadcaster import (
    IncidentBroadcaster
)

from agents.services.location_service import (
    LocationService
)

from agents.services.stakeholder_command_center import (
    StakeholderCommandCenter
)

class CrisisOrchestrator:

    def __init__(self):

        self.fusion_agent = FusionAgent()

        self.classifier_agent = ClassifierAgent()

        self.prediction_agent = PredictionAgent()

        self.resource_agent = ResourceAgent()

        self.simulation_agent = SimulationAgent()

        self.verification_agent = VerificationAgent()

        self.communication_agent = CommunicationAgent()

    def process_incident(self, signals):

        # =====================================
        # START ORCHESTRATION
        # =====================================

        TraceLogger.log(
            "Orchestrator",
            "Starting crisis orchestration"
        )

        # =====================================
        # SIGNAL FUSION
        # =====================================

        fusion_result = self.fusion_agent.analyze(
            signals
        )

        TraceLogger.log(
            "FusionAgent",
            "Signal fusion completed"
        )

        # =====================================
        # CRISIS CLASSIFICATION
        # =====================================

        parsed = self.classifier_agent.classify(
            fusion_result
        )

        if not parsed:

            parsed = {
                "crisis_type": "unknown",
                "severity": 3,
                "confidence": 0.3,
                "urgency": "low",
                "affected_population": 100
            }

        TraceLogger.log(
            "ClassifierAgent",
            f"Incident classified as "
            f"{parsed.get('crisis_type')}" # type: ignore
        )

        # =====================================
        # CONFLICT DETECTION
        # =====================================

        conflicts = (
            ConflictResolutionService
            .detect_conflicts(signals)
        )

        TraceLogger.log(
            "ConflictResolution",
            f"{len(conflicts)} conflict(s) detected"
        )

        # =====================================
        # MISINFORMATION ANALYSIS
        # =====================================

        misinformation = (
            MisinformationDetector
            .analyze(signals)
        )

        TraceLogger.log(
            "MisinformationDetector",
            "Signal credibility analysis completed"
        )

        # =====================================
        # CONFIDENCE ADJUSTMENT
        # =====================================

        adjusted_confidence = (
            ConfidenceEngine
            .adjust_confidence(
                parsed.get( # type: ignore
                    "confidence",
                    0.5
                ),
                conflicts,
                misinformation.get(
                    "misinformation_score",
                    0
                )
            )
        )

        parsed["adjusted_confidence"] = ( 
            adjusted_confidence
        )

        parsed["conflicts"] = conflicts 

        parsed["misinformation"] = ( 
            misinformation
        )

        TraceLogger.log(
            "ConfidenceEngine",
            f"Adjusted confidence: "
            f"{adjusted_confidence}"
        )

        # =====================================
        # PREDICTION ENGINE
        # =====================================

        prediction = self.prediction_agent.predict(
            parsed
        )

        TraceLogger.log(
            "PredictionAgent",
            "Impact prediction completed"
        )

        # =====================================
        # VERIFICATION ENGINE
        # =====================================

        verification = self.verification_agent.verify(
            signals
        )

        TraceLogger.log(
            "VerificationAgent",
            "Incident verification completed"
        )

        # =====================================
        # ALERT RETRACTION CHECK
        # =====================================

        requires_retraction = (
            AlertRetractionService
            .should_retract(
                adjusted_confidence
            )
        )

        if requires_retraction:

            TraceLogger.log(
                "AlertRetraction",
                "Alert retraction triggered"
            )

        # =====================================
        # PRIORITY ENGINE
        # =====================================

        priority_score = (
            PriorityEngine.calculate_priority({
                "classification": parsed
            })
        )

        TraceLogger.log(
            "PriorityEngine",
            f"Priority score: "
            f"{priority_score}"
        )

        emergency_ticket = TicketService.generate_ticket(
            parsed,
            fusion_result.get("location")
        )

        impact_simulation = ImpactSimulationService.simulate(
            parsed,
            priority_score
        )

        TraceLogger.log(
            "TicketService",
            f"Emergency ticket created: {emergency_ticket['ticket_id']}"
        )

        TraceLogger.log(
            "ImpactSimulation",
            "Before and after response impact calculated"
        )
        # =====================================
        # RESOURCE OPTIMIZATION
        # =====================================

        allocated_resources = (
            ResourceOptimizer.allocate({
                "classification": parsed
            })
        )

        TraceLogger.log(
            "ResourceOptimizer",
            "Resources optimized"
        )

        # =====================================
        # RESOURCE ALLOCATION
        # =====================================

        allocation = self.resource_agent.allocate(
            parsed.get( # type: ignore
                "severity",
                5
            )
        )

        TraceLogger.log(
            "ResourceAgent",
            "Emergency units dispatched"
        )

        # =====================================
        # IMPACT SIMULATION
        # =====================================

        simulation = self.simulation_agent.simulate(
            parsed.get( # type: ignore
                "crisis_type",
                "unknown"
            )
        )

        TraceLogger.log(
            "SimulationAgent",
            "Impact simulation completed"
        )

        # =====================================
        # STAKEHOLDER COMMUNICATION
        # =====================================

        alert = self.communication_agent.generate_alert(
            parsed.get( # type: ignore
                "crisis_type",
                "unknown"
            )
        )

        TraceLogger.log(
            "CommunicationAgent",
            "Stakeholder alerts generated"
        )


        TraceLogger.log(
            "StakeholderCommandCenter",
            "Role-based stakeholder messages generated"
        )
        
        location = (
            LocationService.generate_location()
        )

        stakeholder_messages = StakeholderCommandCenter.generate_messages({
            "classification": parsed,
            "prediction": prediction,
            "allocated_resources": allocated_resources,
            "verification": verification,
            "requires_retraction": requires_retraction,
        })


        # =====================================
        # FINAL RESULT OBJECT
        # =====================================

        result = {

            "fusion": fusion_result,

            "classification": parsed,

            "prediction": prediction,

            "verification": verification,

            "priority_score": priority_score,

            "allocated_resources":
                allocated_resources,

            # "location": location,

            "location": fusion_result.get("location"),

            "allocation": allocation,

            "simulation": simulation,

            "emergency_ticket": emergency_ticket,
            
            "impact_simulation": impact_simulation,

            "requires_retraction":
                requires_retraction,

            "stakeholder_messages": stakeholder_messages,

            "alert": alert,

            "timestamp": str(
                timezone.now()
            ),

            "traces": TraceLogger.get_traces(),
        }

        # =====================================
        # FINAL TRACE
        # =====================================

        TraceLogger.log(
            "Orchestrator",
            "Crisis orchestration completed"
        )
        from incidents.models import IncidentRecord

        location = result.get("location") or {}

        IncidentRecord.objects.create(
            crisis_type=parsed.get("crisis_type", "unknown"),
            severity=parsed.get("severity", 1),
            confidence=parsed.get(
                "adjusted_confidence",
                parsed.get("confidence", 0.5)
            ),
            latitude=location.get("lat"),
            longitude=location.get("lng"),
            location_name=location.get("name", ""),
            payload=result,
        )
        # =====================================
        # REALTIME WEBSOCKET BROADCAST
        # =====================================

        IncidentBroadcaster.broadcast_incident(
            result
        )

        return result
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
  } from "react-native"
  import { useIncidents } from "../services/useIncidents"
  import { useTheme } from "../theme/ThemeContext"
  
  export default function ImpactTicketScreen() {
    const { incidents, status } = useIncidents()
    const { theme } = useTheme()
  
    const latest = incidents[0]
    const ticket = latest?.emergency_ticket
    const impact = latest?.impact_simulation
  
    return (
      <ScrollView
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={styles.container}
      >
        <Text style={[styles.heading, { color: theme.text }]}>
          Emergency Ticket
        </Text>
  
        <Text style={[styles.status, { color: theme.primary }]}>
          {status}
        </Text>
  
        {!latest ? (
          <Text style={[styles.empty, { color: theme.muted }]}>
            Waiting for incident ticket...
          </Text>
        ) : (
          <>
            <View
              style={[
                styles.card,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text style={[styles.label, { color: theme.primary }]}>
                Ticket ID
              </Text>
  
              <Text style={[styles.ticket, { color: theme.text }]}>
                {ticket?.ticket_id || "Pending"}
              </Text>
  
              <Text style={[styles.text, { color: theme.muted }]}>
                Status: {ticket?.status || "N/A"}
              </Text>
  
              <Text style={[styles.text, { color: theme.muted }]}>
                ETA: {ticket?.eta_minutes || 0} minutes
              </Text>
  
              <Text style={[styles.text, { color: theme.muted }]}>
                Team: {ticket?.assigned_team || "N/A"}
              </Text>
  
              <Text style={[styles.text, { color: theme.muted }]}>
                Location: {ticket?.location || "Unknown"}
              </Text>
            </View>
  
            <Text style={[styles.subheading, { color: theme.text }]}>
              Before vs After Impact
            </Text>
  
            <View
              style={[
                styles.impactBox,
                {
                  backgroundColor:
                    theme.mode === "dark"
                      ? "#451a1a"
                      : "#fee2e2",
                },
              ]}
            >
              <Text style={[styles.impactTitle, { color: theme.danger }]}>
                Before CIRO
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                Response Time: {impact?.before?.response_time_minutes || 0} mins
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                Congestion: {impact?.before?.congestion_level_percent || 0}%
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                Public Risk: {impact?.before?.public_risk_percent || 0}%
              </Text>
            </View>
  
            <View
              style={[
                styles.impactBox,
                {
                  backgroundColor:
                    theme.mode === "dark"
                      ? "#052e16"
                      : "#dcfce7",
                },
              ]}
            >
              <Text style={[styles.impactTitle, { color: theme.success }]}>
                After CIRO
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                Response Time: {impact?.after?.response_time_minutes || 0} mins
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                Congestion: {impact?.after?.congestion_level_percent || 0}%
              </Text>
  
              <Text style={[styles.text, { color: theme.text }]}>
                People Protected: {impact?.after?.population_protected || 0}
              </Text>
            </View>
  
            <View
              style={[
                styles.card,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text style={[styles.label, { color: theme.primary }]}>
                Simulation Summary
              </Text>
  
              <Text style={[styles.text, { color: theme.muted }]}>
                {impact?.summary || "Impact simulation pending."}
              </Text>
            </View>
          </>
        )}
      </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingBottom: 40,
    },
    heading: {
      fontSize: 28,
      fontWeight: "bold",
    },
    status: {
      marginTop: 6,
      marginBottom: 16,
    },
    card: {
      padding: 16,
      borderRadius: 18,
      borderWidth: 1,
      marginBottom: 16,
    },
    label: {
      fontWeight: "bold",
      marginBottom: 6,
    },
    ticket: {
      fontSize: 24,
      fontWeight: "900",
      marginBottom: 12,
    },
    text: {
      marginTop: 6,
      lineHeight: 21,
    },
    subheading: {
      fontSize: 22,
      fontWeight: "900",
      marginBottom: 12,
    },
    impactBox: {
      padding: 16,
      borderRadius: 18,
      marginBottom: 14,
    },
    impactTitle: {
      fontWeight: "900",
      fontSize: 18,
      marginBottom: 8,
    },
    empty: {
      marginTop: 20,
    },
  })
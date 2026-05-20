import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
  } from "react-native"
  import { LineChart } from "react-native-chart-kit"
  import { useIncidents } from "../services/useIncidents"
  import { useTheme } from "../theme/ThemeContext"
  
  export default function SeverityAnalysisScreen() {
    const { incidents, status } = useIncidents()
    const { theme } = useTheme()
  
    const latestIncidents = incidents.slice(0, 6).reverse()
    const labels = latestIncidents.map((_, index) => `I${index + 1}`)
  
    const severityData = latestIncidents.map(
      (incident: any) => incident.classification?.severity || 0
    )
  
    const averageSeverity =
      severityData.length > 0
        ? (
            severityData.reduce((a, b) => a + b, 0) / severityData.length
          ).toFixed(1)
        : "0"
  
    return (
      <ScrollView
        style={{ backgroundColor: theme.background }}
        contentContainerStyle={styles.container}
      >
        <Text style={[styles.heading, { color: theme.text }]}>
          Severity Analysis
        </Text>
  
        <Text style={[styles.status, { color: theme.primary }]}>
          {status}
        </Text>
  
        <View
          style={[
            styles.card,
            { backgroundColor: theme.card, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.label, { color: theme.muted }]}>
            Average Severity
          </Text>
  
          <Text style={[styles.big, { color: theme.text }]}>
            {averageSeverity}/10
          </Text>
        </View>
  
        {severityData.length > 0 ? (
          <LineChart
            data={{
              labels,
              datasets: [{ data: severityData }],
            }}
            width={Dimensions.get("window").width - 40}
            height={260}
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: theme.card,
              backgroundGradientFrom: theme.card,
              backgroundGradientTo: theme.card,
              decimalPlaces: 0,
              color: () => theme.primary,
              labelColor: () => theme.muted,
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: theme.danger,
              },
            }}
            bezier
            style={styles.chart}
          />
        ) : (
          <Text style={[styles.empty, { color: theme.muted }]}>
            No severity data yet. Submit or inject incidents.
          </Text>
        )}
  
        {incidents.slice(0, 10).map((incident: any, index: number) => (
          <View
            key={index}
            style={[
              styles.card,
              { backgroundColor: theme.card, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.type, { color: theme.text }]}>
              {incident.classification?.crisis_type || "Unknown"}
            </Text>
  
            <Text style={[styles.text, { color: theme.muted }]}>
              Severity: {incident.classification?.severity}/10
            </Text>
  
            <Text style={[styles.text, { color: theme.muted }]}>
              Confidence:{" "}
              {incident.classification?.adjusted_confidence ||
                incident.classification?.confidence}
            </Text>
  
            <Text style={[styles.text, { color: theme.muted }]}>
              Location: {incident.location?.name || "Unknown"}
            </Text>
          </View>
        ))}
      </ScrollView>
    )
  }
  
  const styles = StyleSheet.create({
    container: { padding: 20, paddingBottom: 40 },
    heading: { fontSize: 28, fontWeight: "bold" },
    status: { marginTop: 6, marginBottom: 16 },
    card: {
      padding: 16,
      borderRadius: 16,
      marginBottom: 14,
      borderWidth: 1,
    },
    label: {},
    big: { fontSize: 34, fontWeight: "bold", marginTop: 6 },
    chart: { borderRadius: 16, marginBottom: 20 },
    type: { fontSize: 20, fontWeight: "bold", textTransform: "capitalize" },
    text: { marginTop: 6 },
    empty: { marginTop: 20 },
  })
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native"
import { useIncidents } from "../services/useIncidents"
import { useTheme } from "../theme/ThemeContext"

export default function IncidentsAlertsScreen() {
  const { incidents, status, refresh } = useIncidents()
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Incidents Alerts</Text>
      <Text style={[styles.status, { color: theme.primary }]}>{status}</Text>

      <FlatList
        data={incidents}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refresh} />
        }
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: theme.card,
                borderColor: theme.border,
              },
            ]}
          >
            <Text style={[styles.type, { color: theme.text }]}>
              {item.classification?.crisis_type || "Unknown"}
            </Text>

            <Text style={[styles.text, { color: theme.muted }]}>
              Location: {item.location?.name || "Unknown"}
            </Text>

            <Text style={[styles.text, { color: theme.muted }]}>
              Severity: {item.classification?.severity}/10
            </Text>

            <Text style={[styles.text, { color: theme.muted }]}>
              Priority: {item.priority_score}
            </Text>

            <Text style={[styles.text, { color: theme.muted }]}>
              Confidence:{" "}
              {item.classification?.adjusted_confidence ||
                item.classification?.confidence}
            </Text>

            {item.requires_retraction && (
              <Text style={[styles.warning, { color: theme.danger }]}>
                Retraction Required
              </Text>
            )}
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.muted }]}>
            No alerts yet. Submit a report or run demo injection.
          </Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 28, fontWeight: "bold" },
  status: { marginBottom: 16 },
  card: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  text: { marginTop: 6 },
  warning: { marginTop: 8, fontWeight: "bold" },
  empty: { marginTop: 20 },
})
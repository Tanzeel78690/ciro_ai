import {
  View,
  Text,
  FlatList,
  StyleSheet,
  RefreshControl,
} from "react-native"
import { useIncidents } from "../services/useIncidents"
import { useTheme } from "../theme/ThemeContext"

export default function ResponderScreen() {
  const { incidents, status, refresh } = useIncidents()
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Responder View</Text>
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

            <Text style={[styles.section, { color: theme.primary }]}>Location</Text>
            <Text style={[styles.text, { color: theme.muted }]}>
              {item.location?.name || "Unknown"}
            </Text>

            <Text style={[styles.section, { color: theme.primary }]}>
              Allocated Resources
            </Text>

            {item.allocated_resources?.length ? (
              item.allocated_resources.map((res: any, i: number) => (
                <Text key={i} style={[styles.text, { color: theme.muted }]}>
                  {res.resource} — {res.units} units
                </Text>
              ))
            ) : (
              <Text style={[styles.text, { color: theme.muted }]}>
                No resources assigned
              </Text>
            )}

            <Text style={[styles.section, { color: theme.primary }]}>
              Recommended Action
            </Text>
            <Text style={[styles.text, { color: theme.muted }]}>
              {item.simulation?.action || "Await instructions"}
            </Text>

            <Text style={[styles.section, { color: theme.primary }]}>
              Responder Message
            </Text>
            <Text style={[styles.text, { color: theme.muted }]}>
              {item.stakeholder_messages?.rescue?.message ||
                item.alert ||
                "No message available"}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={[styles.empty, { color: theme.muted }]}>
            No assignments yet.
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
  type: { fontSize: 22, fontWeight: "bold", textTransform: "capitalize" },
  section: { fontWeight: "bold", marginTop: 14 },
  text: { marginTop: 5 },
  empty: { marginTop: 20 },
})
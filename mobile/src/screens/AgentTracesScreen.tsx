import {
    View,
    Text,
    FlatList,
    StyleSheet,
    RefreshControl,
  } from "react-native"
  import { useIncidents } from "../services/useIncidents"
  import { useTheme } from "../theme/ThemeContext"
  
  export default function AgentTracesScreen() {
    const { incidents, status, refresh } = useIncidents()
    const { theme } = useTheme()
  
    const latest = incidents[0]
    const traces = latest?.traces || []
  
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.heading, { color: theme.text }]}>Agent Traces</Text>
        <Text style={[styles.status, { color: theme.primary }]}>{status}</Text>
  
        {latest && (
          <Text style={[styles.context, { color: theme.muted }]}>
            Workflow for latest incident:{" "}
            {latest.classification?.crisis_type || "Unknown"}
          </Text>
        )}
  
        <FlatList
          data={traces.slice().reverse().slice(0, 50)}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refresh} />
          }
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={[
                styles.trace,
                {
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                },
              ]}
            >
              <Text style={[styles.agent, { color: theme.primary }]}>
                {item.agent}
              </Text>
  
              <Text style={[styles.message, { color: theme.text }]}>
                {item.message}
              </Text>
  
              <Text style={[styles.time, { color: theme.muted }]}>
                {item.timestamp}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={[styles.empty, { color: theme.muted }]}>
              Waiting for orchestration logs...
            </Text>
          }
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    heading: { fontSize: 28, fontWeight: "bold" },
    status: { marginTop: 6, marginBottom: 12 },
    context: { marginBottom: 14 },
    trace: {
      padding: 14,
      borderRadius: 14,
      marginBottom: 10,
      borderWidth: 1,
    },
    agent: { fontWeight: "bold" },
    message: { marginTop: 6 },
    time: { fontSize: 11, marginTop: 8 },
    empty: { marginTop: 20 },
  })
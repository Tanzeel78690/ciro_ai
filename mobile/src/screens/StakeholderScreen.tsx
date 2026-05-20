import {
    View,
    Text,
    FlatList,
    StyleSheet,
    RefreshControl,
  } from "react-native"
  import { useIncidents } from "../services/useIncidents"
  import { useTheme } from "../theme/ThemeContext"
  
  export default function StakeholderScreen() {
    const { incidents, status, refresh } = useIncidents()
    const { theme } = useTheme()
  
    const latest = incidents[0]
    const messages = latest?.stakeholder_messages || {}
  
    const stakeholderList = Object.entries(messages).map(([role, data]: any) => ({
      role,
      ...data,
    }))
  
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.heading, { color: theme.text }]}>
          Stakeholder Center
        </Text>
  
        <Text style={[styles.status, { color: theme.primary }]}>
          {status}
        </Text>
  
        {latest && (
          <Text style={[styles.context, { color: theme.muted }]}>
            Latest Incident: {latest.classification?.crisis_type || "Unknown"} at{" "}
            {latest.location?.name || "Unknown location"}
          </Text>
        )}
  
        <FlatList
          data={stakeholderList}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={refresh} />
          }
          keyExtractor={(item) => item.role}
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
              <Text style={[styles.role, { color: theme.text }]}>
                {item.role.replace("_", " ")}
              </Text>
  
              <Text style={[styles.priority, { color: theme.primary }]}>
                {item.priority?.toUpperCase()} PRIORITY
              </Text>
  
              <Text style={[styles.title, { color: theme.text }]}>
                {item.title}
              </Text>
  
              <Text style={[styles.message, { color: theme.muted }]}>
                {item.message}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={[styles.empty, { color: theme.muted }]}>
              No stakeholder messages yet.
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
    card: {
      padding: 16,
      borderRadius: 16,
      marginBottom: 14,
      borderWidth: 1,
    },
    role: { fontSize: 20, fontWeight: "bold", textTransform: "capitalize" },
    priority: { marginTop: 4, fontSize: 12 },
    title: { marginTop: 10, fontWeight: "bold" },
    message: { marginTop: 8, lineHeight: 20 },
    empty: { marginTop: 20 },
  })
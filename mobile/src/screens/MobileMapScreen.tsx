import { View, Text, StyleSheet } from "react-native"
import MapView, { Marker, Circle } from "react-native-maps"
import { useIncidents } from "../services/useIncidents"
import { useTheme } from "../theme/ThemeContext"

export default function MobileMapScreen() {
  const { incidents, status } = useIncidents()
  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>Crisis Map</Text>
      <Text style={[styles.status, { color: theme.primary }]}>{status}</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 24.8607,
          longitude: 67.0011,
          latitudeDelta: 0.4,
          longitudeDelta: 0.4,
        }}
      >
        {incidents.map((incident, index) => {
          const location = incident.location

          if (!location?.lat || !location?.lng) return null

          const severity = incident.classification?.severity || 1

          return (
            <View key={index}>
              <Marker
                coordinate={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
                title={incident.classification?.crisis_type || "Incident"}
                description={`Severity ${severity}/10`}
              />

              <Circle
                center={{
                  latitude: location.lat,
                  longitude: location.lng,
                }}
                radius={severity * 500}
                strokeColor="rgba(239,68,68,0.8)"
                fillColor="rgba(239,68,68,0.25)"
              />
            </View>
          )
        })}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 14 },
  heading: { fontSize: 26, fontWeight: "bold" },
  status: { marginBottom: 10 },
  map: { flex: 1, borderRadius: 18 },
})
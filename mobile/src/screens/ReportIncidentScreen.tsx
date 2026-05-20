import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native"
import * as Location from "expo-location"
import { api } from "../services/api"
import { useTheme } from "../theme/ThemeContext"

export default function ReportIncidentScreen() {
  const { theme } = useTheme()

  const [description, setDescription] = useState("")
  const [locationName, setLocationName] = useState("")
  const [loading, setLoading] = useState(false)

  const submitReport = async () => {
    if (!description.trim()) {
      Alert.alert("Missing description", "Please describe the incident.")
      return
    }

    setLoading(true)

    try {
      const permission = await Location.requestForegroundPermissionsAsync()

      if (permission.status !== "granted") {
        Alert.alert("Location required", "Please allow location access.")
        setLoading(false)
        return
      }

      const currentLocation = await Location.getCurrentPositionAsync({})

      const payload = {
        description,
        location_name: locationName || "Citizen mobile report",
        urgency_score: 0.85,
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      }

      await api.post("/citizen-report/", payload)

      Alert.alert(
        "Report submitted",
        "CIRO processed your report and notified the command center."
      )

      setDescription("")
      setLocationName("")
    } catch (error) {
      Alert.alert(
        "Connection Error",
        "Could not submit report. Check backend IP, WiFi, and server."
      )
    }

    setLoading(false)
  }

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.heading, { color: theme.text }]}>Report a Crisis</Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.card,
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
        placeholder="Location e.g. Saddar, Karachi"
        placeholderTextColor={theme.muted}
        value={locationName}
        onChangeText={setLocationName}
      />

      <TextInput
        style={[
          styles.input,
          styles.textarea,
          {
            backgroundColor: theme.card,
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
        placeholder="Describe what is happening..."
        placeholderTextColor={theme.muted}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.danger }]}
        onPress={submitReport}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Submit Incident Report</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20 },
  heading: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  input: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
  },
  textarea: { height: 150, textAlignVertical: "top" },
  button: { padding: 16, borderRadius: 14 },
  buttonText: { color: "white", fontWeight: "bold", textAlign: "center" },
})
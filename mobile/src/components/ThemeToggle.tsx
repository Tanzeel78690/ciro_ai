import { Text, TouchableOpacity, StyleSheet } from "react-native"
import { useTheme } from "../theme/ThemeContext"

export default function ThemeToggle() {
  const { mode, toggleTheme, theme } = useTheme()

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.button,
        {
          backgroundColor: theme.card,
          borderColor: theme.border,
        },
      ]}
    >
      <Text style={{ color: theme.text, fontWeight: "700" }}>
        {mode === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
})
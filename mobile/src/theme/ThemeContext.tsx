import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useContext, useEffect, useState } from "react"

const lightTheme = {
  mode: "light",
  background: "#f1f5f9",
  card: "#ffffff",
  text: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  primary: "#2563eb",
  danger: "#dc2626",
  success: "#059669",
}

const darkTheme = {
  mode: "dark",
  background: "#09090b",
  card: "#18181b",
  text: "#f8fafc",
  muted: "#a1a1aa",
  border: "#27272a",
  primary: "#22d3ee",
  danger: "#ef4444",
  success: "#22c55e",
}

const ThemeContext = createContext<any>(null)

export function ThemeProvider({ children }: any) {
  const [mode, setMode] = useState("dark")

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await AsyncStorage.getItem("ciro-mobile-theme")
      if (saved === "light" || saved === "dark") {
        setMode(saved)
      }
    }

    loadTheme()
  }, [])

  const toggleTheme = async () => {
    const next = mode === "dark" ? "light" : "dark"
    setMode(next)
    await AsyncStorage.setItem("ciro-mobile-theme", next)
  }

  const theme = mode === "dark" ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
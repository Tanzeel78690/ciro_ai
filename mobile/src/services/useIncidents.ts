import { useEffect, useState } from "react"
import { api, WS_BASE_URL } from "./api"

export function useIncidents() {
  const [incidents, setIncidents] = useState<any[]>([])
  const [status, setStatus] = useState("Loading...")

  const fetchIncidents = async () => {
    try {
      const res = await api.get("/recent-incidents/")
      setIncidents(res.data)
      setStatus("Connected")
    } catch {
      setStatus("Could not fetch incidents")
    }
  }

  useEffect(() => {
    fetchIncidents()

    const socket = new WebSocket(WS_BASE_URL)

    socket.onopen = () => setStatus("Live connected")

    socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data)

      if (parsed.event === "incident") {
        setIncidents((prev) => [
          parsed.data,
          ...prev,
        ])
      }
    }

    socket.onerror = () => setStatus("Realtime error")
    socket.onclose = () => setStatus("Realtime disconnected")

    return () => socket.close()
  }, [])

  return {
    incidents,
    status,
    refresh: fetchIncidents,
  }
}
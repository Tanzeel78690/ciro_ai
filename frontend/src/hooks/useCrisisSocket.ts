"use client"

import { useEffect, useState } from "react"

export function useCrisisSocket() {

  const [traces, setTraces] = useState<any[]>([])
  const [incidents, setIncidents] = useState<any[]>([])

  useEffect(() => {

    const socket = new WebSocket(
      "ws://127.0.0.1:8000/ws/crisis/"
    )

    socket.onopen = () => {
      console.log("Connected to websocket")
    }

    socket.onmessage = (event) => {

      const parsed = JSON.parse(event.data)

      if (parsed.event === "trace") {

        setTraces(prev => [
          parsed.data,
          ...prev
        ])

      } else if (
        parsed.event === "incident"
      ) {

        setIncidents(prev => [
          parsed.data,
          ...prev
        ])
      }
    }

    socket.onerror = (error) => {
      console.log(error)
    }

    return () => socket.close()

  }, [])

  return {
    traces,
    incidents
  }
}
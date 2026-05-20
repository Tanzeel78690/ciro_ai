"use client"

import { AlertTriangle } from "lucide-react"

export default function IncidentPanel({
  incidents
}: any) {

  return (

    <div className="bg-zinc-900 rounded-2xl p-4">

      <h2 className="text-2xl font-bold mb-4">
        Incidents
      </h2>

      <div className="space-y-4">

        {incidents.map(
          (incident: any, index: number) => (

          <div
            key={index}
            className="bg-zinc-800 rounded-xl p-4"
          >

            <div className="flex items-center gap-3">

              <AlertTriangle className="text-red-500" />

              <div>

                <h3 className="font-bold text-lg capitalize">
                  {
                    incident.classification
                    ?.crisis_type
                  }
                </h3>

                <p className="text-sm text-gray-400">
                  Severity:
                  {
                    incident.classification
                    ?.severity
                  } / 10
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">

              <div className="bg-zinc-900 p-3 rounded-xl">
                <p className="text-sm text-gray-400">
                  Confidence
                </p>

                <h4 className="text-xl font-bold">
                  {
                    incident.classification
                    ?.confidence
                  }
                </h4>
              </div>

              <div className="bg-zinc-900 p-3 rounded-xl">
                <p className="text-sm text-gray-400">
                  Population
                </p>

                <h4 className="text-xl font-bold">
                  {
                    incident.classification
                    ?.affected_population
                  }
                </h4>
              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
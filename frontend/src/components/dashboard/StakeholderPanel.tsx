"use client"

import {
  Building2,
  Siren,
  Hospital,
  Radio,
  Bus,
  Wrench,
  Shield,
  Users
} from "lucide-react"

const icons: any = {
  public: Users,
  police: Shield,
  rescue: Siren,
  hospital: Hospital,
  utility: Wrench,
  transport: Bus,
  media: Radio,
  command_center: Building2,
}

export default function StakeholderPanel({ incidents }: any) {
  const latest = incidents?.[0]
  const messages = latest?.stakeholder_messages || {}

  return (
    <div className="bg-zinc-900 rounded-2xl p-4">
      <h2 className="text-2xl font-bold mb-4">
        Stakeholder Command Center
      </h2>

      {!latest && (
        <p className="text-gray-400">
          Waiting for stakeholder instructions...
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(messages).map(([role, data]: any) => {
          const Icon = icons[role] || Building2

          return (
            <div key={role} className="bg-zinc-800 rounded-xl p-4 border border-zinc-700">
              <div className="flex items-center gap-3 mb-2">
                <Icon className="text-cyan-400" size={22} />
                <div>
                  <h3 className="font-bold capitalize">
                    {role.replace("_", " ")}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {data.priority?.toUpperCase()} PRIORITY
                  </p>
                </div>
              </div>

              <h4 className="font-semibold text-sm mb-2">
                {data.title}
              </h4>

              <p className="text-sm text-gray-300 leading-relaxed">
                {data.message}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
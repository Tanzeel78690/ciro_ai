"use client"

export default function ImpactTicketPanel({
  incidents
}: any) {
  const latest = incidents?.[0]

  if (!latest) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
        <h2 className="text-xl font-black text-slate-950 dark:text-white">
          Emergency Ticket & Impact
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Waiting for incident response simulation...
        </p>
      </div>
    )
  }

  const ticket = latest.emergency_ticket
  const impact = latest.impact_simulation

  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950">
        <p className="text-sm font-bold uppercase text-blue-700 dark:text-blue-300">
          Emergency Ticket
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">
          {ticket?.ticket_id || "Pending"}
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Info label="Status" value={ticket?.status || "N/A"} />
          <Info label="ETA" value={`${ticket?.eta_minutes || 0} mins`} />
          <Info label="Team" value={ticket?.assigned_team || "N/A"} />
          <Info label="Location" value={ticket?.location || "Unknown"} />
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <p className="text-sm font-bold uppercase text-slate-500 dark:text-slate-400">
          Before vs After Impact
        </p>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <ImpactBox
            title="Before CIRO"
            tone="before"
            items={[
              `Response Time: ${impact?.before?.response_time_minutes || 0} mins`,
              `Congestion: ${impact?.before?.congestion_level_percent || 0}%`,
              `Public Risk: ${impact?.before?.public_risk_percent || 0}%`,
              `Affected Population: ${impact?.before?.affected_population || 0}`,
            ]}
          />

          <ImpactBox
            title="After CIRO"
            tone="after"
            items={[
              `Response Time: ${impact?.after?.response_time_minutes || 0} mins`,
              `Congestion: ${impact?.after?.congestion_level_percent || 0}%`,
              `Public Risk Reduced`,
              `People Protected: ${impact?.after?.population_protected || 0}`,
            ]}
          />
        </div>

        <div className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
          {impact?.summary || "Impact simulation pending."}
        </div>
      </div>
    </div>
  )
}

function Info({
  label,
  value
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl bg-white p-3 dark:bg-slate-900">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {label}
      </p>
      <p className="mt-1 font-bold text-slate-950 dark:text-white">
        {value}
      </p>
    </div>
  )
}

function ImpactBox({
  title,
  items,
  tone
}: {
  title: string
  items: string[]
  tone: "before" | "after"
}) {
  const cls =
    tone === "before"
      ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-300"
      : "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300"

  return (
    <div className={`rounded-2xl border p-4 ${cls}`}>
      <h4 className="font-black">{title}</h4>

      <ul className="mt-3 space-y-2 text-sm font-semibold">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
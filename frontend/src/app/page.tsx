"use client"

import { useCrisisSocket } from "@/hooks/useCrisisSocket"
import CrisisMap from "@/components/maps/CrisisMap"
import ThemeToggle from "@/components/dashboard/ThemeToggle"
import ImpactTicketPanel from "@/components/dashboard/ImpactTicketPanel"

import TracePanel from "../components/traces/TracePanel"
import IncidentPanel from "../components/incidents/IncidentPanel"
import SeverityChart from "../components/charts/SeverityChart"
import ResourcePanel from "@/components/dashboard/ResourcePanel"
import StakeholderPanel from "@/components/dashboard/StakeholderPanel"

export default function HomePage() {
  const { traces, incidents } = useCrisisSocket()

  const activeIncidents = incidents.length

  const highSeverity = incidents.filter(
    (incident: any) => incident.classification?.severity >= 7
  ).length

  const avgSeverity =
    incidents.length > 0
      ? (
          incidents.reduce(
            (sum: number, item: any) =>
              sum + (item.classification?.severity || 0),
            0
          ) / incidents.length
        ).toFixed(1)
      : "0"

  const latestIncident = incidents[0]

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <section className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition-colors sm:p-7 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                Live AI Emergency Operations Center
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
                CIRO Command Center
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
                Crisis Intelligence & Response Orchestrator — real-time signal
                fusion, crisis detection, resource allocation, stakeholder
                messaging, and Antigravity-powered orchestration traces.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ThemeToggle />

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 dark:border-emerald-900 dark:bg-emerald-950">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">
                  System Status
                </p>

                <p className="mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-300">
                  Operational
                </p>

                <p className="text-sm text-emerald-700 dark:text-emerald-300">
                  WebSocket live feed active
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            title="Active Incidents"
            value={activeIncidents}
            note="Live + recent crisis signals"
          />

          <KpiCard
            title="High Severity"
            value={highSeverity}
            note="Severity level 7 or above"
          />

          <KpiCard
            title="Avg Severity"
            value={`${avgSeverity}/10`}
            note="Current incident average"
          />

          <KpiCard
            title="Agent Traces"
            value={traces.length}
            note="Antigravity-style decisions"
          />
        </div>

        {latestIncident && (
          <div className="mb-6 rounded-3xl border border-orange-200 bg-orange-50 p-5 shadow-sm dark:border-orange-900 dark:bg-orange-950">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300">
                  Latest Detected Crisis
                </p>

                <h2 className="mt-1 text-2xl font-black capitalize text-slate-950 dark:text-white">
                  {latestIncident.classification?.crisis_type || "Unknown"}
                </h2>

                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  {latestIncident.location?.name || "Unknown location"} ·
                  Severity {latestIncident.classification?.severity || 0}/10 ·
                  Priority {latestIncident.priority_score || "N/A"}
                </p>
              </div>

              {latestIncident.requires_retraction ? (
                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700 dark:bg-red-950 dark:text-red-300">
                  Retraction Required
                </span>
              ) : (
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Verified Workflow Active
                </span>
              )}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 2xl:grid-cols-12">
          <div className="space-y-6 2xl:col-span-8">
            <DashboardCard title="Emergency Ticket & Response Impact">
              <ImpactTicketPanel incidents={incidents} />
            </DashboardCard>

            <DashboardCard title="Live Crisis Map">
              <CrisisMap incidents={incidents} />
            </DashboardCard>

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
              <DashboardCard title="Resource Allocation">
                <ResourcePanel incidents={incidents} />
              </DashboardCard>

              <DashboardCard title="Severity Analytics">
                <SeverityChart incidents={incidents} />
              </DashboardCard>
            </div>

            <DashboardCard title="Incident Feed">
              <IncidentPanel incidents={incidents} />
            </DashboardCard>

            <DashboardCard title="Stakeholder Command Center">
              <StakeholderPanel incidents={incidents} />
            </DashboardCard>
          </div>

          <div className="2xl:col-span-4">
            <div className="sticky top-6">
              <DashboardCard title="Agent Trace Log">
                <TracePanel traces={traces} />
              </DashboardCard>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function KpiCard({
  title,
  value,
  note,
}: {
  title: string
  value: string | number
  note: string
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-black text-slate-950 dark:text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
        {note}
      </p>
    </div>
  )
}

function DashboardCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-colors sm:p-5 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-black text-slate-950 sm:text-xl dark:text-white">
          {title}
        </h2>

        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </div>

      <div className="dashboard-panel">{children}</div>
    </section>
  )
}
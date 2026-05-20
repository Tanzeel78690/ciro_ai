// "use client"

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts"

// export default function SeverityChart({
//   incidents
// }: any) {

//   const chartData = incidents.map(
//     (incident: any, index: number) => ({
//       name: `Incident ${index + 1}`,
//       severity:
//         incident.classification?.severity || 0
//     })
//   )

//   return (

//     <div className="bg-zinc-900 rounded-2xl p-4 h-[400px]">

//       <h2 className="text-2xl font-bold mb-4">
//         Severity Analysis
//       </h2>

//       <ResponsiveContainer width="100%" height="100%">

//         <LineChart data={chartData}>

//           <XAxis dataKey="name" />

//           <YAxis />

//           <Tooltip />

//           <Line
//             type="monotone"
//             dataKey="severity"
//           />

//         </LineChart>

//       </ResponsiveContainer>

//     </div>
//   )
// }


"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

export default function SeverityChart({
  incidents
}: any) {

  const chartData = incidents.map(
    (incident: any, index: number) => ({
      name: `Incident ${index + 1}`,
      severity:
        incident.classification?.severity || 0
    })
  )

  return (

    <div className="bg-zinc-900 rounded-2xl p-4">

      <h2 className="text-2xl font-bold mb-4">
        Severity Analysis
      </h2>

      {/* Fixed Height Container */}
      <div className="h-[300px] w-full">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 20
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="severity"
              stroke="#ef4444"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}
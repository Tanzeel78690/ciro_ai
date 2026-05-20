"use client"

import { motion } from "framer-motion"

export default function TracePanel({
  traces
}: any) {

  return (

    <div className="bg-zinc-900 rounded-2xl p-4 h-[800px] overflow-y-auto">

      <h2 className="text-2xl font-bold mb-4">
        AI Agent Traces
      </h2>

      <div className="space-y-3">

        {traces.map((trace: any, index: number) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-800 p-3 rounded-xl"
          >

            <div className="flex justify-between">

              <span className="font-bold text-cyan-400">
                {trace.agent}
              </span>

              <span className="text-xs text-gray-400">
                {trace.timestamp}
              </span>

            </div>

            <p className="text-sm mt-2">
              {trace.message}
            </p>

          </motion.div>

        ))}

      </div>

    </div>
  )
}
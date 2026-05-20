"use client"

export default function ResourcePanel({
  incidents
}: any) {

  return (

    <div className="bg-zinc-900 rounded-2xl p-4">

      <h2 className="text-2xl font-bold mb-4">
        Resource Allocation
      </h2>

      <div className="space-y-4">

        {incidents.map(
          (incident: any, index: number) => (

          <div
            key={index}
            className="bg-zinc-800 p-4 rounded-xl"
          >

            <div className="flex justify-between">

              <h3 className="font-bold capitalize">
                {
                  incident.classification
                  ?.crisis_type
                }
              </h3>

              <span className="text-red-400">
                Priority:
                {
                  incident.priority_score
                }
              </span>

            </div>

            <div className="mt-4 space-y-2">

              {
                incident.allocated_resources
                ?.map(
                  (
                    resource: any,
                    idx: number
                  ) => (

                  <div
                    key={idx}
                    className="
                      flex
                      justify-between
                      text-sm
                    "
                  >

                    <span>
                      {resource.resource}
                    </span>

                    <span>
                      {resource.units} units
                    </span>

                  </div>

                ))
              }

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}
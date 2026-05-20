

// "use client"

// import "@/lib/leaflet"

// import { Fragment } from "react"

// import {
//   MapContainer,
//   TileLayer,
//   Circle,
//   Popup,
//   Marker
// } from "react-leaflet"

// import "leaflet/dist/leaflet.css"

// export default function MapComponent({
//   incidents
// }: any) {

//   return (

//     <div className="h-[600px] w-full rounded-2xl overflow-hidden relative z-0">

//       <MapContainer
//         center={[33.6844, 73.0479]}
//         zoom={6}
//         scrollWheelZoom={true}
//         className="h-full w-full z-0"
//       >

//         <TileLayer
//           attribution="&copy; OpenStreetMap"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {incidents.map(
//           (incident: any, index: number) => {

//             const location =
//               incident.location

//             if (!location) return null

//             const severity =
//               incident.classification
//                 ?.severity || 1

//             return (

//               <Fragment key={index}>

//                 {/* ========================= */}
//                 {/* CRISIS HEAT ZONE */}
//                 {/* ========================= */}

//                 <Circle
//                   center={[
//                     location.lat,
//                     location.lng
//                   ]}
//                   radius={severity * 500}
//                   pathOptions={{

//                     fillColor:
//                       severity >= 8
//                         ? "red"
//                         : severity >= 5
//                         ? "orange"
//                         : "yellow",

//                     fillOpacity: 0.4,

//                     color: "transparent"
//                   }}
//                 />

//                 {/* ========================= */}
//                 {/* MAIN INCIDENT MARKER */}
//                 {/* ========================= */}

//                 <Marker
//                   position={[
//                     location.lat,
//                     location.lng
//                   ]}
//                 >

//                   <Popup>

//                     <div className="space-y-2 min-w-[220px]">

//                       <h3 className="font-bold text-lg capitalize">

//                         {
//                           incident.classification
//                             ?.crisis_type
//                         }

//                       </h3>

//                       <p>

//                         <strong>
//                           Location:
//                         </strong>{" "}

//                         {location.name}

//                       </p>

//                       <p>

//                         <strong>
//                           Severity:
//                         </strong>{" "}

//                         {
//                           incident.classification
//                             ?.severity
//                         }

//                       </p>

//                       <p>

//                         <strong>
//                           Confidence:
//                         </strong>{" "}

//                         {
//                           incident.classification
//                             ?.confidence
//                         }

//                       </p>

//                       <p>

//                         <strong>
//                           Population:
//                         </strong>{" "}

//                         {
//                           incident.classification
//                             ?.affected_population
//                         }

//                       </p>

//                       <p>

//                         <strong>
//                           Spread Risk:
//                         </strong>{" "}

//                         {
//                           incident.prediction
//                             ?.spread_risk
//                         }

//                       </p>

//                     </div>

//                   </Popup>

//                 </Marker>

//                 {/* ========================= */}
//                 {/* EMERGENCY RESPONSE UNIT */}
//                 {/* ========================= */}

//                 <Marker
//                   position={[
//                     location.lat + 0.05,
//                     location.lng + 0.05
//                   ]}
//                 >

//                   <Popup>

//                     <div className="space-y-1">

//                       <h3 className="font-bold">

//                         Emergency Response

//                       </h3>

//                       <p>
//                         Rescue Teams Deployed
//                       </p>

//                       <p>

//                         Ambulances:

//                         {
//                           incident.allocation
//                             ?.ambulances
//                         }

//                       </p>

//                       <p>

//                         Police Units:

//                         {
//                           incident.allocation
//                             ?.police_units
//                         }

//                       </p>

//                     </div>

//                   </Popup>

//                 </Marker>

//                 {/* ========================= */}
//                 {/* EVACUATION / IMPACT ZONE */}
//                 {/* ========================= */}

//                 <Circle
//                   center={[
//                     location.lat,
//                     location.lng
//                   ]}
//                   radius={severity * 900}
//                   pathOptions={{
//                     color: "blue",
//                     fillOpacity: 0.05
//                   }}
//                 />

//               </Fragment>
//             )
//           }
//         )}

//       </MapContainer>

//     </div>
//   )
// }


"use client"

import "@/lib/leaflet"
import { Fragment } from "react"

import {
  MapContainer,
  TileLayer,
  Circle,
  Popup,
  Marker
} from "react-leaflet"

import "leaflet/dist/leaflet.css"

export default function MapComponent({ incidents }: any) {
  return (
    <div className="h-[600px] w-full rounded-2xl overflow-hidden relative z-0">
      <MapContainer
        center={[24.8607, 67.0011]}
        zoom={6}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {incidents.map((incident: any, index: number) => {
          const firstSignal = incident.fusion?.signals?.[0]

          const location = {
            lat:
              incident.location?.lat ||
              incident.classification?.latitude ||
              firstSignal?.latitude ||
              24.8607,

            lng:
              incident.location?.lng ||
              incident.classification?.longitude ||
              firstSignal?.longitude ||
              67.0011,

            name:
              incident.location?.name ||
              firstSignal?.location_name ||
              firstSignal?.source_location ||
              "Live Incident Location"
          }

          const severity =
            incident.classification?.severity || 1

          return (
            <Fragment key={index}>
              <Circle
                center={[location.lat, location.lng]}
                radius={severity * 500}
                pathOptions={{
                  fillColor:
                    severity >= 8
                      ? "red"
                      : severity >= 5
                      ? "orange"
                      : "yellow",
                  fillOpacity: 0.4,
                  color: "transparent"
                }}
              />

              <Marker position={[location.lat, location.lng]}>
                <Popup>
                  <div className="space-y-2 min-w-[220px]">
                    <h3 className="font-bold text-lg capitalize">
                      {incident.classification?.crisis_type}
                    </h3>

                    <p>
                      <strong>Location:</strong> {location.name}
                    </p>

                    <p>
                      <strong>Severity:</strong>{" "}
                      {incident.classification?.severity}
                    </p>

                    <p>
                      <strong>Confidence:</strong>{" "}
                      {incident.classification?.adjusted_confidence ||
                        incident.classification?.confidence}
                    </p>

                    <p>
                      <strong>Population:</strong>{" "}
                      {incident.classification?.affected_population}
                    </p>

                    <p>
                      <strong>Spread Risk:</strong>{" "}
                      {incident.prediction?.spread_risk}
                    </p>

                    {incident.requires_retraction && (
                      <p className="font-bold text-red-600">
                        Alert retraction required
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>

              <Marker
                position={[
                  location.lat + 0.05,
                  location.lng + 0.05
                ]}
              >
                <Popup>
                  <div className="space-y-1">
                    <h3 className="font-bold">
                      Emergency Response
                    </h3>

                    <p>Rescue Teams Deployed</p>

                    <p>
                      Ambulances:{" "}
                      {incident.allocation?.ambulances || 0}
                    </p>

                    <p>
                      Police Units:{" "}
                      {incident.allocation?.police_units || 0}
                    </p>
                  </div>
                </Popup>
              </Marker>

              <Circle
                center={[location.lat, location.lng]}
                radius={severity * 900}
                pathOptions={{
                  color: "blue",
                  fillOpacity: 0.05
                }}
              />
            </Fragment>
          )
        })}
      </MapContainer>
    </div>
  )
}
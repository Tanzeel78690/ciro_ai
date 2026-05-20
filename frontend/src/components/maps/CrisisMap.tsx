"use client"

import dynamic from "next/dynamic"

const MapComponent = dynamic(
  () => import("./MapComponent"),
  {
    ssr: false
  }
)

export default function CrisisMap({
  incidents
}: any) {

  return (
    <MapComponent incidents={incidents} />
  )
}
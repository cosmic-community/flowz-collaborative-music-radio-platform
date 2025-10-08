import type { Station } from '@/types'
import StationCard from '@/components/StationCard'

interface StationGridProps {
  stations: Station[];
}

export default function StationGrid({ stations }: StationGridProps) {
  if (!stations || stations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No stations available</p>
      </div>
    )
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stations.map((station) => (
        <StationCard key={station.id} station={station} />
      ))}
    </div>
  )
}
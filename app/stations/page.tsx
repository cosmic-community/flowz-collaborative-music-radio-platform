import { getStations } from '@/lib/cosmic'
import Header from '@/components/Header'
import StationGrid from '@/components/StationGrid'
import BottomNav from '@/components/BottomNav'

export default async function StationsPage() {
  const stations = await getStations()
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      <Header title="Radio Stations" />
      
      <section className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search stations..."
              className="w-full glass-effect rounded-full px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          {stations.length > 0 ? (
            <StationGrid stations={stations} />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No stations available yet</p>
              <button className="button-primary mt-4">
                Create First Station
              </button>
            </div>
          )}
        </div>
      </section>
      
      <BottomNav />
    </div>
  )
}
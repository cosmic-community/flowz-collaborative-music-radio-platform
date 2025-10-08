import { getStations } from '@/lib/cosmic'
import type { Station } from '@/types'
import PopularStationsList from '@/components/PopularStationsList'
import BottomNav from '@/components/BottomNav'
import { Search } from 'lucide-react'

// Force dynamic rendering to prevent build-time errors
export const dynamic = 'force-dynamic'

export default async function StationsPage() {
  let stations: Station[] = []
  
  try {
    stations = await getStations()
  } catch (error) {
    console.error('Error fetching stations:', error)
  }
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header */}
      <header className="px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold mb-6">Radio Stations</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search here ..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </header>
      
      {/* Tabs */}
      <div className="px-4 mb-6">
        <div className="flex gap-4 border-b border-white/10">
          <button className="pb-3 px-1 text-sm font-medium text-primary border-b-2 border-primary">
            Radio Genre
          </button>
          <button className="pb-3 px-1 text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Popular radios
          </button>
        </div>
      </div>
      
      {/* Popular Stations List */}
      <section className="px-4">
        {stations.length > 0 ? (
          <PopularStationsList stations={stations} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No stations available yet</p>
          </div>
        )}
      </section>
      
      <BottomNav />
    </div>
  )
}
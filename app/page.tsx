import { getFeaturedStations } from '@/lib/cosmic'
import type { Station } from '@/types'
import StationGrid from '@/components/StationGrid'
import BottomNav from '@/components/BottomNav'
import { Radio } from 'lucide-react'

// Force dynamic rendering to prevent build-time errors
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let featuredStations: Station[] = []
  
  try {
    featuredStations = await getFeaturedStations(6)
  } catch (error) {
    console.error('Error fetching featured stations:', error)
  }
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header */}
      <header className="px-4 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <Radio className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold">FlowZ</h1>
        </div>
        
        <div>
          <p className="text-gray-400 text-sm mb-2">Good evening</p>
          <h2 className="text-3xl font-bold">Radio Stations</h2>
        </div>
      </header>
      
      {/* Featured Stations */}
      <section className="px-4">
        <StationGrid stations={featuredStations} />
      </section>
      
      <BottomNav />
    </div>
  )
}
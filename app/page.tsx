import { getFeaturedStations } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import StationGrid from '@/components/StationGrid'
import BottomNav from '@/components/BottomNav'

// Force dynamic rendering to prevent build-time errors
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let featuredStations = []
  
  try {
    featuredStations = await getFeaturedStations(6)
  } catch (error) {
    console.error('Error fetching featured stations:', error)
    // Continue with empty array - component will show "No stations available"
  }
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      <Hero />
      
      <section className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Stations</h2>
            <button className="text-primary text-sm font-medium hover:underline">
              See All
            </button>
          </div>
          
          <StationGrid stations={featuredStations} />
        </div>
      </section>
      
      <BottomNav />
    </div>
  )
}
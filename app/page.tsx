import { getFeaturedStations, getStationsByGenre } from '@/lib/cosmic'
import type { Station } from '@/types'
import StationGrid from '@/components/StationGrid'
import GenreTabs from '@/components/GenreTabs'
import RandomStationBanner from '@/components/RandomStationBanner'
import BottomNav from '@/components/BottomNav'
import { Radio } from 'lucide-react'

// Force dynamic rendering to prevent build-time errors
export const dynamic = 'force-dynamic'

export default async function HomePage() {
  let featuredStations: Station[] = []
  let classicalStations: Station[] = []
  let popStations: Station[] = []
  let hipHopStations: Station[] = []
  let rockStations: Station[] = []
  
  try {
    // Fetch stations in parallel
    const [featured, classical, pop, hipHop, rock] = await Promise.all([
      getFeaturedStations(6),
      getStationsByGenre('Classical'),
      getStationsByGenre('Pop'),
      getStationsByGenre('Hip-Hop'),
      getStationsByGenre('Rock')
    ])
    
    featuredStations = featured
    classicalStations = classical
    popStations = pop
    hipHopStations = hipHop
    rockStations = rock
  } catch (error) {
    console.error('Error fetching stations:', error)
  }
  
  // Combine all genre stations for the grid
  const genreStations = {
    'Classical': classicalStations,
    'Pop': popStations,
    'Hip-Hop': hipHopStations,
    'Rock': rockStations
  }
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header */}
      <header className="px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold mb-2">Radio Stations</h1>
      </header>
      
      {/* Genre Tabs and Station Grid */}
      <section className="px-4">
        <GenreTabs genreStations={genreStations} />
      </section>
      
      {/* Random Station Banner */}
      <section className="px-4 mt-6">
        <RandomStationBanner />
      </section>
      
      <BottomNav />
    </div>
  )
}
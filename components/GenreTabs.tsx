'use client'

import { useState } from 'react'
import type { Station } from '@/types'
import StationCard from '@/components/StationCard'

interface GenreTabsProps {
  genreStations: {
    [key: string]: Station[];
  };
}

export default function GenreTabs({ genreStations }: GenreTabsProps) {
  const genres = Object.keys(genreStations)
  const [activeGenre, setActiveGenre] = useState(genres[0] || 'Classical')
  
  const activeStations = genreStations[activeGenre] || []
  
  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 hide-scrollbar mb-6">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeGenre === genre
                ? 'bg-primary text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
      
      {/* Station Grid */}
      <div className="grid grid-cols-2 gap-4">
        {activeStations.length > 0 ? (
          activeStations.map((station) => (
            <StationCard key={station.id} station={station} />
          ))
        ) : (
          <div className="col-span-2 text-center py-8">
            <p className="text-gray-400">No stations in this genre yet</p>
          </div>
        )}
      </div>
    </div>
  )
}
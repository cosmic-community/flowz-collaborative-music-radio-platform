import Link from 'next/link'
import type { Station } from '@/types'
import { Radio } from 'lucide-react'

interface StationCardProps {
  station: Station;
}

export default function StationCard({ station }: StationCardProps) {
  const coverImage = station.metadata?.cover_image;
  const themeColor = station.metadata?.theme_color || '#FF4D8B';
  const listenerCount = station.metadata?.listener_count || 0;
  
  return (
    <Link href={`/stations/${station.slug}`}>
      <div className="station-card group cursor-pointer">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          {coverImage ? (
            <img
              src={`${coverImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
              alt={station.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <Radio className="w-16 h-16 text-white opacity-30" />
            </div>
          )}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
          
          {/* Title and listener count overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-sm font-bold text-white text-shadow line-clamp-2 mb-1">
              {station.title}
            </h3>
            <p className="text-xs text-gray-300 text-shadow">
              {listenerCount} {listenerCount === 1 ? 'radio' : 'radios'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
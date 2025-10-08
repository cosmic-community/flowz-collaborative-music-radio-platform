import Link from 'next/link'
import type { Station } from '@/types'
import { Users, Radio } from 'lucide-react'

interface StationCardProps {
  station: Station;
}

export default function StationCard({ station }: StationCardProps) {
  const coverImage = station.metadata?.cover_image;
  const listenerCount = station.metadata?.listener_count || 0;
  const themeColor = station.metadata?.theme_color || '#FF4D8B';
  const isActive = station.metadata?.is_active || false;
  
  return (
    <Link href={`/stations/${station.slug}`}>
      <div className="station-card group cursor-pointer">
        <div className="relative aspect-square overflow-hidden">
          {coverImage ? (
            <img
              src={`${coverImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={station.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <Radio className="w-20 h-20 text-white opacity-50" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white text-shadow mb-1">
              {station.title}
            </h3>
            {station.metadata?.description && (
              <p className="text-sm text-gray-200 text-shadow line-clamp-2">
                {station.metadata.description}
              </p>
            )}
          </div>
          
          {isActive && (
            <div className="absolute top-4 right-4">
              <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">LIVE</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{listenerCount}</span>
            </div>
            {station.metadata?.tags && station.metadata.tags.length > 0 && (
              <span className="text-primary">
                {station.metadata.tags[0]}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
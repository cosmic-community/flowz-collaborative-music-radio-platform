import Link from 'next/link'
import type { Station } from '@/types'
import { Heart, MoreVertical } from 'lucide-react'

interface PopularStationsListProps {
  stations: Station[];
}

export default function PopularStationsList({ stations }: PopularStationsListProps) {
  return (
    <div className="space-y-4">
      {stations.map((station) => {
        const coverImage = station.metadata?.cover_image;
        const description = station.metadata?.description || '';
        const schedule = station.metadata?.schedule || '';
        const tags = station.metadata?.tags || [];
        
        return (
          <Link key={station.id} href={`/stations/${station.slug}`}>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              {/* Station Image */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                {coverImage ? (
                  <img
                    src={`${coverImage.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                    alt={station.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-primary"></div>
                )}
              </div>
              
              {/* Station Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-white line-clamp-1">
                    {station.title}
                  </h3>
                  <button 
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    className="p-1 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                  >
                    <Heart className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
                
                <p className="text-sm text-gray-400 line-clamp-2 mb-2">
                  {description}
                </p>
                
                {schedule && (
                  <p className="text-xs text-gray-500 mb-2">
                    {schedule}
                  </p>
                )}
                
                {/* Tags */}
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
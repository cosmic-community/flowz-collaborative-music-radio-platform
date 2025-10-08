'use client'

import { useState } from 'react'
import type { Station } from '@/types'
import { Play, Pause, SkipForward, Heart, Share2, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface StationPlayerProps {
  station: Station;
}

export default function StationPlayer({ station }: StationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  
  const coverImage = station.metadata?.cover_image;
  const currentTrack = station.metadata?.current_track;
  const listenerCount = station.metadata?.listener_count || 0;
  const themeColor = station.metadata?.theme_color || '#FF4D8B';
  
  return (
    <div className="relative min-h-screen">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark"
        style={{
          background: `linear-gradient(180deg, ${themeColor}20 0%, #1A1A2E 50%)`
        }}
      ></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="px-4 py-6 flex items-center justify-between">
          <Link href="/stations">
            <button className="p-2 glass-effect rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          
          <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-semibold">{listenerCount}</span>
          </div>
        </div>
        
        {/* Album Art */}
        <div className="px-8 py-8">
          <div className="max-w-md mx-auto">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {coverImage ? (
                <img
                  src={`${coverImage.imgix_url}?w=1000&h=1000&fit=crop&auto=format,compress`}
                  alt={station.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: themeColor }}
                >
                  <div className="text-white text-6xl font-bold opacity-50">
                    {station.title.charAt(0)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Track Info */}
        <div className="px-8 py-6 text-center">
          <h1 className="text-3xl font-bold mb-2">
            {currentTrack?.title || 'No track playing'}
          </h1>
          <p className="text-xl text-gray-400 mb-1">
            {currentTrack?.metadata?.artist || station.title}
          </p>
          {currentTrack?.metadata?.album && (
            <p className="text-sm text-gray-500">
              {currentTrack.metadata.album}
            </p>
          )}
        </div>
        
        {/* Controls */}
        <div className="px-8 py-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center gap-8 mb-8">
              <button 
                onClick={() => setIsLiked(!isLiked)}
                className="p-3 hover:bg-white/10 rounded-full transition-colors"
              >
                <Heart 
                  className={`w-6 h-6 ${isLiked ? 'fill-primary text-primary' : ''}`} 
                />
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-6 bg-gradient-primary rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8 ml-1" />
                )}
              </button>
              
              <button className="p-3 hover:bg-white/10 rounded-full transition-colors">
                <SkipForward className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <button className="button-secondary flex-1">
                <Share2 className="w-4 h-4 inline mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
        
        {/* Station Info */}
        <div className="px-8 py-6">
          <div className="max-w-md mx-auto glass-effect rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-2">{station.title}</h3>
            {station.metadata?.description && (
              <p className="text-gray-400 text-sm">
                {station.metadata.description}
              </p>
            )}
            {station.metadata?.tags && station.metadata.tags.length > 0 && (
              <div className="flex gap-2 mt-4">
                {station.metadata.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs px-3 py-1 rounded-full glass-effect"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
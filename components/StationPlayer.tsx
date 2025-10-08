'use client'

import { useState } from 'react'
import type { Station } from '@/types'
import { Play, Pause, SkipForward, SkipBack, Heart, MoreVertical, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface StationPlayerProps {
  station: Station;
}

export default function StationPlayer({ station }: StationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [progress, setProgress] = useState(33) // Progress percentage
  
  const coverImage = station.metadata?.cover_image;
  const currentTrack = station.metadata?.current_track;
  const themeColor = station.metadata?.theme_color || '#FF4D8B';
  const listenerCount = station.metadata?.listener_count || 0;
  
  return (
    <div className="relative min-h-screen bg-dark">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-dark"
        style={{
          background: `linear-gradient(180deg, ${themeColor}40 0%, #0F0F1E 40%)`
        }}
      ></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="px-4 pt-12 pb-6 flex items-center justify-between">
          <Link href="/">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">{station.metadata?.genre || 'Radio'}</p>
            <h2 className="text-sm font-medium">{station.title}</h2>
          </div>
          
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
        
        {/* Album Art */}
        <div className="px-6 py-8">
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
        <div className="px-6 py-4">
          <div className="flex items-start justify-between mb-1">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">
                {currentTrack?.title || station.title}
              </h1>
              <p className="text-base text-gray-400">
                {currentTrack?.metadata?.artist || 'Unknown Artist'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {listenerCount} listeners
              </p>
            </div>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="p-2 mt-1"
            >
              <Heart 
                className={`w-6 h-6 ${isLiked ? 'fill-primary text-primary' : 'text-gray-400'}`} 
              />
            </button>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer">
            <div 
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>1:24</span>
            <span>3:45</span>
          </div>
        </div>
        
        {/* Controls */}
        <div className="px-6 py-6">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <SkipBack className="w-7 h-7" />
              </button>
              
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-5 bg-white rounded-full shadow-lg hover:scale-105 transition-all"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-black" fill="black" />
                ) : (
                  <Play className="w-8 h-8 text-black ml-1" fill="black" />
                )}
              </button>
              
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <SkipForward className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
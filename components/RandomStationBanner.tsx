'use client'

import { useState } from 'react'
import { Radio } from 'lucide-react'

export default function RandomStationBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      <div className="relative p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-1">Can't decide on a station to tune in to?</p>
          <h3 className="text-lg font-bold mb-3">Tune In To A Random Station</h3>
        </div>
        
        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 whitespace-nowrap">
          <Radio className="w-4 h-4" />
          Tune in Now
        </button>
      </div>
    </div>
  )
}
import { Camera } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-bold">
          M
        </div>
        <button className="absolute bottom-0 right-0 p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-colors">
          <Camera className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-1">Music Lover</h2>
        <p className="text-gray-400 text-sm">@musiclover</p>
      </div>
    </div>
  )
}
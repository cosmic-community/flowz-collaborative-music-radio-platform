import { User, Edit2 } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl font-bold">Music Lover</h2>
              <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Edit2 className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-400 mb-4">
              Passionate about discovering new music and sharing great vibes
            </p>
            
            <div className="flex gap-6 text-sm">
              <div>
                <span className="text-gray-400">Stations</span>
                <p className="font-semibold text-lg">3</p>
              </div>
              <div>
                <span className="text-gray-400">Followers</span>
                <p className="font-semibold text-lg">127</p>
              </div>
              <div>
                <span className="text-gray-400">Following</span>
                <p className="font-semibold text-lg">89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
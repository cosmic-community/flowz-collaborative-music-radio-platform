import ProfileHeader from '@/components/ProfileHeader'
import BottomNav from '@/components/BottomNav'
import { Settings } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header */}
      <header className="px-4 pt-12 pb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </header>
      
      <div className="px-4">
        <ProfileHeader />
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-gray-400">Stations</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold">4.5K</p>
            <p className="text-sm text-gray-400">Listeners</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
            <p className="text-2xl font-bold">128</p>
            <p className="text-sm text-gray-400">Following</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-4 border-b border-white/10">
            <button className="pb-3 px-2 border-b-2 border-primary text-primary font-semibold">
              My Stations
            </button>
            <button className="pb-3 px-2 text-gray-400 font-semibold">
              History
            </button>
          </div>
          
          <div className="py-8 text-center text-gray-400">
            <p>Your stations will appear here</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  )
}
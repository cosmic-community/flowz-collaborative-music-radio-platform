import BottomNav from '@/components/BottomNav'
import { Plus, Radio } from 'lucide-react'

export default function MyStationsPage() {
  return (
    <div className="min-h-screen bg-dark pb-20">
      {/* Header */}
      <header className="px-4 pt-12 pb-6">
        <h1 className="text-3xl font-bold">My Stations</h1>
      </header>
      
      <div className="px-4">
        <div className="text-center py-16">
          <div className="w-20 h-20 mx-auto mb-6 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
            <Radio className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No Stations Yet</h3>
          <p className="text-gray-400 mb-8 max-w-xs mx-auto">
            Create your first radio station and start sharing music with friends
          </p>
          <button className="button-primary">
            <Plus className="w-5 h-5 inline mr-2" />
            Create Station
          </button>
        </div>
      </div>
      
      <BottomNav />
    </div>
  )
}
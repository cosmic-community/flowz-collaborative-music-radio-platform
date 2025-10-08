import Header from '@/components/Header'
import BottomNav from '@/components/BottomNav'
import { Plus } from 'lucide-react'

export default function MyStationsPage() {
  return (
    <div className="min-h-screen bg-dark pb-20">
      <Header title="My Stations" showBack={false} />
      
      <div className="px-4 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center">
              <Plus className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No Stations Yet</h3>
            <p className="text-gray-400 mb-6">
              Create your first radio station and start sharing music
            </p>
            <button className="button-primary">
              <Plus className="w-5 h-5 inline mr-2" />
              Create Station
            </button>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  )
}
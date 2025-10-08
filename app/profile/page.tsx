import Header from '@/components/Header'
import ProfileHeader from '@/components/ProfileHeader'
import BottomNav from '@/components/BottomNav'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-dark pb-20">
      <Header title="Profile" showBack={false} />
      
      <div className="px-4 py-6">
        <ProfileHeader />
        
        <div className="max-w-7xl mx-auto mt-8">
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">My Stations</h3>
            <p className="text-gray-400">Your created stations will appear here</p>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 mt-4">
            <h3 className="text-lg font-semibold mb-4">Listening History</h3>
            <p className="text-gray-400">Your recent listening activity</p>
          </div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  )
}
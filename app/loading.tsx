import { Music2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center animate-pulse">
          <Music2 className="w-10 h-10 text-primary" />
        </div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )
}
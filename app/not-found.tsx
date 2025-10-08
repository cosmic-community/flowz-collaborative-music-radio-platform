import { Music2 } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center">
          <Music2 className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-4xl font-bold mb-2">404</h2>
        <p className="text-xl text-gray-400 mb-6">
          Station not found
        </p>
        <Link href="/">
          <button className="button-primary">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  )
}
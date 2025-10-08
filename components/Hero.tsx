import { Music2 } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl"></div>
      
      <div className="relative px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 glass-effect rounded-full">
              <Music2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className="gradient-text">FlowZ</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Create your own radio station and share music with friends
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="button-primary">
              Create Station
            </button>
            <button className="button-secondary">
              Explore Stations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client'

import { Home, Radio, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()
  
  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Radio, label: 'Stations', href: '/stations' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark/95 backdrop-blur-xl border-t border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-around py-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 transition-colors ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-gray-400'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
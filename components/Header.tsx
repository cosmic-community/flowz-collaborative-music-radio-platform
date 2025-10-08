import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface HeaderProps {
  title: string;
  showBack?: boolean;
}

export default function Header({ title, showBack = true }: HeaderProps) {
  return (
    <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          {showBack && (
            <Link 
              href="/"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
          )}
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
    </header>
  )
}
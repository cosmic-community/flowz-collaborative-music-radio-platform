// app/stations/[slug]/page.tsx
import { getStation } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import StationPlayer from '@/components/StationPlayer'
import BottomNav from '@/components/BottomNav'

interface StationPageProps {
  params: Promise<{ slug: string }>
}

export default async function StationPage({ params }: StationPageProps) {
  const { slug } = await params
  const station = await getStation(slug)
  
  if (!station) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-dark pb-20">
      <StationPlayer station={station} />
      <BottomNav />
    </div>
  )
}
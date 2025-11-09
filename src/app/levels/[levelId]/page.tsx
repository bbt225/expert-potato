import LevelDetailClient from './LevelDetailClient'

export function generateStaticParams() {
  return [
    { levelId: 'basic' },
    { levelId: 'a1' },
    { levelId: 'a2' },
    { levelId: 'b1' },
    { levelId: 'b2' },
    { levelId: 'c1' },
  ]
}

export default function LevelDetailPage() {
  return <LevelDetailClient />
}

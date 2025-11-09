import LessonClient from './LessonClient'
import { generateLessonPaths } from '@/lib/generateLessonPaths'

export function generateStaticParams() {
  // Generate all 660 lesson paths (110 per level × 6 levels)
  return generateLessonPaths()
}

export default function LessonPage() {
  return <LessonClient />
}

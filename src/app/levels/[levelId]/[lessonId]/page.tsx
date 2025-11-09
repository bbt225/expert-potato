import LessonClient from './LessonClient'

export function generateStaticParams() {
  // Generate all possible lesson paths
  return [
    { levelId: 'basic', lessonId: 'basic-1' },
    { levelId: 'basic', lessonId: 'basic-2' },
    { levelId: 'basic', lessonId: 'basic-3' },
    { levelId: 'a1', lessonId: 'a1-1' },
    { levelId: 'a1', lessonId: 'a1-2' },
    { levelId: 'a2', lessonId: 'a2-1' },
    { levelId: 'b1', lessonId: 'b1-1' },
    { levelId: 'b2', lessonId: 'b2-1' },
    { levelId: 'c1', lessonId: 'c1-1' },
  ]
}

export default function LessonPage() {
  return <LessonClient />
}

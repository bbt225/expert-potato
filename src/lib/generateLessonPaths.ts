// Generate static paths for all lessons
export function generateLessonPaths() {
  const paths: Array<{ levelId: string; lessonId: string }> = []

  // Basic level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'basic', lessonId: `basic-${i}` })
  }

  // A1 level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'a1', lessonId: `a1-${i}` })
  }

  // A2 level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'a2', lessonId: `a2-${i}` })
  }

  // B1 level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'b1', lessonId: `b1-${i}` })
  }

  // B2 level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'b2', lessonId: `b2-${i}` })
  }

  // C1 level - 110 lessons
  for (let i = 1; i <= 110; i++) {
    paths.push({ levelId: 'c1', lessonId: `c1-${i}` })
  }

  console.log(`Generated ${paths.length} lesson paths`)
  return paths
}

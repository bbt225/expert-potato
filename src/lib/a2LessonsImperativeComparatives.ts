import { Lesson } from '@/types'

export const a2LessonsImperativeComparatives: Lesson[] = []

const topics = [
  'Imperativo afirmativo: tú', 'Imperativo afirmativo: usted', 'Imperativo afirmativo: vosotros',
  'Imperativo negativo', 'Imperativo con pronombres', 'Imperativo irregular',
  'Comparativos: más/menos que', 'Comparativos irregulares: mejor, peor', 'Superlativos',
  'Tan...como, tanto...como', 'Comparaciones de igualdad', 'El más/menos + adjetivo',
  'Comparaciones en oraciones', 'Imperativo en recetas', 'Repaso Imperativo y Comparativos'
]

for (let i = 0; i < 15; i++) {
  a2LessonsImperativeComparatives.push({
    id: `a2-${76 + i}`,
    levelId: 'a2',
    title: topics[i],
    description: `Lección ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Aprender', 'Practicar', 'Usar', 'Dominar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación',
        examples: [{ spanish: 'Ej', russian: 'Пр' }]
      },
      listening: {
        audioUrl: `/audio/a2-${76 + i}.mp3`,
        transcript: 'Audio',
        questions: [{ question: 'Q', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Fr', russian: 'Фр', context: 'C' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/a2-${76 + i}.mp3`,
    readingText: `Texto ${topics[i]}`,
    duration: 27 + (i % 8),
    order: 76 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

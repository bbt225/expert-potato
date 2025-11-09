import { Lesson } from '@/types'

export const b1LessonsConditional: Lesson[] = []

const topics = [
  'Oraciones condicionales tipo 0', 'Oraciones condicionales tipo 1',
  'Si + Presente, Futuro', 'Oraciones condicionales tipo 2',
  'Si + Imperfecto Subjuntivo, Condicional', 'Oraciones condicionales tipo 3',
  'Si + Pluscuamperfecto Subjuntivo', 'Condicionales mixtas',
  'Condicionales sin si', 'De + infinitivo = Si',
  'Como + Subjuntivo (condicional)', 'Condicionales en el pasado',
  'Condicionales irreales', 'Práctica de condicionales',
  'Repaso oraciones condicionales'
]

for (let i = 0; i < 15; i++) {
  b1LessonsConditional.push({
    id: `b1-${46 + i}`,
    levelId: 'b1',
    title: topics[i],
    description: `Oraciones condicionales: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Aprender estructura', 'Practicar', 'Usar correctamente', 'Dominar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación',
        examples: [{ spanish: 'Ej', russian: 'Пр' }]
      },
      listening: {
        audioUrl: `/audio/b1-${46 + i}.mp3`,
        transcript: 'Audio',
        questions: [{ question: 'Q', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Fr', russian: 'Фр', context: 'C' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/b1-${46 + i}.mp3`,
    readingText: `Texto ${topics[i]}`,
    duration: 31 + (i % 8),
    order: 46 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

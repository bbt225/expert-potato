import { Lesson } from '@/types'

export const a2LessonsFutureConditional: Lesson[] = []

const topics = [
  'Futuro Simple: introducción', 'Formación del Futuro', 'Verbos irregulares en Futuro',
  'Usos del Futuro: predicciones', 'Futuro para probabilidad', 'Ir a + infinitivo vs Futuro',
  'Marcadores temporales con Futuro', 'Planes y proyectos futuros', 'Promesas en Futuro',
  'Condicional Simple: introducción', 'Formación del Condicional', 'Verbos irregulares Condicional',
  'Usos del Condicional: cortesía', 'Condicional para dar consejos', 'Condicional en hipótesis',
  'Si + Imperfecto, Condicional', 'Futuro vs Condicional', 'Expresando deseos', 'Futuro Perfecto introducción', 'Repaso Futuro y Condicional'
]

for (let i = 0; i < 20; i++) {
  a2LessonsFutureConditional.push({
    id: `a2-${56 + i}`,
    levelId: 'a2',
    title: topics[i],
    description: `Lección de ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Dominar', 'Practicar', 'Aplicar', 'Consolidar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación completa',
        examples: [
          { spanish: 'Ej. 1', russian: 'Пр. 1' },
          { spanish: 'Ej. 2', russian: 'Пр. 2' },
        ]
      },
      listening: {
        audioUrl: `/audio/a2-${56 + i}.mp3`,
        transcript: 'Transcript',
        questions: [{ question: 'Q', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Phrase', russian: 'Фраза', context: 'Context' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/a2-${56 + i}.mp3`,
    readingText: `Texto de ${topics[i]}`,
    duration: 30 + (i % 10),
    order: 56 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

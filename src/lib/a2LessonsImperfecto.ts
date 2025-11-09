import { Lesson } from '@/types'

export const a2LessonsImperfecto: Lesson[] = []

const topics = [
  'Pretérito Imperfecto: introducción', 'Formación del Imperfecto regular', 'Verbos irregulares: ser, ir, ver',
  'Usos del Imperfecto: descripciones', 'Imperfecto para acciones habituales', 'Imperfecto vs Indefinido',
  'Cuando + Imperfecto', 'Mientras + Imperfecto', 'Imperfecto en narrativas',
  'Describiendo el pasado', 'Costumbres y rutinas pasadas', 'Estados y emociones en el pasado',
  'Imperfecto para el tiempo y la edad', 'Combinando Imperfecto e Indefinido', 'Cuentos en Imperfecto',
  'Memorias de infancia', 'Antes vs Ahora', 'Soler en Imperfecto', 'Imperfecto progresivo', 'Repaso Imperfecto completo'
]

for (let i = 0; i < 20; i++) {
  a2LessonsImperfecto.push({
    id: `a2-${36 + i}`,
    levelId: 'a2',
    title: topics[i],
    description: `Lección sobre ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Aprender el tema', 'Practicar', 'Consolidar', 'Aplicar'],
        overview: `Lección de ${topics[i]}`
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación',
        examples: [
          { spanish: 'Ejemplo 1', russian: 'Пример 1' },
          { spanish: 'Ejemplo 2', russian: 'Пример 2' },
        ]
      },
      listening: {
        audioUrl: `/audio/a2-${36 + i}.mp3`,
        transcript: 'Audio transcript',
        questions: [{ question: 'Pregunta', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Frase', russian: 'Фраза', context: 'Contexto' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/a2-${36 + i}.mp3`,
    readingText: `Texto sobre ${topics[i]}`,
    duration: 28 + (i % 12),
    order: 36 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

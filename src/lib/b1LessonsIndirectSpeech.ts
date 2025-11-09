import { Lesson } from '@/types'

export const b1LessonsIndirectSpeech: Lesson[] = []

const topics = [
  'Estilo indirecto: introducción', 'Verbos de comunicación',
  'Dice que + Indicativo', 'Dijo que + Indicativo/Subjuntivo',
  'Cambios de tiempo en estilo indirecto', 'Cambios de pronombres',
  'Cambios de referencias temporales', 'Preguntas en estilo indirecto',
  'Preguntar que si...', 'Preguntas con qué, cuándo, dónde',
  'Órdenes en estilo indirecto', 'Peticiones en estilo indirecto',
  'Consejos en estilo indirecto', 'Práctica estilo indirecto',
  'Repaso estilo indirecto'
]

for (let i = 0; i < 15; i++) {
  b1LessonsIndirectSpeech.push({
    id: `b1-${61 + i}`,
    levelId: 'b1',
    title: topics[i],
    description: `Estilo indirecto: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Entender', 'Practicar', 'Aplicar', 'Dominar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación',
        examples: [{ spanish: 'Ejemplo', russian: 'Пример' }]
      },
      listening: {
        audioUrl: `/audio/b1-${61 + i}.mp3`,
        transcript: 'Transcript',
        questions: [{ question: 'Pregunta', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Frase', russian: 'Фраза', context: 'Contexto' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/b1-${61 + i}.mp3`,
    readingText: `Texto sobre ${topics[i]}`,
    duration: 29 + (i % 9),
    order: 61 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

import { Lesson } from '@/types'

export const b1LessonsSubjuntivoUses: Lesson[] = []

const topics = [
  'Indicativo vs Subjuntivo: diferencias clave', 'Subjuntivo con verbos de deseo',
  'Subjuntivo con verbos de emoción', 'Subjuntivo con verbos de duda',
  'Subjuntivo con expresiones impersonales', 'Subjuntivo en cláusulas adverbiales',
  'Subjuntivo con conjunciones temporales', 'Subjuntivo de finalidad',
  'Subjuntivo condicional', 'Subjuntivo en cláusulas sustantivas',
  'Subjuntivo en cláusulas adjetivas', 'No creo que + Subjuntivo',
  'Me alegra que + Subjuntivo', 'Temo que + Subjuntivo', 'Es posible que + Subjuntivo',
  'Es necesario que + Subjuntivo', 'Subjuntivo en oraciones negativas',
  'Subjuntivo después de verbos de influencia', 'Práctica mixta Subjuntivo',
  'Repaso usos del Subjuntivo'
]

for (let i = 0; i < 20; i++) {
  b1LessonsSubjuntivoUses.push({
    id: `b1-${26 + i}`,
    levelId: 'b1',
    title: topics[i],
    description: `Uso del Subjuntivo: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Entender el uso', 'Practicar', 'Distinguir contextos', 'Aplicar correctamente'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación del uso',
        examples: [
          { spanish: 'Ejemplo 1', russian: 'Пример 1' },
          { spanish: 'Ejemplo 2', russian: 'Пример 2' },
        ]
      },
      listening: {
        audioUrl: `/audio/b1-${26 + i}.mp3`,
        transcript: 'Audio de práctica',
        questions: [{ question: 'Pregunta', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Frase', russian: 'Фраза', context: 'Contexto' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 3 === 0 }
    },
    audioUrl: `/audio/b1-${26 + i}.mp3`,
    readingText: `Texto sobre ${topics[i]}`,
    duration: 30 + (i % 10),
    order: 26 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

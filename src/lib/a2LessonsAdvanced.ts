import { Lesson } from '@/types'

export const a2LessonsAdvanced: Lesson[] = []

const topics = [
  'Pronombres de objeto directo', 'Pronombres de objeto indirecto', 'Combinación de pronombres',
  'Por y Para: diferencias', 'Perífrasis verbales: ir a, acabar de', 'Verbos reflexivos avanzados',
  'Voz pasiva con SER', 'Se impersonal', 'Repaso general A2'
]

for (let i = 0; i < 9; i++) {
  a2LessonsAdvanced.push({
    id: `a2-${91 + i}`,
    levelId: 'a2',
    title: topics[i],
    description: `Lección avanzada: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Dominar', 'Integrar', 'Aplicar', 'Perfeccionar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación avanzada',
        examples: [{ spanish: 'Ejemplo', russian: 'Пример' }]
      },
      listening: {
        audioUrl: `/audio/a2-${91 + i}.mp3`,
        transcript: 'Transcript avanzado',
        questions: [{ question: 'Pregunta', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Frase', russian: 'Фраза', context: 'Contexto' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true }
    },
    audioUrl: `/audio/a2-${91 + i}.mp3`,
    readingText: `Texto complejo sobre ${topics[i]}`,
    duration: 35 + (i % 5),
    order: 91 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

// Lesson 100 - Final A2 Review
a2LessonsAdvanced.push({
  id: 'a2-100',
  levelId: 'a2',
  title: '¡Felicidades! Completaste A2',
  description: 'Repaso final y celebración del nivel A2',
  content: {
    introduction: {
      title: 'Repaso Final A2',
      goals: ['Repasar todo A2', 'Celebrar logros', 'Prepararse para B1', 'Consolidar conocimientos'],
      overview: 'Has completado 100 lecciones de A2. ¡Enhorabuena!'
    },
    newWords: [],
    grammar: {
      title: 'Todo lo aprendido en A2',
      explanation: 'Resumen de todos los temas: Perfecto, Indefinido, Imperfecto, Futuro, Condicional, Imperativo, Comparativos y más',
      examples: [
        { spanish: 'He aprendido mucho', russian: 'Я много выучил' },
        { spanish: 'Estudié español durante meses', russian: 'Я учил испанский месяцами' },
        { spanish: 'Aprenderé más en B1', russian: 'Я выучу больше на B1' },
      ]
    },
    listening: {
      audioUrl: '/audio/a2-100.mp3',
      transcript: '¡Felicidades por completar el nivel A2! Ahora dominas los tiempos pasados, futuro, condicional e imperativo. Estás listo para el nivel B1.',
      questions: [{
        question: '¿Qué nivel sigue después de A2?',
        options: ['A1', 'B1', 'B2', 'C1'],
        correctAnswer: 1
      }]
    },
    phrases: [{
      spanish: '¡He completado el nivel A2!',
      russian: 'Я завершил уровень A2!',
      context: 'Celebración'
    }],
    homework: {
      vocabularyTest: true,
      listening: true,
      reading: true,
      writing: true
    }
  },
  audioUrl: '/audio/a2-100.mp3',
  readingText: 'Has recorrido un largo camino. En A2 aprendiste todos los tiempos verbales principales: Pretérito Perfecto, Indefinido, Imperfecto, Futuro, Condicional. También estudiaste el Imperativo y los comparativos. Ahora puedes hablar del pasado, futuro, dar órdenes y hacer comparaciones. ¡Estás listo para B1!',
  duration: 40,
  order: 100,
  isFree: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
})

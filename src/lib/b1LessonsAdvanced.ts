import { Lesson } from '@/types'

export const b1LessonsAdvanced: Lesson[] = []

const topics = [
  'Voz pasiva: SER + participio', 'Voz pasiva con SE',
  'Pasiva refleja avanzada', 'Perífrasis verbales: acabar de, volver a',
  'Perífrasis verbales: dejar de, ponerse a', 'Perífrasis verbales: llevar + gerundio',
  'Conectores: sin embargo, por lo tanto', 'Conectores: además, en cambio',
  'Conectores de causa y consecuencia', 'Conectores de contraste',
  'Conectores de tiempo avanzados', 'Expresiones idiomáticas comunes',
  'Phrasal verbs en español', 'Verbos con preposición obligatoria',
  'Registro formal vs informal', 'Lenguaje coloquial',
  'Expresiones con tener y hacer', 'Subjuntivo Imperfecto: introducción',
  'Usos del Subjuntivo Imperfecto', 'Subjuntivo Perfecto',
  'Tiempos compuestos del Subjuntivo', 'Pluscuamperfecto de Subjuntivo',
  'Revisión de todos los tiempos', 'Integración B1', 'Repaso final B1'
]

for (let i = 0; i < 25; i++) {
  b1LessonsAdvanced.push({
    id: `b1-${76 + i}`,
    levelId: 'b1',
    title: topics[i],
    description: `Tema avanzado B1: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Dominar', 'Integrar', 'Perfeccionar', 'Aplicar'],
        overview: topics[i]
      },
      newWords: [],
      grammar: {
        title: topics[i],
        explanation: 'Explicación avanzada',
        examples: [{ spanish: 'Ej', russian: 'Пр' }]
      },
      listening: {
        audioUrl: `/audio/b1-${76 + i}.mp3`,
        transcript: 'Audio avanzado',
        questions: [{ question: 'Q', options: ['A', 'B', 'C', 'D'], correctAnswer: 1 }]
      },
      phrases: [{ spanish: 'Frase avanzada', russian: 'Продвинутая фраза', context: 'Contexto' }],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: i % 2 === 0 }
    },
    audioUrl: `/audio/b1-${76 + i}.mp3`,
    readingText: `Texto complejo sobre ${topics[i]}`,
    duration: 33 + (i % 10),
    order: 76 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

// Special lesson 100 - B1 Final
b1LessonsAdvanced[24] = {
  id: 'b1-100',
  levelId: 'b1',
  title: '¡Enhorabuena! Completaste B1',
  description: 'Celebración y repaso final del nivel B1',
  content: {
    introduction: {
      title: 'Repaso Final B1',
      goals: ['Celebrar logros', 'Repasar todo B1', 'Prepararse para B2', 'Consolidar conocimientos'],
      overview: 'Has dominado 100 lecciones de B1. ¡Eres un estudiante intermedio avanzado!'
    },
    newWords: [],
    grammar: {
      title: 'Todo lo aprendido en B1',
      explanation: 'Subjuntivo Presente, Subjuntivo Imperfecto, Subjuntivo Perfecto, Oraciones condicionales, Estilo indirecto, Voz pasiva, Perífrasis verbales, Conectores avanzados',
      examples: [
        { spanish: 'Espero que hayas aprendido mucho', russian: 'Надеюсь, ты много выучил' },
        { spanish: 'Si estudiaras más, aprobarías', russian: 'Если бы ты больше учился, ты бы сдал' },
        { spanish: 'Dijo que vendría mañana', russian: 'Он сказал, что придет завтра' },
      ]
    },
    listening: {
      audioUrl: '/audio/b1-100.mp3',
      transcript: '¡Felicidades! Has completado el nivel B1. Ahora dominas el subjuntivo, las oraciones condicionales, el estilo indirecto y mucho más. Estás preparado para B2.',
      questions: [{
        question: '¿Cuál es el siguiente nivel después de B1?',
        options: ['A2', 'B2', 'C1', 'C2'],
        correctAnswer: 1
      }]
    },
    phrases: [{
      spanish: '¡He llegado al nivel B1!',
      russian: 'Я достиг уровня B1!',
      context: 'Celebración del logro'
    }],
    homework: {
      vocabularyTest: true,
      listening: true,
      reading: true,
      writing: true
    }
  },
  audioUrl: '/audio/b1-100.mp3',
  readingText: 'El nivel B1 es un hito importante. Ahora puedes expresar deseos, dudas, emociones con el subjuntivo. Puedes hablar de situaciones hipotéticas con condicionales. Puedes reportar lo que otros dijeron con el estilo indirecto. Dominas la voz pasiva, las perífrasis verbales y los conectores. ¡Estás listo para B2 donde profundizarás aún más!',
  duration: 45,
  order: 100,
  isFree: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
}

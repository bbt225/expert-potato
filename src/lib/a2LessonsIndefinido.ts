import { Lesson } from '@/types'

export const a2LessonsIndefinido: Lesson[] = []

const topics = [
  'Pretérito Indefinido: introducción', 'Verbos regulares -AR en Indefinido', 'Verbos regulares -ER/-IR',
  'Verbos irregulares: ser, ir, estar', 'Verbos irregulares: hacer, tener, poder',
  'Verbos irregulares: decir, traer', 'Verbos irregulares: venir, poner', 'Verbos con cambios: pedir, dormir',
  'Verbos con cambios: preferir, sentir', 'Marcadores temporales: ayer, la semana pasada',
  'Indefinido vs Perfecto', 'Indefinido en narrativas', 'Contando historias pasadas',
  'Biografías en Indefinido', 'Indefinido en preguntas', 'Indefinido negativo',
  'Indefinido con hace + tiempo', 'Experiencias pasadas terminadas', 'Viajes en el pasado',
  'Repaso completo Pretérito Indefinido'
]

for (let i = 0; i < 20; i++) {
  a2LessonsIndefinido.push({
    id: `a2-${16 + i}`,
    levelId: 'a2',
    title: topics[i],
    description: `Lección detallada sobre ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Dominar el tema', 'Practicar estructuras', 'Usar en contexto', 'Consolidar conocimientos'],
        overview: `Estudio completo de ${topics[i]}`
      },
      newWords: [],
      grammar: {
        title: `Gramática: ${topics[i]}`,
        explanation: `Explicación detallada`,
        examples: [
          { spanish: `Ejemplo 1 de ${topics[i]}`, russian: 'Пример 1' },
          { spanish: `Ejemplo 2 de ${topics[i]}`, russian: 'Пример 2' },
        ]
      },
      listening: {
        audioUrl: `/audio/a2-${16 + i}.mp3`,
        transcript: `Texto de audio para ${topics[i]}`,
        questions: [{
          question: '¿Qué aprendimos?',
          options: ['A', 'B', 'C', 'D'],
          correctAnswer: 1
        }]
      },
      phrases: [{
        spanish: `Frase con ${topics[i]}`,
        russian: 'Фраза на русском',
        context: 'Contexto'
      }],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: i % 3 === 0
      }
    },
    audioUrl: `/audio/a2-${16 + i}.mp3`,
    readingText: `Texto de lectura sobre ${topics[i]}. Practica leyendo atentamente.`,
    duration: 30 + (i % 15),
    order: 16 + i,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

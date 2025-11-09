import { Lesson } from '@/types'

export const b1LessonsSubjuntivoPresente: Lesson[] = []

const topics = [
  'Subjuntivo Presente: introducción', 'Formación Subjuntivo regular -AR', 'Formación Subjuntivo -ER/-IR',
  'Verbos irregulares: ser, estar, ir', 'Verbos irregulares: haber, saber, dar',
  'Verbos con cambios vocálicos', 'Verbos completamente irregulares',
  'Quiero que + Subjuntivo', 'Espero que + Subjuntivo', 'Es importante que + Subjuntivo',
  'Expresiones impersonales', 'Verbos de emoción + Subjuntivo', 'Verbos de duda + Subjuntivo',
  'Cuando + Subjuntivo (futuro)', 'Aunque + Subjuntivo', 'Para que + Subjuntivo',
  'Sin que + Subjuntivo', 'Antes de que + Subjuntivo', 'A menos que + Subjuntivo',
  'Ojalá + Subjuntivo', 'Tal vez / Quizás + Subjuntivo', 'Subjuntivo en cláusulas relativas',
  'Subjuntivo después de cuando', 'Práctica integrada Subjuntivo', 'Repaso Subjuntivo Presente'
]

for (let i = 0; i < 25; i++) {
  b1LessonsSubjuntivoPresente.push({
    id: `b1-${i + 1}`,
    levelId: 'b1',
    title: topics[i],
    description: `Lección detallada: ${topics[i]}`,
    content: {
      introduction: {
        title: topics[i],
        goals: ['Dominar el tema', 'Entender el uso', 'Practicar estructuras', 'Aplicar en contexto'],
        overview: `Estudio completo de ${topics[i]}`
      },
      newWords: [],
      grammar: {
        title: `Gramática: ${topics[i]}`,
        explanation: 'Explicación detallada del tema',
        examples: [
          { spanish: `Ejemplo 1: ${topics[i]}`, russian: 'Пример 1' },
          { spanish: `Ejemplo 2: ${topics[i]}`, russian: 'Пример 2' },
          { spanish: `Ejemplo 3: ${topics[i]}`, russian: 'Пример 3' },
        ]
      },
      listening: {
        audioUrl: `/audio/b1-${i + 1}.mp3`,
        transcript: `Texto de audio para practicar ${topics[i]}. Escucha con atención.`,
        questions: [{
          question: `¿Qué aprendiste sobre ${topics[i]}?`,
          options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
          correctAnswer: 1
        }]
      },
      phrases: [{
        spanish: `Frase práctica: ${topics[i]}`,
        russian: 'Практическая фраза',
        context: 'Uso diario'
      }],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: i % 3 === 0
      }
    },
    audioUrl: `/audio/b1-${i + 1}.mp3`,
    readingText: `Texto de lectura sobre ${topics[i]}. El subjuntivo es esencial en español avanzado.`,
    duration: 32 + (i % 12),
    order: i + 1,
    isFree: i < 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  })
}

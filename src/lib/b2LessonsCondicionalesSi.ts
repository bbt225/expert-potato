import { Lesson } from '@/types'

// B2 Lessons: Conditional Sentences (Lessons 21-40)
export const b2LessonsCondicionalesSi: Lesson[] = [
  // Lessons 6-20 продолжают тему Imperfecto de Subjuntivo с разными темами
  // Здесь уроки 21-40 про условные предложения
  {
    id: 'b2-21',
    levelId: 'b2',
    title: 'Условные предложения: Обзор',
    description: 'Три типа условных предложений в испанском',
    content: {
      introduction: {
        title: 'Tres tipos de oraciones condicionales',
        goals: [
          'Различать три типа условных предложений',
          'Понимать разницу в вероятности',
          'Правильно выбирать времена глаголов',
          'Избегать типичных ошибок',
        ],
        overview:
          'В испанском языке три типа условных предложений: реальные (Tipo I), нереальные в настоящем (Tipo II), нереальные в прошлом (Tipo III)',
      },
      newWords: [],
      grammar: {
        title: 'Типы условных предложений',
        explanation: 'Каждый тип использует разные времена глаголов',
        examples: [
          {
            spanish: 'TIPO I: Si llueve, me quedo en casa',
            russian: 'Если пойдет дождь, останусь дома (реально)',
          },
          {
            spanish: 'TIPO I: Si tienes tiempo, llámame',
            russian: 'Если будет время, позвони (реально)',
          },
          {
            spanish: 'TIPO II: Si lloviera, me quedaría en casa',
            russian: 'Если бы шел дождь, остался бы дома (нереально сейчас)',
          },
          {
            spanish: 'TIPO II: Si tuviera tiempo, te llamaría',
            russian: 'Если бы было время, позвонил бы (нереально)',
          },
          {
            spanish: 'TIPO III: Si hubiera llovido, me habría quedado',
            russian: 'Если бы шел дождь, остался бы (нереально в прошлом)',
          },
          {
            spanish: 'TIPO III: Si hubiera sabido, no habría venido',
            russian: 'Если бы знал, не пришел бы (прошлое)',
          },
        ],
        tables: [
          {
            title: 'Tres tipos de condicionales',
            headers: ['Tipo', 'Si + ...', 'Resultado', 'Ejemplo'],
            rows: [
              ['I (Real)', 'Presente', 'Presente/Futuro', 'Si llueve, me quedo'],
              [
                'II (Irreal presente)',
                'Imperfecto Subj.',
                'Condicional',
                'Si lloviera, me quedaría',
              ],
              [
                'III (Irreal pasado)',
                'Pluscuamperf. Subj.',
                'Cond. Perfecto',
                'Si hubiera sabido...',
              ],
            ],
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-21.mp3',
        transcript:
          'Si tengo dinero, voy al cine. Pero si tuviera mucho dinero, viajaría por el mundo. Y si hubiera nacido rico, mi vida habría sido diferente. Estas tres frases muestran los tres tipos de condicionales. El primero es posible, el segundo improbable, el tercero imposible porque ya pasó.',
        questions: [
          {
            question: '¿Qué haría si tuviera mucho dinero?',
            options: [
              'iría al cine',
              'viajaría por el mundo',
              'se quedaría en casa',
              'trabajaría más',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Cuál condicional es imposible?',
            options: [
              'si tengo dinero',
              'si tuviera dinero',
              'si hubiera nacido rico',
              'todos',
            ],
            correctAnswer: 2,
          },
          {
            question: '¿Cuál es el tipo I?',
            options: [
              'si hubiera nacido',
              'si tuviera',
              'si tengo',
              'ninguno',
            ],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Si puedo, te ayudo',
          russian: 'Если смогу, помогу (реально)',
          context: 'Tipo I - реальное условие',
        },
        {
          spanish: 'Si pudiera, te ayudaría',
          russian: 'Если бы мог, помог бы (нереально)',
          context: 'Tipo II - нереальное в настоящем',
        },
        {
          spanish: 'Si hubiera podido, te habría ayudado',
          russian: 'Если бы мог, помог бы (в прошлом)',
          context: 'Tipo III - нереальное в прошлом',
        },
        {
          spanish: 'Si estudias, aprobarás',
          russian: 'Если будешь учиться, сдашь',
          context: 'Совет с реальным условием',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-21.mp3',
    readingText:
      'Las ORACIONES CONDICIONALES tienen tres tipos. TIPO I (real): Si + Presente, Presente/Futuro/Imperativo. Ejemplo: "Si llueve, no salgo". TIPO II (irreal presente): Si + Imperfecto de Subjuntivo, Condicional Simple. Ejemplo: "Si fuera rico, viajaría". TIPO III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo, Condicional Perfecto. Ejemplo: "Si hubiera estudiado, habría aprobado". IMPORTANTE: nunca usar Condicional después de "si". La elección del tipo depende de la probabilidad y el tiempo.',
    duration: 36,
    order: 21,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-22',
    levelId: 'b2',
    title: 'Tipo I: Condiciones reales',
    description: 'Si + Presente, Presente/Futuro/Imperativo',
    content: {
      introduction: {
        title: 'Condiciones reales y posibles',
        goals: [
          'Освоить структуру Tipo I',
          'Использовать разные времена в главной части',
          'Выражать реальные условия',
          'Давать советы и инструкции',
        ],
        overview:
          'Tipo I выражает реальные и вероятные условия: если что-то произойдет, то что-то другое тоже произойдет',
      },
      newWords: [],
      grammar: {
        title: 'Si + Presente Indicativo',
        explanation:
          'В условной части Presente, в главной - Presente/Futuro/Imperativo',
        examples: [
          {
            spanish: 'Si llueve, no salgo',
            russian: 'Если идет дождь, не выхожу (привычка)',
          },
          {
            spanish: 'Si llueve, no saldré',
            russian: 'Если пойдет дождь, не выйду (будущее)',
          },
          {
            spanish: 'Si llueve, no salgas',
            russian: 'Если пойдет дождь, не выходи (приказ)',
          },
          {
            spanish: 'Si tienes hambre, come algo',
            russian: 'Если голоден, поешь что-нибудь',
          },
          {
            spanish: 'Si estudias, aprobarás',
            russian: 'Если будешь учиться, сдашь',
          },
          {
            spanish: 'Si hace sol, vamos a la playa',
            russian: 'Если будет солнце, пойдем на пляж',
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-22.mp3',
        transcript:
          'Si tienes frío, cierra la ventana. Si quieres café, lo preparo ahora. Si llegas tarde, llámame. Si no entiendes algo, pregúntame. Si hace buen tiempo mañana, iremos al parque. Si terminas temprano, podremos ir al cine.',
        questions: [
          {
            question: '¿Qué debe hacer si tiene frío?',
            options: [
              'abrir la ventana',
              'cerrar la ventana',
              'llamar',
              'preguntar',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Qué preparará si quiere café?',
            options: ['té', 'comida', 'café', 'nada'],
            correctAnswer: 2,
          },
          {
            question: '¿A dónde irán si hace buen tiempo?',
            options: ['al cine', 'al parque', 'a casa', 'al trabajo'],
            correctAnswer: 1,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Si necesitas ayuda, dímelo',
          russian: 'Если нужна помощь, скажи мне',
          context: 'Предложение помощи',
        },
        {
          spanish: 'Si no te gusta, no lo comas',
          russian: 'Если не нравится, не ешь',
          context: 'Совет',
        },
        {
          spanish: 'Si llego tarde, empezad sin mí',
          russian: 'Если опоздаю, начинайте без меня',
          context: 'Инструкция',
        },
        {
          spanish: 'Si hace calor, pondré el aire acondicionado',
          russian: 'Если будет жарко, включу кондиционер',
          context: 'План действий',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-22.mp3',
    readingText:
      'El CONDICIONAL TIPO I expresa situaciones reales y probables. Estructura: Si + Presente de Indicativo, Presente/Futuro/Imperativo. Ejemplos: "Si tengo tiempo, voy" (presente habitual). "Si tengo tiempo, iré" (futuro probable). "Si tienes tiempo, ven" (imperativo/petición). Se usa para: expresar hábitos ("Si hace frío, me pongo el abrigo"), dar consejos ("Si estás cansado, descansa"), hacer planes ("Si termino pronto, te llamo"), dar instrucciones ("Si ves a Juan, dile que me llame").',
    duration: 33,
    order: 22,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  {
    id: 'b2-23',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 1',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-23.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-23.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 35,
    order: 23,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-24',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 2',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-24.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-24.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 28,
    order: 24,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-25',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 3',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-25.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-25.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 29,
    order: 25,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-26',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 4',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-26.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-26.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 30,
    order: 26,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-27',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 5',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-27.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: true },
    },
    audioUrl: '/audio/b2-27.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 31,
    order: 27,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-28',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 6',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-28.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-28.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 32,
    order: 28,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-29',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 7',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-29.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-29.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 33,
    order: 29,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-30',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 8',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-30.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-30.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 34,
    order: 30,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-31',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 9',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-31.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-31.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 35,
    order: 31,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-32',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 10',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-32.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-32.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 28,
    order: 32,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-33',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 11',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-33.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: true },
    },
    audioUrl: '/audio/b2-33.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 29,
    order: 33,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-34',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 12',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-34.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-34.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 30,
    order: 34,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-35',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 13',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-35.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-35.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 31,
    order: 35,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-36',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 14',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-36.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-36.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 32,
    order: 36,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-37',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 15',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-37.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: false },
    },
    audioUrl: '/audio/b2-37.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 33,
    order: 37,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-38',
    levelId: 'b2',
    title: 'Condicionales Tipo 1: Práctica 16',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-38.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-38.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 34,
    order: 38,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-39',
    levelId: 'b2',
    title: 'Condicionales Tipo 2: Práctica 17',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-39.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: true },
    },
    audioUrl: '/audio/b2-39.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 35,
    order: 39,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-40',
    levelId: 'b2',
    title: 'Condicionales Tipo 3: Práctica 18',
    description: 'Ejercicios y aplicación práctica de condicionales',
    content: {
      introduction: {
        title: 'Práctica de oraciones condicionales',
        goals: ['Dominar estructuras condicionales', 'Aplicar en contextos reales', 'Evitar errores típicos', 'Mejorar fluidez'],
        overview: 'Práctica intensiva de estructuras condicionales en diferentes contextos',
      },
      newWords: [],
      grammar: {
        title: 'Estructuras condicionales avanzadas',
        explanation: 'Combinando diferentes tipos de condicionales',
        examples: [
          { spanish: 'Si hubiera sabido, habría venido', russian: 'Если бы знал, пришел бы' },
          { spanish: 'Si estudias, aprobarás', russian: 'Если будешь учиться, сдашь' },
          { spanish: 'Si tuviera tiempo, te ayudaría', russian: 'Если бы было время, помог бы' },
          { spanish: 'Si hace sol, vamos a la playa', russian: 'Если солнечно, идем на пляж' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-40.mp3',
        transcript: 'Si tuviera más tiempo libre, aprendería más idiomas. Si me llamas mañana, te digo la respuesta. Si hubiera estudiado más, ahora tendría mejor trabajo.',
        questions: [
          { question: '¿Qué haría con más tiempo?', options: ['trabajar', 'aprender idiomas', 'viajar', 'descansar'], correctAnswer: 1 },
          { question: '¿Cuándo dará la respuesta?', options: ['hoy', 'mañana', 'ayer', 'nunca'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Si puedo, te ayudo', russian: 'Если смогу, помогу', context: 'Ofrecimiento' },
        { spanish: 'Si tuviera alas, volaría', russian: 'Если бы были крылья, летал бы', context: 'Deseo imposible' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-40.mp3',
    readingText: 'Las ORACIONES CONDICIONALES son fundamentales en español. Tipo I (real): Si + Presente. Tipo II (irreal presente): Si + Imperfecto de Subjuntivo. Tipo III (irreal pasado): Si + Pluscuamperfecto de Subjuntivo. Practicar mucho es esencial para dominarlas.',
    duration: 28,
    order: 40,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
import { Lesson } from '@/types'

// B2 Lessons: Subjuntivo Imperfecto (Lessons 1-20)
export const b2LessonsSubjuntivoImperfecto: Lesson[] = [
  {
    id: 'b2-1',
    levelId: 'b2',
    title: 'Subjuntivo Imperfecto: Введение',
    description: 'Формы и основное использование Imperfecto de Subjuntivo',
    content: {
      introduction: {
        title: 'Imperfecto de Subjuntivo - прошедшее сослагательное',
        goals: [
          'Выучить две формы Imperfecto de Subjuntivo (-ra, -se)',
          'Понять когда использовать это время',
          'Научиться строить условные предложения',
          'Освоить вежливые просьбы с quisiera',
        ],
        overview:
          'Imperfecto de Subjuntivo - прошедшее время сослагательного наклонения, используется для выражения гипотетических ситуаций в прошлом.',
      },
      newWords: [],
      grammar: {
        title: 'Формы Imperfecto de Subjuntivo',
        explanation:
          'Образуется от основы 3 лица множественного числа Pretérito Indefinido. Имеет две равнозначные формы: -ra/-se',
        examples: [
          { spanish: 'hablar → hablaron → hablara/hablase', russian: 'говорить' },
          { spanish: 'comer → comieron → comiera/comiese', russian: 'есть' },
          { spanish: 'vivir → vivieron → viviera/viviese', russian: 'жить' },
          { spanish: 'tener → tuvieron → tuviera/tuviese', russian: 'иметь' },
          { spanish: 'ser → fueron → fuera/fuese', russian: 'быть' },
          { spanish: 'hacer → hicieron → hiciera/hiciese', russian: 'делать' },
          { spanish: 'decir → dijeron → dijera/dijese', russian: 'говорить' },
          { spanish: 'poder → pudieron → pudiera/pudiese', russian: 'мочь' },
        ],
        tables: [
          {
            title: 'Спряжение hablar в Imperfecto de Subjuntivo',
            headers: ['Persona', 'Forma -ra', 'Forma -se'],
            rows: [
              ['yo', 'hablara', 'hablase'],
              ['tú', 'hablaras', 'hablases'],
              ['él/ella/usted', 'hablara', 'hablase'],
              ['nosotros/as', 'habláramos', 'hablásemos'],
              ['vosotros/as', 'hablarais', 'hablaseis'],
              ['ellos/ellas/ustedes', 'hablaran', 'hablasen'],
            ],
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-1.mp3',
        transcript:
          'Si tuviera más tiempo, viajaría por toda España. Mi profesora me pidió que estudiara más. Ojalá pudiera hablar español perfectamente. Quisiera reservar una mesa para dos personas. Era necesario que aprendiéramos la gramática avanzada. Si fuera rico, compraría una casa en la playa.',
        questions: [
          {
            question: '¿Qué haría la persona si tuviera más tiempo?',
            options: [
              'trabajaría más',
              'viajaría por España',
              'estudiaría',
              'compraría una casa',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Qué le pidió la profesora?',
            options: [
              'que viajara',
              'que comprara',
              'que estudiara más',
              'que reservara',
            ],
            correctAnswer: 2,
          },
          {
            question: '¿Qué forma se usa para "хотел бы"?',
            options: ['quiero', 'quería', 'quisiera', 'querría'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Si tuviera dinero, viajaría',
          russian: 'Если бы у меня были деньги, я бы путешествовал',
          context: 'Условное предложение',
        },
        {
          spanish: 'Quisiera un café, por favor',
          russian: 'Я хотел бы кофе, пожалуйста',
          context: 'Вежливая просьба',
        },
        {
          spanish: 'Ojalá pudiera ayudarte',
          russian: 'Хотел бы я мочь тебе помочь',
          context: 'Пожелание',
        },
        {
          spanish: 'Me pidió que viniera temprano',
          russian: 'Он попросил меня прийти рано',
          context: 'Косвенная просьба',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-1.mp3',
    readingText:
      'El IMPERFECTO DE SUBJUNTIVO se forma a partir del Pretérito Indefinido (3ª persona plural): hablar → hablaron → hablara/hablase. Tiene DOS formas equivalentes: -ra y -se. En América Latina se prefiere la forma -ra. Se usa en oraciones subordinadas cuando el verbo principal está en pasado: "Me pidió que viniera". También en construcciones condicionales: "Si tuviera tiempo, iría". Y para expresar deseos corteses: "Quisiera un café". Es fundamental para el nivel avanzado.',
    duration: 35,
    order: 1,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-2',
    levelId: 'b2',
    title: 'Imperfecto de Subjuntivo: Verbos irregulares',
    description: 'Irregulares más importantes: ser, ir, tener, hacer, poder',
    content: {
      introduction: {
        title: 'Verbos irregulares en Imperfecto de Subjuntivo',
        goals: [
          'Выучить неправильные глаголы',
          'Понять, почему они неправильные',
          'Практиковать употребление в контексте',
          'Различать форму -ra и -se',
        ],
        overview:
          'Неправильные глаголы в Imperfecto de Subjuntivo следуют неправильной основе Pretérito Indefinido.',
      },
      newWords: [],
      grammar: {
        title: 'Главные неправильные глаголы',
        explanation:
          'Неправильность переносится из Pretérito Indefinido в Imperfecto de Subjuntivo',
        examples: [
          { spanish: 'ser/ir → fueron → fuera/fuese', russian: 'быть/идти' },
          { spanish: 'tener → tuvieron → tuviera/tuviese', russian: 'иметь' },
          { spanish: 'estar → estuvieron → estuviera/estuviese', russian: 'быть/находиться' },
          { spanish: 'hacer → hicieron → hiciera/hiciese', russian: 'делать' },
          { spanish: 'poder → pudieron → pudiera/pudiese', russian: 'мочь' },
          { spanish: 'poner → pusieron → pusiera/pusiese', russian: 'класть' },
          { spanish: 'venir → vinieron → viniera/viniese', russian: 'приходить' },
          { spanish: 'querer → quisieron → quisiera/quisiese', russian: 'хотеть' },
          { spanish: 'saber → supieron → supiera/supiese', russian: 'знать' },
          { spanish: 'dar → dieron → diera/diese', russian: 'давать' },
        ],
        tables: [
          {
            title: 'Спряжение ser/ir в Imperfecto de Subjuntivo',
            headers: ['Persona', 'Forma -ra', 'Forma -se'],
            rows: [
              ['yo', 'fuera', 'fuese'],
              ['tú', 'fueras', 'fueses'],
              ['él/ella/usted', 'fuera', 'fuese'],
              ['nosotros/as', 'fuéramos', 'fuésemos'],
              ['vosotros/as', 'fuerais', 'fueseis'],
              ['ellos/ellas/ustedes', 'fueran', 'fuesen'],
            ],
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-2.mp3',
        transcript:
          'Si yo fuera presidente, cambiaría muchas cosas. Me gustaría que vinieras a mi fiesta. Era importante que hiciéramos los deberes. Si tuvieras paciencia, podrías aprender más rápido. Ojalá estuviera en casa ahora mismo. Le pedí que pusiera la mesa.',
        questions: [
          {
            question: '¿Qué haría si fuera presidente?',
            options: [
              'no cambiaría nada',
              'cambiaría muchas cosas',
              'viajaría',
              'estudiaría',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿A dónde le gustaría que viniera?',
            options: ['al trabajo', 'a la escuela', 'a la fiesta', 'a casa'],
            correctAnswer: 2,
          },
          {
            question: '¿Qué era importante?',
            options: [
              'venir',
              'ser presidente',
              'hacer los deberes',
              'estar en casa',
            ],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Si fuera rico, compraría un yate',
          russian: 'Если бы я был богат, купил бы яхту',
          context: 'Нереальное условие',
        },
        {
          spanish: 'Ojalá tuviera más tiempo libre',
          russian: 'Хотел бы я иметь больше свободного времени',
          context: 'Пожелание',
        },
        {
          spanish: 'Me pidió que hiciera la tarea',
          russian: 'Он попросил меня сделать задание',
          context: 'Просьба в прошлом',
        },
        {
          spanish: 'Si pudiera volar, iría a la luna',
          russian: 'Если бы я мог летать, полетел бы на луну',
          context: 'Фантастическое условие',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-2.mp3',
    readingText:
      'Los verbos IRREGULARES en Imperfecto de Subjuntivo mantienen la irregularidad del Pretérito Indefinido. SER/IR comparten la misma forma: fuera/fuese. TENER → tuviera (от tuvieron). HACER → hiciera (от hicieron). PODER → pudiera (от pudieron). QUERER → quisiera (forma cortés "хотел бы"). Estos verbos son esenciales para expresar condiciones irreales: "Si fuera rico...", deseos: "Ojalá pudiera...", y peticiones pasadas: "Me pidió que viniera...".',
    duration: 33,
    order: 2,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-3',
    levelId: 'b2',
    title: 'Condiciones irreales: Si + Imperfecto',
    description: 'Условные предложения второго типа',
    content: {
      introduction: {
        title: 'Construcciones condicionales irreales',
        goals: [
          'Научиться строить условные предложения II типа',
          'Понять структуру Si + Imperfecto de Subjuntivo',
          'Практиковать Conditional Simple в главной части',
          'Выражать нереальные условия',
        ],
        overview:
          'Условные предложения II типа выражают нереальные или маловероятные условия в настоящем: Si tuviera... haría...',
      },
      newWords: [],
      grammar: {
        title: 'Estructura: Si + Imperfecto de Subjuntivo, Condicional Simple',
        explanation:
          'В условной части (si...) используется Imperfecto de Subjuntivo, в главной - Condicional Simple',
        examples: [
          {
            spanish: 'Si tuviera dinero, compraría un coche',
            russian: 'Если бы у меня были деньги, я бы купил машину',
          },
          {
            spanish: 'Si fuera verano, iríamos a la playa',
            russian: 'Если бы было лето, мы пошли бы на пляж',
          },
          {
            spanish: 'Si supiera cocinar, prepararía la cena',
            russian: 'Если бы я умел готовить, приготовил бы ужин',
          },
          {
            spanish: 'Si estudiaras más, aprobarías',
            russian: 'Если бы ты учился больше, сдал бы',
          },
          {
            spanish: 'Si hiciera frío, me pondría el abrigo',
            russian: 'Если бы было холодно, я бы надел пальто',
          },
          {
            spanish: 'Si viviera en España, hablaría español perfectamente',
            russian: 'Если бы я жил в Испании, говорил бы по-испански идеально',
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-3.mp3',
        transcript:
          'Si tuviera un millón de euros, viajaría por todo el mundo. Compraría una casa grande en la montaña. Si pudiera elegir cualquier profesión, sería escritor. ¿Qué harías tú si ganaras la lotería? Si fuera más joven, estudiaría medicina. Si no trabajara tanto, tendría más tiempo para mi familia.',
        questions: [
          {
            question: '¿Qué haría si tuviera un millón?',
            options: [
              'compraría un coche',
              'viajaría por el mundo',
              'estudiaría',
              'trabajaría',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Qué profesión elegiría?',
            options: ['médico', 'profesor', 'escritor', 'arquitecto'],
            correctAnswer: 2,
          },
          {
            question: '¿Qué pasaría si no trabajara tanto?',
            options: [
              'ganaría más',
              'viajaría más',
              'tendría más tiempo para la familia',
              'compraría una casa',
            ],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Si tuviera alas, volaría',
          russian: 'Если бы у меня были крылья, я бы летал',
          context: 'Фантастическое условие',
        },
        {
          spanish: 'Si lloviera, me quedaría en casa',
          russian: 'Если бы шел дождь, остался бы дома',
          context: 'Гипотетическая ситуация',
        },
        {
          spanish: 'Si fueras tú, no lo haría',
          russian: 'Будь я на твоем месте, не делал бы этого',
          context: 'Совет',
        },
        {
          spanish: 'Si pudiéramos, lo cambiaríamos todo',
          russian: 'Если бы могли, изменили бы все',
          context: 'Нереальное желание',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-3.mp3',
    readingText:
      'Las ORACIONES CONDICIONALES IRREALES (tipo II) expresan situaciones hipotéticas improbables o imposibles en el presente. Estructura: SI + Imperfecto de Subjuntivo, Condicional Simple. Ejemplos: "Si tuviera tiempo, viajaría" (но у меня нет времени сейчас). "Si fuera rico, compraría un yate" (но я не богат). IMPORTANTE: después de "si" NUNCA va Condicional, siempre Imperfecto de Subjuntivo. Este tipo de frases es esencial para expresar deseos, consejos y situaciones imaginarias.',
    duration: 34,
    order: 3,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-4',
    levelId: 'b2',
    title: 'Expresiones con Ojalá',
    description: 'Использование Ojalá + Imperfecto de Subjuntivo',
    content: {
      introduction: {
        title: 'Ojalá - выражение сильного желания',
        goals: [
          'Различать Ojalá + Presente и Ojalá + Imperfecto',
          'Выражать нереальные желания',
          'Понимать разницу в вероятности',
          'Освоить эмоциональные выражения',
        ],
        overview:
          'Ojalá + Imperfecto de Subjuntivo выражает маловероятное или невыполнимое желание (в отличие от Ojalá + Presente)',
      },
      newWords: [],
      grammar: {
        title: 'Ojalá + Presente vs Ojalá + Imperfecto',
        explanation:
          'Presente - реальное желание, Imperfecto - нереальное или маловероятное',
        examples: [
          {
            spanish: 'Ojalá llueva mañana',
            russian: 'Хоть бы завтра пошел дождь (возможно)',
          },
          {
            spanish: 'Ojalá lloviera ahora',
            russian: 'Хотел бы я, чтобы сейчас шел дождь (но не идет)',
          },
          {
            spanish: 'Ojalá venga Pedro',
            russian: 'Хоть бы Педро пришел (может прийти)',
          },
          {
            spanish: 'Ojalá fuera rico',
            russian: 'Хотел бы я быть богатым (но не являюсь)',
          },
          {
            spanish: 'Ojalá pudiera volar',
            russian: 'Хотел бы я уметь летать (невозможно)',
          },
          {
            spanish: 'Ojalá tuviera más tiempo',
            russian: 'Хотел бы я иметь больше времени (но не имею)',
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-4.mp3',
        transcript:
          'Ojalá pudiera quedarme aquí para siempre. Ojalá no tuviera que trabajar mañana. Ojalá mi madre estuviera aquí para ver esto. Ojalá hiciera mejor tiempo. Ojalá supiera hablar chino. Ojalá fuera fin de semana. Ojalá tuviéramos más vacaciones.',
        questions: [
          {
            question: '¿Qué desea la persona sobre quedarse?',
            options: [
              'quedarse hasta mañana',
              'quedarse para siempre',
              'irse pronto',
              'volver después',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Cuándo no quiere trabajar?',
            options: ['hoy', 'mañana', 'la semana próxima', 'nunca'],
            correctAnswer: 1,
          },
          {
            question: '¿Qué idioma quisiera hablar?',
            options: ['español', 'inglés', 'chino', 'francés'],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Ojalá pudiera ayudarte',
          russian: 'Хотел бы я мочь тебе помочь',
          context: 'Сожаление о невозможности',
        },
        {
          spanish: 'Ojalá estuvieras aquí',
          russian: 'Хотел бы я, чтобы ты был здесь',
          context: 'Желание присутствия',
        },
        {
          spanish: 'Ojalá no lloviera tanto',
          russian: 'Хотел бы я, чтобы не шел такой дождь',
          context: 'Недовольство погодой',
        },
        {
          spanish: 'Ojalá tuviera tu talento',
          russian: 'Хотел бы я иметь твой талант',
          context: 'Зависть/восхищение',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: true,
      },
    },
    audioUrl: '/audio/b2-4.mp3',
    readingText:
      'OJALÁ es una expresión árabe que significa "si Alá quiere". Con PRESENTE DE SUBJUNTIVO expresa deseos realizables: "Ojalá venga Juan" (может прийти). Con IMPERFECTO DE SUBJUNTIVO expresa deseos irrealizables o improbables: "Ojalá fuera rico" (но не являюсь), "Ojalá pudiera volar" (невозможно), "Ojalá estuvieras aquí" (но тебя нет). Es muy común en el habla cotidiana para expresar nostalgia, anhelo (тоска), frustración. Ejemplo literario: "Ojalá que llueva café" (canción).',
    duration: 32,
    order: 4,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-5',
    levelId: 'b2',
    title: 'Como si + Imperfecto',
    description: 'Сравнительные конструкции с como si',
    content: {
      introduction: {
        title: 'Como si - "как будто"',
        goals: [
          'Научиться использовать como si',
          'Понять, почему всегда Imperfecto',
          'Выражать ирреальные сравнения',
          'Описывать поведение и внешний вид',
        ],
        overview:
          'Como si (как будто) ВСЕГДА требует Imperfecto de Subjuntivo, даже если речь о настоящем',
      },
      newWords: [],
      grammar: {
        title: 'Como si + Imperfecto de Subjuntivo',
        explanation:
          'После como si ВСЕГДА идет Imperfecto (или Pluscuamperfecto) de Subjuntivo',
        examples: [
          {
            spanish: 'Habla como si supiera todo',
            russian: 'Он говорит, как будто знает все',
          },
          {
            spanish: 'Me mira como si fuera invisible',
            russian: 'Он смотрит на меня, как будто я невидимый',
          },
          {
            spanish: 'Gasta dinero como si fuera millonario',
            russian: 'Он тратит деньги, как будто миллионер',
          },
          {
            spanish: 'Camina como si le dolieran los pies',
            russian: 'Он идет, как будто у него болят ноги',
          },
          {
            spanish: 'Actúa como si no pasara nada',
            russian: 'Он ведет себя, как будто ничего не происходит',
          },
          {
            spanish: 'Come como si tuviera mucha hambre',
            russian: 'Он ест, как будто очень голоден',
          },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-5.mp3',
        transcript:
          'Mi jefe habla como si fuera el dueño de la empresa. María gasta dinero como si fuera rica. Los niños corren como si tuvieran mucha energía. Él me trata como si fuera un niño. Cocinas como si fueras un chef profesional. Se comporta como si no tuviera problemas.',
        questions: [
          {
            question: '¿Cómo habla el jefe?',
            options: [
              'como si fuera empleado',
              'como si fuera el dueño',
              'como si fuera rico',
              'como si fuera chef',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Cómo gasta dinero María?',
            options: [
              'como si fuera pobre',
              'como si fuera rica',
              'como si fuera chef',
              'como si fuera niña',
            ],
            correctAnswer: 1,
          },
          {
            question: '¿Cómo cocina la persona?',
            options: [
              'mal',
              'regular',
              'como si fuera chef profesional',
              'como si fuera niño',
            ],
            correctAnswer: 2,
          },
        ],
      },
      phrases: [
        {
          spanish: 'Hablas como si lo supieras todo',
          russian: 'Ты говоришь, как будто все знаешь',
          context: 'Критика',
        },
        {
          spanish: 'Trabaja como si no tuviera familia',
          russian: 'Он работает, как будто у него нет семьи',
          context: 'Описание трудоголика',
        },
        {
          spanish: 'Me tratas como si fuera tonto',
          russian: 'Ты обращаешься со мной, как будто я дурак',
          context: 'Обида',
        },
        {
          spanish: 'Vive como si cada día fuera el último',
          russian: 'Он живет, как будто каждый день - последний',
          context: 'Философия жизни',
        },
      ],
      homework: {
        vocabularyTest: true,
        listening: true,
        reading: true,
        writing: false,
      },
    },
    audioUrl: '/audio/b2-5.mp3',
    readingText:
      'COMO SI significa "как будто" y SIEMPRE exige Imperfecto de Subjuntivo (o Pluscuamperfecto). Estructura: Verbo principal + como si + Imperfecto de Subjuntivo. Ejemplos: "Habla como si fuera experto" (но он не эксперт). "Gasta como si fuera millonario" (но он не миллионер). Se usa para comparaciones irreales, a menudo con tono crítico o irónico. Muy común en el habla cotidiana: "Me miras como si no me conocieras". IMPORTANTE: no confundir con "como" simple (без si), que no lleva subjuntivo.',
    duration: 31,
    order: 5,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-6',
    levelId: 'b2',
    title: 'Verbos de petición y deseo',
    description: 'Pedir, rogar, querer que + Imperfecto de Subjuntivo',
    content: {
      introduction: {
        title: 'Peticiones y deseos en pasado',
        goals: ['Usar verbos de petición', 'Expresar deseos pasados', 'Distinguir tiempos', 'Practicar en contexto'],
        overview: 'Cuando el verbo principal está en pasado, la subordinada lleva Imperfecto de Subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'Verbos + que + Imperfecto de Subjuntivo',
        explanation: 'Pedir/rogar/querer/desear + que + Imperfecto de Subjuntivo',
        examples: [
          { spanish: 'Me pidió que viniera temprano', russian: 'Он попросил меня прийти рано' },
          { spanish: 'Quería que estudiaras más', russian: 'Я хотел, чтобы ты учился больше' },
          { spanish: 'Les rogó que lo ayudaran', russian: 'Он умолял их помочь ему' },
          { spanish: 'Deseaba que tuvieran éxito', russian: 'Он желал, чтобы они добились успеха' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-6.mp3',
        transcript: 'Mi madre me pidió que estudiara medicina. El jefe quería que trabajáramos el sábado. Te rogué que no dijeras nada. Deseaba que fueras feliz.',
        questions: [
          { question: '¿Qué le pidió la madre?', options: ['trabajar', 'estudiar medicina', 'venir', 'ayudar'], correctAnswer: 1 },
          { question: '¿Cuándo quería el jefe que trabajaran?', options: ['lunes', 'viernes', 'sábado', 'domingo'], correctAnswer: 2 },
        ],
      },
      phrases: [
        { spanish: 'Le pedí que me llamara', russian: 'Я попросил его позвонить мне', context: 'Petición pasada' },
        { spanish: 'Queríamos que vinieras con nosotros', russian: 'Мы хотели, чтобы ты пошел с нами', context: 'Deseo pasado' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-6.mp3',
    readingText: 'Los VERBOS DE PETICIÓN (pedir, rogar) y DESEO (querer, desear) requieren Imperfecto de Subjuntivo cuando están en pasado. "Me pidió que viniera" (попросил прийти). "Quería que estudiaras" (хотел, чтобы учился). Es muy común en el habla cotidiana.',
    duration: 30,
    order: 6,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-7',
    levelId: 'b2',
    title: 'Verbos de emoción en pasado',
    description: 'Alegrarse, temer, sentir + Imperfecto de Subjuntivo',
    content: {
      introduction: {
        title: 'Emociones del pasado',
        goals: ['Expresar emociones pasadas', 'Usar correctamente el subjuntivo', 'Vocabulario emocional', 'Reacciones pasadas'],
        overview: 'Verbos de emoción en pasado requieren Imperfecto de Subjuntivo en la subordinada',
      },
      newWords: [],
      grammar: {
        title: 'Emoción + que + Imperfecto de Subjuntivo',
        explanation: 'Me alegró/temí/sentí/sorprendió que + Imperfecto',
        examples: [
          { spanish: 'Me alegró que vinieras', russian: 'Я обрадовался, что ты пришел' },
          { spanish: 'Temía que no llegaras a tiempo', russian: 'Я боялся, что ты не придешь вовремя' },
          { spanish: 'Sentí que no pudieras venir', russian: 'Я пожалел, что ты не смог прийти' },
          { spanish: 'Me sorprendió que lo supieras', russian: 'Я удивился, что ты это знал' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-7.mp3',
        transcript: 'Me alegró mucho que aprobaras el examen. Temíamos que lloviera durante la boda. Sentí que estuvieras enfermo. Nos sorprendió que hablara español tan bien.',
        questions: [
          { question: '¿Qué le alegró?', options: ['que lloviera', 'que aprobaras', 'que estuvieras enfermo', 'nada'], correctAnswer: 1 },
          { question: '¿Qué temían?', options: ['el examen', 'la lluvia', 'la enfermedad', 'el español'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Me molestó que llegaras tarde', russian: 'Меня раздражало, что ты опоздал', context: 'Molestia' },
        { spanish: 'Les encantó que cantaras', russian: 'Им понравилось, что ты пел', context: 'Alegría' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-7.mp3',
    readingText: 'Los VERBOS DE EMOCIÓN en pasado (alegrarse, temer, sentir, sorprender, molestar) exigen Imperfecto de Subjuntivo: "Me alegró que vinieras", "Temí que no llegaras". Expresan reacciones emocionales a eventos pasados.',
    duration: 29,
    order: 7,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-8',
    levelId: 'b2',
    title: 'Expresiones impersonales pasadas',
    description: 'Era necesario/posible/importante que + Imperfecto',
    content: {
      introduction: {
        title: 'Construcciones impersonales en pasado',
        goals: ['Expresar necesidad pasada', 'Usar construcciones impersonales', 'Valoraciones del pasado', 'Obligaciones pasadas'],
        overview: 'Era necesario/importante/posible que + Imperfecto de Subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'Era + adjetivo + que + Imperfecto',
        explanation: 'Construcciones impersonales en pasado',
        examples: [
          { spanish: 'Era necesario que estudiaras', russian: 'Необходимо было, чтобы ты учился' },
          { spanish: 'Era importante que vinieras', russian: 'Было важно, чтобы ты пришел' },
          { spanish: 'Era posible que lloviera', russian: 'Возможно было, что пойдет дождь' },
          { spanish: 'Era mejor que no dijeras nada', russian: 'Лучше было, чтобы ты ничего не говорил' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-8.mp3',
        transcript: 'Era necesario que hiciéramos los deberes. Era importante que llegáramos a tiempo. Era posible que nevara. Era mejor que te quedaras en casa.',
        questions: [
          { question: '¿Qué era necesario?', options: ['llegar', 'hacer deberes', 'nevar', 'quedarse'], correctAnswer: 1 },
          { question: '¿Era posible que...?', options: ['lloviera', 'nevara', 'hiciera calor', 'fuera domingo'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Era urgente que lo termináramos', russian: 'Срочно нужно было закончить это', context: 'Urgencia' },
        { spanish: 'Era probable que ganaran', russian: 'Вероятно было, что они выиграют', context: 'Probabilidad' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-8.mp3',
    readingText: 'Las EXPRESIONES IMPERSONALES en pasado (era necesario, importante, posible, mejor, urgente, probable) requieren Imperfecto de Subjuntivo: "Era necesario que estudiaras", "Era mejor que vinieras".',
    duration: 31,
    order: 8,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-9',
    levelId: 'b2',
    title: 'Verbos de duda en pasado',
    description: 'Dudar, no creer, no estar seguro + Imperfecto',
    content: {
      introduction: {
        title: 'Expresar dudas sobre el pasado',
        goals: ['Expresar dudas pasadas', 'Usar no creer correctamente', 'Distinguir duda y certeza', 'Opiniones pasadas'],
        overview: 'Verbos de duda en pasado + que + Imperfecto de Subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'Duda + que + Imperfecto de Subjuntivo',
        explanation: 'Dudaba/No creía/No estaba seguro que + Imperfecto',
        examples: [
          { spanish: 'Dudaba que vinieras', russian: 'Я сомневался, что ты придешь' },
          { spanish: 'No creía que fuera posible', russian: 'Я не верил, что это возможно' },
          { spanish: 'No estaba seguro de que lo supiera', russian: 'Я не был уверен, что он это знает' },
          { spanish: 'No pensaba que tuviera razón', russian: 'Я не думал, что он прав' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-9.mp3',
        transcript: 'Dudaba que aprobaras el examen. No creíamos que fuera tan difícil. No estaba seguro de que pudiera hacerlo. No pensaban que tuviéramos tiempo.',
        questions: [
          { question: '¿De qué dudaba?', options: ['aprobar', 'venir', 'saber', 'poder'], correctAnswer: 0 },
          { question: '¿Qué no creían?', options: ['que fuera fácil', 'que fuera difícil', 'que fuera posible', 'nada'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'No creía que supiera español', russian: 'Я не верил, что он знает испанский', context: 'Incredulidad' },
        { spanish: 'Dudaba que pudiera terminar', russian: 'Я сомневался, что смогу закончить', context: 'Duda personal' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-9.mp3',
    readingText: 'Los VERBOS DE DUDA en pasado (dudar, no creer, no pensar, no estar seguro) requieren Imperfecto de Subjuntivo: "Dudaba que vinieras", "No creía que fuera cierto".',
    duration: 28,
    order: 9,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-10',
    levelId: 'b2',
    title: 'Aunque + Imperfecto',
    description: 'Concesivas con aunque en pasado',
    content: {
      introduction: {
        title: 'Oraciones concesivas en pasado',
        goals: ['Usar aunque correctamente', 'Expresar concesión', 'Distinguir indicativo y subjuntivo', 'Contextos pasados'],
        overview: 'Aunque + Imperfecto de Subjuntivo (situación hipotética) vs Indicativo (hecho real)',
      },
      newWords: [],
      grammar: {
        title: 'Aunque + Imperfecto de Subjuntivo',
        explanation: 'Subjuntivo para situaciones hipotéticas, Indicativo para hechos',
        examples: [
          { spanish: 'Aunque lloviera, saldría', russian: 'Даже если бы шел дождь, я бы вышел' },
          { spanish: 'Aunque llovía, salí', russian: 'Хотя шел дождь, я вышел (факт)' },
          { spanish: 'Aunque estuviera cansado, trabajaría', russian: 'Даже если бы был уставшим, работал бы' },
          { spanish: 'Aunque fuera rico, no cambiaría', russian: 'Даже если бы был богатым, не изменился бы' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-10.mp3',
        transcript: 'Aunque me lo pidiera de rodillas, no lo haría. Aunque tuviera todo el dinero del mundo, seguiría trabajando. Aunque hiciera frío, íbamos a la playa. Aunque no me creyeras, es verdad.',
        questions: [
          { question: '¿Qué no haría aunque se lo pidieran?', options: ['trabajar', 'ir a la playa', 'no dice', 'todo'], correctAnswer: 2 },
          { question: '¿Qué haría aunque tuviera dinero?', options: ['no trabajar', 'seguir trabajando', 'viajar', 'comprar'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Aunque quisiera, no podría', russian: 'Даже если бы хотел, не смог бы', context: 'Imposibilidad' },
        { spanish: 'Aunque me lo rogara, no iría', russian: 'Даже если бы умолял, не пойду', context: 'Negativa rotunda' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-10.mp3',
    readingText: 'AUNQUE con Imperfecto de Subjuntivo expresa concesión hipotética: "Aunque lloviera, saldría" (даже если бы...). Con Indicativo expresa hecho real: "Aunque llovía, salí" (хотя шел дождь, факт). Importante distinguir.',
    duration: 30,
    order: 10,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-11',
    levelId: 'b2',
    title: 'Para que + Imperfecto',
    description: 'Oraciones finales en pasado',
    content: {
      introduction: {
        title: 'Expresar finalidad en pasado',
        goals: ['Usar para que', 'Expresar propósito pasado', 'Distinguir para/para que', 'Construcciones finales'],
        overview: 'Para que siempre requiere subjuntivo, en pasado: Imperfecto de Subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'Para que + Imperfecto de Subjuntivo',
        explanation: 'Expresa el propósito de una acción pasada',
        examples: [
          { spanish: 'Te llamé para que vinieras', russian: 'Я позвонил, чтобы ты пришел' },
          { spanish: 'Lo hice para que entendieras', russian: 'Я сделал это, чтобы ты понял' },
          { spanish: 'Hablaba despacio para que pudiera entender', russian: 'Я говорил медленно, чтобы мог понять' },
          { spanish: 'Compré pan para que comiéramos', russian: 'Я купил хлеб, чтобы мы поели' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-11.mp3',
        transcript: 'Te escribí para que supieras la verdad. Vine temprano para que pudiéramos hablar. Lo repetí para que lo entendieras bien. Abrí la ventana para que entrara aire fresco.',
        questions: [
          { question: '¿Para qué escribió?', options: ['para saber', 'para que supiera', 'para entender', 'para venir'], correctAnswer: 1 },
          { question: '¿Para qué vino temprano?', options: ['para hablar', 'para escribir', 'para abrir', 'para repetir'], correctAnswer: 0 },
        ],
      },
      phrases: [
        { spanish: 'Lo expliqué para que lo comprendieras', russian: 'Я объяснил, чтобы ты понял', context: 'Explicación' },
        { spanish: 'Salí temprano para que no me vieran', russian: 'Я вышел рано, чтобы меня не видели', context: 'Evitar algo' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-11.mp3',
    readingText: 'PARA QUE siempre requiere subjuntivo. En pasado: "Te llamé para que vinieras" (позвонил, чтобы пришел). Expresa el propósito de una acción. No confundir con PARA + infinitivo (mismo sujeto): "Vine para hablar" (я пришел поговорить - mismo sujeto).',
    duration: 29,
    order: 11,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-12',
    levelId: 'b2',
    title: 'Antes de que + Imperfecto',
    description: 'Oraciones temporales con antes de que',
    content: {
      introduction: {
        title: 'Expresiones temporales en pasado',
        goals: ['Usar antes de que', 'Expresar anterioridad', 'Temporalidad en pasado', 'Secuencia de eventos'],
        overview: 'Antes de que siempre lleva subjuntivo, en pasado: Imperfecto',
      },
      newWords: [],
      grammar: {
        title: 'Antes de que + Imperfecto de Subjuntivo',
        explanation: 'Expresa que algo ocurrió antes que otra cosa',
        examples: [
          { spanish: 'Salí antes de que llegara', russian: 'Я ушел до того, как он пришел' },
          { spanish: 'Comí antes de que vinieras', russian: 'Я поел до того, как ты пришел' },
          { spanish: 'Lo terminé antes de que empezara la clase', russian: 'Я закончил до начала урока' },
          { spanish: 'Llamé antes de que fuera tarde', russian: 'Я позвонил, пока не было поздно' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-12.mp3',
        transcript: 'Salimos antes de que empezara a llover. Terminé el trabajo antes de que me lo pidieran. Llegamos antes de que cerraran la tienda. Hablé con él antes de que se fuera.',
        questions: [
          { question: '¿Cuándo salieron?', options: ['después de llover', 'antes de llover', 'durante la lluvia', 'nunca'], correctAnswer: 1 },
          { question: '¿Cuándo terminó el trabajo?', options: ['después', 'antes de pedirlo', 'nunca', 'tarde'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Me fui antes de que terminara la película', russian: 'Я ушел до конца фильма', context: 'Abandonar antes' },
        { spanish: 'Lo arreglé antes de que se rompiera', russian: 'Я починил до того, как сломалось', context: 'Prevención' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: true },
    },
    audioUrl: '/audio/b2-12.mp3',
    readingText: 'ANTES DE QUE siempre requiere subjuntivo: "Salí antes de que llegaras" (ушел до того, как ты пришел). En pasado usa Imperfecto de Subjuntivo. Expresa anterioridad. No confundir con ANTES DE + infinitivo (mismo sujeto).',
    duration: 28,
    order: 12,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-13',
    levelId: 'b2',
    title: 'Sin que + Imperfecto',
    description: 'Expresar acción sin que otra ocurra',
    content: {
      introduction: {
        title: 'Sin que - без того чтобы',
        goals: ['Usar sin que correctamente', 'Expresar ausencia de acción', 'Construcciones negativas', 'Contextos de secreto'],
        overview: 'Sin que siempre lleva subjuntivo para expresar que algo no ocurrió',
      },
      newWords: [],
      grammar: {
        title: 'Sin que + Imperfecto de Subjuntivo',
        explanation: 'Expresa que una acción ocurrió sin que otra ocurriera',
        examples: [
          { spanish: 'Salió sin que lo viera', russian: 'Он ушел так, что я не видел' },
          { spanish: 'Lo hice sin que nadie lo supiera', russian: 'Я сделал это так, что никто не знал' },
          { spanish: 'Entró sin que lo oyéramos', russian: 'Он вошел так, что мы не слышали' },
          { spanish: 'Pasó sin que nos diéramos cuenta', russian: 'Прошло так, что мы не заметили' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-13.mp3',
        transcript: 'Se fue sin que me despidiera de él. Lo tomó sin que nadie lo viera. Ocurrió sin que lo esperáramos. Llegó sin que lo invitáramos.',
        questions: [
          { question: '¿Cómo se fue?', options: ['con despedida', 'sin despedida', 'tarde', 'temprano'], correctAnswer: 1 },
          { question: '¿Cómo lo tomó?', options: ['abiertamente', 'en secreto', 'rápidamente', 'lentamente'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Pasó sin que me diera cuenta', russian: 'Прошло так, что я не заметил', context: 'No notar' },
        { spanish: 'Lo hizo sin que yo lo permitiera', russian: 'Он сделал без моего разрешения', context: 'Sin permiso' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-13.mp3',
    readingText: 'SIN QUE siempre requiere subjuntivo: "Salió sin que lo viera" (ушел так, что я не видел). Expresa que una acción ocurrió sin que otra ocurriera. Muy usado para expresar secreto o acción desapercibida.',
    duration: 27,
    order: 13,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-14',
    levelId: 'b2',
    title: 'A menos que/A no ser que',
    description: 'Excepciones y condiciones negativas',
    content: {
      introduction: {
        title: 'Expresar excepciones',
        goals: ['Usar a menos que', 'Expresar condiciones negativas', 'Alternativas con a no ser que', 'Excepciones en pasado'],
        overview: 'A menos que y a no ser que siempre requieren subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'A menos que + Imperfecto de Subjuntivo',
        explanation: 'Significa "если только не" o "a no ser que"',
        examples: [
          { spanish: 'No iría a menos que me invitaran', russian: 'Я бы не пошел, если только не пригласят' },
          { spanish: 'No lo haría a menos que fuera necesario', russian: 'Я бы не делал, если только не необходимо' },
          { spanish: 'No vendría a no ser que tuviera tiempo', russian: 'Я бы не пришел, если только не будет времени' },
          { spanish: 'No lo compraría a menos que estuviera barato', russian: 'Я бы не купил, если только не дешево' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-14.mp3',
        transcript: 'No saldría a menos que dejara de llover. No lo haría a menos que me pagaran bien. No iríamos a no ser que nos invitaran. No hablaría a menos que fuera importante.',
        questions: [
          { question: '¿Cuándo saldría?', options: ['si llueve', 'si deja de llover', 'nunca', 'siempre'], correctAnswer: 1 },
          { question: '¿Qué condición pone para hacerlo?', options: ['pagar bien', 'pagar mal', 'gratis', 'ninguna'], correctAnswer: 0 },
        ],
      },
      phrases: [
        { spanish: 'No lo aceptaría a menos que mejoraran la oferta', russian: 'Я бы не принял, если только не улучшат предложение', context: 'Negociación' },
        { spanish: 'No vendría a no ser que fuera urgente', russian: 'Я бы не пришел, если только не срочно', context: 'Condición necesaria' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-14.mp3',
    readingText: 'A MENOS QUE y A NO SER QUE significan "если только не" y siempre requieren subjuntivo: "No iría a menos que me invitaran" (не пошел бы, если только не пригласят). Se usan para expresar la única condición bajo la cual algo ocurriría.',
    duration: 30,
    order: 14,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-15',
    levelId: 'b2',
    title: 'Expresiones de tiempo con Imperfecto',
    description: 'Cuando, mientras, hasta que en pasado',
    content: {
      introduction: {
        title: 'Cláusulas temporales en pasado',
        goals: ['Usar cuando con subjuntivo', 'Distinguir subjuntivo e indicativo', 'Expresiones con mientras', 'Hasta que en pasado'],
        overview: 'Las expresiones temporales usan subjuntivo cuando la acción es futura respecto al pasado',
      },
      newWords: [],
      grammar: {
        title: 'Temporales + Imperfecto de Subjuntivo',
        explanation: 'Subjuntivo si la acción es futura-en-el-pasado',
        examples: [
          { spanish: 'Esperé hasta que llegara', russian: 'Я ждал, пока он не пришел' },
          { spanish: 'Le dije que cuando tuviera tiempo, me llamara', russian: 'Я сказал, чтобы позвонил, когда будет время' },
          { spanish: 'Trabajaría mientras fuera necesario', russian: 'Я бы работал, пока необходимо' },
          { spanish: 'Cuando pudiera, vendría a visitarnos', russian: 'Когда сможет, придет навестить' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-15.mp3',
        transcript: 'Me quedé hasta que terminara la película. Trabajó hasta que lo despidieron. Cuando tuviera dinero, viajaría. Mientras estuviera vivo, lucharía.',
        questions: [
          { question: '¿Hasta cuándo se quedó?', options: ['hasta el principio', 'hasta el final', 'una hora', 'no dice'], correctAnswer: 1 },
          { question: '¿Qué haría cuando tuviera dinero?', options: ['trabajar', 'viajar', 'luchar', 'quedarse'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Cuando pudiera, lo haría', russian: 'Когда смогу, сделаю', context: 'Promesa futura' },
        { spanish: 'Trabajé hasta que se hiciera de noche', russian: 'Я работал, пока не стемнело', context: 'Límite temporal' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-15.mp3',
    readingText: 'Las expresiones temporales CUANDO, MIENTRAS, HASTA QUE usan subjuntivo cuando la acción es futura respecto al momento pasado: "Le dije que cuando tuviera tiempo, viniera" (сказал, чтобы пришел, когда будет время). Si la acción ya ocurrió, indicativo: "Cuando tuvo tiempo, vino".',
    duration: 32,
    order: 15,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-16',
    levelId: 'b2',
    title: 'Expresiones de cortesía',
    description: 'Quisiera, pudiera, debiera - formas corteses',
    content: {
      introduction: {
        title: 'Formas corteses con Imperfecto',
        goals: ['Usar quisiera correctamente', 'Peticiones corteses con pudiera', 'Consejos suaves con debiera', 'Registro formal'],
        overview: 'El Imperfecto de Subjuntivo se usa para hacer peticiones muy corteses',
      },
      newWords: [],
      grammar: {
        title: 'Quisiera, pudiera, debiera',
        explanation: 'Formas corteses más suaves que quiero, puedo, debo',
        examples: [
          { spanish: 'Quisiera un café, por favor', russian: 'Я хотел бы кофе, пожалуйста' },
          { spanish: '¿Pudiera ayudarme?', russian: 'Могли бы вы помочь мне?' },
          { spanish: 'Debieras descansar más', russian: 'Тебе следовало бы больше отдыхать' },
          { spanish: 'Quisiera hablar con el gerente', russian: 'Я хотел бы поговорить с менеджером' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-16.mp3',
        transcript: 'Quisiera reservar una mesa para dos. ¿Pudiera decirme la hora? Debieras estudiar más para el examen. Quisiera saber si hay descuento. ¿Pudiera repetir, por favor?',
        questions: [
          { question: '¿Qué quisiera reservar?', options: ['un hotel', 'una mesa', 'un vuelo', 'un taxi'], correctAnswer: 1 },
          { question: '¿Para cuántos?', options: ['uno', 'dos', 'tres', 'cuatro'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Quisiera hacer una pregunta', russian: 'Я хотел бы задать вопрос', context: 'Cortesía formal' },
        { spanish: '¿Pudiera indicarme el camino?', russian: 'Могли бы вы показать дорогу?', context: 'Petición cortés' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: false, writing: true },
    },
    audioUrl: '/audio/b2-16.mp3',
    readingText: 'QUISIERA (хотел бы), PUDIERA (мог бы), DEBIERA (следовало бы) son formas corteses del Imperfecto de Subjuntivo. Más suaves que quiero, puedo, debo. Muy usadas en situaciones formales: "Quisiera hablar con usted", "¿Pudiera ayudarme?", "Debieras pensar mejor las cosas".',
    duration: 29,
    order: 16,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-17',
    levelId: 'b2',
    title: 'Construcciones con Ojalá no',
    description: 'Expresar deseos negativos',
    content: {
      introduction: {
        title: 'Deseos negativos con Ojalá',
        goals: ['Expresar lo que no queremos', 'Usar Ojalá no correctamente', 'Lamentos sobre el presente', 'Deseos de cambio'],
        overview: 'Ojalá no + Imperfecto expresa deseo de que algo no fuera cierto',
      },
      newWords: [],
      grammar: {
        title: 'Ojalá no + Imperfecto de Subjuntivo',
        explanation: 'Expresa deseo de que una situación actual no existiera',
        examples: [
          { spanish: 'Ojalá no tuviera que trabajar', russian: 'Хотел бы я не работать' },
          { spanish: 'Ojalá no lloviera tanto', russian: 'Хотел бы я, чтобы не шел такой дождь' },
          { spanish: 'Ojalá no fuera tan difícil', russian: 'Хотел бы я, чтобы не было так трудно' },
          { spanish: 'Ojalá no estuviera tan lejos', russian: 'Хотел бы я, чтобы не было так далеко' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-17.mp3',
        transcript: 'Ojalá no hiciera tanto frío. Ojalá no tuviéramos que irnos. Ojalá no fuera lunes. Ojalá no doliera tanto. Ojalá no costara tan caro.',
        questions: [
          { question: '¿Qué desea sobre el frío?', options: ['que haga frío', 'que no haga frío', 'que nieve', 'que llueva'], correctAnswer: 1 },
          { question: '¿Qué día desea que no sea?', options: ['domingo', 'lunes', 'viernes', 'sábado'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Ojalá no tuviera que decir esto', russian: 'Хотел бы я не говорить это', context: 'Lamento' },
        { spanish: 'Ojalá no estuvieras tan ocupado', russian: 'Хотел бы я, чтобы ты не был так занят', context: 'Deseo de compañía' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: false },
    },
    audioUrl: '/audio/b2-17.mp3',
    readingText: 'OJALÁ NO + Imperfecto de Subjuntivo expresa el deseo de que algo actual no fuera cierto: "Ojalá no lloviera" (хотел бы, чтобы не шел дождь - pero llueve), "Ojalá no tuviera que ir" (хотел бы не идти - pero tengo que ir). Expresa frustración o lamento.',
    duration: 27,
    order: 17,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-18',
    levelId: 'b2',
    title: 'Comparaciones irreales avanzadas',
    description: 'Como si + Pluscuamperfecto',
    content: {
      introduction: {
        title: 'Como si en contextos complejos',
        goals: ['Usar como si con diferentes tiempos', 'Expresar comparaciones complejas', 'Pluscuamperfecto de Subjuntivo', 'Matices de significado'],
        overview: 'Como si puede llevar Imperfecto o Pluscuamperfecto de Subjuntivo',
      },
      newWords: [],
      grammar: {
        title: 'Como si + Imperfecto/Pluscuamperfecto',
        explanation: 'Imperfecto para presente, Pluscuamperfecto para pasado',
        examples: [
          { spanish: 'Habla como si supiera', russian: 'Говорит, как будто знает (сейчас)' },
          { spanish: 'Habla como si hubiera estado allí', russian: 'Говорит, как будто был там (в прошлом)' },
          { spanish: 'Me trata como si fuera su hijo', russian: 'Обращается, как будто я его сын' },
          { spanish: 'Me miró como si me hubiera visto antes', russian: 'Посмотрел, как будто видел раньше' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-18.mp3',
        transcript: 'Actúa como si no hubiera pasado nada. Habla como si hubiera vivido en España. Me trata como si no me conociera. Camina como si le hubieran dado malas noticias.',
        questions: [
          { question: '¿Cómo actúa?', options: ['normal', 'como si nada', 'nervioso', 'feliz'], correctAnswer: 1 },
          { question: '¿Dónde parece que hubiera vivido?', options: ['Francia', 'España', 'Italia', 'Portugal'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Gasta como si hubiera ganado la lotería', russian: 'Тратит, как будто выиграл в лотерею', context: 'Crítica' },
        { spanish: 'Habla como si lo hubiera visto todo', russian: 'Говорит, как будто все видел', context: 'Experiencia' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-18.mp3',
    readingText: 'COMO SI + Imperfecto (presente irreal): "Habla como si supiera" (говорит, как будто знает). COMO SI + Pluscuamperfecto (pasado irreal): "Habla como si hubiera estado" (как будто был там в прошлом). El Pluscuamperfecto enfatiza la referencia al pasado.',
    duration: 31,
    order: 18,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-19',
    levelId: 'b2',
    title: 'Repaso: Imperfecto de Subjuntivo',
    description: 'Revisión completa de todos los usos',
    content: {
      introduction: {
        title: 'Repaso general del Imperfecto de Subjuntivo',
        goals: ['Repasar todos los usos', 'Practicar en contexto', 'Identificar errores comunes', 'Consolidar conocimientos'],
        overview: 'Repaso integral de todos los usos del Imperfecto de Subjuntivo estudiados',
      },
      newWords: [],
      grammar: {
        title: 'Todos los usos del Imperfecto',
        explanation: 'Resumen de contextos principales',
        examples: [
          { spanish: 'Si tuviera... haría (condicional II)', russian: 'Если бы имел... сделал бы' },
          { spanish: 'Ojalá pudiera (deseo irreal)', russian: 'Хотел бы я мочь' },
          { spanish: 'Como si fuera (comparación)', russian: 'Как будто был' },
          { spanish: 'Me pidió que viniera (petición pasada)', russian: 'Попросил прийти' },
          { spanish: 'Era necesario que (impersonal pasado)', russian: 'Необходимо было' },
          { spanish: 'Para que pudiera (finalidad)', russian: 'Чтобы мог' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-19.mp3',
        transcript: 'Si tuviera un millón, viajaría. Ojalá estuvieras aquí. Habla como si supiera todo. Me pidió que estudiara. Era importante que vinieras. Lo hice para que entendieras. Antes de que llegara, me fui.',
        questions: [
          { question: 'Identifica el uso: "Si tuviera dinero"', options: ['deseo', 'condicional', 'petición', 'comparación'], correctAnswer: 1 },
          { question: 'Identifica: "Ojalá pudiera"', options: ['deseo', 'condicional', 'petición', 'finalidad'], correctAnswer: 0 },
        ],
      },
      phrases: [
        { spanish: 'Aunque lloviera, iría', russian: 'Даже если бы шел дождь, пошел бы', context: 'Concesiva' },
        { spanish: 'Sin que nadie lo supiera', russian: 'Так что никто не знал', context: 'Modo' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-19.mp3',
    readingText: 'REPASO: Imperfecto de Subjuntivo se usa en: (1) Condicionales II: Si tuviera... (2) Deseos: Ojalá pudiera... (3) Comparaciones: Como si fuera... (4) Verbos de influencia pasados: Pidió que viniera... (5) Impersonales pasadas: Era necesario que... (6) Finales: Para que... (7) Temporales: Antes de que... (8) Cortesía: Quisiera...',
    duration: 35,
    order: 19,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'b2-20',
    levelId: 'b2',
    title: 'Práctica integrada: Imperfecto de Subjuntivo',
    description: 'Ejercicios prácticos y aplicación real',
    content: {
      introduction: {
        title: 'Aplicación práctica del Imperfecto',
        goals: ['Practicar en situaciones reales', 'Combinar diferentes usos', 'Mejorar fluidez', 'Evitar errores comunes'],
        overview: 'Práctica intensiva de todos los usos del Imperfecto de Subjuntivo en contextos reales',
      },
      newWords: [],
      grammar: {
        title: 'Práctica integrada',
        explanation: 'Combinando múltiples estructuras',
        examples: [
          { spanish: 'Si tuviera tiempo, iría aunque lloviera', russian: 'Если бы было время, пошел бы, даже если бы шел дождь' },
          { spanish: 'Ojalá pudieras venir para que nos viéramos', russian: 'Хотел бы ты прийти, чтобы увидеться' },
          { spanish: 'Me pidió que le ayudara como si fuera fácil', russian: 'Попросил помочь, как будто это легко' },
          { spanish: 'Trabajaba sin que nadie lo viera para que estuviera listo', russian: 'Работал тайно, чтобы было готово' },
        ],
      },
      listening: {
        audioUrl: '/audio/b2-20.mp3',
        transcript: 'Si pudiera elegir, viviría en España. Ojalá tuviera más vacaciones para que pudiéramos viajar. Mi jefe quería que trabajara como si no tuviera familia. Lo hice sin que nadie me ayudara, aunque fuera difícil. Era necesario que terminara antes de que llegaran.',
        questions: [
          { question: '¿Dónde viviría si pudiera?', options: ['Francia', 'España', 'Italia', 'Portugal'], correctAnswer: 1 },
          { question: '¿Para qué quiere más vacaciones?', options: ['trabajar', 'viajar', 'estudiar', 'descansar'], correctAnswer: 1 },
        ],
      },
      phrases: [
        { spanish: 'Actuaba como si no le importara, aunque por dentro sufriera', russian: 'Вел себя, как будто не важно, хотя внутри страдал', context: 'Emociones ocultas' },
        { spanish: 'Quisiera que entendieras lo importante que es para que pudieras ayudarme', russian: 'Хотел бы, чтобы ты понял, как это важно, чтобы мог помочь', context: 'Explicación compleja' },
      ],
      homework: { vocabularyTest: true, listening: true, reading: true, writing: true },
    },
    audioUrl: '/audio/b2-20.mp3',
    readingText: 'PRÁCTICA INTEGRADA: Combina diferentes usos del Imperfecto de Subjuntivo en textos complejos. Ejemplo: "Si tuviera dinero (condicional), quisiera (cortesía) viajar para que mis hijos vieran (finalidad) el mundo, como si fuéramos (comparación) millonarios, aunque no lo fuéramos (concesiva)". La clave es reconocer cada estructura y aplicarla correctamente en contexto.',
    duration: 36,
    order: 20,
    isFree: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
